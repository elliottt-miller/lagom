import { t as e } from "./rolldown-runtime.D3cOTcPh.mjs";
import {
  C as t,
  E as n,
  F as r,
  L as i,
  M as a,
  O as o,
  T as s,
  b as c,
  c as l,
  g as u,
  j as d,
  k as f,
  l as p,
  o as m,
  s as h,
  v as ee,
  y as g,
} from "./react.G3EGc0ga.mjs";
import { a as _, r as te, t as ne, x as v } from "./motion.D-ANfwF1.mjs";
import {
  $ as y,
  E as re,
  G as ie,
  H as ae,
  J as oe,
  K as b,
  L as se,
  Q as ce,
  W as le,
  X as ue,
  Z as de,
  a as x,
  b as fe,
  et as pe,
  g as me,
  h as he,
  j as ge,
  l as _e,
  m as S,
  n as C,
  p as ve,
  q as ye,
  r as w,
  t as T,
  y as be,
} from "./framer.BfNjQ3gp.mjs";
function E(e) {
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
function xe(e) {
  return H.call(Yn, e) ? !0 : H.call(Jn, e) ? !1 : qn.test(e) ? (Yn[e] = !0) : ((Jn[e] = !0), !1);
}
function D(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Se(e) {
  return e[1].toUpperCase();
}
function O(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = $n.exec(e);
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
function Ce(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function we(e, t, n) {
  switch (t) {
    case `select`:
      return Ce(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Ce(2, null);
    case `math`:
      return Ce(3, null);
    case `foreignObject`:
      return Ce(1, null);
    case `table`:
      return Ce(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Ce(5, null);
    case `colgroup`:
      return Ce(7, null);
    case `tr`:
      return Ce(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Ce(1, null) : e;
}
function Te(e, t, n) {
  if (typeof n != `object`) throw Error(E(62));
  for (var r in ((t = !0), n))
    if (H.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = O(r);
          i = O((`` + i).trim());
        } else {
          a = r;
          var o = rr.get(a);
          (o !== void 0 ||
            ((o = O(a.replace(er, `-$1`).toLowerCase().replace(tr, `-ms-`))), rr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || H.call(Zn, r)
                  ? `` + i
                  : i + `px`
                : O((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function k(e, t, n, r) {
  switch (n) {
    case `style`:
      Te(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = U.hasOwnProperty(n) ? U[n] : null), t !== null)) {
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
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, O(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, O(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, O(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, O(r), `"`));
      }
    } else if (xe(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, O(r), `"`);
    }
  }
}
function Ee(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(E(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(E(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function De(e) {
  var t = ``;
  return (
    Kn.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Oe(e, t, n, r) {
  e.push(A(n));
  var i,
    a = (n = null);
  for (i in t)
    if (H.call(t, i)) {
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
            k(e, r, i, o);
        }
    }
  return (e.push(`>`), Ee(e, a, n), typeof n == `string` ? (e.push(O(n)), null) : n);
}
function A(e) {
  var t = ar.get(e);
  if (t === void 0) {
    if (!ir.test(e)) throw Error(E(65, e));
    ((t = `<` + e), ar.set(e, t));
  }
  return t;
}
function ke(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(A(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (H.call(n, u)) {
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
                k(e, r, u, s);
            }
        }
      return (e.push(`>`), Ee(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(A(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (H.call(n, a)) {
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
                k(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? De(s) : `` + c), nr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Ee(e, u, s), s);
    case `textarea`:
      for (s in (e.push(A(`textarea`)), (u = o = a = null), n))
        if (H.call(n, s) && ((c = n[s]), c != null))
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
              throw Error(E(91));
            default:
              k(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(E(92));
        if (nr(u) && 1 < u.length) throw Error(E(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(O(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(A(`input`)), (c = u = s = a = null), n))
        if (H.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(E(399, `input`));
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
              k(e, r, o, l);
          }
      return (
        u === null ? c !== null && k(e, r, `checked`, c) : k(e, r, `checked`, u),
        a === null ? s !== null && k(e, r, `value`, s) : k(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(A(`menuitem`)), n))
        if (H.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(E(400));
            default:
              k(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(A(`title`)), (a = null), n))
        if (H.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(E(434));
            default:
              k(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(A(t)), (o = a = null), n))
        if (H.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              k(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(E(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(E(61));
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
      for (var p in (e.push(A(t)), n))
        if (H.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(E(399, t));
            default:
              k(e, r, p, a);
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
      return Oe(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Oe(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Oe(e, n, t, r);
      for (l in (e.push(A(t)), (o = a = null), n))
        if (H.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Te(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              xe(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, O(s), `"`);
          }
      return (e.push(`>`), Ee(e, o, a), a);
  }
}
function Ae(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(E(395));
  return (e.push(n), e.push(`"></template>`));
}
function je(e, t, n, r) {
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
      throw Error(E(397));
  }
}
function Me(e, t) {
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
      throw Error(E(397));
  }
}
function Ne(e) {
  return JSON.stringify(e).replace(or, function (e) {
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
function Pe(e, t) {
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
function Fe(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(O(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(O(t)), (e = !0)), e);
}
function Ie(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case ur:
      return `Fragment`;
    case lr:
      return `Portal`;
    case fr:
      return `Profiler`;
    case dr:
      return `StrictMode`;
    case gr:
      return `Suspense`;
    case _r:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case mr:
        return (e.displayName || `Context`) + `.Consumer`;
      case pr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case hr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case vr:
        return ((t = e.displayName || null), t === null ? Ie(e.type) || `Memo` : t);
      case yr:
        ((t = e._payload), (e = e._init));
        try {
          return Ie(e(t));
        } catch {}
    }
  return null;
}
function Le(e, t) {
  if (((e = e.contextTypes), !e)) return Tr;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Re(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(E(401));
    } else {
      if (n === null) throw Error(E(401));
      Re(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function ze(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && ze(e));
}
function Be(e) {
  var t = e.parent;
  (t !== null && Be(t), (e.context._currentValue2 = e.value));
}
function Ve(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(E(402));
  e.depth === t.depth ? Re(e, t) : Ve(e, t);
}
function He(e, t) {
  var n = t.parent;
  if (n === null) throw Error(E(402));
  (e.depth === n.depth ? Re(e, n) : He(e, n), (t.context._currentValue2 = t.value));
}
function Ue(e) {
  var t = Er;
  t !== e &&
    (t === null
      ? Be(e)
      : e === null
        ? ze(t)
        : t.depth === e.depth
          ? Re(t, e)
          : t.depth > e.depth
            ? Ve(t, e)
            : He(t, e),
    (Er = e));
}
function We(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Dr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : sr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Dr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = sr({}, a, s))) : sr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function Ge(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - kr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - kr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - kr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Ke(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ar(e) / jr) | 0)) | 0);
}
function qe(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function Je() {
  if (Nr === null) throw Error(E(321));
  return Nr;
}
function Ye() {
  if (0 < Br) throw Error(E(312));
  return { memoizedState: null, queue: null, next: null };
}
function Xe() {
  return (
    W === null
      ? Fr === null
        ? ((Ir = !1), (Fr = W = Ye()))
        : ((Ir = !0), (W = Fr))
      : W.next === null
        ? ((Ir = !1), (W = W.next = Ye()))
        : ((Ir = !0), (W = W.next)),
    W
  );
}
function Ze() {
  ((Pr = Nr = null), (Lr = !1), (Fr = null), (Br = 0), (W = zr = null));
}
function Qe(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function $e(e, t, n) {
  if (((Nr = Je()), (W = Xe()), Ir)) {
    var r = W.queue;
    if (((t = r.dispatch), zr !== null && ((n = zr.get(r)), n !== void 0))) {
      (zr.delete(r), (r = W.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((W.memoizedState = r), [r, t]);
    }
    return [W.memoizedState, t];
  }
  return (
    (e = e === Qe ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (W.memoizedState = e),
    (e = W.queue = { last: null, dispatch: null }),
    (e = e.dispatch = tt.bind(null, Nr, e)),
    [W.memoizedState, e]
  );
}
function et(e, t) {
  if (((Nr = Je()), (W = Xe()), (t = t === void 0 ? null : t), W !== null)) {
    var n = W.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Mr(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (W.memoizedState = [e, t]), e);
}
function tt(e, t, n) {
  if (25 <= Br) throw Error(E(301));
  if (e === Nr)
    if (
      ((Lr = !0),
      (e = { action: n, next: null }),
      zr === null && (zr = new Map()),
      (n = zr.get(t)),
      n === void 0)
    )
      zr.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function nt() {
  throw Error(E(394));
}
function rt() {}
function it(e) {
  return (console.error(e), null);
}
function at() {}
function ot(e, t, n, r, i, a, o, s, c) {
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
      onError: i === void 0 ? it : i,
      onAllReady: a === void 0 ? at : a,
      onShellReady: o === void 0 ? at : o,
      onShellError: s === void 0 ? at : s,
      onFatalError: c === void 0 ? at : c,
    }),
    (n = ct(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = st(t, e, null, n, u, Tr, null, Or)),
    l.push(e),
    t
  );
}
function st(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && xt(e));
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
function ct(e, t, n, r, i, a) {
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
function lt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function ut(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function dt(e, t, n, r, i) {
  for (Nr = {}, Pr = t, Rr = 0, e = n(r, i); Lr;)
    ((Lr = !1), (Rr = 0), (Br += 1), (W = null), (e = n(r, i)));
  return (Ze(), e);
}
function ft(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(E(108, Ie(r) || `Unknown`, s));
      r = sr({}, o, n);
    }
    ((t.legacyContext = r), j(e, t, i), (t.legacyContext = o));
  } else j(e, t, i);
}
function pt(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = sr({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Le(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        We(a, n, r, i),
        ft(e, t, a, n));
    } else {
      ((a = Le(n, t.legacyContext)), (i = dt(e, t, n, r, a)));
      var o = Rr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (We(i, n, r, a), ft(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = Ge(r, 1, 0)));
        try {
          j(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else j(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Sr:
        case xr:
        case dr:
        case fr:
        case ur:
          j(e, t, r.children);
          return;
        case _r:
          j(e, t, r.children);
          return;
        case br:
          throw Error(E(343));
        case gr:
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
              c = ct(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = ct(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (gt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                yt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = lt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = st(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case hr:
            if (((r = dt(e, t, n.render, r, i)), Rr !== 0)) {
              ((n = t.treeContext), (t.treeContext = Ge(n, 1, 0)));
              try {
                j(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else j(e, t, r);
            return;
          case vr:
            ((n = n.type), (r = pt(n, r)), mt(e, t, n, r, i));
            return;
          case pr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Er),
              (Er = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              j(e, t, i),
              (e = Er),
              e === null)
            )
              throw Error(E(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Cr ? e.context._defaultValue : r),
              (e = Er = e.parent),
              (t.context = e));
            return;
          case mr:
            ((r = r.children), (r = r(n._currentValue2)), j(e, t, r));
            return;
          case yr:
            ((i = n._init), (n = i(n._payload)), (r = pt(n, r)), mt(e, t, n, r, void 0));
            return;
        }
      throw Error(E(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = ke(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = we(o, n, r)),
      gt(e, t, a),
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
function j(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case cr:
        mt(e, t, n.type, n.props, n.ref);
        return;
      case lr:
        throw Error(E(257));
      case yr:
        var r = n._init;
        ((n = r(n._payload)), j(e, t, n));
        return;
    }
    if (nr(n)) {
      ht(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (wr && n[wr]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        ht(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        E(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Fe(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Fe(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function ht(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Ge(a, r, i);
    try {
      gt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function gt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return j(e, t, n);
  } catch (c) {
    if ((Ze(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        Ue(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = ct(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = st(
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
      Ue(a));
  }
}
function _t(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), bt(this, t, e));
}
function vt(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(E(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return vt(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function yt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && yt(e, n));
  } else e.completedSegments.push(t);
}
function bt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(E(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = at), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && yt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(_t, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (yt(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function xt(e) {
  if (e.status !== 2) {
    var t = Er,
      n = Ur.current;
    Ur.current = Vr;
    var r = Hr;
    Hr = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          Ue(o.context);
          try {
            (j(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              bt(s, o.blockedBoundary, c));
          } catch (e) {
            if ((Ze(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = lt(s, d);
              if (
                (u === null
                  ? ut(s, d)
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
      (a.splice(0, i), e.destination !== null && Dt(e, e.destination));
    } catch (t) {
      (lt(e, t), ut(e, t));
    } finally {
      ((Hr = r), (Ur.current = n), n === Vr && Ue(t));
    }
  }
}
function St(e, t, n) {
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
        i = Ct(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(E(390));
  }
}
function Ct(e, t, n) {
  var r = n.boundary;
  if (r === null) return St(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = O(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      St(e, t, n),
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
      Ae(t, e.responseState, r),
      St(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Ae(t, e.responseState, r.id),
      St(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(E(391));
  return (Ct(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function wt(e, t, n) {
  return (je(t, e.responseState, n.formatContext, n.id), Ct(e, t, n), Me(t, n.formatContext));
}
function Tt(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Et(e, t, n, r[i]);
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
    throw Error(E(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function Et(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(E(392));
    return wt(e, t, r);
  }
  return (
    wt(e, t, r),
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
function Dt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Ct(e, t, n), (e.completedRootSegment = null));
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
        throw Error(E(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Ne(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Ne(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Ne(d);
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
      if (!Tt(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var ee = e.partialBoundaries;
    for (i = 0; i < ee.length; i++) {
      var g = ee[i];
      e: {
        ((a = e), (o = t));
        var _ = g.completedSegments;
        for (s = 0; s < _.length; s++)
          if (!Et(a, o, g, _[s])) {
            (s++, _.splice(0, s));
            var te = !1;
            break e;
          }
        (_.splice(0, s), (te = !0));
      }
      if (!te) {
        ((e.destination = null), i++, ee.splice(0, i));
        return;
      }
    }
    ee.splice(0, i);
    var ne = e.completedBoundaries;
    for (i = 0; i < ne.length; i++)
      if (!Tt(e, t, ne[i])) {
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
function Ot(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return vt(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Dt(e, e.destination));
  } catch (t) {
    (lt(e, t), ut(e, t));
  }
}
function kt() {}
function At(e, t, n, r) {
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
    ((e = ot(
      e,
      Pe(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      kt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    xt(e),
    Ot(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Dt(e, s);
    } catch (t) {
      (lt(e, t), ut(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(E(426));
  return o;
}
function M(e) {
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
function N(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < K && (e.enqueue(new Uint8Array(G.buffer, 0, K)), (G = new Uint8Array(512)), (K = 0)),
        e.enqueue(t));
    else {
      var n = G.length - K;
      (n < t.length &&
        (n === 0 ? e.enqueue(G) : (G.set(t.subarray(0, n), K), e.enqueue(G), (t = t.subarray(n))),
        (G = new Uint8Array(512)),
        (K = 0)),
        G.set(t, K),
        (K += t.length));
    }
}
function P(e, t) {
  return (N(e, t), !0);
}
function jt(e) {
  G && 0 < K && (e.enqueue(new Uint8Array(G.buffer, 0, K)), (G = null), (K = 0));
}
function F(e) {
  return qr.encode(e);
}
function I(e) {
  return qr.encode(e);
}
function Mt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Nt(e) {
  return q.call(Xr, e) ? !0 : q.call(Yr, e) ? !1 : Jr.test(e) ? (Xr[e] = !0) : ((Yr[e] = !0), !1);
}
function L(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Pt(e) {
  return e[1].toUpperCase();
}
function R(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = ei.exec(e);
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
function Ft(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function It(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? ii : I(`<script nonce="` + R(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, F((`` + n).replace(li, Ft)), ai), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(oi, F(R(r[n])), ci);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(si, F(R(i[r])), ci);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: I(e + `P:`),
    segmentPrefix: I(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function Lt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Rt(e) {
  return Lt(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function zt(e, t, n) {
  switch (t) {
    case `select`:
      return Lt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Lt(2, null);
    case `math`:
      return Lt(3, null);
    case `foreignObject`:
      return Lt(1, null);
    case `table`:
      return Lt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Lt(5, null);
    case `colgroup`:
      return Lt(7, null);
    case `tr`:
      return Lt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Lt(1, null) : e;
}
function Bt(e, t, n, r) {
  return t === `` ? r : (r && e.push(ui), e.push(F(R(t))), !0);
}
function Vt(e, t, n) {
  if (typeof n != `object`) throw Error(M(62));
  for (var r in ((t = !0), n))
    if (q.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = F(R(r));
          i = F(R((`` + i).trim()));
        } else {
          a = r;
          var o = di.get(a);
          (o !== void 0 ||
            ((o = I(R(a.replace(ti, `-$1`).toLowerCase().replace(ni, `-ms-`)))), di.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || q.call(Qr, r)
                  ? F(`` + i)
                  : F(i + `px`)
                : F(R((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(fi, a, pi, i)) : e.push(mi, a, pi, i);
      }
    }
  t || e.push(_i);
}
function z(e, t, n, r) {
  switch (n) {
    case `style`:
      Vt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = J.hasOwnProperty(n) ? J[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = F(t.attributeName)), t.type)) {
        case 3:
          r && e.push(hi, n, vi);
          break;
        case 4:
          !0 === r ? e.push(hi, n, vi) : !1 !== r && e.push(hi, n, gi, F(R(r)), _i);
          break;
        case 5:
          isNaN(r) || e.push(hi, n, gi, F(R(r)), _i);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(hi, n, gi, F(R(r)), _i);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(hi, n, gi, F(R(r)), _i));
      }
    } else if (Nt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(hi, F(n), gi, F(R(r)), _i);
    }
  }
}
function Ht(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(M(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(M(61));
    ((t = t.__html), t != null && e.push(F(`` + t)));
  }
}
function Ut(e) {
  var t = ``;
  return (
    Kr.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Wt(e, t, n, r) {
  e.push(B(n));
  var i,
    a = (n = null);
  for (i in t)
    if (q.call(t, i)) {
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
            z(e, r, i, o);
        }
    }
  return (e.push(yi), Ht(e, a, n), typeof n == `string` ? (e.push(F(R(n))), null) : n);
}
function B(e) {
  var t = wi.get(e);
  if (t === void 0) {
    if (!Ci.test(e)) throw Error(M(65, e));
    ((t = I(`<` + e)), wi.set(e, t));
  }
  return t;
}
function Gt(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(B(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (q.call(n, u)) {
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
                z(e, r, u, s);
            }
        }
      return (e.push(yi), Ht(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(B(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (q.call(n, a)) {
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
                z(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Ut(s) : `` + c), ri(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(xi);
              break;
            }
        } else `` + o === n && e.push(xi);
      else l && e.push(xi);
      return (e.push(yi), Ht(e, u, s), s);
    case `textarea`:
      for (s in (e.push(B(`textarea`)), (u = o = a = null), n))
        if (q.call(n, s) && ((c = n[s]), c != null))
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
              throw Error(M(91));
            default:
              z(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(yi), u != null)) {
        if (a != null) throw Error(M(92));
        if (ri(u) && 1 < u.length) throw Error(M(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Si),
        a !== null && e.push(F(R(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(B(`input`)), (c = u = s = a = null), n))
        if (q.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(M(399, `input`));
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
              z(e, r, o, l);
          }
      return (
        u === null ? c !== null && z(e, r, `checked`, c) : z(e, r, `checked`, u),
        a === null ? s !== null && z(e, r, `value`, s) : z(e, r, `value`, a),
        e.push(bi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(B(`menuitem`)), n))
        if (q.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(M(400));
            default:
              z(e, r, f, a);
          }
      return (e.push(yi), null);
    case `title`:
      for (d in (e.push(B(`title`)), (a = null), n))
        if (q.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(M(434));
            default:
              z(e, r, d, o);
          }
      return (e.push(yi), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(B(t)), (o = a = null), n))
        if (q.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              z(e, r, c, s);
          }
      if ((e.push(yi), o != null)) {
        if (a != null) throw Error(M(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(M(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Si, F(n))
              : e.push(F(`` + n))));
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
      for (var p in (e.push(B(t)), n))
        if (q.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(M(399, t));
            default:
              z(e, r, p, a);
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
      return Wt(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Ti), Wt(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Wt(e, n, t, r);
      for (l in (e.push(B(t)), (o = a = null), n))
        if (q.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Vt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Nt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(hi, F(l), gi, F(R(s)), _i);
          }
      return (e.push(yi), Ht(e, o, a), a);
  }
}
function Kt(e, t, n) {
  if ((N(e, ji), n === null)) throw Error(M(395));
  return (N(e, n), P(e, Mi));
}
function qt(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (N(e, zi), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, Bi));
    case 2:
      return (N(e, Hi), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, Ui));
    case 3:
      return (N(e, Gi), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, Ki));
    case 4:
      return (N(e, Ji), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, Yi));
    case 5:
      return (N(e, Zi), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, Qi));
    case 6:
      return (N(e, ea), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, ta));
    case 7:
      return (N(e, ra), N(e, t.segmentPrefix), N(e, F(r.toString(16))), P(e, ia));
    default:
      throw Error(M(397));
  }
}
function Jt(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return P(e, Vi);
    case 2:
      return P(e, Wi);
    case 3:
      return P(e, qi);
    case 4:
      return P(e, Xi);
    case 5:
      return P(e, $i);
    case 6:
      return P(e, na);
    case 7:
      return P(e, aa);
    default:
      throw Error(M(397));
  }
}
function Yt(e) {
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
function Xt(e) {
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
        return ((t = e.displayName || null), t === null ? Xt(e.type) || `Memo` : t);
      case Ma:
        ((t = e._payload), (e = e._init));
        try {
          return Xt(e(t));
        } catch {}
    }
  return null;
}
function Zt(e, t) {
  if (((e = e.contextTypes), !e)) return Ra;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Qt(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(M(401));
    } else {
      if (n === null) throw Error(M(401));
      Qt(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function $t(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && $t(e));
}
function en(e) {
  var t = e.parent;
  (t !== null && en(t), (e.context._currentValue = e.value));
}
function tn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(M(402));
  e.depth === t.depth ? Qt(e, t) : tn(e, t);
}
function nn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(M(402));
  (e.depth === n.depth ? Qt(e, n) : nn(e, n), (t.context._currentValue = t.value));
}
function rn(e) {
  var t = za;
  t !== e &&
    (t === null
      ? en(e)
      : e === null
        ? $t(t)
        : t.depth === e.depth
          ? Qt(t, e)
          : t.depth > e.depth
            ? tn(t, e)
            : nn(t, e),
    (za = e));
}
function an(e, t, n, r) {
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
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = ba({}, a, s))) : ba(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function on(e, t, n) {
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
function sn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ua(e) / Wa) | 0)) | 0);
}
function cn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function ln() {
  if (Ka === null) throw Error(M(321));
  return Ka;
}
function un() {
  if (0 < $a) throw Error(M(312));
  return { memoizedState: null, queue: null, next: null };
}
function dn() {
  return (
    Y === null
      ? Ja === null
        ? ((Ya = !1), (Ja = Y = un()))
        : ((Ya = !0), (Y = Ja))
      : Y.next === null
        ? ((Ya = !1), (Y = Y.next = un()))
        : ((Ya = !0), (Y = Y.next)),
    Y
  );
}
function fn() {
  ((qa = Ka = null), (Xa = !1), (Ja = null), ($a = 0), (Y = Qa = null));
}
function pn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function mn(e, t, n) {
  if (((Ka = ln()), (Y = dn()), Ya)) {
    var r = Y.queue;
    if (((t = r.dispatch), Qa !== null && ((n = Qa.get(r)), n !== void 0))) {
      (Qa.delete(r), (r = Y.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Y.memoizedState = r), [r, t]);
    }
    return [Y.memoizedState, t];
  }
  return (
    (e = e === pn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Y.memoizedState = e),
    (e = Y.queue = { last: null, dispatch: null }),
    (e = e.dispatch = gn.bind(null, Ka, e)),
    [Y.memoizedState, e]
  );
}
function hn(e, t) {
  if (((Ka = ln()), (Y = dn()), (t = t === void 0 ? null : t), Y !== null)) {
    var n = Y.memoizedState;
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
  return ((e = e()), (Y.memoizedState = [e, t]), e);
}
function gn(e, t, n) {
  if (25 <= $a) throw Error(M(301));
  if (e === Ka)
    if (
      ((Xa = !0),
      (e = { action: n, next: null }),
      Qa === null && (Qa = new Map()),
      (n = Qa.get(t)),
      n === void 0)
    )
      Qa.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function _n() {
  throw Error(M(394));
}
function vn() {}
function yn(e) {
  return (console.error(e), null);
}
function bn() {}
function xn(e, t, n, r, i, a, o, s, c) {
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
      onError: i === void 0 ? yn : i,
      onAllReady: a === void 0 ? bn : a,
      onShellReady: o === void 0 ? bn : o,
      onShellError: s === void 0 ? bn : s,
      onFatalError: c === void 0 ? bn : c,
    }),
    (n = Cn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Sn(t, e, null, n, u, Ra, null, Va)),
    l.push(e),
    t
  );
}
function Sn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && In(e));
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
function Cn(e, t, n, r, i, a) {
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
function wn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function Tn(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Mt(e.destination, t)));
}
function En(e, t, n, r, i) {
  for (Ka = {}, qa = t, Za = 0, e = n(r, i); Xa;)
    ((Xa = !1), (Za = 0), ($a += 1), (Y = null), (e = n(r, i)));
  return (fn(), e);
}
function Dn(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(M(108, Xt(r) || `Unknown`, s));
      r = ba({}, o, n);
    }
    ((t.legacyContext = r), V(e, t, i), (t.legacyContext = o));
  } else V(e, t, i);
}
function On(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ba({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function kn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Zt(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        an(a, n, r, i),
        Dn(e, t, a, n));
    } else {
      ((a = Zt(n, t.legacyContext)), (i = En(e, t, n, r, a)));
      var o = Za !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (an(i, n, r, a), Dn(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = on(r, 1, 0)));
        try {
          V(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else V(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Fa:
        case Pa:
        case wa:
        case Ta:
        case Ca:
          V(e, t, r.children);
          return;
        case Aa:
          V(e, t, r.children);
          return;
        case Na:
          throw Error(M(343));
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
              c = Cn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Cn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (jn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(ui),
                (l.status = 1),
                Pn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = wn(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = Sn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Oa:
            if (((r = En(e, t, n.render, r, i)), Za !== 0)) {
              ((n = t.treeContext), (t.treeContext = on(n, 1, 0)));
              try {
                V(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else V(e, t, r);
            return;
          case ja:
            ((n = n.type), (r = On(n, r)), kn(e, t, n, r, i));
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
              V(e, t, i),
              (e = za),
              e === null)
            )
              throw Error(M(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === Ia ? e.context._defaultValue : r),
              (e = za = e.parent),
              (t.context = e));
            return;
          case Da:
            ((r = r.children), (r = r(n._currentValue)), V(e, t, r));
            return;
          case Ma:
            ((i = n._init), (n = i(n._payload)), (r = On(n, r)), kn(e, t, n, r, void 0));
            return;
        }
      throw Error(M(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Gt(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = zt(o, n, r)),
      jn(e, t, a),
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
        i.chunks.push(Ei, F(n), Di);
    }
    i.lastPushedText = !1;
  }
}
function V(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case xa:
        kn(e, t, n.type, n.props, n.ref);
        return;
      case Sa:
        throw Error(M(257));
      case Ma:
        var r = n._init;
        ((n = r(n._payload)), V(e, t, n));
        return;
    }
    if (ri(n)) {
      An(e, t, n);
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
        An(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        M(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Bt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Bt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function An(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = on(a, r, i);
    try {
      jn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function jn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return V(e, t, n);
  } catch (c) {
    if ((fn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        rn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Cn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = Sn(
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
      rn(a));
  }
}
function Mn(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Fn(this, t, e));
}
function Nn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(M(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Nn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Pn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Pn(e, n));
  } else e.completedSegments.push(t);
}
function Fn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(M(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = bn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Pn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Mn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Pn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function In(e) {
  if (e.status !== 2) {
    var t = za,
      n = no.current;
    no.current = eo;
    var r = to;
    to = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          rn(o.context);
          try {
            (V(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(ui),
              o.abortSet.delete(o),
              (c.status = 1),
              Fn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((fn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = wn(s, d);
              if (
                (u === null
                  ? Tn(s, d)
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
      (a.splice(0, i), e.destination !== null && Hn(e, e.destination));
    } catch (t) {
      (wn(e, t), Tn(e, t));
    } finally {
      ((to = r), (no.current = n), n === eo && rn(t));
    }
  }
}
function Ln(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        N(t, Oi),
        N(t, e.placeholderPrefix),
        (e = F(r.toString(16))),
        N(t, e),
        P(t, ki)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) N(t, r[a]);
        i = Rn(e, t, i);
      }
      for (; a < r.length - 1; a++) N(t, r[a]);
      return (a < r.length && (i = P(t, r[a])), i);
    default:
      throw Error(M(390));
  }
}
function Rn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ln(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      P(t, Ni),
      N(t, Fi),
      r && (N(t, Li), N(t, F(R(r))), N(t, Ii)),
      P(t, Ri),
      Ln(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = I(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      Kt(t, e.responseState, r),
      Ln(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Kt(t, e.responseState, r.id),
      Ln(e, t, n));
  else {
    if ((P(t, Ai), (n = r.completedSegments), n.length !== 1)) throw Error(M(391));
    Rn(e, t, n[0]);
  }
  return P(t, Pi);
}
function zn(e, t, n) {
  return (qt(t, e.responseState, n.formatContext, n.id), Rn(e, t, n), Jt(t, n.formatContext));
}
function Bn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Vn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    N(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? N(t, da) : ((e.sentCompleteBoundaryFunction = !0), N(t, ua)),
    r === null)
  )
    throw Error(M(395));
  return ((n = F(n.toString(16))), N(t, r), N(t, fa), N(t, e.segmentPrefix), N(t, n), P(t, pa));
}
function Vn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(M(392));
    return zn(e, t, r);
  }
  return (
    zn(e, t, r),
    (e = e.responseState),
    N(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? N(t, sa) : ((e.sentCompleteSegmentFunction = !0), N(t, oa)),
    N(t, e.segmentPrefix),
    (i = F(i.toString(16))),
    N(t, i),
    N(t, ca),
    N(t, e.placeholderPrefix),
    N(t, i),
    P(t, la)
  );
}
function Hn(e, t) {
  ((G = new Uint8Array(512)), (K = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Rn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) N(t, r[n]);
      n < r.length && P(t, r[n]);
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
        (N(r, s.startInlineScript),
        s.sentClientRenderFunction ? N(r, ha) : ((s.sentClientRenderFunction = !0), N(r, ma)),
        c === null)
      )
        throw Error(M(395));
      if (
        (N(r, c),
        N(r, ga),
        (l || u || d) && (N(r, va), N(r, F(Yt(l || ``)))),
        (u || d) && (N(r, va), N(r, F(Yt(u || ``)))),
        d && (N(r, va), N(r, F(Yt(d)))),
        !P(r, _a))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Bn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), jt(t), (G = new Uint8Array(512)), (K = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Vn(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var ee = !1;
            break e;
          }
        (h.splice(0, s), (ee = !0));
      }
      if (!ee) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var g = e.completedBoundaries;
    for (i = 0; i < g.length; i++)
      if (!Bn(e, t, g[i])) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    g.splice(0, i);
  } finally {
    (jt(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function Un(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Nn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Hn(e, e.destination));
  } catch (t) {
    (wn(e, t), Tn(e, t));
  }
}
var Wn,
  Gn,
  Kn,
  H,
  qn,
  Jn,
  Yn,
  U,
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
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  W,
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
  G,
  K,
  qr,
  q,
  Jr,
  Yr,
  Xr,
  J,
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
  Ka,
  qa,
  Ja,
  Y,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  X,
  ro,
  io,
  ao,
  oo = e(() => {
    (t(),
      (Wn = `default` in s ? c : s),
      (Gn = {}),
      (Kn = Wn),
      (H = Object.prototype.hasOwnProperty),
      (qn =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Jn = {}),
      (Yn = {}),
      (U = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          U[e] = new D(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        U[t] = new D(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        U[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          U[e] = new D(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          U[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        U[e] = new D(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        U[e] = new D(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        U[e] = new D(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        U[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Xn = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Xn, Se);
          U[t] = new D(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Xn, Se);
          U[t] = new D(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Xn, Se);
        U[t] = new D(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        U[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (U.xlinkHref = new D(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        U[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Zn = {
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
      (Qn = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(Zn).forEach(function (e) {
        Qn.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]));
        });
      }),
      ($n = /["'&<>]/),
      (er = /([A-Z])/g),
      (tr = /^ms-/),
      (nr = Array.isArray),
      (rr = new Map()),
      (ir = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (ar = new Map()),
      (or = /[<\u2028\u2029]/g),
      (sr = Object.assign),
      (cr = Symbol.for(`react.element`)),
      (lr = Symbol.for(`react.portal`)),
      (ur = Symbol.for(`react.fragment`)),
      (dr = Symbol.for(`react.strict_mode`)),
      (fr = Symbol.for(`react.profiler`)),
      (pr = Symbol.for(`react.provider`)),
      (mr = Symbol.for(`react.context`)),
      (hr = Symbol.for(`react.forward_ref`)),
      (gr = Symbol.for(`react.suspense`)),
      (_r = Symbol.for(`react.suspense_list`)),
      (vr = Symbol.for(`react.memo`)),
      (yr = Symbol.for(`react.lazy`)),
      (br = Symbol.for(`react.scope`)),
      (xr = Symbol.for(`react.debug_trace_mode`)),
      (Sr = Symbol.for(`react.legacy_hidden`)),
      (Cr = Symbol.for(`react.default_value`)),
      (wr = Symbol.iterator),
      (Tr = {}),
      (Er = null),
      (Dr = {
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
      (Or = { id: 1, overflow: `` }),
      (kr = Math.clz32 ? Math.clz32 : Ke),
      (Ar = Math.log),
      (jr = Math.LN2),
      (Mr = typeof Object.is == `function` ? Object.is : qe),
      (Nr = null),
      (Pr = null),
      (Fr = null),
      (W = null),
      (Ir = !1),
      (Lr = !1),
      (Rr = 0),
      (zr = null),
      (Br = 0),
      (Vr = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (Je(), e._currentValue2);
        },
        useMemo: et,
        useReducer: $e,
        useRef: function (e) {
          ((Nr = Je()), (W = Xe()));
          var t = W.memoizedState;
          return t === null ? ((e = { current: e }), (W.memoizedState = e)) : t;
        },
        useState: function (e) {
          return $e(Qe, e);
        },
        useInsertionEffect: rt,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return et(function () {
            return e;
          }, t);
        },
        useImperativeHandle: rt,
        useEffect: rt,
        useDebugValue: rt,
        useDeferredValue: function (e) {
          return (Je(), e);
        },
        useTransition: function () {
          return (Je(), [!1, nt]);
        },
        useId: function () {
          var e = Pr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - kr(e) - 1))).toString(32) + t));
          var n = Hr;
          if (n === null) throw Error(E(404));
          return (
            (t = Rr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (Je(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(E(407));
          return n();
        },
      }),
      (Hr = null),
      (Ur = Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Gn.renderToNodeStream = function () {
        throw Error(E(207));
      }),
      (Gn.renderToStaticMarkup = function (e, t) {
        return At(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (Gn.renderToStaticNodeStream = function () {
        throw Error(E(208));
      }),
      (Gn.renderToString = function (e, t) {
        return At(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (Gn.version = `18.2.0`),
      (Wr = `default` in s ? c : s),
      (Gr = {}),
      (Kr = Wr),
      (G = null),
      (K = 0),
      (qr = new TextEncoder()),
      (q = Object.prototype.hasOwnProperty),
      (Jr =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Yr = {}),
      (Xr = {}),
      (J = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          J[e] = new L(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        J[t] = new L(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        J[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          J[e] = new L(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          J[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        J[e] = new L(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        J[e] = new L(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        J[e] = new L(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        J[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Zr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Zr, Pt);
          J[t] = new L(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Zr, Pt);
          J[t] = new L(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Zr, Pt);
        J[t] = new L(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        J[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (J.xlinkHref = new L(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        J[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Qr = {
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
      ($r = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(Qr).forEach(function (e) {
        $r.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]));
        });
      }),
      (ei = /["'&<>]/),
      (ti = /([A-Z])/g),
      (ni = /^ms-/),
      (ri = Array.isArray),
      (ii = I(`<script>`)),
      (ai = I(`<\/script>`)),
      (oi = I(`<script src="`)),
      (si = I(`<script type="module" src="`)),
      (ci = I(`" async=""><\/script>`)),
      (li = /(<\/|<)(s)(cript)/gi),
      (ui = I(`<!-- -->`)),
      (di = new Map()),
      (fi = I(` style="`)),
      (pi = I(`:`)),
      (mi = I(`;`)),
      (hi = I(` `)),
      (gi = I(`="`)),
      (_i = I(`"`)),
      (vi = I(`=""`)),
      (yi = I(`>`)),
      (bi = I(`/>`)),
      (xi = I(` selected=""`)),
      (Si = I(`
`)),
      (Ci = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (wi = new Map()),
      (Ti = I(`<!DOCTYPE html>`)),
      (Ei = I(`</`)),
      (Di = I(`>`)),
      (Oi = I(`<template id="`)),
      (ki = I(`"></template>`)),
      (Ai = I(`<!--$-->`)),
      (ji = I(`<!--$?--><template id="`)),
      (Mi = I(`"></template>`)),
      (Ni = I(`<!--$!-->`)),
      (Pi = I(`<!--/$-->`)),
      (Fi = I(`<template`)),
      (Ii = I(`"`)),
      (Li = I(` data-dgst="`)),
      I(` data-msg="`),
      I(` data-stck="`),
      (Ri = I(`></template>`)),
      (zi = I(`<div hidden id="`)),
      (Bi = I(`">`)),
      (Vi = I(`</div>`)),
      (Hi = I(`<svg aria-hidden="true" style="display:none" id="`)),
      (Ui = I(`">`)),
      (Wi = I(`</svg>`)),
      (Gi = I(`<math aria-hidden="true" style="display:none" id="`)),
      (Ki = I(`">`)),
      (qi = I(`</math>`)),
      (Ji = I(`<table hidden id="`)),
      (Yi = I(`">`)),
      (Xi = I(`</table>`)),
      (Zi = I(`<table hidden><tbody id="`)),
      (Qi = I(`">`)),
      ($i = I(`</tbody></table>`)),
      (ea = I(`<table hidden><tr id="`)),
      (ta = I(`">`)),
      (na = I(`</tr></table>`)),
      (ra = I(`<table hidden><colgroup id="`)),
      (ia = I(`">`)),
      (aa = I(`</colgroup></table>`)),
      (oa = I(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (sa = I(`$RS("`)),
      (ca = I(`","`)),
      (la = I(`")<\/script>`)),
      (ua = I(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (da = I(`$RC("`)),
      (fa = I(`","`)),
      (pa = I(`")<\/script>`)),
      (ma = I(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (ha = I(`$RX("`)),
      (ga = I(`"`)),
      (_a = I(`)<\/script>`)),
      (va = I(`,`)),
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
      (Ha = Math.clz32 ? Math.clz32 : sn),
      (Ua = Math.log),
      (Wa = Math.LN2),
      (Ga = typeof Object.is == `function` ? Object.is : cn),
      (Ka = null),
      (qa = null),
      (Ja = null),
      (Y = null),
      (Ya = !1),
      (Xa = !1),
      (Za = 0),
      (Qa = null),
      ($a = 0),
      (eo = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (ln(), e._currentValue);
        },
        useMemo: hn,
        useReducer: mn,
        useRef: function (e) {
          ((Ka = ln()), (Y = dn()));
          var t = Y.memoizedState;
          return t === null ? ((e = { current: e }), (Y.memoizedState = e)) : t;
        },
        useState: function (e) {
          return mn(pn, e);
        },
        useInsertionEffect: vn,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return hn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: vn,
        useEffect: vn,
        useDebugValue: vn,
        useDeferredValue: function (e) {
          return (ln(), e);
        },
        useTransition: function () {
          return (ln(), [!1, _n]);
        },
        useId: function () {
          var e = qa.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Ha(e) - 1))).toString(32) + t));
          var n = to;
          if (n === null) throw Error(M(404));
          return (
            (t = Za++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (ln(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(M(407));
          return n();
        },
      }),
      (to = null),
      (no = Kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Gr.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = xn(
              e,
              It(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Rt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Mt(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          Hn(s, e);
                        } catch (e) {
                          (wn(s, e), Tn(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      Un(s);
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
                (Un(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          In(s);
        });
      }),
      (Gr.version = `18.2.0`),
      (X = {}),
      (ro = Gn),
      (io = Gr),
      (X.version = ro.version),
      (X.renderToString = ro.renderToString),
      (X.renderToStaticMarkup = ro.renderToStaticMarkup),
      (X.renderToNodeStream = ro.renderToNodeStream),
      (X.renderToStaticNodeStream = ro.renderToStaticNodeStream),
      (X.renderToReadableStream = io.renderToReadableStream),
      X.version,
      X.renderToString,
      X.renderToStaticMarkup,
      X.renderToNodeStream,
      X.renderToStaticNodeStream,
      (ao = X.renderToReadableStream));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var so,
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
  Q,
  So = e(() => {
    (m(),
      ge(),
      ne(),
      t(),
      (so = {
        A2ihFZb7x: { hover: !0 },
        a2vSS0CUH: { hover: !0 },
        ACth5Oq8j: { hover: !0 },
        adguRWWdy: { hover: !0 },
        ANEINRPAV: { hover: !0 },
        Bcp_qb5bc: { hover: !0 },
        BZAAmM5J2: { hover: !0 },
        c4ZGuTW8r: { hover: !0 },
        CpqTj7_dZ: { hover: !0 },
        d4wNECWpc: { hover: !0 },
        ea3V8_QYN: { hover: !0 },
        fHHSQiqdo: { hover: !0 },
        Fj2Stia3y: { hover: !0 },
        gBIx7MMpT: { hover: !0 },
        hcfCc_5hw: { hover: !0 },
        j2sBye_U0: { hover: !0 },
        kDNHbEi2J: { hover: !0 },
        OU2pG3pPl: { hover: !0 },
        pdV6isCFH: { hover: !0 },
        qQ3t0NM9J: { hover: !0 },
        rD9hl94fu: { hover: !0 },
        tXuBkWWhJ: { hover: !0 },
        uEPyMafyX: { hover: !0 },
        vZzIF5HDu: { hover: !0 },
        y3qmKAfcU: { hover: !0 },
        YEVPXvmtM: { hover: !0 },
      }),
      (co =
        `d4wNECWpc.uEPyMafyX.kDNHbEi2J.tXuBkWWhJ.fHHSQiqdo.pdV6isCFH.vZzIF5HDu.qQ3t0NM9J.ea3V8_QYN.BZAAmM5J2.gBIx7MMpT.a2vSS0CUH.CpqTj7_dZ.Bcp_qb5bc.YEVPXvmtM.ANEINRPAV.rD9hl94fu.A2ihFZb7x.Fj2Stia3y.c4ZGuTW8r.OU2pG3pPl.j2sBye_U0.adguRWWdy.y3qmKAfcU.hcfCc_5hw.ACth5Oq8j`.split(
          `.`
        )),
      (lo = `framer-YWrgU`),
      (uo = {
        A2ihFZb7x: `framer-v-1wh47q6`,
        a2vSS0CUH: `framer-v-1i33v7n`,
        ACth5Oq8j: `framer-v-6a0o6e`,
        adguRWWdy: `framer-v-1gzp7j5`,
        ANEINRPAV: `framer-v-1l6cpu8`,
        Bcp_qb5bc: `framer-v-13vwfjd`,
        BZAAmM5J2: `framer-v-44cbx6`,
        c4ZGuTW8r: `framer-v-1mcmra`,
        CpqTj7_dZ: `framer-v-10y04o`,
        d4wNECWpc: `framer-v-1n2tbda`,
        ea3V8_QYN: `framer-v-1kva80d`,
        fHHSQiqdo: `framer-v-11jgjv3`,
        Fj2Stia3y: `framer-v-1pke2uw`,
        gBIx7MMpT: `framer-v-185fxle`,
        hcfCc_5hw: `framer-v-1laggpo`,
        j2sBye_U0: `framer-v-1rsot93`,
        kDNHbEi2J: `framer-v-11q269z`,
        OU2pG3pPl: `framer-v-48cyob`,
        pdV6isCFH: `framer-v-1r5s6hs`,
        qQ3t0NM9J: `framer-v-8bo8p4`,
        rD9hl94fu: `framer-v-1l3aiy6`,
        tXuBkWWhJ: `framer-v-1hkzo8x`,
        uEPyMafyX: `framer-v-1gi4ipo`,
        vZzIF5HDu: `framer-v-1t20u3d`,
        y3qmKAfcU: `framer-v-1lo8qxt`,
        YEVPXvmtM: `framer-v-1suv9vm`,
      }),
      (fo = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (po = (e) => (!Number.isFinite(e) || e <= 0 ? 1 : e >= 100 ? 2 : Math.round(e) / 100 + 1)),
      se(),
      (mo = { bounce: 0.4, delay: 0, duration: 0.4, type: `spring` }),
      (ho = { bounce: 0.5, delay: 0, duration: 0.4, type: `spring` }),
      (go = ({ value: e, children: t }) => {
        let n = o(_),
          r = e ?? n.transition,
          i = f(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(_.Provider, { value: i, children: t });
      }),
      (_o = {
        "X (Twitter)": `y3qmKAfcU`,
        Airbnb: `d4wNECWpc`,
        Amazon: `uEPyMafyX`,
        Behance: `kDNHbEi2J`,
        ChatGPT: `tXuBkWWhJ`,
        Discord: `fHHSQiqdo`,
        Dribbble: `pdV6isCFH`,
        Dropbox: `vZzIF5HDu`,
        Facebook: `qQ3t0NM9J`,
        Google: `ea3V8_QYN`,
        Instagram: `BZAAmM5J2`,
        Kwai: `gBIx7MMpT`,
        Linkedin: `a2vSS0CUH`,
        Pinterest: `CpqTj7_dZ`,
        Reddit: `Bcp_qb5bc`,
        Snapchat: `YEVPXvmtM`,
        Spotify: `ANEINRPAV`,
        Telegram: `rD9hl94fu`,
        Threads: `A2ihFZb7x`,
        Tiktok: `Fj2Stia3y`,
        Twitch: `c4ZGuTW8r`,
        WeChat: `OU2pG3pPl`,
        Whatsapp: `j2sBye_U0`,
        Wikipedia: `adguRWWdy`,
        Yahoo: `hcfCc_5hw`,
        Youtube: `ACth5Oq8j`,
      }),
      (vo = v.create(a)),
      (yo = ({ height: e, id: t, link: n, radius: r, shadow: i, squircle: a, width: o, ...s }) => ({
        ...s,
        c7qFIwo3w:
          i ??
          s.c7qFIwo3w ??
          `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
        HDmi8os8f: n ?? s.HDmi8os8f,
        uUM3zLOgg: a ?? s.uUM3zLOgg ?? 50,
        variant: _o[s.variant] ?? s.variant ?? `d4wNECWpc`,
        Ydpzi9vZY: r ?? s.Ydpzi9vZY ?? `30px`,
      })),
      (bo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xo = de(
        u(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = ye();
          ae();
          let {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              c7qFIwo3w: m,
              Ydpzi9vZY: h,
              uUM3zLOgg: g,
              HDmi8os8f: _,
              ...ne
            } = yo(e),
            {
              baseVariant: y,
              classNames: re,
              clearLoadingGesture: ie,
              gestureHandlers: oe,
              gestureVariant: b,
              isLoading: se,
              setGestureState: ce,
              setVariant: le,
              variants: de,
            } = ue({
              cycleOrder: co,
              defaultVariant: `d4wNECWpc`,
              enabledGestures: so,
              ref: i,
              variant: f,
              variantClassNames: uo,
            }),
            x = bo(e, de),
            fe = be(lo),
            pe = () =>
              !(
                [
                  `uEPyMafyX-hover`,
                  `kDNHbEi2J-hover`,
                  `tXuBkWWhJ-hover`,
                  `fHHSQiqdo-hover`,
                  `pdV6isCFH-hover`,
                  `vZzIF5HDu-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `uEPyMafyX`,
                  `kDNHbEi2J`,
                  `tXuBkWWhJ`,
                  `fHHSQiqdo`,
                  `pdV6isCFH`,
                  `vZzIF5HDu`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            me = () => !(b === `qQ3t0NM9J-hover` || y === `qQ3t0NM9J`),
            he = () =>
              !(
                [
                  `d4wNECWpc-hover`,
                  `qQ3t0NM9J-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `qQ3t0NM9J`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            ge = () => b === `uEPyMafyX-hover` || y === `uEPyMafyX`,
            C = () =>
              !(
                [
                  `d4wNECWpc-hover`,
                  `uEPyMafyX-hover`,
                  `tXuBkWWhJ-hover`,
                  `fHHSQiqdo-hover`,
                  `pdV6isCFH-hover`,
                  `vZzIF5HDu-hover`,
                  `qQ3t0NM9J-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `uEPyMafyX`,
                  `tXuBkWWhJ`,
                  `fHHSQiqdo`,
                  `pdV6isCFH`,
                  `vZzIF5HDu`,
                  `qQ3t0NM9J`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            ve = () => b === `kDNHbEi2J-hover` || y === `kDNHbEi2J`,
            w = () =>
              !(
                [
                  `d4wNECWpc-hover`,
                  `uEPyMafyX-hover`,
                  `kDNHbEi2J-hover`,
                  `fHHSQiqdo-hover`,
                  `pdV6isCFH-hover`,
                  `vZzIF5HDu-hover`,
                  `qQ3t0NM9J-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `fHHSQiqdo`,
                  `pdV6isCFH`,
                  `vZzIF5HDu`,
                  `qQ3t0NM9J`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            T = () => b === `tXuBkWWhJ-hover` || y === `tXuBkWWhJ`,
            E = () =>
              !(
                [
                  `d4wNECWpc-hover`,
                  `uEPyMafyX-hover`,
                  `kDNHbEi2J-hover`,
                  `tXuBkWWhJ-hover`,
                  `pdV6isCFH-hover`,
                  `vZzIF5HDu-hover`,
                  `qQ3t0NM9J-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `pdV6isCFH`,
                  `vZzIF5HDu`,
                  `qQ3t0NM9J`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            xe = () => b === `fHHSQiqdo-hover` || y === `fHHSQiqdo`,
            D = () =>
              !(
                [
                  `d4wNECWpc-hover`,
                  `uEPyMafyX-hover`,
                  `kDNHbEi2J-hover`,
                  `tXuBkWWhJ-hover`,
                  `fHHSQiqdo-hover`,
                  `vZzIF5HDu-hover`,
                  `qQ3t0NM9J-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `fHHSQiqdo`,
                  `vZzIF5HDu`,
                  `qQ3t0NM9J`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Se = () => b === `pdV6isCFH-hover` || y === `pdV6isCFH`,
            O = () =>
              !(
                [
                  `d4wNECWpc-hover`,
                  `uEPyMafyX-hover`,
                  `kDNHbEi2J-hover`,
                  `tXuBkWWhJ-hover`,
                  `fHHSQiqdo-hover`,
                  `pdV6isCFH-hover`,
                  `qQ3t0NM9J-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `rD9hl94fu-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `fHHSQiqdo`,
                  `pdV6isCFH`,
                  `qQ3t0NM9J`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `rD9hl94fu`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Ce = () => b === `vZzIF5HDu-hover` || y === `vZzIF5HDu`,
            we = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `ea3V8_QYN-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `fHHSQiqdo`,
                  `ea3V8_QYN`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Te = () => b === `qQ3t0NM9J-hover` || y === `qQ3t0NM9J`,
            k = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `pdV6isCFH-hover`,
                  `vZzIF5HDu-hover`,
                  `qQ3t0NM9J-hover`,
                  `BZAAmM5J2-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `fHHSQiqdo`,
                  `pdV6isCFH`,
                  `vZzIF5HDu`,
                  `qQ3t0NM9J`,
                  `BZAAmM5J2`,
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Ee = () => b === `ea3V8_QYN-hover` || y === `ea3V8_QYN`,
            De = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `gBIx7MMpT-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `gBIx7MMpT`,
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Oe = () => b === `BZAAmM5J2-hover` || y === `BZAAmM5J2`,
            A = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `gBIx7MMpT-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            ke = () => b === `a2vSS0CUH-hover` || y === `a2vSS0CUH`,
            Ae = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `a2vSS0CUH-hover`,
                  `CpqTj7_dZ-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `a2vSS0CUH`,
                  `CpqTj7_dZ`,
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            je = () => b === `gBIx7MMpT-hover` || y === `gBIx7MMpT`,
            Me = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `Bcp_qb5bc-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `Bcp_qb5bc`,
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Ne = () => b === `CpqTj7_dZ-hover` || y === `CpqTj7_dZ`,
            Pe = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `YEVPXvmtM-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `YEVPXvmtM`,
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Fe = () => b === `Bcp_qb5bc-hover` || y === `Bcp_qb5bc`,
            Ie = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `ANEINRPAV-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `ANEINRPAV`,
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Le = () => b === `YEVPXvmtM-hover` || y === `YEVPXvmtM`,
            Re = () =>
              !(
                [
                  `fHHSQiqdo-hover`,
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            ze = () => b === `ANEINRPAV-hover` || y === `ANEINRPAV`,
            Be = () =>
              !(
                [
                  `A2ihFZb7x-hover`,
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `A2ihFZb7x`,
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Ve = () => b === `rD9hl94fu-hover` || y === `rD9hl94fu`,
            He = () =>
              !(
                [
                  `Fj2Stia3y-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `Fj2Stia3y`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Ue = () => b === `A2ihFZb7x-hover` || y === `A2ihFZb7x`,
            We = () =>
              !(
                [
                  `A2ihFZb7x-hover`,
                  `c4ZGuTW8r-hover`,
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `A2ihFZb7x`,
                  `c4ZGuTW8r`,
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            Ge = () => b === `Fj2Stia3y-hover` || y === `Fj2Stia3y`,
            Ke = () =>
              !(
                [
                  `OU2pG3pPl-hover`,
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [
                  `OU2pG3pPl`,
                  `j2sBye_U0`,
                  `adguRWWdy`,
                  `y3qmKAfcU`,
                  `hcfCc_5hw`,
                  `ACth5Oq8j`,
                ].includes(y)
              ),
            qe = () => b === `c4ZGuTW8r-hover` || y === `c4ZGuTW8r`,
            Je = () =>
              !(
                [
                  `j2sBye_U0-hover`,
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) ||
                [`j2sBye_U0`, `adguRWWdy`, `y3qmKAfcU`, `hcfCc_5hw`, `ACth5Oq8j`].includes(y)
              ),
            Ye = () => b === `OU2pG3pPl-hover` || y === `OU2pG3pPl`,
            Xe = () =>
              !(
                [
                  `adguRWWdy-hover`,
                  `y3qmKAfcU-hover`,
                  `hcfCc_5hw-hover`,
                  `ACth5Oq8j-hover`,
                ].includes(b) || [`adguRWWdy`, `y3qmKAfcU`, `hcfCc_5hw`, `ACth5Oq8j`].includes(y)
              ),
            Ze = () => b === `j2sBye_U0-hover` || y === `j2sBye_U0`,
            Qe = () =>
              !(
                [`y3qmKAfcU-hover`, `hcfCc_5hw-hover`, `ACth5Oq8j-hover`].includes(b) ||
                [`y3qmKAfcU`, `hcfCc_5hw`, `ACth5Oq8j`].includes(y)
              ),
            $e = () => b === `adguRWWdy-hover` || y === `adguRWWdy`,
            et = () =>
              !(
                [`hcfCc_5hw-hover`, `ACth5Oq8j-hover`].includes(b) ||
                [`hcfCc_5hw`, `ACth5Oq8j`].includes(y)
              ),
            tt = () => b === `y3qmKAfcU-hover` || y === `y3qmKAfcU`,
            nt = () => !(b === `ACth5Oq8j-hover` || y === `ACth5Oq8j`),
            rt = () => b === `hcfCc_5hw-hover` || y === `hcfCc_5hw`,
            it = () => b === `ACth5Oq8j-hover` || y === `ACth5Oq8j`;
          return l(te, {
            id: d ?? a,
            children: l(vo, {
              animate: de,
              initial: !1,
              children: l(go, {
                value: mo,
                ...Z({ ea3V8_QYN: { value: ho } }, y, b),
                children: l(_e, {
                  href: _,
                  motionChild: !0,
                  nodeId: `d4wNECWpc`,
                  openInNewTab: !0,
                  scopeId: `uwkN7GLsE`,
                  children: p(v.a, {
                    ...ne,
                    ...oe,
                    className: `${be(fe, `framer-1n2tbda`, u, re)} framer-4zjjuo`,
                    "data-framer-name": `Airbnb`,
                    layoutDependency: x,
                    layoutId: `d4wNECWpc`,
                    ref: i,
                    style: {
                      "--corner-shape-fallback":
                        Math.round(Math.exp(-0.57 * (po(g) - 1)) * 1e3) / 1e3,
                      "--wd2q50": m,
                      background: `linear-gradient(90deg, rgb(254, 90, 95) 0%, rgb(254, 90, 95) 20%, rgb(254, 90, 95) 40%, rgb(254, 90, 95) 60%, rgb(254, 90, 95) 80%, rgb(254, 90, 95) 100%)`,
                      backgroundColor: `rgb(254, 90, 95)`,
                      borderBottomLeftRadius: `calc(${fo(h, 3)}*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(${fo(h, 2)}*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(${fo(h, 0)}*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(${fo(h, 1)}*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      boxShadow: `var(--wd2q50)`,
                      cornerShape: `superellipse(${po(g)})`,
                      ...c,
                    },
                    variants: {
                      "A2ihFZb7x-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "a2vSS0CUH-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "ACth5Oq8j-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "adguRWWdy-hover": {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      "ANEINRPAV-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "Bcp_qb5bc-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "BZAAmM5J2-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "c4ZGuTW8r-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "CpqTj7_dZ-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "d4wNECWpc-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "ea3V8_QYN-hover": {
                        background: `conic-gradient(from 179deg at 50% 50%, rgb(49, 139, 247) 3.6deg, rgb(51, 152, 132) 14.4deg, rgb(51, 156, 60) 41.351351351351354deg, rgb(229, 179, 2) 136.55827702702703deg, rgba(217, 56, 62, 0.99) 248.13344594594597deg, rgb(49, 139, 247) 323.36148648648646deg)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      "fHHSQiqdo-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "Fj2Stia3y-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "gBIx7MMpT-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "hcfCc_5hw-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "j2sBye_U0-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "kDNHbEi2J-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "OU2pG3pPl-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "pdV6isCFH-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "qQ3t0NM9J-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "rD9hl94fu-hover": {
                        background: `linear-gradient(90deg, rgb(38, 166, 227) 0%, rgb(38, 166, 227) 20%, rgb(38, 166, 227) 40%, rgb(38, 166, 227) 60%, rgb(38, 166, 227) 80%, rgb(38, 166, 227) 100%)`,
                        backgroundColor: `rgb(38, 166, 227)`,
                      },
                      "tXuBkWWhJ-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "uEPyMafyX-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "vZzIF5HDu-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "y3qmKAfcU-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      "YEVPXvmtM-hover": {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      A2ihFZb7x: {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      a2vSS0CUH: {
                        background: `linear-gradient(90deg, rgb(9, 100, 188) 0%, rgb(9, 100, 188) 20%, rgb(9, 100, 188) 40%, rgb(9, 100, 188) 60%, rgb(9, 100, 188) 80%, rgb(9, 100, 188) 100%)`,
                        backgroundColor: `rgb(9, 100, 188)`,
                      },
                      ACth5Oq8j: {
                        background: `linear-gradient(270deg, rgb(164, 1, 0) 0%, rgb(254, 0, 1) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      adguRWWdy: {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      ANEINRPAV: {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      Bcp_qb5bc: {
                        background: `linear-gradient(90deg, rgb(249, 88, 3) 0%, rgb(249, 88, 3) 20%, rgb(249, 88, 3) 40%, rgb(249, 88, 3) 60%, rgb(249, 88, 3) 80%, rgb(249, 88, 3) 100%)`,
                        backgroundColor: `rgb(249, 88, 3)`,
                      },
                      BZAAmM5J2: {
                        background: `linear-gradient(46deg, rgb(255, 191, 61) 16%, rgb(249, 64, 135) 36%, rgb(108, 75, 234) 70%, rgb(96, 78, 236) 92%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      c4ZGuTW8r: {
                        background: `linear-gradient(359deg, rgb(152, 65, 237) 0%, rgb(165, 86, 209) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      CpqTj7_dZ: {
                        background: `linear-gradient(90deg, rgb(251, 53, 61) 0%, rgb(251, 53, 61) 20%, rgb(251, 53, 61) 40%, rgb(251, 53, 61) 60%, rgb(251, 53, 61) 80%, rgb(251, 53, 61) 100%)`,
                        backgroundColor: `rgb(251, 53, 61)`,
                      },
                      ea3V8_QYN: {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      fHHSQiqdo: {
                        background: `linear-gradient(90deg, rgb(89, 95, 240) 0%, rgb(105, 8, 221) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      Fj2Stia3y: {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      gBIx7MMpT: {
                        background: `linear-gradient(90deg, rgb(231, 74, 34) 0%, rgb(231, 74, 34) 20%, rgb(231, 74, 34) 40%, rgb(231, 74, 34) 60%, rgb(231, 74, 34) 80%, rgb(231, 74, 34) 100%)`,
                        backgroundColor: `rgb(231, 74, 34)`,
                      },
                      hcfCc_5hw: {
                        background: `linear-gradient(90deg, rgb(95, 1, 209) 0%, rgb(95, 1, 209) 20%, rgb(95, 1, 209) 40%, rgb(95, 1, 209) 60%, rgb(95, 1, 209) 80%, rgb(95, 1, 209) 100%)`,
                        backgroundColor: `rgb(95, 1, 209)`,
                      },
                      j2sBye_U0: {
                        background: `linear-gradient(224deg, rgb(0, 196, 97) 12%, rgb(0, 244, 113) 88%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      kDNHbEi2J: {
                        background: `linear-gradient(90deg, rgb(6, 104, 242) 0%, rgb(39, 33, 165) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      OU2pG3pPl: {
                        background: `linear-gradient(90deg, rgb(0, 216, 10) 0%, rgb(0, 216, 10) 20%, rgb(0, 216, 10) 40%, rgb(0, 216, 10) 60%, rgb(0, 216, 10) 80%, rgb(0, 216, 10) 100%)`,
                        backgroundColor: `rgb(0, 216, 10)`,
                      },
                      pdV6isCFH: {
                        background: `linear-gradient(90deg, rgb(253, 97, 154) 0%, rgb(226, 20, 149) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      qQ3t0NM9J: {
                        background: `linear-gradient(90deg, rgb(24, 113, 236) 0%, rgb(42, 31, 162) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      rD9hl94fu: {
                        background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 100%)`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      tXuBkWWhJ: {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      uEPyMafyX: {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      vZzIF5HDu: {
                        background: `linear-gradient(90deg, rgb(0, 93, 241) 0%, rgb(0, 93, 241) 20%, rgb(0, 93, 241) 40%, rgb(0, 93, 241) 60%, rgb(0, 93, 241) 80%, rgb(0, 93, 241) 100%)`,
                        backgroundColor: `rgb(0, 93, 241)`,
                      },
                      y3qmKAfcU: {
                        background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 100%)`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      YEVPXvmtM: {
                        background: `linear-gradient(89deg, rgb(255, 248, 3) 0%, rgb(255, 190, 52) 100%)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                    },
                    ...Z(
                      {
                        "A2ihFZb7x-hover": { "data-framer-name": void 0 },
                        "a2vSS0CUH-hover": { "data-framer-name": void 0 },
                        "ACth5Oq8j-hover": { "data-framer-name": void 0 },
                        "adguRWWdy-hover": { "data-framer-name": void 0 },
                        "ANEINRPAV-hover": { "data-framer-name": void 0 },
                        "Bcp_qb5bc-hover": { "data-framer-name": void 0 },
                        "BZAAmM5J2-hover": { "data-framer-name": void 0 },
                        "c4ZGuTW8r-hover": { "data-framer-name": void 0 },
                        "CpqTj7_dZ-hover": { "data-framer-name": void 0 },
                        "d4wNECWpc-hover": { "data-framer-name": void 0 },
                        "ea3V8_QYN-hover": { "data-framer-name": void 0 },
                        "fHHSQiqdo-hover": { "data-framer-name": void 0 },
                        "Fj2Stia3y-hover": { "data-framer-name": void 0 },
                        "gBIx7MMpT-hover": { "data-framer-name": void 0 },
                        "hcfCc_5hw-hover": { "data-framer-name": void 0 },
                        "j2sBye_U0-hover": { "data-framer-name": void 0 },
                        "kDNHbEi2J-hover": { "data-framer-name": void 0 },
                        "OU2pG3pPl-hover": { "data-framer-name": void 0 },
                        "pdV6isCFH-hover": { "data-framer-name": void 0 },
                        "qQ3t0NM9J-hover": { "data-framer-name": void 0 },
                        "rD9hl94fu-hover": { "data-framer-name": void 0 },
                        "tXuBkWWhJ-hover": { "data-framer-name": void 0 },
                        "uEPyMafyX-hover": { "data-framer-name": void 0 },
                        "vZzIF5HDu-hover": { "data-framer-name": void 0 },
                        "y3qmKAfcU-hover": { "data-framer-name": void 0 },
                        "YEVPXvmtM-hover": { "data-framer-name": void 0 },
                        A2ihFZb7x: { "data-framer-name": `Threads` },
                        a2vSS0CUH: { "data-framer-name": `Linkedin` },
                        ACth5Oq8j: { "data-framer-name": `Youtube` },
                        adguRWWdy: { "data-framer-name": `Wikipedia` },
                        ANEINRPAV: { "data-framer-name": `Spotify` },
                        Bcp_qb5bc: { "data-framer-name": `Reddit` },
                        BZAAmM5J2: { "data-framer-name": `Instagram` },
                        c4ZGuTW8r: { "data-framer-name": `Twitch` },
                        CpqTj7_dZ: { "data-framer-name": `Pinterest` },
                        ea3V8_QYN: { "data-framer-name": `Google` },
                        fHHSQiqdo: { "data-framer-name": `Discord` },
                        Fj2Stia3y: { "data-framer-name": `Tiktok` },
                        gBIx7MMpT: { "data-framer-name": `Kwai` },
                        hcfCc_5hw: { "data-framer-name": `Yahoo` },
                        j2sBye_U0: { "data-framer-name": `Whatsapp` },
                        kDNHbEi2J: { "data-framer-name": `Behance` },
                        OU2pG3pPl: { "data-framer-name": `WeChat` },
                        pdV6isCFH: { "data-framer-name": `Dribbble` },
                        qQ3t0NM9J: { "data-framer-name": `Facebook` },
                        rD9hl94fu: { "data-framer-name": `Telegram` },
                        tXuBkWWhJ: { "data-framer-name": `ChatGPT` },
                        uEPyMafyX: { "data-framer-name": `Amazon` },
                        vZzIF5HDu: { "data-framer-name": `Dropbox` },
                        y3qmKAfcU: { "data-framer-name": `X (Twitter)` },
                        YEVPXvmtM: { "data-framer-name": `Snapchat` },
                      },
                      y,
                      b
                    ),
                    children: [
                      pe() &&
                        l(S, {
                          className: `framer-e0ggmy`,
                          "data-framer-name": `Airbnb logo`,
                          layoutDependency: x,
                          layoutId: `DhzcRqseA`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 34" overflow="visible"><g><path d="M 30.84 25.248 C 30.8 25.038 30.76 24.833 30.7 24.65 C 30.47 23.921 30.092 23.046 30.092 23.046 L 28.85 20.267 L 27.898 18.194 L 27.193 16.687 L 25.821 13.79 L 24.411 10.874 L 22.698 7.413 L 21.064 4.163 C 20.533 3.088 20.042 2.434 20.042 2.434 C 19.645 1.88 19.211 1.451 18.777 1.121 C 18.409 0.838 18.042 0.621 17.684 0.467 C 16.535 -0.02 15.59 -0.002 15.5 0.001 C 15.41 -0.002 14.465 -0.02 13.316 0.467 C 12.958 0.621 12.591 0.838 12.223 1.121 C 11.789 1.451 11.355 1.88 10.958 2.434 C 10.958 2.434 10.467 3.088 9.936 4.163 L 8.302 7.413 L 6.589 10.874 L 5.179 13.79 L 3.806 16.687 L 3.101 18.194 L 2.15 20.267 L 0.907 23.046 C 0.907 23.046 0.53 23.921 0.3 24.65 C 0.24 24.833 0.2 25.038 0.16 25.248 C 0.049 25.793 -0.021 26.408 0.006 27.056 C 0.093 29.41 1.322 31.507 3.081 32.724 C 3.813 33.232 4.605 33.572 5.276 33.756 C 6.228 34.018 6.946 33.998 6.946 33.998 C 6.946 33.998 8.656 34.086 10.574 33.167 C 12.1 32.442 13.736 31.18 15.467 29.233 L 15.533 29.233 C 17.264 31.18 18.9 32.442 20.426 33.167 C 22.344 34.086 24.054 33.998 24.054 33.998 C 24.054 33.998 24.772 34.018 25.723 33.756 C 26.395 33.572 27.187 33.232 27.918 32.724 C 29.678 31.507 30.907 29.41 30.994 27.056 C 31.021 26.408 30.951 25.793 30.84 25.248 Z M 15.5 25.922 C 15.393 25.793 14.007 24.095 13.105 22.237 C 11.949 19.855 11.899 18.466 12.026 17.527 C 12.16 16.557 12.641 15.883 13.118 15.474 C 13.6 15.056 14.01 14.913 14.124 14.859 C 14.345 14.754 14.698 14.675 14.942 14.641 C 15.222 14.603 15.456 14.6 15.5 14.6 C 15.543 14.6 15.777 14.603 16.058 14.641 C 16.302 14.675 16.655 14.754 16.876 14.859 C 16.989 14.913 17.4 15.056 17.882 15.474 C 18.359 15.883 18.84 16.557 18.973 17.527 C 19.1 18.466 19.051 19.855 17.895 22.237 C 16.993 24.095 15.607 25.793 15.5 25.922 Z M 28.836 27.481 C 28.756 28.182 28.513 28.991 28.055 29.652 C 27.674 30.196 27.123 30.846 26.379 31.258 C 25.493 31.751 24.317 32.119 22.701 31.796 C 19.768 31.21 16.903 27.702 16.903 27.702 C 16.903 27.702 18.078 26.273 19.164 24.421 C 19.782 23.367 20.339 22.165 20.707 21.028 C 21.322 19.133 21.352 17.492 20.787 16.03 C 20.379 14.964 19.608 14.028 18.359 13.263 C 18.359 13.263 17.003 12.48 15.5 12.524 C 13.997 12.48 12.641 13.263 12.641 13.263 C 11.392 14.028 10.62 14.964 10.213 16.03 C 9.648 17.492 9.678 19.133 10.293 21.028 C 10.661 22.165 11.218 23.367 11.836 24.421 C 12.921 26.273 14.097 27.702 14.097 27.702 C 14.097 27.702 11.232 31.21 8.299 31.796 C 6.682 32.119 5.507 31.751 4.621 31.258 C 3.877 30.846 3.326 30.196 2.945 29.652 C 2.487 28.991 2.244 28.182 2.163 27.481 C 2.1 26.943 2.13 26.432 2.18 26.116 C 2.233 25.782 2.297 25.398 2.484 24.874 C 2.778 24.057 3.222 23.111 3.222 23.111 L 4.822 19.643 L 5.677 17.785 L 7.754 13.423 L 9.327 10.21 C 9.327 10.21 9.918 9.019 10.687 7.502 C 11.145 6.596 11.669 5.575 12.154 4.629 C 12.641 3.676 13.202 3.104 13.756 2.761 C 14.622 2.223 15.416 2.244 15.5 2.247 C 15.584 2.244 16.378 2.223 17.244 2.761 C 17.798 3.104 18.359 3.676 18.846 4.629 C 19.331 5.575 19.855 6.596 20.313 7.502 C 21.081 9.019 21.673 10.21 21.673 10.21 L 23.246 13.423 L 25.323 17.785 L 26.178 19.643 L 27.778 23.111 C 27.778 23.111 28.222 24.057 28.516 24.874 C 28.703 25.398 28.767 25.782 28.82 26.116 C 28.87 26.432 28.9 26.943 28.836 27.481 Z" fill="rgb(249,249,249)"></path></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "d4wNECWpc-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 43" overflow="visible"><g><path d="M 38.799 31.932 C 38.749 31.665 38.699 31.407 38.623 31.175 C 38.333 30.253 37.858 29.147 37.858 29.147 L 36.295 25.631 L 35.097 23.01 L 34.211 21.104 L 32.484 17.441 L 30.711 13.752 L 28.556 9.375 L 26.5 5.265 C 25.832 3.905 25.214 3.078 25.214 3.078 C 24.715 2.377 24.168 1.835 23.622 1.417 C 23.16 1.06 22.698 0.785 22.248 0.591 C 20.803 -0.025 19.613 -0.003 19.5 0.001 C 19.387 -0.003 18.197 -0.025 16.752 0.591 C 16.302 0.785 15.84 1.06 15.378 1.417 C 14.832 1.835 14.285 2.377 13.786 3.078 C 13.786 3.078 13.168 3.905 12.5 5.265 L 10.444 9.375 L 8.289 13.752 L 6.516 17.441 L 4.789 21.104 L 3.902 23.01 L 2.705 25.631 L 1.141 29.147 C 1.141 29.147 0.667 30.253 0.377 31.175 C 0.301 31.407 0.251 31.665 0.201 31.932 C 0.062 32.62 -0.027 33.399 0.007 34.217 C 0.117 37.195 1.663 39.847 3.877 41.387 C 4.797 42.028 5.793 42.459 6.637 42.691 C 7.836 43.023 8.739 42.997 8.739 42.997 C 8.739 42.997 10.89 43.109 13.302 41.947 C 15.222 41.03 17.281 39.434 19.458 36.971 L 19.542 36.971 C 21.719 39.434 23.778 41.03 25.698 41.947 C 28.11 43.109 30.261 42.997 30.261 42.997 C 30.261 42.997 31.164 43.023 32.362 42.691 C 33.207 42.459 34.203 42.028 35.122 41.387 C 37.337 39.847 38.883 37.195 38.993 34.217 C 39.027 33.399 38.938 32.62 38.799 31.932 Z M 19.5 32.784 C 19.365 32.62 17.621 30.473 16.487 28.123 C 15.033 25.11 14.97 23.354 15.129 22.166 C 15.298 20.939 15.903 20.088 16.504 19.571 C 17.109 19.042 17.626 18.861 17.769 18.792 C 18.046 18.659 18.491 18.559 18.799 18.517 C 19.151 18.469 19.445 18.465 19.5 18.465 C 19.554 18.465 19.848 18.469 20.201 18.517 C 20.509 18.559 20.954 18.659 21.231 18.792 C 21.374 18.861 21.891 19.042 22.496 19.571 C 23.097 20.088 23.702 20.939 23.87 22.166 C 24.029 23.354 23.967 25.11 22.513 28.123 C 21.378 30.473 19.634 32.62 19.5 32.784 Z M 36.278 34.755 C 36.177 35.642 35.871 36.665 35.295 37.501 C 34.816 38.19 34.123 39.012 33.186 39.532 C 32.072 40.156 30.593 40.621 28.559 40.212 C 24.87 39.472 21.265 35.035 21.265 35.035 C 21.265 35.035 22.744 33.227 24.109 30.886 C 24.886 29.552 25.588 28.032 26.051 26.595 C 26.824 24.198 26.862 22.123 26.151 20.273 C 25.639 18.926 24.669 17.742 23.097 16.773 C 23.097 16.773 21.391 15.783 19.5 15.839 C 17.609 15.783 15.903 16.773 15.903 16.773 C 14.331 17.742 13.36 18.926 12.849 20.273 C 12.138 22.123 12.176 24.198 12.949 26.595 C 13.412 28.032 14.113 29.552 14.89 30.886 C 16.256 33.227 17.735 35.035 17.735 35.035 C 17.735 35.035 14.13 39.472 10.44 40.212 C 8.406 40.621 6.928 40.156 5.814 39.532 C 4.877 39.012 4.184 38.19 3.705 37.501 C 3.129 36.665 2.823 35.642 2.721 34.755 C 2.642 34.075 2.679 33.429 2.743 33.029 C 2.81 32.607 2.889 32.121 3.125 31.458 C 3.495 30.425 4.054 29.228 4.054 29.228 L 6.067 24.843 L 7.142 22.493 L 9.756 16.976 L 11.735 12.913 C 11.735 12.913 12.478 11.407 13.445 9.487 C 14.021 8.342 14.68 7.051 15.29 5.854 C 15.903 4.649 16.609 3.926 17.306 3.492 C 18.395 2.812 19.395 2.838 19.5 2.842 C 19.605 2.838 20.605 2.812 21.694 3.492 C 22.391 3.926 23.097 4.649 23.71 5.854 C 24.32 7.051 24.979 8.342 25.555 9.487 C 26.521 11.407 27.265 12.913 27.265 12.913 L 29.244 16.976 L 31.858 22.493 L 32.933 24.843 L 34.946 29.228 C 34.946 29.228 35.505 30.425 35.875 31.458 C 36.111 32.121 36.19 32.607 36.257 33.029 C 36.321 33.429 36.358 34.075 36.278 34.755 Z" fill="rgb(254, 90, 95)"></path></g></svg>`,
                              },
                              qQ3t0NM9J: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 34" overflow="visible"><g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            me() &&
                            p(S, {
                              className: `framer-vzw9ty`,
                              "data-framer-name": `Logo`,
                              layoutDependency: x,
                              layoutId: `Jq5oR7gHE`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 34" overflow="visible"><path d="M 30.84 25.248 C 30.8 25.038 30.76 24.833 30.7 24.65 C 30.47 23.921 30.092 23.046 30.092 23.046 L 28.85 20.267 L 27.898 18.194 L 27.193 16.687 L 25.821 13.79 L 24.411 10.874 L 22.698 7.413 L 21.064 4.163 C 20.533 3.088 20.042 2.434 20.042 2.434 C 19.645 1.88 19.211 1.451 18.777 1.121 C 18.409 0.838 18.042 0.621 17.684 0.467 C 16.535 -0.02 15.59 -0.002 15.5 0.001 C 15.41 -0.002 14.465 -0.02 13.316 0.467 C 12.958 0.621 12.591 0.838 12.223 1.121 C 11.789 1.451 11.355 1.88 10.958 2.434 C 10.958 2.434 10.467 3.088 9.936 4.163 L 8.302 7.413 L 6.589 10.874 L 5.179 13.79 L 3.806 16.687 L 3.101 18.194 L 2.15 20.267 L 0.907 23.046 C 0.907 23.046 0.53 23.921 0.3 24.65 C 0.24 24.833 0.2 25.038 0.16 25.248 C 0.049 25.793 -0.021 26.408 0.006 27.056 C 0.093 29.41 1.322 31.507 3.081 32.724 C 3.813 33.232 4.605 33.572 5.276 33.756 C 6.228 34.018 6.946 33.998 6.946 33.998 C 6.946 33.998 8.656 34.086 10.574 33.167 C 12.1 32.442 13.736 31.18 15.467 29.233 L 15.533 29.233 C 17.264 31.18 18.9 32.442 20.426 33.167 C 22.344 34.086 24.054 33.998 24.054 33.998 C 24.054 33.998 24.772 34.018 25.723 33.756 C 26.395 33.572 27.187 33.232 27.918 32.724 C 29.678 31.507 30.907 29.41 30.994 27.056 C 31.021 26.408 30.951 25.793 30.84 25.248 Z M 15.5 25.922 C 15.393 25.793 14.007 24.095 13.105 22.237 C 11.949 19.855 11.899 18.466 12.026 17.527 C 12.16 16.557 12.641 15.883 13.118 15.474 C 13.6 15.056 14.01 14.913 14.124 14.859 C 14.345 14.754 14.698 14.675 14.942 14.641 C 15.222 14.603 15.456 14.6 15.5 14.6 C 15.543 14.6 15.777 14.603 16.058 14.641 C 16.302 14.675 16.655 14.754 16.876 14.859 C 16.989 14.913 17.4 15.056 17.882 15.474 C 18.359 15.883 18.84 16.557 18.973 17.527 C 19.1 18.466 19.051 19.855 17.895 22.237 C 16.993 24.095 15.607 25.793 15.5 25.922 Z M 28.836 27.481 C 28.756 28.182 28.513 28.991 28.055 29.652 C 27.674 30.196 27.123 30.846 26.379 31.258 C 25.493 31.751 24.317 32.119 22.701 31.796 C 19.768 31.21 16.903 27.702 16.903 27.702 C 16.903 27.702 18.078 26.273 19.164 24.421 C 19.782 23.367 20.339 22.165 20.707 21.028 C 21.322 19.133 21.352 17.492 20.787 16.03 C 20.379 14.964 19.608 14.028 18.359 13.263 C 18.359 13.263 17.003 12.48 15.5 12.524 C 13.997 12.48 12.641 13.263 12.641 13.263 C 11.392 14.028 10.62 14.964 10.213 16.03 C 9.648 17.492 9.678 19.133 10.293 21.028 C 10.661 22.165 11.218 23.367 11.836 24.421 C 12.921 26.273 14.097 27.702 14.097 27.702 C 14.097 27.702 11.232 31.21 8.299 31.796 C 6.682 32.119 5.507 31.751 4.621 31.258 C 3.877 30.846 3.326 30.196 2.945 29.652 C 2.487 28.991 2.244 28.182 2.163 27.481 C 2.1 26.943 2.13 26.432 2.18 26.116 C 2.233 25.782 2.297 25.398 2.484 24.874 C 2.778 24.057 3.222 23.111 3.222 23.111 L 4.822 19.643 L 5.677 17.785 L 7.754 13.423 L 9.327 10.21 C 9.327 10.21 9.918 9.019 10.687 7.502 C 11.145 6.596 11.669 5.575 12.154 4.629 C 12.641 3.676 13.202 3.104 13.756 2.761 C 14.622 2.223 15.416 2.244 15.5 2.247 C 15.584 2.244 16.378 2.223 17.244 2.761 C 17.798 3.104 18.359 3.676 18.846 4.629 C 19.331 5.575 19.855 6.596 20.313 7.502 C 21.081 9.019 21.673 10.21 21.673 10.21 L 23.246 13.423 L 25.323 17.785 L 26.178 19.643 L 27.778 23.111 C 27.778 23.111 28.222 24.057 28.516 24.874 C 28.703 25.398 28.767 25.782 28.82 26.116 C 28.87 26.432 28.9 26.943 28.836 27.481 Z" fill="rgb(249,249,249)"></path></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "d4wNECWpc-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 43" overflow="visible"><path d="M 38.799 31.932 C 38.749 31.665 38.699 31.407 38.623 31.175 C 38.333 30.253 37.858 29.147 37.858 29.147 L 36.295 25.631 L 35.097 23.01 L 34.211 21.104 L 32.484 17.441 L 30.711 13.752 L 28.556 9.375 L 26.5 5.265 C 25.832 3.905 25.214 3.078 25.214 3.078 C 24.715 2.377 24.168 1.835 23.622 1.417 C 23.16 1.06 22.698 0.785 22.248 0.591 C 20.803 -0.025 19.613 -0.003 19.5 0.001 C 19.387 -0.003 18.197 -0.025 16.752 0.591 C 16.302 0.785 15.84 1.06 15.378 1.417 C 14.832 1.835 14.285 2.377 13.786 3.078 C 13.786 3.078 13.168 3.905 12.5 5.265 L 10.444 9.375 L 8.289 13.752 L 6.516 17.441 L 4.789 21.104 L 3.902 23.01 L 2.705 25.631 L 1.141 29.147 C 1.141 29.147 0.667 30.253 0.377 31.175 C 0.301 31.407 0.251 31.665 0.201 31.932 C 0.062 32.62 -0.027 33.399 0.007 34.217 C 0.117 37.195 1.663 39.847 3.877 41.387 C 4.797 42.028 5.793 42.459 6.637 42.691 C 7.836 43.023 8.739 42.997 8.739 42.997 C 8.739 42.997 10.89 43.109 13.302 41.947 C 15.222 41.03 17.281 39.434 19.458 36.971 L 19.542 36.971 C 21.719 39.434 23.778 41.03 25.698 41.947 C 28.11 43.109 30.261 42.997 30.261 42.997 C 30.261 42.997 31.164 43.023 32.362 42.691 C 33.207 42.459 34.203 42.028 35.122 41.387 C 37.337 39.847 38.883 37.195 38.993 34.217 C 39.027 33.399 38.938 32.62 38.799 31.932 Z M 19.5 32.784 C 19.365 32.62 17.621 30.473 16.487 28.123 C 15.033 25.11 14.97 23.354 15.129 22.166 C 15.298 20.939 15.903 20.088 16.504 19.571 C 17.109 19.042 17.626 18.861 17.769 18.792 C 18.046 18.659 18.491 18.559 18.799 18.517 C 19.151 18.469 19.445 18.465 19.5 18.465 C 19.554 18.465 19.848 18.469 20.201 18.517 C 20.509 18.559 20.954 18.659 21.231 18.792 C 21.374 18.861 21.891 19.042 22.496 19.571 C 23.097 20.088 23.702 20.939 23.87 22.166 C 24.029 23.354 23.967 25.11 22.513 28.123 C 21.378 30.473 19.634 32.62 19.5 32.784 Z M 36.278 34.755 C 36.177 35.642 35.871 36.665 35.295 37.501 C 34.816 38.19 34.123 39.012 33.186 39.532 C 32.072 40.156 30.593 40.621 28.559 40.212 C 24.87 39.472 21.265 35.035 21.265 35.035 C 21.265 35.035 22.744 33.227 24.109 30.886 C 24.886 29.552 25.588 28.032 26.051 26.595 C 26.824 24.198 26.862 22.123 26.151 20.273 C 25.639 18.926 24.669 17.742 23.097 16.773 C 23.097 16.773 21.391 15.783 19.5 15.839 C 17.609 15.783 15.903 16.773 15.903 16.773 C 14.331 17.742 13.36 18.926 12.849 20.273 C 12.138 22.123 12.176 24.198 12.949 26.595 C 13.412 28.032 14.113 29.552 14.89 30.886 C 16.256 33.227 17.735 35.035 17.735 35.035 C 17.735 35.035 14.13 39.472 10.44 40.212 C 8.406 40.621 6.928 40.156 5.814 39.532 C 4.877 39.012 4.184 38.19 3.705 37.501 C 3.129 36.665 2.823 35.642 2.721 34.755 C 2.642 34.075 2.679 33.429 2.743 33.029 C 2.81 32.607 2.889 32.121 3.125 31.458 C 3.495 30.425 4.054 29.228 4.054 29.228 L 6.067 24.843 L 7.142 22.493 L 9.756 16.976 L 11.735 12.913 C 11.735 12.913 12.478 11.407 13.445 9.487 C 14.021 8.342 14.68 7.051 15.29 5.854 C 15.903 4.649 16.609 3.926 17.306 3.492 C 18.395 2.812 19.395 2.838 19.5 2.842 C 19.605 2.838 20.605 2.812 21.694 3.492 C 22.391 3.926 23.097 4.649 23.71 5.854 C 24.32 7.051 24.979 8.342 25.555 9.487 C 26.521 11.407 27.265 12.913 27.265 12.913 L 29.244 16.976 L 31.858 22.493 L 32.933 24.843 L 34.946 29.228 C 34.946 29.228 35.505 30.425 35.875 31.458 C 36.111 32.121 36.19 32.607 36.257 33.029 C 36.321 33.429 36.358 34.075 36.278 34.755 Z" fill="rgb(254, 90, 95)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-fk6xos`,
                                  layoutDependency: x,
                                  layoutId: `LPFHMket0`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 34" overflow="visible"><path d="M 30.84 25.248 C 30.8 25.038 30.76 24.833 30.7 24.65 C 30.47 23.921 30.092 23.046 30.092 23.046 L 28.85 20.267 L 27.898 18.194 L 27.193 16.687 L 25.821 13.79 L 24.411 10.874 L 22.698 7.413 L 21.064 4.163 C 20.533 3.088 20.042 2.434 20.042 2.434 C 19.645 1.88 19.211 1.451 18.777 1.121 C 18.409 0.838 18.042 0.621 17.684 0.467 C 16.535 -0.02 15.59 -0.002 15.5 0.001 C 15.41 -0.002 14.465 -0.02 13.316 0.467 C 12.958 0.621 12.591 0.838 12.223 1.121 C 11.789 1.451 11.355 1.88 10.958 2.434 C 10.958 2.434 10.467 3.088 9.936 4.163 L 8.302 7.413 L 6.589 10.874 L 5.179 13.79 L 3.806 16.687 L 3.101 18.194 L 2.15 20.267 L 0.907 23.046 C 0.907 23.046 0.53 23.921 0.3 24.65 C 0.24 24.833 0.2 25.038 0.16 25.248 C 0.049 25.793 -0.021 26.408 0.006 27.056 C 0.093 29.41 1.322 31.507 3.081 32.724 C 3.813 33.232 4.605 33.572 5.276 33.756 C 6.228 34.018 6.946 33.998 6.946 33.998 C 6.946 33.998 8.656 34.086 10.574 33.167 C 12.1 32.442 13.736 31.18 15.467 29.233 L 15.533 29.233 C 17.264 31.18 18.9 32.442 20.426 33.167 C 22.344 34.086 24.054 33.998 24.054 33.998 C 24.054 33.998 24.772 34.018 25.723 33.756 C 26.395 33.572 27.187 33.232 27.918 32.724 C 29.678 31.507 30.907 29.41 30.994 27.056 C 31.021 26.408 30.951 25.793 30.84 25.248 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "d4wNECWpc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 43" overflow="visible"><path d="M 38.799 31.932 C 38.749 31.665 38.699 31.407 38.623 31.175 C 38.333 30.253 37.858 29.147 37.858 29.147 L 36.295 25.631 L 35.097 23.01 L 34.211 21.104 L 32.484 17.441 L 30.711 13.752 L 28.556 9.375 L 26.5 5.265 C 25.832 3.905 25.214 3.078 25.214 3.078 C 24.715 2.377 24.168 1.835 23.622 1.417 C 23.16 1.06 22.698 0.785 22.248 0.591 C 20.803 -0.025 19.613 -0.003 19.5 0.001 C 19.387 -0.003 18.197 -0.025 16.752 0.591 C 16.302 0.785 15.84 1.06 15.378 1.417 C 14.832 1.835 14.285 2.377 13.786 3.078 C 13.786 3.078 13.168 3.905 12.5 5.265 L 10.444 9.375 L 8.289 13.752 L 6.516 17.441 L 4.789 21.104 L 3.902 23.01 L 2.705 25.631 L 1.141 29.147 C 1.141 29.147 0.667 30.253 0.377 31.175 C 0.301 31.407 0.251 31.665 0.201 31.932 C 0.062 32.62 -0.027 33.399 0.007 34.217 C 0.117 37.195 1.663 39.847 3.877 41.387 C 4.797 42.028 5.793 42.459 6.637 42.691 C 7.836 43.023 8.739 42.997 8.739 42.997 C 8.739 42.997 10.89 43.109 13.302 41.947 C 15.222 41.03 17.281 39.434 19.458 36.971 L 19.542 36.971 C 21.719 39.434 23.778 41.03 25.698 41.947 C 28.11 43.109 30.261 42.997 30.261 42.997 C 30.261 42.997 31.164 43.023 32.362 42.691 C 33.207 42.459 34.203 42.028 35.122 41.387 C 37.337 39.847 38.883 37.195 38.993 34.217 C 39.027 33.399 38.938 32.62 38.799 31.932 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-zamhhl`,
                                  layoutDependency: x,
                                  layoutId: `rzA8LN6Df`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.044 11.322" overflow="visible"><path d="M 3.522 11.322 C 3.415 11.192 2.029 9.494 1.127 7.636 C -0.028 5.254 -0.079 3.865 0.048 2.927 C 0.182 1.956 0.663 1.283 1.141 0.874 C 1.622 0.456 2.032 0.313 2.146 0.259 C 2.367 0.153 2.72 0.074 2.965 0.041 C 3.245 0.003 3.478 0 3.522 0 C 3.565 0 3.799 0.003 4.08 0.041 C 4.324 0.074 4.678 0.153 4.898 0.259 C 5.011 0.313 5.422 0.456 5.904 0.874 C 6.381 1.283 6.862 1.956 6.995 2.927 C 7.122 3.865 7.073 5.254 5.917 7.636 C 5.015 9.494 3.629 11.192 3.522 11.322 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "d4wNECWpc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.861 14.319" overflow="visible"><path d="M 4.431 14.319 C 4.296 14.155 2.552 12.007 1.418 9.658 C -0.036 6.645 -0.099 4.888 0.061 3.701 C 0.229 2.474 0.834 1.623 1.435 1.105 C 2.04 0.577 2.557 0.395 2.7 0.327 C 2.977 0.194 3.423 0.094 3.73 0.052 C 4.082 0.004 4.376 0 4.431 0 C 4.485 0 4.779 0.004 5.133 0.052 C 5.44 0.094 5.885 0.194 6.162 0.327 C 6.305 0.395 6.822 0.577 7.427 1.105 C 8.028 1.623 8.633 2.474 8.801 3.701 C 8.96 4.888 8.898 6.645 7.444 9.658 C 6.309 12.007 4.565 14.155 4.431 14.319 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-14d42bn`,
                                  layoutDependency: x,
                                  layoutId: `WTsqAAK70`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.745 29.671" overflow="visible"><path d="M 26.709 25.234 C 26.629 25.936 26.386 26.745 25.928 27.406 C 25.547 27.95 24.996 28.6 24.251 29.012 C 23.366 29.505 22.19 29.873 20.573 29.549 C 17.641 28.964 14.776 25.456 14.776 25.456 C 14.776 25.456 15.951 24.027 17.036 22.175 C 17.654 21.12 18.212 19.919 18.58 18.782 C 19.194 16.887 19.224 15.246 18.66 13.783 C 18.252 12.718 17.481 11.782 16.231 11.016 C 16.231 11.016 14.876 10.234 13.372 10.278 C 11.87 10.234 10.514 11.016 10.514 11.016 C 9.264 11.782 8.492 12.718 8.086 13.783 C 7.521 15.246 7.551 16.887 8.166 18.782 C 8.533 19.919 9.09 21.12 9.708 22.175 C 10.794 24.027 11.97 25.456 11.97 25.456 C 11.97 25.456 9.104 28.964 6.171 29.549 C 4.555 29.873 3.38 29.505 2.494 29.012 C 1.749 28.6 1.198 27.95 0.818 27.406 C 0.36 26.745 0.116 25.936 0.036 25.234 C -0.027 24.697 0.002 24.186 0.053 23.87 C 0.106 23.536 0.169 23.152 0.356 22.628 C 0.651 21.811 1.095 20.865 1.095 20.865 L 2.695 17.397 L 3.55 15.539 L 5.627 11.177 L 7.2 7.964 C 7.2 7.964 7.791 6.773 8.559 5.255 C 9.017 4.35 9.541 3.329 10.026 2.383 C 10.514 1.43 11.074 0.858 11.629 0.515 C 12.494 -0.023 13.289 -0.003 13.372 0.001 C 13.456 -0.003 14.251 -0.023 15.116 0.515 C 15.671 0.858 16.231 1.43 16.719 2.383 C 17.204 3.329 17.728 4.35 18.185 5.255 C 18.953 6.773 19.545 7.964 19.545 7.964 L 21.118 11.177 L 23.195 15.539 L 24.051 17.397 L 25.65 20.865 C 25.65 20.865 26.095 21.811 26.388 22.628 C 26.576 23.152 26.639 23.536 26.692 23.87 C 26.743 24.186 26.772 24.697 26.709 25.234 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "d4wNECWpc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.647 37.526" overflow="visible"><path d="M 33.602 31.914 C 33.501 32.801 33.195 33.825 32.619 34.66 C 32.14 35.349 31.447 36.171 30.51 36.692 C 29.396 37.315 27.916 37.78 25.883 37.371 C 22.194 36.631 18.589 32.194 18.589 32.194 C 18.589 32.194 20.067 30.387 21.433 28.045 C 22.21 26.711 22.912 25.192 23.374 23.754 C 24.147 21.357 24.186 19.282 23.475 17.432 C 22.962 16.085 21.992 14.901 20.42 13.933 C 20.42 13.933 18.715 12.943 16.823 12.999 C 14.933 12.943 13.227 13.933 13.227 13.933 C 11.655 14.901 10.684 16.085 10.172 17.432 C 9.462 19.282 9.5 21.357 10.273 23.754 C 10.735 25.192 11.436 26.711 12.214 28.045 C 13.579 30.387 15.059 32.194 15.059 32.194 C 15.059 32.194 11.454 36.631 7.764 37.371 C 5.73 37.78 4.252 37.315 3.138 36.692 C 2.201 36.171 1.507 35.349 1.029 34.66 C 0.452 33.825 0.146 32.801 0.045 31.914 C -0.034 31.234 0.003 30.588 0.066 30.188 C 0.133 29.766 0.213 29.28 0.448 28.617 C 0.819 27.585 1.377 26.388 1.377 26.388 L 3.39 22.002 L 4.466 19.653 L 7.079 14.135 L 9.058 10.072 C 9.058 10.072 9.802 8.566 10.768 6.647 C 11.344 5.501 12.004 4.21 12.614 3.014 C 13.227 1.809 13.932 1.085 14.63 0.651 C 15.719 -0.029 16.718 -0.003 16.823 0.001 C 16.929 -0.003 17.929 -0.029 19.017 0.651 C 19.715 1.085 20.42 1.809 21.034 3.014 C 21.644 4.21 22.303 5.501 22.878 6.647 C 23.845 8.566 24.589 10.072 24.589 10.072 L 26.568 14.135 L 29.181 19.653 L 30.257 22.002 L 32.27 26.388 C 32.27 26.388 32.829 27.585 33.198 28.617 C 33.434 29.28 33.514 29.766 33.581 30.188 C 33.644 30.588 33.682 31.234 33.602 31.914 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      he() &&
                        l(S, {
                          className: `framer-1ifzgjr`,
                          "data-framer-name": `Amazon logo`,
                          layoutDependency: x,
                          layoutId: `V_OvBGOrN`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 35" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "uEPyMafyX-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44.834" overflow="visible"><g><g transform="translate(0 0)"><path d="M 39.877 38.508 C 35.189 42.37 28.274 44.588 22.262 44.812 C 13.836 45.125 6.137 42.179 0.208 37.02 C -0.257 36.615 0.125 36.023 0.678 36.33 C 7.003 39.835 14.741 41.8 22.655 41.506 C 27.993 41.308 33.82 39.942 39.137 37.368 C 39.94 36.98 40.653 37.869 39.877 38.508 Z" fill="rgb(255,153,0)"></path><path d="M 41.799 36.063 C 41.155 35.269 37.713 35.827 36.168 36.077 C 35.7 36.153 35.613 35.73 36.025 35.406 C 38.713 33.298 43.25 33.709 43.798 34.361 C 44.351 35.02 43.845 39.736 41.339 42.072 C 40.953 42.431 40.569 42.262 40.73 41.8 C 41.259 40.274 42.444 36.858 41.799 36.063 Z" fill="rgb(255,153,0)"></path><path d="M 24.819 19.47 C 24.819 21.845 24.878 23.825 23.669 25.937 C 22.692 27.653 21.14 28.709 19.414 28.709 C 17.056 28.709 15.675 26.927 15.675 24.287 C 15.675 19.094 20.372 18.15 24.819 18.15 Z M 31.018 34.336 L 31.032 34.35 C 32.26 33.267 34.491 31.345 35.747 30.3 C 36.248 29.895 36.159 29.235 35.767 28.681 C 34.644 27.141 33.447 25.887 33.447 23.03 L 33.447 13.53 C 33.447 9.504 33.734 5.808 30.743 3.036 C 28.385 0.792 24.475 0 21.483 0 C 15.632 0 9.104 2.166 7.735 9.336 C 7.59 10.097 8.149 10.497 8.652 10.61 L 14.611 11.25 C 15.17 11.222 15.573 10.678 15.68 10.129 C 16.191 7.66 18.276 6.468 20.622 6.468 C 21.886 6.468 23.324 6.929 24.072 8.051 C 24.935 9.305 24.819 11.021 24.819 12.473 L 24.819 13.265 C 21.253 13.661 16.595 13.925 13.259 15.377 C 9.405 17.028 6.702 20.393 6.702 25.343 C 6.702 31.678 10.728 34.846 15.905 34.846 C 20.276 34.846 22.667 33.823 26.041 30.414 C 27.157 32.016 27.523 32.794 29.565 34.477 C 30.023 34.722 30.611 34.697 31.018 34.335 Z" fill="rgb(0, 0, 0)"></path></g></g></svg>`,
                              },
                              uEPyMafyX: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 35" overflow="visible"><g><g transform="translate(0 0)"><path d="M 28.095 30.731 C 24.792 33.337 19.92 34.834 15.685 34.985 C 9.748 35.196 4.324 33.208 0.147 29.727 C -0.181 29.454 0.088 29.054 0.478 29.261 C 4.934 31.627 10.386 32.953 15.961 32.754 C 19.722 32.621 23.828 31.699 27.574 29.962 C 28.139 29.7 28.642 30.3 28.095 30.731 Z" fill="rgb(255,153,0)"></path><path d="M 29.45 29.081 C 28.996 28.545 26.571 28.922 25.482 29.091 C 25.153 29.142 25.091 28.857 25.382 28.638 C 27.275 27.215 30.472 27.493 30.858 27.933 C 31.247 28.377 30.891 31.56 29.125 33.136 C 28.854 33.378 28.583 33.264 28.696 32.953 C 29.069 31.923 29.903 29.618 29.45 29.081 Z" fill="rgb(255,153,0)"></path><path d="M 17.344 15.487 C 17.344 17.377 17.39 18.952 16.43 20.632 C 15.653 21.997 14.419 22.837 13.047 22.837 C 11.172 22.837 10.075 21.419 10.075 19.319 C 10.075 15.188 13.808 14.437 17.344 14.437 Z M 22.271 27.313 L 22.282 27.324 C 23.258 26.462 25.032 24.933 26.03 24.103 C 26.428 23.78 26.358 23.255 26.046 22.814 C 25.153 21.59 24.201 20.592 24.201 18.319 L 24.201 10.763 C 24.201 7.56 24.43 4.62 22.052 2.415 C 20.178 0.63 17.07 0 14.692 0 C 10.041 0 4.852 1.723 3.764 7.426 C 3.648 8.032 4.093 8.35 4.493 8.44 L 9.229 8.949 C 9.673 8.926 9.994 8.494 10.079 8.057 C 10.485 6.093 12.143 5.145 14.007 5.145 C 15.012 5.145 16.155 5.512 16.75 6.405 C 17.435 7.401 17.344 8.767 17.344 9.922 L 17.344 10.552 C 14.509 10.867 10.806 11.076 8.154 12.232 C 5.092 13.545 2.943 16.222 2.943 20.159 C 2.943 25.199 6.143 27.718 10.258 27.718 C 13.732 27.718 15.632 26.905 18.315 24.193 C 19.202 25.467 19.492 26.086 21.116 27.425 C 21.48 27.62 21.947 27.6 22.271 27.312 Z" fill="rgb(255, 255, 255)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            ge() &&
                            p(S, {
                              className: `framer-vo11gs`,
                              "data-framer-name": `Amazon logo`,
                              layoutDependency: x,
                              layoutId: `lEXr2bvqB`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 35" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "uEPyMafyX-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44.834" overflow="visible"><g><path d="M 39.877 38.508 C 35.189 42.37 28.274 44.588 22.262 44.812 C 13.836 45.125 6.137 42.179 0.208 37.02 C -0.257 36.615 0.125 36.023 0.678 36.33 C 7.003 39.835 14.741 41.8 22.655 41.506 C 27.993 41.308 33.82 39.942 39.137 37.368 C 39.94 36.98 40.653 37.869 39.877 38.508 Z" fill="rgb(255,153,0)"></path><path d="M 41.799 36.063 C 41.155 35.269 37.713 35.827 36.168 36.077 C 35.7 36.153 35.613 35.73 36.025 35.406 C 38.713 33.298 43.25 33.709 43.798 34.361 C 44.351 35.02 43.845 39.736 41.339 42.072 C 40.953 42.431 40.569 42.262 40.73 41.8 C 41.259 40.274 42.444 36.858 41.799 36.063 Z" fill="rgb(255,153,0)"></path><path d="M 24.819 19.47 C 24.819 21.845 24.878 23.825 23.669 25.937 C 22.692 27.653 21.14 28.709 19.414 28.709 C 17.056 28.709 15.675 26.927 15.675 24.287 C 15.675 19.094 20.372 18.15 24.819 18.15 Z M 31.018 34.336 L 31.032 34.35 C 32.26 33.267 34.491 31.345 35.747 30.3 C 36.248 29.895 36.159 29.235 35.767 28.681 C 34.644 27.141 33.447 25.887 33.447 23.03 L 33.447 13.53 C 33.447 9.504 33.734 5.808 30.743 3.036 C 28.385 0.792 24.475 0 21.483 0 C 15.632 0 9.104 2.166 7.735 9.336 C 7.59 10.097 8.149 10.497 8.652 10.61 L 14.611 11.25 C 15.17 11.222 15.573 10.678 15.68 10.129 C 16.191 7.66 18.276 6.468 20.622 6.468 C 21.886 6.468 23.324 6.929 24.072 8.051 C 24.935 9.305 24.819 11.021 24.819 12.473 L 24.819 13.265 C 21.253 13.661 16.595 13.925 13.259 15.377 C 9.405 17.028 6.702 20.393 6.702 25.343 C 6.702 31.678 10.728 34.846 15.905 34.846 C 20.276 34.846 22.667 33.823 26.041 30.414 C 27.157 32.016 27.523 32.794 29.565 34.477 C 30.023 34.722 30.611 34.697 31.018 34.335 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  },
                                  uEPyMafyX: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 35" overflow="visible"><g><path d="M 28.095 30.731 C 24.792 33.337 19.92 34.834 15.685 34.985 C 9.748 35.196 4.324 33.208 0.147 29.727 C -0.181 29.454 0.088 29.054 0.478 29.261 C 4.934 31.627 10.386 32.953 15.961 32.754 C 19.722 32.621 23.828 31.699 27.574 29.962 C 28.139 29.7 28.642 30.3 28.095 30.731 Z" fill="rgb(255,153,0)"></path><path d="M 29.45 29.081 C 28.996 28.545 26.571 28.922 25.482 29.091 C 25.153 29.142 25.091 28.857 25.382 28.638 C 27.275 27.215 30.472 27.493 30.858 27.933 C 31.247 28.377 30.891 31.56 29.125 33.136 C 28.854 33.378 28.583 33.264 28.696 32.953 C 29.069 31.923 29.903 29.618 29.45 29.081 Z" fill="rgb(255,153,0)"></path><path d="M 17.344 15.487 C 17.344 17.377 17.39 18.952 16.43 20.632 C 15.653 21.997 14.419 22.837 13.047 22.837 C 11.172 22.837 10.075 21.419 10.075 19.319 C 10.075 15.188 13.808 14.437 17.344 14.437 Z M 22.271 27.313 L 22.282 27.324 C 23.258 26.462 25.032 24.933 26.03 24.103 C 26.428 23.78 26.358 23.255 26.046 22.814 C 25.153 21.59 24.201 20.592 24.201 18.319 L 24.201 10.763 C 24.201 7.56 24.43 4.62 22.052 2.415 C 20.178 0.63 17.07 0 14.692 0 C 10.041 0 4.852 1.723 3.764 7.426 C 3.648 8.032 4.093 8.35 4.493 8.44 L 9.229 8.949 C 9.673 8.926 9.994 8.494 10.079 8.057 C 10.485 6.093 12.143 5.145 14.007 5.145 C 15.012 5.145 16.155 5.512 16.75 6.405 C 17.435 7.401 17.344 8.767 17.344 9.922 L 17.344 10.552 C 14.509 10.867 10.806 11.076 8.154 12.232 C 5.092 13.545 2.943 16.222 2.943 20.159 C 2.943 25.199 6.143 27.718 10.258 27.718 C 13.732 27.718 15.632 26.905 18.315 24.193 C 19.202 25.467 19.492 26.086 21.116 27.425 C 21.48 27.62 21.947 27.6 22.271 27.312 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1929d3f`,
                                  layoutDependency: x,
                                  layoutId: `k8aRTRBod`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.331 5.796" overflow="visible"><path d="M 28.095 1.527 C 24.792 4.133 19.92 5.63 15.685 5.781 C 9.748 5.992 4.324 4.004 0.147 0.523 C -0.181 0.25 0.088 -0.15 0.478 0.057 C 4.934 2.423 10.386 3.749 15.961 3.55 C 19.722 3.417 23.828 2.495 27.574 0.758 C 28.139 0.496 28.642 1.096 28.095 1.527 Z" fill="rgb(255,153,0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "uEPyMafyX-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.211 8.589" overflow="visible"><path d="M 39.877 2.263 C 35.189 6.125 28.274 8.343 22.262 8.567 C 13.836 8.88 6.137 5.934 0.208 0.775 C -0.257 0.37 0.125 -0.222 0.678 0.085 C 7.003 3.59 14.741 5.555 22.655 5.261 C 27.993 5.064 33.82 3.697 39.137 1.124 C 39.94 0.735 40.653 1.624 39.877 2.263 Z" fill="rgb(255,153,0)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-ssp7f0`,
                                  layoutDependency: x,
                                  layoutId: `mTnaXvbEo`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.805 5.689" overflow="visible"><path d="M 4.254 1.504 C 3.8 0.968 1.376 1.345 0.287 1.513 C -0.043 1.565 -0.105 1.279 0.186 1.061 C 2.08 -0.362 5.276 -0.084 5.662 0.355 C 6.052 0.8 5.696 3.982 3.93 5.559 C 3.658 5.801 3.388 5.687 3.501 5.375 C 3.874 4.345 4.708 2.04 4.254 1.504 Z" fill="rgb(255,153,0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "uEPyMafyX-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.239 8.431" overflow="visible"><path d="M 6.038 2.229 C 5.394 1.434 1.952 1.993 0.407 2.243 C -0.061 2.319 -0.148 1.896 0.264 1.572 C 2.952 -0.537 7.489 -0.125 8.037 0.527 C 8.59 1.185 8.084 5.902 5.578 8.238 C 5.192 8.597 4.809 8.428 4.969 7.966 C 5.498 6.44 6.683 3.023 6.038 2.229 Z" fill="rgb(255,153,0)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                p(S, {
                                  className: `framer-9w7xfa`,
                                  layoutDependency: x,
                                  layoutId: `vy1wa8rvz`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.362 27.718" overflow="visible"><path d="M 14.401 15.487 C 14.401 17.377 14.447 18.952 13.487 20.632 C 12.71 21.997 11.476 22.837 10.104 22.837 C 8.23 22.837 7.132 21.419 7.132 19.319 C 7.132 15.188 10.866 14.437 14.401 14.437 Z M 19.328 27.313 L 19.339 27.324 C 20.315 26.462 22.089 24.933 23.087 24.103 C 23.485 23.78 23.415 23.255 23.103 22.814 C 22.21 21.59 21.259 20.592 21.259 18.319 L 21.259 10.763 C 21.259 7.56 21.487 4.62 19.11 2.415 C 17.235 0.63 14.127 0 11.749 0 C 7.098 0 1.909 1.723 0.821 7.426 C 0.705 8.032 1.15 8.35 1.55 8.44 L 6.287 8.949 C 6.731 8.926 7.051 8.494 7.136 8.057 C 7.543 6.093 9.2 5.145 11.064 5.145 C 12.069 5.145 13.212 5.512 13.807 6.405 C 14.493 7.401 14.401 8.767 14.401 9.922 L 14.401 10.552 C 11.566 10.867 7.863 11.076 5.212 12.232 C 2.149 13.545 0 16.222 0 20.159 C 0 25.199 3.2 27.718 7.315 27.718 C 10.79 27.718 12.69 26.905 15.372 24.193 C 16.259 25.467 16.55 26.086 18.173 27.425 C 18.538 27.62 19.004 27.6 19.328 27.312 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "uEPyMafyX-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.39 34.846" overflow="visible"><path d="M 18.117 19.47 C 18.117 21.845 18.175 23.825 16.967 25.937 C 15.99 27.653 14.438 28.709 12.711 28.709 C 10.353 28.709 8.973 26.927 8.973 24.287 C 8.973 19.094 13.67 18.15 18.117 18.15 Z M 24.316 34.336 L 24.33 34.35 C 25.558 33.267 27.789 31.345 29.045 30.3 C 29.545 29.895 29.457 29.235 29.065 28.681 C 27.942 27.141 26.745 25.887 26.745 23.03 L 26.745 13.53 C 26.745 9.504 27.032 5.808 24.041 3.036 C 21.683 0.792 17.773 0 14.781 0 C 8.93 0 2.402 2.166 1.033 9.336 C 0.887 10.097 1.447 10.497 1.95 10.61 L 7.909 11.25 C 8.467 11.222 8.871 10.678 8.978 10.129 C 9.489 7.66 11.574 6.468 13.919 6.468 C 15.184 6.468 16.622 6.929 17.37 8.051 C 18.233 9.305 18.117 11.021 18.117 12.473 L 18.117 13.265 C 14.551 13.661 9.893 13.925 6.557 15.377 C 2.703 17.028 0 20.393 0 25.343 C 0 31.678 4.026 34.846 9.203 34.846 C 13.574 34.846 15.965 33.823 19.339 30.414 C 20.455 32.016 20.821 32.794 22.863 34.477 C 23.321 34.722 23.909 34.697 24.316 34.335 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-kv9gtm`,
                                      layoutDependency: x,
                                      layoutId: `IFvgJr2Bt`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.269 8.4" overflow="visible"><path d="M 7.269 1.05 C 7.269 2.94 7.315 4.515 6.355 6.195 C 5.578 7.56 4.344 8.4 2.972 8.4 C 1.098 8.4 0 6.982 0 4.882 C 0 0.751 3.734 0 7.269 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "uEPyMafyX-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.145 10.559" overflow="visible"><path d="M 9.145 1.32 C 9.145 3.696 9.203 5.676 7.995 7.788 C 7.017 9.504 5.465 10.559 3.739 10.559 C 1.381 10.559 0 8.777 0 6.138 C 0 0.945 4.697 0 9.145 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1hqcdtr`,
                                      layoutDependency: x,
                                      layoutId: `opxT5usL2`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.362 27.718" overflow="visible"><path d="M 19.328 27.312 C 19.004 27.6 18.538 27.62 18.173 27.425 C 16.55 26.086 16.259 25.467 15.372 24.193 C 12.69 26.905 10.79 27.718 7.315 27.718 C 3.2 27.718 0 25.199 0 20.159 C 0 16.222 2.149 13.545 5.212 12.232 C 7.863 11.076 11.566 10.867 14.401 10.552 L 14.401 9.922 C 14.401 8.767 14.493 7.401 13.807 6.405 C 13.212 5.512 12.069 5.145 11.064 5.145 C 9.2 5.145 7.543 6.093 7.136 8.057 C 7.051 8.494 6.731 8.926 6.287 8.949 L 1.55 8.44 C 1.15 8.35 0.705 8.032 0.821 7.426 C 1.909 1.723 7.098 0 11.749 0 C 14.127 0 17.235 0.63 19.11 2.415 C 21.487 4.62 21.259 7.56 21.259 10.763 L 21.259 18.319 C 21.259 20.592 22.21 21.59 23.103 22.814 C 23.415 23.255 23.485 23.78 23.087 24.103 C 22.089 24.933 20.315 26.462 19.339 27.324 L 19.328 27.313 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "uEPyMafyX-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.39 34.846" overflow="visible"><path d="M 24.316 34.335 C 23.909 34.697 23.321 34.722 22.863 34.477 C 20.821 32.794 20.455 32.016 19.339 30.414 C 15.965 33.823 13.574 34.846 9.203 34.846 C 4.026 34.846 0 31.678 0 25.343 C 0 20.393 2.703 17.028 6.557 15.377 C 9.893 13.925 14.551 13.661 18.117 13.265 L 18.117 12.473 C 18.117 11.021 18.233 9.305 17.37 8.051 C 16.622 6.929 15.184 6.468 13.919 6.468 C 11.574 6.468 9.489 7.66 8.978 10.129 C 8.871 10.678 8.467 11.222 7.909 11.25 L 1.95 10.61 C 1.447 10.497 0.887 10.097 1.033 9.336 C 2.402 2.166 8.93 0 14.781 0 C 17.773 0 21.683 0.792 24.041 3.036 C 27.032 5.808 26.745 9.504 26.745 13.53 L 26.745 23.03 C 26.745 25.887 27.942 27.141 29.065 28.681 C 29.457 29.235 29.545 29.895 29.045 30.3 C 27.789 31.345 25.558 33.267 24.33 34.35 L 24.316 34.336 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      C() &&
                        l(S, {
                          className: `framer-ly8epq`,
                          "data-framer-name": `Behance logo`,
                          layoutDependency: x,
                          layoutId: `BTPCoe2gZ`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 24" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "kDNHbEi2J-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 33" overflow="visible"><g><g><defs><linearGradient id="idslpkUk7XXyBTPCoe2gZ_2g2030436413" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(7, 101, 239)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(38, 36, 168)" stop-opacity="1"></stop></linearGradient></defs><path d="M 26.178 24.494 C 26.178 25.888 25.904 27.113 25.355 28.166 C 24.805 29.219 24.05 30.103 23.089 30.815 C 22.128 31.529 21.014 32.07 19.748 32.442 C 18.482 32.814 17.131 32.999 15.697 32.999 L 0 32.999 L 0 0 L 17.391 0 C 18.52 0 19.542 0.249 20.457 0.744 C 21.373 1.24 22.15 1.882 22.79 2.673 C 23.432 3.462 23.927 4.362 24.279 5.368 C 24.629 6.375 24.805 7.39 24.805 8.413 C 24.805 10.024 24.408 11.535 23.616 12.944 C 22.822 14.354 21.662 15.4 20.137 16.081 C 21.998 16.639 23.47 17.639 24.554 19.079 C 25.637 20.52 26.179 22.325 26.179 24.493 Z M 6.315 5.485 L 6.315 13.804 L 14.736 13.804 C 15.804 13.804 16.712 13.432 17.459 12.688 C 18.205 11.945 18.58 10.923 18.58 9.621 C 18.58 8.32 18.237 7.344 17.549 6.601 C 16.864 5.857 16.016 5.486 15.01 5.486 L 6.314 5.486 Z M 19.817 23.285 C 19.817 22.697 19.717 22.131 19.52 21.588 C 19.321 21.047 19.054 20.574 18.719 20.171 C 18.383 19.769 17.987 19.45 17.529 19.218 C 17.071 18.985 16.568 18.87 16.019 18.87 L 6.317 18.87 L 6.317 27.56 L 15.699 27.56 C 16.279 27.56 16.821 27.452 17.324 27.235 C 17.827 27.019 18.262 26.717 18.629 26.33 C 18.995 25.943 19.284 25.486 19.498 24.958 C 19.711 24.432 19.818 23.874 19.818 23.285 Z M 39.858 32.999 C 37.996 32.999 36.311 32.676 34.803 32.031 C 31.816 30.739 29.71 28.57 28.484 25.523 C 27.907 24.053 27.62 22.507 27.62 20.885 C 27.62 19.264 27.901 17.621 28.462 16.134 C 29.665 13.049 31.772 10.85 34.781 9.537 C 36.304 8.877 38.011 8.546 39.903 8.546 C 41.795 8.546 43.487 8.877 44.98 9.537 C 49.888 11.71 52.199 16.54 51.987 21.786 C 51.971 22.146 51.934 22.447 51.875 22.687 L 33.916 22.687 C 34.004 23.618 34.227 24.443 34.581 25.164 C 34.936 25.884 35.394 26.5 35.955 27.011 C 36.516 27.521 37.153 27.912 37.862 28.182 C 38.571 28.452 39.309 28.588 40.079 28.588 C 41.261 28.588 42.378 28.294 43.427 27.709 C 44.476 27.124 45.193 26.352 45.578 25.39 L 50.678 26.831 C 49.82 28.633 48.454 30.111 46.576 31.267 C 44.699 32.423 42.459 33 39.858 33 Z M 45.89 18.768 C 45.741 16.998 45.099 15.578 43.96 14.512 C 42.821 13.447 41.439 12.913 39.814 12.913 C 39.016 12.913 38.268 13.056 37.574 13.341 C 36.879 13.627 36.266 14.024 35.734 14.534 C 35.202 15.046 34.765 15.66 34.425 16.381 C 34.085 17.102 33.886 17.898 33.827 18.767 L 45.889 18.767 Z M 32.04 1.566 L 47.59 1.566 L 47.59 5.485 L 32.04 5.485 Z" fill="url(#idslpkUk7XXyBTPCoe2gZ_2g2030436413)"></path></g></g></svg>`,
                              },
                              kDNHbEi2J: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 24" overflow="visible"><g><path d="M 19.13 17.814 C 19.13 18.828 18.93 19.718 18.528 20.484 C 18.127 21.25 17.575 21.893 16.872 22.411 C 16.17 22.93 15.356 23.324 14.431 23.594 C 13.506 23.865 12.519 23.999 11.471 23.999 L 0 23.999 L 0 0 L 12.709 0 C 13.534 0 14.28 0.181 14.949 0.541 C 15.618 0.902 16.187 1.368 16.655 1.944 C 17.123 2.518 17.485 3.173 17.742 3.904 C 17.998 4.636 18.127 5.374 18.127 6.119 C 18.127 7.29 17.836 8.389 17.258 9.414 C 16.677 10.439 15.83 11.2 14.716 11.696 C 16.076 12.101 17.151 12.828 17.943 13.876 C 18.734 14.924 19.131 16.237 19.131 17.813 Z M 4.615 3.989 L 4.615 10.04 L 10.769 10.04 C 11.549 10.04 12.212 9.769 12.758 9.228 C 13.304 8.687 13.577 7.944 13.577 6.997 C 13.577 6.051 13.327 5.341 12.824 4.801 C 12.323 4.26 11.704 3.99 10.969 3.99 L 4.614 3.99 Z M 14.482 16.935 C 14.482 16.507 14.409 16.095 14.264 15.701 C 14.119 15.307 13.924 14.963 13.679 14.67 C 13.434 14.377 13.144 14.146 12.81 13.977 C 12.475 13.808 12.107 13.723 11.706 13.723 L 4.616 13.723 L 4.616 20.044 L 11.472 20.044 C 11.896 20.044 12.292 19.965 12.66 19.808 C 13.028 19.65 13.346 19.43 13.613 19.149 C 13.881 18.868 14.092 18.535 14.248 18.152 C 14.404 17.769 14.482 17.363 14.482 16.935 Z M 29.127 23.999 C 27.766 23.999 26.535 23.764 25.433 23.295 C 23.25 22.356 21.711 20.778 20.815 18.563 C 20.394 17.493 20.184 16.368 20.184 15.189 C 20.184 14.01 20.389 12.815 20.799 11.734 C 21.678 9.49 23.218 7.891 25.417 6.936 C 26.529 6.456 27.777 6.215 29.16 6.215 C 30.542 6.215 31.779 6.456 32.87 6.936 C 36.456 8.516 38.146 12.029 37.99 15.845 C 37.979 16.106 37.952 16.325 37.909 16.5 L 24.785 16.5 C 24.849 17.177 25.012 17.777 25.271 18.301 C 25.53 18.825 25.865 19.273 26.275 19.644 C 26.685 20.015 27.15 20.299 27.668 20.496 C 28.187 20.692 28.726 20.791 29.289 20.791 C 30.152 20.791 30.968 20.578 31.735 20.152 C 32.502 19.726 33.026 19.165 33.307 18.466 L 37.034 19.514 C 36.407 20.824 35.409 21.899 34.036 22.74 C 32.664 23.581 31.028 24 29.127 24 Z M 33.535 13.65 C 33.426 12.362 32.957 11.329 32.125 10.554 C 31.292 9.78 30.283 9.391 29.095 9.391 C 28.512 9.391 27.965 9.495 27.458 9.703 C 26.95 9.91 26.502 10.199 26.113 10.57 C 25.724 10.942 25.405 11.389 25.157 11.914 C 24.908 12.438 24.763 13.016 24.72 13.649 L 33.534 13.649 Z M 23.414 1.139 L 34.777 1.139 L 34.777 3.989 L 23.414 3.989 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            ve() &&
                            p(S, {
                              className: `framer-1r38mgq`,
                              layoutDependency: x,
                              layoutId: `vTPpenVcK`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 24" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "kDNHbEi2J-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 33" overflow="visible"><g><defs><linearGradient id="idslpkUk7XXyvTPpenVcK_1g2030436413" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(7, 101, 239)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(38, 36, 168)" stop-opacity="1"></stop></linearGradient></defs><path d="M 26.178 24.494 C 26.178 25.888 25.904 27.113 25.355 28.166 C 24.805 29.219 24.05 30.103 23.089 30.815 C 22.128 31.529 21.014 32.07 19.748 32.442 C 18.482 32.814 17.131 32.999 15.697 32.999 L 0 32.999 L 0 0 L 17.391 0 C 18.52 0 19.542 0.249 20.457 0.744 C 21.373 1.24 22.15 1.882 22.79 2.673 C 23.432 3.462 23.927 4.362 24.279 5.368 C 24.629 6.375 24.805 7.39 24.805 8.413 C 24.805 10.024 24.408 11.535 23.616 12.944 C 22.822 14.354 21.662 15.4 20.137 16.081 C 21.998 16.639 23.47 17.639 24.554 19.079 C 25.637 20.52 26.179 22.325 26.179 24.493 Z M 6.315 5.485 L 6.315 13.804 L 14.736 13.804 C 15.804 13.804 16.712 13.432 17.459 12.688 C 18.205 11.945 18.58 10.923 18.58 9.621 C 18.58 8.32 18.237 7.344 17.549 6.601 C 16.864 5.857 16.016 5.486 15.01 5.486 L 6.314 5.486 Z M 19.817 23.285 C 19.817 22.697 19.717 22.131 19.52 21.588 C 19.321 21.047 19.054 20.574 18.719 20.171 C 18.383 19.769 17.987 19.45 17.529 19.218 C 17.071 18.985 16.568 18.87 16.019 18.87 L 6.317 18.87 L 6.317 27.56 L 15.699 27.56 C 16.279 27.56 16.821 27.452 17.324 27.235 C 17.827 27.019 18.262 26.717 18.629 26.33 C 18.995 25.943 19.284 25.486 19.498 24.958 C 19.711 24.432 19.818 23.874 19.818 23.285 Z M 39.858 32.999 C 37.996 32.999 36.311 32.676 34.803 32.031 C 31.816 30.739 29.71 28.57 28.484 25.523 C 27.907 24.053 27.62 22.507 27.62 20.885 C 27.62 19.264 27.901 17.621 28.462 16.134 C 29.665 13.049 31.772 10.85 34.781 9.537 C 36.304 8.877 38.011 8.546 39.903 8.546 C 41.795 8.546 43.487 8.877 44.98 9.537 C 49.888 11.71 52.199 16.54 51.987 21.786 C 51.971 22.146 51.934 22.447 51.875 22.687 L 33.916 22.687 C 34.004 23.618 34.227 24.443 34.581 25.164 C 34.936 25.884 35.394 26.5 35.955 27.011 C 36.516 27.521 37.153 27.912 37.862 28.182 C 38.571 28.452 39.309 28.588 40.079 28.588 C 41.261 28.588 42.378 28.294 43.427 27.709 C 44.476 27.124 45.193 26.352 45.578 25.39 L 50.678 26.831 C 49.82 28.633 48.454 30.111 46.576 31.267 C 44.699 32.423 42.459 33 39.858 33 Z M 45.89 18.768 C 45.741 16.998 45.099 15.578 43.96 14.512 C 42.821 13.447 41.439 12.913 39.814 12.913 C 39.016 12.913 38.268 13.056 37.574 13.341 C 36.879 13.627 36.266 14.024 35.734 14.534 C 35.202 15.046 34.765 15.66 34.425 16.381 C 34.085 17.102 33.886 17.898 33.827 18.767 L 45.889 18.767 Z M 32.04 1.566 L 47.59 1.566 L 47.59 5.485 L 32.04 5.485 Z" fill="url(#idslpkUk7XXyvTPpenVcK_1g2030436413)"></path></g></svg>`,
                                  },
                                  kDNHbEi2J: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 24" overflow="visible"><path d="M 19.13 17.814 C 19.13 18.828 18.93 19.718 18.528 20.484 C 18.127 21.25 17.575 21.893 16.872 22.411 C 16.17 22.93 15.356 23.324 14.431 23.594 C 13.506 23.865 12.519 23.999 11.471 23.999 L 0 23.999 L 0 0 L 12.709 0 C 13.534 0 14.28 0.181 14.949 0.541 C 15.618 0.902 16.187 1.368 16.655 1.944 C 17.123 2.518 17.485 3.173 17.742 3.904 C 17.998 4.636 18.127 5.374 18.127 6.119 C 18.127 7.29 17.836 8.389 17.258 9.414 C 16.677 10.439 15.83 11.2 14.716 11.696 C 16.076 12.101 17.151 12.828 17.943 13.876 C 18.734 14.924 19.131 16.237 19.131 17.813 Z M 4.615 3.989 L 4.615 10.04 L 10.769 10.04 C 11.549 10.04 12.212 9.769 12.758 9.228 C 13.304 8.687 13.577 7.944 13.577 6.997 C 13.577 6.051 13.327 5.341 12.824 4.801 C 12.323 4.26 11.704 3.99 10.969 3.99 L 4.614 3.99 Z M 14.482 16.935 C 14.482 16.507 14.409 16.095 14.264 15.701 C 14.119 15.307 13.924 14.963 13.679 14.67 C 13.434 14.377 13.144 14.146 12.81 13.977 C 12.475 13.808 12.107 13.723 11.706 13.723 L 4.616 13.723 L 4.616 20.044 L 11.472 20.044 C 11.896 20.044 12.292 19.965 12.66 19.808 C 13.028 19.65 13.346 19.43 13.613 19.149 C 13.881 18.868 14.092 18.535 14.248 18.152 C 14.404 17.769 14.482 17.363 14.482 16.935 Z M 29.127 23.999 C 27.766 23.999 26.535 23.764 25.433 23.295 C 23.25 22.356 21.711 20.778 20.815 18.563 C 20.394 17.493 20.184 16.368 20.184 15.189 C 20.184 14.01 20.389 12.815 20.799 11.734 C 21.678 9.49 23.218 7.891 25.417 6.936 C 26.529 6.456 27.777 6.215 29.16 6.215 C 30.542 6.215 31.779 6.456 32.87 6.936 C 36.456 8.516 38.146 12.029 37.99 15.845 C 37.979 16.106 37.952 16.325 37.909 16.5 L 24.785 16.5 C 24.849 17.177 25.012 17.777 25.271 18.301 C 25.53 18.825 25.865 19.273 26.275 19.644 C 26.685 20.015 27.15 20.299 27.668 20.496 C 28.187 20.692 28.726 20.791 29.289 20.791 C 30.152 20.791 30.968 20.578 31.735 20.152 C 32.502 19.726 33.026 19.165 33.307 18.466 L 37.034 19.514 C 36.407 20.824 35.409 21.899 34.036 22.74 C 32.664 23.581 31.028 24 29.127 24 Z M 33.535 13.65 C 33.426 12.362 32.957 11.329 32.125 10.554 C 31.292 9.78 30.283 9.391 29.095 9.391 C 28.512 9.391 27.965 9.495 27.458 9.703 C 26.95 9.91 26.502 10.199 26.113 10.57 C 25.724 10.942 25.405 11.389 25.157 11.914 C 24.908 12.438 24.763 13.016 24.72 13.649 L 33.534 13.649 Z M 23.414 1.139 L 34.777 1.139 L 34.777 3.989 L 23.414 3.989 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-xi9um3`,
                                  layoutDependency: x,
                                  layoutId: `nAlTygWJy`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.131 23.999" overflow="visible"><path d="M 19.13 17.814 C 19.13 18.828 18.93 19.718 18.528 20.484 C 18.127 21.25 17.575 21.893 16.872 22.411 C 16.17 22.93 15.356 23.324 14.431 23.594 C 13.506 23.865 12.519 23.999 11.471 23.999 L 0 23.999 L 0 0 L 12.709 0 C 13.534 0 14.28 0.181 14.949 0.541 C 15.618 0.902 16.187 1.368 16.655 1.944 C 17.123 2.518 17.485 3.173 17.742 3.904 C 17.998 4.636 18.127 5.374 18.127 6.119 C 18.127 7.29 17.836 8.389 17.258 9.414 C 16.677 10.439 15.83 11.2 14.716 11.696 C 16.076 12.101 17.151 12.828 17.943 13.876 C 18.734 14.924 19.131 16.237 19.131 17.813 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "kDNHbEi2J-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.179 32.999" overflow="visible"><path d="M 26.178 24.494 C 26.178 25.888 25.904 27.113 25.355 28.166 C 24.805 29.219 24.05 30.103 23.089 30.815 C 22.128 31.529 21.014 32.07 19.748 32.442 C 18.482 32.814 17.131 32.999 15.697 32.999 L 0 32.999 L 0 0 L 17.391 0 C 18.52 0 19.542 0.249 20.457 0.744 C 21.373 1.24 22.15 1.882 22.79 2.673 C 23.432 3.462 23.927 4.362 24.279 5.368 C 24.629 6.375 24.805 7.39 24.805 8.413 C 24.805 10.024 24.408 11.535 23.616 12.944 C 22.822 14.354 21.662 15.4 20.137 16.081 C 21.998 16.639 23.47 17.639 24.554 19.079 C 25.637 20.52 26.179 22.325 26.179 24.493 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-i6qoox`,
                                  layoutDependency: x,
                                  layoutId: `BvFG0BNhS`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.963 6.051" overflow="visible"><path d="M 0.001 0 L 0.001 6.051 L 6.154 6.051 C 6.934 6.051 7.598 5.78 8.144 5.239 C 8.69 4.698 8.963 3.955 8.963 3.008 C 8.963 2.062 8.712 1.352 8.21 0.812 C 7.709 0.271 7.09 0.001 6.354 0.001 L 0 0.001 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "kDNHbEi2J-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.265 8.319" overflow="visible"><path d="M 0.001 0 L 0.001 8.319 L 8.422 8.319 C 9.489 8.319 10.397 7.947 11.145 7.204 C 11.891 6.46 12.265 5.438 12.265 4.137 C 12.265 2.836 11.922 1.859 11.235 1.116 C 10.549 0.372 9.702 0.001 8.695 0.001 L 0 0.001 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-qqvtrk`,
                                  layoutDependency: x,
                                  layoutId: `wzS52CnX9`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.866 6.321" overflow="visible"><path d="M 9.865 3.211 C 9.865 2.783 9.792 2.372 9.648 1.977 C 9.503 1.584 9.308 1.239 9.063 0.946 C 8.817 0.654 8.528 0.422 8.193 0.253 C 7.859 0.084 7.491 0 7.09 0 L 0 0 L 0 6.321 L 6.856 6.321 C 7.279 6.321 7.676 6.242 8.043 6.084 C 8.411 5.927 8.729 5.707 8.997 5.426 C 9.264 5.144 9.476 4.812 9.632 4.428 C 9.787 4.045 9.866 3.64 9.866 3.211 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "kDNHbEi2J-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.501 8.691" overflow="visible"><path d="M 13.5 4.415 C 13.5 3.827 13.4 3.261 13.202 2.719 C 13.004 2.178 12.737 1.704 12.402 1.301 C 12.066 0.899 11.67 0.581 11.212 0.348 C 10.754 0.116 10.251 0 9.702 0 L 0 0 L 0 8.691 L 9.382 8.691 C 9.961 8.691 10.503 8.583 11.007 8.366 C 11.51 8.15 11.945 7.847 12.312 7.46 C 12.677 7.073 12.967 6.616 13.181 6.089 C 13.393 5.562 13.501 5.005 13.501 4.415 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-v1p5h8`,
                                  layoutDependency: x,
                                  layoutId: `jMv5ofPgo`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.816 17.785" overflow="visible"><path d="M 8.944 17.784 C 7.583 17.784 6.351 17.549 5.249 17.08 C 3.067 16.141 1.527 14.563 0.632 12.347 C 0.21 11.278 0 10.153 0 8.974 C 0 7.795 0.205 6.6 0.616 5.519 C 1.495 3.275 3.034 1.676 5.233 0.72 C 6.346 0.241 7.594 0 8.976 0 C 10.359 0 11.595 0.241 12.686 0.72 C 16.273 2.301 17.962 5.813 17.807 9.629 C 17.796 9.891 17.768 10.11 17.725 10.284 L 4.601 10.284 C 4.666 10.961 4.828 11.562 5.087 12.086 C 5.347 12.61 5.681 13.058 6.091 13.429 C 6.501 13.8 6.966 14.084 7.485 14.28 C 8.003 14.477 8.542 14.576 9.105 14.576 C 9.969 14.576 10.785 14.362 11.552 13.937 C 12.318 13.511 12.842 12.95 13.124 12.25 L 16.85 13.298 C 16.224 14.609 15.225 15.684 13.853 16.524 C 12.481 17.365 10.844 17.785 8.944 17.785 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "kDNHbEi2J-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.38 24.454" overflow="visible"><path d="M 12.239 24.453 C 10.376 24.453 8.691 24.13 7.183 23.485 C 4.197 22.193 2.09 20.024 0.864 16.977 C 0.288 15.507 0 13.961 0 12.339 C 0 10.718 0.281 9.075 0.842 7.588 C 2.046 4.503 4.152 2.304 7.162 0.991 C 8.684 0.331 10.391 0 12.283 0 C 14.175 0 15.867 0.331 17.36 0.991 C 22.268 3.163 24.58 7.993 24.367 13.24 C 24.352 13.6 24.315 13.901 24.256 14.141 L 6.296 14.141 C 6.385 15.072 6.607 15.897 6.961 16.618 C 7.316 17.338 7.774 17.954 8.335 18.465 C 8.897 18.975 9.533 19.365 10.242 19.635 C 10.952 19.906 11.69 20.042 12.46 20.042 C 13.641 20.042 14.758 19.748 15.807 19.163 C 16.857 18.577 17.574 17.806 17.958 16.844 L 23.058 18.285 C 22.201 20.087 20.834 21.565 18.957 22.721 C 17.079 23.877 14.84 24.454 12.239 24.454 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-k4pgrn`,
                                  layoutDependency: x,
                                  layoutId: `tiV76cufY`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.815 4.258" overflow="visible"><path d="M 8.815 4.258 C 8.706 2.971 8.237 1.938 7.405 1.163 C 6.573 0.389 5.563 0 4.375 0 C 3.792 0 3.246 0.104 2.739 0.311 C 2.231 0.519 1.782 0.808 1.394 1.179 C 1.005 1.551 0.686 1.998 0.437 2.522 C 0.189 3.046 0.043 3.625 0 4.258 L 8.814 4.258 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "kDNHbEi2J-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.063 5.855" overflow="visible"><path d="M 12.063 5.855 C 11.914 4.084 11.272 2.665 10.133 1.599 C 8.994 0.534 7.613 0 5.987 0 C 5.189 0 4.442 0.143 3.747 0.428 C 3.052 0.714 2.439 1.111 1.907 1.621 C 1.375 2.132 0.938 2.747 0.598 3.468 C 0.258 4.189 0.059 4.984 0 5.854 L 12.062 5.854 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1liv8jk`,
                                  layoutDependency: x,
                                  layoutId: `IXjQQEMWm`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.363 2.85" overflow="visible"><path d="M 0 0 L 11.363 0 L 11.363 2.85 L 0 2.85 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "kDNHbEi2J-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.549 3.919" overflow="visible"><path d="M 0 0 L 15.549 0 L 15.549 3.919 L 0 3.919 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      w() &&
                        l(S, {
                          className: `framer-5qmhtg`,
                          "data-framer-name": `ChatGPT logo`,
                          layoutDependency: x,
                          layoutId: `trUjOyMvm`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 34" overflow="visible"><g></g></svg>`,
                          variants: { "tXuBkWWhJ-hover": { rotate: 67 } },
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "tXuBkWWhJ-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43.428 40.778" overflow="visible"><g><path d="M 39.231 17.598 C 40.196 14.67 39.864 11.463 38.32 8.8 C 35.998 4.715 31.328 2.613 26.769 3.603 C 24.741 1.294 21.826 -0.02 18.772 0 C 14.11 -0.011 9.975 3.02 8.541 7.5 C 5.546 8.12 2.961 10.014 1.448 12.698 C -0.891 16.772 -0.358 21.906 2.768 25.401 C 1.803 28.33 2.135 31.537 3.679 34.201 C 6.002 38.286 10.671 40.387 15.231 39.398 C 17.259 41.707 20.174 43.02 23.229 43 C 27.893 43.012 32.03 39.979 33.464 35.494 C 36.458 34.875 39.042 32.981 40.554 30.298 C 42.891 26.224 42.357 21.091 39.231 17.598 Z M 35.91 10.211 C 36.841 11.841 37.177 13.749 36.862 15.604 L 36.861 15.604 C 36.778 15.551 36.695 15.5 36.61 15.452 L 28.134 10.506 C 27.704 10.253 27.172 10.253 26.742 10.506 L 16.395 16.542 L 16.395 12.362 C 16.393 12.319 16.412 12.277 16.446 12.251 L 25.013 7.257 C 28.83 5.034 33.709 6.356 35.91 10.211 Z M 21.001 16.125 L 25.611 18.812 L 25.611 24.188 L 21.002 26.875 L 16.393 24.188 L 16.393 18.813 Z M 10.795 10.867 C 10.798 6.415 14.373 2.81 18.779 2.814 C 20.642 2.815 22.445 3.475 23.876 4.679 C 23.792 4.725 23.707 4.773 23.625 4.823 L 15.149 9.768 C 14.716 10.017 14.45 10.482 14.453 10.985 L 14.447 23.052 L 10.864 20.962 C 10.825 20.943 10.8 20.906 10.795 20.863 Z M 3.863 14.104 C 4.795 12.47 6.265 11.22 8.017 10.571 C 8.017 10.644 8.013 10.775 8.013 10.865 L 8.013 20.757 C 8.01 21.26 8.276 21.725 8.709 21.974 L 19.055 28.01 L 15.474 30.099 C 15.438 30.123 15.392 30.127 15.352 30.11 L 6.782 25.109 C 2.973 22.881 1.668 17.958 3.863 14.104 Z M 6.093 32.796 C 5.159 31.164 4.822 29.253 5.141 27.396 C 5.205 27.434 5.314 27.502 5.394 27.547 L 13.869 32.492 C 14.299 32.746 14.83 32.746 15.26 32.492 L 25.608 26.457 L 25.608 30.636 C 25.611 30.68 25.592 30.721 25.557 30.747 L 16.99 35.746 C 13.174 37.966 8.299 36.646 6.093 32.796 Z M 31.202 32.132 C 31.197 36.578 27.632 40.182 23.231 40.19 L 23.231 40.192 C 21.366 40.195 19.559 39.534 18.126 38.327 C 18.19 38.291 18.304 38.229 18.378 38.183 L 26.853 33.237 C 27.286 32.988 27.553 32.522 27.55 32.018 L 27.55 19.946 L 31.132 22.036 C 31.17 22.055 31.196 22.092 31.202 22.135 Z M 38.138 28.897 C 37.206 30.528 35.737 31.777 33.988 32.428 L 33.988 22.242 C 33.992 21.739 33.727 21.274 33.296 21.025 L 22.948 14.988 L 26.531 12.899 C 26.567 12.876 26.613 12.872 26.652 12.889 L 35.22 17.886 C 39.036 20.113 40.343 25.043 38.138 28.897 Z" transform="translate(0.714 -1.11) rotate(105 21 21.5)" fill="rgb(0, 0, 0)"></path></g></svg>`,
                              },
                              tXuBkWWhJ: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 34" overflow="visible"><g><path d="M 30.824 13.915 C 31.583 11.599 31.322 9.064 30.109 6.958 C 28.284 3.728 24.615 2.066 21.033 2.849 C 19.439 1.023 17.149 -0.015 14.749 0 C 11.086 -0.009 7.838 2.388 6.711 5.93 C 4.357 6.42 2.326 7.918 1.138 10.04 C -0.7 13.262 -0.281 17.321 2.175 20.085 C 1.417 22.4 1.677 24.936 2.891 27.042 C 4.716 30.272 8.385 31.934 11.967 31.152 C 13.561 32.978 15.851 34.015 18.251 34 C 21.916 34.009 25.166 31.611 26.293 28.065 C 28.645 27.576 30.676 26.078 31.864 23.956 C 33.7 20.735 33.28 16.677 30.824 13.915 Z M 28.215 8.074 C 28.946 9.363 29.211 10.871 28.963 12.338 L 28.963 12.338 C 28.897 12.296 28.832 12.256 28.765 12.218 L 22.105 8.307 C 21.767 8.107 21.349 8.107 21.011 8.307 L 12.882 13.08 L 12.882 9.775 C 12.88 9.741 12.895 9.708 12.922 9.687 L 19.653 5.738 C 22.652 3.98 26.485 5.026 28.215 8.074 Z M 16.501 12.75 L 20.123 14.875 L 20.123 19.125 L 16.502 21.25 L 12.88 19.125 L 12.88 14.875 Z M 8.481 8.592 C 8.484 5.073 11.293 2.222 14.755 2.225 C 16.218 2.226 17.635 2.748 18.76 3.699 C 18.693 3.736 18.627 3.774 18.562 3.813 L 11.903 7.724 C 11.563 7.92 11.354 8.288 11.356 8.686 L 11.351 18.227 L 8.536 16.575 C 8.506 16.559 8.486 16.531 8.481 16.496 Z M 3.035 11.152 C 3.767 9.86 4.923 8.871 6.299 8.358 C 6.299 8.416 6.296 8.52 6.296 8.591 L 6.296 16.412 C 6.293 16.81 6.502 17.178 6.843 17.375 L 14.972 22.147 L 12.158 23.799 C 12.129 23.818 12.093 23.822 12.062 23.808 L 5.329 19.854 C 2.336 18.092 1.31 14.199 3.035 11.152 Z M 4.787 25.931 C 4.053 24.641 3.788 23.13 4.04 21.662 C 4.09 21.692 4.175 21.746 4.238 21.781 L 10.897 25.691 C 11.235 25.892 11.652 25.892 11.99 25.691 L 20.121 20.92 L 20.121 24.224 C 20.123 24.258 20.108 24.291 20.081 24.312 L 13.349 28.264 C 10.351 30.019 6.521 28.976 4.787 25.931 Z M 24.516 25.406 C 24.512 28.922 21.711 31.772 18.253 31.778 L 18.253 31.779 C 16.788 31.782 15.368 31.259 14.242 30.305 C 14.292 30.277 14.382 30.227 14.44 30.191 L 21.099 26.281 C 21.439 26.084 21.649 25.715 21.646 25.316 L 21.646 15.772 L 24.461 17.424 C 24.491 17.439 24.511 17.468 24.516 17.502 Z M 29.966 22.849 C 29.233 24.138 28.079 25.126 26.705 25.641 L 26.705 17.586 C 26.708 17.189 26.5 16.822 26.161 16.624 L 18.031 11.851 L 20.846 10.2 C 20.874 10.181 20.91 10.178 20.941 10.191 L 27.673 14.142 C 30.671 15.903 31.698 19.801 29.966 22.849 Z" fill="rgb(249,249,249)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            T() &&
                            p(S, {
                              className: `framer-1k6leum`,
                              layoutDependency: x,
                              layoutId: `AT5CwQJLt`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 34" overflow="visible"></svg>`,
                              variants: { "tXuBkWWhJ-hover": { rotate: 105 } },
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "tXuBkWWhJ-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 43" overflow="visible"><path d="M 39.231 17.598 C 40.196 14.67 39.864 11.463 38.32 8.8 C 35.998 4.715 31.328 2.613 26.769 3.603 C 24.741 1.294 21.826 -0.02 18.772 0 C 14.11 -0.011 9.975 3.02 8.541 7.5 C 5.546 8.12 2.961 10.014 1.448 12.698 C -0.891 16.772 -0.358 21.906 2.768 25.401 C 1.803 28.33 2.135 31.537 3.679 34.201 C 6.002 38.286 10.671 40.387 15.231 39.398 C 17.259 41.707 20.174 43.02 23.229 43 C 27.893 43.012 32.03 39.979 33.464 35.494 C 36.458 34.875 39.042 32.981 40.554 30.298 C 42.891 26.224 42.357 21.091 39.231 17.598 Z M 35.91 10.211 C 36.841 11.841 37.177 13.749 36.862 15.604 L 36.861 15.604 C 36.778 15.551 36.695 15.5 36.61 15.452 L 28.134 10.506 C 27.704 10.253 27.172 10.253 26.742 10.506 L 16.395 16.542 L 16.395 12.362 C 16.393 12.319 16.412 12.277 16.446 12.251 L 25.013 7.257 C 28.83 5.034 33.709 6.356 35.91 10.211 Z M 21.001 16.125 L 25.611 18.812 L 25.611 24.188 L 21.002 26.875 L 16.393 24.188 L 16.393 18.813 Z M 10.795 10.867 C 10.798 6.415 14.373 2.81 18.779 2.814 C 20.642 2.815 22.445 3.475 23.876 4.679 C 23.792 4.725 23.707 4.773 23.625 4.823 L 15.149 9.768 C 14.716 10.017 14.45 10.482 14.453 10.985 L 14.447 23.052 L 10.864 20.962 C 10.825 20.943 10.8 20.906 10.795 20.863 Z M 3.863 14.104 C 4.795 12.47 6.265 11.22 8.017 10.571 C 8.017 10.644 8.013 10.775 8.013 10.865 L 8.013 20.757 C 8.01 21.26 8.276 21.725 8.709 21.974 L 19.055 28.01 L 15.474 30.099 C 15.438 30.123 15.392 30.127 15.352 30.11 L 6.782 25.109 C 2.973 22.881 1.668 17.958 3.863 14.104 Z M 6.093 32.796 C 5.159 31.164 4.822 29.253 5.141 27.396 C 5.205 27.434 5.314 27.502 5.394 27.547 L 13.869 32.492 C 14.299 32.746 14.83 32.746 15.26 32.492 L 25.608 26.457 L 25.608 30.636 C 25.611 30.68 25.592 30.721 25.557 30.747 L 16.99 35.746 C 13.174 37.966 8.299 36.646 6.093 32.796 Z M 31.202 32.132 C 31.197 36.578 27.632 40.182 23.231 40.19 L 23.231 40.192 C 21.366 40.195 19.559 39.534 18.126 38.327 C 18.19 38.291 18.304 38.229 18.378 38.183 L 26.853 33.237 C 27.286 32.988 27.553 32.522 27.55 32.018 L 27.55 19.946 L 31.132 22.036 C 31.17 22.055 31.196 22.092 31.202 22.135 Z M 38.138 28.897 C 37.206 30.528 35.737 31.777 33.988 32.428 L 33.988 22.242 C 33.992 21.739 33.727 21.274 33.296 21.025 L 22.948 14.988 L 26.531 12.899 C 26.567 12.876 26.613 12.872 26.652 12.889 L 35.22 17.886 C 39.036 20.113 40.343 25.043 38.138 28.897 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                  },
                                  tXuBkWWhJ: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 34" overflow="visible"><path d="M 30.824 13.915 C 31.583 11.599 31.322 9.064 30.109 6.958 C 28.284 3.728 24.615 2.066 21.033 2.849 C 19.439 1.023 17.149 -0.015 14.749 0 C 11.086 -0.009 7.838 2.388 6.711 5.93 C 4.357 6.42 2.326 7.918 1.138 10.04 C -0.7 13.262 -0.281 17.321 2.175 20.085 C 1.417 22.4 1.677 24.936 2.891 27.042 C 4.716 30.272 8.385 31.934 11.967 31.152 C 13.561 32.978 15.851 34.015 18.251 34 C 21.916 34.009 25.166 31.611 26.293 28.065 C 28.645 27.576 30.676 26.078 31.864 23.956 C 33.7 20.735 33.28 16.677 30.824 13.915 Z M 28.215 8.074 C 28.946 9.363 29.211 10.871 28.963 12.338 L 28.963 12.338 C 28.897 12.296 28.832 12.256 28.765 12.218 L 22.105 8.307 C 21.767 8.107 21.349 8.107 21.011 8.307 L 12.882 13.08 L 12.882 9.775 C 12.88 9.741 12.895 9.708 12.922 9.687 L 19.653 5.738 C 22.652 3.98 26.485 5.026 28.215 8.074 Z M 16.501 12.75 L 20.123 14.875 L 20.123 19.125 L 16.502 21.25 L 12.88 19.125 L 12.88 14.875 Z M 8.481 8.592 C 8.484 5.073 11.293 2.222 14.755 2.225 C 16.218 2.226 17.635 2.748 18.76 3.699 C 18.693 3.736 18.627 3.774 18.562 3.813 L 11.903 7.724 C 11.563 7.92 11.354 8.288 11.356 8.686 L 11.351 18.227 L 8.536 16.575 C 8.506 16.559 8.486 16.531 8.481 16.496 Z M 3.035 11.152 C 3.767 9.86 4.923 8.871 6.299 8.358 C 6.299 8.416 6.296 8.52 6.296 8.591 L 6.296 16.412 C 6.293 16.81 6.502 17.178 6.843 17.375 L 14.972 22.147 L 12.158 23.799 C 12.129 23.818 12.093 23.822 12.062 23.808 L 5.329 19.854 C 2.336 18.092 1.31 14.199 3.035 11.152 Z M 4.787 25.931 C 4.053 24.641 3.788 23.13 4.04 21.662 C 4.09 21.692 4.175 21.746 4.238 21.781 L 10.897 25.691 C 11.235 25.892 11.652 25.892 11.99 25.691 L 20.121 20.92 L 20.121 24.224 C 20.123 24.258 20.108 24.291 20.081 24.312 L 13.349 28.264 C 10.351 30.019 6.521 28.976 4.787 25.931 Z M 24.516 25.406 C 24.512 28.922 21.711 31.772 18.253 31.778 L 18.253 31.779 C 16.788 31.782 15.368 31.259 14.242 30.305 C 14.292 30.277 14.382 30.227 14.44 30.191 L 21.099 26.281 C 21.439 26.084 21.649 25.715 21.646 25.316 L 21.646 15.772 L 24.461 17.424 C 24.491 17.439 24.511 17.468 24.516 17.502 Z M 29.966 22.849 C 29.233 24.138 28.079 25.126 26.705 25.641 L 26.705 17.586 C 26.708 17.189 26.5 16.822 26.161 16.624 L 18.031 11.851 L 20.846 10.2 C 20.874 10.181 20.91 10.178 20.941 10.191 L 27.673 14.142 C 30.671 15.903 31.698 19.801 29.966 22.849 Z" fill="rgb(249,249,249)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1jofjhw`,
                                  layoutDependency: x,
                                  layoutId: `uCnkqK_AP`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 34" overflow="visible"><path d="M 30.824 13.915 C 31.583 11.599 31.322 9.064 30.109 6.958 C 28.284 3.728 24.615 2.066 21.033 2.849 C 19.439 1.023 17.149 -0.015 14.749 0 C 11.086 -0.009 7.838 2.388 6.711 5.93 C 4.357 6.42 2.326 7.918 1.138 10.04 C -0.7 13.262 -0.281 17.321 2.175 20.085 C 1.417 22.4 1.677 24.936 2.891 27.042 C 4.716 30.272 8.385 31.934 11.967 31.152 C 13.561 32.978 15.851 34.015 18.251 34 C 21.916 34.009 25.166 31.611 26.293 28.065 C 28.645 27.576 30.676 26.078 31.864 23.956 C 33.7 20.735 33.28 16.677 30.824 13.915 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 43" overflow="visible"><path d="M 39.231 17.598 C 40.196 14.67 39.864 11.463 38.32 8.8 C 35.998 4.715 31.328 2.613 26.769 3.603 C 24.741 1.294 21.826 -0.02 18.772 0 C 14.11 -0.011 9.975 3.02 8.541 7.5 C 5.546 8.12 2.961 10.014 1.448 12.698 C -0.891 16.772 -0.358 21.906 2.768 25.401 C 1.803 28.33 2.135 31.537 3.679 34.201 C 6.002 38.286 10.671 40.387 15.231 39.398 C 17.259 41.707 20.174 43.02 23.229 43 C 27.893 43.012 32.03 39.979 33.464 35.494 C 36.458 34.875 39.042 32.981 40.554 30.298 C 42.891 26.224 42.357 21.091 39.231 17.598 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1n7a7tz`,
                                  layoutDependency: x,
                                  layoutId: `tXQa5BZ8t`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.172 8.195" overflow="visible"><path d="M 15.333 3.189 C 16.064 4.478 16.329 5.986 16.081 7.453 L 16.081 7.453 C 16.015 7.411 15.95 7.371 15.883 7.333 L 9.224 3.422 C 8.886 3.222 8.468 3.222 8.13 3.422 L 0 8.195 L 0 4.89 C -0.002 4.856 0.013 4.823 0.04 4.802 L 6.771 0.854 C 9.77 -0.905 13.603 0.141 15.333 3.189 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.582 10.364" overflow="visible"><path d="M 19.515 4.033 C 20.446 5.663 20.782 7.571 20.467 9.426 L 20.466 9.426 C 20.383 9.373 20.3 9.322 20.215 9.274 L 11.739 4.328 C 11.309 4.075 10.777 4.075 10.347 4.328 L 0 10.364 L 0 6.184 C -0.002 6.141 0.017 6.099 0.051 6.073 L 8.618 1.079 C 12.435 -1.144 17.314 0.178 19.515 4.033 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-109a1y7`,
                                  layoutDependency: x,
                                  layoutId: `ATsP4PHIR`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.242 8.5" overflow="visible"><path d="M 3.62 0 L 7.242 2.125 L 7.242 6.375 L 3.622 8.5 L 0 6.375 L 0 2.126 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.218 10.75" overflow="visible"><path d="M 4.608 0 L 9.218 2.687 L 9.218 8.063 L 4.609 10.75 L 0 8.063 L 0 2.688 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1ckp58o`,
                                  layoutDependency: x,
                                  layoutId: `P6SvO_uCa`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.279 16.002" overflow="visible"><path d="M 0 6.368 C 0.003 2.848 2.811 -0.003 6.274 0 C 7.737 0.001 9.154 0.523 10.279 1.475 C 10.212 1.511 10.146 1.549 10.081 1.589 L 3.421 5.499 C 3.081 5.695 2.872 6.063 2.874 6.461 L 2.87 16.002 L 0.054 14.35 C 0.024 14.335 0.004 14.306 0 14.272 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.082 20.238" overflow="visible"><path d="M 0 8.053 C 0.004 3.602 3.578 -0.004 7.984 0 C 9.847 0.002 11.65 0.662 13.082 1.865 C 12.997 1.911 12.913 1.959 12.83 2.009 L 4.355 6.955 C 3.922 7.203 3.655 7.669 3.658 8.172 L 3.652 20.238 L 0.069 18.149 C 0.031 18.129 0.005 18.093 0 18.049 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-4u7lod`,
                                  layoutDependency: x,
                                  layoutId: `baGy1yPh1`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.774 15.458" overflow="visible"><path d="M 0.837 2.793 C 1.569 1.502 2.725 0.513 4.101 0 C 4.101 0.058 4.098 0.161 4.098 0.233 L 4.098 8.054 C 4.095 8.452 4.304 8.82 4.645 9.016 L 12.774 13.789 L 9.96 15.441 C 9.931 15.46 9.895 15.463 9.864 15.449 L 3.131 11.495 C 0.138 9.733 -0.888 5.841 0.837 2.793 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.258 19.55" overflow="visible"><path d="M 1.066 3.533 C 1.997 1.899 3.468 0.649 5.22 0 C 5.22 0.073 5.215 0.204 5.215 0.294 L 5.215 10.186 C 5.212 10.689 5.478 11.154 5.911 11.403 L 16.258 17.439 L 12.676 19.528 C 12.64 19.552 12.594 19.556 12.554 19.539 L 3.985 14.538 C 0.176 12.31 -1.13 7.387 1.066 3.533 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1ncxcse`,
                                  layoutDependency: x,
                                  layoutId: `uEKwjvwne`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.174 8.196" overflow="visible"><path d="M 0.84 5.012 C 0.106 3.722 -0.159 2.21 0.092 0.742 C 0.143 0.773 0.228 0.826 0.291 0.861 L 6.95 4.772 C 7.287 4.972 7.705 4.972 8.043 4.772 L 16.174 0 L 16.174 3.304 C 16.176 3.339 16.161 3.372 16.133 3.392 L 9.402 7.344 C 6.404 9.1 2.573 8.056 0.84 5.012 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.585 10.366" overflow="visible"><path d="M 1.069 6.338 C 0.135 4.707 -0.202 2.796 0.118 0.939 C 0.181 0.977 0.29 1.045 0.37 1.09 L 8.845 6.035 C 9.275 6.288 9.807 6.288 10.237 6.035 L 20.585 0 L 20.585 4.179 C 20.588 4.222 20.568 4.264 20.534 4.29 L 11.966 9.288 C 8.15 11.508 3.275 10.189 1.069 6.338 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-kp44k2`,
                                  layoutDependency: x,
                                  layoutId: `d4CBDmZnz`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.274 16.008" overflow="visible"><path d="M 10.274 9.635 C 10.27 13.15 7.47 16 4.012 16.007 L 4.012 16.008 C 2.546 16.01 1.126 15.488 0 14.533 C 0.051 14.505 0.14 14.456 0.198 14.419 L 6.857 10.509 C 7.198 10.312 7.407 9.943 7.405 9.545 L 7.405 0 L 10.219 1.652 C 10.249 1.667 10.27 1.697 10.274 1.731 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.077 20.245" overflow="visible"><path d="M 13.077 12.185 C 13.071 16.631 9.507 20.235 5.106 20.244 L 5.106 20.245 C 3.241 20.248 1.433 19.587 0 18.38 C 0.065 18.345 0.179 18.282 0.252 18.236 L 8.727 13.291 C 9.161 13.042 9.427 12.575 9.424 12.071 L 9.424 0 L 13.006 2.09 C 13.044 2.109 13.071 2.146 13.077 2.189 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1auxouc`,
                                  layoutDependency: x,
                                  layoutId: `ZyVF4p95Z`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.777 15.458" overflow="visible"><path d="M 11.935 12.666 C 11.202 13.955 10.048 14.943 8.674 15.458 L 8.674 7.403 C 8.677 7.006 8.469 6.638 8.131 6.441 L 0 1.668 L 2.815 0.017 C 2.844 -0.002 2.879 -0.005 2.91 0.008 L 9.642 3.959 C 12.64 5.72 13.667 9.618 11.935 12.666 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "tXuBkWWhJ-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.261 19.55" overflow="visible"><path d="M 15.19 16.019 C 14.257 17.649 12.789 18.899 11.04 19.55 L 11.04 9.363 C 11.044 8.861 10.779 8.396 10.348 8.146 L 0 2.11 L 3.583 0.021 C 3.619 -0.003 3.664 -0.006 3.703 0.01 L 12.272 5.007 C 16.088 7.234 17.394 12.164 15.19 16.019 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      E() &&
                        l(S, {
                          className: `framer-orcd2u`,
                          "data-framer-name": `Discord logo`,
                          layoutDependency: x,
                          layoutId: `vQdvEF24i`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 25" overflow="visible"><g></g></svg>`,
                          variants: { "fHHSQiqdo-hover": { rotate: 15 } },
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "fHHSQiqdo-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 38" overflow="visible"><g><g><defs><linearGradient id="idsSITz10h5QvQdvEF24i_2g412013219" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(90, 92, 239)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(104, 14, 222)" stop-opacity="1"></stop></linearGradient></defs><path d="M 38.37 2.934 C 35.389 1.557 32.242 0.578 29.009 0.024 C 28.601 0.742 28.139 1.705 27.817 2.483 C 24.379 1.964 20.885 1.957 17.449 2.463 C 17.08 1.622 16.668 0.799 16.215 0 C 12.98 0.541 9.833 1.512 6.857 2.887 C 0.97 11.681 -0.616 20.276 0.199 28.743 C 3.669 31.326 7.556 33.294 11.689 34.56 C 12.616 33.302 13.436 31.969 14.141 30.574 C 12.798 30.071 11.502 29.448 10.267 28.717 C 10.589 28.474 10.9 28.231 11.201 27.985 C 18.474 31.438 26.898 31.454 34.159 28.029 C 34.466 28.283 34.786 28.53 35.107 28.769 C 33.874 29.499 32.577 30.119 31.233 30.619 C 31.943 32.015 32.768 33.349 33.701 34.607 C 37.83 33.36 41.71 31.407 45.168 28.833 C 46.084 19.019 43.518 10.495 38.37 2.934 Z M 15.137 23.57 C 12.898 23.566 11.058 21.512 11.053 18.993 C 11.048 16.474 12.84 14.411 15.119 14.415 C 17.399 14.419 19.223 16.474 19.207 18.996 C 19.191 21.519 17.416 23.575 15.137 23.57 Z M 30.202 23.599 C 27.964 23.595 26.124 21.54 26.119 19.022 C 26.114 16.503 27.905 14.44 30.185 14.444 C 32.464 14.448 34.288 16.503 34.268 19.025 C 34.249 21.548 32.482 23.604 30.202 23.599 Z" transform="translate(-1.386 1.184) rotate(-15 22.75 17.25)" fill="url(#idsSITz10h5QvQdvEF24i_2g412013219)"></path></g></g></svg>`,
                              },
                              fHHSQiqdo: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 25" overflow="visible"><g><path d="M 27.951 2.091 C 25.784 1.099 23.495 0.396 21.143 0 C 20.845 0.519 20.508 1.216 20.273 1.78 C 17.772 1.409 15.229 1.409 12.728 1.78 C 12.461 1.171 12.162 0.577 11.834 0 C 9.479 0.396 7.187 1.102 5.02 2.1 C 0.724 8.468 -0.442 14.685 0.139 20.806 C 2.661 22.67 5.486 24.087 8.492 24.997 C 9.168 24.086 9.767 23.121 10.282 22.111 C 9.305 21.749 8.363 21.301 7.466 20.774 C 7.7 20.597 7.927 20.421 8.146 20.243 C 13.433 22.729 19.563 22.729 24.851 20.243 C 25.075 20.426 25.307 20.604 25.541 20.777 C 24.642 21.307 23.698 21.756 22.719 22.12 C 23.233 23.129 23.832 24.092 24.509 25 C 27.515 24.093 30.341 22.675 32.862 20.809 C 33.542 13.711 31.686 7.551 27.951 2.091 Z M 11.016 17.045 C 9.387 17.045 8.051 15.562 8.051 13.741 C 8.051 11.92 9.357 10.425 11.016 10.425 C 12.675 10.425 13.999 11.908 13.984 13.732 C 13.969 15.556 12.675 17.045 11.016 17.045 Z M 21.979 17.045 C 20.35 17.045 19.014 15.562 19.014 13.741 C 19.014 11.92 20.32 10.425 21.979 10.425 C 23.637 10.425 24.962 11.908 24.944 13.732 C 24.926 15.556 23.637 17.045 21.979 17.045 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            xe() &&
                            p(S, {
                              className: `framer-kqei60`,
                              layoutDependency: x,
                              layoutId: `y2fXDhIlR`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 25" overflow="visible"></svg>`,
                              variants: { "fHHSQiqdo-hover": { rotate: -15 } },
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "fHHSQiqdo-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.351 34.607" overflow="visible"><g><defs><linearGradient id="idsSITz10h5Qy2fXDhIlR_1g412013219" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(90, 92, 239)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(104, 14, 222)" stop-opacity="1"></stop></linearGradient></defs><path d="M 38.37 2.934 C 35.389 1.557 32.242 0.578 29.009 0.024 C 28.601 0.742 28.139 1.705 27.817 2.483 C 24.379 1.964 20.885 1.957 17.449 2.463 C 17.08 1.622 16.668 0.799 16.215 0 C 12.98 0.541 9.833 1.512 6.857 2.887 C 0.97 11.681 -0.616 20.276 0.199 28.743 C 3.669 31.326 7.556 33.294 11.689 34.56 C 12.616 33.302 13.436 31.969 14.141 30.574 C 12.798 30.071 11.502 29.448 10.267 28.717 C 10.589 28.474 10.9 28.231 11.201 27.985 C 18.474 31.438 26.898 31.454 34.159 28.029 C 34.466 28.283 34.786 28.53 35.107 28.769 C 33.874 29.499 32.577 30.119 31.233 30.619 C 31.943 32.015 32.768 33.349 33.701 34.607 C 37.83 33.36 41.71 31.407 45.168 28.833 C 46.084 19.019 43.518 10.495 38.37 2.934 Z M 15.137 23.57 C 12.898 23.566 11.058 21.512 11.053 18.993 C 11.048 16.474 12.84 14.411 15.119 14.415 C 17.399 14.419 19.223 16.474 19.207 18.996 C 19.191 21.519 17.416 23.575 15.137 23.57 Z M 30.202 23.599 C 27.964 23.595 26.124 21.54 26.119 19.022 C 26.114 16.503 27.905 14.44 30.185 14.444 C 32.464 14.448 34.288 16.503 34.268 19.025 C 34.249 21.548 32.482 23.604 30.202 23.599 Z" fill="url(#idsSITz10h5Qy2fXDhIlR_1g412013219)"></path></g></svg>`,
                                  },
                                  fHHSQiqdo: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 25" overflow="visible"><path d="M 27.951 2.091 C 25.784 1.099 23.495 0.396 21.143 0 C 20.845 0.519 20.508 1.216 20.273 1.78 C 17.772 1.409 15.229 1.409 12.728 1.78 C 12.461 1.171 12.162 0.577 11.834 0 C 9.479 0.396 7.187 1.102 5.02 2.1 C 0.724 8.468 -0.442 14.685 0.139 20.806 C 2.661 22.67 5.486 24.087 8.492 24.997 C 9.168 24.086 9.767 23.121 10.282 22.111 C 9.305 21.749 8.363 21.301 7.466 20.774 C 7.7 20.597 7.927 20.421 8.146 20.243 C 13.433 22.729 19.563 22.729 24.851 20.243 C 25.075 20.426 25.307 20.604 25.541 20.777 C 24.642 21.307 23.698 21.756 22.719 22.12 C 23.233 23.129 23.832 24.092 24.509 25 C 27.515 24.093 30.341 22.675 32.862 20.809 C 33.542 13.711 31.686 7.551 27.951 2.091 Z M 11.016 17.045 C 9.387 17.045 8.051 15.562 8.051 13.741 C 8.051 11.92 9.357 10.425 11.016 10.425 C 12.675 10.425 13.999 11.908 13.984 13.732 C 13.969 15.556 12.675 17.045 11.016 17.045 Z M 21.979 17.045 C 20.35 17.045 19.014 15.562 19.014 13.741 C 19.014 11.92 20.32 10.425 21.979 10.425 C 23.637 10.425 24.962 11.908 24.944 13.732 C 24.926 15.556 23.637 17.045 21.979 17.045 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1izncoc`,
                                  layoutDependency: x,
                                  layoutId: `CCrgDt12_`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 25" overflow="visible"><path d="M 27.951 2.091 C 25.784 1.099 23.495 0.396 21.143 0 C 20.845 0.519 20.508 1.216 20.273 1.78 C 17.772 1.409 15.229 1.409 12.728 1.78 C 12.461 1.171 12.162 0.577 11.834 0 C 9.479 0.396 7.187 1.102 5.02 2.1 C 0.724 8.468 -0.442 14.685 0.139 20.806 C 2.661 22.67 5.486 24.087 8.492 24.997 C 9.168 24.086 9.767 23.121 10.282 22.111 C 9.305 21.749 8.363 21.301 7.466 20.774 C 7.7 20.597 7.927 20.421 8.146 20.243 C 13.433 22.729 19.563 22.729 24.851 20.243 C 25.075 20.426 25.307 20.604 25.541 20.777 C 24.642 21.307 23.698 21.756 22.719 22.12 C 23.233 23.129 23.832 24.092 24.509 25 C 27.515 24.093 30.341 22.675 32.862 20.809 C 33.542 13.711 31.686 7.551 27.951 2.091 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "fHHSQiqdo-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.351 34.607" overflow="visible"><path d="M 38.37 2.934 C 35.389 1.557 32.242 0.578 29.009 0.024 C 28.601 0.742 28.139 1.705 27.817 2.483 C 24.379 1.964 20.885 1.957 17.449 2.463 C 17.08 1.622 16.668 0.799 16.215 0 C 12.98 0.541 9.833 1.512 6.857 2.887 C 0.97 11.681 -0.616 20.276 0.199 28.743 C 3.669 31.326 7.556 33.294 11.689 34.56 C 12.616 33.302 13.436 31.969 14.141 30.574 C 12.798 30.071 11.502 29.448 10.267 28.717 C 10.589 28.474 10.9 28.231 11.201 27.985 C 18.474 31.438 26.898 31.454 34.159 28.029 C 34.466 28.283 34.786 28.53 35.107 28.769 C 33.874 29.499 32.577 30.119 31.233 30.619 C 31.943 32.015 32.768 33.349 33.701 34.607 C 37.83 33.36 41.71 31.407 45.168 28.833 C 46.084 19.019 43.518 10.495 38.37 2.934 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-16cp265`,
                                  layoutDependency: x,
                                  layoutId: `fLrAl3lvR`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.933 6.62" overflow="visible"><path d="M 2.965 6.62 C 1.336 6.62 0 5.137 0 3.316 C 0 1.495 1.306 0 2.965 0 C 4.624 0 5.948 1.483 5.933 3.307 C 5.918 5.131 4.624 6.62 2.965 6.62 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "fHHSQiqdo-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.154 9.155" overflow="visible"><path d="M 4.084 9.155 C 1.845 9.151 0.005 7.096 0 4.578 C -0.005 2.059 1.787 -0.004 4.066 0 C 6.345 0.004 8.17 2.059 8.154 4.581 C 8.138 7.104 6.363 9.16 4.084 9.155 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-xbo38i`,
                                  layoutDependency: x,
                                  layoutId: `s52GcqOE1`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.93 6.62" overflow="visible"><path d="M 2.965 6.62 C 1.336 6.62 0 5.137 0 3.316 C 0 1.495 1.306 0 2.965 0 C 4.624 0 5.948 1.483 5.93 3.307 C 5.912 5.131 4.624 6.62 2.965 6.62 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "fHHSQiqdo-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.15 9.155" overflow="visible"><path d="M 4.084 9.155 C 1.845 9.151 0.005 7.096 0 4.578 C -0.005 2.059 1.787 -0.004 4.066 0 C 6.345 0.004 8.17 2.059 8.15 4.581 C 8.13 7.104 6.363 9.16 4.084 9.155 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      D() &&
                        l(S, {
                          className: `framer-123cacy`,
                          "data-framer-name": `Dribbble logo`,
                          layoutDependency: x,
                          layoutId: `QutrszaHk`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><g></g></svg>`,
                          variants: { "pdV6isCFH-hover": { rotate: -30 } },
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "pdV6isCFH-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42" overflow="visible"><g><g><defs><linearGradient id="idsQkwllmDQ2QutrszaHk_2g-1954971929" x1="1" x2="0" y1="0.47993771884335" y2="0.52006228115665"><stop offset="0" stop-color="rgb(249, 86, 153)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(230, 30, 150)" stop-opacity="1"></stop></linearGradient></defs><path d="M 20.999 0 C 9.42 0 0 9.421 0 21 C 0 32.579 9.42 42 20.999 42 C 32.578 42 42 32.58 42 21 C 42 9.421 32.579 0 20.999 0 Z M 34.818 9.911 C 37.213 12.884 38.669 16.638 38.736 20.729 C 37.939 20.565 34.564 19.935 30.53 19.935 C 29.228 19.935 27.858 20.001 26.485 20.171 C 26.369 19.888 26.253 19.608 26.131 19.323 C 25.775 18.484 25.391 17.652 24.994 16.832 C 31.203 14.271 34.197 10.716 34.819 9.912 Z M 20.999 3.288 C 25.474 3.288 29.564 4.952 32.688 7.694 C 32.193 8.37 29.511 11.727 23.525 13.991 C 20.754 8.92 17.721 4.72 16.999 3.745 C 18.285 3.446 19.624 3.288 20.998 3.288 Z M 13.379 5.009 C 13.991 5.852 17.028 10.097 19.871 15.128 C 12.243 17.135 5.47 17.267 3.835 17.267 L 3.661 17.267 C 4.836 11.847 8.492 7.344 13.379 5.009 Z M 3.258 21.028 C 3.258 20.882 3.26 20.736 3.265 20.59 C 3.37 20.591 3.527 20.591 3.73 20.591 C 5.932 20.591 13.574 20.408 21.449 18.069 C 21.927 19.005 22.383 19.955 22.805 20.905 C 22.607 20.962 22.411 21.019 22.215 21.082 C 13.348 23.95 8.474 31.542 7.724 32.783 C 4.945 29.648 3.257 25.532 3.257 21.028 Z M 20.999 38.767 C 16.93 38.767 13.175 37.387 10.178 35.073 C 10.685 34.078 14.364 27.447 24.081 24.06 C 24.087 24.058 24.093 24.056 24.101 24.054 C 26.537 30.406 27.569 35.737 27.852 37.389 C 25.743 38.276 23.428 38.767 20.999 38.767 Z M 31.049 35.64 C 30.811 34.273 29.854 29.277 27.649 23.183 C 28.886 22.99 30.09 22.914 31.219 22.914 C 34.927 22.914 37.828 23.727 38.502 23.933 C 37.701 28.771 34.934 32.959 31.05 35.639 Z" fill="url(#idsQkwllmDQ2QutrszaHk_2g-1954971929)"></path></g></g></svg>`,
                              },
                              pdV6isCFH: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><g><path d="M 16.999 0 C 7.626 0 0 7.627 0 17 C 0 26.374 7.626 34 16.999 34 C 26.373 34 34 26.375 34 17 C 34 7.626 26.373 0 16.999 0 Z M 28.186 8.023 C 30.125 10.43 31.303 13.469 31.358 16.781 C 30.713 16.648 27.98 16.138 24.714 16.138 C 23.661 16.138 22.552 16.191 21.44 16.329 C 21.346 16.1 21.253 15.873 21.154 15.643 C 20.865 14.964 20.555 14.29 20.233 13.626 C 25.26 11.553 27.684 8.675 28.187 8.024 Z M 16.999 2.661 C 20.622 2.661 23.933 4.009 26.462 6.228 C 26.061 6.776 23.89 9.493 19.044 11.326 C 16.801 7.221 14.345 3.821 13.761 3.032 C 14.802 2.79 15.886 2.662 16.999 2.662 Z M 10.831 4.055 C 11.326 4.738 13.785 8.174 16.086 12.246 C 9.911 13.871 4.428 13.978 3.104 13.978 L 2.964 13.978 C 3.914 9.59 6.875 5.945 10.831 4.055 Z M 2.637 17.022 C 2.637 16.904 2.639 16.786 2.643 16.668 C 2.728 16.669 2.855 16.669 3.02 16.669 C 4.802 16.669 10.989 16.521 17.364 14.627 C 17.751 15.385 18.119 16.154 18.461 16.923 C 18.301 16.969 18.142 17.016 17.984 17.067 C 10.806 19.388 6.86 25.534 6.253 26.538 C 4.003 24.001 2.637 20.669 2.637 17.022 Z M 16.999 31.383 C 13.705 31.383 10.666 30.266 8.24 28.393 C 8.65 27.587 11.628 22.219 19.494 19.477 C 19.499 19.475 19.504 19.474 19.51 19.472 C 21.482 24.614 22.318 28.93 22.547 30.267 C 20.84 30.986 18.965 31.383 16.999 31.383 Z M 25.135 28.851 C 24.942 27.745 24.168 23.701 22.382 18.767 C 23.384 18.611 24.358 18.549 25.273 18.549 C 28.274 18.549 30.622 19.208 31.168 19.374 C 30.52 23.291 28.28 26.681 25.135 28.851 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Se() &&
                            p(S, {
                              className: `framer-3fjmxz`,
                              layoutDependency: x,
                              layoutId: `InNV9bCOm`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "pdV6isCFH-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42" overflow="visible"><g><defs><linearGradient id="idsQkwllmDQ2InNV9bCOm_1g-1954971929" x1="1" x2="0" y1="0.47993771884335" y2="0.52006228115665"><stop offset="0" stop-color="rgb(249, 86, 153)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(230, 30, 150)" stop-opacity="1"></stop></linearGradient></defs><path d="M 20.999 0 C 9.42 0 0 9.421 0 21 C 0 32.579 9.42 42 20.999 42 C 32.578 42 42 32.58 42 21 C 42 9.421 32.579 0 20.999 0 Z M 34.818 9.911 C 37.213 12.884 38.669 16.638 38.736 20.729 C 37.939 20.565 34.564 19.935 30.53 19.935 C 29.228 19.935 27.858 20.001 26.485 20.171 C 26.369 19.888 26.253 19.608 26.131 19.323 C 25.775 18.484 25.391 17.652 24.994 16.832 C 31.203 14.271 34.197 10.716 34.819 9.912 Z M 20.999 3.288 C 25.474 3.288 29.564 4.952 32.688 7.694 C 32.193 8.37 29.511 11.727 23.525 13.991 C 20.754 8.92 17.721 4.72 16.999 3.745 C 18.285 3.446 19.624 3.288 20.998 3.288 Z M 13.379 5.009 C 13.991 5.852 17.028 10.097 19.871 15.128 C 12.243 17.135 5.47 17.267 3.835 17.267 L 3.661 17.267 C 4.836 11.847 8.492 7.344 13.379 5.009 Z M 3.258 21.028 C 3.258 20.882 3.26 20.736 3.265 20.59 C 3.37 20.591 3.527 20.591 3.73 20.591 C 5.932 20.591 13.574 20.408 21.449 18.069 C 21.927 19.005 22.383 19.955 22.805 20.905 C 22.607 20.962 22.411 21.019 22.215 21.082 C 13.348 23.95 8.474 31.542 7.724 32.783 C 4.945 29.648 3.257 25.532 3.257 21.028 Z M 20.999 38.767 C 16.93 38.767 13.175 37.387 10.178 35.073 C 10.685 34.078 14.364 27.447 24.081 24.06 C 24.087 24.058 24.093 24.056 24.101 24.054 C 26.537 30.406 27.569 35.737 27.852 37.389 C 25.743 38.276 23.428 38.767 20.999 38.767 Z M 31.049 35.64 C 30.811 34.273 29.854 29.277 27.649 23.183 C 28.886 22.99 30.09 22.914 31.219 22.914 C 34.927 22.914 37.828 23.727 38.502 23.933 C 37.701 28.771 34.934 32.959 31.05 35.639 Z" fill="url(#idsQkwllmDQ2InNV9bCOm_1g-1954971929)"></path></g></svg>`,
                                  },
                                  pdV6isCFH: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><path d="M 16.999 0 C 7.626 0 0 7.627 0 17 C 0 26.374 7.626 34 16.999 34 C 26.373 34 34 26.375 34 17 C 34 7.626 26.373 0 16.999 0 Z M 28.186 8.023 C 30.125 10.43 31.303 13.469 31.358 16.781 C 30.713 16.648 27.98 16.138 24.714 16.138 C 23.661 16.138 22.552 16.191 21.44 16.329 C 21.346 16.1 21.253 15.873 21.154 15.643 C 20.865 14.964 20.555 14.29 20.233 13.626 C 25.26 11.553 27.684 8.675 28.187 8.024 Z M 16.999 2.661 C 20.622 2.661 23.933 4.009 26.462 6.228 C 26.061 6.776 23.89 9.493 19.044 11.326 C 16.801 7.221 14.345 3.821 13.761 3.032 C 14.802 2.79 15.886 2.662 16.999 2.662 Z M 10.831 4.055 C 11.326 4.738 13.785 8.174 16.086 12.246 C 9.911 13.871 4.428 13.978 3.104 13.978 L 2.964 13.978 C 3.914 9.59 6.875 5.945 10.831 4.055 Z M 2.637 17.022 C 2.637 16.904 2.639 16.786 2.643 16.668 C 2.728 16.669 2.855 16.669 3.02 16.669 C 4.802 16.669 10.989 16.521 17.364 14.627 C 17.751 15.385 18.119 16.154 18.461 16.923 C 18.301 16.969 18.142 17.016 17.984 17.067 C 10.806 19.388 6.86 25.534 6.253 26.538 C 4.003 24.001 2.637 20.669 2.637 17.022 Z M 16.999 31.383 C 13.705 31.383 10.666 30.266 8.24 28.393 C 8.65 27.587 11.628 22.219 19.494 19.477 C 19.499 19.475 19.504 19.474 19.51 19.472 C 21.482 24.614 22.318 28.93 22.547 30.267 C 20.84 30.986 18.965 31.383 16.999 31.383 Z M 25.135 28.851 C 24.942 27.745 24.168 23.701 22.382 18.767 C 23.384 18.611 24.358 18.549 25.273 18.549 C 28.274 18.549 30.622 19.208 31.168 19.374 C 30.52 23.291 28.28 26.681 25.135 28.851 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1byjmua`,
                                  layoutDependency: x,
                                  layoutId: `JPZPAB269`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><path d="M 16.999 0 C 7.626 0 0 7.627 0 17 C 0 26.374 7.626 34 16.999 34 C 26.373 34 34 26.375 34 17 C 34 7.626 26.373 0 16.999 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42" overflow="visible"><path d="M 20.999 0 C 9.42 0 0 9.421 0 21 C 0 32.579 9.42 42 20.999 42 C 32.578 42 42 32.58 42 21 C 42 9.421 32.579 0 20.999 0 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-hpwu3z`,
                                  layoutDependency: x,
                                  layoutId: `Fze5MaPb6`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.124 8.757" overflow="visible"><path d="M 7.952 0 C 9.891 2.406 11.07 5.446 11.124 8.757 C 10.479 8.625 7.747 8.115 4.481 8.115 C 3.427 8.115 2.318 8.168 1.207 8.305 C 1.113 8.077 1.019 7.849 0.92 7.619 C 0.632 6.94 0.322 6.266 0 5.603 C 5.026 3.529 7.45 0.652 7.953 0.001 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.742 10.818" overflow="visible"><path d="M 9.824 0 C 12.219 2.973 13.675 6.727 13.742 10.818 C 12.945 10.654 9.57 10.024 5.535 10.024 C 4.234 10.024 2.864 10.09 1.491 10.26 C 1.375 9.977 1.259 9.696 1.137 9.412 C 0.781 8.573 0.397 7.741 0 6.921 C 6.209 4.36 9.203 0.805 9.824 0.001 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1whp4m4`,
                                  layoutDependency: x,
                                  layoutId: `bb14wvhpZ`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.7 8.665" overflow="visible"><path d="M 3.238 0 C 6.861 0 10.172 1.347 12.7 3.567 C 12.3 4.114 10.129 6.832 5.283 8.665 C 3.04 4.559 0.584 1.159 0 0.37 C 1.041 0.129 2.125 0.001 3.238 0.001 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.689 10.703" overflow="visible"><path d="M 4 0 C 8.475 0 12.565 1.664 15.689 4.406 C 15.194 5.082 12.512 8.439 6.526 10.703 C 3.755 5.632 0.722 1.432 0 0.457 C 1.286 0.159 2.625 0.001 3.999 0.001 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-6jjzgy`,
                                  layoutDependency: x,
                                  layoutId: `t_akqKpPv`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.122 9.923" overflow="visible"><path d="M 7.867 0 C 8.362 0.683 10.821 4.119 13.122 8.191 C 6.947 9.816 1.464 9.923 0.141 9.923 L 0 9.923 C 0.951 5.536 3.911 1.89 7.867 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.21 12.258" overflow="visible"><path d="M 9.718 0 C 10.33 0.843 13.367 5.088 16.21 10.119 C 8.582 12.126 1.809 12.258 0.174 12.258 L 0 12.258 C 1.175 6.838 4.831 2.335 9.718 0 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-vfy2de`,
                                  layoutDependency: x,
                                  layoutId: `IER9uEJly`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.825 11.911" overflow="visible"><path d="M 0.001 2.395 C 0.001 2.277 0.003 2.159 0.006 2.041 C 0.092 2.042 0.219 2.042 0.383 2.042 C 2.165 2.042 8.352 1.894 14.727 0 C 15.114 0.758 15.483 1.527 15.825 2.296 C 15.664 2.342 15.505 2.388 15.347 2.44 C 8.169 4.761 4.224 10.907 3.616 11.911 C 1.367 9.373 0 6.042 0 2.395 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.548 14.714" overflow="visible"><path d="M 0.001 2.959 C 0.001 2.813 0.003 2.667 0.008 2.521 C 0.113 2.522 0.27 2.522 0.473 2.522 C 2.675 2.522 10.317 2.339 18.192 0 C 18.67 0.936 19.126 1.886 19.548 2.836 C 19.35 2.893 19.154 2.95 18.959 3.014 C 10.091 5.881 5.217 13.473 4.467 14.714 C 1.689 11.579 0 7.464 0 2.959 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-ugc100`,
                                  layoutDependency: x,
                                  layoutId: `PtQqRdGAc`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.308 11.91" overflow="visible"><path d="M 8.76 11.91 C 5.466 11.91 2.426 10.793 0 8.92 C 0.411 8.115 3.389 2.746 11.255 0.005 C 11.26 0.003 11.265 0.001 11.271 0 C 13.243 5.142 14.078 9.458 14.308 10.795 C 12.6 11.513 10.726 11.91 8.76 11.91 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.674 14.713" overflow="visible"><path d="M 10.821 14.713 C 6.752 14.713 2.997 13.333 0 11.019 C 0.507 10.024 4.186 3.393 13.903 0.006 C 13.909 0.003 13.915 0.002 13.923 0 C 16.359 6.352 17.391 11.683 17.674 13.335 C 15.565 14.222 13.249 14.713 10.821 14.713 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-2r1z96`,
                                  layoutDependency: x,
                                  layoutId: `gt4jA8Kl9`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.786 10.302" overflow="visible"><path d="M 2.752 10.302 C 2.56 9.195 1.786 5.151 0 0.218 C 1.002 0.061 1.976 0 2.89 0 C 5.892 0 8.24 0.658 8.786 0.825 C 8.137 4.742 5.898 8.132 2.753 10.301 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "pdV6isCFH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.853 12.726" overflow="visible"><path d="M 3.4 12.726 C 3.162 11.359 2.206 6.363 0 0.269 C 1.238 0.076 2.441 0 3.571 0 C 7.278 0 10.179 0.813 10.853 1.019 C 10.052 5.857 7.285 10.045 3.401 12.725 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      O() &&
                        l(S, {
                          className: `framer-1m16bg5`,
                          "data-framer-name": `Dropbox loogo`,
                          layoutDependency: x,
                          layoutId: `E3FNdrc77`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 29" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "vZzIF5HDu-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 39" overflow="visible"><g><g><path d="M 0 7.334 L 11.754 14.668 L 23.508 7.334 L 11.755 0 Z" fill="rgb(0, 93, 240)"></path><path d="M 23.491 7.334 L 35.245 14.668 L 47 7.334 L 35.245 0 Z M 0 21.901 L 11.755 29.235 L 23.508 21.901 L 11.755 14.567 Z" fill="rgb(0, 93, 240)"></path><path d="M 35.245 14.566 L 23.491 21.9 L 35.245 29.234 L 46.999 21.9 Z M 11.83 31.666 L 23.584 39 L 35.338 31.666 L 23.584 24.332 Z" fill="rgb(0, 93, 240)"></path></g></g></svg>`,
                              },
                              vZzIF5HDu: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 29" overflow="visible"><g><g><path d="M 0 5.454 L 8.753 10.907 L 17.506 5.454 L 8.753 0 Z" fill="rgb(249,249,249)"></path><path d="M 17.493 5.454 L 26.247 10.907 L 35 5.454 L 26.247 0 Z M 0 16.285 L 8.753 21.739 L 17.506 16.285 L 8.753 10.832 Z" fill="rgb(249,249,249)"></path><path d="M 26.247 10.831 L 17.493 16.285 L 26.247 21.738 L 34.999 16.285 Z M 8.809 23.546 L 17.562 29 L 26.316 23.546 L 17.562 18.093 Z" fill="rgb(249,249,249)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ce() &&
                            p(S, {
                              className: `framer-1lgraso`,
                              "data-framer-name": `Dropbox logo`,
                              layoutDependency: x,
                              layoutId: `UwFZulpSr`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 29" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "vZzIF5HDu-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 39" overflow="visible"><g><path d="M 0 7.334 L 11.754 14.668 L 23.508 7.334 L 11.755 0 Z" fill="rgb(0, 93, 240)"></path><path d="M 23.491 7.334 L 35.245 14.668 L 47 7.334 L 35.245 0 Z M 0 21.901 L 11.755 29.235 L 23.508 21.901 L 11.755 14.567 Z" fill="rgb(0, 93, 240)"></path><path d="M 35.245 14.566 L 23.491 21.9 L 35.245 29.234 L 46.999 21.9 Z M 11.83 31.666 L 23.584 39 L 35.338 31.666 L 23.584 24.332 Z" fill="rgb(0, 93, 240)"></path></g></svg>`,
                                  },
                                  vZzIF5HDu: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 29" overflow="visible"><g><path d="M 0 5.454 L 8.753 10.907 L 17.506 5.454 L 8.753 0 Z" fill="rgb(249,249,249)"></path><path d="M 17.493 5.454 L 26.247 10.907 L 35 5.454 L 26.247 0 Z M 0 16.285 L 8.753 21.739 L 17.506 16.285 L 8.753 10.832 Z" fill="rgb(249,249,249)"></path><path d="M 26.247 10.831 L 17.493 16.285 L 26.247 21.738 L 34.999 16.285 Z M 8.809 23.546 L 17.562 29 L 26.316 23.546 L 17.562 18.093 Z" fill="rgb(249,249,249)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-yz4o9v`,
                                  layoutDependency: x,
                                  layoutId: `JehRAVw2E`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.506 10.907" overflow="visible"><path d="M 0 5.454 L 8.753 10.907 L 17.506 5.454 L 8.753 0 Z" fill="rgb(249,249,249)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "vZzIF5HDu-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.508 14.668" overflow="visible"><path d="M 0 7.334 L 11.754 14.668 L 23.508 7.334 L 11.755 0 Z" fill="rgb(0, 93, 240)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                p(S, {
                                  className: `framer-1wydyl2`,
                                  layoutDependency: x,
                                  layoutId: `iOEgHc8lt`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 21.739" overflow="visible"><path d="M 17.493 5.454 L 26.247 10.907 L 35 5.454 L 26.247 0 Z M 0 16.285 L 8.753 21.739 L 17.506 16.285 L 8.753 10.832 Z" fill="rgb(249,249,249)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "vZzIF5HDu-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 29.235" overflow="visible"><path d="M 23.491 7.334 L 35.245 14.668 L 47 7.334 L 35.245 0 Z M 0 21.901 L 11.755 29.235 L 23.508 21.901 L 11.755 14.567 Z" fill="rgb(0, 93, 240)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-1b2pn9c`,
                                      layoutDependency: x,
                                      layoutId: `klHOc7PJP`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.507 10.907" overflow="visible"><path d="M 0 5.454 L 8.753 10.907 L 17.507 5.454 L 8.753 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "vZzIF5HDu-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.509 14.668" overflow="visible"><path d="M 0 7.334 L 11.755 14.668 L 23.509 7.334 L 11.755 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-hypw4l`,
                                      layoutDependency: x,
                                      layoutId: `RyX8YJa_p`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.506 10.907" overflow="visible"><path d="M 0 5.454 L 8.753 10.907 L 17.506 5.454 L 8.753 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "vZzIF5HDu-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.508 14.668" overflow="visible"><path d="M 0 7.334 L 11.755 14.668 L 23.508 7.334 L 11.755 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                p(S, {
                                  className: `framer-1dllq1t`,
                                  layoutDependency: x,
                                  layoutId: `Jk2PUARTc`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.19 18.169" overflow="visible"><path d="M 17.437 0 L 8.684 5.454 L 17.437 10.907 L 26.19 5.454 Z M 0 12.715 L 8.753 18.169 L 17.506 12.715 L 8.753 7.262 Z" fill="rgb(249,249,249)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "vZzIF5HDu-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.17 24.434" overflow="visible"><path d="M 23.416 0 L 11.661 7.334 L 23.416 14.668 L 35.17 7.334 Z M 0 17.1 L 11.754 24.434 L 23.508 17.1 L 11.754 9.767 Z" fill="rgb(0, 93, 240)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-1fv933c`,
                                      layoutDependency: x,
                                      layoutId: `NYRXgTEh8`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.506 10.907" overflow="visible"><path d="M 8.753 0 L 0 5.454 L 8.753 10.907 L 17.506 5.454 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "vZzIF5HDu-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.508 14.668" overflow="visible"><path d="M 11.755 0 L 0 7.334 L 11.755 14.668 L 23.508 7.334 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-16acosd`,
                                      layoutDependency: x,
                                      layoutId: `XAm2r6ShH`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.506 10.907" overflow="visible"><path d="M 0 5.453 L 8.753 10.907 L 17.506 5.453 L 8.753 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "vZzIF5HDu-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.508 14.668" overflow="visible"><path d="M 0 7.333 L 11.754 14.668 L 23.508 7.333 L 11.754 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      we() &&
                        l(S, {
                          className: `framer-1667mrf`,
                          "data-framer-name": `Facebook logo`,
                          layoutDependency: x,
                          layoutId: `KqWMPTg6Y`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 40" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "qQ3t0NM9J-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 49" overflow="visible"><g><g><defs><linearGradient id="idsq0dsrTBRiKqWMPTg6Y_2g319619430" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(26, 105, 229)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(40, 41, 171)" stop-opacity="1"></stop></linearGradient></defs><path d="M 17.215 49 L 17.215 27.563 L 24.296 27.563 L 25.644 18.695 L 17.215 18.695 L 17.215 12.94 C 17.215 10.514 18.392 8.149 22.167 8.149 L 26 8.149 L 26 0.599 C 26 0.599 22.522 0 19.197 0 C 12.254 0 7.717 4.247 7.717 11.936 L 7.717 18.695 L 0 18.695 L 0 27.563 L 7.717 27.563 L 7.717 49 Z" fill="url(#idsq0dsrTBRiKqWMPTg6Y_2g319619430)"></path></g></g></svg>`,
                              },
                              qQ3t0NM9J: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 40" overflow="visible"><g><path d="M 13.904 40 L 13.904 22.5 L 19.624 22.5 L 20.712 15.261 L 13.904 15.261 L 13.904 10.563 C 13.904 8.583 14.855 6.652 17.904 6.652 L 21 6.652 L 21 0.489 C 21 0.489 18.191 0 15.505 0 C 9.897 0 6.233 3.467 6.233 9.743 L 6.233 15.261 L 0 15.261 L 0 22.5 L 6.233 22.5 L 6.233 40 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Te() &&
                            l(S, {
                              className: `framer-1oofrr0`,
                              layoutDependency: x,
                              layoutId: `VVCaC2JaB`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 40" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "qQ3t0NM9J-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 49" overflow="visible"><g><defs><linearGradient id="idsq0dsrTBRiVVCaC2JaB_1g319619430" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(26, 105, 229)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(40, 41, 171)" stop-opacity="1"></stop></linearGradient></defs><path d="M 17.215 49 L 17.215 27.563 L 24.296 27.563 L 25.644 18.695 L 17.215 18.695 L 17.215 12.94 C 17.215 10.514 18.392 8.149 22.167 8.149 L 26 8.149 L 26 0.599 C 26 0.599 22.522 0 19.197 0 C 12.254 0 7.717 4.247 7.717 11.936 L 7.717 18.695 L 0 18.695 L 0 27.563 L 7.717 27.563 L 7.717 49 Z" fill="url(#idsq0dsrTBRiVVCaC2JaB_1g319619430)"></path></g></svg>`,
                                  },
                                  qQ3t0NM9J: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 40" overflow="visible"><path d="M 13.904 40 L 13.904 22.5 L 19.624 22.5 L 20.712 15.261 L 13.904 15.261 L 13.904 10.563 C 13.904 8.583 14.855 6.652 17.904 6.652 L 21 6.652 L 21 0.489 C 21 0.489 18.191 0 15.505 0 C 9.897 0 6.233 3.467 6.233 9.743 L 6.233 15.261 L 0 15.261 L 0 22.5 L 6.233 22.5 L 6.233 40 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                            }),
                        }),
                      k() &&
                        l(S, {
                          className: `framer-ggiqcg`,
                          "data-framer-name": `Google logo`,
                          layoutDependency: x,
                          layoutId: `H67JQLjsL`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "ea3V8_QYN-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" overflow="visible"><g><g><path d="M 19.989 31.92 C 14.835 31.92 10.446 28.646 8.785 24.064 L 2.241 29.213 C 5.572 35.622 12.27 40 19.989 40 C 24.982 40 29.549 38.168 33.051 35.14 L 26.324 30.097 C 24.488 31.252 22.317 31.92 19.989 31.92 Z" fill="rgb(255, 255, 255)"></path><path d="M 20 8.08 C 22.918 8.08 25.59 9.129 27.661 10.87 L 33.418 5.174 C 29.871 1.959 25.164 0 20 0 C 12.208 0 5.457 4.461 2.16 10.969 L 8.712 16.179 C 10.304 11.47 14.757 8.08 20 8.08 Z" fill="rgb(255, 255, 255)"></path><path d="M 8.076 19.989 C 8.076 18.654 8.296 17.37 8.702 16.17 L 2.149 10.96 C 0.774 13.673 0 16.74 0 19.989 C 0 23.239 0.809 26.443 2.242 29.201 L 8.786 24.052 C 8.327 22.784 8.076 21.416 8.076 19.99 Z" fill="rgb(255, 255, 255)"></path><path d="M 8.72 16.188 M 27.669 10.879" fill="rgb(255, 255, 255)"></path><path d="M 39.706 16.541 L 19.722 16.541 L 19.722 24.037 L 31.215 24.037 C 30.305 26.552 28.574 28.673 26.345 30.075 L 33.073 35.118 C 36.34 32.294 38.684 28.428 39.588 24.038 C 39.858 22.727 40 21.371 40 19.981 C 40 18.809 39.899 17.659 39.706 16.542 Z" fill="rgb(255, 255, 255)"></path></g></g></svg>`,
                              },
                              ea3V8_QYN: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"><g><g><path d="M 15.991 25.536 C 11.868 25.536 8.356 22.917 7.028 19.251 L 1.793 23.37 C 4.458 28.498 9.816 32 15.991 32 C 19.986 32 23.639 30.534 26.441 28.112 L 21.059 24.078 C 19.591 25.002 17.853 25.536 15.991 25.536 Z" fill="rgb(39,152,71)"></path><path d="M 16 6.464 C 18.334 6.464 20.472 7.303 22.129 8.696 L 26.735 4.139 C 23.897 1.567 20.131 0 16 0 C 9.766 0 4.366 3.569 1.728 8.775 L 6.97 12.943 C 8.243 9.176 11.805 6.464 16 6.464 Z" fill="rgb(219,68,55)"></path><path d="M 6.461 15.992 C 6.461 14.923 6.637 13.896 6.961 12.936 L 1.719 8.768 C 0.619 10.938 0 13.392 0 15.992 C 0 18.591 0.647 21.155 1.794 23.361 L 7.029 19.241 C 6.661 18.227 6.461 17.133 6.461 15.992 Z" fill="rgb(244,180,0)"></path><path d="M 6.976 12.95 M 22.135 8.703" fill="transparent"></path><path d="M 31.765 13.233 L 15.778 13.233 L 15.778 19.23 L 24.972 19.23 C 24.244 21.241 22.859 22.938 21.076 24.06 L 26.458 28.095 C 29.072 25.835 30.947 22.743 31.671 19.23 C 31.887 18.182 32 17.097 32 15.984 C 32 15.047 31.919 14.127 31.765 13.234 Z" fill="rgb(66,133,244)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ee() &&
                            p(S, {
                              className: `framer-buke33`,
                              "data-framer-name": `Google logo`,
                              layoutDependency: x,
                              layoutId: `Cul6t1M8X`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "ea3V8_QYN-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" overflow="visible"><g><path d="M 19.989 31.92 C 14.835 31.92 10.446 28.646 8.785 24.064 L 2.241 29.213 C 5.572 35.622 12.27 40 19.989 40 C 24.982 40 29.549 38.168 33.051 35.14 L 26.324 30.097 C 24.488 31.252 22.317 31.92 19.989 31.92 Z" fill="rgb(255, 255, 255)"></path><path d="M 20 8.08 C 22.918 8.08 25.59 9.129 27.661 10.87 L 33.418 5.174 C 29.871 1.959 25.164 0 20 0 C 12.208 0 5.457 4.461 2.16 10.969 L 8.712 16.179 C 10.304 11.47 14.757 8.08 20 8.08 Z" fill="rgb(255, 255, 255)"></path><path d="M 8.076 19.989 C 8.076 18.654 8.296 17.37 8.702 16.17 L 2.149 10.96 C 0.774 13.673 0 16.74 0 19.989 C 0 23.239 0.809 26.443 2.242 29.201 L 8.786 24.052 C 8.327 22.784 8.076 21.416 8.076 19.99 Z" fill="rgb(255, 255, 255)"></path><path d="M 8.72 16.188 M 27.669 10.879" fill="rgb(255, 255, 255)"></path><path d="M 39.706 16.541 L 19.722 16.541 L 19.722 24.037 L 31.215 24.037 C 30.305 26.552 28.574 28.673 26.345 30.075 L 33.073 35.118 C 36.34 32.294 38.684 28.428 39.588 24.038 C 39.858 22.727 40 21.371 40 19.981 C 40 18.809 39.899 17.659 39.706 16.542 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                  },
                                  ea3V8_QYN: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"><g><path d="M 15.991 25.536 C 11.868 25.536 8.356 22.917 7.028 19.251 L 1.793 23.37 C 4.458 28.498 9.816 32 15.991 32 C 19.986 32 23.639 30.534 26.441 28.112 L 21.059 24.078 C 19.591 25.002 17.853 25.536 15.991 25.536 Z" fill="rgb(39,152,71)"></path><path d="M 16 6.464 C 18.334 6.464 20.472 7.303 22.129 8.696 L 26.735 4.139 C 23.897 1.567 20.131 0 16 0 C 9.766 0 4.366 3.569 1.728 8.775 L 6.97 12.943 C 8.243 9.176 11.805 6.464 16 6.464 Z" fill="rgb(219,68,55)"></path><path d="M 6.461 15.992 C 6.461 14.923 6.637 13.896 6.961 12.936 L 1.719 8.768 C 0.619 10.938 0 13.392 0 15.992 C 0 18.591 0.647 21.155 1.794 23.361 L 7.029 19.241 C 6.661 18.227 6.461 17.133 6.461 15.992 Z" fill="rgb(244,180,0)"></path><path d="M 6.976 12.95 M 22.135 8.703" fill="transparent"></path><path d="M 31.765 13.233 L 15.778 13.233 L 15.778 19.23 L 24.972 19.23 C 24.244 21.241 22.859 22.938 21.076 24.06 L 26.458 28.095 C 29.072 25.835 30.947 22.743 31.671 19.23 C 31.887 18.182 32 17.097 32 15.984 C 32 15.047 31.919 14.127 31.765 13.234 Z" fill="rgb(66,133,244)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1c0m8hm`,
                                  layoutDependency: x,
                                  layoutId: `hW0Khavt4`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.648 12.749" overflow="visible"><path d="M 14.198 6.285 C 10.075 6.285 6.564 3.666 5.235 0 L 0 4.119 C 2.665 9.247 8.023 12.749 14.198 12.749 C 18.193 12.749 21.846 11.283 24.648 8.861 L 19.266 4.827 C 17.798 5.751 16.06 6.285 14.198 6.285 Z" fill="rgb(39,152,71)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ea3V8_QYN-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.81 15.936" overflow="visible"><path d="M 17.748 7.857 C 12.594 7.857 8.204 4.582 6.544 0 L 0 5.149 C 3.331 11.559 10.028 15.936 17.748 15.936 C 22.741 15.936 27.308 14.104 30.81 11.077 L 24.083 6.033 C 22.247 7.188 20.075 7.857 17.748 7.857 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-m32coh`,
                                  layoutDependency: x,
                                  layoutId: `treY6ngE_`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.007 12.943" overflow="visible"><path d="M 14.273 6.464 C 16.607 6.464 18.745 7.303 20.401 8.696 L 25.007 4.139 C 22.169 1.567 18.404 0 14.273 0 C 8.038 0 2.638 3.569 0 8.775 L 5.242 12.943 C 6.515 9.176 10.078 6.464 14.273 6.464 Z" fill="rgb(219,68,55)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ea3V8_QYN-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.259 16.179" overflow="visible"><path d="M 17.841 8.08 C 20.758 8.08 23.431 9.129 25.502 10.87 L 31.259 5.174 C 27.712 1.959 23.004 0 17.841 0 C 10.048 0 3.297 4.461 0 10.969 L 6.552 16.179 C 8.144 11.47 12.597 8.08 17.841 8.08 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-y0oa1r`,
                                  layoutDependency: x,
                                  layoutId: `qYX6ktLxr`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.029 14.593" overflow="visible"><path d="M 6.461 7.223 C 6.461 6.155 6.637 5.128 6.961 4.168 L 1.719 0 C 0.619 2.17 0 4.624 0 7.223 C 0 9.823 0.647 12.387 1.794 14.593 L 7.029 10.473 C 6.661 9.459 6.461 8.365 6.461 7.224 Z" fill="rgb(244,180,0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ea3V8_QYN-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.786 18.241" overflow="visible"><path d="M 8.076 9.029 C 8.076 7.694 8.296 6.409 8.702 5.21 L 2.149 0 C 0.774 2.713 0 5.78 0 9.029 C 0 12.279 0.809 15.483 2.242 18.241 L 8.786 13.091 C 8.327 11.824 8.076 10.456 8.076 9.03 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                p(S, {
                                  className: `framer-f8gcg5`,
                                  layoutDependency: x,
                                  layoutId: `UrUrwLOLD`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0 M 15.159 -4.247" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ea3V8_QYN-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0 M 18.949 -5.309" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-56y3gg`,
                                      layoutDependency: x,
                                      layoutId: `TAJ28l4ij`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "ea3V8_QYN-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-hp68ym`,
                                      layoutDependency: x,
                                      layoutId: `SxCGx0fE8`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "ea3V8_QYN-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                l(S, {
                                  className: `framer-11v4whn`,
                                  layoutDependency: x,
                                  layoutId: `hpBy83H_4`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.222 14.862" overflow="visible"><path d="M 15.987 0 L 0 0 L 0 5.997 L 9.194 5.997 C 8.466 8.008 7.081 9.705 5.298 10.827 L 10.68 14.862 C 13.294 12.602 15.169 9.51 15.893 5.997 C 16.109 4.949 16.222 3.864 16.222 2.751 C 16.222 1.814 16.141 0.894 15.987 0.001 Z" fill="rgb(66,133,244)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ea3V8_QYN-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.278 18.577" overflow="visible"><path d="M 19.983 0 L 0 0 L 0 7.496 L 11.493 7.496 C 10.583 10.011 8.851 12.131 6.623 13.534 L 13.35 18.577 C 16.617 15.753 18.961 11.887 19.866 7.497 C 20.136 6.186 20.278 4.83 20.278 3.439 C 20.278 2.267 20.176 1.118 19.983 0.001 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      De() &&
                        l(S, {
                          className: `framer-1dmig4g`,
                          "data-framer-name": `Instagram logo`,
                          layoutDependency: x,
                          layoutId: `bxrYUzJRX`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "BZAAmM5J2-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49" overflow="visible"><g><g><g><defs><linearGradient id="idsmXvVlOvx8bxrYUzJRX_3g-1985954287" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(254, 191, 61)" stop-opacity="1"></stop><stop offset="0.29103322072072074" stop-color="rgb(249, 64, 135)" stop-opacity="1"></stop><stop offset="0.7508621903153153" stop-color="rgb(143, 72, 210)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(98, 78, 236)" stop-opacity="1"></stop></linearGradient></defs><path d="M 37.472 8.749 C 35.886 8.749 34.6 10.035 34.6 11.621 C 34.6 13.208 35.886 14.494 37.472 14.494 C 39.059 14.494 40.345 13.208 40.345 11.621 C 40.345 10.035 39.059 8.749 37.472 8.749 Z M 24.702 12.434 C 18.048 12.434 12.635 17.847 12.635 24.501 C 12.635 31.155 18.048 36.568 24.702 36.568 C 31.356 36.568 36.769 31.155 36.769 24.501 C 36.769 17.847 31.356 12.434 24.702 12.434 Z M 24.702 32.23 C 20.44 32.23 16.972 28.763 16.972 24.501 C 16.972 20.239 20.439 16.771 24.702 16.771 C 28.965 16.771 32.431 20.239 32.431 24.501 C 32.431 28.763 28.964 32.23 24.702 32.23 Z" fill="url(#idsmXvVlOvx8bxrYUzJRX_3g-1985954287)"></path></g><g><defs><linearGradient id="idsmXvVlOvx8bxrYUzJRX_4g-1985954287" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(254, 191, 61)" stop-opacity="1"></stop><stop offset="0.29103322072072074" stop-color="rgb(249, 64, 135)" stop-opacity="1"></stop><stop offset="0.7508621903153153" stop-color="rgb(143, 72, 210)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(98, 78, 236)" stop-opacity="1"></stop></linearGradient></defs><path d="M 34.282 0 L 14.719 0 C 6.603 0 0 6.603 0 14.718 L 0 34.282 C 0 42.397 6.603 49 14.718 49 L 34.281 49 C 42.396 49 49 42.397 49 34.282 L 49 14.718 C 49.001 6.603 42.397 0 34.282 0 Z M 44.391 34.283 C 44.391 39.857 39.856 44.391 34.281 44.391 L 14.718 44.391 C 9.144 44.391 4.609 39.857 4.609 34.283 L 4.609 14.719 C 4.609 9.145 9.144 4.61 14.718 4.61 L 34.281 4.61 C 39.855 4.61 44.391 9.144 44.391 14.719 Z" fill="url(#idsmXvVlOvx8bxrYUzJRX_4g-1985954287)"></path></g></g></g></svg>`,
                              },
                              BZAAmM5J2: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><g><g><path d="M 29.825 6.963 C 28.562 6.963 27.539 7.987 27.539 9.25 C 27.539 10.512 28.562 11.536 29.825 11.536 C 31.088 11.536 32.111 10.512 32.111 9.25 C 32.111 7.987 31.088 6.963 29.825 6.963 Z M 19.661 9.896 C 14.365 9.896 10.056 14.204 10.056 19.501 C 10.056 24.797 14.365 29.105 19.661 29.105 C 24.957 29.105 29.265 24.797 29.265 19.501 C 29.265 14.204 24.957 9.896 19.661 9.896 Z M 19.661 25.653 C 16.268 25.653 13.508 22.893 13.508 19.501 C 13.508 16.108 16.268 13.349 19.661 13.349 C 23.054 13.349 25.813 16.108 25.813 19.501 C 25.813 22.893 23.053 25.653 19.661 25.653 Z" fill="rgb(255,255,255)"></path><path d="M 27.286 0 L 11.715 0 C 5.255 0 0 5.255 0 11.714 L 0 27.286 C 0 33.745 5.255 39 11.714 39 L 27.285 39 C 33.744 39 39 33.745 39 27.286 L 39 11.714 C 39.001 5.255 33.745 0 27.286 0 Z M 35.331 27.286 C 35.331 31.723 31.722 35.332 27.285 35.332 L 11.714 35.332 C 7.278 35.332 3.669 31.723 3.669 27.286 L 3.669 11.715 C 3.669 7.279 7.278 3.669 11.714 3.669 L 27.285 3.669 C 31.721 3.669 35.331 7.278 35.331 11.715 Z" fill="rgb(255,255,255)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Oe() &&
                            p(S, {
                              className: `framer-4dkt85`,
                              layoutDependency: x,
                              layoutId: `EWVB23pdx`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "BZAAmM5J2-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49" overflow="visible"><g><g><defs><linearGradient id="idsmXvVlOvx8EWVB23pdx_2g-1985954287" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(254, 191, 61)" stop-opacity="1"></stop><stop offset="0.29103322072072074" stop-color="rgb(249, 64, 135)" stop-opacity="1"></stop><stop offset="0.7508621903153153" stop-color="rgb(143, 72, 210)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(98, 78, 236)" stop-opacity="1"></stop></linearGradient></defs><path d="M 37.472 8.749 C 35.886 8.749 34.6 10.035 34.6 11.621 C 34.6 13.208 35.886 14.494 37.472 14.494 C 39.059 14.494 40.345 13.208 40.345 11.621 C 40.345 10.035 39.059 8.749 37.472 8.749 Z M 24.702 12.434 C 18.048 12.434 12.635 17.847 12.635 24.501 C 12.635 31.155 18.048 36.568 24.702 36.568 C 31.356 36.568 36.769 31.155 36.769 24.501 C 36.769 17.847 31.356 12.434 24.702 12.434 Z M 24.702 32.23 C 20.44 32.23 16.972 28.763 16.972 24.501 C 16.972 20.239 20.439 16.771 24.702 16.771 C 28.965 16.771 32.431 20.239 32.431 24.501 C 32.431 28.763 28.964 32.23 24.702 32.23 Z" fill="url(#idsmXvVlOvx8EWVB23pdx_2g-1985954287)"></path></g><g><defs><linearGradient id="idsmXvVlOvx8EWVB23pdx_3g-1985954287" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(254, 191, 61)" stop-opacity="1"></stop><stop offset="0.29103322072072074" stop-color="rgb(249, 64, 135)" stop-opacity="1"></stop><stop offset="0.7508621903153153" stop-color="rgb(143, 72, 210)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(98, 78, 236)" stop-opacity="1"></stop></linearGradient></defs><path d="M 34.282 0 L 14.719 0 C 6.603 0 0 6.603 0 14.718 L 0 34.282 C 0 42.397 6.603 49 14.718 49 L 34.281 49 C 42.396 49 49 42.397 49 34.282 L 49 14.718 C 49.001 6.603 42.397 0 34.282 0 Z M 44.391 34.283 C 44.391 39.857 39.856 44.391 34.281 44.391 L 14.718 44.391 C 9.144 44.391 4.609 39.857 4.609 34.283 L 4.609 14.719 C 4.609 9.145 9.144 4.61 14.718 4.61 L 34.281 4.61 C 39.855 4.61 44.391 9.144 44.391 14.719 Z" fill="url(#idsmXvVlOvx8EWVB23pdx_3g-1985954287)"></path></g></g></svg>`,
                                  },
                                  BZAAmM5J2: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><g><path d="M 29.825 6.963 C 28.562 6.963 27.539 7.987 27.539 9.25 C 27.539 10.512 28.562 11.536 29.825 11.536 C 31.088 11.536 32.111 10.512 32.111 9.25 C 32.111 7.987 31.088 6.963 29.825 6.963 Z M 19.661 9.896 C 14.365 9.896 10.056 14.204 10.056 19.501 C 10.056 24.797 14.365 29.105 19.661 29.105 C 24.957 29.105 29.265 24.797 29.265 19.501 C 29.265 14.204 24.957 9.896 19.661 9.896 Z M 19.661 25.653 C 16.268 25.653 13.508 22.893 13.508 19.501 C 13.508 16.108 16.268 13.349 19.661 13.349 C 23.054 13.349 25.813 16.108 25.813 19.501 C 25.813 22.893 23.053 25.653 19.661 25.653 Z" fill="rgb(255,255,255)"></path><path d="M 27.286 0 L 11.715 0 C 5.255 0 0 5.255 0 11.714 L 0 27.286 C 0 33.745 5.255 39 11.714 39 L 27.285 39 C 33.744 39 39 33.745 39 27.286 L 39 11.714 C 39.001 5.255 33.745 0 27.286 0 Z M 35.331 27.286 C 35.331 31.723 31.722 35.332 27.285 35.332 L 11.714 35.332 C 7.278 35.332 3.669 31.723 3.669 27.286 L 3.669 11.715 C 3.669 7.279 7.278 3.669 11.714 3.669 L 27.285 3.669 C 31.721 3.669 35.331 7.278 35.331 11.715 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                p(S, {
                                  className: `framer-zn7epu`,
                                  layoutDependency: x,
                                  layoutId: `FruaJAdl2`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.055 22.142" overflow="visible"><path d="M 19.769 0 C 18.506 0 17.483 1.023 17.483 2.286 C 17.483 3.549 18.506 4.572 19.769 4.572 C 21.032 4.572 22.055 3.549 22.055 2.286 C 22.055 1.023 21.032 0 19.769 0 Z M 9.605 2.933 C 4.308 2.933 0 7.241 0 12.537 C 0 17.834 4.308 22.142 9.605 22.142 C 14.901 22.142 19.209 17.834 19.209 12.537 C 19.209 7.241 14.901 2.933 9.605 2.933 Z M 9.605 18.689 C 6.212 18.689 3.452 15.93 3.452 12.537 C 3.452 9.145 6.212 6.385 9.605 6.385 C 12.998 6.385 15.757 9.145 15.757 12.537 C 15.757 15.93 12.997 18.689 9.605 18.689 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "BZAAmM5J2-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.71 27.819" overflow="visible"><g><defs><linearGradient id="idsmXvVlOvx8FruaJAdl2_1g-1985954287" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(254, 191, 61)" stop-opacity="1"></stop><stop offset="0.29103322072072074" stop-color="rgb(249, 64, 135)" stop-opacity="1"></stop><stop offset="0.7508621903153153" stop-color="rgb(143, 72, 210)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(98, 78, 236)" stop-opacity="1"></stop></linearGradient></defs><path d="M 24.838 0 C 23.251 0 21.965 1.286 21.965 2.872 C 21.965 4.459 23.251 5.745 24.838 5.745 C 26.424 5.745 27.71 4.459 27.71 2.872 C 27.71 1.286 26.424 0 24.838 0 Z M 12.067 3.685 C 5.413 3.685 0 9.098 0 15.752 C 0 22.406 5.413 27.819 12.067 27.819 C 18.722 27.819 24.135 22.406 24.135 15.752 C 24.135 9.098 18.722 3.685 12.067 3.685 Z M 12.067 23.481 C 7.805 23.481 4.337 20.014 4.337 15.752 C 4.337 11.49 7.804 8.023 12.067 8.023 C 16.33 8.023 19.797 11.49 19.797 15.752 C 19.797 20.014 16.33 23.481 12.067 23.481 Z" fill="url(#idsmXvVlOvx8FruaJAdl2_1g-1985954287)"></path></g></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-17fscp7`,
                                      layoutDependency: x,
                                      layoutId: `PM4ogTr_K`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.572 4.572" overflow="visible"><path d="M 2.286 0 C 1.023 0 0 1.023 0 2.286 C 0 3.549 1.023 4.572 2.286 4.572 C 3.549 4.572 4.572 3.549 4.572 2.286 C 4.572 1.023 3.549 0 2.286 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "BZAAmM5J2-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.745 5.745" overflow="visible"><path d="M 2.872 0 C 1.286 0 0 1.286 0 2.872 C 0 4.459 1.286 5.745 2.872 5.745 C 4.459 5.745 5.745 4.459 5.745 2.872 C 5.745 1.286 4.459 0 2.872 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-3ak6zd`,
                                      layoutDependency: x,
                                      layoutId: `iIN5e1Ug9`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.209 19.209" overflow="visible"><path d="M 9.605 0 C 4.308 0 0 4.308 0 9.605 C 0 14.901 4.308 19.209 9.605 19.209 C 14.901 19.209 19.209 14.901 19.209 9.605 C 19.209 4.308 14.901 0 9.605 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "BZAAmM5J2-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.135 24.135" overflow="visible"><path d="M 12.067 0 C 5.413 0 0 5.413 0 12.067 C 0 18.722 5.413 24.135 12.067 24.135 C 18.722 24.135 24.135 18.722 24.135 12.067 C 24.135 5.413 18.722 0 12.067 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1ht4ip1`,
                                      layoutDependency: x,
                                      layoutId: `it1h5Ep9h`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.305 12.304" overflow="visible"><path d="M 6.153 12.304 C 2.76 12.304 0 9.544 0 6.152 C 0 2.76 2.76 0 6.153 0 C 9.546 0 12.305 2.76 12.305 6.152 C 12.305 9.544 9.545 12.304 6.153 12.304 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "BZAAmM5J2-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.46 15.459" overflow="visible"><path d="M 7.73 15.459 C 3.468 15.459 0 11.992 0 7.729 C 0 3.467 3.467 0 7.73 0 C 11.993 0 15.46 3.467 15.46 7.729 C 15.46 11.992 11.993 15.459 7.73 15.459 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                p(S, {
                                  className: `framer-1v3dr3p`,
                                  layoutDependency: x,
                                  layoutId: `wMsJQ15Om`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><path d="M 27.286 0 L 11.715 0 C 5.255 0 0 5.255 0 11.714 L 0 27.286 C 0 33.745 5.255 39 11.714 39 L 27.285 39 C 33.744 39 39 33.745 39 27.286 L 39 11.714 C 39.001 5.255 33.745 0 27.286 0 Z M 35.331 27.286 C 35.331 31.723 31.722 35.332 27.285 35.332 L 11.714 35.332 C 7.278 35.332 3.669 31.723 3.669 27.286 L 3.669 11.715 C 3.669 7.279 7.278 3.669 11.714 3.669 L 27.285 3.669 C 31.721 3.669 35.331 7.278 35.331 11.715 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "BZAAmM5J2-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49" overflow="visible"><g><defs><linearGradient id="idsmXvVlOvx8wMsJQ15Om_1g-1985954287" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(254, 191, 61)" stop-opacity="1"></stop><stop offset="0.29103322072072074" stop-color="rgb(249, 64, 135)" stop-opacity="1"></stop><stop offset="0.7508621903153153" stop-color="rgb(143, 72, 210)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(98, 78, 236)" stop-opacity="1"></stop></linearGradient></defs><path d="M 34.282 0 L 14.719 0 C 6.603 0 0 6.603 0 14.718 L 0 34.282 C 0 42.397 6.603 49 14.718 49 L 34.281 49 C 42.396 49 49 42.397 49 34.282 L 49 14.718 C 49.001 6.603 42.397 0 34.282 0 Z M 44.391 34.283 C 44.391 39.857 39.856 44.391 34.281 44.391 L 14.718 44.391 C 9.144 44.391 4.609 39.857 4.609 34.283 L 4.609 14.719 C 4.609 9.145 9.144 4.61 14.718 4.61 L 34.281 4.61 C 39.855 4.61 44.391 9.144 44.391 14.719 Z" fill="url(#idsmXvVlOvx8wMsJQ15Om_1g-1985954287)"></path></g></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-3w1tw6`,
                                      layoutDependency: x,
                                      layoutId: `CN1y0kWwj`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><path d="M 27.286 0 L 11.715 0 C 5.255 0 0 5.255 0 11.714 L 0 27.286 C 0 33.745 5.255 39 11.714 39 L 27.285 39 C 33.744 39 39 33.745 39 27.286 L 39 11.714 C 39.001 5.255 33.745 0 27.286 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "BZAAmM5J2-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49" overflow="visible"><path d="M 34.282 0 L 14.719 0 C 6.603 0 0 6.603 0 14.718 L 0 34.282 C 0 42.397 6.603 49 14.718 49 L 34.281 49 C 42.396 49 49 42.397 49 34.282 L 49 14.718 C 49.001 6.603 42.397 0 34.282 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-g2ydbl`,
                                      layoutDependency: x,
                                      layoutId: `fCQFVDpuo`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.662 31.662" overflow="visible"><path d="M 31.662 23.617 C 31.662 28.053 28.053 31.662 23.616 31.662 L 8.046 31.662 C 3.609 31.662 0 28.053 0 23.617 L 0 8.046 C 0 3.609 3.609 0 8.046 0 L 23.616 0 C 28.052 0 31.662 3.609 31.662 8.046 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "BZAAmM5J2-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.781 39.781" overflow="visible"><path d="M 39.781 29.672 C 39.781 35.246 35.246 39.781 29.672 39.781 L 10.109 39.781 C 4.535 39.781 0 35.246 0 29.672 L 0 10.109 C 0 4.535 4.535 0 10.109 0 L 29.672 0 C 35.245 0 39.781 4.534 39.781 10.109 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      A() &&
                        l(S, {
                          className: `framer-1evzv6x`,
                          layoutDependency: x,
                          layoutId: `JnknvaUy0`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 31" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "a2vSS0CUH-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42" overflow="visible"><g><path d="M 0.693 13.943 L 9.407 13.943 L 9.407 42 L 0.693 42 Z M 5.052 0 C 7.838 0 10.096 2.266 10.096 5.053 C 10.096 7.839 7.838 10.113 5.052 10.113 C 2.265 10.113 0 7.844 0 5.053 C 0 2.261 2.258 0 5.052 0 M 14.867 13.943 L 23.213 13.943 L 23.213 17.78 L 23.328 17.78 C 24.492 15.572 27.329 13.248 31.567 13.248 C 40.376 13.248 42 19.055 42 26.612 L 42 42 L 33.305 42 L 33.305 28.359 C 33.305 25.103 33.242 20.918 28.783 20.918 C 24.324 20.918 23.563 24.462 23.563 28.121 L 23.563 42 L 14.867 42 Z" fill="rgb(9, 100, 188)"></path></g></svg>`,
                              },
                              a2vSS0CUH: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 31" overflow="visible"><g><path d="M 0.511 10.291 L 6.943 10.291 L 6.943 31 L 0.511 31 Z M 3.729 0 C 5.785 0 7.452 1.673 7.452 3.729 C 7.452 5.786 5.785 7.465 3.729 7.465 C 1.672 7.465 0 5.789 0 3.729 C 0 1.669 1.667 0 3.729 0 M 10.973 10.291 L 17.133 10.291 L 17.133 13.123 L 17.218 13.123 C 18.077 11.494 20.171 9.778 23.299 9.778 C 29.801 9.778 31 14.065 31 19.642 L 31 31 L 24.583 31 L 24.583 20.932 C 24.583 18.529 24.536 15.44 21.245 15.44 C 17.954 15.44 17.392 18.056 17.392 20.756 L 17.392 31 L 10.973 31 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            ke() &&
                            p(S, {
                              className: `framer-5vm7og`,
                              layoutDependency: x,
                              layoutId: `PomrMymqk`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 31" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "a2vSS0CUH-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 42" overflow="visible"><path d="M 0.693 13.943 L 9.407 13.943 L 9.407 42 L 0.693 42 Z M 5.052 0 C 7.838 0 10.096 2.266 10.096 5.053 C 10.096 7.839 7.838 10.113 5.052 10.113 C 2.265 10.113 0 7.844 0 5.053 C 0 2.261 2.258 0 5.052 0 M 14.867 13.943 L 23.213 13.943 L 23.213 17.78 L 23.328 17.78 C 24.492 15.572 27.329 13.248 31.567 13.248 C 40.376 13.248 42 19.055 42 26.612 L 42 42 L 33.305 42 L 33.305 28.359 C 33.305 25.103 33.242 20.918 28.783 20.918 C 24.324 20.918 23.563 24.462 23.563 28.121 L 23.563 42 L 14.867 42 Z" fill="rgb(9, 100, 188)"></path></svg>`,
                                  },
                                  a2vSS0CUH: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 31" overflow="visible"><path d="M 0.511 10.291 L 6.943 10.291 L 6.943 31 L 0.511 31 Z M 3.729 0 C 5.785 0 7.452 1.673 7.452 3.729 C 7.452 5.786 5.785 7.465 3.729 7.465 C 1.672 7.465 0 5.789 0 3.729 C 0 1.669 1.667 0 3.729 0 M 10.973 10.291 L 17.133 10.291 L 17.133 13.123 L 17.218 13.123 C 18.077 11.494 20.171 9.778 23.299 9.778 C 29.801 9.778 31 14.065 31 19.642 L 31 31 L 24.583 31 L 24.583 20.932 C 24.583 18.529 24.536 15.44 21.245 15.44 C 17.954 15.44 17.392 18.056 17.392 20.756 L 17.392 31 L 10.973 31 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1lf2g2a`,
                                  layoutDependency: x,
                                  layoutId: `hpzrMgrhH`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.432 20.709" overflow="visible"><path d="M 0 0 L 6.432 0 L 6.432 20.709 L 0 20.709 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "a2vSS0CUH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.714 28.057" overflow="visible"><path d="M 0 0 L 8.714 0 L 8.714 28.057 L 0 28.057 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-15qck83`,
                                  layoutDependency: x,
                                  layoutId: `wsBFcQh8a`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.452 7.465" overflow="visible"><path d="M 3.729 0 C 5.785 0 7.452 1.673 7.452 3.729 C 7.452 5.786 5.785 7.465 3.729 7.465 C 1.672 7.465 0 5.789 0 3.729 C 0 1.669 1.667 0 3.729 0" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "a2vSS0CUH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.096 10.113" overflow="visible"><path d="M 5.052 0 C 7.838 0 10.096 2.266 10.096 5.053 C 10.096 7.839 7.838 10.113 5.052 10.113 C 2.265 10.113 0 7.844 0 5.053 C 0 2.261 2.258 0 5.052 0" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1pecqol`,
                                  layoutDependency: x,
                                  layoutId: `fubiutJll`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.027 21.222" overflow="visible"><path d="M 0 0.513 L 6.16 0.513 L 6.16 3.345 L 6.245 3.345 C 7.104 1.716 9.198 0 12.326 0 C 18.828 0 20.027 4.286 20.027 9.864 L 20.027 21.222 L 13.61 21.222 L 13.61 11.153 C 13.61 8.75 13.563 5.662 10.272 5.662 C 6.981 5.662 6.419 8.277 6.419 10.978 L 6.419 21.222 L 0 21.222 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "a2vSS0CUH-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.133 28.752" overflow="visible"><path d="M 0 0.695 L 8.346 0.695 L 8.346 4.532 L 8.461 4.532 C 9.625 2.324 12.462 0 16.7 0 C 25.509 0 27.133 5.807 27.133 13.364 L 27.133 28.752 L 18.439 28.752 L 18.439 15.111 C 18.439 11.855 18.375 7.67 13.916 7.67 C 9.458 7.67 8.696 11.214 8.696 14.873 L 8.696 28.752 L 0 28.752 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      Ae() &&
                        l(S, {
                          className: `framer-1qin8ry`,
                          "data-framer-name": `Kwai logo`,
                          layoutDependency: x,
                          layoutId: `jNdJahVay`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 37" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "gBIx7MMpT-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 47" overflow="visible"><g><path d="M 31.444 2.99 C 28.866 2.982 26.527 3.985 24.804 5.628 C 22.898 2.262 19.251 -0.036 15.117 0 C 8.714 0.057 4.317 5.2 4.199 10.712 C 4.066 17.011 9.055 21.89 15.097 21.932 C 18.526 21.956 21.568 20.447 23.598 18.056 C 25.343 20.487 28.231 22.066 31.546 22.084 C 36.669 22.113 40.965 17.775 41 12.539 C 41.034 7.314 36.724 3.007 31.444 2.99 Z M 15.205 17.575 C 11.563 17.549 8.557 14.609 8.638 10.813 C 8.709 7.491 11.358 4.393 15.217 4.358 C 18.867 4.326 21.891 7.313 21.9 10.924 C 21.909 14.617 18.937 17.602 15.205 17.575 Z M 31.487 17.584 C 28.614 17.567 26.347 15.334 26.359 12.532 C 26.369 9.73 28.632 7.483 31.434 7.491 C 34.224 7.501 36.502 9.777 36.483 12.538 C 36.465 15.306 34.194 17.598 31.487 17.584 Z M 40.928 32.236 C 40.904 31.555 40.849 30.874 40.655 30.22 C 39.83 27.446 38.049 25.57 35.319 24.606 C 34.465 24.305 33.58 24.2 32.676 24.194 L 20.582 24.202 C 18.18 24.237 16.183 25.165 14.578 26.942 C 13.851 27.747 13.29 28.661 12.863 29.656 C 12.801 29.801 12.748 29.807 12.621 29.741 C 10.901 28.864 9.181 27.988 7.457 27.119 C 6.828 26.803 6.191 26.5 5.553 26.2 C 3.401 25.191 1.042 26.367 0.269 28.253 C 0.125 28.603 0.062 28.975 0.012 29.348 L 0 41.632 C 0.006 42.086 0.09 42.524 0.255 42.946 C 0.869 44.516 2.607 45.563 4.267 45.378 C 4.713 45.329 5.13 45.206 5.536 45.025 C 7.656 44.082 9.692 42.968 11.773 41.944 C 12.063 41.802 12.356 41.667 12.641 41.514 C 12.773 41.443 12.83 41.455 12.901 41.598 C 13.282 42.381 13.7 43.145 14.227 43.843 C 15.507 45.535 17.213 46.517 19.291 46.871 C 19.557 46.917 19.811 46.961 20.092 47 L 20.092 46.991 L 33.516 46.991 C 34.36 46.991 35.173 46.704 35.939 46.354 C 38.7 45.089 40.386 42.99 40.854 39.96 C 40.913 39.57 40.909 39.171 40.934 38.776 C 40.935 38.763 40.93 32.293 40.928 32.236 Z M 12.487 36.694 C 12.487 36.79 12.481 36.863 12.373 36.914 C 10.585 37.756 8.878 38.754 7.089 39.596 C 6.464 39.89 5.829 40.162 5.186 40.418 C 5.073 40.463 4.991 40.447 4.894 40.386 C 4.424 40.087 4.245 39.624 4.172 39.104 C 4.087 38.505 4.135 37.905 4.162 37.451 C 4.229 35.926 4.166 34.548 4.126 33.17 C 4.113 32.672 4.162 32.181 4.327 31.708 C 4.44 31.384 4.62 31.106 4.872 30.872 C 4.971 30.779 5.054 30.792 5.169 30.841 C 6.719 31.506 8.224 32.263 9.726 33.03 C 10.593 33.474 11.464 33.911 12.338 34.342 C 12.464 34.405 12.505 34.476 12.503 34.614 C 12.491 35.306 12.489 35.999 12.487 36.694 Z M 36.716 38.967 C 36.622 41.047 34.917 42.703 32.836 42.775 C 30.725 42.846 23.097 42.852 21.402 42.826 C 20.615 42.814 19.832 42.731 19.1 42.412 C 17.862 41.873 17.118 40.922 16.841 39.605 C 16.686 38.87 16.69 33.258 16.69 33.258 C 16.683 32.529 16.734 31.807 16.962 31.107 C 17.442 29.626 18.865 28.533 20.417 28.442 C 22.098 28.345 30.873 28.385 32.86 28.422 C 34.718 28.457 36.434 29.933 36.716 31.781 Z" fill="rgb(231, 74, 34)"></path></g></svg>`,
                              },
                              gBIx7MMpT: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 37" overflow="visible"><g><path d="M 24.542 2.354 C 22.529 2.348 20.704 3.137 19.359 4.431 C 17.872 1.781 15.025 -0.028 11.799 0 C 6.801 0.045 3.369 4.093 3.278 8.433 C 3.174 13.391 7.067 17.232 11.783 17.266 C 14.459 17.285 16.833 16.097 18.418 14.214 C 19.78 16.128 22.034 17.371 24.621 17.385 C 28.62 17.408 31.972 13.993 32 9.871 C 32.027 5.758 28.663 2.367 24.542 2.354 Z M 11.867 13.836 C 9.025 13.815 6.679 11.501 6.742 8.512 C 6.797 5.897 8.865 3.458 11.877 3.431 C 14.726 3.405 17.086 5.757 17.092 8.6 C 17.1 11.507 14.78 13.857 11.867 13.836 Z M 24.575 13.842 C 22.333 13.829 20.564 12.071 20.573 9.866 C 20.581 7.66 22.347 5.891 24.534 5.897 C 26.711 5.905 28.489 7.697 28.475 9.871 C 28.461 12.049 26.688 13.854 24.575 13.842 Z M 31.944 25.377 C 31.925 24.841 31.882 24.305 31.731 23.79 C 31.087 21.606 29.697 20.13 27.566 19.371 C 26.9 19.133 26.209 19.051 25.503 19.046 L 16.064 19.053 C 14.189 19.08 12.631 19.811 11.378 21.21 C 10.811 21.844 10.373 22.563 10.039 23.346 C 9.991 23.461 9.95 23.465 9.85 23.413 C 8.508 22.723 7.166 22.033 5.82 21.349 C 5.329 21.1 4.832 20.862 4.334 20.626 C 2.654 19.832 0.813 20.757 0.21 22.242 C 0.098 22.517 0.048 22.81 0.009 23.104 L 0 32.774 C 0.005 33.132 0.07 33.477 0.199 33.808 C 0.678 35.044 2.035 35.868 3.331 35.723 C 3.678 35.684 4.004 35.587 4.321 35.445 C 5.976 34.703 7.565 33.826 9.189 33.02 C 9.415 32.908 9.644 32.801 9.866 32.681 C 9.969 32.625 10.014 32.635 10.069 32.747 C 10.366 33.364 10.693 33.965 11.104 34.515 C 12.103 35.847 13.434 36.62 15.056 36.898 C 15.264 36.934 15.462 36.97 15.682 37 L 15.682 36.993 L 26.159 36.993 C 26.818 36.993 27.452 36.767 28.05 36.491 C 30.205 35.496 31.521 33.844 31.886 31.458 C 31.932 31.151 31.929 30.837 31.949 30.526 C 31.95 30.516 31.946 25.423 31.944 25.377 Z M 9.746 28.886 C 9.746 28.962 9.741 29.02 9.657 29.06 C 8.262 29.723 6.929 30.508 5.533 31.171 C 5.045 31.403 4.549 31.617 4.048 31.818 C 3.959 31.854 3.895 31.841 3.82 31.793 C 3.453 31.558 3.313 31.194 3.256 30.784 C 3.19 30.313 3.227 29.84 3.249 29.482 C 3.3 28.282 3.251 27.197 3.221 26.113 C 3.21 25.721 3.248 25.334 3.378 24.961 C 3.465 24.707 3.606 24.487 3.802 24.303 C 3.88 24.23 3.944 24.24 4.034 24.279 C 5.244 24.803 6.419 25.398 7.591 26.002 C 8.268 26.352 8.947 26.696 9.63 27.035 C 9.728 27.084 9.76 27.141 9.758 27.249 C 9.749 27.794 9.748 28.34 9.746 28.886 Z M 28.657 30.676 C 28.583 32.314 27.252 33.617 25.628 33.674 C 23.98 33.73 18.027 33.735 16.704 33.714 C 16.09 33.705 15.478 33.639 14.907 33.388 C 13.941 32.964 13.361 32.216 13.144 31.178 C 13.023 30.6 13.027 26.182 13.027 26.182 C 13.02 25.608 13.061 25.039 13.239 24.489 C 13.613 23.323 14.724 22.462 15.935 22.391 C 17.247 22.314 24.096 22.346 25.647 22.375 C 27.097 22.402 28.436 23.564 28.657 25.019 Z" fill="rgb(249,249,249)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            je() &&
                            p(S, {
                              className: `framer-1tlgpvp`,
                              layoutDependency: x,
                              layoutId: `BsjHy0mrI`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 37" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "gBIx7MMpT-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 47" overflow="visible"><path d="M 31.444 2.99 C 28.866 2.982 26.527 3.985 24.804 5.628 C 22.898 2.262 19.251 -0.036 15.117 0 C 8.714 0.057 4.317 5.2 4.199 10.712 C 4.066 17.011 9.055 21.89 15.097 21.932 C 18.526 21.956 21.568 20.447 23.598 18.056 C 25.343 20.487 28.231 22.066 31.546 22.084 C 36.669 22.113 40.965 17.775 41 12.539 C 41.034 7.314 36.724 3.007 31.444 2.99 Z M 15.205 17.575 C 11.563 17.549 8.557 14.609 8.638 10.813 C 8.709 7.491 11.358 4.393 15.217 4.358 C 18.867 4.326 21.891 7.313 21.9 10.924 C 21.909 14.617 18.937 17.602 15.205 17.575 Z M 31.487 17.584 C 28.614 17.567 26.347 15.334 26.359 12.532 C 26.369 9.73 28.632 7.483 31.434 7.491 C 34.224 7.501 36.502 9.777 36.483 12.538 C 36.465 15.306 34.194 17.598 31.487 17.584 Z M 40.928 32.236 C 40.904 31.555 40.849 30.874 40.655 30.22 C 39.83 27.446 38.049 25.57 35.319 24.606 C 34.465 24.305 33.58 24.2 32.676 24.194 L 20.582 24.202 C 18.18 24.237 16.183 25.165 14.578 26.942 C 13.851 27.747 13.29 28.661 12.863 29.656 C 12.801 29.801 12.748 29.807 12.621 29.741 C 10.901 28.864 9.181 27.988 7.457 27.119 C 6.828 26.803 6.191 26.5 5.553 26.2 C 3.401 25.191 1.042 26.367 0.269 28.253 C 0.125 28.603 0.062 28.975 0.012 29.348 L 0 41.632 C 0.006 42.086 0.09 42.524 0.255 42.946 C 0.869 44.516 2.607 45.563 4.267 45.378 C 4.713 45.329 5.13 45.206 5.536 45.025 C 7.656 44.082 9.692 42.968 11.773 41.944 C 12.063 41.802 12.356 41.667 12.641 41.514 C 12.773 41.443 12.83 41.455 12.901 41.598 C 13.282 42.381 13.7 43.145 14.227 43.843 C 15.507 45.535 17.213 46.517 19.291 46.871 C 19.557 46.917 19.811 46.961 20.092 47 L 20.092 46.991 L 33.516 46.991 C 34.36 46.991 35.173 46.704 35.939 46.354 C 38.7 45.089 40.386 42.99 40.854 39.96 C 40.913 39.57 40.909 39.171 40.934 38.776 C 40.935 38.763 40.93 32.293 40.928 32.236 Z M 12.487 36.694 C 12.487 36.79 12.481 36.863 12.373 36.914 C 10.585 37.756 8.878 38.754 7.089 39.596 C 6.464 39.89 5.829 40.162 5.186 40.418 C 5.073 40.463 4.991 40.447 4.894 40.386 C 4.424 40.087 4.245 39.624 4.172 39.104 C 4.087 38.505 4.135 37.905 4.162 37.451 C 4.229 35.926 4.166 34.548 4.126 33.17 C 4.113 32.672 4.162 32.181 4.327 31.708 C 4.44 31.384 4.62 31.106 4.872 30.872 C 4.971 30.779 5.054 30.792 5.169 30.841 C 6.719 31.506 8.224 32.263 9.726 33.03 C 10.593 33.474 11.464 33.911 12.338 34.342 C 12.464 34.405 12.505 34.476 12.503 34.614 C 12.491 35.306 12.489 35.999 12.487 36.694 Z M 36.716 38.967 C 36.622 41.047 34.917 42.703 32.836 42.775 C 30.725 42.846 23.097 42.852 21.402 42.826 C 20.615 42.814 19.832 42.731 19.1 42.412 C 17.862 41.873 17.118 40.922 16.841 39.605 C 16.686 38.87 16.69 33.258 16.69 33.258 C 16.683 32.529 16.734 31.807 16.962 31.107 C 17.442 29.626 18.865 28.533 20.417 28.442 C 22.098 28.345 30.873 28.385 32.86 28.422 C 34.718 28.457 36.434 29.933 36.716 31.781 Z" fill="rgb(231, 74, 34)"></path></svg>`,
                                  },
                                  gBIx7MMpT: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 37" overflow="visible"><path d="M 24.542 2.354 C 22.529 2.348 20.704 3.137 19.359 4.431 C 17.872 1.781 15.025 -0.028 11.799 0 C 6.801 0.045 3.369 4.093 3.278 8.433 C 3.174 13.391 7.067 17.232 11.783 17.266 C 14.459 17.285 16.833 16.097 18.418 14.214 C 19.78 16.128 22.034 17.371 24.621 17.385 C 28.62 17.408 31.972 13.993 32 9.871 C 32.027 5.758 28.663 2.367 24.542 2.354 Z M 11.867 13.836 C 9.025 13.815 6.679 11.501 6.742 8.512 C 6.797 5.897 8.865 3.458 11.877 3.431 C 14.726 3.405 17.086 5.757 17.092 8.6 C 17.1 11.507 14.78 13.857 11.867 13.836 Z M 24.575 13.842 C 22.333 13.829 20.564 12.071 20.573 9.866 C 20.581 7.66 22.347 5.891 24.534 5.897 C 26.711 5.905 28.489 7.697 28.475 9.871 C 28.461 12.049 26.688 13.854 24.575 13.842 Z M 31.944 25.377 C 31.925 24.841 31.882 24.305 31.731 23.79 C 31.087 21.606 29.697 20.13 27.566 19.371 C 26.9 19.133 26.209 19.051 25.503 19.046 L 16.064 19.053 C 14.189 19.08 12.631 19.811 11.378 21.21 C 10.811 21.844 10.373 22.563 10.039 23.346 C 9.991 23.461 9.95 23.465 9.85 23.413 C 8.508 22.723 7.166 22.033 5.82 21.349 C 5.329 21.1 4.832 20.862 4.334 20.626 C 2.654 19.832 0.813 20.757 0.21 22.242 C 0.098 22.517 0.048 22.81 0.009 23.104 L 0 32.774 C 0.005 33.132 0.07 33.477 0.199 33.808 C 0.678 35.044 2.035 35.868 3.331 35.723 C 3.678 35.684 4.004 35.587 4.321 35.445 C 5.976 34.703 7.565 33.826 9.189 33.02 C 9.415 32.908 9.644 32.801 9.866 32.681 C 9.969 32.625 10.014 32.635 10.069 32.747 C 10.366 33.364 10.693 33.965 11.104 34.515 C 12.103 35.847 13.434 36.62 15.056 36.898 C 15.264 36.934 15.462 36.97 15.682 37 L 15.682 36.993 L 26.159 36.993 C 26.818 36.993 27.452 36.767 28.05 36.491 C 30.205 35.496 31.521 33.844 31.886 31.458 C 31.932 31.151 31.929 30.837 31.949 30.526 C 31.95 30.516 31.946 25.423 31.944 25.377 Z M 9.746 28.886 C 9.746 28.962 9.741 29.02 9.657 29.06 C 8.262 29.723 6.929 30.508 5.533 31.171 C 5.045 31.403 4.549 31.617 4.048 31.818 C 3.959 31.854 3.895 31.841 3.82 31.793 C 3.453 31.558 3.313 31.194 3.256 30.784 C 3.19 30.313 3.227 29.84 3.249 29.482 C 3.3 28.282 3.251 27.197 3.221 26.113 C 3.21 25.721 3.248 25.334 3.378 24.961 C 3.465 24.707 3.606 24.487 3.802 24.303 C 3.88 24.23 3.944 24.24 4.034 24.279 C 5.244 24.803 6.419 25.398 7.591 26.002 C 8.268 26.352 8.947 26.696 9.63 27.035 C 9.728 27.084 9.76 27.141 9.758 27.249 C 9.749 27.794 9.748 28.34 9.746 28.886 Z M 28.657 30.676 C 28.583 32.314 27.252 33.617 25.628 33.674 C 23.98 33.73 18.027 33.735 16.704 33.714 C 16.09 33.705 15.478 33.639 14.907 33.388 C 13.941 32.964 13.361 32.216 13.144 31.178 C 13.023 30.6 13.027 26.182 13.027 26.182 C 13.02 25.608 13.061 25.039 13.239 24.489 C 13.613 23.323 14.724 22.462 15.935 22.391 C 17.247 22.314 24.096 22.346 25.647 22.375 C 27.097 22.402 28.436 23.564 28.657 25.019 Z" fill="rgb(249,249,249)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1lb3g01`,
                                  layoutDependency: x,
                                  layoutId: `wiHKuseC2`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.724 17.386" overflow="visible"><path d="M 21.266 2.354 C 19.254 2.348 17.428 3.137 16.083 4.431 C 14.596 1.781 11.749 -0.028 8.523 0 C 3.526 0.045 0.094 4.093 0.002 8.433 C -0.102 13.391 3.791 17.232 8.507 17.266 C 11.184 17.285 13.558 16.097 15.142 14.214 C 16.504 16.128 18.759 17.371 21.345 17.385 C 25.344 17.408 28.697 13.993 28.724 9.871 C 28.751 5.758 25.387 2.367 21.266 2.354 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "gBIx7MMpT-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36.803 22.084" overflow="visible"><path d="M 27.247 2.99 C 24.669 2.982 22.33 3.985 20.607 5.628 C 18.701 2.262 15.054 -0.036 10.921 0 C 4.517 0.057 0.12 5.2 0.003 10.712 C -0.131 17.011 4.858 21.89 10.9 21.932 C 14.329 21.956 17.371 20.447 19.401 18.056 C 21.146 20.487 24.035 22.066 27.349 22.084 C 32.472 22.113 36.768 17.775 36.803 12.539 C 36.837 7.314 32.527 3.007 27.247 2.99 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-91mfaj`,
                                  layoutDependency: x,
                                  layoutId: `m5qiKKGkO`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.352 10.405" overflow="visible"><path d="M 5.127 10.405 C 2.285 10.384 -0.062 8.07 0.001 5.081 C 0.057 2.467 2.124 0.027 5.136 0 C 7.985 -0.026 10.345 2.326 10.352 5.169 C 10.359 8.076 8.04 10.426 5.127 10.405 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "gBIx7MMpT-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.263 13.217" overflow="visible"><path d="M 6.569 13.217 C 2.927 13.191 -0.079 10.251 0.002 6.455 C 0.073 3.133 2.722 0.035 6.581 0 C 10.231 -0.032 13.255 2.955 13.263 6.566 C 13.273 10.259 10.301 13.244 6.569 13.217 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-6anwv2`,
                                  layoutDependency: x,
                                  layoutId: `Ldtpr65uW`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.902 7.945" overflow="visible"><path d="M 4.003 7.945 C 1.76 7.932 -0.009 6.174 0 3.968 C 0.008 1.763 1.774 -0.007 3.961 0 C 6.139 0.007 7.917 1.799 7.902 3.973 C 7.888 6.152 6.116 7.956 4.003 7.945 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "gBIx7MMpT-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.125 10.092" overflow="visible"><path d="M 5.129 10.092 C 2.255 10.076 -0.011 7.843 0 5.041 C 0.01 2.239 2.273 -0.009 5.075 0 C 7.865 0.009 10.144 2.286 10.125 5.047 C 10.107 7.814 7.836 10.107 5.129 10.092 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1qdbrg2`,
                                  layoutDependency: x,
                                  layoutId: `COl0LXHOz`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.949 17.954" overflow="visible"><path d="M 31.944 6.331 C 31.925 5.795 31.882 5.259 31.731 4.744 C 31.087 2.561 29.697 1.084 27.566 0.325 C 26.9 0.087 26.209 0.005 25.503 0 L 16.064 0.007 C 14.189 0.034 12.631 0.765 11.378 2.164 C 10.811 2.798 10.373 3.517 10.039 4.3 C 9.991 4.415 9.95 4.419 9.85 4.367 C 8.508 3.677 7.166 2.987 5.82 2.303 C 5.329 2.054 4.832 1.816 4.334 1.58 C 2.654 0.786 0.813 1.711 0.21 3.196 C 0.098 3.471 0.048 3.764 0.009 4.058 L 0 13.728 C 0.005 14.086 0.07 14.431 0.199 14.762 C 0.678 15.998 2.035 16.822 3.331 16.677 C 3.678 16.638 4.004 16.541 4.321 16.399 C 5.976 15.657 7.565 14.78 9.189 13.974 C 9.415 13.862 9.644 13.755 9.866 13.635 C 9.969 13.579 10.014 13.589 10.069 13.701 C 10.366 14.318 10.693 14.919 11.104 15.469 C 12.103 16.801 13.434 17.574 15.056 17.852 C 15.264 17.888 15.462 17.924 15.682 17.954 L 15.682 17.947 L 26.159 17.947 C 26.818 17.947 27.452 17.721 28.05 17.445 C 30.205 16.45 31.521 14.798 31.886 12.412 C 31.932 12.105 31.929 11.791 31.949 11.48 C 31.95 11.47 31.946 6.377 31.944 6.331 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "gBIx7MMpT-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.935 22.806" overflow="visible"><path d="M 40.928 8.042 C 40.904 7.361 40.849 6.681 40.655 6.027 C 39.83 3.253 38.049 1.376 35.319 0.413 C 34.465 0.111 33.58 0.007 32.676 0 L 20.582 0.009 C 18.18 0.043 16.183 0.971 14.578 2.748 C 13.851 3.554 13.29 4.467 12.863 5.462 C 12.801 5.608 12.748 5.613 12.621 5.548 C 10.901 4.67 9.181 3.794 7.457 2.926 C 6.828 2.609 6.191 2.306 5.553 2.007 C 3.401 0.998 1.042 2.174 0.269 4.059 C 0.125 4.41 0.062 4.781 0.012 5.155 L 0 17.439 C 0.006 17.893 0.09 18.331 0.255 18.752 C 0.869 20.322 2.607 21.369 4.267 21.185 C 4.713 21.135 5.13 21.012 5.536 20.831 C 7.656 19.889 9.692 18.775 11.773 17.751 C 12.063 17.609 12.356 17.473 12.641 17.321 C 12.773 17.249 12.83 17.261 12.901 17.404 C 13.282 18.188 13.7 18.952 14.227 19.649 C 15.507 21.341 17.213 22.324 19.291 22.677 C 19.557 22.723 19.811 22.768 20.092 22.806 L 20.092 22.798 L 33.516 22.798 C 34.36 22.798 35.173 22.511 35.939 22.16 C 38.7 20.896 40.386 18.797 40.854 15.766 C 40.913 15.377 40.909 14.977 40.934 14.583 C 40.935 14.57 40.93 8.1 40.928 8.042 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-cbq97p`,
                                  layoutDependency: x,
                                  layoutId: `NznlgSAKb`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.54 7.59" overflow="visible"><path d="M 6.528 4.638 C 6.527 4.713 6.522 4.771 6.438 4.811 C 5.043 5.474 3.71 6.259 2.314 6.922 C 1.827 7.154 1.331 7.368 0.829 7.569 C 0.741 7.605 0.677 7.592 0.601 7.544 C 0.234 7.309 0.095 6.945 0.038 6.535 C -0.029 6.064 0.009 5.591 0.03 5.234 C 0.082 4.034 0.033 2.949 0.002 1.864 C -0.009 1.472 0.03 1.085 0.159 0.713 C 0.247 0.458 0.387 0.238 0.584 0.054 C 0.661 -0.019 0.726 -0.009 0.816 0.03 C 2.025 0.554 3.2 1.149 4.372 1.753 C 5.049 2.103 5.729 2.447 6.411 2.786 C 6.51 2.836 6.541 2.892 6.54 3 C 6.53 3.545 6.529 4.091 6.528 4.638 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "gBIx7MMpT-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.379 9.641" overflow="visible"><path d="M 8.364 5.891 C 8.363 5.987 8.357 6.06 8.249 6.111 C 6.462 6.953 4.754 7.951 2.965 8.793 C 2.34 9.088 1.705 9.359 1.062 9.615 C 0.949 9.661 0.867 9.644 0.77 9.583 C 0.3 9.285 0.121 8.822 0.048 8.301 C -0.037 7.703 0.011 7.102 0.039 6.648 C 0.105 5.124 0.042 3.746 0.003 2.367 C -0.011 1.869 0.038 1.378 0.204 0.905 C 0.316 0.582 0.496 0.303 0.748 0.069 C 0.847 -0.024 0.93 -0.011 1.045 0.038 C 2.595 0.704 4.101 1.46 5.602 2.227 C 6.469 2.671 7.34 3.109 8.214 3.539 C 8.34 3.602 8.381 3.673 8.379 3.811 C 8.367 4.503 8.365 5.197 8.364 5.891 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-v18i6k`,
                                  layoutDependency: x,
                                  layoutId: `HTMLIMfRk`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.631 11.382" overflow="visible"><path d="M 15.631 8.333 C 15.557 9.971 14.227 11.274 12.602 11.331 C 10.954 11.387 5.001 11.391 3.678 11.371 C 3.064 11.362 2.452 11.296 1.882 11.045 C 0.915 10.621 0.335 9.872 0.118 8.835 C -0.003 8.257 0.001 3.839 0.001 3.839 C -0.005 3.265 0.035 2.696 0.213 2.146 C 0.588 0.979 1.698 0.119 2.909 0.048 C 4.221 -0.029 11.07 0.003 12.621 0.032 C 14.071 0.059 15.411 1.221 15.631 2.676 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "gBIx7MMpT-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.027 14.458" overflow="visible"><path d="M 20.027 10.585 C 19.932 12.665 18.228 14.321 16.146 14.393 C 14.035 14.464 6.407 14.47 4.712 14.444 C 3.926 14.432 3.142 14.349 2.411 14.031 C 1.172 13.491 0.429 12.541 0.151 11.223 C -0.004 10.488 0.001 4.876 0.001 4.876 C -0.007 4.147 0.045 3.425 0.272 2.726 C 0.753 1.244 2.175 0.152 3.727 0.061 C 5.409 -0.037 14.184 0.004 16.17 0.041 C 18.028 0.075 19.745 1.551 20.027 3.399 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      Me() &&
                        l(S, {
                          className: `framer-17kwj4d`,
                          "data-framer-name": `Pinterest logo`,
                          layoutDependency: x,
                          layoutId: `CHRJj_TpP`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.5 39.5" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "CpqTj7_dZ-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.155 50.628" overflow="visible"><g><path d="M 16.293 33.913 C 16.243 34.066 16.21 34.185 16.177 34.321 C 14.329 41.812 14.115 43.463 12.217 46.936 C 11.31 48.588 10.287 50.154 9.165 51.652 C 9.033 51.822 8.918 52.044 8.67 51.993 C 8.39 51.924 8.373 51.669 8.34 51.448 C 8.043 49.167 7.862 46.885 7.944 44.604 C 8.043 41.608 8.406 40.586 12.135 24.379 C 12.184 24.124 12.135 23.92 12.052 23.698 C 11.161 21.213 10.98 18.676 11.755 16.123 C 13.438 10.59 19.527 10.164 20.583 14.727 C 21.243 17.553 19.51 21.247 18.174 26.695 C 17.068 31.206 22.216 34.407 26.605 31.104 C 30.648 28.074 32.232 20.804 31.935 15.663 C 31.341 5.397 20.434 3.184 13.504 6.487 C 5.568 10.266 3.77 20.43 7.35 25.06 C 7.812 25.656 8.159 26.014 8.01 26.61 C 7.779 27.546 7.581 28.482 7.334 29.401 C 7.152 30.082 6.591 30.338 5.915 30.048 C 4.613 29.509 3.47 28.629 2.598 27.495 C -0.438 23.613 -1.312 15.918 2.714 9.398 C 7.152 2.18 15.435 -0.731 23.008 0.154 C 32.05 1.21 37.759 7.594 38.832 14.812 C 39.327 18.114 38.964 26.235 34.492 31.972 C 29.344 38.578 20.979 39.003 17.118 34.951 C 16.821 34.645 16.59 34.27 16.293 33.913 Z" transform="translate(-0.751 -0.107) rotate(6 19.5 26)" fill="rgb(251, 53, 61)"></path></g></svg>`,
                              },
                              CpqTj7_dZ: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.5 39.5" overflow="visible"><g><path d="M 12.742 25.761 C 12.703 25.877 12.677 25.968 12.652 26.071 C 11.206 31.761 11.039 33.015 9.555 35.654 C 8.845 36.908 8.045 38.098 7.168 39.236 C 7.064 39.365 6.974 39.533 6.78 39.494 C 6.561 39.443 6.548 39.249 6.522 39.081 C 6.29 37.348 6.148 35.615 6.213 33.882 C 6.29 31.606 6.574 30.83 9.49 18.519 C 9.529 18.325 9.49 18.17 9.426 18.002 C 8.729 16.114 8.587 14.187 9.193 12.247 C 10.51 8.044 15.271 7.721 16.097 11.187 C 16.613 13.333 15.258 16.139 14.213 20.278 C 13.348 23.705 17.374 26.136 20.807 23.627 C 23.968 21.325 25.207 15.803 24.975 11.898 C 24.51 4.1 15.981 2.419 10.561 4.928 C 4.354 7.798 2.948 15.519 5.748 19.036 C 6.109 19.489 6.38 19.76 6.264 20.213 C 6.084 20.924 5.929 21.636 5.735 22.334 C 5.593 22.851 5.155 23.045 4.625 22.825 C 3.607 22.416 2.713 21.747 2.032 20.885 C -0.342 17.937 -1.026 12.092 2.122 7.139 C 5.593 1.656 12.071 -0.555 17.994 0.117 C 25.065 0.919 29.53 5.768 30.368 11.251 C 30.756 13.76 30.472 19.929 26.975 24.287 C 22.949 29.304 16.407 29.627 13.387 26.55 C 13.155 26.317 12.974 26.032 12.742 25.761 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ne() &&
                            l(S, {
                              className: `framer-1gzeygc`,
                              layoutDependency: x,
                              layoutId: `SICAfZdzW`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.5 39.5" overflow="visible"></svg>`,
                              variants: { "CpqTj7_dZ-hover": { rotate: 6 } },
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "CpqTj7_dZ-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 52" overflow="visible"><path d="M 16.293 33.913 C 16.243 34.066 16.21 34.185 16.177 34.321 C 14.329 41.812 14.115 43.463 12.217 46.936 C 11.31 48.588 10.287 50.154 9.165 51.652 C 9.033 51.822 8.918 52.044 8.67 51.993 C 8.39 51.924 8.373 51.669 8.34 51.448 C 8.043 49.167 7.862 46.885 7.944 44.604 C 8.043 41.608 8.406 40.586 12.135 24.379 C 12.184 24.124 12.135 23.92 12.052 23.698 C 11.161 21.213 10.98 18.676 11.755 16.123 C 13.438 10.59 19.527 10.164 20.583 14.727 C 21.243 17.553 19.51 21.247 18.174 26.695 C 17.068 31.206 22.216 34.407 26.605 31.104 C 30.648 28.074 32.232 20.804 31.935 15.663 C 31.341 5.397 20.434 3.184 13.504 6.487 C 5.568 10.266 3.77 20.43 7.35 25.06 C 7.812 25.656 8.159 26.014 8.01 26.61 C 7.779 27.546 7.581 28.482 7.334 29.401 C 7.152 30.082 6.591 30.338 5.915 30.048 C 4.613 29.509 3.47 28.629 2.598 27.495 C -0.438 23.613 -1.312 15.918 2.714 9.398 C 7.152 2.18 15.435 -0.731 23.008 0.154 C 32.05 1.21 37.759 7.594 38.832 14.812 C 39.327 18.114 38.964 26.235 34.492 31.972 C 29.344 38.578 20.979 39.003 17.118 34.951 C 16.821 34.645 16.59 34.27 16.293 33.913 Z" fill="rgb(251, 53, 61)"></path></svg>`,
                                  },
                                  CpqTj7_dZ: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.5 39.5" overflow="visible"><path d="M 12.742 25.761 C 12.703 25.877 12.677 25.968 12.652 26.071 C 11.206 31.761 11.039 33.015 9.555 35.654 C 8.845 36.908 8.045 38.098 7.168 39.236 C 7.064 39.365 6.974 39.533 6.78 39.494 C 6.561 39.443 6.548 39.249 6.522 39.081 C 6.29 37.348 6.148 35.615 6.213 33.882 C 6.29 31.606 6.574 30.83 9.49 18.519 C 9.529 18.325 9.49 18.17 9.426 18.002 C 8.729 16.114 8.587 14.187 9.193 12.247 C 10.51 8.044 15.271 7.721 16.097 11.187 C 16.613 13.333 15.258 16.139 14.213 20.278 C 13.348 23.705 17.374 26.136 20.807 23.627 C 23.968 21.325 25.207 15.803 24.975 11.898 C 24.51 4.1 15.981 2.419 10.561 4.928 C 4.354 7.798 2.948 15.519 5.748 19.036 C 6.109 19.489 6.38 19.76 6.264 20.213 C 6.084 20.924 5.929 21.636 5.735 22.334 C 5.593 22.851 5.155 23.045 4.625 22.825 C 3.607 22.416 2.713 21.747 2.032 20.885 C -0.342 17.937 -1.026 12.092 2.122 7.139 C 5.593 1.656 12.071 -0.555 17.994 0.117 C 25.065 0.919 29.53 5.768 30.368 11.251 C 30.756 13.76 30.472 19.929 26.975 24.287 C 22.949 29.304 16.407 29.627 13.387 26.55 C 13.155 26.317 12.974 26.032 12.742 25.761 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                            }),
                        }),
                      Pe() &&
                        l(S, {
                          className: `framer-1qagncl`,
                          "data-framer-name": `Reddit logo`,
                          layoutDependency: x,
                          layoutId: `aWwCYs1GP`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 35" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "Bcp_qb5bc-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 44" overflow="visible"><g><path d="M 51 20.074 C 51 16.929 48.404 14.377 45.204 14.377 C 43.663 14.377 42.272 14.97 41.228 15.927 C 37.751 13.249 33.068 11.472 27.841 11.05 L 30.809 2.312 L 38.284 5.992 C 38.273 6.129 38.25 6.254 38.25 6.403 C 38.25 8.294 39.803 9.82 41.727 9.82 C 43.651 9.82 45.204 8.294 45.204 6.403 C 45.204 4.511 43.64 2.985 41.727 2.985 C 40.788 2.985 39.942 3.349 39.316 3.942 L 31.771 0.239 C 31.197 -0.049 30.525 -0.078 29.928 0.159 C 29.325 0.398 28.85 0.877 28.641 1.492 L 25.43 10.96 C 19.287 10.971 13.747 12.874 9.771 15.927 C 8.727 14.97 7.336 14.378 5.795 14.378 C 2.596 14.378 0 16.93 0 20.074 C 0 22.478 1.518 24.54 3.663 25.372 C 3.535 26.067 3.477 26.762 3.477 27.48 C 3.477 36.605 13.341 44 25.5 44 C 37.659 44 47.523 36.605 47.523 27.48 C 47.523 26.762 47.465 26.067 47.337 25.372 C 49.482 24.54 51 22.478 51 20.074 Z M 13.909 24.631 C 13.909 22.74 15.462 21.213 17.386 21.213 C 19.311 21.213 20.864 22.74 20.864 24.631 C 20.864 26.522 19.311 28.049 17.386 28.049 C 15.462 28.049 13.909 26.522 13.909 24.631 Z M 34.576 34.372 C 34.471 34.532 31.841 38.303 25.5 38.303 C 19.159 38.303 16.529 34.532 16.424 34.372 C 16.065 33.848 16.204 33.142 16.737 32.8 C 17.271 32.447 17.989 32.595 18.349 33.108 C 18.43 33.233 20.459 36.024 25.5 36.024 C 30.541 36.024 32.57 33.222 32.651 33.108 C 33.01 32.595 33.729 32.458 34.263 32.811 C 34.784 33.153 34.923 33.86 34.576 34.372 Z M 33.614 28.049 C 31.689 28.049 30.136 26.522 30.136 24.631 C 30.136 22.74 31.689 21.213 33.614 21.213 C 35.538 21.213 37.091 22.74 37.091 24.631 C 37.091 26.522 35.538 28.049 33.614 28.049 Z" fill="rgb(249, 88, 3)"></path></g></svg>`,
                              },
                              Bcp_qb5bc: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 35" overflow="visible"><g><path d="M 41 15.968 C 41 13.466 38.913 11.436 36.341 11.436 C 35.102 11.436 33.983 11.908 33.144 12.669 C 30.349 10.539 26.584 9.125 22.382 8.79 L 24.768 1.839 L 30.778 4.767 C 30.768 4.875 30.75 4.975 30.75 5.093 C 30.75 6.597 31.998 7.812 33.545 7.812 C 35.092 7.812 36.341 6.597 36.341 5.093 C 36.341 3.588 35.083 2.374 33.545 2.374 C 32.79 2.374 32.11 2.664 31.607 3.135 L 25.541 0.19 C 25.08 -0.039 24.54 -0.062 24.06 0.126 C 23.575 0.317 23.193 0.698 23.025 1.187 L 20.444 8.718 C 15.505 8.727 11.051 10.241 7.855 12.67 C 7.016 11.908 5.898 11.437 4.659 11.437 C 2.087 11.437 0 13.467 0 15.968 C 0 17.88 1.221 19.52 2.945 20.182 C 2.842 20.735 2.795 21.288 2.795 21.859 C 2.795 29.118 10.725 35 20.5 35 C 30.275 35 38.205 29.118 38.205 21.859 C 38.205 21.288 38.158 20.735 38.055 20.182 C 39.779 19.52 41 17.88 41 15.968 Z M 11.182 19.593 C 11.182 18.088 12.43 16.874 13.977 16.874 C 15.524 16.874 16.773 18.088 16.773 19.593 C 16.773 21.097 15.524 22.312 13.977 22.312 C 12.43 22.312 11.182 21.097 11.182 19.593 Z M 27.796 27.342 C 27.712 27.469 25.597 30.468 20.5 30.468 C 15.403 30.468 13.288 27.468 13.204 27.342 C 12.915 26.925 13.027 26.363 13.456 26.091 C 13.884 25.81 14.461 25.928 14.751 26.336 C 14.816 26.435 16.447 28.655 20.5 28.655 C 24.553 28.655 26.184 26.426 26.249 26.336 C 26.538 25.928 27.116 25.819 27.544 26.1 C 27.964 26.372 28.076 26.934 27.796 27.342 Z M 27.023 22.312 C 25.476 22.312 24.227 21.097 24.227 19.593 C 24.227 18.088 25.476 16.874 27.023 16.874 C 28.57 16.874 29.818 18.088 29.818 19.593 C 29.818 21.097 28.57 22.312 27.023 22.312 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Fe() &&
                            p(S, {
                              className: `framer-jt18df`,
                              layoutDependency: x,
                              layoutId: `xvjZzYCom`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 35" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "Bcp_qb5bc-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 44" overflow="visible"><path d="M 51 20.074 C 51 16.929 48.404 14.377 45.204 14.377 C 43.663 14.377 42.272 14.97 41.228 15.927 C 37.751 13.249 33.068 11.472 27.841 11.05 L 30.809 2.312 L 38.284 5.992 C 38.273 6.129 38.25 6.254 38.25 6.403 C 38.25 8.294 39.803 9.82 41.727 9.82 C 43.651 9.82 45.204 8.294 45.204 6.403 C 45.204 4.511 43.64 2.985 41.727 2.985 C 40.788 2.985 39.942 3.349 39.316 3.942 L 31.771 0.239 C 31.197 -0.049 30.525 -0.078 29.928 0.159 C 29.325 0.398 28.85 0.877 28.641 1.492 L 25.43 10.96 C 19.287 10.971 13.747 12.874 9.771 15.927 C 8.727 14.97 7.336 14.378 5.795 14.378 C 2.596 14.378 0 16.93 0 20.074 C 0 22.478 1.518 24.54 3.663 25.372 C 3.535 26.067 3.477 26.762 3.477 27.48 C 3.477 36.605 13.341 44 25.5 44 C 37.659 44 47.523 36.605 47.523 27.48 C 47.523 26.762 47.465 26.067 47.337 25.372 C 49.482 24.54 51 22.478 51 20.074 Z M 13.909 24.631 C 13.909 22.74 15.462 21.213 17.386 21.213 C 19.311 21.213 20.864 22.74 20.864 24.631 C 20.864 26.522 19.311 28.049 17.386 28.049 C 15.462 28.049 13.909 26.522 13.909 24.631 Z M 34.576 34.372 C 34.471 34.532 31.841 38.303 25.5 38.303 C 19.159 38.303 16.529 34.532 16.424 34.372 C 16.065 33.848 16.204 33.142 16.737 32.8 C 17.271 32.447 17.989 32.595 18.349 33.108 C 18.43 33.233 20.459 36.024 25.5 36.024 C 30.541 36.024 32.57 33.222 32.651 33.108 C 33.01 32.595 33.729 32.458 34.263 32.811 C 34.784 33.153 34.923 33.86 34.576 34.372 Z M 33.614 28.049 C 31.689 28.049 30.136 26.522 30.136 24.631 C 30.136 22.74 31.689 21.213 33.614 21.213 C 35.538 21.213 37.091 22.74 37.091 24.631 C 37.091 26.522 35.538 28.049 33.614 28.049 Z" fill="rgb(249, 88, 3)"></path></svg>`,
                                  },
                                  Bcp_qb5bc: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 35" overflow="visible"><path d="M 41 15.968 C 41 13.466 38.913 11.436 36.341 11.436 C 35.102 11.436 33.983 11.908 33.144 12.669 C 30.349 10.539 26.584 9.125 22.382 8.79 L 24.768 1.839 L 30.778 4.767 C 30.768 4.875 30.75 4.975 30.75 5.093 C 30.75 6.597 31.998 7.812 33.545 7.812 C 35.092 7.812 36.341 6.597 36.341 5.093 C 36.341 3.588 35.083 2.374 33.545 2.374 C 32.79 2.374 32.11 2.664 31.607 3.135 L 25.541 0.19 C 25.08 -0.039 24.54 -0.062 24.06 0.126 C 23.575 0.317 23.193 0.698 23.025 1.187 L 20.444 8.718 C 15.505 8.727 11.051 10.241 7.855 12.67 C 7.016 11.908 5.898 11.437 4.659 11.437 C 2.087 11.437 0 13.467 0 15.968 C 0 17.88 1.221 19.52 2.945 20.182 C 2.842 20.735 2.795 21.288 2.795 21.859 C 2.795 29.118 10.725 35 20.5 35 C 30.275 35 38.205 29.118 38.205 21.859 C 38.205 21.288 38.158 20.735 38.055 20.182 C 39.779 19.52 41 17.88 41 15.968 Z M 11.182 19.593 C 11.182 18.088 12.43 16.874 13.977 16.874 C 15.524 16.874 16.773 18.088 16.773 19.593 C 16.773 21.097 15.524 22.312 13.977 22.312 C 12.43 22.312 11.182 21.097 11.182 19.593 Z M 27.796 27.342 C 27.712 27.469 25.597 30.468 20.5 30.468 C 15.403 30.468 13.288 27.468 13.204 27.342 C 12.915 26.925 13.027 26.363 13.456 26.091 C 13.884 25.81 14.461 25.928 14.751 26.336 C 14.816 26.435 16.447 28.655 20.5 28.655 C 24.553 28.655 26.184 26.426 26.249 26.336 C 26.538 25.928 27.116 25.819 27.544 26.1 C 27.964 26.372 28.076 26.934 27.796 27.342 Z M 27.023 22.312 C 25.476 22.312 24.227 21.097 24.227 19.593 C 24.227 18.088 25.476 16.874 27.023 16.874 C 28.57 16.874 29.818 18.088 29.818 19.593 C 29.818 21.097 28.57 22.312 27.023 22.312 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1s5udvk`,
                                  layoutDependency: x,
                                  layoutId: `GkjRhjVWw`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 35" overflow="visible"><path d="M 41 15.968 C 41 13.466 38.913 11.436 36.341 11.436 C 35.102 11.436 33.983 11.908 33.144 12.669 C 30.349 10.539 26.584 9.125 22.382 8.79 L 24.768 1.839 L 30.778 4.767 C 30.768 4.875 30.75 4.975 30.75 5.093 C 30.75 6.597 31.998 7.812 33.545 7.812 C 35.092 7.812 36.341 6.597 36.341 5.093 C 36.341 3.588 35.083 2.374 33.545 2.374 C 32.79 2.374 32.11 2.664 31.607 3.135 L 25.541 0.19 C 25.08 -0.039 24.54 -0.062 24.06 0.126 C 23.575 0.317 23.193 0.698 23.025 1.187 L 20.444 8.718 C 15.505 8.727 11.051 10.241 7.855 12.67 C 7.016 11.908 5.898 11.437 4.659 11.437 C 2.087 11.437 0 13.467 0 15.968 C 0 17.88 1.221 19.52 2.945 20.182 C 2.842 20.735 2.795 21.288 2.795 21.859 C 2.795 29.118 10.725 35 20.5 35 C 30.275 35 38.205 29.118 38.205 21.859 C 38.205 21.288 38.158 20.735 38.055 20.182 C 39.779 19.52 41 17.88 41 15.968 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Bcp_qb5bc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51 44" overflow="visible"><path d="M 51 20.074 C 51 16.929 48.404 14.377 45.204 14.377 C 43.663 14.377 42.272 14.97 41.228 15.927 C 37.751 13.249 33.068 11.472 27.841 11.05 L 30.809 2.312 L 38.284 5.992 C 38.273 6.129 38.25 6.254 38.25 6.403 C 38.25 8.294 39.803 9.82 41.727 9.82 C 43.651 9.82 45.204 8.294 45.204 6.403 C 45.204 4.511 43.64 2.985 41.727 2.985 C 40.788 2.985 39.942 3.349 39.316 3.942 L 31.771 0.239 C 31.197 -0.049 30.525 -0.078 29.928 0.159 C 29.325 0.398 28.85 0.877 28.641 1.492 L 25.43 10.96 C 19.287 10.971 13.747 12.874 9.771 15.927 C 8.727 14.97 7.336 14.378 5.795 14.378 C 2.596 14.378 0 16.93 0 20.074 C 0 22.478 1.518 24.54 3.663 25.372 C 3.535 26.067 3.477 26.762 3.477 27.48 C 3.477 36.605 13.341 44 25.5 44 C 37.659 44 47.523 36.605 47.523 27.48 C 47.523 26.762 47.465 26.067 47.337 25.372 C 49.482 24.54 51 22.478 51 20.074 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-yo38wo`,
                                  layoutDependency: x,
                                  layoutId: `pvniYPXko`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.591 5.437" overflow="visible"><path d="M 0 2.719 C 0 1.214 1.248 0 2.795 0 C 4.342 0 5.591 1.214 5.591 2.719 C 5.591 4.223 4.342 5.437 2.795 5.437 C 1.248 5.437 0 4.223 0 2.719 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Bcp_qb5bc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.954 6.836" overflow="visible"><path d="M 0 3.418 C 0 1.526 1.553 0 3.477 0 C 5.401 0 6.954 1.526 6.954 3.418 C 6.954 5.309 5.401 6.836 3.477 6.836 C 1.553 6.836 0 5.309 0 3.418 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-p3v5yl`,
                                  layoutDependency: x,
                                  layoutId: `Sh5wg4rdF`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.906 4.531" overflow="visible"><path d="M 14.753 1.404 C 14.669 1.532 12.554 4.531 7.456 4.531 C 2.359 4.531 0.244 1.531 0.16 1.404 C -0.128 0.987 -0.017 0.425 0.412 0.153 C 0.841 -0.127 1.418 -0.01 1.707 0.398 C 1.773 0.498 3.403 2.718 7.456 2.718 C 11.509 2.718 13.14 0.489 13.206 0.398 C 13.494 -0.01 14.072 -0.118 14.501 0.162 C 14.92 0.434 15.032 0.996 14.753 1.404 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Bcp_qb5bc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.542 5.696" overflow="visible"><path d="M 18.351 1.765 C 18.246 1.925 15.616 5.696 9.275 5.696 C 2.935 5.696 0.304 1.924 0.199 1.765 C -0.16 1.241 -0.021 0.535 0.512 0.193 C 1.046 -0.16 1.764 -0.012 2.124 0.501 C 2.205 0.626 4.234 3.417 9.275 3.417 C 14.316 3.417 16.345 0.615 16.426 0.501 C 16.785 -0.012 17.504 -0.149 18.038 0.204 C 18.559 0.546 18.698 1.253 18.351 1.765 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-nkz9og`,
                                  layoutDependency: x,
                                  layoutId: `sh7X1Wrpr`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.591 5.437" overflow="visible"><path d="M 2.795 5.437 C 1.248 5.437 0 4.223 0 2.719 C 0 1.214 1.248 0 2.795 0 C 4.342 0 5.591 1.214 5.591 2.719 C 5.591 4.223 4.342 5.437 2.795 5.437 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Bcp_qb5bc-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.954 6.836" overflow="visible"><path d="M 3.477 6.836 C 1.553 6.836 0 5.309 0 3.418 C 0 1.526 1.553 0 3.477 0 C 5.401 0 6.954 1.526 6.954 3.418 C 6.954 5.309 5.401 6.836 3.477 6.836 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      Ie() &&
                        l(S, {
                          className: `framer-1hq2mf5`,
                          layoutDependency: x,
                          layoutId: `UQBCfAVZf`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 34" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "YEVPXvmtM-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 51" overflow="visible"><g><g transform="translate(0 0)"><path d="M 25.728 48.452 C 23.748 48.452 21.761 47.882 19.825 46.757 C 19.054 46.31 18.313 45.813 17.571 45.317 L 16.725 44.754 C 16.079 44.337 15.369 44.078 14.494 43.949 C 14.172 43.899 13.858 43.88 13.547 43.88 C 12.787 43.88 12.041 43.988 11.291 44.095 L 10.105 44.248 L 9.725 44.265 C 8.259 44.265 7.227 43.391 7.156 42.089 C 7.108 41.205 6.927 40.824 5.307 40.649 C 4.335 40.54 3.42 40.159 2.686 39.851 C 1.417 39.324 0.573 38.572 0.113 37.559 L 0 37.311 L 0 35.804 L 0.307 35.447 C 0.73 34.957 1.283 34.43 2.181 34.254 C 5.424 33.611 7.927 31.674 10.053 28.155 C 10.861 26.816 10.919 26.419 10.907 26.313 C 10.861 26.26 10.555 25.986 9.011 25.439 C 8.7 25.336 8.552 25.29 8.409 25.231 C 7.659 24.922 6.864 24.568 6.155 23.959 C 5.201 23.128 4.811 22.015 5.083 20.896 C 5.382 19.681 6.41 18.718 7.77 18.389 C 8.049 18.324 8.334 18.29 8.621 18.29 C 9.382 18.29 10.047 18.515 10.634 18.714 C 10.823 18.777 11.009 18.84 11.186 18.889 C 11.013 17.015 10.989 15.075 11.098 12.734 C 11.305 8.293 13.478 4.727 17.379 2.422 C 20.096 0.814 22.902 0 25.722 0 C 28.542 0 31.29 0.798 33.981 2.372 C 37.601 4.488 39.762 7.716 40.234 11.703 C 40.521 14.143 40.421 16.561 40.252 18.83 C 40.393 18.787 40.531 18.744 40.668 18.701 C 41.285 18.509 41.984 18.287 42.763 18.287 C 43.33 18.287 43.865 18.399 44.394 18.631 C 45.701 19.204 46.525 20.379 46.494 21.621 C 46.472 22.465 46.043 23.313 45.316 23.942 C 44.583 24.578 43.719 24.925 42.954 25.234 L 42.022 25.591 C 41.692 25.71 41.362 25.829 41.045 25.978 C 40.65 26.16 40.554 26.292 40.544 26.305 C 40.547 26.308 40.544 26.438 40.685 26.735 C 42.693 30.971 45.376 33.348 49.124 34.226 C 50.027 34.435 50.704 34.855 51.194 35.511 L 51.448 35.848 L 51.448 37.325 L 51.32 37.589 C 50.802 38.652 49.892 39.418 48.542 39.928 C 47.436 40.352 46.484 40.716 45.429 40.785 C 44.67 40.835 44.496 40.993 44.388 41.732 C 44.217 42.895 43.763 44.229 41.752 44.229 C 41.56 44.229 41.342 44.219 41.1 44.199 C 40.773 44.172 40.435 44.116 40.1 44.053 C 39.386 43.927 38.744 43.862 38.116 43.862 C 36.454 43.862 35.057 44.339 33.845 45.316 C 33.452 45.63 33.025 45.905 32.601 46.177 C 30.198 47.73 27.954 48.452 25.726 48.452 Z" fill="rgb(255,255,255)"></path><path d="M 27.001 2.543 C 29.551 2.543 32.106 3.272 34.614 4.74 C 37.768 6.586 39.802 9.379 40.245 13.123 C 40.532 15.56 40.418 18.001 40.225 20.44 C 40.162 21.236 40.269 21.544 40.771 21.544 C 40.937 21.544 41.147 21.51 41.408 21.449 C 42.335 21.233 43.156 20.831 44.04 20.831 C 44.398 20.831 44.767 20.896 45.159 21.068 C 45.884 21.385 46.515 22.069 46.496 22.858 C 46.483 23.399 46.167 23.897 45.758 24.253 C 45.132 24.796 44.315 25.099 43.556 25.405 C 42.967 25.644 42.354 25.828 41.78 26.097 C 40.596 26.651 40.256 27.381 40.81 28.551 C 42.729 32.597 45.549 35.669 50.109 36.736 C 50.666 36.866 51.112 37.093 51.45 37.543 L 51.45 38.306 C 51.018 39.193 50.245 39.682 49.366 40.013 C 48.475 40.351 47.58 40.727 46.621 40.789 C 45.3 40.873 44.603 41.448 44.401 42.822 C 44.238 43.93 43.93 44.232 43.024 44.232 C 42.863 44.232 42.682 44.222 42.481 44.206 C 42.164 44.181 41.85 44.122 41.538 44.067 C 40.809 43.938 40.093 43.866 39.391 43.866 C 37.579 43.866 35.87 44.352 34.319 45.6 C 33.899 45.938 33.434 46.22 32.98 46.514 C 31.012 47.788 29.018 48.455 27.002 48.455 C 25.265 48.455 23.511 47.96 21.74 46.93 C 20.698 46.324 19.709 45.624 18.697 44.964 C 17.86 44.418 16.96 44.113 15.954 43.961 C 15.575 43.904 15.2 43.881 14.828 43.881 C 13.641 43.881 12.481 44.117 11.306 44.246 C 11.202 44.258 11.098 44.264 10.996 44.264 C 10.324 44.264 9.742 44 9.703 43.29 C 9.595 41.318 8.383 40.836 6.721 40.653 C 5.946 40.568 5.181 40.254 4.451 39.95 C 3.653 39.617 2.929 39.145 2.549 38.306 L 2.549 37.543 C 2.862 37.181 3.192 36.873 3.701 36.773 C 7.712 35.981 10.396 33.43 12.42 30.081 C 14.121 27.265 13.848 26.621 10.712 25.514 C 10.532 25.45 10.348 25.398 10.172 25.326 C 9.495 25.048 8.824 24.752 8.264 24.267 C 6.86 23.049 7.691 21.295 9.347 20.897 C 9.535 20.852 9.719 20.833 9.901 20.833 C 10.887 20.833 11.794 21.406 12.786 21.529 C 12.888 21.542 12.982 21.548 13.069 21.548 C 13.646 21.548 13.872 21.254 13.788 20.528 C 13.54 18.38 13.546 16.22 13.647 14.062 C 13.84 9.95 15.868 6.816 19.304 4.785 C 21.828 3.292 24.412 2.542 26.999 2.542 M 27.001 0 C 23.949 0 20.922 0.874 18.005 2.6 C 13.718 5.134 11.331 9.058 11.102 13.946 C 11.024 15.602 11.013 17.068 11.07 18.417 C 10.711 18.342 10.322 18.291 9.902 18.291 C 9.512 18.291 9.125 18.337 8.75 18.426 C 6.925 18.865 5.534 20.183 5.122 21.867 C 4.737 23.441 5.287 25.056 6.593 26.189 C 7.443 26.926 8.385 27.345 9.203 27.681 C 9.374 27.75 9.547 27.809 9.72 27.866 C 10.08 27.993 10.36 28.098 10.577 28.185 C 10.488 28.345 10.377 28.539 10.237 28.77 C 8.307 31.964 6.073 33.715 3.207 34.281 C 1.76 34.568 0.931 35.525 0.619 35.886 L 0 36.601 L 0 38.856 L 0.226 39.355 C 0.823 40.675 1.884 41.638 3.468 42.299 C 4.279 42.636 5.286 43.056 6.443 43.184 C 6.805 43.224 7.023 43.27 7.148 43.305 C 7.152 43.34 7.156 43.382 7.159 43.431 C 7.268 45.42 8.846 46.81 10.998 46.81 C 11.192 46.81 11.389 46.799 11.589 46.777 C 11.98 46.734 12.37 46.68 12.76 46.625 C 13.496 46.522 14.192 46.426 14.83 46.426 C 15.076 46.426 15.324 46.44 15.575 46.478 C 16.271 46.583 16.821 46.78 17.305 47.095 L 18.189 47.681 C 18.936 48.18 19.684 48.678 20.459 49.129 C 22.593 50.37 24.795 51 27.004 51 C 29.48 51 31.959 50.209 34.369 48.649 L 34.607 48.496 C 35.059 48.208 35.508 47.914 35.922 47.581 C 36.913 46.783 38.016 46.41 39.392 46.41 C 39.912 46.41 40.484 46.465 41.093 46.573 C 41.533 46.652 41.904 46.714 42.277 46.744 C 42.555 46.766 42.803 46.778 43.025 46.778 C 44.541 46.778 46.433 46.174 46.905 43.321 C 48.103 43.224 49.116 42.836 50.012 42.492 L 50.272 42.394 C 51.94 41.763 53.077 40.79 53.744 39.42 L 54 38.894 L 54 36.7 L 53.492 36.023 C 52.825 35.133 51.883 34.542 50.693 34.263 C 47.557 33.53 45.244 31.583 43.46 28.16 C 43.552 28.126 43.644 28.093 43.736 28.059 C 43.997 27.964 44.257 27.869 44.514 27.764 L 44.69 27.694 C 45.511 27.364 46.532 26.955 47.432 26.173 C 48.428 25.309 49.016 24.125 49.045 22.923 C 49.088 21.163 47.965 19.521 46.184 18.742 C 45.5 18.442 44.778 18.29 44.04 18.29 C 43.64 18.29 43.264 18.334 42.913 18.4 C 43 16.566 42.998 14.712 42.776 12.828 C 42.256 8.43 39.881 4.875 35.904 2.548 C 33.017 0.857 30.021 0 27.001 0 Z" fill="rgb(0,0,0)"></path></g></g></svg>`,
                              },
                              YEVPXvmtM: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 34" overflow="visible"><g><g><path d="M 18.017 33.165 C 16.698 33.165 15.373 32.785 14.082 32.034 C 13.568 31.736 13.074 31.405 12.579 31.074 L 12.015 30.699 C 11.585 30.421 11.111 30.249 10.528 30.163 C 10.313 30.13 10.104 30.116 9.897 30.116 C 9.39 30.116 8.893 30.189 8.393 30.26 L 7.602 30.362 L 7.349 30.373 C 6.372 30.373 5.683 29.79 5.636 28.923 C 5.604 28.333 5.483 28.079 4.403 27.963 C 3.755 27.89 3.146 27.636 2.656 27.43 C 1.81 27.079 1.248 26.578 0.941 25.903 L 0.865 25.737 L 0.865 24.733 L 1.07 24.494 C 1.352 24.168 1.721 23.816 2.319 23.699 C 4.481 23.271 6.15 21.98 7.567 19.633 C 8.106 18.741 8.145 18.476 8.137 18.406 C 8.106 18.37 7.902 18.187 6.872 17.823 C 6.666 17.754 6.567 17.724 6.472 17.684 C 5.971 17.478 5.441 17.242 4.969 16.836 C 4.333 16.282 4.073 15.54 4.254 14.794 C 4.453 13.984 5.139 13.342 6.045 13.123 C 6.231 13.079 6.422 13.056 6.613 13.056 C 7.12 13.056 7.563 13.207 7.955 13.339 C 8.081 13.381 8.205 13.423 8.323 13.456 C 8.208 12.207 8.192 10.913 8.264 9.353 C 8.402 6.392 9.851 4.015 12.451 2.478 C 14.263 1.406 16.133 0.863 18.013 0.863 C 19.893 0.863 21.726 1.396 23.52 2.445 C 25.932 3.855 27.374 6.007 27.688 8.665 C 27.879 10.292 27.813 11.904 27.7 13.416 C 27.794 13.388 27.886 13.359 27.977 13.331 C 28.389 13.203 28.855 13.054 29.374 13.054 C 29.752 13.054 30.109 13.13 30.462 13.284 C 31.333 13.666 31.882 14.45 31.861 15.277 C 31.847 15.84 31.561 16.406 31.076 16.825 C 30.588 17.249 30.011 17.48 29.501 17.686 L 28.88 17.924 C 28.66 18.003 28.44 18.083 28.229 18.182 C 27.965 18.303 27.901 18.392 27.895 18.4 C 27.897 18.402 27.895 18.489 27.989 18.687 C 29.327 21.511 31.116 23.095 33.615 23.681 C 34.217 23.82 34.668 24.1 34.995 24.537 L 35.164 24.762 L 35.164 25.747 L 35.079 25.923 C 34.733 26.631 34.127 27.142 33.227 27.482 C 32.49 27.764 31.855 28.007 31.151 28.053 C 30.646 28.086 30.53 28.192 30.458 28.685 C 30.344 29.46 30.041 30.349 28.7 30.349 C 28.572 30.349 28.427 30.343 28.265 30.329 C 28.047 30.311 27.822 30.274 27.598 30.232 C 27.123 30.148 26.695 30.104 26.276 30.104 C 25.168 30.104 24.236 30.422 23.429 31.074 C 23.167 31.283 22.882 31.467 22.599 31.648 C 20.997 32.683 19.501 33.165 18.016 33.165 Z" fill="rgb(255,255,255)"></path><path d="M 18 1.695 C 19.701 1.695 21.404 2.182 23.076 3.16 C 25.178 4.39 26.535 6.253 26.83 8.749 C 27.021 10.374 26.945 12.001 26.816 13.627 C 26.774 14.157 26.846 14.363 27.181 14.363 C 27.291 14.363 27.431 14.34 27.605 14.3 C 28.224 14.155 28.771 13.887 29.36 13.887 C 29.599 13.887 29.845 13.931 30.106 14.045 C 30.589 14.257 31.01 14.713 30.997 15.239 C 30.989 15.6 30.778 15.932 30.505 16.168 C 30.088 16.531 29.543 16.733 29.037 16.937 C 28.644 17.096 28.236 17.219 27.853 17.398 C 27.064 17.767 26.837 18.254 27.207 19.034 C 28.486 21.731 30.366 23.78 33.406 24.491 C 33.777 24.577 34.075 24.729 34.3 25.029 L 34.3 25.537 C 34.012 26.129 33.496 26.455 32.911 26.676 C 32.317 26.9 31.72 27.151 31.081 27.193 C 30.2 27.248 29.736 27.632 29.601 28.548 C 29.492 29.287 29.287 29.488 28.682 29.488 C 28.575 29.488 28.454 29.481 28.32 29.471 C 28.11 29.454 27.9 29.415 27.692 29.378 C 27.206 29.292 26.728 29.244 26.261 29.244 C 25.052 29.244 23.913 29.568 22.88 30.4 C 22.599 30.626 22.289 30.813 21.987 31.009 C 20.675 31.858 19.346 32.303 18.001 32.303 C 16.843 32.303 15.674 31.973 14.494 31.287 C 13.799 30.882 13.139 30.416 12.465 29.976 C 11.907 29.612 11.306 29.409 10.636 29.308 C 10.383 29.27 10.133 29.254 9.885 29.254 C 9.094 29.254 8.321 29.411 7.538 29.497 C 7.468 29.505 7.399 29.509 7.331 29.509 C 6.883 29.509 6.495 29.334 6.469 28.86 C 6.396 27.545 5.589 27.224 4.48 27.102 C 3.964 27.046 3.454 26.836 2.967 26.633 C 2.436 26.411 1.953 26.097 1.699 25.537 L 1.699 25.029 C 1.908 24.787 2.128 24.582 2.468 24.515 C 5.141 23.987 6.931 22.287 8.28 20.054 C 9.414 18.177 9.232 17.747 7.141 17.009 C 7.021 16.967 6.899 16.932 6.781 16.884 C 6.33 16.699 5.883 16.501 5.509 16.178 C 4.573 15.366 5.127 14.196 6.231 13.932 C 6.356 13.902 6.479 13.888 6.601 13.888 C 7.258 13.888 7.862 14.271 8.524 14.353 C 8.592 14.361 8.655 14.365 8.713 14.365 C 9.098 14.365 9.248 14.169 9.192 13.685 C 9.027 12.253 9.031 10.813 9.098 9.375 C 9.227 6.633 10.579 4.544 12.869 3.19 C 14.552 2.195 16.275 1.695 18 1.695 M 18 0 C 15.966 0 13.948 0.583 12.003 1.733 C 9.146 3.422 7.554 6.038 7.402 9.297 C 7.35 10.401 7.342 11.379 7.38 12.278 C 7.141 12.228 6.881 12.194 6.601 12.194 C 6.341 12.194 6.083 12.224 5.834 12.284 C 4.616 12.576 3.689 13.455 3.415 14.578 C 3.158 15.627 3.525 16.704 4.395 17.459 C 4.962 17.951 5.59 18.23 6.135 18.454 C 6.249 18.5 6.364 18.54 6.48 18.577 C 6.72 18.662 6.907 18.732 7.051 18.79 C 6.992 18.897 6.918 19.026 6.825 19.18 C 5.538 21.309 4.049 22.477 2.138 22.854 C 1.173 23.045 0.621 23.683 0.413 23.924 L 0 24.401 L 0 25.904 L 0.151 26.236 C 0.549 27.117 1.256 27.759 2.312 28.199 C 2.852 28.424 3.524 28.704 4.295 28.789 C 4.536 28.816 4.682 28.847 4.765 28.87 C 4.768 28.893 4.771 28.921 4.773 28.954 C 4.845 30.28 5.898 31.206 7.332 31.206 C 7.462 31.206 7.593 31.199 7.726 31.184 C 7.986 31.156 8.247 31.12 8.507 31.083 C 8.997 31.015 9.461 30.951 9.887 30.951 C 10.051 30.951 10.216 30.96 10.383 30.985 C 10.848 31.055 11.214 31.186 11.536 31.397 L 12.126 31.787 C 12.624 32.12 13.122 32.452 13.639 32.753 C 15.062 33.58 16.53 34 18.002 34 C 19.654 34 21.306 33.472 22.913 32.433 L 23.072 32.331 C 23.372 32.138 23.672 31.943 23.948 31.721 C 24.609 31.188 25.344 30.94 26.262 30.94 C 26.608 30.94 26.989 30.977 27.395 31.049 C 27.689 31.101 27.936 31.142 28.185 31.162 C 28.37 31.177 28.535 31.185 28.683 31.185 C 29.694 31.185 30.955 30.783 31.27 28.88 C 32.068 28.816 32.744 28.557 33.342 28.328 L 33.514 28.262 C 34.627 27.842 35.384 27.193 35.829 26.28 L 36 25.929 L 36 24.467 L 35.661 24.015 C 35.216 23.422 34.589 23.028 33.795 22.842 C 31.705 22.353 30.162 21.055 28.973 18.773 C 29.035 18.75 29.096 18.728 29.157 18.706 C 29.331 18.643 29.505 18.579 29.676 18.51 L 29.794 18.462 C 30.34 18.243 31.021 17.97 31.622 17.448 C 32.285 16.873 32.677 16.083 32.697 15.282 C 32.725 14.109 31.976 13.014 30.789 12.495 C 30.333 12.295 29.852 12.193 29.36 12.193 C 29.093 12.193 28.843 12.222 28.608 12.267 C 28.666 11.044 28.665 9.808 28.517 8.552 C 28.171 5.62 26.587 3.25 23.936 1.699 C 22.011 0.572 20.014 0 18 0 Z" fill="rgb(0,0,0)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Le() &&
                            p(S, {
                              className: `framer-awoti3`,
                              "data-framer-name": `Snapchat logo`,
                              layoutDependency: x,
                              layoutId: `tswWjVLwG`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 34" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "YEVPXvmtM-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 51" overflow="visible"><g><path d="M 25.728 48.452 C 23.748 48.452 21.761 47.882 19.825 46.757 C 19.054 46.31 18.313 45.813 17.571 45.317 L 16.725 44.754 C 16.079 44.337 15.369 44.078 14.494 43.949 C 14.172 43.899 13.858 43.88 13.547 43.88 C 12.787 43.88 12.041 43.988 11.291 44.095 L 10.105 44.248 L 9.725 44.265 C 8.259 44.265 7.227 43.391 7.156 42.089 C 7.108 41.205 6.927 40.824 5.307 40.649 C 4.335 40.54 3.42 40.159 2.686 39.851 C 1.417 39.324 0.573 38.572 0.113 37.559 L 0 37.311 L 0 35.804 L 0.307 35.447 C 0.73 34.957 1.283 34.43 2.181 34.254 C 5.424 33.611 7.927 31.674 10.053 28.155 C 10.861 26.816 10.919 26.419 10.907 26.313 C 10.861 26.26 10.555 25.986 9.011 25.439 C 8.7 25.336 8.552 25.29 8.409 25.231 C 7.659 24.922 6.864 24.568 6.155 23.959 C 5.201 23.128 4.811 22.015 5.083 20.896 C 5.382 19.681 6.41 18.718 7.77 18.389 C 8.049 18.324 8.334 18.29 8.621 18.29 C 9.382 18.29 10.047 18.515 10.634 18.714 C 10.823 18.777 11.009 18.84 11.186 18.889 C 11.013 17.015 10.989 15.075 11.098 12.734 C 11.305 8.293 13.478 4.727 17.379 2.422 C 20.096 0.814 22.902 0 25.722 0 C 28.542 0 31.29 0.798 33.981 2.372 C 37.601 4.488 39.762 7.716 40.234 11.703 C 40.521 14.143 40.421 16.561 40.252 18.83 C 40.393 18.787 40.531 18.744 40.668 18.701 C 41.285 18.509 41.984 18.287 42.763 18.287 C 43.33 18.287 43.865 18.399 44.394 18.631 C 45.701 19.204 46.525 20.379 46.494 21.621 C 46.472 22.465 46.043 23.313 45.316 23.942 C 44.583 24.578 43.719 24.925 42.954 25.234 L 42.022 25.591 C 41.692 25.71 41.362 25.829 41.045 25.978 C 40.65 26.16 40.554 26.292 40.544 26.305 C 40.547 26.308 40.544 26.438 40.685 26.735 C 42.693 30.971 45.376 33.348 49.124 34.226 C 50.027 34.435 50.704 34.855 51.194 35.511 L 51.448 35.848 L 51.448 37.325 L 51.32 37.589 C 50.802 38.652 49.892 39.418 48.542 39.928 C 47.436 40.352 46.484 40.716 45.429 40.785 C 44.67 40.835 44.496 40.993 44.388 41.732 C 44.217 42.895 43.763 44.229 41.752 44.229 C 41.56 44.229 41.342 44.219 41.1 44.199 C 40.773 44.172 40.435 44.116 40.1 44.053 C 39.386 43.927 38.744 43.862 38.116 43.862 C 36.454 43.862 35.057 44.339 33.845 45.316 C 33.452 45.63 33.025 45.905 32.601 46.177 C 30.198 47.73 27.954 48.452 25.726 48.452 Z" fill="rgb(255,255,255)"></path><path d="M 27.001 2.543 C 29.551 2.543 32.106 3.272 34.614 4.74 C 37.768 6.586 39.802 9.379 40.245 13.123 C 40.532 15.56 40.418 18.001 40.225 20.44 C 40.162 21.236 40.269 21.544 40.771 21.544 C 40.937 21.544 41.147 21.51 41.408 21.449 C 42.335 21.233 43.156 20.831 44.04 20.831 C 44.398 20.831 44.767 20.896 45.159 21.068 C 45.884 21.385 46.515 22.069 46.496 22.858 C 46.483 23.399 46.167 23.897 45.758 24.253 C 45.132 24.796 44.315 25.099 43.556 25.405 C 42.967 25.644 42.354 25.828 41.78 26.097 C 40.596 26.651 40.256 27.381 40.81 28.551 C 42.729 32.597 45.549 35.669 50.109 36.736 C 50.666 36.866 51.112 37.093 51.45 37.543 L 51.45 38.306 C 51.018 39.193 50.245 39.682 49.366 40.013 C 48.475 40.351 47.58 40.727 46.621 40.789 C 45.3 40.873 44.603 41.448 44.401 42.822 C 44.238 43.93 43.93 44.232 43.024 44.232 C 42.863 44.232 42.682 44.222 42.481 44.206 C 42.164 44.181 41.85 44.122 41.538 44.067 C 40.809 43.938 40.093 43.866 39.391 43.866 C 37.579 43.866 35.87 44.352 34.319 45.6 C 33.899 45.938 33.434 46.22 32.98 46.514 C 31.012 47.788 29.018 48.455 27.002 48.455 C 25.265 48.455 23.511 47.96 21.74 46.93 C 20.698 46.324 19.709 45.624 18.697 44.964 C 17.86 44.418 16.96 44.113 15.954 43.961 C 15.575 43.904 15.2 43.881 14.828 43.881 C 13.641 43.881 12.481 44.117 11.306 44.246 C 11.202 44.258 11.098 44.264 10.996 44.264 C 10.324 44.264 9.742 44 9.703 43.29 C 9.595 41.318 8.383 40.836 6.721 40.653 C 5.946 40.568 5.181 40.254 4.451 39.95 C 3.653 39.617 2.929 39.145 2.549 38.306 L 2.549 37.543 C 2.862 37.181 3.192 36.873 3.701 36.773 C 7.712 35.981 10.396 33.43 12.42 30.081 C 14.121 27.265 13.848 26.621 10.712 25.514 C 10.532 25.45 10.348 25.398 10.172 25.326 C 9.495 25.048 8.824 24.752 8.264 24.267 C 6.86 23.049 7.691 21.295 9.347 20.897 C 9.535 20.852 9.719 20.833 9.901 20.833 C 10.887 20.833 11.794 21.406 12.786 21.529 C 12.888 21.542 12.982 21.548 13.069 21.548 C 13.646 21.548 13.872 21.254 13.788 20.528 C 13.54 18.38 13.546 16.22 13.647 14.062 C 13.84 9.95 15.868 6.816 19.304 4.785 C 21.828 3.292 24.412 2.542 26.999 2.542 M 27.001 0 C 23.949 0 20.922 0.874 18.005 2.6 C 13.718 5.134 11.331 9.058 11.102 13.946 C 11.024 15.602 11.013 17.068 11.07 18.417 C 10.711 18.342 10.322 18.291 9.902 18.291 C 9.512 18.291 9.125 18.337 8.75 18.426 C 6.925 18.865 5.534 20.183 5.122 21.867 C 4.737 23.441 5.287 25.056 6.593 26.189 C 7.443 26.926 8.385 27.345 9.203 27.681 C 9.374 27.75 9.547 27.809 9.72 27.866 C 10.08 27.993 10.36 28.098 10.577 28.185 C 10.488 28.345 10.377 28.539 10.237 28.77 C 8.307 31.964 6.073 33.715 3.207 34.281 C 1.76 34.568 0.931 35.525 0.619 35.886 L 0 36.601 L 0 38.856 L 0.226 39.355 C 0.823 40.675 1.884 41.638 3.468 42.299 C 4.279 42.636 5.286 43.056 6.443 43.184 C 6.805 43.224 7.023 43.27 7.148 43.305 C 7.152 43.34 7.156 43.382 7.159 43.431 C 7.268 45.42 8.846 46.81 10.998 46.81 C 11.192 46.81 11.389 46.799 11.589 46.777 C 11.98 46.734 12.37 46.68 12.76 46.625 C 13.496 46.522 14.192 46.426 14.83 46.426 C 15.076 46.426 15.324 46.44 15.575 46.478 C 16.271 46.583 16.821 46.78 17.305 47.095 L 18.189 47.681 C 18.936 48.18 19.684 48.678 20.459 49.129 C 22.593 50.37 24.795 51 27.004 51 C 29.48 51 31.959 50.209 34.369 48.649 L 34.607 48.496 C 35.059 48.208 35.508 47.914 35.922 47.581 C 36.913 46.783 38.016 46.41 39.392 46.41 C 39.912 46.41 40.484 46.465 41.093 46.573 C 41.533 46.652 41.904 46.714 42.277 46.744 C 42.555 46.766 42.803 46.778 43.025 46.778 C 44.541 46.778 46.433 46.174 46.905 43.321 C 48.103 43.224 49.116 42.836 50.012 42.492 L 50.272 42.394 C 51.94 41.763 53.077 40.79 53.744 39.42 L 54 38.894 L 54 36.7 L 53.492 36.023 C 52.825 35.133 51.883 34.542 50.693 34.263 C 47.557 33.53 45.244 31.583 43.46 28.16 C 43.552 28.126 43.644 28.093 43.736 28.059 C 43.997 27.964 44.257 27.869 44.514 27.764 L 44.69 27.694 C 45.511 27.364 46.532 26.955 47.432 26.173 C 48.428 25.309 49.016 24.125 49.045 22.923 C 49.088 21.163 47.965 19.521 46.184 18.742 C 45.5 18.442 44.778 18.29 44.04 18.29 C 43.64 18.29 43.264 18.334 42.913 18.4 C 43 16.566 42.998 14.712 42.776 12.828 C 42.256 8.43 39.881 4.875 35.904 2.548 C 33.017 0.857 30.021 0 27.001 0 Z" fill="rgb(0,0,0)"></path></g></svg>`,
                                  },
                                  YEVPXvmtM: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 34" overflow="visible"><g><path d="M 18.017 33.165 C 16.698 33.165 15.373 32.785 14.082 32.034 C 13.568 31.736 13.074 31.405 12.579 31.074 L 12.015 30.699 C 11.585 30.421 11.111 30.249 10.528 30.163 C 10.313 30.13 10.104 30.116 9.897 30.116 C 9.39 30.116 8.893 30.189 8.393 30.26 L 7.602 30.362 L 7.349 30.373 C 6.372 30.373 5.683 29.79 5.636 28.923 C 5.604 28.333 5.483 28.079 4.403 27.963 C 3.755 27.89 3.146 27.636 2.656 27.43 C 1.81 27.079 1.248 26.578 0.941 25.903 L 0.865 25.737 L 0.865 24.733 L 1.07 24.494 C 1.352 24.168 1.721 23.816 2.319 23.699 C 4.481 23.271 6.15 21.98 7.567 19.633 C 8.106 18.741 8.145 18.476 8.137 18.406 C 8.106 18.37 7.902 18.187 6.872 17.823 C 6.666 17.754 6.567 17.724 6.472 17.684 C 5.971 17.478 5.441 17.242 4.969 16.836 C 4.333 16.282 4.073 15.54 4.254 14.794 C 4.453 13.984 5.139 13.342 6.045 13.123 C 6.231 13.079 6.422 13.056 6.613 13.056 C 7.12 13.056 7.563 13.207 7.955 13.339 C 8.081 13.381 8.205 13.423 8.323 13.456 C 8.208 12.207 8.192 10.913 8.264 9.353 C 8.402 6.392 9.851 4.015 12.451 2.478 C 14.263 1.406 16.133 0.863 18.013 0.863 C 19.893 0.863 21.726 1.396 23.52 2.445 C 25.932 3.855 27.374 6.007 27.688 8.665 C 27.879 10.292 27.813 11.904 27.7 13.416 C 27.794 13.388 27.886 13.359 27.977 13.331 C 28.389 13.203 28.855 13.054 29.374 13.054 C 29.752 13.054 30.109 13.13 30.462 13.284 C 31.333 13.666 31.882 14.45 31.861 15.277 C 31.847 15.84 31.561 16.406 31.076 16.825 C 30.588 17.249 30.011 17.48 29.501 17.686 L 28.88 17.924 C 28.66 18.003 28.44 18.083 28.229 18.182 C 27.965 18.303 27.901 18.392 27.895 18.4 C 27.897 18.402 27.895 18.489 27.989 18.687 C 29.327 21.511 31.116 23.095 33.615 23.681 C 34.217 23.82 34.668 24.1 34.995 24.537 L 35.164 24.762 L 35.164 25.747 L 35.079 25.923 C 34.733 26.631 34.127 27.142 33.227 27.482 C 32.49 27.764 31.855 28.007 31.151 28.053 C 30.646 28.086 30.53 28.192 30.458 28.685 C 30.344 29.46 30.041 30.349 28.7 30.349 C 28.572 30.349 28.427 30.343 28.265 30.329 C 28.047 30.311 27.822 30.274 27.598 30.232 C 27.123 30.148 26.695 30.104 26.276 30.104 C 25.168 30.104 24.236 30.422 23.429 31.074 C 23.167 31.283 22.882 31.467 22.599 31.648 C 20.997 32.683 19.501 33.165 18.016 33.165 Z" fill="rgb(255,255,255)"></path><path d="M 18 1.695 C 19.701 1.695 21.404 2.182 23.076 3.16 C 25.178 4.39 26.535 6.253 26.83 8.749 C 27.021 10.374 26.945 12.001 26.816 13.627 C 26.774 14.157 26.846 14.363 27.181 14.363 C 27.291 14.363 27.431 14.34 27.605 14.3 C 28.224 14.155 28.771 13.887 29.36 13.887 C 29.599 13.887 29.845 13.931 30.106 14.045 C 30.589 14.257 31.01 14.713 30.997 15.239 C 30.989 15.6 30.778 15.932 30.505 16.168 C 30.088 16.531 29.543 16.733 29.037 16.937 C 28.644 17.096 28.236 17.219 27.853 17.398 C 27.064 17.767 26.837 18.254 27.207 19.034 C 28.486 21.731 30.366 23.78 33.406 24.491 C 33.777 24.577 34.075 24.729 34.3 25.029 L 34.3 25.537 C 34.012 26.129 33.496 26.455 32.911 26.676 C 32.317 26.9 31.72 27.151 31.081 27.193 C 30.2 27.248 29.736 27.632 29.601 28.548 C 29.492 29.287 29.287 29.488 28.682 29.488 C 28.575 29.488 28.454 29.481 28.32 29.471 C 28.11 29.454 27.9 29.415 27.692 29.378 C 27.206 29.292 26.728 29.244 26.261 29.244 C 25.052 29.244 23.913 29.568 22.88 30.4 C 22.599 30.626 22.289 30.813 21.987 31.009 C 20.675 31.858 19.346 32.303 18.001 32.303 C 16.843 32.303 15.674 31.973 14.494 31.287 C 13.799 30.882 13.139 30.416 12.465 29.976 C 11.907 29.612 11.306 29.409 10.636 29.308 C 10.383 29.27 10.133 29.254 9.885 29.254 C 9.094 29.254 8.321 29.411 7.538 29.497 C 7.468 29.505 7.399 29.509 7.331 29.509 C 6.883 29.509 6.495 29.334 6.469 28.86 C 6.396 27.545 5.589 27.224 4.48 27.102 C 3.964 27.046 3.454 26.836 2.967 26.633 C 2.436 26.411 1.953 26.097 1.699 25.537 L 1.699 25.029 C 1.908 24.787 2.128 24.582 2.468 24.515 C 5.141 23.987 6.931 22.287 8.28 20.054 C 9.414 18.177 9.232 17.747 7.141 17.009 C 7.021 16.967 6.899 16.932 6.781 16.884 C 6.33 16.699 5.883 16.501 5.509 16.178 C 4.573 15.366 5.127 14.196 6.231 13.932 C 6.356 13.902 6.479 13.888 6.601 13.888 C 7.258 13.888 7.862 14.271 8.524 14.353 C 8.592 14.361 8.655 14.365 8.713 14.365 C 9.098 14.365 9.248 14.169 9.192 13.685 C 9.027 12.253 9.031 10.813 9.098 9.375 C 9.227 6.633 10.579 4.544 12.869 3.19 C 14.552 2.195 16.275 1.695 18 1.695 M 18 0 C 15.966 0 13.948 0.583 12.003 1.733 C 9.146 3.422 7.554 6.038 7.402 9.297 C 7.35 10.401 7.342 11.379 7.38 12.278 C 7.141 12.228 6.881 12.194 6.601 12.194 C 6.341 12.194 6.083 12.224 5.834 12.284 C 4.616 12.576 3.689 13.455 3.415 14.578 C 3.158 15.627 3.525 16.704 4.395 17.459 C 4.962 17.951 5.59 18.23 6.135 18.454 C 6.249 18.5 6.364 18.54 6.48 18.577 C 6.72 18.662 6.907 18.732 7.051 18.79 C 6.992 18.897 6.918 19.026 6.825 19.18 C 5.538 21.309 4.049 22.477 2.138 22.854 C 1.173 23.045 0.621 23.683 0.413 23.924 L 0 24.401 L 0 25.904 L 0.151 26.236 C 0.549 27.117 1.256 27.759 2.312 28.199 C 2.852 28.424 3.524 28.704 4.295 28.789 C 4.536 28.816 4.682 28.847 4.765 28.87 C 4.768 28.893 4.771 28.921 4.773 28.954 C 4.845 30.28 5.898 31.206 7.332 31.206 C 7.462 31.206 7.593 31.199 7.726 31.184 C 7.986 31.156 8.247 31.12 8.507 31.083 C 8.997 31.015 9.461 30.951 9.887 30.951 C 10.051 30.951 10.216 30.96 10.383 30.985 C 10.848 31.055 11.214 31.186 11.536 31.397 L 12.126 31.787 C 12.624 32.12 13.122 32.452 13.639 32.753 C 15.062 33.58 16.53 34 18.002 34 C 19.654 34 21.306 33.472 22.913 32.433 L 23.072 32.331 C 23.372 32.138 23.672 31.943 23.948 31.721 C 24.609 31.188 25.344 30.94 26.262 30.94 C 26.608 30.94 26.989 30.977 27.395 31.049 C 27.689 31.101 27.936 31.142 28.185 31.162 C 28.37 31.177 28.535 31.185 28.683 31.185 C 29.694 31.185 30.955 30.783 31.27 28.88 C 32.068 28.816 32.744 28.557 33.342 28.328 L 33.514 28.262 C 34.627 27.842 35.384 27.193 35.829 26.28 L 36 25.929 L 36 24.467 L 35.661 24.015 C 35.216 23.422 34.589 23.028 33.795 22.842 C 31.705 22.353 30.162 21.055 28.973 18.773 C 29.035 18.75 29.096 18.728 29.157 18.706 C 29.331 18.643 29.505 18.579 29.676 18.51 L 29.794 18.462 C 30.34 18.243 31.021 17.97 31.622 17.448 C 32.285 16.873 32.677 16.083 32.697 15.282 C 32.725 14.109 31.976 13.014 30.789 12.495 C 30.333 12.295 29.852 12.193 29.36 12.193 C 29.093 12.193 28.843 12.222 28.608 12.267 C 28.666 11.044 28.665 9.808 28.517 8.552 C 28.171 5.62 26.587 3.25 23.936 1.699 C 22.011 0.572 20.014 0 18 0 Z" fill="rgb(0,0,0)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-xg1xyy`,
                                  layoutDependency: x,
                                  layoutId: `J55cpACOv`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.299 32.301" overflow="visible"><path d="M 17.152 32.301 C 15.832 32.301 14.508 31.922 13.216 31.171 C 12.703 30.873 12.209 30.542 11.714 30.211 L 11.15 29.836 C 10.72 29.558 10.246 29.385 9.662 29.3 C 9.448 29.266 9.239 29.253 9.032 29.253 C 8.525 29.253 8.027 29.326 7.528 29.397 L 6.737 29.499 L 6.483 29.51 C 5.506 29.51 4.818 28.927 4.771 28.059 C 4.739 27.47 4.618 27.216 3.538 27.099 C 2.89 27.027 2.28 26.773 1.791 26.567 C 0.944 26.216 0.382 25.715 0.075 25.04 L 0 24.874 L 0 23.869 L 0.205 23.631 C 0.487 23.304 0.856 22.953 1.454 22.836 C 3.616 22.408 5.285 21.116 6.702 18.77 C 7.241 17.878 7.279 17.613 7.271 17.542 C 7.241 17.507 7.037 17.324 6.007 16.959 C 5.8 16.891 5.702 16.86 5.606 16.82 C 5.106 16.615 4.576 16.379 4.104 15.973 C 3.467 15.419 3.207 14.677 3.389 13.931 C 3.588 13.121 4.274 12.479 5.18 12.26 C 5.366 12.216 5.556 12.193 5.748 12.193 C 6.254 12.193 6.698 12.343 7.089 12.476 C 7.215 12.518 7.34 12.56 7.458 12.593 C 7.342 11.344 7.326 10.05 7.399 8.489 C 7.537 5.529 8.985 3.152 11.586 1.615 C 13.397 0.543 15.268 0 17.148 0 C 19.028 0 20.86 0.532 22.654 1.581 C 25.067 2.992 26.508 5.144 26.822 7.802 C 27.014 9.429 26.947 11.041 26.834 12.553 C 26.928 12.524 27.021 12.496 27.112 12.467 C 27.523 12.34 27.99 12.191 28.508 12.191 C 28.887 12.191 29.243 12.266 29.596 12.421 C 30.467 12.803 31.017 13.586 30.996 14.414 C 30.981 14.977 30.695 15.542 30.21 15.961 C 29.722 16.385 29.146 16.617 28.636 16.822 L 28.015 17.061 C 27.795 17.14 27.575 17.22 27.363 17.319 C 27.1 17.44 27.036 17.528 27.029 17.537 C 27.031 17.539 27.029 17.625 27.123 17.824 C 28.462 20.647 30.25 22.232 32.749 22.817 C 33.352 22.957 33.802 23.237 34.129 23.674 L 34.299 23.899 L 34.299 24.883 L 34.213 25.06 C 33.868 25.768 33.262 26.278 32.361 26.618 C 31.624 26.901 30.989 27.144 30.286 27.19 C 29.78 27.223 29.664 27.329 29.592 27.821 C 29.478 28.596 29.175 29.486 27.835 29.486 C 27.707 29.486 27.561 29.479 27.4 29.466 C 27.182 29.448 26.956 29.411 26.733 29.369 C 26.258 29.285 25.829 29.241 25.411 29.241 C 24.303 29.241 23.371 29.559 22.563 30.21 C 22.301 30.42 22.017 30.604 21.734 30.785 C 20.132 31.82 18.636 32.301 17.151 32.301 Z" fill="rgb(255,255,255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "YEVPXvmtM-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51.448 48.452" overflow="visible"><path d="M 25.728 48.452 C 23.748 48.452 21.761 47.882 19.825 46.757 C 19.054 46.31 18.313 45.813 17.571 45.317 L 16.725 44.754 C 16.079 44.337 15.369 44.078 14.494 43.949 C 14.172 43.899 13.858 43.88 13.547 43.88 C 12.787 43.88 12.041 43.988 11.291 44.095 L 10.105 44.248 L 9.725 44.265 C 8.259 44.265 7.227 43.391 7.156 42.089 C 7.108 41.205 6.927 40.824 5.307 40.649 C 4.335 40.54 3.42 40.159 2.686 39.851 C 1.417 39.324 0.573 38.572 0.113 37.559 L 0 37.311 L 0 35.804 L 0.307 35.447 C 0.73 34.957 1.283 34.43 2.181 34.254 C 5.424 33.611 7.927 31.674 10.053 28.155 C 10.861 26.816 10.919 26.419 10.907 26.313 C 10.861 26.26 10.555 25.986 9.011 25.439 C 8.7 25.336 8.552 25.29 8.409 25.231 C 7.659 24.922 6.864 24.568 6.155 23.959 C 5.201 23.128 4.811 22.015 5.083 20.896 C 5.382 19.681 6.41 18.718 7.77 18.389 C 8.049 18.324 8.334 18.29 8.621 18.29 C 9.382 18.29 10.047 18.515 10.634 18.714 C 10.823 18.777 11.009 18.84 11.186 18.889 C 11.013 17.015 10.989 15.075 11.098 12.734 C 11.305 8.293 13.478 4.727 17.379 2.422 C 20.096 0.814 22.902 0 25.722 0 C 28.542 0 31.29 0.798 33.981 2.372 C 37.601 4.488 39.762 7.716 40.234 11.703 C 40.521 14.143 40.421 16.561 40.252 18.83 C 40.393 18.787 40.531 18.744 40.668 18.701 C 41.285 18.509 41.984 18.287 42.763 18.287 C 43.33 18.287 43.865 18.399 44.394 18.631 C 45.701 19.204 46.525 20.379 46.494 21.621 C 46.472 22.465 46.043 23.313 45.316 23.942 C 44.583 24.578 43.719 24.925 42.954 25.234 L 42.022 25.591 C 41.692 25.71 41.362 25.829 41.045 25.978 C 40.65 26.16 40.554 26.292 40.544 26.305 C 40.547 26.308 40.544 26.438 40.685 26.735 C 42.693 30.971 45.376 33.348 49.124 34.226 C 50.027 34.435 50.704 34.855 51.194 35.511 L 51.448 35.848 L 51.448 37.325 L 51.32 37.589 C 50.802 38.652 49.892 39.418 48.542 39.928 C 47.436 40.352 46.484 40.716 45.429 40.785 C 44.67 40.835 44.496 40.993 44.388 41.732 C 44.217 42.895 43.763 44.229 41.752 44.229 C 41.56 44.229 41.342 44.219 41.1 44.199 C 40.773 44.172 40.435 44.116 40.1 44.053 C 39.386 43.927 38.744 43.862 38.116 43.862 C 36.454 43.862 35.057 44.339 33.845 45.316 C 33.452 45.63 33.025 45.905 32.601 46.177 C 30.198 47.73 27.954 48.452 25.726 48.452 Z" fill="rgb(255,255,255)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                p(S, {
                                  className: `framer-cppdoz`,
                                  layoutDependency: x,
                                  layoutId: `cpIUJDvFN`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 34" overflow="visible"><path d="M 18 1.695 C 19.701 1.695 21.404 2.182 23.076 3.16 C 25.178 4.39 26.535 6.253 26.83 8.749 C 27.021 10.374 26.945 12.001 26.816 13.627 C 26.774 14.157 26.846 14.363 27.181 14.363 C 27.291 14.363 27.431 14.34 27.605 14.3 C 28.224 14.155 28.771 13.887 29.36 13.887 C 29.599 13.887 29.845 13.931 30.106 14.045 C 30.589 14.257 31.01 14.713 30.997 15.239 C 30.989 15.6 30.778 15.932 30.505 16.168 C 30.088 16.531 29.543 16.733 29.037 16.937 C 28.644 17.096 28.236 17.219 27.853 17.398 C 27.064 17.767 26.837 18.254 27.207 19.034 C 28.486 21.731 30.366 23.78 33.406 24.491 C 33.777 24.577 34.075 24.729 34.3 25.029 L 34.3 25.537 C 34.012 26.129 33.496 26.455 32.911 26.676 C 32.317 26.9 31.72 27.151 31.081 27.193 C 30.2 27.248 29.736 27.632 29.601 28.548 C 29.492 29.287 29.287 29.488 28.682 29.488 C 28.575 29.488 28.454 29.481 28.32 29.471 C 28.11 29.454 27.9 29.415 27.692 29.378 C 27.206 29.292 26.728 29.244 26.261 29.244 C 25.052 29.244 23.913 29.568 22.88 30.4 C 22.599 30.626 22.289 30.813 21.987 31.009 C 20.675 31.858 19.346 32.303 18.001 32.303 C 16.843 32.303 15.674 31.973 14.494 31.287 C 13.799 30.882 13.139 30.416 12.465 29.976 C 11.907 29.612 11.306 29.409 10.636 29.308 C 10.383 29.27 10.133 29.254 9.885 29.254 C 9.094 29.254 8.321 29.411 7.538 29.497 C 7.468 29.505 7.399 29.509 7.331 29.509 C 6.883 29.509 6.495 29.334 6.469 28.86 C 6.396 27.545 5.589 27.224 4.48 27.102 C 3.964 27.046 3.454 26.836 2.967 26.633 C 2.436 26.411 1.953 26.097 1.699 25.537 L 1.699 25.029 C 1.908 24.787 2.128 24.582 2.468 24.515 C 5.141 23.987 6.931 22.287 8.28 20.054 C 9.414 18.177 9.232 17.747 7.141 17.009 C 7.021 16.967 6.899 16.932 6.781 16.884 C 6.33 16.699 5.883 16.501 5.509 16.178 C 4.573 15.366 5.127 14.196 6.231 13.932 C 6.356 13.902 6.479 13.888 6.601 13.888 C 7.258 13.888 7.862 14.271 8.524 14.353 C 8.592 14.361 8.655 14.365 8.713 14.365 C 9.098 14.365 9.248 14.169 9.192 13.685 C 9.027 12.253 9.031 10.813 9.098 9.375 C 9.227 6.633 10.579 4.544 12.869 3.19 C 14.552 2.195 16.275 1.695 18 1.695 M 18 0 C 15.966 0 13.948 0.583 12.003 1.733 C 9.146 3.422 7.554 6.038 7.402 9.297 C 7.35 10.401 7.342 11.379 7.38 12.278 C 7.141 12.228 6.881 12.194 6.601 12.194 C 6.341 12.194 6.083 12.224 5.834 12.284 C 4.616 12.576 3.689 13.455 3.415 14.578 C 3.158 15.627 3.525 16.704 4.395 17.459 C 4.962 17.951 5.59 18.23 6.135 18.454 C 6.249 18.5 6.364 18.54 6.48 18.577 C 6.72 18.662 6.907 18.732 7.051 18.79 C 6.992 18.897 6.918 19.026 6.825 19.18 C 5.538 21.309 4.049 22.477 2.138 22.854 C 1.173 23.045 0.621 23.683 0.413 23.924 L 0 24.401 L 0 25.904 L 0.151 26.236 C 0.549 27.117 1.256 27.759 2.312 28.199 C 2.852 28.424 3.524 28.704 4.295 28.789 C 4.536 28.816 4.682 28.847 4.765 28.87 C 4.768 28.893 4.771 28.921 4.773 28.954 C 4.845 30.28 5.898 31.206 7.332 31.206 C 7.462 31.206 7.593 31.199 7.726 31.184 C 7.986 31.156 8.247 31.12 8.507 31.083 C 8.997 31.015 9.461 30.951 9.887 30.951 C 10.051 30.951 10.216 30.96 10.383 30.985 C 10.848 31.055 11.214 31.186 11.536 31.397 L 12.126 31.787 C 12.624 32.12 13.122 32.452 13.639 32.753 C 15.062 33.58 16.53 34 18.002 34 C 19.654 34 21.306 33.472 22.913 32.433 L 23.072 32.331 C 23.372 32.138 23.672 31.943 23.948 31.721 C 24.609 31.188 25.344 30.94 26.262 30.94 C 26.608 30.94 26.989 30.977 27.395 31.049 C 27.689 31.101 27.936 31.142 28.185 31.162 C 28.37 31.177 28.535 31.185 28.683 31.185 C 29.694 31.185 30.955 30.783 31.27 28.88 C 32.068 28.816 32.744 28.557 33.342 28.328 L 33.514 28.262 C 34.627 27.842 35.384 27.193 35.829 26.28 L 36 25.929 L 36 24.467 L 35.661 24.015 C 35.216 23.422 34.589 23.028 33.795 22.842 C 31.705 22.353 30.162 21.055 28.973 18.773 C 29.035 18.75 29.096 18.728 29.157 18.706 C 29.331 18.643 29.505 18.579 29.676 18.51 L 29.794 18.462 C 30.34 18.243 31.021 17.97 31.622 17.448 C 32.285 16.873 32.677 16.083 32.697 15.282 C 32.725 14.109 31.976 13.014 30.789 12.495 C 30.333 12.295 29.852 12.193 29.36 12.193 C 29.093 12.193 28.843 12.222 28.608 12.267 C 28.666 11.044 28.665 9.808 28.517 8.552 C 28.171 5.62 26.587 3.25 23.936 1.699 C 22.011 0.572 20.014 0 18 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "YEVPXvmtM-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 51" overflow="visible"><path d="M 27.001 2.543 C 29.551 2.543 32.106 3.272 34.614 4.74 C 37.768 6.586 39.802 9.379 40.245 13.123 C 40.532 15.56 40.418 18.001 40.225 20.44 C 40.162 21.236 40.269 21.544 40.771 21.544 C 40.937 21.544 41.147 21.51 41.408 21.449 C 42.335 21.233 43.156 20.831 44.04 20.831 C 44.398 20.831 44.767 20.896 45.159 21.068 C 45.884 21.385 46.515 22.069 46.496 22.858 C 46.483 23.399 46.167 23.897 45.758 24.253 C 45.132 24.796 44.315 25.099 43.556 25.405 C 42.967 25.644 42.354 25.828 41.78 26.097 C 40.596 26.651 40.256 27.381 40.81 28.551 C 42.729 32.597 45.549 35.669 50.109 36.736 C 50.666 36.866 51.112 37.093 51.45 37.543 L 51.45 38.306 C 51.018 39.193 50.245 39.682 49.366 40.013 C 48.475 40.351 47.58 40.727 46.621 40.789 C 45.3 40.873 44.603 41.448 44.401 42.822 C 44.238 43.93 43.93 44.232 43.024 44.232 C 42.863 44.232 42.682 44.222 42.481 44.206 C 42.164 44.181 41.85 44.122 41.538 44.067 C 40.809 43.938 40.093 43.866 39.391 43.866 C 37.579 43.866 35.87 44.352 34.319 45.6 C 33.899 45.938 33.434 46.22 32.98 46.514 C 31.012 47.788 29.018 48.455 27.002 48.455 C 25.265 48.455 23.511 47.96 21.74 46.93 C 20.698 46.324 19.709 45.624 18.697 44.964 C 17.86 44.418 16.96 44.113 15.954 43.961 C 15.575 43.904 15.2 43.881 14.828 43.881 C 13.641 43.881 12.481 44.117 11.306 44.246 C 11.202 44.258 11.098 44.264 10.996 44.264 C 10.324 44.264 9.742 44 9.703 43.29 C 9.595 41.318 8.383 40.836 6.721 40.653 C 5.946 40.568 5.181 40.254 4.451 39.95 C 3.653 39.617 2.929 39.145 2.549 38.306 L 2.549 37.543 C 2.862 37.181 3.192 36.873 3.701 36.773 C 7.712 35.981 10.396 33.43 12.42 30.081 C 14.121 27.265 13.848 26.621 10.712 25.514 C 10.532 25.45 10.348 25.398 10.172 25.326 C 9.495 25.048 8.824 24.752 8.264 24.267 C 6.86 23.049 7.691 21.295 9.347 20.897 C 9.535 20.852 9.719 20.833 9.901 20.833 C 10.887 20.833 11.794 21.406 12.786 21.529 C 12.888 21.542 12.982 21.548 13.069 21.548 C 13.646 21.548 13.872 21.254 13.788 20.528 C 13.54 18.38 13.546 16.22 13.647 14.062 C 13.84 9.95 15.868 6.816 19.304 4.785 C 21.828 3.292 24.412 2.542 26.999 2.542 M 27.001 0 C 23.949 0 20.922 0.874 18.005 2.6 C 13.718 5.134 11.331 9.058 11.102 13.946 C 11.024 15.602 11.013 17.068 11.07 18.417 C 10.711 18.342 10.322 18.291 9.902 18.291 C 9.512 18.291 9.125 18.337 8.75 18.426 C 6.925 18.865 5.534 20.183 5.122 21.867 C 4.737 23.441 5.287 25.056 6.593 26.189 C 7.443 26.926 8.385 27.345 9.203 27.681 C 9.374 27.75 9.547 27.809 9.72 27.866 C 10.08 27.993 10.36 28.098 10.577 28.185 C 10.488 28.345 10.377 28.539 10.237 28.77 C 8.307 31.964 6.073 33.715 3.207 34.281 C 1.76 34.568 0.931 35.525 0.619 35.886 L 0 36.601 L 0 38.856 L 0.226 39.355 C 0.823 40.675 1.884 41.638 3.468 42.299 C 4.279 42.636 5.286 43.056 6.443 43.184 C 6.805 43.224 7.023 43.27 7.148 43.305 C 7.152 43.34 7.156 43.382 7.159 43.431 C 7.268 45.42 8.846 46.81 10.998 46.81 C 11.192 46.81 11.389 46.799 11.589 46.777 C 11.98 46.734 12.37 46.68 12.76 46.625 C 13.496 46.522 14.192 46.426 14.83 46.426 C 15.076 46.426 15.324 46.44 15.575 46.478 C 16.271 46.583 16.821 46.78 17.305 47.095 L 18.189 47.681 C 18.936 48.18 19.684 48.678 20.459 49.129 C 22.593 50.37 24.795 51 27.004 51 C 29.48 51 31.959 50.209 34.369 48.649 L 34.607 48.496 C 35.059 48.208 35.508 47.914 35.922 47.581 C 36.913 46.783 38.016 46.41 39.392 46.41 C 39.912 46.41 40.484 46.465 41.093 46.573 C 41.533 46.652 41.904 46.714 42.277 46.744 C 42.555 46.766 42.803 46.778 43.025 46.778 C 44.541 46.778 46.433 46.174 46.905 43.321 C 48.103 43.224 49.116 42.836 50.012 42.492 L 50.272 42.394 C 51.94 41.763 53.077 40.79 53.744 39.42 L 54 38.894 L 54 36.7 L 53.492 36.023 C 52.825 35.133 51.883 34.542 50.693 34.263 C 47.557 33.53 45.244 31.583 43.46 28.16 C 43.552 28.126 43.644 28.093 43.736 28.059 C 43.997 27.964 44.257 27.869 44.514 27.764 L 44.69 27.694 C 45.511 27.364 46.532 26.955 47.432 26.173 C 48.428 25.309 49.016 24.125 49.045 22.923 C 49.088 21.163 47.965 19.521 46.184 18.742 C 45.5 18.442 44.778 18.29 44.04 18.29 C 43.64 18.29 43.264 18.334 42.913 18.4 C 43 16.566 42.998 14.712 42.776 12.828 C 42.256 8.43 39.881 4.875 35.904 2.548 C 33.017 0.857 30.021 0 27.001 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-18wfctv`,
                                      layoutDependency: x,
                                      layoutId: `pwgVybNIy`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.601 30.609" overflow="visible"><path d="M 16.301 0.001 C 18.002 0.001 19.705 0.487 21.377 1.466 C 23.479 2.696 24.836 4.558 25.13 7.054 C 25.322 8.679 25.246 10.306 25.117 11.932 C 25.075 12.463 25.146 12.668 25.481 12.668 C 25.592 12.668 25.732 12.646 25.906 12.605 C 26.524 12.461 27.071 12.192 27.661 12.192 C 27.9 12.192 28.146 12.236 28.406 12.351 C 28.89 12.562 29.311 13.018 29.298 13.544 C 29.289 13.905 29.079 14.237 28.806 14.474 C 28.388 14.836 27.844 15.038 27.338 15.242 C 26.945 15.401 26.537 15.524 26.154 15.703 C 25.365 16.073 25.138 16.56 25.507 17.339 C 26.786 20.036 28.666 22.085 31.707 22.796 C 32.078 22.883 32.375 23.034 32.601 23.334 L 32.601 23.843 C 32.313 24.434 31.797 24.76 31.211 24.981 C 30.617 25.206 30.02 25.457 29.381 25.498 C 28.5 25.554 28.036 25.938 27.902 26.853 C 27.793 27.592 27.587 27.793 26.983 27.793 C 26.876 27.793 26.755 27.787 26.621 27.776 C 26.41 27.759 26.201 27.72 25.993 27.684 C 25.507 27.598 25.029 27.549 24.562 27.549 C 23.353 27.549 22.214 27.873 21.18 28.705 C 20.9 28.931 20.59 29.119 20.287 29.315 C 18.975 30.164 17.646 30.609 16.302 30.609 C 15.144 30.609 13.975 30.279 12.794 29.592 C 12.099 29.188 11.44 28.721 10.766 28.282 C 10.207 27.918 9.607 27.714 8.937 27.613 C 8.684 27.575 8.434 27.559 8.186 27.559 C 7.395 27.559 6.621 27.717 5.838 27.803 C 5.769 27.811 5.7 27.815 5.632 27.815 C 5.183 27.815 4.795 27.639 4.769 27.165 C 4.697 25.851 3.89 25.529 2.781 25.408 C 2.265 25.351 1.755 25.141 1.268 24.938 C 0.736 24.717 0.253 24.402 0 23.843 L 0 23.334 C 0.209 23.093 0.429 22.887 0.768 22.821 C 3.442 22.293 5.231 20.592 6.581 18.359 C 7.715 16.482 7.533 16.053 5.442 15.315 C 5.322 15.272 5.199 15.238 5.082 15.19 C 4.63 15.004 4.184 14.806 3.81 14.483 C 2.874 13.671 3.428 12.502 4.532 12.237 C 4.657 12.207 4.78 12.194 4.901 12.194 C 5.559 12.194 6.163 12.576 6.825 12.658 C 6.893 12.667 6.955 12.671 7.013 12.671 C 7.398 12.671 7.549 12.475 7.493 11.991 C 7.328 10.558 7.332 9.119 7.399 7.68 C 7.528 4.939 8.879 2.85 11.17 1.496 C 12.853 0.5 14.576 0 16.3 0" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "YEVPXvmtM-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48.901 45.913" overflow="visible"><path d="M 24.452 0.001 C 27.003 0.001 29.557 0.731 32.065 2.199 C 35.219 4.044 37.253 6.837 37.696 10.581 C 37.983 13.018 37.869 15.459 37.676 17.899 C 37.613 18.694 37.72 19.002 38.222 19.002 C 38.388 19.002 38.598 18.968 38.859 18.907 C 39.786 18.691 40.607 18.289 41.491 18.289 C 41.849 18.289 42.218 18.355 42.61 18.526 C 43.335 18.844 43.966 19.527 43.947 20.317 C 43.934 20.857 43.618 21.355 43.209 21.711 C 42.583 22.255 41.766 22.557 41.007 22.863 C 40.418 23.102 39.805 23.287 39.231 23.555 C 38.047 24.109 37.707 24.839 38.261 26.009 C 40.18 30.055 43 33.127 47.56 34.194 C 48.117 34.324 48.563 34.552 48.901 35.002 L 48.901 35.764 C 48.469 36.651 47.696 37.14 46.817 37.472 C 45.926 37.809 45.031 38.185 44.072 38.247 C 42.751 38.331 42.054 38.907 41.852 40.28 C 41.689 41.389 41.381 41.69 40.475 41.69 C 40.314 41.69 40.133 41.68 39.932 41.664 C 39.615 41.639 39.301 41.58 38.989 41.525 C 38.26 41.397 37.544 41.324 36.842 41.324 C 35.03 41.324 33.321 41.81 31.77 43.058 C 31.35 43.397 30.885 43.678 30.431 43.972 C 28.463 45.246 26.469 45.913 24.453 45.913 C 22.716 45.913 20.962 45.418 19.191 44.388 C 18.149 43.782 17.16 43.082 16.148 42.422 C 15.311 41.877 14.411 41.571 13.405 41.42 C 13.026 41.363 12.651 41.339 12.279 41.339 C 11.092 41.339 9.932 41.575 8.757 41.704 C 8.653 41.716 8.549 41.722 8.447 41.722 C 7.775 41.722 7.193 41.458 7.154 40.748 C 7.046 38.776 5.834 38.294 4.172 38.111 C 3.397 38.026 2.632 37.712 1.902 37.408 C 1.104 37.075 0.38 36.603 0 35.764 L 0 35.002 C 0.313 34.639 0.643 34.331 1.152 34.231 C 5.163 33.439 7.847 30.888 9.871 27.539 C 11.573 24.724 11.299 24.079 8.163 22.972 C 7.983 22.908 7.799 22.856 7.623 22.785 C 6.946 22.506 6.275 22.21 5.715 21.725 C 4.311 20.507 5.142 18.753 6.798 18.356 C 6.986 18.311 7.17 18.291 7.352 18.291 C 8.338 18.291 9.245 18.865 10.237 18.987 C 10.339 19 10.433 19.006 10.52 19.006 C 11.097 19.006 11.323 18.712 11.239 17.986 C 10.991 15.838 10.997 13.678 11.098 11.521 C 11.291 7.408 13.319 4.274 16.755 2.243 C 19.279 0.75 21.864 0 24.451 0" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-13qlb9t`,
                                      layoutDependency: x,
                                      layoutId: `iyo2rdNPi`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 34" overflow="visible"><path d="M 18 0 C 15.966 0 13.948 0.583 12.003 1.733 C 9.146 3.422 7.554 6.038 7.402 9.297 C 7.35 10.401 7.342 11.379 7.38 12.278 C 7.141 12.228 6.881 12.194 6.601 12.194 C 6.341 12.194 6.083 12.224 5.834 12.284 C 4.616 12.576 3.689 13.455 3.415 14.578 C 3.158 15.627 3.525 16.704 4.395 17.459 C 4.962 17.951 5.59 18.23 6.135 18.454 C 6.249 18.5 6.364 18.54 6.48 18.577 C 6.72 18.662 6.907 18.732 7.051 18.79 C 6.992 18.897 6.918 19.026 6.825 19.18 C 5.538 21.309 4.049 22.477 2.138 22.854 C 1.173 23.045 0.621 23.683 0.413 23.924 L 0 24.401 L 0 25.904 L 0.151 26.236 C 0.549 27.117 1.256 27.759 2.312 28.199 C 2.852 28.424 3.524 28.704 4.295 28.789 C 4.536 28.816 4.682 28.847 4.765 28.87 C 4.768 28.893 4.771 28.921 4.773 28.954 C 4.845 30.28 5.898 31.206 7.332 31.206 C 7.462 31.206 7.593 31.199 7.726 31.184 C 7.986 31.156 8.247 31.12 8.507 31.083 C 8.997 31.015 9.461 30.951 9.887 30.951 C 10.051 30.951 10.216 30.96 10.383 30.985 C 10.848 31.055 11.214 31.186 11.536 31.397 L 12.126 31.787 C 12.624 32.12 13.122 32.452 13.639 32.753 C 15.062 33.58 16.53 34 18.002 34 C 19.654 34 21.306 33.472 22.913 32.433 L 23.072 32.331 C 23.372 32.138 23.672 31.943 23.948 31.721 C 24.609 31.188 25.344 30.94 26.262 30.94 C 26.608 30.94 26.989 30.977 27.395 31.049 C 27.689 31.101 27.936 31.142 28.185 31.162 C 28.37 31.177 28.535 31.185 28.683 31.185 C 29.694 31.185 30.955 30.783 31.27 28.88 C 32.068 28.816 32.744 28.557 33.342 28.328 L 33.514 28.262 C 34.627 27.842 35.384 27.193 35.829 26.28 L 36 25.929 L 36 24.467 L 35.661 24.015 C 35.216 23.422 34.589 23.028 33.795 22.842 C 31.705 22.353 30.162 21.055 28.973 18.773 C 29.035 18.75 29.096 18.728 29.157 18.706 C 29.331 18.643 29.505 18.579 29.676 18.51 L 29.794 18.462 C 30.34 18.243 31.021 17.97 31.622 17.448 C 32.285 16.873 32.677 16.083 32.697 15.282 C 32.725 14.109 31.976 13.014 30.789 12.495 C 30.333 12.295 29.852 12.193 29.36 12.193 C 29.093 12.193 28.843 12.222 28.608 12.267 C 28.666 11.044 28.665 9.808 28.517 8.552 C 28.171 5.62 26.587 3.25 23.936 1.699 C 22.011 0.572 20.014 0 18 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "YEVPXvmtM-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 51" overflow="visible"><path d="M 27.001 0 C 23.949 0 20.922 0.874 18.005 2.6 C 13.718 5.134 11.331 9.058 11.102 13.946 C 11.024 15.602 11.013 17.068 11.07 18.417 C 10.711 18.342 10.322 18.291 9.902 18.291 C 9.512 18.291 9.125 18.337 8.75 18.426 C 6.925 18.865 5.534 20.183 5.122 21.867 C 4.737 23.441 5.287 25.056 6.593 26.189 C 7.443 26.926 8.385 27.345 9.203 27.681 C 9.374 27.75 9.547 27.809 9.72 27.866 C 10.08 27.993 10.36 28.098 10.577 28.185 C 10.488 28.345 10.377 28.539 10.237 28.77 C 8.307 31.964 6.073 33.715 3.207 34.281 C 1.76 34.568 0.931 35.525 0.619 35.886 L 0 36.601 L 0 38.856 L 0.226 39.355 C 0.823 40.675 1.884 41.638 3.468 42.299 C 4.279 42.636 5.286 43.056 6.443 43.184 C 6.805 43.224 7.023 43.27 7.148 43.305 C 7.152 43.34 7.156 43.382 7.159 43.431 C 7.268 45.42 8.846 46.81 10.998 46.81 C 11.192 46.81 11.389 46.799 11.589 46.777 C 11.98 46.734 12.37 46.68 12.76 46.625 C 13.496 46.522 14.192 46.426 14.83 46.426 C 15.076 46.426 15.324 46.44 15.575 46.478 C 16.271 46.583 16.821 46.78 17.305 47.095 L 18.189 47.681 C 18.936 48.18 19.684 48.678 20.459 49.129 C 22.593 50.37 24.795 51 27.004 51 C 29.48 51 31.959 50.209 34.369 48.649 L 34.607 48.496 C 35.059 48.208 35.508 47.914 35.922 47.581 C 36.913 46.783 38.016 46.41 39.392 46.41 C 39.912 46.41 40.484 46.465 41.093 46.573 C 41.533 46.652 41.904 46.714 42.277 46.744 C 42.555 46.766 42.803 46.778 43.025 46.778 C 44.541 46.778 46.433 46.174 46.905 43.321 C 48.103 43.224 49.116 42.836 50.012 42.492 L 50.272 42.394 C 51.94 41.763 53.077 40.79 53.744 39.42 L 54 38.894 L 54 36.7 L 53.492 36.023 C 52.825 35.133 51.883 34.542 50.693 34.263 C 47.557 33.53 45.244 31.583 43.46 28.16 C 43.552 28.126 43.644 28.093 43.736 28.059 C 43.997 27.964 44.257 27.869 44.514 27.764 L 44.69 27.694 C 45.511 27.364 46.532 26.955 47.432 26.173 C 48.428 25.309 49.016 24.125 49.045 22.923 C 49.088 21.163 47.965 19.521 46.184 18.742 C 45.5 18.442 44.778 18.29 44.04 18.29 C 43.64 18.29 43.264 18.334 42.913 18.4 C 43 16.566 42.998 14.712 42.776 12.828 C 42.256 8.43 39.881 4.875 35.904 2.548 C 33.017 0.857 30.021 0 27.001 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      Re() &&
                        l(S, {
                          className: `framer-zsixsk`,
                          "data-framer-name": `Spotify logo`,
                          layoutDependency: x,
                          layoutId: `iU2LyL7JQ`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 47" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "ANEINRPAV-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56.01 56.01" overflow="visible"><g><path d="M 47.799 8.201 C 36.864 -2.734 19.135 -2.734 8.201 8.201 C -2.734 19.136 -2.734 36.865 8.201 47.799 C 19.135 58.734 36.864 58.734 47.799 47.799 C 58.734 36.865 58.734 19.136 47.799 8.201 Z M 40.429 40.819 C 39.861 41.305 39.037 41.372 38.389 40.975 C 37.101 40.188 35.746 39.519 34.338 38.976 C 32.496 38.265 30.597 37.774 28.647 37.47 C 26.336 37.11 24.013 37.025 21.681 37.144 C 20.045 37.227 18.421 37.42 16.805 37.687 C 15.767 37.858 14.742 38.09 13.712 38.292 C 12.801 38.472 11.915 37.859 11.714 36.945 C 11.516 36.045 12.068 35.12 12.966 34.898 C 14.04 34.631 15.128 34.429 16.221 34.246 C 17.111 34.096 18.004 33.973 18.901 33.872 C 19.956 33.755 21.013 33.672 22.075 33.631 C 22.519 33.613 22.963 33.593 23.35 33.601 C 24.887 33.588 26.363 33.662 27.833 33.831 C 32.168 34.329 36.242 35.621 39.999 37.867 C 40.399 38.106 40.739 38.387 40.918 38.831 C 41.2 39.532 41.007 40.325 40.429 40.819 Z M 44.509 31.944 C 44.385 32.843 43.847 33.444 42.982 33.722 C 42.349 33.926 41.744 33.822 41.179 33.476 C 40.346 32.966 39.486 32.506 38.601 32.093 C 36.657 31.184 34.637 30.497 32.556 29.98 C 31.059 29.608 29.542 29.332 28.011 29.144 C 25.811 28.873 23.602 28.785 21.387 28.892 C 18.661 29.025 15.98 29.438 13.36 30.224 C 12.047 30.619 10.786 29.834 10.54 28.491 C 10.358 27.498 10.975 26.43 11.94 26.104 C 12.873 25.789 13.832 25.56 14.795 25.351 C 15.987 25.092 17.19 24.895 18.403 24.754 C 20.179 24.546 21.804 24.468 23.069 24.473 C 25.283 24.47 27.282 24.615 29.272 24.892 C 31.888 25.257 34.448 25.855 36.945 26.717 C 39.212 27.5 41.385 28.487 43.433 29.74 C 44.254 30.242 44.641 30.989 44.509 31.944 Z M 46.23 25.182 C 45.603 25.265 45.022 25.146 44.479 24.826 C 42.506 23.661 40.405 22.794 38.223 22.113 C 36.575 21.599 34.9 21.2 33.203 20.891 C 31.676 20.614 30.136 20.408 28.59 20.274 C 26.145 20.063 23.696 20.008 21.244 20.133 C 19.215 20.236 17.201 20.454 15.203 20.829 C 14.064 21.044 12.948 21.352 11.827 21.643 C 10.327 22.031 8.807 20.945 8.641 19.406 C 8.503 18.118 9.265 16.964 10.505 16.59 C 12.158 16.091 13.841 15.729 15.546 15.462 C 18.3 15.028 21.073 14.839 24.204 14.839 C 25.541 14.834 27.218 14.909 28.891 15.052 C 30.933 15.227 32.959 15.508 34.969 15.908 C 37.203 16.354 39.397 16.939 41.539 17.713 C 43.477 18.413 45.348 19.256 47.12 20.308 C 48.068 20.87 48.514 21.711 48.45 22.812 C 48.382 23.989 47.4 25.026 46.23 25.182 Z" transform="translate(0.005 0.005) rotate(16 28 28)" fill="rgb(0,219,77)"></path></g></svg>`,
                              },
                              ANEINRPAV: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 47" overflow="visible"><g><path d="M 40.117 6.883 C 30.94 -2.294 16.06 -2.294 6.883 6.883 C -2.294 16.06 -2.294 30.94 6.883 40.117 C 16.06 49.294 30.94 49.294 40.117 40.117 C 49.294 30.94 49.294 16.06 40.117 6.883 Z M 33.931 34.259 C 33.455 34.666 32.763 34.723 32.219 34.39 C 31.139 33.729 30.001 33.167 28.819 32.712 C 27.274 32.115 25.679 31.703 24.043 31.448 C 22.104 31.146 20.154 31.074 18.197 31.174 C 16.823 31.244 15.461 31.406 14.104 31.63 C 13.233 31.774 12.373 31.969 11.508 32.138 C 10.744 32.289 10 31.775 9.831 31.008 C 9.665 30.252 10.129 29.476 10.882 29.289 C 11.783 29.065 12.697 28.896 13.614 28.742 C 14.361 28.617 15.11 28.513 15.863 28.428 C 16.749 28.33 17.636 28.26 18.528 28.226 C 18.9 28.211 19.272 28.194 19.597 28.201 C 20.887 28.19 22.126 28.252 23.36 28.394 C 26.999 28.812 30.417 29.896 33.571 31.781 C 33.906 31.982 34.192 32.217 34.342 32.59 C 34.578 33.178 34.416 33.844 33.931 34.259 Z M 37.356 26.81 C 37.251 27.565 36.8 28.069 36.074 28.303 C 35.543 28.473 35.036 28.386 34.561 28.096 C 33.862 27.668 33.14 27.282 32.397 26.935 C 30.766 26.172 29.07 25.596 27.324 25.162 C 26.067 24.849 24.794 24.618 23.509 24.46 C 21.663 24.233 19.809 24.159 17.95 24.249 C 15.661 24.36 13.412 24.707 11.213 25.367 C 10.111 25.698 9.053 25.039 8.846 23.912 C 8.693 23.079 9.211 22.182 10.021 21.909 C 10.804 21.644 11.609 21.452 12.417 21.276 C 13.418 21.059 14.428 20.894 15.445 20.776 C 16.936 20.601 18.3 20.535 19.361 20.54 C 21.22 20.537 22.897 20.659 24.567 20.891 C 26.763 21.198 28.912 21.7 31.008 22.423 C 32.91 23.081 34.734 23.908 36.453 24.96 C 37.142 25.382 37.467 26.009 37.356 26.81 Z M 38.8 21.135 C 38.274 21.204 37.786 21.104 37.33 20.836 C 35.675 19.858 33.911 19.131 32.08 18.559 C 30.697 18.127 29.291 17.793 27.867 17.534 C 26.585 17.301 25.293 17.128 23.995 17.016 C 21.943 16.839 19.888 16.793 17.83 16.897 C 16.127 16.983 14.436 17.166 12.76 17.482 C 11.803 17.662 10.867 17.921 9.926 18.165 C 8.668 18.49 7.392 17.579 7.252 16.288 C 7.136 15.206 7.776 14.238 8.816 13.924 C 10.204 13.505 11.617 13.201 13.047 12.977 C 15.359 12.613 17.687 12.454 20.314 12.454 C 21.436 12.45 22.844 12.513 24.248 12.633 C 25.962 12.78 27.662 13.015 29.349 13.352 C 31.224 13.725 33.065 14.217 34.864 14.866 C 36.49 15.454 38.06 16.161 39.547 17.044 C 40.343 17.516 40.717 18.222 40.664 19.146 C 40.606 20.134 39.782 21.004 38.8 21.135 Z" fill="rgb(0,219,77)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            ze() &&
                            p(S, {
                              className: `framer-n5r22v`,
                              layoutDependency: x,
                              layoutId: `eyKLLKWjJ`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 47" overflow="visible"></svg>`,
                              variants: { "ANEINRPAV-hover": { rotate: 16 } },
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "ANEINRPAV-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" overflow="visible"><path d="M 47.799 8.201 C 36.864 -2.734 19.135 -2.734 8.201 8.201 C -2.734 19.136 -2.734 36.865 8.201 47.799 C 19.135 58.734 36.864 58.734 47.799 47.799 C 58.734 36.865 58.734 19.136 47.799 8.201 Z M 40.429 40.819 C 39.861 41.305 39.037 41.372 38.389 40.975 C 37.101 40.188 35.746 39.519 34.338 38.976 C 32.496 38.265 30.597 37.774 28.647 37.47 C 26.336 37.11 24.013 37.025 21.681 37.144 C 20.045 37.227 18.421 37.42 16.805 37.687 C 15.767 37.858 14.742 38.09 13.712 38.292 C 12.801 38.472 11.915 37.859 11.714 36.945 C 11.516 36.045 12.068 35.12 12.966 34.898 C 14.04 34.631 15.128 34.429 16.221 34.246 C 17.111 34.096 18.004 33.973 18.901 33.872 C 19.956 33.755 21.013 33.672 22.075 33.631 C 22.519 33.613 22.963 33.593 23.35 33.601 C 24.887 33.588 26.363 33.662 27.833 33.831 C 32.168 34.329 36.242 35.621 39.999 37.867 C 40.399 38.106 40.739 38.387 40.918 38.831 C 41.2 39.532 41.007 40.325 40.429 40.819 Z M 44.509 31.944 C 44.385 32.843 43.847 33.444 42.982 33.722 C 42.349 33.926 41.744 33.822 41.179 33.476 C 40.346 32.966 39.486 32.506 38.601 32.093 C 36.657 31.184 34.637 30.497 32.556 29.98 C 31.059 29.608 29.542 29.332 28.011 29.144 C 25.811 28.873 23.602 28.785 21.387 28.892 C 18.661 29.025 15.98 29.438 13.36 30.224 C 12.047 30.619 10.786 29.834 10.54 28.491 C 10.358 27.498 10.975 26.43 11.94 26.104 C 12.873 25.789 13.832 25.56 14.795 25.351 C 15.987 25.092 17.19 24.895 18.403 24.754 C 20.179 24.546 21.804 24.468 23.069 24.473 C 25.283 24.47 27.282 24.615 29.272 24.892 C 31.888 25.257 34.448 25.855 36.945 26.717 C 39.212 27.5 41.385 28.487 43.433 29.74 C 44.254 30.242 44.641 30.989 44.509 31.944 Z M 46.23 25.182 C 45.603 25.265 45.022 25.146 44.479 24.826 C 42.506 23.661 40.405 22.794 38.223 22.113 C 36.575 21.599 34.9 21.2 33.203 20.891 C 31.676 20.614 30.136 20.408 28.59 20.274 C 26.145 20.063 23.696 20.008 21.244 20.133 C 19.215 20.236 17.201 20.454 15.203 20.829 C 14.064 21.044 12.948 21.352 11.827 21.643 C 10.327 22.031 8.807 20.945 8.641 19.406 C 8.503 18.118 9.265 16.964 10.505 16.59 C 12.158 16.091 13.841 15.729 15.546 15.462 C 18.3 15.028 21.073 14.839 24.204 14.839 C 25.541 14.834 27.218 14.909 28.891 15.052 C 30.933 15.227 32.959 15.508 34.969 15.908 C 37.203 16.354 39.397 16.939 41.539 17.713 C 43.477 18.413 45.348 19.256 47.12 20.308 C 48.068 20.87 48.514 21.711 48.45 22.812 C 48.382 23.989 47.4 25.026 46.23 25.182 Z" fill="rgb(0,219,77)"></path></svg>`,
                                  },
                                  ANEINRPAV: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 47" overflow="visible"><path d="M 40.117 6.883 C 30.94 -2.294 16.06 -2.294 6.883 6.883 C -2.294 16.06 -2.294 30.94 6.883 40.117 C 16.06 49.294 30.94 49.294 40.117 40.117 C 49.294 30.94 49.294 16.06 40.117 6.883 Z M 33.931 34.259 C 33.455 34.666 32.763 34.723 32.219 34.39 C 31.139 33.729 30.001 33.167 28.819 32.712 C 27.274 32.115 25.679 31.703 24.043 31.448 C 22.104 31.146 20.154 31.074 18.197 31.174 C 16.823 31.244 15.461 31.406 14.104 31.63 C 13.233 31.774 12.373 31.969 11.508 32.138 C 10.744 32.289 10 31.775 9.831 31.008 C 9.665 30.252 10.129 29.476 10.882 29.289 C 11.783 29.065 12.697 28.896 13.614 28.742 C 14.361 28.617 15.11 28.513 15.863 28.428 C 16.749 28.33 17.636 28.26 18.528 28.226 C 18.9 28.211 19.272 28.194 19.597 28.201 C 20.887 28.19 22.126 28.252 23.36 28.394 C 26.999 28.812 30.417 29.896 33.571 31.781 C 33.906 31.982 34.192 32.217 34.342 32.59 C 34.578 33.178 34.416 33.844 33.931 34.259 Z M 37.356 26.81 C 37.251 27.565 36.8 28.069 36.074 28.303 C 35.543 28.473 35.036 28.386 34.561 28.096 C 33.862 27.668 33.14 27.282 32.397 26.935 C 30.766 26.172 29.07 25.596 27.324 25.162 C 26.067 24.849 24.794 24.618 23.509 24.46 C 21.663 24.233 19.809 24.159 17.95 24.249 C 15.661 24.36 13.412 24.707 11.213 25.367 C 10.111 25.698 9.053 25.039 8.846 23.912 C 8.693 23.079 9.211 22.182 10.021 21.909 C 10.804 21.644 11.609 21.452 12.417 21.276 C 13.418 21.059 14.428 20.894 15.445 20.776 C 16.936 20.601 18.3 20.535 19.361 20.54 C 21.22 20.537 22.897 20.659 24.567 20.891 C 26.763 21.198 28.912 21.7 31.008 22.423 C 32.91 23.081 34.734 23.908 36.453 24.96 C 37.142 25.382 37.467 26.009 37.356 26.81 Z M 38.8 21.135 C 38.274 21.204 37.786 21.104 37.33 20.836 C 35.675 19.858 33.911 19.131 32.08 18.559 C 30.697 18.127 29.291 17.793 27.867 17.534 C 26.585 17.301 25.293 17.128 23.995 17.016 C 21.943 16.839 19.888 16.793 17.83 16.897 C 16.127 16.983 14.436 17.166 12.76 17.482 C 11.803 17.662 10.867 17.921 9.926 18.165 C 8.668 18.49 7.392 17.579 7.252 16.288 C 7.136 15.206 7.776 14.238 8.816 13.924 C 10.204 13.505 11.617 13.201 13.047 12.977 C 15.359 12.613 17.687 12.454 20.314 12.454 C 21.436 12.45 22.844 12.513 24.248 12.633 C 25.962 12.78 27.662 13.015 29.349 13.352 C 31.224 13.725 33.065 14.217 34.864 14.866 C 36.49 15.454 38.06 16.161 39.547 17.044 C 40.343 17.516 40.717 18.222 40.664 19.146 C 40.606 20.134 39.782 21.004 38.8 21.135 Z" fill="rgb(0,219,77)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1clkh6b`,
                                  layoutDependency: x,
                                  layoutId: `X6eG_9nAh`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 47" overflow="visible"><path d="M 40.117 6.883 C 30.94 -2.294 16.06 -2.294 6.883 6.883 C -2.294 16.06 -2.294 30.94 6.883 40.117 C 16.06 49.294 30.94 49.294 40.117 40.117 C 49.294 30.94 49.294 16.06 40.117 6.883 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ANEINRPAV-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" overflow="visible"><path d="M 47.799 8.201 C 36.864 -2.734 19.135 -2.734 8.201 8.201 C -2.734 19.136 -2.734 36.865 8.201 47.799 C 19.135 58.734 36.864 58.734 47.799 47.799 C 58.734 36.865 58.734 19.136 47.799 8.201 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-147cias`,
                                  layoutDependency: x,
                                  layoutId: `I5w75fqtn`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.652 6.407" overflow="visible"><path d="M 24.134 6.059 C 23.657 6.467 22.966 6.523 22.422 6.19 C 21.341 5.529 20.203 4.968 19.022 4.512 C 17.476 3.915 15.882 3.503 14.246 3.248 C 12.306 2.947 10.356 2.875 8.399 2.975 C 7.026 3.044 5.663 3.206 4.307 3.43 C 3.436 3.574 2.576 3.769 1.711 3.939 C 0.947 4.089 0.203 3.575 0.034 2.808 C -0.132 2.052 0.331 1.277 1.085 1.09 C 1.986 0.866 2.9 0.696 3.816 0.543 C 4.564 0.417 5.313 0.313 6.066 0.229 C 6.951 0.13 7.839 0.061 8.73 0.026 C 9.102 0.012 9.475 -0.005 9.8 0.002 C 11.09 -0.01 12.329 0.053 13.562 0.195 C 17.201 0.612 20.62 1.697 23.773 3.581 C 24.109 3.782 24.394 4.018 24.545 4.391 C 24.781 4.979 24.619 5.645 24.134 6.059 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ANEINRPAV-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.372 7.634" overflow="visible"><path d="M 28.755 7.219 C 28.187 7.705 27.364 7.773 26.715 7.376 C 25.428 6.588 24.072 5.919 22.664 5.376 C 20.823 4.665 18.923 4.174 16.974 3.87 C 14.663 3.511 12.339 3.425 10.008 3.544 C 8.371 3.627 6.748 3.82 5.132 4.087 C 4.094 4.259 3.069 4.491 2.038 4.693 C 1.128 4.872 0.241 4.26 0.04 3.346 C -0.158 2.445 0.395 1.521 1.292 1.298 C 2.366 1.032 3.455 0.829 4.547 0.646 C 5.438 0.497 6.33 0.373 7.227 0.272 C 8.283 0.155 9.34 0.072 10.402 0.031 C 10.845 0.014 11.289 -0.006 11.676 0.002 C 13.214 -0.012 14.689 0.063 16.159 0.232 C 20.495 0.73 24.568 2.021 28.326 4.267 C 28.726 4.506 29.065 4.787 29.245 5.231 C 29.526 5.932 29.333 6.725 28.755 7.219 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-izcbu0`,
                                  layoutDependency: x,
                                  layoutId: `PGU75WBlm`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.558 7.85" overflow="visible"><path d="M 28.537 6.27 C 28.432 7.025 27.981 7.529 27.255 7.763 C 26.724 7.933 26.216 7.847 25.742 7.556 C 25.043 7.128 24.321 6.742 23.578 6.395 C 21.947 5.632 20.251 5.056 18.505 4.622 C 17.248 4.309 15.975 4.078 14.69 3.92 C 12.843 3.693 10.989 3.619 9.131 3.709 C 6.842 3.82 4.592 4.167 2.394 4.827 C 1.292 5.158 0.234 4.499 0.027 3.372 C -0.126 2.539 0.392 1.643 1.202 1.369 C 1.985 1.105 2.79 0.912 3.598 0.737 C 4.599 0.519 5.608 0.354 6.626 0.236 C 8.116 0.061 9.48 -0.004 10.542 0 C 12.401 -0.003 14.078 0.119 15.748 0.351 C 17.944 0.658 20.093 1.16 22.188 1.884 C 24.091 2.541 25.915 3.368 27.634 4.42 C 28.323 4.842 28.648 5.469 28.537 6.27 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ANEINRPAV-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.027 9.353" overflow="visible"><path d="M 34.001 7.471 C 33.877 8.37 33.339 8.971 32.474 9.249 C 31.841 9.453 31.236 9.349 30.671 9.003 C 29.838 8.493 28.978 8.033 28.093 7.62 C 26.149 6.711 24.129 6.024 22.048 5.507 C 20.55 5.135 19.034 4.859 17.503 4.671 C 15.303 4.4 13.094 4.312 10.879 4.419 C 8.152 4.552 5.472 4.965 2.852 5.751 C 1.539 6.146 0.278 5.361 0.032 4.018 C -0.15 3.025 0.467 1.957 1.432 1.631 C 2.365 1.316 3.324 1.087 4.287 0.878 C 5.479 0.619 6.682 0.422 7.895 0.281 C 9.671 0.073 11.296 -0.005 12.561 0 C 14.775 -0.003 16.774 0.142 18.764 0.419 C 21.38 0.784 23.94 1.382 26.437 2.244 C 28.704 3.027 30.877 4.014 32.925 5.267 C 33.746 5.769 34.133 6.516 34.001 7.471 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1mmgcst`,
                                  layoutDependency: x,
                                  layoutId: `QZ2xFI1RM`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.43 8.702" overflow="visible"><path d="M 31.561 8.681 C 31.035 8.75 30.547 8.65 30.092 8.382 C 28.436 7.404 26.672 6.677 24.841 6.105 C 23.458 5.673 22.052 5.339 20.628 5.08 C 19.346 4.847 18.054 4.674 16.756 4.562 C 14.704 4.385 12.649 4.339 10.591 4.443 C 8.888 4.529 7.197 4.712 5.521 5.028 C 4.565 5.208 3.628 5.466 2.687 5.711 C 1.429 6.036 0.153 5.125 0.014 3.834 C -0.103 2.752 0.537 1.784 1.578 1.47 C 2.965 1.051 4.378 0.747 5.808 0.523 C 8.12 0.159 10.448 0 13.075 0 C 14.197 -0.004 15.605 0.059 17.009 0.179 C 18.723 0.326 20.423 0.561 22.11 0.898 C 23.985 1.271 25.827 1.763 27.625 2.412 C 29.251 3 30.821 3.707 32.308 4.59 C 33.104 5.062 33.478 5.768 33.425 6.692 C 33.368 7.68 32.543 8.55 31.561 8.681 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "ANEINRPAV-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.831 10.368" overflow="visible"><path d="M 37.605 10.343 C 36.978 10.426 36.397 10.307 35.854 9.987 C 33.881 8.822 31.78 7.956 29.597 7.274 C 27.95 6.76 26.275 6.361 24.578 6.052 C 23.051 5.775 21.511 5.569 19.965 5.436 C 17.52 5.224 15.071 5.17 12.619 5.294 C 10.59 5.397 8.575 5.615 6.578 5.991 C 5.439 6.205 4.323 6.513 3.202 6.804 C 1.702 7.192 0.182 6.106 0.016 4.568 C -0.122 3.279 0.639 2.125 1.88 1.751 C 3.533 1.252 5.216 0.89 6.921 0.623 C 9.675 0.19 12.448 0 15.579 0 C 16.916 -0.005 18.593 0.07 20.266 0.214 C 22.308 0.388 24.334 0.669 26.344 1.07 C 28.578 1.515 30.772 2.1 32.914 2.874 C 34.852 3.574 36.723 4.417 38.495 5.469 C 39.443 6.031 39.889 6.872 39.825 7.973 C 39.757 9.151 38.775 10.187 37.605 10.343 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      Be() &&
                        l(S, {
                          className: `framer-10ktlp0`,
                          "data-framer-name": `Telegram logo`,
                          layoutDependency: x,
                          layoutId: `WBzfsE8pp`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "rD9hl94fu-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 62.015 62.015" overflow="visible"><g><path d="M 31 0 C 13.879 0 0 13.879 0 31 C 0 48.122 13.879 62 31 62 C 48.12 62 62 48.121 62 31 C 62 13.88 48.121 0 31 0 Z M 44.905 19.532 C 44.811 20.851 44.057 25.468 43.304 30.461 C 42.174 37.528 40.948 45.254 40.948 45.254 C 40.948 45.254 40.76 47.422 39.158 47.798 C 37.557 48.176 34.918 46.479 34.447 46.102 C 34.07 45.82 27.38 41.58 24.93 39.507 C 24.27 38.942 23.517 37.812 25.024 36.492 C 28.416 33.382 32.467 29.519 34.917 27.069 C 36.047 25.939 37.179 23.301 32.467 26.504 C 25.778 31.121 19.183 35.455 19.183 35.455 C 19.183 35.455 17.675 36.397 14.848 35.549 C 12.021 34.701 8.724 33.571 8.724 33.571 C 8.724 33.571 6.463 32.158 10.326 30.649 C 10.326 30.649 26.626 23.96 32.279 21.604 C 34.446 20.662 41.795 17.647 41.795 17.647 C 41.795 17.647 45.186 16.328 44.904 19.531 Z" transform="translate(0.008 0.008) rotate(15 31 31)" fill="rgb(255, 255, 255)"></path></g></svg>`,
                              },
                              rD9hl94fu: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" overflow="visible"><g><path d="M 27 0 C 12.088 0 0 12.088 0 27 C 0 41.913 12.088 54 27 54 C 41.911 54 54 41.912 54 27 C 54 12.089 41.912 0 27 0 Z M 39.111 17.012 C 39.029 18.16 38.372 22.181 37.716 26.531 C 36.732 32.686 35.665 39.415 35.665 39.415 C 35.665 39.415 35.5 41.303 34.105 41.63 C 32.711 41.959 30.413 40.482 30.002 40.154 C 29.674 39.908 23.847 36.215 21.713 34.409 C 21.139 33.917 20.483 32.933 21.795 31.783 C 24.75 29.075 28.278 25.71 30.412 23.576 C 31.396 22.592 32.382 20.294 28.278 23.084 C 22.452 27.105 16.707 30.88 16.707 30.88 C 16.707 30.88 15.394 31.7 12.932 30.962 C 10.47 30.223 7.598 29.239 7.598 29.239 C 7.598 29.239 5.629 28.008 8.993 26.694 C 8.993 26.694 23.19 20.868 28.114 18.817 C 30.001 17.996 36.402 15.37 36.402 15.37 C 36.402 15.37 39.356 14.221 39.11 17.011 Z" fill="rgb(38, 166, 227)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ve() &&
                            p(S, {
                              className: `framer-89veya`,
                              layoutDependency: x,
                              layoutId: `V_fu0IpyC`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" overflow="visible"></svg>`,
                              variants: { "rD9hl94fu-hover": { rotate: 15 } },
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "rD9hl94fu-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 62 62" overflow="visible"><path d="M 31 0 C 13.879 0 0 13.879 0 31 C 0 48.122 13.879 62 31 62 C 48.12 62 62 48.121 62 31 C 62 13.88 48.121 0 31 0 Z M 44.905 19.532 C 44.811 20.851 44.057 25.468 43.304 30.461 C 42.174 37.528 40.948 45.254 40.948 45.254 C 40.948 45.254 40.76 47.422 39.158 47.798 C 37.557 48.176 34.918 46.479 34.447 46.102 C 34.07 45.82 27.38 41.58 24.93 39.507 C 24.27 38.942 23.517 37.812 25.024 36.492 C 28.416 33.382 32.467 29.519 34.917 27.069 C 36.047 25.939 37.179 23.301 32.467 26.504 C 25.778 31.121 19.183 35.455 19.183 35.455 C 19.183 35.455 17.675 36.397 14.848 35.549 C 12.021 34.701 8.724 33.571 8.724 33.571 C 8.724 33.571 6.463 32.158 10.326 30.649 C 10.326 30.649 26.626 23.96 32.279 21.604 C 34.446 20.662 41.795 17.647 41.795 17.647 C 41.795 17.647 45.186 16.328 44.904 19.531 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  },
                                  rD9hl94fu: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" overflow="visible"><path d="M 27 0 C 12.088 0 0 12.088 0 27 C 0 41.913 12.088 54 27 54 C 41.911 54 54 41.912 54 27 C 54 12.089 41.912 0 27 0 Z M 39.111 17.012 C 39.029 18.16 38.372 22.181 37.716 26.531 C 36.732 32.686 35.665 39.415 35.665 39.415 C 35.665 39.415 35.5 41.303 34.105 41.63 C 32.711 41.959 30.413 40.482 30.002 40.154 C 29.674 39.908 23.847 36.215 21.713 34.409 C 21.139 33.917 20.483 32.933 21.795 31.783 C 24.75 29.075 28.278 25.71 30.412 23.576 C 31.396 22.592 32.382 20.294 28.278 23.084 C 22.452 27.105 16.707 30.88 16.707 30.88 C 16.707 30.88 15.394 31.7 12.932 30.962 C 10.47 30.223 7.598 29.239 7.598 29.239 C 7.598 29.239 5.629 28.008 8.993 26.694 C 8.993 26.694 23.19 20.868 28.114 18.817 C 30.001 17.996 36.402 15.37 36.402 15.37 C 36.402 15.37 39.356 14.221 39.11 17.011 Z" fill="rgb(38, 166, 227)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-sflrqg`,
                                  layoutDependency: x,
                                  layoutId: `LLsnxuNKq`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" overflow="visible"><path d="M 27 0 C 12.088 0 0 12.088 0 27 C 0 41.913 12.088 54 27 54 C 41.911 54 54 41.912 54 27 C 54 12.089 41.912 0 27 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "rD9hl94fu-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 62 62" overflow="visible"><path d="M 31 0 C 13.879 0 0 13.879 0 31 C 0 48.122 13.879 62 31 62 C 48.12 62 62 48.121 62 31 C 62 13.88 48.121 0 31 0 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-3wjvr8`,
                                  layoutDependency: x,
                                  layoutId: `Xb8KjvZgg`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.099 26.542" overflow="visible"><path d="M 32.085 1.876 C 32.004 3.025 31.346 7.046 30.69 11.395 C 29.706 17.551 28.639 24.279 28.639 24.279 C 28.639 24.279 28.475 26.167 27.08 26.495 C 25.685 26.824 23.387 25.346 22.976 25.018 C 22.648 24.772 16.822 21.079 14.688 19.274 C 14.113 18.781 13.457 17.797 14.77 16.647 C 17.724 13.939 21.252 10.575 23.386 8.441 C 24.37 7.457 25.356 5.159 21.252 7.948 C 15.426 11.97 9.682 15.744 9.682 15.744 C 9.682 15.744 8.369 16.565 5.906 15.827 C 3.444 15.088 0.573 14.103 0.573 14.103 C 0.573 14.103 -1.396 12.873 1.968 11.559 C 1.968 11.559 16.164 5.733 21.088 3.681 C 22.975 2.86 29.376 0.234 29.376 0.234 C 29.376 0.234 32.33 -0.914 32.085 1.876 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "rD9hl94fu-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36.854 30.474" overflow="visible"><path d="M 36.839 2.154 C 36.745 3.473 35.99 8.09 35.237 13.084 C 34.107 20.151 32.882 27.876 32.882 27.876 C 32.882 27.876 32.693 30.044 31.092 30.42 C 29.49 30.798 26.852 29.101 26.38 28.724 C 26.003 28.442 19.314 24.202 16.864 22.129 C 16.204 21.564 15.451 20.434 16.958 19.114 C 20.35 16.004 24.401 12.141 26.851 9.691 C 27.981 8.561 29.112 5.923 24.401 9.126 C 17.712 13.743 11.116 18.077 11.116 18.077 C 11.116 18.077 9.608 19.019 6.781 18.171 C 3.954 17.323 0.658 16.193 0.658 16.193 C 0.658 16.193 -1.603 14.78 2.259 13.271 C 2.259 13.271 18.559 6.582 24.212 4.227 C 26.379 3.284 33.729 0.269 33.729 0.269 C 33.729 0.269 37.12 -1.05 36.838 2.153 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      He() &&
                        l(S, {
                          className: `framer-1ee250v`,
                          "data-framer-name": `Threads logo`,
                          layoutDependency: x,
                          layoutId: `NtgqjoVV9`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 35" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "A2ihFZb7x-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 45" overflow="visible"><g><path d="M 29.738 20.593 C 29.946 20.677 30.135 20.771 30.333 20.855 C 33.089 22.177 35.11 24.155 36.167 26.61 C 37.649 30.032 37.791 35.589 33.307 40.032 C 29.889 43.425 25.726 44.953 19.844 45 L 19.816 45 C 13.188 44.953 8.1 42.741 4.673 38.42 C 1.624 34.578 0.057 29.226 0 22.524 L 0 22.477 C 0.047 15.775 1.614 10.423 4.663 6.58 C 8.091 2.259 13.188 0.047 19.816 0 L 19.844 0 C 26.481 0.047 31.636 2.25 35.167 6.552 C 36.904 8.68 38.188 11.239 39 14.21 L 35.186 15.223 C 34.515 12.805 33.505 10.742 32.145 9.092 C 29.389 5.736 25.254 4.013 19.826 3.975 C 14.445 4.021 10.376 5.736 7.723 9.074 C 5.25 12.195 3.966 16.713 3.919 22.496 C 3.966 28.279 5.25 32.797 7.723 35.928 C 10.366 39.264 14.445 40.98 19.826 41.027 C 24.678 40.99 27.888 39.846 30.56 37.193 C 33.609 34.175 33.553 30.464 32.58 28.204 C 32.004 26.873 30.965 25.767 29.568 24.933 C 29.219 27.455 28.454 29.461 27.236 31.007 C 25.622 33.051 23.328 34.156 20.373 34.316 C 18.145 34.438 16.002 33.904 14.341 32.817 C 12.378 31.523 11.225 29.554 11.103 27.259 C 10.867 22.731 14.473 19.478 20.091 19.16 C 22.083 19.048 23.952 19.132 25.68 19.423 C 25.453 18.036 24.991 16.929 24.301 16.123 C 23.357 15.027 21.884 14.464 19.94 14.455 L 19.874 14.455 C 18.307 14.455 16.192 14.886 14.842 16.92 L 11.594 14.709 C 13.407 11.981 16.343 10.481 19.884 10.481 L 19.959 10.481 C 25.869 10.519 29.39 14.184 29.749 20.577 L 29.73 20.595 L 29.74 20.595 Z M 15.01 27.042 C 15.133 29.395 17.692 30.492 20.165 30.351 C 22.582 30.22 25.319 29.283 25.782 23.49 C 24.536 23.218 23.158 23.077 21.685 23.077 C 21.232 23.077 20.779 23.087 20.325 23.115 C 16.275 23.34 14.925 25.289 15.019 27.033 L 15.009 27.042 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                              },
                              A2ihFZb7x: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 35" overflow="visible"><g><path d="M 22.875 16.017 C 23.035 16.082 23.181 16.155 23.333 16.221 C 25.453 17.249 27.008 18.787 27.821 20.697 C 28.961 23.358 29.07 27.681 25.621 31.136 C 22.992 33.775 19.789 34.964 15.265 35 L 15.243 35 C 10.145 34.964 6.231 33.243 3.595 29.882 C 1.249 26.894 0.044 22.731 0 17.519 L 0 17.482 C 0.036 12.27 1.242 8.107 3.587 5.118 C 6.224 1.757 10.145 0.036 15.243 0 L 15.265 0 C 20.37 0.036 24.335 1.75 27.051 5.096 C 28.388 6.751 29.376 8.741 30 11.052 L 27.066 11.84 C 26.55 9.959 25.773 8.355 24.727 7.072 C 22.607 4.462 19.426 3.121 15.251 3.091 C 11.112 3.128 7.982 4.462 5.941 7.057 C 4.038 9.485 3.051 12.999 3.014 17.497 C 3.051 21.995 4.038 25.509 5.941 27.944 C 7.974 30.539 11.112 31.874 15.251 31.91 C 18.983 31.881 21.452 30.991 23.507 28.928 C 25.853 26.58 25.81 23.694 25.061 21.937 C 24.618 20.902 23.82 20.041 22.745 19.392 C 22.476 21.354 21.888 22.914 20.951 24.117 C 19.709 25.706 17.944 26.566 15.672 26.69 C 13.958 26.785 12.31 26.369 11.031 25.524 C 9.521 24.518 8.635 22.987 8.541 21.201 C 8.359 17.68 11.133 15.15 15.455 14.903 C 16.987 14.815 18.425 14.881 19.754 15.107 C 19.579 14.028 19.224 13.167 18.693 12.54 C 17.967 11.688 16.834 11.25 15.338 11.243 L 15.288 11.243 C 14.082 11.243 12.455 11.578 11.417 13.16 L 8.919 11.44 C 10.313 9.319 12.572 8.152 15.295 8.152 L 15.353 8.152 C 19.9 8.181 22.608 11.032 22.884 16.004 L 22.869 16.019 L 22.877 16.019 Z M 11.546 21.033 C 11.641 22.863 13.609 23.716 15.511 23.607 C 17.371 23.504 19.477 22.776 19.833 18.27 C 18.874 18.058 17.814 17.949 16.681 17.949 C 16.332 17.949 15.984 17.957 15.635 17.978 C 12.519 18.153 11.481 19.669 11.553 21.025 L 11.546 21.033 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ue() &&
                            p(S, {
                              className: `framer-1dr7cfv`,
                              layoutDependency: x,
                              layoutId: `OtGtleanC`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 35" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "A2ihFZb7x-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 45" overflow="visible"><path d="M 29.738 20.593 C 29.946 20.677 30.135 20.771 30.333 20.855 C 33.089 22.177 35.11 24.155 36.167 26.61 C 37.649 30.032 37.791 35.589 33.307 40.032 C 29.889 43.425 25.726 44.953 19.844 45 L 19.816 45 C 13.188 44.953 8.1 42.741 4.673 38.42 C 1.624 34.578 0.057 29.226 0 22.524 L 0 22.477 C 0.047 15.775 1.614 10.423 4.663 6.58 C 8.091 2.259 13.188 0.047 19.816 0 L 19.844 0 C 26.481 0.047 31.636 2.25 35.167 6.552 C 36.904 8.68 38.188 11.239 39 14.21 L 35.186 15.223 C 34.515 12.805 33.505 10.742 32.145 9.092 C 29.389 5.736 25.254 4.013 19.826 3.975 C 14.445 4.021 10.376 5.736 7.723 9.074 C 5.25 12.195 3.966 16.713 3.919 22.496 C 3.966 28.279 5.25 32.797 7.723 35.928 C 10.366 39.264 14.445 40.98 19.826 41.027 C 24.678 40.99 27.888 39.846 30.56 37.193 C 33.609 34.175 33.553 30.464 32.58 28.204 C 32.004 26.873 30.965 25.767 29.568 24.933 C 29.219 27.455 28.454 29.461 27.236 31.007 C 25.622 33.051 23.328 34.156 20.373 34.316 C 18.145 34.438 16.002 33.904 14.341 32.817 C 12.378 31.523 11.225 29.554 11.103 27.259 C 10.867 22.731 14.473 19.478 20.091 19.16 C 22.083 19.048 23.952 19.132 25.68 19.423 C 25.453 18.036 24.991 16.929 24.301 16.123 C 23.357 15.027 21.884 14.464 19.94 14.455 L 19.874 14.455 C 18.307 14.455 16.192 14.886 14.842 16.92 L 11.594 14.709 C 13.407 11.981 16.343 10.481 19.884 10.481 L 19.959 10.481 C 25.869 10.519 29.39 14.184 29.749 20.577 L 29.73 20.595 L 29.74 20.595 Z M 15.01 27.042 C 15.133 29.395 17.692 30.492 20.165 30.351 C 22.582 30.22 25.319 29.283 25.782 23.49 C 24.536 23.218 23.158 23.077 21.685 23.077 C 21.232 23.077 20.779 23.087 20.325 23.115 C 16.275 23.34 14.925 25.289 15.019 27.033 L 15.009 27.042 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                  },
                                  A2ihFZb7x: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 35" overflow="visible"><path d="M 22.875 16.017 C 23.035 16.082 23.181 16.155 23.333 16.221 C 25.453 17.249 27.008 18.787 27.821 20.697 C 28.961 23.358 29.07 27.681 25.621 31.136 C 22.992 33.775 19.789 34.964 15.265 35 L 15.243 35 C 10.145 34.964 6.231 33.243 3.595 29.882 C 1.249 26.894 0.044 22.731 0 17.519 L 0 17.482 C 0.036 12.27 1.242 8.107 3.587 5.118 C 6.224 1.757 10.145 0.036 15.243 0 L 15.265 0 C 20.37 0.036 24.335 1.75 27.051 5.096 C 28.388 6.751 29.376 8.741 30 11.052 L 27.066 11.84 C 26.55 9.959 25.773 8.355 24.727 7.072 C 22.607 4.462 19.426 3.121 15.251 3.091 C 11.112 3.128 7.982 4.462 5.941 7.057 C 4.038 9.485 3.051 12.999 3.014 17.497 C 3.051 21.995 4.038 25.509 5.941 27.944 C 7.974 30.539 11.112 31.874 15.251 31.91 C 18.983 31.881 21.452 30.991 23.507 28.928 C 25.853 26.58 25.81 23.694 25.061 21.937 C 24.618 20.902 23.82 20.041 22.745 19.392 C 22.476 21.354 21.888 22.914 20.951 24.117 C 19.709 25.706 17.944 26.566 15.672 26.69 C 13.958 26.785 12.31 26.369 11.031 25.524 C 9.521 24.518 8.635 22.987 8.541 21.201 C 8.359 17.68 11.133 15.15 15.455 14.903 C 16.987 14.815 18.425 14.881 19.754 15.107 C 19.579 14.028 19.224 13.167 18.693 12.54 C 17.967 11.688 16.834 11.25 15.338 11.243 L 15.288 11.243 C 14.082 11.243 12.455 11.578 11.417 13.16 L 8.919 11.44 C 10.313 9.319 12.572 8.152 15.295 8.152 L 15.353 8.152 C 19.9 8.181 22.608 11.032 22.884 16.004 L 22.869 16.019 L 22.877 16.019 Z M 11.546 21.033 C 11.641 22.863 13.609 23.716 15.511 23.607 C 17.371 23.504 19.477 22.776 19.833 18.27 C 18.874 18.058 17.814 17.949 16.681 17.949 C 16.332 17.949 15.984 17.957 15.635 17.978 C 12.519 18.153 11.481 19.669 11.553 21.025 L 11.546 21.033 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-ykldqq`,
                                  layoutDependency: x,
                                  layoutId: `jUyseUZtD`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 35" overflow="visible"><path d="M 22.875 16.017 C 23.035 16.082 23.181 16.155 23.333 16.221 C 25.453 17.249 27.008 18.787 27.821 20.697 C 28.961 23.358 29.07 27.681 25.621 31.136 C 22.992 33.775 19.789 34.964 15.265 35 L 15.243 35 C 10.145 34.964 6.231 33.243 3.595 29.882 C 1.249 26.894 0.044 22.731 0 17.519 L 0 17.482 C 0.036 12.27 1.242 8.107 3.587 5.118 C 6.224 1.757 10.145 0.036 15.243 0 L 15.265 0 C 20.37 0.036 24.335 1.75 27.051 5.096 C 28.388 6.751 29.376 8.741 30 11.052 L 27.066 11.84 C 26.55 9.959 25.773 8.355 24.727 7.072 C 22.607 4.462 19.426 3.121 15.251 3.091 C 11.112 3.128 7.982 4.462 5.941 7.057 C 4.038 9.485 3.051 12.999 3.014 17.497 C 3.051 21.995 4.038 25.509 5.941 27.944 C 7.974 30.539 11.112 31.874 15.251 31.91 C 18.983 31.881 21.452 30.991 23.507 28.928 C 25.853 26.58 25.81 23.694 25.061 21.937 C 24.618 20.902 23.82 20.041 22.745 19.392 C 22.476 21.354 21.888 22.914 20.951 24.117 C 19.709 25.706 17.944 26.566 15.672 26.69 C 13.958 26.785 12.31 26.369 11.031 25.524 C 9.521 24.518 8.635 22.987 8.541 21.201 C 8.359 17.68 11.133 15.15 15.455 14.903 C 16.987 14.815 18.425 14.881 19.754 15.107 C 19.579 14.028 19.224 13.167 18.693 12.54 C 17.967 11.688 16.834 11.25 15.338 11.243 L 15.288 11.243 C 14.082 11.243 12.455 11.578 11.417 13.16 L 8.919 11.44 C 10.313 9.319 12.572 8.152 15.295 8.152 L 15.353 8.152 C 19.9 8.181 22.608 11.032 22.884 16.004 L 22.869 16.019 L 22.877 16.019 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "A2ihFZb7x-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 45" overflow="visible"><path d="M 29.738 20.593 C 29.946 20.677 30.135 20.771 30.333 20.855 C 33.089 22.177 35.11 24.155 36.167 26.61 C 37.649 30.032 37.791 35.589 33.307 40.032 C 29.889 43.425 25.726 44.953 19.844 45 L 19.816 45 C 13.188 44.953 8.1 42.741 4.673 38.42 C 1.624 34.578 0.057 29.226 0 22.524 L 0 22.477 C 0.047 15.775 1.614 10.423 4.663 6.58 C 8.091 2.259 13.188 0.047 19.816 0 L 19.844 0 C 26.481 0.047 31.636 2.25 35.167 6.552 C 36.904 8.68 38.188 11.239 39 14.21 L 35.186 15.223 C 34.515 12.805 33.505 10.742 32.145 9.092 C 29.389 5.736 25.254 4.013 19.826 3.975 C 14.445 4.021 10.376 5.736 7.723 9.074 C 5.25 12.195 3.966 16.713 3.919 22.496 C 3.966 28.279 5.25 32.797 7.723 35.928 C 10.366 39.264 14.445 40.98 19.826 41.027 C 24.678 40.99 27.888 39.846 30.56 37.193 C 33.609 34.175 33.553 30.464 32.58 28.204 C 32.004 26.873 30.965 25.767 29.568 24.933 C 29.219 27.455 28.454 29.461 27.236 31.007 C 25.622 33.051 23.328 34.156 20.373 34.316 C 18.145 34.438 16.002 33.904 14.341 32.817 C 12.378 31.523 11.225 29.554 11.103 27.259 C 10.867 22.731 14.473 19.478 20.091 19.16 C 22.083 19.048 23.952 19.132 25.68 19.423 C 25.453 18.036 24.991 16.929 24.301 16.123 C 23.357 15.027 21.884 14.464 19.94 14.455 L 19.874 14.455 C 18.307 14.455 16.192 14.886 14.842 16.92 L 11.594 14.709 C 13.407 11.981 16.343 10.481 19.884 10.481 L 19.959 10.481 C 25.869 10.519 29.39 14.184 29.749 20.577 L 29.73 20.595 L 29.74 20.595 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-4jnio8`,
                                  layoutDependency: x,
                                  layoutId: `vnUFb5_ML`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.287 5.667" overflow="visible"><path d="M 0.001 3.084 C 0.095 4.914 2.063 5.767 3.966 5.658 C 5.825 5.555 7.931 4.827 8.287 0.321 C 7.329 0.109 6.268 0 5.135 0 C 4.787 0 4.438 0.008 4.089 0.029 C 0.973 0.204 -0.065 1.72 0.008 3.076 L 0 3.084 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "A2ihFZb7x-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.773 7.286" overflow="visible"><path d="M 0.001 3.965 C 0.124 6.318 2.682 7.414 5.156 7.274 C 7.573 7.142 10.31 6.206 10.773 0.413 C 9.527 0.14 8.149 0 6.676 0 C 6.223 0 5.77 0.01 5.316 0.037 C 1.266 0.262 -0.085 2.212 0.01 3.955 L 0 3.965 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      We() &&
                        l(S, {
                          className: `framer-16efkoq`,
                          "data-framer-name": `Tiktok logo`,
                          layoutDependency: x,
                          layoutId: `hZYzLWMNd`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.612 39.829" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "Fj2Stia3y-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 47" overflow="visible"><g><g><path d="M 30.297 32.839 C 30.297 40.66 23.929 47 16.091 47 C 12.268 47.005 8.606 45.467 5.938 42.734 C 8.209 44.245 10.925 45.134 13.85 45.134 C 21.702 45.134 28.056 38.794 28.056 30.973 L 28.056 15.331 C 31.069 17.494 34.765 18.753 38.759 18.753 L 38.759 12.724 C 39.486 12.887 40.243 12.961 41 12.961 L 41 20.619 C 37.007 20.619 33.311 19.345 30.297 17.197 Z M 33.058 9.465 C 30.47 7.853 28.689 5.22 28.16 2.222 L 30.297 2.222 L 30.297 3.214 C 30.511 5.545 31.486 7.742 33.073 9.465 Z M 10.896 36.735 C 10.893 36.731 10.89 36.727 10.886 36.723 C 10.894 36.727 10.903 36.731 10.911 36.735 Z M 10.886 36.723 C 8.216 35.366 6.822 32.361 7.516 29.45 C 8.212 26.53 10.827 24.469 13.835 24.47 C 14.503 24.455 15.171 24.559 15.809 24.766 L 15.809 18.664 C 16.551 18.649 17.308 18.693 18.051 18.797 L 18.051 26.633 C 17.412 26.44 16.744 26.337 16.076 26.337 C 14.353 26.333 12.7 27.013 11.48 28.227 C 10.26 29.442 9.575 31.09 9.575 32.81 C 9.575 34.226 10.031 35.599 10.886 36.723 Z" fill="rgb(255,23,83)" opacity="0.8"></path><path d="M 28.382 15.316 C 31.396 17.464 35.092 18.738 39.085 18.738 L 39.085 12.709 C 36.898 12.243 34.911 11.11 33.4 9.465 C 30.811 7.853 29.031 5.22 28.501 2.222 L 22.905 2.222 L 22.905 32.824 C 22.905 36.394 19.995 39.283 16.403 39.283 C 14.295 39.283 12.425 38.275 11.237 36.72 C 8.551 35.369 7.146 32.355 7.843 29.435 C 8.539 26.515 11.154 24.454 14.161 24.455 C 14.844 24.455 15.512 24.559 16.136 24.752 L 16.136 18.649 C 8.432 18.812 2.227 25.092 2.227 32.81 C 2.227 36.661 3.77 40.157 6.279 42.719 C 8.618 44.288 11.373 45.123 14.191 45.119 C 22.029 45.119 28.397 38.779 28.397 30.958 L 28.397 15.316 Z" fill="rgb(0, 0, 0)"></path><path d="M 33.429 9.11 C 35.136 10.161 37.111 10.724 39.115 10.724 L 39.115 12.354 C 36.928 11.889 34.94 10.755 33.429 9.11 Z M 22.92 1.866 L 22.92 32.469 C 22.903 36.041 19.997 38.927 16.418 38.927 C 14.31 38.927 12.44 37.92 11.252 36.365 C 12.128 36.809 13.122 37.061 14.176 37.061 C 17.769 37.061 20.678 34.172 20.678 30.603 L 20.678 0 L 28.412 0 L 28.412 0.992 C 28.442 1.289 28.486 1.57 28.531 1.866 Z M 2.241 32.469 C 2.233 36.176 3.689 39.736 6.294 42.378 C 2.358 39.748 -0.003 35.33 0 30.603 C 0 22.782 6.368 16.442 14.206 16.442 C 14.859 16.442 15.497 16.486 16.151 16.575 L 16.151 18.308 C 8.432 18.471 2.241 24.752 2.241 32.469 Z" fill="rgb(0,201,208)"></path></g></g></svg>`,
                              },
                              Fj2Stia3y: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.612 39.829" overflow="visible"><g><g><path d="M 25.577 27.829 C 25.577 34.456 20.201 39.829 13.584 39.829 C 10.357 39.833 7.265 38.529 5.013 36.214 C 6.93 37.494 9.223 38.247 11.692 38.247 C 18.321 38.247 23.685 32.875 23.685 26.247 L 23.685 12.992 C 26.229 14.824 29.349 15.891 32.72 15.891 L 32.72 10.783 C 33.334 10.921 33.973 10.983 34.612 10.983 L 34.612 17.473 C 31.241 17.473 28.121 16.393 25.577 14.573 Z M 27.908 8.021 C 25.723 6.655 24.22 4.424 23.772 1.883 L 25.577 1.883 L 25.577 2.724 C 25.757 4.699 26.58 6.56 27.92 8.021 Z M 9.198 31.13 C 9.196 31.126 9.193 31.123 9.19 31.12 C 9.197 31.123 9.204 31.126 9.211 31.13 Z M 9.19 31.12 C 6.936 29.97 5.759 27.423 6.345 24.956 C 6.933 22.482 9.14 20.736 11.679 20.737 C 12.243 20.724 12.807 20.812 13.346 20.988 L 13.346 15.816 C 13.973 15.803 14.612 15.841 15.238 15.929 L 15.238 22.569 C 14.7 22.406 14.136 22.318 13.572 22.318 C 12.117 22.315 10.721 22.891 9.691 23.92 C 8.662 24.949 8.083 26.347 8.083 27.804 C 8.083 29.004 8.469 30.168 9.19 31.12 Z" fill="rgb(255,23,83)" opacity="0.8"></path><path d="M 23.96 12.979 C 26.504 14.799 29.625 15.879 32.996 15.879 L 32.996 10.77 C 31.149 10.375 29.472 9.414 28.196 8.021 C 26.011 6.655 24.508 4.424 24.061 1.883 L 19.336 1.883 L 19.336 27.816 C 19.336 30.841 16.88 33.289 13.847 33.289 C 12.068 33.289 10.489 32.435 9.486 31.117 C 7.219 29.973 6.033 27.418 6.621 24.944 C 7.209 22.469 9.416 20.723 11.955 20.724 C 12.532 20.724 13.095 20.812 13.622 20.975 L 13.622 15.803 C 7.118 15.942 1.88 21.264 1.88 27.804 C 1.88 31.067 3.183 34.03 5.301 36.201 C 7.275 37.53 9.601 38.238 11.98 38.235 C 18.597 38.235 23.973 32.862 23.973 26.235 L 23.973 12.979 Z" fill="rgb(255, 255, 255)"></path><path d="M 28.221 7.72 C 29.662 8.611 31.329 9.088 33.021 9.088 L 33.021 10.469 C 31.174 10.075 29.496 9.114 28.221 7.72 Z M 19.349 1.582 L 19.349 27.515 C 19.335 30.541 16.882 32.988 13.86 32.988 C 12.08 32.988 10.501 32.134 9.499 30.816 C 10.238 31.193 11.078 31.406 11.968 31.406 C 15 31.406 17.456 28.958 17.456 25.933 L 17.456 0 L 23.985 0 L 23.985 0.841 C 24.01 1.092 24.048 1.331 24.086 1.582 Z M 1.892 27.515 C 1.885 30.656 3.114 33.673 5.313 35.912 C 1.99 33.683 -0.003 29.94 0 25.933 C 0 19.306 5.376 13.933 11.993 13.933 C 12.544 13.933 13.083 13.971 13.634 14.046 L 13.634 15.515 C 7.118 15.653 1.892 20.975 1.892 27.515 Z" fill="rgb(0,201,208)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ge() &&
                            p(S, {
                              className: `framer-1ocszv`,
                              layoutDependency: x,
                              layoutId: `bcQrwKyWd`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.612 39.829" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "Fj2Stia3y-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 47" overflow="visible"><g><path d="M 30.297 32.839 C 30.297 40.66 23.929 47 16.091 47 C 12.268 47.005 8.606 45.467 5.938 42.734 C 8.209 44.245 10.925 45.134 13.85 45.134 C 21.702 45.134 28.056 38.794 28.056 30.973 L 28.056 15.331 C 31.069 17.494 34.765 18.753 38.759 18.753 L 38.759 12.724 C 39.486 12.887 40.243 12.961 41 12.961 L 41 20.619 C 37.007 20.619 33.311 19.345 30.297 17.197 Z M 33.058 9.465 C 30.47 7.853 28.689 5.22 28.16 2.222 L 30.297 2.222 L 30.297 3.214 C 30.511 5.545 31.486 7.742 33.073 9.465 Z M 10.896 36.735 C 10.893 36.731 10.89 36.727 10.886 36.723 C 10.894 36.727 10.903 36.731 10.911 36.735 Z M 10.886 36.723 C 8.216 35.366 6.822 32.361 7.516 29.45 C 8.212 26.53 10.827 24.469 13.835 24.47 C 14.503 24.455 15.171 24.559 15.809 24.766 L 15.809 18.664 C 16.551 18.649 17.308 18.693 18.051 18.797 L 18.051 26.633 C 17.412 26.44 16.744 26.337 16.076 26.337 C 14.353 26.333 12.7 27.013 11.48 28.227 C 10.26 29.442 9.575 31.09 9.575 32.81 C 9.575 34.226 10.031 35.599 10.886 36.723 Z" fill="rgb(255,23,83)" opacity="0.8"></path><path d="M 28.382 15.316 C 31.396 17.464 35.092 18.738 39.085 18.738 L 39.085 12.709 C 36.898 12.243 34.911 11.11 33.4 9.465 C 30.811 7.853 29.031 5.22 28.501 2.222 L 22.905 2.222 L 22.905 32.824 C 22.905 36.394 19.995 39.283 16.403 39.283 C 14.295 39.283 12.425 38.275 11.237 36.72 C 8.551 35.369 7.146 32.355 7.843 29.435 C 8.539 26.515 11.154 24.454 14.161 24.455 C 14.844 24.455 15.512 24.559 16.136 24.752 L 16.136 18.649 C 8.432 18.812 2.227 25.092 2.227 32.81 C 2.227 36.661 3.77 40.157 6.279 42.719 C 8.618 44.288 11.373 45.123 14.191 45.119 C 22.029 45.119 28.397 38.779 28.397 30.958 L 28.397 15.316 Z" fill="rgb(0, 0, 0)"></path><path d="M 33.429 9.11 C 35.136 10.161 37.111 10.724 39.115 10.724 L 39.115 12.354 C 36.928 11.889 34.94 10.755 33.429 9.11 Z M 22.92 1.866 L 22.92 32.469 C 22.903 36.041 19.997 38.927 16.418 38.927 C 14.31 38.927 12.44 37.92 11.252 36.365 C 12.128 36.809 13.122 37.061 14.176 37.061 C 17.769 37.061 20.678 34.172 20.678 30.603 L 20.678 0 L 28.412 0 L 28.412 0.992 C 28.442 1.289 28.486 1.57 28.531 1.866 Z M 2.241 32.469 C 2.233 36.176 3.689 39.736 6.294 42.378 C 2.358 39.748 -0.003 35.33 0 30.603 C 0 22.782 6.368 16.442 14.206 16.442 C 14.859 16.442 15.497 16.486 16.151 16.575 L 16.151 18.308 C 8.432 18.471 2.241 24.752 2.241 32.469 Z" fill="rgb(0,201,208)"></path></g></svg>`,
                                  },
                                  Fj2Stia3y: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.612 39.829" overflow="visible"><g><path d="M 25.577 27.829 C 25.577 34.456 20.201 39.829 13.584 39.829 C 10.357 39.833 7.265 38.529 5.013 36.214 C 6.93 37.494 9.223 38.247 11.692 38.247 C 18.321 38.247 23.685 32.875 23.685 26.247 L 23.685 12.992 C 26.229 14.824 29.349 15.891 32.72 15.891 L 32.72 10.783 C 33.334 10.921 33.973 10.983 34.612 10.983 L 34.612 17.473 C 31.241 17.473 28.121 16.393 25.577 14.573 Z M 27.908 8.021 C 25.723 6.655 24.22 4.424 23.772 1.883 L 25.577 1.883 L 25.577 2.724 C 25.757 4.699 26.58 6.56 27.92 8.021 Z M 9.198 31.13 C 9.196 31.126 9.193 31.123 9.19 31.12 C 9.197 31.123 9.204 31.126 9.211 31.13 Z M 9.19 31.12 C 6.936 29.97 5.759 27.423 6.345 24.956 C 6.933 22.482 9.14 20.736 11.679 20.737 C 12.243 20.724 12.807 20.812 13.346 20.988 L 13.346 15.816 C 13.973 15.803 14.612 15.841 15.238 15.929 L 15.238 22.569 C 14.7 22.406 14.136 22.318 13.572 22.318 C 12.117 22.315 10.721 22.891 9.691 23.92 C 8.662 24.949 8.083 26.347 8.083 27.804 C 8.083 29.004 8.469 30.168 9.19 31.12 Z" fill="rgb(255,23,83)" opacity="0.8"></path><path d="M 23.96 12.979 C 26.504 14.799 29.625 15.879 32.996 15.879 L 32.996 10.77 C 31.149 10.375 29.472 9.414 28.196 8.021 C 26.011 6.655 24.508 4.424 24.061 1.883 L 19.336 1.883 L 19.336 27.816 C 19.336 30.841 16.88 33.289 13.847 33.289 C 12.068 33.289 10.489 32.435 9.486 31.117 C 7.219 29.973 6.033 27.418 6.621 24.944 C 7.209 22.469 9.416 20.723 11.955 20.724 C 12.532 20.724 13.095 20.812 13.622 20.975 L 13.622 15.803 C 7.118 15.942 1.88 21.264 1.88 27.804 C 1.88 31.067 3.183 34.03 5.301 36.201 C 7.275 37.53 9.601 38.238 11.98 38.235 C 18.597 38.235 23.973 32.862 23.973 26.235 L 23.973 12.979 Z" fill="rgb(255, 255, 255)"></path><path d="M 28.221 7.72 C 29.662 8.611 31.329 9.088 33.021 9.088 L 33.021 10.469 C 31.174 10.075 29.496 9.114 28.221 7.72 Z M 19.349 1.582 L 19.349 27.515 C 19.335 30.541 16.882 32.988 13.86 32.988 C 12.08 32.988 10.501 32.134 9.499 30.816 C 10.238 31.193 11.078 31.406 11.968 31.406 C 15 31.406 17.456 28.958 17.456 25.933 L 17.456 0 L 23.985 0 L 23.985 0.841 C 24.01 1.092 24.048 1.331 24.086 1.582 Z M 1.892 27.515 C 1.885 30.656 3.114 33.673 5.313 35.912 C 1.99 33.683 -0.003 29.94 0 25.933 C 0 19.306 5.376 13.933 11.993 13.933 C 12.544 13.933 13.083 13.971 13.634 14.046 L 13.634 15.515 C 7.118 15.653 1.892 20.975 1.892 27.515 Z" fill="rgb(0,201,208)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                p(S, {
                                  className: `framer-12aa2nr`,
                                  layoutDependency: x,
                                  layoutId: `csRHGjslV`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.6 37.946" overflow="visible"><path d="M 20.564 25.946 C 20.564 32.573 15.188 37.946 8.572 37.946 C 5.344 37.951 2.252 36.646 0 34.331 C 1.917 35.611 4.211 36.364 6.679 36.364 C 13.309 36.364 18.672 30.992 18.672 24.364 L 18.672 11.109 C 21.216 12.942 24.336 14.008 27.707 14.008 L 27.707 8.9 C 28.321 9.038 28.96 9.1 29.6 9.1 L 29.6 15.59 C 26.229 15.59 23.108 14.511 20.564 12.69 Z M 22.895 6.138 C 20.71 4.772 19.207 2.541 18.76 0 L 20.564 0 L 20.564 0.841 C 20.744 2.816 21.568 4.678 22.908 6.138 Z M 4.186 29.247 C 4.183 29.244 4.18 29.24 4.178 29.237 C 4.184 29.24 4.191 29.244 4.198 29.247 Z M 4.178 29.237 C 1.923 28.087 0.747 25.54 1.332 23.073 C 1.92 20.599 4.128 18.853 6.667 18.854 C 7.231 18.841 7.795 18.929 8.333 19.105 L 8.333 13.933 C 8.96 13.921 9.599 13.958 10.226 14.046 L 10.226 20.686 C 9.687 20.523 9.123 20.435 8.559 20.435 C 7.104 20.432 5.708 21.008 4.679 22.037 C 3.649 23.067 3.07 24.464 3.07 25.921 C 3.07 27.121 3.456 28.285 4.178 29.237 Z" fill="rgb(255,23,83)" opacity="0.8"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Fj2Stia3y-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.062 44.778" overflow="visible"><path d="M 24.36 30.617 C 24.36 38.438 17.991 44.778 10.154 44.778 C 6.33 44.784 2.668 43.245 0 40.512 C 2.271 42.023 4.988 42.912 7.912 42.912 C 15.765 42.912 22.118 36.572 22.118 28.751 L 22.118 13.109 C 25.131 15.272 28.828 16.531 32.821 16.531 L 32.821 10.502 C 33.548 10.665 34.305 10.739 35.062 10.739 L 35.062 18.397 C 31.069 18.397 27.373 17.123 24.36 14.975 Z M 27.121 7.243 C 24.532 5.631 22.752 2.998 22.222 0 L 24.36 0 L 24.36 0.992 C 24.573 3.323 25.548 5.52 27.135 7.243 Z M 4.958 34.513 C 4.955 34.509 4.952 34.505 4.949 34.501 C 4.957 34.505 4.965 34.509 4.973 34.513 Z M 4.949 34.501 C 2.278 33.144 0.884 30.139 1.578 27.228 C 2.275 24.308 4.889 22.247 7.897 22.248 C 8.565 22.234 9.233 22.337 9.871 22.545 L 9.871 16.442 C 10.614 16.427 11.371 16.471 12.113 16.575 L 12.113 24.411 C 11.475 24.218 10.807 24.115 10.139 24.115 C 8.416 24.111 6.762 24.791 5.542 26.005 C 4.322 27.22 3.637 28.868 3.637 30.588 C 3.637 32.005 4.094 33.377 4.949 34.501 Z" fill="rgb(255,23,83)" opacity="0.8"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-1qzs6n4`,
                                      layoutDependency: x,
                                      layoutId: `u_1JfrdyQ`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.6 29.046" overflow="visible"><path d="M 20.564 3.791 C 23.108 5.611 26.229 6.69 29.6 6.69 L 29.6 0.201 C 28.96 0.201 28.321 0.138 27.707 0 L 27.707 5.109 C 24.336 5.109 21.216 4.042 18.672 2.209 L 18.672 15.465 C 18.672 22.092 13.309 27.465 6.679 27.465 C 4.211 27.465 1.917 26.711 0 25.431 C 2.252 27.747 5.344 29.051 8.572 29.046 C 15.188 29.046 20.564 23.674 20.564 17.046 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "Fj2Stia3y-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.062 34.276" overflow="visible"><path d="M 24.36 4.473 C 27.373 6.621 31.069 7.895 35.062 7.895 L 35.062 0.237 C 34.305 0.237 33.548 0.163 32.821 0 L 32.821 6.029 C 28.828 6.029 25.131 4.77 22.118 2.607 L 22.118 18.249 C 22.118 26.07 15.765 32.41 7.912 32.41 C 4.988 32.41 2.271 31.521 0 30.01 C 2.668 32.743 6.33 34.282 10.154 34.276 C 17.991 34.276 24.36 27.936 24.36 20.115 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-8dulu`,
                                      layoutDependency: x,
                                      layoutId: `AniUp3ceb`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.148 6.138" overflow="visible"><path d="M 4.148 6.138 C 2.808 4.678 1.985 2.816 1.805 0.841 L 1.805 0 L 0 0 C 0.447 2.541 1.95 4.772 4.135 6.138 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "Fj2Stia3y-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.913 7.243" overflow="visible"><path d="M 4.913 7.243 C 3.326 5.52 2.351 3.323 2.138 0.992 L 2.138 0 L 0 0 C 0.53 2.998 2.31 5.631 4.899 7.243 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-a3vup7`,
                                      layoutDependency: x,
                                      layoutId: `l3wwhUL7Y`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.043 15.316" overflow="visible"><path d="M 3.002 15.316 C 2.276 14.362 1.887 13.195 1.887 11.99 C 1.887 10.533 2.466 9.136 3.496 8.107 C 4.525 7.078 5.921 6.501 7.376 6.504 C 7.94 6.504 8.504 6.592 9.043 6.756 L 9.043 0.115 C 8.416 0.027 7.777 -0.01 7.15 0.002 L 7.15 5.174 C 6.612 4.998 6.048 4.91 5.484 4.923 C 2.944 4.922 0.737 6.668 0.149 9.142 C -0.438 11.617 0.747 14.172 3.015 15.316 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "Fj2Stia3y-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.712 18.074" overflow="visible"><path d="M 3.557 18.074 C 2.696 16.948 2.235 15.571 2.235 14.149 C 2.235 12.429 2.921 10.781 4.141 9.566 C 5.36 8.352 7.014 7.672 8.737 7.676 C 9.405 7.676 10.073 7.779 10.712 7.972 L 10.712 0.136 C 9.969 0.032 9.212 -0.012 8.47 0.003 L 8.47 6.106 C 7.832 5.898 7.164 5.794 6.496 5.809 C 3.488 5.808 0.873 7.869 0.177 10.789 C -0.519 13.708 0.885 16.723 3.571 18.074 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                l(S, {
                                  className: `framer-1bhu72q`,
                                  layoutDependency: x,
                                  layoutId: `PNUeFIsd2`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.116 36.352" overflow="visible"><path d="M 22.081 11.096 C 24.624 12.916 27.745 13.996 31.116 13.996 L 31.116 8.887 C 29.27 8.492 27.592 7.532 26.316 6.138 C 24.131 4.772 22.628 2.541 22.181 0 L 17.456 0 L 17.456 25.933 C 17.456 28.958 15 31.406 11.968 31.406 C 10.188 31.406 8.609 30.553 7.607 29.235 C 5.339 28.09 4.153 25.535 4.741 23.061 C 5.329 20.586 7.536 18.84 10.075 18.841 C 10.652 18.841 11.216 18.929 11.742 19.092 L 11.742 13.921 C 5.238 14.059 0 19.381 0 25.921 C 0 29.184 1.303 32.147 3.421 34.318 C 5.396 35.648 7.721 36.356 10.1 36.352 C 16.717 36.352 22.093 30.979 22.093 24.352 L 22.093 11.096 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Fj2Stia3y-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36.858 42.897" overflow="visible"><path d="M 26.156 13.094 C 29.169 15.242 32.865 16.516 36.858 16.516 L 36.858 10.487 C 34.672 10.022 32.684 8.888 31.173 7.243 C 28.585 5.631 26.804 2.998 26.274 0 L 20.678 0 L 20.678 30.603 C 20.678 34.172 17.769 37.061 14.176 37.061 C 12.068 37.061 10.198 36.054 9.01 34.498 C 6.324 33.147 4.92 30.133 5.616 27.213 C 6.312 24.293 8.927 22.233 11.935 22.234 C 12.618 22.234 13.286 22.337 13.909 22.53 L 13.909 16.427 C 6.205 16.59 0 22.87 0 30.588 C 0 34.439 1.544 37.935 4.052 40.497 C 6.391 42.066 9.146 42.902 11.965 42.897 C 19.802 42.897 26.171 36.557 26.171 28.736 L 26.171 13.094 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                p(S, {
                                  className: `framer-1rpia06`,
                                  layoutDependency: x,
                                  layoutId: `OTeDWvJop`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.021 35.912" overflow="visible"><path d="M 28.221 7.72 C 29.662 8.611 31.329 9.088 33.021 9.088 L 33.021 10.469 C 31.174 10.075 29.496 9.114 28.221 7.72 Z M 19.349 1.582 L 19.349 27.515 C 19.335 30.541 16.882 32.988 13.86 32.988 C 12.08 32.988 10.501 32.134 9.499 30.816 C 10.238 31.193 11.078 31.406 11.968 31.406 C 15 31.406 17.456 28.958 17.456 25.933 L 17.456 0 L 23.985 0 L 23.985 0.841 C 24.01 1.092 24.048 1.331 24.086 1.582 Z M 1.892 27.515 C 1.885 30.656 3.114 33.673 5.313 35.912 C 1.99 33.683 -0.003 29.94 0 25.933 C 0 19.306 5.376 13.933 11.993 13.933 C 12.544 13.933 13.083 13.971 13.634 14.046 L 13.634 15.515 C 7.118 15.653 1.892 20.975 1.892 27.515 Z" fill="rgb(0,201,208)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "Fj2Stia3y-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.115 42.378" overflow="visible"><path d="M 33.429 9.11 C 35.136 10.161 37.111 10.724 39.115 10.724 L 39.115 12.354 C 36.928 11.889 34.94 10.755 33.429 9.11 Z M 22.92 1.866 L 22.92 32.469 C 22.903 36.041 19.997 38.927 16.418 38.927 C 14.31 38.927 12.44 37.92 11.252 36.365 C 12.128 36.809 13.122 37.061 14.176 37.061 C 17.769 37.061 20.678 34.172 20.678 30.603 L 20.678 0 L 28.412 0 L 28.412 0.992 C 28.442 1.289 28.486 1.57 28.531 1.866 Z M 2.241 32.469 C 2.233 36.176 3.689 39.736 6.294 42.378 C 2.358 39.748 -0.003 35.33 0 30.603 C 0 22.782 6.368 16.442 14.206 16.442 C 14.859 16.442 15.497 16.486 16.151 16.575 L 16.151 18.308 C 8.432 18.471 2.241 24.752 2.241 32.469 Z" fill="rgb(0,201,208)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-1uytglo`,
                                      layoutDependency: x,
                                      layoutId: `WNgx1E6g8`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.8 2.749" overflow="visible"><path d="M 4.8 2.749 L 4.8 1.368 C 3.108 1.368 1.441 0.891 0 0 C 1.275 1.394 2.953 2.355 4.8 2.749 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "Fj2Stia3y-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.685 3.244" overflow="visible"><path d="M 5.685 3.244 L 5.685 1.615 C 3.681 1.615 1.707 1.052 0 0 C 1.511 1.645 3.498 2.779 5.685 3.244 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-14nl3qv`,
                                      layoutDependency: x,
                                      layoutId: `N0nsWLGXf`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.587 32.988" overflow="visible"><path d="M 14.587 1.582 C 14.549 1.331 14.512 1.092 14.486 0.841 L 14.486 0 L 7.958 0 L 7.958 25.933 C 7.958 28.958 5.501 31.406 2.469 31.406 C 1.579 31.406 0.739 31.193 0 30.816 C 1.003 32.134 2.581 32.988 4.361 32.988 C 7.383 32.988 9.836 30.541 9.85 27.515 L 9.85 1.582 L 14.574 1.582 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "Fj2Stia3y-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.279 38.927" overflow="visible"><path d="M 17.279 1.866 C 17.234 1.57 17.19 1.289 17.16 0.992 L 17.16 0 L 9.426 0 L 9.426 30.603 C 9.426 34.172 6.517 37.061 2.924 37.061 C 1.87 37.061 0.876 36.809 0 36.365 C 1.188 37.92 3.058 38.927 5.166 38.927 C 8.745 38.927 11.651 36.041 11.668 32.469 L 11.668 1.866 L 17.264 1.866 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-v8xd24`,
                                      layoutDependency: x,
                                      layoutId: `yxnIzumH5`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.634 21.979" overflow="visible"><path d="M 13.634 1.582 L 13.634 0.113 C 13.083 0.038 12.544 0 11.993 0 C 5.376 0 0 5.372 0 12 C -0.003 16.006 1.99 19.75 5.313 21.979 C 3.114 19.74 1.885 16.723 1.892 13.582 C 1.892 7.042 7.118 1.72 13.634 1.582 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "Fj2Stia3y-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.151 25.937" overflow="visible"><path d="M 16.151 1.866 L 16.151 0.133 C 15.497 0.044 14.859 0 14.206 0 C 6.368 0 0 6.34 0 14.161 C -0.003 18.888 2.358 23.306 6.294 25.937 C 3.689 23.294 2.233 19.734 2.241 16.027 C 2.241 8.31 8.432 2.029 16.151 1.866 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      Ke() &&
                        l(S, {
                          className: `framer-dssgnt`,
                          "data-framer-name": `Twitch logo`,
                          layoutDependency: x,
                          layoutId: `JG9Oj7JMx`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.735 35.915" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "c4ZGuTW8r-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 43" overflow="visible"><g><g><path d="M 7.713 0 L 0 7.684 L 0 35.316 L 9.246 35.316 L 9.246 43 L 16.959 35.316 L 23.123 35.316 L 37 21.492 L 37 0 Z M 33.902 19.965 L 27.738 26.105 L 21.574 26.105 L 16.177 31.482 L 16.177 26.105 L 9.246 26.105 L 9.246 3.07 L 33.902 3.07 Z" fill="rgb(158, 75, 223)"></path><path d="M 26.205 8.447 L 29.287 8.447 L 29.287 17.658 L 26.205 17.658 Z" fill="rgb(158, 75, 223)"></path><path d="M 17.726 8.447 L 20.808 8.447 L 20.808 17.658 L 17.726 17.658 Z" fill="rgb(158, 75, 223)"></path></g></g></svg>`,
                              },
                              c4ZGuTW8r: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.735 35.915" overflow="visible"><g><g><path d="M 6.407 0 L 0 6.418 L 0 29.497 L 7.68 29.497 L 7.68 35.915 L 14.087 29.497 L 19.208 29.497 L 30.735 17.951 L 30.735 0 Z M 28.162 16.675 L 23.041 21.804 L 17.921 21.804 L 13.438 26.295 L 13.438 21.804 L 7.68 21.804 L 7.68 2.564 L 28.162 2.564 Z" fill="rgb(255, 255, 255)"></path><path d="M 21.768 7.055 L 24.328 7.055 L 24.328 14.749 L 21.768 14.749 Z" fill="rgb(255, 255, 255)"></path><path d="M 14.724 7.055 L 17.284 7.055 L 17.284 14.749 L 14.724 14.749 Z" fill="rgb(255, 255, 255)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            qe() &&
                            p(S, {
                              className: `framer-akrdhm`,
                              layoutDependency: x,
                              layoutId: `cPl7mP1oW`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.735 35.915" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "c4ZGuTW8r-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 43" overflow="visible"><g><path d="M 7.713 0 L 0 7.684 L 0 35.316 L 9.246 35.316 L 9.246 43 L 16.959 35.316 L 23.123 35.316 L 37 21.492 L 37 0 Z M 33.902 19.965 L 27.738 26.105 L 21.574 26.105 L 16.177 31.482 L 16.177 26.105 L 9.246 26.105 L 9.246 3.07 L 33.902 3.07 Z" fill="rgb(158, 75, 223)"></path><path d="M 26.205 8.447 L 29.287 8.447 L 29.287 17.658 L 26.205 17.658 Z" fill="rgb(158, 75, 223)"></path><path d="M 17.726 8.447 L 20.808 8.447 L 20.808 17.658 L 17.726 17.658 Z" fill="rgb(158, 75, 223)"></path></g></svg>`,
                                  },
                                  c4ZGuTW8r: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.735 35.915" overflow="visible"><g><path d="M 6.407 0 L 0 6.418 L 0 29.497 L 7.68 29.497 L 7.68 35.915 L 14.087 29.497 L 19.208 29.497 L 30.735 17.951 L 30.735 0 Z M 28.162 16.675 L 23.041 21.804 L 17.921 21.804 L 13.438 26.295 L 13.438 21.804 L 7.68 21.804 L 7.68 2.564 L 28.162 2.564 Z" fill="rgb(255, 255, 255)"></path><path d="M 21.768 7.055 L 24.328 7.055 L 24.328 14.749 L 21.768 14.749 Z" fill="rgb(255, 255, 255)"></path><path d="M 14.724 7.055 L 17.284 7.055 L 17.284 14.749 L 14.724 14.749 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                p(S, {
                                  className: `framer-p6lm2r`,
                                  layoutDependency: x,
                                  layoutId: `ptvPeGIR3`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.735 35.915" overflow="visible"><path d="M 6.407 0 L 0 6.418 L 0 29.497 L 7.68 29.497 L 7.68 35.915 L 14.087 29.497 L 19.208 29.497 L 30.735 17.951 L 30.735 0 Z M 28.162 16.675 L 23.041 21.804 L 17.921 21.804 L 13.438 26.295 L 13.438 21.804 L 7.68 21.804 L 7.68 2.564 L 28.162 2.564 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "c4ZGuTW8r-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 43" overflow="visible"><path d="M 7.713 0 L 0 7.684 L 0 35.316 L 9.246 35.316 L 9.246 43 L 16.959 35.316 L 23.123 35.316 L 37 21.492 L 37 0 Z M 33.902 19.965 L 27.738 26.105 L 21.574 26.105 L 16.177 31.482 L 16.177 26.105 L 9.246 26.105 L 9.246 3.07 L 33.902 3.07 Z" fill="rgb(158, 75, 223)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-qsektv`,
                                      layoutDependency: x,
                                      layoutId: `z80QAttH0`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.735 35.915" overflow="visible"><path d="M 6.407 0 L 0 6.418 L 0 29.497 L 7.68 29.497 L 7.68 35.915 L 14.087 29.497 L 19.208 29.497 L 30.735 17.951 L 30.735 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "c4ZGuTW8r-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 43" overflow="visible"><path d="M 7.713 0 L 0 7.684 L 0 35.316 L 9.246 35.316 L 9.246 43 L 16.959 35.316 L 23.123 35.316 L 37 21.492 L 37 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1jn23it`,
                                      layoutDependency: x,
                                      layoutId: `daQ0hFxBg`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.481 23.731" overflow="visible"><path d="M 20.481 14.111 L 15.361 19.24 L 10.241 19.24 L 5.757 23.731 L 5.757 19.24 L 0 19.24 L 0 0 L 20.481 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "c4ZGuTW8r-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.656 28.412" overflow="visible"><path d="M 24.656 16.895 L 18.492 23.035 L 12.328 23.035 L 6.931 28.412 L 6.931 23.035 L 0 23.035 L 0 0 L 24.656 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                l(S, {
                                  className: `framer-4c73nm`,
                                  layoutDependency: x,
                                  layoutId: `CsUVvQUP7`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.56 7.693" overflow="visible"><path d="M 0 0 L 2.56 0 L 2.56 7.693 L 0 7.693 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "c4ZGuTW8r-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.082 9.211" overflow="visible"><path d="M 0 0 L 3.082 0 L 3.082 9.211 L 0 9.211 Z" fill="rgb(158, 75, 223)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-1en3eib`,
                                  layoutDependency: x,
                                  layoutId: `haj1X00AT`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.56 7.693" overflow="visible"><path d="M 0 0 L 2.56 0 L 2.56 7.693 L 0 7.693 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "c4ZGuTW8r-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.082 9.211" overflow="visible"><path d="M 0 0 L 3.082 0 L 3.082 9.211 L 0 9.211 Z" fill="rgb(158, 75, 223)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      Je() &&
                        l(S, {
                          className: `framer-1ctohsq`,
                          "data-framer-name": `WeChat logo`,
                          layoutDependency: x,
                          layoutId: `RtOExryKQ`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 35" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "OU2pG3pPl-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55 45" overflow="visible"><g><g><path d="M 38.529 43.557 C 29.433 43.557 22.06 37.282 22.06 29.543 C 22.06 21.804 29.434 15.529 38.529 15.529 C 47.625 15.529 55 21.804 55 29.543 C 55 33.976 52.578 37.925 48.803 40.493 L 49.787 45 C 49.787 45 46.608 42.974 45.011 42.429 C 43.022 43.154 40.831 43.557 38.53 43.557 Z M 32.94 22.806 C 31.81 22.806 30.893 23.726 30.893 24.862 C 30.893 25.998 31.81 26.918 32.94 26.918 C 34.071 26.918 34.987 25.998 34.987 24.862 C 34.987 23.726 34.071 22.806 32.94 22.806 Z M 44.19 22.806 C 43.06 22.806 42.143 23.726 42.143 24.862 C 42.143 25.998 43.06 26.918 44.19 26.918 C 45.321 26.918 46.238 25.998 46.238 24.862 C 46.238 23.726 45.321 22.806 44.19 22.806 Z" fill="rgb(0, 216, 10)"></path><path d="M 20.237 29.463 C 20.237 20.867 28.427 13.899 38.529 13.899 C 38.804 13.899 39.071 13.923 39.343 13.933 C 37.705 6.019 29.604 0 19.831 0 C 8.879 0 0 7.555 0 16.874 C 0 22.211 2.916 26.966 7.463 30.059 L 6.277 35.485 C 6.277 35.485 10.105 33.046 12.029 32.389 C 14.424 33.262 17.061 33.747 19.832 33.747 C 20.207 33.747 20.572 33.716 20.942 33.699 C 20.494 32.35 20.237 30.934 20.237 29.463 Z M 26.562 8.761 C 27.923 8.761 29.027 9.87 29.027 11.237 C 29.027 12.605 27.923 13.714 26.562 13.714 C 25.2 13.714 24.097 12.605 24.097 11.237 C 24.097 9.87 25.2 8.761 26.562 8.761 Z M 13.015 13.714 C 11.653 13.714 10.55 12.605 10.55 11.237 C 10.55 9.87 11.654 8.761 13.015 8.761 C 14.375 8.761 15.48 9.87 15.48 11.237 C 15.48 12.605 14.376 13.714 13.015 13.714 Z" fill="rgb(0, 216, 10)"></path></g></g></svg>`,
                              },
                              OU2pG3pPl: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 35" overflow="visible"><g><g><path d="M 30.123 33.877 C 23.011 33.877 17.247 28.997 17.247 22.978 C 17.247 16.958 23.012 12.078 30.123 12.078 C 37.234 12.078 43 16.958 43 22.978 C 43 26.426 41.106 29.498 38.155 31.495 L 38.925 35 C 38.925 35 36.439 33.424 35.19 33 C 33.635 33.564 31.923 33.877 30.124 33.877 Z M 25.753 17.738 C 24.869 17.738 24.153 18.454 24.153 19.337 C 24.153 20.22 24.869 20.936 25.753 20.936 C 26.637 20.936 27.354 20.22 27.354 19.337 C 27.354 18.454 26.637 17.738 25.753 17.738 Z M 34.549 17.738 C 33.665 17.738 32.948 18.454 32.948 19.337 C 32.948 20.22 33.665 20.936 34.549 20.936 C 35.433 20.936 36.149 20.22 36.149 19.337 C 36.149 18.454 35.433 17.738 34.549 17.738 Z" fill="rgb(255, 255, 255)"></path><path d="M 15.822 22.915 C 15.822 16.23 22.225 10.81 30.123 10.81 C 30.338 10.81 30.547 10.829 30.759 10.837 C 29.479 4.682 23.145 0 15.504 0 C 6.942 0 0 5.876 0 13.124 C 0 17.276 2.28 20.974 5.835 23.379 L 4.908 27.6 C 4.908 27.6 7.9 25.703 9.404 25.191 C 11.277 25.871 13.339 26.247 15.505 26.247 C 15.798 26.247 16.084 26.224 16.372 26.211 C 16.022 25.161 15.822 24.06 15.822 22.915 Z M 20.766 6.814 C 21.831 6.814 22.694 7.676 22.694 8.74 C 22.694 9.804 21.831 10.666 20.766 10.666 C 19.702 10.666 18.84 9.804 18.84 8.74 C 18.84 7.676 19.702 6.814 20.766 6.814 Z M 10.175 10.666 C 9.111 10.666 8.248 9.804 8.248 8.74 C 8.248 7.676 9.111 6.814 10.175 6.814 C 11.239 6.814 12.103 7.676 12.103 8.74 C 12.103 9.804 11.24 10.666 10.175 10.666 Z" fill="rgb(255, 255, 255)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ye() &&
                            p(S, {
                              className: `framer-1weezei`,
                              layoutDependency: x,
                              layoutId: `DRSGXEXXU`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 35" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "OU2pG3pPl-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55 45" overflow="visible"><g><path d="M 38.529 43.557 C 29.433 43.557 22.06 37.282 22.06 29.543 C 22.06 21.804 29.434 15.529 38.529 15.529 C 47.625 15.529 55 21.804 55 29.543 C 55 33.976 52.578 37.925 48.803 40.493 L 49.787 45 C 49.787 45 46.608 42.974 45.011 42.429 C 43.022 43.154 40.831 43.557 38.53 43.557 Z M 32.94 22.806 C 31.81 22.806 30.893 23.726 30.893 24.862 C 30.893 25.998 31.81 26.918 32.94 26.918 C 34.071 26.918 34.987 25.998 34.987 24.862 C 34.987 23.726 34.071 22.806 32.94 22.806 Z M 44.19 22.806 C 43.06 22.806 42.143 23.726 42.143 24.862 C 42.143 25.998 43.06 26.918 44.19 26.918 C 45.321 26.918 46.238 25.998 46.238 24.862 C 46.238 23.726 45.321 22.806 44.19 22.806 Z" fill="rgb(0, 216, 10)"></path><path d="M 20.237 29.463 C 20.237 20.867 28.427 13.899 38.529 13.899 C 38.804 13.899 39.071 13.923 39.343 13.933 C 37.705 6.019 29.604 0 19.831 0 C 8.879 0 0 7.555 0 16.874 C 0 22.211 2.916 26.966 7.463 30.059 L 6.277 35.485 C 6.277 35.485 10.105 33.046 12.029 32.389 C 14.424 33.262 17.061 33.747 19.832 33.747 C 20.207 33.747 20.572 33.716 20.942 33.699 C 20.494 32.35 20.237 30.934 20.237 29.463 Z M 26.562 8.761 C 27.923 8.761 29.027 9.87 29.027 11.237 C 29.027 12.605 27.923 13.714 26.562 13.714 C 25.2 13.714 24.097 12.605 24.097 11.237 C 24.097 9.87 25.2 8.761 26.562 8.761 Z M 13.015 13.714 C 11.653 13.714 10.55 12.605 10.55 11.237 C 10.55 9.87 11.654 8.761 13.015 8.761 C 14.375 8.761 15.48 9.87 15.48 11.237 C 15.48 12.605 14.376 13.714 13.015 13.714 Z" fill="rgb(0, 216, 10)"></path></g></svg>`,
                                  },
                                  OU2pG3pPl: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 35" overflow="visible"><g><path d="M 30.123 33.877 C 23.011 33.877 17.247 28.997 17.247 22.978 C 17.247 16.958 23.012 12.078 30.123 12.078 C 37.234 12.078 43 16.958 43 22.978 C 43 26.426 41.106 29.498 38.155 31.495 L 38.925 35 C 38.925 35 36.439 33.424 35.19 33 C 33.635 33.564 31.923 33.877 30.124 33.877 Z M 25.753 17.738 C 24.869 17.738 24.153 18.454 24.153 19.337 C 24.153 20.22 24.869 20.936 25.753 20.936 C 26.637 20.936 27.354 20.22 27.354 19.337 C 27.354 18.454 26.637 17.738 25.753 17.738 Z M 34.549 17.738 C 33.665 17.738 32.948 18.454 32.948 19.337 C 32.948 20.22 33.665 20.936 34.549 20.936 C 35.433 20.936 36.149 20.22 36.149 19.337 C 36.149 18.454 35.433 17.738 34.549 17.738 Z" fill="rgb(255, 255, 255)"></path><path d="M 15.822 22.915 C 15.822 16.23 22.225 10.81 30.123 10.81 C 30.338 10.81 30.547 10.829 30.759 10.837 C 29.479 4.682 23.145 0 15.504 0 C 6.942 0 0 5.876 0 13.124 C 0 17.276 2.28 20.974 5.835 23.379 L 4.908 27.6 C 4.908 27.6 7.9 25.703 9.404 25.191 C 11.277 25.871 13.339 26.247 15.505 26.247 C 15.798 26.247 16.084 26.224 16.372 26.211 C 16.022 25.161 15.822 24.06 15.822 22.915 Z M 20.766 6.814 C 21.831 6.814 22.694 7.676 22.694 8.74 C 22.694 9.804 21.831 10.666 20.766 10.666 C 19.702 10.666 18.84 9.804 18.84 8.74 C 18.84 7.676 19.702 6.814 20.766 6.814 Z M 10.175 10.666 C 9.111 10.666 8.248 9.804 8.248 8.74 C 8.248 7.676 9.111 6.814 10.175 6.814 C 11.239 6.814 12.103 7.676 12.103 8.74 C 12.103 9.804 11.24 10.666 10.175 10.666 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                p(S, {
                                  className: `framer-ksgoc0`,
                                  layoutDependency: x,
                                  layoutId: `yBJpJ8mI9`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.753 22.922" overflow="visible"><path d="M 12.876 21.799 C 5.765 21.799 0 16.919 0 10.899 C 0 4.88 5.765 0 12.876 0 C 19.987 0 25.753 4.88 25.753 10.899 C 25.753 14.347 23.86 17.419 20.908 19.416 L 21.678 22.922 C 21.678 22.922 19.192 21.346 17.944 20.922 C 16.388 21.486 14.676 21.799 12.877 21.799 Z M 8.507 5.659 C 7.623 5.659 6.906 6.375 6.906 7.259 C 6.906 8.142 7.623 8.858 8.507 8.858 C 9.391 8.858 10.107 8.142 10.107 7.259 C 10.107 6.375 9.391 5.659 8.507 5.659 Z M 17.302 5.659 C 16.418 5.659 15.702 6.375 15.702 7.259 C 15.702 8.142 16.418 8.858 17.302 8.858 C 18.186 8.858 18.903 8.142 18.903 7.259 C 18.903 6.375 18.186 5.659 17.302 5.659 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "OU2pG3pPl-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.94 29.471" overflow="visible"><path d="M 16.47 28.027 C 7.373 28.027 0 21.753 0 14.014 C 0 6.274 7.374 0 16.47 0 C 25.565 0 32.94 6.274 32.94 14.014 C 32.94 18.447 30.518 22.396 26.743 24.964 L 27.728 29.471 C 27.728 29.471 24.548 27.445 22.951 26.9 C 20.962 27.625 18.772 28.027 16.471 28.027 Z M 10.881 7.276 C 9.75 7.276 8.833 8.197 8.833 9.333 C 8.833 10.468 9.75 11.389 10.881 11.389 C 12.011 11.389 12.928 10.468 12.928 9.333 C 12.928 8.197 12.011 7.276 10.881 7.276 Z M 22.131 7.276 C 21 7.276 20.084 8.197 20.084 9.333 C 20.084 10.468 21 11.389 22.131 11.389 C 23.261 11.389 24.178 10.468 24.178 9.333 C 24.178 8.197 23.261 7.276 22.131 7.276 Z" fill="rgb(0, 216, 10)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-1mhsm1s`,
                                      layoutDependency: x,
                                      layoutId: `bHs0XQSKC`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.753 22.922" overflow="visible"><path d="M 12.876 21.799 C 5.765 21.799 0 16.919 0 10.899 C 0 4.88 5.765 0 12.876 0 C 19.987 0 25.753 4.88 25.753 10.899 C 25.753 14.347 23.86 17.419 20.908 19.416 L 21.678 22.922 C 21.678 22.922 19.192 21.346 17.944 20.922 C 16.388 21.486 14.676 21.799 12.877 21.799 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "OU2pG3pPl-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.94 29.471" overflow="visible"><path d="M 16.47 28.027 C 7.373 28.027 0 21.753 0 14.014 C 0 6.274 7.374 0 16.47 0 C 25.565 0 32.94 6.274 32.94 14.014 C 32.94 18.447 30.518 22.396 26.743 24.964 L 27.728 29.471 C 27.728 29.471 24.548 27.445 22.951 26.9 C 20.962 27.625 18.772 28.027 16.471 28.027 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1gs8skh`,
                                      layoutDependency: x,
                                      layoutId: `wOa6XpnUw`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.201 3.199" overflow="visible"><path d="M 1.601 0 C 0.717 0 0 0.716 0 1.599 C 0 2.483 0.717 3.199 1.601 3.199 C 2.484 3.199 3.201 2.483 3.201 1.599 C 3.201 0.716 2.484 0 1.601 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "OU2pG3pPl-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.094 4.113" overflow="visible"><path d="M 2.047 0 C 0.917 0 0 0.921 0 2.056 C 0 3.192 0.917 4.113 2.047 4.113 C 3.178 4.113 4.094 3.192 4.094 2.056 C 4.094 0.921 3.178 0 2.047 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-miastb`,
                                      layoutDependency: x,
                                      layoutId: `FrmQQAJCd`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.201 3.199" overflow="visible"><path d="M 1.601 0 C 0.717 0 0 0.716 0 1.599 C 0 2.483 0.717 3.199 1.601 3.199 C 2.484 3.199 3.201 2.483 3.201 1.599 C 3.201 0.716 2.484 0 1.601 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "OU2pG3pPl-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.094 4.113" overflow="visible"><path d="M 2.047 0 C 0.917 0 0 0.921 0 2.056 C 0 3.192 0.917 4.113 2.047 4.113 C 3.178 4.113 4.094 3.192 4.094 2.056 C 4.094 0.921 3.178 0 2.047 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                p(S, {
                                  className: `framer-oya6zw`,
                                  layoutDependency: x,
                                  layoutId: `hXwYNBWZI`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.759 27.6" overflow="visible"><path d="M 15.822 22.915 C 15.822 16.23 22.225 10.81 30.123 10.81 C 30.338 10.81 30.547 10.829 30.759 10.837 C 29.479 4.682 23.145 0 15.504 0 C 6.942 0 0 5.876 0 13.124 C 0 17.276 2.28 20.974 5.835 23.379 L 4.908 27.6 C 4.908 27.6 7.9 25.703 9.404 25.191 C 11.277 25.871 13.339 26.247 15.505 26.247 C 15.798 26.247 16.084 26.224 16.372 26.211 C 16.022 25.161 15.822 24.06 15.822 22.915 Z M 20.766 6.814 C 21.831 6.814 22.694 7.676 22.694 8.74 C 22.694 9.804 21.831 10.666 20.766 10.666 C 19.702 10.666 18.84 9.804 18.84 8.74 C 18.84 7.676 19.702 6.814 20.766 6.814 Z M 10.175 10.666 C 9.111 10.666 8.248 9.804 8.248 8.74 C 8.248 7.676 9.111 6.814 10.175 6.814 C 11.239 6.814 12.103 7.676 12.103 8.74 C 12.103 9.804 11.24 10.666 10.175 10.666 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "OU2pG3pPl-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.343 35.485" overflow="visible"><path d="M 20.237 29.463 C 20.237 20.867 28.427 13.899 38.529 13.899 C 38.804 13.899 39.071 13.923 39.343 13.933 C 37.705 6.019 29.604 0 19.831 0 C 8.879 0 0 7.555 0 16.874 C 0 22.211 2.916 26.966 7.463 30.059 L 6.277 35.485 C 6.277 35.485 10.105 33.046 12.029 32.389 C 14.424 33.262 17.061 33.747 19.832 33.747 C 20.207 33.747 20.572 33.716 20.942 33.699 C 20.494 32.35 20.237 30.934 20.237 29.463 Z M 26.562 8.761 C 27.923 8.761 29.027 9.87 29.027 11.237 C 29.027 12.605 27.923 13.714 26.562 13.714 C 25.2 13.714 24.097 12.605 24.097 11.237 C 24.097 9.87 25.2 8.761 26.562 8.761 Z M 13.015 13.714 C 11.653 13.714 10.55 12.605 10.55 11.237 C 10.55 9.87 11.654 8.761 13.015 8.761 C 14.375 8.761 15.48 9.87 15.48 11.237 C 15.48 12.605 14.376 13.714 13.015 13.714 Z" fill="rgb(0, 216, 10)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-1g6xp93`,
                                      layoutDependency: x,
                                      layoutId: `Oey6QNvnc`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.759 27.6" overflow="visible"><path d="M 15.822 22.915 C 15.822 16.23 22.225 10.81 30.123 10.81 C 30.338 10.81 30.547 10.829 30.759 10.837 C 29.479 4.682 23.145 0 15.504 0 C 6.942 0 0 5.876 0 13.124 C 0 17.276 2.28 20.974 5.835 23.379 L 4.908 27.6 C 4.908 27.6 7.9 25.703 9.404 25.191 C 11.277 25.871 13.339 26.247 15.505 26.247 C 15.798 26.247 16.084 26.224 16.372 26.211 C 16.022 25.161 15.822 24.06 15.822 22.915 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "OU2pG3pPl-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.343 35.485" overflow="visible"><path d="M 20.237 29.463 C 20.237 20.867 28.427 13.899 38.529 13.899 C 38.804 13.899 39.071 13.923 39.343 13.933 C 37.705 6.019 29.604 0 19.831 0 C 8.879 0 0 7.555 0 16.874 C 0 22.211 2.916 26.966 7.463 30.059 L 6.277 35.485 C 6.277 35.485 10.105 33.046 12.029 32.389 C 14.424 33.262 17.061 33.747 19.832 33.747 C 20.207 33.747 20.572 33.716 20.942 33.699 C 20.494 32.35 20.237 30.934 20.237 29.463 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-yrukru`,
                                      layoutDependency: x,
                                      layoutId: `OzoPto6CU`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.854 3.852" overflow="visible"><path d="M 1.927 0 C 2.991 0 3.854 0.862 3.854 1.926 C 3.854 2.99 2.991 3.852 1.927 3.852 C 0.862 3.852 0 2.99 0 1.926 C 0 0.862 0.862 0 1.927 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "OU2pG3pPl-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.93 4.953" overflow="visible"><path d="M 2.465 0 C 3.826 0 4.93 1.109 4.93 2.477 C 4.93 3.844 3.826 4.953 2.465 4.953 C 1.103 4.953 0 3.844 0 2.477 C 0 1.109 1.103 0 2.465 0 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-18jugt4`,
                                      layoutDependency: x,
                                      layoutId: `Mq7EcmABt`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.854 3.852" overflow="visible"><path d="M 1.927 3.852 C 0.862 3.852 0 2.99 0 1.926 C 0 0.862 0.863 0 1.927 0 C 2.991 0 3.854 0.862 3.854 1.926 C 3.854 2.99 2.991 3.852 1.927 3.852 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "OU2pG3pPl-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.93 4.953" overflow="visible"><path d="M 2.465 4.953 C 1.103 4.953 0 3.844 0 2.477 C 0 1.109 1.104 0 2.465 0 C 3.825 0 4.93 1.109 4.93 2.477 C 4.93 3.844 3.826 4.953 2.465 4.953 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      Xe() &&
                        l(S, {
                          className: `framer-1pmvthu`,
                          "data-framer-name": `Whatsapp logo`,
                          layoutDependency: x,
                          layoutId: `Owt2xPoYs`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "j2sBye_U0-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46" overflow="visible"><g><g><path d="M 0 46 L 3.306 33.695 C 1.434 30.326 0.449 26.551 0.449 22.72 C 0.449 10.192 10.666 0 23.225 0 C 35.783 0 46 10.192 46 22.72 C 46 35.248 35.783 45.44 23.225 45.44 C 19.455 45.44 15.731 44.49 12.399 42.687 Z M 13.014 38.076 L 13.795 38.54 C 16.661 40.244 19.922 41.145 23.224 41.145 C 33.408 41.145 41.695 32.879 41.695 22.719 C 41.695 12.558 33.409 4.295 23.225 4.295 C 13.04 4.295 4.754 12.559 4.754 22.72 C 4.754 26.074 5.688 29.377 7.455 32.273 L 7.934 33.058 L 6.089 39.928 L 13.015 38.077 Z" fill="rgb(0, 222, 106)"></path><path d="M 31.678 25.895 C 30.74 25.336 29.521 24.712 28.416 25.162 C 27.568 25.508 27.027 26.831 26.478 27.506 C 26.196 27.853 25.86 27.907 25.428 27.733 C 22.248 26.469 19.81 24.352 18.056 21.433 C 17.758 20.979 17.812 20.622 18.17 20.201 C 18.701 19.579 19.366 18.872 19.509 18.032 C 19.652 17.193 19.257 16.212 18.91 15.465 C 18.465 14.51 17.968 13.148 17.01 12.608 C 16.128 12.111 14.967 12.39 14.182 13.028 C 12.827 14.129 12.173 15.854 12.192 17.564 C 12.198 18.049 12.257 18.535 12.371 19.003 C 12.644 20.131 13.166 21.184 13.755 22.185 C 14.198 22.941 14.68 23.672 15.2 24.378 C 16.901 26.683 19.017 28.686 21.467 30.184 C 22.691 30.932 24.01 31.588 25.376 32.038 C 26.908 32.542 28.273 33.068 29.927 32.755 C 31.658 32.427 33.365 31.358 34.053 29.693 C 34.256 29.2 34.358 28.651 34.244 28.131 C 34.008 27.055 32.548 26.415 31.676 25.895 Z" fill="rgb(0, 222, 106)"></path></g></g></svg>`,
                              },
                              j2sBye_U0: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><g><g><path d="M 0 34 L 2.444 24.905 C 1.06 22.415 0.332 19.625 0.332 16.793 C 0.332 7.533 7.884 0 17.166 0 C 26.448 0 34 7.533 34 16.793 C 34 26.053 26.448 33.586 17.166 33.586 C 14.38 33.586 11.627 32.884 9.164 31.551 Z M 9.619 28.143 L 10.196 28.486 C 12.315 29.745 14.725 30.411 17.165 30.411 C 24.693 30.411 30.818 24.302 30.818 16.792 C 30.818 9.282 24.694 3.175 17.166 3.175 C 9.638 3.175 3.514 9.283 3.514 16.793 C 3.514 19.272 4.204 21.714 5.51 23.854 L 5.864 24.434 L 4.501 29.512 L 9.62 28.144 Z" fill="rgb(255, 255, 255)"></path><path d="M 23.414 19.14 C 22.721 18.727 21.82 18.265 21.003 18.598 C 20.376 18.853 19.977 19.832 19.571 20.331 C 19.362 20.587 19.114 20.627 18.795 20.498 C 16.444 19.564 14.642 17.999 13.345 15.842 C 13.125 15.506 13.165 15.242 13.43 14.931 C 13.822 14.471 14.314 13.949 14.42 13.328 C 14.525 12.708 14.234 11.983 13.977 11.431 C 13.648 10.725 13.281 9.718 12.573 9.319 C 11.921 8.952 11.063 9.158 10.482 9.629 C 9.481 10.443 8.997 11.718 9.012 12.982 C 9.016 13.341 9.06 13.7 9.144 14.046 C 9.346 14.88 9.732 15.658 10.167 16.398 C 10.494 16.956 10.851 17.497 11.235 18.018 C 12.492 19.722 14.056 21.203 15.867 22.31 C 16.772 22.862 17.747 23.347 18.756 23.68 C 19.888 24.053 20.897 24.442 22.12 24.21 C 23.4 23.968 24.661 23.177 25.169 21.947 C 25.32 21.583 25.395 21.177 25.31 20.793 C 25.137 19.997 24.057 19.524 23.412 19.14 Z" fill="rgb(255, 255, 255)"></path></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            Ze() &&
                            p(S, {
                              className: `framer-hq36hr`,
                              layoutDependency: x,
                              layoutId: `k9VpNEb6b`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "j2sBye_U0-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46" overflow="visible"><g><path d="M 0 46 L 3.306 33.695 C 1.434 30.326 0.449 26.551 0.449 22.72 C 0.449 10.192 10.666 0 23.225 0 C 35.783 0 46 10.192 46 22.72 C 46 35.248 35.783 45.44 23.225 45.44 C 19.455 45.44 15.731 44.49 12.399 42.687 Z M 13.014 38.076 L 13.795 38.54 C 16.661 40.244 19.922 41.145 23.224 41.145 C 33.408 41.145 41.695 32.879 41.695 22.719 C 41.695 12.558 33.409 4.295 23.225 4.295 C 13.04 4.295 4.754 12.559 4.754 22.72 C 4.754 26.074 5.688 29.377 7.455 32.273 L 7.934 33.058 L 6.089 39.928 L 13.015 38.077 Z" fill="rgb(0, 222, 106)"></path><path d="M 31.678 25.895 C 30.74 25.336 29.521 24.712 28.416 25.162 C 27.568 25.508 27.027 26.831 26.478 27.506 C 26.196 27.853 25.86 27.907 25.428 27.733 C 22.248 26.469 19.81 24.352 18.056 21.433 C 17.758 20.979 17.812 20.622 18.17 20.201 C 18.701 19.579 19.366 18.872 19.509 18.032 C 19.652 17.193 19.257 16.212 18.91 15.465 C 18.465 14.51 17.968 13.148 17.01 12.608 C 16.128 12.111 14.967 12.39 14.182 13.028 C 12.827 14.129 12.173 15.854 12.192 17.564 C 12.198 18.049 12.257 18.535 12.371 19.003 C 12.644 20.131 13.166 21.184 13.755 22.185 C 14.198 22.941 14.68 23.672 15.2 24.378 C 16.901 26.683 19.017 28.686 21.467 30.184 C 22.691 30.932 24.01 31.588 25.376 32.038 C 26.908 32.542 28.273 33.068 29.927 32.755 C 31.658 32.427 33.365 31.358 34.053 29.693 C 34.256 29.2 34.358 28.651 34.244 28.131 C 34.008 27.055 32.548 26.415 31.676 25.895 Z" fill="rgb(0, 222, 106)"></path></g></svg>`,
                                  },
                                  j2sBye_U0: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><g><path d="M 0 34 L 2.444 24.905 C 1.06 22.415 0.332 19.625 0.332 16.793 C 0.332 7.533 7.884 0 17.166 0 C 26.448 0 34 7.533 34 16.793 C 34 26.053 26.448 33.586 17.166 33.586 C 14.38 33.586 11.627 32.884 9.164 31.551 Z M 9.619 28.143 L 10.196 28.486 C 12.315 29.745 14.725 30.411 17.165 30.411 C 24.693 30.411 30.818 24.302 30.818 16.792 C 30.818 9.282 24.694 3.175 17.166 3.175 C 9.638 3.175 3.514 9.283 3.514 16.793 C 3.514 19.272 4.204 21.714 5.51 23.854 L 5.864 24.434 L 4.501 29.512 L 9.62 28.144 Z" fill="rgb(255, 255, 255)"></path><path d="M 23.414 19.14 C 22.721 18.727 21.82 18.265 21.003 18.598 C 20.376 18.853 19.977 19.832 19.571 20.331 C 19.362 20.587 19.114 20.627 18.795 20.498 C 16.444 19.564 14.642 17.999 13.345 15.842 C 13.125 15.506 13.165 15.242 13.43 14.931 C 13.822 14.471 14.314 13.949 14.42 13.328 C 14.525 12.708 14.234 11.983 13.977 11.431 C 13.648 10.725 13.281 9.718 12.573 9.319 C 11.921 8.952 11.063 9.158 10.482 9.629 C 9.481 10.443 8.997 11.718 9.012 12.982 C 9.016 13.341 9.06 13.7 9.144 14.046 C 9.346 14.88 9.732 15.658 10.167 16.398 C 10.494 16.956 10.851 17.497 11.235 18.018 C 12.492 19.722 14.056 21.203 15.867 22.31 C 16.772 22.862 17.747 23.347 18.756 23.68 C 19.888 24.053 20.897 24.442 22.12 24.21 C 23.4 23.968 24.661 23.177 25.169 21.947 C 25.32 21.583 25.395 21.177 25.31 20.793 C 25.137 19.997 24.057 19.524 23.412 19.14 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                p(S, {
                                  className: `framer-1ryluz6`,
                                  layoutDependency: x,
                                  layoutId: `nxkcprbt5`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><path d="M 0 34 L 2.444 24.905 C 1.06 22.415 0.332 19.625 0.332 16.793 C 0.332 7.533 7.884 0 17.166 0 C 26.448 0 34 7.533 34 16.793 C 34 26.053 26.448 33.586 17.166 33.586 C 14.38 33.586 11.627 32.884 9.164 31.551 Z M 9.619 28.143 L 10.196 28.486 C 12.315 29.745 14.725 30.411 17.165 30.411 C 24.693 30.411 30.818 24.302 30.818 16.792 C 30.818 9.282 24.694 3.175 17.166 3.175 C 9.638 3.175 3.514 9.283 3.514 16.793 C 3.514 19.272 4.204 21.714 5.51 23.854 L 5.864 24.434 L 4.501 29.512 L 9.62 28.144 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "j2sBye_U0-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46" overflow="visible"><path d="M 0 46 L 3.306 33.695 C 1.434 30.326 0.449 26.551 0.449 22.72 C 0.449 10.192 10.666 0 23.225 0 C 35.783 0 46 10.192 46 22.72 C 46 35.248 35.783 45.44 23.225 45.44 C 19.455 45.44 15.731 44.49 12.399 42.687 Z M 13.014 38.076 L 13.795 38.54 C 16.661 40.244 19.922 41.145 23.224 41.145 C 33.408 41.145 41.695 32.879 41.695 22.719 C 41.695 12.558 33.409 4.295 23.225 4.295 C 13.04 4.295 4.754 12.559 4.754 22.72 C 4.754 26.074 5.688 29.377 7.455 32.273 L 7.934 33.058 L 6.089 39.928 L 13.015 38.077 Z" fill="rgb(0, 222, 106)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-14aw51n`,
                                      layoutDependency: x,
                                      layoutId: `LpsgMBN0R`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><path d="M 0 34 L 2.444 24.905 C 1.06 22.415 0.332 19.625 0.332 16.793 C 0.332 7.533 7.884 0 17.166 0 C 26.448 0 34 7.533 34 16.793 C 34 26.053 26.448 33.586 17.166 33.586 C 14.38 33.586 11.627 32.884 9.164 31.551 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "j2sBye_U0-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46" overflow="visible"><path d="M 0 46 L 3.306 33.695 C 1.434 30.326 0.449 26.551 0.449 22.72 C 0.449 10.192 10.666 0 23.225 0 C 35.783 0 46 10.192 46 22.72 C 46 35.248 35.783 45.44 23.225 45.44 C 19.455 45.44 15.731 44.49 12.399 42.687 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-6p85hr`,
                                      layoutDependency: x,
                                      layoutId: `IXWuqPBCF`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.304 27.237" overflow="visible"><path d="M 6.106 24.968 L 6.682 25.312 C 8.801 26.571 11.212 27.237 13.652 27.237 C 21.179 27.237 27.304 21.128 27.304 13.618 C 27.304 6.108 21.18 0 13.652 0 C 6.125 0 0 6.108 0 13.618 C 0 16.098 0.69 18.539 1.997 20.68 L 2.351 21.259 L 0.987 26.337 L 6.106 24.969 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "j2sBye_U0-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36.941 36.85" overflow="visible"><path d="M 8.261 33.781 L 9.041 34.245 C 11.908 35.949 15.169 36.85 18.47 36.85 C 28.654 36.85 36.941 28.584 36.941 18.424 C 36.941 8.263 28.655 0 18.471 0 C 8.286 0 0 8.264 0 18.425 C 0 21.779 0.934 25.082 2.701 27.978 L 3.18 28.763 L 1.335 35.633 L 8.262 33.782 Z" fill="transparent"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                  ],
                                }),
                                l(S, {
                                  className: `framer-mjo4tx`,
                                  layoutDependency: x,
                                  layoutId: `L0Fqr5M6m`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.335 15.149" overflow="visible"><path d="M 14.403 10.009 C 13.709 9.596 12.808 9.134 11.992 9.467 C 11.365 9.723 10.966 10.701 10.56 11.2 C 10.351 11.456 10.103 11.496 9.784 11.368 C 7.433 10.433 5.631 8.868 4.334 6.711 C 4.114 6.375 4.154 6.111 4.419 5.801 C 4.811 5.34 5.303 4.818 5.408 4.197 C 5.514 3.577 5.223 2.852 4.966 2.3 C 4.637 1.594 4.27 0.587 3.562 0.188 C 2.909 -0.179 2.052 0.027 1.471 0.498 C 0.469 1.312 -0.014 2.587 0 3.851 C 0.005 4.21 0.049 4.569 0.132 4.915 C 0.334 5.749 0.72 6.527 1.155 7.267 C 1.483 7.825 1.84 8.366 2.223 8.887 C 3.481 10.591 5.045 12.072 6.856 13.179 C 7.761 13.732 8.736 14.216 9.745 14.549 C 10.877 14.922 11.886 15.311 13.108 15.079 C 14.388 14.837 15.65 14.047 16.158 12.816 C 16.308 12.452 16.384 12.046 16.299 11.662 C 16.125 10.866 15.046 10.394 14.401 10.009 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "j2sBye_U0-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.1 20.496" overflow="visible"><path d="M 19.486 13.542 C 18.548 12.983 17.329 12.358 16.224 12.808 C 15.376 13.154 14.836 14.477 14.287 15.153 C 14.005 15.499 13.669 15.554 13.237 15.38 C 10.056 14.116 7.619 11.998 5.864 9.079 C 5.566 8.625 5.62 8.268 5.978 7.848 C 6.509 7.225 7.174 6.519 7.317 5.679 C 7.46 4.84 7.066 3.858 6.718 3.111 C 6.274 2.157 5.777 0.795 4.819 0.255 C 3.936 -0.242 2.776 0.036 1.99 0.674 C 0.635 1.775 -0.019 3.5 0 5.21 C 0.006 5.696 0.066 6.181 0.179 6.65 C 0.453 7.778 0.975 8.83 1.563 9.832 C 2.007 10.587 2.489 11.319 3.008 12.024 C 4.709 14.329 6.826 16.332 9.276 17.83 C 10.5 18.578 11.819 19.234 13.185 19.684 C 14.716 20.189 16.081 20.715 17.735 20.401 C 19.467 20.074 21.174 19.004 21.861 17.34 C 22.064 16.847 22.166 16.298 22.052 15.778 C 21.817 14.702 20.357 14.062 19.484 13.542 Z" fill="rgb(0, 222, 106)"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      Qe() &&
                        l(S, {
                          className: `framer-1okxty9`,
                          "data-framer-name": `Wikipedia logo`,
                          layoutDependency: x,
                          layoutId: `eAER60zYP`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 18" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "adguRWWdy-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 18" overflow="visible"><g><g><g transform="translate(0.641 11.722)"><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(255, 255, 255)"></path><path d="M 9.456 4.184 C 9.19 4.534 8.829 4.77 8.322 4.77 C 7.842 4.77 7.528 4.609 7.301 4.339 C 7.081 4.084 6.988 3.72 6.988 3.343 C 6.988 2.317 7.741 1.758 8.322 1.758 C 9.25 1.758 9.45 2.366 9.45 2.931 C 9.45 3.005 9.403 3.045 9.323 3.045 L 7.548 3.032 C 7.548 3.423 7.628 3.733 7.762 3.955 C 7.969 4.298 8.249 4.44 8.489 4.44 C 8.876 4.44 9.069 4.333 9.316 4.077 C 9.396 4.083 9.437 4.118 9.456 4.184 Z M 8.775 2.783 C 8.849 2.782 8.875 2.75 8.875 2.688 C 8.875 2.121 8.575 1.981 8.322 1.981 C 8.161 1.981 7.694 2.042 7.568 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 12.23 2.528 L 12.23 3.881 C 12.23 4.441 12.343 4.474 12.81 4.494 C 12.851 4.535 12.851 4.677 12.81 4.717 C 12.477 4.709 12.283 4.704 11.95 4.704 C 11.616 4.704 11.409 4.711 11.082 4.717 C 11.042 4.676 11.042 4.534 11.082 4.494 C 11.549 4.474 11.662 4.44 11.662 3.881 L 11.662 1.18 C 11.662 0.622 11.549 0.586 11.082 0.566 C 11.042 0.525 11.042 0.382 11.082 0.342 C 11.416 0.35 11.943 0.356 11.943 0.356 L 13.646 0.356 C 13.805 0.356 13.844 0.352 13.96 0.329 C 13.976 0.329 13.984 0.334 13.986 0.349 C 13.996 0.401 14.096 1.05 14.131 1.326 L 13.924 1.359 C 13.777 0.894 13.67 0.625 13.17 0.625 L 12.47 0.625 C 12.309 0.625 12.229 0.692 12.229 0.854 L 12.229 2.268 L 12.85 2.268 C 13.417 2.268 13.437 2.181 13.457 1.81 C 13.498 1.77 13.637 1.77 13.678 1.81 C 13.671 2.012 13.665 2.161 13.665 2.39 C 13.665 2.619 13.671 2.746 13.678 2.982 C 13.637 3.023 13.498 3.023 13.457 2.982 C 13.438 2.679 13.417 2.524 12.85 2.524 L 12.229 2.524 L 12.229 2.527 Z" fill="rgb(255, 255, 255)"></path><path d="M 14.405 2.111 C 14.378 2.07 14.378 1.963 14.392 1.923 C 14.852 1.862 15.119 1.801 15.305 1.728 C 15.359 1.728 15.392 1.748 15.392 1.776 C 15.392 1.776 15.359 2.099 15.359 2.315 C 15.359 2.347 15.379 2.382 15.419 2.307 C 15.573 2.045 15.846 1.749 16.159 1.749 C 16.44 1.749 16.56 1.943 16.56 2.071 C 16.56 2.241 16.406 2.408 16.246 2.408 C 16.106 2.408 16.039 2.28 15.973 2.213 C 15.933 2.173 15.88 2.166 15.833 2.166 C 15.753 2.166 15.599 2.388 15.526 2.496 C 15.446 2.617 15.366 2.771 15.366 2.947 L 15.366 3.885 C 15.366 4.443 15.446 4.464 15.913 4.498 C 15.953 4.539 15.953 4.681 15.913 4.72 C 15.626 4.713 15.379 4.707 15.106 4.707 C 14.832 4.707 14.625 4.714 14.345 4.72 C 14.304 4.681 14.304 4.538 14.345 4.498 C 14.758 4.47 14.838 4.444 14.838 3.885 L 14.838 2.571 C 14.838 2.199 14.765 2.146 14.405 2.112 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.289 4.184 C 19.022 4.534 18.662 4.77 18.155 4.77 C 17.675 4.77 17.361 4.609 17.134 4.339 C 16.914 4.084 16.821 3.72 16.821 3.343 C 16.821 2.317 17.574 1.758 18.155 1.758 C 19.083 1.758 19.282 2.366 19.282 2.931 C 19.282 3.005 19.235 3.045 19.155 3.045 L 17.381 3.032 C 17.381 3.423 17.461 3.733 17.595 3.955 C 17.802 4.298 18.082 4.44 18.322 4.44 C 18.709 4.44 18.902 4.333 19.149 4.077 C 19.229 4.083 19.269 4.118 19.289 4.184 Z M 18.608 2.783 C 18.682 2.782 18.708 2.75 18.708 2.688 C 18.708 2.121 18.408 1.981 18.154 1.981 C 17.994 1.981 17.527 2.042 17.401 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 22.291 4.184 C 22.024 4.534 21.663 4.77 21.157 4.77 C 20.676 4.77 20.363 4.609 20.136 4.339 C 19.915 4.084 19.822 3.72 19.822 3.343 C 19.822 2.317 20.576 1.758 21.157 1.758 C 22.084 1.758 22.284 2.366 22.284 2.931 C 22.284 3.005 22.237 3.045 22.157 3.045 L 20.383 3.032 C 20.383 3.423 20.463 3.733 20.596 3.955 C 20.803 4.298 21.083 4.44 21.323 4.44 C 21.71 4.44 21.904 4.333 22.15 4.077 C 22.23 4.083 22.271 4.118 22.291 4.184 Z M 21.611 2.783 C 21.684 2.782 21.71 2.75 21.71 2.688 C 21.71 2.121 21.41 1.981 21.157 1.981 C 20.997 1.981 20.529 2.042 20.403 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.279 1.814 C 26.32 1.773 26.459 1.773 26.5 1.814 C 26.493 2.016 26.487 2.164 26.487 2.393 C 26.487 2.622 26.493 2.75 26.5 2.986 C 26.459 3.027 26.32 3.027 26.279 2.986 C 26.26 2.683 26.239 2.528 25.672 2.528 L 25.065 2.528 L 25.065 4.151 C 25.065 4.334 25.158 4.441 25.305 4.441 L 26.212 4.441 C 26.718 4.441 26.952 4.043 27.086 3.559 C 27.173 3.538 27.25 3.553 27.319 3.592 C 27.266 3.935 27.166 4.38 27.073 4.718 C 27.073 4.718 26.539 4.704 26.218 4.704 L 24.784 4.704 C 24.784 4.704 24.243 4.712 23.917 4.718 C 23.876 4.677 23.876 4.535 23.917 4.495 C 24.384 4.475 24.497 4.441 24.497 3.882 L 24.497 1.181 C 24.497 0.622 24.384 0.587 23.917 0.567 C 23.876 0.526 23.876 0.383 23.917 0.343 C 24.25 0.351 24.777 0.357 24.777 0.357 L 26.478 0.357 C 26.638 0.357 26.692 0.35 26.805 0.33 C 26.825 0.33 26.832 0.337 26.832 0.35 C 26.845 0.404 26.945 1.051 26.978 1.327 C 26.913 1.359 26.841 1.372 26.758 1.36 C 26.611 0.895 26.505 0.626 26.005 0.626 L 25.304 0.626 C 25.144 0.626 25.064 0.761 25.064 0.922 L 25.064 2.269 L 25.671 2.269 C 26.238 2.272 26.258 2.185 26.279 1.814 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.769 1.746 C 30.002 1.746 30.209 1.826 30.322 1.974 C 30.476 2.183 30.502 2.506 30.502 2.876 L 30.502 3.88 C 30.502 4.432 30.577 4.46 30.95 4.494 C 30.983 4.534 30.983 4.676 30.95 4.716 C 30.663 4.709 30.516 4.703 30.243 4.703 C 29.971 4.703 29.844 4.71 29.562 4.716 C 29.529 4.675 29.529 4.534 29.562 4.494 C 29.909 4.46 29.976 4.433 29.976 3.88 L 29.976 2.855 C 29.976 2.653 29.963 2.472 29.896 2.337 C 29.816 2.182 29.676 2.095 29.543 2.095 C 29.283 2.095 29.022 2.242 28.769 2.492 C 28.715 2.553 28.655 2.634 28.655 2.776 L 28.655 3.88 C 28.655 4.432 28.716 4.46 29.056 4.494 C 29.096 4.534 29.096 4.676 29.056 4.716 C 28.775 4.709 28.655 4.703 28.395 4.703 C 28.108 4.703 27.935 4.71 27.662 4.716 C 27.621 4.675 27.621 4.534 27.662 4.494 C 28.062 4.46 28.129 4.433 28.129 3.88 L 28.129 2.567 C 28.129 2.176 28.055 2.143 27.696 2.11 C 27.682 2.069 27.669 1.961 27.682 1.921 C 28.143 1.861 28.416 1.8 28.603 1.726 C 28.657 1.726 28.684 1.746 28.684 1.78 C 28.684 1.78 28.65 2.091 28.65 2.291 C 28.65 2.386 28.698 2.318 28.717 2.291 C 29.124 1.835 29.444 1.746 29.771 1.746 Z" fill="rgb(255, 255, 255)"></path><path d="M 32.605 4.77 C 31.764 4.77 31.283 4.171 31.283 3.302 C 31.283 2.346 31.991 1.746 32.652 1.746 C 33.312 1.746 33.672 2.016 33.672 2.385 C 33.672 2.593 33.485 2.681 33.345 2.681 C 33.205 2.681 33.112 2.62 33.091 2.438 C 33.064 2.202 33.011 1.966 32.617 1.966 C 32.177 1.966 31.856 2.411 31.856 3.152 C 31.856 3.94 32.264 4.438 32.75 4.438 C 33.038 4.438 33.324 4.29 33.551 3.995 C 33.611 4.001 33.664 4.027 33.691 4.089 C 33.358 4.643 33.004 4.771 32.604 4.771 Z" fill="rgb(255, 255, 255)"></path><path d="M 34.573 6.267 C 34.392 6.267 34.259 6.158 34.259 6.018 C 34.259 5.93 34.359 5.728 34.553 5.728 C 34.627 5.728 34.652 5.748 34.746 5.748 C 34.912 5.748 35.006 5.688 35.079 5.553 C 35.179 5.344 35.26 5.158 35.34 4.934 C 35.406 4.745 35.305 4.435 35.246 4.299 L 34.49 2.528 C 34.309 2.099 34.255 2.05 33.965 2.022 C 33.925 1.981 33.925 1.839 33.965 1.799 C 34.099 1.806 34.278 1.811 34.506 1.811 C 34.747 1.811 35.013 1.806 35.26 1.799 C 35.3 1.84 35.3 1.982 35.26 2.022 C 34.85 2.055 34.921 2.176 35.041 2.461 L 35.632 3.861 C 35.688 3.995 35.745 3.977 35.791 3.869 L 36.454 2.326 C 36.558 2.081 36.343 2.043 36.133 2.023 C 36.092 1.982 36.092 1.84 36.133 1.8 C 36.379 1.807 36.507 1.812 36.74 1.812 C 36.927 1.812 37.048 1.806 37.213 1.8 C 37.253 1.841 37.253 1.983 37.213 2.023 C 36.967 2.043 36.767 2.259 36.672 2.454 C 36.319 3.208 36.028 3.903 35.491 5.203 C 35.41 5.402 35.322 5.595 35.218 5.782 C 34.979 6.214 34.711 6.268 34.571 6.268 Z" fill="rgb(255, 255, 255)"></path><path d="M 38.782 4.77 C 37.942 4.77 37.462 4.171 37.462 3.302 C 37.462 2.346 38.169 1.746 38.83 1.746 C 39.491 1.746 39.85 2.016 39.85 2.385 C 39.85 2.593 39.663 2.681 39.523 2.681 C 39.383 2.681 39.29 2.62 39.27 2.438 C 39.243 2.202 39.19 1.966 38.797 1.966 C 38.356 1.966 38.036 2.411 38.036 3.152 C 38.036 3.94 38.443 4.438 38.93 4.438 C 39.217 4.438 39.503 4.29 39.731 3.995 C 39.791 4.001 39.844 4.027 39.871 4.089 C 39.538 4.643 39.184 4.771 38.783 4.771 Z" fill="rgb(255, 255, 255)"></path><path d="M 40.645 0.938 C 40.645 0.372 40.565 0.407 40.218 0.387 C 40.178 0.347 40.164 0.239 40.178 0.184 C 40.444 0.164 40.944 0.07 41.112 0.002 C 41.171 0.002 41.198 0.022 41.198 0.07 C 41.198 0.07 41.17 0.339 41.17 0.777 L 41.17 3.882 C 41.17 4.442 41.245 4.475 41.652 4.495 C 41.692 4.536 41.692 4.678 41.652 4.718 C 41.363 4.71 41.198 4.704 40.911 4.704 C 40.625 4.704 40.444 4.712 40.164 4.718 C 40.123 4.677 40.123 4.535 40.164 4.495 C 40.57 4.475 40.645 4.441 40.645 3.882 L 40.645 0.939 Z" fill="rgb(255, 255, 255)"></path><path d="M 43.432 1.746 C 44.467 1.746 44.833 2.561 44.833 3.262 C 44.833 3.963 44.413 4.771 43.419 4.771 C 42.478 4.771 42.017 4.01 42.017 3.323 C 42.017 2.467 42.531 1.746 43.432 1.746 Z M 42.592 3.168 C 42.592 3.687 42.846 4.549 43.54 4.549 C 43.853 4.549 44.26 4.366 44.26 3.479 C 44.26 2.489 43.933 1.97 43.359 1.97 C 42.799 1.968 42.592 2.581 42.592 3.168 Z" fill="rgb(255, 255, 255)"></path><path d="M 47.108 1.746 C 47.789 1.746 48.289 2.405 48.289 3.119 C 48.289 3.665 48.109 4.081 47.795 4.392 C 47.522 4.656 47.189 4.769 46.815 4.769 C 46.604 4.769 46.398 4.732 46.234 4.665 C 46.166 4.637 46.141 4.629 46.141 4.716 L 46.141 5.443 C 46.141 6.002 46.215 6.029 46.688 6.057 C 46.728 6.097 46.728 6.239 46.688 6.278 C 46.401 6.273 46.195 6.265 45.88 6.265 C 45.587 6.265 45.413 6.273 45.133 6.278 C 45.093 6.238 45.093 6.095 45.133 6.055 C 45.54 6.035 45.614 6.001 45.614 5.442 L 45.614 2.566 C 45.614 2.182 45.54 2.141 45.18 2.107 C 45.167 2.066 45.152 1.96 45.167 1.919 C 45.626 1.859 45.887 1.798 46.075 1.724 C 46.129 1.724 46.163 1.744 46.163 1.771 C 46.163 1.771 46.135 1.96 46.135 2.202 C 46.135 2.251 46.173 2.244 46.195 2.222 C 46.494 1.915 46.861 1.745 47.109 1.745 Z M 46.141 2.743 L 46.141 3.996 C 46.141 4.239 46.168 4.279 46.3 4.399 C 46.421 4.508 46.654 4.541 46.775 4.541 C 47.522 4.541 47.715 3.854 47.715 3.3 C 47.715 2.54 47.348 2.056 46.921 2.056 C 46.726 2.056 46.454 2.231 46.248 2.446 C 46.162 2.537 46.141 2.603 46.141 2.745 Z" fill="rgb(255, 255, 255)"></path><path d="M 51.279 4.184 C 51.012 4.534 50.651 4.77 50.144 4.77 C 49.664 4.77 49.35 4.609 49.124 4.339 C 48.903 4.084 48.811 3.72 48.811 3.343 C 48.811 2.317 49.565 1.758 50.146 1.758 C 51.075 1.758 51.273 2.366 51.273 2.931 C 51.273 3.005 51.227 3.045 51.147 3.045 L 49.371 3.032 C 49.371 3.423 49.451 3.733 49.585 3.955 C 49.792 4.298 50.072 4.44 50.313 4.44 C 50.7 4.44 50.893 4.333 51.139 4.077 C 51.219 4.083 51.26 4.118 51.28 4.184 Z M 50.598 2.783 C 50.672 2.782 50.698 2.75 50.698 2.688 C 50.698 2.121 50.397 1.981 50.143 1.981 C 49.984 1.981 49.517 2.042 49.39 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 52.947 4.77 C 52.226 4.77 51.812 4.164 51.812 3.335 C 51.812 2.835 51.985 2.439 52.272 2.15 C 52.539 1.894 52.833 1.745 53.273 1.745 C 53.493 1.745 53.767 1.86 53.793 1.86 C 53.84 1.86 53.854 1.846 53.854 1.799 L 53.854 0.937 C 53.854 0.371 53.774 0.405 53.427 0.385 C 53.387 0.346 53.373 0.237 53.387 0.182 C 53.653 0.162 54.147 0.068 54.314 0.001 C 54.374 0.001 54.402 0.021 54.402 0.068 C 54.402 0.068 54.374 0.337 54.374 0.776 L 54.374 3.827 C 54.374 4.158 54.435 4.285 54.861 4.319 C 54.902 4.359 54.902 4.46 54.861 4.501 C 54.454 4.549 54.155 4.649 54.007 4.771 C 53.954 4.784 53.907 4.79 53.854 4.771 C 53.854 4.771 53.861 4.44 53.861 4.373 C 53.861 4.325 53.813 4.338 53.781 4.363 C 53.454 4.635 53.207 4.769 52.947 4.769 Z M 53.854 2.588 C 53.854 2.38 53.834 2.332 53.741 2.225 C 53.606 2.07 53.44 1.981 53.199 1.981 C 53.066 1.981 52.784 2.001 52.579 2.317 C 52.48 2.458 52.385 2.728 52.385 3.213 C 52.385 4.054 52.759 4.453 53.12 4.453 C 53.285 4.453 53.499 4.345 53.748 4.129 C 53.842 4.048 53.854 3.995 53.854 3.867 L 53.854 2.588 Z" fill="rgb(255, 255, 255)"></path><path d="M 56.582 4.494 C 56.623 4.535 56.623 4.677 56.582 4.717 C 56.295 4.709 56.128 4.704 55.842 4.704 C 55.555 4.704 55.376 4.711 55.094 4.717 C 55.056 4.676 55.056 4.534 55.094 4.494 C 55.501 4.461 55.575 4.44 55.575 3.881 L 55.575 2.568 C 55.575 2.185 55.505 2.146 55.141 2.111 C 55.128 2.07 55.113 1.962 55.128 1.922 C 55.588 1.861 55.852 1.801 56.042 1.726 C 56.095 1.726 56.127 1.746 56.127 1.774 C 56.127 1.774 56.101 2.205 56.101 2.541 L 56.101 3.884 C 56.101 4.442 56.174 4.468 56.58 4.495 Z M 55.841 0.345 C 56.022 0.345 56.16 0.533 56.16 0.695 C 56.16 0.837 56 1.018 55.814 1.018 C 55.654 1.018 55.494 0.843 55.494 0.667 C 55.494 0.507 55.681 0.345 55.841 0.345 Z" fill="rgb(255, 255, 255)"></path><path d="M 58.617 4.38 L 58.483 4.488 C 58.189 4.716 58.062 4.771 57.755 4.771 C 57.288 4.771 56.914 4.576 56.914 4.044 C 56.914 3.585 57.374 3.229 58.015 3.067 L 58.587 2.925 C 58.607 2.919 58.627 2.892 58.627 2.845 C 58.627 2.083 58.314 1.971 58.086 1.971 C 57.833 1.971 57.533 2.046 57.533 2.254 C 57.533 2.33 57.54 2.37 57.546 2.391 C 57.559 2.417 57.566 2.465 57.566 2.511 C 57.566 2.598 57.466 2.733 57.272 2.733 C 57.119 2.733 57.039 2.659 57.039 2.497 C 57.039 2.135 57.591 1.751 58.139 1.751 C 58.626 1.751 59.148 1.933 59.148 2.889 L 59.148 3.893 C 59.148 4.204 59.155 4.465 59.415 4.465 C 59.555 4.465 59.583 4.357 59.622 4.357 C 59.648 4.357 59.708 4.424 59.708 4.472 C 59.708 4.504 59.468 4.775 59.141 4.775 C 58.784 4.775 58.666 4.527 58.626 4.384 L 58.614 4.384 L 58.614 4.381 Z M 58.102 3.276 C 57.61 3.408 57.469 3.715 57.469 4.018 C 57.469 4.225 57.615 4.496 57.95 4.496 C 58.137 4.496 58.366 4.348 58.539 4.205 C 58.593 4.164 58.632 4.119 58.632 4.03 L 58.632 3.135 Z" fill="rgb(255, 255, 255)"></path></g><g><path d="M 5.516 1.87 C 5.516 1.87 5.328 1.484 5.264 1.355 C 4.835 0.5 4.845 0.454 4.412 0.396 C 4.291 0.38 4.228 0.364 4.228 0.303 L 4.228 0.032 L 4.264 0.006 C 5.046 0.005 6.785 0.005 6.785 0.005 L 6.852 0.027 L 6.852 0.297 C 6.852 0.359 6.808 0.391 6.72 0.391 L 6.537 0.417 C 6.075 0.454 6.151 0.644 6.458 1.261 L 9.371 7.28 L 9.471 7.307 L 12.058 1.11 C 12.148 0.86 12.134 0.683 12.018 0.579 C 11.902 0.478 11.821 0.417 11.52 0.405 L 11.278 0.393 C 11.248 0.393 11.22 0.382 11.193 0.361 C 11.166 0.342 11.152 0.317 11.152 0.286 L 11.152 0.027 L 11.189 0.001 L 14.112 0.001 L 14.142 0.027 L 14.142 0.286 C 14.142 0.356 14.102 0.391 14.024 0.391 C 13.641 0.408 13.358 0.491 13.174 0.641 C 12.99 0.792 12.847 1 12.744 1.27 C 12.744 1.27 10.365 6.766 9.551 8.594 C 9.24 9.193 8.933 9.138 8.664 8.576 C 8.095 7.393 6.492 3.803 6.492 3.803 L 5.518 1.87 Z" fill="rgb(255, 255, 255)"></path><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(255, 255, 255)"></path><path d="M 15.182 8.025 C 15.182 8.321 15.316 8.496 15.743 8.536 L 16.023 8.564 C 16.064 8.564 16.103 8.59 16.103 8.644 L 16.103 8.927 L 16.09 8.954 C 16.09 8.954 15.076 8.927 14.662 8.927 C 14.289 8.927 13.248 8.954 13.248 8.954 L 13.221 8.927 L 13.221 8.644 C 13.221 8.589 13.262 8.564 13.315 8.564 L 13.581 8.536 C 14.022 8.495 14.155 8.28 14.155 8.025 L 14.155 3.538 C 14.155 3.243 13.994 3.161 13.581 3.121 L 13.315 3.093 C 13.261 3.093 13.221 3.08 13.221 3.039 L 13.221 2.729 L 13.235 2.702 C 13.235 2.702 14.289 2.729 14.702 2.729 C 15.063 2.729 16.089 2.702 16.089 2.702 L 16.103 2.729 L 16.103 3.025 C 16.103 3.066 16.076 3.093 16.022 3.093 L 15.742 3.12 C 15.328 3.16 15.181 3.268 15.181 3.538 L 15.181 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.12 8.025 C 19.12 8.321 19.293 8.47 19.68 8.536 L 19.827 8.564 C 19.868 8.577 19.907 8.59 19.907 8.644 L 19.907 8.927 L 19.894 8.954 C 19.894 8.954 19.053 8.927 18.653 8.927 C 18.279 8.927 17.185 8.954 17.185 8.954 L 17.159 8.927 L 17.159 8.644 C 17.159 8.589 17.199 8.564 17.252 8.564 L 17.519 8.536 C 17.919 8.495 18.092 8.28 18.092 8.025 L 18.092 3.538 C 18.092 3.243 17.945 3.161 17.519 3.121 L 17.252 3.093 C 17.199 3.093 17.159 3.08 17.159 3.039 L 17.159 2.729 L 17.172 2.702 C 17.172 2.702 18.266 2.729 18.68 2.729 C 19.054 2.729 19.894 2.702 19.894 2.702 L 19.907 2.729 L 19.907 3.025 C 19.907 3.066 19.881 3.079 19.827 3.093 L 19.68 3.12 C 19.267 3.2 19.12 3.268 19.12 3.538 L 19.12 5.573 C 19.561 5.573 19.814 5.345 20.401 4.711 C 20.935 4.117 21.348 3.621 21.348 3.363 C 21.348 3.255 21.228 3.135 20.961 3.094 C 20.907 3.081 20.881 3.067 20.881 3.026 L 20.881 2.715 L 20.894 2.703 C 20.894 2.703 21.975 2.729 22.362 2.729 C 22.708 2.729 23.296 2.703 23.296 2.703 L 23.336 2.715 L 23.336 3.026 C 23.336 3.067 23.296 3.094 23.23 3.094 C 22.709 3.134 22.349 3.161 21.869 3.713 L 20.722 5.046 C 20.495 5.289 20.415 5.437 20.415 5.545 C 20.415 5.626 20.468 5.692 20.535 5.773 L 22.55 8.225 C 22.71 8.414 23.03 8.495 23.297 8.548 L 23.364 8.561 C 23.404 8.574 23.457 8.601 23.457 8.641 L 23.457 8.924 L 23.416 8.938 C 23.416 8.938 22.709 8.924 22.335 8.924 C 22.002 8.924 21.521 8.938 21.521 8.938 L 21.508 8.924 L 21.508 8.763 C 21.508 8.587 21.495 8.44 21.308 8.225 L 19.826 6.365 C 19.626 6.095 19.413 6.028 19.119 6.028 L 19.119 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.314 8.025 C 26.314 8.321 26.448 8.496 26.874 8.536 L 27.155 8.564 C 27.195 8.564 27.235 8.59 27.235 8.644 L 27.235 8.927 L 27.222 8.954 C 27.222 8.954 26.208 8.927 25.794 8.927 C 25.42 8.927 24.38 8.954 24.38 8.954 L 24.353 8.927 L 24.353 8.644 C 24.353 8.589 24.394 8.564 24.446 8.564 L 24.713 8.536 C 25.154 8.495 25.287 8.28 25.287 8.025 L 25.287 3.538 C 25.287 3.243 25.126 3.161 24.713 3.121 L 24.446 3.093 C 24.393 3.093 24.353 3.08 24.353 3.039 L 24.353 2.729 L 24.366 2.702 C 24.366 2.702 25.42 2.729 25.834 2.729 C 26.194 2.729 27.221 2.702 27.221 2.702 L 27.234 2.729 L 27.234 3.025 C 27.234 3.066 27.208 3.093 27.154 3.093 L 26.874 3.12 C 26.46 3.16 26.313 3.268 26.313 3.538 L 26.313 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.197 3.565 C 29.197 3.148 29.024 3.134 28.396 3.094 C 28.316 3.094 28.303 3.054 28.303 3.026 L 28.303 2.716 L 28.329 2.703 C 28.53 2.703 29.317 2.729 29.704 2.729 C 30.091 2.729 30.611 2.703 31.105 2.703 C 32.999 2.703 33.346 3.645 33.346 4.347 C 33.346 5.156 32.959 6.421 31.065 6.421 C 30.732 6.421 30.465 6.394 30.224 6.286 L 30.224 8.09 C 30.224 8.386 30.384 8.455 30.812 8.521 L 31.079 8.562 C 31.133 8.575 31.173 8.589 31.173 8.642 L 31.173 8.925 L 31.161 8.953 C 31.161 8.953 30.093 8.925 29.68 8.925 C 29.306 8.925 28.306 8.953 28.306 8.953 L 28.292 8.925 L 28.292 8.642 C 28.292 8.588 28.319 8.574 28.372 8.562 L 28.653 8.521 C 29.066 8.467 29.2 8.346 29.2 8.09 L 29.198 3.564 Z M 30.224 5.909 C 30.491 6.017 30.825 6.031 31.092 6.031 C 31.893 6.031 32.279 5.545 32.279 4.508 C 32.279 3.35 31.758 3.094 31.025 3.094 C 30.384 3.094 30.224 3.215 30.224 3.565 L 30.224 5.909 Z" fill="rgb(255, 255, 255)"></path><path d="M 35.644 8.927 C 35.244 8.927 34.324 8.954 34.324 8.954 L 34.31 8.927 L 34.31 8.63 C 34.31 8.604 34.324 8.564 34.39 8.564 L 34.698 8.536 C 35.112 8.495 35.231 8.226 35.231 7.957 L 35.231 3.512 C 35.231 3.201 35.071 3.148 34.698 3.121 L 34.39 3.093 C 34.31 3.08 34.31 3.053 34.31 3.039 L 34.31 2.729 L 34.324 2.702 C 34.324 2.702 35.364 2.729 35.765 2.729 L 37.726 2.729 C 38.127 2.729 39.075 2.702 39.075 2.702 L 39.103 2.729 C 39.115 3.308 39.209 3.834 39.304 4.346 L 38.971 4.4 C 38.825 3.901 38.571 3.188 37.717 3.188 L 36.65 3.188 C 36.397 3.188 36.263 3.282 36.263 3.51 L 36.263 5.464 L 37.263 5.464 C 37.637 5.464 37.731 5.302 37.784 5.033 L 37.863 4.75 C 37.863 4.709 37.891 4.682 37.943 4.682 L 38.17 4.682 C 38.198 4.682 38.198 4.697 38.198 4.723 C 38.17 5.019 38.118 5.397 38.118 5.721 C 38.118 6.044 38.171 6.341 38.198 6.651 L 38.17 6.678 L 37.943 6.678 C 37.877 6.678 37.849 6.651 37.849 6.611 L 37.782 6.315 C 37.729 6.045 37.609 5.896 37.261 5.896 L 36.261 5.896 L 36.261 7.958 C 36.261 8.213 36.407 8.469 36.649 8.469 L 37.916 8.469 C 38.597 8.469 38.972 8.038 39.13 7.336 L 39.463 7.377 L 39.195 8.926 L 39.169 8.953 C 39.169 8.953 38.382 8.926 37.981 8.926 L 35.647 8.929 Z" fill="rgb(255, 255, 255)"></path><path d="M 40.662 8.564 L 40.969 8.536 C 41.37 8.495 41.503 8.375 41.503 7.957 L 41.503 3.512 C 41.503 3.16 41.409 3.16 40.969 3.121 L 40.677 3.093 C 40.623 3.093 40.583 3.066 40.583 3.025 L 40.583 2.729 L 40.596 2.702 C 40.596 2.702 41.77 2.729 42.011 2.729 C 42.264 2.729 43.426 2.702 43.773 2.702 C 46.001 2.702 47.095 4.103 47.095 5.895 C 47.095 8.253 45.441 8.952 43.96 8.952 C 42.893 8.952 42.426 8.924 42.012 8.924 C 41.599 8.924 40.597 8.952 40.597 8.952 L 40.584 8.924 L 40.584 8.641 C 40.582 8.603 40.609 8.562 40.662 8.562 Z M 43.638 8.564 C 45.105 8.564 45.933 8.012 45.933 6.125 C 45.933 4.724 45.626 3.094 43.384 3.094 C 42.863 3.094 42.53 3.174 42.53 3.512 L 42.53 7.957 C 42.53 8.333 42.623 8.564 43.637 8.564 Z" fill="rgb(255, 255, 255)"></path><path d="M 50.245 8.025 C 50.245 8.321 50.378 8.496 50.805 8.536 L 51.086 8.564 C 51.126 8.564 51.166 8.59 51.166 8.644 L 51.166 8.927 L 51.152 8.954 C 51.152 8.954 50.138 8.927 49.725 8.927 C 49.352 8.927 48.311 8.954 48.311 8.954 L 48.284 8.927 L 48.284 8.644 C 48.284 8.589 48.324 8.564 48.377 8.564 L 48.644 8.536 C 49.084 8.495 49.218 8.28 49.218 8.025 L 49.218 3.538 C 49.218 3.243 49.057 3.161 48.644 3.121 L 48.377 3.093 C 48.323 3.093 48.284 3.08 48.284 3.039 L 48.284 2.729 L 48.297 2.702 C 48.297 2.702 49.351 2.729 49.763 2.729 C 50.123 2.729 51.152 2.702 51.152 2.702 L 51.164 2.729 L 51.164 3.025 C 51.164 3.066 51.136 3.093 51.084 3.093 L 50.803 3.12 C 50.389 3.16 50.243 3.268 50.243 3.538 Z" fill="rgb(255, 255, 255)"></path><path d="M 54.355 8.536 L 54.743 8.564 C 54.796 8.564 54.849 8.604 54.849 8.671 L 54.849 8.927 L 54.823 8.954 C 54.823 8.954 53.368 8.927 53.048 8.927 C 52.701 8.927 51.847 8.954 51.847 8.954 L 51.819 8.927 L 51.819 8.671 C 51.819 8.604 51.86 8.564 51.927 8.564 C 52.514 8.523 52.847 8.415 53.221 7.553 L 56.183 0.547 C 56.329 0.197 56.436 0.061 56.637 0.061 C 56.823 0.061 56.891 0.196 56.996 0.466 L 59.732 7.768 C 59.919 8.294 60.186 8.495 60.72 8.549 L 60.866 8.563 C 60.933 8.563 61 8.603 61 8.671 L 61 8.926 L 60.96 8.954 C 60.96 8.954 59.932 8.926 59.411 8.926 C 58.944 8.926 57.636 8.954 57.636 8.954 L 57.624 8.926 L 57.624 8.671 C 57.624 8.603 57.65 8.563 57.719 8.563 L 58.092 8.535 C 58.599 8.495 58.787 8.333 58.653 7.956 L 57.839 5.678 L 55.063 5.678 C 54.743 5.678 54.662 5.732 54.596 5.906 L 53.822 7.86 C 53.689 8.2 53.862 8.496 54.356 8.537 Z M 57.624 5.113 L 56.33 1.517 L 56.304 1.517 L 54.969 4.939 C 54.916 5.075 55.009 5.114 55.303 5.114 L 57.625 5.114 Z" fill="rgb(255, 255, 255)"></path></g></g></g></svg>`,
                              },
                              adguRWWdy: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 18" overflow="visible"><g><g><g transform="translate(0.641 11.722)"><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(0, 0, 0)"></path><path d="M 9.456 4.184 C 9.19 4.534 8.829 4.77 8.322 4.77 C 7.842 4.77 7.528 4.609 7.301 4.339 C 7.081 4.084 6.988 3.72 6.988 3.343 C 6.988 2.317 7.741 1.758 8.322 1.758 C 9.25 1.758 9.45 2.366 9.45 2.931 C 9.45 3.005 9.403 3.045 9.323 3.045 L 7.548 3.032 C 7.548 3.423 7.628 3.733 7.762 3.955 C 7.969 4.298 8.249 4.44 8.489 4.44 C 8.876 4.44 9.069 4.333 9.316 4.077 C 9.396 4.083 9.437 4.118 9.456 4.184 Z M 8.775 2.783 C 8.849 2.782 8.875 2.75 8.875 2.688 C 8.875 2.121 8.575 1.981 8.322 1.981 C 8.161 1.981 7.694 2.042 7.568 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 12.23 2.528 L 12.23 3.881 C 12.23 4.441 12.343 4.474 12.81 4.494 C 12.851 4.535 12.851 4.677 12.81 4.717 C 12.477 4.709 12.283 4.704 11.95 4.704 C 11.616 4.704 11.409 4.711 11.082 4.717 C 11.042 4.676 11.042 4.534 11.082 4.494 C 11.549 4.474 11.662 4.44 11.662 3.881 L 11.662 1.18 C 11.662 0.622 11.549 0.586 11.082 0.566 C 11.042 0.525 11.042 0.382 11.082 0.342 C 11.416 0.35 11.943 0.356 11.943 0.356 L 13.646 0.356 C 13.805 0.356 13.844 0.352 13.96 0.329 C 13.976 0.329 13.984 0.334 13.986 0.349 C 13.996 0.401 14.096 1.05 14.131 1.326 L 13.924 1.359 C 13.777 0.894 13.67 0.625 13.17 0.625 L 12.47 0.625 C 12.309 0.625 12.229 0.692 12.229 0.854 L 12.229 2.268 L 12.85 2.268 C 13.417 2.268 13.437 2.181 13.457 1.81 C 13.498 1.77 13.637 1.77 13.678 1.81 C 13.671 2.012 13.665 2.161 13.665 2.39 C 13.665 2.619 13.671 2.746 13.678 2.982 C 13.637 3.023 13.498 3.023 13.457 2.982 C 13.438 2.679 13.417 2.524 12.85 2.524 L 12.229 2.524 L 12.229 2.527 Z" fill="rgb(0, 0, 0)"></path><path d="M 14.405 2.111 C 14.378 2.07 14.378 1.963 14.392 1.923 C 14.852 1.862 15.119 1.801 15.305 1.728 C 15.359 1.728 15.392 1.748 15.392 1.776 C 15.392 1.776 15.359 2.099 15.359 2.315 C 15.359 2.347 15.379 2.382 15.419 2.307 C 15.573 2.045 15.846 1.749 16.159 1.749 C 16.44 1.749 16.56 1.943 16.56 2.071 C 16.56 2.241 16.406 2.408 16.246 2.408 C 16.106 2.408 16.039 2.28 15.973 2.213 C 15.933 2.173 15.88 2.166 15.833 2.166 C 15.753 2.166 15.599 2.388 15.526 2.496 C 15.446 2.617 15.366 2.771 15.366 2.947 L 15.366 3.885 C 15.366 4.443 15.446 4.464 15.913 4.498 C 15.953 4.539 15.953 4.681 15.913 4.72 C 15.626 4.713 15.379 4.707 15.106 4.707 C 14.832 4.707 14.625 4.714 14.345 4.72 C 14.304 4.681 14.304 4.538 14.345 4.498 C 14.758 4.47 14.838 4.444 14.838 3.885 L 14.838 2.571 C 14.838 2.199 14.765 2.146 14.405 2.112 Z" fill="rgb(0, 0, 0)"></path><path d="M 19.289 4.184 C 19.022 4.534 18.662 4.77 18.155 4.77 C 17.675 4.77 17.361 4.609 17.134 4.339 C 16.914 4.084 16.821 3.72 16.821 3.343 C 16.821 2.317 17.574 1.758 18.155 1.758 C 19.083 1.758 19.282 2.366 19.282 2.931 C 19.282 3.005 19.235 3.045 19.155 3.045 L 17.381 3.032 C 17.381 3.423 17.461 3.733 17.595 3.955 C 17.802 4.298 18.082 4.44 18.322 4.44 C 18.709 4.44 18.902 4.333 19.149 4.077 C 19.229 4.083 19.269 4.118 19.289 4.184 Z M 18.608 2.783 C 18.682 2.782 18.708 2.75 18.708 2.688 C 18.708 2.121 18.408 1.981 18.154 1.981 C 17.994 1.981 17.527 2.042 17.401 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 22.291 4.184 C 22.024 4.534 21.663 4.77 21.157 4.77 C 20.676 4.77 20.363 4.609 20.136 4.339 C 19.915 4.084 19.822 3.72 19.822 3.343 C 19.822 2.317 20.576 1.758 21.157 1.758 C 22.084 1.758 22.284 2.366 22.284 2.931 C 22.284 3.005 22.237 3.045 22.157 3.045 L 20.383 3.032 C 20.383 3.423 20.463 3.733 20.596 3.955 C 20.803 4.298 21.083 4.44 21.323 4.44 C 21.71 4.44 21.904 4.333 22.15 4.077 C 22.23 4.083 22.271 4.118 22.291 4.184 Z M 21.611 2.783 C 21.684 2.782 21.71 2.75 21.71 2.688 C 21.71 2.121 21.41 1.981 21.157 1.981 C 20.997 1.981 20.529 2.042 20.403 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 26.279 1.814 C 26.32 1.773 26.459 1.773 26.5 1.814 C 26.493 2.016 26.487 2.164 26.487 2.393 C 26.487 2.622 26.493 2.75 26.5 2.986 C 26.459 3.027 26.32 3.027 26.279 2.986 C 26.26 2.683 26.239 2.528 25.672 2.528 L 25.065 2.528 L 25.065 4.151 C 25.065 4.334 25.158 4.441 25.305 4.441 L 26.212 4.441 C 26.718 4.441 26.952 4.043 27.086 3.559 C 27.173 3.538 27.25 3.553 27.319 3.592 C 27.266 3.935 27.166 4.38 27.073 4.718 C 27.073 4.718 26.539 4.704 26.218 4.704 L 24.784 4.704 C 24.784 4.704 24.243 4.712 23.917 4.718 C 23.876 4.677 23.876 4.535 23.917 4.495 C 24.384 4.475 24.497 4.441 24.497 3.882 L 24.497 1.181 C 24.497 0.622 24.384 0.587 23.917 0.567 C 23.876 0.526 23.876 0.383 23.917 0.343 C 24.25 0.351 24.777 0.357 24.777 0.357 L 26.478 0.357 C 26.638 0.357 26.692 0.35 26.805 0.33 C 26.825 0.33 26.832 0.337 26.832 0.35 C 26.845 0.404 26.945 1.051 26.978 1.327 C 26.913 1.359 26.841 1.372 26.758 1.36 C 26.611 0.895 26.505 0.626 26.005 0.626 L 25.304 0.626 C 25.144 0.626 25.064 0.761 25.064 0.922 L 25.064 2.269 L 25.671 2.269 C 26.238 2.272 26.258 2.185 26.279 1.814 Z" fill="rgb(0, 0, 0)"></path><path d="M 29.769 1.746 C 30.002 1.746 30.209 1.826 30.322 1.974 C 30.476 2.183 30.502 2.506 30.502 2.876 L 30.502 3.88 C 30.502 4.432 30.577 4.46 30.95 4.494 C 30.983 4.534 30.983 4.676 30.95 4.716 C 30.663 4.709 30.516 4.703 30.243 4.703 C 29.971 4.703 29.844 4.71 29.562 4.716 C 29.529 4.675 29.529 4.534 29.562 4.494 C 29.909 4.46 29.976 4.433 29.976 3.88 L 29.976 2.855 C 29.976 2.653 29.963 2.472 29.896 2.337 C 29.816 2.182 29.676 2.095 29.543 2.095 C 29.283 2.095 29.022 2.242 28.769 2.492 C 28.715 2.553 28.655 2.634 28.655 2.776 L 28.655 3.88 C 28.655 4.432 28.716 4.46 29.056 4.494 C 29.096 4.534 29.096 4.676 29.056 4.716 C 28.775 4.709 28.655 4.703 28.395 4.703 C 28.108 4.703 27.935 4.71 27.662 4.716 C 27.621 4.675 27.621 4.534 27.662 4.494 C 28.062 4.46 28.129 4.433 28.129 3.88 L 28.129 2.567 C 28.129 2.176 28.055 2.143 27.696 2.11 C 27.682 2.069 27.669 1.961 27.682 1.921 C 28.143 1.861 28.416 1.8 28.603 1.726 C 28.657 1.726 28.684 1.746 28.684 1.78 C 28.684 1.78 28.65 2.091 28.65 2.291 C 28.65 2.386 28.698 2.318 28.717 2.291 C 29.124 1.835 29.444 1.746 29.771 1.746 Z" fill="rgb(0, 0, 0)"></path><path d="M 32.605 4.77 C 31.764 4.77 31.283 4.171 31.283 3.302 C 31.283 2.346 31.991 1.746 32.652 1.746 C 33.312 1.746 33.672 2.016 33.672 2.385 C 33.672 2.593 33.485 2.681 33.345 2.681 C 33.205 2.681 33.112 2.62 33.091 2.438 C 33.064 2.202 33.011 1.966 32.617 1.966 C 32.177 1.966 31.856 2.411 31.856 3.152 C 31.856 3.94 32.264 4.438 32.75 4.438 C 33.038 4.438 33.324 4.29 33.551 3.995 C 33.611 4.001 33.664 4.027 33.691 4.089 C 33.358 4.643 33.004 4.771 32.604 4.771 Z" fill="rgb(0, 0, 0)"></path><path d="M 34.573 6.267 C 34.392 6.267 34.259 6.158 34.259 6.018 C 34.259 5.93 34.359 5.728 34.553 5.728 C 34.627 5.728 34.652 5.748 34.746 5.748 C 34.912 5.748 35.006 5.688 35.079 5.553 C 35.179 5.344 35.26 5.158 35.34 4.934 C 35.406 4.745 35.305 4.435 35.246 4.299 L 34.49 2.528 C 34.309 2.099 34.255 2.05 33.965 2.022 C 33.925 1.981 33.925 1.839 33.965 1.799 C 34.099 1.806 34.278 1.811 34.506 1.811 C 34.747 1.811 35.013 1.806 35.26 1.799 C 35.3 1.84 35.3 1.982 35.26 2.022 C 34.85 2.055 34.921 2.176 35.041 2.461 L 35.632 3.861 C 35.688 3.995 35.745 3.977 35.791 3.869 L 36.454 2.326 C 36.558 2.081 36.343 2.043 36.133 2.023 C 36.092 1.982 36.092 1.84 36.133 1.8 C 36.379 1.807 36.507 1.812 36.74 1.812 C 36.927 1.812 37.048 1.806 37.213 1.8 C 37.253 1.841 37.253 1.983 37.213 2.023 C 36.967 2.043 36.767 2.259 36.672 2.454 C 36.319 3.208 36.028 3.903 35.491 5.203 C 35.41 5.402 35.322 5.595 35.218 5.782 C 34.979 6.214 34.711 6.268 34.571 6.268 Z" fill="rgb(0, 0, 0)"></path><path d="M 38.782 4.77 C 37.942 4.77 37.462 4.171 37.462 3.302 C 37.462 2.346 38.169 1.746 38.83 1.746 C 39.491 1.746 39.85 2.016 39.85 2.385 C 39.85 2.593 39.663 2.681 39.523 2.681 C 39.383 2.681 39.29 2.62 39.27 2.438 C 39.243 2.202 39.19 1.966 38.797 1.966 C 38.356 1.966 38.036 2.411 38.036 3.152 C 38.036 3.94 38.443 4.438 38.93 4.438 C 39.217 4.438 39.503 4.29 39.731 3.995 C 39.791 4.001 39.844 4.027 39.871 4.089 C 39.538 4.643 39.184 4.771 38.783 4.771 Z" fill="rgb(0, 0, 0)"></path><path d="M 40.645 0.938 C 40.645 0.372 40.565 0.407 40.218 0.387 C 40.178 0.347 40.164 0.239 40.178 0.184 C 40.444 0.164 40.944 0.07 41.112 0.002 C 41.171 0.002 41.198 0.022 41.198 0.07 C 41.198 0.07 41.17 0.339 41.17 0.777 L 41.17 3.882 C 41.17 4.442 41.245 4.475 41.652 4.495 C 41.692 4.536 41.692 4.678 41.652 4.718 C 41.363 4.71 41.198 4.704 40.911 4.704 C 40.625 4.704 40.444 4.712 40.164 4.718 C 40.123 4.677 40.123 4.535 40.164 4.495 C 40.57 4.475 40.645 4.441 40.645 3.882 L 40.645 0.939 Z" fill="rgb(0, 0, 0)"></path><path d="M 43.432 1.746 C 44.467 1.746 44.833 2.561 44.833 3.262 C 44.833 3.963 44.413 4.771 43.419 4.771 C 42.478 4.771 42.017 4.01 42.017 3.323 C 42.017 2.467 42.531 1.746 43.432 1.746 Z M 42.592 3.168 C 42.592 3.687 42.846 4.549 43.54 4.549 C 43.853 4.549 44.26 4.366 44.26 3.479 C 44.26 2.489 43.933 1.97 43.359 1.97 C 42.799 1.968 42.592 2.581 42.592 3.168 Z" fill="rgb(0, 0, 0)"></path><path d="M 47.108 1.746 C 47.789 1.746 48.289 2.405 48.289 3.119 C 48.289 3.665 48.109 4.081 47.795 4.392 C 47.522 4.656 47.189 4.769 46.815 4.769 C 46.604 4.769 46.398 4.732 46.234 4.665 C 46.166 4.637 46.141 4.629 46.141 4.716 L 46.141 5.443 C 46.141 6.002 46.215 6.029 46.688 6.057 C 46.728 6.097 46.728 6.239 46.688 6.278 C 46.401 6.273 46.195 6.265 45.88 6.265 C 45.587 6.265 45.413 6.273 45.133 6.278 C 45.093 6.238 45.093 6.095 45.133 6.055 C 45.54 6.035 45.614 6.001 45.614 5.442 L 45.614 2.566 C 45.614 2.182 45.54 2.141 45.18 2.107 C 45.167 2.066 45.152 1.96 45.167 1.919 C 45.626 1.859 45.887 1.798 46.075 1.724 C 46.129 1.724 46.163 1.744 46.163 1.771 C 46.163 1.771 46.135 1.96 46.135 2.202 C 46.135 2.251 46.173 2.244 46.195 2.222 C 46.494 1.915 46.861 1.745 47.109 1.745 Z M 46.141 2.743 L 46.141 3.996 C 46.141 4.239 46.168 4.279 46.3 4.399 C 46.421 4.508 46.654 4.541 46.775 4.541 C 47.522 4.541 47.715 3.854 47.715 3.3 C 47.715 2.54 47.348 2.056 46.921 2.056 C 46.726 2.056 46.454 2.231 46.248 2.446 C 46.162 2.537 46.141 2.603 46.141 2.745 Z" fill="rgb(0, 0, 0)"></path><path d="M 51.279 4.184 C 51.012 4.534 50.651 4.77 50.144 4.77 C 49.664 4.77 49.35 4.609 49.124 4.339 C 48.903 4.084 48.811 3.72 48.811 3.343 C 48.811 2.317 49.565 1.758 50.146 1.758 C 51.075 1.758 51.273 2.366 51.273 2.931 C 51.273 3.005 51.227 3.045 51.147 3.045 L 49.371 3.032 C 49.371 3.423 49.451 3.733 49.585 3.955 C 49.792 4.298 50.072 4.44 50.313 4.44 C 50.7 4.44 50.893 4.333 51.139 4.077 C 51.219 4.083 51.26 4.118 51.28 4.184 Z M 50.598 2.783 C 50.672 2.782 50.698 2.75 50.698 2.688 C 50.698 2.121 50.397 1.981 50.143 1.981 C 49.984 1.981 49.517 2.042 49.39 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 52.947 4.77 C 52.226 4.77 51.812 4.164 51.812 3.335 C 51.812 2.835 51.985 2.439 52.272 2.15 C 52.539 1.894 52.833 1.745 53.273 1.745 C 53.493 1.745 53.767 1.86 53.793 1.86 C 53.84 1.86 53.854 1.846 53.854 1.799 L 53.854 0.937 C 53.854 0.371 53.774 0.405 53.427 0.385 C 53.387 0.346 53.373 0.237 53.387 0.182 C 53.653 0.162 54.147 0.068 54.314 0.001 C 54.374 0.001 54.402 0.021 54.402 0.068 C 54.402 0.068 54.374 0.337 54.374 0.776 L 54.374 3.827 C 54.374 4.158 54.435 4.285 54.861 4.319 C 54.902 4.359 54.902 4.46 54.861 4.501 C 54.454 4.549 54.155 4.649 54.007 4.771 C 53.954 4.784 53.907 4.79 53.854 4.771 C 53.854 4.771 53.861 4.44 53.861 4.373 C 53.861 4.325 53.813 4.338 53.781 4.363 C 53.454 4.635 53.207 4.769 52.947 4.769 Z M 53.854 2.588 C 53.854 2.38 53.834 2.332 53.741 2.225 C 53.606 2.07 53.44 1.981 53.199 1.981 C 53.066 1.981 52.784 2.001 52.579 2.317 C 52.48 2.458 52.385 2.728 52.385 3.213 C 52.385 4.054 52.759 4.453 53.12 4.453 C 53.285 4.453 53.499 4.345 53.748 4.129 C 53.842 4.048 53.854 3.995 53.854 3.867 L 53.854 2.588 Z" fill="rgb(0, 0, 0)"></path><path d="M 56.582 4.494 C 56.623 4.535 56.623 4.677 56.582 4.717 C 56.295 4.709 56.128 4.704 55.842 4.704 C 55.555 4.704 55.376 4.711 55.094 4.717 C 55.056 4.676 55.056 4.534 55.094 4.494 C 55.501 4.461 55.575 4.44 55.575 3.881 L 55.575 2.568 C 55.575 2.185 55.505 2.146 55.141 2.111 C 55.128 2.07 55.113 1.962 55.128 1.922 C 55.588 1.861 55.852 1.801 56.042 1.726 C 56.095 1.726 56.127 1.746 56.127 1.774 C 56.127 1.774 56.101 2.205 56.101 2.541 L 56.101 3.884 C 56.101 4.442 56.174 4.468 56.58 4.495 Z M 55.841 0.345 C 56.022 0.345 56.16 0.533 56.16 0.695 C 56.16 0.837 56 1.018 55.814 1.018 C 55.654 1.018 55.494 0.843 55.494 0.667 C 55.494 0.507 55.681 0.345 55.841 0.345 Z" fill="rgb(0, 0, 0)"></path><path d="M 58.617 4.38 L 58.483 4.488 C 58.189 4.716 58.062 4.771 57.755 4.771 C 57.288 4.771 56.914 4.576 56.914 4.044 C 56.914 3.585 57.374 3.229 58.015 3.067 L 58.587 2.925 C 58.607 2.919 58.627 2.892 58.627 2.845 C 58.627 2.083 58.314 1.971 58.086 1.971 C 57.833 1.971 57.533 2.046 57.533 2.254 C 57.533 2.33 57.54 2.37 57.546 2.391 C 57.559 2.417 57.566 2.465 57.566 2.511 C 57.566 2.598 57.466 2.733 57.272 2.733 C 57.119 2.733 57.039 2.659 57.039 2.497 C 57.039 2.135 57.591 1.751 58.139 1.751 C 58.626 1.751 59.148 1.933 59.148 2.889 L 59.148 3.893 C 59.148 4.204 59.155 4.465 59.415 4.465 C 59.555 4.465 59.583 4.357 59.622 4.357 C 59.648 4.357 59.708 4.424 59.708 4.472 C 59.708 4.504 59.468 4.775 59.141 4.775 C 58.784 4.775 58.666 4.527 58.626 4.384 L 58.614 4.384 L 58.614 4.381 Z M 58.102 3.276 C 57.61 3.408 57.469 3.715 57.469 4.018 C 57.469 4.225 57.615 4.496 57.95 4.496 C 58.137 4.496 58.366 4.348 58.539 4.205 C 58.593 4.164 58.632 4.119 58.632 4.03 L 58.632 3.135 Z" fill="rgb(0, 0, 0)"></path></g><g><path d="M 5.516 1.87 C 5.516 1.87 5.328 1.484 5.264 1.355 C 4.835 0.5 4.845 0.454 4.412 0.396 C 4.291 0.38 4.228 0.364 4.228 0.303 L 4.228 0.032 L 4.264 0.006 C 5.046 0.005 6.785 0.005 6.785 0.005 L 6.852 0.027 L 6.852 0.297 C 6.852 0.359 6.808 0.391 6.72 0.391 L 6.537 0.417 C 6.075 0.454 6.151 0.644 6.458 1.261 L 9.371 7.28 L 9.471 7.307 L 12.058 1.11 C 12.148 0.86 12.134 0.683 12.018 0.579 C 11.902 0.478 11.821 0.417 11.52 0.405 L 11.278 0.393 C 11.248 0.393 11.22 0.382 11.193 0.361 C 11.166 0.342 11.152 0.317 11.152 0.286 L 11.152 0.027 L 11.189 0.001 L 14.112 0.001 L 14.142 0.027 L 14.142 0.286 C 14.142 0.356 14.102 0.391 14.024 0.391 C 13.641 0.408 13.358 0.491 13.174 0.641 C 12.99 0.792 12.847 1 12.744 1.27 C 12.744 1.27 10.365 6.766 9.551 8.594 C 9.24 9.193 8.933 9.138 8.664 8.576 C 8.095 7.393 6.492 3.803 6.492 3.803 L 5.518 1.87 Z" fill="rgb(0, 0, 0)"></path><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(0, 0, 0)"></path><path d="M 15.182 8.025 C 15.182 8.321 15.316 8.496 15.743 8.536 L 16.023 8.564 C 16.064 8.564 16.103 8.59 16.103 8.644 L 16.103 8.927 L 16.09 8.954 C 16.09 8.954 15.076 8.927 14.662 8.927 C 14.289 8.927 13.248 8.954 13.248 8.954 L 13.221 8.927 L 13.221 8.644 C 13.221 8.589 13.262 8.564 13.315 8.564 L 13.581 8.536 C 14.022 8.495 14.155 8.28 14.155 8.025 L 14.155 3.538 C 14.155 3.243 13.994 3.161 13.581 3.121 L 13.315 3.093 C 13.261 3.093 13.221 3.08 13.221 3.039 L 13.221 2.729 L 13.235 2.702 C 13.235 2.702 14.289 2.729 14.702 2.729 C 15.063 2.729 16.089 2.702 16.089 2.702 L 16.103 2.729 L 16.103 3.025 C 16.103 3.066 16.076 3.093 16.022 3.093 L 15.742 3.12 C 15.328 3.16 15.181 3.268 15.181 3.538 L 15.181 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 19.12 8.025 C 19.12 8.321 19.293 8.47 19.68 8.536 L 19.827 8.564 C 19.868 8.577 19.907 8.59 19.907 8.644 L 19.907 8.927 L 19.894 8.954 C 19.894 8.954 19.053 8.927 18.653 8.927 C 18.279 8.927 17.185 8.954 17.185 8.954 L 17.159 8.927 L 17.159 8.644 C 17.159 8.589 17.199 8.564 17.252 8.564 L 17.519 8.536 C 17.919 8.495 18.092 8.28 18.092 8.025 L 18.092 3.538 C 18.092 3.243 17.945 3.161 17.519 3.121 L 17.252 3.093 C 17.199 3.093 17.159 3.08 17.159 3.039 L 17.159 2.729 L 17.172 2.702 C 17.172 2.702 18.266 2.729 18.68 2.729 C 19.054 2.729 19.894 2.702 19.894 2.702 L 19.907 2.729 L 19.907 3.025 C 19.907 3.066 19.881 3.079 19.827 3.093 L 19.68 3.12 C 19.267 3.2 19.12 3.268 19.12 3.538 L 19.12 5.573 C 19.561 5.573 19.814 5.345 20.401 4.711 C 20.935 4.117 21.348 3.621 21.348 3.363 C 21.348 3.255 21.228 3.135 20.961 3.094 C 20.907 3.081 20.881 3.067 20.881 3.026 L 20.881 2.715 L 20.894 2.703 C 20.894 2.703 21.975 2.729 22.362 2.729 C 22.708 2.729 23.296 2.703 23.296 2.703 L 23.336 2.715 L 23.336 3.026 C 23.336 3.067 23.296 3.094 23.23 3.094 C 22.709 3.134 22.349 3.161 21.869 3.713 L 20.722 5.046 C 20.495 5.289 20.415 5.437 20.415 5.545 C 20.415 5.626 20.468 5.692 20.535 5.773 L 22.55 8.225 C 22.71 8.414 23.03 8.495 23.297 8.548 L 23.364 8.561 C 23.404 8.574 23.457 8.601 23.457 8.641 L 23.457 8.924 L 23.416 8.938 C 23.416 8.938 22.709 8.924 22.335 8.924 C 22.002 8.924 21.521 8.938 21.521 8.938 L 21.508 8.924 L 21.508 8.763 C 21.508 8.587 21.495 8.44 21.308 8.225 L 19.826 6.365 C 19.626 6.095 19.413 6.028 19.119 6.028 L 19.119 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 26.314 8.025 C 26.314 8.321 26.448 8.496 26.874 8.536 L 27.155 8.564 C 27.195 8.564 27.235 8.59 27.235 8.644 L 27.235 8.927 L 27.222 8.954 C 27.222 8.954 26.208 8.927 25.794 8.927 C 25.42 8.927 24.38 8.954 24.38 8.954 L 24.353 8.927 L 24.353 8.644 C 24.353 8.589 24.394 8.564 24.446 8.564 L 24.713 8.536 C 25.154 8.495 25.287 8.28 25.287 8.025 L 25.287 3.538 C 25.287 3.243 25.126 3.161 24.713 3.121 L 24.446 3.093 C 24.393 3.093 24.353 3.08 24.353 3.039 L 24.353 2.729 L 24.366 2.702 C 24.366 2.702 25.42 2.729 25.834 2.729 C 26.194 2.729 27.221 2.702 27.221 2.702 L 27.234 2.729 L 27.234 3.025 C 27.234 3.066 27.208 3.093 27.154 3.093 L 26.874 3.12 C 26.46 3.16 26.313 3.268 26.313 3.538 L 26.313 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 29.197 3.565 C 29.197 3.148 29.024 3.134 28.396 3.094 C 28.316 3.094 28.303 3.054 28.303 3.026 L 28.303 2.716 L 28.329 2.703 C 28.53 2.703 29.317 2.729 29.704 2.729 C 30.091 2.729 30.611 2.703 31.105 2.703 C 32.999 2.703 33.346 3.645 33.346 4.347 C 33.346 5.156 32.959 6.421 31.065 6.421 C 30.732 6.421 30.465 6.394 30.224 6.286 L 30.224 8.09 C 30.224 8.386 30.384 8.455 30.812 8.521 L 31.079 8.562 C 31.133 8.575 31.173 8.589 31.173 8.642 L 31.173 8.925 L 31.161 8.953 C 31.161 8.953 30.093 8.925 29.68 8.925 C 29.306 8.925 28.306 8.953 28.306 8.953 L 28.292 8.925 L 28.292 8.642 C 28.292 8.588 28.319 8.574 28.372 8.562 L 28.653 8.521 C 29.066 8.467 29.2 8.346 29.2 8.09 L 29.198 3.564 Z M 30.224 5.909 C 30.491 6.017 30.825 6.031 31.092 6.031 C 31.893 6.031 32.279 5.545 32.279 4.508 C 32.279 3.35 31.758 3.094 31.025 3.094 C 30.384 3.094 30.224 3.215 30.224 3.565 L 30.224 5.909 Z" fill="rgb(0, 0, 0)"></path><path d="M 35.644 8.927 C 35.244 8.927 34.324 8.954 34.324 8.954 L 34.31 8.927 L 34.31 8.63 C 34.31 8.604 34.324 8.564 34.39 8.564 L 34.698 8.536 C 35.112 8.495 35.231 8.226 35.231 7.957 L 35.231 3.512 C 35.231 3.201 35.071 3.148 34.698 3.121 L 34.39 3.093 C 34.31 3.08 34.31 3.053 34.31 3.039 L 34.31 2.729 L 34.324 2.702 C 34.324 2.702 35.364 2.729 35.765 2.729 L 37.726 2.729 C 38.127 2.729 39.075 2.702 39.075 2.702 L 39.103 2.729 C 39.115 3.308 39.209 3.834 39.304 4.346 L 38.971 4.4 C 38.825 3.901 38.571 3.188 37.717 3.188 L 36.65 3.188 C 36.397 3.188 36.263 3.282 36.263 3.51 L 36.263 5.464 L 37.263 5.464 C 37.637 5.464 37.731 5.302 37.784 5.033 L 37.863 4.75 C 37.863 4.709 37.891 4.682 37.943 4.682 L 38.17 4.682 C 38.198 4.682 38.198 4.697 38.198 4.723 C 38.17 5.019 38.118 5.397 38.118 5.721 C 38.118 6.044 38.171 6.341 38.198 6.651 L 38.17 6.678 L 37.943 6.678 C 37.877 6.678 37.849 6.651 37.849 6.611 L 37.782 6.315 C 37.729 6.045 37.609 5.896 37.261 5.896 L 36.261 5.896 L 36.261 7.958 C 36.261 8.213 36.407 8.469 36.649 8.469 L 37.916 8.469 C 38.597 8.469 38.972 8.038 39.13 7.336 L 39.463 7.377 L 39.195 8.926 L 39.169 8.953 C 39.169 8.953 38.382 8.926 37.981 8.926 L 35.647 8.929 Z" fill="rgb(0, 0, 0)"></path><path d="M 40.662 8.564 L 40.969 8.536 C 41.37 8.495 41.503 8.375 41.503 7.957 L 41.503 3.512 C 41.503 3.16 41.409 3.16 40.969 3.121 L 40.677 3.093 C 40.623 3.093 40.583 3.066 40.583 3.025 L 40.583 2.729 L 40.596 2.702 C 40.596 2.702 41.77 2.729 42.011 2.729 C 42.264 2.729 43.426 2.702 43.773 2.702 C 46.001 2.702 47.095 4.103 47.095 5.895 C 47.095 8.253 45.441 8.952 43.96 8.952 C 42.893 8.952 42.426 8.924 42.012 8.924 C 41.599 8.924 40.597 8.952 40.597 8.952 L 40.584 8.924 L 40.584 8.641 C 40.582 8.603 40.609 8.562 40.662 8.562 Z M 43.638 8.564 C 45.105 8.564 45.933 8.012 45.933 6.125 C 45.933 4.724 45.626 3.094 43.384 3.094 C 42.863 3.094 42.53 3.174 42.53 3.512 L 42.53 7.957 C 42.53 8.333 42.623 8.564 43.637 8.564 Z" fill="rgb(0, 0, 0)"></path><path d="M 50.245 8.025 C 50.245 8.321 50.378 8.496 50.805 8.536 L 51.086 8.564 C 51.126 8.564 51.166 8.59 51.166 8.644 L 51.166 8.927 L 51.152 8.954 C 51.152 8.954 50.138 8.927 49.725 8.927 C 49.352 8.927 48.311 8.954 48.311 8.954 L 48.284 8.927 L 48.284 8.644 C 48.284 8.589 48.324 8.564 48.377 8.564 L 48.644 8.536 C 49.084 8.495 49.218 8.28 49.218 8.025 L 49.218 3.538 C 49.218 3.243 49.057 3.161 48.644 3.121 L 48.377 3.093 C 48.323 3.093 48.284 3.08 48.284 3.039 L 48.284 2.729 L 48.297 2.702 C 48.297 2.702 49.351 2.729 49.763 2.729 C 50.123 2.729 51.152 2.702 51.152 2.702 L 51.164 2.729 L 51.164 3.025 C 51.164 3.066 51.136 3.093 51.084 3.093 L 50.803 3.12 C 50.389 3.16 50.243 3.268 50.243 3.538 Z" fill="rgb(0, 0, 0)"></path><path d="M 54.355 8.536 L 54.743 8.564 C 54.796 8.564 54.849 8.604 54.849 8.671 L 54.849 8.927 L 54.823 8.954 C 54.823 8.954 53.368 8.927 53.048 8.927 C 52.701 8.927 51.847 8.954 51.847 8.954 L 51.819 8.927 L 51.819 8.671 C 51.819 8.604 51.86 8.564 51.927 8.564 C 52.514 8.523 52.847 8.415 53.221 7.553 L 56.183 0.547 C 56.329 0.197 56.436 0.061 56.637 0.061 C 56.823 0.061 56.891 0.196 56.996 0.466 L 59.732 7.768 C 59.919 8.294 60.186 8.495 60.72 8.549 L 60.866 8.563 C 60.933 8.563 61 8.603 61 8.671 L 61 8.926 L 60.96 8.954 C 60.96 8.954 59.932 8.926 59.411 8.926 C 58.944 8.926 57.636 8.954 57.636 8.954 L 57.624 8.926 L 57.624 8.671 C 57.624 8.603 57.65 8.563 57.719 8.563 L 58.092 8.535 C 58.599 8.495 58.787 8.333 58.653 7.956 L 57.839 5.678 L 55.063 5.678 C 54.743 5.678 54.662 5.732 54.596 5.906 L 53.822 7.86 C 53.689 8.2 53.862 8.496 54.356 8.537 Z M 57.624 5.113 L 56.33 1.517 L 56.304 1.517 L 54.969 4.939 C 54.916 5.075 55.009 5.114 55.303 5.114 L 57.625 5.114 Z" fill="rgb(0, 0, 0)"></path></g></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            $e() &&
                            p(S, {
                              className: `framer-1gqvfy3`,
                              layoutDependency: x,
                              layoutId: `yBro4bkAe`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 18" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "adguRWWdy-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 18" overflow="visible"><g><g transform="translate(0.641 11.722)"><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(255, 255, 255)"></path><path d="M 9.456 4.184 C 9.19 4.534 8.829 4.77 8.322 4.77 C 7.842 4.77 7.528 4.609 7.301 4.339 C 7.081 4.084 6.988 3.72 6.988 3.343 C 6.988 2.317 7.741 1.758 8.322 1.758 C 9.25 1.758 9.45 2.366 9.45 2.931 C 9.45 3.005 9.403 3.045 9.323 3.045 L 7.548 3.032 C 7.548 3.423 7.628 3.733 7.762 3.955 C 7.969 4.298 8.249 4.44 8.489 4.44 C 8.876 4.44 9.069 4.333 9.316 4.077 C 9.396 4.083 9.437 4.118 9.456 4.184 Z M 8.775 2.783 C 8.849 2.782 8.875 2.75 8.875 2.688 C 8.875 2.121 8.575 1.981 8.322 1.981 C 8.161 1.981 7.694 2.042 7.568 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 12.23 2.528 L 12.23 3.881 C 12.23 4.441 12.343 4.474 12.81 4.494 C 12.851 4.535 12.851 4.677 12.81 4.717 C 12.477 4.709 12.283 4.704 11.95 4.704 C 11.616 4.704 11.409 4.711 11.082 4.717 C 11.042 4.676 11.042 4.534 11.082 4.494 C 11.549 4.474 11.662 4.44 11.662 3.881 L 11.662 1.18 C 11.662 0.622 11.549 0.586 11.082 0.566 C 11.042 0.525 11.042 0.382 11.082 0.342 C 11.416 0.35 11.943 0.356 11.943 0.356 L 13.646 0.356 C 13.805 0.356 13.844 0.352 13.96 0.329 C 13.976 0.329 13.984 0.334 13.986 0.349 C 13.996 0.401 14.096 1.05 14.131 1.326 L 13.924 1.359 C 13.777 0.894 13.67 0.625 13.17 0.625 L 12.47 0.625 C 12.309 0.625 12.229 0.692 12.229 0.854 L 12.229 2.268 L 12.85 2.268 C 13.417 2.268 13.437 2.181 13.457 1.81 C 13.498 1.77 13.637 1.77 13.678 1.81 C 13.671 2.012 13.665 2.161 13.665 2.39 C 13.665 2.619 13.671 2.746 13.678 2.982 C 13.637 3.023 13.498 3.023 13.457 2.982 C 13.438 2.679 13.417 2.524 12.85 2.524 L 12.229 2.524 L 12.229 2.527 Z" fill="rgb(255, 255, 255)"></path><path d="M 14.405 2.111 C 14.378 2.07 14.378 1.963 14.392 1.923 C 14.852 1.862 15.119 1.801 15.305 1.728 C 15.359 1.728 15.392 1.748 15.392 1.776 C 15.392 1.776 15.359 2.099 15.359 2.315 C 15.359 2.347 15.379 2.382 15.419 2.307 C 15.573 2.045 15.846 1.749 16.159 1.749 C 16.44 1.749 16.56 1.943 16.56 2.071 C 16.56 2.241 16.406 2.408 16.246 2.408 C 16.106 2.408 16.039 2.28 15.973 2.213 C 15.933 2.173 15.88 2.166 15.833 2.166 C 15.753 2.166 15.599 2.388 15.526 2.496 C 15.446 2.617 15.366 2.771 15.366 2.947 L 15.366 3.885 C 15.366 4.443 15.446 4.464 15.913 4.498 C 15.953 4.539 15.953 4.681 15.913 4.72 C 15.626 4.713 15.379 4.707 15.106 4.707 C 14.832 4.707 14.625 4.714 14.345 4.72 C 14.304 4.681 14.304 4.538 14.345 4.498 C 14.758 4.47 14.838 4.444 14.838 3.885 L 14.838 2.571 C 14.838 2.199 14.765 2.146 14.405 2.112 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.289 4.184 C 19.022 4.534 18.662 4.77 18.155 4.77 C 17.675 4.77 17.361 4.609 17.134 4.339 C 16.914 4.084 16.821 3.72 16.821 3.343 C 16.821 2.317 17.574 1.758 18.155 1.758 C 19.083 1.758 19.282 2.366 19.282 2.931 C 19.282 3.005 19.235 3.045 19.155 3.045 L 17.381 3.032 C 17.381 3.423 17.461 3.733 17.595 3.955 C 17.802 4.298 18.082 4.44 18.322 4.44 C 18.709 4.44 18.902 4.333 19.149 4.077 C 19.229 4.083 19.269 4.118 19.289 4.184 Z M 18.608 2.783 C 18.682 2.782 18.708 2.75 18.708 2.688 C 18.708 2.121 18.408 1.981 18.154 1.981 C 17.994 1.981 17.527 2.042 17.401 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 22.291 4.184 C 22.024 4.534 21.663 4.77 21.157 4.77 C 20.676 4.77 20.363 4.609 20.136 4.339 C 19.915 4.084 19.822 3.72 19.822 3.343 C 19.822 2.317 20.576 1.758 21.157 1.758 C 22.084 1.758 22.284 2.366 22.284 2.931 C 22.284 3.005 22.237 3.045 22.157 3.045 L 20.383 3.032 C 20.383 3.423 20.463 3.733 20.596 3.955 C 20.803 4.298 21.083 4.44 21.323 4.44 C 21.71 4.44 21.904 4.333 22.15 4.077 C 22.23 4.083 22.271 4.118 22.291 4.184 Z M 21.611 2.783 C 21.684 2.782 21.71 2.75 21.71 2.688 C 21.71 2.121 21.41 1.981 21.157 1.981 C 20.997 1.981 20.529 2.042 20.403 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.279 1.814 C 26.32 1.773 26.459 1.773 26.5 1.814 C 26.493 2.016 26.487 2.164 26.487 2.393 C 26.487 2.622 26.493 2.75 26.5 2.986 C 26.459 3.027 26.32 3.027 26.279 2.986 C 26.26 2.683 26.239 2.528 25.672 2.528 L 25.065 2.528 L 25.065 4.151 C 25.065 4.334 25.158 4.441 25.305 4.441 L 26.212 4.441 C 26.718 4.441 26.952 4.043 27.086 3.559 C 27.173 3.538 27.25 3.553 27.319 3.592 C 27.266 3.935 27.166 4.38 27.073 4.718 C 27.073 4.718 26.539 4.704 26.218 4.704 L 24.784 4.704 C 24.784 4.704 24.243 4.712 23.917 4.718 C 23.876 4.677 23.876 4.535 23.917 4.495 C 24.384 4.475 24.497 4.441 24.497 3.882 L 24.497 1.181 C 24.497 0.622 24.384 0.587 23.917 0.567 C 23.876 0.526 23.876 0.383 23.917 0.343 C 24.25 0.351 24.777 0.357 24.777 0.357 L 26.478 0.357 C 26.638 0.357 26.692 0.35 26.805 0.33 C 26.825 0.33 26.832 0.337 26.832 0.35 C 26.845 0.404 26.945 1.051 26.978 1.327 C 26.913 1.359 26.841 1.372 26.758 1.36 C 26.611 0.895 26.505 0.626 26.005 0.626 L 25.304 0.626 C 25.144 0.626 25.064 0.761 25.064 0.922 L 25.064 2.269 L 25.671 2.269 C 26.238 2.272 26.258 2.185 26.279 1.814 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.769 1.746 C 30.002 1.746 30.209 1.826 30.322 1.974 C 30.476 2.183 30.502 2.506 30.502 2.876 L 30.502 3.88 C 30.502 4.432 30.577 4.46 30.95 4.494 C 30.983 4.534 30.983 4.676 30.95 4.716 C 30.663 4.709 30.516 4.703 30.243 4.703 C 29.971 4.703 29.844 4.71 29.562 4.716 C 29.529 4.675 29.529 4.534 29.562 4.494 C 29.909 4.46 29.976 4.433 29.976 3.88 L 29.976 2.855 C 29.976 2.653 29.963 2.472 29.896 2.337 C 29.816 2.182 29.676 2.095 29.543 2.095 C 29.283 2.095 29.022 2.242 28.769 2.492 C 28.715 2.553 28.655 2.634 28.655 2.776 L 28.655 3.88 C 28.655 4.432 28.716 4.46 29.056 4.494 C 29.096 4.534 29.096 4.676 29.056 4.716 C 28.775 4.709 28.655 4.703 28.395 4.703 C 28.108 4.703 27.935 4.71 27.662 4.716 C 27.621 4.675 27.621 4.534 27.662 4.494 C 28.062 4.46 28.129 4.433 28.129 3.88 L 28.129 2.567 C 28.129 2.176 28.055 2.143 27.696 2.11 C 27.682 2.069 27.669 1.961 27.682 1.921 C 28.143 1.861 28.416 1.8 28.603 1.726 C 28.657 1.726 28.684 1.746 28.684 1.78 C 28.684 1.78 28.65 2.091 28.65 2.291 C 28.65 2.386 28.698 2.318 28.717 2.291 C 29.124 1.835 29.444 1.746 29.771 1.746 Z" fill="rgb(255, 255, 255)"></path><path d="M 32.605 4.77 C 31.764 4.77 31.283 4.171 31.283 3.302 C 31.283 2.346 31.991 1.746 32.652 1.746 C 33.312 1.746 33.672 2.016 33.672 2.385 C 33.672 2.593 33.485 2.681 33.345 2.681 C 33.205 2.681 33.112 2.62 33.091 2.438 C 33.064 2.202 33.011 1.966 32.617 1.966 C 32.177 1.966 31.856 2.411 31.856 3.152 C 31.856 3.94 32.264 4.438 32.75 4.438 C 33.038 4.438 33.324 4.29 33.551 3.995 C 33.611 4.001 33.664 4.027 33.691 4.089 C 33.358 4.643 33.004 4.771 32.604 4.771 Z" fill="rgb(255, 255, 255)"></path><path d="M 34.573 6.267 C 34.392 6.267 34.259 6.158 34.259 6.018 C 34.259 5.93 34.359 5.728 34.553 5.728 C 34.627 5.728 34.652 5.748 34.746 5.748 C 34.912 5.748 35.006 5.688 35.079 5.553 C 35.179 5.344 35.26 5.158 35.34 4.934 C 35.406 4.745 35.305 4.435 35.246 4.299 L 34.49 2.528 C 34.309 2.099 34.255 2.05 33.965 2.022 C 33.925 1.981 33.925 1.839 33.965 1.799 C 34.099 1.806 34.278 1.811 34.506 1.811 C 34.747 1.811 35.013 1.806 35.26 1.799 C 35.3 1.84 35.3 1.982 35.26 2.022 C 34.85 2.055 34.921 2.176 35.041 2.461 L 35.632 3.861 C 35.688 3.995 35.745 3.977 35.791 3.869 L 36.454 2.326 C 36.558 2.081 36.343 2.043 36.133 2.023 C 36.092 1.982 36.092 1.84 36.133 1.8 C 36.379 1.807 36.507 1.812 36.74 1.812 C 36.927 1.812 37.048 1.806 37.213 1.8 C 37.253 1.841 37.253 1.983 37.213 2.023 C 36.967 2.043 36.767 2.259 36.672 2.454 C 36.319 3.208 36.028 3.903 35.491 5.203 C 35.41 5.402 35.322 5.595 35.218 5.782 C 34.979 6.214 34.711 6.268 34.571 6.268 Z" fill="rgb(255, 255, 255)"></path><path d="M 38.782 4.77 C 37.942 4.77 37.462 4.171 37.462 3.302 C 37.462 2.346 38.169 1.746 38.83 1.746 C 39.491 1.746 39.85 2.016 39.85 2.385 C 39.85 2.593 39.663 2.681 39.523 2.681 C 39.383 2.681 39.29 2.62 39.27 2.438 C 39.243 2.202 39.19 1.966 38.797 1.966 C 38.356 1.966 38.036 2.411 38.036 3.152 C 38.036 3.94 38.443 4.438 38.93 4.438 C 39.217 4.438 39.503 4.29 39.731 3.995 C 39.791 4.001 39.844 4.027 39.871 4.089 C 39.538 4.643 39.184 4.771 38.783 4.771 Z" fill="rgb(255, 255, 255)"></path><path d="M 40.645 0.938 C 40.645 0.372 40.565 0.407 40.218 0.387 C 40.178 0.347 40.164 0.239 40.178 0.184 C 40.444 0.164 40.944 0.07 41.112 0.002 C 41.171 0.002 41.198 0.022 41.198 0.07 C 41.198 0.07 41.17 0.339 41.17 0.777 L 41.17 3.882 C 41.17 4.442 41.245 4.475 41.652 4.495 C 41.692 4.536 41.692 4.678 41.652 4.718 C 41.363 4.71 41.198 4.704 40.911 4.704 C 40.625 4.704 40.444 4.712 40.164 4.718 C 40.123 4.677 40.123 4.535 40.164 4.495 C 40.57 4.475 40.645 4.441 40.645 3.882 L 40.645 0.939 Z" fill="rgb(255, 255, 255)"></path><path d="M 43.432 1.746 C 44.467 1.746 44.833 2.561 44.833 3.262 C 44.833 3.963 44.413 4.771 43.419 4.771 C 42.478 4.771 42.017 4.01 42.017 3.323 C 42.017 2.467 42.531 1.746 43.432 1.746 Z M 42.592 3.168 C 42.592 3.687 42.846 4.549 43.54 4.549 C 43.853 4.549 44.26 4.366 44.26 3.479 C 44.26 2.489 43.933 1.97 43.359 1.97 C 42.799 1.968 42.592 2.581 42.592 3.168 Z" fill="rgb(255, 255, 255)"></path><path d="M 47.108 1.746 C 47.789 1.746 48.289 2.405 48.289 3.119 C 48.289 3.665 48.109 4.081 47.795 4.392 C 47.522 4.656 47.189 4.769 46.815 4.769 C 46.604 4.769 46.398 4.732 46.234 4.665 C 46.166 4.637 46.141 4.629 46.141 4.716 L 46.141 5.443 C 46.141 6.002 46.215 6.029 46.688 6.057 C 46.728 6.097 46.728 6.239 46.688 6.278 C 46.401 6.273 46.195 6.265 45.88 6.265 C 45.587 6.265 45.413 6.273 45.133 6.278 C 45.093 6.238 45.093 6.095 45.133 6.055 C 45.54 6.035 45.614 6.001 45.614 5.442 L 45.614 2.566 C 45.614 2.182 45.54 2.141 45.18 2.107 C 45.167 2.066 45.152 1.96 45.167 1.919 C 45.626 1.859 45.887 1.798 46.075 1.724 C 46.129 1.724 46.163 1.744 46.163 1.771 C 46.163 1.771 46.135 1.96 46.135 2.202 C 46.135 2.251 46.173 2.244 46.195 2.222 C 46.494 1.915 46.861 1.745 47.109 1.745 Z M 46.141 2.743 L 46.141 3.996 C 46.141 4.239 46.168 4.279 46.3 4.399 C 46.421 4.508 46.654 4.541 46.775 4.541 C 47.522 4.541 47.715 3.854 47.715 3.3 C 47.715 2.54 47.348 2.056 46.921 2.056 C 46.726 2.056 46.454 2.231 46.248 2.446 C 46.162 2.537 46.141 2.603 46.141 2.745 Z" fill="rgb(255, 255, 255)"></path><path d="M 51.279 4.184 C 51.012 4.534 50.651 4.77 50.144 4.77 C 49.664 4.77 49.35 4.609 49.124 4.339 C 48.903 4.084 48.811 3.72 48.811 3.343 C 48.811 2.317 49.565 1.758 50.146 1.758 C 51.075 1.758 51.273 2.366 51.273 2.931 C 51.273 3.005 51.227 3.045 51.147 3.045 L 49.371 3.032 C 49.371 3.423 49.451 3.733 49.585 3.955 C 49.792 4.298 50.072 4.44 50.313 4.44 C 50.7 4.44 50.893 4.333 51.139 4.077 C 51.219 4.083 51.26 4.118 51.28 4.184 Z M 50.598 2.783 C 50.672 2.782 50.698 2.75 50.698 2.688 C 50.698 2.121 50.397 1.981 50.143 1.981 C 49.984 1.981 49.517 2.042 49.39 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 52.947 4.77 C 52.226 4.77 51.812 4.164 51.812 3.335 C 51.812 2.835 51.985 2.439 52.272 2.15 C 52.539 1.894 52.833 1.745 53.273 1.745 C 53.493 1.745 53.767 1.86 53.793 1.86 C 53.84 1.86 53.854 1.846 53.854 1.799 L 53.854 0.937 C 53.854 0.371 53.774 0.405 53.427 0.385 C 53.387 0.346 53.373 0.237 53.387 0.182 C 53.653 0.162 54.147 0.068 54.314 0.001 C 54.374 0.001 54.402 0.021 54.402 0.068 C 54.402 0.068 54.374 0.337 54.374 0.776 L 54.374 3.827 C 54.374 4.158 54.435 4.285 54.861 4.319 C 54.902 4.359 54.902 4.46 54.861 4.501 C 54.454 4.549 54.155 4.649 54.007 4.771 C 53.954 4.784 53.907 4.79 53.854 4.771 C 53.854 4.771 53.861 4.44 53.861 4.373 C 53.861 4.325 53.813 4.338 53.781 4.363 C 53.454 4.635 53.207 4.769 52.947 4.769 Z M 53.854 2.588 C 53.854 2.38 53.834 2.332 53.741 2.225 C 53.606 2.07 53.44 1.981 53.199 1.981 C 53.066 1.981 52.784 2.001 52.579 2.317 C 52.48 2.458 52.385 2.728 52.385 3.213 C 52.385 4.054 52.759 4.453 53.12 4.453 C 53.285 4.453 53.499 4.345 53.748 4.129 C 53.842 4.048 53.854 3.995 53.854 3.867 L 53.854 2.588 Z" fill="rgb(255, 255, 255)"></path><path d="M 56.582 4.494 C 56.623 4.535 56.623 4.677 56.582 4.717 C 56.295 4.709 56.128 4.704 55.842 4.704 C 55.555 4.704 55.376 4.711 55.094 4.717 C 55.056 4.676 55.056 4.534 55.094 4.494 C 55.501 4.461 55.575 4.44 55.575 3.881 L 55.575 2.568 C 55.575 2.185 55.505 2.146 55.141 2.111 C 55.128 2.07 55.113 1.962 55.128 1.922 C 55.588 1.861 55.852 1.801 56.042 1.726 C 56.095 1.726 56.127 1.746 56.127 1.774 C 56.127 1.774 56.101 2.205 56.101 2.541 L 56.101 3.884 C 56.101 4.442 56.174 4.468 56.58 4.495 Z M 55.841 0.345 C 56.022 0.345 56.16 0.533 56.16 0.695 C 56.16 0.837 56 1.018 55.814 1.018 C 55.654 1.018 55.494 0.843 55.494 0.667 C 55.494 0.507 55.681 0.345 55.841 0.345 Z" fill="rgb(255, 255, 255)"></path><path d="M 58.617 4.38 L 58.483 4.488 C 58.189 4.716 58.062 4.771 57.755 4.771 C 57.288 4.771 56.914 4.576 56.914 4.044 C 56.914 3.585 57.374 3.229 58.015 3.067 L 58.587 2.925 C 58.607 2.919 58.627 2.892 58.627 2.845 C 58.627 2.083 58.314 1.971 58.086 1.971 C 57.833 1.971 57.533 2.046 57.533 2.254 C 57.533 2.33 57.54 2.37 57.546 2.391 C 57.559 2.417 57.566 2.465 57.566 2.511 C 57.566 2.598 57.466 2.733 57.272 2.733 C 57.119 2.733 57.039 2.659 57.039 2.497 C 57.039 2.135 57.591 1.751 58.139 1.751 C 58.626 1.751 59.148 1.933 59.148 2.889 L 59.148 3.893 C 59.148 4.204 59.155 4.465 59.415 4.465 C 59.555 4.465 59.583 4.357 59.622 4.357 C 59.648 4.357 59.708 4.424 59.708 4.472 C 59.708 4.504 59.468 4.775 59.141 4.775 C 58.784 4.775 58.666 4.527 58.626 4.384 L 58.614 4.384 L 58.614 4.381 Z M 58.102 3.276 C 57.61 3.408 57.469 3.715 57.469 4.018 C 57.469 4.225 57.615 4.496 57.95 4.496 C 58.137 4.496 58.366 4.348 58.539 4.205 C 58.593 4.164 58.632 4.119 58.632 4.03 L 58.632 3.135 Z" fill="rgb(255, 255, 255)"></path></g><g><path d="M 5.516 1.87 C 5.516 1.87 5.328 1.484 5.264 1.355 C 4.835 0.5 4.845 0.454 4.412 0.396 C 4.291 0.38 4.228 0.364 4.228 0.303 L 4.228 0.032 L 4.264 0.006 C 5.046 0.005 6.785 0.005 6.785 0.005 L 6.852 0.027 L 6.852 0.297 C 6.852 0.359 6.808 0.391 6.72 0.391 L 6.537 0.417 C 6.075 0.454 6.151 0.644 6.458 1.261 L 9.371 7.28 L 9.471 7.307 L 12.058 1.11 C 12.148 0.86 12.134 0.683 12.018 0.579 C 11.902 0.478 11.821 0.417 11.52 0.405 L 11.278 0.393 C 11.248 0.393 11.22 0.382 11.193 0.361 C 11.166 0.342 11.152 0.317 11.152 0.286 L 11.152 0.027 L 11.189 0.001 L 14.112 0.001 L 14.142 0.027 L 14.142 0.286 C 14.142 0.356 14.102 0.391 14.024 0.391 C 13.641 0.408 13.358 0.491 13.174 0.641 C 12.99 0.792 12.847 1 12.744 1.27 C 12.744 1.27 10.365 6.766 9.551 8.594 C 9.24 9.193 8.933 9.138 8.664 8.576 C 8.095 7.393 6.492 3.803 6.492 3.803 L 5.518 1.87 Z" fill="rgb(255, 255, 255)"></path><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(255, 255, 255)"></path><path d="M 15.182 8.025 C 15.182 8.321 15.316 8.496 15.743 8.536 L 16.023 8.564 C 16.064 8.564 16.103 8.59 16.103 8.644 L 16.103 8.927 L 16.09 8.954 C 16.09 8.954 15.076 8.927 14.662 8.927 C 14.289 8.927 13.248 8.954 13.248 8.954 L 13.221 8.927 L 13.221 8.644 C 13.221 8.589 13.262 8.564 13.315 8.564 L 13.581 8.536 C 14.022 8.495 14.155 8.28 14.155 8.025 L 14.155 3.538 C 14.155 3.243 13.994 3.161 13.581 3.121 L 13.315 3.093 C 13.261 3.093 13.221 3.08 13.221 3.039 L 13.221 2.729 L 13.235 2.702 C 13.235 2.702 14.289 2.729 14.702 2.729 C 15.063 2.729 16.089 2.702 16.089 2.702 L 16.103 2.729 L 16.103 3.025 C 16.103 3.066 16.076 3.093 16.022 3.093 L 15.742 3.12 C 15.328 3.16 15.181 3.268 15.181 3.538 L 15.181 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.12 8.025 C 19.12 8.321 19.293 8.47 19.68 8.536 L 19.827 8.564 C 19.868 8.577 19.907 8.59 19.907 8.644 L 19.907 8.927 L 19.894 8.954 C 19.894 8.954 19.053 8.927 18.653 8.927 C 18.279 8.927 17.185 8.954 17.185 8.954 L 17.159 8.927 L 17.159 8.644 C 17.159 8.589 17.199 8.564 17.252 8.564 L 17.519 8.536 C 17.919 8.495 18.092 8.28 18.092 8.025 L 18.092 3.538 C 18.092 3.243 17.945 3.161 17.519 3.121 L 17.252 3.093 C 17.199 3.093 17.159 3.08 17.159 3.039 L 17.159 2.729 L 17.172 2.702 C 17.172 2.702 18.266 2.729 18.68 2.729 C 19.054 2.729 19.894 2.702 19.894 2.702 L 19.907 2.729 L 19.907 3.025 C 19.907 3.066 19.881 3.079 19.827 3.093 L 19.68 3.12 C 19.267 3.2 19.12 3.268 19.12 3.538 L 19.12 5.573 C 19.561 5.573 19.814 5.345 20.401 4.711 C 20.935 4.117 21.348 3.621 21.348 3.363 C 21.348 3.255 21.228 3.135 20.961 3.094 C 20.907 3.081 20.881 3.067 20.881 3.026 L 20.881 2.715 L 20.894 2.703 C 20.894 2.703 21.975 2.729 22.362 2.729 C 22.708 2.729 23.296 2.703 23.296 2.703 L 23.336 2.715 L 23.336 3.026 C 23.336 3.067 23.296 3.094 23.23 3.094 C 22.709 3.134 22.349 3.161 21.869 3.713 L 20.722 5.046 C 20.495 5.289 20.415 5.437 20.415 5.545 C 20.415 5.626 20.468 5.692 20.535 5.773 L 22.55 8.225 C 22.71 8.414 23.03 8.495 23.297 8.548 L 23.364 8.561 C 23.404 8.574 23.457 8.601 23.457 8.641 L 23.457 8.924 L 23.416 8.938 C 23.416 8.938 22.709 8.924 22.335 8.924 C 22.002 8.924 21.521 8.938 21.521 8.938 L 21.508 8.924 L 21.508 8.763 C 21.508 8.587 21.495 8.44 21.308 8.225 L 19.826 6.365 C 19.626 6.095 19.413 6.028 19.119 6.028 L 19.119 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.314 8.025 C 26.314 8.321 26.448 8.496 26.874 8.536 L 27.155 8.564 C 27.195 8.564 27.235 8.59 27.235 8.644 L 27.235 8.927 L 27.222 8.954 C 27.222 8.954 26.208 8.927 25.794 8.927 C 25.42 8.927 24.38 8.954 24.38 8.954 L 24.353 8.927 L 24.353 8.644 C 24.353 8.589 24.394 8.564 24.446 8.564 L 24.713 8.536 C 25.154 8.495 25.287 8.28 25.287 8.025 L 25.287 3.538 C 25.287 3.243 25.126 3.161 24.713 3.121 L 24.446 3.093 C 24.393 3.093 24.353 3.08 24.353 3.039 L 24.353 2.729 L 24.366 2.702 C 24.366 2.702 25.42 2.729 25.834 2.729 C 26.194 2.729 27.221 2.702 27.221 2.702 L 27.234 2.729 L 27.234 3.025 C 27.234 3.066 27.208 3.093 27.154 3.093 L 26.874 3.12 C 26.46 3.16 26.313 3.268 26.313 3.538 L 26.313 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.197 3.565 C 29.197 3.148 29.024 3.134 28.396 3.094 C 28.316 3.094 28.303 3.054 28.303 3.026 L 28.303 2.716 L 28.329 2.703 C 28.53 2.703 29.317 2.729 29.704 2.729 C 30.091 2.729 30.611 2.703 31.105 2.703 C 32.999 2.703 33.346 3.645 33.346 4.347 C 33.346 5.156 32.959 6.421 31.065 6.421 C 30.732 6.421 30.465 6.394 30.224 6.286 L 30.224 8.09 C 30.224 8.386 30.384 8.455 30.812 8.521 L 31.079 8.562 C 31.133 8.575 31.173 8.589 31.173 8.642 L 31.173 8.925 L 31.161 8.953 C 31.161 8.953 30.093 8.925 29.68 8.925 C 29.306 8.925 28.306 8.953 28.306 8.953 L 28.292 8.925 L 28.292 8.642 C 28.292 8.588 28.319 8.574 28.372 8.562 L 28.653 8.521 C 29.066 8.467 29.2 8.346 29.2 8.09 L 29.198 3.564 Z M 30.224 5.909 C 30.491 6.017 30.825 6.031 31.092 6.031 C 31.893 6.031 32.279 5.545 32.279 4.508 C 32.279 3.35 31.758 3.094 31.025 3.094 C 30.384 3.094 30.224 3.215 30.224 3.565 L 30.224 5.909 Z" fill="rgb(255, 255, 255)"></path><path d="M 35.644 8.927 C 35.244 8.927 34.324 8.954 34.324 8.954 L 34.31 8.927 L 34.31 8.63 C 34.31 8.604 34.324 8.564 34.39 8.564 L 34.698 8.536 C 35.112 8.495 35.231 8.226 35.231 7.957 L 35.231 3.512 C 35.231 3.201 35.071 3.148 34.698 3.121 L 34.39 3.093 C 34.31 3.08 34.31 3.053 34.31 3.039 L 34.31 2.729 L 34.324 2.702 C 34.324 2.702 35.364 2.729 35.765 2.729 L 37.726 2.729 C 38.127 2.729 39.075 2.702 39.075 2.702 L 39.103 2.729 C 39.115 3.308 39.209 3.834 39.304 4.346 L 38.971 4.4 C 38.825 3.901 38.571 3.188 37.717 3.188 L 36.65 3.188 C 36.397 3.188 36.263 3.282 36.263 3.51 L 36.263 5.464 L 37.263 5.464 C 37.637 5.464 37.731 5.302 37.784 5.033 L 37.863 4.75 C 37.863 4.709 37.891 4.682 37.943 4.682 L 38.17 4.682 C 38.198 4.682 38.198 4.697 38.198 4.723 C 38.17 5.019 38.118 5.397 38.118 5.721 C 38.118 6.044 38.171 6.341 38.198 6.651 L 38.17 6.678 L 37.943 6.678 C 37.877 6.678 37.849 6.651 37.849 6.611 L 37.782 6.315 C 37.729 6.045 37.609 5.896 37.261 5.896 L 36.261 5.896 L 36.261 7.958 C 36.261 8.213 36.407 8.469 36.649 8.469 L 37.916 8.469 C 38.597 8.469 38.972 8.038 39.13 7.336 L 39.463 7.377 L 39.195 8.926 L 39.169 8.953 C 39.169 8.953 38.382 8.926 37.981 8.926 L 35.647 8.929 Z" fill="rgb(255, 255, 255)"></path><path d="M 40.662 8.564 L 40.969 8.536 C 41.37 8.495 41.503 8.375 41.503 7.957 L 41.503 3.512 C 41.503 3.16 41.409 3.16 40.969 3.121 L 40.677 3.093 C 40.623 3.093 40.583 3.066 40.583 3.025 L 40.583 2.729 L 40.596 2.702 C 40.596 2.702 41.77 2.729 42.011 2.729 C 42.264 2.729 43.426 2.702 43.773 2.702 C 46.001 2.702 47.095 4.103 47.095 5.895 C 47.095 8.253 45.441 8.952 43.96 8.952 C 42.893 8.952 42.426 8.924 42.012 8.924 C 41.599 8.924 40.597 8.952 40.597 8.952 L 40.584 8.924 L 40.584 8.641 C 40.582 8.603 40.609 8.562 40.662 8.562 Z M 43.638 8.564 C 45.105 8.564 45.933 8.012 45.933 6.125 C 45.933 4.724 45.626 3.094 43.384 3.094 C 42.863 3.094 42.53 3.174 42.53 3.512 L 42.53 7.957 C 42.53 8.333 42.623 8.564 43.637 8.564 Z" fill="rgb(255, 255, 255)"></path><path d="M 50.245 8.025 C 50.245 8.321 50.378 8.496 50.805 8.536 L 51.086 8.564 C 51.126 8.564 51.166 8.59 51.166 8.644 L 51.166 8.927 L 51.152 8.954 C 51.152 8.954 50.138 8.927 49.725 8.927 C 49.352 8.927 48.311 8.954 48.311 8.954 L 48.284 8.927 L 48.284 8.644 C 48.284 8.589 48.324 8.564 48.377 8.564 L 48.644 8.536 C 49.084 8.495 49.218 8.28 49.218 8.025 L 49.218 3.538 C 49.218 3.243 49.057 3.161 48.644 3.121 L 48.377 3.093 C 48.323 3.093 48.284 3.08 48.284 3.039 L 48.284 2.729 L 48.297 2.702 C 48.297 2.702 49.351 2.729 49.763 2.729 C 50.123 2.729 51.152 2.702 51.152 2.702 L 51.164 2.729 L 51.164 3.025 C 51.164 3.066 51.136 3.093 51.084 3.093 L 50.803 3.12 C 50.389 3.16 50.243 3.268 50.243 3.538 Z" fill="rgb(255, 255, 255)"></path><path d="M 54.355 8.536 L 54.743 8.564 C 54.796 8.564 54.849 8.604 54.849 8.671 L 54.849 8.927 L 54.823 8.954 C 54.823 8.954 53.368 8.927 53.048 8.927 C 52.701 8.927 51.847 8.954 51.847 8.954 L 51.819 8.927 L 51.819 8.671 C 51.819 8.604 51.86 8.564 51.927 8.564 C 52.514 8.523 52.847 8.415 53.221 7.553 L 56.183 0.547 C 56.329 0.197 56.436 0.061 56.637 0.061 C 56.823 0.061 56.891 0.196 56.996 0.466 L 59.732 7.768 C 59.919 8.294 60.186 8.495 60.72 8.549 L 60.866 8.563 C 60.933 8.563 61 8.603 61 8.671 L 61 8.926 L 60.96 8.954 C 60.96 8.954 59.932 8.926 59.411 8.926 C 58.944 8.926 57.636 8.954 57.636 8.954 L 57.624 8.926 L 57.624 8.671 C 57.624 8.603 57.65 8.563 57.719 8.563 L 58.092 8.535 C 58.599 8.495 58.787 8.333 58.653 7.956 L 57.839 5.678 L 55.063 5.678 C 54.743 5.678 54.662 5.732 54.596 5.906 L 53.822 7.86 C 53.689 8.2 53.862 8.496 54.356 8.537 Z M 57.624 5.113 L 56.33 1.517 L 56.304 1.517 L 54.969 4.939 C 54.916 5.075 55.009 5.114 55.303 5.114 L 57.625 5.114 Z" fill="rgb(255, 255, 255)"></path></g></g></svg>`,
                                  },
                                  adguRWWdy: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 18" overflow="visible"><g><g transform="translate(0.641 11.722)"><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(0, 0, 0)"></path><path d="M 9.456 4.184 C 9.19 4.534 8.829 4.77 8.322 4.77 C 7.842 4.77 7.528 4.609 7.301 4.339 C 7.081 4.084 6.988 3.72 6.988 3.343 C 6.988 2.317 7.741 1.758 8.322 1.758 C 9.25 1.758 9.45 2.366 9.45 2.931 C 9.45 3.005 9.403 3.045 9.323 3.045 L 7.548 3.032 C 7.548 3.423 7.628 3.733 7.762 3.955 C 7.969 4.298 8.249 4.44 8.489 4.44 C 8.876 4.44 9.069 4.333 9.316 4.077 C 9.396 4.083 9.437 4.118 9.456 4.184 Z M 8.775 2.783 C 8.849 2.782 8.875 2.75 8.875 2.688 C 8.875 2.121 8.575 1.981 8.322 1.981 C 8.161 1.981 7.694 2.042 7.568 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 12.23 2.528 L 12.23 3.881 C 12.23 4.441 12.343 4.474 12.81 4.494 C 12.851 4.535 12.851 4.677 12.81 4.717 C 12.477 4.709 12.283 4.704 11.95 4.704 C 11.616 4.704 11.409 4.711 11.082 4.717 C 11.042 4.676 11.042 4.534 11.082 4.494 C 11.549 4.474 11.662 4.44 11.662 3.881 L 11.662 1.18 C 11.662 0.622 11.549 0.586 11.082 0.566 C 11.042 0.525 11.042 0.382 11.082 0.342 C 11.416 0.35 11.943 0.356 11.943 0.356 L 13.646 0.356 C 13.805 0.356 13.844 0.352 13.96 0.329 C 13.976 0.329 13.984 0.334 13.986 0.349 C 13.996 0.401 14.096 1.05 14.131 1.326 L 13.924 1.359 C 13.777 0.894 13.67 0.625 13.17 0.625 L 12.47 0.625 C 12.309 0.625 12.229 0.692 12.229 0.854 L 12.229 2.268 L 12.85 2.268 C 13.417 2.268 13.437 2.181 13.457 1.81 C 13.498 1.77 13.637 1.77 13.678 1.81 C 13.671 2.012 13.665 2.161 13.665 2.39 C 13.665 2.619 13.671 2.746 13.678 2.982 C 13.637 3.023 13.498 3.023 13.457 2.982 C 13.438 2.679 13.417 2.524 12.85 2.524 L 12.229 2.524 L 12.229 2.527 Z" fill="rgb(0, 0, 0)"></path><path d="M 14.405 2.111 C 14.378 2.07 14.378 1.963 14.392 1.923 C 14.852 1.862 15.119 1.801 15.305 1.728 C 15.359 1.728 15.392 1.748 15.392 1.776 C 15.392 1.776 15.359 2.099 15.359 2.315 C 15.359 2.347 15.379 2.382 15.419 2.307 C 15.573 2.045 15.846 1.749 16.159 1.749 C 16.44 1.749 16.56 1.943 16.56 2.071 C 16.56 2.241 16.406 2.408 16.246 2.408 C 16.106 2.408 16.039 2.28 15.973 2.213 C 15.933 2.173 15.88 2.166 15.833 2.166 C 15.753 2.166 15.599 2.388 15.526 2.496 C 15.446 2.617 15.366 2.771 15.366 2.947 L 15.366 3.885 C 15.366 4.443 15.446 4.464 15.913 4.498 C 15.953 4.539 15.953 4.681 15.913 4.72 C 15.626 4.713 15.379 4.707 15.106 4.707 C 14.832 4.707 14.625 4.714 14.345 4.72 C 14.304 4.681 14.304 4.538 14.345 4.498 C 14.758 4.47 14.838 4.444 14.838 3.885 L 14.838 2.571 C 14.838 2.199 14.765 2.146 14.405 2.112 Z" fill="rgb(0, 0, 0)"></path><path d="M 19.289 4.184 C 19.022 4.534 18.662 4.77 18.155 4.77 C 17.675 4.77 17.361 4.609 17.134 4.339 C 16.914 4.084 16.821 3.72 16.821 3.343 C 16.821 2.317 17.574 1.758 18.155 1.758 C 19.083 1.758 19.282 2.366 19.282 2.931 C 19.282 3.005 19.235 3.045 19.155 3.045 L 17.381 3.032 C 17.381 3.423 17.461 3.733 17.595 3.955 C 17.802 4.298 18.082 4.44 18.322 4.44 C 18.709 4.44 18.902 4.333 19.149 4.077 C 19.229 4.083 19.269 4.118 19.289 4.184 Z M 18.608 2.783 C 18.682 2.782 18.708 2.75 18.708 2.688 C 18.708 2.121 18.408 1.981 18.154 1.981 C 17.994 1.981 17.527 2.042 17.401 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 22.291 4.184 C 22.024 4.534 21.663 4.77 21.157 4.77 C 20.676 4.77 20.363 4.609 20.136 4.339 C 19.915 4.084 19.822 3.72 19.822 3.343 C 19.822 2.317 20.576 1.758 21.157 1.758 C 22.084 1.758 22.284 2.366 22.284 2.931 C 22.284 3.005 22.237 3.045 22.157 3.045 L 20.383 3.032 C 20.383 3.423 20.463 3.733 20.596 3.955 C 20.803 4.298 21.083 4.44 21.323 4.44 C 21.71 4.44 21.904 4.333 22.15 4.077 C 22.23 4.083 22.271 4.118 22.291 4.184 Z M 21.611 2.783 C 21.684 2.782 21.71 2.75 21.71 2.688 C 21.71 2.121 21.41 1.981 21.157 1.981 C 20.997 1.981 20.529 2.042 20.403 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 26.279 1.814 C 26.32 1.773 26.459 1.773 26.5 1.814 C 26.493 2.016 26.487 2.164 26.487 2.393 C 26.487 2.622 26.493 2.75 26.5 2.986 C 26.459 3.027 26.32 3.027 26.279 2.986 C 26.26 2.683 26.239 2.528 25.672 2.528 L 25.065 2.528 L 25.065 4.151 C 25.065 4.334 25.158 4.441 25.305 4.441 L 26.212 4.441 C 26.718 4.441 26.952 4.043 27.086 3.559 C 27.173 3.538 27.25 3.553 27.319 3.592 C 27.266 3.935 27.166 4.38 27.073 4.718 C 27.073 4.718 26.539 4.704 26.218 4.704 L 24.784 4.704 C 24.784 4.704 24.243 4.712 23.917 4.718 C 23.876 4.677 23.876 4.535 23.917 4.495 C 24.384 4.475 24.497 4.441 24.497 3.882 L 24.497 1.181 C 24.497 0.622 24.384 0.587 23.917 0.567 C 23.876 0.526 23.876 0.383 23.917 0.343 C 24.25 0.351 24.777 0.357 24.777 0.357 L 26.478 0.357 C 26.638 0.357 26.692 0.35 26.805 0.33 C 26.825 0.33 26.832 0.337 26.832 0.35 C 26.845 0.404 26.945 1.051 26.978 1.327 C 26.913 1.359 26.841 1.372 26.758 1.36 C 26.611 0.895 26.505 0.626 26.005 0.626 L 25.304 0.626 C 25.144 0.626 25.064 0.761 25.064 0.922 L 25.064 2.269 L 25.671 2.269 C 26.238 2.272 26.258 2.185 26.279 1.814 Z" fill="rgb(0, 0, 0)"></path><path d="M 29.769 1.746 C 30.002 1.746 30.209 1.826 30.322 1.974 C 30.476 2.183 30.502 2.506 30.502 2.876 L 30.502 3.88 C 30.502 4.432 30.577 4.46 30.95 4.494 C 30.983 4.534 30.983 4.676 30.95 4.716 C 30.663 4.709 30.516 4.703 30.243 4.703 C 29.971 4.703 29.844 4.71 29.562 4.716 C 29.529 4.675 29.529 4.534 29.562 4.494 C 29.909 4.46 29.976 4.433 29.976 3.88 L 29.976 2.855 C 29.976 2.653 29.963 2.472 29.896 2.337 C 29.816 2.182 29.676 2.095 29.543 2.095 C 29.283 2.095 29.022 2.242 28.769 2.492 C 28.715 2.553 28.655 2.634 28.655 2.776 L 28.655 3.88 C 28.655 4.432 28.716 4.46 29.056 4.494 C 29.096 4.534 29.096 4.676 29.056 4.716 C 28.775 4.709 28.655 4.703 28.395 4.703 C 28.108 4.703 27.935 4.71 27.662 4.716 C 27.621 4.675 27.621 4.534 27.662 4.494 C 28.062 4.46 28.129 4.433 28.129 3.88 L 28.129 2.567 C 28.129 2.176 28.055 2.143 27.696 2.11 C 27.682 2.069 27.669 1.961 27.682 1.921 C 28.143 1.861 28.416 1.8 28.603 1.726 C 28.657 1.726 28.684 1.746 28.684 1.78 C 28.684 1.78 28.65 2.091 28.65 2.291 C 28.65 2.386 28.698 2.318 28.717 2.291 C 29.124 1.835 29.444 1.746 29.771 1.746 Z" fill="rgb(0, 0, 0)"></path><path d="M 32.605 4.77 C 31.764 4.77 31.283 4.171 31.283 3.302 C 31.283 2.346 31.991 1.746 32.652 1.746 C 33.312 1.746 33.672 2.016 33.672 2.385 C 33.672 2.593 33.485 2.681 33.345 2.681 C 33.205 2.681 33.112 2.62 33.091 2.438 C 33.064 2.202 33.011 1.966 32.617 1.966 C 32.177 1.966 31.856 2.411 31.856 3.152 C 31.856 3.94 32.264 4.438 32.75 4.438 C 33.038 4.438 33.324 4.29 33.551 3.995 C 33.611 4.001 33.664 4.027 33.691 4.089 C 33.358 4.643 33.004 4.771 32.604 4.771 Z" fill="rgb(0, 0, 0)"></path><path d="M 34.573 6.267 C 34.392 6.267 34.259 6.158 34.259 6.018 C 34.259 5.93 34.359 5.728 34.553 5.728 C 34.627 5.728 34.652 5.748 34.746 5.748 C 34.912 5.748 35.006 5.688 35.079 5.553 C 35.179 5.344 35.26 5.158 35.34 4.934 C 35.406 4.745 35.305 4.435 35.246 4.299 L 34.49 2.528 C 34.309 2.099 34.255 2.05 33.965 2.022 C 33.925 1.981 33.925 1.839 33.965 1.799 C 34.099 1.806 34.278 1.811 34.506 1.811 C 34.747 1.811 35.013 1.806 35.26 1.799 C 35.3 1.84 35.3 1.982 35.26 2.022 C 34.85 2.055 34.921 2.176 35.041 2.461 L 35.632 3.861 C 35.688 3.995 35.745 3.977 35.791 3.869 L 36.454 2.326 C 36.558 2.081 36.343 2.043 36.133 2.023 C 36.092 1.982 36.092 1.84 36.133 1.8 C 36.379 1.807 36.507 1.812 36.74 1.812 C 36.927 1.812 37.048 1.806 37.213 1.8 C 37.253 1.841 37.253 1.983 37.213 2.023 C 36.967 2.043 36.767 2.259 36.672 2.454 C 36.319 3.208 36.028 3.903 35.491 5.203 C 35.41 5.402 35.322 5.595 35.218 5.782 C 34.979 6.214 34.711 6.268 34.571 6.268 Z" fill="rgb(0, 0, 0)"></path><path d="M 38.782 4.77 C 37.942 4.77 37.462 4.171 37.462 3.302 C 37.462 2.346 38.169 1.746 38.83 1.746 C 39.491 1.746 39.85 2.016 39.85 2.385 C 39.85 2.593 39.663 2.681 39.523 2.681 C 39.383 2.681 39.29 2.62 39.27 2.438 C 39.243 2.202 39.19 1.966 38.797 1.966 C 38.356 1.966 38.036 2.411 38.036 3.152 C 38.036 3.94 38.443 4.438 38.93 4.438 C 39.217 4.438 39.503 4.29 39.731 3.995 C 39.791 4.001 39.844 4.027 39.871 4.089 C 39.538 4.643 39.184 4.771 38.783 4.771 Z" fill="rgb(0, 0, 0)"></path><path d="M 40.645 0.938 C 40.645 0.372 40.565 0.407 40.218 0.387 C 40.178 0.347 40.164 0.239 40.178 0.184 C 40.444 0.164 40.944 0.07 41.112 0.002 C 41.171 0.002 41.198 0.022 41.198 0.07 C 41.198 0.07 41.17 0.339 41.17 0.777 L 41.17 3.882 C 41.17 4.442 41.245 4.475 41.652 4.495 C 41.692 4.536 41.692 4.678 41.652 4.718 C 41.363 4.71 41.198 4.704 40.911 4.704 C 40.625 4.704 40.444 4.712 40.164 4.718 C 40.123 4.677 40.123 4.535 40.164 4.495 C 40.57 4.475 40.645 4.441 40.645 3.882 L 40.645 0.939 Z" fill="rgb(0, 0, 0)"></path><path d="M 43.432 1.746 C 44.467 1.746 44.833 2.561 44.833 3.262 C 44.833 3.963 44.413 4.771 43.419 4.771 C 42.478 4.771 42.017 4.01 42.017 3.323 C 42.017 2.467 42.531 1.746 43.432 1.746 Z M 42.592 3.168 C 42.592 3.687 42.846 4.549 43.54 4.549 C 43.853 4.549 44.26 4.366 44.26 3.479 C 44.26 2.489 43.933 1.97 43.359 1.97 C 42.799 1.968 42.592 2.581 42.592 3.168 Z" fill="rgb(0, 0, 0)"></path><path d="M 47.108 1.746 C 47.789 1.746 48.289 2.405 48.289 3.119 C 48.289 3.665 48.109 4.081 47.795 4.392 C 47.522 4.656 47.189 4.769 46.815 4.769 C 46.604 4.769 46.398 4.732 46.234 4.665 C 46.166 4.637 46.141 4.629 46.141 4.716 L 46.141 5.443 C 46.141 6.002 46.215 6.029 46.688 6.057 C 46.728 6.097 46.728 6.239 46.688 6.278 C 46.401 6.273 46.195 6.265 45.88 6.265 C 45.587 6.265 45.413 6.273 45.133 6.278 C 45.093 6.238 45.093 6.095 45.133 6.055 C 45.54 6.035 45.614 6.001 45.614 5.442 L 45.614 2.566 C 45.614 2.182 45.54 2.141 45.18 2.107 C 45.167 2.066 45.152 1.96 45.167 1.919 C 45.626 1.859 45.887 1.798 46.075 1.724 C 46.129 1.724 46.163 1.744 46.163 1.771 C 46.163 1.771 46.135 1.96 46.135 2.202 C 46.135 2.251 46.173 2.244 46.195 2.222 C 46.494 1.915 46.861 1.745 47.109 1.745 Z M 46.141 2.743 L 46.141 3.996 C 46.141 4.239 46.168 4.279 46.3 4.399 C 46.421 4.508 46.654 4.541 46.775 4.541 C 47.522 4.541 47.715 3.854 47.715 3.3 C 47.715 2.54 47.348 2.056 46.921 2.056 C 46.726 2.056 46.454 2.231 46.248 2.446 C 46.162 2.537 46.141 2.603 46.141 2.745 Z" fill="rgb(0, 0, 0)"></path><path d="M 51.279 4.184 C 51.012 4.534 50.651 4.77 50.144 4.77 C 49.664 4.77 49.35 4.609 49.124 4.339 C 48.903 4.084 48.811 3.72 48.811 3.343 C 48.811 2.317 49.565 1.758 50.146 1.758 C 51.075 1.758 51.273 2.366 51.273 2.931 C 51.273 3.005 51.227 3.045 51.147 3.045 L 49.371 3.032 C 49.371 3.423 49.451 3.733 49.585 3.955 C 49.792 4.298 50.072 4.44 50.313 4.44 C 50.7 4.44 50.893 4.333 51.139 4.077 C 51.219 4.083 51.26 4.118 51.28 4.184 Z M 50.598 2.783 C 50.672 2.782 50.698 2.75 50.698 2.688 C 50.698 2.121 50.397 1.981 50.143 1.981 C 49.984 1.981 49.517 2.042 49.39 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 52.947 4.77 C 52.226 4.77 51.812 4.164 51.812 3.335 C 51.812 2.835 51.985 2.439 52.272 2.15 C 52.539 1.894 52.833 1.745 53.273 1.745 C 53.493 1.745 53.767 1.86 53.793 1.86 C 53.84 1.86 53.854 1.846 53.854 1.799 L 53.854 0.937 C 53.854 0.371 53.774 0.405 53.427 0.385 C 53.387 0.346 53.373 0.237 53.387 0.182 C 53.653 0.162 54.147 0.068 54.314 0.001 C 54.374 0.001 54.402 0.021 54.402 0.068 C 54.402 0.068 54.374 0.337 54.374 0.776 L 54.374 3.827 C 54.374 4.158 54.435 4.285 54.861 4.319 C 54.902 4.359 54.902 4.46 54.861 4.501 C 54.454 4.549 54.155 4.649 54.007 4.771 C 53.954 4.784 53.907 4.79 53.854 4.771 C 53.854 4.771 53.861 4.44 53.861 4.373 C 53.861 4.325 53.813 4.338 53.781 4.363 C 53.454 4.635 53.207 4.769 52.947 4.769 Z M 53.854 2.588 C 53.854 2.38 53.834 2.332 53.741 2.225 C 53.606 2.07 53.44 1.981 53.199 1.981 C 53.066 1.981 52.784 2.001 52.579 2.317 C 52.48 2.458 52.385 2.728 52.385 3.213 C 52.385 4.054 52.759 4.453 53.12 4.453 C 53.285 4.453 53.499 4.345 53.748 4.129 C 53.842 4.048 53.854 3.995 53.854 3.867 L 53.854 2.588 Z" fill="rgb(0, 0, 0)"></path><path d="M 56.582 4.494 C 56.623 4.535 56.623 4.677 56.582 4.717 C 56.295 4.709 56.128 4.704 55.842 4.704 C 55.555 4.704 55.376 4.711 55.094 4.717 C 55.056 4.676 55.056 4.534 55.094 4.494 C 55.501 4.461 55.575 4.44 55.575 3.881 L 55.575 2.568 C 55.575 2.185 55.505 2.146 55.141 2.111 C 55.128 2.07 55.113 1.962 55.128 1.922 C 55.588 1.861 55.852 1.801 56.042 1.726 C 56.095 1.726 56.127 1.746 56.127 1.774 C 56.127 1.774 56.101 2.205 56.101 2.541 L 56.101 3.884 C 56.101 4.442 56.174 4.468 56.58 4.495 Z M 55.841 0.345 C 56.022 0.345 56.16 0.533 56.16 0.695 C 56.16 0.837 56 1.018 55.814 1.018 C 55.654 1.018 55.494 0.843 55.494 0.667 C 55.494 0.507 55.681 0.345 55.841 0.345 Z" fill="rgb(0, 0, 0)"></path><path d="M 58.617 4.38 L 58.483 4.488 C 58.189 4.716 58.062 4.771 57.755 4.771 C 57.288 4.771 56.914 4.576 56.914 4.044 C 56.914 3.585 57.374 3.229 58.015 3.067 L 58.587 2.925 C 58.607 2.919 58.627 2.892 58.627 2.845 C 58.627 2.083 58.314 1.971 58.086 1.971 C 57.833 1.971 57.533 2.046 57.533 2.254 C 57.533 2.33 57.54 2.37 57.546 2.391 C 57.559 2.417 57.566 2.465 57.566 2.511 C 57.566 2.598 57.466 2.733 57.272 2.733 C 57.119 2.733 57.039 2.659 57.039 2.497 C 57.039 2.135 57.591 1.751 58.139 1.751 C 58.626 1.751 59.148 1.933 59.148 2.889 L 59.148 3.893 C 59.148 4.204 59.155 4.465 59.415 4.465 C 59.555 4.465 59.583 4.357 59.622 4.357 C 59.648 4.357 59.708 4.424 59.708 4.472 C 59.708 4.504 59.468 4.775 59.141 4.775 C 58.784 4.775 58.666 4.527 58.626 4.384 L 58.614 4.384 L 58.614 4.381 Z M 58.102 3.276 C 57.61 3.408 57.469 3.715 57.469 4.018 C 57.469 4.225 57.615 4.496 57.95 4.496 C 58.137 4.496 58.366 4.348 58.539 4.205 C 58.593 4.164 58.632 4.119 58.632 4.03 L 58.632 3.135 Z" fill="rgb(0, 0, 0)"></path></g><g><path d="M 5.516 1.87 C 5.516 1.87 5.328 1.484 5.264 1.355 C 4.835 0.5 4.845 0.454 4.412 0.396 C 4.291 0.38 4.228 0.364 4.228 0.303 L 4.228 0.032 L 4.264 0.006 C 5.046 0.005 6.785 0.005 6.785 0.005 L 6.852 0.027 L 6.852 0.297 C 6.852 0.359 6.808 0.391 6.72 0.391 L 6.537 0.417 C 6.075 0.454 6.151 0.644 6.458 1.261 L 9.371 7.28 L 9.471 7.307 L 12.058 1.11 C 12.148 0.86 12.134 0.683 12.018 0.579 C 11.902 0.478 11.821 0.417 11.52 0.405 L 11.278 0.393 C 11.248 0.393 11.22 0.382 11.193 0.361 C 11.166 0.342 11.152 0.317 11.152 0.286 L 11.152 0.027 L 11.189 0.001 L 14.112 0.001 L 14.142 0.027 L 14.142 0.286 C 14.142 0.356 14.102 0.391 14.024 0.391 C 13.641 0.408 13.358 0.491 13.174 0.641 C 12.99 0.792 12.847 1 12.744 1.27 C 12.744 1.27 10.365 6.766 9.551 8.594 C 9.24 9.193 8.933 9.138 8.664 8.576 C 8.095 7.393 6.492 3.803 6.492 3.803 L 5.518 1.87 Z" fill="rgb(0, 0, 0)"></path><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(0, 0, 0)"></path><path d="M 15.182 8.025 C 15.182 8.321 15.316 8.496 15.743 8.536 L 16.023 8.564 C 16.064 8.564 16.103 8.59 16.103 8.644 L 16.103 8.927 L 16.09 8.954 C 16.09 8.954 15.076 8.927 14.662 8.927 C 14.289 8.927 13.248 8.954 13.248 8.954 L 13.221 8.927 L 13.221 8.644 C 13.221 8.589 13.262 8.564 13.315 8.564 L 13.581 8.536 C 14.022 8.495 14.155 8.28 14.155 8.025 L 14.155 3.538 C 14.155 3.243 13.994 3.161 13.581 3.121 L 13.315 3.093 C 13.261 3.093 13.221 3.08 13.221 3.039 L 13.221 2.729 L 13.235 2.702 C 13.235 2.702 14.289 2.729 14.702 2.729 C 15.063 2.729 16.089 2.702 16.089 2.702 L 16.103 2.729 L 16.103 3.025 C 16.103 3.066 16.076 3.093 16.022 3.093 L 15.742 3.12 C 15.328 3.16 15.181 3.268 15.181 3.538 L 15.181 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 19.12 8.025 C 19.12 8.321 19.293 8.47 19.68 8.536 L 19.827 8.564 C 19.868 8.577 19.907 8.59 19.907 8.644 L 19.907 8.927 L 19.894 8.954 C 19.894 8.954 19.053 8.927 18.653 8.927 C 18.279 8.927 17.185 8.954 17.185 8.954 L 17.159 8.927 L 17.159 8.644 C 17.159 8.589 17.199 8.564 17.252 8.564 L 17.519 8.536 C 17.919 8.495 18.092 8.28 18.092 8.025 L 18.092 3.538 C 18.092 3.243 17.945 3.161 17.519 3.121 L 17.252 3.093 C 17.199 3.093 17.159 3.08 17.159 3.039 L 17.159 2.729 L 17.172 2.702 C 17.172 2.702 18.266 2.729 18.68 2.729 C 19.054 2.729 19.894 2.702 19.894 2.702 L 19.907 2.729 L 19.907 3.025 C 19.907 3.066 19.881 3.079 19.827 3.093 L 19.68 3.12 C 19.267 3.2 19.12 3.268 19.12 3.538 L 19.12 5.573 C 19.561 5.573 19.814 5.345 20.401 4.711 C 20.935 4.117 21.348 3.621 21.348 3.363 C 21.348 3.255 21.228 3.135 20.961 3.094 C 20.907 3.081 20.881 3.067 20.881 3.026 L 20.881 2.715 L 20.894 2.703 C 20.894 2.703 21.975 2.729 22.362 2.729 C 22.708 2.729 23.296 2.703 23.296 2.703 L 23.336 2.715 L 23.336 3.026 C 23.336 3.067 23.296 3.094 23.23 3.094 C 22.709 3.134 22.349 3.161 21.869 3.713 L 20.722 5.046 C 20.495 5.289 20.415 5.437 20.415 5.545 C 20.415 5.626 20.468 5.692 20.535 5.773 L 22.55 8.225 C 22.71 8.414 23.03 8.495 23.297 8.548 L 23.364 8.561 C 23.404 8.574 23.457 8.601 23.457 8.641 L 23.457 8.924 L 23.416 8.938 C 23.416 8.938 22.709 8.924 22.335 8.924 C 22.002 8.924 21.521 8.938 21.521 8.938 L 21.508 8.924 L 21.508 8.763 C 21.508 8.587 21.495 8.44 21.308 8.225 L 19.826 6.365 C 19.626 6.095 19.413 6.028 19.119 6.028 L 19.119 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 26.314 8.025 C 26.314 8.321 26.448 8.496 26.874 8.536 L 27.155 8.564 C 27.195 8.564 27.235 8.59 27.235 8.644 L 27.235 8.927 L 27.222 8.954 C 27.222 8.954 26.208 8.927 25.794 8.927 C 25.42 8.927 24.38 8.954 24.38 8.954 L 24.353 8.927 L 24.353 8.644 C 24.353 8.589 24.394 8.564 24.446 8.564 L 24.713 8.536 C 25.154 8.495 25.287 8.28 25.287 8.025 L 25.287 3.538 C 25.287 3.243 25.126 3.161 24.713 3.121 L 24.446 3.093 C 24.393 3.093 24.353 3.08 24.353 3.039 L 24.353 2.729 L 24.366 2.702 C 24.366 2.702 25.42 2.729 25.834 2.729 C 26.194 2.729 27.221 2.702 27.221 2.702 L 27.234 2.729 L 27.234 3.025 C 27.234 3.066 27.208 3.093 27.154 3.093 L 26.874 3.12 C 26.46 3.16 26.313 3.268 26.313 3.538 L 26.313 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 29.197 3.565 C 29.197 3.148 29.024 3.134 28.396 3.094 C 28.316 3.094 28.303 3.054 28.303 3.026 L 28.303 2.716 L 28.329 2.703 C 28.53 2.703 29.317 2.729 29.704 2.729 C 30.091 2.729 30.611 2.703 31.105 2.703 C 32.999 2.703 33.346 3.645 33.346 4.347 C 33.346 5.156 32.959 6.421 31.065 6.421 C 30.732 6.421 30.465 6.394 30.224 6.286 L 30.224 8.09 C 30.224 8.386 30.384 8.455 30.812 8.521 L 31.079 8.562 C 31.133 8.575 31.173 8.589 31.173 8.642 L 31.173 8.925 L 31.161 8.953 C 31.161 8.953 30.093 8.925 29.68 8.925 C 29.306 8.925 28.306 8.953 28.306 8.953 L 28.292 8.925 L 28.292 8.642 C 28.292 8.588 28.319 8.574 28.372 8.562 L 28.653 8.521 C 29.066 8.467 29.2 8.346 29.2 8.09 L 29.198 3.564 Z M 30.224 5.909 C 30.491 6.017 30.825 6.031 31.092 6.031 C 31.893 6.031 32.279 5.545 32.279 4.508 C 32.279 3.35 31.758 3.094 31.025 3.094 C 30.384 3.094 30.224 3.215 30.224 3.565 L 30.224 5.909 Z" fill="rgb(0, 0, 0)"></path><path d="M 35.644 8.927 C 35.244 8.927 34.324 8.954 34.324 8.954 L 34.31 8.927 L 34.31 8.63 C 34.31 8.604 34.324 8.564 34.39 8.564 L 34.698 8.536 C 35.112 8.495 35.231 8.226 35.231 7.957 L 35.231 3.512 C 35.231 3.201 35.071 3.148 34.698 3.121 L 34.39 3.093 C 34.31 3.08 34.31 3.053 34.31 3.039 L 34.31 2.729 L 34.324 2.702 C 34.324 2.702 35.364 2.729 35.765 2.729 L 37.726 2.729 C 38.127 2.729 39.075 2.702 39.075 2.702 L 39.103 2.729 C 39.115 3.308 39.209 3.834 39.304 4.346 L 38.971 4.4 C 38.825 3.901 38.571 3.188 37.717 3.188 L 36.65 3.188 C 36.397 3.188 36.263 3.282 36.263 3.51 L 36.263 5.464 L 37.263 5.464 C 37.637 5.464 37.731 5.302 37.784 5.033 L 37.863 4.75 C 37.863 4.709 37.891 4.682 37.943 4.682 L 38.17 4.682 C 38.198 4.682 38.198 4.697 38.198 4.723 C 38.17 5.019 38.118 5.397 38.118 5.721 C 38.118 6.044 38.171 6.341 38.198 6.651 L 38.17 6.678 L 37.943 6.678 C 37.877 6.678 37.849 6.651 37.849 6.611 L 37.782 6.315 C 37.729 6.045 37.609 5.896 37.261 5.896 L 36.261 5.896 L 36.261 7.958 C 36.261 8.213 36.407 8.469 36.649 8.469 L 37.916 8.469 C 38.597 8.469 38.972 8.038 39.13 7.336 L 39.463 7.377 L 39.195 8.926 L 39.169 8.953 C 39.169 8.953 38.382 8.926 37.981 8.926 L 35.647 8.929 Z" fill="rgb(0, 0, 0)"></path><path d="M 40.662 8.564 L 40.969 8.536 C 41.37 8.495 41.503 8.375 41.503 7.957 L 41.503 3.512 C 41.503 3.16 41.409 3.16 40.969 3.121 L 40.677 3.093 C 40.623 3.093 40.583 3.066 40.583 3.025 L 40.583 2.729 L 40.596 2.702 C 40.596 2.702 41.77 2.729 42.011 2.729 C 42.264 2.729 43.426 2.702 43.773 2.702 C 46.001 2.702 47.095 4.103 47.095 5.895 C 47.095 8.253 45.441 8.952 43.96 8.952 C 42.893 8.952 42.426 8.924 42.012 8.924 C 41.599 8.924 40.597 8.952 40.597 8.952 L 40.584 8.924 L 40.584 8.641 C 40.582 8.603 40.609 8.562 40.662 8.562 Z M 43.638 8.564 C 45.105 8.564 45.933 8.012 45.933 6.125 C 45.933 4.724 45.626 3.094 43.384 3.094 C 42.863 3.094 42.53 3.174 42.53 3.512 L 42.53 7.957 C 42.53 8.333 42.623 8.564 43.637 8.564 Z" fill="rgb(0, 0, 0)"></path><path d="M 50.245 8.025 C 50.245 8.321 50.378 8.496 50.805 8.536 L 51.086 8.564 C 51.126 8.564 51.166 8.59 51.166 8.644 L 51.166 8.927 L 51.152 8.954 C 51.152 8.954 50.138 8.927 49.725 8.927 C 49.352 8.927 48.311 8.954 48.311 8.954 L 48.284 8.927 L 48.284 8.644 C 48.284 8.589 48.324 8.564 48.377 8.564 L 48.644 8.536 C 49.084 8.495 49.218 8.28 49.218 8.025 L 49.218 3.538 C 49.218 3.243 49.057 3.161 48.644 3.121 L 48.377 3.093 C 48.323 3.093 48.284 3.08 48.284 3.039 L 48.284 2.729 L 48.297 2.702 C 48.297 2.702 49.351 2.729 49.763 2.729 C 50.123 2.729 51.152 2.702 51.152 2.702 L 51.164 2.729 L 51.164 3.025 C 51.164 3.066 51.136 3.093 51.084 3.093 L 50.803 3.12 C 50.389 3.16 50.243 3.268 50.243 3.538 Z" fill="rgb(0, 0, 0)"></path><path d="M 54.355 8.536 L 54.743 8.564 C 54.796 8.564 54.849 8.604 54.849 8.671 L 54.849 8.927 L 54.823 8.954 C 54.823 8.954 53.368 8.927 53.048 8.927 C 52.701 8.927 51.847 8.954 51.847 8.954 L 51.819 8.927 L 51.819 8.671 C 51.819 8.604 51.86 8.564 51.927 8.564 C 52.514 8.523 52.847 8.415 53.221 7.553 L 56.183 0.547 C 56.329 0.197 56.436 0.061 56.637 0.061 C 56.823 0.061 56.891 0.196 56.996 0.466 L 59.732 7.768 C 59.919 8.294 60.186 8.495 60.72 8.549 L 60.866 8.563 C 60.933 8.563 61 8.603 61 8.671 L 61 8.926 L 60.96 8.954 C 60.96 8.954 59.932 8.926 59.411 8.926 C 58.944 8.926 57.636 8.954 57.636 8.954 L 57.624 8.926 L 57.624 8.671 C 57.624 8.603 57.65 8.563 57.719 8.563 L 58.092 8.535 C 58.599 8.495 58.787 8.333 58.653 7.956 L 57.839 5.678 L 55.063 5.678 C 54.743 5.678 54.662 5.732 54.596 5.906 L 53.822 7.86 C 53.689 8.2 53.862 8.496 54.356 8.537 Z M 57.624 5.113 L 56.33 1.517 L 56.304 1.517 L 54.969 4.939 C 54.916 5.075 55.009 5.114 55.303 5.114 L 57.625 5.114 Z" fill="rgb(0, 0, 0)"></path></g></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                p(S, {
                                  className: `framer-9r1qjk`,
                                  layoutDependency: x,
                                  layoutId: `K7moh7Y6k`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.708 6.278" overflow="visible"><g><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(0, 0, 0)"></path><path d="M 9.456 4.184 C 9.19 4.534 8.829 4.77 8.322 4.77 C 7.842 4.77 7.528 4.609 7.301 4.339 C 7.081 4.084 6.988 3.72 6.988 3.343 C 6.988 2.317 7.741 1.758 8.322 1.758 C 9.25 1.758 9.45 2.366 9.45 2.931 C 9.45 3.005 9.403 3.045 9.323 3.045 L 7.548 3.032 C 7.548 3.423 7.628 3.733 7.762 3.955 C 7.969 4.298 8.249 4.44 8.489 4.44 C 8.876 4.44 9.069 4.333 9.316 4.077 C 9.396 4.083 9.437 4.118 9.456 4.184 Z M 8.775 2.783 C 8.849 2.782 8.875 2.75 8.875 2.688 C 8.875 2.121 8.575 1.981 8.322 1.981 C 8.161 1.981 7.694 2.042 7.568 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 12.23 2.528 L 12.23 3.881 C 12.23 4.441 12.343 4.474 12.81 4.494 C 12.851 4.535 12.851 4.677 12.81 4.717 C 12.477 4.709 12.283 4.704 11.95 4.704 C 11.616 4.704 11.409 4.711 11.082 4.717 C 11.042 4.676 11.042 4.534 11.082 4.494 C 11.549 4.474 11.662 4.44 11.662 3.881 L 11.662 1.18 C 11.662 0.622 11.549 0.586 11.082 0.566 C 11.042 0.525 11.042 0.382 11.082 0.342 C 11.416 0.35 11.943 0.356 11.943 0.356 L 13.646 0.356 C 13.805 0.356 13.844 0.352 13.96 0.329 C 13.976 0.329 13.984 0.334 13.986 0.349 C 13.996 0.401 14.096 1.05 14.131 1.326 L 13.924 1.359 C 13.777 0.894 13.67 0.625 13.17 0.625 L 12.47 0.625 C 12.309 0.625 12.229 0.692 12.229 0.854 L 12.229 2.268 L 12.85 2.268 C 13.417 2.268 13.437 2.181 13.457 1.81 C 13.498 1.77 13.637 1.77 13.678 1.81 C 13.671 2.012 13.665 2.161 13.665 2.39 C 13.665 2.619 13.671 2.746 13.678 2.982 C 13.637 3.023 13.498 3.023 13.457 2.982 C 13.438 2.679 13.417 2.524 12.85 2.524 L 12.229 2.524 L 12.229 2.527 Z" fill="rgb(0, 0, 0)"></path><path d="M 14.405 2.111 C 14.378 2.07 14.378 1.963 14.392 1.923 C 14.852 1.862 15.119 1.801 15.305 1.728 C 15.359 1.728 15.392 1.748 15.392 1.776 C 15.392 1.776 15.359 2.099 15.359 2.315 C 15.359 2.347 15.379 2.382 15.419 2.307 C 15.573 2.045 15.846 1.749 16.159 1.749 C 16.44 1.749 16.56 1.943 16.56 2.071 C 16.56 2.241 16.406 2.408 16.246 2.408 C 16.106 2.408 16.039 2.28 15.973 2.213 C 15.933 2.173 15.88 2.166 15.833 2.166 C 15.753 2.166 15.599 2.388 15.526 2.496 C 15.446 2.617 15.366 2.771 15.366 2.947 L 15.366 3.885 C 15.366 4.443 15.446 4.464 15.913 4.498 C 15.953 4.539 15.953 4.681 15.913 4.72 C 15.626 4.713 15.379 4.707 15.106 4.707 C 14.832 4.707 14.625 4.714 14.345 4.72 C 14.304 4.681 14.304 4.538 14.345 4.498 C 14.758 4.47 14.838 4.444 14.838 3.885 L 14.838 2.571 C 14.838 2.199 14.765 2.146 14.405 2.112 Z" fill="rgb(0, 0, 0)"></path><path d="M 19.289 4.184 C 19.022 4.534 18.662 4.77 18.155 4.77 C 17.675 4.77 17.361 4.609 17.134 4.339 C 16.914 4.084 16.821 3.72 16.821 3.343 C 16.821 2.317 17.574 1.758 18.155 1.758 C 19.083 1.758 19.282 2.366 19.282 2.931 C 19.282 3.005 19.235 3.045 19.155 3.045 L 17.381 3.032 C 17.381 3.423 17.461 3.733 17.595 3.955 C 17.802 4.298 18.082 4.44 18.322 4.44 C 18.709 4.44 18.902 4.333 19.149 4.077 C 19.229 4.083 19.269 4.118 19.289 4.184 Z M 18.608 2.783 C 18.682 2.782 18.708 2.75 18.708 2.688 C 18.708 2.121 18.408 1.981 18.154 1.981 C 17.994 1.981 17.527 2.042 17.401 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 22.291 4.184 C 22.024 4.534 21.663 4.77 21.157 4.77 C 20.676 4.77 20.363 4.609 20.136 4.339 C 19.915 4.084 19.822 3.72 19.822 3.343 C 19.822 2.317 20.576 1.758 21.157 1.758 C 22.084 1.758 22.284 2.366 22.284 2.931 C 22.284 3.005 22.237 3.045 22.157 3.045 L 20.383 3.032 C 20.383 3.423 20.463 3.733 20.596 3.955 C 20.803 4.298 21.083 4.44 21.323 4.44 C 21.71 4.44 21.904 4.333 22.15 4.077 C 22.23 4.083 22.271 4.118 22.291 4.184 Z M 21.611 2.783 C 21.684 2.782 21.71 2.75 21.71 2.688 C 21.71 2.121 21.41 1.981 21.157 1.981 C 20.997 1.981 20.529 2.042 20.403 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 26.279 1.814 C 26.32 1.773 26.459 1.773 26.5 1.814 C 26.493 2.016 26.487 2.164 26.487 2.393 C 26.487 2.622 26.493 2.75 26.5 2.986 C 26.459 3.027 26.32 3.027 26.279 2.986 C 26.26 2.683 26.239 2.528 25.672 2.528 L 25.065 2.528 L 25.065 4.151 C 25.065 4.334 25.158 4.441 25.305 4.441 L 26.212 4.441 C 26.718 4.441 26.952 4.043 27.086 3.559 C 27.173 3.538 27.25 3.553 27.319 3.592 C 27.266 3.935 27.166 4.38 27.073 4.718 C 27.073 4.718 26.539 4.704 26.218 4.704 L 24.784 4.704 C 24.784 4.704 24.243 4.712 23.917 4.718 C 23.876 4.677 23.876 4.535 23.917 4.495 C 24.384 4.475 24.497 4.441 24.497 3.882 L 24.497 1.181 C 24.497 0.622 24.384 0.587 23.917 0.567 C 23.876 0.526 23.876 0.383 23.917 0.343 C 24.25 0.351 24.777 0.357 24.777 0.357 L 26.478 0.357 C 26.638 0.357 26.692 0.35 26.805 0.33 C 26.825 0.33 26.832 0.337 26.832 0.35 C 26.845 0.404 26.945 1.051 26.978 1.327 C 26.913 1.359 26.841 1.372 26.758 1.36 C 26.611 0.895 26.505 0.626 26.005 0.626 L 25.304 0.626 C 25.144 0.626 25.064 0.761 25.064 0.922 L 25.064 2.269 L 25.671 2.269 C 26.238 2.272 26.258 2.185 26.279 1.814 Z" fill="rgb(0, 0, 0)"></path><path d="M 29.769 1.746 C 30.002 1.746 30.209 1.826 30.322 1.974 C 30.476 2.183 30.502 2.506 30.502 2.876 L 30.502 3.88 C 30.502 4.432 30.577 4.46 30.95 4.494 C 30.983 4.534 30.983 4.676 30.95 4.716 C 30.663 4.709 30.516 4.703 30.243 4.703 C 29.971 4.703 29.844 4.71 29.562 4.716 C 29.529 4.675 29.529 4.534 29.562 4.494 C 29.909 4.46 29.976 4.433 29.976 3.88 L 29.976 2.855 C 29.976 2.653 29.963 2.472 29.896 2.337 C 29.816 2.182 29.676 2.095 29.543 2.095 C 29.283 2.095 29.022 2.242 28.769 2.492 C 28.715 2.553 28.655 2.634 28.655 2.776 L 28.655 3.88 C 28.655 4.432 28.716 4.46 29.056 4.494 C 29.096 4.534 29.096 4.676 29.056 4.716 C 28.775 4.709 28.655 4.703 28.395 4.703 C 28.108 4.703 27.935 4.71 27.662 4.716 C 27.621 4.675 27.621 4.534 27.662 4.494 C 28.062 4.46 28.129 4.433 28.129 3.88 L 28.129 2.567 C 28.129 2.176 28.055 2.143 27.696 2.11 C 27.682 2.069 27.669 1.961 27.682 1.921 C 28.143 1.861 28.416 1.8 28.603 1.726 C 28.657 1.726 28.684 1.746 28.684 1.78 C 28.684 1.78 28.65 2.091 28.65 2.291 C 28.65 2.386 28.698 2.318 28.717 2.291 C 29.124 1.835 29.444 1.746 29.771 1.746 Z" fill="rgb(0, 0, 0)"></path><path d="M 32.605 4.77 C 31.764 4.77 31.283 4.171 31.283 3.302 C 31.283 2.346 31.991 1.746 32.652 1.746 C 33.312 1.746 33.672 2.016 33.672 2.385 C 33.672 2.593 33.485 2.681 33.345 2.681 C 33.205 2.681 33.112 2.62 33.091 2.438 C 33.064 2.202 33.011 1.966 32.617 1.966 C 32.177 1.966 31.856 2.411 31.856 3.152 C 31.856 3.94 32.264 4.438 32.75 4.438 C 33.038 4.438 33.324 4.29 33.551 3.995 C 33.611 4.001 33.664 4.027 33.691 4.089 C 33.358 4.643 33.004 4.771 32.604 4.771 Z" fill="rgb(0, 0, 0)"></path><path d="M 34.573 6.267 C 34.392 6.267 34.259 6.158 34.259 6.018 C 34.259 5.93 34.359 5.728 34.553 5.728 C 34.627 5.728 34.652 5.748 34.746 5.748 C 34.912 5.748 35.006 5.688 35.079 5.553 C 35.179 5.344 35.26 5.158 35.34 4.934 C 35.406 4.745 35.305 4.435 35.246 4.299 L 34.49 2.528 C 34.309 2.099 34.255 2.05 33.965 2.022 C 33.925 1.981 33.925 1.839 33.965 1.799 C 34.099 1.806 34.278 1.811 34.506 1.811 C 34.747 1.811 35.013 1.806 35.26 1.799 C 35.3 1.84 35.3 1.982 35.26 2.022 C 34.85 2.055 34.921 2.176 35.041 2.461 L 35.632 3.861 C 35.688 3.995 35.745 3.977 35.791 3.869 L 36.454 2.326 C 36.558 2.081 36.343 2.043 36.133 2.023 C 36.092 1.982 36.092 1.84 36.133 1.8 C 36.379 1.807 36.507 1.812 36.74 1.812 C 36.927 1.812 37.048 1.806 37.213 1.8 C 37.253 1.841 37.253 1.983 37.213 2.023 C 36.967 2.043 36.767 2.259 36.672 2.454 C 36.319 3.208 36.028 3.903 35.491 5.203 C 35.41 5.402 35.322 5.595 35.218 5.782 C 34.979 6.214 34.711 6.268 34.571 6.268 Z" fill="rgb(0, 0, 0)"></path><path d="M 38.782 4.77 C 37.942 4.77 37.462 4.171 37.462 3.302 C 37.462 2.346 38.169 1.746 38.83 1.746 C 39.491 1.746 39.85 2.016 39.85 2.385 C 39.85 2.593 39.663 2.681 39.523 2.681 C 39.383 2.681 39.29 2.62 39.27 2.438 C 39.243 2.202 39.19 1.966 38.797 1.966 C 38.356 1.966 38.036 2.411 38.036 3.152 C 38.036 3.94 38.443 4.438 38.93 4.438 C 39.217 4.438 39.503 4.29 39.731 3.995 C 39.791 4.001 39.844 4.027 39.871 4.089 C 39.538 4.643 39.184 4.771 38.783 4.771 Z" fill="rgb(0, 0, 0)"></path><path d="M 40.645 0.938 C 40.645 0.372 40.565 0.407 40.218 0.387 C 40.178 0.347 40.164 0.239 40.178 0.184 C 40.444 0.164 40.944 0.07 41.112 0.002 C 41.171 0.002 41.198 0.022 41.198 0.07 C 41.198 0.07 41.17 0.339 41.17 0.777 L 41.17 3.882 C 41.17 4.442 41.245 4.475 41.652 4.495 C 41.692 4.536 41.692 4.678 41.652 4.718 C 41.363 4.71 41.198 4.704 40.911 4.704 C 40.625 4.704 40.444 4.712 40.164 4.718 C 40.123 4.677 40.123 4.535 40.164 4.495 C 40.57 4.475 40.645 4.441 40.645 3.882 L 40.645 0.939 Z" fill="rgb(0, 0, 0)"></path><path d="M 43.432 1.746 C 44.467 1.746 44.833 2.561 44.833 3.262 C 44.833 3.963 44.413 4.771 43.419 4.771 C 42.478 4.771 42.017 4.01 42.017 3.323 C 42.017 2.467 42.531 1.746 43.432 1.746 Z M 42.592 3.168 C 42.592 3.687 42.846 4.549 43.54 4.549 C 43.853 4.549 44.26 4.366 44.26 3.479 C 44.26 2.489 43.933 1.97 43.359 1.97 C 42.799 1.968 42.592 2.581 42.592 3.168 Z" fill="rgb(0, 0, 0)"></path><path d="M 47.108 1.746 C 47.789 1.746 48.289 2.405 48.289 3.119 C 48.289 3.665 48.109 4.081 47.795 4.392 C 47.522 4.656 47.189 4.769 46.815 4.769 C 46.604 4.769 46.398 4.732 46.234 4.665 C 46.166 4.637 46.141 4.629 46.141 4.716 L 46.141 5.443 C 46.141 6.002 46.215 6.029 46.688 6.057 C 46.728 6.097 46.728 6.239 46.688 6.278 C 46.401 6.273 46.195 6.265 45.88 6.265 C 45.587 6.265 45.413 6.273 45.133 6.278 C 45.093 6.238 45.093 6.095 45.133 6.055 C 45.54 6.035 45.614 6.001 45.614 5.442 L 45.614 2.566 C 45.614 2.182 45.54 2.141 45.18 2.107 C 45.167 2.066 45.152 1.96 45.167 1.919 C 45.626 1.859 45.887 1.798 46.075 1.724 C 46.129 1.724 46.163 1.744 46.163 1.771 C 46.163 1.771 46.135 1.96 46.135 2.202 C 46.135 2.251 46.173 2.244 46.195 2.222 C 46.494 1.915 46.861 1.745 47.109 1.745 Z M 46.141 2.743 L 46.141 3.996 C 46.141 4.239 46.168 4.279 46.3 4.399 C 46.421 4.508 46.654 4.541 46.775 4.541 C 47.522 4.541 47.715 3.854 47.715 3.3 C 47.715 2.54 47.348 2.056 46.921 2.056 C 46.726 2.056 46.454 2.231 46.248 2.446 C 46.162 2.537 46.141 2.603 46.141 2.745 Z" fill="rgb(0, 0, 0)"></path><path d="M 51.279 4.184 C 51.012 4.534 50.651 4.77 50.144 4.77 C 49.664 4.77 49.35 4.609 49.124 4.339 C 48.903 4.084 48.811 3.72 48.811 3.343 C 48.811 2.317 49.565 1.758 50.146 1.758 C 51.075 1.758 51.273 2.366 51.273 2.931 C 51.273 3.005 51.227 3.045 51.147 3.045 L 49.371 3.032 C 49.371 3.423 49.451 3.733 49.585 3.955 C 49.792 4.298 50.072 4.44 50.313 4.44 C 50.7 4.44 50.893 4.333 51.139 4.077 C 51.219 4.083 51.26 4.118 51.28 4.184 Z M 50.598 2.783 C 50.672 2.782 50.698 2.75 50.698 2.688 C 50.698 2.121 50.397 1.981 50.143 1.981 C 49.984 1.981 49.517 2.042 49.39 2.803 Z" fill="rgb(0, 0, 0)"></path><path d="M 52.947 4.77 C 52.226 4.77 51.812 4.164 51.812 3.335 C 51.812 2.835 51.985 2.439 52.272 2.15 C 52.539 1.894 52.833 1.745 53.273 1.745 C 53.493 1.745 53.767 1.86 53.793 1.86 C 53.84 1.86 53.854 1.846 53.854 1.799 L 53.854 0.937 C 53.854 0.371 53.774 0.405 53.427 0.385 C 53.387 0.346 53.373 0.237 53.387 0.182 C 53.653 0.162 54.147 0.068 54.314 0.001 C 54.374 0.001 54.402 0.021 54.402 0.068 C 54.402 0.068 54.374 0.337 54.374 0.776 L 54.374 3.827 C 54.374 4.158 54.435 4.285 54.861 4.319 C 54.902 4.359 54.902 4.46 54.861 4.501 C 54.454 4.549 54.155 4.649 54.007 4.771 C 53.954 4.784 53.907 4.79 53.854 4.771 C 53.854 4.771 53.861 4.44 53.861 4.373 C 53.861 4.325 53.813 4.338 53.781 4.363 C 53.454 4.635 53.207 4.769 52.947 4.769 Z M 53.854 2.588 C 53.854 2.38 53.834 2.332 53.741 2.225 C 53.606 2.07 53.44 1.981 53.199 1.981 C 53.066 1.981 52.784 2.001 52.579 2.317 C 52.48 2.458 52.385 2.728 52.385 3.213 C 52.385 4.054 52.759 4.453 53.12 4.453 C 53.285 4.453 53.499 4.345 53.748 4.129 C 53.842 4.048 53.854 3.995 53.854 3.867 L 53.854 2.588 Z" fill="rgb(0, 0, 0)"></path><path d="M 56.582 4.494 C 56.623 4.535 56.623 4.677 56.582 4.717 C 56.295 4.709 56.128 4.704 55.842 4.704 C 55.555 4.704 55.376 4.711 55.094 4.717 C 55.056 4.676 55.056 4.534 55.094 4.494 C 55.501 4.461 55.575 4.44 55.575 3.881 L 55.575 2.568 C 55.575 2.185 55.505 2.146 55.141 2.111 C 55.128 2.07 55.113 1.962 55.128 1.922 C 55.588 1.861 55.852 1.801 56.042 1.726 C 56.095 1.726 56.127 1.746 56.127 1.774 C 56.127 1.774 56.101 2.205 56.101 2.541 L 56.101 3.884 C 56.101 4.442 56.174 4.468 56.58 4.495 Z M 55.841 0.345 C 56.022 0.345 56.16 0.533 56.16 0.695 C 56.16 0.837 56 1.018 55.814 1.018 C 55.654 1.018 55.494 0.843 55.494 0.667 C 55.494 0.507 55.681 0.345 55.841 0.345 Z" fill="rgb(0, 0, 0)"></path><path d="M 58.617 4.38 L 58.483 4.488 C 58.189 4.716 58.062 4.771 57.755 4.771 C 57.288 4.771 56.914 4.576 56.914 4.044 C 56.914 3.585 57.374 3.229 58.015 3.067 L 58.587 2.925 C 58.607 2.919 58.627 2.892 58.627 2.845 C 58.627 2.083 58.314 1.971 58.086 1.971 C 57.833 1.971 57.533 2.046 57.533 2.254 C 57.533 2.33 57.54 2.37 57.546 2.391 C 57.559 2.417 57.566 2.465 57.566 2.511 C 57.566 2.598 57.466 2.733 57.272 2.733 C 57.119 2.733 57.039 2.659 57.039 2.497 C 57.039 2.135 57.591 1.751 58.139 1.751 C 58.626 1.751 59.148 1.933 59.148 2.889 L 59.148 3.893 C 59.148 4.204 59.155 4.465 59.415 4.465 C 59.555 4.465 59.583 4.357 59.622 4.357 C 59.648 4.357 59.708 4.424 59.708 4.472 C 59.708 4.504 59.468 4.775 59.141 4.775 C 58.784 4.775 58.666 4.527 58.626 4.384 L 58.614 4.384 L 58.614 4.381 Z M 58.102 3.276 C 57.61 3.408 57.469 3.715 57.469 4.018 C 57.469 4.225 57.615 4.496 57.95 4.496 C 58.137 4.496 58.366 4.348 58.539 4.205 C 58.593 4.164 58.632 4.119 58.632 4.03 L 58.632 3.135 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "adguRWWdy-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.708 6.278" overflow="visible"><g><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(255, 255, 255)"></path><path d="M 9.456 4.184 C 9.19 4.534 8.829 4.77 8.322 4.77 C 7.842 4.77 7.528 4.609 7.301 4.339 C 7.081 4.084 6.988 3.72 6.988 3.343 C 6.988 2.317 7.741 1.758 8.322 1.758 C 9.25 1.758 9.45 2.366 9.45 2.931 C 9.45 3.005 9.403 3.045 9.323 3.045 L 7.548 3.032 C 7.548 3.423 7.628 3.733 7.762 3.955 C 7.969 4.298 8.249 4.44 8.489 4.44 C 8.876 4.44 9.069 4.333 9.316 4.077 C 9.396 4.083 9.437 4.118 9.456 4.184 Z M 8.775 2.783 C 8.849 2.782 8.875 2.75 8.875 2.688 C 8.875 2.121 8.575 1.981 8.322 1.981 C 8.161 1.981 7.694 2.042 7.568 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 12.23 2.528 L 12.23 3.881 C 12.23 4.441 12.343 4.474 12.81 4.494 C 12.851 4.535 12.851 4.677 12.81 4.717 C 12.477 4.709 12.283 4.704 11.95 4.704 C 11.616 4.704 11.409 4.711 11.082 4.717 C 11.042 4.676 11.042 4.534 11.082 4.494 C 11.549 4.474 11.662 4.44 11.662 3.881 L 11.662 1.18 C 11.662 0.622 11.549 0.586 11.082 0.566 C 11.042 0.525 11.042 0.382 11.082 0.342 C 11.416 0.35 11.943 0.356 11.943 0.356 L 13.646 0.356 C 13.805 0.356 13.844 0.352 13.96 0.329 C 13.976 0.329 13.984 0.334 13.986 0.349 C 13.996 0.401 14.096 1.05 14.131 1.326 L 13.924 1.359 C 13.777 0.894 13.67 0.625 13.17 0.625 L 12.47 0.625 C 12.309 0.625 12.229 0.692 12.229 0.854 L 12.229 2.268 L 12.85 2.268 C 13.417 2.268 13.437 2.181 13.457 1.81 C 13.498 1.77 13.637 1.77 13.678 1.81 C 13.671 2.012 13.665 2.161 13.665 2.39 C 13.665 2.619 13.671 2.746 13.678 2.982 C 13.637 3.023 13.498 3.023 13.457 2.982 C 13.438 2.679 13.417 2.524 12.85 2.524 L 12.229 2.524 L 12.229 2.527 Z" fill="rgb(255, 255, 255)"></path><path d="M 14.405 2.111 C 14.378 2.07 14.378 1.963 14.392 1.923 C 14.852 1.862 15.119 1.801 15.305 1.728 C 15.359 1.728 15.392 1.748 15.392 1.776 C 15.392 1.776 15.359 2.099 15.359 2.315 C 15.359 2.347 15.379 2.382 15.419 2.307 C 15.573 2.045 15.846 1.749 16.159 1.749 C 16.44 1.749 16.56 1.943 16.56 2.071 C 16.56 2.241 16.406 2.408 16.246 2.408 C 16.106 2.408 16.039 2.28 15.973 2.213 C 15.933 2.173 15.88 2.166 15.833 2.166 C 15.753 2.166 15.599 2.388 15.526 2.496 C 15.446 2.617 15.366 2.771 15.366 2.947 L 15.366 3.885 C 15.366 4.443 15.446 4.464 15.913 4.498 C 15.953 4.539 15.953 4.681 15.913 4.72 C 15.626 4.713 15.379 4.707 15.106 4.707 C 14.832 4.707 14.625 4.714 14.345 4.72 C 14.304 4.681 14.304 4.538 14.345 4.498 C 14.758 4.47 14.838 4.444 14.838 3.885 L 14.838 2.571 C 14.838 2.199 14.765 2.146 14.405 2.112 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.289 4.184 C 19.022 4.534 18.662 4.77 18.155 4.77 C 17.675 4.77 17.361 4.609 17.134 4.339 C 16.914 4.084 16.821 3.72 16.821 3.343 C 16.821 2.317 17.574 1.758 18.155 1.758 C 19.083 1.758 19.282 2.366 19.282 2.931 C 19.282 3.005 19.235 3.045 19.155 3.045 L 17.381 3.032 C 17.381 3.423 17.461 3.733 17.595 3.955 C 17.802 4.298 18.082 4.44 18.322 4.44 C 18.709 4.44 18.902 4.333 19.149 4.077 C 19.229 4.083 19.269 4.118 19.289 4.184 Z M 18.608 2.783 C 18.682 2.782 18.708 2.75 18.708 2.688 C 18.708 2.121 18.408 1.981 18.154 1.981 C 17.994 1.981 17.527 2.042 17.401 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 22.291 4.184 C 22.024 4.534 21.663 4.77 21.157 4.77 C 20.676 4.77 20.363 4.609 20.136 4.339 C 19.915 4.084 19.822 3.72 19.822 3.343 C 19.822 2.317 20.576 1.758 21.157 1.758 C 22.084 1.758 22.284 2.366 22.284 2.931 C 22.284 3.005 22.237 3.045 22.157 3.045 L 20.383 3.032 C 20.383 3.423 20.463 3.733 20.596 3.955 C 20.803 4.298 21.083 4.44 21.323 4.44 C 21.71 4.44 21.904 4.333 22.15 4.077 C 22.23 4.083 22.271 4.118 22.291 4.184 Z M 21.611 2.783 C 21.684 2.782 21.71 2.75 21.71 2.688 C 21.71 2.121 21.41 1.981 21.157 1.981 C 20.997 1.981 20.529 2.042 20.403 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.279 1.814 C 26.32 1.773 26.459 1.773 26.5 1.814 C 26.493 2.016 26.487 2.164 26.487 2.393 C 26.487 2.622 26.493 2.75 26.5 2.986 C 26.459 3.027 26.32 3.027 26.279 2.986 C 26.26 2.683 26.239 2.528 25.672 2.528 L 25.065 2.528 L 25.065 4.151 C 25.065 4.334 25.158 4.441 25.305 4.441 L 26.212 4.441 C 26.718 4.441 26.952 4.043 27.086 3.559 C 27.173 3.538 27.25 3.553 27.319 3.592 C 27.266 3.935 27.166 4.38 27.073 4.718 C 27.073 4.718 26.539 4.704 26.218 4.704 L 24.784 4.704 C 24.784 4.704 24.243 4.712 23.917 4.718 C 23.876 4.677 23.876 4.535 23.917 4.495 C 24.384 4.475 24.497 4.441 24.497 3.882 L 24.497 1.181 C 24.497 0.622 24.384 0.587 23.917 0.567 C 23.876 0.526 23.876 0.383 23.917 0.343 C 24.25 0.351 24.777 0.357 24.777 0.357 L 26.478 0.357 C 26.638 0.357 26.692 0.35 26.805 0.33 C 26.825 0.33 26.832 0.337 26.832 0.35 C 26.845 0.404 26.945 1.051 26.978 1.327 C 26.913 1.359 26.841 1.372 26.758 1.36 C 26.611 0.895 26.505 0.626 26.005 0.626 L 25.304 0.626 C 25.144 0.626 25.064 0.761 25.064 0.922 L 25.064 2.269 L 25.671 2.269 C 26.238 2.272 26.258 2.185 26.279 1.814 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.769 1.746 C 30.002 1.746 30.209 1.826 30.322 1.974 C 30.476 2.183 30.502 2.506 30.502 2.876 L 30.502 3.88 C 30.502 4.432 30.577 4.46 30.95 4.494 C 30.983 4.534 30.983 4.676 30.95 4.716 C 30.663 4.709 30.516 4.703 30.243 4.703 C 29.971 4.703 29.844 4.71 29.562 4.716 C 29.529 4.675 29.529 4.534 29.562 4.494 C 29.909 4.46 29.976 4.433 29.976 3.88 L 29.976 2.855 C 29.976 2.653 29.963 2.472 29.896 2.337 C 29.816 2.182 29.676 2.095 29.543 2.095 C 29.283 2.095 29.022 2.242 28.769 2.492 C 28.715 2.553 28.655 2.634 28.655 2.776 L 28.655 3.88 C 28.655 4.432 28.716 4.46 29.056 4.494 C 29.096 4.534 29.096 4.676 29.056 4.716 C 28.775 4.709 28.655 4.703 28.395 4.703 C 28.108 4.703 27.935 4.71 27.662 4.716 C 27.621 4.675 27.621 4.534 27.662 4.494 C 28.062 4.46 28.129 4.433 28.129 3.88 L 28.129 2.567 C 28.129 2.176 28.055 2.143 27.696 2.11 C 27.682 2.069 27.669 1.961 27.682 1.921 C 28.143 1.861 28.416 1.8 28.603 1.726 C 28.657 1.726 28.684 1.746 28.684 1.78 C 28.684 1.78 28.65 2.091 28.65 2.291 C 28.65 2.386 28.698 2.318 28.717 2.291 C 29.124 1.835 29.444 1.746 29.771 1.746 Z" fill="rgb(255, 255, 255)"></path><path d="M 32.605 4.77 C 31.764 4.77 31.283 4.171 31.283 3.302 C 31.283 2.346 31.991 1.746 32.652 1.746 C 33.312 1.746 33.672 2.016 33.672 2.385 C 33.672 2.593 33.485 2.681 33.345 2.681 C 33.205 2.681 33.112 2.62 33.091 2.438 C 33.064 2.202 33.011 1.966 32.617 1.966 C 32.177 1.966 31.856 2.411 31.856 3.152 C 31.856 3.94 32.264 4.438 32.75 4.438 C 33.038 4.438 33.324 4.29 33.551 3.995 C 33.611 4.001 33.664 4.027 33.691 4.089 C 33.358 4.643 33.004 4.771 32.604 4.771 Z" fill="rgb(255, 255, 255)"></path><path d="M 34.573 6.267 C 34.392 6.267 34.259 6.158 34.259 6.018 C 34.259 5.93 34.359 5.728 34.553 5.728 C 34.627 5.728 34.652 5.748 34.746 5.748 C 34.912 5.748 35.006 5.688 35.079 5.553 C 35.179 5.344 35.26 5.158 35.34 4.934 C 35.406 4.745 35.305 4.435 35.246 4.299 L 34.49 2.528 C 34.309 2.099 34.255 2.05 33.965 2.022 C 33.925 1.981 33.925 1.839 33.965 1.799 C 34.099 1.806 34.278 1.811 34.506 1.811 C 34.747 1.811 35.013 1.806 35.26 1.799 C 35.3 1.84 35.3 1.982 35.26 2.022 C 34.85 2.055 34.921 2.176 35.041 2.461 L 35.632 3.861 C 35.688 3.995 35.745 3.977 35.791 3.869 L 36.454 2.326 C 36.558 2.081 36.343 2.043 36.133 2.023 C 36.092 1.982 36.092 1.84 36.133 1.8 C 36.379 1.807 36.507 1.812 36.74 1.812 C 36.927 1.812 37.048 1.806 37.213 1.8 C 37.253 1.841 37.253 1.983 37.213 2.023 C 36.967 2.043 36.767 2.259 36.672 2.454 C 36.319 3.208 36.028 3.903 35.491 5.203 C 35.41 5.402 35.322 5.595 35.218 5.782 C 34.979 6.214 34.711 6.268 34.571 6.268 Z" fill="rgb(255, 255, 255)"></path><path d="M 38.782 4.77 C 37.942 4.77 37.462 4.171 37.462 3.302 C 37.462 2.346 38.169 1.746 38.83 1.746 C 39.491 1.746 39.85 2.016 39.85 2.385 C 39.85 2.593 39.663 2.681 39.523 2.681 C 39.383 2.681 39.29 2.62 39.27 2.438 C 39.243 2.202 39.19 1.966 38.797 1.966 C 38.356 1.966 38.036 2.411 38.036 3.152 C 38.036 3.94 38.443 4.438 38.93 4.438 C 39.217 4.438 39.503 4.29 39.731 3.995 C 39.791 4.001 39.844 4.027 39.871 4.089 C 39.538 4.643 39.184 4.771 38.783 4.771 Z" fill="rgb(255, 255, 255)"></path><path d="M 40.645 0.938 C 40.645 0.372 40.565 0.407 40.218 0.387 C 40.178 0.347 40.164 0.239 40.178 0.184 C 40.444 0.164 40.944 0.07 41.112 0.002 C 41.171 0.002 41.198 0.022 41.198 0.07 C 41.198 0.07 41.17 0.339 41.17 0.777 L 41.17 3.882 C 41.17 4.442 41.245 4.475 41.652 4.495 C 41.692 4.536 41.692 4.678 41.652 4.718 C 41.363 4.71 41.198 4.704 40.911 4.704 C 40.625 4.704 40.444 4.712 40.164 4.718 C 40.123 4.677 40.123 4.535 40.164 4.495 C 40.57 4.475 40.645 4.441 40.645 3.882 L 40.645 0.939 Z" fill="rgb(255, 255, 255)"></path><path d="M 43.432 1.746 C 44.467 1.746 44.833 2.561 44.833 3.262 C 44.833 3.963 44.413 4.771 43.419 4.771 C 42.478 4.771 42.017 4.01 42.017 3.323 C 42.017 2.467 42.531 1.746 43.432 1.746 Z M 42.592 3.168 C 42.592 3.687 42.846 4.549 43.54 4.549 C 43.853 4.549 44.26 4.366 44.26 3.479 C 44.26 2.489 43.933 1.97 43.359 1.97 C 42.799 1.968 42.592 2.581 42.592 3.168 Z" fill="rgb(255, 255, 255)"></path><path d="M 47.108 1.746 C 47.789 1.746 48.289 2.405 48.289 3.119 C 48.289 3.665 48.109 4.081 47.795 4.392 C 47.522 4.656 47.189 4.769 46.815 4.769 C 46.604 4.769 46.398 4.732 46.234 4.665 C 46.166 4.637 46.141 4.629 46.141 4.716 L 46.141 5.443 C 46.141 6.002 46.215 6.029 46.688 6.057 C 46.728 6.097 46.728 6.239 46.688 6.278 C 46.401 6.273 46.195 6.265 45.88 6.265 C 45.587 6.265 45.413 6.273 45.133 6.278 C 45.093 6.238 45.093 6.095 45.133 6.055 C 45.54 6.035 45.614 6.001 45.614 5.442 L 45.614 2.566 C 45.614 2.182 45.54 2.141 45.18 2.107 C 45.167 2.066 45.152 1.96 45.167 1.919 C 45.626 1.859 45.887 1.798 46.075 1.724 C 46.129 1.724 46.163 1.744 46.163 1.771 C 46.163 1.771 46.135 1.96 46.135 2.202 C 46.135 2.251 46.173 2.244 46.195 2.222 C 46.494 1.915 46.861 1.745 47.109 1.745 Z M 46.141 2.743 L 46.141 3.996 C 46.141 4.239 46.168 4.279 46.3 4.399 C 46.421 4.508 46.654 4.541 46.775 4.541 C 47.522 4.541 47.715 3.854 47.715 3.3 C 47.715 2.54 47.348 2.056 46.921 2.056 C 46.726 2.056 46.454 2.231 46.248 2.446 C 46.162 2.537 46.141 2.603 46.141 2.745 Z" fill="rgb(255, 255, 255)"></path><path d="M 51.279 4.184 C 51.012 4.534 50.651 4.77 50.144 4.77 C 49.664 4.77 49.35 4.609 49.124 4.339 C 48.903 4.084 48.811 3.72 48.811 3.343 C 48.811 2.317 49.565 1.758 50.146 1.758 C 51.075 1.758 51.273 2.366 51.273 2.931 C 51.273 3.005 51.227 3.045 51.147 3.045 L 49.371 3.032 C 49.371 3.423 49.451 3.733 49.585 3.955 C 49.792 4.298 50.072 4.44 50.313 4.44 C 50.7 4.44 50.893 4.333 51.139 4.077 C 51.219 4.083 51.26 4.118 51.28 4.184 Z M 50.598 2.783 C 50.672 2.782 50.698 2.75 50.698 2.688 C 50.698 2.121 50.397 1.981 50.143 1.981 C 49.984 1.981 49.517 2.042 49.39 2.803 Z" fill="rgb(255, 255, 255)"></path><path d="M 52.947 4.77 C 52.226 4.77 51.812 4.164 51.812 3.335 C 51.812 2.835 51.985 2.439 52.272 2.15 C 52.539 1.894 52.833 1.745 53.273 1.745 C 53.493 1.745 53.767 1.86 53.793 1.86 C 53.84 1.86 53.854 1.846 53.854 1.799 L 53.854 0.937 C 53.854 0.371 53.774 0.405 53.427 0.385 C 53.387 0.346 53.373 0.237 53.387 0.182 C 53.653 0.162 54.147 0.068 54.314 0.001 C 54.374 0.001 54.402 0.021 54.402 0.068 C 54.402 0.068 54.374 0.337 54.374 0.776 L 54.374 3.827 C 54.374 4.158 54.435 4.285 54.861 4.319 C 54.902 4.359 54.902 4.46 54.861 4.501 C 54.454 4.549 54.155 4.649 54.007 4.771 C 53.954 4.784 53.907 4.79 53.854 4.771 C 53.854 4.771 53.861 4.44 53.861 4.373 C 53.861 4.325 53.813 4.338 53.781 4.363 C 53.454 4.635 53.207 4.769 52.947 4.769 Z M 53.854 2.588 C 53.854 2.38 53.834 2.332 53.741 2.225 C 53.606 2.07 53.44 1.981 53.199 1.981 C 53.066 1.981 52.784 2.001 52.579 2.317 C 52.48 2.458 52.385 2.728 52.385 3.213 C 52.385 4.054 52.759 4.453 53.12 4.453 C 53.285 4.453 53.499 4.345 53.748 4.129 C 53.842 4.048 53.854 3.995 53.854 3.867 L 53.854 2.588 Z" fill="rgb(255, 255, 255)"></path><path d="M 56.582 4.494 C 56.623 4.535 56.623 4.677 56.582 4.717 C 56.295 4.709 56.128 4.704 55.842 4.704 C 55.555 4.704 55.376 4.711 55.094 4.717 C 55.056 4.676 55.056 4.534 55.094 4.494 C 55.501 4.461 55.575 4.44 55.575 3.881 L 55.575 2.568 C 55.575 2.185 55.505 2.146 55.141 2.111 C 55.128 2.07 55.113 1.962 55.128 1.922 C 55.588 1.861 55.852 1.801 56.042 1.726 C 56.095 1.726 56.127 1.746 56.127 1.774 C 56.127 1.774 56.101 2.205 56.101 2.541 L 56.101 3.884 C 56.101 4.442 56.174 4.468 56.58 4.495 Z M 55.841 0.345 C 56.022 0.345 56.16 0.533 56.16 0.695 C 56.16 0.837 56 1.018 55.814 1.018 C 55.654 1.018 55.494 0.843 55.494 0.667 C 55.494 0.507 55.681 0.345 55.841 0.345 Z" fill="rgb(255, 255, 255)"></path><path d="M 58.617 4.38 L 58.483 4.488 C 58.189 4.716 58.062 4.771 57.755 4.771 C 57.288 4.771 56.914 4.576 56.914 4.044 C 56.914 3.585 57.374 3.229 58.015 3.067 L 58.587 2.925 C 58.607 2.919 58.627 2.892 58.627 2.845 C 58.627 2.083 58.314 1.971 58.086 1.971 C 57.833 1.971 57.533 2.046 57.533 2.254 C 57.533 2.33 57.54 2.37 57.546 2.391 C 57.559 2.417 57.566 2.465 57.566 2.511 C 57.566 2.598 57.466 2.733 57.272 2.733 C 57.119 2.733 57.039 2.659 57.039 2.497 C 57.039 2.135 57.591 1.751 58.139 1.751 C 58.626 1.751 59.148 1.933 59.148 2.889 L 59.148 3.893 C 59.148 4.204 59.155 4.465 59.415 4.465 C 59.555 4.465 59.583 4.357 59.622 4.357 C 59.648 4.357 59.708 4.424 59.708 4.472 C 59.708 4.504 59.468 4.775 59.141 4.775 C 58.784 4.775 58.666 4.527 58.626 4.384 L 58.614 4.384 L 58.614 4.381 Z M 58.102 3.276 C 57.61 3.408 57.469 3.715 57.469 4.018 C 57.469 4.225 57.615 4.496 57.95 4.496 C 58.137 4.496 58.366 4.348 58.539 4.205 C 58.593 4.164 58.632 4.119 58.632 4.03 L 58.632 3.135 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-lzq0p0`,
                                      layoutDependency: x,
                                      layoutId: `iUcJIWTJj`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.692 4.717" overflow="visible"><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.692 4.717" overflow="visible"><path d="M 4.367 2.292 C 4.367 2.387 4.41 2.317 4.432 2.292 C 4.839 1.834 5.159 1.746 5.486 1.746 C 5.719 1.746 5.927 1.827 6.04 1.975 C 6.195 2.18 6.22 2.507 6.22 2.877 L 6.22 3.881 C 6.22 4.433 6.293 4.461 6.667 4.494 C 6.7 4.535 6.7 4.677 6.667 4.717 C 6.38 4.709 6.234 4.704 5.96 4.704 C 5.686 4.704 5.559 4.711 5.279 4.717 C 5.246 4.676 5.246 4.534 5.279 4.494 C 5.625 4.461 5.692 4.434 5.692 3.881 L 5.692 2.856 C 5.692 2.654 5.679 2.471 5.612 2.338 C 5.535 2.184 5.394 2.096 5.259 2.096 C 4.996 2.096 4.738 2.241 4.485 2.493 C 4.431 2.551 4.372 2.635 4.372 2.777 L 4.372 3.881 C 4.372 4.441 4.432 4.467 4.77 4.494 C 4.811 4.535 4.811 4.677 4.77 4.717 C 4.49 4.709 4.372 4.704 4.111 4.704 C 3.824 4.704 3.653 4.711 3.379 4.717 C 3.338 4.676 3.338 4.534 3.379 4.494 C 3.766 4.467 3.844 4.44 3.844 3.881 L 3.844 0.937 C 3.844 0.782 3.844 0.627 3.377 0.627 L 2.53 0.627 C 2.289 0.627 2.223 0.747 2.223 0.977 L 2.223 3.88 C 2.223 4.44 2.336 4.474 2.87 4.494 C 2.91 4.534 2.91 4.676 2.87 4.716 C 2.536 4.709 2.303 4.703 1.942 4.703 C 1.581 4.703 1.335 4.71 1.008 4.716 C 0.967 4.675 0.967 4.534 1.008 4.494 C 1.542 4.474 1.655 4.439 1.655 3.88 L 1.655 0.956 C 1.655 0.748 1.588 0.626 1.348 0.626 L 0.787 0.626 C 0.42 0.626 0.333 0.706 0.201 1.244 L 0 1.212 C 0.08 0.855 0.12 0.504 0.147 0.174 L 0.327 0.201 C 0.327 0.242 0.327 0.357 0.467 0.357 L 3.122 0.357 C 3.686 0.357 3.769 0.305 4.31 0 C 4.363 0 4.39 0.02 4.39 0.067 C 4.39 0.067 4.371 0.303 4.37 0.741 L 4.365 2.291 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    p(S, {
                                      className: `framer-5ndn89`,
                                      layoutDependency: x,
                                      layoutId: `y1JFvCBKl`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.788 1.025 C 1.861 1.024 1.887 0.992 1.887 0.93 C 1.887 0.363 1.587 0.223 1.334 0.223 C 1.174 0.223 0.706 0.284 0.58 1.045 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.788 1.025 C 1.861 1.024 1.887 0.992 1.887 0.93 C 1.887 0.363 1.587 0.223 1.334 0.223 C 1.174 0.223 0.706 0.284 0.58 1.045 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-16csy5g`,
                                          layoutDependency: x,
                                          layoutId: `TuoiLwtbj`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-fqe35l`,
                                          layoutDependency: x,
                                          layoutId: `qLLzciR3g`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.307 1" overflow="visible"><path d="M 1.207 0.802 C 1.281 0.801 1.307 0.768 1.307 0.707 C 1.307 0.14 1.007 0 0.754 0 C 0.593 0 0.126 0.061 0 0.822 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(S, {
                                      className: `framer-1y2bdk3`,
                                      layoutDependency: x,
                                      layoutId: `TDMAUa9LA`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.079 4.388" overflow="visible"><path d="M 1.178 2.199 L 1.178 3.552 C 1.178 4.112 1.291 4.145 1.759 4.165 C 1.799 4.206 1.799 4.348 1.759 4.388 C 1.425 4.38 1.231 4.374 0.898 4.374 C 0.564 4.374 0.357 4.382 0.03 4.388 C -0.01 4.347 -0.01 4.205 0.03 4.165 C 0.497 4.145 0.611 4.111 0.611 3.552 L 0.611 0.851 C 0.611 0.292 0.497 0.257 0.03 0.237 C -0.01 0.196 -0.01 0.053 0.03 0.013 C 0.364 0.021 0.891 0.027 0.891 0.027 L 2.595 0.027 C 2.753 0.027 2.792 0.022 2.908 0 C 2.924 0 2.932 0.005 2.935 0.02 C 2.944 0.072 3.044 0.721 3.079 0.997 L 2.872 1.03 C 2.725 0.565 2.618 0.296 2.118 0.296 L 1.418 0.296 C 1.258 0.296 1.178 0.363 1.178 0.525 L 1.178 1.939 L 1.798 1.939 C 2.365 1.939 2.385 1.851 2.406 1.481 C 2.446 1.441 2.585 1.441 2.626 1.481 C 2.619 1.683 2.613 1.831 2.613 2.061 C 2.613 2.29 2.619 2.417 2.626 2.653 C 2.585 2.694 2.446 2.694 2.406 2.653 C 2.386 2.35 2.365 2.195 1.798 2.195 L 1.178 2.195 L 1.178 2.198 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.079 4.388" overflow="visible"><path d="M 1.178 2.199 L 1.178 3.552 C 1.178 4.112 1.291 4.145 1.759 4.165 C 1.799 4.206 1.799 4.348 1.759 4.388 C 1.425 4.38 1.231 4.374 0.898 4.374 C 0.564 4.374 0.357 4.382 0.03 4.388 C -0.01 4.347 -0.01 4.205 0.03 4.165 C 0.497 4.145 0.611 4.111 0.611 3.552 L 0.611 0.851 C 0.611 0.292 0.497 0.257 0.03 0.237 C -0.01 0.196 -0.01 0.053 0.03 0.013 C 0.364 0.021 0.891 0.027 0.891 0.027 L 2.595 0.027 C 2.753 0.027 2.792 0.022 2.908 0 C 2.924 0 2.932 0.005 2.935 0.02 C 2.944 0.072 3.044 0.721 3.079 0.997 L 2.872 1.03 C 2.725 0.565 2.618 0.296 2.118 0.296 L 1.418 0.296 C 1.258 0.296 1.178 0.363 1.178 0.525 L 1.178 1.939 L 1.798 1.939 C 2.365 1.939 2.385 1.851 2.406 1.481 C 2.446 1.441 2.585 1.441 2.626 1.481 C 2.619 1.683 2.613 1.831 2.613 2.061 C 2.613 2.29 2.619 2.417 2.626 2.653 C 2.585 2.694 2.446 2.694 2.406 2.653 C 2.386 2.35 2.365 2.195 1.798 2.195 L 1.178 2.195 L 1.178 2.198 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-92syi`,
                                      layoutDependency: x,
                                      layoutId: `Ju2a1l_lE`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.245 2.992" overflow="visible"><path d="M 0.091 0.382 C 0.064 0.342 0.064 0.235 0.077 0.195 C 0.538 0.134 0.804 0.073 0.991 0 C 1.045 0 1.078 0.02 1.078 0.047 C 1.078 0.047 1.045 0.371 1.045 0.587 C 1.045 0.619 1.064 0.654 1.105 0.579 C 1.258 0.317 1.532 0.021 1.845 0.021 C 2.126 0.021 2.245 0.215 2.245 0.343 C 2.245 0.512 2.092 0.68 1.932 0.68 C 1.792 0.68 1.725 0.552 1.659 0.485 C 1.618 0.445 1.565 0.437 1.518 0.437 C 1.438 0.437 1.285 0.66 1.211 0.767 C 1.131 0.889 1.051 1.043 1.051 1.219 L 1.051 2.156 C 1.051 2.715 1.131 2.735 1.598 2.77 C 1.639 2.81 1.639 2.953 1.598 2.992 C 1.311 2.985 1.064 2.979 0.791 2.979 C 0.518 2.979 0.311 2.986 0.03 2.992 C -0.01 2.953 -0.01 2.81 0.03 2.77 C 0.444 2.742 0.524 2.715 0.524 2.156 L 0.524 0.843 C 0.524 0.471 0.45 0.417 0.091 0.384 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.245 2.992" overflow="visible"><path d="M 0.091 0.382 C 0.064 0.342 0.064 0.235 0.077 0.195 C 0.538 0.134 0.804 0.073 0.991 0 C 1.045 0 1.078 0.02 1.078 0.047 C 1.078 0.047 1.045 0.371 1.045 0.587 C 1.045 0.619 1.064 0.654 1.105 0.579 C 1.258 0.317 1.532 0.021 1.845 0.021 C 2.126 0.021 2.245 0.215 2.245 0.343 C 2.245 0.512 2.092 0.68 1.932 0.68 C 1.792 0.68 1.725 0.552 1.659 0.485 C 1.618 0.445 1.565 0.437 1.518 0.437 C 1.438 0.437 1.285 0.66 1.211 0.767 C 1.131 0.889 1.051 1.043 1.051 1.219 L 1.051 2.156 C 1.051 2.715 1.131 2.735 1.598 2.77 C 1.639 2.81 1.639 2.953 1.598 2.992 C 1.311 2.985 1.064 2.979 0.791 2.979 C 0.518 2.979 0.311 2.986 0.03 2.992 C -0.01 2.953 -0.01 2.81 0.03 2.77 C 0.444 2.742 0.524 2.715 0.524 2.156 L 0.524 0.843 C 0.524 0.471 0.45 0.417 0.091 0.384 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    p(S, {
                                      className: `framer-uqn9xh`,
                                      layoutDependency: x,
                                      layoutId: `kUegWCepr`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.788 1.025 C 1.861 1.024 1.887 0.992 1.887 0.93 C 1.887 0.363 1.587 0.223 1.334 0.223 C 1.174 0.223 0.706 0.284 0.58 1.045 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.788 1.025 C 1.861 1.024 1.887 0.992 1.887 0.93 C 1.887 0.363 1.587 0.223 1.334 0.223 C 1.174 0.223 0.706 0.284 0.58 1.045 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-1bwytqa`,
                                          layoutDependency: x,
                                          layoutId: `drhf6kq1G`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-17hnmg2`,
                                          layoutDependency: x,
                                          layoutId: `eU5jrLvDB`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.307 1" overflow="visible"><path d="M 1.207 0.802 C 1.281 0.801 1.307 0.768 1.307 0.707 C 1.307 0.14 1.007 0 0.754 0 C 0.593 0 0.126 0.061 0 0.822 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(S, {
                                      className: `framer-11cnpyf`,
                                      layoutDependency: x,
                                      layoutId: `wlAoYBTYw`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.788 1.025 C 1.862 1.024 1.888 0.992 1.888 0.93 C 1.888 0.363 1.588 0.223 1.335 0.223 C 1.174 0.223 0.707 0.284 0.581 1.045 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.788 1.025 C 1.862 1.024 1.888 0.992 1.888 0.93 C 1.888 0.363 1.588 0.223 1.335 0.223 C 1.174 0.223 0.707 0.284 0.581 1.045 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-ms049l`,
                                          layoutDependency: x,
                                          layoutId: `nZ9tHeT6_`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.202 2.776 1.841 3.012 1.335 3.012 C 0.854 3.012 0.541 2.85 0.314 2.581 C 0.093 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.262 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.415 1.287 2.335 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.981 2.54 1.261 2.682 1.501 2.682 C 1.888 2.682 2.081 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-hf837k`,
                                          layoutDependency: x,
                                          layoutId: `SlX3Qtlpq`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.307 1" overflow="visible"><path d="M 1.207 0.802 C 1.281 0.801 1.307 0.768 1.307 0.707 C 1.307 0.14 1.007 0 0.754 0 C 0.593 0 0.126 0.061 0 0.822 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(S, {
                                      className: `framer-qdoocb`,
                                      layoutDependency: x,
                                      layoutId: `EldWpx_4R`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.433 4.388" overflow="visible"><path d="M 2.393 1.484 C 2.434 1.443 2.573 1.443 2.614 1.484 C 2.607 1.686 2.6 1.834 2.6 2.063 C 2.6 2.292 2.607 2.42 2.614 2.656 C 2.573 2.697 2.434 2.697 2.393 2.656 C 2.373 2.353 2.353 2.198 1.786 2.198 L 1.178 2.198 L 1.178 3.821 C 1.178 4.005 1.272 4.111 1.418 4.111 L 2.326 4.111 C 2.832 4.111 3.066 3.713 3.2 3.229 C 3.287 3.208 3.364 3.223 3.433 3.262 C 3.379 3.605 3.28 4.05 3.186 4.388 C 3.186 4.388 2.652 4.374 2.332 4.374 L 0.898 4.374 C 0.898 4.374 0.357 4.382 0.03 4.388 C -0.01 4.347 -0.01 4.205 0.03 4.165 C 0.497 4.145 0.611 4.111 0.611 3.552 L 0.611 0.851 C 0.611 0.292 0.497 0.257 0.03 0.237 C -0.01 0.196 -0.01 0.053 0.03 0.013 C 0.364 0.021 0.891 0.027 0.891 0.027 L 2.592 0.027 C 2.752 0.027 2.806 0.02 2.919 0 C 2.939 0 2.945 0.007 2.945 0.02 C 2.959 0.074 3.058 0.721 3.092 0.997 C 3.027 1.029 2.954 1.042 2.872 1.03 C 2.725 0.565 2.618 0.296 2.118 0.296 L 1.418 0.296 C 1.258 0.296 1.178 0.431 1.178 0.592 L 1.178 1.939 L 1.785 1.939 C 2.352 1.942 2.372 1.855 2.392 1.484 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.433 4.388" overflow="visible"><path d="M 2.393 1.484 C 2.434 1.443 2.573 1.443 2.614 1.484 C 2.607 1.686 2.6 1.834 2.6 2.063 C 2.6 2.292 2.607 2.42 2.614 2.656 C 2.573 2.697 2.434 2.697 2.393 2.656 C 2.373 2.353 2.353 2.198 1.786 2.198 L 1.178 2.198 L 1.178 3.821 C 1.178 4.005 1.272 4.111 1.418 4.111 L 2.326 4.111 C 2.832 4.111 3.066 3.713 3.2 3.229 C 3.287 3.208 3.364 3.223 3.433 3.262 C 3.379 3.605 3.28 4.05 3.186 4.388 C 3.186 4.388 2.652 4.374 2.332 4.374 L 0.898 4.374 C 0.898 4.374 0.357 4.382 0.03 4.388 C -0.01 4.347 -0.01 4.205 0.03 4.165 C 0.497 4.145 0.611 4.111 0.611 3.552 L 0.611 0.851 C 0.611 0.292 0.497 0.257 0.03 0.237 C -0.01 0.196 -0.01 0.053 0.03 0.013 C 0.364 0.021 0.891 0.027 0.891 0.027 L 2.592 0.027 C 2.752 0.027 2.806 0.02 2.919 0 C 2.939 0 2.945 0.007 2.945 0.02 C 2.959 0.074 3.058 0.721 3.092 0.997 C 3.027 1.029 2.954 1.042 2.872 1.03 C 2.725 0.565 2.618 0.296 2.118 0.296 L 1.418 0.296 C 1.258 0.296 1.178 0.431 1.178 0.592 L 1.178 1.939 L 1.785 1.939 C 2.352 1.942 2.372 1.855 2.392 1.484 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-131p2r7`,
                                      layoutDependency: x,
                                      layoutId: `JYYnaobR7`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.343 2.99" overflow="visible"><path d="M 2.137 0.02 C 2.371 0.02 2.577 0.101 2.69 0.248 C 2.845 0.457 2.871 0.781 2.871 1.151 L 2.871 2.155 C 2.871 2.706 2.945 2.735 3.318 2.768 C 3.351 2.809 3.351 2.95 3.318 2.99 C 3.031 2.983 2.884 2.977 2.612 2.977 C 2.34 2.977 2.212 2.985 1.931 2.99 C 1.898 2.95 1.898 2.808 1.931 2.768 C 2.278 2.735 2.344 2.707 2.344 2.155 L 2.344 1.13 C 2.344 0.927 2.331 0.747 2.264 0.612 C 2.184 0.457 2.044 0.369 1.911 0.369 C 1.651 0.369 1.39 0.517 1.137 0.767 C 1.083 0.827 1.024 0.908 1.024 1.051 L 1.024 2.155 C 1.024 2.706 1.084 2.735 1.424 2.768 C 1.465 2.809 1.465 2.95 1.424 2.99 C 1.144 2.983 1.024 2.977 0.764 2.977 C 0.477 2.977 0.304 2.985 0.03 2.99 C -0.01 2.95 -0.01 2.808 0.03 2.768 C 0.431 2.735 0.497 2.707 0.497 2.155 L 0.497 0.842 C 0.497 0.451 0.424 0.417 0.064 0.384 C 0.051 0.343 0.038 0.236 0.051 0.196 C 0.511 0.135 0.785 0.074 0.972 0 C 1.026 0 1.052 0.02 1.052 0.054 C 1.052 0.054 1.019 0.365 1.019 0.566 C 1.019 0.661 1.066 0.592 1.086 0.566 C 1.493 0.109 1.813 0.021 2.14 0.021 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.343 2.99" overflow="visible"><path d="M 2.137 0.02 C 2.371 0.02 2.577 0.101 2.69 0.248 C 2.845 0.457 2.871 0.781 2.871 1.151 L 2.871 2.155 C 2.871 2.706 2.945 2.735 3.318 2.768 C 3.351 2.809 3.351 2.95 3.318 2.99 C 3.031 2.983 2.884 2.977 2.612 2.977 C 2.34 2.977 2.212 2.985 1.931 2.99 C 1.898 2.95 1.898 2.808 1.931 2.768 C 2.278 2.735 2.344 2.707 2.344 2.155 L 2.344 1.13 C 2.344 0.927 2.331 0.747 2.264 0.612 C 2.184 0.457 2.044 0.369 1.911 0.369 C 1.651 0.369 1.39 0.517 1.137 0.767 C 1.083 0.827 1.024 0.908 1.024 1.051 L 1.024 2.155 C 1.024 2.706 1.084 2.735 1.424 2.768 C 1.465 2.809 1.465 2.95 1.424 2.99 C 1.144 2.983 1.024 2.977 0.764 2.977 C 0.477 2.977 0.304 2.985 0.03 2.99 C -0.01 2.95 -0.01 2.808 0.03 2.768 C 0.431 2.735 0.497 2.707 0.497 2.155 L 0.497 0.842 C 0.497 0.451 0.424 0.417 0.064 0.384 C 0.051 0.343 0.038 0.236 0.051 0.196 C 0.511 0.135 0.785 0.074 0.972 0 C 1.026 0 1.052 0.02 1.052 0.054 C 1.052 0.054 1.019 0.365 1.019 0.566 C 1.019 0.661 1.066 0.592 1.086 0.566 C 1.493 0.109 1.813 0.021 2.14 0.021 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1wpilea`,
                                      layoutDependency: x,
                                      layoutId: `F4GGXpXMd`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.408 3.025" overflow="visible"><path d="M 1.321 3.025 C 0.48 3.025 0 2.426 0 1.556 C 0 0.6 0.708 0 1.368 0 C 2.029 0 2.388 0.27 2.388 0.639 C 2.388 0.847 2.202 0.935 2.062 0.935 C 1.921 0.935 1.829 0.874 1.808 0.692 C 1.781 0.457 1.728 0.221 1.334 0.221 C 0.894 0.221 0.573 0.665 0.573 1.406 C 0.573 2.195 0.98 2.692 1.467 2.692 C 1.755 2.692 2.041 2.545 2.268 2.249 C 2.328 2.256 2.381 2.281 2.408 2.344 C 2.075 2.897 1.721 3.025 1.32 3.025 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.408 3.025" overflow="visible"><path d="M 1.321 3.025 C 0.48 3.025 0 2.426 0 1.556 C 0 0.6 0.708 0 1.368 0 C 2.029 0 2.388 0.27 2.388 0.639 C 2.388 0.847 2.202 0.935 2.062 0.935 C 1.921 0.935 1.829 0.874 1.808 0.692 C 1.781 0.457 1.728 0.221 1.334 0.221 C 0.894 0.221 0.573 0.665 0.573 1.406 C 0.573 2.195 0.98 2.692 1.467 2.692 C 1.755 2.692 2.041 2.545 2.268 2.249 C 2.328 2.256 2.381 2.281 2.408 2.344 C 2.075 2.897 1.721 3.025 1.32 3.025 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-cau1j9`,
                                      layoutDependency: x,
                                      layoutId: `YzyzKjKTC`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.308 4.469" overflow="visible"><path d="M 0.638 4.468 C 0.457 4.468 0.324 4.359 0.324 4.219 C 0.324 4.131 0.424 3.929 0.618 3.929 C 0.691 3.929 0.717 3.949 0.811 3.949 C 0.977 3.949 1.071 3.889 1.144 3.754 C 1.244 3.545 1.325 3.359 1.404 3.135 C 1.471 2.946 1.37 2.636 1.311 2.501 L 0.555 0.729 C 0.374 0.3 0.32 0.251 0.03 0.223 C -0.01 0.182 -0.01 0.04 0.03 0 C 0.164 0.007 0.343 0.012 0.571 0.012 C 0.812 0.012 1.078 0.007 1.324 0 C 1.365 0.041 1.365 0.183 1.324 0.223 C 0.915 0.256 0.986 0.377 1.106 0.662 L 1.697 2.062 C 1.753 2.196 1.81 2.178 1.856 2.07 L 2.519 0.527 C 2.623 0.282 2.408 0.244 2.198 0.224 C 2.157 0.183 2.157 0.041 2.198 0.001 C 2.444 0.008 2.571 0.013 2.805 0.013 C 2.992 0.013 3.113 0.007 3.278 0.001 C 3.318 0.042 3.318 0.184 3.278 0.224 C 3.032 0.244 2.832 0.46 2.737 0.655 C 2.384 1.409 2.093 2.104 1.556 3.404 C 1.475 3.603 1.387 3.796 1.283 3.983 C 1.044 4.415 0.776 4.469 0.636 4.469 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.308 4.469" overflow="visible"><path d="M 0.638 4.468 C 0.457 4.468 0.324 4.359 0.324 4.219 C 0.324 4.131 0.424 3.929 0.618 3.929 C 0.691 3.929 0.717 3.949 0.811 3.949 C 0.977 3.949 1.071 3.889 1.144 3.754 C 1.244 3.545 1.325 3.359 1.404 3.135 C 1.471 2.946 1.37 2.636 1.311 2.501 L 0.555 0.729 C 0.374 0.3 0.32 0.251 0.03 0.223 C -0.01 0.182 -0.01 0.04 0.03 0 C 0.164 0.007 0.343 0.012 0.571 0.012 C 0.812 0.012 1.078 0.007 1.324 0 C 1.365 0.041 1.365 0.183 1.324 0.223 C 0.915 0.256 0.986 0.377 1.106 0.662 L 1.697 2.062 C 1.753 2.196 1.81 2.178 1.856 2.07 L 2.519 0.527 C 2.623 0.282 2.408 0.244 2.198 0.224 C 2.157 0.183 2.157 0.041 2.198 0.001 C 2.444 0.008 2.571 0.013 2.805 0.013 C 2.992 0.013 3.113 0.007 3.278 0.001 C 3.318 0.042 3.318 0.184 3.278 0.224 C 3.032 0.244 2.832 0.46 2.737 0.655 C 2.384 1.409 2.093 2.104 1.556 3.404 C 1.475 3.603 1.387 3.796 1.283 3.983 C 1.044 4.415 0.776 4.469 0.636 4.469 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1d7gbms`,
                                      layoutDependency: x,
                                      layoutId: `R0jQ4NQc7`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.408 3.025" overflow="visible"><path d="M 1.32 3.025 C 0.48 3.025 0 2.426 0 1.556 C 0 0.6 0.706 0 1.368 0 C 2.029 0 2.388 0.27 2.388 0.639 C 2.388 0.847 2.201 0.935 2.061 0.935 C 1.92 0.935 1.828 0.874 1.807 0.692 C 1.781 0.457 1.728 0.221 1.335 0.221 C 0.894 0.221 0.574 0.665 0.574 1.406 C 0.574 2.195 0.98 2.692 1.467 2.692 C 1.755 2.692 2.041 2.545 2.269 2.249 C 2.329 2.256 2.382 2.281 2.408 2.344 C 2.076 2.897 1.722 3.025 1.32 3.025 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.408 3.025" overflow="visible"><path d="M 1.32 3.025 C 0.48 3.025 0 2.426 0 1.556 C 0 0.6 0.706 0 1.368 0 C 2.029 0 2.388 0.27 2.388 0.639 C 2.388 0.847 2.201 0.935 2.061 0.935 C 1.92 0.935 1.828 0.874 1.807 0.692 C 1.781 0.457 1.728 0.221 1.335 0.221 C 0.894 0.221 0.574 0.665 0.574 1.406 C 0.574 2.195 0.98 2.692 1.467 2.692 C 1.755 2.692 2.041 2.545 2.269 2.249 C 2.329 2.256 2.382 2.281 2.408 2.344 C 2.076 2.897 1.722 3.025 1.32 3.025 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-zqhils`,
                                      layoutDependency: x,
                                      layoutId: `Cx7gZ6g8E`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.549 4.715" overflow="visible"><path d="M 0.511 0.936 C 0.511 0.37 0.431 0.404 0.085 0.384 C 0.044 0.345 0.031 0.237 0.044 0.182 C 0.311 0.162 0.811 0.067 0.979 0 C 1.038 0 1.064 0.02 1.064 0.067 C 1.064 0.067 1.037 0.337 1.037 0.775 L 1.037 3.88 C 1.037 4.439 1.111 4.473 1.518 4.493 C 1.559 4.534 1.559 4.675 1.518 4.715 C 1.23 4.708 1.064 4.702 0.778 4.702 C 0.492 4.702 0.311 4.709 0.03 4.715 C -0.01 4.674 -0.01 4.533 0.03 4.493 C 0.437 4.473 0.511 4.439 0.511 3.88 L 0.511 0.937 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.549 4.715" overflow="visible"><path d="M 0.511 0.936 C 0.511 0.37 0.431 0.404 0.085 0.384 C 0.044 0.345 0.031 0.237 0.044 0.182 C 0.311 0.162 0.811 0.067 0.979 0 C 1.038 0 1.064 0.02 1.064 0.067 C 1.064 0.067 1.037 0.337 1.037 0.775 L 1.037 3.88 C 1.037 4.439 1.111 4.473 1.518 4.493 C 1.559 4.534 1.559 4.675 1.518 4.715 C 1.23 4.708 1.064 4.702 0.778 4.702 C 0.492 4.702 0.311 4.709 0.03 4.715 C -0.01 4.674 -0.01 4.533 0.03 4.493 C 0.437 4.473 0.511 4.439 0.511 3.88 L 0.511 0.937 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    p(S, {
                                      className: `framer-niffew`,
                                      layoutDependency: x,
                                      layoutId: `X6TM4rITB`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.816 3.025" overflow="visible"><path d="M 1.415 0 C 2.45 0 2.816 0.816 2.816 1.516 C 2.816 2.217 2.396 3.025 1.401 3.025 C 0.461 3.025 0 2.265 0 1.577 C 0 0.722 0.514 0.001 1.415 0.001 Z M 0.575 1.422 C 0.575 1.941 0.829 2.804 1.523 2.804 C 1.836 2.804 2.243 2.621 2.243 1.733 C 2.243 0.743 1.916 0.224 1.342 0.224 C 0.782 0.222 0.575 0.836 0.575 1.422 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.816 3.025" overflow="visible"><path d="M 1.415 0 C 2.45 0 2.816 0.816 2.816 1.516 C 2.816 2.217 2.396 3.025 1.401 3.025 C 0.461 3.025 0 2.265 0 1.577 C 0 0.722 0.514 0.001 1.415 0.001 Z M 0.575 1.422 C 0.575 1.941 0.829 2.804 1.523 2.804 C 1.836 2.804 2.243 2.621 2.243 1.733 C 2.243 0.743 1.916 0.224 1.342 0.224 C 0.782 0.222 0.575 0.836 0.575 1.422 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-162yabp`,
                                          layoutDependency: x,
                                          layoutId: `Sx3ZmJtpq`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.816 3.025" overflow="visible"><path d="M 1.415 0 C 2.45 0 2.816 0.816 2.816 1.516 C 2.816 2.217 2.396 3.025 1.401 3.025 C 0.461 3.025 0 2.265 0 1.577 C 0 0.722 0.514 0.001 1.415 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-b0f4og`,
                                          layoutDependency: x,
                                          layoutId: `FMfMkWpFj`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.668 2.58" overflow="visible"><path d="M 0 1.198 C 0 1.717 0.253 2.58 0.947 2.58 C 1.261 2.58 1.668 2.396 1.668 1.509 C 1.668 0.519 1.341 0 0.767 0 C 0.206 -0.002 0 0.612 0 1.198 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(S, {
                                      className: `framer-aa0or4`,
                                      layoutDependency: x,
                                      layoutId: `pgf9I0Vcd`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.186 4.554" overflow="visible"><path d="M 2.005 0.022 C 2.686 0.022 3.186 0.681 3.186 1.395 C 3.186 1.941 3.006 2.357 2.692 2.668 C 2.419 2.932 2.085 3.045 1.711 3.045 C 1.501 3.045 1.295 3.008 1.131 2.941 C 1.063 2.913 1.038 2.905 1.038 2.992 L 1.038 3.719 C 1.038 4.278 1.111 4.305 1.584 4.333 C 1.625 4.373 1.625 4.515 1.584 4.554 C 1.298 4.549 1.092 4.541 0.777 4.541 C 0.483 4.541 0.31 4.549 0.03 4.554 C -0.01 4.514 -0.01 4.371 0.03 4.331 C 0.437 4.311 0.511 4.277 0.511 3.718 L 0.511 0.842 C 0.511 0.458 0.437 0.417 0.077 0.383 C 0.063 0.342 0.049 0.236 0.063 0.195 C 0.523 0.135 0.784 0.074 0.972 0 C 1.026 0 1.059 0.02 1.059 0.047 C 1.059 0.047 1.031 0.236 1.031 0.478 C 1.031 0.527 1.07 0.52 1.092 0.498 C 1.391 0.191 1.758 0.021 2.006 0.021 Z M 1.038 1.019 L 1.038 2.272 C 1.038 2.516 1.064 2.555 1.197 2.676 C 1.318 2.784 1.551 2.817 1.672 2.817 C 2.419 2.817 2.612 2.13 2.612 1.576 C 2.612 0.816 2.245 0.332 1.818 0.332 C 1.623 0.332 1.351 0.507 1.144 0.722 C 1.059 0.813 1.038 0.879 1.038 1.021 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.186 4.554" overflow="visible"><path d="M 2.005 0.022 C 2.686 0.022 3.186 0.681 3.186 1.395 C 3.186 1.941 3.006 2.357 2.692 2.668 C 2.419 2.932 2.085 3.045 1.711 3.045 C 1.501 3.045 1.295 3.008 1.131 2.941 C 1.063 2.913 1.038 2.905 1.038 2.992 L 1.038 3.719 C 1.038 4.278 1.111 4.305 1.584 4.333 C 1.625 4.373 1.625 4.515 1.584 4.554 C 1.298 4.549 1.092 4.541 0.777 4.541 C 0.483 4.541 0.31 4.549 0.03 4.554 C -0.01 4.514 -0.01 4.371 0.03 4.331 C 0.437 4.311 0.511 4.277 0.511 3.718 L 0.511 0.842 C 0.511 0.458 0.437 0.417 0.077 0.383 C 0.063 0.342 0.049 0.236 0.063 0.195 C 0.523 0.135 0.784 0.074 0.972 0 C 1.026 0 1.059 0.02 1.059 0.047 C 1.059 0.047 1.031 0.236 1.031 0.478 C 1.031 0.527 1.07 0.52 1.092 0.498 C 1.391 0.191 1.758 0.021 2.006 0.021 Z M 1.038 1.019 L 1.038 2.272 C 1.038 2.516 1.064 2.555 1.197 2.676 C 1.318 2.784 1.551 2.817 1.672 2.817 C 2.419 2.817 2.612 2.13 2.612 1.576 C 2.612 0.816 2.245 0.332 1.818 0.332 C 1.623 0.332 1.351 0.507 1.144 0.722 C 1.059 0.813 1.038 0.879 1.038 1.021 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-15lhb04`,
                                          layoutDependency: x,
                                          layoutId: `lN5N_yuak`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.186 4.554" overflow="visible"><path d="M 2.005 0.022 C 2.686 0.022 3.186 0.681 3.186 1.395 C 3.186 1.941 3.006 2.357 2.692 2.668 C 2.419 2.932 2.085 3.045 1.711 3.045 C 1.501 3.045 1.295 3.008 1.131 2.941 C 1.063 2.913 1.038 2.905 1.038 2.992 L 1.038 3.719 C 1.038 4.278 1.111 4.305 1.584 4.333 C 1.625 4.373 1.625 4.515 1.584 4.554 C 1.298 4.549 1.092 4.541 0.777 4.541 C 0.483 4.541 0.31 4.549 0.03 4.554 C -0.01 4.514 -0.01 4.371 0.03 4.331 C 0.437 4.311 0.511 4.277 0.511 3.718 L 0.511 0.842 C 0.511 0.458 0.437 0.417 0.077 0.383 C 0.063 0.342 0.049 0.236 0.063 0.195 C 0.523 0.135 0.784 0.074 0.972 0 C 1.026 0 1.059 0.02 1.059 0.047 C 1.059 0.047 1.031 0.236 1.031 0.478 C 1.031 0.527 1.07 0.52 1.092 0.498 C 1.391 0.191 1.758 0.021 2.006 0.021 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-1utf3i0`,
                                          layoutDependency: x,
                                          layoutId: `NC2MSZqak`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.574 2.486" overflow="visible"><path d="M 0 0.687 L 0 1.941 C 0 2.184 0.026 2.223 0.159 2.344 C 0.28 2.452 0.513 2.486 0.634 2.486 C 1.381 2.486 1.574 1.798 1.574 1.245 C 1.574 0.484 1.207 0 0.78 0 C 0.585 0 0.313 0.175 0.106 0.391 C 0.021 0.482 0 0.547 0 0.689 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(S, {
                                      className: `framer-14qvmc`,
                                      layoutDependency: x,
                                      layoutId: `rR9GXUnvh`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.201 2.776 1.84 3.012 1.333 3.012 C 0.853 3.012 0.539 2.85 0.313 2.581 C 0.092 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.264 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.416 1.287 2.336 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.98 2.54 1.261 2.682 1.502 2.682 C 1.889 2.682 2.082 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.787 1.025 C 1.861 1.024 1.887 0.992 1.887 0.93 C 1.887 0.363 1.586 0.223 1.332 0.223 C 1.173 0.223 0.706 0.284 0.579 1.045 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.201 2.776 1.84 3.012 1.333 3.012 C 0.853 3.012 0.539 2.85 0.313 2.581 C 0.092 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.264 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.416 1.287 2.336 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.98 2.54 1.261 2.682 1.502 2.682 C 1.889 2.682 2.082 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z M 1.787 1.025 C 1.861 1.024 1.887 0.992 1.887 0.93 C 1.887 0.363 1.586 0.223 1.332 0.223 C 1.173 0.223 0.706 0.284 0.579 1.045 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-vzw170`,
                                          layoutDependency: x,
                                          layoutId: `oPPVXpK4q`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.468 3.012" overflow="visible"><path d="M 2.468 2.426 C 2.201 2.776 1.84 3.012 1.333 3.012 C 0.853 3.012 0.539 2.85 0.313 2.581 C 0.092 2.326 0 1.961 0 1.585 C 0 0.559 0.754 0 1.335 0 C 2.264 0 2.462 0.607 2.462 1.173 C 2.462 1.247 2.416 1.287 2.336 1.287 L 0.56 1.274 C 0.56 1.665 0.64 1.975 0.774 2.196 C 0.98 2.54 1.261 2.682 1.502 2.682 C 1.889 2.682 2.082 2.575 2.328 2.319 C 2.408 2.325 2.449 2.36 2.468 2.426 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-1s5hdq9`,
                                          layoutDependency: x,
                                          layoutId: `rptNiWB49`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.308 1" overflow="visible"><path d="M 1.208 0.802 C 1.283 0.801 1.308 0.768 1.308 0.707 C 1.308 0.14 1.008 0 0.754 0 C 0.594 0 0.127 0.061 0 0.822 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(S, {
                                      className: `framer-pddxbx`,
                                      layoutDependency: x,
                                      layoutId: `qvjJzHGx4`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.08 4.783" overflow="visible"><path d="M 1.135 4.769 C 0.414 4.769 0 4.163 0 3.334 C 0 2.835 0.173 2.438 0.461 2.149 C 0.727 1.893 1.021 1.744 1.461 1.744 C 1.681 1.744 1.955 1.859 1.982 1.859 C 2.029 1.859 2.042 1.846 2.042 1.798 L 2.042 0.936 C 2.042 0.37 1.962 0.404 1.615 0.384 C 1.575 0.345 1.561 0.237 1.575 0.182 C 1.841 0.162 2.336 0.067 2.502 0 C 2.563 0 2.59 0.02 2.59 0.067 C 2.59 0.067 2.563 0.337 2.563 0.775 L 2.563 3.826 C 2.563 4.157 2.623 4.284 3.05 4.318 C 3.09 4.359 3.09 4.459 3.05 4.5 C 2.643 4.548 2.343 4.648 2.195 4.77 C 2.142 4.784 2.095 4.789 2.042 4.77 C 2.042 4.77 2.049 4.439 2.049 4.372 C 2.049 4.324 2.001 4.337 1.969 4.362 C 1.642 4.634 1.396 4.769 1.136 4.769 Z M 2.042 2.587 C 2.042 2.379 2.022 2.331 1.929 2.224 C 1.794 2.069 1.628 1.981 1.387 1.981 C 1.254 1.981 0.972 2.001 0.767 2.316 C 0.668 2.457 0.574 2.727 0.574 3.212 C 0.574 4.054 0.947 4.452 1.308 4.452 C 1.473 4.452 1.687 4.344 1.936 4.129 C 2.03 4.047 2.043 3.994 2.043 3.866 L 2.043 2.587 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.08 4.783" overflow="visible"><path d="M 1.135 4.769 C 0.414 4.769 0 4.163 0 3.334 C 0 2.835 0.173 2.438 0.461 2.149 C 0.727 1.893 1.021 1.744 1.461 1.744 C 1.681 1.744 1.955 1.859 1.982 1.859 C 2.029 1.859 2.042 1.846 2.042 1.798 L 2.042 0.936 C 2.042 0.37 1.962 0.404 1.615 0.384 C 1.575 0.345 1.561 0.237 1.575 0.182 C 1.841 0.162 2.336 0.067 2.502 0 C 2.563 0 2.59 0.02 2.59 0.067 C 2.59 0.067 2.563 0.337 2.563 0.775 L 2.563 3.826 C 2.563 4.157 2.623 4.284 3.05 4.318 C 3.09 4.359 3.09 4.459 3.05 4.5 C 2.643 4.548 2.343 4.648 2.195 4.77 C 2.142 4.784 2.095 4.789 2.042 4.77 C 2.042 4.77 2.049 4.439 2.049 4.372 C 2.049 4.324 2.001 4.337 1.969 4.362 C 1.642 4.634 1.396 4.769 1.136 4.769 Z M 2.042 2.587 C 2.042 2.379 2.022 2.331 1.929 2.224 C 1.794 2.069 1.628 1.981 1.387 1.981 C 1.254 1.981 0.972 2.001 0.767 2.316 C 0.668 2.457 0.574 2.727 0.574 3.212 C 0.574 4.054 0.947 4.452 1.308 4.452 C 1.473 4.452 1.687 4.344 1.936 4.129 C 2.03 4.047 2.043 3.994 2.043 3.866 L 2.043 2.587 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-1131uug`,
                                          layoutDependency: x,
                                          layoutId: `KR1AKIDGs`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.08 4.783" overflow="visible"><path d="M 1.135 4.769 C 0.414 4.769 0 4.163 0 3.334 C 0 2.835 0.173 2.438 0.461 2.149 C 0.727 1.893 1.021 1.744 1.461 1.744 C 1.681 1.744 1.955 1.859 1.982 1.859 C 2.029 1.859 2.042 1.846 2.042 1.798 L 2.042 0.936 C 2.042 0.37 1.962 0.404 1.615 0.384 C 1.575 0.345 1.561 0.237 1.575 0.182 C 1.841 0.162 2.336 0.067 2.502 0 C 2.563 0 2.59 0.02 2.59 0.067 C 2.59 0.067 2.563 0.337 2.563 0.775 L 2.563 3.826 C 2.563 4.157 2.623 4.284 3.05 4.318 C 3.09 4.359 3.09 4.459 3.05 4.5 C 2.643 4.548 2.343 4.648 2.195 4.77 C 2.142 4.784 2.095 4.789 2.042 4.77 C 2.042 4.77 2.049 4.439 2.049 4.372 C 2.049 4.324 2.001 4.337 1.969 4.362 C 1.642 4.634 1.396 4.769 1.136 4.769 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-8qb52u`,
                                          layoutDependency: x,
                                          layoutId: `EMcLyQaW6`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.469 2.471" overflow="visible"><path d="M 1.468 0.607 C 1.468 0.398 1.448 0.351 1.355 0.243 C 1.221 0.088 1.055 0 0.814 0 C 0.68 0 0.399 0.02 0.193 0.336 C 0.094 0.477 0 0.747 0 1.232 C 0 2.073 0.374 2.471 0.735 2.471 C 0.9 2.471 1.113 2.364 1.363 2.148 C 1.457 2.066 1.469 2.013 1.469 1.886 L 1.469 0.607 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(S, {
                                      className: `framer-1ljfdy`,
                                      layoutDependency: x,
                                      layoutId: `udw_jJ3HX`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.547 4.372" overflow="visible"><path d="M 1.516 4.149 C 1.557 4.19 1.557 4.332 1.516 4.372 C 1.229 4.364 1.063 4.359 0.776 4.359 C 0.49 4.359 0.31 4.366 0.028 4.372 C -0.009 4.331 -0.009 4.189 0.028 4.149 C 0.435 4.116 0.51 4.095 0.51 3.536 L 0.51 2.223 C 0.51 1.84 0.439 1.801 0.076 1.766 C 0.062 1.725 0.047 1.617 0.062 1.577 C 0.522 1.516 0.786 1.456 0.976 1.381 C 1.03 1.381 1.062 1.401 1.062 1.429 C 1.062 1.429 1.035 1.86 1.035 2.196 L 1.035 3.539 C 1.035 4.097 1.108 4.123 1.515 4.15 Z M 0.775 0 C 0.956 0 1.095 0.188 1.095 0.35 C 1.095 0.492 0.935 0.673 0.748 0.673 C 0.588 0.673 0.429 0.498 0.429 0.322 C 0.429 0.162 0.615 0 0.775 0 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.547 4.372" overflow="visible"><path d="M 1.516 4.149 C 1.557 4.19 1.557 4.332 1.516 4.372 C 1.229 4.364 1.063 4.359 0.776 4.359 C 0.49 4.359 0.31 4.366 0.028 4.372 C -0.009 4.331 -0.009 4.189 0.028 4.149 C 0.435 4.116 0.51 4.095 0.51 3.536 L 0.51 2.223 C 0.51 1.84 0.439 1.801 0.076 1.766 C 0.062 1.725 0.047 1.617 0.062 1.577 C 0.522 1.516 0.786 1.456 0.976 1.381 C 1.03 1.381 1.062 1.401 1.062 1.429 C 1.062 1.429 1.035 1.86 1.035 2.196 L 1.035 3.539 C 1.035 4.097 1.108 4.123 1.515 4.15 Z M 0.775 0 C 0.956 0 1.095 0.188 1.095 0.35 C 1.095 0.492 0.935 0.673 0.748 0.673 C 0.588 0.673 0.429 0.498 0.429 0.322 C 0.429 0.162 0.615 0 0.775 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-eahv9k`,
                                          layoutDependency: x,
                                          layoutId: `jDh4WaPim`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.547 2.99" overflow="visible"><path d="M 1.516 2.768 C 1.557 2.809 1.557 2.95 1.516 2.99 C 1.229 2.983 1.063 2.977 0.776 2.977 C 0.49 2.977 0.31 2.985 0.028 2.99 C -0.009 2.95 -0.009 2.808 0.028 2.768 C 0.435 2.735 0.51 2.714 0.51 2.155 L 0.51 0.842 C 0.51 0.458 0.439 0.419 0.076 0.384 C 0.062 0.343 0.047 0.236 0.062 0.196 C 0.522 0.135 0.786 0.074 0.976 0 C 1.03 0 1.062 0.02 1.062 0.047 C 1.062 0.047 1.035 0.478 1.035 0.814 L 1.035 2.157 C 1.035 2.715 1.108 2.741 1.515 2.769 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-1lzmzx`,
                                          layoutDependency: x,
                                          layoutId: `z5Qw4zJB6`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.347 0 C 0.527 0 0.666 0.188 0.666 0.35 C 0.666 0.492 0.506 0.673 0.319 0.673 C 0.159 0.673 0 0.498 0 0.322 C 0 0.162 0.187 0 0.347 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    p(S, {
                                      className: `framer-1ijc213`,
                                      layoutDependency: x,
                                      layoutId: `O8LYyrdyR`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.794 3.025" overflow="visible"><path d="M 1.703 2.63 L 1.569 2.737 C 1.275 2.965 1.148 3.02 0.841 3.02 C 0.374 3.02 0 2.825 0 2.293 C 0 1.835 0.461 1.478 1.101 1.317 L 1.673 1.175 C 1.693 1.168 1.713 1.142 1.713 1.095 C 1.713 0.332 1.401 0.22 1.172 0.22 C 0.919 0.22 0.619 0.295 0.619 0.503 C 0.619 0.579 0.626 0.619 0.632 0.64 C 0.645 0.667 0.652 0.714 0.652 0.76 C 0.652 0.847 0.552 0.982 0.358 0.982 C 0.205 0.982 0.125 0.908 0.125 0.747 C 0.125 0.384 0.678 0 1.226 0 C 1.713 0 2.234 0.182 2.234 1.138 L 2.234 2.142 C 2.234 2.453 2.242 2.715 2.501 2.715 C 2.641 2.715 2.669 2.606 2.708 2.606 C 2.734 2.606 2.794 2.674 2.794 2.721 C 2.794 2.754 2.554 3.025 2.227 3.025 C 1.87 3.025 1.752 2.776 1.713 2.634 L 1.7 2.634 L 1.7 2.631 Z M 1.188 1.526 C 0.697 1.657 0.555 1.964 0.555 2.267 C 0.555 2.475 0.702 2.745 1.037 2.745 C 1.223 2.745 1.452 2.597 1.625 2.455 C 1.679 2.414 1.718 2.368 1.718 2.28 L 1.718 1.384 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.794 3.025" overflow="visible"><path d="M 1.703 2.63 L 1.569 2.737 C 1.275 2.965 1.148 3.02 0.841 3.02 C 0.374 3.02 0 2.825 0 2.293 C 0 1.835 0.461 1.478 1.101 1.317 L 1.673 1.175 C 1.693 1.168 1.713 1.142 1.713 1.095 C 1.713 0.332 1.401 0.22 1.172 0.22 C 0.919 0.22 0.619 0.295 0.619 0.503 C 0.619 0.579 0.626 0.619 0.632 0.64 C 0.645 0.667 0.652 0.714 0.652 0.76 C 0.652 0.847 0.552 0.982 0.358 0.982 C 0.205 0.982 0.125 0.908 0.125 0.747 C 0.125 0.384 0.678 0 1.226 0 C 1.713 0 2.234 0.182 2.234 1.138 L 2.234 2.142 C 2.234 2.453 2.242 2.715 2.501 2.715 C 2.641 2.715 2.669 2.606 2.708 2.606 C 2.734 2.606 2.794 2.674 2.794 2.721 C 2.794 2.754 2.554 3.025 2.227 3.025 C 1.87 3.025 1.752 2.776 1.713 2.634 L 1.7 2.634 L 1.7 2.631 Z M 1.188 1.526 C 0.697 1.657 0.555 1.964 0.555 2.267 C 0.555 2.475 0.702 2.745 1.037 2.745 C 1.223 2.745 1.452 2.597 1.625 2.455 C 1.679 2.414 1.718 2.368 1.718 2.28 L 1.718 1.384 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-11lo59o`,
                                          layoutDependency: x,
                                          layoutId: `DVZF4C4uP`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.794 3.025" overflow="visible"><path d="M 1.703 2.63 L 1.569 2.737 C 1.275 2.965 1.148 3.02 0.841 3.02 C 0.374 3.02 0 2.825 0 2.293 C 0 1.835 0.461 1.478 1.101 1.317 L 1.673 1.175 C 1.693 1.168 1.713 1.142 1.713 1.095 C 1.713 0.332 1.401 0.22 1.172 0.22 C 0.919 0.22 0.619 0.295 0.619 0.503 C 0.619 0.579 0.626 0.619 0.632 0.64 C 0.645 0.667 0.652 0.714 0.652 0.76 C 0.652 0.847 0.552 0.982 0.358 0.982 C 0.205 0.982 0.125 0.908 0.125 0.747 C 0.125 0.384 0.678 0 1.226 0 C 1.713 0 2.234 0.182 2.234 1.138 L 2.234 2.142 C 2.234 2.453 2.242 2.715 2.501 2.715 C 2.641 2.715 2.669 2.606 2.708 2.606 C 2.734 2.606 2.794 2.674 2.794 2.721 C 2.794 2.754 2.554 3.025 2.227 3.025 C 1.87 3.025 1.752 2.776 1.713 2.634 L 1.7 2.634 L 1.7 2.631 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-pz83kg`,
                                          layoutDependency: x,
                                          layoutId: `WUcGHO64e`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.163 1.361" overflow="visible"><path d="M 0.633 0.142 C 0.141 0.273 0 0.58 0 0.883 C 0 1.091 0.146 1.361 0.481 1.361 C 0.668 1.361 0.896 1.213 1.07 1.071 C 1.123 1.03 1.163 0.984 1.163 0.896 L 1.163 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                p(S, {
                                  className: `framer-1e6ll4g`,
                                  layoutDependency: x,
                                  layoutId: `VwHiPaT0x`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 9.033" overflow="visible"><g><path d="M 5.516 1.87 C 5.516 1.87 5.328 1.484 5.264 1.355 C 4.835 0.5 4.845 0.454 4.412 0.396 C 4.291 0.38 4.228 0.364 4.228 0.303 L 4.228 0.032 L 4.264 0.006 C 5.046 0.005 6.785 0.005 6.785 0.005 L 6.852 0.027 L 6.852 0.297 C 6.852 0.359 6.808 0.391 6.72 0.391 L 6.537 0.417 C 6.075 0.454 6.151 0.644 6.458 1.261 L 9.371 7.28 L 9.471 7.307 L 12.058 1.11 C 12.148 0.86 12.134 0.683 12.018 0.579 C 11.902 0.478 11.821 0.417 11.52 0.405 L 11.278 0.393 C 11.248 0.393 11.22 0.382 11.193 0.361 C 11.166 0.342 11.152 0.317 11.152 0.286 L 11.152 0.027 L 11.189 0.001 L 14.112 0.001 L 14.142 0.027 L 14.142 0.286 C 14.142 0.356 14.102 0.391 14.024 0.391 C 13.641 0.408 13.358 0.491 13.174 0.641 C 12.99 0.792 12.847 1 12.744 1.27 C 12.744 1.27 10.365 6.766 9.551 8.594 C 9.24 9.193 8.933 9.138 8.664 8.576 C 8.095 7.393 6.492 3.803 6.492 3.803 L 5.518 1.87 Z" fill="rgb(0, 0, 0)"></path><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(0, 0, 0)"></path><path d="M 15.182 8.025 C 15.182 8.321 15.316 8.496 15.743 8.536 L 16.023 8.564 C 16.064 8.564 16.103 8.59 16.103 8.644 L 16.103 8.927 L 16.09 8.954 C 16.09 8.954 15.076 8.927 14.662 8.927 C 14.289 8.927 13.248 8.954 13.248 8.954 L 13.221 8.927 L 13.221 8.644 C 13.221 8.589 13.262 8.564 13.315 8.564 L 13.581 8.536 C 14.022 8.495 14.155 8.28 14.155 8.025 L 14.155 3.538 C 14.155 3.243 13.994 3.161 13.581 3.121 L 13.315 3.093 C 13.261 3.093 13.221 3.08 13.221 3.039 L 13.221 2.729 L 13.235 2.702 C 13.235 2.702 14.289 2.729 14.702 2.729 C 15.063 2.729 16.089 2.702 16.089 2.702 L 16.103 2.729 L 16.103 3.025 C 16.103 3.066 16.076 3.093 16.022 3.093 L 15.742 3.12 C 15.328 3.16 15.181 3.268 15.181 3.538 L 15.181 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 19.12 8.025 C 19.12 8.321 19.293 8.47 19.68 8.536 L 19.827 8.564 C 19.868 8.577 19.907 8.59 19.907 8.644 L 19.907 8.927 L 19.894 8.954 C 19.894 8.954 19.053 8.927 18.653 8.927 C 18.279 8.927 17.185 8.954 17.185 8.954 L 17.159 8.927 L 17.159 8.644 C 17.159 8.589 17.199 8.564 17.252 8.564 L 17.519 8.536 C 17.919 8.495 18.092 8.28 18.092 8.025 L 18.092 3.538 C 18.092 3.243 17.945 3.161 17.519 3.121 L 17.252 3.093 C 17.199 3.093 17.159 3.08 17.159 3.039 L 17.159 2.729 L 17.172 2.702 C 17.172 2.702 18.266 2.729 18.68 2.729 C 19.054 2.729 19.894 2.702 19.894 2.702 L 19.907 2.729 L 19.907 3.025 C 19.907 3.066 19.881 3.079 19.827 3.093 L 19.68 3.12 C 19.267 3.2 19.12 3.268 19.12 3.538 L 19.12 5.573 C 19.561 5.573 19.814 5.345 20.401 4.711 C 20.935 4.117 21.348 3.621 21.348 3.363 C 21.348 3.255 21.228 3.135 20.961 3.094 C 20.907 3.081 20.881 3.067 20.881 3.026 L 20.881 2.715 L 20.894 2.703 C 20.894 2.703 21.975 2.729 22.362 2.729 C 22.708 2.729 23.296 2.703 23.296 2.703 L 23.336 2.715 L 23.336 3.026 C 23.336 3.067 23.296 3.094 23.23 3.094 C 22.709 3.134 22.349 3.161 21.869 3.713 L 20.722 5.046 C 20.495 5.289 20.415 5.437 20.415 5.545 C 20.415 5.626 20.468 5.692 20.535 5.773 L 22.55 8.225 C 22.71 8.414 23.03 8.495 23.297 8.548 L 23.364 8.561 C 23.404 8.574 23.457 8.601 23.457 8.641 L 23.457 8.924 L 23.416 8.938 C 23.416 8.938 22.709 8.924 22.335 8.924 C 22.002 8.924 21.521 8.938 21.521 8.938 L 21.508 8.924 L 21.508 8.763 C 21.508 8.587 21.495 8.44 21.308 8.225 L 19.826 6.365 C 19.626 6.095 19.413 6.028 19.119 6.028 L 19.119 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 26.314 8.025 C 26.314 8.321 26.448 8.496 26.874 8.536 L 27.155 8.564 C 27.195 8.564 27.235 8.59 27.235 8.644 L 27.235 8.927 L 27.222 8.954 C 27.222 8.954 26.208 8.927 25.794 8.927 C 25.42 8.927 24.38 8.954 24.38 8.954 L 24.353 8.927 L 24.353 8.644 C 24.353 8.589 24.394 8.564 24.446 8.564 L 24.713 8.536 C 25.154 8.495 25.287 8.28 25.287 8.025 L 25.287 3.538 C 25.287 3.243 25.126 3.161 24.713 3.121 L 24.446 3.093 C 24.393 3.093 24.353 3.08 24.353 3.039 L 24.353 2.729 L 24.366 2.702 C 24.366 2.702 25.42 2.729 25.834 2.729 C 26.194 2.729 27.221 2.702 27.221 2.702 L 27.234 2.729 L 27.234 3.025 C 27.234 3.066 27.208 3.093 27.154 3.093 L 26.874 3.12 C 26.46 3.16 26.313 3.268 26.313 3.538 L 26.313 8.025 Z" fill="rgb(0, 0, 0)"></path><path d="M 29.197 3.565 C 29.197 3.148 29.024 3.134 28.396 3.094 C 28.316 3.094 28.303 3.054 28.303 3.026 L 28.303 2.716 L 28.329 2.703 C 28.53 2.703 29.317 2.729 29.704 2.729 C 30.091 2.729 30.611 2.703 31.105 2.703 C 32.999 2.703 33.346 3.645 33.346 4.347 C 33.346 5.156 32.959 6.421 31.065 6.421 C 30.732 6.421 30.465 6.394 30.224 6.286 L 30.224 8.09 C 30.224 8.386 30.384 8.455 30.812 8.521 L 31.079 8.562 C 31.133 8.575 31.173 8.589 31.173 8.642 L 31.173 8.925 L 31.161 8.953 C 31.161 8.953 30.093 8.925 29.68 8.925 C 29.306 8.925 28.306 8.953 28.306 8.953 L 28.292 8.925 L 28.292 8.642 C 28.292 8.588 28.319 8.574 28.372 8.562 L 28.653 8.521 C 29.066 8.467 29.2 8.346 29.2 8.09 L 29.198 3.564 Z M 30.224 5.909 C 30.491 6.017 30.825 6.031 31.092 6.031 C 31.893 6.031 32.279 5.545 32.279 4.508 C 32.279 3.35 31.758 3.094 31.025 3.094 C 30.384 3.094 30.224 3.215 30.224 3.565 L 30.224 5.909 Z" fill="rgb(0, 0, 0)"></path><path d="M 35.644 8.927 C 35.244 8.927 34.324 8.954 34.324 8.954 L 34.31 8.927 L 34.31 8.63 C 34.31 8.604 34.324 8.564 34.39 8.564 L 34.698 8.536 C 35.112 8.495 35.231 8.226 35.231 7.957 L 35.231 3.512 C 35.231 3.201 35.071 3.148 34.698 3.121 L 34.39 3.093 C 34.31 3.08 34.31 3.053 34.31 3.039 L 34.31 2.729 L 34.324 2.702 C 34.324 2.702 35.364 2.729 35.765 2.729 L 37.726 2.729 C 38.127 2.729 39.075 2.702 39.075 2.702 L 39.103 2.729 C 39.115 3.308 39.209 3.834 39.304 4.346 L 38.971 4.4 C 38.825 3.901 38.571 3.188 37.717 3.188 L 36.65 3.188 C 36.397 3.188 36.263 3.282 36.263 3.51 L 36.263 5.464 L 37.263 5.464 C 37.637 5.464 37.731 5.302 37.784 5.033 L 37.863 4.75 C 37.863 4.709 37.891 4.682 37.943 4.682 L 38.17 4.682 C 38.198 4.682 38.198 4.697 38.198 4.723 C 38.17 5.019 38.118 5.397 38.118 5.721 C 38.118 6.044 38.171 6.341 38.198 6.651 L 38.17 6.678 L 37.943 6.678 C 37.877 6.678 37.849 6.651 37.849 6.611 L 37.782 6.315 C 37.729 6.045 37.609 5.896 37.261 5.896 L 36.261 5.896 L 36.261 7.958 C 36.261 8.213 36.407 8.469 36.649 8.469 L 37.916 8.469 C 38.597 8.469 38.972 8.038 39.13 7.336 L 39.463 7.377 L 39.195 8.926 L 39.169 8.953 C 39.169 8.953 38.382 8.926 37.981 8.926 L 35.647 8.929 Z" fill="rgb(0, 0, 0)"></path><path d="M 40.662 8.564 L 40.969 8.536 C 41.37 8.495 41.503 8.375 41.503 7.957 L 41.503 3.512 C 41.503 3.16 41.409 3.16 40.969 3.121 L 40.677 3.093 C 40.623 3.093 40.583 3.066 40.583 3.025 L 40.583 2.729 L 40.596 2.702 C 40.596 2.702 41.77 2.729 42.011 2.729 C 42.264 2.729 43.426 2.702 43.773 2.702 C 46.001 2.702 47.095 4.103 47.095 5.895 C 47.095 8.253 45.441 8.952 43.96 8.952 C 42.893 8.952 42.426 8.924 42.012 8.924 C 41.599 8.924 40.597 8.952 40.597 8.952 L 40.584 8.924 L 40.584 8.641 C 40.582 8.603 40.609 8.562 40.662 8.562 Z M 43.638 8.564 C 45.105 8.564 45.933 8.012 45.933 6.125 C 45.933 4.724 45.626 3.094 43.384 3.094 C 42.863 3.094 42.53 3.174 42.53 3.512 L 42.53 7.957 C 42.53 8.333 42.623 8.564 43.637 8.564 Z" fill="rgb(0, 0, 0)"></path><path d="M 50.245 8.025 C 50.245 8.321 50.378 8.496 50.805 8.536 L 51.086 8.564 C 51.126 8.564 51.166 8.59 51.166 8.644 L 51.166 8.927 L 51.152 8.954 C 51.152 8.954 50.138 8.927 49.725 8.927 C 49.352 8.927 48.311 8.954 48.311 8.954 L 48.284 8.927 L 48.284 8.644 C 48.284 8.589 48.324 8.564 48.377 8.564 L 48.644 8.536 C 49.084 8.495 49.218 8.28 49.218 8.025 L 49.218 3.538 C 49.218 3.243 49.057 3.161 48.644 3.121 L 48.377 3.093 C 48.323 3.093 48.284 3.08 48.284 3.039 L 48.284 2.729 L 48.297 2.702 C 48.297 2.702 49.351 2.729 49.763 2.729 C 50.123 2.729 51.152 2.702 51.152 2.702 L 51.164 2.729 L 51.164 3.025 C 51.164 3.066 51.136 3.093 51.084 3.093 L 50.803 3.12 C 50.389 3.16 50.243 3.268 50.243 3.538 Z" fill="rgb(0, 0, 0)"></path><path d="M 54.355 8.536 L 54.743 8.564 C 54.796 8.564 54.849 8.604 54.849 8.671 L 54.849 8.927 L 54.823 8.954 C 54.823 8.954 53.368 8.927 53.048 8.927 C 52.701 8.927 51.847 8.954 51.847 8.954 L 51.819 8.927 L 51.819 8.671 C 51.819 8.604 51.86 8.564 51.927 8.564 C 52.514 8.523 52.847 8.415 53.221 7.553 L 56.183 0.547 C 56.329 0.197 56.436 0.061 56.637 0.061 C 56.823 0.061 56.891 0.196 56.996 0.466 L 59.732 7.768 C 59.919 8.294 60.186 8.495 60.72 8.549 L 60.866 8.563 C 60.933 8.563 61 8.603 61 8.671 L 61 8.926 L 60.96 8.954 C 60.96 8.954 59.932 8.926 59.411 8.926 C 58.944 8.926 57.636 8.954 57.636 8.954 L 57.624 8.926 L 57.624 8.671 C 57.624 8.603 57.65 8.563 57.719 8.563 L 58.092 8.535 C 58.599 8.495 58.787 8.333 58.653 7.956 L 57.839 5.678 L 55.063 5.678 C 54.743 5.678 54.662 5.732 54.596 5.906 L 53.822 7.86 C 53.689 8.2 53.862 8.496 54.356 8.537 Z M 57.624 5.113 L 56.33 1.517 L 56.304 1.517 L 54.969 4.939 C 54.916 5.075 55.009 5.114 55.303 5.114 L 57.625 5.114 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "adguRWWdy-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 9.033" overflow="visible"><g><path d="M 5.516 1.87 C 5.516 1.87 5.328 1.484 5.264 1.355 C 4.835 0.5 4.845 0.454 4.412 0.396 C 4.291 0.38 4.228 0.364 4.228 0.303 L 4.228 0.032 L 4.264 0.006 C 5.046 0.005 6.785 0.005 6.785 0.005 L 6.852 0.027 L 6.852 0.297 C 6.852 0.359 6.808 0.391 6.72 0.391 L 6.537 0.417 C 6.075 0.454 6.151 0.644 6.458 1.261 L 9.371 7.28 L 9.471 7.307 L 12.058 1.11 C 12.148 0.86 12.134 0.683 12.018 0.579 C 11.902 0.478 11.821 0.417 11.52 0.405 L 11.278 0.393 C 11.248 0.393 11.22 0.382 11.193 0.361 C 11.166 0.342 11.152 0.317 11.152 0.286 L 11.152 0.027 L 11.189 0.001 L 14.112 0.001 L 14.142 0.027 L 14.142 0.286 C 14.142 0.356 14.102 0.391 14.024 0.391 C 13.641 0.408 13.358 0.491 13.174 0.641 C 12.99 0.792 12.847 1 12.744 1.27 C 12.744 1.27 10.365 6.766 9.551 8.594 C 9.24 9.193 8.933 9.138 8.664 8.576 C 8.095 7.393 6.492 3.803 6.492 3.803 L 5.518 1.87 Z" fill="rgb(255, 255, 255)"></path><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(255, 255, 255)"></path><path d="M 15.182 8.025 C 15.182 8.321 15.316 8.496 15.743 8.536 L 16.023 8.564 C 16.064 8.564 16.103 8.59 16.103 8.644 L 16.103 8.927 L 16.09 8.954 C 16.09 8.954 15.076 8.927 14.662 8.927 C 14.289 8.927 13.248 8.954 13.248 8.954 L 13.221 8.927 L 13.221 8.644 C 13.221 8.589 13.262 8.564 13.315 8.564 L 13.581 8.536 C 14.022 8.495 14.155 8.28 14.155 8.025 L 14.155 3.538 C 14.155 3.243 13.994 3.161 13.581 3.121 L 13.315 3.093 C 13.261 3.093 13.221 3.08 13.221 3.039 L 13.221 2.729 L 13.235 2.702 C 13.235 2.702 14.289 2.729 14.702 2.729 C 15.063 2.729 16.089 2.702 16.089 2.702 L 16.103 2.729 L 16.103 3.025 C 16.103 3.066 16.076 3.093 16.022 3.093 L 15.742 3.12 C 15.328 3.16 15.181 3.268 15.181 3.538 L 15.181 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.12 8.025 C 19.12 8.321 19.293 8.47 19.68 8.536 L 19.827 8.564 C 19.868 8.577 19.907 8.59 19.907 8.644 L 19.907 8.927 L 19.894 8.954 C 19.894 8.954 19.053 8.927 18.653 8.927 C 18.279 8.927 17.185 8.954 17.185 8.954 L 17.159 8.927 L 17.159 8.644 C 17.159 8.589 17.199 8.564 17.252 8.564 L 17.519 8.536 C 17.919 8.495 18.092 8.28 18.092 8.025 L 18.092 3.538 C 18.092 3.243 17.945 3.161 17.519 3.121 L 17.252 3.093 C 17.199 3.093 17.159 3.08 17.159 3.039 L 17.159 2.729 L 17.172 2.702 C 17.172 2.702 18.266 2.729 18.68 2.729 C 19.054 2.729 19.894 2.702 19.894 2.702 L 19.907 2.729 L 19.907 3.025 C 19.907 3.066 19.881 3.079 19.827 3.093 L 19.68 3.12 C 19.267 3.2 19.12 3.268 19.12 3.538 L 19.12 5.573 C 19.561 5.573 19.814 5.345 20.401 4.711 C 20.935 4.117 21.348 3.621 21.348 3.363 C 21.348 3.255 21.228 3.135 20.961 3.094 C 20.907 3.081 20.881 3.067 20.881 3.026 L 20.881 2.715 L 20.894 2.703 C 20.894 2.703 21.975 2.729 22.362 2.729 C 22.708 2.729 23.296 2.703 23.296 2.703 L 23.336 2.715 L 23.336 3.026 C 23.336 3.067 23.296 3.094 23.23 3.094 C 22.709 3.134 22.349 3.161 21.869 3.713 L 20.722 5.046 C 20.495 5.289 20.415 5.437 20.415 5.545 C 20.415 5.626 20.468 5.692 20.535 5.773 L 22.55 8.225 C 22.71 8.414 23.03 8.495 23.297 8.548 L 23.364 8.561 C 23.404 8.574 23.457 8.601 23.457 8.641 L 23.457 8.924 L 23.416 8.938 C 23.416 8.938 22.709 8.924 22.335 8.924 C 22.002 8.924 21.521 8.938 21.521 8.938 L 21.508 8.924 L 21.508 8.763 C 21.508 8.587 21.495 8.44 21.308 8.225 L 19.826 6.365 C 19.626 6.095 19.413 6.028 19.119 6.028 L 19.119 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.314 8.025 C 26.314 8.321 26.448 8.496 26.874 8.536 L 27.155 8.564 C 27.195 8.564 27.235 8.59 27.235 8.644 L 27.235 8.927 L 27.222 8.954 C 27.222 8.954 26.208 8.927 25.794 8.927 C 25.42 8.927 24.38 8.954 24.38 8.954 L 24.353 8.927 L 24.353 8.644 C 24.353 8.589 24.394 8.564 24.446 8.564 L 24.713 8.536 C 25.154 8.495 25.287 8.28 25.287 8.025 L 25.287 3.538 C 25.287 3.243 25.126 3.161 24.713 3.121 L 24.446 3.093 C 24.393 3.093 24.353 3.08 24.353 3.039 L 24.353 2.729 L 24.366 2.702 C 24.366 2.702 25.42 2.729 25.834 2.729 C 26.194 2.729 27.221 2.702 27.221 2.702 L 27.234 2.729 L 27.234 3.025 C 27.234 3.066 27.208 3.093 27.154 3.093 L 26.874 3.12 C 26.46 3.16 26.313 3.268 26.313 3.538 L 26.313 8.025 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.197 3.565 C 29.197 3.148 29.024 3.134 28.396 3.094 C 28.316 3.094 28.303 3.054 28.303 3.026 L 28.303 2.716 L 28.329 2.703 C 28.53 2.703 29.317 2.729 29.704 2.729 C 30.091 2.729 30.611 2.703 31.105 2.703 C 32.999 2.703 33.346 3.645 33.346 4.347 C 33.346 5.156 32.959 6.421 31.065 6.421 C 30.732 6.421 30.465 6.394 30.224 6.286 L 30.224 8.09 C 30.224 8.386 30.384 8.455 30.812 8.521 L 31.079 8.562 C 31.133 8.575 31.173 8.589 31.173 8.642 L 31.173 8.925 L 31.161 8.953 C 31.161 8.953 30.093 8.925 29.68 8.925 C 29.306 8.925 28.306 8.953 28.306 8.953 L 28.292 8.925 L 28.292 8.642 C 28.292 8.588 28.319 8.574 28.372 8.562 L 28.653 8.521 C 29.066 8.467 29.2 8.346 29.2 8.09 L 29.198 3.564 Z M 30.224 5.909 C 30.491 6.017 30.825 6.031 31.092 6.031 C 31.893 6.031 32.279 5.545 32.279 4.508 C 32.279 3.35 31.758 3.094 31.025 3.094 C 30.384 3.094 30.224 3.215 30.224 3.565 L 30.224 5.909 Z" fill="rgb(255, 255, 255)"></path><path d="M 35.644 8.927 C 35.244 8.927 34.324 8.954 34.324 8.954 L 34.31 8.927 L 34.31 8.63 C 34.31 8.604 34.324 8.564 34.39 8.564 L 34.698 8.536 C 35.112 8.495 35.231 8.226 35.231 7.957 L 35.231 3.512 C 35.231 3.201 35.071 3.148 34.698 3.121 L 34.39 3.093 C 34.31 3.08 34.31 3.053 34.31 3.039 L 34.31 2.729 L 34.324 2.702 C 34.324 2.702 35.364 2.729 35.765 2.729 L 37.726 2.729 C 38.127 2.729 39.075 2.702 39.075 2.702 L 39.103 2.729 C 39.115 3.308 39.209 3.834 39.304 4.346 L 38.971 4.4 C 38.825 3.901 38.571 3.188 37.717 3.188 L 36.65 3.188 C 36.397 3.188 36.263 3.282 36.263 3.51 L 36.263 5.464 L 37.263 5.464 C 37.637 5.464 37.731 5.302 37.784 5.033 L 37.863 4.75 C 37.863 4.709 37.891 4.682 37.943 4.682 L 38.17 4.682 C 38.198 4.682 38.198 4.697 38.198 4.723 C 38.17 5.019 38.118 5.397 38.118 5.721 C 38.118 6.044 38.171 6.341 38.198 6.651 L 38.17 6.678 L 37.943 6.678 C 37.877 6.678 37.849 6.651 37.849 6.611 L 37.782 6.315 C 37.729 6.045 37.609 5.896 37.261 5.896 L 36.261 5.896 L 36.261 7.958 C 36.261 8.213 36.407 8.469 36.649 8.469 L 37.916 8.469 C 38.597 8.469 38.972 8.038 39.13 7.336 L 39.463 7.377 L 39.195 8.926 L 39.169 8.953 C 39.169 8.953 38.382 8.926 37.981 8.926 L 35.647 8.929 Z" fill="rgb(255, 255, 255)"></path><path d="M 40.662 8.564 L 40.969 8.536 C 41.37 8.495 41.503 8.375 41.503 7.957 L 41.503 3.512 C 41.503 3.16 41.409 3.16 40.969 3.121 L 40.677 3.093 C 40.623 3.093 40.583 3.066 40.583 3.025 L 40.583 2.729 L 40.596 2.702 C 40.596 2.702 41.77 2.729 42.011 2.729 C 42.264 2.729 43.426 2.702 43.773 2.702 C 46.001 2.702 47.095 4.103 47.095 5.895 C 47.095 8.253 45.441 8.952 43.96 8.952 C 42.893 8.952 42.426 8.924 42.012 8.924 C 41.599 8.924 40.597 8.952 40.597 8.952 L 40.584 8.924 L 40.584 8.641 C 40.582 8.603 40.609 8.562 40.662 8.562 Z M 43.638 8.564 C 45.105 8.564 45.933 8.012 45.933 6.125 C 45.933 4.724 45.626 3.094 43.384 3.094 C 42.863 3.094 42.53 3.174 42.53 3.512 L 42.53 7.957 C 42.53 8.333 42.623 8.564 43.637 8.564 Z" fill="rgb(255, 255, 255)"></path><path d="M 50.245 8.025 C 50.245 8.321 50.378 8.496 50.805 8.536 L 51.086 8.564 C 51.126 8.564 51.166 8.59 51.166 8.644 L 51.166 8.927 L 51.152 8.954 C 51.152 8.954 50.138 8.927 49.725 8.927 C 49.352 8.927 48.311 8.954 48.311 8.954 L 48.284 8.927 L 48.284 8.644 C 48.284 8.589 48.324 8.564 48.377 8.564 L 48.644 8.536 C 49.084 8.495 49.218 8.28 49.218 8.025 L 49.218 3.538 C 49.218 3.243 49.057 3.161 48.644 3.121 L 48.377 3.093 C 48.323 3.093 48.284 3.08 48.284 3.039 L 48.284 2.729 L 48.297 2.702 C 48.297 2.702 49.351 2.729 49.763 2.729 C 50.123 2.729 51.152 2.702 51.152 2.702 L 51.164 2.729 L 51.164 3.025 C 51.164 3.066 51.136 3.093 51.084 3.093 L 50.803 3.12 C 50.389 3.16 50.243 3.268 50.243 3.538 Z" fill="rgb(255, 255, 255)"></path><path d="M 54.355 8.536 L 54.743 8.564 C 54.796 8.564 54.849 8.604 54.849 8.671 L 54.849 8.927 L 54.823 8.954 C 54.823 8.954 53.368 8.927 53.048 8.927 C 52.701 8.927 51.847 8.954 51.847 8.954 L 51.819 8.927 L 51.819 8.671 C 51.819 8.604 51.86 8.564 51.927 8.564 C 52.514 8.523 52.847 8.415 53.221 7.553 L 56.183 0.547 C 56.329 0.197 56.436 0.061 56.637 0.061 C 56.823 0.061 56.891 0.196 56.996 0.466 L 59.732 7.768 C 59.919 8.294 60.186 8.495 60.72 8.549 L 60.866 8.563 C 60.933 8.563 61 8.603 61 8.671 L 61 8.926 L 60.96 8.954 C 60.96 8.954 59.932 8.926 59.411 8.926 C 58.944 8.926 57.636 8.954 57.636 8.954 L 57.624 8.926 L 57.624 8.671 C 57.624 8.603 57.65 8.563 57.719 8.563 L 58.092 8.535 C 58.599 8.495 58.787 8.333 58.653 7.956 L 57.839 5.678 L 55.063 5.678 C 54.743 5.678 54.662 5.732 54.596 5.906 L 53.822 7.86 C 53.689 8.2 53.862 8.496 54.356 8.537 Z M 57.624 5.113 L 56.33 1.517 L 56.304 1.517 L 54.969 4.939 C 54.916 5.075 55.009 5.114 55.303 5.114 L 57.625 5.114 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                  children: [
                                    l(S, {
                                      className: `framer-15b9t5w`,
                                      layoutDependency: x,
                                      layoutId: `w6NzQp7JF`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.914 9.02" overflow="visible"><path d="M 1.288 1.87 C 1.288 1.87 1.1 1.483 1.036 1.355 C 0.607 0.499 0.617 0.453 0.184 0.395 C 0.063 0.379 0 0.363 0 0.302 L 0 0.032 L 0.036 0.005 C 0.818 0.004 2.557 0.004 2.557 0.004 L 2.624 0.027 L 2.624 0.297 C 2.624 0.358 2.58 0.39 2.492 0.39 L 2.309 0.417 C 1.847 0.453 1.923 0.643 2.23 1.261 L 5.143 7.279 L 5.243 7.307 L 7.83 1.109 C 7.92 0.859 7.906 0.682 7.79 0.578 C 7.674 0.477 7.593 0.417 7.292 0.404 L 7.05 0.392 C 7.02 0.392 6.992 0.382 6.965 0.361 C 6.938 0.342 6.924 0.317 6.924 0.286 L 6.924 0.027 L 6.961 0 L 9.884 0 L 9.914 0.027 L 9.914 0.285 C 9.914 0.355 9.874 0.39 9.796 0.39 C 9.413 0.407 9.13 0.491 8.946 0.641 C 8.762 0.792 8.619 0.999 8.516 1.269 C 8.516 1.269 6.137 6.765 5.323 8.593 C 5.012 9.192 4.705 9.137 4.436 8.576 C 3.867 7.392 2.264 3.802 2.264 3.802 L 1.29 1.87 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.914 9.02" overflow="visible"><path d="M 1.288 1.87 C 1.288 1.87 1.1 1.483 1.036 1.355 C 0.607 0.499 0.617 0.453 0.184 0.395 C 0.063 0.379 0 0.363 0 0.302 L 0 0.032 L 0.036 0.005 C 0.818 0.004 2.557 0.004 2.557 0.004 L 2.624 0.027 L 2.624 0.297 C 2.624 0.358 2.58 0.39 2.492 0.39 L 2.309 0.417 C 1.847 0.453 1.923 0.643 2.23 1.261 L 5.143 7.279 L 5.243 7.307 L 7.83 1.109 C 7.92 0.859 7.906 0.682 7.79 0.578 C 7.674 0.477 7.593 0.417 7.292 0.404 L 7.05 0.392 C 7.02 0.392 6.992 0.382 6.965 0.361 C 6.938 0.342 6.924 0.317 6.924 0.286 L 6.924 0.027 L 6.961 0 L 9.884 0 L 9.914 0.027 L 9.914 0.285 C 9.914 0.355 9.874 0.39 9.796 0.39 C 9.413 0.407 9.13 0.491 8.946 0.641 C 8.762 0.792 8.619 0.999 8.516 1.269 C 8.516 1.269 6.137 6.765 5.323 8.593 C 5.012 9.192 4.705 9.137 4.436 8.576 C 3.867 7.392 2.264 3.802 2.264 3.802 L 1.29 1.87 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-13mv3xu`,
                                      layoutDependency: x,
                                      layoutId: `rzUbFCKNr`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.213 9.033" overflow="visible"><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.213 9.033" overflow="visible"><path d="M 10.184 0.002 C 10.184 0.002 8.54 -0.003 7.808 0.002 L 7.772 0.029 L 7.772 0.286 C 7.772 0.317 7.785 0.342 7.812 0.361 C 7.84 0.381 7.868 0.392 7.897 0.392 L 8.015 0.406 C 8.314 0.417 8.451 0.497 8.492 0.546 C 8.563 0.635 8.599 0.73 8.426 1.11 L 5.357 7.29 L 5.276 7.27 C 5.276 7.27 3.078 2.589 2.442 1.024 C 2.376 0.862 2.346 0.741 2.346 0.667 C 2.346 0.508 2.488 0.422 2.773 0.411 L 3.105 0.396 C 3.192 0.396 3.237 0.362 3.237 0.291 L 3.237 0.034 L 3.207 0.007 C 3.207 0.007 0.574 0.005 0.03 0.008 L 0 0.035 L 0 0.305 C 0 0.353 0.061 0.384 0.184 0.397 C 0.518 0.416 0.738 0.469 0.843 0.559 C 0.948 0.65 1.06 0.879 1.208 1.235 C 2.007 3.173 3.705 6.631 4.532 8.6 C 4.77 9.138 5.069 9.222 5.432 8.584 C 6.061 7.406 7.767 3.808 7.767 3.808 L 9.111 1.27 C 9.267 1.002 9.418 0.763 9.494 0.652 C 9.635 0.449 9.713 0.411 10.096 0.392 C 10.174 0.392 10.213 0.357 10.213 0.286 L 10.213 0.029 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1ws4rdj`,
                                      layoutDependency: x,
                                      layoutId: `GPftpiev5`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.882 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.095 5.794 2.521 5.834 L 2.802 5.862 C 2.842 5.862 2.882 5.888 2.882 5.942 L 2.882 6.225 L 2.869 6.253 C 2.869 6.253 1.854 6.225 1.441 6.225 C 1.067 6.225 0.026 6.253 0.026 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.36 5.834 C 0.801 5.793 0.933 5.578 0.933 5.323 L 0.933 0.837 C 0.933 0.542 0.772 0.459 0.36 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.067 0.027 1.481 0.027 C 1.841 0.027 2.868 0 2.868 0 L 2.881 0.027 L 2.881 0.323 C 2.881 0.364 2.855 0.391 2.801 0.391 L 2.52 0.418 C 2.107 0.458 1.96 0.567 1.96 0.837 L 1.96 5.323 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.882 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.095 5.794 2.521 5.834 L 2.802 5.862 C 2.842 5.862 2.882 5.888 2.882 5.942 L 2.882 6.225 L 2.869 6.253 C 2.869 6.253 1.854 6.225 1.441 6.225 C 1.067 6.225 0.026 6.253 0.026 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.36 5.834 C 0.801 5.793 0.933 5.578 0.933 5.323 L 0.933 0.837 C 0.933 0.542 0.772 0.459 0.36 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.067 0.027 1.481 0.027 C 1.841 0.027 2.868 0 2.868 0 L 2.881 0.027 L 2.881 0.323 C 2.881 0.364 2.855 0.391 2.801 0.391 L 2.52 0.418 C 2.107 0.458 1.96 0.567 1.96 0.837 L 1.96 5.323 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-fc665y`,
                                      layoutDependency: x,
                                      layoutId: `FYBaJGqMN`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.298 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.134 5.768 2.521 5.834 L 2.668 5.862 C 2.709 5.875 2.748 5.888 2.748 5.942 L 2.748 6.225 L 2.735 6.253 C 2.735 6.253 1.894 6.225 1.494 6.225 C 1.12 6.225 0.026 6.253 0.026 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.36 5.834 C 0.76 5.793 0.933 5.578 0.933 5.323 L 0.933 0.837 C 0.933 0.542 0.787 0.459 0.36 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.108 0.027 1.521 0.027 C 1.895 0.027 2.735 0 2.735 0 L 2.748 0.027 L 2.748 0.323 C 2.748 0.364 2.722 0.377 2.668 0.391 L 2.521 0.418 C 2.108 0.498 1.961 0.567 1.961 0.837 L 1.961 2.871 C 2.402 2.871 2.655 2.643 3.242 2.009 C 3.776 1.415 4.189 0.919 4.189 0.662 C 4.189 0.553 4.069 0.433 3.802 0.392 C 3.749 0.379 3.722 0.365 3.722 0.324 L 3.722 0.013 L 3.735 0.001 C 3.735 0.001 4.816 0.027 5.203 0.027 C 5.549 0.027 6.137 0.001 6.137 0.001 L 6.177 0.013 L 6.177 0.324 C 6.177 0.365 6.137 0.392 6.071 0.392 C 5.55 0.432 5.19 0.459 4.71 1.012 L 3.563 2.344 C 3.336 2.587 3.256 2.735 3.256 2.843 C 3.256 2.924 3.309 2.99 3.376 3.071 L 5.391 5.523 C 5.551 5.712 5.871 5.793 6.138 5.846 L 6.205 5.859 C 6.245 5.873 6.298 5.899 6.298 5.939 L 6.298 6.223 L 6.257 6.236 C 6.257 6.236 5.55 6.223 5.176 6.223 C 4.843 6.223 4.363 6.236 4.363 6.236 L 4.349 6.223 L 4.349 6.061 C 4.349 5.885 4.336 5.738 4.149 5.523 L 2.667 3.663 C 2.467 3.393 2.254 3.326 1.96 3.326 L 1.96 5.323 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.298 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.134 5.768 2.521 5.834 L 2.668 5.862 C 2.709 5.875 2.748 5.888 2.748 5.942 L 2.748 6.225 L 2.735 6.253 C 2.735 6.253 1.894 6.225 1.494 6.225 C 1.12 6.225 0.026 6.253 0.026 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.36 5.834 C 0.76 5.793 0.933 5.578 0.933 5.323 L 0.933 0.837 C 0.933 0.542 0.787 0.459 0.36 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.108 0.027 1.521 0.027 C 1.895 0.027 2.735 0 2.735 0 L 2.748 0.027 L 2.748 0.323 C 2.748 0.364 2.722 0.377 2.668 0.391 L 2.521 0.418 C 2.108 0.498 1.961 0.567 1.961 0.837 L 1.961 2.871 C 2.402 2.871 2.655 2.643 3.242 2.009 C 3.776 1.415 4.189 0.919 4.189 0.662 C 4.189 0.553 4.069 0.433 3.802 0.392 C 3.749 0.379 3.722 0.365 3.722 0.324 L 3.722 0.013 L 3.735 0.001 C 3.735 0.001 4.816 0.027 5.203 0.027 C 5.549 0.027 6.137 0.001 6.137 0.001 L 6.177 0.013 L 6.177 0.324 C 6.177 0.365 6.137 0.392 6.071 0.392 C 5.55 0.432 5.19 0.459 4.71 1.012 L 3.563 2.344 C 3.336 2.587 3.256 2.735 3.256 2.843 C 3.256 2.924 3.309 2.99 3.376 3.071 L 5.391 5.523 C 5.551 5.712 5.871 5.793 6.138 5.846 L 6.205 5.859 C 6.245 5.873 6.298 5.899 6.298 5.939 L 6.298 6.223 L 6.257 6.236 C 6.257 6.236 5.55 6.223 5.176 6.223 C 4.843 6.223 4.363 6.236 4.363 6.236 L 4.349 6.223 L 4.349 6.061 C 4.349 5.885 4.336 5.738 4.149 5.523 L 2.667 3.663 C 2.467 3.393 2.254 3.326 1.96 3.326 L 1.96 5.323 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    l(S, {
                                      className: `framer-1ny7zk4`,
                                      layoutDependency: x,
                                      layoutId: `xQafYiyCX`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.882 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.095 5.794 2.521 5.834 L 2.802 5.862 C 2.842 5.862 2.882 5.888 2.882 5.942 L 2.882 6.225 L 2.869 6.253 C 2.869 6.253 1.854 6.225 1.441 6.225 C 1.067 6.225 0.026 6.253 0.026 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.36 5.834 C 0.801 5.793 0.933 5.578 0.933 5.323 L 0.933 0.837 C 0.933 0.542 0.773 0.459 0.36 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.067 0.027 1.481 0.027 C 1.841 0.027 2.868 0 2.868 0 L 2.881 0.027 L 2.881 0.323 C 2.881 0.364 2.855 0.391 2.801 0.391 L 2.52 0.418 C 2.107 0.458 1.96 0.567 1.96 0.837 L 1.96 5.323 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.882 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.095 5.794 2.521 5.834 L 2.802 5.862 C 2.842 5.862 2.882 5.888 2.882 5.942 L 2.882 6.225 L 2.869 6.253 C 2.869 6.253 1.854 6.225 1.441 6.225 C 1.067 6.225 0.026 6.253 0.026 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.36 5.834 C 0.801 5.793 0.933 5.578 0.933 5.323 L 0.933 0.837 C 0.933 0.542 0.773 0.459 0.36 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.067 0.027 1.481 0.027 C 1.841 0.027 2.868 0 2.868 0 L 2.881 0.027 L 2.881 0.323 C 2.881 0.364 2.855 0.391 2.801 0.391 L 2.52 0.418 C 2.107 0.458 1.96 0.567 1.96 0.837 L 1.96 5.323 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    p(S, {
                                      className: `framer-yf9w4b`,
                                      layoutDependency: x,
                                      layoutId: `UJqWjgAR_`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.053 6.25" overflow="visible"><path d="M 0.905 0.862 C 0.905 0.445 0.731 0.432 0.104 0.391 C 0.024 0.391 0.011 0.351 0.011 0.323 L 0.011 0.013 L 0.037 0 C 0.238 0 1.024 0.027 1.411 0.027 C 1.798 0.027 2.318 0 2.813 0 C 4.707 0 5.053 0.942 5.053 1.644 C 5.053 2.453 4.666 3.719 2.773 3.719 C 2.44 3.719 2.172 3.691 1.932 3.584 L 1.932 5.388 C 1.932 5.683 2.092 5.752 2.52 5.818 L 2.787 5.859 C 2.841 5.873 2.881 5.887 2.881 5.939 L 2.881 6.223 L 2.869 6.25 C 2.869 6.25 1.801 6.223 1.387 6.223 C 1.013 6.223 0.013 6.25 0.013 6.25 L 0 6.223 L 0 5.939 C 0 5.885 0.026 5.872 0.08 5.859 L 0.361 5.818 C 0.774 5.764 0.908 5.643 0.908 5.388 L 0.906 0.862 Z M 1.932 3.206 C 2.199 3.315 2.533 3.328 2.799 3.328 C 3.601 3.328 3.986 2.842 3.986 1.806 C 3.986 0.647 3.465 0.391 2.733 0.391 C 2.091 0.391 1.931 0.512 1.931 0.862 L 1.931 3.206 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.053 6.25" overflow="visible"><path d="M 0.905 0.862 C 0.905 0.445 0.731 0.432 0.104 0.391 C 0.024 0.391 0.011 0.351 0.011 0.323 L 0.011 0.013 L 0.037 0 C 0.238 0 1.024 0.027 1.411 0.027 C 1.798 0.027 2.318 0 2.813 0 C 4.707 0 5.053 0.942 5.053 1.644 C 5.053 2.453 4.666 3.719 2.773 3.719 C 2.44 3.719 2.172 3.691 1.932 3.584 L 1.932 5.388 C 1.932 5.683 2.092 5.752 2.52 5.818 L 2.787 5.859 C 2.841 5.873 2.881 5.887 2.881 5.939 L 2.881 6.223 L 2.869 6.25 C 2.869 6.25 1.801 6.223 1.387 6.223 C 1.013 6.223 0.013 6.25 0.013 6.25 L 0 6.223 L 0 5.939 C 0 5.885 0.026 5.872 0.08 5.859 L 0.361 5.818 C 0.774 5.764 0.908 5.643 0.908 5.388 L 0.906 0.862 Z M 1.932 3.206 C 2.199 3.315 2.533 3.328 2.799 3.328 C 3.601 3.328 3.986 2.842 3.986 1.806 C 3.986 0.647 3.465 0.391 2.733 0.391 C 2.091 0.391 1.931 0.512 1.931 0.862 L 1.931 3.206 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-r7y4k`,
                                          layoutDependency: x,
                                          layoutId: `M5CTIH6yt`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.053 6.25" overflow="visible"><path d="M 0.905 0.862 C 0.905 0.445 0.731 0.432 0.104 0.391 C 0.024 0.391 0.011 0.351 0.011 0.323 L 0.011 0.013 L 0.037 0 C 0.238 0 1.024 0.027 1.411 0.027 C 1.798 0.027 2.318 0 2.813 0 C 4.707 0 5.053 0.942 5.053 1.644 C 5.053 2.453 4.666 3.719 2.773 3.719 C 2.44 3.719 2.172 3.691 1.932 3.584 L 1.932 5.388 C 1.932 5.683 2.092 5.752 2.52 5.818 L 2.787 5.859 C 2.841 5.873 2.881 5.887 2.881 5.939 L 2.881 6.223 L 2.869 6.25 C 2.869 6.25 1.801 6.223 1.387 6.223 C 1.013 6.223 0.013 6.25 0.013 6.25 L 0 6.223 L 0 5.939 C 0 5.885 0.026 5.872 0.08 5.859 L 0.361 5.818 C 0.774 5.764 0.908 5.643 0.908 5.388 L 0.906 0.862 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-1b2r73z`,
                                          layoutDependency: x,
                                          layoutId: `FWCnRDglT`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.055 2.937" overflow="visible"><path d="M 0.001 2.815 C 0.267 2.924 0.602 2.937 0.868 2.937 C 1.67 2.937 2.055 2.451 2.055 1.415 C 2.055 0.257 1.534 0 0.801 0 C 0.16 0 0 0.122 0 0.472 L 0 2.815 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(S, {
                                      className: `framer-16ye7o`,
                                      layoutDependency: x,
                                      layoutId: `v00e5d3zC`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.153 6.253" overflow="visible"><path d="M 1.335 6.225 C 0.934 6.225 0.014 6.253 0.014 6.253 L 0 6.225 L 0 5.928 C 0 5.902 0.014 5.862 0.08 5.862 L 0.388 5.834 C 0.802 5.793 0.922 5.524 0.922 5.255 L 0.922 0.81 C 0.922 0.499 0.762 0.446 0.388 0.419 L 0.08 0.391 C 0 0.378 0 0.351 0 0.337 L 0 0.027 L 0.014 0 C 0.014 0 1.054 0.027 1.455 0.027 L 3.417 0.027 C 3.817 0.027 4.765 0 4.765 0 L 4.793 0.027 C 4.806 0.606 4.899 1.132 4.994 1.644 L 4.661 1.698 C 4.515 1.199 4.262 0.486 3.408 0.486 L 2.341 0.486 C 2.087 0.486 1.953 0.58 1.953 0.808 L 1.953 2.762 L 2.954 2.762 C 3.328 2.762 3.421 2.601 3.475 2.331 L 3.554 2.048 C 3.554 2.007 3.581 1.981 3.634 1.981 L 3.86 1.981 C 3.888 1.981 3.888 1.995 3.888 2.021 C 3.86 2.317 3.808 2.696 3.808 3.019 C 3.808 3.342 3.862 3.639 3.888 3.949 L 3.86 3.976 L 3.634 3.976 C 3.568 3.976 3.54 3.949 3.54 3.909 L 3.473 3.613 C 3.419 3.343 3.3 3.195 2.951 3.195 L 1.952 3.195 L 1.952 5.256 C 1.952 5.511 2.097 5.767 2.339 5.767 L 3.607 5.767 C 4.287 5.767 4.662 5.336 4.821 4.634 L 5.153 4.675 L 4.886 6.224 L 4.859 6.251 C 4.859 6.251 4.072 6.224 3.672 6.224 L 1.337 6.227 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.153 6.253" overflow="visible"><path d="M 1.335 6.225 C 0.934 6.225 0.014 6.253 0.014 6.253 L 0 6.225 L 0 5.928 C 0 5.902 0.014 5.862 0.08 5.862 L 0.388 5.834 C 0.802 5.793 0.922 5.524 0.922 5.255 L 0.922 0.81 C 0.922 0.499 0.762 0.446 0.388 0.419 L 0.08 0.391 C 0 0.378 0 0.351 0 0.337 L 0 0.027 L 0.014 0 C 0.014 0 1.054 0.027 1.455 0.027 L 3.417 0.027 C 3.817 0.027 4.765 0 4.765 0 L 4.793 0.027 C 4.806 0.606 4.899 1.132 4.994 1.644 L 4.661 1.698 C 4.515 1.199 4.262 0.486 3.408 0.486 L 2.341 0.486 C 2.087 0.486 1.953 0.58 1.953 0.808 L 1.953 2.762 L 2.954 2.762 C 3.328 2.762 3.421 2.601 3.475 2.331 L 3.554 2.048 C 3.554 2.007 3.581 1.981 3.634 1.981 L 3.86 1.981 C 3.888 1.981 3.888 1.995 3.888 2.021 C 3.86 2.317 3.808 2.696 3.808 3.019 C 3.808 3.342 3.862 3.639 3.888 3.949 L 3.86 3.976 L 3.634 3.976 C 3.568 3.976 3.54 3.949 3.54 3.909 L 3.473 3.613 C 3.419 3.343 3.3 3.195 2.951 3.195 L 1.952 3.195 L 1.952 5.256 C 1.952 5.511 2.097 5.767 2.339 5.767 L 3.607 5.767 C 4.287 5.767 4.662 5.336 4.821 4.634 L 5.153 4.675 L 4.886 6.224 L 4.859 6.251 C 4.859 6.251 4.072 6.224 3.672 6.224 L 1.337 6.227 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    p(S, {
                                      className: `framer-3cwhpt`,
                                      layoutDependency: x,
                                      layoutId: `ngtzkEFUF`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.512 6.25" overflow="visible"><path d="M 0.079 5.862 L 0.386 5.834 C 0.787 5.793 0.92 5.673 0.92 5.255 L 0.92 0.81 C 0.92 0.458 0.826 0.458 0.386 0.419 L 0.094 0.391 C 0.04 0.391 0 0.364 0 0.323 L 0 0.027 L 0.013 0 C 0.013 0 1.188 0.027 1.429 0.027 C 1.681 0.027 2.843 0 3.19 0 C 5.418 0 6.512 1.401 6.512 3.193 C 6.512 5.551 4.858 6.25 3.377 6.25 C 2.31 6.25 1.843 6.223 1.429 6.223 C 1.016 6.223 0.014 6.25 0.014 6.25 L 0.001 6.223 L 0.001 5.939 C -0.001 5.901 0.026 5.86 0.079 5.86 Z M 3.055 5.862 C 4.523 5.862 5.35 5.31 5.35 3.423 C 5.35 2.022 5.043 0.392 2.801 0.392 C 2.28 0.392 1.947 0.472 1.947 0.81 L 1.947 5.255 C 1.947 5.631 2.04 5.862 3.054 5.862 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.512 6.25" overflow="visible"><path d="M 0.079 5.862 L 0.386 5.834 C 0.787 5.793 0.92 5.673 0.92 5.255 L 0.92 0.81 C 0.92 0.458 0.826 0.458 0.386 0.419 L 0.094 0.391 C 0.04 0.391 0 0.364 0 0.323 L 0 0.027 L 0.013 0 C 0.013 0 1.188 0.027 1.429 0.027 C 1.681 0.027 2.843 0 3.19 0 C 5.418 0 6.512 1.401 6.512 3.193 C 6.512 5.551 4.858 6.25 3.377 6.25 C 2.31 6.25 1.843 6.223 1.429 6.223 C 1.016 6.223 0.014 6.25 0.014 6.25 L 0.001 6.223 L 0.001 5.939 C -0.001 5.901 0.026 5.86 0.079 5.86 Z M 3.055 5.862 C 4.523 5.862 5.35 5.31 5.35 3.423 C 5.35 2.022 5.043 0.392 2.801 0.392 C 2.28 0.392 1.947 0.472 1.947 0.81 L 1.947 5.255 C 1.947 5.631 2.04 5.862 3.054 5.862 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-11op1od`,
                                          layoutDependency: x,
                                          layoutId: `e1N3sdsdI`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.512 6.25" overflow="visible"><path d="M 0.079 5.862 L 0.386 5.834 C 0.787 5.793 0.92 5.673 0.92 5.255 L 0.92 0.81 C 0.92 0.458 0.826 0.458 0.386 0.419 L 0.094 0.391 C 0.04 0.391 0 0.364 0 0.323 L 0 0.027 L 0.013 0 C 0.013 0 1.188 0.027 1.429 0.027 C 1.681 0.027 2.843 0 3.19 0 C 5.418 0 6.512 1.401 6.512 3.193 C 6.512 5.551 4.858 6.25 3.377 6.25 C 2.31 6.25 1.843 6.223 1.429 6.223 C 1.016 6.223 0.014 6.25 0.014 6.25 L 0.001 6.223 L 0.001 5.939 C -0.001 5.901 0.026 5.86 0.079 5.86 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-ib1j2a`,
                                          layoutDependency: x,
                                          layoutId: `CDYUzUzFn`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.404 5.47" overflow="visible"><path d="M 1.108 5.47 C 2.576 5.47 3.404 4.919 3.404 3.031 C 3.404 1.631 3.097 0 0.854 0 C 0.333 0 0 0.081 0 0.418 L 0 4.864 C 0 5.239 0.093 5.47 1.108 5.47 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(S, {
                                      className: `framer-5z0zpd`,
                                      layoutDependency: x,
                                      layoutId: `yXIn5m81L`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.882 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.095 5.794 2.521 5.834 L 2.802 5.862 C 2.842 5.862 2.882 5.888 2.882 5.942 L 2.882 6.225 L 2.869 6.253 C 2.869 6.253 1.854 6.225 1.442 6.225 C 1.068 6.225 0.027 6.253 0.027 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.361 5.834 C 0.801 5.793 0.934 5.578 0.934 5.323 L 0.934 0.837 C 0.934 0.542 0.773 0.459 0.361 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.067 0.027 1.48 0.027 C 1.84 0.027 2.868 0 2.868 0 L 2.88 0.027 L 2.88 0.323 C 2.88 0.364 2.852 0.391 2.8 0.391 L 2.52 0.418 C 2.105 0.458 1.959 0.567 1.959 0.837 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.882 6.253" overflow="visible"><path d="M 1.961 5.323 C 1.961 5.619 2.095 5.794 2.521 5.834 L 2.802 5.862 C 2.842 5.862 2.882 5.888 2.882 5.942 L 2.882 6.225 L 2.869 6.253 C 2.869 6.253 1.854 6.225 1.442 6.225 C 1.068 6.225 0.027 6.253 0.027 6.253 L 0 6.225 L 0 5.942 C 0 5.888 0.04 5.862 0.093 5.862 L 0.361 5.834 C 0.801 5.793 0.934 5.578 0.934 5.323 L 0.934 0.837 C 0.934 0.542 0.773 0.459 0.361 0.419 L 0.093 0.391 C 0.04 0.391 0 0.378 0 0.337 L 0 0.027 L 0.013 0 C 0.013 0 1.067 0.027 1.48 0.027 C 1.84 0.027 2.868 0 2.868 0 L 2.88 0.027 L 2.88 0.323 C 2.88 0.364 2.852 0.391 2.8 0.391 L 2.52 0.418 C 2.105 0.458 1.959 0.567 1.959 0.837 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                    }),
                                    p(S, {
                                      className: `framer-1l5p05d`,
                                      layoutDependency: x,
                                      layoutId: `XpLWgKZW5`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.181 8.893" overflow="visible"><path d="M 2.536 8.475 L 2.923 8.502 C 2.977 8.502 3.03 8.543 3.03 8.61 L 3.03 8.866 L 3.003 8.893 C 3.003 8.893 1.549 8.866 1.229 8.866 C 0.881 8.866 0.027 8.893 0.027 8.893 L 0 8.866 L 0 8.61 C 0 8.543 0.04 8.502 0.107 8.502 C 0.695 8.461 1.028 8.354 1.401 7.492 L 4.363 0.486 C 4.509 0.136 4.617 0 4.818 0 C 5.004 0 5.072 0.135 5.177 0.405 L 7.912 7.707 C 8.1 8.232 8.367 8.434 8.901 8.488 L 9.047 8.501 C 9.114 8.501 9.181 8.541 9.181 8.61 L 9.181 8.865 L 9.14 8.892 C 9.14 8.892 8.113 8.865 7.592 8.865 C 7.125 8.865 5.817 8.892 5.817 8.892 L 5.804 8.865 L 5.804 8.61 C 5.804 8.541 5.831 8.501 5.899 8.501 L 6.273 8.474 C 6.78 8.434 6.967 8.271 6.834 7.895 L 6.02 5.617 L 3.243 5.617 C 2.923 5.617 2.843 5.671 2.777 5.845 L 2.003 7.799 C 1.869 8.138 2.043 8.435 2.537 8.476 Z M 5.805 5.052 L 4.511 1.456 L 4.485 1.456 L 3.15 4.878 C 3.097 5.014 3.19 5.053 3.484 5.053 L 5.806 5.053 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          "adguRWWdy-hover": {
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.181 8.893" overflow="visible"><path d="M 2.536 8.475 L 2.923 8.502 C 2.977 8.502 3.03 8.543 3.03 8.61 L 3.03 8.866 L 3.003 8.893 C 3.003 8.893 1.549 8.866 1.229 8.866 C 0.881 8.866 0.027 8.893 0.027 8.893 L 0 8.866 L 0 8.61 C 0 8.543 0.04 8.502 0.107 8.502 C 0.695 8.461 1.028 8.354 1.401 7.492 L 4.363 0.486 C 4.509 0.136 4.617 0 4.818 0 C 5.004 0 5.072 0.135 5.177 0.405 L 7.912 7.707 C 8.1 8.232 8.367 8.434 8.901 8.488 L 9.047 8.501 C 9.114 8.501 9.181 8.541 9.181 8.61 L 9.181 8.865 L 9.14 8.892 C 9.14 8.892 8.113 8.865 7.592 8.865 C 7.125 8.865 5.817 8.892 5.817 8.892 L 5.804 8.865 L 5.804 8.61 C 5.804 8.541 5.831 8.501 5.899 8.501 L 6.273 8.474 C 6.78 8.434 6.967 8.271 6.834 7.895 L 6.02 5.617 L 3.243 5.617 C 2.923 5.617 2.843 5.671 2.777 5.845 L 2.003 7.799 C 1.869 8.138 2.043 8.435 2.537 8.476 Z M 5.805 5.052 L 4.511 1.456 L 4.485 1.456 L 3.15 4.878 C 3.097 5.014 3.19 5.053 3.484 5.053 L 5.806 5.053 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                          },
                                        },
                                        y,
                                        b
                                      ),
                                      children: [
                                        l(S, {
                                          className: `framer-gf2d17`,
                                          layoutDependency: x,
                                          layoutId: `kj8De6Qpi`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.181 8.893" overflow="visible"><path d="M 2.536 8.475 L 2.923 8.502 C 2.977 8.502 3.03 8.543 3.03 8.61 L 3.03 8.866 L 3.003 8.893 C 3.003 8.893 1.549 8.866 1.229 8.866 C 0.881 8.866 0.027 8.893 0.027 8.893 L 0 8.866 L 0 8.61 C 0 8.543 0.04 8.502 0.107 8.502 C 0.695 8.461 1.028 8.354 1.401 7.492 L 4.363 0.486 C 4.509 0.136 4.617 0 4.818 0 C 5.004 0 5.072 0.135 5.177 0.405 L 7.912 7.707 C 8.1 8.232 8.367 8.434 8.901 8.488 L 9.047 8.501 C 9.114 8.501 9.181 8.541 9.181 8.61 L 9.181 8.865 L 9.14 8.892 C 9.14 8.892 8.113 8.865 7.592 8.865 C 7.125 8.865 5.817 8.892 5.817 8.892 L 5.804 8.865 L 5.804 8.61 C 5.804 8.541 5.831 8.501 5.899 8.501 L 6.273 8.474 C 6.78 8.434 6.967 8.271 6.834 7.895 L 6.02 5.617 L 3.243 5.617 C 2.923 5.617 2.843 5.671 2.777 5.845 L 2.003 7.799 C 1.869 8.138 2.043 8.435 2.537 8.476 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        l(S, {
                                          className: `framer-176nq9n`,
                                          layoutDependency: x,
                                          layoutId: `Y8yHF9_O_`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.67 3.597" overflow="visible"><path d="M 2.669 3.596 L 1.375 0 L 1.349 0 L 0.014 3.422 C -0.039 3.558 0.054 3.597 0.348 3.597 L 2.67 3.597 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      et() &&
                        l(S, {
                          className: `framer-c8spm7`,
                          "data-framer-name": `X (Twitter) logo`,
                          layoutDependency: x,
                          layoutId: `ea2hSCqPl`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.96 29.649" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "y3qmKAfcU-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 38" overflow="visible"><g><path d="M 22.014 16.088 L 35.799 0 L 32.533 0 L 20.573 13.964 L 11.015 0 L 0 0 L 14.441 21.124 L 0 38 L 3.266 38 L 15.898 23.247 L 25.985 38 L 37 38 Z M 17.547 21.317 L 16.09 19.209 L 4.435 2.461 L 9.446 2.461 L 18.844 15.975 L 20.301 18.083 L 32.517 35.635 L 27.506 35.635 L 17.531 21.301 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                              },
                              y3qmKAfcU: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.96 29.649" overflow="visible"><g><path d="M 17.231 12.552 L 28.021 0 L 25.464 0 L 16.103 10.895 L 8.622 0 L 0 0 L 11.303 16.481 L 0 29.649 L 2.556 29.649 L 12.444 18.138 L 20.339 29.649 L 28.96 29.649 Z M 13.735 16.632 L 12.594 14.988 L 3.471 1.921 L 7.394 1.921 L 14.75 12.465 L 15.89 14.109 L 25.452 27.804 L 21.529 27.804 L 13.722 16.619 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            tt() &&
                            p(S, {
                              className: `framer-7kp9ih`,
                              layoutDependency: x,
                              layoutId: `h4ZRHq1zb`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.96 29.649" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "y3qmKAfcU-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 38" overflow="visible"><path d="M 22.014 16.088 L 35.799 0 L 32.533 0 L 20.573 13.964 L 11.015 0 L 0 0 L 14.441 21.124 L 0 38 L 3.266 38 L 15.898 23.247 L 25.985 38 L 37 38 Z M 17.547 21.317 L 16.09 19.209 L 4.435 2.461 L 9.446 2.461 L 18.844 15.975 L 20.301 18.083 L 32.517 35.635 L 27.506 35.635 L 17.531 21.301 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                  },
                                  y3qmKAfcU: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.96 29.649" overflow="visible"><path d="M 17.231 12.552 L 28.021 0 L 25.464 0 L 16.103 10.895 L 8.622 0 L 0 0 L 11.303 16.481 L 0 29.649 L 2.556 29.649 L 12.444 18.138 L 20.339 29.649 L 28.96 29.649 Z M 13.735 16.632 L 12.594 14.988 L 3.471 1.921 L 7.394 1.921 L 14.75 12.465 L 15.89 14.109 L 25.452 27.804 L 21.529 27.804 L 13.722 16.619 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: [
                                l(S, {
                                  className: `framer-1vxqyoe`,
                                  layoutDependency: x,
                                  layoutId: `JO36iKDt5`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.96 29.649" overflow="visible"><path d="M 17.231 12.552 L 28.021 0 L 25.464 0 L 16.103 10.895 L 8.622 0 L 0 0 L 11.303 16.481 L 0 29.649 L 2.556 29.649 L 12.444 18.138 L 20.339 29.649 L 28.96 29.649 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "y3qmKAfcU-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 38" overflow="visible"><path d="M 22.014 16.088 L 35.799 0 L 32.533 0 L 20.573 13.964 L 11.015 0 L 0 0 L 14.441 21.124 L 0 38 L 3.266 38 L 15.898 23.247 L 25.985 38 L 37 38 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                                l(S, {
                                  className: `framer-g9mrqu`,
                                  layoutDependency: x,
                                  layoutId: `zRou6L_kN`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.98 25.883" overflow="visible"><path d="M 10.263 14.711 L 9.123 13.067 L 0 0 L 3.922 0 L 11.278 10.544 L 12.419 12.188 L 21.98 25.883 L 18.058 25.883 L 10.251 14.699 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      "y3qmKAfcU-hover": {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.082 33.174" overflow="visible"><path d="M 13.113 18.855 L 11.656 16.748 L 0 0 L 5.011 0 L 14.409 13.514 L 15.866 15.622 L 28.082 33.174 L 23.071 33.174 L 13.096 18.839 Z" fill="transparent"></path></svg>`,
                                      },
                                    },
                                    y,
                                    b
                                  ),
                                }),
                              ],
                            }),
                        }),
                      nt() &&
                        l(S, {
                          className: `framer-ec3kmn`,
                          "data-framer-name": `Yahoo logo`,
                          layoutDependency: x,
                          layoutId: `zwQyUIVTK`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 34" overflow="visible"><g></g></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "hcfCc_5hw-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 44" overflow="visible"><g><g><g><path d="M 0 10.711 L 9.528 10.711 L 15.077 24.773 L 20.697 10.711 L 29.975 10.711 L 16.005 44 L 6.668 44 L 10.493 35.179 Z" fill="rgb(95, 1, 209)"></path><path d="M 32.148 24.048 C 35.336 24.048 37.92 26.608 37.92 29.766 C 37.92 32.924 35.336 35.485 32.148 35.485 C 28.96 35.485 26.375 32.924 26.375 29.766 C 26.375 26.608 28.96 24.048 32.148 24.048 Z" fill="rgb(95, 1, 209)"></path><path d="M 39.817 21.948 L 29.426 21.948 L 38.648 0 L 49 0 Z" fill="rgb(95, 1, 209)"></path></g></g></g></svg>`,
                              },
                              hcfCc_5hw: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 34" overflow="visible"><g><g><g><path d="M 0 8.277 L 7.389 8.277 L 11.692 19.143 L 16.051 8.277 L 23.246 8.277 L 12.412 34 L 5.171 34 L 8.137 27.184 Z" fill="rgb(249,249,249)"></path><path d="M 24.931 18.583 C 27.403 18.583 29.407 20.561 29.407 23.001 C 29.407 25.442 27.403 27.42 24.931 27.42 C 22.459 27.42 20.454 25.442 20.454 23.001 C 20.454 20.561 22.459 18.583 24.931 18.583 Z" fill="rgb(249,249,249)"></path><path d="M 30.878 16.96 L 22.82 16.96 L 29.972 0 L 38 0 Z" fill="rgb(249,249,249)"></path></g></g></g></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children:
                            rt() &&
                            l(S, {
                              className: `framer-1i6yw24`,
                              layoutDependency: x,
                              layoutId: `pdtmP1_zt`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 34" overflow="visible"></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "hcfCc_5hw-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 44" overflow="visible"><g><g><path d="M 0 10.711 L 9.528 10.711 L 15.077 24.773 L 20.697 10.711 L 29.975 10.711 L 16.005 44 L 6.668 44 L 10.493 35.179 Z" fill="rgb(95, 1, 209)"></path><path d="M 32.148 24.048 C 35.336 24.048 37.92 26.608 37.92 29.766 C 37.92 32.924 35.336 35.485 32.148 35.485 C 28.96 35.485 26.375 32.924 26.375 29.766 C 26.375 26.608 28.96 24.048 32.148 24.048 Z" fill="rgb(95, 1, 209)"></path><path d="M 39.817 21.948 L 29.426 21.948 L 38.648 0 L 49 0 Z" fill="rgb(95, 1, 209)"></path></g></g></svg>`,
                                  },
                                  hcfCc_5hw: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 34" overflow="visible"><g><g><path d="M 0 8.277 L 7.389 8.277 L 11.692 19.143 L 16.051 8.277 L 23.246 8.277 L 12.412 34 L 5.171 34 L 8.137 27.184 Z" fill="rgb(249,249,249)"></path><path d="M 24.931 18.583 C 27.403 18.583 29.407 20.561 29.407 23.001 C 29.407 25.442 27.403 27.42 24.931 27.42 C 22.459 27.42 20.454 25.442 20.454 23.001 C 20.454 20.561 22.459 18.583 24.931 18.583 Z" fill="rgb(249,249,249)"></path><path d="M 30.878 16.96 L 22.82 16.96 L 29.972 0 L 38 0 Z" fill="rgb(249,249,249)"></path></g></g></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                              children: p(S, {
                                className: `framer-1x9uu9`,
                                layoutDependency: x,
                                layoutId: `FHWVml4_J`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 34" overflow="visible"><g><path d="M 0 8.277 L 7.389 8.277 L 11.692 19.143 L 16.051 8.277 L 23.246 8.277 L 12.412 34 L 5.171 34 L 8.137 27.184 Z" fill="rgb(249,249,249)"></path><path d="M 24.931 18.583 C 27.403 18.583 29.407 20.561 29.407 23.001 C 29.407 25.442 27.403 27.42 24.931 27.42 C 22.459 27.42 20.454 25.442 20.454 23.001 C 20.454 20.561 22.459 18.583 24.931 18.583 Z" fill="rgb(249,249,249)"></path><path d="M 30.878 16.96 L 22.82 16.96 L 29.972 0 L 38 0 Z" fill="rgb(249,249,249)"></path></g></svg>`,
                                withExternalLayout: !0,
                                ...Z(
                                  {
                                    "hcfCc_5hw-hover": {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 44" overflow="visible"><g><path d="M 0 10.711 L 9.528 10.711 L 15.077 24.773 L 20.697 10.711 L 29.975 10.711 L 16.005 44 L 6.668 44 L 10.493 35.179 Z" fill="rgb(95, 1, 209)"></path><path d="M 32.148 24.048 C 35.336 24.048 37.92 26.608 37.92 29.766 C 37.92 32.924 35.336 35.485 32.148 35.485 C 28.96 35.485 26.375 32.924 26.375 29.766 C 26.375 26.608 28.96 24.048 32.148 24.048 Z" fill="rgb(95, 1, 209)"></path><path d="M 39.817 21.948 L 29.426 21.948 L 38.648 0 L 49 0 Z" fill="rgb(95, 1, 209)"></path></g></svg>`,
                                    },
                                  },
                                  y,
                                  b
                                ),
                                children: [
                                  l(S, {
                                    className: `framer-9adu9e`,
                                    layoutDependency: x,
                                    layoutId: `wMhaPsTMg`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.246 25.723" overflow="visible"><path d="M 0 0 L 7.389 0 L 11.692 10.866 L 16.051 0 L 23.246 0 L 12.412 25.723 L 5.171 25.723 L 8.137 18.907 Z" fill="rgb(249,249,249)"></path></svg>`,
                                    withExternalLayout: !0,
                                    ...Z(
                                      {
                                        "hcfCc_5hw-hover": {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.975 33.289" overflow="visible"><path d="M 0 0 L 9.528 0 L 15.077 14.062 L 20.697 0 L 29.975 0 L 16.005 33.289 L 6.668 33.289 L 10.493 24.468 Z" fill="rgb(95, 1, 209)"></path></svg>`,
                                        },
                                      },
                                      y,
                                      b
                                    ),
                                  }),
                                  l(S, {
                                    className: `framer-1i4y9tu`,
                                    layoutDependency: x,
                                    layoutId: `tnRLTXAsT`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.953 8.837" overflow="visible"><path d="M 4.477 0 C 6.949 0 8.953 1.978 8.953 4.419 C 8.953 6.859 6.949 8.837 4.477 8.837 C 2.004 8.837 0 6.859 0 4.419 C 0 1.978 2.004 0 4.477 0 Z" fill="rgb(249,249,249)"></path></svg>`,
                                    withExternalLayout: !0,
                                    ...Z(
                                      {
                                        "hcfCc_5hw-hover": {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.545 11.436" overflow="visible"><path d="M 5.772 0 C 8.96 0 11.545 2.56 11.545 5.718 C 11.545 8.876 8.96 11.436 5.772 11.436 C 2.584 11.436 0 8.876 0 5.718 C 0 2.56 2.584 0 5.772 0 Z" fill="rgb(95, 1, 209)"></path></svg>`,
                                        },
                                      },
                                      y,
                                      b
                                    ),
                                  }),
                                  l(S, {
                                    className: `framer-fvp6qj`,
                                    layoutDependency: x,
                                    layoutId: `RyQOYgWVD`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.18 16.96" overflow="visible"><path d="M 8.058 16.96 L 0 16.96 L 7.152 0 L 15.18 0 Z" fill="rgb(249,249,249)"></path></svg>`,
                                    withExternalLayout: !0,
                                    ...Z(
                                      {
                                        "hcfCc_5hw-hover": {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.574 21.948" overflow="visible"><path d="M 10.391 21.948 L 0 21.948 L 9.222 0 L 19.574 0 Z" fill="rgb(95, 1, 209)"></path></svg>`,
                                        },
                                      },
                                      y,
                                      b
                                    ),
                                  }),
                                ],
                              }),
                            }),
                        }),
                      it() &&
                        p(S, {
                          className: `framer-12je3p9`,
                          layoutDependency: x,
                          layoutId: `QNEMROZT7`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 36" overflow="visible"></svg>`,
                          withExternalLayout: !0,
                          ...Z(
                            {
                              "ACth5Oq8j-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 42" overflow="visible"><g><defs><linearGradient id="idsi_2_CJZ2sQNEMROZT7_1g130515553" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547"><stop offset="0" stop-color="rgb(248, 2, 1)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(176, 2, 1)" stop-opacity="1"></stop></linearGradient></defs><path d="M 61 13.166 C 61 5.895 55.008 0 47.615 0 L 13.385 0 C 5.992 0 0 5.895 0 13.166 L 0 28.834 C 0 36.106 5.992 42 13.385 42 L 47.614 42 C 55.007 42 60.999 36.106 60.999 28.834 L 60.999 13.166 Z M 40.87 22.174 L 25.521 29.644 C 24.919 29.964 22.875 29.535 22.875 28.862 L 22.875 13.53 C 22.875 12.849 24.937 12.421 25.539 12.758 L 40.231 20.621 C 40.847 20.966 41.494 21.843 40.87 22.175 Z" fill="url(#idsi_2_CJZ2sQNEMROZT7_1g130515553)"></path></g></svg>`,
                              },
                              ACth5Oq8j: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 36" overflow="visible"><path d="M 52 11.285 C 52 5.053 46.892 0 40.589 0 L 11.411 0 C 5.108 0 0 5.053 0 11.285 L 0 24.715 C 0 30.948 5.108 36 11.411 36 L 40.589 36 C 46.891 36 51.999 30.948 51.999 24.715 L 51.999 11.285 Z M 34.84 19.007 L 21.756 25.409 C 21.242 25.683 19.5 25.316 19.5 24.739 L 19.5 11.597 C 19.5 11.013 21.257 10.646 21.771 10.935 L 34.295 17.675 C 34.82 17.971 35.372 18.723 34.84 19.007 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                              },
                            },
                            y,
                            b
                          ),
                          children: [
                            l(S, {
                              className: `framer-1nexyw2`,
                              layoutDependency: x,
                              layoutId: `I8HCkDEpu`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 36" overflow="visible"><path d="M 52 11.285 C 52 5.053 46.892 0 40.589 0 L 11.411 0 C 5.108 0 0 5.053 0 11.285 L 0 24.715 C 0 30.948 5.108 36 11.411 36 L 40.589 36 C 46.891 36 51.999 30.948 51.999 24.715 L 51.999 11.285 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "ACth5Oq8j-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 42" overflow="visible"><path d="M 61 13.166 C 61 5.895 55.008 0 47.615 0 L 13.385 0 C 5.992 0 0 5.895 0 13.166 L 0 28.834 C 0 36.106 5.992 42 13.385 42 L 47.614 42 C 55.007 42 60.999 36.106 60.999 28.834 L 60.999 13.166 Z" fill="transparent"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                            }),
                            l(S, {
                              className: `framer-113gzrn`,
                              layoutDependency: x,
                              layoutId: `lCmmFZdqB`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.556 14.667" overflow="visible"><path d="M 15.34 8.172 L 2.255 14.575 C 1.742 14.849 0 14.482 0 13.905 L 0 0.763 C 0 0.179 1.757 -0.188 2.27 0.101 L 14.795 6.841 C 15.32 7.136 15.872 7.888 15.34 8.173 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  "ACth5Oq8j-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.249 17.112" overflow="visible"><path d="M 17.995 9.534 L 2.646 17.004 C 2.044 17.324 0 16.895 0 16.222 L 0 0.89 C 0 0.209 2.061 -0.22 2.663 0.118 L 17.356 7.981 C 17.972 8.326 18.619 9.203 17.995 9.535 Z" fill="transparent"></path></svg>`,
                                  },
                                },
                                y,
                                b
                              ),
                            }),
                          ],
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
          `.framer-YWrgU.framer-4zjjuo, .framer-YWrgU .framer-4zjjuo { display: block; }`,
          `.framer-YWrgU.framer-1n2tbda { cursor: pointer; height: 84px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 84px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-YWrgU .framer-e0ggmy { height: 34px; left: 26px; position: absolute; top: 25px; width: 31px; }`,
          `.framer-YWrgU .framer-vzw9ty, .framer-YWrgU .framer-fk6xos { height: 34px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-YWrgU .framer-zamhhl { height: 12px; left: 12px; position: absolute; top: 15px; width: 7px; }`,
          `.framer-YWrgU .framer-14d42bn { height: 30px; left: 2px; position: absolute; top: 2px; width: 27px; }`,
          `.framer-YWrgU .framer-1ifzgjr { height: 35px; left: 27px; position: absolute; top: 24px; width: 31px; }`,
          `.framer-YWrgU .framer-vo11gs { height: 35px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-YWrgU .framer-1929d3f { height: 6px; left: 0px; position: absolute; top: 29px; width: 29px; }`,
          `.framer-YWrgU .framer-ssp7f0 { height: 6px; left: 25px; position: absolute; top: 28px; width: 6px; }`,
          `.framer-YWrgU .framer-9w7xfa { height: 28px; left: 3px; position: absolute; top: 0px; width: 24px; }`,
          `.framer-YWrgU .framer-kv9gtm { height: 9px; left: 7px; position: absolute; top: 15px; width: 8px; }`,
          `.framer-YWrgU .framer-1hqcdtr { height: 28px; left: 0px; position: absolute; top: 0px; width: 24px; }`,
          `.framer-YWrgU .framer-ly8epq { height: 24px; left: 23px; position: absolute; top: 31px; width: 38px; }`,
          `.framer-YWrgU .framer-1r38mgq { height: 24px; left: 0px; position: absolute; top: 0px; width: 38px; }`,
          `.framer-YWrgU .framer-xi9um3 { height: 24px; left: 0px; position: absolute; top: 0px; width: 19px; }`,
          `.framer-YWrgU .framer-i6qoox { height: 6px; left: 5px; position: absolute; top: 4px; width: 9px; }`,
          `.framer-YWrgU .framer-qqvtrk { height: 7px; left: 5px; position: absolute; top: 14px; width: 10px; }`,
          `.framer-YWrgU .framer-v1p5h8 { height: 18px; left: 20px; position: absolute; top: 6px; width: 18px; }`,
          `.framer-YWrgU .framer-k4pgrn { height: 5px; left: 25px; position: absolute; top: 10px; width: 9px; }`,
          `.framer-YWrgU .framer-1liv8jk { height: 3px; left: 24px; position: absolute; top: 1px; width: 12px; }`,
          `.framer-YWrgU .framer-5qmhtg { height: 34px; left: 26px; position: absolute; top: 25px; width: 33px; }`,
          `.framer-YWrgU .framer-1k6leum, .framer-YWrgU .framer-1jofjhw { height: 34px; left: 0px; position: absolute; top: 0px; width: 33px; }`,
          `.framer-YWrgU .framer-1n7a7tz { height: 8px; left: 13px; position: absolute; top: 5px; width: 16px; }`,
          `.framer-YWrgU .framer-109a1y7 { height: 9px; left: 13px; position: absolute; top: 13px; width: 7px; }`,
          `.framer-YWrgU .framer-1ckp58o { height: 16px; left: 9px; position: absolute; top: 2px; width: 11px; }`,
          `.framer-YWrgU .framer-4u7lod { height: 16px; left: 2px; position: absolute; top: 9px; width: 13px; }`,
          `.framer-YWrgU .framer-1ncxcse { height: 8px; left: 4px; position: absolute; top: 21px; width: 16px; }`,
          `.framer-YWrgU .framer-kp44k2 { height: 16px; left: 14px; position: absolute; top: 16px; width: 11px; }`,
          `.framer-YWrgU .framer-1auxouc { height: 16px; left: 18px; position: absolute; top: 10px; width: 13px; }`,
          `.framer-YWrgU .framer-orcd2u { height: 25px; left: 27px; position: absolute; top: 30px; width: 33px; }`,
          `.framer-YWrgU .framer-kqei60, .framer-YWrgU .framer-1izncoc { height: 25px; left: 0px; position: absolute; top: 0px; width: 33px; }`,
          `.framer-YWrgU .framer-16cp265 { height: 7px; left: 8px; position: absolute; top: 11px; width: 6px; }`,
          `.framer-YWrgU .framer-xbo38i { height: 7px; left: 19px; position: absolute; top: 11px; width: 6px; }`,
          `.framer-YWrgU .framer-123cacy { height: 34px; left: 26px; position: absolute; top: 25px; width: 34px; }`,
          `.framer-YWrgU .framer-3fjmxz, .framer-YWrgU .framer-1byjmua, .framer-YWrgU .framer-hq36hr, .framer-YWrgU .framer-1ryluz6, .framer-YWrgU .framer-14aw51n { height: 34px; left: 0px; position: absolute; top: 0px; width: 34px; }`,
          `.framer-YWrgU .framer-hpwu3z { height: 9px; left: 20px; position: absolute; top: 8px; width: 11px; }`,
          `.framer-YWrgU .framer-1whp4m4 { height: 9px; left: 14px; position: absolute; top: 3px; width: 13px; }`,
          `.framer-YWrgU .framer-6jjzgy { height: 10px; left: 3px; position: absolute; top: 4px; width: 13px; }`,
          `.framer-YWrgU .framer-vfy2de { height: 12px; left: 3px; position: absolute; top: 15px; width: 16px; }`,
          `.framer-YWrgU .framer-ugc100 { height: 12px; left: 8px; position: absolute; top: 20px; width: 15px; }`,
          `.framer-YWrgU .framer-2r1z96 { height: 11px; left: 23px; position: absolute; top: 19px; width: 9px; }`,
          `.framer-YWrgU .framer-1m16bg5 { height: 29px; left: 24px; position: absolute; top: 27px; width: 35px; }`,
          `.framer-YWrgU .framer-1lgraso { height: 29px; left: 0px; position: absolute; top: 0px; width: 35px; }`,
          `.framer-YWrgU .framer-yz4o9v { height: 11px; left: 0px; position: absolute; top: 0px; width: 18px; }`,
          `.framer-YWrgU .framer-1wydyl2 { height: 22px; left: 0px; position: absolute; top: 0px; width: 35px; }`,
          `.framer-YWrgU .framer-1b2pn9c { height: 11px; left: 18px; position: absolute; top: 0px; width: 18px; }`,
          `.framer-YWrgU .framer-hypw4l { height: 11px; left: 0px; position: absolute; top: 11px; width: 18px; }`,
          `.framer-YWrgU .framer-1dllq1t { height: 18px; left: 9px; position: absolute; top: 11px; width: 26px; }`,
          `.framer-YWrgU .framer-1fv933c { height: 11px; left: 9px; position: absolute; top: 0px; width: 18px; }`,
          `.framer-YWrgU .framer-16acosd { height: 11px; left: 0px; position: absolute; top: 8px; width: 18px; }`,
          `.framer-YWrgU .framer-1667mrf { height: 40px; left: 32px; position: absolute; top: 18px; width: 21px; }`,
          `.framer-YWrgU .framer-1oofrr0 { height: 40px; left: 0px; position: absolute; top: 0px; width: 21px; }`,
          `.framer-YWrgU .framer-ggiqcg { height: 32px; left: 26px; position: absolute; top: 26px; width: 32px; }`,
          `.framer-YWrgU .framer-buke33 { height: 32px; left: 0px; position: absolute; top: 0px; width: 32px; }`,
          `.framer-YWrgU .framer-1c0m8hm { height: 13px; left: 2px; position: absolute; top: 20px; width: 25px; }`,
          `.framer-YWrgU .framer-m32coh { height: 13px; left: 2px; position: absolute; top: 0px; width: 25px; }`,
          `.framer-YWrgU .framer-y0oa1r { height: 15px; left: 0px; position: absolute; top: 9px; width: 7px; }`,
          `.framer-YWrgU .framer-f8gcg5 { height: 0px; left: 7px; position: absolute; top: 13px; width: 0px; }`,
          `.framer-YWrgU .framer-56y3gg { height: 0px; left: 0px; position: absolute; top: 0px; width: 0px; }`,
          `.framer-YWrgU .framer-hp68ym { height: 0px; left: 15px; position: absolute; top: -4px; width: 0px; }`,
          `.framer-YWrgU .framer-11v4whn { height: 15px; left: 16px; position: absolute; top: 13px; width: 16px; }`,
          `.framer-YWrgU .framer-1dmig4g { height: 39px; left: 22px; position: absolute; top: 22px; width: 39px; }`,
          `.framer-YWrgU .framer-4dkt85, .framer-YWrgU .framer-1v3dr3p, .framer-YWrgU .framer-3w1tw6 { height: 39px; left: 0px; position: absolute; top: 0px; width: 39px; }`,
          `.framer-YWrgU .framer-zn7epu { height: 22px; left: 10px; position: absolute; top: 7px; width: 22px; }`,
          `.framer-YWrgU .framer-17fscp7 { height: 5px; left: 18px; position: absolute; top: 0px; width: 5px; }`,
          `.framer-YWrgU .framer-3ak6zd { height: 19px; left: 0px; position: absolute; top: 3px; width: 19px; }`,
          `.framer-YWrgU .framer-1ht4ip1 { height: 13px; left: 4px; position: absolute; top: 7px; width: 13px; }`,
          `.framer-YWrgU .framer-g2ydbl { height: 32px; left: 4px; position: absolute; top: 4px; width: 32px; }`,
          `.framer-YWrgU .framer-1evzv6x { height: 31px; left: 27px; position: absolute; top: 25px; width: 31px; }`,
          `.framer-YWrgU .framer-5vm7og { height: 31px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-YWrgU .framer-1lf2g2a { height: 21px; left: 1px; position: absolute; top: 11px; width: 7px; }`,
          `.framer-YWrgU .framer-15qck83 { height: 8px; left: 0px; position: absolute; top: 0px; width: 8px; }`,
          `.framer-YWrgU .framer-1pecqol { height: 21px; left: 11px; position: absolute; top: 10px; width: 20px; }`,
          `.framer-YWrgU .framer-1qin8ry { height: 37px; left: 25px; position: absolute; top: 23px; width: 32px; }`,
          `.framer-YWrgU .framer-1tlgpvp { height: 37px; left: 0px; position: absolute; top: 0px; width: 32px; }`,
          `.framer-YWrgU .framer-1lb3g01 { height: 18px; left: 4px; position: absolute; top: 0px; width: 29px; }`,
          `.framer-YWrgU .framer-91mfaj { height: 11px; left: 7px; position: absolute; top: 4px; width: 11px; }`,
          `.framer-YWrgU .framer-6anwv2 { height: 8px; left: 21px; position: absolute; top: 6px; width: 8px; }`,
          `.framer-YWrgU .framer-1qdbrg2 { height: 18px; left: 0px; position: absolute; top: 19px; width: 32px; }`,
          `.framer-YWrgU .framer-cbq97p { height: 8px; left: 3px; position: absolute; top: 24px; width: 7px; }`,
          `.framer-YWrgU .framer-v18i6k { height: 12px; left: 13px; position: absolute; top: 23px; width: 16px; }`,
          `.framer-YWrgU .framer-17kwj4d { height: 40px; left: 26px; position: absolute; top: 24px; width: 31px; }`,
          `.framer-YWrgU .framer-1gzeygc { height: 40px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-YWrgU .framer-1qagncl { height: 35px; left: 21px; position: absolute; top: 25px; width: 41px; }`,
          `.framer-YWrgU .framer-jt18df, .framer-YWrgU .framer-1s5udvk { height: 35px; left: 0px; position: absolute; top: 0px; width: 41px; }`,
          `.framer-YWrgU .framer-yo38wo { height: 6px; left: 11px; position: absolute; top: 17px; width: 6px; }`,
          `.framer-YWrgU .framer-p3v5yl { height: 5px; left: 13px; position: absolute; top: 26px; width: 15px; }`,
          `.framer-YWrgU .framer-nkz9og { height: 6px; left: 24px; position: absolute; top: 17px; width: 6px; }`,
          `.framer-YWrgU .framer-1hq2mf5 { height: 34px; left: 24px; position: absolute; top: 25px; width: 36px; }`,
          `.framer-YWrgU .framer-awoti3, .framer-YWrgU .framer-cppdoz, .framer-YWrgU .framer-13qlb9t { height: 34px; left: 0px; position: absolute; top: 0px; width: 36px; }`,
          `.framer-YWrgU .framer-xg1xyy { height: 33px; left: 1px; position: absolute; top: 1px; width: 35px; }`,
          `.framer-YWrgU .framer-18wfctv { height: 31px; left: 2px; position: absolute; top: 2px; width: 33px; }`,
          `.framer-YWrgU .framer-zsixsk { height: 47px; left: 18px; position: absolute; top: 18px; width: 47px; }`,
          `.framer-YWrgU .framer-n5r22v, .framer-YWrgU .framer-1clkh6b { height: 47px; left: 0px; position: absolute; top: 0px; width: 47px; }`,
          `.framer-YWrgU .framer-147cias { height: 7px; left: 10px; position: absolute; top: 28px; width: 25px; }`,
          `.framer-YWrgU .framer-izcbu0 { height: 8px; left: 9px; position: absolute; top: 21px; width: 29px; }`,
          `.framer-YWrgU .framer-1mmgcst { height: 9px; left: 7px; position: absolute; top: 13px; width: 34px; }`,
          `.framer-YWrgU .framer-10ktlp0 { height: 54px; left: 15px; position: absolute; top: 15px; width: 54px; }`,
          `.framer-YWrgU .framer-89veya, .framer-YWrgU .framer-sflrqg { height: 54px; left: 0px; position: absolute; top: 0px; width: 54px; }`,
          `.framer-YWrgU .framer-3wjvr8 { height: 27px; left: 7px; position: absolute; top: 15px; width: 32px; }`,
          `.framer-YWrgU .framer-1ee250v { height: 35px; left: 27px; position: absolute; top: 25px; width: 30px; }`,
          `.framer-YWrgU .framer-1dr7cfv, .framer-YWrgU .framer-ykldqq { height: 35px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
          `.framer-YWrgU .framer-4jnio8 { height: 6px; left: 12px; position: absolute; top: 18px; width: 9px; }`,
          `.framer-YWrgU .framer-16efkoq { height: 40px; left: 25px; position: absolute; top: 22px; width: 35px; }`,
          `.framer-YWrgU .framer-1ocszv { height: 40px; left: 0px; position: absolute; top: 0px; width: 35px; }`,
          `.framer-YWrgU .framer-12aa2nr { height: 38px; left: 5px; position: absolute; top: 2px; width: 30px; }`,
          `.framer-YWrgU .framer-1qzs6n4 { height: 29px; left: 0px; position: absolute; top: 9px; width: 30px; }`,
          `.framer-YWrgU .framer-8dulu { height: 6px; left: 19px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-YWrgU .framer-a3vup7 { height: 16px; left: 1px; position: absolute; top: 14px; width: 9px; }`,
          `.framer-YWrgU .framer-1bhu72q { height: 37px; left: 2px; position: absolute; top: 2px; width: 31px; }`,
          `.framer-YWrgU .framer-1rpia06 { height: 36px; left: 0px; position: absolute; top: 0px; width: 33px; }`,
          `.framer-YWrgU .framer-1uytglo { height: 3px; left: 28px; position: absolute; top: 8px; width: 5px; }`,
          `.framer-YWrgU .framer-14nl3qv { height: 33px; left: 10px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-YWrgU .framer-v8xd24 { height: 22px; left: 0px; position: absolute; top: 14px; width: 14px; }`,
          `.framer-YWrgU .framer-dssgnt { height: 36px; left: 27px; position: absolute; top: 24px; width: 31px; }`,
          `.framer-YWrgU .framer-akrdhm, .framer-YWrgU .framer-p6lm2r, .framer-YWrgU .framer-qsektv { height: 36px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-YWrgU .framer-1jn23it { height: 24px; left: 8px; position: absolute; top: 3px; width: 21px; }`,
          `.framer-YWrgU .framer-4c73nm { height: 8px; left: 22px; position: absolute; top: 7px; width: 3px; }`,
          `.framer-YWrgU .framer-1en3eib { height: 8px; left: 15px; position: absolute; top: 7px; width: 3px; }`,
          `.framer-YWrgU .framer-1ctohsq { height: 35px; left: 21px; position: absolute; top: 24px; width: 43px; }`,
          `.framer-YWrgU .framer-1weezei { height: 35px; left: 0px; position: absolute; top: 0px; width: 43px; }`,
          `.framer-YWrgU .framer-ksgoc0 { height: 23px; left: 17px; position: absolute; top: 12px; width: 26px; }`,
          `.framer-YWrgU .framer-1mhsm1s { height: 23px; left: 0px; position: absolute; top: 0px; width: 26px; }`,
          `.framer-YWrgU .framer-1gs8skh { height: 3px; left: 7px; position: absolute; top: 6px; width: 3px; }`,
          `.framer-YWrgU .framer-miastb { height: 3px; left: 16px; position: absolute; top: 6px; width: 3px; }`,
          `.framer-YWrgU .framer-oya6zw, .framer-YWrgU .framer-1g6xp93 { height: 28px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-YWrgU .framer-yrukru { height: 4px; left: 19px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-YWrgU .framer-18jugt4 { height: 4px; left: 8px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-YWrgU .framer-1pmvthu { height: 34px; left: 25px; position: absolute; top: 25px; width: 34px; }`,
          `.framer-YWrgU .framer-6p85hr { height: 27px; left: 4px; position: absolute; top: 3px; width: 28px; }`,
          `.framer-YWrgU .framer-mjo4tx { height: 15px; left: 9px; position: absolute; top: 9px; width: 17px; }`,
          `.framer-YWrgU .framer-1okxty9 { height: 18px; left: 12px; position: absolute; top: 34px; width: 61px; }`,
          `.framer-YWrgU .framer-1gqvfy3 { height: 18px; left: 0px; position: absolute; top: 0px; width: 61px; }`,
          `.framer-YWrgU .framer-9r1qjk { height: 7px; left: 1px; position: absolute; top: 12px; width: 60px; }`,
          `.framer-YWrgU .framer-lzq0p0 { height: 5px; left: 0px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-YWrgU .framer-5ndn89 { height: 3px; left: 7px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-16csy5g, .framer-YWrgU .framer-1bwytqa, .framer-YWrgU .framer-ms049l, .framer-YWrgU .framer-162yabp, .framer-YWrgU .framer-vzw170, .framer-YWrgU .framer-11lo59o { height: 3px; left: 0px; position: absolute; top: 0px; width: 3px; }`,
          `.framer-YWrgU .framer-fqe35l, .framer-YWrgU .framer-17hnmg2, .framer-YWrgU .framer-hf837k, .framer-YWrgU .framer-1s5hdq9 { height: 1px; left: 1px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-YWrgU .framer-1y2bdk3 { height: 5px; left: 11px; position: absolute; top: 1px; width: 3px; }`,
          `.framer-YWrgU .framer-92syi { height: 3px; left: 15px; position: absolute; top: 2px; width: 2px; }`,
          `.framer-YWrgU .framer-uqn9xh { height: 3px; left: 17px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-11cnpyf { height: 3px; left: 20px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-qdoocb { height: 5px; left: 24px; position: absolute; top: 1px; width: 4px; }`,
          `.framer-YWrgU .framer-131p2r7 { height: 3px; left: 28px; position: absolute; top: 2px; width: 4px; }`,
          `.framer-YWrgU .framer-1wpilea { height: 3px; left: 32px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-cau1j9 { height: 5px; left: 34px; position: absolute; top: 2px; width: 4px; }`,
          `.framer-YWrgU .framer-1d7gbms { height: 3px; left: 38px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-zqhils { height: 5px; left: 40px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-YWrgU .framer-niffew { height: 3px; left: 42px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-b0f4og { height: 3px; left: 1px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-YWrgU .framer-aa0or4 { height: 5px; left: 45px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-15lhb04, .framer-YWrgU .framer-1131uug { height: 5px; left: 0px; position: absolute; top: 0px; width: 3px; }`,
          `.framer-YWrgU .framer-1utf3i0 { height: 3px; left: 1px; position: absolute; top: 1px; width: 2px; }`,
          `.framer-YWrgU .framer-14qvmc { height: 3px; left: 49px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-pddxbx { height: 5px; left: 52px; position: absolute; top: 0px; width: 3px; }`,
          `.framer-YWrgU .framer-8qb52u { height: 3px; left: 1px; position: absolute; top: 2px; width: 2px; }`,
          `.framer-YWrgU .framer-1ljfdy { height: 5px; left: 55px; position: absolute; top: 1px; width: 2px; }`,
          `.framer-YWrgU .framer-eahv9k { height: 3px; left: 0px; position: absolute; top: 2px; width: 2px; }`,
          `.framer-YWrgU .framer-1lzmzx { height: 1px; left: 1px; position: absolute; top: 0px; width: 1px; }`,
          `.framer-YWrgU .framer-1ijc213 { height: 3px; left: 57px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-pz83kg { height: 2px; left: 1px; position: absolute; top: 2px; width: 1px; }`,
          `.framer-YWrgU .framer-1e6ll4g { height: 9px; left: 0px; position: absolute; top: 0px; width: 61px; }`,
          `.framer-YWrgU .framer-15b9t5w { height: 9px; left: 4px; position: absolute; top: 0px; width: 10px; }`,
          `.framer-YWrgU .framer-13mv3xu { height: 9px; left: 0px; position: absolute; top: 0px; width: 10px; }`,
          `.framer-YWrgU .framer-1ws4rdj { height: 7px; left: 13px; position: absolute; top: 3px; width: 3px; }`,
          `.framer-YWrgU .framer-fc665y { height: 7px; left: 17px; position: absolute; top: 3px; width: 7px; }`,
          `.framer-YWrgU .framer-1ny7zk4 { height: 7px; left: 25px; position: absolute; top: 3px; width: 3px; }`,
          `.framer-YWrgU .framer-yf9w4b { height: 7px; left: 29px; position: absolute; top: 3px; width: 5px; }`,
          `.framer-YWrgU .framer-r7y4k { height: 7px; left: 0px; position: absolute; top: 0px; width: 5px; }`,
          `.framer-YWrgU .framer-1b2r73z { height: 3px; left: 2px; position: absolute; top: 1px; width: 2px; }`,
          `.framer-YWrgU .framer-16ye7o { height: 7px; left: 35px; position: absolute; top: 3px; width: 5px; }`,
          `.framer-YWrgU .framer-3cwhpt { height: 7px; left: 41px; position: absolute; top: 3px; width: 7px; }`,
          `.framer-YWrgU .framer-11op1od { height: 7px; left: 0px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-YWrgU .framer-ib1j2a { height: 6px; left: 2px; position: absolute; top: 1px; width: 4px; }`,
          `.framer-YWrgU .framer-5z0zpd { height: 7px; left: 49px; position: absolute; top: 3px; width: 3px; }`,
          `.framer-YWrgU .framer-1l5p05d { height: 9px; left: 52px; position: absolute; top: 0px; width: 9px; }`,
          `.framer-YWrgU .framer-gf2d17 { height: 9px; left: 0px; position: absolute; top: 0px; width: 9px; }`,
          `.framer-YWrgU .framer-176nq9n { height: 4px; left: 3px; position: absolute; top: 2px; width: 3px; }`,
          `.framer-YWrgU .framer-c8spm7 { height: 30px; left: 28px; position: absolute; top: 28px; width: 29px; }`,
          `.framer-YWrgU .framer-7kp9ih, .framer-YWrgU .framer-1vxqyoe { height: 30px; left: 0px; position: absolute; top: 0px; width: 29px; }`,
          `.framer-YWrgU .framer-g9mrqu { height: 26px; left: 4px; position: absolute; top: 2px; width: 22px; }`,
          `.framer-YWrgU .framer-ec3kmn { height: 34px; left: 23px; position: absolute; top: 25px; width: 38px; }`,
          `.framer-YWrgU .framer-1i6yw24, .framer-YWrgU .framer-1x9uu9 { height: 34px; left: 0px; position: absolute; top: 0px; width: 38px; }`,
          `.framer-YWrgU .framer-9adu9e { height: 26px; left: 0px; position: absolute; top: 9px; width: 23px; }`,
          `.framer-YWrgU .framer-1i4y9tu { height: 9px; left: 21px; position: absolute; top: 19px; width: 9px; }`,
          `.framer-YWrgU .framer-fvp6qj { height: 17px; left: 23px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-YWrgU .framer-12je3p9 { height: 36px; left: 16px; position: absolute; top: 25px; width: 52px; }`,
          `.framer-YWrgU .framer-1nexyw2 { height: 36px; left: 0px; position: absolute; top: 0px; width: 52px; }`,
          `.framer-YWrgU .framer-113gzrn { height: 15px; left: 20px; position: absolute; top: 11px; width: 16px; }`,
          `.framer-YWrgU.framer-v-11jgjv3 .framer-orcd2u { left: 26px; top: 29px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs .framer-123cacy { left: 25px; }`,
          `.framer-YWrgU.framer-v-8bo8p4 .framer-1667mrf { left: 31px; top: 22px; }`,
          `.framer-YWrgU.framer-v-1n2tbda.hover.framer-1n2tbda { gap: 10px; }`,
          `.framer-YWrgU.framer-v-1n2tbda.hover .framer-e0ggmy { height: 43px; left: 22px; top: 20px; width: 39px; }`,
          `.framer-YWrgU.framer-v-1n2tbda.hover .framer-vzw9ty, .framer-YWrgU.framer-v-1n2tbda.hover .framer-fk6xos, .framer-YWrgU.framer-v-1pke2uw.hover .framer-1rpia06 { height: 43px; width: 39px; }`,
          `.framer-YWrgU.framer-v-1n2tbda.hover .framer-zamhhl { height: 15px; left: 15px; top: 19px; width: 9px; }`,
          `.framer-YWrgU.framer-v-1n2tbda.hover .framer-14d42bn { height: 38px; left: 3px; top: 3px; width: 34px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-1ifzgjr { height: 45px; left: 19px; top: 21px; width: 44px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-vo11gs { height: 45px; width: 44px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-1929d3f { height: 9px; top: 36px; width: 40px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-ssp7f0 { height: 9px; left: 36px; top: 34px; width: 8px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-9w7xfa { height: 35px; left: 7px; width: 30px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-kv9gtm { height: 11px; left: 9px; top: 18px; width: 9px; }`,
          `.framer-YWrgU.framer-v-1gi4ipo.hover .framer-1hqcdtr { height: 35px; width: 30px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-ly8epq { height: 33px; left: 16px; top: 25px; width: 52px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-1r38mgq { height: 33px; width: 52px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-xi9um3 { height: 33px; width: 26px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-i6qoox { height: 9px; left: 7px; top: 6px; width: 13px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-qqvtrk { height: 9px; left: 7px; top: 19px; width: 14px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-v1p5h8 { height: 25px; left: 28px; top: 9px; width: 25px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-k4pgrn { height: 6px; left: 34px; top: 13px; width: 12px; }`,
          `.framer-YWrgU.framer-v-11q269z.hover .framer-1liv8jk { height: 4px; left: 32px; top: 2px; width: 16px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-5qmhtg { height: 41px; left: 20px; top: 22px; width: 44px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-1k6leum { height: 43px; left: 1px; top: -1px; width: 42px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-1jofjhw { height: 43px; width: 42px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-1n7a7tz { height: 11px; left: 17px; top: 6px; width: 21px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-109a1y7 { height: 11px; left: 17px; top: 16px; width: 9px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-1ckp58o { height: 20px; left: 11px; top: 3px; width: 13px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-4u7lod { height: 20px; left: 3px; top: 11px; width: 17px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-1ncxcse { height: 11px; left: 5px; top: 27px; width: 21px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-kp44k2 { height: 20px; left: 18px; top: 20px; width: 13px; }`,
          `.framer-YWrgU.framer-v-1hkzo8x.hover .framer-1auxouc { height: 20px; left: 23px; top: 13px; width: 17px; }`,
          `.framer-YWrgU.framer-v-11jgjv3.hover .framer-orcd2u { height: 38px; left: 21px; top: 24px; width: 46px; }`,
          `.framer-YWrgU.framer-v-11jgjv3.hover .framer-kqei60 { height: 35px; left: -1px; top: 1px; width: 46px; }`,
          `.framer-YWrgU.framer-v-11jgjv3.hover .framer-1izncoc { height: 35px; width: 46px; }`,
          `.framer-YWrgU.framer-v-11jgjv3.hover .framer-16cp265 { height: 9px; left: 11px; top: 15px; width: 8px; }`,
          `.framer-YWrgU.framer-v-11jgjv3.hover .framer-xbo38i { height: 9px; left: 26px; top: 15px; width: 8px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-123cacy { height: 42px; left: 21px; top: 21px; width: 42px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-3fjmxz, .framer-YWrgU.framer-v-1r5s6hs.hover .framer-1byjmua, .framer-YWrgU.framer-v-1i33v7n.hover .framer-5vm7og { height: 42px; width: 42px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-hpwu3z { height: 11px; left: 25px; top: 10px; width: 14px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-1whp4m4 { height: 11px; left: 17px; top: 4px; width: 16px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-6jjzgy { height: 13px; left: 4px; top: 5px; width: 16px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-vfy2de { height: 15px; left: 4px; top: 18px; width: 20px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-ugc100 { height: 15px; left: 10px; top: 24px; width: 18px; }`,
          `.framer-YWrgU.framer-v-1r5s6hs.hover .framer-2r1z96 { height: 13px; left: 28px; top: 23px; width: 11px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-1m16bg5 { height: 39px; left: 18px; top: 23px; width: 47px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-1lgraso { height: 39px; width: 47px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-yz4o9v { height: 15px; width: 24px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-1wydyl2 { height: 29px; width: 47px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-1b2pn9c { height: 15px; left: 24px; width: 24px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-hypw4l { height: 15px; top: 15px; width: 24px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-1dllq1t { height: 25px; left: 12px; top: 15px; width: 35px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-1fv933c { height: 15px; left: 12px; width: 24px; }`,
          `.framer-YWrgU.framer-v-1t20u3d.hover .framer-16acosd { height: 15px; top: 10px; width: 24px; }`,
          `.framer-YWrgU.framer-v-8bo8p4.hover .framer-1667mrf { height: 49px; left: 29px; top: 17px; width: 26px; }`,
          `.framer-YWrgU.framer-v-8bo8p4.hover .framer-1oofrr0 { height: 49px; width: 26px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-ggiqcg { height: 40px; left: 21px; top: 23px; width: 40px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-buke33 { height: 40px; width: 40px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-1c0m8hm { height: 16px; top: 24px; width: 31px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-m32coh { height: 16px; left: 2px; width: 32px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-y0oa1r { height: 18px; top: 11px; width: 9px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-f8gcg5 { left: 9px; top: 16px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-hp68ym { left: 19px; top: -5px; }`,
          `.framer-YWrgU.framer-v-1kva80d.hover .framer-11v4whn { height: 19px; left: 20px; top: 17px; width: 21px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-1dmig4g { height: 49px; left: 17px; top: 17px; width: 49px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-4dkt85, .framer-YWrgU.framer-v-44cbx6.hover .framer-1v3dr3p, .framer-YWrgU.framer-v-44cbx6.hover .framer-3w1tw6 { height: 49px; width: 49px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-zn7epu { height: 28px; left: 13px; top: 9px; width: 28px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-17fscp7 { height: 6px; left: 22px; width: 6px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-3ak6zd { height: 24px; top: 4px; width: 24px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-1ht4ip1 { height: 16px; left: 5px; top: 8px; width: 16px; }`,
          `.framer-YWrgU.framer-v-44cbx6.hover .framer-g2ydbl { height: 40px; left: 5px; top: 5px; width: 40px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-1qin8ry { height: 47px; left: 19px; top: 18px; width: 41px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-1tlgpvp, .framer-YWrgU.framer-v-1pke2uw.hover .framer-1ocszv { height: 47px; width: 41px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-1lb3g01 { height: 22px; left: 4px; width: 37px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-91mfaj { height: 13px; left: 9px; top: 5px; width: 14px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-6anwv2 { height: 10px; left: 27px; top: 8px; width: 10px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-1qdbrg2 { height: 23px; top: 24px; width: 41px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-cbq97p { height: 10px; left: 4px; top: 31px; width: 9px; }`,
          `.framer-YWrgU.framer-v-185fxle.hover .framer-v18i6k { height: 15px; left: 17px; top: 29px; width: 20px; }`,
          `.framer-YWrgU.framer-v-1i33v7n.hover .framer-1evzv6x { height: 42px; left: 21px; top: 19px; width: 42px; }`,
          `.framer-YWrgU.framer-v-1i33v7n.hover .framer-1lf2g2a { height: 28px; top: 14px; width: 9px; }`,
          `.framer-YWrgU.framer-v-1i33v7n.hover .framer-15qck83 { height: 10px; width: 10px; }`,
          `.framer-YWrgU.framer-v-1i33v7n.hover .framer-1pecqol { height: 29px; left: 15px; top: 13px; width: 27px; }`,
          `.framer-YWrgU.framer-v-10y04o.hover .framer-17kwj4d { height: 51px; left: 22px; top: 20px; width: 39px; }`,
          `.framer-YWrgU.framer-v-10y04o.hover .framer-1gzeygc { height: 52px; left: -1px; width: 39px; }`,
          `.framer-YWrgU.framer-v-13vwfjd.hover .framer-1qagncl { height: 44px; left: 16px; top: 20px; width: 51px; }`,
          `.framer-YWrgU.framer-v-13vwfjd.hover .framer-jt18df, .framer-YWrgU.framer-v-13vwfjd.hover .framer-1s5udvk { height: 44px; width: 51px; }`,
          `.framer-YWrgU.framer-v-13vwfjd.hover .framer-yo38wo { height: 7px; left: 14px; top: 21px; width: 7px; }`,
          `.framer-YWrgU.framer-v-13vwfjd.hover .framer-p3v5yl { height: 6px; left: 16px; top: 33px; width: 19px; }`,
          `.framer-YWrgU.framer-v-13vwfjd.hover .framer-nkz9og { height: 7px; left: 30px; top: 21px; width: 7px; }`,
          `.framer-YWrgU.framer-v-1suv9vm.hover .framer-1hq2mf5 { height: 51px; left: 15px; top: 19px; width: 54px; }`,
          `.framer-YWrgU.framer-v-1suv9vm.hover .framer-awoti3, .framer-YWrgU.framer-v-1suv9vm.hover .framer-cppdoz, .framer-YWrgU.framer-v-1suv9vm.hover .framer-13qlb9t { height: 51px; width: 54px; }`,
          `.framer-YWrgU.framer-v-1suv9vm.hover .framer-xg1xyy { height: 49px; left: 0px; top: 0px; width: 52px; }`,
          `.framer-YWrgU.framer-v-1suv9vm.hover .framer-18wfctv { height: 46px; left: 3px; top: 3px; width: 49px; }`,
          `.framer-YWrgU.framer-v-1l6cpu8.hover .framer-zsixsk { height: 56px; left: 13px; top: 15px; width: 56px; }`,
          `.framer-YWrgU.framer-v-1l6cpu8.hover .framer-n5r22v, .framer-YWrgU.framer-v-1l6cpu8.hover .framer-1clkh6b { height: 56px; width: 56px; }`,
          `.framer-YWrgU.framer-v-1l6cpu8.hover .framer-147cias { height: 8px; left: 12px; top: 34px; width: 30px; }`,
          `.framer-YWrgU.framer-v-1l6cpu8.hover .framer-izcbu0 { height: 10px; left: 11px; top: 25px; width: 34px; }`,
          `.framer-YWrgU.framer-v-1l6cpu8.hover .framer-1mmgcst { height: 11px; left: 9px; top: 15px; width: 40px; }`,
          `.framer-YWrgU.framer-v-1l3aiy6.hover .framer-10ktlp0 { height: 62px; left: 11px; top: 11px; width: 62px; }`,
          `.framer-YWrgU.framer-v-1l3aiy6.hover .framer-89veya, .framer-YWrgU.framer-v-1l3aiy6.hover .framer-sflrqg { height: 62px; width: 62px; }`,
          `.framer-YWrgU.framer-v-1l3aiy6.hover .framer-3wjvr8 { height: 31px; left: 8px; top: 18px; width: 37px; }`,
          `.framer-YWrgU.framer-v-1wh47q6.hover .framer-1ee250v { height: 45px; left: 21px; top: 19px; width: 39px; }`,
          `.framer-YWrgU.framer-v-1wh47q6.hover .framer-1dr7cfv, .framer-YWrgU.framer-v-1wh47q6.hover .framer-ykldqq { height: 45px; width: 39px; }`,
          `.framer-YWrgU.framer-v-1wh47q6.hover .framer-4jnio8 { height: 8px; left: 15px; top: 23px; width: 11px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-16efkoq { height: 47px; left: 21px; top: 19px; width: 41px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-12aa2nr { height: 45px; left: 6px; width: 35px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-1qzs6n4 { height: 35px; top: 11px; width: 35px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-8dulu { height: 7px; left: 22px; width: 5px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-a3vup7 { height: 18px; left: 2px; top: 17px; width: 11px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-1bhu72q, .framer-YWrgU.framer-v-1mcmra.hover .framer-akrdhm, .framer-YWrgU.framer-v-1mcmra.hover .framer-p6lm2r, .framer-YWrgU.framer-v-1mcmra.hover .framer-qsektv { height: 43px; width: 37px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-1uytglo { height: 3px; left: 34px; top: 9px; width: 6px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-14nl3qv { height: 39px; left: 12px; width: 18px; }`,
          `.framer-YWrgU.framer-v-1pke2uw.hover .framer-v8xd24 { height: 26px; top: 17px; width: 16px; }`,
          `.framer-YWrgU.framer-v-1mcmra.hover .framer-dssgnt { height: 43px; left: 23px; top: 22px; width: 37px; }`,
          `.framer-YWrgU.framer-v-1mcmra.hover .framer-1jn23it { height: 29px; left: 9px; top: 3px; width: 25px; }`,
          `.framer-YWrgU.framer-v-1mcmra.hover .framer-4c73nm { height: 9px; left: 26px; top: 9px; width: 3px; }`,
          `.framer-YWrgU.framer-v-1mcmra.hover .framer-1en3eib { height: 9px; left: 18px; top: 9px; width: 3px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-1ctohsq { height: 45px; left: 14px; top: 20px; width: 55px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-1weezei { height: 45px; width: 55px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-ksgoc0 { height: 30px; left: 22px; top: 16px; width: 33px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-1mhsm1s { height: 30px; width: 33px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-1gs8skh { height: 4px; left: 9px; top: 8px; width: 4px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-miastb { height: 4px; left: 20px; top: 8px; width: 4px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-oya6zw, .framer-YWrgU.framer-v-48cyob.hover .framer-1g6xp93 { height: 36px; width: 40px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-yrukru { height: 5px; left: 24px; top: 9px; width: 5px; }`,
          `.framer-YWrgU.framer-v-48cyob.hover .framer-18jugt4 { height: 5px; left: 11px; top: 9px; width: 5px; }`,
          `.framer-YWrgU.framer-v-1rsot93.hover .framer-1pmvthu { height: 46px; left: 21px; top: 19px; width: 46px; }`,
          `.framer-YWrgU.framer-v-1rsot93.hover .framer-hq36hr, .framer-YWrgU.framer-v-1rsot93.hover .framer-1ryluz6, .framer-YWrgU.framer-v-1rsot93.hover .framer-14aw51n { height: 46px; width: 46px; }`,
          `.framer-YWrgU.framer-v-1rsot93.hover .framer-6p85hr { height: 37px; left: 5px; top: 5px; width: 37px; }`,
          `.framer-YWrgU.framer-v-1rsot93.hover .framer-mjo4tx { height: 21px; left: 12px; top: 13px; width: 22px; }`,
          `.framer-YWrgU.framer-v-1lo8qxt.hover .framer-c8spm7 { height: 38px; left: 23px; top: 23px; width: 37px; }`,
          `.framer-YWrgU.framer-v-1lo8qxt.hover .framer-7kp9ih, .framer-YWrgU.framer-v-1lo8qxt.hover .framer-1vxqyoe { height: 38px; width: 37px; }`,
          `.framer-YWrgU.framer-v-1lo8qxt.hover .framer-g9mrqu { height: 33px; left: 5px; top: 3px; width: 28px; }`,
          `.framer-YWrgU.framer-v-1laggpo.hover .framer-ec3kmn { height: 44px; left: 19px; top: 23px; width: 49px; }`,
          `.framer-YWrgU.framer-v-1laggpo.hover .framer-1i6yw24, .framer-YWrgU.framer-v-1laggpo.hover .framer-1x9uu9 { height: 44px; width: 49px; }`,
          `.framer-YWrgU.framer-v-1laggpo.hover .framer-9adu9e { height: 34px; top: 11px; width: 30px; }`,
          `.framer-YWrgU.framer-v-1laggpo.hover .framer-1i4y9tu { height: 12px; left: 27px; top: 24px; width: 12px; }`,
          `.framer-YWrgU.framer-v-1laggpo.hover .framer-fvp6qj { height: 22px; left: 30px; width: 20px; }`,
          `.framer-YWrgU.framer-v-6a0o6e.hover .framer-12je3p9 { height: 42px; left: 11px; top: 22px; width: 61px; }`,
          `.framer-YWrgU.framer-v-6a0o6e.hover .framer-1nexyw2 { height: 42px; width: 61px; }`,
          `.framer-YWrgU.framer-v-6a0o6e.hover .framer-113gzrn { height: 17px; left: 23px; top: 13px; width: 18px; }`,
        ],
        `framer-YWrgU`
      )),
      (Q = xo),
      (xo.displayName = `Icons`),
      (xo.defaultProps = { height: 84, width: 84 }),
      me(xo, {
        variant: {
          options:
            `d4wNECWpc.uEPyMafyX.kDNHbEi2J.tXuBkWWhJ.fHHSQiqdo.pdV6isCFH.vZzIF5HDu.qQ3t0NM9J.ea3V8_QYN.BZAAmM5J2.gBIx7MMpT.a2vSS0CUH.CpqTj7_dZ.Bcp_qb5bc.YEVPXvmtM.ANEINRPAV.rD9hl94fu.A2ihFZb7x.Fj2Stia3y.c4ZGuTW8r.OU2pG3pPl.j2sBye_U0.adguRWWdy.y3qmKAfcU.hcfCc_5hw.ACth5Oq8j`.split(
              `.`
            ),
          optionTitles:
            `Airbnb.Amazon.Behance.ChatGPT.Discord.Dribbble.Dropbox.Facebook.Google.Instagram.Kwai.Linkedin.Pinterest.Reddit.Snapchat.Spotify.Telegram.Threads.Tiktok.Twitch.WeChat.Whatsapp.Wikipedia.X (Twitter).Yahoo.Youtube`.split(
              `.`
            ),
          title: `Variant`,
          type: w.Enum,
        },
        c7qFIwo3w: {
          defaultValue: [
            {
              blur: 2,
              color: `rgba(0,0,0,0.25)`,
              diffusion: 0.25,
              focus: 0.5,
              inset: !1,
              spread: 0,
              type: `realistic`,
              x: 0,
              y: 10,
            },
          ],
          title: `Shadow`,
          type: w.BoxShadow,
        },
        Ydpzi9vZY: { defaultValue: `30px`, title: `Radius`, type: w.BorderRadius },
        uUM3zLOgg: {
          defaultValue: 50,
          displayStepper: !0,
          max: 100,
          min: 0,
          title: `Squircle`,
          type: w.Number,
          unit: `%`,
        },
        onuUM3zLOggChange: { changes: `uUM3zLOgg`, type: w.ChangeHandler },
        HDmi8os8f: { title: `Link`, type: w.Link },
      }),
      he(xo, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Co(e, t) {
  return {
    description: `Made with Framer`,
    robots: `max-image-preview:large`,
    title: `My Framer Site`,
  };
}
var wo = e(() => {});
function To(e, t) {
  return {
    breakpoints: [{ hash: `72rtr7` }],
    description: Co(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-eCxxH`,
    title: Co(e, t).title || `Home`,
    viewport: `width=1200`,
  };
}
var Eo,
  Do,
  Oo = e(() => {
    (wo(),
      (Eo = 1),
      (Do = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  $,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo = e(() => {
    (m(),
      ge(),
      ne(),
      t(),
      So(),
      Oo(),
      (ko = re(Q)),
      (Ao = {}),
      (jo = []),
      (Mo = `framer-eCxxH`),
      (No = { WQLkyLRf1: `framer-v-72rtr7` }),
      (Po = (e, t, n) => (e && t ? `position` : n)),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Fo = ({ value: e }) =>
        b()
          ? null
          : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Io = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Lo = de(
        u(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: s, setLocale: c } = ye(),
            u = ae(),
            { style: d, className: m, layoutId: h, variant: g, ...ne } = Io(e);
          oe(f(() => To({}, s), [s]));
          let [y, re] = ie(g, Ao, !1),
            b = be(Mo),
            se = o(x)?.isLayoutTemplate,
            ce = Po(se, !!o(_)?.transition?.layout);
          return (
            le({}),
            l(x.Provider, {
              value: { activeVariantId: y, primaryVariantId: `WQLkyLRf1`, variantClassNames: No },
              children: p(te, {
                id: h ?? a,
                children: [
                  l(Fo, { value: `html body { background: rgb(255, 255, 255); }` }),
                  l(v.div, {
                    ...ne,
                    className: be(b, `framer-72rtr7`, m),
                    ref: i,
                    style: { ...d },
                    children: p(v.div, {
                      className: `framer-17f9rlv`,
                      "data-framer-name": `Viewport`,
                      layout: ce,
                      children: [
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-vm76bg-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `QM5gcfdIx`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `QM5gcfdIx`,
                              layoutId: `QM5gcfdIx`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`d4wNECWpc`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-13o3a5h-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `o7oVhpMXK`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `o7oVhpMXK`,
                              layoutId: `o7oVhpMXK`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`uEPyMafyX`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-1g6dqza-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `Dc9Sagy4F`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `Dc9Sagy4F`,
                              layoutId: `Dc9Sagy4F`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`kDNHbEi2J`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-iy8l1m-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `fCo_MJxGL`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `fCo_MJxGL`,
                              layoutId: `fCo_MJxGL`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`tXuBkWWhJ`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-gft7n1-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `pHyIJS_K_`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `pHyIJS_K_`,
                              layoutId: `pHyIJS_K_`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`fHHSQiqdo`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-118n8i2-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `gpnep3ZbL`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `gpnep3ZbL`,
                              layoutId: `gpnep3ZbL`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`pdV6isCFH`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-t3x4rx-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `z6WwbQgML`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `z6WwbQgML`,
                              layoutId: `z6WwbQgML`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`vZzIF5HDu`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-y0pecq-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `A3Ughd3Lg`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `A3Ughd3Lg`,
                              layoutId: `A3Ughd3Lg`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`qQ3t0NM9J`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-1r5jh3t-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `DiAIieCRv`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `DiAIieCRv`,
                              layoutId: `DiAIieCRv`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`ea3V8_QYN`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-16hs7t-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `DJR_0BNI7`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `DJR_0BNI7`,
                              layoutId: `DJR_0BNI7`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`BZAAmM5J2`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                        l(T, {
                          height: 84,
                          width: `84px`,
                          y: (u?.y || 0) + 0 + 0 + 458,
                          children: l(C, {
                            className: `framer-74geon-container`,
                            "data-framer-name": `Icons`,
                            isModuleExternal: !0,
                            name: `Icons`,
                            nodeId: `MAN1oLDJi`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            style: { scale: 0.8 },
                            children: l(Q, {
                              c7qFIwo3w: `0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                              height: `100%`,
                              id: `MAN1oLDJi`,
                              layoutId: `MAN1oLDJi`,
                              name: `Icons`,
                              style: { height: `100%`, width: `100%` },
                              uUM3zLOgg: 50,
                              variant: $(`gBIx7MMpT`),
                              width: `100%`,
                              Ydpzi9vZY: `30px`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-eCxxH.framer-lux5qc, .framer-eCxxH .framer-lux5qc { display: block; }`,
          `.framer-eCxxH.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-eCxxH .framer-17f9rlv { align-content: center; align-items: center; background-color: #f0f0f0; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eCxxH .framer-vm76bg-container, .framer-eCxxH .framer-13o3a5h-container, .framer-eCxxH .framer-1g6dqza-container, .framer-eCxxH .framer-iy8l1m-container, .framer-eCxxH .framer-gft7n1-container, .framer-eCxxH .framer-118n8i2-container, .framer-eCxxH .framer-t3x4rx-container, .framer-eCxxH .framer-y0pecq-container, .framer-eCxxH .framer-1r5jh3t-container, .framer-eCxxH .framer-16hs7t-container, .framer-eCxxH .framer-74geon-container { flex: none; height: 84px; position: relative; width: 84px; }`,
        ],
        `framer-eCxxH`
      )),
      (Ro = Lo),
      (Lo.displayName = `Home`),
      (Lo.defaultProps = { height: 800, width: 1200 }),
      he(Lo, [{ explicitInter: !0, fonts: [] }, ...ko], { supportsExplicitInterCodegen: !0 }),
      (Lo.loader = { load: (e, t) => (t.locale, Promise.allSettled([fe(Q, {}, t)])) }),
      (zo = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `800`,
              framerColorSyntax: `true`,
              framerResponsiveScreen: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerScrollSections: `false`,
              framerIntrinsicWidth: `1200`,
              framerContractVersion: `1`,
              framerAcceptsLayoutTemplate: `true`,
              framerLayoutTemplateFlowEffect: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function Vo(e, t, n) {
  let r = Uo[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of Ho) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var Ho,
  Uo,
  Wo,
  Go,
  Ko = e(() => {
    ((Ho = []),
      (Uo = {}),
      (Wo = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
      (Go = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  qo,
  Jo,
  Yo,
  Xo,
  Zo = e(() => {
    (m(),
      t(),
      ge(),
      (qo = () => (
        d(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        l(`div`, {
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
          children: p(`main`, {
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
              l(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: l(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              l(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              l(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              l(`a`, {
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
      (Jo = de(qo, [
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
      (Yo = Jo),
      (Xo = {
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
  Qo = e(() => {
    (Zo(), Zo());
  });
function $o() {
  let e = !1;
  try {
    e = i.self !== i.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (i.location.ancestorOrigins && i.location.ancestorOrigins.length > 0) {
    let e = i.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === ns || t.endsWith(`.${ns}`)), n);
}
function es(e) {
  return u((t, n) => {
    let r = g(rs, is, as),
      a = ve.current() === ve.canvas;
    return r && !a
      ? null
      : l(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              i.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(i?.location?.origin)}`
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function ts(e) {
  return u((t, n) =>
    p(h, {
      children: [
        l(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        l(e, { ...t, ref: n }),
      ],
    })
  );
}
var ns,
  rs,
  is,
  as,
  os = e(() => {
    (r(),
      m(),
      t(),
      ge(),
      (ns = `framer.com`),
      (rs = () => () => {}),
      (is = () => $o()),
      (as = () => !1));
  }),
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs = e(() => {
    (m(),
      ge(),
      t(),
      (ss = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (cs = `alpha, var(--framer-icon-mask-mode, add)`),
      (ls = `no-repeat`),
      (us = `center`),
      (ds = `auto`),
      (fs = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(v.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (ps = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ms = de(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = ps(e);
          return l(fs, {
            ...c,
            className: be(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${ss}; -webkit-mask-position: ${us}; -webkit-mask-repeat: ${ls}; -webkit-mask-size: ${ds}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${ss}; mask-mode: ${cs}; mask-position: ${us}; mask-repeat: ${ls}; mask-size: ${ds}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (ms.displayName = `Text`),
      (hs = ms),
      me(ms, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: w.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: w.Color },
      }));
  }),
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es = e(() => {
    (m(),
      ge(),
      t(),
      (_s = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (vs = `alpha, var(--framer-icon-mask-mode, add)`),
      (ys = `no-repeat`),
      (bs = `center`),
      (xs = `auto`),
      (Ss = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(v.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (Cs = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ws = de(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Cs(e);
          return l(Ss, {
            ...c,
            className: be(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${_s}; -webkit-mask-position: ${bs}; -webkit-mask-repeat: ${ys}; -webkit-mask-size: ${xs}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${_s}; mask-mode: ${vs}; mask-position: ${bs}; mask-repeat: ${ys}; mask-size: ${xs}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (ws.displayName = `Framer`),
      (Ts = ws),
      me(ws, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: w.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: w.Color },
      }));
  }),
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs = e(() => {
    (m(),
      ge(),
      ne(),
      t(),
      os(),
      gs(),
      Es(),
      (Ds = re(Ts)),
      (Os = re(hs)),
      (ks = ce(hs, { nodeId: `pBR1Ew0r8`, override: ts, scopeId: `PX9hIOIVM` })),
      (As = pe(y(ce(v.a, { nodeId: `HK2sXlagE`, override: es, scopeId: `PX9hIOIVM` })))),
      (js = `framer-6jWyo`),
      (Ms = { HK2sXlagE: `framer-v-n0ccwk` }),
      (Ns = {
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
      (Ps = {
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
      (Fs = { duration: 0, type: `tween` }),
      (Is = (e, t) => `translate(-50%, -50%) ${t}`),
      (Ls = (e, t) => `translateX(-50%) ${t}`),
      (Rs = ({ value: e, children: t }) => {
        let n = o(_),
          r = e ?? n.transition,
          i = f(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(_.Provider, { value: i, children: t });
      }),
      (zs = v.create(a)),
      (Bs = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Vs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Hs = de(
        u(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = ye();
          ae();
          let { style: c, className: u, layoutId: d, variant: f, ...m } = Bs(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: ne,
              gestureVariant: y,
              isLoading: re,
              setGestureState: ie,
              setVariant: oe,
              variants: b,
            } = ue({ defaultVariant: `HK2sXlagE`, ref: i, variant: f, variantClassNames: Ms }),
            se = Vs(e, b),
            ce = be(js);
          return l(te, {
            id: d ?? a,
            children: l(zs, {
              animate: b,
              initial: !1,
              children: l(Rs, {
                value: Fs,
                children: l(_e, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: p(As, {
                    ...m,
                    ...ne,
                    __framer__presenceAnimate: Ns,
                    __framer__presenceInitial: Ps,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${be(ce, `framer-n0ccwk`, u, g)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: se,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: i,
                    style: { ...c },
                    children: [
                      l(v.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: se,
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
                      p(v.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: se,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: Is,
                        children: [
                          l(v.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: se,
                            layoutId: `roMJYXHnO`,
                            children: l(Ts, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: se,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: Ls,
                            }),
                          }),
                          l(ks, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: se,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      l(v.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: se,
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
                      l(v.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: se,
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
      (Us = Hs),
      (Hs.displayName = `Badge`),
      (Hs.defaultProps = { height: 38, width: 140 }),
      he(Hs, [{ explicitInter: !0, fonts: [] }, ...Ds, ...Os], {
        supportsExplicitInterCodegen: !0,
      }),
      (Ws = {
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
  To as _,
  Yo as a,
  oo as b,
  Vo as c,
  zo as d,
  Ro as f,
  Oo as g,
  Do as h,
  Qo as i,
  Ko as l,
  jo as m,
  Ws as n,
  Xo as o,
  Bo as p,
  Gs as r,
  Go as s,
  Us as t,
  Wo as u,
  Eo as v,
  ao as y,
};
//# sourceMappingURL=shared-lib.B8jpk2KS.mjs.map
