import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  I as s,
  L as c,
  M as l,
  N as u,
  O as d,
  P as f,
  R as p,
  S as m,
  T as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  g as x,
  h as S,
  i as C,
  k as w,
  l as T,
  m as E,
  o as D,
  p as O,
  s as k,
  u as A,
  v as j,
  x as M,
  y as ee,
  z as N,
} from "./react.DJ2-MjhO.mjs";
import {
  $ as P,
  A as F,
  B as te,
  C as ne,
  D as re,
  E as I,
  F as L,
  G as ie,
  H as ae,
  I as oe,
  J as se,
  K as ce,
  L as le,
  M as ue,
  O as de,
  P as R,
  Q as fe,
  R as z,
  S as pe,
  T as me,
  U as he,
  V as ge,
  W as _e,
  X as ve,
  Y as ye,
  Z as be,
  _ as xe,
  a as Se,
  at as Ce,
  b as we,
  c as Te,
  ct as Ee,
  d as De,
  dt as Oe,
  et as ke,
  f as Ae,
  g as je,
  h as Me,
  i as Ne,
  it as Pe,
  j as Fe,
  k as Ie,
  l as Le,
  lt as Re,
  m as ze,
  n as Be,
  nt as Ve,
  o as He,
  ot as Ue,
  p as We,
  r as Ge,
  rt as Ke,
  s as qe,
  st as Je,
  tt as Ye,
  u as Xe,
  ut as Ze,
  v as Qe,
  w as $e,
  x as et,
  y as tt,
  z as nt,
} from "./motion.Bn11pmd7.mjs";
function rt(e) {
  return typeof e == `function`;
}
function it(e) {
  return typeof e == `boolean`;
}
function B(e) {
  return typeof e == `string`;
}
function at(e) {
  return Number.isFinite(e);
}
function ot(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !ot(e);
}
function st(e) {
  for (let t in e) return !1;
  return !0;
}
function ct(e) {
  return e === void 0;
}
function lt(e) {
  return e === null;
}
function ut(e) {
  return e == null;
}
function dt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ft(e) {
  return V(e) && rt(e.return);
}
function pt(e) {
  return V(e) && rt(e.then);
}
function mt(e) {
  return e instanceof Promise;
}
function ht(e) {
  return `url('${gt(e)}')`;
}
function gt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function _t(e, t) {
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
function vt(e, t, n) {
  if (gv.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (gv.set(e, t), t))
    .catch((t) => {
      throw (gv.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(cv), gv.set(e, r));
}
function yt(e, t) {
  lv && (_v.set(e, t), vv.has(e) && vt(e, t, `registered loader ${e}`));
}
function bt() {
  if (!lv) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(yv),
      i = r ? e.slice(yv.length) : e;
    if (!i) continue;
    vv.add(i);
    let a = _v.get(i);
    a ? vt(i, a, `registered loader ${i}`) : r && vt(i, () => import(n), n);
  }
}
function xt(e) {
  return typeof e == `object` && !!e && !S(e) && xv in e;
}
function St(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function Ct(e, t = `default`, n) {
  n && yt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !gv.has(n)) return;
      let e = gv.get(n);
      mt(e) ? s(() => e) : (i = St(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = St(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = E(function (t, r) {
      if (
        (_(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && bv !== void 0 && bv.add(n), !i)) throw s(e);
      return k(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function wt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tt(e) {
  return e === null || !(Cv in e) ? !1 : typeof e.equals == `function`;
}
function Et(e, t) {
  return e === t || (e !== e && t !== t);
}
function Dt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Et(e[r], t[r])) return !1;
  return !0;
}
function Ot(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Pt(e[r], t[r], !0)) return !1;
  return !0;
}
function kt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Et(r, t.get(n))) return !1;
  return !0;
}
function At(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Pt(r, t.get(n), !0)) return !1;
  return !0;
}
function jt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Mt(e, t) {
  let n = Sv(e);
  if (n.length !== Sv(t).length) return !1;
  for (let r of n)
    if (!wt(t, r) || (!(r === `_owner` && wt(e, `$$typeof`) && e.$$typeof) && !Et(e[r], t[r])))
      return !1;
  return !0;
}
function Nt(e, t) {
  let n = Sv(e);
  if (n.length !== Sv(t).length) return !1;
  for (let r of n)
    if (!wt(t, r) || (!(r === `_owner` && wt(e, `$$typeof`) && e.$$typeof) && !Pt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Pt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? Ot(e, t) : Dt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? At(e, t) : kt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return jt(e, t);
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
      ? Tt(e) && Tt(t)
        ? e.equals(t)
        : n
          ? Nt(e, t)
          : Mt(e, t)
      : !1;
}
function Ft(e, t, n = !0) {
  try {
    return Pt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function It(e) {
  return m.useCallback((t) => e[t], [e]);
}
function Lt({ api: e, children: t }) {
  return k(wv.Provider, { value: e, children: t });
}
function Rt() {
  return m.useContext(wv);
}
function zt({ routes: e, children: t }) {
  let n = It(e),
    r = u(() => ({ getRoute: n }), [n]);
  return k(wv.Provider, { value: r, children: t });
}
function Bt() {
  let e = Rt(),
    t = l(Tv),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return u(() => {
    if (!(!n || !a)) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function Vt() {
  let e = Bt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ht(e) {
  let t = Bt(),
    n = m.useRef(t);
  Ft(n.current, t) || !t || ((n.current = t), e(t));
}
function Ut(e) {
  let t = Rt();
  if (e) return t.getRoute?.(e);
}
function Wt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Gt(e) {
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
function Kt(e, t) {
  let n = Bt(),
    r = Ut(t) ?? n;
  return m.useMemo(() => (r ? Wt(r, e) : e), [e, r]);
}
function qt() {
  return Bt()?.pathVariables;
}
function H(e, t) {
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
function U(e, t) {
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
function Jt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Bv
  );
}
function Yt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Xt(e) {
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
function Zt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Xt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Qt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function $t(e) {
  return Vv.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function en(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Rv);
}
function tn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Lv);
}
function nn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return en(+e);
}
function rn(e) {
  for (var t = e.length - 1; t >= 0 && !nn(e[t]); t--);
  return t + 1;
}
function an(e) {
  let t = Object.keys(e);
  return ((t.length = rn(t)), t);
}
function on(e) {
  return new Uint8Array(e).toBase64();
}
function sn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function cn(e) {
  return Buffer.from(e).toString(`base64`);
}
function ln(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function un(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function dn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function fn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function pn(e, t, n) {
  return mn(JSON.parse(e), t, n);
}
function mn(e, t, n) {
  let r = fn(Yv, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === Av) return r.fromPrimitive(void 0);
    if (e === Mv) return r.fromPrimitive(NaN);
    if (e === Nv) return r.fromPrimitive(1 / 0);
    if (e === Pv) return r.fromPrimitive(-1 / 0);
    if (e === Fv) return r.fromPrimitive(-0);
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
            a[e] = r.fromArrayBuffer(Gv(t));
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
      } else if (c[0] === Iv) {
        let t = c[1];
        if (!tn(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!en(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== jv && r.set(t, e, s(n));
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
function hn(e, t, n) {
  let r = gn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function gn(e, t, n, r) {
  let i = fn(Jv, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return Av;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return Mv;
      if (f === 1 / 0) return Nv;
      if (f === -1 / 0) return Pv;
      if (f === 0 && 1 / f < 0) return Fv;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new zv(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new zv(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = _n(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new zv(
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
          m = `["URL",${Zt(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Zt(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Zt(r)},"${a}"]` : `["RegExp",${Zt(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += jv;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + Iv + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += jv));
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
            (c.push(`.get(${r ? _n(i.toPrimitive(e)) : `...`})`),
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
          m = `["ArrayBuffer","${Wv(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Zt(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new zv(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new zv(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new zv(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push($t(r)), (m += `,${Zt(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new zv(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push($t(a)),
                (m += `${Zt(a)}:${u(i.get(n, a))}`),
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
function _n(e) {
  let t = typeof e;
  return t === `string`
    ? Zt(e)
    : e === void 0
      ? Av.toString()
      : e === 0 && 1 / e < 0
        ? Fv.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function vn(e, t, n = `lazy`) {
  switch ((q.__framer_events?.push([e, t, n]), e)) {
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
function yn(e) {
  return B(e) && (e === `` || Zv.test(e));
}
function bn() {
  return { [Qv.QueryCache]: new Map(), [Qv.CollectionUtilsCache]: new Map() };
}
function xn() {
  if (!lv) return;
  if ($v !== void 0) return $v;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      $v = pn(e.text) ?? bn();
    } catch (e) {
      (($v = bn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      fv(() => {
        (e?.remove(), (e = null));
      }),
      $v
    );
  }
}
function Sn(e, t) {
  if (
    (console.warn(
      _t(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    vn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Cn(e, t) {
  let n = xn();
  return n ? n[e].has(t) : !1;
}
function wn(e, t) {
  let n = xn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function Tn(e) {
  return e?.id ?? Dv;
}
function En(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function Dn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (ry.has(n)) return ry.get(n);
    let r = new ay(n, t);
    return (ry.set(n, r), r);
  };
}
function On({ children: e, collectionUtils: t }) {
  let n = u(() => ({ get: Dn(t) }), [t]);
  return k(iy.Provider, { value: n, children: e });
}
function kn() {
  return l(iy);
}
function An(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function jn() {
  return N === void 0 ? void 0 : N;
}
function Mn() {
  let e = jn();
  return e ? oy.test(e.platform) : !1;
}
function Nn() {
  let e = jn();
  return e
    ? sy.test(e.platform)
      ? !0
      : cy.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Pn() {
  return Mn() || Nn();
}
function Fn() {
  let e = jn();
  return e ? ly.test(e.userAgent) : !1;
}
function In() {
  let e = jn();
  return e ? uy.test(e.userAgent) && dy.test(e.vendor) && !Fn() : !1;
}
function Ln() {
  let e = jn();
  return e ? fy.test(e.userAgent) && py.test(e.vendor) : !1;
}
function Rn() {
  let e = jn();
  return e ? my.test(e.userAgent) : !1;
}
function zn() {
  return typeof document == `object`;
}
function Bn() {
  let e = jn();
  if (!e) return -1;
  let t = hy.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Vn() {
  let e = jn();
  return e ? gy.test(e.userAgent) : !1;
}
function Hn() {
  return !1;
}
function Un() {
  let e = jn();
  return e && _y.test(e.userAgent) ? `tablet` : e && vy.test(e.userAgent) ? `phone` : `desktop`;
}
function Wn() {
  return Un() === `desktop`;
}
function Gn(e) {
  return Pn() ? e.metaKey : e.ctrlKey;
}
function Kn() {}
async function qn() {}
function Jn(e) {
  return typeof e == `function` ? e() : e;
}
function Yn(e, t) {
  return Sy[e] > Sy[t];
}
function Xn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Zn(e, t) {
  let n = e?.priority,
    r = Xn();
  return n === `background`
    ? (t?.() ?? An(1))
    : r?.yield
      ? r.yield(e).catch(Kn)
      : r?.postTask
        ? r.postTask(Kn, e).catch(Kn)
        : t
          ? t()
          : n === `user-blocking`
            ? Cy
            : An(0);
}
function Qn(e, t, r) {
  let i = -1 / 0,
    a,
    o = new Set();
  function s() {
    for (let e of o) e();
    o.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    zn() && (document.addEventListener(`visibilitychange`, c), n.addEventListener(`pagehide`, s));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, wy),
        e(() => {
          Zn(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return zn()
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
      o = (n ?? r === `paint`) ? u(a) : Zn(a, t);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let r = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (i = performance.now()),
          n && e.pendingPaintYieldCount--,
          a === e && e.pendingPaintYieldCount === 0 && (a = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      r.then(
        () => c(!0),
        () => c(!0)
      ),
      r
    );
  }
  function m(e, t) {
    let n = a;
    if (!n) {
      let r = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? yy : by),
        s = zn() && document.hidden ? xy : o;
      if (r - i < s) return;
      ((n = { pendingPaintYieldCount: 0 }), (a = n));
    }
    let o = e.continueAfter === `paint` && (n.pendingPaintYieldCount > 0 || r?.() !== !1);
    return p(n, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !zn() && !t ? (n ? void 0 : Cy) : n ? m(i, r) : f(i);
  }
  return h;
}
function $n(e, t = !1) {
  let r = ``;
  if (n !== void 0)
    if (t) r = n.location.search;
    else {
      let e = n.history?.state?.queryParamBackAnchorSearch;
      r = e === void 0 ? n.location.search : e === `` ? `` : `?${e}`;
    }
  return r ? er(r, e) : e;
}
function er(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Dy && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function tr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Oy)),
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
          m = mt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = mt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = mt(e) ? await e : e;
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
function nr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function rr({
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
      u = await tr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = nr(u.path, t.slug)),
    o && u.path && (u.path = $n(u.path, !0)),
    u
  );
}
async function ir({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Oy)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (B(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function ar({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === Dv) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await ir({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function or({
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
      (await ar({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await rr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Ft(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function sr() {
  return m.useContext(jy);
}
function cr() {
  return m.useContext(My);
}
function lr() {
  let e = kn(),
    { getRoute: n } = Rt(),
    { activeLocale: r, locales: i } = sr();
  return t(
    (t, a, o) => {
      if (!t || !n) return;
      let s = n(t),
        { pathVariables: c } = a;
      return dr(
        s,
        {
          routeId: t,
          pathVariables: c,
          locale: a.locale ?? r ?? void 0,
          locales: i,
          collectionUtils: e,
        },
        o
      );
    },
    [n, e, r, i]
  );
}
function ur(e, t = !0) {
  let n = lr();
  _(() => {
    if (!(!t || !Ny)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function dr(e, t, n = {}) {
  if (!Ny || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !xt(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Ey({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await fr(n, e, t, r));
    } catch {}
  }
}
async function fr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await or({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Dv),
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
function pr(e, t) {
  return e.replace(Oy, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function mr() {
  if (Py) return;
  Py = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (n.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((n.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), vn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function hr({ children: e, value: t }) {
  return k(Fy.Provider, { value: t, children: e });
}
function gr() {
  return m.useContext(Fy);
}
function _r(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function vr(e) {
  let t = Iy,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Ly;) ((n = e.next(t)), r.push(n.value), (t += Iy));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Iy }
  );
}
function yr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function br(e) {
  let { innerWidth: t, innerHeight: r } = n,
    [i, a] = yr(e.x),
    [o, s] = yr(e.y);
  return { x: a === `px` ? i : (i / 100) * t, y: s === `px` ? o : (o / 100) * r };
}
function xr(e) {
  let [t, n] = yr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Sr(e) {
  let { x: t, y: r } = br(e);
  return Math.hypot(Math.max(t, n.innerWidth - t), Math.max(r, n.innerHeight - r));
}
function Cr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function wr(e) {
  return e ? By[e] : void 0;
}
function Tr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Er(t)) {
    let { easing: e, duration: n } = vr(
      ge({ keyframes: [0, 1], ...Dr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = wr(n?.mask?.type),
    o = Cr(n, `start`, e, a),
    s = Cr({ ...Vy, mask: n.mask }, `end`, e, a);
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
function Er(e) {
  return e.type === `spring`;
}
function Dr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Or({ exit: e = Uy, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Hy;
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
    (r += Tr(`exit`, e)),
    (r += Tr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function kr() {
  fv(() => {
    I.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Hy);
      e && document.head.removeChild(e);
    });
  });
}
function Ar() {
  return !!document.startViewTransition;
}
function jr(e) {
  return new Promise((t) => {
    I.render(() => {
      (performance.mark(`framer-vt-style`), Or(e), t());
    });
  });
}
async function Mr(e, t, n) {
  if (!Ar()) {
    e();
    return;
  }
  if ((await jr(t), n?.aborted)) return;
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
      .catch(Wy),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), kr());
      })
      .catch(Wy),
    r
  );
}
function Nr() {
  let e = gr(),
    n = M(void 0);
  return (
    _(() => {
      n.current &&= (n.current(), void 0);
    }),
    t(
      (t, r, i, a) => {
        let o = _r(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return Mr(
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
function Pr(e, t) {
  fv(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Fr(e, t) {
  fv(() => {
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
function Ir(e) {
  fv(() => {
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
function Lr(e, t, n, r = d) {
  r(() => {
    let t = async (e) => (await Ey({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Rr(e) {
  let n = M(new Set());
  return (
    Lr(
      () => {
        for (let e of n.current) e();
        n.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    t(
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
function zr(e) {
  return V(e) && `routeId` in e;
}
function Br(e = n.history.state) {
  return zr(e) ? e : void 0;
}
function Vr(e) {
  return e?.entryId;
}
function Hr(e) {
  qy = e;
}
function Ur() {
  return qy;
}
function Wr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Gr(e, t) {
  return Kr(e, Vr(e) ?? Vr(t));
}
function Kr(e, t = Wr()) {
  return { ...e, entryId: t };
}
function qr(e, t) {
  (performance.mark(`framer-history-replace`), Hr(Gr(e, Br())), t && Pr(t, n.location.href));
  let r =
    !t || t === n.location.href
      ? n.History.prototype.replaceState.bind(n.history)
      : n.history.replaceState.bind(n.history);
  try {
    r(qy, ``, t);
  } catch {}
}
function Jr(e) {
  (performance.mark(`framer-history-replace`),
    Hr(Kr(e)),
    History.prototype.replaceState.call(n.history, qy, ``, void 0));
}
function Yr(e, t) {
  (performance.mark(`framer-history-push`), Hr(Kr(e)), Pr(t, n.location.href), mr());
  try {
    n.history.pushState(qy, ``, t);
  } catch {}
}
function Xr({
  disabled: e,
  routeId: t,
  initialPathVariables: r,
  initialLocaleId: i,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  d(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let s = n.location.hash ? n.location.hash.slice(1) : void 0;
    qr({
      ...Br(),
      routeId: t,
      hash: s,
      pathVariables: r,
      localeId: i,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Zr(e, r, i) {
  let a = Nr(),
    o = Rr(`framer-route-change`),
    { onHistoryTraversal: s, usesCustomScrollRestoration: c } = e,
    l = c ? `manual` : `after-transition`,
    u = M(void 0),
    d = t(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    f = t(
      async ({ state: e }) => {
        if (!zr(e)) return;
        let t = o({ popstate: !0 }),
          c = Gt();
        (t.promise.finally(c), Vr(Ur()) !== (Vr(e) ?? Vr(Br())) && s(), Hr(e));
        let {
            routeId: u,
            hash: f,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = B(f) ? f : n.location.hash ? n.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (i(
                u,
                B(m) ? m : void 0,
                _,
                n.location.pathname + n.location.search + n.location.hash,
                V(p) ? p : void 0,
                h,
                g,
                !0,
                t,
                !1
              ),
              !0);
          },
          b = l === `after-transition`;
        (await Promise.resolve(a(r.current, u, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || d();
          }),
          await t.promise,
          b && d(),
          await n.navigation?.transition?.finished.catch(cv),
          Ky(),
          Pr(n.location.href));
      },
      [r, o, s, d, i, a, l]
    ),
    p = t(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        zr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                u.current = { resolve: e, reject: t };
              }),
                (u.current = void 0));
            },
            scroll: l,
          });
      },
      [l]
    );
  _(
    () => (
      n.addEventListener(`popstate`, f),
      Jy && n.navigation.addEventListener(`navigate`, p),
      () => {
        (n.removeEventListener(`popstate`, f),
          Jy && n.navigation.removeEventListener(`navigate`, p));
      }
    ),
    [f, p]
  );
}
async function Qr(e, t, r, i) {
  if (!e.path || !t) return !1;
  let a = i + nr(pr(e.path, t), r.slug);
  return (await fetch(a, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((n.location.href = n.location.origin + a), !0)
    : !1;
}
function $r() {
  let e = kn();
  return t((t) => ei({ ...t, collectionUtils: e }), [e]);
}
async function ei({ sitePrefix: e, ...t }) {
  let n = await rr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!B(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Qr(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function ti(e) {
  let r = M(Promise.resolve()),
    i = M(),
    a = t(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let n = i.current;
        (n?.signal.addEventListener(`abort`, () => {
          n.abort(`user aborted`);
        }),
          t.intercept({ handler: () => r.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return t(
    (e, t, o) => {
      if (!Jy) {
        o?.();
        return;
      }
      ((r.current = e),
        (i.current = t),
        n.navigation.addEventListener(`navigate`, a),
        o?.(),
        e.finally(() => {
          r.current === e &&
            ((i.current = void 0), n.navigation.removeEventListener(`navigate`, a));
        }));
    },
    [a]
  );
}
function ni(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function ri(e) {
  return ni(e.trim().toLowerCase().replace(Yy, `-`));
}
function ii({ children: e, value: t }) {
  return k(Zy.Provider, { value: t, children: e });
}
function ai() {
  return l(Zy);
}
function oi(e, t) {
  let n = j(() => ({ inputs: t, result: e() }))[0],
    r = M(!0),
    i = M(n),
    a =
      r.current || (t && i.current.inputs && Ft(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    _(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function si(e, t) {
  return oi(() => e, t);
}
function ci() {
  return n.location.search;
}
function li() {
  return ``;
}
function ui(e) {
  return (
    $y.add(e),
    n.addEventListener(`popstate`, e),
    () => {
      ($y.delete(e), n.removeEventListener(`popstate`, e));
    }
  );
}
function di() {
  for (let e of $y) e();
}
function fi({ children: e, routerRenderKey: r, isNavigationCommitPending: i }) {
  let a = ai() === `preview`,
    [s, c] = j(``),
    l = M(r);
  Qy(() => {
    l.current = r;
  }, [r]);
  let u = w(ui, ci, li),
    d = ee(u),
    f = r !== ee(r),
    p = a ? s : f ? u : d,
    m = t(
      async (e) => {
        if (a) {
          o(() => {
            c((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let t = i(),
          s = r;
        if ((await Ey({ continueAfter: `paint` }), t || i() || l.current !== s)) return;
        let u = Br();
        if (!u) return;
        let d = new URL(n.location.href),
          f = e(d.searchParams).toString();
        d.search = f;
        let p = u.queryParamBackAnchorSearch,
          m = n.location.search.slice(1),
          h = p === void 0 && f !== m,
          g = p !== void 0 && f === p,
          _ = { ...u, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = d.toString();
        (h || g ? Yr(_, v) : qr(_, v), di());
      },
      [i, a, r]
    ),
    h = oi(() => ({ urlSearchParams: new URLSearchParams(p), replaceSearchParams: m }), [p, m]);
  return k(eb.Provider, { value: h, children: e });
}
function pi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = mi(e),
    [r, i] = mi(t),
    a = hi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function mi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function hi(e, t) {
  if (e === t || ((e = `/` + gi(e)), (t = `/` + gi(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = rb(e, 1 + s);
    if (n !== rb(t, 1 + s)) break;
    n === nb && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (rb(t, 1 + s) === nb) return ab(t, 1 + s + 1);
      if (s === 0) return ab(t, 1 + s);
    } else r > a && (rb(e, 1 + s) === nb ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || rb(e, s) === nb) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${ab(t, 1 + o)}`;
}
function gi(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = rb(e, o);
    else if (cb(a)) break;
    else a = nb;
    if (cb(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || rb(t, t.length - 1) !== tb || rb(t, t.length - 2) !== tb) {
            if (t.length > 2) {
              let e = ib(t, sb);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = ab(t, 0, e)), (n = t.length - 1 - ib(t, sb))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          ob && ((t += t.length > 0 ? `${sb}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${sb}${ab(e, r + 1, o)}`) : (t = ab(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === tb && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function _i(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || n.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function vi(e, t) {
  let n = e.replace(Oy, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function yi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return vi(i, r);
  }
  if (e.includes(`:`)) return vi(e, r);
  let i = t.elements?.[e];
  return i ? vi(i, r) : e;
}
function bi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
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
  let m;
  if ((a && e && (m = yi(a, e, s)), u)) return m ?? ``;
  let h = t ?? `/`;
  (r && f && (h = r[f] ?? h), i && (h = h.replace(Oy, (e, t) => String(i[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  o && (g = g.replace(Oy, (e, t) => String(o[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && o !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (lb.has(h) && n !== void 0) {
      let e = _i(d);
      g = pi(n.location.pathname, e + g);
    } else g = pi(h, g);
  else g = nr(g, p);
  let y = _ || v;
  return ((l || y) && (g = $n(g, y)), m && (g = `${g}#${m}`), g);
}
function xi() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[ub] = 1), e);
}
function Si() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[ub] = 1), e);
}
function Ci(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function wi(e) {
  return ub in e && e[ub] === 1;
}
function Ti(e) {
  return db in e.nativeEvent && e.nativeEvent[db] === 1;
}
function Ei(e) {
  let t = M(!1),
    n = M(null),
    r = w(pv, hv, fb);
  return (
    _(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = Ci(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(Si()));
        return;
      }
      if (a === `checked`) {
        let e = Si();
        ((e[db] = 1), i.dispatchEvent(e), i.dispatchEvent(Si()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(xi());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = xi();
      ((c[db] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(xi()));
        }));
    }, [r]),
    n
  );
}
function Di() {
  if (!pb) return;
  ((hb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  pb.forEach((n) => t.addEventListener(n, mb, e));
}
function Oi() {
  return (
    _(() => {
      if (!hb || !pb) return;
      let e = { capture: !0 },
        t = document.body;
      (pb.forEach((n) => t.removeEventListener(n, mb, e)),
        (pb = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ki(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Ai(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function ji() {
  ((Fb = new Pb()), Fb.render.markStart());
}
function Mi() {
  (f(() => {
    Fb?.useInsertionEffects.markRouterStart();
  }, []),
    d(() => {
      Fb?.useLayoutEffects.markRouterStart();
    }, []),
    _(() => {
      Fb?.useEffects.markRouterStart();
    }, []));
}
function Ni() {
  (f(() => {
    (Fb?.render.markEnd(), Fb?.useInsertionEffects.markStart());
  }, []),
    d(() => {
      if ((Fb?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Ib = !0;
        return;
      }
      I.read(() => {
        (Fb?.browserRendering.requestAnimationFrame.markStart(),
          Fb?.unattributedHydrationOverhead.measure());
      });
    }, []),
    _(() => {
      (Fb?.useEffects.markStart(),
        Fb?.browserRendering.hasStarted ||
          (Fb?.mutationEffects.measure(), Fb?.useEffects.markAreSynchronous()));
    }, []));
}
function Pi() {
  (f(() => {
    Fb?.useInsertionEffects.markEnd();
  }, []),
    d(() => {
      (Fb?.useLayoutEffects.markEnd(),
        !(Ib || document.visibilityState !== `visible`) &&
          I.read(() => {
            (Fb?.browserRendering.requestAnimationFrame.markEnd(),
              Ey().then(() => {
                Fb?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    _(() => {
      Fb?.useEffects.markEnd();
    }, []));
}
function Fi() {
  return (Ni(), null);
}
function Ii() {
  return (Pi(), null);
}
function Li(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return m.isValidElement(e) ? m.cloneElement(e, n) : k(e, { ...n });
}
function Ri() {
  return Bb;
}
function zi(e) {
  if (Vb?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Hi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = Hi(t),
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
    Vb = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Vb.pathRoutes,
    paths: Vb.paths,
    pathRoutesLocalized: Vb.pathRoutesLocalized,
    pathsLocalized: Vb.pathsLocalized,
  };
}
function Bi(e, t, n = !0, r = Ri()) {
  return Vi(e, t, r, n);
}
function Vi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = zi(e),
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
      let e = Ui(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ui(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ui(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ui(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Hi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ui(e, t) {
  let n = [],
    r = Wi(t).replace(Oy, (e, t) => (n.push(t), `([^/]+)`)),
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
function Wi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Gi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Ki(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Gi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function qi(e, t) {
  let n = e.toLowerCase(),
    r = Ki(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Ji(e) {
  if (n === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in n)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let r = t.find((t) => t.name === e);
  if (r) return { name: r.name, description: r.description };
}
function Yi() {
  let e = Ji(`abtests`);
  return new URLSearchParams(e?.description);
}
function Xi(e, t, n) {
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
function Zi(e, t) {
  for (let [n, r] of t) Xi(e, n, r);
}
function Qi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function $i(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function ea(e, t) {
  if (n === void 0) return t;
  let r = t;
  if (t) {
    $i(e, t);
    let n = e[t]?.abTestingParentId;
    n && (r = n);
  }
  return (Zi(e, Yi()), Qi(e), r);
}
function ta(e) {
  (_(() => {
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
function na(e, ...t) {
  Hb.has(e) || (Hb.add(e), console.warn(e, ...t));
}
function ra(e, t, n) {
  na(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ia(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Gb in e &&
    e[Gb] instanceof Function &&
    Kb in e &&
    e[Kb] instanceof Function
  );
}
function aa(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Wb(r);
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
function oa(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function sa(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function ca(e) {
  return Math.round(e * 2) / 2;
}
function la(e, t) {
  return { x: e, y: t };
}
function ua(e, t, n, r = !1) {
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
function da(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function fa(e) {
  let t = pa(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function pa(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ma(e, t, n) {
  return (
    (Xb.rgb_r = e / 255),
    (Xb.rgb_g = t / 255),
    (Xb.rgb_b = n / 255),
    Xb.rgbToHsluv(),
    { h: Xb.hsluv_h, s: Xb.hsluv_s, l: Xb.hsluv_l }
  );
}
function ha(e, t, n, r = 1) {
  return (
    (Xb.hsluv_h = e),
    (Xb.hsluv_s = t),
    (Xb.hsluv_l = n),
    Xb.hsluvToRgb(),
    { r: Xb.rgb_r * 255, g: Xb.rgb_g * 255, b: Xb.rgb_b * 255, a: r }
  );
}
function ga(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function _a(e, t, n) {
  return {
    r: da(e) ? wa(e, 255) * 255 : 0,
    g: da(t) ? wa(t, 255) * 255 : 0,
    b: da(n) ? wa(n, 255) * 255 : 0,
  };
}
function va(e, t, n, r) {
  let i = [
    Da(Math.round(e).toString(16)),
    Da(Math.round(t).toString(16)),
    Da(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ya(e, t, n) {
  let r,
    i,
    a = wa(e, 255),
    o = wa(t, 255),
    s = wa(n, 255),
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
function ba(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function xa(e, t, n) {
  let r, i, a;
  if (((e = wa(e, 360)), (t = wa(t * 100, 100)), (n = wa(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ba(s, o, e + 1 / 3)), (i = ba(s, o, e)), (a = ba(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Sa(e, t, n) {
  ((e = wa(e, 255)), (t = wa(t, 255)), (n = wa(n, 255)));
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
function Ca(e, t, n) {
  ((e = wa(e, 360) * 6), (t = wa(t * 100, 100)), (n = wa(n * 100, 100)));
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
function wa(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Ta(e) && (e = `100%`);
    let t = Ea(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ta(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Ea(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Da(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Oa(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Jb[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Zb.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Zb.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Zb.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: fa(r[2] ?? ``), l: fa(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Zb.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: fa(r[2] ?? ``),
              l: fa(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Zb.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: fa(r[2] ?? ``), v: fa(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Zb.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: fa(r[2] ?? ``),
                  v: fa(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Zb.hex8.exec(t))
                ? {
                    r: ka(r[1] ?? ``),
                    g: ka(r[2] ?? ``),
                    b: ka(r[3] ?? ``),
                    a: Aa(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Zb.hex6.exec(t))
                  ? {
                      r: ka(r[1] ?? ``),
                      g: ka(r[2] ?? ``),
                      b: ka(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Zb.hex4.exec(t))
                    ? {
                        r: ka(`${r[1]}${r[1]}`),
                        g: ka(`${r[2]}${r[2]}`),
                        b: ka(`${r[3]}${r[3]}`),
                        a: Aa(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Zb.hex3.exec(t))
                      ? {
                          r: ka(`${r[1]}${r[1]}`),
                          g: ka(`${r[2]}${r[2]}`),
                          b: ka(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ka(e) {
  return parseInt(e, 16);
}
function Aa(e) {
  return ka(e) / 255;
}
function ja(e) {
  let t = Qb.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Ma(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Na({ r: e, g: t, b: n, a: r }) {
  return { r: Ma(e), g: Ma(t), b: Ma(n), a: r };
}
function Pa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Fa({ r: e, g: t, b: n, a: r }) {
  return { r: Pa(e), g: Pa(t), b: Pa(n), a: r };
}
function Ia({ r: e, g: t, b: n, a: r }) {
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
function La(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ra({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = La(e),
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
function za(e) {
  return nx(tx(e));
}
function Ba(e) {
  return ex($b(e));
}
function Va(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Wa({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ha(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Wa(e)
              : Ga(e)),
    i
  );
}
function Ha(e) {
  let t = Oa(e);
  if (t) return t.format === `hsl` ? Ga(t) : t.format === `hsv` ? Ua(t) : Wa(t);
}
function Ua(e) {
  let t = Ca(e.h, e.s, e.v);
  return { ...ya(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ka(e.a) };
}
function Wa(e) {
  let t = _a(e.r, e.g, e.b);
  return { ...ya(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ka(e.a) };
}
function Ga(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = da(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = da(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = pa(e.s)),
    (r = da(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = pa(e.l)),
    (i = xa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Ka(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function qa() {
  return q.location.origin === `https://screenshot.framer.invalid`;
}
function Ja({ children: e }) {
  if (l(gx).top) return k(T, { children: e });
  let n = M({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = M({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = M(new Set()).current,
    a = M({
      getLayoutId: t(({ id: e, name: t, duplicatedFrom: a }) => {
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
            H(!!c, `duplicatedId must be defined`);
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
          { layoutId: m, value: h } = Ya(p, (n.current.count[o][p] ?? -1) + 1, i);
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
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return k(gx.Provider, { value: a, children: e });
}
function Ya(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Xa({ enabled: e = !0, ...t }) {
  let n = l(gx),
    r = u(() => ({ ...n, enabled: e }), [e]);
  return k(gx.Provider, { ...t, value: r });
}
function Za(e) {
  let t = M(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Qa(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${$a(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return A(`div`, {
    style: vx,
    children: [
      k(`div`, { className: `text`, style: bx, children: r }),
      i && k(`div`, { className: `text`, style: xx, children: i }),
    ],
  });
}
function $a(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function eo() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function to() {
  let [e] = j(() => eo());
  return e;
}
function no(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function ro(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Nx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function io(e, t) {
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
function ao(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Px) continue;
    let n = io(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${io(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function oo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Mx) {
    let n = io(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function so(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = oo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: ao(n, t, ro(t.pixelWidth, t.pixelHeight)) };
}
function co() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ht(kx.imagePlaceholderSvg),
  };
}
function lo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function uo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function fo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...jx,
    objectPosition: uo(e.positionX, e.positionY),
    objectFit: lo(e.fit),
  };
}
function po(e) {
  let n = m.useRef(e ? `auto` : `async`),
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
function mo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = kx.useImageSource(e, t, n),
    s = fo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = po(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : so(e.nodeFixedSize, e, o);
  return k(`img`, {
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
function ho({ image: e, containerSize: t, nodeId: n }) {
  let r = m.useRef(null),
    i = kx.useImageElement(e, t, n),
    a = fo(e);
  return (
    m.useLayoutEffect(() => {
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
    k(`div`, { ref: r, style: { display: `contents`, ...jx } })
  );
}
function go({ nodeId: e, image: t, containerSize: n }) {
  let r = m.useRef(null),
    i = kx.useImageSource(t, n, e);
  return (
    m.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = fo(t);
      kx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    k(`div`, { ref: r, style: { display: `contents`, ...jx } })
  );
}
function _o({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (B(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = at(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = ca(e * (t.pixelWidth / 2)),
        s = kx.useImageSource(t, n);
      ((r = {
        ...Fx,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: uo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? kx.canRenderOptimizedCanvasImage(kx.useImageSource(t))
            ? k(go, { image: t, ...n })
            : k(ho, { image: t, ...n })
          : k(mo, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? Fx : (r ?? { ...Fx, ...co() });
  return i
    ? k(R.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : k(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function vo(e, t, n = !0) {
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
function yo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...jx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), k(R.div, { style: n }))
    : (vo(e, n, !1), k(R.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function bo(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function xo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Lx.isImageObject(t)) return;
  let r = null;
  if (((r = B(n) ? { alt: ``, src: n } : Wb.get(t, null)), Lx.isImageObject(r))) return bo(r, e);
}
function So(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Co(e) {
  return typeof e != `string` && typeof e != `number`;
}
function wo(e) {
  return e != null && typeof e != `boolean` && !So(e);
}
function W(e) {
  return Number.isFinite(e);
}
function To(e) {
  return (Math.PI / 180) * e;
}
function Eo(e) {
  return ct(e) ? !1 : e === 2 || e === 5;
}
function Do(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Oo(e, t, n, r) {
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
      if (!r) return ko(e);
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
function ko(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function Ao(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Oo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Oo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function jo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Oo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Oo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Mo(e, t, n, r, i) {
  let a = jo(W(e) ? e : Hx, n, r, i),
    o = Ao(W(t) ? t : Ux, n, r, i);
  return (
    W(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (W(n.left) && W(n.right)
        ? (o = a / n.aspectRatio)
        : (W(n.top) && W(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function No(e, t) {
  return !W(e) || !W(t) ? null : e + t;
}
function Po(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Fo(e) {
  return !e._constraints || Po(e) ? !1 : e._constraints.enabled;
}
function Io(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    W(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    W(n) && W(r) ? { width: n, height: r } : null
  );
}
function Lo(e) {
  let t = Io(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return W(n) && W(r) ? { x: n, y: r, ...t } : null;
}
function Ro(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Fo(e) || r) return Lo(e);
  let i = zo(e),
    a = Bo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Vx.toRect(i, o, null, n, null);
}
function zo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Bx.quickfix({
      left: W(t),
      right: W(n),
      top: W(r),
      bottom: W(i),
      widthType: Do(c),
      heightType: Do(l),
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
function Bo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Vo() {
  return m.useContext(Wx).parentSize;
}
function Ho(e) {
  return typeof e == `object`;
}
function Uo(e) {
  return Ho(e) ? e.width : e;
}
function Wo(e) {
  return Ho(e) ? e.height : e;
}
function Go(e, t) {
  return k(Gx, { parentSize: t, children: e });
}
function Ko(e) {
  return Ro(e, Vo(), !0);
}
function qo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Jo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Yo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? R[e] : R.div;
}
function Xo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Zo(e, t, n = qx) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Jx) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Jx = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Jx;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Qo() {
  return qa() ? Y.preview : Y.current();
}
function $o(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function es(e) {
  return e !== _S && e !== vS;
}
function ts(e) {
  for (let t in e) if (es(t) && e?.[t] === !0) return !0;
  return !1;
}
function ns(e, t, n, r, i) {
  let a = m.useRef(null),
    o = m.useCallback(
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
    s = m.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !ts(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = m.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (ts(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return m.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function rs(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return is(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return as(r);
    case `lower-roman`:
    case `upper-roman`:
      return ss(r);
    default:
      return is(r);
  }
}
function is(e) {
  return String(e).length;
}
function as(e) {
  let t = 1;
  for (; os(t) < e;) t++;
  return t;
}
function os(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function ss(e) {
  let t = 0;
  for (let n of ES) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function cs(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function ls(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function us() {
  return Y.current() === Y.preview ? BS.value : zS.value;
}
function ds(e) {
  return Qx(e, us, `framer-lib-combinedCSSRules`);
}
function fs(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function ps(e, t) {
  let n = {};
  return (
    Y.current() === Y.canvas &&
      fs(n, VS ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function ms(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function hs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = m.Children.map(t, (e) =>
        m.isValidElement(e) ? m.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function gs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function _s(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: d } = l(gx);
  return u(() => {
    if (!d) return e.layoutId;
    let l = t || e.layoutId;
    if (!l && (s || !i || o)) return;
    let u = l || c({ id: i, name: r, duplicatedFrom: a });
    if (u) return n ? `${u}-${n}` : u;
  }, [d]);
}
function vs() {
  let [e, t] = m.useState(0);
  return m.useCallback(() => t((e) => e + 1), []);
}
function ys(e) {
  let t = vs();
  _(() => {
    let n = e?.current;
    if (n)
      return (
        WS?.observeElementWithCallback(e.current, t),
        () => {
          WS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function bs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(GS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(xs)
    .map(Ss);
}
function xs(e) {
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
function Ss(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(xs);
  return t ? Ss(t) : e;
}
function Cs(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = l(HS),
    u = Y.current() === Y.canvas;
  Qy(() => {
    !u ||
      c ||
      s ||
      (t.current && i && a && o && kx.queueMeasureRequest(ms(i), t.current, n(t.current)));
  });
}
function ws(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && kx.queueMeasureRequest(ms(t.id), t, bs(t));
}
function Ts(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  JS && t && (e.translateZ = KS);
}
function Es(e) {
  ((e.willChange = `transform`), Ds(e, !0));
}
function Ds(e, t) {
  let n = Y.current() === Y.canvas;
  if (!JS || !n) return;
  let r = (B(e.transform) && e.transform) || ``;
  t ? r.includes(qS) || (e.transform = r + qS) : (e.transform = r.replace(qS, ``));
}
function Os(e, t, n, r = !0) {
  if (!e) return;
  let i = Sx(e.style),
    a = n || i[t],
    o = () => {
      ks(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function ks(e) {
  return B(e) || at(e) || lt(e);
}
function As(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function js(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  As(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ms(e, t) {
  let n = [e, t];
  return QS.test(e) ? e : js(1e3, $S, n, () => ZS.multiplyAlpha(e, t));
}
function Ns(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ms(e.value, t) }))
  );
}
function Ps(e, t) {
  let n = 0;
  return (
    Ns(e, t).forEach((e) => {
      n ^= XS(e.value) ^ e.position;
    }),
    n
  );
}
function Fs(e) {
  return e && eC.every((t) => t in e);
}
function Is(e) {
  return e && tC.every((t) => t in e);
}
function Ls({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || ax(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = Wb.get(e, null)),
      typeof e == `string` || ax(e)
        ? (n.background = e)
        : rC.isLinearGradient(e)
          ? (n.background = rC.toCSS(e))
          : aC.isRadialGradient(e)
            ? (n.background = aC.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Rs(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function zs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Bs(e) {
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
    Fe(n)
      ? (t.cornerShape = _e(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    e._border?.borderWidth || G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    Ls(e, t),
    t
  );
}
function Vs(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Sx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Hs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (sC.has(t)) return `pointer`;
}
function Us(e) {
  return Ws(e) ? !0 : e.style ? !!Ws(e.style) : !1;
}
function Ws(e) {
  return cC in e && (e[cC] === `scroll` || e[cC] === `auto`);
}
function Gs(e) {
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
    m = nt(e.minWidth),
    h = nt(e.minHeight),
    g = nt(e.maxWidth),
    _ = nt(e.maxHeight);
  return {
    top: nt(n),
    left: nt(t),
    bottom: nt(r),
    right: nt(i),
    width: nt(a),
    height: nt(o),
    size: nt(l),
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
function Ks(e) {
  let t = l(HS),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Gs(e),
    s = Ko(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Vs(e) && !e.__fromCanvasComponent && !Us(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (c.pointerEvents = `none`);
  let f = m.Children.count(e.children) > 0 &&
      m.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Bs(e);
  (a === void 0 && !i && (Rs(p) || (c.width = lC.width), zs(p) || (c.height = lC.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let h = {};
  (Fo(o) &&
    s &&
    !qo(e) &&
    (h = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, f, r, p, h, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    YS.applyWillChange(e, c, !0));
  let g = c;
  c.transform || (g = { x: 0, y: 0, ...c });
  let _ = eo();
  return (
    e.positionSticky
      ? (!_ || kx.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = kx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function qs(e) {
  let t = {};
  for (let n in e)
    (ue(n) || wx(n)) && !uC.has(n)
      ? (t[n] = Sx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Sx(e)[n] != `boolean` && !e.transition && (t.transition = Sx(e)[n]));
  return t;
}
function Js(e) {
  return `data-framer-name` in e;
}
function Ys(e, t, n, r) {
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
function Xs(e) {
  return k(R.div, { layoutId: pC, style: gC, children: e.children });
}
function Zs(e, t) {
  rt(e) ? e(t) : Qs(e) && (e.current = t);
}
function Qs(e) {
  return V(e) && `current` in e;
}
function $s(e) {
  return Qs(e) && e.current !== null;
}
function ec() {
  let e = Za(() => new Set()),
    t = Za(() => new Map());
  return Za(() => (n, r) => ({
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
function tc(e) {
  let t = M(null),
    n = ec();
  return Za(() => (Qs(e) ? n(e) : rt(e) ? n(t, e) : n(t)));
}
function nc(e, t, n) {
  let r = M(),
    i = M();
  (oi(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function rc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new _C({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function ic(e, t, n) {
  let r = Za(() => `${n.rootMargin}`),
    i = l(vC),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  nc(
    e,
    (e) => {
      if (a && e !== null) return rc(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function ac(e, t, n) {
  let r = m.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  yC(
    e,
    m.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = sc(e, o?.y ?? 0);
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
    { threshold: bC, rootMargin: s, enabled: i ?? !0 }
  );
}
function oc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, q.innerHeight);
}
function sc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && oc(t, e) >= r;
}
function cc() {
  return l(wC);
}
function lc() {
  return new Map();
}
function uc() {
  return Za(lc);
}
function dc(e, t = []) {
  let { register: n, deregister: r } = l(TC);
  _(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function fc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function pc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (W(t.originX) && (r.originX = t.originX),
      W(t.originY) && (r.originY = t.originY),
      W(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (W(n.originX) && (r.originX = n.originX),
      W(n.originY) && (r.originY = n.originY),
      W(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function mc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function hc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return jC.PushLeft;
    case `left`:
      return jC.PushRight;
    case `bottom`:
      return jC.PushUp;
    case `top`:
      return jC.PushDown;
  }
}
function gc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return jC.OverlayLeft;
    case `left`:
      return jC.OverlayRight;
    case `bottom`:
      return jC.OverlayUp;
    case `top`:
      return jC.OverlayDown;
  }
}
function _c(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return jC.FlipLeft;
    case `left`:
      return jC.FlipRight;
    case `bottom`:
      return jC.FlipUp;
    case `top`:
      return jC.FlipDown;
  }
}
function vc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return bc(e, t.transition, t.component);
    case `removeOverlay`:
      return xc(e);
    case `add`:
      return Sc(e, t.key, t.transition, t.component);
    case `remove`:
      return Tc(e);
    case `update`:
      return yc(e, t.key, t.component);
    case `back`:
      return Cc(e);
    case `forward`:
      return wc(e);
    default:
      return;
  }
}
function yc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function bc(e, t, n) {
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
function xc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Sc(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? Ac(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Oc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Ec(e, t, c),
    p = kc(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function Cc(e) {
  let t = { ...e.containers },
    n = Tc(e);
  if (n) return ((n.containers = t), n);
}
function wc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Sc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Tc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Dc(e, r, n),
    u = kc(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function Ec(e, t, n) {
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
function Dc(e, t, n) {
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
function Oc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function kc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = jc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Ac(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function jc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Mc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Mc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Mc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Mc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Mc(e, t, n) {
  let r = {},
    i = {};
  return (
    NC.forEach((e) => {
      ((r[e] = OC[e]), (i[e] = { ...n, from: OC[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Sx(OC)[a]}%` : Sx(OC)[a];
        ((Sx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Nc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Pc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Fc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : LC;
}
function Ic({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Lc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Rc(e, t) {
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
function zc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Bc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Vc(e, t) {
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
function Hc(e, t) {
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
  return LC;
}
function Uc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Wc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Gc(e) {
  return m.Children.map(e.component, (t) => {
    if (!wo(t) || !Co(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      m.cloneElement(t, n)
    );
  });
}
function Kc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function qc(e, t) {
  let n = Ue(),
    r = be();
  return k(IC, {
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
function Jc(e) {
  return V(e) || rt(e);
}
function Yc(e) {
  return !!e && BC in e && e[BC] === !0;
}
function Xc(e) {
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
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return ct(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && Zc(t, e.controls), t);
      }
      case `array`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
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
function Zc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!ct(i) || Yc(r)) continue;
    let a = Xc(r);
    ct(a) || (e[n] = a);
  }
}
function Qc(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function $c(e, t) {
  Jc(e) && Zc(Qc(e), t);
}
function el(e, t) {
  Object.assign(e, { [VC]: t });
}
function tl(e, t, n) {
  (Object.assign(e, { propertyControls: t }), $c(e, t), n !== void 0 && el(e, n));
}
function nl(e) {
  return e.propertyControls;
}
function rl(e) {
  return qC in e;
}
function il(e, t) {
  if (!rl(e)) return;
  let n = Wb.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function al(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function ol(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function sl(e, t) {
  let n = [];
  (W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...al(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function cl(e, t) {
  W(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function ll(e, t) {
  (cl(e, t), sl(e, t));
}
function ul(e, t) {
  let n,
    r = (...r) => {
      (q.clearTimeout(n), (n = q.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      q.clearTimeout(n);
    }),
    r
  );
}
function dl(...e) {
  return e.filter(Boolean).join(` `);
}
function fl(e) {
  if (e.startsWith(QC)) return e.substr($C);
}
function pl(e, t, n) {
  let r = i.map(e, (e) => (S(e) ? c(e, t) : e));
  return n ? r : k(T, { children: r });
}
function ml(e) {
  let t = Za(() => hl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function hl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = gl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = gl(t)));
    },
    r = !1;
  function a(a, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (S(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = rt(o) ? o(e.props) : o;
          return c(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return k(T, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function gl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Zs(n, e), Zs(t, e));
  };
}
function _l(e, t, n, r, i, a, o, s) {
  let c = m.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !m.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !xl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = bl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = bl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = k(
        tw.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = yl(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = k(
          `div`,
          { className: `${nw} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    H(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, k(`div`, { className: rw }, `property-overrides-separator`)]
  );
}
function vl(e) {
  return e.split(`-`)[2];
}
function yl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${vl(a)}`);
  }
  return r;
}
function bl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function xl(e, t) {
  for (let n of Object.keys(t)) if (!Ft(e[n], t[n], !0)) return !0;
  return !1;
}
function Sl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Cl(e) {
  return m.forwardRef(({ optimized: t, ...n }, r) => {
    let i = m.useContext(ew),
      a = m.useContext(tw)?.variants,
      o = n[dw];
    o && !zn() && lw.setAll(o, a, t ? n : null, i);
    let s = pw(n);
    return k(e, { ref: r, ...n, ...s });
  });
}
function wl(e) {
  return B(e) || Array.isArray(e);
}
function Tl(e) {
  return e in gw;
}
function El(e, t) {
  let n = Za(() => ({ values: hw(t ? e : void 0) }));
  return (
    m.useEffect(() => {
      if (!t)
        for (let e of mw) {
          let t = gw[e];
          ct(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Dl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: r,
    loopRepeatType: i,
    loop: a,
    loopPauseOffscreen: s,
  },
  c
) {
  let l = Ce(),
    d = Za(hw),
    f = M(!1),
    p = bw(),
    m = M(null),
    h = t(async () => {
      if (!a) return;
      let e = r || void 0,
        t = f.current && i === `mirror`,
        n = t ? gw : a,
        o = t ? a : gw;
      return (
        (f.current = !f.current),
        (m.current = Promise.all(
          mw.map((t) => {
            if (!(l && t !== `opacity`))
              return (
                d[t].jump(o[t] ?? gw[t]),
                new Promise((r) => {
                  let i = { ...e, onComplete: () => r() },
                    a = n[t] ?? o[t];
                  typeof a == `number` && pe(d[t], a, i);
                })
              );
          })
        )),
        m.current
      );
    }, [a, i, r, l]),
    [g, v] = j(!1),
    y = M(!1),
    b = t(async () => {
      !e || !y.current || (await h(), await p(n ?? 0), b());
    }, [h, p, e, n]),
    x = t(() => {
      y.current || ((y.current = !0), o(() => v(!0)), b());
    }, [b]),
    S = t((e = !0) => {
      (mw.forEach((e) => {
        d[e].stop();
      }),
        mw.forEach((e) => {
          d[e].set(gw[e]);
        }),
        (f.current = !1),
        e && ((y.current = !1), o(() => v(!1))));
    }, []),
    C = e && a,
    w = t(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (_(() => {
    if (C)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [C, w]),
    _(() => {
      (C && s) || (C ? x() : S());
    }, [x, S, s, C]),
    _(() => () => S(), [S]));
  let T = M(!1),
    E = t(async () => {
      m.current && (await m.current, !T.current && S());
    }, [S]);
  yC(
    c,
    t(
      (e) => {
        e.isIntersecting ? ((T.current = !0), x()) : ((T.current = !1), E());
      },
      [x, E]
    ),
    { enabled: C && s }
  );
  let D = g || !s;
  return u(() => ({ values: d, style: C && D ? _w : vw }), [C, D]);
}
function Ol(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function kl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = m.useRef(null),
    c = Ce(),
    u = m.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Ol(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: d } = Je(),
    f = Re(d, u),
    p = ke(a && s.current === null ? `hidden` : n),
    h = ke(0),
    g = l(vC);
  return (
    nc(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = rc(g, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            I.update(() => {
              (f.set(u(d.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Ht(() => {
      o && f.set(0);
    }),
    { values: { y: c || !o ? h : f }, style: o ? { ..._w, visibility: p } : vw }
  );
}
function Al(e) {
  return typeof e == `object` && !!e;
}
function jl(e) {
  if (Al(e)) return e?.transition;
}
function Ml(e, t, n, r, i, a) {
  let o = jl(e);
  return Promise.all(
    mw.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Al(e) ? (e?.[s] ?? gw[s]) : gw[s];
          if ((Fe(u) && (u = u.get()), !at(u))) return c();
          let d = Ze.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (B(i) && !l?.hasAnimated && q.MotionHandoffAnimation) {
            let e = q.MotionHandoffAnimation(i, s, I);
            e && (f = e);
          }
          a ? l.set(u) : pe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Nl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = Ke(),
    g = M({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Za(() => {
      let e = d ?? c;
      if (!V(e)) return { values: hw() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        at(r) && (t[n] = r);
      }
      return { values: hw(t) };
    });
  nc(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = Ze.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!Tl(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, at(t) ? t : gw[e]);
        }
      }
    },
    [f]
  );
  let v = Ce();
  nc(o, (e) => {
    if (!s) {
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
            Ml(f, _, v, o, l).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              Ml(p, _, v, o, l)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Ft(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      Ml(f, _, v, o, l, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return u(() => ({ values: _.values, style: y ? _w : vw }), [y]);
}
function Pl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Fl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Pl(o.current, document.documentElement) - Cw - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Il(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Ll(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Vt();
  m.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return te((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Il(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < ww) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Rl(e, t, n) {
  let r = Fl(e, t),
    i = [...Ew],
    a = r[0];
  if (!at(a)) return Dw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!at(e)) return Dw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function zl(e) {
  return {
    x: e?.x ?? gw.x,
    y: e?.y ?? gw.y,
    scale: e?.scale ?? gw.scale,
    opacity: e?.opacity ?? gw.opacity,
    transformPerspective: e?.transformPerspective ?? gw.transformPerspective,
    rotate: e?.rotate ?? gw.rotate,
    rotateX: e?.rotateX ?? gw.rotateX,
    rotateY: e?.rotateY ?? gw.rotateY,
    skewX: e?.skewX ?? gw.skewX,
    skewY: e?.skewY ?? gw.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Bl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return m.useMemo(
    () => ({
      initial: r ?? zl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? zl({ opacity: t }),
      exit: i ?? zl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Vl(e, t) {
  let n = Ce(),
    r = Bl(e),
    i = e.styleAppearEffectEnabled,
    a = El(i ? r.initial : r.animate, i),
    o = m.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Vt(),
    c = m.useRef(),
    l = m.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = Ze.get(t.current);
      c.current = Promise.all(
        mw.map((e) => {
          s && a.values[e].set(r.initial[e] ?? gw[e]);
          let t = o[e] ?? gw[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (at(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && pe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  ac(
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
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    m.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return te((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Rl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = he(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Sx(r)[u];
        d && l(d);
      });
    }, [s, f]),
    Ll(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Ht(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of mw) a.values[e].set(r.initial?.[e] ?? gw[e]);
    }),
    u(() => ({ values: a.values, style: i ? _w : vw }), [i])
  );
}
function Hl(e, t) {
  let n = m.useRef({});
  m.useEffect(() => {
    if (t !== void 0)
      for (let r of Sv(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = ne({
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
        a.attach((e, t) => ((s = e), (o = t), I.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Ul(e, t) {
  let n = Aw();
  return {
    inputRange: Fl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of mw) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Wl(e) {
  let t = Aw();
  for (let { target: n } of e) for (let e of mw) t[e]?.push(n[e]);
  return t;
}
function Gl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = Ce(),
    s = El(kw(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Vt();
  return (
    d(() => {
      if (!(c || !l))
        return te((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Ul(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of mw)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(he(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    nc(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = Wl(n);
        return te(
          (e, { y: t }) => {
            for (let e of mw)
              (o && e !== `opacity`) ||
                (jw.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(he(t.progress, jw, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    Hl(s.values, r),
    Ht(() => {
      if (c) return;
      let e = kw(n, o);
      for (let t of mw) s.values[t].set(e?.[t] ?? gw[t]);
    }),
    m.useMemo(() => ({ values: s.values, style: t ? _w : vw }), [t])
  );
}
function Kl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function ql(e) {
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
    let r = fl(n);
    if (r) {
      for (let i of Nw)
        if (Mw[i]?.has(r)) {
          t[i][r] = Sx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Sx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Kl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Kl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Jl(e) {
  return V(e) && Iw in e;
}
function Yl(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Fe(r) || !Tl(n) || (at(r.get()) && t[n].push(r));
  }
}
function Xl(e) {
  return B(e) || Array.isArray(e);
}
function Zl({ componentIdentifier: e, children: t }) {
  return t(l(Rw)[e] ?? {});
}
function Ql() {
  return m.useContext(zw);
}
function $l(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function eu() {
  if (n === void 0 || Gw)
    return k(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw qw;
}
function tu({ children: e }) {
  return l(Yw) ? k(T, { children: e }) : k(x, { fallback: Jw, children: e });
}
function nu() {
  return k(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function ru(e, t) {
  if (!lv || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  vn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function iu(...e) {
  console.error(...e);
}
function au() {
  return Y.current() !== Y.canvas;
}
function ou({ getErrorMessage: e, fallback: t, children: n }) {
  return au()
    ? k(su, { fallback: t, children: k(Zw, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function su({ children: e, fallback: t = Xw }) {
  return n === void 0 ? k(x, { fallback: t, children: e }) : k(tu, { children: e });
}
function cu() {
  return m.useContext($w);
}
function lu() {
  let e = cu();
  return m.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function uu({ children: e, scopeId: t, nodeId: n }) {
  let r = cu(),
    i = m.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return k($w.Provider, { value: i, children: e });
}
function du(e, t) {
  return `${eT}${e}:${t}`;
}
function fu(e, t) {
  return mu(`component`, e, t);
}
function pu(e, t) {
  return mu(`override`, e, t);
}
function mu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${du(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function hu(e, t, n, r, i, a) {
  let o = _u(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function gu(e, t, n, r) {
  return _u(e, t, n, r);
}
function _u(e, t, n, r) {
  return !!(ct(n) || (n === 1 && r && e === t));
}
function vu(e, t, n, r, i, a) {
  let o = cu();
  if (ct(t) || ct(n)) return k(Qw, { children: e });
  let { disableCustomCode: s } = Uw();
  return s && r
    ? k(`div`, {
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
    : (hu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = k(ou, { getErrorMessage: fu.bind(null, t, n), fallback: null, children: e })),
      i && (e = k(uu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function yu() {
  if (rT !== void 0 || n === void 0) return;
  let e = q.matchMedia(`(any-hover: hover)`);
  ((rT = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== rT) {
        rT = t;
        for (let e of iT) e();
      }
    }));
}
function bu() {
  return (yu(), xu());
}
function xu() {
  return rT ?? !1;
}
function Su(e) {
  return (
    iT.add(e),
    yu(),
    () => {
      iT.delete(e);
    }
  );
}
function Cu(e = !1) {
  let [t, n] = j(e);
  return (
    Qy(function () {
      function e(e = !0) {
        let t = xu();
        e ? o(() => n(t)) : n(t);
      }
      let t = Su(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function wu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Tu(e) {
  return !(!e || e.placement || e.alignment);
}
function Eu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function Du(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Eu(t)}, -100%`;
    case `right`:
      return `0%, ${Eu(t)}`;
    case `bottom`:
      return `${Eu(t)}, 0%`;
    case `left`:
      return `-100%, ${Eu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Ou(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(dT)) {
      let e = n.getAttribute(dT);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function ku(e) {
  let { registerCursors: t } = l(aT),
    n = Za(() => e),
    r = h();
  d(() => t(n, r), [t, r]);
}
function Au(e) {
  return !!(e && typeof e == `object` && pT in e);
}
function ju(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Mu() {
  return Y.current() === Y.canvas;
}
function Nu(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Pu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Fu(e, t, n, r) {
  if (B(e)) {
    let i = Nu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Bi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Iu(e) {
  return B(e) && e.startsWith(`data:${bT}`);
}
function Lu(e) {
  if (Iu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(bT.length),
        r = t.searchParams,
        i = r.has(gT) ? r.get(gT) : void 0,
        a,
        o = r.get(_T),
        s = r.get(vT),
        c = r.get(yT);
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
function Ru(e, t, n) {
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
    let n = Lu(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function zu(e) {
  if (!Iu(e)) return e;
  let t = Lu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Bu(i) };
}
function Bu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Vu({ children: e }) {
  return k(xT.Provider, { value: void 0, children: e });
}
function Hu(e, n, r, a, o, s) {
  let c = l(xT),
    d = lu(),
    f = u(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: d }), [n, r, d]),
    p = Rt(),
    m = Bt(),
    { locales: h } = sr(),
    g = u(() => {
      let e = Au(a) ? a : zu(a);
      if (e) return Fu(e, p, m, h);
    }, [m, a, p, h]),
    _ = !!(!Mu() && c?.nodeId && f.nodeId),
    v = t(
      (e) => {
        if (o.href) {
          if ((e.preventDefault(), e.stopPropagation(), Gn(e))) {
            Gu(o.href, ``, `_blank`);
            return;
          }
          g ? o.navigate?.() : Gu(o.href, o.rel, o.target);
        }
      },
      [o, g]
    ),
    y = t(
      (e) => {
        o.href && (e.preventDefault(), e.stopPropagation(), Gu(o.href, ``, `_blank`));
      },
      [o]
    ),
    x = t(
      (e) => {
        o.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? o.navigate?.() : Gu(o.href, o.rel, o.target));
      },
      [o, g]
    );
  nc(
    s,
    (e) => {
      e !== null && _ && (e.dataset.hydrated = `true`);
    },
    [_]
  );
  let S = e;
  return (
    _ &&
      (i.forEach(e, (e) => {
        Wu(e) &&
          (H(
            Uu(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            Uu(f),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          hT.collectNestedLink(c, f));
      }),
      (S = i.map(e, (e) => {
        if (!Wu(e)) return e;
        let t = Ku(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: x,
            as: r.as && Ku(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return b(t, { ...i, ref: a }, n);
      }))),
    k(xT.Provider, { value: f, children: S })
  );
}
function Uu(e) {
  return !ct(e?.nodeId);
}
function Wu(e) {
  return S(e) && (Ku(e.type) !== e.type || Ku(e.props.as) !== e.props.as);
}
function Gu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Ku(e) {
  return e === `a` ? `span` : F(e) && ie(e) === `a` ? R.span : e;
}
function qu(e) {
  e &&
    I.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      I.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(ST, r)),
          i && t.forEach((e) => e.style.setProperty(CT, i)));
      });
    });
}
function Ju(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${ST});
    background-color: var(${CT}, highlight);
}`,
  ];
}
function Yu({ triggerId: e, children: t }) {
  return (
    m.useLayoutEffect(() => {
      e && qu(e);
    }, [e]),
    t
  );
}
function Xu(e) {
  return `${e?.x}-${e?.y}`;
}
function Zu(e) {
  switch (e) {
    case `top`:
      return `bottom`;
    case `right`:
      return `left`;
    case `bottom`:
      return `top`;
    case `left`:
      return `right`;
    default:
      U(e);
  }
}
function Qu(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function $u(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      U(e);
  }
}
function ed(e, t, n, r) {
  switch ($u(t, e, r)) {
    case `x`:
      return { placement: Zu(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: Zu(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function td(e, t, n, r, i, a, o) {
  let s = X.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = ed(c, n, i, a),
    f = X.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: Qu(f.x + l, t.width, a.width, o),
      y: Qu(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function nd(e, t, n) {
  return TT.containsPoint([t, ...n], e) ? t : e;
}
function rd(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + ET), e.x + e.width - ET),
    constrainY: (t) => Math.min(Math.max(t, e.y + ET), e.y + e.height - ET),
  };
}
function id({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = X.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - DT), y: t };
      return [n, nd(l, s, [n, c]), nd(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + DT), y: t };
      return [n, nd(s, l, [n, o]), nd(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - DT) };
      return [n, nd(s, o, [n, l]), nd(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + DT) };
      return [n, nd(o, s, [n, c]), nd(c, l, [n, o])];
    }
    default:
      U(n);
  }
}
function ad(e, t) {
  switch (e) {
    case `left`:
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case `right`:
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case `top`:
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case `bottom`:
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      U(e);
  }
}
function od(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = X.merge(r, i),
    c = id({ x: e, y: t }, n, i, rd(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: ad(n, X.delta(r, i)),
  };
}
function sd(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      U(e);
  }
}
function cd(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: sd(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: sd(t) };
    case `bottom`:
      return { originX: sd(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: sd(t) };
    default:
      U(e);
  }
}
function ld(e) {
  let t = e.current,
    n = { position: `absolute`, scrolls: !1 };
  for (; t;) {
    if (
      t?.tagName === `BODY` ||
      (getComputedStyle(t)?.position === `fixed` && (n.position = `fixed`),
      (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight) && (n.scrolls = !0),
      n.scrolls && n.position === `fixed`)
    )
      return n;
    t = t.parentElement;
  }
  return n;
}
function ud(e) {
  return (I.read(e, !0), () => $e(e));
}
function dd(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, od(t, n, a, r, i)));
  };
}
function fd(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function pd(e, t, n, { safeArea: r, onDismiss: i }) {
  let a = Za(() => new Set()),
    o = m.useContext(OT),
    [s, c] = Ke();
  return (
    m.useEffect(() => {
      if (s) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), o.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), o.delete(t.current), c());
      }
    }, [s, c, t, o]),
    m.useEffect(() => {
      if (!r) {
        let e = (e) => {
          e.key === `Escape` && i();
        };
        return (q.addEventListener(`keyup`, e), () => q.removeEventListener(`keyup`, e));
      }
      let o;
      function s() {
        if (!(!o || a.size !== 0)) {
          for (let r of document.elementsFromPoint(o.x, o.y))
            if (r === e.current || r === t.current || r === n.current) return;
          i();
        }
      }
      function c(e) {
        ((o = e), I.read(s));
      }
      return (
        q.addEventListener(`mousemove`, c),
        () => {
          (q.removeEventListener(`mousemove`, c), $e(s));
        }
      );
    }, [i, r, e, n, t]),
    a
  );
}
function md({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => td(a, o, e, t, n, r, i);
}
function hd(e, t) {
  return Za(() => {
    let { originX: n, originY: r } = cd(e, t),
      i = { x: L(n), y: L(r) };
    return [
      i,
      (e) => {
        let n = cd(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function gd(e, { x: t, y: n }) {
  if (!e || !wo(e) || !Co(e) || (!V(e.props.style) && !ct(e.props.style))) return null;
  let r = { ...e.props.style, originX: t, originY: n };
  return m.cloneElement(e, { style: r });
}
function _d(e, t) {
  if (t || ct(e)) {
    let e = document.querySelector(`#${AT}`) ?? document.querySelector(`#${kT}`);
    if (e) return e;
  }
  return (B(e) ? document.querySelector(e) : void 0) || document.body;
}
function vd({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: r,
  offsetY: i,
  anchorRef: a,
  className: o,
  children: s,
  portalSelector: c,
  zIndex: u,
  collisionDetection: d = !1,
  collisionDetectionPadding: f,
  onDismiss: p,
  ...h
}) {
  let g = m.useRef(null),
    _ = m.useRef(null),
    v = m.useRef(null),
    [y, b] = hd(t, e);
  m.useLayoutEffect(() => {
    if (!$s(a) || !v.current || !t || !e) return;
    let o = { x: r ?? 0, y: i ?? 0 },
      s,
      c = !1,
      l = !1,
      u,
      p,
      m,
      h,
      y,
      x = 0,
      S = 0,
      C = ld(a),
      w = C.position,
      T = v.current.getBoundingClientRect(),
      E = md({
        placement: t,
        alignment: e,
        offset: o,
        collisionDetectionSize: d ? { width: q.innerWidth, height: q.innerHeight } : void 0,
        collisionDetectionPadding: f,
      }),
      D = () => {
        c || (fd(g, w, m, x, S), n && y(u, m, p, h), (h = void 0));
      },
      O = () => {
        ((y = dd(_)), h ? D() : fd(g, w, m, x, S), (l = !0));
      },
      k = () => {
        c || b(p);
      },
      A = () => {
        if (!E || c) return;
        (w === `fixed` ? ((x = 0), (S = 0)) : ((x = q.scrollX), (S = q.scrollY)),
          (u = a.current.getBoundingClientRect()));
        let e = E(u, T);
        ((p = e[0]), (m = e[1]));
      };
    if ((A(), k(), O(), C.scrolls && (s = ud(A)), !n))
      return () => {
        (s?.(), (c = !0));
      };
    let j = (e) => {
        ((h = e), l && (I.read(A, !1, !0), I.update(k, !1, !0), I.render(D, !1, !0)));
      },
      M = a.current;
    return (
      M.addEventListener(`mousemove`, j),
      () => {
        (M.removeEventListener(`mousemove`, j), s?.(), (c = !0));
      }
    );
  }, [n, t, e, r, i, a, d, f, b]);
  let x = pd(a, g, _, { safeArea: n, onDismiss: p }),
    S = l(HS);
  return C.createPortal(
    A(R.div, {
      ref: g,
      className: o,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: u,
      },
      ...h,
      children: [
        n
          ? k(`div`, { ref: _, style: { position: `absolute` }, "data-safearea": !0 })
          : k(`div`, { style: { position: `fixed`, inset: 0 }, "aria-hidden": !0, onClick: p }),
        k(OT.Provider, {
          value: x,
          children: k(Vu, {
            children: k(wT, {
              triggerId: a.current?.id ?? void 0,
              children: k(`div`, { ref: v, children: gd(s, y) }),
            }),
          }),
        }),
      ],
    }),
    _d(c, S)
  );
}
function yd(e) {
  MT = e;
}
function bd() {
  return MT;
}
function xd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : xd(e.parentElement, t)
      : null;
}
function Sd({ children: e }) {
  return k(tu, { children: e });
}
function Cd(e) {
  return E(function (t, n) {
    return k(Sd, { children: k(e, { ...t, ref: n }) });
  });
}
function wd(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Ed(e, t, o, s, a, c, l, i, r);
}
function Td(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Nu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Bi(e.routes, o, s, r),
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
function Ed(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = bi(d, {
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
function Dd() {
  let e = l(PT),
    t = Bt()?.pathVariables;
  return e || t;
}
function Od(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(NT)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function kd() {
  return !!Ji(`ss-only-routes`);
}
function Ad(e) {
  if (n === void 0) return;
  let t = n.location.href,
    r;
  try {
    r = new URL(e, t);
  } catch {
    return;
  }
  return ((r.hash = ``), r);
}
function jd(e) {
  return qi(`rewrite`, e)?.description === `external`;
}
function Md() {
  if (!Uw().checkServerSideRouter) return !1;
  if (RT === void 0) {
    let e = kd();
    ((zT = !e && Ln() && Bn() < 16.4), (RT = e || zT));
  }
  return RT;
}
function Nd(e, t) {
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
    ? { decision: jd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === bd() ? `client` : `server` };
}
async function Pd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (zT &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((zT = !1), qi(`ss-only-routes`, t.headers.get(`server-timing`)) || (RT = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Nd(t, e);
}
function Fd(e, t) {
  FT.has(e) && FT.set(e, t);
}
async function Id(e) {
  await An(IT);
  try {
    Fd(e, await Pd(e));
  } catch {
    FT.delete(e);
  }
}
async function Ld(e) {
  try {
    let t = await Pd(e);
    return (Fd(e, t), t);
  } catch {
    return (Id(e), { decision: `server` });
  }
}
function Rd(e) {
  if (!Md()) return;
  let t = Ad(e);
  if (!t || t.origin !== n.location.origin) return;
  let r = t.href;
  FT.has(r) || FT.set(r, Ld(r));
}
function zd(e) {
  let t = Ad(e);
  if (!t) return;
  let n = FT.get(t.href);
  return n && !mt(n) ? n : void 0;
}
async function Bd(e) {
  let t = Ad(e);
  if (!t) return;
  let n = FT.get(t.href);
  if (n) return mt(n) ? Promise.race([n, An(LT).then(() => void 0)]) : n;
}
function Vd() {
  let e = N.connection || N.mozConnection || N.webkitConnection || {},
    t = N.deviceMemory && N.deviceMemory > HT,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? UT : WT));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: VT }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Rd(e.navigationUrl);
    let { id: n, preload: i } = e,
      a = qT.get(n);
    if (!a?.size || KT.has(n)) return;
    (++s, KT.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), GT.delete(t));
    for (let e of a) (o.unobserve(e), GT.delete(e));
    (a.clear(), qT.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = GT.get(e);
      if (!n || KT.has(n.id)) {
        (o.unobserve(e), GT.delete(e));
        continue;
      }
      let r = n.id,
        a = qT.get(r),
        l = qT.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : qT.set(r, new Set([e])), setTimeout(c, BT, n, e));
      } else (a && a.delete(e), l <= 1 && qT.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!KT.has(n))
      return (
        GT.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (GT.delete(e), o.unobserve(e));
        }
      );
  };
}
function Hd(e, t) {
  let n = Nu(e),
    r = {
      href: e === `` || Pu(e, n) ? e : `https://${e}`,
      target: Ud(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = $n(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Ud(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Wd(e, t) {
  console.warn(
    _t(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Gd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Wd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return mt(i) ? i.catch(Wd) : i;
  } catch (e) {
    Wd(e);
  }
}
async function Kd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      H(a, `unresolvedSlug should be defined`);
      let o = Gd(a, r, n),
        s = mt(o) ? await o : o;
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
function qd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Gd(o, r, n);
      mt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Jd() {
  let e = kn();
  return t((t, n, r, i = []) => qd(t, n, r, e, i), [e]);
}
function Yd({ nodeId: e, clickTrackingId: n, router: r, href: i, activeLocale: a }) {
  let o = kn();
  return t(
    async (t) => {
      if (!r.pageviewEventData?.current) return;
      let s =
          r.pageviewEventData.current instanceof Promise
            ? await r.pageviewEventData.current
            : r.pageviewEventData.current,
        c = Au(i) ? i : zu(i);
      if (!Au(c))
        return vn(
          `published_site_click`,
          {
            ...s,
            href: t ? Xd(t) : null,
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
        if (B(t)) {
          let n = e.getRecordIdBySlug(t, a || void 0);
          f = (mt(n) ? await n : n) ?? null;
        }
      }
      return vn(
        `published_site_click`,
        {
          ...s,
          href: t ? Xd(t) : null,
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
function Xd(e) {
  try {
    let t = new URL(e, q.document.baseURI);
    return t.origin === q.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Zd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Qd(e, t, n) {
  return async (r) => {
    let i = Gn(r),
      a = xd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Ey({
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
function $d(e, t, n) {
  return async (r) => {
    let i = await ef(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    tf(t ?? e, r, i.redirectUrl);
  };
}
async function ef(e) {
  return !e || !Md()
    ? { decision: `client` }
    : zd(e) || (Rd(e), (await Bd(e)) ?? { decision: `server` });
}
async function tf(e, t, r) {
  (await Ey({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    n.location.assign(nf(e, r)));
}
function nf(e, t) {
  if (!t) return e;
  try {
    let r = new URL(e, n.location.href),
      i = new URL(t);
    return (r.hash && !i.hash && (i.hash = r.hash), i.href);
  } catch {
    return t;
  }
}
function rf(e) {
  let t = _i(e);
  if (t && n.location.pathname === t) {
    let e = new URL(n.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return n.location.href;
}
function af(e, t, r) {
  if (t || n === void 0) return;
  let i = rf(r),
    a;
  try {
    a = new URL(e, i);
  } catch {
    return;
  }
  let o = new URL(i);
  if (a.origin === o.origin && !(a.pathname === o.pathname && a.search === o.search)) return a.href;
}
function of(e, t, n, r, i, a, o, s) {
  if (!n) return Hd(e, r);
  let c = Td(t, e, s, o);
  if (!c) return Hd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Hd(e, r);
  let m = bi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !uv,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Ud(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = af(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = $d(m, _, (e) =>
      Zd(
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
    onClick: Qd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Od(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function sf(e, t, n) {
  let r = cf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (rt(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (rt(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function cf(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !st(n),
    i = t && !st(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function lf(e, t, n) {
  if (!(t && Nn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: uf } : { ...i, onTap: r }) : e;
}
function uf(e) {
  let t = xd(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function df(e, t, n, r, i, a) {
  let o = Au(e) ? e : zu(e);
  if (!Au(o)) return B(e) ? Hd(e).href : void 0;
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
  if (mt(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return bi(m, {
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
function ff() {
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
async function pf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, ff(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: XT, difficulty: ZT, tokenLength: QT, maxTime: $T }));
  });
}
function mf(e) {
  let t = new Set();
  for (let n of e.elements)
    !hf(n) || n.disabled || !n.name || n.name.startsWith(eE) || t.add(n.name);
  return Array.from(t);
}
function hf(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function gf(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function _f(e, t) {
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
function vf() {
  let e = m.useContext(pE),
    t = m.useMemo(
      () =>
        nE.map((e) => ({
          inputRef: m.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: m.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${eE}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: m.useCallback(
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
                [iE.name]: e.originalName,
                [iE.value]: o,
                [iE.setAttribute]: e.methodsUsed.setAttribute,
                [iE.valueProperty]: e.methodsUsed.valueProperty,
                [iE.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [iE.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [iE.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${eE}_${aE.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${eE}_${aE.fieldCount}`, r.toString()),
          n.append(`${eE}_${aE.fieldFilledCount}`, i.toString()),
          n.append(`${eE}_${aE.hpVersion}`, tE),
          n.append(`${eE}_${aE.siteId}`, e || ``),
          n.append(`${eE}_${aE.timeToSubmissionSinceModuleLoad}`, oE()));
      },
      [t, e]
    ),
  };
}
function yf({ states: e }) {
  return k(T, { children: e.map((e) => k(sE, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function bf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          xf(e, t, n);
        })
      : xf(e.pageviewEventData.current, t, n));
}
function xf(e, t, n) {
  return vn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Sf({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? fE : dE;
    case `incomplete`:
      return e === `error` ? fE : uE;
    case `submit`:
      return cE;
    case `success`:
      return lE;
    case `error`:
      return fE;
    default:
      U(t);
  }
}
function Cf({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function wf(e) {
  e.preventDefault();
}
function Tf(e, t) {
  let n = Pu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Ef(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Ef(t)) return !0;
  return !1;
}
async function Df(e, t, n, r) {
  let i = await pf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": gf(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Of(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Of(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    V(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function kf({ EditorBar: e, fast: t = !1 }) {
  let n = l(pE),
    r = w(pv, t ? _E : vE, hv),
    i = Uw(),
    a = u(() => {
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
    : k(gE, { children: k(x, { children: k(e, { framerSiteId: n, features: a }) }) });
}
function Af({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = M(),
    i = M(),
    a = M(t),
    o = M(null);
  ((a.current = t),
    _(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = j(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? Mf(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Mf(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && jf(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return k(yE.Provider, { value: s, children: n });
}
async function jf(e, t) {
  if (!yn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    vn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Mf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? pr(r.path, n) : r.path) : ``;
}
function Nf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Pf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((bE = e.timeZone), (xE = e.locale));
}
function Ff({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Yr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Br()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function If(e, t, n) {
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
    f = Br();
  Yr(
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
function Lf(e, t, n, r) {
  let i = Br();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Yr(
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
      bi(t, n)
    ));
}
function Rf() {
  return Bn() >= 17 ? TE : wE;
}
function zf(e = Gf) {
  let t = (e) => {
    e.persisted && Jf();
  };
  Ln() && (n.addEventListener(`pageshow`, t), (CE = Date.now() - Rf()));
  let r = Bf(),
    i = Kf(e);
  return function () {
    (n.removeEventListener(`pageshow`, t), r(), i());
  };
}
function Bf() {
  let e = n.history.scrollRestoration;
  return (
    (n.history.scrollRestoration = `manual`),
    function () {
      n.history.scrollRestoration = e;
    }
  );
}
function Vf(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Hf() {
  return { x: n.scrollX, y: n.scrollY };
}
function Uf() {
  let e = Br();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Vf(t)) return t;
}
function Wf(e) {
  let t = Br();
  t && (qr({ ...t, scrollPosition: e }), Ln() && (CE = Date.now()));
}
function Gf(e, t = !1) {
  let n = Uf();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Ln() && !t) {
      let e = Rf();
      if (Date.now() - CE < e) return;
    }
    Wf(e);
  }
}
function Kf(e) {
  let t = () => {
      e(Hf());
    },
    r = () => {
      e(Hf(), !0);
    },
    i = () => {
      document.visibilityState === `hidden` && r();
    };
  (document.addEventListener(`visibilitychange`, i), n.addEventListener(`pagehide`, r));
  let a = () => {
    (document.removeEventListener(`visibilitychange`, i), n.removeEventListener(`pagehide`, r));
  };
  if (!(`onscrollend` in n)) {
    let e = qf(t);
    return function () {
      (a(), e());
    };
  }
  return (
    n.addEventListener(`scrollend`, t),
    function () {
      (a(), n.removeEventListener(`scrollend`, t));
    }
  );
}
function qf(e) {
  let t, r;
  function i() {
    (clearTimeout(t), (t = void 0), (r = void 0));
  }
  let a = () => {
      let t = r;
      (i(), !(t === void 0 || Vr(Br()) !== t) && e());
    },
    o = () => {
      let e = Vr(Br());
      if (e === void 0) {
        i();
        return;
      }
      (clearTimeout(t), (r = e));
      let o = Ln() ? Rf() : 100;
      t = n.setTimeout(a, o);
    };
  return (
    n.addEventListener(`scroll`, o),
    function () {
      (n.removeEventListener(`scroll`, o), i());
    }
  );
}
function Jf() {
  let e = Uf();
  return e ? (n.scrollTo(e.x, e.y), !0) : !1;
}
function Yf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Xf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Yf(n, t), !0);
}
function Zf(e, t, r) {
  r !== `preserve-scroll-position` &&
    I.render(
      () => {
        (r === `restore-scroll-position` && Jf()) || Xf(e, t) || n.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Qf(e, t) {
  I.read(() => {
    n.scrollY !== 0 ||
      n.scrollX !== 0 ||
      I.render(
        () => {
          Jf() || Xf(e, t);
        },
        !1,
        !0
      );
  });
}
function $f(e) {
  let n = Uw().scrollRestoration,
    r = M(void 0),
    i = M(!1),
    a = !!(n && !e),
    o = t(
      (e) => {
        ((r.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = t((e, t = !1) => {
      i.current || Gf(e, t);
    }, []),
    c = t(() => {
      a && (i.current = !0);
    }, [a]),
    l = t(() => r.current !== void 0 || i.current, []),
    u = t((e, t) => {
      let n = r.current;
      !n ||
        n.routeId !== e ||
        n.remountKey !== t ||
        ((r.current = void 0), (i.current = !1), Zf(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    d(() => {
      if (a) return zf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function ep({ currentRouteId: e, remountKey: t, scrollRestoration: r }) {
  let { commitNavigationScroll: i, usesCustomScrollRestoration: a } = r;
  return (
    d(() => {
      i(e, t);
    }),
    _(() => {
      a && Qf(n.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function tp() {
  let [e, t] = m.useState(0);
  return [e, m.useCallback(() => t((e) => e + 1), [])];
}
function np({ children: e, loadSnippetsModule: t }) {
  return k(IE.Provider, { value: t, children: e });
}
function rp() {
  return m.useContext(IE);
}
function ip(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function ap(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await op(a.createContextualFragment(e), r, i));
}
async function op(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = sp(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await op(r, e, null)));
  }
}
function sp(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return cp(r, t, n);
}
function cp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function lp(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = ME), (n = NE));
      break;
    case `bodyEnd`:
      ((t = PE), (n = FE));
      break;
    case `headStart`:
      ((t = OE), (n = kE));
      break;
    case `headEnd`:
      ((t = AE), (n = jE));
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
function up(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = ip(e),
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
async function dp(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = lp(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = up(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((fp(t, o), s)) {
      await ap(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = ip(e.id),
      u = `${c}
${e.code}
${l}`,
      d = mp(e.id, n, r, i);
    d ? await ap(u, d, `afterend`) : await ap(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function fp(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (pp(n) && n.remove(), (n = e));
  }
}
function pp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function mp(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = up(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function hp() {
  let e = rp();
  return t(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(EE)?.dataset[DE] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await dp(t, n, r);
      }
    },
    [e]
  );
}
function gp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function _p({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: r,
  currentRoute: i,
  currentRouteId: a,
  currentPathVariables: o,
  locales: s,
  collectionUtils: c,
}) {
  if (!e || !t || !r || !i) return;
  let l,
    u = [],
    d = s.find((e) => e.id === Dv),
    { path: f } = await rr({
      currentLocale: t,
      nextLocale: r,
      defaultLocale: d,
      route: i,
      routeId: a,
      pathVariables: o,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
  f && (l = gp(f, e));
  let p;
  for (let n of s) {
    if (i.includedLocales && !i.includedLocales.includes(n.id)) continue;
    let { path: r } = await rr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: i,
      routeId: a,
      pathVariables: o,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
    if (!r) continue;
    let s = gp(r, e);
    (u.push({ href: s, hrefLang: n.code }), n.id === Dv && (p = s));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (Fr(l, n.location.href), Ir(u));
    }
  );
}
function vp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = kn(),
    l = hp();
  _(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && ru(e);
        }),
        d)
      : ((e.id === t.id
          ? qn()
          : rr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Dv),
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
            let p = await _p({
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
            u && ru(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function yp(e) {
  if (!e) return cv;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function bp(e) {
  let r = ti(e),
    i = M(void 0),
    a = t(() => {
      (i.current?.abort(), (i.current = void 0));
    }, []);
  return {
    startNavigation: t(
      async (e, t, o, s = !0) => {
        a();
        let c = s ? new AbortController() : void 0;
        i.current = c;
        let l = c?.signal,
          u = Gt(l);
        if ((t.promise.finally(u), o === void 0)) return (e(l), t.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(cv);
        if ((r(f, c, o), e(l), await t.promise, l?.aborted)) return;
        let p = n.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || Ky();
      },
      [a, r]
    ),
    cancelPendingNavigation: a,
  };
}
function xp({
  defaultPageStyle: e,
  disableHistory: r,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: c,
  collectionUtils: l,
  routes: f,
  initialLocaleId: p,
  initialCollectionItemId: m,
  initialContentLocaleIdOverride: h,
  locales: g = Ev,
  initialCanonicalPathVariables: v,
  preserveQueryParams: y = !1,
  LayoutTemplate: b,
  EditorBar: x,
  siteCanonicalURL: S,
  adaptLayoutToTextDirection: C,
}) {
  (Mi(),
    Xr({
      disabled: r,
      routeId: a,
      initialPathVariables: i,
      initialLocaleId: p,
      initialContentLocaleId: h,
      initialCanonicalPathVariables: v,
    }));
  let w = Nr(),
    [T, E] = tp(),
    D = Rr(`framer-route-change`),
    O = u(() => (!Uw().synchronousNavigationOnDesktop || !Wn() ? o : (e) => e()), []),
    j = M(!0),
    ee = M(),
    N = M(0),
    P = M(a),
    F = M(i),
    te = M(),
    ne = M(p),
    re = $f(r),
    { isNavigationCommitPending: I, usesCustomScrollRestoration: L } = re,
    { startNavigation: ie, cancelPendingNavigation: ae } = bp(L),
    oe = kn(),
    se = re.scheduleScroll,
    ce = ne.current,
    le = P.current,
    ue = F.current,
    de = f[le],
    R = de?.path;
  if (!de) throw Error(`Router cannot find route for ${le}`);
  let fe = u(() => g.find(({ id: e }) => e === Dv), [g]),
    z = u(() => g.find(({ id: e }) => (ce ? e === ce : e === Dv)) ?? null, [ce, g]),
    {
      contentLocale: pe,
      currentCanonicalPathVariables: me,
      pageExistsInCurrentLocale: he,
      setRouteContentState: ge,
    } = Cp({
      activeLocale: z,
      currentRoute: de,
      initialCanonicalPathVariables: v,
      initialContentLocaleIdOverride: h,
      locales: g,
      routes: f,
    }),
    _e = z?.textDirection ?? `ltr`,
    ve = C ? _e : `ltr`;
  d(() => {
    C && document.documentElement.setAttribute(`dir`, _e);
  }, [_e, C]);
  let ye = $r(),
    be = u(
      () => ({
        activeLocale: z,
        contentLocale: pe,
        locales: g,
        setLocale: async (e) => {
          let t = ++N.current,
            n = D({ localized: !0 });
          if ((await Ey({ priority: `user-blocking`, continueAfter: `paint` }), t !== N.current)) {
            n.ignore?.();
            return;
          }
          let i;
          B(e) ? (i = e) : V(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            n.ignore?.();
            return;
          }
          let o = P.current,
            s = f[o];
          if (!s) {
            n.ignore?.();
            return;
          }
          let c = _i(S);
          try {
            let e = await ye({
              currentLocale: z,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: fe,
              pathVariables: F.current,
              preserveQueryParams: y,
              sitePrefix: c,
            });
            if (!e || t !== N.current) {
              n.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await or({
                activeLocale: a,
                defaultLocale: fe,
                collectionUtilsCache: oe,
                locales: g,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== N.current) {
              n.ignore?.();
              return;
            }
            ((j.current = !1),
              (ne.current = a.id),
              (ee.current = i),
              (F.current = e.pathVariables),
              ge(l, u));
            let d = s.path && e.pathVariables ? pr(s.path, e.pathVariables) : s.path;
            (se({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ie(
                () => {
                  w(o, o, () => O(E));
                },
                n,
                r
                  ? void 0
                  : i
                    ? () => {
                        Ff({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            n.ignore?.();
          }
        },
      }),
      [z, fe, pe, r, E, g, y, ge, f, se, ie, w, D, O, ye, oe, S]
    ),
    xe = t(
      (e, t, n, r, i, a, o, s, c, l, u) => {
        j.current = !1;
        let d = P.current,
          p = f[e],
          m = Wt(p, n),
          h = p?.path && i ? pr(p.path, i) : p?.path;
        if (
          ((P.current = e),
          (ne.current = t),
          (F.current = i),
          (te.current = void 0),
          ge(a, o),
          (ee.current = r),
          se({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? L
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (ae(), O(E));
          return;
        }
        ie(
          (t) => {
            w(d, e, () => O(E), t);
          },
          c,
          u,
          !0
        );
      },
      [E, ge, f, L, se, ie, w, O, ae]
    );
  (Zr(re, P, xe),
    _(() => {
      if (r) return;
      let e = () => {
        let e = Br(),
          t = n.location.hash === `` ? void 0 : n.location.hash.slice(1);
        (e && Wt(f[e.routeId], e.hash) === t) ||
          Jr({
            ...(e ||
              (Ur() ?? { routeId: P.current, pathVariables: F.current, localeId: ne.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (n.addEventListener(`hashchange`, e), () => n.removeEventListener(`hashchange`, e));
    }, [r, f]));
  let Se = t(
      async (e, t, n, i, a) => {
        let o = f[e],
          s = xt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = yp(a);
        if (
          (Ey({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await Ey({ priority: `user-blocking`, continueAfter: `paint` }),
          n)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Oy)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          n = Object.fromEntries(Object.entries(n).filter(([t]) => e.has(t)));
        }
        let d = Wt(o, t),
          p = F.current,
          m = ne.current;
        if (
          te.current === void 0 &&
          Nf({ routeId: P.current, pathVariables: p }, { routeId: e, pathVariables: n })
        ) {
          let a = I();
          if (a) {
            let t = o?.path && n ? pr(o.path, n) : o?.path;
            se({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: d,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ae();
          (l.ignore?.(), !a && L && Zf(d, i, `scroll-to-hash-or-top`));
          let s = f[e];
          (!r &&
            s &&
            Lf(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: n,
                hash: t,
                localeId: m,
                preserveQueryParams: y,
                siteCanonicalURL: S,
              },
              u
            ),
            !a && !L && Zf(d, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = f[P.current],
          _ =
            _i(S) +
            bi(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: n,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: y,
              relative: !1,
              siteCanonicalURL: S,
            }),
          v = {};
        te.current = v;
        let { contentLocaleId: b, canonicalPathVariables: x } = await or({
          activeLocale: z,
          defaultLocale: fe,
          collectionUtilsCache: oe,
          locales: g,
          pathVariables: n,
          route: o,
          routeId: e,
        });
        te.current === v &&
          xe(
            e,
            m,
            t,
            _,
            n,
            b,
            x,
            !1,
            l,
            i,
            r
              ? void 0
              : () => {
                  (u(),
                    If(e, o, {
                      historyPath: _,
                      currentRoutePath: h?.path,
                      hash: t,
                      pathVariables: n,
                      contentLocaleId: b,
                      canonicalPathVariables: x,
                      localeId: m,
                    }));
                }
          );
      },
      [ae, f, g, xe, r, y, S, D, L, I, se, oe, fe, z]
    ),
    Ce = It(f),
    we = ee.current,
    Te = SE(de, le, we, ue, z, m),
    Ee = j.current;
  vp({
    activeLocale: z,
    contentLocale: pe,
    currentPathVariables: ue,
    currentRoute: de,
    currentRouteId: le,
    isInitialNavigation: Ee,
    locales: g,
    siteCanonicalURL: S,
  });
  let De = u(
      () => ({
        navigate: Se,
        getRoute: Ce,
        currentRouteId: le,
        currentPathVariables: ue,
        currentCanonicalPathVariables: me,
        routes: f,
        collectionUtils: l,
        preserveQueryParams: y,
        pageviewEventData: Te,
        siteCanonicalURL: S,
        isInitialNavigation: Ee,
      }),
      [Se, Ce, le, ue, me, f, l, y, S, Te, Ee]
    ),
    Oe = R && ue ? pr(R, ue) : R,
    ke = `${ce}${Oe}`,
    Ae = Za(() => ({ ...e, display: `contents` }));
  return k(Lt, {
    api: De,
    children: k(jy.Provider, {
      value: be,
      children: k(My.Provider, {
        value: ve,
        children: k(lT, {
          children: k(fi, {
            routerRenderKey: T,
            isNavigationCommitPending: re.isNavigationCommitPending,
            children: A(Af, {
              currentRoutePath: Oe,
              routerAPI: De,
              children: [
                x && k(kf, { EditorBar: x, fast: !0 }),
                k(Kw, {
                  children: A(tu, {
                    children: [
                      k(Lb.Start, {}),
                      k(ep, { currentRouteId: le, remountKey: ke, scrollRestoration: re }),
                      k(zb, {
                        notFoundPage: c,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: k(Sp, {
                          LayoutTemplate: b,
                          webPageId: de?.abTestingVariantId ?? le,
                          style: e,
                          children: (t) =>
                            k(s, { children: he ? Li(de.page, t ? Ae : e) : c && Li(c, e) }, ke),
                        }),
                      }),
                      x && k(kf, { EditorBar: x }),
                      k(Oi, {}),
                      k(Lb.End, {}),
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
function Sp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? k(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Cp({
  activeLocale: e,
  currentRoute: n,
  initialCanonicalPathVariables: r,
  initialContentLocaleIdOverride: i,
  locales: a,
  routes: o,
}) {
  let s = M(r),
    c = M(i),
    l = c.current,
    d = !e || !n.includedLocales || n.includedLocales.includes(e.id),
    f = u(() => {
      if (!e) return null;
      let t;
      return (
        (t = d
          ? (l ?? n?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(o).find((e) => e.path && lb.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        t ? (a.find(({ id: e }) => e === t) ?? e) : e
      );
    }, [e, n, a, l, d, o]),
    p = t((e, t) => {
      ((c.current = e), (s.current = t));
    }, []);
  return {
    contentLocale: f,
    currentCanonicalPathVariables: s.current,
    pageExistsInCurrentLocale: d,
    setRouteContentState: p,
  };
}
function wp(e) {
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
function Tp(e) {
  return typeof e == `object` && !!e;
}
function Ep(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Tp(r)) return;
    r = r[e];
  }
  return r;
}
function Dp(e) {
  return `${e.credentials}:${e.url}`;
}
function Op(e) {
  return B(e) && !Number.isNaN(Number(e));
}
function kp(e, t) {
  switch (e) {
    case `string`:
      return B(t) || at(t);
    case `color`:
      return B(t);
    case `boolean`:
      return it(t);
    case `number`:
      return at(t) || Op(t);
    case `link`:
    case `image`:
      return B(t) && Pu(t, !1);
    default:
      return !1;
  }
}
function Ap(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Ep(e.data, t.resultKeyPath);
  if (ct(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!kp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function jp(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, RE);
  return Date.now() >= e + n;
}
function Mp({ client: e, children: t }) {
  return k(WE.Provider, { value: e, children: t });
}
function Np(e) {
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
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: D,
  } = e;
  return (
    m.useEffect(() => {
      n || px.start();
    }, []),
    n
      ? k(ii, {
          value: r ?? `preview`,
          children: k(Se, {
            reducedMotion: p ? `always` : f ? `user` : `never`,
            skipAnimations: p,
            children: k(On, {
              collectionUtils: l,
              children: k(Mp, {
                client: u,
                children: k(UE, {
                  children: k(pE.Provider, {
                    value: a,
                    children: k(np, {
                      loadSnippetsModule: T,
                      children: k(xp, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: g,
                        initialCollectionItemId: E,
                        initialContentLocaleIdOverride: D,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: _,
                        defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: v,
                        EditorBar: y,
                        disableHistory: x,
                        LayoutTemplate: S,
                        siteCanonicalURL: C,
                        adaptLayoutToTextDirection: w,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : k(h ? ZC : m.Fragment, {
          children: k(zt, {
            routes: c,
            children: k(RC, { children: m.isValidElement(t) ? t : m.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Pp(e, t) {
  let n = Rt(),
    { activeLocale: r } = sr(),
    i = Jd();
  return oi(() => {
    let t = [],
      a = (e) => {
        if (e)
          return B(e) || Au(e)
            ? df(e, n, void 0, void 0, r, o)
            : df(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Fp(e) {
  return {
    trace(...t) {
      return kx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return kx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return kx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return kx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return kx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return kx.getLogger(e) !== void 0;
    },
  };
}
function Ip() {
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
function Lp() {
  return KE.priority;
}
function Rp(e) {
  let t = KE;
  return (
    (KE = e),
    {
      [Ip()]() {
        KE = t;
      },
    }
  );
}
function zp(e = KE.priority, t = KE.canYield) {
  if (!(!t || e === void 0)) return Ey({ batch: !0, priority: Jn(e) });
}
function Bp(e) {
  var t = [];
  try {
    we(t, Rp({ priority: KE.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ae(t, n, r);
  }
}
async function Vp(e, t, n = KE.priority, r = KE.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (we(o, Rp(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ae(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = zp(n, r);
      (o && (await o), we(l, Rp(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ae(l, u, d);
    }
  }
  return a.value;
}
function Hp(e, t = KE.priority, n = KE.canYield) {
  var r = [];
  try {
    we(r, Rp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Vp(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ae(r, i, a);
  }
}
function* Up(e, t = KE.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (ft(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Vp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Wp(e, t = KE.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = zp(t);
    r && (yield r);
    let o = e[a];
    if (ft(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Vp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Gp(e) {
  return Jp(e) || Zp(e);
}
function Kp(e) {
  return ot(e) && e.every(V);
}
function qp(e) {
  return V(e) && rt(e.read) && rt(e.preload);
}
function Jp(e) {
  return Kp(e) || qp(e);
}
function Yp(e) {
  return V(e) && V(e.schema);
}
function Xp(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function Zp(e) {
  return Yp(e) || Xp(e);
}
function Qp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Dm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function $p(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => qE.cast(e, t.definition)) };
  }
  return null;
}
function em(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function tm(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function nm(e) {
  return tm(e)?.value ?? !1;
}
function rm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function im(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function am(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function om(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return dt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function sm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cm(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function lm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function um(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function dm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function fm(e) {
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
function pm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function mm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function hm(e) {
  return mm(e)?.value ?? null;
}
function gm(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Dm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function _m(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = qE.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function vm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ym(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function bm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function xm(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Sm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Cm(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function wm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Tm(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Em(e) {
  return Tm(e)?.value ?? null;
}
function Dm(e, t, n) {
  if (lt(e) || lt(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), Qp(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), em(e, t));
    case `color`:
      return (H(e.type === t.type), rm(e, t));
    case `date`:
      return (H(e.type === t.type), am(e, t));
    case `enum`:
      return (H(e.type === t.type), sm(e, t));
    case `file`:
      return (H(e.type === t.type), lm(e, t));
    case `link`:
      return (H(e.type === t.type), dm(e, t));
    case `number`:
      return (H(e.type === t.type), pm(e, t));
    case `object`:
      return (H(e.type === t.type), gm(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), vm(e, t));
    case `richtext`:
      return (H(e.type === t.type), bm(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), Sm(e, t));
    case `string`:
      return (H(e.type === t.type), wm(e, t, n));
    default:
      U(e);
  }
}
async function Om(e, t) {
  return qp(e) ? (await e.preload(t), e.read(t)) : e;
}
function km(e) {
  return e.includes(QE);
}
function Am(e) {
  if (!Zp(e) || !e.id) return;
  let t = XE.get(e.id);
  if (!t) return (XE.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function jm(e) {
  let t = Am(e);
  if (t) return t;
  let n = ZE.get(e);
  if (n) return n;
  let r = `${QE}${Math.random().toString(16).slice(2)}`;
  return (ZE.set(e, r), r);
}
function Mm(e, t) {
  if (Jp(e)) {
    let n = jm(e) + (t?.id ?? Dv),
      r = $E.get(n);
    if (r) return r;
    let i = new YE(e, t);
    return ($E.set(n, i), i);
  }
  if (Yp(e)) return e;
  if (Xp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function Nm(e) {
  return e;
}
function Pm(e) {
  return rt(e.getHash);
}
function K(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (V(r) && Pm(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Nm(`${n})`);
}
function Fm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Im(e) {
  if (e !== void 0) return Jn(e);
}
function Lm(e, t) {
  return { collectionId: jm(e), pointer: t };
}
function Rm(e) {
  return V(e) && B(e.collectionId);
}
function zm(e, t) {
  return { collectionId: jm(e), pointer: t };
}
function Bm(e) {
  return V(e) && B(e.collectionId);
}
function Vm(e, t) {
  let n = new Map();
  function r(e) {
    if (V(e))
      if (e.type === `Collection` && Gp(e.data)) {
        let r = Mm(e.data, t),
          i = jm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (ot(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Hm(e) {
  return e;
}
function Um(e) {
  return e;
}
function Wm(e) {
  return e;
}
function Gm() {
  return 25;
}
function Km() {
  return 12500;
}
function qm(e) {
  return Array(e).fill({ type: `All` });
}
function Jm(e) {
  return e;
}
function Ym(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new oO(t ? `Assertion Error: ` + t : `Assertion Error`);
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
function Xm(e) {
  let t = new Set();
  if (!e) return t;
  Ym(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Ym(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Zm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Zm(n, t);
      return;
    case `object`:
      for (let n in e.value) Zm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Qm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function $m(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function eh(e) {
  return `${e.functionName}(${e.arguments.map((e) => ah(e)).join(`, `)})`;
}
function th(e) {
  let t = `CASE`;
  e.value && (t += ` ${ah(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${ah(n.when)} THEN ${ah(n.then)}`;
  return (e.else && (t += ` ELSE ${ah(e.else)}`), (t += ` END`), t);
}
function nh(e) {
  let t = ah(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function rh(e) {
  let t = ah(e.left),
    n = ah(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function ih(e) {
  return `CAST(${ah(e.value)} as ${e.dataType})`;
}
function ah(e) {
  switch (e.type) {
    case `Identifier`:
      return Qm(e);
    case `LiteralValue`:
      return $m(e);
    case `FunctionCall`:
      return eh(e);
    case `Case`:
      return th(e);
    case `UnaryOperation`:
      return nh(e);
    case `BinaryOperation`:
      return rh(e);
    case `TypeCast`:
      return ih(e);
    case `Select`:
      return `${uh(e)}`;
    default:
      U(e);
  }
}
function oh(e) {
  return Yp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function sh(e) {
  let t = `${ch(e.left)} LEFT JOIN ${ch(e.right)}`;
  return (e.constraint && (t += ` ON ${ah(e.constraint)}`), t);
}
function ch(e) {
  switch (e.type) {
    case `Collection`:
      return oh(e);
    case `LeftJoin`:
      return sh(e);
    default:
      U(e);
  }
}
function lh(e) {
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
function uh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = ah(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${ch(e.from)}`),
    e.where && (t += ` WHERE ${ah(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${ah(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${ah(e.limit)}`),
    e.offset && (t += ` OFFSET ${ah(e.offset)}`),
    lh(t)
  );
}
function dh(e) {
  return V(e) && e.type === `Collection`;
}
function fh(e, t) {
  return dh(t) && Gp(t.data) ? jm(t.data) : t;
}
function ph(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, fh) + n;
}
function mh(e) {
  let { activeLocale: t } = sr();
  return CO.get(e, t).use();
}
function hh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(ct(e) || V(e)))
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
function gh(e) {
  let t = M(e);
  return (
    f(() => {
      t.current = e;
    }, [e]),
    si((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function _h(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function vh() {
  return new Set();
}
function yh(e) {
  let t = Za(vh),
    n = Za(vh);
  return (
    dc(() => () => _h(n, t)),
    _(() => () => _h(n, t), []),
    _(() => {
      _h(n, t);
    }, [e]),
    M({
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
function bh(e, t, n) {
  return m.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function xh(e) {
  for (let [t, n] of Object.entries(e)) if (q.matchMedia(n).matches) return t;
}
function Sh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && q.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Ch(e, n, r = !0) {
  let i = l(FC),
    a = to(),
    s = qa(),
    c = zn() && (!a || s),
    u = M(c ? (xh(n) ?? e) : e),
    d = M(r && i ? e : u.current),
    f = vs(),
    p = fe(),
    m = t(
      (e) => {
        if (e !== u.current || e !== d.current) {
          let t = function () {
            ((u.current = d.current = e),
              o(() => {
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
    Qy(() => {
      if (a) {
        if (s) {
          m(xh(n) ?? e);
          return;
        }
        m(e);
      }
    }, [e, s, a, n, m]),
    Qy(() => {
      !r || i !== !0 || m(u.current);
    }, []),
    _(() => {
      if (!c || s) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = q.matchMedia(r),
          i = (e) => {
            e.matches && m(t);
          };
        (wh(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Th(e, t));
    }, [s, n, m, c]),
    [u.current, d.current]
  );
}
function wh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Th(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Eh(e) {
  setTimeout(e, 1);
}
function Dh(e) {
  let t = new Set(),
    n = Sh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Oh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (dv ? q.requestIdleCallback : Eh)(() => {
    document.querySelector(wO)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Oh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    kh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Oh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function kh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Ah(e, t) {
  e !== !1 &&
    I.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function jh({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = m.useState(!1),
    i = m.useCallback(
      async (t) => {
        (await Ey({ priority: `user-blocking`, continueAfter: `paint` }), o(() => r(t)), Ah(e, t));
      },
      [e]
    );
  return (
    m.useEffect(
      () => () => {
        Ey({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          Ah(e, !1);
        });
      },
      [e]
    ),
    m.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (q.addEventListener(`keydown`, e), () => q.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function Mh(e) {
  return V(e) && TO in e && e.page !== void 0;
}
function Nh(e, t) {
  return `${e}-${t}`;
}
function Ph(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function Fh(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Ih(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Lh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Rh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function zh() {
  let e = M(),
    n = M(),
    r = t(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (n.current = void 0));
    }, []);
  return (
    _(
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
function Bh() {
  let e = M(),
    n = M(!1),
    r = M(),
    i = l(vC);
  return (
    _(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    t(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = rc(i, `undefined`, a.current, null, (e) => {
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
function Vh(e) {
  let n = zh(),
    r = Bh();
  return t(
    (t, i = !1) => {
      if (uv) {
        t();
        return;
      }
      n(i && e ? () => r(t, e) : t);
    },
    [n, r, e]
  );
}
async function Hh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (OO = () => {
        (e(), (t = void 0));
      }));
  });
}
function Uh(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (DO = Hh()));
}
function Wh() {
  (performance.mark(`click-received-listener`), (DO = void 0), OO?.(), (OO = void 0));
}
function Gh(e = !1) {
  _(() => {
    e &&
      (document.addEventListener(`pointerup`, Uh, !0),
      document.__proto__.addEventListener.call(document, `click`, Wh, !0));
  }, [e]);
}
function Kh({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: i,
  cycleOrder: a = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let d = vs(),
    f = Mu(),
    p = Za(() => new Set(a));
  Gh(Uw().yieldOnTap);
  let m = Vh(l),
    h = M({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Rh(e, n, p),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: i,
      cycleOrder: a,
      transitions: r,
    }),
    g = t((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Rh(e, a, p),
        s = Ih(i?.[o], t, n, !1, r);
      return [o, s ? Nh(o, s) : void 0];
    }, []),
    _ = t(
      async (e, t, n, r, i = !1, a = !1) => {
        let [s, c] = g(r);
        if (s === e && c === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = s || n),
          (h.current.gestureVariant = c));
        let l = Uw().yieldOnTap && h.current.isPressedHasUpdated;
        (l &&
          DO &&
          (performance.mark(`wait-for-tap-start`),
          await DO,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          l &&
            (performance.mark(`yield-on-tap-start`),
            await Ey({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: f,
          isHoveredHasUpdated: p,
          isPressedHasUpdated: _,
        } = h.current;
        if (u || p || f || _) {
          o(d);
          return;
        }
        m(() => o(d), i);
      },
      [g, d, m]
    ),
    v = t(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !f && Uw().disableHoverOnMobile && !bu() && (e = !1);
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_, f]
    ),
    y = t(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === EO ? Ph(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = t(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => o(d), !0));
    }, [d, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: C,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = h.current,
    k = bh(h.current.baseVariant, h.current.gestureVariant, s);
  return u(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !D && !f && !!t && !O[x],
      r = n ? Nh(x, `loading`) : S;
    r && e.push(r);
    let i = w?.[x],
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
        transition: Fh(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: dl(Lh(x, c), Ih(i, T, E, n, D)),
      }
    );
  }, [x, S, T, E, O, k, y, C, w, v, b, c]);
}
function qh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!au()) return r(e);
  let a = Jh(e, r),
    o = !1;
  function s(r, s) {
    let c = cu(),
      { disableCustomCode: l } = Uw();
    if (l) return k(e, { ...r, ref: s });
    if (gu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? k(Xy.Provider, {
            value: n,
            children: k(ou, {
              getErrorMessage: pu.bind(null, t, n),
              fallback: k(e, { ...r, ref: s }),
              children: k(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (iu(a.error), iu(pu(t, n)), ru(a.error), !0)), k(e, { ...r, ref: s }));
    if (a.status === `success`)
      return k(Xy.Provider, { value: n, children: k(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return m.forwardRef(s);
}
function Jh(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Yh(e) {
  let t = [];
  return (
    i.forEach(e, (e) => {
      S(e) && e.type === s ? t.push(...Yh(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Xh(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Zh(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Xh(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Oe(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Qh(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Xh(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Oe(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function $h() {
  let e = l(kO);
  return (pg(!!e, `useTicker must be used within a Ticker component`), e);
}
function eg() {
  let e = l(AO);
  return (pg(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function tg(e, t) {
  return (t?.offsetWidth ?? n.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function ng(e, t) {
  return e === `y` ? NO : t === `ltr` ? MO : PO;
}
function rg({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = $h(),
    { sign: _ } = ng(n, h),
    v = Re(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * _ + s.end <= -g - d) return r * _;
      if (d > 0) {
        let t = m - d - g;
        if (e * _ + s.start >= t) return -r * _;
      }
      return 0;
    }),
    y = Re(() => {
      let e = t.get(),
        n = v.get();
      return (!f && !p) || !r ? 0 : e * _ + f + n * _;
    }),
    b =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    x = u === `fill`,
    S = c === `stretch` ? `100%` : `fit-content`,
    C = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: x ? `grid` : void 0,
        gridTemplateColumns: x ? `1fr` : void 0,
        gridTemplateRows: x ? `1fr` : void 0,
        minWidth: x ? 0 : void 0,
        minHeight: x ? 0 : void 0,
        height: n === `x` ? S : void 0,
        width: n === `y` ? S : void 0,
        x: n === `x` ? v : 0,
        y: n === `y` ? v : 0,
      },
      ...b,
    };
  return k(AO.Provider, {
    value: { start: f, end: p, offset: y, projection: v, itemIndex: a, cloneIndex: o, props: C },
    children: u === `manual` ? e : k(ig, { children: e }),
  });
}
function ig({ children: e }) {
  let { props: t } = eg();
  return k(R.li, { ...t, children: e });
}
function ag(e, t, r, i, a) {
  let o = M(!1);
  _(() => {
    let s = e.current;
    if (!s) return;
    let c = !1,
      l = new AbortController(),
      u = { signal: l.signal },
      d = { ...u, capture: !0 },
      f = t === `x` ? `scrollLeft` : `scrollTop`,
      p = t === `x` ? `offsetLeft` : `offsetTop`,
      m = t === `x` ? `ArrowLeft` : `ArrowUp`,
      h = t === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          r.set(-e[p]),
          (s[f] = 0),
          I.render(() => {
            s[f] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(sg);
          t.sort(og);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (s.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!s.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === m ? _-- : e.key === h && _++;
        ((_ = Oe(0, g.length, _)), v());
      },
      b = () => {
        o.current ||
          ((g = Array.from(
            s.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(sg)),
          (_ = 0),
          g.length &&
            (a(!0),
            (o.current = !0),
            v(),
            n.addEventListener(`focus`, x, d),
            n.addEventListener(`blur`, x, d),
            s.addEventListener(`keydown`, y, u)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !s.contains(e.target)) && S();
      },
      S = () => {
        o.current &&
          ((o.current = !1),
          a(!1),
          i.set(r.get()),
          n.removeEventListener(`focus`, x),
          n.removeEventListener(`blur`, x),
          s.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        sg(t) && (o.current || b());
      },
      w = () => {
        c || ((c = !0), s.addEventListener(`focus`, C, d), n.addEventListener(`pointermove`, T, u));
      },
      T = () => {
        c &&
          ((c = !1),
          s.removeEventListener(`focus`, C, !0),
          n.removeEventListener(`pointermove`, T, u));
      };
    return (
      n.addEventListener(`keydown`, w, u),
      s.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        u
      ),
      s.addEventListener(
        `scroll`,
        () => {
          ((s.scrollLeft = 0), (s.scrollTop = 0));
        },
        u
      ),
      () => {
        (l.abort(), S());
      }
    );
  }, []);
}
function og(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function sg(e) {
  return e instanceof HTMLElement;
}
function cg(e) {
  return e.end - e.start;
}
function lg(e) {
  return e[e.length - 1].end - e[0].start;
}
function ug(e, t, n) {
  let r = lg(t),
    i = Math.max(...t.map(cg)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function dg(
  {
    items: e,
    velocity: r = 50,
    hoverFactor: i = 1,
    gap: a = 10,
    axis: o = `x`,
    align: s = `center`,
    offset: c,
    isStatic: l = !1,
    itemSize: d = `auto`,
    overflow: f = !1,
    loop: p = !0,
    children: m,
    as: h = `div`,
    snap: g,
    safeMargin: _ = 0,
    fade: v = 0,
    fadeTransition: y,
    pageTransition: b,
    ...x
  },
  S
) {
  let C = M(null),
    w = ye(S, C),
    T = M(null),
    [E, D] = j({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    O = FO[s] || s,
    { sign: A } = ng(o, E.direction);
  if (l) {
    let t = ke(0);
    return k(kO.Provider, {
      value: { ...E, gap: a, clampOffset: oe, offset: t, renderedOffset: t },
      children: k(fg, {
        containerProps: x,
        containerRef: w,
        children: m,
        gap: a,
        axis: o,
        alignItems: O,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: d,
        state: E,
        overflow: f,
        safeMargin: _,
        isStatic: !0,
        as: h,
        fade: v,
        sign: A,
      }),
    });
  }
  let [ee, N] = j(!1),
    F = ke(1),
    te = ke(0);
  c ??= te;
  let ne = Re(() =>
      E.direction === `rtl` && o === `x`
        ? Oe(E.totalItemLength + a + E.inset, E.inset, c.get())
        : Oe(-E.totalItemLength - a - E.inset, -E.inset, c.get())
    ),
    re = ke(0),
    I = ee ? re : p ? ne : c,
    L = ve(C, { margin: `100px` }),
    ie = Ve(),
    ae = L && ie,
    ce = Pe(),
    le = () => {
      if (!C.current || !T.current) return;
      let e = n.getComputedStyle(C.current).direction,
        { measureItem: t, lengthProp: r, viewportLengthProp: i, getCumulativeInset: a } = ng(o, e),
        s = o === `x` ? `paddingLeft` : `paddingTop`,
        c = o === `x` ? `paddingRight` : `paddingBottom`,
        l = C.current,
        u = T.current.querySelectorAll(`.ticker-item`);
      if (!u.length) return;
      let d = !1,
        m = [];
      for (let e = 0; e < u.length; e++) {
        let n = t(u[e], l);
        m.push(n);
        let r = E.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (d = !0);
      }
      let h = Math.min(l[r], n[i]),
        g = f ? n[i] : h;
      _ > 0 && (g += _ * 2);
      let v = lg(m),
        y = n.getComputedStyle(l),
        b = parseInt(y[s] ?? 0),
        x = parseInt(y[c] ?? 0),
        S = f ? a(u[0]) : b,
        w = p === !1 ? Math.max(0, v - h + b + x) : null;
      (g !== E.visibleLength ||
        v !== E.totalItemLength ||
        S !== E.inset ||
        E.itemPositions.length !== m.length ||
        d) &&
        D({
          direction: e,
          visibleLength: g,
          itemPositions: m,
          totalItemLength: v,
          inset: S,
          containerLength: h,
          maxInset: w,
          isMeasured: !0,
        });
    };
  P(() => {
    if (!ae || !C.current) return;
    le();
    let e = f ? z(le) : void 0,
      t = z(C.current, le);
    return () => {
      (e?.(), t());
    };
  }, [e, ae, f]);
  let ue = E.totalItemLength > 0;
  se(
    ue && ae && c === te && !ce
      ? (e, t) => {
          let n = (t / 1e3) * (r * A * F.get());
          c.set(c.get() - n);
        }
      : oe
  );
  let de = u(
      () => (!ue || !E.visibleLength ? 0 : ug(E.visibleLength, E.itemPositions, a)),
      [ue, E]
    ),
    R = E.totalItemLength === 0 ? 0 : (E.totalItemLength + a) * (de + 1),
    fe = [];
  if (p)
    for (let t = 0; t < de; t++) {
      let n = [];
      e.forEach((r, i) => {
        let s = E.itemPositions[i],
          c = (E.totalItemLength + a) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : LO;
        n.push(
          k(
            rg,
            {
              offset: I,
              axis: o,
              listSize: R,
              itemIndex: i,
              cloneIndex: i,
              bounds: l,
              alignItems: O,
              size: d,
              safeMargin: _,
              numItems: e.length,
              children: r,
            },
            `clone-${t}-${i}`
          )
        );
      });
      let r = `ticker-group-${t}`;
      fe.push(k(Ne, { id: r, children: n }, r));
    }
  ag(C, o, re, c, N);
  let he = t((e) => (E.maxInset === null ? e : me(-E.maxInset, 0, e)), [E.maxInset]);
  return k(kO.Provider, {
    value: { ...E, gap: a, clampOffset: he, offset: c, renderedOffset: I },
    children: k(fg, {
      containerProps: x,
      children: m,
      containerRef: w,
      listRef: T,
      gap: a,
      axis: o,
      alignItems: O,
      isMeasured: ue,
      isInView: ae,
      offset: c,
      renderedOffset: I,
      items: e,
      itemSize: d,
      clonedItems: fe,
      clampOffset: he,
      snap: g,
      safeMargin: _,
      onPointerEnter: () => {
        pe(F, i);
      },
      onPointerLeave: () => {
        pe(F, 1);
      },
      totalListSize: R,
      state: E,
      overflow: f,
      loop: p,
      as: h,
      fade: v,
      sign: A,
      fadeTransition: y,
      pageTransition: b,
    }),
  });
}
function fg({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: c,
  isStatic: l,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: g,
  onPointerLeave: _,
  totalListSize: v,
  itemSize: y,
  overflow: b,
  state: x,
  safeMargin: S,
  snap: C,
  loop: w,
  as: E,
  fade: D,
  sign: O,
  fadeTransition: j = BO,
  pageTransition: ee,
}) {
  let N = u(() => R.create(E), [E]),
    P = {},
    { maxInset: F } = x;
  F !== null &&
    (P =
      a === `x`
        ? O > 0
          ? { left: F * -1, right: 0 }
          : { right: F, left: 0 }
        : { top: F * -1, bottom: 0 });
  let {
      drag: te,
      _dragX: ne,
      _dragY: re,
      dragMomentum: L = !1,
      onDragEnd: ie,
      onPointerDown: ae,
      ...oe
    } = t,
    se = a === `x` ? ne : re,
    ce = M(null),
    le = () => {
      ce.current &&= (ce.current.stop(), null);
    };
  !ie &&
    te &&
    se &&
    ((ae = () => {
      (se.jump(f.get()), le());
    }),
    (ie = (e, { velocity: t }) => {
      let n = f.get();
      (le(),
        I.postRender(() => {
          let e = n + t[a] * (C ? 0.3 : 0.8);
          if (C)
            if (t[a] < 0) e = -Zh(-n, x.itemPositions, i, -e);
            else if (t[a] > 0) e = -Qh(-n, x.itemPositions, i, -e, x.containerLength);
            else {
              let t = -Zh(-n, x.itemPositions, i, -n),
                r = -Qh(-n, x.itemPositions, i, -n, x.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = w
            ? {}
            : O > 0
              ? { max: 0, min: P[a === `x` ? `left` : `top`] }
              : { min: 0, max: P.right };
          ce.current = pe(
            se,
            m(e * O) * O,
            C
              ? ee
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let ue = ke(+!w),
    de = ke(0),
    fe = ng(a, x.direction),
    z = typeof D == `number` ? `px` : ``,
    me = Re(
      () =>
        `linear-gradient(to ${fe.direction}, rgba(0,0,0,${ue.get()}) 0px, black ${D}${z}, black calc(100% - ${D}${z}), rgba(0,0,0,${de.get()}) 100%)`
    ),
    he = D ? { maskImage: me, WebkitMaskImage: me } : {},
    ge = M({ start: !0, end: !1 });
  return (
    Ye(h, `change`, (e) => {
      if (F === null) return;
      let t = F * -1;
      ((e *= O),
        e < 0
          ? ge.current.start && (pe(ue, 0, j), (ge.current.start = !1))
          : ge.current.start || (pe(ue, 1, j), (ge.current.start = !0)),
        e > t
          ? ge.current.end && (pe(de, 0, j), (ge.current.end = !1))
          : ge.current.end || (pe(de, 1, j), (ge.current.end = !0)));
    }),
    A(T, {
      children: [
        k(N, {
          ...oe,
          ref: n,
          style: {
            overflowX: !b && a === `x` ? `clip` : void 0,
            overflowY: !b && a === `y` ? `clip` : void 0,
            ...RO,
            ...t.style,
            ...he,
          },
          onPointerEnter: g,
          onPointerLeave: _,
          drag: te,
          _dragX: ne,
          _dragY: re,
          dragConstraints: P,
          dragMomentum: L,
          onPointerDown: ae,
          onDragEnd: ie,
          children: A(R.ul, {
            ref: r,
            style: {
              ...zO,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: s || l ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                k(
                  rg,
                  {
                    axis: a,
                    offset: h,
                    listSize: v,
                    itemIndex: t,
                    bounds: x.itemPositions[t] ?? LO,
                    alignItems: o,
                    size: y,
                    reproject: w,
                    safeMargin: S,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function pg(e, t) {
  if (!e) throw Error(t);
}
function mg(e) {
  return -Math.sign(e);
}
function hg(
  e,
  {
    axis: t = `y`,
    onWheel: n,
    onSwipe: r,
    swipeThreshold: i = 100,
    swipeTimeout: a = 150,
    jitterThreshold: o = 2,
    lineHeight: s = 16,
  }
) {
  let c = `IDLE`,
    l = 0,
    u = 0,
    d = 0,
    f = !1,
    p = 0,
    m = !1,
    h = null,
    g = (e) => {
      let g = t === `x` && !e.shiftKey ? e.deltaX : e.deltaY,
        _ = t === `x` && !e.shiftKey ? e.deltaY : e.deltaX;
      if (Math.abs(g) < Math.abs(_)) return;
      (n || r) && e.preventDefault();
      let v = -(e.deltaMode === WheelEvent.DOM_DELTA_LINE ? g * s : g);
      if (v === 0) return;
      (h && clearTimeout(h),
        (h = setTimeout(() => {
          ((c = `IDLE`), (m = !1), (l = 0));
        }, a)),
        c === `IDLE` && (c = `WHEELING`));
      let y = mg(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = mg(t)),
          (f = !1),
          (p = 0),
          (d = Math.abs(e)),
          r?.(u),
          (l = (Math.abs(t) % i) * u));
      }
      switch (c) {
        case `WHEELING`: {
          let e = l + v;
          r && !m && Math.abs(e) >= i ? b(v, e) : ((l = e), n?.(v));
          break;
        }
        case `SWIPING`: {
          let e = Math.abs(v),
            t = y !== u,
            a = !1;
          if (d > 0) {
            let t = e - d;
            (t < 0 && (f = !0), f && t > o ? (p++, p > 2 && (a = !0)) : (p = 0));
          }
          if (t || a) {
            m = !1;
            let e = v;
            r && !m && Math.abs(e) >= i ? b(v, e) : ((c = `WHEELING`), (l = e), n?.(v));
            break;
          }
          d = e;
          break;
        }
      }
    };
  return (
    e.addEventListener(`wheel`, g, { passive: !1 }),
    () => {
      (h && clearTimeout(h), e.removeEventListener(`wheel`, g));
    }
  );
}
function gg() {
  let e = l(VO);
  return (Eg(!!e, `useCarousel must be used within a Carousel component`), e);
}
function _g(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function vg(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = _g(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Oe(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function yg(e, t, n, r) {
  return vg(e, n, r, e - t, t);
}
function bg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = _g(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Oe(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function xg(e, t, n, r) {
  return bg(e, n, r, e + t);
}
function Sg(e, t, n, r = !0) {
  let i = { insets: [], visibleLength: t };
  if (e.length === 0) return i;
  let a = [e[0].start];
  for (let r = 1; r < e.length; r++) {
    let { start: i, end: o } = e[r];
    if (a[a.length - 1] + t < o)
      if (n !== null)
        if (i <= n) a.push(i);
        else {
          a.push(n);
          break;
        }
      else a.push(i);
  }
  if (r && n !== null && a.length > 1) {
    let r = a[a.length - 1],
      i = [];
    for (let e = 0; e < a.length - 1; e++) i.push(a[e + 1] - a[e]);
    let o = i.reduce((e, t) => e + t, 0) / i.length;
    if (n - r < o * 0.5) {
      let r = Sg(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function Cg(e, t, n, r) {
  let i = -e,
    a = r === null ? Math.floor(i / n) : 0,
    o = a * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + o,
      s = Oe(0, t.length, e - 1),
      c = (e === 0 ? a - 1 : a) * n,
      l = t[s] + c,
      u = (r - l) / 2,
      d = Oe(0, t.length, e + 1),
      f = (e === t.length - 1 ? a + 1 : a) * n,
      p = t[d] + f;
    if (i < p - (p - r) / 2 && i >= l + u) return e;
  }
  return 0;
}
function wg({
  children: e,
  offset: t,
  targetOffset: n,
  tugOffset: r,
  loop: i = !0,
  transition: a,
  tickerRef: o,
  axis: s = `x`,
  snap: c = `page`,
  page: l,
  wheelSwipeThreshold: u,
}) {
  let d = M(!0),
    {
      clampOffset: f,
      totalItemLength: p,
      itemPositions: m,
      containerLength: h,
      gap: g,
      maxInset: v,
      direction: y,
      isMeasured: b,
    } = $h(),
    x = p + g,
    S = Sg(m, h, v),
    C = S.insets.length,
    { sign: w } = ng(s, y),
    T = M(void 0),
    E = M(!1);
  _(() => {
    if (l === void 0 || !b || C === 0) return;
    let e = me(0, C - 1, l),
      r = -S.insets[e] * w;
    E.current
      ? T.current !== l && ((T.current = l), n.jump(r), t.jump(r))
      : ((E.current = !0), (T.current = l), n.jump(r), t.jump(r));
  }, [b, C, l, w, n, t, S.insets]);
  let D = (e) => ({
      current: Cg(e * w, S.insets, x, v),
      isNextActive: i ? !0 : e * -w < v,
      isPrevActive: i ? !0 : e * -w > 0,
    }),
    [O, A] = j(() => D(n.get()));
  _(() => {
    ee();
  }, [h, p]);
  let ee = () => {
    let e = D(n.get());
    (e.current !== O.current ||
      e.isNextActive !== O.isNextActive ||
      e.isPrevActive !== O.isPrevActive) &&
      A(e);
  };
  Ye(n, `change`, (e) => {
    (t.set(e), ee());
  });
  let N = M(null),
    P = () => {
      N.current &&= (N.current.stop(), null);
    };
  _(() => {
    t.attach((e, n) => {
      (P(),
        d.current
          ? n(e)
          : (N.current = new Ge({
              keyframes: [t.get(), e],
              velocity: me(-2e3, 2e3, t.getVelocity()),
              ...a,
              onUpdate: n,
              onComplete: () => {
                N.current = null;
              },
            })),
        (d.current = !0));
    }, P);
  }, []);
  let F = (e) => {
      let t = f(e);
      (n.stop(), (d.current = !1), n.set(t * w));
    },
    te = (e, t) => {
      let i = -e(-n.get() * w, S.visibleLength, m, g),
        a = f(i);
      a * w === n.get() ? pe(r, 0, { velocity: t * w * 400, ...UO }) : F(a);
    },
    ne = () => te(xg, -1),
    re = () => te(yg, 1),
    I = (e) => {
      let t = (i ? Math.floor((-n.get() * w) / x) : 0) * -x;
      F(-S.insets[e] + t);
    },
    L = M({ nextPage: ne, prevPage: re, clampOffset: f });
  return (
    _(() => {
      L.current = { nextPage: ne, prevPage: re, clampOffset: f };
    }, [ne, re, f]),
    _(() => {
      let e = o.current;
      if (e)
        return hg(e, {
          axis: s,
          swipeThreshold: u,
          onSwipe: c
            ? (e) => {
                let { nextPage: t, prevPage: n } = L.current;
                e * w === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = L.current,
              i = t.get() + e,
              a = w > 0 ? r(i) : me(0, v, i);
            n.jump(v ? a : i);
          },
        });
    }, [s, c, t, w]),
    k(VO.Provider, {
      value: {
        currentPage: O.current,
        isNextActive: O.isNextActive,
        isPrevActive: O.isPrevActive,
        totalPages: C,
        nextPage: ne,
        prevPage: re,
        gotoPage: I,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function Tg({
  children: e,
  loop: t = !0,
  transition: n = HO,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = M(null),
    l = ke(0),
    u = ke(0),
    d = ke(0);
  return k(IO, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: Re(() => d.get() + u.get()),
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: k(wg, {
      tickerRef: c,
      loop: t,
      offset: u,
      tugOffset: d,
      targetOffset: l,
      transition: n,
      snap: i,
      axis: r,
      page: a,
      wheelSwipeThreshold: o,
      children: e,
    }),
  });
}
function Eg(e, t) {
  if (!e) throw Error(t);
}
function Dg({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = gg(),
    i = ke(0);
  return (
    _(() => {
      if (!r) return;
      let n = pe(i, [0, 1], { duration: e, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, i, n, r, t]),
    null
  );
}
function Og(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!B(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function kg(e, t) {
  if (W(e)) return e;
  if (!B(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Ag(parseInt(i));
  if (t === `y` && r) return Ag(parseInt(r));
}
function Ag(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function jg(e) {
  let {
    carouselEffectEnabled: t,
    carouselEffectAlign: n,
    carouselEffectAutoPlay: r,
    carouselEffectControls: i,
    carouselEffectGap: a,
    carouselEffectInterval: o,
    carouselEffectLoop: s,
    carouselEffectOverflow: c,
    carouselEffectSnap: l,
    carouselEffectStackDirection: u,
    carouselEffectXOverflow: d,
    carouselEffectYOverflow: f,
    tickerEffectEnabled: p,
    tickerEffectAlign: m,
    tickerEffectDirectionModifier: h,
    tickerEffectDraggable: g,
    tickerEffectGap: _,
    tickerEffectHoverModifier: v,
    tickerEffectIsDataRepeater: y,
    tickerEffectOverflow: b,
    tickerEffectPosition: x,
    tickerEffectStackDirection: S,
    tickerEffectVelocity: C,
    tickerEffectXOverflow: w,
    tickerEffectYOverflow: T,
    ...E
  } = e;
  return {
    carouselEffectProps: {
      carouselEffectAlign: n,
      carouselEffectAutoPlay: r,
      carouselEffectControls: i,
      carouselEffectGap: a,
      carouselEffectInterval: o,
      carouselEffectLoop: s,
      carouselEffectOverflow: c,
      carouselEffectSnap: l,
      carouselEffectStackDirection: u,
      carouselEffectXOverflow: d,
      carouselEffectYOverflow: f,
    },
    tickerEffectProps: {
      tickerEffectAlign: m,
      tickerEffectDirectionModifier: h,
      tickerEffectDraggable: g,
      tickerEffectGap: _,
      tickerEffectHoverModifier: v,
      tickerEffectIsDataRepeater: y,
      tickerEffectOverflow: b,
      tickerEffectPosition: x,
      tickerEffectStackDirection: S,
      tickerEffectVelocity: C,
      tickerEffectXOverflow: w,
      tickerEffectYOverflow: T,
    },
    domProps: E,
  };
}
function Mg(e) {
  let t = e.__FramerMetadata__.exports.default.annotations?.framerVariables;
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return;
    }
}
function Ng(e, t) {
  return (n) => {
    let r = {},
      i = Mg(t);
    for (let e in n) Sx(r)[i?.[e] ?? e] = n[e];
    return k(e, { ...r });
  };
}
function Pg(e, t, n, r = tk) {
  let [i, a] = m.useState(e),
    [o, s] = m.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      m.useCallback(
        (e) => {
          Ti(e) ||
            (t && a(r(e)),
            n &&
              m.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Fg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Ig() {
  return k(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: k(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Lg(e, t) {
  _(() => {
    function r(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (n.addEventListener(`keyup`, r), () => n.removeEventListener(`keyup`, r));
  }, [e, t]);
}
function Rg(e, t, r, i) {
  let a = n.innerHeight - i,
    o = Math.min(n.innerWidth - r, t),
    s = a / e;
  return Math.min(o, s);
}
function zg(e, { width: t, height: r }) {
  if (!e.src || !e.srcSet) return;
  let i = new n.Image();
  return (
    (i.src = e.src),
    (i.srcset = e.srcSet),
    (i.sizes = e.sizes || ``),
    (i.width = t),
    (i.height = r),
    i.decode()
  );
}
function Bg() {
  return document.getElementById(AT) ?? document.getElementById(kT) ?? document.body;
}
function Vg(e, t) {
  return at(e) ? e : (t ?? 0);
}
function Hg(e) {
  return Vg(e?.paddingTop, e?.padding) + Vg(e?.paddingBottom, e?.padding);
}
function Ug(e) {
  return Vg(e?.paddingLeft, e?.padding) + Vg(e?.paddingRight, e?.padding);
}
function Wg(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Ug(e)}px)`,
      srcSet: so(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Gg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in pk)) continue;
    let n = pk[t],
      r = e[t];
    if (!(!at(n) || !at(r)) && n !== r) return !0;
  }
  return !1;
}
function Kg(e) {
  let t = Ze.get(e.current);
  if (!t) return !1;
  if (Gg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Gg(e.latestValues)) return !0;
  return !1;
}
function qg(e) {
  return E(function ({ lightbox: n, lightboxClassName: r, onClick: i, ...a }, c) {
    let d = l(He),
      f = l(JO),
      p = !!f,
      m = M(null),
      v = c ?? m,
      y = M(),
      b = u(() => Wg(n, a.background), [n, a.background]),
      [x, S] = j(!1),
      [C, w] = j(),
      E = t(() => {
        if (n) {
          if (x) {
            o(() => {
              S(!0);
            });
            return;
          }
          I.read(() => {
            if (!v.current) return;
            let e = getComputedStyle(v.current),
              t =
                v.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(v.current, `::after`)
                  : void 0,
              r = v.current.offsetWidth ?? 1,
              i = v.current.offsetHeight ?? 1,
              a = Kg(v) || p ? { duration: 0 } : n.transition;
            o(() => {
              (w({
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
                S(!0),
                f?.stop());
            });
          });
        }
      }, [n, x, v, f?.stop, p]),
      D = C?.aspectRatio ?? 1,
      O = gh(() => {
        if (!n || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = Rg(D, n.maxWidth, Ug(n), Hg(n)),
          r = zg(b, { width: t, height: t * D });
        return ((y.current = { [b.src]: r }), r);
      }),
      ee = t(
        async (e) => {
          (i?.(e), !(x || !n || !b) && (await O(), E()));
        },
        [i, E, x, b, n, O]
      ),
      N = t((e) => {
        (e?.stopPropagation(),
          o(() => {
            S(!1);
          }));
      }, []);
    (Lg(x, N),
      _(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            O();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = v.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, O),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, O));
          }
        );
      }, [O, v, n]));
    let P = h(),
      F = C?.transition ?? a.transition ?? d.transition,
      te = C?.borderRadius,
      ne = C?.imageRendering,
      re = C?.filter,
      L = C?.borderTop,
      ie = C?.borderRight,
      ae = C?.borderBottom,
      oe = C?.borderLeft,
      se = C?.borderStyle,
      ce = C?.borderColor,
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
      de = { [dT]: a.id },
      fe = Vg(n?.paddingTop, n?.padding),
      z = Vg(n?.paddingBottom, n?.padding),
      pe = Vg(n?.paddingLeft, n?.padding),
      me = Vg(n?.paddingRight, n?.padding),
      he = C?.borderRadius ? { ...a.style, borderRadius: C.borderRadius } : a.style,
      ge = x ? (a.layoutDependency ? `${a.layoutDependency}-open` : `open`) : a.layoutDependency,
      _e = p && x ? void 0 : (a.layoutId ?? (n ? P : void 0));
    return A(T, {
      children: [
        k(e, {
          ...a,
          style: he,
          onClick: ee,
          layoutId: _e,
          ref: v,
          layoutDependency: ge,
          transition: F,
        }),
        k(Be, {
          onExitComplete: () => {
            o(() => {
              (w(void 0), f?.start());
            });
          },
          children:
            x &&
            n &&
            b &&
            k(
              s,
              {
                children: g(
                  A(T, {
                    children: [
                      k(R.div, {
                        ...de,
                        className: r,
                        onClick: N,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: F,
                        initial: mk,
                        animate: hk,
                        exit: mk,
                      }),
                      k(R.div, {
                        ...de,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${fe}px ${me}px ${z}px ${pe}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: k(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: D,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: k(R.div, {
                            layoutId: _e,
                            transition: F,
                            onClick: E,
                            className: `framer-lightbox-container`,
                            "data-border": le,
                            style: {
                              aspectRatio: D,
                              borderRadius: te,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ne,
                              filter: re,
                              ...ue,
                            },
                            children: k(_o, { image: b, alt: b.alt, draggable: a.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Bg()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Jg(e, t) {
  return vk && !t
    ? Document.parseHTMLUnsafe(e)
    : ((_k ??= new DOMParser()), _k.parseFromString(e, t ?? `text/html`));
}
function Yg(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Xg(e, t, n, r) {
  return e.replace(yk, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Lu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Mh(f) || !Mh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Wt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = zu(u);
    if (!_ || B(_)) return e;
    Od(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(NT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = pi(m, v)), i + o + `"${Yg(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Zg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Qg(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function $g(e, t, n) {
  let r = M([]);
  Zg(r.current, e) ||
    ((r.current = e),
    kx.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && ws(n.current));
    }));
}
function e_() {
  return { current: null };
}
async function t_(e, t) {
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
function n_(e) {
  return e in Ck;
}
function r_(e, t) {
  let n = {};
  for (let r in e) {
    if (!n_(r)) continue;
    let i = e[r],
      a = Ck[r];
    ct(i) || ct(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function i_(e, t = `character`, n, r, i) {
  if (r) {
    let t = e_();
    return (n.add(t), k(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return A(
          s,
          {
            children: [
              k(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(wk)?.map((e, t) => {
                  let r = e_();
                  return (n.add(r), k(`span`, { ref: r, style: i, children: e }, e + t));
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
          o = e_();
        return (
          n.add(o),
          A(
            s,
            { children: [k(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function a_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function o_(e) {
  let t = [];
  return (
    at(e.x) && t.push(`translateX(${e.x}px)`),
    at(e.y) && t.push(`translateY(${e.y}px)`),
    at(e.scale) && t.push(`scale(${e.scale})`),
    at(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    at(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    at(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    at(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    at(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function s_(e, t, n, r) {
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
                transform: r ? void 0 : o_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : o_(n.effect),
              };
      }
    default:
      U(i);
  }
}
function c_(e, t, n) {
  let r = Za(() => new Set()),
    i = eo(),
    a = n || !i,
    o = Ce(),
    s = M({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    d = e?.threshold;
  _(() => {
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
            u_(
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
          U(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? re(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? re(t, e, {
              amount: d ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(c);
    }
  }, [a, r, n, t, l, d, c]);
  let f = !!e,
    p = e ? a_(e) : void 0;
  return u(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = s_(a, n || l_(e, t, i), s.current.effect, o);
        return {
          text: (e) => i_(e, p, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = e_();
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
            u_(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function l_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function u_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = r_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await d_(n, u);
      if (
        e === null ||
        (pe(e, l, { ...r, restDelta: 0.001, delay: ae(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        pe(e, n, { ...r, restDelta: 0.001, delay: ae(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await t_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (I.read(() => {
          ((e = f_(n)),
            e.length !== 0 &&
              I.update(() => {
                let t = e.map((e, t) =>
                  pe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          pe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function d_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await t_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function f_(e) {
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
function p_(e) {
  let t = {};
  for (let n in e) (ue(n) || wx(n)) && (t[n] = e[n]);
  return t;
}
function m_(e) {
  return e.type === s;
}
function h_(e) {
  return e.type === `br`;
}
function g_(e, t, n, r, a = {}, o, s = m_(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  ct(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!S(e) || !h_(e)) && (u = !1), S(e))) return g_(e, t, n, r, a, o, s + 1);
    let i = ct(n) ? e : n;
    return B(i) && o ? o.text(i) : i;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (B(e.type) || F(e.type)) {
    let n = ie(e.type) || e.type,
      c = d || n,
      p = B(c) ? t?.[c] : void 0;
    ((f.className = dl(`framer-text`, f.className, p)),
      o && s === 0 && !u && Object.assign(f, o.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = __(l, a);
      f.id = e;
      let t = dl(`framer-text`, h),
        n = k(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: r }), (l = [n]));
    }
    c === `ol` &&
      (f.style = { ...f.style, [TS]: y_(f.start ?? 1, i.count(f.children), f.style?.[wS] ?? ``) });
  }
  return c(e, f, ...l);
}
function __(e, t) {
  let n = ri(e.map(v_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function v_(e) {
  return B(e) || at(e)
    ? e.toString()
    : S(e)
      ? v_(e.props.children)
      : Array.isArray(e)
        ? e.map(v_).join(``)
        : ``;
}
function y_(e, t, n) {
  return rs(Number(e) || 1, t, n);
}
function b_(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = la(n.x, n.y),
    i = Rx(la(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: la.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  H(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !la.isEqual(e, s) && !la.isEqual(e, c));
  H(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Rx.intersection(i, Rx(s, c)),
    f = Rx.intersection(i, Rx(l, u));
  return (H(d && f, `linearGradientLine: Must have a start and end point.`), Rx(d, f));
}
function x_(e, t) {
  let n = b_(e.angle),
    r = Ns(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Rx.pointAtPercentDistance(n, i),
    s = Rx.pointAtPercentDistance(n, a),
    c = Ie([i, a], [0, 1]);
  return {
    id: `id${t}g${rC.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: ZS.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function S_(e, t) {
  return {
    id: `id${t}g${aC.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ns(e).map((t) => ({
      color: t.value,
      alpha: ZS.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function C_(e) {
  if (!B(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return at(parseFloat(t));
}
function w_(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return at(n) ? n : 50;
}
function T_(e) {
  return C_(e) ? w_(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function E_(e) {
  return C_(e) ? w_(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function D_(e, t, n, r) {
  if (((e = Wb.get(e, `#09F`)), !Lx.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * T_(e.positionX) + f),
        (d = (t.height - l) * E_(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * E_(e.positionY)))
        : ((n = g), (u = (1 - g) * T_(e.positionX))),
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
function O_(e) {
  return e.startsWith(`data:${Mk}`);
}
function k_(e, t) {
  if (/^\w+:/u.test(e) && !O_(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return kx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function A_(e) {
  try {
    let t = Jg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function j_(e, t) {
  N_(e, M_(t));
}
function M_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function N_(e, t) {
  (P_(e, t),
    Array.from(e.children).forEach((e) => {
      N_(e, t);
    }));
}
function P_(e, t) {
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
function F_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (zk[t[2]] || 1));
}
function I_(e) {
  let t = F_(e.getAttribute(`width`)),
    n = F_(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function L_(e) {
  return e.indexOf(`image`) >= 0;
}
function R_(e) {
  return e.indexOf(`var(--`) >= 0;
}
function z_(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function B_(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? q,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = Rk.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Fo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    W(s) &&
    W(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function V_({ height: e, width: t, children: n }) {
  let r = H_();
  if (!r || !n) return n;
  let { props: i } = r;
  return k(R.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function H_() {
  try {
    return eg();
  } catch {
    return;
  }
}
function U_(e) {
  return e > Wk ? `lazy` : void 0;
}
function W_(e, t, n) {
  let r = q_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function G_(e) {
  return e ? (e.fonts ?? Ri()) : Ri();
}
function K_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : q_(e);
}
function q_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    J_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Y_) })
      : t.fonts.push(Y_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function J_(e) {
  return Kk in e;
}
function Y_(e) {
  let t = X_(e) || Z_(e) ? e : Q_(e);
  return Z_(t) ? t : $_(t);
}
function X_(e) {
  return `source` in e;
}
function Z_(e) {
  return `cssFamilyName` in e;
}
function Q_(e) {
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
function $_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Gk}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function ev(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function tv(e) {
  return e.loader;
}
function nv(e, t, n) {
  let r = tv(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var rv,
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
  q,
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
  J,
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
  Y,
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
  X,
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
  Z,
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
  Q,
  sD,
  cD,
  lD,
  uD,
  dD,
  $,
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
  qk = e(() => {
    (p(),
      de(),
      a(),
      v(),
      D(),
      (rv = We({
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
      (iv = We({
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
      (av = We({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = iv();
        },
      })),
      (ov = We({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = av(),
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
      (sv = We({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function r(e) {
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
            function i(e) {
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
            function a(e, t) {
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
            function c(e, t, r) {
              ((t ||= {}),
                (r ||= n),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = r));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(n.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        n.navigator.userAgent
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
                  r(function () {
                    function r() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              n.navigator.userAgent
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
                          r()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new i(c),
                      g = new i(c),
                      _ = new i(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      a(m, h(o, `sans-serif`)),
                      a(g, h(o, `serif`)),
                      a(_, h(o, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      o.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      s(m, function (e) {
                        ((v = e), r());
                      }),
                      a(m, h(o, `"` + o.family + `",sans-serif`)),
                      s(g, function (e) {
                        ((y = e), r());
                      }),
                      a(g, h(o, `"` + o.family + `",serif`)),
                      s(_, function (e) {
                        ((b = e), r());
                      }),
                      a(_, h(o, `"` + o.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((n.FontFaceObserver = c),
                  (n.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (cv = () => {}),
      (lv = n !== void 0),
      (uv =
        lv &&
        (N.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(N.userAgent))),
      (dv = lv && typeof n.requestIdleCallback == `function`),
      (fv = dv ? n.requestIdleCallback : setTimeout),
      (pv = () => cv),
      (mv = () => !0),
      (hv = () => !1),
      (gv = new Map()),
      (_v = new Map()),
      (vv = new Set()),
      (yv = `:`),
      (bv = lv ? void 0 : new Set()),
      (xv = `preload`),
      (Sv = Object.keys),
      (Cv = `equals`),
      (wv = m.createContext({})),
      (Tv = m.createContext({})),
      (Ev = []),
      (Dv = `default`),
      (Ov = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (kv = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && yt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Ov.Pending;
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
          return this.promiseState === Ov.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Ov.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Ov.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && bv !== void 0 && bv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Ov.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Ov.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && gv.has(this.cacheHash) ? gv.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!mt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Ov.Fulfilled) return this.value;
          throw this.promiseState === Ov.Rejected
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
      (Av = -1),
      (jv = -2),
      (Mv = -3),
      (Nv = -4),
      (Pv = -5),
      (Fv = -6),
      (Iv = -7),
      (Lv = 2 ** 32 - 1),
      (Rv = Lv - 1),
      (zv = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Bv = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Vv = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Hv = typeof Uint8Array.fromBase64 == `function`),
      (Uv = typeof process == `object` && process.versions?.node !== void 0),
      (Wv = Hv ? on : Uv ? cn : un),
      (Gv = Hv ? sn : Uv ? ln : dn),
      (Kv = Object.freeze({ kind: `not-plain` })),
      (qv = Object.freeze({ kind: `symbol-keys` })),
      (Jv = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Yt(e),
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
        indicesOf: (e) => an(e),
        shapeOf: (e) =>
          Jt(e)
            ? Qt(e).length > 0
              ? qv
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : Kv,
        get: (e, t) => e[t],
      })),
      (Yv = Object.freeze({
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
          return ((t[Rv] = void 0), delete t[Rv], (t.length = e), t);
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
      (q = lv
        ? n
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
      (Xv = 2),
      (Zv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Qv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (ey = class {
        payload = bn();
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
              return hn(this.payload);
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
      (ty = lv ? void 0 : new ey()),
      (ny = Qv.CollectionUtilsCache),
      (ry = new WeakMap()),
      (iy = y(void 0)),
      (ay = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new kv(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(_t(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = Tn(n),
            i = En(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (ty !== void 0) {
              if (mt(e)) return e.then((e) => (ty.set(ny, i, e), e));
              ty.set(ny, i, e);
            }
            return e;
          }
          if (Cn(ny, i)) {
            let e = wn(ny, i);
            return (this.cacheMap.set(i, new kv(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = mt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(_t(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (ty !== void 0 && ty.set(ny, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new kv(async () => {
            try {
              let e = mt(s) ? await s : s;
              return (ty !== void 0 && ty.set(ny, i, e), e);
            } catch (e) {
              console.error(_t(`Failed to call CollectionUtils method.`, e));
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
      (oy = /Mac/u),
      (sy = /iPhone|iPod|iPad/iu),
      (cy = /MacIntel/iu),
      (ly = /Edg\//u),
      (uy = /Chrome/u),
      (dy = /Google Inc/u),
      (fy = /Safari/u),
      (py = /Apple Computer/u),
      (my = /Firefox\/\d+\.\d+$/u),
      (hy = /Version\/([\d.]+)/u),
      (gy = /FramerX/u),
      (_y = /tablet|iPad|Nexus 9/iu),
      (vy = /mobi/iu),
      (yy = 1e3 / 60),
      (by = 1e3 / 25),
      (xy = 500),
      (Sy = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Cy = Promise.resolve()),
      (wy = 100),
      (Ty = (e) => {
        I.read(e, !1, !0);
      }),
      (Ey = Qn(Ty)),
      (Dy = `framer_variant`),
      (Oy = RegExp(`:([a-z]\\w*)`, `gi`)),
      (ky = async () => {}),
      (Ay = { contentLocale: null, activeLocale: null, locales: [], setLocale: ky }),
      (jy = (() => {
        let e = m.createContext(Ay);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (My = (() => {
        let e = m.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Ny = !uv),
      (Py = !1),
      (Fy = m.createContext({ global: void 0, routes: {} })),
      (Iy = 10),
      (Ly = 1e4),
      (Ry = (e) => `--view-transition-${e}`),
      (zy = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Ry(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Ry(`conic-offset`)})`,
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
        @property ${Ry(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (By = {
        circle: {
          makeKeyframe: (e, t) => `${Ry(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Ry(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Sr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Ry(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: zy,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${xr(e.x)} ${xr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = yr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Ry(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Ry(`blinds-width`)})`,
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
            @property ${Ry(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Ry(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Ry(`wipe-offset`)})`,
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
            @property ${Ry(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Vy = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Hy = `view-transition-styles`),
      (Uy = {
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
      (Wy = () => {}),
      (Ky = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (Gy ||
            ((Gy = document.createElement(`div`)),
            Gy.setAttribute(`aria-live`, `assertive`),
            Gy.setAttribute(`aria-atomic`, `true`),
            (Gy.style.position = `absolute`),
            (Gy.style.transform = `scale(0)`),
            document.body.append(Gy)),
            setTimeout(() => {
              Gy.textContent = e;
            }, 60));
        }
      }),
      (Jy =
        lv &&
        typeof n.navigation?.back == `function` &&
        !(() => {
          if (N === void 0) return !1;
          let e = N.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Ln()),
      (Yy = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Xy = m.createContext(null)),
      (Zy = (() => {
        let e = y(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Qy = typeof document < `u` ? d : _),
      ($y = new Set()),
      (eb = (() => {
        let e = y({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (tb = 46),
      (nb = 47),
      (rb = (e, t) => e.charCodeAt(t)),
      (ib = (e, t) => e.lastIndexOf(t)),
      (ab = (e, t, n) => e.slice(t, n)),
      (ob = !1),
      (sb = `/`),
      (cb = (e) => e === nb),
      (lb = new Set([`/404.html`, `/404`, `/404/`])),
      (ub = `__f_replay`),
      (db = `__f_replay_ignore`),
      (fb = () => lv),
      (pb =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (mb = (e) => {
        e.target?.closest?.(`#main`) &&
          (wi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (hb = !1),
      (Mb = [ki]),
      (jb = [ki]),
      (Ab = [ki]),
      (kb = [ki]),
      (Ob = [ki]),
      (Db = [ki]),
      (Eb = [ki]),
      (Tb = [ki]),
      (wb = [ki]),
      (Cb = [ki]),
      (Sb = [ki]),
      (xb = [ki]),
      (bb = [ki]),
      (yb = [ki]),
      (vb = [ki]),
      (_b = [ki]),
      (gb = [ki]),
      (Pb = class {
        constructor() {
          (Qe(Nb, 5, this),
            xe(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            xe(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            xe(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            xe(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            xe(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            xe(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            xe(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Ai(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Ai(
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
            Ai(
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
            Ai(
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
            Ai(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Ai(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Ai(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Ai(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Ai(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (Nb = je(null)),
      ze(Nb, 1, `markRenderStart`, Mb, Pb),
      ze(Nb, 1, `markRenderEnd`, jb, Pb),
      ze(Nb, 1, `markUseInsertionEffectsStart`, Ab, Pb),
      ze(Nb, 1, `markUseInsertionEffectRouterStart`, kb, Pb),
      ze(Nb, 1, `markUseInsertionEffectsEnd`, Ob, Pb),
      ze(Nb, 1, `markUseLayoutEffectsStart`, Db, Pb),
      ze(Nb, 1, `markRouterUseLayoutEffectStart`, Eb, Pb),
      ze(Nb, 1, `markUseLayoutEffectsEnd`, Tb, Pb),
      ze(Nb, 1, `markUseEffectsStart`, wb, Pb),
      ze(Nb, 1, `markUseEffectsRouterStart`, Cb, Pb),
      ze(Nb, 1, `markUseEffectsAreSynchronous`, Sb, Pb),
      ze(Nb, 1, `markUseEffectsEnd`, xb, Pb),
      ze(Nb, 1, `markRafStart`, bb, Pb),
      ze(Nb, 1, `markRafEnd`, yb, Pb),
      ze(Nb, 1, `markLayoutStylePaintEnd`, vb, Pb),
      ze(Nb, 1, `measureMutationEffects`, _b, Pb),
      ze(Nb, 1, `measureUnattributedHydrationOverhead`, gb, Pb),
      Me(Nb, Pb),
      (Ib = !1),
      (Lb = { Start: Fi, End: Ii }),
      (Rb = class extends Error {}),
      (zb = class extends O {
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
          if (!(this.state.error instanceof Rb)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Li(e, t);
        }
      }),
      (Bb = Object.freeze([])),
      (Hb = new Set()),
      (Ub = class {
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
      (Wb = (() => {
        function e(e) {
          return (
            ra(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ia(e) ? e : new qb(e)
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
          (e.get = (e, t) => (e == null ? t : ia(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ia(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Gb = `onUpdate`),
      (Kb = `finishTransaction`),
      (qb = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new Ub();
        static interpolationFor(e, t) {
          if (ia(e)) return aa(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ia(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: sa(e.x, t.x), y: sa(e.y, t.y) })),
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
      })((la ||= {})),
      (Jb = {
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
      (Yb = class e {
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
      (Yb.hexChars = `0123456789abcdef`),
      (Yb.refY = 1),
      (Yb.refU = 0.19783000664283),
      (Yb.refV = 0.46831999493879),
      (Yb.kappa = 903.2962962),
      (Yb.epsilon = 0.0088564516),
      (Yb.m_r0 = 3.240969941904521),
      (Yb.m_r1 = -1.537383177570093),
      (Yb.m_r2 = -0.498610760293),
      (Yb.m_g0 = -0.96924363628087),
      (Yb.m_g1 = 1.87596750150772),
      (Yb.m_g2 = 0.041555057407175),
      (Yb.m_b0 = 0.055630079696993),
      (Yb.m_b1 = -0.20397695888897),
      (Yb.m_b2 = 1.056971514242878),
      (Xb = new Yb()),
      (Zb = {
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
      (Qb =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      ($b = (e) => {
        let { r: t, g: n, b: r, a: i } = Na(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (ex = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Fa({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (tx = (e) => {
        let { r: t, g: n, b: r, a: i } = Na(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (nx = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Fa({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (rx = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Ia(this);
        }
        rgb() {
          return Ba(this);
        }
        hsl() {
          return ya(this.r, this.g, this.b);
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
              return new e(Ra(t));
            case `srgb`:
              return new e(za(Ra(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            za({
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
          let n = ja(t);
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
      (ix = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = ix.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (ix.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Va(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && Oa(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
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
          (e.toHex = (e, t = !1) => va(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && rx.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...ma(e.r, e.g, e.b), a: e.roundA })),
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
            let t = Sa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Sa(e.r, e.g, e.b),
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
            let t = va(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Jb)) if (Jb[e] === t) return e;
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
                r: ua(i, [0, 1], [t.r, r.r], a),
                g: ua(i, [0, 1], [t.g, r.g], a),
                b: ua(i, [0, 1], [t.b, r.b], a),
                a: ua(i, [0, 1], [t.a, r.a], a),
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
                h: ua(i, [0, 1], [u, u + f], a),
                s: ua(i, [0, 1], [c.s, l.s], a),
                l: ua(i, [0, 1], [c.l, l.l], a),
                a: ua(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ha(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => ya(e, t, n)),
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
      (ax = (e) => e instanceof Te),
      (ox = rv().EventEmitter),
      (sx = class {
        _emitter = new ox();
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
      (cx = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (lx = q.requestAnimationFrame || cx),
      (ux = (e) => lx(e)),
      (dx = 1 / 60),
      (fx = class extends sx {
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
          dx = e;
        }
        static get TimeStep() {
          return dx;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), ux(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * dx;
        }
        tick = () => {
          this._started &&
            (ux(this.tick),
            this.emit(`update`, this._frame, dx),
            this.emit(`render`, this._frame, dx),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (px = new fx()),
      (mx = { target: qa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => mx.target,
        hasRestrictions: () => {
          let e = mx.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (hx = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      et({
        borderTopWidth: hx(`y`),
        borderLeftWidth: hx(`x`),
        borderRightWidth: hx(`x`),
        borderBottomWidth: hx(`y`),
      }),
      (gx = m.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (_x = {
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
      (vx = {
        ..._x,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (yx = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (bx = { ...yx, fontWeight: 500 }),
      (xx = {
        ...yx,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Sx = (e) => e),
      (Cx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (wx = no(
        (e) =>
          Cx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Tx = (e) => () => {
        na(e);
      }),
      (Ex = () => () => {}),
      (Dx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = kx.useImageSource(e, t, n);
          return u(() => {
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
      (Ox = !1),
      (kx = new Proxy(Dx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Ex()
              : Tx(
                  Ox
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Ax = {
        isSelectorLoaded(e) {
          return kx.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return kx.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return kx.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return kx.fontStore.loadMissingFonts(e, t);
        },
      }),
      (jx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Mx = [1, 2, 2.2]),
      (Nx = [512, 1024, 2048, 4096]),
      (Px = 512),
      (Fx = { position: `absolute`, ...jx, top: 0, right: 0, bottom: 0, left: 0 }),
      (Ix = `src`),
      (Lx = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Ix in e;
        },
      }),
      (Rx = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = To(la.angleFromX(t.a, t.b)),
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
            return e(la(n.x - i, n.y + r), n);
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
          (e.distance = (e) => la.distance(e.a, e.b)),
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
          x: oa(e.x, t),
          y: oa(e.y, t),
          width: oa(e.width, t),
          height: oa(e.height, t),
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
          return { x: a, y: o, width: la.distance(t, n), height: la.distance(t, i) };
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
            la.distance({ x: n, y: r }, { x: 0, y: 0 })
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
          return [Rx(t, n), Rx(n, r), Rx(r, i), Rx(i, t)];
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
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
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
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
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
          let n = Rx(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Rx.intersection(n, t, !0)) {
              let n = zx[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(zx)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (zx = [`top`, `right`, `bottom`, `left`]),
      (Bx = {
        quickfix: (e) => (
          (Eo(e.widthType) || Eo(e.heightType)) && (e.aspectRatio = null),
          W(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Eo(e.widthType) || W(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Eo(e.heightType) || W(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Vx = {
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
            d = Bx.quickfix({
              left: W(t) || ia(t),
              right: W(n) || ia(n),
              top: W(r) || ia(r),
              bottom: W(i) || ia(i),
              widthType: Do(a),
              heightType: Do(o),
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
          } else a !== void 0 && typeof a != `string` && (f = Wb.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Wb.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Wb.getNumber(t) : null,
              right: d.right ? Wb.getNumber(n) : null,
              top: d.top ? Wb.getNumber(r) : null,
              bottom: d.bottom ? Wb.getNumber(i) : null,
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
            o = t?.sizing ? Wb.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Wb.getNumber(t?.sizing.height) : null,
            c = No(e.left, e.right);
          if (o && W(c)) i = o - c;
          else if (n && Eo(e.widthType)) i = n.width;
          else if (W(e.width))
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
                U(e.widthType);
            }
          let l = No(e.top, e.bottom);
          if (s && W(l)) a = s - l;
          else if (n && Eo(e.heightType)) a = n.height;
          else if (W(e.height))
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
                U(e.heightType);
            }
          return Mo(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Vx.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Wb.getNumber(l.width) : null,
            d = l ? Wb.getNumber(l.height) : null;
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
      (Hx = 200),
      (Ux = 200),
      (Wx = m.createContext({ parentSize: 0 })),
      (Gx = (e) => {
        let t = Vo(),
          { parentSize: n, children: r } = e,
          i = m.useMemo(() => ({ parentSize: n }), [Uo(n), Wo(n)]);
        return t === 1
          ? r
            ? k(T, { children: r })
            : null
          : k(Wx.Provider, { value: i, children: r });
      }),
      (Kx = m.createContext(void 0)),
      (qx = new Set()),
      (Yx = `style[data-framer-css-ssr-minified]`),
      (Xx = (() => {
        if (!zn()) return new Set();
        let e = document.querySelector(Yx)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Zx = `data-framer-css-ssr`),
      (Qx = (e, t, n) =>
        m.forwardRef((r, i) => {
          let { sheet: a, cache: o } = m.useContext(Kx) ?? {},
            s = n;
          if (!zn()) {
            rt(t) && (t = t(Qo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            eS.add(e, s);
          }
          return (
            f(() => {
              (s && Xx.has(s)) ||
                (rt(t)
                  ? t(Qo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Zo(e, a, o));
            }, []),
            k(e, { ...r, ref: i })
          );
        })),
      ($x = class {
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
      (eS = new $x()),
      (tS = `--framer-will-change-override`),
      (nS = `--framer-will-change-effect-override`),
      (rS = `--framer-will-change-filter-override`),
      (iS = `--overflow-clip-fallback`),
      (aS = `--one-if-corner-shape-supported`),
      (oS = [
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
      (sS = ((e) => (
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
      ))(sS || {})),
      (cS = sS),
      (lS = `framer-form-input`),
      (uS = `framer-form-input-wrapper`),
      (dS = `framer-form-input-empty`),
      (fS = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${$o(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (pS = [
        Z(`.${lS}`, {
          padding: Z.variable(cS.Padding),
          background: `transparent`,
          fontFamily: Z.variable(cS.FontFamily),
          fontWeight: Z.variable(cS.FontWeight),
          fontSize: Z.variable(cS.FontSize),
          fontStyle: Z.variable(cS.FontStyle),
          color: Z.variable(cS.FontColor),
          fontFeatureSettings: Z.variable(cS.FontOpenType),
          fontVariationSettings: Z.variable(cS.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(cS.WrapperHeight, `100%`),
          letterSpacing: Z.variable(cS.FontLetterSpacing),
          textAlign: Z.variable(cS.FontTextAlignment),
          lineHeight: Z.variable(cS.FontLineHeight),
        }),
        Z(`.${lS}:focus-visible`, { outline: `none` }),
      ]),
      (mS = [Z(`.${uS}`, { overflow: `hidden` })]),
      (hS = `var(${cS.BorderTopWidth}) var(${cS.BorderRightWidth}) var(${cS.BorderBottomWidth}) var(${cS.BorderLeftWidth})`),
      (gS = [
        `.${uS}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${cS.BorderRadiusTopLeft});
        border-top-right-radius: var(${cS.BorderRadiusTopRight});
        border-bottom-right-radius: var(${cS.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${cS.BorderRadiusBottomLeft});
        corner-shape: var(${cS.CornerShape});
        border-color: var(${cS.BorderColor});
        border-top-width: var(${cS.BorderTopWidth});
        border-right-width: var(${cS.BorderRightWidth});
        border-bottom-width: var(${cS.BorderBottomWidth});
        border-left-width: var(${cS.BorderLeftWidth});
        border-style: var(${cS.BorderStyle});
        transition: var(${cS.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (_S = `customError`),
      (vS = `valid`),
      (yS = 10),
      (bS = 8),
      (xS = 16),
      (SS = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${xS}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${xS}px`,
        backgroundColor: Z.variable(cS.IconColor),
      }),
      (CS = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${xS}px`,
        boxSizing: `content-box`,
        padding: Z.variable(cS.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...SS,
      }),
      (wS = `--list-style-type`),
      (TS = `--max-list-digits`),
      (ES = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (DS = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (OS = { display: `inline-block` }),
      (kS = { display: `block` }),
      (AS = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${DS.display};
            flex-direction: ${DS.flexDirection};
            justify-content: ${DS.justifyContent};
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
                color: ${cs([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${cs([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${cs([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${OS.display};
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
                color: ${cs([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${cs([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${cs([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${cs([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${cs([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${cs([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${cs([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${cs([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${cs([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${cs([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${cs([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${cs([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${cs([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${cs([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${cs([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${cs([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${cs([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${cs([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${cs([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${kS.display};
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
            padding-inline-start: calc(calc(var(${TS}, 1) + 1) * 1ch);
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
        ${ls(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (jS = `--text-truncation-display-inline-for-safari-16`),
      (MS = `--text-truncation-display-none-for-safari-16`),
      (NS = `--text-truncation-line-break-for-safari-16`),
      (PS = [
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
      (FS = `(background: -webkit-named-image(i))`),
      (IS = `(contain-intrinsic-size: inherit)`),
      (LS = [
        `@supports ${FS} and (not ${IS}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${PS.join(`, `)} { display: var(${jS}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${PS.map((e) => `${e}::after`).join(`, `)} { content: var(${NS}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${MS}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${jS}, ${OS.display}) }
    }`,
      ]),
      (RS = (e) => {
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
                  `body { ${tS}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${tS}: transform; } }`,
                ]
              : [`body { ${tS}: none; ${nS}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${rS}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${rS}: filter; } }`,
                ]
              : [`body { ${rS}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${iS}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${aS}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...AS,
          ...oS,
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
          ...LS,
          f,
        ];
      }),
      (zS = Xo(() => RS(!1))),
      (BS = Xo(() => RS(!0))),
      (VS = In()),
      (HS = m.createContext(!1)),
      (US = class {
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
      (WS = zn() ? new US() : void 0),
      (GS = `data-framer-size-compatibility-wrapper`),
      (KS = `0.000001px`),
      (qS = ` translateZ(${KS})`),
      (JS = Vn() || Ln() || Hn()),
      (YS = (() => {
        class e extends O {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Ts(t) : Es(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Ft(this.props, e);
          }
          componentDidUpdate(e) {
            Sx(this.props).clip &&
              Sx(this.props).radius === 0 &&
              Sx(e).radius !== 0 &&
              Os(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (XS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (ZS = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = Oa(e);
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
        hsvToHSLString: (e) => J.toHslString(J(ga(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(ga(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(ga(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(ga(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ga(e.h, e.s, e.v),
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
      (QS = /var\(.+\)/u),
      ($S = new Map()),
      (eC = [`stops`]),
      (tC = [`start`, `end`]),
      (nC = [`angle`, `alpha`]),
      (rC = {
        isLinearGradient: (e) => V(e) && nC.every((t) => t in e) && (Is(e) || Fs(e)),
        hash: (e) => e.angle ^ Ps(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Ns(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (iC = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (aC = {
        isRadialGradient: (e) => V(e) && iC.every((t) => t in e) && (Is(e) || Fs(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ps(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Ns(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (oC = [
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
      (sC = new Set([...oC, ...oC.map((e) => `${e}Capture`)])),
      (cC = `overflow`),
      (lC = { x: 0, y: 0, width: 200, height: 200 }),
      (uC = new Set([
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
      (dC = E(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = hs(e),
          u = qs(s),
          d = _s(e),
          f = Hs(e),
          p = M(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Sx(e)[`data-framer-offset-parent-id`],
          };
        !Js(e) && n && (Sx(h)[`data-framer-name`] = n);
        let [g, _] = Ks(s),
          v = Gs(s),
          y = qo(v),
          b = r && !(_ && !y && Fo(v)) ? r : void 0;
        (b ? (u.transformTemplate ||= gs(r)) : (u.transformTemplate ||= void 0),
          Object.assign(h, ps(b, s.style)),
          Cs(e, m));
        let x = xo(e),
          S = Ys(s, v, _, l(HS)),
          C = Go(
            A(T, {
              children: [
                x
                  ? k(_o, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && ms(e.id),
                      layoutId: d,
                    })
                  : null,
                c,
                k(yo, { ...a, border: i, layoutId: d }),
              ],
            }),
            S
          ),
          w = Yo(e.as),
          E = Jo(x);
        return (
          e.fitImageDimension &&
            E &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = E.width / E.height)),
          A(w, { ...h, ...u, layoutId: d, style: g, ref: m, children: [C, o] })
        );
      })),
      (fC = ds(
        E(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? k(dC, { ...e, ref: t }) : null;
        })
      )),
      (pC = `__LAYOUT_TREE_ROOT`),
      (mC = m.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (hC = class extends O {
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
                preserveFollowOpacity: t.options.layoutId === pC && !this.follow?.isExiting,
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
          return k(mC.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (gC = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (_C = class {
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
      (vC = y(new Map())),
      (yC = typeof IntersectionObserver > `u` ? cv : ic),
      (bC = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (xC = m.createContext(null)),
      (SC = class extends O {
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
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === pC && !this.props.isExiting;
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
          return k(Xe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (CC = (e) => {
        let t = m.useContext(mC);
        return k(SC, { ...e, sharedLayoutContext: t });
      }),
      (wC = m.createContext(!0)),
      (TC = y({ register: () => {}, deregister: () => {} })),
      (EC = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let i = uc(),
          a = M({
            register: t(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i]
            ),
            deregister: t(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i]
            ),
          }).current;
        return (
          _(
            () => (
              i.forEach((t, r) => {
                let a = r(e, n);
                i.set(r, rt(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, n, i]
          ),
          k(TC.Provider, { value: a, children: r })
        );
      }),
      (DC = m.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
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
        let w = ce(),
          T = l(Le),
          { persistLayoutIdCache: E } = l(gx),
          D = M({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: pc({}, h, a),
          }),
          O = M(null),
          j = T !== null && !T.isPresent;
        (t && D.current.wasCurrent === void 0 && E(),
          _(() => {
            if (e || !w) return;
            if (j) {
              D.current = { ...D.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = D.current,
              o = (t && !i) || (!j && D.current.wasBeingRemoved && t),
              s = n && !r,
              c = pc(D.current.origins, h, a),
              l = D.current.wasReset;
            (o || s
              ? (w.stop(), w.start({ zIndex: b, ...c, ...a }), (l = !1))
              : l === !1 && (w.stop(), w.set({ zIndex: b, ...OC, opacity: 0 }), (l = !0)),
              (D.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let ee = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          N = m ? { type: !1 } : p || f,
          P = { ...v };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let F = (mc(a) || mc(h)) && (e || t || n) ? 1200 : void 0,
          te = { ...OC, ...D.current.origins },
          ne = e
            ? {
                initial: { ...te, ...h },
                animate: { ...te, ...a, transition: ee },
                exit: { ...te, ...g, transition: f },
              }
            : { animate: w, exit: { ...te, ...g, transition: N } },
          re = !(j || x === !1),
          I = !!t && re,
          L = t && C;
        return A(fC, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: F,
          },
          children: [
            e &&
              k(fC, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            k(fC, {
              ...P,
              ...ne,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? d : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: L || e || (t && y) ? 1 : 0 },
              "data-is-present": re ? void 0 : !1,
              ref: O,
              children: k(xC.Provider, {
                value: O,
                children: k(wC.Provider, {
                  value: I,
                  children: k(EC, {
                    isCurrent: I,
                    isOverlayed: r,
                    children: k(CC, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: ee,
                      isExiting: !re,
                      isOverlayed: r,
                      id: S,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, fc)),
      (OC = {
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
      (kC = class {
        warning = () => {
          na(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
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
      (AC = y(new kC())),
      (jC = {
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
      (MC = () => ({
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
      (NC = Sv(OC)),
      (PC = m.createContext(void 0)),
      (FC = m.createContext(void 0)),
      (IC = (() => {
        class e extends O {
          #e = null;
          state = MC();
          static defaultProps = { enabled: !0 };
          static contextType = PC;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !wo(t) || !Co(t)) return;
            let n = { ...jC.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = vc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!wo(t) || !Co(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, jC.Instant)
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
            let t = vc(this.state, e);
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
              ((this.#e = globalThis.event?.timeStamp || null), !e || !wo(e) || !Co(e))
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
            this.#i(e, jC.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, jC.Fade, t);
          }
          push(e, t) {
            this.#i(e, hc(t), t);
          }
          modal(e, t) {
            this.#i(e, jC.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, gc(t), t);
          }
          flip(e, t) {
            this.#i(e, _c(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, jC.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Nc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                k(
                  DC,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Uc(o, e),
                    transitionProps: u,
                    animation: Hc(o, e),
                    backfaceVisible: Bc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: k(Xs, { children: Gc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              k(
                DC,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: zc(n, t),
                  transitionProps: Vc(n, t),
                  instant: Uc(n, t, !0),
                  animation: Hc(n, t),
                  exitProps: e.transition.enter,
                  visible: Wc(n, t),
                  backdropColor: Lc(e.transition),
                  backfaceVisible: Rc(n, t),
                  onTapBackdrop: Kc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Gc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return k(fC, {
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
              children: k(AC.Provider, {
                value: this,
                children: A(FC.Provider, {
                  value: i,
                  children: [
                    k(DC, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Pc(n),
                      animation: Fc(n),
                      backfaceVisible: Ic(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: k(Ja, {
                        children: k(hC, {
                          children: k(Be, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    k(Be, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (LC = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (RC = ds(m.forwardRef(qc))),
      tt(ov(), 1),
      (zC = ((e) => (
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
      ))(zC || {})),
      (BC = `optional`),
      (VC = `outputControls`),
      tt(ov(), 1),
      tt(ov(), 1),
      (HC = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (UC = Symbol(`private`)),
      (WC = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [UC]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Ub(),
                reset() {
                  for (let t in i)
                    if (HC(i, t)) {
                      let n = HC(e, t) ? Sx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, KC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[UC].reset()),
          (e.addObserver = (e, t) => e[UC].observers.add(t)),
          e
        );
      })()),
      (GC = class {
        set = (e, t, n, r) => {
          if (t === UC) return !1;
          let i = e[UC],
            a,
            o;
          if (
            (ia(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Wb(n)),
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
            l = Sx(e)[t];
          if (l !== void 0) {
            ia(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Sx(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === UC) return Sx(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[UC].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(UC);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== UC) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (KC = new GC()),
      (qC = `opacity`),
      (JC = (() => {
        function e(t = {}) {
          let n = WC(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => WC.resetObject(e));
          }),
          (e.addObserver = (e, t) => WC.addObserver(e, t)),
          e
        );
      })()),
      (YC = { update: 0 }),
      (XC = m.createContext({ update: NaN })),
      (ZC = class extends O {
        observers = [];
        state = YC;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), px.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), JC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            JC._stores.forEach((e) => {
              let t = JC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            k(XC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      tt(ov(), 1),
      (QC = `__framer__`),
      ($C = QC.length),
      (ew = m.createContext(void 0)),
      (tw = m.createContext(void 0)),
      (nw = `ssr-variant`),
      (rw = `ssr-variant-group-separator`),
      (iw = m.forwardRef(function (e, t) {
        let n = ml(t),
          r = m.useContext(tw),
          i = m.useSyncExternalStore(pv, hv, mv),
          a = Za(() => (i ? (zn() ? 1 : 2) : 0)),
          o = m.useContext(ew);
        return oi(() => {
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
              return n(s, Sl(t, c, i));
            case 1:
              return _l(i, s, c, u, l, d, n, t);
            case 2:
              return _l(i, s, c, u, l, d, pl, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (aw = Qx(iw, `.${nw} { display: contents }`, `PropertyOverrides`)),
      (ow = `default`),
      (sw = new Set([ow])),
      (cw = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = ow, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return ow;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = vl(r)) : ow;
        }
        setAll(e, t = sw, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = rt(n.transformTemplate) ? n.transformTemplate?.({}, uw) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
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
      (lw = new cw()),
      (uw = `__Appear_Animation_Transform__`),
      (dw = `data-framer-appear-id`),
      (fw = `data-framer-appear-animation`),
      (pw = (e) => {
        if (eo())
          return {
            animate: wl(e.animate) ? e.animate : void 0,
            initial: wl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (mw = [
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
      (hw = (e) => ({
        x: L(e?.x ?? 0),
        y: L(e?.y ?? 0),
        opacity: L(e?.opacity ?? 1),
        scale: L(e?.scale ?? 1),
        rotate: L(e?.rotate ?? 0),
        rotateX: L(e?.rotateX ?? 0),
        rotateY: L(e?.rotateY ?? 0),
        skewX: L(e?.skewX ?? 0),
        skewY: L(e?.skewY ?? 0),
        transformPerspective: L(e?.transformPerspective ?? 0),
      })),
      (gw = {
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
      (_w = { willChange: `transform` }),
      Object.freeze(_w),
      (vw = {}),
      Object.freeze(vw),
      (yw = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (bw = () => {
        let e = M();
        return (
          _(
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
      (xw = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (Sw = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Cw = 1),
      (ww = 4),
      (Tw = new Set([
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
      (Ew = [`animate`, `animate`]),
      (Dw = { inputRange: [], outputRange: [] }),
      (Ow = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (kw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Aw = () => ({
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
      (jw = [0, 1]),
      (Mw = { parallax: xw, styleAppear: Tw, styleTransform: Ow, loop: yw, presence: Sw }),
      (Nw = Sv(Mw)),
      (Pw = (e) => e.reduce((e, t) => (e += t), 0)),
      (Fw = (e) => e.reduce((e, t) => (e *= t), 1)),
      (Iw = `current`),
      (Lw = (e) =>
        m.forwardRef((t, n) => {
          if (t.__withFX)
            return k(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = pw(t);
          if (r) return k(e, { ...t, ...r, ref: n });
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
            } = ql(t),
            p = tc(n),
            { values: h, style: g } = Nl(s, p, f, t.style, t[le]),
            { values: _, style: v } = kl(i, p, t.style?.visibility),
            { values: y, style: b } = Gl(o, p),
            { values: x, style: S } = Vl(a, p),
            { values: C, style: w } = Dl(c, p),
            T = m.useMemo(() => {
              let e = new Te(u ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, _, x, C, h]);
          Yl(t.style, T);
          let E = Re(T.scale, Fw),
            D = Re(T.opacity, Fw),
            O = Re(T.x, Pw),
            A = Re(T.y, Pw),
            j = Re(T.rotate, Pw),
            M = Re(T.rotateX, Pw),
            ee = Re(T.rotateY, Pw),
            N = Re(T.skewX, Pw),
            P = Re(T.skewY, Pw),
            F = Re(T.transformPerspective, Pw),
            { drag: te, dragConstraints: ne } = l;
          ys(te && Jl(ne) ? ne : void 0);
          let re = {
            opacity: D,
            scale: E,
            x: O,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: ee,
            skewX: N,
            skewY: P,
          };
          ct(d) && (re.transformPerspective = F);
          let I = Xl(t.animate) ? t.animate : void 0,
            L = Xl(t.initial) ? t.initial : void 0,
            ie = Xl(t.exit) ? t.exit : void 0,
            ae = f && !s.presenceInitial ? { initial: L, animate: I, exit: ie } : {};
          return k(e, {
            ...l,
            ...ae,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...re, ...S, ...g },
            values: h,
            ref: p,
          });
        })),
      (Rw = y({})),
      (zw = m.createContext({})),
      (Bw = m.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = m.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = ml(a);
        return k(zw.Provider, { value: o, children: s(r, i) });
      })),
      (Vw = (e) =>
        m.forwardRef((t, n) =>
          k(e, { layoutId: _s(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (Hw = {}),
      (Uw = () => Hw),
      (Ww = (e) => {
        Hw = e;
      }),
      (Gw = !1),
      (Kw = class extends O {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!$l(e)) return;
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
              _t(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          vn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!$l(e)) throw e;
          return ((Gw = !0), this.props.children);
        }
      }),
      (qw = n === void 0 ? null : new Promise(() => {})),
      (Jw = k(eu, {})),
      (Yw = y(!1)),
      (Yw.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Xw = k(nu, {})),
      (Zw = class extends O {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (iu(this.props.getErrorMessage(), t?.componentStack), ru(e, t));
        }
        render() {
          let { children: e, fallback: t = Xw } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Qw = class extends O {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            ru(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      ($w = m.createContext(void 0)),
      (eT = `code-crash:`),
      (tT = Vw(
        m.forwardRef(function (
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
          let u = Za(() => (t ? `${t}-container` : void 0)),
            d = Yo(n),
            f = vu(
              m.Children.map(e, (e) =>
                m.isValidElement(e) ? m.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return k(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: k(HS.Provider, {
              value: !0,
              children: k(Xy.Provider, {
                value: i ?? null,
                children: k(Xa, {
                  enabled: !1,
                  children: k(Ne, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (nT = m.forwardRef(function (e, t) {
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
          d = vu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Yo(f);
          return k(Xy.Provider, {
            value: a ?? null,
            children: k(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return k(Xy.Provider, {
            value: a ?? null,
            children: k(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (iT = new Set()),
      (aT = y({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (oT = `framer-cursor-none`),
      (sT = `framer-pointer-events-none`),
      (cT = r(function ({ children: e }) {
        let t = Za(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = wu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Ce();
        return A(aT.Provider, { value: t, children: [e, !n && k(fT, {})] });
      })),
      (lT = Qx(
        cT,
        [
          `.${oT}, .${oT} * { cursor: none !important; }`,
          `.${sT}, .${sT} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (uT = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (dT = `data-framer-portal-id`),
      (fT = r(function () {
        let { onRegisterCursors: e } = l(aT),
          n = Cu(!1),
          r = ke(0),
          i = ke(0),
          a = ke(0),
          o = M(null),
          s = M({ cursors: {}, cursorHash: void 0 }),
          c = vs();
        (_(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function l() {
            (r.set(e), i.set(t), pe(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (st(s.current.cursors)) return;
            let n = Ou(e, t);
            n !== s.current.cursorHash && ((s.current.cursorHash = n), I.update(() => c()));
          };
          function d(n) {
            if (n.pointerType === `touch`) {
              $e(u);
              return;
            }
            (I.read(u, !0), (e = n.clientX), (t = n.clientY), I.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
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
            I.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            q.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            I.read(u, !0),
            () => {
              (q.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                $e(u));
            }
          );
        }, [a, r, i, c, n]),
          _(() => {
            if (!n) return;
            function e() {
              pe(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              q.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), q.removeEventListener(`blur`, e));
              }
            );
          }, [a, n]),
          d(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = st(e) ? null : Ou(r.get(), i.get())),
                c());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(oT, !1));
            };
          }, [r, i, e, c]));
        let { cursors: u, cursorHash: f } = s.current,
          p = f ? u[f] : null,
          m = Tu(p);
        d(() => {
          n && document.body.classList.toggle(oT, m);
        }, [m, n]);
        let h = p?.component,
          g = p?.transition ?? { duration: 0 },
          v = g.duration === void 0 ? g : { ...g, duration: g.duration * 1e3 },
          y = Ee(r, v),
          b = Ee(i, v),
          S = Re(() => y.get() + (p?.offset?.x ?? 0)),
          C = Re(() => b.get() + (p?.offset?.y ?? 0)),
          w = p?.alignment,
          T = p?.placement,
          E = t((e, t) => `translate(${Du(T, w)}) ${t}`, [w, T]);
        return !n || !p || !h
          ? null
          : k(x, {
              children: k(h, {
                transformTemplate: E,
                style: { ...uT, x: S, y: C, opacity: a },
                globalTapTarget: !0,
                variant: p?.variant,
                ref: o,
                className: sT,
              }),
            });
      })),
      (pT = `webPageId`),
      (mT = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((lv && !Hn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(ju(e), e), this.collectedLinks.set(ju(t), t));
          let n = this.nestingInfo.get(ju(e)) ?? new Set();
          (n.add(ju(t)), this.nestingInfo.set(ju(e), n));
        }
      }),
      (hT = new mT()),
      (gT = `element`),
      (_T = `collection`),
      (vT = `collectionItemId`),
      (yT = `pathVariables`),
      (bT = `framer/page-link,`),
      (xT = y(void 0)),
      (ST = `--text-selection-color`),
      (CT = `--text-selection-background-color`),
      (wT = Qx(Yu, (e, t) => Ju(t?.triggerId), `InjectSelectionStyle`)),
      (TT = {
        isClockwise: (e) => TT.signedArea(e) <= 0,
        signedArea: (e) => {
          let t = 0,
            n = e.length;
          for (let r = 0; r < n; r++) {
            let i = e[r],
              a = e[(r + 1) % n];
            !i || !a || (t += i.x * -a.y - a.x * -i.y);
          }
          return (1 / 2) * t;
        },
        containsPoint: (e, t) => {
          let n;
          for (let r = 0; r < e.length; r++) {
            if (la.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (la.isEqual(e[o], t)) return !0;
            let s = e[o]?.x ?? 0,
              c = e[o]?.y ?? 0,
              l = (t.x - i) * (c - a) - (t.y - a) * (s - i);
            if (l === 0) continue;
            let u = l > 0;
            if (((n ??= u), n !== u)) return !1;
          }
          return !0;
        },
        intersects: (e, t) => {
          if (e.length < 1 || t.length < 1) return !1;
          let n = X.boundingRectFromPoints(e),
            r = X.boundingRectFromPoints(t);
          if (!X.intersects(n, r)) return !1;
          let i = [],
            a = e.length;
          e.forEach((t, n) => {
            let r = e[(n + 1) % a];
            r && i.push(Rx(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(Rx(e, r));
          });
          for (let e of i) for (let t of o) if (Rx.intersection(e, t, !0)) return !0;
          return !!(TT.containsPoint(t, e[0]) || TT.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!TT.containsPoint(e, t[n])) return !1;
          return !0;
        },
        clipToRect: (e, t) => {
          let n = X.edges(t),
            r = new Set(),
            i = e.length,
            a = [],
            o = [];
          for (let s = 0; s < i; s++) {
            let c = e[s],
              l = e[(s + 1) % i];
            if (X.containsPoint(t, c)) {
              let e = Xu(c);
              if ((r.add(e), o.push(c), X.containsPoint(t, l))) continue;
            }
            let u = Rx(c, l);
            n.forEach((e) => {
              let t = Rx.intersection(u, e, !0);
              if (!t) return;
              let n = Xu(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (X.points(t).forEach((t) => {
                TT.containsPoint(e, t) && (r.add(Xu(t)), a.push(t));
              }),
              la.sortClockwise([...o, ...a]));
        },
      }),
      (ET = 5),
      (DT = 4),
      (OT = (() => {
        let e = m.createContext(new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (kT = `overlay`),
      (AT = `template-overlay`),
      (jT = class extends O {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((n.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(_t(uv ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          vn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (uv && document.getElementById(`main`)?.innerHTML) || ``;
          return k(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${_t()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (NT = /:([a-z]\w*)/gi),
      (PT = y(void 0)),
      (FT = new Map()),
      (IT = 500),
      (LT = 500),
      (zT = !1),
      (BT = 500),
      (VT = 0.9),
      (HT = 1.7),
      (UT = 4),
      (WT = 1 / 0),
      (GT = new WeakMap()),
      (KT = new Set()),
      (qT = new Map()),
      (JT = !Ny || typeof IntersectionObserver > `u` ? null : Vd()),
      (YT = Cd(
        E(function (
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
            ...d
          },
          f
        ) {
          let p = Rt(),
            m = Bt(),
            h = Dd(),
            { activeLocale: g, locales: _ } = sr(),
            v = Jd(),
            y = lr(),
            b = Mu(),
            x = Yd({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = u(() => {
              if (!t) return {};
              let e = Au(t) ? t : zu(t);
              if (!e) return {};
              if (B(e))
                return of(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
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
              if (mt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = wd(p, m, e, g, c, h),
                S = Ud(n, !0),
                C = S === `_blank`,
                w = af(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = $d(u, w, (e) =>
                  Zd(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: Qd(u, x, E),
                "data-framer-page-link-current": (m && Od(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            w = tc(S(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = C;
          nc(
            w,
            (e) => {
              if (!(e === null || !D || !E || !A || b))
                return JT?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b]
          );
          let M = !!T;
          return Hu(
            ml(f).cloneAsArray(e, (e) => sf(e, { ...d, ...lf(j, l, M) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      (XT = `framer`),
      (ZT = 3),
      (QT = 30),
      ($T = 1e4),
      (eE = `__framer`),
      (tE = `3`),
      (nE = [
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
      (rE = Date.now()),
      (iE = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (aE = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (oE = () => ((Date.now() - rE) / 1e3).toFixed(2)),
      (sE = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          m.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          m.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = oE())),
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
                    (r.inputChangeTimeSinceModuleLoad = oE()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = oE()));
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
          k(`input`, {
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
      (cE = { state: `pending` }),
      (lE = { state: `success` }),
      (uE = { state: `incomplete` }),
      (dE = { state: `complete` }),
      (fE = { state: `error` }),
      (pE = m.createContext(void 0)),
      (mE = m.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: s,
          nodeId: c,
          ...u
        },
        d
      ) {
        let f = m.useRef(null),
          p = d ?? f,
          {
            states: h,
            convertHoneypotFieldsForSubmission: g,
            replaceHoneypotWithMetadata: _,
          } = vf(),
          v = Rt(),
          y = Bt(),
          b = Dd(),
          x = kn(),
          [S, C] = m.useReducer(Sf, uE),
          { activeLocale: w, locales: T } = sr(),
          E = l(pE),
          D = m.useRef({ onSuccess: r, onError: i, onLoading: a });
        D.current = { onSuccess: r, onError: i, onLoading: a };
        let O = m.useRef(!1);
        async function j(e) {
          if (B(e)) {
            let t = Td(v, e, b, T);
            if (!t) {
              Tf(e, p);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            v.navigate?.(n, r, i);
            return;
          }
          H(
            Au(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Kd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, x),
            { routeId: n, elementId: r, pathVariables: i } = wd(v, y, e, w, t, b);
          v.navigate?.(n, r, i);
        }
        let M = async (t) => {
            if ((t.preventDefault(), !e || !E || O.current)) return;
            ((O.current = !0), g());
            let r = new FormData(t.currentTarget),
              i = mf(t.currentTarget);
            (await Ey({ priority: `user-visible`, continueAfter: `paint` }),
              _(r),
              o(() => C({ type: `submit` })),
              _f(r, q.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (D.current.onLoading?.(),
                bf({ router: v, nodeId: c, submitTrackingId: s, activeLocale: w }),
                await Df(e, r, i, E),
                o(() => C({ type: `success` })),
                D.current.onSuccess?.(),
                n && (await j(n)));
            } catch (e) {
              (o(() => C({ type: `error` })), D.current.onError?.(), console.error(e));
            }
            O.current = !1;
          },
          ee = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), M(e)));
          },
          N = async (e) => {
            let t = e.currentTarget;
            (await Ey({ priority: `background`, continueAfter: `paint` }),
              o(() => C({ type: Ef(t) ? `incomplete` : `complete` })));
          },
          P = m.useMemo(() => t(S), [t, S]);
        return A(R.form, {
          ...u,
          onSubmit: Cf(S) ? M : wf,
          onKeyDown: ee,
          onChange: N,
          ref: p,
          children: [P, k(yf, { states: h })],
        });
      })),
      (hE = `__framer_force_showing_editorbar_since`),
      (gE = class extends O {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (_E = () => {
        try {
          return !!localStorage[hE];
        } catch {
          return !1;
        }
      }),
      (vE = () => !_E()),
      (yE = (() => {
        let e = y(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (bE = null),
      (xE = null),
      fv(Pf),
      (SE = (e, t, r, i, a, o) => {
        let s = l(pE),
          c = M(),
          u = kn(),
          d = M(!0);
        return (
          _(() => {
            function l() {
              (!bE || !xE) && Pf();
              let n = r ? new URL(r, q.location.href) : q.location,
                c = {
                  version: Xv,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: n.href,
                  hostname: n.hostname,
                  pathname: n.pathname,
                  search: n.search || null,
                  hash: n.hash || null,
                  timezone: bE,
                  locale: xE,
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
                        t = (mt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = l()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                d.current ? (d.current = !1) : vn(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = l()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), vn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              n.addEventListener(`pageshow`, f),
              () => {
                n.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, t, r, i, a, s, u, o]),
          c
        );
      }),
      (CE = 0),
      (wE = 500),
      (TE = 200),
      (EE = `main`),
      (DE = `framerGeneratedPage`),
      (OE = `<!-- Start of headStart -->`),
      (kE = `<!-- End of headStart -->`),
      (AE = `<!-- Start of headEnd -->`),
      (jE = `<!-- End of headEnd -->`),
      (ME = `<!-- Start of bodyStart -->`),
      (NE = `<!-- End of bodyStart -->`),
      (PE = `<!-- Start of bodyEnd -->`),
      (FE = `<!-- End of bodyEnd -->`),
      (IE = m.createContext(void 0)),
      (LE = { status: `loading`, data: void 0 }),
      (RE = 5e3),
      (zE = () => {}),
      (BE = class e {
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
          let t = Dp(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Dp(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = q.setInterval(() => {
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
              jp(r, i) ||
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
        persistCache = ul(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && jp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!zn() || !Pu(e.url, !1)) return;
          let t = Dp(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Ap(n, e);
          return (e.resultOutputType === `image` && B(i) && (await wp(i).catch(zE)), i);
        }
        async fetchWithCache(e) {
          if (!zn()) return;
          let t = Dp(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && jp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, LE);
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
          if (!Pu(r, !1)) return zE;
          let a = Dp(e),
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
      (VE = y(void 0)),
      (HE = y(!0)),
      (UE = ({ children: e, client: t }) => {
        let [n] = j(() => t ?? new BE()),
          [r, i] = j(!0);
        return (
          _(
            () => (
              n.hydrateCache(),
              o(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          k(HE.Provider, { value: r, children: k(VE.Provider, { value: n, children: e }) })
        );
      }),
      (WE = (() => {
        let e = y(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (qe.WillChange = De),
      (GE = Cd(
        E(function ({ links: e, children: t, ...n }, r) {
          return ml(r)(t(Pp((t) => e.map(t), [e])), n);
        })
      )),
      (KE = { priority: void 0, canYield: !0 }),
      (qE = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return $p(e, t);
            case `boolean`:
              return tm(e);
            case `color`:
              return im(e);
            case `date`:
              return om(e);
            case `enum`:
              return cm(e);
            case `file`:
              return um(e);
            case `link`:
              return fm(e);
            case `number`:
              return mm(e);
            case `object`:
              return _m(e, t);
            case `responsiveimage`:
              return ym(e);
            case `richtext`:
              return xm(e);
            case `string`:
              return Tm(e);
            case `vectorsetitem`:
              return Cm(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return it(e)
            ? { type: `boolean`, value: e }
            : dt(e)
              ? { type: `date`, value: e.toISOString() }
              : at(e)
                ? { type: `number`, value: e }
                : B(e)
                  ? { type: `string`, value: e }
                  : ot(e)
                    ? { type: `array`, value: e.map(qE.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Dm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Dm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Dm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Dm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Dm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => qE.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => qE.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Em(e),
            i = Em(t);
          return lt(r) || lt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Em(e),
            i = Em(t);
          return lt(r) || lt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Em(e),
            i = Em(t);
          return lt(r) || lt(i)
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
              return `[${e.value.map(qE.stringify).join(`, `)}]`;
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
              U(e);
          }
        },
      }),
      (JE = { type: `unknown`, isNullable: !0 }),
      (YE = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = nl(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
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
            if (ut(i)) continue;
            let a = this.schema[t];
            if (!ct(a)) {
              if ((H(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await Om(this.collection, this.locale))[t]?.[n];
          return kv.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Om(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = zp(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Om(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = zp(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (XE = new Map()),
      (ZE = new WeakMap()),
      (QE = `$r_`),
      ($E = new Map()),
      (eD = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Vm(e, t)), (this.priority = Fm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Wp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Up(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(Rm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
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
          return pt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(Bm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
          return pt(t) ? yield t : t;
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
      (tD = `index`),
      (nD = class extends Set {
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
          return (e.sort((e, t) => e - t), K(this.name, ...e));
        }
      }),
      (rD = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new aD();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (iD = class {
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
      (aD = class extends nD {
        name = `Indexes`;
      }),
      (oD = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
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
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Lm(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: zm(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends nD {
        name = `Fields`;
      }),
      (sD = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (cD = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== tD) return !1;
          return !0;
        }
      }),
      (lD = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (uD = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new cD();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new lD(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (dD = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = Gm(),
            i = Km(),
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
      (fD = class {
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
      (pD = class e {
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
      (mD = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (hD = class extends mD {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Bp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Vp(this.evaluate(void 0), void 0, e);
        }
      }),
      (gD = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (_D = class e extends hD {
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
          return K(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
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
          return new lD(e.ordering, t);
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
            i = this.projections.map((e) => new gD(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Wp(
              n.tuples.map((t) =>
                Wp(
                  this.projections.map((n) => Up({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new fD();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (vD = { type: 0 }),
      (yD = class extends mD {
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
          return Bp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Vp(this.evaluate(void 0, void 0));
        }
      }),
      (bD = { type: 0 }),
      (xD = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (SD = class e extends yD {
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
          return K(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new xD(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Up({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Wp(
              this.conditions.map((n) =>
                Up({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (qE.equal(n, e, bD)) return t;
          } else for (let { when: e, then: t } of r) if (nm(e)) return t;
          return i;
        }
      }),
      (CD = class {
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
          let e = new uD();
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
            o = new cD();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (ct(t)) continue;
                a.add(t.field);
                let r = new sD(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new oD(Wm(this.fieldId++), void 0, t.definition, void 0),
                  a = new gD(t, r);
                i.push(a);
                let s = new sD(r, e.direction);
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
              if (ct(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = Wm(this.fieldId++),
                a = n.alias,
                s = new oD(r, a, t.definition, void 0),
                c = new gD(t, s);
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
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Mm(t.data, this.locale),
            i = t.alias,
            a = new rD(Hm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new oD(Wm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new oD(Wm(this.fieldId++), tD, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: tD, collectionName: i });
            let t = new cD(),
              r = new sD(e);
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
            let i = new cD(),
              o = new iD(Um(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new cD(),
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
              U(t.type, `Unsupported join type`);
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
              U(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(JE, null);
        }
        buildLiteralValue(e) {
          let t = qE.parse(e.value);
          return this.normalizer.newScalarConstant(JE, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
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
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new wD(e);
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
            let n = new wD(e);
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
              (t) => new xD(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              U(t.operator, `Unsupported unary operator`);
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
              U(t.operator, `Unsupported binary operator`);
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
      (wD = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (TD = class e extends hD {
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
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          return (t.merge(this.predicate.referencedFields), new lD(e.ordering, t));
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
            n = yield* Wp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => nm(n[t] ?? null));
        }
      }),
      (ED = class e extends hD {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return $.estimate(1, e ? 100 * dD : 50 * dD);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Lp()),
            i = Lp(),
            a = [];
          for (let n of r) {
            let r = zp(i);
            r && (yield r);
            let o = new fD();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new pD(n, a);
        }
      }),
      (DD = class e extends hD {
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
          return K(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
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
          return new lD(new cD(), e.resolvedFields);
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
          let { left: t, right: n } = yield* Up({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (OD = class e extends hD {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return K(`RelationalScan`, this.collection.id);
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
          return $.estimate(1, 200 * dD);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Lp()),
            r = Lp(),
            i = [];
          for (let a of n) {
            let n = zp(r);
            n && (yield n);
            let o = new fD();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new pD(t, i);
        }
      }),
      (kD = class e extends hD {
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
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
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
          return new lD(new cD(), e.resolvedFields);
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
          let { left: t, right: n } = yield* Up({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (AD = class e extends yD {
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
          return K(`ScalarAnd`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: nm(n) && nm(r) };
        }
      }),
      (jD = class extends yD {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
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
      (MD = { type: 0 }),
      (ND = class e extends yD {
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
          return K(`ScalarContains`, this.source, this.target);
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
          let { source: n, target: r } = yield* Up({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.contains(n, r, MD) };
        }
      }),
      (PD = { type: 0 }),
      (FD = class e extends yD {
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
          return K(`ScalarEndsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* Up({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.endsWith(n, r, PD) };
        }
      }),
      (ID = class e extends yD {
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
          return K(`ScalarEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.equal(n, r, vD) };
        }
      }),
      (LD = class e extends yD {
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
          return K(`ScalarGreaterThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.greaterThan(n, r, vD) };
        }
      }),
      (RD = class e extends yD {
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
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.greaterThanOrEqual(n, r, vD) };
        }
      }),
      (zD = class e extends yD {
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
          return K(`ScalarLessThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.lessThan(n, r, vD) };
        }
      }),
      (BD = class e extends yD {
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
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.lessThanOrEqual(n, r, vD) };
        }
      }),
      (VD = class e extends yD {
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
          return K(`ScalarNotEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !qE.equal(n, r, vD) };
        }
      }),
      (HD = class e extends yD {
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
          return K(`ScalarOr`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: nm(n) || nm(r) };
        }
      }),
      (UD = { type: 0 }),
      (WD = class e extends yD {
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
          return K(`ScalarStartsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* Up({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.startsWith(n, r, UD) };
        }
      }),
      (GD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof TD) {
            if (e.predicate instanceof AD) {
              let n = new DD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof HD) {
              let n = new kD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof OD)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new ED(n, qm(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof TD) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof OD)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof ID &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof jD &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof VD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof jD &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof zD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof jD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof BD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof jD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof jD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof RD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof jD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ND &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof jD &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof WD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof jD &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof jD &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = qm(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new ED(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (KD = class {
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
          let r = new qD();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (qD = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (JD = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (YD = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new KD(Jm(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new JD(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (XD = class e extends hD {
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
          return K(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
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
          return new lD(new cD(), n);
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
          let o = new pD(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new fD();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Up({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof ID) {
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
          let r = new pD(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new fD();
              (n.merge(i),
                n.merge(a),
                nm(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (ZD = class e extends hD {
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
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          return (t.merge(this.limit.referencedFields), new lD(this.ordering, t));
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
          let { input: t, limit: n } = yield* Up({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = hm(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (QD = class e extends hD {
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
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          return (t.merge(this.offset.referencedFields), new lD(this.ordering, t));
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
          let { input: t, offset: n } = yield* Up({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = hm(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      ($D = class e extends yD {
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
          return K(
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
          for (let n of t) ct(n.collection) || e.add(n);
          return new lD(this.ordering, e);
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
          let n = new fD();
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
      (eO = class e extends yD {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
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
          return qE.cast(n, this.definition);
        }
      }),
      (tO = class e extends yD {
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
          return K(
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
          return (ct(this.field.collection) || e.add(this.field), new lD(this.ordering, e));
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
          let n = new fD();
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
      (nO = { type: 0 }),
      (rO = class e extends yD {
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
          return K(`ScalarIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qE.in(n, r, nO) };
        }
      }),
      (iO = { type: 1 }),
      (aO = class e extends yD {
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
          return K(`ScalarIndexOf`, this.source, this.target);
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
          let { source: n, target: r } = yield* Up({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: qE.indexOf(n, r, iO) };
        }
      }),
      (oO = class extends Error {}),
      (sO = class e extends yD {
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
          return K(`ScalarIntersection`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Xm(n),
            a = Xm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (cO = class e extends yD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarLength`, this.input);
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
          return { type: `number`, value: qE.length(n) };
        }
      }),
      (lO = class e extends yD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !nm(yield* this.input.evaluate(e, t)) };
        }
      }),
      (uO = { type: 0 }),
      (dO = class e extends yD {
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
          return K(`ScalarNotIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* Up({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !qE.in(n, r, uO) };
        }
      }),
      (fO = class extends yD {
        constructor(e, t) {
          H(e.name !== tD, `Invalid field name`);
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
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (pO = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new OD(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new ED(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new XD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof jD && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof XD && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new TD(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new _D(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof _D &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new ZD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new QD(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof jD) &&
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
          let n = new fO(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new jD(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof lO)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof ID) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof VD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof zD) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof BD) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof LD) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof RD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof AD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof HD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new lO(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof jD && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof jD && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof jD && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof jD && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new AD(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof jD && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof jD && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof jD && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof jD && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new HD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof fO;
          if (t instanceof fO && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ID(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof fO;
          if (t instanceof fO && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new VD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof fO;
          if (t instanceof fO && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new zD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof fO;
          if (t instanceof fO && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new BD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof fO;
          if (t instanceof fO && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new LD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof fO;
          if (t instanceof fO && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new RD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new rO(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new dO(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new xD(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new SD(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new ND(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new WD(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new FD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new cO(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new aO(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new $D(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new tO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new sO(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new eO(e, t);
          return this.finishScalar(n);
        }
      }),
      (mO = class extends hD {}),
      (hO = class e extends mO {
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
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          return new lD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * dD).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Zm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new fD();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (gO = { type: 0 }),
      (_O = class e extends mO {
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
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
            e.name !== tD && (ct(e.collection) || t.add(e));
          return new lD(new cD(), t);
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
              if (n.name === tD) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!qE.equal(a, o, gO)) {
                if (lt(a) || qE.lessThan(a, o, gO)) return i ? -1 : 1;
                if (lt(o) || qE.greaterThan(a, o, gO)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (vO = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new YD();
        normalizer = new pO(this.memo);
        explorer = new GD(this.normalizer);
        optimize(e) {
          let t = new CD(this.normalizer, this.query, this.locale).build(),
            n = zp(e);
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
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new hO(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new _O(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (yO = Fp(`query-engine`)),
      (bO = class {
        async evalQuery(e, t, n, r) {
          yO.enabled &&
            yO.debug(`Query:
${uh(e)}`);
          let i = new eD(e, t, r),
            a = new vO(e, t, i),
            o = zp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = mt(s) ? await s : s,
            u = zp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = zp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Up(a, r)));
          }
          let h = Hp(Wp(m, r), r);
          return n ? [mt(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new eD(t, n, r);
          return Hp(
            Wp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Up(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (xO = Qv.QueryCache),
      (SO = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = ty === void 0 ? void 0 : new Map();
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
          let r = ph(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Im(n) ?? `user-visible`,
              o = Im(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Yn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              ty !== void 0 &&
                this.serializedCache !== void 0 &&
                !km(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && ty.set(xO, r, e);
            }
            return i.value;
          }
          let a = new kv(() => {
            let i = km(r),
              a = i ? void 0 : wn(xO, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                Sn(e, r);
              }
            return ty !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), ty.set(xO, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (CO = new SO(new bO())),
      (wO = `style[data-framer-breakpoint-css]`),
      (TO = `page`),
      (EO = Symbol(`cycle`)),
      (kO = (() => {
        let e = y(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (AO = (() => {
        let e = y(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (jO = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (MO = jO(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (NO = jO(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (PO = {
        ...MO,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = tg(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += tg(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (FO = { start: `flex-start`, end: `flex-end` }),
      (IO = E(dg)),
      (LO = { start: 0, end: 0 }),
      (RO = { display: `flex`, position: `relative` }),
      (zO = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (BO = { duration: 0.2, ease: `linear` }),
      (VO = (() => {
        let e = y(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (HO = { type: `spring`, stiffness: 200, damping: 40 }),
      (UO = { type: `spring`, stiffness: 80, damping: 10 }),
      (WO = { height: `100%`, width: `100%` }),
      (GO = E(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: o,
            carouselEffectYOverflow: s,
            carouselEffectOverflow: c,
            carouselEffectLoop: l,
            carouselEffectAutoPlay: d,
            carouselEffectInterval: f,
            carouselEffectSnap: p,
            carouselEffectControls: m,
            as: h,
            ...g
          } = e,
          _ = to(),
          v = r?.startsWith(`column`) ? `y` : `x`,
          y = (v === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          b = Og(a, v),
          x = p === !0 ? `page` : p,
          S = Yh(n);
        return k(
          u(() => R.create(h), [h]),
          {
            ...g,
            ref: t,
            children: A(Tg, {
              axis: v,
              align: i ?? `center`,
              gap: b,
              isStatic: _,
              itemSize: `manual`,
              overflow: y,
              loop: l,
              snap: x,
              items: S,
              style: WO,
              children: [d && k(Dg, { intervalSeconds: f ?? 1.5 }), m],
            }),
          }
        );
      })),
      (KO = E(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? R.div,
          m = to(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return k(IO, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (qO = E(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? R.div,
          m = cr() === `rtl` && o === `x` ? -1 : 1,
          h = (d === `paused` ? 0 : (i ?? 100)) * s * m,
          g = ke(0),
          v = M(0),
          y = M(!1),
          b = M(!1),
          x = M(!1),
          S = (e) => {
            x.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          se((e, t) => {
            let n = Math.abs(g.getVelocity()),
              r = b.current ? h * c : h;
            if (performance.now() > v.current && (!y.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = g.get() - e;
              ((y.current &&= (g.stop(), !1)), g.set(n));
            }
          }),
          _(() => {
            d === `paused` && g.stop();
          }, [d, g]),
          k(IO, {
            ref: t,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? g : void 0,
            _dragY: o === `y` ? g : void 0,
            offset: g,
            drag: o,
            dragMomentum: !0,
            onClickCapture: S,
            onDragStart: () => {
              x.current = !0;
            },
            onDragEnd: () => {
              ((v.current = performance.now()),
                (y.current = !0),
                setTimeout(() => {
                  x.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              b.current = !0;
            },
            onMouseLeave: () => {
              b.current = !1;
            },
          })
        );
      })),
      (JO = (() => {
        let e = y(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (YO = ({ onPlayStateChange: e, children: t }) => {
        let n = u(
          () => ({ start: () => o(() => e(`running`)), stop: () => o(() => e(`paused`)) }),
          [e]
        );
        return k(JO.Provider, { value: n, children: t });
      }),
      (XO = E(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: d,
            tickerEffectIsDataRepeater: f,
            style: p,
            ...m
          } = e,
          h = to(),
          [g, _] = j(`running`),
          v = i?.startsWith(`column`) ? `y` : `x`,
          y = l === `reverse` ? -1 : 1,
          b = W(u) ? u / 100 : 1,
          x = (v === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          S = kg(c, v),
          C = Yh(n),
          w = { ...p, "--ticker-cms-total-children": f ? C.length : void 0, position: d };
        return h || !r
          ? k(YO, {
              onPlayStateChange: _,
              children: k(KO, {
                ...m,
                style: w,
                ref: t,
                axis: v,
                gap: S,
                overflow: x,
                directionModifier: y,
                hoverModifier: b,
                items: C,
                playState: g,
              }),
            })
          : k(YO, {
              onPlayStateChange: _,
              children: k(qO, {
                ...m,
                style: w,
                ref: t,
                axis: v,
                gap: S,
                overflow: x,
                directionModifier: y,
                hoverModifier: b,
                items: C,
                playState: g,
              }),
            });
      })),
      (ZO = (e) => (t) => {
        let { carouselEffectProps: n, tickerEffectProps: r, domProps: i } = jg(t);
        return t.carouselEffectEnabled
          ? k(GO, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? k(XO, { ...r, ...i, as: e })
            : k(e, { ...i });
      }),
      (QO = (e) =>
        m.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...s
            } = t,
            c = u(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return k(e, { ...s, ref: n, transition: o });
          let l = k(e, { ...s, ref: n });
          return (
            i && (l = k(Se, { transition: c, children: l })),
            a || (l = k(Ne, { children: l })),
            l
          );
        })),
      ($O = m.createContext(void 0)),
      (ek = () => m.useContext($O)),
      tt(sv(), 1),
      (tk = (e) => e.target.value),
      (nk = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (rk = E(function (e, n) {
        let {
            "aria-label": r,
            "aria-labelledby": i,
            "aria-describedby": a,
            autoFocus: s,
            className: c,
            inputName: l,
            max: u,
            min: d,
            placeholder: f,
            required: p,
            step: m,
            style: h,
            type: g,
            maxLength: _,
            value: v,
            defaultValue: y,
            autofillEnabled: b,
            onChange: x,
            onBlur: S,
            onInvalid: C,
            onFocus: w,
            onValid: T,
            onClear: E,
            ...D
          } = e,
          O = Fg(v ?? y, g),
          [j, M, ee] = Pg(O ?? ``, !0, x),
          N = Ei(O),
          P = t(() => {
            (M(``), E && o(() => E()));
          }, [E, M]),
          F = ns(T, C, ee, S, w),
          te = t(
            (e) => {
              e.target === e.currentTarget && N.current?.focus();
            },
            [N]
          );
        if (g === `hidden`) return k(R.input, { type: `hidden`, name: l, defaultValue: y });
        let ne = b === !1 ? nk : void 0,
          re = !!j,
          I = !!E && re,
          L = dl(ik, uS, c, g === `text` && ak, g === `textarea` && ok);
        return A(R.div, {
          ref: n,
          onClick: te,
          style: h,
          className: L,
          ...D,
          children: [
            g === `textarea`
              ? k(R.textarea, {
                  ref: N,
                  ...ne,
                  ...F,
                  "aria-label": r,
                  "aria-labelledby": i,
                  "aria-describedby": a,
                  required: p,
                  autoFocus: s,
                  name: l,
                  placeholder: f,
                  className: lS,
                  value: j,
                  maxLength: _,
                })
              : k(R.input, {
                  ref: N,
                  ...ne,
                  ...F,
                  "aria-label": r,
                  "aria-labelledby": i,
                  "aria-describedby": a,
                  type: g,
                  required: p,
                  autoFocus: s,
                  name: l,
                  placeholder: f,
                  className: dl(lS, !re && dS),
                  value: j,
                  min: d,
                  max: u,
                  step: m,
                  maxLength: _,
                }),
            I &&
              k(`button`, {
                type: `button`,
                className: sk,
                onClick: P,
                "aria-label": `Clear`,
                children: k(Ig, {}),
              }),
          ],
        });
      })),
      (ik = `framer-form-text-input`),
      (ak = `framer-form-text-input-type`),
      (ok = `framer-form-textarea-input-type`),
      (sk = `framer-form-text-input-clear`),
      (ck = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (lk = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (uk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (dk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (fk = Qx(
        rk,
        [
          ...pS,
          ...gS,
          ...mS,
          Z(`.${uS}`, {
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
          Z(`.${ik} .${lS}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${ik}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${ik} .${lS}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${ik}.${ok}`, { padding: 0 }),
          Z(`.${ik}.${ok} textarea.${lS}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${ik} .${lS}[type="date"], .${ik} .${lS}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${ik} .${lS}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${ik} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${ik} textarea::-webkit-resizer`, { background: `no-repeat ${ht(ck)}` }),
          Z(`.${ik}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${ht(lk)}` }),
          Z(`.${ik} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${ik} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${ik} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${ik} .${lS}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${ik} .${lS}.${dS}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${ik}.${ak}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${xS}px`,
            height: `${xS}px`,
            marginRight: `${bS}px`,
            ...SS,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${ik} .${lS}[type="date"]::before, .${ik} .${lS}[type="time"]::before`, {
            ...CS,
            paddingLeft: `${yS}px`,
            maskPosition: `${yS}px center`,
            backgroundPosition: `${yS}px center`,
          }),
          Z(`.${ik} .${lS}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, ht(uk)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${ik} .${lS}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, ht(dk)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${ik} .${lS}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${xS}px`,
            height: `100%`,
          }),
          Z(`.${ik}:focus-within, .${ik}.${fS}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${ik}:focus-within::after, .${ik}.${fS}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, hS),
          }),
          Z(`.${sk}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${xS}px`,
            height: `${xS}px`,
            marginLeft: `${bS}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${sk}:hover, .${sk}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (pk = {
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
      (mk = { opacity: 0 }),
      (hk = { opacity: 1 }),
      (gk = qg(
        m.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            d = { ...c },
            f = u(() => Jo(n), [n]),
            [p, h] = j();
          m.useEffect(() => {
            if (!n?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                o(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, f]);
          let g = f ?? p;
          return (
            s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            A(Yo(e.as), {
              ...l,
              style: d,
              ref: t,
              draggable: a,
              children: [n && k(_o, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (vk = !Rn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (yk =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (bk = `{{ text-placeholder }}`),
      (xk = `rich-text-wrapper`),
      (Sk = ds(
        E(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: c = [],
              width: d,
              height: f,
              left: p,
              right: m,
              top: h,
              bottom: g,
              center: v,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: S,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: E = Y.current,
              withExternalLayout: D = !1,
              positionSticky: O,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: ee,
              positionStickyLeft: N,
              __htmlStructure: P,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: te,
              _forwardedOverrides: ne,
              _usesDOMRect: re,
              children: I,
              ...L
            } = e,
            ie = Vo(),
            ae = _s(e),
            oe = M(null),
            se = t ?? oe,
            { navigate: ce, getRoute: le } = Rt(),
            ue = Bt();
          (ur(e.preload ?? []), Cs(e, se));
          let de = l(HS),
            fe = Mu(),
            z = o,
            pe = te ?? n;
          if (pe && ne) {
            let e = ne[pe];
            typeof e == `string` && (z = e);
          }
          let me = ``;
          if (z) {
            let e = Yg(z);
            me = P ? P.replace(bk, e) : `<p>${e}</p>`;
          } else if (i) me = i;
          else if (s) {
            let e = Yg(s);
            me = P ? P.replace(bk, e) : `<p>${e}</p>`;
          } else a && (me = a);
          let he = Dd(),
            ge = u(() => (fe || !le || !ue ? me : Xg(me, le, ue, he)), [me, le, ue, he]);
          if (
            (_(() => {
              let e = se.current;
              if (e === null) return;
              function t(e) {
                let t = xd(e.target, se.current);
                Gn(e) ||
                  !ce ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Ru(ce, t, he) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ce, he]),
            $g(c, F, se),
            !x)
          )
            return null;
          let _e = T && E() === Y.canvas,
            ve = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Qg(w),
              opacity: _e ? 0 : S,
              flexShrink: 0,
            },
            ye = Y.hasRestrictions(),
            be = Ro(e, ie || 0, !1),
            xe = re && (d === `auto` || f === `auto`),
            Se = !!e.transformTemplate || !be || !ye || F || xe,
            Ce = Se ? (e.transformTemplate ?? gs(v)) : void 0;
          if (!D) {
            if (be && ye && !xe) {
              let e = Wb.getNumber(C).toFixed(4);
              ((ve.transform = `translate(${be.x}px, ${be.y}px) rotate(${e}deg)`),
                (ve.width = be.width),
                (ve.minWidth = be.width),
                (ve.height = be.height));
            } else
              ((ve.left = p),
                (ve.right = m),
                (ve.top = h),
                (ve.bottom = g),
                (ve.width = d),
                (ve.height = f),
                (ve.rotate = C));
            O
              ? (!fe || de) &&
                ((ve.position = `sticky`),
                (ve.willChange = `transform`),
                (ve.top = A),
                (ve.right = j),
                (ve.bottom = ee),
                (ve.left = N))
              : fe && (e.positionFixed || e.positionAbsolute) && (ve.position = `absolute`);
          }
          return (
            ll(e, ve),
            ol(e, ve),
            Object.assign(ve, e.style),
            k(R.div, {
              id: n,
              ref: se,
              ...L,
              ...ps(Se ? v : void 0, e.style),
              style: ve,
              layoutId: ae,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: dl(y, b, xk),
              transformTemplate: Ce,
              dangerouslySetInnerHTML: { __html: ge },
            })
          );
        })
      )),
      (Ck = {
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
      (wk = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (Tk = E(function (e, t) {
        return k(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ek = R.create(Tk)),
      (Dk = E(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return k(Ek, {
          ...r,
          ref: i,
          viewBox: t,
          children: k(R.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (Ok = []),
      (kk = `RichTextContainer`),
      (Ak = E(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: c,
            center: d,
            children: f,
            environment: p = Y.current,
            fonts: m = Ok,
            height: h,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: E = 0,
            style: D,
            _initialStyle: O,
            stylesPresetsClassNames: A,
            text: j,
            top: ee,
            verticalAlignment: N = `top`,
            visible: P = !0,
            width: F,
            withExternalLayout: te = !1,
            viewBox: ne,
            viewBoxScale: re = 1,
            effect: I,
            ...L
          } = e,
          ie = Vo(),
          ae = p(),
          oe = ae === Y.canvas,
          se = oe || ae === Y.export,
          ce = l(HS),
          le = _s(e),
          ue = M(null),
          de = t ?? ue;
        (Cs(e, de), $g(m, n, de));
        let R = c_(I, de),
          fe = u(() => {
            if (f) return g_(f, A, j, o, void 0, R.getTokenizer());
          }, [f, A, j, o, R]);
        if (!P) return null;
        let z = { opacity: g && oe ? 0 : y },
          pe = Qg(N);
        pe !== DS.justifyContent && (z.justifyContent = pe);
        let me = {},
          he = Y.hasRestrictions(),
          ge = Ro(e, ie || 0, !1),
          _e = a && (F === `auto` || h === `auto`),
          ve = !!e.transformTemplate || !ge || !he || n || _e,
          ye = ve ? (e.transformTemplate ?? gs(d)) : void 0;
        (te ||
          (ge && he && !_e
            ? ((me.x = ge.x + (at(D?.x) ? D.x : 0)),
              (me.y = ge.y + (at(D?.y) ? D.y : 0)),
              (me.left = 0),
              (me.top = 0),
              (z.rotate = Wb.getNumber(E)),
              (z.width = ge.width),
              (z.minWidth = ge.width),
              (z.height = ge.height))
            : ((z.left = _),
              (z.right = T),
              (z.top = ee),
              (z.bottom = c),
              (z.width = F),
              (z.height = h),
              (z.rotate = E)),
          b
            ? (!se || ce) &&
              ((z.position = `sticky`),
              (z.willChange = `transform`),
              (z.top = w),
              (z.right = C),
              (z.bottom = x),
              (z.left = S))
            : oe && (e.positionFixed || e.positionAbsolute) && (z.position = `absolute`)),
          ll(e, z),
          ol(e, z),
          Object.assign(z, O, D, me),
          le && (L.layout = `preserve-aspect`));
        let be = Yo(e.as),
          xe = L[`data-framer-name`] ?? v,
          Se = oe ? p_(Sx(L)) : L,
          Ce = ps(ve ? d : void 0, D);
        return B(e.viewBox)
          ? e.as === void 0
            ? k(Dk, {
                ...Se,
                ...Ce,
                ref: de,
                style: z,
                layoutId: le,
                viewBox: ne,
                viewBoxScale: re,
                transformTemplate: ye,
                "data-framer-name": xe,
                "data-framer-component-type": kk,
                children: fe,
              })
            : k(be, {
                ...Se,
                ...Ce,
                ref: de,
                style: z,
                layoutId: le,
                transformTemplate: ye,
                "data-framer-name": xe,
                "data-framer-component-type": kk,
                children: k(Dk, {
                  viewBox: ne,
                  viewBoxScale: re,
                  style: { width: `100%`, height: `100%` },
                  children: fe,
                }),
              })
          : k(be, {
              ...Se,
              ...Ce,
              ref: de,
              style: z,
              layoutId: le,
              transformTemplate: ye,
              "data-framer-name": xe,
              "data-framer-component-type": kk,
              children: fe,
            });
      })),
      (jk = ds(
        E(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (B(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [B(t) ? `html` : `htmlFromDesign`]: a };
            return k(Sk, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && B(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return k(Ak, { ...r, ref: i, children: S(a) ? a : void 0 });
        })
      )),
      (Mk = `framer/asset-reference,`),
      (Nk = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = k_(t);
        return k(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: k(
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
      (Pk = zn()),
      (Fk = class {
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
      (Ik = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (Lk = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(XS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = A_(e);
            (s &&
              (t && j_(s, n),
              (s.id = n),
              (o = I_(s)),
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
          Pk && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = Ik),
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
          Pk && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new Fk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !Pk) ||
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
                        Pk && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${Ik}" aria-hidden="true">`),
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
      (Rk = new Lk()),
      (zk = {
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
      (Bk = E(function (e, t) {
        let n = Vo(),
          r = _s(e),
          i = m.useRef(null),
          a = t ?? i,
          o = ek();
        return (
          Cs(e, i),
          k(Hk, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (Vk = 5e4),
      (Hk = class e extends YS {
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
        static defaultProps = { ...YS.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Ro(e, e.parentSize || 0);
        }
        container = m.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Ro(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (Rk.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || B_(this.container, this.props);
        }
        componentWillUnmount() {
          (Rk.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Lx.isImageObject(t) &&
            Lx.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            Os(this.svgElement, `fill`, null, !1),
            B_(this.container, this.props));
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
            c = Wb.getNumber(r);
          if (
            ((e.opacity = W(this.props.opacity) ? this.props.opacity : 1), Y.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Fo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = mx;
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
            opacity: g,
            width: _,
            requiresOverflowVisible: v,
            ...y
          } = this.props;
          if (!f && (!t || !e)) return null;
          let b = e ?? l ?? `svg`,
            x = this.frame,
            S = x || { width: o || 100, height: a || 100 },
            C = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            w = {};
          (this.collectLayout(C, w),
            il(this.props, C),
            ll(this.props, C),
            YS.applyWillChange(this.props, C, !1));
          let E = null;
          if (typeof r == `string` || J.isColorObject(r)) {
            let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
            ((C.fill = e), (C.color = e));
          } else if (rC.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${rC.hash(t)}`;
            C.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = x_(t, b);
            E = k(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: k(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  k(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (aC.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${aC.hash(t)}`;
            C.fill = `url(#${n})`;
            let i = S_(t, b);
            E = k(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: k(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  k(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Lx.isImageObject(r)) {
            let e = D_(r, S, b);
            e &&
              ((C.fill = `url(#${e.id})`),
              (E = k(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: k(`defs`, { children: k(Nk, { ...e }) }),
              })));
          }
          let D = { "data-framer-component-type": `SVG` },
            O = !x;
          Object.assign(D, ps(O ? this.props.center : void 0, this.props.style));
          let j =
              !v &&
              !E &&
              !C.fill &&
              !C.background &&
              !C.backgroundImage &&
              i.length < Vk &&
              !L_(i) &&
              !R_(i),
            M = null;
          if (j)
            ((C.backgroundSize = `100% 100%`),
              (C.backgroundImage = ht(i)),
              Rk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = Rk.subscribe(i, !m, e, v);
            (Rk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              z_(C) && (C.overflow = `hidden`),
              (M = A(T, {
                children: [
                  E,
                  k(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: w,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Lx.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let ee = Yo(this.props.as),
            { href: N, target: P, rel: F, onClick: te, onTap: ne } = this.props,
            re = s || c;
          return k(ee, {
            ...D,
            ...y,
            layoutId: l,
            transformTemplate: O ? gs(this.props.center) : void 0,
            id: e,
            ref: p,
            style: C,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: re ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": re ? void 0 : `true`,
            onTap: ne,
            onClick: te,
            href: N,
            target: P,
            rel: F,
            children: M,
          });
        }
      }),
      (Uk = ds(Bk)),
      (Wk = 1e3),
      (Gk = `Variable`),
      (Kk = `explicitInter`),
      (Te.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = L(e(this.get()));
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
  yd as $,
  Ax as A,
  nl as B,
  nT as C,
  Ng as Ct,
  BS as D,
  Ey as Dt,
  tl as E,
  ZO as Et,
  uw as F,
  qk as G,
  ty as H,
  Zx as I,
  ji as J,
  Ct as K,
  G_ as L,
  fw as M,
  lw as N,
  eS as O,
  dw as P,
  Dh as Q,
  K_ as R,
  Uk as S,
  QO as St,
  W_ as T,
  ev as Tt,
  Bi as U,
  hh as V,
  bt as W,
  ea as X,
  hT as Y,
  CO as Z,
  aw as _,
  Rt as _t,
  Qa as a,
  qt as at,
  GE as b,
  qh as bt,
  fk as c,
  Ch as ct,
  gk as d,
  to as dt,
  Ww as et,
  kv as f,
  sr as ft,
  Np as g,
  Kt as gt,
  hr as h,
  mh as ht,
  zC as i,
  Ql as it,
  nv as j,
  dl as k,
  ew as l,
  cc as lt,
  Rb as m,
  jh as mt,
  Bw as n,
  Di as nt,
  vd as o,
  Bt as ot,
  YT as p,
  ta as pt,
  bv as q,
  tT as r,
  yh as rt,
  mE as s,
  ku as st,
  Zl as t,
  Rk as tt,
  jT as u,
  Mu as ut,
  bO as v,
  Kh as vt,
  V_ as w,
  Cl as wt,
  jk as x,
  Lw as xt,
  Y as y,
  Qx as yt,
  U_ as z,
};
//# sourceMappingURL=framer.CS_JK_Iv.mjs.map
