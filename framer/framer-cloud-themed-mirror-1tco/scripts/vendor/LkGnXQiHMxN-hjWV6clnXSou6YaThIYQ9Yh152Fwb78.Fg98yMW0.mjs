import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  I as a,
  M as o,
  N as s,
  R as c,
  S as l,
  T as u,
  b as d,
  c as f,
  l as p,
  m,
  s as h,
  u as g,
  v as _,
  x as v,
  z as y,
} from "./react.DJ2-MjhO.mjs";
import { P as b, X as x, i as S, j as C, o as w, t as T } from "./motion.Bn11pmd7.mjs";
import {
  A as E,
  B as D,
  C as O,
  E as k,
  Et as A,
  G as j,
  L as M,
  R as N,
  St as P,
  T as F,
  _ as I,
  _t as ee,
  b as L,
  ct as te,
  d as R,
  dt as ne,
  ft as z,
  gt as re,
  i as B,
  it as ie,
  j as ae,
  k as V,
  l as oe,
  lt as se,
  n as H,
  p as ce,
  pt as le,
  r as U,
  rt as ue,
  st as de,
  ut as fe,
  vt as pe,
  w as me,
  x as W,
  xt as he,
  y as ge,
  yt as _e,
  z as G,
} from "./framer.CS_JK_Iv.mjs";
import {
  a as ve,
  c as ye,
  l as be,
  n as xe,
  o as Se,
  s as Ce,
  t as we,
  u as Te,
} from "./SlideShow.FFGkeE1g.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./YCYFDwdBK.C-gOSGsQ.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./ZckC7in5y.CvJcrBli.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./ilN_pt0Gn.B1pfsNZa.mjs";
import { n as Re, t as ze } from "./iYEILKxH1.Cwf9mGHP.mjs";
import { n as Be, t as Ve } from "./SmoothScroll_Prod.D2EtnQ3p.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./cUaervyv9.Cq2R8eDj.mjs";
import {
  a as Ke,
  c as qe,
  d as Je,
  f as Ye,
  i as Xe,
  l as Ze,
  n as Qe,
  o as $e,
  r as et,
  s as tt,
  t as nt,
  u as rt,
} from "./RI1oCWoIH.ohrf7dbZ.mjs";
import { i as it, n as at, r as ot, t as st } from "./wmi7dzLRt.CHmFiX1M.mjs";
import { i as ct, n as lt, r as ut, t as dt } from "./Ra2J5G4be.aw5Cg2zO.mjs";
import { i as ft, n as pt, r as mt, t as ht } from "./aZ0GztYsn.BtzrpC73.mjs";
import gt, { t as _t } from "./G2r66eYhAqChB2U38o3F27F_Wm2BqnL_A0XHmAwHb84.7Asq7EaT.mjs";
var vt,
  yt,
  bt = e(() => {
    (j(),
      (vt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...vt },
      (yt = {
        onClick: { type: B.EventHandler },
        onMouseEnter: { type: B.EventHandler },
        onMouseLeave: { type: B.EventHandler },
      }),
      B.Number,
      B.Boolean,
      B.String,
      B.Enum);
  });
function xt(e, t) {
  return Ct(!0, e, t);
}
function St(e, t) {
  return Ct(!1, e, t);
}
function Ct(e, t, n = !0) {
  let r = se();
  d(() => {
    n && r === e && t();
  }, [r]);
}
var wt = e(() => {
    (j(), i());
  }),
  Tt = e(() => {
    i();
  }),
  Et = e(() => {
    j();
  }),
  Dt = e(() => {
    j();
  }),
  Ot = e(() => {
    i();
  }),
  kt = e(() => {
    j();
  }),
  At,
  jt,
  Mt = e(() => {
    (c(),
      i(),
      (At = () => {
        if (y !== void 0) {
          let e = y.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (jt = () => s(() => At(), [])));
  }),
  Nt = e(() => {
    (i(), Dt());
  }),
  Pt = e(() => {
    (i(), j(), Dt(), Tt());
  }),
  Ft = e(() => {
    (j(), i(), bt());
  });
function It() {
  return s(() => ge.current(), []);
}
function Lt() {
  return s(() => ge.current() === ge.canvas, []);
}
var Rt = e(() => {
    (i(), j());
  }),
  zt = e(() => {
    i();
  });
function Bt(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return s(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var Vt,
  Ht = e(() => {
    (i(),
      j(),
      (Vt = {
        borderRadius: {
          title: `Radius`,
          type: B.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      B.FusedNumber);
  }),
  Ut = e(() => {
    (bt(), wt(), Tt(), Et(), Dt(), Ot(), kt(), Mt(), Nt(), Pt(), Ft(), Rt(), zt(), Ht());
  });
function Wt(e) {
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
function Gt(e) {
  let t = Wt(e);
  return h($t, { ...t });
}
function Kt(e) {
  let n = se(),
    r = v(!1),
    i = v(!1),
    a = t((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: t(() => {
      let t = e.current;
      t &&
        ((t.preload = `auto`),
        !(
          t.currentTime > 0 &&
          t.onplaying &&
          !t.paused &&
          !t.ended &&
          t.readyState >= t.HAVE_CURRENT_DATA
        ) &&
          t &&
          !r.current &&
          n &&
          ((r.current = !0),
          (i.current = !0),
          t
            .play()
            .catch((e) => {})
            .finally(() => (r.current = !1))));
    }, []),
    pause: t(() => {
      !e.current || r.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function qt({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = _(() => e),
    [o, s] = _(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    l;
  return ((l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l);
}
function Jt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yt(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(Jt).join(` `);
}
var Xt,
  Zt,
  Qt,
  $t,
  en,
  tn = e(() => {
    (f(),
      j(),
      T(),
      Ut(),
      i(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Xt ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Zt ||= {})),
      (Qt = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      ($t = r(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: c = !0,
            muted: l = !0,
            playsinline: u = !0,
            restartOnEnter: f = !1,
            objectFit: p = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: g = 0,
            volume: _ = 25,
            startTime: y = 0,
            poster: b,
            playing: S,
            progress: w,
            onSeeked: T,
            onPause: E,
            onPlay: D,
            onEnd: O,
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
          } = e,
          P = v(),
          F = jt(),
          I = v(null),
          ee = v(null),
          L = Lt(),
          te = It(),
          R = L || te === ge.export,
          ne = Bt(e),
          z = R
            ? `no-autoplay`
            : qt({ playingProp: S, muted: l, loop: c, playsinline: u, controls: a }),
          re = R ? !0 : x(P),
          B = !R && x(P, { margin: `10%`, once: !0 }),
          ie = y === 100 ? 99.9 : y,
          { play: ae, pause: V, setProgress: oe, isPlaying: se } = Kt(P);
        (d(() => {
          R || (z !== `on-viewport` && (S ? ae() : V()));
        }, [z, S]),
          d(() => {
            R || (re && S && z !== `no-autoplay` && ae(), z === `on-viewport` && V());
          }, [z, re, S]),
          d(() => {
            !L || b || i || ie || !P.current || (P.current.currentTime = 0.01);
          }, [i, b, ie]));
        let H = v(!1);
        (d(() => {
          if (!H.current) {
            H.current = !0;
            return;
          }
          let e = C(w) ? w.get() : (w ?? 0) * 0.01;
          oe((e ?? 0) || (ie ?? 0) / 100);
        }, [ie, r, n, w]),
          d(() => {
            if (C(w)) return w.on(`change`, (e) => oe(e));
          }, [w]),
          xt(() => {
            I.current !== null && P.current && ((!ee && c) || !I.current) && ae();
          }),
          St(() => {
            P.current && ((ee.current = P.current.ended), (I.current = P.current.paused), V());
          }));
        let ce = s(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, ie]);
        return (
          d(() => {
            F && P.current && z === `on-mount` && setTimeout(() => ae(), 50);
          }, []),
          d(() => {
            P.current && !l && (P.current.volume = (_ ?? 0) / 100);
          }, [_]),
          h(`video`, {
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
            src: ce,
            loop: c,
            ref: P,
            onSeeked: (e) => T?.(e),
            onPause: (e) => E?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => O?.(e),
            autoPlay: se.current || z === `on-mount` || (S && z === `on-viewport` && re),
            preload: se.current
              ? `auto`
              : R && !b
                ? `metadata`
                : z !== `on-mount` && !B
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === Qt
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = P.current;
              e &&
                (e.currentTime < 0.3 && ie > 0 && oe((ie ?? 0) * 0.01),
                (se.current || z === `on-mount` || (S && z === `on-viewport` && re)) && ae());
            },
            controls: a,
            muted: R ? !0 : l,
            playsInline: u,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: ne,
              display: `block`,
              objectFit: p,
              backgroundColor: m,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Gt.displayName = `Video`),
      (en = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      k(Gt, {
        srcType: {
          type: B.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: B.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: B.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: B.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...Vt,
        posterEnabled: {
          type: B.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: B.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: B.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: B.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: B.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: B.Enum, title: `Fit`, options: en, optionTitles: en.map(Yt) },
        controls: {
          type: B.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: B.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: B.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: B.EventHandler },
        onSeeked: { type: B.EventHandler },
        onPause: { type: B.EventHandler },
        onPlay: { type: B.EventHandler },
        ...yt,
      }));
  });
function nn(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function rn(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
var an,
  on,
  sn,
  K,
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
  q,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  J,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
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
  Y,
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
  X,
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
  Na = e(() => {
    /*!
     * GSAP 3.11.3
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    (c(),
      (hn = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } }),
      (gn = { duration: 0.5, overwrite: !1, delay: 0 }),
      (_n = 1e8),
      (q = 1 / _n),
      (vn = 2 * Math.PI),
      (yn = vn / 4),
      (bn = 0),
      (xn = Math.sqrt),
      (Sn = Math.cos),
      (Cn = Math.sin),
      (wn = function (e) {
        return typeof e == `string`;
      }),
      (J = function (e) {
        return typeof e == `function`;
      }),
      (Tn = function (e) {
        return typeof e == `number`;
      }),
      (En = function (e) {
        return e === void 0;
      }),
      (Dn = function (e) {
        return typeof e == `object`;
      }),
      (On = function (e) {
        return !1 !== e;
      }),
      (kn = function () {
        return n !== void 0;
      }),
      (An = function (e) {
        return J(e) || wn(e);
      }),
      (jn = (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {}),
      (Mn = Array.isArray),
      (Nn = /(?:-?\.?\d|\.)+/gi),
      (Pn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g),
      (Fn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g),
      (In = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi),
      (Ln = /[+-]=-?[.\d]+/),
      (Rn = /[^,'"\[\]\s]+/gi),
      (zn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i),
      (Bn = {}),
      (Vn = {}),
      (Hn = function (e) {
        return (Vn = vr(e, Bn)) && Ma;
      }),
      (Un = function (e, t) {
        return console.warn(
          `Invalid property`,
          e,
          `set to`,
          t,
          `Missing plugin? gsap.registerPlugin()`
        );
      }),
      (Wn = function (e, t) {
        return !t && console.warn(e);
      }),
      (Gn = function (e, t) {
        return (e && (Bn[e] = t) && Vn && (Vn[e] = t)) || Bn;
      }),
      (Kn = function () {
        return 0;
      }),
      (qn = { suppressEvents: !0, isStart: !0, kill: !1 }),
      (Jn = { suppressEvents: !0, kill: !1 }),
      (Yn = { suppressEvents: !0 }),
      (Xn = {}),
      (Zn = []),
      (Qn = {}),
      ($n = {}),
      (er = {}),
      (tr = 30),
      (nr = []),
      (rr = ``),
      (ir = function (e) {
        var t,
          n,
          r = e[0];
        if ((Dn(r) || J(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
          for (n = nr.length; n-- && !nr[n].targetTest(r););
          t = nr[n];
        }
        for (n = e.length; n--;)
          (e[n] && (e[n]._gsap || (e[n]._gsap = new Ui(e[n], t)))) || e.splice(n, 1);
        return e;
      }),
      (ar = function (e) {
        return e._gsap || ir(ti(e))[0]._gsap;
      }),
      (or = function (e, t, n) {
        return (n = e[t]) && J(n) ? e[t]() : (En(n) && e.getAttribute && e.getAttribute(t)) || n;
      }),
      (sr = function (e, t) {
        return (e = e.split(`,`)).forEach(t) || e;
      }),
      (cr = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      }),
      (lr = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      }),
      (ur = function (e, t) {
        var n = t.charAt(0),
          r = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
        );
      }),
      (dr = function (e, t) {
        for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
        return r < n;
      }),
      (fr = function () {
        var e,
          t,
          n = Zn.length,
          r = Zn.slice(0);
        for (Qn = {}, Zn.length = 0, e = 0; e < n; e++)
          ((t = r[e]), t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0));
      }),
      (pr = function (e, t, n, r) {
        (Zn.length && fr(),
          e.render(t, n, r || (on && t < 0 && (e._initted || e._startAt))),
          Zn.length && fr());
      }),
      (mr = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + ``).match(Rn).length < 2 ? t : wn(e) ? e.trim() : e;
      }),
      (hr = function (e) {
        return e;
      }),
      (gr = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }),
      (_r = function (e) {
        return function (t, n) {
          for (var r in n) r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
        };
      }),
      (vr = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }),
      (yr = function e(t, n) {
        for (var r in n)
          r !== `__proto__` &&
            r !== `constructor` &&
            r !== `prototype` &&
            (t[r] = Dn(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
        return t;
      }),
      (br = function (e, t) {
        var n,
          r = {};
        for (n in e) n in t || (r[n] = e[n]);
        return r;
      }),
      (xr = function (e) {
        var t = e.parent || K,
          n = e.keyframes ? _r(Mn(e.keyframes)) : gr;
        if (On(e.inherit)) for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
        return e;
      }),
      (Sr = function (e, t) {
        for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
        return n < 0;
      }),
      (Cr = function (e, t, n, r, i) {
        (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
        var a,
          o = e[r];
        if (i) for (a = t[i]; o && o[i] > a;) o = o._prev;
        return (
          o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[n]), (e[n] = t)),
          t._next ? (t._next._prev = t) : (e[r] = t),
          (t._prev = o),
          (t.parent = t._dp = e),
          t
        );
      }),
      (wr = function (e, t, n, r) {
        (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
        var i = t._prev,
          a = t._next;
        (i ? (i._next = a) : e[n] === t && (e[n] = a),
          a ? (a._prev = i) : e[r] === t && (e[r] = i),
          (t._next = t._prev = t.parent = null));
      }),
      (Tr = function (e, t) {
        (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0));
      }),
      (Er = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
        return e;
      }),
      (Dr = function (e) {
        for (var t = e.parent; t && t.parent;) ((t._dirty = 1), t.totalDuration(), (t = t.parent));
        return e;
      }),
      (Or = function (e, t, n, r) {
        return (
          e._startAt &&
          (on
            ? e._startAt.revert(Jn)
            : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, r))
        );
      }),
      (kr = function e(t) {
        return !t || (t._ts && e(t.parent));
      }),
      (Ar = function (e) {
        return e._repeat ? jr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      }),
      (jr = function (e, t) {
        var n = Math.floor((e /= t));
        return e && n === e ? n - 1 : n;
      }),
      (Mr = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
      }),
      (Nr = function (e) {
        return (e._end = lr(e._start + (e._tDur / Math.abs(e._ts || e._rts || q) || 0)));
      }),
      (Pr = function (e, t) {
        var n = e._dp;
        return (
          n &&
            n.smoothChildTiming &&
            e._ts &&
            ((e._start = lr(
              n._time -
                (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            Nr(e),
            n._dirty || Er(n, e)),
          e
        );
      }),
      (Fr = function (e, t) {
        var n;
        if (
          ((t._time || (t._initted && !t._dur)) &&
            ((n = Mr(e.rawTime(), t)),
            (!t._dur || Yr(0, t.totalDuration(), n) - t._tTime > q) && t.render(n, !0)),
          Er(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (n = e; n._dp;) (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
          e._zTime = -q;
        }
      }),
      (Ir = function (e, t, n, r) {
        return (
          t.parent && Tr(t),
          (t._start = lr((Tn(n) ? n : n || e !== K ? Kr(e, n, t) : e._time) + t._delay)),
          (t._end = lr(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
          Cr(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
          Br(t) || (e._recent = t),
          r || Fr(e, t),
          e._ts < 0 && Pr(e, e._tTime),
          e
        );
      }),
      (Lr = function (e, t) {
        return (Bn.ScrollTrigger || Un(`scrollTrigger`, t)) && Bn.ScrollTrigger.create(t, e);
      }),
      (Rr = function (e, t, n, r, i) {
        if ((Qi(e, t, i), !e._initted)) return 1;
        if (
          !n &&
          e._pt &&
          !on &&
          ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
          fn !== ki.frame
        )
          return (Zn.push(e), (e._lazy = [i, r]), 1);
      }),
      (zr = function e(t) {
        var n = t.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
      }),
      (Br = function (e) {
        var t = e.data;
        return t === `isFromStart` || t === `isStart`;
      }),
      (Vr = function (e, t, n, r) {
        var i,
          a,
          o,
          s = e.ratio,
          c =
            t < 0 ||
            (!t &&
              ((!e._start && zr(e) && !(!e._initted && Br(e))) ||
                ((e._ts < 0 || e._dp._ts < 0) && !Br(e))))
              ? 0
              : 1,
          l = e._rDelay,
          u = 0;
        if (
          (l &&
            e._repeat &&
            ((u = Yr(0, e._tDur, t)),
            (a = jr(u, l)),
            e._yoyo && 1 & a && (c = 1 - c),
            a !== jr(e._tTime, l) &&
              ((s = 1 - c), e.vars.repeatRefresh && e._initted && e.invalidate())),
          c !== s || on || r || e._zTime === q || (!t && e._zTime))
        ) {
          if (!e._initted && Rr(e, t, r, n, u)) return;
          for (
            o = e._zTime,
              e._zTime = t || (n ? q : 0),
              n ||= t && !o,
              e.ratio = c,
              e._from && (c = 1 - c),
              e._time = 0,
              e._tTime = u,
              i = e._pt;
            i;
          )
            (i.r(c, i.d), (i = i._next));
          (t < 0 && Or(e, t, n, !0),
            e._onUpdate && !n && vi(e, `onUpdate`),
            u && e._repeat && !n && e.parent && vi(e, `onRepeat`),
            (t >= e._tDur || t < 0) &&
              e.ratio === c &&
              (c && Tr(e, 1),
              !n &&
                !on &&
                (vi(e, c ? `onComplete` : `onReverseComplete`, !0), e._prom && e._prom())));
        } else e._zTime ||= t;
      }),
      (Hr = function (e, t, n) {
        var r;
        if (n > t)
          for (r = e._first; r && r._start <= n;) {
            if (r.data === `isPause` && r._start > t) return r;
            r = r._next;
          }
        else
          for (r = e._last; r && r._start >= n;) {
            if (r.data === `isPause` && r._start < t) return r;
            r = r._prev;
          }
      }),
      (Ur = function (e, t, n, r) {
        var i = e._repeat,
          a = lr(t) || 0,
          o = e._tTime / e._tDur;
        return (
          o && !r && (e._time *= a / e._dur),
          (e._dur = a),
          (e._tDur = i ? (i < 0 ? 1e10 : lr(a * (i + 1) + e._rDelay * i)) : a),
          o > 0 && !r && Pr(e, (e._tTime = e._tDur * o)),
          e.parent && Nr(e),
          n || Er(e.parent, e),
          e
        );
      }),
      (Wr = function (e) {
        return e instanceof Gi ? Er(e) : Ur(e, e._dur);
      }),
      (Gr = { _start: 0, endTime: Kn, totalDuration: Kn }),
      (Kr = function e(t, n, r) {
        var i,
          a,
          o,
          s = t.labels,
          c = t._recent || Gr,
          l = t.duration() >= _n ? c.endTime(!1) : t._dur;
        return wn(n) && (isNaN(n) || n in s)
          ? ((a = n.charAt(0)),
            (o = n.substr(-1) === `%`),
            (i = n.indexOf(`=`)),
            a === `<` || a === `>`
              ? (i >= 0 && (n = n.replace(/=/, ``)),
                (a === `<` ? c._start : c.endTime(c._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) * (o ? (i < 0 ? c : r).totalDuration() / 100 : 1))
              : i < 0
                ? (n in s || (s[n] = l), s[n])
                : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  o && r && (a = (a / 100) * (Mn(r) ? r[0] : r).totalDuration()),
                  i > 1 ? e(t, n.substr(0, i - 1), r) + a : l + a))
          : n == null
            ? l
            : +n;
      }),
      (qr = function (e, t, n) {
        var r,
          i,
          a = Tn(t[1]),
          o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
          s = t[o];
        if ((a && (s.duration = t[1]), (s.parent = n), e)) {
          for (r = s, i = n; i && !(`immediateRender` in r);)
            ((r = i.vars.defaults || {}), (i = On(i.vars.inherit) && i.parent));
          ((s.immediateRender = On(r.immediateRender)),
            e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]));
        }
        return new aa(t[0], s, t[o + 1]);
      }),
      (Jr = function (e, t) {
        return e || e === 0 ? t(e) : t;
      }),
      (Yr = function (e, t, n) {
        return n < e ? e : n > t ? t : n;
      }),
      (Xr = function (e, t) {
        return wn(e) && (t = zn.exec(e)) ? t[1] : ``;
      }),
      (Zr = function (e, t, n) {
        return Jr(n, function (n) {
          return Yr(e, t, n);
        });
      }),
      (Qr = [].slice),
      ($r = function (e, t) {
        return (
          e &&
          Dn(e) &&
          `length` in e &&
          ((!t && !e.length) || (e.length - 1 in e && Dn(e[0]))) &&
          !e.nodeType &&
          e !== cn
        );
      }),
      (ei = function (e, t, n) {
        return (
          n === void 0 && (n = []),
          e.forEach(function (e) {
            var r;
            return (wn(e) && !t) || $r(e, 1) ? (r = n).push.apply(r, ti(e)) : n.push(e);
          }) || n
        );
      }),
      (ti = function (e, t, n) {
        return sn && !t && sn.selector
          ? sn.selector(e)
          : !wn(e) || n || (!ln && Ai())
            ? Mn(e)
              ? ei(e, n)
              : $r(e)
                ? Qr.call(e, 0)
                : e
                  ? [e]
                  : []
            : Qr.call((t || un).querySelectorAll(e), 0);
      }),
      (ni = function (e) {
        return (
          (e = ti(e)[0] || Wn(`Invalid scope`) || {}),
          function (t) {
            var n = e.current || e.nativeElement || e;
            return ti(
              t,
              n.querySelectorAll ? n : n === e ? Wn(`Invalid scope`) || un.createElement(`div`) : e
            );
          }
        );
      }),
      (ri = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      }),
      (ii = function (e) {
        if (J(e)) return e;
        var t = Dn(e) ? e : { each: e },
          n = Ri(t.ease),
          r = t.from || 0,
          i = parseFloat(t.base) || 0,
          a = {},
          o = r > 0 && r < 1,
          s = isNaN(r) || o,
          c = t.axis,
          l = r,
          u = r;
        return (
          wn(r)
            ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !o && s && ((l = r[0]), (u = r[1])),
          function (e, o, d) {
            var f,
              p,
              m,
              h,
              g,
              _,
              v,
              y,
              b,
              x = (d || t).length,
              S = a[x];
            if (!S) {
              if (((b = t.grid === `auto` ? 0 : (t.grid || [1, _n])[1]), !b)) {
                for (v = -_n; v < (v = d[b++].getBoundingClientRect().left) && b < x;);
                b--;
              }
              for (
                S = a[x] = [],
                  f = s ? Math.min(b, x) * l - 0.5 : r % b,
                  p = b === _n ? 0 : s ? (x * u) / b - 0.5 : (r / b) | 0,
                  v = 0,
                  y = _n,
                  _ = 0;
                _ < x;
                _++
              )
                ((m = (_ % b) - f),
                  (h = p - ((_ / b) | 0)),
                  (S[_] = g = c ? Math.abs(c === `y` ? h : m) : xn(m * m + h * h)),
                  g > v && (v = g),
                  g < y && (y = g));
              (r === `random` && ri(S),
                (S.max = v - y),
                (S.min = y),
                (S.v = x =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (b > x ? x - 1 : c ? (c === `y` ? x / b : b) : Math.max(b, x / b)) ||
                    0) * (r === `edges` ? -1 : 1)),
                (S.b = x < 0 ? i - x : i),
                (S.u = Xr(t.amount || t.each) || 0),
                (n = n && x < 0 ? Ii(n) : n));
            }
            return ((x = (S[e] - S.min) / S.max || 0), lr(S.b + (n ? n(x) : x) * S.v) + S.u);
          }
        );
      }),
      (ai = function (e) {
        var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
        return function (n) {
          var r = lr(Math.round(parseFloat(n) / e) * e * t);
          return (r - (r % 1)) / t + (Tn(n) ? 0 : Xr(n));
        };
      }),
      (oi = function (e, t) {
        var n,
          r,
          i = Mn(e);
        return (
          !i &&
            Dn(e) &&
            ((n = i = e.radius || _n),
            e.values ? ((e = ti(e.values)), (r = !Tn(e[0])) && (n *= n)) : (e = ai(e.increment))),
          Jr(
            t,
            i
              ? J(e)
                ? function (t) {
                    return ((r = e(t)), Math.abs(r - t) <= n ? r : t);
                  }
                : function (t) {
                    for (
                      var i,
                        a,
                        o = parseFloat(r ? t.x : t),
                        s = parseFloat(r ? t.y : 0),
                        c = _n,
                        l = 0,
                        u = e.length;
                      u--;
                    )
                      (r
                        ? ((i = e[u].x - o), (a = e[u].y - s), (i = i * i + a * a))
                        : (i = Math.abs(e[u] - o)),
                        i < c && ((c = i), (l = u)));
                    return ((l = !n || c <= n ? e[l] : t), r || l === t || Tn(t) ? l : l + Xr(t));
                  }
              : ai(e)
          )
        );
      }),
      (si = function (e, t, n, r) {
        return Jr(Mn(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
          return Mn(e)
            ? e[~~(Math.random() * e.length)]
            : (n ||= 1e-5) &&
                (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
                Math.floor(
                  Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) * n * r
                ) / r;
        });
      }),
      (ci = function () {
        var e = [...arguments];
        return function (t) {
          return e.reduce(function (e, t) {
            return t(e);
          }, t);
        };
      }),
      (li = function (e, t) {
        return function (n) {
          return e(parseFloat(n)) + (t || Xr(n));
        };
      }),
      (ui = function (e, t, n) {
        return hi(e, t, 0, 1, n);
      }),
      (di = function (e, t, n) {
        return Jr(n, function (n) {
          return e[~~t(n)];
        });
      }),
      (fi = function e(t, n, r) {
        var i = n - t;
        return Mn(t)
          ? di(t, e(0, t.length), n)
          : Jr(r, function (e) {
              return ((i + ((e - t) % i)) % i) + t;
            });
      }),
      (pi = function e(t, n, r) {
        var i = n - t,
          a = 2 * i;
        return Mn(t)
          ? di(t, e(0, t.length - 1), n)
          : Jr(r, function (e) {
              return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
            });
      }),
      (mi = function (e) {
        for (var t, n, r, i, a = 0, o = ``; ~(t = e.indexOf(`random(`, a));)
          ((r = e.indexOf(`)`, t)),
            (i = e.charAt(t + 7) === `[`),
            (n = e.substr(t + 7, r - t - 7).match(i ? Rn : Nn)),
            (o += e.substr(a, t - a) + si(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (a = r + 1));
        return o + e.substr(a, e.length - a);
      }),
      (hi = function (e, t, n, r, i) {
        var a = t - e,
          o = r - n;
        return Jr(i, function (t) {
          return n + (((t - e) / a) * o || 0);
        });
      }),
      (gi = function e(t, n, r, i) {
        var a = isNaN(t + n)
          ? 0
          : function (e) {
              return (1 - e) * t + e * n;
            };
        if (!a) {
          var o,
            s,
            c,
            l,
            u,
            d = wn(t),
            f = {};
          if ((!0 === r && (i = 1) && (r = null), d)) ((t = { p: t }), (n = { p: n }));
          else if (Mn(t) && !Mn(n)) {
            for (c = [], l = t.length, u = l - 2, s = 1; s < l; s++) c.push(e(t[s - 1], t[s]));
            (l--,
              (a = function (e) {
                e *= l;
                var t = Math.min(u, ~~e);
                return c[t](e - t);
              }),
              (r = n));
          } else i || (t = vr(Mn(t) ? [] : {}, t));
          if (!c) {
            for (o in n) Yi.call(f, t, o, `get`, n[o]);
            a = function (e) {
              return ma(e, f) || (d ? t.p : t);
            };
          }
        }
        return Jr(r, a);
      }),
      (_i = function (e, t, n) {
        var r,
          i,
          a,
          o = e.labels,
          s = _n;
        for (r in o)
          ((i = o[r] - t), i < 0 == !!n && i && s > (i = Math.abs(i)) && ((a = r), (s = i)));
        return a;
      }),
      (vi = function (e, t, n) {
        var r,
          i,
          a,
          o = e.vars,
          s = o[t],
          c = sn,
          l = e._ctx;
        if (s)
          return (
            (r = o[t + `Params`]),
            (i = o.callbackScope || e),
            n && Zn.length && fr(),
            l && (sn = l),
            (a = r ? s.apply(i, r) : s.call(i)),
            (sn = c),
            a
          );
      }),
      (yi = function (e) {
        return (
          Tr(e),
          e.scrollTrigger && e.scrollTrigger.kill(!!on),
          e.progress() < 1 && vi(e, `onInterrupt`),
          e
        );
      }),
      (bi = function (e) {
        e = (!e.name && e.default) || e;
        var t = e.name,
          n = J(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = { init: Kn, render: ma, add: Yi, kill: ga, modifier: ha, rawVars: 0 },
          a = { targetTest: 0, get: 0, getSetter: ua, aliases: {}, register: 0 };
        if ((Ai(), e !== r)) {
          if ($n[t]) return;
          (gr(r, gr(br(e, i), a)),
            vr(r.prototype, vr(i, br(e, a))),
            ($n[(r.prop = t)] = r),
            e.targetTest && (nr.push(r), (Xn[t] = 1)),
            (t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`));
        }
        (Gn(t, r), e.register && e.register(Ma, r, ya));
      }),
      (Y = 255),
      (xi = {
        aqua: [0, Y, Y],
        lime: [0, Y, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Y],
        navy: [0, 0, 128],
        white: [Y, Y, Y],
        olive: [128, 128, 0],
        yellow: [Y, Y, 0],
        orange: [Y, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Y, 0, 0],
        pink: [Y, 192, 203],
        cyan: [0, Y, Y],
        transparent: [Y, Y, Y, 0],
      }),
      (Si = function (e, t, n) {
        return (
          (e += e < 0 ? 1 : e > 1 ? -1 : 0),
          ((6 * e < 1
            ? t + (n - t) * e * 6
            : e < 0.5
              ? n
              : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) *
            Y +
            0.5) |
            0
        );
      }),
      (Ci = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p = e ? (Tn(e) ? [e >> 16, (e >> 8) & Y, e & Y] : 0) : xi.black;
        if (!p) {
          if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), xi[e])) p = xi[e];
          else if (e.charAt(0) === `#`) {
            if (
              (e.length < 6 &&
                ((r = e.charAt(1)),
                (i = e.charAt(2)),
                (a = e.charAt(3)),
                (e =
                  `#` + r + r + i + i + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
              e.length === 9)
            )
              return (
                (p = parseInt(e.substr(1, 6), 16)),
                [p >> 16, (p >> 8) & Y, p & Y, parseInt(e.substr(7), 16) / 255]
              );
            ((e = parseInt(e.substr(1), 16)), (p = [e >> 16, (e >> 8) & Y, e & Y]));
          } else if (e.substr(0, 3) === `hsl`)
            if (((p = f = e.match(Nn)), t)) {
              if (~e.indexOf(`=`)) return ((p = e.match(Pn)), n && p.length < 4 && (p[3] = 1), p);
            } else
              ((o = (p[0] % 360) / 360),
                (s = p[1] / 100),
                (c = p[2] / 100),
                (i = c <= 0.5 ? c * (s + 1) : c + s - c * s),
                (r = 2 * c - i),
                p.length > 3 && (p[3] *= 1),
                (p[0] = Si(o + 1 / 3, r, i)),
                (p[1] = Si(o, r, i)),
                (p[2] = Si(o - 1 / 3, r, i)));
          else p = e.match(Nn) || xi.transparent;
          p = p.map(Number);
        }
        return (
          t &&
            !f &&
            ((r = p[0] / Y),
            (i = p[1] / Y),
            (a = p[2] / Y),
            (l = Math.max(r, i, a)),
            (u = Math.min(r, i, a)),
            (c = (l + u) / 2),
            l === u
              ? (o = s = 0)
              : ((d = l - u),
                (s = c > 0.5 ? d / (2 - l - u) : d / (l + u)),
                (o =
                  l === r
                    ? (i - a) / d + (i < a ? 6 : 0)
                    : l === i
                      ? (a - r) / d + 2
                      : (r - i) / d + 4),
                (o *= 60)),
            (p[0] = ~~(o + 0.5)),
            (p[1] = ~~(100 * s + 0.5)),
            (p[2] = ~~(100 * c + 0.5))),
          n && p.length < 4 && (p[3] = 1),
          p
        );
      }),
      (wi = function (e) {
        var t = [],
          n = [],
          r = -1;
        return (
          e.split(Ei).forEach(function (e) {
            var i = e.match(Fn) || [];
            (t.push.apply(t, i), n.push((r += i.length + 1)));
          }),
          (t.c = n),
          t
        );
      }),
      (Ti = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s = ``,
          c = (e + s).match(Ei),
          l = t ? `hsla(` : `rgba(`,
          u = 0;
        if (!c) return e;
        if (
          ((c = c.map(function (e) {
            return (
              (e = Ci(e, t, 1)) &&
              l + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
            );
          })),
          n && ((a = wi(e)), (r = n.c), r.join(s) !== a.c.join(s)))
        )
          for (i = e.replace(Ei, `1`).split(Fn), o = i.length - 1; u < o; u++)
            s +=
              i[u] +
              (~r.indexOf(u)
                ? c.shift() || l + `0,0,0,0)`
                : (a.length ? a : c.length ? c : n).shift());
        if (!i) for (i = e.split(Ei), o = i.length - 1; u < o; u++) s += i[u] + c[u];
        return s + i[o];
      }),
      (Ei = (function () {
        var e,
          t = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`;
        for (e in xi) t += `|` + e + `\\b`;
        return RegExp(t + `)`, `gi`);
      })()),
      (Di = /hsl[a]?\(/),
      (Oi = function (e) {
        var t,
          n = e.join(` `);
        if (((Ei.lastIndex = 0), Ei.test(n)))
          return ((t = Di.test(n)), (e[1] = Ti(e[1], t)), (e[0] = Ti(e[0], t, wi(e[1]))), !0);
      }),
      (ki = (function () {
        var e,
          t,
          r,
          i,
          a,
          o,
          s = Date.now,
          c = 500,
          l = 33,
          u = s(),
          d = u,
          f = 1e3 / 240,
          p = f,
          m = [],
          h = function n(r) {
            var h,
              g,
              _,
              v,
              y = s() - d,
              b = !0 === r;
            if (
              (y > c && (u += y - l),
              (d += y),
              (_ = d - u),
              (h = _ - p),
              (h > 0 || b) &&
                ((v = ++i.frame),
                (a = _ - 1e3 * i.time),
                (i.time = _ /= 1e3),
                (p += h + (h >= f ? 4 : f - h)),
                (g = 1)),
              b || (e = t(n)),
              g)
            )
              for (o = 0; o < m.length; o++) m[o](_, a, v, r);
          };
        return (
          (i = {
            time: 0,
            frame: 0,
            tick: function () {
              h(!0);
            },
            deltaRatio: function (e) {
              return a / (1e3 / (e || 60));
            },
            wake: function () {
              dn &&
                (!ln &&
                  kn() &&
                  ((cn = ln = n),
                  (un = cn.document || {}),
                  (Bn.gsap = Ma),
                  (cn.gsapVersions ||= []).push(Ma.version),
                  Hn(Vn || cn.GreenSockGlobals || (!cn.gsap && cn) || {}),
                  (r = cn.requestAnimationFrame)),
                e && i.sleep(),
                (t =
                  r ||
                  function (e) {
                    return setTimeout(e, (p - 1e3 * i.time + 1) | 0);
                  }),
                (mn = 1),
                h(2));
            },
            sleep: function () {
              ((r ? cn.cancelAnimationFrame : clearTimeout)(e), (mn = 0), (t = Kn));
            },
            lagSmoothing: function (e, t) {
              ((c = e || 1 / q), (l = Math.min(t, c, 0)));
            },
            fps: function (e) {
              ((f = 1e3 / (e || 240)), (p = 1e3 * i.time + f));
            },
            add: function (e, t, n) {
              var r = t
                ? function (t, n, a, o) {
                    (e(t, n, a, o), i.remove(r));
                  }
                : e;
              return (i.remove(e), m[n ? `unshift` : `push`](r), Ai(), r);
            },
            remove: function (e, t) {
              ~(t = m.indexOf(e)) && m.splice(t, 1) && o >= t && o--;
            },
            _listeners: m,
          }),
          i
        );
      })()),
      (Ai = function () {
        return !mn && ki.wake();
      }),
      (X = {}),
      (ji = /^[\d.\-M][\d.\-,\s]/),
      (Mi = /["']/g),
      (Ni = function (e) {
        for (
          var t,
            n,
            r,
            i = {},
            a = e.substr(1, e.length - 3).split(`:`),
            o = a[0],
            s = 1,
            c = a.length;
          s < c;
          s++
        )
          ((n = a[s]),
            (t = s === c - 1 ? n.length : n.lastIndexOf(`,`)),
            (r = n.substr(0, t)),
            (i[o] = isNaN(r) ? r.replace(Mi, ``).trim() : +r),
            (o = n.substr(t + 1).trim()));
        return i;
      }),
      (Pi = function (e) {
        var t = e.indexOf(`(`) + 1,
          n = e.indexOf(`)`),
          r = e.indexOf(`(`, t);
        return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
      }),
      (Fi = function (e) {
        var t = (e + ``).split(`(`),
          n = X[t[0]];
        return n && t.length > 1 && n.config
          ? n.config.apply(null, ~e.indexOf(`{`) ? [Ni(t[1])] : Pi(e).split(`,`).map(mr))
          : X._CE && ji.test(e)
            ? X._CE(``, e)
            : n;
      }),
      (Ii = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      }),
      (Li = function e(t, n) {
        for (var r, i = t._first; i;)
          (i instanceof Gi
            ? e(i, n)
            : i.vars.yoyoEase &&
              (!i._yoyo || !i._repeat) &&
              i._yoyo !== n &&
              (i.timeline
                ? e(i.timeline, n)
                : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))),
            (i = i._next));
      }),
      (Ri = function (e, t) {
        return (e && (J(e) ? e : X[e] || Fi(e))) || t;
      }),
      (zi = function (e, t, n, r) {
        (n === void 0 &&
          (n = function (e) {
            return 1 - t(1 - e);
          }),
          r === void 0 &&
            (r = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            }));
        var i,
          a = { easeIn: t, easeOut: n, easeInOut: r };
        return (
          sr(e, function (e) {
            for (var t in ((X[e] = Bn[e] = a), (X[(i = e.toLowerCase())] = n), a))
              X[i + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = X[
                e + `.` + t
              ] = a[t];
          }),
          a
        );
      }),
      (Bi = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      }),
      (Vi = function e(t, n, r) {
        var i = n >= 1 ? n : 1,
          a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          o = (a / vn) * (Math.asin(1 / i) || 0),
          s = function (e) {
            return e === 1 ? 1 : i * 2 ** (-10 * e) * Cn((e - o) * a) + 1;
          },
          c =
            t === `out`
              ? s
              : t === `in`
                ? function (e) {
                    return 1 - s(1 - e);
                  }
                : Bi(s);
        return (
          (a = vn / a),
          (c.config = function (n, r) {
            return e(t, n, r);
          }),
          c
        );
      }),
      (Hi = function e(t, n) {
        n === void 0 && (n = 1.70158);
        var r = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
          i =
            t === `out`
              ? r
              : t === `in`
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : Bi(r);
        return (
          (i.config = function (n) {
            return e(t, n);
          }),
          i
        );
      }),
      sr(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
        var n = t < 5 ? t + 1 : t;
        zi(
          e + `,Power` + (n - 1),
          t
            ? function (e) {
                return e ** +n;
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - (1 - e) ** n;
          },
          function (e) {
            return e < 0.5 ? (2 * e) ** n / 2 : 1 - (2 * (1 - e)) ** n / 2;
          }
        );
      }),
      (X.Linear.easeNone = X.none = X.Linear.easeIn),
      zi(`Elastic`, Vi(`in`), Vi(`out`), Vi()),
      (function (e, t) {
        var n = 1 / t,
          r = 2 * n,
          i = 2.5 * n,
          a = function (a) {
            return a < n
              ? e * a * a
              : a < r
                ? e * (a - 1.5 / t) ** 2 + 0.75
                : a < i
                  ? e * (a -= 2.25 / t) * a + 0.9375
                  : e * (a - 2.625 / t) ** 2 + 0.984375;
          };
        zi(
          `Bounce`,
          function (e) {
            return 1 - a(1 - e);
          },
          a
        );
      })(7.5625, 2.75),
      zi(`Expo`, function (e) {
        return e ? 2 ** (10 * (e - 1)) : 0;
      }),
      zi(`Circ`, function (e) {
        return -(xn(1 - e * e) - 1);
      }),
      zi(`Sine`, function (e) {
        return e === 1 ? 1 : 1 - Sn(e * yn);
      }),
      zi(`Back`, Hi(`in`), Hi(`out`), Hi()),
      (X.SteppedEase =
        X.steps =
        Bn.SteppedEase =
          {
            config: function (e, t) {
              e === void 0 && (e = 1);
              var n = 1 / e,
                r = e + +!t,
                i = +!!t,
                a = 1 - q;
              return function (e) {
                return (((r * Yr(0, a, e)) | 0) + i) * n;
              };
            },
          }),
      (gn.ease = X[`quad.out`]),
      sr(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function (e) {
        return (rr += e + `,` + e + `Params,`);
      }),
      (Ui = function (e, t) {
        ((this.id = bn++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : or),
          (this.set = t ? t.getSetter : ua));
      }),
      (Wi = (function () {
        function e(e) {
          ((this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            Ur(this, +e.duration, 1, 1),
            (this.data = e.data),
            sn && ((this._ctx = sn), sn.data.push(this)),
            mn || ki.wake());
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || e === 0
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                Ur(
                  this,
                  this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((Ai(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Pr(this, e), !n._dp || n.parent || Fr(n, this); n && n.parent;)
                (n.parent._time !==
                  n._start +
                    (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent));
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Ir(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && Math.abs(this._zTime) === q) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), pr(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + Ar(this)) % (this._dur + this._rDelay) ||
                    (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ar(this),
                  t
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
          }),
          (t.iteration = function (e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * n, t)
              : this._repeat
                ? jr(this._tTime, n) + 1
                : 1;
          }),
          (t.timeScale = function (e) {
            if (!arguments.length) return this._rts === -q ? 0 : this._rts;
            if (this._rts === e) return this;
            var t = this.parent && this._ts ? Mr(this.parent._time, this) : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || e === -q ? 0 : this._rts),
              this.totalTime(Yr(-this._delay, this._tDur, t), !0),
              Nr(this),
              Dr(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (Ai(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        this.progress() === 1 && Math.abs(this._zTime) !== q && (this._tTime -= q)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (t && (t._sort || !this.parent) && Ir(t, this, e - this._delay), this);
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (On(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? Mr(t.rawTime(e), this)
                  : this._tTime
              : this._tTime;
          }),
          (t.revert = function (e) {
            e === void 0 && (e = Yn);
            var t = on;
            return (
              (on = e),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)),
              this.data !== `nested` && !1 !== e.kill && this.kill(),
              (on = t),
              this
            );
          }),
          (t.globalTime = function (e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
              ((n = t._start + n / (t._ts || 1)), (t = t._dp));
            return !this.parent && this.vars.immediateRender ? -1 : n;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), Wr(this))
              : this._repeat === -2
                ? 1 / 0
                : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return ((this._rDelay = e), Wr(this), t ? this.time(t) : this);
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(Kr(this, e), On(t));
          }),
          (t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, On(t));
          }),
          (t.play = function (e, t) {
            return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
          }),
          (t.reverse = function (e, t) {
            return (
              e != null && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return (e != null && this.seek(e, t), this.paused(!0));
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -q : 0)), this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return ((this._initted = this._act = 0), (this._zTime = -q), this);
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              n = this._start;
            return !!(
              !t ||
              (this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= n &&
                e < this.endTime(!0) - q)
            );
          }),
          (t.eventCallback = function (e, t, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((r[e] = t),
                    n && (r[e + `Params`] = n),
                    e === `onUpdate` && (this._onUpdate = t))
                  : delete r[e],
                this)
              : r[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (n) {
              var r = J(e) ? e : hr,
                i = function () {
                  var e = t.then;
                  ((t.then = null),
                    J(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                    n(r),
                    (t.then = e));
                };
              (t._initted && t.totalProgress() === 1 && t._ts >= 0) || (!t._tTime && t._ts < 0)
                ? i()
                : (t._prom = i);
            });
          }),
          (t.kill = function () {
            yi(this);
          }),
          e
        );
      })()),
      gr(Wi.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -q,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      }),
      (Gi = (function (e) {
        rn(t, e);
        function t(t, n) {
          var r;
          return (
            t === void 0 && (t = {}),
            (r = e.call(this, t) || this),
            (r.labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = On(t.sortChildren)),
            K && Ir(t.parent || K, nn(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && Lr(nn(r), t.scrollTrigger),
            r
          );
        }
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return (qr(0, arguments, this), this);
          }),
          (n.from = function (e, t, n) {
            return (qr(1, arguments, this), this);
          }),
          (n.fromTo = function (e, t, n, r) {
            return (qr(2, arguments, this), this);
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              xr(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new aa(e, t, Kr(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return Ir(this, aa.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, i, a, o) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = a),
              (n.onCompleteParams = o),
              (n.parent = this),
              new aa(e, n, Kr(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, i, a, o) {
            return (
              (n.runBackwards = 1),
              (xr(n).immediateRender = On(n.immediateRender)),
              this.staggerTo(e, t, n, r, i, a, o)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
            return (
              (r.startAt = n),
              (xr(r).immediateRender = On(r.immediateRender)),
              this.staggerTo(e, t, r, i, a, o, s)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              f,
              p,
              m,
              h = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              v = e <= 0 ? 0 : lr(e),
              y = this._zTime < 0 != e < 0 && (this._initted || !_);
            if ((this !== K && v > g && e >= 0 && (v = g), v !== this._tTime || n || y)) {
              if (
                (h !== this._time && _ && ((v += this._time - h), (e += this._time - h)),
                (r = v),
                (d = this._start),
                (u = this._ts),
                (c = !u),
                y && (_ || (h = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (((p = this._yoyo), (s = _ + this._rDelay), this._repeat < -1 && e < 0))
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = lr(v % s)),
                  v === g
                    ? ((o = this._repeat), (r = _))
                    : ((o = ~~(v / s)), o && o === v / s && ((r = _), o--), r > _ && (r = _)),
                  (f = jr(this._tTime, s)),
                  !h && this._tTime && f !== o && (f = o),
                  p && 1 & o && ((r = _ - r), (m = 1)),
                  o !== f && !this._lock)
                ) {
                  var b = p && 1 & f,
                    x = b === (p && 1 & o);
                  if (
                    (o < f && (b = !b),
                    (h = b ? 0 : _),
                    (this._lock = 1),
                    (this.render(h || (m ? 0 : lr(o * s)), t, !_)._lock = 0),
                    (this._tTime = v),
                    !t && this.parent && vi(this, `onRepeat`),
                    this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                    (h && h !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((_ = this._dur),
                      (g = this._tDur),
                      x &&
                        ((this._lock = 2),
                        (h = b ? _ : -1e-4),
                        this.render(h, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !c))
                  )
                    return this;
                  Li(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((l = Hr(this, lr(h), lr(r))), l && (v -= r - (r = l._start))),
                (this._tTime = v),
                (this._time = r),
                (this._act = !u),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (h = 0)),
                !h && r && !t && (vi(this, `onStart`), this._tTime !== v))
              )
                return this;
              if (r >= h && e >= 0)
                for (i = this._first; i;) {
                  if (((a = i._next), (i._act || r >= i._start) && i._ts && l !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !c))
                    ) {
                      ((l = 0), a && (v += this._zTime = -q));
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var S = e < 0 ? e : r; i;) {
                  if (((a = i._prev), (i._act || S <= i._end) && i._ts && l !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (S - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (S - i._start) * i._ts,
                        t,
                        n || (on && (i._initted || i._startAt))
                      ),
                      r !== this._time || (!this._ts && !c))
                    ) {
                      ((l = 0), a && (v += this._zTime = S ? -q : q));
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                l &&
                !t &&
                (this.pause(), (l.render(r >= h ? 0 : -q)._zTime = r >= h ? 1 : -1), this._ts)
              )
                return ((this._start = d), Nr(this), this.render(e, t, n));
              (this._onUpdate && !t && vi(this, `onUpdate`, !0),
                ((v === g && this._tTime >= this.totalDuration()) || (!v && h)) &&
                  (d === this._start || Math.abs(u) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((e || !_) && ((v === g && this._ts > 0) || (!v && this._ts < 0)) && Tr(this, 1),
                  !t &&
                    !(e < 0 && !h) &&
                    (v || h || !g) &&
                    (vi(this, v === g && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
                    this._prom && !(v < g && this.timeScale() > 0) && this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((Tn(t) || (t = Kr(this, t, e)), !(e instanceof Wi))) {
              if (Mn(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (wn(e)) return this.addLabel(e, t);
              if (!J(e)) return this;
              e = aa.delayedCall(0, e);
            }
            return this === e ? this : Ir(this, e, t);
          }),
          (n.getChildren = function (e, t, n, r) {
            (e === void 0 && (e = !0),
              t === void 0 && (t = !0),
              n === void 0 && (n = !0),
              r === void 0 && (r = -_n));
            for (var i = [], a = this._first; a;)
              (a._start >= r &&
                (a instanceof aa
                  ? t && i.push(a)
                  : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
                (a = a._next));
            return i;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return wn(e)
              ? this.removeLabel(e)
              : J(e)
                ? this.killTweensOf(e)
                : (wr(this, e), e === this._recent && (this._recent = this._last), Er(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = lr(
                    ki.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return ((this.labels[e] = Kr(this, t)), this);
          }),
          (n.removeLabel = function (e) {
            return (delete this.labels[e], this);
          }),
          (n.addPause = function (e, t, n) {
            var r = aa.delayedCall(0, t || Kn, n);
            return ((r.data = `isPause`), (this._hasPause = 1), Ir(this, r, Kr(this, e)));
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = Kr(this, e); t;)
              (t._start === e && t.data === `isPause` && Tr(t), (t = t._next));
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--;) Ki !== r[i] && r[i].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], i = ti(e), a = this._first, o = Tn(t); a;)
              (a instanceof aa
                ? dr(a._targets, i) &&
                  (o
                    ? (!Ki || (a._initted && a._ts)) &&
                      a.globalTime(0) <= t &&
                      a.globalTime(a.totalDuration()) > t
                    : !t || a.isActive()) &&
                  r.push(a)
                : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
                (a = a._next));
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t ||= {};
            var n,
              r = this,
              i = Kr(r, e),
              a = t,
              o = a.startAt,
              s = a.onStart,
              c = a.onStartParams,
              l = a.immediateRender,
              u = aa.to(
                r,
                gr(
                  {
                    ease: t.ease || `none`,
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: `auto`,
                    duration:
                      t.duration ||
                      Math.abs((i - (o && `time` in o ? o.time : r._time)) / r.timeScale()) ||
                      q,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs((i - (o && `time` in o ? o.time : r._time)) / r.timeScale());
                        (u._dur !== e && Ur(u, e, 0, 1).render(u._time, !0, !0), (n = 1));
                      }
                      s && s.apply(u, c || []);
                    },
                  },
                  t
                )
              );
            return l ? u.render(0) : u;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, gr({ startAt: { time: Kr(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return (e === void 0 && (e = this._time), _i(this, Kr(this, e)));
          }),
          (n.previousLabel = function (e) {
            return (e === void 0 && (e = this._time), _i(this, Kr(this, e), 1));
          }),
          (n.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + q);
          }),
          (n.shiftChildren = function (e, t, n) {
            n === void 0 && (n = 0);
            for (var r, i = this._first, a = this.labels; i;)
              (i._start >= n && ((i._start += e), (i._end += e)), (i = i._next));
            if (t) for (r in a) a[r] >= n && (a[r] += e);
            return Er(this);
          }),
          (n.invalidate = function (t) {
            var n = this._first;
            for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
            return e.prototype.invalidate.call(this, t);
          }),
          (n.clear = function (e) {
            e === void 0 && (e = !0);
            for (var t, n = this._first; n;) ((t = n._next), this.remove(n), (n = t));
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              Er(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              i = 0,
              a = this,
              o = a._last,
              s = _n;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -e : e)
              );
            if (a._dirty) {
              for (r = a.parent; o;)
                ((t = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start),
                  n > s && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (Ir(a, o, n - o._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    o._ts &&
                    ((i -= n),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += n / a._ts), (a._time -= n), (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -1 / 0),
                    (s = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = t));
              (Ur(a, a === K && a._time > i ? a._time : i, 1, 1), (a._dirty = 0));
            }
            return a._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((K._ts && (pr(K, Mr(e, K)), (fn = ki.frame)), ki.frame >= tr)) {
              tr += hn.autoSleep || 120;
              var t = K._first;
              if ((!t || !t._ts) && hn.autoSleep && ki._listeners.length < 2) {
                for (; t && !t._ts;) t = t._next;
                t || ki.sleep();
              }
            }
          }),
          t
        );
      })(Wi)),
      gr(Gi.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 }),
      (Ji = function (e, t, n, r, i, a, o) {
        var s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h = new ya(this._pt, e, t, 0, 1, pa, null, i),
          g = 0,
          _ = 0;
        for (
          h.b = n,
            h.e = r,
            n += ``,
            r += ``,
            (p = ~r.indexOf(`random(`)) && (r = mi(r)),
            a && ((m = [n, r]), a(m, e, t), (n = m[0]), (r = m[1])),
            c = n.match(In) || [];
          (s = In.exec(r));
        )
          ((u = s[0]),
            (d = r.substring(g, s.index)),
            l ? (l = (l + 1) % 5) : d.substr(-5) === `rgba(` && (l = 1),
            u !== c[_++] &&
              ((f = parseFloat(c[_ - 1]) || 0),
              (h._pt = {
                _next: h._pt,
                p: d || _ === 1 ? d : `,`,
                s: f,
                c: u.charAt(1) === `=` ? ur(f, u) - f : parseFloat(u) - f,
                m: l && l < 4 ? Math.round : 0,
              }),
              (g = In.lastIndex)));
        return (
          (h.c = g < r.length ? r.substring(g, r.length) : ``),
          (h.fp = o),
          (Ln.test(r) || p) && (h.e = 0),
          (this._pt = h),
          h
        );
      }),
      (Yi = function (e, t, n, r, i, a, o, s, c, l) {
        J(r) && (r = r(i || 0, e, a));
        var u,
          d = e[t],
          f =
            n === `get`
              ? J(d)
                ? c
                  ? e[t.indexOf(`set`) || !J(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c)
                  : e[t]()
                : d
              : n,
          p = J(d) ? (c ? ca : sa) : oa;
        if (
          (wn(r) &&
            (~r.indexOf(`random(`) && (r = mi(r)),
            r.charAt(1) === `=` && ((u = ur(f, r) + (Xr(f) || 0)), (u || u === 0) && (r = u))),
          !l || f !== r || qi)
        )
          return !isNaN(f * r) && r !== ``
            ? ((u = new ya(
                this._pt,
                e,
                t,
                +f || 0,
                r - (f || 0),
                typeof d == `boolean` ? fa : da,
                0,
                p
              )),
              c && (u.fp = c),
              o && u.modifier(o, this, e),
              (this._pt = u))
            : (!d && !(t in e) && Un(t, r), Ji.call(this, e, t, f, r, p, s || hn.stringFilter, c));
      }),
      (Xi = function (e, t, n, r, i) {
        if ((J(e) && (e = na(e, i, t, n, r)), !Dn(e) || (e.style && e.nodeType) || Mn(e) || jn(e)))
          return wn(e) ? na(e, i, t, n, r) : e;
        var a,
          o = {};
        for (a in e) o[a] = na(e[a], i, t, n, r);
        return o;
      }),
      (Zi = function (e, t, n, r, i, a) {
        var o, s, c, l;
        if (
          $n[e] &&
          !1 !== (o = new $n[e]()).init(i, o.rawVars ? t[e] : Xi(t[e], r, i, a, n), n, r, a) &&
          ((n._pt = s = new ya(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)), n !== pn)
        )
          for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
            c[o._props[l]] = s;
        return o;
      }),
      (Qi = function e(t, n, r) {
        var i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _ = t.vars,
          v = _.ease,
          y = _.startAt,
          b = _.immediateRender,
          x = _.lazy,
          S = _.onUpdate,
          C = _.onUpdateParams,
          w = _.callbackScope,
          T = _.runBackwards,
          E = _.yoyoEase,
          D = _.keyframes,
          O = _.autoRevert,
          k = t._dur,
          A = t._startAt,
          j = t._targets,
          M = t.parent,
          N = M && M.data === `nested` ? M.vars.targets : j,
          P = t._overwrite === `auto` && !an,
          F = t.timeline;
        if (
          (F && (!D || !v) && (v = `none`),
          (t._ease = Ri(v, gn.ease)),
          (t._yEase = E ? Ii(Ri(!0 === E ? v : E, gn.ease)) : 0),
          E && t._yoyo && !t._repeat && ((E = t._yEase), (t._yEase = t._ease), (t._ease = E)),
          (t._from = !F && !!_.runBackwards),
          !F || (D && !_.stagger))
        ) {
          if (
            ((d = j[0] ? ar(j[0]).harness : 0),
            (h = d && _[d.prop]),
            (i = br(_, Xn)),
            A &&
              (A._zTime < 0 && A.progress(1),
              n < 0 && T && b && !O ? A.render(-1, !0) : A.revert(T && k ? Jn : qn),
              (A._lazy = 0)),
            y)
          ) {
            if (
              (Tr(
                (t._startAt = aa.set(
                  j,
                  gr(
                    {
                      data: `isStart`,
                      overwrite: !1,
                      parent: M,
                      immediateRender: !0,
                      lazy: On(x),
                      startAt: null,
                      delay: 0,
                      onUpdate: S,
                      onUpdateParams: C,
                      callbackScope: w,
                      stagger: 0,
                    },
                    y
                  )
                ))
              ),
              (t._startAt._dp = 0),
              n < 0 && (on || (!b && !O)) && t._startAt.revert(Jn),
              b && k && n <= 0 && r <= 0)
            ) {
              n && (t._zTime = n);
              return;
            }
          } else if (T && k && !A)
            if (
              (n && (b = !1),
              (o = gr(
                {
                  overwrite: !1,
                  data: `isFromStart`,
                  lazy: b && On(x),
                  immediateRender: b,
                  stagger: 0,
                  parent: M,
                },
                i
              )),
              h && (o[d.prop] = h),
              Tr((t._startAt = aa.set(j, o))),
              (t._startAt._dp = 0),
              n < 0 && (on ? t._startAt.revert(Jn) : t._startAt.render(-1, !0)),
              (t._zTime = n),
              b)
            ) {
              if (!n) return;
            } else e(t._startAt, q, q);
          for (t._pt = t._ptCache = 0, x = (k && On(x)) || (x && !k), a = 0; a < j.length; a++) {
            if (
              ((c = j[a]),
              (u = c._gsap || ir(j)[a]._gsap),
              (t._ptLookup[a] = p = {}),
              Qn[u.id] && Zn.length && fr(),
              (m = N === j ? a : N.indexOf(c)),
              d &&
                !1 !== (f = new d()).init(c, h || i, t, m, N) &&
                ((t._pt = s = new ya(t._pt, c, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (e) {
                  p[e] = s;
                }),
                f.priority && (l = 1)),
              !d || h)
            )
              for (o in i)
                $n[o] && (f = Zi(o, i, t, m, c, N))
                  ? f.priority && (l = 1)
                  : (p[o] = s = Yi.call(t, c, o, `get`, i[o], m, N, 0, _.stringFilter));
            (t._op && t._op[a] && t.kill(c, t._op[a]),
              P &&
                t._pt &&
                ((Ki = t), K.killTweensOf(c, p, t.globalTime(n)), (g = !t.parent), (Ki = 0)),
              t._pt && x && (Qn[u.id] = 1));
          }
          (l && va(t), t._onInit && t._onInit(t));
        }
        ((t._onUpdate = S),
          (t._initted = (!t._op || t._pt) && !g),
          D && n <= 0 && F.render(_n, !0, !0));
      }),
      ($i = function (e, t, n, r, i, a, o) {
        var s,
          c,
          l,
          u,
          d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
        if (!d)
          for (d = e._ptCache[t] = [], l = e._ptLookup, u = e._targets.length; u--;) {
            if (((s = l[u][t]), s && s.d && s.d._pt))
              for (s = s.d._pt; s && s.p !== t && s.fp !== t;) s = s._next;
            if (!s) return ((qi = 1), (e.vars[t] = `+=0`), Qi(e, o), (qi = 0), 1);
            d.push(s);
          }
        for (u = d.length; u--;)
          ((c = d[u]),
            (s = c._pt || c),
            (s.s = (!r && r !== 0) || i ? s.s + (r || 0) + a * s.c : r),
            (s.c = n - s.s),
            (c.e &&= cr(n) + Xr(c.e)),
            (c.b &&= s.s + Xr(c.b)));
      }),
      (ea = function (e, t) {
        var n,
          r,
          i,
          a,
          o = e[0] ? ar(e[0]).harness : 0,
          s = o && o.aliases;
        if (!s) return t;
        for (r in ((n = vr({}, t)), s))
          if (r in n) for (a = s[r].split(`,`), i = a.length; i--;) n[a[i]] = n[r];
        return n;
      }),
      (ta = function (e, t, n, r) {
        var i,
          a,
          o = t.ease || r || `power1.inOut`;
        if (Mn(t))
          ((a = n[e] || (n[e] = [])),
            t.forEach(function (e, n) {
              return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
            }));
        else
          for (i in t)
            ((a = n[i] || (n[i] = [])),
              i === `ease` || a.push({ t: parseFloat(e), v: t[i], e: o }));
      }),
      (na = function (e, t, n, r, i) {
        return J(e) ? e.call(t, n, r, i) : wn(e) && ~e.indexOf(`random(`) ? mi(e) : e;
      }),
      (ra = rr + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`),
      (ia = {}),
      sr(ra + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
        return (ia[e] = 1);
      }),
      (aa = (function (e) {
        rn(t, e);
        function t(t, n, r, i) {
          var a;
          (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
            (a = e.call(this, i ? n : xr(n)) || this));
          var o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m = a.vars,
            h = m.duration,
            g = m.delay,
            _ = m.immediateRender,
            v = m.stagger,
            y = m.overwrite,
            b = m.keyframes,
            x = m.defaults,
            S = m.scrollTrigger,
            C = m.yoyoEase,
            w = n.parent || K,
            T = (Mn(t) || jn(t) ? Tn(t[0]) : `length` in n) ? [t] : ti(t);
          if (
            ((a._targets = T.length
              ? ir(T)
              : Wn(`GSAP target ` + t + ` not found. https://greensock.com`, !hn.nullTargetWarn) ||
                []),
            (a._ptLookup = []),
            (a._overwrite = y),
            b || v || An(h) || An(g))
          ) {
            if (
              ((n = a.vars),
              (o = a.timeline =
                new Gi({
                  data: `nested`,
                  defaults: x || {},
                  targets: w && w.data === `nested` ? w.vars.targets : T,
                })),
              o.kill(),
              (o.parent = o._dp = nn(a)),
              (o._start = 0),
              v || An(h) || An(g))
            ) {
              if (((l = T.length), (f = v && ii(v)), Dn(v)))
                for (u in v) ~ra.indexOf(u) && ((p ||= {}), (p[u] = v[u]));
              for (s = 0; s < l; s++)
                ((c = br(n, ia)),
                  (c.stagger = 0),
                  C && (c.yoyoEase = C),
                  p && vr(c, p),
                  (d = T[s]),
                  (c.duration = +na(h, nn(a), s, d, T)),
                  (c.delay = (+na(g, nn(a), s, d, T) || 0) - a._delay),
                  !v &&
                    l === 1 &&
                    c.delay &&
                    ((a._delay = g = c.delay), (a._start += g), (c.delay = 0)),
                  o.to(d, c, f ? f(s, d, T) : 0),
                  (o._ease = X.none));
              o.duration() ? (h = g = 0) : (a.timeline = 0);
            } else if (b) {
              (xr(gr(o.vars.defaults, { ease: `none` })),
                (o._ease = Ri(b.ease || n.ease || `none`)));
              var E,
                D,
                O,
                k = 0;
              if (Mn(b))
                (b.forEach(function (e) {
                  return o.to(T, e, `>`);
                }),
                  o.duration());
              else {
                for (u in ((c = {}), b))
                  u === `ease` || u === `easeEach` || ta(u, b[u], c, b.easeEach);
                for (u in c)
                  for (
                    E = c[u].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      k = 0,
                      s = 0;
                    s < E.length;
                    s++
                  )
                    ((D = E[s]),
                      (O = { ease: D.e, duration: ((D.t - (s ? E[s - 1].t : 0)) / 100) * h }),
                      (O[u] = D.v),
                      o.to(T, O, k),
                      (k += O.duration));
                o.duration() < h && o.to({}, { duration: h - o.duration() });
              }
            }
            h || a.duration((h = o.duration()));
          } else a.timeline = 0;
          return (
            !0 === y && !an && ((Ki = nn(a)), K.killTweensOf(T), (Ki = 0)),
            Ir(w, nn(a), r),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (_ ||
              (!h &&
                !b &&
                a._start === lr(w._time) &&
                On(_) &&
                kr(nn(a)) &&
                w.data !== `nested`)) &&
              ((a._tTime = -q), a.render(Math.max(0, -g) || 0)),
            S && Lr(nn(a), S),
            a
          );
        }
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              f = this._time,
              p = this._tDur,
              m = this._dur,
              h = e < 0,
              g = e > p - q && !h ? p : e < q ? 0 : e;
            if (m) {
              if (
                g !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== h)
              ) {
                if (((r = g), (u = this.timeline), this._repeat)) {
                  if (((o = m + this._rDelay), this._repeat < -1 && h))
                    return this.totalTime(100 * o + e, t, n);
                  if (
                    ((r = lr(g % o)),
                    g === p
                      ? ((a = this._repeat), (r = m))
                      : ((a = ~~(g / o)), a && a === g / o && ((r = m), a--), r > m && (r = m)),
                    (c = this._yoyo && 1 & a),
                    c && ((d = this._yEase), (r = m - r)),
                    (s = jr(this._tTime, o)),
                    r === f && !n && this._initted)
                  )
                    return ((this._tTime = g), this);
                  a !== s &&
                    (u && this._yEase && Li(u, c),
                    this.vars.repeatRefresh &&
                      !c &&
                      !this._lock &&
                      ((this._lock = n = 1), (this.render(lr(o * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Rr(this, h ? e : r, n, t, g)) return ((this._tTime = 0), this);
                  if (f !== this._time) return this;
                  if (m !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (d || this._ease)(r / m)),
                  this._from && (this.ratio = l = 1 - l),
                  r && !f && !t && (vi(this, `onStart`), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i;) (i.r(l, i.d), (i = i._next));
                ((u &&
                  u.render(e < 0 ? e : !r && c ? -q : u._dur * u._ease(r / this._dur), t, n)) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate && !t && (h && Or(this, e, t, n), vi(this, `onUpdate`)),
                  this._repeat &&
                    a !== s &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    vi(this, `onRepeat`),
                  (g === this._tDur || !g) &&
                    this._tTime === g &&
                    (h && !this._onUpdate && Or(this, e, !0, !0),
                    (e || !m) &&
                      ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) &&
                      Tr(this, 1),
                    !t &&
                      !(h && !f) &&
                      (g || f || c) &&
                      (vi(this, g === p ? `onComplete` : `onReverseComplete`, !0),
                      this._prom && !(g < p && this.timeScale() > 0) && this._prom())));
              }
            } else Vr(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              e.prototype.invalidate.call(this, t)
            );
          }),
          (n.resetTo = function (e, t, n, r) {
            (mn || ki.wake(), this._ts || this.play());
            var i,
              a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (
              this._initted || Qi(this, a),
              (i = this._ease(a / this._dur)),
              $i(this, e, t, n, r, i, a)
                ? this.resetTo(e, t, n, r)
                : (Pr(this, 0),
                  this.parent ||
                    Cr(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
                  this.render(0))
            );
          }),
          (n.kill = function (e, t) {
            if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
              return ((this._lazy = this._pt = 0), this.parent ? yi(this) : this);
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, Ki && !0 !== Ki.vars.overwrite)._first || yi(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Ur(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              a,
              o,
              s,
              c,
              l,
              u = this._targets,
              d = e ? ti(e) : u,
              f = this._ptLookup,
              p = this._pt;
            if ((!t || t === `all`) && Sr(u, d)) return (t === `all` && (this._pt = 0), yi(this));
            for (
              r = this._op = this._op || [],
                t !== `all` &&
                  (wn(t) &&
                    ((s = {}),
                    sr(t, function (e) {
                      return (s[e] = 1);
                    }),
                    (t = s)),
                  (t = ea(u, t))),
                l = u.length;
              l--;
            )
              if (~d.indexOf(u[l]))
                for (s in ((i = f[l]),
                t === `all` ? ((r[l] = t), (o = i), (a = {})) : ((a = r[l] = r[l] || {}), (o = t)),
                o))
                  ((c = i && i[s]),
                    c && ((`kill` in c.d && !0 !== c.d.kill(s)) || wr(this, c, `_pt`), delete i[s]),
                    a !== `all` && (a[s] = 1));
            return (this._initted && !this._pt && p && yi(this), this);
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, t) {
            return qr(1, arguments);
          }),
          (t.delayedCall = function (e, n, r, i) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (t.fromTo = function (e, t, n) {
            return qr(2, arguments);
          }),
          (t.set = function (e, n) {
            return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
          }),
          (t.killTweensOf = function (e, t, n) {
            return K.killTweensOf(e, t, n);
          }),
          t
        );
      })(Wi)),
      gr(aa.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
      sr(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
        aa[e] = function () {
          var t = new Gi(),
            n = Qr.call(arguments, 0);
          return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
        };
      }),
      (oa = function (e, t, n) {
        return (e[t] = n);
      }),
      (sa = function (e, t, n) {
        return e[t](n);
      }),
      (ca = function (e, t, n, r) {
        return e[t](r.fp, n);
      }),
      (la = function (e, t, n) {
        return e.setAttribute(t, n);
      }),
      (ua = function (e, t) {
        return J(e[t]) ? sa : En(e[t]) && e.setAttribute ? la : oa;
      }),
      (da = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      }),
      (fa = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      }),
      (pa = function (e, t) {
        var n = t._pt,
          r = ``;
        if (!e && t.b) r = t.b;
        else if (e === 1 && t.e) r = t.e;
        else {
          for (; n;)
            ((r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r),
              (n = n._next));
          r += t.c;
        }
        t.set(t.t, t.p, r, t);
      }),
      (ma = function (e, t) {
        for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
      }),
      (ha = function (e, t, n, r) {
        for (var i, a = this._pt; a;) ((i = a._next), a.p === r && a.modifier(e, t, n), (a = i));
      }),
      (ga = function (e) {
        for (var t, n, r = this._pt; r;)
          ((n = r._next),
            (r.p === e && !r.op) || r.op === e ? wr(this, r, `_pt`) : r.dep || (t = 1),
            (r = n));
        return !t;
      }),
      (_a = function (e, t, n, r) {
        r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
      }),
      (va = function (e) {
        for (var t, n, r, i, a = e._pt; a;) {
          for (t = a._next, n = r; n && n.pr > a.pr;) n = n._next;
          ((a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
            (a._next = n) ? (n._prev = a) : (i = a),
            (a = t));
        }
        e._pt = r;
      }),
      (ya = (function () {
        function e(e, t, n, r, i, a, o, s, c) {
          ((this.t = t),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = a || da),
            (this.d = o || this),
            (this.set = s || oa),
            (this.pr = c || 0),
            (this._next = e),
            e && (e._prev = this));
        }
        var t = e.prototype;
        return (
          (t.modifier = function (e, t, n) {
            ((this.mSet = this.mSet || this.set),
              (this.set = _a),
              (this.m = e),
              (this.mt = n),
              (this.tween = t));
          }),
          e
        );
      })()),
      sr(
        rr +
          `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,
        function (e) {
          return (Xn[e] = 1);
        }
      ),
      (Bn.TweenMax = Bn.TweenLite = aa),
      (Bn.TimelineLite = Bn.TimelineMax = Gi),
      (K = new Gi({
        sortChildren: !1,
        defaults: gn,
        autoRemoveChildren: !0,
        id: `root`,
        smoothChildTiming: !0,
      })),
      (hn.stringFilter = Oi),
      (ba = []),
      (xa = {}),
      (Sa = []),
      (Ca = 0),
      (wa = function (e) {
        return (xa[e] || Sa).map(function (e) {
          return e();
        });
      }),
      (Ta = function () {
        var e = Date.now(),
          t = [];
        e - Ca > 2 &&
          (wa(`matchMediaInit`),
          ba.forEach(function (e) {
            var n,
              r,
              i,
              a,
              o = e.queries,
              s = e.conditions;
            for (r in o)
              ((n = cn.matchMedia(o[r]).matches),
                n && (i = 1),
                n !== s[r] && ((s[r] = n), (a = 1)));
            a && (e.revert(), i && t.push(e));
          }),
          wa(`matchMediaRevert`),
          t.forEach(function (e) {
            return e.onMatch(e);
          }),
          (Ca = e),
          wa(`matchMedia`));
      }),
      (Ea = (function () {
        function e(e, t) {
          ((this.selector = t && ni(t)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            e && this.add(e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            J(e) && ((n = t), (t = e), (e = J));
            var r = this,
              i = function () {
                var e,
                  i = sn,
                  a = r.selector;
                return (
                  i && i !== r && i.data.push(r),
                  n && (r.selector = ni(n)),
                  (sn = r),
                  (e = t.apply(r, arguments)),
                  J(e) && r._r.push(e),
                  (sn = i),
                  (r.selector = a),
                  (r.isReverted = !1),
                  e
                );
              };
            return ((r.last = i), e === J ? i(r) : e ? (r[e] = i) : i);
          }),
          (t.ignore = function (e) {
            var t = sn;
            ((sn = null), e(this), (sn = t));
          }),
          (t.getTweens = function () {
            var t = [];
            return (
              this.data.forEach(function (n) {
                return n instanceof e
                  ? t.push.apply(t, n.getTweens())
                  : n instanceof aa && !(n.parent && n.parent.data === `nested`) && t.push(n);
              }),
              t
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (e, t) {
            var n = this;
            if (e) {
              var r = this.getTweens();
              (this.data.forEach(function (e) {
                e.data === `isFlip` &&
                  (e.revert(),
                  e.getChildren(!0, !0, !1).forEach(function (e) {
                    return r.splice(r.indexOf(e), 1);
                  }));
              }),
                r
                  .map(function (e) {
                    return { g: e.globalTime(0), t: e };
                  })
                  .sort(function (e, t) {
                    return t.g - e.g || -1;
                  })
                  .forEach(function (t) {
                    return t.t.revert(e);
                  }),
                this.data.forEach(function (t) {
                  return !(t instanceof Wi) && t.revert && t.revert(e);
                }),
                this._r.forEach(function (t) {
                  return t(e, n);
                }),
                (this.isReverted = !0));
            } else
              this.data.forEach(function (e) {
                return e.kill && e.kill();
              });
            if ((this.clear(), t)) {
              var i = ba.indexOf(this);
              ~i && ba.splice(i, 1);
            }
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          e
        );
      })()),
      (Da = (function () {
        function e(e) {
          ((this.contexts = []), (this.scope = e));
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            Dn(e) || (e = { matches: e });
            var r,
              i,
              a,
              o = new Ea(0, n || this.scope),
              s = (o.conditions = {});
            for (i in (this.contexts.push(o), (t = o.add(`onMatch`, t)), (o.queries = e), e))
              i === `all`
                ? (a = 1)
                : ((r = cn.matchMedia(e[i])),
                  r &&
                    (ba.indexOf(o) < 0 && ba.push(o),
                    (s[i] = r.matches) && (a = 1),
                    r.addListener ? r.addListener(Ta) : r.addEventListener(`change`, Ta)));
            return (a && t(o), this);
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          (t.kill = function (e) {
            this.contexts.forEach(function (t) {
              return t.kill(e, !0);
            });
          }),
          e
        );
      })()),
      (Oa = {
        registerPlugin: function () {
          [...arguments].forEach(function (e) {
            return bi(e);
          });
        },
        timeline: function (e) {
          return new Gi(e);
        },
        getTweensOf: function (e, t) {
          return K.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, r) {
          wn(e) && (e = ti(e)[0]);
          var i = ar(e || {}).get,
            a = n ? hr : mr;
          return (
            n === `native` && (n = ``),
            e &&
              (t
                ? a((($n[t] && $n[t].get) || i)(e, t, n, r))
                : function (t, n, r) {
                    return a((($n[t] && $n[t].get) || i)(e, t, n, r));
                  })
          );
        },
        quickSetter: function (e, t, n) {
          if (((e = ti(e)), e.length > 1)) {
            var r = e.map(function (e) {
                return Ma.quickSetter(e, t, n);
              }),
              i = r.length;
            return function (e) {
              for (var t = i; t--;) r[t](e);
            };
          }
          e = e[0] || {};
          var a = $n[t],
            o = ar(e),
            s = (o.harness && (o.harness.aliases || {})[t]) || t,
            c = a
              ? function (t) {
                  var r = new a();
                  ((pn._pt = 0),
                    r.init(e, n ? t + n : t, pn, 0, [e]),
                    r.render(1, r),
                    pn._pt && ma(1, pn));
                }
              : o.set(e, s);
          return a
            ? c
            : function (t) {
                return c(e, s, n ? t + n : t, o, 1);
              };
        },
        quickTo: function (e, t, n) {
          var r,
            i = Ma.to(e, vr(((r = {}), (r[t] = `+=0.1`), (r.paused = !0), r), n || {})),
            a = function (e, n, r) {
              return i.resetTo(t, e, n, r);
            };
          return ((a.tween = i), a);
        },
        isTweening: function (e) {
          return K.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return (e && e.ease && (e.ease = Ri(e.ease, gn.ease)), yr(gn, e || {}));
        },
        config: function (e) {
          return yr(hn, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            r = e.plugins,
            i = e.defaults,
            a = e.extendTimeline;
          ((r || ``).split(`,`).forEach(function (e) {
            return e && !$n[e] && !Bn[e] && Wn(t + ` effect requires ` + e + ` plugin.`);
          }),
            (er[t] = function (e, t, r) {
              return n(ti(e), gr(t || {}, i), r);
            }),
            a &&
              (Gi.prototype[t] = function (e, n, r) {
                return this.add(er[t](e, Dn(n) ? n : (r = n) && {}, this), r);
              }));
        },
        registerEase: function (e, t) {
          X[e] = Ri(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? Ri(e, t) : X;
        },
        getById: function (e) {
          return K.getById(e);
        },
        exportRoot: function (e, t) {
          e === void 0 && (e = {});
          var n,
            r,
            i = new Gi(e);
          for (
            i.smoothChildTiming = On(e.smoothChildTiming),
              K.remove(i),
              i._dp = 0,
              i._time = i._tTime = K._time,
              n = K._first;
            n;
          )
            ((r = n._next),
              (!t && !n._dur && n instanceof aa && n.vars.onComplete === n._targets[0]) ||
                Ir(i, n, n._start - n._delay),
              (n = r));
          return (Ir(K, i, 0), i);
        },
        context: function (e, t) {
          return e ? new Ea(e, t) : sn;
        },
        matchMedia: function (e) {
          return new Da(e);
        },
        matchMediaRefresh: function () {
          return (
            ba.forEach(function (e) {
              var t,
                n,
                r = e.conditions;
              for (n in r) r[n] && ((r[n] = !1), (t = 1));
              t && e.revert();
            }) || Ta()
          );
        },
        addEventListener: function (e, t) {
          var n = xa[e] || (xa[e] = []);
          ~n.indexOf(t) || n.push(t);
        },
        removeEventListener: function (e, t) {
          var n = xa[e],
            r = n && n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        },
        utils: {
          wrap: fi,
          wrapYoyo: pi,
          distribute: ii,
          random: si,
          snap: oi,
          normalize: ui,
          getUnit: Xr,
          clamp: Zr,
          splitColor: Ci,
          toArray: ti,
          selector: ni,
          mapRange: hi,
          pipe: ci,
          unitize: li,
          interpolate: gi,
          shuffle: ri,
        },
        install: Hn,
        effects: er,
        ticker: ki,
        updateRoot: Gi.updateRoot,
        plugins: $n,
        globalTimeline: K,
        core: {
          PropTween: ya,
          globals: Gn,
          Tween: aa,
          Timeline: Gi,
          Animation: Wi,
          getCache: ar,
          _removeLinkedListItem: wr,
          reverting: function () {
            return on;
          },
          context: function (e) {
            return (e && sn && (sn.data.push(e), (e._ctx = sn)), sn);
          },
          suppressOverwrites: function (e) {
            return (an = e);
          },
        },
      }),
      sr(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
        return (Oa[e] = aa[e]);
      }),
      ki.add(Gi.updateRoot),
      (pn = Oa.to({}, { duration: 0 })),
      (ka = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
        return n;
      }),
      (Aa = function (e, t) {
        var n,
          r,
          i,
          a = e._targets;
        for (n in t)
          for (r = a.length; r--;)
            ((i = e._ptLookup[r][n]),
              (i &&= i.d) &&
                (i._pt && (i = ka(i, n)), i && i.modifier && i.modifier(t[n], e, a[r], n)));
      }),
      (ja = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, n, r) {
            r._onInit = function (e) {
              var r, i;
              if (
                (wn(n) &&
                  ((r = {}),
                  sr(n, function (e) {
                    return (r[e] = 1);
                  }),
                  (n = r)),
                t)
              ) {
                for (i in ((r = {}), n)) r[i] = t(n[i]);
                n = r;
              }
              Aa(e, n);
            };
          },
        };
      }),
      (Ma =
        Oa.registerPlugin(
          {
            name: `attr`,
            init: function (e, t, n, r, i) {
              var a, o, s;
              for (a in ((this.tween = n), t))
                ((s = e.getAttribute(a) || ``),
                  (o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a)),
                  (o.op = a),
                  (o.b = s),
                  this._props.push(a));
            },
            render: function (e, t) {
              for (var n = t._pt; n;) (on ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
            },
          },
          {
            name: `endArray`,
            init: function (e, t) {
              for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
            },
          },
          ja(`roundProps`, ai),
          ja(`modifiers`),
          ja(`snap`, oi)
        ) || Oa),
      (aa.version = Gi.version = Ma.version = `3.11.3`),
      (dn = 1),
      kn() && Ai(),
      X.Power0,
      X.Power1,
      X.Power2,
      X.Power3,
      X.Power4,
      X.Linear,
      X.Quad,
      X.Cubic,
      X.Quart,
      X.Quint,
      X.Strong,
      X.Elastic,
      X.Back,
      X.SteppedEase,
      X.Bounce,
      X.Sine,
      X.Expo,
      X.Circ);
  }),
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
  Z,
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
  So,
  Co,
  wo,
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
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = e(() => {
    (c(),
      Na(),
      (Ha = function () {
        return n !== void 0;
      }),
      (Ua = {}),
      (Wa = 180 / Math.PI),
      (Ga = Math.PI / 180),
      (Ka = Math.atan2),
      (qa = 1e8),
      (Ja = /([A-Z])/g),
      (Ya = /(left|right|width|margin|padding|x)/i),
      (Xa = /[\s,\(]\S/),
      (Za = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` }),
      (Qa = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
      }),
      ($a = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
      }),
      (eo = function (e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
      }),
      (to = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      }),
      (no = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      }),
      (ro = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
      }),
      (io = function (e, t, n) {
        return (e.style[t] = n);
      }),
      (ao = function (e, t, n) {
        return e.style.setProperty(t, n);
      }),
      (oo = function (e, t, n) {
        return (e._gsap[t] = n);
      }),
      (so = function (e, t, n) {
        return (e._gsap.scaleX = e._gsap.scaleY = n);
      }),
      (co = function (e, t, n, r, i) {
        var a = e._gsap;
        ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
      }),
      (lo = function (e, t, n, r, i) {
        var a = e._gsap;
        ((a[t] = n), a.renderTransform(i, a));
      }),
      (Z = `transform`),
      (uo = Z + `Origin`),
      (fo = function (e, t) {
        var n = this,
          r = this.target,
          i = r.style;
        if (e in Ua) {
          if (
            ((this.tfm = this.tfm || {}),
            e !== `transform` &&
              ((e = Za[e] || e),
              ~e.indexOf(`,`)
                ? e.split(`,`).forEach(function (e) {
                    return (n.tfm[e] = Ao(r, e));
                  })
                : (this.tfm[e] = r._gsap.x ? r._gsap[e] : Ao(r, e))),
            this.props.indexOf(Z) >= 0)
          )
            return;
          (r._gsap.svg &&
            ((this.svgo = r.getAttribute(`data-svg-origin`)), this.props.push(uo, t, ``)),
            (e = Z));
        }
        (i || t) && this.props.push(e, t, i[e]);
      }),
      (po = function (e) {
        e.translate &&
          (e.removeProperty(`translate`), e.removeProperty(`scale`), e.removeProperty(`rotate`));
      }),
      (mo = function () {
        var e,
          t,
          n = this.props,
          r = this.target,
          i = r.style,
          a = r._gsap;
        for (e = 0; e < n.length; e += 3)
          n[e + 1]
            ? (r[n[e]] = n[e + 2])
            : n[e + 2]
              ? (i[n[e]] = n[e + 2])
              : i.removeProperty(n[e].replace(Ja, `-$1`).toLowerCase());
        if (this.tfm) {
          for (t in this.tfm) a[t] = this.tfm[t];
          (a.svg && (a.renderTransform(), r.setAttribute(`data-svg-origin`, this.svgo || ``)),
            (e = Ba()),
            e && !e.isStart && !i[Z] && (po(i), (a.uncache = 1)));
        }
      }),
      (ho = function (e, t) {
        var n = { target: e, props: [], revert: mo, save: fo };
        return (
          t &&
            t.split(`,`).forEach(function (e) {
              return n.save(e);
            }),
          n
        );
      }),
      (go = function (e, t) {
        var n = Fa.createElementNS
          ? Fa.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e)
          : Fa.createElement(e);
        return n.style ? n : Fa.createElement(e);
      }),
      (_o = function e(t, n, r) {
        var i = getComputedStyle(t);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(Ja, `-$1`).toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && e(t, yo(n) || n, 1)) ||
          ``
        );
      }),
      (vo = `O,Moz,ms,Ms,Webkit`.split(`,`)),
      (yo = function (e, t, n) {
        var r = (t || Ra).style,
          i = 5;
        if (e in r && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(vo[i] + e in r););
        return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? vo[i] : ``) + e;
      }),
      (bo = function () {
        Ha() &&
          n.document &&
          ((Pa = n),
          (Fa = Pa.document),
          (Ia = Fa.documentElement),
          (Ra = go(`div`) || { style: {} }),
          go(`div`),
          (Z = yo(Z)),
          (uo = Z + `Origin`),
          (Ra.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
          (Va = !!yo(`perspective`)),
          (Ba = Ma.core.reverting),
          (La = 1));
      }),
      (xo = function e(t) {
        var n,
          r = go(
            `svg`,
            (this.ownerSVGElement && this.ownerSVGElement.getAttribute(`xmlns`)) ||
              `http://www.w3.org/2000/svg`
          ),
          i = this.parentNode,
          a = this.nextSibling,
          o = this.style.cssText;
        if ((Ia.appendChild(r), r.appendChild(this), (this.style.display = `block`), t))
          try {
            ((n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e));
          } catch {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
          Ia.removeChild(r),
          (this.style.cssText = o),
          n
        );
      }),
      (So = function (e, t) {
        for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      }),
      (Co = function (e) {
        var t;
        try {
          t = e.getBBox();
        } catch {
          t = xo.call(e, !0);
        }
        return (
          (t && (t.width || t.height)) || e.getBBox === xo || (t = xo.call(e, !0)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +So(e, [`x`, `cx`, `x1`]) || 0,
                y: +So(e, [`y`, `cy`, `y1`]) || 0,
                width: 0,
                height: 0,
              }
        );
      }),
      (wo = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Co(e));
      }),
      (To = function (e, t) {
        if (t) {
          var n = e.style;
          (t in Ua && t !== uo && (t = Z),
            n.removeProperty
              ? ((t.substr(0, 2) !== `ms` && t.substr(0, 6) !== `webkit`) || (t = `-` + t),
                n.removeProperty(t.replace(Ja, `-$1`).toLowerCase()))
              : n.removeAttribute(t));
        }
      }),
      (Eo = function (e, t, n, r, i, a) {
        var o = new ya(e._pt, t, n, 0, 1, a ? ro : no);
        return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
      }),
      (Do = { deg: 1, rad: 1, turn: 1 }),
      (Oo = { grid: 1, flex: 1 }),
      (ko = function e(t, n, r, i) {
        var a,
          o,
          s,
          c,
          l = parseFloat(r) || 0,
          u = (r + ``).trim().substr((l + ``).length) || `px`,
          d = Ra.style,
          f = Ya.test(n),
          p = t.tagName.toLowerCase() === `svg`,
          m = (p ? `client` : `offset`) + (f ? `Width` : `Height`),
          h = 100,
          g = i === `px`,
          _ = i === `%`;
        return i === u || !l || Do[i] || Do[u]
          ? l
          : (u !== `px` && !g && (l = e(t, n, r, `px`)),
            (c = t.getCTM && wo(t)),
            (_ || u === `%`) && (Ua[n] || ~n.indexOf(`adius`))
              ? ((a = c ? t.getBBox()[f ? `width` : `height`] : t[m]),
                cr(_ ? (l / a) * h : (l / 100) * a))
              : ((d[f ? `width` : `height`] = h + (g ? u : i)),
                (o = ~n.indexOf(`adius`) || (i === `em` && t.appendChild && !p) ? t : t.parentNode),
                c && (o = (t.ownerSVGElement || {}).parentNode),
                (o && o !== Fa && o.appendChild) || (o = Fa.body),
                (s = o._gsap),
                s && _ && s.width && f && s.time === ki.time && !s.uncache
                  ? cr((l / s.width) * h)
                  : ((_ || u === `%`) && !Oo[_o(o, `display`)] && (d.position = _o(t, `position`)),
                    o === t && (d.position = `static`),
                    o.appendChild(Ra),
                    (a = Ra[m]),
                    o.removeChild(Ra),
                    (d.position = `absolute`),
                    f && _ && ((s = ar(o)), (s.time = ki.time), (s.width = o[m])),
                    cr(g ? (a * l) / h : a && l ? (h / a) * l : 0))));
      }),
      (Ao = function (e, t, n, r) {
        var i;
        return (
          La || bo(),
          t in Za && t !== `transform` && ((t = Za[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
          Ua[t] && t !== `transform`
            ? ((i = Ho(e, r)),
              (i =
                t === `transformOrigin`
                  ? i.svg
                    ? i.origin
                    : Uo(_o(e, uo)) + ` ` + i.zOrigin + `px`
                  : i[t]))
            : ((i = e.style[t]),
              (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
                (i = (Fo[t] && Fo[t](e, t, n)) || _o(e, t) || or(e, t) || +(t === `opacity`))),
          n && !~(i + ``).trim().indexOf(` `) ? ko(e, t, i, n) + n : i
        );
      }),
      (jo = function (e, t, n, r) {
        if (!n || n === `none`) {
          var i = yo(t, e, 1),
            a = i && _o(e, i, 1);
          a && a !== n ? ((t = i), (n = a)) : t === `borderColor` && (n = _o(e, `borderTopColor`));
        }
        var o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v = new ya(this._pt, e.style, t, 0, 1, pa),
          y = 0,
          b = 0;
        if (
          ((v.b = n),
          (v.e = r),
          (n += ``),
          (r += ``),
          r === `auto` && ((e.style[t] = r), (r = _o(e, t) || r), (e.style[t] = n)),
          (o = [n, r]),
          Oi(o),
          (n = o[0]),
          (r = o[1]),
          (c = n.match(Fn) || []),
          (_ = r.match(Fn) || []),
          _.length)
        ) {
          for (; (s = Fn.exec(r));)
            ((f = s[0]),
              (m = r.substring(y, s.index)),
              u
                ? (u = (u + 1) % 5)
                : (m.substr(-5) !== `rgba(` && m.substr(-5) !== `hsla(`) || (u = 1),
              f !== (d = c[b++] || ``) &&
                ((l = parseFloat(d) || 0),
                (g = d.substr((l + ``).length)),
                f.charAt(1) === `=` && (f = ur(l, f) + g),
                (p = parseFloat(f)),
                (h = f.substr((p + ``).length)),
                (y = Fn.lastIndex - h.length),
                h || ((h = h || hn.units[t] || g), y === r.length && ((r += h), (v.e += h))),
                g !== h && (l = ko(e, t, d, h) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: m || b === 1 ? m : `,`,
                  s: l,
                  c: p - l,
                  m: (u && u < 4) || t === `zIndex` ? Math.round : 0,
                })));
          v.c = y < r.length ? r.substring(y, r.length) : ``;
        } else v.r = t === `display` && r === `none` ? ro : no;
        return (Ln.test(r) && (v.e = 0), (this._pt = v), v);
      }),
      (Mo = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` }),
      (No = function (e) {
        var t = e.split(` `),
          n = t[0],
          r = t[1] || `50%`;
        return (
          (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
            ((e = n), (n = r), (r = e)),
          (t[0] = Mo[n] || n),
          (t[1] = Mo[r] || r),
          t.join(` `)
        );
      }),
      (Po = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n,
            r,
            i,
            a = t.t,
            o = a.style,
            s = t.u,
            c = a._gsap;
          if (s === `all` || !0 === s) ((o.cssText = ``), (r = 1));
          else
            for (s = s.split(`,`), i = s.length; --i > -1;)
              ((n = s[i]), Ua[n] && ((r = 1), (n = n === `transformOrigin` ? uo : Z)), To(a, n));
          r &&
            (To(a, Z),
            c && (c.svg && a.removeAttribute(`transform`), Ho(a, 1), (c.uncache = 1), po(o)));
        }
      }),
      (Fo = {
        clearProps: function (e, t, n, r, i) {
          if (i.data !== `isFromStart`) {
            var a = (e._pt = new ya(e._pt, t, n, 0, 0, Po));
            return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
          }
        },
      }),
      (Io = [1, 0, 0, 1, 0, 0]),
      (Lo = {}),
      (Ro = function (e) {
        return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
      }),
      (zo = function (e) {
        var t = _o(e, Z);
        return Ro(t) ? Io : t.substr(7).match(Pn).map(cr);
      }),
      (Bo = function (e, t) {
        var n,
          r,
          i,
          a,
          o = e._gsap || ar(e),
          s = e.style,
          c = zo(e);
        return o.svg && e.getAttribute(`transform`)
          ? ((i = e.transform.baseVal.consolidate().matrix),
            (c = [i.a, i.b, i.c, i.d, i.e, i.f]),
            c.join(`,`) === `1,0,0,1,0,0` ? Io : c)
          : (c === Io &&
              !e.offsetParent &&
              e !== Ia &&
              !o.svg &&
              ((i = s.display),
              (s.display = `block`),
              (n = e.parentNode),
              (!n || !e.offsetParent) && ((a = 1), (r = e.nextElementSibling), Ia.appendChild(e)),
              (c = zo(e)),
              i ? (s.display = i) : To(e, `display`),
              a && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Ia.removeChild(e))),
            t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
      }),
      (Vo = function (e, t, n, r, i, a) {
        var o,
          s,
          c,
          l,
          u = e._gsap,
          d = i || Bo(e, !0),
          f = u.xOrigin || 0,
          p = u.yOrigin || 0,
          m = u.xOffset || 0,
          h = u.yOffset || 0,
          g = d[0],
          _ = d[1],
          v = d[2],
          y = d[3],
          b = d[4],
          x = d[5],
          S = t.split(` `),
          C = parseFloat(S[0]) || 0,
          w = parseFloat(S[1]) || 0;
        (n
          ? d !== Io &&
            (s = g * y - _ * v) &&
            ((c = (y / s) * C + w * (-v / s) + (v * x - y * b) / s),
            (l = C * (-_ / s) + (g / s) * w - (g * x - _ * b) / s),
            (C = c),
            (w = l))
          : ((o = Co(e)),
            (C = o.x + (~S[0].indexOf(`%`) ? (C / 100) * o.width : C)),
            (w = o.y + (~(S[1] || S[0]).indexOf(`%`) ? (w / 100) * o.height : w))),
          r || (!1 !== r && u.smooth)
            ? ((b = C - f),
              (x = w - p),
              (u.xOffset = m + (b * g + x * v) - b),
              (u.yOffset = h + (b * _ + x * y) - x))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = C),
          (u.yOrigin = w),
          (u.smooth = !!r),
          (u.origin = t),
          (u.originIsAbsolute = !!n),
          (e.style[uo] = `0px 0px`),
          a &&
            (Eo(a, u, `xOrigin`, f, C),
            Eo(a, u, `yOrigin`, p, w),
            Eo(a, u, `xOffset`, m, u.xOffset),
            Eo(a, u, `yOffset`, h, u.yOffset)),
          e.setAttribute(`data-svg-origin`, C + ` ` + w));
      }),
      (Ho = function (e, t) {
        var n = e._gsap || new Ui(e);
        if (`x` in n && !t && !n.uncache) return n;
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w,
          T,
          E,
          D,
          O,
          k,
          A,
          j,
          M,
          N,
          P,
          F = e.style,
          I = n.scaleX < 0,
          ee = `px`,
          L = `deg`,
          te = getComputedStyle(e),
          R = _o(e, uo) || `0`;
        return (
          (r = i = a = c = l = u = d = f = p = 0),
          (o = s = 1),
          (n.svg = !!(e.getCTM && wo(e))),
          te.translate &&
            ((te.translate === `none` && te.scale === `none` && te.rotate === `none`) ||
              (F[Z] =
                (te.translate === `none`
                  ? ``
                  : `translate3d(` +
                    (te.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                    `) `) +
                (te.rotate === `none` ? `` : `rotate(` + te.rotate + `) `) +
                (te.scale === `none` ? `` : `scale(` + te.scale.split(` `).join(`,`) + `) `) +
                (te[Z] === `none` ? `` : te[Z])),
            (F.scale = F.rotate = F.translate = `none`)),
          (g = Bo(e, n.svg)),
          n.svg &&
            (n.uncache
              ? ((D = e.getBBox()),
                (R = n.xOrigin - D.x + `px ` + (n.yOrigin - D.y) + `px`),
                (E = ``))
              : (E = !t && e.getAttribute(`data-svg-origin`)),
            Vo(e, E || R, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
          (m = n.xOrigin || 0),
          (h = n.yOrigin || 0),
          g !== Io &&
            ((b = g[0]),
            (x = g[1]),
            (S = g[2]),
            (C = g[3]),
            (r = w = g[4]),
            (i = T = g[5]),
            g.length === 6
              ? ((o = Math.sqrt(b * b + x * x)),
                (s = Math.sqrt(C * C + S * S)),
                (c = b || x ? Ka(x, b) * Wa : 0),
                (d = S || C ? Ka(S, C) * Wa + c : 0),
                d && (s *= Math.abs(Math.cos(d * Ga))),
                n.svg && ((r -= m - (m * b + h * S)), (i -= h - (m * x + h * C))))
              : ((P = g[6]),
                (M = g[7]),
                (k = g[8]),
                (A = g[9]),
                (j = g[10]),
                (N = g[11]),
                (r = g[12]),
                (i = g[13]),
                (a = g[14]),
                (_ = Ka(P, j)),
                (l = _ * Wa),
                _ &&
                  ((v = Math.cos(-_)),
                  (y = Math.sin(-_)),
                  (E = w * v + k * y),
                  (D = T * v + A * y),
                  (O = P * v + j * y),
                  (k = w * -y + k * v),
                  (A = T * -y + A * v),
                  (j = P * -y + j * v),
                  (N = M * -y + N * v),
                  (w = E),
                  (T = D),
                  (P = O)),
                (_ = Ka(-S, j)),
                (u = _ * Wa),
                _ &&
                  ((v = Math.cos(-_)),
                  (y = Math.sin(-_)),
                  (E = b * v - k * y),
                  (D = x * v - A * y),
                  (O = S * v - j * y),
                  (N = C * y + N * v),
                  (b = E),
                  (x = D),
                  (S = O)),
                (_ = Ka(x, b)),
                (c = _ * Wa),
                _ &&
                  ((v = Math.cos(_)),
                  (y = Math.sin(_)),
                  (E = b * v + x * y),
                  (D = w * v + T * y),
                  (x = x * v - b * y),
                  (T = T * v - w * y),
                  (b = E),
                  (w = D)),
                l && Math.abs(l) + Math.abs(c) > 359.9 && ((l = c = 0), (u = 180 - u)),
                (o = cr(Math.sqrt(b * b + x * x + S * S))),
                (s = cr(Math.sqrt(T * T + P * P))),
                (_ = Ka(w, T)),
                (d = Math.abs(_) > 2e-4 ? _ * Wa : 0),
                (p = N ? 1 / (N < 0 ? -N : N) : 0)),
            n.svg &&
              ((E = e.getAttribute(`transform`)),
              (n.forceCSS = e.setAttribute(`transform`, ``) || !Ro(_o(e, Z))),
              E && e.setAttribute(`transform`, E))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (I
              ? ((o *= -1), (d += c <= 0 ? 180 : -180), (c += c <= 0 ? 180 : -180))
              : ((s *= -1), (d += d <= 0 ? 180 : -180))),
          (t ||= n.uncache),
          (n.x =
            r -
            ((n.xPercent =
              r &&
              ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetWidth * n.xPercent) / 100
              : 0) +
            ee),
          (n.y =
            i -
            ((n.yPercent =
              i &&
              ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetHeight * n.yPercent) / 100
              : 0) +
            ee),
          (n.z = a + ee),
          (n.scaleX = cr(o)),
          (n.scaleY = cr(s)),
          (n.rotation = cr(c) + L),
          (n.rotationX = cr(l) + L),
          (n.rotationY = cr(u) + L),
          (n.skewX = d + L),
          (n.skewY = f + L),
          (n.transformPerspective = p + ee),
          (n.zOrigin = parseFloat(R.split(` `)[2]) || 0) && (F[uo] = Uo(R)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = hn.force3D),
          (n.renderTransform = n.svg ? Xo : Va ? Yo : Go),
          (n.uncache = 0),
          n
        );
      }),
      (Uo = function (e) {
        return (e = e.split(` `))[0] + ` ` + e[1];
      }),
      (Wo = function (e, t, n) {
        var r = Xr(t);
        return cr(parseFloat(t) + parseFloat(ko(e, `x`, n + `px`, r))) + r;
      }),
      (Go = function (e, t) {
        ((t.z = `0px`), (t.rotationY = t.rotationX = `0deg`), (t.force3D = 0), Yo(e, t));
      }),
      (Ko = `0deg`),
      (qo = `0px`),
      (Jo = `) `),
      (Yo = function (e, t) {
        var n = t || this,
          r = n.xPercent,
          i = n.yPercent,
          a = n.x,
          o = n.y,
          s = n.z,
          c = n.rotation,
          l = n.rotationY,
          u = n.rotationX,
          d = n.skewX,
          f = n.skewY,
          p = n.scaleX,
          m = n.scaleY,
          h = n.transformPerspective,
          g = n.force3D,
          _ = n.target,
          v = n.zOrigin,
          y = ``,
          b = (g === `auto` && e && e !== 1) || !0 === g;
        if (v && (u !== Ko || l !== Ko)) {
          var x,
            S = parseFloat(l) * Ga,
            C = Math.sin(S),
            w = Math.cos(S);
          ((S = parseFloat(u) * Ga),
            (x = Math.cos(S)),
            (a = Wo(_, a, C * x * -v)),
            (o = Wo(_, o, -Math.sin(S) * -v)),
            (s = Wo(_, s, w * x * -v + v)));
        }
        (h !== qo && (y += `perspective(` + h + Jo),
          (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
          (b || a !== qo || o !== qo || s !== qo) &&
            (y +=
              s !== qo || b
                ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
                : `translate(` + a + `, ` + o + Jo),
          c !== Ko && (y += `rotate(` + c + Jo),
          l !== Ko && (y += `rotateY(` + l + Jo),
          u !== Ko && (y += `rotateX(` + u + Jo),
          (d === Ko && f === Ko) || (y += `skew(` + d + `, ` + f + Jo),
          (p === 1 && m === 1) || (y += `scale(` + p + `, ` + m + Jo),
          (_.style[Z] = y || `translate(0, 0)`));
      }),
      (Xo = function (e, t) {
        var n,
          r,
          i,
          a,
          o,
          s = t || this,
          c = s.xPercent,
          l = s.yPercent,
          u = s.x,
          d = s.y,
          f = s.rotation,
          p = s.skewX,
          m = s.skewY,
          h = s.scaleX,
          g = s.scaleY,
          _ = s.target,
          v = s.xOrigin,
          y = s.yOrigin,
          b = s.xOffset,
          x = s.yOffset,
          S = s.forceCSS,
          C = parseFloat(u),
          w = parseFloat(d);
        ((f = parseFloat(f)),
          (p = parseFloat(p)),
          (m = parseFloat(m)),
          m && ((m = parseFloat(m)), (p += m), (f += m)),
          f || p
            ? ((f *= Ga),
              (p *= Ga),
              (n = Math.cos(f) * h),
              (r = Math.sin(f) * h),
              (i = Math.sin(f - p) * -g),
              (a = Math.cos(f - p) * g),
              p &&
                ((m *= Ga),
                (o = Math.tan(p - m)),
                (o = Math.sqrt(1 + o * o)),
                (i *= o),
                (a *= o),
                m && ((o = Math.tan(m)), (o = Math.sqrt(1 + o * o)), (n *= o), (r *= o))),
              (n = cr(n)),
              (r = cr(r)),
              (i = cr(i)),
              (a = cr(a)))
            : ((n = h), (a = g), (r = i = 0)),
          ((C && !~(u + ``).indexOf(`px`)) || (w && !~(d + ``).indexOf(`px`))) &&
            ((C = ko(_, `x`, u, `px`)), (w = ko(_, `y`, d, `px`))),
          (v || y || b || x) &&
            ((C = cr(C + v - (v * n + y * i) + b)), (w = cr(w + y - (v * r + y * a) + x))),
          (c || l) &&
            ((o = _.getBBox()),
            (C = cr(C + (c / 100) * o.width)),
            (w = cr(w + (l / 100) * o.height))),
          (o = `matrix(` + n + `,` + r + `,` + i + `,` + a + `,` + C + `,` + w + `)`),
          _.setAttribute(`transform`, o),
          S && (_.style[Z] = o));
      }),
      (Zo = function (e, t, n, r, i) {
        var a,
          o,
          s = 360,
          c = wn(i),
          l = parseFloat(i) * (c && ~i.indexOf(`rad`) ? Wa : 1) - r,
          u = r + l + `deg`;
        return (
          c &&
            ((a = i.split(`_`)[1]),
            a === `short` && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
            a === `cw` && l < 0
              ? (l = ((l + s * qa) % s) - ~~(l / s) * s)
              : a === `ccw` && l > 0 && (l = ((l - s * qa) % s) - ~~(l / s) * s)),
          (e._pt = o = new ya(e._pt, t, n, r, l, $a)),
          (o.e = u),
          (o.u = `deg`),
          e._props.push(n),
          o
        );
      }),
      (Qo = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }),
      ($o = function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d = Qo({}, n._gsap),
          f = `perspective,force3D,transformOrigin,svgOrigin`,
          p = n.style;
        for (i in (d.svg
          ? ((a = n.getAttribute(`transform`)),
            n.setAttribute(`transform`, ``),
            (p[Z] = t),
            (r = Ho(n, 1)),
            To(n, Z),
            n.setAttribute(`transform`, a))
          : ((a = getComputedStyle(n)[Z]), (p[Z] = t), (r = Ho(n, 1)), (p[Z] = a)),
        Ua))
          ((a = d[i]),
            (o = r[i]),
            a !== o &&
              f.indexOf(i) < 0 &&
              ((l = Xr(a)),
              (u = Xr(o)),
              (s = l === u ? parseFloat(a) : ko(n, i, a, u)),
              (c = parseFloat(o)),
              (e._pt = new ya(e._pt, r, i, s, c - s, Qa)),
              (e._pt.u = u || 0),
              e._props.push(i)));
        Qo(r, d);
      }),
      sr(`padding,margin,Width,Radius`, function (e, t) {
        var n = `Top`,
          r = `Right`,
          i = `Bottom`,
          a = `Left`,
          o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
            return t < 2 ? e + n : `border` + n + e;
          });
        Fo[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
          var a, s;
          if (arguments.length < 4)
            return (
              (a = o.map(function (t) {
                return Ao(e, t, n);
              })),
              (s = a.join(` `)),
              s.split(a[0]).length === 5 ? a[0] : s
            );
          ((a = (r + ``).split(` `)),
            (s = {}),
            o.forEach(function (e, t) {
              return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, i));
        };
      }),
      (es = {
        name: `css`,
        register: bo,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, i) {
          var a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x = this._props,
            S = e.style,
            C = n.vars.startAt;
          for (d in (La || bo(),
          (this.styles = this.styles || ho(e)),
          (b = this.styles.props),
          (this.tween = n),
          t))
            if (d !== `autoRound` && ((o = t[d]), !$n[d] || !Zi(d, t, n, r, e, i))) {
              if (
                ((l = typeof o),
                (u = Fo[d]),
                l === `function` && ((o = o.call(n, r, e, i)), (l = typeof o)),
                l === `string` && ~o.indexOf(`random(`) && (o = mi(o)),
                u)
              )
                u(this, e, d, o, n) && (y = 1);
              else if (d.substr(0, 2) === `--`)
                ((a = (getComputedStyle(e).getPropertyValue(d) + ``).trim()),
                  (o += ``),
                  (Ei.lastIndex = 0),
                  Ei.test(a) || ((f = Xr(a)), (p = Xr(o))),
                  p ? f !== p && (a = ko(e, d, a, p) + p) : f && (o += f),
                  this.add(S, `setProperty`, a, o, r, i, 0, 0, d),
                  x.push(d),
                  b.push(d, 0, S[d]));
              else if (l !== `undefined`) {
                if (
                  (C && d in C
                    ? ((a = typeof C[d] == `function` ? C[d].call(n, r, e, i) : C[d]),
                      wn(a) && ~a.indexOf(`random(`) && (a = mi(a)),
                      Xr(a + ``) || (a += hn.units[d] || Xr(Ao(e, d)) || ``),
                      (a + ``).charAt(1) === `=` && (a = Ao(e, d)))
                    : (a = Ao(e, d)),
                  (c = parseFloat(a)),
                  (m = l === `string` && o.charAt(1) === `=` && o.substr(0, 2)),
                  m && (o = o.substr(2)),
                  (s = parseFloat(o)),
                  d in Za &&
                    (d === `autoAlpha` &&
                      (c === 1 && Ao(e, `visibility`) === `hidden` && s && (c = 0),
                      b.push(`visibility`, 0, S.visibility),
                      Eo(
                        this,
                        S,
                        `visibility`,
                        c ? `inherit` : `hidden`,
                        s ? `inherit` : `hidden`,
                        !s
                      )),
                    d !== `scale` &&
                      d !== `transform` &&
                      ((d = Za[d]), ~d.indexOf(`,`) && (d = d.split(`,`)[0]))),
                  (h = d in Ua),
                  h)
                )
                  if (
                    (this.styles.save(d),
                    g ||
                      ((_ = e._gsap),
                      (_.renderTransform && !t.parseTransform) || Ho(e, t.parseTransform),
                      (v = !1 !== t.smoothOrigin && _.smooth),
                      (g = this._pt = new ya(this._pt, S, Z, 0, 1, _.renderTransform, _, 0, -1)),
                      (g.dep = 1)),
                    d === `scale`)
                  )
                    ((this._pt = new ya(
                      this._pt,
                      _,
                      `scaleY`,
                      c,
                      (m ? ur(c, m + s) : s) - c || 0,
                      Qa
                    )),
                      (this._pt.u = 0),
                      x.push(`scaleY`, d),
                      (d += `X`));
                  else {
                    if (d === `transformOrigin`) {
                      (b.push(uo, 0, S[uo]),
                        (o = No(o)),
                        _.svg
                          ? Vo(e, o, 0, v, 0, this)
                          : ((p = parseFloat(o.split(` `)[2]) || 0),
                            p !== _.zOrigin && Eo(this, _, `zOrigin`, _.zOrigin, p),
                            Eo(this, S, d, Uo(a), Uo(o))));
                      continue;
                    }
                    if (d === `svgOrigin`) {
                      Vo(e, o, 1, v, 0, this);
                      continue;
                    }
                    if (d in Lo) {
                      Zo(this, _, d, c, m ? ur(c, m + o) : o);
                      continue;
                    }
                    if (d === `smoothOrigin`) {
                      Eo(this, _, `smooth`, _.smooth, o);
                      continue;
                    }
                    if (d === `force3D`) {
                      _[d] = o;
                      continue;
                    }
                    if (d === `transform`) {
                      $o(this, o, e);
                      continue;
                    }
                  }
                else d in S || (d = yo(d) || d);
                if (h || ((s || s === 0) && (c || c === 0) && !Xa.test(o) && d in S))
                  ((f = (a + ``).substr((c + ``).length)),
                    (s ||= 0),
                    (p = Xr(o) || (d in hn.units ? hn.units[d] : f)),
                    f !== p && (c = ko(e, d, a, p)),
                    (this._pt = new ya(
                      this._pt,
                      h ? _ : S,
                      d,
                      c,
                      (m ? ur(c, m + s) : s) - c,
                      h || (p !== `px` && d !== `zIndex`) || !1 === t.autoRound ? Qa : to
                    )),
                    (this._pt.u = p || 0),
                    f !== p && p !== `%` && ((this._pt.b = a), (this._pt.r = eo)));
                else if (d in S) jo.call(this, e, d, a, m ? m + o : o);
                else {
                  if (!(d in e)) {
                    Un(d, o);
                    continue;
                  }
                  this.add(e, d, a || e[d], m ? m + o : o, r, i);
                }
                (h || (d in S ? b.push(d, 0, S[d]) : b.push(d, 1, a || e[d])), x.push(d));
              }
            }
          y && va(this);
        },
        render: function (e, t) {
          if (t.tween._time || !Ba()) for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
          else t.styles.revert();
        },
        get: Ao,
        aliases: Za,
        getSetter: function (e, t, n) {
          var r = Za[t];
          return (
            r && r.indexOf(`,`) < 0 && (t = r),
            t in Ua && t !== uo && (e._gsap.x || Ao(e, `x`))
              ? n && za === n
                ? t === `scale`
                  ? so
                  : oo
                : (za = n || {}) && (t === `scale` ? co : lo)
              : e.style && !En(e.style[t])
                ? io
                : ~t.indexOf(`-`)
                  ? ao
                  : ua(e, t)
          );
        },
        core: { _removeProperty: To, _getMatrix: Bo },
      }),
      (Ma.utils.checkPrefix = yo),
      (Ma.core.getStyleSaver = ho),
      (function (e, t, n, r) {
        var i = sr(e + `,` + t + `,` + n, function (e) {
          Ua[e] = 1;
        });
        (sr(t, function (e) {
          ((hn.units[e] = `deg`), (Lo[e] = 1));
        }),
          (Za[i[13]] = e + `,` + t),
          sr(r, function (e) {
            var t = e.split(`:`);
            Za[t[1]] = i[t[0]];
          }));
      })(
        `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
        `rotation,rotationX,rotationY,skewX,skewY`,
        `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
        `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`
      ),
      sr(
        `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
        function (e) {
          hn.units[e] = `px`;
        }
      ),
      Ma.registerPlugin(es));
  }),
  ns,
  rs = e(() => {
    (Na(), ts(), (ns = Ma.registerPlugin(es) || Ma), ns.core.Tween);
  });
function is({
  color: e = `#ff0000`,
  interactionMode: t = `rings`,
  duration: n = 1,
  strokeWidth: r = 2,
  effectSize: i = 60,
  rotation: a = 0,
}) {
  let o = v(null),
    [s, c] = _({ x: 0, y: 0 }),
    [l, u] = _([]),
    [f, m] = _([]),
    [y, b] = _([]),
    [x, S] = _([]),
    [C, w] = _([]),
    [T, E] = _([]),
    D = ge.current() === ge.canvas;
  return (
    d(() => {
      let e = (e) => {
          if (o.current) {
            let t = o.current.getBoundingClientRect();
            c({ x: e.clientX - t.left, y: e.clientY - t.top });
          }
        },
        t = o.current;
      return (
        t && document.addEventListener(`mousemove`, e),
        () => {
          t && document.removeEventListener(`mousemove`, e);
        }
      );
    }, []),
    d(() => {
      let e = (e) => {
        if (o.current) {
          let n = o.current.getBoundingClientRect(),
            r = e.clientX - n.left,
            a = e.clientY - n.top;
          if (t === `rings`) {
            let e = { id: Date.now().toString(), x: r, y: a };
            u((t) => [...t, e]);
          } else if (t === `burst`) {
            let e = { id: Date.now().toString(), x: r, y: a };
            m((t) => [...t, e]);
          } else if (t === `particles`) {
            let e = Array.from({ length: 8 }, (e, t) => ({
              id: `${Date.now()}-${t}`,
              x: r,
              y: a,
              angle: t * 45 * (Math.PI / 180),
              distance: i * 0.2 + i * 0.3 * Math.random(),
            }));
            b((t) => [...t, ...e]);
          } else if (t === `crosshair`) {
            let e = { id: Date.now().toString(), x: r, y: a };
            S((t) => [...t, e]);
          } else if (t === `wavy`) {
            let e = { id: Date.now().toString(), x: r, y: a };
            w((t) => [...t, e]);
          } else if (t === `sniper`) {
            let e = { id: Date.now().toString(), x: r, y: a };
            E((t) => [...t, e]);
          }
        }
      };
      return (
        document.addEventListener(`click`, e),
        () => {
          document.removeEventListener(`click`, e);
        }
      );
    }, [t]),
    h(`div`, {
      ref: o,
      style: { width: `0px`, height: `0px`, position: `relative`, overflow: `visible` },
      children:
        !D &&
        g(p, {
          children: [
            t === `rings` &&
              h(p, {
                children: l.map((t) =>
                  h(
                    `svg`,
                    {
                      style: {
                        position: `absolute`,
                        left: t.x - i / 2,
                        top: t.y - i / 2,
                        width: i,
                        height: i,
                        pointerEvents: `none`,
                        overflow: `visible`,
                        transform: `rotate(${a}deg)`,
                        transformOrigin: `center`,
                      },
                      ref: (e) => {
                        if (e) {
                          let i = ns.timeline();
                          (ns.set(e, { scale: 0.5, "--stroke-width": r }),
                            i
                              .to(
                                e,
                                {
                                  scale: 2,
                                  "--stroke-width": 0,
                                  duration: n,
                                  ease: `power3.out`,
                                  onComplete: () => {
                                    u((e) => e.filter((e) => e.id !== t.id));
                                  },
                                },
                                0
                              )
                              .to(e, { opacity: 0, duration: n * 0.2, ease: `linear` }, n * 0.8));
                        }
                      },
                      children: h(`circle`, {
                        cx: i / 2,
                        cy: i / 2,
                        r: i / 4,
                        fill: `none`,
                        stroke: e,
                        strokeWidth: `var(--stroke-width, 5)`,
                      }),
                    },
                    t.id
                  )
                ),
              }),
            t === `burst` &&
              h(p, {
                children: f.map((t) =>
                  h(
                    `svg`,
                    {
                      style: {
                        position: `absolute`,
                        left: t.x - i / 2,
                        top: t.y - i / 2,
                        width: i,
                        height: i,
                        pointerEvents: `none`,
                        overflow: `visible`,
                        transform: `rotate(${a}deg)`,
                        transformOrigin: `center`,
                      },
                      ref: (e) => {
                        e &&
                          e.querySelectorAll(`line`).forEach((e, a) => {
                            let o = [45, 80, 115, 150][a] * (Math.PI / 180),
                              s = i / 2,
                              c = i / 2;
                            i * 0.4;
                            let l = s + i * 0.1 * Math.cos(o),
                              u = c - i * 0.1 * Math.sin(o),
                              d = s + i * 0.25 * Math.cos(o),
                              f = c - i * 0.25 * Math.sin(o);
                            (ns.set(e, { attr: { x1: l, y1: u, x2: d, y2: f }, strokeWidth: r }),
                              ns
                                .timeline()
                                .to(e, {
                                  attr: { x1: d, y1: f, x2: d, y2: f },
                                  translateX: (i / 4) * Math.cos(o),
                                  translateY: (-i / 4) * Math.sin(o),
                                  duration: n,
                                  ease: `power2.out`,
                                  onComplete: () => {
                                    m((e) => e.filter((e) => e.id !== t.id));
                                  },
                                })
                                .to(
                                  e,
                                  { strokeWidth: 0, duration: n * 0.4, ease: `linear` },
                                  n * 0.6
                                ));
                          });
                      },
                      children: [45, 80, 115, 150].map((t, n) => {
                        let a = i / 2,
                          o = i / 2;
                        return h(
                          `line`,
                          {
                            x1: a,
                            y1: o,
                            x2: a,
                            y2: o,
                            stroke: e,
                            strokeWidth: r,
                            strokeLinecap: `square`,
                          },
                          n
                        );
                      }),
                    },
                    t.id
                  )
                ),
              }),
            t === `particles` &&
              h(p, {
                children: y.map((t) =>
                  h(
                    `div`,
                    {
                      style: {
                        position: `absolute`,
                        transformOrigin: `center`,
                        left: t.x - r / 2,
                        top: t.y - r / 2,
                        width: r,
                        height: r,
                        backgroundColor: e,
                        borderRadius: `50%`,
                        pointerEvents: `none`,
                        transform: `rotate(${a}deg)`,
                      },
                      ref: (e) => {
                        if (e && !e.dataset.animated) {
                          e.dataset.animated = `true`;
                          let i = t.x + Math.cos(t.angle) * t.distance,
                            a = t.y + Math.sin(t.angle) * t.distance;
                          (ns.set(e, { left: t.x - r / 2, top: t.y - r / 2, width: 0, height: 0 }),
                            ns
                              .timeline()
                              .to(e, { width: r, height: r, duration: n * 0.2, ease: `power1.out` })
                              .to(
                                e,
                                {
                                  left: i - r / 2,
                                  top: a - r / 2,
                                  duration: n * 0.4,
                                  ease: `power1.out`,
                                },
                                n * 0.2
                              )
                              .to(
                                e,
                                {
                                  width: 0,
                                  height: 0,
                                  left: i - r / 2 + r / 2,
                                  top: a - r / 2 + r / 2,
                                  duration: n * 0.4,
                                  ease: `linear`,
                                  onComplete: () => {
                                    b((e) => e.filter((e) => e.id !== t.id));
                                  },
                                },
                                n * 0.6
                              ));
                        }
                      },
                    },
                    t.id
                  )
                ),
              }),
            t === `crosshair` &&
              h(p, {
                children: x.map((t) =>
                  h(
                    `svg`,
                    {
                      style: {
                        position: `absolute`,
                        left: t.x - i / 2,
                        top: t.y - i / 2,
                        width: i,
                        height: i,
                        pointerEvents: `none`,
                        overflow: `visible`,
                        transform: `rotate(${a}deg)`,
                        transformOrigin: `center`,
                      },
                      ref: (e) => {
                        e &&
                          e.querySelectorAll(`line`).forEach((e, a) => {
                            let o = [0, 90, 180, 270][a] * (Math.PI / 180),
                              s = i / 2,
                              c = i / 2,
                              l = i * 0.3,
                              u = s + 20 * Math.cos(o),
                              d = c - 20 * Math.sin(o),
                              f = s + (20 + l) * Math.cos(o),
                              p = c - (20 + l) * Math.sin(o);
                            (ns.set(e, { attr: { x1: u, y1: d, x2: s, y2: c }, strokeWidth: r }),
                              ns
                                .timeline()
                                .to(e, {
                                  attr: { x1: f, y1: p, x2: f, y2: p },
                                  duration: n * 0.8,
                                  ease: `power1.out`,
                                })
                                .to(
                                  e,
                                  {
                                    strokeWidth: 0,
                                    duration: n * 0.6,
                                    ease: `linear`,
                                    onComplete: () => {
                                      S((e) => e.filter((e) => e.id !== t.id));
                                    },
                                  },
                                  n * 0.4
                                ));
                          });
                      },
                      children: [0, 90, 180, 270].map((t, n) => {
                        let a = i / 2,
                          o = i / 2;
                        return h(
                          `line`,
                          {
                            x1: a,
                            y1: o,
                            x2: a,
                            y2: o,
                            stroke: e,
                            strokeWidth: r,
                            strokeLinecap: `square`,
                          },
                          n
                        );
                      }),
                    },
                    t.id
                  )
                ),
              }),
            t === `wavy` &&
              h(p, {
                children: C.map((t) =>
                  h(
                    `svg`,
                    {
                      style: {
                        position: `absolute`,
                        left: t.x - i / 2,
                        top: t.y - i / 2,
                        width: i,
                        height: i,
                        pointerEvents: `none`,
                        overflow: `visible`,
                        transform: `rotate(${a}deg)`,
                        transformOrigin: `center`,
                      },
                      ref: (e) => {
                        e &&
                          (e.querySelectorAll(`path`).forEach((e, t) => {
                            let i = e.getTotalLength();
                            (ns.set(e, {
                              strokeDasharray: `1, ` + i,
                              strokeDashoffset: 0,
                              strokeWidth: r,
                            }),
                              ns
                                .timeline()
                                .to(e, {
                                  strokeDasharray: `${i}, ` + i,
                                  strokeDashoffset: -i,
                                  duration: n,
                                  ease: `power1.out`,
                                })
                                .to(
                                  e,
                                  { strokeWidth: 0, duration: n * 0.4, ease: `linear` },
                                  n * 0.6
                                ));
                          }),
                          ns.delayedCall(n, () => {
                            w((e) => e.filter((e) => e.id !== t.id));
                          }));
                      },
                      children: [45, 90, 135, 180].map((t, n) => {
                        let a = i / 2,
                          o = i / 2,
                          s = i * 0.1,
                          c = i * 0.5,
                          l = a + s * Math.cos((t * Math.PI) / 180),
                          u = o - s * Math.sin((t * Math.PI) / 180),
                          d = a + c * Math.cos((t * Math.PI) / 180),
                          f = o - c * Math.sin((t * Math.PI) / 180),
                          p = (l + d) / 2,
                          m = (u + f) / 2,
                          g = i * 0.05;
                        return h(
                          `path`,
                          {
                            d: `M ${l} ${u} Q ${p + g * Math.cos((t * Math.PI) / 180 + Math.PI / 2)} ${m - g * Math.sin((t * Math.PI) / 180 + Math.PI / 2)} ${p} ${m} T ${d} ${f}`,
                            stroke: e,
                            strokeWidth: r,
                            strokeLinecap: `round`,
                            fill: `none`,
                          },
                          n
                        );
                      }),
                    },
                    t.id
                  )
                ),
              }),
            t === `sniper` &&
              h(p, {
                children: T.map((t) =>
                  g(
                    `div`,
                    {
                      children: [
                        h(`svg`, {
                          style: {
                            position: `absolute`,
                            left: t.x - i / 2,
                            top: t.y - i / 2,
                            width: i,
                            height: i,
                            pointerEvents: `none`,
                            overflow: `visible`,
                            transform: `rotate(${a}deg)`,
                            transformOrigin: `center`,
                          },
                          ref: (e) => {
                            e &&
                              e.querySelectorAll(`line`).forEach((e, t) => {
                                let a = [0, 90, 180, 270][t] * (Math.PI / 180),
                                  o = i / 2,
                                  s = i / 2,
                                  c = i * 0.2,
                                  l = o + 5 * Math.cos(a),
                                  u = s - 5 * Math.sin(a),
                                  d = o + (5 + c) * Math.cos(a),
                                  f = s - (5 + c) * Math.sin(a);
                                (ns.set(e, {
                                  attr: { x1: l, y1: u, x2: d, y2: f },
                                  strokeWidth: r,
                                }),
                                  ns
                                    .timeline()
                                    .to(e, {
                                      attr: { x1: d, y1: f, x2: d, y2: f },
                                      translateX: (5 + c) * Math.cos(a),
                                      translateY: -(5 + c) * Math.sin(a),
                                      duration: n,
                                      ease: `power2.out`,
                                    })
                                    .to(
                                      e,
                                      { strokeWidth: 0, duration: n * 0.4, ease: `linear` },
                                      n * 0.6
                                    ));
                              });
                          },
                          children: [0, 90, 180, 270].map((t, n) => {
                            let a = i / 2,
                              o = i / 2;
                            return h(
                              `line`,
                              {
                                x1: a,
                                y1: o,
                                x2: a,
                                y2: o,
                                stroke: e,
                                strokeWidth: r,
                                strokeLinecap: `square`,
                              },
                              n
                            );
                          }),
                        }),
                        [
                          Math.PI / 3,
                          (2 * Math.PI) / 3,
                          (4 * Math.PI) / 3,
                          (5 * Math.PI) / 3,
                          Math.PI / 6,
                          (5 * Math.PI) / 6,
                          (7 * Math.PI) / 6,
                          (11 * Math.PI) / 6,
                        ].map((o, s) =>
                          h(
                            `div`,
                            {
                              style: {
                                position: `absolute`,
                                left: t.x - r / 2,
                                top: t.y - r / 2,
                                width: r,
                                height: r,
                                backgroundColor: e,
                                pointerEvents: `none`,
                                transformOrigin: `center`,
                                transform: `rotate(${a}deg)`,
                              },
                              ref: (e) => {
                                e &&
                                  !e.dataset.animated &&
                                  ((e.dataset.animated = `true`),
                                  t.x + Math.cos(o) * (20 + i * 0.3),
                                  t.y + Math.sin(o) * (20 + i * 0.3),
                                  ns.set(e, { x: 0, y: 0, width: r, height: r }),
                                  ns
                                    .timeline()
                                    .to(e, {
                                      x: i * 0.4 * Math.cos(o),
                                      y: i * 0.4 * Math.sin(o),
                                      duration: n,
                                      ease: `power2.out`,
                                      onComplete: () => {
                                        E((e) => e.filter((e) => e.id !== t.id));
                                      },
                                    })
                                    .to(
                                      e,
                                      { width: 0, height: 0, duration: n * 0.4, ease: `linear` },
                                      n * 0.6
                                    ));
                              },
                            },
                            s
                          )
                        ),
                      ],
                    },
                    t.id
                  )
                ),
              }),
          ],
        }),
    })
  );
}
var as = e(() => {
  (f(),
    i(),
    j(),
    rs(),
    k(is, {
      interactionMode: {
        type: B.Enum,
        title: `Effect`,
        options: [`rings`, `burst`, `particles`, `crosshair`, `wavy`, `sniper`],
        optionTitles: [`Rings`, `Burst`, `Particles`, `Crosshair`, `Wavy`, `Sniper`],
        defaultValue: `rings`,
      },
      color: { type: B.Color, title: `Color`, defaultValue: `#000000` },
      duration: {
        type: B.Number,
        title: `Duration`,
        min: 0.1,
        max: 2,
        step: 0.1,
        defaultValue: 0.4,
        unit: `s`,
      },
      strokeWidth: {
        type: B.Number,
        title: `Stroke`,
        min: 0.5,
        max: 10,
        step: 0.5,
        defaultValue: 2,
        unit: `px`,
      },
      effectSize: {
        type: B.Number,
        title: `Size`,
        min: 20,
        max: 200,
        step: 5,
        defaultValue: 60,
        unit: `px`,
      },
      rotation: {
        type: B.Number,
        title: `Rotation`,
        min: 0,
        max: 360,
        step: 1,
        defaultValue: 0,
        unit: `°`,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }),
    (is.displayName = `Click Effects`));
});
function os(e) {
  let {
      particleCount: r = 50,
      particleSize: i = 2,
      particleOpacity: a = 0.6,
      glowIntensity: o = 10,
      movementSpeed: s = 0.5,
      mouseInfluence: c = 100,
      backgroundColor: l = `#000000`,
      particleColor: u = `#FFFFFF`,
      mouseGravity: f = `none`,
      gravityStrength: p = 50,
      glowAnimation: m = `ease`,
      particleInteraction: g = !1,
      interactionType: y = `bounce`,
    } = e,
    b = v(null),
    x = v(),
    S = v({ x: 0, y: 0 }),
    C = v([]),
    w = ne(),
    [T, E] = _({ width: 800, height: 600 }),
    D = v(null),
    O = t(
      (e, t) =>
        Array.from({ length: r }, (n, r) => ({
          x: Math.random() * e,
          y: Math.random() * t,
          vx: (Math.random() - 0.5) * s,
          vy: (Math.random() - 0.5) * s,
          size: Math.random() * i + 1,
          opacity: a,
          baseOpacity: a,
          mass: Math.random() * 0.5 + 0.5,
          id: r,
        })),
      [r, i, a, s]
    ),
    k = t((e, t) => {
      C.current.forEach((n) => {
        ((n.x = Math.random() * e), (n.y = Math.random() * t));
      });
    }, []),
    A = t(
      (e) => {
        let t = e.getBoundingClientRect(),
          n = S.current;
        C.current.forEach((e, r) => {
          let i = n.x - e.x,
            a = n.y - e.y,
            o = Math.sqrt(i * i + a * a);
          if (o < c && o > 0) {
            let t = (c - o) / c,
              n = i / o,
              r = a / o,
              s = p * 0.001 * t;
            (f === `attract`
              ? ((e.vx += n * s), (e.vy += r * s))
              : f === `repel` && ((e.vx -= n * s), (e.vy -= r * s)),
              (e.opacity = Math.min(1, e.baseOpacity + t * 0.4)));
            let l = 1 + t * 2,
              u = e.glowMultiplier || 1;
            if (m === `instant`) e.glowMultiplier = l;
            else if (m === `ease`) e.glowMultiplier = u + (l - u) * 0.15;
            else if (m === `spring`) {
              let t = (l - u) * 0.2;
              ((e.glowVelocity = (e.glowVelocity || 0) * 0.85 + t),
                (e.glowMultiplier = u + e.glowVelocity));
            }
          } else {
            e.opacity = Math.max(e.baseOpacity * 0.3, e.opacity - 0.02);
            let t = e.glowMultiplier || 1;
            if (m === `instant`) e.glowMultiplier = 1;
            else if (m === `ease`) e.glowMultiplier = Math.max(1, t + (1 - t) * 0.08);
            else if (m === `spring`) {
              let n = (1 - t) * 0.15;
              ((e.glowVelocity = (e.glowVelocity || 0) * 0.9 + n),
                (e.glowMultiplier = Math.max(1, t + e.glowVelocity)));
            }
          }
          if (g)
            for (let t = r + 1; t < C.current.length; t++) {
              let n = C.current[t],
                r = n.x - e.x,
                i = n.y - e.y,
                a = Math.sqrt(r * r + i * i),
                o = e.size + n.size + 5;
              if (a < o && a > 0) {
                if (y === `bounce`) {
                  let t = r / a,
                    s = i / a,
                    c = e.vx - n.vx,
                    l = e.vy - n.vy,
                    u = c * t + l * s;
                  if (u < 0) return;
                  let d = (2 * u) / (e.mass + n.mass);
                  ((e.vx -= d * n.mass * t),
                    (e.vy -= d * n.mass * s),
                    (n.vx += d * e.mass * t),
                    (n.vy += d * e.mass * s));
                  let f = o - a,
                    p = t * f * 0.5,
                    m = s * f * 0.5;
                  ((e.x -= p), (e.y -= m), (n.x += p), (n.y += m));
                } else if (y === `merge`) {
                  let t = (o - a) / o;
                  ((e.glowMultiplier = (e.glowMultiplier || 1) + t * 0.5),
                    (n.glowMultiplier = (n.glowMultiplier || 1) + t * 0.5));
                  let s = t * 0.01;
                  ((e.vx += r * s), (e.vy += i * s), (n.vx -= r * s), (n.vy -= i * s));
                }
              }
            }
          ((e.x += e.vx),
            (e.y += e.vy),
            (e.vx += (Math.random() - 0.5) * 0.001),
            (e.vy += (Math.random() - 0.5) * 0.001),
            (e.vx *= 0.999),
            (e.vy *= 0.999),
            e.x < 0 && (e.x = t.width),
            e.x > t.width && (e.x = 0),
            e.y < 0 && (e.y = t.height),
            e.y > t.height && (e.y = 0));
        });
      },
      [c, f, p, m, g, y]
    ),
    j = t(
      (e) => {
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
          C.current.forEach((t) => {
            e.save();
            let n = t.glowMultiplier || 1;
            ((e.shadowColor = u),
              (e.shadowBlur = o * n * 2),
              (e.globalAlpha = t.opacity),
              (e.fillStyle = u),
              e.beginPath(),
              e.arc(t.x, t.y, t.size, 0, Math.PI * 2),
              e.fill(),
              e.restore());
          }));
      },
      [u, o]
    ),
    M = t(() => {
      let e = b.current;
      if (!e) return;
      let t = e.getContext(`2d`);
      t && (A(e), j(t), (x.current = requestAnimationFrame(M)));
    }, [A, j]),
    N = t((e) => {
      let t = b.current;
      if (!t) return;
      let n = t.getBoundingClientRect();
      S.current = { x: e.clientX - n.left, y: e.clientY - n.top };
    }, []),
    P = t(() => {
      let e = b.current,
        t = D.current;
      if (!e || !t) return;
      let n = t.getBoundingClientRect(),
        r = n.width,
        i = n.height;
      ((e.width = r), (e.height = i), E({ width: r, height: i }), C.current.length > 0 && k(r, i));
    }, [k]);
  return (
    d(() => {
      if (w) return;
      let e = b.current;
      e && (C.current = O(e.width || T.width, e.height || T.height));
    }, [r, O, w, T]),
    d(() => {
      w ||
        C.current.forEach((e) => {
          ((e.baseOpacity = a), (e.opacity = a));
          let t = Math.sqrt(e.vx * e.vx + e.vy * e.vy);
          if (t > 0) {
            let n = s / t;
            ((e.vx *= n), (e.vy *= n));
          }
        });
    }, [a, s, w]),
    d(() => {
      if (!w) {
        if (
          (P(),
          n !== void 0 && (n.addEventListener(`mousemove`, N), n.addEventListener(`resize`, P)),
          D.current && typeof ResizeObserver < `u`)
        ) {
          let e = new ResizeObserver(() => {
            P();
          });
          return (
            e.observe(D.current),
            () => {
              (e.disconnect(),
                n !== void 0 &&
                  (n.removeEventListener(`mousemove`, N), n.removeEventListener(`resize`, P)));
            }
          );
        }
        return () => {
          n !== void 0 &&
            (n.removeEventListener(`mousemove`, N), n.removeEventListener(`resize`, P));
        };
      }
    }, [N, P, w]),
    d(() => {
      if (!w)
        return (
          M(),
          () => {
            x.current && cancelAnimationFrame(x.current);
          }
        );
    }, [M, w]),
    w
      ? h(`div`, {
          style: {
            width: `100%`,
            height: `100%`,
            backgroundColor: l,
            position: `relative`,
            overflow: `hidden`,
          },
          children: Array.from({ length: Math.min(r, 20) }).map((e, t) =>
            h(
              `div`,
              {
                style: {
                  position: `absolute`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${i}px`,
                  height: `${i}px`,
                  backgroundColor: u,
                  borderRadius: `50%`,
                  opacity: a,
                  boxShadow: `0 0 ${o}px ${u}`,
                },
              },
              t
            )
          ),
        })
      : h(`div`, {
          ref: D,
          style: {
            width: `100%`,
            height: `100%`,
            backgroundColor: l,
            position: `relative`,
            overflow: `hidden`,
          },
          children: h(`canvas`, {
            ref: b,
            style: { width: `100%`, height: `100%`, display: `block` },
          }),
        })
  );
}
var ss = e(() => {
  (c(),
    f(),
    i(),
    j(),
    k(os, {
      particleCount: {
        type: B.Number,
        title: `Particle Count`,
        defaultValue: 50,
        min: 10,
        max: 1e3,
        step: 1,
      },
      particleSize: {
        type: B.Number,
        title: `Particle Size`,
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 0.5,
        unit: `px`,
      },
      particleOpacity: {
        type: B.Number,
        title: `Particle Opacity`,
        defaultValue: 0.6,
        min: 0.1,
        max: 1,
        step: 0.1,
      },
      glowIntensity: {
        type: B.Number,
        title: `Glow Intensity`,
        defaultValue: 10,
        min: 0,
        max: 30,
        step: 1,
        unit: `px`,
      },
      glowAnimation: {
        type: B.Enum,
        title: `Glow Animation`,
        options: [`instant`, `ease`, `spring`],
        optionTitles: [`Instant`, `Ease In-Out`, `Spring`],
        defaultValue: `ease`,
        displaySegmentedControl: !0,
      },
      movementSpeed: {
        type: B.Number,
        title: `Movement Speed`,
        defaultValue: 0.5,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      mouseInfluence: {
        type: B.Number,
        title: `Mouse Influence`,
        defaultValue: 100,
        min: 50,
        max: 300,
        step: 10,
        unit: `px`,
      },
      backgroundColor: { type: B.Color, title: `Background Color`, defaultValue: `#000000` },
      particleColor: { type: B.Color, title: `Particle Color`, defaultValue: `#FFFFFF` },
      mouseGravity: {
        type: B.Enum,
        title: `Mouse Gravity`,
        options: [`none`, `attract`, `repel`],
        optionTitles: [`None`, `Attract`, `Repel`],
        defaultValue: `none`,
        displaySegmentedControl: !0,
      },
      gravityStrength: {
        type: B.Number,
        title: `Gravity Strength`,
        defaultValue: 50,
        min: 10,
        max: 200,
        step: 10,
        hidden: ({ mouseGravity: e }) => e === `none`,
      },
      particleInteraction: {
        type: B.Boolean,
        title: `Particle Interaction`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      interactionType: {
        type: B.Enum,
        title: `Interaction Type`,
        options: [`bounce`, `merge`],
        optionTitles: [`Bounce`, `Merge`],
        defaultValue: `bounce`,
        displaySegmentedControl: !0,
        hidden: ({ particleInteraction: e }) => !e,
      },
    }));
});
function cs(e) {
  let t = e.settings;
  t =
    e.settings.mode === `preset`
      ? { ...ds, mode: `preset`, blend: `difference`, x: `R`, y: `B`, radius: e.settings.radius }
      : { ...t, blend: `difference`, x: `R`, y: `B` };
  let n = v(null),
    r = v(null),
    [i, a] = _({ width: ls, height: us });
  d(() => {
    if (!n.current) return;
    let e = () => {
      if (!n.current) return;
      if (ge.current() === ge.canvas) {
        let e = n.current.offsetWidth,
          t = n.current.offsetHeight;
        if (e === 0 || t === 0) return;
        a({ width: e, height: t });
        return;
      }
      let { width: e, height: t } = n.current.getBoundingClientRect();
      e === 0 || t === 0 || a({ width: e, height: t });
    };
    e();
    let t = new ResizeObserver(e);
    return (t.observe(n.current), () => t.disconnect());
  }, []);
  let o = s(() => {
      let { width: e, height: n } = i,
        r = e / 2,
        a = n / 2,
        o = Math.min(r, a) * (t.border * 0.5),
        s = Math.min(t.radius, e / 2, n / 2),
        c = `
      <svg viewBox="0 0 ${r} ${a}" xmlns="http://www.w3.org/2000/svg">
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
        <rect x="0" y="0" width="${r}" height="${a}" fill="black"/>
        <rect x="0" y="0" width="${r}" height="${a}" rx="${s}" fill="url(#red)" />
        <rect x="0" y="0" width="${r}" height="${a}" rx="${s}" fill="url(#blue)" style="mix-blend-mode: ${t.blend}" />
        <rect x="${o}" y="${o}" width="${r - o * 2}" height="${a - o * 2}" rx="${s}" fill="hsl(0 0% ${t.lightness}% / ${t.alpha})" style="filter:blur(${t.blur}px)" />
      </svg>
    `;
      return `data:image/svg+xml,${encodeURIComponent(c)}`;
    }, [i, t]),
    c = `liquid-glass-filter-${u()}`,
    l = {
      width: `100%`,
      height: `100%`,
      borderRadius: t.radius,
      position: `absolute`,
      zIndex: 1,
      background: `hsl(0 0% 100% / ${t.frost})`,
      backdropFilter: `url(#${c})`,
    },
    f = {
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
  return g(`div`, {
    ref: n,
    style: { width: `100%`, height: `100%`, position: `relative` },
    children: [
      h(`div`, {
        style: l,
        children: h(`svg`, {
          className: `filter`,
          style: {
            width: `100%`,
            height: `100%`,
            pointerEvents: `none`,
            position: `absolute`,
            inset: 0,
          },
          xmlns: `http://www.w3.org/2000/svg`,
          children: h(`defs`, {
            children: g(`filter`, {
              id: c,
              colorInterpolationFilters: `sRGB`,
              children: [
                h(`feImage`, {
                  href: o,
                  x: `0`,
                  y: `0`,
                  width: `100%`,
                  height: `100%`,
                  result: `map`,
                }),
                h(`feDisplacementMap`, {
                  in: `SourceGraphic`,
                  in2: `map`,
                  id: `redchannel`,
                  scale: t.scale + t.dispersion,
                  xChannelSelector: t.x,
                  yChannelSelector: t.y,
                  result: `dispRed`,
                }),
                h(`feColorMatrix`, {
                  in: `dispRed`,
                  type: `matrix`,
                  values: `1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0`,
                  result: `red`,
                }),
                h(`feDisplacementMap`, {
                  in: `SourceGraphic`,
                  in2: `map`,
                  id: `greenchannel`,
                  scale: t.scale + t.dispersion,
                  xChannelSelector: t.x,
                  yChannelSelector: t.y,
                  result: `dispGreen`,
                }),
                h(`feColorMatrix`, {
                  in: `dispGreen`,
                  type: `matrix`,
                  values: `0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0`,
                  result: `green`,
                }),
                h(`feDisplacementMap`, {
                  in: `SourceGraphic`,
                  in2: `map`,
                  id: `bluechannel`,
                  scale: t.scale + t.dispersion,
                  xChannelSelector: t.x,
                  yChannelSelector: t.y,
                  result: `dispBlue`,
                }),
                h(`feColorMatrix`, {
                  in: `dispBlue`,
                  type: `matrix`,
                  values: `0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0`,
                  result: `blue`,
                }),
                h(`feBlend`, { in: `red`, in2: `green`, mode: `screen`, result: `rg` }),
                h(`feBlend`, { in: `rg`, in2: `blue`, mode: `screen`, result: `output` }),
                h(`feGaussianBlur`, { in: `output`, stdDeviation: t.displace }),
              ],
            }),
          }),
        }),
      }),
      h(`div`, { ref: r, id: `gradient-border`, style: f }),
    ],
  });
}
var ls,
  us,
  ds,
  fs = e(() => {
    (f(),
      i(),
      j(),
      k(cs, {
        settings: {
          type: B.Object,
          controls: {
            mode: {
              type: B.Enum,
              options: [`preset`, `custom`],
              optionTitles: [`Preset`, `Custom`],
              displaySegmentedControl: !0,
              defaultValue: `preset`,
            },
            scale: {
              type: B.Number,
              min: -360,
              max: 360,
              step: 1,
              defaultValue: 160,
              hidden: (e) => e.mode === `preset`,
            },
            radius: { type: B.Number, min: 0, max: 500, step: 1, defaultValue: 50 },
            border: {
              type: B.Number,
              min: 0,
              max: 0.5,
              step: 0.01,
              defaultValue: 0.05,
              hidden: (e) => e.mode === `preset`,
            },
            lightness: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              defaultValue: 53,
              hidden: (e) => e.mode === `preset`,
            },
            displace: {
              title: `Blur`,
              type: B.Number,
              min: 0,
              max: 10,
              step: 0.01,
              defaultValue: 0.38,
              hidden: (e) => e.mode === `preset`,
            },
            alpha: {
              type: B.Number,
              min: 0,
              max: 1,
              step: 0.01,
              defaultValue: 0.9,
              hidden: (e) => e.mode === `preset`,
            },
            blur: {
              title: `Displace`,
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              defaultValue: 5,
              hidden: (e) => e.mode === `preset`,
            },
            dispersion: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              defaultValue: 50,
              hidden: (e) => e.mode === `preset`,
            },
            frost: {
              type: B.Number,
              min: 0,
              max: 1,
              step: 0.01,
              defaultValue: 0.1,
              hidden: (e) => e.mode === `preset`,
            },
            borderColor: {
              title: `Border`,
              type: B.Color,
              defaultValue: `rgba(120, 120, 120, 0.7)`,
            },
          },
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (ls = 400),
      (us = 200),
      (ds = {
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
      (cs.displayName = `Liquid Glass`));
  });
function ps(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ms,
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
  Ts = e(() => {
    (f(),
      j(),
      T(),
      i(),
      Te(),
      ye(),
      (ms = M(be)),
      (hs = [`Rn2tLfSij`, `JSFUcD0W7`]),
      (gs = `framer-5bG7W`),
      (_s = { JSFUcD0W7: `framer-v-upqcr0`, Rn2tLfSij: `framer-v-pgovsc` }),
      (vs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ys = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (bs = b.create(a)),
      (xs = { "List Item Pricing": `JSFUcD0W7`, "List Item": `Rn2tLfSij` }),
      (Ss = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        bAJTrZ1xP: n ?? i.bAJTrZ1xP ?? `Zero to hero in 30 days`,
        variant: xs[i.variant] ?? i.variant ?? `Rn2tLfSij`,
      })),
      (Cs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ws = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z();
          ie();
          let { style: c, className: l, layoutId: d, variant: f, bAJTrZ1xP: p, ...m } = Ss(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = pe({
              cycleOrder: hs,
              defaultVariant: `Rn2tLfSij`,
              ref: r,
              variant: f,
              variantClassNames: _s,
            }),
            A = Cs(e, k),
            j = V(gs, ve);
          return h(S, {
            id: d ?? i,
            children: h(bs, {
              animate: k,
              initial: !1,
              children: h(ys, {
                value: vs,
                children: g(b.div, {
                  ...m,
                  ...C,
                  className: V(j, `framer-pgovsc`, l, y),
                  "data-framer-name": `List Item`,
                  layoutDependency: A,
                  layoutId: `Rn2tLfSij`,
                  ref: r,
                  style: { ...c },
                  ...ps({ JSFUcD0W7: { "data-framer-name": `List Item Pricing` } }, _, w),
                  children: [
                    h(H, {
                      children: h(O, {
                        className: `framer-hy3wl1-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `YKV0f2Vxz-container`,
                        nodeId: `YKV0f2Vxz`,
                        rendersWithMotion: !0,
                        scopeId: `DIOeFdC0r`,
                        style: { opacity: 0.75 },
                        children: h(be, {
                          color: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `CheckCircle`,
                          id: `YKV0f2Vxz`,
                          layoutId: `YKV0f2Vxz`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `fill`,
                          width: `100%`,
                          ...ps(
                            {
                              JSFUcD0W7: {
                                color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                weight: `bold`,
                              },
                            },
                            _,
                            w
                          ),
                        }),
                      }),
                    }),
                    h(W, {
                      __fromCanvasComponent: !0,
                      children: h(a, {
                        children: h(b.p, {
                          className: `framer-styles-preset-1yo9nb5`,
                          "data-styles-preset": `qN3uIbesA`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                          },
                          children: `Zero to hero in 30 days`,
                        }),
                      }),
                      className: `framer-11jf3vx`,
                      "data-framer-name": `Zero to hero in 30 days`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `IsUXMFznS`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: p,
                      variants: {
                        JSFUcD0W7: {
                          "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...ps(
                        {
                          JSFUcD0W7: {
                            children: h(a, {
                              children: h(b.p, {
                                className: `framer-styles-preset-1yo9nb5`,
                                "data-styles-preset": `qN3uIbesA`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                },
                                children: `Zero to hero in 30 days`,
                              }),
                            }),
                          },
                        },
                        _,
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
          `.framer-5bG7W.framer-164g5vp, .framer-5bG7W .framer-164g5vp { display: block; }`,
          `.framer-5bG7W.framer-pgovsc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5bG7W .framer-hy3wl1-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `.framer-5bG7W .framer-11jf3vx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Se,
        ],
        `framer-5bG7W`
      )),
      (ws.displayName = `List Item`),
      (ws.defaultProps = { height: 18, width: 173 }),
      k(ws, {
        variant: {
          options: [`Rn2tLfSij`, `JSFUcD0W7`],
          optionTitles: [`List Item`, `List Item Pricing`],
          title: `Variant`,
          type: B.Enum,
        },
        bAJTrZ1xP: {
          defaultValue: `Zero to hero in 30 days`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
      }),
      F(
        ws,
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
          ...ms,
          ...N(Ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Es(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ds,
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
  zs = e(() => {
    (f(),
      j(),
      T(),
      i(),
      He(),
      Ye(),
      it(),
      (Ds = { I03hsvnUZ: { hover: !0 } }),
      (Os = [`CUnwaBkiy`, `I03hsvnUZ`, `RqEpCbaxu`, `si1T6iezj`, `GFoVij2hI`, `xABAO630y`]),
      (ks = `framer-jCkw5`),
      (As = {
        CUnwaBkiy: `framer-v-f7j1aj`,
        GFoVij2hI: `framer-v-6ad4ad`,
        I03hsvnUZ: `framer-v-1hfuchw`,
        RqEpCbaxu: `framer-v-nuyuip`,
        si1T6iezj: `framer-v-y2mh6p`,
        xABAO630y: `framer-v-293kpg`,
      }),
      (js = { delay: 0, duration: 0.35, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ms = (e, t) => `translate(-50%, -50%) ${t}`),
      (Ns = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Ps = b.create(a)),
      (Fs = {
        "Pricing Option Active Tablet": `RqEpCbaxu`,
        "Pricing Option Active": `CUnwaBkiy`,
        "Pricing Option Phone Active": `GFoVij2hI`,
        "Pricing Option Phone": `xABAO630y`,
        "Pricing Option Tablet": `si1T6iezj`,
        "Pricing Option": `I03hsvnUZ`,
      }),
      (Is = ({ click: e, height: t, id: n, price: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        bvidXN9uU: e ?? s.bvidXN9uU,
        lViGTnkje: i ?? s.lViGTnkje ?? `Advance pack + $100k loan`,
        PSNsc43XR: r ?? s.PSNsc43XR ?? `$499`,
        variant: Fs[s.variant] ?? s.variant ?? `CUnwaBkiy`,
        XQka0aZ4p: a ?? s.XQka0aZ4p ?? `Advance plan`,
      })),
      (Ls = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Rs = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z();
          ie();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              XQka0aZ4p: p,
              lViGTnkje: m,
              PSNsc43XR: _,
              bvidXN9uU: y,
              ...x
            } = Is(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = pe({
              cycleOrder: Os,
              defaultVariant: `CUnwaBkiy`,
              enabledGestures: Ds,
              ref: r,
              variant: f,
              variantClassNames: As,
            }),
            M = Ls(e, j),
            { activeVariantCallback: N, delay: P } = ue(C),
            F = N(async (...e) => {
              if ((k({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
            }),
            I = V(ks, st, Ge, Ze),
            ee = () => ![`GFoVij2hI`, `xABAO630y`].includes(C);
          return h(S, {
            id: d ?? i,
            children: h(Ps, {
              animate: j,
              initial: !1,
              children: h(Ns, {
                value: js,
                children: g(b.div, {
                  ...x,
                  ...E,
                  className: V(I, `framer-f7j1aj`, l, w),
                  "data-framer-name": `Pricing Option Active`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `CUnwaBkiy`,
                  onTap: F,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  variants: {
                    "I03hsvnUZ-hover": {
                      backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                    },
                    I03hsvnUZ: {
                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    },
                    si1T6iezj: {
                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    },
                    xABAO630y: {
                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    },
                  },
                  ...Es(
                    {
                      "I03hsvnUZ-hover": { "data-framer-name": void 0 },
                      GFoVij2hI: { "data-framer-name": `Pricing Option Phone Active` },
                      I03hsvnUZ: { "data-framer-name": `Pricing Option` },
                      RqEpCbaxu: { "data-framer-name": `Pricing Option Active Tablet` },
                      si1T6iezj: { "data-framer-name": `Pricing Option Tablet` },
                      xABAO630y: { "data-framer-name": `Pricing Option Phone` },
                    },
                    C,
                    D
                  ),
                  children: [
                    g(b.div, {
                      className: `framer-1i2kisg`,
                      "data-framer-name": `Title Wrapper`,
                      layoutDependency: M,
                      layoutId: `lXXUV5mdA`,
                      children: [
                        ee() &&
                          h(b.div, {
                            className: `framer-1o72m00`,
                            "data-border": !0,
                            "data-framer-name": `Dot`,
                            layoutDependency: M,
                            layoutId: `UUvDeQDa9`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                              borderBottomLeftRadius: `100%`,
                              borderBottomRightRadius: `100%`,
                              borderTopLeftRadius: `100%`,
                              borderTopRightRadius: `100%`,
                            },
                            variants: {
                              "I03hsvnUZ-hover": {
                                "--border-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                                backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                              },
                              I03hsvnUZ: {
                                "--border-color": `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              },
                              si1T6iezj: {
                                "--border-color": `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              },
                            },
                            children: h(b.div, {
                              className: `framer-1ozd26p`,
                              "data-framer-name": `Dot Active`,
                              layoutDependency: M,
                              layoutId: `sVJmjwRjw`,
                              style: {
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                              },
                              transformTemplate: Ms,
                            }),
                          }),
                        g(b.div, {
                          className: `framer-1cdms6d`,
                          "data-framer-name": `Title and Text`,
                          layoutDependency: M,
                          layoutId: `FgJuyE3kw`,
                          children: [
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.h6, {
                                  className: `framer-styles-preset-1bk5v37`,
                                  "data-styles-preset": `wmi7dzLRt`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                  },
                                  children: `Advance plan`,
                                }),
                              }),
                              className: `framer-sihz5d`,
                              "data-framer-name": `Advance plan`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `nvd17BIBI`,
                              style: {
                                "--extracted-1w1cjl5": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: p,
                              variants: {
                                "I03hsvnUZ-hover": {
                                  "--extracted-1w1cjl5": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                },
                                I03hsvnUZ: {
                                  "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                },
                                si1T6iezj: {
                                  "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                },
                                xABAO630y: {
                                  "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Es(
                                {
                                  "I03hsvnUZ-hover": {
                                    children: h(a, {
                                      children: h(b.h6, {
                                        className: `framer-styles-preset-1bk5v37`,
                                        "data-styles-preset": `wmi7dzLRt`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                        },
                                        children: `Advance plan`,
                                      }),
                                    }),
                                  },
                                  I03hsvnUZ: {
                                    children: h(a, {
                                      children: h(b.h6, {
                                        className: `framer-styles-preset-1bk5v37`,
                                        "data-styles-preset": `wmi7dzLRt`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                        },
                                        children: `Advance plan`,
                                      }),
                                    }),
                                  },
                                  si1T6iezj: {
                                    children: h(a, {
                                      children: h(b.h6, {
                                        className: `framer-styles-preset-1bk5v37`,
                                        "data-styles-preset": `wmi7dzLRt`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                        },
                                        children: `Advance plan`,
                                      }),
                                    }),
                                  },
                                  xABAO630y: {
                                    children: h(a, {
                                      children: h(b.h6, {
                                        className: `framer-styles-preset-1bk5v37`,
                                        "data-styles-preset": `wmi7dzLRt`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                        },
                                        children: `Advance plan`,
                                      }),
                                    }),
                                  },
                                },
                                C,
                                D
                              ),
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c3b2313b-4d28-4025-82d1-92dcec9a58fe, rgba(255, 255, 255, 0.8)))`,
                                  },
                                  children: `Advance pack + $100k loan`,
                                }),
                              }),
                              className: `framer-1oxoit8`,
                              "data-framer-name": `Advance pack + $100k loan`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `ulMFXabwH`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-c3b2313b-4d28-4025-82d1-92dcec9a58fe, rgba(255, 255, 255, 0.8))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: m,
                              variants: {
                                "I03hsvnUZ-hover": {
                                  "--extracted-r6o4lv": `var(--token-c3b2313b-4d28-4025-82d1-92dcec9a58fe, rgba(255, 255, 255, 0.8))`,
                                },
                                I03hsvnUZ: {
                                  "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                },
                                si1T6iezj: {
                                  "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                },
                                xABAO630y: {
                                  "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Es(
                                {
                                  "I03hsvnUZ-hover": {
                                    children: h(a, {
                                      children: h(b.p, {
                                        className: `framer-styles-preset-1gmq7go`,
                                        "data-styles-preset": `cUaervyv9`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c3b2313b-4d28-4025-82d1-92dcec9a58fe, rgba(255, 255, 255, 0.8)))`,
                                        },
                                        children: `Advance pack + $100k loan`,
                                      }),
                                    }),
                                  },
                                  I03hsvnUZ: {
                                    children: h(a, {
                                      children: h(b.p, {
                                        className: `framer-styles-preset-1gmq7go`,
                                        "data-styles-preset": `cUaervyv9`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                        },
                                        children: `Advance pack + $100k loan`,
                                      }),
                                    }),
                                  },
                                  si1T6iezj: {
                                    children: h(a, {
                                      children: h(b.p, {
                                        className: `framer-styles-preset-1gmq7go`,
                                        "data-styles-preset": `cUaervyv9`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                        },
                                        children: `Advance pack + $100k loan`,
                                      }),
                                    }),
                                  },
                                  xABAO630y: {
                                    children: h(a, {
                                      children: h(b.p, {
                                        className: `framer-styles-preset-1gmq7go`,
                                        "data-styles-preset": `cUaervyv9`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                        },
                                        children: `Advance pack + $100k loan`,
                                      }),
                                    }),
                                  },
                                },
                                C,
                                D
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    h(W, {
                      __fromCanvasComponent: !0,
                      children: h(a, {
                        children: h(b.h3, {
                          className: `framer-styles-preset-y0pgu2`,
                          "data-styles-preset": `eDfz0Tw35`,
                          style: {
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                          },
                          children: `$499`,
                        }),
                      }),
                      className: `framer-n27mzb`,
                      "data-framer-name": `$499`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `CoMfLiRBT`,
                      style: {
                        "--extracted-a0htzi": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: _,
                      variants: {
                        "I03hsvnUZ-hover": {
                          "--extracted-a0htzi": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                        },
                        I03hsvnUZ: {
                          "--extracted-a0htzi": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        },
                        si1T6iezj: {
                          "--extracted-a0htzi": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        },
                        xABAO630y: {
                          "--extracted-a0htzi": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Es(
                        {
                          "I03hsvnUZ-hover": {
                            children: h(a, {
                              children: h(b.h3, {
                                className: `framer-styles-preset-y0pgu2`,
                                "data-styles-preset": `eDfz0Tw35`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                },
                                children: `$499`,
                              }),
                            }),
                          },
                          GFoVij2hI: {
                            children: h(a, {
                              children: h(b.h3, {
                                className: `framer-styles-preset-y0pgu2`,
                                "data-styles-preset": `eDfz0Tw35`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                },
                                children: `$499`,
                              }),
                            }),
                          },
                          I03hsvnUZ: {
                            children: h(a, {
                              children: h(b.h3, {
                                className: `framer-styles-preset-y0pgu2`,
                                "data-styles-preset": `eDfz0Tw35`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                },
                                children: `$499`,
                              }),
                            }),
                          },
                          si1T6iezj: {
                            children: h(a, {
                              children: h(b.h3, {
                                className: `framer-styles-preset-y0pgu2`,
                                "data-styles-preset": `eDfz0Tw35`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                },
                                children: `$499`,
                              }),
                            }),
                          },
                          xABAO630y: {
                            children: h(a, {
                              children: h(b.h3, {
                                className: `framer-styles-preset-y0pgu2`,
                                "data-styles-preset": `eDfz0Tw35`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                },
                                children: `$499`,
                              }),
                            }),
                          },
                        },
                        C,
                        D
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
          `.framer-jCkw5.framer-esf4z6, .framer-jCkw5 .framer-esf4z6 { display: block; }`,
          `.framer-jCkw5.framer-f7j1aj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 490px; }`,
          `.framer-jCkw5 .framer-1i2kisg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-jCkw5 .framer-1o72m00 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-jCkw5 .framer-1ozd26p { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: 50%; position: absolute; top: 50%; width: 12px; }`,
          `.framer-jCkw5 .framer-1cdms6d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-jCkw5 .framer-sihz5d, .framer-jCkw5 .framer-1oxoit8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jCkw5 .framer-n27mzb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-jCkw5.framer-v-nuyuip.framer-f7j1aj, .framer-jCkw5.framer-v-y2mh6p.framer-f7j1aj { padding: 30px 20px 30px 20px; }`,
          `.framer-jCkw5.framer-v-nuyuip .framer-1i2kisg, .framer-jCkw5.framer-v-y2mh6p .framer-1i2kisg { gap: 16px; }`,
          `.framer-jCkw5.framer-v-nuyuip .framer-1cdms6d, .framer-jCkw5.framer-v-y2mh6p .framer-1cdms6d { gap: 6px; }`,
          `.framer-jCkw5.framer-v-6ad4ad.framer-f7j1aj, .framer-jCkw5.framer-v-293kpg.framer-f7j1aj { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 10px; padding: 24px 20px 24px 20px; width: 350px; }`,
          `.framer-jCkw5.framer-v-6ad4ad .framer-1i2kisg, .framer-jCkw5.framer-v-293kpg .framer-1i2kisg { flex: none; width: 100%; }`,
          `.framer-jCkw5.framer-v-6ad4ad .framer-n27mzb, .framer-jCkw5.framer-v-293kpg .framer-n27mzb { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...at,
          ...Ue,
          ...rt,
          `.framer-jCkw5[data-border="true"]::after, .framer-jCkw5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-jCkw5`
      )),
      (Rs.displayName = `Pricing Option`),
      (Rs.defaultProps = { height: 113, width: 490 }),
      k(Rs, {
        variant: {
          options: [`CUnwaBkiy`, `I03hsvnUZ`, `RqEpCbaxu`, `si1T6iezj`, `GFoVij2hI`, `xABAO630y`],
          optionTitles: [
            `Pricing Option Active`,
            `Pricing Option`,
            `Pricing Option Active Tablet`,
            `Pricing Option Tablet`,
            `Pricing Option Phone Active`,
            `Pricing Option Phone`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
        XQka0aZ4p: {
          defaultValue: `Advance plan`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
        lViGTnkje: {
          defaultValue: `Advance pack + $100k loan`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
        PSNsc43XR: { defaultValue: `$499`, displayTextArea: !1, title: `Price`, type: B.String },
        bvidXN9uU: { title: `Click`, type: B.EventHandler },
      }),
      F(
        Rs,
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
          ...N(ot),
          ...N(We),
          ...N(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s = e(() => {
    (f(),
      j(),
      T(),
      i(),
      He(),
      Ts(),
      Re(),
      zs(),
      (Bs = M(Rs)),
      (Vs = M(ws)),
      (Hs = M(ze)),
      (Us = [
        `DsygKtdML`,
        `k3U2czZOQ`,
        `LUdyZXEPN`,
        `Uja52hYWG`,
        `XCGuvxub0`,
        `VG6Wf5knd`,
        `LfURzUFEZ`,
        `BoriplKT_`,
        `k6_zbA7IG`,
      ]),
      (Ws = `framer-dp6Ey`),
      (Gs = {
        BoriplKT_: `framer-v-u1thuq`,
        DsygKtdML: `framer-v-jjlov3`,
        k3U2czZOQ: `framer-v-gnzug3`,
        k6_zbA7IG: `framer-v-3712p5`,
        LfURzUFEZ: `framer-v-11ignvx`,
        LUdyZXEPN: `framer-v-1411swd`,
        Uja52hYWG: `framer-v-1yro8of`,
        VG6Wf5knd: `framer-v-17je41z`,
        XCGuvxub0: `framer-v-197mz0c`,
      }),
      (Ks = { delay: 0, duration: 0.35, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (qs = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Js = b.create(a)),
      (Ys = {
        "Pricing Tab/01 Phone": `LfURzUFEZ`,
        "Pricing Tab/01 Tablet": `Uja52hYWG`,
        "Pricing Tab/01": `DsygKtdML`,
        "Pricing Tab/02 Phone": `BoriplKT_`,
        "Pricing Tab/02 Tablet": `XCGuvxub0`,
        "Pricing Tab/02": `k3U2czZOQ`,
        "Pricing Tab/03 Phone": `k6_zbA7IG`,
        "Pricing Tab/03 Tablet": `VG6Wf5knd`,
        "Pricing Tab/03": `LUdyZXEPN`,
      }),
      (Xs = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ys[r.variant] ?? r.variant ?? `DsygKtdML`,
      })),
      (Zs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qs = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z(),
            c = ie(),
            { style: l, className: d, layoutId: f, variant: p, ...m } = Xs(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = pe({
              cycleOrder: Us,
              defaultVariant: `DsygKtdML`,
              ref: r,
              variant: p,
              variantClassNames: Gs,
            }),
            A = Zs(e, k),
            { activeVariantCallback: j, delay: M } = ue(_),
            N = j(async (...e) => {
              D(`DsygKtdML`);
            }),
            P = j(async (...e) => {
              D(`Uja52hYWG`);
            }),
            F = j(async (...e) => {
              D(`LfURzUFEZ`);
            }),
            I = j(async (...e) => {
              D(`k3U2czZOQ`);
            }),
            te = j(async (...e) => {
              D(`XCGuvxub0`);
            }),
            R = j(async (...e) => {
              D(`BoriplKT_`);
            }),
            ne = j(async (...e) => {
              D(`LUdyZXEPN`);
            }),
            re = j(async (...e) => {
              D(`VG6Wf5knd`);
            }),
            B = j(async (...e) => {
              D(`k6_zbA7IG`);
            }),
            ae = V(Ws, Ge);
          return (
            ee(),
            h(S, {
              id: f ?? i,
              children: h(Js, {
                animate: k,
                initial: !1,
                children: h(qs, {
                  value: Ks,
                  children: g(b.div, {
                    ...m,
                    ...C,
                    className: V(ae, `framer-jjlov3`, d, y),
                    "data-border": !0,
                    "data-framer-name": `Pricing Tab/01`,
                    layoutDependency: A,
                    layoutId: `DsygKtdML`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, rgb(235, 238, 243))`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      ...l,
                    },
                    ...Q(
                      {
                        BoriplKT_: { "data-framer-name": `Pricing Tab/02 Phone` },
                        k3U2czZOQ: { "data-framer-name": `Pricing Tab/02` },
                        k6_zbA7IG: { "data-framer-name": `Pricing Tab/03 Phone` },
                        LfURzUFEZ: { "data-framer-name": `Pricing Tab/01 Phone` },
                        LUdyZXEPN: { "data-framer-name": `Pricing Tab/03` },
                        Uja52hYWG: { "data-framer-name": `Pricing Tab/01 Tablet` },
                        VG6Wf5knd: { "data-framer-name": `Pricing Tab/03 Tablet` },
                        XCGuvxub0: { "data-framer-name": `Pricing Tab/02 Tablet` },
                      },
                      _,
                      w
                    ),
                    children: [
                      g(b.div, {
                        className: `framer-mf4msr`,
                        "data-framer-name": `Pricing Options Wrapper`,
                        layoutDependency: A,
                        layoutId: `NMrXbjuFN`,
                        children: [
                          h(H, {
                            height: 113,
                            width: `min(max((${c?.width || `100vw`} - 30px) / 2, 1px), 490px)`,
                            y: (c?.y || 0) + (10 + ((c?.height || 378) - 20 - 359) / 2) + 0 + 0,
                            ...Q(
                              {
                                BoriplKT_: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                k6_zbA7IG: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                LfURzUFEZ: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                Uja52hYWG: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                VG6Wf5knd: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                XCGuvxub0: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                              },
                              _,
                              w
                            ),
                            children: h(O, {
                              className: `framer-1o124w7-container`,
                              layoutDependency: A,
                              layoutId: `wNVvXjdSM-container`,
                              nodeId: `wNVvXjdSM`,
                              rendersWithMotion: !0,
                              scopeId: `CbQX2EoH0`,
                              children: h(Rs, {
                                bvidXN9uU: N,
                                height: `100%`,
                                id: `wNVvXjdSM`,
                                layoutId: `wNVvXjdSM`,
                                lViGTnkje: `Build your low-code foundation`,
                                PSNsc43XR: `$399`,
                                style: { width: `100%` },
                                variant: `CUnwaBkiy`,
                                width: `100%`,
                                XQka0aZ4p: `Basic plan`,
                                ...Q(
                                  {
                                    BoriplKT_: { bvidXN9uU: F, variant: `xABAO630y` },
                                    k3U2czZOQ: { variant: `I03hsvnUZ` },
                                    k6_zbA7IG: { bvidXN9uU: F, variant: `xABAO630y` },
                                    LfURzUFEZ: { bvidXN9uU: F, variant: `GFoVij2hI` },
                                    LUdyZXEPN: { variant: `I03hsvnUZ` },
                                    Uja52hYWG: { bvidXN9uU: P, variant: `RqEpCbaxu` },
                                    VG6Wf5knd: { bvidXN9uU: P, variant: `si1T6iezj` },
                                    XCGuvxub0: { bvidXN9uU: P, variant: `si1T6iezj` },
                                  },
                                  _,
                                  w
                                ),
                              }),
                            }),
                          }),
                          h(H, {
                            height: 113,
                            width: `min(max((${c?.width || `100vw`} - 30px) / 2, 1px), 490px)`,
                            y: (c?.y || 0) + (10 + ((c?.height || 378) - 20 - 359) / 2) + 0 + 123,
                            ...Q(
                              {
                                BoriplKT_: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    123,
                                },
                                k6_zbA7IG: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    123,
                                },
                                LfURzUFEZ: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    123,
                                },
                                Uja52hYWG: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    123,
                                },
                                VG6Wf5knd: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    123,
                                },
                                XCGuvxub0: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    123,
                                },
                              },
                              _,
                              w
                            ),
                            children: h(O, {
                              className: `framer-1betxgs-container`,
                              layoutDependency: A,
                              layoutId: `f2_6sgZRn-container`,
                              nodeId: `f2_6sgZRn`,
                              rendersWithMotion: !0,
                              scopeId: `CbQX2EoH0`,
                              children: h(Rs, {
                                bvidXN9uU: I,
                                height: `100%`,
                                id: `f2_6sgZRn`,
                                layoutId: `f2_6sgZRn`,
                                lViGTnkje: `Enterprise-grade low-code systems`,
                                PSNsc43XR: `$499`,
                                style: { width: `100%` },
                                variant: `I03hsvnUZ`,
                                width: `100%`,
                                XQka0aZ4p: `Advance plan`,
                                ...Q(
                                  {
                                    BoriplKT_: { bvidXN9uU: R, variant: `GFoVij2hI` },
                                    k3U2czZOQ: { variant: `CUnwaBkiy` },
                                    k6_zbA7IG: { bvidXN9uU: R, variant: `xABAO630y` },
                                    LfURzUFEZ: { bvidXN9uU: R, variant: `xABAO630y` },
                                    Uja52hYWG: { bvidXN9uU: te, variant: `si1T6iezj` },
                                    VG6Wf5knd: { bvidXN9uU: te, variant: `si1T6iezj` },
                                    XCGuvxub0: { bvidXN9uU: te, variant: `RqEpCbaxu` },
                                  },
                                  _,
                                  w
                                ),
                              }),
                            }),
                          }),
                          h(H, {
                            height: 113,
                            width: `min(max((${c?.width || `100vw`} - 30px) / 2, 1px), 490px)`,
                            y: (c?.y || 0) + (10 + ((c?.height || 378) - 20 - 359) / 2) + 0 + 246,
                            ...Q(
                              {
                                BoriplKT_: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    246,
                                },
                                k6_zbA7IG: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    246,
                                },
                                LfURzUFEZ: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 931) - 20 - 887) / 2 + 0 + 0) +
                                    0 +
                                    246,
                                },
                                Uja52hYWG: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    246,
                                },
                                VG6Wf5knd: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    246,
                                },
                                XCGuvxub0: {
                                  width: `calc(${c?.width || `100vw`} - 20px)`,
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 709) - 20 - 769) / 2 + 0 + 0) +
                                    0 +
                                    246,
                                },
                              },
                              _,
                              w
                            ),
                            children: h(O, {
                              className: `framer-ubyx8g-container`,
                              layoutDependency: A,
                              layoutId: `YA2egHTOe-container`,
                              nodeId: `YA2egHTOe`,
                              rendersWithMotion: !0,
                              scopeId: `CbQX2EoH0`,
                              children: h(Rs, {
                                bvidXN9uU: ne,
                                height: `100%`,
                                id: `YA2egHTOe`,
                                layoutId: `YA2egHTOe`,
                                lViGTnkje: `Powerful low-code solutions`,
                                PSNsc43XR: `$999`,
                                style: { width: `100%` },
                                variant: `I03hsvnUZ`,
                                width: `100%`,
                                XQka0aZ4p: `Corporate plan`,
                                ...Q(
                                  {
                                    BoriplKT_: { bvidXN9uU: B, variant: `xABAO630y` },
                                    k6_zbA7IG: { bvidXN9uU: B, variant: `GFoVij2hI` },
                                    LfURzUFEZ: { bvidXN9uU: B, variant: `xABAO630y` },
                                    LUdyZXEPN: { variant: `CUnwaBkiy` },
                                    Uja52hYWG: { bvidXN9uU: re, variant: `si1T6iezj` },
                                    VG6Wf5knd: { bvidXN9uU: re, variant: `RqEpCbaxu` },
                                    XCGuvxub0: { bvidXN9uU: re, variant: `si1T6iezj` },
                                  },
                                  _,
                                  w
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      g(b.div, {
                        className: `framer-1473pux`,
                        "data-framer-name": `Price Card`,
                        layoutDependency: A,
                        layoutId: `VlF6K0QNq`,
                        style: {
                          backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: [
                          g(b.div, {
                            className: `framer-hsi09i`,
                            "data-framer-name": `List Wrapper`,
                            layoutDependency: A,
                            layoutId: `A3ei1VFtv`,
                            children: [
                              g(b.div, {
                                className: `framer-19s5prq`,
                                "data-framer-name": `List`,
                                layoutDependency: A,
                                layoutId: `rr3unf_rN`,
                                children: [
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-1dvgnhp-container`,
                                      layoutDependency: A,
                                      layoutId: `m5nf47rUq-container`,
                                      nodeId: `m5nf47rUq`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Low-code basics`,
                                        height: `100%`,
                                        id: `m5nf47rUq`,
                                        layoutId: `m5nf47rUq`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            BoriplKT_: { bAJTrZ1xP: `Advanced Low-code topics` },
                                            k3U2czZOQ: { bAJTrZ1xP: `Advanced Low-code topics` },
                                            k6_zbA7IG: { bAJTrZ1xP: `Certification included` },
                                            LUdyZXEPN: { bAJTrZ1xP: `Certification included` },
                                            VG6Wf5knd: { bAJTrZ1xP: `Certification included` },
                                            XCGuvxub0: { bAJTrZ1xP: `Advanced Low-code topics` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      38,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            38,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            38,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            38,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-q2ugtb-container`,
                                      layoutDependency: A,
                                      layoutId: `bj0h62gfA-container`,
                                      nodeId: `bj0h62gfA`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Custom project review`,
                                        height: `100%`,
                                        id: `bj0h62gfA`,
                                        layoutId: `bj0h62gfA`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            BoriplKT_: { bAJTrZ1xP: `Community learning access` },
                                            k3U2czZOQ: { bAJTrZ1xP: `Community learning access` },
                                            XCGuvxub0: { bAJTrZ1xP: `Community learning access` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      76,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            68,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            68,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            68,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            76,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            76,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            76,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-16r0aub-container`,
                                      layoutDependency: A,
                                      layoutId: `cPJevhIQh-container`,
                                      nodeId: `cPJevhIQh`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Guided beginner lessons`,
                                        height: `100%`,
                                        id: `cPJevhIQh`,
                                        layoutId: `cPJevhIQh`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            k6_zbA7IG: { bAJTrZ1xP: `Email support` },
                                            LUdyZXEPN: { bAJTrZ1xP: `Email support` },
                                            VG6Wf5knd: { bAJTrZ1xP: `Email support` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      114,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            102,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            102,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            102,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            114,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            114,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            114,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-mhdf03-container`,
                                      layoutDependency: A,
                                      layoutId: `pynyxqJGh-container`,
                                      nodeId: `pynyxqJGh`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Certification included`,
                                        height: `100%`,
                                        id: `pynyxqJGh`,
                                        layoutId: `pynyxqJGh`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            BoriplKT_: { bAJTrZ1xP: `Ready-made core templates` },
                                            k3U2czZOQ: { bAJTrZ1xP: `Ready-made core templates` },
                                            XCGuvxub0: { bAJTrZ1xP: `Ready-made core templates` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              g(b.div, {
                                className: `framer-b6keiw`,
                                "data-framer-name": `List`,
                                layoutDependency: A,
                                layoutId: `pQ0ghI56L`,
                                children: [
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            0,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            0,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            0,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-71caqi-container`,
                                      layoutDependency: A,
                                      layoutId: `JpqFyia56-container`,
                                      nodeId: `JpqFyia56`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Ready-made core templates`,
                                        height: `100%`,
                                        id: `JpqFyia56`,
                                        layoutId: `JpqFyia56`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            BoriplKT_: { bAJTrZ1xP: `Certification included` },
                                            k3U2czZOQ: { bAJTrZ1xP: `Certification included` },
                                            k6_zbA7IG: { bAJTrZ1xP: `Advanced Low-code topics` },
                                            LUdyZXEPN: { bAJTrZ1xP: `Advanced Low-code topics` },
                                            VG6Wf5knd: { bAJTrZ1xP: `Advanced Low-code topics` },
                                            XCGuvxub0: { bAJTrZ1xP: `Certification included` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      38,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            34,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            34,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            34,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            38,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            38,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            38,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-1vis4u7-container`,
                                      layoutDependency: A,
                                      layoutId: `n34sZA0xr-container`,
                                      nodeId: `n34sZA0xr`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Community learning access`,
                                        height: `100%`,
                                        id: `n34sZA0xr`,
                                        layoutId: `n34sZA0xr`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            BoriplKT_: { bAJTrZ1xP: `Custom project review` },
                                            k3U2czZOQ: { bAJTrZ1xP: `Custom project review` },
                                            XCGuvxub0: { bAJTrZ1xP: `Custom project review` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                  h(H, {
                                    height: 18,
                                    width: `max((max((${c?.width || `100vw`} - 30px) / 2, 1px) - 90px) / 2, 1px)`,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      0 +
                                      0 +
                                      0 +
                                      76,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            68,
                                        },
                                        k6_zbA7IG: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            68,
                                        },
                                        LfURzUFEZ: {
                                          width: `calc(${c?.width || `100vw`} - 60px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            0 +
                                            0 +
                                            136 +
                                            0 +
                                            68,
                                        },
                                        Uja52hYWG: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            76,
                                        },
                                        VG6Wf5knd: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            76,
                                        },
                                        XCGuvxub0: {
                                          width: `max((${c?.width || `100vw`} - 110px) / 2, 1px)`,
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            76,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-1ycoqst-container`,
                                      layoutDependency: A,
                                      layoutId: `kw_EoL_eC-container`,
                                      nodeId: `kw_EoL_eC`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ws, {
                                        bAJTrZ1xP: `Email support`,
                                        height: `100%`,
                                        id: `kw_EoL_eC`,
                                        layoutId: `kw_EoL_eC`,
                                        style: { width: `100%` },
                                        variant: `JSFUcD0W7`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            k6_zbA7IG: { bAJTrZ1xP: `Guided beginner lessons` },
                                            LUdyZXEPN: { bAJTrZ1xP: `Guided beginner lessons` },
                                            VG6Wf5knd: { bAJTrZ1xP: `Guided beginner lessons` },
                                          },
                                          _,
                                          w
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(b.div, {
                            className: `framer-1y2pt5a`,
                            "data-framer-name": `Button and Text`,
                            layoutDependency: A,
                            layoutId: `pE1JR0HED`,
                            children: [
                              h(W, {
                                __fromCanvasComponent: !0,
                                children: h(a, {
                                  children: h(b.p, {
                                    className: `framer-styles-preset-1gmq7go`,
                                    "data-styles-preset": `cUaervyv9`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                    },
                                    children: `Not sure? Try Pro Plan free for 7 days! No credit card required.`,
                                  }),
                                }),
                                className: `framer-mdcbbn`,
                                "data-framer-name": `💡 Not sure? Try Pro Plan free for 7 days! No credit card required.`,
                                fonts: [`Inter`],
                                layoutDependency: A,
                                layoutId: `qnzCgWLuU`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(L, {
                                links: [
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  h(H, {
                                    height: 52,
                                    y:
                                      (c?.y || 0) +
                                      (10 + ((c?.height || 378) - 20 - 434) / 2) +
                                      40 +
                                      226 +
                                      38,
                                    ...Q(
                                      {
                                        BoriplKT_: {
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            262 +
                                            0 +
                                            144,
                                        },
                                        k6_zbA7IG: {
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            262 +
                                            0 +
                                            144,
                                        },
                                        LfURzUFEZ: {
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 931) - 20 - 887) / 2 + 359 + 10) +
                                            30 +
                                            262 +
                                            0 +
                                            144,
                                        },
                                        Uja52hYWG: {
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            192 +
                                            38,
                                        },
                                        VG6Wf5knd: {
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            192 +
                                            38,
                                        },
                                        XCGuvxub0: {
                                          y:
                                            (c?.y || 0) +
                                            10 +
                                            (((c?.height || 709) - 20 - 769) / 2 + 359 + 10) +
                                            40 +
                                            192 +
                                            38,
                                        },
                                      },
                                      _,
                                      w
                                    ),
                                    children: h(O, {
                                      className: `framer-vebwh1-container`,
                                      layoutDependency: A,
                                      layoutId: `HPdYoohhh-container`,
                                      nodeId: `HPdYoohhh`,
                                      rendersWithMotion: !0,
                                      scopeId: `CbQX2EoH0`,
                                      children: h(ze, {
                                        BtsQvUJh8: `Enroll now`,
                                        FoLVmcAEo: e[0],
                                        height: `100%`,
                                        id: `HPdYoohhh`,
                                        layoutId: `HPdYoohhh`,
                                        variant: `DbpjEfRXU`,
                                        width: `100%`,
                                        ...Q(
                                          {
                                            BoriplKT_: { FoLVmcAEo: e[7] },
                                            k3U2czZOQ: { FoLVmcAEo: e[1] },
                                            k6_zbA7IG: { FoLVmcAEo: e[8] },
                                            LfURzUFEZ: { FoLVmcAEo: e[6] },
                                            LUdyZXEPN: { FoLVmcAEo: e[2] },
                                            Uja52hYWG: { FoLVmcAEo: e[3] },
                                            VG6Wf5knd: { FoLVmcAEo: e[5] },
                                            XCGuvxub0: { FoLVmcAEo: e[4] },
                                          },
                                          _,
                                          w
                                        ),
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
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-dp6Ey.framer-gk7phs, .framer-dp6Ey .framer-gk7phs { display: block; }`,
          `.framer-dp6Ey.framer-jjlov3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 1200px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dp6Ey .framer-mf4msr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 490px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-dp6Ey .framer-1o124w7-container, .framer-dp6Ey .framer-1betxgs-container, .framer-dp6Ey .framer-ubyx8g-container, .framer-dp6Ey .framer-1dvgnhp-container, .framer-dp6Ey .framer-q2ugtb-container, .framer-dp6Ey .framer-16r0aub-container, .framer-dp6Ey .framer-mhdf03-container, .framer-dp6Ey .framer-71caqi-container, .framer-dp6Ey .framer-1vis4u7-container, .framer-dp6Ey .framer-1ycoqst-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-dp6Ey .framer-1473pux { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 94px; height: min-content; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
          `.framer-dp6Ey .framer-hsi09i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-dp6Ey .framer-19s5prq, .framer-dp6Ey .framer-b6keiw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-dp6Ey .framer-1y2pt5a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-dp6Ey .framer-mdcbbn { flex: 1 0 0px; height: auto; max-width: 370px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-dp6Ey .framer-vebwh1-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-dp6Ey.framer-v-1yro8of.framer-jjlov3, .framer-dp6Ey.framer-v-197mz0c.framer-jjlov3, .framer-dp6Ey.framer-v-17je41z.framer-jjlov3 { flex-direction: column; width: 750px; }`,
          `.framer-dp6Ey.framer-v-1yro8of .framer-mf4msr, .framer-dp6Ey.framer-v-197mz0c .framer-mf4msr, .framer-dp6Ey.framer-v-17je41z .framer-mf4msr, .framer-dp6Ey.framer-v-11ignvx .framer-mf4msr, .framer-dp6Ey.framer-v-u1thuq .framer-mf4msr, .framer-dp6Ey.framer-v-3712p5 .framer-mf4msr { flex: none; max-width: unset; width: 100%; }`,
          `.framer-dp6Ey.framer-v-1yro8of .framer-1473pux, .framer-dp6Ey.framer-v-197mz0c .framer-1473pux, .framer-dp6Ey.framer-v-17je41z .framer-1473pux { flex: none; gap: 60px; width: 100%; }`,
          `.framer-dp6Ey.framer-v-11ignvx.framer-jjlov3, .framer-dp6Ey.framer-v-u1thuq.framer-jjlov3, .framer-dp6Ey.framer-v-3712p5.framer-jjlov3 { flex-direction: column; width: 350px; }`,
          `.framer-dp6Ey.framer-v-11ignvx .framer-1473pux, .framer-dp6Ey.framer-v-u1thuq .framer-1473pux, .framer-dp6Ey.framer-v-3712p5 .framer-1473pux { flex: none; gap: 40px; padding: 30px 20px 30px 20px; width: 100%; }`,
          `.framer-dp6Ey.framer-v-11ignvx .framer-hsi09i, .framer-dp6Ey.framer-v-u1thuq .framer-hsi09i, .framer-dp6Ey.framer-v-3712p5 .framer-hsi09i { flex-direction: column; gap: 16px; }`,
          `.framer-dp6Ey.framer-v-11ignvx .framer-19s5prq, .framer-dp6Ey.framer-v-11ignvx .framer-b6keiw, .framer-dp6Ey.framer-v-u1thuq .framer-19s5prq, .framer-dp6Ey.framer-v-u1thuq .framer-b6keiw, .framer-dp6Ey.framer-v-3712p5 .framer-19s5prq, .framer-dp6Ey.framer-v-3712p5 .framer-b6keiw { flex: none; gap: 16px; width: 100%; }`,
          `.framer-dp6Ey.framer-v-11ignvx .framer-1y2pt5a, .framer-dp6Ey.framer-v-u1thuq .framer-1y2pt5a, .framer-dp6Ey.framer-v-3712p5 .framer-1y2pt5a { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: flex-start; }`,
          `.framer-dp6Ey.framer-v-11ignvx .framer-mdcbbn, .framer-dp6Ey.framer-v-u1thuq .framer-mdcbbn, .framer-dp6Ey.framer-v-3712p5 .framer-mdcbbn { flex: none; width: 100%; }`,
          ...Ue,
          `.framer-dp6Ey[data-border="true"]::after, .framer-dp6Ey [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-dp6Ey`
      )),
      (Qs.displayName = `Pricing Tab`),
      (Qs.defaultProps = { height: 378, width: 1200 }),
      k(Qs, {
        variant: {
          options: [
            `DsygKtdML`,
            `k3U2czZOQ`,
            `LUdyZXEPN`,
            `Uja52hYWG`,
            `XCGuvxub0`,
            `VG6Wf5knd`,
            `LfURzUFEZ`,
            `BoriplKT_`,
            `k6_zbA7IG`,
          ],
          optionTitles: [
            `Pricing Tab/01`,
            `Pricing Tab/02`,
            `Pricing Tab/03`,
            `Pricing Tab/01 Tablet`,
            `Pricing Tab/02 Tablet`,
            `Pricing Tab/03 Tablet`,
            `Pricing Tab/01 Phone`,
            `Pricing Tab/02 Phone`,
            `Pricing Tab/03 Phone`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      F(
        Qs,
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
          ...Bs,
          ...Vs,
          ...Hs,
          ...N(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
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
  dc = e(() => {
    (f(),
      j(),
      T(),
      i(),
      He(),
      Pe(),
      ye(),
      ct(),
      it(),
      (tc = [`EgyrZXfnj`, `hM7a1s_mX`]),
      (nc = `framer-8fLvc`),
      (rc = { EgyrZXfnj: `framer-v-1nbeptj`, hM7a1s_mX: `framer-v-1shlkxp` }),
      (ic = { delay: 0, duration: 0.35, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ac = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (oc = b.create(a)),
      (sc = { "Curriculum Card Closed": `hM7a1s_mX`, "Curriculum Card Open": `EgyrZXfnj` }),
      (cc = ({
        click: e,
        duration: t,
        feature01: n,
        feature02: r,
        feature03: i,
        feature04: a,
        height: o,
        id: s,
        link: c,
        modules: l,
        text: u,
        title: d,
        width: f,
        ...p
      }) => ({
        ...p,
        AQhtg0C45: e ?? p.AQhtg0C45,
        exgTt0aTW:
          u ??
          p.exgTt0aTW ??
          `You get battle-tested workflows, tool mastery, conversion-focused design knowledge, and practical project guidance. The goal: make you a confident low-code developer in the shortest possible time.`,
        fbKNjmYzv: l ?? p.fbKNjmYzv ?? `Module 02`,
        g3zBCSRSt: t ?? p.g3zBCSRSt ?? `Week 02`,
        Io4Uxw_2h:
          a ?? p.Io4Uxw_2h ?? `Solution: Define spacing, padding, and margins consistently.`,
        kWDGvmt7X:
          r ?? p.kWDGvmt7X ?? `Listing: List all sections, content types, and key elements`,
        Ry7XTFSuB:
          i ??
          p.Ry7XTFSuB ??
          `Styling: Decide which modern style aligns with your brand & project.`,
        variant: sc[p.variant] ?? p.variant ?? `EgyrZXfnj`,
        XAVqYJh84: c ?? p.XAVqYJh84,
        XKRtj3wvY: n ?? p.XKRtj3wvY ?? `Identify: Find the purpose of the page or project`,
        yynZBasrm: d ?? p.yynZBasrm ?? `Build complex layouts`,
      })),
      (lc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (uc = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z();
          ie();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              g3zBCSRSt: p,
              fbKNjmYzv: m,
              yynZBasrm: _,
              XKRtj3wvY: y,
              kWDGvmt7X: x,
              Ry7XTFSuB: C,
              Io4Uxw_2h: w,
              exgTt0aTW: T,
              XAVqYJh84: E,
              AQhtg0C45: D,
              ...O
            } = cc(e),
            {
              baseVariant: k,
              classNames: A,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: P,
              setGestureState: F,
              setVariant: I,
              variants: ee,
            } = pe({
              cycleOrder: tc,
              defaultVariant: `EgyrZXfnj`,
              ref: r,
              variant: f,
              variantClassNames: rc,
            }),
            L = lc(e, ee),
            { activeVariantCallback: te, delay: R } = ue(k),
            ne = te(async (...e) => {
              if ((F({ isPressed: !1 }), D && (await D(...e)) === !1)) return !1;
              I(`hM7a1s_mX`);
            }),
            re = te(async (...e) => {
              if ((F({ isPressed: !1 }), D && (await D(...e)) === !1)) return !1;
              I(`EgyrZXfnj`);
            }),
            B = V(nc, ve, st, Ge, Le, dt);
          return h(S, {
            id: d ?? i,
            children: h(oc, {
              animate: ee,
              initial: !1,
              children: h(ac, {
                value: ic,
                children: g(b.div, {
                  ...O,
                  ...M,
                  className: V(B, `framer-1nbeptj`, l, A),
                  "data-framer-name": `Curriculum Card Open`,
                  "data-highlight": !0,
                  layoutDependency: L,
                  layoutId: `EgyrZXfnj`,
                  onTap: ne,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  ...ec(
                    { hM7a1s_mX: { "data-framer-name": `Curriculum Card Closed`, onTap: re } },
                    k,
                    N
                  ),
                  children: [
                    g(b.div, {
                      className: `framer-fvkm16`,
                      "data-framer-name": `Title and Icon`,
                      layoutDependency: L,
                      layoutId: `OkEpVYl74`,
                      children: [
                        g(b.div, {
                          className: `framer-79v6a5`,
                          "data-framer-name": `Title and Info`,
                          layoutDependency: L,
                          layoutId: `dhMv0VeXm`,
                          children: [
                            g(b.div, {
                              className: `framer-12l4luh`,
                              "data-framer-name": `Info Wrapper`,
                              layoutDependency: L,
                              layoutId: `oL82g54g8`,
                              children: [
                                h(W, {
                                  __fromCanvasComponent: !0,
                                  children: h(a, {
                                    children: h(b.p, {
                                      className: `framer-styles-preset-1yo9nb5`,
                                      "data-styles-preset": `qN3uIbesA`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                      },
                                      children: `Week 02`,
                                    }),
                                  }),
                                  className: `framer-1ph5hlr`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `VnepBD6P5`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: p,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                h(W, {
                                  __fromCanvasComponent: !0,
                                  children: h(a, {
                                    children: h(b.p, {
                                      className: `framer-styles-preset-1yo9nb5`,
                                      "data-styles-preset": `qN3uIbesA`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                      },
                                      children: `:`,
                                    }),
                                  }),
                                  className: `framer-1h1g751`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `Gpr21fzHu`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                h(W, {
                                  __fromCanvasComponent: !0,
                                  children: h(a, {
                                    children: h(b.p, {
                                      className: `framer-styles-preset-1yo9nb5`,
                                      "data-styles-preset": `qN3uIbesA`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                      },
                                      children: `Module 02`,
                                    }),
                                  }),
                                  className: `framer-1212kmc`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `UxCnSeXTb`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: m,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.h6, {
                                  className: `framer-styles-preset-1bk5v37`,
                                  "data-styles-preset": `wmi7dzLRt`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                  },
                                  children: `Build complex layouts`,
                                }),
                              }),
                              className: `framer-sofxnu`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `c71lqCm96`,
                              style: {
                                "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        g(b.div, {
                          className: `framer-4wzfp5`,
                          "data-framer-name": `Icon Wrapper`,
                          layoutDependency: L,
                          layoutId: `QT4QPyUGO`,
                          style: {
                            backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          children: [
                            h(b.div, {
                              className: `framer-zdkyva`,
                              "data-framer-name": `Line`,
                              layoutDependency: L,
                              layoutId: `ovJA47Xgy`,
                              style: {
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                rotate: 0,
                              },
                              variants: { hM7a1s_mX: { rotate: 90 } },
                            }),
                            h(b.div, {
                              className: `framer-1o9a7cd`,
                              "data-framer-name": `Line`,
                              layoutDependency: L,
                              layoutId: `LzsvgTedX`,
                              style: {
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    g(b.div, {
                      className: `framer-1u8evq1`,
                      "data-framer-name": `Feature Wrapper`,
                      layoutDependency: L,
                      layoutId: `FaC8bJZdo`,
                      style: { opacity: 1 },
                      variants: { hM7a1s_mX: { opacity: 0 } },
                      children: [
                        h(b.div, {
                          className: `framer-1obuxje`,
                          "data-framer-name": `line`,
                          layoutDependency: L,
                          layoutId: `TzTNDYYzO`,
                          style: {
                            backgroundColor: `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                          },
                        }),
                        g(b.div, {
                          className: `framer-3eu6mp`,
                          "data-framer-name": `Feature 01`,
                          layoutDependency: L,
                          layoutId: `IiAvNJTzY`,
                          children: [
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `Identify: Find the purpose of the page or project`,
                                }),
                              }),
                              className: `framer-i6csdt`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `T1Sg37HSG`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `01`,
                                }),
                              }),
                              className: `framer-dm0ova`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `dcII7XlSa`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                                opacity: 0.8,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(b.div, {
                          className: `framer-194k1qp`,
                          "data-framer-name": `line`,
                          layoutDependency: L,
                          layoutId: `N68XKJ9VU`,
                          style: {
                            backgroundColor: `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                          },
                        }),
                        g(b.div, {
                          className: `framer-14pujj1`,
                          "data-framer-name": `Feature 02`,
                          layoutDependency: L,
                          layoutId: `OfdQSNopW`,
                          children: [
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `Listing: List all sections, content types, and key elements`,
                                }),
                              }),
                              className: `framer-oqx66o`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `zyfPOICQ7`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: x,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `02`,
                                }),
                              }),
                              className: `framer-rm1vpe`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `e9qepCHTg`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                                opacity: 0.8,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(b.div, {
                          className: `framer-h2ru0j`,
                          "data-framer-name": `line`,
                          layoutDependency: L,
                          layoutId: `e2UxD9O0N`,
                          style: {
                            backgroundColor: `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                          },
                        }),
                        g(b.div, {
                          className: `framer-ynn8vv`,
                          "data-framer-name": `Feature 03`,
                          layoutDependency: L,
                          layoutId: `KVa3eWFqj`,
                          children: [
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `Styling: Decide which modern style aligns with your brand & project.`,
                                }),
                              }),
                              className: `framer-1rq1eh4`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `OZfJOjMe2`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: C,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `03`,
                                }),
                              }),
                              className: `framer-191uh7m`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `T76vl9bEx`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                                opacity: 0.8,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(b.div, {
                          className: `framer-1aakt19`,
                          "data-framer-name": `line`,
                          layoutDependency: L,
                          layoutId: `UPTZ7QFKO`,
                          style: {
                            backgroundColor: `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                          },
                        }),
                        g(b.div, {
                          className: `framer-gde16d`,
                          "data-framer-name": `Feature 04`,
                          layoutDependency: L,
                          layoutId: `Yczo1pBbV`,
                          children: [
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `Solution: Define spacing, padding, and margins consistently.`,
                                }),
                              }),
                              className: `framer-h40rxp`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `drzwXGIej`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: w,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `04`,
                                }),
                              }),
                              className: `framer-otdnrq`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `QyDCyPybO`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                                opacity: 0.8,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(b.div, {
                          className: `framer-11lyg3n`,
                          "data-framer-name": `line`,
                          layoutDependency: L,
                          layoutId: `MnQs4g4Z0`,
                          style: {
                            backgroundColor: `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                          },
                        }),
                        g(b.div, {
                          className: `framer-cfp81z`,
                          "data-framer-name": `Text and Link`,
                          layoutDependency: L,
                          layoutId: `y8gXgIsEK`,
                          children: [
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1gmq7go`,
                                  "data-styles-preset": `cUaervyv9`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                  },
                                  children: `You get battle-tested workflows, tool mastery, conversion-focused design knowledge, and practical project guidance. The goal: make you a confident low-code developer in the shortest possible time.`,
                                }),
                              }),
                              className: `framer-1mdenwi`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `DYYm3OIYO`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(W, {
                              __fromCanvasComponent: !0,
                              children: h(a, {
                                children: h(b.p, {
                                  className: `framer-styles-preset-1edo0ga`,
                                  "data-styles-preset": `ilN_pt0Gn`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                  },
                                  children: h(ce, {
                                    href: E,
                                    motionChild: !0,
                                    nodeId: `zLdVYgRgG`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `KgU_iAHMd`,
                                    smoothScroll: !1,
                                    children: h(b.a, {
                                      className: `framer-styles-preset-1das0kl`,
                                      "data-styles-preset": `Ra2J5G4be`,
                                      children: `contact me`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-11avbn3`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `zLdVYgRgG`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
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
          `.framer-8fLvc.framer-b3ulw8, .framer-8fLvc .framer-b3ulw8 { display: block; }`,
          `.framer-8fLvc.framer-1nbeptj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 620px; }`,
          `.framer-8fLvc .framer-fvkm16 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8fLvc .framer-79v6a5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-8fLvc .framer-12l4luh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8fLvc .framer-1ph5hlr, .framer-8fLvc .framer-1h1g751, .framer-8fLvc .framer-1212kmc, .framer-8fLvc .framer-dm0ova, .framer-8fLvc .framer-rm1vpe, .framer-8fLvc .framer-191uh7m, .framer-8fLvc .framer-otdnrq, .framer-8fLvc .framer-11avbn3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8fLvc .framer-sofxnu, .framer-8fLvc .framer-1mdenwi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-8fLvc .framer-4wzfp5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8fLvc .framer-zdkyva { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 16px; z-index: 1; }`,
          `.framer-8fLvc .framer-1o9a7cd { flex: none; height: 2px; overflow: visible; position: relative; width: 16px; }`,
          `.framer-8fLvc .framer-1u8evq1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8fLvc .framer-1obuxje, .framer-8fLvc .framer-194k1qp, .framer-8fLvc .framer-h2ru0j, .framer-8fLvc .framer-1aakt19, .framer-8fLvc .framer-11lyg3n { flex: none; height: 1px; position: relative; width: 100%; }`,
          `.framer-8fLvc .framer-3eu6mp, .framer-8fLvc .framer-14pujj1, .framer-8fLvc .framer-ynn8vv, .framer-8fLvc .framer-gde16d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8fLvc .framer-i6csdt, .framer-8fLvc .framer-oqx66o, .framer-8fLvc .framer-1rq1eh4, .framer-8fLvc .framer-h40rxp { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-8fLvc .framer-cfp81z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8fLvc.framer-v-1shlkxp.framer-1nbeptj { gap: 0px; }`,
          `.framer-8fLvc.framer-v-1shlkxp .framer-1u8evq1 { height: 1px; }`,
          `.framer-8fLvc.framer-v-1shlkxp .framer-3eu6mp, .framer-8fLvc.framer-v-1shlkxp .framer-14pujj1, .framer-8fLvc.framer-v-1shlkxp .framer-ynn8vv, .framer-8fLvc.framer-v-1shlkxp .framer-gde16d, .framer-8fLvc.framer-v-1shlkxp .framer-cfp81z { overflow: hidden; }`,
          ...Se,
          ...at,
          ...Ue,
          ...Fe,
          ...lt,
        ],
        `framer-8fLvc`
      )),
      (uc.displayName = `Curriculum Card`),
      (uc.defaultProps = { height: 498, width: 620 }),
      k(uc, {
        variant: {
          options: [`EgyrZXfnj`, `hM7a1s_mX`],
          optionTitles: [`Curriculum Card Open`, `Curriculum Card Closed`],
          title: `Variant`,
          type: B.Enum,
        },
        g3zBCSRSt: {
          defaultValue: `Week 02`,
          displayTextArea: !1,
          title: `Duration`,
          type: B.String,
        },
        fbKNjmYzv: {
          defaultValue: `Module 02`,
          displayTextArea: !1,
          title: `Modules`,
          type: B.String,
        },
        yynZBasrm: {
          defaultValue: `Build complex layouts`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
        XKRtj3wvY: {
          defaultValue: `Identify: Find the purpose of the page or project`,
          displayTextArea: !1,
          title: `Feature 01`,
          type: B.String,
        },
        kWDGvmt7X: {
          defaultValue: `Listing: List all sections, content types, and key elements`,
          displayTextArea: !1,
          title: `Feature 02`,
          type: B.String,
        },
        Ry7XTFSuB: {
          defaultValue: `Styling: Decide which modern style aligns with your brand & project.`,
          displayTextArea: !1,
          title: `Feature 03`,
          type: B.String,
        },
        Io4Uxw_2h: {
          defaultValue: `Solution: Define spacing, padding, and margins consistently.`,
          displayTextArea: !1,
          title: `Feature 04`,
          type: B.String,
        },
        exgTt0aTW: {
          defaultValue: `You get battle-tested workflows, tool mastery, conversion-focused design knowledge, and practical project guidance. The goal: make you a confident low-code developer in the shortest possible time.`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
        XAVqYJh84: { title: `Link`, type: B.Link },
        AQhtg0C45: { title: `Click`, type: B.EventHandler },
      }),
      F(
        uc,
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
          ...N(Ce),
          ...N(ot),
          ...N(We),
          ...N(Ie),
          ...N(ut),
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
  wc = e(() => {
    (f(),
      j(),
      T(),
      i(),
      dc(),
      (pc = M(uc)),
      (mc = [`cr5Dpe8QE`, `fHYTawo3F`, `sHJmWIjFv`, `yicbXoAUm`]),
      (hc = `framer-FWHKj`),
      (gc = {
        cr5Dpe8QE: `framer-v-1e8wnfu`,
        fHYTawo3F: `framer-v-14xsu3q`,
        sHJmWIjFv: `framer-v-1pr8hvt`,
        yicbXoAUm: `framer-v-1ikfzle`,
      }),
      (_c = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (vc = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (yc = b.create(a)),
      (bc = {
        "Curriculum Tab/01": `cr5Dpe8QE`,
        "Curriculum Tab/02": `fHYTawo3F`,
        "Curriculum Tab/03": `sHJmWIjFv`,
        "Curriculum Tab/04": `yicbXoAUm`,
      }),
      (xc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: bc[r.variant] ?? r.variant ?? `cr5Dpe8QE`,
      })),
      (Sc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Cc = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: o } = z(),
            s = ie(),
            { style: c, className: l, layoutId: d, variant: f, ...p } = xc(e),
            {
              baseVariant: m,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = pe({
              cycleOrder: mc,
              defaultVariant: `cr5Dpe8QE`,
              ref: r,
              variant: f,
              variantClassNames: gc,
            }),
            k = Sc(e, D),
            { activeVariantCallback: A, delay: j } = ue(m),
            M = A(async (...e) => {
              E(`cr5Dpe8QE`);
            }),
            N = A(async (...e) => {
              E(`fHYTawo3F`);
            }),
            P = A(async (...e) => {
              E(`sHJmWIjFv`);
            }),
            F = A(async (...e) => {
              E(`yicbXoAUm`);
            }),
            I = V(hc);
          return (
            ee(),
            h(S, {
              id: d ?? i,
              children: h(yc, {
                animate: D,
                initial: !1,
                children: h(vc, {
                  value: _c,
                  children: h(b.div, {
                    ...p,
                    ...x,
                    className: V(I, `framer-1e8wnfu`, l, _),
                    "data-border": !0,
                    "data-framer-name": `Curriculum Tab/01`,
                    layoutDependency: k,
                    layoutId: `cr5Dpe8QE`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, rgb(235, 238, 243))`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      ...c,
                    },
                    ...fc(
                      {
                        fHYTawo3F: { "data-framer-name": `Curriculum Tab/02` },
                        sHJmWIjFv: { "data-framer-name": `Curriculum Tab/03` },
                        yicbXoAUm: { "data-framer-name": `Curriculum Tab/04` },
                      },
                      m,
                      C
                    ),
                    children: g(b.div, {
                      className: `framer-cezrf`,
                      "data-framer-name": `Card Wrapper`,
                      layoutDependency: k,
                      layoutId: `P8uOSAYwm`,
                      children: [
                        h(L, {
                          links: [
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            h(H, {
                              height: 498,
                              width: `max(${s?.width || `100vw`} - 20px, 1px)`,
                              y: (s?.y || 0) + (10 + ((s?.height || 778) - 20 - 2022) / 2) + 0 + 0,
                              children: h(O, {
                                className: `framer-1w4dj6e-container`,
                                layoutDependency: k,
                                layoutId: `ERRsMO5uc-container`,
                                nodeId: `ERRsMO5uc`,
                                rendersWithMotion: !0,
                                scopeId: `cZOT8mTVK`,
                                children: h(uc, {
                                  AQhtg0C45: M,
                                  exgTt0aTW: `Design the visual system including colors, typography, spacing, grids, and reusable components for consistency.`,
                                  fbKNjmYzv: `Module 01`,
                                  g3zBCSRSt: `Week 01`,
                                  height: `100%`,
                                  id: `ERRsMO5uc`,
                                  Io4Uxw_2h: `Solution: Define spacing, padding, and margins consistently.`,
                                  kWDGvmt7X: `Listing: List all sections, content types, and key elements`,
                                  layoutId: `ERRsMO5uc`,
                                  Ry7XTFSuB: `Styling: Decide which modern style aligns with your brand & project.`,
                                  style: { width: `100%` },
                                  variant: `EgyrZXfnj`,
                                  width: `100%`,
                                  XAVqYJh84: e[0],
                                  XKRtj3wvY: `Identify: Find the purpose of the page or project`,
                                  yynZBasrm: `Fundamentals of modern web design`,
                                  ...fc(
                                    {
                                      fHYTawo3F: { variant: `hM7a1s_mX`, XAVqYJh84: e[1] },
                                      sHJmWIjFv: { variant: `hM7a1s_mX`, XAVqYJh84: e[2] },
                                      yicbXoAUm: { variant: `hM7a1s_mX`, XAVqYJh84: e[3] },
                                    },
                                    m,
                                    C
                                  ),
                                }),
                              }),
                            }),
                        }),
                        h(L, {
                          links: [
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            h(H, {
                              height: 498,
                              width: `max(${s?.width || `100vw`} - 20px, 1px)`,
                              y:
                                (s?.y || 0) + (10 + ((s?.height || 778) - 20 - 2022) / 2) + 0 + 508,
                              children: h(O, {
                                className: `framer-7e3trf-container`,
                                layoutDependency: k,
                                layoutId: `WlaIRnvL4-container`,
                                nodeId: `WlaIRnvL4`,
                                rendersWithMotion: !0,
                                scopeId: `cZOT8mTVK`,
                                children: h(uc, {
                                  AQhtg0C45: N,
                                  exgTt0aTW: `Integrate smart recommendations, dynamic content, or adaptive interfaces based on user behavior.`,
                                  fbKNjmYzv: `Module 3.2`,
                                  g3zBCSRSt: `Week 02`,
                                  height: `100%`,
                                  id: `WlaIRnvL4`,
                                  Io4Uxw_2h: `Listing: List all sections, content types, and key elements`,
                                  kWDGvmt7X: `Identify: Find the purpose of the page or project`,
                                  layoutId: `WlaIRnvL4`,
                                  Ry7XTFSuB: `Styling: Decide which modern style aligns with your brand & project.`,
                                  style: { width: `100%` },
                                  variant: `hM7a1s_mX`,
                                  width: `100%`,
                                  XAVqYJh84: e[0],
                                  XKRtj3wvY: `Solution: Define spacing, padding, and margins consistently.`,
                                  yynZBasrm: `Build complex layouts`,
                                  ...fc(
                                    {
                                      fHYTawo3F: { variant: `EgyrZXfnj`, XAVqYJh84: e[1] },
                                      sHJmWIjFv: { XAVqYJh84: e[2] },
                                      yicbXoAUm: { XAVqYJh84: e[3] },
                                    },
                                    m,
                                    C
                                  ),
                                }),
                              }),
                            }),
                        }),
                        h(L, {
                          links: [
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            h(H, {
                              height: 498,
                              width: `max(${s?.width || `100vw`} - 20px, 1px)`,
                              y:
                                (s?.y || 0) +
                                (10 + ((s?.height || 778) - 20 - 2022) / 2) +
                                0 +
                                1016,
                              children: h(O, {
                                className: `framer-mildj5-container`,
                                layoutDependency: k,
                                layoutId: `atXzyyFoU-container`,
                                nodeId: `atXzyyFoU`,
                                rendersWithMotion: !0,
                                scopeId: `cZOT8mTVK`,
                                children: h(uc, {
                                  AQhtg0C45: P,
                                  exgTt0aTW: `Reduce unnecessary scripts, compress assets, and prioritize critical content for faster loading on mobile networks.`,
                                  fbKNjmYzv: `Module 05`,
                                  g3zBCSRSt: `Week 03`,
                                  height: `100%`,
                                  id: `atXzyyFoU`,
                                  Io4Uxw_2h: `Identify: Find the purpose of the page or project`,
                                  kWDGvmt7X: `Solution: Define spacing, padding, and margins consistently.`,
                                  layoutId: `atXzyyFoU`,
                                  Ry7XTFSuB: `Listing: List all sections, content types, and key elements`,
                                  style: { width: `100%` },
                                  variant: `hM7a1s_mX`,
                                  width: `100%`,
                                  XAVqYJh84: e[0],
                                  XKRtj3wvY: `Styling: Decide which modern style aligns with your brand & project.`,
                                  yynZBasrm: `Incorporate modern design features`,
                                  ...fc(
                                    {
                                      fHYTawo3F: { XAVqYJh84: e[1] },
                                      sHJmWIjFv: { variant: `EgyrZXfnj`, XAVqYJh84: e[2] },
                                      yicbXoAUm: { XAVqYJh84: e[3] },
                                    },
                                    m,
                                    C
                                  ),
                                }),
                              }),
                            }),
                        }),
                        h(L, {
                          links: [
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            h(H, {
                              height: 498,
                              width: `max(${s?.width || `100vw`} - 20px, 1px)`,
                              y:
                                (s?.y || 0) +
                                (10 + ((s?.height || 778) - 20 - 2022) / 2) +
                                0 +
                                1524,
                              children: h(O, {
                                className: `framer-ecsaey-container`,
                                layoutDependency: k,
                                layoutId: `eRf2pbHDv-container`,
                                nodeId: `eRf2pbHDv`,
                                rendersWithMotion: !0,
                                scopeId: `cZOT8mTVK`,
                                children: h(uc, {
                                  AQhtg0C45: F,
                                  exgTt0aTW: `Use responsive images (srcset, sizes) and flexible media containers to prevent overflow and improve performance.`,
                                  fbKNjmYzv: `Module 07`,
                                  g3zBCSRSt: `Week 04`,
                                  height: `100%`,
                                  id: `eRf2pbHDv`,
                                  Io4Uxw_2h: `Identify: Find the purpose of the page or project`,
                                  kWDGvmt7X: `Styling: Decide which modern style aligns with your brand & project.`,
                                  layoutId: `eRf2pbHDv`,
                                  Ry7XTFSuB: `Solution: Define spacing, padding, and margins consistently.`,
                                  style: { width: `100%` },
                                  variant: `hM7a1s_mX`,
                                  width: `100%`,
                                  XAVqYJh84: e[0],
                                  XKRtj3wvY: `Listing: List all sections, content types, and key elements`,
                                  yynZBasrm: `Optimize responsiveness`,
                                  ...fc(
                                    {
                                      fHYTawo3F: { XAVqYJh84: e[1] },
                                      sHJmWIjFv: { XAVqYJh84: e[2] },
                                      yicbXoAUm: { variant: `EgyrZXfnj`, XAVqYJh84: e[3] },
                                    },
                                    m,
                                    C
                                  ),
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
          `.framer-FWHKj.framer-2iuovi, .framer-FWHKj .framer-2iuovi { display: block; }`,
          `.framer-FWHKj.framer-1e8wnfu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 640px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FWHKj .framer-cezrf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-FWHKj .framer-1w4dj6e-container, .framer-FWHKj .framer-7e3trf-container, .framer-FWHKj .framer-mildj5-container, .framer-FWHKj .framer-ecsaey-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-FWHKj[data-border="true"]::after, .framer-FWHKj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-FWHKj`
      )),
      (Cc.displayName = `Curriculum Tab`),
      (Cc.defaultProps = { height: 778, width: 640 }),
      k(Cc, {
        variant: {
          options: [`cr5Dpe8QE`, `fHYTawo3F`, `sHJmWIjFv`, `yicbXoAUm`],
          optionTitles: [
            `Curriculum Tab/01`,
            `Curriculum Tab/02`,
            `Curriculum Tab/03`,
            `Curriculum Tab/04`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      F(Cc, [{ explicitInter: !0, fonts: [] }, ...pc], { supportsExplicitInterCodegen: !0 }));
  });
function Tc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ec,
  Dc,
  Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc = e(() => {
    (f(),
      j(),
      T(),
      i(),
      Te(),
      (Ec = M(be)),
      (Dc = [`ZRp249qWw`, `eGq5nl6Kk`, `CPnz6fLpy`, `uBlgfWmjD`]),
      (Oc = `framer-HwSlg`),
      (kc = {
        CPnz6fLpy: `framer-v-ehn8uz`,
        eGq5nl6Kk: `framer-v-1ffzk3t`,
        uBlgfWmjD: `framer-v-1kx1l8a`,
        ZRp249qWw: `framer-v-rg3bp3`,
      }),
      (Ac = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jc = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Mc = b.create(a)),
      (Nc = {
        "2 Star": `uBlgfWmjD`,
        "3 Star": `CPnz6fLpy`,
        "4 Star": `eGq5nl6Kk`,
        "5 Star": `ZRp249qWw`,
      }),
      (Pc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Nc[r.variant] ?? r.variant ?? `ZRp249qWw`,
      })),
      (Fc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ic = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: o } = z();
          ie();
          let { style: s, className: c, layoutId: l, variant: d, ...f } = Pc(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = pe({
              cycleOrder: Dc,
              defaultVariant: `ZRp249qWw`,
              ref: r,
              variant: d,
              variantClassNames: kc,
            }),
            D = Fc(e, E),
            k = V(Oc),
            A = () => p !== `uBlgfWmjD`,
            j = () => ![`CPnz6fLpy`, `uBlgfWmjD`].includes(p),
            M = () => ![`eGq5nl6Kk`, `CPnz6fLpy`, `uBlgfWmjD`].includes(p);
          return h(S, {
            id: l ?? i,
            children: h(Mc, {
              animate: E,
              initial: !1,
              children: h(jc, {
                value: Ac,
                children: g(b.div, {
                  ...f,
                  ...y,
                  className: V(k, `framer-rg3bp3`, c, m),
                  "data-framer-name": `5 Star`,
                  layoutDependency: D,
                  layoutId: `ZRp249qWw`,
                  ref: r,
                  style: { ...s },
                  ...Tc(
                    {
                      CPnz6fLpy: { "data-framer-name": `3 Star` },
                      eGq5nl6Kk: { "data-framer-name": `4 Star` },
                      uBlgfWmjD: { "data-framer-name": `2 Star` },
                    },
                    p,
                    x
                  ),
                  children: [
                    h(H, {
                      children: h(O, {
                        className: `framer-1lzjdfy-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `XKh_ohQNO-container`,
                        nodeId: `XKh_ohQNO`,
                        rendersWithMotion: !0,
                        scopeId: `h7HOhcyGc`,
                        children: h(be, {
                          color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `Star`,
                          id: `XKh_ohQNO`,
                          layoutId: `XKh_ohQNO`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `fill`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    h(H, {
                      children: h(O, {
                        className: `framer-nd2iq-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `mfBiAgcbp-container`,
                        nodeId: `mfBiAgcbp`,
                        rendersWithMotion: !0,
                        scopeId: `h7HOhcyGc`,
                        children: h(be, {
                          color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `Star`,
                          id: `mfBiAgcbp`,
                          layoutId: `mfBiAgcbp`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `fill`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    A() &&
                      h(H, {
                        children: h(O, {
                          className: `framer-yi9huw-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: D,
                          layoutId: `wiFY9A08g-container`,
                          nodeId: `wiFY9A08g`,
                          rendersWithMotion: !0,
                          scopeId: `h7HOhcyGc`,
                          children: h(be, {
                            color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: `Star`,
                            id: `wiFY9A08g`,
                            layoutId: `wiFY9A08g`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    j() &&
                      h(H, {
                        children: h(O, {
                          className: `framer-1b2s1j6-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: D,
                          layoutId: `F_fLDc1B7-container`,
                          nodeId: `F_fLDc1B7`,
                          rendersWithMotion: !0,
                          scopeId: `h7HOhcyGc`,
                          children: h(be, {
                            color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: `Star`,
                            id: `F_fLDc1B7`,
                            layoutId: `F_fLDc1B7`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    M() &&
                      h(H, {
                        children: h(O, {
                          className: `framer-d5c0p0-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: D,
                          layoutId: `dOF1RPSY9-container`,
                          nodeId: `dOF1RPSY9`,
                          rendersWithMotion: !0,
                          scopeId: `h7HOhcyGc`,
                          children: h(be, {
                            color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: `Star`,
                            id: `dOF1RPSY9`,
                            layoutId: `dOF1RPSY9`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
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
          `.framer-HwSlg.framer-12scl8m, .framer-HwSlg .framer-12scl8m { display: block; }`,
          `.framer-HwSlg.framer-rg3bp3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-HwSlg .framer-1lzjdfy-container, .framer-HwSlg .framer-nd2iq-container, .framer-HwSlg .framer-yi9huw-container, .framer-HwSlg .framer-1b2s1j6-container, .framer-HwSlg .framer-d5c0p0-container { flex: none; height: 18px; position: relative; width: 18px; }`,
        ],
        `framer-HwSlg`
      )),
      (Ic.displayName = `Stars`),
      (Ic.defaultProps = { height: 18, width: 106 }),
      k(Ic, {
        variant: {
          options: [`ZRp249qWw`, `eGq5nl6Kk`, `CPnz6fLpy`, `uBlgfWmjD`],
          optionTitles: [`5 Star`, `4 Star`, `3 Star`, `2 Star`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      F(Ic, [{ explicitInter: !0, fonts: [] }, ...Ec], { supportsExplicitInterCodegen: !0 }));
  });
function Rc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c = e(() => {
    (f(),
      j(),
      T(),
      i(),
      He(),
      ye(),
      it(),
      Lc(),
      (zc = M(Ic)),
      (Bc = D(Ic)),
      (Vc = [`bF2lzQh7n`, `xGo9NxJmR`, `kIuabt17p`]),
      (Hc = `framer-U5UNR`),
      (Uc = {
        bF2lzQh7n: `framer-v-782knf`,
        kIuabt17p: `framer-v-19adacc`,
        xGo9NxJmR: `framer-v-1j8o5hy`,
      }),
      (Wc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Gc = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Kc = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (qc = b.create(a)),
      (Jc = {
        "2 Star": `uBlgfWmjD`,
        "3 Star": `CPnz6fLpy`,
        "4 Star": `eGq5nl6Kk`,
        "5 Star": `ZRp249qWw`,
      }),
      (Yc = {
        "Testimonial Card Phone": `kIuabt17p`,
        "Testimonial Card Tablet": `xGo9NxJmR`,
        "Testimonial Card": `bF2lzQh7n`,
      }),
      (Xc = ({
        designation: e,
        height: t,
        id: n,
        image: r,
        name1: i,
        rating: a,
        text: o,
        width: s,
        ...c
      }) => ({
        ...c,
        pCGt1REW4: r ??
          c.pCGt1REW4 ?? {
            alt: `Avatar`,
            pixelHeight: 400,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/PdCMf04RmRPAbpHAoPA1mSLM.jpg?width=400&height=400`,
          },
        V7xxcsDnq: Jc[a] ?? a ?? c.V7xxcsDnq ?? `ZRp249qWw`,
        variant: Yc[c.variant] ?? c.variant ?? `bF2lzQh7n`,
        Vb0T874fa: i ?? c.Vb0T874fa ?? `Sebastian Langston`,
        wXbUESKME: e ?? c.wXbUESKME ?? `Designer`,
        ZBh720LwR:
          o ??
          c.ZBh720LwR ??
          `“ His teaching style is simple, practical, and incredibly confidence-boosting. He broke down complex concepts into easy steps, making them approachable. ”`,
      })),
      (Zc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qc = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z(),
            c = ie(),
            {
              style: l,
              className: d,
              layoutId: f,
              variant: p,
              V7xxcsDnq: m,
              ZBh720LwR: _,
              wXbUESKME: y,
              Vb0T874fa: x,
              pCGt1REW4: C,
              ...w
            } = Xc(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = pe({
              cycleOrder: Vc,
              defaultVariant: `bF2lzQh7n`,
              ref: r,
              variant: p,
              variantClassNames: Uc,
            }),
            F = Zc(e, P),
            I = V(Hc, Ge, st, ve);
          return h(S, {
            id: f ?? i,
            children: h(qc, {
              animate: P,
              initial: !1,
              children: h(Kc, {
                value: Wc,
                children: h(b.div, {
                  ...w,
                  ...k,
                  className: V(I, `framer-782knf`, d, E),
                  "data-border": !0,
                  "data-framer-name": `Testimonial Card`,
                  layoutDependency: F,
                  layoutId: `bF2lzQh7n`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backdropFilter: `blur(10px)`,
                    backgroundColor: `var(--token-0a2e5ce4-0168-426d-a583-8c3ef3831fca, rgba(255, 255, 255, 0.16))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    WebkitBackdropFilter: `blur(10px)`,
                    ...l,
                  },
                  ...Rc(
                    {
                      kIuabt17p: { "data-framer-name": `Testimonial Card Phone` },
                      xGo9NxJmR: { "data-framer-name": `Testimonial Card Tablet` },
                    },
                    T,
                    A
                  ),
                  children: g(b.div, {
                    className: `framer-ow4av7`,
                    "data-framer-name": `Review WRapper`,
                    layoutDependency: F,
                    layoutId: `HvtABoGlv`,
                    style: {
                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    children: [
                      g(b.div, {
                        className: `framer-1fyuh8x`,
                        "data-framer-name": `Rating and Text`,
                        layoutDependency: F,
                        layoutId: `dKUCVsjhE`,
                        children: [
                          h(H, {
                            height: 18,
                            y:
                              (c?.y || 0) +
                              10 +
                              (((c?.height || 362) - 20 - 420) / 2 + 0 + 0) +
                              30 +
                              0 +
                              0 +
                              0,
                            ...Rc(
                              {
                                kIuabt17p: {
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 335) - 20 - 422) / 2 + 0 + 0) +
                                    30 +
                                    0 +
                                    0 +
                                    0,
                                },
                                xGo9NxJmR: {
                                  y:
                                    (c?.y || 0) +
                                    10 +
                                    (((c?.height || 322) - 20 - 380) / 2 + 0 + 0) +
                                    30 +
                                    0 +
                                    0 +
                                    0,
                                },
                              },
                              T,
                              A
                            ),
                            children: h(O, {
                              className: `framer-1tw53x7-container`,
                              layoutDependency: F,
                              layoutId: `zv60n3Ah9-container`,
                              nodeId: `zv60n3Ah9`,
                              rendersWithMotion: !0,
                              scopeId: `dIbpZNfSi`,
                              children: h(Ic, {
                                height: `100%`,
                                id: `zv60n3Ah9`,
                                layoutId: `zv60n3Ah9`,
                                variant: m,
                                width: `100%`,
                              }),
                            }),
                          }),
                          h(W, {
                            __fromCanvasComponent: !0,
                            children: h(a, {
                              children: h(b.p, {
                                className: `framer-styles-preset-1gmq7go`,
                                "data-styles-preset": `cUaervyv9`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                },
                                children: `“ His teaching style is simple, practical, and incredibly confidence-boosting. He broke down complex concepts into easy steps, making them approachable. ”`,
                              }),
                            }),
                            className: `framer-2tipv1`,
                            "data-framer-name": `“ His teaching style is simple, practical, and incredibly confidence-boosting. He broke down complex concepts into easy steps, making them approachable. ”`,
                            fonts: [`Inter`],
                            layoutDependency: F,
                            layoutId: `Jl6q2nI0F`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: _,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      g(b.div, {
                        className: `framer-lmjx8n`,
                        "data-framer-name": `Client Info`,
                        layoutDependency: F,
                        layoutId: `NciMGwQSC`,
                        children: [
                          h(R, {
                            background: {
                              alt: `Avatar`,
                              fit: `fill`,
                              loading: G(
                                (c?.y || 0) +
                                  10 +
                                  (((c?.height || 362) - 20 - 420) / 2 + 0 + 0) +
                                  30 +
                                  262 +
                                  26
                              ),
                              pixelHeight: 400,
                              pixelWidth: 400,
                              sizes: `46px`,
                              ...Gc(C),
                            },
                            className: `framer-mfgsus`,
                            "data-framer-name": `Image`,
                            layoutDependency: F,
                            layoutId: `hvteTg7Mq`,
                            style: {
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                            ...Rc(
                              {
                                kIuabt17p: {
                                  background: {
                                    alt: `Avatar`,
                                    fit: `fill`,
                                    loading: G(
                                      (c?.y || 0) +
                                        10 +
                                        (((c?.height || 335) - 20 - 422) / 2 + 0 + 0) +
                                        30 +
                                        202 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 400,
                                    pixelWidth: 400,
                                    sizes: `46px`,
                                    ...Gc(C),
                                  },
                                },
                                xGo9NxJmR: {
                                  background: {
                                    alt: `Avatar`,
                                    fit: `fill`,
                                    loading: G(
                                      (c?.y || 0) +
                                        10 +
                                        (((c?.height || 322) - 20 - 380) / 2 + 0 + 0) +
                                        30 +
                                        222 +
                                        26
                                    ),
                                    pixelHeight: 400,
                                    pixelWidth: 400,
                                    sizes: `46px`,
                                    ...Gc(C),
                                  },
                                },
                              },
                              T,
                              A
                            ),
                          }),
                          g(b.div, {
                            className: `framer-1nfzmg5`,
                            "data-framer-name": `Name and Designation`,
                            layoutDependency: F,
                            layoutId: `RQPzlr9R7`,
                            children: [
                              h(W, {
                                __fromCanvasComponent: !0,
                                children: h(a, {
                                  children: h(b.h6, {
                                    className: `framer-styles-preset-1bk5v37`,
                                    "data-styles-preset": `wmi7dzLRt`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                    },
                                    children: `Sebastian T. Langston`,
                                  }),
                                }),
                                className: `framer-1gah60p`,
                                "data-framer-name": `Sebastian T. Langston`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `HWsLuAEMN`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: x,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(W, {
                                __fromCanvasComponent: !0,
                                children: h(a, {
                                  children: h(b.p, {
                                    className: `framer-styles-preset-1yo9nb5`,
                                    "data-styles-preset": `qN3uIbesA`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                                    },
                                    children: `Designer`,
                                  }),
                                }),
                                className: `framer-1dk2l16`,
                                "data-framer-name": `designer`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `Vxo6gnNdH`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: y,
                                verticalAlignment: `top`,
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
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-U5UNR.framer-18jdob3, .framer-U5UNR .framer-18jdob3 { display: block; }`,
          `.framer-U5UNR.framer-782knf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: 480px; }`,
          `.framer-U5UNR .framer-ow4av7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
          `.framer-U5UNR .framer-1fyuh8x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-U5UNR .framer-1tw53x7-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-U5UNR .framer-2tipv1, .framer-U5UNR .framer-1gah60p, .framer-U5UNR .framer-1dk2l16 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-U5UNR .framer-lmjx8n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-U5UNR .framer-mfgsus { flex: none; height: 46px; position: relative; width: 46px; }`,
          `.framer-U5UNR .framer-1nfzmg5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-U5UNR.framer-v-1j8o5hy .framer-ow4av7 { gap: 60px; }`,
          `.framer-U5UNR.framer-v-19adacc .framer-ow4av7 { gap: 40px; padding: 30px 20px 30px 20px; }`,
          `.framer-U5UNR.framer-v-19adacc .framer-lmjx8n { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; }`,
          `.framer-U5UNR.framer-v-19adacc .framer-mfgsus, .framer-U5UNR.framer-v-19adacc .framer-1gah60p { order: 0; }`,
          `.framer-U5UNR.framer-v-19adacc .framer-1nfzmg5 { flex: none; order: 1; width: 100%; }`,
          `.framer-U5UNR.framer-v-19adacc .framer-1dk2l16 { order: 1; }`,
          ...Ue,
          ...at,
          ...Se,
          `.framer-U5UNR[data-border="true"]::after, .framer-U5UNR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-U5UNR`
      )),
      (Qc.displayName = `Testimonial Card`),
      (Qc.defaultProps = { height: 362, width: 480 }),
      k(Qc, {
        variant: {
          options: [`bF2lzQh7n`, `xGo9NxJmR`, `kIuabt17p`],
          optionTitles: [`Testimonial Card`, `Testimonial Card Tablet`, `Testimonial Card Phone`],
          title: `Variant`,
          type: B.Enum,
        },
        V7xxcsDnq: Bc?.variant && {
          ...Bc.variant,
          defaultValue: `ZRp249qWw`,
          description: void 0,
          hidden: void 0,
          title: `Rating`,
        },
        ZBh720LwR: {
          defaultValue: `“ His teaching style is simple, practical, and incredibly confidence-boosting. He broke down complex concepts into easy steps, making them approachable. ”`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
        wXbUESKME: {
          defaultValue: `Designer`,
          displayTextArea: !1,
          title: `Designation`,
          type: B.String,
        },
        Vb0T874fa: {
          defaultValue: `Sebastian Langston`,
          displayTextArea: !1,
          title: `Name`,
          type: B.String,
        },
        pCGt1REW4: {
          __defaultAssetReference: `data:framer/asset-reference,PdCMf04RmRPAbpHAoPA1mSLM.jpg?width=400&height=400`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,PdCMf04RmRPAbpHAoPA1mSLM.jpg?width=400&height=400`,
          },
          title: `Image`,
          type: B.ResponsiveImage,
        },
      }),
      F(
        Qc,
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
          ...zc,
          ...N(We),
          ...N(ot),
          ...N(Ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function el(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tl,
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
    (f(),
      j(),
      T(),
      i(),
      tn(),
      (tl = M(Gt)),
      (nl = D(Gt)),
      (rl = [`Q9WXrOrk1`, `b_s49tXvQ`, `s2x8BhcV6`]),
      (il = `framer-n4JYd`),
      (al = {
        b_s49tXvQ: `framer-v-4nrzp`,
        Q9WXrOrk1: `framer-v-1lc2kof`,
        s2x8BhcV6: `framer-v-1ib66uw`,
      }),
      (ol = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (sl = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (cl = b.create(a)),
      (ll = {
        "Video Review Card Playing": `b_s49tXvQ`,
        "Video Review Card Responsive": `s2x8BhcV6`,
        "Video Review Card": `Q9WXrOrk1`,
      }),
      (ul = ({ height: e, id: t, video: n, width: r, ...i }) => ({
        ...i,
        HOg6usLWt: n ?? i.HOg6usLWt ?? `../../assets/misc/MunwGNKfDTMCch3sjCwU2Xiz0.mp4`,
        variant: ll[i.variant] ?? i.variant ?? `Q9WXrOrk1`,
      })),
      (dl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (fl = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: o } = z();
          ie();
          let { style: s, className: c, layoutId: l, variant: d, HOg6usLWt: f, ...p } = ul(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = pe({
              cycleOrder: rl,
              defaultVariant: `Q9WXrOrk1`,
              ref: r,
              variant: d,
              variantClassNames: al,
            }),
            D = dl(e, E),
            { activeVariantCallback: k, delay: A } = ue(m),
            j = k(async (...e) => {
              (w({ isHovered: !0 }), T(`b_s49tXvQ`));
            }),
            M = k(async (...e) => {
              (w({ isHovered: !1 }), T(`Q9WXrOrk1`));
            }),
            N = V(il);
          return h(S, {
            id: l ?? i,
            children: h(cl, {
              animate: E,
              initial: !1,
              children: h(sl, {
                value: ol,
                children: h(b.div, {
                  ...p,
                  ...y,
                  className: V(N, `framer-1lc2kof`, c, g),
                  "data-framer-name": `Video Review Card`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `Q9WXrOrk1`,
                  onMouseEnter: j,
                  ref: r,
                  style: { ...s },
                  ...el(
                    {
                      b_s49tXvQ: {
                        "data-framer-name": `Video Review Card Playing`,
                        onMouseLeave: M,
                      },
                      s2x8BhcV6: {
                        "data-framer-name": `Video Review Card Responsive`,
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                    },
                    m,
                    x
                  ),
                  children: h(H, {
                    children: h(O, {
                      className: `framer-11g6vir-container`,
                      isModuleExternal: !0,
                      layoutDependency: D,
                      layoutId: `ydGcLV3sq-container`,
                      nodeId: `ydGcLV3sq`,
                      rendersWithMotion: !0,
                      scopeId: `GzY_tqG11`,
                      children: h(Gt, {
                        backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                        borderRadius: 10,
                        bottomLeftRadius: 10,
                        bottomRightRadius: 10,
                        controls: !0,
                        height: `100%`,
                        id: `ydGcLV3sq`,
                        isMixedBorderRadius: !1,
                        layoutId: `ydGcLV3sq`,
                        loop: !0,
                        muted: !0,
                        objectFit: `cover`,
                        playing: !1,
                        posterEnabled: !1,
                        srcFile: f,
                        srcType: `Upload`,
                        srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                        startTime: 0,
                        style: { height: `100%`, width: `100%` },
                        topLeftRadius: 10,
                        topRightRadius: 10,
                        volume: 25,
                        width: `100%`,
                        ...el({ b_s49tXvQ: { playing: !0 } }, m, x),
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
          `.framer-n4JYd.framer-e3t628, .framer-n4JYd .framer-e3t628 { display: block; }`,
          `.framer-n4JYd.framer-1lc2kof { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 350px; }`,
          `.framer-n4JYd .framer-11g6vir-container { flex: none; height: 450px; position: relative; width: 100%; }`,
          `.framer-n4JYd.framer-v-1ib66uw.framer-1lc2kof { cursor: pointer; }`,
        ],
        `framer-n4JYd`
      )),
      (fl.displayName = `Video Review Card`),
      (fl.defaultProps = { height: 450, width: 350 }),
      k(fl, {
        variant: {
          options: [`Q9WXrOrk1`, `b_s49tXvQ`, `s2x8BhcV6`],
          optionTitles: [
            `Video Review Card`,
            `Video Review Card Playing`,
            `Video Review Card Responsive`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
        HOg6usLWt: nl?.srcFile && {
          ...nl.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,MunwGNKfDTMCch3sjCwU2Xiz0.mp4?originalFilename=9198841-hd_1080_1920_25fps.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
      }),
      F(fl, [{ explicitInter: !0, fonts: [] }, ...tl], { supportsExplicitInterCodegen: !0 }));
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
  Tl = e(() => {
    (f(),
      j(),
      T(),
      i(),
      He(),
      it(),
      (hl = [`GWzoBg569`, `JRgiyRPvI`]),
      (gl = `framer-vin5h`),
      (_l = { GWzoBg569: `framer-v-15t02p`, JRgiyRPvI: `framer-v-1vadq1w` }),
      (vl = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (yl = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (bl = b.create(a)),
      (xl = { "Faq Card Closed": `JRgiyRPvI`, "Faq Card Open": `GWzoBg569` }),
      (Sl = ({ answer: e, click: t, height: n, id: r, question: i, width: a, ...o }) => ({
        ...o,
        PDS_PHuUc:
          e ??
          o.PDS_PHuUc ??
          `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
        PYflM5PLx: i ?? o.PYflM5PLx ?? `Is contact/support information visible?`,
        rrDz07j43: t ?? o.rrDz07j43,
        variant: xl[o.variant] ?? o.variant ?? `GWzoBg569`,
      })),
      (Cl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wl = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z();
          ie();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              PYflM5PLx: p,
              PDS_PHuUc: m,
              rrDz07j43: _,
              ...y
            } = Sl(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = pe({
              cycleOrder: hl,
              defaultVariant: `GWzoBg569`,
              ref: r,
              variant: f,
              variantClassNames: _l,
            }),
            j = Cl(e, A),
            { activeVariantCallback: M, delay: N } = ue(x),
            P = M(async (...e) => {
              if ((O({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
              k(`JRgiyRPvI`);
            }),
            F = M(async (...e) => {
              if ((O({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
              k(`GWzoBg569`);
            }),
            I = V(gl, st, Ge);
          return h(S, {
            id: d ?? i,
            children: h(bl, {
              animate: A,
              initial: !1,
              children: h(yl, {
                value: vl,
                children: g(b.div, {
                  ...y,
                  ...T,
                  className: V(I, `framer-15t02p`, l, C),
                  "data-framer-name": `Faq Card Open`,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `GWzoBg569`,
                  onTap: P,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  ...ml({ JRgiyRPvI: { "data-framer-name": `Faq Card Closed`, onTap: F } }, x, E),
                  children: [
                    g(b.div, {
                      className: `framer-1sjdcfm`,
                      "data-framer-name": `Title and Icon`,
                      layoutDependency: j,
                      layoutId: `msJHAQtjP`,
                      children: [
                        h(W, {
                          __fromCanvasComponent: !0,
                          children: h(a, {
                            children: h(b.h6, {
                              className: `framer-styles-preset-1bk5v37`,
                              "data-styles-preset": `wmi7dzLRt`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                              },
                              children: `Is contact/support information visible?`,
                            }),
                          }),
                          className: `framer-vfaob2`,
                          "data-framer-name": `Is contact/support information visible?`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `oZTxSwGDV`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: p,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        g(b.div, {
                          className: `framer-531keb`,
                          "data-framer-name": `Icon Wrapper`,
                          layoutDependency: j,
                          layoutId: `XWSApldfi`,
                          style: {
                            backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          children: [
                            h(b.div, {
                              className: `framer-1pt6zl7`,
                              "data-framer-name": `Line`,
                              layoutDependency: j,
                              layoutId: `VkpX_25LR`,
                              style: {
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                rotate: 0,
                              },
                              variants: { JRgiyRPvI: { rotate: 90 } },
                            }),
                            h(b.div, {
                              className: `framer-1qubdbo`,
                              "data-framer-name": `Line`,
                              layoutDependency: j,
                              layoutId: `k33clTVBA`,
                              style: {
                                backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    h(b.div, {
                      className: `framer-1pa512x`,
                      "data-framer-name": `Text Wrapper`,
                      layoutDependency: j,
                      layoutId: `yIWDtjMQU`,
                      style: { opacity: 1 },
                      variants: { JRgiyRPvI: { opacity: 0 } },
                      children: h(W, {
                        __fromCanvasComponent: !0,
                        children: h(a, {
                          children: h(b.p, {
                            className: `framer-styles-preset-1gmq7go`,
                            "data-styles-preset": `cUaervyv9`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                            },
                            children: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
                          }),
                        }),
                        className: `framer-17o5eti`,
                        "data-framer-name": `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `tGyqYeG1g`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: m,
                        verticalAlignment: `top`,
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
          `.framer-vin5h.framer-z0wh83, .framer-vin5h .framer-z0wh83 { display: block; }`,
          `.framer-vin5h.framer-15t02p { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 10px 20px 20px; position: relative; width: 620px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vin5h .framer-1sjdcfm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-vin5h .framer-vfaob2, .framer-vin5h .framer-17o5eti { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-vin5h .framer-531keb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vin5h .framer-1pt6zl7 { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 16px; z-index: 1; }`,
          `.framer-vin5h .framer-1qubdbo { flex: none; height: 2px; overflow: visible; position: relative; width: 16px; }`,
          `.framer-vin5h .framer-1pa512x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 560px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-vin5h.framer-v-1vadq1w.framer-15t02p { gap: 0px; padding: 10px 10px 10px 20px; }`,
          `.framer-vin5h.framer-v-1vadq1w .framer-1pa512x { height: 1px; overflow: var(--overflow-clip-fallback, clip); }`,
          ...at,
          ...Ue,
        ],
        `framer-vin5h`
      )),
      (wl.displayName = `Faq Card`),
      (wl.defaultProps = { height: 167, width: 620 }),
      k(wl, {
        variant: {
          options: [`GWzoBg569`, `JRgiyRPvI`],
          optionTitles: [`Faq Card Open`, `Faq Card Closed`],
          title: `Variant`,
          type: B.Enum,
        },
        PYflM5PLx: {
          defaultValue: `Is contact/support information visible?`,
          displayTextArea: !1,
          title: `Question`,
          type: B.String,
        },
        PDS_PHuUc: {
          defaultValue: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
          displayTextArea: !1,
          title: `Answer`,
          type: B.String,
        },
        rrDz07j43: { title: `Click`, type: B.EventHandler },
      }),
      F(
        wl,
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
          ...N(ot),
          ...N(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function El(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl = e(() => {
    (f(),
      j(),
      T(),
      i(),
      Tl(),
      (Dl = M(wl)),
      (Ol = [`x8r8UM54i`, `m9K5mKGAz`, `wPghOhiwJ`, `Ct18xe_mS`]),
      (kl = `framer-4vdt5`),
      (Al = {
        Ct18xe_mS: `framer-v-1u5kiuy`,
        m9K5mKGAz: `framer-v-13g3q7e`,
        wPghOhiwJ: `framer-v-2qy9c4`,
        x8r8UM54i: `framer-v-qqlatd`,
      }),
      (jl = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ml = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Nl = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Pl = {
        "Faq Tab/01": `x8r8UM54i`,
        "Faq Tab/02": `m9K5mKGAz`,
        "Faq Tab/03": `wPghOhiwJ`,
        "Faq Tab/04": `Ct18xe_mS`,
      }),
      (Fl = b.create(a)),
      (Il = ({
        answer01: e,
        answer02: t,
        answer03: n,
        answer04: r,
        height: i,
        id: a,
        question01: o,
        question02: s,
        question03: c,
        question04: l,
        width: u,
        ...d
      }) => ({
        ...d,
        aTmiVsNqo: l ?? d.aTmiVsNqo ?? `Is contact/support information visible?`,
        fF7SKsVo1: o ?? d.fF7SKsVo1 ?? `Is contact/support information visible?`,
        FhTYgp8LD: s ?? d.FhTYgp8LD ?? `Is contact/support information visible?`,
        Hqto_djdP:
          t ??
          d.Hqto_djdP ??
          `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
        uXsptL0nk:
          r ??
          d.uXsptL0nk ??
          `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
        variant: Pl[d.variant] ?? d.variant ?? `x8r8UM54i`,
        vPo3IH2DZ:
          e ??
          d.vPo3IH2DZ ??
          `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
        x6iGtR1Pr: c ?? d.x6iGtR1Pr ?? `Is contact/support information visible?`,
        ZRs3TBIEX:
          n ??
          d.ZRs3TBIEX ??
          `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
      })),
      (Ll = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Rl = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: o } = z(),
            s = ie(),
            {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              fF7SKsVo1: p,
              vPo3IH2DZ: m,
              FhTYgp8LD: _,
              Hqto_djdP: y,
              x6iGtR1Pr: x,
              ZRs3TBIEX: C,
              aTmiVsNqo: w,
              uXsptL0nk: T,
              ...E
            } = Il(e),
            {
              baseVariant: D,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = pe({
              cycleOrder: Ol,
              defaultVariant: `x8r8UM54i`,
              ref: r,
              variant: f,
              variantClassNames: Al,
            }),
            ee = Ll(e, I),
            { activeVariantCallback: L, delay: te } = ue(D),
            R = L(async (...e) => {
              F(`m9K5mKGAz`);
            }),
            ne = L(async (...e) => {
              F(`wPghOhiwJ`);
            }),
            re = L(async (...e) => {
              F(`Ct18xe_mS`);
            }),
            B = V(kl);
          return h(S, {
            id: d ?? i,
            children: h(Fl, {
              animate: I,
              initial: !1,
              children: h(Nl, {
                value: jl,
                children: g(b.div, {
                  ...E,
                  ...j,
                  className: V(B, `framer-qqlatd`, l, k),
                  "data-border": !0,
                  "data-framer-name": `Faq Tab/01`,
                  layoutDependency: ee,
                  layoutId: `x8r8UM54i`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, rgb(235, 238, 243))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  ...El(
                    {
                      Ct18xe_mS: { "data-framer-name": `Faq Tab/04` },
                      m9K5mKGAz: { "data-framer-name": `Faq Tab/02` },
                      wPghOhiwJ: { "data-framer-name": `Faq Tab/03` },
                    },
                    D,
                    M
                  ),
                  children: [
                    h(H, {
                      height: 167,
                      width: `calc(${s?.width || `100vw`} - 20px)`,
                      y: (s?.y || 0) + 10 + (((s?.height || 400) - 20 - 698) / 2 + 0 + 0),
                      children: h(O, {
                        className: `framer-1r1a8oz-container`,
                        layoutDependency: ee,
                        layoutId: `QMMdTFx3T-container`,
                        nodeId: `QMMdTFx3T`,
                        rendersWithMotion: !0,
                        scopeId: `hLTHaETGc`,
                        children: h(wl, {
                          height: `100%`,
                          id: `QMMdTFx3T`,
                          layoutId: `QMMdTFx3T`,
                          PDS_PHuUc: m,
                          PYflM5PLx: p,
                          style: { width: `100%` },
                          variant: Ml(`GWzoBg569`),
                          width: `100%`,
                          ...El(
                            {
                              Ct18xe_mS: { variant: Ml(`JRgiyRPvI`) },
                              m9K5mKGAz: { variant: Ml(`JRgiyRPvI`) },
                              wPghOhiwJ: { variant: Ml(`JRgiyRPvI`) },
                            },
                            D,
                            M
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 167,
                      width: `calc(${s?.width || `100vw`} - 20px)`,
                      y: (s?.y || 0) + 10 + (((s?.height || 400) - 20 - 698) / 2 + 167 + 10),
                      children: h(O, {
                        className: `framer-hvappv-container`,
                        layoutDependency: ee,
                        layoutId: `Ec4ue26JQ-container`,
                        nodeId: `Ec4ue26JQ`,
                        rendersWithMotion: !0,
                        scopeId: `hLTHaETGc`,
                        children: h(wl, {
                          height: `100%`,
                          id: `Ec4ue26JQ`,
                          layoutId: `Ec4ue26JQ`,
                          PDS_PHuUc: y,
                          PYflM5PLx: _,
                          rrDz07j43: R,
                          style: { width: `100%` },
                          variant: Ml(`JRgiyRPvI`),
                          width: `100%`,
                          ...El(
                            { m9K5mKGAz: { rrDz07j43: void 0, variant: Ml(`GWzoBg569`) } },
                            D,
                            M
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 167,
                      width: `calc(${s?.width || `100vw`} - 20px)`,
                      y: (s?.y || 0) + 10 + (((s?.height || 400) - 20 - 698) / 2 + 334 + 20),
                      children: h(O, {
                        className: `framer-lscuzu-container`,
                        layoutDependency: ee,
                        layoutId: `AbfYpH1N7-container`,
                        nodeId: `AbfYpH1N7`,
                        rendersWithMotion: !0,
                        scopeId: `hLTHaETGc`,
                        children: h(wl, {
                          height: `100%`,
                          id: `AbfYpH1N7`,
                          layoutId: `AbfYpH1N7`,
                          PDS_PHuUc: C,
                          PYflM5PLx: x,
                          rrDz07j43: ne,
                          style: { width: `100%` },
                          variant: Ml(`JRgiyRPvI`),
                          width: `100%`,
                          ...El(
                            { wPghOhiwJ: { rrDz07j43: void 0, variant: Ml(`GWzoBg569`) } },
                            D,
                            M
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 167,
                      width: `calc(${s?.width || `100vw`} - 20px)`,
                      y: (s?.y || 0) + 10 + (((s?.height || 400) - 20 - 698) / 2 + 501 + 30),
                      children: h(O, {
                        className: `framer-1kg8zi0-container`,
                        layoutDependency: ee,
                        layoutId: `c5Eb5CfEo-container`,
                        nodeId: `c5Eb5CfEo`,
                        rendersWithMotion: !0,
                        scopeId: `hLTHaETGc`,
                        children: h(wl, {
                          height: `100%`,
                          id: `c5Eb5CfEo`,
                          layoutId: `c5Eb5CfEo`,
                          PDS_PHuUc: T,
                          PYflM5PLx: w,
                          rrDz07j43: re,
                          style: { width: `100%` },
                          variant: Ml(`JRgiyRPvI`),
                          width: `100%`,
                          ...El(
                            { Ct18xe_mS: { rrDz07j43: void 0, variant: Ml(`GWzoBg569`) } },
                            D,
                            M
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
          `.framer-4vdt5.framer-1olb4zv, .framer-4vdt5 .framer-1olb4zv { display: block; }`,
          `.framer-4vdt5.framer-qqlatd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 640px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-4vdt5 .framer-1r1a8oz-container, .framer-4vdt5 .framer-hvappv-container, .framer-4vdt5 .framer-lscuzu-container, .framer-4vdt5 .framer-1kg8zi0-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-4vdt5[data-border="true"]::after, .framer-4vdt5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-4vdt5`
      )),
      (Rl.displayName = `Faq Tab`),
      (Rl.defaultProps = { height: 400, width: 640 }),
      k(Rl, {
        variant: {
          options: [`x8r8UM54i`, `m9K5mKGAz`, `wPghOhiwJ`, `Ct18xe_mS`],
          optionTitles: [`Faq Tab/01`, `Faq Tab/02`, `Faq Tab/03`, `Faq Tab/04`],
          title: `Variant`,
          type: B.Enum,
        },
        fF7SKsVo1: {
          defaultValue: `Is contact/support information visible?`,
          displayTextArea: !1,
          title: `Question 01`,
          type: B.String,
        },
        onfF7SKsVo1Change: { changes: `fF7SKsVo1`, type: B.ChangeHandler },
        vPo3IH2DZ: {
          defaultValue: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
          displayTextArea: !1,
          title: `Answer 01`,
          type: B.String,
        },
        onvPo3IH2DZChange: { changes: `vPo3IH2DZ`, type: B.ChangeHandler },
        FhTYgp8LD: {
          defaultValue: `Is contact/support information visible?`,
          displayTextArea: !1,
          title: `Question 02`,
          type: B.String,
        },
        onFhTYgp8LDChange: { changes: `FhTYgp8LD`, type: B.ChangeHandler },
        Hqto_djdP: {
          defaultValue: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
          displayTextArea: !1,
          title: `Answer 02`,
          type: B.String,
        },
        onHqto_djdPChange: { changes: `Hqto_djdP`, type: B.ChangeHandler },
        x6iGtR1Pr: {
          defaultValue: `Is contact/support information visible?`,
          displayTextArea: !1,
          title: `Question 03`,
          type: B.String,
        },
        onx6iGtR1PrChange: { changes: `x6iGtR1Pr`, type: B.ChangeHandler },
        ZRs3TBIEX: {
          defaultValue: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
          displayTextArea: !1,
          title: `Answer 03`,
          type: B.String,
        },
        onZRs3TBIEXChange: { changes: `ZRs3TBIEX`, type: B.ChangeHandler },
        aTmiVsNqo: {
          defaultValue: `Is contact/support information visible?`,
          displayTextArea: !1,
          title: `Question 04`,
          type: B.String,
        },
        onaTmiVsNqoChange: { changes: `aTmiVsNqo`, type: B.ChangeHandler },
        uXsptL0nk: {
          defaultValue: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
          displayTextArea: !1,
          title: `Answer 04`,
          type: B.String,
        },
        onuXsptL0nkChange: { changes: `uXsptL0nk`, type: B.ChangeHandler },
      }),
      F(Rl, [{ explicitInter: !0, fonts: [] }, ...Dl], { supportsExplicitInterCodegen: !0 }),
      (Rl.loader = { load: (e, t) => (t.locale, Promise.allSettled([ae(wl, {}, t)])) }));
  });
function Bl(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql = e(() => {
    (f(),
      j(),
      T(),
      i(),
      He(),
      it(),
      (Vl = [`lsJPhG4Tt`, `LUOa9CvXn`, `Zb5Ws49NB`]),
      (Hl = `framer-VOJ5k`),
      (Ul = {
        lsJPhG4Tt: `framer-v-1n9ww1s`,
        LUOa9CvXn: `framer-v-1ecsdjn`,
        Zb5Ws49NB: `framer-v-1xeqrjd`,
      }),
      (Wl = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Gl = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Kl = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (ql = b.create(a)),
      (Jl = {
        "Feature Card Phone": `Zb5Ws49NB`,
        "Feature Card Tablet": `LUOa9CvXn`,
        "Feature Card": `lsJPhG4Tt`,
      }),
      (Yl = ({ height: e, icon: t, id: n, text: r, title: i, width: a, ...o }) => ({
        ...o,
        i_zfltDVX: t ??
          o.i_zfltDVX ?? {
            alt: `Icon`,
            pixelHeight: 60,
            pixelWidth: 60,
            src: `../../assets/images/d7zJIvACY906bUK6y9aYlSE2wLE.svg`,
          },
        variant: Jl[o.variant] ?? o.variant ?? `lsJPhG4Tt`,
        Wpi919cal: i ?? o.Wpi919cal ?? `Website still looks amateurish?`,
        zHwmeU1fT:
          r ??
          o.zHwmeU1fT ??
          `Upgrade your design to attract clients and boost credibility instantly.`,
      })),
      (Xl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Zl = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z(),
            c = ie(),
            {
              style: l,
              className: d,
              layoutId: f,
              variant: p,
              i_zfltDVX: m,
              Wpi919cal: _,
              zHwmeU1fT: y,
              ...x
            } = Yl(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = pe({
              cycleOrder: Vl,
              defaultVariant: `lsJPhG4Tt`,
              ref: r,
              variant: p,
              variantClassNames: Ul,
            }),
            M = Xl(e, j),
            N = V(Hl, st, Ge);
          return h(S, {
            id: f ?? i,
            children: h(ql, {
              animate: j,
              initial: !1,
              children: h(Kl, {
                value: Wl,
                children: g(b.div, {
                  ...x,
                  ...E,
                  className: V(N, `framer-1n9ww1s`, d, w),
                  "data-framer-name": `Feature Card`,
                  layoutDependency: M,
                  layoutId: `lsJPhG4Tt`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...l,
                  },
                  ...Bl(
                    {
                      LUOa9CvXn: { "data-framer-name": `Feature Card Tablet` },
                      Zb5Ws49NB: { "data-framer-name": `Feature Card Phone` },
                    },
                    C,
                    D
                  ),
                  children: [
                    h(R, {
                      background: {
                        alt: `Icon`,
                        fit: `fit`,
                        loading: G(
                          (c?.y || 0) + 30 + (((c?.height || 295) - 60 - 312) / 2 + 0 + 0)
                        ),
                        pixelHeight: 60,
                        pixelWidth: 60,
                        sizes: `60px`,
                        ...Gl(m),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-192cofy`,
                      "data-framer-name": `Icon`,
                      layoutDependency: M,
                      layoutId: `vSUC4R3Uk`,
                      ...Bl(
                        {
                          LUOa9CvXn: {
                            background: {
                              alt: `Icon`,
                              fit: `fit`,
                              loading: G(
                                (c?.y || 0) + 30 + (((c?.height || 255) - 60 - 282) / 2 + 0 + 0)
                              ),
                              pixelHeight: 60,
                              pixelWidth: 60,
                              sizes: `50px`,
                              ...Gl(m),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          Zb5Ws49NB: {
                            background: {
                              alt: `Icon`,
                              fit: `fit`,
                              loading: G(
                                (c?.y || 0) + 30 + (((c?.height || 229) - 60 - 258) / 2 + 0 + 0)
                              ),
                              pixelHeight: 60,
                              pixelWidth: 60,
                              sizes: `48px`,
                              ...Gl(m),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        C,
                        D
                      ),
                    }),
                    g(b.div, {
                      className: `framer-9nzkbn`,
                      "data-framer-name": `text`,
                      layoutDependency: M,
                      layoutId: `NceOrkv2v`,
                      children: [
                        h(W, {
                          __fromCanvasComponent: !0,
                          children: h(a, {
                            children: h(b.h6, {
                              className: `framer-styles-preset-1bk5v37`,
                              "data-styles-preset": `wmi7dzLRt`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                              },
                              children: `Website still looks amateurish?`,
                            }),
                          }),
                          className: `framer-1ekhka8`,
                          "data-framer-name": `Website still looks amateurish?`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `W3Be7mNQa`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        h(W, {
                          __fromCanvasComponent: !0,
                          children: h(a, {
                            children: h(b.p, {
                              className: `framer-styles-preset-1gmq7go`,
                              "data-styles-preset": `cUaervyv9`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85)))`,
                              },
                              children: `Upgrade your design to attract clients and boost credibility instantly.`,
                            }),
                          }),
                          className: `framer-11sghzu`,
                          "data-framer-name": `Upgrade your design to attract clients and boost credibility instantly.`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `u18g8MClv`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `.framer-VOJ5k.framer-qsvo1q, .framer-VOJ5k .framer-qsvo1q { display: block; }`,
          `.framer-VOJ5k.framer-1n9ww1s { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 387px; }`,
          `.framer-VOJ5k .framer-192cofy { flex: none; height: 60px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 60px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-VOJ5k .framer-9nzkbn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-VOJ5k .framer-1ekhka8, .framer-VOJ5k .framer-11sghzu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-VOJ5k.framer-v-1ecsdjn.framer-1n9ww1s { gap: 60px; }`,
          `.framer-VOJ5k.framer-v-1ecsdjn .framer-192cofy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 50px); width: 50px; }`,
          `.framer-VOJ5k.framer-v-1xeqrjd.framer-1n9ww1s { gap: 40px; padding: 30px 20px 30px 20px; }`,
          `.framer-VOJ5k.framer-v-1xeqrjd .framer-192cofy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 48px); width: 48px; }`,
          `.framer-VOJ5k.framer-v-1xeqrjd .framer-9nzkbn { gap: 10px; }`,
          ...at,
          ...Ue,
        ],
        `framer-VOJ5k`
      )),
      (Zl.displayName = `Feature Card`),
      (Zl.defaultProps = { height: 295, width: 387 }),
      k(Zl, {
        variant: {
          options: [`lsJPhG4Tt`, `LUOa9CvXn`, `Zb5Ws49NB`],
          optionTitles: [`Feature Card`, `Feature Card Tablet`, `Feature Card Phone`],
          title: `Variant`,
          type: B.Enum,
        },
        i_zfltDVX: {
          __defaultAssetReference: `data:framer/asset-reference,d7zJIvACY906bUK6y9aYlSE2wLE.svg?originalFilename=stress+1.svg&width=60&height=60`,
          __vekterDefault: {
            alt: `Icon`,
            assetReference: `data:framer/asset-reference,d7zJIvACY906bUK6y9aYlSE2wLE.svg?originalFilename=stress+1.svg&width=60&height=60`,
          },
          title: `Icon`,
          type: B.ResponsiveImage,
        },
        Wpi919cal: {
          defaultValue: `Website still looks amateurish?`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
        zHwmeU1fT: {
          defaultValue: `Upgrade your design to attract clients and boost credibility instantly.`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
      }),
      F(
        Zl,
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
          ...N(ot),
          ...N(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function $l(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du = e(() => {
    (f(),
      j(),
      T(),
      i(),
      Te(),
      He(),
      (eu = M(be)),
      (tu = [`syXRXZ4ht`, `qRHUdvk5F`, `YRug0TrqZ`, `mzmszGr88`]),
      (nu = `framer-r7OlU`),
      (ru = {
        mzmszGr88: `framer-v-x3a9cz`,
        qRHUdvk5F: `framer-v-kfcwo8`,
        syXRXZ4ht: `framer-v-5k6xln`,
        YRug0TrqZ: `framer-v-ehqv1f`,
      }),
      (iu = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (au = ({ value: e, children: t }) => {
        let n = o(w),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (ou = b.create(a)),
      (su = {
        "Comparison Item Check Small": `mzmszGr88`,
        "Comparison Item Check": `qRHUdvk5F`,
        "Comparison Item X Small": `YRug0TrqZ`,
        "Comparison Item X": `syXRXZ4ht`,
      }),
      (cu = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        S33EJANSj: n ?? i.S33EJANSj ?? `Experienced devs seeking advanced-only topics`,
        variant: su[i.variant] ?? i.variant ?? `syXRXZ4ht`,
      })),
      (lu = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (uu = _e(
        m(function (e, t) {
          let n = v(null),
            r = t ?? n,
            i = u(),
            { activeLocale: o, setLocale: s } = z();
          ie();
          let { style: c, className: l, layoutId: d, variant: f, S33EJANSj: p, ...m } = cu(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = pe({
              cycleOrder: tu,
              defaultVariant: `syXRXZ4ht`,
              ref: r,
              variant: f,
              variantClassNames: ru,
            }),
            A = lu(e, k),
            j = V(nu, Ge);
          return h(S, {
            id: d ?? i,
            children: h(ou, {
              animate: k,
              initial: !1,
              children: h(au, {
                value: iu,
                children: g(b.div, {
                  ...m,
                  ...C,
                  className: V(j, `framer-5k6xln`, l, y),
                  "data-framer-name": `Comparison Item X`,
                  layoutDependency: A,
                  layoutId: `syXRXZ4ht`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, rgb(235, 238, 243))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  variants: {
                    mzmszGr88: {
                      backgroundColor: `var(--token-7e11b97d-268c-4822-af47-d839e2155d3f, rgba(255, 255, 255, 0.01))`,
                    },
                    qRHUdvk5F: {
                      backgroundColor: `var(--token-7e11b97d-268c-4822-af47-d839e2155d3f, rgba(255, 255, 255, 0.01))`,
                    },
                  },
                  ...$l(
                    {
                      mzmszGr88: { "data-framer-name": `Comparison Item Check Small` },
                      qRHUdvk5F: { "data-framer-name": `Comparison Item Check` },
                      YRug0TrqZ: { "data-framer-name": `Comparison Item X Small` },
                    },
                    _,
                    w
                  ),
                  children: [
                    h(H, {
                      children: h(O, {
                        className: `framer-17ezqva-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `l3rn5Hfax-container`,
                        nodeId: `l3rn5Hfax`,
                        rendersWithMotion: !0,
                        scopeId: `Y1Mx9tQ2T`,
                        children: h(be, {
                          color: `var(--token-108a9763-029d-4bcc-ab47-9a9387b2e95d, rgb(255, 51, 116))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `X`,
                          id: `l3rn5Hfax`,
                          layoutId: `l3rn5Hfax`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `regular`,
                          width: `100%`,
                          ...$l(
                            {
                              mzmszGr88: {
                                color: `var(--token-71be8edf-000d-4b2c-b3db-9a785298e857, rgb(222, 247, 0))`,
                                iconSelection: `CheckCircle`,
                              },
                              qRHUdvk5F: {
                                color: `var(--token-71be8edf-000d-4b2c-b3db-9a785298e857, rgb(222, 247, 0))`,
                                iconSelection: `CheckCircle`,
                              },
                            },
                            _,
                            w
                          ),
                        }),
                      }),
                    }),
                    h(W, {
                      __fromCanvasComponent: !0,
                      children: h(a, {
                        children: h(b.p, {
                          className: `framer-styles-preset-1gmq7go`,
                          "data-styles-preset": `cUaervyv9`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                          },
                          children: `Experienced devs seeking advanced-only topics`,
                        }),
                      }),
                      className: `framer-1lu5lct`,
                      "data-framer-name": `Experienced devs seeking advanced-only topics`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `BGYQ0ZX2T`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: p,
                      variants: {
                        mzmszGr88: {
                          "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                        },
                        qRHUdvk5F: {
                          "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...$l(
                        {
                          mzmszGr88: {
                            children: h(a, {
                              children: h(b.p, {
                                className: `framer-styles-preset-1gmq7go`,
                                "data-styles-preset": `cUaervyv9`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                },
                                children: `Experienced devs seeking advanced-only topics`,
                              }),
                            }),
                          },
                          qRHUdvk5F: {
                            children: h(a, {
                              children: h(b.p, {
                                className: `framer-styles-preset-1gmq7go`,
                                "data-styles-preset": `cUaervyv9`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                },
                                children: `Experienced devs seeking advanced-only topics`,
                              }),
                            }),
                          },
                        },
                        _,
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
          `.framer-r7OlU.framer-aenud2, .framer-r7OlU .framer-aenud2 { display: block; }`,
          `.framer-r7OlU.framer-5k6xln { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 14px 16px 14px 16px; position: relative; width: 525px; }`,
          `.framer-r7OlU .framer-17ezqva-container { flex: none; height: 22px; position: relative; width: 22px; }`,
          `.framer-r7OlU .framer-1lu5lct { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-r7OlU.framer-v-ehqv1f.framer-5k6xln, .framer-r7OlU.framer-v-x3a9cz.framer-5k6xln { padding: 10px 14px 10px 14px; }`,
          `.framer-r7OlU.framer-v-ehqv1f .framer-17ezqva-container, .framer-r7OlU.framer-v-x3a9cz .framer-17ezqva-container { height: 18px; width: 18px; }`,
          ...Ue,
        ],
        `framer-r7OlU`
      )),
      (uu.displayName = `Comparison Item`),
      (uu.defaultProps = { height: 54, width: 525 }),
      k(uu, {
        variant: {
          options: [`syXRXZ4ht`, `qRHUdvk5F`, `YRug0TrqZ`, `mzmszGr88`],
          optionTitles: [
            `Comparison Item X`,
            `Comparison Item Check`,
            `Comparison Item X Small`,
            `Comparison Item Check Small`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
        S33EJANSj: {
          defaultValue: `Experienced devs seeking advanced-only topics`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
      }),
      F(
        uu,
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
          ...eu,
          ...N(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function fu(e) {
  let {
      angle: t = 65,
      cellSize: r = 60,
      opacity: i = 0.5,
      lineColor: a = `#6d6e71`,
      backgroundColor: o = `#FFFFFF`,
      animationSpeed: s = 5,
      perspective: c = 200,
      fadeHeight: u = 90,
      fadeColor: f = `#FFFFFF`,
      animationDirection: p = `both`,
      gridType: m = `standard`,
    } = e,
    _ = v(null),
    y = ne();
  (d(() => {
    if (y) return;
    let e = `gridMove-${Date.now()}`,
      t = ``;
    t =
      p === `horizontal`
        ? `
                @keyframes ${e} {
                    from { background-position: 0 0, 0 0; }
                    to { background-position: ${r + 1}px 0, ${r + 1}px 0; }
                }
            `
        : p === `vertical`
          ? `
                @keyframes ${e} {
                    from { background-position: 0 0, 0 0; }
                    to { background-position: 0 ${r + 1}px, 0 ${r + 1}px; }
                }
            `
          : `
                @keyframes ${e} {
                    from { background-position: 0 0, 0 0; }
                    to { background-position: ${r + 1}px ${r + 1}px, ${r + 1}px ${r + 1}px; }
                }
            `;
    let n = document.createElement(`style`);
    return (
      (n.innerHTML = t),
      document.head.appendChild(n),
      _.current && (_.current.style.animation = `${e} ${s}s linear infinite`),
      () => {
        try {
          document.head.removeChild(n);
        } catch {}
      }
    );
  }, [r, s, p, y]),
    l.useEffect(() => {
      let e = () => {
        _.current && ((_.current.style.width = `100%`), (_.current.style.height = `100%`));
      };
      return (n.addEventListener(`resize`, e), e(), () => n.removeEventListener(`resize`, e));
    }, []));
  let b = {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      overflow: `hidden`,
      pointerEvents: `none`,
      perspective: `${c}px`,
      opacity: i,
      backgroundColor: o,
      minWidth: 0,
      minHeight: 0,
      boxSizing: `border-box`,
      display: `block`,
    },
    x = {
      position: `absolute`,
      inset: 0,
      transform: `rotateX(${t}deg)`,
      width: `100%`,
      height: `100%`,
      minWidth: 0,
      minHeight: 0,
      boxSizing: `border-box`,
      display: `block`,
    },
    S = {
      position: `absolute`,
      inset: 0,
      width: `100%`,
      height: `100%`,
      minWidth: 0,
      minHeight: 0,
      boxSizing: `border-box`,
      backgroundImage: (() => {
        if (m === `diamond`) {
          let e = r;
          return `url('data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}">
          <polygon points="${e / 2},0 ${e},${e / 2} ${e / 2},${e} 0,${e / 2}" 
            fill="none" stroke="${a}" stroke-width="1"/>
        </svg>
    `)}')`;
        } else if (m === `hexagonal`) {
          let e = r,
            t = Math.sqrt(3) * e;
          return `url('data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="${e * 1.5}" height="${t}">
        <polygon 
          points="
            ${e * 0.5},0
            ${e * 1.5},0
            ${e * 2},${t / 2}
            ${e * 1.5},${t}
            ${e * 0.5},${t}
            0,${t / 2}
          "
          fill="none"
          stroke="${a}"
          stroke-width="1"
        />
      </svg>
    `)}')`;
        } else if (m === `diagonal`)
          return `
        repeating-linear-gradient(45deg, ${a}, ${a} 1px, transparent 1px, transparent ${r}px)
    `;
        else
          return `
                linear-gradient(to right, ${a} 1px, transparent 1px),
                linear-gradient(to bottom, ${a} 1px, transparent 1px)
            `;
      })(),
      backgroundRepeat: `repeat`,
      backgroundSize: `${r}px ${r}px`,
      pointerEvents: `auto`,
      cursor: `default`,
      display: `block`,
    },
    C = (e) => {
      if (m !== `standard`) return;
      let t = e.currentTarget.getBoundingClientRect(),
        n = e.clientX - t.left,
        i = e.clientY - t.top,
        a = Math.floor(n / r),
        o = Math.floor(i / r);
      D({ col: a, row: o });
    },
    w = () => D(null),
    T = (e) => {
      if (m !== `standard`) return;
      let t = e.currentTarget.getBoundingClientRect(),
        n = e.clientX - t.left,
        i = e.clientY - t.top,
        a = Math.floor(n / r),
        o = Math.floor(i / r);
      (k({ col: a, row: o }), setTimeout(() => k(null), 300));
    },
    [E, D] = l.useState(null),
    [O, k] = l.useState(null),
    A = () => {
      if (m !== `standard` || (!E && !O)) return null;
      let e = O || E;
      return e
        ? h(`div`, {
            style: {
              position: `absolute`,
              left: e.col * r,
              top: e.row * r,
              width: r,
              height: r,
              background: O ? `rgba(0,0,0,0.15)` : `rgba(0,0,0,0.08)`,
              borderRadius: 6,
              pointerEvents: `none`,
              transition: `background 0.2s`,
              zIndex: 2,
            },
          })
        : null;
    },
    j = {
      position: `absolute`,
      inset: 0,
      background: `linear-gradient(to top, ${f}, transparent ${u}%)`,
      pointerEvents: `none`,
    };
  return g(`div`, {
    style: b,
    children: [
      g(`div`, {
        style: x,
        children: [
          h(`div`, { style: S, ref: _, onMouseMove: C, onMouseLeave: w, onClick: T }),
          A(),
        ],
      }),
      h(`div`, { style: j }),
    ],
  });
}
var pu = e(() => {
    (c(),
      f(),
      i(),
      j(),
      k(fu, {
        angle: {
          type: B.Number,
          title: `Perspective Angle`,
          defaultValue: 65,
          min: 0,
          max: 90,
          step: 1,
          unit: `deg`,
        },
        cellSize: {
          type: B.Number,
          title: `Grid Cell Size`,
          defaultValue: 60,
          min: 10,
          max: 200,
          step: 1,
          unit: `px`,
        },
        opacity: {
          type: B.Number,
          title: `Grid Opacity`,
          defaultValue: 0.5,
          min: 0,
          max: 1,
          step: 0.05,
        },
        lineColor: { type: B.Color, title: `Line Color`, defaultValue: `#6d6e71` },
        backgroundColor: { type: B.Color, title: `Background Color`, defaultValue: `#FFFFFF` },
        animationSpeed: {
          type: B.Number,
          title: `Animation Speed`,
          defaultValue: 2.5,
          min: 0.5,
          max: 5,
          step: 0.1,
          unit: `s`,
        },
        perspective: {
          type: B.Number,
          title: `3D Perspective`,
          defaultValue: 200,
          min: 50,
          max: 1e3,
          step: 10,
          unit: `px`,
        },
        fadeHeight: {
          type: B.Number,
          title: `Fade Height`,
          defaultValue: 90,
          min: 0,
          max: 100,
          step: 5,
          unit: `%`,
        },
        fadeColor: { type: B.Color, title: `Fade Color`, defaultValue: `#FFFFFF` },
        animationDirection: {
          type: B.Enum,
          title: `Animation Direction`,
          defaultValue: `both`,
          options: [`horizontal`, `vertical`, `both`],
          optionTitles: [`Horizontal`, `Vertical`, `Both`],
          displaySegmentedControl: !0,
        },
        gridType: {
          type: B.Enum,
          title: `Grid Type`,
          defaultValue: `standard`,
          options: [`standard`, `diamond`, `diagonal`, `hexagonal`],
          optionTitles: [`Standard`, `Diamond`, `Diagonal`, `Hexagonal`],
          displaySegmentedControl: !0,
        },
      }));
  }),
  mu,
  hu,
  gu,
  _u = e(() => {
    (j(),
      E.loadFonts([`GF;Funnel Display-600`, `GF;Funnel Display-700`]),
      (mu = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYRGTXXcVwIZDKFA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYfWTXXcVwIZDKFA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (hu = [
        `.framer-jc9I3 .framer-styles-preset-1xjfb3:not(.rich-text-wrapper), .framer-jc9I3 .framer-styles-preset-1xjfb3.rich-text-wrapper p { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 120px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 90%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (gu = `framer-jc9I3`));
  }),
  vu,
  yu,
  bu,
  xu = e(() => {
    (j(),
      E.loadFonts([`GF;Funnel Display-600`, `GF;Funnel Display-700`]),
      (vu = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYRGTXXcVwIZDKFA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYfWTXXcVwIZDKFA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (yu = [
        `.framer-Fefu7 .framer-styles-preset-x3vx2y:not(.rich-text-wrapper), .framer-Fefu7 .framer-styles-preset-x3vx2y.rich-text-wrapper h2 { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 200px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 90%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1259px) and (min-width: 810px) { .framer-Fefu7 .framer-styles-preset-x3vx2y:not(.rich-text-wrapper), .framer-Fefu7 .framer-styles-preset-x3vx2y.rich-text-wrapper h2 { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 90%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Fefu7 .framer-styles-preset-x3vx2y:not(.rich-text-wrapper), .framer-Fefu7 .framer-styles-preset-x3vx2y.rich-text-wrapper h2 { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 90%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (bu = `framer-Fefu7`));
  }),
  Su,
  Cu,
  wu,
  Tu = e(() => {
    (j(),
      E.loadFonts([`GF;Funnel Display-600`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Su = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYRGTXXcVwIZDKFA.woff2`,
              weight: `600`,
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
      (Cu = [
        `.framer-4S5Kq .framer-styles-preset-442g5:not(.rich-text-wrapper), .framer-4S5Kq .framer-styles-preset-442g5.rich-text-wrapper p { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 300px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 80%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1259px) and (min-width: 810px) { .framer-4S5Kq .framer-styles-preset-442g5:not(.rich-text-wrapper), .framer-4S5Kq .framer-styles-preset-442g5.rich-text-wrapper p { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 190px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 80%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-4S5Kq .framer-styles-preset-442g5:not(.rich-text-wrapper), .framer-4S5Kq .framer-styles-preset-442g5.rich-text-wrapper p { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 92px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 80%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (wu = `framer-4S5Kq`));
  }),
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
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
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
  $,
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
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd;
e(() => {
  (f(),
    j(),
    T(),
    i(),
    tn(),
    as(),
    ss(),
    Te(),
    Be(),
    fs(),
    xe(),
    $s(),
    wc(),
    $c(),
    Ts(),
    pl(),
    zl(),
    Re(),
    Ql(),
    du(),
    pu(),
    ft(),
    _u(),
    xu(),
    Tu(),
    qe(),
    ye(),
    Xe(),
    Ee(),
    Ae(),
    _t(),
    (Eu = M(Ve)),
    (Du = M(is)),
    (Ou = M(ws)),
    (ku = M(ze)),
    (Au = he(R)),
    (ju = he(b.div)),
    (Mu = M(cs)),
    (Nu = M(be)),
    (Pu = M(Zl)),
    (Fu = A(b.div)),
    (Iu = M(fu)),
    (Lu = M(Cc)),
    (Ru = he(P(b.div))),
    (zu = M(os)),
    (Bu = M(Qc)),
    (Vu = M(we)),
    (Hu = M(uu)),
    (Uu = M(Gt)),
    (Wu = M(Qs)),
    (Gu = M(fl)),
    (Ku = M(Rl)),
    (qu = he(U)),
    (Ju = P(b.div)),
    (Yu = {
      FcqlJO76t: `(min-width: 810px) and (max-width: 1259.98px)`,
      WQLkyLRf1: `(min-width: 1260px)`,
      ZCv4Ny5Al: `(max-width: 809.98px)`,
    }),
    (Xu = () => typeof document < `u`),
    (Zu = []),
    (Qu = `framer-kvJaC`),
    ($u = {
      FcqlJO76t: `framer-v-35d7oo`,
      WQLkyLRf1: `framer-v-72rtr7`,
      ZCv4Ny5Al: `framer-v-v8yn8t`,
    }),
    (ed = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (td = (e, t, n) => (e && t ? `position` : n)),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (nd = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (rd = { damping: 60, delay: 0.7, mass: 1.2, stiffness: 300, type: `spring` }),
    (id = {
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
    (ad = { damping: 60, delay: 0.4, mass: 1.2, stiffness: 300, type: `spring` }),
    (od = { delay: 0, duration: 1.2, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
    (sd = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -500,
    }),
    (cd = { delay: 0, duration: 1.4, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
    (ld = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -800,
    }),
    (ud = {
      opacity: 1,
      rotate: -15,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (dd = { bounce: 0.2, delay: 0, duration: 0.75, type: `spring` }),
    (fd = {
      opacity: 1,
      rotate: -15,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: dd,
      x: 0,
      y: 0,
    }),
    (pd = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (md = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 100,
      y: 0,
    }),
    (hd = (e, t) => `translateX(-50%) ${t}`),
    (gd = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -100,
      y: 0,
    }),
    (_d = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (vd = { Desktop: `WQLkyLRf1`, Phone: `ZCv4Ny5Al`, Tablet: `FcqlJO76t` }),
    (yd = ({ value: e }) =>
      fe()
        ? null
        : h(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (bd = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: vd[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (xd = _e(
      m(function (e, t) {
        let n = v(null),
          r = t ?? n,
          i = u(),
          { activeLocale: c, setLocale: l } = z(),
          d = ie(),
          { style: f, className: p, layoutId: m, variant: _, ...y } = bd(e);
        le(s(() => gt({}, c), [c]));
        let [x, C] = te(_, Yu, !1),
          T = V(Qu, Ke, ve, ke, Ne, wu, bu, nt, gu, ht),
          E = () => !Xu() || ![`FcqlJO76t`, `ZCv4Ny5Al`].includes(x),
          D = o(oe)?.isLayoutTemplate,
          O = !!o(w)?.transition?.layout,
          k = td(D, O, `position`);
        ee();
        let A = () => !Xu() || x !== `ZCv4Ny5Al`,
          j = re(`F0TAo7Gf5`),
          M = v(null),
          N = re(`DdZhzy_GM`),
          P = v(null),
          F = re(`BllTPa7ax`),
          ne = v(null),
          B = () => !Xu() || x === `ZCv4Ny5Al`,
          ae = v(null),
          se = re(`GWhAx0Im3`),
          ce = re(`ft_MhHSmH`),
          ue = v(null),
          fe = () => !Xu() || x !== `FcqlJO76t`;
        return (
          de({}),
          h(oe.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: vd,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: $u,
            },
            children: g(S, {
              id: m ?? i,
              children: [
                h(yd, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                g(Ju, {
                  ...y,
                  className: V(T, `framer-72rtr7`, p),
                  flowEffectEnabled: !0,
                  flowEffectTransition: ed,
                  isNestedFlowEffect: !1,
                  ref: r,
                  style: { ...f },
                  children: [
                    E() &&
                      h(H, {
                        children: h(U, {
                          className: `framer-oyezyq-container hidden-35d7oo hidden-v8yn8t`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: k,
                          nodeId: `pWw8w8NgR`,
                          rendersWithMotion: !0,
                          scopeId: `augiA20Il`,
                          children: h(Ve, {
                            height: `100%`,
                            id: `pWw8w8NgR`,
                            intensity: 12,
                            layoutId: `pWw8w8NgR`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    h(H, {
                      children: h(U, {
                        className: `framer-bxalll-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: k,
                        nodeId: `bJcHXCRbC`,
                        rendersWithMotion: !0,
                        scopeId: `augiA20Il`,
                        children: h(is, {
                          color: `rgb(0, 0, 0)`,
                          duration: 0.4,
                          effectSize: 60,
                          height: `100%`,
                          id: `bJcHXCRbC`,
                          interactionMode: `particles`,
                          layoutId: `bJcHXCRbC`,
                          rotation: 0,
                          strokeWidth: 2,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    h(I, {
                      breakpoint: x,
                      overrides: {
                        FcqlJO76t: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 1940,
                            pixelWidth: 3200,
                            sizes: d?.width || `100vw`,
                            src: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png`,
                            srcSet: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5374e3.png 512w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-ecf4d3.png 1024w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk.png 2048w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png 3200w`,
                          },
                        },
                        ZCv4Ny5Al: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 1940,
                            pixelWidth: 3200,
                            sizes: d?.width || `100vw`,
                            src: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png`,
                            srcSet: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5374e3.png 512w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-ecf4d3.png 1024w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk.png 2048w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png 3200w`,
                          },
                        },
                      },
                      children: g(R, {
                        as: `section`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: G((d?.y || 0) + 0 + 200),
                          pixelHeight: 1940,
                          pixelWidth: 3200,
                          sizes: d?.width || `100vw`,
                          src: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png`,
                          srcSet: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5374e3.png 512w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-ecf4d3.png 1024w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk.png 2048w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png 3200w`,
                        },
                        className: `framer-2et8rt`,
                        "data-framer-name": `Hero Section`,
                        layout: k,
                        children: [
                          E() &&
                            h(`div`, {
                              className: `framer-1napher hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-npnho8 hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-x4tao4 hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-1kx63yo hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-mvktea hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-oysp4l hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-xpti4h hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Line`,
                            }),
                          h(`div`, {
                            className: `framer-11uine4`,
                            "data-framer-name": `Container`,
                            children: g(`div`, {
                              className: `framer-1ryn4fr`,
                              "data-framer-name": `Content`,
                              children: [
                                g(`div`, {
                                  className: `framer-kmlb90`,
                                  "data-framer-name": `Text Wrapper`,
                                  children: [
                                    g(`div`, {
                                      className: `framer-15f5mhq`,
                                      "data-framer-name": `Title and List`,
                                      children: [
                                        g(`div`, {
                                          className: `framer-jebi3k`,
                                          "data-framer-name": `Title Wrapper`,
                                          children: [
                                            h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                ZCv4Ny5Al: {
                                                  children: h(a, {
                                                    children: g(`h1`, {
                                                      className: `framer-styles-preset-u1do24`,
                                                      "data-styles-preset": `MD8xx2tR5`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                                      },
                                                      children: [
                                                        `Master `,
                                                        h(`span`, {
                                                          style: {
                                                            "--framer-text-color": `var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255))`,
                                                          },
                                                          children: `low-code`,
                                                        }),
                                                        ` development to create high-converting sites`,
                                                      ],
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: h(W, {
                                                __fromCanvasComponent: !0,
                                                children: h(a, {
                                                  children: g(`h1`, {
                                                    className: `framer-styles-preset-u1do24`,
                                                    "data-styles-preset": `MD8xx2tR5`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                                    },
                                                    children: [
                                                      `Master `,
                                                      h(`span`, {
                                                        style: {
                                                          "--framer-text-color": `var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255))`,
                                                        },
                                                        children: `low-code`,
                                                      }),
                                                      ` development to create high-converting sites`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-il017z`,
                                                "data-framer-name": `Master low-code development to create high-converting sites`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            E() &&
                                              h(`div`, {
                                                className: `framer-1lbf7op hidden-35d7oo hidden-v8yn8t`,
                                                "data-framer-name": `bg`,
                                              }),
                                          ],
                                        }),
                                        g(`div`, {
                                          className: `framer-rt7vn7`,
                                          "data-framer-name": `List Wrapper`,
                                          children: [
                                            h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { y: void 0 },
                                                ZCv4Ny5Al: { y: void 0 },
                                              },
                                              children: h(H, {
                                                height: 18,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  200 +
                                                  170 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  94 +
                                                  0,
                                                children: h(U, {
                                                  className: `framer-gcroan-container`,
                                                  nodeId: `Exy6k5vp1`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(ws, {
                                                    bAJTrZ1xP: `Zero to hero in 30 days`,
                                                    height: `100%`,
                                                    id: `Exy6k5vp1`,
                                                    layoutId: `Exy6k5vp1`,
                                                    variant: $(`Rn2tLfSij`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { y: void 0 },
                                                ZCv4Ny5Al: { y: void 0 },
                                              },
                                              children: h(H, {
                                                height: 18,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  200 +
                                                  170 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  94 +
                                                  0,
                                                children: h(U, {
                                                  className: `framer-12p4q7v-container`,
                                                  nodeId: `h28k7AQNl`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(ws, {
                                                    bAJTrZ1xP: `Real client project`,
                                                    height: `100%`,
                                                    id: `h28k7AQNl`,
                                                    layoutId: `h28k7AQNl`,
                                                    variant: $(`Rn2tLfSij`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { y: void 0 },
                                                ZCv4Ny5Al: { y: void 0 },
                                              },
                                              children: h(H, {
                                                height: 18,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  200 +
                                                  170 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  94 +
                                                  0,
                                                children: h(U, {
                                                  className: `framer-1ni36af-container`,
                                                  nodeId: `zVvXYF7mW`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(ws, {
                                                    bAJTrZ1xP: `Lifetime support`,
                                                    height: `100%`,
                                                    id: `zVvXYF7mW`,
                                                    layoutId: `zVvXYF7mW`,
                                                    variant: $(`Rn2tLfSij`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    h(L, {
                                      links: [
                                        {
                                          href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: { y: void 0 },
                                            ZCv4Ny5Al: { y: void 0 },
                                          },
                                          children: h(H, {
                                            height: 52,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              200 +
                                              170 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              152,
                                            children: h(U, {
                                              className: `framer-6jxwmh-container`,
                                              nodeId: `DEIzVdOB6`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { FoLVmcAEo: e[1] },
                                                  ZCv4Ny5Al: { FoLVmcAEo: e[2] },
                                                },
                                                children: h(ze, {
                                                  BtsQvUJh8: `enroll now for $399`,
                                                  FoLVmcAEo: e[0],
                                                  height: `100%`,
                                                  id: `DEIzVdOB6`,
                                                  layoutId: `DEIzVdOB6`,
                                                  variant: $(`JOAp0W7En`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                                g(`div`, {
                                  className: `framer-kb0x89`,
                                  "data-framer-name": `Image Wrapper`,
                                  children: [
                                    A() &&
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            background: {
                                              alt: `Image`,
                                              fit: `fill`,
                                              pixelHeight: 1260,
                                              pixelWidth: 972,
                                              sizes: `120px`,
                                              src: `../../assets/images/axOKMTp55LRMHXvSLO3T2YeVHfc-a991a9.png`,
                                              srcSet: `../../assets/images/axOKMTp55LRMHXvSLO3T2YeVHfc.png 789w,../../assets/images/axOKMTp55LRMHXvSLO3T2YeVHfc-a991a9.png 972w`,
                                            },
                                          },
                                        },
                                        children: h(Au, {
                                          __framer__animate: { transition: rd },
                                          __framer__animateOnce: !0,
                                          __framer__enter: nd,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: `Image`,
                                            fit: `fill`,
                                            loading: G(
                                              (d?.y || 0) +
                                                0 +
                                                200 +
                                                170 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                264 +
                                                -72
                                            ),
                                            pixelHeight: 1260,
                                            pixelWidth: 972,
                                            sizes: `263px`,
                                            src: `../../assets/images/axOKMTp55LRMHXvSLO3T2YeVHfc-a991a9.png`,
                                            srcSet: `../../assets/images/axOKMTp55LRMHXvSLO3T2YeVHfc.png 789w,../../assets/images/axOKMTp55LRMHXvSLO3T2YeVHfc-a991a9.png 972w`,
                                          },
                                          className: `framer-192zlmo hidden-v8yn8t`,
                                          "data-framer-name": `Shape`,
                                        }),
                                      }),
                                    h(ju, {
                                      __framer__animate: { transition: ad },
                                      __framer__animateOnce: !0,
                                      __framer__enter: id,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-ofidbj`,
                                      "data-border": !0,
                                      "data-framer-name": `Image and Button`,
                                      children: h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              pixelHeight: 1006,
                                              pixelWidth: 1800,
                                              sizes: `max(max(min(${d?.width || `100vw`} - 60px, 1200px) * 0.85, 1px) - 20px, 1px)`,
                                              src: `../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-57cbe6.jpg`,
                                              srcSet: `../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-f4a034.jpg 512w,../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE.jpg 1024w,../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-57cbe6.jpg 1800w`,
                                            },
                                          },
                                          ZCv4Ny5Al: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              pixelHeight: 1006,
                                              pixelWidth: 1800,
                                              sizes: `max(max(min(${d?.width || `100vw`} - 40px, 1200px), 1px) - 20px, 1px)`,
                                              src: `../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-57cbe6.jpg`,
                                              srcSet: `../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-f4a034.jpg 512w,../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE.jpg 1024w,../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-57cbe6.jpg 1800w`,
                                            },
                                          },
                                        },
                                        children: h(R, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: G(
                                              (d?.y || 0) +
                                                0 +
                                                200 +
                                                170 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                264 +
                                                0 +
                                                10
                                            ),
                                            pixelHeight: 1006,
                                            pixelWidth: 1800,
                                            sizes: `680px`,
                                            src: `../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-57cbe6.jpg`,
                                            srcSet: `../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-f4a034.jpg 512w,../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE.jpg 1024w,../../assets/images/qYftmG6ru6oFbLk4OiKcz4XWE-57cbe6.jpg 1800w`,
                                          },
                                          className: `framer-sses4c`,
                                        }),
                                      }),
                                    }),
                                    A() &&
                                      g(ju, {
                                        __framer__animate: { transition: rd },
                                        __framer__animateOnce: !0,
                                        __framer__enter: nd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1peomad hidden-v8yn8t`,
                                        "data-framer-name": `Review`,
                                        style: { rotate: -15 },
                                        children: [
                                          h(H, {
                                            children: h(U, {
                                              className: `framer-7fsb6f-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `ME_7yj8Up`,
                                              scopeId: `augiA20Il`,
                                              children: h(cs, {
                                                height: `100%`,
                                                id: `ME_7yj8Up`,
                                                layoutId: `ME_7yj8Up`,
                                                settings: {
                                                  alpha: 1,
                                                  blur: 5,
                                                  border: 0,
                                                  borderColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                                  dispersion: 10,
                                                  displace: 0.2,
                                                  frost: 0.1,
                                                  lightness: 35,
                                                  mode: `custom`,
                                                  radius: 10,
                                                  scale: 1,
                                                },
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          g(`div`, {
                                            className: `framer-132bqfe`,
                                            "data-framer-name": `Avatar`,
                                            children: [
                                              h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      sizes: `38px`,
                                                      src: `../../assets/images/dySgjXSCUPUT8I2YpYZ7IbegE0.jpg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        200 +
                                                        170 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        264 +
                                                        400 -
                                                        266.0404 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 400,
                                                    pixelWidth: 400,
                                                    sizes: `38px`,
                                                    src: `../../assets/images/dySgjXSCUPUT8I2YpYZ7IbegE0.jpg`,
                                                  },
                                                  className: `framer-ackd1j`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                              h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      sizes: `38px`,
                                                      src: `../../assets/images/vj6YyAMBf8GdBJvHDP535sYbE.jpg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        200 +
                                                        170 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        264 +
                                                        400 -
                                                        266.0404 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 400,
                                                    pixelWidth: 400,
                                                    sizes: `38px`,
                                                    src: `../../assets/images/vj6YyAMBf8GdBJvHDP535sYbE.jpg`,
                                                  },
                                                  className: `framer-t7554q`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                              h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      sizes: `38px`,
                                                      src: `../../assets/images/OOHlH5oNux4bxMMNcQusa0UO4U.jpg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        200 +
                                                        170 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        264 +
                                                        400 -
                                                        266.0404 +
                                                        10 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 400,
                                                    pixelWidth: 400,
                                                    sizes: `38px`,
                                                    src: `../../assets/images/OOHlH5oNux4bxMMNcQusa0UO4U.jpg`,
                                                  },
                                                  className: `framer-18qs5al`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Avatar`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          g(`div`, {
                                            className: `framer-u4ijce`,
                                            "data-framer-name": `Review`,
                                            children: [
                                              g(`div`, {
                                                className: `framer-rmdc5a`,
                                                "data-framer-name": `Rating`,
                                                children: [
                                                  h(H, {
                                                    children: h(U, {
                                                      className: `framer-d4wnvj-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `dVCKgmMr8`,
                                                      scopeId: `augiA20Il`,
                                                      children: h(be, {
                                                        color: `var(--token-df496ac5-ec01-4044-afad-924edca78b78, rgb(255, 204, 0))`,
                                                        height: `100%`,
                                                        iconSearch: `House`,
                                                        iconSelection: `Star`,
                                                        id: `dVCKgmMr8`,
                                                        layoutId: `dVCKgmMr8`,
                                                        mirrored: !1,
                                                        selectByList: !0,
                                                        style: { height: `100%`, width: `100%` },
                                                        weight: `fill`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  h(H, {
                                                    children: h(U, {
                                                      className: `framer-1wqokmr-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `kmoeL6nfz`,
                                                      scopeId: `augiA20Il`,
                                                      children: h(be, {
                                                        color: `var(--token-df496ac5-ec01-4044-afad-924edca78b78, rgb(255, 204, 0))`,
                                                        height: `100%`,
                                                        iconSearch: `House`,
                                                        iconSelection: `Star`,
                                                        id: `kmoeL6nfz`,
                                                        layoutId: `kmoeL6nfz`,
                                                        mirrored: !1,
                                                        selectByList: !0,
                                                        style: { height: `100%`, width: `100%` },
                                                        weight: `fill`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  h(H, {
                                                    children: h(U, {
                                                      className: `framer-1x6xy6g-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `lrBJRKKh_`,
                                                      scopeId: `augiA20Il`,
                                                      children: h(be, {
                                                        color: `var(--token-df496ac5-ec01-4044-afad-924edca78b78, rgb(255, 204, 0))`,
                                                        height: `100%`,
                                                        iconSearch: `House`,
                                                        iconSelection: `Star`,
                                                        id: `lrBJRKKh_`,
                                                        layoutId: `lrBJRKKh_`,
                                                        mirrored: !1,
                                                        selectByList: !0,
                                                        style: { height: `100%`, width: `100%` },
                                                        weight: `fill`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  h(H, {
                                                    children: h(U, {
                                                      className: `framer-9s8eba-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `roExIP5C9`,
                                                      scopeId: `augiA20Il`,
                                                      children: h(be, {
                                                        color: `var(--token-df496ac5-ec01-4044-afad-924edca78b78, rgb(255, 204, 0))`,
                                                        height: `100%`,
                                                        iconSearch: `House`,
                                                        iconSelection: `Star`,
                                                        id: `roExIP5C9`,
                                                        layoutId: `roExIP5C9`,
                                                        mirrored: !1,
                                                        selectByList: !0,
                                                        style: { height: `100%`, width: `100%` },
                                                        weight: `fill`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  h(H, {
                                                    children: h(U, {
                                                      className: `framer-138z4yr-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `AOqdgrd6T`,
                                                      scopeId: `augiA20Il`,
                                                      children: h(be, {
                                                        color: `var(--token-df496ac5-ec01-4044-afad-924edca78b78, rgb(255, 204, 0))`,
                                                        height: `100%`,
                                                        iconSearch: `House`,
                                                        iconSelection: `Star`,
                                                        id: `AOqdgrd6T`,
                                                        layoutId: `AOqdgrd6T`,
                                                        mirrored: !1,
                                                        selectByList: !0,
                                                        style: { height: `100%`, width: `100%` },
                                                        weight: `fill`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  h(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: h(a, {
                                                      children: h(`p`, {
                                                        className: `framer-styles-preset-1yo9nb5`,
                                                        "data-styles-preset": `qN3uIbesA`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                                        },
                                                        children: `4.9`,
                                                      }),
                                                    }),
                                                    className: `framer-ayjhpv`,
                                                    "data-framer-name": `4.9`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              h(W, {
                                                __fromCanvasComponent: !0,
                                                children: h(a, {
                                                  children: h(`p`, {
                                                    className: `framer-styles-preset-1yo9nb5`,
                                                    "data-styles-preset": `qN3uIbesA`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, rgb(235, 238, 243))`,
                                                    },
                                                    children: `Based on 2,169 reviews`,
                                                  }),
                                                }),
                                                className: `framer-kw2wi8`,
                                                "data-framer-name": `Based on 2,169 reviews`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
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
                          E() &&
                            h(R, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: G((d?.y || 0) + 0 + 200 + 1014 - 338),
                                pixelHeight: 1026,
                                pixelWidth: 6400,
                                positionX: `center`,
                                positionY: `top`,
                                sizes: d?.width || `100vw`,
                                src: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png`,
                                srcSet: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-460933.png 512w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-684486.png 1024w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw.png 2048w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-22f744.png 4096w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png 6400w`,
                              },
                              className: `framer-17p04ro hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Cloud`,
                            }),
                          E() &&
                            h(`div`, {
                              className: `framer-zz0qp0 hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `BG`,
                            }),
                          E() &&
                            h(ju, {
                              __framer__loop: sd,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopPauseOffscreen: !1,
                              __framer__loopRepeatDelay: 1,
                              __framer__loopRepeatType: `loop`,
                              __framer__loopTransition: od,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-f196iw hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Shimmer Right`,
                            }),
                          E() &&
                            h(ju, {
                              __framer__loop: ld,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopPauseOffscreen: !1,
                              __framer__loopRepeatDelay: 0.8,
                              __framer__loopRepeatType: `loop`,
                              __framer__loopTransition: cd,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-5s020z hidden-35d7oo hidden-v8yn8t`,
                              "data-framer-name": `Shimmer Left`,
                            }),
                        ],
                      }),
                    }),
                    g(b.section, {
                      className: `framer-1hosxob`,
                      "data-framer-name": `Service Section`,
                      id: j,
                      layout: k,
                      ref: M,
                      children: [
                        h(`div`, {
                          className: `framer-dql4c7`,
                          "data-framer-name": `Container`,
                          children: g(`div`, {
                            className: `framer-wata98`,
                            "data-framer-name": `Content`,
                            children: [
                              g(`div`, {
                                className: `framer-rex5j5`,
                                "data-framer-name": `Features Content`,
                                children: [
                                  g(`div`, {
                                    className: `framer-pemkgc`,
                                    "data-framer-name": `Title Wrapper`,
                                    children: [
                                      g(`div`, {
                                        className: `framer-17gaica`,
                                        "data-framer-name": `Section Title`,
                                        children: [
                                          h(W, {
                                            __fromCanvasComponent: !0,
                                            children: h(a, {
                                              children: h(`p`, {
                                                className: `framer-styles-preset-r0f6qh`,
                                                "data-styles-preset": `YCYFDwdBK`,
                                                style: {
                                                  "--framer-text-color": `var(--token-98bdbbdf-860d-46ce-a5fe-954f3944e402, rgb(0, 148, 247))`,
                                                },
                                                children: `Is this you?`,
                                              }),
                                            }),
                                            className: `framer-2znhjm`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          E() &&
                                            h(Au, {
                                              __framer__animate: { transition: dd },
                                              __framer__animateOnce: !1,
                                              __framer__enter: ud,
                                              __framer__exit: fd,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              background: {
                                                alt: `Icon`,
                                                fit: `fill`,
                                                loading: G(
                                                  (d?.y || 0) +
                                                    0 +
                                                    1214 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 33,
                                                pixelWidth: 105,
                                                sizes: `101px`,
                                                src: `../../assets/images/KoQpTIEm4zcD4cO06DPVrlphcXQ.svg`,
                                              },
                                              className: `framer-15g2n71 hidden-35d7oo hidden-v8yn8t`,
                                              "data-framer-name": `Icon`,
                                            }),
                                        ],
                                      }),
                                      h(W, {
                                        __fromCanvasComponent: !0,
                                        children: h(a, {
                                          children: h(`h2`, {
                                            className: `framer-styles-preset-rsefcq`,
                                            "data-styles-preset": `ZckC7in5y`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                            },
                                            children: `Struggling to understand where to start or how to grow?`,
                                          }),
                                        }),
                                        className: `framer-1wilhb6`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  g(ju, {
                                    __framer__animate: { transition: rd },
                                    __framer__animateOnce: !0,
                                    __framer__enter: id,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-n9ibgh`,
                                    "data-border": !0,
                                    "data-framer-name": `Service Card Wrapper`,
                                    children: [
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 50px)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 20px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 295,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 50px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1214 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            167.6 +
                                            10 +
                                            0,
                                          children: h(U, {
                                            className: `framer-sghd1q-container`,
                                            nodeId: `qWWUSl2Xz`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`LUOa9CvXn`) },
                                                ZCv4Ny5Al: { variant: $(`Zb5Ws49NB`) },
                                              },
                                              children: h(Zl, {
                                                height: `100%`,
                                                id: `qWWUSl2Xz`,
                                                layoutId: `qWWUSl2Xz`,
                                                style: { width: `100%` },
                                                variant: $(`lsJPhG4Tt`),
                                                width: `100%`,
                                                Wpi919cal: `Website still looks dull?`,
                                                zHwmeU1fT: `Upgrade your design to attract clients and boost credibility instantly.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 50px)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 20px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 295,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 50px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1214 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            167.6 +
                                            10 +
                                            0,
                                          children: h(U, {
                                            className: `framer-1kdq4rs-container`,
                                            nodeId: `uZrI9hEP_`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`LUOa9CvXn`) },
                                                ZCv4Ny5Al: { variant: $(`Zb5Ws49NB`) },
                                              },
                                              children: h(Zl, {
                                                height: `100%`,
                                                i_zfltDVX: pd(
                                                  {
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    src: `../../assets/images/HQERIYJdcMGzQxsktUB85jlmGjE.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                                id: `uZrI9hEP_`,
                                                layoutId: `uZrI9hEP_`,
                                                style: { width: `100%` },
                                                variant: $(`lsJPhG4Tt`),
                                                width: `100%`,
                                                Wpi919cal: `Website traffic but no results?`,
                                                zHwmeU1fT: `Turn visitors into customers with high-converting design and strategy.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 50px)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 20px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 295,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 50px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1214 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            167.6 +
                                            10 +
                                            0,
                                          children: h(U, {
                                            className: `framer-10bsqf5-container`,
                                            nodeId: `PpqSM9Yo7`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`LUOa9CvXn`) },
                                                ZCv4Ny5Al: { variant: $(`Zb5Ws49NB`) },
                                              },
                                              children: h(Zl, {
                                                height: `100%`,
                                                i_zfltDVX: pd(
                                                  {
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    src: `../../assets/images/LvDw4Jsa2bIoWMGSPG5qpNOtLWs.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                                id: `PpqSM9Yo7`,
                                                layoutId: `PpqSM9Yo7`,
                                                style: { width: `100%` },
                                                variant: $(`lsJPhG4Tt`),
                                                width: `100%`,
                                                Wpi919cal: `How can I pick inspiration?`,
                                                zHwmeU1fT: `Unlock sources and techniques to fuel your next great project.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 50px)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 20px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 295,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 50px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1214 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            167.6 +
                                            10 +
                                            305,
                                          children: h(U, {
                                            className: `framer-16o1yor-container`,
                                            nodeId: `wyhWjUEPA`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`LUOa9CvXn`) },
                                                ZCv4Ny5Al: { variant: $(`Zb5Ws49NB`) },
                                              },
                                              children: h(Zl, {
                                                height: `100%`,
                                                i_zfltDVX: pd(
                                                  {
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    src: `../../assets/images/PGMEBpIzWwuLvbL2xzpsiC7K7w.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                                id: `wyhWjUEPA`,
                                                layoutId: `wyhWjUEPA`,
                                                style: { width: `100%` },
                                                variant: $(`lsJPhG4Tt`),
                                                width: `100%`,
                                                Wpi919cal: `Stuck at the very first step?`,
                                                zHwmeU1fT: `Get guidance and actionable steps to launch your project confidently.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 50px)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 20px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 295,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 50px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1214 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            167.6 +
                                            10 +
                                            305,
                                          children: h(U, {
                                            className: `framer-trsgwd-container`,
                                            nodeId: `dYQjcV3Uf`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`LUOa9CvXn`) },
                                                ZCv4Ny5Al: { variant: $(`Zb5Ws49NB`) },
                                              },
                                              children: h(Zl, {
                                                height: `100%`,
                                                i_zfltDVX: pd(
                                                  {
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    src: `../../assets/images/vr2Ty9kbigF7UTEY7cuo247KMCc.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                                id: `dYQjcV3Uf`,
                                                layoutId: `dYQjcV3Uf`,
                                                style: { width: `100%` },
                                                variant: $(`lsJPhG4Tt`),
                                                width: `100%`,
                                                Wpi919cal: `Struggling in support?`,
                                                zHwmeU1fT: `Get 1v1 mentorship and guidance whenever you need it most.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 50px)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 20px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 295,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 50px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1214 +
                                            130 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            167.6 +
                                            10 +
                                            305,
                                          children: h(U, {
                                            className: `framer-35g2pp-container`,
                                            nodeId: `AlDwKWgEq`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`LUOa9CvXn`) },
                                                ZCv4Ny5Al: { variant: $(`Zb5Ws49NB`) },
                                              },
                                              children: h(Zl, {
                                                height: `100%`,
                                                i_zfltDVX: pd(
                                                  {
                                                    pixelHeight: 60,
                                                    pixelWidth: 66,
                                                    src: `../../assets/images/ZQYtr6DABMdnpaRFfe8bSKO06Mk.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                                id: `AlDwKWgEq`,
                                                layoutId: `AlDwKWgEq`,
                                                style: { width: `100%` },
                                                variant: $(`lsJPhG4Tt`),
                                                width: `100%`,
                                                Wpi919cal: `Want a dedicated mentor?`,
                                                zHwmeU1fT: `Unlock personalized attention and step-by-step support for faster growth.`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g(`div`, {
                                className: `framer-o9xfh2`,
                                "data-framer-name": `Brands Wrapper`,
                                children: [
                                  h(W, {
                                    __fromCanvasComponent: !0,
                                    children: h(a, {
                                      children: h(`p`, {
                                        className: `framer-styles-preset-r0f6qh`,
                                        "data-styles-preset": `YCYFDwdBK`,
                                        style: {
                                          "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                        },
                                        children: `Trusted by:`,
                                      }),
                                    }),
                                    className: `framer-hqzl3u`,
                                    "data-framer-name": `Is this you?`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  h(`div`, {
                                    className: `framer-lzh705`,
                                    "data-framer-name": `Ticker Wrapper`,
                                    children: h(I, {
                                      breakpoint: x,
                                      overrides: {
                                        FcqlJO76t: { tickerEffectGap: `60px` },
                                        ZCv4Ny5Al: { tickerEffectGap: `60px` },
                                      },
                                      children: g(Fu, {
                                        className: `framer-1l8olw3`,
                                        tickerEffectAlign: `center`,
                                        tickerEffectDirectionModifier: `default`,
                                        tickerEffectDraggable: !1,
                                        tickerEffectEnabled: !0,
                                        tickerEffectGap: `80px`,
                                        tickerEffectHoverModifier: 100,
                                        tickerEffectOverflow: `clip`,
                                        tickerEffectPosition: `relative`,
                                        tickerEffectStackDirection: `row`,
                                        tickerEffectVelocity: 50,
                                        children: [
                                          h(me, {
                                            children: h(`div`, {
                                              className: `framer-o0a3a4`,
                                              "data-framer-name": `Icon Wrapper`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 161,
                                                      sizes: `161px`,
                                                      src: `../../assets/images/ehcAYzSWKnLceZoYqyQBoYk45k.svg`,
                                                    },
                                                  },
                                                  ZCv4Ny5Al: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 161,
                                                      sizes: `161px`,
                                                      src: `../../assets/images/ehcAYzSWKnLceZoYqyQBoYk45k.svg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1214 +
                                                        130 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        887.6 +
                                                        0 +
                                                        54 +
                                                        0 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 30,
                                                    pixelWidth: 161,
                                                    sizes: `161px`,
                                                    src: `../../assets/images/ehcAYzSWKnLceZoYqyQBoYk45k.svg`,
                                                  },
                                                  className: `framer-2w26ul`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(me, {
                                            children: h(`div`, {
                                              className: `framer-79ywx0`,
                                              "data-framer-name": `Icon Wrapper`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 179,
                                                      sizes: `179px`,
                                                      src: `../../assets/images/LA3McjSfRNbupZobFXraQ7fE348.svg`,
                                                    },
                                                  },
                                                  ZCv4Ny5Al: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 179,
                                                      sizes: `179px`,
                                                      src: `../../assets/images/LA3McjSfRNbupZobFXraQ7fE348.svg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1214 +
                                                        130 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        887.6 +
                                                        0 +
                                                        54 +
                                                        0 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 30,
                                                    pixelWidth: 179,
                                                    sizes: `179px`,
                                                    src: `../../assets/images/LA3McjSfRNbupZobFXraQ7fE348.svg`,
                                                  },
                                                  className: `framer-1l77w10`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(me, {
                                            children: h(`div`, {
                                              className: `framer-11e7qdv`,
                                              "data-framer-name": `Icon Wrapper`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 167,
                                                      sizes: `167px`,
                                                      src: `../../assets/images/v21gEisGmbwjZTBf8slTjDMtsg.svg`,
                                                    },
                                                  },
                                                  ZCv4Ny5Al: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 167,
                                                      sizes: `167px`,
                                                      src: `../../assets/images/v21gEisGmbwjZTBf8slTjDMtsg.svg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1214 +
                                                        130 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        887.6 +
                                                        0 +
                                                        54 +
                                                        0 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 30,
                                                    pixelWidth: 167,
                                                    sizes: `167px`,
                                                    src: `../../assets/images/v21gEisGmbwjZTBf8slTjDMtsg.svg`,
                                                  },
                                                  className: `framer-bl4pb8`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(me, {
                                            children: h(`div`, {
                                              className: `framer-1temybj`,
                                              "data-framer-name": `Icon Wrapper`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 155,
                                                      sizes: `155px`,
                                                      src: `../../assets/images/T3rXv4mUmxewLlWVQiYzEYijNk.svg`,
                                                    },
                                                  },
                                                  ZCv4Ny5Al: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 155,
                                                      sizes: `155px`,
                                                      src: `../../assets/images/T3rXv4mUmxewLlWVQiYzEYijNk.svg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1214 +
                                                        130 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        887.6 +
                                                        0 +
                                                        54 +
                                                        0 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 30,
                                                    pixelWidth: 155,
                                                    sizes: `155px`,
                                                    src: `../../assets/images/T3rXv4mUmxewLlWVQiYzEYijNk.svg`,
                                                  },
                                                  className: `framer-lymqq`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          h(me, {
                                            children: h(`div`, {
                                              className: `framer-zr2lts`,
                                              "data-framer-name": `Icon Wrapper`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 195,
                                                      sizes: `195px`,
                                                      src: `../../assets/images/O2XP12wnkylp2aau42VTyMSL4Ck.svg`,
                                                    },
                                                  },
                                                  ZCv4Ny5Al: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      pixelHeight: 30,
                                                      pixelWidth: 195,
                                                      sizes: `195px`,
                                                      src: `../../assets/images/O2XP12wnkylp2aau42VTyMSL4Ck.svg`,
                                                    },
                                                  },
                                                },
                                                children: h(R, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: G(
                                                      (d?.y || 0) +
                                                        0 +
                                                        1214 +
                                                        130 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        887.6 +
                                                        0 +
                                                        54 +
                                                        0 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 30,
                                                    pixelWidth: 195,
                                                    sizes: `195px`,
                                                    src: `../../assets/images/O2XP12wnkylp2aau42VTyMSL4Ck.svg`,
                                                  },
                                                  className: `framer-m35joa`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        h(H, {
                          children: h(U, {
                            className: `framer-je0ld1-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            nodeId: `Lel3jgUEl`,
                            scopeId: `augiA20Il`,
                            children: h(fu, {
                              angle: 65,
                              animationDirection: `vertical`,
                              animationSpeed: 2.5,
                              backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              cellSize: 50,
                              fadeColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              fadeHeight: 90,
                              gridType: `standard`,
                              height: `100%`,
                              id: `Lel3jgUEl`,
                              layoutId: `Lel3jgUEl`,
                              lineColor: `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                              opacity: 0.3,
                              perspective: 200,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(b.section, {
                      className: `framer-15ehdif`,
                      "data-framer-name": `Curriculum Section`,
                      id: N,
                      layout: k,
                      ref: P,
                      children: h(`div`, {
                        className: `framer-1qe7g3y`,
                        "data-framer-name": `Container`,
                        children: g(`div`, {
                          className: `framer-xj1by`,
                          "data-framer-name": `Content`,
                          children: [
                            g(`div`, {
                              className: `framer-w2xciu`,
                              "data-framer-name": `Title Wrapper`,
                              children: [
                                g(`div`, {
                                  className: `framer-oeus2a`,
                                  "data-framer-name": `Section Title`,
                                  children: [
                                    E() &&
                                      h(Au, {
                                        __framer__animate: { transition: dd },
                                        __framer__animateOnce: !1,
                                        __framer__enter: ud,
                                        __framer__exit: fd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `Icon`,
                                          fit: `fill`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              2380.6 +
                                              65 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 33,
                                          pixelWidth: 105,
                                          sizes: `101px`,
                                          src: `../../assets/images/HgBlpxK3DClXUjbKZ7xlT4qQ4m8.svg`,
                                        },
                                        className: `framer-z0h156 hidden-35d7oo hidden-v8yn8t`,
                                        "data-framer-name": `Icon`,
                                      }),
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-r0f6qh`,
                                          "data-styles-preset": `YCYFDwdBK`,
                                          style: {
                                            "--framer-text-color": `var(--token-d3fceefd-00d6-447d-b8a0-2a771ee26fb8, rgb(97, 85, 245))`,
                                          },
                                          children: `Curriculum overview`,
                                        }),
                                      }),
                                      className: `framer-k0ujbs`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                h(W, {
                                  __fromCanvasComponent: !0,
                                  children: h(a, {
                                    children: h(`h2`, {
                                      className: `framer-styles-preset-rsefcq`,
                                      "data-styles-preset": `ZckC7in5y`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                      },
                                      children: `Crack the code to elite low-code solutions.`,
                                    }),
                                  }),
                                  className: `framer-4k3hz3`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            g(`div`, {
                              className: `framer-zaxt9p`,
                              "data-framer-name": `Image and Curriculum`,
                              children: [
                                g(`div`, {
                                  className: `framer-1glg4fk`,
                                  "data-framer-name": `Image Wrapper`,
                                  children: [
                                    h(I, {
                                      breakpoint: x,
                                      overrides: {
                                        FcqlJO76t: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 1746,
                                            pixelWidth: 1600,
                                            sizes: `max(min(${d?.width || `100vw`} - 60px, 1200px) * 0.4, 1px)`,
                                            src: `../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY-9d60dd.jpg`,
                                            srcSet: `../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY.jpg 938w,../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY-9d60dd.jpg 1600w`,
                                          },
                                        },
                                        ZCv4Ny5Al: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 1746,
                                            pixelWidth: 1600,
                                            sizes: `max(min(${d?.width || `100vw`} - 40px, 1200px), 1px)`,
                                            src: `../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY-9d60dd.jpg`,
                                            srcSet: `../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY.jpg 938w,../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY-9d60dd.jpg 1600w`,
                                          },
                                        },
                                      },
                                      children: h(R, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              2380.6 +
                                              65 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              167.6 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1746,
                                          pixelWidth: 1600,
                                          sizes: `550px`,
                                          src: `../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY-9d60dd.jpg`,
                                          srcSet: `../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY.jpg 938w,../../assets/images/phKpEKKP9tBAMpUWNcLjOC1AvNY-9d60dd.jpg 1600w`,
                                        },
                                        className: `framer-12qk99s`,
                                      }),
                                    }),
                                    E() &&
                                      h(Au, {
                                        __framer__animate: { transition: rd },
                                        __framer__animateOnce: !0,
                                        __framer__enter: nd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `fit`,
                                          fit: `fit`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              2380.6 +
                                              65 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              167.6 +
                                              0 +
                                              600 -
                                              212
                                          ),
                                          pixelHeight: 962,
                                          pixelWidth: 582,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `249px`,
                                          src: `../../assets/images/weILNQSnwoBhHAiNeOnGywvEwY.png`,
                                          srcSet: `../../assets/images/weILNQSnwoBhHAiNeOnGywvEwY.png 582w`,
                                        },
                                        className: `framer-1x4uby7 hidden-35d7oo hidden-v8yn8t`,
                                        "data-framer-name": `Shape`,
                                        style: { rotate: 12 },
                                      }),
                                  ],
                                }),
                                h(Ru, {
                                  __framer__animate: { transition: ad },
                                  __framer__animateOnce: !0,
                                  __framer__enter: md,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-17o3fd7`,
                                  "data-framer-name": `Tab Wrapper`,
                                  flowEffectEnabled: !0,
                                  isNestedFlowEffect: !0,
                                  children: h(I, {
                                    breakpoint: x,
                                    overrides: {
                                      FcqlJO76t: {
                                        width: `max(min(${d?.width || `100vw`} - 60px, 1200px) * 0.6 - 20px, 1px)`,
                                        y: void 0,
                                      },
                                      ZCv4Ny5Al: {
                                        width: `max(min(${d?.width || `100vw`} - 40px, 1200px), 1px)`,
                                        y: void 0,
                                      },
                                    },
                                    children: h(H, {
                                      height: 778,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        2380.6 +
                                        65 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        167.6 +
                                        0 +
                                        0,
                                      children: h(U, {
                                        className: `framer-1lv82q4-container`,
                                        layout: `position`,
                                        nodeId: `VGNwbaCCp`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: h(Cc, {
                                          height: `100%`,
                                          id: `VGNwbaCCp`,
                                          layoutId: `VGNwbaCCp`,
                                          style: { width: `100%` },
                                          variant: $(`cr5Dpe8QE`),
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
                    }),
                    g(b.section, {
                      className: `framer-1npbd2i`,
                      "data-framer-name": `Testimonial Section`,
                      id: F,
                      layout: k,
                      ref: ne,
                      children: [
                        h(H, {
                          children: h(U, {
                            className: `framer-1f6k45d-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `t4Lgtw6sJ`,
                            scopeId: `augiA20Il`,
                            children: h(os, {
                              backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                              glowAnimation: `instant`,
                              glowIntensity: 10,
                              gravityStrength: 50,
                              height: `100%`,
                              id: `t4Lgtw6sJ`,
                              interactionType: `bounce`,
                              layoutId: `t4Lgtw6sJ`,
                              mouseGravity: `none`,
                              mouseInfluence: 100,
                              movementSpeed: 1.5,
                              particleColor: `rgb(255, 255, 255)`,
                              particleCount: 50,
                              particleInteraction: !1,
                              particleOpacity: 0.6,
                              particleSize: 2,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        h(`div`, {
                          className: `framer-1i26jtc`,
                          "data-framer-name": `Container`,
                          children: g(`div`, {
                            className: `framer-baula`,
                            "data-framer-name": `Content`,
                            children: [
                              g(`div`, {
                                className: `framer-1jeb2d6`,
                                "data-framer-name": `Title Wrapper`,
                                children: [
                                  h(I, {
                                    breakpoint: x,
                                    overrides: {
                                      FcqlJO76t: {
                                        children: h(a, {
                                          children: h(`p`, {
                                            className: `framer-styles-preset-442g5`,
                                            "data-styles-preset": `k4fMn_vyy`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                                            },
                                            children: `Reviews`,
                                          }),
                                        }),
                                        transformTemplate: void 0,
                                      },
                                      ZCv4Ny5Al: {
                                        children: h(a, {
                                          children: h(`p`, {
                                            className: `framer-styles-preset-442g5`,
                                            "data-styles-preset": `k4fMn_vyy`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                                            },
                                            children: `Reviews`,
                                          }),
                                        }),
                                        transformTemplate: void 0,
                                      },
                                    },
                                    children: h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-442g5`,
                                          "data-styles-preset": `k4fMn_vyy`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-4f27970a-6a91-4da2-b1a8-401bbb119321, rgb(41, 41, 41))`,
                                          },
                                          children: `Reviews`,
                                        }),
                                      }),
                                      className: `framer-nregh5`,
                                      fonts: [`Inter`],
                                      transformTemplate: hd,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  h(W, {
                                    __fromCanvasComponent: !0,
                                    children: h(a, {
                                      children: h(`h2`, {
                                        className: `framer-styles-preset-rsefcq`,
                                        "data-styles-preset": `ZckC7in5y`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                        },
                                        children: `Don’t just take our word for it — see what our clients have to say about their Voltiz experience.`,
                                      }),
                                    }),
                                    className: `framer-19hs7dx`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              g(`div`, {
                                className: `framer-1xwy5pi`,
                                "data-framer-name": `Testimonial Wrapper`,
                                children: [
                                  A() &&
                                    h(H, {
                                      children: h(U, {
                                        className: `framer-urgna1-container hidden-v8yn8t`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `VkbKLU25P`,
                                        scopeId: `augiA20Il`,
                                        children: h(I, {
                                          breakpoint: x,
                                          overrides: { FcqlJO76t: { itemAmount: 2 } },
                                          children: h(we, {
                                            alignment: `center`,
                                            arrowOptions: {
                                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                                              arrowGap: 10,
                                              arrowPadding: 20,
                                              arrowPaddingBottom: 0,
                                              arrowPaddingLeft: 0,
                                              arrowPaddingRight: 0,
                                              arrowPaddingTop: 0,
                                              arrowPosition: `auto`,
                                              arrowRadius: 40,
                                              arrowShouldFadeIn: !1,
                                              arrowShouldSpace: !0,
                                              arrowSize: 40,
                                              showMouseControls: !1,
                                            },
                                            autoPlayControl: !0,
                                            borderRadius: 0,
                                            direction: `left`,
                                            dragControl: !1,
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
                                              overflow: !1,
                                            },
                                            gap: 20,
                                            height: `100%`,
                                            id: `VkbKLU25P`,
                                            intervalControl: 2.5,
                                            itemAmount: 3,
                                            layoutId: `VkbKLU25P`,
                                            padding: 0,
                                            paddingBottom: 0,
                                            paddingLeft: 0,
                                            paddingPerSide: !1,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            progressOptions: {
                                              dotsActiveOpacity: 1,
                                              dotsBackground: `rgba(0, 0, 0, 0)`,
                                              dotsBlur: 0,
                                              dotsFill: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                              dotsGap: 10,
                                              dotsInset: 0,
                                              dotSize: 10,
                                              dotsOpacity: 0.5,
                                              dotsPadding: 0,
                                              dotsRadius: 50,
                                              showProgressDots: !0,
                                            },
                                            slots: [
                                              h(H, {
                                                height: 362,
                                                width: `480px`,
                                                children: h(U, {
                                                  className: `framer-1mhg8gv-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `T258NC1d_`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(Qc, {
                                                    height: `100%`,
                                                    id: `T258NC1d_`,
                                                    layoutId: `T258NC1d_`,
                                                    pCGt1REW4: pd(
                                                      {
                                                        pixelHeight: 400,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/jIujDnZhgGiE8Ye6OStoWWPTxXk.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    style: { width: `100%` },
                                                    V7xxcsDnq: `ZRp249qWw`,
                                                    variant: $(`bF2lzQh7n`),
                                                    Vb0T874fa: `Erika Austin`,
                                                    width: `100%`,
                                                    wXbUESKME: `Developer`,
                                                    ZBh720LwR: `Personalized guidance ensured I was always moving forward, progressing faster than I ever thought. A true game-changer.`,
                                                  }),
                                                }),
                                              }),
                                              h(H, {
                                                height: 362,
                                                width: `480px`,
                                                children: h(U, {
                                                  className: `framer-1i6vy20-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `U9QFO2_ZB`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(Qc, {
                                                    height: `100%`,
                                                    id: `U9QFO2_ZB`,
                                                    layoutId: `U9QFO2_ZB`,
                                                    pCGt1REW4: pd(
                                                      {
                                                        pixelHeight: 400,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/YADg0E0glPOrrfx6WLBSgMYcWm0.jpg`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    style: { width: `100%` },
                                                    V7xxcsDnq: `ZRp249qWw`,
                                                    variant: $(`bF2lzQh7n`),
                                                    Vb0T874fa: `Daisy Boylan`,
                                                    width: `100%`,
                                                    wXbUESKME: `Designer`,
                                                    ZBh720LwR: `His teaching style is simple and incredibly boosting. He broke down complex concepts into easy steps, making them approachable.`,
                                                  }),
                                                }),
                                              }),
                                              h(H, {
                                                height: 362,
                                                width: `480px`,
                                                children: h(U, {
                                                  className: `framer-p7tllb-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `MeH1KnokD`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(Qc, {
                                                    height: `100%`,
                                                    id: `MeH1KnokD`,
                                                    layoutId: `MeH1KnokD`,
                                                    pCGt1REW4: pd(
                                                      {
                                                        pixelHeight: 400,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/CV51ALhlPIz40s9uoMia2p0SNI.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    style: { width: `100%` },
                                                    V7xxcsDnq: `eGq5nl6Kk`,
                                                    variant: $(`bF2lzQh7n`),
                                                    Vb0T874fa: `Annalee Jackson`,
                                                    width: `100%`,
                                                    wXbUESKME: `Head of idea`,
                                                    ZBh720LwR: `I was stuck for months trying to figure out low-code tools on my own but this made everything crystal clear. Each session was actionable.`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                            startFrom: 0,
                                            style: { height: `100%`, width: `100%` },
                                            transitionControl: {
                                              damping: 40,
                                              delay: 0,
                                              mass: 1,
                                              stiffness: 200,
                                              type: `spring`,
                                            },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  B() &&
                                    h(H, {
                                      children: h(U, {
                                        className: `framer-1tcqnhi-container hidden-72rtr7 hidden-35d7oo`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `GJItbGvyo`,
                                        scopeId: `augiA20Il`,
                                        children: h(I, {
                                          breakpoint: x,
                                          overrides: { ZCv4Ny5Al: { itemAmount: 1 } },
                                          children: h(we, {
                                            alignment: `center`,
                                            arrowOptions: {
                                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                                              arrowGap: 10,
                                              arrowPadding: 20,
                                              arrowPaddingBottom: 0,
                                              arrowPaddingLeft: 0,
                                              arrowPaddingRight: 0,
                                              arrowPaddingTop: 0,
                                              arrowPosition: `auto`,
                                              arrowRadius: 40,
                                              arrowShouldFadeIn: !1,
                                              arrowShouldSpace: !0,
                                              arrowSize: 40,
                                              showMouseControls: !1,
                                            },
                                            autoPlayControl: !0,
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
                                              overflow: !1,
                                            },
                                            gap: 20,
                                            height: `100%`,
                                            id: `GJItbGvyo`,
                                            intervalControl: 2.5,
                                            itemAmount: 3,
                                            layoutId: `GJItbGvyo`,
                                            padding: 0,
                                            paddingBottom: 0,
                                            paddingLeft: 0,
                                            paddingPerSide: !1,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            progressOptions: {
                                              dotsActiveOpacity: 1,
                                              dotsBackground: `rgba(0, 0, 0, 0)`,
                                              dotsBlur: 0,
                                              dotsFill: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                              dotsGap: 10,
                                              dotsInset: 0,
                                              dotSize: 10,
                                              dotsOpacity: 0.5,
                                              dotsPadding: 0,
                                              dotsRadius: 50,
                                              showProgressDots: !0,
                                            },
                                            slots: [
                                              h(H, {
                                                height: 362,
                                                width: `350px`,
                                                children: h(U, {
                                                  className: `framer-xrin0n-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `zGW3D2SxV`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(Qc, {
                                                    height: `100%`,
                                                    id: `zGW3D2SxV`,
                                                    layoutId: `zGW3D2SxV`,
                                                    pCGt1REW4: pd(
                                                      {
                                                        pixelHeight: 400,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/jIujDnZhgGiE8Ye6OStoWWPTxXk.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    style: { width: `100%` },
                                                    V7xxcsDnq: `ZRp249qWw`,
                                                    variant: $(`kIuabt17p`),
                                                    Vb0T874fa: `Erika Austin`,
                                                    width: `100%`,
                                                    wXbUESKME: `Developer`,
                                                    ZBh720LwR: `Personalized guidance ensured I was always moving forward, progressing faster than I ever thought. A true game-changer.`,
                                                  }),
                                                }),
                                              }),
                                              h(H, {
                                                height: 362,
                                                width: `350px`,
                                                children: h(U, {
                                                  className: `framer-dvh7ih-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `XyP7dNQnd`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(Qc, {
                                                    height: `100%`,
                                                    id: `XyP7dNQnd`,
                                                    layoutId: `XyP7dNQnd`,
                                                    pCGt1REW4: pd(
                                                      {
                                                        pixelHeight: 400,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/YADg0E0glPOrrfx6WLBSgMYcWm0.jpg`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    style: { width: `100%` },
                                                    V7xxcsDnq: `ZRp249qWw`,
                                                    variant: $(`kIuabt17p`),
                                                    Vb0T874fa: `Daisy Boylan`,
                                                    width: `100%`,
                                                    wXbUESKME: `Designer`,
                                                    ZBh720LwR: `His teaching style is simple and incredibly boosting. He broke down complex concepts into easy steps, making them approachable.`,
                                                  }),
                                                }),
                                              }),
                                              h(H, {
                                                height: 362,
                                                width: `350px`,
                                                children: h(U, {
                                                  className: `framer-oou32c-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `LJAMJfbNT`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: h(Qc, {
                                                    height: `100%`,
                                                    id: `LJAMJfbNT`,
                                                    layoutId: `LJAMJfbNT`,
                                                    pCGt1REW4: pd(
                                                      {
                                                        pixelHeight: 400,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/CV51ALhlPIz40s9uoMia2p0SNI.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    style: { width: `100%` },
                                                    V7xxcsDnq: `eGq5nl6Kk`,
                                                    variant: $(`kIuabt17p`),
                                                    Vb0T874fa: `Annalee Jackson`,
                                                    width: `100%`,
                                                    wXbUESKME: `Head of idea`,
                                                    ZBh720LwR: `I was stuck for months trying to figure out low-code tools on my own but this made everything crystal clear. Each session was actionable.`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                            startFrom: 0,
                                            style: { height: `100%`, width: `100%` },
                                            transitionControl: {
                                              damping: 40,
                                              delay: 0,
                                              mass: 1,
                                              stiffness: 200,
                                              type: `spring`,
                                            },
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
                    h(b.section, {
                      className: `framer-t39cfd`,
                      "data-framer-name": `Comparison Section`,
                      layout: k,
                      children: h(`div`, {
                        className: `framer-1dflhvd`,
                        "data-framer-name": `Container`,
                        children: g(`div`, {
                          className: `framer-109ddvr`,
                          "data-framer-name": `Content`,
                          children: [
                            g(`div`, {
                              className: `framer-146iakx`,
                              "data-framer-name": `Title Wrapper`,
                              children: [
                                g(`div`, {
                                  className: `framer-nwv3go`,
                                  "data-framer-name": `Section Title`,
                                  children: [
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-r0f6qh`,
                                          "data-styles-preset": `YCYFDwdBK`,
                                          style: {
                                            "--framer-text-color": `var(--token-108a9763-029d-4bcc-ab47-9a9387b2e95d, rgb(255, 51, 116))`,
                                          },
                                          children: `Check again before enroll!`,
                                        }),
                                      }),
                                      className: `framer-1d310oe`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    E() &&
                                      h(Au, {
                                        __framer__animate: { transition: dd },
                                        __framer__animateOnce: !1,
                                        __framer__enter: ud,
                                        __framer__exit: fd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `Icon`,
                                          fit: `fill`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 33,
                                          pixelWidth: 105,
                                          sizes: `101px`,
                                          src: `../../assets/images/6i4CsPrdEW5f1BwsyfQ6mMeSrUc.svg`,
                                        },
                                        className: `framer-1043ddl hidden-35d7oo hidden-v8yn8t`,
                                        "data-framer-name": `Icon`,
                                      }),
                                  ],
                                }),
                                h(W, {
                                  __fromCanvasComponent: !0,
                                  children: h(a, {
                                    children: h(`h2`, {
                                      className: `framer-styles-preset-x3vx2y`,
                                      "data-styles-preset": `eIxnpCCK3`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                      },
                                      children: `Is this for you?`,
                                    }),
                                  }),
                                  className: `framer-198mj4p`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                E() &&
                                  h(Au, {
                                    __framer__animate: { transition: rd },
                                    __framer__animateOnce: !0,
                                    __framer__enter: nd,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: `Shape`,
                                      fit: `fill`,
                                      loading: G(
                                        (d?.y || 0) + 0 + 4562.8 + 130 + 0 + 0 + 0 + 0 + 0 + 82
                                      ),
                                      pixelHeight: 768,
                                      pixelWidth: 477,
                                      sizes: `159px`,
                                      src: `../../assets/images/c8JiYnTxXcKVjmRWwf1Qsm2UlZI.png`,
                                      srcSet: `../../assets/images/c8JiYnTxXcKVjmRWwf1Qsm2UlZI.png 477w`,
                                    },
                                    className: `framer-13tu2ag hidden-35d7oo hidden-v8yn8t`,
                                    "data-framer-name": `Shape`,
                                  }),
                              ],
                            }),
                            g(`div`, {
                              className: `framer-58amdg`,
                              "data-border": !0,
                              "data-framer-name": `Comparison Wrapper`,
                              children: [
                                g(ju, {
                                  __framer__animate: { transition: ad },
                                  __framer__animateOnce: !0,
                                  __framer__enter: gd,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-hzmis`,
                                  "data-framer-name": `Left Content`,
                                  children: [
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`h5`, {
                                          className: `framer-styles-preset-4n21a3`,
                                          "data-styles-preset": `RI1oCWoIH`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                          },
                                          children: `This is not for you if:`,
                                        }),
                                      }),
                                      className: `framer-bx9dck`,
                                      "data-framer-name": `This is not for you if:`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    g(`div`, {
                                      className: `framer-13svjiy`,
                                      "data-framer-name": `List Wrapper`,
                                      children: [
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 48px)`,
                                              y: void 0,
                                            },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              0,
                                            children: h(U, {
                                              className: `framer-19vood2-container`,
                                              nodeId: `QZdOIRqqg`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`YRug0TrqZ`) },
                                                  ZCv4Ny5Al: { variant: $(`YRug0TrqZ`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `QZdOIRqqg`,
                                                  layoutId: `QZdOIRqqg`,
                                                  S33EJANSj: `Experienced devs seeking advanced-only topics`,
                                                  style: { width: `100%` },
                                                  variant: $(`syXRXZ4ht`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 48px)`,
                                              y: void 0,
                                            },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              64,
                                            children: h(U, {
                                              className: `framer-15lp4cn-container`,
                                              nodeId: `YOuSGDlBi`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`YRug0TrqZ`) },
                                                  ZCv4Ny5Al: { variant: $(`YRug0TrqZ`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `YOuSGDlBi`,
                                                  layoutId: `YOuSGDlBi`,
                                                  S33EJANSj: `Those skipping hands-on practice or 1v1 sessions`,
                                                  style: { width: `100%` },
                                                  variant: $(`syXRXZ4ht`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 48px)`,
                                              y: void 0,
                                            },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              128,
                                            children: h(U, {
                                              className: `framer-1f18sgf-container`,
                                              nodeId: `YGlHcs_gd`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`YRug0TrqZ`) },
                                                  ZCv4Ny5Al: { variant: $(`YRug0TrqZ`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `YGlHcs_gd`,
                                                  layoutId: `YGlHcs_gd`,
                                                  S33EJANSj: `People wanting fully self-paced, no mentorship`,
                                                  style: { width: `100%` },
                                                  variant: $(`syXRXZ4ht`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 48px)`,
                                              y: void 0,
                                            },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              192,
                                            children: h(U, {
                                              className: `framer-1k1evt0-container`,
                                              nodeId: `ozGD3dRzP`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`YRug0TrqZ`) },
                                                  ZCv4Ny5Al: { variant: $(`YRug0TrqZ`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `ozGD3dRzP`,
                                                  layoutId: `ozGD3dRzP`,
                                                  S33EJANSj: `Learners only seeking theory, no real application`,
                                                  style: { width: `100%` },
                                                  variant: $(`syXRXZ4ht`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 48px)`,
                                              y: void 0,
                                            },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              256,
                                            children: h(U, {
                                              className: `framer-1wlhu18-container`,
                                              nodeId: `PhF8BI_MS`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`YRug0TrqZ`) },
                                                  ZCv4Ny5Al: { variant: $(`YRug0TrqZ`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `PhF8BI_MS`,
                                                  layoutId: `PhF8BI_MS`,
                                                  S33EJANSj: `Not applying lessons to actual projects`,
                                                  style: { width: `100%` },
                                                  variant: $(`syXRXZ4ht`),
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
                                g(ju, {
                                  __framer__animate: { transition: ad },
                                  __framer__animateOnce: !0,
                                  __framer__enter: md,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1fbnnbh`,
                                  "data-framer-name": `Left Content`,
                                  children: [
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`h5`, {
                                          className: `framer-styles-preset-4n21a3`,
                                          "data-styles-preset": `RI1oCWoIH`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                          },
                                          children: `This is for you if:`,
                                        }),
                                      }),
                                      className: `framer-1ycxuei`,
                                      "data-framer-name": `This is not for you if:`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    g(`div`, {
                                      className: `framer-bfqo67`,
                                      "data-framer-name": `List Wrapper`,
                                      children: [
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: { y: void 0 },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              0,
                                            children: h(U, {
                                              className: `framer-lf8zzj-container`,
                                              nodeId: `LGKJZGAu8`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`mzmszGr88`) },
                                                  ZCv4Ny5Al: { variant: $(`mzmszGr88`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `LGKJZGAu8`,
                                                  layoutId: `LGKJZGAu8`,
                                                  S33EJANSj: `Beginners wanting clear low-code guidance`,
                                                  style: { width: `100%` },
                                                  variant: $(`qRHUdvk5F`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: { y: void 0 },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              64,
                                            children: h(U, {
                                              className: `framer-14x4kg5-container`,
                                              nodeId: `utOKbUNUj`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`mzmszGr88`) },
                                                  ZCv4Ny5Al: { variant: $(`mzmszGr88`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `utOKbUNUj`,
                                                  layoutId: `utOKbUNUj`,
                                                  S33EJANSj: `Freelancers/designers building websites fast`,
                                                  style: { width: `100%` },
                                                  variant: $(`qRHUdvk5F`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: { y: void 0 },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              128,
                                            children: h(U, {
                                              className: `framer-6uhh46-container`,
                                              nodeId: `I2TbjjPSn`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`mzmszGr88`) },
                                                  ZCv4Ny5Al: { variant: $(`mzmszGr88`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `I2TbjjPSn`,
                                                  layoutId: `I2TbjjPSn`,
                                                  S33EJANSj: `Founders needing practical project guidance`,
                                                  style: { width: `100%` },
                                                  variant: $(`qRHUdvk5F`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: { y: void 0 },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              192,
                                            children: h(U, {
                                              className: `framer-1xd3rqz-container`,
                                              nodeId: `J6SnSrUNi`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`mzmszGr88`) },
                                                  ZCv4Ny5Al: { variant: $(`mzmszGr88`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `J6SnSrUNi`,
                                                  layoutId: `J6SnSrUNi`,
                                                  S33EJANSj: `Struggling with starting or workflows`,
                                                  style: { width: `100%` },
                                                  variant: $(`qRHUdvk5F`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: { y: void 0 },
                                            ZCv4Ny5Al: {
                                              width: `calc(min(${d?.width || `100vw`} - 40px, 1200px) - 60px)`,
                                              y: void 0,
                                            },
                                          },
                                          children: h(H, {
                                            height: 54,
                                            width: `calc(max((min(${d?.width || `100vw`} - 60px, 1200px) - 30px) / 2, 1px) - 60px)`,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              4562.8 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              300 +
                                              10 +
                                              30 +
                                              54 +
                                              0 +
                                              256,
                                            children: h(U, {
                                              className: `framer-z0duzt-container`,
                                              nodeId: `tT1brrg3C`,
                                              scopeId: `augiA20Il`,
                                              children: h(I, {
                                                breakpoint: x,
                                                overrides: {
                                                  FcqlJO76t: { variant: $(`mzmszGr88`) },
                                                  ZCv4Ny5Al: { variant: $(`mzmszGr88`) },
                                                },
                                                children: h(uu, {
                                                  height: `100%`,
                                                  id: `tT1brrg3C`,
                                                  layoutId: `tT1brrg3C`,
                                                  S33EJANSj: `Want personalized feedback & support`,
                                                  style: { width: `100%` },
                                                  variant: $(`qRHUdvk5F`),
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
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    h(b.section, {
                      className: `framer-1y13xhl`,
                      "data-framer-name": `Video Section`,
                      layout: k,
                      children: h(`div`, {
                        className: `framer-1eouj43`,
                        "data-framer-name": `Container`,
                        children: g(`div`, {
                          className: `framer-1goz483`,
                          "data-framer-name": `Content`,
                          children: [
                            g(`div`, {
                              className: `framer-6w6o32`,
                              "data-framer-name": `Sticky`,
                              children: [
                                h(H, {
                                  children: h(U, {
                                    className: `framer-ybqbiu-container`,
                                    isModuleExternal: !0,
                                    nodeId: `l23lL0V21`,
                                    scopeId: `augiA20Il`,
                                    children: h(Gt, {
                                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                      borderRadius: 10,
                                      bottomLeftRadius: 10,
                                      bottomRightRadius: 10,
                                      controls: !1,
                                      height: `100%`,
                                      id: `l23lL0V21`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `l23lL0V21`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !0,
                                      posterEnabled: !1,
                                      srcFile: `../../assets/misc/Z5MQEx3EHNGDALxDkkMUbY2qc2Q.mp4`,
                                      srcType: `Upload`,
                                      srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                      startTime: 0,
                                      style: { height: `100%`, width: `100%` },
                                      topLeftRadius: 10,
                                      topRightRadius: 10,
                                      volume: 25,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                E() &&
                                  h(ju, {
                                    __framer__spring: {
                                      damping: 60,
                                      delay: 0,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stiffness: 300,
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
                                          x: -605,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: ae,
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
                                    className: `framer-kue6rn hidden-35d7oo hidden-v8yn8t`,
                                    "data-framer-name": `Text`,
                                    children: h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-1xjfb3`,
                                          "data-styles-preset": `cR3YHvZns`,
                                          style: { "--framer-text-alignment": `right` },
                                          children: `Get solid`,
                                        }),
                                      }),
                                      className: `framer-1chgpnf`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                E() &&
                                  h(ju, {
                                    __framer__spring: {
                                      damping: 60,
                                      delay: 0,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stiffness: 300,
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
                                          x: 600,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: ae,
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
                                    className: `framer-lbc5da hidden-35d7oo hidden-v8yn8t`,
                                    "data-framer-name": `Text`,
                                    children: h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-1xjfb3`,
                                          "data-styles-preset": `cR3YHvZns`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                          },
                                          children: `direction`,
                                        }),
                                      }),
                                      className: `framer-1vc9fas`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                              ],
                            }),
                            E() &&
                              h(`div`, {
                                className: `framer-1ucrupr hidden-35d7oo hidden-v8yn8t`,
                                "data-framer-name": `Text Trigger`,
                                id: se,
                                ref: ae,
                              }),
                          ],
                        }),
                      }),
                    }),
                    h(b.section, {
                      className: `framer-11cqemz`,
                      "data-framer-name": `Pricing Section`,
                      id: ce,
                      layout: k,
                      ref: ue,
                      children: h(`div`, {
                        className: `framer-q179dc`,
                        "data-framer-name": `Container`,
                        children: g(`div`, {
                          className: `framer-h88wbt`,
                          "data-framer-name": `Content`,
                          children: [
                            g(`div`, {
                              className: `framer-sqs8ik`,
                              "data-framer-name": `Title Wrapper`,
                              children: [
                                g(`div`, {
                                  className: `framer-fx4rbp`,
                                  "data-framer-name": `Section Title`,
                                  children: [
                                    E() &&
                                      h(Au, {
                                        __framer__animate: { transition: dd },
                                        __framer__animateOnce: !1,
                                        __framer__enter: ud,
                                        __framer__exit: fd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `Icon`,
                                          fit: `fill`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              6951.8 +
                                              65 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 33,
                                          pixelWidth: 105,
                                          sizes: `101px`,
                                          src: `../../assets/images/LDBm0h59HJxL1xMNlgW8sgwDQ.svg`,
                                        },
                                        className: `framer-168fshf hidden-35d7oo hidden-v8yn8t`,
                                        "data-framer-name": `Icon`,
                                      }),
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-r0f6qh`,
                                          "data-styles-preset": `YCYFDwdBK`,
                                          style: {
                                            "--framer-text-color": `var(--token-108a9763-029d-4bcc-ab47-9a9387b2e95d, rgb(255, 51, 116))`,
                                          },
                                          children: `Fair price`,
                                        }),
                                      }),
                                      className: `framer-1333zuz`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                h(I, {
                                  breakpoint: x,
                                  overrides: {
                                    FcqlJO76t: {
                                      children: h(a, {
                                        children: h(`h2`, {
                                          className: `framer-styles-preset-rsefcq`,
                                          "data-styles-preset": `ZckC7in5y`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                          },
                                          children: `Competitive price & plans`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: h(W, {
                                    __fromCanvasComponent: !0,
                                    children: h(a, {
                                      children: h(`h2`, {
                                        className: `framer-styles-preset-rsefcq`,
                                        "data-styles-preset": `ZckC7in5y`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                        },
                                        children: `Competitive price & plans`,
                                      }),
                                    }),
                                    className: `framer-897vjl`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            g(ju, {
                              __framer__animate: { transition: ad },
                              __framer__animateOnce: !0,
                              __framer__enter: _d,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-vnmcs`,
                              "data-framer-name": `Tab Wrapper`,
                              children: [
                                h(I, {
                                  breakpoint: x,
                                  overrides: {
                                    FcqlJO76t: {
                                      width: `min(min(${d?.width || `100vw`} - 60px, 1200px), 750px)`,
                                      y: void 0,
                                    },
                                    ZCv4Ny5Al: {
                                      width: `min(${d?.width || `100vw`} - 40px, 1200px)`,
                                      y: void 0,
                                    },
                                  },
                                  children: h(H, {
                                    height: 378,
                                    width: `min(${d?.width || `100vw`} - 60px, 1200px)`,
                                    y:
                                      (d?.y || 0) + 0 + 6951.8 + 65 + 0 + 0 + 0 + 0 + 167.6 + 0 + 0,
                                    children: h(U, {
                                      className: `framer-12q5f22-container`,
                                      nodeId: `OMhZXM29i`,
                                      scopeId: `augiA20Il`,
                                      children: h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: { variant: $(`XCGuvxub0`) },
                                          ZCv4Ny5Al: { variant: $(`BoriplKT_`) },
                                        },
                                        children: h(Qs, {
                                          height: `100%`,
                                          id: `OMhZXM29i`,
                                          layoutId: `OMhZXM29i`,
                                          style: { width: `100%` },
                                          variant: $(`DsygKtdML`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                g(`div`, {
                                  className: `framer-h1fr8z`,
                                  "data-framer-name": `Feature List`,
                                  children: [
                                    g(`div`, {
                                      className: `framer-1uao6ha`,
                                      "data-framer-name": `Icon List`,
                                      children: [
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 18,
                                                pixelWidth: 15,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `18px`,
                                                src: `../../assets/images/QFpc3pIBiEG27SYCig1AaMu2iaw.svg`,
                                              },
                                            },
                                            ZCv4Ny5Al: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 18,
                                                pixelWidth: 15,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `18px`,
                                                src: `../../assets/images/QFpc3pIBiEG27SYCig1AaMu2iaw.svg`,
                                              },
                                            },
                                          },
                                          children: h(R, {
                                            background: {
                                              alt: `Icon`,
                                              fit: `fit`,
                                              loading: G(
                                                (d?.y || 0) +
                                                  0 +
                                                  6951.8 +
                                                  65 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  167.6 +
                                                  0 +
                                                  418 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 18,
                                              pixelWidth: 15,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `18px`,
                                              src: `../../assets/images/QFpc3pIBiEG27SYCig1AaMu2iaw.svg`,
                                            },
                                            className: `framer-az01ws`,
                                            "data-framer-name": `Icon`,
                                          }),
                                        }),
                                        h(W, {
                                          __fromCanvasComponent: !0,
                                          children: h(a, {
                                            children: h(`p`, {
                                              className: `framer-styles-preset-30j4q8`,
                                              "data-styles-preset": `aZ0GztYsn`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                              },
                                              children: `On-time file delivery`,
                                            }),
                                          }),
                                          className: `framer-1hjc27d`,
                                          "data-framer-name": `On-time file delivery`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(`div`, {
                                      className: `framer-1ojkmgv`,
                                      "data-framer-name": `Icon List`,
                                      children: [
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 18,
                                                pixelWidth: 18,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `18px`,
                                                src: `../../assets/images/daKY59UDTLVRpOLvumi7PrQr0o.svg`,
                                              },
                                            },
                                            ZCv4Ny5Al: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 18,
                                                pixelWidth: 18,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `18px`,
                                                src: `../../assets/images/daKY59UDTLVRpOLvumi7PrQr0o.svg`,
                                              },
                                            },
                                          },
                                          children: h(R, {
                                            background: {
                                              alt: `Icon`,
                                              fit: `fit`,
                                              loading: G(
                                                (d?.y || 0) +
                                                  0 +
                                                  6951.8 +
                                                  65 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  167.6 +
                                                  0 +
                                                  418 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 18,
                                              pixelWidth: 18,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `18px`,
                                              src: `../../assets/images/daKY59UDTLVRpOLvumi7PrQr0o.svg`,
                                            },
                                            className: `framer-o0ypal`,
                                            "data-framer-name": `Icon`,
                                          }),
                                        }),
                                        h(W, {
                                          __fromCanvasComponent: !0,
                                          children: h(a, {
                                            children: h(`p`, {
                                              className: `framer-styles-preset-30j4q8`,
                                              "data-styles-preset": `aZ0GztYsn`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                              },
                                              children: `Providing security solutions`,
                                            }),
                                          }),
                                          className: `framer-1dhugmy`,
                                          "data-framer-name": `Providing security solutions`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(`div`, {
                                      className: `framer-12mgyp0`,
                                      "data-framer-name": `Icon List`,
                                      children: [
                                        h(I, {
                                          breakpoint: x,
                                          overrides: {
                                            FcqlJO76t: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 18,
                                                pixelWidth: 18,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `18px`,
                                                src: `../../assets/images/yB051OF4sR9JllCR8o680KYh418.svg`,
                                              },
                                            },
                                            ZCv4Ny5Al: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 18,
                                                pixelWidth: 18,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `18px`,
                                                src: `../../assets/images/yB051OF4sR9JllCR8o680KYh418.svg`,
                                              },
                                            },
                                          },
                                          children: h(R, {
                                            background: {
                                              alt: `Icon`,
                                              fit: `fit`,
                                              loading: G(
                                                (d?.y || 0) +
                                                  0 +
                                                  6951.8 +
                                                  65 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  167.6 +
                                                  0 +
                                                  418 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 18,
                                              pixelWidth: 18,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `18px`,
                                              src: `../../assets/images/yB051OF4sR9JllCR8o680KYh418.svg`,
                                            },
                                            className: `framer-1l9sxe3`,
                                            "data-framer-name": `Icon`,
                                          }),
                                        }),
                                        h(W, {
                                          __fromCanvasComponent: !0,
                                          children: h(a, {
                                            children: h(`p`, {
                                              className: `framer-styles-preset-30j4q8`,
                                              "data-styles-preset": `aZ0GztYsn`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                              },
                                              children: `24/7 online support`,
                                            }),
                                          }),
                                          className: `framer-7iovto`,
                                          "data-framer-name": `24/7 online support`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
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
                    g(b.section, {
                      className: `framer-1qy86j5`,
                      "data-framer-name": `Review Section`,
                      layout: k,
                      children: [
                        h(`div`, {
                          className: `framer-100rxpl`,
                          "data-framer-name": `Container`,
                          children: g(`div`, {
                            className: `framer-118ymta`,
                            "data-framer-name": `Content`,
                            children: [
                              h(I, {
                                breakpoint: x,
                                overrides: {
                                  FcqlJO76t: { tickerEffectEnabled: void 0 },
                                  ZCv4Ny5Al: { tickerEffectEnabled: void 0 },
                                },
                                children: g(Fu, {
                                  className: `framer-qumv23`,
                                  tickerEffectAlign: `center`,
                                  tickerEffectDirectionModifier: `default`,
                                  tickerEffectDraggable: !0,
                                  tickerEffectEnabled: !0,
                                  tickerEffectGap: `20px`,
                                  tickerEffectHoverModifier: 0,
                                  tickerEffectOverflow: `clip`,
                                  tickerEffectPosition: `relative`,
                                  tickerEffectStackDirection: `row`,
                                  tickerEffectVelocity: 80,
                                  children: [
                                    h(me, {
                                      width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                      children: h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `calc(min(${d?.width || `100vw`} - 60px, 1200px) * 0.48)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `min(${d?.width || `100vw`} - 40px, 1200px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 450,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 1px)`,
                                          y: (d?.y || 0) + 0 + 7685.4 + 65 + 0 + 0 + 0 + 0 + 0 + 0,
                                          children: h(U, {
                                            className: `framer-ebf7da-container`,
                                            nodeId: `SfGNrugqM`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`s2x8BhcV6`) },
                                                ZCv4Ny5Al: { variant: $(`s2x8BhcV6`) },
                                              },
                                              children: h(fl, {
                                                height: `100%`,
                                                id: `SfGNrugqM`,
                                                layoutId: `SfGNrugqM`,
                                                style: { width: `100%` },
                                                variant: $(`Q9WXrOrk1`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    h(me, {
                                      width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                      children: h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `calc(min(${d?.width || `100vw`} - 60px, 1200px) * 0.48)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `min(${d?.width || `100vw`} - 40px, 1200px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 450,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 1px)`,
                                          y: (d?.y || 0) + 0 + 7685.4 + 65 + 0 + 0 + 0 + 0 + 0 + 0,
                                          children: h(U, {
                                            className: `framer-c2u2qh-container`,
                                            nodeId: `KWm8BE4LT`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: {
                                                FcqlJO76t: { variant: $(`s2x8BhcV6`) },
                                                ZCv4Ny5Al: { variant: $(`s2x8BhcV6`) },
                                              },
                                              children: h(fl, {
                                                height: `100%`,
                                                HOg6usLWt: `../../assets/misc/FyoUpmYRggd1fZqzs8CwK3KYlY.mp4`,
                                                id: `KWm8BE4LT`,
                                                layoutId: `KWm8BE4LT`,
                                                style: { width: `100%` },
                                                variant: $(`Q9WXrOrk1`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    h(me, {
                                      width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                      children: h(I, {
                                        breakpoint: x,
                                        overrides: {
                                          FcqlJO76t: {
                                            width: `calc(min(${d?.width || `100vw`} - 60px, 1200px) * 0.48)`,
                                            y: void 0,
                                          },
                                          ZCv4Ny5Al: {
                                            width: `min(${d?.width || `100vw`} - 40px, 1200px)`,
                                            y: void 0,
                                          },
                                        },
                                        children: h(H, {
                                          height: 450,
                                          width: `max((min(${d?.width || `100vw`} - 60px, 1200px) - 40px) / 3, 1px)`,
                                          y: (d?.y || 0) + 0 + 7685.4 + 65 + 0 + 0 + 0 + 0 + 0 + 0,
                                          children: h(U, {
                                            className: `framer-1gqc73c-container`,
                                            nodeId: `OykTmgPJH`,
                                            scopeId: `augiA20Il`,
                                            children: h(I, {
                                              breakpoint: x,
                                              overrides: { ZCv4Ny5Al: { variant: $(`s2x8BhcV6`) } },
                                              children: h(fl, {
                                                height: `100%`,
                                                HOg6usLWt: `../../assets/misc/7sPRmqNhzyKXfOPGpBEWThwUZeY.mp4`,
                                                id: `OykTmgPJH`,
                                                layoutId: `OykTmgPJH`,
                                                style: { width: `100%` },
                                                variant: $(`Q9WXrOrk1`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              fe() &&
                                g(`div`, {
                                  className: `framer-131vons hidden-35d7oo`,
                                  "data-framer-name": `Rating`,
                                  children: [
                                    h(I, {
                                      breakpoint: x,
                                      overrides: {
                                        ZCv4Ny5Al: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            pixelHeight: 40,
                                            pixelWidth: 207,
                                            sizes: `165.6px`,
                                            src: `../../assets/images/3BQgKDfbIAspEopgiqAFbVCPcbI.svg`,
                                          },
                                        },
                                      },
                                      children: h(R, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              7685.4 +
                                              65 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              500 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 40,
                                          pixelWidth: 207,
                                          sizes: `207px`,
                                          src: `../../assets/images/3BQgKDfbIAspEopgiqAFbVCPcbI.svg`,
                                        },
                                        className: `framer-1icgxxb`,
                                      }),
                                    }),
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-1yo9nb5`,
                                          "data-styles-preset": `qN3uIbesA`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                          },
                                          children: `Excellent: 4.9 out of 5.0 `,
                                        }),
                                      }),
                                      className: `framer-i8kyf2`,
                                      "data-framer-name": `Excellent: 4.9 out of 5.0`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        h(H, {
                          children: h(U, {
                            className: `framer-siqdai-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            nodeId: `lmBlbUvNP`,
                            scopeId: `augiA20Il`,
                            children: h(fu, {
                              angle: 65,
                              animationDirection: `vertical`,
                              animationSpeed: 2.5,
                              backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              cellSize: 50,
                              fadeColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              fadeHeight: 90,
                              gridType: `standard`,
                              height: `100%`,
                              id: `lmBlbUvNP`,
                              layoutId: `lmBlbUvNP`,
                              lineColor: `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                              opacity: 0.3,
                              perspective: 200,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(b.section, {
                      className: `framer-bwxhny`,
                      "data-framer-name": `Faq Section`,
                      layout: k,
                      children: h(`div`, {
                        className: `framer-10fawnk`,
                        "data-framer-name": `Container`,
                        children: g(`div`, {
                          className: `framer-1z84iu`,
                          "data-framer-name": `Content`,
                          children: [
                            g(`div`, {
                              className: `framer-8wjvh5`,
                              "data-framer-name": `Title Wrapper`,
                              children: [
                                g(`div`, {
                                  className: `framer-426e0w`,
                                  "data-framer-name": `Section Title`,
                                  children: [
                                    E() &&
                                      h(Au, {
                                        __framer__animate: { transition: dd },
                                        __framer__animateOnce: !1,
                                        __framer__enter: ud,
                                        __framer__exit: fd,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `Icon`,
                                          fit: `fill`,
                                          loading: G(
                                            (d?.y || 0) +
                                              0 +
                                              8379.4 +
                                              65 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 33,
                                          pixelWidth: 105,
                                          sizes: `101px`,
                                          src: `../../assets/images/hjDy67RqzedUO17T2AwQPTtssM.svg`,
                                        },
                                        className: `framer-1x9xc6d hidden-35d7oo hidden-v8yn8t`,
                                        "data-framer-name": `Icon`,
                                      }),
                                    h(W, {
                                      __fromCanvasComponent: !0,
                                      children: h(a, {
                                        children: h(`p`, {
                                          className: `framer-styles-preset-r0f6qh`,
                                          "data-styles-preset": `YCYFDwdBK`,
                                          style: {
                                            "--framer-text-color": `var(--token-21383271-b9ba-48a7-adaa-9dd97b7e0755, rgb(0, 149, 27))`,
                                          },
                                          children: `Any question left?`,
                                        }),
                                      }),
                                      className: `framer-tiubir`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                h(W, {
                                  __fromCanvasComponent: !0,
                                  children: h(a, {
                                    children: h(`h2`, {
                                      className: `framer-styles-preset-rsefcq`,
                                      "data-styles-preset": `ZckC7in5y`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                      },
                                      children: `Get every single answer from here!`,
                                    }),
                                  }),
                                  className: `framer-8dyij1`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            h(Ju, {
                              className: `framer-6zv6i6`,
                              "data-framer-name": `Faq Wrapper`,
                              flowEffectEnabled: !0,
                              isNestedFlowEffect: !0,
                              children: h(I, {
                                breakpoint: x,
                                overrides: {
                                  FcqlJO76t: { y: void 0 },
                                  ZCv4Ny5Al: {
                                    width: `min(max(min(${d?.width || `100vw`} - 40px, 1200px), 1px), 640px)`,
                                    y: void 0,
                                  },
                                },
                                children: h(H, {
                                  height: 400,
                                  width: `min(max(min(${d?.width || `100vw`} - 60px, 1200px), 1px), 640px)`,
                                  y: (d?.y || 0) + 0 + 8379.4 + 65 + 0 + 0 + 0 + 0 + 167.6 + 0,
                                  children: h(qu, {
                                    __framer__animate: { transition: ad },
                                    __framer__animateOnce: !0,
                                    __framer__enter: _d,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-mtid1r-container`,
                                    layout: `position`,
                                    nodeId: `nsebZTs93`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: h(Rl, {
                                      aTmiVsNqo: `Is the navigation simple and clear?`,
                                      fF7SKsVo1: `Are programs detailed with key info?`,
                                      FhTYgp8LD: `Is contact/support information visible?`,
                                      height: `100%`,
                                      Hqto_djdP: `This mentorship is ideal for beginners, creatives, freelancers, and founders looking to master low-code tools fast. If you’re seeking clarity, confidence, accountability, and real outcomes — this program is for you.`,
                                      id: `nsebZTs93`,
                                      layoutId: `nsebZTs93`,
                                      style: { maxWidth: `100%`, width: `100%` },
                                      uXsptL0nk: `Perfect for beginners, designers, freelancers, and founders aiming to learn low-code tools efficiently. If you want structure, confidence, accountability, and tangible results — this mentorship is made for you.`,
                                      variant: $(`x8r8UM54i`),
                                      vPo3IH2DZ: `This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.`,
                                      width: `100%`,
                                      x6iGtR1Pr: `Does it follow accessibility standards?`,
                                      ZRs3TBIEX: `Designed for beginners, designers, freelancers, and founders who want to quickly learn low-code tools. If you need guidance, confidence, accountability, and measurable results — this mentorship fits perfectly.`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                h(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kvJaC.framer-lux5qc, .framer-kvJaC .framer-lux5qc { display: block; }`,
        `.framer-kvJaC.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-kvJaC .framer-oyezyq-container, .framer-kvJaC .framer-gcroan-container, .framer-kvJaC .framer-12p4q7v-container, .framer-kvJaC .framer-1ni36af-container, .framer-kvJaC .framer-6jxwmh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-kvJaC .framer-bxalll-container { flex: none; height: 1px; left: 0px; position: absolute; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-kvJaC .framer-2et8rt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 170px 30px 180px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-1napher { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(6.349206349206371% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-npnho8 { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(20.634920634920658% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-x4tao4 { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(34.92063492063494% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-1kx63yo { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(50.00000000000002% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-mvktea { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(65.0793650793651% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-oysp4l { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(79.36507936507938% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-xpti4h { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 1040px; left: calc(93.65079365079367% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-11uine4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-kvJaC .framer-1ryn4fr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-kmlb90 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-kvJaC .framer-15f5mhq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-jebi3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 660px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-il017z { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-kvJaC .framer-1lbf7op { background-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; bottom: -12px; flex: none; height: 75px; left: 20px; position: absolute; width: 474px; z-index: 1; }`,
        `.framer-kvJaC .framer-rt7vn7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 571px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-kb0x89 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kvJaC .framer-192zlmo { flex: none; height: 341px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -189px; top: -72px; width: 263px; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }`,
        `.framer-kvJaC .framer-ofidbj { --border-bottom-width: 1px; --border-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kvJaC .framer-sses4c { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 380px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 680px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kvJaC .framer-1peomad { align-content: flex-start; align-items: flex-start; background-color: rgba(255, 255, 255, 0.01); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; bottom: 160px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -110px; overflow: visible; padding: 10px 16px 10px 10px; position: absolute; width: min-content; z-index: 3; }`,
        `.framer-kvJaC .framer-7fsb6f-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-kvJaC .framer-132bqfe { flex: none; height: 38px; overflow: visible; position: relative; width: 87px; z-index: 2; }`,
        `.framer-kvJaC .framer-ackd1j { --border-bottom-width: 1px; --border-color: var(--token-b090181a-49c9-4727-ba81-a73646c8cf58, #448abe); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 38px; left: 0px; position: absolute; top: 0px; width: 38px; }`,
        `.framer-kvJaC .framer-t7554q { --border-bottom-width: 1px; --border-color: var(--token-b090181a-49c9-4727-ba81-a73646c8cf58, #448abe); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 38px; left: 24px; position: absolute; top: 0px; width: 38px; }`,
        `.framer-kvJaC .framer-18qs5al { --border-bottom-width: 1px; --border-color: var(--token-b090181a-49c9-4727-ba81-a73646c8cf58, #448abe); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 38px; left: 49px; position: absolute; top: 0px; width: 38px; }`,
        `.framer-kvJaC .framer-u4ijce { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-kvJaC .framer-rmdc5a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kvJaC .framer-d4wnvj-container, .framer-kvJaC .framer-1wqokmr-container, .framer-kvJaC .framer-1x6xy6g-container, .framer-kvJaC .framer-9s8eba-container, .framer-kvJaC .framer-138z4yr-container { flex: none; height: 18px; position: relative; width: 18px; }`,
        `.framer-kvJaC .framer-ayjhpv, .framer-kvJaC .framer-kw2wi8, .framer-kvJaC .framer-2znhjm, .framer-kvJaC .framer-hqzl3u, .framer-kvJaC .framer-k0ujbs, .framer-kvJaC .framer-1d310oe, .framer-kvJaC .framer-1333zuz, .framer-kvJaC .framer-1hjc27d, .framer-kvJaC .framer-1dhugmy, .framer-kvJaC .framer-7iovto, .framer-kvJaC .framer-i8kyf2, .framer-kvJaC .framer-tiubir { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-kvJaC .framer-17p04ro { bottom: 0px; flex: none; height: 338px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-kvJaC .framer-zz0qp0 { background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); bottom: 0px; flex: none; height: 145px; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 100%; z-index: 0; }`,
        `.framer-kvJaC .framer-f196iw { background: linear-gradient(180deg, var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, #bfe8ff) 0%, var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255)) 0%, rgba(255, 255, 255, 0) 100%); flex: none; height: 200px; left: calc(79.33333333333336% - 1px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 200px / 2); width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-5s020z { background: linear-gradient(180deg, var(--token-ac7d8170-3f66-4854-911b-9ae90a0f4d9b, #84b7dd) 0%, var(--token-ac7d8170-3f66-4854-911b-9ae90a0f4d9b, rgb(132, 183, 221)) 0%, rgba(255, 255, 255, 0) 100%); bottom: 100px; flex: none; height: 100px; left: calc(20.583333333333357% - 1px / 2); overflow: hidden; position: absolute; width: 1px; z-index: 0; }`,
        `.framer-kvJaC .framer-1hosxob, .framer-kvJaC .framer-t39cfd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 130px 30px 65px 30px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-dql4c7, .framer-kvJaC .framer-100rxpl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-kvJaC .framer-wata98 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-rex5j5, .framer-kvJaC .framer-baula, .framer-kvJaC .framer-1z84iu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-pemkgc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 670px; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-17gaica, .framer-kvJaC .framer-nwv3go { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -100px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-kvJaC .framer-15g2n71, .framer-kvJaC .framer-z0h156, .framer-kvJaC .framer-1043ddl, .framer-kvJaC .framer-168fshf, .framer-kvJaC .framer-1x9xc6d { flex: none; height: 32px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 101px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-1wilhb6, .framer-kvJaC .framer-4k3hz3, .framer-kvJaC .framer-198mj4p, .framer-kvJaC .framer-bx9dck, .framer-kvJaC .framer-1ycxuei, .framer-kvJaC .framer-897vjl, .framer-kvJaC .framer-8dyij1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kvJaC .framer-n9ibgh { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: grid; flex: none; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kvJaC .framer-sghd1q-container, .framer-kvJaC .framer-1kdq4rs-container, .framer-kvJaC .framer-10bsqf5-container, .framer-kvJaC .framer-16o1yor-container, .framer-kvJaC .framer-trsgwd-container, .framer-kvJaC .framer-35g2pp-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-o9xfh2, .framer-kvJaC .framer-vnmcs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-lzh705 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1l8olw3 { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kvJaC .framer-o0a3a4, .framer-kvJaC .framer-79ywx0, .framer-kvJaC .framer-11e7qdv, .framer-kvJaC .framer-1temybj, .framer-kvJaC .framer-zr2lts { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kvJaC .framer-2w26ul { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 161px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-1l77w10 { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 179px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-bl4pb8 { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 167px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-lymqq { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 155px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-m35joa { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 195px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-je0ld1-container { bottom: 0px; flex: none; height: 328px; left: calc(50.00000000000002% - 100% / 2); pointer-events: none; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-kvJaC .framer-15ehdif { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 65px 30px 130px 30px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1qe7g3y, .framer-kvJaC .framer-1dflhvd, .framer-kvJaC .framer-1eouj43, .framer-kvJaC .framer-q179dc, .framer-kvJaC .framer-10fawnk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-xj1by, .framer-kvJaC .framer-h88wbt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-w2xciu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 485px; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-oeus2a { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -170px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-kvJaC .framer-zaxt9p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1glg4fk { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kvJaC .framer-12qk99s { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 600px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 550px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kvJaC .framer-1x4uby7 { aspect-ratio: 0.7053824362606232 / 1; bottom: -141px; flex: none; height: var(--framer-aspect-ratio-supported, 353px); left: 132px; position: absolute; width: 249px; z-index: 1; }`,
        `.framer-kvJaC .framer-17o3fd7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kvJaC .framer-1lv82q4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-kvJaC .framer-1npbd2i { align-content: center; align-items: center; background-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 130px 30px 130px 30px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1f6k45d-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-kvJaC .framer-1i26jtc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-kvJaC .framer-1jeb2d6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-nregh5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }`,
        `.framer-kvJaC .framer-19hs7dx { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 871px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-kvJaC .framer-1xwy5pi, .framer-kvJaC .framer-131vons { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-urgna1-container { flex: none; height: 454px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1mhg8gv-container, .framer-kvJaC .framer-1i6vy20-container, .framer-kvJaC .framer-p7tllb-container { height: auto; position: relative; width: 480px; }`,
        `.framer-kvJaC .framer-1tcqnhi-container { flex: none; height: 430px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-xrin0n-container, .framer-kvJaC .framer-dvh7ih-container, .framer-kvJaC .framer-oou32c-container { height: auto; position: relative; width: 350px; }`,
        `.framer-kvJaC .framer-109ddvr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-146iakx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 745px; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-13tu2ag { flex: none; height: 256px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -105px; top: 82px; width: 159px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-kvJaC .framer-58amdg { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kvJaC .framer-hzmis { align-content: flex-start; align-items: flex-start; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 1px; }`,
        `.framer-kvJaC .framer-13svjiy, .framer-kvJaC .framer-bfqo67 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-19vood2-container, .framer-kvJaC .framer-15lp4cn-container, .framer-kvJaC .framer-1f18sgf-container, .framer-kvJaC .framer-1k1evt0-container, .framer-kvJaC .framer-1wlhu18-container, .framer-kvJaC .framer-lf8zzj-container, .framer-kvJaC .framer-14x4kg5-container, .framer-kvJaC .framer-6uhh46-container, .framer-kvJaC .framer-1xd3rqz-container, .framer-kvJaC .framer-z0duzt-container, .framer-kvJaC .framer-12q5f22-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1fbnnbh { align-content: flex-start; align-items: flex-start; background-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 1px; }`,
        `.framer-kvJaC .framer-1y13xhl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 65px 30px 65px 30px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1goz483 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-6w6o32 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 20px; width: min-content; z-index: 1; }`,
        `.framer-kvJaC .framer-ybqbiu-container { flex: none; height: 570px; position: relative; width: 900px; }`,
        `.framer-kvJaC .framer-kue6rn { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -45px; min-height: 570px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 10px 0px 0px; position: absolute; top: 0px; width: 55%; z-index: 1; }`,
        `.framer-kvJaC .framer-1chgpnf, .framer-kvJaC .framer-1vc9fas { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kvJaC .framer-lbc5da { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 570px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 10px; position: absolute; right: -45px; top: 0px; width: 55%; z-index: 1; }`,
        `.framer-kvJaC .framer-1ucrupr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 75vh; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-11cqemz, .framer-kvJaC .framer-1qy86j5, .framer-kvJaC .framer-bwxhny { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 65px 30px 65px 30px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-sqs8ik { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 385px; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-fx4rbp { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -150px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-kvJaC .framer-h1fr8z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1uao6ha, .framer-kvJaC .framer-1ojkmgv, .framer-kvJaC .framer-12mgyp0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kvJaC .framer-az01ws, .framer-kvJaC .framer-o0ypal, .framer-kvJaC .framer-1l9sxe3 { flex: none; height: 18px; opacity: 0.4; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 18px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-118ymta { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-qumv23 { --ticker-gap: 20px; --ticker-total-children: 3; --ticker-total-fr: 3; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-ebf7da-container, .framer-kvJaC .framer-c2u2qh-container, .framer-kvJaC .framer-1gqc73c-container { flex: 1 0 0px; height: auto; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-1icgxxb { flex: none; height: 40px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 207px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kvJaC .framer-siqdai-container { bottom: 0px; flex: none; height: 328px; left: calc(50.00000000000002% - 100% / 2); position: absolute; width: 100%; z-index: 0; }`,
        `.framer-kvJaC .framer-8wjvh5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 520px; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-426e0w { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -180px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-kvJaC .framer-6zv6i6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kvJaC .framer-mtid1r-container { flex: 1 0 0px; height: auto; max-width: 640px; position: relative; width: 1px; }`,
        ...$e,
        ...Se,
        ...De,
        ...je,
        ...Cu,
        ...yu,
        ...Qe,
        ...hu,
        ...pt,
        `.framer-kvJaC[data-border="true"]::after, .framer-kvJaC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-kvJaC.framer-72rtr7 { width: 810px; } .framer-kvJaC .framer-2et8rt { padding: 150px 30px 100px 30px; } .framer-kvJaC .framer-1ryn4fr, .framer-kvJaC .framer-rex5j5, .framer-kvJaC .framer-xj1by, .framer-kvJaC .framer-baula, .framer-kvJaC .framer-109ddvr, .framer-kvJaC .framer-1z84iu { gap: 50px; } .framer-kvJaC .framer-jebi3k { max-width: 600px; } .framer-kvJaC .framer-kb0x89 { width: 85%; } .framer-kvJaC .framer-192zlmo { height: 156px; right: -54px; top: 192px; width: 120px; } .framer-kvJaC .framer-ofidbj { flex: 1 0 0px; width: 1px; } .framer-kvJaC .framer-sses4c { aspect-ratio: 1.7894736842105263 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 345px); width: 1px; } .framer-kvJaC .framer-1peomad { bottom: 74px; left: -40px; } .framer-kvJaC .framer-1hosxob, .framer-kvJaC .framer-t39cfd { padding: 100px 30px 50px 30px; } .framer-kvJaC .framer-pemkgc { max-width: 600px; padding: 0px; } .framer-kvJaC .framer-17gaica, .framer-kvJaC .framer-nwv3go { left: unset; position: relative; top: unset; } .framer-kvJaC .framer-n9ibgh { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-kvJaC .framer-1l8olw3 { gap: 60px; } .framer-kvJaC .framer-15ehdif { overflow: var(--overflow-clip-fallback, clip); padding: 50px 30px 100px 30px; } .framer-kvJaC .framer-w2xciu { align-content: flex-start; align-items: flex-start; padding: 0px; } .framer-kvJaC .framer-oeus2a, .framer-kvJaC .framer-426e0w { position: relative; right: unset; top: unset; } .framer-kvJaC .framer-1glg4fk { position: sticky; top: 100px; width: 40%; z-index: 1; } .framer-kvJaC .framer-12qk99s { aspect-ratio: 0.9166666666666666 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 327px); width: 1px; z-index: 1; } .framer-kvJaC .framer-1npbd2i, .framer-kvJaC .framer-1qy86j5 { padding: 100px 30px 100px 30px; } .framer-kvJaC .framer-1jeb2d6 { gap: 16px; padding: 0px; } .framer-kvJaC .framer-nregh5 { left: unset; position: relative; top: unset; transform: unset; } .framer-kvJaC .framer-urgna1-container { height: 470px; } .framer-kvJaC .framer-146iakx { max-width: unset; padding: 0px; } .framer-kvJaC .framer-hzmis { gap: 24px; padding: 30px 24px 30px 24px; } .framer-kvJaC .framer-1fbnnbh { gap: 24px; } .framer-kvJaC .framer-1y13xhl, .framer-kvJaC .framer-11cqemz { padding: 50px 30px 50px 30px; } .framer-kvJaC .framer-6w6o32 { position: relative; top: unset; width: 100%; } .framer-kvJaC .framer-ybqbiu-container { aspect-ratio: 1.5789473684210527 / 1; height: var(--framer-aspect-ratio-supported, 475px); width: 100%; } .framer-kvJaC .framer-h88wbt { align-content: center; align-items: center; gap: 50px; } .framer-kvJaC .framer-sqs8ik { align-content: center; align-items: center; max-width: unset; padding: 0px; } .framer-kvJaC .framer-fx4rbp { align-content: flex-start; align-items: flex-start; position: relative; right: unset; top: unset; } .framer-kvJaC .framer-vnmcs { max-width: 750px; } .framer-kvJaC .framer-118ymta { gap: 40px; } .framer-kvJaC .framer-qumv23 { flex-wrap: wrap; justify-content: center; } .framer-kvJaC .framer-ebf7da-container, .framer-kvJaC .framer-c2u2qh-container, .framer-kvJaC .framer-1gqc73c-container { flex: none; width: 48%; } .framer-kvJaC .framer-bwxhny { padding: 50px 30px 100px 30px; } .framer-kvJaC .framer-8wjvh5 { padding: 0px; }}`,
        `@media (max-width: 809.98px) { .framer-kvJaC.framer-72rtr7 { width: 390px; } .framer-kvJaC .framer-2et8rt { padding: 140px 20px 80px 20px; } .framer-kvJaC .framer-1ryn4fr { align-content: flex-start; align-items: flex-start; gap: 40px; } .framer-kvJaC .framer-kmlb90, .framer-kvJaC .framer-vnmcs { align-content: flex-start; align-items: flex-start; gap: 30px; } .framer-kvJaC .framer-15f5mhq { align-content: flex-start; align-items: flex-start; } .framer-kvJaC .framer-jebi3k { max-width: unset; } .framer-kvJaC .framer-rt7vn7 { flex-wrap: wrap; gap: 16px 20px; justify-content: flex-start; max-width: unset; } .framer-kvJaC .framer-kb0x89, .framer-kvJaC .framer-1glg4fk, .framer-kvJaC .framer-1uao6ha, .framer-kvJaC .framer-1ojkmgv, .framer-kvJaC .framer-12mgyp0 { width: 100%; } .framer-kvJaC .framer-ofidbj { flex: 1 0 0px; width: 1px; } .framer-kvJaC .framer-sses4c { aspect-ratio: 1.7894736842105263 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 112px); width: 1px; } .framer-kvJaC .framer-1hosxob, .framer-kvJaC .framer-t39cfd { padding: 80px 20px 40px 20px; } .framer-kvJaC .framer-wata98 { gap: 80px; } .framer-kvJaC .framer-rex5j5, .framer-kvJaC .framer-xj1by, .framer-kvJaC .framer-baula, .framer-kvJaC .framer-109ddvr, .framer-kvJaC .framer-h88wbt, .framer-kvJaC .framer-1z84iu { gap: 40px; } .framer-kvJaC .framer-pemkgc { max-width: unset; padding: 0px; } .framer-kvJaC .framer-17gaica, .framer-kvJaC .framer-nwv3go { left: unset; position: relative; top: unset; } .framer-kvJaC .framer-n9ibgh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-kvJaC .framer-sghd1q-container, .framer-kvJaC .framer-1kdq4rs-container, .framer-kvJaC .framer-10bsqf5-container, .framer-kvJaC .framer-16o1yor-container, .framer-kvJaC .framer-trsgwd-container, .framer-kvJaC .framer-35g2pp-container { align-self: unset; } .framer-kvJaC .framer-o9xfh2, .framer-kvJaC .framer-118ymta { gap: 30px; } .framer-kvJaC .framer-1l8olw3 { gap: 60px; } .framer-kvJaC .framer-15ehdif, .framer-kvJaC .framer-bwxhny { padding: 40px 20px 80px 20px; } .framer-kvJaC .framer-w2xciu { align-content: flex-start; align-items: flex-start; padding: 0px; } .framer-kvJaC .framer-oeus2a, .framer-kvJaC .framer-fx4rbp, .framer-kvJaC .framer-426e0w { position: relative; right: unset; top: unset; } .framer-kvJaC .framer-zaxt9p, .framer-kvJaC .framer-58amdg, .framer-kvJaC .framer-qumv23 { flex-direction: column; } .framer-kvJaC .framer-12qk99s { aspect-ratio: 0.9166666666666666 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 218px); width: 1px; } .framer-kvJaC .framer-17o3fd7 { flex: none; width: 100%; } .framer-kvJaC .framer-1npbd2i, .framer-kvJaC .framer-1qy86j5 { padding: 80px 20px 80px 20px; } .framer-kvJaC .framer-1jeb2d6 { gap: 16px; padding: 0px; } .framer-kvJaC .framer-nregh5 { left: unset; position: relative; top: unset; transform: unset; } .framer-kvJaC .framer-146iakx, .framer-kvJaC .framer-sqs8ik, .framer-kvJaC .framer-8wjvh5 { padding: 0px; } .framer-kvJaC .framer-hzmis, .framer-kvJaC .framer-1fbnnbh { flex: none; gap: 20px; padding: 30px 20px 30px 20px; width: 100%; } .framer-kvJaC .framer-1y13xhl, .framer-kvJaC .framer-11cqemz { padding: 40px 20px 40px 20px; } .framer-kvJaC .framer-1goz483 { gap: 15px; } .framer-kvJaC .framer-6w6o32 { position: relative; top: unset; width: 100%; } .framer-kvJaC .framer-ybqbiu-container { aspect-ratio: 1.5789473684210527 / 1; height: var(--framer-aspect-ratio-supported, 127px); width: 100%; } .framer-kvJaC .framer-h1fr8z { flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-kvJaC .framer-1hjc27d, .framer-kvJaC .framer-1dhugmy, .framer-kvJaC .framer-7iovto { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-kvJaC .framer-ebf7da-container, .framer-kvJaC .framer-c2u2qh-container, .framer-kvJaC .framer-1gqc73c-container { flex: none; } .framer-kvJaC .framer-1icgxxb { aspect-ratio: 5.175 / 1; height: var(--framer-aspect-ratio-supported, 32px); width: 166px; }}`,
      ],
      `framer-kvJaC`
    )),
    (xd.displayName = `Home`),
    (xd.defaultProps = { height: 10507.2, width: 1260 }),
    F(
      xd,
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
        ...Eu,
        ...Du,
        ...Ou,
        ...ku,
        ...Mu,
        ...Nu,
        ...Pu,
        ...Iu,
        ...Lu,
        ...zu,
        ...Bu,
        ...Vu,
        ...Hu,
        ...Uu,
        ...Wu,
        ...Gu,
        ...Ku,
        ...N(tt),
        ...N(Ce),
        ...N(Oe),
        ...N(Me),
        ...N(Su),
        ...N(vu),
        ...N(et),
        ...N(mu),
        ...N(mt),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (xd.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          ae(ws, {}, t),
          ae(ze, {}, t),
          ae(Zl, {}, t),
          ae(Cc, {}, t),
          ae(Qc, {}, t),
          ae(uu, {}, t),
          ae(Qs, {}, t),
          ae(fl, {}, t),
          ae(Rl, {}, t),
        ])
      ),
    }),
    (Sd = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `10507.2`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"FcqlJO76t":{"layout":["fixed","auto"]},"ZCv4Ny5Al":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `{"F0TAo7Gf5":{"pattern":":F0TAo7Gf5","name":"feature"},"DdZhzy_GM":{"pattern":":DdZhzy_GM","name":"curriculum"},"BllTPa7ax":{"pattern":":BllTPa7ax","name":"testimonial"},"GWhAx0Im3":{"pattern":":GWhAx0Im3","name":"text-trigger"},"ft_MhHSmH":{"pattern":":ft_MhHSmH","name":"pricing"}}`,
            framerIntrinsicWidth: `1260`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Sd as __FramerMetadata__, xd as default, Zu as queryParamNames };
//# sourceMappingURL=LkGnXQiHMxN-hjWV6clnXSou6YaThIYQ9Yh152Fwb78.Fg98yMW0.mjs.map
