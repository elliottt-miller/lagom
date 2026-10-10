import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  H as r,
  P as i,
  S as a,
  V as o,
  c as s,
  j as c,
  m as l,
  s as u,
  u as d,
  x as f,
  y as p,
  z as ee,
} from "./react.BtSUcPAM.mjs";
import { P as m } from "./motion.B_UOAosx.mjs";
import {
  Ft as h,
  I as g,
  L as te,
  Mt as ne,
  N as re,
  Q as _,
  T as ie,
  o as v,
} from "./framer.DuFjdl15.mjs";
var ae,
  oe,
  se,
  y = e(() => {
    (t(),
      (ae = typeof ee == `object` && ee && ee.Object === Object && ee),
      (oe = typeof self == `object` && self && self.Object === Object && self),
      (se = ae || oe || Function(`return this`)()));
  });
function ce(e) {
  var t = pe.call(e, he),
    n = e[he];
  try {
    e[he] = void 0;
    var r = !0;
  } catch {}
  var i = me.call(e);
  return (r && (t ? (e[he] = n) : delete e[he]), i);
}
function le(e) {
  return ge.call(e);
}
function ue(e) {
  return e == null ? (e === void 0 ? ve : _e) : ye && ye in Object(e) ? ce(e) : le(e);
}
var de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  b = e(() => {
    (y(),
      (de = se.Symbol),
      (fe = Object.prototype),
      (pe = fe.hasOwnProperty),
      (me = fe.toString),
      (he = de ? de.toStringTag : void 0),
      (ge = Object.prototype.toString),
      (_e = `[object Null]`),
      (ve = `[object Undefined]`),
      (ye = de ? de.toStringTag : void 0));
  });
function be(e) {
  return typeof e == `object` && !!e;
}
var xe = e(() => {});
function Se(e) {
  return typeof e == `symbol` || (be(e) && ue(e) == Ce);
}
var Ce,
  x = e(() => {
    (y(), b(), xe(), (Ce = `[object Symbol]`));
  });
function we(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
  return i;
}
var Te = e(() => {}),
  Ee,
  S = e(() => {
    Ee = Array.isArray;
  });
function De(e) {
  if (typeof e == `string`) return e;
  if (Ee(e)) return we(e, De) + ``;
  if (Se(e)) return Ae ? Ae.call(e) : ``;
  var t = e + ``;
  return t == `0` && 1 / e == -Oe ? `-0` : t;
}
var Oe,
  ke,
  Ae,
  C = e(() => {
    (b(),
      x(),
      Te(),
      S(),
      (Oe = 1 / 0),
      (ke = de ? de.prototype : void 0),
      (Ae = ke ? ke.toString : void 0));
  });
function je(e) {
  return typeof e == `number` ? e : Se(e) ? Ne : +e;
}
function Me(e, t) {
  return function (n, r) {
    var i;
    if (n === void 0 && r === void 0) return t;
    if ((n !== void 0 && (i = n), r !== void 0)) {
      if (i === void 0) return r;
      (typeof n == `string` || typeof r == `string`
        ? ((n = De(n)), (r = De(r)))
        : ((n = je(n)), (r = je(r))),
        (i = e(n, r)));
    }
    return i;
  };
}
var Ne,
  Pe = e(() => {
    (x(), C(), (Ne = NaN));
  }),
  Fe,
  Ie = e(() => {
    (y(),
      b(),
      x(),
      Pe(),
      S(),
      C(),
      (Fe = Me(function (e, t) {
        return e + t;
      }, 0)));
  });
function Le(e) {
  for (var t = e.length; t-- && Re.test(e.charAt(t)););
  return t;
}
var Re,
  ze = e(() => {
    Re = /\s/;
  });
function Be(e) {
  return e && e.slice(0, Le(e) + 1).replace(Ve, ``);
}
var Ve,
  He = e(() => {
    (ze(), (Ve = /^\s+/));
  });
function Ue(e) {
  var t = typeof e;
  return e != null && (t == `object` || t == `function`);
}
var We = e(() => {});
function Ge(e) {
  if (typeof e == `number`) return e;
  if (Se(e)) return Ke;
  if (Ue(e)) {
    var t = typeof e.valueOf == `function` ? e.valueOf() : e;
    e = Ue(t) ? t + `` : t;
  }
  if (typeof e != `string`) return e === 0 ? e : +e;
  e = Be(e);
  var n = Je.test(e);
  return n || Ye.test(e) ? Xe(e.slice(2), n ? 2 : 8) : qe.test(e) ? Ke : +e;
}
var Ke,
  qe,
  Je,
  Ye,
  Xe,
  w = e(() => {
    (y(),
      b(),
      x(),
      He(),
      We(),
      (Ke = NaN),
      (qe = /^[-+]0x[0-9a-f]+$/i),
      (Je = /^0b[01]+$/i),
      (Ye = /^0o[0-7]+$/i),
      (Xe = parseInt));
  });
function Ze(e) {
  return e
    ? ((e = Ge(e)), e === Qe || e === -Qe ? (e < 0 ? -1 : 1) * $e : e === e ? e : 0)
    : e === 0
      ? e
      : 0;
}
var Qe,
  $e,
  et = e(() => {
    (y(), b(), x(), w(), (Qe = 1 / 0), ($e = 17976931348623157e292));
  });
function tt(e) {
  var t = Ze(e),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
var nt = e(() => {
  (y(), b(), x(), w(), et());
});
function rt(e, t) {
  if (typeof t != `function`) throw TypeError(it);
  return (
    (e = tt(e)),
    function () {
      if (--e < 1) return t.apply(this, arguments);
    }
  );
}
var it,
  at = e(() => {
    (y(), b(), x(), w(), et(), nt(), (it = `Expected a function`));
  });
function ot(e) {
  return e;
}
var st = e(() => {});
function ct(e) {
  if (!Ue(e)) return !1;
  var t = ue(e);
  return t == ut || t == dt || t == lt || t == ft;
}
var lt,
  ut,
  dt,
  ft,
  T = e(() => {
    (y(),
      b(),
      We(),
      (lt = `[object AsyncFunction]`),
      (ut = `[object Function]`),
      (dt = `[object GeneratorFunction]`),
      (ft = `[object Proxy]`));
  });
function pt(e) {
  return !!_t && _t in e;
}
function mt(e) {
  if (e != null) {
    try {
      return vt.call(e);
    } catch {}
    try {
      return e + ``;
    } catch {}
  }
  return ``;
}
function ht(e) {
  return !Ue(e) || pt(e) ? !1 : (ct(e) ? Tt : bt).test(mt(e));
}
var gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  E = e(() => {
    (y(),
      We(),
      T(),
      (gt = se[`__core-js_shared__`]),
      (_t = (function () {
        var e = /[^.]+$/.exec((gt && gt.keys && gt.keys.IE_PROTO) || ``);
        return e ? `Symbol(src)_1.` + e : ``;
      })()),
      (vt = Function.prototype.toString),
      (yt = /[\\^$.*+?()[\]{}|]/g),
      (bt = /^\[object .+?Constructor\]$/),
      (xt = Function.prototype),
      (St = Object.prototype),
      (Ct = xt.toString),
      (wt = St.hasOwnProperty),
      (Tt = RegExp(
        `^` +
          Ct.call(wt)
            .replace(yt, `\\$&`)
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) +
          `$`
      )));
  });
function Et(e, t) {
  return e?.[t];
}
function Dt(e, t) {
  var n = Et(e, t);
  return ht(n) ? n : void 0;
}
var D = e(() => {
    E();
  }),
  Ot,
  O = e(() => {
    (y(), D(), (Ot = Dt(se, `WeakMap`)));
  }),
  kt,
  At,
  jt = e(() => {
    (We(),
      (kt = Object.create),
      (At = (function () {
        function e() {}
        return function (t) {
          if (!Ue(t)) return {};
          if (kt) return kt(t);
          e.prototype = t;
          var n = new e();
          return ((e.prototype = void 0), n);
        };
      })()));
  });
function Mt() {}
var Nt = e(() => {});
function Pt(e) {
  ((this.__wrapped__ = e),
    (this.__actions__ = []),
    (this.__dir__ = 1),
    (this.__filtered__ = !1),
    (this.__iteratees__ = []),
    (this.__takeCount__ = Ft),
    (this.__views__ = []));
}
var Ft,
  It = e(() => {
    (jt(),
      Nt(),
      (Ft = 4294967295),
      (Pt.prototype = At(Mt.prototype)),
      (Pt.prototype.constructor = Pt));
  });
function Lt() {}
var Rt = e(() => {});
function zt(e, t) {
  ((this.__wrapped__ = e),
    (this.__actions__ = []),
    (this.__chain__ = !!t),
    (this.__index__ = 0),
    (this.__values__ = void 0));
}
var Bt = e(() => {
  (jt(), Nt(), (zt.prototype = At(Mt.prototype)), (zt.prototype.constructor = zt));
});
function Vt(e, t) {
  var n = -1,
    r = e.length;
  for (t ||= Array(r); ++n < r;) t[n] = e[n];
  return t;
}
var Ht = e(() => {});
function Ut(e) {
  if (e instanceof Pt) return e.clone();
  var t = new zt(e.__wrapped__, e.__chain__);
  return (
    (t.__actions__ = Vt(e.__actions__)),
    (t.__index__ = e.__index__),
    (t.__values__ = e.__values__),
    t
  );
}
var Wt = e(() => {
  (It(), Bt(), Ht());
});
function k(e) {
  if (be(e) && !Ee(e) && !(e instanceof Pt)) {
    if (e instanceof zt) return e;
    if (Gt.call(e, `__wrapped__`)) return Ut(e);
  }
  return new zt(e);
}
var Gt,
  Kt = e(() => {
    (xe(),
      S(),
      Nt(),
      It(),
      Bt(),
      Wt(),
      (Gt = Object.prototype.hasOwnProperty),
      (k.prototype = Mt.prototype),
      (k.prototype.constructor = k));
  });
function qt(e) {
  for (var t = e.name + ``, n = Zt[t], r = Qt.call(Zt, t) ? n.length : 0; r--;) {
    var i = n[r],
      a = i.func;
    if (a == null || a == e) return i.name;
  }
  return t;
}
function Jt(e) {
  var t = qt(e),
    n = k[t];
  if (typeof n != `function` || !(t in Pt.prototype)) return !1;
  if (e === n) return !0;
  var r = Xt(n);
  return !!r && e === r[0];
}
var Yt,
  Xt,
  Zt,
  Qt,
  $t = e(() => {
    (O(),
      It(),
      Rt(),
      Kt(),
      (Yt = Ot && new Ot()),
      (Xt = Yt
        ? function (e) {
            return Yt.get(e);
          }
        : Lt),
      (Zt = {}),
      (Qt = Object.prototype.hasOwnProperty));
  });
function en(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var tn = e(() => {});
function nn(e) {
  return function () {
    return e;
  };
}
var rn = e(() => {}),
  an,
  A = e(() => {
    (D(),
      (an = (function () {
        try {
          var e = Dt(Object, `defineProperty`);
          return (e({}, ``, {}), e);
        } catch {}
      })()));
  });
function on(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = ln(),
      i = cn - (r - n);
    if (((n = r), i > 0)) {
      if (++t >= sn) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var sn,
  cn,
  ln,
  un,
  j = e(() => {
    (st(),
      rn(),
      A(),
      (sn = 800),
      (cn = 16),
      (ln = Date.now),
      (un = on(
        an
          ? function (e, t) {
              return an(e, `toString`, {
                configurable: !0,
                enumerable: !1,
                value: nn(t),
                writable: !0,
              });
            }
          : ot
      )));
  });
function dn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
  return e;
}
var fn = e(() => {});
function pn(e, t, n, r) {
  for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
  return -1;
}
var mn = e(() => {});
function hn(e) {
  return e !== e;
}
var gn = e(() => {});
function _n(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
  return -1;
}
function vn(e, t, n) {
  return t === t ? _n(e, t, n) : pn(e, hn, n);
}
var yn = e(() => {
  (mn(), gn());
});
function bn(e, t) {
  return !!(e != null && e.length) && vn(e, t, 0) > -1;
}
var xn = e(() => {
  yn();
});
function Sn(e, t) {
  var n = typeof e;
  return (
    (t ??= Cn),
    !!t && (n == `number` || (n != `symbol` && wn.test(e))) && e > -1 && e % 1 == 0 && e < t
  );
}
var Cn,
  wn,
  Tn = e(() => {
    ((Cn = 9007199254740991), (wn = /^(?:0|[1-9]\d*)$/));
  });
function En(e) {
  return function () {
    var t = arguments;
    switch (t.length) {
      case 0:
        return new e();
      case 1:
        return new e(t[0]);
      case 2:
        return new e(t[0], t[1]);
      case 3:
        return new e(t[0], t[1], t[2]);
      case 4:
        return new e(t[0], t[1], t[2], t[3]);
      case 5:
        return new e(t[0], t[1], t[2], t[3], t[4]);
      case 6:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
      case 7:
        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
    }
    var n = At(e.prototype),
      r = e.apply(n, t);
    return Ue(r) ? r : n;
  };
}
function Dn(e, t, n) {
  var r = t & Gn,
    i = En(e);
  function a() {
    return (this && this !== se && this instanceof a ? i : e).apply(r ? n : this, arguments);
  }
  return a;
}
function On(e, t, n, r) {
  for (
    var i = -1,
      a = e.length,
      o = n.length,
      s = -1,
      c = t.length,
      l = Kn(a - o, 0),
      u = Array(c + l),
      d = !r;
    ++s < c;
  )
    u[s] = t[s];
  for (; ++i < o;) (d || i < a) && (u[n[i]] = e[i]);
  for (; l--;) u[s++] = e[i++];
  return u;
}
function kn(e, t, n, r) {
  for (
    var i = -1,
      a = e.length,
      o = -1,
      s = n.length,
      c = -1,
      l = t.length,
      u = qn(a - s, 0),
      d = Array(u + l),
      f = !r;
    ++i < u;
  )
    d[i] = e[i];
  for (var p = i; ++c < l;) d[p + c] = t[c];
  for (; ++o < s;) (f || i < a) && (d[p + n[o]] = e[i++]);
  return d;
}
function An(e, t) {
  for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
  return r;
}
function jn(e) {
  var t = e.match(Yn);
  return t ? t[1].split(Xn) : [];
}
function Mn(e, t) {
  var n = t.length;
  if (!n) return e;
  var r = n - 1;
  return (
    (t[r] = (n > 1 ? `& ` : ``) + t[r]),
    (t = t.join(n > 2 ? `, ` : ` `)),
    e.replace(
      Zn,
      `{
/* [wrapped with ` +
        t +
        `] */
`
    )
  );
}
function Nn(e, t) {
  return (
    dn(Qn, function (n) {
      var r = `_.` + n[0];
      t & n[1] && !bn(e, r) && e.push(r);
    }),
    e.sort()
  );
}
function Pn(e, t, n) {
  var r = t + ``;
  return un(e, Mn(r, Nn(jn(r), n)));
}
function Fn(e, t, n, r, i, a, o, s, c, l) {
  var u = t & nr,
    d = u ? o : void 0,
    f = u ? void 0 : o,
    p = u ? a : void 0,
    ee = u ? void 0 : a;
  ((t |= u ? rr : ir), (t &= ~(u ? ir : rr)), t & tr || (t &= ~($n | er)));
  var m = [e, t, i, p, d, ee, f, s, c, l],
    h = n.apply(void 0, m);
  return (Jt(e) && Jn(h, m), (h.placeholder = r), Pn(h, e, t));
}
function In(e) {
  return e.placeholder;
}
function Ln(e, t) {
  for (var n = e.length, r = ar(t.length, n), i = Vt(e); r--;) {
    var a = t[r];
    e[r] = Sn(a, n) ? i[a] : void 0;
  }
  return e;
}
function Rn(e, t) {
  for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
    var o = e[n];
    (o === t || o === or) && ((e[n] = or), (a[i++] = n));
  }
  return a;
}
function zn(e, t, n, r, i, a, o, s, c, l) {
  var u = t & dr,
    d = t & sr,
    f = t & cr,
    p = t & (lr | ur),
    ee = t & fr,
    m = f ? void 0 : En(e);
  function h() {
    for (var g = arguments.length, te = Array(g), ne = g; ne--;) te[ne] = arguments[ne];
    if (p)
      var re = In(h),
        _ = An(te, re);
    if ((r && (te = On(te, r, i, p)), a && (te = kn(te, a, o, p)), (g -= _), p && g < l)) {
      var ie = Rn(te, re);
      return Fn(e, t, zn, h.placeholder, n, te, ie, s, c, l - g);
    }
    var v = d ? n : this,
      ae = f ? v[e] : e;
    return (
      (g = te.length),
      s ? (te = Ln(te, s)) : ee && g > 1 && te.reverse(),
      u && c < g && (te.length = c),
      this && this !== se && this instanceof h && (ae = m || En(ae)),
      ae.apply(v, te)
    );
  }
  return h;
}
function Bn(e, t, n) {
  var r = En(e);
  function i() {
    for (var a = arguments.length, o = Array(a), s = a, c = In(i); s--;) o[s] = arguments[s];
    var l = a < 3 && o[0] !== c && o[a - 1] !== c ? [] : Rn(o, c);
    return (
      (a -= l.length),
      a < n
        ? Fn(e, t, zn, i.placeholder, void 0, o, l, void 0, void 0, n - a)
        : en(this && this !== se && this instanceof i ? r : e, this, o)
    );
  }
  return i;
}
function Vn(e, t, n, r) {
  var i = t & pr,
    a = En(e);
  function o() {
    for (
      var t = -1,
        s = arguments.length,
        c = -1,
        l = r.length,
        u = Array(l + s),
        d = this && this !== se && this instanceof o ? a : e;
      ++c < l;
    )
      u[c] = r[c];
    for (; s--;) u[c++] = arguments[++t];
    return en(d, i ? n : this, u);
  }
  return o;
}
function Hn(e, t) {
  var n = e[1],
    r = t[1],
    i = n | r,
    a = i < (hr | gr | yr),
    o =
      (r == yr && n == vr) ||
      (r == yr && n == br && e[7].length <= t[8]) ||
      (r == (yr | br) && t[7].length <= t[8] && n == vr);
  if (!(a || o)) return e;
  r & hr && ((e[2] = t[2]), (i |= n & hr ? 0 : _r));
  var s = t[3];
  if (s) {
    var c = e[3];
    ((e[3] = c ? On(c, s, t[4]) : s), (e[4] = c ? Rn(e[3], mr) : t[4]));
  }
  return (
    (s = t[5]),
    s && ((c = e[5]), (e[5] = c ? kn(c, s, t[6]) : s), (e[6] = c ? Rn(e[5], mr) : t[6])),
    (s = t[7]),
    s && (e[7] = s),
    r & yr && (e[8] = e[8] == null ? t[8] : xr(e[8], t[8])),
    (e[9] ??= t[9]),
    (e[0] = t[0]),
    (e[1] = i),
    e
  );
}
function Un(e, t, n, r, i, a, o, s) {
  var c = t & wr;
  if (!c && typeof e != `function`) throw TypeError(Sr);
  var l = r ? r.length : 0;
  if (
    (l || ((t &= ~(Dr | Or)), (r = i = void 0)),
    (o = o === void 0 ? o : kr(tt(o), 0)),
    (s = s === void 0 ? s : tt(s)),
    (l -= i ? i.length : 0),
    t & Or)
  ) {
    var u = r,
      d = i;
    r = i = void 0;
  }
  var f = c ? void 0 : Xt(e),
    p = [e, t, n, r, i, u, d, a, o, s];
  if (
    (f && Hn(p, f),
    (e = p[0]),
    (t = p[1]),
    (n = p[2]),
    (r = p[3]),
    (i = p[4]),
    (s = p[9] = p[9] === void 0 ? (c ? 0 : e.length) : kr(p[9] - l, 0)),
    !s && t & (Tr | Er) && (t &= ~(Tr | Er)),
    t && t != Cr)
  )
    ee =
      t == Tr || t == Er
        ? Bn(e, t, s)
        : (t != Dr && t != (Cr | Dr)) || i.length
          ? zn.apply(void 0, p)
          : Vn(e, t, n, r);
  else var ee = Dn(e, t, n);
  return Pn((f ? Wn : Jn)(ee, p), e, t);
}
var Wn,
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
  ir,
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
  Ar = e(() => {
    (y(),
      We(),
      nt(),
      st(),
      $t(),
      jt(),
      tn(),
      Ht(),
      j(),
      fn(),
      xn(),
      Tn(),
      (Wn = Yt
        ? function (e, t) {
            return (Yt.set(e, t), e);
          }
        : ot),
      (Gn = 1),
      (Kn = Math.max),
      (qn = Math.max),
      (Jn = on(Wn)),
      (Yn = /\{\n\/\* \[wrapped with (.+)\] \*/),
      (Xn = /,? & /),
      (Zn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/),
      (Qn = [
        [`ary`, 128],
        [`bind`, 1],
        [`bindKey`, 2],
        [`curry`, 8],
        [`curryRight`, 16],
        [`flip`, 512],
        [`partial`, 32],
        [`partialRight`, 64],
        [`rearg`, 256],
      ]),
      ($n = 1),
      (er = 2),
      (tr = 4),
      (nr = 8),
      (rr = 32),
      (ir = 64),
      (ar = Math.min),
      (or = `__lodash_placeholder__`),
      (sr = 1),
      (cr = 2),
      (lr = 8),
      (ur = 16),
      (dr = 128),
      (fr = 512),
      (pr = 1),
      (mr = `__lodash_placeholder__`),
      (hr = 1),
      (gr = 2),
      (_r = 4),
      (vr = 8),
      (yr = 128),
      (br = 256),
      (xr = Math.min),
      (Sr = `Expected a function`),
      (Cr = 1),
      (wr = 2),
      (Tr = 8),
      (Er = 16),
      (Dr = 32),
      (Or = 64),
      (kr = Math.max));
  });
function jr(e, t, n) {
  return (
    (t = n ? void 0 : t),
    (t = e && t == null ? e.length : t),
    Un(e, Mr, void 0, void 0, void 0, void 0, t)
  );
}
var Mr,
  Nr = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      (Mr = 128));
  });
function Pr(e, t, n) {
  t == `__proto__` && an
    ? an(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var Fr = e(() => {
  A();
});
function Ir(e, t) {
  return e === t || (e !== e && t !== t);
}
var Lr = e(() => {});
function Rr(e, t, n) {
  var r = e[t];
  (zr.call(e, t) && Ir(r, n) && (n !== void 0 || t in e)) || Pr(e, t, n);
}
var zr,
  Br = e(() => {
    (Fr(), Lr(), (zr = Object.prototype.hasOwnProperty));
  });
function Vr(e, t, n, r) {
  var i = !n;
  n ||= {};
  for (var a = -1, o = t.length; ++a < o;) {
    var s = t[a],
      c = r ? r(n[s], e[s], s, n, e) : void 0;
    (c === void 0 && (c = e[s]), i ? Pr(n, s, c) : Rr(n, s, c));
  }
  return n;
}
var Hr = e(() => {
  (Fr(), Br());
});
function Ur(e, t, n) {
  return (
    (t = Wr(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (var r = arguments, i = -1, a = Wr(r.length - t, 0), o = Array(a); ++i < a;)
        o[i] = r[t + i];
      i = -1;
      for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
      return ((s[t] = n(o)), en(e, this, s));
    }
  );
}
var Wr,
  Gr = e(() => {
    (tn(), (Wr = Math.max));
  });
function Kr(e, t) {
  return un(Ur(e, t, ot), e + ``);
}
var qr = e(() => {
  (y(), b(), st(), T(), E(), D(), j(), A(), Gr());
});
function Jr(e) {
  return typeof e == `number` && e > -1 && e % 1 == 0 && e <= Yr;
}
var Yr,
  Xr = e(() => {
    Yr = 9007199254740991;
  });
function Zr(e) {
  return e != null && Jr(e.length) && !ct(e);
}
var M = e(() => {
  (y(), b(), T(), Xr());
});
function Qr(e, t, n) {
  if (!Ue(n)) return !1;
  var r = typeof t;
  return !!(r == `number` ? Zr(n) && Sn(t, n.length) : r == `string` && t in n) && Ir(n[t], e);
}
var $r = e(() => {
  (We(), Tn(), Lr(), M());
});
function ei(e) {
  return Kr(function (t, n) {
    var r = -1,
      i = n.length,
      a = i > 1 ? n[i - 1] : void 0,
      o = i > 2 ? n[2] : void 0;
    for (
      a = e.length > 3 && typeof a == `function` ? (i--, a) : void 0,
        o && Qr(n[0], n[1], o) && ((a = i < 3 ? void 0 : a), (i = 1)),
        t = Object(t);
      ++r < i;
    ) {
      var s = n[r];
      s && e(t, s, r, a);
    }
    return t;
  });
}
var ti = e(() => {
  (qr(), $r());
});
function ni(e) {
  var t = e && e.constructor;
  return e === ((typeof t == `function` && t.prototype) || ri);
}
var ri,
  ii = e(() => {
    ri = Object.prototype;
  });
function ai(e, t) {
  for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
  return r;
}
var oi = e(() => {});
function si(e) {
  return be(e) && ue(e) == ci;
}
var ci,
  li,
  ui,
  di,
  fi,
  N = e(() => {
    (y(),
      b(),
      xe(),
      (ci = `[object Arguments]`),
      (li = Object.prototype),
      (ui = li.hasOwnProperty),
      (di = li.propertyIsEnumerable),
      (fi = si(
        (function () {
          return arguments;
        })()
      )
        ? si
        : function (e) {
            return be(e) && ui.call(e, `callee`) && !di.call(e, `callee`);
          }));
  });
function pi() {
  return !1;
}
var mi = e(() => {}),
  hi,
  gi,
  _i,
  vi,
  P = e(() => {
    (y(),
      mi(),
      (hi = typeof exports == `object` && exports && !exports.nodeType && exports),
      (gi = hi && typeof module == `object` && module && !module.nodeType && module),
      (_i = gi && gi.exports === hi ? se.Buffer : void 0),
      (vi = (_i ? _i.isBuffer : void 0) || pi));
  });
function yi(e) {
  return function (t) {
    return e(t);
  };
}
var bi = e(() => {}),
  xi,
  Si,
  Ci,
  wi,
  F = e(() => {
    (y(),
      (xi = typeof exports == `object` && exports && !exports.nodeType && exports),
      (Si = xi && typeof module == `object` && module && !module.nodeType && module),
      (Ci = Si && Si.exports === xi && ae.process),
      (wi = (function () {
        try {
          return (
            (Si && Si.require && Si.require(`util`).types) ||
            (Ci && Ci.binding && Ci.binding(`util`))
          );
        } catch {}
      })()));
  });
function Ti(e) {
  return be(e) && Jr(e.length) && !!Xi[ue(e)];
}
var Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
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
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  I = e(() => {
    (y(),
      b(),
      xe(),
      Xr(),
      bi(),
      F(),
      (Ei = `[object Arguments]`),
      (Di = `[object Array]`),
      (Oi = `[object Boolean]`),
      (ki = `[object Date]`),
      (Ai = `[object Error]`),
      (ji = `[object Function]`),
      (Mi = `[object Map]`),
      (Ni = `[object Number]`),
      (Pi = `[object Object]`),
      (Fi = `[object RegExp]`),
      (Ii = `[object Set]`),
      (Li = `[object String]`),
      (Ri = `[object WeakMap]`),
      (zi = `[object ArrayBuffer]`),
      (Bi = `[object DataView]`),
      (Vi = `[object Float32Array]`),
      (Hi = `[object Float64Array]`),
      (Ui = `[object Int8Array]`),
      (Wi = `[object Int16Array]`),
      (Gi = `[object Int32Array]`),
      (Ki = `[object Uint8Array]`),
      (qi = `[object Uint8ClampedArray]`),
      (Ji = `[object Uint16Array]`),
      (Yi = `[object Uint32Array]`),
      (Xi = {}),
      (Xi[Vi] = Xi[Hi] = Xi[Ui] = Xi[Wi] = Xi[Gi] = Xi[Ki] = Xi[qi] = Xi[Ji] = Xi[Yi] = !0),
      (Xi[Ei] =
        Xi[Di] =
        Xi[zi] =
        Xi[Oi] =
        Xi[Bi] =
        Xi[ki] =
        Xi[Ai] =
        Xi[ji] =
        Xi[Mi] =
        Xi[Ni] =
        Xi[Pi] =
        Xi[Fi] =
        Xi[Ii] =
        Xi[Li] =
        Xi[Ri] =
          !1),
      (Zi = wi && wi.isTypedArray),
      (Qi = Zi ? yi(Zi) : Ti));
  });
function $i(e, t) {
  var n = Ee(e),
    r = !n && fi(e),
    i = !n && !r && vi(e),
    a = !n && !r && !i && Qi(e),
    o = n || r || i || a,
    s = o ? ai(e.length, String) : [],
    c = s.length;
  for (var l in e)
    (!t && !ea.call(e, l)) ||
      (o &&
        (l == `length` ||
          (i && (l == `offset` || l == `parent`)) ||
          (a && (l == `buffer` || l == `byteLength` || l == `byteOffset`)) ||
          Sn(l, c))) ||
      s.push(l);
  return s;
}
var ea,
  L = e(() => {
    (S(), Tn(), oi(), N(), P(), I(), (ea = Object.prototype.hasOwnProperty));
  });
function ta(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var na = e(() => {});
function ra(e) {
  if (!ni(e)) return ia(e);
  var t = [];
  for (var n in Object(e)) aa.call(e, n) && n != `constructor` && t.push(n);
  return t;
}
var ia,
  aa,
  R = e(() => {
    (ii(), na(), (ia = ta(Object.keys, Object)), (aa = Object.prototype.hasOwnProperty));
  });
function oa(e) {
  return Zr(e) ? $i(e) : ra(e);
}
var z = e(() => {
    (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R());
  }),
  sa,
  ca,
  la = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      ii(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      (sa = Object.prototype.hasOwnProperty),
      (ca = ei(function (e, t) {
        if (ni(t) || Zr(t)) Vr(t, oa(t), e);
        else for (var n in t) sa.call(t, n) && Rr(e, n, t[n]);
      })));
  });
function ua(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
function da(e) {
  if (!Ue(e)) return ua(e);
  var t = ni(e),
    n = [];
  for (var r in e) (r == `constructor` && (t || !pa.call(e, r))) || n.push(r);
  return n;
}
function fa(e) {
  return Zr(e) ? $i(e, !0) : da(e);
}
var pa,
  ma = e(() => {
    (y(),
      b(),
      S(),
      We(),
      T(),
      M(),
      ii(),
      N(),
      P(),
      I(),
      F(),
      L(),
      (pa = Object.prototype.hasOwnProperty));
  }),
  ha,
  ga = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      (ha = ei(function (e, t) {
        Vr(t, fa(t), e);
      })));
  }),
  _a,
  va = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      (_a = ei(function (e, t, n, r) {
        Vr(t, fa(t), e, r);
      })));
  }),
  ya,
  ba = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      (ya = ei(function (e, t, n, r) {
        Vr(t, oa(t), e, r);
      })));
  }),
  xa,
  B = e(() => {
    (y(), D(), (xa = Dt(se, `Map`)));
  });
function Sa() {
  ((this.__data__ = Ua ? Ua(null) : {}), (this.size = 0));
}
function Ca(e) {
  var t = this.has(e) && delete this.__data__[e];
  return ((this.size -= +!!t), t);
}
function wa(e) {
  var t = this.__data__;
  if (Ua) {
    var n = t[e];
    return n === Wa ? void 0 : n;
  }
  return Ga.call(t, e) ? t[e] : void 0;
}
function Ta(e) {
  var t = this.__data__;
  return Ua ? t[e] !== void 0 : Ka.call(t, e);
}
function Ea(e, t) {
  var n = this.__data__;
  return ((this.size += +!this.has(e)), (n[e] = Ua && t === void 0 ? qa : t), this);
}
function Da(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function Oa() {
  ((this.__data__ = []), (this.size = 0));
}
function ka(e, t) {
  for (var n = e.length; n--;) if (Ir(e[n][0], t)) return n;
  return -1;
}
function Aa(e) {
  var t = this.__data__,
    n = ka(t, e);
  return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Ja.call(t, n, 1), --this.size, !0);
}
function ja(e) {
  var t = this.__data__,
    n = ka(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ma(e) {
  return ka(this.__data__, e) > -1;
}
function Na(e, t) {
  var n = this.__data__,
    r = ka(n, e);
  return (r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this);
}
function Pa(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function Fa() {
  ((this.size = 0), (this.__data__ = { hash: new Da(), map: new (xa || Pa)(), string: new Da() }));
}
function Ia(e) {
  var t = typeof e;
  return t == `string` || t == `number` || t == `symbol` || t == `boolean`
    ? e !== `__proto__`
    : e === null;
}
function La(e, t) {
  var n = e.__data__;
  return Ia(t) ? n[typeof t == `string` ? `string` : `hash`] : n.map;
}
function Ra(e) {
  var t = La(this, e).delete(e);
  return ((this.size -= +!!t), t);
}
function za(e) {
  return La(this, e).get(e);
}
function Ba(e) {
  return La(this, e).has(e);
}
function Va(e, t) {
  var n = La(this, e),
    r = n.size;
  return (n.set(e, t), (this.size += n.size == r ? 0 : 1), this);
}
function Ha(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
var Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  V = e(() => {
    (D(),
      Lr(),
      B(),
      (Ua = Dt(Object, `create`)),
      (Wa = `__lodash_hash_undefined__`),
      (Ga = Object.prototype.hasOwnProperty),
      (Ka = Object.prototype.hasOwnProperty),
      (qa = `__lodash_hash_undefined__`),
      (Da.prototype.clear = Sa),
      (Da.prototype.delete = Ca),
      (Da.prototype.get = wa),
      (Da.prototype.has = Ta),
      (Da.prototype.set = Ea),
      (Ja = Array.prototype.splice),
      (Pa.prototype.clear = Oa),
      (Pa.prototype.delete = Aa),
      (Pa.prototype.get = ja),
      (Pa.prototype.has = Ma),
      (Pa.prototype.set = Na),
      (Ha.prototype.clear = Fa),
      (Ha.prototype.delete = Ra),
      (Ha.prototype.get = za),
      (Ha.prototype.has = Ba),
      (Ha.prototype.set = Va));
  });
function Ya(e, t) {
  if (typeof e != `function` || (t != null && typeof t != `function`)) throw TypeError(Xa);
  var n = function () {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, r);
    return ((n.cache = a.set(i, o) || a), o);
  };
  return ((n.cache = new (Ya.Cache || Ha)()), n);
}
var Xa,
  H = e(() => {
    (y(), b(), T(), E(), D(), V(), B(), (Xa = `Expected a function`), (Ya.Cache = Ha));
  });
function Za(e) {
  var t = Ya(e, function (e) {
      return (n.size === Qa && n.clear(), e);
    }),
    n = t.cache;
  return t;
}
var Qa,
  $a,
  eo,
  to,
  U = e(() => {
    (H(),
      (Qa = 500),
      ($a =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g),
      (eo = /\\(\\)?/g),
      (to = Za(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(``),
          e.replace($a, function (e, n, r, i) {
            t.push(r ? i.replace(eo, `$1`) : n || e);
          }),
          t
        );
      })));
  });
function no(e) {
  return e == null ? `` : De(e);
}
var W = e(() => {
  (y(), b(), x(), S(), C());
});
function ro(e, t) {
  if (Ee(e)) return !1;
  var n = typeof e;
  return (
    !(n != `number` && n != `symbol` && n != `boolean` && e != null && !Se(e)) ||
    oo.test(e) ||
    !ao.test(e) ||
    (t != null && e in Object(t))
  );
}
function io(e, t) {
  return Ee(e) ? e : ro(e, t) ? [e] : to(no(e));
}
var ao,
  oo,
  G = e(() => {
    (x(), S(), U(), W(), (ao = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/), (oo = /^\w*$/));
  });
function so(e) {
  if (typeof e == `string` || Se(e)) return e;
  var t = e + ``;
  return t == `0` && 1 / e == -co ? `-0` : t;
}
var co,
  K = e(() => {
    (x(), (co = 1 / 0));
  });
function lo(e, t) {
  t = io(t, e);
  for (var n = 0, r = t.length; e != null && n < r;) e = e[so(t[n++])];
  return n && n == r ? e : void 0;
}
var q = e(() => {
  (G(), K());
});
function J(e, t, n) {
  var r = e == null ? void 0 : lo(e, t);
  return r === void 0 ? n : r;
}
var uo = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), G(), V(), B(), H(), U(), W(), K(), q());
});
function fo(e, t) {
  for (var n = -1, r = t.length, i = Array(r), a = e == null; ++n < r;)
    i[n] = a ? void 0 : J(e, t[n]);
  return i;
}
var po = e(() => {
  uo();
});
function mo(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
  return e;
}
var ho = e(() => {});
function go(e) {
  return Ee(e) || fi(e) || !!(vo && e && e[vo]);
}
function _o(e, t, n, r, i) {
  var a = -1,
    o = e.length;
  for (n ||= go, i ||= []; ++a < o;) {
    var s = e[a];
    t > 0 && n(s) ? (t > 1 ? _o(s, t - 1, n, r, i) : mo(i, s)) : r || (i[i.length] = s);
  }
  return i;
}
var vo,
  yo = e(() => {
    (b(), S(), N(), ho(), (vo = de ? de.isConcatSpreadable : void 0));
  });
function bo(e) {
  return e != null && e.length ? _o(e, 1) : [];
}
var xo = e(() => {
  (y(), b(), S(), N(), yo());
});
function So(e) {
  return un(Ur(e, void 0, bo), e + ``);
}
var Co = e(() => {
    (j(), Gr(), xo());
  }),
  wo,
  To = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      N(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      po(),
      yo(),
      xo(),
      Co(),
      (wo = So(fo)));
  }),
  Eo,
  Do = e(() => {
    (na(), (Eo = ta(Object.getPrototypeOf, Object)));
  });
function Oo(e) {
  if (!be(e) || ue(e) != ko) return !1;
  var t = Eo(e);
  if (t === null) return !0;
  var n = No.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n instanceof n && Mo.call(n) == Po;
}
var ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo = e(() => {
    (y(),
      b(),
      xe(),
      Do(),
      (ko = `[object Object]`),
      (Ao = Function.prototype),
      (jo = Object.prototype),
      (Mo = Ao.toString),
      (No = jo.hasOwnProperty),
      (Po = Mo.call(Object)));
  });
function Io(e) {
  if (!be(e)) return !1;
  var t = ue(e);
  return (
    t == Ro || t == Lo || (typeof e.message == `string` && typeof e.name == `string` && !Oo(e))
  );
}
var Lo,
  Ro,
  zo = e(() => {
    (y(), b(), xe(), Do(), Fo(), (Lo = `[object DOMException]`), (Ro = `[object Error]`));
  }),
  Bo,
  Vo = e(() => {
    (y(),
      b(),
      T(),
      E(),
      D(),
      tn(),
      j(),
      A(),
      qr(),
      Do(),
      Fo(),
      zo(),
      (Bo = Kr(function (e, t) {
        try {
          return en(e, void 0, t);
        } catch (e) {
          return Io(e) ? e : Error(e);
        }
      })));
  });
function Ho(e, t) {
  var n;
  if (typeof t != `function`) throw TypeError(Uo);
  return (
    (e = tt(e)),
    function () {
      return (--e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n);
    }
  );
}
var Uo,
  Wo = e(() => {
    (y(), b(), x(), w(), et(), nt(), (Uo = `Expected a function`));
  }),
  Go,
  Ko,
  qo,
  Jo = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      qr(),
      (Go = 1),
      (Ko = 32),
      (qo = Kr(function (e, t, n) {
        var r = Go;
        if (n.length) {
          var i = Rn(n, In(qo));
          r |= Ko;
        }
        return Un(e, r, t, n, i);
      })),
      (qo.placeholder = {}));
  }),
  Yo,
  Xo = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      fn(),
      Fr(),
      qr(),
      N(),
      K(),
      yo(),
      xo(),
      Co(),
      Jo(),
      (Yo = So(function (e, t) {
        return (
          dn(t, function (t) {
            ((t = so(t)), Pr(e, t, qo(e[t], e)));
          }),
          e
        );
      })));
  }),
  Zo,
  Qo,
  $o,
  es,
  ts = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      qr(),
      (Zo = 1),
      (Qo = 2),
      ($o = 32),
      (es = Kr(function (e, t, n) {
        var r = Zo | Qo;
        if (n.length) {
          var i = Rn(n, In(es));
          r |= $o;
        }
        return Un(t, r, e, n, i);
      })),
      (es.placeholder = {}));
  });
function ns(e, t, n) {
  var r = -1,
    i = e.length;
  (t < 0 && (t = -t > i ? 0 : i + t),
    (n = n > i ? i : n),
    n < 0 && (n += i),
    (i = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0));
  for (var a = Array(i); ++r < i;) a[r] = e[r + t];
  return a;
}
var rs = e(() => {});
function is(e, t, n) {
  var r = e.length;
  return ((n = n === void 0 ? r : n), !t && n >= r ? e : ns(e, t, n));
}
var as = e(() => {
  rs();
});
function os(e) {
  return ss.test(e);
}
var ss,
  cs = e(() => {
    ss = RegExp(
      `[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`
    );
  });
function ls(e) {
  return e.split(``);
}
function us(e) {
  return e.match(Os) || [];
}
function ds(e) {
  return os(e) ? us(e) : ls(e);
}
var fs,
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
  ks = e(() => {
    (cs(),
      (fs = `\\ud800-\\udfff`),
      (ps = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`),
      (ms = `\\ufe0e\\ufe0f`),
      (hs = `[` + fs + `]`),
      (gs = `[` + ps + `]`),
      (_s = `\\ud83c[\\udffb-\\udfff]`),
      (vs = `(?:` + gs + `|` + _s + `)`),
      (ys = `[^` + fs + `]`),
      (bs = `(?:\\ud83c[\\udde6-\\uddff]){2}`),
      (xs = `[\\ud800-\\udbff][\\udc00-\\udfff]`),
      (Ss = `\\u200d`),
      (Cs = vs + `?`),
      (ws = `[` + ms + `]?`),
      (Ts = `(?:` + Ss + `(?:` + [ys, bs, xs].join(`|`) + `)` + ws + Cs + `)*`),
      (Es = ws + Cs + Ts),
      (Ds = `(?:` + [ys + gs + `?`, gs, bs, xs, hs].join(`|`) + `)`),
      (Os = RegExp(_s + `(?=` + _s + `)|` + Ds + Es, `g`)));
  });
function As(e) {
  return function (t) {
    t = no(t);
    var n = os(t) ? ds(t) : void 0,
      r = n ? n[0] : t.charAt(0),
      i = n ? is(n, 1).join(``) : t.slice(1);
    return r[e]() + i;
  };
}
var js = e(() => {
    (W(), as(), cs(), ks());
  }),
  Ms,
  Ns = e(() => {
    (y(), b(), x(), S(), C(), W(), ks(), js(), (Ms = As(`toUpperCase`)));
  });
function Ps(e) {
  return Ms(no(e).toLowerCase());
}
var Fs = e(() => {
  (y(), b(), x(), S(), C(), W(), ks(), js(), Ns());
});
function Is(e, t, n, r) {
  var i = -1,
    a = e == null ? 0 : e.length;
  for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
  return n;
}
var Ls = e(() => {});
function Rs(e) {
  return function (t) {
    return e?.[t];
  };
}
var zs = e(() => {});
function Bs(e) {
  return ((e = no(e)), e && e.replace(Hs, Vs).replace(Us, ``));
}
var Vs,
  Hs,
  Us,
  Ws = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      zs(),
      (Vs = Rs({
        À: `A`,
        Á: `A`,
        Â: `A`,
        Ã: `A`,
        Ä: `A`,
        Å: `A`,
        à: `a`,
        á: `a`,
        â: `a`,
        ã: `a`,
        ä: `a`,
        å: `a`,
        Ç: `C`,
        ç: `c`,
        Ð: `D`,
        ð: `d`,
        È: `E`,
        É: `E`,
        Ê: `E`,
        Ë: `E`,
        è: `e`,
        é: `e`,
        ê: `e`,
        ë: `e`,
        Ì: `I`,
        Í: `I`,
        Î: `I`,
        Ï: `I`,
        ì: `i`,
        í: `i`,
        î: `i`,
        ï: `i`,
        Ñ: `N`,
        ñ: `n`,
        Ò: `O`,
        Ó: `O`,
        Ô: `O`,
        Õ: `O`,
        Ö: `O`,
        Ø: `O`,
        ò: `o`,
        ó: `o`,
        ô: `o`,
        õ: `o`,
        ö: `o`,
        ø: `o`,
        Ù: `U`,
        Ú: `U`,
        Û: `U`,
        Ü: `U`,
        ù: `u`,
        ú: `u`,
        û: `u`,
        ü: `u`,
        Ý: `Y`,
        ý: `y`,
        ÿ: `y`,
        Æ: `Ae`,
        æ: `ae`,
        Þ: `Th`,
        þ: `th`,
        ß: `ss`,
        Ā: `A`,
        Ă: `A`,
        Ą: `A`,
        ā: `a`,
        ă: `a`,
        ą: `a`,
        Ć: `C`,
        Ĉ: `C`,
        Ċ: `C`,
        Č: `C`,
        ć: `c`,
        ĉ: `c`,
        ċ: `c`,
        č: `c`,
        Ď: `D`,
        Đ: `D`,
        ď: `d`,
        đ: `d`,
        Ē: `E`,
        Ĕ: `E`,
        Ė: `E`,
        Ę: `E`,
        Ě: `E`,
        ē: `e`,
        ĕ: `e`,
        ė: `e`,
        ę: `e`,
        ě: `e`,
        Ĝ: `G`,
        Ğ: `G`,
        Ġ: `G`,
        Ģ: `G`,
        ĝ: `g`,
        ğ: `g`,
        ġ: `g`,
        ģ: `g`,
        Ĥ: `H`,
        Ħ: `H`,
        ĥ: `h`,
        ħ: `h`,
        Ĩ: `I`,
        Ī: `I`,
        Ĭ: `I`,
        Į: `I`,
        İ: `I`,
        ĩ: `i`,
        ī: `i`,
        ĭ: `i`,
        į: `i`,
        ı: `i`,
        Ĵ: `J`,
        ĵ: `j`,
        Ķ: `K`,
        ķ: `k`,
        ĸ: `k`,
        Ĺ: `L`,
        Ļ: `L`,
        Ľ: `L`,
        Ŀ: `L`,
        Ł: `L`,
        ĺ: `l`,
        ļ: `l`,
        ľ: `l`,
        ŀ: `l`,
        ł: `l`,
        Ń: `N`,
        Ņ: `N`,
        Ň: `N`,
        Ŋ: `N`,
        ń: `n`,
        ņ: `n`,
        ň: `n`,
        ŋ: `n`,
        Ō: `O`,
        Ŏ: `O`,
        Ő: `O`,
        ō: `o`,
        ŏ: `o`,
        ő: `o`,
        Ŕ: `R`,
        Ŗ: `R`,
        Ř: `R`,
        ŕ: `r`,
        ŗ: `r`,
        ř: `r`,
        Ś: `S`,
        Ŝ: `S`,
        Ş: `S`,
        Š: `S`,
        ś: `s`,
        ŝ: `s`,
        ş: `s`,
        š: `s`,
        Ţ: `T`,
        Ť: `T`,
        Ŧ: `T`,
        ţ: `t`,
        ť: `t`,
        ŧ: `t`,
        Ũ: `U`,
        Ū: `U`,
        Ŭ: `U`,
        Ů: `U`,
        Ű: `U`,
        Ų: `U`,
        ũ: `u`,
        ū: `u`,
        ŭ: `u`,
        ů: `u`,
        ű: `u`,
        ų: `u`,
        Ŵ: `W`,
        ŵ: `w`,
        Ŷ: `Y`,
        ŷ: `y`,
        Ÿ: `Y`,
        Ź: `Z`,
        Ż: `Z`,
        Ž: `Z`,
        ź: `z`,
        ż: `z`,
        ž: `z`,
        Ĳ: `IJ`,
        ĳ: `ij`,
        Œ: `Oe`,
        œ: `oe`,
        ŉ: `'n`,
        ſ: `s`,
      })),
      (Hs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g),
      (Us = RegExp(`[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]`, `g`)));
  });
function Gs(e) {
  return e.match(Ys) || [];
}
function Ks(e) {
  return Xs.test(e);
}
function qs(e) {
  return e.match(Mc) || [];
}
function Js(e, t, n) {
  return (
    (e = no(e)),
    (t = n ? void 0 : t),
    t === void 0 ? (Ks(e) ? qs(e) : Gs(e)) : e.match(t) || []
  );
}
var Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      (Ys = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g),
      (Xs = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/),
      (Zs = `\\ud800-\\udfff`),
      (Qs = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`),
      ($s = `\\u2700-\\u27bf`),
      (ec = `a-z\\xdf-\\xf6\\xf8-\\xff`),
      (tc = `\\xac\\xb1\\xd7\\xf7`),
      (nc = `\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`),
      (rc = `\\u2000-\\u206f`),
      (ic = ` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`),
      (ac = `A-Z\\xc0-\\xd6\\xd8-\\xde`),
      (oc = `\\ufe0e\\ufe0f`),
      (sc = tc + nc + rc + ic),
      (cc = `['’]`),
      (lc = `[` + sc + `]`),
      (uc = `[` + Qs + `]`),
      (dc = `\\d+`),
      (fc = `[` + $s + `]`),
      (pc = `[` + ec + `]`),
      (mc = `[^` + Zs + sc + dc + $s + ec + ac + `]`),
      (hc = `(?:` + uc + `|\\ud83c[\\udffb-\\udfff])`),
      (gc = `[^` + Zs + `]`),
      (_c = `(?:\\ud83c[\\udde6-\\uddff]){2}`),
      (vc = `[\\ud800-\\udbff][\\udc00-\\udfff]`),
      (yc = `[` + ac + `]`),
      (bc = `\\u200d`),
      (xc = `(?:` + pc + `|` + mc + `)`),
      (Sc = `(?:` + yc + `|` + mc + `)`),
      (Cc = `(?:` + cc + `(?:d|ll|m|re|s|t|ve))?`),
      (wc = `(?:` + cc + `(?:D|LL|M|RE|S|T|VE))?`),
      (Tc = hc + `?`),
      (Ec = `[` + oc + `]?`),
      (Dc = `(?:` + bc + `(?:` + [gc, _c, vc].join(`|`) + `)` + Ec + Tc + `)*`),
      (Oc = `\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`),
      (kc = `\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`),
      (Ac = Ec + Tc + Dc),
      (jc = `(?:` + [fc, _c, vc].join(`|`) + `)` + Ac),
      (Mc = RegExp(
        [
          yc + `?` + pc + `+` + Cc + `(?=` + [lc, yc, `$`].join(`|`) + `)`,
          Sc + `+` + wc + `(?=` + [lc, yc + xc, `$`].join(`|`) + `)`,
          yc + `?` + xc + `+` + Cc,
          yc + `+` + wc,
          kc,
          Oc,
          dc,
          jc,
        ].join(`|`),
        `g`
      )));
  });
function Pc(e) {
  return function (t) {
    return Is(Js(Bs(t).replace(Fc, ``)), e, ``);
  };
}
var Fc,
  Ic = e(() => {
    (Ls(), Ws(), Nc(), (Fc = RegExp(`['’]`, `g`)));
  }),
  Lc,
  Rc = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      ks(),
      js(),
      Ns(),
      Fs(),
      Ws(),
      Nc(),
      Ic(),
      (Lc = Pc(function (e, t, n) {
        return ((t = t.toLowerCase()), e + (n ? Ps(t) : t));
      })));
  });
function zc() {
  if (!arguments.length) return [];
  var e = arguments[0];
  return Ee(e) ? e : [e];
}
var Bc = e(() => {
  S();
});
function Vc(e) {
  var t = Math[e];
  return function (e, n) {
    if (((e = Ge(e)), (n = n == null ? 0 : Uc(tt(n), 292)), n && Hc(e))) {
      var r = (no(e) + `e`).split(`e`);
      return (
        (r = (no(t(r[0] + `e` + (+r[1] + n))) + `e`).split(`e`)),
        +(r[0] + `e` + (+r[1] - n))
      );
    }
    return t(e);
  };
}
var Hc,
  Uc,
  Wc = e(() => {
    (y(), w(), nt(), W(), (Hc = se.isFinite), (Uc = Math.min));
  }),
  Gc,
  Kc = e(() => {
    (y(), b(), x(), S(), C(), w(), et(), nt(), W(), Wc(), (Gc = Vc(`ceil`)));
  });
function qc(e) {
  var t = k(e);
  return ((t.__chain__ = !0), t);
}
var Jc = e(() => {
  (S(), It(), Bt(), Wt(), Kt());
});
function Yc(e, t, n) {
  t = (n ? Qr(e, t, n) : t === void 0) ? 1 : Zc(tt(t), 0);
  var r = e == null ? 0 : e.length;
  if (!r || t < 1) return [];
  for (var i = 0, a = 0, o = Array(Xc(r / t)); i < r;) o[a++] = ns(e, i, (i += t));
  return o;
}
var Xc,
  Zc,
  Qc = e(() => {
    (y(), b(), x(), w(), et(), nt(), T(), M(), $r(), rs(), (Xc = Math.ceil), (Zc = Math.max));
  });
function $c(e, t, n) {
  return (
    e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)),
    e
  );
}
var el = e(() => {});
function tl(e, t, n) {
  return (
    n === void 0 && ((n = t), (t = void 0)),
    n !== void 0 && ((n = Ge(n)), (n = n === n ? n : 0)),
    t !== void 0 && ((t = Ge(t)), (t = t === t ? t : 0)),
    $c(Ge(e), t, n)
  );
}
var nl = e(() => {
  (y(), b(), x(), w(), el());
});
function rl() {
  ((this.__data__ = new Pa()), (this.size = 0));
}
function il(e) {
  var t = this.__data__,
    n = t.delete(e);
  return ((this.size = t.size), n);
}
function al(e) {
  return this.__data__.get(e);
}
function ol(e) {
  return this.__data__.has(e);
}
function sl(e, t) {
  var n = this.__data__;
  if (n instanceof Pa) {
    var r = n.__data__;
    if (!xa || r.length < ll - 1) return (r.push([e, t]), (this.size = ++n.size), this);
    n = this.__data__ = new Ha(r);
  }
  return (n.set(e, t), (this.size = n.size), this);
}
function cl(e) {
  var t = (this.__data__ = new Pa(e));
  this.size = t.size;
}
var ll,
  ul,
  Y = e(() => {
    (y(),
      V(),
      B(),
      (ll = 200),
      (cl.prototype.clear = rl),
      (cl.prototype.delete = il),
      (cl.prototype.get = al),
      (cl.prototype.has = ol),
      (cl.prototype.set = sl),
      (ul = se.Uint8Array));
  });
function dl(e, t) {
  return e && Vr(t, oa(t), e);
}
var fl = e(() => {
  (Hr(), z());
});
function pl(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = bl ? bl(n) : new e.constructor(n);
  return (e.copy(r), r);
}
function ml(e) {
  var t = new e.constructor(e.byteLength);
  return (new ul(t).set(new ul(e)), t);
}
function hl(e, t) {
  var n = t ? ml(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function gl(e) {
  return typeof e.constructor != `function` || ni(e) ? {} : At(Eo(e));
}
var _l,
  vl,
  yl,
  bl,
  xl = e(() => {
    (y(),
      jt(),
      ii(),
      Do(),
      Y(),
      (_l = typeof exports == `object` && exports && !exports.nodeType && exports),
      (vl = _l && typeof module == `object` && module && !module.nodeType && module),
      (yl = vl && vl.exports === _l ? se.Buffer : void 0),
      (bl = yl ? yl.allocUnsafe : void 0));
  });
function Sl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
    var o = e[n];
    t(o, n, e) && (a[i++] = o);
  }
  return a;
}
var Cl = e(() => {});
function wl() {
  return [];
}
var Tl = e(() => {});
function El(e, t, n) {
  var r = t(e);
  return Ee(e) ? r : mo(r, n(e));
}
function Dl(e) {
  return El(e, oa, Al);
}
var Ol,
  kl,
  Al,
  X = e(() => {
    (S(),
      z(),
      ho(),
      Cl(),
      Tl(),
      (Ol = Object.prototype.propertyIsEnumerable),
      (kl = Object.getOwnPropertySymbols),
      (Al = kl
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Sl(kl(e), function (t) {
                  return Ol.call(e, t);
                }));
          }
        : wl));
  });
function jl(e) {
  return El(e, fa, Ml);
}
var Ml,
  Nl = e(() => {
    (ma(),
      ho(),
      Do(),
      Tl(),
      X(),
      (Ml = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e;) (mo(t, Al(e)), (e = Eo(e)));
            return t;
          }
        : wl));
  }),
  Pl,
  Z = e(() => {
    (y(), D(), (Pl = Dt(se, `Set`)));
  }),
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Q = e(() => {
    (y(),
      b(),
      E(),
      D(),
      O(),
      B(),
      Z(),
      (Fl = Dt(se, `DataView`)),
      (Il = Dt(se, `Promise`)),
      (Ll = `[object Map]`),
      (Rl = `[object Object]`),
      (zl = `[object Promise]`),
      (Bl = `[object Set]`),
      (Vl = `[object WeakMap]`),
      (Hl = `[object DataView]`),
      (Ul = mt(Fl)),
      (Wl = mt(xa)),
      (Gl = mt(Il)),
      (Kl = mt(Pl)),
      (ql = mt(Ot)),
      (Jl = ue),
      ((Fl && Jl(new Fl(new ArrayBuffer(1))) != Hl) ||
        (xa && Jl(new xa()) != Ll) ||
        (Il && Jl(Il.resolve()) != zl) ||
        (Pl && Jl(new Pl()) != Bl) ||
        (Ot && Jl(new Ot()) != Vl)) &&
        (Jl = function (e) {
          var t = ue(e),
            n = t == Rl ? e.constructor : void 0,
            r = n ? mt(n) : ``;
          if (r)
            switch (r) {
              case Ul:
                return Hl;
              case Wl:
                return Ll;
              case Gl:
                return zl;
              case Kl:
                return Bl;
              case ql:
                return Vl;
            }
          return t;
        }),
      (Yl = Jl));
  });
function Xl(e) {
  return be(e) && Yl(e) == Zl;
}
var Zl,
  Ql,
  $l,
  eu = e(() => {
    (y(),
      b(),
      xe(),
      T(),
      E(),
      D(),
      O(),
      bi(),
      F(),
      B(),
      Q(),
      Z(),
      (Zl = `[object Map]`),
      (Ql = wi && wi.isMap),
      ($l = Ql ? yi(Ql) : Xl));
  });
function tu(e) {
  return be(e) && Yl(e) == nu;
}
var nu,
  ru,
  iu,
  au = e(() => {
    (y(),
      b(),
      xe(),
      T(),
      E(),
      D(),
      O(),
      bi(),
      F(),
      B(),
      Q(),
      Z(),
      (nu = `[object Set]`),
      (ru = wi && wi.isSet),
      (iu = ru ? yi(ru) : tu));
  });
function ou(e, t) {
  return e && Vr(t, fa(t), e);
}
function su(e, t) {
  return Vr(e, Al(e), t);
}
function cu(e, t) {
  return Vr(e, Ml(e), t);
}
function lu(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == `string` &&
      hu.call(e, `index`) &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
function uu(e, t) {
  var n = t ? ml(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
function du(e) {
  var t = new e.constructor(e.source, gu.exec(e));
  return ((t.lastIndex = e.lastIndex), t);
}
function fu(e) {
  return vu ? Object(vu.call(e)) : {};
}
function pu(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Du:
      return ml(e);
    case yu:
    case bu:
      return new r(+e);
    case Ou:
      return uu(e, n);
    case ku:
    case Au:
    case ju:
    case Mu:
    case Nu:
    case Pu:
    case Fu:
    case Iu:
    case Lu:
      return hl(e, n);
    case xu:
      return new r();
    case Su:
    case Tu:
      return new r(e);
    case Cu:
      return du(e);
    case wu:
      return new r();
    case Eu:
      return fu(e);
  }
}
function mu(e, t, n, r, i, a) {
  var o,
    s = t & Ru,
    c = t & zu,
    l = t & Bu;
  if ((n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0)) return o;
  if (!Ue(e)) return e;
  var u = Ee(e);
  if (u) {
    if (((o = lu(e)), !s)) return Vt(e, o);
  } else {
    var d = Yl(e),
      f = d == Ku || d == qu;
    if (vi(e)) return pl(e, s);
    if (d == Xu || d == Vu || (f && !i)) {
      if (((o = c || f ? {} : gl(e)), !s)) return c ? cu(e, ou(o, e)) : su(e, dl(o, e));
    } else {
      if (!pd[d]) return i ? e : {};
      o = pu(e, d, s);
    }
  }
  a ||= new cl();
  var p = a.get(e);
  if (p) return p;
  (a.set(e, o),
    iu(e)
      ? e.forEach(function (r) {
          o.add(mu(r, t, n, r, e, a));
        })
      : $l(e) &&
        e.forEach(function (r, i) {
          o.set(i, mu(r, t, n, i, e, a));
        }));
  var ee = u ? void 0 : (l ? (c ? jl : Dl) : c ? fa : oa)(e);
  return (
    dn(ee || e, function (r, i) {
      (ee && ((i = r), (r = e[i])), Rr(o, i, mu(r, t, n, i, e, a)));
    }),
    o
  );
}
var hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md = e(() => {
    (y(),
      b(),
      S(),
      We(),
      T(),
      E(),
      D(),
      O(),
      Ht(),
      A(),
      fn(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      (hu = Object.prototype.hasOwnProperty),
      (gu = /\w*$/),
      (_u = de ? de.prototype : void 0),
      (vu = _u ? _u.valueOf : void 0),
      (yu = `[object Boolean]`),
      (bu = `[object Date]`),
      (xu = `[object Map]`),
      (Su = `[object Number]`),
      (Cu = `[object RegExp]`),
      (wu = `[object Set]`),
      (Tu = `[object String]`),
      (Eu = `[object Symbol]`),
      (Du = `[object ArrayBuffer]`),
      (Ou = `[object DataView]`),
      (ku = `[object Float32Array]`),
      (Au = `[object Float64Array]`),
      (ju = `[object Int8Array]`),
      (Mu = `[object Int16Array]`),
      (Nu = `[object Int32Array]`),
      (Pu = `[object Uint8Array]`),
      (Fu = `[object Uint8ClampedArray]`),
      (Iu = `[object Uint16Array]`),
      (Lu = `[object Uint32Array]`),
      (Ru = 1),
      (zu = 2),
      (Bu = 4),
      (Vu = `[object Arguments]`),
      (Hu = `[object Array]`),
      (Uu = `[object Boolean]`),
      (Wu = `[object Date]`),
      (Gu = `[object Error]`),
      (Ku = `[object Function]`),
      (qu = `[object GeneratorFunction]`),
      (Ju = `[object Map]`),
      (Yu = `[object Number]`),
      (Xu = `[object Object]`),
      (Zu = `[object RegExp]`),
      (Qu = `[object Set]`),
      ($u = `[object String]`),
      (ed = `[object Symbol]`),
      (td = `[object WeakMap]`),
      (nd = `[object ArrayBuffer]`),
      (rd = `[object DataView]`),
      (id = `[object Float32Array]`),
      (ad = `[object Float64Array]`),
      (od = `[object Int8Array]`),
      (sd = `[object Int16Array]`),
      (cd = `[object Int32Array]`),
      (ld = `[object Uint8Array]`),
      (ud = `[object Uint8ClampedArray]`),
      (dd = `[object Uint16Array]`),
      (fd = `[object Uint32Array]`),
      (pd = {}),
      (pd[Vu] =
        pd[Hu] =
        pd[nd] =
        pd[rd] =
        pd[Uu] =
        pd[Wu] =
        pd[id] =
        pd[ad] =
        pd[od] =
        pd[sd] =
        pd[cd] =
        pd[Ju] =
        pd[Yu] =
        pd[Xu] =
        pd[Zu] =
        pd[Qu] =
        pd[$u] =
        pd[ed] =
        pd[ld] =
        pd[ud] =
        pd[dd] =
        pd[fd] =
          !0),
      (pd[Gu] = pd[Ku] = pd[td] = !1));
  });
function hd(e) {
  return mu(e, gd);
}
var gd,
  _d = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      (gd = 4));
  });
function vd(e) {
  return mu(e, yd | bd);
}
var yd,
  bd,
  xd = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      (yd = 1),
      (bd = 4));
  });
function Sd(e, t) {
  return ((t = typeof t == `function` ? t : void 0), mu(e, Cd | wd, t));
}
var Cd,
  wd,
  Td = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      (Cd = 1),
      (wd = 4));
  });
function Ed(e, t) {
  return ((t = typeof t == `function` ? t : void 0), mu(e, Dd, t));
}
var Dd,
  Od = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      (Dd = 4));
  });
function kd() {
  return new zt(this.value(), this.__chain__);
}
var Ad = e(() => {
  Bt();
});
function jd(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
    var a = e[t];
    a && (i[r++] = a);
  }
  return i;
}
var Md = e(() => {});
function Nd() {
  var e = arguments.length;
  if (!e) return [];
  for (var t = Array(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
  return mo(Ee(n) ? Vt(n) : [n], _o(t, 1));
}
var Pd = e(() => {
  (y(), b(), S(), Ht(), N(), ho(), yo());
});
function Fd(e) {
  return (this.__data__.set(e, zd), this);
}
function Id(e) {
  return this.__data__.has(e);
}
function Ld(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new Ha(); ++t < n;) this.add(e[t]);
}
function Rd(e, t) {
  return e.has(t);
}
var zd,
  $ = e(() => {
    (V(),
      (zd = `__lodash_hash_undefined__`),
      (Ld.prototype.add = Ld.prototype.push = Fd),
      (Ld.prototype.has = Id));
  });
function Bd(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e, r) {
      n[++t] = [r, e];
    }),
    n
  );
}
var Vd = e(() => {});
function Hd(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e) {
      n[++t] = e;
    }),
    n
  );
}
var Ud = e(() => {});
function Wd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
  return !1;
}
function Gd(e, t, n, r, i, a) {
  var o = n & Xd,
    s = e.length,
    c = t.length;
  if (s != c && !(o && c > s)) return !1;
  var l = a.get(e),
    u = a.get(t);
  if (l && u) return l == t && u == e;
  var d = -1,
    f = !0,
    p = n & Zd ? new Ld() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < s;) {
    var ee = e[d],
      m = t[d];
    if (r) var h = o ? r(m, ee, d, t, e, a) : r(ee, m, d, e, t, a);
    if (h !== void 0) {
      if (h) continue;
      f = !1;
      break;
    }
    if (p) {
      if (
        !Wd(t, function (e, t) {
          if (!Rd(p, t) && (ee === e || i(ee, e, n, r, a))) return p.push(t);
        })
      ) {
        f = !1;
        break;
      }
    } else if (!(ee === m || i(ee, m, n, r, a))) {
      f = !1;
      break;
    }
  }
  return (a.delete(e), a.delete(t), f);
}
function Kd(e, t, n, r, i, a, o) {
  switch (n) {
    case df:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      ((e = e.buffer), (t = t.buffer));
    case uf:
      return !(e.byteLength != t.byteLength || !a(new ul(e), new ul(t)));
    case ef:
    case tf:
    case af:
      return Ir(+e, +t);
    case nf:
      return e.name == t.name && e.message == t.message;
    case of:
    case cf:
      return e == t + ``;
    case rf:
      var s = Bd;
    case sf:
      var c = r & Qd;
      if (((s ||= Hd), e.size != t.size && !c)) return !1;
      var l = o.get(e);
      if (l) return l == t;
      ((r |= $d), o.set(e, t));
      var u = Gd(s(e), s(t), r, i, a, o);
      return (o.delete(e), u);
    case lf:
      if (pf) return pf.call(e) == pf.call(t);
  }
  return !1;
}
function qd(e, t, n, r, i, a) {
  var o = n & mf,
    s = Dl(e),
    c = s.length;
  if (c != Dl(t).length && !o) return !1;
  for (var l = c; l--;) {
    var u = s[l];
    if (!(o ? u in t : hf.call(t, u))) return !1;
  }
  var d = a.get(e),
    f = a.get(t);
  if (d && f) return d == t && f == e;
  var p = !0;
  (a.set(e, t), a.set(t, e));
  for (var ee = o; ++l < c;) {
    u = s[l];
    var m = e[u],
      h = t[u];
    if (r) var g = o ? r(h, m, u, t, e, a) : r(m, h, u, e, t, a);
    if (!(g === void 0 ? m === h || i(m, h, n, r, a) : g)) {
      p = !1;
      break;
    }
    ee ||= u == `constructor`;
  }
  if (p && !ee) {
    var te = e.constructor,
      ne = t.constructor;
    te == ne ||
      !(`constructor` in e) ||
      !(`constructor` in t) ||
      (typeof te == `function` &&
        te instanceof te &&
        typeof ne == `function` &&
        ne instanceof ne) ||
      (p = !1);
  }
  return (a.delete(e), a.delete(t), p);
}
function Jd(e, t, n, r, i, a) {
  var o = Ee(e),
    s = Ee(t),
    c = o ? vf : Yl(e),
    l = s ? vf : Yl(t);
  ((c = c == _f ? yf : c), (l = l == _f ? yf : l));
  var u = c == yf,
    d = l == yf,
    f = c == l;
  if (f && vi(e)) {
    if (!vi(t)) return !1;
    ((o = !0), (u = !1));
  }
  if (f && !u)
    return ((a ||= new cl()), o || Qi(e) ? Gd(e, t, n, r, i, a) : Kd(e, t, c, n, r, i, a));
  if (!(n & gf)) {
    var p = u && bf.call(e, `__wrapped__`),
      ee = d && bf.call(t, `__wrapped__`);
    if (p || ee) {
      var m = p ? e.value() : e,
        h = ee ? t.value() : t;
      return ((a ||= new cl()), i(m, h, n, r, a));
    }
  }
  return f ? ((a ||= new cl()), qd(e, t, n, r, i, a)) : !1;
}
function Yd(e, t, n, r, i) {
  return (
    e === t ||
    (e == null || t == null || (!be(e) && !be(t)) ? e !== e && t !== t : Jd(e, t, n, r, Yd, i))
  );
}
var Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf = e(() => {
    (b(),
      xe(),
      S(),
      Lr(),
      P(),
      I(),
      Y(),
      X(),
      Q(),
      $(),
      Vd(),
      Ud(),
      (Xd = 1),
      (Zd = 2),
      (Qd = 1),
      ($d = 2),
      (ef = `[object Boolean]`),
      (tf = `[object Date]`),
      (nf = `[object Error]`),
      (rf = `[object Map]`),
      (af = `[object Number]`),
      (of = `[object RegExp]`),
      (sf = `[object Set]`),
      (cf = `[object String]`),
      (lf = `[object Symbol]`),
      (uf = `[object ArrayBuffer]`),
      (df = `[object DataView]`),
      (ff = de ? de.prototype : void 0),
      (pf = ff ? ff.valueOf : void 0),
      (mf = 1),
      (hf = Object.prototype.hasOwnProperty),
      (gf = 1),
      (_f = `[object Arguments]`),
      (vf = `[object Array]`),
      (yf = `[object Object]`),
      (bf = Object.prototype.hasOwnProperty));
  });
function Sf(e) {
  return e === e && !Ue(e);
}
var Cf = e(() => {
  We();
});
function wf(e, t, n, r) {
  var i = n.length,
    a = i,
    o = !r;
  if (e == null) return !a;
  for (e = Object(e); i--;) {
    var s = n[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++i < a;) {
    s = n[i];
    var c = s[0],
      l = e[c],
      u = s[1];
    if (o && s[2]) {
      if (l === void 0 && !(c in e)) return !1;
    } else {
      var d = new cl();
      if (r) var f = r(l, u, c, e, t, d);
      if (!(f === void 0 ? Yd(u, l, Ef | Df, r, d) : f)) return !1;
    }
  }
  return !0;
}
function Tf(e) {
  for (var t = oa(e), n = t.length; n--;) {
    var r = t[n],
      i = e[r];
    t[n] = [r, i, Sf(i)];
  }
  return t;
}
var Ef,
  Df,
  Of = e(() => {
    (z(), Y(), xf(), Cf(), (Ef = 1), (Df = 2));
  });
function kf(e, t) {
  return function (n) {
    return n != null && n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Af = e(() => {});
function jf(e) {
  var t = Tf(e);
  return t.length == 1 && t[0][2]
    ? kf(t[0][0], t[0][1])
    : function (n) {
        return n === e || wf(n, e, t);
      };
}
var Mf = e(() => {
  (Of(), Af());
});
function Nf(e, t, n) {
  t = io(t, e);
  for (var r = -1, i = t.length, a = !1; ++r < i;) {
    var o = so(t[r]);
    if (!(a = e != null && n(e, o))) break;
    e = e[o];
  }
  return a || ++r != i
    ? a
    : ((i = e == null ? 0 : e.length), !!i && Jr(i) && Sn(o, i) && (Ee(e) || fi(e)));
}
var Pf = e(() => {
  (S(), Tn(), Xr(), N(), G(), K());
});
function Ff(e, t) {
  return e != null && t in Object(e);
}
function If(e, t) {
  return e != null && Nf(e, t, Ff);
}
var Lf = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), N(), G(), V(), B(), H(), U(), W(), K(), Pf());
});
function Rf(e, t) {
  return ro(e) && Sf(t)
    ? kf(so(e), t)
    : function (n) {
        var r = J(n, e);
        return r === void 0 && r === t ? If(n, e) : Yd(t, r, zf | Bf);
      };
}
var zf,
  Bf,
  Vf = e(() => {
    (G(), K(), uo(), xf(), Cf(), Af(), Lf(), (zf = 1), (Bf = 2));
  });
function Hf(e) {
  return function (t) {
    return t?.[e];
  };
}
var Uf = e(() => {});
function Wf(e) {
  return function (t) {
    return lo(t, e);
  };
}
function Gf(e) {
  return ro(e) ? Hf(so(e)) : Wf(e);
}
var Kf = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), G(), V(), B(), H(), U(), W(), K(), q(), Uf());
});
function qf(e) {
  return typeof e == `function`
    ? e
    : e == null
      ? ot
      : typeof e == `object`
        ? Ee(e)
          ? Rf(e[0], e[1])
          : jf(e)
        : Gf(e);
}
var Jf = e(() => {
  (S(), st(), Mf(), Vf(), Kf());
});
function Yf(e) {
  var t = e == null ? 0 : e.length,
    n = qf;
  return (
    (e = t
      ? we(e, function (e) {
          if (typeof e[1] != `function`) throw TypeError(Xf);
          return [n(e[0]), e[1]];
        })
      : []),
    Kr(function (n) {
      for (var r = -1; ++r < t;) {
        var i = e[r];
        if (en(i[0], this, n)) return en(i[1], this, n);
      }
    })
  );
}
var Xf,
  Zf = e(() => {
    (y(),
      b(),
      x(),
      Te(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      tn(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      (Xf = `Expected a function`));
  });
function Qf(e, t, n) {
  var r = n.length;
  if (e == null) return !r;
  for (e = Object(e); r--;) {
    var i = n[r],
      a = t[i],
      o = e[i];
    if ((o === void 0 && !(i in e)) || !a(o)) return !1;
  }
  return !0;
}
var $f = e(() => {});
function ep(e) {
  var t = oa(e);
  return function (n) {
    return Qf(n, e, t);
  };
}
function tp(e) {
  return ep(mu(e, np));
}
var np,
  rp = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      $f(),
      (np = 1));
  });
function ip(e, t) {
  return t == null || Qf(e, t, oa(t));
}
var ap = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), $f());
});
function op(e) {
  return function (t, n, r) {
    for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
      var c = o[e ? s : ++i];
      if (!1 === n(a[c], c, a)) break;
    }
    return t;
  };
}
var sp = e(() => {}),
  cp,
  lp = e(() => {
    (sp(), (cp = op()));
  });
function up(e, t) {
  return e && cp(e, t, oa);
}
var dp = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), lp());
});
function fp(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!Zr(n)) return e(n, r);
    for (
      var i = n.length, a = t ? i : -1, o = Object(n);
      (t ? a-- : ++a < i) && !1 !== r(o[a], a, o);
    );
    return n;
  };
}
var pp = e(() => {
    M();
  }),
  mp,
  hp = e(() => {
    (dp(), pp(), (mp = fp(up)));
  });
function gp(e, t, n, r) {
  for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
    var o = e[i];
    t(r, o, n(o), e);
  }
  return r;
}
function _p(e, t, n, r) {
  return (
    mp(e, function (e, i, a) {
      t(r, e, n(e), a);
    }),
    r
  );
}
function vp(e, t) {
  return function (n, r) {
    var i = Ee(n) ? gp : _p,
      a = t ? t() : {};
    return i(n, e, qf(r, 2), a);
  };
}
var yp = e(() => {
    (S(), Jf(), hp());
  }),
  bp,
  xp,
  Sp = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      yp(),
      lp(),
      dp(),
      pp(),
      hp(),
      (bp = Object.prototype.hasOwnProperty),
      (xp = vp(function (e, t, n) {
        bp.call(e, n) ? ++e[n] : Pr(e, n, 1);
      })));
  });
function Cp(e, t) {
  var n = At(e);
  return t == null ? n : dl(n, t);
}
var wp = e(() => {
  (y(),
    b(),
    S(),
    T(),
    E(),
    D(),
    jt(),
    A(),
    Fr(),
    Br(),
    Hr(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    fl());
});
function Tp(e, t, n) {
  t = n ? void 0 : t;
  var r = Un(e, Ep, void 0, void 0, void 0, void 0, void 0, t);
  return ((r.placeholder = Tp.placeholder), r);
}
var Ep,
  Dp = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      (Ep = 8),
      (Tp.placeholder = {}));
  });
function Op(e, t, n) {
  t = n ? void 0 : t;
  var r = Un(e, kp, void 0, void 0, void 0, void 0, void 0, t);
  return ((r.placeholder = Op.placeholder), r);
}
var kp,
  Ap = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      (kp = 16),
      (Op.placeholder = {}));
  }),
  jp,
  Mp = e(() => {
    (y(),
      (jp = function () {
        return se.Date.now();
      }));
  });
function Np(e, t, n) {
  var r,
    i,
    a,
    o,
    s,
    c,
    l = 0,
    u = !1,
    d = !1,
    f = !0;
  if (typeof e != `function`) throw TypeError(Pp);
  ((t = Ge(t) || 0),
    Ue(n) &&
      ((u = !!n.leading),
      (d = `maxWait` in n),
      (a = d ? Fp(Ge(n.maxWait) || 0, t) : a),
      (f = `trailing` in n ? !!n.trailing : f)));
  function p(t) {
    var n = r,
      a = i;
    return ((r = i = void 0), (l = t), (o = e.apply(a, n)), o);
  }
  function ee(e) {
    return ((l = e), (s = setTimeout(g, t)), u ? p(e) : o);
  }
  function m(e) {
    var n = e - c,
      r = e - l,
      i = t - n;
    return d ? Ip(i, a - r) : i;
  }
  function h(e) {
    var n = e - c,
      r = e - l;
    return c === void 0 || n >= t || n < 0 || (d && r >= a);
  }
  function g() {
    var e = jp();
    if (h(e)) return te(e);
    s = setTimeout(g, m(e));
  }
  function te(e) {
    return ((s = void 0), f && r ? p(e) : ((r = i = void 0), o));
  }
  function ne() {
    (s !== void 0 && clearTimeout(s), (l = 0), (r = c = i = s = void 0));
  }
  function re() {
    return s === void 0 ? o : te(jp());
  }
  function _() {
    var e = jp(),
      n = h(e);
    if (((r = arguments), (i = this), (c = e), n)) {
      if (s === void 0) return ee(c);
      if (d) return (clearTimeout(s), (s = setTimeout(g, t)), p(c));
    }
    return (s === void 0 && (s = setTimeout(g, t)), o);
  }
  return ((_.cancel = ne), (_.flush = re), _);
}
var Pp,
  Fp,
  Ip,
  Lp = e(() => {
    (y(),
      b(),
      x(),
      We(),
      w(),
      Mp(),
      (Pp = `Expected a function`),
      (Fp = Math.max),
      (Ip = Math.min));
  });
function Rp(e, t) {
  return e == null || e !== e ? t : e;
}
var zp = e(() => {}),
  Bp,
  Vp,
  Hp,
  Up = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Lr(),
      qr(),
      M(),
      $r(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      (Bp = Object.prototype),
      (Vp = Bp.hasOwnProperty),
      (Hp = Kr(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          i = r > 2 ? t[2] : void 0;
        for (i && Qr(t[0], t[1], i) && (r = 1); ++n < r;)
          for (var a = t[n], o = fa(a), s = -1, c = o.length; ++s < c;) {
            var l = o[s],
              u = e[l];
            (u === void 0 || (Ir(u, Bp[l]) && !Vp.call(e, l))) && (e[l] = a[l]);
          }
        return e;
      })));
  });
function Wp(e) {
  return be(e) && Zr(e);
}
var Gp = e(() => {
  (y(), b(), xe(), T(), M());
});
function Kp(e) {
  return Vr(e, fa(e));
}
var qp = e(() => {
  (y(), b(), S(), T(), E(), D(), A(), Fr(), Br(), Hr(), M(), N(), P(), I(), F(), L(), ma());
});
function Jp(e, t, n) {
  ((n !== void 0 && !Ir(e[t], n)) || (n === void 0 && !(t in e))) && Pr(e, t, n);
}
function Yp(e, t) {
  if ((t !== `constructor` || typeof e[t] != `function`) && t != `__proto__`) return e[t];
}
function Xp(e, t, n, r, i, a, o) {
  var s = Yp(e, n),
    c = Yp(t, n),
    l = o.get(c);
  if (l) Jp(e, n, l);
  else {
    var u = a ? a(s, c, n + ``, e, t, o) : void 0,
      d = u === void 0;
    if (d) {
      var f = Ee(c),
        p = !f && vi(c),
        ee = !f && !p && Qi(c);
      ((u = c),
        f || p || ee
          ? Ee(s)
            ? (u = s)
            : Wp(s)
              ? (u = Vt(s))
              : p
                ? ((d = !1), (u = pl(c, !0)))
                : ee
                  ? ((d = !1), (u = hl(c, !0)))
                  : (u = [])
          : Oo(c) || fi(c)
            ? ((u = s), fi(s) ? (u = Kp(s)) : (Ue(s) && !ct(s)) || (u = gl(c)))
            : (d = !1));
    }
    (d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), Jp(e, n, u));
  }
}
function Zp(e, t, n, r, i) {
  e !== t &&
    cp(
      t,
      function (a, o) {
        if (((i ||= new cl()), Ue(a))) Xp(e, t, o, n, Zp, r, i);
        else {
          var s = r ? r(Yp(e, o), a, o + ``, e, t, i) : void 0;
          (s === void 0 && (s = a), Jp(e, o, s));
        }
      },
      fa
    );
}
var Qp = e(() => {
    (S(), We(), T(), Ht(), Fr(), Lr(), N(), P(), I(), ma(), Fo(), Y(), xl(), lp(), Gp(), qp());
  }),
  $p,
  em = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      V(),
      B(),
      Do(),
      Fo(),
      Y(),
      xl(),
      lp(),
      Qp(),
      Gp(),
      qp(),
      ($p = ei(function (e, t, n, r) {
        Zp(e, t, n, r);
      })));
  });
function tm(e, t, n, r, i, a) {
  return (Ue(e) && Ue(t) && (a.set(t, e), Zp(e, t, void 0, tm, a), a.delete(t)), e);
}
var nm,
  rm = e(() => {
    (y(),
      b(),
      S(),
      We(),
      T(),
      E(),
      D(),
      tn(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      V(),
      B(),
      Do(),
      Fo(),
      Y(),
      xl(),
      lp(),
      Qp(),
      Gp(),
      qp(),
      em(),
      (nm = Kr(function (e) {
        return (e.push(void 0, tm), en($p, void 0, e));
      })));
  });
function im(e, t, n) {
  if (typeof e != `function`) throw TypeError(am);
  return setTimeout(function () {
    e.apply(void 0, n);
  }, t);
}
var am,
  om = e(() => {
    am = `Expected a function`;
  }),
  sm,
  cm = e(() => {
    (y(),
      b(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      om(),
      (sm = Kr(function (e, t) {
        return im(e, 1, t);
      })));
  }),
  lm,
  um = e(() => {
    (y(),
      b(),
      x(),
      w(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      om(),
      (lm = Kr(function (e, t, n) {
        return im(e, Ge(t) || 0, n);
      })));
  });
function dm(e, t, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
  return !1;
}
var fm = e(() => {});
function pm(e, t, n, r) {
  var i = -1,
    a = bn,
    o = !0,
    s = e.length,
    c = [],
    l = t.length;
  if (!s) return c;
  (n && (t = we(t, yi(n))),
    r ? ((a = dm), (o = !1)) : t.length >= mm && ((a = Rd), (o = !1), (t = new Ld(t))));
  e: for (; ++i < s;) {
    var u = e[i],
      d = n == null ? u : n(u);
    if (((u = r || u !== 0 ? u : 0), o && d === d)) {
      for (var f = l; f--;) if (t[f] === d) continue e;
      c.push(u);
    } else a(t, d, r) || c.push(u);
  }
  return c;
}
var mm,
  hm = e(() => {
    (Te(), xn(), bi(), $(), fm(), (mm = 200));
  }),
  gm,
  _m = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      V(),
      B(),
      yo(),
      $(),
      Gp(),
      hm(),
      (gm = Kr(function (e, t) {
        return Wp(e) ? pm(e, _o(t, 1, Wp, !0)) : [];
      })));
  });
function vm(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var ym = e(() => {}),
  bm,
  xm = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      Gp(),
      hm(),
      ym(),
      (bm = Kr(function (e, t) {
        var n = vm(t);
        return (Wp(n) && (n = void 0), Wp(e) ? pm(e, _o(t, 1, Wp, !0), qf(n, 2)) : []);
      })));
  }),
  Sm,
  Cm = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      V(),
      B(),
      yo(),
      $(),
      Gp(),
      hm(),
      ym(),
      (Sm = Kr(function (e, t) {
        var n = vm(t);
        return (Wp(n) && (n = void 0), Wp(e) ? pm(e, _o(t, 1, Wp, !0), void 0, n) : []);
      })));
  }),
  wm,
  Tm = e(() => {
    (y(),
      b(),
      x(),
      Pe(),
      S(),
      C(),
      (wm = Me(function (e, t) {
        return e / t;
      }, 1)));
  });
function Em(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? ((t = n || t === void 0 ? 1 : tt(t)), ns(e, t < 0 ? 0 : t, r)) : [];
}
var Dm = e(() => {
  (y(), b(), x(), w(), et(), nt(), rs());
});
function Om(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? ((t = n || t === void 0 ? 1 : tt(t)), (t = r - t), ns(e, 0, t < 0 ? 0 : t)) : [];
}
var km = e(() => {
  (y(), b(), x(), w(), et(), nt(), rs());
});
function Am(e, t, n, r) {
  for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e););
  return n ? ns(e, r ? 0 : a, r ? a + 1 : i) : ns(e, r ? a + 1 : 0, r ? i : a);
}
var jm = e(() => {
  rs();
});
function Mm(e, t) {
  return e && e.length ? Am(e, qf(t, 3), !0, !0) : [];
}
var Nm = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    jm());
});
function Pm(e, t) {
  return e && e.length ? Am(e, qf(t, 3), !0) : [];
}
var Fm = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    jm());
});
function Im(e) {
  return typeof e == `function` ? e : ot;
}
var Lm = e(() => {
  st();
});
function Rm(e, t) {
  return (Ee(e) ? dn : mp)(e, Im(t));
}
var zm = e(() => {
    (y(),
      b(),
      S(),
      T(),
      fn(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      lp(),
      dp(),
      pp(),
      hp(),
      Lm());
  }),
  Bm = e(() => {
    (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), lp(), dp(), pp(), hp(), zm());
  }),
  Vm,
  Hm = e(() => {
    (sp(), (Vm = op(!0)));
  });
function Um(e, t) {
  return e && Vm(e, t, oa);
}
var Wm = e(() => {
    (z(), Hm());
  }),
  Gm,
  Km = e(() => {
    (pp(), Wm(), (Gm = fp(Um, !0)));
  });
function qm(e, t) {
  for (var n = e == null ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
  return e;
}
function Jm(e, t) {
  return (Ee(e) ? qm : Gm)(e, Im(t));
}
var Ym = e(() => {
    (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), pp(), Lm(), Hm(), Wm(), Km());
  }),
  Xm = e(() => {
    (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), pp(), Ym(), Hm(), Wm(), Km());
  });
function Zm(e, t, n) {
  ((e = no(e)), (t = De(t)));
  var r = e.length;
  n = n === void 0 ? r : $c(tt(n), 0, r);
  var i = n;
  return ((n -= t.length), n >= 0 && e.slice(n, i) == t);
}
var Qm = e(() => {
  (y(), b(), x(), S(), C(), w(), et(), nt(), W(), el());
});
function $m(e, t) {
  return we(t, function (t) {
    return [t, e[t]];
  });
}
function eh(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e) {
      n[++t] = [e, e];
    }),
    n
  );
}
function th(e) {
  return function (t) {
    var n = Yl(t);
    return n == nh ? Bd(t) : n == rh ? eh(t) : $m(t, e(t));
  };
}
var nh,
  rh,
  ih = e(() => {
    (Te(), Q(), Vd(), (nh = `[object Map]`), (rh = `[object Set]`));
  }),
  ah,
  oh = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      B(),
      Q(),
      Z(),
      ih(),
      (ah = th(oa)));
  }),
  sh = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      B(),
      Q(),
      Z(),
      ih(),
      oh());
  }),
  ch,
  lh = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      B(),
      Q(),
      Z(),
      ih(),
      (ch = th(fa)));
  }),
  uh = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      B(),
      Q(),
      Z(),
      ih(),
      lh());
  });
function dh(e) {
  return ((e = no(e)), e && mh.test(e) ? e.replace(ph, fh) : e);
}
var fh,
  ph,
  mh,
  hh = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      zs(),
      (fh = Rs({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })),
      (ph = /[&<>"']/g),
      (mh = RegExp(ph.source)));
  });
function gh(e) {
  return ((e = no(e)), e && vh.test(e) ? e.replace(_h, `\\$&`) : e);
}
var _h,
  vh,
  yh = e(() => {
    (y(), b(), x(), S(), C(), W(), (_h = /[\\^$.*+?()[\]{}|]/g), (vh = RegExp(_h.source)));
  });
function bh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
  return !0;
}
var xh = e(() => {});
function Sh(e, t) {
  var n = !0;
  return (
    mp(e, function (e, r, i) {
      return ((n = !!t(e, r, i)), n);
    }),
    n
  );
}
var Ch = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), lp(), dp(), pp(), hp());
});
function wh(e, t, n) {
  var r = Ee(e) ? bh : Sh;
  return (n && Qr(e, t, n) && (t = void 0), r(e, qf(t, 3)));
}
var Th = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      M(),
      $r(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      lp(),
      dp(),
      pp(),
      hp(),
      xh(),
      Ch());
  }),
  Eh = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      ga());
  }),
  Dh = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      va());
  });
function Oh(e) {
  return e ? $c(tt(e), 0, kh) : 0;
}
var kh,
  Ah = e(() => {
    (y(), b(), x(), w(), et(), nt(), el(), (kh = 4294967295));
  });
function jh(e, t, n, r) {
  var i = e.length;
  for (
    n = tt(n),
      n < 0 && (n = -n > i ? 0 : i + n),
      r = r === void 0 || r > i ? i : tt(r),
      r < 0 && (r += i),
      r = n > r ? 0 : Oh(r);
    n < r;
  )
    e[n++] = t;
  return e;
}
function Mh(e, t, n, r) {
  var i = e == null ? 0 : e.length;
  return i ? (n && typeof n != `number` && Qr(e, t, n) && ((n = 0), (r = i)), jh(e, t, n, r)) : [];
}
var Nh = e(() => {
  (y(), b(), x(), w(), et(), nt(), T(), M(), $r(), Ah());
});
function Ph(e, t) {
  var n = [];
  return (
    mp(e, function (e, r, i) {
      t(e, r, i) && n.push(e);
    }),
    n
  );
}
var Fh = e(() => {
  hp();
});
function Ih(e, t) {
  return (Ee(e) ? Sl : Ph)(e, qf(t, 3));
}
var Lh = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    Cl(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    Fh());
});
function Rh(e) {
  return function (t, n, r) {
    var i = Object(t);
    if (!Zr(t)) {
      var a = qf(n, 3);
      ((t = oa(t)),
        (n = function (e) {
          return a(i[e], e, i);
        }));
    }
    var o = e(t, n, r);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var zh = e(() => {
  (M(), z(), Jf());
});
function Bh(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r) return -1;
  var i = n == null ? 0 : tt(n);
  return (i < 0 && (i = Vh(r + i, 0)), pn(e, qf(t, 3), i));
}
var Vh,
  Hh = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      mn(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      (Vh = Math.max));
  }),
  Uh,
  Wh = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      zh(),
      Hh(),
      (Uh = Rh(Bh)));
  });
function Gh(e, t, n) {
  var r;
  return (
    n(e, function (e, n, i) {
      if (t(e, n, i)) return ((r = n), !1);
    }),
    r
  );
}
var Kh = e(() => {});
function qh(e, t) {
  return Gh(e, qf(t, 3), up);
}
var Jh = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    Kh());
});
function Yh(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r) return -1;
  var i = r - 1;
  return (
    n !== void 0 && ((i = tt(n)), (i = n < 0 ? Xh(r + i, 0) : Zh(i, r - 1))),
    pn(e, qf(t, 3), i, !0)
  );
}
var Xh,
  Zh,
  Qh = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      mn(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      (Xh = Math.max),
      (Zh = Math.min));
  }),
  $h,
  eg = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      zh(),
      Qh(),
      ($h = Rh(Yh)));
  });
function tg(e, t) {
  return Gh(e, qf(t, 3), Um);
}
var ng = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    Hm(),
    Wm(),
    Kh());
});
function rg(e) {
  return e && e.length ? e[0] : void 0;
}
var ig = e(() => {});
function ag(e, t) {
  var n = -1,
    r = Zr(e) ? Array(e.length) : [];
  return (
    mp(e, function (e, i, a) {
      r[++n] = t(e, i, a);
    }),
    r
  );
}
var og = e(() => {
  (M(), hp());
});
function sg(e, t) {
  return (Ee(e) ? we : ag)(e, qf(t, 3));
}
var cg = e(() => {
  (y(),
    b(),
    x(),
    Te(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    og());
});
function lg(e, t) {
  return _o(sg(e, t), 1);
}
var ug = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    yo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    og(),
    cg());
});
function dg(e, t) {
  return _o(sg(e, t), fg);
}
var fg,
  pg = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      lp(),
      dp(),
      pp(),
      hp(),
      og(),
      cg(),
      (fg = 1 / 0));
  });
function mg(e, t, n) {
  return ((n = n === void 0 ? 1 : tt(n)), _o(sg(e, t), n));
}
var hg = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    w(),
    et(),
    nt(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    yo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    og(),
    cg());
});
function gg(e) {
  return e != null && e.length ? _o(e, _g) : [];
}
var _g,
  vg = e(() => {
    (y(), b(), S(), N(), yo(), (_g = 1 / 0));
  });
function yg(e, t) {
  return e != null && e.length ? ((t = t === void 0 ? 1 : tt(t)), _o(e, t)) : [];
}
var bg = e(() => {
  (y(), b(), x(), S(), w(), et(), nt(), N(), yo());
});
function xg(e) {
  return Un(e, Sg);
}
var Sg,
  Cg = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      (Sg = 512));
  }),
  wg,
  Tg = e(() => {
    (y(), b(), x(), S(), C(), w(), et(), nt(), W(), Wc(), (wg = Vc(`floor`)));
  });
function Eg(e) {
  return So(function (t) {
    var n = t.length,
      r = n,
      i = zt.prototype.thru;
    for (e && t.reverse(); r--;) {
      var a = t[r];
      if (typeof a != `function`) throw TypeError(Dg);
      if (i && !o && qt(a) == `wrapper`) var o = new zt([], !0);
    }
    for (r = o ? r : n; ++r < n;) {
      a = t[r];
      var s = qt(a),
        c = s == `wrapper` ? Xt(a) : void 0;
      o =
        c && Jt(c[0]) && c[1] == (Ag | Og | kg | jg) && !c[4].length && c[9] == 1
          ? o[qt(c[0])].apply(o, c[3])
          : a.length == 1 && Jt(a)
            ? o[s]()
            : o.thru(a);
    }
    return function () {
      var e = arguments,
        r = e[0];
      if (o && e.length == 1 && Ee(r)) return o.plant(r).value();
      for (var i = 0, a = n ? t[i].apply(this, e) : r; ++i < n;) a = t[i].call(this, a);
      return a;
    };
  });
}
var Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg = e(() => {
    (S(),
      $t(),
      Bt(),
      Co(),
      (Dg = `Expected a function`),
      (Og = 8),
      (kg = 32),
      (Ag = 128),
      (jg = 256));
  }),
  Ng,
  Pg = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      N(),
      yo(),
      xo(),
      Co(),
      Mg(),
      (Ng = Eg()));
  }),
  Fg,
  Ig = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      N(),
      yo(),
      xo(),
      Co(),
      Mg(),
      (Fg = Eg(!0)));
  });
function Lg(e, t) {
  return e == null ? e : cp(e, Im(t), fa);
}
var Rg = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), ma(), lp(), Lm());
});
function zg(e, t) {
  return e == null ? e : Vm(e, Im(t), fa);
}
var Bg = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), ma(), Lm(), Hm());
});
function Vg(e, t) {
  return e && up(e, Im(t));
}
var Hg = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), lp(), dp(), Lm());
});
function Ug(e, t) {
  return e && Um(e, Im(t));
}
var Wg = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), Lm(), Hm(), Wm());
});
function Gg(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
    var i = e[t];
    r[i[0]] = i[1];
  }
  return r;
}
var Kg = e(() => {});
function qg(e, t) {
  return Sl(t, function (t) {
    return ct(e[t]);
  });
}
var Jg = e(() => {
  (T(), Cl());
});
function Yg(e) {
  return e == null ? [] : qg(e, oa(e));
}
var Xg = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), Jg());
});
function Zg(e) {
  return e == null ? [] : qg(e, fa(e));
}
var Qg = e(() => {
    (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), ma(), Jg());
  }),
  $g,
  e_,
  t_ = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      yp(),
      lp(),
      dp(),
      pp(),
      hp(),
      ($g = Object.prototype.hasOwnProperty),
      (e_ = vp(function (e, t, n) {
        $g.call(e, n) ? e[n].push(t) : Pr(e, n, [t]);
      })));
  });
function n_(e, t) {
  return e > t;
}
var r_ = e(() => {});
function i_(e) {
  return function (t, n) {
    return ((typeof t == `string` && typeof n == `string`) || ((t = Ge(t)), (n = Ge(n))), e(t, n));
  };
}
var a_ = e(() => {
    w();
  }),
  o_,
  s_ = e(() => {
    (y(), b(), x(), w(), r_(), a_(), (o_ = i_(n_)));
  }),
  c_,
  l_ = e(() => {
    (y(),
      b(),
      x(),
      w(),
      a_(),
      (c_ = i_(function (e, t) {
        return e >= t;
      })));
  });
function u_(e, t) {
  return e != null && d_.call(e, t);
}
var d_,
  f_ = e(() => {
    d_ = Object.prototype.hasOwnProperty;
  });
function p_(e, t) {
  return e != null && Nf(e, t, u_);
}
var m_ = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), N(), G(), V(), B(), H(), U(), W(), K(), Pf(), f_());
});
function h_(e, t, n) {
  return e >= v_(t, n) && e < __(t, n);
}
function g_(e, t, n) {
  return ((t = Ze(t)), n === void 0 ? ((n = t), (t = 0)) : (n = Ze(n)), (e = Ge(e)), h_(e, t, n));
}
var __,
  v_,
  y_ = e(() => {
    (y(), b(), x(), w(), et(), (__ = Math.max), (v_ = Math.min));
  });
function b_(e) {
  return typeof e == `string` || (!Ee(e) && be(e) && ue(e) == x_);
}
var x_,
  S_ = e(() => {
    (y(), b(), xe(), S(), (x_ = `[object String]`));
  });
function C_(e, t) {
  return we(t, function (t) {
    return e[t];
  });
}
var w_ = e(() => {
  Te();
});
function T_(e) {
  return e == null ? [] : C_(e, oa(e));
}
var E_ = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), w_());
});
function D_(e, t, n, r) {
  ((e = Zr(e) ? e : T_(e)), (n = n && !r ? tt(n) : 0));
  var i = e.length;
  return (
    n < 0 && (n = O_(i + n, 0)),
    b_(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && vn(e, t, n) > -1
  );
}
var O_,
  k_ = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      yn(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      S_(),
      E_(),
      (O_ = Math.max));
  });
function A_(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r) return -1;
  var i = n == null ? 0 : tt(n);
  return (i < 0 && (i = j_(r + i, 0)), vn(e, t, i));
}
var j_,
  M_ = e(() => {
    (y(), b(), x(), w(), et(), nt(), yn(), (j_ = Math.max));
  });
function N_(e) {
  return e != null && e.length ? ns(e, 0, -1) : [];
}
var P_ = e(() => {
  rs();
});
function F_(e, t, n) {
  for (
    var r = n ? dm : bn, i = e[0].length, a = e.length, o = a, s = Array(a), c = 1 / 0, l = [];
    o--;
  ) {
    var u = e[o];
    (o && t && (u = we(u, yi(t))),
      (c = L_(u.length, c)),
      (s[o] = !n && (t || (i >= 120 && u.length >= 120)) ? new Ld(o && u) : void 0));
  }
  u = e[0];
  var d = -1,
    f = s[0];
  r: for (; ++d < i && l.length < c;) {
    var p = u[d],
      ee = t ? t(p) : p;
    if (((p = n || p !== 0 ? p : 0), !(f ? Rd(f, ee) : r(l, ee, n)))) {
      for (o = a; --o;) {
        var m = s[o];
        if (!(m ? Rd(m, ee) : r(e[o], ee, n))) continue r;
      }
      (f && f.push(ee), l.push(p));
    }
  }
  return l;
}
function I_(e) {
  return Wp(e) ? e : [];
}
var L_,
  R_ = e(() => {
    (Te(), xn(), bi(), $(), Gp(), fm(), (L_ = Math.min));
  }),
  z_,
  B_ = e(() => {
    (y(),
      b(),
      Te(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      V(),
      B(),
      $(),
      Gp(),
      R_(),
      (z_ = Kr(function (e) {
        var t = we(e, I_);
        return t.length && t[0] === e[0] ? F_(t) : [];
      })));
  }),
  V_,
  H_ = e(() => {
    (y(),
      b(),
      x(),
      Te(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      Gp(),
      ym(),
      R_(),
      (V_ = Kr(function (e) {
        var t = vm(e),
          n = we(e, I_);
        return (
          t === vm(n) ? (t = void 0) : n.pop(),
          n.length && n[0] === e[0] ? F_(n, qf(t, 2)) : []
        );
      })));
  }),
  U_,
  W_ = e(() => {
    (y(),
      b(),
      Te(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      V(),
      B(),
      $(),
      Gp(),
      ym(),
      R_(),
      (U_ = Kr(function (e) {
        var t = vm(e),
          n = we(e, I_);
        return (
          (t = typeof t == `function` ? t : void 0),
          t && n.pop(),
          n.length && n[0] === e[0] ? F_(n, void 0, t) : []
        );
      })));
  });
function G_(e, t, n, r) {
  return (
    up(e, function (e, i, a) {
      t(r, n(e), i, a);
    }),
    r
  );
}
function K_(e, t) {
  return function (n, r) {
    return G_(n, e, t(r), {});
  };
}
var q_ = e(() => {
    dp();
  }),
  J_,
  Y_,
  X_ = e(() => {
    (y(),
      b(),
      S(),
      st(),
      T(),
      rn(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      lp(),
      dp(),
      q_(),
      (J_ = Object.prototype.toString),
      (Y_ = K_(function (e, t, n) {
        (t != null && typeof t.toString != `function` && (t = J_.call(t)), (e[t] = n));
      }, nn(ot))));
  }),
  Z_,
  Q_,
  $_,
  ev,
  tv = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      lp(),
      dp(),
      q_(),
      (Z_ = Object.prototype),
      (Q_ = Z_.hasOwnProperty),
      ($_ = Z_.toString),
      (ev = K_(function (e, t, n) {
        (t != null && typeof t.toString != `function` && (t = $_.call(t)),
          Q_.call(e, t) ? e[t].push(n) : (e[t] = [n]));
      }, qf)));
  });
function nv(e, t) {
  return t.length < 2 ? e : lo(e, ns(t, 0, -1));
}
var rv = e(() => {
  (q(), rs());
});
function iv(e, t, n) {
  ((t = io(t, e)), (e = nv(e, t)));
  var r = e == null ? e : e[so(vm(t))];
  return r == null ? void 0 : en(r, e, n);
}
var av = e(() => {
    (tn(), G(), K(), ym(), rv());
  }),
  ov,
  sv = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      rv(),
      av(),
      (ov = Kr(iv)));
  }),
  cv,
  lv = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      tn(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      lp(),
      dp(),
      pp(),
      hp(),
      rv(),
      av(),
      (cv = Kr(function (e, t, n) {
        var r = -1,
          i = typeof t == `function`,
          a = Zr(e) ? Array(e.length) : [];
        return (
          mp(e, function (e) {
            a[++r] = i ? en(t, e, n) : iv(e, t, n);
          }),
          a
        );
      })));
  });
function uv(e) {
  return be(e) && ue(e) == dv;
}
var dv,
  fv,
  pv,
  mv = e(() => {
    (y(),
      b(),
      xe(),
      bi(),
      F(),
      (dv = `[object ArrayBuffer]`),
      (fv = wi && wi.isArrayBuffer),
      (pv = fv ? yi(fv) : uv));
  });
function hv(e) {
  return !0 === e || !1 === e || (be(e) && ue(e) == gv);
}
var gv,
  _v = e(() => {
    (y(), b(), xe(), (gv = `[object Boolean]`));
  });
function vv(e) {
  return be(e) && ue(e) == yv;
}
var yv,
  bv,
  xv,
  Sv = e(() => {
    (y(),
      b(),
      xe(),
      bi(),
      F(),
      (yv = `[object Date]`),
      (bv = wi && wi.isDate),
      (xv = bv ? yi(bv) : vv));
  });
function Cv(e) {
  return be(e) && e.nodeType === 1 && !Oo(e);
}
var wv = e(() => {
  (y(), b(), xe(), Do(), Fo());
});
function Tv(e) {
  if (e == null) return !0;
  if (
    Zr(e) &&
    (Ee(e) || typeof e == `string` || typeof e.splice == `function` || vi(e) || Qi(e) || fi(e))
  )
    return !e.length;
  var t = Yl(e);
  if (t == Ev || t == Dv) return !e.size;
  if (ni(e)) return !ra(e).length;
  for (var n in e) if (Ov.call(e, n)) return !1;
  return !0;
}
var Ev,
  Dv,
  Ov,
  kv = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      M(),
      ii(),
      N(),
      P(),
      I(),
      F(),
      R(),
      B(),
      Q(),
      Z(),
      (Ev = `[object Map]`),
      (Dv = `[object Set]`),
      (Ov = Object.prototype.hasOwnProperty));
  });
function Av(e, t) {
  return Yd(e, t);
}
var jv = e(() => {
  (y(),
    b(),
    S(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    V(),
    B(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf());
});
function Mv(e, t, n) {
  n = typeof n == `function` ? n : void 0;
  var r = n ? n(e, t) : void 0;
  return r === void 0 ? Yd(e, t, void 0, n) : !!r;
}
var Nv = e(() => {
  (y(),
    b(),
    S(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    V(),
    B(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf());
});
function Pv(e) {
  return typeof e == `number` && Fv(e);
}
var Fv,
  Iv = e(() => {
    (y(), (Fv = se.isFinite));
  });
function Lv(e) {
  return typeof e == `number` && e == tt(e);
}
var Rv = e(() => {
  (y(), b(), x(), w(), et(), nt());
});
function zv(e, t) {
  return e === t || wf(e, t, Tf(t));
}
var Bv = e(() => {
  (y(),
    b(),
    S(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    V(),
    B(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of());
});
function Vv(e, t, n) {
  return ((n = typeof n == `function` ? n : void 0), wf(e, t, Tf(t), n));
}
var Hv = e(() => {
  (y(),
    b(),
    S(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    V(),
    B(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of());
});
function Uv(e) {
  return typeof e == `number` || (be(e) && ue(e) == Wv);
}
var Wv,
  Gv = e(() => {
    (y(), b(), xe(), (Wv = `[object Number]`));
  });
function Kv(e) {
  return Uv(e) && e != +e;
}
var qv = e(() => {
  (y(), b(), Gv());
});
function Jv(e) {
  if (Yv(e)) throw Error(Xv);
  return ht(e);
}
var Yv,
  Xv,
  Zv = e(() => {
    (y(),
      b(),
      T(),
      E(),
      mi(),
      (Yv = gt ? ct : pi),
      (Xv = `Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`));
  });
function Qv(e) {
  return e == null;
}
var $v = e(() => {});
function ey(e) {
  return e === null;
}
var ty = e(() => {});
function ny(e) {
  return be(e) && ue(e) == ry;
}
var ry,
  iy,
  ay,
  oy = e(() => {
    (y(),
      b(),
      xe(),
      bi(),
      F(),
      (ry = `[object RegExp]`),
      (iy = wi && wi.isRegExp),
      (ay = iy ? yi(iy) : ny));
  });
function sy(e) {
  return Lv(e) && e >= -cy && e <= cy;
}
var cy,
  ly = e(() => {
    (y(), b(), x(), w(), et(), nt(), Rv(), (cy = 9007199254740991));
  });
function uy(e) {
  return e === void 0;
}
var dy = e(() => {});
function fy(e) {
  return be(e) && Yl(e) == py;
}
var py,
  my = e(() => {
    (y(), b(), xe(), T(), E(), D(), O(), B(), Q(), Z(), (py = `[object WeakMap]`));
  });
function hy(e) {
  return be(e) && ue(e) == gy;
}
var gy,
  _y = e(() => {
    (y(), b(), xe(), (gy = `[object WeakSet]`));
  });
function vy(e) {
  return qf(typeof e == `function` ? e : mu(e, yy));
}
var yy,
  by = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      (yy = 1));
  });
function xy(e, t) {
  return e == null ? `` : Sy.call(e, t);
}
var Sy,
  Cy = e(() => {
    Sy = Array.prototype.join;
  }),
  wy,
  Ty = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      Ws(),
      Nc(),
      Ic(),
      (wy = Pc(function (e, t, n) {
        return e + (n ? `-` : ``) + t.toLowerCase();
      })));
  }),
  Ey,
  Dy = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      yp(),
      lp(),
      dp(),
      pp(),
      hp(),
      (Ey = vp(function (e, t, n) {
        Pr(e, n, t);
      })));
  });
function Oy(e, t, n) {
  for (var r = n + 1; r--;) if (e[r] === t) return r;
  return r;
}
function ky(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r) return -1;
  var i = r;
  return (
    n !== void 0 && ((i = tt(n)), (i = i < 0 ? Ay(r + i, 0) : jy(i, r - 1))),
    t === t ? Oy(e, t, i) : pn(e, hn, i, !0)
  );
}
var Ay,
  jy,
  My = e(() => {
    (y(), b(), x(), w(), et(), nt(), mn(), gn(), (Ay = Math.max), (jy = Math.min));
  }),
  Ny,
  Py = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      Ws(),
      Nc(),
      Ic(),
      (Ny = Pc(function (e, t, n) {
        return e + (n ? ` ` : ``) + t.toLowerCase();
      })));
  }),
  Fy,
  Iy = e(() => {
    (y(), b(), x(), S(), C(), W(), ks(), js(), (Fy = As(`toLowerCase`)));
  });
function Ly(e, t) {
  return e < t;
}
var Ry = e(() => {}),
  zy,
  By = e(() => {
    (y(), b(), x(), w(), a_(), Ry(), (zy = i_(Ly)));
  }),
  Vy,
  Hy = e(() => {
    (y(),
      b(),
      x(),
      w(),
      a_(),
      (Vy = i_(function (e, t) {
        return e <= t;
      })));
  });
function Uy(e, t) {
  var n = {};
  return (
    (t = qf(t, 3)),
    up(e, function (e, r, i) {
      Pr(n, t(e, r, i), e);
    }),
    n
  );
}
var Wy = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    A(),
    Fr(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp());
});
function Gy(e, t) {
  var n = {};
  return (
    (t = qf(t, 3)),
    up(e, function (e, r, i) {
      Pr(n, r, t(e, r, i));
    }),
    n
  );
}
var Ky = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    A(),
    Fr(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp());
});
function qy(e) {
  return jf(mu(e, Jy));
}
var Jy,
  Yy = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      V(),
      B(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      $(),
      xf(),
      Of(),
      Mf(),
      (Jy = 1));
  });
function Xy(e, t) {
  return Rf(e, mu(t, Zy));
}
var Zy,
  Qy = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Do(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      $(),
      xf(),
      Lf(),
      Pf(),
      Vf(),
      (Zy = 1));
  });
function $y(e, t, n) {
  for (var r = -1, i = e.length; ++r < i;) {
    var a = e[r],
      o = t(a);
    if (o != null && (s === void 0 ? o === o && !Se(o) : n(o, s)))
      var s = o,
        c = a;
  }
  return c;
}
var eb = e(() => {
  x();
});
function tb(e) {
  return e && e.length ? $y(e, ot, n_) : void 0;
}
var nb = e(() => {
  (y(), b(), x(), st(), r_(), eb());
});
function rb(e, t) {
  return e && e.length ? $y(e, qf(t, 2), n_) : void 0;
}
var ib = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    r_(),
    eb());
});
function ab(e, t) {
  for (var n, r = -1, i = e.length; ++r < i;) {
    var a = t(e[r]);
    a !== void 0 && (n = n === void 0 ? a : n + a);
  }
  return n;
}
var ob = e(() => {});
function sb(e, t) {
  var n = e == null ? 0 : e.length;
  return n ? ab(e, t) / n : cb;
}
var cb,
  lb = e(() => {
    (ob(), (cb = NaN));
  });
function ub(e) {
  return sb(e, ot);
}
var db = e(() => {
  (st(), lb());
});
function fb(e, t) {
  return sb(e, qf(t, 2));
}
var pb = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      lb());
  }),
  mb,
  hb = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      ma(),
      V(),
      B(),
      Do(),
      Fo(),
      Y(),
      xl(),
      lp(),
      Qp(),
      Gp(),
      qp(),
      (mb = ei(function (e, t, n) {
        Zp(e, t, n);
      })));
  }),
  gb,
  _b = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      rv(),
      av(),
      (gb = Kr(function (e, t) {
        return function (n) {
          return iv(n, e, t);
        };
      })));
  }),
  vb,
  yb = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      rv(),
      av(),
      (vb = Kr(function (e, t) {
        return function (n) {
          return iv(e, n, t);
        };
      })));
  });
function bb(e) {
  return e && e.length ? $y(e, ot, Ly) : void 0;
}
var xb = e(() => {
  (y(), b(), x(), st(), Ry(), eb());
});
function Sb(e, t) {
  return e && e.length ? $y(e, qf(t, 2), Ly) : void 0;
}
var Cb = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    Ry(),
    eb());
});
function wb(e, t, n) {
  var r = qg(t, oa(t)),
    i = !(Ue(n) && `chain` in n) || !!n.chain,
    a = ct(e);
  return (
    dn(r, function (n) {
      var r = t[n];
      ((e[n] = r),
        a &&
          (e.prototype[n] = function () {
            var t = this.__chain__;
            if (i || t) {
              var n = e(this.__wrapped__);
              return (
                (n.__actions__ = Vt(this.__actions__)).push({
                  func: r,
                  args: arguments,
                  thisArg: e,
                }),
                (n.__chain__ = t),
                n
              );
            }
            return r.apply(e, mo([this.value()], arguments));
          }));
    }),
    e
  );
}
var Tb = e(() => {
    (y(), b(), S(), We(), T(), Ht(), fn(), M(), N(), P(), I(), F(), L(), R(), z(), ho(), Jg());
  }),
  Eb,
  Db = e(() => {
    (y(),
      b(),
      x(),
      Pe(),
      S(),
      C(),
      (Eb = Me(function (e, t) {
        return e * t;
      }, 1)));
  });
function Ob(e) {
  if (typeof e != `function`) throw TypeError(kb);
  return function () {
    var t = arguments;
    switch (t.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, t[0]);
      case 2:
        return !e.call(this, t[0], t[1]);
      case 3:
        return !e.call(this, t[0], t[1], t[2]);
    }
    return !e.apply(this, t);
  };
}
var kb,
  Ab = e(() => {
    kb = `Expected a function`;
  });
function jb(e) {
  for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
  return n;
}
function Mb(e) {
  if (!e) return [];
  if (Zr(e)) return b_(e) ? ds(e) : Vt(e);
  if (Fb && e[Fb]) return jb(e[Fb]());
  var t = Yl(e);
  return (t == Nb ? Bd : t == Pb ? Hd : T_)(e);
}
var Nb,
  Pb,
  Fb,
  Ib = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      Ht(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      B(),
      ks(),
      Q(),
      Z(),
      Vd(),
      Ud(),
      S_(),
      E_(),
      (Nb = `[object Map]`),
      (Pb = `[object Set]`),
      (Fb = de ? de.iterator : void 0));
  });
function Lb() {
  this.__values__ === void 0 && (this.__values__ = Mb(this.value()));
  var e = this.__index__ >= this.__values__.length;
  return { done: e, value: e ? void 0 : this.__values__[this.__index__++] };
}
var Rb = e(() => {
  (y(),
    b(),
    S(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    B(),
    ks(),
    Q(),
    Z(),
    S_(),
    E_(),
    Ib());
});
function zb(e, t) {
  var n = e.length;
  if (n) return ((t += t < 0 ? n : 0), Sn(t, n) ? e[t] : void 0);
}
var Bb = e(() => {
  Tn();
});
function Vb(e, t) {
  return e && e.length ? zb(e, tt(t)) : void 0;
}
var Hb = e(() => {
  (y(), b(), x(), w(), et(), nt(), Bb());
});
function Ub(e) {
  return (
    (e = tt(e)),
    Kr(function (t) {
      return zb(t, e);
    })
  );
}
var Wb = e(() => {
  (y(), b(), x(), w(), et(), nt(), T(), E(), D(), j(), A(), qr(), Bb());
});
function Gb(e, t) {
  return ((t = io(t, e)), (e = nv(e, t)), e == null || delete e[so(vm(t))]);
}
var Kb = e(() => {
  (G(), K(), ym(), rv());
});
function qb(e) {
  return Oo(e) ? void 0 : e;
}
var Jb,
  Yb,
  Xb,
  Zb,
  Qb = e(() => {
    (y(),
      b(),
      x(),
      Te(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      Fr(),
      Br(),
      Hr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      yo(),
      xo(),
      Co(),
      Do(),
      Fo(),
      Y(),
      fl(),
      md(),
      xl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      rv(),
      Kb(),
      (Jb = 1),
      (Yb = 2),
      (Xb = 4),
      (Zb = So(function (e, t) {
        var n = {};
        if (e == null) return n;
        var r = !1;
        ((t = we(t, function (t) {
          return ((t = io(t, e)), (r ||= t.length > 1), t);
        })),
          Vr(e, jl(e), n),
          r && (n = mu(n, Jb | Yb | Xb, qb)));
        for (var i = t.length; i--;) Gb(n, t[i]);
        return n;
      })));
  });
function $b(e, t, n, r) {
  if (!Ue(e)) return e;
  t = io(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a;) {
    var c = so(t[i]),
      l = n;
    if (c === `__proto__` || c === `constructor` || c === `prototype`) return e;
    if (i != o) {
      var u = s[c];
      ((l = r ? r(u, c, s) : void 0), l === void 0 && (l = Ue(u) ? u : Sn(t[i + 1]) ? [] : {}));
    }
    (Rr(s, c, l), (s = s[c]));
  }
  return e;
}
var ex = e(() => {
  (We(), Tn(), Br(), G(), K());
});
function tx(e, t, n) {
  for (var r = -1, i = t.length, a = {}; ++r < i;) {
    var o = t[r],
      s = lo(e, o);
    n(s, o) && $b(a, io(o, e), s);
  }
  return a;
}
var nx = e(() => {
  (G(), q(), ex());
});
function rx(e, t) {
  if (e == null) return {};
  var n = we(jl(e), function (e) {
    return [e];
  });
  return (
    (t = qf(t)),
    tx(e, n, function (e, n) {
      return t(e, n[0]);
    })
  );
}
var ix = e(() => {
  (y(),
    b(),
    x(),
    Te(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    A(),
    Fr(),
    Br(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    ma(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Do(),
    Y(),
    X(),
    Nl(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    ex(),
    nx());
});
function ax(e, t) {
  return rx(e, Ob(qf(t)));
}
var ox = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    A(),
    Fr(),
    Br(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    ma(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Do(),
    Y(),
    X(),
    Nl(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    Ab(),
    ex(),
    nx(),
    ix());
});
function sx(e) {
  return Ho(2, e);
}
var cx = e(() => {
  (y(), b(), x(), w(), et(), nt(), Wo());
});
function lx(e, t) {
  if (e !== t) {
    var n = e !== void 0,
      r = e === null,
      i = e === e,
      a = Se(e),
      o = t !== void 0,
      s = t === null,
      c = t === t,
      l = Se(t);
    if ((!s && !l && !a && e > t) || (a && o && c && !s && !l) || (r && o && c) || (!n && c) || !i)
      return 1;
    if ((!r && !a && !l && e < t) || (l && n && i && !r && !a) || (s && n && i) || (!o && i) || !c)
      return -1;
  }
  return 0;
}
var ux = e(() => {
  x();
});
function dx(e, t) {
  var n = e.length;
  for (e.sort(t); n--;) e[n] = e[n].value;
  return e;
}
function fx(e, t, n) {
  for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
    var c = lx(i[r], a[r]);
    if (c) return r >= s ? c : c * (n[r] == `desc` ? -1 : 1);
  }
  return e.index - t.index;
}
function px(e, t, n) {
  t = t.length
    ? we(t, function (e) {
        return Ee(e)
          ? function (t) {
              return lo(t, e.length === 1 ? e[0] : e);
            }
          : e;
      })
    : [ot];
  var r = -1;
  return (
    (t = we(t, yi(qf))),
    dx(
      ag(e, function (e, n, i) {
        return {
          criteria: we(t, function (t) {
            return t(e);
          }),
          index: ++r,
          value: e,
        };
      }),
      function (e, t) {
        return fx(e, t, n);
      }
    )
  );
}
var mx = e(() => {
  (Te(), S(), st(), bi(), q(), Jf(), og(), ux());
});
function hx(e, t, n, r) {
  return e == null
    ? []
    : (Ee(t) || (t = t == null ? [] : [t]),
      (n = r ? void 0 : n),
      Ee(n) || (n = n == null ? [] : [n]),
      px(e, t, n));
}
var gx = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    og(),
    mx(),
    ux());
});
function _x(e) {
  return So(function (t) {
    return (
      (t = we(t, yi(qf))),
      Kr(function (n) {
        var r = this;
        return e(t, function (e) {
          return en(e, r, n);
        });
      })
    );
  });
}
var vx = e(() => {
    (Te(), tn(), qr(), bi(), Co(), Jf());
  }),
  yx,
  bx = e(() => {
    (y(),
      b(),
      x(),
      Te(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      xo(),
      Co(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      vx(),
      (yx = _x(we)));
  }),
  xx,
  Sx,
  Cx,
  wx = e(() => {
    (y(),
      b(),
      x(),
      Te(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      tn(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      bi(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      (xx = Kr),
      (Sx = Math.min),
      (Cx = xx(function (e, t) {
        t = t.length == 1 && Ee(t[0]) ? we(t[0], yi(qf)) : we(_o(t, 1), yi(qf));
        var n = t.length;
        return Kr(function (r) {
          for (var i = -1, a = Sx(r.length, n); ++i < a;) r[i] = t[i].call(this, r[i]);
          return en(e, this, r);
        });
      })));
  }),
  Tx,
  Ex = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      xo(),
      Co(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      xh(),
      vx(),
      (Tx = _x(bh)));
  }),
  Dx,
  Ox = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      xo(),
      Co(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      vx(),
      (Dx = _x(Wd)));
  });
function kx(e, t) {
  var n = ``;
  if (!e || t < 1 || t > Ax) return n;
  do (t % 2 && (n += e), (t = jx(t / 2)), t && (e += e));
  while (t);
  return n;
}
var Ax,
  jx,
  Mx = e(() => {
    ((Ax = 9007199254740991), (jx = Math.floor));
  });
function Nx(e) {
  for (var t = (Qx.lastIndex = 0); Qx.test(e);) ++t;
  return t;
}
function Px(e) {
  return os(e) ? Nx(e) : Fx(e);
}
var Fx,
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
  $x = e(() => {
    (cs(),
      Uf(),
      (Fx = Hf(`length`)),
      (Ix = `\\ud800-\\udfff`),
      (Lx = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`),
      (Rx = `\\ufe0e\\ufe0f`),
      (zx = `[` + Ix + `]`),
      (Bx = `[` + Lx + `]`),
      (Vx = `\\ud83c[\\udffb-\\udfff]`),
      (Hx = `(?:` + Bx + `|` + Vx + `)`),
      (Ux = `[^` + Ix + `]`),
      (Wx = `(?:\\ud83c[\\udde6-\\uddff]){2}`),
      (Gx = `[\\ud800-\\udbff][\\udc00-\\udfff]`),
      (Kx = `\\u200d`),
      (qx = Hx + `?`),
      (Jx = `[` + Rx + `]?`),
      (Yx = `(?:` + Kx + `(?:` + [Ux, Wx, Gx].join(`|`) + `)` + Jx + qx + `)*`),
      (Xx = Jx + qx + Yx),
      (Zx = `(?:` + [Ux + Bx + `?`, Bx, Wx, Gx, zx].join(`|`) + `)`),
      (Qx = RegExp(Vx + `(?=` + Vx + `)|` + Zx + Xx, `g`)));
  });
function eS(e, t) {
  t = t === void 0 ? ` ` : De(t);
  var n = t.length;
  if (n < 2) return n ? kx(t, e) : t;
  var r = kx(t, tS(e / Px(t)));
  return os(t) ? is(ds(r), 0, e).join(``) : r.slice(0, e);
}
var tS,
  nS = e(() => {
    (C(), as(), cs(), ks(), Mx(), $x(), (tS = Math.ceil));
  });
function rS(e, t, n) {
  ((e = no(e)), (t = tt(t)));
  var r = t ? Px(e) : 0;
  if (!t || r >= t) return e;
  var i = (t - r) / 2;
  return eS(aS(i), n) + e + eS(iS(i), n);
}
var iS,
  aS,
  oS = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      w(),
      et(),
      nt(),
      W(),
      ks(),
      $x(),
      nS(),
      (iS = Math.ceil),
      (aS = Math.floor));
  });
function sS(e, t, n) {
  ((e = no(e)), (t = tt(t)));
  var r = t ? Px(e) : 0;
  return t && r < t ? e + eS(t - r, n) : e;
}
var cS = e(() => {
  (y(), b(), x(), S(), C(), w(), et(), nt(), W(), ks(), $x(), nS());
});
function lS(e, t, n) {
  ((e = no(e)), (t = tt(t)));
  var r = t ? Px(e) : 0;
  return t && r < t ? eS(t - r, n) + e : e;
}
var uS = e(() => {
  (y(), b(), x(), S(), C(), w(), et(), nt(), W(), ks(), $x(), nS());
});
function dS(e, t, n) {
  return (n || t == null ? (t = 0) : (t &&= +t), pS(no(e).replace(fS, ``), t || 0));
}
var fS,
  pS,
  mS = e(() => {
    (y(), b(), x(), S(), C(), W(), (fS = /^\s+/), (pS = se.parseInt));
  }),
  hS,
  gS,
  _S = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      qr(),
      (hS = 32),
      (gS = Kr(function (e, t) {
        return Un(e, hS, void 0, t, Rn(t, In(gS)));
      })),
      (gS.placeholder = {}));
  }),
  vS,
  yS,
  bS = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      qr(),
      (vS = 64),
      (yS = Kr(function (e, t) {
        return Un(e, vS, void 0, t, Rn(t, In(yS)));
      })),
      (yS.placeholder = {}));
  }),
  xS,
  SS = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      yp(),
      lp(),
      dp(),
      pp(),
      hp(),
      (xS = vp(
        function (e, t, n) {
          e[+!n].push(t);
        },
        function () {
          return [[], []];
        }
      )));
  });
function CS(e, t) {
  return tx(e, t, function (t, n) {
    return If(e, n);
  });
}
var wS,
  TS = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Br(),
      N(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      yo(),
      xo(),
      Co(),
      Lf(),
      Pf(),
      ex(),
      nx(),
      (wS = So(function (e, t) {
        return e == null ? {} : CS(e, t);
      })));
  });
function ES(e) {
  for (var t, n = this; n instanceof Mt;) {
    var r = Ut(n);
    ((r.__index__ = 0), (r.__values__ = void 0), t ? (i.__wrapped__ = r) : (t = r));
    var i = r;
    n = n.__wrapped__;
  }
  return ((i.__wrapped__ = e), t);
}
var DS = e(() => {
  (Nt(), It(), Bt(), Wt());
});
function OS(e) {
  return function (t) {
    return e == null ? void 0 : lo(e, t);
  };
}
var kS = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), G(), V(), B(), H(), U(), W(), K(), q());
});
function AS(e, t, n, r) {
  for (var i = n - 1, a = e.length; ++i < a;) if (r(e[i], t)) return i;
  return -1;
}
function jS(e, t, n, r) {
  var i = r ? AS : vn,
    a = -1,
    o = t.length,
    s = e;
  for (e === t && (t = Vt(t)), n && (s = we(e, yi(n))); ++a < o;)
    for (var c = 0, l = t[a], u = n ? n(l) : l; (c = i(s, u, c, r)) > -1;)
      (s !== e && MS.call(s, c, 1), MS.call(e, c, 1));
  return e;
}
var MS,
  NS = e(() => {
    (Te(), Ht(), yn(), bi(), (MS = Array.prototype.splice));
  });
function PS(e, t) {
  return e && e.length && t && t.length ? jS(e, t) : e;
}
var FS = e(() => {
    NS();
  }),
  IS,
  LS = e(() => {
    (y(), b(), T(), E(), D(), j(), A(), qr(), NS(), FS(), (IS = Kr(PS)));
  });
function RS(e, t, n) {
  return e && e.length && t && t.length ? jS(e, t, qf(n, 2)) : e;
}
var zS = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    NS());
});
function BS(e, t, n) {
  return e && e.length && t && t.length ? jS(e, t, void 0, n) : e;
}
var VS = e(() => {
  NS();
});
function HS(e, t) {
  for (var n = e ? t.length : 0, r = n - 1; n--;) {
    var i = t[n];
    if (n == r || i !== a) {
      var a = i;
      Sn(i) ? US.call(e, i, 1) : Gb(e, i);
    }
  }
  return e;
}
var US,
  WS = e(() => {
    (Tn(), Kb(), (US = Array.prototype.splice));
  }),
  GS,
  KS = e(() => {
    (y(),
      b(),
      x(),
      Te(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Tn(),
      N(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      po(),
      yo(),
      xo(),
      Co(),
      rv(),
      Kb(),
      ux(),
      WS(),
      (GS = So(function (e, t) {
        var n = e == null ? 0 : e.length,
          r = fo(e, t);
        return (
          HS(
            e,
            we(t, function (e) {
              return Sn(e, n) ? +e : e;
            }).sort(lx)
          ),
          r
        );
      })));
  });
function qS(e, t) {
  return e + JS(YS() * (t - e + 1));
}
var JS,
  YS,
  XS = e(() => {
    ((JS = Math.floor), (YS = Math.random));
  });
function ZS(e, t, n) {
  if (
    (n && typeof n != `boolean` && Qr(e, t, n) && (t = n = void 0),
    n === void 0 &&
      (typeof t == `boolean`
        ? ((n = t), (t = void 0))
        : typeof e == `boolean` && ((n = e), (e = void 0))),
    e === void 0 && t === void 0
      ? ((e = 0), (t = 1))
      : ((e = Ze(e)), t === void 0 ? ((t = e), (e = 0)) : (t = Ze(t))),
    e > t)
  ) {
    var r = e;
    ((e = t), (t = r));
  }
  if (n || e % 1 || t % 1) {
    var i = eC();
    return $S(e + i * (t - e + QS(`1e-` + ((i + ``).length - 1))), t);
  }
  return qS(e, t);
}
var QS,
  $S,
  eC,
  tC = e(() => {
    (y(),
      b(),
      x(),
      w(),
      et(),
      T(),
      M(),
      $r(),
      XS(),
      (QS = parseFloat),
      ($S = Math.min),
      (eC = Math.random));
  });
function nC(e, t, n, r) {
  for (var i = -1, a = iC(rC((t - e) / (n || 1)), 0), o = Array(a); a--;)
    ((o[r ? a : ++i] = e), (e += n));
  return o;
}
var rC,
  iC,
  aC = e(() => {
    ((rC = Math.ceil), (iC = Math.max));
  });
function oC(e) {
  return function (t, n, r) {
    return (
      r && typeof r != `number` && Qr(t, n, r) && (n = r = void 0),
      (t = Ze(t)),
      n === void 0 ? ((n = t), (t = 0)) : (n = Ze(n)),
      (r = r === void 0 ? (t < n ? 1 : -1) : Ze(r)),
      nC(t, n, r, e)
    );
  };
}
var sC = e(() => {
    (et(), $r(), aC());
  }),
  cC,
  lC = e(() => {
    (y(), b(), x(), w(), et(), T(), M(), $r(), sC(), (cC = oC()));
  }),
  uC,
  dC = e(() => {
    (y(), b(), x(), w(), et(), T(), M(), $r(), sC(), (uC = oC(!0)));
  }),
  fC,
  pC,
  mC = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      N(),
      yo(),
      xo(),
      Co(),
      (fC = 256),
      (pC = So(function (e, t) {
        return Un(e, fC, void 0, void 0, void 0, t);
      })));
  });
function hC(e, t, n, r, i) {
  return (
    i(e, function (e, i, a) {
      n = r ? ((r = !1), e) : t(n, e, i, a);
    }),
    n
  );
}
var gC = e(() => {});
function _C(e, t, n) {
  var r = Ee(e) ? Is : hC,
    i = arguments.length < 3;
  return r(e, qf(t, 4), n, i, mp);
}
var vC = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Ls(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    gC());
});
function yC(e, t, n, r) {
  var i = e == null ? 0 : e.length;
  for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
  return n;
}
function bC(e, t, n) {
  var r = Ee(e) ? yC : hC,
    i = arguments.length < 3;
  return r(e, qf(t, 4), n, i, Gm);
}
var xC = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    pp(),
    Hm(),
    Wm(),
    Km(),
    gC());
});
function SC(e, t) {
  return (Ee(e) ? Sl : Ph)(e, Ob(qf(t, 3)));
}
var CC = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    Cl(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp(),
    pp(),
    hp(),
    Fh(),
    Ab());
});
function wC(e, t) {
  var n = [];
  if (!(e && e.length)) return n;
  var r = -1,
    i = [],
    a = e.length;
  for (t = qf(t, 3); ++r < a;) {
    var o = e[r];
    t(o, r, e) && (n.push(o), i.push(r));
  }
  return (HS(e, i), n);
}
var TC = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    rv(),
    Kb(),
    WS());
});
function EC(e, t, n) {
  return ((t = (n ? Qr(e, t, n) : t === void 0) ? 1 : tt(t)), kx(no(e), t));
}
var DC = e(() => {
  (y(), b(), x(), S(), C(), w(), et(), nt(), T(), M(), $r(), W(), Mx());
});
function OC() {
  var e = arguments,
    t = no(e[0]);
  return e.length < 3 ? t : t.replace(e[1], e[2]);
}
var kC = e(() => {
  (y(), b(), x(), S(), C(), W());
});
function AC(e, t) {
  if (typeof e != `function`) throw TypeError(jC);
  return ((t = t === void 0 ? t : tt(t)), Kr(e, t));
}
var jC,
  MC = e(() => {
    (y(), b(), x(), w(), et(), nt(), T(), E(), D(), j(), A(), qr(), (jC = `Expected a function`));
  });
function NC(e, t, n) {
  t = io(t, e);
  var r = -1,
    i = t.length;
  for (i || ((i = 1), (e = void 0)); ++r < i;) {
    var a = e?.[so(t[r])];
    (a === void 0 && ((r = i), (a = n)), (e = ct(a) ? a.call(e) : a));
  }
  return e;
}
var PC = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), G(), V(), B(), H(), U(), W(), K());
});
function FC(e) {
  return e == null ? e : IC.call(e);
}
var IC,
  LC = e(() => {
    IC = Array.prototype.reverse;
  }),
  RC,
  zC = e(() => {
    (y(), b(), x(), S(), C(), w(), et(), nt(), W(), Wc(), (RC = Vc(`round`)));
  });
function BC(e) {
  var t = e.length;
  return t ? e[qS(0, t - 1)] : void 0;
}
function VC(e) {
  return BC(T_(e));
}
function HC(e) {
  return (Ee(e) ? BC : VC)(e);
}
var UC = e(() => {
  (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), R(), z(), E_(), XS());
});
function WC(e, t) {
  var n = -1,
    r = e.length,
    i = r - 1;
  for (t = t === void 0 ? r : t; ++n < t;) {
    var a = qS(n, i),
      o = e[a];
    ((e[a] = e[n]), (e[n] = o));
  }
  return ((e.length = t), e);
}
var GC = e(() => {
  XS();
});
function KC(e, t) {
  return WC(Vt(e), $c(t, 0, e.length));
}
function qC(e, t) {
  var n = T_(e);
  return WC(n, $c(t, 0, n.length));
}
function JC(e, t, n) {
  return ((t = (n ? Qr(e, t, n) : t === void 0) ? 1 : tt(t)), (Ee(e) ? KC : qC)(e, t));
}
var YC = e(() => {
  (y(),
    b(),
    x(),
    S(),
    w(),
    et(),
    nt(),
    T(),
    Ht(),
    M(),
    $r(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    el(),
    E_(),
    GC());
});
function XC(e, t, n) {
  return e == null ? e : $b(e, t, n);
}
var ZC = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    A(),
    Fr(),
    Br(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    ex());
});
function QC(e, t, n, r) {
  return ((r = typeof r == `function` ? r : void 0), e == null ? e : $b(e, t, n, r));
}
var $C = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    A(),
    Fr(),
    Br(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    ex());
});
function ew(e) {
  return WC(Vt(e));
}
function tw(e) {
  return WC(T_(e));
}
function nw(e) {
  return (Ee(e) ? ew : tw)(e);
}
var rw = e(() => {
  (y(), b(), S(), T(), Ht(), M(), N(), P(), I(), F(), L(), R(), z(), E_(), GC());
});
function iw(e) {
  if (e == null) return 0;
  if (Zr(e)) return b_(e) ? Px(e) : e.length;
  var t = Yl(e);
  return t == aw || t == ow ? e.size : ra(e).length;
}
var aw,
  ow,
  sw = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      O(),
      M(),
      R(),
      B(),
      Q(),
      Z(),
      S_(),
      $x(),
      (aw = `[object Map]`),
      (ow = `[object Set]`));
  });
function cw(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r
    ? (n && typeof n != `number` && Qr(e, t, n)
        ? ((t = 0), (n = r))
        : ((t = t == null ? 0 : tt(t)), (n = n === void 0 ? r : tt(n))),
      ns(e, t, n))
    : [];
}
var lw = e(() => {
    (y(), b(), x(), w(), et(), nt(), T(), M(), $r(), rs());
  }),
  uw,
  dw = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      Ws(),
      Nc(),
      Ic(),
      (uw = Pc(function (e, t, n) {
        return e + (n ? `_` : ``) + t.toLowerCase();
      })));
  });
function fw(e, t) {
  var n;
  return (
    mp(e, function (e, r, i) {
      return ((n = t(e, r, i)), !n);
    }),
    !!n
  );
}
function pw(e, t, n) {
  var r = Ee(e) ? Wd : fw;
  return (n && Qr(e, t, n) && (t = void 0), r(e, qf(t, 3)));
}
var mw = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      M(),
      $r(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      lp(),
      dp(),
      pp(),
      hp());
  }),
  hw,
  gw = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      $r(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      lp(),
      dp(),
      pp(),
      hp(),
      og(),
      mx(),
      ux(),
      (hw = Kr(function (e, t) {
        if (e == null) return [];
        var n = t.length;
        return (
          n > 1 && Qr(e, t[0], t[1]) ? (t = []) : n > 2 && Qr(t[0], t[1], t[2]) && (t = [t[0]]),
          px(e, _o(t, 1), [])
        );
      })));
  });
function _w(e, t, n, r) {
  var i = 0,
    a = e == null ? 0 : e.length;
  if (a === 0) return 0;
  t = n(t);
  for (var o = t !== t, s = t === null, c = Se(t), l = t === void 0; i < a;) {
    var u = yw((i + a) / 2),
      d = n(e[u]),
      f = d !== void 0,
      p = d === null,
      ee = d === d,
      m = Se(d);
    if (o) var h = r || ee;
    else
      h = l
        ? ee && (r || f)
        : s
          ? ee && f && (r || !p)
          : c
            ? ee && f && !p && (r || !m)
            : !p && !m && (r ? d <= t : d < t);
    h ? (i = u + 1) : (a = u);
  }
  return bw(a, vw);
}
var vw,
  yw,
  bw,
  xw = e(() => {
    (x(), (vw = 4294967294), (yw = Math.floor), (bw = Math.min));
  });
function Sw(e, t, n) {
  var r = 0,
    i = e == null ? r : e.length;
  if (typeof t == `number` && t === t && i <= Cw) {
    for (; r < i;) {
      var a = (r + i) >>> 1,
        o = e[a];
      o !== null && !Se(o) && (n ? o <= t : o < t) ? (r = a + 1) : (i = a);
    }
    return i;
  }
  return _w(e, t, ot, n);
}
var Cw,
  ww = e(() => {
    (x(), st(), xw(), (Cw = 2147483647));
  });
function Tw(e, t) {
  return Sw(e, t);
}
var Ew = e(() => {
  (y(), b(), x(), xw(), ww());
});
function Dw(e, t, n) {
  return _w(e, t, qf(n, 2));
}
var Ow = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    xw());
});
function kw(e, t) {
  var n = e == null ? 0 : e.length;
  if (n) {
    var r = Sw(e, t);
    if (r < n && Ir(e[r], t)) return r;
  }
  return -1;
}
var Aw = e(() => {
  (y(), b(), x(), Lr(), xw(), ww());
});
function jw(e, t) {
  return Sw(e, t, !0);
}
var Mw = e(() => {
  (y(), b(), x(), xw(), ww());
});
function Nw(e, t, n) {
  return _w(e, t, qf(n, 2), !0);
}
var Pw = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    xw());
});
function Fw(e, t) {
  if (e != null && e.length) {
    var n = Sw(e, t, !0) - 1;
    if (Ir(e[n], t)) return n;
  }
  return -1;
}
var Iw = e(() => {
  (y(), b(), x(), Lr(), xw(), ww());
});
function Lw(e, t) {
  for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
    var o = e[n],
      s = t ? t(o) : o;
    if (!n || !Ir(s, c)) {
      var c = s;
      a[i++] = o === 0 ? 0 : o;
    }
  }
  return a;
}
var Rw = e(() => {
  Lr();
});
function zw(e) {
  return e && e.length ? Lw(e) : [];
}
var Bw = e(() => {
  Rw();
});
function Vw(e, t) {
  return e && e.length ? Lw(e, qf(t, 2)) : [];
}
var Hw = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    Rw());
});
function Uw(e, t, n) {
  return (
    n && typeof n != `number` && Qr(e, t, n) && (t = n = void 0),
    (n = n === void 0 ? Ww : n >>> 0),
    n
      ? ((e = no(e)),
        e && (typeof t == `string` || (t != null && !ay(t))) && ((t = De(t)), !t && os(e))
          ? is(ds(e), 0, n)
          : e.split(t, n))
      : []
  );
}
var Ww,
  Gw = e(() => {
    (y(), b(), x(), S(), C(), T(), M(), $r(), F(), W(), as(), cs(), ks(), oy(), (Ww = 4294967295));
  });
function Kw(e, t) {
  if (typeof e != `function`) throw TypeError(qw);
  return (
    (t = t == null ? 0 : Jw(tt(t), 0)),
    Kr(function (n) {
      var r = n[t],
        i = is(n, 0, t);
      return (r && mo(i, r), en(e, this, i));
    })
  );
}
var qw,
  Jw,
  Yw = e(() => {
    (y(),
      b(),
      x(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      tn(),
      j(),
      A(),
      qr(),
      ho(),
      as(),
      (qw = `Expected a function`),
      (Jw = Math.max));
  }),
  Xw,
  Zw = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      ks(),
      js(),
      Ns(),
      Ws(),
      Nc(),
      Ic(),
      (Xw = Pc(function (e, t, n) {
        return e + (n ? ` ` : ``) + Ms(t);
      })));
  });
function Qw(e, t, n) {
  return (
    (e = no(e)),
    (n = n == null ? 0 : $c(tt(n), 0, e.length)),
    (t = De(t)),
    e.slice(n, n + t.length) == t
  );
}
var $w = e(() => {
  (y(), b(), x(), S(), C(), w(), et(), nt(), W(), el());
});
function eT() {
  return {};
}
var tT = e(() => {});
function nT() {
  return ``;
}
var rT = e(() => {});
function iT() {
  return !0;
}
var aT = e(() => {}),
  oT,
  sT = e(() => {
    (y(),
      b(),
      x(),
      Pe(),
      S(),
      C(),
      (oT = Me(function (e, t) {
        return e - t;
      }, 0)));
  });
function cT(e) {
  return e && e.length ? ab(e, ot) : 0;
}
var lT = e(() => {
  (st(), ob());
});
function uT(e, t) {
  return e && e.length ? ab(e, qf(t, 2)) : 0;
}
var dT = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    ob());
});
function fT(e) {
  var t = e == null ? 0 : e.length;
  return t ? ns(e, 1, t) : [];
}
var pT = e(() => {
  rs();
});
function mT(e, t, n) {
  return e && e.length ? ((t = n || t === void 0 ? 1 : tt(t)), ns(e, 0, t < 0 ? 0 : t)) : [];
}
var hT = e(() => {
  (y(), b(), x(), w(), et(), nt(), rs());
});
function gT(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? ((t = n || t === void 0 ? 1 : tt(t)), (t = r - t), ns(e, t < 0 ? 0 : t, r)) : [];
}
var _T = e(() => {
  (y(), b(), x(), w(), et(), nt(), rs());
});
function vT(e, t) {
  return e && e.length ? Am(e, qf(t, 3), !1, !0) : [];
}
var yT = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    jm());
});
function bT(e, t) {
  return e && e.length ? Am(e, qf(t, 3)) : [];
}
var xT = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    jm());
});
function ST(e, t) {
  return (t(e), e);
}
var CT = e(() => {}),
  wT,
  TT,
  ET = e(() => {
    (hh(),
      (wT = /<%=([\s\S]+?)%>/g),
      (TT = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: wT,
        variable: ``,
        imports: { _: { escape: dh } },
      }));
  });
function DT(e, t, n, r) {
  return e === void 0 || (Ir(e, AT[n]) && !jT.call(r, n)) ? t : e;
}
function OT(e) {
  return `\\` + MT[e];
}
function kT(e, t, n) {
  var r = TT.imports._.templateSettings || TT;
  (n && Qr(e, t, n) && (t = void 0), (e = no(e)), (t = _a({}, t, r, DT)));
  var i = _a({}, t.imports, r.imports, DT),
    a = oa(i),
    o = C_(i, a),
    s,
    c,
    l = 0,
    u = t.interpolate || zT,
    d = `__p += '`,
    f = RegExp(
      (t.escape || zT).source +
        `|` +
        u.source +
        `|` +
        (u === wT ? RT : zT).source +
        `|` +
        (t.evaluate || zT).source +
        `|$`,
      `g`
    ),
    p = VT.call(t, `sourceURL`)
      ? `//# sourceURL=` +
        (t.sourceURL + ``).replace(/\s/g, ` `) +
        `
`
      : ``;
  (e.replace(f, function (t, n, r, i, a, o) {
    return (
      (r ||= i),
      (d += e.slice(l, o).replace(BT, OT)),
      n &&
        ((s = !0),
        (d +=
          `' +
__e(` +
          n +
          `) +
'`)),
      a &&
        ((c = !0),
        (d +=
          `';
` +
          a +
          `;
__p += '`)),
      r &&
        (d +=
          `' +
((__t = (` +
          r +
          `)) == null ? '' : __t) +
'`),
      (l = o + t.length),
      t
    );
  }),
    (d += `';
`));
  var ee = VT.call(t, `variable`) && t.variable;
  if (ee) {
    if (LT.test(ee)) throw Error(NT);
  } else
    d =
      `with (obj) {
` +
      d +
      `
}
`;
  ((d = (c ? d.replace(PT, ``) : d).replace(FT, `$1`).replace(IT, `$1;`)),
    (d =
      `function(` +
      (ee || `obj`) +
      `) {
` +
      (ee
        ? ``
        : `obj || (obj = {});
`) +
      `var __t, __p = ''` +
      (s ? `, __e = _.escape` : ``) +
      (c
        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
        : `;
`) +
      d +
      `return __p
}`));
  var m = Bo(function () {
    return Function(a, p + `return ` + d).apply(void 0, o);
  });
  if (((m.source = d), Io(m))) throw m;
  return m;
}
var AT,
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
  HT = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      j(),
      A(),
      Fr(),
      Lr(),
      Br(),
      Hr(),
      qr(),
      M(),
      $r(),
      ti(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      ma(),
      va(),
      W(),
      Do(),
      Fo(),
      zo(),
      Vo(),
      hh(),
      w_(),
      ET(),
      (AT = Object.prototype),
      (jT = AT.hasOwnProperty),
      (MT = { "\\": `\\`, "'": `'`, "\n": `n`, "\r": `r`, "\u2028": `u2028`, "\u2029": `u2029` }),
      (NT = "Invalid `variable` option passed into `_.template`"),
      (PT = /\b__p \+= '';/g),
      (FT = /\b(__p \+=) '' \+/g),
      (IT = /(__e\(.*?\)|\b__t\)) \+\n'';/g),
      (LT = /[()=,{}\[\]\/\s]/),
      (RT = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g),
      (zT = /($^)/),
      (BT = /['\n\r\u2028\u2029\\]/g),
      (VT = Object.prototype.hasOwnProperty));
  });
function UT(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != `function`) throw TypeError(WT);
  return (
    Ue(n) && ((r = `leading` in n ? !!n.leading : r), (i = `trailing` in n ? !!n.trailing : i)),
    Np(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
var WT,
  GT = e(() => {
    (y(), b(), x(), We(), w(), Mp(), Lp(), (WT = `Expected a function`));
  });
function KT(e, t) {
  return t(e);
}
var qT = e(() => {});
function JT(e, t) {
  if (((e = tt(e)), e < 1 || e > YT)) return [];
  var n = XT,
    r = ZT(e, XT);
  ((t = Im(t)), (e -= XT));
  for (var i = ai(r, t); ++n < e;) t(n);
  return i;
}
var YT,
  XT,
  ZT,
  QT = e(() => {
    (y(),
      b(),
      x(),
      w(),
      et(),
      nt(),
      oi(),
      Lm(),
      (YT = 9007199254740991),
      (XT = 4294967295),
      (ZT = Math.min));
  });
function $T() {
  return this;
}
var eE = e(() => {});
function tE(e, t) {
  var n = e;
  return (
    n instanceof Pt && (n = n.value()),
    Is(
      t,
      function (e, t) {
        return t.func.apply(t.thisArg, mo([e], t.args));
      },
      n
    )
  );
}
function nE() {
  return tE(this.__wrapped__, this.__actions__);
}
var rE = e(() => {
    (It(), ho(), Ls());
  }),
  iE = e(() => {
    (It(), rE());
  });
function aE(e) {
  return no(e).toLowerCase();
}
var oE = e(() => {
  (y(), b(), x(), S(), C(), W());
});
function sE(e) {
  return Ee(e) ? we(e, so) : Se(e) ? [e] : Vt(to(no(e)));
}
var cE = e(() => {
  (y(), b(), x(), Te(), S(), C(), T(), E(), D(), Ht(), V(), B(), H(), U(), W(), K());
});
function lE(e) {
  return e ? $c(tt(e), -uE, uE) : e === 0 ? e : 0;
}
var uE,
  dE = e(() => {
    (y(), b(), x(), w(), et(), nt(), el(), (uE = 9007199254740991));
  });
function fE(e) {
  return no(e).toUpperCase();
}
var pE = e(() => {
  (y(), b(), x(), S(), C(), W());
});
function mE(e, t, n) {
  var r = Ee(e),
    i = r || vi(e) || Qi(e);
  if (((t = qf(t, 4)), n == null)) {
    var a = e && e.constructor;
    n = i ? (r ? new a() : []) : Ue(e) && ct(a) ? At(Eo(e)) : {};
  }
  return (
    (i ? dn : up)(e, function (e, r, i) {
      return t(n, e, r, i);
    }),
    n
  );
}
var hE = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    We(),
    T(),
    E(),
    D(),
    O(),
    jt(),
    fn(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Do(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    lp(),
    dp());
});
function gE(e, t) {
  for (var n = e.length; n-- && vn(t, e[n], 0) > -1;);
  return n;
}
var _E = e(() => {
  yn();
});
function vE(e, t) {
  for (var n = -1, r = e.length; ++n < r && vn(t, e[n], 0) > -1;);
  return n;
}
var yE = e(() => {
  yn();
});
function bE(e, t, n) {
  if (((e = no(e)), e && (n || t === void 0))) return Be(e);
  if (!e || !(t = De(t))) return e;
  var r = ds(e),
    i = ds(t);
  return is(r, vE(r, i), gE(r, i) + 1).join(``);
}
var xE = e(() => {
  (y(), b(), x(), S(), C(), He(), W(), as(), ks(), _E(), yE());
});
function SE(e, t, n) {
  if (((e = no(e)), e && (n || t === void 0))) return e.slice(0, Le(e) + 1);
  if (!e || !(t = De(t))) return e;
  var r = ds(e);
  return is(r, 0, gE(r, ds(t)) + 1).join(``);
}
var CE = e(() => {
  (y(), b(), x(), S(), C(), ze(), W(), as(), ks(), _E());
});
function wE(e, t, n) {
  if (((e = no(e)), e && (n || t === void 0))) return e.replace(TE, ``);
  if (!e || !(t = De(t))) return e;
  var r = ds(e);
  return is(r, vE(r, ds(t))).join(``);
}
var TE,
  EE = e(() => {
    (y(), b(), x(), S(), C(), W(), as(), ks(), yE(), (TE = /^\s+/));
  });
function DE(e, t) {
  var n = OE,
    r = kE;
  if (Ue(t)) {
    var i = `separator` in t ? t.separator : i;
    ((n = `length` in t ? tt(t.length) : n), (r = `omission` in t ? De(t.omission) : r));
  }
  e = no(e);
  var a = e.length;
  if (os(e)) {
    var o = ds(e);
    a = o.length;
  }
  if (n >= a) return e;
  var s = n - Px(r);
  if (s < 1) return r;
  var c = o ? is(o, 0, s).join(``) : e.slice(0, s);
  if (i === void 0) return c + r;
  if ((o && (s += c.length - s), ay(i))) {
    if (e.slice(s).search(i)) {
      var l,
        u = c;
      for (
        i.global || (i = RegExp(i.source, no(AE.exec(i)) + `g`)), i.lastIndex = 0;
        (l = i.exec(u));
      )
        var d = l.index;
      c = c.slice(0, d === void 0 ? s : d);
    }
  } else if (e.indexOf(De(i), s) != s) {
    var f = c.lastIndexOf(i);
    f > -1 && (c = c.slice(0, f));
  }
  return c + r;
}
var OE,
  kE,
  AE,
  jE = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      We(),
      w(),
      et(),
      nt(),
      F(),
      W(),
      as(),
      cs(),
      ks(),
      oy(),
      $x(),
      (OE = 30),
      (kE = `...`),
      (AE = /\w*$/));
  });
function ME(e) {
  return jr(e, 1);
}
var NE = e(() => {
  (y(),
    b(),
    x(),
    S(),
    w(),
    et(),
    nt(),
    T(),
    E(),
    D(),
    O(),
    $t(),
    Ar(),
    It(),
    Bt(),
    Wt(),
    Kt(),
    j(),
    A(),
    Nr());
});
function PE(e) {
  return ((e = no(e)), e && LE.test(e) ? e.replace(IE, FE) : e);
}
var FE,
  IE,
  LE,
  RE = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      zs(),
      (FE = Rs({ "&amp;": `&`, "&lt;": `<`, "&gt;": `>`, "&quot;": `"`, "&#39;": `'` })),
      (IE = /&(?:amp|lt|gt|quot|#39);/g),
      (LE = RegExp(IE.source)));
  });
function zE(e, t, n) {
  var r = -1,
    i = bn,
    a = e.length,
    o = !0,
    s = [],
    c = s;
  if (n) ((o = !1), (i = dm));
  else if (a >= VE) {
    var l = t ? null : BE(e);
    if (l) return Hd(l);
    ((o = !1), (i = Rd), (c = new Ld()));
  } else c = t ? [] : s;
  r: for (; ++r < a;) {
    var u = e[r],
      d = t ? t(u) : u;
    if (((u = n || u !== 0 ? u : 0), o && d === d)) {
      for (var f = c.length; f--;) if (c[f] === d) continue r;
      (t && c.push(d), s.push(u));
    } else i(c, d, n) || (c !== s && c.push(d), s.push(u));
  }
  return s;
}
var BE,
  VE,
  HE = e(() => {
    (Rt(),
      xn(),
      Z(),
      $(),
      Ud(),
      fm(),
      (BE =
        Pl && 1 / Hd(new Pl([, -0]))[1] == 1 / 0
          ? function (e) {
              return new Pl(e);
            }
          : Lt),
      (VE = 200));
  }),
  UE,
  WE = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      V(),
      B(),
      yo(),
      Z(),
      $(),
      Gp(),
      HE(),
      (UE = Kr(function (e) {
        return zE(_o(e, 1, Wp, !0));
      })));
  }),
  GE,
  KE = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      Y(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      Gp(),
      ym(),
      HE(),
      (GE = Kr(function (e) {
        var t = vm(e);
        return (Wp(t) && (t = void 0), zE(_o(e, 1, Wp, !0), qf(t, 2)));
      })));
  }),
  qE,
  JE = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      V(),
      B(),
      yo(),
      Z(),
      $(),
      Gp(),
      ym(),
      HE(),
      (qE = Kr(function (e) {
        var t = vm(e);
        return ((t = typeof t == `function` ? t : void 0), zE(_o(e, 1, Wp, !0), void 0, t));
      })));
  });
function YE(e) {
  return e && e.length ? zE(e) : [];
}
var XE = e(() => {
  (y(), b(), T(), E(), D(), V(), B(), Z(), $(), HE());
});
function ZE(e, t) {
  return e && e.length ? zE(e, qf(t, 2)) : [];
}
var QE = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    O(),
    M(),
    N(),
    P(),
    I(),
    F(),
    L(),
    R(),
    z(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    uo(),
    Y(),
    X(),
    Q(),
    Z(),
    $(),
    xf(),
    Of(),
    Mf(),
    Lf(),
    Pf(),
    Vf(),
    Kf(),
    Jf(),
    HE());
});
function $E(e, t) {
  return ((t = typeof t == `function` ? t : void 0), e && e.length ? zE(e, void 0, t) : []);
}
var eD = e(() => {
  (y(), b(), T(), E(), D(), V(), B(), Z(), $(), HE());
});
function tD(e) {
  var t = ++nD;
  return no(e) + t;
}
var nD,
  rD = e(() => {
    (y(), b(), x(), S(), C(), W(), (nD = 0));
  });
function iD(e, t) {
  return e == null || Gb(e, t);
}
var aD = e(() => {
  (y(), b(), x(), S(), C(), T(), E(), D(), G(), V(), B(), H(), U(), W(), K(), q(), rv(), Kb());
});
function oD(e) {
  if (!(e && e.length)) return [];
  var t = 0;
  return (
    (e = Sl(e, function (e) {
      if (Wp(e)) return ((t = sD(e.length, t)), !0);
    })),
    ai(t, function (t) {
      return we(e, Hf(t));
    })
  );
}
var sD,
  cD = e(() => {
    (y(), b(), Te(), T(), M(), oi(), Cl(), Uf(), Gp(), (sD = Math.max));
  });
function lD(e, t) {
  if (!(e && e.length)) return [];
  var n = oD(e);
  return t == null
    ? n
    : we(n, function (e) {
        return en(t, void 0, e);
      });
}
var uD = e(() => {
  (y(), b(), Te(), T(), tn(), M(), Gp(), cD());
});
function dD(e, t, n, r) {
  return $b(e, t, n(lo(e, t)), r);
}
var fD = e(() => {
  (q(), ex());
});
function pD(e, t, n) {
  return e == null ? e : dD(e, t, Im(n));
}
var mD = e(() => {
  (y(),
    b(),
    x(),
    S(),
    C(),
    T(),
    E(),
    D(),
    A(),
    Fr(),
    Br(),
    G(),
    V(),
    B(),
    H(),
    U(),
    W(),
    K(),
    q(),
    Lm(),
    ex(),
    fD());
});
function hD(e, t, n, r) {
  return ((r = typeof r == `function` ? r : void 0), e == null ? e : dD(e, t, Im(n), r));
}
var gD = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      A(),
      Fr(),
      Br(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      Lm(),
      ex(),
      fD());
  }),
  _D,
  vD = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      W(),
      Ws(),
      Nc(),
      Ic(),
      (_D = Pc(function (e, t, n) {
        return e + (n ? ` ` : ``) + t.toUpperCase();
      })));
  }),
  yD = e(() => {
    (It(), rE());
  }),
  bD = e(() => {
    (It(), rE());
  });
function xD(e) {
  return e == null ? [] : C_(e, fa(e));
}
var SD = e(() => {
    (y(), b(), S(), T(), M(), N(), P(), I(), F(), L(), ma(), w_());
  }),
  CD,
  wD = e(() => {
    (y(),
      b(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      V(),
      B(),
      $(),
      Gp(),
      hm(),
      (CD = Kr(function (e, t) {
        return Wp(e) ? pm(e, t) : [];
      })));
  });
function TD(e, t) {
  return gS(Im(t), e);
}
var ED = e(() => {
    (y(),
      b(),
      x(),
      S(),
      w(),
      et(),
      nt(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      A(),
      qr(),
      Lm(),
      _S());
  }),
  DD,
  OD = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      It(),
      Bt(),
      j(),
      A(),
      Tn(),
      N(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      po(),
      yo(),
      xo(),
      Co(),
      qT(),
      (DD = So(function (e) {
        var t = e.length,
          n = t ? e[0] : 0,
          r = this.__wrapped__,
          i = function (t) {
            return fo(t, e);
          };
        return t > 1 || this.__actions__.length || !(r instanceof Pt) || !Sn(n)
          ? this.thru(i)
          : ((r = r.slice(n, +n + +!!t)),
            r.__actions__.push({ func: KT, args: [i], thisArg: void 0 }),
            new zt(r, this.__chain__).thru(function (e) {
              return (t && !e.length && e.push(void 0), e);
            }));
      })));
  });
function kD() {
  return qc(this);
}
var AD = e(() => {
  (S(), It(), Bt(), Wt(), Kt(), Jc());
});
function jD() {
  var e = this.__wrapped__;
  if (e instanceof Pt) {
    var t = e;
    return (
      this.__actions__.length && (t = new Pt(this)),
      (t = t.reverse()),
      t.__actions__.push({ func: KT, args: [FC], thisArg: void 0 }),
      new zt(t, this.__chain__)
    );
  }
  return this.thru(FC);
}
var MD = e(() => {
  (It(), Bt(), LC(), qT());
});
function ND(e, t, n) {
  var r = e.length;
  if (r < 2) return r ? zE(e[0]) : [];
  for (var i = -1, a = Array(r); ++i < r;)
    for (var o = e[i], s = -1; ++s < r;) s != i && (a[i] = pm(a[i] || o, e[s], t, n));
  return zE(_o(a, 1), t, n);
}
var PD = e(() => {
    (yo(), hm(), HE());
  }),
  FD,
  ID = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      V(),
      B(),
      yo(),
      Cl(),
      Z(),
      $(),
      Gp(),
      hm(),
      HE(),
      PD(),
      (FD = Kr(function (e) {
        return ND(Sl(e, Wp));
      })));
  }),
  LD,
  RD = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      O(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      yo(),
      Y(),
      Cl(),
      X(),
      Q(),
      Z(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      Gp(),
      hm(),
      ym(),
      HE(),
      PD(),
      (LD = Kr(function (e) {
        var t = vm(e);
        return (Wp(t) && (t = void 0), ND(Sl(e, Wp), qf(t, 2)));
      })));
  }),
  zD,
  BD = e(() => {
    (y(),
      b(),
      S(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      N(),
      V(),
      B(),
      yo(),
      Cl(),
      Z(),
      $(),
      Gp(),
      hm(),
      ym(),
      HE(),
      PD(),
      (zD = Kr(function (e) {
        var t = vm(e);
        return ((t = typeof t == `function` ? t : void 0), ND(Sl(e, Wp), void 0, t));
      })));
  }),
  VD,
  HD = e(() => {
    (y(), b(), T(), E(), D(), j(), A(), qr(), M(), Gp(), cD(), (VD = Kr(oD)));
  });
function UD(e, t, n) {
  for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i;) {
    var s = r < a ? t[r] : void 0;
    n(o, e[r], s);
  }
  return o;
}
var WD = e(() => {});
function GD(e, t) {
  return UD(e || [], t || [], Rr);
}
var KD = e(() => {
  (y(), b(), T(), E(), D(), A(), Fr(), Br(), WD());
});
function qD(e, t) {
  return UD(e || [], t || [], $b);
}
var JD = e(() => {
    (y(),
      b(),
      x(),
      S(),
      C(),
      T(),
      E(),
      D(),
      A(),
      Fr(),
      Br(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      ex(),
      WD());
  }),
  YD,
  XD = e(() => {
    (y(),
      b(),
      T(),
      E(),
      D(),
      j(),
      A(),
      qr(),
      M(),
      Gp(),
      cD(),
      uD(),
      (YD = Kr(function (e) {
        var t = e.length,
          n = t > 1 ? e[t - 1] : void 0;
        return ((n = typeof n == `function` ? (e.pop(), n) : void 0), lD(e, n));
      })));
  });
function ZD() {
  var e = new Pt(this.__wrapped__);
  return (
    (e.__actions__ = Vt(this.__actions__)),
    (e.__dir__ = this.__dir__),
    (e.__filtered__ = this.__filtered__),
    (e.__iteratees__ = Vt(this.__iteratees__)),
    (e.__takeCount__ = this.__takeCount__),
    (e.__views__ = Vt(this.__views__)),
    e
  );
}
function QD() {
  if (this.__filtered__) {
    var e = new Pt(this);
    ((e.__dir__ = -1), (e.__filtered__ = !0));
  } else ((e = this.clone()), (e.__dir__ *= -1));
  return e;
}
function $D(e, t, n) {
  for (var r = -1, i = n.length; ++r < i;) {
    var a = n[r],
      o = a.size;
    switch (a.type) {
      case `drop`:
        e += o;
        break;
      case `dropRight`:
        t -= o;
        break;
      case `take`:
        t = pO(t, e + o);
        break;
      case `takeRight`:
        e = fO(e, t - o);
        break;
    }
  }
  return { start: e, end: t };
}
function eO() {
  var e = this.__wrapped__.value(),
    t = this.__dir__,
    n = Ee(e),
    r = t < 0,
    i = n ? e.length : 0,
    a = $D(0, i, this.__views__),
    o = a.start,
    s = a.end,
    c = s - o,
    l = r ? s : o - 1,
    u = this.__iteratees__,
    d = u.length,
    f = 0,
    p = gO(c, this.__takeCount__);
  if (!n || (!r && i == c && p == c)) return tE(e, this.__actions__);
  var ee = [];
  t: for (; c-- && f < p;) {
    l += t;
    for (var m = -1, h = e[l]; ++m < d;) {
      var g = u[m],
        te = g.iteratee,
        ne = g.type,
        re = te(h);
      if (ne == hO) h = re;
      else if (!re) {
        if (ne == mO) continue t;
        break t;
      }
    }
    ee[f++] = h;
  }
  return ee;
}
var tO,
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
  OO = e(() => {
    /**
     * @license
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="es" -o ./`
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    (y(),
      b(),
      xe(),
      x(),
      Pe(),
      S(),
      C(),
      Ie(),
      We(),
      w(),
      et(),
      nt(),
      at(),
      st(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Rt(),
      Bt(),
      Ht(),
      Wt(),
      Kt(),
      j(),
      rn(),
      A(),
      fn(),
      Nr(),
      Fr(),
      Lr(),
      Br(),
      Hr(),
      qr(),
      Xr(),
      M(),
      $r(),
      ti(),
      N(),
      mi(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      la(),
      ma(),
      ga(),
      va(),
      ba(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      po(),
      ho(),
      yo(),
      xo(),
      Co(),
      To(),
      Do(),
      Fo(),
      zo(),
      Vo(),
      Wo(),
      Jo(),
      Xo(),
      ts(),
      ks(),
      js(),
      Ns(),
      Fs(),
      Ws(),
      Nc(),
      Ic(),
      Rc(),
      Bc(),
      Wc(),
      Kc(),
      Jc(),
      Qc(),
      nl(),
      Y(),
      fl(),
      md(),
      xl(),
      Tl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      _d(),
      xd(),
      Td(),
      Od(),
      Ad(),
      Md(),
      Pd(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      Zf(),
      rp(),
      ap(),
      yp(),
      lp(),
      dp(),
      pp(),
      hp(),
      Sp(),
      wp(),
      Dp(),
      Ap(),
      Mp(),
      Lp(),
      zp(),
      Up(),
      Qp(),
      Gp(),
      qp(),
      rm(),
      em(),
      cm(),
      um(),
      hm(),
      _m(),
      ym(),
      xm(),
      Cm(),
      Tm(),
      Dm(),
      km(),
      Nm(),
      Fm(),
      zm(),
      Bm(),
      Ym(),
      Hm(),
      Wm(),
      Km(),
      Xm(),
      Qm(),
      ih(),
      oh(),
      sh(),
      lh(),
      uh(),
      hh(),
      yh(),
      Ch(),
      Th(),
      Eh(),
      Dh(),
      Ah(),
      Nh(),
      Fh(),
      Lh(),
      zh(),
      Hh(),
      Wh(),
      Jh(),
      Qh(),
      eg(),
      ng(),
      ig(),
      og(),
      cg(),
      ug(),
      pg(),
      hg(),
      vg(),
      bg(),
      Cg(),
      Tg(),
      Mg(),
      Pg(),
      Ig(),
      Rg(),
      Bg(),
      Hg(),
      Wg(),
      Kg(),
      Jg(),
      Xg(),
      Qg(),
      t_(),
      a_(),
      s_(),
      l_(),
      m_(),
      y_(),
      S_(),
      E_(),
      k_(),
      M_(),
      P_(),
      R_(),
      B_(),
      H_(),
      W_(),
      q_(),
      X_(),
      tv(),
      rv(),
      av(),
      sv(),
      lv(),
      mv(),
      _v(),
      Sv(),
      wv(),
      kv(),
      jv(),
      Nv(),
      Iv(),
      Rv(),
      Bv(),
      Hv(),
      Gv(),
      qv(),
      Zv(),
      $v(),
      ty(),
      oy(),
      ly(),
      dy(),
      my(),
      _y(),
      by(),
      Cy(),
      Ty(),
      Dy(),
      My(),
      Py(),
      Iy(),
      By(),
      Hy(),
      Wy(),
      Ky(),
      Yy(),
      Qy(),
      eb(),
      nb(),
      ib(),
      db(),
      pb(),
      hb(),
      _b(),
      yb(),
      xb(),
      Cb(),
      Tb(),
      Db(),
      Ab(),
      Ib(),
      Rb(),
      Hb(),
      Wb(),
      Kb(),
      Qb(),
      ex(),
      nx(),
      ix(),
      ox(),
      cx(),
      mx(),
      ux(),
      gx(),
      vx(),
      bx(),
      wx(),
      Ex(),
      Ox(),
      $x(),
      nS(),
      oS(),
      cS(),
      uS(),
      mS(),
      _S(),
      bS(),
      SS(),
      TS(),
      DS(),
      kS(),
      NS(),
      FS(),
      LS(),
      zS(),
      VS(),
      WS(),
      KS(),
      tC(),
      sC(),
      lC(),
      dC(),
      mC(),
      vC(),
      xC(),
      CC(),
      TC(),
      DC(),
      kC(),
      MC(),
      PC(),
      LC(),
      zC(),
      UC(),
      YC(),
      ZC(),
      $C(),
      rw(),
      sw(),
      lw(),
      dw(),
      mw(),
      gw(),
      xw(),
      ww(),
      Ew(),
      Ow(),
      Aw(),
      Mw(),
      Pw(),
      Iw(),
      Bw(),
      Hw(),
      Gw(),
      Yw(),
      Zw(),
      $w(),
      tT(),
      rT(),
      aT(),
      sT(),
      lT(),
      dT(),
      pT(),
      hT(),
      _T(),
      yT(),
      xT(),
      CT(),
      HT(),
      ET(),
      GT(),
      qT(),
      QT(),
      eE(),
      rE(),
      iE(),
      oE(),
      cE(),
      dE(),
      pE(),
      hE(),
      xE(),
      CE(),
      EE(),
      jE(),
      NE(),
      RE(),
      HE(),
      WE(),
      KE(),
      JE(),
      XE(),
      QE(),
      eD(),
      rD(),
      aD(),
      cD(),
      uD(),
      fD(),
      mD(),
      gD(),
      vD(),
      bD(),
      SD(),
      wD(),
      ED(),
      OD(),
      AD(),
      MD(),
      PD(),
      ID(),
      RD(),
      BD(),
      HD(),
      KD(),
      JD(),
      XD(),
      (tO = {
        chunk: Yc,
        compact: jd,
        concat: Nd,
        difference: gm,
        differenceBy: bm,
        differenceWith: Sm,
        drop: Em,
        dropRight: Om,
        dropRightWhile: Mm,
        dropWhile: Pm,
        fill: Mh,
        findIndex: Bh,
        findLastIndex: Yh,
        first: rg,
        flatten: bo,
        flattenDeep: gg,
        flattenDepth: yg,
        fromPairs: Gg,
        head: rg,
        indexOf: A_,
        initial: N_,
        intersection: z_,
        intersectionBy: V_,
        intersectionWith: U_,
        join: xy,
        last: vm,
        lastIndexOf: ky,
        nth: Vb,
        pull: IS,
        pullAll: PS,
        pullAllBy: RS,
        pullAllWith: BS,
        pullAt: GS,
        remove: wC,
        reverse: FC,
        slice: cw,
        sortedIndex: Tw,
        sortedIndexBy: Dw,
        sortedIndexOf: kw,
        sortedLastIndex: jw,
        sortedLastIndexBy: Nw,
        sortedLastIndexOf: Fw,
        sortedUniq: zw,
        sortedUniqBy: Vw,
        tail: fT,
        take: mT,
        takeRight: gT,
        takeRightWhile: vT,
        takeWhile: bT,
        union: UE,
        unionBy: GE,
        unionWith: qE,
        uniq: YE,
        uniqBy: ZE,
        uniqWith: $E,
        unzip: oD,
        unzipWith: lD,
        without: CD,
        xor: FD,
        xorBy: LD,
        xorWith: zD,
        zip: VD,
        zipObject: GD,
        zipObjectDeep: qD,
        zipWith: YD,
      }),
      (nO = {
        countBy: xp,
        each: Rm,
        eachRight: Jm,
        every: wh,
        filter: Ih,
        find: Uh,
        findLast: $h,
        flatMap: lg,
        flatMapDeep: dg,
        flatMapDepth: mg,
        forEach: Rm,
        forEachRight: Jm,
        groupBy: e_,
        includes: D_,
        invokeMap: cv,
        keyBy: Ey,
        map: sg,
        orderBy: hx,
        partition: xS,
        reduce: _C,
        reduceRight: bC,
        reject: SC,
        sample: HC,
        sampleSize: JC,
        shuffle: nw,
        size: iw,
        some: pw,
        sortBy: hw,
      }),
      (rO = { now: jp }),
      (iO = {
        after: rt,
        ary: jr,
        before: Ho,
        bind: qo,
        bindKey: es,
        curry: Tp,
        curryRight: Op,
        debounce: Np,
        defer: sm,
        delay: lm,
        flip: xg,
        memoize: Ya,
        negate: Ob,
        once: sx,
        overArgs: Cx,
        partial: gS,
        partialRight: yS,
        rearg: pC,
        rest: AC,
        spread: Kw,
        throttle: UT,
        unary: ME,
        wrap: TD,
      }),
      (aO = {
        castArray: zc,
        clone: hd,
        cloneDeep: vd,
        cloneDeepWith: Sd,
        cloneWith: Ed,
        conformsTo: ip,
        eq: Ir,
        gt: o_,
        gte: c_,
        isArguments: fi,
        isArray: Ee,
        isArrayBuffer: pv,
        isArrayLike: Zr,
        isArrayLikeObject: Wp,
        isBoolean: hv,
        isBuffer: vi,
        isDate: xv,
        isElement: Cv,
        isEmpty: Tv,
        isEqual: Av,
        isEqualWith: Mv,
        isError: Io,
        isFinite: Pv,
        isFunction: ct,
        isInteger: Lv,
        isLength: Jr,
        isMap: $l,
        isMatch: zv,
        isMatchWith: Vv,
        isNaN: Kv,
        isNative: Jv,
        isNil: Qv,
        isNull: ey,
        isNumber: Uv,
        isObject: Ue,
        isObjectLike: be,
        isPlainObject: Oo,
        isRegExp: ay,
        isSafeInteger: sy,
        isSet: iu,
        isString: b_,
        isSymbol: Se,
        isTypedArray: Qi,
        isUndefined: uy,
        isWeakMap: fy,
        isWeakSet: hy,
        lt: zy,
        lte: Vy,
        toArray: Mb,
        toFinite: Ze,
        toInteger: tt,
        toLength: Oh,
        toNumber: Ge,
        toPlainObject: Kp,
        toSafeInteger: lE,
        toString: no,
      }),
      (oO = {
        add: Fe,
        ceil: Gc,
        divide: wm,
        floor: wg,
        max: tb,
        maxBy: rb,
        mean: ub,
        meanBy: fb,
        min: bb,
        minBy: Sb,
        multiply: Eb,
        round: RC,
        subtract: oT,
        sum: cT,
        sumBy: uT,
      }),
      (sO = { clamp: tl, inRange: g_, random: ZS }),
      (cO = {
        assign: ca,
        assignIn: ha,
        assignInWith: _a,
        assignWith: ya,
        at: wo,
        create: Cp,
        defaults: Hp,
        defaultsDeep: nm,
        entries: ah,
        entriesIn: ch,
        extend: ha,
        extendWith: _a,
        findKey: qh,
        findLastKey: tg,
        forIn: Lg,
        forInRight: zg,
        forOwn: Vg,
        forOwnRight: Ug,
        functions: Yg,
        functionsIn: Zg,
        get: J,
        has: p_,
        hasIn: If,
        invert: Y_,
        invertBy: ev,
        invoke: ov,
        keys: oa,
        keysIn: fa,
        mapKeys: Uy,
        mapValues: Gy,
        merge: mb,
        mergeWith: $p,
        omit: Zb,
        omitBy: ax,
        pick: wS,
        pickBy: rx,
        result: NC,
        set: XC,
        setWith: QC,
        toPairs: ah,
        toPairsIn: ch,
        transform: mE,
        unset: iD,
        update: pD,
        updateWith: hD,
        values: T_,
        valuesIn: xD,
      }),
      (lO = {
        at: DD,
        chain: qc,
        commit: kd,
        lodash: k,
        next: Lb,
        plant: ES,
        reverse: jD,
        tap: ST,
        thru: KT,
        toIterator: $T,
        toJSON: nE,
        value: nE,
        valueOf: nE,
        wrapperChain: kD,
      }),
      (uO = {
        camelCase: Lc,
        capitalize: Ps,
        deburr: Bs,
        endsWith: Zm,
        escape: dh,
        escapeRegExp: gh,
        kebabCase: wy,
        lowerCase: Ny,
        lowerFirst: Fy,
        pad: rS,
        padEnd: sS,
        padStart: lS,
        parseInt: dS,
        repeat: EC,
        replace: OC,
        snakeCase: uw,
        split: Uw,
        startCase: Xw,
        startsWith: Qw,
        template: kT,
        templateSettings: TT,
        toLower: aE,
        toUpper: fE,
        trim: bE,
        trimEnd: SE,
        trimStart: wE,
        truncate: DE,
        unescape: PE,
        upperCase: _D,
        upperFirst: Ms,
        words: Js,
      }),
      (dO = {
        attempt: Bo,
        bindAll: Yo,
        cond: Yf,
        conforms: tp,
        constant: nn,
        defaultTo: Rp,
        flow: Ng,
        flowRight: Fg,
        identity: ot,
        iteratee: vy,
        matches: qy,
        matchesProperty: Xy,
        method: gb,
        methodOf: vb,
        mixin: wb,
        noop: Lt,
        nthArg: Ub,
        over: yx,
        overEvery: Tx,
        overSome: Dx,
        property: Gf,
        propertyOf: OS,
        range: cC,
        rangeRight: uC,
        stubArray: wl,
        stubFalse: pi,
        stubObject: eT,
        stubString: nT,
        stubTrue: iT,
        times: JT,
        toPath: sE,
        uniqueId: tD,
      }),
      (fO = Math.max),
      (pO = Math.min),
      (mO = 1),
      (hO = 2),
      (gO = Math.min),
      (_O = `4.17.21`),
      (vO = 2),
      (yO = 1),
      (bO = 3),
      (xO = 4294967295),
      (SO = Array.prototype),
      (CO = Object.prototype.hasOwnProperty),
      (wO = de ? de.iterator : void 0),
      (TO = Math.max),
      (EO = Math.min),
      (DO = (function (e) {
        return function (t, n, r) {
          if (r == null) {
            var i = Ue(n),
              a = i && oa(n),
              o = a && a.length && qg(n, a);
            (o ? o.length : i) || ((r = n), (n = t), (t = this));
          }
          return e(t, n, r);
        };
      })(wb)),
      (k.after = iO.after),
      (k.ary = iO.ary),
      (k.assign = cO.assign),
      (k.assignIn = cO.assignIn),
      (k.assignInWith = cO.assignInWith),
      (k.assignWith = cO.assignWith),
      (k.at = cO.at),
      (k.before = iO.before),
      (k.bind = iO.bind),
      (k.bindAll = dO.bindAll),
      (k.bindKey = iO.bindKey),
      (k.castArray = aO.castArray),
      (k.chain = lO.chain),
      (k.chunk = tO.chunk),
      (k.compact = tO.compact),
      (k.concat = tO.concat),
      (k.cond = dO.cond),
      (k.conforms = dO.conforms),
      (k.constant = dO.constant),
      (k.countBy = nO.countBy),
      (k.create = cO.create),
      (k.curry = iO.curry),
      (k.curryRight = iO.curryRight),
      (k.debounce = iO.debounce),
      (k.defaults = cO.defaults),
      (k.defaultsDeep = cO.defaultsDeep),
      (k.defer = iO.defer),
      (k.delay = iO.delay),
      (k.difference = tO.difference),
      (k.differenceBy = tO.differenceBy),
      (k.differenceWith = tO.differenceWith),
      (k.drop = tO.drop),
      (k.dropRight = tO.dropRight),
      (k.dropRightWhile = tO.dropRightWhile),
      (k.dropWhile = tO.dropWhile),
      (k.fill = tO.fill),
      (k.filter = nO.filter),
      (k.flatMap = nO.flatMap),
      (k.flatMapDeep = nO.flatMapDeep),
      (k.flatMapDepth = nO.flatMapDepth),
      (k.flatten = tO.flatten),
      (k.flattenDeep = tO.flattenDeep),
      (k.flattenDepth = tO.flattenDepth),
      (k.flip = iO.flip),
      (k.flow = dO.flow),
      (k.flowRight = dO.flowRight),
      (k.fromPairs = tO.fromPairs),
      (k.functions = cO.functions),
      (k.functionsIn = cO.functionsIn),
      (k.groupBy = nO.groupBy),
      (k.initial = tO.initial),
      (k.intersection = tO.intersection),
      (k.intersectionBy = tO.intersectionBy),
      (k.intersectionWith = tO.intersectionWith),
      (k.invert = cO.invert),
      (k.invertBy = cO.invertBy),
      (k.invokeMap = nO.invokeMap),
      (k.iteratee = dO.iteratee),
      (k.keyBy = nO.keyBy),
      (k.keys = oa),
      (k.keysIn = cO.keysIn),
      (k.map = nO.map),
      (k.mapKeys = cO.mapKeys),
      (k.mapValues = cO.mapValues),
      (k.matches = dO.matches),
      (k.matchesProperty = dO.matchesProperty),
      (k.memoize = iO.memoize),
      (k.merge = cO.merge),
      (k.mergeWith = cO.mergeWith),
      (k.method = dO.method),
      (k.methodOf = dO.methodOf),
      (k.mixin = DO),
      (k.negate = Ob),
      (k.nthArg = dO.nthArg),
      (k.omit = cO.omit),
      (k.omitBy = cO.omitBy),
      (k.once = iO.once),
      (k.orderBy = nO.orderBy),
      (k.over = dO.over),
      (k.overArgs = iO.overArgs),
      (k.overEvery = dO.overEvery),
      (k.overSome = dO.overSome),
      (k.partial = iO.partial),
      (k.partialRight = iO.partialRight),
      (k.partition = nO.partition),
      (k.pick = cO.pick),
      (k.pickBy = cO.pickBy),
      (k.property = dO.property),
      (k.propertyOf = dO.propertyOf),
      (k.pull = tO.pull),
      (k.pullAll = tO.pullAll),
      (k.pullAllBy = tO.pullAllBy),
      (k.pullAllWith = tO.pullAllWith),
      (k.pullAt = tO.pullAt),
      (k.range = dO.range),
      (k.rangeRight = dO.rangeRight),
      (k.rearg = iO.rearg),
      (k.reject = nO.reject),
      (k.remove = tO.remove),
      (k.rest = iO.rest),
      (k.reverse = tO.reverse),
      (k.sampleSize = nO.sampleSize),
      (k.set = cO.set),
      (k.setWith = cO.setWith),
      (k.shuffle = nO.shuffle),
      (k.slice = tO.slice),
      (k.sortBy = nO.sortBy),
      (k.sortedUniq = tO.sortedUniq),
      (k.sortedUniqBy = tO.sortedUniqBy),
      (k.split = uO.split),
      (k.spread = iO.spread),
      (k.tail = tO.tail),
      (k.take = tO.take),
      (k.takeRight = tO.takeRight),
      (k.takeRightWhile = tO.takeRightWhile),
      (k.takeWhile = tO.takeWhile),
      (k.tap = lO.tap),
      (k.throttle = iO.throttle),
      (k.thru = KT),
      (k.toArray = aO.toArray),
      (k.toPairs = cO.toPairs),
      (k.toPairsIn = cO.toPairsIn),
      (k.toPath = dO.toPath),
      (k.toPlainObject = aO.toPlainObject),
      (k.transform = cO.transform),
      (k.unary = iO.unary),
      (k.union = tO.union),
      (k.unionBy = tO.unionBy),
      (k.unionWith = tO.unionWith),
      (k.uniq = tO.uniq),
      (k.uniqBy = tO.uniqBy),
      (k.uniqWith = tO.uniqWith),
      (k.unset = cO.unset),
      (k.unzip = tO.unzip),
      (k.unzipWith = tO.unzipWith),
      (k.update = cO.update),
      (k.updateWith = cO.updateWith),
      (k.values = cO.values),
      (k.valuesIn = cO.valuesIn),
      (k.without = tO.without),
      (k.words = uO.words),
      (k.wrap = iO.wrap),
      (k.xor = tO.xor),
      (k.xorBy = tO.xorBy),
      (k.xorWith = tO.xorWith),
      (k.zip = tO.zip),
      (k.zipObject = tO.zipObject),
      (k.zipObjectDeep = tO.zipObjectDeep),
      (k.zipWith = tO.zipWith),
      (k.entries = cO.toPairs),
      (k.entriesIn = cO.toPairsIn),
      (k.extend = cO.assignIn),
      (k.extendWith = cO.assignInWith),
      DO(k, k),
      (k.add = oO.add),
      (k.attempt = dO.attempt),
      (k.camelCase = uO.camelCase),
      (k.capitalize = uO.capitalize),
      (k.ceil = oO.ceil),
      (k.clamp = sO.clamp),
      (k.clone = aO.clone),
      (k.cloneDeep = aO.cloneDeep),
      (k.cloneDeepWith = aO.cloneDeepWith),
      (k.cloneWith = aO.cloneWith),
      (k.conformsTo = aO.conformsTo),
      (k.deburr = uO.deburr),
      (k.defaultTo = dO.defaultTo),
      (k.divide = oO.divide),
      (k.endsWith = uO.endsWith),
      (k.eq = aO.eq),
      (k.escape = uO.escape),
      (k.escapeRegExp = uO.escapeRegExp),
      (k.every = nO.every),
      (k.find = nO.find),
      (k.findIndex = tO.findIndex),
      (k.findKey = cO.findKey),
      (k.findLast = nO.findLast),
      (k.findLastIndex = tO.findLastIndex),
      (k.findLastKey = cO.findLastKey),
      (k.floor = oO.floor),
      (k.forEach = nO.forEach),
      (k.forEachRight = nO.forEachRight),
      (k.forIn = cO.forIn),
      (k.forInRight = cO.forInRight),
      (k.forOwn = cO.forOwn),
      (k.forOwnRight = cO.forOwnRight),
      (k.get = cO.get),
      (k.gt = aO.gt),
      (k.gte = aO.gte),
      (k.has = cO.has),
      (k.hasIn = cO.hasIn),
      (k.head = tO.head),
      (k.identity = ot),
      (k.includes = nO.includes),
      (k.indexOf = tO.indexOf),
      (k.inRange = sO.inRange),
      (k.invoke = cO.invoke),
      (k.isArguments = aO.isArguments),
      (k.isArray = Ee),
      (k.isArrayBuffer = aO.isArrayBuffer),
      (k.isArrayLike = aO.isArrayLike),
      (k.isArrayLikeObject = aO.isArrayLikeObject),
      (k.isBoolean = aO.isBoolean),
      (k.isBuffer = aO.isBuffer),
      (k.isDate = aO.isDate),
      (k.isElement = aO.isElement),
      (k.isEmpty = aO.isEmpty),
      (k.isEqual = aO.isEqual),
      (k.isEqualWith = aO.isEqualWith),
      (k.isError = aO.isError),
      (k.isFinite = aO.isFinite),
      (k.isFunction = aO.isFunction),
      (k.isInteger = aO.isInteger),
      (k.isLength = aO.isLength),
      (k.isMap = aO.isMap),
      (k.isMatch = aO.isMatch),
      (k.isMatchWith = aO.isMatchWith),
      (k.isNaN = aO.isNaN),
      (k.isNative = aO.isNative),
      (k.isNil = aO.isNil),
      (k.isNull = aO.isNull),
      (k.isNumber = aO.isNumber),
      (k.isObject = Ue),
      (k.isObjectLike = aO.isObjectLike),
      (k.isPlainObject = aO.isPlainObject),
      (k.isRegExp = aO.isRegExp),
      (k.isSafeInteger = aO.isSafeInteger),
      (k.isSet = aO.isSet),
      (k.isString = aO.isString),
      (k.isSymbol = aO.isSymbol),
      (k.isTypedArray = aO.isTypedArray),
      (k.isUndefined = aO.isUndefined),
      (k.isWeakMap = aO.isWeakMap),
      (k.isWeakSet = aO.isWeakSet),
      (k.join = tO.join),
      (k.kebabCase = uO.kebabCase),
      (k.last = vm),
      (k.lastIndexOf = tO.lastIndexOf),
      (k.lowerCase = uO.lowerCase),
      (k.lowerFirst = uO.lowerFirst),
      (k.lt = aO.lt),
      (k.lte = aO.lte),
      (k.max = oO.max),
      (k.maxBy = oO.maxBy),
      (k.mean = oO.mean),
      (k.meanBy = oO.meanBy),
      (k.min = oO.min),
      (k.minBy = oO.minBy),
      (k.stubArray = dO.stubArray),
      (k.stubFalse = dO.stubFalse),
      (k.stubObject = dO.stubObject),
      (k.stubString = dO.stubString),
      (k.stubTrue = dO.stubTrue),
      (k.multiply = oO.multiply),
      (k.nth = tO.nth),
      (k.noop = dO.noop),
      (k.now = rO.now),
      (k.pad = uO.pad),
      (k.padEnd = uO.padEnd),
      (k.padStart = uO.padStart),
      (k.parseInt = uO.parseInt),
      (k.random = sO.random),
      (k.reduce = nO.reduce),
      (k.reduceRight = nO.reduceRight),
      (k.repeat = uO.repeat),
      (k.replace = uO.replace),
      (k.result = cO.result),
      (k.round = oO.round),
      (k.sample = nO.sample),
      (k.size = nO.size),
      (k.snakeCase = uO.snakeCase),
      (k.some = nO.some),
      (k.sortedIndex = tO.sortedIndex),
      (k.sortedIndexBy = tO.sortedIndexBy),
      (k.sortedIndexOf = tO.sortedIndexOf),
      (k.sortedLastIndex = tO.sortedLastIndex),
      (k.sortedLastIndexBy = tO.sortedLastIndexBy),
      (k.sortedLastIndexOf = tO.sortedLastIndexOf),
      (k.startCase = uO.startCase),
      (k.startsWith = uO.startsWith),
      (k.subtract = oO.subtract),
      (k.sum = oO.sum),
      (k.sumBy = oO.sumBy),
      (k.template = uO.template),
      (k.times = dO.times),
      (k.toFinite = aO.toFinite),
      (k.toInteger = tt),
      (k.toLength = aO.toLength),
      (k.toLower = uO.toLower),
      (k.toNumber = aO.toNumber),
      (k.toSafeInteger = aO.toSafeInteger),
      (k.toString = aO.toString),
      (k.toUpper = uO.toUpper),
      (k.trim = uO.trim),
      (k.trimEnd = uO.trimEnd),
      (k.trimStart = uO.trimStart),
      (k.truncate = uO.truncate),
      (k.unescape = uO.unescape),
      (k.uniqueId = dO.uniqueId),
      (k.upperCase = uO.upperCase),
      (k.upperFirst = uO.upperFirst),
      (k.each = nO.forEach),
      (k.eachRight = nO.forEachRight),
      (k.first = tO.head),
      DO(
        k,
        (function () {
          var e = {};
          return (
            up(k, function (t, n) {
              CO.call(k.prototype, n) || (e[n] = t);
            }),
            e
          );
        })(),
        { chain: !1 }
      ),
      (k.VERSION = _O),
      ((k.templateSettings = uO.templateSettings).imports._ = k),
      dn([`bind`, `bindKey`, `curry`, `curryRight`, `partial`, `partialRight`], function (e) {
        k[e].placeholder = k;
      }),
      dn([`drop`, `take`], function (e, t) {
        ((Pt.prototype[e] = function (n) {
          n = n === void 0 ? 1 : TO(tt(n), 0);
          var r = this.__filtered__ && !t ? new Pt(this) : this.clone();
          return (
            r.__filtered__
              ? (r.__takeCount__ = EO(n, r.__takeCount__))
              : r.__views__.push({ size: EO(n, xO), type: e + (r.__dir__ < 0 ? `Right` : ``) }),
            r
          );
        }),
          (Pt.prototype[e + `Right`] = function (t) {
            return this.reverse()[e](t).reverse();
          }));
      }),
      dn([`filter`, `map`, `takeWhile`], function (e, t) {
        var n = t + 1,
          r = n == yO || n == bO;
        Pt.prototype[e] = function (e) {
          var t = this.clone();
          return (
            t.__iteratees__.push({ iteratee: qf(e, 3), type: n }),
            (t.__filtered__ = t.__filtered__ || r),
            t
          );
        };
      }),
      dn([`head`, `last`], function (e, t) {
        var n = `take` + (t ? `Right` : ``);
        Pt.prototype[e] = function () {
          return this[n](1).value()[0];
        };
      }),
      dn([`initial`, `tail`], function (e, t) {
        var n = `drop` + (t ? `` : `Right`);
        Pt.prototype[e] = function () {
          return this.__filtered__ ? new Pt(this) : this[n](1);
        };
      }),
      (Pt.prototype.compact = function () {
        return this.filter(ot);
      }),
      (Pt.prototype.find = function (e) {
        return this.filter(e).head();
      }),
      (Pt.prototype.findLast = function (e) {
        return this.reverse().find(e);
      }),
      (Pt.prototype.invokeMap = Kr(function (e, t) {
        return typeof e == `function`
          ? new Pt(this)
          : this.map(function (n) {
              return iv(n, e, t);
            });
      })),
      (Pt.prototype.reject = function (e) {
        return this.filter(Ob(qf(e)));
      }),
      (Pt.prototype.slice = function (e, t) {
        e = tt(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0)
          ? new Pt(n)
          : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
            t !== void 0 && ((t = tt(t)), (n = t < 0 ? n.dropRight(-t) : n.take(t - e))),
            n);
      }),
      (Pt.prototype.takeRightWhile = function (e) {
        return this.reverse().takeWhile(e).reverse();
      }),
      (Pt.prototype.toArray = function () {
        return this.take(xO);
      }),
      up(Pt.prototype, function (e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t),
          r = /^(?:head|last)$/.test(t),
          i = k[r ? `take` + (t == `last` ? `Right` : ``) : t],
          a = r || /^find/.test(t);
        i &&
          (k.prototype[t] = function () {
            var t = this.__wrapped__,
              o = r ? [1] : arguments,
              s = t instanceof Pt,
              c = o[0],
              l = s || Ee(t),
              u = function (e) {
                var t = i.apply(k, mo([e], o));
                return r && d ? t[0] : t;
              };
            l && n && typeof c == `function` && c.length != 1 && (s = l = !1);
            var d = this.__chain__,
              f = !!this.__actions__.length,
              p = a && !d,
              ee = s && !f;
            if (!a && l) {
              t = ee ? t : new Pt(this);
              var m = e.apply(t, o);
              return (m.__actions__.push({ func: KT, args: [u], thisArg: void 0 }), new zt(m, d));
            }
            return p && ee
              ? e.apply(this, o)
              : ((m = this.thru(u)), p ? (r ? m.value()[0] : m.value()) : m);
          });
      }),
      dn([`pop`, `push`, `shift`, `sort`, `splice`, `unshift`], function (e) {
        var t = SO[e],
          n = /^(?:push|sort|unshift)$/.test(e) ? `tap` : `thru`,
          r = /^(?:pop|shift)$/.test(e);
        k.prototype[e] = function () {
          var e = arguments;
          if (r && !this.__chain__) {
            var i = this.value();
            return t.apply(Ee(i) ? i : [], e);
          }
          return this[n](function (n) {
            return t.apply(Ee(n) ? n : [], e);
          });
        };
      }),
      up(Pt.prototype, function (e, t) {
        var n = k[t];
        if (n) {
          var r = n.name + ``;
          (CO.call(Zt, r) || (Zt[r] = []), Zt[r].push({ name: t, func: n }));
        }
      }),
      (Zt[zn(void 0, vO).name] = [{ name: `wrapper`, func: void 0 }]),
      (Pt.prototype.clone = ZD),
      (Pt.prototype.reverse = QD),
      (Pt.prototype.value = eO),
      (k.prototype.at = lO.at),
      (k.prototype.chain = lO.wrapperChain),
      (k.prototype.commit = lO.commit),
      (k.prototype.next = lO.next),
      (k.prototype.plant = lO.plant),
      (k.prototype.reverse = lO.reverse),
      (k.prototype.toJSON = k.prototype.valueOf = k.prototype.value = lO.value),
      (k.prototype.first = k.prototype.head),
      wO && (k.prototype[wO] = lO.toIterator));
  }),
  kO = e(() => {
    (y(),
      b(),
      xe(),
      x(),
      Pe(),
      S(),
      C(),
      Ie(),
      We(),
      w(),
      et(),
      nt(),
      at(),
      st(),
      T(),
      E(),
      D(),
      O(),
      $t(),
      Ar(),
      It(),
      Rt(),
      Bt(),
      Wt(),
      Kt(),
      j(),
      rn(),
      A(),
      Nr(),
      Fr(),
      Lr(),
      Br(),
      Hr(),
      qr(),
      Xr(),
      M(),
      $r(),
      ti(),
      N(),
      mi(),
      P(),
      I(),
      F(),
      L(),
      R(),
      z(),
      la(),
      ma(),
      ga(),
      va(),
      ba(),
      G(),
      V(),
      B(),
      H(),
      U(),
      W(),
      K(),
      q(),
      uo(),
      po(),
      yo(),
      xo(),
      Co(),
      To(),
      Do(),
      Fo(),
      zo(),
      Vo(),
      Wo(),
      Jo(),
      Xo(),
      ts(),
      ks(),
      js(),
      Ns(),
      Fs(),
      Ws(),
      Nc(),
      Ic(),
      Rc(),
      Bc(),
      Wc(),
      Kc(),
      Jc(),
      Qc(),
      nl(),
      Y(),
      fl(),
      md(),
      xl(),
      Tl(),
      X(),
      Nl(),
      Q(),
      Z(),
      eu(),
      au(),
      _d(),
      xd(),
      Td(),
      Od(),
      Ad(),
      Md(),
      Pd(),
      $(),
      xf(),
      Of(),
      Mf(),
      Lf(),
      Pf(),
      Vf(),
      Kf(),
      Jf(),
      Zf(),
      rp(),
      ap(),
      yp(),
      lp(),
      dp(),
      pp(),
      hp(),
      Sp(),
      wp(),
      Dp(),
      Ap(),
      Mp(),
      Lp(),
      zp(),
      Up(),
      Qp(),
      Gp(),
      qp(),
      rm(),
      em(),
      cm(),
      um(),
      hm(),
      _m(),
      ym(),
      xm(),
      Cm(),
      Tm(),
      Dm(),
      km(),
      Nm(),
      Fm(),
      zm(),
      Bm(),
      Ym(),
      Hm(),
      Wm(),
      Km(),
      Xm(),
      Qm(),
      ih(),
      oh(),
      sh(),
      lh(),
      uh(),
      hh(),
      yh(),
      Ch(),
      Th(),
      Eh(),
      Dh(),
      Ah(),
      Nh(),
      Fh(),
      Lh(),
      zh(),
      Hh(),
      Wh(),
      Jh(),
      Qh(),
      eg(),
      ng(),
      ig(),
      og(),
      cg(),
      ug(),
      pg(),
      hg(),
      vg(),
      bg(),
      Cg(),
      Tg(),
      Mg(),
      Pg(),
      Ig(),
      Rg(),
      Bg(),
      Hg(),
      Wg(),
      Kg(),
      Jg(),
      Xg(),
      Qg(),
      t_(),
      a_(),
      s_(),
      l_(),
      m_(),
      y_(),
      S_(),
      E_(),
      k_(),
      M_(),
      P_(),
      R_(),
      B_(),
      H_(),
      W_(),
      q_(),
      X_(),
      tv(),
      rv(),
      av(),
      sv(),
      lv(),
      mv(),
      _v(),
      Sv(),
      wv(),
      kv(),
      jv(),
      Nv(),
      Iv(),
      Rv(),
      Bv(),
      Hv(),
      Gv(),
      qv(),
      Zv(),
      $v(),
      ty(),
      oy(),
      ly(),
      dy(),
      my(),
      _y(),
      by(),
      Cy(),
      Ty(),
      Dy(),
      My(),
      Py(),
      Iy(),
      By(),
      Hy(),
      Wy(),
      Ky(),
      Yy(),
      Qy(),
      eb(),
      nb(),
      ib(),
      db(),
      pb(),
      hb(),
      _b(),
      yb(),
      xb(),
      Cb(),
      Tb(),
      Db(),
      Ab(),
      Ib(),
      Rb(),
      Hb(),
      Wb(),
      Kb(),
      Qb(),
      ex(),
      nx(),
      ix(),
      ox(),
      cx(),
      mx(),
      ux(),
      gx(),
      vx(),
      bx(),
      wx(),
      Ex(),
      Ox(),
      $x(),
      nS(),
      oS(),
      cS(),
      uS(),
      mS(),
      _S(),
      bS(),
      SS(),
      TS(),
      DS(),
      kS(),
      NS(),
      FS(),
      LS(),
      zS(),
      VS(),
      WS(),
      KS(),
      tC(),
      sC(),
      lC(),
      dC(),
      mC(),
      vC(),
      xC(),
      CC(),
      TC(),
      DC(),
      kC(),
      MC(),
      PC(),
      LC(),
      zC(),
      UC(),
      YC(),
      ZC(),
      $C(),
      rw(),
      sw(),
      lw(),
      dw(),
      mw(),
      gw(),
      xw(),
      ww(),
      Ew(),
      Ow(),
      Aw(),
      Mw(),
      Pw(),
      Iw(),
      Bw(),
      Hw(),
      Gw(),
      Yw(),
      Zw(),
      $w(),
      tT(),
      rT(),
      aT(),
      sT(),
      lT(),
      dT(),
      pT(),
      hT(),
      _T(),
      yT(),
      xT(),
      CT(),
      HT(),
      ET(),
      GT(),
      qT(),
      QT(),
      eE(),
      rE(),
      iE(),
      oE(),
      cE(),
      dE(),
      pE(),
      hE(),
      xE(),
      CE(),
      EE(),
      jE(),
      NE(),
      RE(),
      HE(),
      WE(),
      KE(),
      JE(),
      XE(),
      QE(),
      eD(),
      rD(),
      aD(),
      cD(),
      uD(),
      fD(),
      mD(),
      gD(),
      vD(),
      yD(),
      bD(),
      SD(),
      wD(),
      ED(),
      OD(),
      AD(),
      MD(),
      PD(),
      ID(),
      RD(),
      BD(),
      HD(),
      KD(),
      JD(),
      XD(),
      OO());
  });
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function AO() {
  let [e, t] = p(!1);
  return (
    f(() => {
      t(!0);
    }, []),
    e
  );
}
var jO = e(() => {
    n();
  }),
  MO,
  NO,
  PO = e(() => {
    ((MO = {
      AED: `د.إ`,
      AFN: `Af`,
      ALL: `L`,
      AMD: `֏`,
      ANG: `ƒ`,
      AOA: `Kz`,
      ARS: `$`,
      AUD: `$`,
      AWG: `ƒ`,
      AZN: `₼`,
      BAM: `KM`,
      BBD: `$`,
      BDT: `৳`,
      BGN: `лв`,
      BHD: `د.ب`,
      BIF: `FBu`,
      BMD: `$`,
      BND: `$`,
      BOB: `Bs.`,
      BRL: `R$`,
      BSD: `$`,
      BTN: `Nu.`,
      BWP: `P`,
      BYN: `Br`,
      BZD: `BZ$`,
      CAD: `$`,
      CDF: `FC`,
      CHF: `Fr`,
      CLP: `$`,
      CNY: `¥`,
      COP: `$`,
      CRC: `₡`,
      CVE: `$`,
      CZK: `Kč`,
      DJF: `Fdj`,
      DKK: `kr`,
      DOP: `RD$`,
      DZD: `د.ج`,
      EGP: `£`,
      ERN: `Nfk`,
      ETB: `Br`,
      EUR: `€`,
      FJD: `$`,
      FKP: `£`,
      GBP: `£`,
      GEL: `₾`,
      GHS: `₵`,
      GIP: `£`,
      GMD: `D`,
      GNF: `FG`,
      GTQ: `Q`,
      GYD: `$`,
      HKD: `$`,
      HNL: `L`,
      HRK: `kn`,
      HTG: `G`,
      HUF: `Ft`,
      IDR: `Rp`,
      ILS: `₪`,
      INR: `₹`,
      IQD: `ع.د`,
      IRR: `﷼`,
      ISK: `kr`,
      JEP: `£`,
      JMD: `J$`,
      JOD: `د.ا`,
      JPY: `¥`,
      KES: `KSh`,
      KGS: `сом`,
      KHR: `៛`,
      KID: `$`,
      KMF: `CF`,
      KRW: `₩`,
      KWD: `د.ك`,
      KYD: `$`,
      KZT: `₸`,
      LAK: `₭`,
      LBP: `£`,
      LKR: `රු`,
      LRD: `$`,
      LSL: `L`,
      LTL: `Lt`,
      LVL: `Ls`,
      LYD: `ل.د`,
      MAD: `د.م.`,
      MDL: `MDL`,
      MGA: `Ar`,
      MKD: `ден`,
      MMK: `Ks`,
      MNT: `₮`,
      MOP: `MOP$`,
      MRU: `UM`,
      MUR: `₨`,
      MVR: `ރ`,
      MWK: `MK`,
      MXN: `$`,
      MYR: `RM`,
      MZN: `MT`,
      NAD: `$`,
      NGN: `₦`,
      NIO: `C$`,
      NOK: `kr`,
      NPR: `रू`,
      NZD: `$`,
      OMR: `ر.ع.`,
      PAB: `B/.`,
      PEN: `S/.`,
      PGK: `K`,
      PHP: `₱`,
      PKR: `₨`,
      PLN: `zł`,
      PYG: `₲`,
      QAR: `ر.ق`,
      RON: `lei`,
      RSD: `Дин.`,
      RUB: `₽`,
      RWF: `FRw`,
      SAR: `ر.س`,
      SBD: `$`,
      SCR: `₨`,
      SDG: `ج.س.`,
      SEK: `kr`,
      SGD: `$`,
      SHP: `£`,
      SLL: `Le`,
      SOS: `Sh`,
      SRD: `$`,
      SSP: `£`,
      STN: `Db`,
      SYP: `£`,
      SZL: `E`,
      THB: `฿`,
      TJS: `ЅМ`,
      TMT: `T`,
      TND: `د.ت`,
      TOP: `T$`,
      TRY: `₺`,
      TTD: `TT$`,
      TWD: `NT$`,
      TZS: `TSh`,
      UAH: `₴`,
      UGX: `USh`,
      USD: `$`,
      UYU: `$`,
      UZS: `so'm`,
      VED: `Bs.S.`,
      VES: `Bs.`,
      VND: `₫`,
      VUV: `VT`,
      WST: `T`,
      XAF: `FCFA`,
      XCD: `$`,
      XOF: `CFA`,
      XPF: `₣`,
      XXX: ``,
      YER: `﷼`,
      ZAR: `R`,
      ZMW: `ZK`,
      BYR: `Br`,
      STD: `Db`,
      VEF: `Bs.`,
    }),
      (NO =
        `CHF.PLN.SEK.NOK.DKK.CZK.HUF.RON.HRK.BGN.ISK.MDL.BYN.KZT.AMD.UZS.TJS.KGS.MNT.GEL.AFN.MRU.RWF.XAF.XOF.XPF`.split(
          `.`
        )));
  }),
  FO,
  IO,
  LO,
  RO = e(() => {
    (t(),
      (FO = () => {
        if (r === void 0) return `en`;
        let e = r.location.pathname.split(`/`).filter(Boolean),
          t =
            `ar.bg.bn.cs.da.de.el.en.es.fi.fr.he.hi.hr.hu.id.it.ja.ko.lt.ms.nb.nl.pl.ro.ru.sk.sl.sr.sv.ta.th.tr.uk.vi.pt-BR.pt-PT.zh-CN.zh-TW`.split(
              `.`
            ),
          n = (e) => {
            let t = e.toLowerCase();
            return t === `pt` || t.startsWith(`pt-`)
              ? t.length === 2
                ? `pt-BR`
                : `pt-${e.substring(3).toUpperCase()}`
              : t === `zh` || t.startsWith(`zh-`)
                ? t.length === 2
                  ? `zh-CN`
                  : `zh-${e.substring(3).toUpperCase()}`
                : t;
          };
        if (e[0]) {
          let r = n(e[0]);
          if (t.includes(r)) return r;
        }
        let i = sessionStorage.getItem(`checkoutLocale`);
        if (i) {
          let e = n(i);
          if (t.includes(e)) return e;
        }
        let a = localStorage.getItem(`checkoutLocale`);
        if (a) {
          let e = n(a);
          if (t.includes(e)) return e;
        }
        if (r.__FcCheckoutConfigs?.locale) {
          let e = n(r.__FcCheckoutConfigs.locale);
          if (t.includes(e)) return e;
        }
        return `en`;
      }),
      (IO = (e) => {
        if (!e) return e;
        try {
          let t = new URL(e),
            n = FO();
          return (
            t.searchParams.delete(`locale`),
            t.searchParams.append(`locale`, n),
            t.toString()
          );
        } catch (t) {
          return (console.error(`Error in appendLanguageToUrl:`, t), e);
        }
      }),
      (LO = (e) => {
        if (e)
          return (
            {
              US: `en-US`,
              CA: `en-CA`,
              QC: `fr-CA`,
              GB: `en-GB`,
              FR: `fr-FR`,
              DE: `de-DE`,
              IT: `it-IT`,
              ES: `es-ES`,
              PT: `pt-PT`,
              NL: `nl-NL`,
              BE: `fr-BE`,
              LU: `fr-LU`,
              CH: `de-CH`,
              AT: `de-AT`,
              SE: `sv-SE`,
              NO: `nb-NO`,
              DK: `da-DK`,
              FI: `fi-FI`,
              PL: `pl-PL`,
              CZ: `cs-CZ`,
              HU: `hu-HU`,
              RU: `ru-RU`,
              CN: `zh-CN`,
              JP: `ja-JP`,
              KR: `ko-KR`,
              IN: `en-IN`,
              AU: `en-AU`,
              NZ: `en-NZ`,
              MX: `es-MX`,
              BR: `pt-BR`,
              AR: `es-AR`,
              CL: `es-CL`,
              CO: `es-CO`,
              PE: `es-PE`,
              AE: `ar-AE`,
              SA: `ar-SA`,
              ZA: `en-ZA`,
              IL: `he-IL`,
            }[e] || void 0
          );
      }));
  });
function zO(e) {
  let {
      shopifyProductID: t,
      canvasPrice: n,
      format: { showCurrency: a, showSymbol: s, showDecimals: l, currencyCode: ee } = {},
      fromText: m = `from`,
    } = e,
    h = AO(),
    [g, te] = p(),
    [ne, re] = p(),
    [_, v] = p(() => {
      if (r !== void 0) {
        let e = r.__fc_activeSubscription?.[t];
        if (e?.price) return e.price;
      }
      return null;
    }),
    [ae, oe] = p(``),
    [se, y] = p(``),
    [ce, le] = p(``),
    [ue, de] = p(!1),
    [fe, pe] = p({}),
    [me, he] = p(``),
    [ge, _e] = p(!1),
    [ve, ye] = p(!1),
    [b, be] = p({ min: null, max: null }),
    xe = c(
      (e, t = !1) => {
        if (!e) return { min: null, max: null };
        let n = t ? `compareAtPriceRange` : `priceRange`,
          r = J(e, `${n}.minVariantPrice.amount`),
          i = J(e, `${n}.maxVariantPrice.amount`),
          a = r ? parseFloat(r) : null,
          o = i ? parseFloat(i) : null;
        if (a === null || isNaN(a) || o === null || isNaN(o)) {
          let n = e?.variants?.edges || [];
          if (n.length > 0) {
            let { min: e, max: r } = n.reduce(
              (e, { node: n }) => {
                if (!n) return e;
                let r = J(n, t ? `compareAtPrice.amount` : `price.amount`),
                  i = r ? parseFloat(r) : NaN;
                return (
                  !isNaN(i) &&
                    i > 0 &&
                    ((e.min === null || i < e.min) && (e.min = i),
                    (e.max === null || i > e.max) && (e.max = i)),
                  e
                );
              },
              { min: null, max: null }
            );
            ((a = e), (o = r));
          }
        }
        return {
          min: typeof a == `number` && !isNaN(a) ? a : null,
          max: typeof o == `number` && !isNaN(o) ? o : null,
        };
      },
      [ae]
    );
  (f(() => {
    if (!g || ve) return;
    let e = () => {
      let e = xe(g, !1);
      (be(e), ye(!0));
    };
    `requestIdleCallback` in r ? requestIdleCallback(e, { timeout: 200 }) : setTimeout(e, 100);
  }, [g, ve, xe]),
    f(() => {
      g && (ye(!1), be({ min: null, max: null }));
    }, [g]),
    f(() => {
      if (!h) return;
      let e = localStorage.getItem(`selectedCurrency`),
        t = localStorage.getItem(`selectedCountryCode`),
        n = localStorage.getItem(`selectedCountry`);
      (oe(e || `USD`), y(t || `US`), le(n || `United States`));
    }, [h]));
  let Se = c(
      async (e) => {
        if (
          !e.detail?.isPurchaseAction &&
          !(!e.detail || e.detail.productId !== `gid://shopify/Product/${t}`)
        ) {
          (he(e.detail.onClickAction), _e(!1), de(!0));
          try {
            let n = (r.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            if (n) {
              te(n.node);
              let t = n.node?.variants?.edges?.find(({ node: t }) =>
                t.selectedOptions.every((t) =>
                  e.detail.selectedOptions.find((e) => e.name === t.name && e.value === t.value)
                )
              );
              if (t)
                if (e.detail.onClickAction === `purchase`)
                  (re(null),
                    pe({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }));
                else if (e.detail?.isCompleteVariant === !1) {
                  if ((re(null), Array.isArray(e.detail.selectedOptions))) {
                    let t = {};
                    (e.detail.selectedOptions.forEach((e) => {
                      e?.name && (t[e.name] = e.value);
                    }),
                      pe(t));
                  }
                } else (re(t.node), pe({}));
            }
          } catch {
            if (e.detail?.isCompleteVariant)
              (re(e.detail), e.detail.onClickAction !== `purchase` && pe({}));
            else if ((re(null), Array.isArray(e.detail?.selectedOptions))) {
              let t = {};
              (e.detail.selectedOptions.forEach((e) => {
                e?.name && (t[e.name] = e.value);
              }),
                pe(t));
            }
          } finally {
            de(!1);
          }
        }
      },
      [t]
    ),
    Ce = c(
      (e) => {
        de(!0);
        let { currency: n, countryCode: i, country: a } = e.detail;
        (oe(n), y(i), le(a));
        try {
          let e = (r.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          if (e && (te(e.node), ne)) {
            let t = e.node.variants?.edges.find(({ node: e }) =>
              e.selectedOptions.every((e) =>
                ne.selectedOptions.find((t) => t.name === e.name && t.value === e.value)
              )
            );
            t && re(t.node);
          }
        } catch {
        } finally {
          de(!1);
        }
      },
      [t, ne]
    );
  (f(() => {
    if (h)
      return (
        r.addEventListener(`currency_changed`, Ce),
        () => {
          r.removeEventListener(`currency_changed`, Ce);
        }
      );
  }, [h, Ce]),
    f(() => {
      if (!h) return;
      let e = (e) => {
        if ((g && g.id === `gid://shopify/Product/${t}`) || !Array.isArray(e.detail?.products))
          return;
        let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        n &&
          (te(n.node), n.node?.variants?.edges?.length === 1 && re(n.node.variants.edges[0].node));
      };
      return (
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`product__active-variant__changed`, Se),
        () => {
          (document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`product__active-variant__changed`, Se));
        }
      );
    }, [h, t, ae, se, g]));
  let x = async () => {
    try {
      let e = (Array.isArray(r?.shopXtools?.products) ? r.shopXtools.products : []).find(
        ({ node: e }) => e.id === `gid://shopify/Product/${t}`
      );
      e
        ? (te(e.node), e.node?.variants?.edges?.length === 1 && re(e.node.variants.edges[0].node))
        : r?.shopXtools?.getProducts && r.shopXtools.getProducts(t);
    } catch (e) {
      console.error(`Error loading product:`, e);
    }
  };
  (f(() => {
    h && x();
  }, [h]),
    f(() => {
      if (!h || !g || !(g.variants?.edges?.length > 1)) return;
      _e(!0);
      let e = setTimeout(() => {
        _e(!1);
      }, 1e3);
      return () => {
        clearTimeout(e);
      };
    }, [h, g]),
    f(() => {
      if (!h) return;
      let e = r.__fc_activeSubscription?.[t];
      e?.price && !_ && v(e.price);
      let n = (e) => {
          (e.detail?.productId && e.detail.productId !== t) ||
            (e.detail?.price ? v(e.detail.price) : v(null));
        },
        i = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let n = e.detail?.productId,
            r = `gid://shopify/Product/${t}`;
          (n && n !== r) ||
            (_e(!1),
            de(!0),
            e.detail?.optionName &&
              e.detail?.value &&
              pe({ [e.detail.optionName]: e.detail.value }),
            de(!1));
        };
      return (
        document.addEventListener(`subscription__price-update`, n),
        document.addEventListener(`variant_option_selected`, i),
        document.addEventListener(`__variant_option_selected`, i),
        () => {
          (document.removeEventListener(`subscription__price-update`, n),
            document.removeEventListener(`variant_option_selected`, i),
            document.removeEventListener(`__variant_option_selected`, i));
        }
      );
    }, [h, t]),
    i(() => {
      let e = J(ne, `price.currencyCode`),
        t = J(g, `priceRange.minVariantPrice.currencyCode`);
      return e || t || `USD`;
    }, [ne, g]));
  let we = i(
      () => ie.current() === ie.canvas || (h && r.location.origin.endsWith(`framercanvas.com`)),
      [h]
    ),
    Te = (e, t) => {
      let n = BO(t),
        i = LO(se),
        c =
          l === `Always show` || (l !== `Never show` && (l !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!s && !a)
        return new Intl.NumberFormat(i, {
          style: `decimal`,
          minimumFractionDigits: c,
          maximumFractionDigits: c,
        }).format(e);
      if (t === `USD` && s)
        if (h && /iPad|iPhone|iPod/.test(o.userAgent) && !r.MSStream) {
          let t = new Intl.NumberFormat(i, {
              style: `decimal`,
              minimumFractionDigits: c,
              maximumFractionDigits: c,
            }).format(e),
            n;
          return ((n = a ? `$${t} USD` : `$${t}`), n);
        } else {
          let t;
          return (
            (t = a
              ? `${new Intl.NumberFormat(i, { style: `currency`, currency: `USD`, minimumFractionDigits: c, maximumFractionDigits: c, currencyDisplay: `narrowSymbol` }).format(e)} USD`
              : new Intl.NumberFormat(i, {
                  style: `currency`,
                  currency: `USD`,
                  minimumFractionDigits: c,
                  maximumFractionDigits: c,
                  currencyDisplay: `narrowSymbol`,
                }).format(e)),
            t
          );
        }
      return n && ((a && !s) || (s && !a) || (a && s))
        ? `${t} ${new Intl.NumberFormat(i, { style: `decimal`, minimumFractionDigits: c, maximumFractionDigits: c }).format(e)}`
        : !s && a
          ? `${new Intl.NumberFormat(i, { style: `decimal`, minimumFractionDigits: c, maximumFractionDigits: c }).format(e)} ${t}`
          : s && !a
            ? new Intl.NumberFormat(i, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: c,
                maximumFractionDigits: c,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(i, { style: `currency`, currency: t, minimumFractionDigits: c, maximumFractionDigits: c, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    Ee = i(() => {
      if (!h) return ``;
      if (ie !== void 0 && (ie.current() === ie.canvas || we)) {
        let t, r;
        if (n) {
          let e = n.split(`-`);
          e.length === 2 ? ((t = e[0].trim()), (r = e[1].trim())) : ((t = n), (r = n));
        }
        let i = parseFloat(t),
          a = parseFloat(r),
          o = ee || `USD`,
          s = Te(i, o);
        if (e.displayPrice === `minimum price`) return Math.abs(i - a) < 0.01 ? s : `${m} ${s}`;
        if (e.displayPrice === `range`) {
          let e = Te(a, o);
          return Math.abs(i - a) < 0.01 ? s : `${s} - ${e}`;
        }
        return s;
      }
      let t = _ || (ne && J(ne, `price.amount`));
      if (!t && !ne && !g?.priceRange) return ``;
      let r = ae || ee || `USD`,
        { min: i, max: a } = b.min === null ? xe(g, !1) : b;
      if (t) {
        let e = parseFloat(t);
        return isNaN(e) ? `` : Te(e, r);
      }
      if (g?.variants?.edges?.length === 1 && !ne) {
        let e = g.variants.edges[0].node;
        if (e?.price?.amount) {
          let t = parseFloat(e.price.amount);
          if (!isNaN(t)) return Te(t, r);
        }
      }
      let o = Object.keys(fe).length > 0,
        s = ne && ne.selectedOptions?.length > 0;
      if (o && !s && g?.variants?.edges?.length && me !== `purchase`) {
        let t = g.variants.edges.filter(({ node: e }) =>
          e.selectedOptions.every((e) => !fe[e.name] || fe[e.name] === e.value)
        );
        if (t.length > 0) {
          let n = t.map(({ node: e }) => parseFloat(e.price?.amount || `0`)).filter((e) => e > 0);
          if (n.length > 0) {
            let t = Math.min(...n),
              i = Math.max(...n),
              a = Te(t, r);
            if (e.displayPrice === `range`)
              return Math.abs(t - i) < 0.01 ? a : `${a} - ${Te(i, r)}`;
            if (e.displayPrice === `minimum price`) return Math.abs(t - i) < 0.01 ? a : `${m} ${a}`;
          }
        }
      }
      if ((!ne && g?.priceRange) || (me === `purchase` && g?.priceRange)) {
        if (ge) return ``;
        if (i) {
          let t = Te(i, r);
          if (a && Math.abs(i - a) > 0.01) {
            if (e.displayPrice === `range`) return `${t} - ${Te(a, r)}`;
            if (e.displayPrice === `minimum price`) return Math.abs(i - a) < 0.01 ? t : `${m} ${t}`;
          }
          return e.displayPrice === `range` || (a && Math.abs(i - a) < 0.01) ? t : `${m} ${t}`;
        }
        let t = J(g, `priceRange.minVariantPrice.amount`),
          n = J(g, `priceRange.maxVariantPrice.amount`);
        if (t) {
          let i = parseFloat(t);
          if (!isNaN(i) && i > 0) {
            let t = Te(i, r);
            if (e.displayPrice === `range`) {
              if (n) {
                let e = parseFloat(n);
                if (!isNaN(e) && e > 0 && Math.abs(i - e) > 0.01) return `${t} - ${Te(e, r)}`;
              }
              return t;
            }
            if (n) {
              let e = parseFloat(n);
              if (!isNaN(e) && Math.abs(i - e) < 0.01) return t;
            }
            return `${m} ${t}`;
          }
        }
      }
      return ``;
    }, [h, we, ne, g, n, a, s, ee, l, ae, se, _, e.displayPrice, fe, me, m, ge, xe]),
    S = i(() => {
      if (Object.keys(fe).length > 0 && g?.variants?.edges?.length) {
        let e = g.variants.edges.filter(({ node: e }) =>
          e.selectedOptions.every((e) => !fe[e.name] || fe[e.name] === e.value)
        );
        if (
          !e.every(({ node: e }) => {
            let t = J(e, `compareAtPrice.amount`);
            return t && parseFloat(t) > 0;
          })
        )
          return ``;
        let t = e
          .map(({ node: e }) => parseFloat(J(e, `compareAtPrice.amount`) || `0`))
          .filter((e) => e > 0);
        if (t.length > 0) {
          let e = Math.min(...t);
          return Te(e, ae || ee || `USD`);
        }
      }
      if (ne) {
        let e = J(ne, `compareAtPrice.amount`);
        if (!e) return ``;
        let t = parseFloat(e);
        return isNaN(t) || t <= 0 ? `` : Te(t, ae || ee || `USD`);
      }
      if (g?.variants?.edges?.length) {
        if (
          !g.variants.edges.every(({ node: e }) => {
            let t = J(e, `compareAtPrice.amount`);
            return t && parseFloat(t) > 0;
          })
        )
          return ``;
        let e = J(g, `compareAtPriceRange.minVariantPrice.amount`);
        if (!e) return ``;
        let t = parseFloat(e);
        return isNaN(t) || t <= 0 ? `` : Te(t, ae || ee || `USD`);
      }
      return ``;
    }, [ne, g, fe, ee, a, s, l, ae, se, we, e.format]),
    De = i(() => parseFloat(S.replace(/[^\d.-]/g, ``)), [S]),
    Oe = !isNaN(De) && De > 0;
  i(() => {
    if (we) return !0;
    if (!Ee) return !1;
    let e = parseFloat(Ee.replace(/[^\d.-]/g, ``));
    return !isNaN(e) && e > 0;
  }, [Ee, we]);
  let ke = i(() => {
    let t = {
        margin: 0,
        padding: 0,
        lineHeight: 1,
        whiteSpace: `nowrap`,
        display: `inline-block`,
        width: `auto`,
      },
      n = Oe ? e.saleFont : e.regularFont,
      r = Oe ? e.saleColor : e.regularColor;
    return { ...t, ...n, color: r };
  }, [Oe, e.saleFont, e.regularFont, e.saleColor, e.regularColor]);
  if (!h || ue || (!g && !ne && !_ && !we)) return u(`div`, { style: { display: `none` } });
  let Ae = g && !ve && g.variants?.edges?.length > 1;
  return u(`div`, {
    style: {
      display: `inline-block`,
      maxWidth: `100%`,
      width: `auto`,
      whiteSpace: `nowrap`,
      overflow: `visible`,
      transform: `none`,
      transition: `none`,
      animation: `none`,
      willChange: `auto`,
    },
    children: d(`p`, {
      style: {
        ...ke,
        transform: `none`,
        transition: `none`,
        animation: `none`,
        willChange: `auto`,
      },
      children: [
        Ee,
        Ae &&
          u(`span`, {
            style: { opacity: 0.6, fontSize: `0.8em`, marginLeft: `4px` },
            children: `...`,
          }),
      ],
    }),
  });
}
var BO,
  VO = e(() => {
    (t(),
      s(),
      n(),
      _(),
      kO(),
      jO(),
      PO(),
      RO(),
      (BO = (e) => {
        if (!e) return !1;
        if (NO.includes(e)) return !0;
        try {
          return (
            new Intl.NumberFormat(void 0, {
              style: `currency`,
              currency: e,
              currencyDisplay: `narrowSymbol`,
            })
              .format(0)
              .replace(/[0-9.,\s]/g, ``) === e
          );
        } catch {
          return !1;
        }
      }),
      (zO.defaultProps = {
        shopifyProductID: ``,
        canvasPrice: `50.00`,
        fromText: `from`,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      re(zO, {
        shopifyProductID: {
          type: v.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        canvasPrice: {
          type: v.String,
          title: `Price`,
          defaultValue: `50.00`,
          description: `Connect to CMS (for canvas preview only).`,
        },
        displayPrice: {
          type: v.Enum,
          title: `Varying Prices`,
          options: [`minimum price`, `range`],
          optionTitles: [`Minimum Price`, `Range`],
          defaultValue: `minimum price`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          description: `When a product has multiple prices and a variant has not been selected.`,
        },
        fromText: {
          type: v.String,
          title: `Prefix`,
          placeholder: `from`,
          defaultValue: `from`,
          hidden: (e) => e.displayPrice !== `minimum price`,
        },
        format: {
          type: v.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: v.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: v.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: v.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: v.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency is for canvas preview only.`,
            },
          },
        },
        regularFont: { type: v.Font, title: `Regular`, controls: `extended` },
        regularColor: { type: v.Color, title: `↳ Color`, defaultValue: `#000` },
        saleFont: { type: v.Font, title: `Sale`, controls: `extended` },
        saleColor: { type: v.Color, title: `↳ Color`, defaultValue: `#FF0000` },
      }));
  });
function HO(e) {
  let {
      shopifyProductID: t,
      canvasPrice: n,
      format: { showCurrency: s, showSymbol: l, showDecimals: d, currencyCode: ee } = {},
      strikethrough: m,
      strikethroughColor: h,
      strikethroughSize: g,
      font: te,
      color: ne,
      compareAtPrefix: re = ``,
    } = e,
    [_, v] = p(),
    [ae, oe] = p(),
    [se, y] = p(``),
    [ce, le] = p(``),
    [ue, de] = p(``),
    [fe, pe] = p({}),
    [me, he] = p(``),
    ge = AO(),
    _e = c((e) => {
      if (!e) return e;
      let t = e?.variants?.edges;
      return Array.isArray(t)
        ? e
        : { ...e, variants: { ...(e.variants || {}), edges: Array.isArray(t) ? t : [] } };
    }, []);
  f(() => {
    if (!ge) return;
    let e = localStorage.getItem(`selectedCurrency`),
      t = localStorage.getItem(`selectedCountryCode`),
      n = localStorage.getItem(`selectedCountry`);
    (y(e || `USD`), le(t || `US`), de(n || `United States`));
  }, [ge]);
  let ve = i(() => {
      let e = J(ae, `price.currencyCode`),
        t = J(_, `priceRange.minVariantPrice.currencyCode`);
      return e || t || `USD`;
    }, [ae, _]),
    ye = i(
      () =>
        ie !== void 0 &&
        (ie.current() === ie.canvas || (ge && r.location.origin.endsWith(`framercanvas.com`))),
      [ge]
    ),
    b = a(new Map()),
    be = c(
      (e) => {
        if (!e) return { min: null, max: null };
        let t = ve || se || `USD`,
          n = `${e.id || `no-id`}-${t}-compare`;
        if (b.current.has(n)) return b.current.get(n);
        let r = J(e, `compareAtPriceRange.minVariantPrice.amount`),
          i = J(e, `compareAtPriceRange.maxVariantPrice.amount`),
          a = r ? parseFloat(r) : null,
          o = i ? parseFloat(i) : null;
        if (a === null || isNaN(a) || o === null || isNaN(o)) {
          let t = e?.variants?.edges || [];
          for (let e = 0; e < (Array.isArray(t) ? t.length : 0); e++) {
            let n = t[e]?.node;
            if (!n) continue;
            let r = J(n, `compareAtPrice.amount`),
              i = r ? parseFloat(r) : NaN;
            !isNaN(i) &&
              i > 0 &&
              ((a === null || i < a) && (a = i), (o === null || i > o) && (o = i));
          }
        }
        let s = {
          min: typeof a == `number` && !isNaN(a) ? a : null,
          max: typeof o == `number` && !isNaN(o) ? o : null,
        };
        return (b.current.set(n, s), s);
      },
      [ve, se]
    ),
    xe = i(() => be(_), [_, be]),
    Se = (e, t) => {
      let n = WO(t),
        i = UO(ce),
        a =
          d === `Always show` || (d !== `Never show` && (d !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!l && !s)
        return new Intl.NumberFormat(i, {
          style: `decimal`,
          minimumFractionDigits: a,
          maximumFractionDigits: a,
        }).format(e);
      if (t === `USD` && l)
        if (ge && /iPad|iPhone|iPod/.test(o.userAgent) && !(`MSStream` in r)) {
          let t = new Intl.NumberFormat(i, {
            style: `decimal`,
            minimumFractionDigits: a,
            maximumFractionDigits: a,
          }).format(e);
          return s ? `$${t} USD` : `$${t}`;
        } else if (s)
          return `${new Intl.NumberFormat(i, { style: `currency`, currency: `USD`, minimumFractionDigits: a, maximumFractionDigits: a, currencyDisplay: `narrowSymbol` }).format(e)} USD`;
        else
          return new Intl.NumberFormat(i, {
            style: `currency`,
            currency: `USD`,
            minimumFractionDigits: a,
            maximumFractionDigits: a,
            currencyDisplay: `narrowSymbol`,
          }).format(e);
      return n && ((s && !l) || (l && !s) || (s && l))
        ? `${t} ${new Intl.NumberFormat(i, { style: `decimal`, minimumFractionDigits: a, maximumFractionDigits: a }).format(e)}`
        : !l && s
          ? `${new Intl.NumberFormat(i, { style: `decimal`, minimumFractionDigits: a, maximumFractionDigits: a }).format(e)} ${t}`
          : l && !s
            ? new Intl.NumberFormat(i, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(i, { style: `currency`, currency: t, minimumFractionDigits: a, maximumFractionDigits: a, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    Ce = i(() => {
      if (!ge) return ``;
      if (ie !== void 0 && (ie.current() === ie.canvas || ye)) {
        let e, t;
        if (n) {
          let r = n.split(`-`);
          Array.isArray(r) && r.length === 2
            ? ((e = r[0].trim()), (t = r[1].trim()))
            : ((e = n), (t = n));
        }
        let r = parseFloat(e),
          i = parseFloat(t),
          a = ee || `USD`;
        if (r === i && r > 0 && i > 0) {
          let e = Se(r, a);
          return re ? `${re} ${e}` : e;
        } else return ``;
      }
      let e = ae && J(ae, `compareAtPrice.amount`),
        { min: t, max: r } = xe;
      if (!e && !ae && !_?.compareAtPriceRange && !(t && r)) return ``;
      let i = se || ee || `USD`;
      if (e) {
        let t = parseFloat(e);
        if (isNaN(t)) return ``;
        let n = Se(t, i);
        return re ? `${re} ${n}` : n;
      }
      let a = Object.keys(fe || {}).length > 0,
        o = ae && Array.isArray(ae.selectedOptions) && ae.selectedOptions.length > 0;
      if (o && me === `purchase` && _?.variants?.edges?.length) return ``;
      let s = Array.isArray(_?.variants?.edges) && (_?.variants?.edges?.length || 0) > 0;
      if (a && !o && s) {
        let e = (_?.variants?.edges || []).filter(({ node: e }) =>
          e.selectedOptions.every((e) => !fe[e.name] || fe[e.name] === e.value)
        );
        if (Array.isArray(e) && e.length > 0) {
          let t = e
            .map(({ node: e }) => J(e, `compareAtPrice.amount`))
            .filter((e) => e && e !== `0` && e !== `0.00`);
          if (
            !Array.isArray(t) ||
            t.length === 0 ||
            !e.every(({ node: e }) => {
              let t = J(e, `compareAtPrice.amount`);
              return t && t !== `0` && t !== `0.00`;
            })
          )
            return ``;
          let n = t.map((e) => parseFloat(e)).filter((e) => !isNaN(e) && e > 0);
          if (!Array.isArray(n) || n.length === 0) return ``;
          let r = Math.min(...n),
            a = Math.max(...n);
          if (Math.abs(r - a) < 0.01) {
            let e = Se(r, i);
            return re ? `${re} ${e}` : e;
          } else return ``;
        }
      }
      if (!ae && !a && s) {
        if (
          !(_?.variants?.edges || []).every(({ node: e }) => {
            let t = J(e, `compareAtPrice.amount`);
            return t && t !== `0` && t !== `0.00`;
          })
        )
          return ``;
        let e = t,
          n = r;
        if (e && n)
          if (Math.abs(e - n) < 0.01) {
            let t = Se(e, i);
            return re ? `${re} ${t}` : t;
          } else return ``;
        return ``;
      }
      return ``;
    }, [ge, ye, ae, _, n, s, l, ee, d, se, ce, fe, me, re, e.format]),
    x = i(() => (ye ? n && n.trim() !== `` : Ce && Ce.trim() !== ``), [ye, n, Ce]);
  return (
    f(() => {
      if (!ge) return;
      let e = (e) => {
        let { currency: n, countryCode: i, country: a } = e.detail;
        (y(n), le(i), de(a));
        try {
          let e = (r.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          if (e && (v(_e(e.node)), ae)) {
            let t = (e?.node?.variants?.edges || []).find(({ node: e }) => {
              let t = Array.isArray(e?.selectedOptions) ? e.selectedOptions : [],
                n = Array.isArray(ae?.selectedOptions) ? ae.selectedOptions : [];
              return t.every((e) => n.some((t) => t?.name === e?.name && t?.value === e?.value));
            });
            t && oe(t.node);
          }
        } catch {}
      };
      return (
        r.addEventListener(`currency_changed`, e),
        () => {
          r.removeEventListener(`currency_changed`, e);
        }
      );
    }, [ge, t, ae, se, ce]),
    f(() => {
      if (!ge) return;
      let e = (e) => {
          if (!(e.detail?.isPurchaseAction || e.detail?.onClickAction === `purchase`))
            try {
              let n = `gid://shopify/Product/${t}`;
              if (e.detail && (!e.detail.productId || e.detail.productId !== n)) return;
              if (
                (e.detail.productId !== n && he(e.detail.onClickAction),
                e.detail?.isCompleteVariant === !1)
              ) {
                if ((oe(null), Array.isArray(e.detail.selectedOptions))) {
                  let t = {};
                  (e.detail.selectedOptions.forEach((e) => {
                    e?.name && (t[e.name] = e.value);
                  }),
                    pe(t));
                }
                return;
              }
              let i = (r.shopXtools?.products || []).find(
                ({ node: e }) => e.id === `gid://shopify/Product/${t}`
              );
              if (i) {
                v(_e(i.node));
                let t = (i?.node?.variants?.edges || []).find(({ node: t }) => {
                  let n = Array.isArray(t?.selectedOptions) ? t.selectedOptions : [],
                    r = Array.isArray(e.detail?.selectedOptions) ? e.detail.selectedOptions : [];
                  return n.every((e) =>
                    r.some((t) => t?.name === e?.name && t?.value === e?.value)
                  );
                });
                t
                  ? e.detail.onClickAction === `purchase`
                    ? (oe(null),
                      pe({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }))
                    : (oe(t.node), pe({}))
                  : e.detail?.isCompleteVariant &&
                    (oe(e.detail), e.detail.onClickAction !== `purchase` && pe({}));
              }
            } catch {
              if (e.detail?.isCompleteVariant)
                (oe(e.detail), e.detail.onClickAction !== `purchase` && pe({}));
              else if ((oe(null), Array.isArray(e.detail?.selectedOptions))) {
                let t = {};
                (e.detail.selectedOptions.forEach((e) => {
                  e?.name && (t[e.name] = e.value);
                }),
                  pe(t));
              }
            }
        },
        n = (e) => {
          if (Array.isArray(e.detail.products)) {
            let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
            (v(n ? _e(n.node) : null),
              Array.isArray(n?.node?.variants?.edges) &&
                (n?.node?.variants?.edges?.length || 0) === 1 &&
                oe(n.node.variants.edges[0].node));
          }
        },
        i = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let n = e.detail?.productId,
            r = `gid://shopify/Product/${t}`;
          (n && n !== r) ||
            (e.detail?.optionName &&
              e.detail?.value &&
              pe({ [e.detail.optionName]: e.detail.value }));
        };
      if (
        ((async () => {
          try {
            let e = (r.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            e &&
              (v(_e(e.node)),
              Array.isArray(e.node?.variants?.edges) &&
                (e?.node?.variants?.edges?.length || 0) === 1 &&
                oe(e.node.variants.edges[0].node));
          } catch {}
        })(),
        r.shopXtools?.products)
      ) {
        let e = r.shopXtools.products;
        if (Array.isArray(e) && e.length > 0) {
          let n = e.find(({ node: e }) => e?.id === `gid://shopify/Product/${t}`);
          n?.node
            ? (v(_e(n.node)),
              Array.isArray(n.node?.variants?.edges) &&
                (n?.node?.variants?.edges?.length || 0) === 1 &&
                oe(n.node.variants.edges[0].node))
            : v(null);
        }
      }
      return (
        document.addEventListener(`data__products-ready`, n),
        document.addEventListener(`product__active-variant__changed`, e),
        document.addEventListener(`variant_option_selected`, i),
        document.addEventListener(`__variant_option_selected`, i),
        () => {
          (document.removeEventListener(`data__products-ready`, n),
            document.removeEventListener(`product__active-variant__changed`, e),
            document.removeEventListener(`variant_option_selected`, i),
            document.removeEventListener(`__variant_option_selected`, i));
        }
      );
    }, [ge, t, se]),
    ge
      ? x
        ? u(`div`, {
            style: {
              display: `inline-block`,
              maxWidth: `100%`,
              width: `auto`,
              whiteSpace: `nowrap`,
              overflow: `visible`,
              transform: `none`,
              transition: `none`,
              animation: `none`,
              willChange: `auto`,
            },
            children: u(`p`, {
              style: {
                ...te,
                color: ne,
                margin: 0,
                padding: 0,
                lineHeight: 1,
                textDecoration: m ? `line-through` : `none`,
                textDecorationColor: h,
                textDecorationThickness: m ? `${g}px` : void 0,
                whiteSpace: `nowrap`,
                display: `inline-block`,
                width: `auto`,
                transform: `none`,
                transition: `none`,
                animation: `none`,
                willChange: `auto`,
              },
              children: Ce,
            }),
          })
        : null
      : u(`div`, { style: { display: `none` } })
  );
}
var UO,
  WO,
  GO = e(() => {
    (t(),
      s(),
      n(),
      _(),
      kO(),
      jO(),
      PO(),
      (UO = (e) => {
        if (e)
          return (
            {
              US: `en-US`,
              CA: `en-CA`,
              QC: `fr-CA`,
              GB: `en-GB`,
              FR: `fr-FR`,
              DE: `de-DE`,
              IT: `it-IT`,
              ES: `es-ES`,
              PT: `pt-PT`,
              NL: `nl-NL`,
              BE: `fr-BE`,
              LU: `fr-LU`,
              CH: `de-CH`,
              AT: `de-AT`,
              SE: `sv-SE`,
              NO: `nb-NO`,
              DK: `da-DK`,
              FI: `fi-FI`,
              PL: `pl-PL`,
              CZ: `cs-CZ`,
              HU: `hu-HU`,
              RU: `ru-RU`,
              CN: `zh-CN`,
              JP: `ja-JP`,
              KR: `ko-KR`,
              IN: `en-IN`,
              AU: `en-AU`,
              NZ: `en-NZ`,
              MX: `es-MX`,
              BR: `pt-BR`,
              AR: `es-AR`,
              CL: `es-CL`,
              CO: `es-CO`,
              PE: `es-PE`,
              AE: `ar-AE`,
              SA: `ar-SA`,
              ZA: `en-ZA`,
              IL: `he-IL`,
            }[e] || void 0
          );
      }),
      (WO = (e) => {
        if (!e) return !1;
        if (NO.includes(e)) return !0;
        try {
          return (
            new Intl.NumberFormat(void 0, {
              style: `currency`,
              currency: e,
              currencyDisplay: `narrowSymbol`,
            })
              .format(0)
              .replace(/[0-9.,\s]/g, ``) === e
          );
        } catch {
          return !1;
        }
      }),
      (HO.defaultProps = {
        shopifyProductID: ``,
        strikethrough: !0,
        strikethroughColor: `#000000`,
        strikethroughSize: 1,
        canvasPrice: `75.00`,
        compareAtPrefix: ``,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      re(HO, {
        shopifyProductID: {
          type: v.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        canvasPrice: {
          type: v.String,
          title: `Compare Price`,
          description: `Connect to CMS (for canvas preview only).`,
          defaultValue: `75.00`,
        },
        compareAtPrefix: { type: v.String, title: `Prefix`, placeholder: `was`, defaultValue: `` },
        format: {
          type: v.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: v.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: v.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: v.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: v.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency on your site is automatic, this is only shown in canvas preview.`,
            },
          },
        },
        font: { type: v.Font, title: `Font`, controls: `extended` },
        color: { type: v.Color, title: `Color`, defaultValue: `#000` },
        strikethrough: { type: v.Boolean, title: `Strike`, defaultValue: !0 },
        strikethroughSize: {
          type: v.Number,
          title: `↳ Size`,
          defaultValue: 1,
          min: 0,
          max: 8,
          step: 0.1,
          hidden: (e) => !e.strikethrough,
        },
        strikethroughColor: {
          type: v.Color,
          title: `↳ Color`,
          defaultValue: `#000000`,
          hidden: (e) => !e.strikethrough,
        },
      }));
  });
function KO(e) {
  let t = AO(),
    [n, i] = p(1),
    a = Array.from({ length: 250 }, (t, n) => ({
      image: e[`image${n + 1}`],
      imageNumber: n + 1,
    })).filter((e) => e.image),
    o = a.find((e) => e.imageNumber === n)?.image || a[0]?.image || ``;
  return (
    f(() => {
      if (!t || !a.length) return;
      function n(t) {
        if (t.detail && t.detail.imageNumber) {
          if (
            e.shopifyProductID &&
            t.detail.shopifyProductID !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          let n = parseInt(t.detail.imageNumber);
          !isNaN(n) && a.some((e) => e.imageNumber === n) && i(n);
        }
      }
      return (
        document.addEventListener(`variant__image__match`, n),
        () => {
          document.removeEventListener(`variant__image__match`, n);
        }
      );
    }, [t, a]),
    t
      ? u(`div`, {
          style: {
            width: `100%`,
            height: `100%`,
            display: e.type === `Fill` ? `block` : `flex`,
            alignItems: e.type === `Fill` ? `stretch` : `center`,
            justifyContent: e.type === `Fill` ? `stretch` : `center`,
            backgroundColor: e.Style?.backgroundColor || `#f5f5f5`,
            padding: e.Style?.paddingPerSide
              ? `${e.Style.paddingTop}px ${e.Style.paddingRight}px ${e.Style.paddingBottom}px ${e.Style.paddingLeft}px`
              : e.Style?.padding || 0,
            borderRadius: e.Style?.radiusPerCorner
              ? `${e.Style.radiusTopLeft}px ${e.Style.radiusTopRight}px ${e.Style.radiusBottomRight}px ${e.Style.radiusBottomLeft}px`
              : `${e.Style?.borderRadius || 0}px`,
            overflow: `hidden`,
            position: `relative`,
          },
          children: o
            ? u(`img`, {
                src: o,
                alt: ``,
                style: {
                  width: `100%`,
                  height: `100%`,
                  objectFit: e.type === `Fill` ? `cover` : `contain`,
                  borderRadius: e.Style?.radiusPerCorner
                    ? `${e.Style.radiusTopLeft}px ${e.Style.radiusTopRight}px ${e.Style.radiusBottomRight}px ${e.Style.radiusBottomLeft}px`
                    : `${e.Style?.borderRadius || 0}px`,
                  display: `block`,
                  position: e.type === `Fill` ? `absolute` : `relative`,
                  top: e.type === `Fill` ? 0 : `auto`,
                  left: e.type === `Fill` ? 0 : `auto`,
                  minHeight: 0,
                  minWidth: 0,
                },
              })
            : r !== void 0 &&
              r.location.hostname.includes(`framercanvas.com`) &&
              d(`svg`, {
                width: `40%`,
                height: `40%`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `#9e9e9e`,
                strokeWidth: `2`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                children: [
                  u(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, ry: `2` }),
                  u(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
                  u(`polyline`, { points: `21 15 16 10 5 21` }),
                ],
              }),
        })
      : u(`div`, { style: { width: `100%`, height: `100%` } })
  );
}
var qO,
  JO,
  YO,
  XO = e(() => {
    (t(),
      s(),
      n(),
      _(),
      jO(),
      (qO = {
        shopifyProductID: {
          type: v.String,
          title: `Product ID`,
          description: `Connect to Product ID from CMS (required)`,
        },
        Style: {
          type: v.Object,
          title: `Style`,
          controls: {
            backgroundColor: { type: v.Color, title: `BG`, defaultValue: `#FFFFFF00` },
            borderRadius: {
              type: v.FusedNumber,
              title: `Radius`,
              defaultValue: 0,
              toggleKey: `radiusPerCorner`,
              toggleTitles: [`All`, `Corners`],
              valueKeys: [
                `radiusTopLeft`,
                `radiusTopRight`,
                `radiusBottomRight`,
                `radiusBottomLeft`,
              ],
              valueLabels: [`TL`, `TR`, `BR`, `BL`],
              min: 0,
              max: 100,
              unit: `px`,
            },
            padding: {
              type: v.FusedNumber,
              title: `Padding`,
              defaultValue: 0,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
          },
        },
        type: {
          type: v.Enum,
          title: `Type`,
          options: [`Fill`, `Fit`],
          defaultValue: `Fill`,
          displaySegmentedControl: !0,
        },
        images: {
          type: v.Enum,
          title: `Images`,
          options: [`Auto`, `Set`],
          defaultValue: `Auto`,
          displaySegmentedControl: !0,
        },
      }),
      (JO = (e) => e.images === `Set`),
      (qO.amount = {
        type: v.Number,
        title: `Amount`,
        defaultValue: 8,
        min: 1,
        max: 250,
        step: 1,
        displayStepper: !0,
        hidden: (e) => !JO(e),
      }));
    for (let e = 1; e <= 250; e++) {
      let t = (t) => (t.images === `Set` ? e <= (t.amount || 8) : e === 1 || t[`image${e - 1}`]);
      qO[`image${e}`] = { type: v.Image, title: `Image ${e}`, hidden: (e) => !t(e) };
    }
    (re(KO, qO),
      (YO = {
        shopifyProductID: ``,
        type: `Fill`,
        images: `Auto`,
        amount: 8,
        Style: { backgroundColor: `#f5f5f5`, borderRadius: 0, padding: 0 },
      }));
    for (let e = 1; e <= 250; e++) YO[`image${e}`] = ``;
    KO.defaultProps = YO;
  }),
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
  sk = e(() => {
    ((ZO = `
  mutation createCart($lines: [CartLineInput!]!, $countryCode: CountryCode) {
    cartCreate(input: { lines: $lines, buyerIdentity: { countryCode: $countryCode } }) {
      cart {
        id
        checkoutUrl
        buyerIdentity {
          countryCode
        }
        attributes {
          key
          value
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`),
      (QO = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        buyerIdentity {
          countryCode
        }
        attributes {
          key
          value
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    id
                    title
                    metafields(
                      identifiers: [
                        { namespace: "custom", key: "order_max" }
                      ]
                    ) {
                      namespace
                      key
                      value
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`),
      ($O = `
  mutation cartAttributesUpdate($cartId: ID!, $attributes: [AttributeInput!]!) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        id
        attributes {
          key
          value
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`),
      (ek = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        buyerIdentity {
          countryCode
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    id
                    handle
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`),
      (tk = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
              id
              buyerIdentity {
                countryCode
              }
              lines(first: 250) {
                  edges {
                      node {
                          id
                          quantity
                          sellingPlanAllocation{ 
                              checkoutChargeAmount{
                                  amount
                                  currencyCode
                                  }
                          }
                          cost {
                              totalAmount {
                                  amount
                                  currencyCode
                              }
                              subtotalAmount {
                                  amount
                                  currencyCode
                              }
                          }
                          merchandise {
                              ... on ProductVariant {
                                  id
                                  title
                                  product {
                                      id
                                      title
                                  }
                                  price {
                                      amount
                                      currencyCode
                                  }
                                  image {
                                      url
                                  }
                                      selectedOptions
                            {
                              name
                              value
                            }
                              }
                          }
                      }
                  }
              }
          }
          userErrors {
              field
              message
          }
      }
  }`),
      (nk = `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
              id
              buyerIdentity {
                countryCode
              }
              cost {
                  totalAmount {
                      amount
                      currencyCode
                  }
                  subtotalAmount {
                      amount
                      currencyCode
                  }
              }
              lines(first: 250) {
                  edges {
                      node {
                          id
                          quantity
                          cost {
                              totalAmount {
                                  amount
                                  currencyCode
                              }
                              subtotalAmount {
                                  amount
                                  currencyCode
                              }
                          }
                          merchandise {
                              ... on ProductVariant {
                                  id
                                  title
                                  product {
                                      id
                                      title
                                  }
                                  price {
                                      amount
                                      currencyCode
                                  }
                                  image {
                                      url
                                  }
                                  selectedOptions
                                  {
                              name
                              value
                            }

                              }
                          }
                      }
                  }
              }
          }
          userErrors {
              field
              message
          }
      }
  }`),
      (rk = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
              id
              buyerIdentity {
                countryCode
              }
              lines(first: 250) {
                  edges {
                      node {
                          id
                          quantity
                          cost {
                              totalAmount {
                                  amount
                                  currencyCode
                              }
                              subtotalAmount {
                                  amount
                                  currencyCode
                              }
                          }
                          merchandise {
                              ... on ProductVariant {
                                  id
                                  title
                                  product {
                                      id
                                      title
                                  }
                                  price {
                                      amount
                                      currencyCode
                                  }
                                  image {
                                      url
                                  }
                                      selectedOptions
                            {
                              name
                              value
                            }
                              }
                          }
                      }
                  }
              }
          }
          userErrors {
              field
              message
          }
      }
  }`),
      (ik = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      buyerIdentity {
        countryCode
      }
      attributes {
        key
        value
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            attributes {
              key
              value
            }
            merchandise {
              ... on ProductVariant {
                id
                product {
                  id
                  title
                  metafields(
                    identifiers: [
                      { namespace: "custom", key: "order_max" }
                    ]
                  ) {
                    namespace
                    key
                    value
                  }
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
            sellingPlanAllocation {
              sellingPlan {
                id
                name
              }
              checkoutChargeAmount {
                amount
                currencyCode
              }
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
`),
      (ak = `
  query getProductMetafields($handle: String!) {
    product(handle: $handle) {
      id
      metafield_order_max: metafield(namespace: "custom", key: "order_max") {
        value
        type
      }
    }
  }
`),
      (ok = `
  mutation updateCartCurrency($cartId: ID!, $countryCode: CountryCode) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: { countryCode: $countryCode }) {
      cart {
        id
        buyerIdentity {
          countryCode
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`));
  }),
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk = e(() => {
    (t(),
      (ck = (e) => e?.split(`/`).pop() || ``),
      (lk = () =>
        r !== void 0 && r.FCConsentManager ? r.FCConsentManager.getConsent().marketing === !0 : !0),
      (uk = (e) => {
        if (!lk()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let { variant: t, product: n, quantity: r = 1, currency: i = `USD` } = e;
        if (!t || !n) {
          console.warn(`Missing variant or product data for Facebook Pixel tracking`);
          return;
        }
        let a = ck(t.id),
          o = n.title || ``;
        t.title;
        let s = parseFloat(t.price?.amount || `0`),
          c = s * r,
          l = t.price?.currencyCode || i;
        if (!a || !o || s <= 0) {
          console.warn(`❌ Skipping Facebook Pixel AddToCart: missing required data`, {
            item_id: a,
            item_name: o,
            price: s,
            value: c,
          });
          return;
        }
        let u = {
          content_type: `product`,
          content_ids: [a],
          content_name: o,
          content_category: n.productType || ``,
          content_brand: n.vendor || ``,
          value: parseFloat(c.toFixed(2)),
          currency: l,
          contents: [{ id: a, price: parseFloat(s.toFixed(2)), quantity: parseInt(r.toString()) }],
        };
        fbq(`track`, `AddToCart`, u, { eventID: `addtocart_` + Date.now() });
      }),
      (dk = (e) => {
        if (!lk()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let {
            variant: t,
            product: n,
            quantity: r = 1,
            currency: i = `USD`,
            value: a,
            content_ids: o,
            content_name: s,
            num_items: c,
          } = e,
          l = { content_type: `product`, currency: i };
        if (t && n) {
          let e = ck(t.id),
            a = n.title || ``,
            o = parseFloat(t.price?.amount || `0`),
            s = o * r,
            c = t.price?.currencyCode || i;
          if (!e || !a || o <= 0) {
            console.warn(`❌ Skipping Facebook Pixel InitiateCheckout: missing required data`, {
              item_id: e,
              item_name: a,
              price: o,
              calculatedValue: s,
            });
            return;
          }
          l = {
            content_type: `product`,
            content_ids: [e],
            content_name: a,
            content_category: n.productType || ``,
            content_brand: n.vendor || ``,
            value: parseFloat(s.toFixed(2)),
            currency: c,
            num_items: parseInt(r.toString()),
          };
        } else if (o && a !== void 0)
          l = {
            content_type: `product`,
            content_ids: o,
            content_name: s || `Checkout`,
            value: parseFloat((typeof a == `number` ? a : parseFloat(a) || 0).toFixed(2)),
            currency: i,
            num_items: parseInt((c || 1).toString()),
          };
        else {
          console.warn(`❌ Skipping Facebook Pixel InitiateCheckout: insufficient data`, e);
          return;
        }
        let u = { eventID: `initiatecheckout_` + Date.now() };
        e.useBeacon
          ? fbq(`track`, `InitiateCheckout`, l, { ...u, transport: `beacon` })
          : fbq(`track`, `InitiateCheckout`, l, u);
      }),
      (fk = (e) => {
        if (!lk()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let { lineItem: t, currency: n = `USD` } = e;
        if (!t) {
          console.warn(`Missing lineItem data for Facebook Pixel RemoveFromCart tracking`);
          return;
        }
        let r = ck(t.merchandise.id),
          i = t.merchandise.product?.title || ``;
        t.merchandise.title;
        let a = parseFloat(t.cost.subtotalAmount.amount || `0`),
          o = t.quantity || 1,
          s = a * o,
          c = t.cost.subtotalAmount.currencyCode || n;
        if (!r || !i || a <= 0) {
          console.warn(`❌ Skipping Facebook Pixel RemoveFromCart: missing required data`, {
            item_id: r,
            item_name: i,
            price: a,
            value: s,
            quantity: o,
          });
          return;
        }
        let l = {
          content_type: `product`,
          content_ids: [r],
          content_name: i,
          content_category: t.merchandise.product?.productType || ``,
          content_brand: t.merchandise.product?.vendor || ``,
          value: parseFloat(s.toFixed(2)),
          currency: c,
          contents: [{ id: r, price: parseFloat(a.toFixed(2)), quantity: parseInt(o.toString()) }],
        };
        fbq(`track`, `RemoveFromCart`, l, { eventID: `removefromcart_` + Date.now() });
      }),
      (pk = (e) => {
        if (!lk()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let { variant: t, product: n, currency: r = `USD` } = e;
        if (!n) {
          console.warn(`Missing product data for Facebook Pixel ViewContent tracking`);
          return;
        }
        let i = ck(t ? t.id : n.id),
          a = n.title || ``;
        t?.title;
        let o = parseFloat(
            t ? t.price?.amount || `0` : n.priceRange?.minVariantPrice?.amount || `0`
          ),
          s = t?.price?.currencyCode || n.priceRange?.minVariantPrice?.currencyCode || r;
        if (!i || !a || o <= 0) {
          console.warn(`❌ Skipping Facebook Pixel ViewContent: missing required data`, {
            item_id: i,
            item_name: a,
            price: o,
          });
          return;
        }
        let c = {
          content_type: `product`,
          content_ids: [i],
          content_name: a,
          content_category: n.productType || ``,
          content_brand: n.vendor || ``,
          value: parseFloat(o.toFixed(2)),
          currency: s,
        };
        fbq(`track`, `ViewContent`, c, { eventID: `viewcontent_` + Date.now() });
      }));
  });
function hk(e, t, n = 30) {
  let i = new Date();
  i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
  let a = `expires=${i.toUTCString()}`,
    o = r.location.protocol === `https:` ? `;secure` : ``;
  document.cookie = `${e}=${t};${a};path=/${o}`;
}
function gk(e) {
  let t = `${e}=`,
    n = document.cookie.split(`;`);
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    for (; r.charAt(0) === ` `;) r = r.substring(1);
    if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
  }
  return null;
}
function _k() {
  let e = new URLSearchParams(r.location.search),
    t = {};
  if (
    ([`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`].forEach((n) => {
      let r = e.get(n);
      r && (t[n] = r);
    }),
    Object.keys(t).length > 0)
  )
    try {
      (Object.entries(t).forEach(([e, t]) => {
        hk(e, t);
      }),
        hk(`_shopify_utm`, JSON.stringify(t)),
        (r.utmParams = t));
    } catch (e) {
      console.error(`Error storing UTM parameters:`, e);
    }
  return t;
}
function vk() {
  let e = new URLSearchParams(r.location.search),
    t = {};
  if (
    ([`sca_ref`, `sca_source`, `sca_medium`, `sca_campaign`, `sca_term`, `sca_content`].forEach(
      (n) => {
        let r = e.get(n);
        r && (t[n] = r);
      }
    ),
    Object.keys(t).length > 0)
  )
    try {
      (Object.entries(t).forEach(([e, t]) => {
        hk(e, t);
      }),
        hk(`_shopify_sca_ref`, JSON.stringify(t)),
        (r.scaRefParams = t));
    } catch (e) {
      console.error(`Error storing SCA ref parameters:`, e);
    }
  return t;
}
function yk() {
  if (r.utmParams && Object.keys(r.utmParams).length > 0) return r.utmParams;
  try {
    let e = gk(`_shopify_utm`);
    if (e)
      try {
        let t = JSON.parse(e);
        return ((r.utmParams = t), t);
      } catch (e) {
        console.error(`Error parsing Shopify UTM params:`, e);
      }
    let t = {};
    if (
      ([`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`].forEach((e) => {
        let n = gk(e);
        n && (t[e] = n);
      }),
      Object.keys(t).length > 0)
    )
      return ((r.utmParams = t), t);
  } catch (e) {
    console.error(`Error retrieving stored UTM parameters:`, e);
  }
  return {};
}
function bk() {
  if (r.scaRefParams && Object.keys(r.scaRefParams).length > 0) return r.scaRefParams;
  try {
    let e = gk(`_shopify_sca_ref`);
    if (e)
      try {
        let t = JSON.parse(e);
        return ((r.scaRefParams = t), t);
      } catch (e) {
        console.error(`Error parsing Shopify SCA ref params:`, e);
      }
    let t = {};
    if (
      ([`sca_ref`, `sca_source`, `sca_medium`, `sca_campaign`, `sca_term`, `sca_content`].forEach(
        (e) => {
          let n = gk(e);
          n && (t[e] = n);
        }
      ),
      Object.keys(t).length > 0)
    )
      return ((r.scaRefParams = t), t);
  } catch (e) {
    console.error(`Error retrieving stored SCA ref parameters:`, e);
  }
  return {};
}
function xk(e) {
  if (!e) return e;
  let t = yk();
  Object.keys(t).length === 0 && _k();
  let n = yk();
  if (Object.keys(n).length > 0)
    try {
      let t = new URL(e);
      return (
        Object.keys(n).forEach((e) => {
          t.searchParams.has(e) || t.searchParams.append(e, n[e]);
        }),
        t.toString()
      );
    } catch (t) {
      return (console.error(`Error appending UTM params to URL:`, t), e);
    }
  return e;
}
function Sk(e) {
  if (!e) return e;
  let t = bk();
  Object.keys(t).length === 0 && vk();
  let n = bk();
  if (Object.keys(n).length > 0)
    try {
      let t = new URL(e);
      return (
        Object.keys(n).forEach((e) => {
          t.searchParams.has(e) || t.searchParams.append(e, n[e]);
        }),
        t.toString()
      );
    } catch (t) {
      return (console.error(`Error appending SCA ref params to URL:`, t), e);
    }
  return e;
}
function Ck(e) {
  return !e || typeof e != `string` || e.length > 50 ? !1 : /^[a-zA-Z0-9_-]+$/.test(e);
}
function wk() {
  if (r === void 0 || typeof sessionStorage > `u`) return null;
  try {
    let e = new URLSearchParams(r.location.search).get(`discount`);
    return e
      ? Ck(e)
        ? (sessionStorage.setItem(`fc_discount_code`, e), e)
        : (console.warn(
            `Invalid discount code format. Only alphanumeric characters, hyphens, and underscores are allowed. Max length: 50 characters.`
          ),
          null)
      : null;
  } catch (e) {
    return (console.error(`Error parsing discount code from URL:`, e), null);
  }
}
function Tk() {
  if (r === void 0 || typeof sessionStorage > `u`) return null;
  try {
    let e = sessionStorage.getItem(`fc_discount_code`);
    return e && Ck(e) ? e : (e && sessionStorage.removeItem(`fc_discount_code`), null);
  } catch (e) {
    return (console.error(`Error retrieving stored discount code:`, e), null);
  }
}
function Ek(e) {
  if (!e) return e;
  let t = Tk();
  if (t)
    try {
      let n = new URL(e);
      return (n.searchParams.has(`discount`) || n.searchParams.append(`discount`, t), n.toString());
    } catch (t) {
      return (console.error(`Error appending discount code to URL:`, t), e);
    }
  return e;
}
function Dk(e) {
  if (!e) return e;
  let t = e;
  return ((t = xk(t)), (t = Sk(t)), (t = Ek(t)), t);
}
var Ok = e(() => {
    (t(),
      r !== void 0 &&
        (document.readyState === `complete`
          ? (_k(), vk(), wk())
          : r.addEventListener(`load`, () => {
              (_k(), vk(), wk());
            })));
  }),
  kk,
  Ak,
  jk,
  Mk,
  Nk = e(() => {
    (_(),
      te.loadFonts([`FS;General Sans-variable`]),
      (kk = [{ defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Ak = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: kk,
              weight: `400`,
            },
          ],
        },
      ]),
      (jk = [
        `.framer-M22po .framer-styles-preset-nxm789:not(.rich-text-wrapper), .framer-M22po .framer-styles-preset-nxm789.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Mk = `framer-M22po`));
  });
function Pk(e) {
  let { shopifyProductID: t, images: n, behaviorConfigs: o, style: s, variants: l } = e,
    {
      showSingleVariants: ee,
      selectOutOfStock: m,
      filterVariants: h,
      action: g,
      triggerCart: te,
      productPage: ne = !0,
    } = o || {},
    { autoSelectFirst: re } = o || {},
    [_, ie] = p(null),
    [v, ae] = p(!1),
    [oe, se] = p({}),
    [y, ce] = p([]),
    le = (e = _, t = h) => {
      let n = (J(e, `options`, []) || []).map((e) => e.name);
      if (!t || t.variantGroups === `all`) return n;
      let r = t.variantTitles || [];
      return t.variantGroups === `equals` ? r : n.filter((e) => !r.includes(e));
    },
    ue = i(
      () =>
        !h || h.variantGroups === `all`
          ? J(_, `options`) || []
          : h.variantGroups === `equals`
            ? (J(_, `options`) || []).filter((e) => h.variantTitles?.includes(e.name))
            : h.variantGroups === `doesn't equal`
              ? (J(_, `options`) || []).filter((e) => !h.variantTitles?.includes(e.name))
              : J(_, `options`) || [],
      [_, h]
    ),
    de = r !== void 0,
    fe = !de || !r.shopXtools,
    pe = a(!1),
    me = a(Math.random().toString(36).slice(2)),
    he = a(!1),
    ge = a(!1),
    _e = a(g),
    ve = a(!!re);
  (a(0), a(!1));
  let ye = a(!1),
    [b, be] = p(),
    [xe, Se] = p(-1),
    [Ce, x] = p(-1),
    we = a(null),
    [Te, Ee] = p(new Map());
  (f(() => {
    ge.current || (se({}), (pe.current = !1));
  }, [t]),
    f(() => {
      ge.current || (se({}), (pe.current = !1));
    }, [h?.variantGroups, (h?.variantTitles || []).join(`|`)]),
    f(() => {
      re || ((pe.current = !1), se({}));
    }, [re]));
  let S = e.colors || [],
    [De, Oe] = p(e.swatchImages || []),
    [ke, Ae] = p(e.colorTitles || [`Color`]);
  (e.imageTitles,
    e.variantImageTitles,
    f(() => {
      if (!de) return;
      let t = r.__FcCheckoutConfigs;
      (!e.swatchImages && Array.isArray(t?.variantImageValues) && Oe(t.variantImageValues),
        !e.colorTitles && Array.isArray(t?.variantColorTitles) && Ae(t.variantColorTitles));
    }, [de, e.swatchImages, e.colorTitles]));
  let C = new Map([
    [`black`, `#000000`],
    [`white`, `#FFFFFF`],
    [`red`, `#FF0000`],
    [`green`, `#00FF00`],
    [`blue`, `#0000FF`],
    [`yellow`, `#FFFF00`],
    [`purple`, `#800080`],
    [`orange`, `#FFA500`],
    [`pink`, `#FFC0CB`],
    [`brown`, `#A52A2A`],
    [`gray`, `#808080`],
    [`grey`, `#808080`],
    [`navy`, `#000080`],
    [`teal`, `#008080`],
    [`maroon`, `#800000`],
    [`olive`, `#808000`],
    [`lime`, `#00FF00`],
    [`aqua`, `#00FFFF`],
    [`silver`, `#C0C0C0`],
    [`gold`, `#FFD700`],
    [`beige`, `#F5F5DC`],
    [`ivory`, `#FFFFF0`],
    [`lavender`, `#E6E6FA`],
    [`mint`, `#F5FFFA`],
    [`coral`, `#FF7F50`],
    [`indigo`, `#4B0082`],
    [`violet`, `#EE82EE`],
    [`magenta`, `#FF00FF`],
    [`turquoise`, `#40E0D0`],
    [`plum`, `#DDA0DD`],
    [`salmon`, `#FA8072`],
    [`tan`, `#D2B48C`],
    [`khaki`, `#F0E68C`],
    [`azure`, `#F0FFFF`],
    [`bisque`, `#FFE4C4`],
    [`chocolate`, `#D2691E`],
    [`crimson`, `#DC143C`],
    [`fuchsia`, `#FF00FF`],
    [`honeydew`, `#F0FFF0`],
    [`linen`, `#FAF0E6`],
    [`moccasin`, `#FFE4B5`],
    [`oldlace`, `#FDF5E6`],
    [`orchid`, `#DA70D6`],
    [`papayawhip`, `#FFEFD5`],
    [`peachpuff`, `#FFDAB9`],
    [`peru`, `#CD853F`],
    [`rosybrown`, `#BC8F8F`],
    [`sandybrown`, `#F4A460`],
    [`seashell`, `#FFF5EE`],
    [`sienna`, `#A0522D`],
    [`skyblue`, `#87CEEB`],
    [`slateblue`, `#6A5ACD`],
    [`slategray`, `#708090`],
    [`slategrey`, `#708090`],
    [`snow`, `#FFFAFA`],
    [`springgreen`, `#00FF7F`],
    [`steelblue`, `#4682B4`],
    [`thistle`, `#D8BFD8`],
    [`tomato`, `#FF6347`],
    [`wheat`, `#F5DEB3`],
    [`whitesmoke`, `#F5F5F5`],
    [`yellowgreen`, `#9ACD32`],
  ]);
  f(() => {
    let e = new Map();
    if (S && S.length > 0)
      S.forEach((t) => {
        if (t.name) {
          let n = t.name.trim().toLowerCase(),
            r = t.hex || C.get(n);
          r && e.set(n, r);
        }
      });
    else if (r !== void 0 && r.__FcCheckoutConfigs?.variantColorValues)
      try {
        let t = r.__FcCheckoutConfigs.variantColorValues;
        Array.isArray(t) &&
          t.forEach((t) => {
            t.name && t.hex && e.set(t.name.toLowerCase(), t.hex);
          });
      } catch (e) {
        console.error(`Error parsing color data from window.__FcCheckoutConfigs:`, e);
      }
    Ee(e);
  }, [S, De, _, ke]);
  let je = c(
      (e) => {
        if (r !== void 0 && ne && e) {
          let n = e.replace(`gid://shopify/ProductVariant/`, ``),
            i = new URL(r.location.href);
          if (
            (i.searchParams.set(`variant`, n),
            r.history.replaceState({}, ``, i.toString()),
            r !== void 0 && _ && t)
          ) {
            let e = new URLSearchParams(r.location.search).get(`variant`);
            if (e) {
              let n = (J(_, `variants.edges`) || []).find(
                ({ node: t }) => t.id.endsWith(e) || t.id === `gid://shopify/ProductVariant/${e}`
              );
              if (n) {
                let e = {};
                (n.node.selectedOptions.forEach((t) => {
                  e[t.name] = t.value;
                }),
                  se(e));
                let r = J(_, `options`, [])
                    .map((e) => e.name)
                    .every((t) => e[t]),
                  i = `fc_active_variant_${t}`;
                (sessionStorage.getItem(i) || Le(e, n.node.id, !1),
                  r &&
                    setTimeout(() => {
                      if (zk(g)) return;
                      let e = new CustomEvent(`product__active-variant__changed`, {
                        detail: {
                          ...n.node,
                          productId: `gid://shopify/Product/${t}`,
                          isCompleteVariant: r,
                        },
                      });
                      document.dispatchEvent(e);
                    }, 100));
                return;
              }
            }
          }
        }
      },
      [ne, _, t]
    ),
    Me = c(() => {
      if (r === void 0) return !1;
      try {
        setTimeout(() => {
          let e = r.shopXtools?.products;
          if (!Array.isArray(e)) return !1;
          let t = new URL(r.location.href).pathname.split(`/`).filter(Boolean).pop();
          return t ? e.some(({ node: e }) => e.handle === t) : !1;
        }, 500);
      } catch (e) {
        return (console.error(`Error determining if current page is product page:`, e), !1);
      }
    }, []);
  f(() => {
    r === void 0 || !r.shopXtools?.products || Fe();
  }, []);
  let Ne = c(() => {
      if (r !== void 0)
        try {
          if (r === void 0) return;
          try {
            for (let e = sessionStorage.length - 1; e >= 0; e--) {
              let t = sessionStorage.key(e);
              t && t.startsWith(`fc_active_variant_`) && sessionStorage.removeItem(t);
            }
          } catch (e) {
            console.error(`Error clearing variant from sessionStorage:`, e);
          }
        } catch (e) {
          console.error(`Error clearing variant from sessionStorage:`, e);
        }
    }, [t, Me]),
    Pe = c(() => {
      if (!(r === void 0 || !oe))
        try {
          let e = new URL(r.location.href),
            t = e.searchParams;
          if (t.has(`variant`)) {
            t.delete(`variant`);
            let n = e.toString();
            r.history.replaceState({}, ``, n);
          }
        } catch (e) {
          console.error(`Error stripping variant from URL:`, e);
        }
    }, [t, oe, Me]),
    Fe = c(() => {
      if (r === void 0 || !r.shopXtools?.products) return;
      let e = Me(),
        t = new URLSearchParams(r.location.search).has(`variant`);
      e !== void 0 && t && !e && (Ne(), Pe(), se({}));
    }, [Me, Ne, Pe, oe]),
    Ie = c(() => {
      let e = h?.variantGroups || `all`,
        n = (h?.variantTitles || []).join(`|`) || `all`;
      return `fc_active_variant_${t}_${e}__${n}`;
    }, [t, h?.variantGroups, h?.variantTitles]),
    Le = c(
      (e, n, i = !1) => {
        if (r !== void 0)
          try {
            let r = Ie(),
              a = { selectedOptions: e, variantId: n, timestamp: Date.now(), isPartial: i };
            sessionStorage.setItem(r, JSON.stringify(a));
            let o = `fc_active_variant_${t}`;
            sessionStorage.setItem(o, JSON.stringify(a));
          } catch (e) {
            console.error(`Error saving variant to sessionStorage:`, e);
          }
      },
      [Ie]
    ),
    Re = c(() => {
      if (r === void 0) return null;
      try {
        let e = Ie(),
          n = sessionStorage.getItem(e);
        if (!n) {
          let e = `fc_active_variant_${t}`;
          n = sessionStorage.getItem(e);
        }
        if (!n) {
          let e = `fc_active_variant_${t}_`,
            r = null;
          for (let t = 0; t < sessionStorage.length; t++) {
            let n = sessionStorage.key(t);
            if (n && n.startsWith(e))
              try {
                let e = sessionStorage.getItem(n);
                if (!e) continue;
                let t = JSON.parse(e),
                  i = t?.timestamp || 0;
                t?.selectedOptions && (!r || i > r.timestamp) && (r = { data: t, timestamp: i });
              } catch {}
          }
          r && (n = JSON.stringify(r.data));
        }
        if (n) {
          let e = JSON.parse(n),
            t = e.timestamp || Date.now();
          if (Date.now() - t < 1440 * 60 * 1e3 && e.selectedOptions) return e;
        }
      } catch (e) {
        console.error(`Error loading variant from sessionStorage:`, e);
      }
      return null;
    }, [t, Ie, h?.variantGroups, h?.variantTitles]),
    ze = c(() => {
      if (r === void 0 || !ne || !_) return;
      let e = new URLSearchParams(r.location.search).has(`variant`);
      if (e) return !1;
      let n = Re();
      if (n?.variantId && n?.selectedOptions) {
        let i = (J(_, `options`, []) || []).map((e) => e.name),
          a = Object.fromEntries(Object.entries(n.selectedOptions).filter(([e]) => i.includes(e)));
        se((e) => ({ ...(e || {}), ...a }));
        let o = (J(_, `variants.edges`) || []).find(({ node: e }) => e.id === n.variantId);
        if (o) {
          if (h?.variantGroups === `all` && re) {
            let e = J(_, `options`, []).map((e) => e.name),
              t = o.node.selectedOptions;
            e.every((e) => t.some((t) => t.name === e && !!t.value)) &&
              (je(o.node.id), Le(o.node.selectedOptions, o.node.id, !1));
          }
          let i = le().filter((e) => !a[e]),
            s = { ...a };
          if (e && re && i.length > 0) {
            let e = o.node?.selectedOptions || [];
            e.length ||
              (e =
                (J(_, `variants.edges`, []) || []).find(({ node: e }) => e.availableForSale)?.node
                  ?.selectedOptions || []);
            let n = {};
            (e.forEach((e) => {
              i.includes(e.name) && (n[e.name] = e.value);
            }),
              Object.keys(n).length > 0 &&
                ((s = { ...a, ...n }),
                se((e) => ({ ...(e || {}), ...s })),
                setTimeout(() => {
                  if (
                    (Object.entries(n).forEach(([e, n]) => {
                      let r = new CustomEvent(`variant_option_selected`, {
                        detail: {
                          optionName: e,
                          value: n,
                          allSelectedOptions: s,
                          isCompleteVariant: !1,
                          isPurchaseAction: !1,
                          productId: `gid://shopify/Product/${t}`,
                        },
                      });
                      document.dispatchEvent(r);
                    }),
                    h?.variantGroups !== `all`)
                  ) {
                    let e = new CustomEvent(`__variant_option_selected`, {
                      detail: {
                        productId: `gid://shopify/Product/${t}`,
                        optionName: Object.keys(n)[0] || ``,
                        value: Object.values(n)[0] || ``,
                        allSelectedOptions: s,
                        allOptionsSelected: !1,
                        isPurchaseAction: !1,
                        autoSelectFirst: re,
                        senderPriority: le()[0] || ``,
                        instanceId: me.current,
                      },
                    });
                    r.dispatchEvent(e);
                  }
                }, 0)));
          }
          let c = J(_, `options`, [])
            .map((e) => e.name)
            .every((e) => s[e]);
          (setTimeout(() => {
            let n = e && c;
            if (
              (Object.entries(s).forEach(([e, r]) => {
                let i = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: e,
                    value: r,
                    allSelectedOptions: s,
                    isCompleteVariant: n,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${t}`,
                  },
                });
                document.dispatchEvent(i);
              }),
              h?.variantGroups !== `all`)
            ) {
              let e = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${t}`,
                  optionName: Object.keys(s)[0] || ``,
                  value: Object.values(s)[0] || ``,
                  allSelectedOptions: s,
                  allOptionsSelected: c,
                  isPurchaseAction: !1,
                  autoSelectFirst: re,
                  senderPriority: le()[0] || ``,
                  instanceId: me.current,
                },
              });
              r.dispatchEvent(e);
            }
          }, 100),
            e && c && je(n.variantId),
            setTimeout(() => {
              if (zk(g) || !e) return;
              let n = new CustomEvent(`product__active-variant__changed`, {
                detail: {
                  ...o.node,
                  productId: `gid://shopify/Product/${t}`,
                  isCompleteVariant: c,
                },
              });
              document.dispatchEvent(n);
            }, 100));
        } else if (re) {
          (J(_, `options`, []) || []).map((e) => e.name);
          let e = le().filter((e) => !a[e]);
          if (e.length > 0) {
            let n =
                (J(_, `variants.edges`, []) || []).find(({ node: e }) => e.availableForSale)?.node
                  ?.selectedOptions || [],
              i = {};
            if (
              (n.forEach((t) => {
                e.includes(t.name) && (i[t.name] = t.value);
              }),
              Object.keys(i).length > 0)
            ) {
              let e = { ...a, ...i };
              (se((t) => ({ ...(t || {}), ...e })),
                setTimeout(() => {
                  if (
                    (Object.entries(i).forEach(([n, r]) => {
                      let i = new CustomEvent(`variant_option_selected`, {
                        detail: {
                          optionName: n,
                          value: r,
                          allSelectedOptions: e,
                          isCompleteVariant: !1,
                          isPurchaseAction: !1,
                          productId: `gid://shopify/Product/${t}`,
                        },
                      });
                      document.dispatchEvent(i);
                    }),
                    h?.variantGroups !== `all`)
                  ) {
                    let n = new CustomEvent(`__variant_option_selected`, {
                      detail: {
                        productId: `gid://shopify/Product/${t}`,
                        optionName: Object.keys(i)[0] || ``,
                        value: Object.values(i)[0] || ``,
                        allSelectedOptions: e,
                        allOptionsSelected: !1,
                        isPurchaseAction: !1,
                        autoSelectFirst: re,
                        senderPriority: le()[0] || ``,
                        instanceId: me.current,
                      },
                    });
                    r.dispatchEvent(n);
                  }
                }, 0));
            }
          }
        }
        return !0;
      }
      return !1;
    }, [ne, Re, je, _, t]),
    Be = c(() => {
      let e = new URL(r.location.href).pathname.split(`/`).filter(Boolean).pop();
      if (r.shopXtools?.products && Array.isArray(r.shopXtools.products) && e) {
        let n = r.shopXtools.products.find(({ node: t }) => t.handle === e),
          i = n?.node.id.split(`gid://shopify/Product/`)[1];
        if (!n) return;
        let a = new URLSearchParams(r.location.search).get(`variant`);
        if (a) {
          let e = (J(n.node, `variants.edges`) || []).find(
            ({ node: e }) => e.id.endsWith(a) || e.id === `gid://shopify/ProductVariant/${a}`
          );
          if (!e) return;
          if (e) {
            let r = e.node.id.split(`gid://shopify/ProductVariant/`)[1],
              a = {};
            (e.node.selectedOptions.forEach((e) => {
              a[e.name] = e.value;
            }),
              se(a));
            let o = J(n, `options`, [])
              .map((e) => e.name)
              .every((e) => a[e]);
            if (o) {
              let n = `fc_active_variant_${i}`;
              if (sessionStorage.getItem(n)) return;
              let s = { urlOptions: a, matchingVariantId: r, timestamp: Date.now(), isPartial: !1 };
              (sessionStorage.setItem(n, JSON.stringify(s)),
                setTimeout(() => {
                  if (zk(g)) return;
                  let n = new CustomEvent(`product__active-variant__changed`, {
                    detail: {
                      ...e.node,
                      productId: `gid://shopify/Product/${t}`,
                      isCompleteVariant: o,
                    },
                  });
                  document.dispatchEvent(n);
                }, 100));
            }
          }
        }
      }
    }, [_]),
    Ve = a(ne),
    He = a(_),
    Ue = a(Be);
  f(() => {
    ((Ve.current = ne), (He.current = _), (Ue.current = Be));
  }, [ne, _, Be]);
  let We = c(
    (e) => {
      let t = new URLSearchParams(r.location.search).has(`variant`),
        n = r.location.pathname.split(`/`).filter(Boolean).pop(),
        i =
          r.shopXtools?.products && Array.isArray(r.shopXtools.products)
            ? r.shopXtools.products.some(({ node: e }) => e.handle === n)
            : !1;
      if (Ve.current && i && t) {
        (e.stopImmediatePropagation(), He.current && Ue.current());
        return;
      }
      if (Ve.current && !i) {
        (e.stopImmediatePropagation(), r.location.reload());
        return;
      }
      if (!Ve.current && t) {
        (e.stopImmediatePropagation(), r.location.reload());
        return;
      }
      if (!Ve.current && i && !t) {
        e.stopImmediatePropagation();
        return;
      }
      if (Ve.current && i && !t) {
        e.stopImmediatePropagation();
        return;
      }
    },
    [t]
  );
  (f(() => {
    if (r !== void 0)
      return (
        r.addEventListener(`popstate`, We, !0),
        () => {
          r.removeEventListener(`popstate`, We, !0);
        }
      );
  }, [We, t]),
    f(() => {
      if (ne && !fe && r !== void 0 && _) {
        let e = setTimeout(() => {
          let e = ze();
          if (((he.current = !!e), !e && !e)) {
            let e = new URLSearchParams(r.location.search).get(`variant`);
            if (e) {
              let n = (J(_, `variants.edges`) || []).find(
                ({ node: t }) => t.id.endsWith(e) || t.id === `gid://shopify/ProductVariant/${e}`
              );
              if (n) {
                let e = {};
                (n.node.selectedOptions.forEach((t) => {
                  e[t.name] = t.value;
                }),
                  se(e));
                let r = J(_, `options`, [])
                  .map((e) => e.name)
                  .every((t) => e[t]);
                r &&
                  (Le(e, n.node.id, !1),
                  setTimeout(() => {
                    let e = new CustomEvent(`product__active-variant__changed`, {
                      detail: {
                        ...n.node,
                        productId: `gid://shopify/Product/${t}`,
                        isCompleteVariant: r,
                      },
                    });
                    document.dispatchEvent(e);
                  }, 100));
              }
            }
          }
        }, 100);
        return () => clearTimeout(e);
      }
    }, [ne, ze, _, t]),
    f(() => {
      let e = document.getElementById(`fc-product-variants-styles`);
      (e ||
        ((e = document.createElement(`style`)),
        (e.id = `fc-product-variants-styles`),
        document.head.appendChild(e)),
        (e.innerHTML = `
            /* Base z-index for all containers */
            .variant-button-container, .variant-dropdown-container {
                z-index: 0;
                position: relative;
            }
            
            /* Increase z-index on hover */
            .variant-button-container:hover, .variant-dropdown-container:hover {
                z-index: 2 !important;
            }
            
            /* Ensure dropdown inner elements inherit hover state */
            .variant-dropdown-container:hover .dropdown-inner {
                z-index: 2 !important;
                position: relative;
            }
            
            /* Ensure dropdown select elements have proper z-index */
            .dropdown-inner {
                position: relative;
                z-index: 0;
            }

            /* Focus outline via CSS - instant, no React delay */
            .dropdown-inner {
                outline: var(--focus-outline-width, 2px) solid transparent;
                outline-offset: var(--focus-outline-offset, 2px);
                transition: outline-color 0.15s ease-in-out;
            }
            .dropdown-inner:focus-within {
                outline-color: var(--focus-outline-color, var(--hover-border-color, #000));
                border-radius: var(--focus-outline-radius, 0px);
                transition: outline-color 0.15s ease-in-out;
            }

            /* Remove ALL default focus/active styling from select */
            .dropdown-inner select,
            .dropdown-inner select:focus,
            .dropdown-inner select:focus-visible,
            .dropdown-inner select:focus-within,
            .dropdown-inner select:active,
            .dropdown-inner select:-moz-focusring {
                outline: none !important;
                outline-offset: 0 !important;
                border: none !important;
                box-shadow: none !important;
                -webkit-tap-highlight-color: transparent !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
            }

            /* Firefox inner focus ring */
            .dropdown-inner select::-moz-focus-inner {
                border: 0 !important;
                outline: 0 !important;
            }

            /* Force margin-right for horizontal layout */
            .variant-dropdown-container[data-horizontal="true"]:not([data-last="true"]) {
                margin-right: -1px !important;
            }
            
            /* Direct class for horizontal edge-to-edge */
            .horizontal-edge-to-edge {
                margin-right: -1px !important;
            }
            
            /* Focus styles for accessibility - buttons only, dropdown uses inline styles */
            .variant-button-container button:focus-visible {
                outline: 2px solid #0078D4 !important;
                outline-offset: 2px !important;
            }
            
            /* High contrast mode support */
            @media (forced-colors: active) {
                .variant-button-container button:focus-visible {
                    outline: 2px solid CanvasText !important;
                }
            }

            /* Swatch styles */
            .variant-swatch-container {
                position: relative;
            }
            
            .variant-swatch-container:hover {
                z-index: 10 !important;
            }
            
            .variant-swatch-container:hover .swatch-tooltip {
                opacity: 1;
                visibility: visible;
            }
            
            .variant-swatch-container button:focus-visible {
                outline: 2px solid #0078D4 !important;
                outline-offset: 2px !important;
            }
            
            /* High contrast mode support */
            @media (forced-colors: active) {
                .variant-swatch-container button:focus-visible {
                    outline: 2px solid CanvasText !important;
                }
            }
        `));
    }, []),
    zk(g) && (re = !1),
    f(() => {
      if (fe) return;
      let e = `gid://shopify/Product/${t}`,
        n = setTimeout(() => {
          let t = r !== void 0 && new URLSearchParams(r.location.search).has(`variant`);
          if (g === `Add to Cart` || g === `Buy Now`) {
            let t = new CustomEvent(`auto_select_first_flag`, {
              detail: { autoSelectFirst: !1, shopifyProductID: e, instanceId: me.current },
            });
            document.dispatchEvent(t);
          } else {
            let n = new CustomEvent(`auto_select_first_flag`, {
              detail: {
                autoSelectFirst: ne && !t ? !1 : re,
                shopifyProductID: e,
                instanceId: me.current,
              },
            });
            document.dispatchEvent(n);
          }
        }, 100);
      return () => clearTimeout(n);
    }, [re, g, fe, t]),
    f(() => {
      let n = document.getElementById(`fc-product-variants-styles`);
      if (
        (n ||
          ((n = document.createElement(`style`)),
          (n.id = `fc-product-variants-styles`),
          document.head.appendChild(n)),
        (n.innerHTML = `
            /* Base z-index for all containers */
            .variant-dropdown-container {
                position: relative;
                z-index: 1;
            }

            /* Increase z-index when focused */
            .variant-dropdown-container:focus-within {
                z-index: 10;
            }

            /* Remove ALL default focus/active styling from select */
            .dropdown-inner select,
            .dropdown-inner select:focus,
            .dropdown-inner select:focus-visible,
            .dropdown-inner select:focus-within,
            .dropdown-inner select:active,
            .dropdown-inner select:-moz-focusring {
                outline: none !important;
                outline-offset: 0 !important;
                border: none !important;
                box-shadow: none !important;
                -webkit-tap-highlight-color: transparent !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
            }

            /* Firefox inner focus ring */
            .dropdown-inner select::-moz-focus-inner {
                border: 0 !important;
                outline: 0 !important;
            }

            /* Focus outline on dropdown wrapper via CSS variable */
            .dropdown-inner {
                outline: var(--focus-outline-width, 2px) solid transparent;
                outline-offset: var(--focus-outline-offset, 2px);
                transition: outline-color 0.15s ease-in-out;
            }
            .dropdown-inner:focus-within {
                outline-color: var(--focus-outline-color, var(--hover-border-color, #000));
                border-radius: var(--focus-outline-radius, 0px);
                transition: outline-color 0.15s ease-in-out;
            }

            /* Special styling for edge-to-edge layout */
            .horizontal-edge-to-edge + .horizontal-edge-to-edge .variant-dropdown {
                border-left: none !important;
            }

            .fc-dropdown-focus {
                outline: 2px solid CanvasText !important;
                outline-offset: 2px !important;
            }

            .fc-dropdown-list-item:focus {
                outline: 2px solid CanvasText !important;
                outline-offset: -2px !important;
            }
        `),
        fe && l)
      ) {
        let { options: t, variants: n, productId: r } = Rk(l),
          i = {
            id: r || `mock-product`,
            options: t.map((e) => ({ name: e.name, values: e.values })),
            variants: {
              edges: n.map((n, r) => {
                let i = !0;
                return (
                  e.buttonConfigs?.outOfStock?.preview &&
                    t.forEach((e, t) => {
                      e.values.length > 1 && n.combination[t] === e.values[1] && (i = !1);
                    }),
                  {
                    node: {
                      id: n.id.startsWith(`gid://`) ? n.id : `gid://shopify/ProductVariant/${n.id}`,
                      availableForSale: i,
                      quantityAvailable: i ? 50 : 0,
                      selectedOptions: t.map((e, t) => ({ name: e.name, value: n.combination[t] })),
                      price: { amount: `19.99`, currencyCode: `USD` },
                    },
                  }
                );
              }),
            },
            images: {
              edges: [, , , ,].fill(0).map((e, t) => ({ node: { id: `image-${t + 1}` } })),
            },
            priceRange: { minVariantPrice: { amount: `19.99`, currencyCode: `USD` } },
          };
        ie(i);
        return;
      }
      if (fe) {
        let t = {
          id: `mock-product`,
          variants: {
            edges: [
              {
                node: {
                  id: `mock-variant-1`,
                  availableForSale: m || !0,
                  quantityAvailable: 50,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-2`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-3`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-4`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-5`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-6`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-7`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-8`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-9`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-10`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-11`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-12`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-13`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-14`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-15`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-16`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-17`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-18`,
                  availableForSale: m || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-19`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-20`,
                  availableForSale: m || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
            ],
          },
          options: [
            { name: `Size`, values: [`XS`, `S`, `M`, `L`, `XL`] },
            { name: `Color`, values: [`Green`, `Blue`, `Pink`, `Black`] },
          ],
          images: { edges: [, , , ,].fill(0).map((e, t) => ({ node: { id: `image-${t + 1}` } })) },
          priceRange: { minVariantPrice: { amount: `19.99`, currencyCode: `USD` } },
        };
        ie(t);
        return;
      }
      if (!fe) {
        if (r.shopXtools && Array.isArray(r.shopXtools.products)) {
          let e = r.shopXtools.products.find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          e && ie(e.node);
        }
        let e = (e) => {
          if (Array.isArray(e.detail.products)) {
            let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
            n && ie(n.node);
          }
        };
        return (
          document.addEventListener(`data__products-ready`, e),
          () => {
            document.removeEventListener(`data__products-ready`, e);
          }
        );
      }
      return (
        document.addEventListener(`product__variants__validate`, () => {
          ae(!0);
        }),
        () => {
          document.removeEventListener(`product__variants__validate`, () => ae(!0));
        }
      );
    }, [t, l, n.imageChange, e.variantImageIds, e.buttonConfigs?.outOfStock?.preview]),
    f(() => {
      if (!ne || !_ || fe || zk(g)) return;
      let e = new URLSearchParams(r.location.search).get(`variant`);
      if (e) {
        let n = J(_, `variants.edges`, []).find(
          ({ node: t }) =>
            t.id === `gid://shopify/ProductVariant/${e}` || t.id.split(`/`).pop() === e
        );
        if (
          (n ||
            console.warn(`[FC_ProductVariants] URL variant ${e} not found in product variants:`, {
              urlVariantId: e,
              availableVariantIds: J(_, `variants.edges`, []).map(({ node: e }) => ({
                fullId: e.id,
                numericId: e.id.split(`/`).pop(),
              })),
              productId: t,
            }),
          n)
        ) {
          let e = {};
          (n.node.selectedOptions.forEach((t) => {
            e[t.name] = t.value;
          }),
            se(e),
            re && (pe.current = !0));
          let i = J(_, `options`, [])
            .map((e) => e.name)
            .every((t) => e[t]);
          setTimeout(() => {
            if (
              (Object.entries(e).forEach(([n, r]) => {
                let a = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: n,
                    value: r,
                    allSelectedOptions: e,
                    isCompleteVariant: i,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${t}`,
                  },
                });
                document.dispatchEvent(a);
              }),
              h?.variantGroups !== `all`)
            ) {
              let n = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${t}`,
                  optionName: Object.keys(e)[0] || ``,
                  value: Object.values(e)[0] || ``,
                  allSelectedOptions: e,
                  isPurchaseAction: !1,
                  autoSelectFirst: re,
                  senderPriority: le()[0] || ``,
                  instanceId: me.current,
                },
              });
              r.dispatchEvent(n);
            }
            if (i) {
              let e = new CustomEvent(`product__active-variant__changed`, {
                detail: {
                  ...n.node,
                  productId: `gid://shopify/Product/${t}`,
                  isCompleteVariant: i,
                },
              });
              document.dispatchEvent(e);
            }
          }, 100);
        }
      }
    }, [_, ne, t, fe, g, re, h?.variantGroups, h?.variantTitles]),
    f(() => {
      if (!ne || fe || zk(g)) return;
      let e = new URLSearchParams(r.location.search).get(`variant`);
      if (e && !_) {
        let t = setTimeout(() => {
          r.location.search.includes(`variant=${e}`) && r.dispatchEvent(new Event(`resize`));
        }, 500);
        return () => clearTimeout(t);
      }
    }, [_, ne, t, fe, g]),
    f(() => {
      if (ne && !zk(g) && r !== void 0 && !new URLSearchParams(r.location.search).get(`variant`))
        try {
          let e = `fc_active_variant_${t}`,
            n = `fc_active_variant_${t}_`;
          for (let t = sessionStorage.length - 1; t >= 0; t--) {
            let r = sessionStorage.key(t);
            if (r && (r === e || r.startsWith(n)))
              try {
                let e = JSON.parse(sessionStorage.getItem(r) || `null`);
                e && e.isPartial === !1 && sessionStorage.removeItem(r);
              } catch {
                sessionStorage.removeItem(r);
              }
          }
        } catch {}
    }, [ne, g, t]),
    f(() => {
      if (!_) return;
      let i = (t) => {
        if (!t.detail) return;
        let n = t.detail.variant_id;
        if (!n) return;
        let r = (J(_, `variants.edges`) || []).find(({ node: e }) => e.id === n);
        if (r) {
          let t = [
              ...(e.variantImageTitles || []),
              ...(e.imageTitles || []),
              ...(e.colorTitles || [`Color`, `Colour`]),
            ].map((e) => String(e).toLowerCase().trim()),
            n =
              (r.node.selectedOptions || []).find((e) =>
                t.includes(
                  String(e?.name || ``)
                    .toLowerCase()
                    .trim()
                )
              ) || (r.node.selectedOptions || [])[0];
          n?.name && n?.value && Ze(n.name, n.value);
        }
      };
      document.addEventListener(`image__variant__selected`, i);
      let a = (i) => {
        if (!n.imageChange || !i.detail?.imageNumber || !e.variantImageIds) return;
        let a = new Map(),
          o;
        for (; (o = Hk.exec(e.variantImageIds)) !== null;) {
          let [, e, t] = o;
          (a.set(e, t), a.set(t, e));
        }
        Hk.lastIndex = 0;
        let s = a.get(String(i.detail.imageNumber));
        if (!s) return;
        let c = (J(_, `variants.edges`) || []).find(({ node: e }) => e.id.endsWith(s));
        if (c && c.node.selectedOptions) {
          let e = {};
          for (let t of c.node.selectedOptions || []) t.name && t.value && (e[t.name] = t.value);
          let n = new CustomEvent(`__variant_option_selected`, {
            detail: {
              productId: `gid://shopify/Product/${t}`,
              allSelectedOptions: e,
              isPurchaseAction: !1,
              autoSelectFirst: re,
              senderPriority: le()[0] || ``,
              instanceId: me.current,
              twoWayGallery: !0,
            },
          });
          r.dispatchEvent(n);
        }
      };
      return (
        document.addEventListener(`image__variant__selected`, i),
        document.addEventListener(`image__number__selected`, a),
        () => {
          (document.removeEventListener(`image__variant__selected`, i),
            document.removeEventListener(`image__number__selected`, a));
        }
      );
    }, [_]),
    f(() => {
      if (fe && g === `Update Active` && re) {
        try {
          let e = `fc_active_variant_${t}`;
          sessionStorage.removeItem(e);
        } catch {}
        (se({}), (pe.current = !1));
      }
    }, [fe, g, re, t]),
    f(() => {
      let e = _e.current !== `Update Active` && g === `Update Active`,
        n = !ve.current && !!re;
      if (e || n) {
        try {
          let e = `fc_active_variant_${t}`;
          sessionStorage.removeItem(e);
        } catch {}
        (se({}), (pe.current = !1));
      }
      ((_e.current = g), (ve.current = !!re));
    }, [g, re, t]),
    f(() => {
      if (re && _ && !pe.current && Object.keys(oe).length === 0) {
        let e = J(_, `variants.edges`, []),
          n = e.find(({ node: e }) => e.availableForSale),
          i = `fc_active_variant_${t}`,
          a = fe ? null : sessionStorage.getItem(i),
          o = {},
          s = null,
          c = !1;
        if (!a && ne && !fe && _) {
          let e = new URLSearchParams(r.location.search).get(`variant`);
          ((s = J(_, `variants.edges`, []).find(
            ({ node: t }) => t.id === `gid://shopify/ProductVariant/${e}`
          )),
            s &&
              (s.node.selectedOptions.forEach((e) => {
                o[e.name] = e.value;
              }),
              se(o)),
            (pe.current = !0));
          let n = J(_, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            (Object.entries(o).forEach(([e, r]) => {
              let i = new CustomEvent(`variant_option_selected`, {
                detail: {
                  optionName: e,
                  value: r,
                  allSelectedOptions: o,
                  isCompleteVariant: n,
                  isPurchaseAction: !1,
                  productId: `gid://shopify/Product/${t}`,
                },
              });
              document.dispatchEvent(i);
            }),
              n &&
                !c &&
                (setTimeout(() => {
                  if (g !== `Add to Cart` && g !== `Buy Now`) {
                    let e = new CustomEvent(`product__active-variant__changed`, {
                      detail: {
                        ...s?.node,
                        productId: `gid://shopify/Product/${t}`,
                        isCompleteVariant: n,
                      },
                    });
                    document.dispatchEvent(e);
                  }
                }, 100),
                (ge.current = !1)));
          }, 100);
        }
        if (a && ne && !fe && !he.current) {
          let n = JSON.parse(a).variantId.split(`gid://shopify/ProductVariant/`)[1];
          ((s = J(_, `variants.edges`, []).find(
            ({ node: e }) => e.id === `gid://shopify/ProductVariant/${n}`
          )),
            (c = JSON.parse(a).isPartial),
            (o = JSON.parse(a).selectedOptions),
            (J(_, `options`, []) || []).map((e) => e.name));
          let i = le().filter((e) => !o[e]);
          if (i.length > 0) {
            let t = J(_, `options`, []) || [],
              n = le(),
              r = ((r = {}) => {
                let i = { ...r };
                for (let r of t) {
                  if (!n.includes(r.name)) continue;
                  let t = (r.values || []).find((t) => {
                    let n = { ...i, [r.name]: t };
                    return e.some(({ node: e }) =>
                      e?.availableForSale
                        ? Object.entries(n).every(([t, n]) =>
                            e.selectedOptions?.some((e) => e.name === t && e.value === n)
                          )
                        : !1
                    );
                  });
                  if (!t) return null;
                  i[r.name] = t;
                }
                return i;
              })({}),
              a = r ? Object.entries(r).map(([e, t]) => ({ name: e, value: t })) : [];
            (s?.node?.selectedOptions || a || []).forEach((e) => {
              i.includes(e.name) && (o[e.name] = e.value);
            });
          }
          (se(o), (pe.current = !0));
          let l = J(_, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            if (
              (Object.entries(o).forEach(([e, n]) => {
                let r = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: e,
                    value: n,
                    allSelectedOptions: o,
                    isCompleteVariant: l,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${t}`,
                  },
                });
                document.dispatchEvent(r);
              }),
              !fe && h?.variantGroups !== `all`)
            ) {
              let e = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${t}`,
                  optionName: Object.keys(o)[0],
                  value: Object.values(o)[0],
                  allSelectedOptions: o,
                  allOptionsSelected: l,
                  isPurchaseAction: !1,
                  autoSelectFirst: re,
                  senderPriority: h?.variantTitles?.[0] || ``,
                  instanceId: me.current,
                },
              });
              r.dispatchEvent(e);
            }
            l &&
              !c &&
              (setTimeout(() => {
                if (g !== `Add to Cart` && g !== `Buy Now`) {
                  let e = new CustomEvent(`product__active-variant__changed`, {
                    detail: {
                      ...s?.node,
                      productId: `gid://shopify/Product/${t}`,
                      isCompleteVariant: l,
                    },
                  });
                  document.dispatchEvent(e);
                }
              }, 100),
              (ge.current = !1));
          }, 100);
        }
        if (!s) {
          let n = J(_, `options`, []) || [],
            i = le(),
            a = ((t = {}) => {
              let r = { ...t };
              for (let t of n) {
                if (!i.includes(t.name)) continue;
                let n = (t.values || []).find((n) => {
                  let i = { ...r, [t.name]: n };
                  return e.some(({ node: e }) =>
                    e?.availableForSale
                      ? Object.entries(i).every(([t, n]) =>
                          e.selectedOptions?.some((e) => e.name === t && e.value === n)
                        )
                      : !1
                  );
                });
                if (!n) return null;
                r[t.name] = n;
              }
              return r;
            })({});
          (a && (o = a), se(o), (pe.current = !0));
          let s = J(_, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            if (
              (Object.entries(o).forEach(([e, n]) => {
                let r = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: e,
                    value: n,
                    allSelectedOptions: o,
                    isCompleteVariant: s,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${t}`,
                  },
                });
                document.dispatchEvent(r);
              }),
              !fe && h?.variantGroups !== `all`)
            ) {
              let e = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${t}`,
                  optionName: Object.keys(o)[0],
                  value: Object.values(o)[0],
                  allSelectedOptions: o,
                  allOptionsSelected: s,
                  isPurchaseAction: !1,
                  autoSelectFirst: re,
                  senderPriority: le()[0] || ``,
                  instanceId: me.current,
                },
              });
              r.dispatchEvent(e);
            }
            if (s && !c) {
              let n = e.find(({ node: e }) =>
                Object.entries(o).every(([t, n]) =>
                  e.selectedOptions?.some((e) => e.name === t && e.value === n)
                )
              );
              if ((ne && n?.node?.id && je(n.node.id), g !== `Add to Cart` && g !== `Buy Now`)) {
                let e = new CustomEvent(`product__active-variant__changed`, {
                  detail: {
                    ...n?.node,
                    productId: `gid://shopify/Product/${t}`,
                    isCompleteVariant: s,
                  },
                });
                document.dispatchEvent(e);
              }
              ge.current = !1;
            }
          }, 100);
        }
        if (n && !s) {
          (n.node.selectedOptions.forEach((e) => {
            (h?.variantGroups === `all` || h?.variantTitles?.includes(e.name)) &&
              (o[e.name] = e.value);
          }),
            se(o),
            (pe.current = !0));
          let e = J(_, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            if (
              (Object.entries(o).forEach(([n, r]) => {
                let i = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: n,
                    value: r,
                    allSelectedOptions: o,
                    isCompleteVariant: e,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${t}`,
                  },
                });
                document.dispatchEvent(i);
              }),
              h?.variantGroups !== `all`)
            ) {
              let n = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${t}`,
                  optionName: Object.keys(o)[0],
                  value: Object.values(o)[0],
                  allSelectedOptions: o,
                  allOptionsSelected: e,
                  isPurchaseAction: !1,
                  autoSelectFirst: re,
                  senderPriority: le()[0] || ``,
                  instanceId: me.current,
                },
              });
              r.dispatchEvent(n);
            }
            if (e && !c) {
              if ((ne && je(n.node.id), g !== `Add to Cart` && g !== `Buy Now`)) {
                let r = new CustomEvent(`product__active-variant__changed`, {
                  detail: {
                    ...n.node,
                    productId: `gid://shopify/Product/${t}`,
                    isCompleteVariant: e,
                  },
                });
                document.dispatchEvent(r);
              }
              ge.current = !1;
            }
          }, 100);
        }
      }
    }, [_, re, t, h?.variantGroups, (h?.variantTitles || []).join(`|`), ne, fe]));
  let Ge = a({});
  (f(() => {
    let e = (e) => {
      let { currency: n } = e.detail;
      if ((be(n), (Ge.current = { ...oe }), r.shopXtools && Array.isArray(r.shopXtools.products))) {
        let e = r.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        if (e) {
          let t = e.node;
          ie(t);
        }
      }
    };
    return (
      r.addEventListener(`currency_changed`, e),
      () => {
        r.removeEventListener(`currency_changed`, e);
      }
    );
  }, [t, oe]),
    f(() => {
      if (!_) return;
      let e = Ge.current;
      if (!e || Object.keys(e).length === 0) return;
      let n = {},
        r = J(_, `options`, []);
      for (let t of r) {
        let { name: r, values: i } = t,
          a = e[r];
        a && i.includes(a) && (n[r] = a);
      }
      if ((se(n), Object.keys(n).length > 0)) {
        let e = Fk(_, n),
          r = J(_, `options`, [])
            .map((e) => e.name)
            .every((e) => n[e]);
        (Object.entries(n).forEach(([e, t]) => {
          let i = new CustomEvent(`variant_option_selected`, {
            detail: {
              optionName: e,
              value: t,
              allSelectedOptions: n,
              isCompleteVariant: r,
              isPurchaseAction: !1,
            },
          });
          document.dispatchEvent(i);
        }),
          e &&
            r &&
            setTimeout(() => {
              if (g !== `Add to Cart` && g !== `Buy Now`) {
                let n = new CustomEvent(`product__active-variant__changed`, {
                  detail: { ...e, productId: `gid://shopify/Product/${t}`, isCompleteVariant: r },
                });
                document.dispatchEvent(n);
              }
              let i = new CustomEvent(`variant__visual__sync`, {
                detail: {
                  productId: `gid://shopify/Product/${t}`,
                  selectedOptions: n,
                  variantId: e?.id,
                },
              });
              document.dispatchEvent(i);
            }, 50));
      }
    }, [_, t]));
  let Ke = Fk(_, oe),
    [qe, Je] = p(``),
    Ye = (e) => {
      if (!e) return new Map();
      let t = new Map(),
        n = [],
        r = /\[Image (\d+) • (\d+)\]/g,
        i;
      for (; (i = r.exec(e)) !== null;)
        n.push({ imageNumber: i[1], position: i.index, variantId: i[2], fullMatch: i[0] });
      for (let r = 0; r < n.length; r++) {
        let i = n[r],
          a = n[r + 1];
        t.set(i.variantId, i.imageNumber);
        let o = i.position + i.fullMatch.length,
          s = a ? a.position : e.length,
          c = e.substring(o, s),
          l = /\[(\d+)\]/g,
          u;
        for (; (u = l.exec(c)) !== null;) t.set(u[1], i.imageNumber);
      }
      return t;
    },
    [Xe, w] = p(!1),
    Ze = c(
      (n, i) => {
        let a = { ...oe, [n]: i };
        se(a);
        let o = J(_, `options`, [])
          .map((e) => e.name)
          .every((e) => a[e]);
        if (h?.variantGroups !== `all` && !zk(g)) {
          let e = new CustomEvent(`__variant_option_selected`, {
            detail: {
              productId: `gid://shopify/Product/${t}`,
              optionName: n,
              value: i,
              allSelectedOptions: a,
              allOptionsSelected: o,
              isPurchaseAction: !1,
              autoSelectFirst: re,
              senderPriority: le()[0] || ``,
              instanceId: me.current,
            },
          });
          r.dispatchEvent(e);
        }
        let s = new CustomEvent(`variant_option_selected`, {
          detail: {
            optionName: n,
            value: i,
            allSelectedOptions: a,
            productId: `gid://shopify/Product/${t}`,
            isPurchaseAction: g === `Add to Cart` || g === `Buy Now`,
          },
        });
        if ((document.dispatchEvent(s), zk(g))) {
          let o = Fk(_, a);
          if (o && r.shopXtools) {
            let a = () => {
              let n = o?.id || (t ? `gid://shopify/ProductVariant/${t}` : null);
              if (!n) throw Error(`No valid product variant selected`);
              let r = { merchandiseId: n, quantity: 1 };
              try {
                let t = `fc_cart_attributes_${e.shopifyProductID}`,
                  n = sessionStorage.getItem(t);
                if (!n) return r;
                let i = JSON.parse(n),
                  a = [];
                (Object.entries(i).forEach(([e, t]) => {
                  t && String(t).trim() && a.push({ key: e, value: String(t).trim() });
                }),
                  a.length > 0 && (r.attributes = a));
              } catch (e) {
                console.error(`Error adding attributes to cart item:`, e);
              }
              return r;
            };
            ((async () => {
              try {
                let t = `fc_cart_attributes_${e.shopifyProductID}`,
                  n = sessionStorage.getItem(t),
                  i = n ? JSON.parse(n) : {},
                  s = `fc_input_config_${e.shopifyProductID}`,
                  c = sessionStorage.getItem(s),
                  l = c ? JSON.parse(c) : {},
                  u = Object.keys(l),
                  d = !1;
                for (let t of u) {
                  let n = l[t],
                    a = i[t] || ``;
                  if (n.required && (!a || a.trim() === ``)) {
                    (r.dispatchEvent(
                      new CustomEvent(`inputValidationFailed`, {
                        detail: { productId: e.shopifyProductID, key: t },
                      })
                    ),
                      (d = !0));
                    continue;
                  }
                  n.validateEmail &&
                    a &&
                    a.trim() !== `` &&
                    (((e) => {
                      if (!e || !e.includes(`@`) || !e.includes(`.`) || e.length > 254) return !1;
                      let [t, n] = e.split(`@`);
                      return t.length > 64
                        ? !1
                        : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            e
                          );
                    })(a) ||
                      (d = !0));
                }
                if (d) {
                  w(!0);
                  return;
                }
                let f = [a()],
                  p = localStorage.getItem(`selectedCountryCode`) || void 0;
                if (g === `Add to Cart`) {
                  let e = localStorage.getItem(`shopX_cart_id`);
                  if (e) {
                    let t = await r.shopXtools?.handleCartMutation?.(QO, { cartId: e, lines: f });
                    if (t?.cartLinesAdd?.cart) {
                      (localStorage.setItem(`shopXtools.cart`, JSON.stringify(t.cartLinesAdd.cart)),
                        r.shopXtools && (r.shopXtools.cart = t.cartLinesAdd.cart),
                        r.dispatchEvent(new Event(`shopXtools-cart-update`)));
                      let e = o?.price?.currencyCode || `USD`,
                        n = parseFloat((parseFloat(o?.price?.amount || `0`) * 1).toFixed(2)),
                        i = o?.id,
                        a = o?.selectedOptions?.map((e) => e.value).join(` / `) || ``,
                        s = parseFloat(o?.price?.amount || `0`),
                        c = _;
                      (typeof r.fcTrackGAEvent == `function` &&
                        r.fcTrackGAEvent(`add_to_cart`, {
                          currency: e,
                          value: n,
                          items: [{ item_id: i, item_name: a, price: s, quantity: 1 }],
                        }),
                        uk({ variant: o, product: c, quantity: 1, currency: e }),
                        g === `Add to Cart` &&
                          te &&
                          (r.shopXtools?.dispatchEvent?.(`checkout__changed`, {
                            __triggerCartModal: te,
                          }),
                          document.dispatchEvent(
                            new CustomEvent(`checkout__changed`, {
                              detail: { __triggerCartModal: te },
                            })
                          )),
                        Ne(),
                        Pe());
                    }
                  } else {
                    let e = await r.shopXtools?.handleCartMutation?.(ZO, {
                      lines: f,
                      countryCode: p,
                    });
                    e?.cartCreate?.cart &&
                      (localStorage.setItem(`shopX_cart_id`, e.cartCreate.cart.id),
                      localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartCreate.cart)),
                      r.shopXtools && (r.shopXtools.cart = e.cartCreate.cart),
                      r.dispatchEvent(new Event(`shopXtools-cart-update`)),
                      te &&
                        (r.shopXtools?.dispatchEvent?.(`checkout__changed`, {
                          __triggerCartModal: te,
                        }),
                        document.dispatchEvent(
                          new CustomEvent(`checkout__changed`, {
                            detail: { __triggerCartModal: te },
                          })
                        )));
                  }
                } else {
                  let e = await r.shopXtools?.handleCartMutation?.(ZO, {
                    lines: f,
                    countryCode: p,
                  });
                  if (e?.cartCreate?.cart?.checkoutUrl) {
                    let t = e.cartCreate.cart.checkoutUrl,
                      n = o?.price?.currencyCode || `USD`,
                      i = parseFloat((parseFloat(o?.price?.amount || `0`) * 1).toFixed(2)),
                      a = o?.id,
                      s = o?.selectedOptions?.map((e) => e.value).join(` / `) || ``,
                      c = parseFloat(o?.price?.amount || `0`);
                    (typeof r.fcTrackGAEvent == `function` &&
                      r.fcTrackGAEvent(`begin_checkout`, {
                        currency: n,
                        value: i,
                        items: [{ item_id: a, item_name: s, price: c, quantity: 1 }],
                      }),
                      dk({ variant: o, product: _, quantity: 1, currency: n, useBeacon: !0 }),
                      (t = Dk(t)),
                      (t = IO(t)),
                      r.location.assign(t));
                  }
                }
              } catch (e) {
                (console.error(`Error handling purchase:`, e),
                  r.dispatchEvent(
                    new CustomEvent(`errorChanged`, {
                      detail: e.message || `Error processing your request`,
                    })
                  ));
              }
            })(),
              r.dispatchEvent(
                new CustomEvent(`product__purchase__completed`, {
                  detail: { shopifyProductID: t, activeVariant: o, optionName: n, value: i },
                })
              ));
          }
        }
        let c = Fk(_, a),
          l = new CustomEvent(`variant__visual__sync`, {
            detail: {
              productId: `gid://shopify/Product/${t}`,
              selectedOptions: a,
              variantId: c?.id,
            },
          });
        (document.dispatchEvent(l),
          c &&
            (ne && o && je(c.id),
            Le(a, c.id, !o),
            o &&
              !zk(g) &&
              setTimeout(() => {
                let e = new CustomEvent(`product__active-variant__changed`, {
                  detail: {
                    ...c,
                    productId: `gid://shopify/Product/${t}`,
                    isCompleteVariant: !0,
                    isPurchaseAction: !1,
                  },
                });
                document.dispatchEvent(e);
              }, 300)));
      },
      [oe, _, t, re, pe.current, h?.variantGroups, ne, je, Le]
    );
  (f(() => {
    let e = (e) => {
      if (
        e.detail.shopifyProductID === t &&
        (g === `Add to Cart` || (g === `Buy Now` && h?.variantTitles?.length))
      ) {
        let n = e.detail.activeVariant,
          i = e.detail.optionName,
          a = e.detail.value,
          o = { [i]: a },
          s = (n?.selectedOptions || []).filter((e) => !(e.name in o)),
          c = {};
        for (let e of s) c[e.name] = e.value;
        (se(c),
          setTimeout(() => {
            n &&
              document.dispatchEvent(
                new CustomEvent(`last_selected_variant`, {
                  detail: { activeVariant: n, shopifyProductID: t },
                })
              );
            let e = new CustomEvent(`__variant_option_selected`, {
              detail: {
                productId: `gid://shopify/Product/${t}`,
                value: null,
                allSelectedOptions: c,
                allOptionsSelected: !1,
                isPurchaseAction: !0,
                autoSelectFirst: !1,
              },
            });
            r.dispatchEvent(e);
          }, 200));
      }
    };
    return (
      r.addEventListener(`product__purchase__completed`, e),
      () => r.removeEventListener(`product__purchase__completed`, e)
    );
  }, [_, g, h?.variantTitles, t, oe]),
    f(() => {
      if (fe) return;
      let e = (e) => {
        e.detail.productId === `gid://shopify/Product/${t}` &&
          h?.variantGroups === `all` &&
          e.detail &&
          typeof e.detail.selectedOptions == `object` &&
          e.detail.selectedOptions !== null &&
          se(e.detail.selectedOptions);
      };
      return (
        document.addEventListener(`variant__visual__sync`, e),
        () => {
          document.removeEventListener(`variant__visual__sync`, e);
        }
      );
    }, [t, fe]));
  let Qe = a(null),
    $e = a(!1);
  (f(() => {
    let e = (e) => {
      t === e.detail.shopifyProductID && ((Qe.current = e.detail.activeVariant), ($e.current = !0));
    };
    return (
      document.addEventListener(`last_selected_variant`, e),
      () => {
        document.removeEventListener(`last_selected_variant`, e);
      }
    );
  }, [t]),
    f(() => {
      let i;
      if (((i = $e.current && Qe.current ? Qe.current : Ke), i)) {
        let a = i?.id.split(`/`).pop();
        if (e.variantImageIds) {
          let i = Ye(e.variantImageIds).get(a);
          if (i) {
            let e = setTimeout(() => {
              if (n.imageTrigger !== `None`) {
                let e = new CustomEvent(`variant__image__match`, {
                  detail: {
                    imageNumber: parseInt(i),
                    shopifyProductID: `gid://shopify/Product/${t}`,
                  },
                });
                document.dispatchEvent(e);
              }
              if (n.imageTrigger === `Scroll Sections`) {
                if (re && !ye.current) {
                  ye.current = !0;
                  return;
                }
                let e = `#image-${i}`;
                if (r.location.hash !== e) {
                  history.replaceState(null, ``, e);
                  let t = document.getElementById(`image-${i}`);
                  if (t) {
                    let e = n.offsetY || 0,
                      i = t.getBoundingClientRect().top + r.pageYOffset - e;
                    r.scrollTo({ top: i, behavior: `smooth` });
                  }
                }
              }
            }, 0);
            return (($e.current = !1), (Qe.current = null), () => clearTimeout(e));
          }
        }
      }
    }, [Ke, n.imageTrigger, n.offsetY, e.variantImageIds, oe]),
    J(_, `variants.edges`),
    f(() => {
      let e = (J(_, `variants.edges`) || []).map(({ node: e }) => ({
        id: e.id,
        availableForSale: e.availableForSale,
        ...e.selectedOptions.reduce((e, t) => ({ ...e, [t.name]: t.value }), {}),
      }));
      ce(e);
    }, [_]),
    f(() => {
      let e = (e) => {
        if (ge.current) return;
        let n = `gid://shopify/Product/${t}`,
          r = e.detail.allSelectedOptions;
        if (
          e.detail.productId === n &&
          h?.variantGroups !== `all` &&
          e.detail.instanceId !== me.current &&
          !e.detail.twoWayGallery
        ) {
          let n = e.detail.isPurchaseAction;
          if ((e.detail.senderPriority || 0) === (le()[0] || ``)) {
            let e = {};
            (le().forEach((t) => {
              r[t] && (e[t] = r[t]);
            }),
              se(e));
            return;
          } else {
            let e = { ...oe, ...r };
            se(e);
            let i = Fk(_, e);
            if (
              J(_, `options`, [])
                .map((e) => e.name)
                .every((t) => e[t]) &&
              i
            ) {
              ne && !n && je(i.id);
              let e = new CustomEvent(`product__active-variant__changed`, {
                detail: {
                  ...i,
                  productId: `gid://shopify/Product/${t}`,
                  isCompleteVariant: !0,
                  isPurchaseAction: !1,
                },
              });
              document.dispatchEvent(e);
            }
          }
        } else if (e.detail.productId === n && e.detail.twoWayGallery) {
          let e = { ...oe, ...r };
          se(e);
          let n = Fk(_, e);
          if (
            J(_, `options`, [])
              .map((e) => e.name)
              .every((t) => e[t]) &&
            n
          ) {
            ne && je(n.id);
            let e = new CustomEvent(`product__active-variant__changed`, {
              detail: {
                ...n,
                productId: `gid://shopify/Product/${t}`,
                isCompleteVariant: !0,
                isPurchaseAction: !1,
              },
            });
            document.dispatchEvent(e);
          }
        }
      };
      return (
        r.addEventListener(`__variant_option_selected`, e),
        () => {
          r.removeEventListener(`__variant_option_selected`, e);
        }
      );
    }, [t, y, re, g, _, oe, h?.variantTitles, ne]));
  let et = (e, t, n, r, i, a, o, s, c, l, d) =>
      u(Bk, {
        opt: e,
        filteredValues: t,
        isLast: n,
        valid: r,
        invalidMsg: i,
        props: a,
        dispatchOptionSelectedEvent: o,
        selectedOptions: s,
        combinations: c,
        index: l,
        totalCount: d,
      }),
    tt = (t, n, r, i, a) =>
      d(
        `div`,
        {
          role: `radiogroup`,
          "aria-label": `Select ${t.name}`,
          "aria-required": !i,
          "aria-invalid": !i,
          children: [
            u(`div`, {
              style: {
                width: `100%`,
                display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                justifyContent:
                  e.titleConfigs.font.textAlign === `center`
                    ? `center`
                    : e.titleConfigs.font.textAlign === `right`
                      ? `flex-end`
                      : `flex-start`,
                marginBottom:
                  J(e, `containerConfigs.gap2`) === void 0
                    ? J(e, `titleConfigs.gap`)
                    : J(e, `containerConfigs.gap2`),
                overflow: `visible`,
              },
              children: d(`div`, {
                style: {
                  width: `100%`,
                  display: `flex`,
                  justifyContent: `flex-start`,
                  alignItems: `center`,
                  overflow: `visible`,
                },
                children: [
                  e.titleConfigs.visible &&
                    u(`label`, {
                      id: `variant-title-${t.name}`,
                      htmlFor: `variant-${t.name}`,
                      style: {
                        ...J(e, `titleConfigs.font`),
                        color: J(e, `titleConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        margin: 0,
                        cursor: `pointer`,
                        textTransform: J(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.titleConfigs.display || `{{Option}}`).replace(
                        `{{Option}}`,
                        t.name
                      ),
                    }),
                  e.selectedConfigs.visible &&
                    oe[t.name] &&
                    u(`p`, {
                      style: {
                        ...J(e, `selectedConfigs.font`),
                        color: J(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: J(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: oe[t.name],
                    }),
                  e.selectedConfigs.visible &&
                    e.selectedConfigs.emptyVisible &&
                    !oe[t.name] &&
                    u(`p`, {
                      style: {
                        ...J(e, `selectedConfigs.font`),
                        color: J(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: J(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.selectedConfigs.emptyText || `Select {{Option Value}}`).replace(
                        `{{Option Value}}`,
                        t.name
                      ),
                    }),
                ],
              }),
            }),
            d(`div`, {
              style: {
                display: e.buttonConfigs.layout === `grid` ? `grid` : `flex`,
                flexDirection:
                  e.buttonConfigs.layout === `grid`
                    ? void 0
                    : e.buttonConfigs.direction === `horizontal`
                      ? `row`
                      : `column`,
                flexWrap:
                  e.buttonConfigs.layout === `grid`
                    ? void 0
                    : e.buttonConfigs.direction === `horizontal`
                      ? `wrap`
                      : `nowrap`,
                gridTemplateColumns:
                  e.buttonConfigs.layout === `grid`
                    ? e.buttonConfigs.columns === `auto`
                      ? (() => {
                          let t = e.buttonConfigs.maxColumns || 4,
                            n = e.buttonConfigs.gap || 8,
                            r = e.buttonConfigs.gridWidth || 100;
                          return t <= 1
                            ? `1fr`
                            : `repeat(auto-fit, minmax(max(${r}px, calc((100% - ${t - 1} * ${n}px) / ${t})), 1fr))`;
                        })()
                      : n.length <= 1
                        ? `1fr`
                        : `repeat(${e.buttonConfigs.columnCount || 3}, 1fr)`
                    : void 0,
                gap:
                  (e.buttonConfigs.layout,
                  `${e.buttonConfigs.gapY || 8}px ${e.buttonConfigs.gap || 8}px`),
                width: `100%`,
                maxWidth: void 0,
                alignItems:
                  e.buttonConfigs.layout === `grid`
                    ? void 0
                    : e.buttonConfigs.direction === `vertical` && e.buttonConfigs.width
                      ? `stretch`
                      : `flex-start`,
              },
              children: [
                n.map((r, i) => {
                  let a = oe[t.name] === r,
                    o;
                  if (h?.variantGroups === `all`) {
                    let e = Array.from(Object.entries({ ...oe, [t.name]: r }));
                    o = y.find((t) => e.every(([e, n]) => t[e] === n) && t.availableForSale);
                  } else
                    o = Array.from(
                      new Set(
                        y
                          .filter((e) =>
                            e.availableForSale
                              ? Object.entries(oe)
                                  .filter(([e]) => e !== t.name)
                                  .every(([t, n]) => e[t] === n)
                              : !1
                          )
                          .map((e) => e[t.name])
                          .filter(Boolean)
                      )
                    ).includes(r);
                  let s = o || (m && !o),
                    c = i === n.length - 1,
                    l = Number(e.buttonConfigs.gap) === 0,
                    f = e.buttonConfigs.direction === `horizontal`,
                    p = J(e, `buttonConfigs.unselected.border`),
                    ee = J(e, `buttonConfigs.selected.border`),
                    g = J(e, `buttonConfigs.outOfStock.border`),
                    te = J(e, `buttonConfigs.hovered.border`);
                  function ne(e) {
                    if (!e) return;
                    let {
                      borderWidth: t,
                      borderStyle: n,
                      borderColor: r,
                      isMixed: i,
                      toggleTitles: a,
                      top: o,
                      right: s,
                      bottom: c,
                      left: l,
                    } = e;
                    return a === `Individual` || i
                      ? {
                          borderTop: `${o ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                          borderRight: `${s ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                          borderBottom: `${c ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                          borderLeft: `${l ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                        }
                      : { border: `${t?.all ?? t ?? 0}px ${n ?? `solid`} ${r ?? `#000`}` };
                  }
                  let re = {};
                  return (
                    l && !c && (f ? (re.marginRight = `-1px`) : (re.marginBottom = `-1px`)),
                    u(
                      `div`,
                      {
                        style: {
                          position: `relative`,
                          width: e.buttonConfigs.layout === `grid` ? `100%` : `auto`,
                        },
                        className: `variant-button-container`,
                        children: d(`button`, {
                          role: `radio`,
                          "aria-checked": a,
                          "aria-label": `${t.name} ${r}`,
                          tabIndex: s ? 0 : -1,
                          onKeyDown: (n) => {
                            if (n.key === `Enter` || n.key === ` `)
                              (n.preventDefault(), s && Ze(t.name, r));
                            else if (n.key === `Home`) {
                              n.preventDefault();
                              let e = n.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelector(`[role="radio"]:not([aria-disabled="true"])`);
                              e && e.focus();
                            } else if (n.key === `End`) {
                              n.preventDefault();
                              let e = n.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelectorAll(`[role="radio"]:not([aria-disabled="true"])`);
                              e?.length && e[e.length - 1].focus();
                            } else if (
                              n.key === `ArrowRight` ||
                              (n.key === `ArrowDown` && e.buttonConfigs.direction === `vertical`)
                            ) {
                              n.preventDefault();
                              let e = n.target.closest(`[role="radiogroup"]`),
                                t = Array.from(
                                  e?.querySelectorAll(
                                    `[role="radio"]:not([aria-disabled="true"])`
                                  ) || []
                                ),
                                r = (t.indexOf(n.target) + 1) % t.length;
                              t[r] && t[r].focus();
                            } else if (
                              n.key === `ArrowLeft` ||
                              (n.key === `ArrowUp` && e.buttonConfigs.direction === `vertical`)
                            ) {
                              n.preventDefault();
                              let e = n.target.closest(`[role="radiogroup"]`),
                                t = Array.from(
                                  e?.querySelectorAll(
                                    `[role="radio"]:not([aria-disabled="true"])`
                                  ) || []
                                ),
                                r = t.indexOf(n.target),
                                i = r === 0 ? t.length - 1 : r - 1;
                              t[i] && t[i].focus();
                            }
                          },
                          style: {
                            padding: J(e, `buttonConfigs.padding`),
                            width:
                              e.buttonConfigs.layout === `grid` ||
                              (e.buttonConfigs.direction === `vertical` && e.buttonConfigs.width)
                                ? `100%`
                                : `auto`,
                            height:
                              J(e, `buttonConfigs.height`) === `Fixed`
                                ? `${J(e, `buttonConfigs.fixedHeight`)}px`
                                : `Fit`,
                            ...re,
                            borderRadius: J(e, `buttonConfigs.radius`),
                            backgroundColor:
                              a && !o
                                ? J(e, `buttonConfigs.selected.background`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.background`)
                                    : J(e, `buttonConfigs.unselected.background`)
                                  : J(e, `buttonConfigs.outOfStock.background`),
                            ...ne(a && !o ? ee : o ? (a ? ee : p) : g),
                            color:
                              a && !o
                                ? J(e, `buttonConfigs.selected.color`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.color`)
                                    : J(e, `buttonConfigs.unselected.color`)
                                  : J(e, `buttonConfigs.outOfStock.color`),
                            fontFamily:
                              a && !o
                                ? J(e, `buttonConfigs.selected.font.fontFamily`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.font.fontFamily`)
                                    : J(e, `buttonConfigs.unselected.font.fontFamily`)
                                  : J(e, `buttonConfigs.outOfStock.font.fontFamily`),
                            fontSize:
                              a && !o
                                ? J(e, `buttonConfigs.selected.font.fontSize`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.font.fontSize`)
                                    : J(e, `buttonConfigs.unselected.font.fontSize`)
                                  : J(e, `buttonConfigs.outOfStock.font.fontSize`),
                            fontWeight:
                              a && !o
                                ? J(e, `buttonConfigs.selected.font.fontWeight`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.font.fontWeight`)
                                    : J(e, `buttonConfigs.unselected.font.fontWeight`)
                                  : J(e, `buttonConfigs.outOfStock.font.fontWeight`),
                            letterSpacing:
                              a && !o
                                ? J(e, `buttonConfigs.selected.font.letterSpacing`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.font.letterSpacing`)
                                    : J(e, `buttonConfigs.unselected.font.letterSpacing`)
                                  : J(e, `buttonConfigs.outOfStock.font.letterSpacing`),
                            textTransform:
                              a && !o
                                ? J(e, `buttonConfigs.selected.textTransform`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.textTransform`)
                                    : J(e, `buttonConfigs.unselected.textTransform`)
                                  : J(e, `buttonConfigs.outOfStock.textTransform`),
                            textAlign:
                              a && !o
                                ? J(e, `buttonConfigs.selected.font.textAlign`)
                                : o
                                  ? a
                                    ? J(e, `buttonConfigs.selected.font.textAlign`)
                                    : J(e, `buttonConfigs.unselected.font.textAlign`)
                                  : J(e, `buttonConfigs.outOfStock.font.textAlign`),
                            cursor: s ? `pointer` : `not-allowed`,
                            overflow: `hidden`,
                            position: `relative`,
                          },
                          onClick: s ? () => Ze(t.name, r) : void 0,
                          onMouseEnter: (t) => {
                            if (s) {
                              let n = t.currentTarget;
                              n.style.backgroundColor = J(e, `buttonConfigs.hovered.background`);
                              let r = ne(te);
                              (r.border === void 0
                                ? ((n.style.borderTop = r.borderTop),
                                  (n.style.borderRight = r.borderRight),
                                  (n.style.borderBottom = r.borderBottom),
                                  (n.style.borderLeft = r.borderLeft))
                                : (n.style.border = r.border),
                                (n.style.color = J(e, `buttonConfigs.hovered.color`)));
                            }
                          },
                          onMouseLeave: (t) => {
                            let n = t.currentTarget;
                            if (
                              ((n.style.border = ``),
                              (n.style.borderTop = ``),
                              (n.style.borderRight = ``),
                              (n.style.borderBottom = ``),
                              (n.style.borderLeft = ``),
                              a)
                            ) {
                              n.style.backgroundColor = J(e, `buttonConfigs.selected.background`);
                              let t = ne(ee);
                              (t && t.border !== void 0
                                ? (n.style.border = t.border ?? ``)
                                : t &&
                                  ((n.style.borderTop = t.borderTop ?? ``),
                                  (n.style.borderRight = t.borderRight ?? ``),
                                  (n.style.borderBottom = t.borderBottom ?? ``),
                                  (n.style.borderLeft = t.borderLeft ?? ``)),
                                (n.style.color = J(e, `buttonConfigs.selected.color`)));
                            } else if (o) {
                              n.style.backgroundColor = J(e, `buttonConfigs.unselected.background`);
                              let t = ne(p);
                              (t && t.border !== void 0
                                ? (n.style.border = t.border ?? ``)
                                : t &&
                                  ((n.style.borderTop = t.borderTop ?? ``),
                                  (n.style.borderRight = t.borderRight ?? ``),
                                  (n.style.borderBottom = t.borderBottom ?? ``),
                                  (n.style.borderLeft = t.borderLeft ?? ``)),
                                (n.style.color = J(e, `buttonConfigs.unselected.color`)));
                            } else {
                              n.style.backgroundColor = J(e, `buttonConfigs.outOfStock.background`);
                              let t = ne(g);
                              (t && t.border !== void 0
                                ? (n.style.border = t.border ?? ``)
                                : t &&
                                  ((n.style.borderTop = t.borderTop ?? ``),
                                  (n.style.borderRight = t.borderRight ?? ``),
                                  (n.style.borderBottom = t.borderBottom ?? ``),
                                  (n.style.borderLeft = t.borderLeft ?? ``)),
                                (n.style.color = J(e, `buttonConfigs.outOfStock.color`)));
                            }
                          },
                          children: [
                            d(`span`, {
                              style: { position: `relative`, display: `inline-block` },
                              children: [
                                r,
                                a &&
                                  !o &&
                                  J(e, `buttonConfigs.outOfStock.strike.line`) &&
                                  J(e, `buttonConfigs.outOfStock.strike.size`) === `text` &&
                                  u(`span`, {
                                    style: {
                                      position: `absolute`,
                                      top: `50%`,
                                      left: `0%`,
                                      width: `100%`,
                                      height: `1px`,
                                      backgroundColor: J(
                                        e,
                                        `buttonConfigs.outOfStock.strike.color`
                                      ),
                                      transform: `translateY(-50%)`,
                                      transformOrigin: `center`,
                                      pointerEvents: s ? `auto` : `none`,
                                    },
                                  }),
                                !a &&
                                  !o &&
                                  J(e, `buttonConfigs.outOfStock.strike.line`) &&
                                  J(e, `buttonConfigs.outOfStock.strike.size`) === `text` &&
                                  u(`span`, {
                                    style: {
                                      position: `absolute`,
                                      top: `50%`,
                                      left: `0%`,
                                      width: `100%`,
                                      height: `1px`,
                                      backgroundColor: J(
                                        e,
                                        `buttonConfigs.outOfStock.strike.color`
                                      ),
                                      transform: `translateY(-50%)`,
                                      transformOrigin: `center`,
                                      pointerEvents: `none`,
                                    },
                                  }),
                              ],
                            }),
                            a &&
                              !o &&
                              J(e, `buttonConfigs.outOfStock.strike.line`) &&
                              J(e, `buttonConfigs.outOfStock.strike.size`) === `container` &&
                              u(`svg`, {
                                style: {
                                  position: `absolute`,
                                  top: 0,
                                  left: 0,
                                  width: `100%`,
                                  height: `100%`,
                                  pointerEvents: s ? `auto` : `none`,
                                },
                                preserveAspectRatio: `none`,
                                viewBox: `0 0 100 100`,
                                children: u(`line`, {
                                  x1:
                                    (J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                      `horizontal` ||
                                      J(e, `buttonConfigs.outOfStock.strike.direction`),
                                    `0`),
                                  y1:
                                    J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `100`
                                        : `0`,
                                  x2: (J(e, `buttonConfigs.outOfStock.strike.direction`), `100`),
                                  y2:
                                    J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `0`
                                        : `100`,
                                  stroke: J(e, `buttonConfigs.outOfStock.strike.color`),
                                  strokeWidth: `1`,
                                  vectorEffect: `non-scaling-stroke`,
                                }),
                              }),
                            !a &&
                              !o &&
                              J(e, `buttonConfigs.outOfStock.strike.line`) &&
                              J(e, `buttonConfigs.outOfStock.strike.size`) === `container` &&
                              u(`svg`, {
                                style: {
                                  position: `absolute`,
                                  top: 0,
                                  left: 0,
                                  width: `100%`,
                                  height: `100%`,
                                  pointerEvents: `none`,
                                },
                                preserveAspectRatio: `none`,
                                viewBox: `0 0 100 100`,
                                children: u(`line`, {
                                  x1:
                                    (J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                      `horizontal` ||
                                      J(e, `buttonConfigs.outOfStock.strike.direction`),
                                    `0`),
                                  y1:
                                    J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `100`
                                        : `0`,
                                  x2: (J(e, `buttonConfigs.outOfStock.strike.direction`), `100`),
                                  y2:
                                    J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : J(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `0`
                                        : `100`,
                                  stroke: J(e, `buttonConfigs.outOfStock.strike.color`),
                                  strokeWidth: `1`,
                                  vectorEffect: `non-scaling-stroke`,
                                }),
                              }),
                          ],
                        }),
                      },
                      r
                    )
                  );
                }),
                !i &&
                  u(`div`, {
                    role: `alert`,
                    style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                    children: `"${t.name}" missing`,
                  }),
              ],
            }),
          ],
        },
        t.name
      ),
    nt = (t, n, r, i, a) => {
      if (
        !ke.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) ||
        !e.swatches?.colorEnabled
      )
        return s === `Dropdown`
          ? et(
              t,
              n,
              r,
              i,
              a,
              e,
              Ze,
              oe,
              y,
              J(_, `options`)?.findIndex((e) => e.name === t.name) || 0,
              J(_, `options`)?.length || 0
            )
          : tt(t, n, r, i, a);
      let { swatches: o } = e;
      return d(
        `div`,
        {
          role: `radiogroup`,
          "aria-label": `Select ${t.name}`,
          "aria-required": !i,
          "aria-invalid": !i,
          children: [
            u(`div`, {
              style: {
                width: `100%`,
                display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                justifyContent:
                  e.titleConfigs.font.textAlign === `center`
                    ? `center`
                    : e.titleConfigs.font.textAlign === `right`
                      ? `flex-end`
                      : `flex-start`,
                marginBottom:
                  J(e, `containerConfigs.gap2`) === void 0
                    ? J(e, `titleConfigs.gap`)
                    : J(e, `containerConfigs.gap2`),
                overflow: `visible`,
              },
              children: d(`div`, {
                style: {
                  width: `100%`,
                  display: `flex`,
                  justifyContent: `flex-start`,
                  alignItems: `center`,
                  overflow: `visible`,
                },
                children: [
                  e.titleConfigs.visible &&
                    u(`label`, {
                      id: `variant-title-${t.name}`,
                      htmlFor: `variant-${t.name}`,
                      style: {
                        ...J(e, `titleConfigs.font`),
                        color: J(e, `titleConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        margin: 0,
                        cursor: `pointer`,
                        textTransform: J(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.titleConfigs.display || `{{Option}}`).replace(
                        `{{Option}}`,
                        t.name
                      ),
                    }),
                  e.selectedConfigs.visible &&
                    oe[t.name] &&
                    u(`p`, {
                      style: {
                        ...J(e, `selectedConfigs.font`),
                        color: J(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: J(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: oe[t.name],
                    }),
                  e.selectedConfigs.visible &&
                    e.selectedConfigs.emptyVisible &&
                    !oe[t.name] &&
                    u(`p`, {
                      style: {
                        ...J(e, `selectedConfigs.font`),
                        color: J(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: J(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.selectedConfigs.emptyText || `Select {{Option Value}}`).replace(
                        `{{Option Value}}`,
                        t.name
                      ),
                    }),
                ],
              }),
            }),
            d(`div`, {
              style: {
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
                gap: o.gap,
                width: `100%`,
              },
              children: [
                n.map((n, r) => {
                  let i = oe[t.name] === n,
                    a;
                  if (h?.variantGroups === `all`) {
                    let e = Array.from(Object.entries({ ...oe, [t.name]: n }));
                    a = y.find((t) => e.every(([e, n]) => t[e] === n) && t.availableForSale);
                  } else
                    a = Array.from(
                      new Set(
                        y
                          .filter(
                            (e) =>
                              e.availableForSale &&
                              Object.entries(oe)
                                .filter(([e]) => e !== t.name)
                                .every(([t, n]) => e[t] === n)
                          )
                          .map((e) => e[t.name])
                          .filter(Boolean)
                      )
                    ).includes(n);
                  let s = a || (m && !a),
                    c = n.toLowerCase(),
                    l = Te.get(c) || `#CCCCCC`,
                    f = () =>
                      i && !a
                        ? o.selected.border
                        : a
                          ? i
                            ? o.selected.border
                            : o.unselected.border
                          : o.outOfStock.border,
                    p = () =>
                      i && !a
                        ? o.selected.background
                        : a
                          ? i
                            ? o.selected.background
                            : o.unselected.background
                          : o.outOfStock.background,
                    ee = f(),
                    g = p();
                  return d(
                    `div`,
                    {
                      className: `variant-swatch-container`,
                      style: { position: `relative` },
                      children: [
                        u(`button`, {
                          role: `radio`,
                          "aria-checked": i,
                          "aria-label": `${t.name} ${n}${a ? `` : ` (Out of Stock)`}`,
                          title: n,
                          disabled: !a && !m,
                          onClick: () => {
                            (a || m) && Ze(t.name, n);
                          },
                          tabIndex: a || m ? 0 : -1,
                          onKeyDown: (e) => {
                            if (e.key === `Enter` || e.key === ` `)
                              (e.preventDefault(), s && Ze(t.name, n));
                            else if (e.key === `Home`) {
                              e.preventDefault();
                              let t = e.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelector(`[role="radio"]:not([disabled])`);
                              t && t.focus();
                            } else if (e.key === `End`) {
                              e.preventDefault();
                              let t = e.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelectorAll(`[role="radio"]:not([disabled])`);
                              t?.length && t[t.length - 1].focus();
                            } else if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
                              e.preventDefault();
                              let t = e.target.closest(`[role="radiogroup"]`),
                                n = Array.from(
                                  t?.querySelectorAll(`[role="radio"]:not([disabled])`) || []
                                ),
                                r = (n.indexOf(e.target) + 1) % n.length;
                              n[r] && n[r].focus();
                            } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
                              e.preventDefault();
                              let t = e.target.closest(`[role="radiogroup"]`),
                                n = Array.from(
                                  t?.querySelectorAll(`[role="radio"]:not([disabled])`) || []
                                ),
                                r = n.indexOf(e.target),
                                i = r === 0 ? n.length - 1 : r - 1;
                              n[i] && n[i].focus();
                            }
                          },
                          onMouseEnter: (e) => {
                            if (s) {
                              let t = e.currentTarget,
                                { borderWidth: n, borderStyle: r } = o.hovered.border;
                              ((t.style.border = `${n}px ${r} ${o.hovered.border.borderColor}`),
                                (t.style.background = o.hovered.background));
                            }
                          },
                          onMouseLeave: (e) => {
                            let t = e.currentTarget,
                              n = f(),
                              r = p();
                            ((t.style.border = `${n.borderWidth}px ${n.borderStyle} ${n.borderColor}`),
                              (t.style.background = r));
                          },
                          style: {
                            width: o.width,
                            height: o.height,
                            borderRadius: o.radius,
                            border: `${ee.borderWidth}px ${ee.borderStyle} ${ee.borderColor}`,
                            padding: o.padding,
                            cursor: a || m ? `pointer` : `not-allowed`,
                            background: g,
                            position: `relative`,
                          },
                          children: d(`div`, {
                            style: {
                              width: `100%`,
                              height: `100%`,
                              borderRadius: o.radius,
                              backgroundColor: l,
                              opacity: a ? 1 : o.outOfStock.opacity,
                              position: `relative`,
                              overflow: `hidden`,
                            },
                            children: [
                              i &&
                                !a &&
                                J(e, `swatches.outOfStock.strike.line`) &&
                                u(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: s ? `auto` : `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: u(`line`, {
                                    x1:
                                      (J(e, `swatches.outOfStock.strike.direction`) ===
                                        `horizontal` ||
                                        J(e, `swatches.outOfStock.strike.direction`),
                                      0),
                                    y1:
                                      J(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : J(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      J(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : J(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 0
                                          : (J(e, `swatches.outOfStock.strike.direction`), 100),
                                    stroke: J(e, `swatches.outOfStock.strike.color`),
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                              !i &&
                                !a &&
                                J(e, `swatches.outOfStock.strike.line`) &&
                                u(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: u(`line`, {
                                    x1:
                                      (J(e, `swatches.outOfStock.strike.direction`) ===
                                        `horizontal` ||
                                        J(e, `swatches.outOfStock.strike.direction`),
                                      0),
                                    y1:
                                      J(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : J(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      J(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : J(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 0
                                          : (J(e, `swatches.outOfStock.strike.direction`), 100),
                                    stroke: J(e, `swatches.outOfStock.strike.color`),
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        u(`div`, {
                          className: `swatch-tooltip`,
                          style: {
                            position: `absolute`,
                            top: `100%`,
                            left: `50%`,
                            transform: `translateX(-50%)`,
                            backgroundColor: `rgba(0, 0, 0, 0.8)`,
                            color: `#FFFFFF`,
                            padding: `4px 8px`,
                            borderRadius: `4px`,
                            fontSize: `12px`,
                            marginTop: `4px`,
                            whiteSpace: `nowrap`,
                            opacity: 0,
                            visibility: `hidden`,
                            transition: `opacity 0.2s ease-in-out, visibility 0.2s ease-in-out`,
                            zIndex: 10,
                          },
                          children: n,
                        }),
                      ],
                    },
                    n
                  );
                }),
                !i &&
                  u(`div`, {
                    role: `alert`,
                    style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                    children: `"${t.name}" missing`,
                  }),
              ],
            }),
          ],
        },
        t.name
      );
    },
    rt = (t, n, r, i, a) => {
      if (
        !(e.imageTitles || [`Pattern`]).some(
          (e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()
        ) ||
        !e.imageSwatches?.image
      )
        return tt(t, n, r, i, a);
      let o = e.imageSwatches.imageStyles === `customize`,
        s = {
          gap: o ? e.imageSwatches.imageGap : (e.swatches?.gap ?? 8),
          height: o ? e.imageSwatches.imageHeight : (e.swatches?.height ?? 40),
          width: o ? e.imageSwatches.imageWidth : (e.swatches?.width ?? 40),
          radius: o ? e.imageSwatches.imageRadius : (e.swatches?.radius ?? `50%`),
          padding: o ? e.imageSwatches.imagePadding : (e.swatches?.padding ?? 2),
          unselected: o
            ? e.imageSwatches.imageUnselected
            : (e.swatches?.unselected ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                background: `#FFFFFF00`,
              }),
          hovered: o
            ? e.imageSwatches.imageHovered
            : (e.swatches?.hovered ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                background: `#FFFFFF00`,
              }),
          selected: o
            ? e.imageSwatches.imageSelected
            : (e.swatches?.selected ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                background: `#FFFFFF00`,
              }),
          outOfStock: o
            ? e.imageSwatches.imageOutOfStock
            : (e.swatches?.outOfStock ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                opacity: 0.5,
                background: `#FFFFFF00`,
                strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
              }),
        };
      return d(
        `div`,
        {
          role: `radiogroup`,
          "aria-label": `Select ${t.name}`,
          "aria-required": !i,
          "aria-invalid": !i,
          children: [
            u(`div`, {
              style: {
                width: `100%`,
                display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                justifyContent:
                  e.titleConfigs.font.textAlign === `center`
                    ? `center`
                    : e.titleConfigs.font.textAlign === `right`
                      ? `flex-end`
                      : `flex-start`,
                marginBottom:
                  J(e, `containerConfigs.gap2`) === void 0
                    ? J(e, `titleConfigs.gap`)
                    : J(e, `containerConfigs.gap2`),
                overflow: `visible`,
              },
              children: d(`div`, {
                style: {
                  width: `100%`,
                  display: `flex`,
                  justifyContent: `flex-start`,
                  alignItems: `center`,
                  overflow: `visible`,
                },
                children: [
                  e.titleConfigs.visible &&
                    u(`label`, {
                      id: `variant-title-${t.name}`,
                      htmlFor: `variant-${t.name}`,
                      style: {
                        ...J(e, `titleConfigs.font`),
                        color: J(e, `titleConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        margin: 0,
                        cursor: `pointer`,
                        textTransform: J(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.titleConfigs.display || `{{Option}}`).replace(
                        `{{Option}}`,
                        t.name
                      ),
                    }),
                  e.selectedConfigs.visible &&
                    oe[t.name] &&
                    u(`p`, {
                      style: {
                        ...J(e, `selectedConfigs.font`),
                        color: J(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: J(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: oe[t.name],
                    }),
                  e.selectedConfigs.visible &&
                    e.selectedConfigs.emptyVisible &&
                    !oe[t.name] &&
                    u(`p`, {
                      style: {
                        ...J(e, `selectedConfigs.font`),
                        color: J(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: J(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.selectedConfigs.emptyText || `Select {{Option Value}}`).replace(
                        `{{Option Value}}`,
                        t.name
                      ),
                    }),
                ],
              }),
            }),
            d(`div`, {
              style: {
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
                gap: s.gap,
                width: `100%`,
              },
              children: [
                n.map((e, n) => {
                  let r = oe[t.name] === e,
                    i = Array.from(Object.entries({ ...oe, [t.name]: e })),
                    a = y.find((e) => i.every(([t, n]) => e[t] === n) && e.availableForSale),
                    o = a || (m && !a),
                    c = De.find((t) => t.name.toLowerCase() === e.toLowerCase())?.url || ``,
                    l = () =>
                      r && !a
                        ? s.selected.border
                        : a
                          ? r
                            ? s.selected.border
                            : s.unselected.border
                          : s.outOfStock.border,
                    f = () =>
                      r && !a
                        ? s.selected.background
                        : a
                          ? r
                            ? s.selected.background
                            : s.unselected.background
                          : s.outOfStock.background,
                    p = l(),
                    ee = f();
                  return d(
                    `div`,
                    {
                      className: `variant-swatch-container`,
                      style: { position: `relative` },
                      children: [
                        u(`button`, {
                          role: `radio`,
                          "aria-checked": r,
                          "aria-label": `${t.name} ${e}${a ? `` : ` (Out of Stock)`}`,
                          title: e,
                          disabled: !a && !m,
                          onClick: () => {
                            (a || m) && Ze(t.name, e);
                          },
                          tabIndex: a || m ? 0 : -1,
                          onMouseEnter: (e) => {
                            if (a || m) {
                              let t = e.currentTarget,
                                { borderWidth: n, borderStyle: r } = s.hovered.border;
                              ((t.style.border = `${n}px ${r} ${s.hovered.border.borderColor}`),
                                (t.style.background = s.hovered.background));
                            }
                          },
                          onMouseLeave: (e) => {
                            let t = e.currentTarget,
                              n = l(),
                              r = f();
                            ((t.style.border = `${n.borderWidth}px ${n.borderStyle} ${n.borderColor}`),
                              (t.style.background = r));
                          },
                          style: {
                            width: s.width,
                            height: s.height,
                            borderRadius: s.radius,
                            border: `${p.borderWidth}px ${p.borderStyle} ${p.borderColor}`,
                            padding: s.padding,
                            cursor: a || m ? `pointer` : `not-allowed`,
                            background: ee,
                            position: `relative`,
                          },
                          children: d(`div`, {
                            style: {
                              width: `100%`,
                              height: `100%`,
                              borderRadius: s.radius,
                              backgroundImage: `url(${c})`,
                              backgroundSize: `cover`,
                              backgroundPosition: `center`,
                              opacity: a ? 1 : s.outOfStock.opacity,
                              position: `relative`,
                              overflow: `hidden`,
                            },
                            children: [
                              !r &&
                                !a &&
                                s.outOfStock.strike?.line &&
                                u(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: u(`line`, {
                                    x1:
                                      (s.outOfStock.strike?.direction === `horizontal` ||
                                        s.outOfStock.strike?.direction,
                                      0),
                                    y1:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 0
                                          : 100,
                                    stroke: s.outOfStock.strike?.color,
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                              r &&
                                !a &&
                                s.outOfStock.strike?.line &&
                                u(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: o ? `auto` : `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: u(`line`, {
                                    x1:
                                      (s.outOfStock.strike?.direction === `horizontal` ||
                                        s.outOfStock.strike?.direction,
                                      0),
                                    y1:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 0
                                          : 100,
                                    stroke: s.outOfStock.strike?.color,
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        u(`div`, {
                          className: `swatch-tooltip`,
                          style: {
                            position: `absolute`,
                            top: `100%`,
                            left: `50%`,
                            transform: `translateX(-50%)`,
                            backgroundColor: `rgba(0, 0, 0, 0.8)`,
                            color: `#FFFFFF`,
                            padding: `4px 8px`,
                            borderRadius: `4px`,
                            fontSize: `12px`,
                            marginTop: `4px`,
                            whiteSpace: `nowrap`,
                            opacity: 0,
                            visibility: `hidden`,
                            transition: `opacity 0.2s ease-in-out, visibility 0.2s ease-in-out`,
                            zIndex: 10,
                          },
                          children: e,
                        }),
                      ],
                    },
                    e
                  );
                }),
                !i &&
                  u(`div`, {
                    role: `alert`,
                    style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                    children: `"${t.name}" missing`,
                  }),
              ],
            }),
          ],
        },
        t.name
      );
    },
    it = (t, n, r, i, a) => {
      if (
        !(e.variantImageTitles || [`Amount`]).some(
          (e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()
        ) ||
        !e.variantImages?.image
      )
        return tt(t, n, r, i, a);
      let o = new Map();
      e.variantImageIds && (o = Ye(e.variantImageIds));
      let s;
      return (
        (s =
          e.variantImages.imageStyles === `customize`
            ? {
                gap: e.variantImages.imageGap,
                height: e.variantImages.imageHeight,
                width: e.variantImages.imageWidth,
                radius: e.variantImages.imageRadius,
                padding: e.variantImages.imagePadding,
                unselected: e.variantImages.imageUnselected,
                hovered: e.variantImages.imageHovered,
                selected: e.variantImages.imageSelected,
                imageOutOfStock: e.variantImages.imageOutOfStock,
              }
            : e.variantImages.imageStyles === `inherit`
              ? e.imageSwatches?.image && e.imageSwatches?.imageStyles
                ? {
                    gap: e.imageSwatches.imageGap,
                    height: e.imageSwatches.imageHeight,
                    width: e.imageSwatches.imageWidth,
                    radius: e.imageSwatches.imageRadius,
                    padding: e.imageSwatches.imagePadding,
                    unselected: e.imageSwatches.imageUnselected,
                    hovered: e.imageSwatches.imageHovered,
                    selected: e.imageSwatches.imageSelected,
                    imageOutOfStock: e.imageSwatches.imageOutOfStock,
                  }
                : e.swatches
                  ? {
                      gap: e.swatches.gap ?? 8,
                      height: e.swatches.height ?? 40,
                      width: e.swatches.width ?? 40,
                      radius: e.swatches.radius ?? `50%`,
                      padding: e.swatches.padding ?? 2,
                      unselected: e.swatches.unselected ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        background: `#FFFFFF00`,
                      },
                      hovered: e.swatches.hovered ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                        background: `#FFFFFF00`,
                      },
                      selected: e.swatches.selected ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                        background: `#FFFFFF00`,
                      },
                      imageOutOfStock: e.swatches.outOfStock ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        opacity: 0.5,
                        background: `#FFFFFF00`,
                        strike: {
                          line: !1,
                          color: `rgba(0, 0, 0, 0.16)`,
                          direction: `diagonal-down`,
                        },
                      },
                    }
                  : {
                      gap: 8,
                      height: 40,
                      width: 40,
                      radius: `50%`,
                      padding: 2,
                      unselected: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        background: `#FFFFFF00`,
                      },
                      hovered: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                        background: `#FFFFFF00`,
                      },
                      selected: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                        background: `#FFFFFF00`,
                      },
                      imageOutOfStock: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        opacity: 0.5,
                        background: `#FFFFFF00`,
                        strike: {
                          line: !1,
                          color: `rgba(0, 0, 0, 0.16)`,
                          direction: `diagonal-down`,
                        },
                      },
                    }
              : {
                  gap: 8,
                  height: 40,
                  width: 40,
                  radius: `50%`,
                  padding: 2,
                  unselected: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                    background: `#FFFFFF00`,
                  },
                  hovered: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                    background: `#FFFFFF00`,
                  },
                  selected: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                    background: `#FFFFFF00`,
                  },
                  imageOutOfStock: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                    opacity: 0.5,
                    background: `#FFFFFF00`,
                    strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
                  },
                }),
        d(
          `div`,
          {
            role: `radiogroup`,
            "aria-label": `Select ${t.name}`,
            "aria-required": !i,
            "aria-invalid": !i,
            children: [
              u(`div`, {
                style: {
                  width: `100%`,
                  display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                  justifyContent:
                    e.titleConfigs.font.textAlign === `center`
                      ? `center`
                      : e.titleConfigs.font.textAlign === `right`
                        ? `flex-end`
                        : `flex-start`,
                  marginBottom:
                    J(e, `containerConfigs.gap2`) === void 0
                      ? J(e, `titleConfigs.gap`)
                      : J(e, `containerConfigs.gap2`),
                  overflow: `visible`,
                },
                children: d(`div`, {
                  style: {
                    width: `100%`,
                    display: `flex`,
                    justifyContent: `flex-start`,
                    alignItems: `center`,
                    overflow: `visible`,
                  },
                  children: [
                    e.titleConfigs.visible &&
                      u(`label`, {
                        id: `variant-title-${t.name}`,
                        htmlFor: `variant-${t.name}`,
                        style: {
                          ...J(e, `titleConfigs.font`),
                          color: J(e, `titleConfigs.color`),
                          whiteSpace: `nowrap`,
                          overflow: `visible`,
                          margin: 0,
                          cursor: `pointer`,
                          textTransform: J(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                        },
                        children: (e.titleConfigs.display || `{{Option}}`).replace(
                          `{{Option}}`,
                          t.name
                        ),
                      }),
                    e.selectedConfigs.visible &&
                      oe[t.name] &&
                      u(`p`, {
                        style: {
                          ...J(e, `selectedConfigs.font`),
                          color: J(e, `selectedConfigs.color`),
                          whiteSpace: `nowrap`,
                          overflow: `visible`,
                          paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                          margin: 0,
                          textTransform: J(
                            e,
                            `selectedConfigs.textTransform`,
                            `None`
                          ).toLowerCase(),
                        },
                        children: oe[t.name],
                      }),
                    e.selectedConfigs.visible &&
                      e.selectedConfigs.emptyVisible &&
                      !oe[t.name] &&
                      u(`p`, {
                        style: {
                          ...J(e, `selectedConfigs.font`),
                          color: J(e, `selectedConfigs.color`),
                          whiteSpace: `nowrap`,
                          overflow: `visible`,
                          paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                          margin: 0,
                          textTransform: J(
                            e,
                            `selectedConfigs.textTransform`,
                            `None`
                          ).toLowerCase(),
                        },
                        children: (
                          e.selectedConfigs.emptyText || `Select {{Option Value}}`
                        ).replace(`{{Option Value}}`, t.name),
                      }),
                  ],
                }),
              }),
              d(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `row`,
                  flexWrap: `wrap`,
                  gap: s.gap,
                  width: `100%`,
                },
                children: [
                  n.map((n, r) => {
                    let i = oe[t.name] === n,
                      a = Array.from(Object.entries({ ...oe, [t.name]: n })),
                      c = y.find((e) => a.every(([t, n]) => e[t] === n) && e.availableForSale),
                      l = c || (m && !c),
                      f = y
                        .find((e) => a.every(([t, n]) => e[t] === n))
                        ?.id?.split(`/`)
                        .pop(),
                      p,
                      ee;
                    f &&
                      _?.variants?.edges &&
                      (ee = _.variants.edges.find(({ node: e }) => e.id.split(`/`).pop() === f));
                    let h;
                    if (f && o.size > 0 && ((h = o.get(f)), h)) {
                      let t = e[`image${h}`];
                      t && (p = t);
                    }
                    !p && ee && ee.node?.image?.url && (p = ee.node.image.url);
                    let g = () =>
                        i && !c
                          ? s.selected.border
                          : c
                            ? i
                              ? s.selected.border
                              : s.unselected.border
                            : s.imageOutOfStock.border,
                      te = () =>
                        i && !c
                          ? s.selected.background
                          : c
                            ? i
                              ? s.selected.background
                              : s.unselected.background
                            : s.imageOutOfStock.background,
                      ne = g(),
                      re = te();
                    return d(
                      `div`,
                      {
                        className: `variant-swatch-container`,
                        style: { position: `relative` },
                        children: [
                          u(`button`, {
                            role: `radio`,
                            "aria-checked": i,
                            "aria-label": `${t.name} ${n}${l ? `` : ` (Out of Stock)`}`,
                            title: n,
                            disabled: !l,
                            onClick: () => {
                              l && Ze(t.name, n);
                            },
                            tabIndex: l ? 0 : -1,
                            onMouseEnter: (e) => {
                              if (l) {
                                let t = e.currentTarget,
                                  { borderWidth: n, borderStyle: r } = s.hovered.border;
                                ((t.style.border = `${n}px ${r} ${s.hovered.border.borderColor}`),
                                  (t.style.background = s.hovered.background));
                              }
                            },
                            onMouseLeave: (e) => {
                              let t = e.currentTarget,
                                n = g(),
                                r = te();
                              ((t.style.border = `${n.borderWidth}px ${n.borderStyle} ${n.borderColor}`),
                                (t.style.background = r));
                            },
                            style: {
                              width: s.width,
                              height: s.height,
                              borderRadius: s.radius,
                              border: `${ne.borderWidth}px ${ne.borderStyle} ${ne.borderColor}`,
                              padding: s.padding,
                              cursor: l ? `pointer` : `not-allowed`,
                              background: re,
                              position: `relative`,
                            },
                            children: d(`div`, {
                              style: {
                                width: `100%`,
                                height: `100%`,
                                borderRadius: s.radius,
                                backgroundImage: p ? `url(${p})` : void 0,
                                backgroundSize: `cover`,
                                backgroundPosition: `center`,
                                opacity: c ? 1 : s.imageOutOfStock.opacity,
                                backgroundColor: p ? void 0 : `#F0F0F0`,
                                position: `relative`,
                                overflow: `hidden`,
                              },
                              children: [
                                !i &&
                                  !c &&
                                  u(`div`, {
                                    style: {
                                      position: `absolute`,
                                      top: 0,
                                      left: 0,
                                      width: `100%`,
                                      height: `100%`,
                                      background: s.imageOutOfStock?.background || `FFFFFF80`,
                                      opacity: s.imageOutOfStock.opacity,
                                      borderRadius: s.radius,
                                      pointerEvents: `none`,
                                      zIndex: 1,
                                    },
                                  }),
                                i &&
                                  !c &&
                                  s.imageOutOfStock.strike?.line &&
                                  u(`svg`, {
                                    style: {
                                      position: `absolute`,
                                      top: 0,
                                      left: 0,
                                      width: `100%`,
                                      height: `100%`,
                                      pointerEvents: l ? `auto` : `none`,
                                    },
                                    viewBox: `0 0 100 100`,
                                    preserveAspectRatio: `none`,
                                    children: u(`line`, {
                                      x1:
                                        (s.imageOutOfStock.strike?.direction === `horizontal` ||
                                          s.imageOutOfStock.strike?.direction,
                                        0),
                                      y1:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 100
                                            : 0,
                                      x2: 100,
                                      y2:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 0
                                            : 100,
                                      stroke: s.imageOutOfStock.strike?.color,
                                      strokeWidth: `1`,
                                      vectorEffect: `non-scaling-stroke`,
                                    }),
                                  }),
                                !i &&
                                  !c &&
                                  s.imageOutOfStock.strike?.line &&
                                  u(`svg`, {
                                    style: {
                                      position: `absolute`,
                                      top: 0,
                                      left: 0,
                                      width: `100%`,
                                      height: `100%`,
                                      pointerEvents: `none`,
                                    },
                                    viewBox: `0 0 100 100`,
                                    preserveAspectRatio: `none`,
                                    children: u(`line`, {
                                      x1:
                                        (s.imageOutOfStock.strike?.direction === `horizontal` ||
                                          s.imageOutOfStock.strike?.direction,
                                        0),
                                      y1:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 100
                                            : 0,
                                      x2: 100,
                                      y2:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 0
                                            : 100,
                                      stroke: s.imageOutOfStock.strike?.color,
                                      strokeWidth: `1`,
                                      vectorEffect: `non-scaling-stroke`,
                                    }),
                                  }),
                              ],
                            }),
                          }),
                          u(`div`, {
                            className: `swatch-tooltip`,
                            style: {
                              position: `absolute`,
                              top: `100%`,
                              left: `50%`,
                              transform: `translateX(-50%)`,
                              backgroundColor: `rgba(0, 0, 0, 0.8)`,
                              color: `#FFFFFF`,
                              padding: `4px 8px`,
                              borderRadius: `4px`,
                              fontSize: `12px`,
                              marginTop: `4px`,
                              whiteSpace: `nowrap`,
                              opacity: 0,
                              visibility: `hidden`,
                              transition: `opacity 0.2s ease-in-out, visibility 0.2s ease-in-out`,
                              zIndex: 10,
                            },
                            children: n,
                          }),
                        ],
                      },
                      n
                    );
                  }),
                  !i &&
                    u(`div`, {
                      role: `alert`,
                      style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                      children: `"${t.name}" missing`,
                    }),
                ],
              }),
            ],
          },
          t.name
        )
      );
    },
    at =
      !Array.isArray(J(_, `variants.edges`)) ||
      (!ee && (J(_, `variants.edges`) || []).length <= 1) ||
      !((e) =>
        e &&
        Array.isArray(J(e, `options`)) &&
        J(e, `options`, []).length > 0 &&
        !(
          J(e, `options`, []).length === 1 &&
          J(e, `options.0.name`) === `Title` &&
          J(e, `options.0.values.0`) === `Default Title`
        ))(_) ||
      (fe && l === `None`);
  return _ === `404` || at
    ? null
    : u(`div`, {
        ref: we,
        className: `fc-product-variants-container`,
        style: {
          padding: e.containerConfigs.padding,
          display: `flex`,
          flexDirection: e.containerConfigs.direction === `horizontal` ? `row` : `column`,
          flexWrap: e.containerConfigs.direction === `horizontal` ? `wrap` : `nowrap`,
          gap: e.containerConfigs.gap,
          width: `100%`,
          background: e.containerConfigs.background,
          borderRadius: e.containerConfigs.radius,
        },
        role: `region`,
        "aria-label": `Product Variants`,
        children: ue.map((t, n) => {
          let r = n === (J(_, `options`) || [{}]).length - 1,
            i = !v || !!oe[t.name],
            a = `"${t.name}" missing`,
            o = t.values;
          if (h?.variantGroups !== `all` && h?.variantTitles) {
            let e = J(_, `variants.edges`, []).filter(({ node: e }) =>
                e.selectedOptions.some((e) => h.variantTitles?.includes(e.name))
              ),
              n = new Set();
            (e.forEach(({ node: e }) => {
              let r = e.selectedOptions.find((e) => e.name === t.name);
              r && n.add(r.value);
            }),
              (o = t.values.filter((e) => n.has(e))));
          }
          let c = e.colorTitles || [`Color`, `Colour`],
            l = e.imageTitles || [],
            d = e.variantImageTitles || [],
            f =
              c.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) &&
              e.swatches?.colorEnabled === !0,
            p =
              l.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) &&
              e.imageSwatches?.image === !0,
            ee =
              d.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) &&
              e.variantImages?.image === !0;
          return u(
            `div`,
            {
              style: {
                flex:
                  s === `Dropdown` && e.containerConfigs.direction === `horizontal`
                    ? `1 1 0`
                    : s === `Dropdown`
                      ? `1 1 auto`
                      : e.containerConfigs.direction === `horizontal`
                        ? `0 0 auto`
                        : `1 1 auto`,
                minWidth: s === `Dropdown` ? `88px` : `auto`,
                maxWidth: `none`,
                width:
                  s === `Dropdown`
                    ? `100%`
                    : e.containerConfigs.direction === `horizontal`
                      ? `auto`
                      : `100%`,
                ...(s === `Dropdown` &&
                e.containerConfigs.direction === `horizontal` &&
                e.containerConfigs.gap === 0 &&
                !r
                  ? { marginRight: `-1px` }
                  : {}),
              },
              children: f
                ? nt(t, o, r, i, a)
                : p
                  ? rt(t, o, r, i, a)
                  : ee
                    ? it(t, o, r, i, a)
                    : s === `Dropdown`
                      ? et(
                          t,
                          o,
                          r,
                          i,
                          a,
                          e,
                          Ze,
                          oe,
                          y,
                          J(_, `options`)?.findIndex((e) => e.name === t.name) || 0,
                          J(_, `options`)?.length || 0
                        )
                      : tt(t, o, r, i, a),
            },
            t.name
          );
        }),
      });
}
function Fk(e, t) {
  if (!e || !e.variants || !e.variants.edges.length || typeof t != `object` || !t) return null;
  let n = e.variants.edges.find(({ node: e }) =>
    Object.entries(t).every(([t, n]) =>
      e.selectedOptions.find((e) => e.name === t && e.value === n)
    )
  );
  return n ? n.node : null;
}
function Ik(e) {
  return e
    ? (e.match(Vk) || []).map((e) => {
        let [t, n] = e
            .slice(1, -1)
            .split(`•`)
            .map((e) => e.trim()),
          [r, i] = t.split(`:`).map((e) => e.trim());
        return { name: r, values: i.split(`,`).map((e) => e.trim()), id: n || `` };
      })
    : [];
}
function Lk(e) {
  if (!e) return [];
  let t = e.match(Vk) || [],
    n = [];
  for (let e = 0; e < t.length; e++) {
    let [r, i] = t[e]
        .slice(1, -1)
        .split(`•`)
        .map((e) => e.trim()),
      a = r.includes(` / `) ? r.split(` / `).map((e) => e.trim()) : [r.trim()];
    n.push({ combination: a, id: i || ``, availableForSale: !0 });
  }
  return n;
}
function Rk(e) {
  if (!e) return { options: [], variants: [], productId: null };
  let t = e.split(`••`).map((e) => e.trim()),
    n = t[0],
    r = t.length > 1 ? t[1] : ``,
    i = t.length > 2 ? t[2] : null;
  return { options: Ik(n), variants: Lk(r), productId: i };
}
var zk,
  Bk,
  Vk,
  Hk,
  Uk = e(() => {
    (t(),
      s(),
      n(),
      _(),
      kO(),
      sk(),
      Ok(),
      RO(),
      mk(),
      (zk = (e) => e === `Add to Cart` || e === `Buy Now`),
      (Bk = ({
        opt: e,
        filteredValues: t,
        isLast: n,
        valid: i,
        invalidMsg: a,
        props: o,
        dispatchOptionSelectedEvent: s,
        selectedOptions: c,
        combinations: l,
        index: f,
        totalCount: ee,
      }) => {
        let [m, h] = p(!1),
          [g, te] = p(!1),
          { dropdownConfigs: ne } = o,
          {
            font: re,
            selected: _,
            hover: ie,
            focus: v,
            unselected: ae,
            radius: oe,
            padding: se,
            icon: y,
          } = ne,
          ce = String(se).trim().split(/\s+/),
          le = ce.length >= 2 ? ce[1] : ce[0],
          ue = (ae.text || `Select {{variant}}`).replace(`{{variant}}`, e.name),
          de = c[e.name] || ue,
          fe = de === ue,
          pe = f === ee - 1,
          me = Number(o.containerConfigs.gap) === 0,
          he = o.containerConfigs.direction === `horizontal`,
          ge = {};
        me && !pe && (he ? (ge.marginRight = `-1px`) : (ge.marginBottom = `-1px`));
        let _e = fe ? ae.border.borderWidth : m ? ie.border.borderWidth : _.border.borderWidth,
          ve = `${_e}px solid ${fe ? ae.border.borderColor : m ? ie.border.borderColor : _.border.borderColor}`,
          ye = v?.offset === 0 ? -_e : v?.offset || 2,
          b = ((e, t) => {
            let n = e.match(/^(\d+(?:\.\d+)?)(px|%)$/);
            if (!n) return e;
            let [, r, i] = n;
            return i === `px` ? `${Math.max(0, parseFloat(r) + t)}px` : e;
          })(oe, ye);
        return u(
          `div`,
          {
            style: {
              width: `100%`,
              position: `relative`,
              zIndex: +!!g,
              overflow: `visible`,
              ...(he && me && !pe ? { marginRight: `-1px` } : {}),
            },
            className: `variant-dropdown-container ${he && me && !pe ? `horizontal-edge-to-edge` : ``}`,
            "data-horizontal": he ? `true` : `false`,
            "data-last": pe ? `true` : `false`,
            "data-edge-to-edge": me ? `true` : `false`,
            children: d(`div`, {
              style: { display: `flex`, flexDirection: `column`, gap: `0px` },
              children: [
                u(`div`, {
                  style: {
                    width: `100%`,
                    display: o.titleConfigs.visible || o.selectedConfigs.visible ? `flex` : `none`,
                    justifyContent:
                      o.titleConfigs.font.textAlign === `center`
                        ? `center`
                        : o.titleConfigs.font.textAlign === `right`
                          ? `flex-end`
                          : `flex-start`,
                    marginBottom:
                      J(o, `containerConfigs.gap2`) === void 0
                        ? J(o, `titleConfigs.gap`)
                        : J(o, `containerConfigs.gap2`),
                    overflow: `visible`,
                  },
                  children: d(`div`, {
                    style: {
                      width: `100%`,
                      display: `flex`,
                      justifyContent: `flex-start`,
                      alignItems: `center`,
                      overflow: `visible`,
                    },
                    children: [
                      o.titleConfigs.visible &&
                        u(`label`, {
                          id: `variant-title-${e.name}`,
                          htmlFor: `variant-${e.name}`,
                          style: {
                            ...J(o, `titleConfigs.font`),
                            color: J(o, `titleConfigs.color`),
                            whiteSpace: `nowrap`,
                            overflow: `visible`,
                            margin: 0,
                            cursor: `pointer`,
                            textTransform: J(o, `titleConfigs.textTransform`, `None`).toLowerCase(),
                          },
                          children: (o.titleConfigs.display || `{{Option}}`).replace(
                            `{{Option}}`,
                            e.name
                          ),
                        }),
                      o.selectedConfigs.visible &&
                        c[e.name] &&
                        u(`p`, {
                          style: {
                            ...J(o, `selectedConfigs.font`),
                            color: J(o, `selectedConfigs.color`),
                            whiteSpace: `nowrap`,
                            overflow: `visible`,
                            paddingLeft: o.titleConfigs.visible ? `${o.selectedConfigs.gap}px` : 0,
                            margin: 0,
                            textTransform: J(
                              o,
                              `selectedConfigs.textTransform`,
                              `None`
                            ).toLowerCase(),
                          },
                          children: c[e.name],
                        }),
                      o.selectedConfigs.visible &&
                        o.selectedConfigs.emptyVisible &&
                        !c[e.name] &&
                        u(`p`, {
                          style: {
                            ...J(o, `selectedConfigs.font`),
                            color: J(o, `selectedConfigs.color`),
                            whiteSpace: `nowrap`,
                            overflow: `visible`,
                            paddingLeft: o.titleConfigs.visible ? `${o.selectedConfigs.gap}px` : 0,
                            margin: 0,
                            textTransform: J(
                              o,
                              `selectedConfigs.textTransform`,
                              `None`
                            ).toLowerCase(),
                          },
                          children: (
                            o.selectedConfigs.emptyText || `Select {{Option Value}}`
                          ).replace(`{{Option Value}}`, e.name),
                        }),
                    ],
                  }),
                }),
                u(`div`, {
                  style: { position: `relative` },
                  children: d(`div`, {
                    className: `dropdown-inner`,
                    style: {
                      position: `relative`,
                      display: `flex`,
                      alignItems: `center`,
                      padding: se,
                      paddingRight: `calc(${le} + ${y.size}px + ${le})`,
                      backgroundColor: fe ? ae.background : m ? ie.background : _.background,
                      borderRadius: oe,
                      border: ve,
                      cursor: `pointer`,
                      "--hover-border-color": ie.border.borderColor,
                      "--focus-outline-color": v?.color || ie.border.borderColor,
                      "--focus-outline-width": `${v?.width || 2}px`,
                      "--focus-outline-offset": `${ye}px`,
                      "--focus-outline-radius": b,
                      ...ge,
                    },
                    children: [
                      u(`span`, {
                        style: {
                          pointerEvents: `none`,
                          whiteSpace: `nowrap`,
                          minWidth: `max-content`,
                          ...re,
                          color: fe ? ae.color : g || m ? ie.color : _.color,
                          textTransform: J(
                            o,
                            `dropdownConfigs.textTransform`,
                            `None`
                          ).toLowerCase(),
                        },
                        children: de,
                      }),
                      d(`select`, {
                        id: `variant-${e.name}`,
                        style: {
                          position: `absolute`,
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: `100%`,
                          height: `100%`,
                          boxSizing: `border-box`,
                          appearance: `none`,
                          WebkitAppearance: `none`,
                          background: `transparent`,
                          color: `transparent`,
                          border: `none`,
                          padding: 0,
                          margin: 0,
                          cursor: `pointer`,
                          outline: `none`,
                          opacity: 0,
                        },
                        value: de,
                        onChange: (t) => {
                          let n = t.target.value;
                          n !== ue && s(e.name, n);
                        },
                        onMouseDown: () => te(!0),
                        onMouseEnter: () => h(!0),
                        onMouseLeave: () => h(!1),
                        onFocus: () => te(!0),
                        onBlur: () => te(!1),
                        onKeyDown: (e) => {
                          if (e.key === `Enter` || e.key === ` `) {
                            e.preventDefault();
                            let t = e.target,
                              n = new MouseEvent(`mousedown`, {
                                bubbles: !0,
                                cancelable: !0,
                                view: r,
                              });
                            t.dispatchEvent(n);
                          } else (e.key === `ArrowDown` || e.key === `ArrowUp`) && te(!0);
                        },
                        "aria-label": `Select ${e.name}`,
                        "aria-invalid": !i,
                        "aria-required": `true`,
                        "aria-describedby": i ? void 0 : `variant-error-${e.name}`,
                        children: [
                          u(`option`, { value: ue, disabled: !0, children: ue }),
                          t.map((t) => {
                            let n;
                            if (o.behaviorConfigs?.filterVariants?.variantGroups === `all`) {
                              let r = Array.from(Object.entries({ ...c, [e.name]: t }));
                              n = l.find(
                                (e) => r.every(([t, n]) => e[t] === n) && e.availableForSale
                              );
                            } else
                              n = Array.from(
                                new Set(
                                  l
                                    .filter(
                                      (t) =>
                                        t.availableForSale &&
                                        Object.entries(c)
                                          .filter(([t]) => t !== e.name)
                                          .every(([e, n]) => t[e] === n)
                                    )
                                    .map((t) => t[e.name])
                                    .filter(Boolean)
                                )
                              ).includes(t);
                            return u(
                              `option`,
                              {
                                value: t,
                                disabled: !n,
                                style: {
                                  color: n ? _.color : ae.color,
                                  backgroundColor: n ? _.background : ae.background,
                                },
                                children: t,
                              },
                              t
                            );
                          }),
                        ],
                      }),
                      u(`div`, {
                        "aria-hidden": `true`,
                        style: {
                          position: `absolute`,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `center`,
                          padding: se,
                          pointerEvents: `none`,
                        },
                        children:
                          y.type === `custom` && y.customIcon
                            ? u(`img`, {
                                src: y.customIcon,
                                width: y.size,
                                height: y.size,
                                style: { objectFit: `contain` },
                                alt: `Dropdown icon`,
                              })
                            : u(`svg`, {
                                width: y.size,
                                height: y.size,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke:
                                  y.type === "default"
                                    ? y.color
                                    : fe
                                      ? ae.color
                                      : g || m
                                        ? ie.color
                                        : y.color,
                                strokeWidth: y.weight,
                                strokeLinecap: `butt`,
                                strokeLinejoin: `miter`,
                                children: u(`polyline`, { points: `6 9 12 15 18 9` }),
                              }),
                      }),
                    ],
                  }),
                }),
                !i &&
                  u(`div`, {
                    id: `variant-error-${e.name}`,
                    role: `alert`,
                    "aria-live": `polite`,
                    style: {
                      color: o.ErrorConfigs.errorColor,
                      ...o.ErrorConfigs.errorFont,
                      paddingTop: o.ErrorConfigs.errorPaddingTop,
                    },
                    children: a,
                  }),
              ],
            }),
          },
          e.name
        );
      }),
      (Vk = /\[(.*?)\]/g),
      (Hk = /\[Image (\d+) • (\d+)\]/g),
      re(Pk, {
        shopifyProductID: {
          type: v.String,
          title: `Product ID`,
          description: `Connect to Product ID from CMS (required)`,
        },
        variantImageIds: {
          type: v.String,
          title: `Image IDs`,
          description: `Connect to Image Variant IDs from CMS [Learn more](https://framercommerce.com/resources/docs/components/product#gallery)`,
        },
        variants: {
          type: v.String,
          title: `Variants`,
          description: `Connect to Variants from CMS (required)`,
        },
        images: {
          type: v.Object,
          title: `Image Triggers`,
          controls: {
            imageTrigger: {
              type: v.Enum,
              title: `Type`,
              options: [`None`, `Gallery`, `Scroll Sections`],
              defaultValue: `None`,
              description: `Trigger image changes elsewhere on the page. [Learn more](https://framercommerce.com/resources/docs/components/product#gallery)`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            imageChange: {
              type: v.Boolean,
              title: `Two-Way`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
              description: `Allow clicking on an image to change the selected variant.`,
              hidden: ({ imageTrigger: e }) => e !== `Gallery`,
            },
            offsetY: {
              type: v.Number,
              title: `Offset Y`,
              description: `Match your Offset Y to your on-canvas values.`,
              hidden: ({ imageTrigger: e }) => e !== `Scroll Sections`,
              defaultValue: 0,
              min: 0,
              step: 1,
              displayStepper: !0,
            },
          },
        },
        behaviorConfigs: {
          type: v.Object,
          title: `Behavior`,
          controls: {
            filterVariants: {
              type: v.Object,
              title: `Filter`,
              controls: {
                variantGroups: {
                  type: v.Enum,
                  title: `Groups`,
                  options: [`all`, `equals`, `doesn't equal`],
                  optionTitles: [`All`, `Equals`, `Doesn't Equal`],
                  defaultValue: `all`,
                  displaySegmentedControl: !0,
                  segmentedControlDirection: `vertical`,
                },
                variantTitles: {
                  type: v.Array,
                  title: `Titles`,
                  control: { type: v.String },
                  defaultValue: [],
                  description: `Show all variants or filter by title (e.g., "Color", "Size") using multiple components.`,
                  hidden: (e) => e.variantGroups === `all`,
                },
              },
            },
            action: {
              type: v.Enum,
              title: `Action`,
              options: [`Update Active`, `Add to Cart`, `Buy Now`],
              optionTitles: [`Update Active`, `Add to Cart`, `Buy Now`],
              defaultValue: `Update Active`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              description: `Only set Add to Cart or Buy Now when this component displays a single variant group.`,
            },
            triggerCart: {
              type: v.Boolean,
              title: `Cart`,
              description: `Trigger cart after adding item`,
              defaultValue: !0,
              hidden: (e) => e.action !== `Add to Cart`,
            },
            autoSelectFirst: {
              type: v.Boolean,
              title: `Select 1st`,
              description: `Auto-select the first available variant(s)`,
              defaultValue: !1,
              hidden: (e) => e.action === `Add to Cart` || e.action === `Buy Now`,
            },
            productPage: {
              type: v.Boolean,
              title: `PDP`,
              description: `Enable if this component is on a product page`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            showSingleVariants: {
              type: v.Boolean,
              title: `Singles`,
              description: `Show the variant selector if only one variant`,
              defaultValue: !1,
            },
            selectOutOfStock: {
              type: v.Boolean,
              title: `Out of Stock`,
              description: `Allow selecting out of stock variants`,
              defaultValue: !1,
              hidden: (e) => e.action !== `Update Active`,
            },
          },
        },
        containerConfigs: {
          type: v.Object,
          title: `Layout`,
          controls: {
            padding: { type: v.Padding, title: `Padding`, defaultValue: `8px` },
            gap2: { type: v.Number, title: `Title Gap`, min: 0, unit: `px` },
            gap: { type: v.Number, title: `Group Gap`, min: 0, unit: `px` },
            direction: {
              type: v.Enum,
              title: `Direction`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              defaultValue: `vertical`,
            },
            background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
            radius: { type: v.BorderRadius, title: `Radius`, defaultValue: `0px` },
          },
        },
        titleConfigs: {
          type: v.Object,
          title: `Title`,
          controls: {
            visible: {
              type: v.Boolean,
              title: `Title`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !0,
            },
            display: {
              type: v.String,
              title: `Display`,
              defaultValue: `{{Option}}`,
              placeholder: `{{Option}}`,
              description: `Use {{Option}} to dynamically display Color, Size, etc.`,
              hidden: (e) => !e.visible,
            },
            font: { type: v.Font, title: `Font`, controls: `extended`, hidden: (e) => !e.visible },
            textTransform: {
              type: v.Enum,
              title: `Transform`,
              options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
              defaultValue: `None`,
              hidden: (e) => !e.visible,
            },
            color: { type: v.Color, title: `Color`, hidden: (e) => !e.visible },
            gap: {
              type: v.Number,
              title: `Gap`,
              description: `Space between title and buttons/dropdown`,
              min: 0,
              unit: `px`,
              hidden: (e) => !e.visible || !0,
            },
          },
        },
        selectedConfigs: {
          type: v.Object,
          title: `Selected Value`,
          controls: {
            visible: {
              type: v.Boolean,
              title: `Value`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
            },
            gap: {
              type: v.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              unit: `px`,
              hidden: (e) => !e.visible,
            },
            font: { type: v.Font, title: `Font`, controls: `extended`, hidden: (e) => !e.visible },
            textTransform: {
              type: v.Enum,
              title: `Transform`,
              options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
              defaultValue: `None`,
              hidden: (e) => !e.visible,
            },
            color: { type: v.Color, title: `Color`, hidden: (e) => !e.visible },
            emptyVisible: {
              type: v.Boolean,
              title: `Empty`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden: (e) => !e.visible,
            },
            emptyText: {
              type: v.String,
              title: `Display`,
              description: `Use {{Option Value}} to dynamically display Blue, Medium, etc.`,
              placeholder: `Select {{Option Value}}`,
              defaultValue: `Select {{Option Value}}`,
              hidden: (e) => !e.visible || !e.emptyVisible,
            },
          },
        },
        style: {
          type: v.Enum,
          title: `Style`,
          options: [`Buttons`, `Dropdown`],
          optionTitles: [`Buttons`, `Dropdown`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          defaultValue: `Buttons`,
        },
        buttonConfigs: {
          type: v.Object,
          title: `Buttons`,
          hidden: (e) => e.style !== `Buttons`,
          controls: {
            layout: {
              type: v.Enum,
              title: `Layout`,
              options: [`stack`, `grid`],
              optionTitles: [`Stack`, `Grid`],
              displaySegmentedControl: !0,
              defaultValue: `stack`,
            },
            direction: {
              type: v.Enum,
              title: `Direction`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              defaultValue: `vertical`,
              hidden: (e) => e.layout === `grid`,
            },
            columns: {
              type: v.Enum,
              title: `Columns`,
              options: [`auto`, `fixed`],
              optionTitles: [`Auto`, `Fixed`],
              displaySegmentedControl: !0,
              defaultValue: `auto`,
              hidden: (e) => e.layout !== `grid`,
            },
            columnCount: {
              type: v.Number,
              title: `Columns`,
              defaultValue: 3,
              min: 1,
              step: 1,
              displayStepper: !0,
              hidden: (e) => e.layout !== `grid` || e.columns === `auto`,
            },
            gridWidth: {
              type: v.Number,
              title: `Min Width`,
              defaultValue: 100,
              min: 1,
              max: 1e3,
              step: 1,
              hidden: (e) => e.layout !== `grid` || e.columns === `fixed`,
            },
            maxColumns: {
              type: v.Number,
              title: `Max Col`,
              defaultValue: 4,
              min: 1,
              step: 1,
              displayStepper: !0,
              hidden: (e) => e.layout !== `grid` || e.columns === `fixed`,
            },
            gap: { type: v.Number, title: `Gap X`, min: 0 },
            gapY: { type: v.Number, title: `Gap Y`, defaultValue: 8, min: 0, step: 1 },
            radius: { type: v.BorderRadius, title: `Radius`, defaultValue: `4px` },
            padding: { type: v.Padding, title: `Padding`, defaultValue: `8px` },
            width: {
              type: v.Boolean,
              title: `Width`,
              enabledTitle: `Fill`,
              disabledTitle: `Fit`,
              defaultValue: !1,
              hidden: (e) => e.direction !== `vertical`,
            },
            unselected: {
              type: v.Object,
              title: `Default`,
              controls: {
                font: {
                  type: v.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontFamily: `Inter` },
                },
                textTransform: {
                  type: v.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                color: { type: v.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0,0,0,0.08)`,
                    },
                  },
                },
              },
            },
            hovered: {
              type: v.Object,
              title: `Hover`,
              controls: {
                font: {
                  type: v.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontFamily: `Inter` },
                },
                textTransform: {
                  type: v.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                color: { type: v.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(0, 0, 0, 0.03)` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 1)`,
                    },
                  },
                },
              },
            },
            selected: {
              type: v.Object,
              title: `Selected`,
              controls: {
                font: {
                  type: v.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
                },
                textTransform: {
                  type: v.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                color: { type: v.Color, title: `Text`, defaultValue: `#FFFFFF` },
                background: { type: v.Color, title: `BG`, defaultValue: `#000000` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: v.Color, title: `Color`, defaultValue: `#000000` },
                  },
                },
              },
            },
            outOfStock: {
              type: v.Object,
              title: `Out Of Stock`,
              controls: {
                preview: {
                  type: v.Boolean,
                  title: `Preview`,
                  enabledTitle: `On`,
                  disabledTitle: `Off`,
                  defaultValue: !1,
                },
                font: {
                  type: v.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
                },
                color: { type: v.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 0.40)` },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(0, 0, 0, 0.08)` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(255, 255, 255, 1)`,
                    },
                  },
                },
                textTransform: {
                  type: v.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                strike: {
                  type: v.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: v.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    size: {
                      type: v.Enum,
                      title: `Size`,
                      options: [`text`, `container`],
                      optionTitles: [`Text`, `Container`],
                      defaultValue: `container`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                    color: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: v.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line || e.size === `text`,
                    },
                  },
                },
              },
            },
          },
        },
        dropdownConfigs: {
          type: v.Object,
          title: `Dropdown`,
          hidden: (e) => e.style !== `Dropdown`,
          controls: {
            font: { type: v.Font, title: `Font`, controls: `extended` },
            textTransform: {
              type: v.Enum,
              title: `Transform`,
              options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
              defaultValue: `None`,
            },
            unselected: {
              type: v.Object,
              title: `Unselected`,
              controls: {
                text: {
                  type: v.String,
                  title: `Text`,
                  defaultValue: `Select {{variant}}`,
                  description: `Use {{variant}} to insert the variant name`,
                },
                color: { type: v.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 0.48)` },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.08)`,
                    },
                  },
                },
              },
            },
            selected: {
              type: v.Object,
              title: `Selected`,
              controls: {
                color: { type: v.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
              },
            },
            hover: {
              type: v.Object,
              title: `Hover`,
              controls: {
                color: { type: v.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(0, 0, 0, 0.04)` },
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 1)`,
                    },
                  },
                },
              },
            },
            focus: {
              type: v.Object,
              title: `Focus`,
              controls: {
                width: {
                  type: v.Number,
                  title: `Width`,
                  defaultValue: 2,
                  min: 1,
                  max: 20,
                  step: 1,
                  displayStepper: !0,
                },
                offset: {
                  type: v.Number,
                  title: `Offset`,
                  defaultValue: 2,
                  min: 0,
                  max: 20,
                  step: 1,
                  displayStepper: !0,
                },
                color: { type: v.Color, title: `Color` },
              },
            },
            radius: { type: v.BorderRadius, title: `Radius`, defaultValue: `4px` },
            padding: { type: v.Padding, title: `Padding`, defaultValue: `16px 16px 16px 16px` },
            icon: {
              type: v.Object,
              title: `Icon`,
              controls: {
                type: {
                  type: v.Enum,
                  title: `Type`,
                  options: [`default`, `custom`],
                  optionTitles: [`Default`, `Custom`],
                  defaultValue: `default`,
                  displaySegmentedControl: !0,
                },
                color: {
                  type: v.Color,
                  title: `Color`,
                  defaultValue: `rgba(0, 0, 0, 1)`,
                  hidden: (e) => e.type === `custom`,
                },
                size: { type: v.Number, title: `Size`, defaultValue: 12, min: 8, max: 64, step: 1 },
                weight: {
                  type: v.Number,
                  title: `Weight`,
                  defaultValue: 2,
                  min: 0.5,
                  max: 4,
                  step: 0.5,
                  hidden: (e) => e.type === `custom`,
                },
                customIcon: { type: v.Image, title: `Image`, hidden: (e) => e.type !== `custom` },
              },
            },
          },
        },
        swatches: {
          type: v.Object,
          title: `Color Swatches`,
          controls: {
            colorEnabled: {
              type: v.Boolean,
              title: `Color`,
              defaultValue: !0,
              enabledTitle: `On`,
              disabledTitle: `Off`,
              description: `Show swatches for Color variants. Set hex codes in the plugin. [Learn more](https://framercommerce.com/resources/academy/variant-colors)`,
            },
            gap: {
              type: v.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              step: 4,
              hidden: (e) => !e.colorEnabled,
            },
            height: {
              type: v.Number,
              title: `Height`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.colorEnabled,
            },
            width: {
              type: v.Number,
              title: `Width`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.colorEnabled,
            },
            radius: {
              type: v.BorderRadius,
              title: `Radius`,
              defaultValue: `50%`,
              hidden: (e) => !e.colorEnabled,
            },
            padding: {
              type: v.Padding,
              title: `Padding`,
              defaultValue: `2px`,
              hidden: (e) => !e.colorEnabled,
            },
            unselected: {
              type: v.Object,
              title: `Default`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0)`,
                    },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
              },
              hidden: (e) => !e.colorEnabled,
            },
            hovered: {
              type: v.Object,
              title: `Hover`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.colorEnabled,
            },
            selected: {
              type: v.Object,
              title: `Selected`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 1)`,
                    },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
              },
              hidden: (e) => !e.colorEnabled,
            },
            outOfStock: {
              type: v.Object,
              title: `Out of Stock`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: v.Color, title: `Color`, defaultValue: `rgba(0,0,0,0)` },
                  },
                },
                opacity: {
                  type: v.Number,
                  title: `Opacity`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
                strike: {
                  type: v.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: v.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    color: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: v.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                  },
                },
              },
              hidden: (e) => !e.colorEnabled,
            },
          },
        },
        colorTitles: {
          type: v.Array,
          title: `↳ Color Titles`,
          control: { type: v.String },
          defaultValue: [`Color`],
          hidden: (e) => !e.swatches?.colorEnabled,
        },
        colors: {
          type: v.Array,
          title: `↳ Color Values`,
          control: {
            type: v.Object,
            controls: {
              name: { type: v.String, title: `Name` },
              hex: { type: v.Color, title: `Color` },
            },
          },
          defaultValue: [
            [`green`, `#D0EF79`],
            [`blue`, `#053ECF`],
            [`pink`, `#CC7BE4`],
            [`black`, `#333233`],
          ],
          hidden: (e) => !e.swatches?.colorEnabled,
        },
        imageSwatches: {
          type: v.Object,
          title: `Image Swatches`,
          controls: {
            image: {
              type: v.Boolean,
              title: `Images`,
              defaultValue: !1,
              enabledTitle: `On`,
              disabledTitle: `Off`,
              description: `Show Image swatches for specific variants. [Learn more](https://framercommerce.com/resources/academy/variant-images)`,
            },
            imageStyles: {
              type: v.Enum,
              title: `Styles`,
              options: [`inherit`, `customize`],
              optionTitles: [`Inherit from Colors`, `Customize`],
              defaultValue: `inherit`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: (e) => !e.image,
            },
            imageGap: {
              type: v.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              step: 4,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHeight: {
              type: v.Number,
              title: `Height`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageWidth: {
              type: v.Number,
              title: `Width`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageRadius: {
              type: v.BorderRadius,
              title: `Radius`,
              defaultValue: `50%`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imagePadding: {
              type: v.Padding,
              title: `Padding`,
              defaultValue: `2px`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageUnselected: {
              type: v.Object,
              title: `Default`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: v.Color, title: `Color`, defaultValue: `#FFFFFF` },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHovered: {
              type: v.Object,
              title: `Hover`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageSelected: {
              type: v.Object,
              title: `Selected`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: v.Color, title: `Color`, defaultValue: `#000000` },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFFFFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageOutOfStock: {
              type: v.Object,
              title: `Out of Stock`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0)`,
                    },
                  },
                },
                opacity: {
                  type: v.Number,
                  title: `Opacity`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
                strike: {
                  type: v.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: v.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    color: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: v.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                  },
                },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
          },
        },
        imageTitles: {
          type: v.Array,
          title: `↳ Image Titles`,
          control: { type: v.String },
          defaultValue: [],
          hidden: (e) => !e.imageSwatches?.image,
        },
        swatchImages: {
          type: v.Array,
          title: `↳ Image Values`,
          control: {
            type: v.Object,
            controls: {
              name: { type: v.String, title: `Name` },
              url: { type: v.String, title: `URL` },
            },
          },
          defaultValue: [],
          hidden: (e) => !e.imageSwatches?.image,
        },
        variantImages: {
          type: v.Object,
          title: `Variant Images`,
          controls: {
            image: {
              type: v.Boolean,
              title: `Images`,
              defaultValue: !1,
              enabledTitle: `On`,
              disabledTitle: `Off`,
              description: `Show variant images for specific variants. Uses the variant's associated image from the product data.`,
            },
            imageStyles: {
              type: v.Enum,
              title: `Styles`,
              options: [`inherit`, `customize`],
              optionTitles: [`Inherit from Images`, `Customize`],
              defaultValue: `inherit`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: (e) => !e.image,
            },
            imageGap: {
              type: v.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              step: 4,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHeight: {
              type: v.Number,
              title: `Height`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageWidth: {
              type: v.Number,
              title: `Width`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageRadius: {
              type: v.BorderRadius,
              title: `Radius`,
              defaultValue: `50%`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imagePadding: {
              type: v.Padding,
              title: `Padding`,
              defaultValue: `2px`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageUnselected: {
              type: v.Object,
              title: `Default`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: v.Color, title: `Color`, defaultValue: `#FFFFFF` },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHovered: {
              type: v.Object,
              title: `Hover`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageSelected: {
              type: v.Object,
              title: `Selected`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: v.Color, title: `Color`, defaultValue: `#000000` },
                  },
                },
                background: { type: v.Color, title: `BG`, defaultValue: `#FFFFFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageOutOfStock: {
              type: v.Object,
              title: `Out of Stock`,
              controls: {
                border: {
                  type: v.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: v.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: v.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0)`,
                    },
                  },
                },
                opacity: {
                  type: v.Number,
                  title: `Opacity`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                background: { type: v.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
                strike: {
                  type: v.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: v.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    color: {
                      type: v.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: v.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                  },
                },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
          },
        },
        variantImageTitles: {
          type: v.Array,
          title: `↳ Variant Image Titles`,
          control: { type: v.String },
          defaultValue: [],
          hidden: (e) => !e.variantImages?.image,
        },
        ...(() => {
          let e = {};
          for (let t = 1; t <= 100; t++)
            e[`image${t}`] = {
              type: v.Image,
              title: `↳ Image ${t}`,
              hidden: (e) => !e.variantImages?.image || (t !== 1 && !e[`image${t - 1}`]),
            };
          return e;
        })(),
      }),
      (Pk.defaultProps = {
        shopifyProductID: ``,
        variantImageIds: ``,
        variants: ``,
        images: { imageTrigger: `None`, imageChange: !0, offsetY: 0 },
        behaviorConfigs: {
          autoSelectFirst: !1,
          showSingleVariants: !1,
          selectOutOfStock: !1,
          filterVariants: { variantGroups: `all`, variantTitles: [] },
          onClickAction: { action: `update`, purchaseType: `add to cart`, triggerCart: !0 },
        },
        style: `Buttons`,
        buttonConfigs: {
          gap: 8,
          radius: `4px`,
          padding: `8px`,
          direction: `horizontal`,
          width: !1,
          unselected: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(255, 255, 255, 1)`,
            border: `1px solid rgba(0,0,0,0.08)`,
            textTransform: `None`,
          },
          hovered: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(0, 0, 0, 0.03)`,
            border: `1px solid rgba(0, 0, 0, 1)`,
            textTransform: `None`,
          },
          selected: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(255, 255, 255, 1)`,
            background: `rgba(0, 0, 0, 1)`,
            border: `1px solid rgba(0, 0, 0, 1)`,
            textTransform: `None`,
          },
          outOfStock: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(0, 0, 0, 0.40)`,
            background: `rgba(0, 0, 0, 0.08)`,
            border: `1px solid rgba(255, 255, 255, 1)`,
            textTransform: `None`,
            preview: !1,
            strike: {
              line: !1,
              size: `container`,
              color: `rgba(0, 0, 0, 0.16)`,
              direction: `diagonal-down`,
            },
          },
        },
        dropdownConfigs: {
          font: void 0,
          textTransform: `None`,
          unselected: {
            text: `Select {{variant}}`,
            color: `rgba(0, 0, 0, 0.48)`,
            background: `rgba(255, 255, 255, 1)`,
            border: { borderWidth: 1, borderStyle: `solid`, borderColor: `rgba(0,0,0,0.08)` },
          },
          selected: {
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(255, 255, 255, 1)`,
            border: { borderWidth: 1, borderStyle: `solid`, borderColor: `rgba(0,0,0,1)` },
          },
          hover: {
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(0, 0, 0, 0.16)`,
            border: { borderWidth: 1, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
          },
          focus: { width: 2, offset: 2 },
          radius: `4px`,
          padding: `16px 16px 16px 16px`,
          icon: { type: `default`, color: `rgba(0, 0, 0, 1)`, size: 12, weight: 2 },
        },
        containerConfigs: { padding: `0px`, gap: 24, gap2: 8, direction: `vertical` },
        titleConfigs: {
          visible: !0,
          font: void 0,
          color: `rgba(0, 0, 0, 1)`,
          gap: 8,
          display: `{{Option}}`,
          textTransform: `None`,
        },
        selectedConfigs: {
          visible: !1,
          gap: 8,
          font: void 0,
          color: `rgba(0, 0, 0, 1)`,
          emptyVisible: !0,
          emptyText: `Select {{Option Value}}`,
          textTransform: `None`,
        },
        swatches: {
          colorEnabled: !0,
          gap: 8,
          height: 40,
          width: 40,
          radius: `50%`,
          padding: 2,
          unselected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          hovered: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0,0,0,0.16)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          selected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          outOfStock: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            opacity: 0,
            background: `rgba(255, 255, 255, 0)`,
            strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
          },
        },
        imageSwatches: {
          image: !1,
          imageStyles: `inherit`,
          imageGap: 8,
          imageHeight: 40,
          imageWidth: 40,
          imageRadius: `50%`,
          imagePadding: 2,
          imageUnselected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageHovered: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 0.20)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageSelected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageOutOfStock: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            opacity: 0,
            background: `rgba(255, 255, 255, 0)`,
            strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
          },
        },
        imageTitles: [],
        variantImageTitles: [],
        variantImages: {
          image: !1,
          imageStyles: `inherit`,
          imageGap: 8,
          imageHeight: 40,
          imageWidth: 40,
          imageRadius: `50%`,
          imagePadding: 2,
          imageUnselected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageHovered: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 0.20)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageSelected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageOutOfStock: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            opacity: 0,
            background: `rgba(255, 255, 255, 0)`,
            strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
          },
        },
      }));
  }),
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk = e(() => {
    (s(),
      _(),
      n(),
      (Wk = `var(--framer-icon-mask)`),
      (Gk = l(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Kk = m.create(Gk)),
      (qk = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Kk, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Jk = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 4.863 C 0 2.855 1.264 1.054 3.178 0.336 C 5.093 -0.383 7.262 0.129 8.632 1.622 C 8.727 1.722 8.86 1.779 9 1.779 C 9.139 1.779 9.273 1.722 9.368 1.622 C 10.734 0.119 12.908 -0.4 14.827 0.321 C 16.746 1.041 18.01 2.85 18 4.863 C 18 6.881 16.65 8.389 15.3 9.711 L 10.357 14.395 C 10.018 14.776 9.528 14.997 9.011 15 C 8.494 15.003 8.001 14.789 7.657 14.411 L 2.7 9.711 C 1.35 8.389 0 6.89 0 4.863" fill="transparent" height="15px" id="bsR9cdjjS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(1 2.49)" width="18px"/></svg>`),
      (Yk = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (Xk = h(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = Yk(e),
            l = ne(`214433510`, Jk);
          return u(qk, {
            ...c,
            className: g(`framer-MIBIw`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-MIBIw { -webkit-mask: ${Wk}; aspect-ratio: 1; display: block; mask: ${Wk}; width: 20px; }`,
        ],
        `framer-MIBIw`
      )),
      (Xk.displayName = `Heart`),
      re(Xk, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: v.Number },
      }));
  });
export {
  XO as A,
  NO as B,
  tk as C,
  ek as D,
  ok as E,
  IO as F,
  UT as G,
  AO as H,
  LO as I,
  J,
  Np as K,
  RO as L,
  GO as M,
  zO as N,
  nk as O,
  VO as P,
  MO as R,
  sk as S,
  $O as T,
  kO as U,
  jO as V,
  GT as W,
  uo as Y,
  pk as _,
  Mk as a,
  ZO as b,
  Nk as c,
  _k as d,
  Ok as f,
  fk as g,
  dk as h,
  Uk as i,
  HO as j,
  KO as k,
  Dk as l,
  uk as m,
  Zk as n,
  jk as o,
  mk as p,
  Lp as q,
  Pk as r,
  Ak as s,
  Xk as t,
  vk as u,
  QO as v,
  rk as w,
  ak as x,
  ik as y,
  PO as z,
};
//# sourceMappingURL=uMfPNtWsK.Ef5pNhkD.mjs.map
