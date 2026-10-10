import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  F as r,
  H as i,
  I as a,
  M as o,
  O as s,
  P as ee,
  R as te,
  T as ne,
  j as c,
  l,
  s as re,
  u as ie,
} from "./react.ClsXD4bF.mjs";
import {
  B as ae,
  H as oe,
  L as se,
  g as ce,
  q as le,
  r as ue,
  t as de,
  w as fe,
} from "./motion.ClyXVVeQ.mjs";
import { M as pe, T as u, Z as me, o as d } from "./framer.CbUxDv78.mjs";
var f,
  p = e(() => {
    f = (e) => e;
  }),
  m = e(() => {
    p();
  }),
  he = e(() => {
    m();
  });
function ge(e, t) {
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
var _e = e(() => {}),
  h,
  g = e(() => {
    ((h = {}),
      Object.defineProperty(h, "__esModule", { value: !0 }),
      (h.warning = function () {}),
      (h.invariant = function () {}),
      h.__esModule,
      h.warning,
      h.invariant);
  }),
  ve = e(() => {
    p();
  });
function _(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function v(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = _(e),
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
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : R[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function y(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function b({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = z.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return y(e, n);
        },
      });
    });
}
function x(e) {
  e.forEach(b);
}
function ye() {
  typeof ResizeObserver < `u` && (B = new ResizeObserver(x));
}
function S(e, t) {
  B || ye();
  let n = _(e);
  return (
    n.forEach((e) => {
      let n = z.get(e);
      (n || ((n = new Set()), z.set(e, n)), n.add(t), B?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = z.get(e);
        (n?.delete(t), (n != null && n.size) || B == null || B.unobserve(e));
      });
    }
  );
}
function C() {
  ((H = () => {
    let e = { width: i.innerWidth, height: i.innerHeight },
      t = { target: i, size: e, contentSize: e };
    V.forEach((e) => e(t));
  }),
    i.addEventListener(`resize`, H));
}
function w(e) {
  return (
    V.add(e),
    H || C(),
    () => {
      (V.delete(e), !V.size && H && (H = void 0));
    }
  );
}
function be(e, t) {
  return typeof e == `function` ? w(e) : S(e, t);
}
function T(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function E(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K = e(() => {
    (t(),
      p(),
      he(),
      _e(),
      g(),
      ve(),
      (D = [``, `X`, `Y`, `Z`]),
      (O = [`translate`, `scale`, `rotate`, `skew`]),
      (k = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (A = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: k,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: f },
        skew: k,
      }),
      (j = new Map()),
      (M = (e) => `--motion-${e}`),
      (N = [`x`, `y`, `z`]),
      O.forEach((e) => {
        D.forEach((t) => {
          (N.push(e + t), j.set(M(e + t), A[e]));
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
      (L = {}));
    for (let e in F) L[e] = () => (I[e] === void 0 && (I[e] = F[e]()), I[e]);
    ((R = { any: 0, all: 1 }),
      (z = new WeakMap()),
      (V = new Set()),
      (U = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return v(
            e,
            (r) => {
              if ((t(), E(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), E(e, `viewleave`, t));
                };
            },
            ge(r, [`once`])
          );
        },
      }),
      (W = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), T(e, t, r));
      }),
      (G = {
        inView: U,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = W(e, `hoverstart`, t),
              i = W(e, `hoverend`, n);
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
                (n(), T(e, `pressend`, t), i.removeEventListener(`pointerup`, r));
              },
              a = (n) => {
                (t(), T(e, `pressstart`, n), i.addEventListener(`pointerup`, r));
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
      [...Object.keys(G)]);
  });
function q() {
  if (!J()) return;
  let [e, t] = te(!document.hidden);
  return (
    a(() => {
      let e = () => t(!document.hidden);
      return (
        document.addEventListener(`visibilitychange`, e, !1),
        () => {
          document.removeEventListener(`visibilitychange`, e);
        }
      );
    }, []),
    e
  );
}
var J,
  Y = e(() => {
    (n(), (J = () => typeof document == `object`));
  });
function X(e) {
  let {
      slots: t = [],
      gap: n,
      padding: i,
      paddingPerSide: re,
      paddingTop: de,
      paddingRight: pe,
      paddingBottom: me,
      paddingLeft: d,
      speed: f,
      hoverFactor: p,
      direction: m,
      alignment: he,
      sizingOptions: ge,
      fadeOptions: _e,
      style: h,
    } = e,
    { fadeContent: g, overflow: ve, fadeWidth: _, fadeInset: v, fadeAlpha: y } = _e,
    { widthType: b, heightType: x } = ge,
    ye = re ? `${de}px ${pe}px ${me}px ${d}px` : `${i}px`,
    S = u.current(),
    C = S === u.canvas || S === u.export,
    w = t.filter(Boolean),
    T = s.count(w),
    E = T > 0;
  m === !0 && (m = `left`);
  let D = m === `left` || m === `right`,
    O = ae(0),
    k = xe[m];
  le(O, k);
  let A = c(null),
    j = ee(() => [{ current: null }, { current: null }], []),
    [M, N] = te({ parent: null, children: null }),
    P = null,
    F = [],
    I = 0,
    L = 0;
  (C && ((I = T ? Math.floor(10 / T) : 0), (L = 1)),
    !C &&
      E &&
      M.parent &&
      ((I = Math.round((M.parent / M.children) * 2) + 1), (I = Math.min(I, Z)), (L = 1)));
  let R = r(() => {
      if (E && A.current) {
        let e = D ? A.current.offsetWidth : A.current.offsetHeight,
          t = j[0].current ? (D ? j[0].current.offsetLeft : j[0].current.offsetTop) : 0,
          r =
            (j[1].current
              ? D
                ? j[1].current.offsetLeft + j[1].current.offsetWidth
                : j[1].current.offsetTop + j[1].current.offsetHeight
              : 0) -
            t +
            n;
        N({ parent: e, children: r });
      }
    }, []),
    z = C ? { contentVisibility: `auto` } : {};
  if (E) {
    if (!C) {
      let e = c(!0);
      ne(
        () => (
          ce.read(R, !1, !0),
          be(A.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && ce.read(R, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    P = s.map(w, (e, t) => {
      let n;
      (t === 0 && (n = j[0]), t === w.length - 1 && (n = j[1]));
      let r = { width: b ? e.props?.width : `100%`, height: x ? e.props?.height : `100%` };
      return l(ue, {
        inherit: `id`,
        children: l(`li`, {
          ref: n,
          style: r,
          children: o(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...z },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let B = C ? !0 : se(A);
  if (!C)
    for (let e = 0; e < I; e++)
      F = F.concat(
        s.map(w, (t, n) =>
          l(
            ue,
            {
              inherit: `id`,
              children: l(
                `li`,
                {
                  style: {
                    width: b ? t.props?.width : `100%`,
                    height: x ? t.props?.height : `100%`,
                    willChange: B ? `transform` : void 0,
                  },
                  "aria-hidden": !0,
                  children: o(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: b ? t.props?.width : `100%`,
                        height: x ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...z,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          )
        )
      );
  let V = M.children + M.children * Math.round(M.parent / M.children);
  (c(null), c(null), c(0));
  let H = c(!1),
    U = oe(),
    W = c(null),
    G = c(null);
  if (!C) {
    a(() => {
      if (!(U || !V || !f))
        return (
          (G.current = W.current.animate(
            { transform: [k(0), k(V)] },
            { duration: (Math.abs(V) / f) * 1e3, iterations: 1 / 0, easing: `linear` }
          )),
          () => G.current.cancel()
        );
    }, [p, V, f]);
    let e = r(() => {
      if (!G.current) return;
      let e = document.hidden;
      B && !e && G.current.playState === `paused`
        ? G.current.play()
        : (!B || e) && G.current.playState === `running` && G.current.pause();
    }, [B]);
    (a(() => {
      e();
    }, [B, p, V, f]),
      a(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let K = D ? `to right` : `to bottom`,
    q = _ / 2,
    J = 100 - _ / 2,
    Y = `linear-gradient(${K}, rgba(0, 0, 0, ${y}) ${Ee(v, 0, q)}%, rgba(0, 0, 0, 1) ${q}%, rgba(0, 0, 0, 1) ${J}%, rgba(0, 0, 0, ${y}) ${100 - v}%)`;
  return E
    ? l(`section`, {
        style: {
          ...Q,
          opacity: L,
          WebkitMaskImage: g ? Y : void 0,
          maskImage: g ? Y : void 0,
          overflow: ve ? `visible` : `hidden`,
          padding: ye,
        },
        ref: A,
        children: ie(fe.ul, {
          ref: W,
          style: {
            ...Q,
            gap: n,
            top: m === `bottom` && $(V) ? -V : void 0,
            left: m === `right` && $(V) ? -V : void 0,
            placeItems: he,
            position: `relative`,
            flexDirection: D ? `row` : `column`,
            ...h,
            willChange: C || !B ? `auto` : `transform`,
            transform: k(0),
          },
          onMouseEnter: () => {
            ((H.current = !0), G.current && (G.current.playbackRate = p));
          },
          onMouseLeave: () => {
            ((H.current = !1), G.current && (G.current.playbackRate = 1));
          },
          children: [P, F],
        }),
      })
    : ie(`section`, {
        style: Se,
        children: [
          l(`div`, { style: Ce, children: `✨` }),
          l(`p`, { style: we, children: `Connect to Content` }),
          l(`p`, {
            style: Te,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var Z,
  xe,
  Q,
  Se,
  Ce,
  we,
  Te,
  Ee,
  $,
  De = e(() => {
    (re(),
      n(),
      me(),
      de(),
      K(),
      (Z = 100),
      (xe = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (X.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      pe(X, {
        slots: { type: d.Array, title: `Children`, control: { type: d.ComponentInstance } },
        speed: {
          type: d.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: d.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: d.Enum,
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
        gap: { type: d.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: d.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: d.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: d.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: d.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: d.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: d.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: d.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: d.Number,
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
              type: d.Number,
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
              type: d.Number,
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
        hoverFactor: {
          type: d.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Q = {
        display: `flex`,
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
      (Se = {
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
      (Ce = { fontSize: 32, marginBottom: 10 }),
      (we = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Te = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Ee = (e, t, n) => Math.min(Math.max(e, t), n)),
      ($ = (e) => typeof e == `number` && !isNaN(e)));
  });
export { K as a, q as i, De as n, be as o, Y as r, X as t };
//# sourceMappingURL=Ticker.Dle-YLHL.mjs.map
