import { n as e } from "./rolldown-runtime.vRAu6p--.mjs";
import {
  A as t,
  C as n,
  D as r,
  L as i,
  N as a,
  c as o,
  f as s,
  g as c,
  k as l,
  l as u,
  o as d,
  s as ee,
  u as f,
  v as te,
  z as p,
} from "./react.D7gtL4Ec.mjs";
import { C as m, a as ne, r as h, t as re } from "./motion.DC5Pkl7J.mjs";
import {
  $ as g,
  C as _,
  D as v,
  O as y,
  V as b,
  b as ie,
  bt as x,
  dt as S,
  f as ae,
  gt as oe,
  h as se,
  ht as ce,
  j as le,
  lt as ue,
  mt as de,
  n as fe,
  o as C,
  ot as pe,
  pt as me,
  q as w,
  r as he,
  t as ge,
  tt as _e,
  u as ve,
  ut as ye,
  y as be,
} from "./framer.BWiQWvWz.mjs";
import { i as xe, t as Se } from "./shared-lib.BrMDeYkr.mjs";
import {
  a as Ce,
  c as we,
  d as Te,
  f as Ee,
  i as De,
  l as Oe,
  n as ke,
  o as Ae,
  r as je,
  s as Me,
  t as Ne,
  u as Pe,
} from "./Yj8IYi3s1.DIQA5laX.mjs";
import { n as Fe, r as Ie } from "./zKajjvdpt.CVidztmQ.mjs";
function Le(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function T(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function E(e) {
  throw Error(`Unexpected value: ${e}`);
}
function D(e) {
  return typeof e == `string`;
}
function O(e) {
  return Number.isFinite(e);
}
function k(e) {
  return e === null;
}
function A(e) {
  if (k(e)) return 0;
  switch (e.type) {
    case C.Array:
      return 1;
    case C.Boolean:
      return 2;
    case C.Color:
      return 3;
    case C.Date:
      return 4;
    case C.Enum:
      return 5;
    case C.File:
      return 6;
    case C.ResponsiveImage:
      return 10;
    case C.Link:
      return 7;
    case C.Number:
      return 8;
    case C.Object:
      return 9;
    case C.RichText:
      return 11;
    case C.String:
      return 12;
    case C.VectorSetItem:
      return 13;
    default:
      E(e);
  }
}
function Re(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = M.read(e);
    n.push(t);
  }
  return { type: C.Array, value: n };
}
function ze(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) M.write(e, n);
}
function Be(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = M.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ve(e) {
  return { type: C.Boolean, value: e.readUint8() !== 0 };
}
function He(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function Ue(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function We(e) {
  return { type: C.Color, value: e.readString() };
}
function Ge(e, t) {
  e.writeString(t.value);
}
function Ke(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function qe(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: C.Date, value: n.toISOString() };
}
function Je(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ye(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Xe(e) {
  return { type: C.Enum, value: e.readString() };
}
function Ze(e, t) {
  e.writeString(t.value);
}
function Qe(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function $e(e) {
  return { type: C.File, value: e.readString() };
}
function et(e, t) {
  e.writeString(t.value);
}
function tt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function nt(e) {
  return { type: C.Link, value: e.readJson() };
}
function rt(e, t) {
  e.writeJson(t.value);
}
function it(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function at(e) {
  return { type: C.Number, value: e.readFloat64() };
}
function ot(e, t) {
  e.writeFloat64(t.value);
}
function st(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ct(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = M.read(e);
  }
  return { type: C.Object, value: n };
}
function lt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), M.write(e, r));
}
function ut(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = M.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function dt(e) {
  return { type: C.ResponsiveImage, value: e.readJson() };
}
function ft(e, t) {
  e.writeJson(t.value);
}
function pt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function mt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: C.RichText, value: e.readUint32() };
  if (t === 1) return { type: C.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function ht(e, t) {
  if (O(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (D(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function gt(e, t) {
  let n = e.value,
    r = t.value;
  if ((O(n) && O(r)) || (D(n) && D(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function _t(e) {
  return { type: C.String, value: e.readString() };
}
function vt(e, t) {
  e.writeString(t.value);
}
function yt(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function bt(e) {
  return { type: C.VectorSetItem, value: e.readUint32() };
}
function xt(e, t) {
  e.writeUint32(t.value);
}
function St(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function Ct(e) {
  let t = Math.floor(jt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function wt(e, t) {
  let n = Tt(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await q(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Nt(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function j(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Tt(e) {
  T(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  Et,
  Dt,
  Ot,
  kt,
  z,
  At,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  jt,
  Mt,
  q,
  Nt,
  J,
  Pt,
  Ft,
  It = e(() => {
    (i(),
      w(),
      (N = Object.create),
      (P = Object.defineProperty),
      (F = Object.getOwnPropertyDescriptor),
      (I = Object.getOwnPropertyNames),
      (L = Object.getPrototypeOf),
      (R = Object.prototype.hasOwnProperty),
      (Et = (e, t, n) =>
        t in e
          ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (Dt = (e, t) =>
        function () {
          return (t || (0, e[I(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (Ot = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of I(t))
            R.call(e, i) ||
              i === n ||
              P(e, i, { get: () => t[i], enumerable: !(r = F(t, i)) || r.enumerable });
        return e;
      }),
      (kt = (e, t, n) => (
        (n = e == null ? {} : N(L(e))),
        Ot(!t && e && e.__esModule ? n : P(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (z = (e, t, n) => Et(e, typeof t == `symbol` ? t : t + ``, n)),
      (At = kt(
        Dt({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (B = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (V = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = B.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = B.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = B.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = B.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = B.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = B.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = B.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = B.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = B.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = B.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            z(this, `offset`, 0),
            z(this, `view`),
            z(this, `decoder`, new TextDecoder()),
            (this.view = Le(this.bytes)));
        }
      }),
      p !== void 0 && p.requestIdleCallback,
      (H = (e) => 2 ** e - 1),
      (U = (e) => -(2 ** (e - 1))),
      (W = (e) => 2 ** (e - 1) - 1),
      U(8),
      U(16),
      U(32),
      -(BigInt(2) ** BigInt(63)),
      H(8),
      H(16),
      H(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      W(8),
      W(16),
      W(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (G = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            T(O(n), `Invalid chunkId`),
            T(O(r), `Invalid offset`),
            T(O(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (T(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Re(e);
            case 2:
              return Ve(e);
            case 3:
              return We(e);
            case 4:
              return qe(e);
            case 5:
              return Xe(e);
            case 6:
              return $e(e);
            case 7:
              return nt(e);
            case 8:
              return at(e);
            case 9:
              return ct(e);
            case 10:
              return dt(e);
            case 11:
              return mt(e);
            case 12:
              return _t(e);
            case 13:
              return bt(e);
            default:
              E(t);
          }
        }),
          (e.write = function (e, t) {
            let n = A(t);
            if ((e.writeUint8(n), !k(t)))
              switch (t.type) {
                case C.Array:
                  return ze(e, t);
                case C.Boolean:
                  return He(e, t);
                case C.Color:
                  return Ge(e, t);
                case C.Date:
                  return Je(e, t);
                case C.Enum:
                  return Ze(e, t);
                case C.File:
                  return et(e, t);
                case C.Link:
                  return rt(e, t);
                case C.Number:
                  return ot(e, t);
                case C.Object:
                  return lt(e, t);
                case C.ResponsiveImage:
                  return ft(e, t);
                case C.RichText:
                  return ht(e, t);
                case C.VectorSetItem:
                  return xt(e, t);
                case C.String:
                  return vt(e, t);
                default:
                  E(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = A(e),
              i = A(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (k(e) || k(t)) return 0;
            switch (e.type) {
              case C.Array:
                return (T(t.type === C.Array), Be(e, t, n));
              case C.Boolean:
                return (T(t.type === C.Boolean), Ue(e, t));
              case C.Color:
                return (T(t.type === C.Color), Ke(e, t));
              case C.Date:
                return (T(t.type === C.Date), Ye(e, t));
              case C.Enum:
                return (T(t.type === C.Enum), Qe(e, t));
              case C.File:
                return (T(t.type === C.File), tt(e, t));
              case C.Link:
                return (T(t.type === C.Link), it(e, t));
              case C.Number:
                return (T(t.type === C.Number), st(e, t));
              case C.Object:
                return (T(t.type === C.Object), ut(e, t, n));
              case C.ResponsiveImage:
                return (T(t.type === C.ResponsiveImage), pt(e, t));
              case C.RichText:
                return (T(t.type === C.RichText), gt(e, t));
              case C.VectorSetItem:
                return (T(t.type === C.VectorSetItem), St(e, t));
              case C.String:
                return (T(t.type === C.String), yt(e, t, n));
              default:
                E(e);
            }
          }));
      })((M ||= {})),
      (K = 3),
      (jt = 250),
      (Mt = [408, 429, 500, 502, 503, 504]),
      (q = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Mt.includes(r.status) || ++n > K) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > K) throw e;
          }
          await Ct(n);
        }
      }),
      (Nt = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((T(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = j(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((T(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = j(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          z(this, `chunks`, []);
        }
      }),
      (J = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = M.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), M.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          z(this, `fields`, new Map());
        }
      }),
      (Pt = class {
        scanItems() {
          return (
            (this.itemsPromise ??= q(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new V(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = J.read(n),
                  i = n.getOffset() - e,
                  a = new G(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            z(this, `itemsPromise`),
            z(
              this,
              `itemLoader`,
              new At.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = G.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await wt(this.url, t)).map((t, n) => {
                    let r = new V(t),
                      i = J.read(r),
                      a = e[n];
                    return (T(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (Ft = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = G.fromString(e),
                n = this.chunks[t.chunkId];
              return (T(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = G.fromString(e.pointer),
            r = G.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return M.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            z(this, `id`),
            z(this, `schema`),
            z(this, `indexes`),
            z(this, `resolveRichText`),
            z(this, `resolveVectorSetItem`),
            z(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Pt(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Lt(e) {
  return typeof e == `object` && !!e && !s(e) && Bt in e;
}
function Rt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function zt(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(a, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(se, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, s] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of s) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Lt(r) && r.preload(), (i[t] = r));
          }
          let c = e[r];
          return (
            Rt(c, `Module not found`),
            Lt(c) && c.preload(),
            o(he, {
              componentIdentifier: r,
              children: (e) => o(ge, { component: c, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? m.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var Y,
  Bt,
  Vt,
  Ht = e(() => {
    (i(),
      d(),
      w(),
      n(),
      p !== void 0 && p.requestIdleCallback,
      (Bt = `preload`),
      (Vt =
        (((Y = Vt || {})[(Y.Fragment = 1)] = `Fragment`),
        (Y[(Y.Link = 2)] = `Link`),
        (Y[(Y.Module = 3)] = `Module`),
        (Y[(Y.Tag = 4)] = `Tag`),
        (Y[(Y.Text = 5)] = `Text`),
        Y)));
  }),
  Ut,
  Wt,
  Gt,
  Kt,
  X,
  qt,
  Jt = e(() => {
    (w(),
      It(),
      Ht(),
      (Ut = {
        createdAt: { isNullable: !0, type: C.Date },
        FSeNJ5ZEk: { isNullable: !0, type: C.String },
        id: { isNullable: !1, type: C.String },
        L7l4usNHE: { isNullable: !0, type: C.String },
        nextItemId: { isNullable: !0, type: C.String },
        previousItemId: { isNullable: !0, type: C.String },
        updatedAt: { isNullable: !0, type: C.Date },
      }),
      (Wt = []),
      (Gt = (e) => {
        let t = Wt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Kt = zt({})),
      new ie(),
      (X = {
        collectionByLocaleId: {
          default: new Ft({
            chunks: [
              new URL(
                `./yNs7pg2h0-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/h37UNKgkqgvMX7JYt10D/wbhYdCGjklM7XZnYNq2D/yNs7pg2h0.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `3c357f8d-5045-4fea-a6d0-f6c318befdbbdefault`,
            indexes: [],
            resolveRichText: Kt,
            resolveVectorSetItem: Gt,
            schema: Ut,
          }),
        },
        displayName: `Categories`,
        id: `3c357f8d-5045-4fea-a6d0-f6c318befdbb`,
      }),
      (qt = X),
      y(X, {
        L7l4usNHE: { defaultValue: ``, title: `Title`, type: C.String },
        FSeNJ5ZEk: { preventLocalization: !1, title: `Slug`, type: C.String },
        createdAt: { title: `Created`, type: C.Date },
        updatedAt: { title: `Updated`, type: C.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/yNs7pg2h0:default`,
          title: `Previous`,
          type: C.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/yNs7pg2h0:default`,
          title: `Next`,
          type: C.CollectionReference,
        },
      }));
  }),
  Yt,
  Z,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  Q,
  an,
  on,
  sn,
  $,
  cn,
  ln;
e(() => {
  (d(),
    w(),
    re(),
    n(),
    xe(),
    Jt(),
    Ee(),
    we(),
    De(),
    Fe(),
    (Yt = {}),
    (Z = []),
    (Xt = `framer-ZpBe0`),
    (Zt = { FhguMr_dI: `framer-v-19ano3n` }),
    (Qt = (e, t, n) => (e && t ? `position` : n)),
    g(),
    ($t = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (en = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (tn = { dateStyle: `medium`, timeZone: `UTC` }),
    (nn = (e, t) => en(e, tn, t)),
    (rn = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Q = () => ({
      from: { alias: `FMLNLNpQY`, data: Se, type: `Collection` },
      select: [
        { collection: `FMLNLNpQY`, name: `WFE9HVH2q`, type: `Identifier` },
        { collection: `FMLNLNpQY`, name: `tzdqxmwNo`, type: `Identifier` },
        { collection: `FMLNLNpQY`, name: `yWTvZx92m`, type: `Identifier` },
        { collection: `FMLNLNpQY`, name: `Nh7fEMdNx`, type: `Identifier` },
        { collection: `FMLNLNpQY`, name: `id`, type: `Identifier` },
        {
          alias: `apmB6D3IC`,
          arguments: [
            {
              from: { alias: `apmB6D3IC`, data: qt, type: `Collection` },
              orderBy: [
                {
                  arguments: [
                    { collection: `FMLNLNpQY`, name: `DXiYRc_3M`, type: `Identifier` },
                    { collection: `apmB6D3IC`, name: `id`, type: `Identifier` },
                  ],
                  direction: `asc`,
                  functionName: `INDEX_OF`,
                  type: `FunctionCall`,
                },
              ],
              select: [
                { collection: `apmB6D3IC`, name: `L7l4usNHE`, type: `Identifier` },
                { collection: `apmB6D3IC`, name: `FSeNJ5ZEk`, type: `Identifier` },
                { collection: `apmB6D3IC`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
              where: {
                left: { collection: `apmB6D3IC`, name: `id`, type: `Identifier` },
                operator: `in`,
                right: { collection: `FMLNLNpQY`, name: `DXiYRc_3M`, type: `Identifier` },
                type: `BinaryOperation`,
              },
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
      ],
    })),
    (an = ({ query: e, pageSize: t, children: n }) => n(oe(e))),
    (on = ({ value: e }) =>
      S()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (sn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
    ($ = x(
      c(function (e, n) {
        let i = r(null),
          s = n ?? i,
          c = te(),
          { activeLocale: d, setLocale: f } = de();
        pe();
        let { style: p, className: re, layoutId: g, variant: v, ...y } = sn(e);
        ce(t(() => Ie({}, d), [d]));
        let [b, ie] = ye(v, Yt, !1),
          x = le(Xt, Oe, Ne, Ce),
          S = l(ve)?.isLayoutTemplate,
          oe = Qt(S, !!l(ne)?.transition?.layout),
          C = me();
        return (
          ue({}),
          o(ve.Provider, {
            value: { activeVariantId: b, primaryVariantId: `FhguMr_dI`, variantClassNames: Zt },
            children: u(h, {
              id: g ?? c,
              children: [
                o(on, { value: `html body { background: rgb(0, 0, 0); }` }),
                o(m.div, {
                  ...y,
                  className: le(x, `framer-19ano3n`, re),
                  ref: s,
                  style: { ...p },
                  children: u(m.div, {
                    className: `framer-r7ylwc`,
                    "data-framer-name": `Content`,
                    layout: oe,
                    children: [
                      o(_, {
                        __fromCanvasComponent: !0,
                        children: o(a, {
                          children: o(`h1`, {
                            className: `framer-styles-preset-gr9fsk`,
                            "data-styles-preset": `BYinVTrbf`,
                            children: `Blog`,
                          }),
                        }),
                        className: `framer-7bmhp8`,
                        fonts: [`Inter`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      o(`div`, {
                        className: `framer-14xe80q`,
                        children: o(fe, {
                          children: o(an, {
                            query: Q(),
                            children: (e, t, n) => {
                              let r = rn(e?.length ?? 0, 0);
                              return u(ee, {
                                children: [
                                  e?.map(
                                    (
                                      {
                                        apmB6D3IC: e,
                                        id: t,
                                        Nh7fEMdNx: n,
                                        tzdqxmwNo: r,
                                        WFE9HVH2q: i,
                                        yWTvZx92m: s,
                                      },
                                      c
                                    ) => {
                                      ((i ??= ``), (s ??= ``));
                                      let l = nn(n, C);
                                      return o(
                                        h,
                                        {
                                          id: `FMLNLNpQY-${t}`,
                                          children: o(be.Provider, {
                                            value: { WFE9HVH2q: i },
                                            children: o(se, {
                                              href: {
                                                pathVariables: { WFE9HVH2q: i },
                                                webPageId: `X0nzOU9lt`,
                                              },
                                              motionChild: !0,
                                              nodeId: `uyxdzrOFr`,
                                              scopeId: `zKajjvdpt`,
                                              children: u(m.a, {
                                                className: `framer-1bc6wf2 framer-u2ey93`,
                                                children: [
                                                  o(ae, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 800,
                                                      pixelWidth: 1200,
                                                      sizes: `180px`,
                                                      ...$t(r),
                                                    },
                                                    className: `framer-ju4kg0`,
                                                    "data-border": !0,
                                                  }),
                                                  u(`div`, {
                                                    className: `framer-gi87fv`,
                                                    "data-framer-name": `Text`,
                                                    children: [
                                                      o(_, {
                                                        __fromCanvasComponent: !0,
                                                        children: o(a, {
                                                          children: o(`h6`, {
                                                            className: `framer-styles-preset-1txeo9m`,
                                                            "data-styles-preset": `Yj8IYi3s1`,
                                                            children: `Title`,
                                                          }),
                                                        }),
                                                        className: `framer-kwa0ww`,
                                                        "data-framer-name": `Title`,
                                                        fonts: [`Inter`],
                                                        text: s,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      o(_, {
                                                        __fromCanvasComponent: !0,
                                                        children: o(a, {
                                                          children: o(`p`, {
                                                            className: `framer-styles-preset-jcm5ug`,
                                                            "data-styles-preset": `gCTULI_Xs`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `rgb(136, 136, 136)`,
                                                            },
                                                            children: `Content`,
                                                          }),
                                                        }),
                                                        className: `framer-moggeg`,
                                                        "data-framer-name": `Date`,
                                                        fonts: [`Inter`],
                                                        text: o(`time`, {
                                                          dateTime: n,
                                                          children: l,
                                                        }),
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                  o(`div`, {
                                                    className: `framer-1y8c03w`,
                                                    children: e?.map(
                                                      (
                                                        { FSeNJ5ZEk: e, id: t, L7l4usNHE: n },
                                                        r
                                                      ) => (
                                                        (n ??= ``),
                                                        (e ??= ``),
                                                        o(
                                                          h,
                                                          {
                                                            id: `apmB6D3IC-${t}`,
                                                            children: o(be.Provider, {
                                                              value: { FSeNJ5ZEk: e },
                                                              children: o(`div`, {
                                                                className: `framer-1723otz`,
                                                                children: o(_, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: o(a, {
                                                                    children: o(`p`, {
                                                                      className: `framer-styles-preset-jcm5ug`,
                                                                      "data-styles-preset": `gCTULI_Xs`,
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-text-color": `rgb(136, 136, 136)`,
                                                                      },
                                                                      children: `Title`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-scilhz`,
                                                                  "data-framer-name": `Title`,
                                                                  fonts: [`Inter`],
                                                                  text: n,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            }),
                                                          },
                                                          t
                                                        )
                                                      )
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        },
                                        t
                                      );
                                    }
                                  ),
                                  r !== !1 &&
                                    o(`div`, {
                                      className: `framer-1h3jgaq`,
                                      "data-border": !0,
                                      "data-framer-name": `Empty State`,
                                      children: o(_, {
                                        __fromCanvasComponent: !0,
                                        children: o(a, {
                                          children: o(`p`, {
                                            dir: `auto`,
                                            style: { "--framer-text-color": `rgb(153, 153, 153)` },
                                            children: `No items`,
                                          }),
                                        }),
                                        className: `framer-1nehs1k`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                ],
                              });
                            },
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ZpBe0.framer-u2ey93, .framer-ZpBe0 .framer-u2ey93 { display: block; }`,
        `.framer-ZpBe0.framer-19ano3n { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-ZpBe0 .framer-r7ylwc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 100%; padding: 0px; position: relative; width: 600px; }`,
        `.framer-ZpBe0 .framer-7bmhp8, .framer-ZpBe0 .framer-scilhz, .framer-ZpBe0 .framer-1nehs1k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZpBe0 .framer-14xe80q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZpBe0 .framer-1bc6wf2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-ZpBe0 .framer-ju4kg0 { --border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.06); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; --corner-shape-fallback: 0.796; border-bottom-left-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.4); flex: none; height: 100px; position: relative; width: 180px; }`,
        `.framer-ZpBe0 .framer-gi87fv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ZpBe0 .framer-kwa0ww, .framer-ZpBe0 .framer-moggeg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZpBe0 .framer-1y8c03w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ZpBe0 .framer-1723otz { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0.03); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 8px 0px 8px; position: relative; width: min-content; }`,
        `.framer-ZpBe0 .framer-1h3jgaq { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        ...Pe,
        ...ke,
        ...Ae,
        `.framer-ZpBe0[data-border="true"]::after, .framer-ZpBe0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ],
      `framer-ZpBe0`
    )),
    (cn = $),
    ($.displayName = `Blog`),
    ($.defaultProps = { height: 1104, width: 1200 }),
    v(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...b(Te),
        ...b(je),
        ...b(Me),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = _e.get(Q(), n);
        return Promise.allSettled([r.preload()]);
      },
    }),
    (ln = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerzKajjvdpt`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1104`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ln as __FramerMetadata__, cn as default, Z as queryParamNames };
//# sourceMappingURL=OHa-MrUuokdrg8UKK4jMYt7x0W21v6z9PYWyH5jhp_U.DW-ECDji.mjs.map
