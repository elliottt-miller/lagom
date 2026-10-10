import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  E as r,
  F as i,
  L as a,
  N as o,
  O as s,
  P as c,
  _ as l,
  b as u,
  c as d,
  j as f,
  k as p,
  l as m,
  o as h,
  s as g,
  w as _,
  x as v,
  y,
  z as b,
} from "./react.Dma17R77.mjs";
import { S as x, a as S, r as ee, t as C } from "./motion.C1GGemIt.mjs";
import {
  C as w,
  D as T,
  E,
  F as D,
  I as O,
  O as k,
  P as A,
  Q as te,
  S as j,
  V as M,
  Z as N,
  _ as P,
  a as F,
  at as ne,
  b as I,
  c as re,
  ct as ie,
  dt as ae,
  et as oe,
  f as se,
  ft as ce,
  h as L,
  it as le,
  lt as ue,
  n as R,
  nt as de,
  o as fe,
  ot as pe,
  pt as me,
  r as z,
  rt as he,
  s as ge,
  st as _e,
  t as B,
  tt as ve,
  u as ye,
  ut as be,
  v as xe,
  x as V,
  y as H,
} from "./framer.DewZ2Ft0.mjs";
function U(e) {
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
function Se(e) {
  return ir.call(sr, e) ? !0 : ir.call(or, e) ? !1 : ar.test(e) ? (sr[e] = !0) : ((or[e] = !0), !1);
}
function Ce(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function we(e) {
  return e[1].toUpperCase();
}
function Te(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = fr.exec(e);
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
function Ee(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function De(e, t, n) {
  switch (t) {
    case `select`:
      return Ee(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Ee(2, null);
    case `math`:
      return Ee(3, null);
    case `foreignObject`:
      return Ee(1, null);
    case `table`:
      return Ee(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Ee(5, null);
    case `colgroup`:
      return Ee(7, null);
    case `tr`:
      return Ee(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Ee(1, null) : e;
}
function Oe(e, t, n) {
  if (typeof n != `object`) throw Error(U(62));
  for (var r in ((t = !0), n))
    if (ir.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = Te(r);
          i = Te((`` + i).trim());
        } else {
          a = r;
          var o = gr.get(a);
          (o !== void 0 ||
            ((o = Te(a.replace(pr, `-$1`).toLowerCase().replace(mr, `-ms-`))), gr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || ir.call(ur, r)
                  ? `` + i
                  : i + `px`
                : Te((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function ke(e, t, n, r) {
  switch (n) {
    case `style`:
      Oe(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = cr.hasOwnProperty(n) ? cr[n] : null), t !== null)) {
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
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, Te(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, Te(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, Te(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, Te(r), `"`));
      }
    } else if (Se(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, Te(r), `"`);
    }
  }
}
function Ae(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(U(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(U(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function je(e) {
  var t = ``;
  return (
    rr.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Me(e, t, n, r) {
  e.push(Ne(n));
  var i,
    a = (n = null);
  for (i in t)
    if (ir.call(t, i)) {
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
            ke(e, r, i, o);
        }
    }
  return (e.push(`>`), Ae(e, a, n), typeof n == `string` ? (e.push(Te(n)), null) : n);
}
function Ne(e) {
  var t = vr.get(e);
  if (t === void 0) {
    if (!_r.test(e)) throw Error(U(65, e));
    ((t = `<` + e), vr.set(e, t));
  }
  return t;
}
function Pe(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(Ne(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (ir.call(n, u)) {
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
                ke(e, r, u, s);
            }
        }
      return (e.push(`>`), Ae(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(Ne(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (ir.call(n, a)) {
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
                ke(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? je(s) : `` + c), hr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Ae(e, u, s), s);
    case `textarea`:
      for (s in (e.push(Ne(`textarea`)), (u = o = a = null), n))
        if (ir.call(n, s) && ((c = n[s]), c != null))
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
              throw Error(U(91));
            default:
              ke(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(U(92));
        if (hr(u) && 1 < u.length) throw Error(U(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(Te(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(Ne(`input`)), (c = u = s = a = null), n))
        if (ir.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(U(399, `input`));
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
              ke(e, r, o, l);
          }
      return (
        u === null ? c !== null && ke(e, r, `checked`, c) : ke(e, r, `checked`, u),
        a === null ? s !== null && ke(e, r, `value`, s) : ke(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(Ne(`menuitem`)), n))
        if (ir.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(U(400));
            default:
              ke(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(Ne(`title`)), (a = null), n))
        if (ir.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(U(434));
            default:
              ke(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(Ne(t)), (o = a = null), n))
        if (ir.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              ke(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(U(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(U(61));
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
      for (var p in (e.push(Ne(t)), n))
        if (ir.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(U(399, t));
            default:
              ke(e, r, p, a);
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
      return Me(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Me(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Me(e, n, t, r);
      for (l in (e.push(Ne(t)), (o = a = null), n))
        if (ir.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Oe(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Se(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, Te(s), `"`);
          }
      return (e.push(`>`), Ae(e, o, a), a);
  }
}
function Fe(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(U(395));
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
      throw Error(U(397));
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
      throw Error(U(397));
  }
}
function Re(e) {
  return JSON.stringify(e).replace(yr, function (e) {
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
    ? (e.push(Te(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(Te(t)), (e = !0)), e);
}
function Ve(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Cr:
      return `Fragment`;
    case Sr:
      return `Portal`;
    case Tr:
      return `Profiler`;
    case wr:
      return `StrictMode`;
    case kr:
      return `Suspense`;
    case Ar:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Dr:
        return (e.displayName || `Context`) + `.Consumer`;
      case Er:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Or:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case jr:
        return ((t = e.displayName || null), t === null ? Ve(e.type) || `Memo` : t);
      case Mr:
        ((t = e._payload), (e = e._init));
        try {
          return Ve(e(t));
        } catch {}
    }
  return null;
}
function He(e, t) {
  if (((e = e.contextTypes), !e)) return Rr;
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
      if (n !== null) throw Error(U(401));
    } else {
      if (n === null) throw Error(U(401));
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
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(U(402));
  e.depth === t.depth ? Ue(e, t) : Ke(e, t);
}
function qe(e, t) {
  var n = t.parent;
  if (n === null) throw Error(U(402));
  (e.depth === n.depth ? Ue(e, n) : qe(e, n), (t.context._currentValue2 = t.value));
}
function Je(e) {
  var t = zr;
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
    (zr = e));
}
function Ye(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Br), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : br({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Br.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = br({}, a, s))) : br(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function Xe(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Hr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Hr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Hr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Ze(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ur(e) / Wr) | 0)) | 0);
}
function Qe(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function $e() {
  if (Kr === null) throw Error(U(321));
  return Kr;
}
function et() {
  if (0 < $r) throw Error(U(312));
  return { memoizedState: null, queue: null, next: null };
}
function tt() {
  return (
    Y === null
      ? Jr === null
        ? ((Yr = !1), (Jr = Y = et()))
        : ((Yr = !0), (Y = Jr))
      : Y.next === null
        ? ((Yr = !1), (Y = Y.next = et()))
        : ((Yr = !0), (Y = Y.next)),
    Y
  );
}
function nt() {
  ((qr = Kr = null), (Xr = !1), (Jr = null), ($r = 0), (Y = Qr = null));
}
function rt(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function it(e, t, n) {
  if (((Kr = $e()), (Y = tt()), Yr)) {
    var r = Y.queue;
    if (((t = r.dispatch), Qr !== null && ((n = Qr.get(r)), n !== void 0))) {
      (Qr.delete(r), (r = Y.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Y.memoizedState = r), [r, t]);
    }
    return [Y.memoizedState, t];
  }
  return (
    (e = e === rt ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Y.memoizedState = e),
    (e = Y.queue = { last: null, dispatch: null }),
    (e = e.dispatch = ot.bind(null, Kr, e)),
    [Y.memoizedState, e]
  );
}
function at(e, t) {
  if (((Kr = $e()), (Y = tt()), (t = t === void 0 ? null : t), Y !== null)) {
    var n = Y.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Gr(t[i], r[i])) {
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
function ot(e, t, n) {
  if (25 <= $r) throw Error(U(301));
  if (e === Kr)
    if (
      ((Xr = !0),
      (e = { action: n, next: null }),
      Qr === null && (Qr = new Map()),
      (n = Qr.get(t)),
      n === void 0)
    )
      Qr.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function st() {
  throw Error(U(394));
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
    (e = ft(t, e, null, n, u, Rr, null, Vr)),
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
      (t.push(c), t.length === 1 && Dt(e));
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
  for (Kr = {}, qr = t, Zr = 0, e = n(r, i); Xr;)
    ((Xr = !1), (Zr = 0), ($r += 1), (Y = null), (e = n(r, i)));
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
        if (!(s in a)) throw Error(U(108, Ve(r) || `Unknown`, s));
      r = br({}, o, n);
    }
    ((t.legacyContext = r), bt(e, t, i), (t.legacyContext = o));
  } else bt(e, t, i);
}
function vt(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = br({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
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
      var o = Zr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (Ye(i, n, r, a), _t(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = Xe(r, 1, 0)));
        try {
          bt(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else bt(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Fr:
        case Pr:
        case wr:
        case Tr:
        case Cr:
          bt(e, t, r.children);
          return;
        case Ar:
          bt(e, t, r.children);
          return;
        case Nr:
          throw Error(U(343));
        case kr:
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
                (St(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                Tt(s, l),
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
          case Or:
            if (((r = gt(e, t, n.render, r, i)), Zr !== 0)) {
              ((n = t.treeContext), (t.treeContext = Xe(n, 1, 0)));
              try {
                bt(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else bt(e, t, r);
            return;
          case jr:
            ((n = n.type), (r = vt(n, r)), yt(e, t, n, r, i));
            return;
          case Er:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = zr),
              (zr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              bt(e, t, i),
              (e = zr),
              e === null)
            )
              throw Error(U(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Ir ? e.context._defaultValue : r),
              (e = zr = e.parent),
              (t.context = e));
            return;
          case Dr:
            ((r = r.children), (r = r(n._currentValue2)), bt(e, t, r));
            return;
          case Mr:
            ((i = n._init), (n = i(n._payload)), (r = vt(n, r)), yt(e, t, n, r, void 0));
            return;
        }
      throw Error(U(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Pe(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = De(o, n, r)),
      St(e, t, a),
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
function bt(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case xr:
        yt(e, t, n.type, n.props, n.ref);
        return;
      case Sr:
        throw Error(U(257));
      case Mr:
        var r = n._init;
        ((n = r(n._payload)), bt(e, t, n));
        return;
    }
    if (hr(n)) {
      xt(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Lr && n[Lr]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        xt(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        U(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
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
function xt(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Xe(a, r, i);
    try {
      St(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function St(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return bt(e, t, n);
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
function Ct(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Et(this, t, e));
}
function wt(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(U(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return wt(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Tt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Tt(e, n));
  } else e.completedSegments.push(t);
}
function Et(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(U(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = ut), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Tt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Ct, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Tt(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Dt(e) {
  if (e.status !== 2) {
    var t = zr,
      n = ni.current;
    ni.current = ei;
    var r = ti;
    ti = e.responseState;
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
            (bt(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              Et(s, o.blockedBoundary, c));
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
      (a.splice(0, i), e.destination !== null && Nt(e, e.destination));
    } catch (t) {
      (mt(e, t), ht(e, t));
    } finally {
      ((ti = r), (ni.current = n), n === ei && Je(t));
    }
  }
}
function Ot(e, t, n) {
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
        i = kt(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(U(390));
  }
}
function kt(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ot(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = Te(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Ot(e, t, n),
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
      Ot(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Fe(t, e.responseState, r.id),
      Ot(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(U(391));
  return (kt(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function At(e, t, n) {
  return (Ie(t, e.responseState, n.formatContext, n.id), kt(e, t, n), Le(t, n.formatContext));
}
function jt(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Mt(e, t, n, r[i]);
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
    throw Error(U(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function Mt(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(U(392));
    return At(e, t, r);
  }
  return (
    At(e, t, r),
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
function Nt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (kt(e, t, n), (e.completedRootSegment = null));
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
        throw Error(U(395));
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
      if (!jt(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        ((a = e), (o = t));
        var v = _.completedSegments;
        for (s = 0; s < v.length; s++)
          if (!Mt(a, o, _, v[s])) {
            (s++, v.splice(0, s));
            var y = !1;
            break e;
          }
        (v.splice(0, s), (y = !0));
      }
      if (!y) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    }
    g.splice(0, i);
    var b = e.completedBoundaries;
    for (i = 0; i < b.length; i++)
      if (!jt(e, t, b[i])) {
        ((e.destination = null), i++, b.splice(0, i));
        return;
      }
    b.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Pt(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return wt(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Nt(e, e.destination));
  } catch (t) {
    (mt(e, t), ht(e, t));
  }
}
function Ft() {}
function It(e, t, n, r) {
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
      Ft,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    Dt(e),
    Pt(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Nt(e, s);
    } catch (t) {
      (mt(e, t), ht(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(U(426));
  return o;
}
function W(e) {
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
function G(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < si &&
        (e.enqueue(new Uint8Array(oi.buffer, 0, si)), (oi = new Uint8Array(512)), (si = 0)),
        e.enqueue(t));
    else {
      var n = oi.length - si;
      (n < t.length &&
        (n === 0
          ? e.enqueue(oi)
          : (oi.set(t.subarray(0, n), si), e.enqueue(oi), (t = t.subarray(n))),
        (oi = new Uint8Array(512)),
        (si = 0)),
        oi.set(t, si),
        (si += t.length));
    }
}
function K(e, t) {
  return (G(e, t), !0);
}
function Lt(e) {
  oi && 0 < si && (e.enqueue(new Uint8Array(oi.buffer, 0, si)), (oi = null), (si = 0));
}
function q(e) {
  return ci.encode(e);
}
function J(e) {
  return ci.encode(e);
}
function Rt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function zt(e) {
  return li.call(fi, e) ? !0 : li.call(di, e) ? !1 : ui.test(e) ? (fi[e] = !0) : ((di[e] = !0), !1);
}
function Bt(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Vt(e) {
  return e[1].toUpperCase();
}
function Ht(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = _i.exec(e);
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
function Ut(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function Wt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? xi : J(`<script nonce="` + Ht(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, q((`` + n).replace(Ei, Ut)), Si), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(Ci, q(Ht(r[n])), Ti);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(wi, q(Ht(i[r])), Ti);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: J(e + `P:`),
    segmentPrefix: J(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function Gt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Kt(e) {
  return Gt(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function qt(e, t, n) {
  switch (t) {
    case `select`:
      return Gt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Gt(2, null);
    case `math`:
      return Gt(3, null);
    case `foreignObject`:
      return Gt(1, null);
    case `table`:
      return Gt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Gt(5, null);
    case `colgroup`:
      return Gt(7, null);
    case `tr`:
      return Gt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Gt(1, null) : e;
}
function Jt(e, t, n, r) {
  return t === `` ? r : (r && e.push(Di), e.push(q(Ht(t))), !0);
}
function Yt(e, t, n) {
  if (typeof n != `object`) throw Error(W(62));
  for (var r in ((t = !0), n))
    if (li.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = q(Ht(r));
          i = q(Ht((`` + i).trim()));
        } else {
          a = r;
          var o = Oi.get(a);
          (o !== void 0 ||
            ((o = J(Ht(a.replace(vi, `-$1`).toLowerCase().replace(yi, `-ms-`)))), Oi.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || li.call(hi, r)
                  ? q(`` + i)
                  : q(i + `px`)
                : q(Ht((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(ki, a, Ai, i)) : e.push(ji, a, Ai, i);
      }
    }
  t || e.push(Pi);
}
function Xt(e, t, n, r) {
  switch (n) {
    case `style`:
      Yt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = pi.hasOwnProperty(n) ? pi[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = q(t.attributeName)), t.type)) {
        case 3:
          r && e.push(Mi, n, Fi);
          break;
        case 4:
          !0 === r ? e.push(Mi, n, Fi) : !1 !== r && e.push(Mi, n, Ni, q(Ht(r)), Pi);
          break;
        case 5:
          isNaN(r) || e.push(Mi, n, Ni, q(Ht(r)), Pi);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Mi, n, Ni, q(Ht(r)), Pi);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(Mi, n, Ni, q(Ht(r)), Pi));
      }
    } else if (zt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(Mi, q(n), Ni, q(Ht(r)), Pi);
    }
  }
}
function Zt(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(W(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(W(61));
    ((t = t.__html), t != null && e.push(q(`` + t)));
  }
}
function Qt(e) {
  var t = ``;
  return (
    ai.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function $t(e, t, n, r) {
  e.push(en(n));
  var i,
    a = (n = null);
  for (i in t)
    if (li.call(t, i)) {
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
            Xt(e, r, i, o);
        }
    }
  return (e.push(Ii), Zt(e, a, n), typeof n == `string` ? (e.push(q(Ht(n))), null) : n);
}
function en(e) {
  var t = Vi.get(e);
  if (t === void 0) {
    if (!Bi.test(e)) throw Error(W(65, e));
    ((t = J(`<` + e)), Vi.set(e, t));
  }
  return t;
}
function tn(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(en(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (li.call(n, u)) {
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
                Xt(e, r, u, s);
            }
        }
      return (e.push(Ii), Zt(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(en(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (li.call(n, a)) {
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
                Xt(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Qt(s) : `` + c), bi(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(Ri);
              break;
            }
        } else `` + o === n && e.push(Ri);
      else l && e.push(Ri);
      return (e.push(Ii), Zt(e, u, s), s);
    case `textarea`:
      for (s in (e.push(en(`textarea`)), (u = o = a = null), n))
        if (li.call(n, s) && ((c = n[s]), c != null))
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
              throw Error(W(91));
            default:
              Xt(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(Ii), u != null)) {
        if (a != null) throw Error(W(92));
        if (bi(u) && 1 < u.length) throw Error(W(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(zi),
        a !== null && e.push(q(Ht(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(en(`input`)), (c = u = s = a = null), n))
        if (li.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(W(399, `input`));
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
              Xt(e, r, o, l);
          }
      return (
        u === null ? c !== null && Xt(e, r, `checked`, c) : Xt(e, r, `checked`, u),
        a === null ? s !== null && Xt(e, r, `value`, s) : Xt(e, r, `value`, a),
        e.push(Li),
        null
      );
    case `menuitem`:
      for (var f in (e.push(en(`menuitem`)), n))
        if (li.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(W(400));
            default:
              Xt(e, r, f, a);
          }
      return (e.push(Ii), null);
    case `title`:
      for (d in (e.push(en(`title`)), (a = null), n))
        if (li.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(W(434));
            default:
              Xt(e, r, d, o);
          }
      return (e.push(Ii), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(en(t)), (o = a = null), n))
        if (li.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              Xt(e, r, c, s);
          }
      if ((e.push(Ii), o != null)) {
        if (a != null) throw Error(W(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(W(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(zi, q(n))
              : e.push(q(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(zi),
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
      for (var p in (e.push(en(t)), n))
        if (li.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(W(399, t));
            default:
              Xt(e, r, p, a);
          }
      return (e.push(Li), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return $t(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Hi), $t(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return $t(e, n, t, r);
      for (l in (e.push(en(t)), (o = a = null), n))
        if (li.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Yt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              zt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(Mi, q(l), Ni, q(Ht(s)), Pi);
          }
      return (e.push(Ii), Zt(e, o, a), a);
  }
}
function nn(e, t, n) {
  if ((G(e, Ji), n === null)) throw Error(W(395));
  return (G(e, n), K(e, Yi));
}
function rn(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (G(e, na), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, ra));
    case 2:
      return (G(e, aa), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, oa));
    case 3:
      return (G(e, ca), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, la));
    case 4:
      return (G(e, da), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, fa));
    case 5:
      return (G(e, ma), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, ha));
    case 6:
      return (G(e, _a), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, va));
    case 7:
      return (G(e, ba), G(e, t.segmentPrefix), G(e, q(r.toString(16))), K(e, xa));
    default:
      throw Error(W(397));
  }
}
function an(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return K(e, ia);
    case 2:
      return K(e, sa);
    case 3:
      return K(e, ua);
    case 4:
      return K(e, pa);
    case 5:
      return K(e, ga);
    case 6:
      return K(e, ya);
    case 7:
      return K(e, Sa);
    default:
      throw Error(W(397));
  }
}
function on(e) {
  return JSON.stringify(e).replace(Ia, function (e) {
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
function sn(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Ba:
      return `Fragment`;
    case za:
      return `Portal`;
    case Ha:
      return `Profiler`;
    case Va:
      return `StrictMode`;
    case Ka:
      return `Suspense`;
    case qa:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Wa:
        return (e.displayName || `Context`) + `.Consumer`;
      case Ua:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Ga:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ja:
        return ((t = e.displayName || null), t === null ? sn(e.type) || `Memo` : t);
      case Ya:
        ((t = e._payload), (e = e._init));
        try {
          return sn(e(t));
        } catch {}
    }
  return null;
}
function cn(e, t) {
  if (((e = e.contextTypes), !e)) return to;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function ln(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(W(401));
    } else {
      if (n === null) throw Error(W(401));
      ln(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function un(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && un(e));
}
function dn(e) {
  var t = e.parent;
  (t !== null && dn(t), (e.context._currentValue = e.value));
}
function fn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(W(402));
  e.depth === t.depth ? ln(e, t) : fn(e, t);
}
function pn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(W(402));
  (e.depth === n.depth ? ln(e, n) : pn(e, n), (t.context._currentValue = t.value));
}
function mn(e) {
  var t = no;
  t !== e &&
    (t === null
      ? dn(e)
      : e === null
        ? un(t)
        : t.depth === e.depth
          ? ln(t, e)
          : t.depth > e.depth
            ? fn(t, e)
            : pn(t, e),
    (no = e));
}
function hn(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = ro), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : La({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && ro.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = La({}, a, s))) : La(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function gn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - ao(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - ao(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - ao(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function _n(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((oo(e) / so) | 0)) | 0);
}
function vn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function yn() {
  if (lo === null) throw Error(W(321));
  return lo;
}
function bn() {
  if (0 < _o) throw Error(W(312));
  return { memoizedState: null, queue: null, next: null };
}
function xn() {
  return (
    X === null
      ? fo === null
        ? ((po = !1), (fo = X = bn()))
        : ((po = !0), (X = fo))
      : X.next === null
        ? ((po = !1), (X = X.next = bn()))
        : ((po = !0), (X = X.next)),
    X
  );
}
function Sn() {
  ((uo = lo = null), (mo = !1), (fo = null), (_o = 0), (X = go = null));
}
function Cn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function wn(e, t, n) {
  if (((lo = yn()), (X = xn()), po)) {
    var r = X.queue;
    if (((t = r.dispatch), go !== null && ((n = go.get(r)), n !== void 0))) {
      (go.delete(r), (r = X.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((X.memoizedState = r), [r, t]);
    }
    return [X.memoizedState, t];
  }
  return (
    (e = e === Cn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (X.memoizedState = e),
    (e = X.queue = { last: null, dispatch: null }),
    (e = e.dispatch = En.bind(null, lo, e)),
    [X.memoizedState, e]
  );
}
function Tn(e, t) {
  if (((lo = yn()), (X = xn()), (t = t === void 0 ? null : t), X !== null)) {
    var n = X.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!co(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (X.memoizedState = [e, t]), e);
}
function En(e, t, n) {
  if (25 <= _o) throw Error(W(301));
  if (e === lo)
    if (
      ((mo = !0),
      (e = { action: n, next: null }),
      go === null && (go = new Map()),
      (n = go.get(t)),
      n === void 0)
    )
      go.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function Dn() {
  throw Error(W(394));
}
function On() {}
function kn(e) {
  return (console.error(e), null);
}
function An() {}
function jn(e, t, n, r, i, a, o, s, c) {
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
      onError: i === void 0 ? kn : i,
      onAllReady: a === void 0 ? An : a,
      onShellReady: o === void 0 ? An : o,
      onShellError: s === void 0 ? An : s,
      onFatalError: c === void 0 ? An : c,
    }),
    (n = Nn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Mn(t, e, null, n, u, to, null, io)),
    l.push(e),
    t
  );
}
function Mn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && qn(e));
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
function Nn(e, t, n, r, i, a) {
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
function Pn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function Fn(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Rt(e.destination, t)));
}
function In(e, t, n, r, i) {
  for (lo = {}, uo = t, ho = 0, e = n(r, i); mo;)
    ((mo = !1), (ho = 0), (_o += 1), (X = null), (e = n(r, i)));
  return (Sn(), e);
}
function Ln(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(W(108, sn(r) || `Unknown`, s));
      r = La({}, o, n);
    }
    ((t.legacyContext = r), Bn(e, t, i), (t.legacyContext = o));
  } else Bn(e, t, i);
}
function Rn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = La({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = cn(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        hn(a, n, r, i),
        Ln(e, t, a, n));
    } else {
      ((a = cn(n, t.legacyContext)), (i = In(e, t, n, r, a)));
      var o = ho !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (hn(i, n, r, a), Ln(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = gn(r, 1, 0)));
        try {
          Bn(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else Bn(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Qa:
        case Za:
        case Va:
        case Ha:
        case Ba:
          Bn(e, t, r.children);
          return;
        case qa:
          Bn(e, t, r.children);
          return;
        case Xa:
          throw Error(W(343));
        case Ka:
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
              c = Nn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Nn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Hn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(Di),
                (l.status = 1),
                Gn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = Pn(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = Mn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Ga:
            if (((r = In(e, t, n.render, r, i)), ho !== 0)) {
              ((n = t.treeContext), (t.treeContext = gn(n, 1, 0)));
              try {
                Bn(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else Bn(e, t, r);
            return;
          case Ja:
            ((n = n.type), (r = Rn(n, r)), zn(e, t, n, r, i));
            return;
          case Ua:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = no),
              (no = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              Bn(e, t, i),
              (e = no),
              e === null)
            )
              throw Error(W(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === $a ? e.context._defaultValue : r),
              (e = no = e.parent),
              (t.context = e));
            return;
          case Wa:
            ((r = r.children), (r = r(n._currentValue)), Bn(e, t, r));
            return;
          case Ya:
            ((i = n._init), (n = i(n._payload)), (r = Rn(n, r)), zn(e, t, n, r, void 0));
            return;
        }
      throw Error(W(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = tn(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = qt(o, n, r)),
      Hn(e, t, a),
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
        i.chunks.push(Ui, q(n), Wi);
    }
    i.lastPushedText = !1;
  }
}
function Bn(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case Ra:
        zn(e, t, n.type, n.props, n.ref);
        return;
      case za:
        throw Error(W(257));
      case Ya:
        var r = n._init;
        ((n = r(n._payload)), Bn(e, t, n));
        return;
    }
    if (bi(n)) {
      Vn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (eo && n[eo]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Vn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        W(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Jt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Jt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Vn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = gn(a, r, i);
    try {
      Hn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Hn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return Bn(e, t, n);
  } catch (c) {
    if ((Sn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        mn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Nn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = Mn(
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
      mn(a));
  }
}
function Un(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Kn(this, t, e));
}
function Wn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(W(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Wn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Gn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Gn(e, n));
  } else e.completedSegments.push(t);
}
function Kn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(W(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = An), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Gn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Un, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Gn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function qn(e) {
  if (e.status !== 2) {
    var t = no,
      n = bo.current;
    bo.current = vo;
    var r = yo;
    yo = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          mn(o.context);
          try {
            (Bn(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(Di),
              o.abortSet.delete(o),
              (c.status = 1),
              Kn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((Sn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = Pn(s, d);
              if (
                (u === null
                  ? Fn(s, d)
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
      (a.splice(0, i), e.destination !== null && $n(e, e.destination));
    } catch (t) {
      (Pn(e, t), Fn(e, t));
    } finally {
      ((yo = r), (bo.current = n), n === vo && mn(t));
    }
  }
}
function Jn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        G(t, Gi),
        G(t, e.placeholderPrefix),
        (e = q(r.toString(16))),
        G(t, e),
        K(t, Ki)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) G(t, r[a]);
        i = Yn(e, t, i);
      }
      for (; a < r.length - 1; a++) G(t, r[a]);
      return (a < r.length && (i = K(t, r[a])), i);
    default:
      throw Error(W(390));
  }
}
function Yn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Jn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      K(t, Xi),
      G(t, Qi),
      r && (G(t, ea), G(t, q(Ht(r))), G(t, $i)),
      K(t, ta),
      Jn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = J(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      nn(t, e.responseState, r),
      Jn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      nn(t, e.responseState, r.id),
      Jn(e, t, n));
  else {
    if ((K(t, qi), (n = r.completedSegments), n.length !== 1)) throw Error(W(391));
    Yn(e, t, n[0]);
  }
  return K(t, Zi);
}
function Xn(e, t, n) {
  return (rn(t, e.responseState, n.formatContext, n.id), Yn(e, t, n), an(t, n.formatContext));
}
function Zn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Qn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    G(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? G(t, Oa) : ((e.sentCompleteBoundaryFunction = !0), G(t, Da)),
    r === null)
  )
    throw Error(W(395));
  return ((n = q(n.toString(16))), G(t, r), G(t, ka), G(t, e.segmentPrefix), G(t, n), K(t, Aa));
}
function Qn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(W(392));
    return Xn(e, t, r);
  }
  return (
    Xn(e, t, r),
    (e = e.responseState),
    G(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? G(t, wa) : ((e.sentCompleteSegmentFunction = !0), G(t, Ca)),
    G(t, e.segmentPrefix),
    (i = q(i.toString(16))),
    G(t, i),
    G(t, Ta),
    G(t, e.placeholderPrefix),
    G(t, i),
    K(t, Ea)
  );
}
function $n(e, t) {
  ((oi = new Uint8Array(512)), (si = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Yn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) G(t, r[n]);
      n < r.length && K(t, r[n]);
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
        (G(r, s.startInlineScript),
        s.sentClientRenderFunction ? G(r, Ma) : ((s.sentClientRenderFunction = !0), G(r, ja)),
        c === null)
      )
        throw Error(W(395));
      if (
        (G(r, c),
        G(r, Na),
        (l || u || d) && (G(r, Fa), G(r, q(on(l || ``)))),
        (u || d) && (G(r, Fa), G(r, q(on(u || ``)))),
        d && (G(r, Fa), G(r, q(on(d)))),
        !K(r, Pa))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Zn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), Lt(t), (oi = new Uint8Array(512)), (si = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Qn(a, o, m, h[s])) {
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
      if (!Zn(e, t, _[i])) {
        ((e.destination = null), i++, _.splice(0, i));
        return;
      }
    _.splice(0, i);
  } finally {
    (Lt(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function er(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Wn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && $n(e, e.destination));
  } catch (t) {
    (Pn(e, t), Fn(e, t));
  }
}
var tr,
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
  Y,
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
  X,
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
  To = t(() => {
    (_(),
      (tr = `default` in r ? v : r),
      (nr = {}),
      (rr = tr),
      (ir = Object.prototype.hasOwnProperty),
      (ar =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (or = {}),
      (sr = {}),
      (cr = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          cr[e] = new Ce(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        cr[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        cr[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          cr[e] = new Ce(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          cr[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        cr[e] = new Ce(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        cr[e] = new Ce(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        cr[e] = new Ce(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        cr[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (lr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(lr, we);
          cr[t] = new Ce(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(lr, we);
          cr[t] = new Ce(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(lr, we);
        cr[t] = new Ce(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        cr[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (cr.xlinkHref = new Ce(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        cr[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (ur = {
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
      (dr = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(ur).forEach(function (e) {
        dr.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ur[t] = ur[e]));
        });
      }),
      (fr = /["'&<>]/),
      (pr = /([A-Z])/g),
      (mr = /^ms-/),
      (hr = Array.isArray),
      (gr = new Map()),
      (_r = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (vr = new Map()),
      (yr = /[<\u2028\u2029]/g),
      (br = Object.assign),
      (xr = Symbol.for(`react.element`)),
      (Sr = Symbol.for(`react.portal`)),
      (Cr = Symbol.for(`react.fragment`)),
      (wr = Symbol.for(`react.strict_mode`)),
      (Tr = Symbol.for(`react.profiler`)),
      (Er = Symbol.for(`react.provider`)),
      (Dr = Symbol.for(`react.context`)),
      (Or = Symbol.for(`react.forward_ref`)),
      (kr = Symbol.for(`react.suspense`)),
      (Ar = Symbol.for(`react.suspense_list`)),
      (jr = Symbol.for(`react.memo`)),
      (Mr = Symbol.for(`react.lazy`)),
      (Nr = Symbol.for(`react.scope`)),
      (Pr = Symbol.for(`react.debug_trace_mode`)),
      (Fr = Symbol.for(`react.legacy_hidden`)),
      (Ir = Symbol.for(`react.default_value`)),
      (Lr = Symbol.iterator),
      (Rr = {}),
      (zr = null),
      (Br = {
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
      (Vr = { id: 1, overflow: `` }),
      (Hr = Math.clz32 ? Math.clz32 : Ze),
      (Ur = Math.log),
      (Wr = Math.LN2),
      (Gr = typeof Object.is == `function` ? Object.is : Qe),
      (Kr = null),
      (qr = null),
      (Jr = null),
      (Y = null),
      (Yr = !1),
      (Xr = !1),
      (Zr = 0),
      (Qr = null),
      ($r = 0),
      (ei = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return ($e(), e._currentValue2);
        },
        useMemo: at,
        useReducer: it,
        useRef: function (e) {
          ((Kr = $e()), (Y = tt()));
          var t = Y.memoizedState;
          return t === null ? ((e = { current: e }), (Y.memoizedState = e)) : t;
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
          var e = qr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Hr(e) - 1))).toString(32) + t));
          var n = ti;
          if (n === null) throw Error(U(404));
          return (
            (t = Zr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return ($e(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(U(407));
          return n();
        },
      }),
      (ti = null),
      (ni = rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (nr.renderToNodeStream = function () {
        throw Error(U(207));
      }),
      (nr.renderToStaticMarkup = function (e, t) {
        return It(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (nr.renderToStaticNodeStream = function () {
        throw Error(U(208));
      }),
      (nr.renderToString = function (e, t) {
        return It(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (nr.version = `18.2.0`),
      (ri = `default` in r ? v : r),
      (ii = {}),
      (ai = ri),
      (oi = null),
      (si = 0),
      (ci = new TextEncoder()),
      (li = Object.prototype.hasOwnProperty),
      (ui =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (di = {}),
      (fi = {}),
      (pi = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          pi[e] = new Bt(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        pi[t] = new Bt(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        pi[e] = new Bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          pi[e] = new Bt(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          pi[e] = new Bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        pi[e] = new Bt(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        pi[e] = new Bt(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        pi[e] = new Bt(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        pi[e] = new Bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (mi = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(mi, Vt);
          pi[t] = new Bt(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(mi, Vt);
          pi[t] = new Bt(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(mi, Vt);
        pi[t] = new Bt(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        pi[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (pi.xlinkHref = new Bt(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        pi[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (hi = {
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
      (gi = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(hi).forEach(function (e) {
        gi.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hi[t] = hi[e]));
        });
      }),
      (_i = /["'&<>]/),
      (vi = /([A-Z])/g),
      (yi = /^ms-/),
      (bi = Array.isArray),
      (xi = J(`<script>`)),
      (Si = J(`<\/script>`)),
      (Ci = J(`<script src="`)),
      (wi = J(`<script type="module" src="`)),
      (Ti = J(`" async=""><\/script>`)),
      (Ei = /(<\/|<)(s)(cript)/gi),
      (Di = J(`<!-- -->`)),
      (Oi = new Map()),
      (ki = J(` style="`)),
      (Ai = J(`:`)),
      (ji = J(`;`)),
      (Mi = J(` `)),
      (Ni = J(`="`)),
      (Pi = J(`"`)),
      (Fi = J(`=""`)),
      (Ii = J(`>`)),
      (Li = J(`/>`)),
      (Ri = J(` selected=""`)),
      (zi = J(`
`)),
      (Bi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (Vi = new Map()),
      (Hi = J(`<!DOCTYPE html>`)),
      (Ui = J(`</`)),
      (Wi = J(`>`)),
      (Gi = J(`<template id="`)),
      (Ki = J(`"></template>`)),
      (qi = J(`<!--$-->`)),
      (Ji = J(`<!--$?--><template id="`)),
      (Yi = J(`"></template>`)),
      (Xi = J(`<!--$!-->`)),
      (Zi = J(`<!--/$-->`)),
      (Qi = J(`<template`)),
      ($i = J(`"`)),
      (ea = J(` data-dgst="`)),
      J(` data-msg="`),
      J(` data-stck="`),
      (ta = J(`></template>`)),
      (na = J(`<div hidden id="`)),
      (ra = J(`">`)),
      (ia = J(`</div>`)),
      (aa = J(`<svg aria-hidden="true" style="display:none" id="`)),
      (oa = J(`">`)),
      (sa = J(`</svg>`)),
      (ca = J(`<math aria-hidden="true" style="display:none" id="`)),
      (la = J(`">`)),
      (ua = J(`</math>`)),
      (da = J(`<table hidden id="`)),
      (fa = J(`">`)),
      (pa = J(`</table>`)),
      (ma = J(`<table hidden><tbody id="`)),
      (ha = J(`">`)),
      (ga = J(`</tbody></table>`)),
      (_a = J(`<table hidden><tr id="`)),
      (va = J(`">`)),
      (ya = J(`</tr></table>`)),
      (ba = J(`<table hidden><colgroup id="`)),
      (xa = J(`">`)),
      (Sa = J(`</colgroup></table>`)),
      (Ca = J(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (wa = J(`$RS("`)),
      (Ta = J(`","`)),
      (Ea = J(`")<\/script>`)),
      (Da = J(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (Oa = J(`$RC("`)),
      (ka = J(`","`)),
      (Aa = J(`")<\/script>`)),
      (ja = J(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (Ma = J(`$RX("`)),
      (Na = J(`"`)),
      (Pa = J(`)<\/script>`)),
      (Fa = J(`,`)),
      (Ia = /[<\u2028\u2029]/g),
      (La = Object.assign),
      (Ra = Symbol.for(`react.element`)),
      (za = Symbol.for(`react.portal`)),
      (Ba = Symbol.for(`react.fragment`)),
      (Va = Symbol.for(`react.strict_mode`)),
      (Ha = Symbol.for(`react.profiler`)),
      (Ua = Symbol.for(`react.provider`)),
      (Wa = Symbol.for(`react.context`)),
      (Ga = Symbol.for(`react.forward_ref`)),
      (Ka = Symbol.for(`react.suspense`)),
      (qa = Symbol.for(`react.suspense_list`)),
      (Ja = Symbol.for(`react.memo`)),
      (Ya = Symbol.for(`react.lazy`)),
      (Xa = Symbol.for(`react.scope`)),
      (Za = Symbol.for(`react.debug_trace_mode`)),
      (Qa = Symbol.for(`react.legacy_hidden`)),
      ($a = Symbol.for(`react.default_value`)),
      (eo = Symbol.iterator),
      (to = {}),
      (no = null),
      (ro = {
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
      (io = { id: 1, overflow: `` }),
      (ao = Math.clz32 ? Math.clz32 : _n),
      (oo = Math.log),
      (so = Math.LN2),
      (co = typeof Object.is == `function` ? Object.is : vn),
      (lo = null),
      (uo = null),
      (fo = null),
      (X = null),
      (po = !1),
      (mo = !1),
      (ho = 0),
      (go = null),
      (_o = 0),
      (vo = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (yn(), e._currentValue);
        },
        useMemo: Tn,
        useReducer: wn,
        useRef: function (e) {
          ((lo = yn()), (X = xn()));
          var t = X.memoizedState;
          return t === null ? ((e = { current: e }), (X.memoizedState = e)) : t;
        },
        useState: function (e) {
          return wn(Cn, e);
        },
        useInsertionEffect: On,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return Tn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: On,
        useEffect: On,
        useDebugValue: On,
        useDeferredValue: function (e) {
          return (yn(), e);
        },
        useTransition: function () {
          return (yn(), [!1, Dn]);
        },
        useId: function () {
          var e = uo.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - ao(e) - 1))).toString(32) + t));
          var n = yo;
          if (n === null) throw Error(W(404));
          return (
            (t = ho++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (yn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(W(407));
          return n();
        },
      }),
      (yo = null),
      (bo = ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (ii.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = jn(
              e,
              Wt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Kt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Rt(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          $n(s, e);
                        } catch (e) {
                          (Pn(s, e), Fn(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      er(s);
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
                (er(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          qn(s);
        });
      }),
      (ii.version = `18.2.0`),
      (xo = {}),
      (So = nr),
      (Co = ii),
      (xo.version = So.version),
      (xo.renderToString = So.renderToString),
      (xo.renderToStaticMarkup = So.renderToStaticMarkup),
      (xo.renderToNodeStream = So.renderToNodeStream),
      (xo.renderToStaticNodeStream = So.renderToStaticNodeStream),
      (xo.renderToReadableStream = Co.renderToReadableStream),
      xo.version,
      xo.renderToString,
      xo.renderToStaticMarkup,
      xo.renderToNodeStream,
      xo.renderToStaticNodeStream,
      (wo = xo.renderToReadableStream));
  });
function Eo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Do,
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
  Ho = t(() => {
    (h(),
      M(),
      C(),
      _(),
      (Do = ce(x.div)),
      (Oo = { RxZKainOV: { hover: !0, pressed: !0 } }),
      (ko = [`RxZKainOV`, `vmYQrhRVE`, `VZ5qRVO7X`, `F3U9MaNHg`, `NqtdM__YN`]),
      (Ao = `framer-riFww`),
      (jo = {
        F3U9MaNHg: `framer-v-knp2z`,
        NqtdM__YN: `framer-v-rrk0v9`,
        RxZKainOV: `framer-v-1ylgcnl`,
        vmYQrhRVE: `framer-v-u6nkww`,
        VZ5qRVO7X: `framer-v-wz3ems`,
      }),
      (Mo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (No = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Po = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Fo = (e, t) => `translateX(-50%) ${t}`),
      (Io = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Lo = {
        Default: `RxZKainOV`,
        Disabled: `VZ5qRVO7X`,
        Error: `NqtdM__YN`,
        Loading: `vmYQrhRVE`,
        Success: `F3U9MaNHg`,
      }),
      (Ro = x.create(c)),
      (zo = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Lo[r.variant] ?? r.variant ?? `RxZKainOV`,
      })),
      (Bo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Vo = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let { style: l, className: u, layoutId: f, variant: p, ...h } = zo(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ue({
              cycleOrder: ko,
              defaultVariant: `RxZKainOV`,
              enabledGestures: Oo,
              ref: r,
              variant: p,
              variantClassNames: jo,
            }),
            O = Bo(e, D),
            k = E(Ao),
            A = () => g !== `vmYQrhRVE`,
            j = () => g === `vmYQrhRVE`,
            M = () => ![`vmYQrhRVE`, `VZ5qRVO7X`, `F3U9MaNHg`, `NqtdM__YN`].includes(g);
          return d(ee, {
            id: f ?? i,
            children: d(Ro, {
              animate: D,
              initial: !1,
              children: d(Io, {
                value: Mo,
                children: m(x.button, {
                  ...h,
                  ...b,
                  className: E(k, `framer-1ylgcnl`, u, _),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: O,
                  layoutId: `RxZKainOV`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                    borderBottomLeftRadius: 36,
                    borderBottomRightRadius: 36,
                    borderTopLeftRadius: 36,
                    borderTopRightRadius: 36,
                    opacity: 1,
                    ...l,
                  },
                  variants: {
                    "RxZKainOV-hover": { backgroundColor: `rgba(51, 51, 51, 0)`, opacity: 1 },
                    "RxZKainOV-pressed": { backgroundColor: `rgb(51, 51, 51)`, opacity: 1 },
                    F3U9MaNHg: { opacity: 1 },
                    NqtdM__YN: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    VZ5qRVO7X: { opacity: 0.5 },
                  },
                  ...Eo(
                    {
                      "RxZKainOV-hover": { "data-framer-name": void 0 },
                      "RxZKainOV-pressed": { "data-framer-name": void 0 },
                      F3U9MaNHg: { "data-framer-name": `Success` },
                      NqtdM__YN: { "data-framer-name": `Error` },
                      vmYQrhRVE: { "data-framer-name": `Loading` },
                      VZ5qRVO7X: { "data-framer-name": `Disabled` },
                    },
                    g,
                    S
                  ),
                  children: [
                    A() &&
                      d(H, {
                        __fromCanvasComponent: !0,
                        children: d(c, {
                          children: d(x.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `600`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0)))`,
                            },
                            children: `Subscribe Now`,
                          }),
                        }),
                        className: `framer-5dtqit`,
                        fonts: [`Inter-SemiBold`],
                        layoutDependency: O,
                        layoutId: `f47zvujYc`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "RxZKainOV-hover": {
                            "--extracted-r6o4lv": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                          },
                          F3U9MaNHg: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                          NqtdM__YN: { "--extracted-r6o4lv": `rgb(255, 34, 68)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Eo(
                          {
                            "RxZKainOV-hover": {
                              children: d(c, {
                                children: d(x.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                                  },
                                  children: `Subscribe Now`,
                                }),
                              }),
                            },
                            F3U9MaNHg: {
                              children: d(c, {
                                children: d(x.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                            },
                            NqtdM__YN: {
                              children: d(c, {
                                children: d(x.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                          },
                          g,
                          S
                        ),
                      }),
                    j() &&
                      d(x.div, {
                        className: `framer-k5s0z8`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: O,
                        layoutId: `rt0LZnqpc`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: d(Do, {
                          __framer__loop: Po,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: No,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-10p1n26`,
                          "data-framer-name": `Conic`,
                          layoutDependency: O,
                          layoutId: `RqMWg_nBd`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            vmYQrhRVE: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: d(x.div, {
                            className: `framer-jz43t`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: O,
                            layoutId: `nFkBGNU8H`,
                            style: {
                              backgroundColor: `var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: Fo,
                          }),
                        }),
                      }),
                    M() &&
                      m(I, {
                        className: `framer-igy3s0`,
                        layoutDependency: O,
                        layoutId: `vXCEJynfE`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><g><path d="M 19.5 39 C 8.73 39 0 30.27 0 19.5 L 0 19.5 C 0 8.73 8.73 0 19.5 0 L 19.5 0 C 30.27 0 39 8.73 39 19.5 L 39 19.5 C 39 30.27 30.27 39 19.5 39 Z" fill="rgb(3,5,7)"></path><path d="M 14.739 23.22 C 14.538 23.407 14.455 23.689 14.523 23.954 C 14.591 24.22 14.799 24.428 15.064 24.495 C 15.33 24.563 15.612 24.481 15.799 24.28 L 15.269 23.75 Z M 24.019 15.75 C 24.019 15.336 23.683 15 23.269 15 L 16.519 15 C 16.105 15 15.769 15.336 15.769 15.75 C 15.769 16.164 16.105 16.5 16.519 16.5 L 22.519 16.5 L 22.519 22.5 C 22.519 22.914 22.855 23.25 23.269 23.25 C 23.683 23.25 24.019 22.914 24.019 22.5 Z M 15.269 23.75 L 15.799 24.28 L 23.799 16.28 L 23.269 15.75 L 22.739 15.22 L 14.739 23.22 Z" fill="rgb(88,178,127)" opacity="0.98"></path></g></svg>`,
                        withExternalLayout: !0,
                        ...Eo(
                          {
                            "RxZKainOV-hover": {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><g><path d="M 19.5 39 C 8.73 39 0 30.27 0 19.5 L 0 19.5 C 0 8.73 8.73 0 19.5 0 L 19.5 0 C 30.27 0 39 8.73 39 19.5 L 39 19.5 C 39 30.27 30.27 39 19.5 39 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 14.739 23.22 C 14.538 23.407 14.455 23.689 14.523 23.954 C 14.591 24.22 14.799 24.428 15.064 24.495 C 15.33 24.563 15.612 24.481 15.799 24.28 L 15.269 23.75 Z M 24.019 15.75 C 24.019 15.336 23.683 15 23.269 15 L 16.519 15 C 16.105 15 15.769 15.336 15.769 15.75 C 15.769 16.164 16.105 16.5 16.519 16.5 L 22.519 16.5 L 22.519 22.5 C 22.519 22.914 22.855 23.25 23.269 23.25 C 23.683 23.25 24.019 22.914 24.019 22.5 Z M 15.269 23.75 L 15.799 24.28 L 23.799 16.28 L 23.269 15.75 L 22.739 15.22 L 14.739 23.22 Z" fill="rgb(88,178,127)" opacity="0.98"></path></g></svg>`,
                            },
                          },
                          g,
                          S
                        ),
                        children: [
                          d(I, {
                            className: `framer-gld8ta`,
                            layoutDependency: O,
                            layoutId: `vSatVgbBk`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><path d="M 19.5 39 C 8.73 39 0 30.27 0 19.5 L 0 19.5 C 0 8.73 8.73 0 19.5 0 L 19.5 0 C 30.27 0 39 8.73 39 19.5 L 39 19.5 C 39 30.27 30.27 39 19.5 39 Z" fill="rgb(3,5,7)"></path></svg>`,
                            withExternalLayout: !0,
                            ...Eo(
                              {
                                "RxZKainOV-hover": {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39" overflow="visible"><path d="M 19.5 39 C 8.73 39 0 30.27 0 19.5 L 0 19.5 C 0 8.73 8.73 0 19.5 0 L 19.5 0 C 30.27 0 39 8.73 39 19.5 L 39 19.5 C 39 30.27 30.27 39 19.5 39 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
                                },
                              },
                              g,
                              S
                            ),
                          }),
                          m(I, {
                            className: `framer-qyzq84`,
                            layoutDependency: O,
                            layoutId: `wWavZbOKg`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.519 9.519" overflow="visible"><path d="M 0.239 8.22 C 0.038 8.407 -0.045 8.689 0.023 8.954 C 0.091 9.22 0.299 9.428 0.564 9.495 C 0.83 9.563 1.112 9.481 1.299 9.28 L 0.769 8.75 Z M 9.519 0.75 C 9.519 0.336 9.183 0 8.769 0 L 2.019 0 C 1.605 0 1.269 0.336 1.269 0.75 C 1.269 1.164 1.605 1.5 2.019 1.5 L 8.019 1.5 L 8.019 7.5 C 8.019 7.914 8.355 8.25 8.769 8.25 C 9.183 8.25 9.519 7.914 9.519 7.5 Z M 0.769 8.75 L 1.299 9.28 L 9.299 1.28 L 8.769 0.75 L 8.239 0.22 L 0.239 8.22 Z" fill="rgb(88,178,127)" opacity="0.98"></path></svg>`,
                            withExternalLayout: !0,
                            children: [
                              d(I, {
                                className: `framer-16cvlvn`,
                                layoutDependency: O,
                                layoutId: `bIC8zoigA`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.299 1.299" overflow="visible"><path d="M 0.239 0 C 0.038 0.187 -0.045 0.469 0.023 0.734 C 0.091 1 0.299 1.208 0.564 1.275 C 0.83 1.343 1.112 1.261 1.299 1.06 L 0.769 0.53 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              d(I, {
                                className: `framer-1cdd5n8`,
                                layoutDependency: O,
                                layoutId: `N2kf510ZL`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.25 8.25" overflow="visible"><path d="M 8.25 0.75 C 8.25 0.336 7.914 0 7.5 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 C 0 1.164 0.336 1.5 0.75 1.5 L 6.75 1.5 L 6.75 7.5 C 6.75 7.914 7.086 8.25 7.5 8.25 C 7.914 8.25 8.25 7.914 8.25 7.5 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              d(I, {
                                className: `framer-qdg838`,
                                layoutDependency: O,
                                layoutId: `eTjj2iTDs`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.06 9.06" overflow="visible"><path d="M 0.53 8.53 L 1.06 9.06 L 9.06 1.06 L 8.53 0.53 L 8 0 L 0 8 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-riFww.framer-3vxs8e, .framer-riFww .framer-3vxs8e { display: block; }`,
          `.framer-riFww.framer-1ylgcnl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 3px 3px 3px 20px; position: relative; width: min-content; }`,
          `.framer-riFww .framer-5dtqit { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-riFww .framer-k5s0z8 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-riFww .framer-10p1n26 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-riFww .framer-jz43t { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-riFww .framer-igy3s0 { height: 39px; position: relative; width: 39px; }`,
          `.framer-riFww .framer-gld8ta { height: 39px; left: 0px; position: absolute; top: 0px; width: 39px; }`,
          `.framer-riFww .framer-qyzq84 { height: 10px; left: 15px; position: absolute; top: 15px; width: 10px; }`,
          `.framer-riFww .framer-16cvlvn { height: 2px; left: 0px; position: absolute; top: 8px; width: 2px; }`,
          `.framer-riFww .framer-1cdd5n8 { height: 9px; left: 2px; position: absolute; top: 0px; width: 9px; }`,
          `.framer-riFww .framer-qdg838 { height: 9px; left: 0px; position: absolute; top: 0px; width: 9px; }`,
          `.framer-riFww.framer-v-u6nkww.framer-1ylgcnl, .framer-riFww.framer-v-wz3ems.framer-1ylgcnl, .framer-riFww.framer-v-knp2z.framer-1ylgcnl { cursor: unset; padding: 13px 20px 13px 20px; }`,
          `.framer-riFww.framer-v-u6nkww .framer-10p1n26 { overflow: hidden; }`,
          `.framer-riFww.framer-v-rrk0v9.framer-1ylgcnl { cursor: unset; }`,
          `.framer-riFww[data-border="true"]::after, .framer-riFww [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-riFww`
      )),
      (Vo.displayName = `Button 2`),
      (Vo.defaultProps = { height: 45, width: 170 }),
      w(Vo, {
        variant: {
          options: [`RxZKainOV`, `vmYQrhRVE`, `VZ5qRVO7X`, `F3U9MaNHg`, `NqtdM__YN`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      j(
        Vo,
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
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Uo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es = t(() => {
    (h(),
      M(),
      C(),
      _(),
      (Wo = [`XgTwuZW_5`, `Zl6PEJcCK`, `MQwujG7Ik`, `DnO7I7Oo4`, `c9pU1TSvx`]),
      (Go = `framer-dP3QC`),
      (Ko = {
        c9pU1TSvx: `framer-v-qvjes9`,
        DnO7I7Oo4: `framer-v-zz5154`,
        MQwujG7Ik: `framer-v-lfcth9`,
        XgTwuZW_5: `framer-v-1eywobb`,
        Zl6PEJcCK: `framer-v-1on8136`,
      }),
      (qo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jo = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Yo = {
        facebook: `XgTwuZW_5`,
        instagram: `MQwujG7Ik`,
        Linkedin: `DnO7I7Oo4`,
        twitter: `Zl6PEJcCK`,
        Youtube: `c9pU1TSvx`,
      }),
      (Xo = x.create(c)),
      (Zo = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        j77qr9keM: n ?? i.j77qr9keM,
        variant: Yo[i.variant] ?? i.variant ?? `XgTwuZW_5`,
      })),
      (Qo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($o = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let { style: c, className: l, layoutId: u, variant: f, j77qr9keM: p, ...h } = Zo(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ue({
              cycleOrder: Wo,
              defaultVariant: `XgTwuZW_5`,
              ref: r,
              variant: f,
              variantClassNames: Ko,
            }),
            O = Qo(e, D),
            k = E(Go),
            A = () => ![`Zl6PEJcCK`, `MQwujG7Ik`, `DnO7I7Oo4`, `c9pU1TSvx`].includes(g),
            j = () => g === `Zl6PEJcCK`,
            M = () => g === `MQwujG7Ik`,
            N = () => g === `DnO7I7Oo4`,
            P = () => g === `c9pU1TSvx`;
          return d(ee, {
            id: u ?? i,
            children: d(Xo, {
              animate: D,
              initial: !1,
              children: d(Jo, {
                value: qo,
                children: m(x.div, {
                  ...h,
                  ...b,
                  className: E(k, `framer-1eywobb`, l, _),
                  "data-framer-name": `facebook`,
                  layoutDependency: O,
                  layoutId: `XgTwuZW_5`,
                  ref: r,
                  style: { ...c },
                  ...Uo(
                    {
                      c9pU1TSvx: { "data-framer-name": `Youtube` },
                      DnO7I7Oo4: { "data-framer-name": `Linkedin` },
                      MQwujG7Ik: { "data-framer-name": `instagram` },
                      Zl6PEJcCK: { "data-framer-name": `twitter` },
                    },
                    g,
                    S
                  ),
                  children: [
                    A() &&
                      d(se, {
                        href: p,
                        motionChild: !0,
                        nodeId: `fivp8Kuul`,
                        openInNewTab: !1,
                        scopeId: `gMbbUwpt2`,
                        children: d(x.a, {
                          className: `framer-15h5014 framer-12xuso4`,
                          layoutDependency: O,
                          layoutId: `fivp8Kuul`,
                          children: m(I, {
                            className: `framer-izf6zw`,
                            layoutDependency: O,
                            layoutId: `ci8FVrkTS`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 0 C 6.715 0 0 6.715 0 15 C 0 23.285 6.715 30 15 30 C 23.285 30 30 23.285 30 15 C 30 6.715 23.285 0 15 0 Z M 18.31 12.457 L 18.14 14.701 L 15.838 14.701 L 15.838 22.494 L 12.932 22.494 L 12.932 14.701 L 11.379 14.701 L 11.379 12.457 L 12.932 12.457 L 12.932 10.951 C 12.932 10.289 12.949 9.264 13.43 8.625 C 13.94 7.951 14.637 7.495 15.838 7.495 C 17.795 7.495 18.615 7.775 18.615 7.775 L 18.229 10.072 C 18.229 10.072 17.584 9.885 16.981 9.885 C 16.377 9.885 15.838 10.102 15.838 10.705 L 15.838 12.457 L 18.311 12.457 Z" fill="rgb(255,255,255)"></path></svg>`,
                            withExternalLayout: !0,
                            children: [
                              d(I, {
                                className: `framer-10mkiu9`,
                                layoutDependency: O,
                                layoutId: `RGwLAQ01p`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 0 C 6.715 0 0 6.715 0 15 C 0 23.285 6.715 30 15 30 C 23.285 30 30 23.285 30 15 C 30 6.715 23.285 0 15 0 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              d(I, {
                                className: `framer-1oqwnhs`,
                                layoutDependency: O,
                                layoutId: `cuFK6g1jN`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.236 14.999" overflow="visible"><path d="M 6.931 4.962 L 6.761 7.206 L 4.459 7.206 L 4.459 14.999 L 1.553 14.999 L 1.553 7.206 L 0 7.206 L 0 4.962 L 1.553 4.962 L 1.553 3.456 C 1.553 2.794 1.57 1.769 2.051 1.13 C 2.561 0.456 3.258 0 4.459 0 C 6.416 0 7.236 0.28 7.236 0.28 L 6.85 2.577 C 6.85 2.577 6.205 2.39 5.602 2.39 C 4.998 2.39 4.459 2.607 4.459 3.21 L 4.459 4.962 L 6.932 4.962 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      }),
                    j() &&
                      d(x.div, {
                        className: `framer-1on7i0v`,
                        layoutDependency: O,
                        layoutId: `ld8oFpR_s`,
                        children:
                          j() &&
                          m(I, {
                            className: `framer-1ffq9zt`,
                            layoutDependency: O,
                            layoutId: `cc8Mr20em`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"></svg>`,
                            withExternalLayout: !0,
                            ...Uo(
                              {
                                Zl6PEJcCK: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><g><path d="M 0 0 L 30 0 L 30 30 L 0 30 Z" fill="transparent"></path><path d="M 15 0 C 23.284 0 30 6.716 30 15 C 30 23.284 23.284 30 15 30 C 6.716 30 0 23.284 0 15 C 0 6.716 6.716 0 15 0 Z M 13.284 15.923 L 7.71 22.382 L 8.944 22.382 L 13.831 16.718 L 17.716 22.382 L 22.383 22.382 L 16.432 13.706 L 21.684 7.619 L 20.45 7.619 L 15.884 12.909 L 12.254 7.619 L 7.588 7.619 Z M 20.907 21.605 L 18.124 21.605 L 9.063 8.395 L 11.847 8.395 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                },
                              },
                              g,
                              S
                            ),
                            children: [
                              d(I, {
                                className: `framer-1ckqdyg`,
                                layoutDependency: O,
                                layoutId: `gdpYaIwm3`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 0 0 L 30 0 L 30 30 L 0 30 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              m(I, {
                                className: `framer-kgo0lr`,
                                layoutDependency: O,
                                layoutId: `zKtdofK54`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 0 C 23.284 0 30 6.716 30 15 C 30 23.284 23.284 30 15 30 C 6.716 30 0 23.284 0 15 C 0 6.716 6.716 0 15 0 Z M 13.284 15.923 L 7.71 22.382 L 8.944 22.382 L 13.831 16.718 L 17.716 22.382 L 22.383 22.382 L 16.432 13.706 L 21.684 7.619 L 20.45 7.619 L 15.884 12.909 L 12.254 7.619 L 7.588 7.619 Z M 20.907 21.605 L 18.124 21.605 L 9.063 8.395 L 11.847 8.395 Z" fill="rgb(255,255,255)"></path></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  d(I, {
                                    className: `framer-193aokc`,
                                    layoutDependency: O,
                                    layoutId: `pb9lUBd9d`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 0 C 23.284 0 30 6.716 30 15 C 30 23.284 23.284 30 15 30 C 6.716 30 0 23.284 0 15 C 0 6.716 6.716 0 15 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-1o3nlvn`,
                                    layoutDependency: O,
                                    layoutId: `FDoqUx6tu`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.795 14.763" overflow="visible"><path d="M 5.696 8.304 L 0.122 14.763 L 1.356 14.763 L 6.243 9.099 L 10.128 14.763 L 14.795 14.763 L 8.844 6.087 L 14.096 0 L 12.862 0 L 8.296 5.29 L 4.666 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-16ltwu5`,
                                    layoutDependency: O,
                                    layoutId: `Fow5strH2`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.844 13.21" overflow="visible"><path d="M 11.844 13.21 L 9.061 13.21 L 0 0 L 2.784 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    M() &&
                      d(x.div, {
                        className: `framer-15o5gcj`,
                        layoutDependency: O,
                        layoutId: `B_EONfdJc`,
                        children:
                          M() &&
                          m(I, {
                            className: `framer-mhtpxp`,
                            layoutDependency: O,
                            layoutId: `eww1aB5_p`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"></svg>`,
                            withExternalLayout: !0,
                            ...Uo(
                              {
                                MQwujG7Ik: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><g><path d="M 0 15 C 0 6.716 6.716 0 15 0 C 23.284 0 30 6.716 30 15 C 30 23.284 23.284 30 15 30 C 6.716 30 0 23.284 0 15 Z" fill="transparent"></path><path d="M 16.015 0.03 C 23.627 0.03 29.855 6.258 29.855 13.87 L 29.855 16.032 C 29.855 23.644 23.627 29.872 16.015 29.872 L 13.853 29.872 C 6.241 29.872 0.013 23.644 0.013 16.032 L 0.013 13.87 C 0.014 6.258 6.242 0.03 13.854 0.03 L 16.016 0.03 Z M 15.206 7.531 L 15.014 7.531 C 13.41 7.531 11.807 7.584 11.807 7.584 C 9.465 7.584 7.567 9.482 7.567 11.824 C 7.567 11.824 7.518 13.201 7.514 14.678 L 7.514 14.872 C 7.514 16.526 7.567 18.238 7.567 18.238 C 7.567 20.58 9.465 22.478 11.807 22.478 C 11.807 22.478 13.307 22.531 14.855 22.531 C 16.509 22.531 18.273 22.478 18.273 22.478 C 19.387 22.488 20.458 22.05 21.246 21.263 C 22.033 20.475 22.471 19.404 22.461 18.29 C 22.461 18.29 22.514 16.599 22.514 14.978 L 22.513 14.598 C 22.505 13.143 22.461 11.771 22.461 11.771 C 22.471 10.657 22.033 9.586 21.245 8.799 C 20.458 8.012 19.387 7.574 18.273 7.584 C 18.273 7.584 16.747 7.534 15.206 7.531 Z M 15.014 8.881 C 16.328 8.881 18.014 8.924 18.014 8.924 C 19.934 8.924 21.12 10.11 21.12 12.03 C 21.12 12.03 21.164 13.687 21.164 14.987 C 21.164 16.317 21.12 18.031 21.12 18.031 C 21.12 19.951 19.934 21.137 18.014 21.137 C 18.014 21.137 16.524 21.174 15.23 21.18 L 14.883 21.18 C 13.613 21.18 12.066 21.137 12.066 21.137 C 10.146 21.137 8.907 19.898 8.907 17.978 C 8.907 17.978 8.864 16.258 8.864 14.9 C 8.864 13.63 8.907 12.03 8.907 12.03 C 8.907 10.11 10.146 8.924 12.067 8.924 C 12.067 8.924 13.699 8.881 15.014 8.881 Z M 15.014 11.189 C 12.892 11.189 11.172 12.909 11.172 15.031 C 11.172 17.153 12.892 18.873 15.014 18.873 C 17.136 18.873 18.856 17.153 18.856 15.031 C 18.856 12.909 17.136 11.189 15.014 11.189 Z M 15.014 12.531 C 16.395 12.531 17.514 13.65 17.514 15.031 C 17.514 16.412 16.395 17.531 15.014 17.531 C 13.633 17.531 12.514 16.412 12.514 15.031 C 12.514 13.65 13.633 12.531 15.014 12.531 Z M 19.039 10.123 C 18.792 10.124 18.556 10.222 18.382 10.397 C 18.208 10.572 18.11 10.809 18.111 11.056 C 18.11 11.303 18.208 11.539 18.382 11.714 C 18.556 11.889 18.792 11.987 19.039 11.988 C 19.286 11.988 19.522 11.889 19.697 11.715 C 19.871 11.54 19.969 11.303 19.968 11.056 C 19.969 10.809 19.871 10.572 19.697 10.397 C 19.523 10.222 19.286 10.123 19.039 10.123 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                },
                              },
                              g,
                              S
                            ),
                            children: [
                              d(I, {
                                className: `framer-13rbphm`,
                                layoutDependency: O,
                                layoutId: `gZnGh8UcQ`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 0 15 C 0 6.716 6.716 0 15 0 C 23.284 0 30 6.716 30 15 C 30 23.284 23.284 30 15 30 C 6.716 30 0 23.284 0 15 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              m(I, {
                                className: `framer-i3u4yd`,
                                layoutDependency: O,
                                layoutId: `VGrwQ0Zdx`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.842 29.842" overflow="visible"><path d="M 16.002 0 C 23.614 0 29.842 6.228 29.842 13.84 L 29.842 16.002 C 29.842 23.614 23.614 29.842 16.002 29.842 L 13.84 29.842 C 6.228 29.842 0 23.614 0 16.002 L 0 13.84 C 0.001 6.228 6.229 0 13.841 0 L 16.003 0 Z M 15.193 7.501 L 15.001 7.501 C 13.397 7.501 11.794 7.554 11.794 7.554 C 9.452 7.554 7.554 9.452 7.554 11.794 C 7.554 11.794 7.505 13.171 7.501 14.648 L 7.501 14.842 C 7.501 16.496 7.554 18.208 7.554 18.208 C 7.554 20.55 9.452 22.448 11.794 22.448 C 11.794 22.448 13.294 22.501 14.842 22.501 C 16.496 22.501 18.26 22.448 18.26 22.448 C 19.374 22.458 20.445 22.02 21.233 21.233 C 22.02 20.445 22.458 19.374 22.448 18.26 C 22.448 18.26 22.501 16.569 22.501 14.948 L 22.5 14.568 C 22.492 13.113 22.448 11.741 22.448 11.741 C 22.458 10.627 22.02 9.556 21.232 8.769 C 20.445 7.982 19.374 7.544 18.26 7.554 C 18.26 7.554 16.734 7.504 15.193 7.501 Z M 15.001 8.851 C 16.315 8.851 18.001 8.894 18.001 8.894 C 19.921 8.894 21.107 10.08 21.107 12 C 21.107 12 21.151 13.657 21.151 14.957 C 21.151 16.287 21.107 18.001 21.107 18.001 C 21.107 19.921 19.921 21.107 18.001 21.107 C 18.001 21.107 16.511 21.144 15.217 21.15 L 14.87 21.15 C 13.6 21.15 12.053 21.107 12.053 21.107 C 10.133 21.107 8.894 19.868 8.894 17.948 C 8.894 17.948 8.851 16.228 8.851 14.87 C 8.851 13.6 8.894 12 8.894 12 C 8.894 10.08 10.133 8.894 12.054 8.894 C 12.054 8.894 13.686 8.851 15.001 8.851 Z M 15.001 11.159 C 12.879 11.159 11.159 12.879 11.159 15.001 C 11.159 17.123 12.879 18.843 15.001 18.843 C 17.123 18.843 18.843 17.123 18.843 15.001 C 18.843 12.879 17.123 11.159 15.001 11.159 Z M 15.001 12.501 C 16.382 12.501 17.501 13.62 17.501 15.001 C 17.501 16.382 16.382 17.501 15.001 17.501 C 13.62 17.501 12.501 16.382 12.501 15.001 C 12.501 13.62 13.62 12.501 15.001 12.501 Z M 19.026 10.093 C 18.779 10.094 18.543 10.192 18.369 10.367 C 18.195 10.542 18.097 10.779 18.098 11.026 C 18.097 11.273 18.195 11.509 18.369 11.684 C 18.543 11.859 18.779 11.957 19.026 11.958 C 19.273 11.958 19.509 11.859 19.684 11.685 C 19.858 11.51 19.956 11.273 19.955 11.026 C 19.956 10.779 19.858 10.542 19.684 10.367 C 19.51 10.192 19.273 10.093 19.026 10.093 Z" fill="rgb(255,255,255)"></path></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  d(I, {
                                    className: `framer-d4egq2`,
                                    layoutDependency: O,
                                    layoutId: `W4d6ryJyD`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.842 29.842" overflow="visible"><path d="M 16.002 0 C 23.614 0 29.842 6.228 29.842 13.84 L 29.842 16.002 C 29.842 23.614 23.614 29.842 16.002 29.842 L 13.84 29.842 C 6.228 29.842 0 23.614 0 16.002 L 0 13.84 C 0.001 6.228 6.229 0 13.841 0 L 16.003 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-o4pq2n`,
                                    layoutDependency: O,
                                    layoutId: `YRDt9lvcF`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 7.692 0 L 7.5 0 C 5.896 0 4.293 0.053 4.293 0.053 C 1.951 0.053 0.053 1.951 0.053 4.293 C 0.053 4.293 0.004 5.67 0 7.147 L 0 7.341 C 0 8.995 0.053 10.707 0.053 10.707 C 0.053 13.049 1.951 14.947 4.293 14.947 C 4.293 14.947 5.793 15 7.341 15 C 8.995 15 10.759 14.947 10.759 14.947 C 11.873 14.957 12.944 14.519 13.732 13.732 C 14.519 12.944 14.957 11.873 14.947 10.759 C 14.947 10.759 15 9.068 15 7.447 L 14.999 7.067 C 14.991 5.612 14.947 4.24 14.947 4.24 C 14.957 3.126 14.519 2.055 13.731 1.268 C 12.944 0.481 11.873 0.043 10.759 0.053 C 10.759 0.053 9.233 0.003 7.692 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-1bj6jur`,
                                    layoutDependency: O,
                                    layoutId: `LpxAMf1aO`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.3 12.299" overflow="visible"><path d="M 6.15 0 C 7.464 0 9.15 0.043 9.15 0.043 C 11.07 0.043 12.256 1.229 12.256 3.149 C 12.256 3.149 12.3 4.806 12.3 6.106 C 12.3 7.436 12.256 9.15 12.256 9.15 C 12.256 11.07 11.07 12.256 9.15 12.256 C 9.15 12.256 7.66 12.293 6.366 12.299 L 6.019 12.299 C 4.749 12.299 3.202 12.256 3.202 12.256 C 1.282 12.256 0.043 11.017 0.043 9.097 C 0.043 9.097 0 7.377 0 6.019 C 0 4.749 0.043 3.149 0.043 3.149 C 0.043 1.229 1.282 0.043 3.203 0.043 C 3.203 0.043 4.835 0 6.15 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-uqm5jl`,
                                    layoutDependency: O,
                                    layoutId: `jAlavhXWh`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.684 7.684" overflow="visible"><path d="M 3.842 0 C 1.72 0 0 1.72 0 3.842 C 0 5.964 1.72 7.684 3.842 7.684 C 5.964 7.684 7.684 5.964 7.684 3.842 C 7.684 1.72 5.964 0 3.842 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-ikllaf`,
                                    layoutDependency: O,
                                    layoutId: `t7kBWjxNP`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 5" overflow="visible"><path d="M 2.5 0 C 3.881 0 5 1.119 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 C 0 1.119 1.119 0 2.5 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-s9w5pr`,
                                    layoutDependency: O,
                                    layoutId: `lvNs3lJit`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.857 1.865" overflow="visible"><path d="M 0.928 0 C 0.681 0.001 0.445 0.099 0.271 0.274 C 0.097 0.449 -0.001 0.686 0 0.933 C -0.001 1.18 0.097 1.416 0.271 1.591 C 0.445 1.766 0.681 1.864 0.928 1.865 C 1.175 1.865 1.411 1.766 1.586 1.592 C 1.76 1.417 1.858 1.18 1.857 0.933 C 1.858 0.686 1.76 0.449 1.586 0.274 C 1.412 0.099 1.175 0 0.928 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    N() &&
                      d(x.div, {
                        className: `framer-1fiw72u`,
                        layoutDependency: O,
                        layoutId: `i7zvUM9yT`,
                        children:
                          N() &&
                          m(I, {
                            className: `framer-1nwi7nc`,
                            layoutDependency: O,
                            layoutId: `YtZcWsDiv`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"></svg>`,
                            withExternalLayout: !0,
                            ...Uo(
                              {
                                DnO7I7Oo4: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><g><path d="M 0 0 L 30 0 L 30 30 L 0 30 Z" fill="transparent"></path><path d="M 14.92 0 C 23.16 0 29.84 6.68 29.84 14.92 C 29.84 23.16 23.16 29.84 14.92 29.84 C 6.68 29.84 0 23.16 0 14.92 C 0 6.68 6.68 0 14.92 0 Z M 8.666 20.667 L 11.833 20.667 L 11.833 12.434 L 8.666 12.434 Z M 18.219 11.965 C 16.428 11.965 15.633 13.359 15.633 13.359 L 15.633 12.434 L 13.1 12.434 L 13.1 20.667 L 15.633 20.667 L 15.633 16.234 C 15.633 15.047 16.253 14.34 17.301 14.34 C 18.263 14.34 18.8 15.018 18.8 16.234 L 18.8 20.667 L 21.333 20.667 L 21.333 15.32 C 21.333 13.058 20.01 11.965 18.219 11.965 Z M 10.213 8 C 9.359 8 8.666 8.698 8.666 9.558 C 8.666 10.418 9.359 11.116 10.213 11.116 C 11.067 11.116 11.759 10.418 11.759 9.558 C 11.759 8.698 11.066 8 10.213 8 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                },
                              },
                              g,
                              S
                            ),
                            children: [
                              d(I, {
                                className: `framer-1sqe9z1`,
                                layoutDependency: O,
                                layoutId: `hxWSKXbT3`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 0 0 L 30 0 L 30 30 L 0 30 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              m(I, {
                                className: `framer-sqjhdr`,
                                layoutDependency: O,
                                layoutId: `iXEs9qWg2`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.84 29.84" overflow="visible"><path d="M 14.92 0 C 23.16 0 29.84 6.68 29.84 14.92 C 29.84 23.16 23.16 29.84 14.92 29.84 C 6.68 29.84 0 23.16 0 14.92 C 0 6.68 6.68 0 14.92 0 Z M 8.666 20.667 L 11.833 20.667 L 11.833 12.434 L 8.666 12.434 Z M 18.219 11.965 C 16.428 11.965 15.633 13.359 15.633 13.359 L 15.633 12.434 L 13.1 12.434 L 13.1 20.667 L 15.633 20.667 L 15.633 16.234 C 15.633 15.047 16.253 14.34 17.301 14.34 C 18.263 14.34 18.8 15.018 18.8 16.234 L 18.8 20.667 L 21.333 20.667 L 21.333 15.32 C 21.333 13.058 20.01 11.965 18.219 11.965 Z M 10.213 8 C 9.359 8 8.666 8.698 8.666 9.558 C 8.666 10.418 9.359 11.116 10.213 11.116 C 11.067 11.116 11.759 10.418 11.759 9.558 C 11.759 8.698 11.066 8 10.213 8 Z" fill="rgb(255,255,255)"></path></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  d(I, {
                                    className: `framer-d8n74n`,
                                    layoutDependency: O,
                                    layoutId: `Q7UMjwpE7`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.84 29.84" overflow="visible"><path d="M 14.92 0 C 23.16 0 29.84 6.68 29.84 14.92 C 29.84 23.16 23.16 29.84 14.92 29.84 C 6.68 29.84 0 23.16 0 14.92 C 0 6.68 6.68 0 14.92 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-1q1d9cu`,
                                    layoutDependency: O,
                                    layoutId: `cppeuSB3E`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.167 8.233" overflow="visible"><path d="M 0 8.233 L 3.167 8.233 L 3.167 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-7uh0ls`,
                                    layoutDependency: O,
                                    layoutId: `loZPBD_AA`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.233 8.702" overflow="visible"><path d="M 5.119 0 C 3.328 0 2.533 1.394 2.533 1.394 L 2.533 0.469 L 0 0.469 L 0 8.702 L 2.533 8.702 L 2.533 4.269 C 2.533 3.082 3.153 2.375 4.201 2.375 C 5.163 2.375 5.7 3.053 5.7 4.269 L 5.7 8.702 L 8.233 8.702 L 8.233 3.355 C 8.233 1.093 6.91 0 5.119 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-18s1tsm`,
                                    layoutDependency: O,
                                    layoutId: `VNNun3ryU`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.093 3.116" overflow="visible"><path d="M 1.547 0 C 0.693 0 0 0.698 0 1.558 C 0 2.418 0.693 3.116 1.547 3.116 C 2.401 3.116 3.093 2.418 3.093 1.558 C 3.093 0.698 2.4 0 1.547 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    P() &&
                      d(x.div, {
                        className: `framer-13m4ga7`,
                        layoutDependency: O,
                        layoutId: `cBwTbresM`,
                        children:
                          P() &&
                          m(I, {
                            className: `framer-ctjzpi`,
                            layoutDependency: O,
                            layoutId: `jqj4W4fp5`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"></svg>`,
                            withExternalLayout: !0,
                            ...Uo(
                              {
                                c9pU1TSvx: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><g><path d="M 0 0 L 30 0 L 30 30 L 0 30 Z" fill="transparent"></path><path d="M 13.002 17.889 L 17.912 15.006 L 13.002 12.123 Z" fill="rgb(255,255,255)"></path><path d="M 15 0 C 6.715 0 0 6.715 0 15 C 0 23.285 6.715 30 15 30 C 23.285 30 30 23.285 30 15 C 30 6.715 23.285 0 15 0 Z M 22.5 17.684 C 22.5 20.268 19.916 20.268 19.916 20.268 L 10.084 20.268 C 7.5 20.268 7.5 17.684 7.5 17.684 L 7.5 12.322 C 7.5 9.738 10.084 9.738 10.084 9.738 L 19.916 9.738 C 22.5 9.738 22.5 12.322 22.5 12.322 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                                },
                              },
                              g,
                              S
                            ),
                            children: [
                              d(I, {
                                className: `framer-u5ezq3`,
                                layoutDependency: O,
                                layoutId: `AiMHmUMu3`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 0 0 L 30 0 L 30 30 L 0 30 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              d(I, {
                                className: `framer-kuml39`,
                                layoutDependency: O,
                                layoutId: `LrFWpB8j2`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.91 5.766" overflow="visible"><path d="M 0 5.766 L 4.91 2.883 L 0 0 Z" fill="rgb(255,255,255)"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              m(I, {
                                className: `framer-d0dlki`,
                                layoutDependency: O,
                                layoutId: `ibNffzQC4`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 0 C 6.715 0 0 6.715 0 15 C 0 23.285 6.715 30 15 30 C 23.285 30 30 23.285 30 15 C 30 6.715 23.285 0 15 0 Z M 22.5 17.684 C 22.5 20.268 19.916 20.268 19.916 20.268 L 10.084 20.268 C 7.5 20.268 7.5 17.684 7.5 17.684 L 7.5 12.322 C 7.5 9.738 10.084 9.738 10.084 9.738 L 19.916 9.738 C 22.5 9.738 22.5 12.322 22.5 12.322 Z" fill="rgb(255,255,255)"></path></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  d(I, {
                                    className: `framer-1g2awj6`,
                                    layoutDependency: O,
                                    layoutId: `hHJZ0SGky`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 0 C 6.715 0 0 6.715 0 15 C 0 23.285 6.715 30 15 30 C 23.285 30 30 23.285 30 15 C 30 6.715 23.285 0 15 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  d(I, {
                                    className: `framer-1gq8yns`,
                                    layoutDependency: O,
                                    layoutId: `hL8r2RzM7`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 10.53" overflow="visible"><path d="M 15 7.946 C 15 10.53 12.416 10.53 12.416 10.53 L 2.584 10.53 C 0 10.53 0 7.946 0 7.946 L 0 2.584 C 0 0 2.584 0 2.584 0 L 12.416 0 C 15 0 15 2.584 15 2.584 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-dP3QC.framer-12xuso4, .framer-dP3QC .framer-12xuso4 { display: block; }`,
          `.framer-dP3QC.framer-1eywobb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dP3QC .framer-15h5014 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-dP3QC .framer-izf6zw, .framer-dP3QC .framer-1ffq9zt, .framer-dP3QC .framer-mhtpxp, .framer-dP3QC .framer-1nwi7nc, .framer-dP3QC .framer-ctjzpi { height: 30px; position: relative; width: 30px; }`,
          `.framer-dP3QC .framer-10mkiu9, .framer-dP3QC .framer-1ckqdyg, .framer-dP3QC .framer-kgo0lr, .framer-dP3QC .framer-193aokc, .framer-dP3QC .framer-13rbphm, .framer-dP3QC .framer-i3u4yd, .framer-dP3QC .framer-d4egq2, .framer-dP3QC .framer-1sqe9z1, .framer-dP3QC .framer-sqjhdr, .framer-dP3QC .framer-d8n74n, .framer-dP3QC .framer-u5ezq3, .framer-dP3QC .framer-d0dlki, .framer-dP3QC .framer-1g2awj6 { height: 30px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
          `.framer-dP3QC .framer-1oqwnhs { height: 15px; left: 12px; position: absolute; top: 8px; width: 7px; }`,
          `.framer-dP3QC .framer-1on7i0v, .framer-dP3QC .framer-15o5gcj, .framer-dP3QC .framer-1fiw72u, .framer-dP3QC .framer-13m4ga7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 30px; min-width: 30px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dP3QC .framer-1o3nlvn, .framer-dP3QC .framer-o4pq2n { height: 15px; left: 8px; position: absolute; top: 8px; width: 15px; }`,
          `.framer-dP3QC .framer-16ltwu5 { height: 13px; left: 9px; position: absolute; top: 9px; width: 12px; }`,
          `.framer-dP3QC .framer-1bj6jur { height: 13px; left: 9px; position: absolute; top: 9px; width: 13px; }`,
          `.framer-dP3QC .framer-uqm5jl { height: 8px; left: 11px; position: absolute; top: 11px; width: 8px; }`,
          `.framer-dP3QC .framer-ikllaf { height: 5px; left: 13px; position: absolute; top: 13px; width: 5px; }`,
          `.framer-dP3QC .framer-s9w5pr { height: 2px; left: 18px; position: absolute; top: 10px; width: 2px; }`,
          `.framer-dP3QC .framer-1q1d9cu { height: 8px; left: 9px; position: absolute; top: 13px; width: 3px; }`,
          `.framer-dP3QC .framer-7uh0ls { height: 9px; left: 13px; position: absolute; top: 12px; width: 8px; }`,
          `.framer-dP3QC .framer-18s1tsm { height: 3px; left: 9px; position: absolute; top: 8px; width: 3px; }`,
          `.framer-dP3QC .framer-kuml39 { height: 6px; left: 13px; position: absolute; top: 12px; width: 5px; }`,
          `.framer-dP3QC .framer-1gq8yns { height: 11px; left: 8px; position: absolute; top: 10px; width: 15px; }`,
          `.framer-dP3QC.framer-v-1on8136 .framer-1on7i0v, .framer-dP3QC.framer-v-lfcth9 .framer-15o5gcj, .framer-dP3QC.framer-v-zz5154 .framer-1fiw72u, .framer-dP3QC.framer-v-qvjes9 .framer-13m4ga7 { min-height: unset; min-width: unset; }`,
        ],
        `framer-dP3QC`
      )),
      ($o.displayName = `icon`),
      ($o.defaultProps = { height: 30, width: 30 }),
      w($o, {
        variant: {
          options: [`XgTwuZW_5`, `Zl6PEJcCK`, `MQwujG7Ik`, `DnO7I7Oo4`, `c9pU1TSvx`],
          optionTitles: [`facebook`, `twitter`, `instagram`, `Linkedin`, `Youtube`],
          title: `Variant`,
          type: z.Enum,
        },
        j77qr9keM: { title: `Link`, type: z.Link },
      }),
      j($o, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  ts,
  ns,
  rs,
  is = t(() => {
    (M(),
      T.loadFonts([`FS;Outfit-regular`, `FS;Outfit-bold`]),
      (ts = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (ns = [
        `.framer-ztEw0 .framer-styles-preset-epn0s:not(.rich-text-wrapper), .framer-ztEw0 .framer-styles-preset-epn0s.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-ztEw0 .framer-styles-preset-epn0s:not(.rich-text-wrapper), .framer-ztEw0 .framer-styles-preset-epn0s.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-ztEw0 .framer-styles-preset-epn0s:not(.rich-text-wrapper), .framer-ztEw0 .framer-styles-preset-epn0s.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-ztEw0 .framer-styles-preset-epn0s:not(.rich-text-wrapper), .framer-ztEw0 .framer-styles-preset-epn0s.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-ztEw0 .framer-styles-preset-epn0s:not(.rich-text-wrapper), .framer-ztEw0 .framer-styles-preset-epn0s.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (rs = `framer-ztEw0`));
  });
function as(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var os,
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
  xs = t(() => {
    (h(),
      M(),
      C(),
      _(),
      is(),
      (os = ce(x.div)),
      (ss = { kvzAT6haQ: { hover: !0 }, LgM5n5Mwa: { hover: !0 } }),
      (cs = [`kvzAT6haQ`, `LgM5n5Mwa`]),
      (ls = `framer-hQ0vm`),
      (us = { kvzAT6haQ: `framer-v-1pv0sgb`, LgM5n5Mwa: `framer-v-1iko5jm` }),
      (ds = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (fs = { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: `tween` }),
      (ps = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ms = (e, t) => `translate(-50%, -50%) ${t}`),
      (hs = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (gs = { "Variant 1": `kvzAT6haQ`, "Variant 2": `LgM5n5Mwa` }),
      (_s = x.create(c)),
      (vs = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        d_yg_RU9i: r ?? o.d_yg_RU9i,
        F7HxQNO3s: i ?? o.F7HxQNO3s ?? `Book a call`,
        OuRp3IC4_: e ?? o.OuRp3IC4_,
        variant: gs[o.variant] ?? o.variant ?? `kvzAT6haQ`,
      })),
      (ys = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (bs = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              OuRp3IC4_: h,
              F7HxQNO3s: g,
              d_yg_RU9i: _,
              ...v
            } = vs(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = ue({
              cycleOrder: cs,
              defaultVariant: `kvzAT6haQ`,
              enabledGestures: ss,
              ref: r,
              variant: p,
              variantClassNames: us,
            }),
            j = ys(e, A),
            { activeVariantCallback: M, delay: P } = N(b),
            F = M(async (...e) => {
              if ((O({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            ne = E(ls, rs);
          return d(ee, {
            id: f ?? i,
            children: d(_s, {
              animate: A,
              initial: !1,
              children: d(hs, {
                value: ds,
                children: d(se, {
                  href: _,
                  motionChild: !0,
                  nodeId: `kvzAT6haQ`,
                  openInNewTab: !1,
                  scopeId: `khYYJYYxs`,
                  smoothScroll: !0,
                  children: m(x.a, {
                    ...v,
                    ...w,
                    className: `${E(ne, `framer-1pv0sgb`, u, S)} framer-111827o`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: j,
                    layoutId: `kvzAT6haQ`,
                    onTap: F,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                      borderBottomLeftRadius: 26,
                      borderBottomRightRadius: 26,
                      borderTopLeftRadius: 26,
                      borderTopRightRadius: 26,
                      ...l,
                    },
                    ...as(
                      {
                        "kvzAT6haQ-hover": { "data-framer-name": void 0 },
                        "LgM5n5Mwa-hover": { "data-framer-name": void 0 },
                        LgM5n5Mwa: { "data-framer-name": `Variant 2` },
                      },
                      b,
                      T
                    ),
                    children: [
                      d(os, {
                        __framer__loop: ps,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopPauseOffscreen: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: fs,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1f5y9dh`,
                        layoutDependency: j,
                        layoutId: `u2uYi7U37`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `rgba(0, 0, 0, 0)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          background: `conic-gradient(from 0deg at 50% 50%, var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47)) 128.79310344827587deg, var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47)) 182.91899809966216deg, var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) 271.55172413793105deg, var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) 315deg, var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47)) 346.3783387880068deg)`,
                        },
                        variants: {
                          "kvzAT6haQ-hover": {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                          },
                          LgM5n5Mwa: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(34, 34, 34)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                          },
                        },
                        ...as({ LgM5n5Mwa: { "data-border": !0 } }, b, T),
                      }),
                      d(x.div, {
                        className: `framer-xocgid`,
                        layoutDependency: j,
                        layoutId: `KZSQmTetI`,
                        style: {
                          backgroundColor: `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                          borderBottomLeftRadius: 30,
                          borderBottomRightRadius: 30,
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                          boxShadow: `0px 0.7961918735236395px 0.7961918735236395px -0.9375px rgba(0, 0, 0, 0.18), 0px 2.414506143104518px 2.414506143104518px -1.875px rgba(0, 0, 0, 0.17), 0px 6.382653521484461px 6.382653521484461px -2.8125px rgba(0, 0, 0, 0.15), 0px 20px 20px -3.75px rgba(0, 0, 0, 0.06)`,
                        },
                        variants: {
                          "kvzAT6haQ-hover": {
                            backgroundColor: `var(--token-41178dda-225d-40d3-8d29-08c98d42b5db, rgb(255, 255, 255))`,
                          },
                        },
                      }),
                      d(H, {
                        __fromCanvasComponent: !0,
                        children: d(c, {
                          children: d(x.p, {
                            className: `framer-styles-preset-epn0s`,
                            "data-styles-preset": `xoOzkgVgR`,
                            dir: `auto`,
                            children: `Book a call`,
                          }),
                        }),
                        className: `framer-1v50tm0`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `yZnnMxOc3`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: g,
                        transformTemplate: ms,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-hQ0vm.framer-111827o, .framer-hQ0vm .framer-111827o { display: block; }`,
          `.framer-hQ0vm.framer-1pv0sgb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: 50px; justify-content: center; min-width: 167px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-hQ0vm .framer-1f5y9dh { bottom: -79px; flex: none; left: -95px; overflow: visible; position: absolute; right: -95px; top: -79px; z-index: 1; }`,
          `.framer-hQ0vm .framer-xocgid { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 12px 35px 12px 35px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-hQ0vm .framer-1v50tm0 { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 3; }`,
          `.framer-hQ0vm.framer-v-1pv0sgb.hover .framer-xocgid, .framer-hQ0vm.framer-v-1iko5jm.hover .framer-xocgid { bottom: 3px; left: 3px; right: 3px; top: 3px; width: unset; }`,
          `.framer-hQ0vm.framer-v-1pv0sgb.hover .framer-1v50tm0 { left: 50%; }`,
          ...ns,
          `.framer-hQ0vm[data-border="true"]::after, .framer-hQ0vm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-hQ0vm`
      )),
      (bs.displayName = `Colored CTA Button`),
      (bs.defaultProps = { height: 50, width: 167 }),
      w(bs, {
        variant: {
          options: [`kvzAT6haQ`, `LgM5n5Mwa`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        OuRp3IC4_: { title: `Click`, type: z.EventHandler },
        F7HxQNO3s: {
          defaultValue: `Book a call`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onF7HxQNO3sChange: { changes: `F7HxQNO3s`, type: z.ChangeHandler },
        d_yg_RU9i: { title: `Link`, type: z.Link },
      }),
      j(
        bs,
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
          ...D(ts),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ss(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns = t(() => {
    (h(),
      M(),
      C(),
      _(),
      (Cs = [`zAyU1Ty5A`, `iVvvykN7J`]),
      (ws = `framer-s5M8k`),
      (Ts = { iVvvykN7J: `framer-v-b90phx`, zAyU1Ty5A: `framer-v-1eb2e16` }),
      (Es = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ds = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Os = { "Variant 1": `zAyU1Ty5A`, Phone: `iVvvykN7J` }),
      (ks = x.create(c)),
      (As = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Os[r.variant] ?? r.variant ?? `zAyU1Ty5A`,
      })),
      (js = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ms = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he(),
            c = te(),
            { style: l, className: u, layoutId: f, variant: p, ...m } = As(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = ue({
              cycleOrder: Cs,
              defaultVariant: `zAyU1Ty5A`,
              ref: r,
              variant: p,
              variantClassNames: Ts,
            }),
            T = js(e, w),
            D = E(ws);
          return d(ee, {
            id: f ?? i,
            children: d(ks, {
              animate: w,
              initial: !1,
              children: d(Ds, {
                value: Es,
                children: d(se, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `zAyU1Ty5A`,
                  openInNewTab: !1,
                  scopeId: `O0RzdQnKS`,
                  children: d(ye, {
                    ...m,
                    ...v,
                    as: `a`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 86,
                      intrinsicWidth: 101,
                      loading: O(c?.y || 0),
                      pixelHeight: 86,
                      pixelWidth: 101,
                      sizes: c?.width || `100vw`,
                      src: `../../assets/images/qh3CC4bicGOjGPX2X1w0oDnXs0U.svg`,
                    },
                    className: `${E(D, `framer-1eb2e16`, u, g)} framer-brusv3`,
                    "data-framer-name": `Variant 1`,
                    fitImageDimension: `height`,
                    layoutDependency: T,
                    layoutId: `zAyU1Ty5A`,
                    ref: r,
                    style: { ...l },
                    ...Ss({ iVvvykN7J: { "data-framer-name": `Phone` } }, h, b),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-s5M8k.framer-brusv3, .framer-s5M8k .framer-brusv3 { display: block; }`,
          `.framer-s5M8k.framer-1eb2e16 { height: auto; overflow: visible; position: relative; text-decoration: none; width: 100px; }`,
          `.framer-s5M8k.framer-v-b90phx.framer-1eb2e16 { width: 70px; }`,
        ],
        `framer-s5M8k`
      )),
      (Ms.displayName = `Site Logo`),
      (Ms.defaultProps = { height: 85, width: 100 }),
      w(Ms, {
        variant: {
          options: [`zAyU1Ty5A`, `iVvvykN7J`],
          optionTitles: [`Variant 1`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      j(Ms, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Ps(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs = t(() => {
    (h(),
      M(),
      C(),
      _(),
      (Fs = [`LLdKzB_md`, `T6WMHh0vg`]),
      (Is = `framer-qT4CE`),
      (Ls = { LLdKzB_md: `framer-v-1922msb`, T6WMHh0vg: `framer-v-1v54big` }),
      (Rs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zs = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Bs = { "Close icon": `T6WMHh0vg`, "NAV icon": `LLdKzB_md` }),
      (Vs = x.create(c)),
      (Hs = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        SOyrWEhYa: e ?? i.SOyrWEhYa,
        variant: Bs[i.variant] ?? i.variant ?? `LLdKzB_md`,
      })),
      (Us = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ws = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let { style: c, className: l, layoutId: u, variant: f, SOyrWEhYa: p, ...h } = Hs(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ue({
              cycleOrder: Fs,
              defaultVariant: `LLdKzB_md`,
              ref: r,
              variant: f,
              variantClassNames: Ls,
            }),
            O = Us(e, D),
            { activeVariantCallback: k, delay: A } = N(g),
            j = k(async (...e) => {
              if ((w({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            M = E(Is),
            P = () => g !== `T6WMHh0vg`;
          return d(ee, {
            id: u ?? i,
            children: d(Vs, {
              animate: D,
              initial: !1,
              children: d(zs, {
                value: Rs,
                children: d(x.div, {
                  ...h,
                  ...b,
                  className: E(M, `framer-1922msb`, l, _),
                  "data-framer-name": `NAV icon`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `LLdKzB_md`,
                  onTap: j,
                  ref: r,
                  style: { rotate: 0, ...c },
                  variants: { T6WMHh0vg: { rotate: 45 } },
                  ...Ps({ T6WMHh0vg: { "data-framer-name": `Close icon` } }, g, S),
                  children: m(I, {
                    className: `framer-dyxd0i`,
                    layoutDependency: O,
                    layoutId: `F2IxUH2UO`,
                    requiresOverflowVisible: !0,
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 18" overflow="visible"><path d="M 4 6 L 27 6 M 0 0 L 27 0 M 0 18 L 27 18 M 4 12 L 27 12" fill="transparent" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                    withExternalLayout: !0,
                    ...Ps(
                      {
                        T6WMHh0vg: {
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" overflow="visible"><path d="M 0 11.556 L 24 11.556 M 11.556 0 L 11.556 24" fill="transparent" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                        },
                      },
                      g,
                      S
                    ),
                    children: [
                      P() &&
                        d(I, {
                          className: `framer-1euigf3`,
                          layoutDependency: O,
                          layoutId: `MFBdQDh7A`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 1" overflow="visible"><path d="M 0 0 L 23 0" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      d(I, {
                        className: `framer-1fclrxv`,
                        layoutDependency: O,
                        layoutId: `vl6zGFRgm`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 1" overflow="visible"><path d="M 0 0 L 27 0" fill="transparent"></path></svg>`,
                        withExternalLayout: !0,
                        ...Ps(
                          {
                            T6WMHh0vg: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 1" overflow="visible"><path d="M 0 0 L 24 0" fill="transparent"></path></svg>`,
                            },
                          },
                          g,
                          S
                        ),
                      }),
                      d(I, {
                        className: `framer-40j0c4`,
                        layoutDependency: O,
                        layoutId: `i9LwOa6zE`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 1" overflow="visible"><path d="M 0 0 L 27 0" fill="transparent"></path></svg>`,
                        variants: { T6WMHh0vg: { rotate: 90 } },
                        withExternalLayout: !0,
                        ...Ps(
                          {
                            T6WMHh0vg: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 1" overflow="visible"><path d="M 0 0 L 24 0" fill="transparent"></path></svg>`,
                            },
                          },
                          g,
                          S
                        ),
                      }),
                      P() &&
                        d(I, {
                          className: `framer-1q2ukl6`,
                          layoutDependency: O,
                          layoutId: `odyTjl8rt`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 1" overflow="visible"><path d="M 0 0 L 23 0" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
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
          `.framer-qT4CE.framer-123rvn4, .framer-qT4CE .framer-123rvn4 { display: block; }`,
          `.framer-qT4CE.framer-1922msb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-qT4CE .framer-dyxd0i { height: 18px; position: relative; width: 27px; }`,
          `.framer-qT4CE .framer-1euigf3 { height: 1px; left: 4px; position: absolute; top: 6px; width: 23px; }`,
          `.framer-qT4CE .framer-1fclrxv { height: 1px; left: 0px; position: absolute; top: 0px; width: 27px; }`,
          `.framer-qT4CE .framer-40j0c4 { height: 1px; left: 0px; position: absolute; top: 18px; width: 27px; }`,
          `.framer-qT4CE .framer-1q2ukl6 { height: 1px; left: 4px; position: absolute; top: 12px; width: 23px; }`,
          `.framer-qT4CE.framer-v-1v54big .framer-dyxd0i { height: 24px; width: 24px; }`,
          `.framer-qT4CE.framer-v-1v54big .framer-1fclrxv { top: 12px; width: 24px; }`,
          `.framer-qT4CE.framer-v-1v54big .framer-40j0c4 { left: -1px; top: 12px; width: 24px; }`,
        ],
        `framer-qT4CE`
      )),
      (Ws.displayName = `Navigation Icon`),
      (Ws.defaultProps = { height: 18, width: 27 }),
      w(Ws, {
        variant: {
          options: [`LLdKzB_md`, `T6WMHh0vg`],
          optionTitles: [`NAV icon`, `Close icon`],
          title: `Variant`,
          type: z.Enum,
        },
        SOyrWEhYa: { title: `Click`, type: z.EventHandler },
      }),
      j(Ws, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Ks,
  qs,
  Js,
  Ys = t(() => {
    (M(),
      T.loadFonts([]),
      (Ks = [{ explicitInter: !0, fonts: [] }]),
      (qs = [
        `.framer-PzkL9 .framer-styles-preset-72n0xi:not(.rich-text-wrapper), .framer-PzkL9 .framer-styles-preset-72n0xi.rich-text-wrapper a {  }`,
      ]),
      (Js = `framer-PzkL9`));
  }),
  Xs,
  Zs,
  Qs,
  $s = t(() => {
    (M(),
      T.loadFonts([`FS;Outfit-medium`, `FS;Outfit-bold`]),
      (Xs = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/3JX43FCBGINLH25MK4NSVCHCDXUSMHUE.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Zs = [
        `.framer-e1Txq .framer-styles-preset-16kls5w:not(.rich-text-wrapper), .framer-e1Txq .framer-styles-preset-16kls5w.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-e1Txq .framer-styles-preset-16kls5w:not(.rich-text-wrapper), .framer-e1Txq .framer-styles-preset-16kls5w.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-e1Txq .framer-styles-preset-16kls5w:not(.rich-text-wrapper), .framer-e1Txq .framer-styles-preset-16kls5w.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Qs = `framer-e1Txq`));
  });
function ec(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  Z,
  dc = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Ys(),
      $s(),
      (tc = { GfH8hfNK3: { hover: !0 }, y2iEPgtji: { hover: !0 } }),
      (nc = [`GfH8hfNK3`, `y2iEPgtji`]),
      (rc = `framer-fnHfi`),
      (ic = { GfH8hfNK3: `framer-v-wo13vm`, y2iEPgtji: `framer-v-4wlyvl` }),
      (ac = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (oc = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (sc = { "Variant 1": `GfH8hfNK3`, "Variant 2": `y2iEPgtji` }),
      (cc = x.create(c)),
      (lc = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        ELz3JlBtm: e ?? o.ELz3JlBtm,
        lwbDzc9WO: r ?? o.lwbDzc9WO,
        u1az_EGCk: i ?? o.u1az_EGCk ?? `Home`,
        variant: sc[o.variant] ?? o.variant ?? `GfH8hfNK3`,
      })),
      (uc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              lwbDzc9WO: m,
              u1az_EGCk: h,
              ELz3JlBtm: g,
              ..._
            } = lc(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = ue({
              cycleOrder: nc,
              defaultVariant: `GfH8hfNK3`,
              enabledGestures: tc,
              ref: r,
              variant: p,
              variantClassNames: ic,
            }),
            A = uc(e, k),
            { activeVariantCallback: j, delay: M } = N(v),
            P = j(async (...e) => {
              if ((D({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            F = E(rc, Qs, Js);
          return d(ee, {
            id: f ?? i,
            children: d(cc, {
              animate: k,
              initial: !1,
              children: d(oc, {
                value: ac,
                children: d(x.div, {
                  ..._,
                  ...C,
                  className: E(F, `framer-wo13vm`, u, b),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: A,
                  layoutId: `GfH8hfNK3`,
                  onTap: P,
                  ref: r,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `rgba(34, 34, 34, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...l,
                  },
                  variants: {
                    "GfH8hfNK3-hover": {
                      "--border-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                    },
                    y2iEPgtji: { "--border-bottom-width": `0px` },
                  },
                  ...ec(
                    {
                      "GfH8hfNK3-hover": { "data-framer-name": void 0 },
                      "y2iEPgtji-hover": { "data-framer-name": void 0 },
                      y2iEPgtji: { "data-framer-name": `Variant 2` },
                    },
                    v,
                    w
                  ),
                  children: d(H, {
                    __fromCanvasComponent: !0,
                    children: d(c, {
                      children: d(x.p, {
                        className: `framer-styles-preset-16kls5w`,
                        "data-styles-preset": `uweE1kyDI`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                        },
                        children: d(se, {
                          href: m,
                          motionChild: !0,
                          nodeId: `cd3f0BEmS`,
                          openInNewTab: !1,
                          relValues: [],
                          scopeId: `U1vAS8ZLl`,
                          smoothScroll: !0,
                          children: d(x.a, {
                            className: `framer-styles-preset-72n0xi`,
                            "data-styles-preset": `klJo7ZxF_`,
                            children: `Home`,
                          }),
                        }),
                      }),
                    }),
                    className: `framer-1cghd3r`,
                    fonts: [`Inter`],
                    layoutDependency: A,
                    layoutId: `cd3f0BEmS`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                    },
                    text: h,
                    variants: {
                      "GfH8hfNK3-hover": {
                        "--extracted-r6o4lv": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                      },
                      "y2iEPgtji-hover": {
                        "--extracted-r6o4lv": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...ec(
                      {
                        "GfH8hfNK3-hover": {
                          children: d(c, {
                            children: d(x.p, {
                              className: `framer-styles-preset-16kls5w`,
                              "data-styles-preset": `uweE1kyDI`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)))`,
                              },
                              children: d(se, {
                                href: m,
                                motionChild: !0,
                                nodeId: `cd3f0BEmS`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `U1vAS8ZLl`,
                                smoothScroll: !0,
                                children: d(x.a, {
                                  className: `framer-styles-preset-72n0xi`,
                                  "data-styles-preset": `klJo7ZxF_`,
                                  children: `Home`,
                                }),
                              }),
                            }),
                          }),
                        },
                        "y2iEPgtji-hover": {
                          children: d(c, {
                            children: d(x.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-line-height": `20px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)))`,
                              },
                              children: d(se, {
                                href: m,
                                motionChild: !0,
                                nodeId: `cd3f0BEmS`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `U1vAS8ZLl`,
                                smoothScroll: !0,
                                children: d(x.a, {
                                  className: `framer-styles-preset-72n0xi`,
                                  "data-styles-preset": `klJo7ZxF_`,
                                  children: `Home`,
                                }),
                              }),
                            }),
                          }),
                        },
                        y2iEPgtji: {
                          children: d(c, {
                            children: d(x.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-line-height": `20px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                              },
                              children: d(se, {
                                href: m,
                                motionChild: !0,
                                nodeId: `cd3f0BEmS`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `U1vAS8ZLl`,
                                smoothScroll: !0,
                                children: d(x.a, {
                                  className: `framer-styles-preset-72n0xi`,
                                  "data-styles-preset": `klJo7ZxF_`,
                                  children: `Home`,
                                }),
                              }),
                            }),
                          }),
                          fonts: [`FS;Outfit-regular`],
                        },
                      },
                      v,
                      w
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fnHfi.framer-1890rld, .framer-fnHfi .framer-1890rld { display: block; }`,
          `.framer-fnHfi.framer-wo13vm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 5px 0px; position: relative; width: min-content; }`,
          `.framer-fnHfi .framer-1cghd3r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-fnHfi.framer-v-4wlyvl.framer-wo13vm { padding: 0px; }`,
          ...Zs,
          ...qs,
          `.framer-fnHfi[data-border="true"]::after, .framer-fnHfi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-fnHfi`
      )),
      (Z.displayName = `Links`),
      (Z.defaultProps = { height: 31, width: 48 }),
      w(Z, {
        variant: {
          options: [`GfH8hfNK3`, `y2iEPgtji`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        lwbDzc9WO: { title: `Link`, type: z.Link },
        u1az_EGCk: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: z.String },
        onu1az_EGCkChange: { changes: `u1az_EGCk`, type: z.ChangeHandler },
        ELz3JlBtm: { title: `Click`, type: z.EventHandler },
      }),
      j(
        Z,
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
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
                weight: `400`,
              },
            ],
          },
          ...D(Xs),
          ...D(Ks),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function fc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pc,
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
  Oc = t(() => {
    (h(),
      M(),
      C(),
      _(),
      xs(),
      Ns(),
      Gs(),
      dc(),
      (pc = A(Ms)),
      (mc = A(Ws)),
      (hc = A(Z)),
      (gc = A(bs)),
      (_c = [
        `LtK6zAT4u`,
        `EHD22YnUe`,
        `PMPRq1B78`,
        `iy4aFfszC`,
        `bZr9qd9Qi`,
        `WCZ5N45oX`,
        `qJL5r1wcR`,
        `ePE0m4AQv`,
      ]),
      (vc = `framer-nubyd`),
      (yc = {
        bZr9qd9Qi: `framer-v-pa6nqb`,
        EHD22YnUe: `framer-v-mpot4m`,
        ePE0m4AQv: `framer-v-mqw8b1`,
        iy4aFfszC: `framer-v-xucgqu`,
        LtK6zAT4u: `framer-v-1h9dcig`,
        PMPRq1B78: `framer-v-ydwxlw`,
        qJL5r1wcR: `framer-v-v57r21`,
        WCZ5N45oX: `framer-v-1tldrqt`,
      }),
      (bc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Sc = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Cc = {
        "Phone L open": `qJL5r1wcR`,
        "Phone L": `iy4aFfszC`,
        "Phone Open": `ePE0m4AQv`,
        "tablet open": `WCZ5N45oX`,
        Desktop: `LtK6zAT4u`,
        Laptop: `EHD22YnUe`,
        Phone: `bZr9qd9Qi`,
        Tablet: `PMPRq1B78`,
      }),
      (wc = x.create(c)),
      (Tc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Cc[r.variant] ?? r.variant ?? `LtK6zAT4u`,
      })),
      (Ec = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Dc = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he(),
            c = te(),
            { style: l, className: u, layoutId: f, variant: p, ...h } = Tc(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ue({
              cycleOrder: _c,
              defaultVariant: `LtK6zAT4u`,
              ref: r,
              variant: p,
              variantClassNames: yc,
            }),
            O = Ec(e, D),
            { activeVariantCallback: k, delay: A } = N(g),
            j = k(async (...e) => {
              T(`IRFcs2C9s`);
            }),
            M = k(async (...e) => {
              T(`WCZ5N45oX`);
            }),
            P = k(async (...e) => {
              T(`qJL5r1wcR`);
            }),
            F = k(async (...e) => {
              T(`ePE0m4AQv`);
            }),
            ne = k(async (...e) => {
              T(`PMPRq1B78`);
            }),
            I = k(async (...e) => {
              T(`iy4aFfszC`);
            }),
            re = k(async (...e) => {
              T(`bZr9qd9Qi`);
            }),
            ie = k(async (...e) => {
              T(`PMPRq1B78`);
            }),
            ae = k(async (...e) => {
              T(`iy4aFfszC`);
            }),
            oe = k(async (...e) => {
              T(`bZr9qd9Qi`);
            }),
            se = E(vc),
            ce = () =>
              !![
                `PMPRq1B78`,
                `iy4aFfszC`,
                `bZr9qd9Qi`,
                `WCZ5N45oX`,
                `qJL5r1wcR`,
                `ePE0m4AQv`,
              ].includes(g),
            L = () => ![`PMPRq1B78`, `iy4aFfszC`, `bZr9qd9Qi`].includes(g);
          return (
            _e(),
            d(ee, {
              id: f ?? i,
              children: d(wc, {
                animate: D,
                initial: !1,
                children: d(Sc, {
                  value: bc,
                  children: d(x.div, {
                    ...h,
                    ...b,
                    className: E(se, `framer-1h9dcig`, u, _),
                    "data-framer-name": `Desktop`,
                    layoutDependency: O,
                    layoutId: `LtK6zAT4u`,
                    ref: r,
                    style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...l },
                    variants: {
                      ePE0m4AQv: {
                        backgroundColor: `var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47))`,
                      },
                      qJL5r1wcR: {
                        backgroundColor: `var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47))`,
                      },
                      WCZ5N45oX: {
                        backgroundColor: `var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47))`,
                      },
                    },
                    ...fc(
                      {
                        bZr9qd9Qi: { "data-framer-name": `Phone` },
                        EHD22YnUe: { "data-framer-name": `Laptop` },
                        ePE0m4AQv: { "data-framer-name": `Phone Open` },
                        iy4aFfszC: { "data-framer-name": `Phone L` },
                        PMPRq1B78: { "data-framer-name": `Tablet` },
                        qJL5r1wcR: { "data-framer-name": `Phone L open` },
                        WCZ5N45oX: { "data-framer-name": `tablet open` },
                      },
                      g,
                      S
                    ),
                    children: m(x.div, {
                      className: `framer-jsb9as`,
                      "data-border": !0,
                      layoutDependency: O,
                      layoutId: `Zi9Z7c7V2`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(255, 255, 255, 0.2)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        ePE0m4AQv: { "--border-bottom-width": `0px` },
                        qJL5r1wcR: { "--border-bottom-width": `0px` },
                        WCZ5N45oX: { "--border-bottom-width": `0px` },
                      },
                      children: [
                        m(x.div, {
                          className: `framer-1edi5r6`,
                          "data-framer-name": `Logo`,
                          layoutDependency: O,
                          layoutId: `m1hOg7nub`,
                          children: [
                            d(B, {
                              height: 85,
                              y:
                                (c?.y || 0) +
                                16 +
                                (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                0 +
                                0,
                              ...fc(
                                {
                                  bZr9qd9Qi: {
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 92) - 16 - 101) / 2 + 0 + 0) +
                                      0 +
                                      0,
                                  },
                                  ePE0m4AQv: {
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  iy4aFfszC: {
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 92) - 16 - 101) / 2 + 0 + 0) +
                                      0 +
                                      0,
                                  },
                                  PMPRq1B78: {
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 92) - 16 - 101) / 2 + 0 + 0) +
                                      0 +
                                      0,
                                  },
                                  qJL5r1wcR: {
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  WCZ5N45oX: {
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                g,
                                S
                              ),
                              children: d(V, {
                                className: `framer-aqrrvg-container`,
                                layoutDependency: O,
                                layoutId: `JGQybGN7T-container`,
                                nodeId: `JGQybGN7T`,
                                rendersWithMotion: !0,
                                scopeId: `IDLUbTONN`,
                                children: d(Ms, {
                                  height: `100%`,
                                  id: `JGQybGN7T`,
                                  layoutId: `JGQybGN7T`,
                                  variant: xc(`zAyU1Ty5A`),
                                  width: `100%`,
                                  ...fc(
                                    {
                                      bZr9qd9Qi: { variant: xc(`iVvvykN7J`) },
                                      ePE0m4AQv: { variant: xc(`iVvvykN7J`) },
                                      iy4aFfszC: { variant: xc(`iVvvykN7J`) },
                                      PMPRq1B78: { variant: xc(`iVvvykN7J`) },
                                      qJL5r1wcR: { variant: xc(`iVvvykN7J`) },
                                      WCZ5N45oX: { variant: xc(`iVvvykN7J`) },
                                    },
                                    g,
                                    S
                                  ),
                                }),
                              }),
                            }),
                            ce() &&
                              d(B, {
                                ...fc(
                                  {
                                    bZr9qd9Qi: {
                                      height: 18,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 92) - 16 - 101) / 2 + 0 + 0) +
                                        0 +
                                        33.5,
                                    },
                                    ePE0m4AQv: {
                                      height: 18,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        33.5,
                                    },
                                    iy4aFfszC: {
                                      height: 18,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 92) - 16 - 101) / 2 + 0 + 0) +
                                        0 +
                                        33.5,
                                    },
                                    PMPRq1B78: {
                                      height: 18,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 92) - 16 - 101) / 2 + 0 + 0) +
                                        0 +
                                        33.5,
                                    },
                                    qJL5r1wcR: {
                                      height: 18,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        33.5,
                                    },
                                    WCZ5N45oX: {
                                      height: 18,
                                      y:
                                        (c?.y || 0) +
                                        16 +
                                        (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        33.5,
                                    },
                                  },
                                  g,
                                  S
                                ),
                                children: d(V, {
                                  className: `framer-a5kxe5-container`,
                                  layoutDependency: O,
                                  layoutId: `fhNkDVkyF-container`,
                                  nodeId: `fhNkDVkyF`,
                                  rendersWithMotion: !0,
                                  scopeId: `IDLUbTONN`,
                                  children: d(Ws, {
                                    height: `100%`,
                                    id: `fhNkDVkyF`,
                                    layoutId: `fhNkDVkyF`,
                                    SOyrWEhYa: j,
                                    variant: xc(`LLdKzB_md`),
                                    width: `100%`,
                                    ...fc(
                                      {
                                        bZr9qd9Qi: { SOyrWEhYa: F },
                                        ePE0m4AQv: { SOyrWEhYa: re, variant: xc(`T6WMHh0vg`) },
                                        iy4aFfszC: { SOyrWEhYa: P },
                                        PMPRq1B78: { SOyrWEhYa: M },
                                        qJL5r1wcR: { SOyrWEhYa: I, variant: xc(`T6WMHh0vg`) },
                                        WCZ5N45oX: { SOyrWEhYa: ne, variant: xc(`T6WMHh0vg`) },
                                      },
                                      g,
                                      S
                                    ),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        L() &&
                          m(x.div, {
                            className: `framer-axu0cx`,
                            "data-framer-name": `Navigation Links`,
                            layoutDependency: O,
                            layoutId: `zvaOToHkR`,
                            children: [
                              d(xe, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(B, {
                                    height: 31,
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                      27 +
                                      0,
                                    ...fc(
                                      {
                                        ePE0m4AQv: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            0,
                                        },
                                        qJL5r1wcR: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            0,
                                        },
                                        WCZ5N45oX: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            100 +
                                            0 +
                                            0,
                                        },
                                      },
                                      g,
                                      S
                                    ),
                                    children: d(V, {
                                      className: `framer-1th27rn-container`,
                                      layoutDependency: O,
                                      layoutId: `fVIEb7Niy-container`,
                                      nodeId: `fVIEb7Niy`,
                                      rendersWithMotion: !0,
                                      scopeId: `IDLUbTONN`,
                                      children: d(Z, {
                                        height: `100%`,
                                        id: `fVIEb7Niy`,
                                        layoutId: `fVIEb7Niy`,
                                        lwbDzc9WO: e[0],
                                        u1az_EGCk: `Home`,
                                        variant: xc(`GfH8hfNK3`),
                                        width: `100%`,
                                        ...fc(
                                          {
                                            EHD22YnUe: { lwbDzc9WO: e[1] },
                                            ePE0m4AQv: { ELz3JlBtm: oe, lwbDzc9WO: e[4] },
                                            qJL5r1wcR: { ELz3JlBtm: ae, lwbDzc9WO: e[3] },
                                            WCZ5N45oX: { ELz3JlBtm: ie, lwbDzc9WO: e[2] },
                                          },
                                          g,
                                          S
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              d(xe, {
                                links: [
                                  {
                                    href: { hash: `:IX1SVflNL`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:IX1SVflNL`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:IX1SVflNL`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:IX1SVflNL`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:IX1SVflNL`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(B, {
                                    height: 31,
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                      27 +
                                      0,
                                    ...fc(
                                      {
                                        ePE0m4AQv: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            41,
                                        },
                                        qJL5r1wcR: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            41,
                                        },
                                        WCZ5N45oX: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            100 +
                                            0 +
                                            46,
                                        },
                                      },
                                      g,
                                      S
                                    ),
                                    children: d(V, {
                                      className: `framer-o2a5ai-container`,
                                      layoutDependency: O,
                                      layoutId: `XpkkXYHxd-container`,
                                      nodeId: `XpkkXYHxd`,
                                      rendersWithMotion: !0,
                                      scopeId: `IDLUbTONN`,
                                      children: d(Z, {
                                        height: `100%`,
                                        id: `XpkkXYHxd`,
                                        layoutId: `XpkkXYHxd`,
                                        lwbDzc9WO: e[0],
                                        u1az_EGCk: `About Us`,
                                        variant: xc(`GfH8hfNK3`),
                                        width: `100%`,
                                        ...fc(
                                          {
                                            EHD22YnUe: { lwbDzc9WO: e[1] },
                                            ePE0m4AQv: { ELz3JlBtm: oe, lwbDzc9WO: e[4] },
                                            qJL5r1wcR: { ELz3JlBtm: ae, lwbDzc9WO: e[3] },
                                            WCZ5N45oX: { ELz3JlBtm: ie, lwbDzc9WO: e[2] },
                                          },
                                          g,
                                          S
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              d(xe, {
                                links: [
                                  {
                                    href: { hash: `:u4wiTznyv`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:u4wiTznyv`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:u4wiTznyv`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:u4wiTznyv`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:u4wiTznyv`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(B, {
                                    height: 31,
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                      27 +
                                      0,
                                    ...fc(
                                      {
                                        ePE0m4AQv: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            82,
                                        },
                                        qJL5r1wcR: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            82,
                                        },
                                        WCZ5N45oX: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            100 +
                                            0 +
                                            92,
                                        },
                                      },
                                      g,
                                      S
                                    ),
                                    children: d(V, {
                                      className: `framer-1kotsab-container`,
                                      layoutDependency: O,
                                      layoutId: `xspxPxm1B-container`,
                                      nodeId: `xspxPxm1B`,
                                      rendersWithMotion: !0,
                                      scopeId: `IDLUbTONN`,
                                      children: d(Z, {
                                        height: `100%`,
                                        id: `xspxPxm1B`,
                                        layoutId: `xspxPxm1B`,
                                        lwbDzc9WO: e[0],
                                        u1az_EGCk: `Services`,
                                        variant: xc(`GfH8hfNK3`),
                                        width: `100%`,
                                        ...fc(
                                          {
                                            EHD22YnUe: { lwbDzc9WO: e[1] },
                                            ePE0m4AQv: { ELz3JlBtm: oe, lwbDzc9WO: e[4] },
                                            qJL5r1wcR: { ELz3JlBtm: ae, lwbDzc9WO: e[3] },
                                            WCZ5N45oX: { ELz3JlBtm: ie, lwbDzc9WO: e[2] },
                                          },
                                          g,
                                          S
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              d(xe, {
                                links: [
                                  {
                                    href: { hash: `:iLQR2gUoR`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iLQR2gUoR`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iLQR2gUoR`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iLQR2gUoR`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iLQR2gUoR`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(B, {
                                    height: 31,
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                      27 +
                                      0,
                                    ...fc(
                                      {
                                        ePE0m4AQv: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            123,
                                        },
                                        qJL5r1wcR: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            123,
                                        },
                                        WCZ5N45oX: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            100 +
                                            0 +
                                            138,
                                        },
                                      },
                                      g,
                                      S
                                    ),
                                    children: d(V, {
                                      className: `framer-13kowwz-container`,
                                      layoutDependency: O,
                                      layoutId: `TjbwJVhcK-container`,
                                      nodeId: `TjbwJVhcK`,
                                      rendersWithMotion: !0,
                                      scopeId: `IDLUbTONN`,
                                      children: d(Z, {
                                        height: `100%`,
                                        id: `TjbwJVhcK`,
                                        layoutId: `TjbwJVhcK`,
                                        lwbDzc9WO: e[0],
                                        u1az_EGCk: `Gallery`,
                                        variant: xc(`GfH8hfNK3`),
                                        width: `100%`,
                                        ...fc(
                                          {
                                            EHD22YnUe: { lwbDzc9WO: e[1] },
                                            ePE0m4AQv: { ELz3JlBtm: oe, lwbDzc9WO: e[4] },
                                            qJL5r1wcR: { ELz3JlBtm: ae, lwbDzc9WO: e[3] },
                                            WCZ5N45oX: { ELz3JlBtm: ie, lwbDzc9WO: e[2] },
                                          },
                                          g,
                                          S
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              d(xe, {
                                links: [
                                  {
                                    href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(B, {
                                    height: 31,
                                    y:
                                      (c?.y || 0) +
                                      16 +
                                      (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                      27 +
                                      0,
                                    ...fc(
                                      {
                                        ePE0m4AQv: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            164,
                                        },
                                        qJL5r1wcR: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            95 +
                                            0 +
                                            164,
                                        },
                                        WCZ5N45oX: {
                                          y:
                                            (c?.y || 0) +
                                            16 +
                                            (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                            0 +
                                            100 +
                                            0 +
                                            184,
                                        },
                                      },
                                      g,
                                      S
                                    ),
                                    children: d(V, {
                                      className: `framer-1826svv-container`,
                                      layoutDependency: O,
                                      layoutId: `L9aFN3o01-container`,
                                      nodeId: `L9aFN3o01`,
                                      rendersWithMotion: !0,
                                      scopeId: `IDLUbTONN`,
                                      children: d(Z, {
                                        height: `100%`,
                                        id: `L9aFN3o01`,
                                        layoutId: `L9aFN3o01`,
                                        lwbDzc9WO: e[0],
                                        u1az_EGCk: `Contact Us`,
                                        variant: xc(`GfH8hfNK3`),
                                        width: `100%`,
                                        ...fc(
                                          {
                                            EHD22YnUe: { lwbDzc9WO: e[1] },
                                            ePE0m4AQv: { ELz3JlBtm: oe, lwbDzc9WO: e[4] },
                                            qJL5r1wcR: { ELz3JlBtm: ae, lwbDzc9WO: e[3] },
                                            WCZ5N45oX: { ELz3JlBtm: ie, lwbDzc9WO: e[2] },
                                          },
                                          g,
                                          S
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        L() &&
                          d(x.div, {
                            className: `framer-h91h7d`,
                            "data-framer-name": `Button`,
                            layoutDependency: O,
                            layoutId: `hI359Toyy`,
                            children: d(xe, {
                              links: [
                                {
                                  href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:iu26HJtPt`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                d(B, {
                                  height: 50,
                                  y:
                                    (c?.y || 0) +
                                    16 +
                                    (((c?.height || 117) - 16 - 101) / 2 + 0 + 0) +
                                    17.5 +
                                    0,
                                  ...fc(
                                    {
                                      ePE0m4AQv: {
                                        y:
                                          (c?.y || 0) +
                                          16 +
                                          (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                          0 +
                                          300 +
                                          0,
                                      },
                                      qJL5r1wcR: {
                                        y:
                                          (c?.y || 0) +
                                          16 +
                                          (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                          0 +
                                          300 +
                                          0,
                                      },
                                      WCZ5N45oX: {
                                        y:
                                          (c?.y || 0) +
                                          16 +
                                          (((c?.height || 816) - 16 - 1e3) / 2 + 0 + 0) +
                                          0 +
                                          330 +
                                          0,
                                      },
                                    },
                                    g,
                                    S
                                  ),
                                  children: d(V, {
                                    className: `framer-1rql6rz-container`,
                                    "data-framer-name": `Primary button`,
                                    layoutDependency: O,
                                    layoutId: `oHb0ollyR-container`,
                                    name: `Primary button`,
                                    nodeId: `oHb0ollyR`,
                                    rendersWithMotion: !0,
                                    scopeId: `IDLUbTONN`,
                                    children: d(bs, {
                                      d_yg_RU9i: e[0],
                                      F7HxQNO3s: `Book a call`,
                                      height: `100%`,
                                      id: `oHb0ollyR`,
                                      layoutId: `oHb0ollyR`,
                                      name: `Primary button`,
                                      variant: xc(`kvzAT6haQ`),
                                      width: `100%`,
                                      ...fc(
                                        {
                                          EHD22YnUe: { d_yg_RU9i: e[1] },
                                          ePE0m4AQv: { d_yg_RU9i: e[4] },
                                          qJL5r1wcR: { d_yg_RU9i: e[3] },
                                          WCZ5N45oX: { d_yg_RU9i: e[2] },
                                        },
                                        g,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nubyd.framer-c987rt, .framer-nubyd .framer-c987rt { display: block; }`,
          `.framer-nubyd.framer-1h9dcig { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 80px 0px 80px; position: relative; width: 1440px; }`,
          `.framer-nubyd .framer-jsb9as { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 0px 0px 16px 0px; position: relative; width: 100%; }`,
          `.framer-nubyd .framer-1edi5r6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-nubyd .framer-aqrrvg-container, .framer-nubyd .framer-a5kxe5-container, .framer-nubyd .framer-1th27rn-container, .framer-nubyd .framer-o2a5ai-container, .framer-nubyd .framer-1kotsab-container, .framer-nubyd .framer-13kowwz-container, .framer-nubyd .framer-1826svv-container, .framer-nubyd .framer-1rql6rz-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-nubyd .framer-axu0cx, .framer-nubyd .framer-h91h7d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-nubyd.framer-v-mpot4m.framer-1h9dcig { padding: 16px 40px 0px 40px; width: 1024px; }`,
          `.framer-nubyd.framer-v-ydwxlw.framer-1h9dcig, .framer-nubyd.framer-v-1tldrqt.framer-1h9dcig { padding: 16px 34px 0px 34px; width: 768px; }`,
          `.framer-nubyd.framer-v-ydwxlw .framer-1edi5r6, .framer-nubyd.framer-v-xucgqu .framer-1edi5r6, .framer-nubyd.framer-v-pa6nqb .framer-1edi5r6 { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }`,
          `.framer-nubyd.framer-v-xucgqu.framer-1h9dcig, .framer-nubyd.framer-v-v57r21.framer-1h9dcig { padding: 16px 25px 0px 25px; width: 425px; }`,
          `.framer-nubyd.framer-v-pa6nqb.framer-1h9dcig, .framer-nubyd.framer-v-mqw8b1.framer-1h9dcig { padding: 16px 15px 0px 15px; width: 390px; }`,
          `.framer-nubyd.framer-v-1tldrqt .framer-jsb9as { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 15px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: flex-start; padding: 0px; }`,
          `.framer-nubyd.framer-v-1tldrqt .framer-1edi5r6, .framer-nubyd.framer-v-v57r21 .framer-1edi5r6, .framer-nubyd.framer-v-mqw8b1 .framer-1edi5r6 { gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-nubyd.framer-v-1tldrqt .framer-axu0cx { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 15px; }`,
          `.framer-nubyd.framer-v-v57r21 .framer-jsb9as, .framer-nubyd.framer-v-mqw8b1 .framer-jsb9as { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: flex-start; padding: 0px; }`,
          `.framer-nubyd.framer-v-v57r21 .framer-axu0cx, .framer-nubyd.framer-v-mqw8b1 .framer-axu0cx { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 10px; justify-content: flex-start; }`,
          `.framer-nubyd[data-border="true"]::after, .framer-nubyd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-nubyd`
      )),
      (Dc.displayName = `Header`),
      (Dc.defaultProps = { height: 117, width: 1440 }),
      w(Dc, {
        variant: {
          options: [
            `LtK6zAT4u`,
            `EHD22YnUe`,
            `PMPRq1B78`,
            `iy4aFfszC`,
            `bZr9qd9Qi`,
            `WCZ5N45oX`,
            `qJL5r1wcR`,
            `ePE0m4AQv`,
          ],
          optionTitles: [
            `Desktop`,
            `Laptop`,
            `Tablet`,
            `Phone L`,
            `Phone`,
            `tablet open`,
            `Phone L open`,
            `Phone Open`,
          ],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      j(Dc, [{ explicitInter: !0, fonts: [] }, ...pc, ...mc, ...hc, ...gc], {
        supportsExplicitInterCodegen: !0,
      }),
      (Dc.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([k(Ms, {}, t), k(Ws, {}, t), k(Z, {}, t), k(bs, {}, t)])
        ),
      }));
  }),
  kc,
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc = t(() => {
    (h(),
      M(),
      C(),
      _(),
      dc(),
      (kc = A(Z)),
      (Ac = `framer-4Nlid`),
      (jc = { DWbenmB7R: `framer-v-1es23j1` }),
      (Mc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nc = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Pc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Fc = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Ic = x.create(c)),
      (Lc = (e, t) => {
        let [n, r] = i(e),
          [a, o] = i(e);
        return t ? [e, t] : (e !== a && (r(e), o(e)), [n, r]);
      }),
      (Rc = ({ height: e, id: t, image: n, link2: r, title: i, width: a, ...o }) => ({
        ...o,
        agqcSZuTE: n ??
          o.agqcSZuTE ?? {
            alt: ``,
            pixelHeight: 20,
            pixelWidth: 20,
            src: `../../assets/images/IsvY4QVNDnTEAQ1kKtun9RYQ0.png`,
          },
        gU6p0AfyA: r ?? o.gU6p0AfyA,
        nAX1Zod_t: i ?? o.nAX1Zod_t ?? `Password Protected`,
      })),
      (zc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bc = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he(),
            c = te(),
            {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              agqcSZuTE: h,
              nAX1Zod_t: g,
              onnAX1Zod_tChange: _,
              gU6p0AfyA: v,
              ...b
            } = Rc(e),
            [S, C] = Lc(g, _),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: D,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = ue({ defaultVariant: `DWbenmB7R`, ref: r, variant: p, variantClassNames: jc }),
            F = zc(e, P),
            ne = E(Ac);
          return d(ee, {
            id: f ?? i,
            children: d(Ic, {
              animate: P,
              initial: !1,
              children: d(Fc, {
                value: Mc,
                children: m(x.div, {
                  ...b,
                  ...k,
                  className: E(ne, `framer-1es23j1`, u, T),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: F,
                  layoutId: `DWbenmB7R`,
                  ref: r,
                  style: { ...l },
                  children: [
                    d(ye, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        intrinsicHeight: 20,
                        intrinsicWidth: 20,
                        loading: O((c?.y || 0) + (0 + ((c?.height || 26) - 0 - 20) / 2)),
                        pixelHeight: 20,
                        pixelWidth: 20,
                        sizes: `20px`,
                        ...Nc(h),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-peghfn`,
                      layoutDependency: F,
                      layoutId: `SOcCJ7Ko7`,
                    }),
                    d(B, {
                      height: 31,
                      y: (c?.y || 0) + (0 + ((c?.height || 26) - 0 - 31) / 2),
                      children: d(V, {
                        className: `framer-ddie45-container`,
                        layoutDependency: F,
                        layoutId: `cEaswThb4-container`,
                        nodeId: `cEaswThb4`,
                        rendersWithMotion: !0,
                        scopeId: `OgwZqgtsP`,
                        children: d(Z, {
                          height: `100%`,
                          id: `cEaswThb4`,
                          layoutId: `cEaswThb4`,
                          lwbDzc9WO: v,
                          onu1az_EGCkChange: C,
                          u1az_EGCk: S,
                          variant: Pc(`y2iEPgtji`),
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-4Nlid.framer-9mfqjd, .framer-4Nlid .framer-9mfqjd { display: block; }`,
          `.framer-4Nlid.framer-1es23j1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-4Nlid .framer-peghfn { flex: none; height: 20px; overflow: visible; position: relative; width: 20px; }`,
          `.framer-4Nlid .framer-ddie45-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-4Nlid`
      )),
      (Bc.displayName = `contact info`),
      (Bc.defaultProps = { height: 26, width: 190 }),
      w(Bc, {
        agqcSZuTE: {
          __defaultAssetReference: `data:framer/asset-reference,IsvY4QVNDnTEAQ1kKtun9RYQ0.png?originalFilename=fi_597177.png&width=20&height=20`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,IsvY4QVNDnTEAQ1kKtun9RYQ0.png?originalFilename=fi_597177.png&width=20&height=20`,
          },
          title: `Image`,
          type: z.ResponsiveImage,
        },
        nAX1Zod_t: {
          defaultValue: `Password Protected`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onnAX1Zod_tChange: { changes: `nAX1Zod_t`, type: z.ChangeHandler },
        gU6p0AfyA: { title: `Link 2`, type: z.Link },
      }),
      j(Bc, [{ explicitInter: !0, fonts: [] }, ...kc], { supportsExplicitInterCodegen: !0 }),
      (Bc.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(Z, {}, t)])) }));
  }),
  Hc,
  Uc,
  Wc,
  Gc = t(() => {
    (M(),
      T.loadFonts([
        `GF;Open Sans-700`,
        `GF;Open Sans-800`,
        `GF;Open Sans-800italic`,
        `GF;Open Sans-700italic`,
      ]),
      (Hc = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Open Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Open Sans`,
              url: `https://fonts.gstatic.com/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4iY1M2xLER.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Open Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Open Sans`,
              url: `https://fonts.gstatic.com/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4iY1M2xLER.woff2`,
              weight: `800`,
            },
            {
              cssFamilyName: `Open Sans`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Open Sans`,
              url: `https://fonts.gstatic.com/s/opensans/v44/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVIUwaERZjA.woff2`,
              weight: `800`,
            },
            {
              cssFamilyName: `Open Sans`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Open Sans`,
              url: `https://fonts.gstatic.com/s/opensans/v44/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVIUwaERZjA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Uc = [
        `.framer-8VVxF .framer-styles-preset-jopq3h:not(.rich-text-wrapper), .framer-8VVxF .framer-styles-preset-jopq3h.rich-text-wrapper h6 { --framer-font-family: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-font-weight-bold-italic: 800; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 25px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-8VVxF .framer-styles-preset-jopq3h:not(.rich-text-wrapper), .framer-8VVxF .framer-styles-preset-jopq3h.rich-text-wrapper h6 { --framer-font-family: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-font-weight-bold-italic: 800; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 25px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-8VVxF .framer-styles-preset-jopq3h:not(.rich-text-wrapper), .framer-8VVxF .framer-styles-preset-jopq3h.rich-text-wrapper h6 { --framer-font-family: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-font-weight-bold-italic: 800; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 25px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-8VVxF .framer-styles-preset-jopq3h:not(.rich-text-wrapper), .framer-8VVxF .framer-styles-preset-jopq3h.rich-text-wrapper h6 { --framer-font-family: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-font-weight-bold-italic: 800; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 22px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-8VVxF .framer-styles-preset-jopq3h:not(.rich-text-wrapper), .framer-8VVxF .framer-styles-preset-jopq3h.rich-text-wrapper h6 { --framer-font-family: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sans", "Open Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-font-weight-bold-italic: 800; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 22px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Wc = `framer-8VVxF`));
  }),
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  Q,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Ho(),
      es(),
      Oc(),
      Ns(),
      Vc(),
      dc(),
      Ys(),
      Gc(),
      (Kc = A(Dc)),
      (qc = me(ce(R))),
      (Jc = A(Ms)),
      (Yc = A($o)),
      (Xc = A(Z)),
      (Zc = A(Bc)),
      (Qc = A(Vo)),
      ($c = {
        B0LwTTSjV: `(min-width: 425px) and (max-width: 767.98px)`,
        Gd3uJGvjp: `(min-width: 1024px) and (max-width: 1439.98px)`,
        IfuCJO6ZG: `(min-width: 1440px)`,
        LZHu0CbE5: `(min-width: 768px) and (max-width: 1023.98px)`,
        uaLXLAR6x: `(max-width: 424.98px)`,
      }),
      (el = `framer-XKOm0`),
      (tl = {
        B0LwTTSjV: `framer-v-z0qos7`,
        Gd3uJGvjp: `framer-v-u4c0nc`,
        IfuCJO6ZG: `framer-v-100sle3`,
        LZHu0CbE5: `framer-v-qpndus`,
        uaLXLAR6x: `framer-v-126b511`,
      }),
      (nl = void 0),
      (rl = (e, t) => `translateX(-50%) ${t}`),
      (il = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.2, duration: 4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (al = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -115,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ol = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (sl = {
        B0LwTTSjV: [
          `.framer-XKOm0 .framer-1hlibfh-container { width: 100%; }`,
          `.framer-XKOm0 .framer-1am2y8 { gap: 10px; padding: 20px 0px 0px 0px; }`,
          `.framer-XKOm0 .framer-8m42kq, .framer-XKOm0 .framer-1obr9zg { padding: 0px 25px 0px 25px; }`,
          `.framer-XKOm0 .framer-12bb102 { flex-direction: column; gap: 10px; justify-content: flex-start; }`,
          `.framer-XKOm0 .framer-mh0c56-container { width: 80px; }`,
          `.framer-XKOm0 .framer-1ailint, .framer-XKOm0 .framer-wss1tx, .framer-XKOm0 .framer-3oy4b6, .framer-XKOm0 .framer-164ldep, .framer-XKOm0 .framer-axu893, .framer-XKOm0 .framer-hhc40n, .framer-XKOm0 .framer-wzikyy { gap: 5px; }`,
          `.framer-XKOm0 .framer-1ddu0e3 { flex: none; width: 100%; }`,
          `.framer-XKOm0 .framer-gv6z9o { justify-content: flex-start; }`,
          `.framer-XKOm0 .framer-1o79f8m { flex-direction: column; gap: 10px; justify-content: flex-start; padding: 10px 0px 10px 0px; }`,
          `.framer-XKOm0 .framer-1ryox1s { width: 367px; }`,
          `.framer-XKOm0 .framer-exx8aj { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-XKOm0 .framer-190f4to { gap: 15px; justify-content: flex-start; width: 100%; }`,
        ],
        Gd3uJGvjp: [
          `.framer-XKOm0 .framer-1hlibfh-container { width: 100%; }`,
          `.framer-XKOm0 .framer-8m42kq, .framer-XKOm0 .framer-1obr9zg { padding: 0px 60px 0px 60px; }`,
          `.framer-XKOm0 .framer-1ddu0e3 { max-width: 380px; }`,
          `.framer-XKOm0 .framer-wzikyy { width: 16000%; }`,
        ],
        LZHu0CbE5: [
          `.framer-XKOm0 .framer-1hlibfh-container { width: 100%; }`,
          `.framer-XKOm0 .framer-1am2y8 { padding: 250px 0px 0px 0px; }`,
          `.framer-XKOm0 .framer-8m42kq, .framer-XKOm0 .framer-1obr9zg { padding: 0px 34px 0px 34px; }`,
          `.framer-XKOm0 .framer-12bb102 { align-content: unset; align-items: unset; display: grid; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; }`,
          `.framer-XKOm0 .framer-sz7o1, .framer-XKOm0 .framer-1ailint, .framer-XKOm0 .framer-licvpu { align-self: start; justify-self: start; width: 100%; }`,
          `.framer-XKOm0 .framer-1ddu0e3 { align-self: start; flex: none; justify-self: start; width: 100%; }`,
          `.framer-XKOm0 .framer-1o79f8m { gap: 10px; justify-content: flex-start; }`,
          `.framer-XKOm0 .framer-190f4to { gap: 10px; }`,
        ],
        uaLXLAR6x: [
          `.framer-XKOm0 .framer-1hlibfh-container, .framer-XKOm0 .framer-1ryox1s { width: 100%; }`,
          `.framer-XKOm0 .framer-1am2y8 { gap: 10px; padding: 20px 0px 0px 0px; }`,
          `.framer-XKOm0 .framer-1995h74 { background: linear-gradient(180deg, rgba(3, 19, 18, 0) 0%, rgba(3, 18, 17, 0.78) 27.586206896551722%, rgba(3, 18, 17, 0.92) 60.3448275862069%, rgb(3, 19, 18) 100%); }`,
          `.framer-XKOm0 .framer-8m42kq, .framer-XKOm0 .framer-1obr9zg { padding: 0px 15px 0px 15px; }`,
          `.framer-XKOm0 .framer-12bb102 { flex-direction: column; gap: 5px; justify-content: flex-start; }`,
          `.framer-XKOm0 .framer-mh0c56-container { width: 80px; }`,
          `.framer-XKOm0 .framer-wss1tx, .framer-XKOm0 .framer-3oy4b6, .framer-XKOm0 .framer-164ldep, .framer-XKOm0 .framer-axu893, .framer-XKOm0 .framer-hhc40n, .framer-XKOm0 .framer-wzikyy { gap: 5px; }`,
          `.framer-XKOm0 .framer-1ddu0e3 { flex: none; width: 100%; }`,
          `.framer-XKOm0 .framer-toqit8 { order: 0; }`,
          `.framer-XKOm0 .framer-71pgxs { height: 45px; }`,
          `.framer-XKOm0 .framer-gv6z9o { justify-content: flex-start; order: 2; }`,
          `.framer-XKOm0 .framer-5kn63x-container { order: 1; position: relative; right: unset; top: unset; }`,
          `.framer-XKOm0 .framer-1o79f8m { flex-direction: column; gap: 10px; justify-content: flex-start; padding: 10px 0px 0px 0px; }`,
          `.framer-XKOm0 .framer-exx8aj { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-XKOm0 .framer-190f4to { gap: 15px; justify-content: flex-start; width: 100%; }`,
        ],
      }),
      (cl = Object.keys(sl)),
      (ll = {
        B0LwTTSjV: `.framer-z0qos7-override`,
        Gd3uJGvjp: `.framer-u4c0nc-override`,
        LZHu0CbE5: `.framer-qpndus-override`,
        uaLXLAR6x: `.framer-126b511-override`,
      }),
      (ul = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-XKOm0.framer-4u8tw1, .framer-XKOm0 .framer-4u8tw1 { display: block; }`,
        `.framer-XKOm0.framer-100sle3 { align-content: center; align-items: center; background-color: #031312; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-1hlibfh-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 1440px; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        `.framer-XKOm0 .framer-zx8n4w { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-XKOm0 .framer-1am2y8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; order: 1002; overflow: visible; padding: 366px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-1995h74 { background: linear-gradient(180deg, rgba(3, 19, 18, 0) 0%, rgba(3, 19, 18, 0.76) 50.86206896551724%, rgb(3, 19, 18) 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-XKOm0 .framer-8m42kq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-XKOm0 .framer-1uzwxfc, .framer-XKOm0 .framer-1kkgrxp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-XKOm0 .framer-12bb102 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-XKOm0 .framer-sz7o1, .framer-XKOm0 .framer-1ailint, .framer-XKOm0 .framer-licvpu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XKOm0 .framer-mh0c56-container { flex: none; height: auto; position: relative; width: 135px; }`,
        `.framer-XKOm0 .framer-bl3fc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XKOm0 .framer-1jp57ff-container, .framer-XKOm0 .framer-1hmv50k-container, .framer-XKOm0 .framer-1mstv4p-container, .framer-XKOm0 .framer-2zkv7d-container, .framer-XKOm0 .framer-18gqvug-container, .framer-XKOm0 .framer-16xubc4-container, .framer-XKOm0 .framer-tk8rru-container, .framer-XKOm0 .framer-135h37c-container, .framer-XKOm0 .framer-13o54n2-container, .framer-XKOm0 .framer-8lhs8a-container, .framer-XKOm0 .framer-zle8lr-container, .framer-XKOm0 .framer-20ct7w-container, .framer-XKOm0 .framer-pqeugh-container, .framer-XKOm0 .framer-x2f9fv-container, .framer-XKOm0 .framer-1h4p3ax-container, .framer-XKOm0 .framer-19ul3cu-container, .framer-XKOm0 .framer-1nr1nmj-container, .framer-XKOm0 .framer-b4ocgs-container, .framer-XKOm0 .framer-16z44zl-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-XKOm0 .framer-wss1tx, .framer-XKOm0 .framer-164ldep { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XKOm0 .framer-csmtjd, .framer-XKOm0 .framer-n1pld0, .framer-XKOm0 .framer-fj8itp, .framer-XKOm0 .framer-exx8aj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-XKOm0 .framer-3oy4b6, .framer-XKOm0 .framer-axu893 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: auto; }`,
        `.framer-XKOm0 .framer-1ddu0e3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 419px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-XKOm0 .framer-hhc40n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-wzikyy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-1mral9k-container, .framer-XKOm0 .framer-1jfkgtx-container, .framer-XKOm0 .framer-um6ln2-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-tch2ke { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-toqit8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-71pgxs { --framer-input-background: rgba(187, 187, 187, 0); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(255, 255, 255, 0.5); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 500px; --framer-input-border-radius-bottom-right: 500px; --framer-input-border-radius-top-left: 500px; --framer-input-border-radius-top-right: 500px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: rgba(153, 153, 153, 0); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 10px 10px 10px 30px; --framer-input-placeholder-color: #ffffff; flex: none; height: 65px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-gv6z9o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XKOm0 .framer-1sqazl0 { --framer-input-boolean-checked-background: #0099ff; --framer-input-border-bottom-width: 1px; --framer-input-border-color: #ffffff; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 1px; --framer-input-border-radius-bottom-right: 1px; --framer-input-border-radius-top-left: 1px; --framer-input-border-radius-top-right: 1px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-icon-color: #ffffff; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
        `.framer-XKOm0 .framer-16xfvjk { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-XKOm0 .framer-5kn63x-container { flex: none; height: auto; position: absolute; right: 10px; top: 10px; width: auto; z-index: 1; }`,
        `.framer-XKOm0 .framer-1obr9zg { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.15); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-XKOm0 .framer-1o79f8m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 15px 0px 15px 0px; position: relative; width: 1px; }`,
        `.framer-XKOm0 .framer-1ryox1s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XKOm0 .framer-190f4to { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-XKOm0 .framer-12q4bj7 { flex: none; height: auto; position: relative; white-space: pre; width: 100%; z-index: 1; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...Uc,
        ...qs,
        `.framer-XKOm0[data-border="true"]::after, .framer-XKOm0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (dl = {
        B0LwTTSjV: `(min-width: 425px) and (max-width: 767.98px)`,
        Gd3uJGvjp: `(min-width: 1024px) and (max-width: 1439.98px)`,
        IfuCJO6ZG: `(min-width: 1440px)`,
        LZHu0CbE5: `(min-width: 768px) and (max-width: 1023.98px)`,
        uaLXLAR6x: `(max-width: 424.98px)`,
      }),
      (fl = {
        "Phone L": `B0LwTTSjV`,
        Desktop: `IfuCJO6ZG`,
        Laptop: `Gd3uJGvjp`,
        Phone: `uaLXLAR6x`,
        Tablet: `LZHu0CbE5`,
      }),
      (pl = ({ value: e }) =>
        de()
          ? null
          : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (ml = ({ height: e, id: t, scrollSection: n, width: r, ...i }) => ({
        ...i,
        bO6jYUxK5: n ?? i.bO6jYUxK5,
        variant: fl[i.variant] ?? i.variant ?? `IfuCJO6ZG`,
      })),
      (hl = l(function (e, t) {
        let n = s(null),
          r = t ?? n,
          i = y(),
          { activeLocale: a, setLocale: o } = he(),
          {
            style: l,
            className: u,
            layoutId: f,
            variant: p,
            bO6jYUxK5: h,
            children: _,
            ...v
          } = ml(e),
          [b, S] = ve(p, $c, !1),
          C = E(el, Wc, Js);
        return (
          _e(),
          oe({}),
          d(re.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: fl,
              isLayoutTemplate: !0,
              primaryVariantId: `IfuCJO6ZG`,
              variantClassNames: tl,
            },
            children: m(ee, {
              id: f ?? i,
              children: [
                d(pl, { value: `:root body { background: rgb(3, 19, 18); }` }),
                m(x.div, {
                  ...v,
                  className: E(C, `framer-100sle3`, u),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...l },
                  children: [
                    d(L, {
                      breakpoint: b,
                      overrides: {
                        B0LwTTSjV: { width: `100vw` },
                        Gd3uJGvjp: { width: `100vw` },
                        LZHu0CbE5: { width: `100vw` },
                        uaLXLAR6x: { width: `100vw` },
                      },
                      children: d(B, {
                        height: 117,
                        width: `1440px`,
                        y: 0,
                        children: d(qc, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              ref: h,
                              target: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          animate: il,
                          className: `framer-1hlibfh-container`,
                          "data-framer-appear-id": `1hlibfh`,
                          "data-framer-layout-hint-center-x": !0,
                          initial: al,
                          layoutScroll: !0,
                          nodeId: `KjOb50TWX`,
                          optimized: !0,
                          rendersWithMotion: !0,
                          scopeId: `OQ8I1Bi2i`,
                          transformTemplate: rl,
                          children: d(L, {
                            breakpoint: b,
                            overrides: {
                              B0LwTTSjV: { variant: Q(`iy4aFfszC`) },
                              Gd3uJGvjp: { variant: Q(`EHD22YnUe`) },
                              LZHu0CbE5: { variant: Q(`PMPRq1B78`) },
                              uaLXLAR6x: { variant: Q(`bZr9qd9Qi`) },
                            },
                            children: d(Dc, {
                              height: `100%`,
                              id: `KjOb50TWX`,
                              layoutId: `KjOb50TWX`,
                              style: { width: `100%` },
                              variant: Q(`LtK6zAT4u`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    _,
                    d(`div`, { className: `framer-zx8n4w` }),
                    m(ye, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 1334,
                        intrinsicWidth: 2e3,
                        pixelHeight: 1334,
                        pixelWidth: 2e3,
                        sizes: `100vw`,
                        src: `../../assets/images/dFOKT4FhTEq8c3XHVneFxZI6Rxo.jpg`,
                        srcSet: `../../assets/images/dFOKT4FhTEq8c3XHVneFxZI6Rxo-7cdc8f.jpg 512w,../../assets/images/dFOKT4FhTEq8c3XHVneFxZI6Rxo-6f5d49.jpg 1024w,../../assets/images/dFOKT4FhTEq8c3XHVneFxZI6Rxo.jpg 2000w`,
                      },
                      className: `framer-1am2y8`,
                      "data-framer-name": `Footer`,
                      children: [
                        d(`div`, { className: `framer-1995h74`, "data-framer-name": `overlays` }),
                        d(`div`, {
                          className: `framer-8m42kq`,
                          "data-framer-name": `stack`,
                          children: d(`div`, {
                            className: `framer-1uzwxfc`,
                            "data-framer-name": `container`,
                            children: m(`div`, {
                              className: `framer-12bb102`,
                              children: [
                                m(`div`, {
                                  className: `framer-sz7o1`,
                                  "data-framer-name": `Logo frame`,
                                  children: [
                                    d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        B0LwTTSjV: { width: `80px` },
                                        uaLXLAR6x: { width: `80px` },
                                      },
                                      children: d(B, {
                                        height: 85,
                                        width: `135px`,
                                        children: d(R, {
                                          className: `framer-mh0c56-container`,
                                          nodeId: `X1Uzc8yXk`,
                                          scopeId: `OQ8I1Bi2i`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: { uaLXLAR6x: { variant: Q(`iVvvykN7J`) } },
                                            children: d(Ms, {
                                              height: `100%`,
                                              id: `X1Uzc8yXk`,
                                              layoutId: `X1Uzc8yXk`,
                                              style: { width: `100%` },
                                              variant: Q(`zAyU1Ty5A`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    m(`div`, {
                                      className: `framer-bl3fc`,
                                      children: [
                                        d(B, {
                                          height: 30,
                                          children: d(R, {
                                            className: `framer-1jp57ff-container`,
                                            nodeId: `SG4G0inI7`,
                                            scopeId: `OQ8I1Bi2i`,
                                            children: d($o, {
                                              height: `100%`,
                                              id: `SG4G0inI7`,
                                              j77qr9keM: `facebook.com`,
                                              layoutId: `SG4G0inI7`,
                                              variant: Q(`XgTwuZW_5`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(B, {
                                          height: 30,
                                          children: d(R, {
                                            className: `framer-1hmv50k-container`,
                                            nodeId: `cT2jXKqVW`,
                                            scopeId: `OQ8I1Bi2i`,
                                            children: d($o, {
                                              height: `100%`,
                                              id: `cT2jXKqVW`,
                                              j77qr9keM: `twitter.com`,
                                              layoutId: `cT2jXKqVW`,
                                              variant: Q(`Zl6PEJcCK`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(B, {
                                          height: 30,
                                          children: d(R, {
                                            className: `framer-1mstv4p-container`,
                                            nodeId: `o0BoIm_N4`,
                                            scopeId: `OQ8I1Bi2i`,
                                            children: d($o, {
                                              height: `100%`,
                                              id: `o0BoIm_N4`,
                                              j77qr9keM: `instagram.com`,
                                              layoutId: `o0BoIm_N4`,
                                              variant: Q(`MQwujG7Ik`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(B, {
                                          height: 30,
                                          children: d(R, {
                                            className: `framer-2zkv7d-container`,
                                            nodeId: `ohmzTxCKs`,
                                            scopeId: `OQ8I1Bi2i`,
                                            children: d($o, {
                                              height: `100%`,
                                              id: `ohmzTxCKs`,
                                              j77qr9keM: `linkedin.com`,
                                              layoutId: `ohmzTxCKs`,
                                              variant: Q(`DnO7I7Oo4`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(B, {
                                          height: 30,
                                          children: d(R, {
                                            className: `framer-18gqvug-container`,
                                            nodeId: `di_lR0uSr`,
                                            scopeId: `OQ8I1Bi2i`,
                                            children: d($o, {
                                              height: `100%`,
                                              id: `di_lR0uSr`,
                                              j77qr9keM: `youtube.com`,
                                              layoutId: `di_lR0uSr`,
                                              variant: Q(`c9pU1TSvx`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d(`div`, {
                                  className: `framer-1ailint`,
                                  "data-framer-name": `Quick links`,
                                  children: m(`div`, {
                                    className: `framer-wss1tx`,
                                    children: [
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: d(`h6`, {
                                            className: `framer-styles-preset-jopq3h`,
                                            "data-styles-preset": `mFZ8o8mNL`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                            },
                                            children: `Quick Links`,
                                          }),
                                        }),
                                        className: `framer-csmtjd`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-3oy4b6`,
                                        "data-framer-name": `Navigation Links`,
                                        children: [
                                          d(xe, {
                                            links: [
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `augiA20Il` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              d(B, {
                                                height: 31,
                                                children: d(R, {
                                                  className: `framer-16xubc4-container`,
                                                  nodeId: `Z6EqJr_0e`,
                                                  scopeId: `OQ8I1Bi2i`,
                                                  children: d(L, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      B0LwTTSjV: { lwbDzc9WO: e[3] },
                                                      Gd3uJGvjp: { lwbDzc9WO: e[1] },
                                                      LZHu0CbE5: { lwbDzc9WO: e[2] },
                                                      uaLXLAR6x: { lwbDzc9WO: e[4] },
                                                    },
                                                    children: d(Z, {
                                                      height: `100%`,
                                                      id: `Z6EqJr_0e`,
                                                      layoutId: `Z6EqJr_0e`,
                                                      lwbDzc9WO: e[0],
                                                      u1az_EGCk: `Home`,
                                                      variant: Q(`y2iEPgtji`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-tk8rru-container`,
                                              nodeId: `K7ggTHxK_`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `K7ggTHxK_`,
                                                layoutId: `K7ggTHxK_`,
                                                u1az_EGCk: `About Us`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-135h37c-container`,
                                              nodeId: `GTgp4ztjo`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `GTgp4ztjo`,
                                                layoutId: `GTgp4ztjo`,
                                                u1az_EGCk: `Services`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-13o54n2-container`,
                                              nodeId: `AhI4xMc6v`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `AhI4xMc6v`,
                                                layoutId: `AhI4xMc6v`,
                                                u1az_EGCk: `Gallery`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-8lhs8a-container`,
                                              nodeId: `VPA4YAaxu`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `VPA4YAaxu`,
                                                layoutId: `VPA4YAaxu`,
                                                u1az_EGCk: `Contact Us`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                d(`div`, {
                                  className: `framer-licvpu`,
                                  "data-framer-name": `Utility Pages`,
                                  children: m(`div`, {
                                    className: `framer-164ldep`,
                                    children: [
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: d(`h6`, {
                                            className: `framer-styles-preset-jopq3h`,
                                            "data-styles-preset": `mFZ8o8mNL`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                            },
                                            children: `Utility Pages`,
                                          }),
                                        }),
                                        className: `framer-n1pld0`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-axu893`,
                                        "data-framer-name": `Navigation Links`,
                                        children: [
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-zle8lr-container`,
                                              nodeId: `mAHyicQTB`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `mAHyicQTB`,
                                                layoutId: `mAHyicQTB`,
                                                u1az_EGCk: `Password Protected`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-20ct7w-container`,
                                              nodeId: `belDth3oo`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `belDth3oo`,
                                                layoutId: `belDth3oo`,
                                                u1az_EGCk: `404 Not Found`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-pqeugh-container`,
                                              nodeId: `Pp6Coy9CU`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `Pp6Coy9CU`,
                                                layoutId: `Pp6Coy9CU`,
                                                u1az_EGCk: `Instructions`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-x2f9fv-container`,
                                              nodeId: `BZgZZMqyU`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `BZgZZMqyU`,
                                                layoutId: `BZgZZMqyU`,
                                                u1az_EGCk: `Style Guide`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-1h4p3ax-container`,
                                              nodeId: `Uio0qQw_0`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `Uio0qQw_0`,
                                                layoutId: `Uio0qQw_0`,
                                                u1az_EGCk: `Licenses`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          d(B, {
                                            height: 31,
                                            children: d(R, {
                                              className: `framer-19ul3cu-container`,
                                              nodeId: `e1jzYbBba`,
                                              scopeId: `OQ8I1Bi2i`,
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `e1jzYbBba`,
                                                layoutId: `e1jzYbBba`,
                                                u1az_EGCk: `Changelog`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                d(`div`, {
                                  className: `framer-1ddu0e3`,
                                  "data-framer-name": `News Letter`,
                                  children: m(`div`, {
                                    className: `framer-hhc40n`,
                                    children: [
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: d(`h6`, {
                                            className: `framer-styles-preset-jopq3h`,
                                            "data-styles-preset": `mFZ8o8mNL`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                            },
                                            children: `Contact Info`,
                                          }),
                                        }),
                                        className: `framer-fj8itp`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-wzikyy`,
                                        "data-framer-name": `newsletter`,
                                        children: [
                                          d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              B0LwTTSjV: {
                                                width: `min(max(min(max(100vw - 50px, 1px), 1280px), 1px), 419px)`,
                                              },
                                              LZHu0CbE5: {
                                                width: `min(max((max(min(max(100vw - 68px, 1px), 1280px), 1px) - 10px) / 2, 50px), 419px)`,
                                              },
                                              uaLXLAR6x: {
                                                width: `min(max(min(max(100vw - 30px, 1px), 1280px), 1px), 419px)`,
                                              },
                                            },
                                            children: d(B, {
                                              height: 26,
                                              children: d(R, {
                                                className: `framer-1mral9k-container`,
                                                nodeId: `ZG4x8o7I2`,
                                                scopeId: `OQ8I1Bi2i`,
                                                children: d(Bc, {
                                                  gU6p0AfyA: `tel:+91 999 999 9999`,
                                                  height: `100%`,
                                                  id: `ZG4x8o7I2`,
                                                  layoutId: `ZG4x8o7I2`,
                                                  nAX1Zod_t: `+91 999 999 9999`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              B0LwTTSjV: {
                                                width: `min(max(min(max(100vw - 50px, 1px), 1280px), 1px), 419px)`,
                                              },
                                              LZHu0CbE5: {
                                                width: `min(max((max(min(max(100vw - 68px, 1px), 1280px), 1px) - 10px) / 2, 50px), 419px)`,
                                              },
                                              uaLXLAR6x: {
                                                width: `min(max(min(max(100vw - 30px, 1px), 1280px), 1px), 419px)`,
                                              },
                                            },
                                            children: d(B, {
                                              height: 26,
                                              children: d(R, {
                                                className: `framer-1jfkgtx-container`,
                                                nodeId: `y0A7e111Y`,
                                                scopeId: `OQ8I1Bi2i`,
                                                children: d(Bc, {
                                                  agqcSZuTE: ol(
                                                    {
                                                      pixelHeight: 20,
                                                      pixelWidth: 20,
                                                      src: `../../assets/images/sDUEbTF5kvf0xtetSqkt3zmuQ8.png`,
                                                    },
                                                    ``
                                                  ),
                                                  gU6p0AfyA: `mailto:info@urbanfitgym.com`,
                                                  height: `100%`,
                                                  id: `y0A7e111Y`,
                                                  layoutId: `y0A7e111Y`,
                                                  nAX1Zod_t: `info@urbanfitgym.com`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              B0LwTTSjV: {
                                                width: `min(max(min(max(100vw - 50px, 1px), 1280px), 1px), 419px)`,
                                              },
                                              LZHu0CbE5: {
                                                width: `min(max((max(min(max(100vw - 68px, 1px), 1280px), 1px) - 10px) / 2, 50px), 419px)`,
                                              },
                                              uaLXLAR6x: {
                                                width: `min(max(min(max(100vw - 30px, 1px), 1280px), 1px), 419px)`,
                                              },
                                            },
                                            children: d(B, {
                                              height: 26,
                                              children: d(R, {
                                                className: `framer-um6ln2-container`,
                                                nodeId: `h7ZdODKs3`,
                                                scopeId: `OQ8I1Bi2i`,
                                                children: d(Bc, {
                                                  agqcSZuTE: ol(
                                                    {
                                                      pixelHeight: 20,
                                                      pixelWidth: 20,
                                                      src: `../../assets/images/pHhE3rJPFOyJC8UjtL33YzC57s.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `h7ZdODKs3`,
                                                  layoutId: `h7ZdODKs3`,
                                                  nAX1Zod_t: `Virtual`,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      d(fe, {
                                        className: `framer-tch2ke`,
                                        nodeId: `s239yALfi`,
                                        children: (e) =>
                                          m(g, {
                                            children: [
                                              d(`label`, {
                                                className: `framer-toqit8`,
                                                children: d(ge, {
                                                  className: `framer-71pgxs`,
                                                  inputName: `Email`,
                                                  placeholder: `Enter Your Email`,
                                                  type: `email`,
                                                }),
                                              }),
                                              m(`label`, {
                                                className: `framer-gv6z9o`,
                                                children: [
                                                  d(F, {
                                                    className: `framer-1sqazl0`,
                                                    defaultChecked: !1,
                                                    inputName: `Newsletter`,
                                                    type: `checkbox`,
                                                  }),
                                                  d(H, {
                                                    __fromCanvasComponent: !0,
                                                    children: d(c, {
                                                      children: d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                          "--framer-font-size": `12px`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                                        },
                                                        children: `I agree to email receive.`,
                                                      }),
                                                    }),
                                                    className: `framer-16xfvjk`,
                                                    fonts: [`Inter-Medium`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              d(B, {
                                                height: 45,
                                                children: d(R, {
                                                  className: `framer-5kn63x-container`,
                                                  nodeId: `CvyJeI8M2`,
                                                  scopeId: `OQ8I1Bi2i`,
                                                  children: d(Vo, {
                                                    height: `100%`,
                                                    id: `CvyJeI8M2`,
                                                    layoutId: `CvyJeI8M2`,
                                                    type: `submit`,
                                                    variant: Q(`RxZKainOV`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        d(`div`, {
                          className: `framer-1obr9zg`,
                          "data-border": !0,
                          "data-framer-name": `stack`,
                          children: d(`div`, {
                            className: `framer-1kkgrxp`,
                            "data-framer-name": `container`,
                            children: m(`div`, {
                              className: `framer-1o79f8m`,
                              children: [
                                d(`div`, {
                                  className: `framer-1ryox1s`,
                                  "data-framer-name": `Links`,
                                  children: d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      B0LwTTSjV: {
                                        children: d(c, {
                                          children: d(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-line-height": `25px`,
                                              "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                            },
                                            children: d(se, {
                                              href: nl,
                                              motionChild: !0,
                                              nodeId: `KHS1d1e5m`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `OQ8I1Bi2i`,
                                              smoothScroll: !0,
                                              children: m(x.a, {
                                                className: `framer-styles-preset-72n0xi`,
                                                "data-styles-preset": `klJo7ZxF_`,
                                                children: [
                                                  `Copyright `,
                                                  d(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                                    },
                                                    children: `Botanical Shop`,
                                                  }),
                                                  ` All Right Reserve 2025.`,
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      uaLXLAR6x: {
                                        children: d(c, {
                                          children: d(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-line-height": `25px`,
                                              "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                            },
                                            children: d(se, {
                                              href: nl,
                                              motionChild: !0,
                                              nodeId: `KHS1d1e5m`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `OQ8I1Bi2i`,
                                              smoothScroll: !0,
                                              children: m(x.a, {
                                                className: `framer-styles-preset-72n0xi`,
                                                "data-styles-preset": `klJo7ZxF_`,
                                                children: [
                                                  `Copyright `,
                                                  d(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                                    },
                                                    children: `Botanical Shop`,
                                                  }),
                                                  ` All Right Reserve 2025.`,
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: d(H, {
                                      __fromCanvasComponent: !0,
                                      children: d(c, {
                                        children: d(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                            "--framer-font-size": `17px`,
                                            "--framer-line-height": `25px`,
                                            "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                          },
                                          children: d(se, {
                                            href: nl,
                                            motionChild: !0,
                                            nodeId: `KHS1d1e5m`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `OQ8I1Bi2i`,
                                            smoothScroll: !0,
                                            children: m(x.a, {
                                              className: `framer-styles-preset-72n0xi`,
                                              "data-styles-preset": `klJo7ZxF_`,
                                              children: [
                                                `Copyright `,
                                                d(`span`, {
                                                  style: {
                                                    "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                                  },
                                                  children: `Botanical Shop`,
                                                }),
                                                ` All Right Reserve 2025.`,
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-exx8aj`,
                                      fonts: [`FS;Outfit-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                m(`div`, {
                                  className: `framer-190f4to`,
                                  "data-framer-name": `Navigation Links`,
                                  children: [
                                    d(xe, {
                                      links: [
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(B, {
                                          height: 31,
                                          children: d(R, {
                                            className: `framer-1nr1nmj-container`,
                                            nodeId: `FEWngw9gD`,
                                            scopeId: `OQ8I1Bi2i`,
                                            children: d(L, {
                                              breakpoint: b,
                                              overrides: {
                                                B0LwTTSjV: { lwbDzc9WO: e[3] },
                                                Gd3uJGvjp: { lwbDzc9WO: e[1] },
                                                LZHu0CbE5: { lwbDzc9WO: e[2] },
                                                uaLXLAR6x: { lwbDzc9WO: e[4] },
                                              },
                                              children: d(Z, {
                                                height: `100%`,
                                                id: `FEWngw9gD`,
                                                layoutId: `FEWngw9gD`,
                                                lwbDzc9WO: e[0],
                                                u1az_EGCk: `Privacy Policy`,
                                                variant: Q(`y2iEPgtji`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    d(B, {
                                      height: 31,
                                      children: d(R, {
                                        className: `framer-b4ocgs-container`,
                                        nodeId: `OIP_HADeu`,
                                        scopeId: `OQ8I1Bi2i`,
                                        children: d(Z, {
                                          height: `100%`,
                                          id: `OIP_HADeu`,
                                          layoutId: `OIP_HADeu`,
                                          lwbDzc9WO: `#`,
                                          u1az_EGCk: `Terms of Use`,
                                          variant: Q(`y2iEPgtji`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    d(B, {
                                      height: 31,
                                      children: d(R, {
                                        className: `framer-16z44zl-container`,
                                        nodeId: `VExcDDfM3`,
                                        scopeId: `OQ8I1Bi2i`,
                                        children: d(Z, {
                                          height: `100%`,
                                          id: `VExcDDfM3`,
                                          layoutId: `VExcDDfM3`,
                                          lwbDzc9WO: `#`,
                                          u1az_EGCk: `Cookie Policy`,
                                          variant: Q(`y2iEPgtji`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        d(H, {
                          __fromCanvasComponent: !0,
                          children: d(c, {
                            children: d(`p`, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LWV4dHJhYm9sZA==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `167px`,
                                "--framer-font-weight": `800`,
                                "--framer-line-height": `156px`,
                                "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                "--framer-text-transform": `uppercase`,
                              },
                              children: d(`span`, {
                                "data-text-fill": `true`,
                                style: {
                                  backgroundImage: `linear-gradient(0deg, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) 0%, rgba(0, 0, 0, 0) 100%)`,
                                },
                                children: d(se, {
                                  href: nl,
                                  motionChild: !0,
                                  nodeId: `zf6CWqIp9`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `OQ8I1Bi2i`,
                                  smoothScroll: !0,
                                  children: d(x.a, {
                                    className: `framer-styles-preset-72n0xi`,
                                    "data-styles-preset": `klJo7ZxF_`,
                                    children: `Botanical Shop`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          className: `framer-12q4bj7`,
                          fonts: [`FS;Outfit-extrabold`],
                          verticalAlignment: `top`,
                          viewBox: `0 0 1457 156`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                d(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (gl = (e) =>
        e === P.canvas || e === P.export
          ? [
              ...ul,
              ...cl.flatMap((e) => {
                let t = ll[e];
                return sl[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...ul, ...cl.map((e) => `@media ${dl[e]} { ${sl[e].join(` `)} }`)]),
      (_l = be(hl, gl, `framer-XKOm0`)),
      (_l.displayName = `Header & Footer`),
      (_l.defaultProps = { height: 2e3, width: 1440 }),
      w(_l, { bO6jYUxK5: { title: `Scroll Section`, type: z.ScrollSectionRef } }),
      j(
        _l,
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/H5PDA446U7YOJH5A6HXMFOX33XDBMWB5.woff2`,
                weight: `800`,
              },
            ],
          },
          ...Kc,
          ...Jc,
          ...Yc,
          ...Xc,
          ...Zc,
          ...Qc,
          ...D(Hc),
          ...D(Ks),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (_l.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([
            k(Dc, {}, t),
            k(Ms, {}, t),
            k($o, {}, t),
            k(Z, {}, t),
            k(Bc, {}, t),
            k(Vo, {}, t),
          ])
        ),
      }));
  });
function yl(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function bl(e, t, n) {
  return (1 - n) * e + n * t;
}
function xl(e, t, n, r) {
  return bl(e, t, 1 - Math.exp(-n * r));
}
function Sl(e, t) {
  return ((e % t) + t) % t;
}
function Cl(e, t) {
  let n;
  return function (...r) {
    let i = this;
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(i, r));
      }, t)));
  };
}
var wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml = t(() => {
    (a(),
      (wl = `1.3.1`),
      (Tl = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = yl(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = xl(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (El = class {
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = Cl(this.resize, r)),
              this.wrapper instanceof Window
                ? b.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === b &&
              this.debouncedResize &&
              b.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = b.innerWidth), (this.height = b.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (Dl = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Ol = 100 / 6),
      (kl = { passive: !1 }),
      (Al = class {
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            b.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, kl),
            this.element.addEventListener(`touchstart`, this.onTouchStart, kl),
            this.element.addEventListener(`touchmove`, this.onTouchMove, kl),
            this.element.addEventListener(`touchend`, this.onTouchEnd, kl));
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new Dl();
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            b.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, kl),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, kl),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, kl),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, kl));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = r === 1 ? Ol : r === 2 ? this.window.width : 1,
            a = r === 1 ? Ol : r === 2 ? this.window.height : 1;
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: b.innerWidth, height: b.innerHeight };
        };
      }),
      (jl = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        __rafID = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new Tl();
        emitter = new Dl();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = b,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaMultiplier: o = 35,
          duration: s,
          easing: c = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: l = 0.1,
          infinite: u = !1,
          orientation: d = `vertical`,
          gestureOrientation: f = `vertical`,
          touchMultiplier: p = 1,
          wheelMultiplier: m = 1,
          autoResize: h = !0,
          prevent: g,
          virtualScroll: _,
          overscroll: v = !0,
          autoRaf: y = !1,
          anchors: x = !1,
          autoToggle: S = !1,
          allowNestedScroll: ee = !1,
          __experimental__naiveDimensions: C = !1,
        } = {}) {
          ((b.lenisVersion = wl),
            (!e || e === document.documentElement) && (e = b),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaMultiplier: o,
              duration: s,
              easing: c,
              lerp: l,
              infinite: u,
              gestureOrientation: f,
              orientation: d,
              touchMultiplier: p,
              wheelMultiplier: m,
              autoResize: h,
              prevent: g,
              virtualScroll: _,
              overscroll: v,
              autoRaf: y,
              anchors: x,
              autoToggle: S,
              allowNestedScroll: ee,
              __experimental__naiveDimensions: C,
            }),
            (this.dimensions = new El(e, t, { autoResize: h })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
            this.options.anchors &&
              this.options.wrapper === b &&
              this.options.wrapper.addEventListener(`click`, this.onClick, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new Al(n, { touchMultiplier: p, wheelMultiplier: m })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd, {
                passive: !0,
              }),
            this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
              capture: !0,
            }),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.options.anchors &&
              this.options.wrapper === b &&
              this.options.wrapper.removeEventListener(`click`, this.onClick, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this.__rafID && cancelAnimationFrame(this.__rafID));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === b,
              detail: { lenisScrollEnd: !0 },
            })
          );
        };
        onTransitionEnd = (e) => {
          if (e.propertyName.includes(`overflow`)) {
            let e = this.isHorizontal ? `overflow-x` : `overflow-y`,
              t = getComputedStyle(this.rootElement)[e];
            [`hidden`, `clip`].includes(t) ? this.stop() : this.start();
          }
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
            .composedPath()
            .find(
              (e) =>
                e instanceof HTMLAnchorElement &&
                (e.getAttribute(`href`)?.startsWith(`#`) ||
                  e.getAttribute(`href`)?.startsWith(`/#`) ||
                  e.getAttribute(`href`)?.startsWith(`./#`))
            );
          if (t) {
            let e = t.getAttribute(`href`);
            if (e) {
              let t =
                  typeof this.options.anchors == `object` && this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = `#${e.split(`#`)[1]}`;
              ([`#`, `/#`, `./#`, `#top`, `/#top`, `./#top`].includes(e) && (n = 0),
                this.scrollTo(n, t));
            }
          }
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`);
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
          let o = t === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (o || s) return;
          let c = r.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          let l = this.options.prevent;
          if (
            c.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof l == `function` && l?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(e, { deltaX: t, deltaY: n })))
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.preventDefault();
            return;
          }
          if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
            ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
            return;
          }
          let u = n;
          (this.options.gestureOrientation === `both`
            ? (u = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (u = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== b &&
                ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.preventDefault());
          let d = i && this.options.syncTouch,
            f = i && r.type === `touchend` && Math.abs(u) > 5;
          (f && (u = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + u, {
              programmatic: !1,
              ...(d
                ? { lerp: f ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped &&= (this.reset(), !1);
        }
        stop() {
          this.isStopped ||= (this.reset(), !0);
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d,
          } = {}
        ) {
          if (!((this.isStopped || this.isLocked) && !l)) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e instanceof HTMLElement && e?.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== b) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (((e += t), (e = Math.round(e)), this.options.infinite)) {
                if (u) {
                  this.targetScroll = this.animatedScroll = this.scroll;
                  let t = e - this.animatedScroll;
                  t > this.limit / 2 ? (e -= this.limit) : t < -this.limit / 2 && (e += this.limit);
                }
              } else e = yl(0, e, this.limit);
              if (e === this.targetScroll) {
                (s?.(this), c?.(this));
                return;
              }
              if (((this.userData = d ?? {}), n)) {
                ((this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  c?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }));
                return;
              }
              (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        c?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent();
                        }),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        checkNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now(),
            i = (e._lenis ??= {}),
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p = this.options.gestureOrientation;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = b.getComputedStyle(e);
            i.computedStyle = t;
            let n = t.overflowX,
              r = t.overflowY;
            if (
              ((a = [`auto`, `overlay`, `scroll`].includes(n)),
              (o = [`auto`, `overlay`, `scroll`].includes(r)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              (!a && !o) || (p === `vertical` && !o) || (p === `horizontal` && !a))
            )
              return !1;
            ((l = e.scrollWidth),
              (u = e.scrollHeight),
              (d = e.clientWidth),
              (f = e.clientHeight),
              (s = l > d),
              (c = u > f),
              (i.isScrollableX = s),
              (i.isScrollableY = c),
              (i.scrollWidth = l),
              (i.scrollHeight = u),
              (i.clientWidth = d),
              (i.clientHeight = f));
          } else
            ((s = i.isScrollableX),
              (c = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (l = i.scrollWidth),
              (u = i.scrollHeight),
              (d = i.clientWidth),
              (f = i.clientHeight));
          if (
            (!a && !o) ||
            (!s && !c) ||
            (p === `vertical` && (!o || !c)) ||
            (p === `horizontal` && (!a || !s))
          )
            return !1;
          let m;
          if (p === `horizontal`) m = `x`;
          else if (p === `vertical`) m = `y`;
          else {
            let e = t !== 0,
              r = n !== 0;
            (e && a && s && (m = `x`), r && o && c && (m = `y`));
          }
          if (!m) return !1;
          let h, g, _, v, y;
          if (m === `x`) ((h = e.scrollLeft), (g = l - d), (_ = t), (v = a), (y = s));
          else if (m === `y`) ((h = e.scrollTop), (g = u - f), (_ = n), (v = o), (y = c));
          else return !1;
          return (_ > 0 ? h < g : h > 0) && v && y;
        }
        get rootElement() {
          return this.options.wrapper === b ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite ? Sl(this.animatedScroll, this.limit) : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function Nl({ smooth: e, easing: t, infinite: n, orientation: r, intensity: i, children: a }) {
  let c = s(),
    l = s();
  return (
    o(() => {
      if (a && (!c.current || !l.current)) return;
      c.current &&
        l.current &&
        (r === `horizontal`
          ? c.current.style.setProperty(`overflowX`, `auto`)
          : c.current.style.setProperty(`overflowY`, `auto`));
      let t = new jl({
        smoothWheel: e,
        duration: i / 10,
        infinite: n,
        orientation: r,
        gestureOrientation: r === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: c.current,
        content: l.current,
      });
      return (
        (b.lenis = t),
        () => {
          t.destroy();
        }
      );
    }, [a]),
    m(g, {
      children: [
        d(`link`, { href: `../../styles/lenis.css`, rel: `stylesheet` }),
        a &&
          d(`div`, {
            ref: c,
            style:
              r === `horizontal`
                ? { overflowX: `auto`, width: `100%` }
                : { overflowY: `auto`, height: `100%` },
            children: d(`div`, { ref: l, children: a }),
          }),
      ],
    })
  );
}
var Pl = t(() => {
    (a(),
      h(),
      M(),
      Ml(),
      _(),
      w(Nl, {
        smooth: { type: z.Boolean, title: `Smooth`, defaultValue: !0 },
        intensity: {
          type: z.Number,
          title: `Intensity`,
          defaultValue: 12,
          step: 1,
          min: 1,
          max: 100,
        },
        infinite: { type: z.Boolean, title: `Infinite`, defaultValue: !1 },
        orientation: {
          type: z.Enum,
          defaultValue: `Vertical`,
          displaySegmentedControl: !0,
          options: [`vertical`, `horizontal`],
          optionTitles: [`Vertical`, `Horizontal`],
        },
        children: { type: z.ComponentInstance, title: `Content` },
      }));
  }),
  Fl,
  Il,
  Ll,
  Rl = t(() => {
    (M(),
      T.loadFonts([`FS;Outfit-light`, `FS;Outfit-regular`]),
      (Fl = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/W7JHARPQSG6P4YAUJKIMUM6JNAX2RFW3.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Il = [
        `.framer-HzV1q .framer-styles-preset-6mjars:not(.rich-text-wrapper), .framer-HzV1q .framer-styles-preset-6mjars.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-HzV1q .framer-styles-preset-6mjars:not(.rich-text-wrapper), .framer-HzV1q .framer-styles-preset-6mjars.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-HzV1q .framer-styles-preset-6mjars:not(.rich-text-wrapper), .framer-HzV1q .framer-styles-preset-6mjars.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-HzV1q .framer-styles-preset-6mjars:not(.rich-text-wrapper), .framer-HzV1q .framer-styles-preset-6mjars.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-HzV1q .framer-styles-preset-6mjars:not(.rich-text-wrapper), .framer-HzV1q .framer-styles-preset-6mjars.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ll = `framer-HzV1q`));
  }),
  zl,
  Bl,
  Vl,
  Hl = t(() => {
    (M(),
      T.loadFonts([`CUSTOMV2;Bilgie Regular`]),
      (zl = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bilgie Regular`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Bilgie`,
              url: `../../assets/fonts/J0e5AkBwffUWnnMP5DD2OVRBrxk.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Bl = [
        `.framer-dE75W .framer-styles-preset-tt7wqy:not(.rich-text-wrapper), .framer-dE75W .framer-styles-preset-tt7wqy.rich-text-wrapper h5 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 27px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-dE75W .framer-styles-preset-tt7wqy:not(.rich-text-wrapper), .framer-dE75W .framer-styles-preset-tt7wqy.rich-text-wrapper h5 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 27px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-dE75W .framer-styles-preset-tt7wqy:not(.rich-text-wrapper), .framer-dE75W .framer-styles-preset-tt7wqy.rich-text-wrapper h5 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 27px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-dE75W .framer-styles-preset-tt7wqy:not(.rich-text-wrapper), .framer-dE75W .framer-styles-preset-tt7wqy.rich-text-wrapper h5 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-dE75W .framer-styles-preset-tt7wqy:not(.rich-text-wrapper), .framer-dE75W .framer-styles-preset-tt7wqy.rich-text-wrapper h5 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 24px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Vl = `framer-dE75W`));
  });
function Ul(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l = t(() => {
    (h(),
      M(),
      C(),
      _(),
      (Wl = { IAcbRn5R7: { hover: !0 } }),
      (Gl = `framer-zXULr`),
      (Kl = { IAcbRn5R7: `framer-v-upepaf` }),
      (ql = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jl = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Yl = x.create(c)),
      (Xl = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        wcod1WPsT: n ?? i.wcod1WPsT,
      })),
      (Zl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ql = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let { style: c, className: l, layoutId: u, variant: f, wcod1WPsT: p, ...h } = Xl(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ue({
              defaultVariant: `IAcbRn5R7`,
              enabledGestures: Wl,
              ref: r,
              variant: f,
              variantClassNames: Kl,
            }),
            O = Zl(e, D),
            k = E(Gl);
          return d(ee, {
            id: u ?? i,
            children: d(Yl, {
              animate: D,
              initial: !1,
              children: d(Jl, {
                value: ql,
                children: d(se, {
                  href: p,
                  motionChild: !0,
                  nodeId: `IAcbRn5R7`,
                  openInNewTab: !1,
                  scopeId: `iC1Esijyn`,
                  smoothScroll: !0,
                  children: d(x.a, {
                    ...h,
                    ...b,
                    className: `${E(k, `framer-upepaf`, l, _)} framer-1jagtfs`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: O,
                    layoutId: `IAcbRn5R7`,
                    ref: r,
                    style: { ...c },
                    ...Ul({ "IAcbRn5R7-hover": { "data-framer-name": void 0 } }, g, S),
                    children: m(I, {
                      className: `framer-vk7hqp`,
                      layoutDependency: O,
                      layoutId: `qDxVAfL_x`,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38.5 38.5" overflow="visible"><g><path d="M 19.25 38.5 C 8.619 38.5 0 29.881 0 19.25 C 0 8.619 8.619 0 19.25 0 C 29.881 0 38.5 8.619 38.5 19.25 C 38.5 29.881 29.881 38.5 19.25 38.5 Z" fill="transparent" stroke-width="1.5" stroke="rgb(255,255,255)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 8.85 18.5 C 8.436 18.5 8.1 18.836 8.1 19.25 C 8.1 19.664 8.436 20 8.85 20 Z M 30.18 19.78 C 30.472 19.487 30.472 19.013 30.18 18.72 L 25.407 13.947 C 25.111 13.672 24.651 13.68 24.365 13.965 C 24.08 14.251 24.072 14.711 24.347 15.007 L 28.588 19.25 L 24.345 23.493 C 24.061 23.787 24.065 24.255 24.355 24.544 C 24.644 24.834 25.112 24.837 25.406 24.553 L 30.179 19.78 Z M 8.85 19.25 L 8.85 20 L 29.65 20 L 29.65 18.5 L 8.85 18.5 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                      withExternalLayout: !0,
                      ...Ul(
                        {
                          "IAcbRn5R7-hover": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38.5 38.5" overflow="visible"><g><path d="M 19.25 38.5 C 8.619 38.5 0 29.881 0 19.25 C 0 8.619 8.619 0 19.25 0 C 29.881 0 38.5 8.619 38.5 19.25 C 38.5 29.881 29.881 38.5 19.25 38.5 Z" fill="transparent" stroke-width="1.5" stroke="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 8.85 18.5 C 8.436 18.5 8.1 18.836 8.1 19.25 C 8.1 19.664 8.436 20 8.85 20 Z M 30.18 19.78 C 30.472 19.487 30.472 19.013 30.18 18.72 L 25.407 13.947 C 25.111 13.672 24.651 13.68 24.365 13.965 C 24.08 14.251 24.072 14.711 24.347 15.007 L 28.588 19.25 L 24.345 23.493 C 24.061 23.787 24.065 24.255 24.355 24.544 C 24.644 24.834 25.112 24.837 25.406 24.553 L 30.179 19.78 Z M 8.85 19.25 L 8.85 20 L 29.65 20 L 29.65 18.5 L 8.85 18.5 Z" fill="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */"></path></g></svg>`,
                          },
                        },
                        g,
                        S
                      ),
                      children: [
                        d(I, {
                          className: `framer-102gaul`,
                          layoutDependency: O,
                          layoutId: `Cnuxi34oA`,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38.5 38.5" overflow="visible"><path d="M 19.25 38.5 C 8.619 38.5 0 29.881 0 19.25 C 0 8.619 8.619 0 19.25 0 C 29.881 0 38.5 8.619 38.5 19.25 C 38.5 29.881 29.881 38.5 19.25 38.5 Z" fill="transparent" stroke-width="1.5" stroke="rgb(255,255,255)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                          withExternalLayout: !0,
                          ...Ul(
                            {
                              "IAcbRn5R7-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38.5 38.5" overflow="visible"><path d="M 19.25 38.5 C 8.619 38.5 0 29.881 0 19.25 C 0 8.619 8.619 0 19.25 0 C 29.881 0 38.5 8.619 38.5 19.25 C 38.5 29.881 29.881 38.5 19.25 38.5 Z" fill="transparent" stroke-width="1.5" stroke="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                              },
                            },
                            g,
                            S
                          ),
                        }),
                        m(I, {
                          className: `framer-1aj918r`,
                          layoutDependency: O,
                          layoutId: `z3LivGfo3`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.299 11.018" overflow="visible"><path d="M 0.75 4.754 C 0.336 4.754 0 5.09 0 5.504 C 0 5.919 0.336 6.254 0.75 6.254 Z M 22.08 6.034 C 22.372 5.741 22.372 5.267 22.08 4.974 L 17.307 0.201 C 17.011 -0.074 16.551 -0.066 16.265 0.22 C 15.98 0.505 15.972 0.966 16.247 1.261 L 20.488 5.504 L 16.245 9.747 C 15.961 10.042 15.965 10.509 16.255 10.799 C 16.544 11.088 17.012 11.092 17.306 10.807 L 22.079 6.034 Z M 0.75 5.504 L 0.75 6.254 L 21.55 6.254 L 21.55 4.754 L 0.75 4.754 Z" fill="rgb(255,255,255)"></path></svg>`,
                          withExternalLayout: !0,
                          ...Ul(
                            {
                              "IAcbRn5R7-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.299 11.018" overflow="visible"><path d="M 0.75 4.754 C 0.336 4.754 0 5.09 0 5.504 C 0 5.919 0.336 6.254 0.75 6.254 Z M 22.08 6.034 C 22.372 5.741 22.372 5.267 22.08 4.974 L 17.307 0.201 C 17.011 -0.074 16.551 -0.066 16.265 0.22 C 15.98 0.505 15.972 0.966 16.247 1.261 L 20.488 5.504 L 16.245 9.747 C 15.961 10.042 15.965 10.509 16.255 10.799 C 16.544 11.088 17.012 11.092 17.306 10.807 L 22.079 6.034 Z M 0.75 5.504 L 0.75 6.254 L 21.55 6.254 L 21.55 4.754 L 0.75 4.754 Z" fill="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */"></path></svg>`,
                              },
                            },
                            g,
                            S
                          ),
                          children: [
                            d(I, {
                              className: `framer-xd0z79`,
                              layoutDependency: O,
                              layoutId: `tQqMVt0x8`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1.5" overflow="visible"><path d="M 0.75 0 C 0.336 0 0 0.336 0 0.75 C 0 1.164 0.336 1.5 0.75 1.5 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            d(I, {
                              className: `framer-4sn2ze`,
                              layoutDependency: O,
                              layoutId: `VFU5I2NqJ`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.265 11.018" overflow="visible"><path d="M 6.045 6.034 C 6.338 5.741 6.338 5.267 6.045 4.974 L 1.272 0.201 C 0.977 -0.074 0.516 -0.066 0.231 0.22 C -0.055 0.505 -0.063 0.966 0.212 1.261 L 4.453 5.504 L 0.21 9.747 C -0.074 10.042 -0.07 10.509 0.22 10.799 C 0.509 11.088 0.977 11.092 1.271 10.807 L 6.044 6.034 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            d(I, {
                              className: `framer-1r1dg0r`,
                              layoutDependency: O,
                              layoutId: `xwgoj7kLT`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.8 1.5" overflow="visible"><path d="M 0 0.75 L 0 1.5 L 20.8 1.5 L 20.8 0 L 0 0 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-zXULr.framer-1jagtfs, .framer-zXULr .framer-1jagtfs { display: block; }`,
          `.framer-zXULr.framer-upepaf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-zXULr .framer-vk7hqp { height: 39px; position: relative; width: 39px; }`,
          `.framer-zXULr .framer-102gaul { height: 39px; left: 0px; position: absolute; top: 0px; width: 39px; }`,
          `.framer-zXULr .framer-1aj918r { height: 11px; left: 8px; position: absolute; top: 14px; width: 23px; }`,
          `.framer-zXULr .framer-xd0z79 { height: 2px; left: 0px; position: absolute; top: 5px; width: 1px; }`,
          `.framer-zXULr .framer-4sn2ze { height: 11px; left: 16px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-zXULr .framer-1r1dg0r { height: 2px; left: 1px; position: absolute; top: 5px; width: 21px; }`,
        ],
        `framer-zXULr`
      )),
      (Ql.displayName = `services buttons`),
      (Ql.defaultProps = { height: 39, width: 39 }),
      w(Ql, { wcod1WPsT: { title: `Link`, type: z.Link } }),
      j(Ql, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function eu(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Rl(),
      Hl(),
      $l(),
      (tu = ce(x.div)),
      (nu = A(Ql)),
      (ru = { ORgmu0Ays: { hover: !0 }, Upyh8kGBa: { hover: !0 }, yUGqi8AWJ: { hover: !0 } }),
      (iu = [`yUGqi8AWJ`, `Upyh8kGBa`, `ORgmu0Ays`]),
      (au = `framer-G1jjt`),
      (ou = {
        ORgmu0Ays: `framer-v-9a1jy`,
        Upyh8kGBa: `framer-v-5rug5f`,
        yUGqi8AWJ: `framer-v-89488r`,
      }),
      (su = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (cu = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (lu = (e, t) => `translate(-50%, -50%) ${t}`),
      (uu = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (du = { "reverce box": `Upyh8kGBa`, "Variant 1": `yUGqi8AWJ`, Mobile: `ORgmu0Ays` }),
      (fu = x.create(c)),
      (pu = ({ height: e, id: t, image: n, link: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        EZAWhreMz: r ?? s.EZAWhreMz,
        IL7YAzh0h: a ?? s.IL7YAzh0h ?? `Fresh From The Nursery`,
        jcKrm_CHZ: n ??
          s.jcKrm_CHZ ?? {
            alt: ``,
            pixelHeight: 360,
            pixelWidth: 360,
            src: `../../assets/images/598yzVCCGv48kFZ1Y6wnqnLDpjA.png`,
          },
        variant: du[s.variant] ?? s.variant ?? `yUGqi8AWJ`,
        z_6A2D3TA:
          i ??
          s.z_6A2D3TA ??
          `Handpicked daily from our nursery, each plant is carefully selected to ensure vibrant leaves, healthy roots, and long-lasting freshness for your home or workspace.`,
      })),
      (mu = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (hu = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he(),
            l = te(),
            {
              style: u,
              className: f,
              layoutId: p,
              variant: h,
              jcKrm_CHZ: g,
              IL7YAzh0h: _,
              z_6A2D3TA: v,
              EZAWhreMz: b,
              ...S
            } = pu(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = ue({
              cycleOrder: iu,
              defaultVariant: `yUGqi8AWJ`,
              enabledGestures: ru,
              ref: r,
              variant: h,
              variantClassNames: ou,
            }),
            P = mu(e, N),
            F = E(au, Vl, Ll);
          return d(ee, {
            id: p ?? i,
            children: d(fu, {
              animate: N,
              initial: !1,
              children: d(uu, {
                value: su,
                children: m(x.div, {
                  ...S,
                  ...D,
                  className: E(F, `framer-89488r`, f, w),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: P,
                  layoutId: `yUGqi8AWJ`,
                  ref: r,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...u },
                  variants: {
                    "ORgmu0Ays-hover": {
                      backgroundColor: `var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47))`,
                    },
                    "Upyh8kGBa-hover": {
                      backgroundColor: `var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47))`,
                    },
                    "yUGqi8AWJ-hover": {
                      backgroundColor: `var(--token-b78aea64-e976-48aa-82cf-a415b1a2d487, rgb(11, 49, 47))`,
                    },
                  },
                  ...eu(
                    {
                      "ORgmu0Ays-hover": { "data-framer-name": void 0 },
                      "Upyh8kGBa-hover": { "data-framer-name": void 0 },
                      "yUGqi8AWJ-hover": { "data-framer-name": void 0 },
                      ORgmu0Ays: { "data-framer-name": `Mobile` },
                      Upyh8kGBa: { "data-framer-name": `reverce box` },
                    },
                    C,
                    k
                  ),
                  children: [
                    d(ye, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 360,
                        intrinsicWidth: 360,
                        loading: O((l?.y || 0) + (0 + ((l?.height || 360) - 0 - 360) / 2)),
                        pixelHeight: 360,
                        pixelWidth: 360,
                        sizes: `max(${l?.width || `100vw`} / 2, 1px)`,
                        ...cu(g),
                      },
                      className: `framer-ina8p1`,
                      "data-border": !0,
                      layoutDependency: P,
                      layoutId: `PomUzY5f2`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(255, 255, 255, 0.1)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      ...eu(
                        {
                          ORgmu0Ays: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 360,
                              intrinsicWidth: 360,
                              loading: O(
                                (l?.y || 0) + 0 + (((l?.height || 590) - 0 - 616) / 2 + 0 + 0)
                              ),
                              pixelHeight: 360,
                              pixelWidth: 360,
                              sizes: l?.width || `100vw`,
                              ...cu(g),
                            },
                          },
                        },
                        C,
                        k
                      ),
                    }),
                    m(x.div, {
                      className: `framer-6vm1ek`,
                      "data-border": !0,
                      layoutDependency: P,
                      layoutId: `r5DOvSvWs`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(255, 255, 255, 0.1)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      variants: {
                        ORgmu0Ays: { "--border-bottom-width": `1px`, "--border-top-width": `0px` },
                        Upyh8kGBa: { "--border-bottom-width": `1px`, "--border-top-width": `0px` },
                      },
                      children: [
                        m(tu, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-s57ry1`,
                          "data-framer-name": `Our plants`,
                          layoutDependency: P,
                          layoutId: `hdsnXalhA`,
                          children: [
                            d(H, {
                              __fromCanvasComponent: !0,
                              children: d(c, {
                                children: d(x.h5, {
                                  className: `framer-styles-preset-tt7wqy`,
                                  "data-styles-preset": `CLq2BIXXt`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                                  },
                                  children: `Fresh From The Nursery`,
                                }),
                              }),
                              className: `framer-1km6b1e`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `npgi17pY3`,
                              style: {
                                "--extracted-1lwpl3i": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(H, {
                              __fromCanvasComponent: !0,
                              children: d(c, {
                                children: d(x.p, {
                                  className: `framer-styles-preset-6mjars`,
                                  "data-styles-preset": `A2dn5jtrl`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217)))`,
                                  },
                                  children: `Handpicked daily from our nursery, each plant is carefully selected to ensure vibrant leaves, healthy roots, and long-lasting freshness for your home or workspace.`,
                                }),
                              }),
                              className: `framer-suye5h`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `Y2kGOTsWT`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        d(B, {
                          height: 39,
                          y:
                            (l?.y || 0) +
                            (0 + ((l?.height || 360) - 0 - ((l?.height || 360) - 0) * 1) / 2) +
                            (((l?.height || 360) - 0) * 1 * 0.8611111111111114 - 19.5),
                          ...eu(
                            {
                              ORgmu0Ays: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 590) - 0 - 616) / 2 + 350 + 0) +
                                  20 +
                                  187,
                              },
                              Upyh8kGBa: {
                                y:
                                  (l?.y || 0) +
                                  (0 +
                                    ((l?.height || 360) - 0 - ((l?.height || 360) - 0) * 1) / 2) +
                                  ((l?.height || 360) - 0) * 1 -
                                  69,
                              },
                            },
                            C,
                            k
                          ),
                          children: d(V, {
                            className: `framer-17hqpj7-container`,
                            layoutDependency: P,
                            layoutId: `UuoFqI8Ev-container`,
                            nodeId: `UuoFqI8Ev`,
                            rendersWithMotion: !0,
                            scopeId: `b3NZTLMlz`,
                            transformTemplate: lu,
                            ...eu(
                              {
                                "ORgmu0Ays-hover": { transformTemplate: void 0 },
                                "Upyh8kGBa-hover": { transformTemplate: void 0 },
                                ORgmu0Ays: { transformTemplate: void 0 },
                                Upyh8kGBa: { transformTemplate: void 0 },
                              },
                              C,
                              k
                            ),
                            children: d(Ql, {
                              height: `100%`,
                              id: `UuoFqI8Ev`,
                              layoutId: `UuoFqI8Ev`,
                              wcod1WPsT: b,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-G1jjt.framer-ia3dqw, .framer-G1jjt .framer-ia3dqw { display: block; }`,
          `.framer-G1jjt.framer-89488r { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 360px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 720px; }`,
          `.framer-G1jjt .framer-ina8p1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 360px; justify-content: center; overflow: visible; padding: 50px 30px 50px 30px; position: relative; width: 1px; }`,
          `.framer-G1jjt .framer-6vm1ek { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 50px 30px 50px 30px; position: relative; width: 1px; }`,
          `.framer-G1jjt .framer-s57ry1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 300px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-G1jjt .framer-1km6b1e, .framer-G1jjt .framer-suye5h { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-G1jjt .framer-17hqpj7-container { flex: none; height: auto; left: 87%; position: absolute; top: 86%; width: auto; }`,
          `.framer-G1jjt.framer-v-5rug5f .framer-ina8p1 { order: 1; }`,
          `.framer-G1jjt.framer-v-5rug5f .framer-6vm1ek { order: 0; }`,
          `.framer-G1jjt.framer-v-5rug5f .framer-17hqpj7-container { bottom: 30px; left: unset; right: 30px; top: unset; }`,
          `.framer-G1jjt.framer-v-9a1jy.framer-89488r { flex-direction: column; height: min-content; width: 425px; }`,
          `.framer-G1jjt.framer-v-9a1jy .framer-ina8p1 { flex: none; height: 350px; order: 0; width: 100%; }`,
          `.framer-G1jjt.framer-v-9a1jy .framer-6vm1ek { flex: none; gap: 20px; height: min-content; order: 1; padding: 20px; width: 100%; }`,
          `.framer-G1jjt.framer-v-9a1jy .framer-s57ry1, .framer-G1jjt.framer-v-9a1jy.hover .framer-s57ry1 { max-width: unset; }`,
          `.framer-G1jjt.framer-v-9a1jy .framer-17hqpj7-container { left: unset; position: relative; top: unset; }`,
          `.framer-G1jjt.framer-v-5rug5f.hover .framer-17hqpj7-container, .framer-G1jjt.framer-v-9a1jy.hover .framer-17hqpj7-container { left: unset; top: unset; }`,
          ...Bl,
          ...Il,
          `.framer-G1jjt[data-border="true"]::after, .framer-G1jjt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-G1jjt`
      )),
      (hu.displayName = `Services`),
      (hu.defaultProps = { height: 360, width: 720 }),
      w(hu, {
        variant: {
          options: [`yUGqi8AWJ`, `Upyh8kGBa`, `ORgmu0Ays`],
          optionTitles: [`Variant 1`, `reverce box`, `Mobile`],
          title: `Variant`,
          type: z.Enum,
        },
        jcKrm_CHZ: {
          __defaultAssetReference: `data:framer/asset-reference,598yzVCCGv48kFZ1Y6wnqnLDpjA.png?originalFilename=Rectangle+34627392.png&width=360&height=360`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,598yzVCCGv48kFZ1Y6wnqnLDpjA.png?originalFilename=Rectangle+34627392.png&width=360&height=360`,
          },
          title: `Image`,
          type: z.ResponsiveImage,
        },
        IL7YAzh0h: {
          defaultValue: `Fresh From The Nursery`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onIL7YAzh0hChange: { changes: `IL7YAzh0h`, type: z.ChangeHandler },
        z_6A2D3TA: {
          defaultValue: `Handpicked daily from our nursery, each plant is carefully selected to ensure vibrant leaves, healthy roots, and long-lasting freshness for your home or workspace.`,
          displayTextArea: !1,
          title: `Text`,
          type: z.String,
        },
        onz_6A2D3TAChange: { changes: `z_6A2D3TA`, type: z.ChangeHandler },
        EZAWhreMz: { title: `Link`, type: z.Link },
      }),
      j(
        hu,
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
          ...nu,
          ...D(zl),
          ...D(Fl),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (hu.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(Ql, {}, t)])) }));
  });
function _u(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var vu,
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
  Iu = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Ns(),
      (vu = A(Ms)),
      (yu = ce(V)),
      (bu = [`hT69zwZi7`, `j4a92e7cy`, `qfyas0GgH`]),
      (xu = `framer-SyNMW`),
      (Su = {
        hT69zwZi7: `framer-v-1n8pcej`,
        j4a92e7cy: `framer-v-1oc98t3`,
        qfyas0GgH: `framer-v-w3mx9e`,
      }),
      (Cu = { delay: 0, duration: 0.9, ease: [0.96, -0.02, 0.38, 1.01], type: `tween` }),
      (wu = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Tu = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Eu = (e, t) => `translate(-50%, -50%) ${t}`),
      (Du = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ou = { bounce: 0.2, delay: 0, duration: 2.5, type: `spring` }),
      (ku = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -560,
      }),
      (Au = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (ju = { "1 - Desktop": `hT69zwZi7`, "2 - Desktop": `j4a92e7cy`, "3 - Desktop": `qfyas0GgH` }),
      (Mu = x.create(c)),
      (Nu = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ju[r.variant] ?? r.variant ?? `hT69zwZi7`,
      })),
      (Pu = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Fu = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he(),
            c = te(),
            { style: l, className: u, layoutId: f, variant: p, ...h } = Nu(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ue({
              cycleOrder: bu,
              defaultVariant: `hT69zwZi7`,
              ref: r,
              variant: p,
              variantClassNames: Su,
            }),
            O = Pu(e, D),
            { activeVariantCallback: k, delay: A } = N(g);
          ne(g, {
            default: k(async (...e) => {
              await A(() => T(`j4a92e7cy`), 1500);
            }),
            j4a92e7cy: k(async (...e) => {
              T(`qfyas0GgH`);
            }),
            qfyas0GgH: void 0,
          });
          let j = E(xu),
            M = () => g !== `qfyas0GgH`;
          return d(ee, {
            id: f ?? i,
            children: d(Mu, {
              animate: D,
              initial: !1,
              children: d(Au, {
                value: Cu,
                children: m(x.div, {
                  ...h,
                  ...b,
                  className: E(j, `framer-1n8pcej`, u, _),
                  "data-framer-name": `1 - Desktop`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `hT69zwZi7`,
                  ref: r,
                  style: { filter: `blur(0px)`, WebkitFilter: `blur(0px)`, ...l },
                  ..._u(
                    {
                      j4a92e7cy: { "data-framer-name": `2 - Desktop` },
                      qfyas0GgH: { "data-framer-name": `3 - Desktop`, "data-highlight": void 0 },
                    },
                    g,
                    S
                  ),
                  children: [
                    M() &&
                      d(B, {
                        height: 85,
                        width: `200px`,
                        y: (c?.y || 0) + ((c?.height || 800) * 0.5000000000000002 - 42.5),
                        children: d(yu, {
                          __framer__animate: { transition: wu },
                          __framer__animateOnce: !1,
                          __framer__scrollDirection: { direction: `down`, target: Tu },
                          __framer__spring: {
                            bounce: 0,
                            damping: 60,
                            delay: 0,
                            duration: 0.5,
                            durationBasedSpring: !0,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__threshold: 0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onInView`,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-12fjy4a-container`,
                          layoutDependency: O,
                          layoutId: `pH0mV3BK5-container`,
                          nodeId: `pH0mV3BK5`,
                          rendersWithMotion: !0,
                          scopeId: `G5zwuGUpb`,
                          transformTemplate: Eu,
                          ..._u(
                            {
                              j4a92e7cy: {
                                __framer__animate: { transition: Ou },
                                __framer__scrollDirection: { direction: `down`, target: ku },
                              },
                            },
                            g,
                            S
                          ),
                          children: d(Ms, {
                            height: `100%`,
                            id: `pH0mV3BK5`,
                            layoutId: `pH0mV3BK5`,
                            style: { width: `100%` },
                            variant: Du(`zAyU1Ty5A`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    d(x.div, {
                      className: `framer-schho8`,
                      "data-framer-name": `BG`,
                      layoutDependency: O,
                      layoutId: `mtbtJ4_Bh`,
                      style: { backgroundColor: `rgb(0, 28, 26)` },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SyNMW.framer-11xcvad, .framer-SyNMW .framer-11xcvad { display: block; }`,
          `.framer-SyNMW.framer-1n8pcej { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-SyNMW .framer-12fjy4a-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 200px; z-index: 1; }`,
          `.framer-SyNMW .framer-schho8 { flex: none; gap: 0px; height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: visible; position: relative; width: 100%; z-index: 0; }`,
          `.framer-SyNMW.framer-v-w3mx9e.framer-1n8pcej { min-height: 939px; }`,
          `.framer-SyNMW.framer-v-w3mx9e .framer-schho8 { height: 2px; left: 0px; position: absolute; right: 0px; top: -2px; width: unset; }`,
        ],
        `framer-SyNMW`
      )),
      (Fu.displayName = `Preloader 2`),
      (Fu.defaultProps = { height: 800, width: 1200 }),
      w(Fu, {
        variant: {
          options: [`hT69zwZi7`, `j4a92e7cy`, `qfyas0GgH`],
          optionTitles: [`1 - Desktop`, `2 - Desktop`, `3 - Desktop`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      j(Fu, [{ explicitInter: !0, fonts: [] }, ...vu], { supportsExplicitInterCodegen: !0 }),
      (Fu.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(Ms, {}, t)])) }));
  });
function Lu(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Rl(),
      Hl(),
      (Ru = [`yVUVaOUe1`, `QYPJzY0pm`]),
      (zu = `framer-RG46p`),
      (Bu = { QYPJzY0pm: `framer-v-1f06ra7`, yVUVaOUe1: `framer-v-m0lpp0` }),
      (Vu = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Hu = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Uu = { "Variant 1": `yVUVaOUe1`, Phone: `QYPJzY0pm` }),
      (Wu = x.create(c)),
      (Gu = ({ height: e, id: t, text: n, title: r, width: i, ...a }) => ({
        ...a,
        h2S20wL4h:
          n ?? a.h2S20wL4h ?? `Perfect for beginners, this hardy plant improves air quality`,
        variant: Uu[a.variant] ?? a.variant ?? `yVUVaOUe1`,
        zipU3LcpC: r ?? a.zipU3LcpC ?? `Snake Plant`,
      })),
      (Ku = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qu = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              zipU3LcpC: h,
              h2S20wL4h: g,
              ..._
            } = Gu(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = ue({
              cycleOrder: Ru,
              defaultVariant: `yVUVaOUe1`,
              ref: r,
              variant: p,
              variantClassNames: Bu,
            }),
            A = Ku(e, k),
            j = E(zu, Vl, Ll);
          return d(ee, {
            id: f ?? i,
            children: d(Wu, {
              animate: k,
              initial: !1,
              children: d(Hu, {
                value: Vu,
                children: m(x.div, {
                  ..._,
                  ...C,
                  className: E(j, `framer-m0lpp0`, u, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `yVUVaOUe1`,
                  ref: r,
                  style: { ...l },
                  ...Lu({ QYPJzY0pm: { "data-framer-name": `Phone` } }, v, w),
                  children: [
                    d(H, {
                      __fromCanvasComponent: !0,
                      children: d(c, {
                        children: d(x.h5, {
                          className: `framer-styles-preset-tt7wqy`,
                          "data-styles-preset": `CLq2BIXXt`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                          },
                          children: `Snake Plant`,
                        }),
                      }),
                      className: `framer-1m9r3d9`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `AFXphVfYm`,
                      style: {
                        "--extracted-1lwpl3i": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                      },
                      text: h,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Lu(
                        {
                          QYPJzY0pm: {
                            children: d(c, {
                              children: d(x.h5, {
                                className: `framer-styles-preset-tt7wqy`,
                                "data-styles-preset": `CLq2BIXXt`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                                },
                                children: `Snake Plant`,
                              }),
                            }),
                          },
                        },
                        v,
                        w
                      ),
                    }),
                    d(H, {
                      __fromCanvasComponent: !0,
                      children: d(c, {
                        children: d(x.p, {
                          className: `framer-styles-preset-6mjars`,
                          "data-styles-preset": `A2dn5jtrl`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217)))`,
                          },
                          children: `Perfect for beginners, this hardy plant improves air quality`,
                        }),
                      }),
                      className: `framer-agxb47`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `FFTt2qwES`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                      },
                      text: g,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Lu(
                        {
                          QYPJzY0pm: {
                            children: d(c, {
                              children: d(x.p, {
                                className: `framer-styles-preset-6mjars`,
                                "data-styles-preset": `A2dn5jtrl`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217)))`,
                                },
                                children: `Perfect for beginners, this hardy plant improves air quality`,
                              }),
                            }),
                          },
                        },
                        v,
                        w
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-RG46p.framer-1dsy6ex, .framer-RG46p .framer-1dsy6ex { display: block; }`,
          `.framer-RG46p.framer-m0lpp0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 350px; }`,
          `.framer-RG46p .framer-1m9r3d9, .framer-RG46p .framer-agxb47 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...Bl,
          ...Il,
        ],
        `framer-RG46p`
      )),
      (qu.displayName = `Our plants`),
      (qu.defaultProps = { height: 89, width: 350 }),
      w(qu, {
        variant: {
          options: [`yVUVaOUe1`, `QYPJzY0pm`],
          optionTitles: [`Variant 1`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
        zipU3LcpC: {
          defaultValue: `Snake Plant`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onzipU3LcpCChange: { changes: `zipU3LcpC`, type: z.ChangeHandler },
        h2S20wL4h: {
          defaultValue: `Perfect for beginners, this hardy plant improves air quality`,
          displayTextArea: !1,
          title: `Text`,
          type: z.String,
        },
        onh2S20wL4hChange: { changes: `h2S20wL4h`, type: z.ChangeHandler },
      }),
      j(
        qu,
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
          ...D(zl),
          ...D(Fl),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Yu(e) {
  let t = e.settings;
  t =
    e.settings.mode === `preset`
      ? { ...Qu, mode: `preset`, blend: `difference`, x: `R`, y: `B`, radius: e.settings.radius }
      : { ...t, blend: `difference`, x: `R`, y: `B` };
  let n = s(null),
    r = s(null),
    [a, c] = i({ width: Xu, height: Zu });
  o(() => {
    if (!n.current) return;
    let e = () => {
      if (!n.current) return;
      if (P.current() === P.canvas) {
        let e = n.current.offsetWidth,
          t = n.current.offsetHeight;
        if (e === 0 || t === 0) return;
        c({ width: e, height: t });
        return;
      }
      let { width: e, height: t } = n.current.getBoundingClientRect();
      e === 0 || t === 0 || c({ width: e, height: t });
    };
    e();
    let t = new ResizeObserver(e);
    return (t.observe(n.current), () => t.disconnect());
  }, []);
  let l = f(() => {
      let { width: e, height: n } = a,
        r = e / 2,
        i = n / 2,
        o = Math.min(r, i) * (t.border * 0.5),
        s = Math.min(t.radius, e / 2, n / 2),
        c = `
      <svg viewBox="0 0 ${r} ${i}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${r}" height="${i}" fill="black"/>
        <rect x="0" y="0" width="${r}" height="${i}" rx="${s}" fill="url(#red)" />
        <rect x="0" y="0" width="${r}" height="${i}" rx="${s}" fill="url(#blue)" style="mix-blend-mode: ${t.blend}" />
        <rect x="${o}" y="${o}" width="${r - o * 2}" height="${i - o * 2}" rx="${s}" fill="hsl(0 0% ${t.lightness}% / ${t.alpha})" style="filter:blur(${t.blur}px)" />
      </svg>
    `;
      return `data:image/svg+xml,${encodeURIComponent(c)}`;
    }, [a, t]),
    u = `liquid-glass-filter-${y()}`,
    p = {
      width: `100%`,
      height: `100%`,
      borderRadius: t.radius,
      position: `absolute`,
      zIndex: 1,
      background: `hsl(0 0% 100% / ${t.frost})`,
      backdropFilter: `url(#${u})`,
    },
    h = {
      position: `absolute`,
      inset: 0,
      borderRadius: t.radius,
      zIndex: 2,
      pointerEvents: `none`,
      background: `linear-gradient(315deg, ${t.borderColor} 0%, rgba(120, 120, 120, 0) 30%, rgba(120, 120, 120, 0) 70%, ${t.borderColor} 100%) border-box`,
      mask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
      maskComposite: `exclude`,
      border: `1px solid transparent`,
    };
  return m(`div`, {
    ref: n,
    style: { width: `100%`, height: `100%`, position: `relative` },
    children: [
      d(`div`, {
        style: p,
        children: d(`svg`, {
          className: `filter`,
          style: {
            width: `100%`,
            height: `100%`,
            pointerEvents: `none`,
            position: `absolute`,
            inset: 0,
          },
          xmlns: `http://www.w3.org/2000/svg`,
          children: d(`defs`, {
            children: m(`filter`, {
              id: u,
              colorInterpolationFilters: `sRGB`,
              children: [
                d(`feImage`, {
                  href: l,
                  x: `0`,
                  y: `0`,
                  width: `100%`,
                  height: `100%`,
                  result: `map`,
                }),
                d(`feDisplacementMap`, {
                  in: `SourceGraphic`,
                  in2: `map`,
                  id: `redchannel`,
                  scale: t.scale + t.dispersion,
                  xChannelSelector: t.x,
                  yChannelSelector: t.y,
                  result: `dispRed`,
                }),
                d(`feColorMatrix`, {
                  in: `dispRed`,
                  type: `matrix`,
                  values: `1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0`,
                  result: `red`,
                }),
                d(`feDisplacementMap`, {
                  in: `SourceGraphic`,
                  in2: `map`,
                  id: `greenchannel`,
                  scale: t.scale + t.dispersion,
                  xChannelSelector: t.x,
                  yChannelSelector: t.y,
                  result: `dispGreen`,
                }),
                d(`feColorMatrix`, {
                  in: `dispGreen`,
                  type: `matrix`,
                  values: `0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0`,
                  result: `green`,
                }),
                d(`feDisplacementMap`, {
                  in: `SourceGraphic`,
                  in2: `map`,
                  id: `bluechannel`,
                  scale: t.scale + t.dispersion,
                  xChannelSelector: t.x,
                  yChannelSelector: t.y,
                  result: `dispBlue`,
                }),
                d(`feColorMatrix`, {
                  in: `dispBlue`,
                  type: `matrix`,
                  values: `0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0`,
                  result: `blue`,
                }),
                d(`feBlend`, { in: `red`, in2: `green`, mode: `screen`, result: `rg` }),
                d(`feBlend`, { in: `rg`, in2: `blue`, mode: `screen`, result: `output` }),
                d(`feGaussianBlur`, { in: `output`, stdDeviation: t.displace }),
              ],
            }),
          }),
        }),
      }),
      d(`div`, { ref: r, id: `gradient-border`, style: h }),
    ],
  });
}
var Xu,
  Zu,
  Qu,
  $u = t(() => {
    (h(),
      _(),
      M(),
      w(Yu, {
        settings: {
          type: z.Object,
          controls: {
            mode: {
              type: z.Enum,
              options: [`preset`, `custom`],
              optionTitles: [`Preset`, `Custom`],
              displaySegmentedControl: !0,
              defaultValue: `preset`,
            },
            scale: {
              type: z.Number,
              min: -360,
              max: 360,
              step: 1,
              defaultValue: 160,
              hidden: (e) => e.mode === `preset`,
            },
            radius: { type: z.Number, min: 0, max: 500, step: 1, defaultValue: 50 },
            border: {
              type: z.Number,
              min: 0,
              max: 0.5,
              step: 0.01,
              defaultValue: 0.05,
              hidden: (e) => e.mode === `preset`,
            },
            lightness: {
              type: z.Number,
              min: 0,
              max: 100,
              step: 1,
              defaultValue: 53,
              hidden: (e) => e.mode === `preset`,
            },
            displace: {
              title: `Blur`,
              type: z.Number,
              min: 0,
              max: 10,
              step: 0.01,
              defaultValue: 0.38,
              hidden: (e) => e.mode === `preset`,
            },
            alpha: {
              type: z.Number,
              min: 0,
              max: 1,
              step: 0.01,
              defaultValue: 0.9,
              hidden: (e) => e.mode === `preset`,
            },
            blur: {
              title: `Displace`,
              type: z.Number,
              min: 0,
              max: 100,
              step: 1,
              defaultValue: 5,
              hidden: (e) => e.mode === `preset`,
            },
            dispersion: {
              type: z.Number,
              min: 0,
              max: 100,
              step: 1,
              defaultValue: 50,
              hidden: (e) => e.mode === `preset`,
            },
            frost: {
              type: z.Number,
              min: 0,
              max: 1,
              step: 0.01,
              defaultValue: 0.1,
              hidden: (e) => e.mode === `preset`,
            },
            borderColor: {
              title: `Border`,
              type: z.Color,
              defaultValue: `rgba(120, 120, 120, 0.7)`,
            },
          },
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (Xu = 400),
      (Zu = 200),
      (Qu = {
        scale: 160,
        radius: 50,
        border: 0.05,
        lightness: 53,
        displace: 0.38,
        alpha: 0.9,
        blur: 5,
        dispersion: 50,
        frost: 0.1,
        borderColor: `rgba(120, 120, 120, 0.7)`,
      }),
      (Yu.displayName = `Liquid Glass`));
  });
function ed(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var td,
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
  md = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Ys(),
      is(),
      (td = { nU7KfPBWi: { hover: !0 }, Ny2kPm8yw: { hover: !0 }, WNicWewbJ: { hover: !0 } }),
      (nd = [`WNicWewbJ`, `nU7KfPBWi`, `Ny2kPm8yw`]),
      (rd = `framer-PjHen`),
      (id = {
        nU7KfPBWi: `framer-v-1i570qt`,
        Ny2kPm8yw: `framer-v-1ipwp7l`,
        WNicWewbJ: `framer-v-13wxlu8`,
      }),
      (ad = void 0),
      (od = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sd = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (cd = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (ld = { "Arrows Button": `nU7KfPBWi`, "Arrows white": `Ny2kPm8yw`, Default: `WNicWewbJ` }),
      (ud = x.create(c)),
      (dd = ({
        click: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        smoothScroll: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        e6uupHRzC: i ?? c.e6uupHRzC,
        fe6FXdBHt: e ?? c.fe6FXdBHt,
        HVHkX_drK: o ?? c.HVHkX_drK ?? `Get it now`,
        n55UwfFA_: a ?? c.n55UwfFA_ ?? !0,
        TYx1F_FJo: r ?? c.TYx1F_FJo,
        variant: ld[c.variant] ?? c.variant ?? `WNicWewbJ`,
      })),
      (fd = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pd = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              TYx1F_FJo: h,
              e6uupHRzC: g,
              n55UwfFA_: _,
              HVHkX_drK: v,
              fe6FXdBHt: b,
              ...S
            } = dd(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = ue({
              cycleOrder: nd,
              defaultVariant: `WNicWewbJ`,
              enabledGestures: td,
              ref: r,
              variant: p,
              variantClassNames: id,
            }),
            P = fd(e, M),
            { activeVariantCallback: F, delay: ne } = N(C),
            re = F(async (...e) => {
              if ((A({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            ie = E(rd, rs, Js),
            ae = () =>
              !!(
                [`nU7KfPBWi-hover`, `Ny2kPm8yw-hover`].includes(O) ||
                [`nU7KfPBWi`, `Ny2kPm8yw`].includes(C)
              ),
            oe = () =>
              !(
                [`nU7KfPBWi-hover`, `Ny2kPm8yw-hover`].includes(O) ||
                [`nU7KfPBWi`, `Ny2kPm8yw`].includes(C)
              );
          return d(ee, {
            id: f ?? i,
            children: d(ud, {
              animate: M,
              initial: !1,
              children: d(cd, {
                value: od,
                ...ed({ nU7KfPBWi: { value: sd }, Ny2kPm8yw: { value: sd } }, C, O),
                children: d(se, {
                  href: h,
                  motionChild: !0,
                  nodeId: `WNicWewbJ`,
                  openInNewTab: g,
                  scopeId: `wcO7R_vkF`,
                  smoothScroll: _,
                  children: m(x.a, {
                    ...S,
                    ...D,
                    className: `${E(ie, `framer-13wxlu8`, u, w)} framer-1ypj5yk`,
                    "data-border": !0,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: P,
                    layoutId: `WNicWewbJ`,
                    onTap: re,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 36,
                      borderBottomRightRadius: 36,
                      borderTopLeftRadius: 36,
                      borderTopRightRadius: 36,
                      ...l,
                    },
                    variants: {
                      "nU7KfPBWi-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                      "Ny2kPm8yw-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                      "WNicWewbJ-hover": {
                        "--border-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                        backgroundColor: `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                      },
                      nU7KfPBWi: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      Ny2kPm8yw: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                    },
                    ...ed(
                      {
                        "nU7KfPBWi-hover": { "data-framer-name": void 0 },
                        "Ny2kPm8yw-hover": { "data-framer-name": void 0 },
                        "WNicWewbJ-hover": { "data-framer-name": void 0 },
                        nU7KfPBWi: { "data-framer-name": `Arrows Button` },
                        Ny2kPm8yw: { "data-framer-name": `Arrows white` },
                      },
                      C,
                      O
                    ),
                    children: [
                      d(H, {
                        __fromCanvasComponent: !0,
                        children: d(c, {
                          children: d(x.p, {
                            className: `framer-styles-preset-epn0s`,
                            "data-styles-preset": `xoOzkgVgR`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                            },
                            children: d(se, {
                              href: ad,
                              motionChild: !0,
                              nodeId: `bUMGwzU9A`,
                              openInNewTab: !1,
                              relValues: [],
                              scopeId: `wcO7R_vkF`,
                              smoothScroll: !0,
                              children: d(x.a, {
                                className: `framer-styles-preset-72n0xi`,
                                "data-styles-preset": `klJo7ZxF_`,
                                children: `Get it now`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-oxrexq`,
                        fonts: [`Inter`],
                        layoutDependency: P,
                        layoutId: `bUMGwzU9A`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                        },
                        text: v,
                        variants: {
                          "nU7KfPBWi-hover": {
                            "--extracted-r6o4lv": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                          },
                          "Ny2kPm8yw-hover": {
                            "--extracted-r6o4lv": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                          },
                          "WNicWewbJ-hover": {
                            "--extracted-r6o4lv": `var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0))`,
                          },
                          nU7KfPBWi: {
                            "--extracted-r6o4lv": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...ed(
                          {
                            "nU7KfPBWi-hover": {
                              children: d(c, {
                                children: d(x.p, {
                                  className: `framer-styles-preset-epn0s`,
                                  "data-styles-preset": `xoOzkgVgR`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                                  },
                                  children: d(se, {
                                    href: ad,
                                    motionChild: !0,
                                    nodeId: `bUMGwzU9A`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `wcO7R_vkF`,
                                    smoothScroll: !0,
                                    children: d(x.a, {
                                      className: `framer-styles-preset-72n0xi`,
                                      "data-styles-preset": `klJo7ZxF_`,
                                      children: `Get it now`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "Ny2kPm8yw-hover": {
                              children: d(c, {
                                children: d(x.p, {
                                  className: `framer-styles-preset-epn0s`,
                                  "data-styles-preset": `xoOzkgVgR`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)))`,
                                  },
                                  children: d(se, {
                                    href: ad,
                                    motionChild: !0,
                                    nodeId: `bUMGwzU9A`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `wcO7R_vkF`,
                                    smoothScroll: !0,
                                    children: d(x.a, {
                                      className: `framer-styles-preset-72n0xi`,
                                      "data-styles-preset": `klJo7ZxF_`,
                                      children: `Get it now`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            "WNicWewbJ-hover": {
                              children: d(c, {
                                children: d(x.p, {
                                  className: `framer-styles-preset-epn0s`,
                                  "data-styles-preset": `xoOzkgVgR`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0)))`,
                                  },
                                  children: d(se, {
                                    href: ad,
                                    motionChild: !0,
                                    nodeId: `bUMGwzU9A`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `wcO7R_vkF`,
                                    smoothScroll: !0,
                                    children: d(x.a, {
                                      className: `framer-styles-preset-72n0xi`,
                                      "data-styles-preset": `klJo7ZxF_`,
                                      children: `Get it now`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                            nU7KfPBWi: {
                              children: d(c, {
                                children: d(x.p, {
                                  className: `framer-styles-preset-epn0s`,
                                  "data-styles-preset": `xoOzkgVgR`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)))`,
                                  },
                                  children: d(se, {
                                    href: ad,
                                    motionChild: !0,
                                    nodeId: `bUMGwzU9A`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `wcO7R_vkF`,
                                    smoothScroll: !0,
                                    children: d(x.a, {
                                      className: `framer-styles-preset-72n0xi`,
                                      "data-styles-preset": `klJo7ZxF_`,
                                      children: `Get it now`,
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          C,
                          O
                        ),
                      }),
                      ae() &&
                        m(I, {
                          className: `framer-1kqoxgm`,
                          layoutDependency: P,
                          layoutId: `rh6Tco7hs`,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72.766 46.266" overflow="visible"></svg>`,
                          withExternalLayout: !0,
                          ...ed(
                            {
                              "nU7KfPBWi-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72.766 46.266" overflow="visible"><g><path d="M 49.68 23.174 C 49.833 23.021 49.833 22.773 49.68 22.62 L 47.184 20.125 C 47.086 20.02 46.939 19.977 46.8 20.012 C 46.661 20.048 46.552 20.156 46.517 20.295 C 46.482 20.434 46.525 20.581 46.63 20.679 L 48.848 22.897 L 46.63 25.115 C 46.525 25.213 46.482 25.36 46.517 25.499 C 46.552 25.638 46.661 25.747 46.8 25.782 C 46.939 25.818 47.086 25.774 47.184 25.669 L 49.679 23.174 Z M 0 22.897 L 0 23.289 L 49.402 23.289 L 49.402 22.505 L 0 22.505 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 26.5 23.133 C 26.5 10.357 36.857 0 49.633 0 C 62.409 0 72.766 10.357 72.766 23.133 C 72.766 35.909 62.409 46.266 49.633 46.266 C 36.857 46.266 26.5 35.909 26.5 23.133 Z" fill="transparent" stroke-width="0.784" stroke="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                              },
                              "Ny2kPm8yw-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72.766 46.266" overflow="visible"><g><path d="M 49.68 23.174 C 49.833 23.021 49.833 22.773 49.68 22.62 L 47.184 20.125 C 47.086 20.02 46.939 19.977 46.8 20.012 C 46.661 20.048 46.552 20.156 46.517 20.295 C 46.482 20.434 46.525 20.581 46.63 20.679 L 48.848 22.897 L 46.63 25.115 C 46.525 25.213 46.482 25.36 46.517 25.499 C 46.552 25.638 46.661 25.747 46.8 25.782 C 46.939 25.818 47.086 25.774 47.184 25.669 L 49.679 23.174 Z M 0 22.897 L 0 23.289 L 49.402 23.289 L 49.402 22.505 L 0 22.505 Z" fill="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */"></path><path d="M 26.5 23.133 C 26.5 10.357 36.857 0 49.633 0 C 62.409 0 72.766 10.357 72.766 23.133 C 72.766 35.909 62.409 46.266 49.633 46.266 C 36.857 46.266 26.5 35.909 26.5 23.133 Z" fill="transparent" stroke-width="0.784" stroke="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                              },
                              nU7KfPBWi: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72.766 46.266" overflow="visible"><g><path d="M 49.68 23.174 C 49.833 23.021 49.833 22.773 49.68 22.62 L 47.184 20.125 C 47.086 20.02 46.939 19.977 46.8 20.012 C 46.661 20.048 46.552 20.156 46.517 20.295 C 46.482 20.434 46.525 20.581 46.63 20.679 L 48.848 22.897 L 46.63 25.115 C 46.525 25.213 46.482 25.36 46.517 25.499 C 46.552 25.638 46.661 25.747 46.8 25.782 C 46.939 25.818 47.086 25.774 47.184 25.669 L 49.679 23.174 Z M 0 22.897 L 0 23.289 L 49.402 23.289 L 49.402 22.505 L 0 22.505 Z" fill="rgb(88,178,127)"></path><path d="M 26.5 23.133 C 26.5 10.357 36.857 0 49.633 0 C 62.409 0 72.766 10.357 72.766 23.133 C 72.766 35.909 62.409 46.266 49.633 46.266 C 36.857 46.266 26.5 35.909 26.5 23.133 Z" fill="transparent" stroke-width="0.784" stroke="rgb(88,178,127)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                              },
                              Ny2kPm8yw: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72.766 46.266" overflow="visible"><g><path d="M 49.68 23.174 C 49.833 23.021 49.833 22.773 49.68 22.62 L 47.184 20.125 C 47.086 20.02 46.939 19.977 46.8 20.012 C 46.661 20.048 46.552 20.156 46.517 20.295 C 46.482 20.434 46.525 20.581 46.63 20.679 L 48.848 22.897 L 46.63 25.115 C 46.525 25.213 46.482 25.36 46.517 25.499 C 46.552 25.638 46.661 25.747 46.8 25.782 C 46.939 25.818 47.086 25.774 47.184 25.669 L 49.679 23.174 Z M 0 22.897 L 0 23.289 L 49.402 23.289 L 49.402 22.505 L 0 22.505 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 26.5 23.133 C 26.5 10.357 36.857 0 49.633 0 C 62.409 0 72.766 10.357 72.766 23.133 C 72.766 35.909 62.409 46.266 49.633 46.266 C 36.857 46.266 26.5 35.909 26.5 23.133 Z" fill="transparent" stroke-width="0.784" stroke="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                              },
                            },
                            C,
                            O
                          ),
                          children: [
                            m(I, {
                              className: `framer-1ba2mz0`,
                              layoutDependency: P,
                              layoutId: `ruukLzi4e`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.795 5.794" overflow="visible"><path d="M 49.68 3.174 C 49.833 3.021 49.833 2.773 49.68 2.62 L 47.184 0.125 C 47.086 0.02 46.939 -0.023 46.8 0.012 C 46.661 0.048 46.552 0.156 46.517 0.295 C 46.482 0.434 46.525 0.581 46.63 0.679 L 48.848 2.897 L 46.63 5.115 C 46.525 5.213 46.482 5.36 46.517 5.499 C 46.552 5.638 46.661 5.747 46.8 5.782 C 46.939 5.818 47.086 5.774 47.184 5.669 L 49.679 3.174 Z M 0 2.897 L 0 3.289 L 49.402 3.289 L 49.402 2.505 L 0 2.505 Z" fill="rgb(88,178,127)"></path></svg>`,
                              withExternalLayout: !0,
                              ...ed(
                                {
                                  "nU7KfPBWi-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.795 5.794" overflow="visible"><path d="M 49.68 3.174 C 49.833 3.021 49.833 2.773 49.68 2.62 L 47.184 0.125 C 47.086 0.02 46.939 -0.023 46.8 0.012 C 46.661 0.048 46.552 0.156 46.517 0.295 C 46.482 0.434 46.525 0.581 46.63 0.679 L 48.848 2.897 L 46.63 5.115 C 46.525 5.213 46.482 5.36 46.517 5.499 C 46.552 5.638 46.661 5.747 46.8 5.782 C 46.939 5.818 47.086 5.774 47.184 5.669 L 49.679 3.174 Z M 0 2.897 L 0 3.289 L 49.402 3.289 L 49.402 2.505 L 0 2.505 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
                                  },
                                  "Ny2kPm8yw-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.795 5.794" overflow="visible"><path d="M 49.68 3.174 C 49.833 3.021 49.833 2.773 49.68 2.62 L 47.184 0.125 C 47.086 0.02 46.939 -0.023 46.8 0.012 C 46.661 0.048 46.552 0.156 46.517 0.295 C 46.482 0.434 46.525 0.581 46.63 0.679 L 48.848 2.897 L 46.63 5.115 C 46.525 5.213 46.482 5.36 46.517 5.499 C 46.552 5.638 46.661 5.747 46.8 5.782 C 46.939 5.818 47.086 5.774 47.184 5.669 L 49.679 3.174 Z M 0 2.897 L 0 3.289 L 49.402 3.289 L 49.402 2.505 L 0 2.505 Z" fill="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */"></path></svg>`,
                                  },
                                  Ny2kPm8yw: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.795 5.794" overflow="visible"><path d="M 49.68 3.174 C 49.833 3.021 49.833 2.773 49.68 2.62 L 47.184 0.125 C 47.086 0.02 46.939 -0.023 46.8 0.012 C 46.661 0.048 46.552 0.156 46.517 0.295 C 46.482 0.434 46.525 0.581 46.63 0.679 L 48.848 2.897 L 46.63 5.115 C 46.525 5.213 46.482 5.36 46.517 5.499 C 46.552 5.638 46.661 5.747 46.8 5.782 C 46.939 5.818 47.086 5.774 47.184 5.669 L 49.679 3.174 Z M 0 2.897 L 0 3.289 L 49.402 3.289 L 49.402 2.505 L 0 2.505 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
                                  },
                                },
                                C,
                                O
                              ),
                              children: [
                                d(I, {
                                  className: `framer-17tso2v`,
                                  layoutDependency: P,
                                  layoutId: `faftx3Cdj`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.29 5.794" overflow="visible"><path d="M 3.175 3.174 C 3.328 3.021 3.328 2.773 3.175 2.62 L 0.679 0.125 C 0.581 0.02 0.434 -0.023 0.295 0.012 C 0.156 0.048 0.048 0.156 0.012 0.295 C -0.023 0.434 0.02 0.581 0.125 0.679 L 2.343 2.897 L 0.125 5.115 C 0.02 5.213 -0.023 5.36 0.012 5.499 C 0.048 5.638 0.156 5.747 0.295 5.782 C 0.434 5.818 0.581 5.774 0.679 5.669 L 3.174 3.174 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                d(I, {
                                  className: `framer-119ytfv`,
                                  layoutDependency: P,
                                  layoutId: `Q5w7rVUkl`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.402 1" overflow="visible"><path d="M 0 0.392 L 0 0.784 L 49.402 0.784 L 49.402 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            d(I, {
                              className: `framer-1xifeon`,
                              layoutDependency: P,
                              layoutId: `ecF3jgKxW`,
                              requiresOverflowVisible: !0,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46.266 46.266" overflow="visible"><path d="M 0 23.133 C 0 10.357 10.357 0 23.133 0 C 35.909 0 46.266 10.357 46.266 23.133 C 46.266 35.909 35.909 46.266 23.133 46.266 C 10.357 46.266 0 35.909 0 23.133 Z" fill="transparent" stroke-width="0.784" stroke="rgb(88,178,127)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                              withExternalLayout: !0,
                              ...ed(
                                {
                                  "nU7KfPBWi-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46.266 46.266" overflow="visible"><path d="M 0 23.133 C 0 10.357 10.357 0 23.133 0 C 35.909 0 46.266 10.357 46.266 23.133 C 46.266 35.909 35.909 46.266 23.133 46.266 C 10.357 46.266 0 35.909 0 23.133 Z" fill="transparent" stroke-width="0.784" stroke="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  },
                                  "Ny2kPm8yw-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46.266 46.266" overflow="visible"><path d="M 0 23.133 C 0 10.357 10.357 0 23.133 0 C 35.909 0 46.266 10.357 46.266 23.133 C 46.266 35.909 35.909 46.266 23.133 46.266 C 10.357 46.266 0 35.909 0 23.133 Z" fill="transparent" stroke-width="0.784" stroke="var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127)) /* {&quot;name&quot;:&quot;Light Green&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  },
                                  Ny2kPm8yw: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46.266 46.266" overflow="visible"><path d="M 0 23.133 C 0 10.357 10.357 0 23.133 0 C 35.909 0 46.266 10.357 46.266 23.133 C 46.266 35.909 35.909 46.266 23.133 46.266 C 10.357 46.266 0 35.909 0 23.133 Z" fill="transparent" stroke-width="0.784" stroke="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  },
                                },
                                C,
                                O
                              ),
                            }),
                          ],
                        }),
                      oe() &&
                        m(I, {
                          className: `framer-1h4puf3`,
                          layoutDependency: P,
                          layoutId: `awoNj0KLn`,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 35" overflow="visible"><g><path d="M 17.5 35 C 7.835 35 0 27.165 0 17.5 L 0 17.5 C 0 7.835 7.835 0 17.5 0 L 17.5 0 C 27.165 0 35 7.835 35 17.5 L 35 17.5 C 35 27.165 27.165 35 17.5 35 Z" fill="rgb(255,255,255)"></path><path d="M 13.5 12.5 L 21.5 17.5 L 13.5 22.5 Z" fill="rgb(3,19,18)" stroke-width="2.182" stroke="rgb(3,19,18)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                          withExternalLayout: !0,
                          ...ed(
                            {
                              "WNicWewbJ-hover": {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 35" overflow="visible"><g><path d="M 17.5 35 C 7.835 35 0 27.165 0 17.5 L 0 17.5 C 0 7.835 7.835 0 17.5 0 L 17.5 0 C 27.165 0 35 7.835 35 17.5 L 35 17.5 C 35 27.165 27.165 35 17.5 35 Z" fill="var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path><path d="M 13.5 12.5 L 21.5 17.5 L 13.5 22.5 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-width="2.182" stroke="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                              },
                            },
                            C,
                            O
                          ),
                          children: [
                            d(I, {
                              className: `framer-1pldetw`,
                              layoutDependency: P,
                              layoutId: `YRsV7gzQg`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 35" overflow="visible"><path d="M 17.5 35 C 7.835 35 0 27.165 0 17.5 L 0 17.5 C 0 7.835 7.835 0 17.5 0 L 17.5 0 C 27.165 0 35 7.835 35 17.5 L 35 17.5 C 35 27.165 27.165 35 17.5 35 Z" fill="rgb(255,255,255)"></path></svg>`,
                              withExternalLayout: !0,
                              ...ed(
                                {
                                  "WNicWewbJ-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 35" overflow="visible"><path d="M 17.5 35 C 7.835 35 0 27.165 0 17.5 L 0 17.5 C 0 7.835 7.835 0 17.5 0 L 17.5 0 C 27.165 0 35 7.835 35 17.5 L 35 17.5 C 35 27.165 27.165 35 17.5 35 Z" fill="var(--token-126fa522-5a37-4089-b7f3-450fcef8d1c1, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
                                  },
                                },
                                C,
                                O
                              ),
                            }),
                            d(I, {
                              className: `framer-1arzvak`,
                              layoutDependency: P,
                              layoutId: `w9VMdr7yu`,
                              requiresOverflowVisible: !0,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 10" overflow="visible"><path d="M 0 0 L 8 5 L 0 10 Z" fill="rgb(3,19,18)" stroke-width="2.182" stroke="rgb(3,19,18)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                              withExternalLayout: !0,
                              ...ed(
                                {
                                  "WNicWewbJ-hover": {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 10" overflow="visible"><path d="M 0 0 L 8 5 L 0 10 Z" fill="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-width="2.182" stroke="var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                  },
                                },
                                C,
                                O
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
          `.framer-PjHen.framer-1ypj5yk, .framer-PjHen .framer-1ypj5yk { display: block; }`,
          `.framer-PjHen.framer-13wxlu8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 7.5px 7.5px 7.5px 20px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-PjHen .framer-oxrexq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-PjHen .framer-1kqoxgm { height: 47px; position: relative; width: 73px; }`,
          `.framer-PjHen .framer-1ba2mz0 { height: 6px; left: 0px; position: absolute; top: 20px; width: 50px; }`,
          `.framer-PjHen .framer-17tso2v { height: 6px; left: 47px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-PjHen .framer-119ytfv { height: 1px; left: 0px; position: absolute; top: 3px; width: 50px; }`,
          `.framer-PjHen .framer-1xifeon { height: 47px; left: 27px; position: absolute; top: 0px; width: 47px; }`,
          `.framer-PjHen .framer-1h4puf3 { height: 35px; position: relative; width: 35px; }`,
          `.framer-PjHen .framer-1pldetw { height: 35px; left: 0px; position: absolute; top: 0px; width: 35px; }`,
          `.framer-PjHen .framer-1arzvak { height: 10px; left: 14px; position: absolute; top: 13px; width: 8px; }`,
          `.framer-PjHen.framer-v-1i570qt.framer-13wxlu8, .framer-PjHen.framer-v-1ipwp7l.framer-13wxlu8 { padding: 0px; }`,
          ...ns,
          ...qs,
          `.framer-PjHen[data-border="true"]::after, .framer-PjHen [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-PjHen`
      )),
      (pd.displayName = `Button wrapper`),
      (pd.defaultProps = { height: 50, width: 141 }),
      w(pd, {
        variant: {
          options: [`WNicWewbJ`, `nU7KfPBWi`, `Ny2kPm8yw`],
          optionTitles: [`Default`, `Arrows Button`, `Arrows white`],
          title: `Variant`,
          type: z.Enum,
        },
        TYx1F_FJo: { title: `Link`, type: z.Link },
        e6uupHRzC: { defaultValue: !1, title: `New Tab`, type: z.Boolean },
        one6uupHRzCChange: { changes: `e6uupHRzC`, type: z.ChangeHandler },
        n55UwfFA_: { defaultValue: !0, title: `Smooth Scroll`, type: z.Boolean },
        onn55UwfFA_Change: { changes: `n55UwfFA_`, type: z.ChangeHandler },
        HVHkX_drK: {
          defaultValue: `Get it now`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onHVHkX_drKChange: { changes: `HVHkX_drK`, type: z.ChangeHandler },
        fe6FXdBHt: { title: `Click`, type: z.EventHandler },
      }),
      j(
        pd,
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
          ...D(ts),
          ...D(Ks),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function hd(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd = t(() => {
    (h(),
      M(),
      C(),
      _(),
      $u(),
      Rl(),
      Hl(),
      md(),
      (gd = ce(x.div)),
      (_d = A(Yu)),
      (vd = A(pd)),
      (yd = { H7QM2s3Jh: { hover: !0 }, oiNSQNZgC: { hover: !0 }, rKl5Em_sk: { hover: !0 } }),
      (bd = [`rKl5Em_sk`, `oiNSQNZgC`, `H7QM2s3Jh`]),
      (xd = `framer-qGQkD`),
      (Sd = {
        H7QM2s3Jh: `framer-v-rxxwep`,
        oiNSQNZgC: `framer-v-ureoky`,
        rKl5Em_sk: `framer-v-zlbf4x`,
      }),
      (Cd = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (wd = { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: `tween` }),
      (Td = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ed = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Dd = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Od = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (kd = { "Variant 1": `rKl5Em_sk`, mobile: `H7QM2s3Jh`, tab: `oiNSQNZgC` }),
      (Ad = x.create(c)),
      (jd = ({ height: e, id: t, image: n, link: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        CCupkBzwk: n ??
          s.CCupkBzwk ?? {
            alt: ``,
            pixelHeight: 296,
            pixelWidth: 272,
            src: `../../assets/images/gbdEROlGzQCFOBRA7T9nWO5Ejc.png`,
          },
        L_fq91IFs: r ?? s.L_fq91IFs,
        MtourpZBe: a ?? s.MtourpZBe ?? `Snake Plant`,
        nuEs_q7wO:
          i ?? s.nuEs_q7wO ?? `Perfect for beginners, this hardy plant improves air quality`,
        variant: kd[s.variant] ?? s.variant ?? `rKl5Em_sk`,
      })),
      (Md = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Nd = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he(),
            l = te(),
            {
              style: u,
              className: f,
              layoutId: p,
              variant: h,
              CCupkBzwk: g,
              MtourpZBe: _,
              nuEs_q7wO: v,
              L_fq91IFs: b,
              ...S
            } = jd(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = ue({
              cycleOrder: bd,
              defaultVariant: `rKl5Em_sk`,
              enabledGestures: yd,
              ref: r,
              variant: h,
              variantClassNames: Sd,
            }),
            P = Md(e, N),
            F = E(xd, Vl, Ll),
            ne = () => !(k === `H7QM2s3Jh-hover` || C === `H7QM2s3Jh`);
          return d(ee, {
            id: p ?? i,
            children: d(Ad, {
              animate: N,
              initial: !1,
              children: d(Od, {
                value: Cd,
                children: m(x.div, {
                  ...S,
                  ...D,
                  className: E(F, `framer-zlbf4x`, f, w),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: P,
                  layoutId: `rKl5Em_sk`,
                  ref: r,
                  style: { ...u },
                  ...hd(
                    {
                      "H7QM2s3Jh-hover": { "data-framer-name": void 0 },
                      "oiNSQNZgC-hover": { "data-framer-name": void 0 },
                      "rKl5Em_sk-hover": { "data-framer-name": void 0 },
                      H7QM2s3Jh: { "data-framer-name": `mobile` },
                      oiNSQNZgC: { "data-framer-name": `tab` },
                    },
                    C,
                    k
                  ),
                  children: [
                    m(x.div, {
                      className: `framer-1q46dlc`,
                      layoutDependency: P,
                      layoutId: `XRy_cuvPx`,
                      style: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      variants: {
                        "oiNSQNZgC-hover": {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                        "rKl5Em_sk-hover": {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                        H7QM2s3Jh: {
                          backgroundColor: `rgb(0, 28, 26)`,
                          borderBottomLeftRadius: 30,
                          borderBottomRightRadius: 30,
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                        },
                      },
                      children: [
                        ne() &&
                          d(gd, {
                            __framer__loop: Td,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: wd,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 0.5,
                            className: `framer-63cz6u`,
                            "data-border": !0,
                            layoutDependency: P,
                            layoutId: `wArtNjep9`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgba(255, 255, 255, 0.5)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backdropFilter: `blur(30px)`,
                              backgroundColor: `rgba(3, 19, 18, 0.13)`,
                              borderBottomLeftRadius: 30,
                              borderBottomRightRadius: 30,
                              borderTopLeftRadius: 30,
                              borderTopRightRadius: 30,
                              boxShadow: `0px 1px 15px 0px rgba(255, 255, 255, 0.15)`,
                              opacity: 0.5,
                              WebkitBackdropFilter: `blur(30px)`,
                            },
                          }),
                        d(x.div, {
                          className: `framer-9ms1i5`,
                          "data-border": !0,
                          layoutDependency: P,
                          layoutId: `am3v7wFHG`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgba(255, 255, 255, 0.5)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            boxShadow: `0px 1px 15px 0px rgba(255, 255, 255, 0.15)`,
                          },
                        }),
                        d(B, {
                          children: d(V, {
                            className: `framer-1e3ujco-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: P,
                            layoutId: `MBKlX7lXZ-container`,
                            nodeId: `MBKlX7lXZ`,
                            rendersWithMotion: !0,
                            scopeId: `V5yUYw9Ez`,
                            children: d(Yu, {
                              height: `100%`,
                              id: `MBKlX7lXZ`,
                              layoutId: `MBKlX7lXZ`,
                              settings: {
                                alpha: 1,
                                blur: 5,
                                border: 0.2,
                                borderColor: `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                dispersion: 50,
                                displace: 10,
                                frost: 0.01,
                                lightness: 5,
                                mode: `custom`,
                                radius: 30,
                                scale: 6,
                              },
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    m(x.div, {
                      className: `framer-1rtqaqv`,
                      layoutDependency: P,
                      layoutId: `EEQi77y91`,
                      children: [
                        d(ye, {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 296,
                            intrinsicWidth: 272,
                            loading: O(
                              (l?.y || 0) + 0 + (((l?.height || 452) - 0 - 533) / 2 + 0 + 0) + 0 + 0
                            ),
                            pixelHeight: 296,
                            pixelWidth: 272,
                            sizes: `calc(${l?.width || `100vw`} - 32px)`,
                            ...Ed(g),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-1eh8i84`,
                          layoutDependency: P,
                          layoutId: `Gd9cGHqza`,
                          ...hd(
                            {
                              H7QM2s3Jh: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 296,
                                  intrinsicWidth: 272,
                                  loading: O(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 516) - 0 - 597) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 296,
                                  pixelWidth: 272,
                                  sizes: `calc(${l?.width || `100vw`} - 20px)`,
                                  ...Ed(g),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                              oiNSQNZgC: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 296,
                                  intrinsicWidth: 272,
                                  loading: O(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 406) - 0 - 487) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 296,
                                  pixelWidth: 272,
                                  sizes: `calc(${l?.width || `100vw`} - 20px)`,
                                  ...Ed(g),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                            },
                            C,
                            k
                          ),
                        }),
                        m(x.div, {
                          className: `framer-f8ion8`,
                          layoutDependency: P,
                          layoutId: `acNvKXpxj`,
                          children: [
                            d(H, {
                              __fromCanvasComponent: !0,
                              children: d(c, {
                                children: d(x.h3, {
                                  className: `framer-styles-preset-tt7wqy`,
                                  "data-styles-preset": `CLq2BIXXt`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)))`,
                                  },
                                  children: `Snake Plant`,
                                }),
                              }),
                              className: `framer-1rf1k7x`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `nuYgEL9Q5`,
                              style: {
                                "--extracted-a0htzi": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(H, {
                              __fromCanvasComponent: !0,
                              children: d(c, {
                                children: d(x.p, {
                                  className: `framer-styles-preset-6mjars`,
                                  "data-styles-preset": `A2dn5jtrl`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217)))`,
                                  },
                                  children: `Perfect for beginners, this hardy plant improves air quality`,
                                }),
                              }),
                              className: `framer-53cm74`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `ciP1wJKc3`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        d(B, {
                          height: 50,
                          y:
                            (l?.y || 0) +
                            0 +
                            (((l?.height || 452) - 0 - 533) / 2 + 0 + 0) +
                            0 +
                            483,
                          ...hd(
                            {
                              H7QM2s3Jh: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 516) - 0 - 597) / 2 + 0 + 0) +
                                  0 +
                                  547,
                              },
                              oiNSQNZgC: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 406) - 0 - 487) / 2 + 0 + 0) +
                                  0 +
                                  437,
                              },
                            },
                            C,
                            k
                          ),
                          children: d(V, {
                            className: `framer-zm4cbk-container`,
                            "data-framer-name": `Secondary`,
                            layoutDependency: P,
                            layoutId: `k3ZXKWXoD-container`,
                            name: `Secondary`,
                            nodeId: `k3ZXKWXoD`,
                            rendersWithMotion: !0,
                            scopeId: `V5yUYw9Ez`,
                            children: d(pd, {
                              e6uupHRzC: !1,
                              height: `100%`,
                              HVHkX_drK: `Shop Now`,
                              id: `k3ZXKWXoD`,
                              layoutId: `k3ZXKWXoD`,
                              n55UwfFA_: !0,
                              name: `Secondary`,
                              TYx1F_FJo: b,
                              variant: Dd(`Ny2kPm8yw`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qGQkD.framer-1gnicqw, .framer-qGQkD .framer-1gnicqw { display: block; }`,
          `.framer-qGQkD.framer-zlbf4x { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 350px; }`,
          `.framer-qGQkD .framer-1q46dlc { flex: none; height: 75%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 89px; width: 100%; z-index: 1; }`,
          `.framer-qGQkD .framer-63cz6u { flex: none; height: 60%; left: calc(50.00000000000002% - 54.90196078431373% / 2); overflow: visible; position: absolute; top: calc(46.13095238095241% - 60% / 2); width: 55%; z-index: 1; }`,
          `.framer-qGQkD .framer-9ms1i5 { bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; width: 100%; z-index: 1; }`,
          `.framer-qGQkD .framer-1e3ujco-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 2; }`,
          `.framer-qGQkD .framer-1rtqaqv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-qGQkD .framer-1eh8i84 { flex: none; height: 296px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-qGQkD .framer-f8ion8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-qGQkD .framer-1rf1k7x, .framer-qGQkD .framer-53cm74 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-qGQkD .framer-zm4cbk-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-qGQkD.framer-v-ureoky.framer-zlbf4x, .framer-qGQkD.framer-v-rxxwep.framer-zlbf4x { padding: 0px 10px 0px 10px; }`,
          `.framer-qGQkD.framer-v-ureoky .framer-1q46dlc { height: 75%; top: 78px; }`,
          `.framer-qGQkD.framer-v-ureoky .framer-1eh8i84 { height: 250px; }`,
          `.framer-qGQkD.framer-v-rxxwep .framer-1q46dlc { bottom: -20px; height: unset; top: 92px; }`,
          `.framer-qGQkD.framer-v-rxxwep .framer-1eh8i84 { height: 360px; }`,
          `.framer-qGQkD.framer-v-zlbf4x.hover .framer-1q46dlc { bottom: -20px; height: unset; top: 113px; }`,
          `.framer-qGQkD.framer-v-zlbf4x.hover .framer-63cz6u { bottom: 40px; top: unset; }`,
          `.framer-qGQkD.framer-v-ureoky.hover .framer-1q46dlc { bottom: -20px; height: unset; top: 101px; }`,
          `.framer-qGQkD.framer-v-rxxwep.hover .framer-1q46dlc { height: unset; }`,
          ...Bl,
          ...Il,
          `.framer-qGQkD[data-border="true"]::after, .framer-qGQkD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-qGQkD`
      )),
      (Nd.displayName = `Plants`),
      (Nd.defaultProps = { height: 452, width: 350 }),
      w(Nd, {
        variant: {
          options: [`rKl5Em_sk`, `oiNSQNZgC`, `H7QM2s3Jh`],
          optionTitles: [`Variant 1`, `tab`, `mobile`],
          title: `Variant`,
          type: z.Enum,
        },
        CCupkBzwk: {
          __defaultAssetReference: `data:framer/asset-reference,gbdEROlGzQCFOBRA7T9nWO5Ejc.png?originalFilename=8fc37d5b-76b5-4f72-8930-c47ab9617eec+1.png&width=272&height=296`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,gbdEROlGzQCFOBRA7T9nWO5Ejc.png?originalFilename=8fc37d5b-76b5-4f72-8930-c47ab9617eec+1.png&width=272&height=296`,
          },
          title: `Image`,
          type: z.ResponsiveImage,
        },
        MtourpZBe: {
          defaultValue: `Snake Plant`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onMtourpZBeChange: { changes: `MtourpZBe`, type: z.ChangeHandler },
        nuEs_q7wO: {
          defaultValue: `Perfect for beginners, this hardy plant improves air quality`,
          displayTextArea: !1,
          title: `Text`,
          type: z.String,
        },
        onnuEs_q7wOChange: { changes: `nuEs_q7wO`, type: z.ChangeHandler },
        L_fq91IFs: { title: `Link`, type: z.Link },
      }),
      j(
        Nd,
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
          ..._d,
          ...vd,
          ...D(zl),
          ...D(Fl),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Nd.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(pd, {}, t)])) }));
  });
function Fd(e) {
  if (P.current() === P.canvas) return null;
  let {
      duration: t,
      connectedFrameDesktop: n,
      connectedFrameTablet: r,
      connectedFrameMobile: a,
    } = e,
    [s, c] = i(!0);
  if (
    (o(() => {
      let e = setTimeout(() => c(!1), t * 1e3);
      return () => clearTimeout(e);
    }, [t]),
    !s)
  )
    return null;
  let l = b === void 0 ? 1 / 0 : b.visualViewport?.width || b.innerWidth,
    u = n || [];
  return (
    l <= 809 && a?.length ? (u = a) : l <= 1199 && r?.length && (u = r),
    d(`div`, {
      style: {
        position: `fixed`,
        top: 0,
        left: 0,
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        zIndex: 9999,
        background: `transparent`,
      },
      children: u.map((e, t) =>
        d(
          `div`,
          {
            style: {
              position: `absolute`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            },
            children: p(e, { style: { width: `100%`, height: `100%`, objectFit: `cover` } }),
          },
          t
        )
      ),
    })
  );
}
var Id = t(() => {
    (a(),
      h(),
      _(),
      M(),
      (Fd.displayName = `Preloader Connection`),
      w(Fd, {
        duration: {
          type: z.Number,
          title: `Duration`,
          defaultValue: 3,
          min: 0.5,
          max: 10,
          step: 0.1,
          unit: `s`,
          displayStepper: !0,
        },
        connectedFrameDesktop: {
          type: z.Array,
          title: `Desktop Frame`,
          propertyControl: { type: z.ComponentInstance },
        },
        connectedFrameTablet: {
          type: z.Array,
          title: `Tablet Frame`,
          propertyControl: { type: z.ComponentInstance },
        },
        connectedFrameMobile: {
          type: z.Array,
          title: `Mobile Frame`,
          propertyControl: { type: z.ComponentInstance },
        },
      }));
  }),
  Ld,
  Rd,
  zd,
  Bd = t(() => {
    (M(),
      T.loadFonts([`CUSTOMV2;Bilgie Regular`]),
      (Ld = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bilgie Regular`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Bilgie`,
              url: `../../assets/fonts/J0e5AkBwffUWnnMP5DD2OVRBrxk.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Rd = [
        `.framer-kCz7Z .framer-styles-preset-1246cy5:not(.rich-text-wrapper), .framer-kCz7Z .framer-styles-preset-1246cy5.rich-text-wrapper h1 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 50px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 53px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-kCz7Z .framer-styles-preset-1246cy5:not(.rich-text-wrapper), .framer-kCz7Z .framer-styles-preset-1246cy5.rich-text-wrapper h1 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 39px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 53px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-kCz7Z .framer-styles-preset-1246cy5:not(.rich-text-wrapper), .framer-kCz7Z .framer-styles-preset-1246cy5.rich-text-wrapper h1 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 53px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-kCz7Z .framer-styles-preset-1246cy5:not(.rich-text-wrapper), .framer-kCz7Z .framer-styles-preset-1246cy5.rich-text-wrapper h1 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 33px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 46px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-kCz7Z .framer-styles-preset-1246cy5:not(.rich-text-wrapper), .framer-kCz7Z .framer-styles-preset-1246cy5.rich-text-wrapper h1 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 39px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (zd = `framer-kCz7Z`));
  }),
  Vd,
  Hd,
  Ud,
  Wd = t(() => {
    (M(),
      T.loadFonts([`CUSTOMV2;Bilgie Regular`]),
      (Vd = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bilgie Regular`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Bilgie`,
              url: `../../assets/fonts/J0e5AkBwffUWnnMP5DD2OVRBrxk.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Hd = [
        `.framer-uLcah .framer-styles-preset-17y2kp1:not(.rich-text-wrapper), .framer-uLcah .framer-styles-preset-17y2kp1.rich-text-wrapper h2 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 43px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-uLcah .framer-styles-preset-17y2kp1:not(.rich-text-wrapper), .framer-uLcah .framer-styles-preset-17y2kp1.rich-text-wrapper h2 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 43px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-uLcah .framer-styles-preset-17y2kp1:not(.rich-text-wrapper), .framer-uLcah .framer-styles-preset-17y2kp1.rich-text-wrapper h2 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 46px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-uLcah .framer-styles-preset-17y2kp1:not(.rich-text-wrapper), .framer-uLcah .framer-styles-preset-17y2kp1.rich-text-wrapper h2 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 40px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-uLcah .framer-styles-preset-17y2kp1:not(.rich-text-wrapper), .framer-uLcah .framer-styles-preset-17y2kp1.rich-text-wrapper h2 { --framer-font-family: "Bilgie Regular", "Bilgie Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 40px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ud = `framer-uLcah`));
  }),
  Gd,
  Kd,
  qd,
  Jd = t(() => {
    (M(),
      T.loadFonts([`FS;Outfit-light`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Gd = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/W7JHARPQSG6P4YAUJKIMUM6JNAX2RFW3.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Kd = [
        `.framer-zNCeo .framer-styles-preset-31b5v5:not(.rich-text-wrapper), .framer-zNCeo .framer-styles-preset-31b5v5.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1024px) { .framer-zNCeo .framer-styles-preset-31b5v5:not(.rich-text-wrapper), .framer-zNCeo .framer-styles-preset-31b5v5.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1023px) and (min-width: 768px) { .framer-zNCeo .framer-styles-preset-31b5v5:not(.rich-text-wrapper), .framer-zNCeo .framer-styles-preset-31b5v5.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 425px) { .framer-zNCeo .framer-styles-preset-31b5v5:not(.rich-text-wrapper), .framer-zNCeo .framer-styles-preset-31b5v5.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 424px) and (min-width: 0px) { .framer-zNCeo .framer-styles-preset-31b5v5:not(.rich-text-wrapper), .framer-zNCeo .framer-styles-preset-31b5v5.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (qd = `framer-zNCeo`));
  });
function Yd(e, t) {
  return {
    description: `Discover a curated collection of indoor plants, decorative pots, and botanical essentials that refresh your space, improve air quality, and create a calming green atmosphere for everyday living.`,
    favicon: `https://framerusercontent.com/assets/kbArDy1ZbioPnlPKu8jiIFzFI.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/KiAsCEJF9FOFt8y6qC8AEyMH53M.png`,
    title: `Botanical Garden - Bring Nature Into Your Home And Workspace`,
  };
}
var Xd = t(() => {});
function Zd(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1440px)` },
      { hash: `4dla0y`, mediaQuery: `(min-width: 1024px) and (max-width: 1439.98px)` },
      { hash: `qte02t`, mediaQuery: `(min-width: 768px) and (max-width: 1023.98px)` },
      { hash: `1qjx6v9`, mediaQuery: `(min-width: 425px) and (max-width: 767.98px)` },
      { hash: `gjjqtz`, mediaQuery: `(max-width: 424.98px)` },
    ],
    description: Yd(e, t).description,
    elements: {
      B1wYyw9qj: `why-choose-3`,
      b6uoLB1MU: `hero`,
      fBoB8dJHB: `plants4`,
      fH1dJWDRZ: `why-choose`,
      iLQR2gUoR: `plants-1`,
      iu26HJtPt: `contact-us`,
      IX1SVflNL: `about-us`,
      lNFMvzb0M: `plants-3`,
      N1UaIRCy_: `plants2`,
      P9cso7Gmd: `section-2`,
      Q5Vx3bMBy: `section-1`,
      u4wiTznyv: `services`,
      yHaU55ofG: `why-choose-2`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-N8u7j`,
    title: Yd(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var Qd,
  $d,
  ef = t(() => {
    (Xd(),
      (Qd = 1),
      ($d = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
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
  $,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf = t(() => {
    (h(),
      M(),
      C(),
      _(),
      Pl(),
      gu(),
      Iu(),
      xs(),
      Ju(),
      Pd(),
      md(),
      Id(),
      Rl(),
      Bd(),
      Wd(),
      Jd(),
      ef(),
      (tf = A(Fu)),
      (nf = A(Fd)),
      (rf = A(Nl)),
      (af = me(H)),
      (of = A(pd)),
      (sf = A(bs)),
      (cf = ce(ye)),
      (lf = A(Nd)),
      (uf = ce(R)),
      (df = A(qu)),
      (ff = A(hu)),
      (pf = {
        G5QHoowHZ: `(min-width: 1024px) and (max-width: 1439.98px)`,
        izBDMNe_l: `(min-width: 425px) and (max-width: 767.98px)`,
        MU3cM4Y2X: `(min-width: 768px) and (max-width: 1023.98px)`,
        sCk6V5ytt: `(max-width: 424.98px)`,
        WQLkyLRf1: `(min-width: 1440px)`,
      }),
      (mf = () => typeof document < `u`),
      (hf = []),
      (gf = `framer-N8u7j`),
      (_f = {
        G5QHoowHZ: `framer-v-4dla0y`,
        izBDMNe_l: `framer-v-1qjx6v9`,
        MU3cM4Y2X: `framer-v-qte02t`,
        sCk6V5ytt: `framer-v-gjjqtz`,
        WQLkyLRf1: `framer-v-72rtr7`,
      }),
      (vf = (e, t, n) => (e && t ? `position` : n)),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (yf = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 6, ease: [0.42, -0.01, 0.42, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (bf = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: -595,
        y: 0,
      }),
      (xf = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 595,
        y: 0,
      }),
      (Sf = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Cf = {
        opacity: 0.3,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (wf = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Tf = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: wf,
        y: 20,
      }),
      (Ef = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: wf,
        y: -20,
      }),
      (Df = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Of = {
        "Phone L": `izBDMNe_l`,
        Desktop: `WQLkyLRf1`,
        Laptop: `G5QHoowHZ`,
        Phone: `sCk6V5ytt`,
        Tablet: `MU3cM4Y2X`,
      }),
      (kf = ({ value: e }) =>
        de()
          ? null
          : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Af = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Of[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (jf = be(
        l(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = y(),
            { activeLocale: o, setLocale: l } = he(),
            u = te(),
            { style: p, className: h, layoutId: g, variant: _, ...v } = Af(e);
          le(f(() => Zd({}, o), [o]));
          let [b, C] = ve(_, pf, !1),
            w = E(gf, zd, Ll, Ud, qd),
            T = n(re)?.isLayoutTemplate,
            D = !!n(S)?.transition?.layout,
            k = vf(T, D),
            A = pe(`b6uoLB1MU`),
            j = ie();
          _e();
          let M = s(null),
            N = s(null),
            P = s(null),
            F = s(null),
            ne = pe(`P9cso7Gmd`),
            I = s(null),
            ae = pe(`Q5Vx3bMBy`),
            se = pe(`iLQR2gUoR`),
            ce = s(null),
            ue = () => !mf() || ![`izBDMNe_l`, `sCk6V5ytt`].includes(b),
            de = pe(`N1UaIRCy_`),
            fe = pe(`lNFMvzb0M`),
            me = pe(`fBoB8dJHB`),
            z = pe(`IX1SVflNL`),
            ge = s(null),
            be = pe(`fH1dJWDRZ`),
            V = s(null),
            U = s(null),
            Se = s(null),
            Ce = pe(`yHaU55ofG`),
            we = pe(`B1wYyw9qj`),
            Te = pe(`u4wiTznyv`),
            Ee = s(null),
            De = pe(`iu26HJtPt`),
            Oe = s(null);
          return (
            oe({}),
            d(re.Provider, {
              value: {
                activeVariantId: b,
                humanReadableVariantMap: Of,
                primaryVariantId: `WQLkyLRf1`,
                variantClassNames: _f,
              },
              children: m(ee, {
                id: g ?? a,
                children: [
                  d(kf, {
                    value: `html body { background: var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255)); }`,
                  }),
                  m(x.div, {
                    ...v,
                    className: E(w, `framer-72rtr7`, h),
                    ref: i,
                    style: { ...p },
                    children: [
                      d(B, {
                        children: d(R, {
                          className: `framer-1kp2ozz-container`,
                          isAuthoredByUser: !0,
                          layout: k,
                          nodeId: `MLZ5VULQ0`,
                          scopeId: `augiA20Il`,
                          children: d(Fd, {
                            connectedFrameDesktop: [
                              d(B, {
                                height: 939,
                                width: `1200px`,
                                children: d(R, {
                                  className: `framer-1xkznw-container`,
                                  "data-framer-name": `Preloader`,
                                  inComponentSlot: !0,
                                  name: `Preloader`,
                                  nodeId: `U5TA9isMv`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: d(Fu, {
                                    height: `100%`,
                                    id: `U5TA9isMv`,
                                    layoutId: `U5TA9isMv`,
                                    name: `Preloader`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: $(`hT69zwZi7`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            connectedFrameMobile: [],
                            connectedFrameTablet: [],
                            duration: 3,
                            height: `100%`,
                            id: `MLZ5VULQ0`,
                            layoutId: `MLZ5VULQ0`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                      d(B, {
                        children: d(R, {
                          className: `framer-1exqt27-container`,
                          "data-framer-name": `Smooth Scroll`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: k,
                          name: `Smooth Scroll`,
                          nodeId: `NTpfwaQq3`,
                          scopeId: `augiA20Il`,
                          children: d(Nl, {
                            height: `100%`,
                            id: `NTpfwaQq3`,
                            infinite: !1,
                            intensity: 12,
                            layoutId: `NTpfwaQq3`,
                            name: `Smooth Scroll`,
                            orientation: `vertical`,
                            smooth: !0,
                            width: `100%`,
                          }),
                        }),
                      }),
                      d(L, {
                        breakpoint: b,
                        overrides: {
                          izBDMNe_l: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1716,
                              intrinsicWidth: 4096,
                              pixelHeight: 1716,
                              pixelWidth: 4096,
                              sizes: u?.width || `100vw`,
                              src: `../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-6cc199.jpg`,
                              srcSet: `../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-e0897b.jpg 512w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-687ece.jpg 1024w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc.jpg 2048w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-6cc199.jpg 4096w`,
                            },
                          },
                          MU3cM4Y2X: { fitImageDimension: `height` },
                          sCk6V5ytt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1716,
                              intrinsicWidth: 4096,
                              pixelHeight: 1716,
                              pixelWidth: 4096,
                              sizes: u?.width || `100vw`,
                              src: `../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-6cc199.jpg`,
                              srcSet: `../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-e0897b.jpg 512w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-687ece.jpg 1024w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc.jpg 2048w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-6cc199.jpg 4096w`,
                            },
                          },
                        },
                        children: m(ye, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1716,
                            intrinsicWidth: 4096,
                            loading: O((u?.y || 0) + 0 + 1),
                            pixelHeight: 1716,
                            pixelWidth: 4096,
                            sizes: u?.width || `100vw`,
                            src: `../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-6cc199.jpg`,
                            srcSet: `../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-e0897b.jpg 512w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-687ece.jpg 1024w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc.jpg 2048w,../../assets/images/LlAozECmZd9Wuce2HYCUOYAzHOc-6cc199.jpg 4096w`,
                          },
                          className: `framer-12lj1jy`,
                          "data-framer-name": `Hero`,
                          layout: k,
                          children: [
                            d(`div`, { className: `framer-urkkhj`, "data-framer-name": `Overlay` }),
                            m(`div`, {
                              className: `framer-5zu0xl`,
                              "data-framer-name": `Container`,
                              id: A,
                              ref: j(A),
                              children: [
                                m(`div`, {
                                  className: `framer-1pltoso`,
                                  children: [
                                    m(`div`, {
                                      className: `framer-1589jfy`,
                                      children: [
                                        d(af, {
                                          __fromCanvasComponent: !0,
                                          animate: yf,
                                          children: d(c, {
                                            children: d(`h1`, {
                                              className: `framer-styles-preset-1246cy5`,
                                              "data-styles-preset": `fVECYH3BR`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                              },
                                              children: `Bring Nature Into Your`,
                                            }),
                                          }),
                                          className: `framer-ojum08`,
                                          "data-framer-appear-id": `ojum08`,
                                          fonts: [`Inter`],
                                          initial: bf,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        d(af, {
                                          __fromCanvasComponent: !0,
                                          animate: yf,
                                          children: d(c, {
                                            children: d(`h1`, {
                                              className: `framer-styles-preset-1246cy5`,
                                              "data-styles-preset": `fVECYH3BR`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                              },
                                              children: `Home And Workspace`,
                                            }),
                                          }),
                                          className: `framer-1xq0mlh`,
                                          "data-framer-appear-id": `1xq0mlh`,
                                          fonts: [`Inter`],
                                          initial: xf,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(H, {
                                      __fromCanvasComponent: !0,
                                      children: d(c, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-6mjars`,
                                          "data-styles-preset": `A2dn5jtrl`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                          },
                                          children: `Discover a curated collection of indoor plants, decorative pots, and botanical essentials that refresh your space, improve air quality, and create a calming green atmosphere for everyday living.`,
                                        }),
                                      }),
                                      className: `framer-72t7gj`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    m(`div`, {
                                      className: `framer-vqxabt`,
                                      children: [
                                        d(L, {
                                          breakpoint: b,
                                          overrides: {
                                            izBDMNe_l: { y: void 0 },
                                            MU3cM4Y2X: {
                                              y: (u?.y || 0) + 0 + 1 + -292 + 0 + 0 + 0 + 284 + 0,
                                            },
                                            sCk6V5ytt: { y: void 0 },
                                          },
                                          children: d(B, {
                                            height: 50,
                                            y: (u?.y || 0) + 0 + 1 + 333 + 0 + 0 + 284 + 0,
                                            children: d(R, {
                                              className: `framer-5euizx-container`,
                                              "data-framer-name": `Secondary`,
                                              name: `Secondary`,
                                              nodeId: `AYYDb8Tmg`,
                                              scopeId: `augiA20Il`,
                                              children: d(pd, {
                                                e6uupHRzC: !1,
                                                height: `100%`,
                                                HVHkX_drK: `Watch Out Video`,
                                                id: `AYYDb8Tmg`,
                                                layoutId: `AYYDb8Tmg`,
                                                n55UwfFA_: !0,
                                                name: `Secondary`,
                                                variant: $(`WNicWewbJ`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        d(xe, {
                                          links: [
                                            {
                                              href: { hash: `:HCKGX_ySM`, webPageId: `BjBqmIQXf` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:HCKGX_ySM`, webPageId: `BjBqmIQXf` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:HCKGX_ySM`, webPageId: `BjBqmIQXf` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:HCKGX_ySM`, webPageId: `BjBqmIQXf` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:HCKGX_ySM`, webPageId: `BjBqmIQXf` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            d(L, {
                                              breakpoint: b,
                                              overrides: {
                                                izBDMNe_l: { y: void 0 },
                                                MU3cM4Y2X: {
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    1 +
                                                    -292 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    284 +
                                                    0,
                                                },
                                                sCk6V5ytt: { y: void 0 },
                                              },
                                              children: d(B, {
                                                height: 50,
                                                y: (u?.y || 0) + 0 + 1 + 333 + 0 + 0 + 284 + 0,
                                                children: d(R, {
                                                  className: `framer-cwfeyh-container`,
                                                  "data-framer-name": `Primary button`,
                                                  name: `Primary button`,
                                                  nodeId: `CKyhK4GKS`,
                                                  scopeId: `augiA20Il`,
                                                  children: d(L, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      G5QHoowHZ: { d_yg_RU9i: e[1] },
                                                      izBDMNe_l: { d_yg_RU9i: e[3] },
                                                      MU3cM4Y2X: { d_yg_RU9i: e[2] },
                                                      sCk6V5ytt: { d_yg_RU9i: e[4] },
                                                    },
                                                    children: d(bs, {
                                                      d_yg_RU9i: e[0],
                                                      F7HxQNO3s: `Get it now`,
                                                      height: `100%`,
                                                      id: `CKyhK4GKS`,
                                                      layoutId: `CKyhK4GKS`,
                                                      name: `Primary button`,
                                                      variant: $(`kvzAT6haQ`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d(L, {
                                  breakpoint: b,
                                  overrides: {
                                    G5QHoowHZ: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: j(A),
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: M,
                                          target: {
                                            opacity: 0.7,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -279,
                                            y: 580,
                                          },
                                        },
                                        {
                                          offset: 60,
                                          ref: N,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -266,
                                            y: 1400,
                                          },
                                        },
                                        {
                                          ref: P,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 3500,
                                          },
                                        },
                                        {
                                          ref: F,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 4e3,
                                          },
                                        },
                                      ],
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 658,
                                        intrinsicWidth: 706,
                                        loading: O((u?.y || 0) + 0 + 1 + 333 + -97),
                                        pixelHeight: 658,
                                        pixelWidth: 706,
                                        sizes: `calc(min(${u?.width || `100vw`} - 80px, 1280px) * 0.5826)`,
                                        src: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png`,
                                        srcSet: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec-bd2e1e.png 512w,../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png 706w`,
                                      },
                                    },
                                    izBDMNe_l: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: j(A),
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: M,
                                          target: {
                                            opacity: 0.7,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 580,
                                          },
                                        },
                                        {
                                          offset: 60,
                                          ref: N,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 2500,
                                          },
                                        },
                                        {
                                          ref: P,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 3500,
                                          },
                                        },
                                        {
                                          ref: F,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 4e3,
                                          },
                                        },
                                      ],
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 658,
                                        intrinsicWidth: 706,
                                        pixelHeight: 658,
                                        pixelWidth: 706,
                                        sizes: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        src: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png`,
                                        srcSet: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec-bd2e1e.png 512w,../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png 706w`,
                                      },
                                    },
                                    MU3cM4Y2X: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: j(A),
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: M,
                                          target: {
                                            opacity: 0.7,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 580,
                                          },
                                        },
                                        {
                                          offset: 60,
                                          ref: N,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 1800,
                                          },
                                        },
                                        {
                                          ref: P,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 3500,
                                          },
                                        },
                                        {
                                          ref: F,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 4e3,
                                          },
                                        },
                                      ],
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 658,
                                        intrinsicWidth: 706,
                                        loading: O((u?.y || 0) + 0 + 1 + -292 + 0 + 364),
                                        pixelHeight: 658,
                                        pixelWidth: 706,
                                        sizes: `min(${u?.width || `100vw`} - 68px, 1280px)`,
                                        src: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png`,
                                        srcSet: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec-bd2e1e.png 512w,../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png 706w`,
                                      },
                                    },
                                    sCk6V5ytt: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: j(A),
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: M,
                                          target: {
                                            opacity: 0.7,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 580,
                                          },
                                        },
                                        {
                                          offset: 60,
                                          ref: N,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 2500,
                                          },
                                        },
                                        {
                                          ref: P,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 3500,
                                          },
                                        },
                                        {
                                          ref: F,
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -350,
                                            y: 4e3,
                                          },
                                        },
                                      ],
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 658,
                                        intrinsicWidth: 706,
                                        pixelHeight: 658,
                                        pixelWidth: 706,
                                        sizes: `min(${u?.width || `100vw`} - 30px, 1280px)`,
                                        src: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png`,
                                        srcSet: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec-bd2e1e.png 512w,../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png 706w`,
                                      },
                                    },
                                  },
                                  children: d(cf, {
                                    __framer__spring: {
                                      damping: 60,
                                      delay: 0,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stagger: 0,
                                      stiffness: 500,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: j(A),
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: M,
                                        target: {
                                          opacity: 0.7,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.7,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -350,
                                          y: 580,
                                        },
                                      },
                                      {
                                        offset: 60,
                                        ref: N,
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.2,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -350,
                                          y: 1400,
                                        },
                                      },
                                      {
                                        ref: P,
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -350,
                                          y: 3500,
                                        },
                                      },
                                      {
                                        ref: F,
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -350,
                                          y: 4e3,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 658,
                                      intrinsicWidth: 706,
                                      loading: O((u?.y || 0) + 0 + 1 + 333 + -91),
                                      pixelHeight: 658,
                                      pixelWidth: 706,
                                      sizes: `calc(min(${u?.width || `100vw`} - 160px, 1280px) / 1.813)`,
                                      src: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png`,
                                      srcSet: `../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec-bd2e1e.png 512w,../../assets/images/s1qWG3l5Lm6oSvcspEm7d60JOec.png 706w`,
                                    },
                                    className: `framer-1y9lwhw`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      d(x.div, {
                        className: `framer-p029dn`,
                        "data-framer-name": `Fresh & Beautiful`,
                        id: ne,
                        layout: k,
                        ref: I,
                        children: m(`div`, {
                          className: `framer-n4j6dd`,
                          "data-framer-name": `Container`,
                          id: ae,
                          ref: M,
                          children: [
                            m(`div`, {
                              className: `framer-1mpm3gw`,
                              children: [
                                d(L, {
                                  breakpoint: b,
                                  overrides: {
                                    izBDMNe_l: {
                                      children: d(c, {
                                        children: m(`h2`, {
                                          className: `framer-styles-preset-17y2kp1`,
                                          "data-styles-preset": `iuVU88PF1`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                          },
                                          children: [
                                            d(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                              },
                                              children: `Plants Make Life Better `,
                                            }),
                                            `Naturally Fresh & Beautiful`,
                                          ],
                                        }),
                                      }),
                                    },
                                    sCk6V5ytt: {
                                      children: d(c, {
                                        children: m(`h2`, {
                                          className: `framer-styles-preset-17y2kp1`,
                                          "data-styles-preset": `iuVU88PF1`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                          },
                                          children: [
                                            d(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                              },
                                              children: `Plants Make Life Better `,
                                            }),
                                            `Naturally Fresh & Beautiful`,
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  children: d(H, {
                                    __fromCanvasComponent: !0,
                                    children: d(c, {
                                      children: m(`h2`, {
                                        className: `framer-styles-preset-17y2kp1`,
                                        "data-styles-preset": `iuVU88PF1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                        },
                                        children: [
                                          d(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                            },
                                            children: `Plants Make Life Better`,
                                          }),
                                          d(`br`, {}),
                                          `Naturally Fresh & Beautiful`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1wir1gr`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                d(H, {
                                  __fromCanvasComponent: !0,
                                  children: d(c, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-31b5v5`,
                                      "data-styles-preset": `s9rRM_QPk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                      },
                                      children: `We believe plants do more than decorate a room — they transform it. Our handpicked selection of indoor greens, flowering plants, and modern planters helps you create peaceful spaces that feel alive and welcoming.`,
                                    }),
                                  }),
                                  className: `framer-b2agy9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(`div`, {
                                  className: `framer-gidckd`,
                                  children: d(xe, {
                                    links: [
                                      {
                                        href: { hash: `:Dzl1t9LOX`, webPageId: `BjBqmIQXf` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:Dzl1t9LOX`, webPageId: `BjBqmIQXf` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:Dzl1t9LOX`, webPageId: `BjBqmIQXf` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:Dzl1t9LOX`, webPageId: `BjBqmIQXf` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:Dzl1t9LOX`, webPageId: `BjBqmIQXf` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            y: (u?.y || 0) + 0 + 1001 + -50 + 80 + 0 + 221 + 0,
                                          },
                                          izBDMNe_l: { y: void 0 },
                                          MU3cM4Y2X: {
                                            y: (u?.y || 0) + 0 + 323 + -50 + 80 + 0 + 221 + 0,
                                          },
                                          sCk6V5ytt: { y: void 0 },
                                        },
                                        children: d(B, {
                                          height: 50,
                                          y: (u?.y || 0) + 0 + 1001 + -50 + 122 + 0 + 221 + 0,
                                          children: d(R, {
                                            className: `framer-msmjqh-container`,
                                            "data-framer-name": `Primary button`,
                                            name: `Primary button`,
                                            nodeId: `IZrDqUg68`,
                                            scopeId: `augiA20Il`,
                                            children: d(L, {
                                              breakpoint: b,
                                              overrides: {
                                                G5QHoowHZ: { d_yg_RU9i: e[1] },
                                                izBDMNe_l: { d_yg_RU9i: e[3] },
                                                MU3cM4Y2X: { d_yg_RU9i: e[2] },
                                                sCk6V5ytt: { d_yg_RU9i: e[4] },
                                              },
                                              children: d(bs, {
                                                d_yg_RU9i: e[0],
                                                F7HxQNO3s: `Read More`,
                                                height: `100%`,
                                                id: `IZrDqUg68`,
                                                layoutId: `IZrDqUg68`,
                                                name: `Primary button`,
                                                variant: $(`kvzAT6haQ`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                }),
                              ],
                            }),
                            d(L, {
                              breakpoint: b,
                              overrides: {
                                G5QHoowHZ: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    loading: O((u?.y || 0) + 0 + 1001 + -50 + 431 - 431),
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    sizes: `min(${u?.width || `100vw`} * 0.88, 1280px)`,
                                    src: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png`,
                                    srcSet: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-979e78.png 512w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-d12b43.png 1024w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png 1280w`,
                                  },
                                },
                                izBDMNe_l: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    positionX: `right`,
                                    positionY: `center`,
                                    sizes: `min(${u?.width || `100vw`} * 0.9, 1280px)`,
                                    src: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png`,
                                    srcSet: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-979e78.png 512w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-d12b43.png 1024w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png 1280w`,
                                  },
                                },
                                MU3cM4Y2X: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    loading: O((u?.y || 0) + 0 + 323 + -50 + 431 - 431),
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    sizes: `min(${u?.width || `100vw`} * 0.92, 1280px)`,
                                    src: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png`,
                                    srcSet: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-979e78.png 512w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-d12b43.png 1024w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png 1280w`,
                                  },
                                },
                                sCk6V5ytt: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    positionX: `right`,
                                    positionY: `center`,
                                    sizes: `min(${u?.width || `100vw`} * 0.9, 1280px)`,
                                    src: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png`,
                                    srcSet: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-979e78.png 512w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-d12b43.png 1024w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png 1280w`,
                                  },
                                },
                              },
                              children: d(ye, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 523,
                                  intrinsicWidth: 1280,
                                  loading: O((u?.y || 0) + 0 + 1001 + -50 + 514 - 514),
                                  pixelHeight: 523,
                                  pixelWidth: 1280,
                                  sizes: `min(${u?.width || `100vw`}, 1280px)`,
                                  src: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png`,
                                  srcSet: `../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-979e78.png 512w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ-d12b43.png 1024w,../../assets/images/a4xjzpXrwKXtyO2O1EQdUIddrCQ.png 1280w`,
                                },
                                className: `framer-z87351`,
                              }),
                            }),
                            d(L, {
                              breakpoint: b,
                              overrides: {
                                G5QHoowHZ: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    loading: O((u?.y || 0) + 0 + 1001 + -50 + 0),
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    sizes: `min(${u?.width || `100vw`} * 0.88, 1280px)`,
                                    src: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png`,
                                    srcSet: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-001667.png 512w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-b159ca.png 1024w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png 1280w`,
                                  },
                                },
                                izBDMNe_l: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    positionX: `right`,
                                    positionY: `center`,
                                    sizes: `min(${u?.width || `100vw`} * 0.9, 1280px)`,
                                    src: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png`,
                                    srcSet: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-001667.png 512w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-b159ca.png 1024w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png 1280w`,
                                  },
                                },
                                MU3cM4Y2X: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    loading: O((u?.y || 0) + 0 + 323 + -50 + 0),
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    sizes: `min(${u?.width || `100vw`} * 0.92, 1280px)`,
                                    src: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png`,
                                    srcSet: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-001667.png 512w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-b159ca.png 1024w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png 1280w`,
                                  },
                                },
                                sCk6V5ytt: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 523,
                                    intrinsicWidth: 1280,
                                    pixelHeight: 523,
                                    pixelWidth: 1280,
                                    positionX: `right`,
                                    positionY: `center`,
                                    sizes: `min(${u?.width || `100vw`} * 0.9, 1280px)`,
                                    src: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png`,
                                    srcSet: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-001667.png 512w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-b159ca.png 1024w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png 1280w`,
                                  },
                                },
                              },
                              children: d(cf, {
                                __framer__loop: Cf,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopPauseOffscreen: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: `mirror`,
                                __framer__loopTransition: Sf,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 523,
                                  intrinsicWidth: 1280,
                                  loading: O((u?.y || 0) + 0 + 1001 + -50 + 0),
                                  pixelHeight: 523,
                                  pixelWidth: 1280,
                                  sizes: `min(${u?.width || `100vw`}, 1280px)`,
                                  src: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png`,
                                  srcSet: `../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-001667.png 512w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc-b159ca.png 1024w,../../assets/images/Kv1SrhsrAfc0pSC5h5kL1MC0ALc.png 1280w`,
                                },
                                className: `framer-1frzw2z`,
                              }),
                            }),
                          ],
                        }),
                      }),
                      m(x.div, {
                        className: `framer-7u5xzv`,
                        "data-framer-name": `Plants`,
                        id: se,
                        layout: k,
                        ref: N,
                        children: [
                          m(`div`, {
                            className: `framer-x3uq3j`,
                            "data-framer-name": `Container`,
                            children: [
                              m(`div`, {
                                className: `framer-2rs5oz`,
                                children: [
                                  d(H, {
                                    __fromCanvasComponent: !0,
                                    children: d(c, {
                                      children: m(`h2`, {
                                        className: `framer-styles-preset-17y2kp1`,
                                        "data-styles-preset": `iuVU88PF1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                        },
                                        children: [
                                          d(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                            },
                                            children: `Popular `,
                                          }),
                                          `Indoor Plants`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1fvmcek`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(H, {
                                    __fromCanvasComponent: !0,
                                    children: d(c, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-6mjars`,
                                        "data-styles-preset": `A2dn5jtrl`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                        },
                                        children: `Browse our best-selling plants chosen for their beauty, low maintenance, and ability to brighten any indoor environment.`,
                                      }),
                                    }),
                                    className: `framer-1b8fwp7`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              m(`div`, {
                                className: `framer-wa8s75`,
                                children: [
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        width: `min(max((min(${u?.width || `100vw`} - 80px, 1280px) - 45px) / 4, 50px), 450px)`,
                                        y: (u?.y || 0) + 0 + 1451 + 60 + 0 + 0 + 210 + 0 + 0,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        width: `max((min(${u?.width || `100vw`} - 68px, 1280px) - 20px) / 2, 50px)`,
                                        y: (u?.y || 0) + 0 + 751 + 40 + 0 + 0 + 210 + 0 + 0,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 452,
                                      width: `max((min(${u?.width || `100vw`} - 160px, 1280px) - 60px) / 4, 50px)`,
                                      y: (u?.y || 0) + 0 + 1524 + 150 + 0 + 0 + 325 + 0 + 0,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 364,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 364,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 200,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 100,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 180,
                                                  y: 300,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 180,
                                                  y: 300,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 90,
                                                  y: 150,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 45,
                                                  y: 75,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                            whileHover: void 0,
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stagger: 0,
                                            stiffness: 500,
                                            type: `spring`,
                                          },
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 488,
                                                y: 0,
                                              },
                                            },
                                            {
                                              offset: 60,
                                              ref: N,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 488,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: P,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 200,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: F,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 100,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: ce,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-9h4vy1-container`,
                                          nodeId: `siYzLLY4P`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          whileHover: Tf,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              G5QHoowHZ: {
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`oiNSQNZgC`),
                                              },
                                              izBDMNe_l: { variant: $(`H7QM2s3Jh`) },
                                              sCk6V5ytt: { variant: $(`H7QM2s3Jh`) },
                                            },
                                            children: d(Nd, {
                                              height: `100%`,
                                              id: `siYzLLY4P`,
                                              layoutId: `siYzLLY4P`,
                                              MtourpZBe: `Snake Plant`,
                                              nuEs_q7wO: `Perfect for beginners, this hardy plant improves air quality`,
                                              style: { width: `100%` },
                                              variant: $(`rKl5Em_sk`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        width: `min(max((min(${u?.width || `100vw`} - 80px, 1280px) - 45px) / 4, 50px), 450px)`,
                                        y: (u?.y || 0) + 0 + 1451 + 60 + 0 + 0 + 210 + 0 + 0,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        width: `max((min(${u?.width || `100vw`} - 68px, 1280px) - 20px) / 2, 50px)`,
                                        y: (u?.y || 0) + 0 + 751 + 40 + 0 + 0 + 210 + 0 + 0,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 452,
                                      width: `max((min(${u?.width || `100vw`} - 160px, 1280px) - 60px) / 4, 50px)`,
                                      y: (u?.y || 0) + 0 + 1524 + 150 + 0 + 0 + 325 + 0 + 0,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 119,
                                                  y: 10,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 119,
                                                  y: 10,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 80,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 40,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -180,
                                                  y: 300,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -180,
                                                  y: 300,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -90,
                                                  y: 150,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -45,
                                                  y: 75,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                            whileHover: void 0,
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stagger: 0,
                                            stiffness: 500,
                                            type: `spring`,
                                          },
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 163,
                                                y: 10,
                                              },
                                            },
                                            {
                                              offset: 60,
                                              ref: N,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 163,
                                                y: 10,
                                              },
                                            },
                                            {
                                              ref: P,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 80,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: F,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 40,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: ce,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1u7p8vz-container`,
                                          nodeId: `BXoDKrvl4`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          whileHover: Ef,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              G5QHoowHZ: {
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`oiNSQNZgC`),
                                              },
                                              izBDMNe_l: { variant: $(`H7QM2s3Jh`) },
                                              sCk6V5ytt: { variant: $(`H7QM2s3Jh`) },
                                            },
                                            children: d(Nd, {
                                              CCupkBzwk: Df(
                                                {
                                                  pixelHeight: 256,
                                                  pixelWidth: 160,
                                                  src: `../../assets/images/yJp4VfBzN5Plgjns76mCbAcLjA.png`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `BXoDKrvl4`,
                                              layoutId: `BXoDKrvl4`,
                                              MtourpZBe: `Areca Palm`,
                                              nuEs_q7wO: `A tropical favorite that adds height, freshness`,
                                              style: { width: `100%` },
                                              variant: $(`rKl5Em_sk`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        width: `min(max((min(${u?.width || `100vw`} - 80px, 1280px) - 45px) / 4, 50px), 450px)`,
                                        y: (u?.y || 0) + 0 + 1451 + 60 + 0 + 0 + 210 + 0 + 0,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        width: `max((min(${u?.width || `100vw`} - 68px, 1280px) - 20px) / 2, 50px)`,
                                        y: (u?.y || 0) + 0 + 751 + 40 + 0 + 0 + 210 + 0 + 472,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 452,
                                      width: `max((min(${u?.width || `100vw`} - 160px, 1280px) - 60px) / 4, 50px)`,
                                      y: (u?.y || 0) + 0 + 1524 + 150 + 0 + 0 + 325 + 0 + 0,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -119,
                                                  y: 20,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -119,
                                                  y: 20,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -80,
                                                  y: 10,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -40,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 180,
                                                  y: -180,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 180,
                                                  y: -180,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 90,
                                                  y: -150,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 45,
                                                  y: -75,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                            whileHover: void 0,
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stagger: 0,
                                            stiffness: 500,
                                            type: `spring`,
                                          },
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -163,
                                                y: 20,
                                              },
                                            },
                                            {
                                              offset: 60,
                                              ref: N,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -163,
                                                y: 20,
                                              },
                                            },
                                            {
                                              ref: P,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -80,
                                                y: 10,
                                              },
                                            },
                                            {
                                              ref: F,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -40,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: ce,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-kbm8l2-container`,
                                          nodeId: `P0rETeS5v`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          whileHover: Tf,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              G5QHoowHZ: {
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`oiNSQNZgC`),
                                              },
                                              izBDMNe_l: { variant: $(`H7QM2s3Jh`) },
                                              sCk6V5ytt: { variant: $(`H7QM2s3Jh`) },
                                            },
                                            children: d(Nd, {
                                              CCupkBzwk: Df(
                                                {
                                                  pixelHeight: 256,
                                                  pixelWidth: 220,
                                                  src: `../../assets/images/WFsAd8FhG6egy1fPUT36fVu6IGs.png`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `P0rETeS5v`,
                                              layoutId: `P0rETeS5v`,
                                              MtourpZBe: `Peace Lily`,
                                              nuEs_q7wO: `Elegant white blooms paired with lush leaves create a calm`,
                                              style: { width: `100%` },
                                              variant: $(`rKl5Em_sk`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        width: `min(max((min(${u?.width || `100vw`} - 80px, 1280px) - 45px) / 4, 50px), 450px)`,
                                        y: (u?.y || 0) + 0 + 1451 + 60 + 0 + 0 + 210 + 0 + 0,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        width: `max((min(${u?.width || `100vw`} - 68px, 1280px) - 20px) / 2, 50px)`,
                                        y: (u?.y || 0) + 0 + 751 + 40 + 0 + 0 + 210 + 0 + 472,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 452,
                                      width: `max((min(${u?.width || `100vw`} - 160px, 1280px) - 60px) / 4, 50px)`,
                                      y: (u?.y || 0) + 0 + 1524 + 150 + 0 + 0 + 325 + 0 + 0,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -364,
                                                  y: 30,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -364,
                                                  y: 30,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -200,
                                                  y: 20,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -100,
                                                  y: 10,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -180,
                                                  y: -180,
                                                },
                                              },
                                              {
                                                offset: 60,
                                                ref: N,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -180,
                                                  y: -180,
                                                },
                                              },
                                              {
                                                ref: P,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -90,
                                                  y: -150,
                                                },
                                              },
                                              {
                                                ref: F,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -45,
                                                  y: -75,
                                                },
                                              },
                                              {
                                                ref: ce,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                            whileHover: void 0,
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stagger: 0,
                                            stiffness: 500,
                                            type: `spring`,
                                          },
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -488,
                                                y: 30,
                                              },
                                            },
                                            {
                                              offset: 60,
                                              ref: N,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -488,
                                                y: 30,
                                              },
                                            },
                                            {
                                              ref: P,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -200,
                                                y: 20,
                                              },
                                            },
                                            {
                                              ref: F,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -100,
                                                y: 10,
                                              },
                                            },
                                            {
                                              ref: ce,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-ue7m5v-container`,
                                          nodeId: `u2uNhwPmH`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          whileHover: Ef,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              G5QHoowHZ: {
                                                style: { maxWidth: `100%`, width: `100%` },
                                                variant: $(`oiNSQNZgC`),
                                              },
                                              izBDMNe_l: { variant: $(`H7QM2s3Jh`) },
                                              sCk6V5ytt: { variant: $(`H7QM2s3Jh`) },
                                            },
                                            children: d(Nd, {
                                              CCupkBzwk: Df(
                                                {
                                                  pixelHeight: 256,
                                                  pixelWidth: 219,
                                                  src: `../../assets/images/dbQMgIJpbchWySUOdJWBEPlA.png`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `u2uNhwPmH`,
                                              layoutId: `u2uNhwPmH`,
                                              MtourpZBe: `Rubber Plant`,
                                              nuEs_q7wO: `Bold glossy foliage makes this plant a striking statement`,
                                              style: { width: `100%` },
                                              variant: $(`rKl5Em_sk`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              d(`div`, {
                                className: `framer-1e46l9q`,
                                children: d(xe, {
                                  links: [
                                    {
                                      href: { webPageId: `BjBqmIQXf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BjBqmIQXf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BjBqmIQXf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BjBqmIQXf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BjBqmIQXf` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        G5QHoowHZ: {
                                          y: (u?.y || 0) + 0 + 1451 + 60 + 0 + 0 + 680 + 20,
                                        },
                                        izBDMNe_l: { y: void 0 },
                                        MU3cM4Y2X: {
                                          y: (u?.y || 0) + 0 + 751 + 40 + 0 + 0 + 1152 + 20,
                                        },
                                        sCk6V5ytt: { y: void 0 },
                                      },
                                      children: d(B, {
                                        height: 50,
                                        y: (u?.y || 0) + 0 + 1524 + 150 + 0 + 0 + 795 + 40,
                                        children: d(R, {
                                          className: `framer-1r18tf6-container`,
                                          "data-framer-name": `Primary button`,
                                          name: `Primary button`,
                                          nodeId: `TpHl6rK8f`,
                                          scopeId: `augiA20Il`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              G5QHoowHZ: { d_yg_RU9i: e[1] },
                                              izBDMNe_l: { d_yg_RU9i: e[3] },
                                              MU3cM4Y2X: { d_yg_RU9i: e[2] },
                                              sCk6V5ytt: { d_yg_RU9i: e[4] },
                                            },
                                            children: d(bs, {
                                              d_yg_RU9i: e[0],
                                              F7HxQNO3s: `View All Plants`,
                                              height: `100%`,
                                              id: `TpHl6rK8f`,
                                              layoutId: `TpHl6rK8f`,
                                              name: `Primary button`,
                                              variant: $(`kvzAT6haQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                          ue() &&
                            d(`div`, {
                              className: `framer-3983io hidden-1qjx6v9 hidden-gjjqtz`,
                              "data-framer-name": `Plants`,
                              id: de,
                              ref: P,
                            }),
                          ue() &&
                            d(`div`, {
                              className: `framer-1c1bc9c hidden-1qjx6v9 hidden-gjjqtz`,
                              "data-framer-name": `Plants`,
                              id: fe,
                              ref: F,
                            }),
                          ue() &&
                            d(`div`, {
                              className: `framer-1psmwm hidden-1qjx6v9 hidden-gjjqtz`,
                              "data-framer-name": `Plants`,
                              id: me,
                              ref: ce,
                            }),
                        ],
                      }),
                      d(x.div, {
                        className: `framer-14ss0u0`,
                        "data-framer-name": `Passion`,
                        id: z,
                        layout: k,
                        ref: ge,
                        children: d(`div`, {
                          className: `framer-1o4xqhj`,
                          "data-framer-name": `Container`,
                          children: m(`div`, {
                            className: `framer-npzhtw`,
                            "data-framer-name": `stack`,
                            children: [
                              d(`div`, {
                                className: `framer-1032p01`,
                                children: d(L, {
                                  breakpoint: b,
                                  overrides: {
                                    G5QHoowHZ: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 578,
                                        intrinsicWidth: 635,
                                        loading: O((u?.y || 0) + 0 + 5321 + 60 + 0 + 6.5 + 0 + 0),
                                        pixelHeight: 578,
                                        pixelWidth: 635,
                                        sizes: `min(min(max((min(${u?.width || `100vw`} - 80px, 1280px) - 30px) / 2, 1px), 450px), 613px)`,
                                        src: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png`,
                                        srcSet: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA-4c1e73.png 512w,../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png 635w`,
                                      },
                                    },
                                    izBDMNe_l: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 578,
                                        intrinsicWidth: 635,
                                        pixelHeight: 578,
                                        pixelWidth: 635,
                                        sizes: `min(min(${u?.width || `100vw`} - 50px, 1280px), 513px)`,
                                        src: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png`,
                                        srcSet: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA-4c1e73.png 512w,../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png 635w`,
                                      },
                                    },
                                    MU3cM4Y2X: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 578,
                                        intrinsicWidth: 635,
                                        loading: O((u?.y || 0) + 0 + 5053 + 80 + 0 + 0 + 0 + 0),
                                        pixelHeight: 578,
                                        pixelWidth: 635,
                                        sizes: `max((min(${u?.width || `100vw`} - 68px, 1280px) - 30px) / 2, 1px)`,
                                        src: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png`,
                                        srcSet: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA-4c1e73.png 512w,../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png 635w`,
                                      },
                                    },
                                    sCk6V5ytt: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 578,
                                        intrinsicWidth: 635,
                                        pixelHeight: 578,
                                        pixelWidth: 635,
                                        sizes: `min(min(${u?.width || `100vw`} - 40px, 1280px), 513px)`,
                                        src: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png`,
                                        srcSet: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA-4c1e73.png 512w,../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png 635w`,
                                      },
                                    },
                                  },
                                  children: d(ye, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 578,
                                      intrinsicWidth: 635,
                                      loading: O((u?.y || 0) + 0 + 5774 + 100 + 0 + 0 + 0 + 0),
                                      pixelHeight: 578,
                                      pixelWidth: 635,
                                      sizes: `613px`,
                                      src: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png`,
                                      srcSet: `../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA-4c1e73.png 512w,../../assets/images/7drKWtFa3kvk4nGSudzhHMVGA.png 635w`,
                                    },
                                    className: `framer-31vfth`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              }),
                              m(`div`, {
                                className: `framer-1nnit4l`,
                                children: [
                                  d(H, {
                                    __fromCanvasComponent: !0,
                                    children: d(c, {
                                      children: m(`h2`, {
                                        className: `framer-styles-preset-17y2kp1`,
                                        "data-styles-preset": `iuVU88PF1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                        },
                                        children: [
                                          `Crafted With Care`,
                                          d(`br`, {}),
                                          d(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                            },
                                            children: `Grown With Passion`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-mmkq2d`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(H, {
                                    __fromCanvasComponent: !0,
                                    children: m(c, {
                                      children: [
                                        d(`p`, {
                                          className: `framer-styles-preset-6mjars`,
                                          "data-styles-preset": `A2dn5jtrl`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                          },
                                          children: `Every plant in our collection is carefully nurtured to ensure healthy roots, vibrant leaves, and long-lasting growth. From small desk plants to statement pieces, we offer options for every corner of your home.`,
                                        }),
                                        d(`p`, {
                                          className: `framer-styles-preset-6mjars`,
                                          "data-styles-preset": `A2dn5jtrl`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                          },
                                          children: `Our team of plant experts is always ready to guide you with care tips, styling ideas, and maintenance advice so your greenery thrives all year round.`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-17y07jt`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(`div`, {
                                    className: `framer-1sdf1kk`,
                                    children: d(xe, {
                                      links: [
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        d(L, {
                                          breakpoint: b,
                                          overrides: {
                                            G5QHoowHZ: {
                                              y: (u?.y || 0) + 0 + 5321 + 60 + 0 + 0 + 0 + 373 + 0,
                                            },
                                            izBDMNe_l: { y: void 0 },
                                            MU3cM4Y2X: {
                                              y: (u?.y || 0) + 0 + 5053 + 80 + 0 + 0 + 0 + 373 + 0,
                                            },
                                            sCk6V5ytt: { y: void 0 },
                                          },
                                          children: d(B, {
                                            height: 50,
                                            y:
                                              (u?.y || 0) + 0 + 5774 + 100 + 0 + 67.5 + 0 + 373 + 0,
                                            children: d(R, {
                                              className: `framer-vk5kxl-container`,
                                              "data-framer-name": `Secondary`,
                                              name: `Secondary`,
                                              nodeId: `pTvFYeEjU`,
                                              scopeId: `augiA20Il`,
                                              children: d(L, {
                                                breakpoint: b,
                                                overrides: {
                                                  G5QHoowHZ: { TYx1F_FJo: e[1] },
                                                  izBDMNe_l: { TYx1F_FJo: e[3] },
                                                  MU3cM4Y2X: { TYx1F_FJo: e[2] },
                                                  sCk6V5ytt: { TYx1F_FJo: e[4] },
                                                },
                                                children: d(pd, {
                                                  e6uupHRzC: !1,
                                                  height: `100%`,
                                                  HVHkX_drK: `Watch Out Video`,
                                                  id: `pTvFYeEjU`,
                                                  layoutId: `pTvFYeEjU`,
                                                  n55UwfFA_: !0,
                                                  name: `Secondary`,
                                                  TYx1F_FJo: e[0],
                                                  variant: $(`nU7KfPBWi`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      m(x.div, {
                        className: `framer-kpf7fc`,
                        "data-framer-name": `Why choose`,
                        id: be,
                        layout: k,
                        ref: V,
                        children: [
                          m(`div`, {
                            className: `framer-1hyb3sd`,
                            "data-framer-name": `Container`,
                            children: [
                              m(`div`, {
                                className: `framer-19imuxx`,
                                children: [
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      izBDMNe_l: {
                                        children: d(c, {
                                          children: m(`h2`, {
                                            className: `framer-styles-preset-17y2kp1`,
                                            "data-styles-preset": `iuVU88PF1`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                            },
                                            children: [
                                              `Why Choose `,
                                              d(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                                },
                                                children: `Our Plants`,
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      sCk6V5ytt: {
                                        children: d(c, {
                                          children: m(`h2`, {
                                            className: `framer-styles-preset-17y2kp1`,
                                            "data-styles-preset": `iuVU88PF1`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                            },
                                            children: [
                                              `Why Choose `,
                                              d(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                                },
                                                children: `Our Plants`,
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                    },
                                    children: d(H, {
                                      __fromCanvasComponent: !0,
                                      children: d(c, {
                                        children: m(`h2`, {
                                          className: `framer-styles-preset-17y2kp1`,
                                          "data-styles-preset": `iuVU88PF1`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                          },
                                          children: [
                                            `Why Choose `,
                                            d(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                              },
                                              children: `Our Plants`,
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-1sbxxtj`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      izBDMNe_l: {
                                        children: d(c, {
                                          children: d(`p`, {
                                            className: `framer-styles-preset-6mjars`,
                                            "data-styles-preset": `A2dn5jtrl`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                            },
                                            children: `Step into our botanical stores filled with vibrant plants, stylish planters, and inspiring décor ideas designed to help you build your own indoor jungle.`,
                                          }),
                                        }),
                                      },
                                      sCk6V5ytt: {
                                        children: d(c, {
                                          children: d(`p`, {
                                            className: `framer-styles-preset-6mjars`,
                                            "data-styles-preset": `A2dn5jtrl`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                            },
                                            children: `Step into our botanical stores filled with vibrant plants, stylish planters, and inspiring décor ideas designed to help you build your own indoor jungle.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: d(H, {
                                      __fromCanvasComponent: !0,
                                      children: d(c, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-6mjars`,
                                          "data-styles-preset": `A2dn5jtrl`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                          },
                                          children: `Step into our botanical stores filled with vibrant plants, stylish planters, and inspiring décor ideas designed to help you build your own indoor jungle.`,
                                        }),
                                      }),
                                      className: `framer-exgg32`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              m(`div`, {
                                className: `framer-1cy1bnm`,
                                children: [
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1333,
                                          intrinsicWidth: 2e3,
                                          loading: O(
                                            (u?.y || 0) + 0 + 5864 + 60 + 0 + 0 + 192 + 0 + 0
                                          ),
                                          pixelHeight: 1333,
                                          pixelWidth: 2e3,
                                          sizes: `min(${u?.width || `100vw`} - 80px, 1280px)`,
                                          src: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png`,
                                          srcSet: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-f5736b.png 512w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-810144.png 1024w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png 2000w`,
                                        },
                                      },
                                      izBDMNe_l: {
                                        __framer__styleTransformEffectEnabled: void 0,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1333,
                                          intrinsicWidth: 2e3,
                                          pixelHeight: 1333,
                                          pixelWidth: 2e3,
                                          sizes: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                          src: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png`,
                                          srcSet: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-f5736b.png 512w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-810144.png 1024w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png 2000w`,
                                        },
                                      },
                                      MU3cM4Y2X: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1333,
                                          intrinsicWidth: 2e3,
                                          loading: O(
                                            (u?.y || 0) + 0 + 5596 + 40 + 0 + 0 + 232 + 0 + 0
                                          ),
                                          pixelHeight: 1333,
                                          pixelWidth: 2e3,
                                          sizes: `min(${u?.width || `100vw`} - 68px, 1280px)`,
                                          src: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png`,
                                          srcSet: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-f5736b.png 512w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-810144.png 1024w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png 2000w`,
                                        },
                                      },
                                      sCk6V5ytt: {
                                        __framer__styleTransformEffectEnabled: void 0,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1333,
                                          intrinsicWidth: 2e3,
                                          pixelHeight: 1333,
                                          pixelWidth: 2e3,
                                          sizes: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                          src: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png`,
                                          srcSet: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-f5736b.png 512w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-810144.png 1024w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png 2000w`,
                                        },
                                      },
                                    },
                                    children: d(cf, {
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 0.5,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: V,
                                          target: {
                                            opacity: 0.5,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: U,
                                          target: {
                                            opacity: 0.8,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0.8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: Se,
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: `onScrollTarget`,
                                      __framer__transformViewportThreshold: 1,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1333,
                                        intrinsicWidth: 2e3,
                                        loading: O(
                                          (u?.y || 0) + 0 + 6532 + 100 + 0 + 0 + 192 + 0 + 0
                                        ),
                                        pixelHeight: 1333,
                                        pixelWidth: 2e3,
                                        sizes: `1102px`,
                                        src: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png`,
                                        srcSet: `../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-f5736b.png 512w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0-810144.png 1024w,../../assets/images/dW0CKAsNgMborZB7L6WNzs0Qn0.png 2000w`,
                                      },
                                      className: `framer-1dxcnz0`,
                                      "data-framer-name": `756d02280b0d80c6e8aff641ecbe96373b34427d`,
                                      fitImageDimension: `height`,
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        y: (u?.y || 0) + 0 + 5864 + 60 + 0 + 0 + 192 + 129,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        y: (u?.y || 0) + 0 + 5596 + 40 + 0 + 0 + 232 + 14,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 89,
                                      width: `295px`,
                                      y: (u?.y || 0) + 0 + 6532 + 100 + 0 + 0 + 192 + 129,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 400,
                                                  y: 250,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 300,
                                                  y: 250,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 150,
                                                  y: 80,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 200,
                                                  y: 190,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 200,
                                                  y: 190,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 100,
                                                  y: 100,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 400,
                                                y: 250,
                                              },
                                            },
                                            {
                                              ref: V,
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 400,
                                                y: 250,
                                              },
                                            },
                                            {
                                              ref: U,
                                              target: {
                                                opacity: 0.8,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.8,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 100,
                                                y: 100,
                                              },
                                            },
                                            {
                                              ref: Se,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1ttiic9-container`,
                                          nodeId: `aEF_z9NwQ`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              izBDMNe_l: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                              sCk6V5ytt: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                            },
                                            children: d(qu, {
                                              h2S20wL4h: `Our plants are grown with care to ensure long-lasting freshness and strong growth.`,
                                              height: `100%`,
                                              id: `aEF_z9NwQ`,
                                              layoutId: `aEF_z9NwQ`,
                                              style: { maxWidth: `100%` },
                                              variant: $(`yVUVaOUe1`),
                                              width: `100%`,
                                              zipU3LcpC: `Fresh & Healthy`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        y: (u?.y || 0) + 0 + 5864 + 60 + 0 + 0 + 192 + 629 - 303,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        y: (u?.y || 0) + 0 + 5596 + 40 + 0 + 0 + 232 + 467 - 233,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 89,
                                      width: `295px`,
                                      y: (u?.y || 0) + 0 + 6532 + 100 + 0 + 0 + 192 + 734 - 303,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 260,
                                                  y: 150,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 260,
                                                  y: 150,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 150,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 200,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 200,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 200,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 460,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: V,
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 460,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: U,
                                              target: {
                                                opacity: 0.8,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.8,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 200,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: Se,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1eyx4mv-container`,
                                          nodeId: `iAIpMTJn5`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              izBDMNe_l: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                              sCk6V5ytt: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                            },
                                            children: d(qu, {
                                              h2S20wL4h: `Sustainably sourced materials and natural growing practices protect the environment.`,
                                              height: `100%`,
                                              id: `iAIpMTJn5`,
                                              layoutId: `iAIpMTJn5`,
                                              style: { maxWidth: `100%` },
                                              variant: $(`yVUVaOUe1`),
                                              width: `100%`,
                                              zipU3LcpC: `Eco Friendly`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        y: (u?.y || 0) + 0 + 5864 + 60 + 0 + 0 + 192 + 129,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        y: (u?.y || 0) + 0 + 5596 + 40 + 0 + 0 + 232 + 14,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 89,
                                      width: `295px`,
                                      y: (u?.y || 0) + 0 + 6532 + 100 + 0 + 0 + 192 + 129,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -350,
                                                  y: 250,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -350,
                                                  y: 250,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -150,
                                                  y: 80,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -200,
                                                  y: 190,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -200,
                                                  y: 190,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -100,
                                                  y: 100,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -400,
                                                y: 250,
                                              },
                                            },
                                            {
                                              ref: V,
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -400,
                                                y: 250,
                                              },
                                            },
                                            {
                                              ref: U,
                                              target: {
                                                opacity: 0.8,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.8,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -100,
                                                y: 100,
                                              },
                                            },
                                            {
                                              ref: Se,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-lkp9ep-container`,
                                          nodeId: `p0iLRHpdu`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              izBDMNe_l: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                              sCk6V5ytt: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                            },
                                            children: d(qu, {
                                              h2S20wL4h: `Simple care routines make them perfect for busy homes and first-time plant owners.`,
                                              height: `100%`,
                                              id: `p0iLRHpdu`,
                                              layoutId: `p0iLRHpdu`,
                                              style: { maxWidth: `100%` },
                                              variant: $(`yVUVaOUe1`),
                                              width: `100%`,
                                              zipU3LcpC: `Easy Maintenance`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(L, {
                                    breakpoint: b,
                                    overrides: {
                                      G5QHoowHZ: {
                                        y: (u?.y || 0) + 0 + 5864 + 60 + 0 + 0 + 192 + 629 - 303.5,
                                      },
                                      izBDMNe_l: {
                                        width: `min(${u?.width || `100vw`} - 50px, 1280px)`,
                                        y: void 0,
                                      },
                                      MU3cM4Y2X: {
                                        y: (u?.y || 0) + 0 + 5596 + 40 + 0 + 0 + 232 + 467 - 233,
                                      },
                                      sCk6V5ytt: {
                                        width: `min(${u?.width || `100vw`} - 40px, 1280px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: d(B, {
                                      height: 89,
                                      width: `295px`,
                                      y: (u?.y || 0) + 0 + 6532 + 100 + 0 + 0 + 192 + 734 - 303.5,
                                      children: d(L, {
                                        breakpoint: b,
                                        overrides: {
                                          G5QHoowHZ: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -260,
                                                  y: 150,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -260,
                                                  y: 150,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -160,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          izBDMNe_l: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                          MU3cM4Y2X: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -200,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: V,
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.5,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -200,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: U,
                                                target: {
                                                  opacity: 0.8,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.8,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: -80,
                                                  y: 0,
                                                },
                                              },
                                              {
                                                ref: Se,
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                          sCk6V5ytt: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                          },
                                        },
                                        children: d(uf, {
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -460,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: V,
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.5,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -460,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: U,
                                              target: {
                                                opacity: 0.8,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0.8,
                                                skewX: 0,
                                                skewY: 0,
                                                x: -200,
                                                y: 0,
                                              },
                                            },
                                            {
                                              ref: Se,
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onScrollTarget`,
                                          __framer__transformViewportThreshold: 1,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-16bfbvq-container`,
                                          nodeId: `K4ipkmET1`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              izBDMNe_l: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                              sCk6V5ytt: {
                                                style: { width: `100%` },
                                                variant: $(`QYPJzY0pm`),
                                              },
                                            },
                                            children: d(qu, {
                                              h2S20wL4h: `Safe packaging and quick shipping ensure your plants arrive fresh and damage-free.`,
                                              height: `100%`,
                                              id: `K4ipkmET1`,
                                              layoutId: `K4ipkmET1`,
                                              style: { maxWidth: `100%` },
                                              variant: $(`yVUVaOUe1`),
                                              width: `100%`,
                                              zipU3LcpC: `Fast Delivery`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          ue() &&
                            d(`div`, {
                              className: `framer-1v7ksbc hidden-1qjx6v9 hidden-gjjqtz`,
                              "data-framer-name": `why choose`,
                              id: Ce,
                              ref: U,
                            }),
                          ue() &&
                            d(`div`, {
                              className: `framer-f3yj4z hidden-1qjx6v9 hidden-gjjqtz`,
                              "data-framer-name": `why choose`,
                              id: we,
                              ref: Se,
                            }),
                        ],
                      }),
                      d(x.div, {
                        className: `framer-21ghn7`,
                        "data-framer-name": `Services`,
                        id: Te,
                        layout: k,
                        ref: Ee,
                        children: d(`div`, {
                          className: `framer-hmerf7`,
                          "data-framer-name": `Container`,
                          children: m(`div`, {
                            className: `framer-n15c9x`,
                            children: [
                              d(L, {
                                breakpoint: b,
                                overrides: {
                                  G5QHoowHZ: { y: (u?.y || 0) + 0 + 6805 + 60 + 0 + 0 + 0 + 0 + 0 },
                                  izBDMNe_l: { width: u?.width || `100vw`, y: void 0 },
                                  MU3cM4Y2X: {
                                    width: `max(${u?.width || `100vw`}, 50px)`,
                                    y: (u?.y || 0) + 0 + 6375 + 40 + 0 + 0 + 0 + 0 + 0,
                                  },
                                  sCk6V5ytt: { width: u?.width || `100vw`, y: void 0 },
                                },
                                children: d(B, {
                                  height: 360,
                                  width: `max(${u?.width || `100vw`} / 2, 50px)`,
                                  y: (u?.y || 0) + 0 + 9658 + 100 + 0 + 0 + 0 + 0 + 0,
                                  children: d(R, {
                                    className: `framer-wxbbxs-container`,
                                    nodeId: `t8LdxsDlG`,
                                    scopeId: `augiA20Il`,
                                    children: d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        izBDMNe_l: { variant: $(`ORgmu0Ays`) },
                                        sCk6V5ytt: { variant: $(`ORgmu0Ays`) },
                                      },
                                      children: d(hu, {
                                        height: `100%`,
                                        id: `t8LdxsDlG`,
                                        IL7YAzh0h: `Fresh From The Nursery`,
                                        layoutId: `t8LdxsDlG`,
                                        style: { width: `100%` },
                                        variant: $(`yUGqi8AWJ`),
                                        width: `100%`,
                                        z_6A2D3TA: `Handpicked daily from our nursery, each plant is carefully selected to ensure vibrant leaves, healthy roots, and long-lasting freshness for your home or workspace.`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d(L, {
                                breakpoint: b,
                                overrides: {
                                  G5QHoowHZ: { y: (u?.y || 0) + 0 + 6805 + 60 + 0 + 0 + 0 + 0 + 0 },
                                  izBDMNe_l: { width: u?.width || `100vw`, y: void 0 },
                                  MU3cM4Y2X: {
                                    width: `max(${u?.width || `100vw`}, 50px)`,
                                    y: (u?.y || 0) + 0 + 6375 + 40 + 0 + 0 + 0 + 0 + 360,
                                  },
                                  sCk6V5ytt: { width: u?.width || `100vw`, y: void 0 },
                                },
                                children: d(B, {
                                  height: 360,
                                  width: `max(${u?.width || `100vw`} / 2, 50px)`,
                                  y: (u?.y || 0) + 0 + 9658 + 100 + 0 + 0 + 0 + 0 + 0,
                                  children: d(R, {
                                    className: `framer-zcq90j-container`,
                                    nodeId: `NbmhGO2Ih`,
                                    scopeId: `augiA20Il`,
                                    children: d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        izBDMNe_l: { variant: $(`ORgmu0Ays`) },
                                        MU3cM4Y2X: { variant: $(`Upyh8kGBa`) },
                                        sCk6V5ytt: { variant: $(`ORgmu0Ays`) },
                                      },
                                      children: d(hu, {
                                        height: `100%`,
                                        id: `NbmhGO2Ih`,
                                        IL7YAzh0h: `Styled For Every Space`,
                                        jcKrm_CHZ: Df(
                                          {
                                            pixelHeight: 360,
                                            pixelWidth: 360,
                                            src: `../../assets/images/OsQzzaC57lfTqdwe82VqmTYB0E.png`,
                                          },
                                          ``
                                        ),
                                        layoutId: `NbmhGO2Ih`,
                                        style: { width: `100%` },
                                        variant: $(`yUGqi8AWJ`),
                                        width: `100%`,
                                        z_6A2D3TA: `From compact desk plants to statement floor pieces, our collection is designed to match modern interiors and bring natural elegance into every corner.`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d(L, {
                                breakpoint: b,
                                overrides: {
                                  G5QHoowHZ: {
                                    y: (u?.y || 0) + 0 + 6805 + 60 + 0 + 0 + 0 + 0 + 360,
                                  },
                                  izBDMNe_l: { width: u?.width || `100vw`, y: void 0 },
                                  MU3cM4Y2X: {
                                    width: `max(${u?.width || `100vw`}, 50px)`,
                                    y: (u?.y || 0) + 0 + 6375 + 40 + 0 + 0 + 0 + 0 + 720,
                                  },
                                  sCk6V5ytt: { width: u?.width || `100vw`, y: void 0 },
                                },
                                children: d(B, {
                                  height: 360,
                                  width: `max(${u?.width || `100vw`} / 2, 50px)`,
                                  y: (u?.y || 0) + 0 + 9658 + 100 + 0 + 0 + 0 + 0 + 360,
                                  children: d(R, {
                                    className: `framer-11bbk1-container`,
                                    nodeId: `uIOI3Ujix`,
                                    scopeId: `augiA20Il`,
                                    children: d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        izBDMNe_l: { variant: $(`ORgmu0Ays`) },
                                        MU3cM4Y2X: { variant: $(`yUGqi8AWJ`) },
                                        sCk6V5ytt: { variant: $(`ORgmu0Ays`) },
                                      },
                                      children: d(hu, {
                                        height: `100%`,
                                        id: `uIOI3Ujix`,
                                        IL7YAzh0h: `Crafted With Care`,
                                        jcKrm_CHZ: Df(
                                          {
                                            pixelHeight: 360,
                                            pixelWidth: 360,
                                            src: `../../assets/images/IKFergD8StmYVX3tY88LdqlM.png`,
                                          },
                                          ``
                                        ),
                                        layoutId: `uIOI3Ujix`,
                                        style: { width: `100%` },
                                        variant: $(`Upyh8kGBa`),
                                        width: `100%`,
                                        z_6A2D3TA: `Our team prepares every order with attention and love, using safe packaging methods that protect your plants and keep them thriving during delivery.`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d(L, {
                                breakpoint: b,
                                overrides: {
                                  G5QHoowHZ: {
                                    y: (u?.y || 0) + 0 + 6805 + 60 + 0 + 0 + 0 + 0 + 360,
                                  },
                                  izBDMNe_l: { width: u?.width || `100vw`, y: void 0 },
                                  MU3cM4Y2X: {
                                    width: `max(${u?.width || `100vw`}, 50px)`,
                                    y: (u?.y || 0) + 0 + 6375 + 40 + 0 + 0 + 0 + 0 + 1080,
                                  },
                                  sCk6V5ytt: { width: u?.width || `100vw`, y: void 0 },
                                },
                                children: d(B, {
                                  height: 360,
                                  width: `max(${u?.width || `100vw`} / 2, 50px)`,
                                  y: (u?.y || 0) + 0 + 9658 + 100 + 0 + 0 + 0 + 0 + 360,
                                  children: d(R, {
                                    className: `framer-11n5z52-container`,
                                    nodeId: `cwObL4Qra`,
                                    scopeId: `augiA20Il`,
                                    children: d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        izBDMNe_l: { variant: $(`ORgmu0Ays`) },
                                        sCk6V5ytt: { variant: $(`ORgmu0Ays`) },
                                      },
                                      children: d(hu, {
                                        height: `100%`,
                                        id: `cwObL4Qra`,
                                        IL7YAzh0h: `Visit Our Green Store`,
                                        jcKrm_CHZ: Df(
                                          {
                                            pixelHeight: 360,
                                            pixelWidth: 360,
                                            src: `../../assets/images/q5hYCGKTsLrdRj2n4woLZwfyda4.png`,
                                          },
                                          ``
                                        ),
                                        layoutId: `cwObL4Qra`,
                                        style: { width: `100%` },
                                        variant: $(`Upyh8kGBa`),
                                        width: `100%`,
                                        z_6A2D3TA: `Step inside our botanical shop and explore a world of lush greenery, stylish pots, and expert guidance to help you choose the perfect plants.`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      d(x.div, {
                        className: `framer-101m8s2`,
                        "data-framer-name": `CTA`,
                        id: De,
                        layout: k,
                        ref: Oe,
                        children: m(`div`, {
                          className: `framer-1m5ete5`,
                          "data-border": !0,
                          "data-framer-name": `Container`,
                          children: [
                            m(`div`, {
                              className: `framer-1wub6z1`,
                              children: [
                                d(H, {
                                  __fromCanvasComponent: !0,
                                  children: d(c, {
                                    children: m(`h2`, {
                                      className: `framer-styles-preset-17y2kp1`,
                                      "data-styles-preset": `iuVU88PF1`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, rgb(255, 255, 255))`,
                                      },
                                      children: [
                                        `Create Your Own Indoor `,
                                        d(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-c705bee9-a7f9-44ab-88d7-6caeccc4ca22, rgb(88, 178, 127))`,
                                          },
                                          children: `Garden Today`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-gzdpfp`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(H, {
                                  __fromCanvasComponent: !0,
                                  children: d(c, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-6mjars`,
                                      "data-styles-preset": `A2dn5jtrl`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-337ec1df-6721-444d-807b-5a1e4ad17b4e, rgb(217, 217, 217))`,
                                      },
                                      children: `Shop our latest arrivals and transform your living or workspace with beautiful, easy-care plants delivered straight to your door.`,
                                    }),
                                  }),
                                  className: `framer-1wv9a8g`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            m(`div`, {
                              className: `framer-rurk3m`,
                              children: [
                                d(xe, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    d(L, {
                                      breakpoint: b,
                                      overrides: {
                                        G5QHoowHZ: {
                                          y: (u?.y || 0) + 0 + 7645 + 60 + 0 + 74 + 0 + 0,
                                        },
                                        izBDMNe_l: { y: void 0 },
                                        MU3cM4Y2X: {
                                          y: (u?.y || 0) + 0 + 7895 + 40 + 0 + 74 + 0 + 0,
                                        },
                                        sCk6V5ytt: { y: void 0 },
                                      },
                                      children: d(B, {
                                        height: 50,
                                        y: (u?.y || 0) + 0 + 10578 + 100 + 0 + 124 + 0 + 0,
                                        children: d(R, {
                                          className: `framer-1nn2xxe-container`,
                                          "data-framer-name": `Secondary`,
                                          name: `Secondary`,
                                          nodeId: `k9VGNQuhe`,
                                          scopeId: `augiA20Il`,
                                          children: d(L, {
                                            breakpoint: b,
                                            overrides: {
                                              G5QHoowHZ: { TYx1F_FJo: e[1] },
                                              izBDMNe_l: { TYx1F_FJo: e[3] },
                                              MU3cM4Y2X: { TYx1F_FJo: e[2] },
                                              sCk6V5ytt: { TYx1F_FJo: e[4] },
                                            },
                                            children: d(pd, {
                                              e6uupHRzC: !1,
                                              height: `100%`,
                                              HVHkX_drK: `Watch Out Video`,
                                              id: `k9VGNQuhe`,
                                              layoutId: `k9VGNQuhe`,
                                              n55UwfFA_: !0,
                                              name: `Secondary`,
                                              TYx1F_FJo: e[0],
                                              variant: $(`WNicWewbJ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                d(L, {
                                  breakpoint: b,
                                  overrides: {
                                    G5QHoowHZ: { y: (u?.y || 0) + 0 + 7645 + 60 + 0 + 74 + 0 + 74 },
                                    izBDMNe_l: { y: void 0 },
                                    MU3cM4Y2X: { y: (u?.y || 0) + 0 + 7895 + 40 + 0 + 74 + 0 + 74 },
                                    sCk6V5ytt: { y: void 0 },
                                  },
                                  children: d(B, {
                                    height: 50,
                                    y: (u?.y || 0) + 0 + 10578 + 100 + 0 + 124 + 0 + 74,
                                    children: d(R, {
                                      className: `framer-haay9k-container`,
                                      "data-framer-name": `Primary button`,
                                      name: `Primary button`,
                                      nodeId: `vTNQ4nwCd`,
                                      scopeId: `augiA20Il`,
                                      children: d(bs, {
                                        F7HxQNO3s: `Get it now`,
                                        height: `100%`,
                                        id: `vTNQ4nwCd`,
                                        layoutId: `vTNQ4nwCd`,
                                        name: `Primary button`,
                                        style: { width: `100%` },
                                        variant: $(`kvzAT6haQ`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  d(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-N8u7j.framer-lux5qc, .framer-N8u7j .framer-lux5qc { display: block; }`,
          `.framer-N8u7j.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-bc85d6e1-2fb1-4730-a069-2db91dd3d71d, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
          `.framer-N8u7j .framer-1kp2ozz-container { flex: none; height: 1px; position: relative; width: 1px; z-index: 10; }`,
          `.framer-N8u7j .framer-1xkznw-container { -webkit-user-select: none; height: 939px; pointer-events: none; position: relative; user-select: none; width: 1200px; z-index: 10; }`,
          `.framer-N8u7j .framer-1exqt27-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
          `.framer-N8u7j .framer-12lj1jy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 80px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-urkkhj { background: linear-gradient(180deg, rgba(3, 19, 18, 0.8) 71.55172413793103%, rgb(3, 18, 17) 100%); flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; }`,
          `.framer-N8u7j .framer-5zu0xl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-1pltoso { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 595px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-N8u7j .framer-1589jfy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-ojum08, .framer-N8u7j .framer-1xq0mlh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
          `.framer-N8u7j .framer-72t7gj, .framer-N8u7j .framer-1wir1gr, .framer-N8u7j .framer-1fvmcek, .framer-N8u7j .framer-mmkq2d, .framer-N8u7j .framer-17y07jt, .framer-N8u7j .framer-1sbxxtj, .framer-N8u7j .framer-gzdpfp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-N8u7j .framer-vqxabt, .framer-N8u7j .framer-gidckd, .framer-N8u7j .framer-1sdf1kk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-5euizx-container, .framer-N8u7j .framer-cwfeyh-container, .framer-N8u7j .framer-msmjqh-container, .framer-N8u7j .framer-1r18tf6-container, .framer-N8u7j .framer-vk5kxl-container, .framer-N8u7j .framer-1nn2xxe-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-N8u7j .framer-1y9lwhw { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -80px; top: -91px; width: 55%; will-change: var(--framer-will-change-filter-override, filter); z-index: 3; }`,
          `.framer-N8u7j .framer-p029dn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 523px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-N8u7j .framer-n4j6dd { align-content: center; align-items: center; background-color: #001c1a; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; max-width: 1280px; overflow: hidden; padding: 122px 60px 121px 60px; position: absolute; top: -50px; transform: translateX(-50%); width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-N8u7j .framer-1mpm3gw { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-N8u7j .framer-b2agy9 { flex: none; height: auto; max-width: 535px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-N8u7j .framer-z87351 { bottom: 0px; flex: none; height: 100%; overflow: visible; position: absolute; right: 0px; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-1frzw2z { flex: none; height: 100%; left: calc(50.39062500000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-N8u7j .framer-7u5xzv { align-content: center; align-items: center; background-color: #001c1a; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 150px 80px 100px 80px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
          `.framer-N8u7j .framer-x3uq3j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: 100vh; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-2rs5oz, .framer-N8u7j .framer-19imuxx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-1b8fwp7 { flex: none; height: auto; max-width: 569px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-N8u7j .framer-wa8s75 { background-color: #001c1a; display: grid; flex: none; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 7; }`,
          `.framer-N8u7j .framer-9h4vy1-container, .framer-N8u7j .framer-1u7p8vz-container, .framer-N8u7j .framer-kbm8l2-container, .framer-N8u7j .framer-ue7m5v-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-N8u7j .framer-1e46l9q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-3983io, .framer-N8u7j .framer-1c1bc9c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; min-height: 523px; overflow: visible; padding: 100px 80px 100px 80px; position: sticky; top: 0px; width: 100%; }`,
          `.framer-N8u7j .framer-1psmwm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; min-height: 523px; overflow: visible; padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-14ss0u0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-1o4xqhj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-npzhtw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-1032p01 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 513px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-N8u7j .framer-31vfth { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 613px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-N8u7j .framer-1nnit4l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; max-width: 551px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-N8u7j .framer-kpf7fc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-1hyb3sd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-exgg32 { flex: none; height: auto; max-width: 729px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-N8u7j .framer-1cy1bnm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-1dxcnz0 { flex: none; height: auto; overflow: visible; position: relative; width: 1102px; }`,
          `.framer-N8u7j .framer-1ttiic9-container { flex: none; height: auto; left: 52px; max-width: 295px; position: absolute; top: 129px; width: auto; z-index: 1; }`,
          `.framer-N8u7j .framer-1eyx4mv-container { bottom: 214px; flex: none; height: auto; left: 0px; max-width: 295px; position: absolute; width: auto; z-index: 1; }`,
          `.framer-N8u7j .framer-lkp9ep-container { flex: none; height: auto; left: 896px; max-width: 295px; position: absolute; top: 129px; width: auto; z-index: 1; }`,
          `.framer-N8u7j .framer-16bfbvq-container { bottom: 215px; flex: none; height: auto; max-width: 295px; position: absolute; right: 0px; width: auto; z-index: 1; }`,
          `.framer-N8u7j .framer-1v7ksbc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-f3yj4z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-21ghn7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 100px 0px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
          `.framer-N8u7j .framer-hmerf7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-n15c9x { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-wxbbxs-container, .framer-N8u7j .framer-zcq90j-container, .framer-N8u7j .framer-11bbk1-container, .framer-N8u7j .framer-11n5z52-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
          `.framer-N8u7j .framer-101m8s2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px 80px 100px 80px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
          `.framer-N8u7j .framer-1m5ete5 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #001c1a; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 90px 80px 90px 80px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-N8u7j .framer-1wub6z1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-N8u7j .framer-1wv9a8g { flex: none; height: auto; max-width: 558px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-N8u7j .framer-rurk3m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-N8u7j .framer-haay9k-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
          ...Rd,
          ...Il,
          ...Hd,
          ...Kd,
          `.framer-N8u7j[data-border="true"]::after, .framer-N8u7j [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `@media (min-width: 1024px) and (max-width: 1439.98px) { .framer-N8u7j.framer-72rtr7 { width: 1024px; } .framer-N8u7j .framer-12lj1jy, .framer-N8u7j .framer-7u5xzv, .framer-N8u7j .framer-14ss0u0, .framer-N8u7j .framer-kpf7fc, .framer-N8u7j .framer-101m8s2 { padding: 60px 40px 60px 40px; } .framer-N8u7j .framer-1pltoso, .framer-N8u7j .framer-1032p01, .framer-N8u7j .framer-1nnit4l { flex: 0.7 0 0px; max-width: 450px; } .framer-N8u7j .framer-1y9lwhw { right: -56px; top: -97px; width: 58%; } .framer-N8u7j .framer-p029dn { min-height: 450px; padding: 0px 40px 0px 40px; } .framer-N8u7j .framer-n4j6dd { padding: 80px 60px 80px 60px; width: 88%; } .framer-N8u7j .framer-1mpm3gw { flex: 0.7 0 0px; } .framer-N8u7j .framer-x3uq3j { height: min-content; } .framer-N8u7j .framer-2rs5oz, .framer-N8u7j .framer-19imuxx { max-width: 450px; width: 70%; } .framer-N8u7j .framer-wa8s75 { gap: 15px 15px; } .framer-N8u7j .framer-9h4vy1-container, .framer-N8u7j .framer-1u7p8vz-container, .framer-N8u7j .framer-kbm8l2-container, .framer-N8u7j .framer-ue7m5v-container { max-width: 450px; } .framer-N8u7j .framer-1e46l9q { padding: 20px 0px 0px 0px; } .framer-N8u7j .framer-3983io, .framer-N8u7j .framer-1c1bc9c, .framer-N8u7j .framer-1psmwm { min-height: 450px; padding: 100px 60px 100px 60px; } .framer-N8u7j .framer-npzhtw { gap: 30px; justify-content: center; } .framer-N8u7j .framer-31vfth { max-width: 613px; width: 100%; } .framer-N8u7j .framer-1dxcnz0 { width: 100%; } .framer-N8u7j .framer-1ttiic9-container { left: 0px; } .framer-N8u7j .framer-lkp9ep-container { left: unset; right: 0px; } .framer-N8u7j .framer-1v7ksbc, .framer-N8u7j .framer-f3yj4z { height: min-content; min-height: 521px; } .framer-N8u7j .framer-21ghn7 { padding: 60px 0px 60px 0px; } .framer-N8u7j .framer-1m5ete5 { padding: 40px; }}`,
          `@media (min-width: 768px) and (max-width: 1023.98px) { .framer-N8u7j.framer-72rtr7 { width: 768px; } .framer-N8u7j .framer-12lj1jy { height: auto; justify-content: flex-start; padding: 150px 34px 40px 34px; } .framer-N8u7j .framer-5zu0xl { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: flex-end; } .framer-N8u7j .framer-1pltoso { flex: none; max-width: unset; width: 80%; } .framer-N8u7j .framer-1y9lwhw { position: relative; right: unset; top: unset; width: 100%; } .framer-N8u7j .framer-p029dn { min-height: 428px; } .framer-N8u7j .framer-n4j6dd { padding: 80px 40px 80px 40px; width: 92%; } .framer-N8u7j .framer-1mpm3gw { flex: 0.9 0 0px; } .framer-N8u7j .framer-7u5xzv, .framer-N8u7j .framer-kpf7fc, .framer-N8u7j .framer-101m8s2 { padding: 40px 34px 40px 34px; } .framer-N8u7j .framer-x3uq3j { align-content: flex-start; align-items: flex-start; height: min-content; justify-content: flex-start; order: 0; } .framer-N8u7j .framer-wa8s75 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-N8u7j .framer-9h4vy1-container, .framer-N8u7j .framer-1u7p8vz-container, .framer-N8u7j .framer-kbm8l2-container, .framer-N8u7j .framer-ue7m5v-container { will-change: unset; } .framer-N8u7j .framer-1e46l9q { padding: 20px 0px 0px 0px; } .framer-N8u7j .framer-3983io { min-height: unset; order: 1; } .framer-N8u7j .framer-1c1bc9c { min-height: unset; order: 2; } .framer-N8u7j .framer-1psmwm { min-height: unset; order: 3; } .framer-N8u7j .framer-14ss0u0 { padding: 80px 34px 40px 34px; } .framer-N8u7j .framer-npzhtw { align-content: flex-start; align-items: flex-start; gap: 30px; justify-content: flex-start; } .framer-N8u7j .framer-1032p01, .framer-N8u7j .framer-1nnit4l { max-width: unset; } .framer-N8u7j .framer-31vfth, .framer-N8u7j .framer-1dxcnz0 { width: 100%; } .framer-N8u7j .framer-1hyb3sd { gap: 40px; } .framer-N8u7j .framer-1ttiic9-container { left: 0px; top: 14px; } .framer-N8u7j .framer-1eyx4mv-container { bottom: 144px; } .framer-N8u7j .framer-lkp9ep-container { left: 405px; top: 14px; } .framer-N8u7j .framer-16bfbvq-container { bottom: 144px; left: 399px; right: unset; } .framer-N8u7j .framer-1v7ksbc, .framer-N8u7j .framer-f3yj4z { height: min-content; min-height: 428px; } .framer-N8u7j .framer-21ghn7 { padding: 40px 0px 40px 0px; } .framer-N8u7j .framer-n15c9x { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-N8u7j .framer-1m5ete5 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 40px 34px 40px 34px; } .framer-N8u7j .framer-1wub6z1 { flex: 1 0 0px; }}`,
          `@media (min-width: 425px) and (max-width: 767.98px) { .framer-N8u7j.framer-72rtr7 { width: 425px; } .framer-N8u7j .framer-12lj1jy { height: min-content; padding: 150px 25px 40px 25px; } .framer-N8u7j .framer-urkkhj { height: 100%; } .framer-N8u7j .framer-5zu0xl { flex-direction: column; gap: 20px; } .framer-N8u7j .framer-1pltoso, .framer-N8u7j .framer-1032p01, .framer-N8u7j .framer-1nnit4l { flex: none; gap: 20px; width: 100%; } .framer-N8u7j .framer-vqxabt { flex-wrap: wrap; gap: 15px 15px; } .framer-N8u7j .framer-1y9lwhw { position: relative; right: unset; top: unset; width: 100%; } .framer-N8u7j .framer-p029dn { min-height: 400px; } .framer-N8u7j .framer-n4j6dd { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 40px 25px 40px 25px; width: 90%; } .framer-N8u7j .framer-1mpm3gw { flex: 1 0 0px; gap: 20px; } .framer-N8u7j .framer-gidckd, .framer-N8u7j .framer-1e46l9q, .framer-N8u7j .framer-1sdf1kk { flex-wrap: wrap; } .framer-N8u7j .framer-z87351, .framer-N8u7j .framer-1o4xqhj, .framer-N8u7j .framer-hmerf7 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; } .framer-N8u7j .framer-1frzw2z { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; will-change: var(--framer-will-change-override, transform); } .framer-N8u7j .framer-7u5xzv, .framer-N8u7j .framer-14ss0u0, .framer-N8u7j .framer-kpf7fc, .framer-N8u7j .framer-101m8s2 { padding: 30px 25px 30px 25px; } .framer-N8u7j .framer-x3uq3j { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; height: min-content; } .framer-N8u7j .framer-2rs5oz { gap: 20px; } .framer-N8u7j .framer-wa8s75 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: flex-start; } .framer-N8u7j .framer-9h4vy1-container, .framer-N8u7j .framer-1u7p8vz-container, .framer-N8u7j .framer-kbm8l2-container, .framer-N8u7j .framer-ue7m5v-container { align-self: unset; position: sticky; top: 0px; z-index: 1; } .framer-N8u7j .framer-npzhtw { flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-N8u7j .framer-31vfth { width: 100%; } .framer-N8u7j .framer-1hyb3sd { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; gap: 20px; } .framer-N8u7j .framer-19imuxx { align-content: flex-start; align-items: flex-start; gap: 10px; justify-content: flex-start; } .framer-N8u7j .framer-1cy1bnm { align-content: flex-start; align-items: flex-start; gap: 20px; justify-content: flex-start; } .framer-N8u7j .framer-1dxcnz0 { order: 4; width: 100%; } .framer-N8u7j .framer-1ttiic9-container { left: unset; max-width: unset; order: 0; position: relative; top: unset; width: 100%; } .framer-N8u7j .framer-1eyx4mv-container { bottom: unset; left: unset; max-width: unset; order: 1; position: relative; width: 100%; } .framer-N8u7j .framer-lkp9ep-container { left: unset; max-width: unset; order: 2; position: relative; top: unset; width: 100%; } .framer-N8u7j .framer-16bfbvq-container { bottom: unset; max-width: unset; order: 3; position: relative; right: unset; width: 100%; } .framer-N8u7j .framer-21ghn7 { padding: 30px 0px 0px 0px; } .framer-N8u7j .framer-n15c9x { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-N8u7j .framer-wxbbxs-container, .framer-N8u7j .framer-zcq90j-container, .framer-N8u7j .framer-11bbk1-container, .framer-N8u7j .framer-11n5z52-container, .framer-N8u7j .framer-haay9k-container { align-self: unset; } .framer-N8u7j .framer-1m5ete5 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex-direction: column; gap: 15px; justify-content: flex-start; padding: 30px 25px 30px 25px; } .framer-N8u7j .framer-1wub6z1 { flex: none; gap: 10px; width: 100%; } .framer-N8u7j .framer-rurk3m { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; gap: 15px 15px; width: 100%; }}`,
          `@media (max-width: 424.98px) { .framer-N8u7j.framer-72rtr7 { width: 390px; } .framer-N8u7j .framer-12lj1jy { flex-direction: column; height: min-content; padding: 150px 15px 40px 15px; } .framer-N8u7j .framer-5zu0xl { flex-direction: column; gap: 20px; } .framer-N8u7j .framer-1pltoso, .framer-N8u7j .framer-1032p01, .framer-N8u7j .framer-1nnit4l { flex: none; gap: 20px; width: 100%; } .framer-N8u7j .framer-vqxabt { flex-wrap: wrap; gap: 15px 15px; } .framer-N8u7j .framer-1y9lwhw { position: relative; right: unset; top: unset; width: 100%; } .framer-N8u7j .framer-p029dn { flex-direction: column; min-height: 430px; } .framer-N8u7j .framer-n4j6dd { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 40px 25px 40px 25px; width: 90%; } .framer-N8u7j .framer-1mpm3gw { flex: 1 0 0px; gap: 20px; } .framer-N8u7j .framer-gidckd, .framer-N8u7j .framer-1e46l9q, .framer-N8u7j .framer-1sdf1kk { flex-wrap: wrap; } .framer-N8u7j .framer-z87351, .framer-N8u7j .framer-1o4xqhj, .framer-N8u7j .framer-hmerf7 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; } .framer-N8u7j .framer-1frzw2z { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; will-change: var(--framer-will-change-override, transform); } .framer-N8u7j .framer-7u5xzv, .framer-N8u7j .framer-kpf7fc, .framer-N8u7j .framer-101m8s2 { padding: 30px 20px 30px 20px; } .framer-N8u7j .framer-x3uq3j { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; height: min-content; } .framer-N8u7j .framer-2rs5oz { gap: 20px; } .framer-N8u7j .framer-wa8s75 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: flex-start; } .framer-N8u7j .framer-9h4vy1-container, .framer-N8u7j .framer-1u7p8vz-container, .framer-N8u7j .framer-kbm8l2-container, .framer-N8u7j .framer-ue7m5v-container { align-self: unset; position: sticky; top: 0px; z-index: 1; } .framer-N8u7j .framer-14ss0u0 { flex-direction: column; padding: 30px 20px 30px 20px; } .framer-N8u7j .framer-npzhtw { flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-N8u7j .framer-31vfth { width: 100%; } .framer-N8u7j .framer-1hyb3sd { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; gap: 20px; } .framer-N8u7j .framer-19imuxx { align-content: flex-start; align-items: flex-start; gap: 10px; justify-content: flex-start; } .framer-N8u7j .framer-1cy1bnm { align-content: flex-start; align-items: flex-start; gap: 20px; justify-content: flex-start; } .framer-N8u7j .framer-1dxcnz0 { order: 4; width: 100%; } .framer-N8u7j .framer-1ttiic9-container { left: unset; max-width: unset; order: 0; position: relative; top: unset; width: 100%; } .framer-N8u7j .framer-1eyx4mv-container { bottom: unset; left: unset; max-width: unset; order: 1; position: relative; width: 100%; } .framer-N8u7j .framer-lkp9ep-container { left: unset; max-width: unset; order: 2; position: relative; top: unset; width: 100%; } .framer-N8u7j .framer-16bfbvq-container { bottom: unset; max-width: unset; order: 3; position: relative; right: unset; width: 100%; } .framer-N8u7j .framer-21ghn7 { padding: 30px 0px 0px 0px; } .framer-N8u7j .framer-n15c9x { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-N8u7j .framer-wxbbxs-container, .framer-N8u7j .framer-zcq90j-container, .framer-N8u7j .framer-11bbk1-container, .framer-N8u7j .framer-11n5z52-container, .framer-N8u7j .framer-haay9k-container { align-self: unset; } .framer-N8u7j .framer-1m5ete5 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex-direction: column; gap: 15px; justify-content: flex-start; padding: 30px 25px 30px 25px; } .framer-N8u7j .framer-1wub6z1 { flex: none; gap: 10px; width: 100%; } .framer-N8u7j .framer-rurk3m { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; gap: 15px 15px; width: 100%; }}`,
        ],
        `framer-N8u7j`
      )),
      (jf.displayName = `Home`),
      (jf.defaultProps = { height: 10446, width: 1440 }),
      j(
        jf,
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
          ...tf,
          ...nf,
          ...rf,
          ...of,
          ...sf,
          ...lf,
          ...df,
          ...ff,
          ...D(Ld),
          ...D(Fl),
          ...D(Vd),
          ...D(Gd),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (jf.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([
            k(Fu, {}, t),
            k(pd, {}, t),
            k(bs, {}, t),
            k(Nd, {}, t),
            k(qu, {}, t),
            k(hu, {}, t),
          ])
        ),
      }),
      (Mf = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerAcceptsLayoutTemplate: `true`,
              framerColorSyntax: `true`,
              framerScrollSections: `{"b6uoLB1MU":{"pattern":":b6uoLB1MU","name":"hero"},"P9cso7Gmd":{"pattern":":P9cso7Gmd","name":"section-2"},"Q5Vx3bMBy":{"pattern":":Q5Vx3bMBy","name":"section-1"},"iLQR2gUoR":{"pattern":":iLQR2gUoR","name":"plants-1"},"N1UaIRCy_":{"pattern":":N1UaIRCy_","name":"plants2"},"lNFMvzb0M":{"pattern":":lNFMvzb0M","name":"plants-3"},"fBoB8dJHB":{"pattern":":fBoB8dJHB","name":"plants4"},"IX1SVflNL":{"pattern":":IX1SVflNL","name":"about-us"},"fH1dJWDRZ":{"pattern":":fH1dJWDRZ","name":"why-choose"},"yHaU55ofG":{"pattern":":yHaU55ofG","name":"why-choose-2"},"B1wYyw9qj":{"pattern":":B1wYyw9qj","name":"why-choose-3"},"u4wiTznyv":{"pattern":":u4wiTznyv","name":"services"},"iu26HJtPt":{"pattern":":iu26HJtPt","name":"contact-us"}}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"G5QHoowHZ":{"layout":["fixed","fixed"]},"MU3cM4Y2X":{"layout":["fixed","fixed"]},"izBDMNe_l":{"layout":["fixed","fixed"]},"sCk6V5ytt":{"layout":["fixed","fixed"]}}}`,
              framerResponsiveScreen: `true`,
              framerIntrinsicWidth: `1440`,
              framerIntrinsicHeight: `10446`,
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function Pf(e, t, n) {
  let r = If[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of Ff) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var Ff,
  If,
  Lf,
  Rf,
  zf = t(() => {
    ((Ff = []),
      (If = {}),
      (Lf = { bodyEnd: [`hGlTRXQ6p`], bodyStart: [], headEnd: [], headStart: [] }),
      (Rf = {
        exports: {
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Bf,
  Vf,
  Hf,
  Uf = t(() => {
    (h(),
      _(),
      M(),
      (Bf = () => (
        o(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        d(`div`, {
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
          children: m(`main`, {
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
              d(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: d(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              d(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              d(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              d(`a`, {
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
      (Vf = be(Bf, [
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
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
      src: url(../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
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
      src: url(../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2);
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
      (Hf = {
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
  Wf = e({ __FramerMetadata__: () => Hf, default: () => Vf }),
  Gf = t(() => {
    (Uf(), Uf());
  });
function Kf() {
  let e = !1;
  try {
    e = b.self !== b.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (b.location.ancestorOrigins && b.location.ancestorOrigins.length > 0) {
    let e = b.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === Yf || t.endsWith(`.${Yf}`)), n);
}
function qf(e) {
  return l((t, n) => {
    let r = u(Xf, Zf, Qf),
      i = P.current() === P.canvas;
    return r && !i
      ? null
      : d(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              b.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(b?.location?.origin)}`
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function Jf(e) {
  return l((t, n) =>
    m(g, {
      children: [
        d(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        d(e, { ...t, ref: n }),
      ],
    })
  );
}
var Yf,
  Xf,
  Zf,
  Qf,
  $f = t(() => {
    (a(),
      h(),
      _(),
      M(),
      (Yf = `framer.com`),
      (Xf = () => () => {}),
      (Zf = () => Kf()),
      (Qf = () => !1));
  }),
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp = t(() => {
    (h(),
      M(),
      _(),
      (ep = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (tp = `alpha, var(--framer-icon-mask-mode, add)`),
      (np = `no-repeat`),
      (rp = `center`),
      (ip = `auto`),
      (ap = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(x.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (op = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (sp = be(
        l(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = op(e);
          return d(ap, {
            ...c,
            className: E(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${ep}; -webkit-mask-position: ${rp}; -webkit-mask-repeat: ${np}; -webkit-mask-size: ${ip}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${ep}; mask-mode: ${tp}; mask-position: ${rp}; mask-repeat: ${np}; mask-size: ${ip}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (sp.displayName = `Text`),
      w(sp, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: z.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: z.Color },
      }));
  }),
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p = t(() => {
    (h(),
      M(),
      _(),
      (lp = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (up = `alpha, var(--framer-icon-mask-mode, add)`),
      (dp = `no-repeat`),
      (fp = `center`),
      (pp = `auto`),
      (mp = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(x.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (hp = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (gp = be(
        l(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = hp(e);
          return d(mp, {
            ...c,
            className: E(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${lp}; -webkit-mask-position: ${fp}; -webkit-mask-repeat: ${dp}; -webkit-mask-size: ${pp}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${lp}; mask-mode: ${up}; mask-position: ${fp}; mask-repeat: ${dp}; mask-size: ${pp}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (gp.displayName = `Framer`),
      w(gp, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: z.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: z.Color },
      }));
  }),
  vp = e({ __FramerMetadata__: () => Fp, default: () => Pp }),
  yp,
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
  Ip = t(() => {
    (h(),
      M(),
      C(),
      _(),
      $f(),
      cp(),
      _p(),
      (yp = A(gp)),
      (bp = A(sp)),
      (xp = ae(sp, { nodeId: `pBR1Ew0r8`, override: Jf, scopeId: `PX9hIOIVM` })),
      (Sp = me(ce(ae(x.a, { nodeId: `HK2sXlagE`, override: qf, scopeId: `PX9hIOIVM` })))),
      (Cp = `framer-6jWyo`),
      (wp = { HK2sXlagE: `framer-v-n0ccwk` }),
      (Tp = {
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
      (Ep = {
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
      (Dp = { duration: 0, type: `tween` }),
      (Op = (e, t) => `translate(-50%, -50%) ${t}`),
      (kp = (e, t) => `translateX(-50%) ${t}`),
      (Ap = ({ value: e, children: t }) => {
        let r = n(S),
          i = e ?? r.transition,
          a = f(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (jp = x.create(c)),
      (Mp = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Np = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pp = be(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = y(),
            { activeLocale: a, setLocale: o } = he();
          te();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = Mp(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: b,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = ue({ defaultVariant: `HK2sXlagE`, ref: r, variant: f, variantClassNames: wp }),
            D = Np(e, T),
            O = E(Cp);
          return d(ee, {
            id: u ?? i,
            children: d(jp, {
              animate: T,
              initial: !1,
              children: d(Ap, {
                value: Dp,
                children: d(se, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: m(Sp, {
                    ...p,
                    ...v,
                    __framer__presenceAnimate: Tp,
                    __framer__presenceInitial: Ep,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${E(O, `framer-n0ccwk`, l, g)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: D,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: r,
                    style: { ...c },
                    children: [
                      d(x.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: D,
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
                      m(x.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: D,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: Op,
                        children: [
                          d(x.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: D,
                            layoutId: `roMJYXHnO`,
                            children: d(gp, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: D,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: kp,
                            }),
                          }),
                          d(xp, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: D,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      d(x.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: D,
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
                      d(x.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: D,
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
      (Pp.displayName = `Badge`),
      (Pp.defaultProps = { height: 38, width: 140 }),
      j(Pp, [{ explicitInter: !0, fonts: [] }, ...yp, ...bp], { supportsExplicitInterCodegen: !0 }),
      (Fp = {
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
  _l as _,
  Rf as a,
  To as b,
  Lf as c,
  Nf as d,
  hf as f,
  Qd as g,
  Zd as h,
  Gf as i,
  jf as l,
  ef as m,
  Ip as n,
  Pf as o,
  $d as p,
  Wf as r,
  zf as s,
  vp as t,
  Mf as u,
  vl as v,
  wo as y,
};
//# sourceMappingURL=shared-lib.DYR62Kmz.mjs.map
