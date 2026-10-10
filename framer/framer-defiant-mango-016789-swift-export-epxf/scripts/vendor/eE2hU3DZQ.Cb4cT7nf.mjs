import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  I as r,
  L as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  V as u,
  c as d,
  j as f,
  l as p,
  m,
  s as h,
  u as g,
  x as _,
  y as ee,
  z as te,
} from "./react.D0omlcQg.mjs";
import {
  J as v,
  M as y,
  X as ne,
  a as re,
  r as b,
  t as ie,
  tt as x,
  x as S,
} from "./motion.Bi2Azsus.mjs";
import {
  B as C,
  C as w,
  E as ae,
  Et as T,
  It as oe,
  K as se,
  L as ce,
  Lt as E,
  M as D,
  Mt as O,
  N as le,
  O as k,
  P as ue,
  Pt as de,
  Tt as fe,
  _t as pe,
  et as me,
  i as A,
  n as j,
  o as M,
  st as N,
} from "./framer.zRtTBSC3.mjs";
import { a as he, i as ge, t as _e } from "./default-utils.js__0.45.D9iFh5Pc.mjs";
import { i as ve, t as P } from "./wWC8EGMFo.DzFEZFNO.mjs";
import { n as ye, t as F } from "./URl4ptbYA.BL9HGZoY.mjs";
function be(e, t) {
  return L(e) ? e[Ee(0, e.length, t)] : e;
}
function xe(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = ke(0, t, r);
    e.push(De(n, 1, i));
  }
}
function Se(e) {
  let t = [0];
  return (xe(t, e - 1), t);
}
function Ce(e, t = Se(e.length), n = Oe) {
  let r = e.length,
    i = r - t.length;
  return (
    i > 0 && xe(t, i),
    (i) => {
      let a = 0;
      for (; a < r - 2 && !(i < t[a + 1]); a++);
      let o = Te(0, 1, ke(t[a], t[a + 1], i));
      return ((o = be(n, a)(o)), De(e[a], e[a + 1], o));
    }
  );
}
function we(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var Te,
  I,
  L,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  R,
  z = e(() => {
    ((Te = (e, t, n) => Math.min(Math.max(n, e), t)),
      (I = (e) => typeof e == `number`),
      (L = (e) => Array.isArray(e) && !I(e[0])),
      (Ee = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (De = (e, t, n) => -n * e + n * t + e),
      (Oe = (e) => e),
      (ke = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e))),
      (Ae = (e) => typeof e == `function`),
      (R = (e) => typeof e == `string`));
  }),
  je = e(() => {
    z();
  }),
  Me = e(() => {
    je();
  });
