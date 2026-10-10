import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  I as i,
  L as a,
  M as o,
  N as s,
  c,
  g as l,
  l as u,
  o as d,
  w as f,
  y as ee,
} from "./react.CWoGm2_e.mjs";
import { C as p, a as m, n as h, r as g, t as _ } from "./motion.DjW49AAR.mjs";
import {
  A as v,
  D as y,
  Et as b,
  H as x,
  I as S,
  Ot as C,
  P as w,
  S as T,
  U as E,
  W as D,
  X as O,
  _t as te,
  a as k,
  ct as ne,
  d as A,
  dt as re,
  f as ie,
  ft as ae,
  i as j,
  j as oe,
  kt as M,
  m as se,
  mt as ce,
  o as N,
  s as le,
  vt as ue,
  yt as P,
} from "./framer.D9PtOJZM.mjs";
import { i as de, n as fe, r as pe, t as me } from "./XpyIAZm8_.Cs_BA23M.mjs";
import { a as he, c as ge, i as _e, o as ve, r as ye, s as F } from "./shared-lib.Cln7NIgD.mjs";
import { n as be, t as I } from "./d45iZ4nbf.DzNFo8IJ.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./zWe8uO5eV.D_hz-QQE.mjs";
import Te, { t as Ee } from "./ynnKQoxlYZG32qAtuMfIn2KKLlvscefMIxGSjfnminQ._hrbBh4n.mjs";
function De(e) {
  let t = le({ state: Object.freeze({ ...e }) }),
    n = (e) => {
      (typeof e == `function` && (e = e(t.state)), (t.state = Object.freeze({ ...t.state, ...e })));
    },
    i = typeof e == `object` ? Object.freeze({ ...e }) : e,
    o = new Set(),
    s = (e) => {
      (typeof e == `function` && (e = e(i)),
        (i = typeof e == `object` ? Object.freeze({ ...i, ...e }) : e),
        o.forEach((e) => e(i)));
    };
  function c() {
    let [e, c] = a(i);
    return (r(() => (o.add(c), () => o.delete(c)), []), P() === !0 ? (P(), [t.state, n]) : [e, s]);
  }
  return c;
}
var Oe = e(() => {
    (f(), O());
  }),
  ke = e(() => {
    Oe();
  }),
  L,
  Ae = e(() => {
    (n(),
      d(),
      O(),
      ke(),
      (L = ({ title: e, description: t, containerStyle: n }) =>
        u(`div`, {
          style: {
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            textAlign: `center`,
            justifyContent: `center`,
            backgroundColor: `rgba(136, 85, 255, 0.1)`,
            overflow: `hidden`,
            ...n,
          },
          children: [
            c(`span`, {
              role: `img`,
              "aria-label": `icon`,
              style: { fontSize: `32px` },
              children: `✨`,
            }),
            u(`div`, {
              style: { maxWidth: `240px` },
              children: [
                c(`h1`, { style: { fontSize: 11, color: `#96F`, fontWeight: 600 }, children: e }),
                c(`p`, {
                  style: { fontSize: 11, color: `rgba(153, 102, 255, 0.7)`, lineHeight: 1.5 },
                  children: t,
                }),
              ],
            }),
          ],
        })),
      N.Object,
      N.Color,
      N.Number,
      N.Number,
      N.Number,
      N.Enum,
      N.Number,
      De({
        initialLimit: void 0,
        initialOffset: void 0,
        limit: void 0,
        offset: void 0,
        totalItems: void 0,
        page: 1,
        searchQuery: ``,
        totalPages: void 0,
      }));
  }),
  je = e(() => {
    Ae();
  });
