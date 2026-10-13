import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  C as r,
  D as i,
  I as a,
  L as o,
  M as s,
  N as c,
  P as l,
  R as u,
  T as d,
  b as f,
  c as p,
  g as m,
  k as h,
  l as g,
  o as _,
  s as ee,
  v as te,
  y as ne,
} from "./react.D20wc1Tc.mjs";
import { a as re, r as ie, t as ae, x as v } from "./motion.D7PXL1QY.mjs";
import {
  B as oe,
  C as se,
  G as y,
  H as ce,
  J as le,
  O as ue,
  R as de,
  U as fe,
  V as pe,
  W as me,
  X as he,
  Y as ge,
  Z as _e,
  _ as ve,
  a as ye,
  c as be,
  f as xe,
  m as Se,
  n as Ce,
  p as we,
  q as Te,
  r as b,
  t as Ee,
} from "./framer.hOva67ft.mjs";
function x(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function De(e) {
  return z.call($n, e) ? !0 : z.call(Qn, e) ? !1 : Zn.test(e) ? ($n[e] = !0) : ((Qn[e] = !0), !1);
}
function S(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Oe(e) {
  return e[1].toUpperCase();
}
function C(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = rr.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function w(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function ke(e, t, n) {
  switch (t) {
    case `select`:
      return w(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return w(2, null);
    case `math`:
      return w(3, null);
    case `foreignObject`:
      return w(1, null);
    case `table`:
      return w(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return w(5, null);
    case `colgroup`:
      return w(7, null);
    case `tr`:
      return w(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? w(1, null) : e;
}
function Ae(e, t, n) {
  if (typeof n != `object`) throw Error(x(62));
  for (var r in ((t = !0), n))
    if (z.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = C(r);
          i = C((`` + i).trim());
        } else {
          a = r;
          var o = sr.get(a);
          (o !== void 0 ||
            ((o = C(a.replace(ir, `-$1`).toLowerCase().replace(ar, `-ms-`))), sr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || z.call(tr, r)
                  ? `` + i
                  : i + `px`
                : C((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function T(e, t, n, r) {
  switch (n) {
    case `style`:
      Ae(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = B.hasOwnProperty(n) ? B[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, C(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, C(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, C(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, C(r), `"`));
      }
    } else if (De(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, C(r), `"`);
    }
  }
}
function je(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(x(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(x(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function Me(e) {
  var t = ``;
  return (
    Xn.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Ne(e, t, n, r) {
  e.push(E(n));
  var i,
    a = (n = null);
  for (i in t)
    if (z.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            T(e, r, i, o);
        }
    }
  return (e.push(`>`), je(e, a, n), typeof n == `string` ? (e.push(C(n)), null) : n);
}
function E(e) {
  var t = lr.get(e);
  if (t === void 0) {
    if (!cr.test(e)) throw Error(x(65, e));
    ((t = `<` + e), lr.set(e, t));
  }
  return t;
}
function Pe(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(E(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (z.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                T(e, r, u, s);
            }
        }
      return (e.push(`>`), je(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(E(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (z.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                T(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Me(s) : `` + c), or(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), je(e, u, s), s);
    case `textarea`:
      for (s in (e.push(E(`textarea`)), (u = o = a = null), n))
        if (z.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(x(91));
            default:
              T(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(x(92));
        if (or(u) && 1 < u.length) throw Error(x(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(C(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(E(`input`)), (c = u = s = a = null), n))
        if (z.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(x(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              T(e, r, o, l);
          }
      return (
        u === null ? c !== null && T(e, r, `checked`, c) : T(e, r, `checked`, u),
        a === null ? s !== null && T(e, r, `value`, s) : T(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(E(`menuitem`)), n))
        if (z.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(x(400));
            default:
              T(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(E(`title`)), (a = null), n))
        if (z.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(x(434));
            default:
              T(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(E(t)), (o = a = null), n))
        if (z.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              T(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(x(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(x(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n
                )
              : e.push(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(E(t)), n))
        if (z.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(x(399, t));
            default:
              T(e, r, p, a);
          }
      return (e.push(`/>`), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Ne(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Ne(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Ne(e, n, t, r);
      for (l in (e.push(E(t)), (o = a = null), n))
        if (z.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Ae(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              De(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, C(s), `"`);
          }
      return (e.push(`>`), je(e, o, a), a);
  }
}
function Fe(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(x(395));
  return (e.push(n), e.push(`"></template>`));
}
function Ie(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(x(397));
  }
}
function Le(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(x(397));
  }
}
function Re(e) {
  return JSON.stringify(e).replace(ur, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function ze(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function Be(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(C(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(C(t)), (e = !0)), e);
}
function Ve(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case mr:
      return `Fragment`;
    case pr:
      return `Portal`;
    case gr:
      return `Profiler`;
    case hr:
      return `StrictMode`;
    case br:
      return `Suspense`;
    case xr:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case vr:
        return (e.displayName || `Context`) + `.Consumer`;
      case _r:
        return (e._context.displayName || `Context`) + `.Provider`;
      case yr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Sr:
        return ((t = e.displayName || null), t === null ? Ve(e.type) || `Memo` : t);
      case Cr:
        ((t = e._payload), (e = e._init));
        try {
          return Ve(e(t));
        } catch {}
    }
  return null;
}
function He(e, t) {
  if (((e = e.contextTypes), !e)) return kr;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Ue(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(x(401));
    } else {
      if (n === null) throw Error(x(401));
      Ue(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function We(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && We(e));
}
function Ge(e) {
  var t = e.parent;
  (t !== null && Ge(t), (e.context._currentValue2 = e.value));
}
function Ke(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(x(402));
  e.depth === t.depth ? Ue(e, t) : Ke(e, t);
}
function qe(e, t) {
  var n = t.parent;
  if (n === null) throw Error(x(402));
  (e.depth === n.depth ? Ue(e, n) : qe(e, n), (t.context._currentValue2 = t.value));
}
function Je(e) {
  var t = Ar;
  t !== e &&
    (t === null
      ? Ge(e)
      : e === null
        ? We(t)
        : t.depth === e.depth
          ? Ue(t, e)
          : t.depth > e.depth
            ? Ke(t, e)
            : qe(t, e),
    (Ar = e));
}
function Ye(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = jr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : dr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && jr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = dr({}, a, s))) : dr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function Xe(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Nr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Nr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Nr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Ze(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Pr(e) / Fr) | 0)) | 0);
}
function Qe(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function $e() {
  if (V === null) throw Error(x(321));
  return V;
}
function et() {
  if (0 < Hr) throw Error(x(312));
  return { memoizedState: null, queue: null, next: null };
}
function tt() {
  return (
    H === null
      ? Rr === null
        ? ((zr = !1), (Rr = H = et()))
        : ((zr = !0), (H = Rr))
      : H.next === null
        ? ((zr = !1), (H = H.next = et()))
        : ((zr = !0), (H = H.next)),
    H
  );
}
function nt() {
  ((Lr = V = null), (Br = !1), (Rr = null), (Hr = 0), (H = U = null));
}
function rt(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function it(e, t, n) {
  if (((V = $e()), (H = tt()), zr)) {
    var r = H.queue;
    if (((t = r.dispatch), U !== null && ((n = U.get(r)), n !== void 0))) {
      (U.delete(r), (r = H.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((H.memoizedState = r), [r, t]);
    }
    return [H.memoizedState, t];
  }
  return (
    (e = e === rt ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (H.memoizedState = e),
    (e = H.queue = { last: null, dispatch: null }),
    (e = e.dispatch = ot.bind(null, V, e)),
    [H.memoizedState, e]
  );
}
function at(e, t) {
  if (((V = $e()), (H = tt()), (t = t === void 0 ? null : t), H !== null)) {
    var n = H.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Ir(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (H.memoizedState = [e, t]), e);
}
function ot(e, t, n) {
  if (25 <= Hr) throw Error(x(301));
  if (e === V)
    if (
      ((Br = !0),
      (e = { action: n, next: null }),
      U === null && (U = new Map()),
      (n = U.get(t)),
      n === void 0)
    )
      U.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function st() {
  throw Error(x(394));
}
function ct() {}
function lt(e) {
  return (console.error(e), null);
}
function ut() {}
function dt(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? lt : i,
      onAllReady: a === void 0 ? ut : a,
      onShellReady: o === void 0 ? ut : o,
      onShellError: s === void 0 ? ut : s,
      onFatalError: c === void 0 ? ut : c,
    }),
    (n = pt(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = ft(t, e, null, n, u, kr, null, Mr)),
    l.push(e),
    t
  );
}
function ft(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Et(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function pt(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function mt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function ht(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function gt(e, t, n, r, i) {
  for (V = {}, Lr = t, Vr = 0, e = n(r, i); Br;)
    ((Br = !1), (Vr = 0), (Hr += 1), (H = null), (e = n(r, i)));
  return (nt(), e);
}
function _t(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(x(108, Ve(r) || `Unknown`, s));
      r = dr({}, o, n);
    }
    ((t.legacyContext = r), D(e, t, i), (t.legacyContext = o));
  } else D(e, t, i);
}
function vt(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = dr({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = He(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        Ye(a, n, r, i),
        _t(e, t, a, n));
    } else {
      ((a = He(n, t.legacyContext)), (i = gt(e, t, n, r, a)));
      var o = Vr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (Ye(i, n, r, a), _t(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = Xe(r, 1, 0)));
        try {
          D(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else D(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Er:
        case Tr:
        case hr:
        case gr:
        case mr:
          D(e, t, r.children);
          return;
        case xr:
          D(e, t, r.children);
          return;
        case wr:
          throw Error(x(343));
        case br:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = pt(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = pt(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (xt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                wt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = mt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = ft(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case yr:
            if (((r = gt(e, t, n.render, r, i)), Vr !== 0)) {
              ((n = t.treeContext), (t.treeContext = Xe(n, 1, 0)));
              try {
                D(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else D(e, t, r);
            return;
          case Sr:
            ((n = n.type), (r = vt(n, r)), yt(e, t, n, r, i));
            return;
          case _r:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Ar),
              (Ar = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              D(e, t, i),
              (e = Ar),
              e === null)
            )
              throw Error(x(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Dr ? e.context._defaultValue : r),
              (e = Ar = e.parent),
              (t.context = e));
            return;
          case vr:
            ((r = r.children), (r = r(n._currentValue2)), D(e, t, r));
            return;
          case Cr:
            ((i = n._init), (n = i(n._payload)), (r = vt(n, r)), yt(e, t, n, r, void 0));
            return;
        }
      throw Error(x(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Pe(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = ke(o, n, r)),
      xt(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function D(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case fr:
        yt(e, t, n.type, n.props, n.ref);
        return;
      case pr:
        throw Error(x(257));
      case Cr:
        var r = n._init;
        ((n = r(n._payload)), D(e, t, n));
        return;
    }
    if (or(n)) {
      bt(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Or && n[Or]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        bt(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        x(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Be(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Be(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function bt(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Xe(a, r, i);
    try {
      xt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function xt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return D(e, t, n);
  } catch (c) {
    if ((nt(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        Je(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = pt(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = ft(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      Je(a));
  }
}
function St(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Tt(this, t, e));
}
function Ct(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(x(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Ct(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function wt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && wt(e, n));
  } else e.completedSegments.push(t);
}
function Tt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(x(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = ut), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && wt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(St, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (wt(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Et(e) {
  if (e.status !== 2) {
    var t = Ar,
      n = Gr.current;
    Gr.current = Ur;
    var r = Wr;
    Wr = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          Je(o.context);
          try {
            (D(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              Tt(s, o.blockedBoundary, c));
          } catch (e) {
            if ((nt(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = mt(s, d);
              if (
                (u === null
                  ? ht(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Mt(e, e.destination));
    } catch (t) {
      (mt(e, t), ht(e, t));
    } finally {
      ((Wr = r), (Gr.current = n), n === Ur && Je(t));
    }
  }
}
function Dt(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Ot(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(x(390));
  }
}
function Ot(e, t, n) {
  var r = n.boundary;
  if (r === null) return Dt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = C(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Dt(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Fe(t, e.responseState, r),
      Dt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Fe(t, e.responseState, r.id),
      Dt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(x(391));
  return (Ot(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function kt(e, t, n) {
  return (Ie(t, e.responseState, n.formatContext, n.id), Ot(e, t, n), Le(t, n.formatContext));
}
function At(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) jt(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
        )),
    r === null)
  )
    throw Error(x(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function jt(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(x(392));
    return kt(e, t, r);
  }
  return (
    kt(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")<\/script>`)
  );
}
function Mt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Ot(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
            )),
        c === null)
      )
        throw Error(x(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Re(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Re(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Re(d);
        r.push(m);
      }
      if (!r.push(`)<\/script>`)) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!At(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        ((a = e), (o = t));
        var ee = _.completedSegments;
        for (s = 0; s < ee.length; s++)
          if (!jt(a, o, _, ee[s])) {
            (s++, ee.splice(0, s));
            var te = !1;
            break e;
          }
        (ee.splice(0, s), (te = !0));
      }
      if (!te) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    }
    g.splice(0, i);
    var ne = e.completedBoundaries;
    for (i = 0; i < ne.length; i++)
      if (!At(e, t, ne[i])) {
        ((e.destination = null), i++, ne.splice(0, i));
        return;
      }
    ne.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Nt(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Ct(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Mt(e, e.destination));
  } catch (t) {
    (mt(e, t), ht(e, t));
  }
}
function Pt() {}
function Ft(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return (e !== null && (o += e), !0);
      },
      destroy: function (e) {
        ((i = !0), (a = e));
      },
    },
    c = !1;
  if (
    ((e = dt(
      e,
      ze(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      Pt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    Et(e),
    Nt(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Mt(e, s);
    } catch (t) {
      (mt(e, t), ht(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(x(426));
  return o;
}
function O(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function k(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < G && (e.enqueue(new Uint8Array(W.buffer, 0, G)), (W = new Uint8Array(512)), (G = 0)),
        e.enqueue(t));
    else {
      var n = W.length - G;
      (n < t.length &&
        (n === 0 ? e.enqueue(W) : (W.set(t.subarray(0, n), G), e.enqueue(W), (t = t.subarray(n))),
        (W = new Uint8Array(512)),
        (G = 0)),
        W.set(t, G),
        (G += t.length));
    }
}
function A(e, t) {
  return (k(e, t), !0);
}
function It(e) {
  W && 0 < G && (e.enqueue(new Uint8Array(W.buffer, 0, G)), (W = null), (G = 0));
}
function j(e) {
  return Yr.encode(e);
}
function M(e) {
  return Yr.encode(e);
}
function Lt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Rt(e) {
  return K.call(Qr, e) ? !0 : K.call(Zr, e) ? !1 : Xr.test(e) ? (Qr[e] = !0) : ((Zr[e] = !0), !1);
}
function N(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function zt(e) {
  return e[1].toUpperCase();
}
function P(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = ni.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Bt(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function Vt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? oi : M(`<script nonce="` + P(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, j((`` + n).replace(di, Bt)), si), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(ci, j(P(r[n])), ui);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(li, j(P(i[r])), ui);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: M(e + `P:`),
    segmentPrefix: M(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function F(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Ht(e) {
  return F(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function Ut(e, t, n) {
  switch (t) {
    case `select`:
      return F(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return F(2, null);
    case `math`:
      return F(3, null);
    case `foreignObject`:
      return F(1, null);
    case `table`:
      return F(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return F(5, null);
    case `colgroup`:
      return F(7, null);
    case `tr`:
      return F(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? F(1, null) : e;
}
function Wt(e, t, n, r) {
  return t === `` ? r : (r && e.push(fi), e.push(j(P(t))), !0);
}
function Gt(e, t, n) {
  if (typeof n != `object`) throw Error(O(62));
  for (var r in ((t = !0), n))
    if (K.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = j(P(r));
          i = j(P((`` + i).trim()));
        } else {
          a = r;
          var o = pi.get(a);
          (o !== void 0 ||
            ((o = M(P(a.replace(ri, `-$1`).toLowerCase().replace(ii, `-ms-`)))), pi.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || K.call(ei, r)
                  ? j(`` + i)
                  : j(i + `px`)
                : j(P((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(mi, a, hi, i)) : e.push(gi, a, hi, i);
      }
    }
  t || e.push(vi);
}
function I(e, t, n, r) {
  switch (n) {
    case `style`:
      Gt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = q.hasOwnProperty(n) ? q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = j(t.attributeName)), t.type)) {
        case 3:
          r && e.push(J, n, yi);
          break;
        case 4:
          !0 === r ? e.push(J, n, yi) : !1 !== r && e.push(J, n, _i, j(P(r)), vi);
          break;
        case 5:
          isNaN(r) || e.push(J, n, _i, j(P(r)), vi);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(J, n, _i, j(P(r)), vi);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(J, n, _i, j(P(r)), vi));
      }
    } else if (Rt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(J, j(n), _i, j(P(r)), vi);
    }
  }
}
function Kt(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(O(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(O(61));
    ((t = t.__html), t != null && e.push(j(`` + t)));
  }
}
function qt(e) {
  var t = ``;
  return (
    Jr.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Jt(e, t, n, r) {
  e.push(L(n));
  var i,
    a = (n = null);
  for (i in t)
    if (K.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            I(e, r, i, o);
        }
    }
  return (e.push(Y), Kt(e, a, n), typeof n == `string` ? (e.push(j(P(n))), null) : n);
}
function L(e) {
  var t = wi.get(e);
  if (t === void 0) {
    if (!Ci.test(e)) throw Error(O(65, e));
    ((t = M(`<` + e)), wi.set(e, t));
  }
  return t;
}
function Yt(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(L(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (K.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                I(e, r, u, s);
            }
        }
      return (e.push(Y), Kt(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(L(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (K.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                I(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? qt(s) : `` + c), ai(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(xi);
              break;
            }
        } else `` + o === n && e.push(xi);
      else l && e.push(xi);
      return (e.push(Y), Kt(e, u, s), s);
    case `textarea`:
      for (s in (e.push(L(`textarea`)), (u = o = a = null), n))
        if (K.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(O(91));
            default:
              I(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(Y), u != null)) {
        if (a != null) throw Error(O(92));
        if (ai(u) && 1 < u.length) throw Error(O(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Si),
        a !== null && e.push(j(P(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(L(`input`)), (c = u = s = a = null), n))
        if (K.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(O(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              I(e, r, o, l);
          }
      return (
        u === null ? c !== null && I(e, r, `checked`, c) : I(e, r, `checked`, u),
        a === null ? s !== null && I(e, r, `value`, s) : I(e, r, `value`, a),
        e.push(bi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(L(`menuitem`)), n))
        if (K.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(O(400));
            default:
              I(e, r, f, a);
          }
      return (e.push(Y), null);
    case `title`:
      for (d in (e.push(L(`title`)), (a = null), n))
        if (K.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(O(434));
            default:
              I(e, r, d, o);
          }
      return (e.push(Y), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(L(t)), (o = a = null), n))
        if (K.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              I(e, r, c, s);
          }
      if ((e.push(Y), o != null)) {
        if (a != null) throw Error(O(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(O(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Si, j(n))
              : e.push(j(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Si),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(L(t)), n))
        if (K.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(O(399, t));
            default:
              I(e, r, p, a);
          }
      return (e.push(bi), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Jt(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Ti), Jt(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Jt(e, n, t, r);
      for (l in (e.push(L(t)), (o = a = null), n))
        if (K.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Gt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Rt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(J, j(l), _i, j(P(s)), vi);
          }
      return (e.push(Y), Kt(e, o, a), a);
  }
}
function Xt(e, t, n) {
  if ((k(e, ji), n === null)) throw Error(O(395));
  return (k(e, n), A(e, Mi));
}
function Zt(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (k(e, zi), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, Bi));
    case 2:
      return (k(e, Hi), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, Ui));
    case 3:
      return (k(e, Gi), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, Ki));
    case 4:
      return (k(e, Ji), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, Yi));
    case 5:
      return (k(e, Zi), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, Qi));
    case 6:
      return (k(e, ea), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, ta));
    case 7:
      return (k(e, ra), k(e, t.segmentPrefix), k(e, j(r.toString(16))), A(e, ia));
    default:
      throw Error(O(397));
  }
}
function Qt(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return A(e, Vi);
    case 2:
      return A(e, Wi);
    case 3:
      return A(e, qi);
    case 4:
      return A(e, Xi);
    case 5:
      return A(e, $i);
    case 6:
      return A(e, na);
    case 7:
      return A(e, aa);
    default:
      throw Error(O(397));
  }
}
function $t(e) {
  return JSON.stringify(e).replace(ya, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function en(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Ca:
      return `Fragment`;
    case Sa:
      return `Portal`;
    case Ta:
      return `Profiler`;
    case wa:
      return `StrictMode`;
    case ka:
      return `Suspense`;
    case Aa:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Da:
        return (e.displayName || `Context`) + `.Consumer`;
      case Ea:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Oa:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case ja:
        return ((t = e.displayName || null), t === null ? en(e.type) || `Memo` : t);
      case Ma:
        ((t = e._payload), (e = e._init));
        try {
          return en(e(t));
        } catch {}
    }
  return null;
}
function tn(e, t) {
  if (((e = e.contextTypes), !e)) return Ra;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function nn(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(O(401));
    } else {
      if (n === null) throw Error(O(401));
      nn(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function rn(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && rn(e));
}
function an(e) {
  var t = e.parent;
  (t !== null && an(t), (e.context._currentValue = e.value));
}
function on(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(O(402));
  e.depth === t.depth ? nn(e, t) : on(e, t);
}
function sn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(O(402));
  (e.depth === n.depth ? nn(e, n) : sn(e, n), (t.context._currentValue = t.value));
}
function cn(e) {
  var t = za;
  t !== e &&
    (t === null
      ? an(e)
      : e === null
        ? rn(t)
        : t.depth === e.depth
          ? nn(t, e)
          : t.depth > e.depth
            ? on(t, e)
            : sn(t, e),
    (za = e));
}
function ln(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Ba), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : ba({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Ba.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = ba({}, a, s))) : ba(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function un(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Ha(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Ha(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Ha(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function dn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ua(e) / Wa) | 0)) | 0);
}
function fn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function pn() {
  if (X === null) throw Error(O(321));
  return X;
}
function mn() {
  if (0 < Za) throw Error(O(312));
  return { memoizedState: null, queue: null, next: null };
}
function hn() {
  return (
    Z === null
      ? qa === null
        ? ((Ja = !1), (qa = Z = mn()))
        : ((Ja = !0), (Z = qa))
      : Z.next === null
        ? ((Ja = !1), (Z = Z.next = mn()))
        : ((Ja = !0), (Z = Z.next)),
    Z
  );
}
function gn() {
  ((Ka = X = null), (Ya = !1), (qa = null), (Za = 0), (Z = Q = null));
}
function _n(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function vn(e, t, n) {
  if (((X = pn()), (Z = hn()), Ja)) {
    var r = Z.queue;
    if (((t = r.dispatch), Q !== null && ((n = Q.get(r)), n !== void 0))) {
      (Q.delete(r), (r = Z.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Z.memoizedState = r), [r, t]);
    }
    return [Z.memoizedState, t];
  }
  return (
    (e = e === _n ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Z.memoizedState = e),
    (e = Z.queue = { last: null, dispatch: null }),
    (e = e.dispatch = bn.bind(null, X, e)),
    [Z.memoizedState, e]
  );
}
function yn(e, t) {
  if (((X = pn()), (Z = hn()), (t = t === void 0 ? null : t), Z !== null)) {
    var n = Z.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Ga(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (Z.memoizedState = [e, t]), e);
}
function bn(e, t, n) {
  if (25 <= Za) throw Error(O(301));
  if (e === X)
    if (
      ((Ya = !0),
      (e = { action: n, next: null }),
      Q === null && (Q = new Map()),
      (n = Q.get(t)),
      n === void 0)
    )
      Q.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function xn() {
  throw Error(O(394));
}
function Sn() {}
function Cn(e) {
  return (console.error(e), null);
}
function wn() {}
function Tn(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? Cn : i,
      onAllReady: a === void 0 ? wn : a,
      onShellReady: o === void 0 ? wn : o,
      onShellError: s === void 0 ? wn : s,
      onFatalError: c === void 0 ? wn : c,
    }),
    (n = Dn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = En(t, e, null, n, u, Ra, null, Va)),
    l.push(e),
    t
  );
}
function En(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Bn(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function Dn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function On(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function kn(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Lt(e.destination, t)));
}
function An(e, t, n, r, i) {
  for (X = {}, Ka = t, Xa = 0, e = n(r, i); Ya;)
    ((Ya = !1), (Xa = 0), (Za += 1), (Z = null), (e = n(r, i)));
  return (gn(), e);
}
function jn(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(O(108, en(r) || `Unknown`, s));
      r = ba({}, o, n);
    }
    ((t.legacyContext = r), R(e, t, i), (t.legacyContext = o));
  } else R(e, t, i);
}
function Mn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ba({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Nn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = tn(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        ln(a, n, r, i),
        jn(e, t, a, n));
    } else {
      ((a = tn(n, t.legacyContext)), (i = An(e, t, n, r, a)));
      var o = Xa !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (ln(i, n, r, a), jn(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = un(r, 1, 0)));
        try {
          R(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else R(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Fa:
        case Pa:
        case wa:
        case Ta:
        case Ca:
          R(e, t, r.children);
          return;
        case Aa:
          R(e, t, r.children);
          return;
        case Na:
          throw Error(O(343));
        case ka:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = Dn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Dn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Fn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(fi),
                (l.status = 1),
                Rn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = On(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = En(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Oa:
            if (((r = An(e, t, n.render, r, i)), Xa !== 0)) {
              ((n = t.treeContext), (t.treeContext = un(n, 1, 0)));
              try {
                R(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else R(e, t, r);
            return;
          case ja:
            ((n = n.type), (r = Mn(n, r)), Nn(e, t, n, r, i));
            return;
          case Ea:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = za),
              (za = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              R(e, t, i),
              (e = za),
              e === null)
            )
              throw Error(O(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === Ia ? e.context._defaultValue : r),
              (e = za = e.parent),
              (t.context = e));
            return;
          case Da:
            ((r = r.children), (r = r(n._currentValue)), R(e, t, r));
            return;
          case Ma:
            ((i = n._init), (n = i(n._payload)), (r = Mn(n, r)), Nn(e, t, n, r, void 0));
            return;
        }
      throw Error(O(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Yt(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Ut(o, n, r)),
      Fn(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Ei, j(n), Di);
    }
    i.lastPushedText = !1;
  }
}
function R(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case xa:
        Nn(e, t, n.type, n.props, n.ref);
        return;
      case Sa:
        throw Error(O(257));
      case Ma:
        var r = n._init;
        ((n = r(n._payload)), R(e, t, n));
        return;
    }
    if (ai(n)) {
      Pn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (La && n[La]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Pn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        O(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Wt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Wt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Pn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = un(a, r, i);
    try {
      Fn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Fn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return R(e, t, n);
  } catch (c) {
    if ((gn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        cn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Dn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = En(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      cn(a));
  }
}
function In(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), zn(this, t, e));
}
function Ln(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(O(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Ln(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Rn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Rn(e, n));
  } else e.completedSegments.push(t);
}
function zn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(O(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = wn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Rn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(In, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Rn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Bn(e) {
  if (e.status !== 2) {
    var t = za,
      n = eo.current;
    eo.current = Qa;
    var r = $a;
    $a = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          cn(o.context);
          try {
            (R(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(fi),
              o.abortSet.delete(o),
              (c.status = 1),
              zn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((gn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = On(s, d);
              if (
                (u === null
                  ? kn(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Kn(e, e.destination));
    } catch (t) {
      (On(e, t), kn(e, t));
    } finally {
      (($a = r), (eo.current = n), n === Qa && cn(t));
    }
  }
}
function Vn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        k(t, Oi),
        k(t, e.placeholderPrefix),
        (e = j(r.toString(16))),
        k(t, e),
        A(t, ki)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) k(t, r[a]);
        i = Hn(e, t, i);
      }
      for (; a < r.length - 1; a++) k(t, r[a]);
      return (a < r.length && (i = A(t, r[a])), i);
    default:
      throw Error(O(390));
  }
}
function Hn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Vn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      A(t, Ni),
      k(t, Fi),
      r && (k(t, Li), k(t, j(P(r))), k(t, Ii)),
      A(t, Ri),
      Vn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = M(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      Xt(t, e.responseState, r),
      Vn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Xt(t, e.responseState, r.id),
      Vn(e, t, n));
  else {
    if ((A(t, Ai), (n = r.completedSegments), n.length !== 1)) throw Error(O(391));
    Hn(e, t, n[0]);
  }
  return A(t, Pi);
}
function Un(e, t, n) {
  return (Zt(t, e.responseState, n.formatContext, n.id), Hn(e, t, n), Qt(t, n.formatContext));
}
function Wn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Gn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    k(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? k(t, da) : ((e.sentCompleteBoundaryFunction = !0), k(t, ua)),
    r === null)
  )
    throw Error(O(395));
  return ((n = j(n.toString(16))), k(t, r), k(t, fa), k(t, e.segmentPrefix), k(t, n), A(t, pa));
}
function Gn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(O(392));
    return Un(e, t, r);
  }
  return (
    Un(e, t, r),
    (e = e.responseState),
    k(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? k(t, sa) : ((e.sentCompleteSegmentFunction = !0), k(t, oa)),
    k(t, e.segmentPrefix),
    (i = j(i.toString(16))),
    k(t, i),
    k(t, ca),
    k(t, e.placeholderPrefix),
    k(t, i),
    A(t, la)
  );
}
function Kn(e, t) {
  ((W = new Uint8Array(512)), (G = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Hn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) k(t, r[n]);
      n < r.length && A(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (k(r, s.startInlineScript),
        s.sentClientRenderFunction ? k(r, ha) : ((s.sentClientRenderFunction = !0), k(r, ma)),
        c === null)
      )
        throw Error(O(395));
      if (
        (k(r, c),
        k(r, ga),
        (l || u || d) && (k(r, va), k(r, j($t(l || ``)))),
        (u || d) && (k(r, va), k(r, j($t(u || ``)))),
        d && (k(r, va), k(r, j($t(d)))),
        !A(r, _a))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Wn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), It(t), (W = new Uint8Array(512)), (G = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Gn(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var g = !1;
            break e;
          }
        (h.splice(0, s), (g = !0));
      }
      if (!g) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var _ = e.completedBoundaries;
    for (i = 0; i < _.length; i++)
      if (!Wn(e, t, _[i])) {
        ((e.destination = null), i++, _.splice(0, i));
        return;
      }
    _.splice(0, i);
  } finally {
    (It(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function qn(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Ln(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Kn(e, e.destination));
  } catch (t) {
    (On(e, t), kn(e, t));
  }
}
var Jn,
  Yn,
  Xn,
  z,
  Zn,
  Qn,
  $n,
  B,
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
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  V,
  Lr,
  Rr,
  H,
  zr,
  Br,
  Vr,
  U,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  W,
  G,
  Yr,
  K,
  Xr,
  Zr,
  Qr,
  q,
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
  J,
  _i,
  vi,
  yi,
  Y,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
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
  ma,
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
  X,
  Ka,
  qa,
  Z,
  Ja,
  Ya,
  Xa,
  Q,
  Za,
  Qa,
  $a,
  eo,
  $,
  to,
  no,
  ro,
  io = t(() => {
    (r(),
      (Jn = `default` in d ? f : d),
      (Yn = {}),
      (Xn = Jn),
      (z = Object.prototype.hasOwnProperty),
      (Zn =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Qn = {}),
      ($n = {}),
      (B = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          B[e] = new S(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        B[t] = new S(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        B[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          B[e] = new S(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          B[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        B[e] = new S(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        B[e] = new S(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        B[e] = new S(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        B[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (er = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(er, Oe);
          B[t] = new S(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(er, Oe);
          B[t] = new S(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(er, Oe);
        B[t] = new S(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        B[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (B.xlinkHref = new S(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        B[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (tr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (nr = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(tr).forEach(function (e) {
        nr.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tr[t] = tr[e]));
        });
      }),
      (rr = /["'&<>]/),
      (ir = /([A-Z])/g),
      (ar = /^ms-/),
      (or = Array.isArray),
      (sr = new Map()),
      (cr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (lr = new Map()),
      (ur = /[<\u2028\u2029]/g),
      (dr = Object.assign),
      (fr = Symbol.for(`react.element`)),
      (pr = Symbol.for(`react.portal`)),
      (mr = Symbol.for(`react.fragment`)),
      (hr = Symbol.for(`react.strict_mode`)),
      (gr = Symbol.for(`react.profiler`)),
      (_r = Symbol.for(`react.provider`)),
      (vr = Symbol.for(`react.context`)),
      (yr = Symbol.for(`react.forward_ref`)),
      (br = Symbol.for(`react.suspense`)),
      (xr = Symbol.for(`react.suspense_list`)),
      (Sr = Symbol.for(`react.memo`)),
      (Cr = Symbol.for(`react.lazy`)),
      (wr = Symbol.for(`react.scope`)),
      (Tr = Symbol.for(`react.debug_trace_mode`)),
      (Er = Symbol.for(`react.legacy_hidden`)),
      (Dr = Symbol.for(`react.default_value`)),
      (Or = Symbol.iterator),
      (kr = {}),
      (Ar = null),
      (jr = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Mr = { id: 1, overflow: `` }),
      (Nr = Math.clz32 ? Math.clz32 : Ze),
      (Pr = Math.log),
      (Fr = Math.LN2),
      (Ir = typeof Object.is == `function` ? Object.is : Qe),
      (V = null),
      (Lr = null),
      (Rr = null),
      (H = null),
      (zr = !1),
      (Br = !1),
      (Vr = 0),
      (U = null),
      (Hr = 0),
      (Ur = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return ($e(), e._currentValue2);
        },
        useMemo: at,
        useReducer: it,
        useRef: function (e) {
          ((V = $e()), (H = tt()));
          var t = H.memoizedState;
          return t === null ? ((e = { current: e }), (H.memoizedState = e)) : t;
        },
        useState: function (e) {
          return it(rt, e);
        },
        useInsertionEffect: ct,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return at(function () {
            return e;
          }, t);
        },
        useImperativeHandle: ct,
        useEffect: ct,
        useDebugValue: ct,
        useDeferredValue: function (e) {
          return ($e(), e);
        },
        useTransition: function () {
          return ($e(), [!1, st]);
        },
        useId: function () {
          var e = Lr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Nr(e) - 1))).toString(32) + t));
          var n = Wr;
          if (n === null) throw Error(x(404));
          return (
            (t = Vr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return ($e(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(x(407));
          return n();
        },
      }),
      (Wr = null),
      (Gr = Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Yn.renderToNodeStream = function () {
        throw Error(x(207));
      }),
      (Yn.renderToStaticMarkup = function (e, t) {
        return Ft(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (Yn.renderToStaticNodeStream = function () {
        throw Error(x(208));
      }),
      (Yn.renderToString = function (e, t) {
        return Ft(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (Yn.version = `18.2.0`),
      (Kr = `default` in d ? f : d),
      (qr = {}),
      (Jr = Kr),
      (W = null),
      (G = 0),
      (Yr = new TextEncoder()),
      (K = Object.prototype.hasOwnProperty),
      (Xr =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Zr = {}),
      (Qr = {}),
      (q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          q[e] = new N(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        q[t] = new N(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        q[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          q[e] = new N(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          q[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        q[e] = new N(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        q[e] = new N(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        q[e] = new N(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        q[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      ($r = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace($r, zt);
          q[t] = new N(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace($r, zt);
          q[t] = new N(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace($r, zt);
        q[t] = new N(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        q[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (q.xlinkHref = new N(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        q[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (ei = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (ti = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(ei).forEach(function (e) {
        ti.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ei[t] = ei[e]));
        });
      }),
      (ni = /["'&<>]/),
      (ri = /([A-Z])/g),
      (ii = /^ms-/),
      (ai = Array.isArray),
      (oi = M(`<script>`)),
      (si = M(`<\/script>`)),
      (ci = M(`<script src="`)),
      (li = M(`<script type="module" src="`)),
      (ui = M(`" async=""><\/script>`)),
      (di = /(<\/|<)(s)(cript)/gi),
      (fi = M(`<!-- -->`)),
      (pi = new Map()),
      (mi = M(` style="`)),
      (hi = M(`:`)),
      (gi = M(`;`)),
      (J = M(` `)),
      (_i = M(`="`)),
      (vi = M(`"`)),
      (yi = M(`=""`)),
      (Y = M(`>`)),
      (bi = M(`/>`)),
      (xi = M(` selected=""`)),
      (Si = M(`
`)),
      (Ci = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (wi = new Map()),
      (Ti = M(`<!DOCTYPE html>`)),
      (Ei = M(`</`)),
      (Di = M(`>`)),
      (Oi = M(`<template id="`)),
      (ki = M(`"></template>`)),
      (Ai = M(`<!--$-->`)),
      (ji = M(`<!--$?--><template id="`)),
      (Mi = M(`"></template>`)),
      (Ni = M(`<!--$!-->`)),
      (Pi = M(`<!--/$-->`)),
      (Fi = M(`<template`)),
      (Ii = M(`"`)),
      (Li = M(` data-dgst="`)),
      M(` data-msg="`),
      M(` data-stck="`),
      (Ri = M(`></template>`)),
      (zi = M(`<div hidden id="`)),
      (Bi = M(`">`)),
      (Vi = M(`</div>`)),
      (Hi = M(`<svg aria-hidden="true" style="display:none" id="`)),
      (Ui = M(`">`)),
      (Wi = M(`</svg>`)),
      (Gi = M(`<math aria-hidden="true" style="display:none" id="`)),
      (Ki = M(`">`)),
      (qi = M(`</math>`)),
      (Ji = M(`<table hidden id="`)),
      (Yi = M(`">`)),
      (Xi = M(`</table>`)),
      (Zi = M(`<table hidden><tbody id="`)),
      (Qi = M(`">`)),
      ($i = M(`</tbody></table>`)),
      (ea = M(`<table hidden><tr id="`)),
      (ta = M(`">`)),
      (na = M(`</tr></table>`)),
      (ra = M(`<table hidden><colgroup id="`)),
      (ia = M(`">`)),
      (aa = M(`</colgroup></table>`)),
      (oa = M(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (sa = M(`$RS("`)),
      (ca = M(`","`)),
      (la = M(`")<\/script>`)),
      (ua = M(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (da = M(`$RC("`)),
      (fa = M(`","`)),
      (pa = M(`")<\/script>`)),
      (ma = M(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (ha = M(`$RX("`)),
      (ga = M(`"`)),
      (_a = M(`)<\/script>`)),
      (va = M(`,`)),
      (ya = /[<\u2028\u2029]/g),
      (ba = Object.assign),
      (xa = Symbol.for(`react.element`)),
      (Sa = Symbol.for(`react.portal`)),
      (Ca = Symbol.for(`react.fragment`)),
      (wa = Symbol.for(`react.strict_mode`)),
      (Ta = Symbol.for(`react.profiler`)),
      (Ea = Symbol.for(`react.provider`)),
      (Da = Symbol.for(`react.context`)),
      (Oa = Symbol.for(`react.forward_ref`)),
      (ka = Symbol.for(`react.suspense`)),
      (Aa = Symbol.for(`react.suspense_list`)),
      (ja = Symbol.for(`react.memo`)),
      (Ma = Symbol.for(`react.lazy`)),
      (Na = Symbol.for(`react.scope`)),
      (Pa = Symbol.for(`react.debug_trace_mode`)),
      (Fa = Symbol.for(`react.legacy_hidden`)),
      (Ia = Symbol.for(`react.default_value`)),
      (La = Symbol.iterator),
      (Ra = {}),
      (za = null),
      (Ba = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Va = { id: 1, overflow: `` }),
      (Ha = Math.clz32 ? Math.clz32 : dn),
      (Ua = Math.log),
      (Wa = Math.LN2),
      (Ga = typeof Object.is == `function` ? Object.is : fn),
      (X = null),
      (Ka = null),
      (qa = null),
      (Z = null),
      (Ja = !1),
      (Ya = !1),
      (Xa = 0),
      (Q = null),
      (Za = 0),
      (Qa = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (pn(), e._currentValue);
        },
        useMemo: yn,
        useReducer: vn,
        useRef: function (e) {
          ((X = pn()), (Z = hn()));
          var t = Z.memoizedState;
          return t === null ? ((e = { current: e }), (Z.memoizedState = e)) : t;
        },
        useState: function (e) {
          return vn(_n, e);
        },
        useInsertionEffect: Sn,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return yn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: Sn,
        useEffect: Sn,
        useDebugValue: Sn,
        useDeferredValue: function (e) {
          return (pn(), e);
        },
        useTransition: function () {
          return (pn(), [!1, xn]);
        },
        useId: function () {
          var e = Ka.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Ha(e) - 1))).toString(32) + t));
          var n = $a;
          if (n === null) throw Error(O(404));
          return (
            (t = Xa++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (pn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(O(407));
          return n();
        },
      }),
      ($a = null),
      (eo = Jr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (qr.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = Tn(
              e,
              Vt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Ht(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Lt(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          Kn(s, e);
                        } catch (e) {
                          (On(s, e), kn(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      qn(s);
                    },
                  },
                  { highWaterMark: 0 }
                );
                ((e.allReady = o), n(e));
              },
              function (e) {
                (o.catch(function () {}), r(e));
              },
              i
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                (qn(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          Bn(s);
        });
      }),
      (qr.version = `18.2.0`),
      ($ = {}),
      (to = Yn),
      (no = qr),
      ($.version = to.version),
      ($.renderToString = to.renderToString),
      ($.renderToStaticMarkup = to.renderToStaticMarkup),
      ($.renderToNodeStream = to.renderToNodeStream),
      ($.renderToStaticNodeStream = to.renderToStaticNodeStream),
      ($.renderToReadableStream = no.renderToReadableStream),
      $.version,
      $.renderToString,
      $.renderToStaticMarkup,
      $.renderToNodeStream,
      $.renderToStaticNodeStream,
      (ro = $.renderToReadableStream));
  });
function ao(e) {
  if (typeof document > `u`) return null;
  let [t, n] = l({}),
    r = fe();
  var i = {
    custom: { svg: ``, color: `#000000`, transform: `1,0,0` },
    aol_mail: {
      label: `AOL Mail`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.34,13c.42-1.23,1.57-2.05,2.86-2.05s2.44.83,2.85,2.05l2.66,7.83h-3.41l-.45-1.39h-3.33l-.45,1.39H1.68l2.66-7.83ZM7.19,14.24l-.87,2.74h1.75l-.87-2.74ZM21.24,12.3c-.48-.43-1.04-.76-1.69-1-.65-.23-1.35-.35-2.11-.35s-1.46.12-2.11.35c-.65.23-1.21.57-1.68,1-.47.43-.84.96-1.12,1.57-.27.62-.41,1.31-.41,2.08s.13,1.46.41,2.09c.27.63.64,1.17,1.12,1.62.47.44,1.03.79,1.68,1.03.65.24,1.35.37,2.11.37s1.46-.12,2.11-.37c.65-.24,1.21-.59,1.69-1.03.48-.44.85-.99,1.12-1.62.27-.63.41-1.33.41-2.09s-.13-1.46-.41-2.08c-.27-.62-.64-1.14-1.12-1.57ZM19.2,16.81c-.1.26-.23.49-.4.68-.17.19-.37.34-.6.44-.23.1-.48.16-.75.16s-.52-.05-.76-.16c-.24-.1-.43-.25-.6-.44-.17-.19-.3-.42-.39-.68-.1-.26-.14-.55-.14-.86s.05-.59.14-.84c.1-.26.23-.47.39-.65.17-.18.37-.31.6-.41.24-.1.49-.15.76-.15s.52.05.75.15c.23.1.43.23.6.41.17.18.3.39.4.65.1.26.14.53.14.84s-.05.6-.14.86ZM26.73,18.05v-6.8h-3.25v7.07c0,1.38,1.12,2.51,2.51,2.51h4.32v-2.77h-3.59Z"/></svg>`,
      shareUrl: `https://mail.aol.com/38719-111/aol-6/en-us/mail/compose-message.aspx?subject={title}&body={text}{description}{url}`,
      color: `#000000`,
      transform: `1.1,0,0`,
    },
    auth0: {
      label: `Auth0`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Auth0</title><path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z"/></svg>`,
      color: `#EB5424`,
      transform: `0.7,0,6`,
    },
    balatarin: {
      label: `Balatarin`,
      svg: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260.61 261.68"><defs><style>.cls-1 {fill: #231f20;}</style></defs><g id="Layer_1-2" data-name="Layer 1"><g><path class="cls-1" d="M130.94,141.7H0v103.92c0,8.87,7.19,16.06,16.06,16.06h229.63c8.86,0,14.85-6.9,14.85-15.79v-103.92l-129.6-.17v-.1ZM132.67,190.81h41.1v21.7h-86.82v-21.7h45.72Z"/><path class="cls-1" d="M245.69,0H16.18C7.31,0,.12,7.19.12,16.06v103.92h260.49V15.79c0-8.88-6.04-15.79-14.92-15.79ZM173.77,68.91h-33.5v34.47h-21.7v-34.42h-31.62v-21.7h31.65v-30.68h21.7v30.66h33.5l-.02,21.67Z"/></g></g</svg>`,
      shareUrl: `https://www.balatarin.com/links/submit?phase=2&url={url}&title={title}`,
      color: `#449751`,
      transform: `0.65,0,0`,
    },
    bandsintown: {
      label: `Bandsintown`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bandsintown</title><path d="M6.399 12.8v4.8H19.2v1.6H4.799V0H0v24h24V12.8H6.399Zm4.801-8H6.399v6.4H11.2V4.8Zm6.4 0h-4.8v6.4h4.8V4.8ZM24 0h-4.8v11.2H24V0Z"/></svg>`,
      color: `#00CEC8`,
      transform: `0.7,0,0`,
    },
    behance: {
      label: `Behance`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Behance</title><path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/></svg>`,
      color: `#1769FF`,
      transform: `0.75,0,0`,
    },
    bibsonomy: {
      label: `BibSonomy`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.5 26"><g id="Layer_1-2"><path d="M19.68,22.88c-.25,0-.48.07-.69.17l-5.91-8.2c.44-.44.58-1.1.34-1.68l4.28-2.57c.29.33.71.55,1.19.55.86,0,1.56-.7,1.56-1.56,0-.78-.57-1.41-1.31-1.53V3.1c.85-.13,1.44-.92,1.31-1.77C20.33.56,19.67-.01,18.89,0c-.86,0-1.56.7-1.56,1.56,0,.2.04.38.11.56l-4.26,2.48c-.29-.36-.73-.57-1.2-.57-.86,0-1.56.7-1.56,1.56,0,.78.57,1.42,1.31,1.54v5.1c-.22.04-.42.11-.6.23l-6.58-7.26c.21-.27.35-.6.35-.97,0-.86-.7-1.56-1.56-1.56-.86,0-1.56.7-1.56,1.56s.7,1.56,1.56,1.56c.3,0,.6-.09.85-.25l6.57,7.25c-.21.27-.35.6-.35.97,0,.23.05.45.14.65l-7.86,5.25c-.29-.32-.71-.5-1.14-.5-.86,0-1.56.7-1.56,1.56s.7,1.56,1.56,1.56,1.56-.7,1.56-1.56h0c0-.23-.05-.45-.14-.65l7.86-5.25c.07.08.15.14.23.2l-1.95,3.93c-.15-.05-.3-.07-.46-.08-.86,0-1.56.69-1.56,1.56,0,.86.7,1.56,1.56,1.56.86,0,1.56-.7,1.56-1.56,0-.5-.24-.97-.65-1.27l1.95-3.93c.15.05.3.08.46.08.25,0,.48-.06.69-.17l5.91,8.2c-.61.61-.61,1.6,0,2.21s1.6.61,2.21,0,.61-1.6,0-2.21c-.29-.29-.69-.46-1.1-.45h0ZM13.53,5.58c0-.2-.04-.38-.11-.56l4.26-2.47c.24.29.57.49.95.55v4.96c-.85.14-1.43.94-1.29,1.79.02.11.05.22.09.33l-4.28,2.57c-.24-.28-.57-.47-.93-.53v-5.1c.75-.12,1.31-.77,1.31-1.53h0Z"/></g></svg>`,
      shareUrl: `https://www.bibsonomy.org/ShowBookmarkEntry?jump=yes&url={url}&description={text}{title}{description}&extended=`,
      color: `#000000`,
      transform: `0.7,0,-2`,
    },
    blogger: {
      label: `Blogger`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M542.6 286.7C540.8 278.7 535.8 271.3 530.1 268.2C528.3 267.2 517.1 266 505.1 265.5C485 264.6 482.8 264.2 476.4 260.5C466.3 254.6 463.6 248.2 463.5 231C463.4 198 449.7 167.3 422.6 139.7C403.3 120 381.7 106.7 357.1 99.2C351.2 97.4 338 96.8 293.8 96.3C224.4 95.5 209 96.9 185.4 106.3C141.9 123.5 110.7 160.1 99.3 206.9C97.2 215.7 96.7 229.8 96.2 310.8C95.6 412.3 96.3 427.2 102.6 447.3C118.2 496.9 162.5 533.6 207 541.6C221.8 544.3 404.3 544.9 423 542.4C455.5 538 481 524.9 504.9 500.5C522.2 482.8 533 463.7 540.1 438.4C545 420.8 544.6 295.6 542.6 286.7zM220.5 223.1C228.3 215.2 230.5 214.9 279.3 214.9C323.2 214.9 324.7 215 331.1 218.3C340.4 223 344.5 229.6 344.5 240.2C344.5 249.7 340.7 256.4 332.2 261.8C327.6 264.7 324.9 264.9 281.9 265.1C255.4 265.3 234.2 264.7 231.1 263.9C214.5 259.2 208.3 235.4 220.5 223.1zM412.3 422.9L397.4 425.3L319.9 426.2C251.8 427 232.6 425.8 229 424.2C221.9 421.1 215.2 412.5 214.1 404.8C213 397.5 216.7 387.5 222.3 382.4C229.4 376 232.5 375.8 319.6 375.7C409.2 375.6 408.7 375.6 417.2 383.5C429.3 394.8 426.7 414.7 412.3 422.9z"/></svg>`,
      shareUrl: `https://www.blogger.com/blog_this.pyra?u={url}&n={title}&t={text}{description}`,
      color: `#e58331`,
      transform: `0.95,0,0`,
    },
    blogmarks: {
      label: `BlogMarks`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.89 26"><g id="Layer_1-2"><polygon points="7.18 0 7.18 6.52 17.07 12.16 20.71 10.08 20.71 7.71 7.18 0"/><polygon points="7.18 8.21 7.18 26 20.71 18.29 20.71 15.92 15.59 13 7.18 8.21"/><rect y=".05" width="25.89" height="25.89" style="fill:none;"/></g></svg>`,
      shareUrl: `https://blogmarks.net/my/new.php?mini=1&simple=1&title={title}&url={url}`,
      color: `#afdc57`,
      transform: `0.8,0,0`,
    },
    bluesky: {
      label: `Bluesky`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M439.8 358.7C436.5 358.3 433.1 357.9 429.8 357.4C433.2 357.8 436.5 358.3 439.8 358.7zM320 291.1C293.9 240.4 222.9 145.9 156.9 99.3C93.6 54.6 69.5 62.3 53.6 69.5C35.3 77.8 32 105.9 32 122.4C32 138.9 41.1 258 47 277.9C66.5 343.6 136.1 365.8 200.2 358.6C203.5 358.1 206.8 357.7 210.2 357.2C206.9 357.7 203.6 358.2 200.2 358.6C106.3 372.6 22.9 406.8 132.3 528.5C252.6 653.1 297.1 501.8 320 425.1C342.9 501.8 369.2 647.6 505.6 528.5C608 425.1 533.7 372.5 439.8 358.6C436.5 358.2 433.1 357.8 429.8 357.3C433.2 357.7 436.5 358.2 439.8 358.6C503.9 365.7 573.4 343.5 593 277.9C598.9 258 608 139 608 122.4C608 105.8 604.7 77.7 586.4 69.5C570.6 62.4 546.4 54.6 483.2 99.3C417.1 145.9 346.1 240.4 320 291.1z"/></svg>`,
      shareUrl: `https://bsky.app/intent/compose?text={text}{title}{description}{url}`,
      color: `#3a83f7`,
      transform: `0.8,0,2`,
    },
    bookmarks: {
      label: `Bookmarks`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M27.256 9.5c-2.188-3.79-6.36-.54-7.83 2.205a5.53 5.53 0 0 1 2.006 3.475c3.103.094 8.023-1.873 5.824-5.68-.7-1.212.515.894 0 0M15.998 3c-4.368 0-3.664 5.23-2.013 7.886a5.53 5.53 0 0 1 4.023 0C19.66 8.23 20.366 3 15.998 3M9.255 8.294c-1.108-.64-2.42-.918-3.49-.053-.96.78-1.79 2.27-1.617 3.54.352 2.563 4.32 3.467 6.416 3.404a5.53 5.53 0 0 1 2.01-3.477c-.67-1.256-1.898-2.59-3.32-3.41-.71-.41 1.422.82 0 0zm2.17 10.756a5.5 5.5 0 0 1-.86-2.23c-2.786-.084-7.77 1.608-6.057 5.24 2.023 4.292 6.448 1.248 8.063-1.765a5.4 5.4 0 0 1-1.14-1.246c-.133-.2.313.47 0 0zm6.777 2.408a6 6 0 0 0-.198-.342 5.54 5.54 0 0 1-4.02 0C12.338 23.766 11.624 29 16 29c4.218 0 3.67-4.848 2.204-7.542-.064-.12.678 1.243 0 0zm9.628-1.37c-.478-2.46-4.326-3.33-6.398-3.27a5.53 5.53 0 0 1-2.007 3.476c.934 1.744 2.858 3.73 4.913 4.006 2.043.276 3.853-2.332 3.49-4.212-.153-.8.137.706 0 0z"/></svg>`,
      shareUrl: `https://www.bookmarks.fr/favoris/AjoutFavori?action=add&address={url}&title={title}`,
      color: `#9fbf57`,
      transform: `0.9,0,0`,
    },
    box: {
      label: `Box`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.14 24.14"><g id="Layer_1-2"><path d="M1.03,4.28c-.54,0-.96.42-.96.9v7.55c.05,2.51,2.11,4.51,4.61,4.49,1.72,0,3.31-.94,4.14-2.46.78,1.44,2.34,2.46,4.07,2.46,2.58,0,4.67-2.04,4.67-4.61.06-2.46-2.04-4.49-4.61-4.49-1.74,0-3.3.96-4.07,2.4-.78-1.44-2.34-2.4-4.14-2.4-1.08,0-2.04.36-2.82.9v-3.83c-.01-.49-.41-.89-.9-.9ZM17.67,8.02c-.25-.04-.5.01-.7.16-.36.3-.48.9-.18,1.32l2.4,3.12-2.4,3.12c-.3.42-.24.96.18,1.26.42.3,1.02.3,1.32-.12l2.04-2.64,2.1,2.7c.3.36.9.42,1.32.12.36-.3.42-.84.12-1.26l-2.34-3.11,2.34-3.06c.3-.42.3-1.02-.12-1.32-.48-.3-1.02-.24-1.32.18l-2.1,2.58-2.04-2.69c-.15-.18-.37-.3-.61-.34ZM4.68,9.91c1.56,0,2.82,1.26,2.82,2.76s-1.26,2.76-2.82,2.76-2.82-1.2-2.82-2.76,1.26-2.76,2.82-2.76ZM12.95,9.91c1.56,0,2.82,1.26,2.82,2.76-.06,1.56-1.32,2.76-2.82,2.76s-2.82-1.2-2.82-2.76,1.26-2.76,2.82-2.76Z"/><rect width="24.14" height="24.14" style="fill:none;"/></g></svg>`,
      shareUrl: `https://www.box.com/api/1.0/import?url={url}&name={title}&description={text}{description}&import_as=link`,
      color: `#0061D5`,
      transform: `0.9,0,2`,
    },
    buffer: {
      label: `Buffer`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M524.2 444.7L327.7 542.5C325.4 543.5 322.9 544 320.4 544C317.9 544 315.4 543.5 313.1 542.5L116.5 444.7C112.5 442.7 112.5 439.4 116.5 437.4L163.6 414C165.9 413 168.4 412.5 170.9 412.5C173.4 412.5 175.9 413 178.2 414L313 481C315.3 482 317.8 482.5 320.3 482.5C322.8 482.5 325.3 482 327.6 481L462.4 414C464.7 413 467.2 412.5 469.7 412.5C472.2 412.5 474.7 413 477 414L524.1 437.4C528.1 439.4 528.1 442.6 524.1 444.6zM524.2 308.2L477.1 284.8C474.8 283.8 472.3 283.3 469.8 283.3C467.3 283.3 464.8 283.8 462.5 284.8L327.7 351.8C325.4 352.8 322.9 353.3 320.4 353.3C317.9 353.3 315.4 352.8 313.1 351.8L178.3 284.7C176 283.7 173.5 283.2 171 283.2C168.5 283.2 166 283.7 163.7 284.7L116.5 308.1C112.5 310.1 112.5 313.4 116.5 315.4L313 413.2C315.3 414.2 317.8 414.7 320.3 414.7C322.8 414.7 325.3 414.2 327.6 413.2L524.1 315.4C528.1 313.4 528.1 310.1 524.1 308.1zM116.5 194.4L313 284.7C317.7 286.6 323 286.6 327.7 284.7L524.2 194.4C528.2 192.5 528.2 189.5 524.2 187.7L327.7 97.4C323 95.5 317.7 95.5 313 97.4L116.5 187.7C112.5 189.5 112.5 192.6 116.5 194.4z"/></svg>`,
      shareUrl: `https://publish.buffer.com/compose?url={url}&text={text}{description}{title}`,
      color: `#231F20`,
      transform: `0.95,0,1`,
    },
    clubhouse: {
      label: `Clubhouse`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clubhouse</title><path d="M24 9.543c0 .32-.23.763-.337.976-.39.833-1.03 2.112-1.03 3.585 0 3.213-1.135 4.811-2.023 5.628a5.706 5.706 0 0 1-3.852 1.527 6.144 6.144 0 0 1-3.32-.976c-1.366-.905-2.219-2.326-3.088-3.745-.692-1.153-1.171-2.06-1.918-3.816-.421-1.018-.813-2.012-1.15-3.094-.16-.514-.142-.905.053-1.153.195-.23.462-.337.78-.355.55-.018.764.373 1.083 1.384.195.639.586 1.563.816 2.077.302.621.728 1.455.923 1.74.16.25.302.32.461.32.284 0 .497-.16.497-.443 0-.16-.16-.426-.248-.586-.16-.302-.497-.905-.728-1.42a32.775 32.775 0 0 1-.763-1.917c-.142-.373-.301-.905-.461-1.437-.248-.816-.373-1.313-.373-1.687 0-.568.426-.94 1.065-.94.461 0 .763.23.958 1.064.16.763.444 2.006.852 2.982.266.639.656 1.492.887 1.918.142.248.301.461.301.55 0 .124-.23.32-.426.585-.124.16-.177.267-.177.39 0 .107.071.214.177.356.107.142.213.284.338.284.088 0 .142-.036.195-.107a6.12 6.12 0 0 1 1.847-1.563c.816-.461 1.651-.692 2.308-.834.319-.07.408-.142.408-.32 0-.212-.16-.336-.373-.354-.16-.018-.301 0-.55.018-.177.018-.266-.071-.372-.302-.32-.674-.94-1.811-1.313-3.266a13.95 13.95 0 0 1-.39-2.13c-.054-.391.017-.533.212-.71.249-.213.692-.302 1.03-.213.407.106.62.426.833 1.67.107.585.284 1.33.497 1.97.266.816.603 1.492 1.118 2.397.284.497.638 1.011 1.011 1.51-.071.213-.195.354-.603.692-.408.337-.816.692-1.189 1.348-.266.479-.39 1.011-.39 1.366 0 .337.07.408.284.408.372 0 .674-.07.692-.23.088-.64.195-1.047.55-1.528.212-.266.585-.603.887-.87.567-.46.763-.727.958-1.383.088-.302.195-.586.337-.852.337-.62.94-1.33 1.882-1.33.302 0 .55.088.71.337a.966.966 0 0 1 .124.479zM12.608 7.265c.16.658.355 1.226.55 1.723.23.605.497 1.12.87 1.811.177.337.265.337.691.107a9.14 9.14 0 0 1 1.207-.515c-.639-1.384-1.171-2.539-1.437-3.514a29.883 29.883 0 0 1-.39-1.918c-.054-.497-.107-.923-.231-1.384-.142-.568-.338-.834-.888-.834-.514 0-1.135.266-1.135.94 0 .444.124 1.1.248 1.631.213.516.249.835.515 1.953zm-7.484 7.147c-.43.116-2.276.784-2.721.957-.503.195-.857.372-.605 1.122.205.607.553.636.874.516.45-.166 2.442-1.21 2.818-1.442.34-.21.45-.37.29-.769-.145-.363-.354-.465-.656-.384zm-1.276-3.074c.252-.008.448-.09.508-.526.047-.335-.006-.51-.39-.629-.371-.114-2.702-.494-3.205-.542-.434-.042-.702 0-.753.687-.049.64.13.836.572.88.508.05 2.733.144 3.268.13zm-2.63-6.082c.474.283 2.293 1.385 2.906 1.579.306.096.468.01.64-.331s.218-.477-.111-.742c-.34-.274-2.123-1.661-2.628-1.924-.435-.226-.729-.139-.993.361-.299.566-.244.798.185 1.057z"/></svg>`,
      color: `#FFE450`,
      transform: `0.85,-2,0`,
    },
    codepen: {
      label: `CodePen`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M566.3 223.7L332.3 67.7C324.3 62.8 315.8 62.7 307.7 67.7L73.7 223.7C67.7 227.7 64 234.8 64 242L64 398C64 405.1 67.7 412.3 73.7 416.3L307.7 572.3C315.7 577.2 324.2 577.3 332.3 572.3L566.3 416.3C572.3 412.3 576 405.2 576 398L576 242C576 234.9 572.3 227.7 566.3 223.7zM342 127.1L514.3 242L437.4 293.4L342 229.7L342 127.1zM298 127.1L298 229.7L202.6 293.4L125.7 242L298 127.1zM108 283.1L163.1 320L108 356.8L108 283.1zM298 512.8L125.7 398L202.6 346.6L298 410.3L298 512.8zM320 372L242.3 320L320 268L397.7 320L320 372zM342 512.9L342 410.3L437.4 346.6L514.3 398L342 512.9zM532 356.9L476.9 320L532 283.1L532 356.8z"/></svg>`,
      color: `#000000`,
      transform: `0.9,0,0`,
    },
    copied: {
      label: `Copied!`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>`,
      color: `#000000`,
      transform: `1,0,0`,
    },
    copyUrl: {
      label: `Copy URL`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 50 62.5" x="0px" y="0px"><path d="M36.71,9.57H21.15a3.85,3.85,0,0,0-3.85,3.85v3.75h-4A3.85,3.85,0,0,0,9.44,21V36.58a3.86,3.86,0,0,0,3.85,3.85H28.85a3.85,3.85,0,0,0,3.85-3.85V32.83h4A3.85,3.85,0,0,0,40.56,29V13.42A3.86,3.86,0,0,0,36.71,9.57Zm-7.09,27a.77.77,0,0,1-.77.77H13.29a.78.78,0,0,1-.77-.77V21a.77.77,0,0,1,.77-.77H28.85a.76.76,0,0,1,.77.77V36.58ZM37.48,29a.77.77,0,0,1-.77.77h-4V21a3.85,3.85,0,0,0-3.85-3.85H20.38V13.42a.77.77,0,0,1,.77-.77H36.71a.78.78,0,0,1,.77.77Z"/></svg>`,
      color: `#000000`,
      transform: `1,0,0`,
    },
    diaspora: {
      label: `Diaspora`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M315.7 418.6C314.3 418.6 227.7 538.5 227 538.5C226.3 538.5 140.4 478 140 477.3C139.6 476.6 226.6 351.5 226.6 349.8C226.6 347.6 97 305.8 89 302.7C87.7 302.2 120.4 200.9 120.7 200.6C121.3 199.9 265.1 247.6 266.2 247.6C266.6 247.6 267.1 247 267.2 246.3C267.6 244.3 268.2 97.7 268.9 96.7C269.7 95.5 373.4 96 374 96.4C375.5 97.4 377.5 252.5 380.1 252.5C381.5 252.5 518.8 205.5 519.4 206.2C520.2 207.1 551.3 308.4 550.9 308.8C550 309.7 410.7 355.9 410.3 357.6C410 359 493.1 479.7 492.8 480.5C492.5 481.3 407.3 544 406.5 544C405.5 543.8 317.5 418.5 315.6 418.5L315.6 418.5z"/></svg>`,
      shareUrl: `https://test.com/bookmarklet?v=1&url={url}&title={title}&notes={text}{description}`,
      color: `#000000`,
      transform: `0.95,0,0`,
    },
    diigo: {
      label: `Diigo`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.03 32.03"><g id="Layer_1-2"><rect width="32.03" height="32.03" style="fill:none;"/><path d="M23.81,2.69c.01.2.03.4.03.59,0,4.81.03,9.62-.01,14.42-.02,3.25-1.5,5.68-4.39,7.16-4.66,2.39-10.49-.64-11.21-5.84-.76-5.52,3.75-9.56,8.68-9.02,1.11.12,2.16.5,3.13,1.07.52.3.53.29.53-.29,0-2.7.01-5.4.01-8.1h3.22ZM15.9,22.66c2.61.07,4.82-2.02,4.95-4.55.14-2.63-1.89-5.07-4.73-5.15-2.7-.07-4.87,2-4.97,4.71-.11,2.72,2.13,5.01,4.75,4.99h0Z""/></g></svg>`,
      shareUrl: `https://www.diigo.com/post?url={url}&title={title}&desc={text}{description}`,
      color: `#4A8BCA`,
      transform: `1,-1,3`,
    },
    dev_to: {
      label: `DEV`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>`,
      color: `#0A0A0A`,
      transform: `0.8,0,0`,
    },
    discord: {
      label: `Discord`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`,
      color: `#5865F2`,
      transform: `0.75,0,0`,
    },
    douban: {
      label: `Douban`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Douban</title><path d="M.51 3.06h22.98V.755H.51V3.06Zm20.976 2.537v9.608h-2.137l-1.669 5.76H24v2.28H0v-2.28h6.32l-1.67-5.76H2.515V5.597h18.972Zm-5.066 9.608H7.58l1.67 5.76h5.501l1.67-5.76ZM18.367 7.9H5.634v5.025h12.733V7.9Z"/></svg>`,
      shareUrl: `https://www.douban.com/recommend/?url={url}&title={title}&sel=`,
      color: `#2D963D`,
      transform: `0.7,0,0`,
    },
    draugiem: {
      label: `Draugiem`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Draugiem.lv</title><path d="M17.12 7.694c4.3.056 6.808 2.693 3.96 6.3-1.307 1.662-3.517 3.303-6.465 4.373l-.422.144c-.278.09-.553.173-.823.258-.638.18-1.26.34-1.863.455-.645.134-1.268.229-1.87.298-.43.042-.844.07-1.245.078-2.743.07-4.806-.68-5.477-2.285-.81-1.919.83-4.592 4.116-6.627C4.597 11.661.188 13.96 0 17.256v.404a4.307 4.307 0 0 0 .193 1.029c.7 2.228 4.003 3.267 8.21 2.894a19.43 19.43 0 0 0 1.244-.147 24.08 24.08 0 0 0 3.733-.874c.137-.05.275-.09.414-.14.283-.09.561-.184.831-.29 3.64-1.322 6.342-3.087 7.921-5.101.898-1.155 1.364-2.236 1.454-3.185v-.723c-.26-2.403-3.064-3.815-6.88-3.43zm-2.788-1.192a1.237 1.237 0 0 0 .283-.033c.61-.152.908-.803.934-1.572.028-.815-.257-1.495-.934-1.592a.826.826 0 0 0-.18 0 1.111 1.111 0 0 0-1.065.79 2.526 2.526 0 0 0-.154.815 2.192 2.192 0 0 0 .154.954.993.993 0 0 0 .962.638zm-.013.273a2.946 2.946 0 0 0-.7.075l.057.077.103.185.085.196.07.2.046.206.036.208.02.217v.427l-.015.216v.213l-.028.216-.029.214-.041.216-.041.214-.041.208-.05.208-.04.201-.05.193-.048.188-.049.18-.041.172-.041.165-.02.105-.03.116-.025.126-.023.131-.026.14-.02.118v.025l-.029.155-.028.151-.02.16-.037.175-.02.167-.028.165-.021.175-.026.164-.023.175-.02.173-.021.172c.041.5.077.921.098 1.163a1.253 1.253 0 0 0 .167.61.772.772 0 0 0 .648.295.947.947 0 0 0 .597-.213 1.178 1.178 0 0 0 .278-.692c.11-.713.43-3.054.705-4.057.396-1.446 1.343-4.078-.983-4.278a2.259 2.259 0 0 0-.296-.016zm-2.83-.743h.016c.9 0 1.322-.829 1.322-1.84 0-1.01-.42-1.842-1.32-1.85h-.018c-.913 0-1.335.831-1.335 1.85 0 1.019.425 1.84 1.335 1.84zm-1.852 4.273c.082.352.167.679.237.97.283 1.155.56 3.84.663 4.65.103.811.389.991.97 1.045.574-.054.865-.226.963-1.044.097-.818.38-3.496.656-4.651.069-.291.159-.618.257-.97.257-1.06.463-2.316 0-3.108-.299-.515-.867-.854-1.863-.854-.995 0-1.58.34-1.87.854-.476.803-.27 2.048-.013 3.108zM8.402 6.469a1.237 1.237 0 0 0 .283.033.993.993 0 0 0 .952-.65 2.403 2.403 0 0 0 .152-.955 2.673 2.673 0 0 0-.152-.815 1.122 1.122 0 0 0-1.065-.79.803.803 0 0 0-.18 0c-.672.098-.962.772-.937 1.592.021.782.327 1.433.947 1.585zm-.288 8.654a1.13 1.13 0 0 0 .288.692.944.944 0 0 0 .594.214.772.772 0 0 0 .651-.296 1.451 1.451 0 0 0 .168-.61l.095-1.155v-.015l-.02-.173-.021-.172-.029-.175-.02-.165-.02-.175-.027-.164-.033-.157-.026-.165-.026-.17-.02-.151-.028-.155v-.02L9.616 12l-.028-.14-.028-.131-.02-.126-.026-.116-.029-.105-.036-.165-.049-.172-.04-.18-.047-.188-.049-.193-.049-.2-.041-.222-.049-.208-.041-.214-.036-.214-.026-.213-.028-.216-.02-.214V8.14l.02-.216.033-.208.05-.206.061-.2.09-.196.105-.186.055-.077a2.977 2.977 0 0 0-.7-.074 2.218 2.218 0 0 0-.296 0c-2.315.2-1.379 2.83-.983 4.278.275 1.014.594 3.355.705 4.067z"/></svg>`,
      shareUrl: `https://www.draugiem.lv/say/ext/add.php?link={url}&title={title}`,
      color: `#FF6600`,
      transform: `0.85,2,0`,
    },
    dribbble: {
      label: `Dribbble`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>`,
      color: `#EA4C89`,
      transform: `0.8,0,0`,
    },
    dropbox: {
      label: `Dropbox`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dropbox</title><path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"/></svg>`,
      color: `#0061FF`,
      transform: `0.85,0,3`,
    },
    email: {
      label: `Email`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>`,
      color: `#000000`,
      shareUrl: `mailto:?body=`,
      transform: `0.95,0,0`,
    },
    evernote: {
      label: `Evernote`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M249.1 196.2C250.7 218.5 231.5 217.8 227.5 217.8C158.6 217.8 153.9 216.8 143.9 221.1C143.3 221.3 143.2 221.1 143.5 220.7L252.1 110.4C252.5 110 252.7 110.2 252.5 110.8C248.1 120.8 249.1 125.9 249.1 196.2zM328.1 504.2C313.4 467.1 341.1 427.3 380.6 427.6C398.1 427.6 403.2 450.8 388.5 459C382.3 462.3 363.6 460.7 363.4 478.2C363.4 495.3 383.1 503.2 394.6 503.1C400.6 503.1 406.5 501.9 412.1 499.6C417.7 497.3 422.7 493.9 426.9 489.7C431.1 485.5 434.5 480.4 436.8 474.9C439.1 469.4 440.3 463.4 440.3 457.4L440.3 457.3C440.3 445.7 432.5 410.1 392.8 402C385.1 400.5 327.8 395.7 324.4 351.5C320.7 368.4 307 415 281.3 420.6C272.6 422.5 211.6 428.2 168.4 383.8C168.4 383.8 149.8 368.6 140.2 325.8C136.8 310.1 130.9 286.1 129.1 263.8C129.1 245.8 140.2 233.4 154.2 231.6C235.2 231.6 244.2 233.9 255.2 223.8C265 214.6 263 208.3 263 121C264 112.7 270.8 90.2 316.4 96.9C322.4 97.8 348.3 101.1 353.9 127.5L418 138.8C438.4 142.5 488.9 145.8 498.6 196.7C521.3 317.8 507.5 435.2 506.4 435.2C490.4 549.6 395.3 544.1 395.3 544.1C376.3 543.9 341.1 534.7 328 504.3L328 504.3zM409 299.4C408 301.3 406.8 305.4 409.9 306.4C424 311.3 449.7 313.2 455.8 311.9C458.9 311.7 458.9 307.5 458.3 305.3C454.8 283.5 417.5 278.8 409.1 299.4L409.1 299.4z"/></svg>`,
      shareUrl: `https://www.evernote.com/clip.action?url={url}&title={title}`,
      color: `#00A82D`,
      transform: `1.05,0,0`,
    },
    facebook: {
      label: `Facebook`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>`,
      color: `#2c64f6`,
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u={url}`,
      transform: `0.9,0,0`,
    },
    fark: {
      label: `Fark`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.19 32.19"><g id="Layer_1-2"><polygon points="30.22 7.31 30.22 .15 12.27 .15 11.96 .15 3.95 .15 3.95 32.03 12.27 32.03 12.27 21.42 28.34 21.42 28.34 14.27 12.27 14.27 12.27 7.31 30.22 7.31"/><rect width="32.19" height="32.19" style="fill:none;"/></g></svg>`,
      shareUrl: `https://www.fark.com/submit?new_url={url}`,
      color: `#555555`,
      transform: `0.65,0,0`,
    },
    flickr: {
      label: `Flickr`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flickr</title><path d="M5.334 6.666C2.3884 6.666 0 9.055 0 12c0 2.9456 2.3884 5.334 5.334 5.334 2.9456 0 5.332-2.3884 5.332-5.334 0-2.945-2.3864-5.334-5.332-5.334zm13.332 0c-2.9456 0-5.332 2.389-5.332 5.334 0 2.9456 2.3864 5.334 5.332 5.334C21.6116 17.334 24 14.9456 24 12c0-2.945-2.3884-5.334-5.334-5.334Z"/></svg>`,
      color: `#0063DC`,
      transform: `0.7,0,0`,
    },
    flipboard: {
      label: `Flipboard`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#FFF"><path d="M19 19H7V7h12z"/><path d="M25 13H7V7h18z"/><path d="M13 25H7V7h6z"/></g></svg>`,
      shareUrl: `https://share.flipboard.com/bookmarklet/popout?v=2&url={url}&title={title}`,
      color: `#E12828`,
      transform: `1.15,2,0`,
    },
    foursquare: {
      label: `Foursquare`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Foursquare</title><path d="M2.376 0h7.338v1.204h-6.12v3.372h5.44V5.78h-5.44v4.874H2.376V0zm-.208 20.16l1.19-.268c.213 1.473 1.232 2.352 2.89 2.352 1.487 0 2.664-.694 2.664-1.828 0-.807-.595-1.487-2.919-2.18-2.635-.752-3.513-1.715-3.513-3.13 0-1.829 1.473-2.805 3.613-2.805 2.393 0 3.456 1.218 3.825 2.89l-1.19.269c-.299-1.374-1.233-1.955-2.679-1.955-1.36 0-2.323.51-2.323 1.487 0 .793.624 1.403 2.777 2.083 2.565.793 3.67 1.658 3.67 3.301 0 2.04-1.715 3.103-3.896 3.103-2.281-.003-3.84-1.193-4.11-3.318zm9.223-2.238c0-3.159 2.068-5.624 5.242-5.624 3.159 0 5.2 2.479 5.2 5.624 0 1.573-.525 2.933-1.404 3.925a36.155 36.155 0 011.247 1.303l-.879.85a57.16 57.16 0 00-1.303-1.346c-.807.524-1.771.822-2.861.822-3.061 0-5.242-2.352-5.242-5.554zm7.181 3.825a31.241 31.241 0 00-1.247-1.148l.85-.863a36.537 36.537 0 011.331 1.218c.638-.764 1.02-1.813 1.02-3.046 0-2.493-1.516-4.39-3.896-4.39s-3.91 1.897-3.91 4.39c0 2.565 1.658 4.363 3.91 4.363.725 0 1.375-.184 1.942-.524z"/></svg>`,
      color: `#3333FF`,
      transform: `0.7,0,0`,
    },
    github: {
      label: `GitHub`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
      color: `#181717`,
      transform: `0.75,0,0`,
    },
    gitlab: {
      label: `GitLab`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>`,
      color: `#FC6D26`,
      transform: `0.7,0,4`,
    },
    gmail: {
      label: `Gmail`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
      shareUrl: `https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su={title}&body={text}{description}{url}`,
      color: `#EA4335`,
      transform: `0.75,0,0`,
    },
    google: {
      label: `Google`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>`,
      color: `#4285F4`,
      transform: `0.75,0,0`,
    },
    google_classroom: {
      label: `Google Classroom`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Classroom</title><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"/></svg>`,
      shareUrl: `https://classroom.google.com/share?url={url}`,
      color: `#0F9D58`,
      transform: `0.75,0,0`,
    },
    google_play: {
      label: `Google Play`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>`,
      color: `#414141`,
      transform: `0.75,6,0`,
    },
    google_translate: {
      label: `Google Translate`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Translate</title><path d="M22.401 4.818h-9.927L10.927 0H1.599C.72 0 .002.719.002 1.599v16.275c0 .878.72 1.597 1.597 1.597h10L13.072 24H22.4c.878 0 1.597-.707 1.597-1.572V6.39c0-.865-.72-1.572-1.597-1.572zm-15.66 8.68c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 1.012 0 1.86.375 2.512.976l-.99.952a2.194 2.194 0 0 0-1.522-.584c-1.305 0-2.363 1.08-2.363 2.409S5.436 12.16 6.74 12.16c1.507 0 2.13-1.08 2.19-1.808l-2.188-.002V9.066h3.51c.05.23.09.457.09.764 0 2.147-1.434 3.669-3.602 3.669zm16.757 8.93c0 .59-.492 1.072-1.097 1.072h-8.875l3.649-4.03h.005l-.74-2.302.006-.005s.568-.488 1.277-1.24c.712.771 1.63 1.699 2.818 2.805l.771-.772c-1.272-1.154-2.204-2.07-2.89-2.805.919-1.087 1.852-2.455 2.049-3.707h2.034v.002h.002v-.94h-4.532v-1.52h-1.471v1.52H14.3l-1.672-5.21.006.022h9.767c.605 0 1.097.48 1.097 1.072v16.038zm-6.484-7.311c-.536.548-.943.873-.943.873l-.008.004-1.46-4.548h4.764c-.307 1.084-.988 2.108-1.651 2.904-1.176-1.392-1.18-1.844-1.18-1.844h-1.222s.05.678 1.7 2.61z"/></svg>`,
      shareUrl: `https://translate.google.com/translate?u={url}`,
      color: `#4285F4`,
      transform: `0.75,0,0`,
    },
    groupme: {
      label: `GroupMe`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GroupMe</title><path d="M11.1597 6.57419H12.8398V8.16898H11.1597V6.57419ZM18.1997 0H5.80011C3.14898 0 1 2.03979 1 4.55577V16.3243C1 18.8402 3.14898 20.88 5.80011 20.88H9.92715L11.9786 24L14.0306 20.88H18.1997C20.8506 20.88 23 18.8402 23 16.3243V4.55574C23 2.03976 20.8506 0 18.1997 0ZM7.56833 8.16895H9.34755V6.57416H7.56833V4.85447H9.34755V3.16587H11.1597V4.85447H12.8398V3.16587H14.6519V4.85447H16.4308V6.57416H14.6519V8.16895H16.4308V9.88852H14.6519V11.5772H12.8398V9.88852H11.1597V11.5772H9.34755V9.88852H7.56833V8.16895ZM20.3122 13.4321C20.3122 13.4321 17.9202 17.708 12.2406 17.708C12.1619 17.708 12.0843 17.707 12.007 17.7057C11.9299 17.707 11.8522 17.708 11.7737 17.708C6.09416 17.708 3.70211 13.4321 3.70211 13.4321C3.70211 13.4321 3.54729 13.1536 3.54729 12.8534C3.53754 12.6368 3.64915 12.3263 3.9421 12.1433C4.105 12.0417 4.259 11.9914 4.40179 11.9757C5.08566 11.9069 5.48202 12.3295 5.80794 12.8121C6.16788 13.3447 8.24445 15.678 12.007 15.7672C15.7698 15.678 17.8464 13.3447 18.2063 12.8121C18.5322 12.3295 18.9429 11.9062 19.6125 11.9757C19.7553 11.9914 19.9094 12.0417 20.0722 12.1433C20.3652 12.3263 20.4792 12.5839 20.469 12.8532C20.446 13.2494 20.3122 13.4321 20.3122 13.4321Z"/></svg>`,
      color: `#00AFF0`,
      transform: `0.8,0,4`,
    },
    hashnode: {
      label: `Hashnode`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Hashnode</title><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/></svg>`,
      color: `#2962FF`,
      transform: `0.8,0,0`,
    },
    hacker_news: {
      label: `Hacker News`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.96 256.96"><g id="Layer_1-2"><path d="M143.68,155.58v100.9h-31.4v-102.7L32.48.48h37.3c52.5,98.3,49.2,101.2,59.3,125.6,12.3-27,5.8-24.4,60.6-125.6h34.8l-80.8,155.1Z"/><rect width="256.96" height="256.96" style="fill:none;"/></g></svg>`,
      shareUrl: `https://news.ycombinator.com/submitlink?u={url}&t={title}`,
      color: `#ed702d`,
      transform: `0.7,0,4`,
    },
    hatena: {
      label: `Hatena`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.88 140.88"><g id="Layer_1-2"><path d="M65.54,65.87c7.36-2.01,12.7-4.94,16.08-8.86,3.33-3.88,5-9.12,5-15.73.09-4.83-1.07-9.6-3.36-13.86-2.32-4.04-5.72-7.34-9.82-9.55-4.19-2.21-8.73-3.69-13.42-4.38-5.22-.83-14.37-1.25-27.49-1.25H.62v116.4h32.88c13.21-.01,22.73-.46,28.55-1.35,5.1-.7,10.05-2.24,14.65-4.56,4.75-2.47,8.66-6.3,11.22-11,2.72-5.04,4.09-10.69,3.98-16.41,0-8.63-2.35-15.56-7-20.73-4.63-5.19-11.09-8.09-19.36-8.72ZM30.08,38.03h6.81c7.89,0,13.19.88,15.89,2.66,2.7,1.78,4.07,4.85,4.07,9.22s-1.46,7.17-4.35,8.91c-2.93,1.7-8.27,2.6-16.06,2.6h-6.36v-23.39ZM57.1,104.76c-3.1,1.9-8.44,2.84-15.93,2.84h-11.09v-25.42h11.52c7.69,0,13.01.97,15.84,2.9,2.92,1.94,4.34,5.34,4.34,10.25,0,4.43-1.58,7.53-4.68,9.43Z"/><rect x="112.72" y="12.24" width="25.6" height="77.58"/><path d="M125.52,99.13c-8.14,0-14.74,6.6-14.74,14.74s6.6,14.74,14.74,14.74h0c8.14-.01,14.73-6.6,14.74-14.74,0-8.14-6.6-14.74-14.74-14.74Z"/><rect width="140.88" height="140.88" style="fill:none;"/></g></svg>`,
      shareUrl: `https://b.hatena.ne.jp/entry/panel/?url={url}`,
      color: `#49a2d9`,
      transform: `0.75,0,0`,
    },
    instagram: {
      label: `Instagram`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,
      color: `#FF0069`,
      transform: `0.8,0,0`,
    },
    instapaper: {
      label: `Instapaper`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instapaper</title><path d="M14.766 20.259c0 1.819.271 2.089 2.934 2.292V24H6.301v-1.449c2.666-.203 2.934-.473 2.934-2.292V3.708c0-1.784-.27-2.089-2.934-2.292V0h11.398v1.416c-2.662.203-2.934.506-2.934 2.292v16.551z"/></svg>`,
      shareUrl: `https://www.instapaper.com/edit?url={url}&title={title}&summary={text}{description}`,
      color: `#1F1F1F`,
      transform: `0.65,0,0`,
    },
    itch_io: {
      label: `Itch.io`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Itch.io</title><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/></svg>`,
      color: `#FA5C5C`,
      transform: `0.75,0,0`,
    },
    itunes: {
      label: `ITunes`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>iTunes</title><path d="M11.977 23.999c-2.483 0-4.898-.777-6.954-2.262a11.928 11.928 0 01-4.814-7.806A11.954 11.954 0 012.3 4.994 11.85 11.85 0 0110.08.159a11.831 11.831 0 018.896 2.104 11.933 11.933 0 014.815 7.807 11.958 11.958 0 01-2.091 8.937 11.855 11.855 0 01-7.78 4.835 12.17 12.17 0 01-1.943.157zm-6.474-2.926a11.022 11.022 0 008.284 1.96 11.044 11.044 0 007.246-4.504c3.583-5.003 2.445-12.003-2.538-15.603a11.022 11.022 0 00-8.284-1.96A11.046 11.046 0 002.966 5.47C-.618 10.474.521 17.473 5.503 21.073zm10.606-3.552a2.08 2.08 0 001.458-1.468l.062-.216.008-5.786c.006-4.334 0-5.814-.024-5.895a.535.535 0 00-.118-.214.514.514 0 00-.276-.073c-.073 0-.325.035-.56.078-1.041.19-7.176 1.411-7.281 1.45a.786.786 0 00-.399.354l-.065.128s-.031 9.07-.078 9.172a.7.7 0 01-.376.35 9.425 9.425 0 01-.609.137c-1.231.245-1.688.421-2.075.801-.22.216-.382.51-.453.82-.067.294-.045.736.051 1.005.1.281.262.521.473.71.192.148.419.258.674.324.563.144 1.618-.016 2.158-.328a2.36 2.36 0 00.667-.629c.06-.089.15-.268.2-.399.176-.456.181-8.581.204-8.683a.44.44 0 01.32-.344c.147-.04 6.055-1.207 6.222-1.23.146-.02.284.027.36.12a.29.29 0 01.109.096c.048.07.051.213.058 2.785.008 2.96.012 2.892-.149 3.079-.117.136-.263.189-.864.31-.914.188-1.226.276-1.576.447-.437.213-.679.446-.867.835a1.58 1.58 0 00-.182.754c.001.49.169.871.55 1.245.035.034.069.066.104.097.192.148.387.238.633.294.37.082 1.124.025 1.641-.126z"/></svg>`,
      color: `#FB5BC5`,
      transform: `0.8,0,0`,
    },
    known: {
      label: `Known`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Known</title><path d="M18.387 16.926h.604v1.936h-6.086v-1.936h.904s.333-.072.26-.386l-2.392-3.776-1.893 1.847v1.322c0 .653.324.993.687.993h.844v1.936H5.414v-1.936h.741c.364 0 .688-.34.688-.993V7.992c0-.364-.324-.855-.688-.855h-.741V5.201h5.901v1.936h-.844c-.363 0-.687.491-.687.855v3.83l4.087-4.144a.316.316 0 0 0-.219-.541h-.747V5.201H19v1.936h-.872c-.363 0-.867.176-1.225.525l-3.058 2.985 3.396 5.276c.304.434.772 1.003 1.146 1.003zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-1.684 0c0-5.697-4.619-10.316-10.316-10.316C6.303 1.684 1.684 6.303 1.684 12c0 5.697 4.619 10.316 10.316 10.316 5.697 0 10.316-4.619 10.316-10.316z"/></svg>`,
      shareUrl: `https://withknown.com/share/?url={url}&title={title}`,
      color: `#333333`,
      transform: `0.8,0,0`,
    },
    leetcode: {
      label: `LeetCode`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
      color: `#FFA116`,
      transform: `0.85,0,-5`,
    },
    linktree: {
      label: `Linktree`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Linktree</title><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"/></svg>`,
      color: `#43E55E`,
      transform: `0.85,0,2`,
    },
    line: {
      label: `Line`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LINE</title><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>`,
      shareUrl: `https://social-plugins.line.me/lineit/share?url={url}`,
      color: `#00C300`,
      transform: `0.8,0,4`,
    },
    linkedin: {
      label: `LinkedIn`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>`,
      color: `#2d64bc`,
      shareUrl: `https://www.linkedin.com/shareArticle?mini=true&url={url}&text={text}{title}{description}`,
      transform: `0.9,0,0`,
    },
    livejournal: {
      label: `LiveJournal`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LiveJournal</title><path d="M18.09 14.696c-1.512.664-2.726 1.885-3.381 3.399l4.27.883-.886-4.282h-.003zM2.475 8.317L0 5.85C1.125 3.237 3.216 1.14 5.823 0h.006l2.469 2.463c1.368-.591 2.876-.921 4.463-.921C18.967 1.542 24 6.569 24 12.771 24 18.973 18.967 24 12.761 24 6.551 24 1.52 18.976 1.52 12.771c0-1.591.355-3.081.952-4.451l9.143 9.114c1.125-2.613 3.218-4.71 5.823-5.85l-9.135-9.12h-.008c-2.606 1.14-4.695 3.24-5.823 5.85l.003.003z"/></svg>`,
      shareUrl: `https://www.livejournal.com/update.bml?subject={title}&event={url}`,
      color: `#00B0EA`,
      transform: `0.85,-2,-2`,
    },
    mail_ru: {
      label: `Mail.ru`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mail.Ru</title><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"/></svg>`,
      shareUrl: `https://connect.mail.ru/share?url={url}&title={title}`,
      color: `#005FF9`,
      transform: `0.8,0,1`,
    },
    mastodon: {
      label: `Mastodon`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M529 243.1C529 145.9 465.3 117.4 465.3 117.4C402.8 88.7 236.7 89 174.8 117.4C174.8 117.4 111.1 145.9 111.1 243.1C111.1 358.8 104.5 502.5 216.7 532.2C257.2 542.9 292 545.2 320 543.6C370.8 540.8 399.3 525.5 399.3 525.5L397.6 488.6C397.6 488.6 361.3 500 320.5 498.7C280.1 497.3 237.5 494.3 230.9 444.7C230.3 440.1 230 435.4 230 430.8C315.6 451.7 388.7 439.9 408.7 437.5C464.8 430.8 513.7 396.2 519.9 364.6C529.7 314.8 528.9 243.1 528.9 243.1zM453.9 368.3L407.3 368.3L407.3 254.1C407.3 204.4 343.3 202.5 343.3 261L343.3 323.5L297 323.5L297 261C297 202.5 233 204.4 233 254.1L233 368.3L186.3 368.3C186.3 246.2 181.1 220.4 204.7 193.3C230.6 164.4 284.5 162.5 308.5 199.4L320.1 218.9L331.7 199.4C355.8 162.3 409.8 164.6 435.5 193.3C459.2 220.6 453.9 246.3 453.9 368.3L453.9 368.3z"/></svg>`,
      color: `#6364f6`,
      shareUrl: `https://www.addtoany.com/add_to/mastodon?type=page&linkname={title}&linknote={text}{description}&linkurl={url}`,
      transform: `1.15,0,2`,
    },
    matrix: {
      label: `Matrix`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Matrix</title><path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/></svg>`,
      color: `#000000`,
      transform: `0.75,0,0`,
    },
    mdn: {
      label: `MDN`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MDN Web Docs</title><path d="m21.538 1.1-6.745 21.8h-2.77L18.77 1.1ZM24 1.1v21.8h-2.462V1.1Zm-12 0v21.8H9.538V1.1Zm-2.462 0L2.77 22.9H0L6.746 1.1Z"/></svg>`,
      color: `#000000`,
      transform: `0.75,-5,0`,
    },
    medium: {
      label: `Medium`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"/></svg>`,
      color: `#000000`,
      transform: `0.75,0,0`,
    },
    meetup: {
      label: `Meetup`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Meetup</title><path d="M6.98.555a.518.518 0 0 0-.105.011.53.53 0 1 0 .222 1.04.533.533 0 0 0 .409-.633.531.531 0 0 0-.526-.418zm6.455.638a.984.984 0 0 0-.514.143.99.99 0 1 0 1.02 1.699.99.99 0 0 0 .34-1.36.992.992 0 0 0-.846-.482zm-3.03 2.236a5.029 5.029 0 0 0-4.668 3.248 3.33 3.33 0 0 0-1.46.551 3.374 3.374 0 0 0-.94 4.562 3.634 3.634 0 0 0-.605 4.649 3.603 3.603 0 0 0 2.465 1.597c.018.732.238 1.466.686 2.114a3.9 3.9 0 0 0 5.423.992c.068-.047.12-.106.184-.157.987.881 2.47 1.026 3.607.24a2.91 2.91 0 0 0 1.162-1.69 4.238 4.238 0 0 0 2.584-.739 4.274 4.274 0 0 0 1.19-5.789 2.466 2.466 0 0 0 .433-3.308 2.448 2.448 0 0 0-1.316-.934 4.436 4.436 0 0 0-.776-2.873 4.467 4.467 0 0 0-5.195-1.656 5.106 5.106 0 0 0-2.773-.807zm-5.603.817a.759.759 0 0 0-.423.135.758.758 0 1 0 .863 1.248.757.757 0 0 0 .193-1.055.758.758 0 0 0-.633-.328zm15.994 2.37a.842.842 0 0 0-.47.151.845.845 0 1 0 1.175.215.845.845 0 0 0-.705-.365zm-8.15 1.028c.063 0 .124.005.182.014a.901.901 0 0 1 .45.187c.169.134.273.241.432.393.24.227.414.089.534.02.208-.122.369-.219.984-.208.633.011 1.363.237 1.514 1.317.168 1.199-1.966 4.289-1.817 5.722.106 1.01 1.815.299 1.96 1.22.186 1.198-2.136.753-2.667.493-.832-.408-1.337-1.34-1.12-2.26.16-.688 1.7-3.498 1.757-3.93.059-.44-.177-.476-.324-.484-.19-.01-.34.081-.526.362-.169.255-2.082 4.085-2.248 4.398-.296.56-.67.694-1.044.674-.548-.029-.798-.32-.72-.848.047-.31 1.26-3.049 1.323-3.476.039-.265-.013-.546-.275-.68-.263-.135-.572.07-.664.227-.128.215-1.848 4.706-2.032 5.038-.316.576-.65.76-1.152.784-1.186.056-2.065-.92-1.678-2.116.173-.532 1.316-4.571 1.895-5.599.389-.69 1.468-1.216 2.217-.892.387.167.925.437 1.084.507.366.163.759-.277.913-.412.155-.134.302-.276.49-.357.142-.06.343-.095.532-.094zm10.88 2.057a.468.468 0 0 0-.093.011.467.467 0 0 0-.36.555.47.47 0 0 0 .557.36.47.47 0 0 0 .36-.557.47.47 0 0 0-.464-.37zm-22.518.81a.997.997 0 0 0-.832.434 1 1 0 1 0 1.39-.258 1 1 0 0 0-.558-.176zm21.294 2.094a.635.635 0 0 0-.127.013.627.627 0 0 0-.48.746.628.628 0 0 0 .746.483.628.628 0 0 0 .482-.746.63.63 0 0 0-.621-.496zm-18.24 6.097a.453.453 0 0 0-.092.012.464.464 0 1 0 .195.908.464.464 0 0 0 .356-.553.465.465 0 0 0-.459-.367zm13.675 1.55a1.044 1.044 0 0 0-.583.187 1.047 1.047 0 1 0 1.456.265 1.044 1.044 0 0 0-.873-.451zM11.4 22.154a.643.643 0 0 0-.36.115.646.646 0 0 0-.164.899.646.646 0 0 0 .899.164.646.646 0 0 0 .164-.898.646.646 0 0 0-.54-.28z"/></svg>`,
      color: `#ED1C40`,
      transform: `1,0,0`,
    },
    mendeley: {
      label: `Mendeley`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M624.6 389.2C612.3 376.8 594.9 370 576.2 372C532.9 371 526.5 337.1 538.7 273.2C561.5 215.7 523.8 141.7 451.3 142.4C373.9 143.1 369.6 224.4 320.4 224.4C272.3 224.4 266.4 143.1 189.5 142.4C116.6 141.6 79.4 215.7 102.1 273.2C114.3 337.1 107.9 371 64.6 372C43.4 369.7 27.6 378.5 11.6 394.5C-8.3 414.2-7.7 489.3 54.2 497.1C101.3 503 135.8 454.2 115.4 409.3C68.1 305.6 301.3 303.2 261.9 401.1C261.8 401.2 261.7 401.3 261.6 401.5C234.8 444.3 268.4 498.9 320.4 496.7C372.5 498.8 405.8 444.1 379.2 401.5C379.1 401.3 379 401.2 378.9 401.1C339.5 303.2 572.7 305.6 525.4 409.3C520.8 419.3 518.7 430.6 519.7 442.3C524.6 495.7 588.4 516.4 624.6 477.5C642.4 462.7 647.7 411.9 624.6 389.2zM320.7 370.1L320.1 370.1C276.7 370.1 257.3 332.6 257.3 307.3C257.3 272.6 285.5 244.5 320.1 244.5L320.7 244.5C355.4 244.5 383.5 272.6 383.5 307.3C383.5 332.3 364.3 370.1 320.7 370.1z"/></svg>`,
      shareUrl: `https://www.mendeley.com/import/?url={url}`,
      color: `#9D1620`,
      transform: `0.9,0,1`,
    },
    meneame: {
      label: `Meneame`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#FFF"><path d="M27.03 7.804c-.012-.44-.617-1.916-.893-1.916l-.067.01-.03.04c-.043.055-.07.157.083.714.23 1.14.413 2.764-.68 3.712-.658.667-1.562 1.052-2.437 1.425-1.208.51-2.456 1.042-3.09 2.334-.76 2.156.583 5.37 1.563 7.716.203.496.4.963.56 1.38.044.09.05.184.01.28-.224.58-1.725 1.16-2.82 1.584-.977.378-1.316.52-1.32.704 0 .037.01.11.112.155l.02.01h.023c2.303-.027 3.968-.564 4.688-1.514.372-.49.48-1.08.312-1.708-.144-.536-.448-1.233-.8-2.04-.7-1.61-1.575-3.616-1.575-5.315.045-1.5 1.388-2.156 2.687-2.787.313-.15.61-.295.874-.445 1.64-.734 3.208-2.413 2.78-4.344z"/><path d="M15.32 25.348c-.423-.03-.82-.057-1.108-.1q-.481-.051-.974-.1c-1.927-.19-3.92-.387-5.528-1.5-1.79-1.34-1.916-3.96-1.124-5.748.644-1.635 1.616-3.337 2.89-5.06l.066-.09q.103.317.247.622c.812 1.687 1.77 2.585 2.92 2.745q.466.07.925.07c1.04 0 1.977-.267 2.716-.77l.38-.26-.452.08q-.254.043-.51.094c-.535.106-1.086.21-1.617.21-.617 0-1.12-.15-1.54-.46-1.882-1.203-2.623-3.85-1.582-5.67.743-1.402 2.184-2.104 4.536-2.21 2.03-.092 3.998.83 5.16 1.37.292.136.545.253.74.326.482.152 1.04.314 1.577.314.62 0 1.083-.226 1.374-.66.27-.32.3-1.006.176-1.484-.046-.178-.135-.402-.295-.462l-.15-.056.016.16c.048.444-.11.938-.397 1.256a.96.96 0 0 1-.714.34q-.135 0-.29-.043c-.53-.124-1.044-.35-1.54-.57-.18-.08-.363-.16-.54-.232-1.76-.91-3.38-1.352-4.944-1.352-.61 0-1.22.07-1.805.207-1.19.22-2.786.9-3.693 2.137-.9 1.074-1.16 2.65-.738 4.122l-.16.132-.467.38c-.704.563-1.367 1.096-2.01 2.02-1.097 1.726-2.3 4.013-1.868 6.39.404 2.53 2.847 4.146 5.05 4.434 1.068.125 2.18.185 3.4.185h.002c1.088 0 2.25-.045 3.66-.147l.037-.002.026-.024c.09-.09.08-.17.065-.212-.082-.224-.645-.286-1.91-.375z"/><path d="M18.398 21.133c-.044-.124-.178-.502-2.283-.502-1.357 0-3.012.17-3.363.3l-.427.16.454.034c.313.025.68.037 1.063.05 1.257.04 2.82.088 3.634.644.18.316.053 1.464-.05 2.39-.11 1.004-.17 1.582-.044 1.77l.02.03.034.01a.3.3 0 0 0 .063.008q.143 0 .267-.177c.515-.734.933-3.86.627-4.713z"/></g></svg>`,
      shareUrl: `https://meneame.net/submit?url={url}`,
      color: `#FF7D12`,
      transform: `1.1,0,0`,
    },
    messenger: {
      label: `Messenger`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320.6 72C180.6 72 72 174.3 72 312.6C72 384.9 101.7 447.4 150.1 490.5C158.4 498 156.7 502.4 158.1 548.7C158.2 551.9 159.1 555.1 160.7 557.9C162.3 560.7 164.6 563.1 167.4 564.8C170.2 566.5 173.3 567.6 176.5 567.8C179.7 568 183 567.5 186 566.2C238.9 543 239.6 541.2 248.6 543.6C401.8 585.8 568 487.7 568 312.6C568 174.3 460.6 72 320.6 72zM469.8 257.1L396.8 372.7C394 377 390.4 380.8 386.2 383.7C382 386.6 377.1 388.5 372.1 389.5C367.1 390.5 361.8 390.3 356.8 389.1C351.8 387.9 347.1 385.7 343 382.7L284.9 339.2C282.3 337.3 279.1 336.2 275.9 336.2C272.7 336.2 269.5 337.3 266.9 339.2L188.5 398.6C178 406.5 164.3 394 171.4 382.9L244.4 267.3C247.2 263 250.8 259.2 255 256.3C259.2 253.4 264.1 251.5 269.1 250.5C274.1 249.5 279.4 249.7 284.4 250.9C289.4 252.1 294.1 254.3 298.3 257.3L356.4 300.8C359 302.7 362.2 303.8 365.4 303.8C368.6 303.8 371.8 302.7 374.4 300.8L452.8 241.4C463.2 233.4 476.9 245.9 469.9 257z"/></svg>`,
      shareUrl: `https://www.facebook.com/dialog/send?app_id=5303202981&display=popup&link={url}&redirect_uri={redirect}`,
      color: `#0866FF`,
      transform: `1,0,1`,
    },
    mewe: {
      label: `MeWe`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687.81 687.81"><g id="Layer_1-2"><rect width="687.81" height="687.81" style="fill:none;"/><g id="Page-1"><g id="bw"><g id="mewe-logo"><path d="M187.66,201.36c0,16.74-13.57,30.35-30.35,30.35s-30.31-13.57-30.31-30.35,13.57-30.35,30.31-30.35,30.35,13.61,30.35,30.35h0Z" style="fill-rule:evenodd;"/><path d="M335.28,201.44c0,16.74-13.57,30.35-30.31,30.35s-30.31-13.57-30.31-30.35,13.57-30.35,30.31-30.35,30.31,13.61,30.31,30.35h0Z" style="fill-rule:evenodd;"/><path d="M509.76,201.44c0,16.74-13.57,30.35-30.35,30.35s-30.35-13.57-30.35-30.35,13.57-30.35,30.35-30.35,30.35,13.61,30.35,30.35h0Z" style="fill-rule:evenodd;"/><path d="M684.11,201.44c0,16.74-13.57,30.35-30.31,30.35s-30.35-13.57-30.35-30.35,13.57-30.35,30.35-30.35,30.31,13.61,30.31,30.35h0Z" style="fill-rule:evenodd;"/><path d="M37.7,284.52c0-11.72,9.3-21.35,21.35-21.35h4.48c9.3,0,15.51,4.81,19.62,11.35l72.97,114.3,73.34-114.63c4.48-7.24,10.69-11.02,19.25-11.02h4.48c12.05,0,21.35,9.62,21.35,21.35v201.7c0,11.72-9.3,21.02-21.35,21.02-11.35,0-21.02-9.62-21.02-21.02v-144.57l-58.82,88.47c-4.48,6.87-9.99,11.02-17.89,11.02s-13.08-4.15-17.56-11.02l-58.53-87.77v144.24c0,11.72-9.3,20.65-21.02,20.65s-20.65-8.93-20.65-20.65v-202.07h0Z" style="fill-rule:evenodd;"/><path d="M306,291.56c-1.03-2.39-1.73-5.51-1.73-8.27,0-11.72,9.99-20.65,21.68-20.65,10.32,0,18.26,6.54,21.02,15.51l55.44,165.59,54.37-164.89c3.45-9.99,10.65-16.86,21.35-16.86h3.08c10.65,0,18.26,6.91,21.35,16.86l54.37,164.89,55.44-165.96c3.13-8.6,10.32-15.14,20.65-15.14,11.35,0,21.02,8.97,21.02,20.32,0,2.76-1.03,6.21-2.06,8.6l-71.28,199.69c-3.78,10.69-11.72,17.56-22.05,17.56h-4.11c-10.32,0-17.93-6.54-21.68-17.56l-53.72-157.32-53.72,157.32c-3.78,11.02-11.68,17.56-22.05,17.56h-4.11c-10.32,0-17.89-6.54-22.05-17.56l-71.24-199.69h0Z" style="fill-rule:evenodd;"/></g></g></g></g></svg>`,
      shareUrl: `https://mewe.com/share?link={url}`,
      color: `#17377F`,
      transform: `0.95,0,0`,
    },
    micro_blog: {
      label: `Micro.blog`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M495.8 426.2C525.3 391.5 542.9 347.9 542.9 300.4C542.9 187.4 443.3 96 320.4 96C197.5 96 98 187.5 98 300.4C98 413.3 197.6 504.9 320.5 504.9C347.5 504.9 374.4 500.4 399.9 491.5C401.3 491 402.9 491 404.4 491.4C405.9 491.8 407.1 492.8 408 494C426.6 519.1 455.6 536.7 487.9 543.9C489 544.1 490.2 543.9 491.2 543.3C492.2 542.7 492.9 541.7 493.1 540.5C493.2 539.9 493.2 539.2 493.1 538.6C493 538 492.7 537.4 492.3 536.9C480 520.9 473.6 501.1 474.3 480.9C475 460.7 482.7 441.4 496 426.2L495.8 426.3zM426 276.4L368.7 319.9L389.5 388.8C389.9 390.1 389.9 391.5 389.4 392.8C388.9 394.1 388.2 395.2 387.1 396C386 396.8 384.7 397.2 383.3 397.2C381.9 397.2 380.6 396.8 379.5 396L320.4 355L261.3 396.1C260.2 396.9 258.9 397.3 257.5 397.3C256.1 397.3 254.8 396.9 253.7 396.1C252.6 395.3 251.8 394.2 251.4 392.9C251 391.6 250.9 390.2 251.3 388.9L272.1 320L214.8 276.5C213.7 275.7 212.9 274.6 212.5 273.3C212.1 272 212.1 270.6 212.5 269.3C212.9 268 213.7 266.9 214.8 266.1C215.9 265.3 217.2 264.8 218.5 264.8L290.4 263.3L314.1 195.4C314.5 194.1 315.4 193 316.5 192.2C317.6 191.4 318.9 191 320.3 191C321.7 191 323 191.4 324.1 192.2C325.2 193 326 194.1 326.5 195.4L350.2 263.3L422.1 264.8C423.5 264.8 424.8 265.2 425.9 266C427 266.8 427.8 267.9 428.2 269.2C428.6 270.5 428.6 271.9 428.2 273.2C427.8 274.5 427 275.6 425.9 276.5L425.9 276.5z"/></svg>`,
      shareUrl: `https://micro.blog/post?text={text}{description}{title}{url}`,
      color: `#FF8800`,
      transform: `1.1,0,2`,
    },
    misskey: {
      label: `Misskey`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Misskey</title><path d="M8.91076 16.8915c-1.03957.0038-1.93213-.6294-2.35267-1.366-.22516-.3217-.66989-.4364-.6761 0v2.0148c0 .8094-.29152 1.5097-.87581 2.1002-.56755.573-1.25977.8595-2.0779.8595-.80014 0-1.49298-.2865-2.07727-.8601C.28408 19.05 0 18.3497 0 17.5403V6.45968c0-.62378.17553-1.18863.52599-1.69455.36657-.52284.83426-.88582 1.4018-1.08769a2.84574 2.84574 0 0 1 1.00049-.17742c.90125 0 1.65239.35421 2.25281 1.06262l2.99713 3.51572c.06699.05016.263.43696.73192.43696.47016 0 .6916-.3868.75796-.43758l2.9717-3.5151c.6178-.70841 1.377-1.06262 2.2782-1.06262.3337 0 .6675.05893 1.0012.17742.5669.20187 1.0259.56422 1.377 1.08769.3665.50592.5501 1.07077.5501 1.69455V17.5403c0 .8094-.2915 1.5097-.8758 2.1002-.5675.573-1.2604.8595-2.0779.8595-.8008 0-1.493-.2865-2.0779-.8601-.5669-.5899-.8504-1.2902-.8504-2.0996v-2.0148c-.0496-.5499-.5303-.2032-.7009 0-.4503.8431-1.31369 1.3616-2.35264 1.366ZM21.447 8.60998c-.7009 0-1.3015-.24449-1.8019-.73348-.4838-.50571-.7257-1.11277-.7257-1.82118s.2419-1.30711.7257-1.79611c.5004-.50571 1.101-.75856 1.8019-.75856.7009 0 1.3017.25285 1.8025.75856.5003.489.7505 1.0877.7505 1.79611 0 .70841-.2502 1.31547-.7505 1.82118-.5008.48899-1.1016.73348-1.8025.73348Zm.0248.50655c.7009 0 1.2935.25285 1.7777.75856.5003.50571.7505 1.11301.7505 1.82181v6.2484c0 .7084-.2502 1.3155-.7505 1.8212-.4838.489-1.0764.7335-1.7777.7335-.7005 0-1.3011-.2445-1.8019-.7335-.5003-.5057-.7505-1.1128-.7505-1.8212v-6.2484c0-.7084.2502-1.3157.7505-1.82181.5004-.50571 1.101-.75856 1.8019-.75856Z"/></svg>`,
      color: `#A1CA03`,
      transform: `0.8,0,0`,
    },
    mix: {
      label: `Mix`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128L96 476.9C96 533.1 184 535 184 476.9L184 238.3C191.9 185.4 272 187.9 272 244.8L272 420.1C272 478 368 478.1 368 420.1L368 304C373.3 249.3 456 251.5 456 308.3L456 332.1C456 392 544 388.7 544 332.1L544 128L96 128z"/></svg>`,
      shareUrl: `https://mix.com/add?url={url}`,
      color: `#FF8126`,
      transform: `1,0,0`,
    },
    mixi: {
      label: `Mixi`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M16.09 5.246C9.617 5.246 4 9.216 4 16.63c0 6.93 7.707 10.193 12.758 9.01v2.374S28 25.054 28 15.034c0-6.11-4.505-9.788-11.91-9.788m6.83 14.778h-1.657v-5.688s-.505-1.586-1.585-1.586c-.9 0-2.525.374-2.525 2.08v5.193h-1.657V14.77c0-1.586-.787-2.09-1.506-2.09-1.15 0-2.727.807-2.727 2.403v4.94H9.606v-9.01h1.657v1.03c.656-.546 1.564-1.03 2.727-1.03 1.224 0 2.092.434 2.606 1.282a4.48 4.48 0 0 1 3.082-1.202c1.97 0 3.24 1.788 3.24 3.202v5.73z"/></svg>`,
      shareUrl: `https://mixi.jp/share.pl?u={url}`,
      color: `#D1AD5A`,
      transform: `1.1,0,0`,
    },
    myspace: {
      label: `Myspace`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Myspace</title><path d="M19.802 12.274A3.811 3.811 0 0023.62 8.47c0-2.101-1.71-3.795-3.818-3.795a3.816 3.816 0 00-3.818 3.81 3.817 3.817 0 003.818 3.811zm-8.602.705a3.43 3.43 0 003.435-3.424A3.43 3.43 0 0011.2 6.13a3.44 3.44 0 00-3.436 3.436A3.436 3.436 0 0011.2 13zm-7.8.635c1.71 0 3.093-1.38 3.093-3.081 0-1.704-1.395-3.084-3.105-3.084A3.086 3.086 0 00.3 10.539c0 1.7 1.387 3.078 3.095 3.078zm0 .705c-1.96 0-3.4 1.717-3.4 3.495v1.196c0 .17.138.31.31.31h6.18a.31.31 0 00.309-.31v-1.196c0-1.779-1.437-3.5-3.398-3.5zm7.8-.56c-2.18 0-3.78 1.915-3.78 3.891v1.331c0 .188.156.344.345.344h6.87a.344.344 0 00.342-.344V17.65c0-1.976-1.598-3.891-3.777-3.891zm8.602-.617c-2.422 0-4.197 2.126-4.197 4.323v1.477c0 .21.172.381.382.381h7.63c.21 0 .383-.171.383-.381v-1.477c-.001-2.197-1.776-4.323-4.198-4.323z"/></svg>`,
      shareUrl: `https://myspace.com/Modules/PostTo/Pages/?u={url}&t={title}&l=3&c={text}{description}`,
      color: `#030303`,
      transform: `0.85,0,-2`,
    },
    ok: {
      label: `OK`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.2 115.2"><g id="Layer_1-2"><rect width="115.2" height="115.2" style="fill:none;"/><path d="M57.65,57.18c7.79,0,14.79-3.11,19.89-8.21,5.1-5.1,8.21-12.17,8.21-19.89s-3.11-14.79-8.21-19.89c-5.1-5.1-12.1-8.21-19.89-8.21s-14.79,3.11-19.89,8.21c-5.1,5.1-8.21,12.1-8.21,19.89s3.11,14.79,8.21,19.89c5.1,5.03,12.1,8.21,19.89,8.21ZM48.66,20.01c2.34-2.34,5.52-3.75,8.99-3.75s6.72,1.42,8.99,3.75c2.34,2.34,3.75,5.52,3.75,8.99s-1.42,6.72-3.75,8.99c-2.34,2.34-5.52,3.75-8.99,3.75s-6.72-1.42-8.99-3.75c-2.34-2.34-3.75-5.52-3.75-8.99s1.42-6.65,3.75-8.99Z"/><path d="M95.45,68.5l-8.28-11.25c-.5-.64-1.35-.71-1.98-.21-7.79,6.65-17.34,10.9-27.61,10.9s-19.82-4.32-27.61-10.9c-.57-.5-1.49-.42-1.98.21l-8.21,11.25c-.42.57-.28,1.34.21,1.77,6.94,5.66,15.01,9.41,23.43,11.4l-17.41,30.65c-.42.85.21,1.91,1.2,1.91h17.06c.5,0,.99-.28,1.2-.78l12.17-27.18,12.17,27.18c.21.5.71.78,1.2.78h17.06c.99,0,1.63-1.06,1.13-1.91l-17.41-30.65c8.42-1.98,16.42-5.73,23.36-11.4.57-.42.64-1.2.28-1.77Z"/></g></svg>`,
      shareUrl: `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}`,
      color: `#ee7f31`,
      transform: `0.8,0,0`,
    },
    onlyfans: {
      label: `OnlyFans`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OnlyFans</title><path d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"/></svg>`,
      color: `#00AFF0`,
      transform: `0.85,4,4`,
    },
    opensea: {
      label: `OpenSea`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OpenSea</title><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"/></svg>`,
      color: `#2081E2`,
      transform: `0.85,0,0`,
    },
    outlook: {
      label: `Outlook`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.81 26.81"><g id="Layer_1-2"><rect width="26.81" height="26.81" style="fill:none;"/><path d="M18.67,12.11l7.73-5.21c0-.62-.57-1.06-.9-1.06h-8.83s0,5.14,0,5.14l1.8,1.13c.07.02.13.02.2,0Z"/><path d="M18.32,14.02l-1.64-1.13v6.99h8.33c.74,0,1.4-.43,1.4-1.46v-9.45s-7.86,5.22-7.58,5.05c0,0-.28.17-.51,0Z"/><polygon points="8.19 10.53 8.19 10.53 8.19 10.53 8.19 10.53"/><path d="M8.15,16.24c.55,0,.98-.25,1.31-.74.32-.5.48-1.18.48-2.06,0-.92-.16-1.63-.47-2.14-.31-.51-.74-.77-1.28-.77h0c-.56,0-1,.26-1.33.79-.33.52-.5,1.22-.5,2.09s.16,1.57.5,2.08c.32.51.76.77,1.29.77Z"/><path d="M.41,23.34l15.3,3.21V.26L.41,3.23v20.12ZM5.65,10.1c.65-.87,1.51-1.3,2.58-1.3,1.01,0,1.83.41,2.45,1.24.62.83.93,1.92.93,3.27,0,1.4-.32,2.52-.97,3.37h0c-.65.85-1.49,1.28-2.53,1.28-1.01,0-1.84-.41-2.48-1.24-.64-.82-.95-1.9-.95-3.23,0-1.4.32-2.53.97-3.39Z"/></g></svg>`,
      shareUrl: `https://outlook.live.com/mail/0/deeplink/compose/?path=%2Fmail%2Finbox&subject={title}&body={text}{description}{url}`,
      color: `#3376cd`,
      transform: `0.75,0,0`,
    },
    papaly: {
      label: `Papaly`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.03 32.03"><g id="Layer_1-2"><rect width="32.03" height="32.03" style="fill:none;"/><path d="M20.76,9.21c1.11,0,2.3.52,3.11,1.33l.18.19c1.36,1.36,1.4,4.43.04,5.79l-3.1,2.79-4.97,4.47-4.97-4.47-3.1-2.79c-1.36-1.36-1.32-4.43.04-5.79l.19-.19c.81-.81,1.99-1.33,3.11-1.33.76,0,1.48.24,2.03.79l2.71,3.28,2.71-3.28c.55-.55,1.27-.79,2.03-.79M20.76,6.29c-1.58,0-3.03.59-4.1,1.65l-.1.1-.09.11-.46.56-.46-.56-.09-.11-.1-.1c-1.06-1.06-2.52-1.65-4.1-1.65-1.87,0-3.8.82-5.17,2.18l-.18.18c-2.52,2.52-2.54,7.43-.04,9.92l.05.06.06.05,3.1,2.79,4.97,4.47,1.95,1.75,1.95-1.75,4.97-4.47,3.1-2.79.06-.05.06-.06c2.49-2.49,2.47-7.41-.04-9.92l-.18-.19c-1.37-1.37-3.3-2.18-5.17-2.18"/></g></svg>`,
      shareUrl: `https://papaly.com/api/share.html?url={url}&title={title}`,
      color: `#5fb8f9`,
      transform: `1,0,0`,
    },
    patreon: {
      label: `Patreon`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Patreon</title><path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/></svg>`,
      color: `#000000`,
      transform: `0.8,0,0`,
    },
    pinboard: {
      label: `Pinboard`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinboard</title><path d="M13.352 14.585l-4.509 4.614.72-4.062L3.428 7.57 0 7.753 7.58 0v2.953l7.214 6.646 4.513-1.105-4.689 4.982L24 24l-10.648-9.415z"/></svg>`,
      shareUrl: `https://pinboard.in/add?next=same&url={url}&title={title}&description={text}{description}`,
      color: `#0000FF`,
      transform: `0.75,0,0`,
    },
    pinterest: {
      label: `Pinterest`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M568 320C568 457 457 568 320 568C294.4 568 269.8 564.1 246.6 556.9C256.7 540.4 271.8 513.4 277.4 491.9C280.4 480.3 292.8 432.9 292.8 432.9C300.9 448.3 324.5 461.4 349.6 461.4C424.4 461.4 478.3 392.6 478.3 307.1C478.3 225.2 411.4 163.9 325.4 163.9C218.4 163.9 161.5 235.7 161.5 314C161.5 350.4 180.9 395.7 211.8 410.1C216.5 412.3 219 411.3 220.1 406.8C220.9 403.4 225.1 386.5 227 378.7C227.6 376.2 227.3 374 225.3 371.6C215.2 359.1 207 336.3 207 315C207 260.3 248.4 207.4 319 207.4C379.9 207.4 422.6 248.9 422.6 308.3C422.6 375.4 388.7 421.9 344.6 421.9C320.3 421.9 302 401.8 307.9 377.1C314.9 347.6 328.4 315.8 328.4 294.5C328.4 275.5 318.2 259.6 297 259.6C272.1 259.6 252.1 285.3 252.1 319.8C252.1 341.8 259.5 356.6 259.5 356.6C259.5 356.6 235 460.4 230.5 479.8C225.5 501.2 227.5 531.4 229.6 551C137.4 514.9 72 425.1 72 320C72 183 183 72 320 72C457 72 568 183 568 320z"/></svg>`,
      color: `#d32d2f`,
      shareUrl: `https://www.pinterest.com/pin/create/link/?url={url}`,
      transform: `1.05,0,0`,
    },
    pixiv: {
      label: `Pixiv`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>pixiv</title><path d="M4.94 0A4.953 4.953 0 0 0 0 4.94v14.12A4.953 4.953 0 0 0 4.94 24h14.12A4.953 4.953 0 0 0 24 19.06c-.014 1.355 0-14.12 0-14.12A4.953 4.953 0 0 0 19.06 0Zm1.783 5.465h.904a.37.37 0 0 1 .31.17l.752 1.17a6.172 6.172 0 0 1 10.01 4.834 6.172 6.172 0 0 1-9.394 5.265v2.016a.37.37 0 0 1-.37.367H6.724a.37.37 0 0 1-.37-.367V5.834a.37.37 0 0 1 .37-.37m5.804 2.951a3.222 3.222 0 1 0-.002 6.443 3.222 3.222 0 0 0 .002-6.443"/></svg>`,
      color: `#0096FA`,
      transform: `0.75,0,0`,
    },
    plurk: {
      label: `Plurk`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Plurk</title><path d="M12.9017 1.9056a10.0652 10.0652 0 00-7.8802 3.707 10.1803 10.1803 0 00-.283.357l.004-.003c.232-.196.473-.345.717-.445l.058-.023c.299-.112.602-.147.9-.088 1.4401.289 2.1901 2.6091 1.6751 5.1832-.515 2.574-2.1 4.4271-3.54 4.139-1.0101-.202-1.6781-1.405-1.8121-2.992v-.005.052c-.003.132-.003.266 0 .4v.073l.002.059c.005.149.013.296.024.443.005.067.012.134.019.2a10.0322 10.0322 0 00.961 3.4431c.06.126.03.276-.078.363l-.277.226a.906.906 0 00-.29.97c0 .006.003.01.006.017a.955.955 0 00.059.142l.05-.039.23-.174a.2612.2612 0 11.316.416l-.245.186-.037.028 1.177 1.4481a.91.91 0 001.275.131l.258-.21a.298.298 0 01.374 0 10.0502 10.0502 0 006.5272 2.181 10.0422 10.0422 0 005.5722-1.855.298.298 0 01.38.025l.163.156a.909.909 0 001.179.059l-.004-.004-.21-.197a.262.262 0 01.358-.382l.225.21 1.26-1.326a.91.91 0 00-.033-1.282l-.263-.25a.297.297 0 01-.054-.36 10.0602 10.0602 0 001.103-6.6712c.301-.278.853-.824 1.0691-1.292.231-.502.29-1.02-.323-.792-.476.177-.842.291-1.286.19-1.417-3.5932-4.8472-6.1932-8.8513-6.4002a9.7102 9.7102 0 00-.473-.014zM2.2645 6.2466a1.228 1.228 0 00-1.082 1.7641 1.23 1.23 0 10.754 2.236c.177-.124.306-.289.395-.47.186.342.46.627.778.823a5.5901 5.5901 0 00.017.6001c.102 1.228.62 2.16 1.401 2.316 1.114.223 2.34-1.21 2.738-3.2.3991-1.99-.181-3.7841-1.295-4.0071-.434-.087-.885.08-1.298.432-.45.383-.854.988-1.14 1.73-.01-.002-.02-.003-.03-.007-.14-.04-.215-.131-.312-.152a1.23 1.23 0 00-.926-2.065zm2.862 1.2441c.054 0 .107.004.16.015.726.143 1.104 1.312.844 2.608-.259 1.2981-1.058 2.2301-1.783 2.0851-.493-.098-.824-.67-.905-1.433.181.07.37.113.56.122.527.024.871-.154 1.14-.513.346-.465.084-1.753-.374-1.92-.356-.13-.567.027-.884.05.16-.298.351-.544.557-.72.219-.185.453-.292.686-.295z"/></svg>`,
      shareUrl: `https://www.plurk.com/m?qualifier=shares&status={url}`,
      color: `#FF574D`,
      transform: `0.9,-3,1`,
    },
    printfriendly: {
      label: `PrintFriendly`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.97 32.97"><g id="Layer_1-2"><polygon points="16.21 .92 16.21 16.72 29.26 24.19 29.26 8.4 16.21 .92"/><polygon points="25.45 24.11 14.47 17.88 14.47 11.45 6.99 11.45 14.39 24.11 25.45 24.11"/><polygon points="9.51 19.84 3.71 24.73 16.45 32.05 26.03 25.89 13.09 25.99 9.51 19.84"/><rect width="32.97" height="32.97" style="fill:none;"/></g></svg>`,
      shareUrl: `https://www.printfriendly.com/print?url={url}`,
      color: `#133587`,
      transform: `0.95,-3,-1`,
    },
    push_to_kindle: {
      label: `Push to Kindle`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.95 53.95"><g id="Layer_1-2"><path d="M35.01,48.2l-13.31-16.14h-.06v16.14h-4.79V1.75h4.79v26.38h.06l11.41-10.96h6.23l-13.64,12.66,15.41,18.37h-6.1Z"/><rect width="53.95" height="53.95" style="fill:none;"/></g></svg>`,
      shareUrl: `https://pushtokindle.fivefilters.org/send.php?url={url}`,
      color: `#f19f39`,
      transform: `0.9,0,0`,
    },
    qzone: {
      label: `Qzone`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Qzone</title><path d="M23.9868 9.2012c-.032-.099-.127-.223-.334-.258-.207-.036-7.352-1.4063-7.352-1.4063s-.105-.022-.198-.07c-.092-.047-.127-.167-.127-.167S12.4472.954 12.3491.7679c-.099-.187-.245-.238-.349-.238-.104 0-.251.051-.349.238C11.5531.954 8.0245 7.3 8.0245 7.3s-.035.12-.128.167c-.092.047-.197.07-.197.07S.5546 8.9071.3466 8.9421c-.208.036-.302.16-.333.258a.477.477 0 00.125.4491L5.5013 15.14s.072.08.119.172c.016.104.005.21.005.21s-1.1891 7.243-1.2201 7.451c-.031.208.075.369.159.4301.083.062.233.106.421.013.189-.093 6.813-3.2614 6.813-3.2614s.098-.044.201-.061c.103-.017.201.061.201.061s6.624 3.1684 6.813 3.2614c.188.094.338.049.421-.013a.463.463 0 00.159-.43c-.021-.14-.93-5.6778-.93-5.6778.876-.5401 1.4251-1.0392 1.8492-1.7473-2.5944.9692-6.0069 1.7173-9.4163 1.8663-.9152.041-2.4104.097-3.4735-.015-.6781-.071-1.1702-.144-1.2432-.438-.053-.2151.054-.4601.5451-.8312a2640.8625 2640.8625 0 012.8614-2.1553c1.2852-.9681 3.5595-2.4703 3.5595-2.7314 0-.285-2.1443-.781-4.0376-.781-1.9452 0-2.2753.132-2.8114.168-.488.034-.769.005-.804-.138-.06-.2481.183-.3891.588-.5682.7091-.314 1.8603-.594 1.9843-.626.194-.052 3.0824-.8051 5.6188-.5351 1.3181.14 3.2444.668 3.2444 1.2762 0 .342-1.7212 1.4942-3.2254 2.5973-1.1492.8431-2.2173 1.5612-2.2173 1.6883 0 .342 3.5334 1.2411 6.6899 1.01l.003-.022c.048-.092.119-.172.119-.172l5.3627-5.4907a.477.477 0 00.127-.449z"/></svg>`,
      shareUrl: `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}`,
      color: `#f1A308`,
      transform: `0.85,0,-2`,
    },
    raindrop: {
      label: `Raindrop`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 799.62 799.62"><g id="Layer_1-2"><path d="M630.71,306.42c-6.71-50.16-29.23-95.59-65.38-131.73-43.5-43.5-101.35-67.46-162.87-67.46s-119.37,23.96-162.87,67.46c-36.14,36.14-58.66,81.57-65.37,131.73-69.1,27.03-115.09,93.94-115.09,168.45,0,99.71,81.12,180.83,180.83,180.83h325c99.71,0,180.83-81.12,180.83-180.83,0-74.51-45.99-141.42-115.09-168.45ZM239.96,619.04c-79.49,0-144.17-64.67-144.17-144.17,0-29.22,8.74-57.38,25.27-81.43,13.29-19.33,30.83-34.98,51.28-45.87,2.45,57.77,26.11,111.72,67.25,152.85l118.61,118.61h-118.24ZM384.13,593.11l-118.61-118.61c-36.58-36.58-56.72-85.21-56.72-136.94,0-1.13.01-2.29.03-3.46,10.2-2.25,20.64-3.39,31.13-3.39,79.49,0,144.17,64.67,144.17,144.17v118.24ZM347.24,329.38c-31.27-23.12-68.37-35.34-107.27-35.34-8.95,0-17.9.66-26.72,1.98,7.82-36.09,25.72-68.84,52.28-95.4,36.58-36.58,85.21-56.72,136.94-56.72s100.36,20.15,136.94,56.72c26.56,26.56,44.46,59.31,52.28,95.4-8.83-1.31-17.77-1.98-26.73-1.98-38.91,0-76,12.22-107.27,35.34-23.74,17.55-42.52,40.12-55.23,66.15-12.71-26.03-31.49-48.6-55.23-66.15ZM420.8,474.87c0-79.49,64.67-144.17,144.17-144.17,10.5,0,20.94,1.14,31.13,3.39.02,1.17.03,2.32.03,3.46,0,51.73-20.14,100.36-56.72,136.94l-118.61,118.61v-118.24ZM564.96,619.04h-118.24l118.61-118.61c41.14-41.14,64.8-95.09,67.25-152.85,20.45,10.88,37.99,26.53,51.28,45.87,16.53,24.05,25.27,52.21,25.27,81.43,0,79.49-64.67,144.17-144.17,144.17Z"/><rect width="799.62" height="799.62" style="fill:none;"/></g></svg>`,
      shareUrl: `https://app.raindrop.io/add?link={url}&title={title}`,
      color: `#387cca`,
      transform: `1,0,-1`,
    },
    ravelry: {
      label: `Ravelry`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ravelry</title><path d="M23.9718 10.9238c-.0597-.51098-.084-1.02918-.1851-1.53174-.1227-.61046-.2793-1.21823-.4755-1.80886-.34288-1.03247-.84358-1.9895-1.52577-2.84163-.2955-.3691-.59489-.73971-.92998-1.07185-.699-.69252-1.47808-1.28586-2.32827-1.78481-.88588-.52-1.81527-.9414-2.80316-1.21913-.54449-.153-1.10068-.26842-1.65627-.37632-.3351-.06493-.67949-.08236-1.01938-.12264-.0156-.0018-.0297-.01773-.0444-.02735-.5319.0003-1.06379.0003-1.59568.0003-.1191.01924-.2376.04569-.3576.0568-.57748.05381-1.13818.18667-1.69287.35078-.68279.20169-1.33498.47912-1.96527.80825-.66029.34506-1.28548.74813-1.88187 1.19388-.3048.22783-.6063.46258-.88829.71747-.50279.45507-1.00678.91104-1.47897 1.39707-.6378.65676-1.18769 1.38595-1.66288 2.17196C1.05934 7.533.71345 8.2628.46776 9.03978c-.1773.56118-.3054 1.13197-.3801 1.7178-.0744.58431-.1062 1.17043-.0768 1.75565.0336.66577.0951 1.32944.2187 1.9886.1713.91345.4392 1.79083.82679 2.63394.3207.69703.72149 1.34267 1.18618 1.95344.3897.51187.83099.97476 1.30258 1.40428.63239.5759 1.32508 1.07546 2.06487 1.5116.87719.51728 1.79787.92937 2.76266 1.24918.65639.21762 1.32808.37271 2.00847.48603.3.0499.60659.06192.90988.09258.0204.0021.0393.01834.0588.02765h1.59568c.1239-.01924.2472-.04629.372-.05651.80728-.06583 1.58667-.2636 2.34686-.52961.85018-.29787 1.66557-.6784 2.41916-1.17705.4818-.31861.95849-.64624 1.42018-.9931.2859-.21491.54299-.4695.80579-.71447.1959-.18275.38369-.37452.56879-.56839.59639-.6261 1.11118-1.31471 1.55307-2.05773.4716-.79292.8577-1.62611 1.10219-2.51671.1413-.51459.2445-1.04.3468-1.5642.051-.2609.0618-.5299.0924-.79502.0018-.01563.0177-.02976.0273-.04448v-1.8314c-.0096-.02946-.0246-.058-.0282-.08807zm-7.96218-.05682s-.81899-.14728-1.40698-.14728c-1.34398 0-1.65897.7364-1.65897 1.8305v4.62885H9.31072V7.75303h3.63295v1.57802c.441-1.32554 1.32298-1.78842 3.06595-1.78842z"/></svg>`,
      color: `#EE6E62`,
      transform: `0.85,0,0`,
    },
    reddit: {
      label: `Reddit`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M437 202.6C411.8 202.6 390.7 185.1 385.1 161.6C354.5 165.9 330.9 192.3 330.9 224L330.9 224.2C378.3 226 421.5 239.3 455.8 260.5C468.4 250.8 484.2 245 501.3 245C542.6 245 576 278.4 576 319.7C576 349.5 558.6 375.2 533.3 387.2C530.9 474 436.3 543.8 320.1 543.8C203.9 543.8 109.5 474.1 107 387.4C81.6 375.5 64 349.7 64 319.7C64 278.4 97.4 245 138.7 245C155.9 245 171.7 250.8 184.4 260.6C218.4 239.5 261.2 226.2 308.1 224.2L308.1 223.9C308.1 179.6 341.8 143 384.9 138.4C389.8 114.2 411.2 96 437 96C466.4 96 490.3 119.9 490.3 149.3C490.3 178.7 466.4 202.6 437 202.6zM221.5 319.3C200.6 319.3 182.6 340.1 181.3 367.2C180 394.3 198.4 405.3 219.3 405.3C240.2 405.3 255.9 395.5 257.1 368.4C258.3 341.3 242.4 319.3 221.4 319.3L221.5 319.3zM459 367.1C457.8 340 439.8 319.2 418.8 319.2C397.8 319.2 381.9 341.2 383.1 368.3C384.3 395.4 400 405.2 420.9 405.2C441.8 405.2 460.2 394.2 458.9 367.1L459 367.1zM398.9 437.9C400.4 434.3 397.9 430.2 394 429.8C371 427.5 346.1 426.2 320.2 426.2C294.3 426.2 269.4 427.5 246.4 429.8C242.5 430.2 240 434.3 241.5 437.9C254.4 468.7 284.8 490.3 320.2 490.3C355.6 490.3 386 468.7 398.9 437.9z"/></svg>`,
      color: `#eb5528`,
      shareUrl: `https://www.reddit.com/submit?type=LINK&url={url}&title={title}`,
      transform: `1.05,0,-3`,
    },
    refind: {
      label: `Refind`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#FFF"><path d="M16 21.256c-2.891 0-5.256-2.365-5.256-5.255 0-2.891 2.365-5.255 5.255-5.255 2.891 0 5.255 2.365 5.255 5.255.002 2.89-2.363 5.255-5.254 5.255"/><path d="M20.664 23.676A8.9 8.9 0 0 1 16 25c-4.95 0-9-4.05-9-9s4.05-9 9-9 9 4.05 9 9a8.9 8.9 0 0 1-1.302 4.628l2.293 1.991A11.9 11.9 0 0 0 28 16c0-6.6-5.4-12-12-12S4 9.4 4 16s5.4 12 12 12c2.456 0 4.745-.75 6.652-2.029z"/></g></svg>`,
      shareUrl: `https://refind.com/?url={url}`,
      color: `#1492ef`,
      transform: `1.05,0,0`,
    },
    rss: {
      label: `RSS`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>RSS</title><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/></svg>`,
      color: `#FFA500`,
      transform: `0.7,0,0`,
    },
    slack: {
      label: `Slack`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>`,
      color: `#4A154B`,
      transform: `0.75,0,0`,
    },
    slashdot: {
      label: `Slashdot`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slashdot</title><path d="M19.777 0L7.037 24H1.868L14.605 0h5.172zm2.354 19.801c0 2.268-1.841 4.105-4.109 4.105s-4.107-1.838-4.107-4.105 1.839-4.107 4.107-4.107 4.109 1.839 4.109 4.107z"/></svg>`,
      shareUrl: `https://slashdot.org/submission?url={url}`,
      color: `#026664`,
      transform: `0.7,0,0`,
    },
    sms: {
      label: `SMS`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 544C461.4 544 576 436.5 576 304C576 171.5 461.4 64 320 64C178.6 64 64 171.5 64 304C64 358.3 83.2 408.3 115.6 448.5L66.8 540.8C62 549.8 63.5 560.8 70.4 568.3C77.3 575.8 88.2 578.1 97.5 574.1L215.9 523.4C247.7 536.6 282.9 544 320 544zM204.8 236.8L224 236.8C232.8 236.8 240 244 240 252.8C240 261.6 232.8 268.8 224 268.8L204.8 268.8C199.5 268.8 195.2 273.1 195.2 278.4C195.2 283.7 199.5 288 204.8 288C227.8 288 246.4 306.6 246.4 329.6C246.4 352.6 227.8 371.2 204.8 371.2L179.2 371.2C170.4 371.2 163.2 364 163.2 355.2C163.2 346.4 170.4 339.2 179.2 339.2L204.8 339.2C210.1 339.2 214.4 334.9 214.4 329.6C214.4 324.3 210.1 320 204.8 320C181.8 320 163.2 301.4 163.2 278.4C163.2 255.4 181.8 236.8 204.8 236.8zM393.6 278.4C393.6 255.4 412.2 236.8 435.2 236.8L454.4 236.8C463.2 236.8 470.4 244 470.4 252.8C470.4 261.6 463.2 268.8 454.4 268.8L435.2 268.8C429.9 268.8 425.6 273.1 425.6 278.4C425.6 283.7 429.9 288 435.2 288C458.2 288 476.8 306.6 476.8 329.6C476.8 352.6 458.2 371.2 435.2 371.2L409.6 371.2C400.8 371.2 393.6 364 393.6 355.2C393.6 346.4 400.8 339.2 409.6 339.2L435.2 339.2C440.5 339.2 444.8 334.9 444.8 329.6C444.8 324.3 440.5 320 435.2 320C412.2 320 393.6 301.4 393.6 278.4zM295.3 244.6L320 285.7L344.7 244.6C348.4 238.4 355.8 235.5 362.7 237.4C369.6 239.3 374.4 245.6 374.4 252.8L374.4 355.2C374.4 364 367.2 371.2 358.4 371.2C349.6 371.2 342.4 364 342.4 355.2L342.4 310.6L333.7 325.1C330.8 329.9 325.6 332.9 320 332.9C314.4 332.9 309.2 329.9 306.3 325.1L297.6 310.6L297.6 355.2C297.6 364 290.4 371.2 281.6 371.2C272.8 371.2 265.6 364 265.6 355.2L265.6 252.8C265.6 245.6 270.4 239.3 277.3 237.4C284.2 235.5 291.6 238.4 295.3 244.6z"/></svg>`,
      shareUrl: `sms:?&body={text}{title}{description}{url}`,
      color: `#80bc56`,
      transform: `0.9,0,1`,
    },
    smugmug: {
      label: `SmugMug`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SmugMug</title><path d="M18.31 0l-.35.01c-1.55.13-2.46 1.2-2.6 2.28-.15 1.2.65 2.4 2.58 2.28 2.15-.12 3.09-1.2 3.1-2.28.02-1.15-1-2.28-2.73-2.29zM7.21.34A2.66 2.66 0 004.56 2.6C4.41 3.73 5.12 4.87 7 4.85c2.23-.04 3.31-1.37 3.16-2.57-.12-1-1.09-1.92-2.94-1.94zm12.35 8.71a7 7 0 00-.4.02c-5.28.54-5.54.6-15.26.82C-.2 9.9.62 24 9.38 24c8.2 0 18.12-15.15 10.18-14.95zm-1.1 2.7c3.18-.07-2.9 9.53-8.8 9.56-7.46 0-6.44-8.8-5.18-8.85 8.67-.35 10.88-.64 13.98-.71Z"/></svg>`,
      color: `#6DB944`,
      transform: `0.7,0,0`,
    },
    snapchat: {
      label: `Snapchat`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Snapchat</title><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>`,
      shareUrl: `https://www.snapchat.com/scan?attachmentUrl={url}`,
      color: `#FFFC00`,
      transform: `0.75,0,0`,
    },
    soundcloud: {
      label: `Soundcloud`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SoundCloud</title><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/></svg>`,
      color: `#FF5500`,
      transform: `0.9,0,-2`,
    },
    spotify: {
      label: `Spotify`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
      color: `#1ED760`,
      transform: `0.8,0,0`,
    },
    squarespace: {
      label: `Squarespace`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Squarespace</title><path d="M22.655 8.719c-1.802-1.801-4.726-1.801-6.564 0l-7.351 7.35c-.45.45-.45 1.2 0 1.65.45.449 1.2.449 1.65 0l7.351-7.351c.899-.899 2.362-.899 3.264 0 .9.9.9 2.364 0 3.264l-7.239 7.239c.9.899 2.362.899 3.263 0l5.589-5.589c1.836-1.838 1.836-4.763.037-6.563zm-2.475 2.437c-.451-.45-1.201-.45-1.65 0l-7.354 7.389c-.9.899-2.361.899-3.262 0-.45-.45-1.2-.45-1.65 0s-.45 1.2 0 1.649c1.801 1.801 4.726 1.801 6.564 0l7.351-7.35c.449-.487.449-1.239.001-1.688zm-2.439-7.35c-1.801-1.801-4.726-1.801-6.564 0l-7.351 7.351c-.45.449-.45 1.199 0 1.649s1.2.45 1.65 0l7.395-7.351c.9-.899 2.371-.899 3.27 0 .451.45 1.201.45 1.65 0 .421-.487.421-1.199-.029-1.649h-.021zm-2.475 2.437c-.45-.45-1.2-.45-1.65 0l-7.351 7.389c-.899.9-2.363.9-3.265 0-.9-.899-.9-2.363 0-3.264l7.239-7.239c-.9-.9-2.362-.9-3.263 0L1.35 8.719c-1.8 1.8-1.8 4.725 0 6.563 1.801 1.801 4.725 1.801 6.564 0l7.35-7.351c.451-.488.451-1.238 0-1.688h.002z"/></svg>`,
      color: `#000000`,
      transform: `0.85,0,0`,
    },
    stackoverflow: {
      label: `Stack Overflow`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>`,
      color: `#F58025`,
      transform: `0.75,0,-4`,
    },
    stocktwits: {
      label: `StockTwits`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.17 26.17"><g id="Layer_1-2"><path d="M8.41,11.39l-1.79-.74c-1.3-.54-1.95-1.24-1.95-2.12,0-.64.25-1.17.75-1.59.5-.43,1.12-.64,1.88-.64.61,0,1.11.12,1.5.37.37.22.77.68,1.18,1.4l2.2-1.31c-1.17-2.02-2.79-3.04-4.86-3.04-1.54,0-2.83.46-3.87,1.38-1.04.91-1.56,2.04-1.56,3.39,0,2.01,1.23,3.53,3.7,4.57l1.74.72c.45.19.84.4,1.17.61.33.21.59.44.8.69.21.24.36.51.45.81.1.29.15.61.15.96,0,.87-.28,1.59-.84,2.16-.56.57-1.26.85-2.11.85-1.07,0-1.89-.39-2.45-1.17-.31-.4-.53-1.14-.65-2.19l-2.75.61c.25,1.68.87,2.99,1.88,3.92,1.02.94,2.31,1.4,3.87,1.4,1.65,0,3.03-.54,4.14-1.63,1.1-1.08,1.65-2.45,1.65-4.11,0-1.24-.34-2.28-1.01-3.13-.68-.85-1.74-1.57-3.2-2.16M25.09,4.11h-10.96v2.57h4.14v15.43h2.69V6.68h4.13v-2.57Z"/><rect width="26.17" height="26.17" style="fill:none;"/></g></svg>`,
      shareUrl: `https://api.stocktwits.com/widgets/share?body={text}{title}{description}{url}`,
      color: `#40576F`,
      transform: `0.85,0,2`,
    },
    substack: {
      label: `Substack`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>`,
      color: `#FF6719`,
      transform: `0.65,0,3`,
    },
    svejo: {
      label: `Svejo`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.22 28.22"><g id="Layer_1-2"><path d="M22.29,10.85h0s.38-1.28-.62-2.37c-.67-.73-2.22-1.06-3.06-.76l-.12.05-.04.02h0s.04-.02.04-.02c.2-4.96-2.93-7.41-2.93-7.41-.69.87-1.14,2.2-1.38,3.03,0,0,0,0,0,0-2.27-.99-4.73-.96-4.73-.96,0,0,.05,2.96,3.04,4.99-1.66.59-2.8,1.54-3.47,2.64l-.07.12s-.03.04-.03.04c-.93,1.82,2.15,6.7,4.75,9.37,1.27,1.31,1.91,2.44,2.18,3.02-1.09-.27-2.46-.87-4.04-2.11-2.31-1.82-4.03-3.43-5.2-5.53-.3-.53-.98-.57-1.37.2-.6,1.19-.67,4.5.7,6.44,0,0-.38,1.28.62,2.37.67.73,2.22,1.06,3.06.76l.17-.07s1.73,1.3,4.37.81c2.56-.47,4.23-1.77,5.11-3.23,0,0,.01,0,.01,0l.07-.12c.93-1.94-1.46-4.82-3.19-7.07-2.13-2.77-2.69-4.81-2.7-4.83.84.38,1.82.94,2.97,1.75,2.41,1.69,4.03,3.43,5.2,5.53.3.53.98.57,1.37-.2.61-1.2.68-4.51-.69-6.45Z"/><rect width="28.22" height="28.22" style="fill:none;"/></g></svg>`,
      shareUrl: `https://svejo.net/submit_by_url?url={url}&title={title}&summary`,
      color: `#5BD428`,
      transform: `0.95,1,-2`,
    },
    symbaloo: {
      label: `Symbaloo`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.34 36.34"><g id="Layer_1-2"><rect x="9.01" y="9.56" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="15.73" y="9.56" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="22.46" y="9.56" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="9.01" y="15.68" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="15.73" y="15.68" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="22.46" y="15.68" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="9.01" y="21.8" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="15.73" y="21.8" width="4.96" height="4.96" rx=".79" ry=".79"/><rect x="22.46" y="21.8" width="4.96" height="4.96" rx=".79" ry=".79"/><path d="M18.17,0C8.13,0,0,8.13,0,18.17v.02c0,10.03,8.14,18.16,18.17,18.15,10.03,0,18.17-8.13,18.17-18.17S28.2,0,18.17,0ZM30.04,30.08c-6.57,6.55-17.2,6.55-23.76-.02C-.28,23.49-.27,12.85,6.3,6.3c3.15-3.15,7.42-4.92,11.87-4.91,4.46,0,8.74,1.77,11.89,4.93,6.56,6.57,6.55,17.2-.02,23.76Z"/></g></svg>`,
      shareUrl: `https://www.symbaloo.com/newSmark?url={url}`,
      color: `#222267`,
      transform: `0.8,0,0`,
    },
    teams: {
      label: `Teams`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path d="M 27.5 5 C 24.08 5 21.269531 7.64 21.019531 11 L 24 11 C 26.76 11 29 13.24 29 16 L 29 17.820312 C 31.87 17.150312 34 14.57 34 11.5 C 34 7.91 31.09 5 27.5 5 z M 42.5 9 A 4.5 4.5 0 0 0 42.5 18 A 4.5 4.5 0 0 0 42.5 9 z M 6 13 C 4.346 13 3 14.346 3 16 L 3 34 C 3 35.654 4.346 37 6 37 L 24 37 C 25.654 37 27 35.654 27 34 L 27 16 C 27 14.346 25.654 13 24 13 L 6 13 z M 10 19 L 20 19 L 20 21 L 16 21 L 16 31 L 14 31 L 14 21 L 10 21 L 10 19 z M 29 21 L 29 34 C 29 36.76 26.76 39 24 39 L 18.199219 39 C 18.599219 40.96 19.569688 42.710313 20.929688 44.070312 C 22.739688 45.880312 25.24 47 28 47 C 33.52 47 38 42.52 38 37 L 38 21 L 29 21 z M 40 21 L 40 37 C 40 37.82 39.919531 38.620625 39.769531 39.390625 C 40.599531 39.780625 41.52 40 42.5 40 C 46.09 40 49 37.09 49 33.5 L 49 21 L 40 21 z"></path></svg>`,
      shareUrl: `https://teams.microsoft.com/share?href{link}&msgText={text}{title}{description}`,
      color: `#464EB8`,
      transform: `0.9,-3,0`,
    },
    telegram: {
      label: `Telegram`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z"/></svg>`,
      shareUrl: `https://telegram.me/share/url?text={text}{title}{description}&url={url}`,
      color: `#24A1DE`,
      transform: `1.05,0,0`,
    },
    threads: {
      label: `Threads`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z"/></svg>`,
      shareUrl: `https://www.threads.com/intent/post?text={text}{title}{description}{url}`,
      color: `#000000`,
      transform: `1,-1,0`,
    },
    threema: {
      label: `Threema`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Threema</title><path d="M11.998 20.486a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm-6.335 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm12.671 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zM12 0c5.7 0 10.322 4.066 10.322 9.082 0 5.016-4.622 9.083-10.322 9.083a11.45 11.45 0 0 1-4.523-.917l-5.171 1.293 1.105-4.42c-1.094-1.442-1.733-3.175-1.733-5.039C1.678 4.066 6.3 0 12 0zm-.001 4.235A2.926 2.926 0 0 0 9.072 7.16v1.17h-.115a.47.47 0 0 0-.47.47v4.126c0 .26.21.471.47.471h6.086c.26 0 .47-.21.47-.47V8.798a.47.47 0 0 0-.47-.47h-.115v-1.17a2.927 2.927 0 0 0-2.93-2.924zm0 1.17c.972 0 1.758.786 1.758 1.754v1.17h-3.514v-1.17c0-.968.786-1.754 1.756-1.754z"/></svg>`,
      shareUrl: `threema://compose?text={text}{title}{description}{url}`,
      color: `#3FE669`,
      transform: `0.8,0,2`,
    },
    tiktok: {
      label: `TikTok`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
      color: `#000000`,
      transform: `0.75,0,0`,
    },
    trello: {
      label: `Trello`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M488.3 96L152.1 96C121.1 96 96 121.1 96 152C95.9 152 96 148 96 488C96 518.9 121.1 544 152 544L488.2 544C519 543.8 543.9 518.8 543.9 488L543.9 152C544 121.2 519.1 96.2 488.3 96zM293 435.3C292.8 450 280.9 461.9 266.1 461.9L183.4 461.9C168.6 462 156.5 450.1 156.4 435.3L156.4 181.1C156.4 166.3 168.4 154.2 183.3 154.2L266.2 154.2C281 154.2 293.1 166.2 293.1 181.1L293.1 435.3L293 435.3zM486.1 323.3C486.1 338.1 474.1 350.2 459.2 350.2L378.2 350.2C363.4 350.2 351.3 338.2 351.3 323.3L351.3 181.2C351.3 166.4 363.3 154.3 378.1 154.3L459.2 154.3C474 154.3 486.1 166.3 486.1 181.2L486.1 323.3z"/></svg>`,
      shareUrl: `https://trello.com/add-card?mode=popup&url={url}&name={title}&desc={text}{description}`,
      color: `#0052CC`,
      transform: `0.95,0,0`,
    },
    tumblr: {
      label: `Tumblr`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M469.9 544.3C456.3 558.8 419.9 576 372.5 576C251.7 576 225.5 487.2 225.5 435.4L225.5 291.4L178 291.4C172.5 291.4 168 286.9 168 281.4L168 213.4C168 206.2 172.5 199.8 179.3 197.4C241.3 175.6 260.8 121.4 263.6 80.3C264.4 69.3 270.1 64 279.7 64L350.6 64C356.1 64 360.6 68.5 360.6 74L360.6 189.2L443.6 189.2C449.1 189.2 453.6 193.6 453.6 199.1L453.6 280.8C453.6 286.3 449.1 290.8 443.6 290.8L360.2 290.8L360.2 424C360.2 458.2 383.9 477.6 428.2 459.8C433 457.9 437.2 456.6 440.9 457.6C444.4 458.5 446.7 461 448.3 465.5L470.3 529.8C472.1 534.8 473.6 540.4 469.9 544.3z"/></svg>`,
      shareUrl: `https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl={url}&title={title}&caption={text}{description}`,
      color: `#36465D`,
      transform: `0.85,-1,0`,
    },
    twiddla: {
      label: `Twiddla`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g id="Layer_1-2"><path d="M5.5.68l1.38,1.38L2.06,6.87l-1.38-1.38C-.45,3.98-.14,1.82,1.38.68,2.6-.23,4.28-.23,5.5.68M7.9,3.09L3.09,7.9l12.72,12.72,6.19,1.37-1.38-6.19L7.9,3.09h0ZM7.81,6.62l9.63,9.62-1.19,1.18L6.63,7.81l1.19-1.18h0Z"/></g></svg>`,
      shareUrl: `https://www.twiddla.com/New.aspx?url={url}&title={title}`,
      color: `#1e4a98`,
      transform: `0.7,0,0`,
    },
    twitch: {
      label: `Twitch`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>`,
      color: `#9146FF`,
      transform: `0.85,2,8`,
    },
    typepad: {
      label: `Typepad`,
      svg: `<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.14 24.14"><g id="Layer_1-2"><rect width="24.14" height="24.14" style="fill:none;"/><path d="M12.07,4.95C5.44,4.95.07,8.17.07,12.15c0,.84.34,2.21.79,2.41.45.2,1.67.68,12.52-3.84,0,0-9.1,4.09-9.83,5.85-.25.6,2.15,2.63,8.52,2.63s12-3.15,12-7.12-5.37-7.12-12-7.12"/></g></svg>`,
      shareUrl: `https://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_href={url}&qp_title={title}`,
      color: `#b4c962`,
      transform: `0.85,0,0`,
    },
    upwork: {
      label: `Upwork`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Upwork</title><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>`,
      color: `#6FDA44`,
      transform: `0.9,1,8`,
    },
    viber: {
      label: `Viber`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Viber</title><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"/></svg>`,
      shareUrl: `viber://forward?text={text}{title}{description}{url}`,
      color: `#7360F2`,
      transform: `0.85,0,4`,
    },
    vimeo: {
      label: `Vimeo`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vimeo</title><path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z"/></svg>`,
      color: `#1AB7EA`,
      transform: `0.8,-1,3`,
    },
    vine: {
      label: `Vine`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M512 318.7L512 370.8C493.6 375 475.1 376.9 459.9 376.9C423 454.3 356.9 520.7 334.8 533.1C320.8 541 307.7 541.5 292.1 532.3C265 516 162.2 431.7 128 166.7L202.5 166.7C221.2 325.8 267 407.4 317.3 468.5C345.2 440.6 372.1 403.4 392.9 361.6C343.1 336.3 312.8 280.7 312.8 216C312.8 150.4 350.5 100.9 415 100.9C529.9 100.9 521.2 228.8 496.6 282.4C496.6 282.4 450.2 291.6 433.1 261.9C436.5 250.6 441.3 231.1 441.3 213.4C441.3 182.1 430 166.8 412.9 166.8C394.7 166.8 382.1 183.9 382.1 216.8C382.2 296 441.5 335.5 512 318.7z"/></svg>`,
      color: `#00B488`,
      transform: `1.05,0,1`,
    },
    vk: {
      label: `VK`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VK</title><path d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"/></svg>`,
      color: `#0077FF`,
      transform: `0.75,0,0`,
    },
    vsco: {
      label: `VSCO`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VSCO</title><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm11.52 12c0 .408-.023.792-.072 1.176l-2.04-.24c.024-.312.05-.624.05-.936 0-.288-.025-.6-.05-.888l2.04-.24c.072.384.072.744.072 1.128zM.479 12c0-.384.024-.769.049-1.152l2.04.24c-.024.312-.047.6-.047.912s.023.6.047.912l-2.04.24C.479 12.769.479 12.384.479 12zm20.472-3.096l1.921-.72c.264.72.433 1.464.552 2.232l-2.04.24c-.097-.6-.24-1.2-.433-1.752zM21 12c0 .6-.072 1.176-.167 1.752l-2.017-.455c.071-.409.119-.841.119-1.297s-.048-.912-.119-1.344l2.017-.457c.118.577.167 1.177.167 1.801zm-9 6.456C8.435 18.455 5.545 15.565 5.544 12 5.545 8.435 8.435 5.545 12 5.544c3.565.001 6.455 2.891 6.456 6.456.008 3.559-2.871 6.448-6.429 6.456H12zM12.216 21v-2.064c.885-.029 1.756-.224 2.568-.575l.888 1.872c-1.09.482-2.264.742-3.456.767zm-3.936-.791l.912-1.873c.792.359 1.656.575 2.568.6V21c-1.202-.023-2.386-.293-3.48-.791zM3 12c0-.624.072-1.224.192-1.824l2.016.456c-.098.45-.146.908-.144 1.368 0 .432.048.864.12 1.272l-2.016.455C3.051 13.159 2.994 12.58 3 12zm8.76-9v2.064c-.877.029-1.74.224-2.544.576l-.888-1.871C9.411 3.291 10.577 3.03 11.76 3zm3.935.792l-.911 1.872c-.809-.363-1.682-.559-2.568-.576V3.024c1.248 0 2.424.288 3.479.768zm5.088 4.656c-.231-.56-.513-1.098-.84-1.608l1.681-1.152c.407.648.768 1.32 1.056 2.04l-1.897.72zm-.07 1.296l-2.018.456c-.23-.85-.621-1.648-1.151-2.352l1.632-1.295c.72.959 1.248 2.015 1.537 3.191zm-3.457-2.256c-.572-.667-1.264-1.22-2.04-1.633l.912-1.871c1.056.549 1.993 1.299 2.76 2.208l-1.632 1.296zm-.6-3.744l.96-1.824c.672.384 1.295.816 1.896 1.32L18.145 4.8c-.461-.401-.959-.754-1.489-1.056zm-.408-.216c-.54-.266-1.102-.483-1.68-.648l.504-1.992c.744.216 1.464.48 2.159.84l-.983 1.8zm-2.16-.768c-.6-.144-1.2-.216-1.824-.239V.479c.793.024 1.584.12 2.328.289l-.504 1.992zm-2.28-.239c-.605.021-1.207.094-1.8.216L9.528.744c.72-.168 1.487-.265 2.28-.265v2.042zm-2.28.334c-.586.167-1.156.384-1.704.649l-.96-1.824c.691-.343 1.415-.616 2.16-.816l.504 1.991zm-2.112.865c-.529.294-1.027.64-1.488 1.032L4.56 3.216c.6-.504 1.224-.936 1.896-1.319l.96 1.823zm.48.264l.888 1.871c-.792.408-1.464.96-2.04 1.608L5.136 6.168c.775-.895 1.711-1.636 2.76-2.184zM4.848 6.552l1.608 1.295c-.53.705-.921 1.503-1.152 2.353l-2.016-.456c.312-1.2.84-2.28 1.56-3.192zM3.24 8.4l-1.92-.72c.287-.72.648-1.416 1.08-2.04l1.68 1.176c-.341.494-.623 1.025-.84 1.584zm-.168.455c-.192.577-.36 1.152-.432 1.776L.6 10.393c.12-.769.288-1.537.553-2.257l1.919.719zm-.456 4.513c.096.6.239 1.2.432 1.776l-1.92.72c-.271-.728-.456-1.485-.552-2.257l2.04-.239zm.624 2.208c.239.576.528 1.104.84 1.607L2.4 18.336c-.435-.629-.797-1.306-1.08-2.016l1.92-.744zm.024-1.392l2.017-.456c.216.864.624 1.681 1.128 2.376L4.8 17.4c-.725-.957-1.247-2.051-1.536-3.216zm3.432 2.28c.577.672 1.272 1.248 2.064 1.656l-.912 1.872c-1.063-.557-2.009-1.315-2.784-2.232l1.632-1.296zm.72 3.815l-.96 1.825c-.674-.376-1.31-.819-1.896-1.321l1.368-1.535c.456.407.936.744 1.488 1.031zm.408.217c.528.264 1.104.48 1.705.647l-.504 1.992c-.747-.196-1.471-.469-2.16-.815l.959-1.824zm2.16.768c.576.12 1.176.193 1.8.217v2.039c-.774-.026-1.544-.114-2.305-.264l.505-1.992zm2.28.216c.605-.021 1.207-.094 1.801-.217l.479 1.992c-.749.168-1.513.264-2.28.287V21.48zm2.257-.336c.586-.165 1.155-.382 1.703-.647l.96 1.824c-.688.35-1.412.623-2.159.815l-.504-1.992zm2.086-.865c.528-.287 1.032-.647 1.488-1.031l1.369 1.535c-.588.502-1.223.945-1.896 1.321l-.961-1.825zm-.479-.263l-.888-1.871c.788-.414 1.489-.977 2.064-1.656l1.606 1.296c-.778.91-1.722 1.668-2.782 2.231zm3.071-2.592l-1.607-1.296c.532-.708.916-1.517 1.128-2.376l2.017.456c-.311 1.157-.831 2.248-1.538 3.216zM20.76 15.6l1.92.721c-.288.72-.648 1.392-1.079 2.04l-1.682-1.177c.337-.504.624-1.032.841-1.584zm.168-.455c.192-.553.336-1.152.433-1.752l2.039.239c-.11.761-.294 1.508-.551 2.232l-1.921-.719zm.456-9.841l-1.681 1.152c-.358-.49-.76-.947-1.199-1.368l1.368-1.536c.552.552 1.056 1.128 1.512 1.752zM4.2 3.528l1.368 1.536c-.456.408-.84.864-1.2 1.368l-1.68-1.176c.431-.636.94-1.216 1.512-1.728zM2.664 18.744l1.68-1.152c.36.48.769.937 1.2 1.369l-1.368 1.535c-.548-.545-1.054-1.131-1.512-1.752zm17.16 1.729l-1.368-1.537c.432-.407.841-.863 1.199-1.344l1.682 1.176c-.457.6-.961 1.175-1.513 1.705z"/></svg>`,
      color: `#000000`,
      transform: `0.85,0,0`,
    },
    wechat: {
      label: `WeChat`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WeChat</title><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>`,
      color: `#07C160`,
      transform: `0.85,0,0`,
    },
    weibo: {
      label: `Weibo`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M471 241.6C478.6 217.6 457.6 194.8 433.6 199.9C411.6 204.7 404.8 171.8 426.5 167.1C476.6 156.2 518.8 204.2 503 251.9C496.2 273.1 464.2 262.7 471 241.6zM278.8 510.7C172.5 510.7 64 459.3 64 374.4C64 330.1 92 279 140.3 230.7C240 131 343.5 129.8 313.9 225C309.9 238.1 326.2 230.7 326.2 231C405.7 197.4 466.7 214.2 440.2 282.4C436.5 291.8 441.3 293.3 448.5 295.5C584.2 337.8 483.3 510.7 278.8 510.7zM422.5 364.4C417.1 308.7 344 270.4 259.1 278.7C174.3 287.3 110.3 339 115.7 394.7C121.1 450.4 194.2 488.7 279.1 480.4C363.9 471.8 427.9 420.1 422.5 364.4zM411.9 99.1C386 104.7 395.1 142.8 420.2 137.4C492.5 122.2 555 190.2 531.9 261.4C524.5 285.6 561 298.4 569.3 273.4C601.2 173.6 514.2 77.5 411.9 99.1zM333.4 410.1C316.3 448.9 266.6 470.1 224.3 456.4C183.5 443.3 166.3 403 184 366.7C201.7 331.3 247.1 311.3 287.4 321.6C329.4 332.4 350.5 371.8 333.4 410.1zM247.1 380.1C234.2 374.7 217.1 380.4 209.1 393C200.8 405.9 204.8 421 217.7 427C230.8 433 248.5 427.3 256.8 414.1C264.8 401 260.5 385.8 247.1 380.1zM279.7 366.7C274.6 365 268.3 367.3 265.4 372.1C262.5 377.2 264 382.7 269.1 385C274.2 387 280.8 384.7 283.7 379.6C286.5 374.4 284.8 368.7 279.7 366.7z"/></svg>`,
      shareUrl: `https://service.weibo.com/share/share.php?url={url}&title={title}`,
      color: `#E6162D`,
      transform: `1,0,0`,
    },
    whatsapp: {
      label: `WhatsApp`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>`,
      color: `#58be55`,
      shareUrl: `https://api.whatsapp.com/send?text={text}{title}{description}{url}`,
      transform: `1,0,0`,
    },
    wordpress: {
      label: `Wordpress`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WordPress</title><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></svg>`,
      shareUrl: `https://www.addtoany.com/add_to/wordpress?linkurl={url}&type=page&linkname={title}&linknote={text}{description}`,
      color: `#21759B`,
      transform: `0.8,0,0`,
    },
    wykop: {
      label: `Wykop`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Wykop</title><path d="m7.707 17.486 1.406-.68-1.406.68.69 1.384 1.407-.68-.69-1.384Zm-.69-1.384 1.407-.68-1.407.68.691 1.384 1.406-.68-.69-1.384Zm-.691-1.384 1.406-.677-1.406.677.69 1.385 1.407-.681-.691-1.381Zm-.69-1.384 1.406-.678-1.406.678.69 1.384 1.407-.677-.69-1.385Zm-.69-1.381 1.406-.68-1.406.68.69 1.383 1.406-.679-.69-1.383Zm-.692-1.384 1.406-.68-1.406.68.69 1.384 1.407-.68-.69-1.384Zm6.981 3.494 1.407-.68-1.407.68.69 1.384 1.407-.68-.69-1.384zm-.69-1.382 1.406-.68-1.406.68.69 1.384 1.407-.68-.691-1.383zm-.691-1.383 1.406-.68-1.406.68.69 1.383 1.407-.68-.69-1.384Zm-.69-1.382 1.406-.68-1.407.68.691 1.383 1.406-.68-.69-1.383Zm-.691-1.384 1.406-.68-1.406.68.69 1.384 1.407-.68-.69-1.383Zm6.98 3.495 1.406-.681-1.406.68.69 1.384 1.407-.68-.69-1.384zm-.69-1.385 1.406-.68-1.407.68.691 1.385 1.406-.681-.69-1.385zm-.691-1.382 1.406-.68-1.406.68.69 1.383 1.407-.68-.69-1.383Zm-.69-1.385 1.406-.68-1.407.68.69 1.385 1.407-.68-.69-1.384Zm-.691-1.382 1.406-.68-1.406.68.69 1.384 1.407-.68-.691-1.385ZM5.66 9.89l1.405-.68-1.406.68.69 1.385 1.407-.68-.69-1.384Zm.69 1.385 1.406-.68-1.406.68.69 1.383 1.407-.678-.69-1.385zm.69 1.382 1.407-.678-1.407.678.691 1.385 1.406-.681-.69-1.383zm.691 1.385 1.406-.681-1.406.68.69 1.383 1.407-.679-.69-1.384Zm.69 1.38 1.407-.678-1.406.679.69 1.384 1.406-.68-.69-1.384Zm.691 1.385 1.406-.68-1.406.68.69 1.384 1.407-.681-.69-1.383zm1.406-.68 1.407-.679-1.407.68.691 1.383 1.406-.678-.69-1.385zm1.407-.679 1.406-.68-1.406.68.69 1.385 1.407-.681-.69-1.385zM9.879 7.853l1.406-.681-1.406.68.69 1.384 1.407-.68-.69-1.384Zm.69 1.382 1.407-.68-1.406.68.69 1.383 1.407-.68-.691-1.383Zm.69 1.383 1.407-.68-1.407.68.69 1.384 1.407-.68-.69-1.383zm.692 1.384 1.406-.681-1.406.68.69 1.384 1.407-.679-.69-1.384zm.69 1.382 1.406-.679-1.407.679.691 1.383 1.406-.678-.69-1.384zm.69 1.383 1.406-.678-1.406.678.69 1.385 1.407-.679-.69-1.384zm1.406-.678 1.407-.679-1.407.679.69 1.384 1.407-.68-.69-1.384zm1.407-.679 1.406-.68-1.406.68.69 1.384 1.407-.68-.691-1.384zm1.405-.68 1.406-.68-1.406.68.69 1.384 1.407-.681-.69-1.383zm-.69-1.384 1.407-.68-1.407.68.69 1.384 1.407-.68-.69-1.384zm-.69-1.385 1.406-.677-1.406.677.69 1.385 1.407-.68-.691-1.383Zm-.69-1.38 1.405-.68-1.406.68.69 1.383 1.407-.679-.69-1.383Zm-.691-1.385 1.406-.678-1.406.678.69 1.384 1.406-.678-.69-1.384Zm-.691-1.384 1.406-.677-1.406.677.69 1.385 1.407-.678-.69-1.384Zm7.25 5.263c0-1.166-.044-2.17-.132-3.017-.089-.847-.255-1.51-.498-1.988-.31-.937-1.005-1.532-2.088-1.785-.862-.23-2.529-.342-5.003-.342h-3.182c-2.474 0-4.152.114-5.036.342-1.06.252-1.778.847-2.154 1.785-.42 1.006-.629 2.673-.629 5.005v1.887c0 2.333.21 4 .63 5.006.397.916 1.126 1.498 2.186 1.75.862.23 2.529.342 5.003.342h3.182c2.452 0 4.108-.114 4.97-.342 1.083-.25 1.79-.834 2.121-1.75.243-.48.41-1.143.498-1.987a29.54 29.54 0 0 0 .133-3.02zm2.456 5.628c-.134 1.074-.354 1.967-.663 2.676a5.589 5.589 0 0 1-1.326 1.765 5.16 5.16 0 0 1-1.955 1.081v.034c-.642.205-1.471.367-2.487.48-1.017.115-2.254.172-3.713.172h-3.215c-3.36 0-5.692-.321-6.995-.96-1.459-.664-2.443-1.888-2.952-3.672-.176-.664-.303-1.59-.381-2.78C.038 14.31 0 12.835 0 11.074 0 9.634.061 8.375.182 7.3.303 6.225.52 5.344.828 4.658a5.715 5.715 0 0 1 1.31-1.766c.542-.492 1.21-.876 2.005-1.15h.033c1.238-.434 3.327-.653 6.266-.653h3.215c3.227 0 5.547.333 6.962.996.707.319 1.31.79 1.807 1.407.497.616.867 1.383 1.11 2.297.133.64.244 1.556.332 2.744.088 1.19.132 2.665.132 4.427.001 1.421-.065 2.666-.197 3.743"/></svg>`,
      shareUrl: `https://wykop.pl/dodaj?url={url}`,
      color: `#367DA9`,
      transform: `0.85,0,0`,
    },
    x: {
      label: `X`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>`,
      color: `#000000`,
      shareUrl: `https://x.com/intent/post?text={text}{title}{description}{url}`,
      transform: `1,0,0`,
    },
    xiaohongshu: {
      label: `Xiaohongshu`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Xiaohongshu</title><path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z"/></svg>`,
      color: `#FF2442`,
      transform: `1,0,0`,
    },
    xing: {
      label: `XING`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Xing</title><path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z"/></svg>`,
      shareUrl: `https://www.xing.com/spi/shares/new?url={url}`,
      color: `#006567`,
      transform: `0.8,0,0`,
    },
    yahoo_mail: {
      label: `Yahoo Mail`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M287.8 205.1L231.1 348.3L175.1 205.1L79 205.1L184.8 454.2L146.2 544L240.4 544L381.3 205.1L287.7 205.1zM393.2 340.9C361.1 340.9 335 367 335 399.1C335 431.2 361.1 457.3 393.2 457.3C425.3 457.3 451.4 431.2 451.4 399.1C451.4 367 425.3 340.9 393.2 340.9zM458.7 96L365.7 319.5L470.5 319.5L563.1 96L458.7 96z"/></svg>`,
      shareUrl: `https://compose.mail.yahoo.com/?subject={title}&body={text}{description}{url}`,
      color: `#570dca`,
      transform: `1,0,0`,
    },
    yandex: {
      label: `Yandex`,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M289.5 576L289.5 409.9L178.5 112L234.3 112L316.1 341.7L410.2 64L461.5 64L340.8 411.8L340.8 576L289.5 576z"/></svg>`,
      color: `e66a53`,
      transform: `1,0,0`,
    },
    yelp: {
      label: `Yelp`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Yelp</title><path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041zm2.86 3.742a.8523.8523 0 0 1-.111.4236c-.074.132-.178.2377-.3115.3172a.8428.8428 0 0 1-.4385.119.847.847 0 0 1-.4373-.1179.8526.8526 0 0 1-.3125-.3171.8548.8548 0 0 1-.111-.4248c0-.1526.038-.2958.1143-.4294a.8405.8405 0 0 1 .315-.3159.849.849 0 0 1 .4315-.1156.8514.8514 0 0 1 .4294.1144.84.84 0 0 1 .316.3148.8494.8494 0 0 1 .1156.4317zm-.1202 0c0-.1328-.0332-.256-.0996-.3698s-.1564-.2038-.2702-.2702a.7125.7125 0 0 0-.371-.1007.7204.7204 0 0 0-.3698.0996.7487.7487 0 0 0-.2713.2702.7181.7181 0 0 0-.0996.3709c0 .132.0332.2557.0996.371a.7355.7355 0 0 0 .2713.2713.7354.7354 0 0 0 .3698.0985.7205.7205 0 0 0 .3698-.0996.7423.7423 0 0 0 .2702-.2691.7186.7186 0 0 0 .1008-.3721zm-.577.0584.2724.4522h-.1922l-.237-.4052h-.1546v.4052h-.1695v-1.02h.2988c.1268 0 .2195.0247.2783.0744.0595.0496.0892.1252.0892.2267a.2785.2785 0 0 1-.0492.1625c-.032.0466-.0775.0813-.1362.1042zm-.0412-.1408a.1532.1532 0 0 0 .056-.1214c0-.0573-.0164-.0981-.0491-.1225-.0329-.0251-.0847-.0377-.1557-.0377h-.1214v.3285h.1237c.061 0 .1098-.0157.1465-.047z"/></svg>`,
      color: `#FF1A1A`,
      transform: `0.85,4,-5`,
    },
    youtube: {
      label: `YouTube`,
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
      color: `#FF0000`,
      transform: `0.75,0,0`,
    },
  };
  let [a, c] = l(!1),
    d = {
      height: `100%`,
      display: `flex`,
      flexDirection: e.layout.direction === `vertical` ? `column` : `row`,
      justifyContent: `flex-start`,
      flexWrap: `wrap`,
      alignItems: `flex-start`,
      alignContent: `flex-start`,
      overflow: `visible`,
      gap: e.layout.gap + `px`,
    };
  function f(e, t = !1) {
    if (!t)
      var n = e.network,
        t = i[n].shareUrl;
    return (
      e.addTitle && t.indexOf(`{title}`) > -1
        ? m() === ``
          ? (t = t.replace(/{title}/g, ``))
          : ((t = t.replace(/{title}{/g, m() + `%20%E2%80%94%20{`)),
            (t = t.replace(/{title}/g, m())))
        : (t = t.replace(/{title}/g, ``)),
      e.addDesc && t.indexOf(`{description}`) > -1
        ? m() === ``
          ? (t = t.replace(/{description}/g, ``))
          : ((t = t.replace(/{description}{/g, h() + `%20{`)),
            (t = t.replace(/{description}/g, h())))
        : (t = t.replace(/{description}/g, ``)),
      t.indexOf(`{text}`) > -1
        ? (console.log(`alow`),
          (t =
            e.customText === ``
              ? t.replace(/{text}/g, ``)
              : t.replace(/{text}/g, e.customText + `%20`)))
        : (t = t.replace(/{text}/g, ``)),
      (t = t.replace(`%20%E2%80%94%20{url}`, `%20{url}`)),
      (t = t.replace(/{url}/g, encodeURIComponent(u?.location?.href ?? ``))),
      e.redirect &&
        (t = t.replace(
          `{redirect}`,
          encodeURIComponent(
            `https://static.addtoany.com/menu/thanks.html#url=` +
              document.location.protocol +
              `//` +
              document.location.host +
              e.redirect
          )
        )),
      console.log(n, t, e.redirect, document.location.host),
      t
    );
  }
  function m() {
    return (typeof document < `u` && encodeURIComponent(document.title)) || ``;
  }
  function h() {
    if (typeof document < `u`) {
      var e = document.querySelector(`meta[name="description"]`)?.getAttribute(`content`);
      return e ? encodeURIComponent(e) : ``;
    }
    return ``;
  }
  var g = `id` + Math.random().toString(16).slice(2),
    _ = e.purpose == `share` ? e.icons : e.iconsLink;
  return (
    s(() => {
      _.forEach((e) => {
        e.source === `custom` &&
          e.svg === `upload` &&
          e.svg_file &&
          (t[e.svg_file] ||
            fetch(e.svg_file)
              .then((e) => e.text())
              .then((t) => {
                n((n) => ({ ...n, [e.svg_file]: t }));
              })
              .catch((t) => {
                (console.error(`SVG fetch error`, t),
                  n((t) => ({ ...t, [e.svg_file]: i[e.network].svg })));
              }));
      });
    }, [_]),
    p(`div`, {
      style: d,
      id: g,
      children: _.map(function (n, s) {
        console.log(n);
        var l = `id` + Math.random().toString(16).slice(2),
          d = n.source == `custom` ? `custom` : n.network;
        console.log(i[d]);
        let [m, h, _] = i[d].transform.split(`,`).map(Number);
        console.log([m, h, _]);
        let ee;
        return (
          (ee =
            d === `copyUrl` && a
              ? i.copied.svg
              : n.source === `custom`
                ? n.svg === `code` && n.svg_code
                  ? n.svg_code
                  : n.svg === `upload` && n.svg_file
                    ? t[n.svg_file] || ``
                    : i[d].svg
                : i[d].svg),
          p(`a`, {
            className: l,
            "social-svg": !0,
            "aria-label": d,
            network: d,
            colors: n.colors ? `override` : ``,
            ...(d === `copyUrl`
              ? {}
              : e.purpose === `link` && n.link
                ? { href: n.link }
                : n.url
                  ? { href: f(n, n.url) }
                  : {}),
            ...(d === `copyUrl`
              ? {
                  onClick: () => {
                    (o.clipboard.writeText(u.location.href), c(!0), setTimeout(() => c(!1), 2e3));
                  },
                }
              : {}),
            ...(e.new_tab === `yes` ? { target: `_blank`, rel: `noopener noreferrer` } : {}),
            dangerouslySetInnerHTML: {
              __html: `
                                ${ee}
                                
                                <style>
                                    #${g} a.${l} {
                                        width: ${e.layout.size}px;
                                        height: ${e.layout.size}px;  
                                        box-sizing: border-box;
                                        padding: ${e.layout.padding};   
                                        border-radius: ${e.layout.radius};
${e.hover.transition !== `none` && !r ? `transition: opacity ${e.hover.duration}ms ${e.hover.transition}, filter ${e.hover.duration}ms ${e.hover.transition};` : ``}         
                                        ${e.shadow ? `box-shadow: ${e.shadow};` : ``}
                                    }       

                                    #${g} a.${l}[network=copyUrl] {                        
                                        cursor: pointer;
                                    }

                                    #${g} a.${l}[network=${d}] {
                                        ${
                                          e.border
                                            ? `
                                            border-style: ${e.border.style};
                                            border-color: ${e.border.source === `brand` ? `#${i[d].color.replace(`#`, ``)}${(((e.border.opacity ?? 100) * 2.55) | 0).toString(16).padStart(2, `0`)}` : e.border.color};
                                            border-width: ${e.border.widthIsMixed ? `${e.border.widthTop}px ${e.border.widthRight}px ${e.border.widthBottom}px ${e.border.widthLeft}px` : `${e.border.width}px`};
                                        `
                                            : ``
                                        }

                                        background-color: ${e.background.source === `brand` ? `#${i[d].color.replace(`#`, ``)}${((e.background.opacity * 2.55) | 0).toString(16).padStart(2, `0`)}` : e.background.color};
                                    }

                                    #${g} a.${l}[network=${d}] svg * {
                                        fill: ${e.foreground.source === `brand` ? `#${i[d].color.replace(`#`, ``)}${((e.foreground.opacity * 2.55) | 0).toString(16).padStart(2, `0`)}` : e.foreground.color};
                                    }

                                    #${g} a.${l}[network=${d}] svg {
                                        transform: scale(${m * (n.transform.scale ?? 1)}) translate(${h + n.transform.translateX}%, ${_ + n.transform.translateY}%) rotate(${n.transform.rotate}deg) !important;
                                        transform-origin: center;
                                    }

                                    /* if custom color defined per icon */
                                    #${g} a.${l}[network=${d}][colors=override] {
                                        border-color: ${n.colors ? n.colors.border : ``};
                                        background-color: ${n.colors ? n.colors.background : ``}
                                    }

                                    #${g} a.${l}[network=${d}][colors=override] svg * {
                                        fill: ${n.colors ? n.colors.foreground : ``};
                                    }

                                    #${g} a.${l}:hover {
                                    opacity: ${e.hover.opacity / 100};
                                    filter:
                                        brightness(${e.hover.brightness}%)
                                        contrast(${e.hover.contrast}%)
                                        saturate(${e.hover.saturate}%)
                                        grayscale(${e.hover.grayscale}%)
                                        sepia(${e.hover.sepia}%)
                                        blur(${e.hover.blur}px);
                                    }                                 
                                </style>
                                `,
            },
          })
        );
      }),
    })
  );
}
var oo = t(() => {
  (a(),
    _(),
    ue(),
    r(),
    (ao.displayName = `Social Icons`),
    Se(ao, {
      purpose: {
        type: b.Enum,
        displaySegmentedControl: !0,
        defaultValue: `share`,
        options: [`share`, `link`],
        optionTitles: [`Share`, `Link`],
      },
      iconsLink: {
        type: b.Array,
        title: `Icons`,
        defaultValue: [
          {
            source: `preset`,
            network: `facebook`,
            link: `https://facebook.com`,
            transform: { scale: 1, translateX: 0, translateY: 0, rotate: 0 },
          },
        ],
        control: {
          title: `Icon`,
          type: b.Object,
          controls: {
            source: {
              type: b.Enum,
              displaySegmentedControl: !0,
              defaultValue: `preset`,
              options: [`preset`, `custom`],
              optionTitles: [`Preset`, `Custom`],
            },
            label: {
              type: b.String,
              placeholder: `Social Network`,
              hidden: function (e) {
                return e.source !== `custom`;
              },
            },
            svg: {
              title: `SVG`,
              type: b.Enum,
              displaySegmentedControl: !1,
              defaultValue: `code`,
              options: [`code`, `upload`],
              optionTitles: [`Code`, `Upload`],
              hidden: function (e) {
                return e.source !== `custom`;
              },
            },
            svg_code: {
              title: ` `,
              description: `[Download template](https://example.com/your-link)`,
              type: b.String,
              placeholder: `<svg>...</svg>`,
              displayTextArea: !0,
              hidden: function (e) {
                return e.source !== `custom` || e.svg !== `code`;
              },
            },
            svg_file: {
              title: ` `,
              description: `[Download template](https://example.com/your-link)`,
              type: b.File,
              allowedFileTypes: [`svg`],
              hidden: function (e) {
                return e.source !== `custom` || e.svg !== `upload`;
              },
            },
            network: {
              hidden: function (e) {
                return e.source !== `preset`;
              },
              title: `Preset`,
              type: b.Enum,
              displaySegmentedControl: !1,
              defaultValue: `aol_mail`,
              options:
                `aol_mail.auth0.balatarin.bandsintown.behance.bibsonomy.blogger.blogmarks.bluesky.bookmarks.box.buffer.clubhouse.codepen.dev_to.diaspora.diigo.discord.douban.draugiem.dribbble.dropbox.email.evernote.facebook.fark.flickr.flipboard.foursquare.github.gitlab.gmail.google.google_classroom.google_play.google_translate.groupme.hashnode.hacker_news.hatena.instagram.instapaper.itch_io.itunes.known.leetcode.line.linkedin.linktree.livejournal.mail_ru.mastodon.matrix.mdn.medium.meetup.mendeley.meneame.messenger.mewe.micro_blog.misskey.mix.mixi.myspace.ok.onlyfans.opensea.outlook.papaly.patreon.pinboard.pinterest.pixiv.plurk.printfriendly.push_to_kindle.qzone.raindrop.ravelry.reddit.refind.rss.slack.slashdot.snapchat.sms.smugmug.soundcloud.spotify.squarespace.stackoverflow.stocktwits.substack.svejo.symbaloo.teams.telegram.threads.threema.tiktok.trello.tumblr.twiddla.twitch.typepad.upwork.viber.vimeo.vine.vk.vsco.wechat.weibo.whatsapp.wordpress.wykop.x.xiaohongshu.xing.yahoo_mail.yandex.yelp.youtube`.split(
                  `.`
                ),
              optionTitles:
                `AOL Mail,Auth0,Balatarin,Bandsintown,Behance,BibSonomy,Blogger,Blogmarks,Bluesky,Bookmarks,Box,Buffer,Clubhouse,CodePen,DEV,Diaspora,Diigo,Discord,Douban,Draugiem,Dribbble,Dropbox,Email,Evernote,Facebook,Fark,Flickr,Flipboard,Foursquare,GitHub,GitLab,Gmail,Google,Google Classroom,Google Play,Google Translate,GroupMe,Hashnode,Hacker News,Hatena,Instagram,Instapaper,Itch.io,ITunes,Known,LeetCode,Line,LinkedIn,Linktree,LiveJournal,Mail.ru,Mastodon,Matrix,MDN,Medium,Meetup,Mendeley,Meneame,Messenger,Mewe,Micro.blog,Misskey,Mix,Mixi,Myspace,OK,OnlyFans,Opensea,Outlook,Papaly,Patreon,Pinboard,Pinterest,Pixiv,Plurk,PrintFriendly,Push to Kindle,Qzone,Raindrop,Ravelry,Reddit,Refind,RSS,Slack,Slashdot,Snapchat,SMS,SmugMug,Soundcloud,Spotify,Squarespace,Stack Overflow,StockTwits,Substack,Svejo,Symbaloo,Teams,Telegram,Threads,Threema,TikTok,Trello,Tumblr,Twiddla,Twitch,Typepad,Upwork,Viber,Vimeo,Vine,VK,VSCO,WeChat,Weibo,WhatsApp,Wordpress,Wykop,X,Xiaohongshu,Xing,Yahoo Mail,Yandex,Yelp,YouTube`.split(
                  `,`
                ),
            },
            link: { title: `URL`, type: b.String, displayTextArea: !0 },
            colors: {
              type: b.Object,
              optional: !0,
              controls: {
                background: { type: b.Color, defaultValue: `#000000` },
                foreground: { type: b.Color, defaultValue: `#FFFFFF` },
                border: { type: b.Color, defaultValue: `#000000` },
              },
            },
            transform: {
              type: b.Object,
              controls: {
                scale: { type: b.Number, defaultValue: 1, min: 0.5, max: 1.5, step: 0.05 },
                translateX: {
                  title: `Move X`,
                  type: b.Number,
                  defaultValue: 0,
                  min: -50,
                  max: 50,
                  step: 1,
                  unit: `%`,
                },
                translateY: {
                  title: `Move Y`,
                  type: b.Number,
                  defaultValue: 0,
                  min: -50,
                  max: 50,
                  step: 1,
                  unit: `%`,
                },
                rotate: { type: b.Number, defaultValue: 0, min: 0, max: 360, step: 1, unit: `deg` },
              },
            },
          },
        },
        hidden(e) {
          return e.purpose == `share`;
        },
      },
      icons: {
        type: b.Array,
        title: `Icons`,
        defaultValue: [
          {
            source: `preset`,
            network: `facebook`,
            transform: { scale: 1, translateX: 0, translateY: 0, rotate: 0 },
            addTitle: !0,
            addDesc: !0,
          },
        ],
        control: {
          title: `Icon`,
          type: b.Object,
          controls: {
            source: {
              type: b.Enum,
              displaySegmentedControl: !0,
              defaultValue: `preset`,
              options: [`preset`, `custom`],
              optionTitles: [`Preset`, `Custom`],
            },
            label: {
              type: b.String,
              placeholder: `Social Network`,
              hidden: function (e) {
                return e.source !== `custom`;
              },
            },
            svg: {
              title: `SVG`,
              type: b.Enum,
              displaySegmentedControl: !1,
              defaultValue: `code`,
              options: [`code`, `upload`],
              optionTitles: [`Code`, `Upload`],
              hidden: function (e) {
                return e.source !== `custom`;
              },
            },
            svg_code: {
              title: ` `,
              description: `[Download template](https://example.com/your-link)`,
              type: b.String,
              placeholder: `<svg>...</svg>`,
              displayTextArea: !0,
              hidden: function (e) {
                return e.source !== `custom` || e.svg !== `code`;
              },
            },
            svg_file: {
              title: ` `,
              description: `[Download template](https://example.com/your-link)`,
              type: b.File,
              allowedFileTypes: [`svg`],
              hidden: function (e) {
                return e.source !== `custom` || e.svg !== `upload`;
              },
            },
            network: {
              hidden: function (e) {
                return e.source !== `preset`;
              },
              title: `Preset`,
              type: b.Enum,
              displaySegmentedControl: !1,
              defaultValue: `aol_mail`,
              options:
                `aol_mail.balatarin.bibsonomy.blogger.blogmarks.bluesky.bookmarks.box.buffer.copyUrl.diaspora.diigo.douban.draugiem.email.evernote.facebook.fark.flipboard.gmail.google_classroom.google_translate.hacker_news.hatena.instapaper.known.line.linkedin.livejournal.mail_ru.mastodon.mendeley.meneame.messenger.mewe.micro_blog.mix.mixi.myspace.ok.outlook.papaly.pinboard.pinterest.plurk.printfriendly.push_to_kindle.qzone.raindrop.reddit.refind.slashdot.snapchat.sms.stocktwits.svejo.symbaloo.teams.telegram.threads.threema.trello.tumblr.twiddla.typepad.viber.weibo.whatsapp.wordpress.wykop.x.xing.yahoo_mail`.split(
                  `.`
                ),
              optionTitles:
                `AOL Mail,Balatarin,BibSonomy,Blogger,Blogmarks,Bluesky,Bookmarks,Box,Buffer,Copy URL,Diaspora,Diigo,Douban,Draugiem,Email,Evernote,Facebook,Fark,Flipboard,Gmail,Google Classroom,Google Translate,Hacker News,Hatena,Instapaper,Known,Line,LinkedIn,LiveJournal,Mail.ru,Mastodon,Mendeley,Meneame,Messenger,Mewe,Micro.blog,Mix,Mixi,Myspace,OK,Outlook,Papaly,Pinboard,Pinterest,Plurk,PrintFriendly,Push to Kindle,Qzone,Raindrop,Reddit,Refind,Slashdot,Snapchat,SMS,StockTwits,Svejo,Symbaloo,Teams,Telegram,Threads,Threema,Trello,Tumblr,Twiddla,Typepad,Viber,Weibo,WhatsApp,Wordpress,Wykop,X,Xing,Yahoo Mail`.split(
                  `,`
                ),
            },
            colors: {
              type: b.Object,
              optional: !0,
              controls: {
                background: { type: b.Color, defaultValue: `#000000` },
                foreground: { type: b.Color, defaultValue: `#FFFFFF` },
                border: { type: b.Color, defaultValue: `#000000` },
              },
            },
            transform: {
              type: b.Object,
              controls: {
                scale: { type: b.Number, defaultValue: 1, min: 0.5, max: 1.5, step: 0.05 },
                translateX: {
                  title: `Move X`,
                  type: b.Number,
                  defaultValue: 0,
                  min: -50,
                  max: 50,
                  step: 1,
                  unit: `%`,
                },
                translateY: {
                  title: `Move Y`,
                  type: b.Number,
                  defaultValue: 0,
                  min: -50,
                  max: 50,
                  step: 1,
                  unit: `%`,
                },
                rotate: { type: b.Number, defaultValue: 0, min: 0, max: 360, step: 1, unit: `deg` },
              },
            },
            url: {
              title: `URL`,
              type: b.String,
              placeholder: `https://social.com?t={title}&u={url}`,
              displayTextArea: !0,
              description: `Variables: *{url} {title} {description} {text}*`,
              hidden: function (e) {
                return e.source !== `custom`;
              },
            },
            redirect: {
              type: b.Link,
              description: `Redirect after sharing.`,
              hidden: function (e) {
                return e.network !== `messenger`;
              },
            },
            addTitle: {
              type: b.Enum,
              displaySegmentedControl: !0,
              defaultValue: !0,
              options: [!0, !1],
              optionTitles: [`Yes`, `No`],
              hidden: function (e) {
                return (
                  !`x.linkedin.whatsapp.reddit.mastodon.bluesky.telegram.sms.gmail.threads.teams.aol_mail.balatarin.bibsonomy.blogger.blogmarks.bookmarks.box.buffer.diaspora.diigo.draugiem.evernote.flipboard.hacker_news.instapaper.known.livejournal.mail_ru.micro_blog.myspace.outlook.papaly.pinboard.weibo.stocktwits.svejo.threema.trello.tumblr.twiddla.typepad.viber.wordpress`
                    .split(`.`)
                    .includes(e.network) || e.source == `custom`
                );
              },
            },
            addDesc: {
              type: b.Enum,
              title: `Add Desc.`,
              displaySegmentedControl: !0,
              defaultValue: !0,
              options: [!0, !1],
              optionTitles: [`Yes`, `No`],
              hidden: function (e) {
                return (
                  !`x.linkedin.whatsapp.mastodon.bluesky.telegram.sms.gmail.threads.teams.aol_mail.bibsonomy.blogger.box.buffer.diaspora.diigo.instapaper.micro_blog.myspace.outlook.pinboard.stocktwits.threema.trello.tumblr.viber.wordpress`
                    .split(`.`)
                    .includes(e.network) || e.source == `custom`
                );
              },
            },
            customText: {
              title: `Add Text`,
              type: b.String,
              displayTextArea: !0,
              placeholder: `Check this out!`,
              hidden: function (e) {
                return (
                  !`x.linkedin.whatsapp.mastodon.bluesky.telegram.sms.gmail.threads.teams.aol_mail.bibsonomy.blogger.box.buffer.diaspora.diigo.instapaper.micro_blog.myspace.outlook.pinboard.stocktwits.threema.trello.tumblr.viber.wordpress`
                    .split(`.`)
                    .includes(e.network) && e.source !== `custom`
                );
              },
            },
          },
        },
        hidden(e) {
          return e.purpose == `link`;
        },
      },
      layout: {
        type: b.Object,
        controls: {
          direction: {
            title: `Direction`,
            type: b.Enum,
            defaultValue: `horizontal`,
            options: [`horizontal`, `vertical`],
            displaySegmentedControl: !0,
            hidden(e) {
              return e.icons.length < 2;
            },
          },
          gap: {
            type: b.Number,
            defaultValue: 0,
            min: 0,
            step: 1,
            displayStepper: !0,
            hidden(e) {
              return e.icons.length < 2;
            },
          },
          size: { type: b.Number, defaultValue: 50, min: 0, step: 1, displayStepper: !0 },
          radius: { type: b.BorderRadius, defaultValue: `0px`, title: `Radius` },
          padding: { type: b.Padding, defaultValue: `5px` },
        },
      },
      background: {
        type: b.Object,
        controls: {
          source: {
            type: b.Enum,
            displaySegmentedControl: !0,
            defaultValue: `brand`,
            options: [`brand`, `custom`],
            optionTitles: [`Brand`, `Custom`],
          },
          color: {
            title: ` `,
            defaultValue: `lightgrey`,
            type: b.Color,
            hidden(e) {
              return e.source === `brand`;
            },
          },
          opacity: {
            type: b.Number,
            defaultValue: 100,
            min: 0,
            max: 100,
            step: 1,
            displayStepper: !1,
            hidden(e) {
              return e.source === `custom`;
            },
          },
        },
      },
      foreground: {
        type: b.Object,
        controls: {
          source: {
            type: b.Enum,
            displaySegmentedControl: !0,
            defaultValue: `custom`,
            options: [`brand`, `custom`],
            optionTitles: [`Brand`, `Custom`],
          },
          color: {
            title: ` `,
            defaultValue: `#ffffff`,
            type: b.Color,
            hidden(e) {
              return e.source === `brand`;
            },
          },
          opacity: {
            type: b.Number,
            defaultValue: 100,
            min: 0,
            max: 100,
            step: 1,
            displayStepper: !1,
            hidden(e) {
              return e.source === `custom`;
            },
          },
        },
      },
      border: {
        type: b.Object,
        optional: !0,
        controls: {
          source: {
            title: `Color`,
            type: b.Enum,
            displaySegmentedControl: !0,
            defaultValue: `brand`,
            options: [`brand`, `custom`],
            optionTitles: [`Brand`, `Custom`],
          },
          color: {
            title: ` `,
            defaultValue: `#000`,
            type: b.Color,
            hidden(e) {
              return e.source === `brand`;
            },
          },
          width: {
            type: b.FusedNumber,
            defaultValue: 1,
            toggleKey: `widthIsMixed`,
            toggleTitles: [`All`, `Individual`],
            valueKeys: [`widthTop`, `widthRight`, `widthBottom`, `widthLeft`],
            valueLabels: [`T`, `R`, `B`, `L`],
            min: 0,
          },
          style: {
            type: b.Enum,
            displaySegmentedControl: !1,
            defaultValue: `solid`,
            options: [`solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`],
            optionTitles: [
              `Solid`,
              `Dashed`,
              `Dotted`,
              `Double`,
              `Groove`,
              `Ridge`,
              `Inset`,
              `Outset`,
            ],
          },
          opacity: {
            type: b.Number,
            defaultValue: 100,
            min: 0,
            max: 100,
            step: 1,
            displayStepper: !1,
            hidden(e) {
              return e.source === `custom`;
            },
          },
        },
      },
      shadow: { optional: !0, type: b.BoxShadow, defaultValue: `0px 1px 2px 0px rgba(0,0,0,0.25)` },
      hover: {
        type: b.Object,
        controls: {
          opacity: { type: b.Number, defaultValue: 100, min: 0, max: 100 },
          brightness: { type: b.Number, defaultValue: 100, min: 0, max: 200 },
          contrast: { type: b.Number, defaultValue: 100, min: 0, max: 500 },
          saturate: { type: b.Number, defaultValue: 100, min: 0, max: 200 },
          grayscale: { type: b.Number, defaultValue: 0, min: 0, max: 100 },
          sepia: { type: b.Number, defaultValue: 0, min: 0, max: 100 },
          blur: { type: b.Number, defaultValue: 0, min: 0, max: 5 },
          transition: {
            type: b.Enum,
            options: [`none`, `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`],
            optionTitles: [`None`, `Ease`, `Linear`, `Ease In`, `Ease Out`, `Ease In Out`],
            defaultValue: `ease`,
          },
          duration: {
            type: b.Number,
            unit: `ms`,
            defaultValue: 150,
            min: 0,
            max: 2e3,
            hidden: function (e) {
              return e.transition == `none`;
            },
          },
        },
      },
      new_tab: {
        type: b.Enum,
        displaySegmentedControl: !1,
        defaultValue: `yes`,
        options: [`yes`, `no`],
        optionTitles: [`Yes`, `No`],
      },
    }));
});
function so(e, t) {
  return { description: `Made with Framer`, title: `My Framer Site` };
}
var co = t(() => {});
function lo(e, t) {
  return {
    breakpoints: [{ hash: `72rtr7` }],
    description: so(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-1VeC6`,
    title: so(e, t).title || `Home`,
    viewport: `width=1200`,
  };
}
var uo,
  fo,
  po = t(() => {
    (co(),
      (uo = 1),
      (fo = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
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
  wo = t(() => {
    (_(),
      ue(),
      ae(),
      r(),
      oo(),
      po(),
      (mo = se(ao)),
      (ho = {}),
      (go = []),
      (_o = `framer-1VeC6`),
      (vo = { WQLkyLRf1: `framer-v-72rtr7` }),
      (yo = (e, t, n) => (e && t ? `position` : n)),
      (bo = ({ value: e }) =>
        ce()
          ? null
          : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (xo = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (So = le(
        m(function (e, t) {
          let r = i(null),
            a = t ?? r,
            o = te(),
            { activeLocale: s, setLocale: c } = me();
          de();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = xo(e);
          y(n(() => lo({}, s), [s]));
          let [_, ee] = pe(f, ho, !1),
            ne = ve(_o),
            ae = h(ye)?.isLayoutTemplate,
            se = !!h(re)?.transition?.layout,
            ce = yo(ae, se);
          return (
            oe({}),
            p(ye.Provider, {
              value: { activeVariantId: _, primaryVariantId: `WQLkyLRf1`, variantClassNames: vo },
              children: g(ie, {
                id: d ?? o,
                children: [
                  p(bo, { value: `html body { background: rgb(0, 0, 0); }` }),
                  p(v.div, {
                    ...m,
                    className: ve(ne, `framer-72rtr7`, u),
                    ref: a,
                    style: { ...l },
                    children: p(v.div, {
                      className: `framer-1mwwq49`,
                      layout: ce,
                      children: p(Ee, {
                        children: p(Ce, {
                          className: `framer-16nqggt-container`,
                          isAuthoredByUser: !0,
                          nodeId: `RKEY1RNo0`,
                          scopeId: `augiA20Il`,
                          children: p(ao, {
                            background: { color: `rgb(0, 0, 0)`, opacity: 100, source: `custom` },
                            foreground: {
                              color: `rgb(255, 255, 255)`,
                              opacity: 100,
                              source: `custom`,
                            },
                            height: `100%`,
                            hover: {
                              blur: 5,
                              brightness: 100,
                              contrast: 100,
                              duration: 150,
                              grayscale: 0,
                              opacity: 100,
                              saturate: 100,
                              sepia: 0,
                              transition: `ease`,
                            },
                            icons: [
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `gmail`,
                                source: `custom`,
                                svg_code: ``,
                                svg: `upload`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `threads`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `teams`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `mix`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `google_translate`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `aol_mail`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `balatarin`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `bibsonomy`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `blogger`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `blogmarks`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `bookmarks`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `box`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `buffer`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `diaspora`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `diigo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `douban`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `draugiem`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `evernote`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `fark`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `flipboard`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `google_classroom`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `hacker_news`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `hatena`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `instapaper`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `push_to_kindle`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `known`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `line`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `livejournal`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `mail_ru`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `mendeley`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `meneame`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `mewe`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `micro_blog`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `mixi`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `myspace`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `ok`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `outlook`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `papaly`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `pinboard`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `plurk`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `printfriendly`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `qzone`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `raindrop`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `refind`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `weibo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `slashdot`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `snapchat`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `stocktwits`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `svejo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `symbaloo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `threema`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `trello`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `tumblr`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `twiddla`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `typepad`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `viber`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `wordpress`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `wykop`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `xing`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `yahoo_mail`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                              {
                                addDesc: !0,
                                addTitle: !0,
                                customText: ``,
                                label: ``,
                                network: `copyUrl`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 1, translateY: 1 },
                                url: ``,
                              },
                            ],
                            iconsLink: [
                              {
                                label: ``,
                                link: ``,
                                network: `aol_mail`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `upload`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `auth0`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `balatarin`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `bandsintown`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `behance`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `bibsonomy`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `blogger`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `blogmarks`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `bluesky`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `bookmarks`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `box`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `buffer`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `clubhouse`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `codepen`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `dev_to`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `diaspora`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `diigo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `discord`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `douban`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `draugiem`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `dribbble`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `dropbox`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `email`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `evernote`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `facebook`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `fark`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `flickr`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `flipboard`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `foursquare`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `github`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `gitlab`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `gmail`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `google`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `google_classroom`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `google_play`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `google_translate`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `groupme`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `hashnode`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `hacker_news`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `hatena`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `instagram`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `instapaper`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `itch_io`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `itunes`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `known`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `leetcode`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `line`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `linkedin`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `linktree`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `livejournal`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mail_ru`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mastodon`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `matrix`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mdn`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `medium`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `meetup`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mendeley`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `meneame`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `messenger`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mewe`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `micro_blog`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `misskey`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mix`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `mixi`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `myspace`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `ok`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `onlyfans`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `opensea`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `outlook`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `papaly`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `patreon`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `pinboard`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `pinterest`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `pixiv`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `plurk`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `printfriendly`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `push_to_kindle`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `qzone`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `raindrop`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `ravelry`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `reddit`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `refind`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `rss`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `slack`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `slashdot`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `snapchat`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `sms`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `smugmug`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `soundcloud`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `spotify`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `squarespace`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `stackoverflow`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `stocktwits`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `substack`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `svejo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `symbaloo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `teams`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `telegram`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `threads`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `threema`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `tiktok`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `trello`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `tumblr`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `twiddla`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `twitch`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `typepad`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `upwork`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `viber`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `vimeo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `vine`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `vk`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `vsco`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `wechat`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `weibo`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `whatsapp`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `wordpress`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `wykop`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `x`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `xiaohongshu`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `xing`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `yahoo_mail`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `yandex`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `yelp`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                              {
                                label: ``,
                                link: ``,
                                network: `youtube`,
                                source: `preset`,
                                svg_code: ``,
                                svg: `code`,
                                transform: { rotate: 0, scale: 1, translateX: 0, translateY: 0 },
                              },
                            ],
                            id: `RKEY1RNo0`,
                            layout: {
                              direction: `horizontal`,
                              gap: 0,
                              padding: `16px`,
                              radius: `2px`,
                              size: 71,
                            },
                            layoutId: `RKEY1RNo0`,
                            new_tab: `yes`,
                            purpose: `link`,
                            shadow: ``,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  }),
                  p(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `.framer-1VeC6.framer-lux5qc, .framer-1VeC6 .framer-lux5qc { display: block; }`,
          `.framer-1VeC6.framer-72rtr7 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 59px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-1VeC6 .framer-1mwwq49 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-1VeC6 .framer-16nqggt-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ],
        `framer-1VeC6`
      )),
      (So.displayName = `Home`),
      (So.defaultProps = { height: 568, width: 1200 }),
      we(So, [{ explicitInter: !0, fonts: [] }, ...mo], { supportsExplicitInterCodegen: !0 }),
      (Co = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerDisplayContentsDiv: `false`,
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `568`,
              framerScrollSections: `false`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function To(e, t, n) {
  let r = Do[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of Eo) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var Eo,
  Do,
  Oo,
  ko,
  Ao = t(() => {
    ((Eo = []),
      (Do = {}),
      (Oo = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
      (ko = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  jo,
  Mo,
  No,
  Po = t(() => {
    (_(),
      r(),
      ue(),
      (jo = () => (
        s(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        p(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: g(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              p(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: p(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              p(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              p(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              p(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (Mo = le(jo, [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ])),
      (No = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Fo = e({ __FramerMetadata__: () => No, default: () => Mo }),
  Io = t(() => {
    (Po(), Po());
  });
function Lo() {
  let e = !1;
  try {
    e = u.self !== u.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (u.location.ancestorOrigins && u.location.ancestorOrigins.length > 0) {
    let e = u.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === Bo || t.endsWith(`.${Bo}`)), n);
}
function Ro(e) {
  return m((t, n) => {
    let r = ne(Vo, Ho, Uo),
      i = xe.current() === xe.canvas;
    return r && !i
      ? null
      : p(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              u.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(u?.location?.origin)}`
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function zo(e) {
  return m((t, n) =>
    g(ee, {
      children: [
        p(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        p(e, { ...t, ref: n }),
      ],
    })
  );
}
var Bo,
  Vo,
  Ho,
  Uo,
  Wo = t(() => {
    (a(),
      _(),
      r(),
      ue(),
      (Bo = `framer.com`),
      (Vo = () => () => {}),
      (Ho = () => Lo()),
      (Uo = () => !1));
  }),
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o = t(() => {
    (_(),
      ue(),
      r(),
      (Go = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (Ko = `alpha, var(--framer-icon-mask-mode, add)`),
      (qo = `no-repeat`),
      (Jo = `center`),
      (Yo = `auto`),
      (Xo = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(v.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (Zo = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Qo = le(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Zo(e);
          return p(Xo, {
            ...c,
            className: ve(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${Go}; -webkit-mask-position: ${Jo}; -webkit-mask-repeat: ${qo}; -webkit-mask-size: ${Yo}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${Go}; mask-mode: ${Ko}; mask-position: ${Jo}; mask-repeat: ${qo}; mask-size: ${Yo}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (Qo.displayName = `Text`),
      Se(Qo, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: b.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: b.Color },
      }));
  }),
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs = t(() => {
    (_(),
      ue(),
      r(),
      (es = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (ts = `alpha, var(--framer-icon-mask-mode, add)`),
      (ns = `no-repeat`),
      (rs = `center`),
      (is = `auto`),
      (as = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(v.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (os = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ss = le(
        m(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = os(e);
          return p(as, {
            ...c,
            className: ve(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${es}; -webkit-mask-position: ${rs}; -webkit-mask-repeat: ${ns}; -webkit-mask-size: ${is}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${es}; mask-mode: ${ts}; mask-position: ${rs}; mask-repeat: ${ns}; mask-size: ${is}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (ss.displayName = `Framer`),
      Se(ss, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: b.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: b.Color },
      }));
  }),
  ls = e({ __FramerMetadata__: () => Es, default: () => Ts }),
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
  Ds = t(() => {
    (_(),
      ue(),
      ae(),
      r(),
      Wo(),
      $o(),
      cs(),
      (us = se(ss)),
      (ds = se(Qo)),
      (fs = ge(Qo, { nodeId: `pBR1Ew0r8`, override: zo, scopeId: `PX9hIOIVM` })),
      (ps = _e(he(ge(v.a, { nodeId: `HK2sXlagE`, override: Ro, scopeId: `PX9hIOIVM` })))),
      (ms = `framer-6jWyo`),
      (hs = { HK2sXlagE: `framer-v-n0ccwk` }),
      (gs = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 1, mass: 1.5, stiffness: 350, type: `spring` },
        x: 0,
        y: 0,
      }),
      (_s = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (vs = { duration: 0, type: `tween` }),
      (ys = (e, t) => `translate(-50%, -50%) ${t}`),
      (bs = (e, t) => `translateX(-50%) ${t}`),
      (xs = ({ value: e, children: t }) => {
        let r = h(re),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(re.Provider, { value: a, children: t });
      }),
      (Ss = v.create(c)),
      (Cs = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (ws = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ts = le(
        m(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          de();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = Cs(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: _,
              gestureHandlers: ee,
              gestureVariant: ne,
              isLoading: re,
              setGestureState: ae,
              setVariant: oe,
              variants: se,
            } = Te({ defaultVariant: `HK2sXlagE`, ref: r, variant: d, variantClassNames: hs }),
            y = ws(e, se),
            ce = ve(ms);
          return p(ie, {
            id: u ?? a,
            children: p(Ss, {
              animate: se,
              initial: !1,
              children: p(xs, {
                value: vs,
                children: p(be, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: g(ps, {
                    ...f,
                    ...ee,
                    __framer__presenceAnimate: gs,
                    __framer__presenceInitial: _s,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${ve(ce, `framer-n0ccwk`, l, h)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: y,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: r,
                    style: { ...c },
                    children: [
                      p(v.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: y,
                        layoutId: `IH1cvP0s5`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                        },
                      }),
                      g(v.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: y,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: ys,
                        children: [
                          p(v.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: y,
                            layoutId: `roMJYXHnO`,
                            children: p(ss, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: y,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: bs,
                            }),
                          }),
                          p(fs, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: y,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      p(v.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: y,
                        layoutId: `vCwsHyUh8`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                          opacity: 0.06,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                      p(v.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: y,
                        layoutId: `ZirFGX8Eh`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          opacity: 0.04,
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
          `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
          `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
          `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
          `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
          `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-6jWyo`
      )),
      (Ts.displayName = `Badge`),
      (Ts.defaultProps = { height: 38, width: 140 }),
      we(Ts, [{ explicitInter: !0, fonts: [] }, ...us, ...ds], {
        supportsExplicitInterCodegen: !0,
      }),
      (Es = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerPX9hIOIVM`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicWidth: `140`,
              framerIntrinsicHeight: `38`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  ro as _,
  ko as a,
  Oo as c,
  wo as d,
  go as f,
  uo as g,
  lo as h,
  Io as i,
  So as l,
  po as m,
  Ds as n,
  To as o,
  fo as p,
  Fo as r,
  Ao as s,
  ls as t,
  Co as u,
  io as v,
};
//# sourceMappingURL=shared-lib.GsnrTyBy.mjs.map