function B(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var V = e(() => {}),
  H,
  Ne = e(() => {
    ((H = {}),
      Object.defineProperty(H, "__esModule", { value: !0 }),
      (H.warning = function () {}),
      (H.invariant = function () {}),
      H.__esModule,
      H.warning,
      H.invariant);
  }),
  Pe = e(() => {
    z();
  });
function Fe(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Ie(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Fe(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              Ae(n) ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : ut[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Le(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Re({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = dt.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Le(e, n);
        },
      });
    });
}
function U(e) {
  e.forEach(Re);
}
function W() {
  typeof ResizeObserver < `u` && (ft = new ResizeObserver(U));
}
function ze(e, t) {
  ft || W();
  let n = Fe(e);
  return (
    n.forEach((e) => {
      let n = dt.get(e);
      (n || ((n = new Set()), dt.set(e, n)), n.add(t), ft?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = dt.get(e);
        (n?.delete(t), (n != null && n.size) || ft == null || ft.unobserve(e));
      });
    }
  );
}
function G() {
  ((pt = () => {
    let e = { width: u.innerWidth, height: u.innerHeight },
      t = { target: u, size: e, contentSize: e };
    q.forEach((e) => e(t));
  }),
    u.addEventListener(`resize`, pt));
}
function K(e) {
  return (
    q.add(e),
    pt || G(),
    () => {
      (q.delete(e), !q.size && pt && (pt = void 0));
    }
  );
}
function Be(e, t) {
  return Ae(e) ? K(e) : ze(e, t);
}
function Ve(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = _t[t],
    s = i.current,
    c = n.time;
  ((i.current = e[`scroll` + o]),
    (i.scrollLength = e[`scroll` + a] - e[`client` + a]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = ke(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > mt ? 0 : we(i.current - s, l);
}
function He(e, t, n) {
  (Ve(e, `x`, t, n), Ve(e, `y`, t, n), (t.time = n));
}
function Ue(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r instanceof SVGGraphicsElement && `getBBox` in r) {
      let { top: e, left: t } = r.getBBox();
      for (n.x += t, n.y += e; r && r.tagName !== `svg`;) r = r.parentNode;
    }
  return n;
}
function We(e, t, n = 0) {
  let r = 0;
  if ((yt[e] !== void 0 && (e = yt[e]), R(e))) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (I(e) && (r = t * e), n + r);
}
function Ge(e, t, n, r) {
  let i = Array.isArray(e) ? e : bt,
    a = 0,
    o = 0;
  return (
    I(e)
      ? (i = [e, e])
      : R(e) && ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, yt[e] ? e : `0`])),
    (a = We(i[0], n, r)),
    (o = We(i[1], t)),
    a - o
  );
}
function Ke(e, t, n) {
  let { offset: r = vt.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? xt : Ue(i, e),
    c =
      i === e
        ? { width: e.scrollWidth, height: e.scrollHeight }
        : { width: i.clientWidth, height: i.clientHeight },
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = Ge(r[e], l[o], c[o], s[a]);
    (u || n === t[a].interpolatorOffsets[e] || (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = Ce(Se(d), t[a].offset)), (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = t[a].interpolate(t[a].current)));
}
function qe(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r != e;)
      ((n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function Je(e, t, n, r = {}) {
  let i = r.axis || `y`;
  return {
    measure: () => qe(e, r.target, n),
    update: (t) => {
      (He(e, n, t), (r.offset || r.target) && Ke(e, n, r));
    },
    notify: Ae(t) ? () => t(n) : Ye(t, n[i]),
  };
}
function Ye(e, t) {
  return (
    e.pause(),
    e.forEachNative((e, { easing: t }) => {
      var n, r;
      if (e.updateDuration) (t || (e.easing = Oe), e.updateDuration(1));
      else {
        let i = { duration: 1e3 };
        (t || (i.easing = `linear`), (r = (n = e.effect)?.updateTiming) == null || r.call(n, i));
      }
    }),
    () => {
      e.currentTime = t.progress;
    }
  );
}
function Xe(e, t = {}) {
  var { container: n = document.documentElement } = t,
    r = B(t, [`container`]);
  let i = Ct.get(n);
  i || ((i = new Set()), Ct.set(n, i));
  let a = Je(n, e, gt(), r);
  if ((i.add(a), !J.has(n))) {
    let e = () => {
      let e = performance.now();
      for (let e of i) e.measure();
      for (let t of i) t.update(e);
      for (let e of i) e.notify();
    };
    J.set(n, e);
    let t = wt(n);
    (u.addEventListener(`resize`, e, { passive: !0 }),
      n !== document.documentElement && St.set(n, Be(n, e)),
      t.addEventListener(`scroll`, e, { passive: !0 }));
  }
  let o = J.get(n),
    s = requestAnimationFrame(o);
  return () => {
    var t;
    (typeof e != `function` && e.stop(), cancelAnimationFrame(s));
    let r = Ct.get(n);
    if (!r || (r.delete(a), r.size)) return;
    let i = J.get(n);
    (J.delete(n),
      i &&
        (wt(n).removeEventListener(`scroll`, i),
        (t = St.get(n)) == null || t(),
        u.removeEventListener(`resize`, i)));
  };
}
function Ze(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function Qe(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var $e,
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
  q,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  J,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot = e(() => {
    (te(),
      z(),
      Me(),
      V(),
      Ne(),
      Pe(),
      ($e = [``, `X`, `Y`, `Z`]),
      (et = [`translate`, `scale`, `rotate`, `skew`]),
      (tt = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (nt = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: tt,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Oe },
        skew: tt,
      }),
      (rt = new Map()),
      (it = (e) => `--motion-${e}`),
      (at = [`x`, `y`, `z`]),
      et.forEach((e) => {
        $e.forEach((t) => {
          (at.push(e + t), rt.set(it(e + t), nt[e]));
        });
      }),
      new Set(at),
      (ot = (e, t) => document.createElement(`div`).animate(e, t)),
      (st = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            ot({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!ot({ opacity: [0, 1] }, { duration: 0.001 }).finished,
        linearEasing: () => {
          try {
            ot({ opacity: 0 }, { easing: `linear(0, 1)` });
          } catch {
            return !1;
          }
          return !0;
        },
      }),
      (ct = {}),
      (lt = {}));
    for (let e in st) lt[e] = () => (ct[e] === void 0 && (ct[e] = st[e]()), ct[e]);
    ((ut = { any: 0, all: 1 }),
      (dt = new WeakMap()),
      (q = new Set()),
      (mt = 50),
      (ht = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (gt = () => ({ time: 0, x: ht(), y: ht() })),
      (_t = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }),
      (vt = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (yt = { start: 0, center: 0.5, end: 1 }),
      (bt = [0, 0]),
      (xt = { x: 0, y: 0 }),
      (J = new WeakMap()),
      (St = new WeakMap()),
      (Ct = new WeakMap()),
      (wt = (e) => (e === document.documentElement ? u : e)),
      (Tt = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Ie(
            e,
            (r) => {
              if ((t(), Qe(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), Qe(e, `viewleave`, t));
                };
            },
            B(r, [`once`])
          );
        },
      }),
      (Et = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Ze(e, t, r));
      }),
      (Dt = {
        inView: Tt,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Et(e, `hoverstart`, t),
              i = Et(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), Ze(e, `pressend`, t), u.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), Ze(e, `pressstart`, n), u.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), u.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Dt)]);
  });
function kt([e, t]) {
  return e + (100 - e) * (t / 100) * 0.5;
}
function At(e, t, { edgeOpacity: n, moreItems: r, buttonRef: i }, a) {
  r.current && e === t
    ? ((r.current = !1), S(n, 1, a), i.current?.setAttribute(`disabled`, ``))
    : !r.current &&
      e !== t &&
      ((r.current = !0), S(n, 0, a), i.current?.removeAttribute(`disabled`));
}
function jt(e, t) {
  let n = l(e),
    r = v(+!n.current),
    i = x(r, [0, 1], [t || 0, 1]),
    a = x(r, (e) => 1 - e),
    o = l(null),
    s = x(a, (e) => (e > 0.2 ? `auto` : `none`)),
    c = x(s, (e) => (e === `auto` ? `pointer` : `default`));
  return {
    moreItems: n,
    fadeOpacity: i,
    edgeOpacity: r,
    buttonStyle: { ...Kt, opacity: a, pointerEvents: s, cursor: c },
    buttonRef: o,
  };
}
function Mt({ element: e }) {
  e.setAttribute(`aria-hidden`, !1);
}
function Nt(e, t, n, r, i, a, o, s) {
  _(() => {
    if (!e.current) return;
    let c = Xe(
        (e) => {
          ((r.current = e[t]),
            e[t].current * n === a.current && (a.current = void 0),
            i(e[t].current),
            o());
        },
        { container: e.current, axis: t }
      ),
      l = Be(e.current, () => {
        (s(), o());
      });
    return () => {
      (c(), l());
    };
  }, [o, s]);
}
function Pt({
  slots: e,
  gap: t,
  axis: n,
  align: i,
  sizingObject: a,
  fadeObject: s,
  arrowObject: u,
  snapObject: d,
  progressObject: p,
  ariaLabel: m,
  borderRadius: te,
  effectsObject: re,
  ...b
}) {
  let ie = e?.filter(Boolean),
    S = o.count(ie),
    C = ae.current() === ae.canvas,
    w = Rt(),
    T = n && w === `rtl` ? -1 : 1,
    oe = he(b),
    se = n ? `x` : `y`,
    { fadeContent: ce, fadeWidth: E, fadeInset: D, fadeTransition: O, fadeAlpha: le } = s,
    { snap: k, snapEdge: ue, fluid: de } = d,
    {
      widthType: fe,
      widthInset: pe,
      widthColumns: me,
      heightType: A,
      heightInset: j,
      heightRows: M,
    } = a,
    {
      showScrollbar: N,
      showProgressDots: ge,
      dotSize: _e,
      dotsInset: ve,
      dotsRadius: P,
      dotsPadding: ye,
      dotsGap: F,
      dotsFill: be,
      dotsBackground: xe,
      dotsActiveOpacity: Se,
      dotsOpacity: Ce,
      dotsBlur: we,
    } = p,
    {
      showMouseControls: I,
      arrowSize: L,
      arrowRadius: Ee,
      arrowFill: De,
      leftArrow: Oe,
      rightArrow: ke,
      arrowPadding: Ae,
    } = u,
    R = l(void 0),
    z = l(void 0),
    je = v(0),
    Me = (e) => {
      je.set(z.current === void 0 ? e : z.current);
    },
    B = jt(w === `rtl`, le),
    V = jt(w !== `rtl`, le),
    H = v(D * 0.5),
    Ne = x(H, (e) => 100 - e),
    Pe = v(E),
    Fe = x([H, Pe], kt),
    Ie = x(Fe, (e) => 100 - e),
    Le = v(n ? `right` : `bottom`),
    Re = x(
      [Le, B.fadeOpacity, H, Fe, V.fadeOpacity, Ne, Ie],
      (e) =>
        `linear-gradient(to ${e[0]}, rgb(0, 0, 0, ${e[1]}) ${e[2]}%, rgb(0, 0, 0, 1) ${e[3]}%, rgba(0, 0, 0, 1) ${e[6]}%, rgb(0, 0, 0, ${e[4]}) ${e[5]}%)`
    ),
    U = l(null),
    [W, ze] = ee(C ? 4 : 1),
    G = { scrollSnapAlign: ue, flexShrink: 0 },
    K = {};
  (i === `stretch` &&
    (n ? ((K.height = `100%`), (G.height = `auto`)) : ((K.width = `100%`), (G.width = `auto`))),
    de || (G.scrollSnapStop = `always`),
    fe === `stretch`
      ? ((G.width = `calc(100% - ${pe || 0}px)`), (K.width = `100%`))
      : fe === `columns` &&
        ((G.width = `calc(${100 / me}% - ${t}px + ${t / me}px)`), (K.width = `100%`)),
    A === `stretch`
      ? ((G.height = `calc(100% - ${j || 0}px)`), (K.height = `100%`))
      : A === `rows` &&
        ((G.height = `calc(${100 / M}% - ${t}px + ${t / M}px)`), (K.height = `100%`)));
  let Be = C ? `hidden` : `auto`,
    Ve = { ...Wt, padding: oe },
    He = {
      ...Gt,
      gap: t,
      alignItems: i,
      flexDirection: n ? `row` : `column`,
      overflowX: n ? Be : `hidden`,
      overflowY: n ? `hidden` : Be,
      scrollSnapType: k ? `${se} mandatory` : void 0,
      WebkitOverflowScrolling: `touch`,
      WebkitMaskImage: ce ? Re : void 0,
      maskImage: ce ? Re : void 0,
      borderRadius: te,
    },
    Ue = { "aria-roledescription": `carousel` };
  m && (Ue[`aria-title`] = m);
  let We = {};
  if (
    (i === `stretch` && ((We[`aria-role`] = `group`), (We[`aria-roledescription`] = `slide`)), !C)
  ) {
    let e = l([]);
    Nt(
      U,
      se,
      T,
      R,
      Me,
      z,
      f(() => {
        if (!R.current) return;
        let { targetLength: t, containerLength: n, scrollLength: r } = R.current,
          i = je.get();
        if (!t && !n) return;
        if (t > n) {
          (At(i * T, 0, B, O), At(i * T, r, V, O));
          for (let t = 0; t < e.current.length; t++) {
            let { element: r, start: a, end: o } = e.current[t],
              s = o < i || a > i + n;
            (r.setAttribute(`aria-hidden`, s),
              s
                ? r.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  })
                : r.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  }));
          }
        } else (At(0, 0, B, O), At(1, 1, V, O), e.current.forEach(Mt));
        let a = Math.ceil(t / n);
        isNaN(a) || (a / S > 0.65 && (a = S), a !== W && ze(a));
      }, [W]),
      f(() => {
        U.current &&
          (e.current = Array.from(U.current.children).map((e) =>
            n
              ? { element: e, start: e.offsetLeft, end: e.offsetLeft + e.offsetWidth }
              : { element: e, start: e.offsetTop, end: e.offsetTop + e.offsetHeight }
          ));
      }, [])
    );
  }
  C &&
    (_(() => {
      Pe.set(E);
    }, [E]),
    _(() => {
      H.set(D * 0.5);
    }, [D]),
    _(() => {
      Le.set(n ? `right` : `bottom`);
    }, [n]));
  let Ge = ne(),
    Ke = (e) => {
      z.current = e;
      let t = n ? { left: e } : { top: e };
      U.current.scrollTo({ ...t, behavior: Ge ? `auto` : `smooth` });
    },
    qe = (e, t = 0) => {
      if (!R.current) return;
      let { scrollLength: n } = R.current,
        r = n / (W - 1);
      Ke((e * r + t * r) * T);
    },
    Je = (e) => () => {
      if (!R.current) return;
      let { containerLength: t, scrollLength: n } = R.current,
        r = je.get() * T,
        i = n / W,
        a = Te(0, W - 1, Math.floor(r / i)),
        o = 0;
      (k && (ue === `start` || ue === `end`) && e >= 1 && (o = 0.4), qe(a + e, o));
    };
  if (S === 0) return h(It, {});
  let Ye = [],
    Xe = {};
  if (W > 1 && ge && !N) {
    for (let e = 0; e < W; e++) {
      let t = (C && !e) || !1;
      Ye.push(
        h(Ft, {
          dotStyle: { ...Yt, width: _e, height: _e, backgroundColor: be },
          buttonStyle: Kt,
          isSelected: t,
          selectedOpacity: Se,
          opacity: Ce,
          onClick: () => r(() => qe(e)),
          currentScroll: je,
          scrollInfo: R,
          total: W,
          index: e,
          gap: F,
          padding: ye,
          axis: n,
          directionModifier: T,
        })
      );
    }
    we && (Xe.backdropFilter = Xe.WebkitBackdropFilter = `blur(${we}px)`);
  }
  let Ze = Oe || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Qe = ke || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return g(`section`, {
    style: Ve,
    ...Ue,
    children: [
      h(y.ul, {
        ref: U,
        style: He,
        className: `framer--carousel`,
        "data-show-scrollbar": N,
        "aria-atomic": `false`,
        "aria-live": `polite`,
        onWheel: () => (z.current = void 0),
        children: o.map(ie, (e, t) =>
          h(zt, {
            inherit: `id`,
            children: h(`li`, {
              style: G,
              ...We,
              "aria-label": `${t + 1} of ${S}`,
              children: c(e, { ...e.props, style: { ...e.props?.style, ...K } }),
            }),
          })
        ),
      }),
      g(`fieldset`, {
        style: { ...qt, padding: Ae, display: `flex`, flexDirection: n ? `row` : `column` },
        "aria-label": `Carousel pagination controls`,
        className: `framer--carousel-controls`,
        "data-show-mouse-controls": I,
        children: [
          h(y.button, {
            ref: B.buttonRef,
            type: `button`,
            style: {
              ...B.buttonStyle,
              backgroundColor: De,
              width: L,
              height: L,
              borderRadius: Ee,
              rotate: n ? 0 : 90,
              display: I ? `block` : `none`,
            },
            onClick: Je(-1),
            "aria-label": `Previous`,
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: h(`img`, {
              decoding: `async`,
              alt: ``,
              width: L,
              height: L,
              src: w === `rtl` && n ? Qe : Ze,
            }),
          }),
          h(y.button, {
            ref: V.buttonRef,
            type: `button`,
            style: {
              ...V.buttonStyle,
              backgroundColor: De,
              width: L,
              height: L,
              borderRadius: Ee,
              rotate: n ? 0 : 90,
              display: I ? `block` : `none`,
            },
            onClick: Je(1),
            "aria-label": `Next`,
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: h(`img`, {
              decoding: `async`,
              alt: ``,
              width: L,
              height: L,
              src: w === `rtl` && n ? Ze : Qe,
            }),
          }),
          Ye.length > 1
            ? h(`div`, {
                style: {
                  ...Jt,
                  left: n ? `50%` : ve,
                  top: n ? `unset` : `50%`,
                  transform: n ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: n ? `row` : `column`,
                  bottom: n ? ve : `unset`,
                  borderRadius: P,
                  backgroundColor: xe,
                  ...Xe,
                },
                children: Ye,
              })
            : null,
        ],
      }),
      h(Lt, {}),
    ],
  });
}
function Ft({
  currentScroll: e,
  scrollInfo: t,
  isSelected: n,
  selectedOpacity: r,
  opacity: i,
  total: a,
  index: o,
  dotStyle: s,
  buttonStyle: c,
  gap: l,
  padding: u,
  axis: d,
  directionModifier: f,
  ...p
}) {
  let m = x(e, (e) => {
      if (!t.current?.scrollLength) return o === 0 ? r : i;
      let n = e * f,
        s = t.current?.scrollLength / a,
        c = s * o,
        l = c + s;
      return n >= c && (o < a - 1 ? n < l : o === a - 1) ? r : i;
    }),
    g = l / 2,
    _ = !d && o > 0 ? g : u,
    ee = !d && o !== a - 1 ? g : u,
    te = d && o !== a - 1 ? g : u,
    v = d && o > 0 ? g : u;
  return h(`button`, {
    "aria-label": `Scroll to page ${o + 1}`,
    type: `button`,
    ...p,
    style: { ...c, padding: `${_}px ${te}px ${ee}px ${v}px` },
    children: h(y.div, { style: { ...s, opacity: m } }),
  });
}
function It() {
  return g(`section`, {
    style: Bt,
    children: [
      h(`div`, { style: Vt, children: `✨` }),
      h(`p`, { style: Ht, children: `Connect to Content` }),
      h(`p`, { style: Ut, children: `Add layers or components to swipe between.` }),
    ],
  });
}
function Lt() {
  return h(`div`, {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
function Rt() {
  let [e, t] = ee(`ltr`);
  return (
    _(() => {
      u?.document?.documentElement?.dir === `rtl` && t(`rtl`);
    }, []),
    e
  );
}
function zt({ children: e, ...t }) {
  return h(b, { id: n(), ...t, children: e });
}
var Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt = e(() => {
    (te(),
      d(),
      t(),
      me(),
      Ot(),
      z(),
      ie(),
      _e(),
      (Pt.defaultProps = {
        gap: 10,
        padding: 10,
        progressObject: { showScrollbar: !1, showProgressDots: !1 },
        sizingObject: {
          widthType: `auto`,
          widthOffset: 0,
          widthColumns: 2,
          heightType: `auto`,
          heightOffset: 0,
          heightRows: 2,
        },
        borderRadius: 0,
      }),
      ue(Pt, {
        slots: { type: M.Array, title: `Children`, control: { type: M.ComponentInstance } },
        axis: {
          type: M.Enum,
          title: `Direction`,
          options: [!0, !1],
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          displaySegmentedControl: !0,
        },
        align: {
          type: M.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            axis: {
              true: [`align-top`, `align-middle`, `align-bottom`],
              false: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: M.Number, title: `Gap` },
        ...ge,
        sizingObject: {
          type: M.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: M.Enum,
              title: `Width`,
              options: [`auto`, `stretch`, `columns`],
              optionTitles: [`Auto`, `Stretch`, `Columns`],
              defaultValue: `auto`,
            },
            widthInset: {
              type: M.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.widthType !== `stretch`,
            },
            widthColumns: {
              type: M.Number,
              title: `Columns`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.widthType !== `columns`,
            },
            heightType: {
              type: M.Enum,
              title: `Height`,
              options: [`auto`, `stretch`, `rows`],
              optionTitles: [`Auto`, `Stretch`, `Rows`],
              defaultValue: `auto`,
            },
            heightInset: {
              type: M.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.heightType !== `stretch`,
            },
            heightRows: {
              type: M.Number,
              title: `Rows`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.heightType !== `rows`,
            },
          },
        },
        snapObject: {
          type: M.Object,
          title: `Snapping`,
          controls: {
            snap: { type: M.Boolean, title: `Enable` },
            snapEdge: {
              type: M.Enum,
              title: `Edge`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              defaultValue: `center`,
              hidden: (e) => !e.snap,
            },
            fluid: { type: M.Boolean, title: `Fluid`, defaultValue: !1, hidden: (e) => !e.snap },
          },
        },
        fadeObject: {
          type: M.Object,
          title: `Fading`,
          controls: {
            fadeContent: { type: M.Boolean, title: `Enable`, defaultValue: !1 },
            fadeWidth: {
              type: M.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeInset: {
              type: M.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeAlpha: {
              type: M.Number,
              title: `Opacity`,
              hidden: (e) => !e.fadeContent,
              min: 0,
              max: 1,
              step: 0.05,
              defaultValue: 0,
            },
            fadeTransition: {
              type: M.Transition,
              title: `Transition`,
              hidden: (e) => !e.fadeContent,
            },
          },
        },
        progressObject: {
          type: M.Object,
          title: `Progress`,
          controls: {
            showScrollbar: { type: M.Boolean, title: `Scroll Bar`, defaultValue: !1 },
            showProgressDots: {
              type: M.Boolean,
              title: `Dots`,
              defaultValue: !1,
              hidden: (e) => e.showScrollbar,
            },
            dotSize: {
              type: M.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: M.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: M.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: M.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: M.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: M.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: M.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: M.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: M.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: M.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 4,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
        arrowObject: {
          type: M.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: { type: M.Boolean, title: `Show`, defaultValue: !0 },
            arrowFill: {
              type: M.Color,
              title: `Fill`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showMouseControls,
            },
            leftArrow: { type: M.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: M.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: M.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: M.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPadding: {
              type: M.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls,
            },
          },
        },
        ariaLabel: { type: M.String, title: `Aria Label`, placeholder: `Movies...` },
        borderRadius: {
          type: M.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
      }),
      (Bt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Vt = { fontSize: 32, marginBottom: 10 }),
      (Ht = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Ut = { margin: 0, opacity: 0.7, maxWidth: 130, lineHeight: 1.5, textAlign: `center` }),
      (Wt = {
        display: `flex`,
        overflow: `hidden`,
        width: `100%`,
        height: `100%`,
        position: `relative`,
      }),
      (Gt = {
        padding: 0,
        margin: 0,
        listStyle: `none`,
        position: `relative`,
        display: `flex`,
        flex: `1 1 100%`,
        width: `100%`,
        height: `100%`,
      }),
      (Kt = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (qt = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: `none`,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Jt = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (Yt = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  });
function Zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  Y,
  X,
  Z,
  sn,
  Q,
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
  $,
  bn = e(() => {
    (d(),
      me(),
      ie(),
      t(),
      Xt(),
      ve(),
      ye(),
      (Qt = se(F)),
      ($t = se(Pt)),
      (en = [`YddRK6JtV`, `t7J4OXMxa`]),
      (tn = `framer-J7SPL`),
      (nn = { t7J4OXMxa: `framer-v-1mgv8a8`, YddRK6JtV: `framer-v-ftvsm7` }),
      (rn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (an = (e, t) => typeof e == `number` && typeof t == `number` && e > t),
      (on = (e, t) => (e ? `x9sTdZGYw` : `VBg6hQjIT`)),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (X = (e, t = {}, n) => {
        let r = `en-US`,
          i = t.locale || n || r,
          {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: c,
            currency: l,
            currencyDisplay: u,
            unit: d,
            unitDisplay: f,
            minimumFractionDigits: p,
            maximumFractionDigits: m,
            minimumIntegerDigits: h,
          } = t,
          g = {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: c,
            currency: l,
            currencyDisplay: u,
            unit: d,
            unitDisplay: f,
            minimumFractionDigits: p,
            maximumFractionDigits: m,
            minimumIntegerDigits: h,
          },
          _ = Number(e);
        try {
          return _.toLocaleString(i, g);
        } catch {
          try {
            return _.toLocaleString(r, g);
          } catch {
            return _.toLocaleString();
          }
        }
      }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (sn = () => ({
        from: { alias: `tLinFvMiO`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `tLinFvMiO`, name: `ENbbVp8vc`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `tLinFvMiO`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `tLinFvMiO`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (Q = ({ query: e, pageSize: t, children: n }) => n(O(e))),
      (cn = () => ({
        from: { alias: `ga50Ov9PY`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `ga50Ov9PY`, name: `ENbbVp8vc`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `ga50Ov9PY`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `ga50Ov9PY`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (ln = () => ({
        from: { alias: `d64M_s95a`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `d64M_s95a`, name: `ENbbVp8vc`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `d64M_s95a`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `d64M_s95a`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (un = () => ({
        from: { alias: `oDvU2QsiU`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 3 },
        select: [
          { collection: `oDvU2QsiU`, name: `ENbbVp8vc`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `oDvU2QsiU`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `oDvU2QsiU`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (dn = () => ({
        from: { alias: `dZciX5yRx`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `dZciX5yRx`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `dZciX5yRx`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `dZciX5yRx`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `dZciX5yRx`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `dZciX5yRx`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `dZciX5yRx`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `dZciX5yRx`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `dZciX5yRx`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (fn = () => ({
        from: { alias: `YX5CBN3TN`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `YX5CBN3TN`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `YX5CBN3TN`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `YX5CBN3TN`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `YX5CBN3TN`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `YX5CBN3TN`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `YX5CBN3TN`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `YX5CBN3TN`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `YX5CBN3TN`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (pn = () => ({
        from: { alias: `nXOaWt_Ll`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `nXOaWt_Ll`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `nXOaWt_Ll`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `nXOaWt_Ll`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `nXOaWt_Ll`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `nXOaWt_Ll`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `nXOaWt_Ll`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `nXOaWt_Ll`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `nXOaWt_Ll`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (mn = () => ({
        from: { alias: `yCJSc6ZLg`, data: P, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 3 },
        select: [
          { collection: `yCJSc6ZLg`, name: `cxkHsOrjz`, type: `Identifier` },
          { collection: `yCJSc6ZLg`, name: `yp6exRXCn`, type: `Identifier` },
          { collection: `yCJSc6ZLg`, name: `X3CtE80s9`, type: `Identifier` },
          { collection: `yCJSc6ZLg`, name: `ULM6scxx_`, type: `Identifier` },
          { collection: `yCJSc6ZLg`, name: `L0XvF6Czl`, type: `Identifier` },
          { collection: `yCJSc6ZLg`, name: `wjbVR4laR`, type: `Identifier` },
          { collection: `yCJSc6ZLg`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `yCJSc6ZLg`, name: `NF5HioKUo`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (hn = ({ value: e, children: t }) => {
        let n = a(re),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(re.Provider, { value: i, children: t });
      }),
      (gn = { Large: `YddRK6JtV`, Small: `t7J4OXMxa` }),
      (_n = y.create(i)),
      (vn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: gn[r.variant] ?? r.variant ?? `YddRK6JtV`,
      })),
      (yn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = E(
        m(function (e, t) {
          let r = l(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = T();
          pe();
          let { style: c, className: u, layoutId: d, variant: f, ...m } = vn(e),
            {
              baseVariant: _,
              classNames: ee,
              clearLoadingGesture: te,
              gestureHandlers: v,
              gestureVariant: ne,
              isLoading: re,
              setGestureState: ie,
              setVariant: x,
              variants: S,
            } = oe({
              cycleOrder: en,
              defaultVariant: `YddRK6JtV`,
              ref: i,
              variant: f,
              variantClassNames: nn,
            }),
            C = yn(e, S),
            ae = ce(tn),
            se = () => _ !== `t7J4OXMxa`,
            E = fe();
          de();
          let O = () => _ === `t7J4OXMxa`;
          return h(b, {
            id: d ?? a,
            children: h(_n, {
              animate: S,
              initial: !1,
              children: h(hn, {
                value: rn,
                children: g(y.div, {
                  ...m,
                  ...v,
                  className: ce(ae, `framer-ftvsm7`, u, ee),
                  "data-framer-name": `Large`,
                  layoutDependency: C,
                  layoutId: `YddRK6JtV`,
                  ref: i,
                  style: { ...c },
                  ...Zt({ t7J4OXMxa: { "data-framer-name": `Small` } }, _, ne),
                  children: [
                    se() &&
                      h(A, {
                        children: h(D, {
                          className: `framer-aivfzb-container`,
                          "data-framer-name": `Carousel Large`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: C,
                          layoutId: `G14KKSbDh-container`,
                          name: `Carousel Large`,
                          nodeId: `G14KKSbDh`,
                          rendersWithMotion: !0,
                          scopeId: `eE2hU3DZQ`,
                          children: h(Pt, {
                            align: `center`,
                            ariaLabel: ``,
                            arrowObject: {
                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                              arrowPadding: 20,
                              arrowRadius: 40,
                              arrowSize: 40,
                              showMouseControls: !0,
                            },
                            axis: !0,
                            borderRadius: 0,
                            fadeObject: {
                              fadeAlpha: 0,
                              fadeContent: !0,
                              fadeInset: 0,
                              fadeTransition: {
                                bounce: 0,
                                delay: 0,
                                duration: 0.2,
                                type: `spring`,
                              },
                              fadeWidth: 35,
                            },
                            gap: 10,
                            height: `100%`,
                            id: `G14KKSbDh`,
                            layoutId: `G14KKSbDh`,
                            name: `Carousel Large`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressObject: {
                              dotsActiveOpacity: 1,
                              dotsBackground: `rgba(0, 0, 0, 0.2)`,
                              dotsBlur: 4,
                              dotsFill: `rgb(255, 255, 255)`,
                              dotsGap: 10,
                              dotsInset: 10,
                              dotSize: 10,
                              dotsOpacity: 0.5,
                              dotsPadding: 10,
                              dotsRadius: 50,
                              showProgressDots: !1,
                              showScrollbar: !1,
                            },
                            sizingObject: {
                              heightInset: 0,
                              heightRows: 2,
                              heightType: `auto`,
                              widthColumns: 2,
                              widthInset: 0,
                              widthType: `auto`,
                            },
                            slots: [
                              h(y.div, {
                                className: `framer-1f3rs5g`,
                                "data-framer-name": `1 Large`,
                                layoutDependency: C,
                                layoutId: `tLinFvMiO`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: sn(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              ENbbVp8vc: t,
                                              id: n,
                                              L0XvF6Czl: r,
                                              ULM6scxx_: i,
                                              wjbVR4laR: a,
                                              X3CtE80s9: s,
                                              yp6exRXCn: c,
                                            },
                                            l
                                          ) => (
                                            (t ??= 0),
                                            (s ??= ``),
                                            (i ??= ``),
                                            (r ??= 0),
                                            (a ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `tLinFvMiO-${n}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: a },
                                                  children: h(y.div, {
                                                    className: `framer-1ko5zxn`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `SiOPfrkSE`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: a },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `400px`,
                                                          children: h(D, {
                                                            className: `framer-1ayredx-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `sL8CeeUdc-container`,
                                                            nodeId: `sL8CeeUdc`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: s,
                                                              DpzGN4NEt: n[0],
                                                              height: `100%`,
                                                              id: `sL8CeeUdc`,
                                                              layoutId: `sL8CeeUdc`,
                                                              ogzYrzUEQ: i,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(c),
                                                              style: { width: `100%` },
                                                              variant: Z(on(an(t, 1), o)),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                r,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              h(y.div, {
                                className: `framer-1of9iae`,
                                "data-framer-name": `2 Large`,
                                layoutDependency: C,
                                layoutId: `ga50Ov9PY`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: cn(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              ENbbVp8vc: t,
                                              id: n,
                                              L0XvF6Czl: r,
                                              ULM6scxx_: i,
                                              wjbVR4laR: a,
                                              X3CtE80s9: s,
                                              yp6exRXCn: c,
                                            },
                                            l
                                          ) => (
                                            (t ??= 0),
                                            (s ??= ``),
                                            (i ??= ``),
                                            (r ??= 0),
                                            (a ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `ga50Ov9PY-${n}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: a },
                                                  children: h(y.div, {
                                                    className: `framer-1azkask`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `DfMoJBCQB`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: a },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `400px`,
                                                          children: h(D, {
                                                            className: `framer-5izuy3-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `AvABCMpmU-container`,
                                                            nodeId: `AvABCMpmU`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: s,
                                                              DpzGN4NEt: n[0],
                                                              height: `100%`,
                                                              id: `AvABCMpmU`,
                                                              layoutId: `AvABCMpmU`,
                                                              ogzYrzUEQ: i,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(c),
                                                              style: { width: `100%` },
                                                              variant: Z(on(an(t, 1), o)),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                r,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              h(y.div, {
                                className: `framer-o8diiu`,
                                "data-framer-name": `3 Large`,
                                layoutDependency: C,
                                layoutId: `d64M_s95a`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: ln(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              ENbbVp8vc: t,
                                              id: n,
                                              L0XvF6Czl: r,
                                              ULM6scxx_: i,
                                              wjbVR4laR: a,
                                              X3CtE80s9: s,
                                              yp6exRXCn: c,
                                            },
                                            l
                                          ) => (
                                            (t ??= 0),
                                            (s ??= ``),
                                            (i ??= ``),
                                            (r ??= 0),
                                            (a ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `d64M_s95a-${n}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: a },
                                                  children: h(y.div, {
                                                    className: `framer-1agiso4`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `tfIx4xfuG`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: a },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `400px`,
                                                          children: h(D, {
                                                            className: `framer-kmgxhj-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `ANoQIrHbJ-container`,
                                                            nodeId: `ANoQIrHbJ`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: s,
                                                              DpzGN4NEt: n[0],
                                                              height: `100%`,
                                                              id: `ANoQIrHbJ`,
                                                              layoutId: `ANoQIrHbJ`,
                                                              ogzYrzUEQ: i,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(c),
                                                              style: { width: `100%` },
                                                              variant: Z(on(an(t, 1), o)),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                r,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              h(y.div, {
                                className: `framer-1rq0h1p`,
                                "data-framer-name": `4 Large`,
                                layoutDependency: C,
                                layoutId: `oDvU2QsiU`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: un(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              ENbbVp8vc: t,
                                              id: n,
                                              L0XvF6Czl: r,
                                              ULM6scxx_: i,
                                              wjbVR4laR: a,
                                              X3CtE80s9: s,
                                              yp6exRXCn: c,
                                            },
                                            l
                                          ) => (
                                            (t ??= 0),
                                            (s ??= ``),
                                            (i ??= ``),
                                            (r ??= 0),
                                            (a ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `oDvU2QsiU-${n}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: a },
                                                  children: h(y.div, {
                                                    className: `framer-jj60nn`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `m7zv7hKB3`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: a },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `400px`,
                                                          children: h(D, {
                                                            className: `framer-hunl0o-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `ewWSnOL4D-container`,
                                                            nodeId: `ewWSnOL4D`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: s,
                                                              DpzGN4NEt: n[0],
                                                              height: `100%`,
                                                              id: `ewWSnOL4D`,
                                                              layoutId: `ewWSnOL4D`,
                                                              ogzYrzUEQ: i,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(c),
                                                              style: { width: `100%` },
                                                              variant: Z(on(an(t, 1), o)),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                r,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                            ],
                            snapObject: { fluid: !1, snap: !0, snapEdge: `center` },
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    O() &&
                      h(A, {
                        children: h(D, {
                          className: `framer-82o9ed-container`,
                          "data-framer-name": `Carousel Small`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: C,
                          layoutId: `mWGdpvSe2-container`,
                          name: `Carousel Small`,
                          nodeId: `mWGdpvSe2`,
                          rendersWithMotion: !0,
                          scopeId: `eE2hU3DZQ`,
                          children: h(Pt, {
                            align: `center`,
                            ariaLabel: ``,
                            arrowObject: {
                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                              arrowPadding: 20,
                              arrowRadius: 40,
                              arrowSize: 40,
                              showMouseControls: !0,
                            },
                            axis: !0,
                            borderRadius: 0,
                            fadeObject: {
                              fadeAlpha: 0,
                              fadeContent: !0,
                              fadeInset: 0,
                              fadeTransition: {
                                bounce: 0,
                                delay: 0,
                                duration: 0.2,
                                type: `spring`,
                              },
                              fadeWidth: 35,
                            },
                            gap: 10,
                            height: `100%`,
                            id: `mWGdpvSe2`,
                            layoutId: `mWGdpvSe2`,
                            name: `Carousel Small`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressObject: {
                              dotsActiveOpacity: 1,
                              dotsBackground: `rgba(0, 0, 0, 0.2)`,
                              dotsBlur: 4,
                              dotsFill: `rgb(255, 255, 255)`,
                              dotsGap: 10,
                              dotsInset: 10,
                              dotSize: 10,
                              dotsOpacity: 0.5,
                              dotsPadding: 10,
                              dotsRadius: 50,
                              showProgressDots: !1,
                              showScrollbar: !1,
                            },
                            sizingObject: {
                              heightInset: 0,
                              heightRows: 2,
                              heightType: `auto`,
                              widthColumns: 2,
                              widthInset: 0,
                              widthType: `auto`,
                            },
                            slots: [
                              h(y.div, {
                                className: `framer-1vt4ap5`,
                                "data-framer-name": `1 Small`,
                                layoutDependency: C,
                                layoutId: `dZciX5yRx`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: dn(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              id: t,
                                              L0XvF6Czl: n,
                                              ULM6scxx_: r,
                                              wjbVR4laR: i,
                                              X3CtE80s9: a,
                                              yp6exRXCn: o,
                                            },
                                            s
                                          ) => (
                                            (a ??= ``),
                                            (r ??= ``),
                                            (n ??= 0),
                                            (i ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `dZciX5yRx-${t}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: i },
                                                  children: h(y.div, {
                                                    className: `framer-qhw0ex`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `vlk9CCqfc`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: i },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `300px`,
                                                          children: h(D, {
                                                            className: `framer-1cwfw90-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `Kff61IFAc-container`,
                                                            nodeId: `Kff61IFAc`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: a,
                                                              DpzGN4NEt: t[0],
                                                              height: `100%`,
                                                              id: `Kff61IFAc`,
                                                              layoutId: `Kff61IFAc`,
                                                              ogzYrzUEQ: r,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(o),
                                                              style: { width: `100%` },
                                                              variant: Z(`VBg6hQjIT`),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                n,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              t
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              h(y.div, {
                                className: `framer-1joa0p0`,
                                "data-framer-name": `2 Small`,
                                layoutDependency: C,
                                layoutId: `YX5CBN3TN`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: fn(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              id: t,
                                              L0XvF6Czl: n,
                                              ULM6scxx_: r,
                                              wjbVR4laR: i,
                                              X3CtE80s9: a,
                                              yp6exRXCn: o,
                                            },
                                            s
                                          ) => (
                                            (a ??= ``),
                                            (r ??= ``),
                                            (n ??= 0),
                                            (i ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `YX5CBN3TN-${t}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: i },
                                                  children: h(y.div, {
                                                    className: `framer-2xw5ww`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `mD4qtmjL9`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: i },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `300px`,
                                                          children: h(D, {
                                                            className: `framer-56pedd-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `X4Bl54FDQ-container`,
                                                            nodeId: `X4Bl54FDQ`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: a,
                                                              DpzGN4NEt: t[0],
                                                              height: `100%`,
                                                              id: `X4Bl54FDQ`,
                                                              layoutId: `X4Bl54FDQ`,
                                                              ogzYrzUEQ: r,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(o),
                                                              style: { width: `100%` },
                                                              variant: Z(`VBg6hQjIT`),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                n,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              t
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              h(y.div, {
                                className: `framer-izf07i`,
                                "data-framer-name": `3 Small`,
                                layoutDependency: C,
                                layoutId: `nXOaWt_Ll`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: pn(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              id: t,
                                              L0XvF6Czl: n,
                                              ULM6scxx_: r,
                                              wjbVR4laR: i,
                                              X3CtE80s9: a,
                                              yp6exRXCn: o,
                                            },
                                            s
                                          ) => (
                                            (a ??= ``),
                                            (r ??= ``),
                                            (n ??= 0),
                                            (i ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `nXOaWt_Ll-${t}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: i },
                                                  children: h(y.div, {
                                                    className: `framer-bvtt00`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `v1WhuYSBl`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: i },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `300px`,
                                                          children: h(D, {
                                                            className: `framer-5wrghj-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `sfwK_OfKa-container`,
                                                            nodeId: `sfwK_OfKa`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: a,
                                                              DpzGN4NEt: t[0],
                                                              height: `100%`,
                                                              id: `sfwK_OfKa`,
                                                              layoutId: `sfwK_OfKa`,
                                                              ogzYrzUEQ: r,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(o),
                                                              style: { width: `100%` },
                                                              variant: Z(`VBg6hQjIT`),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                n,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              t
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              h(y.div, {
                                className: `framer-1sa0ijz`,
                                "data-framer-name": `4 Small`,
                                layoutDependency: C,
                                layoutId: `yCJSc6ZLg`,
                                children: h(j, {
                                  children: h(Q, {
                                    query: mn(),
                                    children: (e, t, n) =>
                                      h(p, {
                                        children: e?.map(
                                          (
                                            {
                                              cxkHsOrjz: e,
                                              id: t,
                                              L0XvF6Czl: n,
                                              ULM6scxx_: r,
                                              wjbVR4laR: i,
                                              X3CtE80s9: a,
                                              yp6exRXCn: o,
                                            },
                                            s
                                          ) => (
                                            (a ??= ``),
                                            (r ??= ``),
                                            (n ??= 0),
                                            (i ??= ``),
                                            h(
                                              b,
                                              {
                                                id: `yCJSc6ZLg-${t}`,
                                                children: h(w.Provider, {
                                                  value: { wjbVR4laR: i },
                                                  children: h(y.div, {
                                                    className: `framer-czmkqs`,
                                                    draggable: `false`,
                                                    layoutDependency: C,
                                                    layoutId: `iB5lFzP7y`,
                                                    children: h(k, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: i },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        h(A, {
                                                          height: 499,
                                                          width: `300px`,
                                                          children: h(D, {
                                                            className: `framer-125b02t-container`,
                                                            draggable: `false`,
                                                            inComponentSlot: !0,
                                                            layoutDependency: C,
                                                            layoutId: `XhjGKmsIB-container`,
                                                            nodeId: `XhjGKmsIB`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `eE2hU3DZQ`,
                                                            children: h(F, {
                                                              c1lLI8Tpf: a,
                                                              DpzGN4NEt: t[0],
                                                              height: `100%`,
                                                              id: `XhjGKmsIB`,
                                                              layoutId: `XhjGKmsIB`,
                                                              ogzYrzUEQ: r,
                                                              owbnoSkUH: Y(e),
                                                              Rqo_rbsqg: Y(o),
                                                              style: { width: `100%` },
                                                              variant: Z(`VBg6hQjIT`),
                                                              width: `100%`,
                                                              yrXIEPqWT: X(
                                                                n,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                E
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              t
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                            ],
                            snapObject: { fluid: !1, snap: !0, snapEdge: `center` },
                            style: { width: `100%` },
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
          `.framer-J7SPL.framer-sfkxu, .framer-J7SPL .framer-sfkxu { display: block; }`,
          `.framer-J7SPL.framer-ftvsm7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1072px; }`,
          `.framer-J7SPL .framer-aivfzb-container, .framer-J7SPL .framer-1ayredx-container, .framer-J7SPL .framer-5izuy3-container, .framer-J7SPL .framer-kmgxhj-container, .framer-J7SPL .framer-hunl0o-container, .framer-J7SPL .framer-82o9ed-container, .framer-J7SPL .framer-1cwfw90-container, .framer-J7SPL .framer-56pedd-container, .framer-J7SPL .framer-5wrghj-container, .framer-J7SPL .framer-125b02t-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-J7SPL .framer-1f3rs5g, .framer-J7SPL .framer-1of9iae, .framer-J7SPL .framer-o8diiu, .framer-J7SPL .framer-1rq0h1p { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 400px; }`,
          `.framer-J7SPL .framer-1ko5zxn, .framer-J7SPL .framer-1azkask, .framer-J7SPL .framer-1agiso4, .framer-J7SPL .framer-jj60nn, .framer-J7SPL .framer-qhw0ex, .framer-J7SPL .framer-2xw5ww, .framer-J7SPL .framer-bvtt00, .framer-J7SPL .framer-czmkqs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-J7SPL .framer-1vt4ap5, .framer-J7SPL .framer-1joa0p0, .framer-J7SPL .framer-izf07i, .framer-J7SPL .framer-1sa0ijz { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 300px; }`,
        ],
        `framer-J7SPL`
      )),
      ($.displayName = `Best Sellers Carousel`),
      ($.defaultProps = { height: 499, width: 1072 }),
      ue($, {
        variant: {
          options: [`YddRK6JtV`, `t7J4OXMxa`],
          optionTitles: [`Large`, `Small`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      le($, [{ explicitInter: !0, fonts: [] }, ...Qt, ...$t], { supportsExplicitInterCodegen: !0 }),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = N.get(sn(), n),
            i = N.get(cn(), n),
            a = N.get(ln(), n),
            o = N.get(un(), n),
            s = N.get(dn(), n),
            c = N.get(fn(), n),
            l = N.get(pn(), n),
            u = N.get(mn(), n);
          return Promise.allSettled([
            r.preload(),
            i.preload(),
            a.preload(),
            o.preload(),
            s.preload(),
            c.preload(),
            l.preload(),
            u.preload(),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await i.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await a.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await o.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await s.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await c.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await l.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
            (async () => {
              let e = (await u.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => C(F, {}, t)));
            })(),
          ]);
        },
      }));
  });
export { bn as n, $ as t };
//# sourceMappingURL=eE2hU3DZQ.Cb4cT7nf.mjs.map
