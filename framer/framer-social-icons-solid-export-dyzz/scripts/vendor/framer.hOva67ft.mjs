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
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  s as D,
  u as O,
  v as ee,
  w as k,
  x as te,
  y as ne,
} from "./react.D20wc1Tc.mjs";
import {
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
  R as ye,
  S as be,
  T as xe,
  U as Se,
  V as Ce,
  W as we,
  X as Te,
  Y as Ee,
  _ as De,
  b as Oe,
  c as ke,
  d as Ae,
  f as je,
  g as Me,
  h as Ne,
  i as Pe,
  j as Fe,
  k as Ie,
  l as Le,
  m as Re,
  n as ze,
  o as Be,
  p as Ve,
  q as He,
  r as Ue,
  s as We,
  u as Ge,
  v as Ke,
  w as qe,
  x as Je,
  y as Ye,
  z as Xe,
} from "./motion.D7PXL1QY.mjs";
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function A(e) {
  return typeof e == `string`;
}
function $e(e) {
  return Number.isFinite(e);
}
function et(e) {
  return Array.isArray(e);
}
function j(e) {
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
  return j(e) && Ze(e.return);
}
function st(e) {
  return j(e) && Ze(e.then);
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
function ft(e, t, n) {
  if (Mp.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Mp.set(e, t), t))
    .catch((t) => {
      throw (Mp.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Tp), Mp.set(e, r));
}
function pt(e, t) {
  Ep && (Np.set(e, t), Pp.has(e) && ft(e, t, `registered loader ${e}`));
}
function mt() {
  if (!Ep) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Fp),
      i = r ? e.slice(Fp.length) : e;
    if (!i) continue;
    Pp.add(i);
    let a = Np.get(i);
    a ? ft(i, a, `registered loader ${i}`) : r && ft(i, () => import(n), n);
  }
}
function ht(e) {
  return typeof e == `object` && !!e && !y(e) && Lp in e;
}
function gt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function _t(e, t = `default`, n) {
  n && pt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Mp.has(n)) return;
      let e = Mp.get(n);
      ct(e) ? s(() => e) : (i = gt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = gt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = b(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Ip !== void 0 && Ip.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function vt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function yt(e) {
  return e === null || !(zp in e) ? !1 : typeof e.equals == `function`;
}
function bt(e, t) {
  return e === t || (e !== e && t !== t);
}
function xt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!bt(e[r], t[r])) return !1;
  return !0;
}
function St(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Ot(e[r], t[r], !0)) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!bt(r, t.get(n))) return !1;
  return !0;
}
function wt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Ot(r, t.get(n), !0)) return !1;
  return !0;
}
function Tt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Et(e, t) {
  let n = Rp(e);
  if (n.length !== Rp(t).length) return !1;
  for (let r of n)
    if (!vt(t, r) || (!(r === `_owner` && vt(e, `$$typeof`) && e.$$typeof) && !bt(e[r], t[r])))
      return !1;
  return !0;
}
function Dt(e, t) {
  let n = Rp(e);
  if (n.length !== Rp(t).length) return !1;
  for (let r of n)
    if (!vt(t, r) || (!(r === `_owner` && vt(e, `$$typeof`) && e.$$typeof) && !Ot(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Ot(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? St(e, t) : xt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? wt(e, t) : Ct(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Tt(e, t);
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
      ? yt(e) && yt(t)
        ? e.equals(t)
        : n
          ? Dt(e, t)
          : Et(e, t)
      : !1;
}
function kt(e, t, n = !0) {
  try {
    return Ot(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function At(e) {
  return g.useCallback((t) => e[t], [e]);
}
function jt({ api: e, children: t }) {
  return _(Bp.Provider, { value: e, children: t });
}
function Mt() {
  return g.useContext(Bp);
}
function Nt({ routes: e, children: n }) {
  let r = At(e),
    i = t(() => ({ getRoute: r }), [r]);
  return _(Bp.Provider, { value: i, children: n });
}
function Pt() {
  let e = Mt(),
    n = C(Vp),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return t(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function Ft() {
  let e = Pt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function It(e) {
  let t = Pt(),
    n = g.useRef(t);
  kt(n.current, t) || !t || ((n.current = t), e(t));
}
function Lt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Rt(e) {
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
function M(e, t) {
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
function N(e, t) {
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
    Object.getOwnPropertyNames(t).sort().join(`\0`) === nm
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
  return rm.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Kt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > em);
}
function qt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > $p);
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
    if (e === Kp) return;
    if (e === Jp) return NaN;
    if (e === Yp) return 1 / 0;
    if (e === Xp) return -1 / 0;
    if (e === Zp) return -0;
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
            let n = sm(t);
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
      } else if (s[0] === Qp) {
        let t = s[1];
        if (!qt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[em] = void 0), delete n[em]);
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
          n !== qp && (t[e] = a(n));
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
    if (n === void 0) return Kp;
    if (Number.isNaN(n)) return Jp;
    if (n === 1 / 0) return Yp;
    if (n === -1 / 0) return Xp;
    if (n === 0 && 1 / n < 0) return Zp;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new tm(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new tm(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (zt(n)) u = sn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new tm(
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
            else if (e) u += qp;
            else {
              let t = Yt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + Qp + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += qp));
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
          u = `["ArrayBuffer","${om(n)}"]`;
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
          if (!Bt(n)) throw new tm(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Wt(n).length > 0) throw new tm(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new tm(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Gt(e)), (u += `,${Ut(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new tm(`Cannot stringify objects with __proto__ keys`, o, n, t);
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
      ? Kp.toString()
      : e === 0 && 1 / e < 0
        ? Zp.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function cn(e, t, n = `lazy`) {
  switch ((z.__framer_events?.push([e, t, n]), e)) {
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
  return A(e) && (e === `` || lm.test(e));
}
function un() {
  return { [um.QueryCache]: new Map(), [um.CollectionUtilsCache]: new Map() };
}
function dn() {
  if (!Ep) return;
  if (dm !== void 0) return dm;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      dm = nn(e.text) ?? un();
    } catch (e) {
      ((dm = un()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      kp(() => {
        (e?.remove(), (e = null));
      }),
      dm
    );
  }
}
function fn(e, t) {
  let n = dn();
  return n ? n[e].has(t) : !1;
}
function pn(e, t) {
  let n = dn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function mn(e) {
  return e?.id ?? Up;
}
function hn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function gn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (hm.has(n)) return hm.get(n);
    let r = new _m(n, t);
    return (hm.set(n, r), r);
  };
}
function _n({ children: e, collectionUtils: n }) {
  let r = t(() => ({ get: gn(n) }), [n]);
  return _(gm.Provider, { value: r, children: e });
}
function vn() {
  return C(gm);
}
function yn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function bn() {
  return s === void 0 ? void 0 : s;
}
function xn() {
  let e = bn();
  return e ? vm.test(e.platform) : !1;
}
function Sn() {
  let e = bn();
  return e
    ? ym.test(e.platform)
      ? !0
      : bm.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Cn() {
  return xn() || Sn();
}
function wn() {
  let e = bn();
  return e ? xm.test(e.userAgent) : !1;
}
function Tn() {
  let e = bn();
  return e ? Sm.test(e.userAgent) && Cm.test(e.vendor) && !wn() : !1;
}
function En() {
  let e = bn();
  return e ? wm.test(e.userAgent) && Tm.test(e.vendor) : !1;
}
function Dn() {
  let e = bn();
  return e ? Em.test(e.userAgent) : !1;
}
function On() {
  return typeof document == `object`;
}
function kn() {
  let e = bn();
  if (!e) return -1;
  let t = Dm.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function An() {
  let e = bn();
  return e ? Om.test(e.userAgent) : !1;
}
function jn() {
  return !1;
}
function Mn() {
  let e = bn();
  return e && km.test(e.userAgent) ? `tablet` : e && Am.test(e.userAgent) ? `phone` : `desktop`;
}
function Nn() {
  return Mn() === `desktop`;
}
function Pn(e) {
  return Cn() ? e.metaKey : e.ctrlKey;
}
function Fn() {}
function In(e) {
  return typeof e == `function` ? e() : e;
}
function Ln() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Rn(e, t) {
  let n = e?.priority,
    r = Ln();
  return n === `background`
    ? (t?.() ?? yn(1))
    : r?.yield
      ? r.yield(e).catch(Fn)
      : r?.postTask
        ? r.postTask(Fn, e).catch(Fn)
        : t
          ? t()
          : n === `user-blocking`
            ? Pm
            : yn(0);
}
function zn(e, t, n) {
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
    On() && (document.addEventListener(`visibilitychange`, s), f.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Fm),
        e(() => {
          Rn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return On()
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
      o = (n ?? r === `paint`) ? l(a) : Rn(a, t);
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
        o = t ?? (e.priority === `user-blocking` ? jm : Mm),
        s = On() && document.hidden ? Nm : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !On() && !t ? (n ? void 0 : Pm) : n ? m(i, r) : d(i);
  }
  return h;
}
function Bn() {
  let e = vn(),
    { getRoute: t } = Mt();
  return S(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return Vn(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
async function Vn(e, t, n = !0, r = !0) {
  if (!Rm || !e) return;
  let i = e.page;
  if (!(!i || !ht(i))) {
    n && (await Lm());
    try {
      let e = await i.preload();
      r && t && e && (await Hn(e, t));
    } catch {}
  }
}
async function Hn(e, t) {
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
function Un(e, t) {
  return e.replace(Hm, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Wn(e, t = !1) {
  let n = ``;
  if (f !== void 0)
    if (t) n = f.location.search;
    else {
      let e = f.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? f.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Gn(n, e) : e;
}
function Gn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Um && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Kn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Hm)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !A(d)) throw Error(`No slug found for path variable ${u}`);
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
function qn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Jn({
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
      u = await Kn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = qn(u.path, t.slug)),
    o && u.path && (u.path = Wn(u.path, !0)),
    u
  );
}
function Yn() {
  if (Wm) return;
  Wm = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (f.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((f.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), cn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Xn({ children: e, value: t }) {
  return _(Gm.Provider, { value: t, children: e });
}
function Zn() {
  return g.useContext(Gm);
}
function Qn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function $n(e) {
  let t = Km,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < qm;) ((n = e.next(t)), r.push(n.value), (t += Km));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Km }
  );
}
function er(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function tr(e) {
  let { innerWidth: t, innerHeight: n } = f,
    [r, i] = er(e.x),
    [a, o] = er(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function nr(e) {
  let [t, n] = er(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function rr(e) {
  let { x: t, y: n } = tr(e);
  return Math.hypot(Math.max(t, f.innerWidth - t), Math.max(n, f.innerHeight - n));
}
function ir(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ar(e) {
  return e ? Xm[e] : void 0;
}
function or(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (sr(t)) {
    let { easing: e, duration: n } = $n(
      se({ keyframes: [0, 1], ...cr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ar(n?.mask?.type),
    o = ir(n, `start`, e, a),
    s = ir({ ...Zm, mask: n.mask }, `end`, e, a);
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
function sr(e) {
  return e.type === `spring`;
}
function cr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function lr({ exit: e = $m, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Qm;
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
    (r += or(`exit`, e)),
    (r += or(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function ur() {
  kp(() => {
    Ne.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Qm);
      e && document.head.removeChild(e);
    });
  });
}
function dr() {
  return !!document.startViewTransition;
}
function fr(e) {
  return new Promise((t) => {
    Ne.render(() => {
      (performance.mark(`framer-vt-style`), lr(e), t());
    });
  });
}
async function pr(e, t, n) {
  if (!dr()) {
    e();
    return;
  }
  if ((await fr(t), n?.aborted)) return;
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
      .catch(eh),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), ur());
      })
      .catch(eh),
    r
  );
}
function mr() {
  let e = Zn(),
    t = r(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    S(
      (n, r, i, a) => {
        let o = Qn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return pr(
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
function hr(e, t) {
  kp(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function gr(e, t, n, r = te) {
  r(() => {
    let t = async (e) => (await Lm({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function _r(e) {
  let t = r(new Set());
  return (
    gr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    S(
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
function vr(e) {
  return j(e) && `routeId` in e;
}
function yr(e = f.history.state) {
  return vr(e) ? e : void 0;
}
function br(e) {
  return e?.entryId;
}
function xr(e) {
  rh = e;
}
function Sr() {
  return rh;
}
function Cr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function wr(e, t) {
  return Tr(e, br(e) ?? br(t));
}
function Tr(e, t = Cr()) {
  return { ...e, entryId: t };
}
function Er(e, t, n = !1) {
  (performance.mark(`framer-history-replace`), xr(wr(e, yr())), t && hr(t, f.location.href));
  let r;
  r = Bm().privateRouterReplaceState
    ? !t || t === f.location.href
      ? f.History.prototype.replaceState
      : f.history.replaceState
    : n
      ? f.History.prototype.replaceState
      : f.history.replaceState;
  try {
    r.call(f.history, rh, ``, t);
  } catch {}
}
function Dr(e) {
  (performance.mark(`framer-history-replace`),
    xr(Tr(e)),
    History.prototype.replaceState.call(f.history, rh, ``, void 0));
}
function Or(e, t) {
  (performance.mark(`framer-history-push`), xr(Tr(e)), hr(t, f.location.href), Yn());
  try {
    f.history.pushState(rh, ``, t);
  } catch {}
}
function kr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  te(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = f.location.hash ? f.location.hash.slice(1) : void 0;
    Er({ ...yr(), routeId: t, hash: i, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function Ar(e, t, n) {
  let i = mr(),
    a = _r(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    l = s ? `manual` : `after-transition`,
    u = r(void 0),
    d = S(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    p = S(
      async ({ state: e }) => {
        if (!vr(e)) return;
        let r = a({ popstate: !0 }),
          s = Rt();
        (r.promise.finally(s), br(Sr()) !== (br(e) ?? br(yr())) && o(), xr(e));
        let { routeId: c, hash: u, pathVariables: p, localeId: m } = e,
          h = A(u) ? u : f.location.hash ? f.location.hash.slice(1) : void 0,
          g = !1,
          _ = () => {
            g ||=
              (n(
                c,
                A(m) ? m : void 0,
                h,
                f.location.pathname + f.location.search + f.location.hash,
                j(p) ? p : void 0,
                !0,
                r,
                !1
              ),
              !0);
          },
          v = l === `after-transition`;
        (await Promise.resolve(i(t.current, c, _))
          .then((e) => e?.updateCallbackDone)
          .catch(_)
          .finally(() => {
            v || d();
          }),
          await r.promise,
          v && d(),
          await f.navigation?.transition?.finished.catch(Tp),
          nh(),
          hr(f.location.href));
      },
      [t, a, o, d, n, i, l]
    ),
    m = S(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        vr(t) &&
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
  c(
    () => (
      f.addEventListener(`popstate`, p),
      ih && f.navigation.addEventListener(`navigate`, m),
      () => {
        (f.removeEventListener(`popstate`, p),
          ih && f.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function jr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = qn(Un(e.path, t), n.slug);
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((f.location.href = f.location.origin + r), !0)
    : !1;
}
function Mr() {
  let e = vn();
  return S((t) => Nr({ ...t, collectionUtils: e }), [e]);
}
async function Nr(e) {
  let t = await Jn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!A(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await jr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Pr(e) {
  let t = r(Promise.resolve()),
    n = r(),
    i = S(
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
  return S(
    (e, r, a) => {
      if (!ih) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = r),
        f.navigation.addEventListener(`navigate`, i),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), f.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Fr({ children: e, value: t }) {
  return _(oh.Provider, { value: t, children: e });
}
function Ir() {
  return C(oh);
}
function Lr(e, t) {
  let n = d(() => ({ inputs: t, result: e() }))[0],
    i = r(!0),
    a = r(n),
    o =
      i.current || (t && a.current.inputs && kt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((i.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function Rr() {
  return g.useContext(uh);
}
function zr() {
  return f.location.search;
}
function Br() {
  return ``;
}
function Vr(e) {
  return (
    fh.add(e),
    f.addEventListener(`popstate`, e),
    () => {
      (fh.delete(e), f.removeEventListener(`popstate`, e));
    }
  );
}
function Hr() {
  for (let e of fh) e();
}
function Ur({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = Ir() === `preview`,
    [o, s] = d(``),
    c = r(t);
  sh(() => {
    c.current = t;
  }, [t]);
  let l = ne(Vr, zr, Br),
    u = i(l),
    p = t !== i(t),
    h = a ? o : p ? l : u,
    g = S(
      async (e) => {
        if (a) {
          m(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await Lm({ continueAfter: `paint` }), r || n() || c.current !== i)) return;
        let o = yr();
        if (!o) return;
        let l = new URL(f.location.href),
          u = e(l.searchParams).toString();
        l.search = u;
        let d = o.queryParamBackAnchorSearch,
          p = f.location.search.slice(1),
          h = d === void 0 && u !== p,
          g = d !== void 0 && u === d,
          _ = { ...o, queryParamBackAnchorSearch: g ? void 0 : (d ?? (h ? p : void 0)) },
          v = l.toString();
        (h || g ? Or(_, v) : Er(_, v), Hr());
      },
      [n, a, t]
    ),
    v = Lr(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: g }), [h, g]);
  return _(ph.Provider, { value: v, children: e });
}
function Wr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Gr(e),
    [r, i] = Gr(t),
    a = Kr(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Gr(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Kr(e, t) {
  if (e === t || ((e = `/` + qr(e)), (t = `/` + qr(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = gh(e, 1 + s);
    if (n !== gh(t, 1 + s)) break;
    n === hh && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (gh(t, 1 + s) === hh) return vh(t, 1 + s + 1);
      if (s === 0) return vh(t, 1 + s);
    } else r > a && (gh(e, 1 + s) === hh ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || gh(e, s) === hh) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${vh(t, 1 + o)}`;
}
function qr(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = gh(e, o);
    else if (xh(a)) break;
    else a = hh;
    if (xh(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || gh(t, t.length - 1) !== mh || gh(t, t.length - 2) !== mh) {
            if (t.length > 2) {
              let e = _h(t, bh);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = vh(t, 0, e)), (n = t.length - 1 - _h(t, bh))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          yh && ((t += t.length > 0 ? `${bh}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${bh}${vh(e, r + 1, o)}`) : (t = vh(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === mh && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Jr(e) {
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
function Yr(e, t, n) {
  let r = Lt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Hm, (e, t) => i[t] ?? e);
}
function Xr(
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
  let m = Yr(i, e, o);
  if (l) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace(Hm, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(Hm, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s)
    if (Sh.has(h) && f !== void 0) {
      let e = Jr(u);
      g = Wr(f.location.pathname, e + g);
    } else g = Wr(h, g);
  else g = qn(g, p);
  let y = _ || v;
  return ((c || y) && (g = Wn(g, y)), m && (g = `${g}#${m}`), g);
}
function Zr(e) {
  return Ch in e && e[Ch] === 1;
}
function Qr() {
  if (!wh) return;
  ((Eh = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  wh.forEach((n) => t.addEventListener(n, Th, e));
}
function $r() {
  return (
    c(() => {
      if (!Eh || !wh) return;
      let e = { capture: !0 },
        t = document.body;
      (wh.forEach((n) => t.removeEventListener(n, Th, e)),
        (wh = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ei(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ti(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function ni() {
  ((H = new V()), H.render.markStart());
}
function ri() {
  (p(() => {
    H?.useInsertionEffects.markRouterStart();
  }, []),
    te(() => {
      H?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      H?.useEffects.markRouterStart();
    }, []));
}
function ii() {
  (p(() => {
    (H?.render.markEnd(), H?.useInsertionEffects.markStart());
  }, []),
    te(() => {
      if ((H?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Wh = !0;
        return;
      }
      Ne.read(() => {
        (H?.browserRendering.requestAnimationFrame.markStart(),
          H?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (H?.useEffects.markStart(),
        H?.browserRendering.hasStarted ||
          (H?.mutationEffects.measure(), H?.useEffects.markAreSynchronous()));
    }, []));
}
function ai() {
  (p(() => {
    H?.useInsertionEffects.markEnd();
  }, []),
    te(() => {
      (H?.useLayoutEffects.markEnd(),
        !(Wh || document.visibilityState !== `visible`) &&
          Ne.read(() => {
            (H?.browserRendering.requestAnimationFrame.markEnd(),
              Lm().then(() => {
                H?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      H?.useEffects.markEnd();
    }, []));
}
function oi() {
  return (ii(), null);
}
function si() {
  return (ai(), null);
}
function ci(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return g.isValidElement(e) ? g.cloneElement(e, n) : _(e, { ...n });
}
function li() {
  return Jh;
}
function ui(e) {
  if (Yh?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      M(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: pi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          M(t, `localizedPath must be defined`);
          let i = pi(t),
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
    Yh = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Yh.pathRoutes,
    paths: Yh.paths,
    pathRoutesLocalized: Yh.pathRoutesLocalized,
    pathsLocalized: Yh.pathsLocalized,
  };
}
function di(e, t, n = !0, r = li()) {
  return fi(e, t, r, n);
}
function fi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = ui(e),
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
      let e = mi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = mi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = mi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = mi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function pi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function mi(e, t) {
  let n = [],
    r = hi(t).replace(Hm, (e, t) => (n.push(t), `([^/]+)`)),
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
function hi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function gi() {
  if (`PerformanceServerTiming` in f) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function _i(e, t, n) {
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
function vi(e, t) {
  for (let [n, r] of t) _i(e, n, r);
}
function yi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function bi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function xi(e, t) {
  if (f === void 0) return t;
  let n = t;
  if (t) {
    bi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (vi(e, gi()), yi(e), n);
}
function Si(e) {
  (c(() => {
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
    p(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Ci(e, ...t) {
  Xh.has(e) || (Xh.add(e), console.warn(e, ...t));
}
function wi(e, t, n) {
  Ci(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ti(e) {
  return (
    typeof e == `object` &&
    !!e &&
    $h in e &&
    e[$h] instanceof Function &&
    eg in e &&
    e[eg] instanceof Function
  );
}
function Ei(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Qh(r);
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
function Di(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Oi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function ki(e) {
  return Math.round(e * 2) / 2;
}
function Ai(e, t) {
  return { x: e, y: t };
}
function ji(e, t, n, r = !1) {
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
function Mi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ni(e) {
  let t = Pi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Pi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Fi(e, t, n) {
  return (
    (rg.rgb_r = e / 255),
    (rg.rgb_g = t / 255),
    (rg.rgb_b = n / 255),
    rg.rgbToHsluv(),
    { h: rg.hsluv_h, s: rg.hsluv_s, l: rg.hsluv_l }
  );
}
function Ii(e, t, n, r = 1) {
  return (
    (rg.hsluv_h = e),
    (rg.hsluv_s = t),
    (rg.hsluv_l = n),
    rg.hsluvToRgb(),
    { r: rg.rgb_r * 255, g: rg.rgb_g * 255, b: rg.rgb_b * 255, a: r }
  );
}
function Li(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Ri(e, t, n) {
  return {
    r: Mi(e) ? Gi(e, 255) * 255 : 0,
    g: Mi(t) ? Gi(t, 255) * 255 : 0,
    b: Mi(n) ? Gi(n, 255) * 255 : 0,
  };
}
function zi(e, t, n, r) {
  let i = [
    Ji(Math.round(e).toString(16)),
    Ji(Math.round(t).toString(16)),
    Ji(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Bi(e, t, n) {
  let r,
    i,
    a = Gi(e, 255),
    o = Gi(t, 255),
    s = Gi(n, 255),
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
function Vi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Hi(e, t, n) {
  let r, i, a;
  if (((e = Gi(e, 360)), (t = Gi(t * 100, 100)), (n = Gi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Vi(s, o, e + 1 / 3)), (i = Vi(s, o, e)), (a = Vi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Ui(e, t, n) {
  ((e = Gi(e, 255)), (t = Gi(t, 255)), (n = Gi(n, 255)));
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
function Wi(e, t, n) {
  ((e = Gi(e, 360) * 6), (t = Gi(t * 100, 100)), (n = Gi(n * 100, 100)));
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
function Gi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Ki(e) && (e = `100%`);
    let t = qi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ki(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function qi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Ji(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Yi(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = ng[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = ig.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = ig.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = ig.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Ni(r[2] ?? ``), l: Ni(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = ig.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Ni(r[2] ?? ``),
              l: Ni(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = ig.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Ni(r[2] ?? ``), v: Ni(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = ig.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Ni(r[2] ?? ``),
                  v: Ni(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = ig.hex8.exec(t))
                ? {
                    r: Xi(r[1] ?? ``),
                    g: Xi(r[2] ?? ``),
                    b: Xi(r[3] ?? ``),
                    a: Zi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = ig.hex6.exec(t))
                  ? {
                      r: Xi(r[1] ?? ``),
                      g: Xi(r[2] ?? ``),
                      b: Xi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = ig.hex4.exec(t))
                    ? {
                        r: Xi(`${r[1]}${r[1]}`),
                        g: Xi(`${r[2]}${r[2]}`),
                        b: Xi(`${r[3]}${r[3]}`),
                        a: Zi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = ig.hex3.exec(t))
                      ? {
                          r: Xi(`${r[1]}${r[1]}`),
                          g: Xi(`${r[2]}${r[2]}`),
                          b: Xi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Xi(e) {
  return parseInt(e, 16);
}
function Zi(e) {
  return Xi(e) / 255;
}
function Qi(e) {
  let t = ag.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function $i(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function ea({ r: e, g: t, b: n, a: r }) {
  return { r: $i(e), g: $i(t), b: $i(n), a: r };
}
function ta(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function na({ r: e, g: t, b: n, a: r }) {
  return { r: ta(e), g: ta(t), b: ta(n), a: r };
}
function ra({ r: e, g: t, b: n, a: r }) {
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
function ia(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function aa({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ia(e),
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
function oa(e) {
  return lg(cg(e));
}
function sa(e) {
  return sg(og(e));
}
function ca(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = da({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = la(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? da(e)
              : fa(e)),
    i
  );
}
function la(e) {
  let t = Yi(e);
  if (t) return t.format === `hsl` ? fa(t) : t.format === `hsv` ? ua(t) : da(t);
}
function ua(e) {
  let t = Wi(e.h, e.s, e.v);
  return { ...Bi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : pa(e.a) };
}
function da(e) {
  let t = Ri(e.r, e.g, e.b);
  return { ...Bi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : pa(e.a) };
}
function fa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Mi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Mi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Pi(e.s)),
    (r = Mi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Pi(e.l)),
    (i = Hi(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function pa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function ma() {
  return z.location.origin === `https://screenshot.framer.invalid`;
}
function ha({ children: e }) {
  if (C(Cg).top) return _(D, { children: e });
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
            M(!!c, `duplicatedId must be defined`);
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
          { layoutId: m, value: h } = ga(p, (t.current.count[o][p] ?? -1) + 1, i);
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
  return _(Cg.Provider, { value: a, children: e });
}
function ga(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function _a({ enabled: e = !0, ...n }) {
  let r = C(Cg),
    i = t(() => ({ ...r, enabled: e }), [e]);
  return _(Cg.Provider, { ...n, value: i });
}
function va(e) {
  let t = r(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ya(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${ba(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: Tg,
    children: [
      _(`div`, { className: `text`, style: Dg, children: r }),
      i && _(`div`, { className: `text`, style: Og, children: i }),
    ],
  });
}
function ba(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function P(e) {
  return Number.isFinite(e);
}
function xa(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Sa(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Ca(e) {
  return e != null && typeof e != `boolean` && !xa(e);
}
function wa(e) {
  return (Math.PI / 180) * e;
}
function Ta(e) {
  return nt(e) ? !1 : e === 2 || e === 5;
}
function Ea(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Da(e, t, n, r) {
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
      if (!r) return Oa(e);
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
function Oa(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      N(e, `unknown constraint key`);
  }
}
function ka(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Da(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Da(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Aa(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Da(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Da(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function ja(e, t, n, r, i) {
  let a = Aa(P(e) ? e : Ng, n, r, i),
    o = ka(P(t) ? t : Pg, n, r, i);
  return (
    P(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (P(n.left) && P(n.right)
        ? (o = a / n.aspectRatio)
        : (P(n.top) && P(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Ma(e, t) {
  return !P(e) || !P(t) ? null : e + t;
}
function Na(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Pa(e) {
  return !e._constraints || Na(e) ? !1 : e._constraints.enabled;
}
function Fa(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    P(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    P(n) && P(r) ? { width: n, height: r } : null
  );
}
function Ia(e) {
  let t = Fa(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return P(n) && P(r) ? { x: n, y: r, ...t } : null;
}
function La(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Pa(e) || r) return Ia(e);
  let i = Ra(e),
    a = za(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Mg.toRect(i, o, null, n, null);
}
function Ra(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = jg.quickfix({
      left: P(t),
      right: P(n),
      top: P(r),
      bottom: P(i),
      widthType: Ea(c),
      heightType: Ea(l),
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
function za(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ba() {
  return g.useContext(Fg).parentSize;
}
function Va(e) {
  return typeof e == `object`;
}
function Ha(e) {
  return Va(e) ? e.width : e;
}
function Ua(e) {
  return Va(e) ? e.height : e;
}
function Wa(e, t) {
  return _(Ig, { parentSize: t, children: e });
}
function Ga(e) {
  return La(e, Ba(), !0);
}
function Ka({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function qa(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Ja(e, t, n = zg) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Bg) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Bg = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Bg;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ya() {
  return ma() ? W.preview : W.current();
}
function Xa(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Xg.variable(e) : e === `` ? `""` : e;
}
function F(e, t) {
  return Xg.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Za(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Qa() {
  return W.current() === W.preview ? g_.value : h_.value;
}
function $a(e) {
  return Wg(e, Qa, `framer-lib-combinedCSSRules`);
}
function eo(e) {
  return j(e) || Ze(e);
}
function to(e) {
  return !!e && __ in e && e[__] === !0;
}
function no(e) {
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
        return A(e.defaultValue) ? e.defaultValue : void 0;
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
        return j(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return j(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return j(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = j(e.defaultValue) ? e.defaultValue : {};
        return (j(e.controls) && ro(t, e.controls), t);
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
function ro(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!nt(i) || to(r)) continue;
    let a = no(r);
    nt(a) || (e[n] = a);
  }
}
function io(e) {
  if (j(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function ao(e, t) {
  eo(e) && ro(io(e), t);
}
function oo(e, t) {
  (Object.assign(e, { propertyControls: t }), ao(e, t));
}
function so(e) {
  return e.propertyControls;
}
function co() {
  let e = W.current();
  return e === W.canvas || e === W.export;
}
function lo() {
  let [e] = d(() => co());
  return e;
}
function uo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function fo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of E_) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function po(e, t) {
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
function mo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < D_) continue;
    let n = po(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${po(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function ho(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of T_) {
    let n = po(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function go(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = ho(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: mo(n, t, fo(t.pixelWidth, t.pixelHeight)) };
}
function _o() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: lt(q.imagePlaceholderSvg),
  };
}
function vo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function yo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function bo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...w_,
    objectPosition: yo(e.positionX, e.positionY),
    objectFit: vo(e.fit),
  };
}
function xo(e) {
  let t = g.useRef(e ? `auto` : `async`),
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
function So({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = q.useImageSource(e, t, n),
    s = bo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = xo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : go(e.nodeFixedSize, e, o);
  return _(`img`, {
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
function Co({ image: e, containerSize: t, nodeId: n }) {
  let r = g.useRef(null),
    i = q.useImageElement(e, t, n),
    a = bo(e);
  return (
    g.useLayoutEffect(() => {
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
    _(`div`, { ref: r, style: { display: `contents`, ...w_ } })
  );
}
function wo({ nodeId: e, image: t, containerSize: n }) {
  let r = g.useRef(null),
    i = q.useImageSource(t, n, e);
  return (
    g.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = bo(t);
      q.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...w_ } })
  );
}
function To({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (A(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = $e(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = ki(e * (t.pixelWidth / 2)),
        s = q.useImageSource(t, n);
      ((r = {
        ...O_,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: yo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        W.current() === W.canvas
          ? q.canRenderOptimizedCanvasImage(q.useImageSource(t))
            ? _(wo, { image: t, ...n })
            : _(Co, { image: t, ...n })
          : _(So, { image: t, avoidAsyncDecoding: W.current() === W.export, ...n });
  let o = a ? O_ : (r ?? { ...O_, ..._o() });
  return i
    ? _(Je.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Eo(e, t, n = !0) {
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
function Do(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...w_,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(Je.div, { style: n }))
    : (Eo(e, n, !1), _(Je.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Oo(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ko(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !A_.isImageObject(t)) return;
  let r = null;
  if (((r = A(n) ? { alt: ``, src: n } : Qh.get(t, null)), A_.isImageObject(r))) return Oo(r, e);
}
function Ao(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function jo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? Je[e] : Je.div;
}
function Mo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function No(e) {
  let t = {};
  return (!e || !j_ || W.current() !== W.canvas || Mo(t, e), t);
}
function Po(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Fo(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = g.Children.map(t, (e) =>
        g.isValidElement(e) ? g.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Io(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Lo(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = C(Cg);
  return t(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function Ro() {
  let [e, t] = g.useState(0);
  return g.useCallback(() => t((e) => e + 1), []);
}
function zo(e) {
  let t = Ro();
  c(() => {
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
function Bo(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = C(M_),
    l = W.current() === W.canvas;
  sh(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && q.queueMeasureRequest(Po(i), t.current, n(t.current)));
  });
}
function Vo(e) {
  e.willChange = `transform`;
  let t = W.current() === W.canvas;
  L_ && t && (e.translateZ = F_);
}
function Ho(e) {
  ((e.willChange = `transform`), Uo(e, !0));
}
function Uo(e, t) {
  let n = W.current() === W.canvas;
  if (!L_ || !n) return;
  let r = (A(e.transform) && e.transform) || ``;
  t ? r.includes(I_) || (e.transform = r + I_) : (e.transform = r.replace(I_, ``));
}
function Wo(e, t, n, r = !0) {
  if (!e) return;
  let i = K(e.style),
    a = n || i[t],
    o = () => {
      Go(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Go(e) {
  return A(e) || $e(e) || rt(e);
}
function Ko(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function qo(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ko(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Jo(e, t) {
  let n = [e, t];
  return V_.test(e) ? e : qo(1e3, H_, n, () => B_.multiplyAlpha(e, t));
}
function Yo(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Jo(e.value, t) }))
  );
}
function Xo(e, t) {
  let n = 0;
  return (
    Yo(e, t).forEach((e) => {
      n ^= z_(e.value) ^ e.position;
    }),
    n
  );
}
function Zo(e) {
  return e && U_.every((t) => t in e);
}
function Qo(e) {
  return e && W_.every((t) => t in e);
}
function $o({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || fg(t)
      ? (n.backgroundColor = t)
      : U.isColorObject(e) && (n.backgroundColor = e.initialValue || U.toRgbString(e))
    : e &&
      ((e = Qh.get(e, null)),
      typeof e == `string` || fg(e)
        ? (n.background = e)
        : K_.isLinearGradient(e)
          ? (n.background = K_.toCSS(e))
          : J_.isRadialGradient(e)
            ? (n.background = J_.toCSS(e))
            : U.isColorObject(e) && (n.backgroundColor = e.initialValue || U.toRgbString(e)));
}
function I(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function es(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function ts(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ns(e) {
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
      ? (t.cornerShape = _e(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    I(e, `size`, t),
    I(e, `width`, t),
    I(e, `height`, t),
    I(e, `minWidth`, t),
    I(e, `minHeight`, t),
    I(e, `top`, t),
    I(e, `right`, t),
    I(e, `bottom`, t),
    I(e, `left`, t),
    I(e, `position`, t),
    I(e, `overflow`, t),
    I(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && I(e, `border`, t),
    I(e, `borderRadius`, t),
    I(e, `radius`, t, `borderRadius`),
    I(e, `color`, t),
    I(e, `shadow`, t, `boxShadow`),
    I(e, `x`, t),
    I(e, `y`, t),
    I(e, `z`, t),
    I(e, `rotate`, t),
    I(e, `rotateX`, t),
    I(e, `rotateY`, t),
    I(e, `rotateZ`, t),
    I(e, `scale`, t),
    I(e, `scaleX`, t),
    I(e, `scaleY`, t),
    I(e, `skew`, t),
    I(e, `skewX`, t),
    I(e, `skewY`, t),
    I(e, `originX`, t),
    I(e, `originY`, t),
    I(e, `originZ`, t),
    $o(e, t),
    t
  );
}
function rs(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof K(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function is(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (X_.has(t)) return `pointer`;
}
function as(e) {
  return os(e) ? !0 : e.style ? !!os(e.style) : !1;
}
function os(e) {
  return Z_ in e && (e[Z_] === `scroll` || e[Z_] === `auto`);
}
function ss(e) {
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
    m = qe(e.minWidth),
    h = qe(e.minHeight),
    g = qe(e.maxWidth),
    _ = qe(e.maxHeight);
  return {
    top: qe(n),
    left: qe(t),
    bottom: qe(r),
    right: qe(i),
    width: qe(a),
    height: qe(o),
    size: qe(l),
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
function cs(e) {
  let t = C(M_),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = ss(e),
    s = Ga(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: W.current() === W.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !rs(e) && !e.__fromCanvasComponent && !as(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = g.Children.count(e.children) > 0 &&
      g.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = ns(e);
  (a === void 0 && !i && (es(f) || (c.width = Q_.width), ts(f) || (c.height = Q_.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (Pa(o) &&
    s &&
    !Ka(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    R_.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let h = co();
  return (
    e.positionSticky
      ? (!h || q.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : h &&
        (e.positionFixed
          ? (m.position = q.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function ls(e) {
  let t = {};
  for (let n in e)
    (Oe(n) || y_(n)) && !$_.has(n)
      ? (t[n] = K(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0), typeof K(e)[n] != `boolean` && !e.transition && (t.transition = K(e)[n]));
  return t;
}
function us(e) {
  return `data-framer-name` in e;
}
function ds(e, t, n, r) {
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
function fs(e) {
  return _(Je.div, { layoutId: nv, style: av, children: e.children });
}
function ps(e, t) {
  Ze(e) ? e(t) : ms(e) && (e.current = t);
}
function ms(e) {
  return j(e) && `current` in e;
}
function hs() {
  let e = va(() => new Set()),
    t = va(() => new Map());
  return va(() => (n, r) => ({
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
function gs(e) {
  let t = r(null),
    n = hs();
  return va(() => (ms(e) ? n(e) : Ze(e) ? n(t, e) : n(t)));
}
function _s(e, t, n) {
  let i = r(),
    a = r();
  (Lr(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(t), (i.current = t)));
}
function vs(e, t, n, r, i, a, o) {
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
function ys(e, t, n) {
  let r = va(() => `${n.rootMargin}`),
    i = C(sv),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  _s(
    e,
    (e) => {
      if (a && e !== null) return vs(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function bs(e, t, n) {
  let r = g.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  cv(
    e,
    g.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Ss(e, o?.y ?? 0);
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
function xs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, z.innerHeight);
}
function Ss({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && xs(t, e) >= r;
}
function Cs() {
  return new Map();
}
function ws() {
  return va(Cs);
}
function Ts(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Es(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (P(t.originX) && (r.originX = t.originX),
      P(t.originY) && (r.originY = t.originY),
      P(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (P(n.originX) && (r.originX = n.originX),
      P(n.originY) && (r.originY = n.originY),
      P(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Ds(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Os(e) {
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
function ks(e) {
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
function As(e) {
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
function js(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Ns(e, t.transition, t.component);
    case `removeOverlay`:
      return Ps(e);
    case `add`:
      return Fs(e, t.key, t.transition, t.component);
    case `remove`:
      return Rs(e);
    case `update`:
      return Ms(e, t.key, t.component);
    case `back`:
      return Is(e);
    case `forward`:
      return Ls(e);
    default:
      return;
  }
}
function Ms(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Ns(e, t, n) {
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
function Ps(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Fs(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? Us(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Vs(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = zs(e, t, c),
    p = Hs(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function Is(e) {
  let t = { ...e.containers },
    n = Rs(e);
  if (n) return ((n.containers = t), n);
}
function Ls(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Fs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Rs(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (M(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Bs(e, r, n),
    u = Hs(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function zs(e, t, n) {
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
function Bs(e, t, n) {
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
function Vs(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Hs(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Ws(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Us(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Ws(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Gs(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Gs(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Gs(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Gs(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Gs(e, t, n) {
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
          s = typeof t[a] == `string` ? `${K(_v)[a]}%` : K(_v)[a];
        ((K(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Ks(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function qs({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Js({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : Ev;
}
function Ys({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function Xs(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Zs(e, t) {
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
function Qs(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function $s(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function ec(e, t) {
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
function tc(e, t) {
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
function nc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function rc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function ic(e) {
  return g.Children.map(e.component, (t) => {
    if (!Ca(t) || !Sa(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? j(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      g.cloneElement(t, n)
    );
  });
}
function ac(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function oc(e, t) {
  let n = de(),
    r = Fe();
  return _(Tv, {
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
function sc(e, t) {
  let n,
    r = (...r) => {
      (z.clearTimeout(n), (n = z.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      z.clearTimeout(n);
    }),
    r
  );
}
function cc(...e) {
  return e.filter(Boolean).join(` `);
}
function lc(e) {
  if (e.startsWith(Lv)) return e.substr(Rv);
}
function uc(e) {
  let t = va(() => dc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function dc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = fc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = fc(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      k.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      k.map(i, (e) => {
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Ze(a) ? a(e.props) : a;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return _(D, { children: i(e, t) });
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
function fc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (ps(n, e), ps(t, e));
  };
}
function pc(e) {
  return e.split(`-`)[2];
}
function mc(e) {
  return g.forwardRef(({ optimized: t, ...n }, r) => {
    let i = g.useContext(zv),
      a = g.useContext(Bv)?.variants,
      o = n[Kv];
    o && !On() && Wv.setAll(o, a, t ? n : null, i);
    let s = Jv(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function hc(e) {
  return A(e) || Array.isArray(e);
}
function gc(e) {
  return e in J;
}
function _c(e, t) {
  let n = va(() => ({ values: Xv(t ? e : void 0) }));
  return (
    g.useEffect(() => {
      if (!t)
        for (let e of Yv) {
          let t = J[e];
          nt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function vc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: i,
    loopRepeatType: a,
    loop: o,
    loopPauseOffscreen: s,
  },
  l
) {
  let u = ce(),
    f = va(Xv),
    p = r(!1),
    h = ey(),
    g = r(null),
    _ = S(async () => {
      if (!o) return;
      let e = i || void 0,
        t = p.current && a === `mirror`,
        n = t ? J : o,
        r = t ? o : J;
      return (
        (p.current = !p.current),
        (g.current = Promise.all(
          Yv.map((t) => {
            if (!(u && t !== `opacity`))
              return (
                f[t].jump(r[t] ?? J[t]),
                new Promise((i) => {
                  let a = { ...e, onComplete: () => i() },
                    o = n[t] ?? r[t];
                  typeof o == `number` && je(f[t], o, a);
                })
              );
          })
        )),
        g.current
      );
    }, [o, a, i, u]),
    [v, y] = d(!1),
    b = r(!1),
    x = S(async () => {
      !e || !b.current || (await _(), await h(n ?? 0), x());
    }, [_, h, e, n]),
    C = S(() => {
      b.current || ((b.current = !0), m(() => y(!0)), x());
    }, [x]),
    w = S((e = !0) => {
      (Yv.forEach((e) => {
        f[e].stop();
      }),
        Yv.forEach((e) => {
          f[e].set(J[e]);
        }),
        (p.current = !1),
        e && ((b.current = !1), m(() => y(!1))));
    }, []),
    T = e && o,
    E = S(() => {
      document.hidden ? w(!1) : b.current && ((b.current = !1), C());
    }, [C, w]);
  (c(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    c(() => {
      (T && s) || (T ? C() : w());
    }, [C, w, s, T]),
    c(() => () => w(), [w]));
  let D = r(!1),
    O = S(async () => {
      g.current && (await g.current, !D.current && w());
    }, [w]);
  cv(
    l,
    S(
      (e) => {
        e.isIntersecting ? ((D.current = !0), C()) : ((D.current = !1), O());
      },
      [C, O]
    ),
    { enabled: T && s }
  );
  let ee = v || !s;
  return t(() => ({ values: f, style: T && ee ? Zv : Qv }), [T, ee]);
}
function yc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function bc(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = g.useRef(null),
    c = ce(),
    l = g.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : yc(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = me(),
    d = Xe(u, l),
    f = ge(a && s.current === null ? `hidden` : n),
    p = ge(0),
    m = C(sv);
  return (
    _s(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = vs(m, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Ne.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    It(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? p : d }, style: o ? { ...Zv, visibility: f } : Qv }
  );
}
function xc(e) {
  return typeof e == `object` && !!e;
}
function Sc(e) {
  if (xc(e)) return e?.transition;
}
function Cc(e, t, n, r, i, a) {
  let o = Sc(e);
  return Promise.all(
    Yv.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = xc(e) ? (e?.[s] ?? J[s]) : J[s];
          if ((Ye(u) && (u = u.get()), !$e(u))) return c();
          let d = ie.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (A(i) && !l?.hasAnimated && z.MotionHandoffAnimation) {
            let e = z.MotionHandoffAnimation(i, s, Ne);
            e && (f = e);
          }
          a ? l.set(u) : je(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function wc(
  { initial: e, animate: n, exit: i, presenceInitial: a, presenceAnimate: o, presenceExit: s },
  c,
  l,
  u,
  d
) {
  let f = a ?? e,
    p = o ?? n,
    m = s ?? i,
    [h, g] = ve(),
    _ = r({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = va(() => {
      let e = f ?? u;
      if (!j(e)) return { values: Xv() };
      let t = {};
      for (let n in e) {
        let r = j(e) ? e[n] : void 0;
        $e(r) && (t[n] = r);
      }
      return { values: Xv(t) };
    });
  _s(
    c,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = ie.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!gc(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, $e(t) ? t : J[e]);
        }
      }
    },
    [p]
  );
  let y = ce();
  _s(c, (e) => {
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
            Cc(p, v, y, c, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              Cc(m, v, y, c, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    kt(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      Cc(p, v, y, c, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = l && p;
  return t(() => ({ values: v.values, style: b ? Zv : Qv }), [b]);
}
function Tc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Ec(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = Tc(o.current, document.documentElement) - ry - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Dc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Oc(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Ft();
  g.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return xe((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Dc(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < iy) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function kc(e, t, n) {
  let r = Ec(e, t),
    i = [...oy],
    a = r[0];
  if (!$e(a)) return sy;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!$e(e)) return sy;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Ac(e) {
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
function jc({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return g.useMemo(
    () => ({
      initial: r ?? Ac({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Ac({ opacity: t }),
      exit: i ?? Ac(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Mc(e, n) {
  let r = ce(),
    i = jc(e),
    a = e.styleAppearEffectEnabled,
    o = _c(a ? i.initial : i.animate, a),
    s = g.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Ft(),
    l = g.useRef(),
    u = g.useCallback(async ({ transition: t, ...a }, s) => {
      let c = t ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = ie.get(n.current);
      l.current = Promise.all(
        Yv.map((e) => {
          s && o.values[e].set(i.initial[e] ?? J[e]);
          let t = a[e] ?? J[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((n) => {
              if (r && e !== `opacity`) ($e(t) && o.values[e].set(t), n());
              else {
                let r = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => n() };
                typeof t == `number` && je(o.values[e], t, r);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  bs(
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
    g.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return xe((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = kc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = oe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = K(i)[l];
        d && u(d);
      });
    }, [c, f]),
    Oc(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    It(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of Yv) o.values[e].set(i.initial?.[e] ?? J[e]);
    }),
    t(() => ({ values: o.values, style: a ? Zv : Qv }), [a])
  );
}
function Nc(e, t) {
  let n = g.useRef({});
  g.useEffect(() => {
    if (t !== void 0)
      for (let r of Rp(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ve({
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
        a.attach((e, t) => ((s = e), (o = t), Ne.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Pc(e, t) {
  let n = uy();
  return {
    inputRange: Ec(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Yv) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Fc(e) {
  let t = uy();
  for (let { target: n } of e) for (let e of Yv) t[e]?.push(n[e]);
  return t;
}
function Ic(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = ce(),
    s = _c(ly(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Ft();
  return (
    te(() => {
      if (!(c || !l))
        return xe((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Pc(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of Yv)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(oe(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    _s(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = Fc(n);
        return xe(
          (e, { y: t }) => {
            for (let e of Yv)
              (o && e !== `opacity`) ||
                (dy.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(oe(t.progress, dy, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    Nc(s.values, r),
    It(() => {
      if (c) return;
      let e = ly(n, o);
      for (let t of Yv) s.values[t].set(e?.[t] ?? J[t]);
    }),
    g.useMemo(() => ({ values: s.values, style: t ? Zv : Qv }), [t])
  );
}
function Lc(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Rc(e) {
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
    let r = lc(n);
    if (r) {
      for (let i of py)
        if (fy[i]?.has(r)) {
          t[i][r] = K(e)[n];
          break;
        }
    } else t.forwardedProps[n] = K(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Lc(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Lc(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function zc(e) {
  return j(e) && gy in e;
}
function Bc(e, t) {
  if (!e || !j(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ye(r) || !gc(n) || ($e(r.get()) && t[n].push(r));
  }
}
function Vc(e) {
  return A(e) || Array.isArray(e);
}
function Hc() {
  return g.useContext(vy);
}
function Uc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Wc() {
  if (f === void 0 || xy)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Cy;
}
function Gc({ children: e }) {
  return C(Ty) ? _(D, { children: e }) : _(T, { fallback: wy, children: e });
}
function Kc() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function qc(e, t) {
  if (!Ep || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  cn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Jc(...e) {
  console.error(...e);
}
function Yc() {
  return W.current() !== W.canvas;
}
function Xc({ getErrorMessage: e, fallback: t, children: n }) {
  return Yc()
    ? _(Zc, { fallback: t, children: _(Dy, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Zc({ children: e, fallback: t = Ey }) {
  return f === void 0 ? _(T, { fallback: t, children: e }) : _(Gc, { children: e });
}
function Qc() {
  return g.useContext(ky);
}
function $c() {
  let e = Qc();
  return g.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function el({ children: e, scopeId: t, nodeId: n }) {
  let r = Qc(),
    i = g.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(ky.Provider, { value: i, children: e });
}
function tl(e, t) {
  return `${Ay}${e}:${t}`;
}
function nl(e, t) {
  return il(`component`, e, t);
}
function rl(e, t) {
  return il(`override`, e, t);
}
function il(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${tl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function al(e, t, n, r, i, a) {
  let o = sl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function ol(e, t, n, r) {
  return sl(e, t, n, r);
}
function sl(e, t, n, r) {
  return !!(nt(n) || (n === 1 && r && e === t));
}
function cl(e, t, n, r, i, a) {
  let o = Qc();
  if (nt(t) || nt(n)) return _(Oy, { children: e });
  let { disableCustomCode: s } = Bm();
  return s && r
    ? _(`div`, {
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
    : (al(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(Xc, { getErrorMessage: nl.bind(null, t, n), fallback: null, children: e })),
      i && (e = _(el, { scopeId: t, nodeId: n, children: e })),
      e);
}
function ll(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function ul(e) {
  return !(!e || e.placement || e.alignment);
}
function dl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      N(e);
  }
}
function fl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${dl(t)}, -100%`;
    case `right`:
      return `0%, ${dl(t)}`;
    case `bottom`:
      return `${dl(t)}, 0%`;
    case `left`:
      return `-100%, ${dl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function pl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Ry)) {
      let e = n.getAttribute(Ry);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function ml(e) {
  let { registerCursors: t } = C(My),
    n = va(() => e),
    r = ee();
  te(() => t(n, r), [t, r]);
}
function hl(e) {
  return !!(e && typeof e == `object` && By in e);
}
function gl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function _l() {
  return W.current() === W.canvas;
}
function vl(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function yl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function bl(e, t, n, r) {
  if (A(e)) {
    let i = vl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = di(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function xl(e) {
  return A(e) && e.startsWith(`data:${qy}`);
}
function Sl(e) {
  if (xl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(qy.length),
        r = t.searchParams,
        i = r.has(Uy) ? r.get(Uy) : void 0,
        a,
        o = r.get(Wy),
        s = r.get(Gy),
        c = r.get(Ky);
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
function Cl(e) {
  if (!xl(e)) return e;
  let t = Sl(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: wl(i) };
}
function wl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Tl(e, n, r, i, a, o) {
  let s = C(Jy),
    c = $c(),
    l = t(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    u = Mt(),
    d = Pt(),
    { locales: f } = Rr(),
    p = t(() => {
      let e = hl(i) ? i : Cl(i);
      if (e) return bl(e, u, d, f);
    }, [d, i, u, f]),
    m = !!(!_l() && s?.nodeId && l.nodeId),
    h = S(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Pn(e))) {
            Ol(a.href, ``, `_blank`);
            return;
          }
          p ? a.navigate?.() : Ol(a.href, a.rel, a.target);
        }
      },
      [a, p]
    ),
    g = S(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Ol(a.href, ``, `_blank`));
      },
      [a]
    ),
    v = S(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          p ? a.navigate?.() : Ol(a.href, a.rel, a.target));
      },
      [a, p]
    );
  _s(
    o,
    (e) => {
      e !== null && m && (e.dataset.hydrated = `true`);
    },
    [m]
  );
  let y = e;
  return (
    m &&
      (k.forEach(e, (e) => {
        Dl(e) &&
          (M(
            El(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          M(
            El(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          Hy.collectNestedLink(s, l));
      }),
      (y = k.map(e, (e) => {
        if (!Dl(e)) return e;
        let t = kl(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: h,
            onAuxClick: g,
            onKeyDown: v,
            as: r.as && kl(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return O(t, { ...i, ref: a }, n);
      }))),
    _(Jy.Provider, { value: l, children: y })
  );
}
function El(e) {
  return !nt(e?.nodeId);
}
function Dl(e) {
  return y(e) && (kl(e.type) !== e.type || kl(e.props.as) !== e.props.as);
}
function Ol(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function kl(e) {
  return e === `a` ? `span` : Ke(e) && Ie(e) === `a` ? Je.span : e;
}
function Al(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Al(e.parentElement, t)
      : null;
}
function jl({ children: e }) {
  return _(Gc, { children: e });
}
function Ml(e) {
  return b(function (t, n) {
    return _(jl, { children: _(e, { ...t, ref: n }) });
  });
}
function Nl(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Fl(e, t, o, s, a, c, l, i, r);
}
function Pl(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && vl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      M(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      M(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = di(e.routes, o, void 0, r),
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
function Fl(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = Xr(d, {
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
function Il() {
  let e = C(Zy),
    t = Pt()?.pathVariables;
  return e || t;
}
function Ll(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Xy)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Rl() {
  let e = s.connection || s.mozConnection || s.webkitConnection || {},
    t = s.deviceMemory && s.deviceMemory > eb,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? tb : nb));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(u, { threshold: $y }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = ab.get(n);
    if (!a?.size || ib.has(n)) return;
    (++c, ib.add(n));
    let s = i()?.catch(() => {});
    (o.unobserve(t), rb.delete(t));
    for (let e of a) (o.unobserve(e), rb.delete(e));
    (a.clear(), ab.delete(n), await s, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = rb.get(e);
      if (!n || ib.has(n.id)) {
        (o.unobserve(e), rb.delete(e));
        continue;
      }
      let r = n.id,
        a = ab.get(r),
        s = ab.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : ab.set(r, new Set([e])), setTimeout(l, Qy, n, e));
      } else (a && a.delete(e), s <= 1 && ab.delete(r));
    }
  }
  return (e, t, n) => {
    if (!ib.has(n))
      return (
        rb.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (rb.delete(e), o.unobserve(e));
        }
      );
  };
}
function zl(e, t) {
  let n = vl(e),
    r = {
      href: e === `` || yl(e, n) ? e : `https://${e}`,
      target: Bl(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Wn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Bl(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Vl(e, t) {
  console.warn(
    dt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Hl(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Vl(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ct(i) ? i.catch(Vl) : i;
  } catch (e) {
    Vl(e);
  }
}
function Ul(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Hl(o, r, n);
      ct(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Wl() {
  let e = vn();
  return S((t, n, r, i = []) => Ul(t, n, r, e, i), [e]);
}
function Gl({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = vn();
  return S(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = hl(r) ? r : Cl(r);
      if (!hl(c))
        return cn(
          `published_site_click`,
          {
            ...s,
            href: o ? Kl(o) : null,
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
        if (A(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ct(n) ? await n : n) ?? null;
        }
      }
      return cn(
        `published_site_click`,
        {
          ...s,
          href: o ? Kl(o) : null,
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
function Kl(e) {
  try {
    let t = new URL(e, z.document.baseURI);
    return t.origin === z.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function ql(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Jl(e, t, n) {
  return async (r) => {
    let i = Pn(r),
      a = Al(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Lm({
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
function Yl(e, t, n, r, i, a, o, s) {
  if (!n) return zl(e, r);
  let c = Pl(t, e, s, o);
  if (!c) return zl(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return zl(e, r);
  let m = Xr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Dp,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Bl(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => ql(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: Jl(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Ll(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Xl(e, t, n) {
  let r = Zl(e.style, t.style),
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
function Zl(e, t) {
  let n = j(e) ? e : void 0,
    r = n && !tt(n),
    i = t && !tt(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Ql(e, t, n) {
  if (!(t && Sn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: $l } : { ...i, onTap: r }) : e;
}
function $l(e) {
  let t = Al(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function eu({ EditorBar: e, fast: n = !1 }) {
  let r = C(cb),
    i = ne(Ap, n ? db : fb, jp),
    a = Bm(),
    o = t(() => {
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
    : _(ub, { children: _(T, { children: _(e, { framerSiteId: r, features: o }) }) });
}
function tu({ currentRoutePath: e, routerAPI: t, children: n }) {
  let i = r(),
    a = r(),
    o = r(t),
    s = r(null);
  ((o.current = t),
    c(() => {
      e && ((i.current ??= new Set()), i.current.add(e), a.current?.(e));
    }, [e]));
  let [l] = d(() => ({
    getInitialState: () => ({
      visitedPages: i.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? ru(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? ru(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && nu(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(pb.Provider, { value: l, children: n });
}
async function nu(e, t) {
  if (!ln(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    cn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function ru(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Un(r.path, n) : r.path;
}
function iu({ children: e, loadSnippetsModule: t }) {
  return _(wb.Provider, { value: t, children: e });
}
function au() {
  return g.useContext(wb);
}
function ou(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function su(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (M(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (M(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      N(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await cu(a.createContextualFragment(e), r, i));
}
async function cu(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = lu(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await cu(r, e, null)));
  }
}
function lu(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return uu(r, t, n);
}
function uu(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function du(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = bb), (n = xb));
      break;
    case `bodyEnd`:
      ((t = Sb), (n = Cb));
      break;
    case `headStart`:
      ((t = gb), (n = _b));
      break;
    case `headEnd`:
      ((t = vb), (n = yb));
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
function fu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = ou(e),
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
async function pu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = du(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = fu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((mu(t, o), s)) {
      await su(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = ou(e.id),
      u = `${c}
${e.code}
${l}`,
      d = gu(e.id, n, r, i);
    d ? await su(u, d, `afterend`) : await su(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function mu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (hu(n) && n.remove(), (n = e));
  }
}
function hu(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function gu(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = fu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function _u() {
  let e = au();
  return S(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(mb),
        o = a && a.dataset[hb] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await pu(t, n, r);
      }
    },
    [e]
  );
}
function vu(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function yu() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((Tb = e.timeZone), (Eb = e.locale));
}
function bu({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Or({ routeId: e, pathVariables: n, localeId: r, paginationInfo: yr()?.paginationInfo }, t);
}
function xu(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = yr();
  Or(
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
function Su(e, t, n, r) {
  let i = yr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Or(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      Xr(t, n)
    ));
}
function Cu() {
  return kn() >= 17 ? Ab : kb;
}
function wu(e = Au) {
  let t = (e) => {
    e.persisted && Nu();
  };
  En() && (f.addEventListener(`pageshow`, t), (Ob = Date.now() - Cu()));
  let n = Tu(),
    r = ju(e);
  return function () {
    (f.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Tu() {
  let e = f.history.scrollRestoration;
  return (
    (f.history.scrollRestoration = `manual`),
    function () {
      f.history.scrollRestoration = e;
    }
  );
}
function Eu(e) {
  return j(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Du() {
  return { x: f.scrollX, y: f.scrollY };
}
function Ou() {
  let e = yr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Eu(t)) return t;
}
function ku(e) {
  let t = yr();
  t && (Er({ ...t, scrollPosition: e }, void 0, !0), En() && (Ob = Date.now()));
}
function Au(e, t = !1) {
  let n = Ou();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (En() && !t) {
      let e = Cu();
      if (Date.now() - Ob < e) return;
    }
    ku(e);
  }
}
function ju(e) {
  let t = () => {
      e(Du());
    },
    n = () => {
      e(Du(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), f.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), f.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in f)) {
    let e = Mu(t);
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
function Mu(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || br(yr()) !== t) && e());
    },
    a = () => {
      let e = br(yr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = En() ? Cu() : 100;
      t = f.setTimeout(i, a);
    };
  return (
    f.addEventListener(`scroll`, a),
    function () {
      (f.removeEventListener(`scroll`, a), r());
    }
  );
}
function Nu() {
  let e = Ou();
  return e ? (f.scrollTo(e.x, e.y), !0) : !1;
}
function Pu(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Fu(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Pu(n, t), !0);
}
function Iu(e, t, n) {
  n !== `preserve-scroll-position` &&
    Ne.render(
      () => {
        (n === `restore-scroll-position` && Nu()) || Fu(e, t) || f.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Lu(e, t) {
  Ne.read(() => {
    f.scrollY !== 0 ||
      f.scrollX !== 0 ||
      Ne.render(
        () => {
          Nu() || Fu(e, t);
        },
        !1,
        !0
      );
  });
}
function Ru(e) {
  let t = Bm().scrollRestoration,
    n = r(void 0),
    i = r(!1),
    a = !!(t && !e),
    o = S(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = S((e, t = !1) => {
      i.current || Au(e, t);
    }, []),
    c = S(() => {
      a && (i.current = !0);
    }, [a]),
    l = S(() => n.current !== void 0 || i.current, []),
    u = S((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), Iu(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    te(() => {
      if (a) return wu(s);
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
function zu({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    te(() => {
      r(e, t);
    }),
    c(() => {
      i && Lu(f.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Bu() {
  let [e, t] = g.useState(0);
  return [e, g.useCallback(() => t((e) => e + 1), [])];
}
function Vu(e) {
  if (!e) return Tp;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Hu(e) {
  let t = Pr(e),
    n = r(void 0),
    i = S(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: S(
      async (e, r, a, o = !0) => {
        i();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Rt(c);
        if ((r.promise.finally(l), a === void 0)) return (e(c), r.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Tp);
        if ((t(d, s, a), e(c), await r.promise, c?.aborted)) return;
        let p = f.navigation?.transition;
        u();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || nh();
      },
      [i, t]
    ),
    cancelPendingNavigation: i,
  };
}
function Uu({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: s,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: h = Hp,
  preserveQueryParams: g = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (ri(), kr({ disabled: n, routeId: a, initialPathVariables: i, initialLocaleId: d }));
  let C = mr(),
    [T, E] = Bu(),
    D = _r(`framer-route-change`),
    O = t(() => (!Bm().synchronousNavigationOnDesktop || !Nn() ? m : (e) => e()), []),
    ee = _u(),
    k = r(!0),
    ne = r(),
    re = r(a),
    ie = r(i),
    ae = r(d),
    oe = Ru(n),
    { isNavigationCommitPending: se, usesCustomScrollRestoration: ce } = oe,
    { startNavigation: le, cancelPendingNavigation: ue } = Hu(ce),
    de = oe.scheduleScroll,
    fe = ae.current,
    pe = t(() => h.find(({ id: e }) => (fe ? e === fe : e === Up)) ?? null, [fe, h]),
    me = pe?.textDirection ?? `ltr`,
    he = x ? me : `ltr`;
  te(() => {
    x && document.documentElement.setAttribute(`dir`, me);
  }, [me, x]);
  let ge = Mr(),
    _e = t(
      () => ({
        activeLocale: pe,
        locales: h,
        setLocale: async (e) => {
          let t = D({ localized: !0 });
          await Lm({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          A(e) ? (r = e) : j(e) && (r = e.id);
          let i = h.find(({ id: e }) => e === Up),
            a = h.find(({ id: e }) => e === r);
          if (!a) return;
          let o = re.current,
            s = u[o];
          if (s)
            try {
              let e = await ge({
                currentLocale: pe,
                nextLocale: a,
                route: s,
                routeId: o,
                defaultLocale: i,
                pathVariables: ie.current,
                preserveQueryParams: g,
              });
              if (!e) return;
              let r = e.path;
              ((k.current = !1),
                (ie.current = e.pathVariables),
                (ae.current = a.id),
                (ne.current = r));
              let c = s.path && e.pathVariables ? Un(s.path, e.pathVariables) : s.path;
              (de({
                routeId: o,
                remountKey: `${a.id}${c}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                le(
                  () => {
                    C(o, o, () => O(E));
                  },
                  t,
                  n
                    ? void 0
                    : r
                      ? () => {
                          bu({
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
      [pe, n, E, h, g, u, de, le, C, D, O, ge]
    ),
    ve = S(
      (e, t, n, r, i, a, o, s, c) => {
        k.current = !1;
        let l = re.current,
          d = u[e],
          f = Lt(d, n),
          p = d?.path && i ? Un(d.path, i) : d?.path;
        if (
          ((re.current = e),
          (ie.current = i),
          (ae.current = t),
          (ne.current = r),
          de({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: f,
            shouldSmoothScroll: s ?? !1,
            behavior: a
              ? ce
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (ue(), O(E));
          return;
        }
        le(
          (t) => {
            C(l, e, () => O(E), t);
          },
          o,
          c,
          !0
        );
      },
      [E, u, ce, de, le, C, O, ue]
    );
  (Ar(oe, re, ve),
    c(() => {
      if (n) return;
      let e = () => {
        let e = yr(),
          t = f.location.hash === `` ? void 0 : f.location.hash.slice(1);
        (e && Lt(u[e.routeId], e.hash) === t) ||
          Dr({
            ...(e ||
              (Sr() ?? { routeId: re.current, pathVariables: ie.current, localeId: ae.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (f.addEventListener(`hashchange`, e), () => f.removeEventListener(`hashchange`, e));
    }, [n, u]));
  let ye = S(
      async (e, t, r, i, a) => {
        let o = u[e],
          s = ht(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = Vu(a);
        if (
          (Lm({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Lm({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Hm)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Lt(o, t),
          p = ie.current,
          m = ae.current;
        if (vu({ routeId: re.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          let a = se();
          if (a) {
            let t = o?.path && r ? Un(o.path, r) : o?.path;
            de({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ue();
          (l.ignore?.(), !a && ce && Iu(f, i, `scroll-to-hash-or-top`));
          let s = u[e];
          (!n &&
            s &&
            Su(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: g,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !ce && Iu(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let _ = u[re.current],
          v =
            Jr(b) +
            Xr(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: g,
              relative: !1,
              siteCanonicalURL: b,
            });
        ve(
          e,
          m,
          t,
          v,
          r,
          !1,
          l,
          i,
          n
            ? void 0
            : () => {
                (d(),
                  xu(e, o, {
                    historyPath: v,
                    currentRoutePath: _?.path,
                    hash: t,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [ue, u, h, ve, n, g, b, D, ce, se, de]
    ),
    be = At(u),
    xe = re.current,
    Se = ne.current,
    Ce = ie.current,
    we = u[xe],
    Te = we?.path,
    Ee = Db(we, xe, Se, Ce, pe, p),
    De = k.current;
  c(() => {
    ee(xe, Ce ?? {}, _e.activeLocale, De);
  }, [ee, xe, Ce, _e, De]);
  let Oe = t(
    () => ({
      navigate: ye,
      getRoute: be,
      currentRouteId: xe,
      currentPathVariables: Ce,
      routes: u,
      collectionUtils: s,
      preserveQueryParams: g,
      pageviewEventData: Ee,
      siteCanonicalURL: b,
      isInitialNavigation: De,
    }),
    [ye, be, xe, Ce, u, s, g, b, Ee, De]
  );
  if (!we) throw Error(`Router cannot find route for ${xe}`);
  let ke = !pe || !we.includedLocales || we.includedLocales.includes(pe.id),
    Ae = Te && Ce ? Un(Te, Ce) : Te,
    je = `${fe}${Ae}`,
    Me = va(() => ({ ...e, display: `contents` }));
  return _(jt, {
    api: Oe,
    children: _(uh.Provider, {
      value: _e,
      children: _(dh.Provider, {
        value: he,
        children: _(Iy, {
          children: _(Ur, {
            routerRenderKey: T,
            isNavigationCommitPending: oe.isNavigationCommitPending,
            children: w(tu, {
              currentRoutePath: Ae,
              routerAPI: Oe,
              children: [
                y && _(eu, { EditorBar: y, fast: !0 }),
                _(Sy, {
                  children: w(Gc, {
                    children: [
                      _(Gh.Start, {}),
                      _(zu, { currentRouteId: xe, remountKey: je, scrollRestoration: oe }),
                      _(qh, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: _(Wu, {
                          LayoutTemplate: v,
                          webPageId: we?.abTestingVariantId ?? xe,
                          style: e,
                          children: (t) =>
                            _(l, { children: ke ? ci(we.page, t ? Me : e) : o && ci(o, e) }, je),
                        }),
                      }),
                      y && _(eu, { EditorBar: y }),
                      _($r, {}),
                      _(Gh.End, {}),
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
function Wu({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Gu(e) {
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
function Ku(e) {
  return typeof e == `object` && !!e;
}
function qu(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Ku(r)) return;
    r = r[e];
  }
  return r;
}
function Ju(e) {
  return `${e.credentials}:${e.url}`;
}
function Yu(e) {
  return A(e) && !Number.isNaN(Number(e));
}
function Xu(e, t) {
  switch (e) {
    case `string`:
      return A(t) || $e(t);
    case `color`:
      return A(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return $e(t) || Yu(t);
    case `link`:
    case `image`:
      return A(t) && yl(t, !1);
    default:
      return !1;
  }
}
function Zu(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = qu(e.data, t.resultKeyPath);
  if (nt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Xu(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Qu(e, t) {
  if (W.current() === W.canvas) return !1;
  let n = Math.max(t * 1e3, Mb);
  return Date.now() >= e + n;
}
function $u(e) {
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
    g.useEffect(() => {
      n || bg.start();
    }, []),
    n
      ? _(Fr, {
          value: r ?? `preview`,
          children: _(Pe, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(_n, {
              collectionUtils: c,
              children: _(Lb, {
                children: _(cb.Provider, {
                  value: a,
                  children: _(iu, {
                    loadSnippetsModule: w,
                    children: _(Uu, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: T,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
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
      : _(f ? Iv : g.Fragment, {
          children: _(Nt, {
            routes: s,
            children: _(Dv, { children: g.isValidElement(t) ? t : g.createElement(t, { key: i }) }),
          }),
        })
  );
}
function ed(e) {
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
function td() {
  return Symbol.dispose ?? Symbol.for(`Symbol.dispose`);
}
function nd() {
  return Rb.priority;
}
function rd(e) {
  let t = Rb;
  return (
    (Rb = e),
    {
      [td()]() {
        Rb = t;
      },
    }
  );
}
function id(e = Rb.priority, t = Rb.canYield) {
  if (!(!t || e === void 0)) return Lm({ batch: !0, priority: In(e) });
}
function ad(e) {
  var t = [];
  try {
    Ee(t, rd({ priority: Rb.priority, canYield: !1 }));
    let n = e.next();
    return (M(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ce(t, n, r);
  }
}
async function od(e, t, n = Rb.priority, r = Rb.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Ee(o, rd(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ce(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = id(n, r);
      (o && (await o), Ee(l, rd(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ce(l, u, d);
    }
  }
  return a.value;
}
function sd(e, t = Rb.priority, n = Rb.canYield) {
  var r = [];
  try {
    Ee(r, rd({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : od(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ce(r, i, a);
  }
}
function* L(e, t = Rb.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (ot(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            od(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* cd(e, t = Rb.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = id(t);
    r && (yield r);
    let o = e[a];
    if (ot(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            od(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function ld(e) {
  return fd(e) || hd(e);
}
function ud(e) {
  return et(e) && e.every(j);
}
function dd(e) {
  return j(e) && Ze(e.read) && Ze(e.preload);
}
function fd(e) {
  return ud(e) || dd(e);
}
function pd(e) {
  return j(e) && j(e.schema);
}
function md(e) {
  return j(e) && j(e.collectionByLocaleId);
}
function hd(e) {
  return pd(e) || md(e);
}
function gd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Gd(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function _d(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Y.cast(e, t.definition)) };
  }
  return null;
}
function vd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function yd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function bd(e) {
  return yd(e)?.value ?? !1;
}
function xd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Sd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Cd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function wd(e) {
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
function Td(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ed(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Dd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Od(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function kd(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ad(e) {
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
function jd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Md(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Nd(e) {
  return Md(e)?.value ?? null;
}
function Pd(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Gd(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Fd(e, t) {
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
function Id(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ld(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Rd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function zd(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Bd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Vd(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Hd(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Ud(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Wd(e) {
  return Ud(e)?.value ?? null;
}
function Gd(e, t, n) {
  if (rt(e) || rt(t)) return (M(e === t), 0);
  switch (e.type) {
    case `array`:
      return (M(e.type === t.type), gd(e, t, n));
    case `boolean`:
      return (M(e.type === t.type), vd(e, t));
    case `color`:
      return (M(e.type === t.type), xd(e, t));
    case `date`:
      return (M(e.type === t.type), Cd(e, t));
    case `enum`:
      return (M(e.type === t.type), Td(e, t));
    case `file`:
      return (M(e.type === t.type), Dd(e, t));
    case `link`:
      return (M(e.type === t.type), kd(e, t));
    case `number`:
      return (M(e.type === t.type), jd(e, t));
    case `object`:
      return (M(e.type === t.type), Pd(e, t, n));
    case `responsiveimage`:
      return (M(e.type === t.type), Id(e, t));
    case `richtext`:
      return (M(e.type === t.type), Rd(e, t));
    case `vectorsetitem`:
      return (M(e.type === t.type), Bd(e, t));
    case `string`:
      return (M(e.type === t.type), Hd(e, t, n));
    default:
      N(e);
  }
}
async function Kd(e, t) {
  return dd(e) ? (await e.preload(t), e.read(t)) : e;
}
function qd(e) {
  if (!hd(e) || !e.id) return;
  let t = Vb.get(e.id);
  if (!t) return (Vb.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Jd(e) {
  let t = qd(e);
  if (t) return t;
  let n = Hb.get(e);
  if (n) return n;
  let r = `${Ub}${Math.random().toString(16).slice(2)}`;
  return (Hb.set(e, r), r);
}
function Yd(e, t) {
  if (fd(e)) {
    let n = Jd(e) + (t?.id ?? Up),
      r = Wb.get(n);
    if (r) return r;
    let i = new Bb(e, t);
    return (Wb.set(n, i), i);
  }
  if (pd(e)) return e;
  if (md(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  N(e, `Unsupported collection type`);
}
function Xd(e) {
  return e;
}
function Zd(e) {
  return Ze(e.getHash);
}
function R(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (j(r) && Zd(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Xd(`${n})`);
}
function Qd(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function $d(e, t) {
  return { collectionId: Jd(e), pointer: t };
}
function ef(e) {
  return j(e) && A(e.collectionId);
}
function tf(e, t) {
  return { collectionId: Jd(e), pointer: t };
}
function nf(e) {
  return j(e) && A(e.collectionId);
}
function rf(e, t) {
  let n = new Map();
  function r(e) {
    if (j(e))
      if (e.type === `Collection` && ld(e.data)) {
        let r = Yd(e.data, t),
          i = Jd(r);
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
function af(e) {
  return e;
}
function of(e) {
  return e;
}
function sf(e) {
  return e;
}
function cf() {
  return 25;
}
function lf() {
  return 12500;
}
function uf(e) {
  return Array(e).fill({ type: `All` });
}
function df(e) {
  return e;
}
function ff(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new Yx(t ? `Assertion Error: ` + t : `Assertion Error`);
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
function pf(e) {
  let t = new Set();
  if (!e) return t;
  ff(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (ff(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function mf(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) mf(n, t);
      return;
    case `object`:
      for (let n in e.value) mf(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function hf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function gf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function _f(e) {
  return `${e.functionName}(${e.arguments.map((e) => Sf(e)).join(`, `)})`;
}
function vf(e) {
  let t = `CASE`;
  e.value && (t += ` ${Sf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Sf(n.when)} THEN ${Sf(n.then)}`;
  return (e.else && (t += ` ELSE ${Sf(e.else)}`), (t += ` END`), t);
}
function yf(e) {
  let t = Sf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function bf(e) {
  let t = Sf(e.left),
    n = Sf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function xf(e) {
  return `CAST(${Sf(e.value)} as ${e.dataType})`;
}
function Sf(e) {
  switch (e.type) {
    case `Identifier`:
      return hf(e);
    case `LiteralValue`:
      return gf(e);
    case `FunctionCall`:
      return _f(e);
    case `Case`:
      return vf(e);
    case `UnaryOperation`:
      return yf(e);
    case `BinaryOperation`:
      return bf(e);
    case `TypeCast`:
      return xf(e);
    case `Select`:
      return `${Df(e)}`;
    default:
      N(e);
  }
}
function Cf(e) {
  return pd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function wf(e) {
  let t = `${Tf(e.left)} LEFT JOIN ${Tf(e.right)}`;
  return (e.constraint && (t += ` ON ${Sf(e.constraint)}`), t);
}
function Tf(e) {
  switch (e.type) {
    case `Collection`:
      return Cf(e);
    case `LeftJoin`:
      return wf(e);
    default:
      N(e);
  }
}
function Ef(e) {
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
function Df(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Sf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Tf(e.from)}`),
    e.where && (t += ` WHERE ${Sf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Sf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Sf(e.limit)}`),
    e.offset && (t += ` OFFSET ${Sf(e.offset)}`),
    Ef(t)
  );
}
function Of(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(nt(e) || j(e)))
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
function kf(e, t, n) {
  return g.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Af(e) {
  for (let [t, n] of Object.entries(e)) if (z.matchMedia(n).matches) return t;
}
function jf(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && z.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Mf(e, t, n = !0) {
  let i = C(wv),
    a = lo(),
    o = ma(),
    s = On() && (!a || o),
    l = r(s ? (Af(t) ?? e) : e),
    u = r(n && i ? e : l.current),
    d = Ro(),
    f = he(),
    p = S(
      (e) => {
        if (e !== l.current || e !== u.current) {
          let t = function () {
            ((l.current = u.current = e),
              m(() => {
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
    sh(() => {
      if (a) {
        if (o) {
          p(Af(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, o, a, t, p]),
    sh(() => {
      !n || i !== !0 || p(l.current);
    }, []),
    c(() => {
      if (!s || o) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = z.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (Nf(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => Pf(e, t));
    }, [o, t, p, s]),
    [l.current, u.current]
  );
}
function Nf(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Pf(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Ff(e) {
  setTimeout(e, 1);
}
function If(e) {
  let t = new Set(),
    n = jf(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Lf(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Op ? z.requestIdleCallback : Ff)(() => {
    document.querySelector(uS)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Lf(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Rf(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Lf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Rf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function zf(e, t) {
  return `${e}-${t}`;
}
function Bf(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (M(r !== void 0, `nextVariant should be defined`), r);
}
function Vf(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Hf(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Uf(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Wf(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Gf() {
  let e = r(),
    t = r(),
    n = S(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
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
function Kf() {
  let e = r(),
    t = r(!1),
    n = r(),
    i = C(sv);
  return (
    c(
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
        e.current = vs(i, `undefined`, a.current, null, (e) => {
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
function qf(e) {
  let t = Gf(),
    n = Kf();
  return S(
    (r, i = !1) => {
      if (Dp) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Jf() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (pS = () => {
        (e(), (t = void 0));
      }));
  });
}
function Yf(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (fS = Jf()));
}
function Xf() {
  (performance.mark(`click-received-listener`), (fS = void 0), pS?.(), (pS = void 0));
}
function Zf(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Yf, !0),
      document.__proto__.addEventListener.call(document, `click`, Xf, !0));
  }, [e]);
}
function Qf({
  variant: e,
  defaultVariant: n,
  transitions: i,
  enabledGestures: a,
  cycleOrder: o = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let u = Ro(),
    d = _l(),
    f = va(() => new Set(o));
  Zf(Bm().yieldOnTap);
  let p = qf(l),
    h = r({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Wf(e, n, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: a,
      cycleOrder: o,
      transitions: i,
    }),
    g = S((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Wf(e, a, f),
        s = Hf(i?.[o], t, n, !1, r);
      return [o, s ? zf(o, s) : void 0];
    }, []),
    _ = S(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = Bm().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          fS &&
          (performance.mark(`wait-for-tap-start`),
          await fS,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Lm({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          m(u);
          return;
        }
        p(() => m(u), i);
      },
      [g, u, p]
    ),
    v = S(
      ({ isHovered: e, isPressed: t, isError: n }) => {
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
      [_]
    ),
    y = S(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === dS ? Bf(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = S(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), p(() => m(u), !0));
    }, [u, p]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: ee,
    } = h.current,
    k = kf(h.current.baseVariant, h.current.gestureVariant, s);
  return t(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !ee[x],
      r = n ? zf(x, `loading`) : C;
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
        transition: Vf(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: cc(Uf(x, c), Hf(i, E, D, n, O)),
      }
    );
  }, [x, C, E, D, ee, k, y, w, T, v, b, c]);
}
function $f(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Yc()) return r(e);
  let a = ep(e, r),
    o = !1;
  function s(r, s) {
    let c = Qc(),
      { disableCustomCode: l } = Bm();
    if (l) return _(e, { ...r, ref: s });
    if (ol(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(ah.Provider, {
            value: n,
            children: _(Xc, {
              getErrorMessage: rl.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Jc(a.error), Jc(rl(t, n)), qc(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(ah.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return g.forwardRef(s);
}
function ep(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function tp(e, t) {
  return gS && !t
    ? Document.parseHTMLUnsafe(e)
    : ((hS ??= new DOMParser()), hS.parseFromString(e, t ?? `text/html`));
}
function np(e) {
  try {
    let t = tp(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function rp(e, t) {
  ap(e, ip(t));
}
function ip(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function ap(e, t) {
  (op(e, t),
    Array.from(e.children).forEach((e) => {
      ap(e, t);
    }));
}
function op(e, t) {
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
function sp(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (SS[t[2]] || 1));
}
function cp(e) {
  let t = sp(e.getAttribute(`width`)),
    n = sp(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function lp(e, t, n) {
  let r = dp(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function up(e) {
  return e ? (e.fonts ?? li()) : li();
}
function dp(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    fp(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(pp) })
      : t.fonts.push(pp(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function fp(e) {
  return CS in e;
}
function pp(e) {
  let t = mp(e) || hp(e) ? e : gp(e);
  return hp(t) ? t : _p(t);
}
function mp(e) {
  return `source` in e;
}
function hp(e) {
  return `cssFamilyName` in e;
}
function gp(e) {
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
function _p(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${mS}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function vp(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
var yp,
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
  z,
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
  B,
  V,
  H,
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
  U,
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
  W,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  G,
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
  K,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  q,
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
  Y,
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
  X,
  Qb,
  $b,
  ex,
  tx,
  nx,
  Z,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  Q,
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
  $,
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
  wS = e(() => {
    (o(),
      Me(),
      Te(),
      n(),
      E(),
      h(),
      (yp = ue({
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
      (bp = ue({
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
      (xp = ue({
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
      (Sp = ue({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = xp();
        },
      })),
      (Cp = ue({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Sp(),
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
      (wp = ue({
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
      (Tp = () => {}),
      (Ep = f !== void 0),
      (Dp =
        Ep &&
        (s.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent))),
      (Op = Ep && typeof f.requestIdleCallback == `function`),
      (kp = Op ? f.requestIdleCallback : setTimeout),
      (Ap = () => Tp),
      (jp = () => !1),
      (Mp = new Map()),
      (Np = new Map()),
      (Pp = new Set()),
      (Fp = `:`),
      (Ip = Ep ? void 0 : new Set()),
      (Lp = `preload`),
      (Rp = Object.keys),
      (zp = `equals`),
      (Bp = g.createContext({})),
      (Vp = g.createContext({})),
      (Hp = []),
      (Up = `default`),
      (Wp = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Gp = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && pt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Wp.Pending;
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
          return this.promiseState === Wp.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Wp.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Wp.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Ip !== void 0 && Ip.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Wp.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Wp.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Mp.has(this.cacheHash) ? Mp.get(this.cacheHash) : this.resolver();
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
        read = () => {
          if (this.promiseState === Wp.Fulfilled) return this.value;
          throw this.promiseState === Wp.Rejected
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
      (Kp = -1),
      (qp = -2),
      (Jp = -3),
      (Yp = -4),
      (Xp = -5),
      (Zp = -6),
      (Qp = -7),
      ($p = 2 ** 32 - 1),
      (em = $p - 1),
      (tm = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (nm = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (rm = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (im = typeof Uint8Array.fromBase64 == `function`),
      (am = typeof process == `object` && process.versions?.node !== void 0),
      (om = im ? Xt : am ? Qt : en),
      (sm = im ? Zt : am ? $t : tn),
      (z = Ep
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
      (cm = 2),
      (lm = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (um = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (fm = class {
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
      (pm = Ep ? void 0 : new fm()),
      (mm = um.CollectionUtilsCache),
      (hm = new WeakMap()),
      (gm = a(void 0)),
      (_m = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Gp(async () => {
              try {
                let t = await e();
                return (M(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(dt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = mn(n),
            i = hn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (pm !== void 0) {
              if (ct(e)) return e.then((e) => (pm.set(mm, i, e), e));
              pm.set(mm, i, e);
            }
            return e;
          }
          if (fn(mm, i)) {
            let e = pn(mm, i);
            return (this.cacheMap.set(i, new Gp(() => e)), e);
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
            (pm !== void 0 && pm.set(mm, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Gp(() =>
            s
              .then((e) => (pm !== void 0 && pm.set(mm, i, e), e))
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
      (vm = /Mac/u),
      (ym = /iPhone|iPod|iPad/iu),
      (bm = /MacIntel/iu),
      (xm = /Edg\//u),
      (Sm = /Chrome/u),
      (Cm = /Google Inc/u),
      (wm = /Safari/u),
      (Tm = /Apple Computer/u),
      (Em = /Firefox\/\d+\.\d+$/u),
      (Dm = /Version\/([\d.]+)/u),
      (Om = /FramerX/u),
      (km = /tablet|iPad|Nexus 9/iu),
      (Am = /mobi/iu),
      (jm = 1e3 / 60),
      (Mm = 1e3 / 25),
      (Nm = 500),
      (Pm = Promise.resolve()),
      (Fm = 100),
      (Im = (e) => {
        Ne.read(e, !1, !0);
      }),
      (Lm = zn(Im)),
      (Rm = !Dp),
      (zm = {}),
      (Bm = () => zm),
      (Vm = (e) => {
        zm = e;
      }),
      (Hm = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Um = `framer_variant`),
      (Wm = !1),
      (Gm = g.createContext({ global: void 0, routes: {} })),
      (Km = 10),
      (qm = 1e4),
      (Jm = (e) => `--view-transition-${e}`),
      (Ym = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Jm(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Jm(`conic-offset`)})`,
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
        @property ${Jm(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Xm = {
        circle: {
          makeKeyframe: (e, t) => `${Jm(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Jm(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${rr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Jm(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Ym,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${nr(e.x)} ${nr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = er(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Jm(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Jm(`blinds-width`)})`,
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
            @property ${Jm(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Jm(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Jm(`wipe-offset`)})`,
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
            @property ${Jm(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Zm = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Qm = `view-transition-styles`),
      ($m = {
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
      (eh = () => {}),
      (nh = () => {
        (th ||
          ((th = document.createElement(`div`)),
          th.setAttribute(`aria-live`, `assertive`),
          th.setAttribute(`aria-atomic`, `true`),
          (th.style.position = `absolute`),
          (th.style.transform = `scale(0)`),
          document.body.append(th)),
          setTimeout(() => {
            th.textContent = document.title;
          }, 60));
      }),
      (ih =
        Ep &&
        typeof f.navigation?.back == `function` &&
        !(() => {
          if (s === void 0) return !1;
          let e = s.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !En()),
      (ah = g.createContext(null)),
      (oh = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (sh = typeof document < `u` ? te : c),
      (ch = async () => {}),
      (lh = { activeLocale: null, locales: [], setLocale: ch }),
      (uh = (() => {
        let e = g.createContext(lh);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (dh = (() => {
        let e = g.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (fh = new Set()),
      (ph = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (mh = 46),
      (hh = 47),
      (gh = (e, t) => e.charCodeAt(t)),
      (_h = (e, t) => e.lastIndexOf(t)),
      (vh = (e, t, n) => e.slice(t, n)),
      (yh = !1),
      (bh = `/`),
      (xh = (e) => e === hh),
      (Sh = new Set([`/404.html`, `/404`, `/404/`])),
      (Ch = `__f_replay`),
      (wh =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Th = (e) => {
        e.target?.closest?.(`#main`) &&
          (Zr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Eh = !1),
      (Uh = [ei]),
      (Hh = [ei]),
      (Vh = [ei]),
      (Bh = [ei]),
      (zh = [ei]),
      (Rh = [ei]),
      (Lh = [ei]),
      (Ih = [ei]),
      (Fh = [ei]),
      (Ph = [ei]),
      (Nh = [ei]),
      (Mh = [ei]),
      (jh = [ei]),
      (Ah = [ei]),
      (kh = [ei]),
      (Oh = [ei]),
      (Dh = [ei]),
      (V = class {
        constructor() {
          (He(B, 5, this),
            pe(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            pe(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            pe(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            pe(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            pe(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            pe(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            pe(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ti(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ti(
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
            ti(
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
            ti(
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
            ti(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ti(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ti(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ti(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ti(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (B = le(null)),
      Se(B, 1, `markRenderStart`, Uh, V),
      Se(B, 1, `markRenderEnd`, Hh, V),
      Se(B, 1, `markUseInsertionEffectsStart`, Vh, V),
      Se(B, 1, `markUseInsertionEffectRouterStart`, Bh, V),
      Se(B, 1, `markUseInsertionEffectsEnd`, zh, V),
      Se(B, 1, `markUseLayoutEffectsStart`, Rh, V),
      Se(B, 1, `markRouterUseLayoutEffectStart`, Lh, V),
      Se(B, 1, `markUseLayoutEffectsEnd`, Ih, V),
      Se(B, 1, `markUseEffectsStart`, Fh, V),
      Se(B, 1, `markUseEffectsRouterStart`, Ph, V),
      Se(B, 1, `markUseEffectsAreSynchronous`, Nh, V),
      Se(B, 1, `markUseEffectsEnd`, Mh, V),
      Se(B, 1, `markRafStart`, jh, V),
      Se(B, 1, `markRafEnd`, Ah, V),
      Se(B, 1, `markLayoutStylePaintEnd`, kh, V),
      Se(B, 1, `measureMutationEffects`, Oh, V),
      Se(B, 1, `measureUnattributedHydrationOverhead`, Dh, V),
      we(B, V),
      (Wh = !1),
      (Gh = { Start: oi, End: si }),
      (Kh = class extends Error {}),
      (qh = class extends v {
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
          if (!(this.state.error instanceof Kh)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return ci(e, t);
        }
      }),
      (Jh = Object.freeze([])),
      (Xh = new Set()),
      (Zh = class {
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
      (Qh = (() => {
        function e(e) {
          return (
            wi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ti(e) ? e : new tg(e)
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
          (e.get = (e, t) => (e == null ? t : Ti(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Ti(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      ($h = `onUpdate`),
      (eg = `finishTransaction`),
      (tg = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new Zh();
        static interpolationFor(e, t) {
          if (Ti(e)) return Ei(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ti(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Oi(e.x, t.x), y: Oi(e.y, t.y) })),
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
      })((Ai ||= {})),
      (ng = {
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
      (rg = new (yp().Hsluv)()),
      (ig = {
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
      (ag =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (og = (e) => {
        let { r: t, g: n, b: r, a: i } = ea(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (sg = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        na({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (cg = (e) => {
        let { r: t, g: n, b: r, a: i } = ea(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (lg = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        na({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (ug = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return ra(this);
        }
        rgb() {
          return sa(this);
        }
        hsl() {
          return Bi(this.r, this.g, this.b);
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
              return new e(aa(t));
            case `srgb`:
              return new e(oa(aa(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            oa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = U(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Qi(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!A(t) || !U.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (dg = new Map()),
      (U = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = dg.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (dg.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ca(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && Yi(e) !== !1),
          (e.isColorObject = (e) =>
            j(e) &&
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
          (e.toHex = (e, t = !1) => zi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && ug.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...Fi(e.r, e.g, e.b), a: e.roundA })),
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
            let t = Ui(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Ui(e.r, e.g, e.b),
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
            let t = zi(e.r, e.g, e.b, !0);
            for (let e of Object.keys(ng)) if (ng[e] === t) return e;
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
                r: ji(i, [0, 1], [t.r, r.r], a),
                g: ji(i, [0, 1], [t.g, r.g], a),
                b: ji(i, [0, 1], [t.b, r.b], a),
                a: ji(i, [0, 1], [t.a, r.a], a),
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
                h: ji(i, [0, 1], [u, u + f], a),
                s: ji(i, [0, 1], [c.s, l.s], a),
                l: ji(i, [0, 1], [c.l, l.l], a),
                a: ji(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Ii(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => Bi(e, t, n)),
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
        let r = De([0, 255], [0, 1]);
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
      (fg = (e) => e instanceof We),
      (pg = bp().EventEmitter),
      (mg = class {
        _emitter = new pg();
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
      (hg = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (gg = z.requestAnimationFrame || hg),
      (_g = (e) => gg(e)),
      (vg = 1 / 60),
      (yg = class extends mg {
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
          vg = e;
        }
        static get TimeStep() {
          return vg;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), _g(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * vg;
        }
        tick = () => {
          this._started &&
            (_g(this.tick),
            this.emit(`update`, this._frame, vg),
            this.emit(`render`, this._frame, vg),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (bg = new yg()),
      (xg = { target: ma() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (W = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => xg.target,
        hasRestrictions: () => {
          let e = xg.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Sg = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Ae({
        borderTopWidth: Sg(`y`),
        borderLeftWidth: Sg(`x`),
        borderRightWidth: Sg(`x`),
        borderBottomWidth: Sg(`y`),
      }),
      (Cg = g.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (wg = {
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
      (Tg = {
        ...wg,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Eg = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Dg = { ...Eg, fontWeight: 500 }),
      (Og = {
        ...Eg,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (kg = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = wa(Ai.angleFromX(t.a, t.b)),
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
            return e(Ai(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Ai.distance(e.a, e.b)),
          e
        );
      })()),
      (G = {
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
        divide: (e, t) => G.multiply(e, 1 / t),
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
          x: Di(e.x, t),
          y: Di(e.y, t),
          width: Di(e.width, t),
          height: Di(e.height, t),
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
          maxX: G.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: G.maxY(e),
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
          return { x: a, y: o, width: Ai.distance(t, n), height: Ai.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(G.minX)), y: Math.min(...e.map(G.minY)) },
            n = { x: Math.max(...e.map(G.maxX)), y: Math.max(...e.map(G.maxY)) };
          return G.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: G.minX(e), y: G.minY(e) },
          { x: G.minX(e), y: G.maxY(e) },
          { x: G.maxX(e), y: G.minY(e) },
          { x: G.maxX(e), y: G.maxY(e) },
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
            t.x < G.minX(e) ||
            t.x > G.maxX(e) ||
            t.y < G.minY(e) ||
            t.y > G.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of G.points(t)) if (!G.containsPoint(e, n)) return !1;
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
          !(t.x >= G.maxX(e) || G.maxX(t) <= e.x || t.y >= G.maxY(e) || G.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = G.maxX(e),
            r = G.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = G.maxY(e),
            r = G.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => G.intersects(t, e)) === void 0,
        isEqual: (e, t) => G.equals(e, t),
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
            t.x < e.x ? (n = e.x - t.x) : t.x > G.maxX(e) && (n = t.x - G.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > G.maxY(e) && (r = t.y - G.maxY(e)),
            Ai.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: G.minX(e), y: G.minY(e) },
            r = { x: G.minX(t), y: G.minY(t) };
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
          let n = G.minX(e),
            r = G.minY(e),
            i = G.maxX(e),
            a = G.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = G.cornerPoints(e);
          return [kg(t, n), kg(n, r), kg(r, i), kg(i, t)];
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
                  N(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              N(n);
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
                  N(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              N(n);
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
          let n = kg(t, G.center(e)),
            r = G.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && kg.intersection(n, t, !0)) {
              let n = Ag[e];
              return (M(n, () => `Invalid edge name: ${JSON.stringify(Ag)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          M(r, `Rect array is empty`);
          let i = G.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            M(o);
            let s = G.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Ag = [`top`, `right`, `bottom`, `left`]),
      (jg = {
        quickfix: (e) => (
          (Ta(e.widthType) || Ta(e.heightType)) && (e.aspectRatio = null),
          P(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Ta(e.widthType) || P(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Ta(e.heightType) || P(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Mg = {
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
            d = jg.quickfix({
              left: P(t) || Ti(t),
              right: P(n) || Ti(n),
              top: P(r) || Ti(r),
              bottom: P(i) || Ti(i),
              widthType: Ea(a),
              heightType: Ea(o),
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
          } else a !== void 0 && typeof a != `string` && (f = Qh.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Qh.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Qh.getNumber(t) : null,
              right: d.right ? Qh.getNumber(n) : null,
              top: d.top ? Qh.getNumber(r) : null,
              bottom: d.bottom ? Qh.getNumber(i) : null,
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
            o = t?.sizing ? Qh.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Qh.getNumber(t?.sizing.height) : null,
            c = Ma(e.left, e.right);
          if (o && P(c)) i = o - c;
          else if (n && Ta(e.widthType)) i = n.width;
          else if (P(e.width))
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
                N(e.widthType);
            }
          let l = Ma(e.top, e.bottom);
          if (s && P(l)) a = s - l;
          else if (n && Ta(e.heightType)) a = n.height;
          else if (P(e.height))
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
                N(e.heightType);
            }
          return ja(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Mg.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Qh.getNumber(l.width) : null,
            d = l ? Qh.getNumber(l.height) : null;
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
          return r ? G.pixelAligned(f) : f;
        },
      }),
      (Ng = 200),
      (Pg = 200),
      (Fg = g.createContext({ parentSize: 0 })),
      (Ig = (e) => {
        let t = Ba(),
          { parentSize: n, children: r } = e,
          i = g.useMemo(() => ({ parentSize: n }), [Ha(n), Ua(n)]);
        return t === 1
          ? r
            ? _(D, { children: r })
            : null
          : _(Fg.Provider, { value: i, children: r });
      }),
      (Lg = ((e) => (
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
      ))(Lg || {})),
      (Rg = g.createContext(void 0)),
      (zg = new Set()),
      (Vg = `style[data-framer-css-ssr-minified]`),
      (Hg = (() => {
        if (!On()) return new Set();
        let e = document.querySelector(Vg)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Ug = `data-framer-css-ssr`),
      (Wg = (e, t, n) =>
        g.forwardRef((r, i) => {
          let { sheet: a, cache: o } = g.useContext(Rg) ?? {},
            s = n;
          if (!On()) {
            Ze(t) && (t = t(Ya(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Kg.add(e, s);
          }
          return (
            p(() => {
              (s && Hg.has(s)) ||
                (Ze(t)
                  ? t(Ya(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Ja(e, a, o));
            }, []),
            _(e, { ...r, ref: i })
          );
        })),
      (Gg = class {
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
      (Kg = new Gg()),
      (qg = [
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
      (Jg = ((e) => (
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
      ))(Jg || {})),
      (Yg = Jg),
      (Xg = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (M(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Xa(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            M(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${Yg.BorderTopWidth}${Yg.BorderRightWidth}${Yg.BorderBottomWidth}${Yg.BorderLeftWidth}`,
      (Zg = `--max-list-digits`),
      (Qg = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      ($g = { display: `inline-block` }),
      (e_ = { display: `block` }),
      (t_ = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Qg.display};
            flex-direction: ${Qg.flexDirection};
            justify-content: ${Qg.justifyContent};
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
                color: ${F([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${F([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${F([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${$g.display};
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
                color: ${F([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${F([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${F([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${F([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${F([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${F([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${F([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${F([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${F([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${F([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${F([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${F([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${F([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${F([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${F([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${F([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${F([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${F([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${F([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${e_.display};
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
            padding-inline-start: calc(calc(var(${Zg}, 1) + 1) * 1ch);
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
        ${Za(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (n_ = `--text-truncation-display-inline-for-safari-16`),
      (r_ = `--text-truncation-display-none-for-safari-16`),
      (i_ = `--text-truncation-line-break-for-safari-16`),
      (a_ = [
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
      (o_ = `(background: -webkit-named-image(i))`),
      (s_ = `(contain-intrinsic-size: inherit)`),
      (c_ = [
        `@supports ${o_} and (not ${s_}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${a_.join(`, `)} { display: var(${n_}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${a_.map((e) => `${e}::after`).join(`, `)} { content: var(${i_}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${r_}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${n_}, ${$g.display}) }
    }`,
      ]),
      (l_ = `--framer-will-change-override`),
      (u_ = `--framer-will-change-effect-override`),
      (d_ = `--framer-will-change-filter-override`),
      (f_ = `--overflow-clip-fallback`),
      (p_ = `--one-if-corner-shape-supported`),
      (m_ = (e) => {
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
                  `body { ${l_}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${l_}: transform; } }`,
                ]
              : [`body { ${l_}: none; ${u_}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${d_}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${d_}: filter; } }`,
                ]
              : [`body { ${d_}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${f_}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${p_}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...t_,
          ...qg,
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
          ...c_,
          f,
        ];
      }),
      (h_ = qa(() => m_(!1))),
      (g_ = qa(() => m_(!0))),
      (__ = `optional`),
      (K = (e) => e),
      (v_ =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (y_ = uo(
        (e) =>
          v_.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (b_ = (e) => () => {
        Ci(e);
      }),
      (x_ = () => () => {}),
      (S_ = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, n, r) {
          let i = q.useImageSource(e, n, r);
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
      (C_ = !1),
      (q = new Proxy(S_, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? x_()
              : b_(
                  C_
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (w_ = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (T_ = [1, 2, 2.2]),
      (E_ = [512, 1024, 2048, 4096]),
      (D_ = 512),
      (O_ = { position: `absolute`, ...w_, top: 0, right: 0, bottom: 0, left: 0 }),
      (k_ = `src`),
      (A_ = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && k_ in e;
        },
      }),
      (j_ = Tn()),
      (M_ = g.createContext(!1)),
      (N_ = class {
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
      (P_ = On() ? new N_() : void 0),
      (F_ = `0.000001px`),
      (I_ = ` translateZ(${F_})`),
      (L_ = An() || En() || jn()),
      (R_ = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Vo(t) : Ho(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !kt(this.props, e);
          }
          componentDidUpdate(e) {
            K(this.props).clip &&
              K(this.props).radius === 0 &&
              K(e).radius !== 0 &&
              Wo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
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
        hueRotate: (e, t) => U.toHslString(U.hueRotate(U(e), t)),
        setAlpha: (e, t) => U.toRgbString(U.alpha(U(e), t)),
        getAlpha: (e) => {
          let t = Yi(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => U.toRgbString(U.multiplyAlpha(U(e), t)),
        toHexValue: (e) => U.toHex(U(e)).toUpperCase(),
        toHex: (e) => U.toHexString(U(e)).toUpperCase(),
        toRgb: (e) => U.toRgb(U(e)),
        toRgbString: (e) => U.toRgbString(U(e)),
        toHSV: (e) => U.toHsv(U(e)),
        toHSL: (e) => U.toHsl(U(e)),
        toHslString: (e) => U.toHslString(U(e)),
        toHsvString: (e) => U.toHsvString(U(e)),
        hsvToHSLString: (e) => U.toHslString(U(Li(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => U.toHex(U(Li(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => U.toHexString(U(Li(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => U.toRgbString(U(Li(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Li(e.h, e.s, e.v),
        rgbaToString: (e) => U.toRgbString(U(e)),
        rgbToHexValue: (e) => U.toHex(U(e)),
        rgbToHexString: (e) => U.toHexString(U(e)),
        hslToString: (e) => U.toHslString(U(e)),
        hslToRgbString: (e) => U.toRgbString(U(e)),
        toColorPickerSquare: (e) => U.toRgbString(U({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => U(e).isValid !== !1,
        equals: (e, t) =>
          U.isP3String(e) || U.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = U(e)),
              typeof t == `string` && (t = U(t)),
              U.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = U(e);
          return t.a === 1 ? U.toHexString(t) : U.toRgbString(t);
        },
        toFormatString: (e) => (U.isP3String(e) ? e : U.toRgbString(U(e))),
      }),
      (V_ = /var\(.+\)/u),
      (H_ = new Map()),
      (U_ = [`stops`]),
      (W_ = [`start`, `end`]),
      (G_ = [`angle`, `alpha`]),
      (K_ = {
        isLinearGradient: (e) => j(e) && G_.every((t) => t in e) && (Qo(e) || Zo(e)),
        hash: (e) => e.angle ^ Xo(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Yo(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (q_ = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (J_ = {
        isRadialGradient: (e) => j(e) && q_.every((t) => t in e) && (Qo(e) || Zo(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Xo(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Yo(e, n),
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
      (X_ = new Set([...Y_, ...Y_.map((e) => `${e}Capture`)])),
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
      (ev = b(function (e, t) {
        let { name: n, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = Fo(e),
          u = ls(c),
          d = Lo(e),
          f = is(e),
          p = r(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": K(e)[`data-framer-offset-parent-id`],
          };
        !us(e) && n && (K(h)[`data-framer-name`] = n);
        let [g, v] = cs(c),
          y = ss(c),
          b = Ka(y);
        (i && !(v && !b && Pa(y))
          ? ((u.transformTemplate ||= Io(i)), Object.assign(h, No(i)))
          : (u.transformTemplate ||= void 0),
          Bo(e, m));
        let x = ko(e),
          S = ds(c, y, v, C(M_)),
          T = Wa(
            w(D, {
              children: [
                x
                  ? _(To, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: v ?? void 0,
                      nodeId: e.id && Po(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                _(Do, { ...o, border: a, layoutId: d }),
              ],
            }),
            S
          ),
          E = jo(e.as),
          O = Ao(x);
        return (
          e.fitImageDimension &&
            O &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = O.width / O.height)),
          w(E, { ...h, ...u, layoutId: d, style: g, ref: m, children: [T, s] })
        );
      })),
      (tv = $a(
        b(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(ev, { ...e, ref: t }) : null;
        })
      )),
      (nv = `__LAYOUT_TREE_ROOT`),
      (rv = g.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (iv = class extends v {
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
          return _(rv.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (av = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (ov = class {
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
      (sv = a(new Map())),
      (cv = typeof IntersectionObserver > `u` ? Tp : ys),
      (lv = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (uv = g.createContext(null)),
      (dv = class extends v {
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
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === nv && !this.props.isExiting;
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
          return _(Le.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (fv = (e) => {
        let t = g.useContext(rv);
        return _(dv, { ...e, sharedLayoutContext: t });
      }),
      (pv = g.createContext(!0)),
      (mv = a({ register: () => {}, deregister: () => {} })),
      (hv = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let i = ws(),
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
          c(
            () => (
              i.forEach((n, r) => {
                let a = r(e, t);
                i.set(r, Ze(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, t, i]
          ),
          _(mv.Provider, { value: a, children: n })
        );
      }),
      (gv = g.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: l,
        onTapBackdrop: u,
        backfaceVisible: d,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: g,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: x,
        areMagicMotionLayersPresent: S,
        id: T,
        isInitial: E,
      }) {
        let D = re(),
          O = C(ke),
          { persistLayoutIdCache: ee } = C(Cg),
          k = r({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Es({}, g, o),
          }),
          te = r(null),
          ne = O !== null && !O.isPresent;
        (t && k.current.wasCurrent === void 0 && ee(),
          c(() => {
            if (e || !D) return;
            if (ne) {
              k.current = { ...k.current, wasBeingRemoved: ne };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              a = (t && !i) || (!ne && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = Es(k.current.origins, g, o),
              l = k.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: x, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: x, ..._v, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, ne]));
        let ie = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          ae = h ? { type: !1 } : m || p,
          oe = { ...y };
        ((oe.left === void 0 || oe.right === void 0) && (oe.width = `auto`),
          (oe.top === void 0 || oe.bottom === void 0) && (oe.height = `auto`));
        let se = (Ds(o) || Ds(g)) && (e || t || n) ? 1200 : void 0,
          ce = { ..._v, ...k.current.origins },
          le = e
            ? {
                initial: { ...ce, ...g },
                animate: { ...ce, ...o, transition: ie },
                exit: { ...ce, ...v, transition: p },
              }
            : { animate: D, exit: { ...ce, ...v, transition: ae } },
          ue = !(ne || S === !1),
          de = !!t && ue,
          fe = t && E;
        return w(tv, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || ne || (t && b) ? x : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: se,
          },
          children: [
            e &&
              _(tv, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: l || `transparent`,
                onTap: ne ? void 0 : u,
              }),
            _(tv, {
              ...oe,
              ...le,
              transition: {
                default: ie,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: ne ? f : d,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: fe || e || (t && b) ? 1 : 0 },
              "data-is-present": ue ? void 0 : !1,
              ref: te,
              children: _(uv.Provider, {
                value: te,
                children: _(pv.Provider, {
                  value: de,
                  children: _(hv, {
                    isCurrent: de,
                    isOverlayed: i,
                    children: _(fv, {
                      isLead: t,
                      animatesLayout: !!b,
                      transition: ie,
                      isExiting: !ue,
                      isOverlayed: i,
                      id: T,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Ts)),
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
        warning = () => {
          Ci(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
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
      (yv = a(new vv())),
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
      (Sv = Rp(_v)),
      (Cv = g.createContext(void 0)),
      (wv = g.createContext(void 0)),
      (Tv = (() => {
        class e extends v {
          #e = null;
          state = xv();
          static defaultProps = { enabled: !0 };
          static contextType = Cv;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Ca(t) || !Sa(t)) return;
            let n = { ...bv.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = js(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Ca(t) || !Sa(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, bv.Instant)
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
            let t = js(this.state, e);
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
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Ca(e) || !Sa(e))
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
            this.#i(e, bv.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, bv.Fade, t);
          }
          push(e, t) {
            this.#i(e, Os(t), t);
          }
          modal(e, t) {
            this.#i(e, bv.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, ks(t), t);
          }
          flip(e, t) {
            this.#i(e, As(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, bv.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Ks(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              M(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              M(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                _(
                  gv,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: nc(o, e),
                    transitionProps: u,
                    animation: tc(o, e),
                    backfaceVisible: $s(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(fs, { children: ic({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              _(
                gv,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Qs(n, t),
                  transitionProps: ec(n, t),
                  instant: nc(n, t, !0),
                  animation: tc(n, t),
                  exitProps: e.transition.enter,
                  visible: rc(n, t),
                  backdropColor: Xs(e.transition),
                  backfaceVisible: Zs(n, t),
                  onTapBackdrop: ac(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: ic({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(tv, {
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
              children: _(yv.Provider, {
                value: this,
                children: w(wv.Provider, {
                  value: i,
                  children: [
                    _(gv, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: qs(n),
                      animation: Js(n),
                      backfaceVisible: Ys(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(ha, {
                        children: _(iv, {
                          children: _(ze, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    _(ze, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Ev = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Dv = $a(g.forwardRef(oc))),
      fe(Cp(), 1),
      fe(Cp(), 1),
      fe(Cp(), 1),
      (Ov = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (kv = Symbol(`private`)),
      (Av = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [kv]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Zh(),
                reset() {
                  for (let t in i)
                    if (Ov(i, t)) {
                      let n = Ov(e, t) ? K(e)[t] : void 0;
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
        set = (e, t, n, r) => {
          if (t === kv) return !1;
          let i = e[kv],
            a,
            o;
          if (
            (Ti(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Qh(n)),
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
            l = K(e)[t];
          if (l !== void 0) {
            Ti(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (K(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === kv) return K(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
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
      (Nv = (() => {
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
      (Pv = { update: 0 }),
      (Fv = g.createContext({ update: NaN })),
      (Iv = class extends v {
        observers = [];
        state = Pv;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), bg.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), Nv.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Nv._stores.forEach((e) => {
              let t = Nv.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(Fv.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      fe(Cp(), 1),
      (Lv = `__framer__`),
      (Rv = Lv.length),
      (zv = g.createContext(void 0)),
      (Bv = g.createContext(void 0)),
      (Vv = `default`),
      (Hv = new Set([Vv])),
      (Uv = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (M(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (M(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Vv, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Vv;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = pc(r)) : Vv;
        }
        setAll(e, t = Hv, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, Gv) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: j(a) ? a : void 0,
              animate: j(o) ? o : void 0,
              transformTemplate: A(i) ? i : void 0,
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
      (Wv = new Uv()),
      (Gv = `__Appear_Animation_Transform__`),
      (Kv = `data-framer-appear-id`),
      (qv = `data-framer-appear-animation`),
      (Jv = (e) => {
        if (co())
          return {
            animate: hc(e.animate) ? e.animate : void 0,
            initial: hc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Yv = [
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
      (Xv = (e) => ({
        x: be(e?.x ?? 0),
        y: be(e?.y ?? 0),
        opacity: be(e?.opacity ?? 1),
        scale: be(e?.scale ?? 1),
        rotate: be(e?.rotate ?? 0),
        rotateX: be(e?.rotateX ?? 0),
        rotateY: be(e?.rotateY ?? 0),
        skewX: be(e?.skewX ?? 0),
        skewY: be(e?.skewY ?? 0),
        transformPerspective: be(e?.transformPerspective ?? 0),
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
      (Zv = { willChange: `transform` }),
      Object.freeze(Zv),
      (Qv = {}),
      Object.freeze(Qv),
      ($v = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (ey = () => {
        let e = r();
        return (
          c(
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
      (ty = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (ny = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (ry = 1),
      (iy = 4),
      (ay = new Set([
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
      (oy = [`animate`, `animate`]),
      (sy = { inputRange: [], outputRange: [] }),
      (cy = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (ly = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (uy = () => ({
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
      (dy = [0, 1]),
      (fy = { parallax: ty, styleAppear: ay, styleTransform: cy, loop: $v, presence: ny }),
      (py = Rp(fy)),
      (my = (e) => e.reduce((e, t) => (e += t), 0)),
      (hy = (e) => e.reduce((e, t) => (e *= t), 1)),
      (gy = `current`),
      (_y = (e) =>
        g.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = Jv(t);
          if (r) return _(e, { ...t, ...r, ref: n });
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
            } = Rc(t),
            p = gs(n),
            { values: m, style: h } = wc(s, p, f, t.style, t[ae]),
            { values: v, style: y } = bc(i, p, t.style?.visibility),
            { values: b, style: x } = Ic(o, p),
            { values: S, style: C } = Mc(a, p),
            { values: w, style: T } = vc(c, p),
            E = g.useMemo(() => {
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
          Bc(t.style, E);
          let D = Xe(E.scale, hy),
            O = Xe(E.opacity, hy),
            ee = Xe(E.x, my),
            k = Xe(E.y, my),
            te = Xe(E.rotate, my),
            ne = Xe(E.rotateX, my),
            re = Xe(E.rotateY, my),
            ie = Xe(E.skewX, my),
            oe = Xe(E.skewY, my),
            se = Xe(E.transformPerspective, my),
            { drag: ce, dragConstraints: le } = l;
          zo(ce && zc(le) ? le : void 0);
          let ue = {
            opacity: O,
            scale: D,
            x: ee,
            y: k,
            rotate: te,
            rotateX: ne,
            rotateY: re,
            skewX: ie,
            skewY: oe,
          };
          nt(d) && (ue.transformPerspective = se);
          let de = Vc(t.animate) ? t.animate : void 0,
            fe = Vc(t.initial) ? t.initial : void 0,
            pe = Vc(t.exit) ? t.exit : void 0,
            me = f && !s.presenceInitial ? { initial: fe, animate: de, exit: pe } : {};
          return _(e, {
            ...l,
            ...me,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...ue, ...C, ...h },
            values: m,
            ref: p,
          });
        })),
      (vy = g.createContext({})),
      (yy = g.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = g.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = uc(a);
        return _(vy.Provider, { value: o, children: s(r, i) });
      })),
      (by = (e) =>
        g.forwardRef((t, n) =>
          _(e, { layoutId: Lo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (xy = !1),
      (Sy = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Uc(e)) return;
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
          cn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Uc(e)) throw e;
          return ((xy = !0), this.props.children);
        }
      }),
      (Cy = f === void 0 ? null : new Promise(() => {})),
      (wy = _(Wc, {})),
      (Ty = a(!1)),
      (Ty.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Ey = _(Kc, {})),
      (Dy = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Jc(this.props.getErrorMessage(), t?.componentStack), qc(e, t));
        }
        render() {
          let { children: e, fallback: t = Ey } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Oy = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            qc(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (ky = g.createContext(void 0)),
      (Ay = `code-crash:`),
      (jy = by(
        g.forwardRef(function (
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
          let u = va(() => (t ? `${t}-container` : void 0)),
            d = jo(n),
            f = cl(
              g.Children.map(e, (e) =>
                g.isValidElement(e) ? g.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(M_.Provider, {
              value: !0,
              children: _(ah.Provider, {
                value: i ?? null,
                children: _(_a, {
                  enabled: !1,
                  children: _(Ue, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (My = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Ny = `framer-cursor-none`),
      (Py = `framer-pointer-events-none`),
      (Fy = x(function ({ children: e }) {
        let t = va(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = ll(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ce();
        return w(My.Provider, { value: t, children: [e, !n && _(zy, {})] });
      })),
      (Iy = Wg(
        Fy,
        [
          `.${Ny}, .${Ny} * { cursor: none !important; }`,
          `.${Py}, .${Py} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (Ly = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (Ry = `data-framer-portal-id`),
      (zy = x(function () {
        let { onRegisterCursors: e } = C(My),
          [t, n] = d(!1),
          i = ge(0),
          a = ge(0),
          o = ge(0),
          s = r(null),
          l = r({ cursors: {}, cursorHash: void 0 }),
          u = Ro();
        (te(() => {
          let e = z.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? m(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function r() {
              (i.set(e), a.set(n), je(o, 1, { type: `tween`, duration: 0.2 }));
            }
            let c = () => {
              if (tt(l.current.cursors)) return;
              let t = pl(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), Ne.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                Re(c);
                return;
              }
              (Ne.read(c, !0), (e = t.clientX), (n = t.clientY), Ne.update(r));
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
              Ne.update(() => {
                s.current?.dispatchEvent(t);
              });
            }
            return (
              z.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              Ne.read(c, !0),
              () => {
                (z.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  Re(c));
              }
            );
          }, [o, i, a, u, t]),
          c(() => {
            if (!t) return;
            function e() {
              je(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              z.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), z.removeEventListener(`blur`, e));
              }
            );
          }, [o, t]),
          te(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = tt(e) ? null : pl(i.get(), a.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Ny, !1));
            };
          }, [i, a, e, u]));
        let { cursors: f, cursorHash: p } = l.current,
          h = p ? f[p] : null,
          g = ul(h);
        te(() => {
          t && document.body.classList.toggle(Ny, g);
        }, [g, t]);
        let v = h?.component,
          y = h?.transition ?? { duration: 0 },
          b = y.duration === void 0 ? y : { ...y, duration: y.duration * 1e3 },
          x = ye(i, b),
          w = ye(a, b),
          E = Xe(() => x.get() + (h?.offset?.x ?? 0)),
          D = Xe(() => w.get() + (h?.offset?.y ?? 0)),
          O = h?.alignment,
          ee = h?.placement,
          k = S((e, t) => `translate(${fl(ee, O)}) ${t}`, [O, ee]);
        return !t || !h || !v
          ? null
          : _(T, {
              children: _(v, {
                transformTemplate: k,
                style: { ...Ly, x: E, y: D, opacity: o },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: s,
                className: Py,
              }),
            });
      })),
      (By = `webPageId`),
      (Vy = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            M(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (M(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Ep && !jn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(gl(e), e), this.collectedLinks.set(gl(t), t));
          let n = this.nestingInfo.get(gl(e)) ?? new Set();
          (n.add(gl(t)), this.nestingInfo.set(gl(e), n));
        }
      }),
      (Hy = new Vy()),
      (Uy = `element`),
      (Wy = `collection`),
      (Gy = `collectionItemId`),
      (Ky = `pathVariables`),
      (qy = `framer/page-link,`),
      (Jy = a(void 0)),
      (Yy = class extends v {
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
            console.error(dt(Dp ? this.message : this.messageFatal, e)),
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
            r = (Dp && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
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
      (Xy = /:([a-z]\w*)/gi),
      (Zy = a(void 0)),
      (Qy = 500),
      ($y = 0.9),
      (eb = 1.7),
      (tb = 4),
      (nb = 1 / 0),
      (rb = new WeakMap()),
      (ib = new Set()),
      (ab = new Map()),
      (ob = !Rm || typeof IntersectionObserver > `u` ? null : Rl()),
      (sb = Ml(
        b(function (
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
          let p = Mt(),
            m = Pt(),
            h = Il(),
            { activeLocale: g, locales: _ } = Rr(),
            v = Wl(),
            b = Bn(),
            x = _l(),
            S = Gl({ nodeId: c, clickTrackingId: a, router: p, href: n, activeLocale: g }),
            C = t(() => {
              if (!n) return {};
              let e = hl(n) ? n : Cl(n);
              if (!e) return {};
              if (A(e))
                return Yl(
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
                c = v(t, a, g);
              if (ct(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: y,
                } = Nl(p, m, e, g, c, h),
                x = Bl(r, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: y },
                T = (e) => ql(p, l, () => b(l, w, !1, !C), d, f, i, e);
              return {
                href: u,
                target: x,
                onClick: Jl(u, S, T),
                "data-framer-page-link-current": (m && Ll(m, e, h)) || void 0,
                navigate: T,
                preload: () => b(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: y,
              };
            }, [n, p, g, h, r, m, i, S, o, _, s, v, b]),
            w = gs(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: ee, ...k } = C;
          _s(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return ob?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, ee, x]
          );
          let te = !!T;
          return Tl(
            uc(f).cloneAsArray(e, (e) => Xl(e, { ...d, ...Ql(k, u, te) }, w)),
            l,
            c,
            n,
            C,
            w
          );
        })
      )),
      (cb = g.createContext(void 0)),
      (lb = `__framer_force_showing_editorbar_since`),
      (ub = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (db = () => {
        try {
          return !!localStorage[lb];
        } catch {
          return !1;
        }
      }),
      (fb = () => !db()),
      (pb = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (mb = `main`),
      (hb = `framerGeneratedPage`),
      (gb = `<!-- Start of headStart -->`),
      (_b = `<!-- End of headStart -->`),
      (vb = `<!-- Start of headEnd -->`),
      (yb = `<!-- End of headEnd -->`),
      (bb = `<!-- Start of bodyStart -->`),
      (xb = `<!-- End of bodyStart -->`),
      (Sb = `<!-- Start of bodyEnd -->`),
      (Cb = `<!-- End of bodyEnd -->`),
      (wb = g.createContext(void 0)),
      (Tb = null),
      (Eb = null),
      kp(yu),
      (Db = (e, t, n, i, a, o) => {
        let s = C(cb),
          l = r(),
          u = vn(),
          d = r(!0);
        return (
          c(() => {
            function r() {
              (!Tb || !Eb) && yu();
              let r = n ? new URL(n, z.location.href) : z.location,
                c = {
                  version: cm,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
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
                  timezone: Tb,
                  locale: Eb,
                },
                l = d.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && u?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && A(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (ct(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (l.current = r()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                d.current ? (d.current = !1) : cn(`published_site_pageview`, t, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (l.current = r()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), cn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              f.addEventListener(`pageshow`, c),
              () => {
                f.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, t, n, i, a, s, u, o]),
          l
        );
      }),
      (Ob = 0),
      (kb = 500),
      (Ab = 200),
      (jb = { status: `loading`, data: void 0 }),
      (Mb = 5e3),
      (Nb = () => {}),
      (Pb = class e {
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
          let t = Ju(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Ju(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = z.setInterval(() => {
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
              Qu(r, i) ||
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
        persistCache = sc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Qu(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!On() || !yl(e.url, !1)) return;
          let t = Ju(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Zu(n, e);
          return (e.resultOutputType === `image` && A(i) && (await Gu(i).catch(Nb)), i);
        }
        async fetchWithCache(e) {
          if (!On()) return;
          let t = Ju(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Qu(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, jb);
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
          if (!yl(r, !1)) return Nb;
          let a = Ju(e),
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
      (Fb = a(void 0)),
      (Ib = a(!0)),
      (Lb = ({ children: e, client: t }) => {
        let [n] = d(() => t ?? new Pb()),
          [r, i] = d(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              m(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(Ib.Provider, { value: r, children: _(Fb.Provider, { value: n, children: e }) })
        );
      }),
      (Be.WillChange = Ge),
      (Rb = { priority: void 0, canYield: !0 }),
      (Y = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return _d(e, t);
            case `boolean`:
              return yd(e);
            case `color`:
              return Sd(e);
            case `date`:
              return wd(e);
            case `enum`:
              return Ed(e);
            case `file`:
              return Od(e);
            case `link`:
              return Ad(e);
            case `number`:
              return Md(e);
            case `object`:
              return Fd(e, t);
            case `responsiveimage`:
              return Ld(e);
            case `richtext`:
              return zd(e);
            case `string`:
              return Ud(e);
            case `vectorsetitem`:
              return Vd(e);
            case `unknown`:
              return e;
            default:
              N(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : at(e)
              ? { type: `date`, value: e.toISOString() }
              : $e(e)
                ? { type: `number`, value: e }
                : A(e)
                  ? { type: `string`, value: e }
                  : et(e)
                    ? { type: `array`, value: e.map(Y.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Gd(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Gd(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Gd(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Gd(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Gd(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Y.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Y.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Wd(e),
            i = Wd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Wd(e),
            i = Wd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Wd(e),
            i = Wd(t);
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
              return A(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              N(e);
          }
        },
      }),
      (zb = { type: `unknown`, isNullable: !0 }),
      (Bb = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = so(e);
          M(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (M(n !== `array`, `Array properties are not supported`),
              M(n !== `object`, `Object properties are not supported`),
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
            if (it(i)) continue;
            let a = this.schema[t];
            if (!nt(a)) {
              if ((M(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await Kd(this.collection, this.locale))[t]?.[n];
          return Gp.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Kd(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = id(e);
            i && (await i);
            let a = t[r];
            M(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Kd(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = id(t);
            e && (await e);
            let a = n[Number(i)];
            (M(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Vb = new Map()),
      (Hb = new WeakMap()),
      (Ub = `$r_`),
      (Wb = new Map()),
      (Gb = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = rf(e, t)), (this.priority = Qd(n)));
        }
        *resolveArrayValue(e) {
          return yield* cd(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* L(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          M(ef(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          M(n, `Can't find collection for rich text pointer`);
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
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          M(nf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (M(n, `Can't find collection for vector set item pointer`),
            M(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
      (Kb = `index`),
      (qb = class extends Set {
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
          return (e.sort((e, t) => e - t), R(this.name, ...e));
        }
      }),
      (Jb = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new Xb();
        fields = new X();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (Yb = class {
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
        resolvedFields = new X();
      }),
      (Xb = class extends qb {
        name = `Indexes`;
      }),
      (Zb = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          M(this.name, `Can only get value of field with a name`);
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
                M(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: $d(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                M(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: tf(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (X = class extends qb {
        name = `Fields`;
      }),
      (Qb = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return R(`OrderingField`, this.field.id, this.direction);
        }
      }),
      ($b = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return R(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== Kb) return !1;
          return !0;
        }
      }),
      (ex = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return R(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (tx = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (M(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (M(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new $b();
        }
        getRequiredResolvedFields() {
          let e = new X();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new ex(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          M(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (M(e, `Field must exist`), e.field);
        }
      }),
      (nx = 1e3),
      (Z = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = cf(),
            i = lf(),
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
      (rx = class {
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
      (ix = class e {
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
          let n = new X();
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
          let n = new X();
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
      (ax = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (ox = class extends ax {
        group;
        getGroup() {
          return (M(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (M(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return ad(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return od(this.evaluate(void 0), void 0, e);
        }
      }),
      (sx = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return R(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (cx = class e extends ox {
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
          return R(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new X();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new X();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new X(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new ex(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Z(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Z.max(i, n);
          }
          return new Z(0).add(Z.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new sx(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* cd(
              n.tuples.map((t) =>
                cd(
                  this.projections.map((n) => L({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new rx();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            M(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (lx = { type: 0 }),
      (Q = class extends ax {
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
          return ad(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return od(this.evaluate(void 0, void 0));
        }
      }),
      (ux = { type: 0 }),
      (dx = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return R(`CaseCondition`, this.when, this.then);
        }
      }),
      (fx = class e extends Q {
        constructor(e, t, n) {
          let r = new X(),
            i = new X(),
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
          return R(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Z(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new dx(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* L({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: cd(
              this.conditions.map((n) =>
                L({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Y.equal(n, e, ux)) return t;
          } else for (let { when: e, then: t } of r) if (bd(e)) return t;
          return i;
        }
      }),
      (px = class {
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
          let e = new tx();
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
            a = new X(),
            o;
          if (t.orderBy) {
            o = new $b();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (nt(t)) continue;
                a.add(t.field);
                let r = new Qb(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new Zb(sf(this.fieldId++), void 0, t.definition, void 0),
                  a = new sx(t, r);
                i.push(a);
                let s = new Qb(r, e.direction);
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
            a = new X(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (nt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              M(n.alias, `Subqueries should have an alias`);
              let r = sf(this.fieldId++),
                a = n.alias,
                s = new Zb(r, a, t.definition, void 0),
                c = new sx(t, s);
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
              N(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Yd(t.data, this.locale),
            i = t.alias,
            a = new Jb(af(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new Zb(sf(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new Zb(sf(this.fieldId++), Kb, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: Kb, collectionName: i });
            let t = new $b(),
              r = new Qb(e);
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
            let i = new $b(),
              o = new Yb(of(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new $b(),
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
              N(t.type, `Unsupported join type`);
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
              N(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(zb, null);
        }
        buildLiteralValue(e) {
          let t = Y.parse(e.value);
          return this.normalizer.newScalarConstant(zb, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (M(r, `Missing argument`), this.buildExpression(e, r));
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
                M(n, `Missing argument`),
                M(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                M(n, `Missing argument`),
                M(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              N(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new mx(e);
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
            let n = new mx(e);
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
              (t) => new dx(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              N(t.operator, `Unsupported unary operator`);
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
              N(t.operator, `Unsupported binary operator`);
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
      (mx = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new X();
        referencedOuterFields = new X();
      }),
      (hx = class e extends ox {
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
          return R(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          let t = new X(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new ex(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Z(0).add(Z.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* cd(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => bd(n[t] ?? null));
        }
      }),
      (gx = class e extends ox {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return R(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return Z.estimate(1, e ? 100 * nx : 50 * nx);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, nd()),
            i = nd(),
            a = [];
          for (let n of r) {
            let r = id(i);
            r && (yield r);
            let o = new rx();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new ix(n, a);
        }
      }),
      (_x = class e extends ox {
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
          return R(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new X(),
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
          return new ex(new $b(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Z.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* L({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (vx = class e extends ox {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return R(`RelationalScan`, this.collection.id);
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
          return Z.estimate(1, 200 * nx);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(nd()),
            r = nd(),
            i = [];
          for (let a of n) {
            let n = id(r);
            n && (yield n);
            let o = new rx();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new ix(t, i);
        }
      }),
      (yx = class e extends ox {
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
          return R(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new X(),
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
          return new ex(new $b(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Z.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* L({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (bx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bd(n) && bd(r) };
        }
      }),
      ($ = class extends Q {
        constructor(e, t) {
          let n = new X(),
            r = new X();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return R(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Z(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (xx = { type: 0 }),
      (Sx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* L({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.contains(n, r, xx) };
        }
      }),
      (Cx = { type: 0 }),
      (wx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* L({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.endsWith(n, r, Cx) };
        }
      }),
      (Tx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.equal(n, r, lx) };
        }
      }),
      (Ex = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.greaterThan(n, r, lx) };
        }
      }),
      (Dx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.greaterThanOrEqual(n, r, lx) };
        }
      }),
      (Ox = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.lessThan(n, r, lx) };
        }
      }),
      (kx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.lessThanOrEqual(n, r, lx) };
        }
      }),
      (Ax = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Y.equal(n, r, lx) };
        }
      }),
      (jx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bd(n) || bd(r) };
        }
      }),
      (Mx = { type: 0 }),
      (Nx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* L({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.startsWith(n, r, Mx) };
        }
      }),
      (Px = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof hx) {
            if (e.predicate instanceof bx) {
              let n = new _x(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof jx) {
              let n = new yx(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof vx)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new gx(n, uf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof hx) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof vx)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof Tx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ax &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ox &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof kx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ex &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Dx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Sx &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof $ &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Nx &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof $ &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof wx &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof $ &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = uf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new gx(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (Fx = class {
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
          let r = new Ix();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          M(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (Ix = class {
        node;
        cost = new Z(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Z.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (Lx = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (Rx = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new Fx(df(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new Lx(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            M(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (zx = class e extends ox {
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
          return R(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new X();
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
          let n = new X(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new ex(new $b(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Z.max(Z.max(r, a), o);
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
          let o = new ix(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new rx();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* L({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof Tx) {
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
          let r = new ix(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new rx();
              (n.merge(i),
                n.merge(a),
                bd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (Bx = class e extends ox {
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
          return R(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          let t = new X(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new ex(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Z(0).add(Z.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* L({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Nd(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (Vx = class e extends ox {
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
          return R(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          let t = new X(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new ex(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Z(0).add(Z.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* L({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Nd(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (Hx = class e extends Q {
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
          return R(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new X(),
            t = Object.values(this.namedFields);
          for (let n of t) nt(n.collection) || e.add(n);
          return new ex(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Z(0).add(n);
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
          let n = new rx();
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
      (Ux = class e extends Q {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            M(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return R(`ScalarCast`, this.input, this.definition);
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
          return Y.cast(n, this.definition);
        }
      }),
      (Wx = class e extends Q {
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
          return R(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new X();
          return (nt(this.field.collection) || e.add(this.field), new ex(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Z(0).add(n);
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
          let n = new rx();
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
      (Gx = { type: 0 }),
      (Kx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.in(n, r, Gx) };
        }
      }),
      (qx = { type: 1 }),
      (Jx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return R(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* L({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Y.indexOf(n, r, qx) };
        }
      }),
      (Yx = class extends Error {}),
      (Xx = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
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
          return R(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = pf(n),
            a = pf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (Zx = class e extends Q {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return R(`ScalarLength`, this.input);
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
          return { type: `number`, value: Y.length(n) };
        }
      }),
      (Qx = class e extends Q {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !bd(yield* this.input.evaluate(e, t)) };
        }
      }),
      ($x = { type: 0 }),
      (eS = class e extends Q {
        constructor(e, t) {
          let n = new X();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new X();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return R(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Z.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* L({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Y.in(n, r, $x) };
        }
      }),
      (tS = class extends Q {
        constructor(e, t) {
          M(e.name !== Kb, `Invalid field name`);
          let n = new X(),
            r = new X();
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
          return R(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Z(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (M(e, `Context must exist`), e.getValue(this.field))
            : (M(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (nS = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new vx(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new gx(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new zx(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof $ && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof zx && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new hx(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new cx(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof cx &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new Bx(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new Vx(e, t, n);
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
          let n = new tS(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new $(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof Qx)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof Tx) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof Ax) return this.newScalarEquals(e.left, e.right);
          if (e instanceof Ox) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof kx) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof Ex) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof Dx) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof bx) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof jx) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new Qx(e);
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
          let n = new bx(e, t);
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
          let n = new jx(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof tS;
          if (t instanceof tS && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Tx(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof tS;
          if (t instanceof tS && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Ax(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof tS;
          if (t instanceof tS && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Ox(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof tS;
          if (t instanceof tS && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new kx(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof tS;
          if (t instanceof tS && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Ex(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof tS;
          if (t instanceof tS && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Dx(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Kx(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new eS(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new dx(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new fx(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new Sx(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new Nx(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new wx(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new Zx(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new Jx(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new Hx(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new Wx(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new Xx(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new Ux(e, t);
          return this.finishScalar(n);
        }
      }),
      (rS = class extends ox {}),
      (iS = class e extends rS {
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
          return R(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          let t = new X();
          return new ex(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Z.estimate(0, 100 * nx).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          M(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            M(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new X()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) mf(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                M(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new rx();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (M(s, `Item not found`), M(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (aS = { type: 0 }),
      (oS = class e extends rS {
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
          return R(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
          let t = new X(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== Kb && (nt(e.collection) || t.add(e));
          return new ex(new $b(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Z(0).add(r);
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
              if (n.name === Kb) {
                let r = n.collection;
                M(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                M(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                M(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Y.equal(a, o, aS)) {
                if (rt(a) || Y.lessThan(a, o, aS)) return i ? -1 : 1;
                if (rt(o) || Y.greaterThan(a, o, aS)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (sS = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new Rx();
        normalizer = new nS(this.memo);
        explorer = new Px(this.normalizer);
        optimize(e) {
          let t = new px(this.normalizer, this.query, this.locale).build(),
            n = id(e);
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
          (M(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new iS(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new oS(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (cS = ed(`query-engine`)),
      (lS = class {
        async evalQuery(e, t, n, r) {
          cS.enabled &&
            cS.debug(`Query:
${Df(e)}`);
          let i = new Gb(e, t, r),
            a = new sS(e, t, i),
            o = id(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = ct(s) ? await s : s,
            u = id(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = id(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(L(a, r)));
          }
          let h = sd(cd(m, r), r);
          return n ? [ct(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new Gb(t, n, r);
          return sd(
            cd(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return L(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (uS = `style[data-framer-breakpoint-css]`),
      (dS = Symbol(`cycle`)),
      (mS = `Variable`),
      fe(wp(), 1),
      (gS = !Dn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (_S = On()),
      (vS = class {
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
      (yS = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (bS = class {
        entries = new Map();
        vectorSetItems = new Map();
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
              s = np(e);
            (s &&
              (t && rp(s, n),
              (s.id = n),
              (o = cp(s)),
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
          _S && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = yS),
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
          _S && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new vS(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !_S) ||
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
                        _S && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${yS}" aria-hidden="true">`),
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
      (xS = new bS()),
      (SS = {
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
      (CS = `explicitInter`),
      (We.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = be(e(this.get()));
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
  Lm as $,
  Ip as A,
  ml as B,
  up as C,
  mt as D,
  di as E,
  Vm as F,
  Si as G,
  _l as H,
  xS as I,
  Wg as J,
  Mt as K,
  Qr as L,
  Hy as M,
  xi as N,
  wS as O,
  If as P,
  vp as Q,
  Hc as R,
  Ug as S,
  pm as T,
  lo as U,
  Mf as V,
  Rr as W,
  _y as X,
  $f as Y,
  mc as Z,
  cc as _,
  zv as a,
  Kv as b,
  sb as c,
  lS as d,
  W as f,
  Kg as g,
  g_ as h,
  ya as i,
  ni as j,
  _t as k,
  Xn as l,
  oo as m,
  jy as n,
  Yy as o,
  lp as p,
  Qf as q,
  Lg as r,
  Gp as s,
  yy as t,
  $u as u,
  qv as v,
  Of as w,
  Gv as x,
  Wv as y,
  Pt as z,
};
//# sourceMappingURL=framer.hOva67ft.mjs.map
