import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  L as a,
  M as o,
  P as s,
  c,
  g as l,
  h as u,
  j as d,
  o as f,
} from "./react.CAGFp8w4.mjs";
import { N as p, S as m, b as h, t as ee } from "./motion.D9nDYnVb.mjs";
import {
  D as g,
  K as _,
  dt as v,
  j as y,
  o as b,
  x,
  xt as S,
  yt as C,
} from "./framer.yhOKXYuv.mjs";
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M = e(() => {
    (f(),
      _(),
      n(),
      (w = `var(--framer-icon-mask)`),
      (T = l(function (e, t) {
        return c(`svg`, { ...e, ref: t, children: e.children });
      })),
      (E = m.create(T)),
      (D = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? c(E, { ...a, layoutId: r, ref: t, children: i })
          : c(`svg`, { ...a, ref: t, children: i });
      })),
      (O = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px"/><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px"/></svg>`),
      (k = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (A = S(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: l,
              ...u
            } = k(e),
            d = C(`2930526878`, O);
          return c(D, {
            ...u,
            className: y(`framer-YnhV6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: c(`use`, { href: d }),
          });
        }),
        [
          `.framer-YnhV6 { -webkit-mask: ${w}; aspect-ratio: 1; display: block; mask: ${w}; width: 24px; }`,
        ],
        `framer-YnhV6`
      )),
      (A.displayName = `Star`),
      (j = A),
      g(A, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: b.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: b.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: b.Number,
        },
      }));
  }),
  N,
  P,
  F = e(() => {
    (_(),
      (N = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...N },
      (P = {
        onClick: { type: b.EventHandler },
        onMouseEnter: { type: b.EventHandler },
        onMouseLeave: { type: b.EventHandler },
      }),
      b.Number,
      b.Boolean,
      b.String,
      b.Enum);
  });
