import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  H as i,
  L as a,
  P as o,
  S as s,
  T as c,
  _ as l,
  c as u,
  h as d,
  j as f,
  l as p,
  o as m,
  w as h,
  x as g,
} from "./react.CWoGm2_e.mjs";
import {
  C as _,
  K as v,
  L as y,
  P as ee,
  R as te,
  S as ne,
  W as b,
  f as re,
  h as ie,
  r as x,
  t as S,
} from "./motion.DjW49AAR.mjs";
import { Et as C, X as ae, j as w, o as T, w as oe } from "./framer.D9PtOJZM.mjs";
var E,
  D = e(() => {
    E = (e) => e;
  }),
  se = e(() => {
    D();
  }),
  O = e(() => {
    se();
  });
function ce(e, t) {
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
var le = e(() => {}),
  k,
  ue = e(() => {
    ((k = {}),
      Object.defineProperty(k, "__esModule", { value: !0 }),
      (k.warning = function () {}),
      (k.invariant = function () {}),
      k.__esModule,
      k.warning,
      k.invariant);
  }),
  de = e(() => {
    D();
  });
function fe(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function pe(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = fe(e),
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
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Oe[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function me(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function he({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = L.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return me(e, n);
        },
      });
    });
}
function ge(e) {
  e.forEach(he);
}
function _e() {
  typeof ResizeObserver < `u` && (R = new ResizeObserver(ge));
}
function ve(e, t) {
  R || _e();
  let n = fe(e);
  return (
    n.forEach((e) => {
      let n = L.get(e);
      (n || ((n = new Set()), L.set(e, n)), n.add(t), R?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = L.get(e);
        (n?.delete(t), (n != null && n.size) || R == null || R.unobserve(e));
      });
    }
  );
}
function ye() {
  ((B = () => {
    let e = { width: i.innerWidth, height: i.innerHeight },
      t = { target: i, size: e, contentSize: e };
    z.forEach((e) => e(t));
  }),
    i.addEventListener(`resize`, B));
}
function be(e) {
  return (
    z.add(e),
    B || ye(),
    () => {
      (z.delete(e), !z.size && B && (B = void 0));
    }
  );
}
function xe(e, t) {
  return typeof e == `function` ? be(e) : ve(e, t);
}
function A(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function Se(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var Ce,
  j,
  M,
  we,
  Te,
  Ee,
  N,
  P,
  F,
  I,
  De,
  Oe,
  L,
  R,
  z,
  B,
  ke,
  V,
  Ae,
  je = e(() => {
    (n(),
      D(),
      O(),
      le(),
      ue(),
      de(),
      (Ce = [``, `X`, `Y`, `Z`]),
      (j = [`translate`, `scale`, `rotate`, `skew`]),
      (M = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (we = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: M,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: E },
        skew: M,
      }),
      (Te = new Map()),
      (Ee = (e) => `--motion-${e}`),
      (N = [`x`, `y`, `z`]),
      j.forEach((e) => {
        Ce.forEach((t) => {
          (N.push(e + t), Te.set(Ee(e + t), we[e]));
        });
      }),
      new Set(N),
      (P = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (F = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            P({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!P({ opacity: [0, 1] }).finished,
      }),
      (I = {}),
      (De = {}));
    for (let e in F) De[e] = () => (I[e] === void 0 && (I[e] = F[e]()), I[e]);
    ((Oe = { any: 0, all: 1 }),
      (L = new WeakMap()),
      (z = new Set()),
      (ke = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return pe(
            e,
            (r) => {
              if ((t(), Se(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), Se(e, `viewleave`, t));
                };
            },
            ce(r, [`once`])
          );
        },
      }),
      (V = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), A(e, t, r));
      }),
      (Ae = {
        inView: ke,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = V(e, `hoverstart`, t),
              i = V(e, `hoverend`, n);
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
                (n(), A(e, `pressend`, t), i.removeEventListener(`pointerup`, r));
              },
              a = (n) => {
                (t(), A(e, `pressstart`, n), i.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, a),
              () => {
                (e.removeEventListener(`pointerdown`, a), i.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Ae)]);
  });
function Me() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function Ne(e) {
  let t = g.useRef(Me);
  return (
    g.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      Fe() && Me();
      let n = t.current;
      return n(...e);
    }
  );
}
var Pe,
  Fe,
  Ie = e(() => {
    (h(),
      (Pe = g.createContext(!0)),
      (Fe =
        `use` in g
          ? () => {
              try {
                return g.use(Pe);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function Le(e) {
  let {
      slots: n = [],
      startFrom: d,
      direction: f,
      effectsOptions: m,
      autoPlayControl: h,
      dragControl: g,
      alignment: ne,
      gap: x,
      padding: S,
      paddingPerSide: C,
      paddingTop: ae,
      paddingRight: w,
      paddingBottom: T,
      paddingLeft: E,
      itemAmount: D,
      fadeOptions: se,
      intervalControl: O,
      transitionControl: ce,
      arrowOptions: le,
      borderRadius: k,
      progressOptions: ue,
      style: de,
    } = e,
    {
      effectsOpacity: fe,
      effectsScale: pe,
      effectsRotate: me,
      effectsPerspective: he,
      effectsHover: ge,
      playOffscreen: _e,
    } = m,
    { fadeContent: ve, overflow: ye, fadeWidth: be, fadeInset: A, fadeAlpha: Se } = se,
    {
      showMouseControls: Ce,
      arrowSize: j,
      arrowRadius: M,
      arrowFill: we,
      leftArrow: Te,
      rightArrow: Ee,
      arrowShouldSpace: N = !0,
      arrowShouldFadeIn: P = !1,
      arrowPosition: F,
      arrowPadding: I,
      arrowGap: De,
      arrowPaddingTop: Oe,
      arrowPaddingRight: L,
      arrowPaddingBottom: R,
      arrowPaddingLeft: z,
    } = le,
    {
      showProgressDots: B,
      dotSize: ke,
      dotsInset: V,
      dotsRadius: Ae,
      dotsPadding: je,
      dotsGap: Me,
      dotsFill: Pe,
      dotsBackground: Fe,
      dotsActiveOpacity: Ie,
      dotsOpacity: Le,
      dotsBlur: Re,
    } = ue,
    Be = C ? `${ae}px ${w}px ${T}px ${E}px` : `${S}px`,
    H = oe.current() === oe.canvas,
    U = n.filter(Boolean),
    W = c.count(U);
  if (!(W > 0))
    return p(`section`, {
      style: Ke,
      children: [
        u(`div`, { style: qe, children: `⭐️` }),
        u(`p`, { style: Je, children: `Connect to Content` }),
        u(`p`, {
          style: Ye,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let G = t(null),
    rt = t(null),
    it = o((e) => {
      ((G.current = e), G.current && _t());
    }, []),
    [K, at] = a({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    q = f === `left` || f === `right`,
    J = ze(),
    Y = q && J === `rtl` ? -1 : 1,
    [ot, st] = a(!1),
    [ct, lt] = a(h),
    [ut, dt] = a(!1),
    X = K?.item !== null && K?.parent !== null && J !== null,
    ft = Math.ceil((d + D) / W),
    pt = [],
    mt = ft * 4;
  (H || !X) && (mt = ft);
  let [Z, ht] = a(d + W);
  r(() => {
    if (!K.item || !J) return;
    let e = -1 * Z * ((K.item ?? 0) + x) * (J === `rtl` ? -1 : 1);
    Q.get() !== e && re(Q, e, ce);
  }, [Z, K.item, x, J]);
  let gt = () => {
      let e = rt.current;
      if (!e) return;
      let t = e.width,
        n = e.height,
        r = q ? t : n,
        a = Math.max(1, D),
        o = Math.max(0, (r - x * (a - 1)) / a),
        s = W * (o + x),
        c = q ? o : t,
        l = q ? n : o,
        u = q
          ? Math.max(document.documentElement.clientWidth || 0, i.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, i.innerHeight || 0, n);
      at({ parent: r, children: s, item: o, itemWidth: c, itemHeight: l, viewportLength: u });
    },
    _t = Ne(() => {
      ie.read(gt, !1, !0);
    });
  (s(() => {
    _t();
  }, [U.length, D, x, f, S, C, ae, w, T, E]),
    r(() => {
      let e = G.current;
      if (e)
        return xe(e, ({ size: e }) => {
          ((rt.current = e), !(!e.width || !e.height) && _t());
        });
    }, []));
  let vt = H ? 0 : K?.children,
    [yt, bt] = a(!1),
    xt = t(null),
    St = ee(xt),
    Ct = te() && St,
    Q = y(vt),
    wt = H
      ? y(0)
      : b(Q, (e) => {
          let t = vt ?? 0,
            n = e ?? 0,
            r = v(-t * Y, -t * Y * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    Tt = v(0, W, Z),
    $ = (e) => {
      l(() => ht((t) => t + e));
    },
    Et = (e) => {
      let t = e - v(0, W, Z);
      l(() => ht((e) => e + t));
    },
    Dt = (f === `right` || f === `bottom` ? -1 : 1) * Y,
    Ot = h && ct && (_e || Ct) && !H && W > 1 && !yt && X;
  r(() => {
    if (!Ot) return;
    let e = setTimeout(() => {
      $(Dt);
    }, O * 1e3);
    return () => clearTimeout(e);
  }, [Ot, Dt, O, Z]);
  let kt = () => {
      l(() => bt(!0));
    },
    At = (e, { offset: t, velocity: n }) => {
      l(() => bt(!1));
      let r = q ? t.x : t.y,
        i = q ? n.x : n.y,
        a = r < -K.item / 2,
        o = r > K.item / 2,
        s = Math.round(Math.abs(r) / K.item),
        c = s === 0 ? 1 : s;
      i > 200 ? $(-c * Y) : i < -200 ? $(c * Y) : (a && $(s * Y), o && $(-s * Y));
    },
    jt = Math.max(0, Math.min(d ?? 0, Math.max(0, W - 1))),
    Mt = (jt * 100) / D,
    Nt = (jt * x) / D,
    Pt = 0,
    Ft = `calc(${100 / D}% - ${x}px + ${x / D}px)`;
  for (let e = 0; e < mt; e++)
    pt = pt.concat(
      c.map(U, (t, n) =>
        u(
          $e,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: q && D > 1 ? Ft : `100%`,
            height: q ? `100%` : D > 1 ? Ft : `100%`,
            size: K,
            child: t,
            numChildren: U?.length,
            wrappedXOrY: wt,
            childCounter: Pt++,
            gap: x,
            isCanvas: H,
            isInitialized: X,
            isHorizontal: q,
            effectsOpacity: fe,
            effectsScale: pe,
            effectsRotate: me,
            writingDirection: J,
            rtlDirectionModifier: Y,
            children: e + n,
          },
          e + n + `lg`
        )
      )
    );
  let It = q ? `to right` : `to bottom`,
    Lt = be / 2,
    Rt = 100 - be / 2,
    zt = `linear-gradient(${It}, rgba(0, 0, 0, ${Se}) ${Qe(A, 0, Lt)}%, rgba(0, 0, 0, 1) ${Lt}%, rgba(0, 0, 0, 1) ${Rt}%, rgba(0, 0, 0, ${Se}) ${100 - A}%)`,
    Bt = [],
    Vt = {};
  if (B) {
    for (let e = 0; e < U?.length; e++)
      Bt.push(
        u(
          et,
          {
            dotStyle: { ...nt, width: ke, height: ke, backgroundColor: Pe },
            buttonStyle: Xe,
            selectedOpacity: Ie,
            opacity: Le,
            disabled: !H && !X,
            onClick: () => Et(e),
            wrappedIndex: H || !X ? jt : Tt,
            total: W,
            index: e,
            gap: Me,
            padding: je,
            isHorizontal: q,
          },
          e
        )
      );
    Re > 0 && (Vt.backdropFilter = Vt.WebkitBackdropFilter = `blur(${Re}px)`);
  }
  let Ht =
      X && g
        ? {
            drag: q ? `x` : `y`,
            onDragStart: kt,
            onDragEnd: At,
            dragDirectionLock: !0,
            values: { x: Q, y: Q },
            dragMomentum: !1,
          }
        : {},
    Ut = F === `top-left` || F === `top-mid` || F === `top-right`,
    Wt = F === `bottom-left` || F === `bottom-mid` || F === `bottom-right`,
    Gt = F === `top-left` || F === `bottom-left`,
    Kt = F === `top-right` || F === `bottom-right`,
    qt = F === `top-mid` || F === `bottom-mid` || F === `auto`,
    Jt = Te || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Yt = Ee || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return p(`section`, {
    className: `${Ve} ${q ? He : Ue}`,
    style: {
      ...Ge,
      padding: Be,
      WebkitMaskImage: ve ? zt : void 0,
      maskImage: ve ? zt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (st(!0), ge || lt(!1));
    },
    onMouseLeave: () => {
      (st(!1), ge || lt(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), l(() => dt(!0)));
    },
    onMouseUp: () => l(() => dt(!1)),
    ref: xt,
    children: [
      u(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: ye ? `visible` : `hidden`,
          borderRadius: k,
          userSelect: `none`,
          perspective: H ? `none` : he,
        },
        children: u(_.ul, {
          ref: it,
          ...Ht,
          style: {
            ...Ge,
            gap: x,
            placeItems: ne,
            ...(H || !X
              ? {
                  transform: q
                    ? `translateX(calc(${We} * (${Mt}% + ${Nt}px)))`
                    : `translateY(calc(${We} * (${Mt}% + ${Nt}px)))`,
                }
              : { x: q ? wt : 0, y: q ? 0 : wt }),
            flexDirection: q ? `row` : `column`,
            transformStyle: me !== 0 && !H ? `preserve-3d` : void 0,
            cursor: (H || X) && g ? (ut ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...de,
          },
          children: pt,
        }),
      }),
      p(`fieldset`, {
        style: { ...Ze },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          p(_.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: q ? `row` : `column`,
              justifyContent: N ? `space-between` : `center`,
              gap: N ? `unset` : De,
              opacity: P || (!H && !X) ? 0 : 1,
              alignItems: `center`,
              inset: I,
              top: N ? I : Ut ? Oe : `unset`,
              left: N ? I : Gt ? z : qt ? 0 : `unset`,
              right: N ? I : Kt ? L : qt ? 0 : `unset`,
              bottom: N ? I : Wt ? R : `unset`,
            },
            animate: H || X ? (P ? { opacity: +!!ot } : { opacity: 1 }) : { opacity: 0 },
            transition: ce,
            children: [
              u(_.button, {
                type: `button`,
                style: {
                  ...Xe,
                  backgroundColor: we,
                  width: j,
                  height: j,
                  borderRadius: M,
                  rotate: q ? 0 : 90,
                  display: Ce ? `block` : `none`,
                  pointerEvents: H || X ? `auto` : `none`,
                  cursor: H || X ? `pointer` : `default`,
                },
                disabled: !(H || X),
                onClick: () => $(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: u(`img`, {
                  decoding: `async`,
                  width: j,
                  height: j,
                  src: q && J === `rtl` ? Yt : Jt,
                  alt: `Back Arrow`,
                }),
              }),
              u(_.button, {
                type: `button`,
                style: {
                  ...Xe,
                  backgroundColor: we,
                  width: j,
                  height: j,
                  borderRadius: M,
                  rotate: q ? 0 : 90,
                  display: Ce ? `block` : `none`,
                  pointerEvents: H || X ? `auto` : `none`,
                  cursor: H || X ? `pointer` : `default`,
                },
                disabled: !(H || X),
                onClick: () => $(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: u(`img`, {
                  decoding: `async`,
                  width: j,
                  height: j,
                  src: q && J === `rtl` ? Jt : Yt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Bt.length > 1
            ? u(_.div, {
                style: {
                  ...tt,
                  left: q ? `50%` : V,
                  top: q ? `unset` : `50%`,
                  transform: q ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: q ? `row` : `column`,
                  bottom: q ? V : `unset`,
                  borderRadius: Ae,
                  backgroundColor: Fe,
                  userSelect: `none`,
                  ...Vt,
                  opacity: +!!H,
                  pointerEvents: H || X ? `auto` : `none`,
                },
                animate: { opacity: +!!X },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Bt,
              })
            : null,
        ],
      }),
    ],
  });
}
function Re() {
  return i?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function ze() {
  let [e, t] = a(null);
  return (
    r(
      () => (
        t(Re()),
        Be(() => {
          t(Re());
        })
      ),
      []
    ),
    e
  );
}
function Be(e) {
  return (
    G.push(e),
    W ||
      ((W = new MutationObserver(() => G.forEach((e) => e()))),
      W.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (G.splice(G.indexOf(e), 1), G.length === 0 && (W?.disconnect(), (W = null)));
    }
  );
}
var Ve,
  He,
  Ue,
  H,
  We,
  U,
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
  W,
  G,
  rt = e(() => {
    (n(),
      m(),
      je(),
      ae(),
      S(),
      h(),
      Ie(),
      (Ve = `framer-slideshow`),
      (He = `framer-slideshow-axis-x`),
      (Ue = `framer-slideshow-axis-y`),
      (H = `--framer-dir-multiplier`),
      (We = `var(${H}, -1)`),
      (U = C(
        Le,
        [`.${He} { ${H}: -1; }`, `html[dir="rtl"] .${He} { ${H}: 1; }`, `.${Ue} { ${H}: -1; }`],
        `framer-slideshow-component`
      )),
      (U.defaultProps = {
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
      w(U, {
        slots: { type: T.Array, title: `Content`, control: { type: T.ComponentInstance } },
        direction: {
          type: T.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: U.defaultProps.direction,
        },
        autoPlayControl: { type: T.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: T.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: T.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: T.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: U.defaultProps.startFrom,
        },
        effectsOptions: {
          type: T.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: T.Number,
              title: `Opacity`,
              defaultValue: U.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: T.Number,
              title: `Scale`,
              defaultValue: U.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: T.Number,
              title: `Perspective`,
              defaultValue: U.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: T.Number,
              title: `Rotate`,
              defaultValue: U.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: T.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: U.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: T.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: U.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: T.Enum,
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
          type: T.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: U.defaultProps.itemAmount,
        },
        gap: { type: T.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: T.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: T.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: T.Transition,
          defaultValue: U.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: T.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: T.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: T.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: T.Number,
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
              type: T.Number,
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
              type: T.Number,
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
          type: T.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: T.Boolean,
              title: `Show`,
              defaultValue: U.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: T.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: U.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: T.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: T.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: T.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: U.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: T.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: T.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: T.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: U.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: T.Enum,
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
              type: T.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: T.Number,
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
              type: T.Number,
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
              type: T.Number,
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
              type: T.Number,
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
              type: T.Number,
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
          type: T.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: T.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: T.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: T.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: T.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: T.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: T.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: T.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: T.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: T.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: T.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: T.Number,
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
      (Ge = {
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
      (Ke = {
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
      (qe = { fontSize: 32, marginBottom: 10 }),
      (Je = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Ye = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (Xe = {
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
      (Ze = {
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
      (Qe = (e, t, n) => Math.min(Math.max(e, t), n)),
      ($e = d(function (e) {
        let {
            slideKey: n,
            width: i,
            height: a,
            child: o,
            size: s,
            gap: c,
            wrappedXOrY: l,
            numChildren: d,
            childCounter: p,
            isCanvas: m,
            isInitialized: h,
            effectsOpacity: g,
            effectsScale: _,
            effectsRotate: v,
            isHorizontal: y,
            index: ee,
            writingDirection: te,
            rtlDirectionModifier: re,
          } = e,
          ie = t(null),
          S = s?.item ?? 0,
          C = s?.parent ?? 0,
          ae = (S + c) * p,
          w = (y && te === `rtl` ? [S - c, 0, -C + S - c, -C - c] : [-S, 0, C - S + c, C]).map(
            (e) => e - ae * re
          ),
          T = !m && b(l, w, y && te === `rtl` ? [v, 0, 0, -v] : [-v, 0, 0, v]),
          oe = !m && b(l, w, [v, 0, 0, -v]),
          E = !m && b(l, w, [g, 1, 1, g]),
          D = !m && b(l, w, [_, 1, 1, _]),
          se = !m && b(l, w, y && te === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          O =
            !m &&
            b(l, (e) => {
              let t = Math.min(w[1], w[2]),
                n = Math.max(w[1], w[2]);
              return e >= t && e <= n;
            });
        r(() => {
          if (!O || !h) return;
          function e(e) {
            let t = ie?.current;
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
            e(O.get()),
            O.on(`change`, (t) => {
              e(t);
            })
          );
        }, [h]);
        let ce = m
            ? `visible`
            : b(
                l,
                [w[0] - s.viewportLength * re, ne(w[1], w[2], 0.5), w[3] + s.viewportLength * re],
                [`hidden`, `visible`, `hidden`]
              ),
          le = n + `child`;
        return u(x, {
          inherit: `id`,
          id: le,
          children: u(`li`, {
            style: { display: `contents` },
            children: f(o, {
              ref: ie,
              key: le,
              style: {
                ...o.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: i,
                height: a,
                ...(h
                  ? {
                      opacity: E,
                      scale: D,
                      originX: y ? se : 0.5,
                      originY: y ? 0.5 : se,
                      rotateY: y ? T : 0,
                      rotateX: y ? 0 : oe,
                      visibility: ce,
                    }
                  : {}),
              },
              layoutId: o.props.layoutId ? o.props.layoutId + `-original-` + ee : void 0,
            }),
          }),
        });
      })),
      (et = d(function ({
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
        ...d
      }) {
        let f = i === r,
          p = s / 2,
          m = !l && r !== 0 ? p : c,
          h = !l && r !== n - 1 ? p : c,
          g = l ? (r === 0 ? c : p) : c,
          v = l ? (r === n - 1 ? c : p) : c;
        return u(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...d,
          style: {
            ...o,
            paddingTop: m,
            paddingBottom: h,
            paddingInlineStart: g,
            paddingInlineEnd: v,
          },
          children: u(_.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: f ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (tt = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (nt = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (W = null),
      (G = []));
  });
export { rt as n, U as t };
//# sourceMappingURL=SlideShow.C8M3m8gr.mjs.map
