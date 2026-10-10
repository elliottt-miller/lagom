import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  D as r,
  E as i,
  H as a,
  I as o,
  L as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  V as p,
  a as m,
  c as h,
  j as g,
  k as _,
  l as v,
  m as y,
  o as b,
  s as x,
  u as S,
  w as C,
  x as w,
  y as T,
} from "./react.BtSUcPAM.mjs";
import {
  $ as E,
  E as D,
  N as ee,
  P as O,
  S as te,
  Y as k,
  ct as ne,
  i as A,
  j,
  n as M,
  o as N,
  q as P,
  st as F,
  t as I,
  tt as re,
  ut as ie,
} from "./motion.B_UOAosx.mjs";
import {
  A as L,
  At as R,
  Bt as ae,
  C as z,
  D as B,
  Dt as oe,
  E as se,
  Et as ce,
  Ft as le,
  G as ue,
  I as V,
  K as H,
  L as de,
  Lt as fe,
  M as U,
  Mt as pe,
  N as W,
  Nt as me,
  O as he,
  Ot as ge,
  Pt as _e,
  Q as G,
  R as K,
  Rt as ve,
  S as ye,
  St as be,
  T as xe,
  Tt as Se,
  Vt as Ce,
  W as q,
  a as we,
  at as J,
  bt as Te,
  ct as Ee,
  f as De,
  h as Oe,
  ht as ke,
  i as Y,
  j as Ae,
  jt as je,
  k as Me,
  kt as Ne,
  m as Pe,
  n as Fe,
  o as X,
  pt as Ie,
  q as Z,
  rt as Le,
  st as Re,
  v as ze,
  vt as Be,
  xt as Ve,
  yt as He,
} from "./framer.DuFjdl15.mjs";
import { M as Ue, N as We, P as Ge, j as Ke } from "./uMfPNtWsK.Ef5pNhkD.mjs";
import { i as qe, r as Je } from "./T6200DqYJ.DDATVUMg.mjs";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./MYFsM6f0k.DfnOeWKh.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./UOFERiKNL.BLQejQ4n.mjs";
import { i as rt, n as it, r as at, t as ot } from "./O7___hs0c.B0mkyocV.mjs";
import { n as st, t as ct } from "./xPaHsKAuL.BjgDwkPt.mjs";
import {
  a as lt,
  c as ut,
  d as dt,
  f as ft,
  i as pt,
  l as mt,
  n as ht,
  o as gt,
  r as _t,
  s as vt,
  t as yt,
  u as bt,
} from "./CMS_Slider.DMhH8qwC.mjs";
import { n as xt, t as Q } from "./S3WzxrIrx.C6dgk-ax.mjs";
import { n as St, t as Ct } from "./hGHQ5rEun.Dh_Aq6Qp.mjs";
import { n as wt, t as Tt } from "./chd7nI0f4.DgRtqnjV.mjs";
import { n as Et, t as Dt } from "./Xls5ElYro.A-ZUPcam.mjs";
import { a as Ot, r as kt } from "./dQjQF91jO.DYrHel4r.mjs";
import { i as At, n as jt, r as Mt, t as Nt } from "./ANhE2fRBl.BpK3OGOf.mjs";
import { i as Pt, n as Ft, r as It, t as Lt } from "./OrFaou4jp.DoaP9WJQ.mjs";
import { n as Rt, r as zt } from "./augiA20Il.XJJm0mtZ.mjs";
var Bt,
  Vt = e(() => {
    Bt = (e) => e;
  }),
  Ht = e(() => {
    Vt();
  }),
  Ut = e(() => {
    Ht();
  });
function Wt(e, t) {
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
var Gt = e(() => {}),
  Kt,
  qt = e(() => {
    ((Kt = {}),
      Object.defineProperty(Kt, "__esModule", { value: !0 }),
      (Kt.warning = function () {}),
      (Kt.invariant = function () {}),
      Kt.__esModule,
      Kt.warning,
      Kt.invariant);
  }),
  Jt = e(() => {
    Vt();
  });
function Yt(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Xt(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Yt(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : yn[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Zt(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Qt({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = bn.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Zt(e, n);
        },
      });
    });
}
function $t(e) {
  e.forEach(Qt);
}
function en() {
  typeof ResizeObserver < `u` && (xn = new ResizeObserver($t));
}
function tn(e, t) {
  xn || en();
  let n = Yt(e);
  return (
    n.forEach((e) => {
      let n = bn.get(e);
      (n || ((n = new Set()), bn.set(e, n)), n.add(t), xn?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = bn.get(e);
        (n?.delete(t), (n != null && n.size) || xn == null || xn.unobserve(e));
      });
    }
  );
}
function nn() {
  ((Cn = () => {
    let e = { width: a.innerWidth, height: a.innerHeight },
      t = { target: a, size: e, contentSize: e };
    Sn.forEach((e) => e(t));
  }),
    a.addEventListener(`resize`, Cn));
}
function rn(e) {
  return (
    Sn.add(e),
    Cn || nn(),
    () => {
      (Sn.delete(e), !Sn.size && Cn && (Cn = void 0));
    }
  );
}
function an(e, t) {
  return typeof e == `function` ? rn(e) : tn(e, t);
}
function on(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function sn(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var cn,
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
  Dn = e(() => {
    (t(),
      Vt(),
      Ut(),
      Gt(),
      qt(),
      Jt(),
      (cn = [``, `X`, `Y`, `Z`]),
      (ln = [`translate`, `scale`, `rotate`, `skew`]),
      (un = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (dn = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: un,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Bt },
        skew: un,
      }),
      (fn = new Map()),
      (pn = (e) => `--motion-${e}`),
      (mn = [`x`, `y`, `z`]),
      ln.forEach((e) => {
        cn.forEach((t) => {
          (mn.push(e + t), fn.set(pn(e + t), dn[e]));
        });
      }),
      new Set(mn),
      (hn = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (gn = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            hn({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!hn({ opacity: [0, 1] }).finished,
      }),
      (_n = {}),
      (vn = {}));
    for (let e in gn) vn[e] = () => (_n[e] === void 0 && (_n[e] = gn[e]()), _n[e]);
    ((yn = { any: 0, all: 1 }),
      (bn = new WeakMap()),
      (Sn = new Set()),
      (wn = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Xt(
            e,
            (r) => {
              if ((t(), sn(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), sn(e, `viewleave`, t));
                };
            },
            Wt(r, [`once`])
          );
        },
      }),
      (Tn = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), on(e, t, r));
      }),
      (En = {
        inView: wn,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Tn(e, `hoverstart`, t),
              i = Tn(e, `hoverend`, n);
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
                (n(), on(e, `pressend`, t), a.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), on(e, `pressstart`, n), a.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), a.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(En)]);
  });
function On() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function kn(e) {
  let t = n.useRef(On);
  return (
    n.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      jn() && On();
      let n = t.current;
      return n(...e);
    }
  );
}
var An,
  jn,
  Mn = e(() => {
    (r(),
      (An = n.createContext(!0)),
      (jn =
        `use` in n
          ? () => {
              try {
                return n.use(An);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function Nn(e) {
  let {
      slots: t = [],
      startFrom: n,
      direction: r,
      effectsOptions: i,
      autoPlayControl: s,
      dragControl: c,
      alignment: u,
      gap: d,
      padding: p,
      paddingPerSide: m,
      paddingTop: h,
      paddingRight: v,
      paddingBottom: y,
      paddingLeft: b,
      itemAmount: C,
      fadeOptions: ee,
      intervalControl: A,
      transitionControl: j,
      arrowOptions: M,
      borderRadius: N,
      progressOptions: P,
      style: F,
    } = e,
    {
      effectsOpacity: I,
      effectsScale: L,
      effectsRotate: R,
      effectsPerspective: ae,
      effectsHover: z,
      playOffscreen: B,
    } = i,
    { fadeContent: oe, overflow: se, fadeWidth: ce, fadeInset: le, fadeAlpha: ue } = ee,
    {
      showMouseControls: V,
      arrowSize: H,
      arrowRadius: de,
      arrowFill: fe,
      leftArrow: U,
      rightArrow: pe,
      arrowShouldSpace: W = !0,
      arrowShouldFadeIn: me = !1,
      arrowPosition: he,
      arrowPadding: ge,
      arrowGap: _e,
      arrowPaddingTop: G,
      arrowPaddingRight: K,
      arrowPaddingBottom: ve,
      arrowPaddingLeft: ye,
    } = M,
    {
      showProgressDots: be,
      dotSize: Se,
      dotsInset: Ce,
      dotsRadius: q,
      dotsPadding: we,
      dotsGap: J,
      dotsFill: Te,
      dotsBackground: Ee,
      dotsActiveOpacity: De,
      dotsOpacity: Oe,
      dotsBlur: ke,
    } = P,
    Y = m ? `${h}px ${v}px ${y}px ${b}px` : `${p}px`,
    Ae = xe.current() === xe.canvas,
    je = t.filter(Boolean),
    Me = l.count(je);
  if (!(Me > 0))
    return S(`section`, {
      style: Wn,
      children: [
        x(`div`, { style: Gn, children: `⭐️` }),
        x(`p`, { style: Kn, children: `Connect to Content` }),
        x(`p`, {
          style: qn,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Ne = f(null),
    Pe = f(null),
    Fe = g((e) => {
      ((Ne.current = e), Ne.current && Qe());
    }, []),
    [X, Ie] = T({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    Z = r === `left` || r === `right`,
    Le = Fn(),
    Re = Z && Le === `rtl` ? -1 : 1,
    [ze, Be] = T(!1),
    [Ve, He] = T(s),
    [Ue, We] = T(!1),
    Ge = X?.item !== null && X?.parent !== null && Le !== null,
    Ke = Math.ceil((n + C) / Me),
    qe = [],
    Je = Ke * 4;
  (Ae || !Ge) && (Je = Ke);
  let [Ye, Xe] = T(n + Me);
  w(() => {
    if (!X.item || !Le) return;
    let e = -1 * Ye * ((X.item ?? 0) + d) * (Le === `rtl` ? -1 : 1);
    at.get() !== e && te(at, e, j);
  }, [Ye, X.item, d, Le]);
  let Ze = () => {
      let e = Pe.current;
      if (!e) return;
      let t = e.width,
        n = e.height,
        r = Z ? t : n,
        i = Math.max(1, C),
        o = Math.max(0, (r - d * (i - 1)) / i),
        s = Me * (o + d),
        c = Z ? o : t,
        l = Z ? n : o,
        u = Z
          ? Math.max(document.documentElement.clientWidth || 0, a.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, a.innerHeight || 0, n);
      Ie({ parent: r, children: s, item: o, itemWidth: c, itemHeight: l, viewportLength: u });
    },
    Qe = kn(() => {
      D.read(Ze, !1, !0);
    });
  (_(() => {
    Qe();
  }, [je.length, C, d, r, p, m, h, v, y, b]),
    w(() => {
      let e = Ne.current;
      if (e)
        return an(e, ({ size: e }) => {
          ((Pe.current = e), !(!e.width || !e.height) && Qe());
        });
    }, []));
  let $e = Ae ? 0 : X?.children,
    [et, tt] = T(!1),
    nt = f(null),
    rt = k(nt),
    it = re() && rt,
    at = E($e),
    ot = Ae
      ? E(0)
      : ne(at, (e) => {
          let t = $e ?? 0,
            n = e ?? 0,
            r = ie(-t * Re, -t * Re * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    st = ie(0, Me, Ye),
    ct = (e) => {
      o(() => Xe((t) => t + e));
    },
    lt = (e) => {
      let t = e - ie(0, Me, Ye);
      o(() => Xe((e) => e + t));
    },
    ut = (r === `right` || r === `bottom` ? -1 : 1) * Re,
    dt = s && Ve && (B || it) && !Ae && Me > 1 && !et && Ge;
  w(() => {
    if (!dt) return;
    let e = setTimeout(() => {
      ct(ut);
    }, A * 1e3);
    return () => clearTimeout(e);
  }, [dt, ut, A, Ye]);
  let ft = () => {
      o(() => tt(!0));
    },
    pt = (e, { offset: t, velocity: n }) => {
      o(() => tt(!1));
      let r = Z ? t.x : t.y,
        i = Z ? n.x : n.y,
        a = r < -X.item / 2,
        s = r > X.item / 2,
        c = Math.round(Math.abs(r) / X.item),
        l = c === 0 ? 1 : c;
      i > 200 ? ct(-l * Re) : i < -200 ? ct(l * Re) : (a && ct(c * Re), s && ct(-c * Re));
    },
    mt = Math.max(0, Math.min(n ?? 0, Math.max(0, Me - 1))),
    ht = (mt * 100) / C,
    gt = (mt * d) / C,
    _t = 0,
    vt = `calc(${100 / C}% - ${d}px + ${d / C}px)`;
  for (let e = 0; e < Je; e++)
    qe = qe.concat(
      l.map(je, (t, n) =>
        x(
          Zn,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: Z && C > 1 ? vt : `100%`,
            height: Z ? `100%` : C > 1 ? vt : `100%`,
            size: X,
            child: t,
            numChildren: je?.length,
            wrappedXOrY: ot,
            childCounter: _t++,
            gap: d,
            isCanvas: Ae,
            isInitialized: Ge,
            isHorizontal: Z,
            effectsOpacity: I,
            effectsScale: L,
            effectsRotate: R,
            writingDirection: Le,
            rtlDirectionModifier: Re,
            children: e + n,
          },
          e + n + `lg`
        )
      )
    );
  let yt = Z ? `to right` : `to bottom`,
    bt = ce / 2,
    xt = 100 - ce / 2,
    Q = `linear-gradient(${yt}, rgba(0, 0, 0, ${ue}) ${Xn(le, 0, bt)}%, rgba(0, 0, 0, 1) ${bt}%, rgba(0, 0, 0, 1) ${xt}%, rgba(0, 0, 0, ${ue}) ${100 - le}%)`,
    St = [],
    Ct = {};
  if (be) {
    for (let e = 0; e < je?.length; e++)
      St.push(
        x(
          Qn,
          {
            dotStyle: { ...er, width: Se, height: Se, backgroundColor: Te },
            buttonStyle: Jn,
            selectedOpacity: De,
            opacity: Oe,
            disabled: !Ae && !Ge,
            onClick: () => lt(e),
            wrappedIndex: Ae || !Ge ? mt : st,
            total: Me,
            index: e,
            gap: J,
            padding: we,
            isHorizontal: Z,
          },
          e
        )
      );
    ke > 0 && (Ct.backdropFilter = Ct.WebkitBackdropFilter = `blur(${ke}px)`);
  }
  let wt =
      Ge && c
        ? {
            drag: Z ? `x` : `y`,
            onDragStart: ft,
            onDragEnd: pt,
            dragDirectionLock: !0,
            values: { x: at, y: at },
            dragMomentum: !1,
          }
        : {},
    Tt = he === `top-left` || he === `top-mid` || he === `top-right`,
    Et = he === `bottom-left` || he === `bottom-mid` || he === `bottom-right`,
    Dt = he === `top-left` || he === `bottom-left`,
    Ot = he === `top-right` || he === `bottom-right`,
    kt = he === `top-mid` || he === `bottom-mid` || he === `auto`,
    At = U || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left`,
    jt = pe || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right`;
  return S(`section`, {
    className: `${Ln} ${Z ? Rn : zn}`,
    style: {
      ...Un,
      padding: Y,
      WebkitMaskImage: oe ? Q : void 0,
      maskImage: oe ? Q : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Be(!0), z || He(!1));
    },
    onMouseLeave: () => {
      (Be(!1), z || He(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), o(() => We(!0)));
    },
    onMouseUp: () => o(() => We(!1)),
    ref: nt,
    children: [
      x(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: se ? `visible` : `hidden`,
          borderRadius: N,
          userSelect: `none`,
          perspective: Ae ? `none` : ae,
        },
        children: x(O.ul, {
          ref: Fe,
          ...wt,
          style: {
            ...Un,
            gap: d,
            placeItems: u,
            ...(Ae || !Ge
              ? {
                  transform: Z
                    ? `translateX(calc(${Vn} * (${ht}% + ${gt}px)))`
                    : `translateY(calc(${Vn} * (${ht}% + ${gt}px)))`,
                }
              : { x: Z ? ot : 0, y: Z ? 0 : ot }),
            flexDirection: Z ? `row` : `column`,
            transformStyle: R !== 0 && !Ae ? `preserve-3d` : void 0,
            cursor: (Ae || Ge) && c ? (Ue ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...F,
          },
          children: qe,
        }),
      }),
      S(`fieldset`, {
        style: { ...Yn },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          S(O.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: Z ? `row` : `column`,
              justifyContent: W ? `space-between` : `center`,
              gap: W ? `unset` : _e,
              opacity: me || (!Ae && !Ge) ? 0 : 1,
              alignItems: `center`,
              inset: ge,
              top: W ? ge : Tt ? G : `unset`,
              left: W ? ge : Dt ? ye : kt ? 0 : `unset`,
              right: W ? ge : Ot ? K : kt ? 0 : `unset`,
              bottom: W ? ge : Et ? ve : `unset`,
            },
            animate: Ae || Ge ? (me ? { opacity: +!!ze } : { opacity: 1 }) : { opacity: 0 },
            transition: j,
            children: [
              x(O.button, {
                type: `button`,
                style: {
                  ...Jn,
                  backgroundColor: fe,
                  width: H,
                  height: H,
                  borderRadius: de,
                  rotate: Z ? 0 : 90,
                  display: V ? `block` : `none`,
                  pointerEvents: Ae || Ge ? `auto` : `none`,
                  cursor: Ae || Ge ? `pointer` : `default`,
                },
                disabled: !(Ae || Ge),
                onClick: () => ct(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: x(`img`, {
                  decoding: `async`,
                  width: H,
                  height: H,
                  src: Z && Le === `rtl` ? jt : At,
                  alt: `Back Arrow`,
                }),
              }),
              x(O.button, {
                type: `button`,
                style: {
                  ...Jn,
                  backgroundColor: fe,
                  width: H,
                  height: H,
                  borderRadius: de,
                  rotate: Z ? 0 : 90,
                  display: V ? `block` : `none`,
                  pointerEvents: Ae || Ge ? `auto` : `none`,
                  cursor: Ae || Ge ? `pointer` : `default`,
                },
                disabled: !(Ae || Ge),
                onClick: () => ct(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: x(`img`, {
                  decoding: `async`,
                  width: H,
                  height: H,
                  src: Z && Le === `rtl` ? At : jt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          St.length > 1
            ? x(O.div, {
                style: {
                  ...$n,
                  left: Z ? `50%` : Ce,
                  top: Z ? `unset` : `50%`,
                  transform: Z ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: Z ? `row` : `column`,
                  bottom: Z ? Ce : `unset`,
                  borderRadius: q,
                  backgroundColor: Ee,
                  userSelect: `none`,
                  ...Ct,
                  opacity: +!!Ae,
                  pointerEvents: Ae || Ge ? `auto` : `none`,
                },
                animate: { opacity: +!!Ge },
                transition: { duration: 0.35, ease: `easeOut` },
                children: St,
              })
            : null,
        ],
      }),
    ],
  });
}
function Pn() {
  return a?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function Fn() {
  let [e, t] = T(null);
  return (
    w(
      () => (
        t(Pn()),
        In(() => {
          t(Pn());
        })
      ),
      []
    ),
    e
  );
}
function In(e) {
  return (
    nr.push(e),
    tr ||
      ((tr = new MutationObserver(() => nr.forEach((e) => e()))),
      tr.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (nr.splice(nr.indexOf(e), 1), nr.length === 0 && (tr?.disconnect(), (tr = null)));
    }
  );
}
var Ln,
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
  rr = e(() => {
    (t(),
      h(),
      Dn(),
      G(),
      I(),
      r(),
      Mn(),
      (Ln = `framer-slideshow`),
      (Rn = `framer-slideshow-axis-x`),
      (zn = `framer-slideshow-axis-y`),
      (Bn = `--framer-dir-multiplier`),
      (Vn = `var(${Bn}, -1)`),
      (Hn = le(
        Nn,
        [`.${Rn} { ${Bn}: -1; }`, `html[dir="rtl"] .${Rn} { ${Bn}: 1; }`, `.${zn} { ${Bn}: -1; }`],
        `framer-slideshow-component`
      )),
      (Hn.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      W(Hn, {
        slots: { type: X.Array, title: `Content`, control: { type: X.ComponentInstance } },
        direction: {
          type: X.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: Hn.defaultProps.direction,
        },
        autoPlayControl: { type: X.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: X.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: X.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: X.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: Hn.defaultProps.startFrom,
        },
        effectsOptions: {
          type: X.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: X.Number,
              title: `Opacity`,
              defaultValue: Hn.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: X.Number,
              title: `Scale`,
              defaultValue: Hn.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: X.Number,
              title: `Perspective`,
              defaultValue: Hn.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: X.Number,
              title: `Rotate`,
              defaultValue: Hn.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: X.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Hn.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: X.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Hn.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: X.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: X.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: Hn.defaultProps.itemAmount,
        },
        gap: { type: X.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: X.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: X.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: X.Transition,
          defaultValue: Hn.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: X.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: X.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: X.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: X.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: X.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: X.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: X.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: X.Boolean,
              title: `Show`,
              defaultValue: Hn.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: X.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: Hn.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: X.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: X.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: X.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: Hn.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: X.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: X.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: X.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: Hn.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: X.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: X.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: X.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: X.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: X.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: X.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: X.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: X.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: X.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: X.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: X.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: X.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: X.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: X.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: X.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: X.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: X.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: X.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: X.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Un = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Wn = {
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
      (Gn = { fontSize: 32, marginBottom: 10 }),
      (Kn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (qn = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (Jn = {
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
      (Yn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Xn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Zn = C(function (e) {
        let {
            slideKey: t,
            width: n,
            height: r,
            child: i,
            size: a,
            gap: o,
            wrappedXOrY: s,
            numChildren: c,
            childCounter: l,
            isCanvas: u,
            isInitialized: p,
            effectsOpacity: m,
            effectsScale: h,
            effectsRotate: g,
            isHorizontal: _,
            index: v,
            writingDirection: y,
            rtlDirectionModifier: b,
          } = e,
          S = f(null),
          C = a?.item ?? 0,
          T = a?.parent ?? 0,
          E = (C + o) * l,
          D = (_ && y === `rtl` ? [C - o, 0, -T + C - o, -T - o] : [-C, 0, T - C + o, T]).map(
            (e) => e - E * b
          ),
          O = !u && ne(s, D, _ && y === `rtl` ? [g, 0, 0, -g] : [-g, 0, 0, g]),
          te = !u && ne(s, D, [g, 0, 0, -g]),
          k = !u && ne(s, D, [m, 1, 1, m]),
          j = !u && ne(s, D, [h, 1, 1, h]),
          M = !u && ne(s, D, _ && y === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          N =
            !u &&
            ne(s, (e) => {
              let t = Math.min(D[1], D[2]),
                n = Math.max(D[1], D[2]);
              return e >= t && e <= n;
            });
        w(() => {
          if (!N || !p) return;
          function e(e) {
            let t = S?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(N.get()),
            N.on(`change`, (t) => {
              e(t);
            })
          );
        }, [p]);
        let P = u
            ? `visible`
            : ne(
                s,
                [D[0] - a.viewportLength * b, ee(D[1], D[2], 0.5), D[3] + a.viewportLength * b],
                [`hidden`, `visible`, `hidden`]
              ),
          F = t + `child`;
        return x(A, {
          inherit: `id`,
          id: F,
          children: x(`li`, {
            style: { display: `contents` },
            children: d(i, {
              ref: S,
              key: F,
              style: {
                ...i.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: n,
                height: r,
                ...(p
                  ? {
                      opacity: k,
                      scale: j,
                      originX: _ ? M : 0.5,
                      originY: _ ? 0.5 : M,
                      rotateY: _ ? O : 0,
                      rotateX: _ ? 0 : te,
                      visibility: P,
                    }
                  : {}),
              },
              layoutId: i.props.layoutId ? i.props.layoutId + `-original-` + v : void 0,
            }),
          }),
        });
      })),
      (Qn = C(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          h = l ? (r === 0 ? c : f) : c,
          g = l ? (r === n - 1 ? c : f) : c;
        return x(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: h,
            paddingInlineEnd: g,
          },
          children: x(O.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      ($n = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (er = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (tr = null),
      (nr = []));
  });
function ir(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ar,
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
  Lr = e(() => {
    (h(),
      G(),
      I(),
      r(),
      rr(),
      Je(),
      $e(),
      xt(),
      (ar = q(Q)),
      (or = fe(L)),
      (sr = q(Hn)),
      (cr = [`i3Yb3laOI`, `J17_VlUfl`]),
      (lr = `framer-5cdM6`),
      (ur = { i3Yb3laOI: `framer-v-17hf6a`, J17_VlUfl: `framer-v-oth8gi` }),
      (dr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (fr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (pr = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
      (mr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.34, 0.98], type: `tween` },
        x: 0,
        y: 0,
      }),
      (hr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (gr = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase().includes(t.toLowerCase())
          : Array.isArray(e) && typeof t == `string`
            ? e.includes(t)
            : !1),
      (_r = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vr = () => ({
        from: { alias: `TIx3v9yME`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        orderBy: [
          { collection: `TIx3v9yME`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `TIx3v9yME`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `sb5C2g1qc`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `TIx3v9yME`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `TIx3v9yME`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `New Arrivals` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (yr = ({ query: e, pageSize: t, children: n }) => n(Ne(e))),
      (br = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      }),
      (xr = { delay: 0.1, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
      (Sr = () => ({
        from: { alias: `THCeeqJqa`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        orderBy: [
          { collection: `THCeeqJqa`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `THCeeqJqa`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `sb5C2g1qc`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `THCeeqJqa`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `THCeeqJqa`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `New Arrivals` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (Cr = { delay: 0.2, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
      (wr = () => ({
        from: { alias: `LqbqLJTlk`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        orderBy: [
          { collection: `LqbqLJTlk`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `LqbqLJTlk`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `sb5C2g1qc`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `LqbqLJTlk`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `LqbqLJTlk`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `New Arrivals` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (Tr = { delay: 0.3, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
      (Er = () => ({
        from: { alias: `Jh7y1s9Al`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 3 },
        orderBy: [
          { collection: `Jh7y1s9Al`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `Jh7y1s9Al`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `sb5C2g1qc`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `Jh7y1s9Al`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `Jh7y1s9Al`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `New Arrivals` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (Dr = { delay: 0.4, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
      (Or = () => ({
        from: { alias: `Lafwsvu3u`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 4 },
        orderBy: [
          { collection: `Lafwsvu3u`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `Lafwsvu3u`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `sb5C2g1qc`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `Lafwsvu3u`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `Lafwsvu3u`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `New Arrivals` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (kr = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
      (Ar = () => ({
        from: { alias: `JJEKPuNe0`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 4 },
        offset: { type: `LiteralValue`, value: 0 },
        orderBy: [
          { collection: `JJEKPuNe0`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `JJEKPuNe0`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `sb5C2g1qc`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `JJEKPuNe0`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `JJEKPuNe0`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `New Arrivals` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (jr = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Mr = { "Desktop / Tablet": `i3Yb3laOI`, Phone: `J17_VlUfl` }),
      (Nr = O.create(s)),
      (Pr = ({ height: e, id: t, items: n, width: r, wishlistClick: i, ...a }) => ({
        ...a,
        pe9Qh39n0: n ?? a.pe9Qh39n0 ?? 3,
        variant: Mr[a.variant] ?? a.variant ?? `i3Yb3laOI`,
        wE32AWBje: i ?? a.wE32AWBje,
      })),
      (Fr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ir = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se(),
            l = ke(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              wE32AWBje: h,
              pe9Qh39n0: g,
              ..._
            } = Pr(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: ee,
              variants: te,
            } = _e({
              cycleOrder: cr,
              defaultVariant: `i3Yb3laOI`,
              ref: r,
              variant: m,
              variantClassNames: ur,
            }),
            k = Fr(e, te),
            { activeVariantCallback: ne, delay: j } = Ie(y),
            M = ne(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            N = V(lr, nt),
            P = () => y !== `J17_VlUfl`;
          je();
          let F = () => y === `J17_VlUfl`;
          return x(A, {
            id: p ?? a,
            children: x(Nr, {
              animate: te,
              initial: !1,
              children: x(jr, {
                value: dr,
                children: S(O.div, {
                  ..._,
                  ...w,
                  className: V(N, `framer-17hf6a`, d, b),
                  "data-framer-name": `Desktop / Tablet`,
                  layoutDependency: k,
                  layoutId: `i3Yb3laOI`,
                  ref: r,
                  style: { ...u },
                  ...ir({ J17_VlUfl: { "data-framer-name": `Phone` } }, y, T),
                  children: [
                    x(ze, {
                      href: {
                        pathVariables: { X_kOvdUOg: `new-arrivals` },
                        unresolvedPathSlugs: {
                          X_kOvdUOg: { collectionId: `bYJxnvWan`, collectionItemId: `PAGB6Ms55` },
                        },
                        webPageId: `Ug98Cl58K`,
                      },
                      motionChild: !0,
                      nodeId: `TpAeWmdEr`,
                      openInNewTab: !1,
                      scopeId: `evGW6Zfrz`,
                      children: x(O.a, {
                        className: `framer-eumcrl framer-4blkh`,
                        "data-framer-name": `Text`,
                        layoutDependency: k,
                        layoutId: `TpAeWmdEr`,
                        children: x(he, {
                          __fromCanvasComponent: !0,
                          children: x(s, {
                            children: x(O.p, {
                              className: `framer-styles-preset-arb5du`,
                              "data-styles-preset": `UOFERiKNL`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                              },
                              children: `View More`,
                            }),
                          }),
                          className: `framer-1rdyjl7`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `aew4VCQ4j`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    P() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-1suolxc-container`,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `iz4x5ktjR-container`,
                          nodeId: `iz4x5ktjR`,
                          rendersWithMotion: !0,
                          scopeId: `evGW6Zfrz`,
                          children: x(Hn, {
                            alignment: `center`,
                            arrowOptions: {
                              arrowFill: `rgba(214, 214, 214, 0.65)`,
                              arrowGap: 8,
                              arrowPadding: 20,
                              arrowPaddingBottom: -50,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 0,
                              arrowPaddingTop: -54,
                              arrowPosition: `top-right`,
                              arrowRadius: 40,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !1,
                              arrowSize: 34,
                              leftArrow: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              rightArrow: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              showMouseControls: !0,
                            },
                            autoPlayControl: !1,
                            borderRadius: 0,
                            direction: `left`,
                            dragControl: !0,
                            effectsOptions: {
                              effectsHover: !0,
                              effectsOpacity: 1,
                              effectsPerspective: 1200,
                              effectsRotate: 0,
                              effectsScale: 1,
                              playOffscreen: !1,
                            },
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !0,
                            },
                            gap: 24,
                            height: `100%`,
                            id: `iz4x5ktjR`,
                            intervalControl: 2,
                            itemAmount: g,
                            layoutId: `iz4x5ktjR`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                              dotsActiveOpacity: 1,
                              dotsBackground: `rgba(255, 255, 255, 0.1)`,
                              dotsBlur: 0,
                              dotsFill: `rgb(255, 255, 255)`,
                              dotsGap: 6,
                              dotsInset: -50,
                              dotSize: 6,
                              dotsOpacity: 0.3,
                              dotsPadding: 12,
                              dotsRadius: 50,
                              showProgressDots: !1,
                            },
                            slots: [
                              x(O.div, {
                                className: `framer-1qylt8q`,
                                "data-framer-name": `Product 1`,
                                layoutDependency: k,
                                layoutId: `TIx3v9yME`,
                                children: x(Fe, {
                                  children: x(yr, {
                                    query: vr(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sb5C2g1qc: c,
                                              sGLDCFVI5: l,
                                              Sn3Ji2zLH: u,
                                              StWb4Z9jo: d,
                                              u8osWsFhh: f,
                                              UxQ8VtfSI: p,
                                              vJoj3qvid: m,
                                            },
                                            h
                                          ) => (
                                            (m ??= ``),
                                            (u ??= ``),
                                            (p ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (c ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `TIx3v9yME-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 470,
                                                        width: `420px`,
                                                        children: x(or, {
                                                          __framer__animate: { transition: pr },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: fr,
                                                          __framer__exit: mr,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0,
                                                          __perspectiveFX: !1,
                                                          __smartComponentFX: !0,
                                                          __targetOpacity: 1,
                                                          className: `framer-112jzow-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: k,
                                                          layoutId: `YmoPl8rJI-container`,
                                                          nodeId: `YmoPl8rJI`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `evGW6Zfrz`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: M,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: hr(l),
                                                            height: `100%`,
                                                            hFy2PLFBG: u,
                                                            HwypVSMEi: !1,
                                                            id: `YmoPl8rJI`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `YmoPl8rJI`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: hr(t),
                                                            OKvEEQQFQ: gr(c, `New Arrivals`),
                                                            q1Wa9MpBb: hr(f),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: p,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: hr(d),
                                                            ub4buTzaB: hr(r),
                                                            variant: _r(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: hr(a),
                                                            Zg3vnZECo: m,
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
                              x(O.div, {
                                className: `framer-fju4qi`,
                                "data-framer-name": `Product 2`,
                                layoutDependency: k,
                                layoutId: `THCeeqJqa`,
                                children: x(Fe, {
                                  children: x(yr, {
                                    query: Sr(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sb5C2g1qc: c,
                                              sGLDCFVI5: l,
                                              Sn3Ji2zLH: u,
                                              StWb4Z9jo: d,
                                              u8osWsFhh: f,
                                              UxQ8VtfSI: p,
                                              vJoj3qvid: m,
                                            },
                                            h
                                          ) => (
                                            (m ??= ``),
                                            (u ??= ``),
                                            (p ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (c ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `THCeeqJqa-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 470,
                                                        width: `420px`,
                                                        children: x(or, {
                                                          __framer__animate: { transition: xr },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: br,
                                                          __framer__exit: mr,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0,
                                                          __perspectiveFX: !1,
                                                          __smartComponentFX: !0,
                                                          __targetOpacity: 1,
                                                          className: `framer-1wnvi88-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: k,
                                                          layoutId: `bw46GbwDB-container`,
                                                          nodeId: `bw46GbwDB`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `evGW6Zfrz`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: M,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: hr(l),
                                                            height: `100%`,
                                                            hFy2PLFBG: u,
                                                            HwypVSMEi: !1,
                                                            id: `bw46GbwDB`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `bw46GbwDB`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: hr(t),
                                                            OKvEEQQFQ: gr(c, `New Arrivals`),
                                                            q1Wa9MpBb: hr(f),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: p,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: hr(d),
                                                            ub4buTzaB: hr(r),
                                                            variant: _r(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: hr(a),
                                                            Zg3vnZECo: m,
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
                              x(O.div, {
                                className: `framer-10llp7m`,
                                "data-framer-name": `Product 3`,
                                layoutDependency: k,
                                layoutId: `LqbqLJTlk`,
                                children: x(Fe, {
                                  children: x(yr, {
                                    query: wr(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sb5C2g1qc: c,
                                              sGLDCFVI5: l,
                                              Sn3Ji2zLH: u,
                                              StWb4Z9jo: d,
                                              u8osWsFhh: f,
                                              UxQ8VtfSI: p,
                                              vJoj3qvid: m,
                                            },
                                            h
                                          ) => (
                                            (m ??= ``),
                                            (u ??= ``),
                                            (p ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (c ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `LqbqLJTlk-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 470,
                                                        width: `420px`,
                                                        children: x(or, {
                                                          __framer__animate: { transition: Cr },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: br,
                                                          __framer__exit: mr,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0,
                                                          __perspectiveFX: !1,
                                                          __smartComponentFX: !0,
                                                          __targetOpacity: 1,
                                                          className: `framer-9c2u19-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: k,
                                                          layoutId: `nN3Ixx8Bt-container`,
                                                          nodeId: `nN3Ixx8Bt`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `evGW6Zfrz`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: M,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: hr(l),
                                                            height: `100%`,
                                                            hFy2PLFBG: u,
                                                            HwypVSMEi: !1,
                                                            id: `nN3Ixx8Bt`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `nN3Ixx8Bt`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: hr(t),
                                                            OKvEEQQFQ: gr(c, `New Arrivals`),
                                                            q1Wa9MpBb: hr(f),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: p,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: hr(d),
                                                            ub4buTzaB: hr(r),
                                                            variant: _r(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: hr(a),
                                                            Zg3vnZECo: m,
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
                              x(O.div, {
                                className: `framer-j8lgxq`,
                                "data-framer-name": `Product 4`,
                                layoutDependency: k,
                                layoutId: `Jh7y1s9Al`,
                                children: x(Fe, {
                                  children: x(yr, {
                                    query: Er(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sb5C2g1qc: c,
                                              sGLDCFVI5: l,
                                              Sn3Ji2zLH: u,
                                              StWb4Z9jo: d,
                                              u8osWsFhh: f,
                                              UxQ8VtfSI: p,
                                              vJoj3qvid: m,
                                            },
                                            h
                                          ) => (
                                            (m ??= ``),
                                            (u ??= ``),
                                            (p ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (c ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `Jh7y1s9Al-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 470,
                                                        width: `420px`,
                                                        children: x(or, {
                                                          __framer__animate: { transition: Tr },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: br,
                                                          __framer__exit: mr,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0,
                                                          __perspectiveFX: !1,
                                                          __smartComponentFX: !0,
                                                          __targetOpacity: 1,
                                                          className: `framer-mufrb4-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: k,
                                                          layoutId: `LqsqNmviS-container`,
                                                          nodeId: `LqsqNmviS`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `evGW6Zfrz`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: M,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: hr(l),
                                                            height: `100%`,
                                                            hFy2PLFBG: u,
                                                            HwypVSMEi: !1,
                                                            id: `LqsqNmviS`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `LqsqNmviS`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: hr(t),
                                                            OKvEEQQFQ: gr(c, `New Arrivals`),
                                                            q1Wa9MpBb: hr(f),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: p,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: hr(d),
                                                            ub4buTzaB: hr(r),
                                                            variant: _r(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: hr(a),
                                                            Zg3vnZECo: m,
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
                              x(O.div, {
                                className: `framer-h8plxx`,
                                "data-framer-name": `Product 5`,
                                layoutDependency: k,
                                layoutId: `Lafwsvu3u`,
                                children: x(Fe, {
                                  children: x(yr, {
                                    query: Or(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sb5C2g1qc: c,
                                              sGLDCFVI5: l,
                                              Sn3Ji2zLH: u,
                                              StWb4Z9jo: d,
                                              u8osWsFhh: f,
                                              UxQ8VtfSI: p,
                                              vJoj3qvid: m,
                                            },
                                            h
                                          ) => (
                                            (m ??= ``),
                                            (u ??= ``),
                                            (p ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (c ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `Lafwsvu3u-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 470,
                                                        width: `420px`,
                                                        children: x(or, {
                                                          __framer__animate: { transition: Dr },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: br,
                                                          __framer__exit: mr,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0,
                                                          __perspectiveFX: !1,
                                                          __smartComponentFX: !0,
                                                          __targetOpacity: 1,
                                                          className: `framer-8v3vp1-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: k,
                                                          layoutId: `cN1LF6tva-container`,
                                                          nodeId: `cN1LF6tva`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `evGW6Zfrz`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: M,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: hr(l),
                                                            height: `100%`,
                                                            hFy2PLFBG: u,
                                                            HwypVSMEi: !1,
                                                            id: `cN1LF6tva`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `cN1LF6tva`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: hr(t),
                                                            OKvEEQQFQ: gr(c, `New Arrivals`),
                                                            q1Wa9MpBb: hr(f),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: p,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: hr(d),
                                                            ub4buTzaB: hr(r),
                                                            variant: _r(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: hr(a),
                                                            Zg3vnZECo: m,
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
                            startFrom: 0,
                            style: { height: `100%`, width: `100%` },
                            transitionControl: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                    F() &&
                      x(O.div, {
                        className: `framer-jhwnyw`,
                        "data-framer-name": `Product Grid - Mobile`,
                        layoutDependency: k,
                        layoutId: `JJEKPuNe0`,
                        children: x(Fe, {
                          children: x(yr, {
                            query: Ar(),
                            children: (e, t, n) =>
                              x(v, {
                                children: e?.map(
                                  (
                                    {
                                      EdlK9s4od: e,
                                      eVfKYnlqn: t,
                                      id: n,
                                      Jry1OPs1q: r,
                                      JZfMFKc2o: i,
                                      K6GheEMTC: a,
                                      k8owwKEx3: o,
                                      l2PesJvCE: s,
                                      sb5C2g1qc: c,
                                      sGLDCFVI5: u,
                                      Sn3Ji2zLH: d,
                                      StWb4Z9jo: f,
                                      u8osWsFhh: p,
                                      UxQ8VtfSI: m,
                                      vJoj3qvid: h,
                                    },
                                    g
                                  ) => (
                                    (h ??= ``),
                                    (d ??= ``),
                                    (m ??= ``),
                                    (s ??= ``),
                                    (e ??= ``),
                                    (o ??= ``),
                                    (c ??= ``),
                                    (i ??= ``),
                                    x(
                                      A,
                                      {
                                        id: `JJEKPuNe0-${n}`,
                                        children: x(ye.Provider, {
                                          value: { JZfMFKc2o: i },
                                          children: x(B, {
                                            links: [
                                              {
                                                href: {
                                                  pathVariables: { JZfMFKc2o: i },
                                                  webPageId: `vmJrVFRkR`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  pathVariables: { JZfMFKc2o: i },
                                                  webPageId: `vmJrVFRkR`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (n) =>
                                              x(Y, {
                                                height: 450,
                                                ...ir(
                                                  {
                                                    J17_VlUfl: {
                                                      width: `calc(${l?.width || `100vw`} - 8px)`,
                                                      y:
                                                        (l?.y || 0) +
                                                        0 +
                                                        (((l?.height || 1897) - 4 - 482.8) / 2 +
                                                          16.8 +
                                                          16) +
                                                        0 +
                                                        0,
                                                    },
                                                  },
                                                  y,
                                                  T
                                                ),
                                                children: x(or, {
                                                  __framer__animate: {
                                                    transition: kr(pr, g * 0.1),
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: br,
                                                  __framer__exit: mr,
                                                  __framer__styleAppearEffectEnabled: !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __smartComponentFX: !0,
                                                  __targetOpacity: 1,
                                                  className: `framer-1ib8pgq-container`,
                                                  layoutDependency: k,
                                                  layoutId: `eclJ1UmOc-container`,
                                                  nodeId: `eclJ1UmOc`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `evGW6Zfrz`,
                                                  children: x(Q, {
                                                    CtxCtZRbF: M,
                                                    FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                    grTamTNk1: hr(u),
                                                    height: `100%`,
                                                    hFy2PLFBG: d,
                                                    HwypVSMEi: !1,
                                                    id: `eclJ1UmOc`,
                                                    II0fWsmjM: `12px`,
                                                    layoutId: `eclJ1UmOc`,
                                                    MGgAvDoA0: n[0],
                                                    O9ZyioqcS: hr(t),
                                                    OKvEEQQFQ: gr(c, `New Arrivals`),
                                                    q1Wa9MpBb: hr(p),
                                                    Qb7mSHgLh: o,
                                                    QjM5BTCWQ: !0,
                                                    SKBNP2vvn: !1,
                                                    style: { height: `100%`, width: `100%` },
                                                    TCGQti0b7: m,
                                                    tJ0RQfmJy: e,
                                                    TWjfUBTmo: hr(f),
                                                    ub4buTzaB: hr(r),
                                                    variant: _r(`anAebR9ik`),
                                                    width: `100%`,
                                                    wsSEriDkC: s,
                                                    xYhX6dOGf: {
                                                      borderColor: `rgb(206, 206, 206)`,
                                                      borderStyle: `solid`,
                                                      borderWidth: 0,
                                                    },
                                                    YdL5oV0XS: hr(a),
                                                    Zg3vnZECo: h,
                                                    ...ir({ J17_VlUfl: { MGgAvDoA0: n[1] } }, y, T),
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
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-5cdM6.framer-4blkh, .framer-5cdM6 .framer-4blkh { display: block; }`,
          `.framer-5cdM6.framer-17hf6a { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 531px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 56px 4px 4px 4px; position: relative; width: 1100px; }`,
          `.framer-5cdM6 .framer-eumcrl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 88px; text-decoration: none; top: 10px; width: min-content; }`,
          `.framer-5cdM6 .framer-1rdyjl7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-5cdM6 .framer-1suolxc-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-5cdM6 .framer-1qylt8q, .framer-5cdM6 .framer-fju4qi, .framer-5cdM6 .framer-10llp7m, .framer-5cdM6 .framer-j8lgxq, .framer-5cdM6 .framer-h8plxx { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 470px; justify-content: center; padding: 0px; position: relative; width: 420px; }`,
          `.framer-5cdM6 .framer-112jzow-container, .framer-5cdM6 .framer-1wnvi88-container, .framer-5cdM6 .framer-9c2u19-container, .framer-5cdM6 .framer-mufrb4-container, .framer-5cdM6 .framer-8v3vp1-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-5cdM6 .framer-jhwnyw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5cdM6 .framer-1ib8pgq-container { flex: none; height: 450px; position: relative; width: 100%; }`,
          `.framer-5cdM6.framer-v-oth8gi.framer-17hf6a { align-content: flex-end; align-items: flex-end; gap: 16px; height: min-content; padding: 0px 4px 4px 4px; width: 390px; }`,
          `.framer-5cdM6.framer-v-oth8gi .framer-eumcrl { position: relative; right: unset; top: unset; }`,
          ...et,
        ],
        `framer-5cdM6`
      )),
      (Ir.displayName = `New Arrivals Slider`),
      (Ir.defaultProps = { height: 531, width: 1100 }),
      W(Ir, {
        variant: {
          options: [`i3Yb3laOI`, `J17_VlUfl`],
          optionTitles: [`Desktop / Tablet`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
        wE32AWBje: { title: `Wishlist Click`, type: X.EventHandler },
        pe9Qh39n0: {
          defaultValue: 3,
          displayStepper: !0,
          max: 10,
          min: 1,
          title: `Items`,
          type: X.Number,
        },
        onpe9Qh39n0Change: { changes: `pe9Qh39n0`, type: X.ChangeHandler },
      }),
      U(
        Ir,
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
          ...ar,
          ...sr,
          ...ue(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ir.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = J.get(vr(), n),
            i = J.get(Sr(), n),
            a = J.get(wr(), n),
            o = J.get(Er(), n),
            s = J.get(Or(), n),
            c = J.get(Ar(), n);
          return Promise.allSettled([
            r.preload(),
            i.preload(),
            a.preload(),
            o.preload(),
            s.preload(),
            c.preload(),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => K(Q, {}, t)));
            })(),
            (async () => {
              let e = (await i.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => K(Q, {}, t)));
            })(),
            (async () => {
              let e = (await a.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => K(Q, {}, t)));
            })(),
            (async () => {
              let e = (await o.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => K(Q, {}, t)));
            })(),
            (async () => {
              let e = (await s.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => K(Q, {}, t)));
            })(),
            (async () => {
              let e = (await c.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => K(Q, {}, t)));
            })(),
          ]);
        },
      }));
  }),
  Rr,
  zr,
  Br = e(() => {
    (G(),
      (Rr = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...Rr },
      (zr = {
        onClick: { type: X.EventHandler },
        onMouseEnter: { type: X.EventHandler },
        onMouseLeave: { type: X.EventHandler },
      }),
      X.Number,
      X.Boolean,
      X.String,
      X.Enum);
  });
function Vr(e, t) {
  return Ur(!0, e, t);
}
function Hr(e, t) {
  return Ur(!1, e, t);
}
function Ur(e, t, n = !0) {
  let r = Te();
  w(() => {
    n && r === e && t();
  }, [r]);
}
var Wr = e(() => {
    (G(), r());
  }),
  Gr = e(() => {
    r();
  }),
  Kr = e(() => {
    G();
  }),
  qr = e(() => {
    G();
  }),
  Jr = e(() => {
    r();
  }),
  Yr = e(() => {
    G();
  }),
  Xr,
  Zr,
  Qr = e(() => {
    (t(),
      r(),
      (Xr = () => {
        if (p !== void 0) {
          let e = p.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (Zr = () => u(() => Xr(), [])));
  }),
  $r = e(() => {
    (r(), qr());
  }),
  ei = e(() => {
    (r(), G(), qr(), Gr());
  }),
  ti = e(() => {
    (G(), r(), Br());
  });
function ni() {
  return u(() => xe.current(), []);
}
function ri() {
  return u(() => xe.current() === xe.canvas, []);
}
var ii = e(() => {
    (r(), G());
  }),
  ai = e(() => {
    r();
  });
function oi(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return u(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var si,
  ci = e(() => {
    (r(),
      G(),
      (si = {
        borderRadius: {
          title: `Radius`,
          type: X.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      X.FusedNumber);
  }),
  li = e(() => {
    (Br(), Wr(), Gr(), Kr(), qr(), Jr(), Yr(), Qr(), $r(), ei(), ti(), ii(), ai(), ci());
  });
function ui(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function di(e) {
  let t = ui(e);
  return x(yi, { ...t });
}
function fi(e) {
  let t = Te(),
    n = f(!1),
    r = f(!1),
    i = g((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: g(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: g(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: i,
    isPlaying: r,
  };
}
function pi({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = T(e),
    [o, s] = T(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    l;
  return ((l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l);
}
function mi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function hi(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(mi).join(` `);
}
var gi,
  _i,
  vi,
  yi,
  bi,
  xi = e(() => {
    (h(),
      G(),
      I(),
      li(),
      r(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((gi ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((_i ||= {})),
      (vi = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (yi = C(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: s = !0,
            muted: c = !0,
            playsinline: l = !0,
            restartOnEnter: d = !1,
            objectFit: p = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: h = 0,
            volume: g = 25,
            startTime: _ = 0,
            poster: v,
            playing: y,
            progress: b,
            onSeeked: S,
            onPause: C,
            onPlay: T,
            onEnd: E,
            onClick: D,
            onMouseEnter: ee,
            onMouseLeave: O,
            onMouseDown: te,
            onMouseUp: ne,
          } = e,
          A = f(),
          M = Zr(),
          N = f(null),
          P = f(null),
          F = ri(),
          I = ni(),
          re = F || I === xe.export,
          ie = oi(e),
          L = re
            ? `no-autoplay`
            : pi({ playingProp: y, muted: c, loop: s, playsinline: l, controls: a }),
          R = re ? !0 : k(A),
          ae = !re && k(A, { margin: `10%`, once: !0 }),
          z = _ === 100 ? 99.9 : _,
          { play: B, pause: oe, setProgress: se, isPlaying: ce } = fi(A);
        (w(() => {
          re || (L !== `on-viewport` && (y ? B() : oe()));
        }, [L, y]),
          w(() => {
            re || (R && y && L !== `no-autoplay` && B(), L === `on-viewport` && oe());
          }, [L, R, y]),
          w(() => {
            !F || v || i || z || !A.current || (A.current.currentTime = 0.01);
          }, [i, v, z]));
        let le = f(!1);
        (w(() => {
          if (!le.current) {
            le.current = !0;
            return;
          }
          let e = j(b) ? b.get() : (b ?? 0) * 0.01;
          se((e ?? 0) || (z ?? 0) / 100);
        }, [z, r, n, b]),
          w(() => {
            if (j(b)) return b.on(`change`, (e) => se(e));
          }, [b]),
          Vr(() => {
            N.current !== null && A.current && ((!P && s) || !N.current) && B();
          }),
          Hr(() => {
            A.current && ((P.current = A.current.ended), (N.current = A.current.paused), oe());
          }));
        let ue = u(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, z]);
        return (
          w(() => {
            M && A.current && L === `on-mount` && setTimeout(() => B(), 50);
          }, []),
          w(() => {
            A.current && !c && (A.current.volume = (g ?? 0) / 100);
          }, [g]),
          x(`video`, {
            onClick: D,
            onMouseEnter: ee,
            onMouseLeave: O,
            onMouseDown: te,
            onMouseUp: ne,
            src: ue,
            loop: s,
            ref: A,
            onSeeked: (e) => S?.(e),
            onPause: (e) => C?.(e),
            onPlay: (e) => T?.(e),
            onEnded: (e) => E?.(e),
            autoPlay: ce.current || L === `on-mount` || (y && L === `on-viewport` && R),
            preload: ce.current
              ? `auto`
              : re && !v
                ? `metadata`
                : L !== `on-mount` && !ae
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === vi
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && v
                  ? v
                  : void 0,
            onLoadedData: () => {
              let e = A.current;
              e &&
                (e.currentTime < 0.3 && z > 0 && se((z ?? 0) * 0.01),
                (ce.current || L === `on-mount` || (y && L === `on-viewport` && R)) && B());
            },
            controls: a,
            muted: re ? !0 : c,
            playsInline: l,
            style: {
              cursor: D ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: ie,
              display: `block`,
              objectFit: p,
              backgroundColor: m,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (di.displayName = `Video`),
      (bi = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      W(di, {
        srcType: {
          type: X.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: X.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: X.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        ...si,
        loop: { type: X.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        posterEnabled: {
          type: X.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
          defaultValue: !0,
        },
        poster: {
          type: X.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        controls: {
          type: X.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
          hiddenWhenUnset: !0,
        },
        muted: {
          type: X.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        objectFit: {
          type: X.Enum,
          title: `Fit`,
          options: bi,
          optionTitles: bi.map(hi),
          hiddenWhenUnset: !0,
        },
        playing: {
          type: X.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        backgroundColor: { type: X.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: {
          title: `Start Time`,
          type: X.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
          hiddenWhenUnset: !0,
        },
        volume: {
          type: X.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
          hiddenWhenUnset: !0,
        },
        onEnd: { type: X.EventHandler },
        onSeeked: { type: X.EventHandler },
        onPause: { type: X.EventHandler },
        onPlay: { type: X.EventHandler },
        ...zr,
      }));
  }),
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki = e(() => {
    (h(),
      G(),
      r(),
      (Si = `var(--framer-icon-mask)`),
      (Ci = y(function (e, t) {
        return x(`svg`, { ...e, ref: t, children: e.children });
      })),
      (wi = O.create(Ci)),
      (Ti = y((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? x(wi, { ...a, layoutId: r, ref: t, children: i })
          : x(`svg`, { ...a, ref: t, children: i });
      })),
      (Ei = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 0 L 14 14 M 0 14 L 14 0" fill="transparent" height="14px" id="sBVv9jyNX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(3 3)" width="14px"/></svg>`),
      (Di = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (Oi = le(
        y(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = Di(e),
            l = pe(`1735819545`, Ei);
          return x(Ti, {
            ...c,
            className: V(`framer-PE39H`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: x(`use`, { href: l }),
          });
        }),
        [
          `.framer-PE39H { -webkit-mask: ${Si}; aspect-ratio: 1; display: block; mask: ${Si}; width: 20px; }`,
        ],
        `framer-PE39H`
      )),
      (Oi.displayName = `Arrow Up`),
      W(Oi, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: X.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: X.Number },
      }));
  });
function Ai(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
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
  Ui = e(() => {
    (h(),
      G(),
      I(),
      r(),
      ki(),
      (ji = q(Oi)),
      (Mi = [`BQ7Q2ozYT`, `uIx2aAImi`, `XJ_BhD_gL`]),
      (Ni = `framer-GjTQ2`),
      (Pi = {
        BQ7Q2ozYT: `framer-v-33pgkf`,
        uIx2aAImi: `framer-v-1wuex5j`,
        XJ_BhD_gL: `framer-v-14m35xj`,
      }),
      (Fi = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ii = (e, t) => `translate(-50%, -50%) ${t}`),
      (Li = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Ri = { "Default Hover": `uIx2aAImi`, Default: `BQ7Q2ozYT`, Phone: `XJ_BhD_gL` }),
      (zi = O.create(s)),
      (Bi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ri[r.variant] ?? r.variant ?? `BQ7Q2ozYT`,
      })),
      (Vi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Hi = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se();
          ke();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Bi(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: b,
              setVariant: C,
              variants: w,
            } = _e({
              cycleOrder: Mi,
              defaultVariant: `BQ7Q2ozYT`,
              ref: r,
              variant: d,
              variantClassNames: Pi,
            }),
            T = Vi(e, w),
            E = V(Ni),
            D = () => m !== `XJ_BhD_gL`;
          return x(A, {
            id: u ?? a,
            children: x(zi, {
              animate: w,
              initial: !1,
              children: x(Li, {
                value: Fi,
                children: S(O.div, {
                  ...p,
                  ..._,
                  className: V(E, `framer-33pgkf`, l, h),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: T,
                  layoutId: `BQ7Q2ozYT`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-042b2c85-d47f-4328-a709-b08971e77652)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 200,
                    borderBottomRightRadius: 200,
                    borderTopLeftRadius: 200,
                    borderTopRightRadius: 200,
                    ...c,
                  },
                  variants: {
                    XJ_BhD_gL: {
                      "--border-bottom-width": `0.7px`,
                      "--border-left-width": `0.7px`,
                      "--border-right-width": `0.7px`,
                      "--border-top-width": `0.7px`,
                    },
                  },
                  ...Ai(
                    {
                      uIx2aAImi: { "data-framer-name": `Default Hover` },
                      XJ_BhD_gL: { "data-framer-name": `Phone` },
                    },
                    m,
                    v
                  ),
                  children: [
                    D() &&
                      x(Oi, {
                        animated: !0,
                        className: `framer-kimne0`,
                        layoutDependency: T,
                        layoutId: `JIvj5Q0p4`,
                        style: { "--d1m4u3": 1.8, "--v9s4l2": `rgb(94, 94, 94)` },
                        ...Ai({ uIx2aAImi: { transformTemplate: Ii } }, m, v),
                      }),
                    x(Oi, {
                      animated: !0,
                      className: `framer-6xdwjq`,
                      layoutDependency: T,
                      layoutId: `nTnwkR_tp`,
                      style: { "--d1m4u3": 1.8, "--v9s4l2": `rgb(94, 94, 94)` },
                      transformTemplate: Ii,
                      ...Ai({ uIx2aAImi: { transformTemplate: void 0 } }, m, v),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-GjTQ2.framer-1dfj112, .framer-GjTQ2 .framer-1dfj112 { display: block; }`,
          `.framer-GjTQ2.framer-33pgkf { height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 30px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GjTQ2 .framer-kimne0 { aspect-ratio: 1 / 1; bottom: -9px; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: -9px; position: absolute; width: 12px; }`,
          `.framer-GjTQ2 .framer-6xdwjq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: 50%; position: absolute; top: 50%; width: 12px; }`,
          `.framer-GjTQ2.framer-v-1wuex5j .framer-kimne0 { bottom: unset; left: 50%; top: 50%; }`,
          `.framer-GjTQ2.framer-v-1wuex5j .framer-6xdwjq { left: unset; right: -9px; top: -9px; }`,
          `.framer-GjTQ2.framer-v-14m35xj.framer-33pgkf { height: 20px; width: 20px; }`,
          `.framer-GjTQ2.framer-v-14m35xj .framer-6xdwjq { height: var(--framer-aspect-ratio-supported, 8px); width: 8px; }`,
          `.framer-GjTQ2[data-border="true"]::after, .framer-GjTQ2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-GjTQ2`
      )),
      (Hi.displayName = `Arrow Up Button`),
      (Hi.defaultProps = { height: 30, width: 30 }),
      W(Hi, {
        variant: {
          options: [`BQ7Q2ozYT`, `uIx2aAImi`, `XJ_BhD_gL`],
          optionTitles: [`Default`, `Default Hover`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
      }),
      U(Hi, [{ explicitInter: !0, fonts: [] }, ...ji], { supportsExplicitInterCodegen: !0 }));
  });
function Wi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gi,
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
  sa = e(() => {
    (h(),
      G(),
      I(),
      r(),
      Ge(),
      Ue(),
      Ui(),
      (Gi = q(We)),
      (Ki = q(Ke)),
      (qi = q(Hi)),
      (Ji = [`qkrYQOGAB`, `SmCOLforN`, `NIqWXcqNM`, `XrmkfbpJm`, `ExJgxixw5`]),
      (Yi = `framer-Bde4k`),
      (Xi = {
        ExJgxixw5: `framer-v-1z06h8a`,
        NIqWXcqNM: `framer-v-1csy4zi`,
        qkrYQOGAB: `framer-v-pbw7qg`,
        SmCOLforN: `framer-v-1ccxd98`,
        XrmkfbpJm: `framer-v-w5cfvu`,
      }),
      (Zi = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Qi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($i = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ea = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ta = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (na = {
        "Image 1 > Image 2 - Hover": `SmCOLforN`,
        "Image 1 > Image 2": `qkrYQOGAB`,
        "Image 2 > Image 1 - Hover": `XrmkfbpJm`,
        "Image 2 > Image 1": `NIqWXcqNM`,
        "Phone - Image 1": `ExJgxixw5`,
      }),
      (ra = O.create(s)),
      (ia = ({
        comparePrice: e,
        height: t,
        hoverImage: n,
        id: r,
        image: i,
        newTab: a,
        price: o,
        productID: s,
        productLink: c,
        productTitle: l,
        width: u,
        ...d
      }) => ({
        ...d,
        gHyNxkisM: n ??
          d.gHyNxkisM ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/7fNtDdVrr7dtNaAS1K5UNsuapI.png?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/7fNtDdVrr7dtNaAS1K5UNsuapI.png?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/7fNtDdVrr7dtNaAS1K5UNsuapI.png?width=1000&height=1000 1000w`,
          },
        ISiooI_Nk: e ?? d.ISiooI_Nk ?? `75.00`,
        pwix9H5il: o ?? d.pwix9H5il ?? `50.00`,
        Qsm_s18Sw: l ?? d.Qsm_s18Sw ?? `Product Title`,
        RyDPh8SLj: c ?? d.RyDPh8SLj,
        Sia0WoBmp: s ?? d.Sia0WoBmp,
        v3H95AE40: a ?? d.v3H95AE40,
        variant: na[d.variant] ?? d.variant ?? `qkrYQOGAB`,
        WNXMchjgw: i ??
          d.WNXMchjgw ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/jlhPcK8JQkBn9wXH6IXA7jtlRRI.png?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/jlhPcK8JQkBn9wXH6IXA7jtlRRI.png?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/jlhPcK8JQkBn9wXH6IXA7jtlRRI.png?width=1000&height=1000 1000w`,
          },
      })),
      (aa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (oa = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se(),
            l = ke(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              Sia0WoBmp: h,
              WNXMchjgw: g,
              gHyNxkisM: _,
              Qsm_s18Sw: v,
              pwix9H5il: y,
              ISiooI_Nk: b,
              RyDPh8SLj: C,
              v3H95AE40: w,
              ...T
            } = ia(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: k,
              isLoading: ne,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = _e({
              cycleOrder: Ji,
              defaultVariant: `qkrYQOGAB`,
              ref: r,
              variant: m,
              variantClassNames: Xi,
            }),
            P = aa(e, N),
            { activeVariantCallback: F, delay: I } = Ie(E),
            re = F(async (...e) => {
              (j({ isHovered: !0 }), M(`SmCOLforN`));
            }),
            ie = F(async (...e) => {
              (j({ isHovered: !1 }), M(`qkrYQOGAB`));
            }),
            R = F(async (...e) => {
              (j({ isHovered: !0 }), M(`XrmkfbpJm`));
            }),
            ae = F(async (...e) => {
              (j({ isHovered: !0 }), M(`NIqWXcqNM`));
            }),
            z = F(async (...e) => {
              (j({ isHovered: !1 }), M(`NIqWXcqNM`));
            }),
            B = V(Yi),
            oe = $i(b);
          return x(A, {
            id: p ?? a,
            children: x(ra, {
              animate: N,
              initial: !1,
              children: x(ta, {
                value: Zi,
                children: x(ze, {
                  href: C,
                  motionChild: !0,
                  nodeId: `qkrYQOGAB`,
                  openInNewTab: w,
                  scopeId: `BWK3Ot8gH`,
                  children: S(O.a, {
                    ...T,
                    ...te,
                    className: `${V(B, `framer-pbw7qg`, d, D)} framer-1gfcedp`,
                    "data-border": !0,
                    "data-framer-name": `Image 1 > Image 2`,
                    "data-highlight": !0,
                    layoutDependency: P,
                    layoutId: `qkrYQOGAB`,
                    onMouseEnter: re,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgba(255, 255, 255, 0.84)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...u,
                    },
                    variants: {
                      ExJgxixw5: {
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                    },
                    ...Wi(
                      {
                        ExJgxixw5: {
                          "data-framer-name": `Phone - Image 1`,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                        NIqWXcqNM: { "data-framer-name": `Image 2 > Image 1`, onMouseEnter: R },
                        SmCOLforN: {
                          "data-framer-name": `Image 1 > Image 2 - Hover`,
                          onMouseLeave: ie,
                        },
                        XrmkfbpJm: {
                          "data-framer-name": `Image 2 > Image 1 - Hover`,
                          onMouseEnter: ae,
                          onMouseLeave: z,
                        },
                      },
                      E,
                      k
                    ),
                    children: [
                      S(O.div, {
                        className: `framer-1wap6kq`,
                        "data-framer-name": `Image Wrap`,
                        layoutDependency: P,
                        layoutId: `WeHt0PkVa`,
                        children: [
                          x(Pe, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: H(
                                (l?.y || 0) +
                                  0 +
                                  (((l?.height || 280) -
                                    0 -
                                    (Math.max(0, ((l?.height || 280) - 0 - 127.5) / 1) * 1 +
                                      127.5 +
                                      0)) /
                                    2 +
                                    0 +
                                    0) +
                                  (0 +
                                    (Math.max(0, ((l?.height || 280) - 0 - 127.5) / 1) * 1 -
                                      0 -
                                      (Math.max(0, ((l?.height || 280) - 0 - 127.5) / 1) * 1 - 0) *
                                        1) /
                                      2)
                              ),
                              pixelHeight: 1e3,
                              pixelWidth: 1e3,
                              sizes: `max(${l?.width || `100vw`}, 1px)`,
                              ...Qi(g),
                            },
                            className: `framer-nbbknb`,
                            "data-framer-name": `Product Image`,
                            layoutDependency: P,
                            layoutId: `iIJk3JiV_`,
                            style: { opacity: 1 },
                            variants: {
                              ExJgxixw5: { opacity: 1 },
                              NIqWXcqNM: { opacity: 1 },
                              SmCOLforN: { opacity: 0 },
                              XrmkfbpJm: { opacity: 1 },
                            },
                            ...Wi(
                              {
                                ExJgxixw5: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: H(
                                      (l?.y || 0) +
                                        0 +
                                        (((l?.height || 172) -
                                          0 -
                                          (Math.max(0, ((l?.height || 172) - 0 - 93.5) / 1) * 1 +
                                            93.5 +
                                            0)) /
                                          2 +
                                          0 +
                                          0) +
                                        (0 +
                                          (Math.max(0, ((l?.height || 172) - 0 - 93.5) / 1) * 1 -
                                            0 -
                                            (Math.max(0, ((l?.height || 172) - 0 - 93.5) / 1) * 1 -
                                              0) *
                                              1) /
                                            2)
                                    ),
                                    pixelHeight: 1e3,
                                    pixelWidth: 1e3,
                                    sizes: `max(${l?.width || `100vw`}, 1px)`,
                                    ...Qi(g),
                                  },
                                },
                              },
                              E,
                              k
                            ),
                          }),
                          x(Pe, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: H(
                                (l?.y || 0) +
                                  0 +
                                  (((l?.height || 280) -
                                    0 -
                                    (Math.max(0, ((l?.height || 280) - 0 - 127.5) / 1) * 1 +
                                      127.5 +
                                      0)) /
                                    2 +
                                    0 +
                                    0) +
                                  0
                              ),
                              pixelHeight: 1e3,
                              pixelWidth: 1e3,
                              sizes: l?.width || `100vw`,
                              ...Qi(_),
                            },
                            className: `framer-dla937`,
                            "data-framer-name": `Hover - Product Image`,
                            layoutDependency: P,
                            layoutId: `EL6n11ihr`,
                            style: { opacity: 1 },
                            variants: { ExJgxixw5: { opacity: 1 }, XrmkfbpJm: { opacity: 0 } },
                            ...Wi(
                              {
                                ExJgxixw5: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: H(
                                      (l?.y || 0) +
                                        0 +
                                        (((l?.height || 172) -
                                          0 -
                                          (Math.max(0, ((l?.height || 172) - 0 - 93.5) / 1) * 1 +
                                            93.5 +
                                            0)) /
                                          2 +
                                          0 +
                                          0) +
                                        0
                                    ),
                                    pixelHeight: 1e3,
                                    pixelWidth: 1e3,
                                    sizes: l?.width || `100vw`,
                                    ...Qi(_),
                                  },
                                },
                              },
                              E,
                              k
                            ),
                          }),
                        ],
                      }),
                      S(O.div, {
                        className: `framer-15zqggy`,
                        "data-framer-name": `Content`,
                        layoutDependency: P,
                        layoutId: `SShiSNOG6`,
                        children: [
                          x(O.div, {
                            className: `framer-1m0go39`,
                            "data-framer-name": `Product Title`,
                            layoutDependency: P,
                            layoutId: `ZmwXHHx9Q`,
                            children: x(he, {
                              __fromCanvasComponent: !0,
                              children: x(s, {
                                children: x(O.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                    "--framer-text-transform": `inherit`,
                                  },
                                  children: `Product Title`,
                                }),
                              }),
                              className: `framer-etpn9`,
                              "data-framer-name": `Text`,
                              fonts: [`FS;General Sans-medium`],
                              layoutDependency: P,
                              layoutId: `U2qbn9pOy`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Wi(
                                {
                                  ExJgxixw5: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                          "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                          "--framer-text-transform": `inherit`,
                                        },
                                        children: `Product Title`,
                                      }),
                                    }),
                                  },
                                },
                                E,
                                k
                              ),
                            }),
                          }),
                          S(O.div, {
                            className: `framer-10s19z`,
                            "data-framer-name": `Price`,
                            layoutDependency: P,
                            layoutId: `W4iQdqcVg`,
                            children: [
                              x(Y, {
                                children: x(L, {
                                  className: `framer-11aig45-container`,
                                  "data-framer-name": `Product Price`,
                                  isModuleExternal: !0,
                                  layoutDependency: P,
                                  layoutId: `xlr3xTse4-container`,
                                  name: `Product Price`,
                                  nodeId: `xlr3xTse4`,
                                  rendersWithMotion: !0,
                                  scopeId: `BWK3Ot8gH`,
                                  children: x(We, {
                                    canvasPrice: y,
                                    displayPrice: `minimum price`,
                                    format: {
                                      currencyCode: `USD`,
                                      showCurrency: !1,
                                      showDecimals: `Always show`,
                                      showSymbol: !0,
                                    },
                                    fromText: `from`,
                                    height: `100%`,
                                    id: `xlr3xTse4`,
                                    layoutId: `xlr3xTse4`,
                                    name: `Product Price`,
                                    regularColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    regularFont: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `0em`,
                                      lineHeight: `1.1em`,
                                      textAlign: `left`,
                                    },
                                    saleColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    saleFont: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `0em`,
                                      lineHeight: `1.1em`,
                                      textAlign: `left`,
                                    },
                                    shopifyProductID: h,
                                    width: `100%`,
                                    ...Wi(
                                      {
                                        ExJgxixw5: {
                                          regularFont: {
                                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                            fontSize: `12px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.1em`,
                                            textAlign: `left`,
                                          },
                                          saleFont: {
                                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                            fontSize: `12px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.1em`,
                                            textAlign: `left`,
                                          },
                                        },
                                      },
                                      E,
                                      k
                                    ),
                                  }),
                                }),
                              }),
                              oe !== !1 &&
                                x(Y, {
                                  children: x(L, {
                                    className: `framer-aqkfcc-container`,
                                    "data-framer-name": `Product Compare Price`,
                                    isModuleExternal: !0,
                                    layoutDependency: P,
                                    layoutId: `fIAIdnYDi-container`,
                                    name: `Product Compare Price`,
                                    nodeId: `fIAIdnYDi`,
                                    rendersWithMotion: !0,
                                    scopeId: `BWK3Ot8gH`,
                                    children: x(Ke, {
                                      canvasPrice: b,
                                      color: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                      compareAtPrefix: ``,
                                      font: {
                                        fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                        fontSize: `14px`,
                                        fontStyle: `normal`,
                                        fontWeight: 500,
                                        letterSpacing: `-0.02em`,
                                        lineHeight: `1.1em`,
                                        textAlign: `left`,
                                      },
                                      format: {
                                        currencyCode: `USD`,
                                        showCurrency: !1,
                                        showDecimals: `Always show`,
                                        showSymbol: !0,
                                      },
                                      height: `100%`,
                                      id: `fIAIdnYDi`,
                                      layoutId: `fIAIdnYDi`,
                                      name: `Product Compare Price`,
                                      shopifyProductID: h,
                                      strikethrough: !0,
                                      strikethroughColor: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                      strikethroughSize: 1.3,
                                      width: `100%`,
                                      ...Wi(
                                        {
                                          ExJgxixw5: {
                                            font: {
                                              fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                              fontSize: `12px`,
                                              fontStyle: `normal`,
                                              fontWeight: 500,
                                              letterSpacing: `-0.02em`,
                                              lineHeight: `1.1em`,
                                              textAlign: `left`,
                                            },
                                          },
                                        },
                                        E,
                                        k
                                      ),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          x(Y, {
                            height: 30,
                            width: `30px`,
                            y:
                              (l?.y || 0) +
                              0 +
                              (((l?.height || 280) -
                                0 -
                                (Math.max(0, ((l?.height || 280) - 0 - 127.5) / 1) * 1 +
                                  127.5 +
                                  0)) /
                                2 +
                                Math.max(0, ((l?.height || 280) - 0 - 127.5) / 1) * 1 +
                                0) +
                              127.5 -
                              40,
                            ...Wi(
                              {
                                ExJgxixw5: {
                                  width: void 0,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    (((l?.height || 172) -
                                      0 -
                                      (Math.max(0, ((l?.height || 172) - 0 - 93.5) / 1) * 1 +
                                        93.5 +
                                        0)) /
                                      2 +
                                      Math.max(0, ((l?.height || 172) - 0 - 93.5) / 1) * 1 +
                                      0) +
                                    93.5 -
                                    36,
                                },
                              },
                              E,
                              k
                            ),
                            children: x(L, {
                              className: `framer-1r2dzpl-container`,
                              layoutDependency: P,
                              layoutId: `O3VJ0f3F5-container`,
                              nodeId: `O3VJ0f3F5`,
                              rendersWithMotion: !0,
                              scopeId: `BWK3Ot8gH`,
                              children: x(Hi, {
                                height: `100%`,
                                id: `O3VJ0f3F5`,
                                layoutId: `O3VJ0f3F5`,
                                style: { height: `100%`, width: `100%` },
                                variant: ea(`BQ7Q2ozYT`),
                                width: `100%`,
                                ...Wi(
                                  {
                                    ExJgxixw5: { variant: ea(`XJ_BhD_gL`) },
                                    SmCOLforN: { variant: ea(`uIx2aAImi`) },
                                    XrmkfbpJm: { variant: ea(`uIx2aAImi`) },
                                  },
                                  E,
                                  k
                                ),
                              }),
                            }),
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
          `.framer-Bde4k.framer-1gfcedp, .framer-Bde4k .framer-1gfcedp { display: block; }`,
          `.framer-Bde4k.framer-pbw7qg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 280px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 233px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Bde4k .framer-1wap6kq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Bde4k .framer-nbbknb { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 1; }`,
          `.framer-Bde4k .framer-dla937 { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-Bde4k .framer-15zqggy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 16px 10px 16px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-Bde4k .framer-1m0go39 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; user-select: none; width: 100%; z-index: 2; }`,
          `.framer-Bde4k .framer-etpn9 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Bde4k .framer-10s19z { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 18px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; user-select: none; width: 100%; z-index: 2; }`,
          `.framer-Bde4k .framer-11aig45-container, .framer-Bde4k .framer-aqkfcc-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Bde4k .framer-1r2dzpl-container { bottom: 10px; flex: none; height: 30px; position: absolute; right: 10px; width: 30px; z-index: 2; }`,
          `.framer-Bde4k.framer-v-1csy4zi .framer-nbbknb, .framer-Bde4k.framer-v-w5cfvu .framer-nbbknb { z-index: 0; }`,
          `.framer-Bde4k.framer-v-1csy4zi .framer-dla937, .framer-Bde4k.framer-v-w5cfvu .framer-dla937 { z-index: 1; }`,
          `.framer-Bde4k.framer-v-1z06h8a.framer-pbw7qg { height: 172px; width: 135px; }`,
          `.framer-Bde4k.framer-v-1z06h8a .framer-15zqggy { padding: 6px 8px 6px 8px; }`,
          `.framer-Bde4k.framer-v-1z06h8a .framer-10s19z { height: 14px; }`,
          `.framer-Bde4k.framer-v-1z06h8a .framer-1r2dzpl-container { bottom: 6px; height: auto; right: 5px; width: auto; }`,
          `.framer-Bde4k[data-border="true"]::after, .framer-Bde4k [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Bde4k`
      )),
      (oa.displayName = `Floating Card`),
      (oa.defaultProps = { height: 280, width: 233 }),
      W(oa, {
        variant: {
          options: [`qkrYQOGAB`, `SmCOLforN`, `NIqWXcqNM`, `XrmkfbpJm`, `ExJgxixw5`],
          optionTitles: [
            `Image 1 > Image 2`,
            `Image 1 > Image 2 - Hover`,
            `Image 2 > Image 1`,
            `Image 2 > Image 1 - Hover`,
            `Phone - Image 1`,
          ],
          title: `Variant`,
          type: X.Enum,
        },
        Sia0WoBmp: { defaultValue: ``, title: `Product ID`, type: X.String },
        onSia0WoBmpChange: { changes: `Sia0WoBmp`, type: X.ChangeHandler },
        WNXMchjgw: {
          __defaultAssetReference: `data:framer/asset-reference,jlhPcK8JQkBn9wXH6IXA7jtlRRI.png?originalFilename=oversized+graphic+sweatshirt+in+Vintage+Steel+Blue.png&width=1000&height=1000`,
          title: `Image`,
          type: X.ResponsiveImage,
        },
        gHyNxkisM: {
          __defaultAssetReference: `data:framer/asset-reference,7fNtDdVrr7dtNaAS1K5UNsuapI.png?originalFilename=oversized+graphic+tee+in+Vintage+Steel+Blue.png&width=1000&height=1000`,
          title: `Hover - Image`,
          type: X.ResponsiveImage,
        },
        Qsm_s18Sw: {
          defaultValue: `Product Title`,
          displayTextArea: !1,
          title: `Product Title`,
          type: X.String,
        },
        onQsm_s18SwChange: { changes: `Qsm_s18Sw`, type: X.ChangeHandler },
        pwix9H5il: { defaultValue: `50.00`, title: `Price`, type: X.String },
        onpwix9H5ilChange: { changes: `pwix9H5il`, type: X.ChangeHandler },
        ISiooI_Nk: { defaultValue: `75.00`, title: `Compare Price`, type: X.String },
        onISiooI_NkChange: { changes: `ISiooI_Nk`, type: X.ChangeHandler },
        RyDPh8SLj: { title: `Product Link`, type: X.Link },
        v3H95AE40: { defaultValue: !1, title: `New Tab`, type: X.Boolean },
        onv3H95AE40Change: { changes: `v3H95AE40`, type: X.ChangeHandler },
      }),
      U(
        oa,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Gi,
          ...Ki,
          ...qi,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (oa.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(Hi, {}, t)])) }));
  });
function ca(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var la,
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
  xa = e(() => {
    (h(),
      G(),
      I(),
      r(),
      (la = [`bH8RA73ON`, `X_uWXE8hI`, `TylmZRlYI`]),
      (ua = `framer-OGshp`),
      (da = {
        bH8RA73ON: `framer-v-13uy9t7`,
        TylmZRlYI: `framer-v-da2m67`,
        X_uWXE8hI: `framer-v-14akk5p`,
      }),
      (fa = { delay: 0, duration: 10, ease: [0, 0, 1, 1], type: `tween` }),
      (pa = { duration: 0, type: `tween` }),
      (ma = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ha = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (ga = { Appear: `X_uWXE8hI`, Fill: `bH8RA73ON`, Static: `TylmZRlYI` }),
      (_a = O.create(s)),
      (va = ({ click: e, fontSize: t, height: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        cDLoNi9zv: t ?? o.cDLoNi9zv ?? 56,
        FSHUbnXG9: e ?? o.FSHUbnXG9,
        TAV7jufp3: i ?? o.TAV7jufp3 ?? `Jacket`,
        variant: ga[o.variant] ?? o.variant ?? `bH8RA73ON`,
      })),
      (ya = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ba = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              TAV7jufp3: m,
              FSHUbnXG9: h,
              cDLoNi9zv: g,
              ..._
            } = va(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: ee,
            } = _e({
              cycleOrder: la,
              defaultVariant: `bH8RA73ON`,
              ref: r,
              variant: p,
              variantClassNames: da,
            }),
            te = ya(e, ee),
            { activeVariantCallback: k, delay: ne } = Ie(v),
            j = k(async (...e) => {
              if ((E({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            });
          oe(v, {
            X_uWXE8hI: k(async (...e) => {
              await ne(() => D(`bH8RA73ON`, !0), 300);
            }),
          });
          let M = V(ua);
          return x(A, {
            id: d ?? a,
            children: x(_a, {
              animate: ee,
              initial: !1,
              children: x(ha, {
                value: fa,
                ...ca({ TylmZRlYI: { value: ma }, X_uWXE8hI: { value: pa } }, v, w),
                children: S(O.div, {
                  ..._,
                  ...C,
                  className: V(M, `framer-13uy9t7`, u, y),
                  "data-framer-name": `Fill`,
                  "data-highlight": !0,
                  layoutDependency: te,
                  layoutId: `bH8RA73ON`,
                  onTap: j,
                  ref: r,
                  style: { ...l },
                  ...ca(
                    {
                      TylmZRlYI: { "data-framer-name": `Static` },
                      X_uWXE8hI: { "data-framer-name": `Appear` },
                    },
                    v,
                    w
                  ),
                  children: [
                    x(O.div, {
                      className: `framer-qtdah9`,
                      "data-framer-name": `Clip`,
                      layoutDependency: te,
                      layoutId: `yYGIzCg9Y`,
                      children: x(he, {
                        __fromCanvasComponent: !0,
                        children: x(s, {
                          children: x(O.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXNlbWlib2xk`,
                              "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                              "--framer-font-size": `calc(var(--variable-reference-cDLoNi9zv-m3yzRu7Y1) * 1px)`,
                              "--framer-font-weight": `600`,
                              "--framer-letter-spacing": `-0.03em`,
                              "--framer-line-height": `0.9em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                            },
                            children: `Jacket`,
                          }),
                        }),
                        className: `framer-1sxs3es`,
                        "data-framer-name": `Text`,
                        fonts: [`FS;General Sans-semibold`],
                        layoutDependency: te,
                        layoutId: `Z2wNuETm5`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                          "--framer-paragraph-spacing": `0px`,
                          "--variable-reference-cDLoNi9zv-m3yzRu7Y1": g,
                        },
                        text: m,
                        variants: { TylmZRlYI: { "--extracted-r6o4lv": `rgba(255, 255, 255, 0)` } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...ca(
                          {
                            TylmZRlYI: {
                              children: x(s, {
                                children: x(O.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXNlbWlib2xk`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-size": `calc(var(--variable-reference-cDLoNi9zv-m3yzRu7Y1) * 1px)`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0))`,
                                  },
                                  children: `Jacket`,
                                }),
                              }),
                            },
                          },
                          v,
                          w
                        ),
                      }),
                    }),
                    x(he, {
                      __fromCanvasComponent: !0,
                      children: x(s, {
                        children: x(O.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXNlbWlib2xk`,
                            "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                            "--framer-font-size": `calc(var(--variable-reference-cDLoNi9zv-m3yzRu7Y1) * 1px)`,
                            "--framer-font-weight": `600`,
                            "--framer-letter-spacing": `-0.03em`,
                            "--framer-line-height": `0.9em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))`,
                          },
                          children: `Jacket`,
                        }),
                      }),
                      className: `framer-akryt8`,
                      "data-framer-name": `Text`,
                      fonts: [`FS;General Sans-semibold`],
                      layoutDependency: te,
                      layoutId: `pKQFKGTRL`,
                      style: {
                        "--extracted-r6o4lv": `rgba(255, 255, 255, 0.7)`,
                        "--framer-paragraph-spacing": `0px`,
                        "--variable-reference-cDLoNi9zv-m3yzRu7Y1": g,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-OGshp.framer-1cee244, .framer-OGshp .framer-1cee244 { display: block; }`,
          `.framer-OGshp.framer-13uy9t7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 8px 0px; position: relative; width: min-content; }`,
          `.framer-OGshp .framer-qtdah9 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 6px 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-OGshp .framer-1sxs3es { flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-OGshp .framer-akryt8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }`,
          `.framer-OGshp.framer-v-14akk5p .framer-qtdah9 { width: 1%; }`,
        ],
        `framer-OGshp`
      )),
      (ba.displayName = `Title`),
      (ba.defaultProps = { height: 58.5, width: 174.5 }),
      W(ba, {
        variant: {
          options: [`bH8RA73ON`, `X_uWXE8hI`, `TylmZRlYI`],
          optionTitles: [`Fill`, `Appear`, `Static`],
          title: `Variant`,
          type: X.Enum,
        },
        TAV7jufp3: { defaultValue: `Jacket`, displayTextArea: !1, title: `Title`, type: X.String },
        onTAV7jufp3Change: { changes: `TAV7jufp3`, type: X.ChangeHandler },
        FSHUbnXG9: { title: `Click`, type: X.EventHandler },
        cDLoNi9zv: { defaultValue: 56, title: `Font Size`, type: X.Number },
        oncDLoNi9zvChange: { changes: `cDLoNi9zv`, type: X.ChangeHandler },
      }),
      U(
        ba,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/3ZLMEXZEQPLTEPMHTQDAUXP5ZZXCZAEN.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Sa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ca,
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
  La = e(() => {
    (h(),
      G(),
      I(),
      r(),
      xa(),
      (Ca = q(ba)),
      (wa = [`Vvpku7_YI`, `zS7E0BxZ3`, `nSPZ53s9r`, `vfaDTexyb`, `PSXRX4dr8`]),
      (Ta = `framer-K3wNZ`),
      (Ea = {
        nSPZ53s9r: `framer-v-1hq6ta5`,
        PSXRX4dr8: `framer-v-jen147`,
        vfaDTexyb: `framer-v-r5dyg0`,
        Vvpku7_YI: `framer-v-9j14yn`,
        zS7E0BxZ3: `framer-v-3fdfa4`,
      }),
      (Da = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Oa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ka = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Aa = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (ja = {
        1: `zS7E0BxZ3`,
        2: `nSPZ53s9r`,
        3: `vfaDTexyb`,
        4: `PSXRX4dr8`,
        Default: `Vvpku7_YI`,
      }),
      (Ma = O.create(s)),
      (Na = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Pa = ({
        cat1: e,
        cat2: t,
        cat3: n,
        cat4: r,
        click1: i,
        click2: a,
        click3: o,
        click4: s,
        fontSize: c,
        gap: l,
        height: u,
        id: d,
        width: f,
        ...p
      }) => ({
        ...p,
        B_IVCsyZn: o ?? p.B_IVCsyZn,
        E9qOK3piQ: a ?? p.E9qOK3piQ,
        ER7JhPrz2: n ?? p.ER7JhPrz2 ?? `Tees`,
        JXyBd73ML: r ?? p.JXyBd73ML ?? `Hoodies`,
        lfP0soqHj: i ?? p.lfP0soqHj,
        lPYxJHrzA: t ?? p.lPYxJHrzA ?? `Pants`,
        OVFaUX39U: e ?? p.OVFaUX39U ?? `Jacket`,
        RvuXg_esX: l ?? p.RvuXg_esX ?? `4px 28px`,
        TlqZbe4rA: s ?? p.TlqZbe4rA,
        variant: ja[p.variant] ?? p.variant ?? `Vvpku7_YI`,
        vWxRL4OWL: c ?? p.vWxRL4OWL ?? 56,
      })),
      (Fa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ia = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              lfP0soqHj: m,
              E9qOK3piQ: h,
              B_IVCsyZn: g,
              TlqZbe4rA: _,
              OVFaUX39U: v,
              onOVFaUX39UChange: y,
              lPYxJHrzA: b,
              onlPYxJHrzAChange: C,
              ER7JhPrz2: w,
              onER7JhPrz2Change: T,
              JXyBd73ML: E,
              onJXyBd73MLChange: D,
              vWxRL4OWL: ee,
              onvWxRL4OWLChange: te,
              RvuXg_esX: k,
              ...ne
            } = Pa(e),
            [j, M] = Na(v, y),
            [N, P] = Na(b, C),
            [F, I] = Na(w, T),
            [re, ie] = Na(E, D),
            [R, ae] = Na(ee, te),
            {
              baseVariant: z,
              classNames: B,
              clearLoadingGesture: oe,
              gestureHandlers: se,
              gestureVariant: ce,
              isLoading: le,
              setGestureState: ue,
              setVariant: H,
              variants: de,
            } = _e({
              cycleOrder: wa,
              defaultVariant: `Vvpku7_YI`,
              ref: r,
              variant: p,
              variantClassNames: Ea,
            }),
            fe = Fa(e, de),
            { activeVariantCallback: U, delay: pe } = Ie(z),
            W = U(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            me = U(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            he = U(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
            }),
            ge = U(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
            }),
            G = V(Ta);
          return x(A, {
            id: d ?? a,
            children: x(Ma, {
              animate: de,
              initial: !1,
              children: x(Aa, {
                value: Oa,
                children: S(O.div, {
                  ...ne,
                  ...se,
                  className: V(G, `framer-9j14yn`, u, B),
                  "data-framer-name": `Default`,
                  layoutDependency: fe,
                  layoutId: `Vvpku7_YI`,
                  ref: r,
                  style: { "--1658qad": Da(k), ...l },
                  ...Sa(
                    {
                      nSPZ53s9r: { "data-framer-name": `2` },
                      PSXRX4dr8: { "data-framer-name": `4` },
                      vfaDTexyb: { "data-framer-name": `3` },
                      zS7E0BxZ3: { "data-framer-name": `1` },
                    },
                    z,
                    ce
                  ),
                  children: [
                    x(Y, {
                      height: 58,
                      y: (c?.y || 0) + 0,
                      children: x(L, {
                        className: `framer-14s35qb-container`,
                        layoutDependency: fe,
                        layoutId: `efjJxEIOF-container`,
                        nodeId: `efjJxEIOF`,
                        rendersWithMotion: !0,
                        scopeId: `LmKEM65GP`,
                        children: x(ba, {
                          cDLoNi9zv: R,
                          FSHUbnXG9: W,
                          height: `100%`,
                          id: `efjJxEIOF`,
                          layoutId: `efjJxEIOF`,
                          oncDLoNi9zvChange: ae,
                          onTAV7jufp3Change: M,
                          TAV7jufp3: j,
                          variant: ka(`TylmZRlYI`),
                          width: `100%`,
                          ...Sa({ zS7E0BxZ3: { variant: ka(`X_uWXE8hI`) } }, z, ce),
                        }),
                      }),
                    }),
                    x(Y, {
                      height: 58,
                      y: (c?.y || 0) + 0,
                      children: x(L, {
                        className: `framer-11r6fby-container`,
                        layoutDependency: fe,
                        layoutId: `uIRfIbMeX-container`,
                        nodeId: `uIRfIbMeX`,
                        rendersWithMotion: !0,
                        scopeId: `LmKEM65GP`,
                        children: x(ba, {
                          cDLoNi9zv: R,
                          FSHUbnXG9: me,
                          height: `100%`,
                          id: `uIRfIbMeX`,
                          layoutId: `uIRfIbMeX`,
                          oncDLoNi9zvChange: ae,
                          onTAV7jufp3Change: P,
                          TAV7jufp3: N,
                          variant: ka(`TylmZRlYI`),
                          width: `100%`,
                          ...Sa({ nSPZ53s9r: { variant: ka(`X_uWXE8hI`) } }, z, ce),
                        }),
                      }),
                    }),
                    x(Y, {
                      height: 58,
                      y: (c?.y || 0) + 0,
                      children: x(L, {
                        className: `framer-gme44v-container`,
                        layoutDependency: fe,
                        layoutId: `jOFm1Wnid-container`,
                        nodeId: `jOFm1Wnid`,
                        rendersWithMotion: !0,
                        scopeId: `LmKEM65GP`,
                        children: x(ba, {
                          cDLoNi9zv: R,
                          FSHUbnXG9: he,
                          height: `100%`,
                          id: `jOFm1Wnid`,
                          layoutId: `jOFm1Wnid`,
                          oncDLoNi9zvChange: ae,
                          onTAV7jufp3Change: I,
                          TAV7jufp3: F,
                          variant: ka(`TylmZRlYI`),
                          width: `100%`,
                          ...Sa({ vfaDTexyb: { variant: ka(`X_uWXE8hI`) } }, z, ce),
                        }),
                      }),
                    }),
                    x(Y, {
                      height: 58,
                      y: (c?.y || 0) + 0,
                      children: x(L, {
                        className: `framer-adft12-container`,
                        layoutDependency: fe,
                        layoutId: `T1w5FoNAd-container`,
                        nodeId: `T1w5FoNAd`,
                        rendersWithMotion: !0,
                        scopeId: `LmKEM65GP`,
                        children: x(ba, {
                          cDLoNi9zv: R,
                          FSHUbnXG9: ge,
                          height: `100%`,
                          id: `T1w5FoNAd`,
                          layoutId: `T1w5FoNAd`,
                          oncDLoNi9zvChange: ae,
                          onTAV7jufp3Change: ie,
                          TAV7jufp3: re,
                          variant: ka(`TylmZRlYI`),
                          width: `100%`,
                          ...Sa({ PSXRX4dr8: { variant: ka(`X_uWXE8hI`) } }, z, ce),
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
          `.framer-K3wNZ.framer-13q1mn6, .framer-K3wNZ .framer-13q1mn6 { display: block; }`,
          `.framer-K3wNZ.framer-9j14yn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; gap: var(--1658qad); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 735px; }`,
          `.framer-K3wNZ .framer-14s35qb-container, .framer-K3wNZ .framer-11r6fby-container, .framer-K3wNZ .framer-gme44v-container, .framer-K3wNZ .framer-adft12-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-K3wNZ.framer-v-jen147.framer-9j14yn { width: 200px; }`,
        ],
        `framer-K3wNZ`
      )),
      (Ia.displayName = `Top Cat Bar`),
      (Ia.defaultProps = { height: 58.5, width: 734.5 }),
      W(Ia, {
        variant: {
          options: [`Vvpku7_YI`, `zS7E0BxZ3`, `nSPZ53s9r`, `vfaDTexyb`, `PSXRX4dr8`],
          optionTitles: [`Default`, `1`, `2`, `3`, `4`],
          title: `Variant`,
          type: X.Enum,
        },
        lfP0soqHj: { title: `Click 1`, type: X.EventHandler },
        E9qOK3piQ: { title: `Click 2`, type: X.EventHandler },
        B_IVCsyZn: { title: `Click 3`, type: X.EventHandler },
        TlqZbe4rA: { title: `Click 4`, type: X.EventHandler },
        OVFaUX39U: { defaultValue: `Jacket`, displayTextArea: !1, title: `Cat 1`, type: X.String },
        onOVFaUX39UChange: { changes: `OVFaUX39U`, type: X.ChangeHandler },
        lPYxJHrzA: { defaultValue: `Pants`, displayTextArea: !1, title: `Cat 2`, type: X.String },
        onlPYxJHrzAChange: { changes: `lPYxJHrzA`, type: X.ChangeHandler },
        ER7JhPrz2: { defaultValue: `Tees`, displayTextArea: !1, title: `Cat 3`, type: X.String },
        onER7JhPrz2Change: { changes: `ER7JhPrz2`, type: X.ChangeHandler },
        JXyBd73ML: { defaultValue: `Hoodies`, displayTextArea: !1, title: `Cat 4`, type: X.String },
        onJXyBd73MLChange: { changes: `JXyBd73ML`, type: X.ChangeHandler },
        vWxRL4OWL: { defaultValue: 56, title: `Font Size`, type: X.Number },
        onvWxRL4OWLChange: { changes: `vWxRL4OWL`, type: X.ChangeHandler },
        RvuXg_esX: { defaultValue: `4px 28px`, title: `Gap`, type: X.Gap },
      }),
      U(Ia, [{ explicitInter: !0, fonts: [] }, ...Ca], { supportsExplicitInterCodegen: !0 }),
      (Ia.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(ba, {}, t)])) }));
  });
function Ra(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var za,
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
  _o = e(() => {
    (h(),
      G(),
      I(),
      r(),
      xi(),
      Je(),
      sa(),
      La(),
      (za = q(Ia)),
      (Ba = q(di)),
      (Va = q(oa)),
      (Ha = Z(di)),
      (Ua = Z(oa)),
      (Wa = [`vyUiV_jLp`, `seXncW1he`, `RRXNCTLIg`, `k83o_U40M`, `IepcpNGvh`]),
      (Ga = `framer-5vWGX`),
      (Ka = {
        IepcpNGvh: `framer-v-8q6aa6`,
        k83o_U40M: `framer-v-1mr91wl`,
        RRXNCTLIg: `framer-v-111owsx`,
        seXncW1he: `framer-v-11kvyoi`,
        vyUiV_jLp: `framer-v-106a1aj`,
      }),
      (qa = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Ja = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ya = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Xa = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (Za = (e) => !e),
      (Qa = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($a = () => ({
        from: { alias: `hPKyYMImU`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `hPKyYMImU`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `hPKyYMImU`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Jacket` },
          type: `BinaryOperation`,
        },
      })),
      (eo = () => ({
        from: { alias: `hPKyYMImU`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `hPKyYMImU`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `hPKyYMImU`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Pants` },
          type: `BinaryOperation`,
        },
      })),
      (to = () => ({
        from: { alias: `hPKyYMImU`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `hPKyYMImU`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `hPKyYMImU`, name: `jUaWCseQj`, type: `Identifier` },
            { type: `LiteralValue`, value: `T-Shirt` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (no = () => ({
        from: { alias: `hPKyYMImU`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `hPKyYMImU`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `hPKyYMImU`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `hPKyYMImU`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Hoodie` },
          type: `BinaryOperation`,
        },
      })),
      (ro = ({ query: e, pageSize: t, children: n }) => n(Ne(e))),
      (io = () => ({
        from: { alias: `FDyTMcxtd`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `FDyTMcxtd`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `FDyTMcxtd`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Jacket` },
          type: `BinaryOperation`,
        },
      })),
      (ao = () => ({
        from: { alias: `FDyTMcxtd`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `FDyTMcxtd`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `FDyTMcxtd`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Pants` },
          type: `BinaryOperation`,
        },
      })),
      (oo = () => ({
        from: { alias: `FDyTMcxtd`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `FDyTMcxtd`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `FDyTMcxtd`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `T-Shirt` },
          type: `BinaryOperation`,
        },
      })),
      (so = () => ({
        from: { alias: `FDyTMcxtd`, data: qe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `FDyTMcxtd`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `FDyTMcxtd`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `FDyTMcxtd`, name: `jUaWCseQj`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `Hoodie` },
          type: `BinaryOperation`,
        },
      })),
      (co = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (lo = {
        "Variant 4 with its Product": `IepcpNGvh`,
        "Video 1 with its Product": `seXncW1he`,
        "Video 2 with its Product": `RRXNCTLIg`,
        "Video 3 with its Product": `k83o_U40M`,
        Default: `vyUiV_jLp`,
      }),
      (uo = O.create(s)),
      (fo = {
        "Image 1 > Image 2 - Hover": `SmCOLforN`,
        "Image 1 > Image 2": `qkrYQOGAB`,
        "Image 2 > Image 1 - Hover": `XrmkfbpJm`,
        "Image 2 > Image 1": `NIqWXcqNM`,
        "Phone - Image 1": `ExJgxixw5`,
      }),
      (po = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (mo = ({
        cat1: e,
        cat2: t,
        cat3: n,
        cat4: r,
        catFontSize: i,
        catGap: a,
        catTopPadding: o,
        floatCardPadding: s,
        floatCardVariant: c,
        height: l,
        id: u,
        leftFloatCardHide: d,
        thumbnail1: f,
        thumbnail2: p,
        thumbnail3: m,
        thumbnail4: h,
        video1: g,
        video2: _,
        video3: v,
        video4: y,
        width: b,
        ...x
      }) => ({
        ...x,
        exycHua8_: a ?? x.exycHua8_ ?? `4px 28px`,
        iCEwD15eq: y ?? x.iCEwD15eq ?? `../../assets/misc/xb9uVItBSbOJfoQKQmRfDyRoaEo.mp4`,
        iH8FTtBrT: _ ?? x.iH8FTtBrT ?? `../../assets/misc/qeYPOEiKOY9BacFDINoIhTVinQ.mp4`,
        jYYssv0lz: t ?? x.jYYssv0lz ?? `Pants`,
        k6clfptua: o ?? x.k6clfptua ?? `64px 20px 0px 20px`,
        M0aW2V0lL: n ?? x.M0aW2V0lL ?? `Tees`,
        Mst4_FB3C: fo[c] ?? c ?? x.Mst4_FB3C ?? `qkrYQOGAB`,
        Ovn7mwmP5: h ??
          x.Ovn7mwmP5 ?? {
            pixelHeight: 1148,
            pixelWidth: 1808,
            src: `../../assets/images/ecDrUJOjwliI8kui8IcGrKIJGk.png`,
            srcSet: `https://framerusercontent.com/images/ecDrUJOjwliI8kui8IcGrKIJGk.png?scale-down-to=512&width=1808&height=1148 512w,https://framerusercontent.com/images/ecDrUJOjwliI8kui8IcGrKIJGk.png?scale-down-to=1024&width=1808&height=1148 1024w,../../assets/images/ecDrUJOjwliI8kui8IcGrKIJGk.png 1808w`,
          },
        OyhE4oVrR: m ??
          x.OyhE4oVrR ?? {
            pixelHeight: 1148,
            pixelWidth: 1810,
            src: `../../assets/images/HzBuuNgzvIMT2eStchRP2DFPS8.png`,
            srcSet: `https://framerusercontent.com/images/HzBuuNgzvIMT2eStchRP2DFPS8.png?scale-down-to=512&width=1810&height=1148 512w,https://framerusercontent.com/images/HzBuuNgzvIMT2eStchRP2DFPS8.png?scale-down-to=1024&width=1810&height=1148 1024w,../../assets/images/HzBuuNgzvIMT2eStchRP2DFPS8.png 1810w`,
          },
        q5u79Sios: p ??
          x.q5u79Sios ?? {
            pixelHeight: 1146,
            pixelWidth: 1810,
            src: `../../assets/images/HFYKBGW9GKwR3g3ys6KN2XlnGk.png`,
            srcSet: `https://framerusercontent.com/images/HFYKBGW9GKwR3g3ys6KN2XlnGk.png?scale-down-to=512&width=1810&height=1146 512w,https://framerusercontent.com/images/HFYKBGW9GKwR3g3ys6KN2XlnGk.png?scale-down-to=1024&width=1810&height=1146 1024w,../../assets/images/HFYKBGW9GKwR3g3ys6KN2XlnGk.png 1810w`,
          },
        rKQP7Jbc9: i ?? x.rKQP7Jbc9 ?? 56,
        rrTpiqd6j: v ?? x.rrTpiqd6j ?? `../../assets/misc/dvzUSnmkpCymqAVT1bLYMM1s.mp4`,
        sARXIw2IL: r ?? x.sARXIw2IL ?? `Hoodies`,
        tczZyBrNS: d ?? x.tczZyBrNS ?? !1,
        VABGpTJ31: s ?? x.VABGpTJ31 ?? `0px 40px 40px 40px`,
        variant: lo[x.variant] ?? x.variant ?? `vyUiV_jLp`,
        wgbmbcnjQ: g ?? x.wgbmbcnjQ ?? `../../assets/misc/zcfTuURQ6fj16eWY3wR4d8JrpMQ.mp4`,
        WwVVN9U3m: f ??
          x.WwVVN9U3m ?? {
            pixelHeight: 1146,
            pixelWidth: 1808,
            src: `../../assets/images/H889ajZgDHgSKOWHNuRseyiRp2c.png`,
            srcSet: `https://framerusercontent.com/images/H889ajZgDHgSKOWHNuRseyiRp2c.png?scale-down-to=512&width=1808&height=1146 512w,https://framerusercontent.com/images/H889ajZgDHgSKOWHNuRseyiRp2c.png?scale-down-to=1024&width=1808&height=1146 1024w,../../assets/images/H889ajZgDHgSKOWHNuRseyiRp2c.png 1808w`,
          },
        X777NLgv8: e ?? x.X777NLgv8 ?? `Jacket`,
      })),
      (ho = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (go = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              X777NLgv8: m,
              onX777NLgv8Change: h,
              wgbmbcnjQ: g,
              WwVVN9U3m: _,
              jYYssv0lz: y,
              onjYYssv0lzChange: b,
              iH8FTtBrT: C,
              q5u79Sios: w,
              M0aW2V0lL: T,
              onM0aW2V0lLChange: E,
              rrTpiqd6j: D,
              OyhE4oVrR: ee,
              sARXIw2IL: te,
              onsARXIw2ILChange: k,
              iCEwD15eq: ne,
              Ovn7mwmP5: j,
              rKQP7Jbc9: M,
              onrKQP7Jbc9Change: N,
              exycHua8_: P,
              k6clfptua: F,
              Mst4_FB3C: I,
              tczZyBrNS: re,
              VABGpTJ31: ie,
              ...R
            } = mo(e),
            [ae, z] = po(m, h),
            [se, ce] = po(y, b),
            [le, ue] = po(T, E),
            [H, de] = po(te, k),
            [fe, U] = po(M, N),
            {
              baseVariant: pe,
              classNames: W,
              clearLoadingGesture: me,
              gestureHandlers: he,
              gestureVariant: ge,
              isLoading: G,
              setGestureState: K,
              setVariant: ve,
              variants: be,
            } = _e({
              cycleOrder: Wa,
              defaultVariant: `vyUiV_jLp`,
              ref: r,
              variant: p,
              variantClassNames: Ka,
            }),
            xe = ho(e, be),
            { activeVariantCallback: Ce, delay: q } = Ie(pe),
            we = Ce(async (...e) => {
              await q(() => ve(`RRXNCTLIg`, !0), 1e4);
            }),
            J = Ce(async (...e) => {
              await q(() => ve(`k83o_U40M`, !0), 1e4);
            }),
            Te = Ce(async (...e) => {
              await q(() => ve(`IepcpNGvh`, !0), 1e4);
            }),
            Ee = Ce(async (...e) => {
              await q(() => ve(`seXncW1he`, !0), 1e4);
            }),
            De = Ce(async (...e) => {
              ve(`seXncW1he`);
            }),
            Oe = Ce(async (...e) => {
              ve(`RRXNCTLIg`);
            }),
            Ae = Ce(async (...e) => {
              ve(`k83o_U40M`);
            }),
            Me = Ce(async (...e) => {
              ve(`IepcpNGvh`);
            });
          oe(pe, { IepcpNGvh: Ee, k83o_U40M: Te, RRXNCTLIg: J, seXncW1he: we });
          let Ne = V(Ga),
            Pe = typeof F == `string` ? Le(F) : { top: F, right: F, bottom: F, left: F },
            X = Za(re);
          return (
            je(),
            x(A, {
              id: d ?? a,
              children: x(uo, {
                animate: be,
                initial: !1,
                children: x(co, {
                  value: Ja,
                  children: S(O.div, {
                    ...R,
                    ...he,
                    className: V(Ne, `framer-106a1aj`, u, W),
                    "data-framer-name": `Default`,
                    layoutDependency: xe,
                    layoutId: `vyUiV_jLp`,
                    ref: r,
                    style: { "--1k4eqfc": qa(F), ...l },
                    ...Ra(
                      {
                        IepcpNGvh: {
                          "data-framer-name": `Variant 4 with its Product`,
                          "data-highlight": !0,
                        },
                        k83o_U40M: {
                          "data-framer-name": `Video 3 with its Product`,
                          "data-highlight": !0,
                        },
                        RRXNCTLIg: {
                          "data-framer-name": `Video 2 with its Product`,
                          "data-highlight": !0,
                        },
                        seXncW1he: {
                          "data-framer-name": `Video 1 with its Product`,
                          "data-highlight": !0,
                        },
                      },
                      pe,
                      ge
                    ),
                    children: [
                      x(Y, {
                        height: 58,
                        width: `calc(${c?.width || `100vw`} - ${(Pe?.left ?? 0) + (Pe?.right ?? 0)}px)`,
                        children: x(L, {
                          className: `framer-9nn6u4-container`,
                          layoutDependency: xe,
                          layoutId: `M8b_gxzAF-container`,
                          nodeId: `M8b_gxzAF`,
                          rendersWithMotion: !0,
                          scopeId: `FLTrDatQb`,
                          children: x(Ia, {
                            B_IVCsyZn: Ae,
                            E9qOK3piQ: Oe,
                            ER7JhPrz2: le,
                            height: `100%`,
                            id: `M8b_gxzAF`,
                            JXyBd73ML: H,
                            layoutId: `M8b_gxzAF`,
                            lfP0soqHj: De,
                            lPYxJHrzA: se,
                            onER7JhPrz2Change: ue,
                            onJXyBd73MLChange: de,
                            onlPYxJHrzAChange: ce,
                            onOVFaUX39UChange: z,
                            onvWxRL4OWLChange: U,
                            OVFaUX39U: ae,
                            RvuXg_esX: qa(P),
                            style: { width: `100%` },
                            TlqZbe4rA: Me,
                            variant: Ya(`Vvpku7_YI`),
                            vWxRL4OWL: fe,
                            width: `100%`,
                            ...Ra(
                              {
                                IepcpNGvh: { variant: Ya(`PSXRX4dr8`) },
                                k83o_U40M: { variant: Ya(`vfaDTexyb`) },
                                RRXNCTLIg: { variant: Ya(`nSPZ53s9r`) },
                                seXncW1he: { variant: Ya(`zS7E0BxZ3`) },
                              },
                              pe,
                              ge
                            ),
                          }),
                        }),
                      }),
                      x(Y, {
                        children: x(L, {
                          className: `framer-1sir0br-container`,
                          "data-framer-name": `BG Video 1`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: xe,
                          layoutId: `fRIr7RaCC-container`,
                          name: `BG Video 1`,
                          nodeId: `fRIr7RaCC`,
                          rendersWithMotion: !0,
                          scopeId: `FLTrDatQb`,
                          style: { opacity: 1 },
                          variants: {
                            IepcpNGvh: { opacity: 0 },
                            k83o_U40M: { opacity: 0 },
                            RRXNCTLIg: { opacity: 0 },
                          },
                          children: x(di, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `fRIr7RaCC`,
                            isMixedBorderRadius: !1,
                            layoutId: `fRIr7RaCC`,
                            loop: !0,
                            muted: !0,
                            name: `BG Video 1`,
                            objectFit: `cover`,
                            playing: !1,
                            poster: Xa(_),
                            posterEnabled: !0,
                            srcFile: g,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                            ...Ra({ seXncW1he: { playing: !0 } }, pe, ge),
                          }),
                        }),
                      }),
                      x(Y, {
                        children: x(L, {
                          className: `framer-1wf1dla-container`,
                          "data-framer-name": `BG Video 2`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: xe,
                          layoutId: `o7UQMDy0E-container`,
                          name: `BG Video 2`,
                          nodeId: `o7UQMDy0E`,
                          rendersWithMotion: !0,
                          scopeId: `FLTrDatQb`,
                          style: { opacity: 1 },
                          variants: { IepcpNGvh: { opacity: 0 }, k83o_U40M: { opacity: 0 } },
                          children: x(di, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `o7UQMDy0E`,
                            isMixedBorderRadius: !1,
                            layoutId: `o7UQMDy0E`,
                            loop: !0,
                            muted: !0,
                            name: `BG Video 2`,
                            objectFit: `cover`,
                            playing: !1,
                            poster: Xa(w),
                            posterEnabled: !0,
                            srcFile: C,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                            ...Ra({ RRXNCTLIg: { playing: !0 } }, pe, ge),
                          }),
                        }),
                      }),
                      x(Y, {
                        children: x(L, {
                          className: `framer-i743ov-container`,
                          "data-framer-name": `BG Video 3`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: xe,
                          layoutId: `eIJrXqqMK-container`,
                          name: `BG Video 3`,
                          nodeId: `eIJrXqqMK`,
                          rendersWithMotion: !0,
                          scopeId: `FLTrDatQb`,
                          style: { opacity: 1 },
                          variants: { IepcpNGvh: { opacity: 0 } },
                          children: x(di, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `eIJrXqqMK`,
                            isMixedBorderRadius: !1,
                            layoutId: `eIJrXqqMK`,
                            loop: !0,
                            muted: !0,
                            name: `BG Video 3`,
                            objectFit: `cover`,
                            playing: !1,
                            poster: Xa(ee),
                            posterEnabled: !0,
                            srcFile: D,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                            ...Ra({ k83o_U40M: { playing: !0 } }, pe, ge),
                          }),
                        }),
                      }),
                      x(Y, {
                        children: x(L, {
                          className: `framer-1dj7935-container`,
                          "data-framer-name": `BG Video 4`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: xe,
                          layoutId: `rYEe19TI8-container`,
                          name: `BG Video 4`,
                          nodeId: `rYEe19TI8`,
                          rendersWithMotion: !0,
                          scopeId: `FLTrDatQb`,
                          children: x(di, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `rYEe19TI8`,
                            isMixedBorderRadius: !1,
                            layoutId: `rYEe19TI8`,
                            loop: !0,
                            muted: !0,
                            name: `BG Video 4`,
                            objectFit: `cover`,
                            playing: !1,
                            poster: Xa(j),
                            posterEnabled: !0,
                            srcFile: ne,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                            ...Ra({ IepcpNGvh: { playing: !0 } }, pe, ge),
                          }),
                        }),
                      }),
                      S(O.div, {
                        className: `framer-63tdfa`,
                        "data-framer-name": `Float Products`,
                        layoutDependency: xe,
                        layoutId: `aqI60AgXV`,
                        style: { "--xiri4i": qa(ie) },
                        children: [
                          x(O.div, {
                            className: `framer-yff1qd`,
                            "data-framer-name": `Left Card`,
                            layoutDependency: xe,
                            layoutId: `hPKyYMImU`,
                            children: x(Fe, {
                              children: x(ro, {
                                query: $a(),
                                ...Ra(
                                  {
                                    IepcpNGvh: { query: no() },
                                    k83o_U40M: { query: to() },
                                    RRXNCTLIg: { query: eo() },
                                  },
                                  pe,
                                  ge
                                ),
                                children: (e, t, n) =>
                                  x(v, {
                                    children: e?.map(
                                      (
                                        {
                                          EdlK9s4od: e,
                                          eVfKYnlqn: t,
                                          id: n,
                                          Jry1OPs1q: r,
                                          JZfMFKc2o: i,
                                          k8owwKEx3: a,
                                          Sn3Ji2zLH: o,
                                          vJoj3qvid: s,
                                        },
                                        c
                                      ) => (
                                        (o ??= ``),
                                        (s ??= ``),
                                        (e ??= ``),
                                        (a ??= ``),
                                        (i ??= ``),
                                        x(
                                          A,
                                          {
                                            id: `hPKyYMImU-${n}`,
                                            children: x(ye.Provider, {
                                              value: { JZfMFKc2o: i },
                                              children:
                                                X !== !1 &&
                                                x(B, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { JZfMFKc2o: i },
                                                        webPageId: `vmJrVFRkR`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { JZfMFKc2o: i },
                                                        webPageId: `vmJrVFRkR`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { JZfMFKc2o: i },
                                                        webPageId: `vmJrVFRkR`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { JZfMFKc2o: i },
                                                        webPageId: `vmJrVFRkR`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { JZfMFKc2o: i },
                                                        webPageId: `vmJrVFRkR`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (n) =>
                                                    x(Y, {
                                                      height: 280,
                                                      children: x(L, {
                                                        className: `framer-yavozj-container`,
                                                        layoutDependency: xe,
                                                        layoutId: `WG48HdiFO-container`,
                                                        nodeId: `WG48HdiFO`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `FLTrDatQb`,
                                                        children: x(oa, {
                                                          gHyNxkisM: Qa(r),
                                                          height: `100%`,
                                                          id: `WG48HdiFO`,
                                                          ISiooI_Nk: a,
                                                          layoutId: `WG48HdiFO`,
                                                          pwix9H5il: e,
                                                          Qsm_s18Sw: s,
                                                          RyDPh8SLj: n[0],
                                                          Sia0WoBmp: o,
                                                          v3H95AE40: !1,
                                                          variant: Ya(I),
                                                          width: `100%`,
                                                          WNXMchjgw: Qa(t),
                                                          ...Ra(
                                                            {
                                                              IepcpNGvh: { RyDPh8SLj: n[4] },
                                                              k83o_U40M: { RyDPh8SLj: n[3] },
                                                              RRXNCTLIg: { RyDPh8SLj: n[2] },
                                                              seXncW1he: { RyDPh8SLj: n[1] },
                                                            },
                                                            pe,
                                                            ge
                                                          ),
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
                          x(O.div, {
                            className: `framer-1go5ajg`,
                            "data-framer-name": `Right Card`,
                            layoutDependency: xe,
                            layoutId: `FDyTMcxtd`,
                            children: x(Fe, {
                              children: x(ro, {
                                query: io(),
                                ...Ra(
                                  {
                                    IepcpNGvh: { query: so() },
                                    k83o_U40M: { query: oo() },
                                    RRXNCTLIg: { query: ao() },
                                  },
                                  pe,
                                  ge
                                ),
                                children: (e, t, n) =>
                                  x(v, {
                                    children: e?.map(
                                      (
                                        {
                                          EdlK9s4od: e,
                                          eVfKYnlqn: t,
                                          id: n,
                                          Jry1OPs1q: r,
                                          JZfMFKc2o: i,
                                          k8owwKEx3: a,
                                          Sn3Ji2zLH: o,
                                          vJoj3qvid: s,
                                        },
                                        c
                                      ) => (
                                        (o ??= ``),
                                        (s ??= ``),
                                        (e ??= ``),
                                        (a ??= ``),
                                        (i ??= ``),
                                        x(
                                          A,
                                          {
                                            id: `FDyTMcxtd-${n}`,
                                            children: x(ye.Provider, {
                                              value: { JZfMFKc2o: i },
                                              children: x(B, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { JZfMFKc2o: i },
                                                      webPageId: `vmJrVFRkR`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { JZfMFKc2o: i },
                                                      webPageId: `vmJrVFRkR`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { JZfMFKc2o: i },
                                                      webPageId: `vmJrVFRkR`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { JZfMFKc2o: i },
                                                      webPageId: `vmJrVFRkR`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { JZfMFKc2o: i },
                                                      webPageId: `vmJrVFRkR`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (n) =>
                                                  x(Y, {
                                                    height: 280,
                                                    children: x(L, {
                                                      className: `framer-101a4kk-container`,
                                                      layoutDependency: xe,
                                                      layoutId: `XxXfRKgAg-container`,
                                                      nodeId: `XxXfRKgAg`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `FLTrDatQb`,
                                                      children: x(oa, {
                                                        gHyNxkisM: Qa(r),
                                                        height: `100%`,
                                                        id: `XxXfRKgAg`,
                                                        ISiooI_Nk: a,
                                                        layoutId: `XxXfRKgAg`,
                                                        pwix9H5il: e,
                                                        Qsm_s18Sw: s,
                                                        RyDPh8SLj: n[0],
                                                        Sia0WoBmp: o,
                                                        v3H95AE40: !1,
                                                        variant: Ya(I),
                                                        width: `100%`,
                                                        WNXMchjgw: Qa(t),
                                                        ...Ra(
                                                          {
                                                            IepcpNGvh: { RyDPh8SLj: n[4] },
                                                            k83o_U40M: { RyDPh8SLj: n[3] },
                                                            RRXNCTLIg: { RyDPh8SLj: n[2] },
                                                            seXncW1he: { RyDPh8SLj: n[1] },
                                                          },
                                                          pe,
                                                          ge
                                                        ),
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
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-5vWGX.framer-10ew8ez, .framer-5vWGX .framer-10ew8ez { display: block; }`,
          `.framer-5vWGX.framer-106a1aj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 762px; justify-content: flex-start; overflow: hidden; padding: var(--1k4eqfc); position: relative; width: 1200px; }`,
          `.framer-5vWGX .framer-9nn6u4-container { flex: none; height: auto; position: relative; width: 100%; z-index: 4; }`,
          `.framer-5vWGX .framer-1sir0br-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 3; }`,
          `.framer-5vWGX .framer-1wf1dla-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-5vWGX .framer-i743ov-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-5vWGX .framer-1dj7935-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-5vWGX .framer-63tdfa { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; left: 0px; overflow: visible; padding: var(--xiri4i); position: absolute; right: 0px; top: 0px; z-index: 3; }`,
          `.framer-5vWGX .framer-yff1qd, .framer-5vWGX .framer-1go5ajg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; z-index: 0; }`,
          `.framer-5vWGX .framer-yavozj-container, .framer-5vWGX .framer-101a4kk-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        ],
        `framer-5vWGX`
      )),
      (go.displayName = `Video Wrap`),
      (go.defaultProps = { height: 762, width: 1200 }),
      W(go, {
        variant: {
          options: [`vyUiV_jLp`, `seXncW1he`, `RRXNCTLIg`, `k83o_U40M`, `IepcpNGvh`],
          optionTitles: [
            `Default`,
            `Video 1 with its Product`,
            `Video 2 with its Product`,
            `Video 3 with its Product`,
            `Variant 4 with its Product`,
          ],
          title: `Variant`,
          type: X.Enum,
        },
        X777NLgv8: { defaultValue: `Jacket`, displayTextArea: !1, title: `Cat 1`, type: X.String },
        onX777NLgv8Change: { changes: `X777NLgv8`, type: X.ChangeHandler },
        wgbmbcnjQ: Ha?.srcFile && {
          ...Ha.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,zcfTuURQ6fj16eWY3wR4d8JrpMQ.mp4?originalFilename=4.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video 1`,
        },
        onwgbmbcnjQChange: { changes: `wgbmbcnjQ`, type: X.ChangeHandler },
        WwVVN9U3m: {
          __defaultAssetReference: `data:framer/asset-reference,H889ajZgDHgSKOWHNuRseyiRp2c.png?originalFilename=Screenshot+2026-06-25+at+3.49.30%C3%A2%C2%80%C2%AFPM.png&width=1808&height=1146`,
          description: `______________________`,
          title: `Thumbnail 1`,
          type: X.ResponsiveImage,
        },
        jYYssv0lz: { defaultValue: `Pants`, displayTextArea: !1, title: `Cat 2`, type: X.String },
        onjYYssv0lzChange: { changes: `jYYssv0lz`, type: X.ChangeHandler },
        iH8FTtBrT: Ha?.srcFile && {
          ...Ha.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,qeYPOEiKOY9BacFDINoIhTVinQ.mp4?originalFilename=3.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video 2`,
        },
        oniH8FTtBrTChange: { changes: `iH8FTtBrT`, type: X.ChangeHandler },
        q5u79Sios: {
          __defaultAssetReference: `data:framer/asset-reference,HFYKBGW9GKwR3g3ys6KN2XlnGk.png?originalFilename=Screenshot+2026-06-25+at+3.49.42%C3%A2%C2%80%C2%AFPM.png&width=1810&height=1146`,
          description: `______________________`,
          title: `Thumbnail 2`,
          type: X.ResponsiveImage,
        },
        M0aW2V0lL: { defaultValue: `Tees`, displayTextArea: !1, title: `Cat 3`, type: X.String },
        onM0aW2V0lLChange: { changes: `M0aW2V0lL`, type: X.ChangeHandler },
        rrTpiqd6j: Ha?.srcFile && {
          ...Ha.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,dvzUSnmkpCymqAVT1bLYMM1s.mp4?originalFilename=2.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video 3`,
        },
        onrrTpiqd6jChange: { changes: `rrTpiqd6j`, type: X.ChangeHandler },
        OyhE4oVrR: {
          __defaultAssetReference: `data:framer/asset-reference,HzBuuNgzvIMT2eStchRP2DFPS8.png?originalFilename=Screenshot+2026-06-25+at+3.49.57%C3%A2%C2%80%C2%AFPM.png&width=1810&height=1148`,
          description: `______________________`,
          title: `Thumbnail 3`,
          type: X.ResponsiveImage,
        },
        sARXIw2IL: { defaultValue: `Hoodies`, displayTextArea: !1, title: `Cat 4`, type: X.String },
        onsARXIw2ILChange: { changes: `sARXIw2IL`, type: X.ChangeHandler },
        iCEwD15eq: Ha?.srcFile && {
          ...Ha.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,xb9uVItBSbOJfoQKQmRfDyRoaEo.mp4?originalFilename=1.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video 4`,
        },
        oniCEwD15eqChange: { changes: `iCEwD15eq`, type: X.ChangeHandler },
        Ovn7mwmP5: {
          __defaultAssetReference: `data:framer/asset-reference,ecDrUJOjwliI8kui8IcGrKIJGk.png?originalFilename=Screenshot+2026-06-25+at+3.50.10%C3%A2%C2%80%C2%AFPM.png&width=1808&height=1148`,
          description: `______________________`,
          title: `Thumbnail 4`,
          type: X.ResponsiveImage,
        },
        rKQP7Jbc9: { defaultValue: 56, title: `Cat Font Size`, type: X.Number },
        onrKQP7Jbc9Change: { changes: `rKQP7Jbc9`, type: X.ChangeHandler },
        exycHua8_: { defaultValue: `4px 28px`, title: `Cat Gap`, type: X.Gap },
        k6clfptua: {
          defaultValue: `64px 20px 0px 20px`,
          description: `______________________`,
          title: `Cat Top Padding`,
          type: X.Padding,
        },
        Mst4_FB3C: Ua?.variant && {
          ...Ua.variant,
          defaultValue: `qkrYQOGAB`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Float Card Variant`,
        },
        onMst4_FB3CChange: { changes: `Mst4_FB3C`, type: X.ChangeHandler },
        tczZyBrNS: { defaultValue: !1, title: `Left Float Card Hide`, type: X.Boolean },
        ontczZyBrNSChange: { changes: `tczZyBrNS`, type: X.ChangeHandler },
        VABGpTJ31: {
          defaultValue: `0px 40px 40px 40px`,
          description: ``,
          title: `Float Card Padding`,
          type: X.Padding,
        },
      }),
      U(go, [{ explicitInter: !0, fonts: [] }, ...za, ...Ba, ...Va], {
        supportsExplicitInterCodegen: !0,
      }),
      (go.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = J.get($a(), n, r),
            a = J.get(eo(), n, r),
            o = J.get(to(), n, r),
            s = J.get(no(), n, r),
            c = J.get(io(), n, r),
            l = J.get(ao(), n, r),
            u = J.get(oo(), n, r),
            d = J.get(so(), n, r);
          return Re(
            [
              () => i.preload(),
              () => a.preload(),
              () => o.preload(),
              () => s.preload(),
              () => c.preload(),
              () => l.preload(),
              () => u.preload(),
              () => d.preload(),
              () => K(Ia, {}, t),
              async () =>
                Re(
                  ((await Ee(() => i.readMaybeAsync(), t)) ?? []).flatMap(
                    (e) => () => K(oa, {}, t)
                  ),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => c.readMaybeAsync(), t)) ?? []).flatMap(
                    (e) => () => K(oa, {}, t)
                  ),
                  t
                ),
            ],
            t
          );
        },
      }));
  });
function vo(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function yo(e, t, n) {
  let r = t ? e.offsetHeight : e.offsetWidth,
    i = t ? e.offsetWidth : e.offsetHeight,
    a = Math.max(1, n),
    o = r > 0 ? (r / a) * 0.35 : 0,
    s = i > 0 ? i * 0.3 : 24,
    c = [],
    l = (e, n) => {
      let r = Array.from(e.children);
      if (r.length >= 2) {
        let i = r.map((e) => e.getBoundingClientRect()).filter((e) => e.width > 2 && e.height > 2);
        if (i.length >= 2) {
          let r = i.map((e) => (t ? e.top : e.left)),
            l = e.getBoundingClientRect(),
            u = t ? l.top : l.left,
            d = i
              .map((e) => ({ start: (t ? e.top : e.left) - u, size: t ? e.height : e.width }))
              .sort((e, t) => e.start - t.start),
            f = d.length > 0 ? d.map((e) => Math.round((e.start - d[0].start) * 100) / 100) : [],
            p = d.map((e) => Math.round(e.size * 100) / 100),
            m = Math.max(...r) - Math.min(...r),
            h = i.reduce((e, n) => e + (t ? n.height : n.width), 0) / i.length,
            g = i.reduce((e, n) => e + (t ? n.width : n.height), 0) / i.length,
            _ = i.length >= a,
            v = h >= o && g >= s;
          c.push({
            element: e,
            depth: n,
            count: i.length,
            offsets: f,
            sizes: p,
            spread: m,
            avgAxis: h,
            avgCross: g,
            hasEnoughItems: _,
            looksLikeSlides: v,
          });
        }
      }
      n >= 4 || r.forEach((e) => l(e, n + 1));
    };
  l(e, 0);
  let u = (e) =>
      e.sort((e, t) =>
        Math.abs(e.spread - t.spread) > 0.5
          ? t.spread - e.spread
          : e.count === t.count
            ? Math.abs(e.avgAxis - t.avgAxis) > 0.5
              ? t.avgAxis - e.avgAxis
              : Math.abs(e.avgCross - t.avgCross) > 0.5
                ? t.avgCross - e.avgCross
                : e.depth - t.depth
            : t.count - e.count
      )[0],
    d = c.filter((e) => e.depth <= 2 && e.hasEnoughItems && e.looksLikeSlides),
    f = c.filter((e) => e.hasEnoughItems && e.looksLikeSlides),
    p = c.filter((e) => e.looksLikeSlides),
    m = c,
    h = u(d) || u(f) || u(p) || u(m);
  return {
    element: h?.element || null,
    count: h?.count || 0,
    offsets: h?.offsets || [],
    sizes: h?.sizes || [],
  };
}
function bo(e, t, n = 0.5) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (Math.abs(e[r] - t[r]) > n) return !1;
  return !0;
}
function xo(e, t) {
  if (!t) return null;
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    i = t.offsetWidth || t.getBoundingClientRect().width;
  if (i <= 0) return null;
  let a = t.offsetLeft,
    o = t.offsetParent;
  for (; o && o !== e;) ((a += o.offsetLeft), (o = o.offsetParent));
  o !== e && (a = r.left - n.left);
  let s = r.bottom - n.top;
  return (
    t.querySelectorAll(`*`).forEach((e) => {
      let t = e.getBoundingClientRect();
      t.width <= 0 ||
        t.height <= 0 ||
        t.right < n.left ||
        t.left > n.right ||
        (s = Math.max(s, t.bottom - n.top));
    }),
    {
      left: Math.max(0, Math.round(a * 100) / 100),
      width: Math.round(i * 100) / 100,
      bottom: Math.round(s * 100) / 100,
    }
  );
}
function So({ alignment: e, inset: t, offX: n, offY: r, splitSide: i }) {
  let a = { position: `absolute`, zIndex: 1 },
    o = [];
  return (
    i
      ? i === `prev`
        ? (a.left = t + n)
        : (a.right = t + n)
      : e.includes(`Left`)
        ? (a.left = t + n)
        : e.includes(`Right`)
          ? (a.right = t - n)
          : ((a.left = `50%`), o.push(`translateX(calc(-50% + ${n}px))`)),
    e.includes(`Top`)
      ? (a.top = t + r)
      : e.includes(`Bottom`)
        ? (a.bottom = t - r)
        : ((a.top = `50%`), o.push(`translateY(calc(-50% + ${r}px))`)),
    o.length > 0 && (a.transform = o.join(` `)),
    a
  );
}
function Co(e) {
  let { style: t, content: n, direction: r = `Left`, autoPlay: s = !1 } = e,
    c = { ...Ro, ...(e.layout || {}) },
    d = { ...zo, ...(e.playback || {}) },
    p = { ...Bo, ...(e.navigation || {}) },
    m = { ...Vo, ...(e.arrows || {}) },
    h = { ...Ho, ...(e.dots || {}) },
    _ = { ...Uo, ...(e.centerFocus || {}) },
    y = { ...Wo, ...(e.appear || {}) },
    b = e.animationOptions || Go,
    C = e.arrowAlignment ?? m.alignment,
    D = e.arrowSize ?? m.size,
    ee = e.arrowOffsetX ?? m.offsetX,
    k = e.arrowOffsetY ?? m.offsetY,
    { interval: ne, pauseOnHover: A, loop: j, startAt: M } = d,
    { align: N } = c,
    P = p.draggable,
    F = xe.current() === xe.canvas,
    I = be(),
    re = F || I,
    ie = f(null),
    L = `cms-slider-${i().replace(/:/g, `-`)}`,
    R = r === `Up` || r === `Down`,
    ae = r === `Right` || r === `Down`,
    [z, B] = T(0),
    [oe, se] = T(0),
    [ce, le] = T(0),
    [ue, V] = T([]),
    [H, de] = T([]),
    [fe, U] = T(!1),
    [pe, W] = T(!1),
    [me, he] = T(!1),
    [ge, _e] = T(null),
    [G, K] = T(0),
    [ve, ye] = T(re),
    Se = fe || pe,
    [Ce, q] = T(!1);
  w(() => {
    if (a === void 0) return;
    let e = a.matchMedia(`(prefers-reduced-motion: reduce)`);
    o(() => {
      q(e.matches);
    });
    let t = (e) => {
      (o(() => {
        q(e.matches);
      }),
        Re.current?.stop());
    };
    return (e.addEventListener(`change`, t), () => e.removeEventListener(`change`, t));
  }, []);
  let we = vo(Math.round(e.items ?? Ro.items), 1, 8),
    J = u(() => {
      if (p.step === `Page`) {
        let e = Math.ceil(z / we);
        return Math.max(0, e - 1);
      }
      return Math.max(0, z - we);
    }, [z, we, p.step]),
    Te = J + 1,
    Ee = l.count(n) > 0,
    De = F ? z > 0 || Ee : z > we,
    Oe = (F && z > 0) || Ee,
    ke = m.show && Oe && (!m.fadeIn || Se || F),
    Y = Math.min(ce, J),
    Ae = u(() => {
      if (!n) return null;
      let e = l.count(n);
      return e > 1
        ? x(`div`, {
            style: {
              display: `flex`,
              width: `100%`,
              height: `auto`,
              gap: c.gap,
              flexDirection: R ? `column` : `row`,
            },
            children: l.map(n, (t, n) =>
              x(`div`, {
                role: `group`,
                "aria-roledescription": `Slide`,
                "aria-label": `Slide ${n + 1} of ${e}`,
                children: t,
              })
            ),
          })
        : n;
    }, [n, c.gap, R, !1]);
  (w(() => {
    F &&
      o(() => {
        le(0);
      });
  }, [we, F, r]),
    w(() => {
      let e = ie.current;
      if (!e || typeof ResizeObserver > `u`) return;
      let t = 0,
        n = null,
        r,
        i = () => {
          (t && cancelAnimationFrame(t),
            (t = requestAnimationFrame(() => {
              if (!e) return;
              let t = R ? e.offsetHeight : e.offsetWidth;
              if (t < 10) return;
              let i = c.padding * 2,
                { element: a, count: s, offsets: l, sizes: u } = yo(e, R, we);
              a && a !== e
                ? a !== n && (n && r.unobserve(n), r.observe(a), (n = a))
                : (n &&= (r.unobserve(n), null));
              let d = xo(e, a);
              o(() => {
                if (
                  (se(t - i),
                  _e((e) =>
                    d
                      ? e &&
                        Math.abs(e.left - d.left) < 0.5 &&
                        Math.abs(e.width - d.width) < 0.5 &&
                        Math.abs(e.bottom - d.bottom) < 0.5
                        ? e
                        : d
                      : e === null
                        ? e
                        : null
                  ),
                  K(e.offsetHeight),
                  V((e) => (bo(e, l) ? e : l)),
                  de((e) => (bo(e, u) ? e : u)),
                  F)
                ) {
                  let e = Math.max(we + 2, 5);
                  B(s > e ? s : e);
                } else s > 0 && B(s);
                ye(!0);
              });
            })));
        };
      ((r = new ResizeObserver(i)), r.observe(e));
      let a = null;
      return (
        typeof MutationObserver < `u` &&
          ((a = new MutationObserver(i)), a.observe(e, { childList: !0, subtree: !0 })),
        i(),
        () => {
          (r.disconnect(), a?.disconnect(), t && cancelAnimationFrame(t));
        }
      );
    }, [c.padding, F, we, R, n]));
  let je = (we - 1) * c.gap,
    Me = oe > 0 ? (oe - je) / Math.max(1, we) : 0,
    Ne = oe > 0 ? Me + c.gap : 0,
    Pe =
      u(() => {
        if (ue.length > 0) {
          let e = ue.length - 1,
            t = ue[e] ?? 0,
            n = e > 0 ? Math.max(0, t - (ue[e - 1] ?? 0)) : Math.max(0, Ne - c.gap),
            r = H[e] ?? n,
            i = Math.max(0, t + Math.max(0, r));
          return Math.max(0, i - oe);
        }
        let e = p.step === `Page` ? J * we * Ne : J * Ne;
        return Math.max(0, e);
      }, [ue, H, Ne, c.gap, oe, J, p.step, we]) <= ko,
    Fe = J <= 0 || Pe,
    X = !Fe && (j || Y > 0) && J > 0,
    Ie = !Fe && (j || Y < J) && J > 0,
    Z = E(0),
    Le = E(0),
    Re = f(null),
    ze = g(
      (e) => {
        R ? Le.set(e) : Z.set(e);
      },
      [R, Z, Le]
    );
  w(() => {
    (Re.current?.stop(), R ? Z.set(0) : Le.set(0));
  }, [R, Z, Le]);
  let Be = g(
      (e) => {
        if (F) return;
        let t = R ? Le : Z;
        (Re.current?.stop(),
          (Re.current = te(t, e, Ce ? { duration: 0 } : b || { duration: 0.45 })));
      },
      [b, F, R, Z, Le, Ce]
    ),
    Ve = g(
      (e) => {
        let t = ae ? 1 : -1,
          n = vo(e, 0, Math.max(0, z - 1)),
          r = ue[n],
          i = n * Ne;
        return t * (r ?? i);
      },
      [ae, z, ue, Ne]
    ),
    He = g(
      (e) => {
        if (p.step === `Page`) {
          let t = vo(e * we, 0, Math.max(0, z - 1));
          return Ve(t);
        }
        return Ve(e);
      },
      [p.step, we, z, Ve]
    ),
    Ue = g(
      (e, t = !0) => {
        let n = e;
        (j ? (e < 0 ? (n = J) : e > J && (n = 0)) : (n = vo(e, 0, J)),
          o(() => {
            le(n);
          }));
        let r = He(n);
        t ? Be(r) : ze(r);
      },
      [j, J, He, Be, ze]
    ),
    We = g(() => Ue(ce - 1, !0), [Ue, ce]),
    Ge = g(() => Ue(ce + 1, !0), [Ue, ce]),
    Ke = f(ce);
  w(() => {
    Ke.current = ce;
  }, [ce]);
  let qe = f(Ue);
  w(() => {
    qe.current = Ue;
  }, [Ue]);
  let Je = u(() => (M === `End` ? J : 0), [M, J]);
  (w(() => {
    F || (z > 0 && Ue(Je, !1));
  }, [Je, z, F, Ue]),
    w(() => {
      F || j || (ce > J && qe.current(J, !0));
    }, [J, j, F, ce]),
    w(() => {
      if (F || Ne <= 0) return;
      let e = He(ce);
      ze(e);
    }, [Ne, ce, He, ze, F]),
    w(() => {
      if (!s || F || z <= we || Ce || (A && Se)) return;
      let e = vo(ne, 0.5, 30) * 1e3,
        t = a.setInterval(() => qe.current(Ke.current + 1, !0), e);
      return () => a.clearInterval(t);
    }, [s, ne, z, we, Se, A, F, Ce]));
  let Ye = g(
      (e) => {
        if (!p.keyboard || F) return;
        let t = e.target?.tagName?.toLowerCase();
        if (t === `input` || t === `textarea` || t === `select` || e.target?.isContentEditable)
          return;
        let n = R
          ? { prev: `ArrowUp`, next: `ArrowDown` }
          : { prev: `ArrowLeft`, next: `ArrowRight` };
        e.key === n.prev
          ? (e.preventDefault(), We())
          : e.key === n.next && (e.preventDefault(), Ge());
      },
      [p.keyboard, F, R, We, Ge]
    ),
    Xe = f({
      dragging: !1,
      startPos: 0,
      startTranslate: 0,
      lastPos: 0,
      lastTime: 0,
      velocity: 0,
      moved: !1,
      captured: !1,
    }),
    Ze = f(null),
    Qe = f({ accum: 0, lastStepAt: 0, quietId: 0 }),
    $e = f(null),
    et = f(null);
  w(
    () => () => {
      (Re.current?.stop(),
        $e.current != null && a.clearTimeout($e.current),
        et.current && a.removeEventListener(`click`, et.current, { capture: !0 }));
    },
    []
  );
  let tt = () => (R ? Le.get() : Z.get()),
    nt = (e) => {
      if (!P || F || Fe) return;
      Re.current?.stop();
      let t = R ? e.clientY : e.clientX,
        n = performance.now();
      ((Xe.current.dragging = !0),
        (Xe.current.startPos = t),
        (Xe.current.startTranslate = tt()),
        (Xe.current.lastPos = t),
        (Xe.current.lastTime = n),
        (Xe.current.velocity = 0),
        (Xe.current.moved = !1),
        (Xe.current.captured = !1),
        o(() => {
          he(!0);
        }));
    },
    rt = (e) => {
      if (!Xe.current.dragging) return;
      let t = R ? e.clientY : e.clientX,
        n = t - Xe.current.startPos;
      if (Math.abs(n) > wo && ((Xe.current.moved = !0), !Xe.current.captured))
        try {
          (e.currentTarget.setPointerCapture(e.pointerId), (Xe.current.captured = !0));
        } catch {}
      let r = performance.now(),
        i = r - Xe.current.lastTime;
      if (
        (i > 0 && (Xe.current.velocity = (t - Xe.current.lastPos) / i),
        (Xe.current.lastTime = r),
        (Xe.current.lastPos = t),
        Fe)
      ) {
        ze(0);
        return;
      }
      let a = Math.abs(He(J)),
        o = Xe.current.startTranslate + n,
        s = ae ? 0 : -a,
        c = ae ? a : 0;
      (o > c ? (o = c + (o - c) * Oo) : o < s && (o = s + (o - s) * Oo), ze(o));
    },
    it = (e) => {
      if (!Xe.current.dragging) return;
      if (
        ((Xe.current.dragging = !1),
        o(() => {
          he(!1);
        }),
        Xe.current.captured)
      ) {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        Xe.current.captured = !1;
      }
      if (!Xe.current.moved) return;
      if (Fe) Ue(0, !0);
      else {
        let e = Xe.current.velocity,
          t = tt() + vo(e, -2, To) * Eo,
          n = ae ? t : -t,
          r = 0;
        if (J > 0) {
          let e = [];
          if (p.step === `Page`)
            for (let t = 0; t <= J; t++) {
              let n = vo(t * we, 0, Math.max(0, z - 1)),
                r = ue[n],
                i = n * Ne;
              e.push({ logicalIndex: t, anchor: r ?? i });
            }
          else
            for (let t = 0; t <= J; t++) {
              let n = ue[t],
                r = t * Ne;
              e.push({ logicalIndex: t, anchor: n ?? r });
            }
          if (e.length > 0) {
            let t = e[0],
              i = Math.abs(n - t.anchor);
            for (let r = 1; r < e.length; r++) {
              let a = Math.abs(n - e[r].anchor);
              a < i && ((t = e[r]), (i = a));
            }
            r = t.logicalIndex;
          }
        }
        ((r = j ? ((r % (J + 1)) + (J + 1)) % (J + 1) : vo(r, 0, J)), Ue(r, !0));
      }
      let t = (e) => {
        (e.preventDefault(), e.stopPropagation());
      };
      ((et.current = t),
        a.addEventListener(`click`, t, { capture: !0, once: !0 }),
        $e.current != null && a.clearTimeout($e.current),
        ($e.current = a.setTimeout(() => {
          (a.removeEventListener(`click`, t, { capture: !0 }),
            (et.current = null),
            ($e.current = null));
        }, Do)));
    },
    at = (e) => {
      if (Xe.current.dragging) {
        if (
          ((Xe.current.dragging = !1),
          o(() => {
            he(!1);
          }),
          Xe.current.captured)
        ) {
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {}
          Xe.current.captured = !1;
        }
        Ue(Fe ? 0 : (Ke.current ?? 0), !0);
      }
    };
  w(() => {
    if (re || !P) return;
    let e = Ze.current;
    if (!e) return;
    let t = (e) => {
      if (Xe.current.dragging) return;
      let t = R ? e.deltaY : e.deltaX,
        n = R ? e.deltaX : e.deltaY;
      if (Math.abs(t) <= Math.abs(n) || Math.abs(t) < 1) return;
      e.preventDefault();
      let r = performance.now();
      if (
        (r - Qe.current.lastStepAt > jo && (Qe.current.accum += t),
        Qe.current.quietId && a.clearTimeout(Qe.current.quietId),
        (Qe.current.quietId = a.setTimeout(() => {
          Qe.current.accum = 0;
        }, Mo)),
        Math.abs(Qe.current.accum) >= Ao)
      ) {
        let e = Qe.current.accum > 0 ? 1 : -1;
        ((Qe.current.accum = 0), (Qe.current.lastStepAt = r), Re.current?.stop());
        let t = Ke.current + e,
          n = J + 1,
          i = j ? ((t % n) + n) % n : vo(t, 0, J);
        qe.current(i, !0);
      }
    };
    return (
      e.addEventListener(`wheel`, t, { passive: !1 }),
      () => {
        (e.removeEventListener(`wheel`, t),
          Qe.current.quietId && (a.clearTimeout(Qe.current.quietId), (Qe.current.quietId = 0)));
      }
    );
  }, [re, P, R, J, j]);
  let ot = u(() => {
      let e = m.variant === `Fill` || m.variant === `Both`,
        t = m.variant === `Outline` || m.variant === `Both`;
      return {
        width: D,
        height: D,
        borderRadius: m.radius,
        background: e ? m.backdrop : `transparent`,
        color: m.fill,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        border: t ? `${m.borderWidth}px solid ${m.borderColor}` : `none`,
        padding: 0,
        margin: 0,
        boxSizing: `border-box`,
        font: `inherit`,
        lineHeight: 0,
        cursor: `pointer`,
        transition: `opacity 0.2s ease, transform 0.15s ease`,
        pointerEvents: F ? `none` : ke ? `auto` : `none`,
        boxShadow: m.shadow ? `0 4px ${m.shadowBlur}px ${m.shadowColor}` : `none`,
        flexShrink: 0,
        appearance: `none`,
        WebkitAppearance: `none`,
      };
    }, [
      D,
      m.radius,
      m.backdrop,
      m.fill,
      m.variant,
      m.borderWidth,
      m.borderColor,
      m.shadow,
      m.shadowBlur,
      m.shadowColor,
      ke,
      F,
    ]),
    st = g(
      (e) => ({
        ...ot,
        opacity: ke ? (e ? m.disabledOpacity : 1) : 0,
        cursor: e ? `not-allowed` : `pointer`,
      }),
      [ot, m.disabledOpacity, ke]
    ),
    ct = (e) => {
      let t = m.type === `Split`;
      return {
        ...So({ alignment: C, inset: m.inset, offX: ee, offY: k, splitSide: t ? e : void 0 }),
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        pointerEvents: `none`,
        gap: t ? void 0 : m.gap,
      };
    },
    lt = (e) => {
      let t = e === `prev` ? m.prevImage : m.nextImage,
        n = e === `prev` ? Io : Lo,
        r = `0deg`;
      return (
        !t && R && (r = `90deg`),
        t
          ? x(`img`, {
              src: t,
              style: { width: `100%`, height: `100%`, objectFit: `contain`, pointerEvents: `none` },
              alt: ``,
              "aria-hidden": `true`,
            })
          : x(`div`, {
              style: { transform: `rotate(${r})`, display: `flex` },
              children: x(n, { size: D, color: m.fill }),
            })
      );
    },
    ut = (e = !1) => {
      if (h.type === `None`) return null;
      if (h.type === `Dots`) {
        let e = h.compact && Te > h.compactVisible,
          t = Math.max(1, Math.min(h.compactVisible, Te)),
          n = h.size + h.gap,
          r = t * h.size + (t - 1) * h.gap,
          i = Math.floor(t / 2),
          a = e ? vo(Y - i, 0, Te - t) : 0,
          o = a + t - 1,
          s = e ? -a * n : 0,
          c = (t) => !e || (t >= a && t <= o),
          l = (e) => (e === Y ? Po : 1),
          u = (e) => (c(e) ? (e === Y ? 1 : h.opacity) : 0),
          d = Array.from({ length: Te }).map((e, t) =>
            x(
              `button`,
              {
                type: `button`,
                onClick: (e) => {
                  (e.stopPropagation(), Ue(t, !0));
                },
                role: `tab`,
                "aria-selected": t === Y,
                "aria-label": `${p.step === `Page` ? `Page` : `Slide`} ${t + 1}`,
                style: {
                  borderRadius: `50%`,
                  border: `none`,
                  padding: 0,
                  cursor: `pointer`,
                  transition: `transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.3s ease, background 0.2s ease`,
                  width: h.size,
                  height: h.size,
                  flexShrink: 0,
                  background: t === Y ? h.activeFill : h.fill,
                  opacity: u(t),
                  transform: `scale(${l(t)})`,
                },
              },
              t
            )
          );
        return x(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            justifyContent: e ? `flex-start` : `center`,
            padding: h.padding,
            borderRadius: h.radius,
            background: h.backdrop,
            backdropFilter: h.blur > 0 ? `blur(${h.blur}px)` : void 0,
            pointerEvents: F ? `none` : `auto`,
            overflow: e ? `hidden` : `visible`,
            width: e ? r + h.padding * 2 : void 0,
            boxSizing: `border-box`,
          },
          role: `tablist`,
          "aria-label": `Slide navigation`,
          children: x(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: h.gap,
              transform: `translateX(${s}px)`,
              transition: e ? `transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)` : void 0,
              flexShrink: 0,
            },
            children: d,
          }),
        });
      }
      if (h.type === `Progress`) {
        let t = Math.max(1, Te),
          n = e ? `100%` : h.progressWidth;
        return h.compact
          ? x(`div`, {
              style: { width: n, display: `flex`, gap: 3, pointerEvents: F ? `none` : `auto` },
              role: `tablist`,
              "aria-label": `Slide navigation`,
              children: Array.from({ length: t }).map((e, t) =>
                x(
                  `button`,
                  {
                    type: `button`,
                    onClick: (e) => {
                      (e.stopPropagation(), Ue(t, !0));
                    },
                    role: `tab`,
                    "aria-selected": t === Y,
                    "aria-label": `${p.step === `Page` ? `Page` : `Slide`} ${t + 1}`,
                    style: {
                      flex: 1,
                      minWidth: 0,
                      height: No,
                      padding: 0,
                      border: `none`,
                      cursor: `pointer`,
                      borderRadius: h.radius,
                      background: t <= Y ? h.activeFill : h.backdrop,
                      backdropFilter: h.blur > 0 ? `blur(${h.blur}px)` : void 0,
                      transition: `background 0.3s ease`,
                    },
                  },
                  t
                )
              ),
            })
          : x(`div`, {
              style: {
                width: n,
                height: No,
                background: h.backdrop,
                borderRadius: h.radius,
                overflow: `hidden`,
                backdropFilter: h.blur > 0 ? `blur(${h.blur}px)` : void 0,
                pointerEvents: F ? `none` : `auto`,
              },
              children: x(O.div, {
                style: {
                  width: `100%`,
                  height: `100%`,
                  background: h.activeFill,
                  transformOrigin: `left center`,
                },
                animate: { scaleX: (Y + 1) / t },
                transition: b,
              }),
            });
      }
      return h.type === `Numbers`
        ? S(`div`, {
            style: {
              padding: `${h.padding * 0.5}px ${h.padding}px`,
              background: h.backdrop,
              borderRadius: h.radius,
              backdropFilter: h.blur > 0 ? `blur(${h.blur}px)` : void 0,
              fontFamily: `inherit`,
              fontSize: 13,
              fontWeight: 500,
              color: h.fill,
              display: `flex`,
              gap: 4,
              pointerEvents: F ? `none` : `auto`,
            },
            children: [
              x(`span`, { style: { color: h.activeFill }, children: Y + 1 }),
              x(`span`, { children: `/` }),
              x(`span`, { children: Te }),
            ],
          })
        : null;
    },
    dt = h.alignment.includes(`Top`),
    ft = C.includes(`Top`),
    pt = m.show && Oe && m.type === `Inline`,
    mt = !pt && De && h.type !== `None`,
    ht = (e) => (e.includes(`Left`) ? `flex-start` : e.includes(`Right`) ? `flex-end` : `center`),
    gt = {
      position: `relative`,
      zIndex: 11,
      display: `flex`,
      width: `100%`,
      alignItems: `center`,
      justifyContent: ht(h.alignment),
      marginTop: dt ? 0 : h.inset,
      marginBottom: dt ? h.inset : 0,
      transform: h.offsetX || h.offsetY ? `translate(${h.offsetX}px, ${h.offsetY}px)` : void 0,
    },
    _t = ge ? Math.max(0, ge.bottom - G) : 0,
    vt = {
      ...gt,
      marginTop: dt ? gt.marginTop : h.inset + _t,
      ...(ge
        ? { width: ge.width, marginLeft: ge.left }
        : { paddingLeft: c.padding, paddingRight: c.padding }),
      boxSizing: `border-box`,
    },
    yt = {
      position: `relative`,
      zIndex: 11,
      display: `flex`,
      width: `100%`,
      alignItems: `center`,
      justifyContent: ht(C),
      marginTop: ft ? 0 : m.inset,
      marginBottom: ft ? m.inset : 0,
      transform: ee || k ? `translate(${ee}px, ${k}px)` : void 0,
      pointerEvents: `none`,
    },
    bt = { display: `flex`, flexDirection: `row`, alignItems: `center`, gap: m.gap },
    xt = `cms-slider-track-${L}`,
    Q = u(
      () =>
        _.enabled
          ? p.step === `Page`
            ? ce * we + Math.floor(we / 2)
            : ce + Math.floor(we / 2)
          : -1,
      [_.enabled, ce, we, p.step]
    ),
    St = u(() => {
      if (!_.enabled || z === 0) return ``;
      let e = [],
        t = _.transitionSpeed;
      return (
        e.push(`
          .${xt} > * > * {
            transition: transform ${t}s ease, opacity ${t}s ease, filter ${t}s ease !important;
            opacity: ${_.inactiveOpacity} !important;
            transform: scale(${_.inactiveScale}) translateZ(0) !important;
            transform-origin: center center !important;
          }
        `),
        Q >= 0 &&
          Q < z &&
          e.push(`
              .${xt} > * > *:nth-child(${Q + 1}) {
                opacity: 1 !important;
                transform: scale(${_.activeScale}) translateZ(0) !important;
              }
            `),
        e.join(`
`)
      );
    }, [_.enabled, _.transitionSpeed, _.inactiveOpacity, _.inactiveScale, _.activeScale, Q, z, xt]),
    Ct =
      { Start: `flex-start`, Center: `center`, End: `flex-end`, Stretch: `stretch` }[N] ||
      `stretch`,
    wt = u(
      () => ({
        "--slider-gap": `${c.gap}px`,
        "--slider-items": `${we}`,
        "--flex-dir": R ? `column` : `row`,
        "--slider-align": Ct,
      }),
      [c.gap, we, R, Ct]
    ),
    Tt = u(
      () => `
      .${xt} {
        will-change: transform;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      .${xt} > * {
        display: flex !important;
        flex-direction: var(--flex-dir) !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        align-items: var(--slider-align) !important;
        width: 100% !important;
        height: auto !important;
        gap: var(--slider-gap) !important;
        grid-template-columns: none !important;
        box-sizing: border-box !important;
      }
      .${xt} > * > * {
        --total-gap: calc((var(--slider-items) - 1) * var(--slider-gap));
        --item-size: calc((100% - var(--total-gap)) / var(--slider-items));

        flex: 0 0 var(--item-size) !important;

        ${R ? `height: var(--item-size) !important;` : `width: var(--item-size) !important;`}
        ${R ? `min-height: var(--item-size) !important;` : `min-width: var(--item-size) !important;`}
        
        ${c.aspectRatio > 0 ? `aspect-ratio: ${c.aspectRatio} !important;` : ``}
        ${c.aspectRatio > 0 && !R ? `height: auto !important;` : ``}
        ${c.aspectRatio > 0 && R ? `width: auto !important;` : ``}
        max-width: none !important;
        max-height: none !important;

        margin: 0 !important;
        flex-shrink: 0 !important;
        box-sizing: border-box !important;
        transform: translateZ(0);
      }
      .${xt} > * > * > *:only-child {
        width: 100% !important;
        
        min-height: 0 !important;
        flex: 1 1 auto !important;
      }
      .${xt} a {
        cursor: pointer !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        pointer-events: auto !important;
      }
      .${xt} img {
        pointer-events: none !important;
        -webkit-user-drag: none !important;
        user-drag: none !important;
      }
    `,
      [xt, R, !1, c.aspectRatio]
    ),
    Et = `cmsslider-appear-${L}`,
    Dt = _.enabled ? `All Together` : y.mode,
    Ot = u(() => {
      let e = y.type;
      if (e === `None` || Ce) return ``;
      let t = y.distance,
        n = `opacity: 0;`,
        r = `opacity: 1;`;
      return (
        e === `Slide Up`
          ? ((n += ` transform: translateY(${t}px);`), (r += ` transform: translateY(0);`))
          : e === `Slide Down`
            ? ((n += ` transform: translateY(-${t}px);`), (r += ` transform: translateY(0);`))
            : e === `Scale`
              ? ((n += ` transform: scale(0.96);`), (r += ` transform: scale(1);`))
              : e === `Blur` && ((n += ` filter: blur(10px);`), (r += ` filter: none;`)),
        `@keyframes ${Et} {
            from { ${n} }
            to { ${r} }
        }`
      );
    }, [y.type, y.distance, Et, Ce]),
    kt = u(
      () =>
        y.type === `None` || Ce || Dt !== `All Together`
          ? {}
          : { opacity: 0, animation: `${Et} ${y.duration}s cubic-bezier(0.32, 0.72, 0, 1) both` },
      [y.type, Ce, Dt, Et, y.duration]
    ),
    At = u(() => {
      if (y.type === `None` || Dt !== `Stagger` || Ce) return ``;
      let e = Math.min(z > 0 ? z : Fo, Fo),
        t = Math.max(0, y.stagger),
        n = Array.from({ length: e }).map(
          (e, n) =>
            `.${xt} > * > *:nth-child(${n + 1}) { animation-delay: ${(n * t).toFixed(3)}s; }`
        ).join(`
`);
      return `
            .${xt} > * > * {
                opacity: 0;
                animation: ${Et} ${y.duration}s cubic-bezier(0.32, 0.72, 0, 1) both;
            }
            ${n}
        `;
    }, [y.type, Dt, y.duration, y.stagger, Ce, z, xt, Et]),
    jt = u(
      () => `${Tt}
          [data-cms-slider]:focus-visible {
              outline: 2px solid #4c8eff;
              outline-offset: -2px;
          }
          [data-cms-slider]:focus:not(:focus-visible) {
              outline: none;
          }
          ${Ot}
          ${At}
        `,
      [Tt, Ot, At]
    );
  return n
    ? S(`div`, {
        style: {
          ...t,
          position: `relative`,
          display: `flex`,
          flexDirection: `column`,
          width: `100%`,
          height: `auto`,
          ...wt,
          minWidth: 200,
          minHeight: 0,
          ...(ve ? kt : { opacity: 0 }),
        },
        onMouseEnter: () => {
          o(() => {
            U(!0);
          });
        },
        onMouseLeave: () => {
          o(() => {
            U(!1);
          });
        },
        onFocus: () => {
          o(() => {
            W(!0);
          });
        },
        onBlur: (e) => {
          e.currentTarget.contains(e.relatedTarget) ||
            o(() => {
              W(!1);
            });
        },
        onKeyDown: Ye,
        tabIndex: 0,
        "data-cms-slider": !0,
        role: `region`,
        "aria-roledescription": `carousel`,
        "aria-label": `Carousel`,
        children: [
          x(`style`, { children: jt }),
          St && x(`style`, { children: St }),
          x(`div`, {
            "aria-live": `polite`,
            "aria-atomic": `true`,
            style: {
              position: `absolute`,
              width: 1,
              height: 1,
              overflow: `hidden`,
              clip: `rect(0,0,0,0)`,
              whiteSpace: `nowrap`,
              border: 0,
            },
            children: `${p.step === `Page` ? `Page` : `Slide`} ${Y + 1} of ${Te}`,
          }),
          pt &&
            ft &&
            x(`div`, {
              style: yt,
              children: S(`div`, {
                style: bt,
                children: [
                  x(`button`, {
                    type: `button`,
                    disabled: !X,
                    onClick: (e) => {
                      (e.stopPropagation(), We());
                    },
                    style: st(!X),
                    "aria-label": `Previous slide`,
                    children: lt(`prev`),
                  }),
                  h.type !== `None` && ut(),
                  x(`button`, {
                    type: `button`,
                    disabled: !Ie,
                    onClick: (e) => {
                      (e.stopPropagation(), Ge());
                    },
                    style: st(!Ie),
                    "aria-label": `Next slide`,
                    children: lt(`next`),
                  }),
                ],
              }),
            }),
          S(`div`, {
            style: { position: `relative`, flex: `0 0 auto`, minHeight: 0, minWidth: 0 },
            children: [
              mt && dt && x(`div`, { style: vt, children: ut(!0) }),
              x(`div`, {
                ref: ie,
                style: {
                  width: `100%`,
                  height: `auto`,
                  position: `relative`,
                  overflow: `visible`,
                  clipPath:
                    _.enabled || c.bleed === `Both`
                      ? void 0
                      : c.bleed === `Right`
                        ? R
                          ? `inset(0 -9999px -9999px -9999px)`
                          : `inset(-9999px -9999px -9999px 0)`
                        : R
                          ? `inset(0 -9999px)`
                          : `inset(-9999px 0)`,
                  padding: c.padding,
                  boxSizing: `border-box`,
                },
                children: re
                  ? x(`div`, {
                      className: xt,
                      style: {
                        display: `flex`,
                        flexDirection: R ? `column` : `row`,
                        width: `100%`,
                        height: `auto`,
                      },
                      children: Ae,
                    })
                  : x(O.div, {
                      ref: Ze,
                      className: xt,
                      onPointerDown: nt,
                      onPointerMove: rt,
                      onPointerUp: it,
                      onPointerCancel: at,
                      style: {
                        display: `flex`,
                        flexDirection: R ? `column` : `row`,
                        width: `100%`,
                        height: `auto`,
                        cursor: P ? (me ? `grabbing` : `grab`) : `default`,
                        touchAction: R ? `pan-x` : `pan-y`,
                        userSelect: `none`,
                        x: R ? void 0 : Z,
                        y: R ? Le : void 0,
                      },
                      children: Ae,
                    }),
              }),
              m.show &&
                Oe &&
                m.type === `Split` &&
                S(v, {
                  children: [
                    x(`div`, {
                      style: ct(`prev`),
                      children: x(`button`, {
                        type: `button`,
                        disabled: !X,
                        onClick: (e) => {
                          (e.stopPropagation(), We());
                        },
                        style: st(!X),
                        "aria-label": `Previous slide`,
                        children: lt(`prev`),
                      }),
                    }),
                    x(`div`, {
                      style: ct(`next`),
                      children: x(`button`, {
                        type: `button`,
                        disabled: !Ie,
                        onClick: (e) => {
                          (e.stopPropagation(), Ge());
                        },
                        style: st(!Ie),
                        "aria-label": `Next slide`,
                        children: lt(`next`),
                      }),
                    }),
                  ],
                }),
              m.show &&
                Oe &&
                m.type === `Grouped` &&
                S(`div`, {
                  style: ct(),
                  children: [
                    x(`button`, {
                      type: `button`,
                      disabled: !X,
                      onClick: (e) => {
                        (e.stopPropagation(), We());
                      },
                      style: st(!X),
                      "aria-label": `Previous slide`,
                      children: lt(`prev`),
                    }),
                    x(`button`, {
                      type: `button`,
                      disabled: !Ie,
                      onClick: (e) => {
                        (e.stopPropagation(), Ge());
                      },
                      style: st(!Ie),
                      "aria-label": `Next slide`,
                      children: lt(`next`),
                    }),
                  ],
                }),
              mt && !dt && x(`div`, { style: vt, children: ut(!0) }),
            ],
          }),
          pt &&
            !ft &&
            x(`div`, {
              style: yt,
              children: S(`div`, {
                style: bt,
                children: [
                  x(`button`, {
                    type: `button`,
                    disabled: !X,
                    onClick: (e) => {
                      (e.stopPropagation(), We());
                    },
                    style: st(!X),
                    "aria-label": `Previous slide`,
                    children: lt(`prev`),
                  }),
                  h.type !== `None` && ut(),
                  x(`button`, {
                    type: `button`,
                    disabled: !Ie,
                    onClick: (e) => {
                      (e.stopPropagation(), Ge());
                    },
                    style: st(!Ie),
                    "aria-label": `Next slide`,
                    children: lt(`next`),
                  }),
                ],
              }),
            }),
        ],
      })
    : S(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          minWidth: 200,
          minHeight: 200,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          backgroundColor: `#EBEAF9`,
          color: `#8855FF`,
          fontFamily: `inherit`,
          textAlign: `center`,
          padding: 12,
          boxSizing: `border-box`,
          overflow: `hidden`,
        },
        children: [
          x(`div`, {
            style: { fontSize: 14, fontWeight: 600, marginBottom: 6 },
            children: `Connect to Content`,
          }),
          x(`div`, {
            style: { fontSize: 12, color: `#9999AA`, maxWidth: 200, lineHeight: 1.4 },
            children: `Add layers or components to make infinite slides.`,
          }),
        ],
      });
}
var wo,
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
  Ko = e(() => {
    (t(),
      h(),
      r(),
      G(),
      I(),
      (wo = 6),
      (To = 2),
      (Eo = 220),
      (Do = 50),
      (Oo = 0.3),
      (ko = 1),
      (Ao = 40),
      (jo = 250),
      (Mo = 140),
      (No = 4),
      (Po = 1.3),
      (Fo = 12),
      (Io = ({ size: e, color: t }) =>
        x(`svg`, {
          width: e * 0.45,
          height: e * 0.45,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: t,
          strokeWidth: `2.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: x(`path`, { d: `M15 18l-6-6 6-6` }),
        })),
      (Lo = ({ size: e, color: t }) =>
        x(`svg`, {
          width: e * 0.45,
          height: e * 0.45,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: t,
          strokeWidth: `2.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: x(`path`, { d: `M9 18l6-6-6-6` }),
        })),
      (Ro = {
        items: 3,
        gap: 30,
        padding: 0,
        fit: `Contain`,
        align: `Stretch`,
        aspectRatio: 0,
        bleed: `None`,
      }),
      (zo = { interval: 3, pauseOnHover: !0, loop: !0, startAt: `Start` }),
      (Bo = { step: `Single`, draggable: !0, keyboard: !0 }),
      (Vo = {
        show: !0,
        type: `Split`,
        alignment: `Center Center`,
        prevImage: ``,
        nextImage: ``,
        fill: `#ffffff`,
        backdrop: `#000000`,
        variant: `Fill`,
        borderWidth: 1,
        borderColor: `#ffffff`,
        size: 48,
        radius: 50,
        disabledOpacity: 0.6,
        fadeIn: !1,
        inset: 20,
        gap: 10,
        offsetX: 0,
        offsetY: 0,
        shadow: !1,
        shadowColor: `rgba(0,0,0,0.2)`,
        shadowBlur: 10,
      }),
      (Ho = {
        type: `Dots`,
        alignment: `Bottom Center`,
        size: 10,
        inset: 20,
        gap: 8,
        padding: 10,
        fill: `rgba(255,255,255,0.4)`,
        activeFill: `#ffffff`,
        backdrop: `rgba(0,0,0,0.4)`,
        radius: 20,
        opacity: 0.5,
        blur: 4,
        offsetX: 0,
        offsetY: 0,
        progressWidth: 200,
        compact: !1,
        compactVisible: 3,
      }),
      (Uo = {
        enabled: !1,
        activeScale: 1.08,
        inactiveScale: 0.92,
        inactiveOpacity: 0.5,
        transitionSpeed: 0.35,
      }),
      (Wo = { type: `Fade`, mode: `Stagger`, duration: 0.4, distance: 24, stagger: 0.06 }),
      (Go = { type: `spring`, stiffness: 240, damping: 28, mass: 1 }),
      (Co.displayName = `CMS Slider`),
      W(Co, {
        content: {
          type: X.ComponentInstance,
          title: `Content`,
          description: `Connect a Collection List.`,
        },
        direction: {
          type: X.Enum,
          title: `Direction`,
          options: [`Left`, `Right`, `Up`, `Down`],
          defaultValue: `Left`,
        },
        autoPlay: { type: X.Boolean, title: `Auto Play`, defaultValue: !1 },
        items: {
          type: X.Number,
          title: `Cards in View`,
          defaultValue: 3,
          min: 1,
          max: 8,
          step: 1,
          displayStepper: !0,
          description: `Cards shown in view.`,
        },
        playback: {
          type: X.Object,
          title: `Playback`,
          controls: {
            interval: {
              type: X.Number,
              title: `Interval`,
              defaultValue: 3,
              min: 0.5,
              max: 30,
              step: 0.5,
              unit: `s`,
            },
            pauseOnHover: { type: X.Boolean, title: `Pause On Hover`, defaultValue: !0 },
            loop: {
              type: X.Boolean,
              title: `Loop`,
              defaultValue: !0,
              description: `Wraps end → start.`,
            },
            startAt: {
              type: X.Enum,
              title: `Start At`,
              options: [`Start`, `End`],
              defaultValue: `Start`,
            },
          },
        },
        layout: {
          type: X.Object,
          title: `Layout`,
          controls: {
            gap: {
              type: X.Number,
              title: `Gap`,
              defaultValue: 30,
              min: 0,
              max: 120,
              step: 5,
              unit: `px`,
            },
            padding: {
              type: X.Number,
              title: `Padding`,
              defaultValue: 0,
              min: 0,
              max: 120,
              step: 5,
              unit: `px`,
            },
            fit: {
              type: X.Enum,
              title: `Fit`,
              options: [`Fill`, `Contain`],
              defaultValue: `Contain`,
              description: `Fill stretches to the slider. Contain uses the card's own size.`,
            },
            align: {
              type: X.Enum,
              title: `Align`,
              options: [`Start`, `Center`, `End`, `Stretch`],
              defaultValue: `Stretch`,
              description: `Position of cards when Fit is Contain.`,
            },
            aspectRatio: {
              type: X.Number,
              title: `Aspect Ratio`,
              defaultValue: 0,
              min: 0,
              max: 10,
              step: 0.1,
              description: `Per-card width ÷ height. 0 = off. Use with fit-content height in Framer (e.g. 1.5 = 3:2, 2 = 2:1).`,
            },
            bleed: {
              type: X.Enum,
              title: `Bleed`,
              options: [`None`, `Right`, `Both`],
              defaultValue: `None`,
              description: `Let off-screen cards peek past the slider edges. Use with a max-width parent so cards bleed into the page gutter.`,
            },
          },
        },
        centerFocus: {
          type: X.Object,
          title: `Center Focus`,
          controls: {
            enabled: {
              type: X.Boolean,
              title: `Enabled`,
              defaultValue: !1,
              description: `Scale up the center item.`,
            },
            activeScale: {
              type: X.Number,
              title: `Active Scale`,
              defaultValue: 1.08,
              min: 1,
              max: 1.5,
              step: 0.02,
            },
            inactiveScale: {
              type: X.Number,
              title: `Inactive Scale`,
              defaultValue: 0.92,
              min: 0.5,
              max: 1,
              step: 0.02,
            },
            inactiveOpacity: {
              type: X.Number,
              title: `Inactive Opacity`,
              defaultValue: 0.5,
              min: 0.1,
              max: 1,
              step: 0.05,
            },
            transitionSpeed: {
              type: X.Number,
              title: `Speed`,
              defaultValue: 0.35,
              min: 0.1,
              max: 1,
              step: 0.05,
              unit: `s`,
            },
          },
        },
        appear: {
          type: X.Object,
          title: `Appear`,
          controls: {
            type: {
              type: X.Enum,
              title: `Effect`,
              options: [`None`, `Fade`, `Slide Up`, `Slide Down`, `Scale`, `Blur`],
              defaultValue: `Fade`,
              description: `Animation when the slider first becomes ready.`,
            },
            mode: {
              type: X.Enum,
              title: `Mode`,
              options: [`Stagger`, `All Together`],
              defaultValue: `Stagger`,
              description: `Stagger cascades each card. All Together animates the whole slider.`,
              hidden: (e) => e.type === `None`,
            },
            stagger: {
              type: X.Number,
              title: `Stagger`,
              defaultValue: 0.06,
              min: 0,
              max: 0.3,
              step: 0.02,
              unit: `s`,
              description: `Delay between each card.`,
              hidden: (e) => e.type === `None` || e.mode !== `Stagger`,
            },
            duration: {
              type: X.Number,
              title: `Duration`,
              defaultValue: 0.4,
              min: 0.1,
              max: 2,
              step: 0.05,
              unit: `s`,
              hidden: (e) => e.type === `None`,
            },
            distance: {
              type: X.Number,
              title: `Distance`,
              defaultValue: 24,
              min: 0,
              max: 200,
              step: 2,
              unit: `px`,
              description: `Slide distance when using a Slide effect.`,
              hidden: (e) => e.type !== `Slide Up` && e.type !== `Slide Down`,
            },
          },
        },
        navigation: {
          type: X.Object,
          title: `Interaction`,
          controls: {
            step: {
              type: X.Enum,
              title: `Scroll Step`,
              options: [`Single`, `Page`],
              optionTitles: [`One Card`, `Full Page`],
              defaultValue: `Single`,
            },
            draggable: { type: X.Boolean, title: `Draggable`, defaultValue: !0 },
            keyboard: {
              type: X.Boolean,
              title: `Keyboard`,
              defaultValue: !0,
              description: `Arrow keys.`,
            },
          },
        },
        animationOptions: {
          title: `Animation`,
          type: X.Transition,
          defaultValue: { type: `spring`, stiffness: 240, damping: 28, mass: 1 },
        },
        arrowAlignment: {
          title: `Arrow Alignment`,
          type: X.Enum,
          options: [
            `Top Left`,
            `Top Center`,
            `Top Right`,
            `Center Left`,
            `Center Center`,
            `Center Right`,
            `Bottom Left`,
            `Bottom Center`,
            `Bottom Right`,
          ],
          defaultValue: `Center Center`,
        },
        arrowSize: {
          title: `Arrow Size`,
          type: X.Number,
          defaultValue: 48,
          min: 24,
          max: 88,
          step: 2,
          unit: `px`,
        },
        arrowOffsetX: {
          title: `Arrow Offset X`,
          type: X.Number,
          defaultValue: 0,
          min: -500,
          max: 500,
          step: 5,
          unit: `px`,
        },
        arrowOffsetY: {
          title: `Arrow Offset Y`,
          type: X.Number,
          defaultValue: 0,
          min: -500,
          max: 500,
          step: 5,
          unit: `px`,
        },
        arrows: {
          type: X.Object,
          title: `Arrows`,
          controls: {
            show: { type: X.Boolean, title: `Show`, defaultValue: !0 },
            type: {
              type: X.Enum,
              title: `Type`,
              options: [`Split`, `Grouped`, `Inline`],
              defaultValue: `Split`,
              description: `Inline puts arrows on either side of the pagination.`,
            },
            prevImage: { type: X.Image, title: `Prev Icon` },
            nextImage: { type: X.Image, title: `Next Icon` },
            fill: { type: X.Color, title: `Icon Color`, defaultValue: `#ffffff` },
            variant: {
              type: X.Enum,
              title: `Style`,
              options: [`Fill`, `Outline`, `Both`],
              defaultValue: `Fill`,
              displaySegmentedControl: !0,
            },
            backdrop: {
              type: X.Color,
              title: `Background`,
              defaultValue: `#000000`,
              hidden: (e) => e.variant === `Outline`,
            },
            borderWidth: {
              type: X.Number,
              title: `Border Width`,
              defaultValue: 1,
              min: 0,
              max: 8,
              step: 0.5,
              unit: `px`,
              hidden: (e) => e.variant === `Fill`,
            },
            borderColor: {
              type: X.Color,
              title: `Border Color`,
              defaultValue: `#ffffff`,
              hidden: (e) => e.variant === `Fill`,
            },
            radius: {
              type: X.Number,
              title: `Radius`,
              defaultValue: 50,
              min: 0,
              max: 60,
              step: 2,
              unit: `px`,
            },
            disabledOpacity: {
              type: X.Number,
              title: `Disabled Opacity`,
              defaultValue: 0.6,
              min: 0,
              max: 1,
              step: 0.05,
            },
            fadeIn: {
              type: X.Boolean,
              title: `Hover Only`,
              defaultValue: !1,
              description: `Show arrows only on hover or focus.`,
            },
            inset: {
              type: X.Number,
              title: `Inset`,
              defaultValue: 20,
              min: -200,
              max: 200,
              step: 5,
              unit: `px`,
            },
            gap: {
              type: X.Number,
              title: `Gap`,
              defaultValue: 10,
              min: 0,
              max: 50,
              step: 1,
              unit: `px`,
              description: `When Grouped or Inline.`,
              hidden: (e) => e.type === `Split`,
            },
            shadow: { type: X.Boolean, title: `Shadow`, defaultValue: !1 },
            shadowColor: { type: X.Color, title: `Shadow Color`, defaultValue: `rgba(0,0,0,0.2)` },
            shadowBlur: {
              type: X.Number,
              title: `Shadow Blur`,
              defaultValue: 10,
              min: 0,
              max: 50,
              step: 1,
              unit: `px`,
            },
          },
        },
        dots: {
          type: X.Object,
          title: `Pagination`,
          controls: {
            type: {
              type: X.Enum,
              title: `Type`,
              options: [`Dots`, `Progress`, `Numbers`, `None`],
              optionTitles: [`Dots`, `Progress Bar`, `Numbers`, `None`],
              defaultValue: `Dots`,
            },
            alignment: {
              type: X.Enum,
              title: `Alignment`,
              options: [
                `Top Left`,
                `Top Center`,
                `Top Right`,
                `Center Left`,
                `Center Center`,
                `Center Right`,
                `Bottom Left`,
                `Bottom Center`,
                `Bottom Right`,
              ],
              defaultValue: `Bottom Center`,
              description: `Ignored when arrows are set to Inline.`,
            },
            size: {
              type: X.Number,
              title: `Size`,
              defaultValue: 10,
              min: 6,
              max: 22,
              step: 1,
              unit: `px`,
            },
            inset: {
              type: X.Number,
              title: `Inset`,
              defaultValue: 20,
              min: -120,
              max: 120,
              step: 5,
              unit: `px`,
              description: `Distance from the aligned edge.`,
            },
            offsetX: {
              type: X.Number,
              title: `Offset X`,
              defaultValue: 0,
              min: -500,
              max: 500,
              step: 5,
              unit: `px`,
            },
            offsetY: {
              type: X.Number,
              title: `Offset Y`,
              defaultValue: 0,
              min: -500,
              max: 500,
              step: 5,
              unit: `px`,
            },
            progressWidth: {
              type: X.Number,
              title: `Bar Width`,
              defaultValue: 200,
              min: 40,
              max: 600,
              step: 10,
              unit: `px`,
              description: `Inline progress width. Standalone progress fills the CMS children container.`,
            },
            compact: {
              type: X.Boolean,
              title: `Compact`,
              defaultValue: !1,
              description: `Window of dots that slides with the active one.`,
            },
            compactVisible: {
              type: X.Number,
              title: `Visible`,
              defaultValue: 3,
              min: 1,
              max: 9,
              step: 1,
              displayStepper: !0,
              description: `Max dots shown when Compact is on.`,
            },
            gap: {
              type: X.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 2,
              max: 24,
              step: 1,
              unit: `px`,
            },
            padding: {
              type: X.Number,
              title: `Padding`,
              defaultValue: 10,
              min: 0,
              max: 28,
              step: 1,
              unit: `px`,
            },
            fill: { type: X.Color, title: `Inactive Color`, defaultValue: `rgba(255,255,255,0.4)` },
            activeFill: { type: X.Color, title: `Active Color`, defaultValue: `#ffffff` },
            backdrop: { type: X.Color, title: `Backdrop`, defaultValue: `rgba(0,0,0,0.4)` },
            radius: {
              type: X.Number,
              title: `Radius`,
              defaultValue: 20,
              min: 0,
              max: 60,
              step: 2,
              unit: `px`,
            },
            opacity: {
              type: X.Number,
              title: `Opacity`,
              defaultValue: 0.5,
              min: 0.05,
              max: 1,
              step: 0.05,
            },
            blur: {
              type: X.Number,
              title: `Blur`,
              defaultValue: 4,
              min: 0,
              max: 24,
              step: 1,
              unit: `px`,
              description: `Backdrop blur.`,
            },
          },
        },
      }));
  });
function qo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  $,
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
  vs = e(() => {
    (h(),
      G(),
      I(),
      r(),
      ht(),
      Je(),
      $e(),
      xt(),
      (Jo = q(Q)),
      (Yo = q(yt)),
      (Xo = Z(yt)),
      (Zo = [
        `KMSKWWiV1`,
        `STSOFTAKi`,
        `QV76kbjy5`,
        `y8XlSji9I`,
        `iEnChLm1E`,
        `GbAXIPfNF`,
        `Gy5xKP9Qt`,
      ]),
      (Qo = `framer-FAw1E`),
      ($o = {
        GbAXIPfNF: `framer-v-1mtwfva`,
        Gy5xKP9Qt: `framer-v-1xb27pb`,
        iEnChLm1E: `framer-v-1wstczs`,
        KMSKWWiV1: `framer-v-1hpsoda`,
        QV76kbjy5: `framer-v-1idsj9j`,
        STSOFTAKi: `framer-v-1r0t45m`,
        y8XlSji9I: `framer-v-17a1k2n`,
      }),
      (es = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (ts = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($ = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ns = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (rs = () => ({
        from: { alias: `A9EuilnTJ`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `A9EuilnTJ`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `A9EuilnTJ`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `A9EuilnTJ`, name: `id`, type: `Identifier` },
        ],
        where: {
          arguments: [
            { collection: `A9EuilnTJ`, name: `sb5C2g1qc`, type: `Identifier` },
            { type: `LiteralValue`, value: `Best Sellers` },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
      })),
      (is = ({ query: e, pageSize: t, children: n }) => n(Ne(e))),
      (as = () => ({
        from: { alias: `w6CqHKoLj`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `w6CqHKoLj`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `w6CqHKoLj`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `w6CqHKoLj`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: { collection: `w6CqHKoLj`, name: `jUaWCseQj`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `Jacket` },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `w6CqHKoLj`, name: `sb5C2g1qc`, type: `Identifier` },
              { type: `LiteralValue`, value: `Best Sellers` },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (os = () => ({
        from: { alias: `dqQgLPuw8`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `dqQgLPuw8`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `dqQgLPuw8`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `dqQgLPuw8`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: { collection: `dqQgLPuw8`, name: `jUaWCseQj`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `Sweater` },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `dqQgLPuw8`, name: `sb5C2g1qc`, type: `Identifier` },
              { type: `LiteralValue`, value: `Best Sellers` },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (ss = () => ({
        from: { alias: `AwDbMo9bO`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `AwDbMo9bO`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `AwDbMo9bO`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `AwDbMo9bO`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: { collection: `AwDbMo9bO`, name: `jUaWCseQj`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `Hoodie` },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `AwDbMo9bO`, name: `sb5C2g1qc`, type: `Identifier` },
              { type: `LiteralValue`, value: `Best Sellers` },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (cs = () => ({
        from: { alias: `gGZMR6Wux`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `gGZMR6Wux`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `gGZMR6Wux`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `gGZMR6Wux`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: { collection: `gGZMR6Wux`, name: `jUaWCseQj`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `Pants` },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `gGZMR6Wux`, name: `sb5C2g1qc`, type: `Identifier` },
              { type: `LiteralValue`, value: `Best Sellers` },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (ls = () => ({
        from: { alias: `vZGPQfnLo`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `vZGPQfnLo`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `vZGPQfnLo`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `vZGPQfnLo`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: { collection: `vZGPQfnLo`, name: `jUaWCseQj`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `T-Shirt` },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `vZGPQfnLo`, name: `sb5C2g1qc`, type: `Identifier` },
              { type: `LiteralValue`, value: `Best Sellers` },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (us = () => ({
        from: { alias: `nRZ02Lbyf`, data: qe, type: `Collection` },
        orderBy: [
          { collection: `nRZ02Lbyf`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `nRZ02Lbyf`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `nRZ02Lbyf`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: { collection: `nRZ02Lbyf`, name: `jUaWCseQj`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `Cardigan` },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `nRZ02Lbyf`, name: `sb5C2g1qc`, type: `Identifier` },
              { type: `LiteralValue`, value: `Best Sellers` },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (ds = (e) => !e),
      (fs = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (ps = {
        "T-Shirt": `GbAXIPfNF`,
        All: `KMSKWWiV1`,
        Cardigan: `Gy5xKP9Qt`,
        Hoodie: `y8XlSji9I`,
        Jacket: `STSOFTAKi`,
        Pants: `iEnChLm1E`,
        Sweater: `QV76kbjy5`,
      }),
      (ms = O.create(s)),
      (hs = ({
        arrowAlignment: e,
        arrowOffsetX: t,
        arrowOffsetY: n,
        arrowSize: r,
        height: i,
        hideViewMoreText: a,
        id: o,
        sliderItems: s,
        sliderPadding: c,
        width: l,
        wishlistClick: u,
        ...d
      }) => ({
        ...d,
        bXXywe8Ow: s ?? d.bXXywe8Ow ?? 4,
        dH7nZ6hh_: n ?? d.dH7nZ6hh_ ?? -55,
        lzxNl7w4m: u ?? d.lzxNl7w4m,
        Pcfe2IRFd: e ?? d.Pcfe2IRFd ?? `Top Right`,
        SXLPYJYw7: a ?? d.SXLPYJYw7 ?? !1,
        UamZxag6B: c ?? d.UamZxag6B ?? `56px 0px 0px 0px`,
        uWpF2pMwk: t ?? d.uWpF2pMwk ?? 0,
        variant: ps[d.variant] ?? d.variant ?? `KMSKWWiV1`,
        vOPQ96qiV: r ?? d.vOPQ96qiV ?? 34,
      })),
      (gs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_s = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              bXXywe8Ow: m,
              lzxNl7w4m: h,
              SXLPYJYw7: g,
              Pcfe2IRFd: _,
              vOPQ96qiV: y,
              uWpF2pMwk: b,
              dH7nZ6hh_: C,
              UamZxag6B: w,
              ...T
            } = hs(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: k,
              isLoading: ne,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = _e({
              cycleOrder: Zo,
              defaultVariant: `KMSKWWiV1`,
              ref: r,
              variant: p,
              variantClassNames: $o,
            }),
            P = gs(e, N),
            F = V(Qo, nt),
            I = () =>
              ![
                `STSOFTAKi`,
                `QV76kbjy5`,
                `y8XlSji9I`,
                `iEnChLm1E`,
                `GbAXIPfNF`,
                `Gy5xKP9Qt`,
              ].includes(E);
          je();
          let { activeVariantCallback: re, delay: ie } = Ie(E),
            R = re(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            ae = () => E === `STSOFTAKi`,
            z = () => E === `QV76kbjy5`,
            oe = () => E === `y8XlSji9I`,
            se = () => E === `iEnChLm1E`,
            ce = () => E === `GbAXIPfNF`,
            le = () => E === `Gy5xKP9Qt`,
            ue = ds(g);
          return x(A, {
            id: d ?? a,
            children: x(ms, {
              animate: N,
              initial: !1,
              children: x(fs, {
                value: ts,
                children: S(O.div, {
                  ...T,
                  ...te,
                  className: V(F, `framer-1hpsoda`, u, D),
                  "data-framer-name": `All`,
                  layoutDependency: P,
                  layoutId: `KMSKWWiV1`,
                  ref: r,
                  style: { "--nlwbvb": es(w), ...l },
                  ...qo(
                    {
                      GbAXIPfNF: { "data-framer-name": `T-Shirt` },
                      Gy5xKP9Qt: { "data-framer-name": `Cardigan` },
                      iEnChLm1E: { "data-framer-name": `Pants` },
                      QV76kbjy5: { "data-framer-name": `Sweater` },
                      STSOFTAKi: { "data-framer-name": `Jacket` },
                      y8XlSji9I: { "data-framer-name": `Hoodie` },
                    },
                    E,
                    k
                  ),
                  children: [
                    I() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-u2l9w-container`,
                          "data-framer-name": `CMS Slider - All`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `piX_SuYac-container`,
                          name: `CMS Slider - All`,
                          nodeId: `piX_SuYac`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-ek03e8`,
                                "data-framer-name": `Products - All`,
                                layoutDependency: P,
                                layoutId: `A9EuilnTJ`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: rs(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `A9EuilnTJ-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `297px`,
                                                        children: x(L, {
                                                          className: `framer-om9czn-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `jNGf6Xoat-container`,
                                                          nodeId: `jNGf6Xoat`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `jNGf6Xoat`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `jNGf6Xoat`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `piX_SuYac`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `piX_SuYac`,
                            name: `CMS Slider - All`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    ae() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-17w5eh1-container`,
                          "data-framer-name": `CMS Slider - Jacket`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `jfuAEkFUH-container`,
                          name: `CMS Slider - Jacket`,
                          nodeId: `jfuAEkFUH`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-12c9cgz`,
                                "data-framer-name": `Products - Jacket`,
                                layoutDependency: P,
                                layoutId: `w6CqHKoLj`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: as(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `w6CqHKoLj-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `330px`,
                                                        children: x(L, {
                                                          className: `framer-1hi7qys-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `Hn_2AMFf2-container`,
                                                          nodeId: `Hn_2AMFf2`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `Hn_2AMFf2`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `Hn_2AMFf2`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `jfuAEkFUH`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `jfuAEkFUH`,
                            name: `CMS Slider - Jacket`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    z() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-hi8xo2-container`,
                          "data-framer-name": `CMS Slider - Sweater`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `hOCGOrcOU-container`,
                          name: `CMS Slider - Sweater`,
                          nodeId: `hOCGOrcOU`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-11m7oq2`,
                                "data-framer-name": `Products - Sweater`,
                                layoutDependency: P,
                                layoutId: `dqQgLPuw8`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: os(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `dqQgLPuw8-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `330px`,
                                                        children: x(L, {
                                                          className: `framer-p03ume-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `EJ6QlW57C-container`,
                                                          nodeId: `EJ6QlW57C`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `EJ6QlW57C`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `EJ6QlW57C`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `hOCGOrcOU`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `hOCGOrcOU`,
                            name: `CMS Slider - Sweater`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    oe() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-1nxk1f9-container`,
                          "data-framer-name": `CMS Slider - Hoodie`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `k6R4_Tcfw-container`,
                          name: `CMS Slider - Hoodie`,
                          nodeId: `k6R4_Tcfw`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-j6wuyo`,
                                "data-framer-name": `Products - Hoodie`,
                                layoutDependency: P,
                                layoutId: `AwDbMo9bO`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: ss(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `AwDbMo9bO-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `330px`,
                                                        children: x(L, {
                                                          className: `framer-1nl096-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `oVRtVjH5e-container`,
                                                          nodeId: `oVRtVjH5e`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `oVRtVjH5e`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `oVRtVjH5e`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `k6R4_Tcfw`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `k6R4_Tcfw`,
                            name: `CMS Slider - Hoodie`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    se() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-1npqj3i-container`,
                          "data-framer-name": `CMS Slider - Pants`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `Srx4bMZr1-container`,
                          name: `CMS Slider - Pants`,
                          nodeId: `Srx4bMZr1`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-1ujqi1a`,
                                "data-framer-name": `Products - Pants`,
                                layoutDependency: P,
                                layoutId: `gGZMR6Wux`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: cs(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `gGZMR6Wux-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `330px`,
                                                        children: x(L, {
                                                          className: `framer-10o9woq-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `RfHBtK0wE-container`,
                                                          nodeId: `RfHBtK0wE`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `RfHBtK0wE`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `RfHBtK0wE`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `Srx4bMZr1`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `Srx4bMZr1`,
                            name: `CMS Slider - Pants`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    ce() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-4vlsds-container`,
                          "data-framer-name": `CMS Slider - T-Shirt`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `EsSCYNSxH-container`,
                          name: `CMS Slider - T-Shirt`,
                          nodeId: `EsSCYNSxH`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-dzru94`,
                                "data-framer-name": `Products - T-Shirt`,
                                layoutDependency: P,
                                layoutId: `vZGPQfnLo`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: ls(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `vZGPQfnLo-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `330px`,
                                                        children: x(L, {
                                                          className: `framer-13mywl4-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `Nxp1rzxwn-container`,
                                                          nodeId: `Nxp1rzxwn`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `Nxp1rzxwn`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `Nxp1rzxwn`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `EsSCYNSxH`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `EsSCYNSxH`,
                            name: `CMS Slider - T-Shirt`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    le() &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-17gsf9f-container`,
                          "data-framer-name": `CMS Slider - Cardigan`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: P,
                          layoutId: `s2Y6_U2SO-container`,
                          name: `CMS Slider - Cardigan`,
                          nodeId: `s2Y6_U2SO`,
                          rendersWithMotion: !0,
                          scopeId: `OiCzj2bEg`,
                          children: x(yt, {
                            animationOptions: {
                              delay: 0,
                              duration: 0.6,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            appear: {
                              distance: 24,
                              duration: 0.6,
                              mode: `Stagger`,
                              stagger: 0.1,
                              type: `Fade`,
                            },
                            arrowAlignment: _,
                            arrowOffsetX: b,
                            arrowOffsetY: C,
                            arrows: {
                              backdrop: `rgb(255, 255, 255)`,
                              borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              borderWidth: 1,
                              disabledOpacity: 0.6,
                              fadeIn: !1,
                              fill: `rgb(68, 68, 68)`,
                              gap: 8,
                              inset: 0,
                              nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                              prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                              radius: 50,
                              shadow: !1,
                              shadowBlur: 10,
                              shadowColor: `rgba(0, 0, 0, 0.2)`,
                              show: !0,
                              type: `Grouped`,
                              variant: `Fill`,
                            },
                            arrowSize: y,
                            autoPlay: !1,
                            centerFocus: {
                              activeScale: 1.08,
                              enabled: !1,
                              inactiveOpacity: 0.5,
                              inactiveScale: 0.92,
                              transitionSpeed: 0.35,
                            },
                            content: [
                              x(O.div, {
                                className: `framer-9bsapq`,
                                "data-framer-name": `Products - Cardigan`,
                                layoutDependency: P,
                                layoutId: `nRZ02Lbyf`,
                                children: x(Fe, {
                                  children: x(is, {
                                    query: us(),
                                    children: (e, t, n) =>
                                      x(v, {
                                        children: e?.map(
                                          (
                                            {
                                              EdlK9s4od: e,
                                              eVfKYnlqn: t,
                                              id: n,
                                              Jry1OPs1q: r,
                                              JZfMFKc2o: i,
                                              K6GheEMTC: a,
                                              k8owwKEx3: o,
                                              l2PesJvCE: s,
                                              sGLDCFVI5: c,
                                              Sn3Ji2zLH: l,
                                              StWb4Z9jo: u,
                                              u8osWsFhh: d,
                                              UxQ8VtfSI: f,
                                              vJoj3qvid: p,
                                            },
                                            m
                                          ) => (
                                            (p ??= ``),
                                            (l ??= ``),
                                            (f ??= ``),
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            x(
                                              A,
                                              {
                                                id: `nRZ02Lbyf-${n}`,
                                                children: x(ye.Provider, {
                                                  value: { JZfMFKc2o: i },
                                                  children: x(B, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { JZfMFKc2o: i },
                                                          webPageId: `vmJrVFRkR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      x(Y, {
                                                        height: 336,
                                                        width: `330px`,
                                                        children: x(L, {
                                                          className: `framer-1itk0oa-container`,
                                                          inComponentSlot: !0,
                                                          layoutDependency: P,
                                                          layoutId: `pO672wKv2-container`,
                                                          nodeId: `pO672wKv2`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `OiCzj2bEg`,
                                                          children: x(Q, {
                                                            CtxCtZRbF: R,
                                                            FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                            grTamTNk1: $(c),
                                                            height: `100%`,
                                                            hFy2PLFBG: l,
                                                            HwypVSMEi: !1,
                                                            id: `pO672wKv2`,
                                                            II0fWsmjM: `12px`,
                                                            layoutId: `pO672wKv2`,
                                                            MGgAvDoA0: n[0],
                                                            O9ZyioqcS: $(t),
                                                            OKvEEQQFQ: !1,
                                                            q1Wa9MpBb: $(d),
                                                            Qb7mSHgLh: o,
                                                            QjM5BTCWQ: !0,
                                                            SKBNP2vvn: !1,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            TCGQti0b7: f,
                                                            tJ0RQfmJy: e,
                                                            TWjfUBTmo: $(u),
                                                            ub4buTzaB: $(r),
                                                            variant: ns(`anAebR9ik`),
                                                            width: `100%`,
                                                            wsSEriDkC: s,
                                                            xYhX6dOGf: {
                                                              borderColor: `rgb(206, 206, 206)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 0,
                                                            },
                                                            YdL5oV0XS: $(a),
                                                            Zg3vnZECo: p,
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
                            direction: `Left`,
                            dots: {
                              activeFill: `rgb(255, 255, 255)`,
                              alignment: `Bottom Center`,
                              backdrop: `rgba(0, 0, 0, 0.4)`,
                              blur: 4,
                              compact: !1,
                              compactVisible: 3,
                              fill: `rgba(255, 255, 255, 0.4)`,
                              gap: 8,
                              inset: 20,
                              offsetX: 0,
                              offsetY: 0,
                              opacity: 0.5,
                              padding: 10,
                              progressWidth: 200,
                              radius: 20,
                              size: 10,
                              type: `None`,
                            },
                            height: `100%`,
                            id: `s2Y6_U2SO`,
                            items: m,
                            layout: {
                              align: `Stretch`,
                              aspectRatio: 0.8,
                              bleed: `None`,
                              fit: `Fill`,
                              gap: 16,
                              padding: 0,
                            },
                            layoutId: `s2Y6_U2SO`,
                            name: `CMS Slider - Cardigan`,
                            navigation: { draggable: !0, keyboard: !0, step: `Single` },
                            playback: {
                              interval: 3,
                              loop: !0,
                              pauseOnHover: !0,
                              startAt: `Start`,
                              tapToPause: !1,
                            },
                            slideMode: `Infinite`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    ue !== !1 &&
                      x(he, {
                        __fromCanvasComponent: !0,
                        children: x(s, {
                          children: x(O.p, {
                            className: `framer-styles-preset-arb5du`,
                            "data-styles-preset": `UOFERiKNL`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                            },
                            children: `View More`,
                          }),
                        }),
                        className: `framer-1vp9243`,
                        fonts: [`Inter`],
                        layoutDependency: P,
                        layoutId: `eQhFMaNga`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-FAw1E.framer-15sn4m0, .framer-FAw1E .framer-15sn4m0 { display: block; }`,
          `.framer-FAw1E.framer-1hpsoda { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--nlwbvb); position: relative; width: 1100px; }`,
          `.framer-FAw1E .framer-u2l9w-container, .framer-FAw1E .framer-17w5eh1-container, .framer-FAw1E .framer-hi8xo2-container, .framer-FAw1E .framer-1nxk1f9-container, .framer-FAw1E .framer-1npqj3i-container, .framer-FAw1E .framer-4vlsds-container, .framer-FAw1E .framer-17gsf9f-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-FAw1E .framer-ek03e8, .framer-FAw1E .framer-12c9cgz, .framer-FAw1E .framer-11m7oq2, .framer-FAw1E .framer-j6wuyo, .framer-FAw1E .framer-1ujqi1a, .framer-FAw1E .framer-dzru94, .framer-FAw1E .framer-9bsapq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 4px; position: relative; width: min-content; }`,
          `.framer-FAw1E .framer-om9czn-container { flex: none; height: 336px; position: relative; width: 297px; }`,
          `.framer-FAw1E .framer-1hi7qys-container, .framer-FAw1E .framer-p03ume-container, .framer-FAw1E .framer-1nl096-container, .framer-FAw1E .framer-10o9woq-container, .framer-FAw1E .framer-13mywl4-container, .framer-FAw1E .framer-1itk0oa-container { flex: none; height: 336px; position: relative; width: 330px; }`,
          `.framer-FAw1E .framer-1vp9243 { flex: none; height: auto; position: absolute; right: 85px; top: 10px; white-space: pre; width: auto; z-index: 1; }`,
          ...et,
        ],
        `framer-FAw1E`
      )),
      (_s.displayName = `Best Seller Sliders`),
      (_s.defaultProps = { height: 390, width: 1100 }),
      W(_s, {
        variant: {
          options: [
            `KMSKWWiV1`,
            `STSOFTAKi`,
            `QV76kbjy5`,
            `y8XlSji9I`,
            `iEnChLm1E`,
            `GbAXIPfNF`,
            `Gy5xKP9Qt`,
          ],
          optionTitles: [`All`, `Jacket`, `Sweater`, `Hoodie`, `Pants`, `T-Shirt`, `Cardigan`],
          title: `Variant`,
          type: X.Enum,
        },
        bXXywe8Ow: {
          defaultValue: 4,
          displayStepper: !0,
          max: 8,
          min: 1,
          step: 1,
          title: `Slider Items`,
          type: X.Number,
        },
        onbXXywe8OwChange: { changes: `bXXywe8Ow`, type: X.ChangeHandler },
        lzxNl7w4m: { title: `Wishlist Click`, type: X.EventHandler },
        SXLPYJYw7: { defaultValue: !1, title: `Hide View More text`, type: X.Boolean },
        onSXLPYJYw7Change: { changes: `SXLPYJYw7`, type: X.ChangeHandler },
        Pcfe2IRFd: Xo?.arrowAlignment && {
          ...Xo.arrowAlignment,
          defaultValue: `Top Right`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Arrow Alignment`,
        },
        onPcfe2IRFdChange: { changes: `Pcfe2IRFd`, type: X.ChangeHandler },
        vOPQ96qiV: {
          defaultValue: 34,
          max: 88,
          min: 24,
          step: 2,
          title: `Arrow Size`,
          type: X.Number,
        },
        onvOPQ96qiVChange: { changes: `vOPQ96qiV`, type: X.ChangeHandler },
        uWpF2pMwk: {
          defaultValue: 0,
          max: 500,
          min: -500,
          step: 5,
          title: `Arrow Offset X`,
          type: X.Number,
        },
        onuWpF2pMwkChange: { changes: `uWpF2pMwk`, type: X.ChangeHandler },
        dH7nZ6hh_: {
          defaultValue: -55,
          max: 500,
          min: -500,
          step: 5,
          title: `Arrow Offset Y`,
          type: X.Number,
        },
        ondH7nZ6hh_Change: { changes: `dH7nZ6hh_`, type: X.ChangeHandler },
        UamZxag6B: { defaultValue: `56px 0px 0px 0px`, title: `Slider Padding`, type: X.Padding },
      }),
      U(
        _s,
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
          ...Jo,
          ...Yo,
          ...ue(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (_s.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = J.get(rs(), n, r),
            a = J.get(as(), n, r),
            o = J.get(os(), n, r),
            s = J.get(ss(), n, r),
            c = J.get(cs(), n, r),
            l = J.get(ls(), n, r),
            u = J.get(us(), n, r);
          return Re(
            [
              () => i.preload(),
              () => a.preload(),
              () => o.preload(),
              () => s.preload(),
              () => c.preload(),
              () => l.preload(),
              () => u.preload(),
              async () =>
                Re(
                  ((await Ee(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => o.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => s.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => c.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => l.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
              async () =>
                Re(
                  ((await Ee(() => u.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Q, {}, t)),
                  t
                ),
            ],
            t
          );
        },
      }));
  });
function ys(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is = e(() => {
    (h(),
      G(),
      I(),
      r(),
      Ko(),
      wt(),
      vs(),
      (bs = q(Tt)),
      (xs = q(_s)),
      (Ss = Z(Co)),
      (Cs = [
        `K9t5vziCL`,
        `XKq3yYqbo`,
        `WmGXOnO4Q`,
        `v6WnVGqc6`,
        `PAtp37NjW`,
        `jfb4hGevm`,
        `tYVAM5Eej`,
      ]),
      (ws = `framer-JyyS3`),
      (Ts = {
        jfb4hGevm: `framer-v-171nxu6`,
        K9t5vziCL: `framer-v-1lfnk8w`,
        PAtp37NjW: `framer-v-1rcr6xv`,
        tYVAM5Eej: `framer-v-qopur2`,
        v6WnVGqc6: `framer-v-mtszeg`,
        WmGXOnO4Q: `framer-v-asphgg`,
        XKq3yYqbo: `framer-v-nrbi5f`,
      }),
      (Es = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Ds = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Os = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ks = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (As = {
        "All Tab": `K9t5vziCL`,
        "Cardigan Tab": `tYVAM5Eej`,
        "Hoodie Tab": `v6WnVGqc6`,
        "Jacket Tab": `XKq3yYqbo`,
        "Pants Tab": `PAtp37NjW`,
        "Sweater Tab": `WmGXOnO4Q`,
        "T-Shirt Tab": `jfb4hGevm`,
      }),
      (js = O.create(s)),
      (Ms = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Ns = ({
        arrowAlignment: e,
        arrowOffsetX: t,
        arrowOffsetY: n,
        arrowSize: r,
        height: i,
        hideViewMoreText: a,
        id: o,
        sliderItems: s,
        sliderPadding: c,
        tabPadding: l,
        tabSliderGap: u,
        width: d,
        wishlistClick: f,
        ...p
      }) => ({
        ...p,
        e4iQZ8rQF: c ?? p.e4iQZ8rQF ?? `56px 0px 0px 0px`,
        fkXS9yO5r: e ?? p.fkXS9yO5r ?? `Top Right`,
        kM35a554y: t ?? p.kM35a554y,
        l1PolTIP3: n ?? p.l1PolTIP3 ?? -55,
        lEWAFiRdp: u ?? p.lEWAFiRdp,
        pTrTbMvkb: a ?? p.pTrTbMvkb,
        suKMdPBHQ: r ?? p.suKMdPBHQ ?? 34,
        tf8Lk0rL8: l ?? p.tf8Lk0rL8 ?? `5px 20px 5px 20px`,
        variant: As[p.variant] ?? p.variant ?? `K9t5vziCL`,
        wCNS_Sekq: s ?? p.wCNS_Sekq ?? 4,
        wE32AWBje: f ?? p.wE32AWBje,
      })),
      (Ps = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Fs = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              wE32AWBje: m,
              wCNS_Sekq: h,
              onwCNS_SekqChange: g,
              lEWAFiRdp: _,
              tf8Lk0rL8: v,
              pTrTbMvkb: y,
              onpTrTbMvkbChange: b,
              fkXS9yO5r: C,
              onfkXS9yO5rChange: w,
              suKMdPBHQ: T,
              onsuKMdPBHQChange: E,
              kM35a554y: D,
              onkM35a554yChange: ee,
              l1PolTIP3: te,
              onl1PolTIP3Change: k,
              e4iQZ8rQF: ne,
              ...j
            } = Ns(e),
            [M, N] = Ms(h, g),
            [P, F] = Ms(y, b),
            [I, re] = Ms(C, w),
            [ie, R] = Ms(T, E),
            [ae, z] = Ms(D, ee),
            [B, oe] = Ms(te, k),
            {
              baseVariant: se,
              classNames: ce,
              clearLoadingGesture: le,
              gestureHandlers: ue,
              gestureVariant: H,
              isLoading: de,
              setGestureState: fe,
              setVariant: U,
              variants: pe,
            } = _e({
              cycleOrder: Cs,
              defaultVariant: `K9t5vziCL`,
              ref: r,
              variant: p,
              variantClassNames: Ts,
            }),
            W = Ps(e, pe),
            { activeVariantCallback: me, delay: he } = Ie(se),
            ge = me(async (...e) => {
              U(`K9t5vziCL`);
            }),
            G = me(async (...e) => {
              U(`XKq3yYqbo`);
            }),
            K = me(async (...e) => {
              U(`WmGXOnO4Q`);
            }),
            ve = me(async (...e) => {
              U(`v6WnVGqc6`);
            }),
            ye = me(async (...e) => {
              U(`PAtp37NjW`);
            }),
            be = me(async (...e) => {
              U(`jfb4hGevm`);
            }),
            xe = me(async (...e) => {
              U(`tYVAM5Eej`);
            }),
            Ce = me(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            q = V(ws);
          return x(A, {
            id: d ?? a,
            children: x(js, {
              animate: pe,
              initial: !1,
              children: x(ks, {
                value: Ds,
                children: S(O.div, {
                  ...j,
                  ...ue,
                  className: V(q, `framer-1lfnk8w`, u, ce),
                  "data-framer-name": `All Tab`,
                  layoutDependency: W,
                  layoutId: `K9t5vziCL`,
                  ref: r,
                  style: { "--v4na8l": Es(_), ...l },
                  ...ys(
                    {
                      jfb4hGevm: { "data-framer-name": `T-Shirt Tab` },
                      PAtp37NjW: { "data-framer-name": `Pants Tab` },
                      tYVAM5Eej: { "data-framer-name": `Cardigan Tab` },
                      v6WnVGqc6: { "data-framer-name": `Hoodie Tab` },
                      WmGXOnO4Q: { "data-framer-name": `Sweater Tab` },
                      XKq3yYqbo: { "data-framer-name": `Jacket Tab` },
                    },
                    se,
                    H
                  ),
                  children: [
                    S(O.div, {
                      className: `framer-og98qh`,
                      "data-framer-name": `Tabs`,
                      "data-hide-scrollbars": !0,
                      layoutDependency: W,
                      layoutId: `cG5JOc_va`,
                      children: [
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-ws3wxl-container`,
                            layoutDependency: W,
                            layoutId: `tsjL4Uy2M-container`,
                            nodeId: `tsjL4Uy2M`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `tsjL4Uy2M`,
                              layoutId: `tsjL4Uy2M`,
                              R3A8bGfB1: `All`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`I1VVyLX7t`),
                              width: `100%`,
                              wt0MSxg3E: ge,
                              ...ys(
                                {
                                  jfb4hGevm: { variant: Os(`odZpd01kD`) },
                                  PAtp37NjW: { variant: Os(`odZpd01kD`) },
                                  tYVAM5Eej: { variant: Os(`odZpd01kD`) },
                                  v6WnVGqc6: { variant: Os(`odZpd01kD`) },
                                  WmGXOnO4Q: { variant: Os(`odZpd01kD`) },
                                  XKq3yYqbo: { variant: Os(`odZpd01kD`) },
                                },
                                se,
                                H
                              ),
                            }),
                          }),
                        }),
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-1cidfim-container`,
                            layoutDependency: W,
                            layoutId: `Rei6RGlNJ-container`,
                            nodeId: `Rei6RGlNJ`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `Rei6RGlNJ`,
                              layoutId: `Rei6RGlNJ`,
                              R3A8bGfB1: `Jacket`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`odZpd01kD`),
                              width: `100%`,
                              wt0MSxg3E: G,
                              ...ys({ XKq3yYqbo: { variant: Os(`I1VVyLX7t`) } }, se, H),
                            }),
                          }),
                        }),
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-px7g3t-container`,
                            layoutDependency: W,
                            layoutId: `Y0LPD0cKC-container`,
                            nodeId: `Y0LPD0cKC`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `Y0LPD0cKC`,
                              layoutId: `Y0LPD0cKC`,
                              R3A8bGfB1: `Sweater`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`odZpd01kD`),
                              width: `100%`,
                              wt0MSxg3E: K,
                              ...ys({ WmGXOnO4Q: { variant: Os(`I1VVyLX7t`) } }, se, H),
                            }),
                          }),
                        }),
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-1m2fqid-container`,
                            layoutDependency: W,
                            layoutId: `oOjcy6Raq-container`,
                            nodeId: `oOjcy6Raq`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `oOjcy6Raq`,
                              layoutId: `oOjcy6Raq`,
                              R3A8bGfB1: `Hoodie`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`odZpd01kD`),
                              width: `100%`,
                              wt0MSxg3E: ve,
                              ...ys({ v6WnVGqc6: { variant: Os(`I1VVyLX7t`) } }, se, H),
                            }),
                          }),
                        }),
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-a7vfa1-container`,
                            layoutDependency: W,
                            layoutId: `o3hsm2C0v-container`,
                            nodeId: `o3hsm2C0v`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `o3hsm2C0v`,
                              layoutId: `o3hsm2C0v`,
                              R3A8bGfB1: `Pants`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`odZpd01kD`),
                              width: `100%`,
                              wt0MSxg3E: ye,
                              ...ys({ PAtp37NjW: { variant: Os(`I1VVyLX7t`) } }, se, H),
                            }),
                          }),
                        }),
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-12qzfn-container`,
                            layoutDependency: W,
                            layoutId: `tX4pAjHuf-container`,
                            nodeId: `tX4pAjHuf`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `tX4pAjHuf`,
                              layoutId: `tX4pAjHuf`,
                              R3A8bGfB1: `T-Shirt`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`odZpd01kD`),
                              width: `100%`,
                              wt0MSxg3E: be,
                              ...ys({ jfb4hGevm: { variant: Os(`I1VVyLX7t`) } }, se, H),
                            }),
                          }),
                        }),
                        x(Y, {
                          height: 29,
                          y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 0 + 0) + 0,
                          ...ys(
                            {
                              jfb4hGevm: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              PAtp37NjW: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                              tYVAM5Eej: {
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 419) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            se,
                            H
                          ),
                          children: x(L, {
                            className: `framer-1sq9f16-container`,
                            layoutDependency: W,
                            layoutId: `WbhO6dPk1-container`,
                            nodeId: `WbhO6dPk1`,
                            rendersWithMotion: !0,
                            scopeId: `Rn0krEA2V`,
                            children: x(Tt, {
                              height: `100%`,
                              id: `WbhO6dPk1`,
                              layoutId: `WbhO6dPk1`,
                              R3A8bGfB1: `Cardigan`,
                              rvv_MNzYv: Es(v),
                              variant: Os(`odZpd01kD`),
                              width: `100%`,
                              wt0MSxg3E: xe,
                              ...ys({ tYVAM5Eej: { variant: Os(`I1VVyLX7t`) } }, se, H),
                            }),
                          }),
                        }),
                      ],
                    }),
                    x(Y, {
                      height: 390,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 419.5) - 0 - 419) / 2 + 29 + 0),
                      ...ys(
                        {
                          jfb4hGevm: {
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 419) / 2 + 29 + 0),
                          },
                          PAtp37NjW: {
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 419) / 2 + 29 + 0),
                          },
                          tYVAM5Eej: {
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 419) / 2 + 29 + 0),
                          },
                        },
                        se,
                        H
                      ),
                      children: x(L, {
                        className: `framer-1jxx7n2-container`,
                        layoutDependency: W,
                        layoutId: `boeicySMW-container`,
                        nodeId: `boeicySMW`,
                        rendersWithMotion: !0,
                        scopeId: `Rn0krEA2V`,
                        children: x(_s, {
                          bXXywe8Ow: M,
                          dH7nZ6hh_: B,
                          height: `100%`,
                          id: `boeicySMW`,
                          layoutId: `boeicySMW`,
                          lzxNl7w4m: Ce,
                          onbXXywe8OwChange: N,
                          ondH7nZ6hh_Change: oe,
                          onPcfe2IRFdChange: re,
                          onSXLPYJYw7Change: F,
                          onuWpF2pMwkChange: z,
                          onvOPQ96qiVChange: R,
                          Pcfe2IRFd: I,
                          style: { width: `100%` },
                          SXLPYJYw7: P,
                          UamZxag6B: Es(ne),
                          uWpF2pMwk: ae,
                          variant: Os(`KMSKWWiV1`),
                          vOPQ96qiV: ie,
                          width: `100%`,
                          ...ys(
                            {
                              jfb4hGevm: { variant: Os(`GbAXIPfNF`) },
                              PAtp37NjW: { variant: Os(`iEnChLm1E`) },
                              tYVAM5Eej: { variant: Os(`Gy5xKP9Qt`) },
                              v6WnVGqc6: { variant: Os(`y8XlSji9I`) },
                              WmGXOnO4Q: { variant: Os(`QV76kbjy5`) },
                              XKq3yYqbo: { variant: Os(`STSOFTAKi`) },
                            },
                            se,
                            H
                          ),
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
          `.framer-JyyS3.framer-udky5q, .framer-JyyS3 .framer-udky5q { display: block; }`,
          `.framer-JyyS3.framer-1lfnk8w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: var(--v4na8l); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1100px; }`,
          `.framer-JyyS3 .framer-og98qh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px; position: relative; width: 100%; }`,
          `.framer-JyyS3 .framer-ws3wxl-container, .framer-JyyS3 .framer-1cidfim-container, .framer-JyyS3 .framer-px7g3t-container, .framer-JyyS3 .framer-1m2fqid-container, .framer-JyyS3 .framer-a7vfa1-container, .framer-JyyS3 .framer-12qzfn-container, .framer-JyyS3 .framer-1sq9f16-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-JyyS3 .framer-1jxx7n2-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-JyyS3[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-JyyS3 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-JyyS3[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-JyyS3 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-JyyS3[data-hide-scrollbars="true"], .framer-JyyS3 [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-JyyS3`
      )),
      (Fs.displayName = `Best Seller Slider`),
      (Fs.defaultProps = { height: 419.5, width: 1100 }),
      W(Fs, {
        variant: {
          options: [
            `K9t5vziCL`,
            `XKq3yYqbo`,
            `WmGXOnO4Q`,
            `v6WnVGqc6`,
            `PAtp37NjW`,
            `jfb4hGevm`,
            `tYVAM5Eej`,
          ],
          optionTitles: [
            `All Tab`,
            `Jacket Tab`,
            `Sweater Tab`,
            `Hoodie Tab`,
            `Pants Tab`,
            `T-Shirt Tab`,
            `Cardigan Tab`,
          ],
          title: `Variant`,
          type: X.Enum,
        },
        wE32AWBje: { title: `Wishlist Click`, type: X.EventHandler },
        wCNS_Sekq: {
          defaultValue: 4,
          displayStepper: !0,
          max: 8,
          min: 1,
          step: 1,
          title: `Slider Items`,
          type: X.Number,
        },
        onwCNS_SekqChange: { changes: `wCNS_Sekq`, type: X.ChangeHandler },
        lEWAFiRdp: { defaultValue: 0, min: 0, title: `Tab <> Slider Gap`, type: X.Number },
        onlEWAFiRdpChange: { changes: `lEWAFiRdp`, type: X.ChangeHandler },
        tf8Lk0rL8: { defaultValue: `5px 20px 5px 20px`, title: `Tab Padding`, type: X.Padding },
        pTrTbMvkb: { defaultValue: !1, title: `Hide View More Text`, type: X.Boolean },
        onpTrTbMvkbChange: { changes: `pTrTbMvkb`, type: X.ChangeHandler },
        fkXS9yO5r: Ss?.arrowAlignment && {
          ...Ss.arrowAlignment,
          defaultValue: `Top Right`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Arrow Alignment`,
        },
        onfkXS9yO5rChange: { changes: `fkXS9yO5r`, type: X.ChangeHandler },
        suKMdPBHQ: {
          defaultValue: 34,
          max: 88,
          min: 24,
          step: 2,
          title: `Arrow Size`,
          type: X.Number,
        },
        onsuKMdPBHQChange: { changes: `suKMdPBHQ`, type: X.ChangeHandler },
        kM35a554y: {
          defaultValue: 0,
          max: 500,
          min: -500,
          step: 5,
          title: `Arrow Offset X`,
          type: X.Number,
        },
        onkM35a554yChange: { changes: `kM35a554y`, type: X.ChangeHandler },
        l1PolTIP3: {
          defaultValue: -55,
          max: 500,
          min: -500,
          step: 5,
          title: `Arrow Offset Y`,
          type: X.Number,
        },
        onl1PolTIP3Change: { changes: `l1PolTIP3`, type: X.ChangeHandler },
        e4iQZ8rQF: { defaultValue: `56px 0px 0px 0px`, title: `Slider Padding`, type: X.Padding },
      }),
      U(Fs, [{ explicitInter: !0, fonts: [] }, ...bs, ...xs], { supportsExplicitInterCodegen: !0 }),
      (Fs.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([K(Tt, {}, t), K(_s, {}, t)])),
      }));
  });
function Ls(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs = e(() => {
    (h(),
      G(),
      I(),
      r(),
      st(),
      (Rs = q(ct)),
      (zs = [
        `kng7dG9oH`,
        `EWVYsX8I8`,
        `iLywYsWzU`,
        `tF9X6IxtC`,
        `mCyHHX77F`,
        `e3HHzLEhm`,
        `VtE6vWKHk`,
        `uUB89MwaR`,
        `luZrU10hV`,
      ]),
      (Bs = `framer-wlW7j`),
      (Vs = {
        e3HHzLEhm: `framer-v-1fv6pss`,
        EWVYsX8I8: `framer-v-nfo6in`,
        iLywYsWzU: `framer-v-1lu6t4u`,
        kng7dG9oH: `framer-v-gp73zx`,
        luZrU10hV: `framer-v-h8hsmm`,
        mCyHHX77F: `framer-v-132l5t0`,
        tF9X6IxtC: `framer-v-1lzuwtu`,
        uUB89MwaR: `framer-v-1cpuj05`,
        VtE6vWKHk: `framer-v-olf0ix`,
      }),
      (Hs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Us = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ws = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Gs = {
        "Phone - Female": `uUB89MwaR`,
        "Phone - Kid": `luZrU10hV`,
        "Phone - Male": `VtE6vWKHk`,
        "Tablet - Kid": `e3HHzLEhm`,
        "Tablet- Male": `tF9X6IxtC`,
        "Tablet-Feamle": `mCyHHX77F`,
        Female: `EWVYsX8I8`,
        Kid: `iLywYsWzU`,
        Male: `kng7dG9oH`,
      }),
      (Ks = O.create(s)),
      (qs = ({
        headline1: e,
        headline2: t,
        headline3: n,
        height: r,
        id: i,
        link1: a,
        link2: o,
        link3: s,
        text1: c,
        text2: l,
        text3: u,
        width: d,
        ...f
      }) => ({
        ...f,
        CK1QZcOEe: n ?? f.CK1QZcOEe ?? `Comfort For Every Adventure`,
        cwI2My0rU: c ?? f.cwI2My0rU ?? `FOR MEN`,
        g6xHXQwwi: t ?? f.g6xHXQwwi ?? `Designed For Modern Living`,
        iw6VUGxxm: o ?? f.iw6VUGxxm,
        NKImX8koQ: a ?? f.NKImX8koQ,
        pNVwIrfGW: u ?? f.pNVwIrfGW ?? `FOR KIDS`,
        qYYfPU0x_: s ?? f.qYYfPU0x_,
        variant: Gs[f.variant] ?? f.variant ?? `kng7dG9oH`,
        viRKIswJr: l ?? f.viRKIswJr ?? `FOR WOMEN`,
        YrsLGzpp6: e ?? f.YrsLGzpp6 ?? `Built For Daily Confidence`,
      })),
      (Js = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ys = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se(),
            l = ke(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              cwI2My0rU: h,
              YrsLGzpp6: g,
              NKImX8koQ: _,
              viRKIswJr: v,
              g6xHXQwwi: y,
              iw6VUGxxm: b,
              pNVwIrfGW: C,
              CK1QZcOEe: w,
              qYYfPU0x_: T,
              ...E
            } = qs(e),
            {
              baseVariant: D,
              classNames: ee,
              clearLoadingGesture: te,
              gestureHandlers: k,
              gestureVariant: ne,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = _e({
              cycleOrder: zs,
              defaultVariant: `kng7dG9oH`,
              ref: r,
              variant: m,
              variantClassNames: Vs,
            }),
            F = Js(e, P),
            I = V(Bs);
          return x(A, {
            id: p ?? a,
            children: x(Ks, {
              animate: P,
              initial: !1,
              children: x(Ws, {
                value: Hs,
                children: S(O.div, {
                  ...E,
                  ...k,
                  className: V(I, `framer-gp73zx`, d, ee),
                  "data-framer-name": `Male`,
                  layoutDependency: F,
                  layoutId: `kng7dG9oH`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-72534714-0887-42d9-aa5a-709674afb825)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...u,
                  },
                  ...Ls(
                    {
                      e3HHzLEhm: { "data-framer-name": `Tablet - Kid` },
                      EWVYsX8I8: { "data-framer-name": `Female` },
                      iLywYsWzU: { "data-framer-name": `Kid` },
                      luZrU10hV: { "data-framer-name": `Phone - Kid` },
                      mCyHHX77F: { "data-framer-name": `Tablet-Feamle` },
                      tF9X6IxtC: { "data-framer-name": `Tablet- Male` },
                      uUB89MwaR: { "data-framer-name": `Phone - Female` },
                      VtE6vWKHk: { "data-framer-name": `Phone - Male` },
                    },
                    D,
                    ne
                  ),
                  children: [
                    S(O.div, {
                      className: `framer-149iqi9`,
                      "data-framer-name": `Content`,
                      layoutDependency: F,
                      layoutId: `ofMMSqpos`,
                      children: [
                        S(O.div, {
                          className: `framer-1atf3ps`,
                          "data-framer-name": `Top`,
                          layoutDependency: F,
                          layoutId: `UnqePziZf`,
                          children: [
                            x(he, {
                              __fromCanvasComponent: !0,
                              children: x(s, {
                                children: x(O.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                    "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                  },
                                  children: `FOR MEN`,
                                }),
                              }),
                              className: `framer-17dykrm`,
                              "data-framer-name": `Text`,
                              fonts: [`FS;General Sans-variable`],
                              layoutDependency: F,
                              layoutId: `JHOTX_VHZ`,
                              style: {
                                "--extracted-2gg91v": `"wght" 500`,
                                "--extracted-r6o4lv": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Ls(
                                {
                                  e3HHzLEhm: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR KIDS`,
                                      }),
                                    }),
                                    text: C,
                                  },
                                  EWVYsX8I8: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR WOMEN`,
                                      }),
                                    }),
                                    text: v,
                                  },
                                  iLywYsWzU: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR KIDS`,
                                      }),
                                    }),
                                    text: C,
                                  },
                                  luZrU10hV: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR KIDS`,
                                      }),
                                    }),
                                    text: C,
                                  },
                                  mCyHHX77F: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR WOMEN`,
                                      }),
                                    }),
                                    text: v,
                                  },
                                  tF9X6IxtC: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR MEN`,
                                      }),
                                    }),
                                  },
                                  uUB89MwaR: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR WOMEN`,
                                      }),
                                    }),
                                    text: v,
                                  },
                                  VtE6vWKHk: {
                                    children: x(s, {
                                      children: x(O.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFV3TUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                        },
                                        children: `FOR MEN`,
                                      }),
                                    }),
                                  },
                                },
                                D,
                                ne
                              ),
                            }),
                            x(he, {
                              __fromCanvasComponent: !0,
                              children: x(s, {
                                children: x(O.h3, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                    "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-font-variation-axes": `var(--extracted-zfisys, "wght" 450)`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                  },
                                  children: `Built For Daily Confidence`,
                                }),
                              }),
                              className: `framer-1n6sx13`,
                              "data-framer-name": `Headline`,
                              fonts: [`FS;General Sans-variable`],
                              layoutDependency: F,
                              layoutId: `KqaQgCtM0`,
                              style: {
                                "--extracted-a0htzi": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                "--extracted-zfisys": `"wght" 450`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Ls(
                                {
                                  e3HHzLEhm: { text: w },
                                  EWVYsX8I8: {
                                    children: x(s, {
                                      children: x(O.h3, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `40px`,
                                          "--framer-font-variation-axes": `var(--extracted-zfisys, "wght" 450)`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                        },
                                        children: `Designed For Modern Living`,
                                      }),
                                    }),
                                    text: y,
                                  },
                                  iLywYsWzU: {
                                    children: x(s, {
                                      children: x(O.h3, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `40px`,
                                          "--framer-font-variation-axes": `var(--extracted-zfisys, "wght" 450)`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                        },
                                        children: `Comfort For Every Adventure`,
                                      }),
                                    }),
                                    text: w,
                                  },
                                  luZrU10hV: { text: w },
                                  mCyHHX77F: { text: y },
                                  uUB89MwaR: { text: y },
                                },
                                D,
                                ne
                              ),
                            }),
                          ],
                        }),
                        x(Y, {
                          height: 39,
                          y: (l?.y || 0) + 36 + 0 + 0 + 143.6,
                          ...Ls(
                            {
                              e3HHzLEhm: { y: (l?.y || 0) + 36 + 0 + 0 + 129.2 },
                              luZrU10hV: { y: (l?.y || 0) + 24 + 0 + 0 + 123.2 },
                              mCyHHX77F: { y: (l?.y || 0) + 36 + 0 + 0 + 129.2 },
                              tF9X6IxtC: { y: (l?.y || 0) + 36 + 0 + 0 + 129.2 },
                              uUB89MwaR: { y: (l?.y || 0) + 24 + 0 + 0 + 123.2 },
                              VtE6vWKHk: { y: (l?.y || 0) + 24 + 0 + 0 + 123.2 },
                            },
                            D,
                            ne
                          ),
                          children: x(L, {
                            className: `framer-1r1re88-container`,
                            layoutDependency: F,
                            layoutId: `E81L7moRU-container`,
                            nodeId: `E81L7moRU`,
                            rendersWithMotion: !0,
                            scopeId: `JKH0XtSCr`,
                            children: x(ct, {
                              cM24uPpbD: !1,
                              H6dPn3zGc: 16,
                              height: `100%`,
                              id: `E81L7moRU`,
                              iXZSHzCME: `10px 18px 10px 18px`,
                              layoutId: `E81L7moRU`,
                              variant: Us(`TY6QPpYqQ`),
                              width: `100%`,
                              XhybYdcoB: `Shop Now`,
                              zTMMog7f6: _,
                              ...Ls(
                                {
                                  e3HHzLEhm: { zTMMog7f6: T },
                                  EWVYsX8I8: { zTMMog7f6: b },
                                  iLywYsWzU: { zTMMog7f6: T },
                                  luZrU10hV: { zTMMog7f6: T },
                                  mCyHHX77F: { zTMMog7f6: b },
                                  uUB89MwaR: { zTMMog7f6: b },
                                },
                                D,
                                ne
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    x(Pe, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 1712,
                        intrinsicWidth: 1242,
                        loading: H((l?.y || 0) + 49),
                        pixelHeight: 1712,
                        pixelWidth: 1242,
                        sizes: `459px`,
                        src: `../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM-ae7f14.png`,
                        srcSet: `../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM.png 742w,../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM-ae7f14.png 1242w`,
                      },
                      className: `framer-3gkwq5`,
                      "data-framer-name": `Rectangle`,
                      layoutDependency: F,
                      layoutId: `BBBLj0BRg`,
                      ...Ls(
                        {
                          e3HHzLEhm: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1066,
                              intrinsicWidth: 800,
                              loading: H((l?.y || 0) + 21),
                              pixelHeight: 1066,
                              pixelWidth: 800,
                              sizes: `338px`,
                              src: `../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o-583481.png`,
                              srcSet: `../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o.png 768w,../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o-583481.png 800w`,
                            },
                          },
                          EWVYsX8I8: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1356,
                              intrinsicWidth: 954,
                              loading: H((l?.y || 0) + -77),
                              pixelHeight: 1356,
                              pixelWidth: 954,
                              sizes: `636px`,
                              src: `../../assets/images/n0tMygktpfAXrgdpTtmqc1YM-066383.png`,
                              srcSet: `../../assets/images/n0tMygktpfAXrgdpTtmqc1YM.png 720w,../../assets/images/n0tMygktpfAXrgdpTtmqc1YM-066383.png 954w`,
                            },
                          },
                          iLywYsWzU: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1066,
                              intrinsicWidth: 800,
                              loading: H((l?.y || 0) + 0),
                              pixelHeight: 1066,
                              pixelWidth: 800,
                              sizes: `338px`,
                              src: `../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o-583481.png`,
                              srcSet: `../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o.png 768w,../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o-583481.png 800w`,
                            },
                          },
                          luZrU10hV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1066,
                              intrinsicWidth: 800,
                              loading: H((l?.y || 0) + 145),
                              pixelHeight: 1066,
                              pixelWidth: 800,
                              sizes: `316px`,
                              src: `../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o-583481.png`,
                              srcSet: `../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o.png 768w,../../assets/images/Uh6EaLvWKrNBGbIQjRiRxM5l5o-583481.png 800w`,
                            },
                          },
                          mCyHHX77F: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1356,
                              intrinsicWidth: 954,
                              loading: H((l?.y || 0) + -51),
                              pixelHeight: 1356,
                              pixelWidth: 954,
                              sizes: `592px`,
                              src: `../../assets/images/n0tMygktpfAXrgdpTtmqc1YM-066383.png`,
                              srcSet: `../../assets/images/n0tMygktpfAXrgdpTtmqc1YM.png 720w,../../assets/images/n0tMygktpfAXrgdpTtmqc1YM-066383.png 954w`,
                            },
                          },
                          tF9X6IxtC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1712,
                              intrinsicWidth: 1242,
                              loading: H((l?.y || 0) + 18),
                              pixelHeight: 1712,
                              pixelWidth: 1242,
                              sizes: `553px`,
                              src: `../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM-ae7f14.png`,
                              srcSet: `../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM.png 742w,../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM-ae7f14.png 1242w`,
                            },
                          },
                          uUB89MwaR: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1356,
                              intrinsicWidth: 954,
                              loading: H((l?.y || 0) + 155),
                              pixelHeight: 1356,
                              pixelWidth: 954,
                              sizes: `548px`,
                              src: `../../assets/images/n0tMygktpfAXrgdpTtmqc1YM-066383.png`,
                              srcSet: `../../assets/images/n0tMygktpfAXrgdpTtmqc1YM.png 720w,../../assets/images/n0tMygktpfAXrgdpTtmqc1YM-066383.png 954w`,
                            },
                          },
                          VtE6vWKHk: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1712,
                              intrinsicWidth: 1242,
                              loading: H((l?.y || 0) + 136),
                              pixelHeight: 1712,
                              pixelWidth: 1242,
                              sizes: `553px`,
                              src: `../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM-ae7f14.png`,
                              srcSet: `../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM.png 742w,../../assets/images/9q82g77mrfSql5xHEzQZtflbLwM-ae7f14.png 1242w`,
                            },
                          },
                        },
                        D,
                        ne
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-wlW7j.framer-1vp8egd, .framer-wlW7j .framer-1vp8egd { display: block; }`,
          `.framer-wlW7j.framer-gp73zx { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 700px; justify-content: flex-start; overflow: hidden; padding: 36px; position: relative; width: 510px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-wlW7j .framer-149iqi9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-wlW7j .framer-1atf3ps { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wlW7j .framer-17dykrm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wlW7j .framer-1n6sx13 { flex: none; height: auto; max-width: 292px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-wlW7j .framer-1r1re88-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-wlW7j .framer-3gkwq5 { flex: none; height: 817px; left: 170px; position: absolute; top: 49px; width: 459px; z-index: 0; }`,
          `.framer-wlW7j.framer-v-nfo6in.framer-gp73zx, .framer-wlW7j.framer-v-1lzuwtu.framer-gp73zx, .framer-wlW7j.framer-v-132l5t0.framer-gp73zx, .framer-wlW7j.framer-v-1fv6pss.framer-gp73zx { height: 348px; width: 720px; }`,
          `.framer-wlW7j.framer-v-nfo6in .framer-3gkwq5 { height: 903px; left: 178px; top: -77px; width: 636px; }`,
          `.framer-wlW7j.framer-v-1lu6t4u.framer-gp73zx { height: 340px; width: 720px; }`,
          `.framer-wlW7j.framer-v-1lu6t4u .framer-3gkwq5 { height: 449px; left: 313px; top: 0px; width: 338px; }`,
          `.framer-wlW7j.framer-v-1lzuwtu .framer-149iqi9, .framer-wlW7j.framer-v-132l5t0 .framer-149iqi9, .framer-wlW7j.framer-v-1fv6pss .framer-149iqi9 { gap: 44px; }`,
          `.framer-wlW7j.framer-v-1lzuwtu .framer-3gkwq5 { height: 908px; left: 235px; top: 18px; width: 553px; }`,
          `.framer-wlW7j.framer-v-132l5t0 .framer-3gkwq5 { height: 841px; left: 212px; top: -51px; width: 592px; }`,
          `.framer-wlW7j.framer-v-1fv6pss .framer-3gkwq5 { height: 449px; left: 328px; top: 21px; width: 338px; }`,
          `.framer-wlW7j.framer-v-olf0ix.framer-gp73zx, .framer-wlW7j.framer-v-1cpuj05.framer-gp73zx, .framer-wlW7j.framer-v-h8hsmm.framer-gp73zx { height: 460px; padding: 24px; width: 390px; }`,
          `.framer-wlW7j.framer-v-olf0ix .framer-149iqi9, .framer-wlW7j.framer-v-1cpuj05 .framer-149iqi9, .framer-wlW7j.framer-v-h8hsmm .framer-149iqi9 { gap: 38px; }`,
          `.framer-wlW7j.framer-v-olf0ix .framer-3gkwq5 { height: 908px; left: 4px; top: 136px; width: 553px; }`,
          `.framer-wlW7j.framer-v-1cpuj05 .framer-3gkwq5 { height: 779px; left: 12px; top: 155px; width: 548px; }`,
          `.framer-wlW7j.framer-v-h8hsmm .framer-3gkwq5 { height: 420px; left: 118px; top: 145px; width: 316px; }`,
        ],
        `framer-wlW7j`
      )),
      (Ys.displayName = `Category Card`),
      (Ys.defaultProps = { height: 700, width: 510 }),
      W(Ys, {
        variant: {
          options: [
            `kng7dG9oH`,
            `EWVYsX8I8`,
            `iLywYsWzU`,
            `tF9X6IxtC`,
            `mCyHHX77F`,
            `e3HHzLEhm`,
            `VtE6vWKHk`,
            `uUB89MwaR`,
            `luZrU10hV`,
          ],
          optionTitles: [
            `Male`,
            `Female`,
            `Kid`,
            `Tablet- Male`,
            `Tablet-Feamle`,
            `Tablet - Kid`,
            `Phone - Male`,
            `Phone - Female`,
            `Phone - Kid`,
          ],
          title: `Variant`,
          type: X.Enum,
        },
        cwI2My0rU: {
          defaultValue: `FOR MEN`,
          displayTextArea: !1,
          title: `Text 1`,
          type: X.String,
        },
        oncwI2My0rUChange: { changes: `cwI2My0rU`, type: X.ChangeHandler },
        YrsLGzpp6: {
          defaultValue: `Built For Daily Confidence`,
          displayTextArea: !0,
          title: `Headline 1`,
          type: X.String,
        },
        onYrsLGzpp6Change: { changes: `YrsLGzpp6`, type: X.ChangeHandler },
        NKImX8koQ: { title: `Link 1`, type: X.Link },
        viRKIswJr: {
          defaultValue: `FOR WOMEN`,
          displayTextArea: !1,
          title: `Text 2`,
          type: X.String,
        },
        onviRKIswJrChange: { changes: `viRKIswJr`, type: X.ChangeHandler },
        g6xHXQwwi: {
          defaultValue: `Designed For Modern Living`,
          displayTextArea: !0,
          title: `Headline 2`,
          type: X.String,
        },
        ong6xHXQwwiChange: { changes: `g6xHXQwwi`, type: X.ChangeHandler },
        iw6VUGxxm: { title: `Link 2`, type: X.Link },
        pNVwIrfGW: {
          defaultValue: `FOR KIDS`,
          displayTextArea: !1,
          title: `Text 3`,
          type: X.String,
        },
        onpNVwIrfGWChange: { changes: `pNVwIrfGW`, type: X.ChangeHandler },
        CK1QZcOEe: {
          defaultValue: `Comfort For Every Adventure`,
          displayTextArea: !0,
          title: `Headline 3`,
          type: X.String,
        },
        onCK1QZcOEeChange: { changes: `CK1QZcOEe`, type: X.ChangeHandler },
        qYYfPU0x_: { title: `Link 3`, type: X.Link },
      }),
      U(
        Ys,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
                variationAxes: [
                  { defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
            ],
          },
          ...Rs,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ys.loader = { load: (e, t) => Re([() => K(ct, {}, t)], t) }));
  });
function Zs(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qs,
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
  hc = e(() => {
    (h(),
      G(),
      I(),
      r(),
      Xs(),
      (Qs = q(Ys)),
      ($s = fe(L)),
      (ec = [`Qlx8YStu6`, `sJqk5mr45`, `yehKiJl2X`]),
      (tc = `framer-0Jg7O`),
      (nc = {
        Qlx8YStu6: `framer-v-1wt0j7z`,
        sJqk5mr45: `framer-v-zo5n2e`,
        yehKiJl2X: `framer-v-rvjx1w`,
      }),
      (rc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ic = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      }),
      (ac = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
      (oc = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.34, 0.98], type: `tween` },
        x: 0,
        y: 0,
      }),
      (sc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (cc = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (lc = { Desktop: `Qlx8YStu6`, Phone: `yehKiJl2X`, Tablet: `sJqk5mr45` }),
      (uc = O.create(s)),
      (dc = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (fc = ({
        headline1: e,
        headline2: t,
        headline3: n,
        height: r,
        id: i,
        link1: a,
        link2: o,
        link3: s,
        text1: c,
        text2: l,
        text3: u,
        width: d,
        ...f
      }) => ({
        ...f,
        drTduS0x6: e ?? f.drTduS0x6 ?? `Built For Daily Confidence`,
        EylSzbyru: l ?? f.EylSzbyru ?? `FOR WOMEN`,
        jXyC15ZZ6: s ?? f.jXyC15ZZ6,
        KfnxV950P: c ?? f.KfnxV950P ?? `FOR MEN`,
        KJVxyHKaF: u ?? f.KJVxyHKaF ?? `FOR KIDS`,
        LCbcMqcZz: n ?? f.LCbcMqcZz ?? `Comfort For Every Adventure`,
        v_c47fwZH: t ?? f.v_c47fwZH ?? `Designed For Modern Living`,
        variant: lc[f.variant] ?? f.variant ?? `Qlx8YStu6`,
        ZSzTIQz44: o ?? f.ZSzTIQz44,
        ztKcFvh7J: a ?? f.ztKcFvh7J,
      })),
      (pc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (mc = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              KfnxV950P: m,
              onKfnxV950PChange: h,
              drTduS0x6: g,
              ondrTduS0x6Change: _,
              ztKcFvh7J: v,
              EylSzbyru: y,
              onEylSzbyruChange: b,
              v_c47fwZH: C,
              onv_c47fwZHChange: w,
              ZSzTIQz44: T,
              KJVxyHKaF: E,
              onKJVxyHKaFChange: D,
              LCbcMqcZz: ee,
              onLCbcMqcZzChange: te,
              jXyC15ZZ6: k,
              ...ne
            } = fc(e),
            [j, M] = dc(m, h),
            [N, P] = dc(g, _),
            [F, I] = dc(y, b),
            [re, ie] = dc(C, w),
            [L, R] = dc(E, D),
            [ae, z] = dc(ee, te),
            {
              baseVariant: B,
              classNames: oe,
              clearLoadingGesture: se,
              gestureHandlers: ce,
              gestureVariant: le,
              isLoading: ue,
              setGestureState: H,
              setVariant: de,
              variants: fe,
            } = _e({
              cycleOrder: ec,
              defaultVariant: `Qlx8YStu6`,
              ref: r,
              variant: p,
              variantClassNames: nc,
            }),
            U = pc(e, fe),
            pe = V(tc);
          return x(A, {
            id: d ?? a,
            children: x(uc, {
              animate: fe,
              initial: !1,
              children: x(cc, {
                value: rc,
                children: S(O.div, {
                  ...ne,
                  ...ce,
                  className: V(pe, `framer-1wt0j7z`, u, oe),
                  "data-framer-name": `Desktop`,
                  layoutDependency: U,
                  layoutId: `Qlx8YStu6`,
                  ref: r,
                  style: { ...l },
                  ...Zs(
                    {
                      sJqk5mr45: { "data-framer-name": `Tablet` },
                      yehKiJl2X: { "data-framer-name": `Phone` },
                    },
                    B,
                    le
                  ),
                  children: [
                    x(O.div, {
                      className: `framer-nz1qvu`,
                      "data-framer-name": `Left - Height`,
                      layoutDependency: U,
                      layoutId: `RG7VZoMt0`,
                      children: x(Y, {
                        height: 730,
                        width: `max((${c?.width || `100vw`} - 10px) * 0.45, 1px)`,
                        y: (c?.y || 0) + (0 + ((c?.height || 730) - 0 - 730) / 2) + 0,
                        ...Zs(
                          {
                            sJqk5mr45: {
                              height: 362,
                              width: `max(${c?.width || `100vw`}, 1px)`,
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 1118) - 0 - 1118) / 2 + 0 + 0) +
                                0,
                            },
                            yehKiJl2X: {
                              height: 470,
                              width: `max(${c?.width || `100vw`}, 1px)`,
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 1442) - 0 - 1442) / 2 + 0 + 0) +
                                0,
                            },
                          },
                          B,
                          le
                        ),
                        children: x($s, {
                          __framer__animate: { transition: ac },
                          __framer__animateOnce: !0,
                          __framer__enter: ic,
                          __framer__exit: oc,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-vfnbdt-container`,
                          layoutDependency: U,
                          layoutId: `QtR7U8X6d-container`,
                          nodeId: `QtR7U8X6d`,
                          rendersWithMotion: !0,
                          scopeId: `sTTqkwacZ`,
                          children: x(Ys, {
                            CK1QZcOEe: `Comfort For Every Adventure`,
                            cwI2My0rU: j,
                            g6xHXQwwi: `Designed For Modern Living`,
                            height: `100%`,
                            id: `QtR7U8X6d`,
                            layoutId: `QtR7U8X6d`,
                            NKImX8koQ: v,
                            oncwI2My0rUChange: M,
                            onYrsLGzpp6Change: P,
                            pNVwIrfGW: `FOR KIDS`,
                            style: { height: `100%`, width: `100%` },
                            variant: sc(`kng7dG9oH`),
                            viRKIswJr: `FOR WOMEN`,
                            width: `100%`,
                            YrsLGzpp6: N,
                            ...Zs(
                              {
                                sJqk5mr45: { variant: sc(`tF9X6IxtC`) },
                                yehKiJl2X: { variant: sc(`VtE6vWKHk`) },
                              },
                              B,
                              le
                            ),
                          }),
                        }),
                      }),
                    }),
                    S(O.div, {
                      className: `framer-10e9sip`,
                      "data-framer-name": `Right`,
                      layoutDependency: U,
                      layoutId: `UfcOivryN`,
                      children: [
                        x(O.div, {
                          className: `framer-tl7ogy`,
                          "data-framer-name": `1`,
                          layoutDependency: U,
                          layoutId: `Z_7Fy236M`,
                          children: x(Y, {
                            height:
                              (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 - 0) *
                              1,
                            width: `max((${c?.width || `100vw`} - 10px) * 0.55, 1px)`,
                            y:
                              (c?.y || 0) +
                              (0 + ((c?.height || 730) - 0 - ((c?.height || 730) - 0) * 1) / 2) +
                              0 +
                              ((((c?.height || 730) - 0) * 1 -
                                0 -
                                (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 +
                                  Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 +
                                  10)) /
                                2 +
                                0 +
                                0) +
                              (0 +
                                (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 -
                                  0 -
                                  (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 -
                                    0) *
                                    1) /
                                  2),
                            ...Zs(
                              {
                                sJqk5mr45: {
                                  height: 362,
                                  width: `max(${c?.width || `100vw`}, 1px)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1118) - 0 - 1118) / 2 + 362 + 16) +
                                    0 +
                                    0 +
                                    0,
                                },
                                yehKiJl2X: {
                                  height: 470,
                                  width: `max(${c?.width || `100vw`}, 1px)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1442) - 0 - 1442) / 2 + 470 + 16) +
                                    0 +
                                    0 +
                                    0,
                                },
                              },
                              B,
                              le
                            ),
                            children: x($s, {
                              __framer__animate: { transition: ac },
                              __framer__animateOnce: !0,
                              __framer__enter: ic,
                              __framer__exit: oc,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-1mrpmgs-container`,
                              layoutDependency: U,
                              layoutId: `RDu6B3U0a-container`,
                              nodeId: `RDu6B3U0a`,
                              rendersWithMotion: !0,
                              scopeId: `sTTqkwacZ`,
                              children: x(Ys, {
                                CK1QZcOEe: `Comfort For Every Adventure`,
                                cwI2My0rU: `FOR MEN`,
                                g6xHXQwwi: re,
                                height: `100%`,
                                id: `RDu6B3U0a`,
                                iw6VUGxxm: T,
                                layoutId: `RDu6B3U0a`,
                                ong6xHXQwwiChange: ie,
                                onviRKIswJrChange: I,
                                pNVwIrfGW: `FOR KIDS`,
                                style: { height: `100%`, width: `100%` },
                                variant: sc(`EWVYsX8I8`),
                                viRKIswJr: F,
                                width: `100%`,
                                YrsLGzpp6: `Built For Daily Confidence`,
                                ...Zs(
                                  {
                                    sJqk5mr45: { variant: sc(`mCyHHX77F`) },
                                    yehKiJl2X: { variant: sc(`uUB89MwaR`) },
                                  },
                                  B,
                                  le
                                ),
                              }),
                            }),
                          }),
                        }),
                        x(O.div, {
                          className: `framer-19ev6ej`,
                          "data-framer-name": `2`,
                          layoutDependency: U,
                          layoutId: `nQGMkc_8J`,
                          children: x(Y, {
                            height:
                              (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 - 0) *
                              1,
                            width: `max((${c?.width || `100vw`} - 10px) * 0.55, 1px)`,
                            y:
                              (c?.y || 0) +
                              (0 + ((c?.height || 730) - 0 - ((c?.height || 730) - 0) * 1) / 2) +
                              0 +
                              ((((c?.height || 730) - 0) * 1 -
                                0 -
                                (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 +
                                  Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 +
                                  10)) /
                                2 +
                                Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 +
                                10) +
                              (0 +
                                (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 -
                                  0 -
                                  (Math.max(0, (((c?.height || 730) - 0) * 1 - 0 - 10) / 2) * 1 -
                                    0) *
                                    1) /
                                  2),
                            ...Zs(
                              {
                                sJqk5mr45: {
                                  height: 362,
                                  width: `max(${c?.width || `100vw`}, 1px)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1118) - 0 - 1118) / 2 + 362 + 16) +
                                    0 +
                                    378 +
                                    0,
                                },
                                yehKiJl2X: {
                                  height: 470,
                                  width: `max(${c?.width || `100vw`}, 1px)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1442) - 0 - 1442) / 2 + 470 + 16) +
                                    0 +
                                    486 +
                                    0,
                                },
                              },
                              B,
                              le
                            ),
                            children: x($s, {
                              __framer__animate: { transition: ac },
                              __framer__animateOnce: !0,
                              __framer__enter: ic,
                              __framer__exit: oc,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-d7lutb-container`,
                              layoutDependency: U,
                              layoutId: `ClaE_DGG1-container`,
                              nodeId: `ClaE_DGG1`,
                              rendersWithMotion: !0,
                              scopeId: `sTTqkwacZ`,
                              children: x(Ys, {
                                CK1QZcOEe: ae,
                                cwI2My0rU: `FOR MEN`,
                                g6xHXQwwi: `Designed For Modern Living`,
                                height: `100%`,
                                id: `ClaE_DGG1`,
                                layoutId: `ClaE_DGG1`,
                                onCK1QZcOEeChange: z,
                                onpNVwIrfGWChange: R,
                                pNVwIrfGW: L,
                                qYYfPU0x_: k,
                                style: { height: `100%`, width: `100%` },
                                variant: sc(`iLywYsWzU`),
                                viRKIswJr: `FOR WOMEN`,
                                width: `100%`,
                                YrsLGzpp6: `Built For Daily Confidence`,
                                ...Zs(
                                  {
                                    sJqk5mr45: { variant: sc(`e3HHzLEhm`) },
                                    yehKiJl2X: { variant: sc(`luZrU10hV`) },
                                  },
                                  B,
                                  le
                                ),
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
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0Jg7O.framer-ef5fsb, .framer-0Jg7O .framer-ef5fsb { display: block; }`,
          `.framer-0Jg7O.framer-1wt0j7z { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1100px; }`,
          `.framer-0Jg7O .framer-nz1qvu { align-content: center; align-items: center; display: flex; flex: 0.45 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 730px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-0Jg7O .framer-vfnbdt-container, .framer-0Jg7O .framer-1mrpmgs-container, .framer-0Jg7O .framer-d7lutb-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-0Jg7O .framer-10e9sip { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 0.55 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-0Jg7O .framer-tl7ogy, .framer-0Jg7O .framer-19ev6ej { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-0Jg7O.framer-v-zo5n2e.framer-1wt0j7z { flex-direction: column; gap: 16px; width: 810px; }`,
          `.framer-0Jg7O.framer-v-zo5n2e .framer-nz1qvu, .framer-0Jg7O.framer-v-rvjx1w .framer-nz1qvu { flex: none; height: min-content; width: 100%; }`,
          `.framer-0Jg7O.framer-v-zo5n2e .framer-vfnbdt-container, .framer-0Jg7O.framer-v-zo5n2e .framer-1mrpmgs-container, .framer-0Jg7O.framer-v-zo5n2e .framer-d7lutb-container { height: 362px; }`,
          `.framer-0Jg7O.framer-v-zo5n2e .framer-10e9sip, .framer-0Jg7O.framer-v-rvjx1w .framer-10e9sip { align-self: unset; flex: none; gap: 16px; height: min-content; width: 100%; }`,
          `.framer-0Jg7O.framer-v-zo5n2e .framer-tl7ogy, .framer-0Jg7O.framer-v-zo5n2e .framer-19ev6ej, .framer-0Jg7O.framer-v-rvjx1w .framer-tl7ogy, .framer-0Jg7O.framer-v-rvjx1w .framer-19ev6ej { flex: none; height: min-content; }`,
          `.framer-0Jg7O.framer-v-rvjx1w.framer-1wt0j7z { flex-direction: column; gap: 16px; width: 390px; }`,
          `.framer-0Jg7O.framer-v-rvjx1w .framer-vfnbdt-container, .framer-0Jg7O.framer-v-rvjx1w .framer-1mrpmgs-container, .framer-0Jg7O.framer-v-rvjx1w .framer-d7lutb-container { height: 470px; }`,
        ],
        `framer-0Jg7O`
      )),
      (mc.displayName = `Grid Cards`),
      (mc.defaultProps = { height: 730, width: 1100 }),
      W(mc, {
        variant: {
          options: [`Qlx8YStu6`, `sJqk5mr45`, `yehKiJl2X`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
        KfnxV950P: {
          defaultValue: `FOR MEN`,
          displayTextArea: !1,
          title: `Text 1`,
          type: X.String,
        },
        onKfnxV950PChange: { changes: `KfnxV950P`, type: X.ChangeHandler },
        drTduS0x6: {
          defaultValue: `Built For Daily Confidence`,
          displayTextArea: !0,
          title: `Headline 1`,
          type: X.String,
        },
        ondrTduS0x6Change: { changes: `drTduS0x6`, type: X.ChangeHandler },
        ztKcFvh7J: { description: `______________________`, title: `Link 1`, type: X.Link },
        EylSzbyru: {
          defaultValue: `FOR WOMEN`,
          displayTextArea: !1,
          title: `Text 2`,
          type: X.String,
        },
        onEylSzbyruChange: { changes: `EylSzbyru`, type: X.ChangeHandler },
        v_c47fwZH: {
          defaultValue: `Designed For Modern Living`,
          displayTextArea: !0,
          title: `Headline 2`,
          type: X.String,
        },
        onv_c47fwZHChange: { changes: `v_c47fwZH`, type: X.ChangeHandler },
        ZSzTIQz44: { description: `______________________`, title: `Link 2`, type: X.Link },
        KJVxyHKaF: {
          defaultValue: `FOR KIDS`,
          displayTextArea: !1,
          title: `Text 3`,
          type: X.String,
        },
        onKJVxyHKaFChange: { changes: `KJVxyHKaF`, type: X.ChangeHandler },
        LCbcMqcZz: {
          defaultValue: `Comfort For Every Adventure`,
          displayTextArea: !0,
          title: `Headline 3`,
          type: X.String,
        },
        onLCbcMqcZzChange: { changes: `LCbcMqcZz`, type: X.ChangeHandler },
        jXyC15ZZ6: { description: `______________________`, title: `Link 3`, type: X.Link },
      }),
      U(mc, [{ explicitInter: !0, fonts: [] }, ...Qs], { supportsExplicitInterCodegen: !0 }),
      (mc.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(Ys, {}, t)])) }));
  });
function gc(e) {
  let {
      children: t = [],
      baseVelocity: n = 1,
      gap: r = 20,
      velocityMultiplier: i = 0.5,
      springConfig: o = { stiffness: 300, damping: 30 },
      scrollDirection: s = `right`,
    } = e,
    c = be(),
    l = xe.current() === xe.canvas,
    u = E(0),
    d = E(0),
    p = F(d, o),
    m = f(null),
    h = f(null),
    [g, _] = T(0),
    [v, y] = T(0),
    b = f(!1),
    C = f(1);
  (w(() => {
    if (a === void 0 || c) return;
    let e = a.scrollY,
      t = !1,
      n = () => {
        let n = a.scrollY,
          r = n - e;
        (d.set(Math.abs(r)),
          r < 0 ? (C.current = -1) : r > 0 && (C.current = 1),
          (e = n),
          (t = !1));
      },
      r = () => {
        t || ((t = !0), requestAnimationFrame(n));
      };
    return (
      a.addEventListener(`scroll`, r, { passive: !0 }),
      () => {
        a.removeEventListener(`scroll`, r);
      }
    );
  }, [d, c]),
    w(() => {
      if (!m.current || !h.current) return;
      let e = () => {
        _(m.current?.offsetWidth ?? 0);
        let e = h.current?.scrollWidth ?? 0;
        (y(e), !b.current && e > 0 && (u.set(-(e + r)), (b.current = !0)));
      };
      e();
      let t = new ResizeObserver(e);
      return (t.observe(m.current), t.observe(h.current), () => t.disconnect());
    }, [t, r]),
    P((e, t) => {
      if (v === 0 || g === 0 || c || l) return;
      let a = (s === `right` ? 1 : -1) * C.current,
        o = p.get() * i * 0.01,
        d = a * (Math.abs(n) * 0.1 + o),
        f = u.get() + d,
        m = v + r;
      (f > 0 ? (f -= m) : f < -m * 2 && (f += m), u.set(f));
    }));
  let D = ne(u, (e) => `${e}px`);
  return !t || t.length === 0
    ? x(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          backgroundColor: `#f0f0f0`,
          borderRadius: 8,
          color: `#999`,
          fontSize: 14,
          fontFamily: `Inter, sans-serif`,
        },
        children: `Connect components to ticker`,
      })
    : x(`div`, {
        ref: m,
        style: { width: `100%`, height: `100%`, overflow: `hidden`, position: `relative` },
        children: S(O.div, {
          style: {
            display: `flex`,
            gap: `${r}px`,
            position: `absolute`,
            left: 0,
            top: 0,
            height: `100%`,
            willChange: `transform`,
            x: c || l ? 0 : D,
          },
          children: [
            x(`div`, {
              style: {
                display: `flex`,
                gap: `${r}px`,
                height: `100%`,
                alignItems: `center`,
                flexShrink: 0,
              },
              "aria-hidden": `true`,
              children: t,
            }),
            x(`div`, {
              ref: h,
              style: {
                display: `flex`,
                gap: `${r}px`,
                height: `100%`,
                alignItems: `center`,
                flexShrink: 0,
              },
              children: t,
            }),
            !c &&
              !l &&
              x(`div`, {
                style: {
                  display: `flex`,
                  gap: `${r}px`,
                  height: `100%`,
                  alignItems: `center`,
                  flexShrink: 0,
                },
                "aria-hidden": `true`,
                children: t,
              }),
          ],
        }),
      });
}
var _c = e(() => {
    (t(),
      h(),
      r(),
      G(),
      I(),
      (gc.displayName = `Scroll Velocity Ticker`),
      W(gc, {
        children: {
          type: X.Array,
          title: `Items`,
          control: { type: X.ComponentInstance },
          maxCount: 20,
        },
        scrollDirection: {
          type: X.Enum,
          title: `Scroll Direction`,
          options: [`right`, `left`],
          optionTitles: [`Right`, `Left`],
          defaultValue: `right`,
          displaySegmentedControl: !0,
        },
        baseVelocity: {
          type: X.Number,
          title: `Base Speed`,
          defaultValue: 1,
          min: 0,
          max: 10,
          step: 0.1,
          displayStepper: !0,
        },
        gap: {
          type: X.Number,
          title: `Gap`,
          defaultValue: 20,
          min: 0,
          max: 100,
          step: 1,
          unit: `px`,
        },
        velocityMultiplier: {
          type: X.Number,
          title: `Scroll Influence`,
          defaultValue: 0.5,
          min: 0,
          max: 2,
          step: 0.1,
        },
        springConfig: {
          type: X.Object,
          title: `Spring`,
          controls: {
            stiffness: {
              type: X.Number,
              title: `Stiffness`,
              defaultValue: 300,
              min: 0,
              max: 1e3,
              step: 10,
            },
            damping: {
              type: X.Number,
              title: `Damping`,
              defaultValue: 30,
              min: 0,
              max: 100,
              step: 1,
            },
          },
        },
      }));
  }),
  vc,
  yc,
  bc,
  xc = e(() => {
    (G(),
      de.loadFonts([
        `FS;General Sans-medium`,
        `FS;General Sans-bold`,
        `FS;General Sans-bold italic`,
        `FS;General Sans-medium italic`,
      ]),
      (vc = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/NIQ54PVBBIWVK3PFSOIOUJSXIJ5WTNDP.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/HCZ5OQRTYQOAVSHRS6UOFWUZ5CGI6JRO.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/H7W54QQR2V6KL5KMDA2PD2KSQRCZHPRE.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (yc = [
        `.framer-64E6w .framer-styles-preset-1ohdid9:not(.rich-text-wrapper), .framer-64E6w .framer-styles-preset-1ohdid9.rich-text-wrapper p { --framer-font-family: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-bold: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-italic: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 58px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-64E6w .framer-styles-preset-1ohdid9:not(.rich-text-wrapper), .framer-64E6w .framer-styles-preset-1ohdid9.rich-text-wrapper p { --framer-font-family: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-bold: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-italic: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 46px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-64E6w .framer-styles-preset-1ohdid9:not(.rich-text-wrapper), .framer-64E6w .framer-styles-preset-1ohdid9.rich-text-wrapper p { --framer-font-family: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-bold: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-family-italic: "General Sans", "General Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (bc = `framer-64E6w`));
  }),
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
  Mc = e(() => {
    (h(),
      G(),
      I(),
      r(),
      xc(),
      (Sc = `framer-knnzb`),
      (Cc = { LXH1iQpKx: `framer-v-13qql6y` }),
      (wc = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Tc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ec = (e) => !e),
      (Dc = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Oc = O.create(s)),
      (kc = ({ height: e, id: t, isPhone: n, text: r, textLogoGap: i, width: a, ...o }) => ({
        ...o,
        Jh36ydj0N: r ?? o.Jh36ydj0N ?? `DESIGNED TO MOVE`,
        Mq0BoTAJD: n ?? o.Mq0BoTAJD,
        PW4AqQhnL: i ?? o.PW4AqQhnL ?? 48,
      })),
      (Ac = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (jc = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              Jh36ydj0N: m,
              PW4AqQhnL: h,
              Mq0BoTAJD: g,
              ..._
            } = kc(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: ee,
            } = _e({ defaultVariant: `LXH1iQpKx`, ref: r, variant: p, variantClassNames: Cc }),
            te = Ac(e, ee),
            k = V(Sc, bc),
            ne = Ec(g);
          return x(A, {
            id: d ?? a,
            children: x(Oc, {
              animate: ee,
              initial: !1,
              children: x(Dc, {
                value: Tc,
                children: S(O.div, {
                  ..._,
                  ...C,
                  className: V(k, `framer-13qql6y`, u, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: te,
                  layoutId: `LXH1iQpKx`,
                  ref: r,
                  style: { "--5x8by8": wc(h), ...l },
                  children: [
                    x(he, {
                      __fromCanvasComponent: !0,
                      children: x(s, {
                        children: x(O.p, {
                          className: `framer-styles-preset-1ohdid9`,
                          "data-styles-preset": `veJmUy_ix`,
                          dir: `auto`,
                          children: `FEEL TRENDING`,
                        }),
                      }),
                      className: `framer-zw9jwp`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      layoutDependency: te,
                      layoutId: `UK7EiQkAf`,
                      style: { "--framer-paragraph-spacing": `0px` },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    ne !== !1 &&
                      x(O.div, {
                        className: `framer-2m6w0a`,
                        "data-framer-name": `Icon`,
                        layoutDependency: te,
                        layoutId: `lHXygZBbL`,
                        children: x(Me, {
                          className: `framer-18casvg`,
                          "data-framer-name": `Icon`,
                          layoutDependency: te,
                          layoutId: `XubUtgCV0`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 57" overflow="visible"><path d="M 24.493 0.136 C 26.471 -0.127 30.801 -0.155 32.193 1.421 C 32.779 3.22 30.873 18.667 30.351 21.346 C 32.265 20.437 33.559 19.355 35.27 18.134 C 37.427 16.615 39.563 15.068 41.678 13.491 C 44.322 11.517 47.482 8.218 49.978 12.316 C 51.61 14.995 53.351 16.885 52.842 20.205 C 51.192 21.412 48.853 22.213 46.978 23.103 C 42.991 24.996 38.678 26.636 34.708 28.496 C 38.196 30.179 41.721 31.785 45.279 33.314 C 46.891 34.018 52.47 36.036 52.925 37.524 C 53.593 39.713 49.629 46.441 47.317 46.967 C 46.033 47.258 41.99 43.735 40.789 43.006 C 37.322 40.495 33.795 37.891 30.193 35.437 C 30.92 37.604 31.034 40.907 31.319 43.272 C 31.637 45.921 31.947 48.626 32.218 51.279 C 32.309 52.172 32.601 55.346 32.036 55.943 C 31.422 56.59 29.401 56.854 28.482 56.9 L 28.331 56.91 C 26.167 57.026 22.485 57.272 20.815 55.775 C 20.361 54.941 20.78 51.817 20.918 50.773 C 21.597 45.645 21.714 40.393 22.648 35.309 C 19.451 37.507 16.301 40.358 13.03 42.462 C 11.531 43.427 6.752 47.68 5.214 46.907 C 3.25 45.921 -0.579 39.71 0.074 37.327 C 1.129 35.982 3.599 35.141 5.155 34.46 L 10.415 32.12 C 12.697 31.116 16.214 29.39 18.415 28.618 C 13.045 25.984 7.476 23.94 2.109 21.312 C 1.505 21.016 0.25 20.315 0.106 19.634 C -0.27 17.851 0.891 15.878 1.739 14.377 C 5.396 7.772 7.162 10.486 12.202 14.095 L 22.569 21.551 C 22.537 21.369 22.509 21.187 22.483 21.004 C 21.618 14.987 21.167 8.524 20.572 2.45 C 20.383 0.524 23.029 0.276 24.493 0.136 Z" fill="var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      }),
                    g !== !1 &&
                      x(O.div, {
                        className: `framer-gq8bmi`,
                        "data-framer-name": `Icon for Phone`,
                        layoutDependency: te,
                        layoutId: `YJNkVoYJq`,
                        children: x(Me, {
                          className: `framer-1l9mpxm`,
                          "data-framer-name": `Icon`,
                          layoutDependency: te,
                          layoutId: `zw6_3yVNb`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.109 30.166" overflow="visible"><path d="M 12.99 0.072 C 14.039 -0.067 16.335 -0.082 17.074 0.752 C 17.385 1.704 16.374 9.879 16.097 11.297 C 17.112 10.816 17.798 10.243 18.706 9.597 C 19.85 8.793 20.983 7.974 22.104 7.14 C 23.507 6.095 25.182 4.349 26.506 6.518 C 27.372 7.936 28.295 8.936 28.025 10.693 C 27.15 11.332 25.91 11.756 24.915 12.227 C 22.801 13.228 20.513 14.096 18.408 15.081 C 20.258 15.971 22.127 16.822 24.014 17.631 C 24.869 18.003 27.828 19.071 28.069 19.859 C 28.424 21.017 26.321 24.577 25.095 24.856 C 24.414 25.01 22.27 23.146 21.633 22.76 C 19.794 21.431 17.924 20.053 16.013 18.754 C 16.399 19.901 16.459 21.649 16.61 22.901 C 16.779 24.302 16.943 25.734 17.087 27.138 C 17.136 27.611 17.29 29.291 16.99 29.606 C 16.665 29.949 15.593 30.089 15.106 30.113 L 15.026 30.118 C 13.878 30.18 11.925 30.31 11.039 29.517 C 10.799 29.076 11.021 27.423 11.094 26.87 C 11.454 24.157 11.516 21.377 12.011 18.686 C 10.316 19.85 8.645 21.358 6.911 22.472 C 6.116 22.982 3.581 25.233 2.765 24.824 C 1.723 24.302 -0.307 21.016 0.039 19.755 C 0.599 19.043 1.909 18.597 2.734 18.237 L 5.524 16.998 C 6.734 16.467 8.599 15.554 9.767 15.145 C 6.919 13.751 3.965 12.669 1.118 11.279 C 0.798 11.122 0.133 10.751 0.056 10.391 C -0.143 9.447 0.472 8.403 0.922 7.609 C 2.862 4.113 3.798 5.55 6.472 7.459 L 11.97 11.405 C 11.953 11.309 11.938 11.212 11.924 11.116 C 11.465 7.931 11.226 4.511 10.911 1.297 C 10.81 0.277 12.214 0.146 12.99 0.072 Z" fill="var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
                          withExternalLayout: !0,
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
          `.framer-knnzb.framer-dhpwz2, .framer-knnzb .framer-dhpwz2 { display: block; }`,
          `.framer-knnzb.framer-13qql6y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: var(--5x8by8); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-knnzb .framer-zw9jwp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-knnzb .framer-2m6w0a, .framer-knnzb .framer-gq8bmi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-knnzb .framer-18casvg { height: 57px; position: relative; width: 53px; }`,
          `.framer-knnzb .framer-1l9mpxm { height: 30px; position: relative; width: 28px; }`,
          ...yc,
        ],
        `framer-knnzb`
      )),
      (jc.displayName = `Text`),
      (jc.defaultProps = { height: 58, width: 639.5 }),
      W(jc, {
        Jh36ydj0N: {
          defaultValue: `DESIGNED TO MOVE`,
          displayTextArea: !1,
          title: `Text`,
          type: X.String,
        },
        onJh36ydj0NChange: { changes: `Jh36ydj0N`, type: X.ChangeHandler },
        PW4AqQhnL: { defaultValue: 48, min: 0, title: `Text <> Logo Gap`, type: X.Number },
        onPW4AqQhnLChange: { changes: `PW4AqQhnL`, type: X.ChangeHandler },
        Mq0BoTAJD: { defaultValue: !1, title: `Is Phone`, type: X.Boolean },
        onMq0BoTAJDChange: { changes: `Mq0BoTAJD`, type: X.ChangeHandler },
      }),
      U(
        jc,
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
          ...ue(vc),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc = e(() => {
    (h(),
      G(),
      I(),
      r(),
      _c(),
      Mc(),
      (Nc = q(jc)),
      (Pc = q(gc)),
      (Fc = `framer-joEbI`),
      (Ic = { xeb0Czoay: `framer-v-hebzgl` }),
      (Lc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rc = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (zc = O.create(s)),
      (Bc = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Vc = ({ gap: e, height: t, id: n, isPhone: r, width: i, ...a }) => ({
        ...a,
        Ct7_sO9_1: r ?? a.Ct7_sO9_1,
        O6NLcQkZE: e ?? a.O6NLcQkZE ?? 54,
      })),
      (Hc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Uc = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se();
          ke();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              O6NLcQkZE: p,
              onO6NLcQkZEChange: m,
              Ct7_sO9_1: h,
              onCt7_sO9_1Change: g,
              ..._
            } = Vc(e),
            [v, y] = Bc(p, m),
            [b, C] = Bc(h, g),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: k,
              setVariant: ne,
              variants: j,
            } = _e({ defaultVariant: `xeb0Czoay`, ref: r, variant: d, variantClassNames: Ic }),
            M = Hc(e, j),
            N = V(Fc);
          return x(A, {
            id: u ?? a,
            children: x(zc, {
              animate: j,
              initial: !1,
              children: x(Rc, {
                value: Lc,
                children: x(O.div, {
                  ..._,
                  ...D,
                  className: V(N, `framer-hebzgl`, l, T),
                  "data-framer-name": `Variant`,
                  layoutDependency: M,
                  layoutId: `xeb0Czoay`,
                  ref: r,
                  style: { ...c },
                  children: x(Y, {
                    children: x(L, {
                      className: `framer-1vqul98-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: M,
                      layoutId: `htUeqvlEX-container`,
                      nodeId: `htUeqvlEX`,
                      rendersWithMotion: !0,
                      scopeId: `TlEF5ica_`,
                      children: S(gc, {
                        baseVelocity: 10,
                        gap: v,
                        height: `100%`,
                        id: `htUeqvlEX`,
                        layoutId: `htUeqvlEX`,
                        scrollDirection: `left`,
                        springConfig: { damping: 30, stiffness: 300 },
                        style: { height: `100%`, width: `100%` },
                        velocityMultiplier: 2,
                        width: `100%`,
                        children: [
                          x(Y, {
                            height: 58,
                            width: `645.5px`,
                            children: x(L, {
                              className: `framer-90thpo-container`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `RCEyguYLM-container`,
                              nodeId: `RCEyguYLM`,
                              rendersWithMotion: !0,
                              scopeId: `TlEF5ica_`,
                              children: x(jc, {
                                height: `100%`,
                                id: `RCEyguYLM`,
                                Jh36ydj0N: `DESIGNED TO MOVE`,
                                layoutId: `RCEyguYLM`,
                                Mq0BoTAJD: b,
                                onMq0BoTAJDChange: C,
                                onPW4AqQhnLChange: y,
                                PW4AqQhnL: v,
                                width: `100%`,
                              }),
                            }),
                          }),
                          x(Y, {
                            height: 58,
                            width: `502.5px`,
                            children: x(L, {
                              className: `framer-xrdre6-container`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `GSyz7YxOZ-container`,
                              nodeId: `GSyz7YxOZ`,
                              rendersWithMotion: !0,
                              scopeId: `TlEF5ica_`,
                              children: x(jc, {
                                height: `100%`,
                                id: `GSyz7YxOZ`,
                                Jh36ydj0N: `MADE TO LAST`,
                                layoutId: `GSyz7YxOZ`,
                                Mq0BoTAJD: b,
                                onMq0BoTAJDChange: C,
                                onPW4AqQhnLChange: y,
                                PW4AqQhnL: v,
                                width: `100%`,
                              }),
                            }),
                          }),
                          x(Y, {
                            height: 58,
                            width: `645.5px`,
                            children: x(L, {
                              className: `framer-lt5vnx-container`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `jaUuq8Sd0-container`,
                              nodeId: `jaUuq8Sd0`,
                              rendersWithMotion: !0,
                              scopeId: `TlEF5ica_`,
                              children: x(jc, {
                                height: `100%`,
                                id: `jaUuq8Sd0`,
                                Jh36ydj0N: `DESIGNED TO MOVE`,
                                layoutId: `jaUuq8Sd0`,
                                Mq0BoTAJD: b,
                                onMq0BoTAJDChange: C,
                                onPW4AqQhnLChange: y,
                                PW4AqQhnL: v,
                                width: `100%`,
                              }),
                            }),
                          }),
                          x(Y, {
                            height: 58,
                            width: `502.5px`,
                            children: x(L, {
                              className: `framer-1nd3r15-container`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `kyl_yytU0-container`,
                              nodeId: `kyl_yytU0`,
                              rendersWithMotion: !0,
                              scopeId: `TlEF5ica_`,
                              children: x(jc, {
                                height: `100%`,
                                id: `kyl_yytU0`,
                                Jh36ydj0N: `MADE TO LAST`,
                                layoutId: `kyl_yytU0`,
                                Mq0BoTAJD: b,
                                onMq0BoTAJDChange: C,
                                onPW4AqQhnLChange: y,
                                PW4AqQhnL: v,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-joEbI.framer-w90cnb, .framer-joEbI .framer-w90cnb { display: block; }`,
          `.framer-joEbI.framer-hebzgl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 2420px; }`,
          `.framer-joEbI .framer-1vqul98-container { -webkit-user-select: none; flex: 1 0 0px; height: 80px; position: relative; user-select: none; width: 1px; }`,
          `.framer-joEbI .framer-90thpo-container, .framer-joEbI .framer-xrdre6-container, .framer-joEbI .framer-lt5vnx-container, .framer-joEbI .framer-1nd3r15-container { height: auto; position: relative; width: auto; }`,
        ],
        `framer-joEbI`
      )),
      (Uc.displayName = `Ticker`),
      (Uc.defaultProps = { height: 80, width: 2420 }),
      W(Uc, {
        O6NLcQkZE: { defaultValue: 54, max: 100, min: 0, step: 1, title: `Gap`, type: X.Number },
        onO6NLcQkZEChange: { changes: `O6NLcQkZE`, type: X.ChangeHandler },
        Ct7_sO9_1: { defaultValue: !1, title: `Is Phone`, type: X.Boolean },
        onCt7_sO9_1Change: { changes: `Ct7_sO9_1`, type: X.ChangeHandler },
      }),
      U(Uc, [{ explicitInter: !0, fonts: [] }, ...Nc, ...Pc], { supportsExplicitInterCodegen: !0 }),
      (Uc.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(jc, {}, t)])) }));
  }),
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc = e(() => {
    (h(),
      G(),
      r(),
      (Gc = `var(--framer-icon-mask)`),
      (Kc = y(function (e, t) {
        return x(`svg`, { ...e, ref: t, children: e.children });
      })),
      (qc = O.create(Kc)),
      (Jc = y((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? x(qc, { ...a, layoutId: r, ref: t, children: i })
          : x(`svg`, { ...a, ref: t, children: i });
      })),
      (Yc = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 7.621 0.232 C 7.692 0.09 7.84 0 8.001 0 C 8.162 0 8.309 0.09 8.381 0.232 L 10.229 3.912 C 10.476 4.404 10.953 4.745 11.504 4.824 L 15.637 5.419 C 15.797 5.442 15.929 5.552 15.979 5.702 C 16.029 5.853 15.988 6.019 15.872 6.13 L 12.883 8.991 C 12.483 9.374 12.301 9.927 12.395 10.468 L 13.1 14.511 C 13.128 14.668 13.063 14.827 12.932 14.92 C 12.801 15.014 12.627 15.026 12.484 14.951 L 8.789 13.042 C 8.295 12.786 7.705 12.786 7.211 13.042 L 3.518 14.951 C 3.375 15.026 3.201 15.013 3.07 14.92 C 2.939 14.826 2.874 14.667 2.902 14.511 L 3.607 10.469 C 3.701 9.927 3.518 9.375 3.118 8.991 L 0.129 6.131 C 0.013 6.02 -0.029 5.854 0.021 5.702 C 0.071 5.551 0.204 5.44 0.365 5.418 L 4.496 4.824 C 5.049 4.745 5.526 4.404 5.774 3.912 Z" fill="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" height="15px" id="CRmUcE220" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(2 2)" width="16px"/></svg>`),
      (Xc = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (Zc = le(
        y(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = Xc(e),
            l = pe(`3027337891`, Yc);
          return x(Jc, {
            ...c,
            className: V(`framer-XH0zJ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: x(`use`, { href: l }),
          });
        }),
        [
          `.framer-XH0zJ { -webkit-mask: ${Gc}; aspect-ratio: 1; display: block; mask: ${Gc}; width: 20px; }`,
        ],
        `framer-XH0zJ`
      )),
      (Zc.displayName = `Star`),
      W(Zc, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: X.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: X.Number },
      }));
  }),
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl = e(() => {
    (h(),
      G(),
      I(),
      r(),
      xi(),
      Qc(),
      ($c = q(di)),
      (el = q(Zc)),
      (tl = Z(di)),
      (nl = `framer-W63Xm`),
      (rl = { J9445h7AB: `framer-v-15sjwk7` }),
      (il = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (al = (e) => !e),
      (ol = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (sl = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (cl = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (ll = O.create(s)),
      (ul = ({
        contentPadding: e,
        height: t,
        hideContent: n,
        id: r,
        image: i,
        name1: a,
        showVideo: o,
        text: s,
        video: c,
        width: l,
        ...u
      }) => ({
        ...u,
        aUVsGAIwm: o ?? u.aUVsGAIwm ?? !1,
        ctOzjiRZa: i ??
          u.ctOzjiRZa ?? {
            alt: ``,
            pixelHeight: 853,
            pixelWidth: 640,
            src: `https://framerusercontent.com/images/B3XmLyoDrVkrkyuxYAy9PMmsc.png?width=640&height=853`,
            srcSet: `https://framerusercontent.com/images/B3XmLyoDrVkrkyuxYAy9PMmsc.png?width=640&height=853 640w`,
          },
        DhinkHIz5: a ?? u.DhinkHIz5 ?? `By Jenny`,
        fjvQvFsWa:
          s ??
          u.fjvQvFsWa ??
          `“Their fast shipping & branding made us stand out. We save hours every day”`,
        LqJXhA2CS: n ?? u.LqJXhA2CS ?? !1,
        P2ybbfHHa: e ?? u.P2ybbfHHa ?? `24px`,
        vGPjySe7A: c ?? u.vGPjySe7A,
      })),
      (dl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (fl = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se(),
            l = ke(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              ctOzjiRZa: h,
              fjvQvFsWa: g,
              DhinkHIz5: _,
              LqJXhA2CS: v,
              aUVsGAIwm: y,
              vGPjySe7A: b,
              P2ybbfHHa: C,
              ...w
            } = ul(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: k,
              setGestureState: ne,
              setVariant: j,
              variants: M,
            } = _e({ defaultVariant: `J9445h7AB`, ref: r, variant: m, variantClassNames: rl }),
            N = dl(e, M),
            P = V(nl),
            F = al(y),
            I = al(v);
          return x(A, {
            id: p ?? a,
            children: x(ll, {
              animate: M,
              initial: !1,
              children: x(cl, {
                value: il,
                children: S(O.div, {
                  ...w,
                  ...ee,
                  className: V(P, `framer-15sjwk7`, d, E),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: N,
                  layoutId: `J9445h7AB`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0.9833574295043945px`,
                    "--border-color": `rgb(228, 228, 228)`,
                    "--border-left-width": `0.9833574295043945px`,
                    "--border-right-width": `0.9833574295043945px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0.9833574295043945px`,
                    borderBottomLeftRadius: 11.8,
                    borderBottomRightRadius: 11.8,
                    borderTopLeftRadius: 11.8,
                    borderTopRightRadius: 11.8,
                    ...u,
                  },
                  children: [
                    F !== !1 &&
                      x(Pe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: H((l?.y || 0) + 0),
                          pixelHeight: 853,
                          pixelWidth: 640,
                          sizes: l?.width || `100vw`,
                          ...ol(h),
                        },
                        className: `framer-6qnto3`,
                        "data-framer-name": `Image`,
                        layoutDependency: N,
                        layoutId: `uceNztU9C`,
                      }),
                    y !== !1 &&
                      x(Y, {
                        children: x(L, {
                          className: `framer-1pln2fk-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: N,
                          layoutId: `mfRnD9shv-container`,
                          nodeId: `mfRnD9shv`,
                          rendersWithMotion: !0,
                          scopeId: `PXptraIo7`,
                          children: x(di, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `mfRnD9shv`,
                            isMixedBorderRadius: !1,
                            layoutId: `mfRnD9shv`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !0,
                            posterEnabled: !0,
                            srcFile: b,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    I !== !1 &&
                      S(O.div, {
                        className: `framer-1181b61`,
                        "data-framer-name": `Below Content`,
                        layoutDependency: N,
                        layoutId: `zVbVaVywb`,
                        style: {
                          "--1yexf2i": sl(C),
                          background: `linear-gradient(182deg, rgba(255, 255, 255, 0) 11.083984375%, rgba(30, 30, 30, 0.5) 41.57324433326721%, rgb(31, 31, 31) 100%)`,
                        },
                        children: [
                          x(he, {
                            __fromCanvasComponent: !0,
                            children: x(s, {
                              children: x(O.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                  "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.03em`,
                                  "--framer-line-height": `1.1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                                },
                                children: `“Their fast shipping & branding made us stand out. We save hours every day”`,
                              }),
                            }),
                            className: `framer-6h1goi`,
                            "data-framer-name": `Testimonial Text`,
                            fonts: [`FS;General Sans-medium`],
                            layoutDependency: N,
                            layoutId: `Uq9SSXFBJ`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          S(O.div, {
                            className: `framer-1rmyhbq`,
                            "data-framer-name": `Wrap`,
                            layoutDependency: N,
                            layoutId: `Qnsf6ygri`,
                            children: [
                              x(he, {
                                __fromCanvasComponent: !0,
                                children: x(s, {
                                  children: x(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                      "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(211, 211, 211))`,
                                    },
                                    children: `By Jenny`,
                                  }),
                                }),
                                className: `framer-1j0rqpn`,
                                "data-framer-name": `By Jenny`,
                                fonts: [`FS;General Sans-medium`],
                                layoutDependency: N,
                                layoutId: `sA9eds3ZI`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(211, 211, 211)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              S(O.div, {
                                className: `framer-g2xdrt`,
                                "data-framer-name": `Star Wrap`,
                                layoutDependency: N,
                                layoutId: `gbjLBFiHj`,
                                children: [
                                  x(Zc, {
                                    animated: !0,
                                    className: `framer-10vr1vv`,
                                    layoutDependency: N,
                                    layoutId: `eVum9AKhX`,
                                    style: {
                                      "--d1m4u3": 1.2,
                                      "--v9s4l2": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                  }),
                                  x(Zc, {
                                    animated: !0,
                                    className: `framer-1469dyk`,
                                    layoutDependency: N,
                                    layoutId: `U6rpxRjiC`,
                                    style: {
                                      "--d1m4u3": 1.2,
                                      "--v9s4l2": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                  }),
                                  x(Zc, {
                                    animated: !0,
                                    className: `framer-8tp1b6`,
                                    layoutDependency: N,
                                    layoutId: `t1Y88WAGy`,
                                    style: {
                                      "--d1m4u3": 1.2,
                                      "--v9s4l2": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                  }),
                                  x(Zc, {
                                    animated: !0,
                                    className: `framer-29s5nm`,
                                    layoutDependency: N,
                                    layoutId: `qaQDkGHJN`,
                                    style: {
                                      "--d1m4u3": 1.2,
                                      "--v9s4l2": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                  }),
                                  x(Zc, {
                                    animated: !0,
                                    className: `framer-1s1a6u4`,
                                    layoutDependency: N,
                                    layoutId: `eE8dDed_J`,
                                    style: {
                                      "--d1m4u3": 1.2,
                                      "--v9s4l2": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                  }),
                                ],
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
          `.framer-W63Xm.framer-uaeboc, .framer-W63Xm .framer-uaeboc { display: block; }`,
          `.framer-W63Xm.framer-15sjwk7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 386px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-W63Xm .framer-6qnto3, .framer-W63Xm .framer-1pln2fk-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
          `.framer-W63Xm .framer-1181b61 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 139px; justify-content: flex-end; left: 0px; overflow: hidden; padding: var(--1yexf2i); position: absolute; right: 0px; z-index: 1; }`,
          `.framer-W63Xm .framer-6h1goi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-W63Xm .framer-1rmyhbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-W63Xm .framer-1j0rqpn { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-W63Xm .framer-g2xdrt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-W63Xm .framer-10vr1vv, .framer-W63Xm .framer-1469dyk, .framer-W63Xm .framer-8tp1b6, .framer-W63Xm .framer-29s5nm, .framer-W63Xm .framer-1s1a6u4 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 13px; }`,
          `.framer-W63Xm[data-border="true"]::after, .framer-W63Xm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-W63Xm`
      )),
      (fl.displayName = `Testimonial Card`),
      (fl.defaultProps = { height: 386, width: 300 }),
      W(fl, {
        ctOzjiRZa: {
          __defaultAssetReference: `data:framer/asset-reference,B3XmLyoDrVkrkyuxYAy9PMmsc.png?width=640&height=853`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,B3XmLyoDrVkrkyuxYAy9PMmsc.png?width=640&height=853`,
          },
          title: `Image`,
          type: X.ResponsiveImage,
        },
        fjvQvFsWa: {
          defaultValue: `“Their fast shipping & branding made us stand out. We save hours every day”`,
          displayTextArea: !0,
          title: `Text`,
          type: X.String,
        },
        onfjvQvFsWaChange: { changes: `fjvQvFsWa`, type: X.ChangeHandler },
        DhinkHIz5: { defaultValue: `By Jenny`, displayTextArea: !1, title: `Name`, type: X.String },
        onDhinkHIz5Change: { changes: `DhinkHIz5`, type: X.ChangeHandler },
        LqJXhA2CS: { defaultValue: !1, title: `Hide Content`, type: X.Boolean },
        onLqJXhA2CSChange: { changes: `LqJXhA2CS`, type: X.ChangeHandler },
        aUVsGAIwm: { defaultValue: !1, title: `Show Video`, type: X.Boolean },
        onaUVsGAIwmChange: { changes: `aUVsGAIwm`, type: X.ChangeHandler },
        vGPjySe7A: tl?.srcFile && {
          ...tl.srcFile,
          __defaultAssetReference: ``,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onvGPjySe7AChange: { changes: `vGPjySe7A`, type: X.ChangeHandler },
        P2ybbfHHa: { defaultValue: `24px`, title: `Content Padding`, type: X.Padding },
      }),
      U(
        fl,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
                weight: `500`,
              },
            ],
          },
          ...$c,
          ...el,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ml(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol = e(() => {
    (h(),
      G(),
      I(),
      r(),
      pl(),
      (hl = q(fl)),
      (gl = ae(O.div)),
      (_l = [`IjUgWR4TV`, `rXUsGTyb5`]),
      (vl = `framer-7ckp9`),
      (yl = { IjUgWR4TV: `framer-v-1b11g8p`, rXUsGTyb5: `framer-v-sdyw3f` }),
      (bl = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xl = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Sl = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Cl = { Desktop: `IjUgWR4TV`, Phone: `rXUsGTyb5` }),
      (wl = O.create(s)),
      (Tl = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Cl[r.variant] ?? r.variant ?? `IjUgWR4TV`,
      })),
      (El = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Dl = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = Tl(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = _e({
              cycleOrder: _l,
              defaultVariant: `IjUgWR4TV`,
              ref: r,
              variant: p,
              variantClassNames: yl,
            }),
            E = El(e, T),
            D = V(vl);
          return x(A, {
            id: d ?? a,
            children: x(wl, {
              animate: T,
              initial: !1,
              children: x(Sl, {
                value: bl,
                children: x(O.div, {
                  ...m,
                  ...v,
                  className: V(D, `framer-1b11g8p`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: E,
                  layoutId: `IjUgWR4TV`,
                  ref: r,
                  style: { ...l },
                  ...ml({ rXUsGTyb5: { "data-framer-name": `Phone` } }, h, y),
                  children: S(gl, {
                    className: `framer-i6pt4z`,
                    "data-framer-name": `Ticker`,
                    layoutDependency: E,
                    layoutId: `zHNXR7GV6`,
                    style: {
                      mask: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 7.000000000000001%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) add`,
                      WebkitMask: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 7.000000000000001%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) add`,
                    },
                    tickerEffectAlign: `center`,
                    tickerEffectDirectionModifier: `default`,
                    tickerEffectDraggable: !0,
                    tickerEffectEnabled: !0,
                    tickerEffectGap: `12px`,
                    tickerEffectHoverModifier: 100,
                    tickerEffectOverflow: `clip`,
                    tickerEffectPosition: `relative`,
                    tickerEffectStackDirection: `row`,
                    tickerEffectVelocity: 60,
                    children: [
                      x(Ae, {
                        children: x(Y, {
                          height: 386,
                          width: `300px`,
                          y: (c?.y || 0) + 0 + (((c?.height || 386) - 0 - 386) / 2 + 0 + 0) + 0,
                          ...ml(
                            {
                              rXUsGTyb5: {
                                height: 346,
                                width: `260px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 346) - 0 - 346) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            h,
                            y
                          ),
                          children: x(L, {
                            className: `framer-ljrpkx-container`,
                            "data-framer-name": `Testimonial Card 1`,
                            layoutDependency: E,
                            layoutId: `J1q9I_lbt-container`,
                            name: `Testimonial Card 1`,
                            nodeId: `J1q9I_lbt`,
                            rendersWithMotion: !0,
                            scopeId: `x4AMLd1qa`,
                            children: x(fl, {
                              aUVsGAIwm: !0,
                              DhinkHIz5: `By Ethan`,
                              fjvQvFsWa: `“Simple designs, great comfort, and fast delivery. Exactly what I was looking for.”`,
                              height: `100%`,
                              id: `J1q9I_lbt`,
                              layoutId: `J1q9I_lbt`,
                              LqJXhA2CS: !1,
                              name: `Testimonial Card 1`,
                              P2ybbfHHa: `24px`,
                              style: { height: `100%`, width: `100%` },
                              vGPjySe7A: `../../assets/misc/fIRtnbwFlD9Y6pZZ8MAUTABvY.mp4`,
                              width: `100%`,
                              ...ml({ rXUsGTyb5: { P2ybbfHHa: `20px` } }, h, y),
                            }),
                          }),
                        }),
                      }),
                      x(Ae, {
                        children: x(Y, {
                          height: 386,
                          width: `300px`,
                          y: (c?.y || 0) + 0 + (((c?.height || 386) - 0 - 386) / 2 + 0 + 0) + 0,
                          ...ml(
                            {
                              rXUsGTyb5: {
                                height: 346,
                                width: `260px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 346) - 0 - 346) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            h,
                            y
                          ),
                          children: x(L, {
                            className: `framer-12pry33-container`,
                            "data-framer-name": `Testimonial Card 2`,
                            layoutDependency: E,
                            layoutId: `XSmywWRUL-container`,
                            name: `Testimonial Card 2`,
                            nodeId: `XSmywWRUL`,
                            rendersWithMotion: !0,
                            scopeId: `x4AMLd1qa`,
                            children: x(fl, {
                              aUVsGAIwm: !1,
                              ctOzjiRZa: xl(
                                {
                                  pixelHeight: 960,
                                  pixelWidth: 640,
                                  src: `../../assets/images/yS3zAxCDS2t35sHImxYjH0I80k.png`,
                                  srcSet: `../../assets/images/yS3zAxCDS2t35sHImxYjH0I80k.png 640w`,
                                },
                                ``
                              ),
                              DhinkHIz5: `By Noah`,
                              fjvQvFsWa: `“Clean styles that work anywhere. The quality and attention to detail stand out.”`,
                              height: `100%`,
                              id: `XSmywWRUL`,
                              layoutId: `XSmywWRUL`,
                              LqJXhA2CS: !1,
                              name: `Testimonial Card 2`,
                              P2ybbfHHa: `24px`,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                              ...ml({ rXUsGTyb5: { P2ybbfHHa: `20px` } }, h, y),
                            }),
                          }),
                        }),
                      }),
                      x(Ae, {
                        children: x(Y, {
                          height: 386,
                          width: `300px`,
                          y: (c?.y || 0) + 0 + (((c?.height || 386) - 0 - 386) / 2 + 0 + 0) + 0,
                          ...ml(
                            {
                              rXUsGTyb5: {
                                height: 346,
                                width: `260px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 346) - 0 - 346) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            h,
                            y
                          ),
                          children: x(L, {
                            className: `framer-og23cu-container`,
                            "data-framer-name": `Testimonial Card 3`,
                            layoutDependency: E,
                            layoutId: `pPSZCMNdN-container`,
                            name: `Testimonial Card 3`,
                            nodeId: `pPSZCMNdN`,
                            rendersWithMotion: !0,
                            scopeId: `x4AMLd1qa`,
                            children: x(fl, {
                              aUVsGAIwm: !0,
                              DhinkHIz5: `By Olivia`,
                              fjvQvFsWa: `“The quality exceeded my expectations. Every piece feels premium and fits perfectly.”`,
                              height: `100%`,
                              id: `pPSZCMNdN`,
                              layoutId: `pPSZCMNdN`,
                              LqJXhA2CS: !1,
                              name: `Testimonial Card 3`,
                              P2ybbfHHa: `24px`,
                              style: { height: `100%`, width: `100%` },
                              vGPjySe7A: `../../assets/misc/mGyMPeNKazzDaaM9N2V0nzb0gM.mp4`,
                              width: `100%`,
                              ...ml({ rXUsGTyb5: { P2ybbfHHa: `20px` } }, h, y),
                            }),
                          }),
                        }),
                      }),
                      x(Ae, {
                        children: x(Y, {
                          height: 386,
                          width: `300px`,
                          y: (c?.y || 0) + 0 + (((c?.height || 386) - 0 - 386) / 2 + 0 + 0) + 0,
                          ...ml(
                            {
                              rXUsGTyb5: {
                                height: 346,
                                width: `260px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 346) - 0 - 346) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            h,
                            y
                          ),
                          children: x(L, {
                            className: `framer-46tvjg-container`,
                            "data-framer-name": `Testimonial Card 4`,
                            layoutDependency: E,
                            layoutId: `qsVk9FLh8-container`,
                            name: `Testimonial Card 4`,
                            nodeId: `qsVk9FLh8`,
                            rendersWithMotion: !0,
                            scopeId: `x4AMLd1qa`,
                            children: x(fl, {
                              aUVsGAIwm: !1,
                              ctOzjiRZa: xl(
                                {
                                  pixelHeight: 1704,
                                  pixelWidth: 1280,
                                  src: `../../assets/images/oFPyUntJXJlP9WAtwWoebObkPAM-bb6b6e.png`,
                                  srcSet: `../../assets/images/oFPyUntJXJlP9WAtwWoebObkPAM.png 769w,../../assets/images/oFPyUntJXJlP9WAtwWoebObkPAM-bb6b6e.png 1280w`,
                                },
                                ``
                              ),
                              DhinkHIz5: `By Sophia`,
                              fjvQvFsWa: `“The fabric feels amazing and the fit is effortless. I wear it every week.”`,
                              height: `100%`,
                              id: `qsVk9FLh8`,
                              layoutId: `qsVk9FLh8`,
                              LqJXhA2CS: !1,
                              name: `Testimonial Card 4`,
                              P2ybbfHHa: `24px`,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                              ...ml({ rXUsGTyb5: { P2ybbfHHa: `20px` } }, h, y),
                            }),
                          }),
                        }),
                      }),
                      x(Ae, {
                        children: x(Y, {
                          height: 386,
                          width: `300px`,
                          y: (c?.y || 0) + 0 + (((c?.height || 386) - 0 - 386) / 2 + 0 + 0) + 0,
                          ...ml(
                            {
                              rXUsGTyb5: {
                                height: 346,
                                width: `260px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 346) - 0 - 346) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            h,
                            y
                          ),
                          children: x(L, {
                            className: `framer-98ohr9-container`,
                            "data-framer-name": `Testimonial Card 5`,
                            layoutDependency: E,
                            layoutId: `YAZr9yUny-container`,
                            name: `Testimonial Card 5`,
                            nodeId: `YAZr9yUny`,
                            rendersWithMotion: !0,
                            scopeId: `x4AMLd1qa`,
                            children: x(fl, {
                              aUVsGAIwm: !0,
                              DhinkHIz5: `By Mason`,
                              fjvQvFsWa: `“Modern, comfortable, and easy to style. Every order has been worth it.”`,
                              height: `100%`,
                              id: `YAZr9yUny`,
                              layoutId: `YAZr9yUny`,
                              LqJXhA2CS: !1,
                              name: `Testimonial Card 5`,
                              P2ybbfHHa: `24px`,
                              style: { height: `100%`, width: `100%` },
                              vGPjySe7A: `../../assets/misc/KzclN8qp4qDFuA0ccuMFd3pI5rE.mp4`,
                              width: `100%`,
                              ...ml({ rXUsGTyb5: { P2ybbfHHa: `20px` } }, h, y),
                            }),
                          }),
                        }),
                      }),
                      x(Ae, {
                        children: x(Y, {
                          height: 386,
                          width: `300px`,
                          y: (c?.y || 0) + 0 + (((c?.height || 386) - 0 - 386) / 2 + 0 + 0) + 0,
                          ...ml(
                            {
                              rXUsGTyb5: {
                                height: 346,
                                width: `260px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 346) - 0 - 346) / 2 + 0 + 0) +
                                  0,
                              },
                            },
                            h,
                            y
                          ),
                          children: x(L, {
                            className: `framer-1irmgp2-container`,
                            "data-framer-name": `Testimonial Card 6`,
                            layoutDependency: E,
                            layoutId: `vWuZ1JAOM-container`,
                            name: `Testimonial Card 6`,
                            nodeId: `vWuZ1JAOM`,
                            rendersWithMotion: !0,
                            scopeId: `x4AMLd1qa`,
                            children: x(fl, {
                              aUVsGAIwm: !1,
                              ctOzjiRZa: xl(
                                {
                                  pixelHeight: 1173,
                                  pixelWidth: 640,
                                  positionX: `51.5%`,
                                  positionY: `14.1%`,
                                  src: `../../assets/images/8nTAzqEU3n809ltXhD7254Kw-910916.png`,
                                  srcSet: `../../assets/images/8nTAzqEU3n809ltXhD7254Kw.png 558w,../../assets/images/8nTAzqEU3n809ltXhD7254Kw-910916.png 640w`,
                                },
                                ``
                              ),
                              DhinkHIz5: `By Liam`,
                              fjvQvFsWa: `“Great everyday essentials with a premium feel. I've already ordered again.”`,
                              height: `100%`,
                              id: `vWuZ1JAOM`,
                              layoutId: `vWuZ1JAOM`,
                              LqJXhA2CS: !1,
                              name: `Testimonial Card 6`,
                              P2ybbfHHa: `24px`,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                              ...ml({ rXUsGTyb5: { P2ybbfHHa: `20px` } }, h, y),
                            }),
                          }),
                        }),
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
          `.framer-7ckp9.framer-i84z2x, .framer-7ckp9 .framer-i84z2x { display: block; }`,
          `.framer-7ckp9.framer-1b11g8p { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1971px; }`,
          `.framer-7ckp9 .framer-i6pt4z { align-content: center; align-items: center; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-7ckp9 .framer-ljrpkx-container, .framer-7ckp9 .framer-12pry33-container, .framer-7ckp9 .framer-og23cu-container, .framer-7ckp9 .framer-46tvjg-container, .framer-7ckp9 .framer-98ohr9-container, .framer-7ckp9 .framer-1irmgp2-container { flex: none; height: 386px; position: relative; width: 300px; }`,
          `.framer-7ckp9.framer-v-sdyw3f.framer-1b11g8p { width: 1941px; }`,
          `.framer-7ckp9.framer-v-sdyw3f .framer-ljrpkx-container, .framer-7ckp9.framer-v-sdyw3f .framer-12pry33-container, .framer-7ckp9.framer-v-sdyw3f .framer-og23cu-container, .framer-7ckp9.framer-v-sdyw3f .framer-46tvjg-container, .framer-7ckp9.framer-v-sdyw3f .framer-98ohr9-container, .framer-7ckp9.framer-v-sdyw3f .framer-1irmgp2-container { height: 346px; width: 260px; }`,
        ],
        `framer-7ckp9`
      )),
      (Dl.displayName = `Ticker`),
      (Dl.defaultProps = { height: 386, width: 1971 }),
      W(Dl, {
        variant: {
          options: [`IjUgWR4TV`, `rXUsGTyb5`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
      }),
      U(Dl, [{ explicitInter: !0, fonts: [] }, ...hl], { supportsExplicitInterCodegen: !0 }),
      (Dl.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(fl, {}, t)])) }));
  });
function kl(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Al,
  jl,
  Ml,
  Nl,
  Pl,
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
  Jl = e(() => {
    (h(),
      G(),
      I(),
      r(),
      st(),
      (Al = q(ct)),
      (jl = ve(fe(L))),
      (Ml = [`B3AoP5Hcp`, `umW7CIBwu`, `DzUUnbO1u`]),
      (Nl = `framer-KNoNn`),
      (Pl = {
        B3AoP5Hcp: `framer-v-1oojboe`,
        DzUUnbO1u: `framer-v-1j6s6kt`,
        umW7CIBwu: `framer-v-bdz1z`,
      }),
      (Fl = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Il = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 20, y: 0 },
        tokenization: `character`,
        transition: { delay: 0.05, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (Ll = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 },
        repeat: !1,
        startDelay: 0.6,
        tokenization: `character`,
        transition: { delay: 0.01, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (Rl = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 1.2, duration: 0.4, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (zl = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Bl = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Vl = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Hl = { Desktop: `B3AoP5Hcp`, Phone: `DzUUnbO1u`, Tablet: `umW7CIBwu` }),
      (Ul = O.create(s)),
      (Wl = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Gl = ({
        buttonTitle: e,
        description: t,
        headline: n,
        height: r,
        id: i,
        link: a,
        newTab: o,
        width: s,
        ...c
      }) => ({
        ...c,
        DDT_lkpnu: t ?? c.DDT_lkpnu ?? `Velora creates bold fashion for confident everyday style.`,
        FIPmEK7pa: n ?? c.FIPmEK7pa ?? `Wear Your Power`,
        gKLAF7CSU: e ?? c.gKLAF7CSU ?? `Shop Now`,
        knpklM2MO: a ?? c.knpklM2MO,
        TQ8vcfmqN: o ?? c.TQ8vcfmqN ?? !0,
        variant: Hl[c.variant] ?? c.variant ?? `B3AoP5Hcp`,
      })),
      (Kl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ql = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se(),
            l = ke(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              FIPmEK7pa: h,
              DDT_lkpnu: g,
              gKLAF7CSU: _,
              ongKLAF7CSUChange: v,
              knpklM2MO: y,
              TQ8vcfmqN: b,
              onTQ8vcfmqNChange: C,
              ...w
            } = Gl(e),
            [T, E] = Wl(_, v),
            [D, ee] = Wl(b, C),
            {
              baseVariant: te,
              classNames: k,
              clearLoadingGesture: ne,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = _e({
              cycleOrder: Ml,
              defaultVariant: `B3AoP5Hcp`,
              ref: r,
              variant: m,
              variantClassNames: Pl,
            }),
            re = Kl(e, I),
            ie = V(Nl);
          return x(A, {
            id: p ?? a,
            children: x(Ul, {
              animate: I,
              initial: !1,
              children: x(Vl, {
                value: Fl,
                children: S(O.div, {
                  ...w,
                  ...j,
                  className: V(ie, `framer-1oojboe`, d, k),
                  "data-framer-name": `Desktop`,
                  layoutDependency: re,
                  layoutId: `B3AoP5Hcp`,
                  ref: r,
                  style: { ...u },
                  ...kl(
                    {
                      DzUUnbO1u: { "data-framer-name": `Phone` },
                      umW7CIBwu: { "data-framer-name": `Tablet` },
                    },
                    te,
                    M
                  ),
                  children: [
                    S(O.div, {
                      className: `framer-h8qqe5`,
                      "data-framer-name": `Top`,
                      layoutDependency: re,
                      layoutId: `MzB91VzOi`,
                      children: [
                        x(he, {
                          __fromCanvasComponent: !0,
                          children: x(s, {
                            children: x(O.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                "--framer-font-size": `80px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.03em`,
                                "--framer-line-height": `1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                              },
                              children: `Wear Your Power`,
                            }),
                          }),
                          className: `framer-12lozz2`,
                          "data-framer-name": `Headline`,
                          effect: Il,
                          fonts: [`FS;General Sans-medium`],
                          layoutDependency: re,
                          layoutId: `MDyN1s2_4`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            textShadow: `0px 1px 2px rgba(0,0,0,0.25)`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...kl(
                            {
                              DzUUnbO1u: {
                                children: x(s, {
                                  children: x(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                      "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `44px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                                    },
                                    children: `Wear Your Power`,
                                  }),
                                }),
                              },
                              umW7CIBwu: {
                                children: x(s, {
                                  children: x(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                      "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `62px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                                    },
                                    children: `Wear Your Power`,
                                  }),
                                }),
                              },
                            },
                            te,
                            M
                          ),
                        }),
                        x(he, {
                          __fromCanvasComponent: !0,
                          children: x(s, {
                            children: x(O.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=`,
                                "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                "--framer-font-size": `24px`,
                                "--framer-letter-spacing": `-0.03em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                              },
                              children: `Velora creates bold fashion for confident everyday style.`,
                            }),
                          }),
                          className: `framer-nc9p3d`,
                          "data-framer-name": `Text`,
                          effect: Ll,
                          fonts: [`FS;General Sans-regular`],
                          layoutDependency: re,
                          layoutId: `qDuKOnIii`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            textShadow: `0px 1px 2px rgba(0, 0, 0, 0.38)`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...kl(
                            {
                              DzUUnbO1u: {
                                children: x(s, {
                                  children: x(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                                    },
                                    children: `Velora creates bold fashion for confident everyday style.`,
                                  }),
                                }),
                              },
                              umW7CIBwu: {
                                children: x(s, {
                                  children: x(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `20px`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                                    },
                                    children: `Velora creates bold fashion for confident everyday style.`,
                                  }),
                                }),
                              },
                            },
                            te,
                            M
                          ),
                        }),
                      ],
                    }),
                    x(Y, {
                      height: 39,
                      y: (l?.y || 0) + 0 + (((l?.height || 184) - 0 - 619) / 2 + 552 + 28),
                      ...kl(
                        {
                          DzUUnbO1u: {
                            y: (l?.y || 0) + 0 + (((l?.height || 157.5) - 0 - 391) / 2 + 324 + 28),
                          },
                          umW7CIBwu: {
                            y: (l?.y || 0) + 0 + (((l?.height || 161) - 0 - 505) / 2 + 438 + 28),
                          },
                        },
                        te,
                        M
                      ),
                      children: x(jl, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: Rl,
                        className: `framer-1isl5nr-container`,
                        "data-framer-appear-id": `1isl5nr`,
                        initial: zl,
                        layoutDependency: re,
                        layoutId: `v0o56MsYL-container`,
                        nodeId: `v0o56MsYL`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `HEnxw82yR`,
                        children: x(ct, {
                          cM24uPpbD: D,
                          H6dPn3zGc: 16,
                          height: `100%`,
                          id: `v0o56MsYL`,
                          iXZSHzCME: `10px 18px 10px 18px`,
                          layoutId: `v0o56MsYL`,
                          oncM24uPpbDChange: ee,
                          onXhybYdcoBChange: E,
                          variant: Bl(`U6uNneSRp`),
                          width: `100%`,
                          XhybYdcoB: T,
                          zTMMog7f6: y,
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
          `.framer-KNoNn.framer-svolw, .framer-KNoNn .framer-svolw { display: block; }`,
          `.framer-KNoNn.framer-1oojboe { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1020px; }`,
          `.framer-KNoNn .framer-h8qqe5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KNoNn .framer-12lozz2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-KNoNn .framer-nc9p3d { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-KNoNn .framer-1isl5nr-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-KNoNn.framer-v-bdz1z.framer-1oojboe { width: 810px; }`,
          `.framer-KNoNn.framer-v-1j6s6kt.framer-1oojboe { width: 390px; }`,
          `.framer-KNoNn.framer-v-1j6s6kt .framer-nc9p3d { max-width: 300px; }`,
        ],
        `framer-KNoNn`
      )),
      (ql.displayName = `Slider Content`),
      (ql.defaultProps = { height: 184, width: 1020 }),
      W(ql, {
        variant: {
          options: [`B3AoP5Hcp`, `umW7CIBwu`, `DzUUnbO1u`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
        FIPmEK7pa: {
          defaultValue: `Wear Your Power`,
          displayTextArea: !1,
          title: `Headline`,
          type: X.String,
        },
        onFIPmEK7paChange: { changes: `FIPmEK7pa`, type: X.ChangeHandler },
        DDT_lkpnu: {
          defaultValue: `Velora creates bold fashion for confident everyday style.`,
          displayTextArea: !0,
          title: `Description`,
          type: X.String,
        },
        onDDT_lkpnuChange: { changes: `DDT_lkpnu`, type: X.ChangeHandler },
        gKLAF7CSU: {
          defaultValue: `Shop Now`,
          displayTextArea: !1,
          title: `Button Title`,
          type: X.String,
        },
        ongKLAF7CSUChange: { changes: `gKLAF7CSU`, type: X.ChangeHandler },
        knpklM2MO: { title: `Link`, type: X.Link },
        TQ8vcfmqN: { defaultValue: !0, title: `New Tab`, type: X.Boolean },
        onTQ8vcfmqNChange: { changes: `TQ8vcfmqN`, type: X.ChangeHandler },
      }),
      U(
        ql,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Al,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ql.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(ct, {}, t)])) }));
  });
function Yl(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu = e(() => {
    (h(),
      G(),
      I(),
      r(),
      (Xl = [`DGZbux4Tj`, `Ns7R9dWvp`, `ot2u8dmxV`, `O72BKg0Tz`]),
      (Zl = `framer-75yjW`),
      (Ql = {
        DGZbux4Tj: `framer-v-1k3zskv`,
        Ns7R9dWvp: `framer-v-13q5ocd`,
        O72BKg0Tz: `framer-v-q4u80q`,
        ot2u8dmxV: `framer-v-19s9y7v`,
      }),
      ($l = { duration: 0, type: `tween` }),
      (eu = { delay: 0, duration: 10, ease: [0, 0, 1, 1], type: `tween` }),
      (tu = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (nu = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (ru = {
        "Fade out": `O72BKg0Tz`,
        Animate: `ot2u8dmxV`,
        Default: `DGZbux4Tj`,
        Fill: `Ns7R9dWvp`,
      }),
      (iu = O.create(s)),
      (au = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kkkjPgm2F: e ?? i.kkkjPgm2F,
        variant: ru[i.variant] ?? i.variant ?? `DGZbux4Tj`,
      })),
      (ou = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (su = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se();
          ke();
          let { style: c, className: l, layoutId: u, variant: d, kkkjPgm2F: p, ...m } = au(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = _e({
              cycleOrder: Xl,
              defaultVariant: `DGZbux4Tj`,
              ref: r,
              variant: d,
              variantClassNames: Ql,
            }),
            T = ou(e, w),
            { activeVariantCallback: E, delay: D } = Ie(h),
            ee = E(async (...e) => {
              if ((S({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            });
          oe(h, {
            ot2u8dmxV: E(async (...e) => {
              await D(() => C(`Ns7R9dWvp`, !0), 300);
            }),
          });
          let te = V(Zl);
          return x(A, {
            id: u ?? a,
            children: x(iu, {
              animate: w,
              initial: !1,
              children: x(nu, {
                value: $l,
                ...Yl({ Ns7R9dWvp: { value: eu }, O72BKg0Tz: { value: tu } }, h, y),
                children: x(O.div, {
                  ...m,
                  ...v,
                  className: V(te, `framer-1k3zskv`, l, g),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `DGZbux4Tj`,
                  onTap: ee,
                  ref: r,
                  style: {
                    backgroundColor: `rgba(255, 255, 255, 0.45)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...c,
                  },
                  variants: {
                    Ns7R9dWvp: {
                      backgroundColor: `var(--token-37e15b36-1880-4582-be6f-0d643f307f45)`,
                    },
                    O72BKg0Tz: {
                      backgroundColor: `var(--token-37e15b36-1880-4582-be6f-0d643f307f45)`,
                    },
                    ot2u8dmxV: {
                      backgroundColor: `var(--token-37e15b36-1880-4582-be6f-0d643f307f45)`,
                    },
                  },
                  ...Yl(
                    {
                      Ns7R9dWvp: { "data-framer-name": `Fill` },
                      O72BKg0Tz: { "data-framer-name": `Fade out` },
                      ot2u8dmxV: { "data-framer-name": `Animate` },
                    },
                    h,
                    y
                  ),
                  children: x(O.div, {
                    className: `framer-19bxazs`,
                    "data-framer-name": `Progress Line`,
                    layoutDependency: T,
                    layoutId: `bBoGuE94u`,
                    style: {
                      backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      opacity: 1,
                    },
                    variants: { O72BKg0Tz: { opacity: 0 } },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-75yjW.framer-1q5vqv8, .framer-75yjW .framer-1q5vqv8 { display: block; }`,
          `.framer-75yjW.framer-1k3zskv { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 4px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 44px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-75yjW .framer-19bxazs { bottom: 0px; flex: none; left: -44px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-75yjW.framer-v-13q5ocd .framer-19bxazs, .framer-75yjW.framer-v-q4u80q .framer-19bxazs { left: 0px; }`,
        ],
        `framer-75yjW`
      )),
      (su.displayName = `Progress Bar`),
      (su.defaultProps = { height: 4, width: 44 }),
      W(su, {
        variant: {
          options: [`DGZbux4Tj`, `Ns7R9dWvp`, `ot2u8dmxV`, `O72BKg0Tz`],
          optionTitles: [`Default`, `Fill`, `Animate`, `Fade out`],
          title: `Variant`,
          type: X.Enum,
        },
        kkkjPgm2F: { title: `Click`, type: X.EventHandler },
      }),
      U(su, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function lu(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu = e(() => {
    (h(),
      G(),
      I(),
      r(),
      cu(),
      (uu = q(su)),
      (du = Z(su)),
      (fu = [`pP4Cyx0VV`, `jhxgacAdT`]),
      (pu = `framer-fEgvW`),
      (mu = { jhxgacAdT: `framer-v-1e9cfyn`, pP4Cyx0VV: `framer-v-jcjfix` }),
      (hu = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gu = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_u = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (vu = { Dekstop: `pP4Cyx0VV`, Phone: `jhxgacAdT` }),
      (yu = O.create(s)),
      (bu = {
        "Fade out": `O72BKg0Tz`,
        Animate: `ot2u8dmxV`,
        Default: `DGZbux4Tj`,
        Fill: `Ns7R9dWvp`,
      }),
      (xu = ({
        click: e,
        click2: t,
        click3: n,
        height: r,
        id: i,
        line1: a,
        line2: o,
        line3: s,
        width: c,
        ...l
      }) => ({
        ...l,
        dfgX5jSlR: t ?? l.dfgX5jSlR,
        ggIEZOjkr: bu[a] ?? a ?? l.ggIEZOjkr ?? `ot2u8dmxV`,
        hPMNiK4TC: n ?? l.hPMNiK4TC,
        oNtaM3EXn: e ?? l.oNtaM3EXn,
        variant: vu[l.variant] ?? l.variant ?? `pP4Cyx0VV`,
        VBlpVMt_V: bu[o] ?? o ?? l.VBlpVMt_V ?? `DGZbux4Tj`,
        w243CsFxI: bu[s] ?? s ?? l.w243CsFxI ?? `DGZbux4Tj`,
      })),
      (Su = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Cu = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              oNtaM3EXn: m,
              dfgX5jSlR: h,
              hPMNiK4TC: g,
              ggIEZOjkr: _,
              VBlpVMt_V: v,
              w243CsFxI: y,
              ...b
            } = xu(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: ee,
              setGestureState: te,
              setVariant: k,
              variants: ne,
            } = _e({
              cycleOrder: fu,
              defaultVariant: `pP4Cyx0VV`,
              ref: r,
              variant: p,
              variantClassNames: mu,
            }),
            j = Su(e, ne),
            { activeVariantCallback: M, delay: N } = Ie(C),
            P = M(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            F = M(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            I = M(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
            }),
            re = V(pu);
          return x(A, {
            id: d ?? a,
            children: x(yu, {
              animate: ne,
              initial: !1,
              children: x(_u, {
                value: hu,
                children: S(O.div, {
                  ...b,
                  ...E,
                  className: V(re, `framer-jcjfix`, u, w),
                  "data-framer-name": `Dekstop`,
                  layoutDependency: j,
                  layoutId: `pP4Cyx0VV`,
                  ref: r,
                  style: { ...l },
                  ...lu({ jhxgacAdT: { "data-framer-name": `Phone` } }, C, D),
                  children: [
                    x(Y, {
                      height: 4,
                      width: `44px`,
                      y: (c?.y || 0) + (0 + ((c?.height || 4) - 0 - 4) / 2),
                      ...lu(
                        {
                          jhxgacAdT: {
                            height: 3,
                            width: `34px`,
                            y: (c?.y || 0) + (0 + ((c?.height || 3) - 0 - 3) / 2),
                          },
                        },
                        C,
                        D
                      ),
                      children: x(L, {
                        className: `framer-1bsx3p3-container`,
                        layoutDependency: j,
                        layoutId: `CvkEFk8Qv-container`,
                        nodeId: `CvkEFk8Qv`,
                        rendersWithMotion: !0,
                        scopeId: `LZO6_PvUa`,
                        children: x(su, {
                          height: `100%`,
                          id: `CvkEFk8Qv`,
                          kkkjPgm2F: P,
                          layoutId: `CvkEFk8Qv`,
                          style: { height: `100%`, width: `100%` },
                          variant: gu(_),
                          width: `100%`,
                        }),
                      }),
                    }),
                    x(Y, {
                      height: 4,
                      width: `44px`,
                      y: (c?.y || 0) + (0 + ((c?.height || 4) - 0 - 4) / 2),
                      ...lu(
                        {
                          jhxgacAdT: {
                            height: 3,
                            width: `34px`,
                            y: (c?.y || 0) + (0 + ((c?.height || 3) - 0 - 3) / 2),
                          },
                        },
                        C,
                        D
                      ),
                      children: x(L, {
                        className: `framer-1qv6ec1-container`,
                        layoutDependency: j,
                        layoutId: `wWtpQZsMT-container`,
                        nodeId: `wWtpQZsMT`,
                        rendersWithMotion: !0,
                        scopeId: `LZO6_PvUa`,
                        children: x(su, {
                          height: `100%`,
                          id: `wWtpQZsMT`,
                          kkkjPgm2F: F,
                          layoutId: `wWtpQZsMT`,
                          style: { height: `100%`, width: `100%` },
                          variant: gu(v),
                          width: `100%`,
                        }),
                      }),
                    }),
                    x(Y, {
                      height: 4,
                      width: `44px`,
                      y: (c?.y || 0) + (0 + ((c?.height || 4) - 0 - 4) / 2),
                      ...lu(
                        {
                          jhxgacAdT: {
                            height: 3,
                            width: `34px`,
                            y: (c?.y || 0) + (0 + ((c?.height || 3) - 0 - 3) / 2),
                          },
                        },
                        C,
                        D
                      ),
                      children: x(L, {
                        className: `framer-h5ufun-container`,
                        layoutDependency: j,
                        layoutId: `zB0ZIooLf-container`,
                        nodeId: `zB0ZIooLf`,
                        rendersWithMotion: !0,
                        scopeId: `LZO6_PvUa`,
                        children: x(su, {
                          height: `100%`,
                          id: `zB0ZIooLf`,
                          kkkjPgm2F: I,
                          layoutId: `zB0ZIooLf`,
                          style: { height: `100%`, width: `100%` },
                          variant: gu(y),
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
          `.framer-fEgvW.framer-ovlkvr, .framer-fEgvW .framer-ovlkvr { display: block; }`,
          `.framer-fEgvW.framer-jcjfix { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-fEgvW .framer-1bsx3p3-container, .framer-fEgvW .framer-1qv6ec1-container, .framer-fEgvW .framer-h5ufun-container { flex: none; height: 4px; position: relative; width: 44px; }`,
          `.framer-fEgvW.framer-v-1e9cfyn .framer-1bsx3p3-container, .framer-fEgvW.framer-v-1e9cfyn .framer-1qv6ec1-container, .framer-fEgvW.framer-v-1e9cfyn .framer-h5ufun-container { height: 3px; width: 34px; }`,
        ],
        `framer-fEgvW`
      )),
      (Cu.displayName = `Line Nav`),
      (Cu.defaultProps = { height: 4, width: 152 }),
      W(Cu, {
        variant: {
          options: [`pP4Cyx0VV`, `jhxgacAdT`],
          optionTitles: [`Dekstop`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
        oNtaM3EXn: { title: `Click`, type: X.EventHandler },
        dfgX5jSlR: { title: `Click 2`, type: X.EventHandler },
        hPMNiK4TC: { title: `Click 3`, type: X.EventHandler },
        ggIEZOjkr: du?.variant && {
          ...du.variant,
          defaultValue: `ot2u8dmxV`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Line 1`,
        },
        onggIEZOjkrChange: { changes: `ggIEZOjkr`, type: X.ChangeHandler },
        VBlpVMt_V: du?.variant && {
          ...du.variant,
          defaultValue: `DGZbux4Tj`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Line 2`,
        },
        onVBlpVMt_VChange: { changes: `VBlpVMt_V`, type: X.ChangeHandler },
        w243CsFxI: du?.variant && {
          ...du.variant,
          defaultValue: `DGZbux4Tj`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Line 3`,
        },
        onw243CsFxIChange: { changes: `w243CsFxI`, type: X.ChangeHandler },
      }),
      U(Cu, [{ explicitInter: !0, fonts: [] }, ...uu], { supportsExplicitInterCodegen: !0 }),
      (Cu.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(su, {}, t)])) }));
  });
function Tu(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Eu,
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
  Ru = e(() => {
    (h(),
      G(),
      I(),
      r(),
      ki(),
      (Eu = q(Oi)),
      (Du = [`I22C2c62y`, `B3h4I7Bs0`, `DsHfwJZC4`, `K0d26ei_d`]),
      (Ou = `framer-poi6m`),
      (ku = {
        B3h4I7Bs0: `framer-v-p3sxuq`,
        DsHfwJZC4: `framer-v-1pjkjem`,
        I22C2c62y: `framer-v-jd1nuh`,
        K0d26ei_d: `framer-v-v6qp1d`,
      }),
      (Au = { delay: 0, duration: 0.4, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (ju = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Mu = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (Nu = {
        "Card - Tablet": `DsHfwJZC4`,
        "Hover - Card - Tablet": `K0d26ei_d`,
        "Hover - Card": `B3h4I7Bs0`,
        Card: `I22C2c62y`,
      }),
      (Pu = O.create(s)),
      (Fu = ({
        buttonText: e,
        cardImage: t,
        cardLink: n,
        cardTitle: r,
        height: i,
        id: a,
        newTab: o,
        width: s,
        ...c
      }) => ({
        ...c,
        Fzapq9TX0: t ??
          c.Fzapq9TX0 ?? {
            alt: ``,
            pixelHeight: 324,
            pixelWidth: 332,
            src: `https://framerusercontent.com/images/lGH6PhcjmEJZXq15GeajfWT9SfQ.png?width=332&height=324`,
          },
        gq17xfpsX: r ?? c.gq17xfpsX ?? `Popular T-shirts`,
        IJ3lGBhij: o ?? c.IJ3lGBhij,
        qkB3zOFb2: e ?? c.qkB3zOFb2 ?? `Shop now`,
        variant: Nu[c.variant] ?? c.variant ?? `I22C2c62y`,
        Vl0X_EpAn: n ?? c.Vl0X_EpAn,
      })),
      (Iu = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Lu = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: c } = Se(),
            l = ke(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              gq17xfpsX: h,
              Fzapq9TX0: g,
              Vl0X_EpAn: _,
              qkB3zOFb2: v,
              IJ3lGBhij: y,
              ...b
            } = Fu(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: ee,
              setGestureState: te,
              setVariant: k,
              variants: ne,
            } = _e({
              cycleOrder: Du,
              defaultVariant: `I22C2c62y`,
              ref: r,
              variant: m,
              variantClassNames: ku,
            }),
            j = Iu(e, ne),
            { activeVariantCallback: M, delay: N } = Ie(C),
            P = M(async (...e) => {
              (te({ isHovered: !0 }), k(`B3h4I7Bs0`));
            }),
            F = M(async (...e) => {
              (te({ isHovered: !1 }), k(`I22C2c62y`));
            }),
            I = M(async (...e) => {
              (te({ isHovered: !0 }), k(`K0d26ei_d`));
            }),
            re = M(async (...e) => {
              (te({ isHovered: !1 }), k(`DsHfwJZC4`));
            }),
            ie = V(Ou);
          return x(A, {
            id: p ?? a,
            children: x(Pu, {
              animate: ne,
              initial: !1,
              children: x(Mu, {
                value: Au,
                children: x(ze, {
                  href: _,
                  motionChild: !0,
                  nodeId: `I22C2c62y`,
                  openInNewTab: y,
                  scopeId: `SK_b8xin4`,
                  children: S(O.a, {
                    ...b,
                    ...E,
                    className: `${V(ie, `framer-jd1nuh`, d, w)} framer-c0zp17`,
                    "data-border": !0,
                    "data-framer-name": `Card`,
                    "data-highlight": !0,
                    layoutDependency: j,
                    layoutId: `I22C2c62y`,
                    onMouseEnter: P,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...u,
                    },
                    variants: {
                      B3h4I7Bs0: {
                        "--border-color": `rgb(156, 156, 156)`,
                        backgroundColor: `var(--token-72534714-0887-42d9-aa5a-709674afb825, rgb(241, 241, 241))`,
                      },
                      DsHfwJZC4: {
                        "--border-bottom-width": `0.9px`,
                        "--border-left-width": `0.9px`,
                        "--border-right-width": `0.9px`,
                        "--border-top-width": `0.9px`,
                        borderBottomLeftRadius: 7.2,
                        borderBottomRightRadius: 7.2,
                        borderTopLeftRadius: 7.2,
                        borderTopRightRadius: 7.2,
                      },
                      K0d26ei_d: {
                        "--border-bottom-width": `0.9px`,
                        "--border-color": `rgb(156, 156, 156)`,
                        "--border-left-width": `0.9px`,
                        "--border-right-width": `0.9px`,
                        "--border-top-width": `0.9px`,
                        backgroundColor: `var(--token-72534714-0887-42d9-aa5a-709674afb825, rgb(241, 241, 241))`,
                        borderBottomLeftRadius: 7.2,
                        borderBottomRightRadius: 7.2,
                        borderTopLeftRadius: 7.2,
                        borderTopRightRadius: 7.2,
                      },
                    },
                    ...Tu(
                      {
                        B3h4I7Bs0: { "data-framer-name": `Hover - Card`, onMouseLeave: F },
                        DsHfwJZC4: { "data-framer-name": `Card - Tablet`, onMouseEnter: I },
                        K0d26ei_d: {
                          "data-framer-name": `Hover - Card - Tablet`,
                          onMouseEnter: I,
                          onMouseLeave: re,
                        },
                      },
                      C,
                      D
                    ),
                    children: [
                      x(O.div, {
                        className: `framer-a4iy0n`,
                        "data-framer-name": `Wrap`,
                        layoutDependency: j,
                        layoutId: `abvm0ZocM`,
                        style: {
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                        },
                        variants: {
                          DsHfwJZC4: {
                            borderBottomLeftRadius: 4.5,
                            borderBottomRightRadius: 4.5,
                            borderTopLeftRadius: 4.5,
                            borderTopRightRadius: 4.5,
                          },
                          K0d26ei_d: {
                            borderBottomLeftRadius: 4.5,
                            borderBottomRightRadius: 4.5,
                            borderTopLeftRadius: 4.5,
                            borderTopRightRadius: 4.5,
                          },
                        },
                        children: x(Pe, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: H((l?.y || 0) + (10 + ((l?.height || 100) - 20 - 80) / 2) + 0),
                            pixelHeight: 324,
                            pixelWidth: 332,
                            sizes: `80px`,
                            ...ju(g),
                          },
                          className: `framer-1xnxjgj`,
                          "data-framer-name": `Product Image`,
                          layoutDependency: j,
                          layoutId: `LC7E3ajph`,
                          style: { scale: 1 },
                          variants: {
                            B3h4I7Bs0: { scale: 1.08 },
                            DsHfwJZC4: { scale: 1 },
                            K0d26ei_d: { scale: 1.08 },
                          },
                          ...Tu(
                            {
                              DsHfwJZC4: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: H(
                                    (l?.y || 0) + (9 + ((l?.height || 90) - 18 - 72) / 2) + 0
                                  ),
                                  pixelHeight: 324,
                                  pixelWidth: 332,
                                  sizes: `72px`,
                                  ...ju(g),
                                },
                              },
                              K0d26ei_d: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: H(
                                    (l?.y || 0) + (9 + ((l?.height || 200) - 18 - 72) / 2) + 0
                                  ),
                                  pixelHeight: 324,
                                  pixelWidth: 332,
                                  sizes: `72px`,
                                  ...ju(g),
                                },
                              },
                            },
                            C,
                            D
                          ),
                        }),
                      }),
                      S(O.div, {
                        className: `framer-rknqw`,
                        "data-framer-name": `Content`,
                        layoutDependency: j,
                        layoutId: `U6b3weBCJ`,
                        children: [
                          x(he, {
                            __fromCanvasComponent: !0,
                            children: x(s, {
                              children: x(O.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                  "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                  "--framer-letter-spacing": `-0.03em`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                },
                                children: `Popular T-shirts`,
                              }),
                            }),
                            className: `framer-1ffldne`,
                            "data-framer-name": `Title`,
                            fonts: [`FS;General Sans-variable`],
                            layoutDependency: j,
                            layoutId: `h3XJL_57s`,
                            style: {
                              "--extracted-2gg91v": `"wght" 450`,
                              "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: h,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Tu(
                              {
                                DsHfwJZC4: {
                                  children: x(s, {
                                    children: x(O.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                        "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                        "--framer-letter-spacing": `-0.03em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                      },
                                      children: `Popular T-shirts`,
                                    }),
                                  }),
                                },
                                K0d26ei_d: {
                                  children: x(s, {
                                    children: x(O.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                        "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                        "--framer-letter-spacing": `-0.03em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                      },
                                      children: `Popular T-shirts`,
                                    }),
                                  }),
                                },
                              },
                              C,
                              D
                            ),
                          }),
                          S(O.div, {
                            className: `framer-r9g35i`,
                            "data-framer-name": `Button`,
                            layoutDependency: j,
                            layoutId: `L4yAXqIb9`,
                            children: [
                              x(he, {
                                __fromCanvasComponent: !0,
                                children: x(s, {
                                  children: x(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                      "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `14.73px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-line-height": `96%`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(111, 111, 111))`,
                                    },
                                    children: `Shop now`,
                                  }),
                                }),
                                className: `framer-1s0e7pv`,
                                "data-framer-name": `Text`,
                                fonts: [`FS;General Sans-medium`],
                                layoutDependency: j,
                                layoutId: `lrhkYMGHq`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(111, 111, 111)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Tu(
                                  {
                                    DsHfwJZC4: {
                                      children: x(s, {
                                        children: x(O.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                            "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.03em`,
                                            "--framer-line-height": `96%`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(111, 111, 111))`,
                                          },
                                          children: `Shop now`,
                                        }),
                                      }),
                                    },
                                    K0d26ei_d: {
                                      children: x(s, {
                                        children: x(O.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                            "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.03em`,
                                            "--framer-line-height": `96%`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(111, 111, 111))`,
                                          },
                                          children: `Shop now`,
                                        }),
                                      }),
                                    },
                                  },
                                  C,
                                  D
                                ),
                              }),
                              S(O.div, {
                                className: `framer-1q2v8y2`,
                                "data-framer-name": `Arrow`,
                                layoutDependency: j,
                                layoutId: `ZrAyRuE2r`,
                                children: [
                                  x(Oi, {
                                    animated: !0,
                                    className: `framer-hm80ir`,
                                    layoutDependency: j,
                                    layoutId: `GC2ZNOjCR`,
                                    style: { "--d1m4u3": 2.2, "--v9s4l2": `rgb(111, 111, 111)` },
                                  }),
                                  x(Oi, {
                                    animated: !0,
                                    className: `framer-1fbxvh2`,
                                    layoutDependency: j,
                                    layoutId: `XXkrSWRDp`,
                                    style: { "--d1m4u3": 2.2, "--v9s4l2": `rgb(111, 111, 111)` },
                                  }),
                                ],
                              }),
                            ],
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
          `.framer-poi6m.framer-c0zp17, .framer-poi6m .framer-c0zp17 { display: block; }`,
          `.framer-poi6m.framer-jd1nuh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; text-decoration: none; width: 276px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-poi6m .framer-a4iy0n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 80px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-poi6m .framer-1xnxjgj { flex: none; gap: 0px; height: 80px; overflow: hidden; position: relative; width: 80px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-poi6m .framer-rknqw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-poi6m .framer-1ffldne { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-poi6m .framer-r9g35i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-poi6m .framer-1s0e7pv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-poi6m .framer-1q2v8y2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-poi6m .framer-hm80ir { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }`,
          `.framer-poi6m .framer-1fbxvh2 { aspect-ratio: 1 / 1; bottom: -10px; flex: none; height: var(--framer-aspect-ratio-supported, 10px); left: -10px; position: absolute; width: 10px; z-index: 1; }`,
          `.framer-poi6m.framer-v-p3sxuq .framer-hm80ir { position: absolute; right: -10px; top: -10px; z-index: 1; }`,
          `.framer-poi6m.framer-v-p3sxuq .framer-1fbxvh2 { bottom: unset; left: unset; position: relative; }`,
          `.framer-poi6m.framer-v-1pjkjem.framer-jd1nuh, .framer-poi6m.framer-v-v6qp1d.framer-jd1nuh { gap: 10.8px; padding: 9px; width: 248px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-a4iy0n, .framer-poi6m.framer-v-v6qp1d .framer-a4iy0n { gap: 9px; height: 72px; width: 72px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-1xnxjgj, .framer-poi6m.framer-v-v6qp1d .framer-1xnxjgj { height: 72px; width: 72px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-rknqw, .framer-poi6m.framer-v-v6qp1d .framer-rknqw { gap: 16.2px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-r9g35i, .framer-poi6m.framer-v-v6qp1d .framer-r9g35i { gap: 9px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-1q2v8y2, .framer-poi6m.framer-v-v6qp1d .framer-1q2v8y2 { gap: 9px; padding: 1.8px 0px 0px 0px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-hm80ir { height: var(--framer-aspect-ratio-supported, 9px); width: 9px; }`,
          `.framer-poi6m.framer-v-1pjkjem .framer-1fbxvh2 { bottom: -9px; height: var(--framer-aspect-ratio-supported, 9px); left: -9px; width: 9px; }`,
          `.framer-poi6m.framer-v-v6qp1d .framer-hm80ir { height: var(--framer-aspect-ratio-supported, 9px); position: absolute; right: -9px; top: -9px; width: 9px; z-index: 1; }`,
          `.framer-poi6m.framer-v-v6qp1d .framer-1fbxvh2 { bottom: unset; height: var(--framer-aspect-ratio-supported, 9px); left: unset; position: relative; width: 9px; }`,
          `.framer-poi6m[data-border="true"]::after, .framer-poi6m [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-poi6m`
      )),
      (Lu.displayName = `Floating Cat Card`),
      (Lu.defaultProps = { height: 100, width: 276 }),
      W(Lu, {
        variant: {
          options: [`I22C2c62y`, `B3h4I7Bs0`, `DsHfwJZC4`, `K0d26ei_d`],
          optionTitles: [`Card`, `Hover - Card`, `Card - Tablet`, `Hover - Card - Tablet`],
          title: `Variant`,
          type: X.Enum,
        },
        gq17xfpsX: {
          defaultValue: `Popular T-shirts`,
          displayTextArea: !1,
          title: `Card Title`,
          type: X.String,
        },
        ongq17xfpsXChange: { changes: `gq17xfpsX`, type: X.ChangeHandler },
        Fzapq9TX0: {
          __defaultAssetReference: `data:framer/asset-reference,lGH6PhcjmEJZXq15GeajfWT9SfQ.png?width=332&height=324`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,lGH6PhcjmEJZXq15GeajfWT9SfQ.png?width=332&height=324`,
          },
          title: `Card Image`,
          type: X.ResponsiveImage,
        },
        Vl0X_EpAn: { title: `Card Link`, type: X.Link },
        qkB3zOFb2: {
          defaultValue: `Shop now`,
          displayTextArea: !1,
          title: `Button Text`,
          type: X.String,
        },
        onqkB3zOFb2Change: { changes: `qkB3zOFb2`, type: X.ChangeHandler },
        IJ3lGBhij: { defaultValue: !1, title: `New Tab`, type: X.Boolean },
        onIJ3lGBhijChange: { changes: `IJ3lGBhij`, type: X.ChangeHandler },
      }),
      U(
        Lu,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
                variationAxes: [
                  { defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Eu,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function zu(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bu,
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
  cd = e(() => {
    (h(),
      G(),
      I(),
      r(),
      Jl(),
      wu(),
      Ru(),
      (Bu = q(ql)),
      (Vu = q(Cu)),
      (Hu = q(Lu)),
      (Uu = Z(ql)),
      (Wu = Z(Cu)),
      (Gu = [`y4oWwr01k`, `A3mX7w1sK`, `Sq3uz3QlT`, `DNEdO18ER`]),
      (Ku = `framer-HEeiP`),
      (qu = {
        A3mX7w1sK: `framer-v-1xkdc4k`,
        DNEdO18ER: `framer-v-q41jzw`,
        Sq3uz3QlT: `framer-v-alwi9x`,
        y4oWwr01k: `framer-v-kxmpu7`,
      }),
      (Ju = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Yu = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Xu = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Zu = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Qu = (e) => !e),
      ($u = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (ed = {
        "Slider 1-1": `DNEdO18ER`,
        "Slider 1": `y4oWwr01k`,
        "Slider 2": `A3mX7w1sK`,
        "Slider 3": `Sq3uz3QlT`,
      }),
      (td = O.create(s)),
      (nd = { Desktop: `B3AoP5Hcp`, Phone: `DzUUnbO1u`, Tablet: `umW7CIBwu` }),
      (rd = { Dekstop: `pP4Cyx0VV`, Phone: `jhxgacAdT` }),
      (id = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (ad = ({
        cardButtonText: e,
        cardImage1: t,
        cardImage2: n,
        cardImage3: r,
        cardLink1: i,
        cardLink2: a,
        cardLink3: o,
        cardTitle1: s,
        cardTitle2: c,
        cardTitle3: l,
        contentPadding: u,
        contentVariant: d,
        description1: f,
        description2: p,
        description3: m,
        headline1: h,
        headline2: g,
        headline3: _,
        height: v,
        hideFloatingCard: y,
        id: b,
        lineVariant: x,
        newTab: S,
        slideLink1: C,
        slideLink2: w,
        slideLink3: T,
        sliderButtonText: E,
        sliderImage1: D,
        sliderImage2: ee,
        sliderImage3: O,
        width: te,
        ...k
      }) => ({
        ...k,
        A3Dl4boiR: m ?? k.A3Dl4boiR ?? `Clean silhouettes, soft textures, standout ease.`,
        apIf5zMGI: r ??
          k.apIf5zMGI ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/C2bqfqZ5VPz7hGFauSgvdxwhn4.png?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/C2bqfqZ5VPz7hGFauSgvdxwhn4.png?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/C2bqfqZ5VPz7hGFauSgvdxwhn4.png?width=1000&height=1000 1000w`,
          },
        bCmLneJz3: ee ??
          k.bCmLneJz3 ?? {
            pixelHeight: 1706,
            pixelWidth: 2880,
            positionX: `34.4%`,
            positionY: `10.7%`,
            src: `../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-1cfa3d.png`,
            srcSet: `../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-2f1155.png 512w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-4ef9a6.png 1024w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo.png 2048w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-1cfa3d.png 2880w`,
          },
        C7DlMsO_6: s ?? k.C7DlMsO_6 ?? `Popular T-shirts`,
        dc554E11x: D ??
          k.dc554E11x ?? {
            pixelHeight: 1706,
            pixelWidth: 2880,
            src: `../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-02e16b.png`,
            srcSet: `../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-535d35.png 512w,../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-576f62.png 1024w,../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc.png 2048w,../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-02e16b.png 2880w`,
          },
        Elf5Jy9gM: h ?? k.Elf5Jy9gM ?? `Style in Motion`,
        FkRZcrZuB: a ?? k.FkRZcrZuB,
        Jnr6mW_B3: l ?? k.Jnr6mW_B3 ?? `Popular Pants`,
        Jprtyoo92: i ?? k.Jprtyoo92,
        l5l_ga81p: t ??
          k.l5l_ga81p ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `../../assets/images/upIFky4DATIajqQ0EjWgzyb1Bo-fd743e.png`,
            srcSet: `../../assets/images/upIFky4DATIajqQ0EjWgzyb1Bo.png 512w,../../assets/images/upIFky4DATIajqQ0EjWgzyb1Bo-fd743e.png 1000w`,
          },
        LrELjlxoD: u ?? k.LrELjlxoD ?? `80px 50px 40px 50px`,
        n_kThdQTn: o ?? k.n_kThdQTn,
        n9zRCp4pE: p ?? k.n9zRCp4pE ?? `Modern layers made for days that keep moving.`,
        pBwr6ODpx: g ?? k.pBwr6ODpx ?? `Made to Stand Out`,
        qiI4hMUq4: y ?? k.qiI4hMUq4,
        qJ7VJoMtm: T ?? k.qJ7VJoMtm,
        QV7QIDyFS: c ?? k.QV7QIDyFS ?? `Popular Jackets`,
        Rd9TXJPFZ: f ?? k.Rd9TXJPFZ ?? `New-season pieces made for everyday confidence.`,
        s3nF_13fe: _ ?? k.s3nF_13fe ?? `The Style Reset`,
        spFp5yGzf: nd[d] ?? d ?? k.spFp5yGzf ?? `B3AoP5Hcp`,
        tAyUHxe1K: O ??
          k.tAyUHxe1K ?? {
            pixelHeight: 1706,
            pixelWidth: 2880,
            src: `https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?width=2880&height=1706`,
            srcSet: `https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=512&width=2880&height=1706 512w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=1024&width=2880&height=1706 1024w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=2048&width=2880&height=1706 2048w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?width=2880&height=1706 2880w`,
          },
        tmTuJACr9: E ?? k.tmTuJACr9 ?? `Shop Now`,
        V1sdKvS6G: rd[x] ?? x ?? k.V1sdKvS6G ?? `pP4Cyx0VV`,
        v6KxDGjcO: e ?? k.v6KxDGjcO ?? `Shop now`,
        variant: ed[k.variant] ?? k.variant ?? `y4oWwr01k`,
        wXLmrU_2O: S ?? k.wXLmrU_2O,
        yg1kmG27R: w ?? k.yg1kmG27R,
        yTMJeUELa: n ??
          k.yTMJeUELa ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/KHUyQjOSP0zzc2gtUpVsAfutmfo.png?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/KHUyQjOSP0zzc2gtUpVsAfutmfo.png?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/KHUyQjOSP0zzc2gtUpVsAfutmfo.png?width=1000&height=1000 1000w`,
          },
        ZzT0Sz0ar: C ?? k.ZzT0Sz0ar,
      })),
      (od = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (sd = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              dc554E11x: m,
              Elf5Jy9gM: h,
              onElf5Jy9gMChange: g,
              Rd9TXJPFZ: _,
              onRd9TXJPFZChange: v,
              ZzT0Sz0ar: y,
              C7DlMsO_6: b,
              onC7DlMsO_6Change: C,
              l5l_ga81p: w,
              Jprtyoo92: T,
              bCmLneJz3: E,
              pBwr6ODpx: D,
              onpBwr6ODpxChange: ee,
              n9zRCp4pE: te,
              onn9zRCp4pEChange: k,
              yg1kmG27R: ne,
              QV7QIDyFS: j,
              onQV7QIDyFSChange: M,
              yTMJeUELa: N,
              FkRZcrZuB: P,
              tAyUHxe1K: F,
              s3nF_13fe: I,
              ons3nF_13feChange: re,
              A3Dl4boiR: ie,
              onA3Dl4boiRChange: R,
              qJ7VJoMtm: ae,
              Jnr6mW_B3: z,
              onJnr6mW_B3Change: B,
              apIf5zMGI: se,
              n_kThdQTn: ce,
              tmTuJACr9: le,
              ontmTuJACr9Change: ue,
              v6KxDGjcO: de,
              onv6KxDGjcOChange: fe,
              wXLmrU_2O: U,
              onwXLmrU_2OChange: pe,
              LrELjlxoD: W,
              spFp5yGzf: me,
              V1sdKvS6G: he,
              qiI4hMUq4: ge,
              ...G
            } = ad(e),
            [K, ve] = id(h, g),
            [ye, be] = id(_, v),
            [xe, Ce] = id(b, C),
            [q, we] = id(D, ee),
            [J, Te] = id(te, k),
            [Ee, De] = id(j, M),
            [Oe, Ae] = id(I, re),
            [je, Me] = id(ie, R),
            [Ne, Fe] = id(z, B),
            [X, Z] = id(le, ue),
            [Re, ze] = id(de, fe),
            [Be, Ve] = id(U, pe),
            {
              baseVariant: He,
              classNames: Ue,
              clearLoadingGesture: We,
              gestureHandlers: Ge,
              gestureVariant: Ke,
              isLoading: qe,
              setGestureState: Je,
              setVariant: Ye,
              variants: Xe,
            } = _e({
              cycleOrder: Gu,
              defaultVariant: `y4oWwr01k`,
              ref: r,
              variant: p,
              variantClassNames: qu,
            }),
            Ze = od(e, Xe),
            { activeVariantCallback: Qe, delay: $e } = Ie(He),
            et = Qe(async (...e) => {
              await $e(() => Ye(`A3mX7w1sK`, !0), 1e4);
            }),
            tt = Qe(async (...e) => {
              await $e(() => Ye(`Sq3uz3QlT`, !0), 1e4);
            }),
            nt = Qe(async (...e) => {
              await $e(() => Ye(`DNEdO18ER`, !0), 1e4);
            }),
            rt = Qe(async (...e) => {
              await $e(() => Ye(`y4oWwr01k`, !0), 300);
            }),
            it = Qe(async (...e) => {
              Ye(`y4oWwr01k`);
            }),
            at = Qe(async (...e) => {
              Ye(`A3mX7w1sK`);
            }),
            ot = Qe(async (...e) => {
              Ye(`Sq3uz3QlT`);
            }),
            st = Qe(async (...e) => {
              Ye(`DNEdO18ER`);
            });
          oe(He, { A3mX7w1sK: tt, default: et, DNEdO18ER: rt, Sq3uz3QlT: nt });
          let ct = V(Ku),
            lt = () => ![`Sq3uz3QlT`, `DNEdO18ER`].includes(He),
            ut = () => He !== `DNEdO18ER`,
            dt = () => !![`A3mX7w1sK`, `Sq3uz3QlT`, `DNEdO18ER`].includes(He),
            ft = () => !![`Sq3uz3QlT`, `DNEdO18ER`].includes(He),
            pt = () => ![`A3mX7w1sK`, `Sq3uz3QlT`].includes(He),
            mt = typeof W == `string` ? Le(W) : { top: W, right: W, bottom: W, left: W },
            ht = () => He === `A3mX7w1sK`,
            gt = () => He === `Sq3uz3QlT`,
            _t = Qu(ge);
          return x(A, {
            id: d ?? a,
            children: x(td, {
              animate: Xe,
              initial: !1,
              children: x($u, {
                value: Ju,
                children: S(O.div, {
                  ...G,
                  ...Ge,
                  className: V(ct, `framer-kxmpu7`, u, Ue),
                  "data-framer-name": `Slider 1`,
                  "data-highlight": !0,
                  layoutDependency: Ze,
                  layoutId: `y4oWwr01k`,
                  ref: r,
                  style: { ...l },
                  ...zu(
                    {
                      A3mX7w1sK: { "data-framer-name": `Slider 2` },
                      DNEdO18ER: { "data-framer-name": `Slider 1-1` },
                      Sq3uz3QlT: { "data-framer-name": `Slider 3` },
                    },
                    He,
                    Ke
                  ),
                  children: [
                    lt() &&
                      x(Pe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: H((c?.y || 0) + 0),
                          pixelHeight: 1706,
                          pixelWidth: 2880,
                          sizes: c?.width || `100vw`,
                          ...Yu(m),
                        },
                        className: `framer-1t8mrf6`,
                        "data-framer-name": `Slider Image 1`,
                        layoutDependency: Ze,
                        layoutId: `g2MTWgpb1`,
                        style: {
                          filter: `brightness(0.9)`,
                          opacity: 1,
                          WebkitFilter: `brightness(0.9)`,
                        },
                        variants: { A3mX7w1sK: { opacity: 0 } },
                      }),
                    ut() &&
                      x(Pe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: H((c?.y || 0) + 0),
                          pixelHeight: 1706,
                          pixelWidth: 2880,
                          sizes: c?.width || `100vw`,
                          ...Yu(E),
                        },
                        className: `framer-3nt2tg`,
                        "data-framer-name": `Slider Image 2`,
                        layoutDependency: Ze,
                        layoutId: `C0SuOatyo`,
                        style: {
                          filter: `brightness(0.85)`,
                          opacity: 1,
                          WebkitFilter: `brightness(0.85)`,
                        },
                        variants: { Sq3uz3QlT: { opacity: 0 } },
                      }),
                    dt() &&
                      x(Pe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          pixelHeight: 1706,
                          pixelWidth: 2880,
                          ...Yu(F),
                        },
                        className: `framer-11mukhz`,
                        "data-framer-name": `Slider Image 3`,
                        layoutDependency: Ze,
                        layoutId: `MSuLZGooK`,
                        style: {
                          filter: `brightness(0.85)`,
                          opacity: 1,
                          WebkitFilter: `brightness(0.85)`,
                        },
                        variants: { DNEdO18ER: { opacity: 0 } },
                        ...zu(
                          {
                            A3mX7w1sK: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: H((c?.y || 0) + 0),
                                pixelHeight: 1706,
                                pixelWidth: 2880,
                                sizes: c?.width || `100vw`,
                                ...Yu(F),
                              },
                            },
                            DNEdO18ER: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: H((c?.y || 0) + 0),
                                pixelHeight: 1706,
                                pixelWidth: 2880,
                                sizes: c?.width || `100vw`,
                                ...Yu(F),
                              },
                            },
                            Sq3uz3QlT: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: H((c?.y || 0) + 0),
                                pixelHeight: 1706,
                                pixelWidth: 2880,
                                sizes: c?.width || `100vw`,
                                ...Yu(F),
                              },
                            },
                          },
                          He,
                          Ke
                        ),
                      }),
                    ft() &&
                      x(Pe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          pixelHeight: 1706,
                          pixelWidth: 2880,
                          ...Yu(m),
                        },
                        className: `framer-1o6sm9a`,
                        "data-framer-name": `Slider Image 1 - Helper`,
                        layoutDependency: Ze,
                        layoutId: `kQAzNmR2g`,
                        style: { filter: `brightness(0.85)`, WebkitFilter: `brightness(0.85)` },
                        ...zu(
                          {
                            DNEdO18ER: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: H((c?.y || 0) + 0),
                                pixelHeight: 1706,
                                pixelWidth: 2880,
                                sizes: c?.width || `100vw`,
                                ...Yu(m),
                              },
                            },
                            Sq3uz3QlT: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: H((c?.y || 0) + 0),
                                pixelHeight: 1706,
                                pixelWidth: 2880,
                                sizes: c?.width || `100vw`,
                                ...Yu(m),
                              },
                            },
                          },
                          He,
                          Ke
                        ),
                      }),
                    S(O.div, {
                      className: `framer-11i3741`,
                      "data-framer-name": `Content Wrap`,
                      layoutDependency: Ze,
                      layoutId: `f3fl_XGEt`,
                      style: { "--c031pw": Xu(W) },
                      children: [
                        pt() &&
                          x(Y, {
                            height: 184,
                            width: `calc(min(${c?.width || `100vw`}, 1360px) - ${(mt?.left ?? 0) + (mt?.right ?? 0)}px)`,
                            children: x(L, {
                              className: `framer-1f7srf9-container`,
                              "data-framer-name": `Slider Content 1`,
                              layoutDependency: Ze,
                              layoutId: `EvhhvFFyU-container`,
                              name: `Slider Content 1`,
                              nodeId: `EvhhvFFyU`,
                              rendersWithMotion: !0,
                              scopeId: `Q3wsIUByy`,
                              children: x(ql, {
                                DDT_lkpnu: ye,
                                FIPmEK7pa: K,
                                gKLAF7CSU: X,
                                height: `100%`,
                                id: `EvhhvFFyU`,
                                knpklM2MO: y,
                                layoutId: `EvhhvFFyU`,
                                name: `Slider Content 1`,
                                onDDT_lkpnuChange: be,
                                onFIPmEK7paChange: ve,
                                ongKLAF7CSUChange: Z,
                                onTQ8vcfmqNChange: Ve,
                                style: { width: `100%` },
                                TQ8vcfmqN: Be,
                                variant: Zu(me),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ht() &&
                          x(Y, {
                            ...zu(
                              {
                                A3mX7w1sK: {
                                  height: 184,
                                  width: `calc(min(${c?.width || `100vw`}, 1360px) - ${(mt?.left ?? 0) + (mt?.right ?? 0)}px)`,
                                },
                              },
                              He,
                              Ke
                            ),
                            children: x(L, {
                              className: `framer-1igf461-container`,
                              "data-framer-name": `Slider Content 2`,
                              layoutDependency: Ze,
                              layoutId: `CdnvXSs8i-container`,
                              name: `Slider Content 2`,
                              nodeId: `CdnvXSs8i`,
                              rendersWithMotion: !0,
                              scopeId: `Q3wsIUByy`,
                              children: x(ql, {
                                DDT_lkpnu: J,
                                FIPmEK7pa: q,
                                gKLAF7CSU: X,
                                height: `100%`,
                                id: `CdnvXSs8i`,
                                knpklM2MO: ne,
                                layoutId: `CdnvXSs8i`,
                                name: `Slider Content 2`,
                                onDDT_lkpnuChange: Te,
                                onFIPmEK7paChange: we,
                                ongKLAF7CSUChange: Z,
                                onTQ8vcfmqNChange: Ve,
                                style: { width: `100%` },
                                TQ8vcfmqN: Be,
                                variant: Zu(me),
                                width: `100%`,
                              }),
                            }),
                          }),
                        gt() &&
                          x(Y, {
                            ...zu(
                              {
                                Sq3uz3QlT: {
                                  height: 184,
                                  width: `calc(min(${c?.width || `100vw`}, 1360px) - ${(mt?.left ?? 0) + (mt?.right ?? 0)}px)`,
                                },
                              },
                              He,
                              Ke
                            ),
                            children: x(L, {
                              className: `framer-1ryqrdx-container`,
                              "data-framer-name": `Slider Content 3`,
                              layoutDependency: Ze,
                              layoutId: `ggmK_QM35-container`,
                              name: `Slider Content 3`,
                              nodeId: `ggmK_QM35`,
                              rendersWithMotion: !0,
                              scopeId: `Q3wsIUByy`,
                              children: x(ql, {
                                DDT_lkpnu: je,
                                FIPmEK7pa: Oe,
                                gKLAF7CSU: X,
                                height: `100%`,
                                id: `ggmK_QM35`,
                                knpklM2MO: ae,
                                layoutId: `ggmK_QM35`,
                                name: `Slider Content 3`,
                                onDDT_lkpnuChange: Me,
                                onFIPmEK7paChange: Ae,
                                ongKLAF7CSUChange: Z,
                                onTQ8vcfmqNChange: Ve,
                                style: { width: `100%` },
                                TQ8vcfmqN: Be,
                                variant: Zu(me),
                                width: `100%`,
                              }),
                            }),
                          }),
                        x(O.div, {
                          className: `framer-10fjiaz`,
                          "data-framer-name": `Line Wrap`,
                          layoutDependency: Ze,
                          layoutId: `XB4TFSygo`,
                          children: x(Y, {
                            height: 4,
                            children: x(L, {
                              className: `framer-1q85j0d-container`,
                              layoutDependency: Ze,
                              layoutId: `E_CAfaAyN-container`,
                              nodeId: `E_CAfaAyN`,
                              rendersWithMotion: !0,
                              scopeId: `Q3wsIUByy`,
                              children: x(Cu, {
                                dfgX5jSlR: at,
                                ggIEZOjkr: `ot2u8dmxV`,
                                height: `100%`,
                                hPMNiK4TC: ot,
                                id: `E_CAfaAyN`,
                                layoutId: `E_CAfaAyN`,
                                oNtaM3EXn: it,
                                variant: Zu(he),
                                VBlpVMt_V: `DGZbux4Tj`,
                                w243CsFxI: `DGZbux4Tj`,
                                width: `100%`,
                                ...zu(
                                  {
                                    A3mX7w1sK: { ggIEZOjkr: `O72BKg0Tz`, VBlpVMt_V: `ot2u8dmxV` },
                                    Sq3uz3QlT: {
                                      ggIEZOjkr: `DGZbux4Tj`,
                                      oNtaM3EXn: st,
                                      VBlpVMt_V: `O72BKg0Tz`,
                                      w243CsFxI: `ot2u8dmxV`,
                                    },
                                  },
                                  He,
                                  Ke
                                ),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    _t !== !1 &&
                      x(Y, {
                        height: 100,
                        y: (c?.y || 0) + (c?.height || 800) - 130,
                        children: x(L, {
                          className: `framer-1923eso-container`,
                          layoutDependency: Ze,
                          layoutId: `gsrV1g81z-container`,
                          nodeId: `gsrV1g81z`,
                          rendersWithMotion: !0,
                          scopeId: `Q3wsIUByy`,
                          children: x(Lu, {
                            Fzapq9TX0: Yu(w),
                            gq17xfpsX: xe,
                            height: `100%`,
                            id: `gsrV1g81z`,
                            IJ3lGBhij: Be,
                            layoutId: `gsrV1g81z`,
                            ongq17xfpsXChange: Ce,
                            onIJ3lGBhijChange: Ve,
                            onqkB3zOFb2Change: ze,
                            qkB3zOFb2: Re,
                            variant: Zu(`I22C2c62y`),
                            Vl0X_EpAn: T,
                            width: `100%`,
                            ...zu(
                              {
                                A3mX7w1sK: {
                                  Fzapq9TX0: Yu(N),
                                  gq17xfpsX: Ee,
                                  ongq17xfpsXChange: De,
                                  Vl0X_EpAn: P,
                                },
                                Sq3uz3QlT: {
                                  Fzapq9TX0: Yu(se),
                                  gq17xfpsX: Ne,
                                  ongq17xfpsXChange: Fe,
                                  Vl0X_EpAn: ce,
                                },
                              },
                              He,
                              Ke
                            ),
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
          `.framer-HEeiP.framer-9qkaiz, .framer-HEeiP .framer-9qkaiz { display: block; }`,
          `.framer-HEeiP.framer-kxmpu7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-HEeiP .framer-1t8mrf6 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 3; }`,
          `.framer-HEeiP .framer-3nt2tg { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-HEeiP .framer-11mukhz { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-HEeiP .framer-1o6sm9a { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-HEeiP .framer-11i3741 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: var(--c031pw); position: relative; width: 100%; z-index: 4; }`,
          `.framer-HEeiP .framer-1f7srf9-container, .framer-HEeiP .framer-1igf461-container, .framer-HEeiP .framer-1ryqrdx-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-HEeiP .framer-10fjiaz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-HEeiP .framer-1q85j0d-container { flex: none; height: auto; position: relative; width: auto; z-index: 5; }`,
          `.framer-HEeiP .framer-1923eso-container { bottom: 30px; flex: none; height: auto; position: absolute; right: 30px; width: auto; z-index: 4; }`,
        ],
        `framer-HEeiP`
      )),
      (sd.displayName = `Sliders`),
      (sd.defaultProps = { height: 800, width: 1200 }),
      W(sd, {
        variant: {
          options: [`y4oWwr01k`, `A3mX7w1sK`, `Sq3uz3QlT`, `DNEdO18ER`],
          optionTitles: [`Slider 1`, `Slider 2`, `Slider 3`, `Slider 1-1`],
          title: `Variant`,
          type: X.Enum,
        },
        dc554E11x: {
          __defaultAssetReference: `data:framer/asset-reference,RdZtXOQVg6jVWKomi937lN2LFc.png?originalFilename=image+91.png&width=2880&height=1706`,
          title: `Slider Image 1`,
          type: X.ResponsiveImage,
        },
        Elf5Jy9gM: {
          defaultValue: `Style in Motion`,
          displayTextArea: !1,
          title: `Headline 1`,
          type: X.String,
        },
        onElf5Jy9gMChange: { changes: `Elf5Jy9gM`, type: X.ChangeHandler },
        Rd9TXJPFZ: {
          defaultValue: `New-season pieces made for everyday confidence.`,
          displayTextArea: !0,
          title: `Description 1`,
          type: X.String,
        },
        onRd9TXJPFZChange: { changes: `Rd9TXJPFZ`, type: X.ChangeHandler },
        ZzT0Sz0ar: { title: `Slide Link 1`, type: X.Link },
        C7DlMsO_6: {
          defaultValue: `Popular T-shirts`,
          displayTextArea: !1,
          title: `Card Title 1`,
          type: X.String,
        },
        onC7DlMsO_6Change: { changes: `C7DlMsO_6`, type: X.ChangeHandler },
        l5l_ga81p: {
          __defaultAssetReference: `data:framer/asset-reference,upIFky4DATIajqQ0EjWgzyb1Bo.png?originalFilename=model+-+graphic+tee+in+Black.png&width=1000&height=1000`,
          title: `Card Image 1`,
          type: X.ResponsiveImage,
        },
        Jprtyoo92: { description: `______________________`, title: `Card Link 1`, type: X.Link },
        bCmLneJz3: {
          __defaultAssetReference: `data:framer/asset-reference,NmyRMrP7J9zTBW31kc4ezVJKmo.png?originalFilename=Frame+6287.png&width=2880&height=1706`,
          __vekterDefault: {
            assetReference: `data:framer/asset-reference,NmyRMrP7J9zTBW31kc4ezVJKmo.png?originalFilename=Frame+6287.png&width=2880&height=1706`,
            positionX: `34.4%`,
            positionY: `10.7%`,
          },
          title: `Slider Image 2`,
          type: X.ResponsiveImage,
        },
        pBwr6ODpx: {
          defaultValue: `Made to Stand Out`,
          displayTextArea: !1,
          title: `Headline 2`,
          type: X.String,
        },
        onpBwr6ODpxChange: { changes: `pBwr6ODpx`, type: X.ChangeHandler },
        n9zRCp4pE: {
          defaultValue: `Modern layers made for days that keep moving.`,
          displayTextArea: !0,
          title: `Description 2`,
          type: X.String,
        },
        onn9zRCp4pEChange: { changes: `n9zRCp4pE`, type: X.ChangeHandler },
        yg1kmG27R: { title: `Slide Link 2`, type: X.Link },
        QV7QIDyFS: {
          defaultValue: `Popular Jackets`,
          displayTextArea: !1,
          title: `Card Title 2`,
          type: X.String,
        },
        onQV7QIDyFSChange: { changes: `QV7QIDyFS`, type: X.ChangeHandler },
        yTMJeUELa: {
          __defaultAssetReference: `data:framer/asset-reference,KHUyQjOSP0zzc2gtUpVsAfutmfo.png?originalFilename=model+-+zipper+jacket.png&width=1000&height=1000`,
          title: `Card Image 2`,
          type: X.ResponsiveImage,
        },
        FkRZcrZuB: { description: `______________________`, title: `Card Link 2`, type: X.Link },
        tAyUHxe1K: {
          __defaultAssetReference: `data:framer/asset-reference,Iuek68XvjWSJkNCvJ0polkyDVD0.png?originalFilename=Frame+6287+%281%29.png&width=2880&height=1706`,
          title: `Slider Image 3`,
          type: X.ResponsiveImage,
        },
        s3nF_13fe: {
          defaultValue: `The Style Reset`,
          displayTextArea: !1,
          title: `Headline 3`,
          type: X.String,
        },
        ons3nF_13feChange: { changes: `s3nF_13fe`, type: X.ChangeHandler },
        A3Dl4boiR: {
          defaultValue: `Clean silhouettes, soft textures, standout ease.`,
          displayTextArea: !0,
          title: `Description 3`,
          type: X.String,
        },
        onA3Dl4boiRChange: { changes: `A3Dl4boiR`, type: X.ChangeHandler },
        qJ7VJoMtm: { title: `Slide Link 3`, type: X.Link },
        Jnr6mW_B3: {
          defaultValue: `Popular Pants`,
          displayTextArea: !1,
          title: `Card Title 3`,
          type: X.String,
        },
        onJnr6mW_B3Change: { changes: `Jnr6mW_B3`, type: X.ChangeHandler },
        apIf5zMGI: {
          __defaultAssetReference: `data:framer/asset-reference,C2bqfqZ5VPz7hGFauSgvdxwhn4.png?originalFilename=38.png&width=1000&height=1000`,
          title: `Card Image 3`,
          type: X.ResponsiveImage,
        },
        n_kThdQTn: { description: `______________________`, title: `Card Link 3`, type: X.Link },
        tmTuJACr9: {
          defaultValue: `Shop Now`,
          displayTextArea: !1,
          title: `Slider Button Text`,
          type: X.String,
        },
        ontmTuJACr9Change: { changes: `tmTuJACr9`, type: X.ChangeHandler },
        v6KxDGjcO: {
          defaultValue: `Shop now`,
          displayTextArea: !1,
          title: `Card Button Text`,
          type: X.String,
        },
        onv6KxDGjcOChange: { changes: `v6KxDGjcO`, type: X.ChangeHandler },
        wXLmrU_2O: {
          defaultValue: !1,
          description: `______________________`,
          title: `New Tab`,
          type: X.Boolean,
        },
        onwXLmrU_2OChange: { changes: `wXLmrU_2O`, type: X.ChangeHandler },
        LrELjlxoD: {
          defaultValue: `80px 50px 40px 50px`,
          title: `Content Padding`,
          type: X.Padding,
        },
        spFp5yGzf: Uu?.variant && {
          ...Uu.variant,
          defaultValue: `B3AoP5Hcp`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Content Variant`,
        },
        onspFp5yGzfChange: { changes: `spFp5yGzf`, type: X.ChangeHandler },
        V1sdKvS6G: Wu?.variant && {
          ...Wu.variant,
          defaultValue: `pP4Cyx0VV`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Line Variant`,
        },
        onV1sdKvS6GChange: { changes: `V1sdKvS6G`, type: X.ChangeHandler },
        qiI4hMUq4: { defaultValue: !1, title: `Hide Floating Card`, type: X.Boolean },
        onqiI4hMUq4Change: { changes: `qiI4hMUq4`, type: X.ChangeHandler },
      }),
      U(sd, [{ explicitInter: !0, fonts: [] }, ...Bu, ...Vu, ...Hu], {
        supportsExplicitInterCodegen: !0,
      }),
      (sd.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([K(ql, {}, t), K(Cu, {}, t), K(Lu, {}, t)])),
      }));
  });
function ld(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd = e(() => {
    (h(),
      G(),
      I(),
      r(),
      cd(),
      (ud = q(sd)),
      (dd = [`lEAmQAdGj`, `gZYPvTMgr`, `ynbrHx8dI`]),
      (fd = `framer-l1swp`),
      (pd = {
        gZYPvTMgr: `framer-v-146d4rt`,
        lEAmQAdGj: `framer-v-jabg2e`,
        ynbrHx8dI: `framer-v-hm2mwk`,
      }),
      (md = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (hd = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (gd = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_d = ({ value: e, children: t }) => {
        let n = c(N),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return x(N.Provider, { value: i, children: t });
      }),
      (vd = { Desktop: `lEAmQAdGj`, Phone: `ynbrHx8dI`, Tablet: `gZYPvTMgr` }),
      (yd = O.create(s)),
      (bd = (e, t) => {
        let [n, r] = T(e),
          [i, a] = T(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (xd = ({
        cardButtonText: e,
        cardImage1: t,
        cardImage2: n,
        cardImage3: r,
        cardLink1: i,
        cardLink2: a,
        cardLink3: o,
        cardTitle1: s,
        cardTitle2: c,
        cardTitle3: l,
        description1: u,
        description2: d,
        description3: f,
        headline1: p,
        headline2: m,
        headline3: h,
        height: g,
        id: _,
        newTab: v,
        skiderButtonText: y,
        slideLink1: b,
        slideLink2: x,
        slideLink3: S,
        sliderImage1: C,
        sliderImage2: w,
        sliderImage3: T,
        width: E,
        ...D
      }) => ({
        ...D,
        a3_ExS_yQ: i ?? D.a3_ExS_yQ,
        CDBa0GSHJ: S ?? D.CDBa0GSHJ,
        eQu9BYIvP: h ?? D.eQu9BYIvP ?? `The Style Reset`,
        GvTlIwl93: d ?? D.GvTlIwl93 ?? `Modern layers made for days that keep moving.`,
        GybYvoIZU: f ?? D.GybYvoIZU ?? `Clean silhouettes, soft textures, standout ease.`,
        H3h07nN8a: n ??
          D.H3h07nN8a ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/KHUyQjOSP0zzc2gtUpVsAfutmfo.png?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/KHUyQjOSP0zzc2gtUpVsAfutmfo.png?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/KHUyQjOSP0zzc2gtUpVsAfutmfo.png?width=1000&height=1000 1000w`,
          },
        hnHYfBqAR: v ?? D.hnHYfBqAR,
        hnZqFUtG7: u ?? D.hnZqFUtG7 ?? `New-season pieces made for everyday confidence.`,
        jJeab9s4O: x ?? D.jJeab9s4O,
        JnLgjLoDq: y ?? D.JnLgjLoDq ?? `Shop Now`,
        lfXGnbMKX: s ?? D.lfXGnbMKX ?? `Popular T-shirts`,
        lKyB0l0Cd: r ??
          D.lKyB0l0Cd ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/C2bqfqZ5VPz7hGFauSgvdxwhn4.png?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/C2bqfqZ5VPz7hGFauSgvdxwhn4.png?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/C2bqfqZ5VPz7hGFauSgvdxwhn4.png?width=1000&height=1000 1000w`,
          },
        lO_lyf7sh: a ?? D.lO_lyf7sh,
        nFATg8D4n: c ?? D.nFATg8D4n ?? `Popular Jackets`,
        qhUXtpoHK: l ?? D.qhUXtpoHK ?? `Popular Pants`,
        QPa8XpBfr: m ?? D.QPa8XpBfr ?? `Made to Stand Out`,
        R1FPEVQrb: o ?? D.R1FPEVQrb,
        sTcZr36Dl: e ?? D.sTcZr36Dl ?? `Shop now`,
        uZCncdtXN: t ??
          D.uZCncdtXN ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `../../assets/images/upIFky4DATIajqQ0EjWgzyb1Bo-fd743e.png`,
            srcSet: `../../assets/images/upIFky4DATIajqQ0EjWgzyb1Bo.png 512w,../../assets/images/upIFky4DATIajqQ0EjWgzyb1Bo-fd743e.png 1000w`,
          },
        V_B0fzF7z: T ??
          D.V_B0fzF7z ?? {
            pixelHeight: 1706,
            pixelWidth: 2880,
            src: `https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?width=2880&height=1706`,
            srcSet: `https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=512&width=2880&height=1706 512w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=1024&width=2880&height=1706 1024w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=2048&width=2880&height=1706 2048w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?width=2880&height=1706 2880w`,
          },
        variant: vd[D.variant] ?? D.variant ?? `lEAmQAdGj`,
        XPXGmN2mX: p ?? D.XPXGmN2mX ?? `Style in Motion`,
        xuuioeB2c: C ??
          D.xuuioeB2c ?? {
            pixelHeight: 1706,
            pixelWidth: 2880,
            src: `../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-02e16b.png`,
            srcSet: `../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-535d35.png 512w,../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-576f62.png 1024w,../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc.png 2048w,../../assets/images/RdZtXOQVg6jVWKomi937lN2LFc-02e16b.png 2880w`,
          },
        ZcQpGHEXI: b ?? D.ZcQpGHEXI,
        Ze9m54dHv: w ??
          D.Ze9m54dHv ?? {
            pixelHeight: 1706,
            pixelWidth: 2880,
            src: `../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-1cfa3d.png`,
            srcSet: `../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-2f1155.png 512w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-4ef9a6.png 1024w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo.png 2048w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-1cfa3d.png 2880w`,
          },
      })),
      (Sd = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Cd = le(
        y(function (e, t) {
          let n = f(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = Se(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              xuuioeB2c: m,
              XPXGmN2mX: h,
              onXPXGmN2mXChange: g,
              hnZqFUtG7: _,
              onhnZqFUtG7Change: v,
              ZcQpGHEXI: y,
              lfXGnbMKX: b,
              onlfXGnbMKXChange: S,
              uZCncdtXN: C,
              a3_ExS_yQ: w,
              Ze9m54dHv: T,
              QPa8XpBfr: E,
              onQPa8XpBfrChange: D,
              GybYvoIZU: ee,
              onGybYvoIZUChange: te,
              jJeab9s4O: k,
              nFATg8D4n: ne,
              onnFATg8D4nChange: j,
              H3h07nN8a: M,
              lO_lyf7sh: N,
              V_B0fzF7z: P,
              eQu9BYIvP: F,
              oneQu9BYIvPChange: I,
              GvTlIwl93: re,
              onGvTlIwl93Change: ie,
              CDBa0GSHJ: R,
              qhUXtpoHK: ae,
              onqhUXtpoHKChange: z,
              lKyB0l0Cd: B,
              R1FPEVQrb: oe,
              JnLgjLoDq: se,
              onJnLgjLoDqChange: ce,
              sTcZr36Dl: le,
              onsTcZr36DlChange: ue,
              hnHYfBqAR: H,
              onhnHYfBqARChange: de,
              ...fe
            } = xd(e),
            [U, pe] = bd(h, g),
            [W, me] = bd(_, v),
            [he, ge] = bd(b, S),
            [G, K] = bd(E, D),
            [ve, ye] = bd(ee, te),
            [be, xe] = bd(ne, j),
            [Ce, q] = bd(F, I),
            [we, J] = bd(re, ie),
            [Te, Ee] = bd(ae, z),
            [De, Oe] = bd(se, ce),
            [Ae, je] = bd(le, ue),
            [Me, Ne] = bd(H, de),
            {
              baseVariant: Pe,
              classNames: Fe,
              clearLoadingGesture: X,
              gestureHandlers: Ie,
              gestureVariant: Z,
              isLoading: Le,
              setGestureState: Re,
              setVariant: ze,
              variants: Be,
            } = _e({
              cycleOrder: dd,
              defaultVariant: `lEAmQAdGj`,
              ref: r,
              variant: p,
              variantClassNames: pd,
            }),
            Ve = Sd(e, Be),
            He = V(fd);
          return x(A, {
            id: d ?? a,
            children: x(yd, {
              animate: Be,
              initial: !1,
              children: x(_d, {
                value: md,
                children: x(O.div, {
                  ...fe,
                  ...Ie,
                  className: V(He, `framer-jabg2e`, u, Fe),
                  "data-framer-name": `Desktop`,
                  layoutDependency: Ve,
                  layoutId: `lEAmQAdGj`,
                  ref: r,
                  style: { ...l },
                  ...ld(
                    {
                      gZYPvTMgr: { "data-framer-name": `Tablet` },
                      ynbrHx8dI: { "data-framer-name": `Phone` },
                    },
                    Pe,
                    Z
                  ),
                  children: x(Y, {
                    height: ((c?.height || 800) - 0) * 1,
                    width: `max(${c?.width || `100vw`}, 1px)`,
                    y:
                      (c?.y || 0) +
                      (0 + ((c?.height || 800) - 0 - ((c?.height || 800) - 0) * 1) / 2),
                    ...ld(
                      {
                        gZYPvTMgr: {
                          height: ((c?.height || 693) - 0) * 1,
                          y:
                            (c?.y || 0) +
                            (0 + ((c?.height || 693) - 0 - ((c?.height || 693) - 0) * 1) / 2),
                        },
                        ynbrHx8dI: {
                          height: ((c?.height || 611) - 0) * 1,
                          y:
                            (c?.y || 0) +
                            (0 + ((c?.height || 611) - 0 - ((c?.height || 611) - 0) * 1) / 2),
                        },
                      },
                      Pe,
                      Z
                    ),
                    children: x(L, {
                      className: `framer-c63ds6-container`,
                      layoutDependency: Ve,
                      layoutId: `Dxf2rsPrI-container`,
                      nodeId: `Dxf2rsPrI`,
                      rendersWithMotion: !0,
                      scopeId: `ZNgvIYjfd`,
                      children: x(sd, {
                        A3Dl4boiR: ve,
                        apIf5zMGI: hd(B),
                        bCmLneJz3: hd(T),
                        C7DlMsO_6: he,
                        dc554E11x: hd(m),
                        Elf5Jy9gM: U,
                        FkRZcrZuB: N,
                        height: `100%`,
                        id: `Dxf2rsPrI`,
                        Jnr6mW_B3: Te,
                        Jprtyoo92: w,
                        l5l_ga81p: hd(C),
                        layoutId: `Dxf2rsPrI`,
                        LrELjlxoD: `80px 50px 40px 50px`,
                        n_kThdQTn: oe,
                        n9zRCp4pE: we,
                        onA3Dl4boiRChange: ye,
                        onC7DlMsO_6Change: ge,
                        onElf5Jy9gMChange: pe,
                        onJnr6mW_B3Change: Ee,
                        onn9zRCp4pEChange: J,
                        onpBwr6ODpxChange: K,
                        onQV7QIDyFSChange: xe,
                        onRd9TXJPFZChange: me,
                        ons3nF_13feChange: q,
                        ontmTuJACr9Change: Oe,
                        onv6KxDGjcOChange: je,
                        onwXLmrU_2OChange: Ne,
                        pBwr6ODpx: G,
                        qiI4hMUq4: !1,
                        qJ7VJoMtm: R,
                        QV7QIDyFS: be,
                        Rd9TXJPFZ: W,
                        s3nF_13fe: Ce,
                        spFp5yGzf: `B3AoP5Hcp`,
                        style: { height: `100%`, width: `100%` },
                        tAyUHxe1K: hd(P),
                        tmTuJACr9: De,
                        V1sdKvS6G: `pP4Cyx0VV`,
                        v6KxDGjcO: Ae,
                        variant: gd(`y4oWwr01k`),
                        width: `100%`,
                        wXLmrU_2O: Me,
                        yg1kmG27R: k,
                        yTMJeUELa: hd(M),
                        ZzT0Sz0ar: y,
                        ...ld(
                          {
                            gZYPvTMgr: { LrELjlxoD: `60px 30px 40px 30px`, spFp5yGzf: `umW7CIBwu` },
                            ynbrHx8dI: {
                              LrELjlxoD: `60px 20px 24px 20px`,
                              qiI4hMUq4: !0,
                              spFp5yGzf: `DzUUnbO1u`,
                              V1sdKvS6G: `jhxgacAdT`,
                            },
                          },
                          Pe,
                          Z
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-l1swp.framer-1wbses8, .framer-l1swp .framer-1wbses8 { display: block; }`,
          `.framer-l1swp.framer-jabg2e { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-l1swp .framer-c63ds6-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-l1swp.framer-v-146d4rt.framer-jabg2e { height: 693px; width: 810px; }`,
          `.framer-l1swp.framer-v-hm2mwk.framer-jabg2e { height: 611px; width: 390px; }`,
        ],
        `framer-l1swp`
      )),
      (Cd.displayName = `Hero Slider`),
      (Cd.defaultProps = { height: 800, width: 1200 }),
      W(Cd, {
        variant: {
          options: [`lEAmQAdGj`, `gZYPvTMgr`, `ynbrHx8dI`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: X.Enum,
        },
        xuuioeB2c: {
          __defaultAssetReference: `data:framer/asset-reference,RdZtXOQVg6jVWKomi937lN2LFc.png?originalFilename=image+91.png&width=2880&height=1706`,
          title: `Slider Image 1`,
          type: X.ResponsiveImage,
        },
        XPXGmN2mX: {
          defaultValue: `Style in Motion`,
          displayTextArea: !1,
          title: `Headline 1`,
          type: X.String,
        },
        onXPXGmN2mXChange: { changes: `XPXGmN2mX`, type: X.ChangeHandler },
        hnZqFUtG7: {
          defaultValue: `New-season pieces made for everyday confidence.`,
          displayTextArea: !0,
          title: `Description 1`,
          type: X.String,
        },
        onhnZqFUtG7Change: { changes: `hnZqFUtG7`, type: X.ChangeHandler },
        ZcQpGHEXI: { description: ``, title: `Slide Link 1`, type: X.Link },
        lfXGnbMKX: {
          defaultValue: `Popular T-shirts`,
          displayTextArea: !1,
          title: `Card Title 1`,
          type: X.String,
        },
        onlfXGnbMKXChange: { changes: `lfXGnbMKX`, type: X.ChangeHandler },
        uZCncdtXN: {
          __defaultAssetReference: `data:framer/asset-reference,upIFky4DATIajqQ0EjWgzyb1Bo.png?originalFilename=model+-+graphic+tee+in+Black.png&width=1000&height=1000`,
          title: `Card Image 1`,
          type: X.ResponsiveImage,
        },
        a3_ExS_yQ: { description: `______________________`, title: `Card Link 1`, type: X.Link },
        Ze9m54dHv: {
          __defaultAssetReference: `data:framer/asset-reference,NmyRMrP7J9zTBW31kc4ezVJKmo.png?originalFilename=Frame+6287.png&width=2880&height=1706`,
          title: `Slider Image 2`,
          type: X.ResponsiveImage,
        },
        QPa8XpBfr: {
          defaultValue: `Made to Stand Out`,
          displayTextArea: !1,
          title: `Headline 2`,
          type: X.String,
        },
        onQPa8XpBfrChange: { changes: `QPa8XpBfr`, type: X.ChangeHandler },
        GybYvoIZU: {
          defaultValue: `Clean silhouettes, soft textures, standout ease.`,
          displayTextArea: !0,
          title: `Description 3`,
          type: X.String,
        },
        onGybYvoIZUChange: { changes: `GybYvoIZU`, type: X.ChangeHandler },
        jJeab9s4O: { description: ``, title: `Slide Link 2`, type: X.Link },
        nFATg8D4n: {
          defaultValue: `Popular Jackets`,
          displayTextArea: !1,
          title: `Card Title 2`,
          type: X.String,
        },
        onnFATg8D4nChange: { changes: `nFATg8D4n`, type: X.ChangeHandler },
        H3h07nN8a: {
          __defaultAssetReference: `data:framer/asset-reference,KHUyQjOSP0zzc2gtUpVsAfutmfo.png?originalFilename=model+-+zipper+jacket.png&width=1000&height=1000`,
          title: `Card Image 2`,
          type: X.ResponsiveImage,
        },
        lO_lyf7sh: { description: `______________________`, title: `Card Link 2`, type: X.Link },
        V_B0fzF7z: {
          __defaultAssetReference: `data:framer/asset-reference,Iuek68XvjWSJkNCvJ0polkyDVD0.png?originalFilename=Frame+6287+%281%29.png&width=2880&height=1706`,
          title: `Slider Image 3`,
          type: X.ResponsiveImage,
        },
        eQu9BYIvP: {
          defaultValue: `The Style Reset`,
          displayTextArea: !1,
          title: `Headline 3`,
          type: X.String,
        },
        oneQu9BYIvPChange: { changes: `eQu9BYIvP`, type: X.ChangeHandler },
        GvTlIwl93: {
          defaultValue: `Modern layers made for days that keep moving.`,
          displayTextArea: !0,
          title: `Description 2`,
          type: X.String,
        },
        onGvTlIwl93Change: { changes: `GvTlIwl93`, type: X.ChangeHandler },
        CDBa0GSHJ: { description: ``, title: `Slide Link 3`, type: X.Link },
        qhUXtpoHK: {
          defaultValue: `Popular Pants`,
          displayTextArea: !1,
          title: `Card Title 3`,
          type: X.String,
        },
        onqhUXtpoHKChange: { changes: `qhUXtpoHK`, type: X.ChangeHandler },
        lKyB0l0Cd: {
          __defaultAssetReference: `data:framer/asset-reference,C2bqfqZ5VPz7hGFauSgvdxwhn4.png?originalFilename=38.png&width=1000&height=1000`,
          title: `Card Image 3`,
          type: X.ResponsiveImage,
        },
        R1FPEVQrb: { description: `______________________`, title: `Card Link 3`, type: X.Link },
        JnLgjLoDq: {
          defaultValue: `Shop Now`,
          displayTextArea: !1,
          title: `Skider Button Text`,
          type: X.String,
        },
        onJnLgjLoDqChange: { changes: `JnLgjLoDq`, type: X.ChangeHandler },
        sTcZr36Dl: {
          defaultValue: `Shop now`,
          displayTextArea: !1,
          title: `Card Button Text`,
          type: X.String,
        },
        onsTcZr36DlChange: { changes: `sTcZr36Dl`, type: X.ChangeHandler },
        hnHYfBqAR: { defaultValue: !1, title: `New Tab`, type: X.Boolean },
        onhnHYfBqARChange: { changes: `hnHYfBqAR`, type: X.ChangeHandler },
      }),
      U(Cd, [{ explicitInter: !0, fonts: [] }, ...ud], { supportsExplicitInterCodegen: !0 }),
      (Cd.loader = { load: (e, t) => (t.locale, Promise.allSettled([K(sd, {}, t)])) }));
  }),
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
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
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df;
e(() => {
  (h(),
    G(),
    I(),
    r(),
    b(),
    ft(),
    bt(),
    ut(),
    gt(),
    pt(),
    Lr(),
    _o(),
    St(),
    Is(),
    xt(),
    hc(),
    Wc(),
    Ol(),
    Et(),
    st(),
    wd(),
    kt(),
    Je(),
    At(),
    Ye(),
    rt(),
    Pt(),
    Rt(),
    (Td = q(Cd)),
    (Ed = fe(he)),
    (Dd = q(Ir)),
    (Od = q(Ct)),
    (kd = q(Uc)),
    (Ad = fe(we)),
    (jd = q(ct)),
    (Md = ve(we)),
    (Nd = q(Q)),
    (Pd = fe(O.div)),
    (Fd = q(mc)),
    (Id = q(go)),
    (Ld = Ce(go)),
    (Rd = q(Fs)),
    (zd = q(_t)),
    (Bd = q(Dl)),
    (Vd = q(Dt)),
    (Hd = {
      aHF3NF12v: `(min-width: 810px) and (max-width: 1199.98px)`,
      t5gfNlrNr: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (Ud = () => typeof document < `u`),
    (Wd = []),
    (Gd = `framer-zaSll`),
    (Kd = {
      aHF3NF12v: `framer-v-9j16wa`,
      t5gfNlrNr: `framer-v-ubzvz`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (qd = (e, t, n) => (e && t ? `position` : n)),
    (Jd = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Yd = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Xd = {
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
    (Zd = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (Qd = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.34, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    ($d = { delay: 0, duration: 0.35, ease: [0.45, 0, 0.55, 1], type: `tween` }),
    (ef = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: $d,
      x: 0,
      y: 30,
    }),
    (tf = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: $d,
      x: 0,
      y: 0,
    }),
    (nf = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 30,
    }),
    (rf = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (af = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = ge({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (of = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (sf = { delay: 0, duration: 1.2, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (cf = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 1.2, duration: 0.4, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (lf = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (uf = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (df = () => ({
      from: { alias: `a7UCWZLXO`, data: qe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 0 },
      orderBy: [
        { collection: `a7UCWZLXO`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
      ],
      select: [
        { collection: `a7UCWZLXO`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `StWb4Z9jo`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `K6GheEMTC`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `sGLDCFVI5`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `u8osWsFhh`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `a7UCWZLXO`, name: `id`, type: `Identifier` },
      ],
      where: {
        arguments: [
          { collection: `a7UCWZLXO`, name: `sb5C2g1qc`, type: `Identifier` },
          { type: `LiteralValue`, value: `Seasonal Drop` },
        ],
        functionName: `CONTAINS`,
        type: `FunctionCall`,
      },
    })),
    (ff = ({ query: e, pageSize: t, children: n }) => n(Ne(e))),
    (pf = () => ({
      from: { alias: `AadLeqr3d`, data: qe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `AadLeqr3d`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
      ],
      select: [
        { collection: `AadLeqr3d`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `StWb4Z9jo`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `K6GheEMTC`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `sGLDCFVI5`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `u8osWsFhh`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `AadLeqr3d`, name: `id`, type: `Identifier` },
      ],
      where: {
        arguments: [
          { collection: `AadLeqr3d`, name: `sb5C2g1qc`, type: `Identifier` },
          { type: `LiteralValue`, value: `Seasonal Drop` },
        ],
        functionName: `CONTAINS`,
        type: `FunctionCall`,
      },
    })),
    (mf = () => ({
      from: { alias: `PfyiPU3Hi`, data: qe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 2 },
      orderBy: [
        { collection: `PfyiPU3Hi`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
      ],
      select: [
        { collection: `PfyiPU3Hi`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `StWb4Z9jo`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `K6GheEMTC`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `sGLDCFVI5`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `u8osWsFhh`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `PfyiPU3Hi`, name: `id`, type: `Identifier` },
      ],
      where: {
        arguments: [
          { collection: `PfyiPU3Hi`, name: `sb5C2g1qc`, type: `Identifier` },
          { type: `LiteralValue`, value: `Seasonal Drop` },
        ],
        functionName: `CONTAINS`,
        type: `FunctionCall`,
      },
    })),
    (hf = () => ({
      from: { alias: `kiwZAyypL`, data: qe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 3 },
      orderBy: [
        { collection: `kiwZAyypL`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
      ],
      select: [
        { collection: `kiwZAyypL`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `StWb4Z9jo`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `K6GheEMTC`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `sGLDCFVI5`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `u8osWsFhh`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `kiwZAyypL`, name: `id`, type: `Identifier` },
      ],
      where: {
        arguments: [
          { collection: `kiwZAyypL`, name: `sb5C2g1qc`, type: `Identifier` },
          { type: `LiteralValue`, value: `Seasonal Drop` },
        ],
        functionName: `CONTAINS`,
        type: `FunctionCall`,
      },
    })),
    (gf = () => ({
      from: { alias: `pg_9nWD1C`, data: Ot, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `pg_9nWD1C`, direction: `desc`, name: `tbTDWaq4j`, type: `Identifier` },
      ],
      select: [
        { collection: `pg_9nWD1C`, name: `YI4pSm49t`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `kEbrIvftN`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `sFrlzjY0j`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `tbTDWaq4j`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `id`, type: `Identifier` },
      ],
    })),
    (_f = () => ({
      from: { alias: `pg_9nWD1C`, data: Ot, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [
        { collection: `pg_9nWD1C`, direction: `desc`, name: `tbTDWaq4j`, type: `Identifier` },
      ],
      select: [
        { collection: `pg_9nWD1C`, name: `YI4pSm49t`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `kEbrIvftN`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `sFrlzjY0j`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `tbTDWaq4j`, type: `Identifier` },
        { collection: `pg_9nWD1C`, name: `id`, type: `Identifier` },
      ],
    })),
    (vf = { delay: 0.2, duration: 1.2, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (yf = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (bf = () => ({
      from: { alias: `njSKayDRI`, data: Ot, type: `Collection` },
      limit: { type: `LiteralValue`, value: 2 },
      offset: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `njSKayDRI`, direction: `desc`, name: `tbTDWaq4j`, type: `Identifier` },
      ],
      select: [
        { collection: `njSKayDRI`, name: `YI4pSm49t`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `kEbrIvftN`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `sFrlzjY0j`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `tbTDWaq4j`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `id`, type: `Identifier` },
      ],
    })),
    (xf = () => ({
      from: { alias: `njSKayDRI`, data: Ot, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      offset: { type: `LiteralValue`, value: 0 },
      orderBy: [
        { collection: `njSKayDRI`, direction: `desc`, name: `tbTDWaq4j`, type: `Identifier` },
      ],
      select: [
        { collection: `njSKayDRI`, name: `YI4pSm49t`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `kEbrIvftN`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `sFrlzjY0j`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `tbTDWaq4j`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `id`, type: `Identifier` },
      ],
    })),
    (Sf = () => ({
      from: { alias: `njSKayDRI`, data: Ot, type: `Collection` },
      limit: { type: `LiteralValue`, value: 2 },
      offset: { type: `LiteralValue`, value: 0 },
      orderBy: [
        { collection: `njSKayDRI`, direction: `desc`, name: `tbTDWaq4j`, type: `Identifier` },
      ],
      select: [
        { collection: `njSKayDRI`, name: `YI4pSm49t`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `kEbrIvftN`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `sFrlzjY0j`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `tbTDWaq4j`, type: `Identifier` },
        { collection: `njSKayDRI`, name: `id`, type: `Identifier` },
      ],
    })),
    (Cf = { Desktop: `WQLkyLRf1`, Phone: `t5gfNlrNr`, Tablet: `aHF3NF12v` }),
    (wf = ({ value: e }) =>
      Ve()
        ? null
        : x(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Tf = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Cf[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (Ef = le(
      y(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = i(),
          { activeLocale: o, setLocale: l } = Se(),
          d = ke(),
          { style: p, className: h, layoutId: g, variant: _, ...y } = Tf(e);
        ce(u(() => zt({}, o), [o]));
        let [b, C] = He(_, Hd, !1),
          w = V(Gd, Lt, Nt, ot, Qe),
          T = c(De)?.isLayoutTemplate,
          E = !!c(N)?.transition?.layout,
          D = qd(T, E);
        je();
        let ee = R(`XM4cuUJZl`),
          te = me(),
          k = R(`znjIfjzQo`),
          ne = f(null),
          { activeVariantCallback: j, delay: P } = Ie(void 0),
          F = ({ overlay: e }) =>
            j(async (...t) => {
              e.toggle();
            }),
          I = ({ overlay: e }) =>
            j(async (...t) => {
              e.hide();
            }),
          re = () => !Ud() || b !== `aHF3NF12v`,
          ie = () => !Ud() || b !== `t5gfNlrNr`;
        return (
          Be({}),
          x(De.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Cf,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Kd,
            },
            children: S(A, {
              id: g ?? a,
              children: [
                x(wf, { value: `html body { background: rgb(0, 0, 0); }` }),
                x(O.div, {
                  ...y,
                  className: V(w, `framer-72rtr7`, h),
                  ref: r,
                  style: { ...p },
                  children: S(O.main, {
                    className: `framer-9q4724`,
                    "data-framer-name": `Main`,
                    layout: D,
                    children: [
                      S(`section`, {
                        className: `framer-1lgpnbu`,
                        "data-framer-name": `Section - Hero`,
                        children: [
                          x(B, {
                            links: [
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `t-shirt` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `F2Vsv3aXB`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `jacket` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `ZybYla_ol`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `pants` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `jsCweFWpJ`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `t-shirt` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `F2Vsv3aXB`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `jacket` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `ZybYla_ol`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `pants` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `jsCweFWpJ`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `t-shirt` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `F2Vsv3aXB`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `jacket` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `ZybYla_ol`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `all` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `ybh9NRrP1`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { r1NU_IZRR: `pants` },
                                  unresolvedPathSlugs: {
                                    r1NU_IZRR: {
                                      collectionId: `r8bgkClkr`,
                                      collectionItemId: `jsCweFWpJ`,
                                    },
                                  },
                                  webPageId: `NntD4buY8`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              x(z, {
                                breakpoint: b,
                                overrides: {
                                  aHF3NF12v: { height: 700 },
                                  t5gfNlrNr: { height: 550 },
                                },
                                children: x(Y, {
                                  height: 900,
                                  width: d?.width || `100vw`,
                                  y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0,
                                  children: x(we, {
                                    className: `framer-12mz7tl-container`,
                                    nodeId: `KGOrNJ0o3`,
                                    scopeId: `augiA20Il`,
                                    children: x(z, {
                                      breakpoint: b,
                                      overrides: {
                                        aHF3NF12v: {
                                          a3_ExS_yQ: e[7],
                                          CDBa0GSHJ: e[10],
                                          jJeab9s4O: e[8],
                                          lO_lyf7sh: e[9],
                                          R1FPEVQrb: e[11],
                                          variant: Yd(`gZYPvTMgr`),
                                          ZcQpGHEXI: e[6],
                                        },
                                        t5gfNlrNr: {
                                          a3_ExS_yQ: e[13],
                                          CDBa0GSHJ: e[16],
                                          jJeab9s4O: e[14],
                                          lO_lyf7sh: e[15],
                                          R1FPEVQrb: e[17],
                                          variant: Yd(`ynbrHx8dI`),
                                          ZcQpGHEXI: e[12],
                                        },
                                      },
                                      children: x(Cd, {
                                        a3_ExS_yQ: e[1],
                                        CDBa0GSHJ: e[4],
                                        eQu9BYIvP: `The Style Reset`,
                                        GvTlIwl93: `Modern layers made for days that keep moving.`,
                                        GybYvoIZU: `Clean silhouettes, soft textures, standout ease.`,
                                        height: `100%`,
                                        hnHYfBqAR: !1,
                                        hnZqFUtG7: `New-season pieces made for everyday confidence.`,
                                        id: `KGOrNJ0o3`,
                                        jJeab9s4O: e[2],
                                        JnLgjLoDq: `Shop Now`,
                                        layoutId: `KGOrNJ0o3`,
                                        lfXGnbMKX: `Popular T-shirts`,
                                        lO_lyf7sh: e[3],
                                        nFATg8D4n: `Popular Jackets`,
                                        qhUXtpoHK: `Popular Pants`,
                                        QPa8XpBfr: `Made to Stand Out`,
                                        R1FPEVQrb: e[5],
                                        sTcZr36Dl: `Shop now`,
                                        style: { height: `100%`, width: `100%` },
                                        V_B0fzF7z: Jd(
                                          {
                                            pixelHeight: 1706,
                                            pixelWidth: 2880,
                                            positionX: `54.7%`,
                                            positionY: `15.3%`,
                                            src: `https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?width=2880&height=1706`,
                                            srcSet: `https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=512&width=2880&height=1706 512w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=1024&width=2880&height=1706 1024w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?scale-down-to=2048&width=2880&height=1706 2048w,https://framerusercontent.com/images/Iuek68XvjWSJkNCvJ0polkyDVD0.png?width=2880&height=1706 2880w`,
                                          },
                                          ``
                                        ),
                                        variant: Yd(`lEAmQAdGj`),
                                        width: `100%`,
                                        XPXGmN2mX: `Style in Motion`,
                                        ZcQpGHEXI: e[0],
                                        Ze9m54dHv: Jd(
                                          {
                                            pixelHeight: 1706,
                                            pixelWidth: 2880,
                                            positionX: `35.1%`,
                                            positionY: `9.1%`,
                                            src: `../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-1cfa3d.png`,
                                            srcSet: `../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-2f1155.png 512w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-4ef9a6.png 1024w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo.png 2048w,../../assets/images/NmyRMrP7J9zTBW31kc4ezVJKmo-1cfa3d.png 2880w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          x(`div`, {
                            className: `framer-1q2fybr`,
                            "data-framer-name": `Nav Trigger`,
                            id: ee,
                            ref: te(ee),
                          }),
                        ],
                      }),
                      S(`section`, {
                        className: `framer-ok4c8b`,
                        "data-framer-name": `Section - New Arrivals`,
                        id: k,
                        ref: ne,
                        children: [
                          x(Ed, {
                            __framer__animate: { transition: Zd },
                            __framer__animateOnce: !0,
                            __framer__enter: Xd,
                            __framer__exit: Qd,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: x(s, {
                              children: x(`h2`, {
                                className: `framer-styles-preset-1lt80ed`,
                                "data-styles-preset": `OrFaou4jp`,
                                dir: `auto`,
                                children: `New Arrival is here`,
                              }),
                            }),
                            className: `framer-3lyf7k`,
                            "data-framer-name": `New Arrival is here`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          x(af, {
                            blockDocumentScrolling: !1,
                            dismissWithEsc: !0,
                            children: (e) =>
                              x(v, {
                                children: x(z, {
                                  breakpoint: b,
                                  overrides: {
                                    aHF3NF12v: {
                                      height: 513,
                                      width: `calc(min(${d?.width || `100vw`}, 1360px) - 60px)`,
                                      y: (d?.y || 0) + 0 + 0 + 0 + 700 + 76 + 85.6,
                                    },
                                    t5gfNlrNr: {
                                      width: `min(min(${d?.width || `100vw`}, 1360px) - 40px, 450px)`,
                                      y: (d?.y || 0) + 0 + 0 + 0 + 550 + 68 + 87.6,
                                    },
                                  },
                                  children: x(Y, {
                                    height: 531,
                                    width: `calc(min(${d?.width || `100vw`}, 1360px) - 100px)`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 900 + 84 + 85.6,
                                    children: S(we, {
                                      className: `framer-xh8j4l-container`,
                                      id: `xh8j4l`,
                                      nodeId: `o4IHeG__M`,
                                      scopeId: `augiA20Il`,
                                      children: [
                                        x(z, {
                                          breakpoint: b,
                                          overrides: {
                                            aHF3NF12v: {
                                              pe9Qh39n0: 2,
                                              style: { height: `100%`, width: `100%` },
                                            },
                                            t5gfNlrNr: {
                                              pe9Qh39n0: 1,
                                              style: { maxWidth: `100%`, width: `100%` },
                                              variant: Yd(`J17_VlUfl`),
                                            },
                                          },
                                          children: x(Ir, {
                                            height: `100%`,
                                            id: `o4IHeG__M`,
                                            layoutId: `o4IHeG__M`,
                                            pe9Qh39n0: 3,
                                            style: { width: `100%` },
                                            variant: Yd(`i3Yb3laOI`),
                                            wE32AWBje: F({ overlay: e }),
                                            width: `100%`,
                                          }),
                                        }),
                                        x(M, {
                                          children:
                                            e.visible &&
                                            x(v, {
                                              children: m(
                                                x(Oe, {
                                                  triggerId: `xh8j4l`,
                                                  children: S(se, {
                                                    children: [
                                                      x(
                                                        O.div,
                                                        {
                                                          animate: {
                                                            opacity: 1,
                                                            transition: {
                                                              delay: 0,
                                                              duration: 0.34,
                                                              ease: [0.45, 0, 0.55, 1],
                                                              type: `tween`,
                                                            },
                                                          },
                                                          className: V(w, `framer-1hdb4fr`),
                                                          "data-framer-portal-id": `xh8j4l`,
                                                          exit: {
                                                            opacity: 0,
                                                            transition: {
                                                              delay: 0,
                                                              duration: 0.34,
                                                              ease: [0.45, 0, 0.55, 1],
                                                              type: `tween`,
                                                            },
                                                          },
                                                          initial: { opacity: 0 },
                                                          onTap: () => e.hide(),
                                                        },
                                                        `akS_ZDiXo`
                                                      ),
                                                      x(O.div, {
                                                        className: V(w, `framer-tbv4p4`),
                                                        "data-framer-name": `Wrap`,
                                                        "data-framer-portal-id": `xh8j4l`,
                                                        children: x(Y, {
                                                          width: `400px`,
                                                          children: x(we, {
                                                            animate: tf,
                                                            className: `framer-1o3qw1i-container`,
                                                            exit: ef,
                                                            inComponentSlot: !0,
                                                            initial: nf,
                                                            nodeId: `Bwai6zPKC`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `augiA20Il`,
                                                            children: x(Ct, {
                                                              HblJYYmXZ: I({ overlay: e }),
                                                              height: `100%`,
                                                              id: `Bwai6zPKC`,
                                                              layoutId: `Bwai6zPKC`,
                                                              style: { width: `100%` },
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                rf()
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      x(`section`, {
                        className: `framer-1ufi4d5`,
                        "data-framer-name": `Section - Ticker`,
                        children: x(z, {
                          breakpoint: b,
                          overrides: {
                            aHF3NF12v: { y: (d?.y || 0) + 0 + 0 + 0 + 1442.6 + 24 + 0 },
                            t5gfNlrNr: { y: (d?.y || 0) + 0 + 0 + 0 + 1304.6 + 16 + 0 },
                          },
                          children: x(Y, {
                            height: 80,
                            width: d?.width || `100vw`,
                            y: (d?.y || 0) + 0 + 0 + 0 + 1684.6 + 24 + 0,
                            children: x(Ad, {
                              __framer__animate: { transition: Zd },
                              __framer__animateOnce: !0,
                              __framer__enter: Xd,
                              __framer__exit: Qd,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-19klg2p-container`,
                              nodeId: `sykNhRH5N`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              children: x(z, {
                                breakpoint: b,
                                overrides: { t5gfNlrNr: { Ct7_sO9_1: !0, O6NLcQkZE: 30 } },
                                children: x(Uc, {
                                  Ct7_sO9_1: !1,
                                  height: `100%`,
                                  id: `sykNhRH5N`,
                                  layoutId: `sykNhRH5N`,
                                  O6NLcQkZE: 48,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      x(`section`, {
                        className: `framer-19bt8fq`,
                        "data-framer-name": `Section - Collection`,
                        children: S(Pd, {
                          __framer__animate: { transition: sf },
                          __framer__animateOnce: !0,
                          __framer__enter: of,
                          __framer__exit: Qd,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1odln5a`,
                          "data-framer-name": `Wrap - Height`,
                          children: [
                            S(`div`, {
                              className: `framer-1mtxgfz`,
                              "data-framer-name": `Left`,
                              children: [
                                S(`div`, {
                                  className: `framer-1drmue2`,
                                  "data-framer-name": `Wrap`,
                                  children: [
                                    x(he, {
                                      __fromCanvasComponent: !0,
                                      children: x(s, {
                                        children: x(`h2`, {
                                          className: `framer-styles-preset-vuspyx`,
                                          "data-styles-preset": `ANhE2fRBl`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                          },
                                          children: `Seasonal Drop`,
                                        }),
                                      }),
                                      className: `framer-1ib91g6`,
                                      "data-framer-name": `Seasonal Drop`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    x(B, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: { r1NU_IZRR: `all` },
                                            unresolvedPathSlugs: {
                                              r1NU_IZRR: {
                                                collectionId: `r8bgkClkr`,
                                                collectionItemId: `etZVUn8cA`,
                                              },
                                            },
                                            webPageId: `NntD4buY8`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { r1NU_IZRR: `all` },
                                            unresolvedPathSlugs: {
                                              r1NU_IZRR: {
                                                collectionId: `r8bgkClkr`,
                                                collectionItemId: `etZVUn8cA`,
                                              },
                                            },
                                            webPageId: `NntD4buY8`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { r1NU_IZRR: `all` },
                                            unresolvedPathSlugs: {
                                              r1NU_IZRR: {
                                                collectionId: `r8bgkClkr`,
                                                collectionItemId: `etZVUn8cA`,
                                              },
                                            },
                                            webPageId: `NntD4buY8`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        x(z, {
                                          breakpoint: b,
                                          overrides: {
                                            aHF3NF12v: {
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1570.6 +
                                                76 +
                                                0 +
                                                24 +
                                                0 +
                                                0 +
                                                92,
                                            },
                                            t5gfNlrNr: {
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1416.6 +
                                                68 +
                                                0 +
                                                0 +
                                                24 +
                                                0 +
                                                0 +
                                                92,
                                            },
                                          },
                                          children: x(Y, {
                                            height: 39,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1812.6 +
                                              84 +
                                              0 +
                                              24 +
                                              0 +
                                              0 +
                                              92,
                                            children: x(Md, {
                                              animate: cf,
                                              className: `framer-1p57lqa-container`,
                                              "data-framer-appear-id": `1p57lqa`,
                                              initial: lf,
                                              nodeId: `xg8HoaUzT`,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: x(z, {
                                                breakpoint: b,
                                                overrides: {
                                                  aHF3NF12v: { zTMMog7f6: e[1] },
                                                  t5gfNlrNr: { zTMMog7f6: e[2] },
                                                },
                                                children: x(ct, {
                                                  cM24uPpbD: !1,
                                                  H6dPn3zGc: 16,
                                                  height: `100%`,
                                                  id: `xg8HoaUzT`,
                                                  iXZSHzCME: `10px 18px 10px 18px`,
                                                  layoutId: `xg8HoaUzT`,
                                                  variant: Yd(`U6uNneSRp`),
                                                  width: `100%`,
                                                  XhybYdcoB: `Shop Now`,
                                                  zTMMog7f6: e[0],
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                                x(z, {
                                  breakpoint: b,
                                  overrides: {
                                    aHF3NF12v: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1756,
                                        intrinsicWidth: 1440,
                                        loading: H((d?.y || 0) + 0 + 0 + 0 + 1570.6 + 76 + 0 + 0),
                                        pixelHeight: 1756,
                                        pixelWidth: 1440,
                                        sizes: `calc(max(min(${d?.width || `100vw`}, 1360px), 1px) * 0.45)`,
                                        src: `../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4-aefcd7.png`,
                                        srcSet: `../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4.png 839w,../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4-aefcd7.png 1440w`,
                                      },
                                    },
                                    t5gfNlrNr: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1756,
                                        intrinsicWidth: 1440,
                                        loading: H(
                                          (d?.y || 0) + 0 + 0 + 0 + 1416.6 + 68 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 1756,
                                        pixelWidth: 1440,
                                        positionX: `center`,
                                        positionY: `top`,
                                        sizes: `max(min(${d?.width || `100vw`}, 450px), 1px)`,
                                        src: `../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4-aefcd7.png`,
                                        srcSet: `../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4.png 839w,../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4-aefcd7.png 1440w`,
                                      },
                                    },
                                  },
                                  children: x(Pe, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1756,
                                      intrinsicWidth: 1440,
                                      loading: H((d?.y || 0) + 0 + 0 + 0 + 1812.6 + 84 + 0 + 0),
                                      pixelHeight: 1756,
                                      pixelWidth: 1440,
                                      sizes: `calc(max(min(${d?.width || `100vw`}, 1360px), 1px) * 0.45)`,
                                      src: `../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4-aefcd7.png`,
                                      srcSet: `../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4.png 839w,../../assets/images/ByGfDK8Bl6vq3Vkc5uagKWlM4-aefcd7.png 1440w`,
                                    },
                                    className: `framer-yl6i45`,
                                    "data-framer-name": `Bg`,
                                  }),
                                }),
                              ],
                            }),
                            S(`div`, {
                              className: `framer-1tzetpk`,
                              "data-framer-name": `Right`,
                              children: [
                                x(`div`, {
                                  className: `framer-1j9tlzo`,
                                  children: x(Fe, {
                                    children: x(ff, {
                                      query: df(),
                                      children: (e, t, n) =>
                                        x(v, {
                                          children: e?.map(
                                            (
                                              {
                                                EdlK9s4od: e,
                                                eVfKYnlqn: t,
                                                id: n,
                                                Jry1OPs1q: r,
                                                JZfMFKc2o: i,
                                                K6GheEMTC: a,
                                                k8owwKEx3: o,
                                                l2PesJvCE: s,
                                                sGLDCFVI5: c,
                                                Sn3Ji2zLH: l,
                                                StWb4Z9jo: u,
                                                u8osWsFhh: f,
                                                UxQ8VtfSI: p,
                                                vJoj3qvid: h,
                                              },
                                              g
                                            ) => (
                                              (h ??= ``),
                                              (l ??= ``),
                                              (p ??= ``),
                                              (s ??= ``),
                                              (e ??= ``),
                                              (o ??= ``),
                                              (i ??= ``),
                                              x(
                                                A,
                                                {
                                                  id: `a7UCWZLXO-${n}`,
                                                  children: x(ye.Provider, {
                                                    value: { JZfMFKc2o: i },
                                                    children: x(af, {
                                                      blockDocumentScrolling: !1,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        x(v, {
                                                          children: x(B, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (g) =>
                                                              x(z, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  aHF3NF12v: {
                                                                    height: 300,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1570.6 +
                                                                      76 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  t5gfNlrNr: {
                                                                    height: 281.5,
                                                                    width: `max(max(min(${d?.width || `100vw`}, 450px), 1px) / 2, 1px)`,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1416.6 +
                                                                      68 +
                                                                      0 +
                                                                      364 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: x(Y, {
                                                                  height: 476,
                                                                  width: `max(max(min(${d?.width || `100vw`}, 1360px), 1px) / 3.6364, 1px)`,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1812.6 +
                                                                    84 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                  children: S(we, {
                                                                    className: `framer-gwlgaf-container`,
                                                                    id: `${i}-gwlgaf`,
                                                                    nodeId: `cdrph2Rxo`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      x(z, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          aHF3NF12v: {
                                                                            MGgAvDoA0: g[1],
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                          t5gfNlrNr: {
                                                                            MGgAvDoA0: g[2],
                                                                            SKBNP2vvn: !0,
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                        },
                                                                        children: x(Q, {
                                                                          CtxCtZRbF: F({
                                                                            overlay: n,
                                                                          }),
                                                                          FgMmIZmJw: ``,
                                                                          grTamTNk1: uf(c),
                                                                          height: `100%`,
                                                                          hFy2PLFBG: l,
                                                                          HwypVSMEi: !1,
                                                                          id: `cdrph2Rxo`,
                                                                          II0fWsmjM: `0px`,
                                                                          layoutId: `cdrph2Rxo`,
                                                                          MGgAvDoA0: g[0],
                                                                          O9ZyioqcS: uf(t),
                                                                          OKvEEQQFQ: !1,
                                                                          q1Wa9MpBb: uf(f),
                                                                          Qb7mSHgLh: o,
                                                                          QjM5BTCWQ: !0,
                                                                          SKBNP2vvn: !1,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          TCGQti0b7: p,
                                                                          tJ0RQfmJy: e,
                                                                          TWjfUBTmo: uf(u),
                                                                          ub4buTzaB: uf(r),
                                                                          variant: Yd(`anAebR9ik`),
                                                                          width: `100%`,
                                                                          wsSEriDkC: s,
                                                                          xYhX6dOGf: {
                                                                            borderBottomWidth: 1,
                                                                            borderColor: `rgb(206, 206, 206)`,
                                                                            borderLeftWidth: 1,
                                                                            borderRightWidth: 1,
                                                                            borderStyle: `solid`,
                                                                            borderTopWidth: 1,
                                                                          },
                                                                          YdL5oV0XS: uf(a),
                                                                          Zg3vnZECo: h,
                                                                        }),
                                                                      }),
                                                                      x(M, {
                                                                        children:
                                                                          n.visible &&
                                                                          x(v, {
                                                                            children: m(
                                                                              x(Oe, {
                                                                                triggerId: `${i}-gwlgaf`,
                                                                                children: S(se, {
                                                                                  children: [
                                                                                    x(
                                                                                      O.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          V(
                                                                                            w,
                                                                                            `framer-1d9yq40`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${i}-gwlgaf`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          n.hide(),
                                                                                      },
                                                                                      `P4sS6a9zJ`
                                                                                    ),
                                                                                    x(O.div, {
                                                                                      className: V(
                                                                                        w,
                                                                                        `framer-k0ncsv`
                                                                                      ),
                                                                                      "data-framer-name": `Wrap`,
                                                                                      "data-framer-portal-id": `${i}-gwlgaf`,
                                                                                      children: x(
                                                                                        Y,
                                                                                        {
                                                                                          width: `400px`,
                                                                                          children:
                                                                                            x(we, {
                                                                                              animate:
                                                                                                tf,
                                                                                              className: `framer-1v6br0w-container`,
                                                                                              exit: ef,
                                                                                              inComponentSlot:
                                                                                                !0,
                                                                                              initial:
                                                                                                nf,
                                                                                              nodeId: `tbnchQ1wo`,
                                                                                              rendersWithMotion:
                                                                                                !0,
                                                                                              scopeId: `augiA20Il`,
                                                                                              children:
                                                                                                x(
                                                                                                  Ct,
                                                                                                  {
                                                                                                    HblJYYmXZ:
                                                                                                      I(
                                                                                                        {
                                                                                                          overlay:
                                                                                                            n,
                                                                                                        }
                                                                                                      ),
                                                                                                    height: `100%`,
                                                                                                    id: `tbnchQ1wo`,
                                                                                                    layoutId: `tbnchQ1wo`,
                                                                                                    style:
                                                                                                      {
                                                                                                        width: `100%`,
                                                                                                      },
                                                                                                    width: `100%`,
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  ],
                                                                                }),
                                                                              }),
                                                                              rf()
                                                                            ),
                                                                          }),
                                                                      }),
                                                                    ],
                                                                  }),
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
                                x(`div`, {
                                  className: `framer-tq3u6c`,
                                  children: x(Fe, {
                                    children: x(ff, {
                                      query: pf(),
                                      children: (e, t, n) =>
                                        x(v, {
                                          children: e?.map(
                                            (
                                              {
                                                EdlK9s4od: e,
                                                eVfKYnlqn: t,
                                                id: n,
                                                Jry1OPs1q: r,
                                                JZfMFKc2o: i,
                                                K6GheEMTC: a,
                                                k8owwKEx3: o,
                                                l2PesJvCE: s,
                                                sGLDCFVI5: c,
                                                Sn3Ji2zLH: l,
                                                StWb4Z9jo: u,
                                                u8osWsFhh: f,
                                                UxQ8VtfSI: p,
                                                vJoj3qvid: h,
                                              },
                                              g
                                            ) => (
                                              (h ??= ``),
                                              (l ??= ``),
                                              (p ??= ``),
                                              (s ??= ``),
                                              (e ??= ``),
                                              (o ??= ``),
                                              (i ??= ``),
                                              x(
                                                A,
                                                {
                                                  id: `AadLeqr3d-${n}`,
                                                  children: x(ye.Provider, {
                                                    value: { JZfMFKc2o: i },
                                                    children: x(af, {
                                                      blockDocumentScrolling: !1,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        x(v, {
                                                          children: x(B, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (g) =>
                                                              x(z, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  aHF3NF12v: {
                                                                    height: 300,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1570.6 +
                                                                      76 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  t5gfNlrNr: {
                                                                    height: 281.5,
                                                                    width: `max(max(min(${d?.width || `100vw`}, 450px), 1px) / 2, 1px)`,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1416.6 +
                                                                      68 +
                                                                      0 +
                                                                      364 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: x(Y, {
                                                                  height: 476,
                                                                  width: `max(max(min(${d?.width || `100vw`}, 1360px), 1px) / 3.6364, 1px)`,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1812.6 +
                                                                    84 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                  children: S(we, {
                                                                    className: `framer-10w2ax3-container`,
                                                                    id: `${i}-10w2ax3`,
                                                                    nodeId: `wCyIAtOE3`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      x(z, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          aHF3NF12v: {
                                                                            MGgAvDoA0: g[1],
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                          t5gfNlrNr: {
                                                                            MGgAvDoA0: g[2],
                                                                            SKBNP2vvn: !0,
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                        },
                                                                        children: x(Q, {
                                                                          CtxCtZRbF: F({
                                                                            overlay: n,
                                                                          }),
                                                                          FgMmIZmJw: ``,
                                                                          grTamTNk1: uf(c),
                                                                          height: `100%`,
                                                                          hFy2PLFBG: l,
                                                                          HwypVSMEi: !1,
                                                                          id: `wCyIAtOE3`,
                                                                          II0fWsmjM: `0px`,
                                                                          layoutId: `wCyIAtOE3`,
                                                                          MGgAvDoA0: g[0],
                                                                          O9ZyioqcS: uf(t),
                                                                          OKvEEQQFQ: !1,
                                                                          q1Wa9MpBb: uf(f),
                                                                          Qb7mSHgLh: o,
                                                                          QjM5BTCWQ: !0,
                                                                          SKBNP2vvn: !1,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          TCGQti0b7: p,
                                                                          tJ0RQfmJy: e,
                                                                          TWjfUBTmo: uf(u),
                                                                          ub4buTzaB: uf(r),
                                                                          variant: Yd(`anAebR9ik`),
                                                                          width: `100%`,
                                                                          wsSEriDkC: s,
                                                                          xYhX6dOGf: {
                                                                            borderBottomWidth: 1,
                                                                            borderColor: `rgb(206, 206, 206)`,
                                                                            borderLeftWidth: 0,
                                                                            borderRightWidth: 1,
                                                                            borderStyle: `solid`,
                                                                            borderTopWidth: 1,
                                                                          },
                                                                          YdL5oV0XS: uf(a),
                                                                          Zg3vnZECo: h,
                                                                        }),
                                                                      }),
                                                                      x(M, {
                                                                        children:
                                                                          n.visible &&
                                                                          x(v, {
                                                                            children: m(
                                                                              x(Oe, {
                                                                                triggerId: `${i}-10w2ax3`,
                                                                                children: S(se, {
                                                                                  children: [
                                                                                    x(
                                                                                      O.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          V(
                                                                                            w,
                                                                                            `framer-13crzez`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${i}-10w2ax3`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          n.hide(),
                                                                                      },
                                                                                      `pZyuhiJMa`
                                                                                    ),
                                                                                    x(O.div, {
                                                                                      className: V(
                                                                                        w,
                                                                                        `framer-zvxpxk`
                                                                                      ),
                                                                                      "data-framer-name": `Wrap`,
                                                                                      "data-framer-portal-id": `${i}-10w2ax3`,
                                                                                      children: x(
                                                                                        Y,
                                                                                        {
                                                                                          width: `400px`,
                                                                                          children:
                                                                                            x(we, {
                                                                                              animate:
                                                                                                tf,
                                                                                              className: `framer-1t5jwil-container`,
                                                                                              exit: ef,
                                                                                              inComponentSlot:
                                                                                                !0,
                                                                                              initial:
                                                                                                nf,
                                                                                              nodeId: `jDszewQIi`,
                                                                                              rendersWithMotion:
                                                                                                !0,
                                                                                              scopeId: `augiA20Il`,
                                                                                              children:
                                                                                                x(
                                                                                                  Ct,
                                                                                                  {
                                                                                                    HblJYYmXZ:
                                                                                                      I(
                                                                                                        {
                                                                                                          overlay:
                                                                                                            n,
                                                                                                        }
                                                                                                      ),
                                                                                                    height: `100%`,
                                                                                                    id: `jDszewQIi`,
                                                                                                    layoutId: `jDszewQIi`,
                                                                                                    style:
                                                                                                      {
                                                                                                        width: `100%`,
                                                                                                      },
                                                                                                    width: `100%`,
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  ],
                                                                                }),
                                                                              }),
                                                                              rf()
                                                                            ),
                                                                          }),
                                                                      }),
                                                                    ],
                                                                  }),
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
                                x(`div`, {
                                  className: `framer-15e9a5e`,
                                  children: x(Fe, {
                                    children: x(ff, {
                                      query: mf(),
                                      children: (e, t, n) =>
                                        x(v, {
                                          children: e?.map(
                                            (
                                              {
                                                EdlK9s4od: e,
                                                eVfKYnlqn: t,
                                                id: n,
                                                Jry1OPs1q: r,
                                                JZfMFKc2o: i,
                                                K6GheEMTC: a,
                                                k8owwKEx3: o,
                                                sGLDCFVI5: s,
                                                Sn3Ji2zLH: c,
                                                StWb4Z9jo: l,
                                                u8osWsFhh: u,
                                                UxQ8VtfSI: f,
                                                vJoj3qvid: p,
                                              },
                                              h
                                            ) => (
                                              (p ??= ``),
                                              (c ??= ``),
                                              (f ??= ``),
                                              (e ??= ``),
                                              (o ??= ``),
                                              (i ??= ``),
                                              x(
                                                A,
                                                {
                                                  id: `PfyiPU3Hi-${n}`,
                                                  children: x(ye.Provider, {
                                                    value: { JZfMFKc2o: i },
                                                    children: x(af, {
                                                      blockDocumentScrolling: !1,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        x(v, {
                                                          children: x(B, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (h) =>
                                                              x(z, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  aHF3NF12v: {
                                                                    height: 300,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1570.6 +
                                                                      76 +
                                                                      0 +
                                                                      0 +
                                                                      300 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  t5gfNlrNr: {
                                                                    height: 281.5,
                                                                    width: `max(max(min(${d?.width || `100vw`}, 450px), 1px) / 2, 1px)`,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1416.6 +
                                                                      68 +
                                                                      0 +
                                                                      364 +
                                                                      0 +
                                                                      281.5 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: x(Y, {
                                                                  height: 476,
                                                                  width: `max(max(min(${d?.width || `100vw`}, 1360px), 1px) / 3.6364, 1px)`,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1812.6 +
                                                                    84 +
                                                                    0 +
                                                                    0 +
                                                                    476 +
                                                                    0 +
                                                                    0,
                                                                  children: S(we, {
                                                                    className: `framer-cgv9wb-container`,
                                                                    id: `${i}-cgv9wb`,
                                                                    nodeId: `h9GVfg5az`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      x(z, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          aHF3NF12v: {
                                                                            MGgAvDoA0: h[1],
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                          t5gfNlrNr: {
                                                                            MGgAvDoA0: h[2],
                                                                            SKBNP2vvn: !0,
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                        },
                                                                        children: x(Q, {
                                                                          CtxCtZRbF: F({
                                                                            overlay: n,
                                                                          }),
                                                                          FgMmIZmJw: ``,
                                                                          grTamTNk1: uf(s),
                                                                          height: `100%`,
                                                                          hFy2PLFBG: c,
                                                                          HwypVSMEi: !1,
                                                                          id: `h9GVfg5az`,
                                                                          II0fWsmjM: `0px`,
                                                                          layoutId: `h9GVfg5az`,
                                                                          MGgAvDoA0: h[0],
                                                                          O9ZyioqcS: uf(t),
                                                                          OKvEEQQFQ: !1,
                                                                          q1Wa9MpBb: uf(u),
                                                                          Qb7mSHgLh: o,
                                                                          QjM5BTCWQ: !0,
                                                                          SKBNP2vvn: !1,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          TCGQti0b7: f,
                                                                          tJ0RQfmJy: e,
                                                                          TWjfUBTmo: uf(l),
                                                                          ub4buTzaB: uf(r),
                                                                          variant: Yd(`anAebR9ik`),
                                                                          width: `100%`,
                                                                          wsSEriDkC: c,
                                                                          xYhX6dOGf: {
                                                                            borderBottomWidth: 1,
                                                                            borderColor: `rgb(206, 206, 206)`,
                                                                            borderLeftWidth: 1,
                                                                            borderRightWidth: 1,
                                                                            borderStyle: `solid`,
                                                                            borderTopWidth: 0,
                                                                          },
                                                                          YdL5oV0XS: uf(a),
                                                                          Zg3vnZECo: p,
                                                                        }),
                                                                      }),
                                                                      x(M, {
                                                                        children:
                                                                          n.visible &&
                                                                          x(v, {
                                                                            children: m(
                                                                              x(Oe, {
                                                                                triggerId: `${i}-cgv9wb`,
                                                                                children: S(se, {
                                                                                  children: [
                                                                                    x(
                                                                                      O.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          V(
                                                                                            w,
                                                                                            `framer-hq9mwd`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${i}-cgv9wb`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          n.hide(),
                                                                                      },
                                                                                      `jC4qhes7a`
                                                                                    ),
                                                                                    x(O.div, {
                                                                                      className: V(
                                                                                        w,
                                                                                        `framer-fcno0a`
                                                                                      ),
                                                                                      "data-framer-name": `Wrap`,
                                                                                      "data-framer-portal-id": `${i}-cgv9wb`,
                                                                                      children: x(
                                                                                        Y,
                                                                                        {
                                                                                          width: `400px`,
                                                                                          children:
                                                                                            x(we, {
                                                                                              animate:
                                                                                                tf,
                                                                                              className: `framer-1ws526s-container`,
                                                                                              exit: ef,
                                                                                              inComponentSlot:
                                                                                                !0,
                                                                                              initial:
                                                                                                nf,
                                                                                              nodeId: `gPzKE1UW6`,
                                                                                              rendersWithMotion:
                                                                                                !0,
                                                                                              scopeId: `augiA20Il`,
                                                                                              children:
                                                                                                x(
                                                                                                  Ct,
                                                                                                  {
                                                                                                    HblJYYmXZ:
                                                                                                      I(
                                                                                                        {
                                                                                                          overlay:
                                                                                                            n,
                                                                                                        }
                                                                                                      ),
                                                                                                    height: `100%`,
                                                                                                    id: `gPzKE1UW6`,
                                                                                                    layoutId: `gPzKE1UW6`,
                                                                                                    style:
                                                                                                      {
                                                                                                        width: `100%`,
                                                                                                      },
                                                                                                    width: `100%`,
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  ],
                                                                                }),
                                                                              }),
                                                                              rf()
                                                                            ),
                                                                          }),
                                                                      }),
                                                                    ],
                                                                  }),
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
                                x(`div`, {
                                  className: `framer-1lr7cay`,
                                  children: x(Fe, {
                                    children: x(ff, {
                                      query: hf(),
                                      children: (e, t, n) =>
                                        x(v, {
                                          children: e?.map(
                                            (
                                              {
                                                EdlK9s4od: e,
                                                eVfKYnlqn: t,
                                                id: n,
                                                Jry1OPs1q: r,
                                                JZfMFKc2o: i,
                                                K6GheEMTC: a,
                                                k8owwKEx3: o,
                                                l2PesJvCE: s,
                                                sGLDCFVI5: c,
                                                Sn3Ji2zLH: l,
                                                StWb4Z9jo: u,
                                                u8osWsFhh: f,
                                                UxQ8VtfSI: p,
                                                vJoj3qvid: h,
                                              },
                                              g
                                            ) => (
                                              (h ??= ``),
                                              (l ??= ``),
                                              (p ??= ``),
                                              (s ??= ``),
                                              (e ??= ``),
                                              (o ??= ``),
                                              (i ??= ``),
                                              x(
                                                A,
                                                {
                                                  id: `kiwZAyypL-${n}`,
                                                  children: x(ye.Provider, {
                                                    value: { JZfMFKc2o: i },
                                                    children: x(af, {
                                                      blockDocumentScrolling: !1,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        x(v, {
                                                          children: x(B, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (g) =>
                                                              x(z, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  aHF3NF12v: {
                                                                    height: 300,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1570.6 +
                                                                      76 +
                                                                      0 +
                                                                      0 +
                                                                      300 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  t5gfNlrNr: {
                                                                    height: 281.5,
                                                                    width: `max(max(min(${d?.width || `100vw`}, 450px), 1px) / 2, 1px)`,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      1416.6 +
                                                                      68 +
                                                                      0 +
                                                                      364 +
                                                                      0 +
                                                                      281.5 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: x(Y, {
                                                                  height: 476,
                                                                  width: `max(max(min(${d?.width || `100vw`}, 1360px), 1px) / 3.6364, 1px)`,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1812.6 +
                                                                    84 +
                                                                    0 +
                                                                    0 +
                                                                    476 +
                                                                    0 +
                                                                    0,
                                                                  children: S(we, {
                                                                    className: `framer-enq7nu-container`,
                                                                    id: `${i}-enq7nu`,
                                                                    nodeId: `pKgmxo7yQ`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      x(z, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          aHF3NF12v: {
                                                                            MGgAvDoA0: g[1],
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                          t5gfNlrNr: {
                                                                            MGgAvDoA0: g[2],
                                                                            SKBNP2vvn: !0,
                                                                            variant:
                                                                              Yd(`sKec7jYlr`),
                                                                          },
                                                                        },
                                                                        children: x(Q, {
                                                                          CtxCtZRbF: F({
                                                                            overlay: n,
                                                                          }),
                                                                          FgMmIZmJw: ``,
                                                                          grTamTNk1: uf(c),
                                                                          height: `100%`,
                                                                          hFy2PLFBG: l,
                                                                          HwypVSMEi: !1,
                                                                          id: `pKgmxo7yQ`,
                                                                          II0fWsmjM: `0px`,
                                                                          layoutId: `pKgmxo7yQ`,
                                                                          MGgAvDoA0: g[0],
                                                                          O9ZyioqcS: uf(t),
                                                                          OKvEEQQFQ: !1,
                                                                          q1Wa9MpBb: uf(f),
                                                                          Qb7mSHgLh: o,
                                                                          QjM5BTCWQ: !0,
                                                                          SKBNP2vvn: !1,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          TCGQti0b7: p,
                                                                          tJ0RQfmJy: e,
                                                                          TWjfUBTmo: uf(u),
                                                                          ub4buTzaB: uf(r),
                                                                          variant: Yd(`anAebR9ik`),
                                                                          width: `100%`,
                                                                          wsSEriDkC: s,
                                                                          xYhX6dOGf: {
                                                                            borderBottomWidth: 1,
                                                                            borderColor: `rgb(206, 206, 206)`,
                                                                            borderLeftWidth: 0,
                                                                            borderRightWidth: 1,
                                                                            borderStyle: `solid`,
                                                                            borderTopWidth: 0,
                                                                          },
                                                                          YdL5oV0XS: uf(a),
                                                                          Zg3vnZECo: h,
                                                                        }),
                                                                      }),
                                                                      x(M, {
                                                                        children:
                                                                          n.visible &&
                                                                          x(v, {
                                                                            children: m(
                                                                              x(Oe, {
                                                                                triggerId: `${i}-enq7nu`,
                                                                                children: S(se, {
                                                                                  children: [
                                                                                    x(
                                                                                      O.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          V(
                                                                                            w,
                                                                                            `framer-1lszllq`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${i}-enq7nu`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.34,
                                                                                              ease: [
                                                                                                0.45,
                                                                                                0,
                                                                                                0.55,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          n.hide(),
                                                                                      },
                                                                                      `dTa5DdnZ_`
                                                                                    ),
                                                                                    x(O.div, {
                                                                                      className: V(
                                                                                        w,
                                                                                        `framer-c02v1a`
                                                                                      ),
                                                                                      "data-framer-name": `Wrap`,
                                                                                      "data-framer-portal-id": `${i}-enq7nu`,
                                                                                      children: x(
                                                                                        Y,
                                                                                        {
                                                                                          width: `400px`,
                                                                                          children:
                                                                                            x(we, {
                                                                                              animate:
                                                                                                tf,
                                                                                              className: `framer-1u4egq6-container`,
                                                                                              exit: ef,
                                                                                              inComponentSlot:
                                                                                                !0,
                                                                                              initial:
                                                                                                nf,
                                                                                              nodeId: `GcjYRf7VI`,
                                                                                              rendersWithMotion:
                                                                                                !0,
                                                                                              scopeId: `augiA20Il`,
                                                                                              children:
                                                                                                x(
                                                                                                  Ct,
                                                                                                  {
                                                                                                    HblJYYmXZ:
                                                                                                      I(
                                                                                                        {
                                                                                                          overlay:
                                                                                                            n,
                                                                                                        }
                                                                                                      ),
                                                                                                    height: `100%`,
                                                                                                    id: `GcjYRf7VI`,
                                                                                                    layoutId: `GcjYRf7VI`,
                                                                                                    style:
                                                                                                      {
                                                                                                        width: `100%`,
                                                                                                      },
                                                                                                    width: `100%`,
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  ],
                                                                                }),
                                                                              }),
                                                                              rf()
                                                                            ),
                                                                          }),
                                                                      }),
                                                                    ],
                                                                  }),
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
                            }),
                          ],
                        }),
                      }),
                      S(`section`, {
                        className: `framer-1vfq3n2`,
                        "data-framer-name": `Section - Shop by Categories`,
                        children: [
                          x(z, {
                            breakpoint: b,
                            overrides: {
                              aHF3NF12v: {
                                children: x(s, {
                                  children: x(`h2`, {
                                    className: `framer-styles-preset-1lt80ed`,
                                    "data-styles-preset": `OrFaou4jp`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `start` },
                                    children: `Shop by Categories`,
                                  }),
                                }),
                              },
                              t5gfNlrNr: {
                                children: x(s, {
                                  children: x(`h2`, {
                                    className: `framer-styles-preset-1lt80ed`,
                                    "data-styles-preset": `OrFaou4jp`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `start` },
                                    children: `Shop by Categories`,
                                  }),
                                }),
                              },
                            },
                            children: x(Ed, {
                              __framer__animate: { transition: Zd },
                              __framer__animateOnce: !0,
                              __framer__enter: Xd,
                              __framer__exit: Qd,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: x(s, {
                                children: x(`h2`, {
                                  className: `framer-styles-preset-1lt80ed`,
                                  "data-styles-preset": `OrFaou4jp`,
                                  dir: `auto`,
                                  children: `Shop by Categories`,
                                }),
                              }),
                              className: `framer-1cwuj7l`,
                              "data-framer-name": `Shop by Categories`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          x(B, {
                            links: [
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `men` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `mqbWv2VJP`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `women` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `rNA6KmUhS`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `kid` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `C7Lm5w0gW`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `men` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `mqbWv2VJP`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `women` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `rNA6KmUhS`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `kid` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `C7Lm5w0gW`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `men` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `mqbWv2VJP`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `women` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `rNA6KmUhS`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { X_kOvdUOg: `kid` },
                                  unresolvedPathSlugs: {
                                    X_kOvdUOg: {
                                      collectionId: `bYJxnvWan`,
                                      collectionItemId: `C7Lm5w0gW`,
                                    },
                                  },
                                  webPageId: `Ug98Cl58K`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              x(z, {
                                breakpoint: b,
                                overrides: {
                                  aHF3NF12v: {
                                    width: `min(min(${d?.width || `100vw`}, 1360px) - 60px, 810px)`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 2322.6 + 76 + 125.6,
                                  },
                                  t5gfNlrNr: {
                                    width: `min(min(${d?.width || `100vw`}, 1360px) - 40px, 450px)`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 2479.6 + 68 + 117.6,
                                  },
                                },
                                children: x(Y, {
                                  height: 730,
                                  width: `calc(min(${d?.width || `100vw`}, 1360px) - 100px)`,
                                  y: (d?.y || 0) + 0 + 0 + 0 + 2932.6 + 84 + 133.6,
                                  children: x(we, {
                                    className: `framer-lc8mfd-container`,
                                    nodeId: `LrCihulyG`,
                                    scopeId: `augiA20Il`,
                                    children: x(z, {
                                      breakpoint: b,
                                      overrides: {
                                        aHF3NF12v: {
                                          jXyC15ZZ6: e[5],
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: Yd(`sJqk5mr45`),
                                          ZSzTIQz44: e[4],
                                          ztKcFvh7J: e[3],
                                        },
                                        t5gfNlrNr: {
                                          jXyC15ZZ6: e[8],
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: Yd(`yehKiJl2X`),
                                          ZSzTIQz44: e[7],
                                          ztKcFvh7J: e[6],
                                        },
                                      },
                                      children: x(mc, {
                                        drTduS0x6: `Built For Daily Confidence`,
                                        EylSzbyru: `FOR WOMEN`,
                                        height: `100%`,
                                        id: `LrCihulyG`,
                                        jXyC15ZZ6: e[2],
                                        KfnxV950P: `FOR MEN`,
                                        KJVxyHKaF: `FOR KIDS`,
                                        layoutId: `LrCihulyG`,
                                        LCbcMqcZz: `Comfort For Every Adventure`,
                                        style: { width: `100%` },
                                        v_c47fwZH: `Designed For Modern Living`,
                                        variant: Yd(`Qlx8YStu6`),
                                        width: `100%`,
                                        ZSzTIQz44: e[1],
                                        ztKcFvh7J: e[0],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      x(`section`, {
                        className: `framer-13wtyzi`,
                        "data-framer-name": `Section - Video`,
                        children: x(z, {
                          breakpoint: b,
                          overrides: {
                            aHF3NF12v: {
                              height: 750,
                              y: (d?.y || 0) + 0 + 0 + 0 + 3330.2 + 76 + 0,
                            },
                            t5gfNlrNr: {
                              height: 400,
                              y: (d?.y || 0) + 0 + 0 + 0 + 3463.2 + 68 + 0,
                            },
                          },
                          children: x(Y, {
                            height: 900,
                            width: d?.width || `100vw`,
                            y: (d?.y || 0) + 0 + 0 + 0 + 3964.2 + 84 + 0,
                            children: x(Ad, {
                              __framer__animate: { transition: Zd },
                              __framer__animateOnce: !0,
                              __framer__enter: Xd,
                              __framer__exit: Qd,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-8f11uv-container`,
                              nodeId: `mqcQmD2ek`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              children: x(z, {
                                breakpoint: b,
                                overrides: {
                                  aHF3NF12v: {
                                    exycHua8_: `4px 26px`,
                                    rKQP7Jbc9: 48,
                                    style: { height: `100%`, maxHeight: `100%`, width: `100%` },
                                    VABGpTJ31: `0px 30px 30px 30px`,
                                  },
                                  t5gfNlrNr: {
                                    exycHua8_: `1px 16px`,
                                    k6clfptua: `34px 10px 0px 10px`,
                                    Mst4_FB3C: `ExJgxixw5`,
                                    rKQP7Jbc9: 24,
                                    tczZyBrNS: !0,
                                    VABGpTJ31: `0px 24px 24px 24px`,
                                  },
                                },
                                children: x(Ld, {
                                  __framer__animateOnce: !1,
                                  __framer__obscuredVariantId: `vyUiV_jLp`,
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  __framer__visibleVariantId: `seXncW1he`,
                                  exycHua8_: `4px 28px`,
                                  height: `100%`,
                                  id: `mqcQmD2ek`,
                                  jYYssv0lz: `Pants`,
                                  k6clfptua: `64px 20px 0px 20px`,
                                  layoutId: `mqcQmD2ek`,
                                  M0aW2V0lL: `Tees`,
                                  Mst4_FB3C: `qkrYQOGAB`,
                                  rKQP7Jbc9: 56,
                                  sARXIw2IL: `Hoodies`,
                                  style: { height: `100%`, width: `100%` },
                                  tczZyBrNS: !1,
                                  VABGpTJ31: `0px 40px 40px 40px`,
                                  variant: Yd(`vyUiV_jLp`),
                                  width: `100%`,
                                  X777NLgv8: `Jacket`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      S(`section`, {
                        className: `framer-18dczmp`,
                        "data-framer-name": `Section - Best Sellers`,
                        children: [
                          x(Ed, {
                            __framer__animate: { transition: Zd },
                            __framer__animateOnce: !0,
                            __framer__enter: Xd,
                            __framer__exit: Qd,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: x(s, {
                              children: x(`h2`, {
                                className: `framer-styles-preset-1lt80ed`,
                                "data-styles-preset": `OrFaou4jp`,
                                dir: `auto`,
                                children: `Best Sellers`,
                              }),
                            }),
                            className: `framer-hlcup5`,
                            "data-framer-name": `Heading`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          x(`div`, {
                            className: `framer-1fsc3eu`,
                            "data-framer-name": `Content`,
                            children: x(af, {
                              blockDocumentScrolling: !1,
                              dismissWithEsc: !0,
                              children: (e) =>
                                x(v, {
                                  children: x(z, {
                                    breakpoint: b,
                                    overrides: {
                                      aHF3NF12v: {
                                        width: `max(min(${d?.width || `100vw`}, 1360px) - 60px, 1px)`,
                                        y: (d?.y || 0) + 0 + 0 + 0 + 4232.2 + 76 + 101.6 + 0,
                                      },
                                      t5gfNlrNr: {
                                        width: `max(min(min(${d?.width || `100vw`}, 1360px) - 40px, 450px), 1px)`,
                                        y: (d?.y || 0) + 0 + 0 + 0 + 3999.2 + 68 + 97.6 + 0,
                                      },
                                    },
                                    children: x(Y, {
                                      height: 419,
                                      width: `max(min(${d?.width || `100vw`}, 1360px) - 100px, 1px)`,
                                      y: (d?.y || 0) + 0 + 0 + 0 + 5032.2 + 84 + 109.6 + 0,
                                      children: S(Ad, {
                                        __framer__animate: { transition: Zd },
                                        __framer__animateOnce: !0,
                                        __framer__enter: of,
                                        __framer__exit: Qd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1tj4iso-container`,
                                        id: `1tj4iso`,
                                        nodeId: `C6In1NVCJ`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: [
                                          x(z, {
                                            breakpoint: b,
                                            overrides: {
                                              aHF3NF12v: { lEWAFiRdp: 24, wCNS_Sekq: 2 },
                                              t5gfNlrNr: {
                                                e4iQZ8rQF: `0px 0px 60px 0px`,
                                                fkXS9yO5r: `Bottom Center`,
                                                l1PolTIP3: 55,
                                                lEWAFiRdp: 26,
                                                pTrTbMvkb: !0,
                                                suKMdPBHQ: 38,
                                                tf8Lk0rL8: `3px 12px 3px 12px`,
                                                wCNS_Sekq: 1,
                                              },
                                            },
                                            children: x(Fs, {
                                              e4iQZ8rQF: `56px 0px 0px 0px`,
                                              fkXS9yO5r: `Top Right`,
                                              height: `100%`,
                                              id: `C6In1NVCJ`,
                                              kM35a554y: 0,
                                              l1PolTIP3: -55,
                                              layoutId: `C6In1NVCJ`,
                                              lEWAFiRdp: 0,
                                              pTrTbMvkb: !1,
                                              style: { width: `100%` },
                                              suKMdPBHQ: 34,
                                              tf8Lk0rL8: `5px 20px 5px 20px`,
                                              variant: Yd(`K9t5vziCL`),
                                              wCNS_Sekq: 4,
                                              wE32AWBje: F({ overlay: e }),
                                              width: `100%`,
                                            }),
                                          }),
                                          x(M, {
                                            children:
                                              e.visible &&
                                              x(v, {
                                                children: m(
                                                  x(Oe, {
                                                    triggerId: `1tj4iso`,
                                                    children: S(se, {
                                                      children: [
                                                        x(
                                                          O.div,
                                                          {
                                                            animate: {
                                                              opacity: 1,
                                                              transition: {
                                                                delay: 0,
                                                                duration: 0.34,
                                                                ease: [0.45, 0, 0.55, 1],
                                                                type: `tween`,
                                                              },
                                                            },
                                                            className: V(w, `framer-xxoa1j`),
                                                            "data-framer-portal-id": `1tj4iso`,
                                                            exit: {
                                                              opacity: 0,
                                                              transition: {
                                                                delay: 0,
                                                                duration: 0.34,
                                                                ease: [0.45, 0, 0.55, 1],
                                                                type: `tween`,
                                                              },
                                                            },
                                                            initial: { opacity: 0 },
                                                            onTap: () => e.hide(),
                                                          },
                                                          `oDJAMqjeG`
                                                        ),
                                                        x(O.div, {
                                                          className: V(w, `framer-172f5wk`),
                                                          "data-framer-name": `Wrap`,
                                                          "data-framer-portal-id": `1tj4iso`,
                                                          children: x(Y, {
                                                            width: `400px`,
                                                            children: x(we, {
                                                              animate: tf,
                                                              className: `framer-efppad-container`,
                                                              exit: ef,
                                                              inComponentSlot: !0,
                                                              initial: nf,
                                                              nodeId: `GmglOP8nL`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `augiA20Il`,
                                                              children: x(Ct, {
                                                                HblJYYmXZ: I({ overlay: e }),
                                                                height: `100%`,
                                                                id: `GmglOP8nL`,
                                                                layoutId: `GmglOP8nL`,
                                                                style: { width: `100%` },
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  rf()
                                                ),
                                              }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          }),
                        ],
                      }),
                      x(`section`, {
                        className: `framer-29idcm`,
                        "data-framer-name": `Section - USP`,
                        children: x(z, {
                          breakpoint: b,
                          overrides: {
                            aHF3NF12v: {
                              width: `calc(min(${d?.width || `100vw`}, 1360px) - 60px)`,
                              y: (d?.y || 0) + 0 + 0 + 0 + 4904.8 + 76 + 0,
                            },
                            t5gfNlrNr: {
                              width: `min(min(${d?.width || `100vw`}, 1360px) - 40px, 450px)`,
                              y: (d?.y || 0) + 0 + 0 + 0 + 4651.8 + 68 + 0,
                            },
                          },
                          children: x(Y, {
                            height: 321,
                            width: `calc(min(${d?.width || `100vw`}, 1360px) - 100px)`,
                            y: (d?.y || 0) + 0 + 0 + 0 + 5728.8 + 84 + 0,
                            children: x(Ad, {
                              __framer__animate: { transition: Zd },
                              __framer__animateOnce: !0,
                              __framer__enter: of,
                              __framer__exit: Qd,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-tp0cla-container`,
                              nodeId: `N6ItmhGRW`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              children: x(z, {
                                breakpoint: b,
                                overrides: {
                                  aHF3NF12v: { variant: Yd(`F5sb8i3JD`) },
                                  t5gfNlrNr: {
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: Yd(`n9TzDIhO2`),
                                  },
                                },
                                children: x(_t, {
                                  DfcF0tAQO: `Free 30 Days Returns`,
                                  FoWaAjIxI: `We ship to over 100 countries with fast and reliable delivery. Track your order and get it wherever you are.`,
                                  Fw5a1sfJT: `Secure Payments`,
                                  hC6AEh6Cb: `Sustainable Cloths`,
                                  height: `100%`,
                                  id: `N6ItmhGRW`,
                                  iOL2_YcPF: dt,
                                  layoutId: `N6ItmhGRW`,
                                  mrZof3VPr: vt,
                                  style: { width: `100%` },
                                  TDgn8aGF5: mt,
                                  TJcUIYvxP: `Shop With Confidence`,
                                  UoO6ML1Xo: `Shop safely with encrypted checkout. We support all major payment methods for your convenience.`,
                                  variant: Yd(`R3_z1VI2c`),
                                  vhRGHsvJ0: `Not satisfied? Return within 30 days for a full refund. No questions asked, totally hassle-free.`,
                                  width: `100%`,
                                  wsw_E_Efx: `Worldwide Shipping`,
                                  WYgbEzxeh: lt,
                                  y0w8cG1_S: `Every piece is made from responsibly sourced materials. Wear with purpose, live with less impact.`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      S(`section`, {
                        className: `framer-oj30rt`,
                        "data-framer-name": `Section - Testimonial`,
                        children: [
                          S(Pd, {
                            __framer__animate: { transition: Zd },
                            __framer__animateOnce: !0,
                            __framer__enter: Xd,
                            __framer__exit: Qd,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-2bsilz`,
                            "data-framer-name": `Top Wrap`,
                            children: [
                              x(he, {
                                __fromCanvasComponent: !0,
                                children: x(s, {
                                  children: x(`h2`, {
                                    className: `framer-styles-preset-1lt80ed`,
                                    "data-styles-preset": `OrFaou4jp`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Style loved by Thousands`,
                                  }),
                                }),
                                className: `framer-1lkllrf`,
                                "data-framer-name": `Headline`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              x(he, {
                                __fromCanvasComponent: !0,
                                children: x(s, {
                                  children: x(`p`, {
                                    className: `framer-styles-preset-1ta8qgd`,
                                    "data-styles-preset": `O7___hs0c`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                    },
                                    children: `See why customers keep coming back for timeless style, premium comfort, and everyday confidence.`,
                                  }),
                                }),
                                className: `framer-1inei0w`,
                                "data-framer-name": `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          x(z, {
                            breakpoint: b,
                            overrides: {
                              aHF3NF12v: { y: (d?.y || 0) + 0 + 0 + 0 + 5377.8 + 76 + 245.6 },
                              t5gfNlrNr: { y: (d?.y || 0) + 0 + 0 + 0 + 5108.8 + 68 + 235.6 },
                            },
                            children: x(Y, {
                              height: 386,
                              width: d?.width || `100vw`,
                              y: (d?.y || 0) + 0 + 0 + 0 + 6217.8 + 84 + 255.6,
                              children: x(Ad, {
                                __framer__animate: { transition: sf },
                                __framer__animateOnce: !0,
                                __framer__enter: Xd,
                                __framer__exit: Qd,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1uyxo03-container`,
                                nodeId: `CPa91xBXx`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: x(z, {
                                  breakpoint: b,
                                  overrides: { t5gfNlrNr: { variant: Yd(`rXUsGTyb5`) } },
                                  children: x(Dl, {
                                    height: `100%`,
                                    id: `CPa91xBXx`,
                                    layoutId: `CPa91xBXx`,
                                    style: { width: `100%` },
                                    variant: Yd(`IjUgWR4TV`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      S(`section`, {
                        className: `framer-1k7j8e1`,
                        "data-framer-name": `Section - Blog`,
                        children: [
                          S(Pd, {
                            __framer__animate: { transition: Zd },
                            __framer__animateOnce: !0,
                            __framer__enter: Xd,
                            __framer__exit: Qd,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-6hpv4e`,
                            "data-framer-name": `Headline Wrap`,
                            children: [
                              x(z, {
                                breakpoint: b,
                                overrides: {
                                  aHF3NF12v: {
                                    children: x(s, {
                                      children: x(`h2`, {
                                        className: `framer-styles-preset-1lt80ed`,
                                        "data-styles-preset": `OrFaou4jp`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `From the Journal`,
                                      }),
                                    }),
                                  },
                                  t5gfNlrNr: {
                                    children: x(s, {
                                      children: x(`h2`, {
                                        className: `framer-styles-preset-1lt80ed`,
                                        "data-styles-preset": `OrFaou4jp`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `From the Journal`,
                                      }),
                                    }),
                                  },
                                },
                                children: x(he, {
                                  __fromCanvasComponent: !0,
                                  children: x(s, {
                                    children: x(`h2`, {
                                      className: `framer-styles-preset-1lt80ed`,
                                      "data-styles-preset": `OrFaou4jp`,
                                      dir: `auto`,
                                      children: `From the Journal`,
                                    }),
                                  }),
                                  className: `framer-1d352ur`,
                                  "data-framer-name": `Headline`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              x(he, {
                                __fromCanvasComponent: !0,
                                children: x(s, {
                                  children: x(`p`, {
                                    className: `framer-styles-preset-1ta8qgd`,
                                    "data-styles-preset": `O7___hs0c`,
                                    dir: `auto`,
                                    children: `Explore style inspiration, seasonal trends, and guides to building a timeless wardrobe.`,
                                  }),
                                }),
                                className: `framer-zqqdh9`,
                                "data-framer-name": `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          S(`div`, {
                            className: `framer-16dvorr`,
                            "data-framer-name": `Content`,
                            children: [
                              x(ze, {
                                href: { webPageId: `THPIb7xGu` },
                                motionChild: !0,
                                nodeId: `gXHv72hEg`,
                                openInNewTab: !1,
                                scopeId: `augiA20Il`,
                                children: x(O.a, {
                                  className: `framer-1x25mu8 framer-lux5qc`,
                                  "data-framer-name": `Text`,
                                  children: x(he, {
                                    __fromCanvasComponent: !0,
                                    children: x(s, {
                                      children: x(`p`, {
                                        className: `framer-styles-preset-8kmloq`,
                                        "data-styles-preset": `MYFsM6f0k`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                        },
                                        children: `View More`,
                                      }),
                                    }),
                                    className: `framer-xlfsk0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              re() &&
                                x(`div`, {
                                  className: `framer-81xeww hidden-9j16wa`,
                                  "data-framer-name": `Left`,
                                  children: x(`div`, {
                                    className: `framer-482kzr`,
                                    children: x(Fe, {
                                      children: x(z, {
                                        breakpoint: b,
                                        overrides: { t5gfNlrNr: { query: _f() } },
                                        children: x(ff, {
                                          query: gf(),
                                          children: (e, t, n) =>
                                            x(v, {
                                              children: e?.map(
                                                (
                                                  {
                                                    ccvQhG_Kb: e,
                                                    id: t,
                                                    kEbrIvftN: n,
                                                    sFrlzjY0j: r,
                                                    tbTDWaq4j: i,
                                                    YI4pSm49t: a,
                                                  },
                                                  o
                                                ) => (
                                                  (a ??= ``),
                                                  (e ??= ``),
                                                  (r ??= ``),
                                                  x(
                                                    A,
                                                    {
                                                      id: `pg_9nWD1C-${t}`,
                                                      children: x(ye.Provider, {
                                                        value: { YI4pSm49t: a },
                                                        children: x(B, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            x(z, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                t5gfNlrNr: {
                                                                  width: `max(min(min(${d?.width || `100vw`}, 1360px) - 40px, 450px), 1px)`,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    5866.4 +
                                                                    68 +
                                                                    237.6 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1072,
                                                                },
                                                              },
                                                              children: x(Y, {
                                                                height: 518,
                                                                width: `max((min(${d?.width || `100vw`}, 1360px) - 116px) * 0.45, 1px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  7027.4 +
                                                                  84 +
                                                                  253.6 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: x(Ad, {
                                                                  __framer__animate: {
                                                                    transition: sf,
                                                                  },
                                                                  __framer__animateOnce: !0,
                                                                  __framer__enter: Xd,
                                                                  __framer__exit: Qd,
                                                                  __framer__styleAppearEffectEnabled:
                                                                    !0,
                                                                  __framer__threshold: 0,
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  className: `framer-20htcl-container`,
                                                                  nodeId: `uKt_kMVqQ`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `augiA20Il`,
                                                                  children: x(z, {
                                                                    breakpoint: b,
                                                                    overrides: {
                                                                      t5gfNlrNr: {
                                                                        mejnfXFJg: t[1],
                                                                        variant: Yd(`QdhZwIKRV`),
                                                                      },
                                                                    },
                                                                    children: x(Dt, {
                                                                      caxJYOAxG: i,
                                                                      height: `100%`,
                                                                      id: `uKt_kMVqQ`,
                                                                      jZaKHpWJZ: `10px`,
                                                                      layoutId: `uKt_kMVqQ`,
                                                                      lzt3mmvNo: e,
                                                                      mejnfXFJg: t[0],
                                                                      p3oejAZGk: `12px`,
                                                                      RKPUUbfKk: uf(n),
                                                                      style: { width: `100%` },
                                                                      variant: Yd(`hsOx197UO`),
                                                                      width: `100%`,
                                                                      wUAUbLgbN: r,
                                                                    }),
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
                                  }),
                                }),
                              ie() &&
                                x(`div`, {
                                  className: `framer-t1t6fm hidden-ubzvz`,
                                  "data-framer-name": `Right`,
                                  children: x(`div`, {
                                    className: `framer-10mobvh`,
                                    children: x(Fe, {
                                      children: x(z, {
                                        breakpoint: b,
                                        overrides: {
                                          aHF3NF12v: { query: xf() },
                                          t5gfNlrNr: { query: Sf() },
                                        },
                                        children: x(ff, {
                                          query: bf(),
                                          children: (e, t, n) =>
                                            x(v, {
                                              children: e?.map(
                                                (
                                                  {
                                                    ccvQhG_Kb: e,
                                                    id: t,
                                                    kEbrIvftN: n,
                                                    sFrlzjY0j: r,
                                                    tbTDWaq4j: i,
                                                    YI4pSm49t: a,
                                                  },
                                                  o
                                                ) => (
                                                  (a ??= ``),
                                                  (e ??= ``),
                                                  (r ??= ``),
                                                  x(
                                                    A,
                                                    {
                                                      id: `njSKayDRI-${t}`,
                                                      children: x(ye.Provider, {
                                                        value: { YI4pSm49t: a },
                                                        children: x(B, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            x(z, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                aHF3NF12v: {
                                                                  width: `calc(min(${d?.width || `100vw`}, 1360px) - 60px)`,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    6161.4 +
                                                                    76 +
                                                                    245.6 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1076,
                                                                },
                                                              },
                                                              children: x(Y, {
                                                                height: 518,
                                                                width: `max((min(${d?.width || `100vw`}, 1360px) - 116px) * 0.55, 1px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  7027.4 +
                                                                  84 +
                                                                  253.6 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  269,
                                                                children: x(Ad, {
                                                                  __framer__animate: {
                                                                    transition: yf(vf, o * 0.2),
                                                                  },
                                                                  __framer__animateOnce: !0,
                                                                  __framer__enter: Xd,
                                                                  __framer__exit: Qd,
                                                                  __framer__styleAppearEffectEnabled:
                                                                    !0,
                                                                  __framer__threshold: 0,
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  className: `framer-1gj2rmj-container`,
                                                                  nodeId: `Rz8l87lkp`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `augiA20Il`,
                                                                  children: x(z, {
                                                                    breakpoint: b,
                                                                    overrides: {
                                                                      aHF3NF12v: {
                                                                        mejnfXFJg: t[1],
                                                                      },
                                                                    },
                                                                    children: x(Dt, {
                                                                      caxJYOAxG: i,
                                                                      height: `100%`,
                                                                      id: `Rz8l87lkp`,
                                                                      jZaKHpWJZ: `10px`,
                                                                      layoutId: `Rz8l87lkp`,
                                                                      lzt3mmvNo: e,
                                                                      mejnfXFJg: t[0],
                                                                      p3oejAZGk: `12px`,
                                                                      RKPUUbfKk: uf(n),
                                                                      style: { width: `100%` },
                                                                      variant: Yd(`ctFvhXXyN`),
                                                                      width: `100%`,
                                                                      wUAUbLgbN: r,
                                                                    }),
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
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                x(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-zaSll.framer-lux5qc, .framer-zaSll .framer-lux5qc { display: block; }`,
        `.framer-zaSll.framer-72rtr7 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-zaSll .framer-9q4724 { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1lgpnbu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 90vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-12mz7tl-container, .framer-zaSll .framer-gwlgaf-container, .framer-zaSll .framer-10w2ax3-container, .framer-zaSll .framer-cgv9wb-container, .framer-zaSll .framer-enq7nu-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1q2fybr { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 80px; z-index: 1; }`,
        `.framer-zaSll .framer-ok4c8b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-3lyf7k, .framer-zaSll .framer-hlcup5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-zaSll .framer-xh8j4l-container, .framer-zaSll .framer-19klg2p-container, .framer-zaSll .framer-lc8mfd-container, .framer-zaSll .framer-tp0cla-container, .framer-zaSll .framer-1uyxo03-container, .framer-zaSll .framer-20htcl-container, .framer-zaSll .framer-1gj2rmj-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-zaSll.framer-1hdb4fr, .framer-zaSll.framer-1d9yq40, .framer-zaSll.framer-13crzez, .framer-zaSll.framer-hq9mwd, .framer-zaSll.framer-1lszllq, .framer-zaSll.framer-xxoa1j { background-color: rgba(0, 0, 0, 0); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-zaSll.framer-tbv4p4, .framer-zaSll.framer-k0ncsv, .framer-zaSll.framer-zvxpxk, .framer-zaSll.framer-fcno0a, .framer-zaSll.framer-c02v1a, .framer-zaSll.framer-172f5wk { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 20px 40px 20px; position: fixed; right: 0px; z-index: 10; }`,
        `.framer-zaSll .framer-1o3qw1i-container, .framer-zaSll .framer-1v6br0w-container, .framer-zaSll .framer-1t5jwil-container, .framer-zaSll .framer-1ws526s-container, .framer-zaSll .framer-1u4egq6-container, .framer-zaSll .framer-efppad-container { flex: none; height: auto; position: relative; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zaSll .framer-1ufi4d5 { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-19bt8fq { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1odln5a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 952px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zaSll .framer-1mtxgfz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 45%; }`,
        `.framer-zaSll .framer-1drmue2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-zaSll .framer-1ib91g6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 300px; position: relative; text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-zaSll .framer-1p57lqa-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zaSll .framer-yl6i45 { -webkit-filter: brightness(0.9); bottom: 0px; filter: brightness(0.9); flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
        `.framer-zaSll .framer-1tzetpk { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(1px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 55%; }`,
        `.framer-zaSll .framer-1j9tlzo, .framer-zaSll .framer-tq3u6c, .framer-zaSll .framer-15e9a5e, .framer-zaSll .framer-1lr7cay { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1vfq3n2, .framer-zaSll .framer-1k7j8e1 { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1cwuj7l { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 657px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zaSll .framer-13wtyzi { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-8f11uv-container { flex: none; height: 90vh; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-18dczmp { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1fsc3eu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1tj4iso-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-zaSll .framer-29idcm { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-oj30rt { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-2bsilz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1lkllrf { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zaSll .framer-1inei0w, .framer-zaSll .framer-zqqdh9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 489px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zaSll .framer-6hpv4e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1d352ur { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zaSll .framer-16dvorr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zaSll .framer-1x25mu8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 3px; text-decoration: none; top: -30px; width: min-content; }`,
        `.framer-zaSll .framer-xlfsk0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-zaSll .framer-81xeww { align-content: center; align-items: center; display: flex; flex: 0.45 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zaSll .framer-482kzr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-zaSll .framer-t1t6fm { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 0.55 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zaSll .framer-10mobvh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        ...Ft,
        ...jt,
        ...it,
        ...Xe,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-zaSll.framer-72rtr7 { width: 810px; } .framer-zaSll .framer-1lgpnbu { height: 70vh; max-height: 756px; } .framer-zaSll .framer-ok4c8b { padding: 76px 30px 68px 30px; } .framer-zaSll .framer-xh8j4l-container { height: 513px; } .framer-zaSll .framer-19bt8fq, .framer-zaSll .framer-13wtyzi { padding: 76px 0px 76px 0px; } .framer-zaSll .framer-1odln5a { height: 600px; } .framer-zaSll .framer-1vfq3n2, .framer-zaSll .framer-1k7j8e1 { gap: 64px; padding: 76px 30px 76px 30px; } .framer-zaSll .framer-1cwuj7l { width: 100%; } .framer-zaSll .framer-lc8mfd-container { max-width: 810px; } .framer-zaSll .framer-8f11uv-container { height: 75vh; max-height: 770px; } .framer-zaSll .framer-18dczmp { gap: 40px; padding: 76px 30px 76px 30px; } .framer-zaSll .framer-29idcm { padding: 76px 30px 76px 30px; } .framer-zaSll .framer-oj30rt { gap: 64px; padding: 76px 0px 76px 0px; } .framer-zaSll .framer-2bsilz { gap: 12px; } .framer-zaSll .framer-1inei0w { max-width: 370px; } .framer-zaSll .framer-1d352ur { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-zaSll .framer-16dvorr { flex-direction: column; } .framer-zaSll .framer-t1t6fm { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-zaSll .framer-10mobvh { flex: none; height: min-content; }}`,
        `@media (max-width: 809.98px) { .framer-zaSll.framer-72rtr7 { width: 390px; } .framer-zaSll .framer-1lgpnbu { height: 65vh; max-height: 550px; } .framer-zaSll .framer-ok4c8b { align-content: center; align-items: center; gap: 26px; padding: 68px 20px 68px 20px; } .framer-zaSll .framer-3lyf7k, .framer-zaSll .framer-xh8j4l-container, .framer-zaSll .framer-lc8mfd-container, .framer-zaSll .framer-hlcup5, .framer-zaSll .framer-1fsc3eu, .framer-zaSll .framer-tp0cla-container, .framer-zaSll .framer-6hpv4e { max-width: 450px; } .framer-zaSll .framer-1ufi4d5 { padding: 16px 0px 16px 0px; } .framer-zaSll .framer-19bt8fq { max-width: 450px; padding: 68px 0px 68px 0px; } .framer-zaSll .framer-1odln5a { flex-direction: column; height: min-content; } .framer-zaSll .framer-1mtxgfz { height: 364px; width: 100%; } .framer-zaSll .framer-1tzetpk { height: 563px; width: 100%; } .framer-zaSll .framer-1vfq3n2, .framer-zaSll .framer-1k7j8e1 { align-content: center; align-items: center; gap: 56px; padding: 68px 20px 68px 20px; } .framer-zaSll .framer-1cwuj7l { max-width: 450px; width: 100%; } .framer-zaSll .framer-13wtyzi { padding: 68px 0px 68px 0px; } .framer-zaSll .framer-8f11uv-container { height: 400px; } .framer-zaSll .framer-18dczmp { align-content: center; align-items: center; gap: 36px; padding: 68px 20px 68px 20px; } .framer-zaSll .framer-29idcm { padding: 68px 20px 68px 20px; } .framer-zaSll .framer-oj30rt { gap: 56px; padding: 68px 0px 68px 0px; } .framer-zaSll .framer-2bsilz { gap: 10px; } .framer-zaSll .framer-1inei0w { max-width: 340px; } .framer-zaSll .framer-1d352ur { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-zaSll .framer-zqqdh9 { max-width: 280px; } .framer-zaSll .framer-16dvorr { flex-direction: column; gap: 24px; } .framer-zaSll .framer-1x25mu8 { bottom: -40px; top: unset; } .framer-zaSll .framer-81xeww { flex: none; max-width: 450px; width: 100%; } .framer-zaSll .framer-482kzr { gap: 18px; }}`,
      ],
      `framer-zaSll`
    )),
    (Ef.displayName = `Home`),
    (Ef.defaultProps = { height: 9857, width: 1200 }),
    U(
      Ef,
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
        ...Td,
        ...Dd,
        ...Od,
        ...kd,
        ...jd,
        ...Nd,
        ...Fd,
        ...Id,
        ...Rd,
        ...zd,
        ...Bd,
        ...Vd,
        ...ue(It),
        ...ue(Mt),
        ...ue(at),
        ...ue(Ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Ef.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = J.get(df(), n, r),
          a = J.get(pf(), n, r),
          o = J.get(mf(), n, r),
          s = J.get(hf(), n, r),
          c = J.get(gf(), n, r),
          l = J.get(_f(), n, r),
          u = J.get(bf(), n, r),
          d = J.get(xf(), n, r),
          f = J.get(Sf(), n, r);
        return Re(
          [
            () => i.preload(),
            () => a.preload(),
            () => o.preload(),
            () => s.preload(),
            () => c.preload(),
            () => l.preload(),
            () => u.preload(),
            () => d.preload(),
            () => f.preload(),
            () => K(Cd, {}, t),
            () => K(Ir, {}, t),
            () => K(Ct, {}, t),
            () => K(Uc, {}, t),
            () => K(ct, {}, t),
            () => K(mc, {}, t),
            () => K(go, {}, t),
            () => K(Fs, {}, t),
            () => K(_t, {}, t),
            () => K(Dl, {}, t),
            async () =>
              Re(
                ((await Ee(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => K(Q, {}, t),
                  () => K(Ct, {}, t),
                ]),
                t
              ),
            async () =>
              Re(
                ((await Ee(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => K(Q, {}, t),
                  () => K(Ct, {}, t),
                ]),
                t
              ),
            async () =>
              Re(
                ((await Ee(() => o.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => K(Q, {}, t),
                  () => K(Ct, {}, t),
                ]),
                t
              ),
            async () =>
              Re(
                ((await Ee(() => s.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => K(Q, {}, t),
                  () => K(Ct, {}, t),
                ]),
                t
              ),
            async () =>
              Re(
                ((await Ee(() => c.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Dt, {}, t)),
                t
              ),
            async () =>
              Re(
                ((await Ee(() => u.readMaybeAsync(), t)) ?? []).flatMap((e) => () => K(Dt, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    (Df = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aHF3NF12v":{"layout":["fixed","auto"]},"t5gfNlrNr":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"XM4cuUJZl":{"pattern":":XM4cuUJZl","name":"Nav Trigger"},"znjIfjzQo":{"pattern":":znjIfjzQo","name":"new-arrivals"}}`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `9857`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Df as __FramerMetadata__, Ef as default, Wd as queryParamNames };
//# sourceMappingURL=hDBWAMKsWFUjEXM7xY7F6OMevsb8C33x6AEVV9yxnOY.B4hrmtGA.mjs.map
