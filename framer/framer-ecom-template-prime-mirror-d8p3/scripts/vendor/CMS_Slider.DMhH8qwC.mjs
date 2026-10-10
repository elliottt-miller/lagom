import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  E as r,
  H as i,
  I as a,
  L as o,
  N as s,
  O as c,
  P as l,
  S as u,
  c as d,
  j as f,
  k as ee,
  l as te,
  m as p,
  s as m,
  u as h,
  x as g,
  y as _,
} from "./react.BtSUcPAM.mjs";
import { $ as ne, P as v, S as re, i as y, o as b, t as x } from "./motion.B_UOAosx.mjs";
import {
  A as S,
  Ft as C,
  I as w,
  M as ie,
  Mt as T,
  N as E,
  O as ae,
  Pt as oe,
  Q as D,
  R as se,
  St as ce,
  T as le,
  Tt as ue,
  W as de,
  g as fe,
  ht as pe,
  i as me,
  o as O,
} from "./framer.DuFjdl15.mjs";
var he,
  k,
  ge,
  _e,
  ve,
  ye,
  be,
  xe = e(() => {
    (d(),
      D(),
      n(),
      (he = `var(--framer-icon-mask)`),
      (k = p(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ge = v.create(k)),
      (_e = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(ge, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (ve = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7.022 18 C 3.381 18.011 0.339 15.229 0.026 11.602 C -0.287 7.975 2.233 4.713 5.822 4.1 C 11.522 3 13.022 2.48 15.022 0 C 16.022 2 17.022 4.18 17.022 8 C 17.022 13.5 12.242 18 7.022 18 Z" fill="transparent" height="18.000032682924203px" id="FJcO9kLSl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3.978 2)" width="17.021532578506463px"/><path d="M 0 9 C 0 6 1.85 3.64 5.08 3 C 7.5 2.52 10 1 11 0" fill="transparent" height="9px" id="cDSq21TJo" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 12)" width="11px"/></svg>`),
      (ye = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (be = C(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = ye(e),
            l = T(`4168833378`, ve);
          return m(_e, {
            ...c,
            className: w(`framer-171GO`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: l }),
          });
        }),
        [
          `.framer-171GO { -webkit-mask: ${he}; aspect-ratio: 1; display: block; mask: ${he}; width: 24px; }`,
        ],
        `framer-171GO`
      )),
      (be.displayName = `Leaf`),
      E(be, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: O.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: O.Number,
        },
      }));
  }),
  Se,
  Ce,
  A,
  we,
  j,
  Te,
  M,
  Ee = e(() => {
    (d(),
      D(),
      n(),
      (Se = `var(--framer-icon-mask)`),
      (Ce = p(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (A = v.create(Ce)),
      (we = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(A, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (j = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5 10 L 0 5 L 5 0" fill="transparent" height="10px" id="I9h9ZW49m" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 4)" width="5px"/><path d="M 0 0 L 10.5 0 C 13.538 0 16 2.462 16 5.5 C 16 8.538 13.538 11 10.5 11 L 7 11" fill="transparent" height="11px" id="yLi1DUcct" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 9)" width="16px"/></svg>`),
      (Te = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (M = C(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Te(e),
            l = T(`245362315`, j);
          return m(we, {
            ...c,
            className: w(`framer-2ofci`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: l }),
          });
        }),
        [
          `.framer-2ofci { -webkit-mask: ${Se}; aspect-ratio: 1; display: block; mask: ${Se}; width: 24px; }`,
        ],
        `framer-2ofci`
      )),
      (M.displayName = `Undo 2`),
      E(M, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: O.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: O.Number,
        },
      }));
  }),
  De,
  Oe,
  N,
  ke,
  P,
  Ae,
  je,
  Me = e(() => {
    (d(),
      D(),
      n(),
      (De = `var(--framer-icon-mask)`),
      (Oe = p(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (N = v.create(Oe)),
      (ke = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(N, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (P = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 14 L 12 2 C 12 0.895 11.105 0 10 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 13 C 0 13.552 0.448 14 1 14 L 3 14" fill="transparent" height="14px" id="tdBWrkE7G" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 4)" width="12px"/><path d="M 6 0 L 0 0" fill="transparent" height="1px" id="alvZldb4d" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 18)" width="6px"/><path d="M 5 10 L 7 10 C 7.552 10 8 9.552 8 9 L 8 5.35 C 8 5.123 7.922 4.903 7.78 4.726 L 4.3 0.376 C 4.111 0.139 3.824 0 3.52 0 L 0 0" fill="transparent" height="10px" id="JZD9nnkcU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14 8)" width="8px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="eI9efdmGj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(15 16)" width="4px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="Gc4c_6ygo" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 16)" width="4px"/></svg>`),
      (Ae = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (je = C(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Ae(e),
            l = T(`3570582370`, P);
          return m(ke, {
            ...c,
            className: w(`framer-JFHFe`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: l }),
          });
        }),
        [
          `.framer-JFHFe { -webkit-mask: ${De}; aspect-ratio: 1; display: block; mask: ${De}; width: 24px; }`,
        ],
        `framer-JFHFe`
      )),
      (je.displayName = `Truck`),
      E(je, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: O.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: O.Number,
        },
      }));
  }),
  F,
  Ne,
  Pe,
  Fe,
  Ie,
  I,
  L,
  R = e(() => {
    (d(),
      D(),
      n(),
      (F = `var(--framer-icon-mask)`),
      (Ne = p(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Pe = v.create(Ne)),
      (Fe = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Pe, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (Ie = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 10.997 C 16 15.997 12.5 18.497 8.34 19.947 C 8.122 20.021 7.886 20.017 7.67 19.937 C 3.5 18.497 0 15.997 0 10.997 L 0 3.997 C 0 3.445 0.448 2.997 1 2.997 C 3 2.997 5.5 1.797 7.24 0.277 C 7.678 -0.097 8.322 -0.097 8.76 0.277 C 10.51 1.807 13 2.997 15 2.997 C 15.552 2.997 16 3.445 16 3.997 Z" fill="transparent" height="19.999887302925604px" id="yfF05g1jk" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 2.003)" width="16px"/><path d="M 0 2 L 2 4 L 6 0" fill="transparent" height="4px" id="DIhqVgpJg" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 10)" width="6px"/></svg>`),
      (I = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (L = C(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = I(e),
            l = T(`2658957108`, Ie);
          return m(Fe, {
            ...c,
            className: w(`framer-Oh4KV`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: l }),
          });
        }),
        [
          `.framer-Oh4KV { -webkit-mask: ${F}; aspect-ratio: 1; display: block; mask: ${F}; width: 24px; }`,
        ],
        `framer-Oh4KV`
      )),
      (L.displayName = `Shield Check`),
      E(L, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: O.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: O.Number,
        },
      }));
  }),
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We = e(() => {
    (d(),
      D(),
      n(),
      (Le = `var(--framer-icon-mask)`),
      (Re = p(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ze = v.create(Re)),
      (Be = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(ze, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (Ve = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 Z" fill="transparent" height="18px" id="loNKVA7DW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 3)" width="18px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="xG6Y8jlz4" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 7)" width="4px"/><path d="M 15 3.672 L 11.914 0.586 C 11.133 -0.195 9.867 -0.195 9.086 0.586 L 0 9.672" fill="transparent" height="9.671572907499295px" id="O5nor_nIv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 11.328)" width="15px"/></svg>`),
      (He = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Ue = C(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = He(e),
            l = T(`1790160928`, Ve);
          return m(Be, {
            ...c,
            className: w(`framer-X2zRT`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: l }),
          });
        }),
        [
          `.framer-X2zRT { -webkit-mask: ${Le}; aspect-ratio: 1; display: block; mask: ${Le}; width: 24px; }`,
        ],
        `framer-X2zRT`
      )),
      (Ue.displayName = `Image`),
      E(Ue, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: O.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: O.Number,
        },
      }));
  }),
  Ge,
  Ke,
  z,
  qe,
  B,
  V,
  Je,
  H,
  Ye = e(() => {
    (d(),
      D(),
      x(),
      n(),
      We(),
      (Ge = `framer-rGCSg`),
      (Ke = { hnOMTX3Bx: `framer-v-t1qutv` }),
      (z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qe = ({ value: e, children: t }) => {
        let n = s(b),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(b.Provider, { value: i, children: t });
      }),
      (B = v.create(o)),
      (V = ({ description: e, featureIcon: t, height: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        XFNINoqDh: t ?? o.XFNINoqDh ?? Ue,
        xHIxtFb3s: e ?? o.xHIxtFb3s ?? `Description text for this feature goes here`,
        xRbSnhMa9: i ?? o.xRbSnhMa9 ?? `Feature Title`,
      })),
      (Je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = C(
        p(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = r(),
            { activeLocale: s, setLocale: c } = ue();
          pe();
          let {
              style: l,
              className: d,
              layoutId: f,
              variant: ee,
              XFNINoqDh: te,
              xRbSnhMa9: p,
              xHIxtFb3s: g,
              ..._
            } = V(e),
            {
              baseVariant: ne,
              classNames: re,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: ie,
              setVariant: T,
              variants: E,
            } = oe({ defaultVariant: `hnOMTX3Bx`, ref: i, variant: ee, variantClassNames: Ke }),
            D = Je(e, E),
            se = w(Ge);
          return m(y, {
            id: f ?? a,
            children: m(B, {
              animate: E,
              initial: !1,
              children: m(qe, {
                value: z,
                children: h(v.div, {
                  ..._,
                  ...x,
                  className: w(se, `framer-t1qutv`, d, re),
                  "data-framer-name": `Default`,
                  layoutDependency: D,
                  layoutId: `hnOMTX3Bx`,
                  ref: i,
                  style: { ...l },
                  children: [
                    m(fe, {
                      animated: !0,
                      className: `framer-1ran1ss`,
                      Component: te,
                      layoutDependency: D,
                      layoutId: `tThxsQ2BA`,
                      style: { "--1m973uw": `rgb(0, 0, 0)`, "--js9iwy": 1.4 },
                    }),
                    m(ae, {
                      __fromCanvasComponent: !0,
                      children: m(o, {
                        children: m(v.h3, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                            "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                            "--framer-font-size": `18px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-0.03em`,
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                            "--framer-text-transform": `capitalize`,
                          },
                          children: `Feature Title`,
                        }),
                      }),
                      className: `framer-xwnfkf`,
                      fonts: [`FS;General Sans-medium`],
                      layoutDependency: D,
                      layoutId: `oaqfshhLt`,
                      style: {
                        "--extracted-a0htzi": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      },
                      text: p,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    m(ae, {
                      __fromCanvasComponent: !0,
                      children: m(o, {
                        children: m(v.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                            "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                            "--framer-letter-spacing": `-0.03em`,
                            "--framer-line-height": `1.1em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-294d8b40-7684-44eb-9940-610bda2f951f, rgb(68, 68, 68)))`,
                          },
                          children: `Description text for this feature goes here`,
                        }),
                      }),
                      className: `framer-m2fbod`,
                      fonts: [`FS;General Sans-variable`],
                      layoutDependency: D,
                      layoutId: `rA068UeKV`,
                      style: {
                        "--extracted-2gg91v": `"wght" 450`,
                        "--extracted-r6o4lv": `var(--token-294d8b40-7684-44eb-9940-610bda2f951f, rgb(68, 68, 68))`,
                      },
                      text: g,
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
          `.framer-rGCSg.framer-9v1qk4, .framer-rGCSg .framer-9v1qk4 { display: block; }`,
          `.framer-rGCSg.framer-t1qutv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 200px; }`,
          `.framer-rGCSg .framer-1ran1ss { flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 36px; }`,
          `.framer-rGCSg .framer-xwnfkf, .framer-rGCSg .framer-m2fbod { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ],
        `framer-rGCSg`
      )),
      (H.displayName = `Feature Card`),
      (H.defaultProps = { height: 112.5, width: 200 }),
      E(H, {
        XFNINoqDh: {
          defaultValue: {
            identifier: `module:RXE0dB9QGQoCsELBIYfx/QKg5cgn9UPdfTGIK2ABC/mQvpUH62B.js:default`,
            moduleId: `RXE0dB9QGQoCsELBIYfx`,
          },
          setModuleId: `Y7SpbVH16cWqMhj75z1M`,
          title: `Feature Icon`,
          type: O.VectorSetItem,
        },
        xRbSnhMa9: { defaultValue: `Feature Title`, title: `Title`, type: O.String },
        onxRbSnhMa9Change: { changes: `xRbSnhMa9`, type: O.ChangeHandler },
        xHIxtFb3s: {
          defaultValue: `Description text for this feature goes here`,
          displayTextArea: !0,
          title: `Description`,
          type: O.String,
        },
        onxHIxtFb3sChange: { changes: `xHIxtFb3s`, type: O.ChangeHandler },
      }),
      ie(
        H,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe,
  W,
  Ze,
  Qe,
  $e,
  G,
  et,
  K,
  q,
  J,
  Y,
  X,
  tt = e(() => {
    (d(),
      D(),
      x(),
      n(),
      xe(),
      Ee(),
      Me(),
      R(),
      Ye(),
      (Xe = de(H)),
      (W = [`R3_z1VI2c`, `F5sb8i3JD`, `n9TzDIhO2`]),
      (Ze = `framer-Mmdyv`),
      (Qe = {
        F5sb8i3JD: `framer-v-1b7tdo5`,
        n9TzDIhO2: `framer-v-21slf5`,
        R3_z1VI2c: `framer-v-pdnm0d`,
      }),
      ($e = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = ({ value: e, children: t }) => {
        let n = s(b),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(b.Provider, { value: i, children: t });
      }),
      (et = { Desktop: `R3_z1VI2c`, Phone: `n9TzDIhO2`, Tablet: `F5sb8i3JD` }),
      (K = v.create(o)),
      (q = (e, t) => {
        let [n, r] = _(e),
          [i, a] = _(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (J = ({
        description1: e,
        description2: t,
        description3: n,
        description4: r,
        headline: i,
        height: a,
        icon1: o,
        icon2: s,
        icon3: c,
        icon4: l,
        id: u,
        title1: d,
        title2: f,
        title3: ee,
        title4: te,
        width: p,
        ...m
      }) => ({
        ...m,
        DfcF0tAQO: ee ?? m.DfcF0tAQO ?? `Free 30 Days Returns`,
        FoWaAjIxI:
          e ??
          m.FoWaAjIxI ??
          `We ship to over 100 countries with fast and reliable delivery. Track your order and get it wherever you are.`,
        Fw5a1sfJT: te ?? m.Fw5a1sfJT ?? `Secure Payments`,
        hC6AEh6Cb: f ?? m.hC6AEh6Cb ?? `Sustainable Cloths`,
        iOL2_YcPF: s ?? m.iOL2_YcPF ?? be,
        mrZof3VPr: o ?? m.mrZof3VPr ?? je,
        TDgn8aGF5: c ?? m.TDgn8aGF5 ?? M,
        TJcUIYvxP: i ?? m.TJcUIYvxP ?? `Shop With Confidence`,
        UoO6ML1Xo:
          r ??
          m.UoO6ML1Xo ??
          `Shop safely with encrypted checkout. We support all major payment methods for your convenience.`,
        variant: et[m.variant] ?? m.variant ?? `R3_z1VI2c`,
        vhRGHsvJ0:
          n ??
          m.vhRGHsvJ0 ??
          `Not satisfied? Return within 30 days for a full refund. No questions asked, totally hassle-free.`,
        wsw_E_Efx: d ?? m.wsw_E_Efx ?? `Worldwide Shipping`,
        WYgbEzxeh: l ?? m.WYgbEzxeh ?? L,
        y0w8cG1_S:
          t ??
          m.y0w8cG1_S ??
          `Every piece is made from responsibly sourced materials. Wear with purpose, live with less impact.`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        p(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = r(),
            { activeLocale: s, setLocale: c } = ue(),
            l = pe(),
            {
              style: d,
              className: f,
              layoutId: ee,
              variant: te,
              TJcUIYvxP: p,
              mrZof3VPr: g,
              wsw_E_Efx: _,
              onwsw_E_EfxChange: ne,
              FoWaAjIxI: re,
              onFoWaAjIxIChange: b,
              iOL2_YcPF: x,
              hC6AEh6Cb: C,
              onhC6AEh6CbChange: ie,
              y0w8cG1_S: T,
              ony0w8cG1_SChange: E,
              TDgn8aGF5: D,
              DfcF0tAQO: se,
              onDfcF0tAQOChange: ce,
              vhRGHsvJ0: le,
              onvhRGHsvJ0Change: de,
              WYgbEzxeh: fe,
              Fw5a1sfJT: O,
              onFw5a1sfJTChange: he,
              UoO6ML1Xo: k,
              onUoO6ML1XoChange: ge,
              ..._e
            } = J(e),
            [ve, ye] = q(_, ne),
            [be, xe] = q(re, b),
            [Se, Ce] = q(C, ie),
            [A, we] = q(T, E),
            [j, Te] = q(se, ce),
            [M, Ee] = q(le, de),
            [De, Oe] = q(O, he),
            [N, ke] = q(k, ge),
            {
              baseVariant: P,
              classNames: Ae,
              clearLoadingGesture: je,
              gestureHandlers: Me,
              gestureVariant: F,
              isLoading: Ne,
              setGestureState: Pe,
              setVariant: Fe,
              variants: Ie,
            } = oe({
              cycleOrder: W,
              defaultVariant: `R3_z1VI2c`,
              ref: i,
              variant: te,
              variantClassNames: Qe,
            }),
            I = Y(e, Ie),
            L = w(Ze);
          return m(y, {
            id: ee ?? a,
            children: m(K, {
              animate: Ie,
              initial: !1,
              children: m(G, {
                value: $e,
                children: h(v.div, {
                  ..._e,
                  ...Me,
                  className: w(L, `framer-pdnm0d`, f, Ae),
                  "data-framer-name": `Desktop`,
                  layoutDependency: I,
                  layoutId: `R3_z1VI2c`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-6fc8b207-36c1-41e3-b5f6-2bf07390879c, rgba(241, 241, 241, 0.88))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...d,
                  },
                  ...U(
                    {
                      F5sb8i3JD: { "data-framer-name": `Tablet` },
                      n9TzDIhO2: { "data-framer-name": `Phone` },
                    },
                    P,
                    F
                  ),
                  children: [
                    m(ae, {
                      __fromCanvasComponent: !0,
                      children: m(o, {
                        children: m(v.h3, {
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
                          children: `Shop With Confidence`,
                        }),
                      }),
                      className: `framer-luqpap`,
                      "data-framer-name": `Shop With Confidence`,
                      fonts: [`FS;General Sans-variable`],
                      layoutDependency: I,
                      layoutId: `IeREpkYIC`,
                      style: {
                        "--extracted-a0htzi": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                        "--extracted-zfisys": `"wght" 450`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: p,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...U(
                        {
                          F5sb8i3JD: {
                            children: m(o, {
                              children: m(v.h3, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                  "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `36px`,
                                  "--framer-font-variation-axes": `var(--extracted-zfisys, "wght" 450)`,
                                  "--framer-letter-spacing": `-0.03em`,
                                  "--framer-line-height": `1.1em`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                },
                                children: `Shop With Confidence`,
                              }),
                            }),
                          },
                          n9TzDIhO2: {
                            children: m(o, {
                              children: m(v.h3, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                  "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `30px`,
                                  "--framer-font-variation-axes": `var(--extracted-zfisys, "wght" 450)`,
                                  "--framer-letter-spacing": `-0.03em`,
                                  "--framer-line-height": `1.1em`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                },
                                children: `Shop With Confidence`,
                              }),
                            }),
                          },
                        },
                        P,
                        F
                      ),
                    }),
                    h(v.div, {
                      className: `framer-ctymxq`,
                      "data-framer-name": `Features Row`,
                      layoutDependency: I,
                      layoutId: `RpNDQnEUm`,
                      children: [
                        m(v.div, {
                          className: `framer-l2120k`,
                          "data-border": !0,
                          "data-framer-name": `Feature Worldwide`,
                          layoutDependency: I,
                          layoutId: `CiMGHazhg`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-ca8c16df-8254-4615-a9f9-4a840b8d5f55)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            n9TzDIhO2: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                          },
                          children: m(me, {
                            height: 112,
                            width: `calc(max((${l?.width || `100vw`} - 80px) / 4, 1px) - 32px)`,
                            y: (l?.y || 0) + 42 + 90 + 0 + 0 + 0 + 0,
                            ...U(
                              {
                                F5sb8i3JD: {
                                  width: `calc(max((${l?.width || `100vw`} - 60px) / 2, 1px) - 32px)`,
                                  y: (l?.y || 0) + 32 + 83.6 + 0 + 0 + 0 + 0,
                                },
                                n9TzDIhO2: {
                                  width: `max(${l?.width || `100vw`} - 60px, 1px)`,
                                  y: (l?.y || 0) + 30 + 77 + 0 + 0 + 0 + 0,
                                },
                              },
                              P,
                              F
                            ),
                            children: m(S, {
                              className: `framer-1p2ici5-container`,
                              layoutDependency: I,
                              layoutId: `DI_wGLOMm-container`,
                              nodeId: `DI_wGLOMm`,
                              rendersWithMotion: !0,
                              scopeId: `EEDr6OAhl`,
                              children: m(H, {
                                height: `100%`,
                                id: `DI_wGLOMm`,
                                layoutId: `DI_wGLOMm`,
                                onxHIxtFb3sChange: xe,
                                onxRbSnhMa9Change: ye,
                                style: { width: `100%` },
                                width: `100%`,
                                XFNINoqDh: g,
                                xHIxtFb3s: be,
                                xRbSnhMa9: ve,
                              }),
                            }),
                          }),
                        }),
                        m(v.div, {
                          className: `framer-b7hulk`,
                          "data-border": !0,
                          "data-framer-name": `Feature Sustainable`,
                          layoutDependency: I,
                          layoutId: `BubFl7n2b`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-ca8c16df-8254-4615-a9f9-4a840b8d5f55)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            F5sb8i3JD: { "--border-right-width": `0px` },
                            n9TzDIhO2: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                          },
                          children: m(me, {
                            height: 112,
                            width: `calc(max((${l?.width || `100vw`} - 80px) / 4, 1px) - 64px)`,
                            y: (l?.y || 0) + 42 + 90 + 0 + 0 + 0 + 0,
                            ...U(
                              {
                                F5sb8i3JD: {
                                  width: `calc(max((${l?.width || `100vw`} - 60px) / 2, 1px) - 64px)`,
                                  y: (l?.y || 0) + 32 + 83.6 + 0 + 0 + 0 + 0,
                                },
                                n9TzDIhO2: {
                                  width: `max(${l?.width || `100vw`} - 60px, 1px)`,
                                  y: (l?.y || 0) + 30 + 77 + 0 + 144 + 22 + 0,
                                },
                              },
                              P,
                              F
                            ),
                            children: m(S, {
                              className: `framer-1oxco8b-container`,
                              layoutDependency: I,
                              layoutId: `UB1iDYPvF-container`,
                              nodeId: `UB1iDYPvF`,
                              rendersWithMotion: !0,
                              scopeId: `EEDr6OAhl`,
                              children: m(H, {
                                height: `100%`,
                                id: `UB1iDYPvF`,
                                layoutId: `UB1iDYPvF`,
                                onxHIxtFb3sChange: we,
                                onxRbSnhMa9Change: Ce,
                                style: { width: `100%` },
                                width: `100%`,
                                XFNINoqDh: x,
                                xHIxtFb3s: A,
                                xRbSnhMa9: Se,
                              }),
                            }),
                          }),
                        }),
                        m(v.div, {
                          className: `framer-1ynr5x9`,
                          "data-border": !0,
                          "data-framer-name": `Feature Returns`,
                          layoutDependency: I,
                          layoutId: `d10eQvpQ5`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-ca8c16df-8254-4615-a9f9-4a840b8d5f55)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            n9TzDIhO2: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                          },
                          children: m(me, {
                            height: 112,
                            width: `calc(max((${l?.width || `100vw`} - 80px) / 4, 1px) - 64px)`,
                            y: (l?.y || 0) + 42 + 90 + 0 + 0 + 0 + 0,
                            ...U(
                              {
                                F5sb8i3JD: {
                                  width: `calc(max((${l?.width || `100vw`} - 60px) / 2, 1px) - 32px)`,
                                  y: (l?.y || 0) + 32 + 83.6 + 0 + 142 + 0 + 0,
                                },
                                n9TzDIhO2: {
                                  width: `max(${l?.width || `100vw`} - 60px, 1px)`,
                                  y: (l?.y || 0) + 30 + 77 + 0 + 310 + 22 + 0,
                                },
                              },
                              P,
                              F
                            ),
                            children: m(S, {
                              className: `framer-1wxw9i-container`,
                              layoutDependency: I,
                              layoutId: `mhBNN5gbd-container`,
                              nodeId: `mhBNN5gbd`,
                              rendersWithMotion: !0,
                              scopeId: `EEDr6OAhl`,
                              children: m(H, {
                                height: `100%`,
                                id: `mhBNN5gbd`,
                                layoutId: `mhBNN5gbd`,
                                onxHIxtFb3sChange: Ee,
                                onxRbSnhMa9Change: Te,
                                style: { width: `100%` },
                                width: `100%`,
                                XFNINoqDh: D,
                                xHIxtFb3s: M,
                                xRbSnhMa9: j,
                              }),
                            }),
                          }),
                        }),
                        m(v.div, {
                          className: `framer-x2ydps`,
                          "data-framer-name": `Feature Secure`,
                          layoutDependency: I,
                          layoutId: `TozoOxxeK`,
                          children: m(me, {
                            height: 112,
                            width: `calc(max((${l?.width || `100vw`} - 80px) / 4, 1px) - 32px)`,
                            y: (l?.y || 0) + 42 + 90 + 0 + 0 + 0 + 0,
                            ...U(
                              {
                                F5sb8i3JD: {
                                  width: `calc(max((${l?.width || `100vw`} - 60px) / 2, 1px) - 32px)`,
                                  y: (l?.y || 0) + 32 + 83.6 + 0 + 142 + 0 + 0,
                                },
                                n9TzDIhO2: {
                                  width: `max(${l?.width || `100vw`} - 60px, 1px)`,
                                  y: (l?.y || 0) + 30 + 77 + 0 + 476 + 22 + 0,
                                },
                              },
                              P,
                              F
                            ),
                            children: m(S, {
                              className: `framer-t6jwyx-container`,
                              layoutDependency: I,
                              layoutId: `FNtrm9qZo-container`,
                              nodeId: `FNtrm9qZo`,
                              rendersWithMotion: !0,
                              scopeId: `EEDr6OAhl`,
                              children: m(H, {
                                height: `100%`,
                                id: `FNtrm9qZo`,
                                layoutId: `FNtrm9qZo`,
                                onxHIxtFb3sChange: ke,
                                onxRbSnhMa9Change: Oe,
                                style: { width: `100%` },
                                width: `100%`,
                                XFNINoqDh: fe,
                                xHIxtFb3s: N,
                                xRbSnhMa9: De,
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
          `.framer-Mmdyv.framer-18s4j8, .framer-Mmdyv .framer-18s4j8 { display: block; }`,
          `.framer-Mmdyv.framer-pdnm0d { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 42px 40px 46px 40px; position: relative; width: 1100px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Mmdyv .framer-luqpap { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Mmdyv .framer-ctymxq { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(1px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Mmdyv .framer-l2120k { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px 32px 0px 0px; position: relative; width: 100%; }`,
          `.framer-Mmdyv .framer-1p2ici5-container, .framer-Mmdyv .framer-1oxco8b-container, .framer-Mmdyv .framer-1wxw9i-container, .framer-Mmdyv .framer-t6jwyx-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Mmdyv .framer-b7hulk, .framer-Mmdyv .framer-1ynr5x9 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
          `.framer-Mmdyv .framer-x2ydps { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px 0px 0px 32px; position: relative; width: 100%; }`,
          `.framer-Mmdyv.framer-v-1b7tdo5.framer-pdnm0d { gap: 44px; padding: 32px 30px 38px 30px; width: 810px; }`,
          `.framer-Mmdyv.framer-v-1b7tdo5 .framer-ctymxq { gap: 30px 0px; grid-template-columns: repeat(2, minmax(1px, 1fr)); }`,
          `.framer-Mmdyv.framer-v-1b7tdo5 .framer-1ynr5x9 { padding: 0px 32px 0px 0px; }`,
          `.framer-Mmdyv.framer-v-21slf5.framer-pdnm0d { gap: 44px; padding: 30px 30px 34px 30px; width: 390px; }`,
          `.framer-Mmdyv.framer-v-21slf5 .framer-ctymxq { grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(1px, 1fr)); grid-template-rows: repeat(1, min-content); }`,
          `.framer-Mmdyv.framer-v-21slf5 .framer-l2120k { padding: 0px 0px 32px 0px; }`,
          `.framer-Mmdyv.framer-v-21slf5 .framer-b7hulk, .framer-Mmdyv.framer-v-21slf5 .framer-1ynr5x9 { padding: 22px 0px 32px 0px; }`,
          `.framer-Mmdyv.framer-v-21slf5 .framer-x2ydps { padding: 22px 0px 0px 0px; }`,
          `.framer-Mmdyv[data-border="true"]::after, .framer-Mmdyv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Mmdyv`
      )),
      (X.displayName = `USP Grid`),
      (X.defaultProps = { height: 321, width: 1100 }),
      E(X, {
        variant: {
          options: [`R3_z1VI2c`, `F5sb8i3JD`, `n9TzDIhO2`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: O.Enum,
        },
        TJcUIYvxP: {
          defaultValue: `Shop With Confidence`,
          description: `______________________`,
          displayTextArea: !1,
          title: `Headline`,
          type: O.String,
        },
        onTJcUIYvxPChange: { changes: `TJcUIYvxP`, type: O.ChangeHandler },
        mrZof3VPr: {
          defaultValue: {
            identifier: `module:NZYk8BVtUVloCqCPWgpw/bDfP6u4HPmbjeImxTqFs/msTSzR8As.js:default`,
            moduleId: `NZYk8BVtUVloCqCPWgpw`,
          },
          setModuleId: `Y7SpbVH16cWqMhj75z1M`,
          title: `Icon 1`,
          type: O.VectorSetItem,
        },
        wsw_E_Efx: { defaultValue: `Worldwide Shipping`, title: `Title 1`, type: O.String },
        onwsw_E_EfxChange: { changes: `wsw_E_Efx`, type: O.ChangeHandler },
        FoWaAjIxI: {
          defaultValue: `We ship to over 100 countries with fast and reliable delivery. Track your order and get it wherever you are.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 1`,
          type: O.String,
        },
        onFoWaAjIxIChange: { changes: `FoWaAjIxI`, type: O.ChangeHandler },
        iOL2_YcPF: {
          defaultValue: {
            identifier: `module:bIqONnM9u0dmzcg2Wwak/JiCHAz1u5P1Tv84EsCIk/Wgl6XEH5v.js:default`,
            moduleId: `bIqONnM9u0dmzcg2Wwak`,
          },
          setModuleId: `Y7SpbVH16cWqMhj75z1M`,
          title: `Icon 2`,
          type: O.VectorSetItem,
        },
        hC6AEh6Cb: { defaultValue: `Sustainable Cloths`, title: `Title 2`, type: O.String },
        onhC6AEh6CbChange: { changes: `hC6AEh6Cb`, type: O.ChangeHandler },
        y0w8cG1_S: {
          defaultValue: `Every piece is made from responsibly sourced materials. Wear with purpose, live with less impact.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 2`,
          type: O.String,
        },
        ony0w8cG1_SChange: { changes: `y0w8cG1_S`, type: O.ChangeHandler },
        TDgn8aGF5: {
          defaultValue: {
            identifier: `module:NZ3jrHjX4wCXQSFG6y5U/BRN7rz5jWdKVKcuSFWQQ/RFjXZv9Le.js:default`,
            moduleId: `NZ3jrHjX4wCXQSFG6y5U`,
          },
          setModuleId: `Y7SpbVH16cWqMhj75z1M`,
          title: `Icon 3`,
          type: O.VectorSetItem,
        },
        DfcF0tAQO: { defaultValue: `Free 30 Days Returns`, title: `Title 3`, type: O.String },
        onDfcF0tAQOChange: { changes: `DfcF0tAQO`, type: O.ChangeHandler },
        vhRGHsvJ0: {
          defaultValue: `Not satisfied? Return within 30 days for a full refund. No questions asked, totally hassle-free.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 3`,
          type: O.String,
        },
        onvhRGHsvJ0Change: { changes: `vhRGHsvJ0`, type: O.ChangeHandler },
        WYgbEzxeh: {
          defaultValue: {
            identifier: `module:olrxTYydS75hIY1JstpA/KpXBN2MGRtUR0hZIWzy6/fEo4tTPpx.js:default`,
            moduleId: `olrxTYydS75hIY1JstpA`,
          },
          setModuleId: `Y7SpbVH16cWqMhj75z1M`,
          title: `Icon 4`,
          type: O.VectorSetItem,
        },
        Fw5a1sfJT: { defaultValue: `Secure Payments`, title: `Title 4`, type: O.String },
        onFw5a1sfJTChange: { changes: `Fw5a1sfJT`, type: O.ChangeHandler },
        UoO6ML1Xo: {
          defaultValue: `Shop safely with encrypted checkout. We support all major payment methods for your convenience.`,
          displayTextArea: !0,
          title: `Description 4`,
          type: O.String,
        },
        onUoO6ML1XoChange: { changes: `UoO6ML1Xo`, type: O.ChangeHandler },
      }),
      ie(
        X,
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
          ...Xe,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([se(H, {}, t)])) }));
  });
function nt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function rt(e, t, n) {
  let r = t ? e.offsetHeight : e.offsetWidth,
    i = t ? e.offsetWidth : e.offsetHeight,
    a = Math.max(1, n),
    o = r > 0 ? (r / a) * 0.35 : 0,
    s = i > 0 ? i * 0.3 : 24,
    c = [],
    l = (e, n) => {
      let r = Array.from(e.children);
      if (r.length >= 2) {
        let i = r
          .map((e) => ({
            left: e.offsetLeft,
            top: e.offsetTop,
            width: e.offsetWidth,
            height: e.offsetHeight,
          }))
          .filter((e) => e.width > 2 && e.height > 2);
        if (i.length >= 2) {
          let r = i.map((e) => (t ? e.top : e.left)),
            l = e.getBoundingClientRect(),
            u = t ? l.top : l.left,
            d = i
              .map((e) => ({ start: (t ? e.top : e.left) - u, size: t ? e.height : e.width }))
              .sort((e, t) => e.start - t.start),
            f = d.length > 0 ? d.map((e) => Math.round((e.start - d[0].start) * 100) / 100) : [],
            ee = d.map((e) => Math.round(e.size * 100) / 100),
            te = Math.max(...r) - Math.min(...r),
            p = i.reduce((e, n) => e + (t ? n.height : n.width), 0) / i.length,
            m = i.reduce((e, n) => e + (t ? n.width : n.height), 0) / i.length,
            h = i.length >= a,
            g = p >= o && m >= s;
          c.push({
            element: e,
            depth: n,
            count: i.length,
            offsets: f,
            sizes: ee,
            spread: te,
            avgAxis: p,
            avgCross: m,
            hasEnoughItems: h,
            looksLikeSlides: g,
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
    ee = c.filter((e) => e.looksLikeSlides),
    te = c,
    p = u(d) || u(f) || u(ee) || u(te);
  return {
    element: p?.element || null,
    count: p?.count || 0,
    offsets: p?.offsets || [],
    sizes: p?.sizes || [],
  };
}
function it(e, t, n = 0.5) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (Math.abs(e[r] - t[r]) > n) return !1;
  return !0;
}
function at(e, t) {
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
function ot({ alignment: e, inset: t, offX: n, offY: r, splitSide: i }) {
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
function Z(e) {
  let { style: t, content: n, direction: o = `Left`, autoPlay: s = !1 } = e,
    d = { ...xt, ...(e.layout || {}) },
    p = { ...St, ...(e.playback || {}) },
    y = { ...Ct, ...(e.navigation || {}) },
    b = { ...wt, ...(e.arrows || {}) },
    x = { ...Tt, ...(e.dots || {}) },
    S = { ...Et, ...(e.centerFocus || {}) },
    C = { ...Dt, ...(e.appear || {}) },
    w = e.animationOptions || Ot,
    ie = e.arrowAlignment ?? b.alignment,
    T = e.arrowSize ?? b.size,
    E = e.arrowOffsetX ?? b.offsetX,
    ae = e.arrowOffsetY ?? b.offsetY,
    { interval: oe, pauseOnHover: D, tapToPause: se, startAt: ue } = p,
    de = e.slideMode === `Infinite`,
    fe = de || p.loop,
    { align: pe } = d,
    me = y.draggable,
    O = le.current() === le.canvas,
    he = ce(),
    k = O || he,
    ge = u(null),
    _e = u(null),
    [ve, ye] = _(!1),
    [be, xe] = _(!1),
    Se = u(!1),
    Ce = `cms-slider-${r().replace(/:/g, `-`)}`,
    A = o === `Up` || o === `Down`,
    we = o === `Right` || o === `Down`,
    [j, Te] = _(0),
    [M, Ee] = _(0),
    [De, Oe] = _(0),
    [N, ke] = _([]),
    [P, Ae] = _([]),
    [je, Me] = _(!1),
    [F, Ne] = _(!1),
    [Pe, Fe] = _(!1),
    [Ie, I] = _(!1),
    L = u(!1),
    R = {
      onPointerEnter: (e) => {
        e.pointerType !== `touch` && ((L.current = !0), I(!0));
      },
      onPointerLeave: () => {
        ((L.current = !1), I(!1));
      },
      onPointerCancel: () => {
        ((L.current = !1), I(!1));
      },
    },
    [Le, Re] = _(!1),
    ze = u(!1);
  g(() => {
    (!s || !se) && ((ze.current = !1), Re(!1));
  }, [s, se]);
  let [Be, Ve] = _(null),
    [He, Ue] = _(0),
    [We, Ge] = _(k),
    Ke = je || F,
    [z, qe] = _(!1);
  g(() => {
    if (i === void 0) return;
    let e = i.matchMedia(`(prefers-reduced-motion: reduce)`);
    a(() => {
      qe(e.matches);
    });
    let t = (e) => {
      (a(() => {
        qe(e.matches);
      }),
        kt.current?.stop());
    };
    return (e.addEventListener(`change`, t), () => e.removeEventListener(`change`, t));
  }, []);
  let B = nt(Math.round(e.items ?? xt.items), 1, 8),
    V = l(() => {
      if (y.step === `Page`) {
        let e = Math.ceil(j / B);
        return Math.max(0, e - 1);
      }
      return Math.max(0, j - (de ? 1 : B));
    }, [j, B, y.step, de]),
    Je = V + 1,
    H = c.count(n) > 0,
    Ye = O ? j > 0 || H : j > B,
    U = (O && j > 0) || H,
    Xe = b.show && U && (!b.fadeIn || Ke || O);
  g(() => {
    Xe || ((L.current = !1), I(!1));
  }, [Xe]);
  let W = Math.min(De, V),
    Ze = l(() => {
      if (!n) return null;
      let e = c.count(n);
      return e > 1
        ? m(`div`, {
            style: {
              display: `flex`,
              width: `100%`,
              height: `auto`,
              gap: d.gap,
              flexDirection: A ? `column` : `row`,
            },
            children: c.map(n, (t, n) =>
              m(`div`, {
                role: `group`,
                "aria-roledescription": `Slide`,
                "aria-label": `Slide ${n + 1} of ${e}`,
                children: t,
              })
            ),
          })
        : n;
    }, [n, d.gap, A, !1]);
  (g(() => {
    O &&
      a(() => {
        Oe(0);
      });
  }, [B, O, o]),
    g(() => {
      let e = ge.current;
      if (!e || typeof ResizeObserver > `u`) return;
      let t = 0,
        n = null,
        r,
        i = () => {
          (t && cancelAnimationFrame(t),
            (t = requestAnimationFrame(() => {
              if (!e) return;
              let t = A ? e.offsetHeight : e.offsetWidth;
              if (t < 10) return;
              let i = d.padding * 2,
                { element: o, count: s, offsets: c, sizes: l } = rt(e, A, B);
              o && o !== e
                ? o !== n && (n && r.unobserve(n), r.observe(o), (n = o))
                : (n &&= (r.unobserve(n), null));
              let u = at(e, o);
              a(() => {
                if (
                  (Ee(t - i),
                  Ve((e) =>
                    u
                      ? e &&
                        Math.abs(e.left - u.left) < 0.5 &&
                        Math.abs(e.width - u.width) < 0.5 &&
                        Math.abs(e.bottom - u.bottom) < 0.5
                        ? e
                        : u
                      : e === null
                        ? e
                        : null
                  ),
                  Ue(e.offsetHeight),
                  ke((e) => (it(e, c) ? e : c)),
                  Ae((e) => (it(e, l) ? e : l)),
                  O)
                ) {
                  let e = Math.max(B + 2, 5);
                  Te(s > e ? s : e);
                } else s > 0 && Te(s);
                Ge(!0);
              });
            })));
        };
      ((r = new ResizeObserver(i)), r.observe(e));
      let o = null;
      return (
        typeof MutationObserver < `u` &&
          ((o = new MutationObserver(i)), o.observe(e, { childList: !0, subtree: !0 })),
        i(),
        () => {
          (r.disconnect(), o?.disconnect(), t && cancelAnimationFrame(t));
        }
      );
    }, [d.padding, O, B, A, n]));
  let Qe = (B - 1) * d.gap,
    $e = M > 0 ? (M - Qe) / Math.max(1, B) : 0,
    G = M > 0 ? $e + d.gap : 0,
    et =
      l(() => {
        if (N.length > 0) {
          let e = N.length - 1,
            t = N[e] ?? 0,
            n = e > 0 ? Math.max(0, t - (N[e - 1] ?? 0)) : Math.max(0, G - d.gap),
            r = P[e] ?? n,
            i = Math.max(0, t + Math.max(0, r));
          return Math.max(0, i - M);
        }
        let e = y.step === `Page` ? V * B * G : V * G;
        return Math.max(0, e);
      }, [N, P, G, d.gap, M, V, y.step, B]) <= ft,
    K = j <= B || V <= 0 || et,
    q = j > 0 ? (N[j - 1] ?? (j - 1) * G) + (P[j - 1] ?? $e) + d.gap : 0,
    J = de && !K && q > 0,
    Y = !K && (fe || W > 0) && V > 0,
    X = !K && (fe || W < V) && V > 0,
    tt = ne(0),
    Z = ne(0),
    kt = u(null),
    At = u(De),
    jt = u(0),
    Mt = u(0),
    Nt = u(null),
    Q = u({
      dragging: !1,
      startPos: 0,
      startTranslate: 0,
      lastPos: 0,
      lastTime: 0,
      velocity: 0,
      moved: !1,
      captured: !1,
    }),
    Pt = u({ accum: 0, lastStepAt: 0, quietId: 0 }),
    Ft = u(null),
    It = u(null),
    Lt = f(
      (e) => {
        (A ? Z : tt).set(e);
      },
      [A, tt, Z]
    ),
    Rt = () => (A ? Z.get() : tt.get()),
    zt = f(
      (e) => {
        let t = nt(y.step === `Page` ? e * B : e, 0, Math.max(0, j - 1));
        return (we ? 1 : -1) * (N[t] ?? t * G);
      },
      [y.step, B, j, we, N, G]
    ),
    Bt = f(
      (e) => {
        let t = V + 1,
          n = ((e % t) + t) % t,
          r = y.step === `Page` ? n * B : n;
        return Math.floor(e / t) * q + (N[r] ?? r * G);
      },
      [V, y.step, B, q, N, G]
    ),
    Vt = f(
      (e, t = !0, n = !1) => {
        if (k) return;
        let r = A ? Z : tt,
          i = ++Mt.current;
        if ((kt.current?.stop(), J)) {
          let a = V + 1,
            o = t ? (n ? e : jt.current + e - At.current) : e,
            s = ((o % a) + a) % a;
          ((jt.current = o), (At.current = s), Oe(s));
          let c = () => {
            Mt.current === i && ((jt.current = s), r.set(-Bt(s)));
          };
          !t || z ? c() : (kt.current = re(r, -Bt(o), { ...w, onComplete: c }));
          return;
        }
        let a = fe ? (e < 0 ? V : e > V ? 0 : e) : nt(e, 0, V);
        ((At.current = a), (jt.current = a), Oe(a));
        let o = zt(a);
        !t || z ? r.set(o) : (kt.current = re(r, o, w));
      },
      [k, A, tt, Z, J, V, Bt, z, w, fe, zt]
    ),
    Ht = u(Vt);
  ee(() => {
    Ht.current = Vt;
  }, [Vt]);
  let Ut = J && we ? -1 : 1,
    Wt = f(() => {
      Ht.current(At.current - Ut);
    }, [Ut]),
    Gt = f(() => {
      Ht.current(At.current + Ut);
    }, [Ut]);
  (ee(() => {
    if (k) return;
    let e = ge.current,
      t = Nt.current;
    if (!e || !t) return;
    let n = A ? Z : tt,
      r = t.style.getPropertyValue(`transform`),
      i = t.style.getPropertyPriority(`transform`),
      a = [],
      o = [],
      s = () => {
        let e = n.get(),
          r = -e;
        for (let e of o) {
          let t = Math.ceil((r - e.offset - e.size) / q) * q;
          e.el.style.setProperty(`translate`, A ? `0px ${t}px` : `${t}px 0px`, `important`);
        }
        t.style.setProperty(
          `transform`,
          A ? `translate3d(0px, ${e}px, 0px)` : `translate3d(${e}px, 0px, 0px)`,
          `important`
        );
      },
      c = () => {
        if ((a.forEach((e) => e()), (a = []), (o = []), J)) {
          let t = rt(e, A, B);
          if (t.element) {
            o = Array.from(t.element.children)
              .filter((e) => e instanceof HTMLElement)
              .filter((e) => e.offsetWidth > 2 && e.offsetHeight > 2)
              .map((e) => {
                let t = e.style.getPropertyValue(`translate`),
                  n = e.style.getPropertyPriority(`translate`);
                return (
                  a.push(() => {
                    t
                      ? e.style.setProperty(`translate`, t, n)
                      : e.style.removeProperty(`translate`);
                  }),
                  {
                    el: e,
                    offset: A ? e.offsetTop : e.offsetLeft,
                    size: A ? e.offsetHeight : e.offsetWidth,
                  }
                );
              });
            let e = Math.min(...o.map((e) => e.offset));
            o.forEach((t) => {
              t.offset -= e;
            });
          }
        }
        s();
      };
    c();
    let l = n.on(`change`, s),
      u = new MutationObserver(c);
    return (
      u.observe(e, { childList: !0, subtree: !0 }),
      () => {
        (l(),
          u.disconnect(),
          a.forEach((e) => e()),
          r ? t.style.setProperty(`transform`, r, i) : t.style.removeProperty(`transform`));
      }
    );
  }, [J, k, A, B, j, q, N, P, n, tt, Z]),
    g(() => {
      (kt.current?.stop(), A ? tt.set(0) : Z.set(0), j > 0 && Ht.current(ue === `End` ? V : 0, !1));
    }, [ue, j, V, de, o, k, tt, Z]),
    g(() => {
      G <= 0 || Ht.current(nt(At.current, 0, V), !1);
    }, [G, q, J, V]));
  let Kt = (e) => {
    if (!s || !se || k || (e.detail > 0 && me && Q.current.moved)) return;
    let t = ge.current,
      n = e.target;
    if (!t || !(n instanceof Node)) return;
    let { element: r } = rt(t, A, B);
    if (!r || !Array.from(r.children).some((e) => e === n || e.contains(n))) return;
    let i = !ze.current;
    ((ze.current = i), Re(i));
  };
  g(() => {
    if (!s || !We || !be || k || K || z || Le || Ie || (D && Ke)) return;
    let e = i.setInterval(
      () => {
        Se.current &&
          !Q.current.dragging &&
          !ze.current &&
          !L.current &&
          Ht.current(At.current + Ut);
      },
      nt(oe, 0.5, 30) * 1e3
    );
    return () => i.clearInterval(e);
  }, [s, We, be, k, K, z, Le, Ie, D, Ke, oe, Ut]);
  let qt = f(
      (e) => {
        if (!y.keyboard || k || K) return;
        let t = e.target;
        if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
        let n = A ? `ArrowUp` : `ArrowLeft`,
          r = A ? `ArrowDown` : `ArrowRight`;
        (e.key === n && (e.preventDefault(), Wt()), e.key === r && (e.preventDefault(), Gt()));
      },
      [y.keyboard, k, K, A, Wt, Gt]
    ),
    Jt = (e) => {
      if (!me || k || K || e.button !== 0) return;
      kt.current?.stop();
      let t = A ? e.clientY : e.clientX;
      (Object.assign(Q.current, {
        dragging: !0,
        startPos: t,
        startTranslate: Rt(),
        lastPos: t,
        lastTime: performance.now(),
        velocity: 0,
        moved: !1,
        captured: !1,
      }),
        Fe(!0));
    },
    Yt = (e) => {
      let t = Q.current;
      if (!t.dragging) return;
      let n = A ? e.clientY : e.clientX,
        r = n - t.startPos;
      if (Math.abs(r) > st && ((t.moved = !0), !t.captured))
        try {
          (e.currentTarget.setPointerCapture(e.pointerId), (t.captured = !0));
        } catch {}
      let i = performance.now(),
        a = i - t.lastTime;
      (a > 0 && (t.velocity = (n - t.lastPos) / a), (t.lastTime = i), (t.lastPos = n));
      let o = t.startTranslate + r;
      if (!J) {
        let e = Math.abs(zt(V)),
          t = we ? 0 : -e,
          n = we ? e : 0;
        (o > n && (o = n + (o - n) * dt), o < t && (o = t + (o - t) * dt));
      }
      Lt(o);
    },
    Xt = (e) => {
      if (((Q.current.dragging = !1), Fe(!1), Q.current.captured)) {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        Q.current.captured = !1;
      }
    },
    Zt = (e) => {
      if (!Q.current.dragging) return;
      if ((Xt(e), !Q.current.moved)) {
        Ht.current(At.current);
        return;
      }
      let t = Rt() + nt(Q.current.velocity, -2, ct) * lt,
        n = V + 1,
        r = J ? Math.floor(-t / q) : 0,
        a = 0,
        o = 1 / 0,
        s = J ? (r - 1) * n : 0,
        c = J ? (r + 2) * n - 1 : V;
      for (let e = s; e <= c; e++) {
        let n = J ? -Bt(e) : zt(e),
          r = Math.abs(t - n);
        r < o && ((o = r), (a = e));
      }
      (Ht.current(K ? 0 : a, !0, J),
        It.current && i.removeEventListener(`click`, It.current, !0),
        Ft.current !== null && i.clearTimeout(Ft.current));
      let l = (e) => {
        (e.preventDefault(), e.stopPropagation());
      };
      ((It.current = l),
        i.addEventListener(`click`, l, { capture: !0, once: !0 }),
        (Ft.current = i.setTimeout(() => {
          (i.removeEventListener(`click`, l, !0), (It.current = null), (Ft.current = null));
        }, ut)));
    },
    Qt = (e) => {
      Q.current.dragging && (Xt(e), Ht.current(K ? 0 : At.current));
    };
  (g(() => {
    let e = Nt.current;
    if (k || !me || K || !e) return;
    let t = (e) => {
      if (Q.current.dragging) return;
      let t = A ? e.deltaY : e.deltaX,
        n = A ? e.deltaX : e.deltaY;
      if (Math.abs(t) <= Math.abs(n) || Math.abs(t) < 1) return;
      e.preventDefault();
      let r = performance.now(),
        a = Pt.current;
      if (
        (r - a.lastStepAt > mt && (a.accum += t),
        i.clearTimeout(a.quietId),
        (a.quietId = i.setTimeout(() => {
          a.accum = 0;
        }, ht)),
        Math.abs(a.accum) >= pt)
      ) {
        let e = a.accum > 0 ? 1 : -1;
        ((a.accum = 0), (a.lastStepAt = r), Ht.current(At.current + e));
      }
    };
    return (
      e.addEventListener(`wheel`, t, { passive: !1 }),
      () => {
        (e.removeEventListener(`wheel`, t), i.clearTimeout(Pt.current.quietId));
      }
    );
  }, [k, me, K, A]),
    g(
      () => () => {
        (++Mt.current,
          kt.current?.stop(),
          Ft.current !== null && i.clearTimeout(Ft.current),
          It.current && i.removeEventListener(`click`, It.current, !0));
      },
      []
    ));
  let $t = l(() => {
      let e = b.variant === `Fill` || b.variant === `Both`,
        t = b.variant === `Outline` || b.variant === `Both`;
      return {
        width: T,
        height: T,
        borderRadius: b.radius,
        background: e ? b.backdrop : `transparent`,
        color: b.fill,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        border: t ? `${b.borderWidth}px solid ${b.borderColor}` : `none`,
        padding: 0,
        margin: 0,
        boxSizing: `border-box`,
        font: `inherit`,
        lineHeight: 0,
        cursor: `pointer`,
        transition: `opacity 0.2s ease, transform 0.15s ease`,
        pointerEvents: O ? `none` : Xe ? `auto` : `none`,
        boxShadow: b.shadow ? `0 4px ${b.shadowBlur}px ${b.shadowColor}` : `none`,
        flexShrink: 0,
        appearance: `none`,
        WebkitAppearance: `none`,
      };
    }, [
      T,
      b.radius,
      b.backdrop,
      b.fill,
      b.variant,
      b.borderWidth,
      b.borderColor,
      b.shadow,
      b.shadowBlur,
      b.shadowColor,
      Xe,
      O,
    ]),
    en = f(
      (e) => ({
        ...$t,
        opacity: Xe ? (e ? b.disabledOpacity : 1) : 0,
        cursor: e ? `not-allowed` : `pointer`,
      }),
      [$t, b.disabledOpacity, Xe]
    ),
    tn = (e) => {
      let t = b.type === `Split`;
      return {
        ...ot({ alignment: ie, inset: b.inset, offX: E, offY: ae, splitSide: t ? e : void 0 }),
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        pointerEvents: `none`,
        gap: t ? void 0 : b.gap,
      };
    },
    nn = (e) => {
      let t = e === `prev` ? b.prevImage : b.nextImage,
        n = e === `prev` ? yt : bt,
        r = `0deg`;
      return (
        !t && A && (r = `90deg`),
        t
          ? m(`img`, {
              src: t,
              style: { width: `100%`, height: `100%`, objectFit: `contain`, pointerEvents: `none` },
              alt: ``,
              "aria-hidden": `true`,
            })
          : m(`div`, {
              style: { transform: `rotate(${r})`, display: `flex` },
              children: m(n, { size: T, color: b.fill }),
            })
      );
    },
    rn = (e = !1) => {
      if (x.type === `None`) return null;
      if (x.type === `Dots`) {
        let e = x.compact && Je > x.compactVisible,
          t = Math.max(1, Math.min(x.compactVisible, Je)),
          n = x.size + x.gap,
          r = t * x.size + (t - 1) * x.gap,
          i = Math.floor(t / 2),
          a = e ? nt(W - i, 0, Je - t) : 0,
          o = a + t - 1,
          s = e ? -a * n : 0,
          c = (t) => !e || (t >= a && t <= o),
          l = (e) => (e === W ? _t : 1),
          u = (e) => (c(e) ? (e === W ? 1 : x.opacity) : 0),
          d = Array.from({ length: Je }).map((e, t) =>
            m(
              `button`,
              {
                type: `button`,
                onClick: (e) => {
                  (e.stopPropagation(), Vt(t, !0));
                },
                role: `tab`,
                "aria-selected": t === W,
                "aria-label": `${y.step === `Page` ? `Page` : `Slide`} ${t + 1}`,
                style: {
                  borderRadius: `50%`,
                  border: `none`,
                  padding: 0,
                  cursor: `pointer`,
                  transition: `transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.3s ease, background 0.2s ease`,
                  width: x.size,
                  height: x.size,
                  flexShrink: 0,
                  background: t === W ? x.activeFill : x.fill,
                  opacity: u(t),
                  transform: `scale(${l(t)})`,
                },
              },
              t
            )
          );
        return m(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            justifyContent: e ? `flex-start` : `center`,
            padding: x.padding,
            borderRadius: x.radius,
            background: x.backdrop,
            backdropFilter: x.blur > 0 ? `blur(${x.blur}px)` : void 0,
            pointerEvents: O ? `none` : `auto`,
            overflow: e ? `hidden` : `visible`,
            width: e ? r + x.padding * 2 : void 0,
            boxSizing: `border-box`,
          },
          role: `tablist`,
          "aria-label": `Slide navigation`,
          children: m(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: x.gap,
              transform: `translateX(${s}px)`,
              transition: e ? `transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)` : void 0,
              flexShrink: 0,
            },
            children: d,
          }),
        });
      }
      if (x.type === `Progress`) {
        let t = Math.max(1, Je),
          n = e ? `100%` : x.progressWidth;
        return x.compact
          ? m(`div`, {
              style: { width: n, display: `flex`, gap: 3, pointerEvents: O ? `none` : `auto` },
              role: `tablist`,
              "aria-label": `Slide navigation`,
              children: Array.from({ length: t }).map((e, t) =>
                m(
                  `button`,
                  {
                    type: `button`,
                    onClick: (e) => {
                      (e.stopPropagation(), Vt(t, !0));
                    },
                    role: `tab`,
                    "aria-selected": t === W,
                    "aria-label": `${y.step === `Page` ? `Page` : `Slide`} ${t + 1}`,
                    style: {
                      flex: 1,
                      minWidth: 0,
                      height: gt,
                      padding: 0,
                      border: `none`,
                      cursor: `pointer`,
                      borderRadius: x.radius,
                      background: t <= W ? x.activeFill : x.backdrop,
                      backdropFilter: x.blur > 0 ? `blur(${x.blur}px)` : void 0,
                      transition: `background 0.3s ease`,
                    },
                  },
                  t
                )
              ),
            })
          : m(`div`, {
              style: {
                width: n,
                height: gt,
                background: x.backdrop,
                borderRadius: x.radius,
                overflow: `hidden`,
                backdropFilter: x.blur > 0 ? `blur(${x.blur}px)` : void 0,
                pointerEvents: O ? `none` : `auto`,
              },
              children: m(v.div, {
                style: {
                  width: `100%`,
                  height: `100%`,
                  background: x.activeFill,
                  transformOrigin: `left center`,
                },
                animate: { scaleX: (W + 1) / t },
                transition: w,
              }),
            });
      }
      return x.type === `Numbers`
        ? h(`div`, {
            style: {
              padding: `${x.padding * 0.5}px ${x.padding}px`,
              background: x.backdrop,
              borderRadius: x.radius,
              backdropFilter: x.blur > 0 ? `blur(${x.blur}px)` : void 0,
              fontFamily: `inherit`,
              fontSize: 13,
              fontWeight: 500,
              color: x.fill,
              display: `flex`,
              gap: 4,
              pointerEvents: O ? `none` : `auto`,
            },
            children: [
              m(`span`, { style: { color: x.activeFill }, children: W + 1 }),
              m(`span`, { children: `/` }),
              m(`span`, { children: Je }),
            ],
          })
        : null;
    },
    an = x.alignment.includes(`Top`),
    on = ie.includes(`Top`),
    sn = b.show && U && b.type === `Inline`,
    cn = !sn && Ye && x.type !== `None`,
    ln = (e) => (e.includes(`Left`) ? `flex-start` : e.includes(`Right`) ? `flex-end` : `center`),
    un = {
      position: `relative`,
      zIndex: 11,
      display: `flex`,
      width: `100%`,
      alignItems: `center`,
      justifyContent: ln(x.alignment),
      marginTop: an ? 0 : x.inset,
      marginBottom: an ? x.inset : 0,
      transform: x.offsetX || x.offsetY ? `translate(${x.offsetX}px, ${x.offsetY}px)` : void 0,
    },
    dn = Be ? Math.max(0, Be.bottom - He) : 0,
    fn = {
      ...un,
      marginTop: an ? un.marginTop : x.inset + dn,
      ...(Be
        ? { width: Be.width, marginLeft: Be.left }
        : { paddingLeft: d.padding, paddingRight: d.padding }),
      boxSizing: `border-box`,
    },
    pn = {
      position: `relative`,
      zIndex: 11,
      display: `flex`,
      width: `100%`,
      alignItems: `center`,
      justifyContent: ln(ie),
      marginTop: on ? 0 : b.inset,
      marginBottom: on ? b.inset : 0,
      transform: E || ae ? `translate(${E}px, ${ae}px)` : void 0,
      pointerEvents: `none`,
    },
    mn = { display: `flex`, flexDirection: `row`, alignItems: `center`, gap: b.gap },
    $ = `cms-slider-track-${Ce}`,
    hn = l(() => {
      if (!S.enabled) return -1;
      if (y.step === `Page`) {
        let e = De * B + Math.floor(B / 2);
        return J ? e % j : e;
      }
      let e = De + Math.floor(B / 2);
      return J ? e % j : e;
    }, [S.enabled, De, B, y.step, J, j]),
    gn = l(() => {
      if (!S.enabled || j === 0) return ``;
      let e = [],
        t = S.transitionSpeed;
      return (
        e.push(`
          .${$} > * > * {
            transition: transform ${t}s ease, opacity ${t}s ease, filter ${t}s ease !important;
            opacity: ${S.inactiveOpacity} !important;
            transform: scale(${S.inactiveScale}) translateZ(0) !important;
            transform-origin: center center !important;
          }
        `),
        hn >= 0 &&
          hn < j &&
          e.push(`
              .${$} > * > *:nth-child(${hn + 1}) {
                opacity: 1 !important;
                transform: scale(${S.activeScale}) translateZ(0) !important;
              }
            `),
        e.join(`
`)
      );
    }, [S.enabled, S.transitionSpeed, S.inactiveOpacity, S.inactiveScale, S.activeScale, hn, j, $]),
    _n =
      { Start: `flex-start`, Center: `center`, End: `flex-end`, Stretch: `stretch` }[pe] ||
      `stretch`,
    vn = l(
      () => ({
        "--slider-gap": `${d.gap}px`,
        "--slider-items": `${B}`,
        "--flex-dir": A ? `column` : `row`,
        "--slider-align": _n,
      }),
      [d.gap, B, A, _n]
    ),
    yn = l(
      () => `
      .${$} {
        will-change: transform;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      .${$} > * {
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
      .${$} > * > * {
        --total-gap: calc((var(--slider-items) - 1) * var(--slider-gap));
        --item-size: calc((100% - var(--total-gap)) / var(--slider-items));

        flex: 0 0 var(--item-size) !important;

        ${A ? `height: var(--item-size) !important;` : `width: var(--item-size) !important;`}
        ${A ? `min-height: var(--item-size) !important;` : `min-width: var(--item-size) !important;`}
        
        ${d.aspectRatio > 0 ? `aspect-ratio: ${d.aspectRatio} !important;` : ``}
        ${d.aspectRatio > 0 && !A ? `height: auto !important;` : ``}
        ${d.aspectRatio > 0 && A ? `width: auto !important;` : ``}
        max-width: none !important;
        max-height: none !important;

        margin: 0 !important;
        flex-shrink: 0 !important;
        box-sizing: border-box !important;
        transform: translateZ(0);
      }
      .${$} > * > * > *:only-child {
        width: 100% !important;
        
        min-height: 0 !important;
        flex: 1 1 auto !important;
      }
      .${$} a {
        cursor: pointer !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        pointer-events: auto !important;
      }
      .${$} img {
        pointer-events: none !important;
        -webkit-user-drag: none !important;
        user-drag: none !important;
      }
    `,
      [$, A, !1, d.aspectRatio]
    );
  g(() => {
    if (k || !We || !H) return;
    let e = _e.current;
    if (!e) return;
    let t = (e) => {
      ((Se.current = e), xe(e), e && ye(!0));
    };
    if (typeof IntersectionObserver > `u`)
      return (
        t(!0),
        () => {
          Se.current = !1;
        }
      );
    let n = new IntersectionObserver(
      (e) => {
        let n = e[e.length - 1];
        n && t(n.isIntersecting);
      },
      { threshold: 0 }
    );
    return (
      n.observe(e),
      () => {
        (n.disconnect(), (Se.current = !1));
      }
    );
  }, [k, We, H]);
  let bn = We && ve ? `running` : `paused`,
    xn = `cmsslider-appear-${Ce}`,
    Sn = S.enabled ? `All Together` : C.mode,
    Cn = l(() => {
      let e = C.type;
      if (e === `None` || z) return ``;
      let t = C.distance,
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
        `@keyframes ${xn} {
            from { ${n} }
            to { ${r} }
        }`
      );
    }, [C.type, C.distance, xn, z]),
    wn = l(
      () =>
        k || C.type === `None` || z || Sn !== `All Together`
          ? {}
          : {
              opacity: 0,
              animation: `${xn} ${C.duration}s cubic-bezier(0.32, 0.72, 0, 1) both`,
              animationPlayState: bn,
            },
      [k, bn, C.type, z, Sn, xn, C.duration]
    ),
    Tn = l(() => {
      if (k || C.type === `None` || Sn !== `Stagger` || z) return ``;
      let e = Math.min(j > 0 ? j : vt, vt),
        t = Math.max(0, C.stagger),
        n = Array.from({ length: e }).map(
          (e, n) => `.${$} > * > *:nth-child(${n + 1}) { animation-delay: ${(n * t).toFixed(3)}s; }`
        ).join(`
`);
      return `
            .${$} > * > * {
                opacity: 0;
                animation: ${xn} ${C.duration}s cubic-bezier(0.32, 0.72, 0, 1) both;
                animation-play-state: ${bn};
            }
            ${n}
        `;
    }, [k, bn, C.type, Sn, C.duration, C.stagger, z, j, $, xn]),
    En = l(
      () => `${yn}
          [data-cms-slider]:focus-visible {
              outline: 2px solid #4c8eff;
              outline-offset: -2px;
          }
          [data-cms-slider]:focus:not(:focus-visible) {
              outline: none;
          }
          ${Cn}
          ${Tn}
        `,
      [yn, Cn, Tn]
    );
  return n
    ? h(`div`, {
        ref: _e,
        style: {
          ...t,
          position: `relative`,
          display: `flex`,
          flexDirection: `column`,
          width: `100%`,
          height: `auto`,
          ...vn,
          minWidth: 200,
          minHeight: 0,
          ...(We ? wn : { opacity: 0 }),
        },
        onMouseEnter: () => {
          a(() => {
            Me(!0);
          });
        },
        onMouseLeave: () => {
          a(() => {
            Me(!1);
          });
        },
        onFocus: () => {
          a(() => {
            Ne(!0);
          });
        },
        onBlur: (e) => {
          e.currentTarget.contains(e.relatedTarget) ||
            a(() => {
              Ne(!1);
            });
        },
        onKeyDown: qt,
        tabIndex: 0,
        "data-cms-slider": !0,
        role: `region`,
        "aria-roledescription": `carousel`,
        "aria-label": `Carousel`,
        children: [
          m(`style`, { children: En }),
          gn && m(`style`, { children: gn }),
          m(`div`, {
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
            children: `${y.step === `Page` ? `Page` : `Slide`} ${W + 1} of ${Je}`,
          }),
          sn &&
            on &&
            m(`div`, {
              style: pn,
              children: h(`div`, {
                style: mn,
                children: [
                  m(`button`, {
                    ...R,
                    type: `button`,
                    disabled: !Y,
                    onClick: (e) => {
                      (e.stopPropagation(), Wt());
                    },
                    style: en(!Y),
                    "aria-label": `Previous slide`,
                    children: nn(`prev`),
                  }),
                  x.type !== `None` && rn(),
                  m(`button`, {
                    ...R,
                    type: `button`,
                    disabled: !X,
                    onClick: (e) => {
                      (e.stopPropagation(), Gt());
                    },
                    style: en(!X),
                    "aria-label": `Next slide`,
                    children: nn(`next`),
                  }),
                ],
              }),
            }),
          h(`div`, {
            style: { position: `relative`, flex: `0 0 auto`, minHeight: 0, minWidth: 0 },
            children: [
              cn && an && m(`div`, { style: fn, children: rn(!0) }),
              m(`div`, {
                ref: ge,
                style: {
                  width: `100%`,
                  height: `auto`,
                  position: `relative`,
                  overflow: `visible`,
                  clipPath: J
                    ? A
                      ? `inset(0 -9999px)`
                      : `inset(-9999px 0)`
                    : S.enabled || d.bleed === `Both`
                      ? void 0
                      : d.bleed === `Right`
                        ? A
                          ? `inset(0 -9999px -9999px -9999px)`
                          : `inset(-9999px -9999px -9999px 0)`
                        : A
                          ? `inset(0 -9999px)`
                          : `inset(-9999px 0)`,
                  padding: d.padding,
                  boxSizing: `border-box`,
                },
                children: k
                  ? m(`div`, {
                      className: $,
                      style: {
                        display: `flex`,
                        flexDirection: A ? `column` : `row`,
                        width: `100%`,
                        height: `auto`,
                      },
                      children: Ze,
                    })
                  : m(`div`, {
                      ref: Nt,
                      className: $,
                      onClickCapture: Kt,
                      onPointerDown: Jt,
                      onPointerMove: Yt,
                      onPointerUp: Zt,
                      onPointerCancel: Qt,
                      style: {
                        display: `flex`,
                        flexDirection: A ? `column` : `row`,
                        width: `100%`,
                        height: `auto`,
                        cursor: me ? (Pe ? `grabbing` : `grab`) : `default`,
                        touchAction: A ? `pan-x` : `pan-y`,
                        userSelect: `none`,
                      },
                      children: Ze,
                    }),
              }),
              b.show &&
                U &&
                b.type === `Split` &&
                h(te, {
                  children: [
                    m(`div`, {
                      style: tn(`prev`),
                      children: m(`button`, {
                        ...R,
                        type: `button`,
                        disabled: !Y,
                        onClick: (e) => {
                          (e.stopPropagation(), Wt());
                        },
                        style: en(!Y),
                        "aria-label": `Previous slide`,
                        children: nn(`prev`),
                      }),
                    }),
                    m(`div`, {
                      style: tn(`next`),
                      children: m(`button`, {
                        ...R,
                        type: `button`,
                        disabled: !X,
                        onClick: (e) => {
                          (e.stopPropagation(), Gt());
                        },
                        style: en(!X),
                        "aria-label": `Next slide`,
                        children: nn(`next`),
                      }),
                    }),
                  ],
                }),
              b.show &&
                U &&
                b.type === `Grouped` &&
                h(`div`, {
                  style: tn(),
                  children: [
                    m(`button`, {
                      ...R,
                      type: `button`,
                      disabled: !Y,
                      onClick: (e) => {
                        (e.stopPropagation(), Wt());
                      },
                      style: en(!Y),
                      "aria-label": `Previous slide`,
                      children: nn(`prev`),
                    }),
                    m(`button`, {
                      ...R,
                      type: `button`,
                      disabled: !X,
                      onClick: (e) => {
                        (e.stopPropagation(), Gt());
                      },
                      style: en(!X),
                      "aria-label": `Next slide`,
                      children: nn(`next`),
                    }),
                  ],
                }),
              cn && !an && m(`div`, { style: fn, children: rn(!0) }),
            ],
          }),
          sn &&
            !on &&
            m(`div`, {
              style: pn,
              children: h(`div`, {
                style: mn,
                children: [
                  m(`button`, {
                    ...R,
                    type: `button`,
                    disabled: !Y,
                    onClick: (e) => {
                      (e.stopPropagation(), Wt());
                    },
                    style: en(!Y),
                    "aria-label": `Previous slide`,
                    children: nn(`prev`),
                  }),
                  x.type !== `None` && rn(),
                  m(`button`, {
                    ...R,
                    type: `button`,
                    disabled: !X,
                    onClick: (e) => {
                      (e.stopPropagation(), Gt());
                    },
                    style: en(!X),
                    "aria-label": `Next slide`,
                    children: nn(`next`),
                  }),
                ],
              }),
            }),
        ],
      })
    : h(`div`, {
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
          m(`div`, {
            style: { fontSize: 14, fontWeight: 600, marginBottom: 6 },
            children: `Connect to Content`,
          }),
          m(`div`, {
            style: { fontSize: 12, color: `#9999AA`, maxWidth: 200, lineHeight: 1.4 },
            children: `Add layers or components to make infinite slides.`,
          }),
        ],
      });
}
var st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt = e(() => {
    (t(),
      d(),
      n(),
      D(),
      x(),
      (st = 6),
      (ct = 2),
      (lt = 220),
      (ut = 50),
      (dt = 0.3),
      (ft = 1),
      (pt = 40),
      (mt = 250),
      (ht = 140),
      (gt = 4),
      (_t = 1.3),
      (vt = 12),
      (yt = ({ size: e, color: t }) =>
        m(`svg`, {
          width: e * 0.45,
          height: e * 0.45,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: t,
          strokeWidth: `2.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: m(`path`, { d: `M15 18l-6-6 6-6` }),
        })),
      (bt = ({ size: e, color: t }) =>
        m(`svg`, {
          width: e * 0.45,
          height: e * 0.45,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: t,
          strokeWidth: `2.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: m(`path`, { d: `M9 18l6-6-6-6` }),
        })),
      (xt = {
        items: 3,
        gap: 30,
        padding: 0,
        fit: `Contain`,
        align: `Stretch`,
        aspectRatio: 0,
        bleed: `None`,
      }),
      (St = { interval: 3, pauseOnHover: !0, tapToPause: !1, loop: !0, startAt: `Start` }),
      (Ct = { step: `Single`, draggable: !0, keyboard: !0 }),
      (wt = {
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
      (Tt = {
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
      (Et = {
        enabled: !1,
        activeScale: 1.08,
        inactiveScale: 0.92,
        inactiveOpacity: 0.5,
        transitionSpeed: 0.35,
      }),
      (Dt = { type: `Fade`, mode: `Stagger`, duration: 0.4, distance: 24, stagger: 0.06 }),
      (Ot = { type: `spring`, stiffness: 240, damping: 28, mass: 1 }),
      (Z.displayName = `CMS Slider`),
      E(Z, {
        content: {
          type: O.ComponentInstance,
          title: `Content`,
          description: `Connect a Collection List.`,
        },
        direction: {
          type: O.Enum,
          title: `Direction`,
          options: [`Left`, `Right`, `Up`, `Down`],
          defaultValue: `Left`,
        },
        slideMode: {
          type: O.Enum,
          title: `Slide Mode`,
          options: [`Infinite`, `Non-infinite`],
          defaultValue: `Non-infinite`,
        },
        autoPlay: { type: O.Boolean, title: `Auto Play`, defaultValue: !1 },
        items: {
          type: O.Number,
          title: `Cards in View`,
          defaultValue: 3,
          min: 1,
          max: 8,
          step: 1,
          displayStepper: !0,
          description: `Cards shown in view.`,
        },
        playback: {
          type: O.Object,
          title: `Playback`,
          controls: {
            interval: {
              type: O.Number,
              title: `Interval`,
              defaultValue: 3,
              min: 0.5,
              max: 30,
              step: 0.5,
              unit: `s`,
            },
            pauseOnHover: {
              type: O.Boolean,
              title: `Pause On Hover`,
              defaultValue: !0,
              description: `Pause On Hover`,
            },
            tapToPause: {
              type: O.Boolean,
              title: `Tap to Pause`,
              defaultValue: !1,
              description: `Tap a card to pause autoplay. Tap again to resume.`,
            },
            loop: {
              type: O.Boolean,
              title: `Loop`,
              defaultValue: !0,
              description: `Wraps end → start.`,
            },
            startAt: {
              type: O.Enum,
              title: `Start At`,
              options: [`Start`, `End`],
              defaultValue: `Start`,
            },
          },
        },
        layout: {
          type: O.Object,
          title: `Layout`,
          controls: {
            gap: {
              type: O.Number,
              title: `Gap`,
              defaultValue: 30,
              min: 0,
              max: 120,
              step: 5,
              unit: `px`,
            },
            padding: {
              type: O.Number,
              title: `Padding`,
              defaultValue: 0,
              min: 0,
              max: 120,
              step: 5,
              unit: `px`,
            },
            fit: {
              type: O.Enum,
              title: `Fit`,
              options: [`Fill`, `Contain`],
              defaultValue: `Contain`,
              description: `Fill stretches to the slider. Contain uses the card's own size.`,
            },
            align: {
              type: O.Enum,
              title: `Align`,
              options: [`Start`, `Center`, `End`, `Stretch`],
              defaultValue: `Stretch`,
              description: `Position of cards when Fit is Contain.`,
            },
            aspectRatio: {
              type: O.Number,
              title: `Aspect Ratio`,
              defaultValue: 0,
              min: 0,
              max: 10,
              step: 0.1,
              description: `Per-card width ÷ height. 0 = off. Use with fit-content height in Framer (e.g. 1.5 = 3:2, 2 = 2:1).`,
            },
            bleed: {
              type: O.Enum,
              title: `Bleed`,
              options: [`None`, `Right`, `Both`],
              defaultValue: `None`,
              description: `Let off-screen cards peek past the slider edges. Use with a max-width parent so cards bleed into the page gutter.`,
            },
          },
        },
        centerFocus: {
          type: O.Object,
          title: `Center Focus`,
          controls: {
            enabled: {
              type: O.Boolean,
              title: `Enabled`,
              defaultValue: !1,
              description: `Scale up the center item.`,
            },
            activeScale: {
              type: O.Number,
              title: `Active Scale`,
              defaultValue: 1.08,
              min: 1,
              max: 1.5,
              step: 0.02,
            },
            inactiveScale: {
              type: O.Number,
              title: `Inactive Scale`,
              defaultValue: 0.92,
              min: 0.5,
              max: 1,
              step: 0.02,
            },
            inactiveOpacity: {
              type: O.Number,
              title: `Inactive Opacity`,
              defaultValue: 0.5,
              min: 0.1,
              max: 1,
              step: 0.05,
            },
            transitionSpeed: {
              type: O.Number,
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
          type: O.Object,
          title: `Appear`,
          controls: {
            type: {
              type: O.Enum,
              title: `Effect`,
              options: [`None`, `Fade`, `Slide Up`, `Slide Down`, `Scale`, `Blur`],
              defaultValue: `Fade`,
              description: `Animation when the slider first becomes ready.`,
            },
            mode: {
              type: O.Enum,
              title: `Mode`,
              options: [`Stagger`, `All Together`],
              defaultValue: `Stagger`,
              description: `Stagger cascades each card. All Together animates the whole slider.`,
              hidden: (e) => e.type === `None`,
            },
            stagger: {
              type: O.Number,
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
              type: O.Number,
              title: `Duration`,
              defaultValue: 0.4,
              min: 0.1,
              max: 2,
              step: 0.05,
              unit: `s`,
              hidden: (e) => e.type === `None`,
            },
            distance: {
              type: O.Number,
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
          type: O.Object,
          title: `Interaction`,
          controls: {
            step: {
              type: O.Enum,
              title: `Scroll Step`,
              options: [`Single`, `Page`],
              optionTitles: [`One Card`, `Full Page`],
              defaultValue: `Single`,
            },
            draggable: { type: O.Boolean, title: `Draggable`, defaultValue: !0 },
            keyboard: {
              type: O.Boolean,
              title: `Keyboard`,
              defaultValue: !0,
              description: `Arrow keys.`,
            },
          },
        },
        animationOptions: {
          title: `Animation`,
          type: O.Transition,
          defaultValue: { type: `spring`, stiffness: 240, damping: 28, mass: 1 },
        },
        arrowAlignment: {
          title: `Arrow Alignment`,
          type: O.Enum,
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
          type: O.Number,
          defaultValue: 48,
          min: 24,
          max: 88,
          step: 2,
          unit: `px`,
        },
        arrowOffsetX: {
          title: `Arrow Offset X`,
          type: O.Number,
          defaultValue: 0,
          min: -500,
          max: 500,
          step: 5,
          unit: `px`,
        },
        arrowOffsetY: {
          title: `Arrow Offset Y`,
          type: O.Number,
          defaultValue: 0,
          min: -500,
          max: 500,
          step: 5,
          unit: `px`,
        },
        arrows: {
          type: O.Object,
          title: `Arrows`,
          controls: {
            show: { type: O.Boolean, title: `Show`, defaultValue: !0 },
            type: {
              type: O.Enum,
              title: `Type`,
              options: [`Split`, `Grouped`, `Inline`],
              defaultValue: `Split`,
              description: `Inline puts arrows on either side of the pagination.`,
            },
            prevImage: { type: O.Image, title: `Prev Icon` },
            nextImage: { type: O.Image, title: `Next Icon` },
            fill: { type: O.Color, title: `Icon Color`, defaultValue: `#ffffff` },
            variant: {
              type: O.Enum,
              title: `Style`,
              options: [`Fill`, `Outline`, `Both`],
              defaultValue: `Fill`,
              displaySegmentedControl: !0,
            },
            backdrop: {
              type: O.Color,
              title: `Background`,
              defaultValue: `#000000`,
              hidden: (e) => e.variant === `Outline`,
            },
            borderWidth: {
              type: O.Number,
              title: `Border Width`,
              defaultValue: 1,
              min: 0,
              max: 8,
              step: 0.5,
              unit: `px`,
              hidden: (e) => e.variant === `Fill`,
            },
            borderColor: {
              type: O.Color,
              title: `Border Color`,
              defaultValue: `#ffffff`,
              hidden: (e) => e.variant === `Fill`,
            },
            radius: {
              type: O.Number,
              title: `Radius`,
              defaultValue: 50,
              min: 0,
              max: 60,
              step: 2,
              unit: `px`,
            },
            disabledOpacity: {
              type: O.Number,
              title: `Disabled Opacity`,
              defaultValue: 0.6,
              min: 0,
              max: 1,
              step: 0.05,
            },
            fadeIn: {
              type: O.Boolean,
              title: `Hover Only`,
              defaultValue: !1,
              description: `Show arrows only on hover or focus.`,
            },
            inset: {
              type: O.Number,
              title: `Inset`,
              defaultValue: 20,
              min: -200,
              max: 200,
              step: 5,
              unit: `px`,
            },
            gap: {
              type: O.Number,
              title: `Gap`,
              defaultValue: 10,
              min: 0,
              max: 50,
              step: 1,
              unit: `px`,
              description: `When Grouped or Inline.`,
              hidden: (e) => e.type === `Split`,
            },
            shadow: { type: O.Boolean, title: `Shadow`, defaultValue: !1 },
            shadowColor: { type: O.Color, title: `Shadow Color`, defaultValue: `rgba(0,0,0,0.2)` },
            shadowBlur: {
              type: O.Number,
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
          type: O.Object,
          title: `Pagination`,
          controls: {
            type: {
              type: O.Enum,
              title: `Type`,
              options: [`Dots`, `Progress`, `Numbers`, `None`],
              optionTitles: [`Dots`, `Progress Bar`, `Numbers`, `None`],
              defaultValue: `Dots`,
            },
            alignment: {
              type: O.Enum,
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
              type: O.Number,
              title: `Size`,
              defaultValue: 10,
              min: 6,
              max: 22,
              step: 1,
              unit: `px`,
            },
            inset: {
              type: O.Number,
              title: `Inset`,
              defaultValue: 20,
              min: -120,
              max: 120,
              step: 5,
              unit: `px`,
              description: `Distance from the aligned edge.`,
            },
            offsetX: {
              type: O.Number,
              title: `Offset X`,
              defaultValue: 0,
              min: -500,
              max: 500,
              step: 5,
              unit: `px`,
            },
            offsetY: {
              type: O.Number,
              title: `Offset Y`,
              defaultValue: 0,
              min: -500,
              max: 500,
              step: 5,
              unit: `px`,
            },
            progressWidth: {
              type: O.Number,
              title: `Bar Width`,
              defaultValue: 200,
              min: 40,
              max: 600,
              step: 10,
              unit: `px`,
              description: `Inline progress width. Standalone progress fills the CMS children container.`,
            },
            compact: {
              type: O.Boolean,
              title: `Compact`,
              defaultValue: !1,
              description: `Window of dots that slides with the active one.`,
            },
            compactVisible: {
              type: O.Number,
              title: `Visible`,
              defaultValue: 3,
              min: 1,
              max: 9,
              step: 1,
              displayStepper: !0,
              description: `Max dots shown when Compact is on.`,
            },
            gap: {
              type: O.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 2,
              max: 24,
              step: 1,
              unit: `px`,
            },
            padding: {
              type: O.Number,
              title: `Padding`,
              defaultValue: 10,
              min: 0,
              max: 28,
              step: 1,
              unit: `px`,
            },
            fill: { type: O.Color, title: `Inactive Color`, defaultValue: `rgba(255,255,255,0.4)` },
            activeFill: { type: O.Color, title: `Active Color`, defaultValue: `#ffffff` },
            backdrop: { type: O.Color, title: `Backdrop`, defaultValue: `rgba(0,0,0,0.4)` },
            radius: {
              type: O.Number,
              title: `Radius`,
              defaultValue: 20,
              min: 0,
              max: 60,
              step: 2,
              unit: `px`,
            },
            opacity: {
              type: O.Number,
              title: `Opacity`,
              defaultValue: 0.5,
              min: 0.05,
              max: 1,
              step: 0.05,
            },
            blur: {
              type: O.Number,
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
export {
  L as a,
  Me as c,
  be as d,
  xe as f,
  tt as i,
  M as l,
  kt as n,
  R as o,
  X as r,
  je as s,
  Z as t,
  Ee as u,
};
//# sourceMappingURL=CMS_Slider.DMhH8qwC.mjs.map
