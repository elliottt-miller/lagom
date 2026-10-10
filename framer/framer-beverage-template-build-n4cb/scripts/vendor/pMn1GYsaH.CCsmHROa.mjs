import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as l,
  v as ee,
} from "./react.CAGFp8w4.mjs";
import { S as u, a as d, r as te, t as f } from "./motion.D9nDYnVb.mjs";
import {
  C as p,
  D as m,
  E as h,
  K as g,
  M as _,
  N as v,
  T as y,
  V as b,
  at as x,
  bt as S,
  d as C,
  i as ne,
  j as w,
  m as re,
  mt as ie,
  o as T,
  xt as E,
  z as D,
} from "./framer.yhOKXYuv.mjs";
import { a as O, o as k } from "./peANJhUp3.CwfrSljs.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
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
    (l(),
      g(),
      f(),
      n(),
      k(),
      (j = D(O)),
      (M = { MyY7527Es: { hover: !0 }, ojHVL3azJ: { hover: !0 }, zQp4Jnlbw: { hover: !0 } }),
      (N = [`ojHVL3azJ`, `MyY7527Es`, `OIM0PdrtA`, `wta07JwAV`, `zQp4Jnlbw`]),
      (P = `framer-KNs6f`),
      (F = {
        MyY7527Es: `framer-v-1r9gg1m`,
        OIM0PdrtA: `framer-v-m602up`,
        ojHVL3azJ: `framer-v-1h128w7`,
        wta07JwAV: `framer-v-e64b1u`,
        zQp4Jnlbw: `framer-v-17rok8o`,
      }),
      (I = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (L = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (R = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (z = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (B = {
        "Variant 1": `ojHVL3azJ`,
        "Variant 2": `MyY7527Es`,
        "Variant 5": `zQp4Jnlbw`,
        mobile: `wta07JwAV`,
        tablet: `OIM0PdrtA`,
      }),
      (V = u.create(i)),
      (H = ({
        bGIMGLEFT: e,
        bGIMGRIGHT: t,
        description: n,
        fill: r,
        height: i,
        id: a,
        image: o,
        link: s,
        name1: c,
        textColor: l,
        width: ee,
        ...u
      }) => ({
        ...u,
        FBLHQo0Rr: o ??
          u.FBLHQo0Rr ?? {
            alt: ``,
            pixelHeight: 1629,
            pixelWidth: 929,
            src: `../../assets/images/8vJAGsrrqQ7gssK7NqoEVpmVe4-b56414.png`,
            srcSet: `../../assets/images/8vJAGsrrqQ7gssK7NqoEVpmVe4.png 583w,../../assets/images/8vJAGsrrqQ7gssK7NqoEVpmVe4-b56414.png 929w`,
          },
        l8C0eFENG: t ??
          u.l8C0eFENG ?? {
            alt: ``,
            pixelHeight: 4096,
            pixelWidth: 4096,
            src: `../../assets/images/D2W0OUEunJNcJdx6BQNm7NaLaSY-a68080.png`,
            srcSet: `../../assets/images/D2W0OUEunJNcJdx6BQNm7NaLaSY.png 512w,../../assets/images/D2W0OUEunJNcJdx6BQNm7NaLaSY-9ab83a.png 1024w,../../assets/images/D2W0OUEunJNcJdx6BQNm7NaLaSY-e68b31.png 2048w,../../assets/images/D2W0OUEunJNcJdx6BQNm7NaLaSY-a68080.png 4096w`,
          },
        lplyZs_3H:
          r ??
          u.lplyZs_3H ??
          `var(--token-d50a4c6b-7fb8-4dd9-8aeb-fa37ba09e423, rgb(255, 240, 173))`,
        mcp4Al6x5:
          n ??
          u.mcp4Al6x5 ??
          `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
        UcVM9nVk_: c ?? u.UcVM9nVk_ ?? `LIME SURGE`,
        variant: B[u.variant] ?? u.variant ?? `ojHVL3azJ`,
        WbXqoe5LM: s ?? u.WbXqoe5LM,
        YoLT70GTJ: l ?? u.YoLT70GTJ ?? `rgb(0, 0, 0)`,
        zvGM69mDq: e ??
          u.zvGM69mDq ?? {
            alt: ``,
            pixelHeight: 2500,
            pixelWidth: 2500,
            src: `../../assets/images/uZz3YVOslk0HzISDYVRwE5Mt0dY-5df9e7.png`,
            srcSet: `../../assets/images/uZz3YVOslk0HzISDYVRwE5Mt0dY.png 512w,../../assets/images/uZz3YVOslk0HzISDYVRwE5Mt0dY-eaf529.png 1024w,../../assets/images/uZz3YVOslk0HzISDYVRwE5Mt0dY-6f93e8.png 2048w,../../assets/images/uZz3YVOslk0HzISDYVRwE5Mt0dY-5df9e7.png 2500w`,
          },
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = E(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = ee(),
            { activeLocale: l, setLocale: d } = ie(),
            f = x(),
            {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              FBLHQo0Rr: v,
              UcVM9nVk_: T,
              mcp4Al6x5: E,
              WbXqoe5LM: D,
              zvGM69mDq: k,
              l8C0eFENG: j,
              lplyZs_3H: B,
              YoLT70GTJ: W,
              ...G
            } = H(e),
            {
              baseVariant: K,
              classNames: q,
              clearLoadingGesture: J,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: ae,
              setGestureState: oe,
              setVariant: se,
              variants: Z,
            } = S({
              cycleOrder: N,
              defaultVariant: `ojHVL3azJ`,
              enabledGestures: M,
              ref: o,
              variant: _,
              variantClassNames: F,
            }),
            Q = U(e, Z),
            ce = w(P),
            $ = () => K !== `wta07JwAV`;
          return a(te, {
            id: g ?? s,
            children: a(V, {
              animate: Z,
              initial: !1,
              children: a(z, {
                value: I,
                children: a(re, {
                  href: D,
                  motionChild: !0,
                  nodeId: `ojHVL3azJ`,
                  openInNewTab: !1,
                  scopeId: `VjMBA07Qc`,
                  children: c(u.a, {
                    ...G,
                    ...Y,
                    className: `${w(ce, `framer-1h128w7`, h, q)} framer-fvhiwj`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: Q,
                    layoutId: `ojHVL3azJ`,
                    ref: o,
                    style: {
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      ...m,
                    },
                    variants: {
                      "ojHVL3azJ-hover": {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      MyY7527Es: {
                        backgroundColor: B,
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                      },
                      OIM0PdrtA: {
                        backgroundColor: B,
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                      },
                      wta07JwAV: {
                        backgroundColor: B,
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                      },
                      zQp4Jnlbw: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                    },
                    ...A(
                      {
                        "MyY7527Es-hover": { "data-framer-name": void 0 },
                        "ojHVL3azJ-hover": { "data-framer-name": void 0 },
                        "zQp4Jnlbw-hover": { "data-framer-name": void 0 },
                        MyY7527Es: { "data-framer-name": `Variant 2` },
                        OIM0PdrtA: { "data-framer-name": `tablet` },
                        wta07JwAV: { "data-framer-name": `mobile` },
                        zQp4Jnlbw: { "data-framer-name": `Variant 5` },
                      },
                      K,
                      X
                    ),
                    children: [
                      c(u.div, {
                        className: `framer-10e3bp5`,
                        "data-framer-name": `product`,
                        layoutDependency: Q,
                        layoutId: `hBkqRLEr2`,
                        children: [
                          a(C, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1629,
                              intrinsicWidth: 929,
                              loading: b(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 726) - 0 - 725.4) / 2 + 0 + 0) +
                                  40
                              ),
                              pixelHeight: 1629,
                              pixelWidth: 929,
                              sizes: `285px`,
                              ...L(v),
                            },
                            className: `framer-54lnqr`,
                            "data-framer-name": `Lime can`,
                            layoutDependency: Q,
                            layoutId: `ba_JLtfSh`,
                            style: { rotate: 0, scale: 1 },
                            variants: {
                              "MyY7527Es-hover": { rotate: 5, scale: 1.1 },
                              "ojHVL3azJ-hover": { rotate: 10, scale: 1.1 },
                              "zQp4Jnlbw-hover": { rotate: 10, scale: 1.1 },
                            },
                            ...A(
                              {
                                MyY7527Es: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1629,
                                    intrinsicWidth: 929,
                                    loading: b(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 716) - 0 - 715.4) / 2 + 0 + 0) +
                                        20
                                    ),
                                    pixelHeight: 1629,
                                    pixelWidth: 929,
                                    sizes: `285px`,
                                    ...L(v),
                                  },
                                },
                                OIM0PdrtA: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1629,
                                    intrinsicWidth: 929,
                                    loading: b(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 687.5) - 0 - 689.4) / 2 + 0 + 0) +
                                        40
                                    ),
                                    pixelHeight: 1629,
                                    pixelWidth: 929,
                                    sizes: `256.5px`,
                                    ...L(v),
                                  },
                                },
                                wta07JwAV: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1629,
                                    intrinsicWidth: 929,
                                    loading: b(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 488) - 0 - 579.1) / 2 + 0 + 0) +
                                        10
                                    ),
                                    pixelHeight: 1629,
                                    pixelWidth: 929,
                                    sizes: `186.5px`,
                                    ...L(v),
                                  },
                                },
                                zQp4Jnlbw: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1629,
                                    intrinsicWidth: 929,
                                    loading: b(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 870.5) - 0 - 841) / 2 + 0 + 0) +
                                        40
                                    ),
                                    pixelHeight: 1629,
                                    pixelWidth: 929,
                                    sizes: `342px`,
                                    ...L(v),
                                  },
                                },
                              },
                              K,
                              X
                            ),
                          }),
                          $() &&
                            a(C, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1250,
                                intrinsicWidth: 1250,
                                loading: b(
                                  (f?.y || 0) +
                                    0 +
                                    (((f?.height || 726) - 0 - 725.4) / 2 + 0 + 0) +
                                    48
                                ),
                                pixelHeight: 2500,
                                pixelWidth: 2500,
                                sizes: `190px`,
                                ...L(k),
                              },
                              className: `framer-1h5liv`,
                              "data-framer-name": `Lime slice`,
                              layoutDependency: Q,
                              layoutId: `NWOLE8yZT`,
                              ...A(
                                {
                                  "ojHVL3azJ-hover": {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1250,
                                      intrinsicWidth: 1250,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 726) - 0 - 725.4) / 2 + 0 + 0) +
                                          28
                                      ),
                                      pixelHeight: 2500,
                                      pixelWidth: 2500,
                                      sizes: `190px`,
                                      ...L(k),
                                    },
                                  },
                                  "zQp4Jnlbw-hover": {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1250,
                                      intrinsicWidth: 1250,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 870.5) - 0 - 841) / 2 + 0 + 0) +
                                          28
                                      ),
                                      pixelHeight: 2500,
                                      pixelWidth: 2500,
                                      sizes: `190px`,
                                      ...L(k),
                                    },
                                  },
                                  MyY7527Es: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1250,
                                      intrinsicWidth: 1250,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 716) - 0 - 715.4) / 2 + 0 + 0) +
                                          48
                                      ),
                                      pixelHeight: 2500,
                                      pixelWidth: 2500,
                                      sizes: `190px`,
                                      ...L(k),
                                    },
                                  },
                                  OIM0PdrtA: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1250,
                                      intrinsicWidth: 1250,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 687.5) - 0 - 689.4) / 2 + 0 + 0) +
                                          48
                                      ),
                                      pixelHeight: 2500,
                                      pixelWidth: 2500,
                                      sizes: `190px`,
                                      ...L(k),
                                    },
                                  },
                                  zQp4Jnlbw: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1250,
                                      intrinsicWidth: 1250,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 870.5) - 0 - 841) / 2 + 0 + 0) +
                                          48
                                      ),
                                      pixelHeight: 2500,
                                      pixelWidth: 2500,
                                      sizes: `190px`,
                                      ...L(k),
                                    },
                                  },
                                },
                                K,
                                X
                              ),
                            }),
                          $() &&
                            a(C, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 4096,
                                intrinsicWidth: 4096,
                                loading: b(
                                  (f?.y || 0) +
                                    0 +
                                    (((f?.height || 726) - 0 - 725.4) / 2 + 0 + 0) +
                                    580 -
                                    242
                                ),
                                pixelHeight: 4096,
                                pixelWidth: 4096,
                                sizes: `190px`,
                                ...L(j),
                              },
                              className: `framer-e2iscm`,
                              "data-framer-name": `leaf`,
                              layoutDependency: Q,
                              layoutId: `TxcsyYXW9`,
                              ...A(
                                {
                                  "ojHVL3azJ-hover": {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4096,
                                      intrinsicWidth: 4096,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 726) - 0 - 725.4) / 2 + 0 + 0) +
                                          580 -
                                          252
                                      ),
                                      pixelHeight: 4096,
                                      pixelWidth: 4096,
                                      sizes: `190px`,
                                      ...L(j),
                                    },
                                  },
                                  MyY7527Es: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4096,
                                      intrinsicWidth: 4096,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 716) - 0 - 715.4) / 2 + 0 + 0) +
                                          540 -
                                          242
                                      ),
                                      pixelHeight: 4096,
                                      pixelWidth: 4096,
                                      sizes: `190px`,
                                      ...L(j),
                                    },
                                  },
                                  OIM0PdrtA: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4096,
                                      intrinsicWidth: 4096,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 687.5) - 0 - 689.4) / 2 + 0 + 0) +
                                          530 -
                                          242
                                      ),
                                      pixelHeight: 4096,
                                      pixelWidth: 4096,
                                      sizes: `190px`,
                                      ...L(j),
                                    },
                                  },
                                  zQp4Jnlbw: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4096,
                                      intrinsicWidth: 4096,
                                      loading: b(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 870.5) - 0 - 841) / 2 + 0 + 0) +
                                          680 -
                                          242
                                      ),
                                      pixelHeight: 4096,
                                      pixelWidth: 4096,
                                      sizes: `190px`,
                                      ...L(j),
                                    },
                                  },
                                },
                                K,
                                X
                              ),
                            }),
                        ],
                      }),
                      c(u.div, {
                        className: `framer-166ghzm`,
                        layoutDependency: Q,
                        layoutId: `BV8atjkv0`,
                        children: [
                          a(p, {
                            __fromCanvasComponent: !0,
                            children: a(i, {
                              children: a(u.h1, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `36px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-line-height": `0.9em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-gdpscs, rgb(255, 255, 255))`,
                                  "--framer-text-transform": `uppercase`,
                                },
                                children: `LIME SURGE`,
                              }),
                            }),
                            className: `framer-7jn93s`,
                            fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                            layoutDependency: Q,
                            layoutId: `dgFX4Lyhs`,
                            style: {
                              "--extracted-gdpscs": `rgb(255, 255, 255)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                              "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                            },
                            text: T,
                            variants: {
                              MyY7527Es: {
                                "--extracted-gdpscs": `var(--variable-reference-YoLT70GTJ-VjMBA07Qc)`,
                                "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                              },
                              OIM0PdrtA: {
                                "--extracted-gdpscs": `var(--variable-reference-YoLT70GTJ-VjMBA07Qc)`,
                                "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                              },
                              wta07JwAV: {
                                "--extracted-gdpscs": `var(--variable-reference-YoLT70GTJ-VjMBA07Qc)`,
                                "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...A(
                              {
                                MyY7527Es: {
                                  children: a(i, {
                                    children: a(u.h1, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                        "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                        "--framer-font-size": `36px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-gdpscs, var(--variable-reference-YoLT70GTJ-VjMBA07Qc))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `LIME SURGE`,
                                    }),
                                  }),
                                },
                                OIM0PdrtA: {
                                  children: a(i, {
                                    children: a(u.h1, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                        "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                        "--framer-font-size": `32px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-gdpscs, var(--variable-reference-YoLT70GTJ-VjMBA07Qc))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `LIME SURGE`,
                                    }),
                                  }),
                                },
                                wta07JwAV: {
                                  children: a(i, {
                                    children: a(u.h1, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                        "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                        "--framer-font-size": `24px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-gdpscs, var(--variable-reference-YoLT70GTJ-VjMBA07Qc))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `LIME SURGE`,
                                    }),
                                  }),
                                },
                                zQp4Jnlbw: {
                                  children: a(i, {
                                    children: a(u.h1, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                        "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                        "--framer-font-size": `48px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-gdpscs, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `LIME SURGE`,
                                    }),
                                  }),
                                },
                              },
                              K,
                              X
                            ),
                          }),
                          a(p, {
                            __fromCanvasComponent: !0,
                            children: a(i, {
                              children: a(u.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                  "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `20px`,
                                  "--framer-letter-spacing": `-0.02em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
                              }),
                            }),
                            className: `framer-17nsj8s`,
                            fonts: [`CUSTOMV2;Rodger Test Regular`],
                            layoutDependency: Q,
                            layoutId: `N9Jxzh65Y`,
                            style: {
                              "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                              "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                            },
                            text: E,
                            variants: {
                              MyY7527Es: {
                                "--extracted-r6o4lv": `var(--variable-reference-YoLT70GTJ-VjMBA07Qc)`,
                                "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                              },
                              OIM0PdrtA: {
                                "--extracted-r6o4lv": `var(--variable-reference-YoLT70GTJ-VjMBA07Qc)`,
                                "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                              },
                              wta07JwAV: {
                                "--extracted-r6o4lv": `var(--variable-reference-YoLT70GTJ-VjMBA07Qc)`,
                                "--variable-reference-YoLT70GTJ-VjMBA07Qc": W,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...A(
                              {
                                MyY7527Es: {
                                  children: a(i, {
                                    children: a(u.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                        "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `20px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-YoLT70GTJ-VjMBA07Qc))`,
                                      },
                                      children: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
                                    }),
                                  }),
                                },
                                OIM0PdrtA: {
                                  children: a(i, {
                                    children: a(u.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                        "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `18px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-YoLT70GTJ-VjMBA07Qc))`,
                                      },
                                      children: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
                                    }),
                                  }),
                                },
                                wta07JwAV: {
                                  children: a(i, {
                                    children: a(u.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                        "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-YoLT70GTJ-VjMBA07Qc))`,
                                      },
                                      children: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
                                    }),
                                  }),
                                },
                                zQp4Jnlbw: {
                                  children: a(i, {
                                    children: a(u.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                        "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                        "--framer-font-size": `24px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
                                    }),
                                  }),
                                },
                              },
                              K,
                              X
                            ),
                          }),
                          a(ne, {
                            height: 69,
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 726) - 0 - 725.4) / 2 + 580 + 0) +
                              0 +
                              76.4,
                            ...A(
                              {
                                MyY7527Es: {
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 716) - 0 - 715.4) / 2 + 540 + 0) +
                                    10 +
                                    76.4,
                                },
                                OIM0PdrtA: {
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 687.5) - 0 - 689.4) / 2 + 530 + 0) +
                                    10 +
                                    70.4,
                                },
                                wta07JwAV: {
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 488) - 0 - 579.1) / 2 + 364.5 + 0) +
                                    10 +
                                    125.6,
                                },
                                zQp4Jnlbw: {
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 870.5) - 0 - 841) / 2 + 680 + 0) +
                                    0 +
                                    92,
                                },
                              },
                              K,
                              X
                            ),
                            children: a(y, {
                              className: `framer-ucbcf5-container`,
                              layoutDependency: Q,
                              layoutId: `jYgiy7XeQ-container`,
                              nodeId: `jYgiy7XeQ`,
                              rendersWithMotion: !0,
                              scopeId: `VjMBA07Qc`,
                              children: a(O, {
                                height: `100%`,
                                id: `jYgiy7XeQ`,
                                Jt36NHN_f: `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5))`,
                                layoutId: `jYgiy7XeQ`,
                                OfHRPOZED: `SHOP NOW`,
                                RyAdtOSXK: `rgb(255, 255, 255)`,
                                variant: R(`KXrVBqbl1`),
                                width: `100%`,
                                ...A({ zQp4Jnlbw: { variant: R(`t6QjBJQH9`) } }, K, X),
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
          `.framer-KNs6f.framer-fvhiwj, .framer-KNs6f .framer-fvhiwj { display: block; }`,
          `.framer-KNs6f.framer-1h128w7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 420px; }`,
          `.framer-KNs6f .framer-10e3bp5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 40px 0px; position: relative; width: 100%; }`,
          `.framer-KNs6f .framer-54lnqr { aspect-ratio: 0.57 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); overflow: visible; position: relative; width: 285px; z-index: 2; }`,
          `.framer-KNs6f .framer-1h5liv { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 190px); left: 84px; overflow: visible; position: absolute; top: 48px; width: 190px; z-index: 1; }`,
          `.framer-KNs6f .framer-e2iscm { aspect-ratio: 1 / 1; bottom: 62px; flex: none; height: var(--framer-aspect-ratio-supported, 190px); overflow: visible; position: absolute; right: 87px; width: 190px; z-index: 1; }`,
          `.framer-KNs6f .framer-166ghzm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-KNs6f .framer-7jn93s { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-KNs6f .framer-17nsj8s { flex: none; height: auto; max-width: 440px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-KNs6f .framer-ucbcf5-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-KNs6f.framer-v-1r9gg1m.framer-1h128w7 { will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KNs6f.framer-v-1r9gg1m .framer-10e3bp5 { padding: 20px 0px 20px 0px; }`,
          `.framer-KNs6f.framer-v-1r9gg1m .framer-166ghzm { padding: 10px 10px 20px 10px; }`,
          `.framer-KNs6f.framer-v-m602up.framer-1h128w7 { cursor: unset; width: 400px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KNs6f.framer-v-m602up .framer-54lnqr { height: var(--framer-aspect-ratio-supported, 450px); width: 257px; }`,
          `.framer-KNs6f.framer-v-m602up .framer-166ghzm { padding: 10px; }`,
          `.framer-KNs6f.framer-v-e64b1u.framer-1h128w7 { cursor: unset; width: 290px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KNs6f.framer-v-e64b1u .framer-10e3bp5 { padding: 10px 0px 10px 0px; }`,
          `.framer-KNs6f.framer-v-e64b1u .framer-54lnqr { height: var(--framer-aspect-ratio-supported, 327px); width: 187px; }`,
          `.framer-KNs6f.framer-v-e64b1u .framer-166ghzm { max-width: unset; padding: 10px; }`,
          `.framer-KNs6f.framer-v-e64b1u .framer-7jn93s { max-width: unset; width: 100%; }`,
          `.framer-KNs6f.framer-v-e64b1u .framer-17nsj8s { max-width: 250px; width: 100%; }`,
          `.framer-KNs6f.framer-v-17rok8o.framer-1h128w7 { width: 460px; }`,
          `.framer-KNs6f.framer-v-17rok8o .framer-54lnqr { height: var(--framer-aspect-ratio-supported, 600px); width: 342px; }`,
          `.framer-KNs6f.framer-v-1h128w7.hover .framer-1h5liv, .framer-KNs6f.framer-v-17rok8o.hover .framer-1h5liv { left: 14px; top: 28px; }`,
          `.framer-KNs6f.framer-v-1h128w7.hover .framer-e2iscm, .framer-KNs6f.framer-v-17rok8o.hover .framer-e2iscm { right: -13px; }`,
          `.framer-KNs6f.framer-v-1r9gg1m.hover .framer-1h5liv { left: -6px; }`,
          `.framer-KNs6f.framer-v-1r9gg1m.hover .framer-e2iscm { right: -15px; }`,
        ],
        `framer-KNs6f`
      )),
      (G = W),
      (W.displayName = `Product`),
      (W.defaultProps = { height: 726, width: 420 }),
      m(W, {
        variant: {
          options: [`ojHVL3azJ`, `MyY7527Es`, `OIM0PdrtA`, `wta07JwAV`, `zQp4Jnlbw`],
          optionTitles: [`Variant 1`, `Variant 2`, `tablet`, `mobile`, `Variant 5`],
          title: `Variant`,
          type: T.Enum,
        },
        FBLHQo0Rr: {
          __defaultAssetReference: `data:framer/asset-reference,8vJAGsrrqQ7gssK7NqoEVpmVe4.png?originalFilename=green+can.png&width=929&height=1629`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,8vJAGsrrqQ7gssK7NqoEVpmVe4.png?originalFilename=green+can.png&width=929&height=1629`,
          },
          title: `Image`,
          type: T.ResponsiveImage,
        },
        UcVM9nVk_: {
          defaultValue: `LIME SURGE`,
          displayTextArea: !1,
          title: `Name`,
          type: T.String,
        },
        onUcVM9nVk_Change: { changes: `UcVM9nVk_`, type: T.ChangeHandler },
        mcp4Al6x5: {
          defaultValue: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
          displayTextArea: !1,
          title: `Description`,
          type: T.String,
        },
        onmcp4Al6x5Change: { changes: `mcp4Al6x5`, type: T.ChangeHandler },
        WbXqoe5LM: { title: `Link`, type: T.Link },
        zvGM69mDq: {
          __defaultAssetReference: `data:framer/asset-reference,uZz3YVOslk0HzISDYVRwE5Mt0dY.png?originalFilename=lime+slice.png&width=2500&height=2500`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,uZz3YVOslk0HzISDYVRwE5Mt0dY.png?originalFilename=lime+slice.png&width=2500&height=2500`,
          },
          title: `BG IMG  LEFT`,
          type: T.ResponsiveImage,
        },
        l8C0eFENG: {
          __defaultAssetReference: `data:framer/asset-reference,D2W0OUEunJNcJdx6BQNm7NaLaSY.png?originalFilename=cb406a6b-07c5-4a34-85b5-aa1d5075f49d.png&width=4096&height=4096`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,D2W0OUEunJNcJdx6BQNm7NaLaSY.png?originalFilename=cb406a6b-07c5-4a34-85b5-aa1d5075f49d.png&width=4096&height=4096`,
          },
          title: `BG IMG RIGHT`,
          type: T.ResponsiveImage,
        },
        lplyZs_3H: {
          defaultValue: `var(--token-d50a4c6b-7fb8-4dd9-8aeb-fa37ba09e423, rgb(255, 240, 173)) /* {"name":"BG-2"} */`,
          title: `Fill`,
          type: T.Color,
        },
        YoLT70GTJ: { defaultValue: `rgb(0, 0, 0)`, title: `text color`, type: T.Color },
      }),
      h(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Mona Sans Condensed Bold`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Mona Sans Condensed`,
                url: `../../assets/fonts/6iwC6STWvic4aW9ENkaXYx1Abto.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Rodger Test Regular`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Rodger Test`,
                url: `../../assets/fonts/CHHEgiPutcka3RZ3CakKwm3uQGc.woff2`,
                weight: `400`,
              },
            ],
          },
          ...j,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (W.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(O, {}, t)])) }));
  }),
  q,
  J,
  Y,
  X = e(() => {
    (g(),
      _.loadFonts([
        `CUSTOMV2;Rodger Test Regular`,
        `CUSTOMV2;Rodger Test Bold`,
        `CUSTOMV2;Rodger Test Bold Italic`,
        `CUSTOMV2;Rodger Test Italic`,
      ]),
      (q = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Rodger Test Regular`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Rodger Test`,
              url: `../../assets/fonts/CHHEgiPutcka3RZ3CakKwm3uQGc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Rodger Test Bold`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Rodger Test`,
              url: `../../assets/fonts/0Il5FVfkiVHmhGbumVkyDjV6Uno.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Rodger Test Bold Italic`,
              source: `custom`,
              style: `italic`,
              uiFamilyName: `Rodger Test`,
              url: `../../assets/fonts/2Nbb9y5bfpeHXHo9LD8ixhNes.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Rodger Test Italic`,
              source: `custom`,
              style: `italic`,
              uiFamilyName: `Rodger Test`,
              url: `../../assets/fonts/YUHsYyFn79sPfKFDQgPdxrTY5EM.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (J = [
        `.framer-2P1RZ .framer-styles-preset-1sa5jw2:not(.rich-text-wrapper), .framer-2P1RZ .framer-styles-preset-1sa5jw2.rich-text-wrapper p { --framer-font-family: "Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif; --framer-font-family-bold: "Rodger Test Bold", "Rodger Test Bold Placeholder", sans-serif; --framer-font-family-bold-italic: "Rodger Test Bold Italic", "Rodger Test Bold Italic Placeholder", sans-serif; --framer-font-family-italic: "Rodger Test Italic", "Rodger Test Italic Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-2P1RZ .framer-styles-preset-1sa5jw2:not(.rich-text-wrapper), .framer-2P1RZ .framer-styles-preset-1sa5jw2.rich-text-wrapper p { --framer-font-family: "Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif; --framer-font-family-bold: "Rodger Test Bold", "Rodger Test Bold Placeholder", sans-serif; --framer-font-family-bold-italic: "Rodger Test Bold Italic", "Rodger Test Bold Italic Placeholder", sans-serif; --framer-font-family-italic: "Rodger Test Italic", "Rodger Test Italic Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-2P1RZ .framer-styles-preset-1sa5jw2:not(.rich-text-wrapper), .framer-2P1RZ .framer-styles-preset-1sa5jw2.rich-text-wrapper p { --framer-font-family: "Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif; --framer-font-family-bold: "Rodger Test Bold", "Rodger Test Bold Placeholder", sans-serif; --framer-font-family-bold-italic: "Rodger Test Bold Italic", "Rodger Test Bold Italic Placeholder", sans-serif; --framer-font-family-italic: "Rodger Test Italic", "Rodger Test Italic Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Y = `framer-2P1RZ`));
  });
export { G as a, X as i, J as n, K as o, q as r, Y as t };
//# sourceMappingURL=pMn1GYsaH.CCsmHROa.mjs.map
