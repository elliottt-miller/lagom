import { n as e } from "./rolldown-runtime.vRAu6p--.mjs";
import {
  C as t,
  D as n,
  L as r,
  R as i,
  c as a,
  l as o,
  o as s,
  s as c,
  x as l,
  z as u,
} from "./react.D7gtL4Ec.mjs";
import { O as d, ft as f, o as p, q as m, vt as h, x as g } from "./framer.BWiQWvWz.mjs";
function _(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function v(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
var y,
  b,
  x,
  S,
  C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  ee,
  F,
  te,
  ne,
  re,
  I,
  L,
  R,
  ie,
  z,
  B,
  ae,
  oe,
  se,
  V,
  H,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  U,
  ge,
  _e,
  W,
  ve,
  G,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  K,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  q,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
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
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  J,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir = e(() => {
    (r(),
      (A = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } }),
      (j = { duration: 0.5, overwrite: !1, delay: 0 }),
      (M = 1e8),
      (N = 1 / M),
      (P = 2 * Math.PI),
      (ee = P / 4),
      (F = 0),
      (te = Math.sqrt),
      (ne = Math.cos),
      (re = Math.sin),
      (I = function (e) {
        return typeof e == `string`;
      }),
      (L = function (e) {
        return typeof e == `function`;
      }),
      (R = function (e) {
        return typeof e == `number`;
      }),
      (ie = function (e) {
        return e === void 0;
      }),
      (z = function (e) {
        return typeof e == `object`;
      }),
      (B = function (e) {
        return !1 !== e;
      }),
      (ae = function () {
        return u !== void 0;
      }),
      (oe = function (e) {
        return L(e) || I(e);
      }),
      (se = (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {}),
      (V = Array.isArray),
      (H = /(?:-?\.?\d|\.)+/gi),
      (ce = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g),
      (le = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g),
      (ue = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi),
      (de = /[+-]=-?[.\d]+/),
      (fe = /[^,'"\[\]\s]+/gi),
      (pe = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i),
      (me = {}),
      (he = {}),
      (U = function (e) {
        return (he = Ve(e, me)) && rr;
      }),
      (ge = function (e, t) {
        return console.warn(
          `Invalid property`,
          e,
          `set to`,
          t,
          `Missing plugin? gsap.registerPlugin()`
        );
      }),
      (_e = function (e, t) {
        return !t && console.warn(e);
      }),
      (W = function (e, t) {
        return (e && (me[e] = t) && he && (he[e] = t)) || me;
      }),
      (ve = function () {
        return 0;
      }),
      (G = { suppressEvents: !0, isStart: !0, kill: !1 }),
      (ye = { suppressEvents: !0, kill: !1 }),
      (be = { suppressEvents: !0 }),
      (xe = {}),
      (Se = []),
      (Ce = {}),
      (we = {}),
      (Te = {}),
      (K = 30),
      (Ee = []),
      (De = ``),
      (Oe = function (e) {
        var t,
          n,
          r = e[0];
        if ((z(r) || L(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
          for (n = Ee.length; n-- && !Ee[n].targetTest(r););
          t = Ee[n];
        }
        for (n = e.length; n--;)
          (e[n] && (e[n]._gsap || (e[n]._gsap = new mn(e[n], t)))) || e.splice(n, 1);
        return e;
      }),
      (ke = function (e) {
        return e._gsap || Oe(wt(e))[0]._gsap;
      }),
      (Ae = function (e, t, n) {
        return (n = e[t]) && L(n) ? e[t]() : (ie(n) && e.getAttribute && e.getAttribute(t)) || n;
      }),
      (q = function (e, t) {
        return (e = e.split(`,`)).forEach(t) || e;
      }),
      (je = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      }),
      (Me = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      }),
      (Ne = function (e, t) {
        var n = t.charAt(0),
          r = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
        );
      }),
      (Pe = function (e, t) {
        for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
        return r < n;
      }),
      (Fe = function () {
        var e,
          t,
          n = Se.length,
          r = Se.slice(0);
        for (Ce = {}, Se.length = 0, e = 0; e < n; e++)
          ((t = r[e]), t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0));
      }),
      (Ie = function (e, t, n, r) {
        (Se.length && !b && Fe(),
          e.render(t, n, r || (b && t < 0 && (e._initted || e._startAt))),
          Se.length && !b && Fe());
      }),
      (Le = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + ``).match(fe).length < 2 ? t : I(e) ? e.trim() : e;
      }),
      (Re = function (e) {
        return e;
      }),
      (ze = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }),
      (Be = function (e) {
        return function (t, n) {
          for (var r in n) r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
        };
      }),
      (Ve = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }),
      (He = function e(t, n) {
        for (var r in n)
          r !== `__proto__` &&
            r !== `constructor` &&
            r !== `prototype` &&
            (t[r] = z(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
        return t;
      }),
      (Ue = function (e, t) {
        var n,
          r = {};
        for (n in e) n in t || (r[n] = e[n]);
        return r;
      }),
      (We = function (e) {
        var t = e.parent || S,
          n = e.keyframes ? Be(V(e.keyframes)) : ze;
        if (B(e.inherit)) for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
        return e;
      }),
      (Ge = function (e, t) {
        for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
        return n < 0;
      }),
      (Ke = function (e, t, n, r, i) {
        (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
        var a,
          o = e[r];
        if (i) for (a = t[i]; o && o[i] > a;) o = o._prev;
        return (
          o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[n]), (e[n] = t)),
          t._next ? (t._next._prev = t) : (e[r] = t),
          (t._prev = o),
          (t.parent = t._dp = e),
          t
        );
      }),
      (qe = function (e, t, n, r) {
        (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
        var i = t._prev,
          a = t._next;
        (i ? (i._next = a) : e[n] === t && (e[n] = a),
          a ? (a._prev = i) : e[r] === t && (e[r] = i),
          (t._next = t._prev = t.parent = null));
      }),
      (Je = function (e, t) {
        (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0));
      }),
      (Ye = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
        return e;
      }),
      (Xe = function (e) {
        for (var t = e.parent; t && t.parent;) ((t._dirty = 1), t.totalDuration(), (t = t.parent));
        return e;
      }),
      (Ze = function (e, t, n, r) {
        return (
          e._startAt &&
          (b
            ? e._startAt.revert(ye)
            : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, r))
        );
      }),
      (Qe = function e(t) {
        return !t || (t._ts && e(t.parent));
      }),
      ($e = function (e) {
        return e._repeat ? et(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      }),
      (et = function (e, t) {
        var n = Math.floor((e /= t));
        return e && n === e ? n - 1 : n;
      }),
      (tt = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
      }),
      (nt = function (e) {
        return (e._end = Me(e._start + (e._tDur / Math.abs(e._ts || e._rts || N) || 0)));
      }),
      (rt = function (e, t) {
        var n = e._dp;
        return (
          n &&
            n.smoothChildTiming &&
            e._ts &&
            ((e._start = Me(
              n._time -
                (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            nt(e),
            n._dirty || Ye(n, e)),
          e
        );
      }),
      (it = function (e, t) {
        var n;
        if (
          ((t._time || (t._initted && !t._dur)) &&
            ((n = tt(e.rawTime(), t)),
            (!t._dur || vt(0, t.totalDuration(), n) - t._tTime > N) && t.render(n, !0)),
          Ye(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (n = e; n._dp;) (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
          e._zTime = -N;
        }
      }),
      (at = function (e, t, n, r) {
        return (
          t.parent && Je(t),
          (t._start = Me((R(n) ? n : n || e !== S ? ht(e, n, t) : e._time) + t._delay)),
          (t._end = Me(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
          Ke(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
          lt(t) || (e._recent = t),
          r || it(e, t),
          e._ts < 0 && rt(e, e._tTime),
          e
        );
      }),
      (ot = function (e, t) {
        return (me.ScrollTrigger || ge(`scrollTrigger`, t)) && me.ScrollTrigger.create(t, e);
      }),
      (st = function (e, t, n, r, i) {
        if ((Cn(e, t, i), !e._initted)) return 1;
        if (
          !n &&
          e._pt &&
          !b &&
          ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
          D !== $t.frame
        )
          return (Se.push(e), (e._lazy = [i, r]), 1);
      }),
      (ct = function e(t) {
        var n = t.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
      }),
      (lt = function (e) {
        var t = e.data;
        return t === `isFromStart` || t === `isStart`;
      }),
      (ut = function (e, t, n, r) {
        var i,
          a,
          o,
          s = e.ratio,
          c =
            t < 0 ||
            (!t &&
              ((!e._start && ct(e) && !(!e._initted && lt(e))) ||
                ((e._ts < 0 || e._dp._ts < 0) && !lt(e))))
              ? 0
              : 1,
          l = e._rDelay,
          u = 0;
        if (
          (l &&
            e._repeat &&
            ((u = vt(0, e._tDur, t)),
            (a = et(u, l)),
            e._yoyo && 1 & a && (c = 1 - c),
            a !== et(e._tTime, l) &&
              ((s = 1 - c), e.vars.repeatRefresh && e._initted && e.invalidate())),
          c !== s || b || r || e._zTime === N || (!t && e._zTime))
        ) {
          if (!e._initted && st(e, t, r, n, u)) return;
          for (
            o = e._zTime,
              e._zTime = t || (n ? N : 0),
              n ||= t && !o,
              e.ratio = c,
              e._from && (c = 1 - c),
              e._time = 0,
              e._tTime = u,
              i = e._pt;
            i;
          )
            (i.r(c, i.d), (i = i._next));
          (t < 0 && Ze(e, t, n, !0),
            e._onUpdate && !n && Vt(e, `onUpdate`),
            u && e._repeat && !n && e.parent && Vt(e, `onRepeat`),
            (t >= e._tDur || t < 0) &&
              e.ratio === c &&
              (c && Je(e, 1),
              !n &&
                !b &&
                (Vt(e, c ? `onComplete` : `onReverseComplete`, !0), e._prom && e._prom())));
        } else e._zTime ||= t;
      }),
      (dt = function (e, t, n) {
        var r;
        if (n > t)
          for (r = e._first; r && r._start <= n;) {
            if (r.data === `isPause` && r._start > t) return r;
            r = r._next;
          }
        else
          for (r = e._last; r && r._start >= n;) {
            if (r.data === `isPause` && r._start < t) return r;
            r = r._prev;
          }
      }),
      (ft = function (e, t, n, r) {
        var i = e._repeat,
          a = Me(t) || 0,
          o = e._tTime / e._tDur;
        return (
          o && !r && (e._time *= a / e._dur),
          (e._dur = a),
          (e._tDur = i ? (i < 0 ? 1e10 : Me(a * (i + 1) + e._rDelay * i)) : a),
          o > 0 && !r && rt(e, (e._tTime = e._tDur * o)),
          e.parent && nt(e),
          n || Ye(e.parent, e),
          e
        );
      }),
      (pt = function (e) {
        return e instanceof gn ? Ye(e) : ft(e, e._dur);
      }),
      (mt = { _start: 0, endTime: ve, totalDuration: ve }),
      (ht = function e(t, n, r) {
        var i,
          a,
          o,
          s = t.labels,
          c = t._recent || mt,
          l = t.duration() >= M ? c.endTime(!1) : t._dur;
        return I(n) && (isNaN(n) || n in s)
          ? ((a = n.charAt(0)),
            (o = n.substr(-1) === `%`),
            (i = n.indexOf(`=`)),
            a === `<` || a === `>`
              ? (i >= 0 && (n = n.replace(/=/, ``)),
                (a === `<` ? c._start : c.endTime(c._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) * (o ? (i < 0 ? c : r).totalDuration() / 100 : 1))
              : i < 0
                ? (n in s || (s[n] = l), s[n])
                : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  o && r && (a = (a / 100) * (V(r) ? r[0] : r).totalDuration()),
                  i > 1 ? e(t, n.substr(0, i - 1), r) + a : l + a))
          : n == null
            ? l
            : +n;
      }),
      (gt = function (e, t, n) {
        var r,
          i,
          a = R(t[1]),
          o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
          s = t[o];
        if ((a && (s.duration = t[1]), (s.parent = n), e)) {
          for (r = s, i = n; i && !(`immediateRender` in r);)
            ((r = i.vars.defaults || {}), (i = B(i.vars.inherit) && i.parent));
          ((s.immediateRender = B(r.immediateRender)),
            e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]));
        }
        return new An(t[0], s, t[o + 1]);
      }),
      (_t = function (e, t) {
        return e || e === 0 ? t(e) : t;
      }),
      (vt = function (e, t, n) {
        return n < e ? e : n > t ? t : n;
      }),
      (yt = function (e, t) {
        return I(e) && (t = pe.exec(e)) ? t[1] : ``;
      }),
      (bt = function (e, t, n) {
        return _t(n, function (n) {
          return vt(e, t, n);
        });
      }),
      (xt = [].slice),
      (St = function (e, t) {
        return (
          e &&
          z(e) &&
          `length` in e &&
          ((!t && !e.length) || (e.length - 1 in e && z(e[0]))) &&
          !e.nodeType &&
          e !== C
        );
      }),
      (Ct = function (e, t, n) {
        return (
          n === void 0 && (n = []),
          e.forEach(function (e) {
            var r;
            return (I(e) && !t) || St(e, 1) ? (r = n).push.apply(r, wt(e)) : n.push(e);
          }) || n
        );
      }),
      (wt = function (e, t, n) {
        return x && !t && x.selector
          ? x.selector(e)
          : !I(e) || n || (!w && en())
            ? V(e)
              ? Ct(e, n)
              : St(e)
                ? xt.call(e, 0)
                : e
                  ? [e]
                  : []
            : xt.call((t || T).querySelectorAll(e), 0);
      }),
      (Tt = function (e) {
        return (
          (e = wt(e)[0] || _e(`Invalid scope`) || {}),
          function (t) {
            var n = e.current || e.nativeElement || e;
            return wt(
              t,
              n.querySelectorAll ? n : n === e ? _e(`Invalid scope`) || T.createElement(`div`) : e
            );
          }
        );
      }),
      (Et = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      }),
      (Dt = function (e) {
        if (L(e)) return e;
        var t = z(e) ? e : { each: e },
          n = ln(t.ease),
          r = t.from || 0,
          i = parseFloat(t.base) || 0,
          a = {},
          o = r > 0 && r < 1,
          s = isNaN(r) || o,
          c = t.axis,
          l = r,
          u = r;
        return (
          I(r)
            ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !o && s && ((l = r[0]), (u = r[1])),
          function (e, o, d) {
            var f,
              p,
              m,
              h,
              g,
              _,
              v,
              y,
              b,
              x = (d || t).length,
              S = a[x];
            if (!S) {
              if (((b = t.grid === `auto` ? 0 : (t.grid || [1, M])[1]), !b)) {
                for (v = -M; v < (v = d[b++].getBoundingClientRect().left) && b < x;);
                b--;
              }
              for (
                S = a[x] = [],
                  f = s ? Math.min(b, x) * l - 0.5 : r % b,
                  p = b === M ? 0 : s ? (x * u) / b - 0.5 : (r / b) | 0,
                  v = 0,
                  y = M,
                  _ = 0;
                _ < x;
                _++
              )
                ((m = (_ % b) - f),
                  (h = p - ((_ / b) | 0)),
                  (S[_] = g = c ? Math.abs(c === `y` ? h : m) : te(m * m + h * h)),
                  g > v && (v = g),
                  g < y && (y = g));
              (r === `random` && Et(S),
                (S.max = v - y),
                (S.min = y),
                (S.v = x =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (b > x ? x - 1 : c ? (c === `y` ? x / b : b) : Math.max(b, x / b)) ||
                    0) * (r === `edges` ? -1 : 1)),
                (S.b = x < 0 ? i - x : i),
                (S.u = yt(t.amount || t.each) || 0),
                (n = n && x < 0 ? sn(n) : n));
            }
            return ((x = (S[e] - S.min) / S.max || 0), Me(S.b + (n ? n(x) : x) * S.v) + S.u);
          }
        );
      }),
      (Ot = function (e) {
        var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
        return function (n) {
          var r = Me(Math.round(parseFloat(n) / e) * e * t);
          return (r - (r % 1)) / t + (R(n) ? 0 : yt(n));
        };
      }),
      (kt = function (e, t) {
        var n,
          r,
          i = V(e);
        return (
          !i &&
            z(e) &&
            ((n = i = e.radius || M),
            e.values ? ((e = wt(e.values)), (r = !R(e[0])) && (n *= n)) : (e = Ot(e.increment))),
          _t(
            t,
            i
              ? L(e)
                ? function (t) {
                    return ((r = e(t)), Math.abs(r - t) <= n ? r : t);
                  }
                : function (t) {
                    for (
                      var i,
                        a,
                        o = parseFloat(r ? t.x : t),
                        s = parseFloat(r ? t.y : 0),
                        c = M,
                        l = 0,
                        u = e.length;
                      u--;
                    )
                      (r
                        ? ((i = e[u].x - o), (a = e[u].y - s), (i = i * i + a * a))
                        : (i = Math.abs(e[u] - o)),
                        i < c && ((c = i), (l = u)));
                    return ((l = !n || c <= n ? e[l] : t), r || l === t || R(t) ? l : l + yt(t));
                  }
              : Ot(e)
          )
        );
      }),
      (At = function (e, t, n, r) {
        return _t(V(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
          return V(e)
            ? e[~~(Math.random() * e.length)]
            : (n ||= 1e-5) &&
                (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
                Math.floor(
                  Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) * n * r
                ) / r;
        });
      }),
      (jt = function () {
        var e = [...arguments];
        return function (t) {
          return e.reduce(function (e, t) {
            return t(e);
          }, t);
        };
      }),
      (Mt = function (e, t) {
        return function (n) {
          return e(parseFloat(n)) + (t || yt(n));
        };
      }),
      (Nt = function (e, t, n) {
        return Rt(e, t, 0, 1, n);
      }),
      (Pt = function (e, t, n) {
        return _t(n, function (n) {
          return e[~~t(n)];
        });
      }),
      (Ft = function e(t, n, r) {
        var i = n - t;
        return V(t)
          ? Pt(t, e(0, t.length), n)
          : _t(r, function (e) {
              return ((i + ((e - t) % i)) % i) + t;
            });
      }),
      (It = function e(t, n, r) {
        var i = n - t,
          a = 2 * i;
        return V(t)
          ? Pt(t, e(0, t.length - 1), n)
          : _t(r, function (e) {
              return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
            });
      }),
      (Lt = function (e) {
        for (var t, n, r, i, a = 0, o = ``; ~(t = e.indexOf(`random(`, a));)
          ((r = e.indexOf(`)`, t)),
            (i = e.charAt(t + 7) === `[`),
            (n = e.substr(t + 7, r - t - 7).match(i ? fe : H)),
            (o += e.substr(a, t - a) + At(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (a = r + 1));
        return o + e.substr(a, e.length - a);
      }),
      (Rt = function (e, t, n, r, i) {
        var a = t - e,
          o = r - n;
        return _t(i, function (t) {
          return n + (((t - e) / a) * o || 0);
        });
      }),
      (zt = function e(t, n, r, i) {
        var a = isNaN(t + n)
          ? 0
          : function (e) {
              return (1 - e) * t + e * n;
            };
        if (!a) {
          var o,
            s,
            c,
            l,
            u,
            d = I(t),
            f = {};
          if ((!0 === r && (i = 1) && (r = null), d)) ((t = { p: t }), (n = { p: n }));
          else if (V(t) && !V(n)) {
            for (c = [], l = t.length, u = l - 2, s = 1; s < l; s++) c.push(e(t[s - 1], t[s]));
            (l--,
              (a = function (e) {
                e *= l;
                var t = Math.min(u, ~~e);
                return c[t](e - t);
              }),
              (r = n));
          } else i || (t = Ve(V(t) ? [] : {}, t));
          if (!c) {
            for (o in n) bn.call(f, t, o, `get`, n[o]);
            a = function (e) {
              return zn(e, f) || (d ? t.p : t);
            };
          }
        }
        return _t(r, a);
      }),
      (Bt = function (e, t, n) {
        var r,
          i,
          a,
          o = e.labels,
          s = M;
        for (r in o)
          ((i = o[r] - t), i < 0 == !!n && i && s > (i = Math.abs(i)) && ((a = r), (s = i)));
        return a;
      }),
      (Vt = function (e, t, n) {
        var r,
          i,
          a,
          o = e.vars,
          s = o[t],
          c = x,
          l = e._ctx;
        if (s)
          return (
            (r = o[t + `Params`]),
            (i = o.callbackScope || e),
            n && Se.length && Fe(),
            l && (x = l),
            (a = r ? s.apply(i, r) : s.call(i)),
            (x = c),
            a
          );
      }),
      (Ht = function (e) {
        return (
          Je(e),
          e.scrollTrigger && e.scrollTrigger.kill(!!b),
          e.progress() < 1 && Vt(e, `onInterrupt`),
          e
        );
      }),
      (Ut = function (e) {
        e = (!e.name && e.default) || e;
        var t = e.name,
          n = L(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = { init: ve, render: zn, add: bn, kill: Vn, modifier: Bn, rawVars: 0 },
          a = { targetTest: 0, get: 0, getSetter: Fn, aliases: {}, register: 0 };
        if ((en(), e !== r)) {
          if (we[t]) return;
          (ze(r, ze(Ue(e, i), a)),
            Ve(r.prototype, Ve(i, Ue(e, a))),
            (we[(r.prop = t)] = r),
            e.targetTest && (Ee.push(r), (xe[t] = 1)),
            (t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`));
        }
        (W(t, r), e.register && e.register(rr, r, Wn));
      }),
      (Wt = 255),
      (Gt = {
        aqua: [0, Wt, Wt],
        lime: [0, Wt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Wt],
        navy: [0, 0, 128],
        white: [Wt, Wt, Wt],
        olive: [128, 128, 0],
        yellow: [Wt, Wt, 0],
        orange: [Wt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Wt, 0, 0],
        pink: [Wt, 192, 203],
        cyan: [0, Wt, Wt],
        transparent: [Wt, Wt, Wt, 0],
      }),
      (Kt = function (e, t, n) {
        return (
          (e += e < 0 ? 1 : e > 1 ? -1 : 0),
          ((6 * e < 1
            ? t + (n - t) * e * 6
            : e < 0.5
              ? n
              : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) *
            Wt +
            0.5) |
            0
        );
      }),
      (qt = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p = e ? (R(e) ? [e >> 16, (e >> 8) & Wt, e & Wt] : 0) : Gt.black;
        if (!p) {
          if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), Gt[e])) p = Gt[e];
          else if (e.charAt(0) === `#`) {
            if (
              (e.length < 6 &&
                ((r = e.charAt(1)),
                (i = e.charAt(2)),
                (a = e.charAt(3)),
                (e =
                  `#` + r + r + i + i + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
              e.length === 9)
            )
              return (
                (p = parseInt(e.substr(1, 6), 16)),
                [p >> 16, (p >> 8) & Wt, p & Wt, parseInt(e.substr(7), 16) / 255]
              );
            ((e = parseInt(e.substr(1), 16)), (p = [e >> 16, (e >> 8) & Wt, e & Wt]));
          } else if (e.substr(0, 3) === `hsl`)
            if (((p = f = e.match(H)), t)) {
              if (~e.indexOf(`=`)) return ((p = e.match(ce)), n && p.length < 4 && (p[3] = 1), p);
            } else
              ((o = (p[0] % 360) / 360),
                (s = p[1] / 100),
                (c = p[2] / 100),
                (i = c <= 0.5 ? c * (s + 1) : c + s - c * s),
                (r = 2 * c - i),
                p.length > 3 && (p[3] *= 1),
                (p[0] = Kt(o + 1 / 3, r, i)),
                (p[1] = Kt(o, r, i)),
                (p[2] = Kt(o - 1 / 3, r, i)));
          else p = e.match(H) || Gt.transparent;
          p = p.map(Number);
        }
        return (
          t &&
            !f &&
            ((r = p[0] / Wt),
            (i = p[1] / Wt),
            (a = p[2] / Wt),
            (l = Math.max(r, i, a)),
            (u = Math.min(r, i, a)),
            (c = (l + u) / 2),
            l === u
              ? (o = s = 0)
              : ((d = l - u),
                (s = c > 0.5 ? d / (2 - l - u) : d / (l + u)),
                (o =
                  l === r
                    ? (i - a) / d + (i < a ? 6 : 0)
                    : l === i
                      ? (a - r) / d + 2
                      : (r - i) / d + 4),
                (o *= 60)),
            (p[0] = ~~(o + 0.5)),
            (p[1] = ~~(100 * s + 0.5)),
            (p[2] = ~~(100 * c + 0.5))),
          n && p.length < 4 && (p[3] = 1),
          p
        );
      }),
      (Jt = function (e) {
        var t = [],
          n = [],
          r = -1;
        return (
          e.split(Xt).forEach(function (e) {
            var i = e.match(le) || [];
            (t.push.apply(t, i), n.push((r += i.length + 1)));
          }),
          (t.c = n),
          t
        );
      }),
      (Yt = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s = ``,
          c = (e + s).match(Xt),
          l = t ? `hsla(` : `rgba(`,
          u = 0;
        if (!c) return e;
        if (
          ((c = c.map(function (e) {
            return (
              (e = qt(e, t, 1)) &&
              l + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
            );
          })),
          n && ((a = Jt(e)), (r = n.c), r.join(s) !== a.c.join(s)))
        )
          for (i = e.replace(Xt, `1`).split(le), o = i.length - 1; u < o; u++)
            s +=
              i[u] +
              (~r.indexOf(u)
                ? c.shift() || l + `0,0,0,0)`
                : (a.length ? a : c.length ? c : n).shift());
        if (!i) for (i = e.split(Xt), o = i.length - 1; u < o; u++) s += i[u] + c[u];
        return s + i[o];
      }),
      (Xt = (function () {
        var e,
          t = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`;
        for (e in Gt) t += `|` + e + `\\b`;
        return RegExp(t + `)`, `gi`);
      })()),
      (Zt = /hsl[a]?\(/),
      (Qt = function (e) {
        var t,
          n = e.join(` `);
        if (((Xt.lastIndex = 0), Xt.test(n)))
          return ((t = Zt.test(n)), (e[1] = Yt(e[1], t)), (e[0] = Yt(e[0], t, Jt(e[1]))), !0);
      }),
      ($t = (function () {
        var e,
          t,
          n,
          r,
          i,
          a,
          o = Date.now,
          s = 500,
          c = 33,
          l = o(),
          d = l,
          f = 1e3 / 240,
          p = f,
          m = [],
          h = function n(u) {
            var h,
              g,
              _,
              v,
              y = o() - d,
              b = !0 === u;
            if (
              (y > s && (l += y - c),
              (d += y),
              (_ = d - l),
              (h = _ - p),
              (h > 0 || b) &&
                ((v = ++r.frame),
                (i = _ - 1e3 * r.time),
                (r.time = _ /= 1e3),
                (p += h + (h >= f ? 4 : f - h)),
                (g = 1)),
              b || (e = t(n)),
              g)
            )
              for (a = 0; a < m.length; a++) m[a](_, i, v, u);
          };
        return (
          (r = {
            time: 0,
            frame: 0,
            tick: function () {
              h(!0);
            },
            deltaRatio: function (e) {
              return i / (1e3 / (e || 60));
            },
            wake: function () {
              E &&
                (!w &&
                  ae() &&
                  ((C = w = u),
                  (T = C.document || {}),
                  (me.gsap = rr),
                  (C.gsapVersions ||= []).push(rr.version),
                  U(he || C.GreenSockGlobals || (!C.gsap && C) || {}),
                  (n = C.requestAnimationFrame)),
                e && r.sleep(),
                (t =
                  n ||
                  function (e) {
                    return setTimeout(e, (p - 1e3 * r.time + 1) | 0);
                  }),
                (k = 1),
                h(2));
            },
            sleep: function () {
              ((n ? C.cancelAnimationFrame : clearTimeout)(e), (k = 0), (t = ve));
            },
            lagSmoothing: function (e, t) {
              ((s = e || 1 / 0), (c = Math.min(t || 33, s)));
            },
            fps: function (e) {
              ((f = 1e3 / (e || 240)), (p = 1e3 * r.time + f));
            },
            add: function (e, t, n) {
              var i = t
                ? function (t, n, a, o) {
                    (e(t, n, a, o), r.remove(i));
                  }
                : e;
              return (r.remove(e), m[n ? `unshift` : `push`](i), en(), i);
            },
            remove: function (e, t) {
              ~(t = m.indexOf(e)) && m.splice(t, 1) && a >= t && a--;
            },
            _listeners: m,
          }),
          r
        );
      })()),
      (en = function () {
        return !k && $t.wake();
      }),
      (J = {}),
      (tn = /^[\d.\-M][\d.\-,\s]/),
      (nn = /["']/g),
      (rn = function (e) {
        for (
          var t,
            n,
            r,
            i = {},
            a = e.substr(1, e.length - 3).split(`:`),
            o = a[0],
            s = 1,
            c = a.length;
          s < c;
          s++
        )
          ((n = a[s]),
            (t = s === c - 1 ? n.length : n.lastIndexOf(`,`)),
            (r = n.substr(0, t)),
            (i[o] = isNaN(r) ? r.replace(nn, ``).trim() : +r),
            (o = n.substr(t + 1).trim()));
        return i;
      }),
      (an = function (e) {
        var t = e.indexOf(`(`) + 1,
          n = e.indexOf(`)`),
          r = e.indexOf(`(`, t);
        return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
      }),
      (on = function (e) {
        var t = (e + ``).split(`(`),
          n = J[t[0]];
        return n && t.length > 1 && n.config
          ? n.config.apply(null, ~e.indexOf(`{`) ? [rn(t[1])] : an(e).split(`,`).map(Le))
          : J._CE && tn.test(e)
            ? J._CE(``, e)
            : n;
      }),
      (sn = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      }),
      (cn = function e(t, n) {
        for (var r, i = t._first; i;)
          (i instanceof gn
            ? e(i, n)
            : i.vars.yoyoEase &&
              (!i._yoyo || !i._repeat) &&
              i._yoyo !== n &&
              (i.timeline
                ? e(i.timeline, n)
                : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))),
            (i = i._next));
      }),
      (ln = function (e, t) {
        return (e && (L(e) ? e : J[e] || on(e))) || t;
      }),
      (un = function (e, t, n, r) {
        (n === void 0 &&
          (n = function (e) {
            return 1 - t(1 - e);
          }),
          r === void 0 &&
            (r = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            }));
        var i,
          a = { easeIn: t, easeOut: n, easeInOut: r };
        return (
          q(e, function (e) {
            for (var t in ((J[e] = me[e] = a), (J[(i = e.toLowerCase())] = n), a))
              J[i + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = J[
                e + `.` + t
              ] = a[t];
          }),
          a
        );
      }),
      (dn = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      }),
      (fn = function e(t, n, r) {
        var i = n >= 1 ? n : 1,
          a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          o = (a / P) * (Math.asin(1 / i) || 0),
          s = function (e) {
            return e === 1 ? 1 : i * 2 ** (-10 * e) * re((e - o) * a) + 1;
          },
          c =
            t === `out`
              ? s
              : t === `in`
                ? function (e) {
                    return 1 - s(1 - e);
                  }
                : dn(s);
        return (
          (a = P / a),
          (c.config = function (n, r) {
            return e(t, n, r);
          }),
          c
        );
      }),
      (pn = function e(t, n) {
        n === void 0 && (n = 1.70158);
        var r = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
          i =
            t === `out`
              ? r
              : t === `in`
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : dn(r);
        return (
          (i.config = function (n) {
            return e(t, n);
          }),
          i
        );
      }),
      q(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
        var n = t < 5 ? t + 1 : t;
        un(
          e + `,Power` + (n - 1),
          t
            ? function (e) {
                return e ** +n;
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - (1 - e) ** n;
          },
          function (e) {
            return e < 0.5 ? (2 * e) ** n / 2 : 1 - (2 * (1 - e)) ** n / 2;
          }
        );
      }),
      (J.Linear.easeNone = J.none = J.Linear.easeIn),
      un(`Elastic`, fn(`in`), fn(`out`), fn()),
      (function (e, t) {
        var n = 1 / t,
          r = 2 * n,
          i = 2.5 * n,
          a = function (a) {
            return a < n
              ? e * a * a
              : a < r
                ? e * (a - 1.5 / t) ** 2 + 0.75
                : a < i
                  ? e * (a -= 2.25 / t) * a + 0.9375
                  : e * (a - 2.625 / t) ** 2 + 0.984375;
          };
        un(
          `Bounce`,
          function (e) {
            return 1 - a(1 - e);
          },
          a
        );
      })(7.5625, 2.75),
      un(`Expo`, function (e) {
        return e ? 2 ** (10 * (e - 1)) : 0;
      }),
      un(`Circ`, function (e) {
        return -(te(1 - e * e) - 1);
      }),
      un(`Sine`, function (e) {
        return e === 1 ? 1 : 1 - ne(e * ee);
      }),
      un(`Back`, pn(`in`), pn(`out`), pn()),
      (J.SteppedEase =
        J.steps =
        me.SteppedEase =
          {
            config: function (e, t) {
              e === void 0 && (e = 1);
              var n = 1 / e,
                r = e + (t ? 0 : 1),
                i = t ? 1 : 0,
                a = 1 - N;
              return function (e) {
                return (((r * vt(0, a, e)) | 0) + i) * n;
              };
            },
          }),
      (j.ease = J[`quad.out`]),
      q(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function (e) {
        return (De += e + `,` + e + `Params,`);
      }),
      (mn = function (e, t) {
        ((this.id = F++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : Ae),
          (this.set = t ? t.getSetter : Fn));
      }),
      (hn = (function () {
        function e(e) {
          ((this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            ft(this, +e.duration, 1, 1),
            (this.data = e.data),
            x && ((this._ctx = x), x.data.push(this)),
            k || $t.wake());
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || e === 0
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                ft(
                  this,
                  this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((en(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (rt(this, e), !n._dp || n.parent || it(n, this); n && n.parent;)
                (n.parent._time !==
                  n._start +
                    (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent));
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                at(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && Math.abs(this._zTime) === N) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), Ie(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + $e(this)) % (this._dur + this._rDelay) ||
                    (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + $e(this),
                  t
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
          }),
          (t.iteration = function (e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * n, t)
              : this._repeat
                ? et(this._tTime, n) + 1
                : 1;
          }),
          (t.timeScale = function (e) {
            if (!arguments.length) return this._rts === -N ? 0 : this._rts;
            if (this._rts === e) return this;
            var t = this.parent && this._ts ? tt(this.parent._time, this) : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || e === -N ? 0 : this._rts),
              this.totalTime(vt(-this._delay, this._tDur, t), !0),
              nt(this),
              Xe(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (en(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        this.progress() === 1 && Math.abs(this._zTime) !== N && (this._tTime -= N)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (t && (t._sort || !this.parent) && at(t, this, e - this._delay), this);
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (B(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? tt(t.rawTime(e), this)
                  : this._tTime
              : this._tTime;
          }),
          (t.revert = function (e) {
            e === void 0 && (e = be);
            var t = b;
            return (
              (b = e),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)),
              this.data !== `nested` && !1 !== e.kill && this.kill(),
              (b = t),
              this
            );
          }),
          (t.globalTime = function (e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
              ((n = t._start + n / (t._ts || 1)), (t = t._dp));
            return !this.parent && this._sat
              ? this._sat.vars.immediateRender
                ? -1
                : this._sat.globalTime(e)
              : n;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), pt(this))
              : this._repeat === -2
                ? 1 / 0
                : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return ((this._rDelay = e), pt(this), t ? this.time(t) : this);
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(ht(this, e), B(t));
          }),
          (t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, B(t));
          }),
          (t.play = function (e, t) {
            return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
          }),
          (t.reverse = function (e, t) {
            return (
              e != null && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return (e != null && this.seek(e, t), this.paused(!0));
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -N : 0)), this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return ((this._initted = this._act = 0), (this._zTime = -N), this);
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              n = this._start;
            return !!(
              !t ||
              (this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= n &&
                e < this.endTime(!0) - N)
            );
          }),
          (t.eventCallback = function (e, t, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((r[e] = t),
                    n && (r[e + `Params`] = n),
                    e === `onUpdate` && (this._onUpdate = t))
                  : delete r[e],
                this)
              : r[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (n) {
              var r = L(e) ? e : Re,
                i = function () {
                  var e = t.then;
                  ((t.then = null),
                    L(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                    n(r),
                    (t.then = e));
                };
              (t._initted && t.totalProgress() === 1 && t._ts >= 0) || (!t._tTime && t._ts < 0)
                ? i()
                : (t._prom = i);
            });
          }),
          (t.kill = function () {
            Ht(this);
          }),
          e
        );
      })()),
      ze(hn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -N,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      }),
      (gn = (function (e) {
        v(t, e);
        function t(t, n) {
          var r;
          return (
            t === void 0 && (t = {}),
            (r = e.call(this, t) || this),
            (r.labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = B(t.sortChildren)),
            S && at(t.parent || S, _(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && ot(_(r), t.scrollTrigger),
            r
          );
        }
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return (gt(0, arguments, this), this);
          }),
          (n.from = function (e, t, n) {
            return (gt(1, arguments, this), this);
          }),
          (n.fromTo = function (e, t, n, r) {
            return (gt(2, arguments, this), this);
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              We(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new An(e, t, ht(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return at(this, An.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, i, a, o) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = a),
              (n.onCompleteParams = o),
              (n.parent = this),
              new An(e, n, ht(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, i, a, o) {
            return (
              (n.runBackwards = 1),
              (We(n).immediateRender = B(n.immediateRender)),
              this.staggerTo(e, t, n, r, i, a, o)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
            return (
              (r.startAt = n),
              (We(r).immediateRender = B(r.immediateRender)),
              this.staggerTo(e, t, r, i, a, o, s)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              f,
              p,
              m,
              h = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              v = e <= 0 ? 0 : Me(e),
              y = this._zTime < 0 != e < 0 && (this._initted || !_);
            if ((this !== S && v > g && e >= 0 && (v = g), v !== this._tTime || n || y)) {
              if (
                (h !== this._time && _ && ((v += this._time - h), (e += this._time - h)),
                (r = v),
                (d = this._start),
                (u = this._ts),
                (c = !u),
                y && (_ || (h = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (((p = this._yoyo), (s = _ + this._rDelay), this._repeat < -1 && e < 0))
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = Me(v % s)),
                  v === g
                    ? ((o = this._repeat), (r = _))
                    : ((o = ~~(v / s)), o && o === v / s && ((r = _), o--), r > _ && (r = _)),
                  (f = et(this._tTime, s)),
                  !h && this._tTime && f !== o && (f = o),
                  p && 1 & o && ((r = _ - r), (m = 1)),
                  o !== f && !this._lock)
                ) {
                  var x = p && 1 & f,
                    C = x === (p && 1 & o);
                  if (
                    (o < f && (x = !x),
                    (h = x ? 0 : _),
                    (this._lock = 1),
                    (this.render(h || (m ? 0 : Me(o * s)), t, !_)._lock = 0),
                    (this._tTime = v),
                    !t && this.parent && Vt(this, `onRepeat`),
                    this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                    (h && h !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((_ = this._dur),
                      (g = this._tDur),
                      C &&
                        ((this._lock = 2),
                        (h = x ? _ : -1e-4),
                        this.render(h, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !c))
                  )
                    return this;
                  cn(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((l = dt(this, Me(h), Me(r))), l && (v -= r - (r = l._start))),
                (this._tTime = v),
                (this._time = r),
                (this._act = !u),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (h = 0)),
                !h && r && !t && (Vt(this, `onStart`), this._tTime !== v))
              )
                return this;
              if (r >= h && e >= 0)
                for (i = this._first; i;) {
                  if (((a = i._next), (i._act || r >= i._start) && i._ts && l !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !c))
                    ) {
                      ((l = 0), a && (v += this._zTime = -N));
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var w = e < 0 ? e : r; i;) {
                  if (((a = i._prev), (i._act || w <= i._end) && i._ts && l !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (w - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (w - i._start) * i._ts,
                        t,
                        n || (b && (i._initted || i._startAt))
                      ),
                      r !== this._time || (!this._ts && !c))
                    ) {
                      ((l = 0), a && (v += this._zTime = w ? -N : N));
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                l &&
                !t &&
                (this.pause(), (l.render(r >= h ? 0 : -N)._zTime = r >= h ? 1 : -1), this._ts)
              )
                return ((this._start = d), nt(this), this.render(e, t, n));
              (this._onUpdate && !t && Vt(this, `onUpdate`, !0),
                ((v === g && this._tTime >= this.totalDuration()) || (!v && h)) &&
                  (d === this._start || Math.abs(u) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((e || !_) && ((v === g && this._ts > 0) || (!v && this._ts < 0)) && Je(this, 1),
                  !t &&
                    !(e < 0 && !h) &&
                    (v || h || !g) &&
                    (Vt(this, v === g && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
                    this._prom && !(v < g && this.timeScale() > 0) && this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((R(t) || (t = ht(this, t, e)), !(e instanceof hn))) {
              if (V(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (I(e)) return this.addLabel(e, t);
              if (!L(e)) return this;
              e = An.delayedCall(0, e);
            }
            return this === e ? this : at(this, e, t);
          }),
          (n.getChildren = function (e, t, n, r) {
            (e === void 0 && (e = !0),
              t === void 0 && (t = !0),
              n === void 0 && (n = !0),
              r === void 0 && (r = -M));
            for (var i = [], a = this._first; a;)
              (a._start >= r &&
                (a instanceof An
                  ? t && i.push(a)
                  : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
                (a = a._next));
            return i;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return I(e)
              ? this.removeLabel(e)
              : L(e)
                ? this.killTweensOf(e)
                : (qe(this, e), e === this._recent && (this._recent = this._last), Ye(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Me(
                    $t.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return ((this.labels[e] = ht(this, t)), this);
          }),
          (n.removeLabel = function (e) {
            return (delete this.labels[e], this);
          }),
          (n.addPause = function (e, t, n) {
            var r = An.delayedCall(0, t || ve, n);
            return ((r.data = `isPause`), (this._hasPause = 1), at(this, r, ht(this, e)));
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = ht(this, e); t;)
              (t._start === e && t.data === `isPause` && Je(t), (t = t._next));
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--;) _n !== r[i] && r[i].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], i = wt(e), a = this._first, o = R(t); a;)
              (a instanceof An
                ? Pe(a._targets, i) &&
                  (o
                    ? (!_n || (a._initted && a._ts)) &&
                      a.globalTime(0) <= t &&
                      a.globalTime(a.totalDuration()) > t
                    : !t || a.isActive()) &&
                  r.push(a)
                : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
                (a = a._next));
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t ||= {};
            var n,
              r = this,
              i = ht(r, e),
              a = t,
              o = a.startAt,
              s = a.onStart,
              c = a.onStartParams,
              l = a.immediateRender,
              u = An.to(
                r,
                ze(
                  {
                    ease: t.ease || `none`,
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: `auto`,
                    duration:
                      t.duration ||
                      Math.abs((i - (o && `time` in o ? o.time : r._time)) / r.timeScale()) ||
                      N,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs((i - (o && `time` in o ? o.time : r._time)) / r.timeScale());
                        (u._dur !== e && ft(u, e, 0, 1).render(u._time, !0, !0), (n = 1));
                      }
                      s && s.apply(u, c || []);
                    },
                  },
                  t
                )
              );
            return l ? u.render(0) : u;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, ze({ startAt: { time: ht(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return (e === void 0 && (e = this._time), Bt(this, ht(this, e)));
          }),
          (n.previousLabel = function (e) {
            return (e === void 0 && (e = this._time), Bt(this, ht(this, e), 1));
          }),
          (n.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + N);
          }),
          (n.shiftChildren = function (e, t, n) {
            n === void 0 && (n = 0);
            for (var r, i = this._first, a = this.labels; i;)
              (i._start >= n && ((i._start += e), (i._end += e)), (i = i._next));
            if (t) for (r in a) a[r] >= n && (a[r] += e);
            return Ye(this);
          }),
          (n.invalidate = function (t) {
            var n = this._first;
            for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
            return e.prototype.invalidate.call(this, t);
          }),
          (n.clear = function (e) {
            e === void 0 && (e = !0);
            for (var t, n = this._first; n;) ((t = n._next), this.remove(n), (n = t));
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              Ye(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              i = 0,
              a = this,
              o = a._last,
              s = M;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -e : e)
              );
            if (a._dirty) {
              for (r = a.parent; o;)
                ((t = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start),
                  n > s && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (at(a, o, n - o._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    o._ts &&
                    ((i -= n),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += n / a._ts), (a._time -= n), (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -1 / 0),
                    (s = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = t));
              (ft(a, a === S && a._time > i ? a._time : i, 1, 1), (a._dirty = 0));
            }
            return a._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((S._ts && (Ie(S, tt(e, S)), (D = $t.frame)), $t.frame >= K)) {
              K += A.autoSleep || 120;
              var t = S._first;
              if ((!t || !t._ts) && A.autoSleep && $t._listeners.length < 2) {
                for (; t && !t._ts;) t = t._next;
                t || $t.sleep();
              }
            }
          }),
          t
        );
      })(hn)),
      ze(gn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 }),
      (yn = function (e, t, n, r, i, a, o) {
        var s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h = new Wn(this._pt, e, t, 0, 1, Rn, null, i),
          g = 0,
          _ = 0;
        for (
          h.b = n,
            h.e = r,
            n += ``,
            r += ``,
            (p = ~r.indexOf(`random(`)) && (r = Lt(r)),
            a && ((m = [n, r]), a(m, e, t), (n = m[0]), (r = m[1])),
            c = n.match(ue) || [];
          (s = ue.exec(r));
        )
          ((u = s[0]),
            (d = r.substring(g, s.index)),
            l ? (l = (l + 1) % 5) : d.substr(-5) === `rgba(` && (l = 1),
            u !== c[_++] &&
              ((f = parseFloat(c[_ - 1]) || 0),
              (h._pt = {
                _next: h._pt,
                p: d || _ === 1 ? d : `,`,
                s: f,
                c: u.charAt(1) === `=` ? Ne(f, u) - f : parseFloat(u) - f,
                m: l && l < 4 ? Math.round : 0,
              }),
              (g = ue.lastIndex)));
        return (
          (h.c = g < r.length ? r.substring(g, r.length) : ``),
          (h.fp = o),
          (de.test(r) || p) && (h.e = 0),
          (this._pt = h),
          h
        );
      }),
      (bn = function (e, t, n, r, i, a, o, s, c, l) {
        L(r) && (r = r(i || 0, e, a));
        var u,
          d = e[t],
          f =
            n === `get`
              ? L(d)
                ? c
                  ? e[t.indexOf(`set`) || !L(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c)
                  : e[t]()
                : d
              : n,
          p = L(d) ? (c ? Nn : Mn) : jn;
        if (
          (I(r) &&
            (~r.indexOf(`random(`) && (r = Lt(r)),
            r.charAt(1) === `=` && ((u = Ne(f, r) + (yt(f) || 0)), (u || u === 0) && (r = u))),
          !l || f !== r || vn)
        )
          return !isNaN(f * r) && r !== ``
            ? ((u = new Wn(
                this._pt,
                e,
                t,
                +f || 0,
                r - (f || 0),
                typeof d == `boolean` ? Ln : In,
                0,
                p
              )),
              c && (u.fp = c),
              o && u.modifier(o, this, e),
              (this._pt = u))
            : (!d && !(t in e) && ge(t, r), yn.call(this, e, t, f, r, p, s || A.stringFilter, c));
      }),
      (xn = function (e, t, n, r, i) {
        if ((L(e) && (e = Dn(e, i, t, n, r)), !z(e) || (e.style && e.nodeType) || V(e) || se(e)))
          return I(e) ? Dn(e, i, t, n, r) : e;
        var a,
          o = {};
        for (a in e) o[a] = Dn(e[a], i, t, n, r);
        return o;
      }),
      (Sn = function (e, t, n, r, i, a) {
        var o, s, c, l;
        if (
          we[e] &&
          !1 !== (o = new we[e]()).init(i, o.rawVars ? t[e] : xn(t[e], r, i, a, n), n, r, a) &&
          ((n._pt = s = new Wn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)), n !== O)
        )
          for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
            c[o._props[l]] = s;
        return o;
      }),
      (Cn = function e(t, n, r) {
        var i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _ = t.vars,
          v = _.ease,
          x = _.startAt,
          C = _.immediateRender,
          w = _.lazy,
          T = _.onUpdate,
          E = _.onUpdateParams,
          D = _.callbackScope,
          O = _.runBackwards,
          k = _.yoyoEase,
          A = _.keyframes,
          P = _.autoRevert,
          ee = t._dur,
          F = t._startAt,
          te = t._targets,
          ne = t.parent,
          re = ne && ne.data === `nested` ? ne.vars.targets : te,
          I = t._overwrite === `auto` && !y,
          L = t.timeline;
        if (
          (L && (!A || !v) && (v = `none`),
          (t._ease = ln(v, j.ease)),
          (t._yEase = k ? sn(ln(!0 === k ? v : k, j.ease)) : 0),
          k && t._yoyo && !t._repeat && ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
          (t._from = !L && !!_.runBackwards),
          !L || (A && !_.stagger))
        ) {
          if (
            ((d = te[0] ? ke(te[0]).harness : 0),
            (h = d && _[d.prop]),
            (i = Ue(_, xe)),
            F &&
              (F._zTime < 0 && F.progress(1),
              n < 0 && O && C && !P ? F.render(-1, !0) : F.revert(O && ee ? ye : G),
              (F._lazy = 0)),
            x)
          ) {
            if (
              (Je(
                (t._startAt = An.set(
                  te,
                  ze(
                    {
                      data: `isStart`,
                      overwrite: !1,
                      parent: ne,
                      immediateRender: !0,
                      lazy: !F && B(w),
                      startAt: null,
                      delay: 0,
                      onUpdate: T,
                      onUpdateParams: E,
                      callbackScope: D,
                      stagger: 0,
                    },
                    x
                  )
                ))
              ),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              n < 0 && (b || (!C && !P)) && t._startAt.revert(ye),
              C && ee && n <= 0 && r <= 0)
            ) {
              n && (t._zTime = n);
              return;
            }
          } else if (O && ee && !F)
            if (
              (n && (C = !1),
              (o = ze(
                {
                  overwrite: !1,
                  data: `isFromStart`,
                  lazy: C && !F && B(w),
                  immediateRender: C,
                  stagger: 0,
                  parent: ne,
                },
                i
              )),
              h && (o[d.prop] = h),
              Je((t._startAt = An.set(te, o))),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              n < 0 && (b ? t._startAt.revert(ye) : t._startAt.render(-1, !0)),
              (t._zTime = n),
              C)
            ) {
              if (!n) return;
            } else e(t._startAt, N, N);
          for (t._pt = t._ptCache = 0, w = (ee && B(w)) || (w && !ee), a = 0; a < te.length; a++) {
            if (
              ((c = te[a]),
              (u = c._gsap || Oe(te)[a]._gsap),
              (t._ptLookup[a] = p = {}),
              Ce[u.id] && Se.length && Fe(),
              (m = re === te ? a : re.indexOf(c)),
              d &&
                !1 !== (f = new d()).init(c, h || i, t, m, re) &&
                ((t._pt = s = new Wn(t._pt, c, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (e) {
                  p[e] = s;
                }),
                f.priority && (l = 1)),
              !d || h)
            )
              for (o in i)
                we[o] && (f = Sn(o, i, t, m, c, re))
                  ? f.priority && (l = 1)
                  : (p[o] = s = bn.call(t, c, o, `get`, i[o], m, re, 0, _.stringFilter));
            (t._op && t._op[a] && t.kill(c, t._op[a]),
              I &&
                t._pt &&
                ((_n = t), S.killTweensOf(c, p, t.globalTime(n)), (g = !t.parent), (_n = 0)),
              t._pt && w && (Ce[u.id] = 1));
          }
          (l && Un(t), t._onInit && t._onInit(t));
        }
        ((t._onUpdate = T),
          (t._initted = (!t._op || t._pt) && !g),
          A && n <= 0 && L.render(M, !0, !0));
      }),
      (wn = function (e, t, n, r, i, a, o) {
        var s,
          c,
          l,
          u,
          d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
        if (!d)
          for (d = e._ptCache[t] = [], l = e._ptLookup, u = e._targets.length; u--;) {
            if (((s = l[u][t]), s && s.d && s.d._pt))
              for (s = s.d._pt; s && s.p !== t && s.fp !== t;) s = s._next;
            if (!s) return ((vn = 1), (e.vars[t] = `+=0`), Cn(e, o), (vn = 0), 1);
            d.push(s);
          }
        for (u = d.length; u--;)
          ((c = d[u]),
            (s = c._pt || c),
            (s.s = (!r && r !== 0) || i ? s.s + (r || 0) + a * s.c : r),
            (s.c = n - s.s),
            (c.e &&= je(n) + yt(c.e)),
            (c.b &&= s.s + yt(c.b)));
      }),
      (Tn = function (e, t) {
        var n,
          r,
          i,
          a,
          o = e[0] ? ke(e[0]).harness : 0,
          s = o && o.aliases;
        if (!s) return t;
        for (r in ((n = Ve({}, t)), s))
          if (r in n) for (a = s[r].split(`,`), i = a.length; i--;) n[a[i]] = n[r];
        return n;
      }),
      (En = function (e, t, n, r) {
        var i,
          a,
          o = t.ease || r || `power1.inOut`;
        if (V(t))
          ((a = n[e] || (n[e] = [])),
            t.forEach(function (e, n) {
              return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
            }));
        else
          for (i in t)
            ((a = n[i] || (n[i] = [])),
              i === `ease` || a.push({ t: parseFloat(e), v: t[i], e: o }));
      }),
      (Dn = function (e, t, n, r, i) {
        return L(e) ? e.call(t, n, r, i) : I(e) && ~e.indexOf(`random(`) ? Lt(e) : e;
      }),
      (On = De + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`),
      (kn = {}),
      q(On + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
        return (kn[e] = 1);
      }),
      (An = (function (e) {
        v(t, e);
        function t(t, n, r, i) {
          var a;
          (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
            (a = e.call(this, i ? n : We(n)) || this));
          var o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m = a.vars,
            h = m.duration,
            g = m.delay,
            v = m.immediateRender,
            b = m.stagger,
            x = m.overwrite,
            C = m.keyframes,
            w = m.defaults,
            T = m.scrollTrigger,
            E = m.yoyoEase,
            D = n.parent || S,
            O = (V(t) || se(t) ? R(t[0]) : `length` in n) ? [t] : wt(t);
          if (
            ((a._targets = O.length
              ? Oe(O)
              : _e(`GSAP target ` + t + ` not found. https://greensock.com`, !A.nullTargetWarn) ||
                []),
            (a._ptLookup = []),
            (a._overwrite = x),
            C || b || oe(h) || oe(g))
          ) {
            if (
              ((n = a.vars),
              (o = a.timeline =
                new gn({
                  data: `nested`,
                  defaults: w || {},
                  targets: D && D.data === `nested` ? D.vars.targets : O,
                })),
              o.kill(),
              (o.parent = o._dp = _(a)),
              (o._start = 0),
              b || oe(h) || oe(g))
            ) {
              if (((l = O.length), (f = b && Dt(b)), z(b)))
                for (u in b) ~On.indexOf(u) && ((p ||= {}), (p[u] = b[u]));
              for (s = 0; s < l; s++)
                ((c = Ue(n, kn)),
                  (c.stagger = 0),
                  E && (c.yoyoEase = E),
                  p && Ve(c, p),
                  (d = O[s]),
                  (c.duration = +Dn(h, _(a), s, d, O)),
                  (c.delay = (+Dn(g, _(a), s, d, O) || 0) - a._delay),
                  !b &&
                    l === 1 &&
                    c.delay &&
                    ((a._delay = g = c.delay), (a._start += g), (c.delay = 0)),
                  o.to(d, c, f ? f(s, d, O) : 0),
                  (o._ease = J.none));
              o.duration() ? (h = g = 0) : (a.timeline = 0);
            } else if (C) {
              (We(ze(o.vars.defaults, { ease: `none` })),
                (o._ease = ln(C.ease || n.ease || `none`)));
              var k,
                j,
                M,
                P = 0;
              if (V(C))
                (C.forEach(function (e) {
                  return o.to(O, e, `>`);
                }),
                  o.duration());
              else {
                for (u in ((c = {}), C))
                  u === `ease` || u === `easeEach` || En(u, C[u], c, C.easeEach);
                for (u in c)
                  for (
                    k = c[u].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      P = 0,
                      s = 0;
                    s < k.length;
                    s++
                  )
                    ((j = k[s]),
                      (M = { ease: j.e, duration: ((j.t - (s ? k[s - 1].t : 0)) / 100) * h }),
                      (M[u] = j.v),
                      o.to(O, M, P),
                      (P += M.duration));
                o.duration() < h && o.to({}, { duration: h - o.duration() });
              }
            }
            h || a.duration((h = o.duration()));
          } else a.timeline = 0;
          return (
            !0 === x && !y && ((_n = _(a)), S.killTweensOf(O), (_n = 0)),
            at(D, _(a), r),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (v ||
              (!h && !C && a._start === Me(D._time) && B(v) && Qe(_(a)) && D.data !== `nested`)) &&
              ((a._tTime = -N), a.render(Math.max(0, -g) || 0)),
            T && ot(_(a), T),
            a
          );
        }
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              f = this._time,
              p = this._tDur,
              m = this._dur,
              h = e < 0,
              g = e > p - N && !h ? p : e < N ? 0 : e;
            if (m) {
              if (
                g !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== h)
              ) {
                if (((r = g), (u = this.timeline), this._repeat)) {
                  if (((o = m + this._rDelay), this._repeat < -1 && h))
                    return this.totalTime(100 * o + e, t, n);
                  if (
                    ((r = Me(g % o)),
                    g === p
                      ? ((a = this._repeat), (r = m))
                      : ((a = ~~(g / o)), a && a === g / o && ((r = m), a--), r > m && (r = m)),
                    (c = this._yoyo && 1 & a),
                    c && ((d = this._yEase), (r = m - r)),
                    (s = et(this._tTime, o)),
                    r === f && !n && this._initted)
                  )
                    return ((this._tTime = g), this);
                  a !== s &&
                    (u && this._yEase && cn(u, c),
                    this.vars.repeatRefresh &&
                      !c &&
                      !this._lock &&
                      ((this._lock = n = 1), (this.render(Me(o * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (st(this, h ? e : r, n, t, g)) return ((this._tTime = 0), this);
                  if (f !== this._time) return this;
                  if (m !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (d || this._ease)(r / m)),
                  this._from && (this.ratio = l = 1 - l),
                  r && !f && !t && (Vt(this, `onStart`), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i;) (i.r(l, i.d), (i = i._next));
                ((u &&
                  u.render(e < 0 ? e : !r && c ? -N : u._dur * u._ease(r / this._dur), t, n)) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate && !t && (h && Ze(this, e, t, n), Vt(this, `onUpdate`)),
                  this._repeat &&
                    a !== s &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    Vt(this, `onRepeat`),
                  (g === this._tDur || !g) &&
                    this._tTime === g &&
                    (h && !this._onUpdate && Ze(this, e, !0, !0),
                    (e || !m) &&
                      ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) &&
                      Je(this, 1),
                    !t &&
                      !(h && !f) &&
                      (g || f || c) &&
                      (Vt(this, g === p ? `onComplete` : `onReverseComplete`, !0),
                      this._prom && !(g < p && this.timeScale() > 0) && this._prom())));
              }
            } else ut(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              e.prototype.invalidate.call(this, t)
            );
          }),
          (n.resetTo = function (e, t, n, r) {
            (k || $t.wake(), this._ts || this.play());
            var i,
              a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (
              this._initted || Cn(this, a),
              (i = this._ease(a / this._dur)),
              wn(this, e, t, n, r, i, a)
                ? this.resetTo(e, t, n, r)
                : (rt(this, 0),
                  this.parent ||
                    Ke(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
                  this.render(0))
            );
          }),
          (n.kill = function (e, t) {
            if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
              return ((this._lazy = this._pt = 0), this.parent ? Ht(this) : this);
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, _n && !0 !== _n.vars.overwrite)._first || Ht(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  ft(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u = this._targets,
              d = e ? wt(e) : u,
              f = this._ptLookup,
              p = this._pt;
            if ((!t || t === `all`) && Ge(u, d)) return (t === `all` && (this._pt = 0), Ht(this));
            for (
              r = this._op = this._op || [],
                t !== `all` &&
                  (I(t) &&
                    ((s = {}),
                    q(t, function (e) {
                      return (s[e] = 1);
                    }),
                    (t = s)),
                  (t = Tn(u, t))),
                l = u.length;
              l--;
            )
              if (~d.indexOf(u[l]))
                for (s in ((i = f[l]),
                t === `all` ? ((r[l] = t), (o = i), (a = {})) : ((a = r[l] = r[l] || {}), (o = t)),
                o))
                  ((c = i && i[s]),
                    c && ((`kill` in c.d && !0 !== c.d.kill(s)) || qe(this, c, `_pt`), delete i[s]),
                    a !== `all` && (a[s] = 1));
            return (this._initted && !this._pt && p && Ht(this), this);
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, t) {
            return gt(1, arguments);
          }),
          (t.delayedCall = function (e, n, r, i) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (t.fromTo = function (e, t, n) {
            return gt(2, arguments);
          }),
          (t.set = function (e, n) {
            return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
          }),
          (t.killTweensOf = function (e, t, n) {
            return S.killTweensOf(e, t, n);
          }),
          t
        );
      })(hn)),
      ze(An.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
      q(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
        An[e] = function () {
          var t = new gn(),
            n = xt.call(arguments, 0);
          return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
        };
      }),
      (jn = function (e, t, n) {
        return (e[t] = n);
      }),
      (Mn = function (e, t, n) {
        return e[t](n);
      }),
      (Nn = function (e, t, n, r) {
        return e[t](r.fp, n);
      }),
      (Pn = function (e, t, n) {
        return e.setAttribute(t, n);
      }),
      (Fn = function (e, t) {
        return L(e[t]) ? Mn : ie(e[t]) && e.setAttribute ? Pn : jn;
      }),
      (In = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      }),
      (Ln = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      }),
      (Rn = function (e, t) {
        var n = t._pt,
          r = ``;
        if (!e && t.b) r = t.b;
        else if (e === 1 && t.e) r = t.e;
        else {
          for (; n;)
            ((r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r),
              (n = n._next));
          r += t.c;
        }
        t.set(t.t, t.p, r, t);
      }),
      (zn = function (e, t) {
        for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
      }),
      (Bn = function (e, t, n, r) {
        for (var i, a = this._pt; a;) ((i = a._next), a.p === r && a.modifier(e, t, n), (a = i));
      }),
      (Vn = function (e) {
        for (var t, n, r = this._pt; r;)
          ((n = r._next),
            (r.p === e && !r.op) || r.op === e ? qe(this, r, `_pt`) : r.dep || (t = 1),
            (r = n));
        return !t;
      }),
      (Hn = function (e, t, n, r) {
        r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
      }),
      (Un = function (e) {
        for (var t, n, r, i, a = e._pt; a;) {
          for (t = a._next, n = r; n && n.pr > a.pr;) n = n._next;
          ((a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
            (a._next = n) ? (n._prev = a) : (i = a),
            (a = t));
        }
        e._pt = r;
      }),
      (Wn = (function () {
        function e(e, t, n, r, i, a, o, s, c) {
          ((this.t = t),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = a || In),
            (this.d = o || this),
            (this.set = s || jn),
            (this.pr = c || 0),
            (this._next = e),
            e && (e._prev = this));
        }
        var t = e.prototype;
        return (
          (t.modifier = function (e, t, n) {
            ((this.mSet = this.mSet || this.set),
              (this.set = Hn),
              (this.m = e),
              (this.mt = n),
              (this.tween = t));
          }),
          e
        );
      })()),
      q(
        De +
          `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,
        function (e) {
          return (xe[e] = 1);
        }
      ),
      (me.TweenMax = me.TweenLite = An),
      (me.TimelineLite = me.TimelineMax = gn),
      (S = new gn({
        sortChildren: !1,
        defaults: j,
        autoRemoveChildren: !0,
        id: `root`,
        smoothChildTiming: !0,
      })),
      (A.stringFilter = Qt),
      (Gn = []),
      (Kn = {}),
      (qn = []),
      (Jn = 0),
      (Yn = function (e) {
        return (Kn[e] || qn).map(function (e) {
          return e();
        });
      }),
      (Xn = function () {
        var e = Date.now(),
          t = [];
        e - Jn > 2 &&
          (Yn(`matchMediaInit`),
          Gn.forEach(function (e) {
            var n,
              r,
              i,
              a,
              o = e.queries,
              s = e.conditions;
            for (r in o)
              ((n = C.matchMedia(o[r]).matches), n && (i = 1), n !== s[r] && ((s[r] = n), (a = 1)));
            a && (e.revert(), i && t.push(e));
          }),
          Yn(`matchMediaRevert`),
          t.forEach(function (e) {
            return e.onMatch(e);
          }),
          (Jn = e),
          Yn(`matchMedia`));
      }),
      (Zn = (function () {
        function e(e, t) {
          ((this.selector = t && Tt(t)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            e && this.add(e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            L(e) && ((n = t), (t = e), (e = L));
            var r = this,
              i = function () {
                var e,
                  i = x,
                  a = r.selector;
                return (
                  i && i !== r && i.data.push(r),
                  n && (r.selector = Tt(n)),
                  (x = r),
                  (e = t.apply(r, arguments)),
                  L(e) && r._r.push(e),
                  (x = i),
                  (r.selector = a),
                  (r.isReverted = !1),
                  e
                );
              };
            return ((r.last = i), e === L ? i(r) : e ? (r[e] = i) : i);
          }),
          (t.ignore = function (e) {
            var t = x;
            ((x = null), e(this), (x = t));
          }),
          (t.getTweens = function () {
            var t = [];
            return (
              this.data.forEach(function (n) {
                return n instanceof e
                  ? t.push.apply(t, n.getTweens())
                  : n instanceof An && !(n.parent && n.parent.data === `nested`) && t.push(n);
              }),
              t
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (e, t) {
            var n = this;
            if (e) {
              var r = this.getTweens();
              (this.data.forEach(function (e) {
                e.data === `isFlip` &&
                  (e.revert(),
                  e.getChildren(!0, !0, !1).forEach(function (e) {
                    return r.splice(r.indexOf(e), 1);
                  }));
              }),
                r
                  .map(function (e) {
                    return { g: e.globalTime(0), t: e };
                  })
                  .sort(function (e, t) {
                    return t.g - e.g || -1;
                  })
                  .forEach(function (t) {
                    return t.t.revert(e);
                  }),
                this.data.forEach(function (t) {
                  return !(t instanceof hn) && t.revert && t.revert(e);
                }),
                this._r.forEach(function (t) {
                  return t(e, n);
                }),
                (this.isReverted = !0));
            } else
              this.data.forEach(function (e) {
                return e.kill && e.kill();
              });
            if ((this.clear(), t)) {
              var i = Gn.indexOf(this);
              ~i && Gn.splice(i, 1);
            }
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          e
        );
      })()),
      (Qn = (function () {
        function e(e) {
          ((this.contexts = []), (this.scope = e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            z(e) || (e = { matches: e });
            var r,
              i,
              a,
              o = new Zn(0, n || this.scope),
              s = (o.conditions = {});
            for (i in (this.contexts.push(o), (t = o.add(`onMatch`, t)), (o.queries = e), e))
              i === `all`
                ? (a = 1)
                : ((r = C.matchMedia(e[i])),
                  r &&
                    (Gn.indexOf(o) < 0 && Gn.push(o),
                    (s[i] = r.matches) && (a = 1),
                    r.addListener ? r.addListener(Xn) : r.addEventListener(`change`, Xn)));
            return (a && t(o), this);
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          (t.kill = function (e) {
            this.contexts.forEach(function (t) {
              return t.kill(e, !0);
            });
          }),
          e
        );
      })()),
      ($n = {
        registerPlugin: function () {
          [...arguments].forEach(function (e) {
            return Ut(e);
          });
        },
        timeline: function (e) {
          return new gn(e);
        },
        getTweensOf: function (e, t) {
          return S.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, r) {
          I(e) && (e = wt(e)[0]);
          var i = ke(e || {}).get,
            a = n ? Re : Le;
          return (
            n === `native` && (n = ``),
            e &&
              (t
                ? a(((we[t] && we[t].get) || i)(e, t, n, r))
                : function (t, n, r) {
                    return a(((we[t] && we[t].get) || i)(e, t, n, r));
                  })
          );
        },
        quickSetter: function (e, t, n) {
          if (((e = wt(e)), e.length > 1)) {
            var r = e.map(function (e) {
                return rr.quickSetter(e, t, n);
              }),
              i = r.length;
            return function (e) {
              for (var t = i; t--;) r[t](e);
            };
          }
          e = e[0] || {};
          var a = we[t],
            o = ke(e),
            s = (o.harness && (o.harness.aliases || {})[t]) || t,
            c = a
              ? function (t) {
                  var r = new a();
                  ((O._pt = 0),
                    r.init(e, n ? t + n : t, O, 0, [e]),
                    r.render(1, r),
                    O._pt && zn(1, O));
                }
              : o.set(e, s);
          return a
            ? c
            : function (t) {
                return c(e, s, n ? t + n : t, o, 1);
              };
        },
        quickTo: function (e, t, n) {
          var r,
            i = rr.to(e, Ve(((r = {}), (r[t] = `+=0.1`), (r.paused = !0), r), n || {})),
            a = function (e, n, r) {
              return i.resetTo(t, e, n, r);
            };
          return ((a.tween = i), a);
        },
        isTweening: function (e) {
          return S.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return (e && e.ease && (e.ease = ln(e.ease, j.ease)), He(j, e || {}));
        },
        config: function (e) {
          return He(A, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            r = e.plugins,
            i = e.defaults,
            a = e.extendTimeline;
          ((r || ``).split(`,`).forEach(function (e) {
            return e && !we[e] && !me[e] && _e(t + ` effect requires ` + e + ` plugin.`);
          }),
            (Te[t] = function (e, t, r) {
              return n(wt(e), ze(t || {}, i), r);
            }),
            a &&
              (gn.prototype[t] = function (e, n, r) {
                return this.add(Te[t](e, z(n) ? n : (r = n) && {}, this), r);
              }));
        },
        registerEase: function (e, t) {
          J[e] = ln(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? ln(e, t) : J;
        },
        getById: function (e) {
          return S.getById(e);
        },
        exportRoot: function (e, t) {
          e === void 0 && (e = {});
          var n,
            r,
            i = new gn(e);
          for (
            i.smoothChildTiming = B(e.smoothChildTiming),
              S.remove(i),
              i._dp = 0,
              i._time = i._tTime = S._time,
              n = S._first;
            n;
          )
            ((r = n._next),
              (!t && !n._dur && n instanceof An && n.vars.onComplete === n._targets[0]) ||
                at(i, n, n._start - n._delay),
              (n = r));
          return (at(S, i, 0), i);
        },
        context: function (e, t) {
          return e ? new Zn(e, t) : x;
        },
        matchMedia: function (e) {
          return new Qn(e);
        },
        matchMediaRefresh: function () {
          return (
            Gn.forEach(function (e) {
              var t,
                n,
                r = e.conditions;
              for (n in r) r[n] && ((r[n] = !1), (t = 1));
              t && e.revert();
            }) || Xn()
          );
        },
        addEventListener: function (e, t) {
          var n = Kn[e] || (Kn[e] = []);
          ~n.indexOf(t) || n.push(t);
        },
        removeEventListener: function (e, t) {
          var n = Kn[e],
            r = n && n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        },
        utils: {
          wrap: Ft,
          wrapYoyo: It,
          distribute: Dt,
          random: At,
          snap: kt,
          normalize: Nt,
          getUnit: yt,
          clamp: bt,
          splitColor: qt,
          toArray: wt,
          selector: Tt,
          mapRange: Rt,
          pipe: jt,
          unitize: Mt,
          interpolate: zt,
          shuffle: Et,
        },
        install: U,
        effects: Te,
        ticker: $t,
        updateRoot: gn.updateRoot,
        plugins: we,
        globalTimeline: S,
        core: {
          PropTween: Wn,
          globals: W,
          Tween: An,
          Timeline: gn,
          Animation: hn,
          getCache: ke,
          _removeLinkedListItem: qe,
          reverting: function () {
            return b;
          },
          context: function (e) {
            return (e && x && (x.data.push(e), (e._ctx = x)), x);
          },
          suppressOverwrites: function (e) {
            return (y = e);
          },
        },
      }),
      q(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
        return ($n[e] = An[e]);
      }),
      $t.add(gn.updateRoot),
      (O = $n.to({}, { duration: 0 })),
      (er = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
        return n;
      }),
      (tr = function (e, t) {
        var n,
          r,
          i,
          a = e._targets;
        for (n in t)
          for (r = a.length; r--;)
            ((i = e._ptLookup[r][n]),
              (i &&= i.d) &&
                (i._pt && (i = er(i, n)), i && i.modifier && i.modifier(t[n], e, a[r], n)));
      }),
      (nr = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, n, r) {
            r._onInit = function (e) {
              var r, i;
              if (
                (I(n) &&
                  ((r = {}),
                  q(n, function (e) {
                    return (r[e] = 1);
                  }),
                  (n = r)),
                t)
              ) {
                for (i in ((r = {}), n)) r[i] = t(n[i]);
                n = r;
              }
              tr(e, n);
            };
          },
        };
      }),
      (rr =
        $n.registerPlugin(
          {
            name: `attr`,
            init: function (e, t, n, r, i) {
              var a, o, s;
              for (a in ((this.tween = n), t))
                ((s = e.getAttribute(a) || ``),
                  (o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a)),
                  (o.op = a),
                  (o.b = s),
                  this._props.push(a));
            },
            render: function (e, t) {
              for (var n = t._pt; n;) (b ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
            },
          },
          {
            name: `endArray`,
            init: function (e, t) {
              for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
            },
          },
          nr(`roundProps`, Ot),
          nr(`modifiers`),
          nr(`snap`, kt)
        ) || $n),
      (An.version = gn.version = rr.version = `3.11.4`),
      (E = 1),
      ae() && en(),
      J.Power0,
      J.Power1,
      J.Power2,
      J.Power3,
      J.Power4,
      J.Linear,
      J.Quad,
      J.Cubic,
      J.Quart,
      J.Quint,
      J.Strong,
      J.Elastic,
      J.Back,
      J.SteppedEase,
      J.Bounce,
      J.Sine,
      J.Expo,
      J.Circ);
  }),
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei = e(() => {
    (r(),
      ir(),
      (pr = function () {
        return u !== void 0;
      }),
      (mr = {}),
      (hr = 180 / Math.PI),
      (gr = Math.PI / 180),
      (_r = Math.atan2),
      (vr = 1e8),
      (yr = /([A-Z])/g),
      (br = /(left|right|width|margin|padding|x)/i),
      (xr = /[\s,\(]\S/),
      (Sr = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` }),
      (Cr = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
      }),
      (wr = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
      }),
      (Tr = function (e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
      }),
      (Er = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      }),
      (Dr = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      }),
      (Or = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
      }),
      (kr = function (e, t, n) {
        return (e.style[t] = n);
      }),
      (Ar = function (e, t, n) {
        return e.style.setProperty(t, n);
      }),
      (jr = function (e, t, n) {
        return (e._gsap[t] = n);
      }),
      (Mr = function (e, t, n) {
        return (e._gsap.scaleX = e._gsap.scaleY = n);
      }),
      (Nr = function (e, t, n, r, i) {
        var a = e._gsap;
        ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
      }),
      (Pr = function (e, t, n, r, i) {
        var a = e._gsap;
        ((a[t] = n), a.renderTransform(i, a));
      }),
      (Fr = `transform`),
      (Ir = Fr + `Origin`),
      (Lr = function (e, t) {
        var n = this,
          r = this.target,
          i = r.style;
        if (e in mr) {
          if (
            ((this.tfm = this.tfm || {}),
            e !== `transform` &&
              ((e = Sr[e] || e),
              ~e.indexOf(`,`)
                ? e.split(`,`).forEach(function (e) {
                    return (n.tfm[e] = ti(r, e));
                  })
                : (this.tfm[e] = r._gsap.x ? r._gsap[e] : ti(r, e))),
            this.props.indexOf(Fr) >= 0)
          )
            return;
          (r._gsap.svg &&
            ((this.svgo = r.getAttribute(`data-svg-origin`)), this.props.push(Ir, t, ``)),
            (e = Fr));
        }
        (i || t) && this.props.push(e, t, i[e]);
      }),
      (Rr = function (e) {
        e.translate &&
          (e.removeProperty(`translate`), e.removeProperty(`scale`), e.removeProperty(`rotate`));
      }),
      (zr = function () {
        var e,
          t,
          n = this.props,
          r = this.target,
          i = r.style,
          a = r._gsap;
        for (e = 0; e < n.length; e += 3)
          n[e + 1]
            ? (r[n[e]] = n[e + 2])
            : n[e + 2]
              ? (i[n[e]] = n[e + 2])
              : i.removeProperty(n[e].replace(yr, `-$1`).toLowerCase());
        if (this.tfm) {
          for (t in this.tfm) a[t] = this.tfm[t];
          (a.svg && (a.renderTransform(), r.setAttribute(`data-svg-origin`, this.svgo || ``)),
            (e = dr()),
            e && !e.isStart && !i[Fr] && (Rr(i), (a.uncache = 1)));
        }
      }),
      (Br = function (e, t) {
        var n = { target: e, props: [], revert: zr, save: Lr };
        return (
          t &&
            t.split(`,`).forEach(function (e) {
              return n.save(e);
            }),
          n
        );
      }),
      (Vr = function (e, t) {
        var n = or.createElementNS
          ? or.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e)
          : or.createElement(e);
        return n.style ? n : or.createElement(e);
      }),
      (Hr = function e(t, n, r) {
        var i = getComputedStyle(t);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(yr, `-$1`).toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && e(t, Wr(n) || n, 1)) ||
          ``
        );
      }),
      (Ur = `O,Moz,ms,Ms,Webkit`.split(`,`)),
      (Wr = function (e, t, n) {
        var r = (t || lr).style,
          i = 5;
        if (e in r && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Ur[i] + e in r););
        return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? Ur[i] : ``) + e;
      }),
      (Gr = function () {
        pr() &&
          u.document &&
          ((ar = u),
          (or = ar.document),
          (sr = or.documentElement),
          (lr = Vr(`div`) || { style: {} }),
          Vr(`div`),
          (Fr = Wr(Fr)),
          (Ir = Fr + `Origin`),
          (lr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
          (fr = !!Wr(`perspective`)),
          (dr = rr.core.reverting),
          (cr = 1));
      }),
      (Kr = function e(t) {
        var n,
          r = Vr(
            `svg`,
            (this.ownerSVGElement && this.ownerSVGElement.getAttribute(`xmlns`)) ||
              `http://www.w3.org/2000/svg`
          ),
          i = this.parentNode,
          a = this.nextSibling,
          o = this.style.cssText;
        if ((sr.appendChild(r), r.appendChild(this), (this.style.display = `block`), t))
          try {
            ((n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e));
          } catch {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
          sr.removeChild(r),
          (this.style.cssText = o),
          n
        );
      }),
      (qr = function (e, t) {
        for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      }),
      (Jr = function (e) {
        var t;
        try {
          t = e.getBBox();
        } catch {
          t = Kr.call(e, !0);
        }
        return (
          (t && (t.width || t.height)) || e.getBBox === Kr || (t = Kr.call(e, !0)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +qr(e, [`x`, `cx`, `x1`]) || 0,
                y: +qr(e, [`y`, `cy`, `y1`]) || 0,
                width: 0,
                height: 0,
              }
        );
      }),
      (Yr = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Jr(e));
      }),
      (Xr = function (e, t) {
        if (t) {
          var n = e.style;
          (t in mr && t !== Ir && (t = Fr),
            n.removeProperty
              ? ((t.substr(0, 2) !== `ms` && t.substr(0, 6) !== `webkit`) || (t = `-` + t),
                n.removeProperty(t.replace(yr, `-$1`).toLowerCase()))
              : n.removeAttribute(t));
        }
      }),
      (Zr = function (e, t, n, r, i, a) {
        var o = new Wn(e._pt, t, n, 0, 1, a ? Or : Dr);
        return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
      }),
      (Qr = { deg: 1, rad: 1, turn: 1 }),
      ($r = { grid: 1, flex: 1 }),
      (ei = function e(t, n, r, i) {
        var a,
          o,
          s,
          c,
          l = parseFloat(r) || 0,
          u = (r + ``).trim().substr((l + ``).length) || `px`,
          d = lr.style,
          f = br.test(n),
          p = t.tagName.toLowerCase() === `svg`,
          m = (p ? `client` : `offset`) + (f ? `Width` : `Height`),
          h = 100,
          g = i === `px`,
          _ = i === `%`;
        return i === u || !l || Qr[i] || Qr[u]
          ? l
          : (u !== `px` && !g && (l = e(t, n, r, `px`)),
            (c = t.getCTM && Yr(t)),
            (_ || u === `%`) && (mr[n] || ~n.indexOf(`adius`))
              ? ((a = c ? t.getBBox()[f ? `width` : `height`] : t[m]),
                je(_ ? (l / a) * h : (l / 100) * a))
              : ((d[f ? `width` : `height`] = h + (g ? u : i)),
                (o = ~n.indexOf(`adius`) || (i === `em` && t.appendChild && !p) ? t : t.parentNode),
                c && (o = (t.ownerSVGElement || {}).parentNode),
                (o && o !== or && o.appendChild) || (o = or.body),
                (s = o._gsap),
                s && _ && s.width && f && s.time === $t.time && !s.uncache
                  ? je((l / s.width) * h)
                  : ((_ || u === `%`) && !$r[Hr(o, `display`)] && (d.position = Hr(t, `position`)),
                    o === t && (d.position = `static`),
                    o.appendChild(lr),
                    (a = lr[m]),
                    o.removeChild(lr),
                    (d.position = `absolute`),
                    f && _ && ((s = ke(o)), (s.time = $t.time), (s.width = o[m])),
                    je(g ? (a * l) / h : a && l ? (h / a) * l : 0))));
      }),
      (ti = function (e, t, n, r) {
        var i;
        return (
          cr || Gr(),
          t in Sr && t !== `transform` && ((t = Sr[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
          mr[t] && t !== `transform`
            ? ((i = pi(e, r)),
              (i =
                t === `transformOrigin`
                  ? i.svg
                    ? i.origin
                    : mi(Hr(e, Ir)) + ` ` + i.zOrigin + `px`
                  : i[t]))
            : ((i = e.style[t]),
              (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
                (i =
                  (oi[t] && oi[t](e, t, n)) || Hr(e, t) || Ae(e, t) || (t === `opacity` ? 1 : 0))),
          n && !~(i + ``).trim().indexOf(` `) ? ei(e, t, i, n) + n : i
        );
      }),
      (ni = function (e, t, n, r) {
        if (!n || n === `none`) {
          var i = Wr(t, e, 1),
            a = i && Hr(e, i, 1);
          a && a !== n ? ((t = i), (n = a)) : t === `borderColor` && (n = Hr(e, `borderTopColor`));
        }
        var o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v = new Wn(this._pt, e.style, t, 0, 1, Rn),
          y = 0,
          b = 0;
        if (
          ((v.b = n),
          (v.e = r),
          (n += ``),
          (r += ``),
          r === `auto` && ((e.style[t] = r), (r = Hr(e, t) || r), (e.style[t] = n)),
          (o = [n, r]),
          Qt(o),
          (n = o[0]),
          (r = o[1]),
          (c = n.match(le) || []),
          (_ = r.match(le) || []),
          _.length)
        ) {
          for (; (s = le.exec(r));)
            ((f = s[0]),
              (m = r.substring(y, s.index)),
              u
                ? (u = (u + 1) % 5)
                : (m.substr(-5) !== `rgba(` && m.substr(-5) !== `hsla(`) || (u = 1),
              f !== (d = c[b++] || ``) &&
                ((l = parseFloat(d) || 0),
                (g = d.substr((l + ``).length)),
                f.charAt(1) === `=` && (f = Ne(l, f) + g),
                (p = parseFloat(f)),
                (h = f.substr((p + ``).length)),
                (y = le.lastIndex - h.length),
                h || ((h = h || A.units[t] || g), y === r.length && ((r += h), (v.e += h))),
                g !== h && (l = ei(e, t, d, h) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: m || b === 1 ? m : `,`,
                  s: l,
                  c: p - l,
                  m: (u && u < 4) || t === `zIndex` ? Math.round : 0,
                })));
          v.c = y < r.length ? r.substring(y, r.length) : ``;
        } else v.r = t === `display` && r === `none` ? Or : Dr;
        return (de.test(r) && (v.e = 0), (this._pt = v), v);
      }),
      (ri = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` }),
      (ii = function (e) {
        var t = e.split(` `),
          n = t[0],
          r = t[1] || `50%`;
        return (
          (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
            ((e = n), (n = r), (r = e)),
          (t[0] = ri[n] || n),
          (t[1] = ri[r] || r),
          t.join(` `)
        );
      }),
      (ai = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n,
            r,
            i,
            a = t.t,
            o = a.style,
            s = t.u,
            c = a._gsap;
          if (s === `all` || !0 === s) ((o.cssText = ``), (r = 1));
          else
            for (s = s.split(`,`), i = s.length; --i > -1;)
              ((n = s[i]), mr[n] && ((r = 1), (n = n === `transformOrigin` ? Ir : Fr)), Xr(a, n));
          r &&
            (Xr(a, Fr),
            c && (c.svg && a.removeAttribute(`transform`), pi(a, 1), (c.uncache = 1), Rr(o)));
        }
      }),
      (oi = {
        clearProps: function (e, t, n, r, i) {
          if (i.data !== `isFromStart`) {
            var a = (e._pt = new Wn(e._pt, t, n, 0, 0, ai));
            return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
          }
        },
      }),
      (si = [1, 0, 0, 1, 0, 0]),
      (ci = {}),
      (li = function (e) {
        return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
      }),
      (ui = function (e) {
        var t = Hr(e, Fr);
        return li(t) ? si : t.substr(7).match(ce).map(je);
      }),
      (di = function (e, t) {
        var n,
          r,
          i,
          a,
          o = e._gsap || ke(e),
          s = e.style,
          c = ui(e);
        return o.svg && e.getAttribute(`transform`)
          ? ((i = e.transform.baseVal.consolidate().matrix),
            (c = [i.a, i.b, i.c, i.d, i.e, i.f]),
            c.join(`,`) === `1,0,0,1,0,0` ? si : c)
          : (c === si &&
              !e.offsetParent &&
              e !== sr &&
              !o.svg &&
              ((i = s.display),
              (s.display = `block`),
              (n = e.parentNode),
              (!n || !e.offsetParent) && ((a = 1), (r = e.nextElementSibling), sr.appendChild(e)),
              (c = ui(e)),
              i ? (s.display = i) : Xr(e, `display`),
              a && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : sr.removeChild(e))),
            t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
      }),
      (fi = function (e, t, n, r, i, a) {
        var o,
          s,
          c,
          l,
          u = e._gsap,
          d = i || di(e, !0),
          f = u.xOrigin || 0,
          p = u.yOrigin || 0,
          m = u.xOffset || 0,
          h = u.yOffset || 0,
          g = d[0],
          _ = d[1],
          v = d[2],
          y = d[3],
          b = d[4],
          x = d[5],
          S = t.split(` `),
          C = parseFloat(S[0]) || 0,
          w = parseFloat(S[1]) || 0;
        (n
          ? d !== si &&
            (s = g * y - _ * v) &&
            ((c = (y / s) * C + w * (-v / s) + (v * x - y * b) / s),
            (l = C * (-_ / s) + (g / s) * w - (g * x - _ * b) / s),
            (C = c),
            (w = l))
          : ((o = Jr(e)),
            (C = o.x + (~S[0].indexOf(`%`) ? (C / 100) * o.width : C)),
            (w = o.y + (~(S[1] || S[0]).indexOf(`%`) ? (w / 100) * o.height : w))),
          r || (!1 !== r && u.smooth)
            ? ((b = C - f),
              (x = w - p),
              (u.xOffset = m + (b * g + x * v) - b),
              (u.yOffset = h + (b * _ + x * y) - x))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = C),
          (u.yOrigin = w),
          (u.smooth = !!r),
          (u.origin = t),
          (u.originIsAbsolute = !!n),
          (e.style[Ir] = `0px 0px`),
          a &&
            (Zr(a, u, `xOrigin`, f, C),
            Zr(a, u, `yOrigin`, p, w),
            Zr(a, u, `xOffset`, m, u.xOffset),
            Zr(a, u, `yOffset`, h, u.yOffset)),
          e.setAttribute(`data-svg-origin`, C + ` ` + w));
      }),
      (pi = function (e, t) {
        var n = e._gsap || new mn(e);
        if (`x` in n && !t && !n.uncache) return n;
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w,
          T,
          E,
          D,
          O,
          k,
          j,
          M,
          N,
          P,
          ee,
          F = e.style,
          te = n.scaleX < 0,
          ne = `px`,
          re = `deg`,
          I = getComputedStyle(e),
          L = Hr(e, Ir) || `0`;
        return (
          (r = i = a = c = l = u = d = f = p = 0),
          (o = s = 1),
          (n.svg = !!(e.getCTM && Yr(e))),
          I.translate &&
            ((I.translate === `none` && I.scale === `none` && I.rotate === `none`) ||
              (F[Fr] =
                (I.translate === `none`
                  ? ``
                  : `translate3d(` +
                    (I.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                    `) `) +
                (I.rotate === `none` ? `` : `rotate(` + I.rotate + `) `) +
                (I.scale === `none` ? `` : `scale(` + I.scale.split(` `).join(`,`) + `) `) +
                (I[Fr] === `none` ? `` : I[Fr])),
            (F.scale = F.rotate = F.translate = `none`)),
          (g = di(e, n.svg)),
          n.svg &&
            (n.uncache
              ? ((D = e.getBBox()),
                (L = n.xOrigin - D.x + `px ` + (n.yOrigin - D.y) + `px`),
                (E = ``))
              : (E = !t && e.getAttribute(`data-svg-origin`)),
            fi(e, E || L, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
          (m = n.xOrigin || 0),
          (h = n.yOrigin || 0),
          g !== si &&
            ((b = g[0]),
            (x = g[1]),
            (S = g[2]),
            (C = g[3]),
            (r = w = g[4]),
            (i = T = g[5]),
            g.length === 6
              ? ((o = Math.sqrt(b * b + x * x)),
                (s = Math.sqrt(C * C + S * S)),
                (c = b || x ? _r(x, b) * hr : 0),
                (d = S || C ? _r(S, C) * hr + c : 0),
                d && (s *= Math.abs(Math.cos(d * gr))),
                n.svg && ((r -= m - (m * b + h * S)), (i -= h - (m * x + h * C))))
              : ((ee = g[6]),
                (N = g[7]),
                (k = g[8]),
                (j = g[9]),
                (M = g[10]),
                (P = g[11]),
                (r = g[12]),
                (i = g[13]),
                (a = g[14]),
                (_ = _r(ee, M)),
                (l = _ * hr),
                _ &&
                  ((v = Math.cos(-_)),
                  (y = Math.sin(-_)),
                  (E = w * v + k * y),
                  (D = T * v + j * y),
                  (O = ee * v + M * y),
                  (k = w * -y + k * v),
                  (j = T * -y + j * v),
                  (M = ee * -y + M * v),
                  (P = N * -y + P * v),
                  (w = E),
                  (T = D),
                  (ee = O)),
                (_ = _r(-S, M)),
                (u = _ * hr),
                _ &&
                  ((v = Math.cos(-_)),
                  (y = Math.sin(-_)),
                  (E = b * v - k * y),
                  (D = x * v - j * y),
                  (O = S * v - M * y),
                  (P = C * y + P * v),
                  (b = E),
                  (x = D),
                  (S = O)),
                (_ = _r(x, b)),
                (c = _ * hr),
                _ &&
                  ((v = Math.cos(_)),
                  (y = Math.sin(_)),
                  (E = b * v + x * y),
                  (D = w * v + T * y),
                  (x = x * v - b * y),
                  (T = T * v - w * y),
                  (b = E),
                  (w = D)),
                l && Math.abs(l) + Math.abs(c) > 359.9 && ((l = c = 0), (u = 180 - u)),
                (o = je(Math.sqrt(b * b + x * x + S * S))),
                (s = je(Math.sqrt(T * T + ee * ee))),
                (_ = _r(w, T)),
                (d = Math.abs(_) > 2e-4 ? _ * hr : 0),
                (p = P ? 1 / (P < 0 ? -P : P) : 0)),
            n.svg &&
              ((E = e.getAttribute(`transform`)),
              (n.forceCSS = e.setAttribute(`transform`, ``) || !li(Hr(e, Fr))),
              E && e.setAttribute(`transform`, E))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (te
              ? ((o *= -1), (d += c <= 0 ? 180 : -180), (c += c <= 0 ? 180 : -180))
              : ((s *= -1), (d += d <= 0 ? 180 : -180))),
          (t ||= n.uncache),
          (n.x =
            r -
            ((n.xPercent =
              r &&
              ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetWidth * n.xPercent) / 100
              : 0) +
            ne),
          (n.y =
            i -
            ((n.yPercent =
              i &&
              ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetHeight * n.yPercent) / 100
              : 0) +
            ne),
          (n.z = a + ne),
          (n.scaleX = je(o)),
          (n.scaleY = je(s)),
          (n.rotation = je(c) + re),
          (n.rotationX = je(l) + re),
          (n.rotationY = je(u) + re),
          (n.skewX = d + re),
          (n.skewY = f + re),
          (n.transformPerspective = p + ne),
          (n.zOrigin = parseFloat(L.split(` `)[2]) || 0) && (F[Ir] = mi(L)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = A.force3D),
          (n.renderTransform = n.svg ? xi : fr ? bi : gi),
          (n.uncache = 0),
          n
        );
      }),
      (mi = function (e) {
        return (e = e.split(` `))[0] + ` ` + e[1];
      }),
      (hi = function (e, t, n) {
        var r = yt(t);
        return je(parseFloat(t) + parseFloat(ei(e, `x`, n + `px`, r))) + r;
      }),
      (gi = function (e, t) {
        ((t.z = `0px`), (t.rotationY = t.rotationX = `0deg`), (t.force3D = 0), bi(e, t));
      }),
      (_i = `0deg`),
      (vi = `0px`),
      (yi = `) `),
      (bi = function (e, t) {
        var n = t || this,
          r = n.xPercent,
          i = n.yPercent,
          a = n.x,
          o = n.y,
          s = n.z,
          c = n.rotation,
          l = n.rotationY,
          u = n.rotationX,
          d = n.skewX,
          f = n.skewY,
          p = n.scaleX,
          m = n.scaleY,
          h = n.transformPerspective,
          g = n.force3D,
          _ = n.target,
          v = n.zOrigin,
          y = ``,
          b = (g === `auto` && e && e !== 1) || !0 === g;
        if (v && (u !== _i || l !== _i)) {
          var x,
            S = parseFloat(l) * gr,
            C = Math.sin(S),
            w = Math.cos(S);
          ((S = parseFloat(u) * gr),
            (x = Math.cos(S)),
            (a = hi(_, a, C * x * -v)),
            (o = hi(_, o, -Math.sin(S) * -v)),
            (s = hi(_, s, w * x * -v + v)));
        }
        (h !== vi && (y += `perspective(` + h + yi),
          (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
          (b || a !== vi || o !== vi || s !== vi) &&
            (y +=
              s !== vi || b
                ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
                : `translate(` + a + `, ` + o + yi),
          c !== _i && (y += `rotate(` + c + yi),
          l !== _i && (y += `rotateY(` + l + yi),
          u !== _i && (y += `rotateX(` + u + yi),
          (d === _i && f === _i) || (y += `skew(` + d + `, ` + f + yi),
          (p === 1 && m === 1) || (y += `scale(` + p + `, ` + m + yi),
          (_.style[Fr] = y || `translate(0, 0)`));
      }),
      (xi = function (e, t) {
        var n,
          r,
          i,
          a,
          o,
          s = t || this,
          c = s.xPercent,
          l = s.yPercent,
          u = s.x,
          d = s.y,
          f = s.rotation,
          p = s.skewX,
          m = s.skewY,
          h = s.scaleX,
          g = s.scaleY,
          _ = s.target,
          v = s.xOrigin,
          y = s.yOrigin,
          b = s.xOffset,
          x = s.yOffset,
          S = s.forceCSS,
          C = parseFloat(u),
          w = parseFloat(d);
        ((f = parseFloat(f)),
          (p = parseFloat(p)),
          (m = parseFloat(m)),
          m && ((m = parseFloat(m)), (p += m), (f += m)),
          f || p
            ? ((f *= gr),
              (p *= gr),
              (n = Math.cos(f) * h),
              (r = Math.sin(f) * h),
              (i = Math.sin(f - p) * -g),
              (a = Math.cos(f - p) * g),
              p &&
                ((m *= gr),
                (o = Math.tan(p - m)),
                (o = Math.sqrt(1 + o * o)),
                (i *= o),
                (a *= o),
                m && ((o = Math.tan(m)), (o = Math.sqrt(1 + o * o)), (n *= o), (r *= o))),
              (n = je(n)),
              (r = je(r)),
              (i = je(i)),
              (a = je(a)))
            : ((n = h), (a = g), (r = i = 0)),
          ((C && !~(u + ``).indexOf(`px`)) || (w && !~(d + ``).indexOf(`px`))) &&
            ((C = ei(_, `x`, u, `px`)), (w = ei(_, `y`, d, `px`))),
          (v || y || b || x) &&
            ((C = je(C + v - (v * n + y * i) + b)), (w = je(w + y - (v * r + y * a) + x))),
          (c || l) &&
            ((o = _.getBBox()),
            (C = je(C + (c / 100) * o.width)),
            (w = je(w + (l / 100) * o.height))),
          (o = `matrix(` + n + `,` + r + `,` + i + `,` + a + `,` + C + `,` + w + `)`),
          _.setAttribute(`transform`, o),
          S && (_.style[Fr] = o));
      }),
      (Si = function (e, t, n, r, i) {
        var a,
          o,
          s = 360,
          c = I(i),
          l = parseFloat(i) * (c && ~i.indexOf(`rad`) ? hr : 1) - r,
          u = r + l + `deg`;
        return (
          c &&
            ((a = i.split(`_`)[1]),
            a === `short` && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
            a === `cw` && l < 0
              ? (l = ((l + s * vr) % s) - ~~(l / s) * s)
              : a === `ccw` && l > 0 && (l = ((l - s * vr) % s) - ~~(l / s) * s)),
          (e._pt = o = new Wn(e._pt, t, n, r, l, wr)),
          (o.e = u),
          (o.u = `deg`),
          e._props.push(n),
          o
        );
      }),
      (Ci = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }),
      (wi = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d = Ci({}, n._gsap),
          f = `perspective,force3D,transformOrigin,svgOrigin`,
          p = n.style;
        for (i in (d.svg
          ? ((a = n.getAttribute(`transform`)),
            n.setAttribute(`transform`, ``),
            (p[Fr] = t),
            (r = pi(n, 1)),
            Xr(n, Fr),
            n.setAttribute(`transform`, a))
          : ((a = getComputedStyle(n)[Fr]), (p[Fr] = t), (r = pi(n, 1)), (p[Fr] = a)),
        mr))
          ((a = d[i]),
            (o = r[i]),
            a !== o &&
              f.indexOf(i) < 0 &&
              ((l = yt(a)),
              (u = yt(o)),
              (s = l === u ? parseFloat(a) : ei(n, i, a, u)),
              (c = parseFloat(o)),
              (e._pt = new Wn(e._pt, r, i, s, c - s, Cr)),
              (e._pt.u = u || 0),
              e._props.push(i)));
        Ci(r, d);
      }),
      q(`padding,margin,Width,Radius`, function (e, t) {
        var n = `Top`,
          r = `Right`,
          i = `Bottom`,
          a = `Left`,
          o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
            return t < 2 ? e + n : `border` + n + e;
          });
        oi[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
          var a, s;
          if (arguments.length < 4)
            return (
              (a = o.map(function (t) {
                return ti(e, t, n);
              })),
              (s = a.join(` `)),
              s.split(a[0]).length === 5 ? a[0] : s
            );
          ((a = (r + ``).split(` `)),
            (s = {}),
            o.forEach(function (e, t) {
              return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, i));
        };
      }),
      (Ti = {
        name: `css`,
        register: Gr,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, i) {
          var a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x = this._props,
            S = e.style,
            C = n.vars.startAt;
          for (d in (cr || Gr(),
          (this.styles = this.styles || Br(e)),
          (b = this.styles.props),
          (this.tween = n),
          t))
            if (d !== `autoRound` && ((o = t[d]), !we[d] || !Sn(d, t, n, r, e, i))) {
              if (
                ((l = typeof o),
                (u = oi[d]),
                l === `function` && ((o = o.call(n, r, e, i)), (l = typeof o)),
                l === `string` && ~o.indexOf(`random(`) && (o = Lt(o)),
                u)
              )
                u(this, e, d, o, n) && (y = 1);
              else if (d.substr(0, 2) === `--`)
                ((a = (getComputedStyle(e).getPropertyValue(d) + ``).trim()),
                  (o += ``),
                  (Xt.lastIndex = 0),
                  Xt.test(a) || ((f = yt(a)), (p = yt(o))),
                  p ? f !== p && (a = ei(e, d, a, p) + p) : f && (o += f),
                  this.add(S, `setProperty`, a, o, r, i, 0, 0, d),
                  x.push(d),
                  b.push(d, 0, S[d]));
              else if (l !== `undefined`) {
                if (
                  (C && d in C
                    ? ((a = typeof C[d] == `function` ? C[d].call(n, r, e, i) : C[d]),
                      I(a) && ~a.indexOf(`random(`) && (a = Lt(a)),
                      yt(a + ``) || (a += A.units[d] || yt(ti(e, d)) || ``),
                      (a + ``).charAt(1) === `=` && (a = ti(e, d)))
                    : (a = ti(e, d)),
                  (c = parseFloat(a)),
                  (m = l === `string` && o.charAt(1) === `=` && o.substr(0, 2)),
                  m && (o = o.substr(2)),
                  (s = parseFloat(o)),
                  d in Sr &&
                    (d === `autoAlpha` &&
                      (c === 1 && ti(e, `visibility`) === `hidden` && s && (c = 0),
                      b.push(`visibility`, 0, S.visibility),
                      Zr(
                        this,
                        S,
                        `visibility`,
                        c ? `inherit` : `hidden`,
                        s ? `inherit` : `hidden`,
                        !s
                      )),
                    d !== `scale` &&
                      d !== `transform` &&
                      ((d = Sr[d]), ~d.indexOf(`,`) && (d = d.split(`,`)[0]))),
                  (h = d in mr),
                  h)
                )
                  if (
                    (this.styles.save(d),
                    g ||
                      ((_ = e._gsap),
                      (_.renderTransform && !t.parseTransform) || pi(e, t.parseTransform),
                      (v = !1 !== t.smoothOrigin && _.smooth),
                      (g = this._pt = new Wn(this._pt, S, Fr, 0, 1, _.renderTransform, _, 0, -1)),
                      (g.dep = 1)),
                    d === `scale`)
                  )
                    ((this._pt = new Wn(
                      this._pt,
                      _,
                      `scaleY`,
                      _.scaleY,
                      (m ? Ne(_.scaleY, m + s) : s) - _.scaleY || 0,
                      Cr
                    )),
                      (this._pt.u = 0),
                      x.push(`scaleY`, d),
                      (d += `X`));
                  else {
                    if (d === `transformOrigin`) {
                      (b.push(Ir, 0, S[Ir]),
                        (o = ii(o)),
                        _.svg
                          ? fi(e, o, 0, v, 0, this)
                          : ((p = parseFloat(o.split(` `)[2]) || 0),
                            p !== _.zOrigin && Zr(this, _, `zOrigin`, _.zOrigin, p),
                            Zr(this, S, d, mi(a), mi(o))));
                      continue;
                    }
                    if (d === `svgOrigin`) {
                      fi(e, o, 1, v, 0, this);
                      continue;
                    }
                    if (d in ci) {
                      Si(this, _, d, c, m ? Ne(c, m + o) : o);
                      continue;
                    }
                    if (d === `smoothOrigin`) {
                      Zr(this, _, `smooth`, _.smooth, o);
                      continue;
                    }
                    if (d === `force3D`) {
                      _[d] = o;
                      continue;
                    }
                    if (d === `transform`) {
                      wi(this, o, e);
                      continue;
                    }
                  }
                else d in S || (d = Wr(d) || d);
                if (h || ((s || s === 0) && (c || c === 0) && !xr.test(o) && d in S))
                  ((f = (a + ``).substr((c + ``).length)),
                    (s ||= 0),
                    (p = yt(o) || (d in A.units ? A.units[d] : f)),
                    f !== p && (c = ei(e, d, a, p)),
                    (this._pt = new Wn(
                      this._pt,
                      h ? _ : S,
                      d,
                      c,
                      (m ? Ne(c, m + s) : s) - c,
                      h || (p !== `px` && d !== `zIndex`) || !1 === t.autoRound ? Cr : Er
                    )),
                    (this._pt.u = p || 0),
                    f !== p && p !== `%` && ((this._pt.b = a), (this._pt.r = Tr)));
                else if (d in S) ni.call(this, e, d, a, m ? m + o : o);
                else if (d in e) this.add(e, d, a || e[d], m ? m + o : o, r, i);
                else if (d !== `parseTransform`) {
                  ge(d, o);
                  continue;
                }
                (h || (d in S ? b.push(d, 0, S[d]) : b.push(d, 1, a || e[d])), x.push(d));
              }
            }
          y && Un(this);
        },
        render: function (e, t) {
          if (t.tween._time || !dr()) for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
          else t.styles.revert();
        },
        get: ti,
        aliases: Sr,
        getSetter: function (e, t, n) {
          var r = Sr[t];
          return (
            r && r.indexOf(`,`) < 0 && (t = r),
            t in mr && t !== Ir && (e._gsap.x || ti(e, `x`))
              ? n && ur === n
                ? t === `scale`
                  ? Mr
                  : jr
                : (ur = n || {}) && (t === `scale` ? Nr : Pr)
              : e.style && !ie(e.style[t])
                ? kr
                : ~t.indexOf(`-`)
                  ? Ar
                  : Fn(e, t)
          );
        },
        core: { _removeProperty: Xr, _getMatrix: di },
      }),
      (rr.utils.checkPrefix = Wr),
      (rr.core.getStyleSaver = Br),
      (function (e, t, n, r) {
        var i = q(e + `,` + t + `,` + n, function (e) {
          mr[e] = 1;
        });
        (q(t, function (e) {
          ((A.units[e] = `deg`), (ci[e] = 1));
        }),
          (Sr[i[13]] = e + `,` + t),
          q(r, function (e) {
            var t = e.split(`:`);
            Sr[t[1]] = i[t[0]];
          }));
      })(
        `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
        `rotation,rotationX,rotationY,skewX,skewY`,
        `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
        `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`
      ),
      q(
        `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
        function (e) {
          A.units[e] = `px`;
        }
      ),
      rr.registerPlugin(Ti));
  }),
  Di,
  Oi = e(() => {
    (ir(), Ei(), (Di = rr.registerPlugin(Ti) || rr), Di.core.Tween);
  });
function ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function Ai(e, t, n) {
  return (t && ki(e.prototype, t), n && ki(e, n), e);
}
var ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Y,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  X,
  ma,
  Z,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Q,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  $,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs = e(() => {
    (r(),
      (Ui = function () {
        return ji || (u !== void 0 && (ji = u.gsap) && ji.registerPlugin && ji);
      }),
      (Wi = 1),
      (Gi = []),
      (Y = []),
      (Ki = []),
      (qi = Date.now),
      (Ji = function (e, t) {
        return t;
      }),
      (Yi = function () {
        var e = zi.core,
          t = e.bridge || {},
          n = e._scrollers,
          r = e._proxies;
        (n.push.apply(n, Y),
          r.push.apply(r, Ki),
          (Y = n),
          (Ki = r),
          (Ji = function (e, n) {
            return t[e](n);
          }));
      }),
      (Xi = function (e, t) {
        return ~Ki.indexOf(e) && Ki[Ki.indexOf(e) + 1][t];
      }),
      (Zi = function (e) {
        return !!~Bi.indexOf(e);
      }),
      (Qi = function (e, t, n, r, i) {
        return e.addEventListener(t, n, { passive: !r, capture: !!i });
      }),
      ($i = function (e, t, n, r) {
        return e.removeEventListener(t, n, !!r);
      }),
      (ea = `scrollLeft`),
      (ta = `scrollTop`),
      (na = function () {
        return (Vi && Vi.isPressed) || Y.cache++;
      }),
      (ra = function (e, t) {
        var n = function n(r) {
          if (r || r === 0) {
            Wi && (Ni.history.scrollRestoration = `manual`);
            var i = Vi && Vi.isPressed;
            ((r = n.v = Math.round(r) || (Vi && Vi.iOS ? 1 : 0)),
              e(r),
              (n.cacheID = Y.cache),
              i && Ji(`ss`, r));
          } else (t || Y.cache !== n.cacheID || Ji(`ref`)) && ((n.cacheID = Y.cache), (n.v = e()));
          return n.v + n.offset;
        };
        return ((n.offset = 0), e && n);
      }),
      (ia = {
        s: ea,
        p: `left`,
        p2: `Left`,
        os: `right`,
        os2: `Right`,
        d: `width`,
        d2: `Width`,
        a: `x`,
        sc: ra(function (e) {
          return arguments.length
            ? Ni.scrollTo(e, aa.sc())
            : Ni.pageXOffset || Pi[ea] || Fi[ea] || Ii[ea] || 0;
        }),
      }),
      (aa = {
        s: ta,
        p: `top`,
        p2: `Top`,
        os: `bottom`,
        os2: `Bottom`,
        d: `height`,
        d2: `Height`,
        a: `y`,
        op: ia,
        sc: ra(function (e) {
          return arguments.length
            ? Ni.scrollTo(ia.sc(), e)
            : Ni.pageYOffset || Pi[ta] || Fi[ta] || Ii[ta] || 0;
        }),
      }),
      (oa = function (e) {
        return (
          ji.utils.toArray(e)[0] ||
          (typeof e == `string` && !1 !== ji.config().nullTargetWarn
            ? console.warn(`Element not found:`, e)
            : null)
        );
      }),
      (sa = function (e, t) {
        var n = t.s,
          r = t.sc;
        Zi(e) && (e = Pi.scrollingElement || Fi);
        var i = Y.indexOf(e),
          a = r === aa.sc ? 1 : 2;
        (!~i && (i = Y.push(e) - 1), Y[i + a] || e.addEventListener(`scroll`, na));
        var o = Y[i + a],
          s =
            o ||
            (Y[i + a] =
              ra(Xi(e, n), !0) ||
              (Zi(e)
                ? r
                : ra(function (t) {
                    return arguments.length ? (e[n] = t) : e[n];
                  })));
        return (
          (s.target = e),
          o || (s.smooth = ji.getProperty(e, `scrollBehavior`) === `smooth`),
          s
        );
      }),
      (ca = function (e, t, n) {
        var r = e,
          i = e,
          a = qi(),
          o = a,
          s = t || 50,
          c = Math.max(500, 3 * s),
          l = function (e, t) {
            var c = qi();
            t || c - a > s
              ? ((i = r), (r = e), (o = a), (a = c))
              : n
                ? (r += e)
                : (r = i + ((e - i) / (c - o)) * (a - o));
          };
        return {
          update: l,
          reset: function () {
            ((i = r = n ? 0 : r), (o = a = 0));
          },
          getVelocity: function (e) {
            var t = o,
              s = i,
              u = qi();
            return (
              (e || e === 0) && e !== r && l(e),
              a === o || u - o > c ? 0 : ((r + (n ? s : -s)) / ((n ? u : a) - t)) * 1e3
            );
          },
        };
      }),
      (la = function (e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      }),
      (ua = function (e) {
        var t = Math.max.apply(Math, e),
          n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n;
      }),
      (da = function () {
        ((zi = ji.core.globals().ScrollTrigger), zi && zi.core && Yi());
      }),
      (fa = function (e) {
        return (
          (ji = e || Ui()),
          ji &&
            typeof document < `u` &&
            document.body &&
            ((Ni = u),
            (Pi = document),
            (Fi = Pi.documentElement),
            (Ii = Pi.body),
            (Bi = [Ni, Pi, Fi, Ii]),
            ji.utils.clamp,
            (Ri = `onpointerenter` in Ii ? `pointer` : `mouse`),
            (Li = pa.isTouch =
              Ni.matchMedia && Ni.matchMedia(`(hover: none), (pointer: coarse)`).matches
                ? 1
                : `ontouchstart` in Ni || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0
                  ? 2
                  : 0),
            (Hi = pa.eventTypes =
              (
                `ontouchstart` in Fi
                  ? `touchstart,touchmove,touchcancel,touchend`
                  : `onpointerdown` in Fi
                    ? `pointerdown,pointermove,pointercancel,pointerup`
                    : `mousedown,mousemove,mouseup,mouseup`
              ).split(`,`)),
            setTimeout(function () {
              return (Wi = 0);
            }, 500),
            da(),
            (Mi = 1)),
          Mi
        );
      }),
      (ia.op = aa),
      (Y.cache = 0),
      (pa = (function () {
        function e(e) {
          this.init(e);
        }
        var t = e.prototype;
        return (
          (t.init = function (e) {
            (Mi || fa(ji) || console.warn(`Please gsap.registerPlugin(Observer)`), zi || da());
            var t = e.tolerance,
              n = e.dragMinimum,
              r = e.type,
              i = e.target,
              a = e.lineHeight,
              o = e.debounce,
              s = e.preventDefault,
              c = e.onStop,
              l = e.onStopDelay,
              u = e.ignore,
              d = e.wheelSpeed,
              f = e.event,
              p = e.onDragStart,
              m = e.onDragEnd,
              h = e.onDrag,
              g = e.onPress,
              _ = e.onRelease,
              v = e.onRight,
              y = e.onLeft,
              b = e.onUp,
              x = e.onDown,
              S = e.onChangeX,
              C = e.onChangeY,
              w = e.onChange,
              T = e.onToggleX,
              E = e.onToggleY,
              D = e.onHover,
              O = e.onHoverEnd,
              k = e.onMove,
              A = e.ignoreCheck,
              j = e.isNormalizer,
              M = e.onGestureStart,
              N = e.onGestureEnd,
              P = e.onWheel,
              ee = e.onEnable,
              F = e.onDisable,
              te = e.onClick,
              ne = e.scrollSpeed,
              re = e.capture,
              I = e.allowClicks,
              L = e.lockAxis,
              R = e.onLockAxis;
            ((this.target = i = oa(i) || Fi),
              (this.vars = e),
              (u &&= ji.utils.toArray(u)),
              (t ||= 1e-9),
              (n ||= 0),
              (d ||= 1),
              (ne ||= 1),
              (r ||= `wheel,touch,pointer`),
              (o = !1 !== o),
              (a ||= parseFloat(Ni.getComputedStyle(Ii).lineHeight) || 22));
            var ie,
              z,
              B,
              ae,
              oe,
              se,
              V,
              H = this,
              ce = 0,
              le = 0,
              ue = sa(i, ia),
              de = sa(i, aa),
              fe = ue(),
              pe = de(),
              me = ~r.indexOf(`touch`) && !~r.indexOf(`pointer`) && Hi[0] === `pointerdown`,
              he = Zi(i),
              U = i.ownerDocument || Pi,
              ge = [0, 0, 0],
              _e = [0, 0, 0],
              W = 0,
              ve = function () {
                return (W = qi());
              },
              G = function (e, t) {
                return (
                  ((H.event = e) && u && ~u.indexOf(e.target)) ||
                  (t && me && e.pointerType !== `touch`) ||
                  (A && A(e, t))
                );
              },
              ye = function () {
                (H._vx.reset(), H._vy.reset(), z.pause(), c && c(H));
              },
              be = function () {
                var e = (H.deltaX = ua(ge)),
                  n = (H.deltaY = ua(_e)),
                  r = Math.abs(e) >= t,
                  i = Math.abs(n) >= t;
                (w && (r || i) && w(H, e, n, ge, _e),
                  r &&
                    (v && H.deltaX > 0 && v(H),
                    y && H.deltaX < 0 && y(H),
                    S && S(H),
                    T && H.deltaX < 0 != ce < 0 && T(H),
                    (ce = H.deltaX),
                    (ge[0] = ge[1] = ge[2] = 0)),
                  i &&
                    (x && H.deltaY > 0 && x(H),
                    b && H.deltaY < 0 && b(H),
                    C && C(H),
                    E && H.deltaY < 0 != le < 0 && E(H),
                    (le = H.deltaY),
                    (_e[0] = _e[1] = _e[2] = 0)),
                  (ae || B) && (k && k(H), (B &&= (h(H), !1)), (ae = !1)),
                  se && !(se = !1) && R && R(H),
                  (oe &&= (P(H), !1)),
                  (ie = 0));
              },
              xe = function (e, t, n) {
                ((ge[n] += e),
                  (_e[n] += t),
                  H._vx.update(e),
                  H._vy.update(t),
                  o ? (ie ||= requestAnimationFrame(be)) : be());
              },
              Se = function (e, t) {
                (L && !V && ((H.axis = V = Math.abs(e) > Math.abs(t) ? `x` : `y`), (se = !0)),
                  V !== `y` && ((ge[2] += e), H._vx.update(e, !0)),
                  V !== `x` && ((_e[2] += t), H._vy.update(t, !0)),
                  o ? (ie ||= requestAnimationFrame(be)) : be());
              },
              Ce = function (e) {
                if (!G(e, 1)) {
                  e = la(e, s);
                  var t = e.clientX,
                    r = e.clientY,
                    i = t - H.x,
                    a = r - H.y,
                    o = H.isDragging;
                  ((H.x = t),
                    (H.y = r),
                    (o || Math.abs(H.startX - t) >= n || Math.abs(H.startY - r) >= n) &&
                      (h && (B = !0), o || (H.isDragging = !0), Se(i, a), o || (p && p(H))));
                }
              },
              we = (H.onPress = function (e) {
                G(e, 1) ||
                  ((H.axis = V = null),
                  z.pause(),
                  (H.isPressed = !0),
                  (e = la(e)),
                  (ce = le = 0),
                  (H.startX = H.x = e.clientX),
                  (H.startY = H.y = e.clientY),
                  H._vx.reset(),
                  H._vy.reset(),
                  Qi(j ? i : U, Hi[1], Ce, s, !0),
                  (H.deltaX = H.deltaY = 0),
                  g && g(H));
              }),
              Te = function (e) {
                if (!G(e, 1)) {
                  $i(j ? i : U, Hi[1], Ce, !0);
                  var t =
                      H.isDragging &&
                      (Math.abs(H.x - H.startX) > 3 || Math.abs(H.y - H.startY) > 3),
                    n = la(e);
                  (t ||
                    (H._vx.reset(),
                    H._vy.reset(),
                    s &&
                      I &&
                      ji.delayedCall(0.08, function () {
                        if (qi() - W > 300 && !e.defaultPrevented) {
                          if (e.target.click) e.target.click();
                          else if (U.createEvent) {
                            var t = U.createEvent(`MouseEvents`);
                            (t.initMouseEvent(
                              `click`,
                              !0,
                              !0,
                              Ni,
                              1,
                              n.screenX,
                              n.screenY,
                              n.clientX,
                              n.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              e.target.dispatchEvent(t));
                          }
                        }
                      })),
                    (H.isDragging = H.isGesturing = H.isPressed = !1),
                    c && !j && z.restart(!0),
                    m && t && m(H),
                    _ && _(H, t));
                }
              },
              K = function (e) {
                return (
                  e.touches && e.touches.length > 1 && (H.isGesturing = !0) && M(e, H.isDragging)
                );
              },
              Ee = function () {
                return (H.isGesturing = !1) || N(H);
              },
              De = function (e) {
                if (!G(e)) {
                  var t = ue(),
                    n = de();
                  (xe((t - fe) * ne, (n - pe) * ne, 1), (fe = t), (pe = n), c && z.restart(!0));
                }
              },
              Oe = function (e) {
                if (!G(e)) {
                  ((e = la(e, s)), P && (oe = !0));
                  var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? Ni.innerHeight : 1) * d;
                  (xe(e.deltaX * t, e.deltaY * t, 0), c && !j && z.restart(!0));
                }
              },
              ke = function (e) {
                if (!G(e)) {
                  var t = e.clientX,
                    n = e.clientY,
                    r = t - H.x,
                    i = n - H.y;
                  ((H.x = t), (H.y = n), (ae = !0), (r || i) && Se(r, i));
                }
              },
              Ae = function (e) {
                ((H.event = e), D(H));
              },
              q = function (e) {
                ((H.event = e), O(H));
              },
              je = function (e) {
                return G(e) || (la(e, s) && te(H));
              };
            ((z = H._dc = ji.delayedCall(l || 0.25, ye).pause()),
              (H.deltaX = H.deltaY = 0),
              (H._vx = ca(0, 50, !0)),
              (H._vy = ca(0, 50, !0)),
              (H.scrollX = ue),
              (H.scrollY = de),
              (H.isDragging = H.isGesturing = H.isPressed = !1),
              (H.enable = function (e) {
                return (
                  H.isEnabled ||
                    (Qi(he ? U : i, `scroll`, na),
                    r.indexOf(`scroll`) >= 0 && Qi(he ? U : i, `scroll`, De, s, re),
                    r.indexOf(`wheel`) >= 0 && Qi(i, `wheel`, Oe, s, re),
                    ((r.indexOf(`touch`) >= 0 && Li) || r.indexOf(`pointer`) >= 0) &&
                      (Qi(i, Hi[0], we, s, re),
                      Qi(U, Hi[2], Te),
                      Qi(U, Hi[3], Te),
                      I && Qi(i, `click`, ve, !1, !0),
                      te && Qi(i, `click`, je),
                      M && Qi(U, `gesturestart`, K),
                      N && Qi(U, `gestureend`, Ee),
                      D && Qi(i, Ri + `enter`, Ae),
                      O && Qi(i, Ri + `leave`, q),
                      k && Qi(i, Ri + `move`, ke)),
                    (H.isEnabled = !0),
                    e && e.type && we(e),
                    ee && ee(H)),
                  H
                );
              }),
              (H.disable = function () {
                H.isEnabled &&
                  (Gi.filter(function (e) {
                    return e !== H && Zi(e.target);
                  }).length || $i(he ? U : i, `scroll`, na),
                  H.isPressed && (H._vx.reset(), H._vy.reset(), $i(j ? i : U, Hi[1], Ce, !0)),
                  $i(he ? U : i, `scroll`, De, re),
                  $i(i, `wheel`, Oe, re),
                  $i(i, Hi[0], we, re),
                  $i(U, Hi[2], Te),
                  $i(U, Hi[3], Te),
                  $i(i, `click`, ve, !0),
                  $i(i, `click`, je),
                  $i(U, `gesturestart`, K),
                  $i(U, `gestureend`, Ee),
                  $i(i, Ri + `enter`, Ae),
                  $i(i, Ri + `leave`, q),
                  $i(i, Ri + `move`, ke),
                  (H.isEnabled = H.isPressed = H.isDragging = !1),
                  F && F(H));
              }),
              (H.kill = function () {
                H.disable();
                var e = Gi.indexOf(H);
                (e >= 0 && Gi.splice(e, 1), Vi === H && (Vi = 0));
              }),
              Gi.push(H),
              j && Zi(i) && (Vi = H),
              H.enable(f));
          }),
          Ai(e, [
            {
              key: `velocityX`,
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: `velocityY`,
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]),
          e
        );
      })()),
      (pa.version = `3.11.3`),
      (pa.create = function (e) {
        return new pa(e);
      }),
      (pa.register = fa),
      (pa.getAll = function () {
        return Gi.slice();
      }),
      (pa.getById = function (e) {
        return Gi.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      Ui() && ji.registerPlugin(pa),
      (Ka = 1),
      (qa = Date.now),
      (Ja = qa()),
      (Ya = 0),
      (Xa = 0),
      (Za = function () {
        return (Ta = 1);
      }),
      (Qa = function () {
        return (Ta = 0);
      }),
      ($a = function (e) {
        return e;
      }),
      (eo = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      }),
      (to = function () {
        return u !== void 0;
      }),
      (no = function () {
        return X || (to() && (X = u.gsap) && X.registerPlugin && X);
      }),
      (ro = function (e) {
        return !!~va.indexOf(e);
      }),
      (io = function (e) {
        return (
          Xi(e, `getBoundingClientRect`) ||
          (ro(e)
            ? function () {
                return ((ws.width = Z.innerWidth), (ws.height = Z.innerHeight), ws);
              }
            : function () {
                return Fo(e);
              })
        );
      }),
      (ao = function (e, t, n) {
        var r = n.d,
          i = n.d2,
          a = n.a;
        return (a = Xi(e, `getBoundingClientRect`))
          ? function () {
              return a()[r];
            }
          : function () {
              return (t ? Z[`inner` + i] : e[`client` + i]) || 0;
            };
      }),
      (oo = function (e, t) {
        return !t || ~Ki.indexOf(e)
          ? io(e)
          : function () {
              return ws;
            };
      }),
      (so = function (e, t) {
        var n = t.s,
          r = t.d2,
          i = t.d,
          a = t.a;
        return (n = `scroll` + r) && (a = Xi(e, n))
          ? a() - io(e)()[i]
          : ro(e)
            ? (ga[n] || _a[n]) - (Z[`inner` + r] || ga[`client` + r] || _a[`client` + r])
            : e[n] - e[`offset` + r];
      }),
      (co = function (e, t) {
        for (var n = 0; n < Aa.length; n += 3)
          (!t || ~t.indexOf(Aa[n + 1])) && e(Aa[n], Aa[n + 1], Aa[n + 2]);
      }),
      (lo = function (e) {
        return typeof e == `string`;
      }),
      (uo = function (e) {
        return typeof e == `function`;
      }),
      (fo = function (e) {
        return typeof e == `number`;
      }),
      (po = function (e) {
        return typeof e == `object`;
      }),
      (mo = function (e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause();
      }),
      (ho = function (e, t) {
        if (e.enabled) {
          var n = t(e);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      }),
      (go = Math.abs),
      (_o = `left`),
      (vo = `top`),
      (yo = `right`),
      (bo = `bottom`),
      (xo = `width`),
      (So = `height`),
      (Co = `Right`),
      (wo = `Left`),
      (To = `Top`),
      (Eo = `Bottom`),
      (Do = `padding`),
      (Oo = `margin`),
      (ko = `Width`),
      (Ao = `Height`),
      (jo = `px`),
      (Mo = function (e) {
        return Z.getComputedStyle(e);
      }),
      (No = function (e) {
        var t = Mo(e).position;
        e.style.position = t === `absolute` || t === `fixed` ? t : `relative`;
      }),
      (Po = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }),
      (Fo = function (e, t) {
        var n =
            t &&
            Mo(e)[Ea] !== `matrix(1, 0, 0, 1, 0, 0)` &&
            X.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          r = e.getBoundingClientRect();
        return (n && n.progress(0).kill(), r);
      }),
      (Io = function (e, t) {
        var n = t.d2;
        return e[`offset` + n] || e[`client` + n] || 0;
      }),
      (Lo = function (e) {
        var t,
          n = [],
          r = e.labels,
          i = e.duration();
        for (t in r) n.push(r[t] / i);
        return n;
      }),
      (Ro = function (e) {
        return function (t) {
          return X.utils.snap(Lo(e), t);
        };
      }),
      (zo = function (e) {
        var t = X.utils.snap(e),
          n =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return n
          ? function (e, r, i) {
              i === void 0 && (i = 0.001);
              var a;
              if (!r) return t(e);
              if (r > 0) {
                for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
                return n[a - 1];
              }
              for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
              return n[0];
            }
          : function (n, r, i) {
              i === void 0 && (i = 0.001);
              var a = t(n);
              return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
            };
      }),
      (Bo = function (e) {
        return function (t, n) {
          return zo(Lo(e))(t, n.direction);
        };
      }),
      (Vo = function (e, t, n, r) {
        return n.split(`,`).forEach(function (n) {
          return e(t, n, r);
        });
      }),
      (Ho = function (e, t, n, r, i) {
        return e.addEventListener(t, n, { passive: !r, capture: !!i });
      }),
      (Uo = function (e, t, n, r) {
        return e.removeEventListener(t, n, !!r);
      }),
      (Wo = function (e, t, n) {
        return n && n.wheelHandler && e(t, `wheel`, n);
      }),
      (Go = {
        startColor: `green`,
        endColor: `red`,
        indent: 0,
        fontSize: `16px`,
        fontWeight: `normal`,
      }),
      (Ko = { toggleActions: `play`, anticipatePin: 0 }),
      (qo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }),
      (Jo = function (e, t) {
        if (lo(e)) {
          var n = e.indexOf(`=`),
            r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          (~n && (e.indexOf(`%`) > n && (r *= t / 100), (e = e.substr(0, n - 1))),
            (e =
              r +
              (e in qo
                ? qo[e] * t
                : ~e.indexOf(`%`)
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0)));
        }
        return e;
      }),
      (Yo = function (e, t, n, r, i, a, o, s) {
        var c = i.startColor,
          l = i.endColor,
          u = i.fontSize,
          d = i.indent,
          f = i.fontWeight,
          p = ha.createElement(`div`),
          m = ro(n) || Xi(n, `pinType`) === `fixed`,
          h = e.indexOf(`scroller`) !== -1,
          g = m ? _a : n,
          _ = e.indexOf(`start`) !== -1,
          v = _ ? c : l,
          y =
            `border-color:` +
            v +
            `;font-size:` +
            u +
            `;color:` +
            v +
            `;font-weight:` +
            f +
            `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
        return (
          (y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`)),
          (h || s || !m) && (y += (r === aa ? yo : bo) + `:` + (a + parseFloat(d)) + `px;`),
          o && (y += `box-sizing:border-box;text-align:left;width:` + o.offsetWidth + `px;`),
          (p._isStart = _),
          p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
          (p.style.cssText = y),
          (p.innerText = t || t === 0 ? e + `-` + t : e),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p[`offset` + r.op.d2]),
          Xo(p, 0, r, _),
          p
        );
      }),
      (Xo = function (e, t, n, r) {
        var i = { display: `block` },
          a = n[r ? `os2` : `p2`],
          o = n[r ? `p2` : `os2`];
        ((e._isFlipped = r),
          (i[n.a + `Percent`] = r ? -100 : 0),
          (i[n.a] = r ? `1px` : 0),
          (i[`border` + a + ko] = 1),
          (i[`border` + o + ko] = 0),
          (i[n.p] = t + `px`),
          X.set(e, i));
      }),
      (Q = []),
      (Zo = {}),
      (Qo = function () {
        return qa() - Ya > 34 && (Ha ||= requestAnimationFrame(hs));
      }),
      ($o = function () {
        (!Pa || !Pa.isPressed || Pa.startX > _a.clientWidth) &&
          (Y.cache++,
          Pa ? (Ha ||= requestAnimationFrame(hs)) : hs(),
          Ya || as(`scrollStart`),
          (Ya = qa()));
      }),
      (es = function () {
        ((La = Z.innerWidth), (Ia = Z.innerHeight));
      }),
      (ts = function () {
        (Y.cache++,
          !wa &&
            !Na &&
            !ha.fullscreenElement &&
            !ha.webkitFullscreenElement &&
            (!Fa || La !== Z.innerWidth || Math.abs(Z.innerHeight - Ia) > 0.25 * Z.innerHeight) &&
            ya.restart(!0));
      }),
      (ns = {}),
      (rs = []),
      (is = function e() {
        return Uo($, `scrollEnd`, e) || fs(!0);
      }),
      (as = function (e) {
        return (
          (ns[e] &&
            ns[e].map(function (e) {
              return e();
            })) ||
          rs
        );
      }),
      (os = []),
      (ss = function (e) {
        for (var t = 0; t < os.length; t += 5)
          (!e || (os[t + 4] && os[t + 4].query === e)) &&
            ((os[t].style.cssText = os[t + 1]),
            os[t].getBBox && os[t].setAttribute(`transform`, os[t + 2] || ``),
            (os[t + 3].uncache = 1));
      }),
      (cs = function (e, t) {
        var n;
        for (Da = 0; Da < Q.length; Da++)
          ((n = Q[Da]), !n || (t && n._ctx !== t) || (e ? n.kill(1) : n.revert(!0, !0)));
        (t && ss(t), t || as(`revert`));
      }),
      (ls = function (e, t) {
        (Y.cache++,
          (t || !Ua) &&
            Y.forEach(function (e) {
              return uo(e) && e.cacheID++ && (e.rec = 0);
            }),
          lo(e) && (Z.history.scrollRestoration = Ba = e));
      }),
      (us = 0),
      (ds = function () {
        if (Wa !== us) {
          var e = (Wa = us);
          requestAnimationFrame(function () {
            return e === us && fs(!0);
          });
        }
      }),
      (fs = function (e, t) {
        if (!Ya || e) {
          ((Ua = $.isRefreshing = !0),
            Y.forEach(function (e) {
              return uo(e) && e.cacheID++ && (e.rec = e());
            }));
          var n = as(`refreshInit`);
          (ja && $.sort(),
            t || cs(),
            Y.forEach(function (e) {
              uo(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`), e(0));
            }),
            Q.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            Q.forEach(function (e, t) {
              if (e._subPinOffset && e.pin) {
                var n = e.vars.horizontal ? `offsetWidth` : `offsetHeight`,
                  r = e.pin[n];
                (e.revert(!0, 1), e.adjustPinSpacing(e.pin[n] - r), e.revert(!1, 1));
              }
            }),
            Q.forEach(function (e) {
              return (
                e.vars.end === `max` &&
                e.setPositions(e.start, Math.max(e.start + 1, so(e.scroller, e._dir)))
              );
            }),
            n.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            Y.forEach(function (e) {
              uo(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = `smooth`);
                  }),
                e.rec && e(e.rec));
            }),
            ls(Ba, 1),
            ya.pause(),
            us++,
            hs(2),
            Q.forEach(function (e) {
              return uo(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (Ua = $.isRefreshing = !1),
            as(`refresh`));
        } else Ho($, `scrollEnd`, is);
      }),
      (ps = 0),
      (ms = 1),
      (hs = function (e) {
        if (!Ua || e === 2) {
          (($.isUpdating = !0), Ga && Ga.update(0));
          var t = Q.length,
            n = qa(),
            r = n - Ja >= 50,
            i = t && Q[0].scroll();
          if (
            ((ms = ps > i ? -1 : 1),
            (ps = i),
            r && (Ya && !Ta && n - Ya > 200 && ((Ya = 0), as(`scrollEnd`)), (Sa = Ja), (Ja = n)),
            ms < 0)
          ) {
            for (Da = t; Da-- > 0;) Q[Da] && Q[Da].update(0, r);
            ms = 1;
          } else for (Da = 0; Da < t; Da++) Q[Da] && Q[Da].update(0, r);
          $.isUpdating = !1;
        }
        Ha = 0;
      }),
      (gs = [
        _o,
        vo,
        bo,
        yo,
        Oo + Eo,
        Oo + Co,
        Oo + To,
        Oo + wo,
        `display`,
        `flexShrink`,
        `float`,
        `zIndex`,
        `gridColumnStart`,
        `gridColumnEnd`,
        `gridRowStart`,
        `gridRowEnd`,
        `gridArea`,
        `justifySelf`,
        `alignSelf`,
        `placeSelf`,
        `order`,
      ]),
      (_s = gs.concat([
        xo,
        So,
        `boxSizing`,
        `max` + ko,
        `max` + Ao,
        `position`,
        Oo,
        Do,
        Do + To,
        Do + Co,
        Do + Eo,
        Do + wo,
      ])),
      (vs = function (e, t, n) {
        xs(n);
        var r = e._gsap;
        if (r.spacerIsNative) xs(r.spacerState);
        else if (e._gsap.swappedIn) {
          var i = t.parentNode;
          i && (i.insertBefore(e, t), i.removeChild(t));
        }
        e._gsap.swappedIn = !1;
      }),
      (ys = function (e, t, n, r) {
        if (!e._gsap.swappedIn) {
          for (var i, a = gs.length, o = t.style, s = e.style; a--;) ((i = gs[a]), (o[i] = n[i]));
          ((o.position = n.position === `absolute` ? `absolute` : `relative`),
            n.display === `inline` && (o.display = `inline-block`),
            (s[bo] = s[yo] = `auto`),
            (o.flexBasis = n.flexBasis || `auto`),
            (o.overflow = `visible`),
            (o.boxSizing = `border-box`),
            (o[xo] = Io(e, ia) + jo),
            (o[So] = Io(e, aa) + jo),
            (o[Do] = s[Oo] = s[vo] = s[_o] = `0`),
            xs(r),
            (s[xo] = s[`max` + ko] = n[xo]),
            (s[So] = s[`max` + Ao] = n[So]),
            (s[Do] = n[Do]),
            e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0));
        }
      }),
      (bs = /([A-Z])/g),
      (xs = function (e) {
        if (e) {
          var t,
            n,
            r = e.t.style,
            i = e.length,
            a = 0;
          for ((e.t._gsap || X.core.getCache(e.t)).uncache = 1; a < i; a += 2)
            ((n = e[a + 1]),
              (t = e[a]),
              n ? (r[t] = n) : r[t] && r.removeProperty(t.replace(bs, `-$1`).toLowerCase()));
        }
      }),
      (Ss = function (e) {
        for (var t = _s.length, n = e.style, r = [], i = 0; i < t; i++) r.push(_s[i], n[_s[i]]);
        return ((r.t = e), r);
      }),
      (Cs = function (e, t, n) {
        for (var r, i = [], a = e.length, o = n ? 8 : 0; o < a; o += 2)
          ((r = e[o]), i.push(r, r in t ? t[r] : e[o + 1]));
        return ((i.t = e.t), i);
      }),
      (ws = { left: 0, top: 0 }),
      (Ts = function (e, t, n, r, i, a, o, s, c, l, u, d, f) {
        (uo(e) && (e = e(s)),
          lo(e) &&
            e.substr(0, 3) === `max` &&
            (e = d + (e.charAt(4) === `=` ? Jo(`0` + e.substr(3), n) : 0)));
        var p,
          m,
          h,
          g = f ? f.time() : 0;
        if ((f && f.seek(0), fo(e))) o && Xo(o, n, r, !0);
        else {
          uo(t) && (t = t(s));
          var _,
            v,
            y,
            b,
            x = (e || `0`).split(` `);
          ((h = oa(t) || _a),
            (_ = Fo(h) || {}),
            (!_ || (!_.left && !_.top)) &&
              Mo(h).display === `none` &&
              ((b = h.style.display),
              (h.style.display = `block`),
              (_ = Fo(h)),
              b ? (h.style.display = b) : h.style.removeProperty(`display`)),
            (v = Jo(x[0], _[r.d])),
            (y = Jo(x[1] || `0`, n)),
            (e = _[r.p] - c[r.p] - l + v + i - y),
            o && Xo(o, y, r, n - y < 20 || (o._isStart && y > 20)),
            (n -= n - y));
        }
        if (a) {
          var S = e + n,
            C = a._isStart;
          ((p = `scroll` + r.d2),
            Xo(
              a,
              S,
              r,
              (C && S > 20) || (!C && (u ? Math.max(_a[p], ga[p]) : a.parentNode[p]) <= S + 1)
            ),
            u && ((c = Fo(o)), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + jo)));
        }
        return (
          f &&
            h &&
            ((p = Fo(h)),
            f.seek(d),
            (m = Fo(h)),
            (f._caScrollDist = p[r.p] - m[r.p]),
            (e = (e / f._caScrollDist) * d)),
          f && f.seek(g),
          f ? e : Math.round(e)
        );
      }),
      (Es = /(webkit|moz|length|cssText|inset)/i),
      (Ds = function (e, t, n, r) {
        if (e.parentNode !== t) {
          var i,
            a,
            o = e.style;
          if (t === _a) {
            for (i in ((e._stOrig = o.cssText), (a = Mo(e)), a))
              +i || Es.test(i) || !a[i] || typeof o[i] != `string` || i === `0` || (o[i] = a[i]);
            ((o.top = n), (o.left = r));
          } else o.cssText = e._stOrig;
          ((X.core.getCache(e).uncache = 1), t.appendChild(e));
        }
      }),
      (Os = function (e, t) {
        var n,
          r,
          i = sa(e, t),
          a = `_scroll` + t.p2,
          o = function t(o, s, c, l, u) {
            var d = t.tween,
              f = s.onComplete,
              p = {};
            return (
              (c ||= i()),
              (u = (l && u) || 0),
              (l ||= o - c),
              d && d.kill(),
              (n = Math.round(c)),
              (s[a] = o),
              (s.modifiers = p),
              (p[a] = function (e) {
                return (
                  (e = Math.round(i())),
                  e !== n && e !== r && Math.abs(e - n) > 3 && Math.abs(e - r) > 3
                    ? (d.kill(), (t.tween = 0))
                    : (e = c + l * d.ratio + u * d.ratio * d.ratio),
                  (r = n),
                  (n = Math.round(e))
                );
              }),
              (s.onComplete = function () {
                ((t.tween = 0), f && f.call(d));
              }),
              (d = t.tween = X.to(e, s)),
              d
            );
          };
        return (
          (e[a] = i),
          (i.wheelHandler = function () {
            return o.tween && o.tween.kill() && (o.tween = 0);
          }),
          Ho(e, `wheel`, i.wheelHandler),
          o
        );
      }),
      ($ = (function () {
        function e(t, n) {
          (ma || e.register(X) || console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
            this.init(t, n));
        }
        var t = e.prototype;
        return (
          (t.init = function (t, n) {
            if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), Xa)) {
              t = Po(lo(t) || fo(t) || t.nodeType ? { trigger: t } : t, Ko);
              var r,
                i,
                a,
                o,
                s,
                c,
                l,
                u,
                d,
                f,
                p,
                m,
                h,
                g,
                _,
                v,
                y,
                b,
                x,
                S,
                C,
                w,
                T,
                E,
                D,
                O,
                k,
                A,
                j,
                M,
                N,
                P,
                ee,
                F,
                te,
                ne,
                re,
                I,
                L = t,
                R = L.onUpdate,
                ie = L.toggleClass,
                z = L.id,
                B = L.onToggle,
                ae = L.onRefresh,
                oe = L.scrub,
                se = L.trigger,
                V = L.pin,
                H = L.pinSpacing,
                ce = L.invalidateOnRefresh,
                le = L.anticipatePin,
                ue = L.onScrubComplete,
                de = L.onSnapComplete,
                fe = L.once,
                pe = L.snap,
                me = L.pinReparent,
                he = L.pinSpacer,
                U = L.containerAnimation,
                ge = L.fastScrollEnd,
                _e = L.preventOverlaps,
                W = t.horizontal || (t.containerAnimation && !1 !== t.horizontal) ? ia : aa,
                ve = !oe && oe !== 0,
                G = oa(t.scroller || Z),
                ye = X.core.getCache(G),
                be = ro(G),
                xe = (`pinType` in t ? t.pinType : Xi(G, `pinType`) || (be && `fixed`)) === `fixed`,
                Se = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Ce = ve && t.toggleActions.split(` `),
                we = `markers` in t ? t.markers : Ko.markers,
                Te = be ? 0 : parseFloat(Mo(G)[`border` + W.p2 + ko]) || 0,
                K = this,
                Ee =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(K);
                  },
                De = ao(G, be, W),
                Oe = oo(G, be),
                ke = 0,
                Ae = 0,
                q = sa(G, W);
              if (
                (za(K),
                (K._dir = W),
                (le *= 45),
                (K.scroller = G),
                (K.scroll = U ? U.time.bind(U) : q),
                (o = q()),
                (K.vars = t),
                (n ||= t.animation),
                `refreshPriority` in t && ((ja = 1), t.refreshPriority === -9999 && (Ga = K)),
                (ye.tweenScroll = ye.tweenScroll || { top: Os(G, aa), left: Os(G, ia) }),
                (K.tweenTo = r = ye.tweenScroll[W.p]),
                (K.scrubDuration = function (e) {
                  ((N = fo(e) && e),
                    N
                      ? M
                        ? M.duration(e)
                        : (M = X.to(n, {
                            ease: `expo`,
                            totalProgress: `+=0.001`,
                            duration: N,
                            paused: !0,
                            onComplete: function () {
                              return ue && ue(K);
                            },
                          }))
                      : (M && M.progress(1).kill(), (M = 0)));
                }),
                n &&
                  ((n.vars.lazy = !1),
                  n._initted ||
                    (!1 !== n.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      n.duration() &&
                      n.render(0, !0, !0)),
                  (K.animation = n.pause()),
                  (n.scrollTrigger = K),
                  K.scrubDuration(oe),
                  (A = 0),
                  (z ||= n.vars.id)),
                Q.push(K),
                pe &&
                  ((po(pe) && !pe.push) || (pe = { snapTo: pe }),
                  `scrollBehavior` in _a.style &&
                    X.set(be ? [_a, ga] : G, { scrollBehavior: `auto` }),
                  Y.forEach(function (e) {
                    return (
                      uo(e) && e.target === (be ? ha.scrollingElement || ga : G) && (e.smooth = !1)
                    );
                  }),
                  (a = uo(pe.snapTo)
                    ? pe.snapTo
                    : pe.snapTo === `labels`
                      ? Ro(n)
                      : pe.snapTo === `labelsDirectional`
                        ? Bo(n)
                        : !1 === pe.directional
                          ? X.utils.snap(pe.snapTo)
                          : function (e, t) {
                              return zo(pe.snapTo)(e, qa() - Ae < 500 ? 0 : t.direction);
                            }),
                  (P = pe.duration || { min: 0.1, max: 2 }),
                  (P = po(P) ? xa(P.min, P.max) : xa(P, P)),
                  (ee = X.delayedCall(pe.delay || N / 2 || 0.1, function () {
                    var e = q(),
                      t = qa() - Ae < 500,
                      i = r.tween;
                    if (!(t || Math.abs(K.getVelocity()) < 10) || i || Ta || ke === e)
                      K.isActive && ke !== e && ee.restart(!0);
                    else {
                      var o = (e - c) / h,
                        s = n && !ve ? n.totalProgress() : o,
                        u = t ? 0 : ((s - j) / (qa() - Sa)) * 1e3 || 0,
                        d = X.utils.clamp(-o, 1 - o, (go(u / 2) * u) / 0.185),
                        f = o + (!1 === pe.inertia ? 0 : d),
                        p = xa(0, 1, a(f, K)),
                        m = Math.round(c + p * h),
                        g = pe,
                        _ = g.onStart,
                        v = g.onInterrupt,
                        y = g.onComplete;
                      if (e <= l && e >= c && m !== e) {
                        if (i && !i._initted && i.data <= go(m - e)) return;
                        (!1 === pe.inertia && (d = p - o),
                          r(
                            m,
                            {
                              duration: P(
                                go((0.185 * Math.max(go(f - s), go(p - s))) / u / 0.05 || 0)
                              ),
                              ease: pe.ease || `power3`,
                              data: go(m - e),
                              onInterrupt: function () {
                                return ee.restart(!0) && v && v(K);
                              },
                              onComplete: function () {
                                (K.update(),
                                  (ke = q()),
                                  (A = j = n && !ve ? n.totalProgress() : K.progress),
                                  de && de(K),
                                  y && y(K));
                              },
                            },
                            e,
                            d * h,
                            m - e - d * h
                          ),
                          _ && _(K, r.tween));
                      }
                    }
                  }).pause())),
                z && (Zo[z] = K),
                (se = K.trigger = oa(se || V)),
                (I = se && se._gsap && se._gsap.stRevert),
                (I &&= I(K)),
                (V = !0 === V ? se : oa(V)),
                lo(ie) && (ie = { targets: se, className: ie }),
                V &&
                  (!1 === H ||
                    H === Oo ||
                    (H =
                      !(
                        !H &&
                        V.parentNode &&
                        V.parentNode.style &&
                        Mo(V.parentNode).display === `flex`
                      ) && Do),
                  (K.pin = V),
                  (i = X.core.getCache(V)),
                  i.spacer
                    ? (g = i.pinState)
                    : (he &&
                        ((he = oa(he)),
                        he && !he.nodeType && (he = he.current || he.nativeElement),
                        (i.spacerIsNative = !!he),
                        he && (i.spacerState = Ss(he))),
                      (i.spacer = y = he || ha.createElement(`div`)),
                      y.classList.add(`pin-spacer`),
                      z && y.classList.add(`pin-spacer-` + z),
                      (i.pinState = g = Ss(V))),
                  !1 !== t.force3D && X.set(V, { force3D: !0 }),
                  (K.spacer = y = i.spacer),
                  (k = Mo(V)),
                  (T = k[H + W.os2]),
                  (x = X.getProperty(V)),
                  (S = X.quickSetter(V, W.a, jo)),
                  ys(V, y, k),
                  (v = Ss(V))),
                we)
              ) {
                ((m = po(we) ? Po(we, Go) : Go),
                  (f = Yo(`scroller-start`, z, G, W, m, 0)),
                  (p = Yo(`scroller-end`, z, G, W, m, 0, f)),
                  (b = f[`offset` + W.op.d2]));
                var je = oa(Xi(G, `content`) || G);
                ((u = this.markerStart = Yo(`start`, z, je, W, m, b, 0, U)),
                  (d = this.markerEnd = Yo(`end`, z, je, W, m, b, 0, U)),
                  U && (re = X.quickSetter([u, d], W.a, jo)),
                  !xe &&
                    !(Ki.length && !0 === Xi(G, `fixedMarkers`)) &&
                    (No(be ? _a : G),
                    X.set([f, p], { force3D: !0 }),
                    (D = X.quickSetter(f, W.a, jo)),
                    (O = X.quickSetter(p, W.a, jo))));
              }
              if (U) {
                var Me = U.vars.onUpdate,
                  Ne = U.vars.onUpdateParams;
                U.eventCallback(`onUpdate`, function () {
                  (K.update(0, 0, 1), Me && Me.apply(Ne || []));
                });
              }
              ((K.previous = function () {
                return Q[Q.indexOf(K) - 1];
              }),
                (K.next = function () {
                  return Q[Q.indexOf(K) + 1];
                }),
                (K.revert = function (e, t) {
                  if (!t) return K.kill(!0);
                  var r = !1 !== e || !K.enabled,
                    i = wa;
                  r !== K.isReverted &&
                    (r &&
                      ((te = Math.max(q(), K.scroll.rec || 0)),
                      (F = K.progress),
                      (ne = n && n.progress())),
                    u &&
                      [u, d, f, p].forEach(function (e) {
                        return (e.style.display = r ? `none` : `block`);
                      }),
                    r && ((wa = 1), K.update(r)),
                    V && (r ? vs(V, y, g) : (!me || !K.isActive) && ys(V, y, Mo(V), E)),
                    r || K.update(r),
                    (wa = i),
                    (K.isReverted = r));
                }),
                (K.refresh = function (i, a) {
                  if ((!wa && K.enabled) || a)
                    if (V && i && Ya) Ho(e, `scrollEnd`, is);
                    else {
                      (!Ua && Ee && Ee(K),
                        (wa = 1),
                        (Ae = qa()),
                        (r.tween &&= (r.tween.kill(), 0)),
                        M && M.pause(),
                        ce && n && n.revert({ kill: !1 }).invalidate(),
                        K.isReverted || K.revert(!0, !0),
                        (K._subPinOffset = !1));
                      for (
                        var m,
                          b,
                          S,
                          T,
                          D,
                          O,
                          k,
                          A,
                          j,
                          N,
                          P = De(),
                          re = Oe(),
                          I = U ? U.duration() : so(G, W),
                          L = 0,
                          R = 0,
                          ie = t.end,
                          z = t.endTrigger || se,
                          B = t.start || (t.start !== 0 && se ? (V ? `0 0` : `0 100%`) : 0),
                          oe = (K.pinnedContainer = t.pinnedContainer && oa(t.pinnedContainer)),
                          le = (se && Math.max(0, Q.indexOf(K))) || 0,
                          ue = le;
                        ue--;
                      )
                        ((O = Q[ue]),
                          O.end || O.refresh(0, 1) || (wa = 1),
                          (k = O.pin),
                          k &&
                            (k === se || k === V) &&
                            !O.isReverted &&
                            ((N ||= []), N.unshift(O), O.revert(!0, !0)),
                          O !== Q[ue] && (le--, ue--));
                      for (
                        uo(B) && (B = B(K)),
                          c = Ts(B, se, P, W, q(), u, f, K, re, Te, xe, I, U) || (V ? -0.001 : 0),
                          uo(ie) && (ie = ie(K)),
                          lo(ie) &&
                            !ie.indexOf(`+=`) &&
                            (~ie.indexOf(` `)
                              ? (ie = (lo(B) ? B.split(` `)[0] : ``) + ie)
                              : ((L = Jo(ie.substr(2), P)), (ie = lo(B) ? B : c + L), (z = se))),
                          l =
                            Math.max(
                              c,
                              Ts(
                                ie || (z ? `100% 0` : I),
                                z,
                                P,
                                W,
                                q() + L,
                                d,
                                p,
                                K,
                                re,
                                Te,
                                xe,
                                I,
                                U
                              )
                            ) || -0.001,
                          h = l - c || ((c -= 0.01) && 0.001),
                          L = 0,
                          ue = le;
                        ue--;
                      )
                        ((O = Q[ue]),
                          (k = O.pin),
                          k &&
                            O.start - O._pinPush <= c &&
                            !U &&
                            O.end > 0 &&
                            ((m = O.end - O.start),
                            ((k === se && O.start - O._pinPush < c) || k === oe) &&
                              !fo(B) &&
                              (L += m * (1 - O.progress)),
                            k === V && (R += m)));
                      if (
                        ((c += L),
                        (l += L),
                        (K._pinPush = R),
                        u &&
                          L &&
                          ((m = {}),
                          (m[W.a] = `+=` + L),
                          oe && (m[W.p] = `-=` + q()),
                          X.set([u, d], m)),
                        V)
                      )
                        ((m = Mo(V)),
                          (T = W === aa),
                          (S = q()),
                          (C = parseFloat(x(W.a)) + R),
                          !I && l > 1 && ((be ? _a : G).style[`overflow-` + W.a] = `scroll`),
                          ys(V, y, m),
                          (v = Ss(V)),
                          (b = Fo(V, !0)),
                          (A = xe && sa(G, T ? ia : aa)()),
                          H &&
                            ((E = [H + W.os2, h + R + jo]),
                            (E.t = y),
                            (ue = H === Do ? Io(V, W) + h + R : 0),
                            ue && E.push(W.d, ue + jo),
                            xs(E),
                            oe &&
                              Q.forEach(function (e) {
                                e.pin === oe && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
                              }),
                            xe && q(te)),
                          xe &&
                            ((D = {
                              top: b.top + (T ? S - c : A) + jo,
                              left: b.left + (T ? A : S - c) + jo,
                              boxSizing: `border-box`,
                              position: `fixed`,
                            }),
                            (D[xo] = D[`max` + ko] = Math.ceil(b.width) + jo),
                            (D[So] = D[`max` + Ao] = Math.ceil(b.height) + jo),
                            (D[Oo] = D[Oo + To] = D[Oo + Co] = D[Oo + Eo] = D[Oo + wo] = `0`),
                            (D[Do] = m[Do]),
                            (D[Do + To] = m[Do + To]),
                            (D[Do + Co] = m[Do + Co]),
                            (D[Do + Eo] = m[Do + Eo]),
                            (D[Do + wo] = m[Do + wo]),
                            (_ = Cs(g, D, me)),
                            Ua && q(0)),
                          n
                            ? ((j = n._initted),
                              Ma(1),
                              n.render(n.duration(), !0, !0),
                              (w = x(W.a) - C + h + R),
                              h !== w && xe && _.splice(_.length - 2, 2),
                              n.render(0, !0, !0),
                              j || n.invalidate(!0),
                              n.parent || n.totalTime(n.totalTime()),
                              Ma(0))
                            : (w = h));
                      else if (se && q() && !U)
                        for (b = se.parentNode; b && b !== _a;)
                          (b._pinOffset && ((c -= b._pinOffset), (l -= b._pinOffset)),
                            (b = b.parentNode));
                      (N &&
                        N.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (K.start = c),
                        (K.end = l),
                        (o = s = Ua ? te : q()),
                        !U && !Ua && (o < te && q(te), (K.scroll.rec = 0)),
                        K.revert(!1, !0),
                        ee && ((ke = -1), K.isActive && q(c + h * F), ee.restart(!0)),
                        (wa = 0),
                        n &&
                          ve &&
                          (n._initted || ne) &&
                          n.progress() !== ne &&
                          n.progress(ne, !0).render(n.time(), !0, !0),
                        (F !== K.progress || U) &&
                          (n && !ve && n.totalProgress(F, !0),
                          (K.progress = (o - c) / h === F ? 0 : F)),
                        V && H && (y._pinOffset = Math.round(K.progress * w)),
                        ae && !Ua && ae(K));
                    }
                }),
                (K.getVelocity = function () {
                  return ((q() - s) / (qa() - Sa)) * 1e3 || 0;
                }),
                (K.endAnimation = function () {
                  (mo(K.callbackAnimation),
                    n &&
                      (M
                        ? M.progress(1)
                        : n.paused()
                          ? ve || mo(n, K.direction < 0, 1)
                          : mo(n, n.reversed())));
                }),
                (K.labelToScroll = function (e) {
                  return (
                    (n && n.labels && (c || K.refresh() || c) + (n.labels[e] / n.duration()) * h) ||
                    0
                  );
                }),
                (K.getTrailing = function (e) {
                  var t = Q.indexOf(K),
                    n = K.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
                  return (
                    lo(e)
                      ? n.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : n
                  ).filter(function (e) {
                    return K.direction > 0 ? e.end <= c : e.start >= l;
                  });
                }),
                (K.update = function (e, t, i) {
                  if (!U || i || e) {
                    var a,
                      u,
                      d,
                      p,
                      m,
                      g,
                      b,
                      x,
                      E = Ua ? te : K.scroll(),
                      k = e ? 0 : (E - c) / h,
                      N = k < 0 ? 0 : k > 1 ? 1 : k || 0,
                      P = K.progress;
                    if (
                      (t &&
                        ((s = o),
                        (o = U ? q() : E),
                        pe && ((j = A), (A = n && !ve ? n.totalProgress() : N))),
                      le &&
                        !N &&
                        V &&
                        !wa &&
                        !Ka &&
                        Ya &&
                        c < E + ((E - s) / (qa() - Sa)) * le &&
                        (N = 1e-4),
                      N !== P && K.enabled)
                    ) {
                      if (
                        ((a = K.isActive = !!N && N < 1),
                        (u = !!P && P < 1),
                        (g = a !== u),
                        (m = g || !!N != !!P),
                        (K.direction = N > P ? 1 : -1),
                        (K.progress = N),
                        m &&
                          !wa &&
                          ((d = N && !P ? 0 : N === 1 ? 1 : P === 1 ? 2 : 3),
                          ve &&
                            ((p = (!g && Ce[d + 1] !== `none` && Ce[d + 1]) || Ce[d]),
                            (x = n && (p === `complete` || p === `reset` || p in n)))),
                        _e &&
                          (g || x) &&
                          (x || oe || !n) &&
                          (uo(_e)
                            ? _e(K)
                            : K.getTrailing(_e).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        ve ||
                          (!M || wa || Ka
                            ? n && n.totalProgress(N, !!wa)
                            : ((U || (Ga && Ga !== K)) && M.render(M._dp._time - M._start),
                              M.resetTo
                                ? M.resetTo(`totalProgress`, N, n._tTime / n._tDur)
                                : ((M.vars.totalProgress = N), M.invalidate().restart()))),
                        V)
                      )
                        if ((e && H && (y.style[H + W.os2] = T), xe)) {
                          if (m) {
                            if (((b = !e && N > P && l + 1 > E && E + 1 >= so(G, W)), me))
                              if (e || (!a && !b)) Ds(V, y);
                              else {
                                var F = Fo(V, !0),
                                  ne = E - c;
                                Ds(
                                  V,
                                  _a,
                                  F.top + (W === aa ? ne : 0) + jo,
                                  F.left + (W === aa ? 0 : ne) + jo
                                );
                              }
                            (xs(a || b ? _ : v),
                              (w !== h && N < 1 && a) || S(C + (N !== 1 || b ? 0 : w)));
                          }
                        } else S(eo(C + w * N));
                      (pe && !r.tween && !wa && !Ka && ee.restart(!0),
                        ie &&
                          (g || (fe && N && (N < 1 || !Va))) &&
                          ba(ie.targets).forEach(function (e) {
                            return e.classList[a || fe ? `add` : `remove`](ie.className);
                          }),
                        R && !ve && !e && R(K),
                        m && !wa
                          ? (ve &&
                              (x &&
                                (p === `complete`
                                  ? n.pause().totalProgress(1)
                                  : p === `reset`
                                    ? n.restart(!0).pause()
                                    : p === `restart`
                                      ? n.restart(!0)
                                      : n[p]()),
                              R && R(K)),
                            (g || !Va) &&
                              (B && g && ho(K, B),
                              Se[d] && ho(K, Se[d]),
                              fe && (N === 1 ? K.kill(!1, 1) : (Se[d] = 0)),
                              g || ((d = N === 1 ? 1 : 3), Se[d] && ho(K, Se[d]))),
                            ge &&
                              !a &&
                              Math.abs(K.getVelocity()) > (fo(ge) ? ge : 2500) &&
                              (mo(K.callbackAnimation),
                              M ? M.progress(1) : mo(n, p === `reverse` ? 1 : !N, 1)))
                          : ve && R && !wa && R(K));
                    }
                    if (O) {
                      var I = U ? (E / U.duration()) * (U._caScrollDist || 0) : E;
                      (D(I + (f._isFlipped ? 1 : 0)), O(I));
                    }
                    re && re((-E / U.duration()) * (U._caScrollDist || 0));
                  }
                }),
                (K.enable = function (t, n) {
                  K.enabled ||
                    ((K.enabled = !0),
                    Ho(G, `resize`, ts),
                    Ho(be ? ha : G, `scroll`, $o),
                    Ee && Ho(e, `refreshInit`, Ee),
                    !1 !== t && ((K.progress = F = 0), (o = s = ke = q())),
                    !1 !== n && K.refresh());
                }),
                (K.getTween = function (e) {
                  return e && r ? r.tween : M;
                }),
                (K.setPositions = function (e, t) {
                  (V && ((C += e - c), (w += t - e - h), H === Do && K.adjustPinSpacing(t - e - h)),
                    (K.start = c = e),
                    (K.end = l = t),
                    (h = t - e),
                    K.update());
                }),
                (K.adjustPinSpacing = function (e) {
                  if (E) {
                    var t = E.indexOf(W.d) + 1;
                    ((E[t] = parseFloat(E[t]) + e + jo), (E[1] = parseFloat(E[1]) + e + jo), xs(E));
                  }
                }),
                (K.disable = function (t, n) {
                  if (
                    K.enabled &&
                    (!1 !== t && K.revert(!0, !0),
                    (K.enabled = K.isActive = !1),
                    n || (M && M.pause()),
                    (te = 0),
                    i && (i.uncache = 1),
                    Ee && Uo(e, `refreshInit`, Ee),
                    ee && (ee.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                    !be)
                  ) {
                    for (var a = Q.length; a--;) if (Q[a].scroller === G && Q[a] !== K) return;
                    (Uo(G, `resize`, ts), Uo(G, `scroll`, $o));
                  }
                }),
                (K.kill = function (e, r) {
                  (K.disable(e, r), M && !r && M.kill(), z && delete Zo[z]);
                  var a = Q.indexOf(K);
                  (a >= 0 && Q.splice(a, 1),
                    a === Da && ms > 0 && Da--,
                    (a = 0),
                    Q.forEach(function (e) {
                      return e.scroller === K.scroller && (a = 1);
                    }),
                    a || Ua || (K.scroll.rec = 0),
                    n && ((n.scrollTrigger = null), e && n.revert({ kill: !1 }), r || n.kill()),
                    u &&
                      [u, d, f, p].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    Ga === K && (Ga = 0),
                    V &&
                      (i && (i.uncache = 1),
                      (a = 0),
                      Q.forEach(function (e) {
                        return e.pin === V && a++;
                      }),
                      a || (i.spacer = 0)),
                    t.onKill && t.onKill(K));
                }),
                K.enable(!1, !1),
                I && I(K),
                n && n.add && !h
                  ? X.delayedCall(0.01, function () {
                      return c || l || K.refresh();
                    }) &&
                    (h = 0.01) &&
                    (c = l = 0)
                  : K.refresh(),
                V && ds());
            } else this.update = this.refresh = this.kill = $a;
          }),
          (e.register = function (t) {
            return ((ma ||= ((X = t || no()), to() && u.document && e.enable(), Xa)), ma);
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) Ko[t] = e[t];
            return Ko;
          }),
          (e.disable = function (e, t) {
            ((Xa = 0),
              Q.forEach(function (n) {
                return n[t ? `kill` : `disable`](e);
              }),
              Uo(Z, `wheel`, $o),
              Uo(ha, `scroll`, $o),
              clearInterval(Ca),
              Uo(ha, `touchcancel`, $a),
              Uo(_a, `touchstart`, $a),
              Vo(Uo, ha, `pointerdown,touchstart,mousedown`, Za),
              Vo(Uo, ha, `pointerup,touchend,mouseup`, Qa),
              ya.kill(),
              co(Uo));
            for (var n = 0; n < Y.length; n += 3) (Wo(Uo, Y[n], Y[n + 1]), Wo(Uo, Y[n], Y[n + 2]));
          }),
          (e.enable = function () {
            if (
              ((Z = u),
              (ha = document),
              (ga = ha.documentElement),
              (_a = ha.body),
              X &&
                ((ba = X.utils.toArray),
                (xa = X.utils.clamp),
                (za = X.core.context || $a),
                (Ma = X.core.suppressOverwrites || $a),
                (Ba = Z.history.scrollRestoration || `auto`),
                X.core.globals(`ScrollTrigger`, e),
                _a))
            ) {
              ((Xa = 1),
                pa.register(X),
                (e.isTouch = pa.isTouch),
                (Ra = pa.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(i.userAgent)),
                Ho(Z, `wheel`, $o),
                (va = [Z, ha, ga, _a]),
                X.matchMedia
                  ? ((e.matchMedia = function (e) {
                      var t,
                        n = X.matchMedia();
                      for (t in e) n.add(t, e[t]);
                      return n;
                    }),
                    X.addEventListener(`matchMediaInit`, function () {
                      return cs();
                    }),
                    X.addEventListener(`matchMediaRevert`, function () {
                      return ss();
                    }),
                    X.addEventListener(`matchMedia`, function () {
                      (fs(0, 1), as(`matchMedia`));
                    }),
                    X.matchMedia(`(orientation: portrait)`, function () {
                      return (es(), es);
                    }))
                  : console.warn(`Requires GSAP 3.11.0 or later`),
                es(),
                Ho(ha, `scroll`, $o));
              var t,
                n,
                r = _a.style,
                a = r.borderTopStyle,
                o = X.core.Animation.prototype;
              for (
                o.revert ||
                  Object.defineProperty(o, `revert`, {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  r.borderTopStyle = `solid`,
                  t = Fo(_a),
                  aa.m = Math.round(t.top + aa.sc()) || 0,
                  ia.m = Math.round(t.left + ia.sc()) || 0,
                  a ? (r.borderTopStyle = a) : r.removeProperty(`border-top-style`),
                  Ca = setInterval(Qo, 250),
                  X.delayedCall(0.5, function () {
                    return (Ka = 0);
                  }),
                  Ho(ha, `touchcancel`, $a),
                  Ho(_a, `touchstart`, $a),
                  Vo(Ho, ha, `pointerdown,touchstart,mousedown`, Za),
                  Vo(Ho, ha, `pointerup,touchend,mouseup`, Qa),
                  Ea = X.utils.checkPrefix(`transform`),
                  _s.push(Ea),
                  ma = qa(),
                  ya = X.delayedCall(0.2, fs).pause(),
                  Aa = [
                    ha,
                    `visibilitychange`,
                    function () {
                      var e = Z.innerWidth,
                        t = Z.innerHeight;
                      ha.hidden ? ((Oa = e), (ka = t)) : (Oa === e && ka === t) || ts();
                    },
                    ha,
                    `DOMContentLoaded`,
                    fs,
                    Z,
                    `load`,
                    fs,
                    Z,
                    `resize`,
                    ts,
                  ],
                  co(Ho),
                  Q.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  n = 0;
                n < Y.length;
                n += 3
              )
                (Wo(Uo, Y[n], Y[n + 1]), Wo(Uo, Y[n], Y[n + 2]));
            }
          }),
          (e.config = function (t) {
            `limitCallbacks` in t && (Va = !!t.limitCallbacks);
            var n = t.syncInterval;
            ((n && clearInterval(Ca)) || ((Ca = n) && setInterval(Qo, n)),
              `ignoreMobileResize` in t && (Fa = e.isTouch === 1 && t.ignoreMobileResize),
              `autoRefreshEvents` in t &&
                (co(Uo) || co(Ho, t.autoRefreshEvents || `none`),
                (Na = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)));
          }),
          (e.scrollerProxy = function (e, t) {
            var n = oa(e),
              r = Y.indexOf(n),
              i = ro(n);
            (~r && Y.splice(r, i ? 6 : 2),
              t && (i ? Ki.unshift(Z, t, _a, t, ga, t) : Ki.unshift(n, t)));
          }),
          (e.clearMatchMedia = function (e) {
            Q.forEach(function (t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
            });
          }),
          (e.isInViewport = function (e, t, n) {
            var r = (lo(e) ? oa(e) : e).getBoundingClientRect(),
              i = r[n ? xo : So] * t || 0;
            return n
              ? r.right - i > 0 && r.left + i < Z.innerWidth
              : r.bottom - i > 0 && r.top + i < Z.innerHeight;
          }),
          (e.positionInViewport = function (e, t, n) {
            lo(e) && (e = oa(e));
            var r = e.getBoundingClientRect(),
              i = r[n ? xo : So],
              a =
                t == null
                  ? i / 2
                  : t in qo
                    ? qo[t] * i
                    : ~t.indexOf(`%`)
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
            return n ? (r.left + a) / Z.innerWidth : (r.top + a) / Z.innerHeight;
          }),
          (e.killAll = function (e) {
            if (
              (Q.forEach(function (e) {
                return e.vars.id !== `ScrollSmoother` && e.kill();
              }),
              !0 !== e)
            ) {
              var t = ns.killAll || [];
              ((ns = {}),
                t.forEach(function (e) {
                  return e();
                }));
            }
          }),
          e
        );
      })()),
      ($.version = `3.11.3`),
      ($.saveStyles = function (e) {
        return e
          ? ba(e).forEach(function (e) {
              if (e && e.style) {
                var t = os.indexOf(e);
                (t >= 0 && os.splice(t, 5),
                  os.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute(`transform`),
                    X.core.getCache(e),
                    za()
                  ));
              }
            })
          : os;
      }),
      ($.revert = function (e, t) {
        return cs(!e, t);
      }),
      ($.create = function (e, t) {
        return new $(e, t);
      }),
      ($.refresh = function (e) {
        return e ? ts() : (ma || $.register()) && fs(!0);
      }),
      ($.update = hs),
      ($.clearScrollMemory = ls),
      ($.maxScroll = function (e, t) {
        return so(e, t ? ia : aa);
      }),
      ($.getScrollFunc = function (e, t) {
        return sa(oa(e), t ? ia : aa);
      }),
      ($.getById = function (e) {
        return Zo[e];
      }),
      ($.getAll = function () {
        return Q.filter(function (e) {
          return e.vars.id !== `ScrollSmoother`;
        });
      }),
      ($.isScrolling = function () {
        return !!Ya;
      }),
      ($.snapDirectional = zo),
      ($.addEventListener = function (e, t) {
        var n = ns[e] || (ns[e] = []);
        ~n.indexOf(t) || n.push(t);
      }),
      ($.removeEventListener = function (e, t) {
        var n = ns[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }),
      ($.batch = function (e, t) {
        var n,
          r = [],
          i = {},
          a = t.interval || 0.016,
          o = t.batchMax || 1e9,
          s = function (e, t) {
            var n = [],
              r = [],
              i = X.delayedCall(a, function () {
                (t(n, r), (n = []), (r = []));
              }).pause();
            return function (e) {
              (n.length || i.restart(!0),
                n.push(e.trigger),
                r.push(e),
                o <= n.length && i.progress(1));
            };
          };
        for (n in t)
          i[n] = n.substr(0, 2) === `on` && uo(t[n]) && n !== `onRefreshInit` ? s(n, t[n]) : t[n];
        return (
          uo(o) &&
            ((o = o()),
            Ho($, `refresh`, function () {
              return (o = t.batchMax());
            })),
          ba(e).forEach(function (e) {
            var t = {};
            for (n in i) t[n] = i[n];
            ((t.trigger = e), r.push($.create(t)));
          }),
          r
        );
      }),
      (As = function (e, t, n, r) {
        return (t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1);
      }),
      (js = function e(t, n) {
        (!0 === n
          ? t.style.removeProperty(`touch-action`)
          : (t.style.touchAction =
              !0 === n ? `auto` : n ? `pan-` + n + (pa.isTouch ? ` pinch-zoom` : ``) : `none`),
          t === ga && e(_a, n));
      }),
      (Ms = { auto: 1, scroll: 1 }),
      (Ns = function (e) {
        var t = e.event,
          n = e.target,
          r = e.axis,
          i,
          a = (t.changedTouches ? t.changedTouches[0] : t).target,
          o = a._gsap || X.core.getCache(a),
          s = qa();
        if (!o._isScrollT || s - o._isScrollT > 2e3) {
          for (; a && a.scrollHeight <= a.clientHeight;) a = a.parentNode;
          ((o._isScroll = a && !ro(a) && a !== n && (Ms[(i = Mo(a)).overflowY] || Ms[i.overflowX])),
            (o._isScrollT = s));
        }
        (o._isScroll || r === `x`) && (t.stopPropagation(), (t._gsapAllow = !0));
      }),
      (Ps = function (e, t, n, r) {
        return pa.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (r &&= Ns),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return n && Ho(ha, pa.eventTypes[0], Is, !1, !0);
          },
          onDisable: function () {
            return Uo(ha, pa.eventTypes[0], Is, !0);
          },
        });
      }),
      (Fs = /(input|label|select|textarea)/i),
      (Is = function (e) {
        var t = Fs.test(e.target.tagName);
        (t || ks) && ((e._gsapAllow = !0), (ks = t));
      }),
      (Ls = function (e) {
        (po(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          (e.type ||= `wheel,touch`),
          (e.debounce = !!e.debounce),
          (e.id = e.id || `normalizer`));
        var t,
          n,
          r,
          i,
          a,
          o,
          s,
          c,
          l = e,
          u = l.normalizeScrollX,
          d = l.momentum,
          f = l.allowNestedScroll,
          p = oa(e.target) || ga,
          m = X.core.globals().ScrollSmoother,
          h = m && m.get(),
          g =
            Ra &&
            ((e.content && oa(e.content)) || (h && !1 !== e.content && !h.smooth() && h.content())),
          _ = sa(p, aa),
          v = sa(p, ia),
          y = 1,
          b =
            (pa.isTouch && Z.visualViewport
              ? Z.visualViewport.scale * Z.visualViewport.width
              : Z.outerWidth) / Z.innerWidth,
          x = 0,
          S = uo(d)
            ? function () {
                return d(t);
              }
            : function () {
                return d || 2.8;
              },
          C = Ps(p, e.type, !0, f),
          w = function () {
            return (i = !1);
          },
          T = $a,
          E = $a,
          D = function () {
            ((n = so(p, aa)), (E = xa(Ra ? 1 : 0, n)), u && (T = xa(0, so(p, ia))), (r = us));
          },
          O = function () {
            ((g._gsap.y = eo(parseFloat(g._gsap.y) + _.offset) + `px`),
              (g.style.transform =
                `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
                parseFloat(g._gsap.y) +
                `, 0, 1)`),
              (_.offset = _.cacheID = 0));
          },
          k = function () {
            if (i) {
              requestAnimationFrame(w);
              var e = eo(t.deltaY / 2),
                n = E(_.v - e);
              if (g && n !== _.v + _.offset) {
                _.offset = n - _.v;
                var r = eo((parseFloat(g && g._gsap.y) || 0) - _.offset);
                ((g.style.transform =
                  `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + r + `, 0, 1)`),
                  (g._gsap.y = r + `px`),
                  (_.cacheID = Y.cache),
                  hs());
              }
              return !0;
            }
            (_.offset && O(), (i = !0));
          },
          A = function () {
            (D(),
              a.isActive() &&
                a.vars.scrollY > n &&
                (_() > n ? a.progress(1) && _(n) : a.resetTo(`scrollY`, n)));
          };
        return (
          g && X.set(g, { y: `+=0` }),
          (e.ignoreCheck = function (e) {
            return (
              (Ra && e.type === `touchmove` && k(e)) ||
              (y > 1.05 && e.type !== `touchstart`) ||
              t.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            var e = y;
            ((y = eo(((Z.visualViewport && Z.visualViewport.scale) || 1) / b)),
              a.pause(),
              e !== y && js(p, y > 1.01 || (!u && `x`)),
              (o = v()),
              (s = _()),
              D(),
              (r = us));
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if ((_.offset && O(), t)) {
                Y.cache++;
                var r,
                  i,
                  o = S();
                (u &&
                  ((r = v()),
                  (i = r + (0.05 * o * -e.velocityX) / 0.227),
                  (o *= As(v, r, i, so(p, ia))),
                  (a.vars.scrollX = T(i))),
                  (r = _()),
                  (i = r + (0.05 * o * -e.velocityY) / 0.227),
                  (o *= As(_, r, i, so(p, aa))),
                  (a.vars.scrollY = E(i)),
                  a.invalidate().duration(o).play(0.01),
                  ((Ra && a.vars.scrollY >= n) || r >= n - 1) &&
                    X.to({}, { onUpdate: A, duration: o }));
              } else c.restart(!0);
            }),
          (e.onWheel = function () {
            (a._ts && a.pause(), qa() - x > 1e3 && ((r = 0), (x = qa())));
          }),
          (e.onChange = function (e, t, n, i, a) {
            if (
              (us !== r && D(),
              t && u && v(T(i[2] === t ? o + (e.startX - e.x) : v() + t - i[1])),
              n)
            ) {
              _.offset && O();
              var c = a[2] === n,
                l = c ? s + e.startY - e.y : _() + n - a[1],
                d = E(l);
              (c && l !== d && (s += d - l), _(d));
            }
            (n || t) && hs();
          }),
          (e.onEnable = function () {
            (js(p, !u && `x`),
              $.addEventListener(`refresh`, A),
              Ho(Z, `resize`, A),
              (_.smooth &&= ((_.target.style.scrollBehavior = `auto`), (v.smooth = !1))),
              C.enable());
          }),
          (e.onDisable = function () {
            (js(p, !0), Uo(Z, `resize`, A), $.removeEventListener(`refresh`, A), C.kill());
          }),
          (e.lockAxis = !1 !== e.lockAxis),
          (t = new pa(e)),
          (t.iOS = Ra),
          Ra && !_() && _(1),
          Ra && X.ticker.add($a),
          (c = t._dc),
          (a = X.to(t, {
            ease: `power4`,
            paused: !0,
            scrollX: u ? `+=0.1` : `+=0`,
            scrollY: `+=0.1`,
            onComplete: c.vars.onComplete,
          })),
          t
        );
      }),
      ($.sort = function (e) {
        return Q.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                e.start -
                (t.start + -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        );
      }),
      ($.observe = function (e) {
        return new pa(e);
      }),
      ($.normalizeScroll = function (e) {
        if (e === void 0) return Pa;
        if (!0 === e && Pa) return Pa.enable();
        if (!1 === e) return Pa && Pa.kill();
        var t = e instanceof pa ? e : Ls(e);
        return (Pa && Pa.target === t.target && Pa.kill(), ro(t.target) && (Pa = t), t);
      }),
      ($.core = {
        _getVelocityProp: ca,
        _inputObserver: Ps,
        _scrollers: Y,
        _proxies: Ki,
        bridge: {
          ss: function () {
            (Ya || as(`scrollStart`), (Ya = qa()));
          },
          ref: function () {
            return wa;
          },
        },
      }),
      no() && X.registerPlugin($));
  }),
  zs = e(() => {
    Rs();
  });
function Bs(e, t) {
  if (!t) return null;
  let [n, r] = t.split(`#`),
    [i] = n.split(`?`);
  for (let [t, n] of Object.entries(e)) {
    let e = n.path;
    if (!e) continue;
    let a = [],
      o = e.replace(/:([^\/]+)/g, (e, t) => (a.push(t), `([^/]+)`)),
      s = i.match(RegExp(`^${o}/?$`));
    if (s) {
      let e = a.reduce((e, t, n) => ((e[t] = s[n + 1]), e), {}),
        i;
      if (r && n.elements) {
        let e = Object.entries(n.elements).find(([, e]) => e === r);
        e && (i = e[0]);
      }
      return { routeId: t, params: e, anchorId: i };
    }
  }
  return null;
}
function Vs(e) {
  let {
      style: t,
      link: r,
      enableClick: i,
      navigateNewTab: s,
      bgImage: d,
      bgAnim: p,
      contentMaxWidth: m,
      contentPadding: _,
      labelText: v,
      labelOptions: y,
      titleText: b,
      titleOptions: x,
      descText: S,
      descOptions: C,
      contentAnim: w,
      progressMode: T,
      progressOptions: E,
      outTransitionColor: D,
      scrubSmoothing: O,
    } = e,
    k = g.current() === g.canvas,
    A = f(),
    j = h(),
    M = n(null),
    N = n(null),
    P = n(null),
    ee = n(null),
    F = n(null),
    te = n(null),
    ne = n(null),
    re = n(null),
    I = n(null),
    L = n(!1),
    R = n(!1),
    ie = n(null),
    z = (e, t = !1) => {
      if (!(!e || e === `#`))
        if (
          e.startsWith(`http://`) ||
          e.startsWith(`https://`) ||
          e.startsWith(`//`) ||
          e.startsWith(`mailto:`) ||
          e.startsWith(`tel:`) ||
          t
        )
          u.open(e, `_blank`, `noopener noreferrer`);
        else {
          let t = Bs(j.routes, e);
          t ? j.navigate(t.routeId, t.anchorId ?? ``, t.params) : (u.location.href = e);
        }
    };
  l(() => {
    if (k || A) return;
    let e = !0;
    ((L.current = !1),
      (R.current = !1),
      I.current && (I.current.style.height = `0%`),
      M.current && M.current.revert());
    let t = N.current;
    M.current = Di.context(() => {
      let n = () => {
        if (L.current) return;
        L.current = !0;
        let t = Di.timeline({
          onComplete: () => {
            (u.scrollBy(0, -50),
              z(r, s),
              setTimeout(() => {
                e && (L.current = !1);
              }, 1e3));
          },
        });
        (ee.current &&
          t.to(
            ee.current,
            { scale: p.scaleEnd + 0.3, duration: 1.2, ease: `power4.inOut`, overwrite: `auto` },
            0
          ),
          F.current &&
            t.to(
              F.current,
              {
                opacity: Math.min(1, p.overlayOpacityEnd + 0.3),
                duration: 1.2,
                ease: `power4.inOut`,
                overwrite: `auto`,
              },
              0
            ),
          te.current &&
            t.to(
              te.current,
              {
                y: w.yEnd - 80,
                opacity: 0,
                duration: 0.8,
                ease: `power3.inOut`,
                overwrite: `auto`,
              },
              0
            ),
          ne.current && t.to(ne.current, { opacity: 0, duration: 0.4, overwrite: `auto` }, 0),
          I.current &&
            t.to(
              I.current,
              { height: `100%`, duration: 0.9, ease: `expo.inOut`, overwrite: `auto` },
              0.2
            ));
      };
      ie.current = n;
      let i = Di.timeline({
        defaults: { ease: `none` },
        scrollTrigger: {
          trigger: t,
          start: `top top`,
          end: `bottom bottom`,
          scrub: O > 0 ? O : !0,
          onUpdate: (e) => {
            (e.progress < 0.95 && (R.current = !0),
              R.current && e.progress > 0.99 && e.direction === 1 && ((R.current = !1), n()));
          },
          onLeave: (e) => {
            R.current && e.direction === 1 && ((R.current = !1), n());
          },
        },
      });
      if (
        (ee.current &&
          i.fromTo(ee.current, { scale: p.scaleStart }, { scale: p.scaleEnd, duration: 1 }, 0),
        F.current &&
          i.fromTo(
            F.current,
            { opacity: p.overlayOpacityStart },
            { opacity: p.overlayOpacityEnd, duration: 1 },
            0
          ),
        te.current &&
          i.fromTo(
            te.current,
            { opacity: w.opacityStart, y: w.yStart },
            { opacity: w.opacityEnd, y: w.yEnd, duration: 1 },
            0
          ),
        ne.current)
      ) {
        let e = T === `horizontal` ? `width` : `height`;
        i.fromTo(ne.current, { [e]: `${E.startPercent}%` }, { [e]: `100%`, duration: 1 }, 0);
      }
      re.current &&
        E.startPercent < 20 &&
        i.fromTo(re.current, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);
    });
    let n = new ResizeObserver(() => {
      e && $ && $.refresh();
    });
    return (
      t && n.observe(t),
      () => {
        ((e = !1), n.disconnect(), M.current && M.current.revert());
      }
    );
  }, [k, A, r, s, p, w, T, E.startPercent, O]);
  let B = k ? w.opacityEnd : w.opacityStart,
    ae = k ? w.yEnd : w.yStart,
    oe = k ? p.scaleEnd : p.scaleStart,
    se = k ? p.overlayOpacityEnd : p.overlayOpacityStart,
    V = k ? 100 : E.startPercent,
    H = k || E.startPercent >= 20 ? 1 : 0;
  return a(`div`, {
    ref: N,
    ...t,
    style: {
      ...t,
      position: `relative`,
      background: `#000`,
      cursor: k || !i ? `default` : `pointer`,
    },
    onClick: (e) => {
      i && (e.preventDefault(), !k && (ie.current ? ie.current() : z(r, s)));
    },
    children: o(`div`, {
      ref: P,
      style: { position: `sticky`, top: 0, height: `100vh`, width: `100%`, overflow: `hidden` },
      children: [
        a(`div`, {
          style: { position: `absolute`, inset: 0, zIndex: 0 },
          children: d?.src
            ? o(c, {
                children: [
                  a(`img`, {
                    ref: ee,
                    src: d.src,
                    alt: `Background`,
                    style: {
                      width: `100%`,
                      height: `100%`,
                      objectFit: `cover`,
                      transform: `scale(${oe})`,
                      willChange: `transform`,
                    },
                  }),
                  a(`div`, {
                    ref: F,
                    style: {
                      position: `absolute`,
                      inset: 0,
                      backgroundColor: `#000000`,
                      opacity: se,
                      willChange: `opacity`,
                    },
                  }),
                ],
              })
            : a(`div`, { style: { width: `100%`, height: `100%`, background: `#111` } }),
        }),
        a(`div`, {
          style: {
            position: `relative`,
            zIndex: 1,
            paddingLeft: _,
            paddingRight: _,
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
          },
          children: o(`div`, {
            ref: te,
            style: {
              display: `flex`,
              flexDirection: `column`,
              maxWidth: `${m}%`,
              opacity: B,
              transform: `translateY(${ae}px)`,
              willChange: `transform, opacity`,
            },
            children: [
              v &&
                a(`span`, {
                  style: { color: y.color, ...y.font, marginBottom: `0.5em` },
                  children: v,
                }),
              b &&
                a(`span`, {
                  style: { color: x.color, ...x.font, marginBottom: `0.2em` },
                  children: b,
                }),
              S && a(`span`, { style: { color: C.color, ...C.font }, children: S }),
            ],
          }),
        }),
        T === `horizontal` &&
          a(`div`, {
            style: { position: `absolute`, bottom: 0, left: 0, width: `100%`, zIndex: 2 },
            children: a(`div`, {
              ref: ne,
              style: {
                width: `${V}%`,
                height: E.lineWidth,
                background: E.lineColor,
                position: `absolute`,
                bottom: 0,
                left: 0,
                willChange: `width`,
              },
              children:
                E.text &&
                a(`div`, {
                  style: { position: `absolute`, right: 0, bottom: `100%`, paddingBottom: 8 },
                  children: a(`span`, {
                    ref: re,
                    style: {
                      display: `block`,
                      color: E.textColor,
                      ...E.font,
                      letterSpacing: `0.05em`,
                      whiteSpace: `nowrap`,
                      opacity: H,
                      willChange: `opacity`,
                    },
                    children: E.text,
                  }),
                }),
            }),
          }),
        T === `vertical` &&
          a(`div`, {
            style: { position: `absolute`, right: 0, bottom: 0, height: `100%`, zIndex: 2 },
            children: a(`div`, {
              ref: ne,
              style: {
                height: `${V}%`,
                width: E.lineWidth,
                background: E.lineColor,
                position: `absolute`,
                bottom: 0,
                right: 0,
                willChange: `height`,
              },
              children:
                E.text &&
                a(`div`, {
                  style: { position: `absolute`, top: 0, right: `100%`, paddingRight: 8 },
                  children: a(`span`, {
                    ref: re,
                    style: {
                      display: `block`,
                      color: E.textColor,
                      ...E.font,
                      letterSpacing: `0.05em`,
                      whiteSpace: `nowrap`,
                      writingMode: `vertical-rl`,
                      transform: `rotate(180deg)`,
                      opacity: H,
                      willChange: `opacity`,
                    },
                    children: E.text,
                  }),
                }),
            }),
          }),
        a(`div`, {
          ref: I,
          style: {
            position: `absolute`,
            bottom: 0,
            left: 0,
            width: `100%`,
            height: `0%`,
            background: D,
            zIndex: 999,
          },
        }),
      ],
    }),
  });
}
var Hs = e(() => {
  (r(),
    s(),
    t(),
    m(),
    Oi(),
    zs(),
    u !== void 0 && Di.registerPlugin($),
    (Vs.defaultProps = {
      link: `#`,
      enableClick: !0,
      navigateNewTab: !1,
      contentMaxWidth: 50,
      contentPadding: `10%`,
      bgAnim: { scaleStart: 1, scaleEnd: 1.15, overlayOpacityStart: 0, overlayOpacityEnd: 0.5 },
      labelText: `Next Project`,
      labelOptions: {
        color: `rgba(255, 255, 255, 0.5)`,
        font: { fontFamily: `Inter`, fontSize: 16, fontWeight: 500 },
      },
      titleText: `GRAVIX STUDIO`,
      titleOptions: {
        color: `#ffffff`,
        font: { fontFamily: `Inter`, fontSize: 64, fontWeight: 700 },
      },
      descText: `ARCHITECTURE`,
      descOptions: {
        color: `rgba(255, 255, 255, 0.3)`,
        font: { fontFamily: `Inter`, fontSize: 48, fontWeight: 700 },
      },
      contentAnim: { opacityStart: 0, opacityEnd: 1, yStart: 100, yEnd: 0 },
      progressMode: `horizontal`,
      progressOptions: {
        text: `KEEP SCROLLING`,
        textColor: `#ffffff`,
        lineColor: `#ffffff`,
        lineWidth: 2,
        font: { fontFamily: `Inter`, fontSize: 12, fontWeight: 600 },
        startPercent: 20,
      },
      outTransitionColor: `#000000`,
      scrubSmoothing: 1,
    }),
    d(Vs, {
      link: { type: p.Link, title: `Next Link` },
      enableClick: {
        type: p.Boolean,
        title: `Clickable`,
        defaultValue: !0,
        enabledTitle: `Yes`,
        disabledTitle: `No`,
      },
      navigateNewTab: { type: p.Boolean, title: `Open in New Tab`, defaultValue: !1 },
      bgImage: { type: p.ResponsiveImage, title: `Background Image` },
      bgAnim: {
        type: p.Object,
        title: `BG Animation`,
        controls: {
          scaleStart: { type: p.Number, title: `Start Scale`, defaultValue: 1, step: 0.05 },
          scaleEnd: { type: p.Number, title: `End Scale`, defaultValue: 1.15, step: 0.05 },
          overlayOpacityStart: {
            type: p.Number,
            title: `Start Darken`,
            defaultValue: 0,
            min: 0,
            max: 1,
            step: 0.05,
          },
          overlayOpacityEnd: {
            type: p.Number,
            title: `End Darken`,
            defaultValue: 0.5,
            min: 0,
            max: 1,
            step: 0.05,
          },
        },
      },
      contentMaxWidth: {
        type: p.Number,
        title: `Copy Max Width`,
        defaultValue: 50,
        min: 10,
        max: 100,
        unit: `%`,
        displayStepper: !0,
      },
      contentPadding: { type: p.String, title: `Copy Padding`, defaultValue: `10%` },
      labelText: { type: p.String, title: `Label Text`, defaultValue: `Next Project` },
      labelOptions: {
        type: p.Object,
        title: `Label Style`,
        controls: {
          font: {
            type: p.Font,
            title: `Font`,
            controls: `extended`,
            defaultFontType: `sans-serif`,
          },
          color: { type: p.Color, title: `Color`, defaultValue: `rgba(255, 255, 255, 0.5)` },
        },
      },
      titleText: { type: p.String, title: `Title Text`, defaultValue: `GRAVIX STUDIO` },
      titleOptions: {
        type: p.Object,
        title: `Title Style`,
        controls: {
          font: {
            type: p.Font,
            title: `Font`,
            controls: `extended`,
            defaultFontType: `sans-serif`,
          },
          color: { type: p.Color, title: `Color`, defaultValue: `#ffffff` },
        },
      },
      descText: { type: p.String, title: `Desc Text`, defaultValue: `ARCHITECTURE` },
      descOptions: {
        type: p.Object,
        title: `Desc Style`,
        controls: {
          font: {
            type: p.Font,
            title: `Font`,
            controls: `extended`,
            defaultFontType: `sans-serif`,
          },
          color: { type: p.Color, title: `Color`, defaultValue: `rgba(255, 255, 255, 0.3)` },
        },
      },
      contentAnim: {
        type: p.Object,
        title: `Content Animation`,
        controls: {
          opacityStart: {
            type: p.Number,
            title: `Start Opacity`,
            min: 0,
            max: 1,
            step: 0.1,
            defaultValue: 0,
          },
          opacityEnd: {
            type: p.Number,
            title: `End Opacity`,
            min: 0,
            max: 1,
            step: 0.1,
            defaultValue: 1,
          },
          yStart: { type: p.Number, title: `Start Y Move`, defaultValue: 100 },
          yEnd: { type: p.Number, title: `End Y Move`, defaultValue: 0 },
        },
      },
      progressMode: {
        type: p.Enum,
        title: `Progress Line`,
        options: [`horizontal`, `vertical`],
        optionTitles: [`Horizontal`, `Vertical`],
        defaultValue: `horizontal`,
        displaySegmentedControl: !0,
      },
      progressOptions: {
        type: p.Object,
        title: `Progress Design`,
        controls: {
          text: { type: p.String, title: `Text`, defaultValue: `KEEP SCROLLING` },
          font: {
            type: p.Font,
            title: `Font`,
            controls: `extended`,
            defaultFontType: `sans-serif`,
          },
          textColor: { type: p.Color, title: `Text Color`, defaultValue: `#ffffff` },
          lineColor: { type: p.Color, title: `Line Color`, defaultValue: `#ffffff` },
          lineWidth: {
            type: p.Number,
            title: `Line Width`,
            defaultValue: 2,
            min: 1,
            max: 20,
            displayStepper: !0,
          },
          startPercent: {
            type: p.Number,
            title: `Start (%)`,
            defaultValue: 20,
            min: 0,
            max: 100,
            displayStepper: !0,
          },
        },
      },
      outTransitionColor: { type: p.Color, title: `Out Anim Color`, defaultValue: `#000000` },
      scrubSmoothing: {
        type: p.Number,
        title: `Scrub Smoothing`,
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.1,
      },
    }));
});
export { Hs as n, Vs as t };
//# sourceMappingURL=Next_Page_on_Scroll.Dyl-OJVc.mjs.map