function te(e, t) {
  return I(!0, e, t);
}
function ne(e, t) {
  return I(!1, e, t);
}
function I(e, t, n = !0) {
  let r = v();
  o(() => {
    n && r === e && t();
  }, [r]);
}
var L = e(() => {
    (_(), n());
  }),
  R = e(() => {
    n();
  }),
  z = e(() => {
    _();
  }),
  B = e(() => {
    _();
  }),
  re = e(() => {
    n();
  }),
  V = e(() => {
    _();
  }),
  H,
  U,
  W = e(() => {
    (i(),
      n(),
      (H = () => {
        if (a !== void 0) {
          let e = a.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (U = () => t(() => H(), [])));
  }),
  G = e(() => {
    (n(), B());
  }),
  K = e(() => {
    (n(), _(), B(), R());
  }),
  q = e(() => {
    (_(), n(), F());
  });
function ie() {
  return t(() => x.current(), []);
}
function ae() {
  return t(() => x.current() === x.canvas, []);
}
var J = e(() => {
    (n(), _());
  }),
  Y = e(() => {
    n();
  });
function oe(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
var X,
  Z = e(() => {
    (n(),
      _(),
      (X = {
        borderRadius: {
          title: `Radius`,
          type: b.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      b.FusedNumber);
  }),
  se = e(() => {
    (F(), L(), R(), z(), B(), re(), V(), W(), G(), K(), q(), J(), Y(), Z());
  });
function ce(e) {
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
function Q(e) {
  return c(ge, { ...ce(e) });
}
function le(e) {
  let t = v(),
    n = r(!1),
    i = r(!1),
    a = d((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: d(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: d(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function ue({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = s(e),
    [o, c] = s(!1);
  e !== a && !o && c(!0);
  let l = a && t && n && r && !i && !o,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function de(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function fe(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(de).join(` `);
}
var pe,
  me,
  he,
  ge,
  $,
  _e = e(() => {
    (f(),
      _(),
      ee(),
      se(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((pe ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((me ||= {})),
      (he = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (ge = u(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: i,
            srcFile: a = ``,
            posterEnabled: s = !1,
            controls: l = !1,
            playing: u = !0,
            loop: d = !0,
            muted: f = !0,
            playsinline: m = !0,
            restartOnEnter: ee = !1,
            objectFit: g = `cover`,
            backgroundColor: _ = `rgba(0,0,0,0)`,
            radius: v = 0,
            volume: y = 25,
            startTime: b = 0,
            poster: S,
            playing: C,
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
          P = r(),
          F = U(),
          I = r(null),
          L = r(null),
          R = ae(),
          z = ie(),
          B = R || z === x.export,
          re = oe(e),
          V = B
            ? `no-autoplay`
            : ue({ playingProp: C, muted: f, loop: d, playsinline: m, controls: l }),
          H = B ? !0 : p(P),
          W = B ? !1 : p(P, { margin: `10%`, once: !0 }),
          G = b === 100 ? 99.9 : b,
          { play: K, pause: q, setProgress: J, isPlaying: Y } = le(P);
        (o(() => {
          B || (V !== `on-viewport` && (C ? K() : q()));
        }, [V, C]),
          o(() => {
            B || (H && C && V !== `no-autoplay` && K(), V === `on-viewport` && q());
          }, [V, H, C]),
          o(() => {
            !R || S || s || G || !P.current || (P.current.currentTime = 0.01);
          }, [s, S, G]));
        let X = r(!1);
        (o(() => {
          if (!X.current) {
            X.current = !0;
            return;
          }
          J(((h(w) ? w.get() : (w ?? 0) * 0.01) ?? 0) || (G ?? 0) / 100);
        }, [G, a, i, w]),
          o(() => {
            if (h(w)) return w.on(`change`, (e) => J(e));
          }, [w]),
          te(() => {
            I.current !== null && P.current && ((!L && d) || !I.current) && K();
          }),
          ne(() => {
            P.current && ((L.current = P.current.ended), (I.current = P.current.paused), q());
          }));
        let Z = t(() => {
          if (n === `URL`) return i + ``;
          if (n === `Upload`) return a + ``;
        }, [n, a, i, G]);
        return (
          o(() => {
            F && P.current && V === `on-mount` && setTimeout(() => K(), 50);
          }, []),
          o(() => {
            P.current && !f && (P.current.volume = (y ?? 0) / 100);
          }, [y]),
          c(`video`, {
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
            src: Z,
            loop: d,
            ref: P,
            onSeeked: (e) => T?.(e),
            onPause: (e) => E?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => O?.(e),
            autoPlay: Y.current || V === `on-mount` || (C && V === `on-viewport` && H),
            preload: Y.current
              ? `auto`
              : B && !S
                ? `metadata`
                : V !== `on-mount` && !W
                  ? `none`
                  : `metadata`,
            poster:
              s && !a && i === he
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : s && S
                  ? S
                  : void 0,
            onLoadedData: () => {
              let e = P.current;
              e &&
                (e.currentTime < 0.3 && G > 0 && J((G ?? 0) * 0.01),
                (Y.current || V === `on-mount` || (C && V === `on-viewport` && H)) && K());
            },
            controls: l,
            muted: B ? !0 : f,
            playsInline: m,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: re,
              display: `block`,
              objectFit: g,
              backgroundColor: _,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Q.displayName = `Video`),
      ($ = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      g(Q, {
        srcType: {
          type: b.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: b.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: b.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: b.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...X,
        posterEnabled: {
          type: b.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: b.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: b.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: b.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: b.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: b.Enum, title: `Fit`, options: $, optionTitles: $.map(fe) },
        controls: {
          type: b.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: b.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: b.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: b.EventHandler },
        onSeeked: { type: b.EventHandler },
        onPause: { type: b.EventHandler },
        onPlay: { type: b.EventHandler },
        ...P,
      }));
  });
export { M as i, _e as n, j as r, Q as t };
//# sourceMappingURL=Video.BLnyXmnt.mjs.map
