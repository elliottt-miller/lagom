import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  H as s,
  I as c,
  L as l,
  N as u,
  O as d,
  P as f,
  R as p,
  S as m,
  T as h,
  V as g,
  _,
  a as v,
  b as y,
  c as b,
  d as x,
  f as S,
  g as C,
  h as w,
  i as T,
  j as E,
  k as D,
  l as O,
  m as k,
  o as A,
  p as j,
  s as M,
  u as ee,
  w as N,
  x as P,
  y as F,
} from "./react.BtSUcPAM.mjs";
import {
  $ as I,
  A as te,
  B as ne,
  C as re,
  D as ie,
  E as L,
  F as ae,
  G as oe,
  H as se,
  I as ce,
  J as le,
  K as ue,
  L as de,
  M as fe,
  O as pe,
  P as R,
  Q as me,
  R as he,
  S as ge,
  T as _e,
  U as ve,
  V as ye,
  W as be,
  X as xe,
  Y as Se,
  Z as Ce,
  _ as we,
  a as Te,
  at as Ee,
  b as De,
  c as Oe,
  ct as ke,
  d as Ae,
  et as je,
  f as Me,
  g as Ne,
  h as Pe,
  i as Fe,
  it as Ie,
  j as Le,
  k as Re,
  l as ze,
  lt as Be,
  m as Ve,
  n as He,
  nt as Ue,
  o as We,
  ot as Ge,
  p as Ke,
  q as qe,
  r as Je,
  rt as Ye,
  s as Xe,
  st as Ze,
  tt as Qe,
  u as $e,
  ut as et,
  v as tt,
  w as nt,
  x as rt,
  y as it,
  z as at,
} from "./motion.B_UOAosx.mjs";
function ot(e) {
  return typeof e == `function`;
}
function st(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function ct(e) {
  return Number.isFinite(e);
}
function lt(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !lt(e);
}
function ut(e) {
  for (let t in e) return !1;
  return !0;
}
function dt(e) {
  return e === void 0;
}
function ft(e) {
  return e === null;
}
function pt(e) {
  return e == null;
}
function mt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ht(e) {
  return B(e) && ot(e.return);
}
function gt(e) {
  return B(e) && ot(e.then);
}
function _t(e) {
  return e instanceof Promise;
}
function vt(e) {
  return `url('${yt(e)}')`;
}
function yt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function bt(e, t) {
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
function xt(e, t, n) {
  if (dy.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (dy.set(e, t), t))
    .catch((t) => {
      throw (dy.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(ry), dy.set(e, r));
}
function St(e, t) {
  iy && (fy.set(e, t), py.has(e) && xt(e, t, `registered loader ${e}`));
}
function Ct() {
  if (!iy) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(my),
      i = r ? e.slice(my.length) : e;
    if (!i) continue;
    py.add(i);
    let a = fy.get(i);
    a ? xt(i, a, `registered loader ${i}`) : r && xt(i, () => import(n), n);
  }
}
function wt(e) {
  return typeof e == `object` && !!e && !w(e) && gy in e;
}
function Tt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function Et(e, t = `default`, n) {
  n && St(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !dy.has(n)) return;
      let e = dy.get(n);
      _t(e) ? s(() => e) : (i = Tt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = Tt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = k(function (t, r) {
      if (
        (P(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && hy !== void 0 && hy.add(n), !i)) throw s(e);
      return M(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function Dt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ot(e) {
  return e === null || !(vy in e) ? !1 : typeof e.equals == `function`;
}
function kt(e, t) {
  return e === t || (e !== e && t !== t);
}
function At(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!kt(e[r], t[r])) return !1;
  return !0;
}
function jt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Lt(e[r], t[r], !0)) return !1;
  return !0;
}
function Mt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!kt(r, t.get(n))) return !1;
  return !0;
}
function Nt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Lt(r, t.get(n), !0)) return !1;
  return !0;
}
function Pt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Ft(e, t) {
  let n = _y(e);
  if (n.length !== _y(t).length) return !1;
  for (let r of n)
    if (!Dt(t, r) || (!(r === `_owner` && Dt(e, `$$typeof`) && e.$$typeof) && !kt(e[r], t[r])))
      return !1;
  return !0;
}
function It(e, t) {
  let n = _y(e);
  if (n.length !== _y(t).length) return !1;
  for (let r of n)
    if (!Dt(t, r) || (!(r === `_owner` && Dt(e, `$$typeof`) && e.$$typeof) && !Lt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Lt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? jt(e, t) : At(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Nt(e, t) : Mt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Pt(e, t);
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
      ? Ot(e) && Ot(t)
        ? e.equals(t)
        : n
          ? It(e, t)
          : Ft(e, t)
      : !1;
}
function Rt(e, t, n = !0) {
  try {
    return Lt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function zt(e) {
  return r.useCallback((t) => e[t], [e]);
}
function Bt({ api: e, children: t }) {
  return M(yy.Provider, { value: e, children: t });
}
function Vt() {
  return r.useContext(yy);
}
function Ht({ routes: e, children: t }) {
  let n = zt(e),
    r = f(() => ({ getRoute: n }), [n]);
  return M(yy.Provider, { value: r, children: t });
}
function Ut() {
  let e = Vt(),
    t = u(by),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return f(() => {
    if (!(!n || !a)) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function Wt() {
  let e = Ut();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Gt(e) {
  let t = Ut(),
    n = r.useRef(t);
  Rt(n.current, t) || !t || ((n.current = t), e(t));
}
function Kt(e) {
  let t = Vt();
  if (e) return t.getRoute?.(e);
}
function qt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Jt(e) {
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
function Yt(e, t) {
  let n = Ut(),
    i = Kt(t) ?? n;
  return r.useMemo(() => (i ? qt(i, e) : e), [e, i]);
}
function Xt() {
  return Ut()?.pathVariables;
}
function V(e, t) {
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
function H(e, t) {
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
function Zt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Fy
  );
}
function Qt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function $t(e) {
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
function en(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = $t(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function tn(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function nn(e) {
  return Iy.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function rn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Ny);
}
function an(e) {
  return !(!Number.isInteger(e) || e < 0 || e > My);
}
function on(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return rn(+e);
}
function sn(e) {
  for (var t = e.length - 1; t >= 0 && !on(e[t]); t--);
  return t + 1;
}
function cn(e) {
  let t = Object.keys(e);
  return ((t.length = sn(t)), t);
}
function ln(e) {
  return new Uint8Array(e).toBase64();
}
function un(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function dn(e) {
  return Buffer.from(e).toString(`base64`);
}
function fn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function pn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function mn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function hn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function gn(e, t, n) {
  return _n(JSON.parse(e), t, n);
}
function _n(e, t, n) {
  let r = hn(Wy, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === Ty) return r.fromPrimitive(void 0);
    if (e === Dy) return r.fromPrimitive(NaN);
    if (e === Oy) return r.fromPrimitive(1 / 0);
    if (e === ky) return r.fromPrimitive(-1 / 0);
    if (e === Ay) return r.fromPrimitive(-0);
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
            a[e] = r.fromArrayBuffer(By(t));
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
      } else if (c[0] === jy) {
        let t = c[1];
        if (!an(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!rn(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== Ey && r.set(t, e, s(n));
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
function vn(e, t, n) {
  let r = yn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function yn(e, t, n, r) {
  let i = hn(Uy, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return Ty;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return Dy;
      if (f === 1 / 0) return Oy;
      if (f === -1 / 0) return ky;
      if (f === 0 && 1 / f < 0) return Ay;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new Py(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new Py(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = bn(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new Py(
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
          m = `["URL",${en(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${en(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${en(r)},"${a}"]` : `["RegExp",${en(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += Ey;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + jy + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += Ey));
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
            (c.push(`.get(${r ? bn(i.toPrimitive(e)) : `...`})`),
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
          m = `["ArrayBuffer","${zy(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${en(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new Py(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new Py(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new Py(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(nn(r)), (m += `,${en(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new Py(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(nn(a)),
                (m += `${en(a)}:${u(i.get(n, a))}`),
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
function bn(e) {
  let t = typeof e;
  return t === `string`
    ? en(e)
    : e === void 0
      ? Ty.toString()
      : e === 0 && 1 / e < 0
        ? Ay.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function xn(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
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
function Sn(e) {
  return z(e) && (e === `` || Ky.test(e));
}
function Cn() {
  return { [qy.QueryCache]: new Map(), [qy.CollectionUtilsCache]: new Map() };
}
function wn() {
  if (!iy) return;
  if (Jy !== void 0) return Jy;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Jy = gn(e.text) ?? Cn();
    } catch (e) {
      ((Jy = Cn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      sy(() => {
        (e?.remove(), (e = null));
      }),
      Jy
    );
  }
}
function Tn(e, t) {
  if (
    (console.warn(
      bt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    xn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function En(e, t) {
  let n = wn();
  return n ? n[e].has(t) : !1;
}
function Dn(e, t) {
  let n = wn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function On(e) {
  return e?.id ?? Sy;
}
function kn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function An(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Qy.has(n)) return Qy.get(n);
    let r = new eb(n, t);
    return (Qy.set(n, r), r);
  };
}
function jn({ children: e, collectionUtils: t }) {
  let n = f(() => ({ get: An(t) }), [t]);
  return M($y.Provider, { value: n, children: e });
}
function Mn() {
  return u($y);
}
function Nn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Pn() {
  return g === void 0 ? void 0 : g;
}
function Fn() {
  return s === void 0 ? void 0 : s;
}
function In() {
  let e = Pn();
  return e ? tb.test(e.platform) : !1;
}
function Ln() {
  let e = Pn();
  return e
    ? nb.test(e.platform)
      ? !0
      : rb.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Rn() {
  return In() || Ln();
}
function zn() {
  let e = Pn();
  return e ? ib.test(e.userAgent) : !1;
}
function Bn() {
  let e = Pn();
  return e ? ab.test(e.userAgent) && ob.test(e.vendor) && !zn() : !1;
}
function Vn() {
  let e = Pn();
  return e ? sb.test(e.userAgent) && cb.test(e.vendor) : !1;
}
function Hn() {
  let e = Pn();
  return e ? lb.test(e.userAgent) : !1;
}
function Un() {
  return typeof document == `object`;
}
function Wn() {
  let e = Pn();
  if (!e) return -1;
  let t = ub.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Gn() {
  let e = Pn();
  return e ? db.test(e.userAgent) : !1;
}
function Kn() {
  return !1;
}
function qn() {
  let e = Fn(),
    t = Pn();
  return !e || !t ? !1 : `ontouchstart` in e || t.maxTouchPoints > 0;
}
function Jn() {
  let e = Pn();
  return e && fb.test(e.userAgent) ? `tablet` : e && pb.test(e.userAgent) ? `phone` : `desktop`;
}
function Yn() {
  return Jn() === `desktop`;
}
function Xn(e) {
  return Rn() ? e.metaKey : e.ctrlKey;
}
function Zn() {}
async function Qn() {}
function $n(e) {
  return typeof e == `function` ? e() : e;
}
function er(e, t) {
  return _b[e] > _b[t];
}
function tr() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function nr(e, t) {
  let n = e?.priority,
    r = tr();
  return n === `background`
    ? (t?.() ?? Nn(1))
    : r?.yield
      ? r.yield(e).catch(Zn)
      : r?.postTask
        ? r.postTask(Zn, e).catch(Zn)
        : t
          ? t()
          : n === `user-blocking`
            ? vb
            : Nn(0);
}
function rr(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function c() {
    return document.hidden ? (o(), !0) : !1;
  }
  function l() {
    Un() && (document.addEventListener(`visibilitychange`, c), s.addEventListener(`pagehide`, o));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, yb),
        e(() => {
          nr(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return Un()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? u(a) : nr(a, t);
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
        o = t ?? (e.priority === `user-blocking` ? mb : hb),
        s = Un() && document.hidden ? gb : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Un() && !t ? (n ? void 0 : vb) : n ? m(i, r) : f(i);
  }
  return h;
}
function ir(e, t = !1) {
  let n = ``;
  if (s !== void 0)
    if (t) n = s.location.search;
    else {
      let e = s.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? s.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? ar(n, e) : e;
}
function ar(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Sb && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function or(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Cb)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = _t(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = _t(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = _t(e) ? await e : e;
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
function sr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function cr({
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
      u = await or(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = sr(u.path, t.slug)),
    o && u.path && (u.path = ir(u.path, !0)),
    u
  );
}
async function lr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Cb)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (z(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function ur({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === Sy) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await lr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function dr({
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
      (await ur({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await cr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Rt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function fr() {
  return r.useContext(Eb);
}
function pr() {
  return fr().activeLocale?.code ?? `en-US`;
}
function mr() {
  return r.useContext(Db);
}
function hr() {
  let e = Mn(),
    { getRoute: t } = Vt(),
    { activeLocale: n, locales: r } = fr();
  return E(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return _r(
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
function gr(e, t = !0) {
  let n = hr();
  P(() => {
    if (!(!t || !Ob)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function _r(e, t, n = {}) {
  if (!Ob || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !wt(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await xb({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await vr(n, e, t, r));
    } catch {}
  }
}
async function vr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await dr({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Sy),
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
function yr(e, t) {
  return e.replace(Cb, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function br() {
  if (kb) return;
  kb = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (s.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((s.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), xn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function xr({ children: e, value: t }) {
  return M(Ab.Provider, { value: t, children: e });
}
function Sr() {
  return r.useContext(Ab);
}
function Cr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function wr(e) {
  let t = jb,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Mb;) ((n = e.next(t)), r.push(n.value), (t += jb));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - jb }
  );
}
function Tr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Er(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = Tr(e.x),
    [a, o] = Tr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Dr(e) {
  let [t, n] = Tr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Or(e) {
  let { x: t, y: n } = Er(e);
  return Math.hypot(Math.max(t, s.innerWidth - t), Math.max(n, s.innerHeight - n));
}
function kr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Ar(e) {
  return e ? Fb[e] : void 0;
}
function jr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Mr(t)) {
    let { easing: e, duration: n } = wr(
      ye({ keyframes: [0, 1], ...Nr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Ar(n?.mask?.type),
    o = kr(n, `start`, e, a),
    s = kr({ ...Ib, mask: n.mask }, `end`, e, a);
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
function Mr(e) {
  return e.type === `spring`;
}
function Nr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Pr({ exit: e = Rb, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Lb;
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
    (r += jr(`exit`, e)),
    (r += jr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Fr() {
  sy(() => {
    L.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Lb);
      e && document.head.removeChild(e);
    });
  });
}
function Ir() {
  return !!document.startViewTransition;
}
function Lr(e) {
  return new Promise((t) => {
    L.render(() => {
      (performance.mark(`framer-vt-style`), Pr(e), t());
    });
  });
}
async function Rr(e, t, n) {
  if (!Ir()) {
    e();
    return;
  }
  if ((await Lr(t), n?.aborted)) return;
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
      .catch(zb),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Fr());
      })
      .catch(zb),
    r
  );
}
function zr() {
  let e = Sr(),
    t = m(void 0);
  return (
    P(() => {
      t.current &&= (t.current(), void 0);
    }),
    E(
      (n, r, i, a) => {
        let o = Cr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Rr(
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
function Br(e, t) {
  sy(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Vr(e, t) {
  sy(() => {
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
function Hr(e) {
  sy(() => {
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
function Ur(e, t, n, r = D) {
  r(() => {
    let t = async (e) => (await xb({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Wr(e) {
  let t = m(new Set());
  return (
    Ur(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    E(
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
function Gr(e) {
  return B(e) && `routeId` in e;
}
function Kr(e = s.history.state) {
  return Gr(e) ? e : void 0;
}
function qr(e) {
  return e?.entryId;
}
function Jr(e) {
  Hb = e;
}
function Yr() {
  return Hb;
}
function Xr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Zr(e, t) {
  return Qr(e, qr(e) ?? qr(t));
}
function Qr(e, t = Xr()) {
  return { ...e, entryId: t };
}
function $r(e, t) {
  (performance.mark(`framer-history-replace`), Jr(Zr(e, Kr())), t && Br(t, s.location.href));
  let n =
    !t || t === s.location.href
      ? s.History.prototype.replaceState.bind(s.history)
      : s.history.replaceState.bind(s.history);
  try {
    n(Hb, ``, t);
  } catch {}
}
function ei(e) {
  (performance.mark(`framer-history-replace`),
    Jr(Qr(e)),
    History.prototype.replaceState.call(s.history, Hb, ``, void 0));
}
function ti(e) {
  let t = s.navigation?.transition;
  if (!t) {
    e();
    return;
  }
  let n = () => {
    let n = s.navigation.transition;
    if (n && n !== t) {
      ti(e);
      return;
    }
    e();
  };
  t.finished.then(n, n);
}
function ni(e, t) {
  (performance.mark(`framer-history-push`), Jr(Qr(e)), Br(t, s.location.href), br());
  try {
    s.history.pushState(Hb, ``, t);
  } catch {}
}
function ri({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: i,
  initialCanonicalPathVariables: a,
}) {
  D(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let o = s.location.hash ? s.location.hash.slice(1) : void 0;
    $r({
      ...Kr(),
      routeId: t,
      hash: o,
      pathVariables: n,
      localeId: r,
      contentLocaleId: i,
      canonicalPathVariables: a,
    });
  }, []);
}
function ii(e, t, n) {
  let r = zr(),
    i = Wr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    c = o ? `manual` : `after-transition`,
    l = m(void 0),
    u = E(() => {
      (l.current?.resolve(), (l.current = void 0));
    }, []),
    d = E(
      async ({ state: e }) => {
        if (!Gr(e)) return;
        let o = i({ popstate: !0 }),
          l = Jt();
        (o.promise.finally(l), qr(Yr()) !== (qr(e) ?? qr(Kr())) && a(), Jr(e));
        let {
            routeId: d,
            hash: f,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = z(f) ? f : s.location.hash ? s.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                d,
                z(m) ? m : void 0,
                _,
                s.location.pathname + s.location.search + s.location.hash,
                B(p) ? p : void 0,
                h,
                g,
                !0,
                o,
                !1
              ),
              !0);
          },
          b = c === `after-transition`;
        (await Promise.resolve(r(t.current, d, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || u();
          }),
          await o.promise,
          b && u(),
          await s.navigation?.transition?.finished.catch(ry),
          Vb(),
          Br(s.location.href));
      },
      [t, i, a, u, n, r, c]
    ),
    f = E(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Gr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                l.current = { resolve: e, reject: t };
              }),
                (l.current = void 0));
            },
            scroll: c,
          });
      },
      [c]
    );
  P(
    () => (
      s.addEventListener(`popstate`, d),
      Ub && s.navigation.addEventListener(`navigate`, f),
      () => {
        (s.removeEventListener(`popstate`, d),
          Ub && s.navigation.removeEventListener(`navigate`, f));
      }
    ),
    [d, f]
  );
}
async function ai(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + sr(yr(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + i), !0)
    : !1;
}
function oi() {
  let e = Mn();
  return E((t) => si({ ...t, collectionUtils: e }), [e]);
}
async function si({ sitePrefix: e, ...t }) {
  let n = await cr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!z(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await ai(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function ci(e, t) {
  let n = qr(Kr());
  n &&
    ti(() => {
      let r = Kr();
      if (!r || qr(r) !== n) return;
      let i = { ...r.paginationInfo, [e]: t };
      $r({ ...r, paginationInfo: i });
    });
}
function li(e) {
  let t = m(Promise.resolve()),
    n = m(),
    r = E(
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
  return E(
    (e, i, a) => {
      if (!Ub) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        s.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), s.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function ui(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function di(e) {
  return ui(e.trim().toLowerCase().replace(Wb, `-`));
}
function fi({ children: e, value: t }) {
  return M(Kb.Provider, { value: t, children: e });
}
function pi() {
  return u(Kb);
}
function mi(e, t) {
  let n = F(() => ({ inputs: t, result: e() }))[0],
    r = m(!0),
    i = m(n),
    a =
      r.current || (t && i.current.inputs && Rt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    P(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function hi(e, t) {
  return mi(() => e, t);
}
function gi() {
  return s.location.search;
}
function _i() {
  return ``;
}
function vi(e) {
  return (
    Jb.add(e),
    s.addEventListener(`popstate`, e),
    () => {
      (Jb.delete(e), s.removeEventListener(`popstate`, e));
    }
  );
}
function yi() {
  for (let e of Jb) e();
}
function bi({ children: e, routerRenderKey: n, isNavigationCommitPending: r }) {
  let i = pi() === `preview`,
    [a, o] = F(``),
    l = m(n);
  qb(() => {
    l.current = n;
  }, [n]);
  let u = t(vi, gi, _i),
    d = y(u),
    f = n !== y(n),
    p = i ? a : f ? u : d,
    h = E(
      async (e) => {
        if (i) {
          c(() => {
            o((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let t = r(),
          a = n;
        if ((await xb({ continueAfter: `paint` }), t || r() || l.current !== a)) return;
        let u = Kr();
        if (!u) return;
        let d = new URL(s.location.href),
          f = e(d.searchParams).toString();
        d.search = f;
        let p = u.queryParamBackAnchorSearch,
          m = s.location.search.slice(1),
          h = p === void 0 && f !== m,
          g = p !== void 0 && f === p,
          _ = { ...u, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = d.toString();
        (h || g ? ni(_, v) : $r(_, v), yi());
      },
      [r, i, n]
    ),
    g = mi(() => ({ urlSearchParams: new URLSearchParams(p), replaceSearchParams: h }), [p, h]);
  return M(Yb.Provider, { value: g, children: e });
}
function xi({ parameterName: e }) {
  let t = m(e),
    { urlSearchParams: n, replaceSearchParams: r } = u(Yb);
  return [
    f(() => n.getAll(t.current), [n]),
    E(
      async (e) => {
        lt(e) &&
          (await r((n) => {
            let r = t.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [t, o] of n.entries()) {
              if (t !== r) {
                i.append(t, o);
                continue;
              }
              if (!a) {
                a = !0;
                for (let t of e) z(t) && i.append(r, t);
              }
            }
            if (!a) for (let t of e) z(t) && i.append(r, t);
            return i;
          }));
      },
      [r]
    ),
  ];
}
function Si({ initialValue: e, parameterName: t, optional: n }) {
  let r = m(n ? void 0 : z(e) ? e : ``),
    [i, a] = xi({ parameterName: t });
  return [
    f(() => (i.length === 0 ? r.current : (i[0] ?? ``)), [i]),
    E(
      async (e) => {
        if (e === r.current) return a(xy);
        if (z(e)) return a([e]);
      },
      [a]
    ),
  ];
}
function Ci({ collectionId: e, initialValue: t, parameterName: n, optional: r }) {
  let i = Mn(),
    a = fr().activeLocale ?? void 0,
    o = m(r ? void 0 : t),
    [s, c] = Si({ initialValue: void 0, parameterName: n, optional: !0 });
  return [
    f(() => (z(s) ? Ti(wi(i, e).getRecordIdBySlug(s, a)) : o.current), [i, e, a, s]),
    E(
      async (t) => {
        if (dt(t)) return c(void 0);
        let n = await wi(i, e).getSlugByRecordId(t, a);
        z(n) && (await c(n));
      },
      [i, e, a, c]
    ),
  ];
}
function wi(e, t) {
  let n = e?.get(t);
  return (V(n, () => `CollectionUtilsCache not found for collectionId: ${t}`), n);
}
function Ti(e) {
  if (_t(e)) throw e;
  return e;
}
function Ei(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Di(e),
    [r, i] = Di(t),
    a = Oi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Di(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Oi(e, t) {
  if (e === t || ((e = `/` + ki(e)), (t = `/` + ki(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Qb(e, 1 + s);
    if (n !== Qb(t, 1 + s)) break;
    n === Zb && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Qb(t, 1 + s) === Zb) return ex(t, 1 + s + 1);
      if (s === 0) return ex(t, 1 + s);
    } else r > a && (Qb(e, 1 + s) === Zb ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Qb(e, s) === Zb) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${ex(t, 1 + o)}`;
}
function ki(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Qb(e, o);
    else if (rx(a)) break;
    else a = Zb;
    if (rx(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Qb(t, t.length - 1) !== Xb || Qb(t, t.length - 2) !== Xb) {
            if (t.length > 2) {
              let e = $b(t, nx);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = ex(t, 0, e)), (n = t.length - 1 - $b(t, nx))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          tx && ((t += t.length > 0 ? `${nx}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${nx}${ex(e, r + 1, o)}`) : (t = ex(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Xb && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Ai(e) {
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
function ji(e, t) {
  let n = e.replace(Cb, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function Mi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return ji(i, r);
  }
  if (e.includes(`:`)) return ji(e, r);
  let i = t.elements?.[e];
  return i ? ji(i, r) : e;
}
function Ni(
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
    localeSlug: p,
  }
) {
  let m;
  if ((i && e && (m = Mi(i, e, o)), u)) return m ?? ``;
  let h = t ?? `/`;
  (n && f && (h = n[f] ?? h), r && (h = h.replace(Cb, (e, t) => String(r[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(Cb, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (ix.has(h) && s !== void 0) {
      let e = Ai(d);
      g = Ei(s.location.pathname, e + g);
    } else g = Ei(h, g);
  else g = sr(g, p);
  let y = _ || v;
  return ((l || y) && (g = ir(g, y)), m && (g = `${g}#${m}`), g);
}
function Pi() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[ax] = 1), e);
}
function Fi() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[ax] = 1), e);
}
function Ii(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function Li(e) {
  return ax in e && e[ax] === 1;
}
function Ri(e) {
  return ox in e.nativeEvent && e.nativeEvent[ox] === 1;
}
function zi(e) {
  let n = m(!1),
    r = m(null),
    i = t(cy, uy, sx);
  return (
    P(() => {
      if (!i) return;
      let t = r.current;
      if (n.current || !t) return;
      n.current = !0;
      let a = Ii(t),
        o = t[a];
      if (o === e) return;
      if (t.type === `radio` && o === !0) {
        ((t.checked = !1), t.dispatchEvent(Fi()));
        return;
      }
      if (a === `checked`) {
        let e = Fi();
        ((e[ox] = 1), t.dispatchEvent(e), t.dispatchEvent(Fi()));
        return;
      }
      if (t.nodeName === `SELECT`) {
        t.dispatchEvent(Pi());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), a)?.set;
      if (!s) return;
      s.call(t, ``);
      let c = Pi();
      ((c[ox] = 1),
        t.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(t, o), t.dispatchEvent(Pi()));
        }));
    }, [i]),
    r
  );
}
function Bi() {
  if (!cx) return;
  ((ux = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  cx.forEach((n) => t.addEventListener(n, lx, e));
}
function Vi() {
  return (
    P(() => {
      if (!ux || !cx) return;
      let e = { capture: !0 },
        t = document.body;
      (cx.forEach((n) => t.removeEventListener(n, lx, e)),
        (cx = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Hi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Ui(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Wi() {
  ((Ax = new kx()), Ax.render.markStart());
}
function Gi() {
  (o(() => {
    Ax?.useInsertionEffects.markRouterStart();
  }, []),
    D(() => {
      Ax?.useLayoutEffects.markRouterStart();
    }, []),
    P(() => {
      Ax?.useEffects.markRouterStart();
    }, []));
}
function Ki() {
  (o(() => {
    (Ax?.render.markEnd(), Ax?.useInsertionEffects.markStart());
  }, []),
    D(() => {
      if ((Ax?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        jx = !0;
        return;
      }
      L.read(() => {
        (Ax?.browserRendering.requestAnimationFrame.markStart(),
          Ax?.unattributedHydrationOverhead.measure());
      });
    }, []),
    P(() => {
      (Ax?.useEffects.markStart(),
        Ax?.browserRendering.hasStarted ||
          (Ax?.mutationEffects.measure(), Ax?.useEffects.markAreSynchronous()));
    }, []));
}
function qi() {
  (o(() => {
    Ax?.useInsertionEffects.markEnd();
  }, []),
    D(() => {
      (Ax?.useLayoutEffects.markEnd(),
        !(jx || document.visibilityState !== `visible`) &&
          L.read(() => {
            (Ax?.browserRendering.requestAnimationFrame.markEnd(),
              xb().then(() => {
                Ax?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    P(() => {
      Ax?.useEffects.markEnd();
    }, []));
}
function Ji() {
  return (Ki(), null);
}
function Yi() {
  return (qi(), null);
}
function Xi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return r.isValidElement(e) ? r.cloneElement(e, n) : M(e, { ...n });
}
function Zi() {
  return Fx;
}
function Qi(e) {
  if (Ix?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: ta(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = ta(t),
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
    Ix = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Ix.pathRoutes,
    paths: Ix.paths,
    pathRoutesLocalized: Ix.pathRoutesLocalized,
    pathsLocalized: Ix.pathsLocalized,
  };
}
function $i(e, t, n = !0, r = Zi()) {
  return ea(e, t, r, n);
}
function ea(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Qi(e),
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
      let e = na(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = na(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = na(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = na(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function ta(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function na(e, t) {
  let n = [],
    r = ra(t).replace(Cb, (e, t) => (n.push(t), `([^/]+)`)),
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
function ra(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function ia(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function aa(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = ia(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function oa(e, t) {
  let n = e.toLowerCase(),
    r = aa(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function sa(e) {
  if (s === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in s)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function ca() {
  let e = sa(`abtests`);
  return new URLSearchParams(e?.description);
}
function la(e, t, n) {
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
function ua(e, t) {
  for (let [n, r] of t) la(e, n, r);
}
function da(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function fa(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function pa(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    fa(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (ua(e, ca()), da(e), n);
}
function ma(e) {
  (P(() => {
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
    o(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function ha(e, ...t) {
  Lx.has(e) || (Lx.add(e), console.warn(e, ...t));
}
function ga(e, t, n) {
  ha(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function _a(e) {
  return (
    typeof e == `object` &&
    !!e &&
    zx in e &&
    e[zx] instanceof Function &&
    Bx in e &&
    e[Bx] instanceof Function
  );
}
function va(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = q(r);
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
function ya(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function ba(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function xa(e) {
  return Math.round(e * 2) / 2;
}
function Sa(e, t) {
  return { x: e, y: t };
}
function Ca(e, t, n, r = !1) {
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
function wa(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ta(e) {
  let t = Ea(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Ea(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Da(e, t, n) {
  return (
    (Wx.rgb_r = e / 255),
    (Wx.rgb_g = t / 255),
    (Wx.rgb_b = n / 255),
    Wx.rgbToHsluv(),
    { h: Wx.hsluv_h, s: Wx.hsluv_s, l: Wx.hsluv_l }
  );
}
function Oa(e, t, n, r = 1) {
  return (
    (Wx.hsluv_h = e),
    (Wx.hsluv_s = t),
    (Wx.hsluv_l = n),
    Wx.hsluvToRgb(),
    { r: Wx.rgb_r * 255, g: Wx.rgb_g * 255, b: Wx.rgb_b * 255, a: r }
  );
}
function ka(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Aa(e, t, n) {
  return {
    r: wa(e) ? La(e, 255) * 255 : 0,
    g: wa(t) ? La(t, 255) * 255 : 0,
    b: wa(n) ? La(n, 255) * 255 : 0,
  };
}
function ja(e, t, n, r) {
  let i = [
    Ba(Math.round(e).toString(16)),
    Ba(Math.round(t).toString(16)),
    Ba(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Ma(e, t, n) {
  let r,
    i,
    a = La(e, 255),
    o = La(t, 255),
    s = La(n, 255),
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
function Na(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Pa(e, t, n) {
  let r, i, a;
  if (((e = La(e, 360)), (t = La(t * 100, 100)), (n = La(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Na(s, o, e + 1 / 3)), (i = Na(s, o, e)), (a = Na(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Fa(e, t, n) {
  ((e = La(e, 255)), (t = La(t, 255)), (n = La(n, 255)));
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
function Ia(e, t, n) {
  ((e = La(e, 360) * 6), (t = La(t * 100, 100)), (n = La(n * 100, 100)));
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
function La(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Ra(e) && (e = `100%`);
    let t = za(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ra(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function za(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Ba(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Va(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Hx[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Gx.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Gx.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Gx.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Ta(r[2] ?? ``), l: Ta(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Gx.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Ta(r[2] ?? ``),
              l: Ta(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Gx.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Ta(r[2] ?? ``), v: Ta(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Gx.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Ta(r[2] ?? ``),
                  v: Ta(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Gx.hex8.exec(t))
                ? {
                    r: Ha(r[1] ?? ``),
                    g: Ha(r[2] ?? ``),
                    b: Ha(r[3] ?? ``),
                    a: Ua(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Gx.hex6.exec(t))
                  ? {
                      r: Ha(r[1] ?? ``),
                      g: Ha(r[2] ?? ``),
                      b: Ha(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Gx.hex4.exec(t))
                    ? {
                        r: Ha(`${r[1]}${r[1]}`),
                        g: Ha(`${r[2]}${r[2]}`),
                        b: Ha(`${r[3]}${r[3]}`),
                        a: Ua(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Gx.hex3.exec(t))
                      ? {
                          r: Ha(`${r[1]}${r[1]}`),
                          g: Ha(`${r[2]}${r[2]}`),
                          b: Ha(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Ha(e) {
  return parseInt(e, 16);
}
function Ua(e) {
  return Ha(e) / 255;
}
function Wa(e) {
  let t = Kx.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Ga(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ka({ r: e, g: t, b: n, a: r }) {
  return { r: Ga(e), g: Ga(t), b: Ga(n), a: r };
}
function qa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ja({ r: e, g: t, b: n, a: r }) {
  return { r: qa(e), g: qa(t), b: qa(n), a: r };
}
function Ya({ r: e, g: t, b: n, a: r }) {
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
function Xa(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Za({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Xa(e),
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
function Qa(e) {
  return Xx(Yx(e));
}
function $a(e) {
  return Jx(qx(e));
}
function eo(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ro({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = to(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ro(e)
              : io(e)),
    i
  );
}
function to(e) {
  let t = Va(e);
  if (t) return t.format === `hsl` ? io(t) : t.format === `hsv` ? no(t) : ro(t);
}
function no(e) {
  let t = Ia(e.h, e.s, e.v);
  return { ...Ma(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ao(e.a) };
}
function ro(e) {
  let t = Aa(e.r, e.g, e.b);
  return { ...Ma(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ao(e.a) };
}
function io(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = wa(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = wa(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Ea(e.s)),
    (r = wa(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Ea(e.l)),
    (i = Pa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ao(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function oo() {
  return K.location.origin === `https://screenshot.framer.invalid`;
}
function so({ children: e }) {
  if (u(uS).top) return M(O, { children: e });
  let t = m({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = m({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = m(new Set()).current,
    i = m({
      getLayoutId: E(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            V(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = co(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: E(() => {
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
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return M(uS.Provider, { value: i, children: e });
}
function co(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function lo({ enabled: e = !0, ...t }) {
  let n = u(uS),
    r = f(() => ({ ...n, enabled: e }), [e]);
  return M(uS.Provider, { ...t, value: r });
}
function uo(e) {
  let t = m(null);
  return (t.current === null && (t.current = e()), t.current);
}
function fo(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${po(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return ee(`div`, {
    style: fS,
    children: [
      M(`div`, { className: `text`, style: mS, children: r }),
      i && M(`div`, { className: `text`, style: hS, children: i }),
    ],
  });
}
function po(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function mo() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function ho() {
  let [e] = F(() => mo());
  return e;
}
function go(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function _o(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of DS) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function vo(e, t) {
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
function yo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < OS) continue;
    let n = vo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${vo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function bo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of ES) {
    let n = vo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function xo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = bo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: yo(n, t, _o(t.pixelWidth, t.pixelHeight)) };
}
function So() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: vt(CS.imagePlaceholderSvg),
  };
}
function Co(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function wo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function To(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...TS,
    objectPosition: wo(e.positionX, e.positionY),
    objectFit: Co(e.fit),
  };
}
function Eo(e) {
  let t = r.useRef(e ? `auto` : `async`),
    n = E((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    i = E(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    a = E(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: i, onImageMount: a };
}
function Do({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = CS.useImageSource(e, t, n),
    s = To(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Eo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : xo(e.nodeFixedSize, e, o);
  return M(`img`, {
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
function Oo({ image: e, containerSize: t, nodeId: n }) {
  let i = r.useRef(null),
    a = CS.useImageElement(e, t, n),
    o = To(e);
  return (
    r.useLayoutEffect(() => {
      let e = i.current;
      if (e !== null)
        return (
          e.appendChild(a),
          () => {
            e.removeChild(a);
          }
        );
    }, [a]),
    Object.assign(a.style, o),
    M(`div`, { ref: i, style: { display: `contents`, ...TS } })
  );
}
function ko({ nodeId: e, image: t, containerSize: n }) {
  let i = r.useRef(null),
    a = CS.useImageSource(t, n, e);
  return (
    r.useLayoutEffect(() => {
      let n = i.current;
      if (n === null) return;
      let r = To(t);
      CS.renderOptimizedCanvasImage(n, a, r, e);
    }, [e, t, a]),
    M(`div`, { ref: i, style: { display: `contents`, ...TS } })
  );
}
function Ao({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = ct(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = xa(e * (t.pixelWidth / 2)),
        s = CS.useImageSource(t, n);
      ((r = {
        ...kS,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: wo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? CS.canRenderOptimizedCanvasImage(CS.useImageSource(t))
            ? M(ko, { image: t, ...n })
            : M(Oo, { image: t, ...n })
          : M(Do, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? kS : (r ?? { ...kS, ...So() });
  return i
    ? M(R.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : M(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function jo(e, t, n = !0) {
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
function Mo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...TS,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), M(R.div, { style: n }))
    : (jo(e, n, !1), M(R.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function No(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Po(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !jS.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : q.get(t, null)), jS.isImageObject(r))) return No(r, e);
}
function Fo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Io(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Lo(e) {
  return e != null && typeof e != `boolean` && !Fo(e);
}
function U(e) {
  return Number.isFinite(e);
}
function Ro(e) {
  return (Math.PI / 180) * e;
}
function zo(e) {
  return dt(e) ? !1 : e === 2 || e === 5;
}
function Bo(e) {
  return !(!Lo(e) || !Io(e));
}
function Vo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Ho(e, t, n, r) {
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
      if (!r) return Uo(e);
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
function Uo(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function Wo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Ho(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Ho(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Go(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Ho(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Ho(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ko(e, t, n, r, i) {
  let a = Go(U(e) ? e : LS, n, r, i),
    o = Wo(U(t) ? t : RS, n, r, i);
  return (
    U(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (U(n.left) && U(n.right)
        ? (o = a / n.aspectRatio)
        : (U(n.top) && U(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function qo(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function Jo(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Yo(e) {
  return !e._constraints || Jo(e) ? !1 : e._constraints.enabled;
}
function Xo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function Zo(e) {
  let t = Xo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function Qo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Yo(e) || r) return Zo(e);
  let i = $o(e),
    a = es(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return IS.toRect(i, o, null, n, null);
}
function $o(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = FS.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: Vo(c),
      heightType: Vo(l),
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
function es(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ts() {
  return r.useContext(zS).parentSize;
}
function ns(e) {
  return typeof e == `object`;
}
function rs(e) {
  return ns(e) ? e.width : e;
}
function is(e) {
  return ns(e) ? e.height : e;
}
function as(e, t) {
  return M(BS, { parentSize: t, children: e });
}
function os(e) {
  return Qo(e, ts(), !0);
}
function ss({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function cs(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function ls(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? R[e] : R.div;
}
function us(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function ds(e, t, n = HS) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!US) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) US = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = US;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function fs() {
  return oo() ? Y.preview : Y.current();
}
function ps(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function ms(e) {
  return e !== fC && e !== pC;
}
function hs(e) {
  for (let t in e) if (ms(t) && e?.[t] === !0) return !0;
  return !1;
}
function gs(e, t, n, i, a) {
  let o = r.useRef(null),
    s = r.useCallback(
      (e) => {
        t &&
          o.current !== !1 &&
          ((o.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    c = r.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        o.current === !1 &&
          !hs(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (o.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    l = r.useCallback(
      (e) => {
        if (!t) {
          i?.(e);
          return;
        }
        if (o.current === !1) return;
        let n = e.currentTarget.validity;
        if (hs(n)) {
          s(e);
          return;
        }
        i?.(e);
      },
      [s, i, t]
    );
  return r.useMemo(() => ({ onInvalid: s, onChange: c, onBlur: l, onFocus: a }), [s, c, l, a]);
}
function _s(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return vs(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return ys(r);
    case `lower-roman`:
    case `upper-roman`:
      return xs(r);
    default:
      return vs(r);
  }
}
function vs(e) {
  return String(e).length;
}
function ys(e) {
  let t = 1;
  for (; bs(t) < e;) t++;
  return t;
}
function bs(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function xs(e) {
  let t = 0;
  for (let n of xC) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Ss(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Cs(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function ws() {
  return Y.current() === Y.preview ? FC.value : PC.value;
}
function Ts(e) {
  return qS(e, ws, `framer-lib-combinedCSSRules`);
}
function Es(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Ds(e, t) {
  let n = {};
  return (
    Y.current() === Y.canvas &&
      Es(n, IC ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Os(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function ks(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = r.Children.map(t, (e) =>
        r.isValidElement(e) ? r.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function As(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function js(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: l } = u(uS);
  return f(() => {
    if (!l) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || o)) return;
    let d = u || c({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [l]);
}
function Ms() {
  let [e, t] = r.useState(0);
  return r.useCallback(() => t((e) => e + 1), []);
}
function Ns(e) {
  let t = Ms();
  P(() => {
    let n = e?.current;
    if (n)
      return (
        zC?.observeElementWithCallback(e.current, t),
        () => {
          zC?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Ps(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(BC)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Fs)
    .map(Is);
}
function Fs(e) {
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
function Is(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Fs);
  return t ? Is(t) : e;
}
function Ls(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = u(LC),
    l = Y.current() === Y.canvas;
  qb(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && CS.queueMeasureRequest(Os(i), t.current, n(t.current)));
  });
}
function Rs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && CS.queueMeasureRequest(Os(t.id), t, Ps(t));
}
function zs(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  UC && t && (e.translateZ = VC);
}
function Bs(e) {
  ((e.willChange = `transform`), Vs(e, !0));
}
function Vs(e, t) {
  let n = Y.current() === Y.canvas;
  if (!UC || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(HC) || (e.transform = r + HC) : (e.transform = r.replace(HC, ``));
}
function Hs(e, t, n, r = !0) {
  if (!e) return;
  let i = gS(e.style),
    a = n || i[t],
    o = () => {
      Us(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Us(e) {
  return z(e) || ct(e) || ft(e);
}
function Ws(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Gs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ws(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ks(e, t) {
  let n = [e, t];
  return qC.test(e) ? e : Gs(1e3, JC, n, () => KC.multiplyAlpha(e, t));
}
function qs(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ks(e.value, t) }))
  );
}
function Js(e, t) {
  let n = 0;
  return (
    qs(e, t).forEach((e) => {
      n ^= GC(e.value) ^ e.position;
    }),
    n
  );
}
function Ys(e) {
  return e && YC.every((t) => t in e);
}
function Xs(e) {
  return e && XC.every((t) => t in e);
}
function Zs({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || $x(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = q.get(e, null)),
      typeof e == `string` || $x(e)
        ? (n.background = e)
        : QC.isLinearGradient(e)
          ? (n.background = QC.toCSS(e))
          : ew.isRadialGradient(e)
            ? (n.background = ew.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Qs(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function $s(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ec(e) {
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
    Le(n)
      ? (t.cornerShape = be(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    W(e, `size`, t),
    W(e, `width`, t),
    W(e, `height`, t),
    W(e, `minWidth`, t),
    W(e, `minHeight`, t),
    W(e, `top`, t),
    W(e, `right`, t),
    W(e, `bottom`, t),
    W(e, `left`, t),
    W(e, `position`, t),
    W(e, `overflow`, t),
    W(e, `opacity`, t),
    e._border?.borderWidth || W(e, `border`, t),
    W(e, `borderRadius`, t),
    W(e, `radius`, t, `borderRadius`),
    W(e, `color`, t),
    W(e, `shadow`, t, `boxShadow`),
    W(e, `x`, t),
    W(e, `y`, t),
    W(e, `z`, t),
    W(e, `rotate`, t),
    W(e, `rotateX`, t),
    W(e, `rotateY`, t),
    W(e, `rotateZ`, t),
    W(e, `scale`, t),
    W(e, `scaleX`, t),
    W(e, `scaleY`, t),
    W(e, `skew`, t),
    W(e, `skewX`, t),
    W(e, `skewY`, t),
    W(e, `originX`, t),
    W(e, `originY`, t),
    W(e, `originZ`, t),
    Zs(e, t),
    t
  );
}
function tc(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof gS(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function nc(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (nw.has(t)) return `pointer`;
}
function rc(e) {
  return ic(e) ? !0 : e.style ? !!ic(e.style) : !1;
}
function ic(e) {
  return rw in e && (e[rw] === `scroll` || e[rw] === `auto`);
}
function ac(e) {
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
    m = at(e.minWidth),
    h = at(e.minHeight),
    g = at(e.maxWidth),
    _ = at(e.maxHeight);
  return {
    top: at(n),
    left: at(t),
    bottom: at(r),
    right: at(i),
    width: at(a),
    height: at(o),
    size: at(l),
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
function oc(e) {
  let t = u(LC),
    { style: n, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = ac(e),
    c = os(s),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let d = !tc(e) && !e.__fromCanvasComponent && !rc(e),
    f = !e.style || !(`pointerEvents` in e.style);
  d && f && (l.pointerEvents = `none`);
  let p = r.Children.count(e.children) > 0 &&
      r.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = ec(e);
  (o === void 0 && !a && (Qs(m) || (l.width = iw.width), $s(m) || (l.height = iw.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let h = {};
  (Yo(s) &&
    c &&
    !ss(e) &&
    (h = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, i, m, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    WC.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = mo();
  return (
    e.positionSticky
      ? (!_ || CS.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = CS.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, c]
  );
}
function sc(e) {
  let t = {};
  for (let n in e)
    (fe(n) || vS(n)) && !aw.has(n)
      ? (t[n] = gS(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof gS(e)[n] != `boolean` && !e.transition && (t.transition = gS(e)[n]));
  return t;
}
function cc(e) {
  return `data-framer-name` in e;
}
function lc(e, t, n, r) {
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
function uc(e) {
  return M(R.div, { layoutId: cw, style: dw, children: e.children });
}
function dc(e, t) {
  ot(e) ? e(t) : fc(e) && (e.current = t);
}
function fc(e) {
  return B(e) && `current` in e;
}
function pc(e) {
  return fc(e) && e.current !== null;
}
function mc() {
  let e = uo(() => new Set()),
    t = uo(() => new Map());
  return uo(() => (n, r) => ({
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
function hc(e) {
  let t = m(null),
    n = mc();
  return uo(() => (fc(e) ? n(e) : ot(e) ? n(t, e) : n(t)));
}
function gc(e, t, n) {
  let r = m(),
    i = m();
  (mi(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function _c(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new fw({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function vc(e, t, n) {
  let r = uo(() => `${n.rootMargin}`),
    i = u(pw),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  gc(
    e,
    (e) => {
      if (a && e !== null) return _c(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function yc(e, t, n) {
  let i = r.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: a, animateOnce: o, threshold: s, rootMargin: c = `0px 0px 0px 0px` } = n;
  mw(
    e,
    r.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: r } = i.current,
          a = xc(e, s?.y ?? 0);
        if (a && !n) {
          if (o && r) return;
          ((i.current.hasAnimatedOnce = !0), (i.current.isInView = !0), t(!0));
          return;
        }
        if (!a && n) {
          if (((i.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    ),
    { threshold: hw, rootMargin: c, enabled: a ?? !0 }
  );
}
function bc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function xc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && bc(t, e) >= r;
}
function Sc() {
  return u(yw);
}
function Cc() {
  return new Map();
}
function wc() {
  return uo(Cc);
}
function Tc(e, t = []) {
  let { register: n, deregister: r } = u(bw);
  P(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Ec(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Dc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (U(t.originX) && (r.originX = t.originX),
      U(t.originY) && (r.originY = t.originY),
      U(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (U(n.originX) && (r.originX = n.originX),
      U(n.originY) && (r.originY = n.originY),
      U(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Oc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function kc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Ew.PushLeft;
    case `left`:
      return Ew.PushRight;
    case `bottom`:
      return Ew.PushUp;
    case `top`:
      return Ew.PushDown;
  }
}
function Ac(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Ew.OverlayLeft;
    case `left`:
      return Ew.OverlayRight;
    case `bottom`:
      return Ew.OverlayUp;
    case `top`:
      return Ew.OverlayDown;
  }
}
function jc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Ew.FlipLeft;
    case `left`:
      return Ew.FlipRight;
    case `bottom`:
      return Ew.FlipUp;
    case `top`:
      return Ew.FlipDown;
  }
}
function Mc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Pc(e, t.transition, t.component);
    case `removeOverlay`:
      return Fc(e);
    case `add`:
      return Ic(e, t.key, t.transition, t.component);
    case `remove`:
      return zc(e);
    case `update`:
      return Nc(e, t.key, t.component);
    case `back`:
      return Lc(e);
    case `forward`:
      return Rc(e);
    default:
      return;
  }
}
function Nc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Pc(e, t, n) {
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
function Fc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Ic(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? Wc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Hc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Bc(e, t, c),
    p = Uc(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function Lc(e) {
  let t = { ...e.containers },
    n = zc(e);
  if (n) return ((n.containers = t), n);
}
function Rc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Ic(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function zc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Vc(e, r, n),
    u = Uc(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function Bc(e, t, n) {
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
function Vc(e, t, n) {
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
function Hc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Uc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Gc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Wc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Gc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Kc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Kc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Kc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Kc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Kc(e, t, n) {
  let r = {},
    i = {};
  return (
    Ow.forEach((e) => {
      ((r[e] = Cw[e]), (i[e] = { ...n, from: Cw[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${gS(Cw)[a]}%` : gS(Cw)[a];
        ((gS(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function qc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Jc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Yc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : Mw;
}
function Xc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Zc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Qc(e, t) {
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
function $c(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function el(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function tl(e, t) {
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
function nl(e, t) {
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
  return Mw;
}
function rl(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function il(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function al(e) {
  return r.Children.map(e.component, (t) => {
    if (!Lo(t) || !Io(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      i = e?.transition?.position,
      a = !i || (i.left !== void 0 && i.right !== void 0),
      o = !i || (i.top !== void 0 && i.bottom !== void 0),
      s = `style` in t.props ? B(t.props.style) : !0;
    return (
      a && (`width` in t.props && (n.width = `100%`), s && (n.style.width = `100%`)),
      o && (`height` in t.props && (n.height = `100%`), s && (n.style.height = `100%`)),
      r.cloneElement(t, n)
    );
  });
}
function ol(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function sl(e, t) {
  let n = Ee(),
    r = xe();
  return M(jw, {
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
function cl(e) {
  return B(e) || ot(e);
}
function ll(e) {
  return !!e && Fw in e && e[Fw] === !0;
}
function ul(e) {
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
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return st(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return dt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return ct(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return (B(e.controls) && dl(t, e.controls), t);
      }
      case `array`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
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
function dl(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!dt(i) || ll(r)) continue;
    let a = ul(r);
    dt(a) || (e[n] = a);
  }
}
function fl(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function pl(e, t) {
  cl(e) && dl(fl(e), t);
}
function ml(e, t) {
  Object.assign(e, { [Iw]: t });
}
function hl(e, t, n) {
  (Object.assign(e, { propertyControls: t }), pl(e, t), n !== void 0 && ml(e, n));
}
function gl(e) {
  return e.propertyControls;
}
function _l(e, t = null) {
  let n;
  if (
    (t instanceof HTMLElement && (n = t),
    !n && e.target instanceof HTMLElement && (n = e.target),
    !n)
  )
    return { x: e.pageX, y: e.pageY };
  if (typeof K.webkitConvertPointFromPageToNode == `function`) {
    let t = new K.WebKitPoint(e.pageX, e.pageY);
    return ((t = K.webkitConvertPointFromPageToNode(n, t)), { x: t.x, y: t.y });
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
function vl(e) {
  let t = class extends r.Component {
    static defaultProps = Object.assign({}, e.defaultProps);
    shouldCancelTap = !1;
    activeEventListeners = new Map();
    get element() {
      return this.component.current && this.component.current.element;
    }
    hasFramerEventListener = !1;
    component = r.createRef();
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
          Vw.forEach((e) => this.addHoverEvent(e)),
          (this.hasFramerEventListener = !0))
        : this.element && e
          ? Vw.forEach((t) => this.checkHoverEvent(t, e))
          : this.element || (this.hasFramerEventListener = !1);
    }
    removeEventListeners() {
      Vw.forEach((e) => this.removeHoverEvent(e));
    }
    addHoverEvent(e) {
      let t = this.props[e];
      if (this.element && t) {
        let n = (e) => {
          let n = new Rw(e);
          t(n);
        };
        this.activeEventListeners.set(e, n);
        let r = Bw[e];
        this.element.addEventListener(r, n);
      }
    }
    removeHoverEvent(e) {
      let t = this.activeEventListeners.get(e);
      if (this.element && t) {
        let n = Bw[e];
        (this.element.removeEventListener(n, t), this.activeEventListeners.delete(e));
      }
    }
    checkHoverEvent(e, t) {
      t[e] !== this.props[e] && (this.removeHoverEvent(e), this.addHoverEvent(e));
    }
    handleEvent(e, t) {
      let n = Hw[e];
      n &&
        n.forEach((e) => {
          let n = this.props[e],
            r = this.shouldCancelTap && Uw.has(e);
          n && !r && n(t);
        });
    }
    render() {
      return M(zw.Consumer, {
        children: (t) => (
          (this.shouldCancelTap = t.dragging),
          M(e, { ...this.props, ref: this.component })
        ),
      });
    }
  };
  return ((0, Lw.default)(t, e), t);
}
function yl(e, t) {
  !e.blendingMode || e.blendingMode === `normal` || (t.mixBlendMode = e.blendingMode);
}
function bl(e) {
  return Yw in e;
}
function xl(e, t) {
  if (!bl(e)) return;
  let n = q.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Sl(e, t) {
  e.overflow && (t.overflow = e.overflow);
}
function Cl(e) {
  return Xw in e;
}
function wl(e) {
  let t = Number(e);
  return typeof e == `string` && Number.isNaN(t)
    ? e
    : (_a(e) && (t = q.getNumber(e)), t ? `${t}px` : `0`);
}
function Tl(e) {
  return e && e !== `0`;
}
function El(e, t) {
  if (!Cl(e)) return;
  let { radius: n } = e;
  if (typeof n == `string` || _a(n) || U(n)) {
    let e = wl(n);
    Tl(e) &&
      (t.borderTopLeftRadius =
        t.borderTopRightRadius =
        t.borderBottomRightRadius =
        t.borderBottomLeftRadius =
          e);
  } else if (n) {
    let e = wl(n.topLeft),
      r = wl(n.topRight),
      i = wl(n.bottomRight),
      a = wl(n.bottomLeft);
    (Tl(e) || Tl(r) || Tl(i) || Tl(a)) &&
      ((t.borderTopLeftRadius = e),
      (t.borderTopRightRadius = r),
      (t.borderBottomRightRadius = i),
      (t.borderBottomLeftRadius = a));
  }
}
function Dl(e, t) {
  let { color: n } = e;
  typeof n == `string`
    ? (t.color = n)
    : J.isColorObject(n) && (t.color = n.initialValue || J.toRgbString(n));
}
function Ol(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function kl(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Al(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => Qw.toCSS(e)).join(`, `);
  n && (t.boxShadow = n);
}
function jl(e, t) {
  let n = [];
  (U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Ol(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Ml(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Nl(e, t) {
  (Ml(e, t), jl(e, t));
}
function Pl(e, t, n = !1) {
  (Zs(e, t), El(e, t), Nl(e, t), yl(e, t), Sl(e, t), xl(e, t), Dl(e, t), n ? kl(e, t) : Al(e, t));
}
function Fl(e, t) {
  return (typeof t == `string` && (t = parseFloat(t)), U(t) ? t : $w(e));
}
function Il(e, t, n) {
  let r = n,
    i = typeof t.x == `number` ? `${t.x}px` : t.x,
    a = typeof t.y == `number` ? `${t.y}px` : t.y,
    o = $w(e.z),
    s = $w(e.scaleZ),
    c = $w(e.originZ),
    l = Fl(e.rotationZ, at(r.rotateZ)),
    u = Fl(e.rotationX, at(r.rotateX)),
    d = Fl(e.rotationY, at(r.rotateY)),
    f = $w(e.scale),
    p = $w(e.scaleX),
    m = $w(e.scaleY),
    h = $w(e.skew),
    g = $w(e.skewX),
    _ = $w(e.skewY),
    v = Fl(e.rotation, at(r.rotate));
  cS.target === Y.export || o !== 0 || s !== 1 || c !== 0 || l !== 0 || u !== 0 || d !== 0
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
  let y = `${$w(e.originX) * 100}% ${$w(e.originY) * 100}%`;
  ((n.transformOrigin = y), (n.WebkitTransformOrigin = y));
}
function Ll(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `100% 100%`;
    default:
      return `cover`;
  }
}
function Rl(e, t) {
  let n = Po(e);
  n &&
    ((t.backgroundImage = `url("${n.src}")`),
    (t.backgroundSize = Ll(n.fit)),
    (t.backgroundRepeat = `no-repeat`),
    (t.backgroundPosition = `center`));
}
function zl(e) {
  return U(e) ? `${e}px` : e;
}
function Bl(e, t, n) {
  if (t[n] !== void 0) {
    let r = q.get(t[n], void 0);
    gS(e)[n] = zl(r);
  }
}
function Vl(e) {
  return M(`div`, {
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
function Hl(e) {
  for (let t in e) if (_a(e[t])) return !0;
  for (let t of nT) if (e.hasOwnProperty(t)) return !1;
  for (let t of rT) if (e.hasOwnProperty(t)) return !0;
  return !1;
}
function Ul(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function Wl(e, t = 2) {
  let n = 0;
  if (typeof e == `number`) n = e;
  else if (typeof e == `string`) n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0;) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function Gl(e) {
  if (e === `none`) return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((e) => Wl(e)),
    [n, r, i, a] = t;
  switch (t.length) {
    case 1:
      return U(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !U(n) || !U(r) ? null : { top: n, right: r, bottom: n, left: r };
    case 3:
      return !U(n) || !U(r) || !U(i) ? null : { top: n, right: r, bottom: i, left: r };
    case 4:
      return !U(n) || !U(r) || !U(i) || !U(a) ? null : { top: n, right: r, bottom: i, left: a };
    default:
      return null;
  }
}
function Kl(...e) {
  return e.filter(Boolean).join(` `);
}
function ql(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Jl(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Jl(e) {
  if (e.startsWith(uT)) return e.substr(dT);
}
function Yl(e, t, n) {
  let r = d.map(e, (e) => (w(e) ? p(e, t) : e));
  return n ? r : M(O, { children: r });
}
function Xl(e) {
  let t = uo(() => Zl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Zl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Ql(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Ql(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      d.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      d.map(i, (e) => {
        if (w(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = ot(a) ? a(e.props) : a;
          return p(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return M(O, { children: i(e, t) });
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
function Ql(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (dc(n, e), dc(t, e));
  };
}
function $l(e, t, n, i, a, o, s, c) {
  let l = r.Children.toArray(t),
    u = l[0];
  if (l.length !== 1 || !r.isValidElement(u))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      s(t, n)
    );
  let d = [],
    f = [];
  for (let [t] of Object.entries(i)) {
    if (t === a) continue;
    let n = e[t];
    if (!n || !ru(u.props, n)) {
      f.push(t);
      continue;
    }
    let r = nu([t], o);
    r.length && d.push({ variants: r, propOverrides: n });
  }
  if (d.length === 0) return s(u, n);
  let p = nu([a, ...f], o);
  p.length && d.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of d) {
    if (c && !e.includes(c)) continue;
    let r = c ? `active-branch` : e.join(`+`),
      l = M(
        pT.Provider,
        {
          value: { primaryVariantId: a, variants: new Set(e) },
          children: s(u, t ? { ...n, ...t } : n),
        },
        r
      ),
      f = tu(e, o, i);
    (f.length
      ? (V(d.length > 1, `Must branch out when there are hiddenClassNames`),
        (l = M(
          `div`,
          { className: `${mT} ${f.join(` `)}`, suppressHydrationWarning: !0, children: l },
          r
        )))
      : V(d.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(l));
  }
  return (
    V(!c || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    c ? m : [...m, M(`div`, { className: hT }, `property-overrides-separator`)]
  );
}
function eu(e) {
  return e.split(`-`)[2];
}
function tu(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${eu(a)}`);
  }
  return r;
}
function nu(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ru(e, t) {
  for (let n of Object.keys(t)) if (!Rt(e[n], t[n], !0)) return !0;
  return !1;
}
function iu(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function au(e) {
  return r.forwardRef(({ optimized: t, ...n }, i) => {
    let a = r.useContext(fT),
      o = r.useContext(pT)?.variants,
      s = n[CT];
    s && !Un() && xT.setAll(s, o, t ? n : null, a);
    let c = TT(n);
    return M(e, { ref: i, ...n, ...c });
  });
}
function ou(e) {
  return z(e) || Array.isArray(e);
}
function su(e) {
  return e in OT;
}
function cu(e, t) {
  let n = uo(() => ({ values: DT(t ? e : void 0) }));
  return (
    r.useEffect(() => {
      if (!t)
        for (let e of ET) {
          let t = OT[e];
          dt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function lu(
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
  let s = Ie(),
    l = uo(DT),
    u = m(!1),
    d = MT(),
    p = m(null),
    h = E(async () => {
      if (!i) return;
      let e = n || void 0,
        t = u.current && r === `mirror`,
        a = t ? OT : i,
        o = t ? i : OT;
      return (
        (u.current = !u.current),
        (p.current = Promise.all(
          ET.map((t) => {
            if (!(s && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? OT[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && ge(l[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, s]),
    [g, _] = F(!1),
    v = m(!1),
    y = E(async () => {
      !e || !v.current || (await h(), await d(t ?? 0), y());
    }, [h, d, e, t]),
    b = E(() => {
      v.current || ((v.current = !0), c(() => _(!0)), y());
    }, [y]),
    x = E((e = !0) => {
      (ET.forEach((e) => {
        l[e].stop();
      }),
        ET.forEach((e) => {
          l[e].set(OT[e]);
        }),
        (u.current = !1),
        e && ((v.current = !1), c(() => _(!1))));
    }, []),
    S = e && i,
    C = E(() => {
      document.hidden ? x(!1) : v.current && ((v.current = !1), b());
    }, [b, x]);
  (P(() => {
    if (S)
      return (
        document.addEventListener(`visibilitychange`, C),
        () => {
          document.removeEventListener(`visibilitychange`, C);
        }
      );
  }, [S, C]),
    P(() => {
      (S && a) || (S ? b() : x());
    }, [b, x, a, S]),
    P(() => () => x(), [x]));
  let w = m(!1),
    T = E(async () => {
      p.current && (await p.current, !w.current && x());
    }, [x]);
  mw(
    o,
    E(
      (e) => {
        e.isIntersecting ? ((w.current = !0), b()) : ((w.current = !1), T());
      },
      [b, T]
    ),
    { enabled: S && a }
  );
  let D = g || !a;
  return f(() => ({ values: l, style: S && D ? kT : AT }), [S, D]);
}
function uu(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function du(e, t, n) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = r.useRef(null),
    l = Ie(),
    d = r.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : uu(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: f } = Ge(),
    p = ke(f, d),
    m = I(o && c.current === null ? `hidden` : n),
    h = I(0),
    g = u(pw);
  return (
    gc(
      t,
      (e) => {
        if (e === null || !s) return;
        let t = _c(g, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            L.update(() => {
              (p.set(d(f.get())), o && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Gt(() => {
      s && p.set(0);
    }),
    { values: { y: l || !s ? h : p }, style: s ? { ...kT, visibility: m } : AT }
  );
}
function fu(e) {
  return typeof e == `object` && !!e;
}
function pu(e) {
  if (fu(e)) return e?.transition;
}
function mu(e, t, n, r, i, a) {
  let o = pu(e);
  return Promise.all(
    ET.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = fu(e) ? (e?.[s] ?? OT[s]) : OT[s];
          if ((Le(u) && (u = u.get()), !ct(u))) return c();
          let d = Be.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, L);
            e && (f = e);
          }
          a ? l.set(u) : ge(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function hu(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    p = a ?? n,
    [h, g] = Ue(),
    _ = m({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    v = uo(() => {
      let e = u ?? c;
      if (!B(e)) return { values: DT() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        ct(r) && (t[n] = r);
      }
      return { values: DT(t) };
    });
  gc(
    o,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && d) return;
      let n = Be.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!su(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, ct(t) ? t : OT[e]);
        }
      }
    },
    [d]
  );
  let y = Ie();
  gc(o, (e) => {
    if (!s) {
      g?.();
      return;
    }
    if (e === null) return;
    if (h !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: h }),
        h
          ? u &&
            d &&
            (Object.assign(_.current, { running: !0 }),
            mu(d, v, y, o, l).then(() => Object.assign(_.current, { running: !1 })))
          : p
            ? (Object.assign(_.current, { running: !0 }),
              mu(p, v, y, o, l)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Rt(d, t) ||
      !d ||
      (Object.assign(_.current, { lastAnimate: d }),
      mu(d, v, y, o, l, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = s && d;
  return f(() => ({ values: v.values, style: b ? kT : AT }), [b]);
}
function gu(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function _u(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = gu(o.current, document.documentElement) - FT - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function vu(e, t = 0) {
  return e < t ? `up` : `down`;
}
function yu(e, t, n = {}) {
  let { direction: i, target: a } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n,
    c = Wt();
  r.useEffect(() => {
    if (!i || !s) return;
    let e,
      n = 0,
      r,
      c;
    return ne((s, { y: l }) => {
      if ((!o && c === a) || l.current > l.scrollLength || l.current < 0) return;
      let u = vu(l.current, e);
      e = l.current;
      let d = u !== r;
      if (((r = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < IT) return;
        let e = u === i ? a : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [c, i, o, a, s, t]);
}
function bu(e, t, n) {
  let r = _u(e, t),
    i = [...RT],
    a = r[0];
  if (!ct(a)) return zT;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!ct(e)) return zT;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function xu(e) {
  return {
    x: e?.x ?? OT.x,
    y: e?.y ?? OT.y,
    scale: e?.scale ?? OT.scale,
    opacity: e?.opacity ?? OT.opacity,
    transformPerspective: e?.transformPerspective ?? OT.transformPerspective,
    rotate: e?.rotate ?? OT.rotate,
    rotateX: e?.rotateX ?? OT.rotateX,
    rotateY: e?.rotateY ?? OT.rotateY,
    skewX: e?.skewX ?? OT.skewX,
    skewY: e?.skewY ?? OT.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Su({ opacity: e, targetOpacity: t, perspective: n, enter: i, exit: a, animate: o, ...s }) {
  return r.useMemo(
    () => ({
      initial: i ?? xu({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? xu({ opacity: t }),
      exit: a ?? xu(),
    }),
    [o, s, i, a, e, t, n]
  );
}
function Cu(e, t) {
  let n = Ie(),
    i = Su(e),
    a = e.styleAppearEffectEnabled,
    o = cu(a ? i.initial : i.animate, a),
    s = r.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Wt(),
    l = r.useRef(),
    u = r.useCallback(async ({ transition: r, ...a }, s) => {
      let c = r ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = Be.get(t.current);
      l.current = Promise.all(
        ET.map((e) => {
          s && o.values[e].set(i.initial[e] ?? OT[e]);
          let t = a[e] ?? OT[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (ct(t) && o.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && ge(o.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  yc(
    t,
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
  let p = e.targets && a && !e.scrollDirection;
  return (
    r.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return ne((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = bu(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = ve(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = gS(i)[l];
        d && u(d);
      });
    }, [c, p]),
    yu(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Gt(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of ET) o.values[e].set(i.initial?.[e] ?? OT[e]);
    }),
    f(() => ({ values: o.values, style: a ? kT : AT }), [a])
  );
}
function wu(e, t) {
  let n = r.useRef({});
  r.useEffect(() => {
    if (t !== void 0)
      for (let r of _y(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = re({
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
        a.attach((e, t) => ((s = e), (o = t), L.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Tu(e, t) {
  let n = HT();
  return {
    inputRange: _u(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of ET) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Eu(e) {
  let t = HT();
  for (let { target: n } of e) for (let e of ET) t[e]?.push(n[e]);
  return t;
}
function Du(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = Ie(),
    c = cu(VT(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Wt();
  return (
    D(() => {
      if (!(l || !u))
        return ne((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Tu(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of ET)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(ve(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    gc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = Eu(n);
        return ne(
          (e, { y: t }) => {
            for (let e of ET)
              (s && e !== `opacity`) ||
                (UT.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(ve(t.progress, UT, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    wu(c.values, i),
    Gt(() => {
      if (l) return;
      let e = VT(n, s);
      for (let t of ET) c.values[t].set(e?.[t] ?? OT[t]);
    }),
    r.useMemo(() => ({ values: c.values, style: t ? kT : AT }), [t])
  );
}
function Ou(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function ku(e) {
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
    let r = Jl(n);
    if (r) {
      for (let i of GT)
        if (WT[i]?.has(r)) {
          t[i][r] = gS(e)[n];
          break;
        }
    } else t.forwardedProps[n] = gS(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Ou(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Ou(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Au(e) {
  return B(e) && JT in e;
}
function ju(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Le(r) || !su(n) || (ct(r.get()) && t[n].push(r));
  }
}
function Mu(e) {
  return z(e) || Array.isArray(e);
}
function Nu({ componentIdentifier: e, children: t }) {
  return t(u(XT)[e] ?? {});
}
function Pu() {
  return r.useContext(ZT);
}
function Fu(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Iu() {
  if (s === void 0 || rE)
    return M(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw aE;
}
function Lu({ children: e }) {
  return u(sE) ? M(O, { children: e }) : M(C, { fallback: oE, children: e });
}
function Ru() {
  return M(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function zu(e, t) {
  if (!iy || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  xn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Bu(...e) {
  console.error(...e);
}
function Vu() {
  return Y.current() !== Y.canvas;
}
function Hu({ getErrorMessage: e, fallback: t, children: n }) {
  return Vu()
    ? M(Uu, { fallback: t, children: M(lE, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Uu({ children: e, fallback: t = cE }) {
  return s === void 0 ? M(C, { fallback: t, children: e }) : M(Lu, { children: e });
}
function Wu() {
  return r.useContext(dE);
}
function Gu() {
  let e = Wu();
  return r.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Ku({ children: e, scopeId: t, nodeId: n }) {
  let i = Wu(),
    a = r.useMemo(
      () => ({ level: (i?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: i }),
      [t, n, i]
    );
  return M(dE.Provider, { value: a, children: e });
}
function qu(e, t) {
  return `${fE}${e}:${t}`;
}
function Ju(e, t) {
  return Xu(`component`, e, t);
}
function Yu(e, t) {
  return Xu(`override`, e, t);
}
function Xu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${qu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Zu(e, t, n, r, i, a) {
  let o = $u(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Qu(e, t, n, r) {
  return $u(e, t, n, r);
}
function $u(e, t, n, r) {
  return !!(dt(n) || (n === 1 && r && e === t));
}
function ed(e, t, n, r, i, a) {
  let o = Wu();
  if (dt(t) || dt(n)) return M(uE, { children: e });
  let { disableCustomCode: s } = tE();
  return s && r
    ? M(`div`, {
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
    : (Zu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = M(Hu, { getErrorMessage: Ju.bind(null, t, n), fallback: null, children: e })),
      i && (e = M(Ku, { scopeId: t, nodeId: n, children: e })),
      e);
}
function td() {
  if (hE !== void 0 || s === void 0) return;
  let e = K.matchMedia(`(any-hover: hover)`);
  ((hE = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== hE) {
        hE = t;
        for (let e of gE) e();
      }
    }));
}
function nd() {
  return (td(), rd());
}
function rd() {
  return hE ?? !1;
}
function id(e) {
  return (
    gE.add(e),
    td(),
    () => {
      gE.delete(e);
    }
  );
}
function ad(e = !1) {
  let [t, n] = F(e);
  return (
    qb(function () {
      function e(e = !0) {
        let t = rd();
        e ? c(() => n(t)) : n(t);
      }
      let t = id(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function od(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function sd(e) {
  return !(!e || e.placement || e.alignment);
}
function cd(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function ld(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${cd(t)}, -100%`;
    case `right`:
      return `0%, ${cd(t)}`;
    case `bottom`:
      return `${cd(t)}, 0%`;
    case `left`:
      return `-100%, ${cd(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function ud(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(CE)) {
      let e = n.getAttribute(CE);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function dd(e) {
  let { registerCursors: t } = u(_E),
    n = uo(() => e),
    r = a();
  D(() => t(n, r), [t, r]);
}
function fd(e) {
  return !!(e && typeof e == `object` && TE in e);
}
function pd(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function md() {
  return Y.current() === Y.canvas;
}
function hd(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function gd(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function _d(e, t, n, r) {
  if (z(e)) {
    let i = hd(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = $i(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function vd(e) {
  return z(e) && e.startsWith(`data:${ME}`);
}
function yd(e) {
  if (vd(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(ME.length),
        r = t.searchParams,
        i = r.has(OE) ? r.get(OE) : void 0,
        a,
        o = r.get(kE),
        s = r.get(AE),
        c = r.get(jE);
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
function bd(e, t, n) {
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
    let n = yd(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function xd(e) {
  if (!vd(e)) return e;
  let t = yd(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Sd(i) };
}
function Sd(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Cd({ children: e }) {
  return M(NE.Provider, { value: void 0, children: e });
}
function wd(e, t, n, r, i, a) {
  let o = u(NE),
    s = Gu(),
    c = f(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: s }), [t, n, s]),
    l = Vt(),
    p = Ut(),
    { locales: m } = fr(),
    h = f(() => {
      let e = fd(r) ? r : xd(r);
      if (e) return _d(e, l, p, m);
    }, [p, r, l, m]),
    g = !!(!md() && o?.nodeId && c.nodeId),
    _ = E(
      (e) => {
        if (i.href) {
          if ((e.preventDefault(), e.stopPropagation(), Xn(e))) {
            Dd(i.href, ``, `_blank`);
            return;
          }
          h ? i.navigate?.() : Dd(i.href, i.rel, i.target);
        }
      },
      [i, h]
    ),
    v = E(
      (e) => {
        i.href && (e.preventDefault(), e.stopPropagation(), Dd(i.href, ``, `_blank`));
      },
      [i]
    ),
    y = E(
      (e) => {
        i.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? i.navigate?.() : Dd(i.href, i.rel, i.target));
      },
      [i, h]
    );
  gc(
    a,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let b = e;
  return (
    g &&
      (d.forEach(e, (e) => {
        Ed(e) &&
          (V(
            Td(o),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          V(
            Td(c),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          DE.collectNestedLink(o, c));
      }),
      (b = d.map(e, (e) => {
        if (!Ed(e)) return e;
        let t = Od(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && Od(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return S(t, { ...i, ref: a }, n);
      }))),
    M(NE.Provider, { value: c, children: b })
  );
}
function Td(e) {
  return !dt(e?.nodeId);
}
function Ed(e) {
  return w(e) && (Od(e.type) !== e.type || Od(e.props.as) !== e.props.as);
}
function Dd(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Od(e) {
  return e === `a` ? `span` : te(e) && oe(e) === `a` ? R.span : e;
}
function kd(e) {
  e &&
    L.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      L.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(PE, r)),
          i && t.forEach((e) => e.style.setProperty(FE, i)));
      });
    });
}
function Ad(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${PE});
    background-color: var(${FE}, highlight);
}`,
  ];
}
function jd({ triggerId: e, children: t }) {
  return (
    r.useLayoutEffect(() => {
      e && kd(e);
    }, [e]),
    t
  );
}
function Md(e) {
  return `${e?.x}-${e?.y}`;
}
function Nd(e) {
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
      H(e);
  }
}
function Pd(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function Fd(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      H(e);
  }
}
function Id(e, t, n, r) {
  switch (Fd(t, e, r)) {
    case `x`:
      return { placement: Nd(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: Nd(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function Ld(e, t, n, r, i, a, o) {
  let s = X.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = Id(c, n, i, a),
    f = X.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: Pd(f.x + l, t.width, a.width, o),
      y: Pd(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function Rd(e, t, n) {
  return LE.containsPoint([t, ...n], e) ? t : e;
}
function zd(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + RE), e.x + e.width - RE),
    constrainY: (t) => Math.min(Math.max(t, e.y + RE), e.y + e.height - RE),
  };
}
function Bd({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = X.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - zE), y: t };
      return [n, Rd(l, s, [n, c]), Rd(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + zE), y: t };
      return [n, Rd(s, l, [n, o]), Rd(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - zE) };
      return [n, Rd(s, o, [n, l]), Rd(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + zE) };
      return [n, Rd(o, s, [n, c]), Rd(c, l, [n, o])];
    }
    default:
      H(n);
  }
}
function Vd(e, t) {
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
      H(e);
  }
}
function Hd(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = X.merge(r, i),
    c = Bd({ x: e, y: t }, n, i, zd(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: Vd(n, X.delta(r, i)),
  };
}
function Ud(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      H(e);
  }
}
function Wd(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: Ud(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: Ud(t) };
    case `bottom`:
      return { originX: Ud(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: Ud(t) };
    default:
      H(e);
  }
}
function Gd(e) {
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
function Kd(e) {
  return (L.read(e, !0), () => nt(e));
}
function qd(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, Hd(t, n, a, r, i)));
  };
}
function Jd(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function Yd(e, t, n, { safeArea: i, onDismiss: a }) {
  let o = uo(() => new Set()),
    s = r.useContext(BE),
    [c, l] = Ue();
  return (
    r.useEffect(() => {
      if (c) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), s.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), s.delete(t.current), l());
      }
    }, [c, l, t, s]),
    r.useEffect(() => {
      if (!i) {
        let e = (e) => {
          e.key === `Escape` && a();
        };
        return (K.addEventListener(`keyup`, e), () => K.removeEventListener(`keyup`, e));
      }
      let r;
      function s() {
        if (!(!r || o.size !== 0)) {
          for (let i of document.elementsFromPoint(r.x, r.y))
            if (i === e.current || i === t.current || i === n.current) return;
          a();
        }
      }
      function c(e) {
        ((r = e), L.read(s));
      }
      return (
        K.addEventListener(`mousemove`, c),
        () => {
          (K.removeEventListener(`mousemove`, c), nt(s));
        }
      );
    }, [a, i, e, n, t]),
    o
  );
}
function Xd({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => Ld(a, o, e, t, n, r, i);
}
function Zd(e, t) {
  return uo(() => {
    let { originX: n, originY: r } = Wd(e, t),
      i = { x: ae(n), y: ae(r) };
    return [
      i,
      (e) => {
        let n = Wd(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function Qd(e, { x: t, y: n }) {
  if (!e || !Lo(e) || !Io(e) || (!B(e.props.style) && !dt(e.props.style))) return null;
  let i = { ...e.props.style, originX: t, originY: n };
  return r.cloneElement(e, { style: i });
}
function $d(e, t) {
  if (t || dt(e)) {
    let e = document.querySelector(`#${HE}`) ?? document.querySelector(`#${VE}`);
    if (e) return e;
  }
  return (z(e) ? document.querySelector(e) : void 0) || document.body;
}
function ef({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: i,
  offsetY: a,
  anchorRef: o,
  className: s,
  children: c,
  portalSelector: l,
  zIndex: d,
  collisionDetection: f = !1,
  collisionDetectionPadding: p,
  onDismiss: m,
  ...h
}) {
  let g = r.useRef(null),
    _ = r.useRef(null),
    v = r.useRef(null),
    [y, b] = Zd(t, e);
  r.useLayoutEffect(() => {
    if (!pc(o) || !v.current || !t || !e) return;
    let r = { x: i ?? 0, y: a ?? 0 },
      s,
      c = !1,
      l = !1,
      u,
      d,
      m,
      h,
      y,
      x = 0,
      S = 0,
      C = Gd(o),
      w = C.position,
      T = v.current.getBoundingClientRect(),
      E = Xd({
        placement: t,
        alignment: e,
        offset: r,
        collisionDetectionSize: f ? { width: K.innerWidth, height: K.innerHeight } : void 0,
        collisionDetectionPadding: p,
      }),
      D = () => {
        c || (Jd(g, w, m, x, S), n && y(u, m, d, h), (h = void 0));
      },
      O = () => {
        ((y = qd(_)), h ? D() : Jd(g, w, m, x, S), (l = !0));
      },
      k = () => {
        c || b(d);
      },
      A = () => {
        if (!E || c) return;
        (w === `fixed` ? ((x = 0), (S = 0)) : ((x = K.scrollX), (S = K.scrollY)),
          (u = o.current.getBoundingClientRect()));
        let e = E(u, T);
        ((d = e[0]), (m = e[1]));
      };
    if ((A(), k(), O(), C.scrolls && (s = Kd(A)), !n))
      return () => {
        (s?.(), (c = !0));
      };
    let j = (e) => {
        ((h = e), l && (L.read(A, !1, !0), L.update(k, !1, !0), L.render(D, !1, !0)));
      },
      M = o.current;
    return (
      M.addEventListener(`mousemove`, j),
      () => {
        (M.removeEventListener(`mousemove`, j), s?.(), (c = !0));
      }
    );
  }, [n, t, e, i, a, o, f, p, b]);
  let x = Yd(o, g, _, { safeArea: n, onDismiss: m }),
    S = u(LC);
  return T.createPortal(
    ee(R.div, {
      ref: g,
      className: s,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: d,
      },
      ...h,
      children: [
        n
          ? M(`div`, { ref: _, style: { position: `absolute` }, "data-safearea": !0 })
          : M(`div`, { style: { position: `fixed`, inset: 0 }, "aria-hidden": !0, onClick: m }),
        M(BE.Provider, {
          value: x,
          children: M(Cd, {
            children: M(IE, {
              triggerId: o.current?.id ?? void 0,
              children: M(`div`, { ref: v, children: Qd(c, y) }),
            }),
          }),
        }),
      ],
    }),
    $d(l, S)
  );
}
function tf({ component: e, props: t }) {
  let n = u(fT),
    r = S(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return M(_T, { overrides: o, breakpoint: i, children: r });
}
function nf(e) {
  GE = e;
}
function rf() {
  return GE;
}
function af(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : af(e.parentElement, t)
      : null;
}
function of({ children: e }) {
  return M(Lu, { children: e });
}
function sf(e) {
  return k(function (t, n) {
    return M(of, { children: M(e, { ...t, ref: n }) });
  });
}
function cf(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return uf(e, t, o, s, a, c, l, i, r);
}
function lf(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && hd(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = $i(e.routes, o, s, r),
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
function uf(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = Ni(d, {
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
function df() {
  let e = u(qE),
    t = Ut()?.pathVariables;
  return e || t;
}
function ff(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(KE)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function pf() {
  return !!sa(`ss-only-routes`);
}
function mf(e) {
  if (s === void 0) return;
  let t = s.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function hf(e) {
  return oa(`rewrite`, e)?.description === `external`;
}
function gf() {
  if (!tE().checkServerSideRouter) return !1;
  if (ZE === void 0) {
    let e = pf();
    ((QE = !e && Vn() && Wn() < 16.4), (ZE = e || QE));
  }
  return ZE;
}
function _f(e, t) {
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
    ? { decision: hf(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === rf() ? `client` : `server` };
}
async function vf(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (QE &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((QE = !1), oa(`ss-only-routes`, t.headers.get(`server-timing`)) || (ZE = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return _f(t, e);
}
function yf(e, t) {
  JE.has(e) && JE.set(e, t);
}
async function bf(e) {
  await Nn(YE);
  try {
    yf(e, await vf(e));
  } catch {
    JE.delete(e);
  }
}
async function xf(e) {
  try {
    let t = await vf(e);
    return (yf(e, t), t);
  } catch {
    return (bf(e), { decision: `server` });
  }
}
function Sf(e) {
  if (!gf()) return;
  let t = mf(e);
  if (!t || t.origin !== s.location.origin) return;
  let n = t.href;
  JE.has(n) || JE.set(n, xf(n));
}
function Cf(e) {
  let t = mf(e);
  if (!t) return;
  let n = JE.get(t.href);
  return n && !_t(n) ? n : void 0;
}
async function wf(e) {
  let t = mf(e);
  if (!t) return;
  let n = JE.get(t.href);
  if (n) return _t(n) ? Promise.race([n, Nn(XE).then(() => void 0)]) : n;
}
function Tf() {
  let e = g.connection || g.mozConnection || g.webkitConnection || {},
    t = g.deviceMemory && g.deviceMemory > tD,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? nD : rD));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: eD }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Sf(e.navigationUrl);
    let { id: n, preload: i } = e,
      a = oD.get(n);
    if (!a?.size || aD.has(n)) return;
    (++s, aD.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), iD.delete(t));
    for (let e of a) (o.unobserve(e), iD.delete(e));
    (a.clear(), oD.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = iD.get(e);
      if (!n || aD.has(n.id)) {
        (o.unobserve(e), iD.delete(e));
        continue;
      }
      let r = n.id,
        a = oD.get(r),
        l = oD.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : oD.set(r, new Set([e])), setTimeout(c, $E, n, e));
      } else (a && a.delete(e), l <= 1 && oD.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!aD.has(n))
      return (
        iD.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (iD.delete(e), o.unobserve(e));
        }
      );
  };
}
function Ef(e, t) {
  let n = hd(e),
    r = {
      href: e === `` || gd(e, n) ? e : `https://${e}`,
      target: Df(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = ir(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Df(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Of(e, t) {
  console.warn(
    bt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function kf(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Of(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return _t(i) ? i.catch(Of) : i;
  } catch (e) {
    Of(e);
  }
}
async function Af(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      V(a, `unresolvedSlug should be defined`);
      let o = kf(a, r, n),
        s = _t(o) ? await o : o;
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
function jf(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = kf(o, r, n);
      _t(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Mf() {
  let e = Mn();
  return E((t, n, r, i = []) => jf(t, n, r, e, i), [e]);
}
function Nf({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = Mn();
  return E(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = fd(r) ? r : xd(r);
      if (!fd(c))
        return xn(
          `published_site_click`,
          {
            ...s,
            href: o ? Pf(o) : null,
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
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (_t(n) ? await n : n) ?? null;
        }
      }
      return xn(
        `published_site_click`,
        {
          ...s,
          href: o ? Pf(o) : null,
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
function Pf(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Ff(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function If(e, t, n) {
  return async (r) => {
    let i = Xn(r),
      a = af(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await xb({
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
function Lf(e, t, n) {
  return async (r) => {
    let i = await Rf(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    zf(t ?? e, r, i.redirectUrl);
  };
}
async function Rf(e) {
  return !e || !gf()
    ? { decision: `client` }
    : Cf(e) || (Sf(e), (await wf(e)) ?? { decision: `server` });
}
async function zf(e, t, n) {
  (await xb({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    s.location.assign(Bf(e, n)));
}
function Bf(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, s.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function Vf(e) {
  let t = Ai(e);
  if (t && s.location.pathname === t) {
    let e = new URL(s.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return s.location.href;
}
function Hf(e, t, n) {
  if (t || s === void 0) return;
  let r = Vf(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && !(i.pathname === a.pathname && i.search === a.search)) return i.href;
}
function Uf(e, t, n, r, i, a, o, s) {
  if (!n) return Ef(e, r);
  let c = lf(t, e, s, o);
  if (!c) return Ef(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Ef(e, r);
  let m = Ni(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !ay,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Df(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = Hf(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = Lf(m, _, (e) =>
      Ff(
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
    onClick: If(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && ff(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function Wf(e, t, n) {
  let r = Gf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (ot(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (ot(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Gf(e, t) {
  let n = B(e) ? e : void 0,
    r = n && !ut(n),
    i = t && !ut(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Kf(e, t, n) {
  if (!(t && Ln())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: qf } : { ...i, onTap: r }) : e;
}
function qf(e) {
  let t = af(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Jf(e, t, n, r, i, a) {
  let o = fd(e) ? e : xd(e);
  if (!fd(o)) return z(e) ? Ef(e).href : void 0;
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
  if (_t(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return Ni(m, {
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
function Yf() {
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
async function Xf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, Yf(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: lD, difficulty: uD, tokenLength: dD, maxTime: fD }));
  });
}
function Zf(e) {
  let t = new Set();
  for (let n of e.elements)
    !Qf(n) || n.disabled || !n.name || n.name.startsWith(pD) || t.add(n.name);
  return Array.from(t);
}
function Qf(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function $f(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function ep(e, t) {
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
function tp() {
  let e = r.useContext(ED),
    t = r.useMemo(
      () =>
        hD.map((e) => ({
          inputRef: r.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: r.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${pD}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: r.useCallback(
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
                [_D.name]: e.originalName,
                [_D.value]: o,
                [_D.setAttribute]: e.methodsUsed.setAttribute,
                [_D.valueProperty]: e.methodsUsed.valueProperty,
                [_D.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [_D.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [_D.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${pD}_${vD.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${pD}_${vD.fieldCount}`, r.toString()),
          n.append(`${pD}_${vD.fieldFilledCount}`, i.toString()),
          n.append(`${pD}_${vD.hpVersion}`, mD),
          n.append(`${pD}_${vD.siteId}`, e || ``),
          n.append(`${pD}_${vD.timeToSubmissionSinceModuleLoad}`, yD()));
      },
      [t, e]
    ),
  };
}
function np({ states: e }) {
  return M(O, { children: e.map((e) => M(bD, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function rp({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          ip(e, t, n);
        })
      : ip(e.pageviewEventData.current, t, n));
}
function ip(e, t, n) {
  return xn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function ap({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? TD : wD;
    case `incomplete`:
      return e === `error` ? TD : CD;
    case `submit`:
      return xD;
    case `success`:
      return SD;
    case `error`:
      return TD;
    default:
      H(t);
  }
}
function op({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function sp(e) {
  e.preventDefault();
}
function cp(e, t) {
  let n = gd(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function lp(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (lp(t)) return !0;
  return !1;
}
async function up(e, t, n, r) {
  let i = await Xf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": $f(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw dp(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function dp(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    B(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function fp({ EditorBar: e, fast: n = !1 }) {
  let r = u(ED),
    i = t(cy, n ? AD : jD, uy),
    a = tE(),
    o = f(() => {
      let e = {},
        t;
      for (t in a)
        a.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = a[t]);
      return e;
    }, [a]);
  return !e || !r || !i
    ? null
    : M(kD, { children: M(C, { children: M(e, { framerSiteId: r, features: o }) }) });
}
function pp({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = m(),
    i = m(),
    a = m(t),
    o = m(null);
  ((a.current = t),
    P(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = F(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? hp(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? hp(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && mp(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return M(MD.Provider, { value: s, children: n });
}
async function mp(e, t) {
  if (!Sn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    xn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function hp(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? yr(r.path, n) : r.path) : ``;
}
function gp(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function _p() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((ND = e.timeZone), (PD = e.locale));
}
function vp({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  ni(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Kr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function yp(e, t, n) {
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
    f = Kr();
  ni(
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
function bp(e, t, n, r) {
  let i = Kr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    ni(
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
      Ni(t, n)
    ));
}
function xp() {
  return Wn() >= 17 ? RD : LD;
}
function Sp(e = Op) {
  let t = (e) => {
    e.persisted && jp();
  };
  Vn() && (s.addEventListener(`pageshow`, t), (ID = Date.now() - xp()));
  let n = Cp(),
    r = kp(e);
  return function () {
    (s.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Cp() {
  let e = s.history.scrollRestoration;
  return (
    (s.history.scrollRestoration = `manual`),
    function () {
      s.history.scrollRestoration = e;
    }
  );
}
function wp(e) {
  return B(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Tp() {
  return { x: s.scrollX, y: s.scrollY };
}
function Ep() {
  let e = Kr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (wp(t)) return t;
}
function Dp(e) {
  let t = Kr();
  t && ($r({ ...t, scrollPosition: e }), Vn() && (ID = Date.now()));
}
function Op(e, t = !1) {
  let n = Ep();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Vn() && !t) {
      let e = xp();
      if (Date.now() - ID < e) return;
    }
    Dp(e);
  }
}
function kp(e) {
  let t = () => {
      e(Tp());
    },
    n = () => {
      e(Tp(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), s.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), s.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in s)) {
    let e = Ap(t);
    return function () {
      (i(), e());
    };
  }
  return (
    s.addEventListener(`scrollend`, t),
    function () {
      (i(), s.removeEventListener(`scrollend`, t));
    }
  );
}
function Ap(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || qr(Kr()) !== t) && e());
    },
    a = () => {
      let e = qr(Kr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Vn() ? xp() : 100;
      t = s.setTimeout(i, a);
    };
  return (
    s.addEventListener(`scroll`, a),
    function () {
      (s.removeEventListener(`scroll`, a), r());
    }
  );
}
function jp() {
  let e = Ep();
  return e ? (s.scrollTo(e.x, e.y), !0) : !1;
}
function Mp(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Np(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Mp(n, t), !0);
}
function Pp(e, t, n) {
  n !== `preserve-scroll-position` &&
    L.render(
      () => {
        (n === `restore-scroll-position` && jp()) || Np(e, t) || s.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Fp(e, t) {
  L.read(() => {
    s.scrollY !== 0 ||
      s.scrollX !== 0 ||
      L.render(
        () => {
          jp() || Np(e, t);
        },
        !1,
        !0
      );
  });
}
function Ip(e) {
  let t = tE().scrollRestoration,
    n = m(void 0),
    r = m(!1),
    i = !!(t && !e),
    a = E(
      (e) => {
        ((n.current = e), i && (r.current = !0));
      },
      [i]
    ),
    o = E((e, t = !1) => {
      r.current || Op(e, t);
    }, []),
    s = E(() => {
      i && (r.current = !0);
    }, [i]),
    c = E(() => n.current !== void 0 || r.current, []),
    l = E((e, t) => {
      let i = n.current;
      !i ||
        i.routeId !== e ||
        i.remountKey !== t ||
        ((n.current = void 0), (r.current = !1), Pp(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    D(() => {
      if (i) return Sp(o);
    }, [i, o]),
    {
      usesCustomScrollRestoration: i,
      isNavigationCommitPending: c,
      onHistoryTraversal: s,
      scheduleScroll: a,
      commitNavigationScroll: l,
    }
  );
}
function Lp({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    D(() => {
      r(e, t);
    }),
    P(() => {
      i && Fp(s.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Rp() {
  let [e, t] = r.useState(0);
  return [e, r.useCallback(() => t((e) => e + 1), [])];
}
function zp({ children: e, loadSnippetsModule: t }) {
  return M(YD.Provider, { value: t, children: e });
}
function Bp() {
  return r.useContext(YD);
}
function Vp(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Hp(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (V(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (V(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      H(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Up(a.createContextualFragment(e), r, i));
}
async function Up(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Wp(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Up(r, e, null)));
  }
}
function Wp(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Gp(r, t, n);
}
function Gp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Kp(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = GD), (n = KD));
      break;
    case `bodyEnd`:
      ((t = qD), (n = JD));
      break;
    case `headStart`:
      ((t = VD), (n = HD));
      break;
    case `headEnd`:
      ((t = UD), (n = WD));
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
function qp(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Vp(e),
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
async function Jp(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Kp(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = qp(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Yp(t, o), s)) {
      await Hp(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Vp(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Zp(e.id, n, r, i);
    d ? await Hp(u, d, `afterend`) : await Hp(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Yp(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Xp(n) && n.remove(), (n = e));
  }
}
function Xp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Zp(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = qp(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Qp() {
  let e = Bp();
  return E(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(zD)?.dataset[BD] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Jp(t, n, r);
      }
    },
    [e]
  );
}
function $p(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function em({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: c,
}) {
  if (!e || !t || !n || !r) return;
  let l,
    u = [],
    d = o.find((e) => e.id === Sy),
    { path: f } = await cr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
  f && (l = $p(f, e));
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await cr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let s = $p(o, e);
    (u.push({ href: s, hrefLang: n.code }), n.id === Sy && (p = s));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (Vr(l, s.location.href), Hr(u));
    }
  );
}
function tm({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = Mn(),
    l = Qp();
  P(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && zu(e);
        }),
        d)
      : ((e.id === t.id
          ? Qn()
          : cr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Sy),
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
            let p = await em({
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
            u && zu(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function nm(e) {
  if (!e) return ry;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function rm(e) {
  let t = li(e),
    n = m(void 0),
    r = E(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: E(
      async (e, i, a, o = !0) => {
        r();
        let c = o ? new AbortController() : void 0;
        n.current = c;
        let l = c?.signal,
          u = Jt(l);
        if ((i.promise.finally(u), a === void 0)) return (e(l), i.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(ry);
        if ((t(f, c, a), e(l), await i.promise, l?.aborted)) return;
        let p = s.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || Vb();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function im({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: u,
  initialCollectionItemId: d,
  initialContentLocaleIdOverride: p,
  locales: h = xy,
  initialCanonicalPathVariables: g,
  preserveQueryParams: _ = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (Gi(),
    ri({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: u,
      initialContentLocaleId: p,
      initialCanonicalPathVariables: g,
    }));
  let S = zr(),
    [C, w] = Rp(),
    T = Wr(`framer-route-change`),
    O = f(() => (!tE().synchronousNavigationOnDesktop || !Yn() ? c : (e) => e()), []),
    k = m(!0),
    A = m(),
    j = m(0),
    N = m(r),
    F = m(n),
    I = m(),
    te = m(u),
    ne = Ip(t),
    { isNavigationCommitPending: re, usesCustomScrollRestoration: ie } = ne,
    { startNavigation: L, cancelPendingNavigation: ae } = rm(ie),
    oe = Mn(),
    se = ne.scheduleScroll,
    ce = te.current,
    le = N.current,
    ue = F.current,
    de = o[le],
    fe = de?.path;
  if (!de) throw Error(`Router cannot find route for ${le}`);
  let pe = f(() => h.find(({ id: e }) => e === Sy), [h]),
    R = f(() => h.find(({ id: e }) => (ce ? e === ce : e === Sy)) ?? null, [ce, h]),
    {
      contentLocale: me,
      currentCanonicalPathVariables: he,
      pageExistsInCurrentLocale: ge,
      setRouteContentState: _e,
    } = om({
      activeLocale: R,
      currentRoute: de,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: p,
      locales: h,
      routes: o,
    }),
    ve = R?.textDirection ?? `ltr`,
    ye = x ? ve : `ltr`;
  D(() => {
    x && document.documentElement.setAttribute(`dir`, ve);
  }, [ve, x]);
  let be = oi(),
    xe = f(
      () => ({
        activeLocale: R,
        contentLocale: me,
        locales: h,
        setLocale: async (e) => {
          let n = ++j.current,
            r = T({ localized: !0 });
          if ((await xb({ priority: `user-blocking`, continueAfter: `paint` }), n !== j.current)) {
            r.ignore?.();
            return;
          }
          let i;
          z(e) ? (i = e) : B(e) && (i = e.id);
          let a = h.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let s = N.current,
            c = o[s];
          if (!c) {
            r.ignore?.();
            return;
          }
          let l = Ai(b);
          try {
            let e = await be({
              currentLocale: R,
              nextLocale: a,
              route: c,
              routeId: s,
              defaultLocale: pe,
              pathVariables: F.current,
              preserveQueryParams: _,
              sitePrefix: l,
            });
            if (!e || n !== j.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && l + e.path,
              { contentLocaleId: o, canonicalPathVariables: u } = await dr({
                activeLocale: a,
                defaultLocale: pe,
                collectionUtilsCache: oe,
                locales: h,
                pathVariables: e.pathVariables,
                route: c,
                routeId: s,
              });
            if (n !== j.current) {
              r.ignore?.();
              return;
            }
            ((k.current = !1),
              (te.current = a.id),
              (A.current = i),
              (F.current = e.pathVariables),
              _e(o, u));
            let d = c.path && e.pathVariables ? yr(c.path, e.pathVariables) : c.path;
            (se({
              routeId: s,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              L(
                () => {
                  S(s, s, () => O(w));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        vp({
                          routeId: s,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: o,
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
      [R, pe, me, t, w, h, _, _e, o, se, L, S, T, O, be, oe, b]
    ),
    Se = E(
      (e, t, n, r, i, a, s, c, l, u, d) => {
        k.current = !1;
        let f = N.current,
          p = o[e],
          m = qt(p, n),
          h = p?.path && i ? yr(p.path, i) : p?.path;
        if (
          ((N.current = e),
          (te.current = t),
          (F.current = i),
          (I.current = void 0),
          _e(a, s),
          (A.current = r),
          se({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: c
              ? ie
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          c)
        ) {
          (ae(), O(w));
          return;
        }
        L(
          (t) => {
            S(f, e, () => O(w), t);
          },
          l,
          d,
          !0
        );
      },
      [w, _e, o, ie, se, L, S, O, ae]
    );
  (ii(ne, N, Se),
    P(() => {
      if (t) return;
      let e = () => {
        let e = Kr(),
          t = s.location.hash === `` ? void 0 : s.location.hash.slice(1);
        (e && qt(o[e.routeId], e.hash) === t) ||
          ei({
            ...(e ||
              (Yr() ?? { routeId: N.current, pathVariables: F.current, localeId: te.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (s.addEventListener(`hashchange`, e), () => s.removeEventListener(`hashchange`, e));
    }, [t, o]));
  let Ce = E(
      async (e, n, r, i, a) => {
        let s = o[e],
          c = wt(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = T({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = nm(a);
        if (
          (xb({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await xb({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll(Cb)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = qt(s, n),
          p = F.current,
          m = te.current;
        if (
          I.current === void 0 &&
          gp({ routeId: N.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = re();
          if (a) {
            let t = s?.path && r ? yr(s.path, r) : s?.path;
            se({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ae();
          (u.ignore?.(), !a && ie && Pp(f, i, `scroll-to-hash-or-top`));
          let c = o[e];
          (!t &&
            c &&
            bp(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: _,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !ie && Pp(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!s) return;
        let g = o[N.current],
          v =
            Ai(b) +
            Ni(s, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: _,
              relative: !1,
              siteCanonicalURL: b,
            }),
          y = {};
        I.current = y;
        let { contentLocaleId: x, canonicalPathVariables: S } = await dr({
          activeLocale: R,
          defaultLocale: pe,
          collectionUtilsCache: oe,
          locales: h,
          pathVariables: r,
          route: s,
          routeId: e,
        });
        I.current === y &&
          Se(
            e,
            m,
            n,
            v,
            r,
            x,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    yp(e, s, {
                      historyPath: v,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: x,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                }
          );
      },
      [ae, o, h, Se, t, _, b, T, ie, re, se, oe, pe, R]
    ),
    we = zt(o),
    Te = A.current,
    Ee = FD(de, le, Te, ue, R, d),
    De = k.current;
  tm({
    activeLocale: R,
    contentLocale: me,
    currentPathVariables: ue,
    currentRoute: de,
    currentRouteId: le,
    isInitialNavigation: De,
    locales: h,
    siteCanonicalURL: b,
  });
  let Oe = f(
      () => ({
        navigate: Ce,
        getRoute: we,
        currentRouteId: le,
        currentPathVariables: ue,
        currentCanonicalPathVariables: he,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: _,
        pageviewEventData: Ee,
        siteCanonicalURL: b,
        isInitialNavigation: De,
      }),
      [Ce, we, le, ue, he, o, a, _, b, Ee, De]
    ),
    ke = fe && ue ? yr(fe, ue) : fe,
    Ae = `${ce}${ke}`,
    je = uo(() => ({ ...e, display: `contents` }));
  return M(Bt, {
    api: Oe,
    children: M(Eb.Provider, {
      value: xe,
      children: M(Db.Provider, {
        value: ye,
        children: M(xE, {
          children: M(bi, {
            routerRenderKey: C,
            isNavigationCommitPending: ne.isNavigationCommitPending,
            children: ee(pp, {
              currentRoutePath: ke,
              routerAPI: Oe,
              children: [
                y && M(fp, { EditorBar: y, fast: !0 }),
                M(iE, {
                  children: ee(Lu, {
                    children: [
                      M(Mx.Start, {}),
                      M(Lp, { currentRouteId: le, remountKey: Ae, scrollRestoration: ne }),
                      M(Px, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        routerRenderKey: C,
                        children: M(am, {
                          LayoutTemplate: v,
                          webPageId: de?.abTestingVariantId ?? le,
                          style: e,
                          children: (t) =>
                            M(l, { children: ge ? Xi(de.page, t ? je : e) : i && Xi(i, e) }, Ae),
                        }),
                      }),
                      y && M(fp, { EditorBar: y }),
                      M(Vi, {}),
                      M(Mx.End, {}),
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
function am({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? M(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function om({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = m(n),
    s = m(r),
    c = s.current,
    l = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    u = f(() => {
      if (!e) return null;
      let n;
      return (
        (n = l
          ? (c ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && ix.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, c, l, a]),
    d = E((e, t) => {
      ((s.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: u,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: l,
    setRouteContentState: d,
  };
}
function sm(e) {
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
function cm(e) {
  return typeof e == `object` && !!e;
}
function lm(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!cm(r)) return;
    r = r[e];
  }
  return r;
}
function um(e) {
  return `${e.credentials}:${e.url}`;
}
function dm(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function fm(e, t) {
  switch (e) {
    case `string`:
      return z(t) || ct(t);
    case `color`:
      return z(t);
    case `boolean`:
      return st(t);
    case `number`:
      return ct(t) || dm(t);
    case `link`:
    case `image`:
      return z(t) && gd(t, !1);
    default:
      return !1;
  }
}
function pm(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = lm(e.data, t.resultKeyPath);
  if (dt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!fm(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function mm(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, ZD);
  return Date.now() >= e + n;
}
function hm({ client: e, children: t }) {
  return M(rO.Provider, { value: e, children: t });
}
function gm(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: i,
    routeId: a,
    framerSiteId: o,
    pathVariables: s,
    canonicalPathVariables: c,
    routes: l,
    collectionUtils: u,
    serverDatabaseClient: d,
    notFoundPage: f,
    isReducedMotion: p = !1,
    skipAnimations: m = !1,
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
    r.useEffect(() => {
      n || sS.start();
    }, []),
    n
      ? M(fi, {
          value: i ?? `preview`,
          children: M(Te, {
            reducedMotion: m ? `always` : p ? `user` : `never`,
            skipAnimations: m,
            children: M(jn, {
              collectionUtils: u,
              children: M(hm, {
                client: d,
                children: M(nO, {
                  children: M(ED.Provider, {
                    value: o,
                    children: M(zp, {
                      loadSnippetsModule: T,
                      children: M(im, {
                        initialRoute: a,
                        initialPathVariables: s,
                        initialCanonicalPathVariables: c,
                        initialLocaleId: g,
                        initialCollectionItemId: E,
                        initialContentLocaleIdOverride: D,
                        routes: l,
                        collectionUtils: u,
                        notFoundPage: f,
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
      : M(h ? lT : r.Fragment, {
          children: M(Ht, {
            routes: l,
            children: M(Nw, { children: r.isValidElement(t) ? t : r.createElement(t, { key: a }) }),
          }),
        })
  );
}
function _m(e, t) {
  let n = Vt(),
    { activeLocale: r } = fr(),
    i = Mf();
  return mi(() => {
    let t = [],
      a = (e) => {
        if (e)
          return z(e) || fd(e)
            ? Jf(e, n, void 0, void 0, r, o)
            : Jf(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function vm(e) {
  return {
    trace(...t) {
      return CS.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return CS.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return CS.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return CS.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return CS.getLogger(e)?.error(...t);
    },
    get enabled() {
      return CS.getLogger(e) !== void 0;
    },
  };
}
function ym() {
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
function bm() {
  return aO.priority;
}
function xm(e) {
  let t = aO;
  return (
    (aO = e),
    {
      [ym()]() {
        aO = t;
      },
    }
  );
}
function Sm(e = aO.priority, t = aO.canYield) {
  if (!(!t || e === void 0)) return xb({ batch: !0, priority: $n(e) });
}
function Cm(e) {
  var t = [];
  try {
    De(t, xm({ priority: aO.priority, canYield: !1 }));
    let n = e.next();
    return (V(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Me(t, n, r);
  }
}
async function wm(e, t, n = aO.priority, r = aO.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (De(o, xm(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Me(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Sm(n, r);
      (o && (await o), De(l, xm(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Me(l, u, d);
    }
  }
  return a.value;
}
function Tm(e, t = aO.priority, n = aO.canYield) {
  var r = [];
  try {
    De(r, xm({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : wm(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Me(r, i, a);
  }
}
function* Em(e, t = aO.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (ht(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            wm(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Dm(e, t = aO.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Sm(t);
    r && (yield r);
    let o = e[a];
    if (ht(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            wm(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Om(e) {
  return jm(e) || Pm(e);
}
function km(e) {
  return lt(e) && e.every(B);
}
function Am(e) {
  return B(e) && ot(e.read) && ot(e.preload);
}
function jm(e) {
  return km(e) || Am(e);
}
function Mm(e) {
  return B(e) && B(e.schema);
}
function Nm(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function Pm(e) {
  return Mm(e) || Nm(e);
}
function Fm(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = uh(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Im(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => oO.cast(e, t.definition)) };
  }
  return null;
}
function Lm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Rm(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function zm(e) {
  return Rm(e)?.value ?? !1;
}
function Bm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Vm(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Hm(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Um(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return mt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Wm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Gm(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Km(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qm(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Jm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ym(e) {
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
function Xm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Zm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Qm(e) {
  return Zm(e)?.value ?? null;
}
function $m(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = uh(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function eh(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = oO.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function th(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function nh(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function rh(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function ih(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function ah(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function oh(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function sh(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function ch(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function lh(e) {
  return ch(e)?.value ?? null;
}
function uh(e, t, n) {
  if (ft(e) || ft(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), Fm(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), Lm(e, t));
    case `color`:
      return (V(e.type === t.type), Bm(e, t));
    case `date`:
      return (V(e.type === t.type), Hm(e, t));
    case `enum`:
      return (V(e.type === t.type), Wm(e, t));
    case `file`:
      return (V(e.type === t.type), Km(e, t));
    case `link`:
      return (V(e.type === t.type), Jm(e, t));
    case `number`:
      return (V(e.type === t.type), Xm(e, t));
    case `object`:
      return (V(e.type === t.type), $m(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), th(e, t));
    case `richtext`:
      return (V(e.type === t.type), rh(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), ah(e, t));
    case `string`:
      return (V(e.type === t.type), sh(e, t, n));
    default:
      H(e);
  }
}
async function dh(e, t) {
  return Am(e) ? (await e.preload(t), e.read(t)) : e;
}
function fh(e) {
  return e.includes(dO);
}
function ph(e) {
  if (!Pm(e) || !e.id) return;
  let t = lO.get(e.id);
  if (!t) return (lO.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function mh(e) {
  let t = ph(e);
  if (t) return t;
  let n = uO.get(e);
  if (n) return n;
  let r = `${dO}${Math.random().toString(16).slice(2)}`;
  return (uO.set(e, r), r);
}
function hh(e, t) {
  if (jm(e)) {
    let n = mh(e) + (t?.id ?? Sy),
      r = fO.get(n);
    if (r) return r;
    let i = new cO(e, t);
    return (fO.set(n, i), i);
  }
  if (Mm(e)) return e;
  if (Nm(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function gh(e) {
  return e;
}
function _h(e) {
  return ot(e.getHash);
}
function G(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (B(r) && _h(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return gh(`${n})`);
}
function vh(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function yh(e) {
  if (e !== void 0) return $n(e);
}
function bh(e, t) {
  return { collectionId: mh(e), pointer: t };
}
function xh(e) {
  return B(e) && z(e.collectionId);
}
function Sh(e, t) {
  return { collectionId: mh(e), pointer: t };
}
function Ch(e) {
  return B(e) && z(e.collectionId);
}
function wh(e, t) {
  let n = new Map();
  function r(e) {
    if (B(e))
      if (e.type === `Collection` && Om(e.data)) {
        let r = hh(e.data, t),
          i = mh(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (lt(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Th(e) {
  return e;
}
function Eh(e) {
  return e;
}
function Dh(e) {
  return e;
}
function Oh() {
  return 25;
}
function kh() {
  return 12500;
}
function Ah(e) {
  return Array(e).fill({ type: `All` });
}
function jh(e) {
  return e;
}
function Mh(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new yk(t ? `Assertion Error: ` + t : `Assertion Error`);
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
function Nh(e) {
  let t = new Set();
  if (!e) return t;
  Mh(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Mh(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Ph(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Ph(n, t);
      return;
    case `object`:
      for (let n in e.value) Ph(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Fh(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Ih(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Lh(e) {
  return `${e.functionName}(${e.arguments.map((e) => Hh(e)).join(`, `)})`;
}
function Rh(e) {
  let t = `CASE`;
  e.value && (t += ` ${Hh(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Hh(n.when)} THEN ${Hh(n.then)}`;
  return (e.else && (t += ` ELSE ${Hh(e.else)}`), (t += ` END`), t);
}
function zh(e) {
  let t = Hh(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Bh(e) {
  let t = Hh(e.left),
    n = Hh(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Vh(e) {
  return `CAST(${Hh(e.value)} as ${e.dataType})`;
}
function Hh(e) {
  switch (e.type) {
    case `Identifier`:
      return Fh(e);
    case `LiteralValue`:
      return Ih(e);
    case `FunctionCall`:
      return Lh(e);
    case `Case`:
      return Rh(e);
    case `UnaryOperation`:
      return zh(e);
    case `BinaryOperation`:
      return Bh(e);
    case `TypeCast`:
      return Vh(e);
    case `Select`:
      return `${qh(e)}`;
    default:
      H(e);
  }
}
function Uh(e) {
  return Mm(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Wh(e) {
  let t = `${Gh(e.left)} LEFT JOIN ${Gh(e.right)}`;
  return (e.constraint && (t += ` ON ${Hh(e.constraint)}`), t);
}
function Gh(e) {
  switch (e.type) {
    case `Collection`:
      return Uh(e);
    case `LeftJoin`:
      return Wh(e);
    default:
      H(e);
  }
}
function Kh(e) {
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
function qh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Hh(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Gh(e.from)}`),
    e.where && (t += ` WHERE ${Hh(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Hh(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Hh(e.limit)}`),
    e.offset && (t += ` OFFSET ${Hh(e.offset)}`),
    Kh(t)
  );
}
function Jh(e) {
  return B(e) && e.type === `Collection`;
}
function Yh(e, t) {
  return Jh(t) && Om(t.data) ? mh(t.data) : t;
}
function Xh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Yh) + n;
}
function Zh(e) {
  if (s === void 0) return;
  let t = Kr()?.paginationInfo?.[e]?.currentPage;
  return typeof t == `number` ? t : void 0;
}
function Qh(e, t) {
  return e ? 1 : (Zh(t) ?? 1);
}
function $h(e, t, n, r = !1) {
  return tg(eg(n, r), Math.ceil(e / t));
}
function eg(e, t) {
  let { isInitialNavigation: n = !0 } = Vt(),
    [r, i] = h(),
    a = Zh(e),
    o = m(n ? a : void 0),
    [s, l] = F(() => Qh(n, e)),
    u = m(s);
  P(
    function () {
      if (!n) return;
      let e = o.current;
      if (e === void 0 || e === u.current) {
        o.current = void 0;
        return;
      }
      ((u.current = e), c(() => l(e)));
    },
    [n]
  );
  let d = E(
      (t) => {
        let n = o.current;
        (n !== void 0 && n !== u.current) || ((o.current = void 0), ci(e, t));
      },
      [e]
    ),
    f = md(),
    p = m(!1);
  return {
    currentPage: s,
    isLoading: r,
    loadNextPage: E(
      async (e) => {
        if (!f && !(u.current >= e) && !p.current) {
          p.current = !0;
          try {
            if ((await xb({ priority: `user-blocking`, continueAfter: `paint` }), u.current >= e))
              return;
            let n = Math.min(u.current + 1, e);
            ((u.current = n),
              (t ? i : c)(() => {
                l(n);
              }));
          } finally {
            p.current = !1;
          }
        }
      },
      [t, f]
    ),
    persistToHistory: d,
  };
}
function tg({ currentPage: e, isLoading: t, loadNextPage: n, persistToHistory: r }, i) {
  let a = f(() => ({ currentPage: e, hasNextPage: e < i, totalPages: i, isLoading: t }), [e, i, t]);
  return (
    qb(() => {
      r(a);
    }, [r, a]),
    { paginationInfo: a, loadMore: E(() => n(i), [n, i]) }
  );
}
function ng(e) {
  let { activeLocale: t } = fr();
  return Ik.get(e, t).use();
}
function rg(e) {
  return ng({ ...e, select: [] }).length;
}
function ig(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(dt(e) || B(e)))
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
function ag(e) {
  let t = m(e);
  return (
    o(() => {
      t.current = e;
    }, [e]),
    hi((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function og(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function sg() {
  return new Set();
}
function cg(e) {
  let t = uo(sg),
    n = uo(sg);
  return (
    Tc(() => () => og(n, t)),
    P(() => () => og(n, t), []),
    P(() => {
      og(n, t);
    }, [e]),
    m({
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
function lg(e, t, n) {
  return r.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function ug(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function dg(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function fg(e, t, n = !0) {
  let r = u(Aw),
    i = ho(),
    a = oo(),
    o = Un() && (!i || a),
    s = m(o ? (ug(t) ?? e) : e),
    l = m(n && r ? e : s.current),
    d = Ms(),
    f = Ce(),
    p = E(
      (e) => {
        if (e !== s.current || e !== l.current) {
          let t = function () {
            ((s.current = l.current = e),
              c(() => {
                d();
              }));
          };
          i
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, i]
    );
  return (
    qb(() => {
      if (i) {
        if (a) {
          p(ug(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, a, i, t, p]),
    qb(() => {
      !n || r !== !0 || p(s.current);
    }, []),
    P(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = K.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (pg(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => mg(e, t));
    }, [a, t, p, o]),
    [s.current, l.current]
  );
}
function pg(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function mg(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function hg(e) {
  setTimeout(e, 1);
}
function gg(e) {
  let t = new Set(),
    n = dg(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (_g(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (oy ? K.requestIdleCallback : hg)(() => {
    document.querySelector(Lk)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (_g(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    vg(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function _g(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function vg(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function yg() {
  let e = Ut(),
    { activeLocale: t } = fr(),
    n = f(
      () =>
        Ni(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id]
    );
  return r.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = Rk.get(t);
      if (r) return r;
      let i = _();
      return (Rk.set(t, i), i);
    },
    [n]
  );
}
function bg(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function xg(e, t) {
  if (mo()) return;
  let n = r.useRef(!0),
    i = r.useRef(t);
  (Tc((t, r) => {
    let a = t && !r;
    if (!n.current && a) {
      let t = bg(i.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    r.useEffect(() => {
      if (n.current) {
        let t = bg(i.current, e);
        t && t();
      }
    }, [e]));
}
function Sg(e, t) {
  e !== !1 &&
    L.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function Cg({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, i] = r.useState(!1),
    a = r.useCallback(
      async (t) => {
        (await xb({ priority: `user-blocking`, continueAfter: `paint` }), c(() => i(t)), Sg(e, t));
      },
      [e]
    );
  return (
    r.useEffect(
      () => () => {
        xb({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          Sg(e, !1);
        });
      },
      [e]
    ),
    r.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), a(!1));
      };
      return (K.addEventListener(`keydown`, e), () => K.removeEventListener(`keydown`, e));
    }, [t, a]),
    [n, a]
  );
}
function wg(e) {
  return B(e) && zk in e && e.page !== void 0;
}
function Tg(e, t, n) {
  let { paginationInfo: r, loadMore: i } = $h(rg(e), t, n, !0);
  return {
    paginatedQuery: f(() => {
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
function Eg(e, t) {
  return `${e}-${t}`;
}
function Dg(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function Og(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function kg(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Ag(e, t) {
  return t[e] || `framer-v-${e}`;
}
function jg(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Mg() {
  let e = m(),
    t = m(),
    n = E(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    P(
      () => () => {
        n();
      },
      [n]
    ),
    E(
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
function Ng() {
  let e = m(),
    t = m(!1),
    n = m(),
    r = u(pw);
  return (
    P(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    E(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = _c(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Pg(e) {
  let t = Mg(),
    n = Ng();
  return E(
    (r, i = !1) => {
      if (ay) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Fg() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (Hk = () => {
        (e(), (t = void 0));
      }));
  });
}
function Ig(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (Vk = Fg()));
}
function Lg() {
  (performance.mark(`click-received-listener`), (Vk = void 0), Hk?.(), (Hk = void 0));
}
function Rg(e = !1) {
  P(() => {
    e &&
      (document.addEventListener(`pointerup`, Ig, !0),
      document.__proto__.addEventListener.call(document, `click`, Lg, !0));
  }, [e]);
}
function zg({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let l = Ms(),
    u = md(),
    d = uo(() => new Set(i));
  Rg(tE().yieldOnTap);
  let p = Pg(s),
    h = m({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: jg(e, t, d),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = E((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = jg(e, a, d),
        s = kg(i?.[o], t, n, !1, r);
      return [o, s ? Eg(o, s) : void 0];
    }, []),
    _ = E(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let u = tE().yieldOnTap && h.current.isPressedHasUpdated;
        (u &&
          Vk &&
          (performance.mark(`wait-for-tap-start`),
          await Vk,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          u &&
            (performance.mark(`yield-on-tap-start`),
            await xb({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: m,
          isPressedHasUpdated: _,
        } = h.current;
        if (d || m || f || _) {
          c(l);
          return;
        }
        p(() => c(l), i);
      },
      [g, l, p]
    ),
    v = E(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !u && tE().disableHoverOnMobile && !nd() && (e = !1);
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
      [_, u]
    ),
    y = E(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === Bk ? Dg(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = E(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), p(() => c(l), !0));
    }, [l, p]);
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
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = h.current,
    A = lg(h.current.baseVariant, h.current.gestureVariant, a);
  return f(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !O && !u && !!t && !k[x],
      r = n ? Eg(x, `loading`) : S;
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
        transition: Og(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Kl(Ag(x, o), kg(i, T, D, n, O)),
      }
    );
  }, [x, S, T, D, k, A, y, C, w, v, b, o]);
}
function Bg(e, { scopeId: t, nodeId: n, override: i, inComponentSlot: a }) {
  if (!Vu()) return i(e);
  let o = Vg(e, i),
    s = !1;
  function c(r, i) {
    let c = Wu(),
      { disableCustomCode: l } = tE();
    if (l) return M(e, { ...r, ref: i });
    if (Qu(t, c?.scopeId, c?.level, a ?? !1))
      return o.status === `success`
        ? M(Gb.Provider, {
            value: n,
            children: M(Hu, {
              getErrorMessage: Yu.bind(null, t, n),
              fallback: M(e, { ...r, ref: i }),
              children: M(o.Component, { ...r, ref: i }),
            }),
          })
        : ((s ||= (Bu(o.error), Bu(Yu(t, n)), zu(o.error), !0)), M(e, { ...r, ref: i }));
    if (o.status === `success`)
      return M(Gb.Provider, { value: n, children: M(o.Component, { ...r, ref: i }) });
    throw o.error;
  }
  return r.forwardRef(c);
}
function Vg(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Hg(e) {
  let t = [];
  return (
    d.forEach(e, (e) => {
      w(e) && e.type === l ? t.push(...Hg(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Ug(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Wg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Ug(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[et(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Gg(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Ug(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[et(0, t.length, s)],
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
function Kg() {
  let e = u(Uk);
  return (o_(!!e, `useTicker must be used within a Ticker component`), e);
}
function qg() {
  let e = u(Wk);
  return (o_(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function Jg(e, t) {
  return (t?.offsetWidth ?? s.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Yg(e, t) {
  return e === `y` ? qk : t === `ltr` ? Kk : Jk;
}
function Xg({
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
    { visibleLength: m, direction: h, inset: g } = Kg(),
    { sign: _ } = Yg(n, h),
    v = ke(() => {
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
    y = ke(() => {
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
  return M(Wk.Provider, {
    value: { start: f, end: p, offset: y, projection: v, itemIndex: a, cloneIndex: o, props: C },
    children: u === `manual` ? e : M(Zg, { children: e }),
  });
}
function Zg({ children: e }) {
  let { props: t } = qg();
  return M(R.li, { ...t, children: e });
}
function Qg(e, t, n, r, i) {
  let a = m(!1);
  P(() => {
    let o = e.current;
    if (!o) return;
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
          n.set(-e[p]),
          (o[f] = 0),
          L.render(() => {
            o[f] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(e_);
          t.sort($g);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === m ? _-- : e.key === h && _++;
        ((_ = et(0, g.length, _)), v());
      },
      b = () => {
        a.current ||
          ((g = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(e_)),
          (_ = 0),
          g.length &&
            (i(!0),
            (a.current = !0),
            v(),
            s.addEventListener(`focus`, x, d),
            s.addEventListener(`blur`, x, d),
            o.addEventListener(`keydown`, y, u)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && S();
      },
      S = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          s.removeEventListener(`focus`, x),
          s.removeEventListener(`blur`, x),
          o.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        e_(t) && (a.current || b());
      },
      w = () => {
        c || ((c = !0), o.addEventListener(`focus`, C, d), s.addEventListener(`pointermove`, T, u));
      },
      T = () => {
        c &&
          ((c = !1),
          o.removeEventListener(`focus`, C, !0),
          s.removeEventListener(`pointermove`, T, u));
      };
    return (
      s.addEventListener(`keydown`, w, u),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        u
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        u
      ),
      () => {
        (l.abort(), S());
      }
    );
  }, []);
}
function $g(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function e_(e) {
  return e instanceof HTMLElement;
}
function t_(e) {
  return e.end - e.start;
}
function n_(e) {
  return e[e.length - 1].end - e[0].start;
}
function r_(e, t, n) {
  let r = n_(t),
    i = Math.max(...t.map(t_)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function i_(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: i = `x`,
    align: a = `center`,
    offset: o,
    isStatic: c = !1,
    itemSize: l = `auto`,
    overflow: u = !1,
    loop: d = !0,
    children: p,
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
  let C = m(null),
    w = le(S, C),
    T = m(null),
    [D, O] = F({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    k = Yk[a] || a,
    { sign: A } = Yg(i, D.direction);
  if (c) {
    let t = I(0);
    return M(Uk.Provider, {
      value: { ...D, gap: r, clampOffset: ce, offset: t, renderedOffset: t },
      children: M(a_, {
        containerProps: x,
        containerRef: w,
        children: p,
        gap: r,
        axis: i,
        alignItems: k,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: l,
        state: D,
        overflow: u,
        safeMargin: _,
        isStatic: !0,
        as: h,
        fade: v,
        sign: A,
      }),
    });
  }
  let [j, ee] = F(!1),
    N = I(1),
    P = I(0);
  o ??= P;
  let te = ke(() =>
      D.direction === `rtl` && i === `x`
        ? et(D.totalItemLength + r + D.inset, D.inset, o.get())
        : et(-D.totalItemLength - r - D.inset, -D.inset, o.get())
    ),
    ne = I(0),
    re = j ? ne : d ? te : o,
    ie = Se(C, { margin: `100px` }),
    L = Qe(),
    ae = ie && L,
    oe = Ye(),
    se = () => {
      if (!C.current || !T.current) return;
      let e = s.getComputedStyle(C.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: a } = Yg(i, e),
        o = i === `x` ? `paddingLeft` : `paddingTop`,
        c = i === `x` ? `paddingRight` : `paddingBottom`,
        l = C.current,
        f = T.current.querySelectorAll(`.ticker-item`);
      if (!f.length) return;
      let p = !1,
        m = [];
      for (let e = 0; e < f.length; e++) {
        let n = t(f[e], l);
        m.push(n);
        let r = D.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (p = !0);
      }
      let h = Math.min(l[n], s[r]),
        g = u ? s[r] : h;
      _ > 0 && (g += _ * 2);
      let v = n_(m),
        y = s.getComputedStyle(l),
        b = parseInt(y[o] ?? 0),
        x = parseInt(y[c] ?? 0),
        S = u ? a(f[0]) : b,
        w = d === !1 ? Math.max(0, v - h + b + x) : null;
      (g !== D.visibleLength ||
        v !== D.totalItemLength ||
        S !== D.inset ||
        D.itemPositions.length !== m.length ||
        p) &&
        O({
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
  me(() => {
    if (!ae || !C.current) return;
    se();
    let e = u ? he(se) : void 0,
      t = he(C.current, se);
    return () => {
      (e?.(), t());
    };
  }, [e, ae, u]);
  let ue = D.totalItemLength > 0;
  qe(
    ue && ae && o === P && !oe
      ? (e, n) => {
          let r = (n / 1e3) * (t * A * N.get());
          o.set(o.get() - r);
        }
      : ce
  );
  let de = f(
      () => (!ue || !D.visibleLength ? 0 : r_(D.visibleLength, D.itemPositions, r)),
      [ue, D]
    ),
    fe = D.totalItemLength === 0 ? 0 : (D.totalItemLength + r) * (de + 1),
    pe = [];
  if (d)
    for (let t = 0; t < de; t++) {
      let n = [];
      e.forEach((a, o) => {
        let s = D.itemPositions[o],
          c = (D.totalItemLength + r) * (t + 1),
          u = s ? { start: s.start + c, end: s.end + c } : Zk;
        n.push(
          M(
            Xg,
            {
              offset: re,
              axis: i,
              listSize: fe,
              itemIndex: o,
              cloneIndex: o,
              bounds: u,
              alignItems: k,
              size: l,
              safeMargin: _,
              numItems: e.length,
              children: a,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let a = `ticker-group-${t}`;
      pe.push(M(Fe, { id: a, children: n }, a));
    }
  Qg(C, i, ne, o, ee);
  let R = E((e) => (D.maxInset === null ? e : _e(-D.maxInset, 0, e)), [D.maxInset]);
  return M(Uk.Provider, {
    value: { ...D, gap: r, clampOffset: R, offset: o, renderedOffset: re },
    children: M(a_, {
      containerProps: x,
      children: p,
      containerRef: w,
      listRef: T,
      gap: r,
      axis: i,
      alignItems: k,
      isMeasured: ue,
      isInView: ae,
      offset: o,
      renderedOffset: re,
      items: e,
      itemSize: l,
      clonedItems: pe,
      clampOffset: R,
      snap: g,
      safeMargin: _,
      onPointerEnter: () => {
        ge(N, n);
      },
      onPointerLeave: () => {
        ge(N, 1);
      },
      totalListSize: fe,
      state: D,
      overflow: u,
      loop: d,
      as: h,
      fade: v,
      sign: A,
      fadeTransition: y,
      pageTransition: b,
    }),
  });
}
function a_({
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
  items: u,
  offset: d,
  clonedItems: p,
  clampOffset: h,
  renderedOffset: g,
  onPointerEnter: _,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: C,
  snap: w,
  loop: T,
  as: E,
  fade: D,
  sign: k,
  fadeTransition: A = eA,
  pageTransition: j,
}) {
  let N = f(() => R.create(E), [E]),
    P = {},
    { maxInset: F } = S;
  F !== null &&
    (P =
      a === `x`
        ? k > 0
          ? { left: F * -1, right: 0 }
          : { right: F, left: 0 }
        : { top: F * -1, bottom: 0 });
  let {
      drag: te,
      _dragX: ne,
      _dragY: re,
      dragMomentum: ie = !1,
      onDragEnd: ae,
      onPointerDown: oe,
      ...se
    } = t,
    ce = a === `x` ? ne : re,
    le = m(null),
    ue = () => {
      le.current &&= (le.current.stop(), null);
    };
  !ae &&
    te &&
    ce &&
    ((oe = () => {
      (ce.jump(d.get()), ue());
    }),
    (ae = (e, { velocity: t }) => {
      let n = d.get();
      (ue(),
        L.postRender(() => {
          let e = n + t[a] * (w ? 0.3 : 0.8);
          if (w)
            if (t[a] < 0) e = -Wg(-n, S.itemPositions, i, -e);
            else if (t[a] > 0) e = -Gg(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -Wg(-n, S.itemPositions, i, -n),
                r = -Gg(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = T
            ? {}
            : k > 0
              ? { max: 0, min: P[a === `x` ? `left` : `top`] }
              : { min: 0, max: P.right };
          le.current = ge(
            ce,
            h(e * k) * k,
            w
              ? j
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
  let de = I(+!T),
    fe = I(0),
    pe = Yg(a, S.direction),
    me = typeof D == `number` ? `px` : ``,
    he = ke(
      () =>
        `linear-gradient(to ${pe.direction}, rgba(0,0,0,${de.get()}) 0px, black ${D}${me}, black calc(100% - ${D}${me}), rgba(0,0,0,${fe.get()}) 100%)`
    ),
    _e = D ? { maskImage: he, WebkitMaskImage: he } : {},
    ve = m({ start: !0, end: !1 });
  return (
    je(g, `change`, (e) => {
      if (F === null) return;
      let t = F * -1;
      ((e *= k),
        e < 0
          ? ve.current.start && (ge(de, 0, A), (ve.current.start = !1))
          : ve.current.start || (ge(de, 1, A), (ve.current.start = !0)),
        e > t
          ? ve.current.end && (ge(fe, 0, A), (ve.current.end = !1))
          : ve.current.end || (ge(fe, 1, A), (ve.current.end = !0)));
    }),
    ee(O, {
      children: [
        M(N, {
          ...se,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...Qk,
            ...t.style,
            ..._e,
          },
          onPointerEnter: _,
          onPointerLeave: v,
          drag: te,
          _dragX: ne,
          _dragY: re,
          dragConstraints: P,
          dragMomentum: ie,
          onPointerDown: oe,
          onDragEnd: ae,
          children: ee(R.ul, {
            ref: r,
            style: {
              ...$k,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? g : 0,
              y: a === `y` ? g : 0,
              opacity: s || l ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              u.map((e, t) =>
                M(
                  Xg,
                  {
                    axis: a,
                    offset: g,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemPositions[t] ?? Zk,
                    alignItems: o,
                    size: b,
                    reproject: T,
                    safeMargin: C,
                    numItems: u.length,
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
function o_(e, t) {
  if (!e) throw Error(t);
}
function s_(e) {
  return -Math.sign(e);
}
function c_(
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
      let y = s_(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = s_(t)),
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
function l_() {
  let e = u(tA);
  return (y_(!!e, `useCarousel must be used within a Carousel component`), e);
}
function u_(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function d_(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = u_(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[et(0, t.length, s)],
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
function f_(e, t, n, r) {
  return d_(e, n, r, e - t, t);
}
function p_(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = u_(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[et(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function m_(e, t, n, r) {
  return p_(e, n, r, e + t);
}
function h_(e, t, n, r = !0) {
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
      let r = h_(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function g_(e, t, n, r) {
  let i = -e,
    a = r === null ? Math.floor(i / n) : 0,
    o = a * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + o,
      s = et(0, t.length, e - 1),
      c = (e === 0 ? a - 1 : a) * n,
      l = t[s] + c,
      u = (r - l) / 2,
      d = et(0, t.length, e + 1),
      f = (e === t.length - 1 ? a + 1 : a) * n,
      p = t[d] + f;
    if (i < p - (p - r) / 2 && i >= l + u) return e;
  }
  return 0;
}
function __({
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
  let d = m(!0),
    {
      clampOffset: f,
      totalItemLength: p,
      itemPositions: h,
      containerLength: g,
      gap: _,
      maxInset: v,
      direction: y,
      isMeasured: b,
    } = Kg(),
    x = p + _,
    S = h_(h, g, v),
    C = S.insets.length,
    { sign: w } = Yg(s, y),
    T = m(void 0),
    E = m(!1);
  P(() => {
    if (l === void 0 || !b || C === 0) return;
    let e = _e(0, C - 1, l),
      r = -S.insets[e] * w;
    E.current
      ? T.current !== l && ((T.current = l), n.jump(r), t.jump(r))
      : ((E.current = !0), (T.current = l), n.jump(r), t.jump(r));
  }, [b, C, l, w, n, t, S.insets]);
  let D = (e) => ({
      current: g_(e * w, S.insets, x, v),
      isNextActive: i ? !0 : e * -w < v,
      isPrevActive: i ? !0 : e * -w > 0,
    }),
    [O, k] = F(() => D(n.get()));
  P(() => {
    A();
  }, [g, p]);
  let A = () => {
    let e = D(n.get());
    (e.current !== O.current ||
      e.isNextActive !== O.isNextActive ||
      e.isPrevActive !== O.isPrevActive) &&
      k(e);
  };
  je(n, `change`, (e) => {
    (t.set(e), A());
  });
  let j = m(null),
    ee = () => {
      j.current &&= (j.current.stop(), null);
    };
  P(() => {
    t.attach((e, n) => {
      (ee(),
        d.current
          ? n(e)
          : (j.current = new Je({
              keyframes: [t.get(), e],
              velocity: _e(-2e3, 2e3, t.getVelocity()),
              ...a,
              onUpdate: n,
              onComplete: () => {
                j.current = null;
              },
            })),
        (d.current = !0));
    }, ee);
  }, []);
  let N = (e) => {
      let t = f(e);
      (n.stop(), (d.current = !1), n.set(t * w));
    },
    I = (e, t) => {
      let i = -e(-n.get() * w, S.visibleLength, h, _),
        a = f(i);
      a * w === n.get() ? ge(r, 0, { velocity: t * w * 400, ...rA }) : N(a);
    },
    te = () => I(m_, -1),
    ne = () => I(f_, 1),
    re = (e) => {
      let t = (i ? Math.floor((-n.get() * w) / x) : 0) * -x;
      N(-S.insets[e] + t);
    },
    ie = m({ nextPage: te, prevPage: ne, clampOffset: f });
  return (
    P(() => {
      ie.current = { nextPage: te, prevPage: ne, clampOffset: f };
    }, [te, ne, f]),
    P(() => {
      let e = o.current;
      if (e)
        return c_(e, {
          axis: s,
          swipeThreshold: u,
          onSwipe: c
            ? (e) => {
                let { nextPage: t, prevPage: n } = ie.current;
                e * w === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = ie.current,
              i = t.get() + e,
              a = w > 0 ? r(i) : _e(0, v, i);
            n.jump(v ? a : i);
          },
        });
    }, [s, c, t, w]),
    M(tA.Provider, {
      value: {
        currentPage: O.current,
        isNextActive: O.isNextActive,
        isPrevActive: O.isPrevActive,
        totalPages: C,
        nextPage: te,
        prevPage: ne,
        gotoPage: re,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function v_({
  children: e,
  loop: t = !0,
  transition: n = nA,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = m(null),
    l = I(0),
    u = I(0),
    d = I(0);
  return M(Xk, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: ke(() => d.get() + u.get()),
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: M(__, {
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
function y_(e, t) {
  if (!e) throw Error(t);
}
function b_({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = l_(),
    i = I(0);
  return (
    P(() => {
      if (!r) return;
      let n = ge(i, [0, 1], { duration: e, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, i, n, r, t]),
    null
  );
}
function x_(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function S_(e, t) {
  if (U(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return C_(parseInt(i));
  if (t === `y` && r) return C_(parseInt(r));
}
function C_(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function w_(e) {
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
function T_(e, t, n) {
  let r = [],
    i = _u(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!ct(e)) return pA;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return ct(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : pA;
}
function E_(e, t, n, i = _A) {
  let [a, o] = r.useState(e),
    [s, c] = r.useState(e);
  return (
    t && e !== s && (c(e), o(e)),
    [
      a,
      o,
      r.useCallback(
        (e) => {
          Ri(e) ||
            (t && o(i(e)),
            n &&
              r.startTransition(() => {
                n(e);
              }));
        },
        [i, n, t]
      ),
    ]
  );
}
function D_(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function O_() {
  return M(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: M(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function k_(e, t) {
  P(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (s.addEventListener(`keyup`, n), () => s.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function A_(e, t, n, r) {
  let i = s.innerHeight - r,
    a = Math.min(s.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function j_(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new s.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function M_() {
  return document.getElementById(HE) ?? document.getElementById(VE) ?? document.body;
}
function N_(e, t) {
  return ct(e) ? e : (t ?? 0);
}
function P_(e) {
  return N_(e?.paddingTop, e?.padding) + N_(e?.paddingBottom, e?.padding);
}
function F_(e) {
  return N_(e?.paddingLeft, e?.padding) + N_(e?.paddingRight, e?.padding);
}
function I_(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - F_(e)}px)`,
      srcSet: xo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function L_(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in kA)) continue;
    let n = kA[t],
      r = e[t];
    if (!(!ct(n) || !ct(r)) && n !== r) return !0;
  }
  return !1;
}
function R_(e) {
  let t = Be.get(e.current);
  if (!t) return !1;
  if (L_(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (L_(e.latestValues)) return !0;
  return !1;
}
function z_(e) {
  return k(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, o) {
    let s = u(We),
      d = u(cA),
      p = !!d,
      h = m(null),
      g = o ?? h,
      _ = m(),
      y = f(() => I_(t, i.background), [t, i.background]),
      [b, x] = F(!1),
      [S, C] = F(),
      w = E(() => {
        if (t) {
          if (b) {
            c(() => {
              x(!0);
            });
            return;
          }
          L.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              n =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = R_(g) || p ? { duration: 0 } : t.transition;
            c(() => {
              (C({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                d?.stop());
            });
          });
        }
      }, [t, b, g, d?.stop, p]),
      T = S?.aspectRatio ?? 1,
      D = ag(() => {
        if (!t || !y?.src) return;
        let e = _.current?.[y.src];
        if (e) return e;
        let n = A_(T, t.maxWidth, F_(t), P_(t)),
          r = j_(y, { width: n, height: n * T });
        return ((_.current = { [y.src]: r }), r);
      }),
      k = E(
        async (e) => {
          (r?.(e), !(b || !t || !y) && (await D(), w()));
        },
        [r, w, b, y, t, D]
      ),
      A = E((e) => {
        (e?.stopPropagation(),
          c(() => {
            x(!1);
          }));
      }, []);
    (k_(b, A),
      P(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            D();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, D),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, D));
          }
        );
      }, [D, g, t]));
    let j = a(),
      N = S?.transition ?? i.transition ?? s.transition,
      I = S?.borderRadius,
      te = S?.imageRendering,
      ne = S?.filter,
      re = S?.borderTop,
      ie = S?.borderRight,
      ae = S?.borderBottom,
      oe = S?.borderLeft,
      se = S?.borderStyle,
      ce = S?.borderColor,
      le = !!(re || ie || ae || oe || se || ce),
      ue = le
        ? {
            "--border-top-width": re,
            "--border-right-width": ie,
            "--border-bottom-width": ae,
            "--border-left-width": oe,
            "--border-style": se,
            "--border-color": ce,
          }
        : void 0,
      de = { [CE]: i.id },
      fe = N_(t?.paddingTop, t?.padding),
      pe = N_(t?.paddingBottom, t?.padding),
      me = N_(t?.paddingLeft, t?.padding),
      he = N_(t?.paddingRight, t?.padding),
      ge = S?.borderRadius ? { ...i.style, borderRadius: S.borderRadius } : i.style,
      _e = b ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      ve = p && b ? void 0 : (i.layoutId ?? (t ? j : void 0));
    return ee(O, {
      children: [
        M(e, {
          ...i,
          style: ge,
          onClick: k,
          layoutId: ve,
          ref: g,
          layoutDependency: _e,
          transition: N,
        }),
        M(He, {
          onExitComplete: () => {
            c(() => {
              (C(void 0), d?.start());
            });
          },
          children:
            b &&
            t &&
            y &&
            M(
              l,
              {
                children: v(
                  ee(O, {
                    children: [
                      M(R.div, {
                        ...de,
                        className: n,
                        onClick: A,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: N,
                        initial: AA,
                        animate: jA,
                        exit: AA,
                      }),
                      M(R.div, {
                        ...de,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${fe}px ${he}px ${pe}px ${me}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: M(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: T,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: M(R.div, {
                            layoutId: ve,
                            transition: N,
                            onClick: w,
                            className: `framer-lightbox-container`,
                            "data-border": le,
                            style: {
                              aspectRatio: T,
                              borderRadius: I,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: te,
                              filter: ne,
                              ...ue,
                            },
                            children: M(Ao, { image: y, alt: y.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  M_()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function B_(e, t) {
  return PA && !t
    ? Document.parseHTMLUnsafe(e)
    : ((NA ??= new DOMParser()), NA.parseFromString(e, t ?? `text/html`));
}
function V_(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function H_(e, t, n, r) {
  return e.replace(FA, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = yd(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!wg(f) || !wg(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = qt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = xd(u);
    if (!_ || z(_)) return e;
    ff(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(KE, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Ei(m, v)), i + o + `"${V_(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function U_(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function W_(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function G_(e, t, n) {
  let r = m([]);
  U_(r.current, e) ||
    ((r.current = e),
    CS.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && Rs(n.current));
    }));
}
function K_() {
  return { current: null };
}
async function q_(e, t) {
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
function J_(e) {
  return e in zA;
}
function Y_(e, t) {
  let n = {};
  for (let r in e) {
    if (!J_(r)) continue;
    let i = e[r],
      a = zA[r];
    dt(i) || dt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function X_(e, t = `character`, n, r, i) {
  if (r) {
    let t = K_();
    return (n.add(t), M(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return ee(
          l,
          {
            children: [
              M(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(BA)?.map((e, t) => {
                  let r = K_();
                  return (n.add(r), M(`span`, { ref: r, style: i, children: e }, e + t));
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
          o = K_();
        return (
          n.add(o),
          ee(
            l,
            { children: [M(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Z_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function Q_(e) {
  let t = [];
  return (
    ct(e.x) && t.push(`translateX(${e.x}px)`),
    ct(e.y) && t.push(`translateY(${e.y}px)`),
    ct(e.scale) && t.push(`scale(${e.scale})`),
    ct(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    ct(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    ct(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    ct(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    ct(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function $_(e, t, n, r) {
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
                transform: r ? void 0 : Q_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Q_(n.effect),
              };
      }
    default:
      H(i);
  }
}
function ev(e, t, n) {
  let r = uo(() => new Set()),
    i = mo(),
    a = n || !i,
    o = Ie(),
    s = m({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    u = e?.threshold;
  P(() => {
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
            nv(
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
          H(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? ie(n, e, { amount: u ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? ie(t, e, {
              amount: u ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(c);
    }
  }, [a, r, n, t, l, u, c]);
  let d = !!e,
    p = e ? Z_(e) : void 0;
  return f(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !d)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = $_(a, n || tv(e, t, i), s.current.effect, o);
        return {
          text: (e) => X_(e, p, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = K_();
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
            nv(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, d, r, n, p]
  );
}
function tv(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function nv(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Y_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await rv(n, u);
      if (
        e === null ||
        (ge(e, l, { ...r, restDelta: 0.001, delay: se(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        ge(e, n, { ...r, restDelta: 0.001, delay: se(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await q_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (L.read(() => {
          ((e = iv(n)),
            e.length !== 0 &&
              L.update(() => {
                let t = e.map((e, t) =>
                  ge(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          ge(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function rv(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await q_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function iv(e) {
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
function av(e) {
  let t = {};
  for (let n in e) (fe(n) || vS(n)) && (t[n] = e[n]);
  return t;
}
function ov(e) {
  return e.type === l;
}
function sv(e) {
  return e.type === `br`;
}
function cv(e, t, n, r, i = {}, a, o = ov(e) ? -1 : 0) {
  let s = d.toArray(e.props.children);
  dt(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!w(e) || !sv(e)) && (c = !1), w(e))) return cv(e, t, n, r, i, a, o + 1);
    let s = dt(n) ? e : n;
    return z(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (z(e.type) || te(e.type)) {
    let n = oe(e.type) || e.type,
      f = l || n,
      p = z(f) ? t?.[f] : void 0;
    ((u.className = Kl(`framer-text`, u.className, p)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = lv(s, i);
      u.id = e;
      let t = Kl(`framer-text`, h),
        n = M(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...u.style, scrollMarginTop: r }), (s = [n]));
    }
    f === `ol` &&
      (u.style = { ...u.style, [bC]: dv(u.start ?? 1, d.count(u.children), u.style?.[yC] ?? ``) });
  }
  return p(e, u, ...s);
}
function lv(e, t) {
  let n = di(e.map(uv).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function uv(e) {
  return z(e) || ct(e)
    ? e.toString()
    : w(e)
      ? uv(e.props.children)
      : Array.isArray(e)
        ? e.map(uv).join(``)
        : ``;
}
function dv(e, t, n) {
  return _s(Number(e) || 1, t, n);
}
function fv(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Sa(n.x, n.y),
    i = MS(Sa(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Sa.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  V(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Sa.isEqual(e, s) && !Sa.isEqual(e, c));
  V(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = MS.intersection(i, MS(s, c)),
    f = MS.intersection(i, MS(l, u));
  return (V(d && f, `linearGradientLine: Must have a start and end point.`), MS(d, f));
}
function pv(e, t) {
  let n = fv(e.angle),
    r = qs(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = MS.pointAtPercentDistance(n, i),
    s = MS.pointAtPercentDistance(n, a),
    c = Re([i, a], [0, 1]);
  return {
    id: `id${t}g${QC.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: KC.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function mv(e, t) {
  return {
    id: `id${t}g${ew.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: qs(e).map((t) => ({
      color: t.value,
      alpha: KC.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function hv(e) {
  if (!z(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return ct(parseFloat(t));
}
function gv(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return ct(n) ? n : 50;
}
function _v(e) {
  return hv(e) ? gv(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function vv(e) {
  return hv(e) ? gv(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function yv(e, t, n, r) {
  if (((e = q.get(e, `#09F`)), !jS.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * _v(e.positionX) + f),
        (d = (t.height - l) * vv(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * vv(e.positionY)))
        : ((n = g), (u = (1 - g) * _v(e.positionX))),
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
function bv(e) {
  return e.startsWith(`data:${JA}`);
}
function xv(e, t) {
  if (/^\w+:/u.test(e) && !bv(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return CS.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Sv(e, t) {
  return (P(() => ej.subscribeToTemplate(e), [e]), ej.template(e, t));
}
function Cv(e) {
  try {
    let t = B_(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function wv(e, t) {
  Ev(e, Tv(t));
}
function Tv(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Ev(e, t) {
  (Dv(e, t),
    Array.from(e.children).forEach((e) => {
      Ev(e, t);
    }));
}
function Dv(e, t) {
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
function Ov(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (tj[t[2]] || 1));
}
function kv(e) {
  let t = Ov(e.getAttribute(`width`)),
    n = Ov(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Av(e) {
  return e.indexOf(`image`) >= 0;
}
function jv(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Mv(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Nv(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? K,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = ej.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Yo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    U(s) &&
    U(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Pv({ height: e, width: t, children: n }) {
  let r = Fv();
  if (!r || !n) return n;
  let { props: i } = r;
  return M(R.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function Fv() {
  try {
    return qg();
  } catch {
    return;
  }
}
function Iv(e) {
  return e > oj ? `lazy` : void 0;
}
function Lv(e, t, n) {
  let r = Bv(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Rv(e) {
  return e ? (e.fonts ?? Zi()) : Zi();
}
function zv(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Bv(e);
}
function Bv(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Vv(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Hv) })
      : t.fonts.push(Hv(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Vv(e) {
  return cj in e;
}
function Hv(e) {
  let t = Uv(e) || Wv(e) ? e : Gv(e);
  return Wv(t) ? t : Kv(t);
}
function Uv(e) {
  return `source` in e;
}
function Wv(e) {
  return `cssFamilyName` in e;
}
function Gv(e) {
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
function Kv(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${sj}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function qv(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Jv(e, t) {
  let n = xb({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function Yv(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = xb({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function Xv(e) {
  return e.loader;
}
function Zv(e, t, n) {
  let r = Xv(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Qv,
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
  K,
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
  q,
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
  J,
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
  Y,
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
  X,
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
  Z,
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
  Q,
  bO,
  xO,
  SO,
  CO,
  wO,
  $,
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
  Zk,
  Qk,
  $k,
  eA,
  tA,
  nA,
  rA,
  iA,
  aA,
  oA,
  sA,
  cA,
  lA,
  uA,
  dA,
  fA,
  pA,
  mA,
  hA,
  gA,
  _A,
  vA,
  yA,
  bA,
  xA,
  SA,
  CA,
  wA,
  TA,
  EA,
  DA,
  OA,
  kA,
  AA,
  jA,
  MA,
  NA,
  PA,
  FA,
  IA,
  LA,
  RA,
  zA,
  BA,
  VA,
  HA,
  UA,
  WA,
  GA,
  KA,
  qA,
  JA,
  YA,
  XA,
  ZA,
  QA,
  $A,
  ej,
  tj,
  nj,
  rj,
  ij,
  aj,
  oj,
  sj,
  cj,
  lj = e(() => {
    (n(),
      pe(),
      i(),
      b(),
      A(),
      (Qv = Ke({
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
      ($v = Ke({
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
      (ey = Ke({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = $v();
        },
      })),
      (ty = Ke({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = ey(),
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
      (ny = Ke({
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
      (ry = () => {}),
      (iy = s !== void 0),
      (ay =
        iy &&
        (g.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(g.userAgent))),
      (oy = iy && typeof s.requestIdleCallback == `function`),
      (sy = oy ? s.requestIdleCallback : setTimeout),
      (cy = () => ry),
      (ly = () => !0),
      (uy = () => !1),
      (dy = new Map()),
      (fy = new Map()),
      (py = new Set()),
      (my = `:`),
      (hy = iy ? void 0 : new Set()),
      (gy = `preload`),
      (_y = Object.keys),
      (vy = `equals`),
      (yy = r.createContext({})),
      (by = r.createContext({})),
      (xy = []),
      (Sy = `default`),
      (Cy = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (wy = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && St(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Cy.Pending;
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
          return this.promiseState === Cy.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Cy.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Cy.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && hy !== void 0 && hy.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Cy.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Cy.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && dy.has(this.cacheHash) ? dy.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!_t(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Cy.Fulfilled) return this.value;
          throw this.promiseState === Cy.Rejected
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
      (Ty = -1),
      (Ey = -2),
      (Dy = -3),
      (Oy = -4),
      (ky = -5),
      (Ay = -6),
      (jy = -7),
      (My = 2 ** 32 - 1),
      (Ny = My - 1),
      (Py = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Fy = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Iy = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Ly = typeof Uint8Array.fromBase64 == `function`),
      (Ry = typeof process == `object` && process.versions?.node !== void 0),
      (zy = Ly ? ln : Ry ? dn : pn),
      (By = Ly ? un : Ry ? fn : mn),
      (Vy = Object.freeze({ kind: `not-plain` })),
      (Hy = Object.freeze({ kind: `symbol-keys` })),
      (Uy = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Qt(e),
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
        indicesOf: (e) => cn(e),
        shapeOf: (e) =>
          Zt(e)
            ? tn(e).length > 0
              ? Hy
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : Vy,
        get: (e, t) => e[t],
      })),
      (Wy = Object.freeze({
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
          return ((t[Ny] = void 0), delete t[Ny], (t.length = e), t);
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
      (K = iy
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
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (Gy = 2),
      (Ky = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (qy = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Yy = class {
        payload = Cn();
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
              return vn(this.payload);
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
      (Xy = iy ? void 0 : new Yy()),
      (Zy = qy.CollectionUtilsCache),
      (Qy = new WeakMap()),
      ($y = x(void 0)),
      (eb = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new wy(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(bt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = On(n),
            i = kn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Xy !== void 0) {
              if (_t(e)) return e.then((e) => (Xy.set(Zy, i, e), e));
              Xy.set(Zy, i, e);
            }
            return e;
          }
          if (En(Zy, i)) {
            let e = Dn(Zy, i);
            return (this.cacheMap.set(i, new wy(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = _t(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(bt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Xy !== void 0 && Xy.set(Zy, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new wy(async () => {
            try {
              let e = _t(s) ? await s : s;
              return (Xy !== void 0 && Xy.set(Zy, i, e), e);
            } catch (e) {
              console.error(bt(`Failed to call CollectionUtils method.`, e));
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
      (tb = /Mac/u),
      (nb = /iPhone|iPod|iPad/iu),
      (rb = /MacIntel/iu),
      (ib = /Edg\//u),
      (ab = /Chrome/u),
      (ob = /Google Inc/u),
      (sb = /Safari/u),
      (cb = /Apple Computer/u),
      (lb = /Firefox\/\d+\.\d+$/u),
      (ub = /Version\/([\d.]+)/u),
      (db = /FramerX/u),
      (fb = /tablet|iPad|Nexus 9/iu),
      (pb = /mobi/iu),
      (mb = 1e3 / 60),
      (hb = 1e3 / 25),
      (gb = 500),
      (_b = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (vb = Promise.resolve()),
      (yb = 100),
      (bb = (e) => {
        L.read(e, !1, !0);
      }),
      (xb = rr(bb)),
      (Sb = `framer_variant`),
      (Cb = RegExp(`:([a-z]\\w*)`, `gi`)),
      (wb = async () => {}),
      (Tb = { contentLocale: null, activeLocale: null, locales: [], setLocale: wb }),
      (Eb = (() => {
        let e = r.createContext(Tb);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Db = (() => {
        let e = r.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Ob = !ay),
      (kb = !1),
      (Ab = r.createContext({ global: void 0, routes: {} })),
      (jb = 10),
      (Mb = 1e4),
      (Nb = (e) => `--view-transition-${e}`),
      (Pb = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Nb(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Nb(`conic-offset`)})`,
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
        @property ${Nb(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Fb = {
        circle: {
          makeKeyframe: (e, t) => `${Nb(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Nb(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Or(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Nb(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Pb,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Dr(e.x)} ${Dr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Tr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Nb(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Nb(`blinds-width`)})`,
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
            @property ${Nb(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Nb(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Nb(`wipe-offset`)})`,
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
            @property ${Nb(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Ib = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Lb = `view-transition-styles`),
      (Rb = {
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
      (zb = () => {}),
      (Vb = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (Bb ||
            ((Bb = document.createElement(`div`)),
            Bb.setAttribute(`aria-live`, `assertive`),
            Bb.setAttribute(`aria-atomic`, `true`),
            (Bb.style.position = `absolute`),
            (Bb.style.transform = `scale(0)`),
            document.body.append(Bb)),
            setTimeout(() => {
              Bb.textContent = e;
            }, 60));
        }
      }),
      (Ub =
        iy &&
        typeof s.navigation?.back == `function` &&
        !(() => {
          if (g === void 0) return !1;
          let e = g.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Vn()),
      (Wb = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Gb = r.createContext(null)),
      (Kb = (() => {
        let e = x(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (qb = typeof document < `u` ? D : P),
      (Jb = new Set()),
      (Yb = (() => {
        let e = x({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Xb = 46),
      (Zb = 47),
      (Qb = (e, t) => e.charCodeAt(t)),
      ($b = (e, t) => e.lastIndexOf(t)),
      (ex = (e, t, n) => e.slice(t, n)),
      (tx = !1),
      (nx = `/`),
      (rx = (e) => e === Zb),
      (ix = new Set([`/404.html`, `/404`, `/404/`])),
      (ax = `__f_replay`),
      (ox = `__f_replay_ignore`),
      (sx = () => iy),
      (cx =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (lx = (e) => {
        e.target?.closest?.(`#main`) &&
          (Li(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (ux = !1),
      (Dx = [Hi]),
      (Ex = [Hi]),
      (Tx = [Hi]),
      (wx = [Hi]),
      (Cx = [Hi]),
      (Sx = [Hi]),
      (xx = [Hi]),
      (bx = [Hi]),
      (yx = [Hi]),
      (vx = [Hi]),
      (_x = [Hi]),
      (gx = [Hi]),
      (hx = [Hi]),
      (mx = [Hi]),
      (px = [Hi]),
      (fx = [Hi]),
      (dx = [Hi]),
      (kx = class {
        constructor() {
          (tt(Ox, 5, this),
            we(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            we(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            we(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            we(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            we(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            we(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            we(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Ui(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Ui(
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
            Ui(
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
            Ui(
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
            Ui(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Ui(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Ui(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Ui(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Ui(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (Ox = Ne(null)),
      Ve(Ox, 1, `markRenderStart`, Dx, kx),
      Ve(Ox, 1, `markRenderEnd`, Ex, kx),
      Ve(Ox, 1, `markUseInsertionEffectsStart`, Tx, kx),
      Ve(Ox, 1, `markUseInsertionEffectRouterStart`, wx, kx),
      Ve(Ox, 1, `markUseInsertionEffectsEnd`, Cx, kx),
      Ve(Ox, 1, `markUseLayoutEffectsStart`, Sx, kx),
      Ve(Ox, 1, `markRouterUseLayoutEffectStart`, xx, kx),
      Ve(Ox, 1, `markUseLayoutEffectsEnd`, bx, kx),
      Ve(Ox, 1, `markUseEffectsStart`, yx, kx),
      Ve(Ox, 1, `markUseEffectsRouterStart`, vx, kx),
      Ve(Ox, 1, `markUseEffectsAreSynchronous`, _x, kx),
      Ve(Ox, 1, `markUseEffectsEnd`, gx, kx),
      Ve(Ox, 1, `markRafStart`, hx, kx),
      Ve(Ox, 1, `markRafEnd`, mx, kx),
      Ve(Ox, 1, `markLayoutStylePaintEnd`, px, kx),
      Ve(Ox, 1, `measureMutationEffects`, fx, kx),
      Ve(Ox, 1, `measureUnattributedHydrationOverhead`, dx, kx),
      Pe(Ox, kx),
      (jx = !1),
      (Mx = { Start: Ji, End: Yi }),
      (Nx = class extends Error {}),
      (Px = class extends j {
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
          if (!(this.state.error instanceof Nx)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Xi(e, t);
        }
      }),
      (Fx = Object.freeze([])),
      (Lx = new Set()),
      (Rx = class {
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
      (q = (() => {
        function e(e) {
          return (
            ga(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            _a(e) ? e : new Vx(e)
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
          (e.get = (e, t) => (e == null ? t : _a(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              _a(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (zx = `onUpdate`),
      (Bx = `finishTransaction`),
      (Vx = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new Rx();
        static interpolationFor(e, t) {
          if (_a(e)) return va(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (_a(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: ba(e.x, t.x), y: ba(e.y, t.y) })),
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
      })((Sa ||= {})),
      (Hx = {
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
      (Ux = class e {
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
      (Ux.hexChars = `0123456789abcdef`),
      (Ux.refY = 1),
      (Ux.refU = 0.19783000664283),
      (Ux.refV = 0.46831999493879),
      (Ux.kappa = 903.2962962),
      (Ux.epsilon = 0.0088564516),
      (Ux.m_r0 = 3.240969941904521),
      (Ux.m_r1 = -1.537383177570093),
      (Ux.m_r2 = -0.498610760293),
      (Ux.m_g0 = -0.96924363628087),
      (Ux.m_g1 = 1.87596750150772),
      (Ux.m_g2 = 0.041555057407175),
      (Ux.m_b0 = 0.055630079696993),
      (Ux.m_b1 = -0.20397695888897),
      (Ux.m_b2 = 1.056971514242878),
      (Wx = new Ux()),
      (Gx = {
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
      (Kx =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (qx = (e) => {
        let { r: t, g: n, b: r, a: i } = Ka(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Jx = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ja({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Yx = (e) => {
        let { r: t, g: n, b: r, a: i } = Ka(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Xx = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ja({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Zx = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Ya(this);
        }
        rgb() {
          return $a(this);
        }
        hsl() {
          return Ma(this.r, this.g, this.b);
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
              return new e(Za(t));
            case `srgb`:
              return new e(Qa(Za(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Qa({
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
          let n = Wa(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Qx = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Qx.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Qx.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = eo(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && Va(e) !== !1),
          (e.isColorObject = (e) =>
            B(e) &&
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
          (e.toHex = (e, t = !1) => ja(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Zx.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...Da(e.r, e.g, e.b), a: e.roundA })),
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
            let t = Fa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Fa(e.r, e.g, e.b),
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
            let t = ja(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Hx)) if (Hx[e] === t) return e;
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
                r: Ca(i, [0, 1], [t.r, r.r], a),
                g: Ca(i, [0, 1], [t.g, r.g], a),
                b: Ca(i, [0, 1], [t.b, r.b], a),
                a: Ca(i, [0, 1], [t.a, r.a], a),
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
                h: Ca(i, [0, 1], [u, u + f], a),
                s: Ca(i, [0, 1], [c.s, l.s], a),
                l: Ca(i, [0, 1], [c.l, l.l], a),
                a: Ca(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Oa(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => Ma(e, t, n)),
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
      ($x = (e) => e instanceof Oe),
      (eS = Qv().EventEmitter),
      (tS = class {
        _emitter = new eS();
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
      (nS = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (rS = K.requestAnimationFrame || nS),
      (iS = (e) => rS(e)),
      (aS = 1 / 60),
      (oS = class extends tS {
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
          aS = e;
        }
        static get TimeStep() {
          return aS;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), iS(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * aS;
        }
        tick = () => {
          this._started &&
            (iS(this.tick),
            this.emit(`update`, this._frame, aS),
            this.emit(`render`, this._frame, aS),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (sS = new oS()),
      (cS = { target: oo() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => cS.target,
        hasRestrictions: () => {
          let e = cS.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (lS = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      rt({
        borderTopWidth: lS(`y`),
        borderLeftWidth: lS(`x`),
        borderRightWidth: lS(`x`),
        borderBottomWidth: lS(`y`),
      }),
      (uS = r.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (dS = {
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
      (fS = {
        ...dS,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (pS = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (mS = { ...pS, fontWeight: 500 }),
      (hS = {
        ...pS,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (gS = (e) => e),
      (_S =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (vS = go(
        (e) =>
          _S.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (yS = (e) => () => {
        ha(e);
      }),
      (bS = () => () => {}),
      (xS = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = CS.useImageSource(e, t, n);
          return f(() => {
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
      (SS = !1),
      (CS = new Proxy(xS, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? bS()
              : yS(
                  SS
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (wS = {
        isSelectorLoaded(e) {
          return CS.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return CS.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return CS.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return CS.fontStore.loadMissingFonts(e, t);
        },
      }),
      (TS = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (ES = [1, 2, 2.2]),
      (DS = [512, 1024, 2048, 4096]),
      (OS = 512),
      (kS = { position: `absolute`, ...TS, top: 0, right: 0, bottom: 0, left: 0 }),
      (AS = `src`),
      (jS = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && AS in e;
        },
      }),
      (MS = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ro(Sa.angleFromX(t.a, t.b)),
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
            return e(Sa(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Sa.distance(e.a, e.b)),
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
          x: ya(e.x, t),
          y: ya(e.y, t),
          width: ya(e.width, t),
          height: ya(e.height, t),
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
          return { x: a, y: o, width: Sa.distance(t, n), height: Sa.distance(t, i) };
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
            Sa.distance({ x: n, y: r }, { x: 0, y: 0 })
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
          return [MS(t, n), MS(n, r), MS(r, i), MS(i, t)];
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
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
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
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
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
          let n = MS(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && MS.intersection(n, t, !0)) {
              let n = NS[e];
              return (V(n, () => `Invalid edge name: ${JSON.stringify(NS)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          V(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            V(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (NS = [`top`, `right`, `bottom`, `left`]),
      (PS = {
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
      (FS = {
        quickfix: (e) => (
          (zo(e.widthType) || zo(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || zo(e.widthType) || U(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || zo(e.heightType) || U(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (IS = {
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
            d = FS.quickfix({
              left: U(t) || _a(t),
              right: U(n) || _a(n),
              top: U(r) || _a(r),
              bottom: U(i) || _a(i),
              widthType: Vo(a),
              heightType: Vo(o),
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
          } else a !== void 0 && typeof a != `string` && (f = q.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = q.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? q.getNumber(t) : null,
              right: d.right ? q.getNumber(n) : null,
              top: d.top ? q.getNumber(r) : null,
              bottom: d.bottom ? q.getNumber(i) : null,
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
            o = t?.sizing ? q.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? q.getNumber(t?.sizing.height) : null,
            c = qo(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && zo(e.widthType)) i = n.width;
          else if (U(e.width))
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
                H(e.widthType);
            }
          let l = qo(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && zo(e.heightType)) a = n.height;
          else if (U(e.height))
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
                H(e.heightType);
            }
          return Ko(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = IS.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? q.getNumber(l.width) : null,
            d = l ? q.getNumber(l.height) : null;
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
      (LS = 200),
      (RS = 200),
      (zS = r.createContext({ parentSize: 0 })),
      (BS = (e) => {
        let t = ts(),
          { parentSize: n, children: i } = e,
          a = r.useMemo(() => ({ parentSize: n }), [rs(n), is(n)]);
        return t === 1
          ? i
            ? M(O, { children: i })
            : null
          : M(zS.Provider, { value: a, children: i });
      }),
      (VS = r.createContext(void 0)),
      (HS = new Set()),
      (WS = `style[data-framer-css-ssr-minified]`),
      (GS = (() => {
        if (!Un()) return new Set();
        let e = document.querySelector(WS)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (KS = `data-framer-css-ssr`),
      (qS = (e, t, n) =>
        r.forwardRef((i, a) => {
          let { sheet: s, cache: c } = r.useContext(VS) ?? {},
            l = n;
          if (!Un()) {
            ot(t) && (t = t(fs(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            YS.add(e, l);
          }
          return (
            o(() => {
              (l && GS.has(l)) ||
                (ot(t)
                  ? t(fs(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ds(e, s, c));
            }, []),
            M(e, { ...i, ref: a })
          );
        })),
      (JS = class {
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
      (YS = new JS()),
      (XS = `--framer-will-change-override`),
      (ZS = `--framer-will-change-effect-override`),
      (QS = `--framer-will-change-filter-override`),
      ($S = `--overflow-clip-fallback`),
      (eC = `--one-if-corner-shape-supported`),
      (tC = [
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
      (nC = ((e) => (
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
      ))(nC || {})),
      (rC = nC),
      (iC = `framer-form-input`),
      (aC = `framer-form-input-wrapper`),
      (oC = `framer-form-input-empty`),
      (sC = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${ps(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            V(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (cC = [
        Z(`.${iC}`, {
          padding: Z.variable(rC.Padding),
          background: `transparent`,
          fontFamily: Z.variable(rC.FontFamily),
          fontWeight: Z.variable(rC.FontWeight),
          fontSize: Z.variable(rC.FontSize),
          fontStyle: Z.variable(rC.FontStyle),
          color: Z.variable(rC.FontColor),
          fontFeatureSettings: Z.variable(rC.FontOpenType),
          fontVariationSettings: Z.variable(rC.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(rC.WrapperHeight, `100%`),
          letterSpacing: Z.variable(rC.FontLetterSpacing),
          textAlign: Z.variable(rC.FontTextAlignment),
          lineHeight: Z.variable(rC.FontLineHeight),
        }),
        Z(`.${iC}:focus-visible`, { outline: `none` }),
      ]),
      (lC = [Z(`.${aC}`, { overflow: `hidden` })]),
      (uC = `var(${rC.BorderTopWidth}) var(${rC.BorderRightWidth}) var(${rC.BorderBottomWidth}) var(${rC.BorderLeftWidth})`),
      (dC = [
        `.${aC}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${rC.BorderRadiusTopLeft});
        border-top-right-radius: var(${rC.BorderRadiusTopRight});
        border-bottom-right-radius: var(${rC.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${rC.BorderRadiusBottomLeft});
        corner-shape: var(${rC.CornerShape});
        border-color: var(${rC.BorderColor});
        border-top-width: var(${rC.BorderTopWidth});
        border-right-width: var(${rC.BorderRightWidth});
        border-bottom-width: var(${rC.BorderBottomWidth});
        border-left-width: var(${rC.BorderLeftWidth});
        border-style: var(${rC.BorderStyle});
        transition: var(${rC.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (fC = `customError`),
      (pC = `valid`),
      (mC = 10),
      (hC = 8),
      (gC = 16),
      (_C = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${gC}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${gC}px`,
        backgroundColor: Z.variable(rC.IconColor),
      }),
      (vC = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${gC}px`,
        boxSizing: `content-box`,
        padding: Z.variable(rC.Padding),
        border: `none`,
        pointerEvents: `none`,
        ..._C,
      }),
      (yC = `--list-style-type`),
      (bC = `--max-list-digits`),
      (xC = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (SC = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (CC = { display: `inline-block` }),
      (wC = { display: `block` }),
      (TC = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${SC.display};
            flex-direction: ${SC.flexDirection};
            justify-content: ${SC.justifyContent};
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
                color: ${Ss([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ss([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ss([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${CC.display};
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
                color: ${Ss([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Ss([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ss([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ss([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ss([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${Ss([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ss([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ss([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ss([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Ss([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ss([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ss([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ss([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ss([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${Ss([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ss([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ss([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ss([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ss([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${wC.display};
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
            padding-inline-start: calc(calc(var(${bC}, 1) + 1) * 1ch);
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
        ${Cs(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (EC = `--text-truncation-display-inline-for-safari-16`),
      (DC = `--text-truncation-display-none-for-safari-16`),
      (OC = `--text-truncation-line-break-for-safari-16`),
      (kC = [
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
      (AC = `(background: -webkit-named-image(i))`),
      (jC = `(contain-intrinsic-size: inherit)`),
      (MC = [
        `@supports ${AC} and (not ${jC}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${kC.join(`, `)} { display: var(${EC}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${kC.map((e) => `${e}::after`).join(`, `)} { content: var(${OC}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${DC}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${EC}, ${CC.display}) }
    }`,
      ]),
      (NC = (e) => {
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
                  `body { ${XS}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${XS}: transform; } }`,
                ]
              : [`body { ${XS}: none; ${ZS}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${QS}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${QS}: filter; } }`,
                ]
              : [`body { ${QS}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${$S}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${eC}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...TC,
          ...tC,
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
          ...MC,
          f,
        ];
      }),
      (PC = us(() => NC(!1))),
      (FC = us(() => NC(!0))),
      (IC = Bn()),
      (LC = r.createContext(!1)),
      (RC = class {
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
      (zC = Un() ? new RC() : void 0),
      (BC = `data-framer-size-compatibility-wrapper`),
      (VC = `0.000001px`),
      (HC = ` translateZ(${VC})`),
      (UC = Gn() || Vn() || Kn()),
      (WC = (() => {
        class e extends j {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? zs(t) : Bs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Rt(this.props, e);
          }
          componentDidUpdate(e) {
            gS(this.props).clip &&
              gS(this.props).radius === 0 &&
              gS(e).radius !== 0 &&
              Hs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (GC = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (KC = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = Va(e);
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
        hsvToHSLString: (e) => J.toHslString(J(ka(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(ka(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(ka(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(ka(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ka(e.h, e.s, e.v),
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
      (qC = /var\(.+\)/u),
      (JC = new Map()),
      (YC = [`stops`]),
      (XC = [`start`, `end`]),
      (ZC = [`angle`, `alpha`]),
      (QC = {
        isLinearGradient: (e) => B(e) && ZC.every((t) => t in e) && (Xs(e) || Ys(e)),
        hash: (e) => e.angle ^ Js(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = qs(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      ($C = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (ew = {
        isRadialGradient: (e) => B(e) && $C.every((t) => t in e) && (Xs(e) || Ys(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Js(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = qs(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (tw = [
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
      (nw = new Set([...tw, ...tw.map((e) => `${e}Capture`)])),
      (rw = `overflow`),
      (iw = { x: 0, y: 0, width: 200, height: 200 }),
      (aw = new Set([
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
      (ow = k(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = ks(e),
          l = sc(s),
          d = js(e),
          f = nc(e),
          p = m(null),
          h = t ?? p,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": gS(e)[`data-framer-offset-parent-id`],
          };
        !cc(e) && n && (gS(g)[`data-framer-name`] = n);
        let [_, v] = oc(s),
          y = ac(s),
          b = ss(y),
          x = r && !(v && !b && Yo(y)) ? r : void 0;
        (x ? (l.transformTemplate ||= As(r)) : (l.transformTemplate ||= void 0),
          Object.assign(g, Ds(x, s.style)),
          Ls(e, h));
        let S = Po(e),
          C = lc(s, y, v, u(LC)),
          w = as(
            ee(O, {
              children: [
                S
                  ? M(Ao, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: v ?? void 0,
                      nodeId: e.id && Os(e.id),
                      layoutId: d,
                    })
                  : null,
                c,
                M(Mo, { ...a, border: i, layoutId: d }),
              ],
            }),
            C
          ),
          T = ls(e.as),
          E = cs(S);
        return (
          e.fitImageDimension &&
            E &&
            ((_[e.fitImageDimension] = `auto`), (_.aspectRatio = E.width / E.height)),
          ee(T, { ...g, ...l, layoutId: d, style: _, ref: h, children: [w, o] })
        );
      })),
      (sw = Ts(
        k(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? M(ow, { ...e, ref: t }) : null;
        })
      )),
      (cw = `__LAYOUT_TREE_ROOT`),
      (lw = r.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (uw = class extends j {
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
                preserveFollowOpacity: t.options.layoutId === cw && !this.follow?.isExiting,
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
          return M(lw.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (dw = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (fw = class {
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
      (pw = x(new Map())),
      (mw = typeof IntersectionObserver > `u` ? ry : vc),
      (hw = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (gw = r.createContext(null)),
      (_w = class extends j {
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
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === cw && !this.props.isExiting;
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
          return M($e.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (vw = (e) => {
        let t = r.useContext(lw);
        return M(_w, { ...e, sharedLayoutContext: t });
      }),
      (yw = r.createContext(!0)),
      (bw = x({ register: () => {}, deregister: () => {} })),
      (xw = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = wc(),
          i = m({
            register: E(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: E(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          P(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, ot(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          M(bw.Provider, { value: i, children: n })
        );
      }),
      (Sw = r.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: d,
        animation: f,
        exitAnimation: p,
        instant: h,
        initialProps: g,
        exitProps: _,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let w = ue(),
          T = u(ze),
          { persistLayoutIdCache: E } = u(uS),
          D = m({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Dc({}, g, a),
          }),
          O = m(null),
          k = T !== null && !T.isPresent;
        (t && D.current.wasCurrent === void 0 && E(),
          P(() => {
            if (e || !w) return;
            if (k) {
              D.current = { ...D.current, wasBeingRemoved: k };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = D.current,
              o = (t && !i) || (!k && D.current.wasBeingRemoved && t),
              s = n && !r,
              c = Dc(D.current.origins, g, a),
              l = D.current.wasReset;
            (o || s
              ? (w.stop(), w.start({ zIndex: b, ...c, ...a }), (l = !1))
              : l === !1 && (w.stop(), w.set({ zIndex: b, ...Cw, opacity: 0 }), (l = !0)),
              (D.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, k]));
        let A = h ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          j = h ? { type: !1 } : p || f,
          N = { ...v };
        ((N.left === void 0 || N.right === void 0) && (N.width = `auto`),
          (N.top === void 0 || N.bottom === void 0) && (N.height = `auto`));
        let F = (Oc(a) || Oc(g)) && (e || t || n) ? 1200 : void 0,
          I = { ...Cw, ...D.current.origins },
          te = e
            ? {
                initial: { ...I, ...g },
                animate: { ...I, ...a, transition: A },
                exit: { ...I, ..._, transition: f },
              }
            : { animate: w, exit: { ...I, ..._, transition: j } },
          ne = !(k || x === !1),
          re = !!t && ne,
          ie = t && C;
        return ee(sw, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || k || (t && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: F,
          },
          children: [
            e &&
              M(sw, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: h && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: k ? void 0 : c,
              }),
            M(sw, {
              ...N,
              ...te,
              transition: {
                default: A,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: k ? d : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: ie || e || (t && y) ? 1 : 0 },
              "data-is-present": ne ? void 0 : !1,
              ref: O,
              children: M(gw.Provider, {
                value: O,
                children: M(yw.Provider, {
                  value: re,
                  children: M(xw, {
                    isCurrent: re,
                    isOverlayed: r,
                    children: M(vw, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: A,
                      isExiting: !ne,
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
      }, Ec)),
      (Cw = {
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
      (ww = class {
        warning = () => {
          ha(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
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
      (Tw = x(new ww())),
      (Ew = {
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
      (Dw = () => ({
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
      (Ow = _y(Cw)),
      (kw = r.createContext(void 0)),
      (Aw = r.createContext(void 0)),
      (jw = (() => {
        class e extends j {
          #e = null;
          state = Dw();
          static defaultProps = { enabled: !0 };
          static contextType = kw;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Lo(t) || !Io(t)) return;
            let n = { ...Ew.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Mc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Lo(t) || !Io(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Ew.Instant)
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
            let t = Mc(this.state, e);
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
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Lo(e) || !Io(e))
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
            this.#i(e, Ew.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Ew.Fade, t);
          }
          push(e, t) {
            this.#i(e, kc(t), t);
          }
          modal(e, t) {
            this.#i(e, Ew.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Ac(t), t);
          }
          flip(e, t) {
            this.#i(e, jc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Ew.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = qc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              V(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              V(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                M(
                  Sw,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: rl(o, e),
                    transitionProps: u,
                    animation: nl(o, e),
                    backfaceVisible: el(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: M(uc, { children: al({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              M(
                Sw,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: $c(n, t),
                  transitionProps: tl(n, t),
                  instant: rl(n, t, !0),
                  animation: nl(n, t),
                  exitProps: e.transition.enter,
                  visible: il(n, t),
                  backdropColor: Zc(e.transition),
                  backfaceVisible: Qc(n, t),
                  onTapBackdrop: ol(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: al({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return M(sw, {
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
              children: M(Tw.Provider, {
                value: this,
                children: ee(Aw.Provider, {
                  value: i,
                  children: [
                    M(Sw, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Jc(n),
                      animation: Yc(n),
                      backfaceVisible: Xc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: M(so, {
                        children: M(uw, {
                          children: M(He, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    M(He, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Mw = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Nw = Ts(r.forwardRef(sl))),
      it(ty(), 1),
      (Pw = ((e) => (
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
      ))(Pw || {})),
      (Fw = `optional`),
      (Iw = `outputControls`),
      (Lw = it(ty(), 1)),
      (Rw = class e {
        constructor(t, n) {
          ((this.originalEvent = t), (this.session = n));
          let r = n?.startEvent?.target || t.target,
            i = e.eventLikeFromOriginalEvent(t);
          this.point = _l(i, r);
          let a = n?.originElement ? n.originElement : document.body;
          ((this.devicePoint = _l(i, a)), (this.target = t.target || null));
          let o = n?.lastEvent;
          t instanceof WheelEvent
            ? (this.delta = { x: t.deltaX, y: t.deltaY })
            : o && this.devicePoint && o.devicePoint
              ? (this.delta = Sa.subtract(this.devicePoint, o.devicePoint))
              : (this.delta = { x: 0, y: 0 });
        }
        originalEvent;
        session;
        time = Date.now();
        loopTime = sS.time;
        point;
        devicePoint;
        target;
        delta;
        static eventLikeFromOriginalEvent(e) {
          if (`touches` in e) {
            let t = e.touches;
            t?.length || (e.changedTouches && e.changedTouches.length && (t = e.changedTouches));
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
          if (!qn())
            return (
              `button` in this.originalEvent &&
              `buttons` in this.originalEvent &&
              `ctrlKey` in this.originalEvent &&
              (this.originalEvent.button === 0 || this.originalEvent.buttons === 1) &&
              !this.originalEvent.ctrlKey
            );
        }
      }),
      it(ty(), 1),
      (zw = r.createContext({ dragging: !1 })),
      (Bw = { onMouseEnter: `mouseenter`, onMouseLeave: `mouseleave` }),
      (Vw = Object.keys(Bw)),
      (Hw = {
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
      (Uw = new Set([`tapstart`, `tap`, `tapend`])),
      (Ww = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Gw = Symbol(`private`)),
      (Kw = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Gw]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Rx(),
                reset() {
                  for (let t in i)
                    if (Ww(i, t)) {
                      let n = Ww(e, t) ? gS(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Jw);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Gw].reset()),
          (e.addObserver = (e, t) => e[Gw].observers.add(t)),
          e
        );
      })()),
      (qw = class {
        set = (e, t, n, r) => {
          if (t === Gw) return !1;
          let i = e[Gw],
            a,
            o;
          if (
            (_a(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables && typeof n != `function` && typeof n != `object` && !a && (a = q(n)),
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
            l = gS(e)[t];
          if (l !== void 0) {
            _a(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (gS(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === Gw) return gS(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Gw].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Gw);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Gw) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Jw = new qw()),
      (Yw = `opacity`),
      (Xw = `radius`),
      (Zw = [`x`, `y`, `color`, `inset`, `blur`, `spread`]),
      (Qw = {
        is: (e) => e && Zw.every((t) => t in e),
        toCSS: (e) =>
          `${e.inset ? `inset ` : ``}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
      }),
      ($w = q.getNumber),
      (eT = {
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
      (tT = (() => {
        class e extends WC {
          static supportsConstraints = !0;
          static defaultFrameSpecificProps = {
            ...PS,
            ...eT,
            opacity: 1,
            background: J(`rgba(0, 170, 255, 0.3)`),
            visible: !0,
            borderWidth: 0,
            borderColor: `#222`,
            borderStyle: `solid`,
          };
          static defaultProps = { ...WC.defaultProps, ...e.defaultFrameSpecificProps };
          static rect(e) {
            let t = IS.fromProperties(e),
              n = e.parentSize
                ? { sizing: e.parentSize, positioning: e.parentSize, viewport: null }
                : null;
            return IS.toRect(t, n, null, !0);
          }
          get rect() {
            return e.rect(this.props);
          }
          element = null;
          imageDidChange = !1;
          state = { size: null };
          static getDerivedStateFromProps(t, n) {
            let r = e.updatedSize(t, n),
              { target: i } = cS;
            return t.background && jS.isImageObject(t.background) && t.background.src
              ? { size: r }
              : n.size &&
                  (i === Y.preview || (n.size.width === r.width && n.size.height === r.height))
                ? null
                : { size: r };
          }
          static updatedSize(t, n) {
            let r = e.rect(t),
              i = n.size,
              a = { width: r.width, height: r.height },
              { target: o } = cS;
            return (
              i
                ? _a(i.width) && _a(i.height)
                  ? (i.width.set(a.width), i.height.set(a.height))
                  : (i = a)
                : (i = o === Y.preview ? Kw(a, !0) : a),
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
              n = q.get(this.props.left, void 0),
              r = q.get(this.props.top, void 0);
            Object.assign(t, this.props._initialStyle);
            let i = this.context.parentSize !== 1,
              a = q.get(this.props.perspective, void 0);
            ((t.perspective = a), (t.WebkitPerspective = a));
            let o,
              s = q.get(this.props.backfaceVisible, void 0);
            (s === !0 ? (o = `visible`) : s === !1 && (o = `hidden`),
              (t.backfaceVisibility = o),
              (t.WebkitBackfaceVisibility = o));
            let c = q.get(this.props.preserve3d, void 0);
            if (
              (c === !0
                ? (t.transformStyle = `preserve-3d`)
                : c === !1 && (t.transformStyle = `flat`),
              !i)
            ) {
              (Bl(t, this.props, `right`), Bl(t, this.props, `bottom`));
              let e = zl(q.get(this.props.width, void 0)),
                i = zl(q.get(this.props.height, void 0));
              (typeof n == `string` &&
                n.endsWith(`%`) &&
                this.props.right === null &&
                ((n = `calc(${n} - calc(${e}} / 2))`), (t.width = e)),
                typeof r == `string` &&
                  r.endsWith(`%`) &&
                  this.props.bottom === null &&
                  ((r = `calc(${r} - calc(${i} / 2))`), (t.height = i)),
                r !== void 0 && t.bottom !== void 0
                  ? ((t.height = void 0), (r = zl(q.get(this.props.top, void 0))))
                  : (t.height = i),
                n !== void 0 && t.right !== void 0
                  ? ((t.width = void 0), (n = zl(q.get(this.props.left, void 0))))
                  : (t.width = e));
            }
            let l = { ...e };
            return (
              n !== void 0 && (l.x = n),
              r !== void 0 && (l.y = r),
              Il(this.props, l, t),
              Pl(this.props, t),
              Rl(this.props, t),
              WC.applyWillChange(this.props, t, !1),
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
            let { target: e } = cS;
            e === Y.preview &&
              ((this.propsObserver = Kw(this.props, !0)),
              (this.propsObserverCancel = Kw.addObserver(this.propsObserver, this.onPropsChange)),
              this.props.parentSize &&
                _a(this.props.parentSize.width) &&
                _a(this.props.parentSize.height) &&
                ((this.sizeObserver = Kw(this.props.parentSize, !0)),
                (this.sizeObserverCancel = Kw.addObserver(this.sizeObserver, this.onSizeChange))));
          }
          componentDidUpdate() {
            let { target: e } = cS;
            (this.propsObserverCancel?.(),
              this.sizeObserverCancel?.(),
              e === Y.preview &&
                ((this.propsObserver = Kw(this.props, !0)),
                (this.propsObserverCancel = Kw.addObserver(this.propsObserver, this.onPropsChange)),
                this.props.parentSize &&
                  _a(this.props.parentSize.width) &&
                  _a(this.props.parentSize.height) &&
                  ((this.sizeObserver = Kw(this.props.parentSize, !0)),
                  (this.sizeObserverCancel = Kw.addObserver(
                    this.sizeObserver,
                    this.onSizeChange
                  )))));
          }
          onPropsChange = (t) => {
            let n = e.rect(q.objectToValues(t.value));
            (this.state.size &&
              _a(this.state.size.width) &&
              _a(t.value.width) &&
              this.state.size.width.set(n.width),
              this.state.size &&
                _a(this.state.size.height) &&
                _a(t.value.height) &&
                this.state.size.height.set(n.height),
              this.updateStyle());
          };
          onSizeChange = () => {
            this.updateStyle();
          };
          componentWillUnmount() {
            (this.propsObserverCancel?.(),
              (this.propsObserverCancel = void 0),
              this.sizeObserverCancel?.(),
              (this.sizeObserverCancel = void 0));
          }
          render() {
            let { visible: e, id: t, className: n } = this.props;
            if (!e) return null;
            let r = this.getStyle(),
              i = this.rect,
              a = { width: i.width, height: i.height };
            return ee(`div`, {
              id: t,
              style: r,
              ref: this.setElement,
              className: n,
              children: [
                M(BS, { parentSize: a, children: this.layoutChildren() }),
                M(Mo, { ...this.props }),
              ],
            });
          }
          layoutChildren() {
            let e = this.props._forwardedOverrides,
              t = r.Children.map(this.props.children, (t) =>
                Bo(t)
                  ? r.cloneElement(t, { parentSize: this.state.size, _forwardedOverrides: e })
                  : e && t
                    ? r.cloneElement(t, { _forwardedOverrides: e })
                    : t
              );
            return (
              t?.length === 1 && typeof t[0] == `string` && (t = [M(Vl, { children: t }, `0`)]),
              t
            );
          }
        }
        return ((e.contextType = zS), e);
      })()),
      (nT =
        `_border._constraints.animate.initial.variants.transition.inherit.center.initial.transformTemplate.animate.variants.transition.onUpdate.onAnimationComplete.onPanSessionStart.onTapCancel.whileTap.whileHover.onHoverStart.onHoverEnd.drag.dragDirectionLock.dragPropagation.dragConstraints.dragElastic.dragMomentum.dragTransition.onDragStart.onDragEnd.onDrag.onDirectionLock.onDragTransitionEnd.x.y.rotate.rotateX.rotateY.rotateZ.position.border.borderRadius.cornerShape.shadow.size`.split(
          `.`
        )),
      (rT = [
        `autoSize`,
        `aspectRatio`,
        `borderWidth`,
        `borderStyle`,
        `borderColor`,
        `centerX`,
        `centerY`,
      ]),
      (iT = vl(tT)),
      (aT = (() => {
        let e = k(function (e, t) {
          let n = ts();
          if (Hl(e)) {
            let t = e.parentSize || es(n);
            return M(iT, { ...e, parentSize: t });
          }
          return M(sw, { ...e, ref: t });
        });
        return ((e.displayName = `Frame`), e);
      })()),
      (oT = (() => {
        function e(t = {}) {
          let n = Kw(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Kw.resetObject(e));
          }),
          (e.addObserver = (e, t) => Kw.addObserver(e, t)),
          e
        );
      })()),
      (sT = { update: 0 }),
      (cT = r.createContext({ update: NaN })),
      (lT = class extends j {
        observers = [];
        state = sT;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), sS.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), oT.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            oT._stores.forEach((e) => {
              let t = oT.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            M(cT.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      it(ty(), 1),
      (uT = `__framer__`),
      (dT = uT.length),
      (fT = r.createContext(void 0)),
      (pT = r.createContext(void 0)),
      (mT = `ssr-variant`),
      (hT = `ssr-variant-group-separator`),
      (gT = r.forwardRef(function (e, t) {
        let n = Xl(t),
          i = r.useContext(pT),
          a = r.useSyncExternalStore(cy, uy, ly),
          o = uo(() => (a ? (Un() ? 1 : 2) : 0)),
          s = r.useContext(fT);
        return mi(() => {
          let { breakpoint: t, overrides: r, children: a, ...c } = e;
          if (!s)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(a, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = s,
            d = i?.primaryVariantId === l ? i?.variants : void 0;
          switch (o) {
            case 0:
              return n(a, iu(t, c, r));
            case 1:
              return $l(r, a, c, u, l, d, n, t);
            case 2:
              return $l(r, a, c, u, l, d, Yl, void 0);
            default:
              H(o);
          }
        }, [s, i, n, e]);
      })),
      (_T = qS(gT, `.${mT} { display: contents }`, `PropertyOverrides`)),
      (vT = `default`),
      (yT = new Set([vT])),
      (bT = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (V(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (V(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = vT, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return vT;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = eu(r)) : vT;
        }
        setAll(e, t = yT, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = ot(n.transformTemplate) ? n.transformTemplate?.({}, ST) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: B(a) ? a : void 0,
              animate: B(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
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
      (xT = new bT()),
      (ST = `__Appear_Animation_Transform__`),
      (CT = `data-framer-appear-id`),
      (wT = `data-framer-appear-animation`),
      (TT = (e) => {
        if (mo())
          return {
            animate: ou(e.animate) ? e.animate : void 0,
            initial: ou(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (ET = [
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
      (DT = (e) => ({
        x: ae(e?.x ?? 0),
        y: ae(e?.y ?? 0),
        opacity: ae(e?.opacity ?? 1),
        scale: ae(e?.scale ?? 1),
        rotate: ae(e?.rotate ?? 0),
        rotateX: ae(e?.rotateX ?? 0),
        rotateY: ae(e?.rotateY ?? 0),
        skewX: ae(e?.skewX ?? 0),
        skewY: ae(e?.skewY ?? 0),
        transformPerspective: ae(e?.transformPerspective ?? 0),
      })),
      (OT = {
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
      (kT = { willChange: `transform` }),
      Object.freeze(kT),
      (AT = {}),
      Object.freeze(AT),
      (jT = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (MT = () => {
        let e = m();
        return (
          P(
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
      (NT = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (PT = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (FT = 1),
      (IT = 4),
      (LT = new Set([
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
      (RT = [`animate`, `animate`]),
      (zT = { inputRange: [], outputRange: [] }),
      (BT = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (VT = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (HT = () => ({
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
      (UT = [0, 1]),
      (WT = { parallax: NT, styleAppear: LT, styleTransform: BT, loop: jT, presence: PT }),
      (GT = _y(WT)),
      (KT = (e) => e.reduce((e, t) => (e += t), 0)),
      (qT = (e) => e.reduce((e, t) => (e *= t), 1)),
      (JT = `current`),
      (YT = (e) =>
        r.forwardRef((t, n) => {
          if (t.__withFX)
            return M(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let i = TT(t);
          if (i) return M(e, { ...t, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = ku(t),
            m = hc(n),
            { values: h, style: g } = hu(c, m, p, t.style, t[de]),
            { values: _, style: v } = du(a, m, t.style?.visibility),
            { values: y, style: b } = Du(s, m),
            { values: x, style: S } = Cu(o, m),
            { values: C, style: w } = lu(l, m),
            T = r.useMemo(() => {
              let e = new Oe(d ?? 1);
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
            }, [d, y, _, x, C, h]);
          ju(t.style, T);
          let E = ke(T.scale, qT),
            D = ke(T.opacity, qT),
            O = ke(T.x, KT),
            k = ke(T.y, KT),
            A = ke(T.rotate, KT),
            j = ke(T.rotateX, KT),
            ee = ke(T.rotateY, KT),
            N = ke(T.skewX, KT),
            P = ke(T.skewY, KT),
            F = ke(T.transformPerspective, KT),
            { drag: I, dragConstraints: te } = u;
          Ns(I && Au(te) ? te : void 0);
          let ne = {
            opacity: D,
            scale: E,
            x: O,
            y: k,
            rotate: A,
            rotateX: j,
            rotateY: ee,
            skewX: N,
            skewY: P,
          };
          dt(f) && (ne.transformPerspective = F);
          let re = Mu(t.animate) ? t.animate : void 0,
            ie = Mu(t.initial) ? t.initial : void 0,
            L = Mu(t.exit) ? t.exit : void 0,
            ae = p && !c.presenceInitial ? { initial: ie, animate: re, exit: L } : {};
          return M(e, {
            ...u,
            ...ae,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...ne, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (XT = x({})),
      (ZT = r.createContext({})),
      (QT = r.forwardRef(function ({ width: e, height: t, y: n, children: i, ...a }, o) {
        let s = r.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          c = Xl(o);
        return M(ZT.Provider, { value: s, children: c(i, a) });
      })),
      ($T = (e) =>
        r.forwardRef((t, n) =>
          M(e, { layoutId: js(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (eE = {}),
      (tE = () => eE),
      (nE = (e) => {
        eE = e;
      }),
      (rE = !1),
      (iE = class extends j {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Fu(e)) return;
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
              bt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          xn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Fu(e)) throw e;
          return ((rE = !0), this.props.children);
        }
      }),
      (aE = s === void 0 ? null : new Promise(() => {})),
      (oE = M(Iu, {})),
      (sE = x(!1)),
      (sE.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (cE = M(Ru, {})),
      (lE = class extends j {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Bu(this.props.getErrorMessage(), t?.componentStack), zu(e, t));
        }
        render() {
          let { children: e, fallback: t = cE } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (uE = class extends j {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            zu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (dE = r.createContext(void 0)),
      (fE = `code-crash:`),
      (pE = $T(
        r.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            isModuleExternal: s,
            inComponentSlot: c,
            ...l
          },
          u
        ) {
          let d = uo(() => (t ? `${t}-container` : void 0)),
            f = ls(n),
            p = ed(
              r.Children.map(e, (e) =>
                r.isValidElement(e) ? r.cloneElement(e, { layoutId: t }) : e
              ),
              i,
              a,
              o,
              s,
              c
            );
          return M(f, {
            layoutId: d,
            ...l,
            ref: u,
            children: M(LC.Provider, {
              value: !0,
              children: M(Gb.Provider, {
                value: a ?? null,
                children: M(lo, {
                  enabled: !1,
                  children: M(Fe, { id: t ?? ``, inherit: l.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (mE = r.forwardRef(function (e, t) {
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
          d = ed(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = ls(f);
          return M(Gb.Provider, {
            value: a ?? null,
            children: M(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return M(Gb.Provider, {
            value: a ?? null,
            children: M(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (gE = new Set()),
      (_E = x({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (vE = `framer-cursor-none`),
      (yE = `framer-pointer-events-none`),
      (bE = N(function ({ children: e }) {
        let t = uo(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = od(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Ie();
        return ee(_E.Provider, { value: t, children: [e, !n && M(wE, {})] });
      })),
      (xE = qS(
        bE,
        [
          `.${vE}, .${vE} * { cursor: none !important; }`,
          `.${yE}, .${yE} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (SE = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (CE = `data-framer-portal-id`),
      (wE = N(function () {
        let { onRegisterCursors: e } = u(_E),
          t = ad(!1),
          n = I(0),
          r = I(0),
          i = I(0),
          a = m(null),
          o = m({ cursors: {}, cursorHash: void 0 }),
          s = Ms();
        (P(() => {
          if (!t) return;
          let e = 0,
            c = 0;
          function l() {
            (n.set(e), r.set(c), ge(i, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (ut(o.current.cursors)) return;
            let t = ud(e, c);
            t !== o.current.cursorHash && ((o.current.cursorHash = t), L.update(() => s()));
          };
          function d(t) {
            if (t.pointerType === `touch`) {
              nt(u);
              return;
            }
            (L.read(u, !0), (e = t.clientX), (c = t.clientY), L.update(l));
          }
          function f(e) {
            if (e.target === a.current || !a.current) return;
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
            L.update(() => {
              a.current?.dispatchEvent(t);
            });
          }
          return (
            K.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            L.read(u, !0),
            () => {
              (K.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                nt(u));
            }
          );
        }, [i, n, r, s, t]),
          P(() => {
            if (!t) return;
            function e() {
              ge(i, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), K.removeEventListener(`blur`, e));
              }
            );
          }, [i, t]),
          D(() => {
            function t(e) {
              ((o.current.cursors = e),
                (o.current.cursorHash = ut(e) ? null : ud(n.get(), r.get())),
                s());
            }
            let i = e(t);
            return () => {
              (i(), document.body.classList.toggle(vE, !1));
            };
          }, [n, r, e, s]));
        let { cursors: c, cursorHash: l } = o.current,
          d = l ? c[l] : null,
          f = sd(d);
        D(() => {
          t && document.body.classList.toggle(vE, f);
        }, [f, t]);
        let p = d?.component,
          h = d?.transition ?? { duration: 0 },
          g = h.duration === void 0 ? h : { ...h, duration: h.duration * 1e3 },
          _ = Ze(n, g),
          v = Ze(r, g),
          y = ke(() => _.get() + (d?.offset?.x ?? 0)),
          b = ke(() => v.get() + (d?.offset?.y ?? 0)),
          x = d?.alignment,
          S = d?.placement,
          w = E((e, t) => `translate(${ld(S, x)}) ${t}`, [x, S]);
        return !t || !d || !p
          ? null
          : M(C, {
              children: M(p, {
                transformTemplate: w,
                style: { ...SE, x: y, y: b, opacity: i },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: a,
                className: yE,
              }),
            });
      })),
      (TE = `webPageId`),
      (EE = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (V(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((iy && !Kn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(pd(e), e), this.collectedLinks.set(pd(t), t));
          let n = this.nestingInfo.get(pd(e)) ?? new Set();
          (n.add(pd(t)), this.nestingInfo.set(pd(e), n));
        }
      }),
      (DE = new EE()),
      (OE = `element`),
      (kE = `collection`),
      (AE = `collectionItemId`),
      (jE = `pathVariables`),
      (ME = `framer/page-link,`),
      (NE = x(void 0)),
      (PE = `--text-selection-color`),
      (FE = `--text-selection-background-color`),
      (IE = qS(jd, (e, t) => Ad(t?.triggerId), `InjectSelectionStyle`)),
      (LE = {
        isClockwise: (e) => LE.signedArea(e) <= 0,
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
            if (Sa.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (Sa.isEqual(e[o], t)) return !0;
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
            r && i.push(MS(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(MS(e, r));
          });
          for (let e of i) for (let t of o) if (MS.intersection(e, t, !0)) return !0;
          return !!(LE.containsPoint(t, e[0]) || LE.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!LE.containsPoint(e, t[n])) return !1;
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
              let e = Md(c);
              if ((r.add(e), o.push(c), X.containsPoint(t, l))) continue;
            }
            let u = MS(c, l);
            n.forEach((e) => {
              let t = MS.intersection(u, e, !0);
              if (!t) return;
              let n = Md(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (X.points(t).forEach((t) => {
                LE.containsPoint(e, t) && (r.add(Md(t)), a.push(t));
              }),
              Sa.sortClockwise([...o, ...a]));
        },
      }),
      (RE = 5),
      (zE = 4),
      (BE = (() => {
        let e = r.createContext(new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (VE = `overlay`),
      (HE = `template-overlay`),
      (UE = r.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? M(e, { ...t, ref: n }) : null;
      })),
      (WE = class extends j {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((s.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(bt(ay ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          xn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (ay && document.getElementById(`main`)?.innerHTML) || ``;
          return M(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${bt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (KE = /:([a-z]\w*)/gi),
      (qE = x(void 0)),
      (JE = new Map()),
      (YE = 500),
      (XE = 500),
      (QE = !1),
      ($E = 500),
      (eD = 0.9),
      (tD = 1.7),
      (nD = 4),
      (rD = 1 / 0),
      (iD = new WeakMap()),
      (aD = new Set()),
      (oD = new Map()),
      (sD = !Ob || typeof IntersectionObserver > `u` ? null : Tf()),
      (cD = sf(
        k(function (
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
          let p = Vt(),
            m = Ut(),
            h = df(),
            { activeLocale: g, locales: _ } = fr(),
            v = Mf(),
            y = hr(),
            b = md(),
            x = Nf({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = f(() => {
              if (!t) return {};
              let e = fd(t) ? t : xd(t);
              if (!e) return {};
              if (z(e))
                return Uf(
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
              if (_t(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = cf(p, m, e, g, c, h),
                S = Df(n, !0),
                C = S === `_blank`,
                w = Hf(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = Lf(u, w, (e) =>
                  Ff(
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
                onClick: If(u, x, E),
                "data-framer-page-link-current": (m && ff(m, e, h)) || void 0,
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
            C = hc(w(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          gc(
            C,
            (e) => {
              if (!(e === null || !D || !E || !A || b))
                return sD?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b]
          );
          let M = !!T;
          return wd(
            Xl(d).cloneAsArray(e, (e) => Wf(e, { ...u, ...Kf(j, l, M) }, C)),
            c,
            s,
            t,
            S,
            C
          );
        })
      )),
      (lD = `framer`),
      (uD = 3),
      (dD = 30),
      (fD = 1e4),
      (pD = `__framer`),
      (mD = `3`),
      (hD = [
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
      (gD = Date.now()),
      (_D = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (vD = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (yD = () => ((Date.now() - gD) / 1e3).toFixed(2)),
      (bD = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          r.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          r.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = yD())),
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
                    (r.inputChangeTimeSinceModuleLoad = yD()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = yD()));
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
          M(`input`, {
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
      (xD = { state: `pending` }),
      (SD = { state: `success` }),
      (CD = { state: `incomplete` }),
      (wD = { state: `complete` }),
      (TD = { state: `error` }),
      (ED = r.createContext(void 0)),
      (DD = r.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: l,
          ...d
        },
        f
      ) {
        let p = r.useRef(null),
          m = f ?? p,
          {
            states: h,
            convertHoneypotFieldsForSubmission: g,
            replaceHoneypotWithMetadata: _,
          } = tp(),
          v = Vt(),
          y = Ut(),
          b = df(),
          x = Mn(),
          [S, C] = r.useReducer(ap, CD),
          { activeLocale: w, locales: T } = fr(),
          E = u(ED),
          D = r.useRef({ onSuccess: i, onError: a, onLoading: o });
        D.current = { onSuccess: i, onError: a, onLoading: o };
        let O = r.useRef(!1);
        async function k(e) {
          if (z(e)) {
            let t = lf(v, e, b, T);
            if (!t) {
              cp(e, m);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            v.navigate?.(n, r, i);
            return;
          }
          V(
            fd(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Af(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, x),
            { routeId: n, elementId: r, pathVariables: i } = cf(v, y, e, w, t, b);
          v.navigate?.(n, r, i);
        }
        let A = async (t) => {
            if ((t.preventDefault(), !e || !E || O.current)) return;
            ((O.current = !0), g());
            let r = new FormData(t.currentTarget),
              i = Zf(t.currentTarget);
            (await xb({ priority: `user-visible`, continueAfter: `paint` }),
              _(r),
              c(() => C({ type: `submit` })),
              ep(r, K.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (D.current.onLoading?.(),
                rp({ router: v, nodeId: l, submitTrackingId: s, activeLocale: w }),
                await up(e, r, i, E),
                c(() => C({ type: `success` })),
                D.current.onSuccess?.(),
                n && (await k(n)));
            } catch (e) {
              (c(() => C({ type: `error` })), D.current.onError?.(), console.error(e));
            }
            O.current = !1;
          },
          j = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), A(e)));
          },
          N = async (e) => {
            let t = e.currentTarget;
            (await xb({ priority: `background`, continueAfter: `paint` }),
              c(() => C({ type: lp(t) ? `incomplete` : `complete` })));
          },
          P = r.useMemo(() => t(S), [t, S]);
        return ee(R.form, {
          ...d,
          onSubmit: op(S) ? A : sp,
          onKeyDown: j,
          onChange: N,
          ref: m,
          children: [P, M(np, { states: h })],
        });
      })),
      (OD = `__framer_force_showing_editorbar_since`),
      (kD = class extends j {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (AD = () => {
        try {
          return !!localStorage[OD];
        } catch {
          return !1;
        }
      }),
      (jD = () => !AD()),
      (MD = (() => {
        let e = x(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (ND = null),
      (PD = null),
      sy(_p),
      (FD = (e, t, n, r, i, a) => {
        let o = u(ED),
          c = m(),
          l = Mn(),
          d = m(!0);
        return (
          P(() => {
            function u() {
              (!ND || !PD) && _p();
              let s = n ? new URL(n, K.location.href) : K.location,
                c = {
                  version: Gy,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: ND,
                  locale: PD,
                },
                u = d.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = u ?? null;
                    if (u === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && z(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (_t(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = u()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                d.current ? (d.current = !1) : xn(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = u()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), xn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              s.addEventListener(`pageshow`, f),
              () => {
                s.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, t, n, r, i, o, l, a]),
          c
        );
      }),
      (ID = 0),
      (LD = 500),
      (RD = 200),
      (zD = `main`),
      (BD = `framerGeneratedPage`),
      (VD = `<!-- Start of headStart -->`),
      (HD = `<!-- End of headStart -->`),
      (UD = `<!-- Start of headEnd -->`),
      (WD = `<!-- End of headEnd -->`),
      (GD = `<!-- Start of bodyStart -->`),
      (KD = `<!-- End of bodyStart -->`),
      (qD = `<!-- Start of bodyEnd -->`),
      (JD = `<!-- End of bodyEnd -->`),
      (YD = r.createContext(void 0)),
      (XD = { status: `loading`, data: void 0 }),
      (ZD = 5e3),
      (QD = () => {}),
      ($D = class e {
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
          let t = um(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = um(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
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
              mm(r, i) ||
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
        persistCache = Ul(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && mm(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Un() || !gd(e.url, !1)) return;
          let t = um(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = pm(n, e);
          return (e.resultOutputType === `image` && z(i) && (await sm(i).catch(QD)), i);
        }
        async fetchWithCache(e) {
          if (!Un()) return;
          let t = um(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && mm(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, XD);
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
          if (!gd(r, !1)) return QD;
          let a = um(e),
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
      (eO = x(void 0)),
      (tO = x(!0)),
      (nO = ({ children: e, client: t }) => {
        let [n] = F(() => t ?? new $D()),
          [r, i] = F(!0);
        return (
          P(
            () => (
              n.hydrateCache(),
              c(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          M(tO.Provider, { value: r, children: M(eO.Provider, { value: n, children: e }) })
        );
      }),
      (rO = (() => {
        let e = x(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Xe.WillChange = Ae),
      (iO = sf(
        k(function ({ links: e, children: t, ...n }, r) {
          return Xl(r)(t(_m((t) => e.map(t), [e])), n);
        })
      )),
      (aO = { priority: void 0, canYield: !0 }),
      (oO = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Im(e, t);
            case `boolean`:
              return Rm(e);
            case `color`:
              return Vm(e);
            case `date`:
              return Um(e);
            case `enum`:
              return Gm(e);
            case `file`:
              return qm(e);
            case `link`:
              return Ym(e);
            case `number`:
              return Zm(e);
            case `object`:
              return eh(e, t);
            case `responsiveimage`:
              return nh(e);
            case `richtext`:
              return ih(e);
            case `string`:
              return ch(e);
            case `vectorsetitem`:
              return oh(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return st(e)
            ? { type: `boolean`, value: e }
            : mt(e)
              ? { type: `date`, value: e.toISOString() }
              : ct(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : lt(e)
                    ? { type: `array`, value: e.map(oO.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && uh(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && uh(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && uh(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && uh(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && uh(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => oO.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => oO.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = lh(e),
            i = lh(t);
          return ft(r) || ft(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = lh(e),
            i = lh(t);
          return ft(r) || ft(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = lh(e),
            i = lh(t);
          return ft(r) || ft(i)
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
              return `[${e.value.map(oO.stringify).join(`, `)}]`;
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
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (sO = { type: `unknown`, isNullable: !0 }),
      (cO = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = gl(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
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
            if (pt(i)) continue;
            let a = this.schema[t];
            if (!dt(a)) {
              if ((V(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await dh(this.collection, this.locale))[t]?.[n];
          return wy.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await dh(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Sm(e);
            i && (await i);
            let a = t[r];
            V(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await dh(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Sm(t);
            e && (await e);
            let a = n[Number(i)];
            (V(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (lO = new Map()),
      (uO = new WeakMap()),
      (dO = `$r_`),
      (fO = new Map()),
      (pO = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = wh(e, t)), (this.priority = vh(n)));
        }
        *resolveArrayValue(e) {
          return yield* Dm(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Em(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          V(xh(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          V(n, `Can't find collection for rich text pointer`);
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
          return gt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(Ch(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (V(n, `Can't find collection for vector set item pointer`),
            V(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
          return gt(t) ? yield t : t;
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
      (mO = `index`),
      (hO = class extends Set {
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
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (gO = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new vO();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (_O = class {
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
      (vO = class extends hO {
        name = `Indexes`;
      }),
      (yO = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
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
                V(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: bh(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                V(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Sh(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends hO {
        name = `Fields`;
      }),
      (bO = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (xO = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== mO) return !1;
          return !0;
        }
      }),
      (SO = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (CO = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (V(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (V(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new xO();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new SO(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (V(e, `Field must exist`), e.field);
        }
      }),
      (wO = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = Oh(),
            i = kh(),
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
      (TO = class {
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
      (EO = class e {
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
      (DO = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (OO = class extends DO {
        group;
        getGroup() {
          return (V(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (V(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Cm(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return wm(this.evaluate(void 0), void 0, e);
        }
      }),
      (kO = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (AO = class e extends OO {
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
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
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
          return new SO(e.ordering, t);
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
            i = this.projections.map((e) => new kO(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Dm(
              n.tuples.map((t) =>
                Dm(
                  this.projections.map((n) => Em({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new TO();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (jO = { type: 0 }),
      (MO = class extends DO {
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
          return Cm(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return wm(this.evaluate(void 0, void 0));
        }
      }),
      (NO = { type: 0 }),
      (PO = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (FO = class e extends MO {
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
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new PO(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Em({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Dm(
              this.conditions.map((n) =>
                Em({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (oO.equal(n, e, NO)) return t;
          } else for (let { when: e, then: t } of r) if (zm(e)) return t;
          return i;
        }
      }),
      (IO = class {
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
          let e = new CO();
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
            o = new xO();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (dt(t)) continue;
                a.add(t.field);
                let r = new bO(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new yO(Dh(this.fieldId++), void 0, t.definition, void 0),
                  a = new kO(t, r);
                i.push(a);
                let s = new bO(r, e.direction);
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
              if (dt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = Dh(this.fieldId++),
                a = n.alias,
                s = new yO(r, a, t.definition, void 0),
                c = new kO(t, s);
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
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = hh(t.data, this.locale),
            i = t.alias,
            a = new gO(Th(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new yO(Dh(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new yO(Dh(this.fieldId++), mO, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: mO, collectionName: i });
            let t = new xO(),
              r = new bO(e);
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
            let i = new xO(),
              o = new _O(Eh(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new xO(),
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
              H(t.type, `Unsupported join type`);
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
              H(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(sO, null);
        }
        buildLiteralValue(e) {
          let t = oO.parse(e.value);
          return this.normalizer.newScalarConstant(sO, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (V(r, `Missing argument`), this.buildExpression(e, r));
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
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              H(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new LO(e);
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
            let n = new LO(e);
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
              (t) => new PO(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              H(t.operator, `Unsupported unary operator`);
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
              H(t.operator, `Unsupported binary operator`);
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
      (LO = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (RO = class e extends OO {
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
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          return (t.merge(this.predicate.referencedFields), new SO(e.ordering, t));
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
            n = yield* Dm(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => zm(n[t] ?? null));
        }
      }),
      (zO = class e extends OO {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return $.estimate(1, e ? 100 * wO : 50 * wO);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, bm()),
            i = bm(),
            a = [];
          for (let n of r) {
            let r = Sm(i);
            r && (yield r);
            let o = new TO();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new EO(n, a);
        }
      }),
      (BO = class e extends OO {
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
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
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
          return new SO(new xO(), e.resolvedFields);
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
          let { left: t, right: n } = yield* Em({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (VO = class e extends OO {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return G(`RelationalScan`, this.collection.id);
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
          return $.estimate(1, 200 * wO);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(bm()),
            r = bm(),
            i = [];
          for (let a of n) {
            let n = Sm(r);
            n && (yield n);
            let o = new TO();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new EO(t, i);
        }
      }),
      (HO = class e extends OO {
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
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
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
          return new SO(new xO(), e.resolvedFields);
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
          let { left: t, right: n } = yield* Em({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (UO = class e extends MO {
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
          return G(`ScalarAnd`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: zm(n) && zm(r) };
        }
      }),
      (WO = class extends MO {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
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
      (GO = { type: 0 }),
      (KO = class e extends MO {
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
          return G(`ScalarContains`, this.source, this.target);
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
          let { source: n, target: r } = yield* Em({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.contains(n, r, GO) };
        }
      }),
      (qO = { type: 0 }),
      (JO = class e extends MO {
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
          return G(`ScalarEndsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* Em({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.endsWith(n, r, qO) };
        }
      }),
      (YO = class e extends MO {
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
          return G(`ScalarEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.equal(n, r, jO) };
        }
      }),
      (XO = class e extends MO {
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
          return G(`ScalarGreaterThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.greaterThan(n, r, jO) };
        }
      }),
      (ZO = class e extends MO {
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
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.greaterThanOrEqual(n, r, jO) };
        }
      }),
      (QO = class e extends MO {
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
          return G(`ScalarLessThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.lessThan(n, r, jO) };
        }
      }),
      ($O = class e extends MO {
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
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.lessThanOrEqual(n, r, jO) };
        }
      }),
      (ek = class e extends MO {
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
          return G(`ScalarNotEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !oO.equal(n, r, jO) };
        }
      }),
      (tk = class e extends MO {
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
          return G(`ScalarOr`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: zm(n) || zm(r) };
        }
      }),
      (nk = { type: 0 }),
      (rk = class e extends MO {
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
          return G(`ScalarStartsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* Em({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.startsWith(n, r, nk) };
        }
      }),
      (ik = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof RO) {
            if (e.predicate instanceof UO) {
              let n = new BO(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof tk) {
              let n = new HO(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof VO)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new zO(n, Ah(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof RO) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof VO)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof YO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WO &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ek &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WO &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WO &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $O &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WO &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof XO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WO &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ZO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WO &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KO &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof WO &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof rk &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof WO &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof JO &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof WO &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Ah(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new zO(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (ak = class {
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
          let r = new ok();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (ok = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (sk = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (ck = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new ak(jh(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new sk(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            V(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (lk = class e extends OO {
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
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
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
          return new SO(new xO(), n);
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
          let o = new EO(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new TO();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Em({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof YO) {
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
          let r = new EO(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new TO();
              (n.merge(i),
                n.merge(a),
                zm(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (uk = class e extends OO {
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
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          return (t.merge(this.limit.referencedFields), new SO(this.ordering, t));
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
          let { input: t, limit: n } = yield* Em({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Qm(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (dk = class e extends OO {
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
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          return (t.merge(this.offset.referencedFields), new SO(this.ordering, t));
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
          let { input: t, offset: n } = yield* Em({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Qm(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (fk = class e extends MO {
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
          return G(
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
          for (let n of t) dt(n.collection) || e.add(n);
          return new SO(this.ordering, e);
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
          let n = new TO();
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
      (pk = class e extends MO {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            V(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
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
          return oO.cast(n, this.definition);
        }
      }),
      (mk = class e extends MO {
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
          return G(
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
          return (dt(this.field.collection) || e.add(this.field), new SO(this.ordering, e));
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
          let n = new TO();
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
      (hk = { type: 0 }),
      (gk = class e extends MO {
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
          return G(`ScalarIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oO.in(n, r, hk) };
        }
      }),
      (_k = { type: 1 }),
      (vk = class e extends MO {
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
          return G(`ScalarIndexOf`, this.source, this.target);
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
          let { source: n, target: r } = yield* Em({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: oO.indexOf(n, r, _k) };
        }
      }),
      (yk = class extends Error {}),
      (bk = class e extends MO {
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
          return G(`ScalarIntersection`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Nh(n),
            a = Nh(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (xk = class e extends MO {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return G(`ScalarLength`, this.input);
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
          return { type: `number`, value: oO.length(n) };
        }
      }),
      (Sk = class e extends MO {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !zm(yield* this.input.evaluate(e, t)) };
        }
      }),
      (Ck = { type: 0 }),
      (wk = class e extends MO {
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
          return G(`ScalarNotIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* Em({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !oO.in(n, r, Ck) };
        }
      }),
      (Tk = class extends MO {
        constructor(e, t) {
          V(e.name !== mO, `Invalid field name`);
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
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (Ek = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new VO(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new zO(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new lk(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof WO && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof lk && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new RO(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new AO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof AO &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new uk(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new dk(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof WO) &&
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
          let n = new Tk(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new WO(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof Sk)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof YO) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof ek) return this.newScalarEquals(e.left, e.right);
          if (e instanceof QO) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof $O) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof XO) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof ZO) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof UO) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof tk) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new Sk(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof WO && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof WO && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof WO && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof WO && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new UO(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof WO && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof WO && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof WO && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof WO && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new tk(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof Tk;
          if (t instanceof Tk && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new YO(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof Tk;
          if (t instanceof Tk && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ek(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof Tk;
          if (t instanceof Tk && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new QO(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof Tk;
          if (t instanceof Tk && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new $O(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof Tk;
          if (t instanceof Tk && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new XO(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof Tk;
          if (t instanceof Tk && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ZO(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new gk(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new wk(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new PO(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new FO(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new KO(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new rk(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new JO(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new xk(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new vk(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new fk(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new mk(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new bk(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new pk(e, t);
          return this.finishScalar(n);
        }
      }),
      (Dk = class extends OO {}),
      (Ok = class e extends Dk {
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
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          return new SO(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * wO).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            V(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Ph(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                V(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new TO();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (V(s, `Item not found`), V(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (kk = { type: 0 }),
      (Ak = class e extends Dk {
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
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
            e.name !== mO && (dt(e.collection) || t.add(e));
          return new SO(new xO(), t);
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
              if (n.name === mO) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!oO.equal(a, o, kk)) {
                if (ft(a) || oO.lessThan(a, o, kk)) return i ? -1 : 1;
                if (ft(o) || oO.greaterThan(a, o, kk)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (jk = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new ck();
        normalizer = new Ek(this.memo);
        explorer = new ik(this.normalizer);
        optimize(e) {
          let t = new IO(this.normalizer, this.query, this.locale).build(),
            n = Sm(e);
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
          (V(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new Ok(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new Ak(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (Mk = vm(`query-engine`)),
      (Nk = class {
        async evalQuery(e, t, n, r) {
          Mk.enabled &&
            Mk.debug(`Query:
${qh(e)}`);
          let i = new pO(e, t, r),
            a = new jk(e, t, i),
            o = Sm(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = _t(s) ? await s : s,
            u = Sm(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Sm(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Em(a, r)));
          }
          let h = Tm(Dm(m, r), r);
          return n ? [_t(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new pO(t, n, r);
          return Tm(
            Dm(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Em(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (Pk = qy.QueryCache),
      (Fk = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = Xy === void 0 ? void 0 : new Map();
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
          let r = Xh(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = yh(n) ?? `user-visible`,
              o = yh(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && er(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              Xy !== void 0 &&
                this.serializedCache !== void 0 &&
                !fh(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && Xy.set(Pk, r, e);
            }
            return i.value;
          }
          let a = new wy(() => {
            let i = fh(r),
              a = i ? void 0 : Dn(Pk, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                Tn(e, r);
              }
            return Xy !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), Xy.set(Pk, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (Ik = new Fk(new Nk())),
      (Lk = `style[data-framer-breakpoint-css]`),
      (Rk = new Map()),
      (zk = `page`),
      (Bk = Symbol(`cycle`)),
      (Uk = (() => {
        let e = x(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (Wk = (() => {
        let e = x(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (Gk = (e, t, n, r, i) => ({
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
      (Kk = Gk(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (qk = Gk(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (Jk = {
        ...Kk,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Jg(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += Jg(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (Yk = { start: `flex-start`, end: `flex-end` }),
      (Xk = k(i_)),
      (Zk = { start: 0, end: 0 }),
      (Qk = { display: `flex`, position: `relative` }),
      ($k = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (eA = { duration: 0.2, ease: `linear` }),
      (tA = (() => {
        let e = x(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (nA = { type: `spring`, stiffness: 200, damping: 40 }),
      (rA = { type: `spring`, stiffness: 80, damping: 10 }),
      (iA = { height: `100%`, width: `100%` }),
      (aA = k(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: o,
            carouselEffectYOverflow: s,
            carouselEffectOverflow: c,
            carouselEffectLoop: l,
            carouselEffectAutoPlay: u,
            carouselEffectInterval: d,
            carouselEffectSnap: p,
            carouselEffectControls: m,
            as: h,
            ...g
          } = e,
          _ = ho(),
          v = r?.startsWith(`column`) ? `y` : `x`,
          y = (v === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          b = x_(a, v),
          x = p === !0 ? `page` : p,
          S = Hg(n);
        return M(
          f(() => R.create(h), [h]),
          {
            ...g,
            ref: t,
            children: ee(v_, {
              axis: v,
              align: i ?? `center`,
              gap: b,
              isStatic: _,
              itemSize: `manual`,
              overflow: y,
              loop: l,
              snap: x,
              items: S,
              style: iA,
              children: [u && M(b_, { intervalSeconds: d ?? 1.5 }), m],
            }),
          }
        );
      })),
      (oA = k(function (e, t) {
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
          m = ho(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return M(Xk, {
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
      (sA = k(function (e, t) {
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
          h = mr() === `rtl` && o === `x` ? -1 : 1,
          g = (d === `paused` ? 0 : (i ?? 100)) * s * h,
          _ = I(0),
          v = m(0),
          y = m(!1),
          b = m(!1),
          x = m(!1),
          S = (e) => {
            x.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          qe((e, t) => {
            let n = Math.abs(_.getVelocity()),
              r = b.current ? g * c : g;
            if (performance.now() > v.current && (!y.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = _.get() - e;
              ((y.current &&= (_.stop(), !1)), _.set(n));
            }
          }),
          P(() => {
            d === `paused` && _.stop();
          }, [d, _]),
          M(Xk, {
            ref: t,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? _ : void 0,
            _dragY: o === `y` ? _ : void 0,
            offset: _,
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
      (cA = (() => {
        let e = x(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (lA = ({ onPlayStateChange: e, children: t }) => {
        let n = f(
          () => ({ start: () => c(() => e(`running`)), stop: () => c(() => e(`paused`)) }),
          [e]
        );
        return M(cA.Provider, { value: n, children: t });
      }),
      (uA = k(function (e, t) {
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
          h = ho(),
          [g, _] = F(`running`),
          v = i?.startsWith(`column`) ? `y` : `x`,
          y = l === `reverse` ? -1 : 1,
          b = U(u) ? u / 100 : 1,
          x = (v === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          S = S_(c, v),
          C = Hg(n),
          w = { ...p, "--ticker-cms-total-children": f ? C.length : void 0, position: d };
        return h || !r
          ? M(lA, {
              onPlayStateChange: _,
              children: M(oA, {
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
          : M(lA, {
              onPlayStateChange: _,
              children: M(sA, {
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
      (dA = (e) => (t) => {
        let { carouselEffectProps: n, tickerEffectProps: r, domProps: i } = w_(t);
        return t.carouselEffectEnabled
          ? M(aA, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? M(uA, { ...r, ...i, as: e })
            : M(e, { ...i });
      }),
      (fA = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (pA = { inputRange: [], outputRange: [] }),
      (mA = (e) =>
        r.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return M(e, { ...t, ref: n });
          let [i, a] = ql(t, fA),
            {
              visibleVariantId: o,
              obscuredVariantId: s,
              animateOnce: c,
              threshold: l,
              variantAppearEffectEnabled: u,
              targets: d,
              exitTarget: f,
              scrollDirection: p,
            } = i,
            [m, h] = r.useState(s),
            g = r.useRef(!1),
            _ = hc(n);
          yc(
            _,
            (e) => {
              i.targets ||
                i.scrollDirection ||
                (c && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  r.startTransition(() => {
                    h(e ? o : s);
                  })));
            },
            { enabled: u, animateOnce: c, threshold: { y: l } }
          );
          let v = Wt(),
            y = r.useRef(v);
          return (
            r.useEffect(() => {
              if (p || !d) return;
              y.current !== v && ((y.current = v), r.startTransition(() => h(s)));
              let e = {},
                t;
              return ne((n, { y: i }) => {
                if (!d[0] || (d[0].ref && !d[0].ref.current)) return;
                let { inputRange: a, outputRange: o } = T_(d, (l ?? 0) * i.containerLength, f);
                if (a.length === 0 || a.length !== o.length) return;
                let s = Math.floor(ve(i.current, a, o));
                if (c && e[s]) return;
                e[s] = !0;
                let u = d[s]?.target ?? void 0;
                u !== t &&
                  ((t = u),
                  r.startTransition(() => {
                    h(u);
                  }));
              });
            }, [v, c, l, d, t.variant, p, f]),
            yu(p, (e) => r.startTransition(() => h(e)), { enabled: u, repeat: !c }),
            Gt(() => {
              if (!u) return;
              let e = !i.targets && !i.scrollDirection ? i.obscuredVariantId : void 0;
              r.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in i) || u === !0
              ? M(e, { ...a, variant: m ?? t.variant, ref: _ })
              : M(e, { ...a })
          );
        })),
      (hA = r.createContext(void 0)),
      (gA = () => r.useContext(hA)),
      it(ny(), 1),
      (_A = (e) => e.target.value),
      (vA = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (yA = k(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: l,
            min: u,
            placeholder: d,
            required: f,
            step: p,
            style: m,
            type: h,
            maxLength: g,
            value: _,
            defaultValue: v,
            autofillEnabled: y,
            onChange: b,
            onBlur: x,
            onInvalid: S,
            onFocus: C,
            onValid: w,
            onClear: T,
            ...D
          } = e,
          O = D_(_ ?? v, h),
          [k, A, j] = E_(O ?? ``, !0, b),
          N = zi(O),
          P = E(() => {
            (A(``), T && c(() => T()));
          }, [T, A]),
          F = gs(w, S, j, x, C),
          I = E(
            (e) => {
              e.target === e.currentTarget && N.current?.focus();
            },
            [N]
          );
        if (h === `hidden`) return M(R.input, { type: `hidden`, name: s, defaultValue: v });
        let te = y === !1 ? vA : void 0,
          ne = !!k,
          re = !!T && ne,
          ie = Kl(bA, aC, o, h === `text` && xA, h === `textarea` && SA);
        return ee(R.div, {
          ref: t,
          onClick: I,
          style: m,
          className: ie,
          ...D,
          children: [
            h === `textarea`
              ? M(R.textarea, {
                  ref: N,
                  ...te,
                  ...F,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: iC,
                  value: k,
                  maxLength: g,
                })
              : M(R.input, {
                  ref: N,
                  ...te,
                  ...F,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: h,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Kl(iC, !ne && oC),
                  value: k,
                  min: u,
                  max: l,
                  step: p,
                  maxLength: g,
                }),
            re &&
              M(`button`, {
                type: `button`,
                className: CA,
                onClick: P,
                "aria-label": `Clear`,
                children: M(O_, {}),
              }),
          ],
        });
      })),
      (bA = `framer-form-text-input`),
      (xA = `framer-form-text-input-type`),
      (SA = `framer-form-textarea-input-type`),
      (CA = `framer-form-text-input-clear`),
      (wA = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (TA = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (EA = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (DA = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (OA = qS(
        yA,
        [
          ...cC,
          ...dC,
          ...lC,
          Z(`.${aC}`, {
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
          Z(`.${bA} .${iC}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${bA}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${bA} .${iC}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${bA}.${SA}`, { padding: 0 }),
          Z(`.${bA}.${SA} textarea.${iC}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${bA} .${iC}[type="date"], .${bA} .${iC}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${bA} .${iC}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${bA} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${bA} textarea::-webkit-resizer`, { background: `no-repeat ${vt(wA)}` }),
          Z(`.${bA}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${vt(TA)}` }),
          Z(`.${bA} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${bA} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${bA} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${bA} .${iC}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${bA} .${iC}.${oC}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${bA}.${xA}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${gC}px`,
            height: `${gC}px`,
            marginRight: `${hC}px`,
            ..._C,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${bA} .${iC}[type="date"]::before, .${bA} .${iC}[type="time"]::before`, {
            ...vC,
            paddingLeft: `${mC}px`,
            maskPosition: `${mC}px center`,
            backgroundPosition: `${mC}px center`,
          }),
          Z(`.${bA} .${iC}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, vt(EA)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${bA} .${iC}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, vt(DA)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${bA} .${iC}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${gC}px`,
            height: `100%`,
          }),
          Z(`.${bA}:focus-within, .${bA}.${sC}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${bA}:focus-within::after, .${bA}.${sC}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, uC),
          }),
          Z(`.${CA}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${gC}px`,
            height: `${gC}px`,
            marginLeft: `${hC}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${CA}:hover, .${CA}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (kA = {
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
      (AA = { opacity: 0 }),
      (jA = { opacity: 1 }),
      (MA = z_(
        r.forwardRef(function (e, t) {
          let {
              background: n,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: l,
              ...u
            } = e,
            d = { ...l },
            p = f(() => cs(n), [n]),
            [m, h] = F();
          r.useEffect(() => {
            if (!n?.src || !s || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                c(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, p]);
          let g = p ?? m;
          return (
            s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            ee(ls(e.as), {
              ...u,
              style: d,
              ref: t,
              draggable: o,
              children: [n && M(Ao, { image: n, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (PA = !Hn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (FA =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (IA = `{{ text-placeholder }}`),
      (LA = `rich-text-wrapper`),
      (RA = Ts(
        k(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: c = [],
              width: l,
              height: d,
              left: p,
              right: h,
              top: g,
              bottom: _,
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
              positionStickyTop: k,
              positionStickyRight: A,
              positionStickyBottom: j,
              positionStickyLeft: ee,
              __htmlStructure: N,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: I,
              _forwardedOverrides: te,
              _usesDOMRect: ne,
              children: re,
              ...ie
            } = e,
            L = ts(),
            ae = js(e),
            oe = m(null),
            se = t ?? oe,
            { navigate: ce, getRoute: le } = Vt(),
            ue = Ut();
          (gr(e.preload ?? []), Ls(e, se));
          let de = u(LC),
            fe = md(),
            pe = o,
            me = I ?? n;
          if (me && te) {
            let e = te[me];
            typeof e == `string` && (pe = e);
          }
          let he = ``;
          if (pe) {
            let e = V_(pe);
            he = N ? N.replace(IA, e) : `<p>${e}</p>`;
          } else if (i) he = i;
          else if (s) {
            let e = V_(s);
            he = N ? N.replace(IA, e) : `<p>${e}</p>`;
          } else a && (he = a);
          let ge = df(),
            _e = f(() => (fe || !le || !ue ? he : H_(he, le, ue, ge)), [he, le, ue, ge]);
          if (
            (P(() => {
              let e = se.current;
              if (e === null) return;
              function t(e) {
                let t = af(e.target, se.current);
                Xn(e) ||
                  !ce ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (bd(ce, t, ge) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ce, ge]),
            G_(c, F, se),
            !x)
          )
            return null;
          let ve = T && E() === Y.canvas,
            ye = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: W_(w),
              opacity: ve ? 0 : S,
              flexShrink: 0,
            },
            be = Y.hasRestrictions(),
            xe = Qo(e, L || 0, !1),
            Se = ne && (l === `auto` || d === `auto`),
            Ce = !!e.transformTemplate || !xe || !be || F || Se,
            we = Ce ? (e.transformTemplate ?? As(v)) : void 0;
          if (!D) {
            if (xe && be && !Se) {
              let e = q.getNumber(C).toFixed(4);
              ((ye.transform = `translate(${xe.x}px, ${xe.y}px) rotate(${e}deg)`),
                (ye.width = xe.width),
                (ye.minWidth = xe.width),
                (ye.height = xe.height));
            } else
              ((ye.left = p),
                (ye.right = h),
                (ye.top = g),
                (ye.bottom = _),
                (ye.width = l),
                (ye.height = d),
                (ye.rotate = C));
            O
              ? (!fe || de) &&
                ((ye.position = `sticky`),
                (ye.willChange = `transform`),
                (ye.top = k),
                (ye.right = A),
                (ye.bottom = j),
                (ye.left = ee))
              : fe && (e.positionFixed || e.positionAbsolute) && (ye.position = `absolute`);
          }
          return (
            Nl(e, ye),
            kl(e, ye),
            Object.assign(ye, e.style),
            M(R.div, {
              id: n,
              ref: se,
              ...ie,
              ...Ds(Ce ? v : void 0, e.style),
              style: ye,
              layoutId: ae,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: Kl(y, b, LA),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (zA = {
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
      (BA = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (VA = k(function (e, t) {
        return M(`svg`, { ...e, ref: t, children: e.children });
      })),
      (HA = R.create(VA)),
      (UA = k(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return M(HA, {
          ...r,
          ref: i,
          viewBox: t,
          children: M(R.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (WA = []),
      (GA = `RichTextContainer`),
      (KA = k(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: c,
            center: l,
            children: d,
            environment: p = Y.current,
            fonts: h = WA,
            height: g,
            isEditable: _ = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: C,
            positionStickyRight: w,
            positionStickyTop: T,
            right: E,
            rotation: D = 0,
            style: O,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: j,
            top: ee,
            verticalAlignment: N = `top`,
            visible: P = !0,
            width: F,
            withExternalLayout: I = !1,
            viewBox: te,
            viewBoxScale: ne = 1,
            effect: re,
            ...ie
          } = e,
          L = ts(),
          ae = p(),
          oe = ae === Y.canvas,
          se = oe || ae === Y.export,
          ce = u(LC),
          le = js(e),
          ue = m(null),
          de = t ?? ue;
        (Ls(e, de), G_(h, n, de));
        let fe = ev(re, de),
          pe = f(() => {
            if (d) return cv(d, A, j, o, void 0, fe.getTokenizer());
          }, [d, A, j, o, fe]);
        if (!P) return null;
        let R = { opacity: _ && oe ? 0 : b },
          me = W_(N);
        me !== SC.justifyContent && (R.justifyContent = me);
        let he = {},
          ge = Y.hasRestrictions(),
          _e = Qo(e, L || 0, !1),
          ve = a && (F === `auto` || g === `auto`),
          ye = !!e.transformTemplate || !_e || !ge || n || ve,
          be = ye ? (e.transformTemplate ?? As(l)) : void 0;
        (I ||
          (_e && ge && !ve
            ? ((he.x = _e.x + (ct(O?.x) ? O.x : 0)),
              (he.y = _e.y + (ct(O?.y) ? O.y : 0)),
              (he.left = 0),
              (he.top = 0),
              (R.rotate = q.getNumber(D)),
              (R.width = _e.width),
              (R.minWidth = _e.width),
              (R.height = _e.height))
            : ((R.left = v),
              (R.right = E),
              (R.top = ee),
              (R.bottom = c),
              (R.width = F),
              (R.height = g),
              (R.rotate = D)),
          x
            ? (!se || ce) &&
              ((R.position = `sticky`),
              (R.willChange = `transform`),
              (R.top = T),
              (R.right = w),
              (R.bottom = S),
              (R.left = C))
            : oe && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`)),
          Nl(e, R),
          kl(e, R),
          Object.assign(R, k, O, he),
          le && (ie.layout = `preserve-aspect`));
        let xe = ls(e.as),
          Se = ie[`data-framer-name`] ?? y,
          Ce = oe ? av(gS(ie)) : ie,
          we = Ds(ye ? l : void 0, O);
        return z(e.viewBox)
          ? e.as === void 0
            ? M(UA, {
                ...Ce,
                ...we,
                ref: de,
                style: R,
                layoutId: le,
                viewBox: te,
                viewBoxScale: ne,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": GA,
                children: pe,
              })
            : M(xe, {
                ...Ce,
                ...we,
                ref: de,
                style: R,
                layoutId: le,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": GA,
                children: M(UA, {
                  viewBox: te,
                  viewBoxScale: ne,
                  style: { width: `100%`, height: `100%` },
                  children: pe,
                }),
              })
          : M(xe, {
              ...Ce,
              ...we,
              ref: de,
              style: R,
              layoutId: le,
              transformTemplate: be,
              "data-framer-name": Se,
              "data-framer-component-type": GA,
              children: pe,
            });
      })),
      (qA = Ts(
        k(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              B(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return M(RA, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return M(KA, { ...r, ref: i, children: w(a) ? a : void 0 });
        })
      )),
      (JA = `framer/asset-reference,`),
      (YA = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = xv(t);
        return M(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: M(
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
      (XA = Un()),
      (ZA = class {
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
      (QA = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      ($A = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(GC(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Cv(e);
            (s &&
              (t && wv(s, n),
              (s.id = n),
              (o = kv(s)),
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
          XA && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = QA),
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
          XA && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new ZA(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !XA) ||
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
                        XA && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${QA}" aria-hidden="true">`),
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
      (ej = new $A()),
      (tj = {
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
      (nj = k(function (e, t) {
        let n = ts(),
          i = js(e),
          a = r.useRef(null),
          o = t ?? a,
          s = gA();
        return (
          Ls(e, a),
          M(ij, { ...e, innerRef: o, parentSize: n, layoutId: i, providedWindow: s })
        );
      })),
      (rj = 5e4),
      (ij = class e extends WC {
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
        static defaultProps = { ...WC.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Qo(e, e.parentSize || 0);
        }
        container = r.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Qo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (ej.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Nv(this.container, this.props);
        }
        componentWillUnmount() {
          (ej.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (jS.isImageObject(t) &&
            jS.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            Hs(this.svgElement, `fill`, null, !1),
            Nv(this.container, this.props));
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
            c = q.getNumber(r);
          if (
            ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1), Y.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Yo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = cS;
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
            xl(this.props, C),
            Nl(this.props, C),
            WC.applyWillChange(this.props, C, !1));
          let T = null;
          if (typeof r == `string` || J.isColorObject(r)) {
            let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
            ((C.fill = e), (C.color = e));
          } else if (QC.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${QC.hash(t)}`;
            C.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = pv(t, b);
            T = M(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: M(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  M(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (ew.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${ew.hash(t)}`;
            C.fill = `url(#${n})`;
            let i = mv(t, b);
            T = M(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: M(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  M(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (jS.isImageObject(r)) {
            let e = yv(r, S, b);
            e &&
              ((C.fill = `url(#${e.id})`),
              (T = M(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: M(`defs`, { children: M(YA, { ...e }) }),
              })));
          }
          let E = { "data-framer-component-type": `SVG` },
            D = !x;
          Object.assign(E, Ds(D ? this.props.center : void 0, this.props.style));
          let k =
              !v &&
              !T &&
              !C.fill &&
              !C.background &&
              !C.backgroundImage &&
              i.length < rj &&
              !Av(i) &&
              !jv(i),
            A = null;
          if (k)
            ((C.backgroundSize = `100% 100%`),
              (C.backgroundImage = vt(i)),
              ej.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = ej.subscribe(i, !m, e, v);
            (ej.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              Mv(C) && (C.overflow = `hidden`),
              (A = ee(O, {
                children: [
                  T,
                  M(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: w,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    jS.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let j = ls(this.props.as),
            { href: N, target: P, rel: F, onClick: I, onTap: te } = this.props,
            ne = s || c;
          return M(j, {
            ...E,
            ...y,
            layoutId: l,
            transformTemplate: D ? As(this.props.center) : void 0,
            id: e,
            ref: p,
            style: C,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: ne ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ne ? void 0 : `true`,
            onTap: te,
            onClick: I,
            href: N,
            target: P,
            rel: F,
            children: A,
          });
        }
      }),
      (aj = Ts(nj)),
      (oj = 1e3),
      (sj = `Variable`),
      (cj = `explicitInter`),
      (Oe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = ae(e(this.get()));
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
  Et as $,
  mE as A,
  Yt as At,
  xT as B,
  dA as Bt,
  _T as C,
  Tg as Ct,
  iO as D,
  xg as Dt,
  Cd as E,
  ma as Et,
  YS as F,
  qS as Ft,
  zv as G,
  ST as H,
  xb as Ht,
  Kl as I,
  Bg as It,
  ig as J,
  Iv as K,
  wS as L,
  YT as Lt,
  Lv as M,
  Sv as Mt,
  hl as N,
  yg as Nt,
  qA as O,
  Cg as Ot,
  FC as P,
  zg as Pt,
  lj as Q,
  Zv as R,
  au as Rt,
  qE as S,
  ho as St,
  Y as T,
  fr as Tt,
  KS as U,
  CT as V,
  mA as Vt,
  Rv as W,
  $i as X,
  Xy as Y,
  Ct as Z,
  wy as _,
  Ut as _t,
  pE as a,
  Ik as at,
  xr as b,
  Sc as bt,
  ef as c,
  Jv as ct,
  aT as d,
  ej as dt,
  hy as et,
  fT as f,
  Bi as ft,
  UE as g,
  Xt as gt,
  IE as h,
  Pu as ht,
  QT as i,
  pa as it,
  Pv as j,
  Vt as jt,
  aj as k,
  ng as kt,
  DD as l,
  nf as lt,
  MA as m,
  Ci as mt,
  of as n,
  DE as nt,
  Pw as o,
  gg as ot,
  WE as p,
  cg as pt,
  gl as q,
  Nu as r,
  Gl as rt,
  fo as s,
  Yv as st,
  tf as t,
  Wi as tt,
  OA as u,
  nE as ut,
  cD as v,
  dd as vt,
  Nk as w,
  pr as wt,
  gm as x,
  md as xt,
  Nx as y,
  fg as yt,
  wT as z,
  qv as zt,
};
//# sourceMappingURL=framer.DuFjdl15.mjs.map