function Me(e) {
  let [t, n] = a(!1);
  return (
    r(() => {
      let t = !0;
      return (
        (async () => {
          let r = e.map(
            (e) =>
              new Promise((t, n) => {
                let r = new Image();
                ((r.src = e), (r.onload = t), (r.onerror = n));
              })
          );
          try {
            (await Promise.all(r), t && n(!0));
          } catch (e) {
            console.error(`Failed to preload images:`, e);
          }
        })(),
        () => {
          t = !1;
        }
      );
    }, [e]),
    t
  );
}
function R({
  images: e = [],
  style: n = { width: 100, height: 100, radius: 0, fit: `fill` },
  frequency: i = 50,
  visibleFor: o = 1,
  perspective: s = { enabled: !1, value: 1e3 },
  animation: l = {
    in: {
      from: {
        opacity: 0,
        scale: 0.5,
        blur: 8,
        is3D: `2D`,
        rotate2D: 0,
        rotate3D: { x: 0, y: 0, z: 0 },
      },
      to: {
        opacity: 1,
        scale: 1,
        blur: 0,
        is3D: `2D`,
        rotate2D: 0,
        rotate3D: { x: 0, y: 0, z: 0 },
      },
      transition: { type: `spring`, stiffness: 300, damping: 30 },
    },
    out: {
      opacity: 0,
      scale: 0.5,
      blur: 8,
      is3D: `2D`,
      rotate2D: 0,
      rotate3D: { x: 0, y: 0, z: 0 },
      transition: { type: `spring`, stiffness: 300, damping: 30 },
    },
  },
  ...u
}) {
  let d = 200 - ((i - 1) * 199) / 49,
    [f, ee] = a({ x: 0, y: 0 }),
    [m, g] = a(!1),
    [_, v] = a(0),
    [y, b] = a([]),
    [x, S] = a(!1),
    C = t(null),
    w = Me(x ? e : []);
  r(() => {
    let e = new IntersectionObserver(
      ([e]) => {
        S(e.isIntersecting);
      },
      { root: null, rootMargin: `0px`, threshold: 0.1 }
    );
    return (
      C.current && e.observe(C.current),
      () => {
        C.current && e.unobserve(C.current);
      }
    );
  }, []);
  let T = (e) => {
      let t = e.currentTarget.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top;
      ee({ x: n, y: r });
    },
    E = () => {
      g(!0);
    },
    D = () => {
      g(!1);
    };
  return (
    r(() => {
      if (m && e.length > 0) {
        let t = y[y.length - 1];
        if ((t ? Math.hypot(f.x - t.x, f.y - t.y) : 1 / 0) > d) {
          let t = {
            id: Math.random(),
            position: _,
            x: f.x,
            y: f.y,
            createdAt: Date.now(),
            state: `entering`,
          };
          (b((e) => [...e, t]),
            v((t) => (t + 1) % e.length),
            setTimeout(() => {
              b((e) => e.map((e) => (e.id === t.id ? { ...e, state: `exiting` } : e)));
            }, o * 1e3),
            setTimeout(() => {
              b((e) => e.filter((e) => e.id !== t.id));
            }, 1e4));
        }
      }
    }, [f, m, e, d, _, o]),
    e.length === 0
      ? c(L, {
          title: `Set Up the Component`,
          description: `Add images to the component through the 'Images' property on the right panel. Then preview the website, and hover over the component.`,
          containerStyle: { ...u.style, width: `100%`, height: `100%` },
        })
      : c(A, {
          ...u,
          ref: C,
          onMouseMove: T,
          onMouseEnter: E,
          onMouseLeave: D,
          background: ``,
          children:
            w &&
            c(h, {
              children: y.map(({ id: t, position: r, x: i, y: a, state: o }) =>
                c(
                  p.div,
                  {
                    initial: {
                      opacity: l.in.from.opacity,
                      scale: l.in.from.scale,
                      filter: `blur(${l.in.from.blur}px)`,
                      x: i - n.width / 2,
                      y: a - n.height / 2,
                      rotate: l.in.from.is3D === `2D` ? l.in.from.rotate2D : 0,
                      rotateX: l.in.from.is3D === `3D` ? l.in.from.rotate3D.x : 0,
                      rotateY: l.in.from.is3D === `3D` ? l.in.from.rotate3D.y : 0,
                      rotateZ: l.in.from.is3D === `3D` ? l.in.from.rotate3D.z : 0,
                    },
                    animate:
                      o === `entering`
                        ? {
                            opacity: l.in.to.opacity,
                            scale: l.in.to.scale,
                            filter: `blur(${l.in.to.blur}px)`,
                            x: i - n.width / 2,
                            y: a - n.height / 2,
                            rotate: l.in.to.is3D === `2D` ? l.in.to.rotate2D : 0,
                            rotateX: l.in.to.is3D === `3D` ? l.in.to.rotate3D.x : 0,
                            rotateY: l.in.to.is3D === `3D` ? l.in.to.rotate3D.y : 0,
                            rotateZ: l.in.to.is3D === `3D` ? l.in.to.rotate3D.z : 0,
                          }
                        : {
                            opacity: l.out.opacity,
                            scale: l.out.scale,
                            filter: `blur(${l.out.blur}px)`,
                            x: i - n.width / 2,
                            y: a - n.height / 2,
                            rotate: l.out.is3D === `2D` ? l.out.rotate2D : 0,
                            rotateX: l.out.is3D === `3D` ? l.out.rotate3D.x : 0,
                            rotateY: l.out.is3D === `3D` ? l.out.rotate3D.y : 0,
                            rotateZ: l.out.is3D === `3D` ? l.out.rotate3D.z : 0,
                          },
                    transition: o === `entering` ? l.in.transition : l.out.transition,
                    style: {
                      position: `absolute`,
                      width: `${n.width}px`,
                      height: `${n.height}px`,
                      backgroundImage: `url(${e[r] ?? ``})`,
                      backgroundSize: n.fit === `fill` ? `cover` : `contain`,
                      backgroundPosition: `center`,
                      backgroundRepeat: `no-repeat`,
                      borderRadius: `${n.radius}px`,
                      pointerEvents: `none`,
                      perspective: s.enabled ? `${s.value}px` : `none`,
                    },
                  },
                  t
                )
              ),
            }),
        })
  );
}
var Ne = e(() => {
    (d(),
      f(),
      O(),
      _(),
      je(),
      (R.displayName = `Cursor Image Trail`),
      oe(R, {
        images: { type: N.Array, title: `Images`, propertyControl: { type: N.Image } },
        style: {
          type: N.Object,
          title: `Style`,
          controls: {
            width: {
              type: N.Number,
              title: `Width`,
              defaultValue: 100,
              min: 0,
              max: 1e3,
              unit: `px`,
              step: 1,
              displayStepper: !0,
            },
            height: {
              type: N.Number,
              title: `Height`,
              defaultValue: 100,
              min: 0,
              max: 1e3,
              unit: `px`,
              step: 1,
              displayStepper: !0,
            },
            radius: {
              type: N.Number,
              title: `Radius`,
              defaultValue: 0,
              min: 0,
              max: 500,
              unit: `px`,
              step: 1,
              displayStepper: !0,
            },
            fit: {
              type: N.Enum,
              title: `Type`,
              options: [`fill`, `fit`],
              optionTitles: [`Fill`, `Fit`],
              defaultValue: `fill`,
              description: `Style the images that will appear.`,
            },
          },
        },
        frequency: {
          type: N.Number,
          title: `Frequency`,
          defaultValue: 35,
          min: 1,
          max: 50,
          step: 1,
          displayStepper: !1,
          description: `How frequently these images appear.`,
        },
        visibleFor: {
          type: N.Number,
          title: `Visible For`,
          defaultValue: 1,
          min: 0.1,
          max: 10,
          step: 0.1,
          unit: `s`,
          displayStepper: !0,
          description: `How long they're visible for before they animate out.`,
        },
        animation: {
          type: N.Object,
          title: `Animation`,
          controls: {
            in: {
              type: N.Object,
              title: `In`,
              controls: {
                from: {
                  type: N.Object,
                  title: `From`,
                  controls: {
                    opacity: {
                      type: N.Number,
                      title: `Opacity`,
                      defaultValue: 0,
                      min: 0,
                      max: 1,
                      step: 0.1,
                    },
                    scale: {
                      type: N.Number,
                      title: `Scale`,
                      defaultValue: 0.5,
                      min: 0,
                      max: 10,
                      step: 0.1,
                    },
                    blur: {
                      type: N.Number,
                      title: `Blur`,
                      defaultValue: 10,
                      min: 0,
                      max: 50,
                      step: 1,
                      unit: `px`,
                    },
                    is3D: {
                      type: N.Enum,
                      title: `Rotation`,
                      options: [`2D`, `3D`],
                      optionTitles: [`2D`, `3D`],
                      defaultValue: `2D`,
                      displaySegmentedControl: !0,
                    },
                    rotate2D: {
                      type: N.Number,
                      title: `2D Rotate`,
                      defaultValue: 0,
                      min: -360,
                      max: 360,
                      step: 1,
                      unit: `°`,
                      hidden: (e) => e.is3D === `3D`,
                    },
                    rotate3D: {
                      type: N.Object,
                      title: `3D Rotate`,
                      controls: {
                        x: {
                          type: N.Number,
                          title: `X`,
                          defaultValue: 0,
                          min: -360,
                          max: 360,
                          step: 1,
                          unit: `°`,
                        },
                        y: {
                          type: N.Number,
                          title: `Y`,
                          defaultValue: 0,
                          min: -360,
                          max: 360,
                          step: 1,
                          unit: `°`,
                        },
                        z: {
                          type: N.Number,
                          title: `Z`,
                          defaultValue: 0,
                          min: -360,
                          max: 360,
                          step: 1,
                          unit: `°`,
                        },
                      },
                      hidden: (e) => e.is3D === `2D`,
                    },
                  },
                },
                to: {
                  type: N.Object,
                  title: `To`,
                  controls: {
                    opacity: {
                      type: N.Number,
                      title: `Opacity`,
                      defaultValue: 1,
                      min: 0,
                      max: 1,
                      step: 0.1,
                    },
                    scale: {
                      type: N.Number,
                      title: `Scale`,
                      defaultValue: 1,
                      min: 0,
                      max: 10,
                      step: 0.1,
                    },
                    blur: {
                      type: N.Number,
                      title: `Blur`,
                      defaultValue: 0,
                      min: 0,
                      max: 50,
                      step: 1,
                      unit: `px`,
                    },
                    is3D: {
                      type: N.Enum,
                      title: `Rotation`,
                      options: [`2D`, `3D`],
                      optionTitles: [`2D`, `3D`],
                      defaultValue: `2D`,
                      displaySegmentedControl: !0,
                    },
                    rotate2D: {
                      type: N.Number,
                      title: `2D Rotate`,
                      defaultValue: 0,
                      min: -360,
                      max: 360,
                      step: 1,
                      unit: `°`,
                      hidden: (e) => e.is3D === `3D`,
                    },
                    rotate3D: {
                      type: N.Object,
                      title: `3D Rotate`,
                      controls: {
                        x: {
                          type: N.Number,
                          title: `X`,
                          defaultValue: 0,
                          min: -360,
                          max: 360,
                          step: 1,
                          unit: `°`,
                        },
                        y: {
                          type: N.Number,
                          title: `Y`,
                          defaultValue: 0,
                          min: -360,
                          max: 360,
                          step: 1,
                          unit: `°`,
                        },
                        z: {
                          type: N.Number,
                          title: `Z`,
                          defaultValue: 0,
                          min: -360,
                          max: 360,
                          step: 1,
                          unit: `°`,
                        },
                      },
                      hidden: (e) => e.is3D === `2D`,
                    },
                  },
                },
                transition: { type: N.Transition, title: `Transition` },
              },
            },
            out: {
              type: N.Object,
              title: `Out`,
              controls: {
                opacity: {
                  type: N.Number,
                  title: `Opacity`,
                  defaultValue: 0,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                scale: {
                  type: N.Number,
                  title: `Scale`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 10,
                  step: 0.1,
                },
                blur: {
                  type: N.Number,
                  title: `Blur`,
                  defaultValue: 10,
                  min: 0,
                  max: 50,
                  step: 1,
                  unit: `px`,
                },
                is3D: {
                  type: N.Enum,
                  title: `Rotation`,
                  options: [`2D`, `3D`],
                  optionTitles: [`2D`, `3D`],
                  defaultValue: `2D`,
                  displaySegmentedControl: !0,
                },
                rotate2D: {
                  type: N.Number,
                  title: `2D Rotate`,
                  defaultValue: 0,
                  min: -360,
                  max: 360,
                  step: 1,
                  unit: `°`,
                  hidden: (e) => e.is3D === `3D`,
                },
                rotate3D: {
                  type: N.Object,
                  title: `3D Rotate`,
                  controls: {
                    x: {
                      type: N.Number,
                      title: `X`,
                      defaultValue: 0,
                      min: -360,
                      max: 360,
                      step: 1,
                      unit: `°`,
                    },
                    y: {
                      type: N.Number,
                      title: `Y`,
                      defaultValue: 0,
                      min: -360,
                      max: 360,
                      step: 1,
                      unit: `°`,
                    },
                    z: {
                      type: N.Number,
                      title: `Z`,
                      defaultValue: 0,
                      min: -360,
                      max: 360,
                      step: 1,
                      unit: `°`,
                    },
                  },
                  hidden: (e) => e.is3D === `2D`,
                },
                transition: { type: N.Transition, title: `Transition` },
              },
            },
          },
        },
        perspective: {
          type: N.Object,
          title: `Perspective`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
          controls: {
            enabled: { type: N.Boolean, title: `Enable`, defaultValue: !1 },
            value: {
              type: N.Number,
              title: `Value`,
              defaultValue: 1200,
              min: 500,
              max: 5e3,
              step: 10,
              displayStepper: !0,
              hidden: (e) => !e.enabled,
            },
          },
        },
      }));
  }),
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  q,
  J,
  Ve,
  He,
  Ue,
  Y,
  We,
  X,
  Ge,
  Ke,
  qe,
  Z,
  Je,
  Ye,
  Q,
  $;
e(() => {
  (d(),
    O(),
    _(),
    f(),
    Ne(),
    ge(),
    be(),
    ve(),
    de(),
    xe(),
    Ee(),
    (z = M(p.header)),
    (B = M(y)),
    (V = M(p.div)),
    (H = x(I)),
    (U = M(k)),
    (W = C(p.section)),
    (G = x(R)),
    (K = M(p.main)),
    (Pe = x(F)),
    (Fe = {
      LaGdF4gn9: `(min-width: 1200px)`,
      sqmGuKBJs: `(max-width: 809.98px)`,
      Thvpw4ZM0: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Ie = () => typeof document < `u`),
    (Le = []),
    (Re = `framer-HySCS`),
    (ze = {
      LaGdF4gn9: `framer-v-13k1fs`,
      sqmGuKBJs: `framer-v-11foh0y`,
      Thvpw4ZM0: `framer-v-ovgqxu`,
    }),
    (Be = (e, t, n) => (e && t ? `position` : n)),
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.9, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (J = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (Ve = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.3, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (He = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 50 },
      repeat: !1,
      startDelay: 1,
      tokenization: `line`,
      transition: { delay: 0.08, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (Ue = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 1, duration: 1, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Y = {
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
    (We = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (X = { delay: 0.1, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` }),
    (Ge = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      repeat: !1,
      startDelay: 0.5,
      tokenization: `character`,
      transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (Ke = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 1.7, duration: 1, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (qe = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `LaGdF4gn9`, Phone: `sqmGuKBJs`, Tablet: `Thvpw4ZM0` }),
    (Je = ({ value: e }) =>
      ce()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ye = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `LaGdF4gn9`,
    })),
    (Q = b(
      l(function (e, n) {
        let r = t(null),
          a = n ?? r,
          l = ee(),
          { activeLocale: d, setLocale: f } = te(),
          h = ne(),
          { style: _, className: v, layoutId: b, variant: x, ...S } = Ye(e);
        ue(s(() => Te({}, d), [d]));
        let [C, E] = ae(x, Fe, !1),
          O = w(Re, ye, me, we),
          A = o(ie)?.isLayoutTemplate,
          oe = !!o(m)?.transition?.layout,
          M = Be(A, oe),
          ce = () => !Ie() || ![`Thvpw4ZM0`, `sqmGuKBJs`].includes(C);
        return (
          re({}),
          c(ie.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Z,
              primaryVariantId: `LaGdF4gn9`,
              variantClassNames: ze,
            },
            children: u(g, {
              id: b ?? l,
              children: [
                c(Je, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(p.div, {
                  ...S,
                  className: w(O, `framer-13k1fs`, v),
                  ref: a,
                  style: { ..._ },
                  children: [
                    c(T, {
                      breakpoint: C,
                      overrides: { Thvpw4ZM0: { animate: q, initial: J, optimized: !0 } },
                      children: u(K, {
                        className: `framer-1u8cl1p`,
                        "data-framer-appear-id": `1u8cl1p`,
                        "data-framer-name": `Main`,
                        layout: M,
                        children: [
                          c(z, {
                            animate: Ve,
                            className: `framer-1435pw4`,
                            "data-framer-appear-id": `1435pw4`,
                            "data-framer-name": `Write Up`,
                            initial: J,
                            optimized: !0,
                            children: c(y, {
                              __fromCanvasComponent: !0,
                              children: c(i, {
                                children: c(`h1`, {
                                  className: `framer-styles-preset-ul51j9`,
                                  "data-styles-preset": `hPRt9GJWZ`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Modern drink culture turned water into sugary sodas. Bubbli® changes that: sparkling water with 100% real fruit juice—nothing artificial, nothing extra.`,
                                }),
                              }),
                              className: `framer-lu3o7q`,
                              effect: He,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          c(`section`, {
                            className: `framer-180dlvr`,
                            "data-framer-name": `Stockists`,
                            children: c(T, {
                              breakpoint: C,
                              overrides: {
                                sqmGuKBJs: { animate: void 0, initial: void 0, optimized: void 0 },
                              },
                              children: c(V, {
                                animate: q,
                                className: `framer-psbjaa`,
                                "data-framer-appear-id": `psbjaa`,
                                "data-framer-name": `Content`,
                                initial: J,
                                optimized: !0,
                                children: u(`ul`, {
                                  className: `framer-13hwtf3`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    c(T, {
                                      breakpoint: C,
                                      overrides: {
                                        sqmGuKBJs: { animate: Ue, initial: Y, optimized: !0 },
                                      },
                                      children: c(B, {
                                        __fromCanvasComponent: !0,
                                        as: `li`,
                                        children: c(i, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-dw8if1`,
                                            "data-styles-preset": `XpyIAZm8_`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                            },
                                            children: `STOCKISTS`,
                                          }),
                                        }),
                                        className: `framer-1h7se4d`,
                                        "data-framer-appear-id": `1h7se4d`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    u(`li`, {
                                      className: `framer-v2a5ch`,
                                      "data-framer-name": `Text`,
                                      children: [
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(i, {
                                            children: c(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `-0.05em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `Soprano & Tonic`,
                                            }),
                                          }),
                                          className: `framer-9tp0r8`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(i, {
                                            children: c(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `-0.05em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `Blue Barrell`,
                                            }),
                                          }),
                                          className: `framer-100guu9`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(i, {
                                            children: c(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `-0.05em`,
                                                "--framer-text-alignment": `center`,
                                              },
                                              children: `Sky Springs`,
                                            }),
                                          }),
                                          className: `framer-1wr47cl`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          u(W, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: We,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-4yuc2h`,
                            "data-framer-name": `FAQ`,
                            children: [
                              c(`div`, {
                                className: `framer-dppxk6`,
                                "data-framer-name": `FAQs`,
                                children: u(`article`, {
                                  className: `framer-1d3wfeg`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-1w00c5h`,
                                      "data-framer-name": `Container`,
                                      children: c(`div`, {
                                        className: `framer-jgk9fd`,
                                        "data-framer-name": `Header`,
                                        children: c(`div`, {
                                          className: `framer-1c81v5r`,
                                          "data-framer-name": `head container`,
                                          children: c(y, {
                                            __fromCanvasComponent: !0,
                                            children: c(i, {
                                              children: c(`h2`, {
                                                className: `framer-styles-preset-63r6z3`,
                                                "data-styles-preset": `zWe8uO5eV`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                                },
                                                children: `Frequently Asked Questions`,
                                              }),
                                            }),
                                            className: `framer-1nxjh52`,
                                            "data-framer-name": `Title`,
                                            effect: Ge,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(`div`, {
                                      className: `framer-je46su`,
                                      "data-framer-name": `Content`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-1tsmvny`,
                                          "data-framer-name": `Subtitle`,
                                          children: c(y, {
                                            __fromCanvasComponent: !0,
                                            children: c(i, {
                                              children: c(`h4`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `-0.05em`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-alignment": `left`,
                                                },
                                                children: `Here's what our customers ask.`,
                                              }),
                                            }),
                                            className: `framer-15j7p8e`,
                                            "data-framer-name": `Explore our selection`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(`div`, {
                                          className: `framer-o0hkew`,
                                          "data-framer-name": `Container`,
                                          children: c(T, {
                                            breakpoint: C,
                                            overrides: {
                                              sqmGuKBJs: {
                                                width: `calc(min(${h?.width || `100vw`} - 48px, 1440px) - 32px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  128 +
                                                  514.8 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  156 +
                                                  112 +
                                                  33 +
                                                  0 +
                                                  0,
                                              },
                                              Thvpw4ZM0: {
                                                width: `calc(min(max((min(${h?.width || `100vw`} - 64px, 1440px) - 24px) / 2, 1px), 840px) - 32px)`,
                                                y:
                                                  (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  128 +
                                                  514.8 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  156 +
                                                  112 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: c(j, {
                                              height: 135,
                                              width: `calc(min(max((min(max(${h?.width || `100vw`} - (627.5px * 0.7482px + 64px), 1px), 1440px) - 24px) / 2, 1px), 630px) - 32px)`,
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                128 +
                                                514.8 +
                                                112.25 +
                                                0 +
                                                0 +
                                                0 +
                                                156 +
                                                112 +
                                                0 +
                                                0,
                                              children: c(U, {
                                                animate: Ke,
                                                className: `framer-1rk9rvi-container`,
                                                "data-framer-appear-id": `1rk9rvi`,
                                                initial: Y,
                                                nodeId: `PZoaJT3A_`,
                                                optimized: !0,
                                                rendersWithMotion: !0,
                                                scopeId: `SNuDNuPpr`,
                                                children: c(I, {
                                                  f6MCfUa9_: `Yes! Bubbli offers a subscription option so you can have your favorite sparkling water delivered regularly. You can choose your delivery frequency and easily modify or cancel your subscription anytime.`,
                                                  height: `100%`,
                                                  HfER0Vust: `Can I subscribe for regular deliveries?`,
                                                  hx0b_8Yll: `How long does delivery take?`,
                                                  id: `PZoaJT3A_`,
                                                  kr50LjJ8n: {
                                                    bounce: 0.2,
                                                    delay: 0,
                                                    duration: 0.4,
                                                    type: `spring`,
                                                  },
                                                  layoutId: `PZoaJT3A_`,
                                                  lvMeUTpra: `Bubbli offers refreshing sparkling water made with high-quality ingredients and natural flavors. It’s free from added sugars and artificial sweeteners, making it a healthier alternative to sugary drinks.`,
                                                  N1DFKMWNl: `What makes Bubbli sparkling water different?`,
                                                  nNR17NJf8: `Orders are typically processed within 1–2 business days and delivered within 3–5 business days, depending on your location. You’ll receive a tracking link once your order has been shipped.`,
                                                  style: { width: `100%` },
                                                  variant: qe(`qUmuv1rgg`),
                                                  width: `100%`,
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
                              c(T, {
                                breakpoint: C,
                                overrides: {
                                  sqmGuKBJs: {
                                    background: {
                                      alt: `A view of a studio interior with modern decor, featuring large windows that offer a glimpse of lush greenery outside`,
                                      fit: `fill`,
                                      intrinsicHeight: 1422,
                                      intrinsicWidth: 1064,
                                      loading: D((h?.y || 0) + 0 + 0 + 128 + 514.8 + 0 + 448),
                                      pixelHeight: 1422,
                                      pixelWidth: 1064,
                                      sizes: `314.2616px`,
                                      src: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png`,
                                      srcSet: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA.png 766w,../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png 1064w`,
                                    },
                                  },
                                  Thvpw4ZM0: {
                                    background: {
                                      alt: `A view of a studio interior with modern decor, featuring large windows that offer a glimpse of lush greenery outside`,
                                      fit: `fill`,
                                      intrinsicHeight: 1422,
                                      intrinsicWidth: 1064,
                                      loading: D((h?.y || 0) + 0 + 0 + 128 + 514.8 + 0 + 423),
                                      pixelHeight: 1422,
                                      pixelWidth: 1064,
                                      sizes: `336.7089px`,
                                      src: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png`,
                                      srcSet: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA.png 766w,../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png 1064w`,
                                    },
                                  },
                                },
                                children: c(se, {
                                  background: {
                                    alt: `A view of a studio interior with modern decor, featuring large windows that offer a glimpse of lush greenery outside`,
                                    fit: `fill`,
                                    intrinsicHeight: 1422,
                                    intrinsicWidth: 1064,
                                    loading: D((h?.y || 0) + 0 + 0 + 128 + 514.8 + 0),
                                    pixelHeight: 1422,
                                    pixelWidth: 1064,
                                    sizes: `469.5218px`,
                                    src: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png`,
                                    srcSet: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA.png 766w,../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png 1064w`,
                                  },
                                  className: `framer-tbj24m`,
                                  "data-framer-name": `Image`,
                                  fitImageDimension: `width`,
                                }),
                              }),
                            ],
                          }),
                          ce() &&
                            c(j, {
                              children: c(k, {
                                className: `framer-3ppdpr-container hidden-ovgqxu hidden-11foh0y`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `R8XaMFgok`,
                                scopeId: `SNuDNuPpr`,
                                children: c(R, {
                                  animation: {
                                    in: {
                                      from: {
                                        blur: 10,
                                        is3D: `2D`,
                                        opacity: 0,
                                        rotate2D: 0,
                                        rotate3D: { x: 0, y: 0, z: 0 },
                                        scale: 0.5,
                                      },
                                      to: {
                                        blur: 0,
                                        is3D: `2D`,
                                        opacity: 1,
                                        rotate2D: 0,
                                        rotate3D: { x: 0, y: 0, z: 0 },
                                        scale: 1,
                                      },
                                      transition: {
                                        damping: 60,
                                        delay: 0,
                                        mass: 1,
                                        stiffness: 500,
                                        type: `spring`,
                                      },
                                    },
                                    out: {
                                      blur: 10,
                                      is3D: `2D`,
                                      opacity: 0,
                                      rotate2D: 0,
                                      rotate3D: { x: 0, y: 0, z: 0 },
                                      scale: 0.5,
                                      transition: {
                                        damping: 60,
                                        delay: 0,
                                        mass: 1,
                                        stiffness: 500,
                                        type: `spring`,
                                      },
                                    },
                                  },
                                  frequency: 20,
                                  height: `100%`,
                                  id: `R8XaMFgok`,
                                  images: [
                                    `../../assets/images/c5pQIEBQ4tbE7oCKO8X9Q8CqNA.jpg`,
                                    `../../assets/images/ab1b02racayuhLDdXaWn6ylxFk.jpg`,
                                    `../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw-dae012.png`,
                                    `../../assets/images/uny3K8vrpDW96mHmG62HSNo.jpg`,
                                  ],
                                  layoutId: `R8XaMFgok`,
                                  perspective: { enabled: !1, value: 1200 },
                                  style: { fit: `fit`, height: 300, radius: 1, width: 100 },
                                  visibleFor: 1,
                                  width: `100%`,
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                    c(j, {
                      children: c(k, {
                        className: `framer-12hc3pb-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `Rd1793aUi`,
                        scopeId: `SNuDNuPpr`,
                        children: c(F, {
                          height: `100%`,
                          id: `Rd1793aUi`,
                          intensity: 10,
                          layoutId: `Rd1793aUi`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-HySCS.framer-5kvr79, .framer-HySCS .framer-5kvr79 { display: block; }`,
        `.framer-HySCS.framer-13k1fs { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-HySCS .framer-1u8cl1p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 128px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-1435pw4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-end; max-width: 545px; overflow: visible; padding: 150px 0px 150px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-HySCS .framer-lu3o7q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-HySCS .framer-180dlvr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-psbjaa { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 35px 0px 15px 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-HySCS .framer-13hwtf3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; list-style: none; margin: 0px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-HySCS .framer-1h7se4d, .framer-HySCS .framer-9tp0r8, .framer-HySCS .framer-100guu9, .framer-HySCS .framer-1wr47cl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-HySCS .framer-v2a5ch { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-HySCS .framer-4yuc2h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-dppxk6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-HySCS .framer-1d3wfeg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-1w00c5h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 132px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-jgk9fd, .framer-HySCS .framer-1c81v5r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-1nxjh52 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-HySCS .framer-je46su { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 112px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-HySCS .framer-1tsmvny { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-HySCS .framer-15j7p8e { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-HySCS .framer-o0hkew { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 630px; overflow: visible; padding: 0px 32px 0px 0px; position: relative; width: 1px; }`,
        `.framer-HySCS .framer-1rk9rvi-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-HySCS .framer-tbj24m { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; flex: none; height: 628px; overflow: hidden; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-HySCS .framer-3ppdpr-container { bottom: 614px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-HySCS .framer-12hc3pb-container { flex: none; height: auto; position: relative; width: auto; }`,
        ..._e,
        ...fe,
        ...Se,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-HySCS.framer-13k1fs { width: 810px; } .framer-HySCS .framer-1u8cl1p { will-change: var(--framer-will-change-effect-override, transform); } .framer-HySCS .framer-psbjaa { gap: 20px; } .framer-HySCS .framer-4yuc2h { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; padding: 0px 0px 80px 0px; } .framer-HySCS .framer-dppxk6 { flex: none; width: 100%; } .framer-HySCS .framer-o0hkew { max-width: 840px; } .framer-HySCS .framer-tbj24m { height: 450px; }}`,
        `@media (max-width: 809.98px) { .framer-HySCS.framer-13k1fs { width: 390px; } .framer-HySCS .framer-1u8cl1p { padding: 128px 24px 0px 24px; } .framer-HySCS .framer-psbjaa { flex-direction: column; will-change: unset; } .framer-HySCS .framer-1h7se4d { will-change: var(--framer-will-change-effect-override, transform); } .framer-HySCS .framer-4yuc2h, .framer-HySCS .framer-je46su { flex-direction: column; gap: 12px; } .framer-HySCS .framer-dppxk6, .framer-HySCS .framer-1tsmvny { flex: none; width: 100%; } .framer-HySCS .framer-o0hkew { flex: none; max-width: unset; width: 100%; } .framer-HySCS .framer-tbj24m { height: 420px; }}`,
      ],
      `framer-HySCS`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1866.5, width: 1200 }),
    v(
      Q,
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
        ...H,
        ...G,
        ...Pe,
        ...E(he),
        ...E(pe),
        ...E(Ce),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(I, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerSNuDNuPpr`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Thvpw4ZM0":{"layout":["fixed","auto"]},"sqmGuKBJs":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1866.5`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Le as queryParamNames };
//# sourceMappingURL=sssSKh7O70GCVZ_uvjLx5_SkAVB3Du-U9Usy7vsMUjY.D9eP6vAO.mjs.map
