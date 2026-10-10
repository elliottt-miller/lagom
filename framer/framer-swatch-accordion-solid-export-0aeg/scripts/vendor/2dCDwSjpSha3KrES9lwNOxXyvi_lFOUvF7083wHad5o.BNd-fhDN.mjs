import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  I as r,
  O as i,
  P as a,
  R as o,
  _ as s,
  b as c,
  j as ee,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m,
} from "./react.iNMCLRE-.mjs";
import { A as h, K as te, V as ne, a as re, r as g, t as _ } from "./motion.CNAiqviP.mjs";
import {
  $ as ie,
  F as ae,
  J as oe,
  K as se,
  O as v,
  Q as y,
  X as b,
  Y as ce,
  Z as x,
  _ as le,
  a as ue,
  b as S,
  g as C,
  n as w,
  r as T,
  rt as E,
  t as D,
} from "./framer.BcvqwUvb.mjs";
import { o as O, s as k } from "./shared-lib.BlmDD2sl.mjs";
function de(e) {
  return typeof e == `string` && e.trim().length > 0;
}
function fe(e) {
  return e < 9 ? `0${e + 1}` : `${e + 1}`;
}
function pe(e, t) {
  let n = String(e || t)
      .trim()
      .split(/\s+/)
      .filter(Boolean),
    [r, i = r, a = r, o = i] = n.length ? n : [t];
  return { t: r, r: i, b: a, l: o };
}
function A(e, t) {
  let { fontSize: n, ...r } = e || {};
  return { size: typeof n == `number` ? `${n}px` : n || t, rest: r };
}
function me(e) {
  let t = Math.max(0, Number(e?.delay) || 0);
  if (e && e.type && e.type !== `spring`) {
    let n =
      Array.isArray(e.ease) && e.ease.length === 4
        ? `cubic-bezier(${e.ease.map((e) => Number(e) || 0).join(`, `)})`
        : I[e.ease] || L;
    return { ease: n, fallback: n, duration: Math.max(0.05, Number(e.duration) || 0.6), delay: t };
  }
  let n, r;
  if (e && Number.isFinite(e.stiffness) && Number.isFinite(e.damping)) {
    let t = Number(e.mass) || 1;
    ((n = Math.sqrt(Math.max(1, e.stiffness) / t)),
      (r = Math.max(0.05, e.damping / (2 * Math.sqrt(Math.max(1, e.stiffness) * t)))));
  } else {
    let t = Math.max(0.1, Number(e?.duration) || 0.7);
    ((r = Math.min(1, Math.max(0.05, 1 - (Number.isFinite(e?.bounce) ? e.bounce : 0.12)))),
      (n = r >= 1 ? 6.64 / t : Math.log(100 / Math.sqrt(1 - r * r)) / (r * t)));
  }
  let i = (e) => {
      if (r >= 1) return 1 - (1 + n * e) * Math.exp(-n * e);
      let t = n * Math.sqrt(1 - r * r);
      return 1 - Math.exp(-r * n * e) * (Math.cos(t * e) + ((r * n) / t) * Math.sin(t * e));
    },
    a = 0.05;
  for (; a < 4;) {
    let e = !0;
    for (let t = 0; t <= 10; t++)
      if (Math.abs(1 - i(a + t * 0.02)) > 0.001) {
        e = !1;
        break;
      }
    if (e) break;
    a += 0.02;
  }
  let o = [];
  for (let e = 0; e <= 40; e++) {
    let t = e === 40 ? 1 : i((a * e) / 40);
    o.push(String(Math.round(t * 1e4) / 1e4));
  }
  return { ease: `linear(${o.join(`, `)})`, fallback: L, duration: a, delay: t };
}
function he({ className: e }) {
  return u(`svg`, {
    className: e,
    width: `14`,
    height: `14`,
    viewBox: `0 0 14 14`,
    fill: `none`,
    "aria-hidden": `true`,
    children: u(`path`, {
      d: `M7 2.5V11.5M2.5 7H11.5`,
      stroke: `currentColor`,
      strokeWidth: `1.6`,
      strokeLinecap: `round`,
    }),
  });
}
function ge() {
  return u(`svg`, {
    width: `16`,
    height: `16`,
    viewBox: `0 0 16 16`,
    fill: `none`,
    "aria-hidden": `true`,
    children: u(`path`, {
      d: `M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5`,
      stroke: `currentColor`,
      strokeWidth: `1.6`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    }),
  });
}
function _e(e) {
  let t = typeof Intl < `u` ? Intl.Segmenter : void 0;
  return t
    ? Array.from(new t(void 0, { granularity: `grapheme` }).segment(e), (e) => e.segment)
    : Array.from(e);
}
function ve({ text: e }) {
  let t = String(e || ``)
      .split(/\s+/)
      .filter(Boolean),
    n = 0;
  return u(`span`, {
    "aria-hidden": `true`,
    children: t.map((e, r) =>
      l(
        a,
        {
          children: [
            u(`span`, {
              className: `swa-w`,
              style: { "--wi": String(r) },
              children: _e(e).map((e, t) =>
                u(`span`, { className: `swa-c`, style: { "--c": String(n++) }, children: e }, t)
              ),
            }),
            r < t.length - 1 ? ` ` : null,
          ],
        },
        r
      )
    ),
  });
}
function ye(e) {
  return Math.max(1, String(e || ``).replace(/\s+/g, ``).length);
}
function j(e) {
  return x() ? u(M, { ...e, isStatic: !0 }) : u(M, { ...e, isStatic: !1 });
}
function M(e) {
  let {
      items: t = F,
      openItem: r = 2,
      trigger: a = `hover`,
      stripLink: ee = !0,
      autoplay: d = !1,
      interval: f = 5,
      direction: p = `auto`,
      stripWidth: h = 92,
      barHeight: re = 64,
      numbers: g = !0,
      scrim: _ = !0,
      titleTag: ie = `h3`,
      titleFont: ae,
      stripFont: oe,
      bodyFont: se,
      labelFont: v,
      textColor: y = `#141414`,
      buttonColor: b = `#141414`,
      buttonTextColor: ce = `#FFFFFF`,
      padding: x = `28px`,
      gap: le = `8px`,
      radius: ue = `24px`,
      transition: S = { type: `spring`, duration: 0.75, bounce: 0.1, delay: 0 },
      style: C,
    } = e,
    w = Array.isArray(t) && t.length ? t : F,
    T = w.length,
    E = e.isStatic,
    D = !!te(),
    O = n().replace(/[^a-zA-Z0-9_-]/g, ``),
    k = c(null),
    _e = ne(k, { margin: `0px 0px -10% 0px` }),
    j = c([]),
    M = c(null),
    N = Math.min(Math.max(Math.round(r) - 1, 0), T - 1),
    [{ active: I, prev: L }, R] = s({ active: N, prev: N }),
    z = i((e) => {
      R((t) => {
        let n = typeof e == `function` ? e(t.active) : e;
        return n === t.active ? t : { active: n, prev: t.active };
      });
    }, []),
    [B, V] = s(!1),
    [H, U] = s(!1),
    W = B || H,
    [G, K] = s(0);
  (m(() => {
    R({ active: N, prev: N });
  }, [N]),
    m(
      () => () => {
        M.current !== null && o.clearTimeout(M.current);
      },
      []
    ));
  let q = d && !E && !D && T > 1,
    J = i(
      (e) => {
        (K((e) => e + 1), z(e));
      },
      [z]
    ),
    Y = i(() => {
      (K((e) => e + 1), z((e) => (e + 1) % T));
    }, [T, z]),
    xe = (e, t) => {
      a !== `hover` ||
        e.pointerType !== `mouse` ||
        E ||
        (M.current !== null && o.clearTimeout(M.current),
        (M.current = o.setTimeout(() => {
          ((M.current = null), J(t));
        }, 110)));
    },
    Se = () => {
      M.current !== null && (o.clearTimeout(M.current), (M.current = null));
    },
    Ce = (e, t) => {
      let n = -1;
      (e.key === `ArrowRight` || e.key === `ArrowDown`
        ? (n = (t + 1) % T)
        : e.key === `ArrowLeft` || e.key === `ArrowUp`
          ? (n = (t - 1 + T) % T)
          : e.key === `Home`
            ? (n = 0)
            : e.key === `End` && (n = T - 1),
        n >= 0 && (e.preventDefault(), j.current[n]?.focus()));
    },
    X = me(D ? { type: `tween`, duration: 0.01, ease: `linear` } : S),
    we = A(ae, `52px`),
    Te = A(oe, `22px`),
    Z = A(se, `16px`),
    Q = A(v, `12px`),
    Ee = ie || `h3`,
    De = !(C && (C.height === `100%` || typeof C.height == `number`)),
    $ = pe(x, `28px`),
    Oe = String(le || `8px`)
      .trim()
      .split(/\s+/)
      .filter(Boolean),
    ke = Oe[0] || `8px`,
    Ae = Oe[1] || ke,
    je = {
      ...C,
      position: `relative`,
      color: y,
      "--swa-n": String(T),
      "--swa-closed": `${Math.max(40, h)}px`,
      "--swa-bar": `${Math.max(40, re)}px`,
      "--swa-gap": Ae,
      "--swa-gap-row": ke,
      "--swa-radius": ue,
      "--swa-pt": $.t,
      "--swa-pr": $.r,
      "--swa-pb": $.b,
      "--swa-pl": $.l,
      "--swa-text": y,
      "--swa-btn": b,
      "--swa-btn-text": ce,
      "--swa-title-size": we.size,
      "--swa-strip-size": Te.size,
      "--swa-body-size": Z.size,
      "--swa-label-size": Q.size,
      "--swa-dur": `${X.duration}s`,
      "--swa-delay": `${X.delay}s`,
      "--swa-ease": X.ease,
      "--swa-ease-fallback": X.fallback,
    };
  return l(`div`, {
    ref: k,
    className: `swa`,
    "data-dir": p,
    "data-auto-height": De ? `` : void 0,
    "data-static": E ? `` : void 0,
    "data-scrim": _ ? `` : void 0,
    style: je,
    onPointerEnter: (e) => e.pointerType === `mouse` && V(!0),
    onPointerLeave: (e) => {
      (e.pointerType === `mouse` && V(!1), Se());
    },
    onFocus: (e) => {
      let t = !0;
      try {
        t = e.target.matches(`:focus-visible`);
      } catch {}
      U(t);
    },
    onBlur: (e) => {
      e.currentTarget.contains(e.relatedTarget) || U(!1);
    },
    children: [
      u(`style`, { dangerouslySetInnerHTML: { __html: be } }),
      u(`div`, {
        className: `swa-track`,
        children: w.map((e, t) => {
          let n = t === I,
            r = (n && t > L) || (t === L && !n && t > I),
            i = e.image?.src ? e.image : P[t % P.length],
            a = Math.min(100, Math.max(0, Number.isFinite(e.focus) ? e.focus : 50)) / 100,
            o = String(e.tags || ``)
              .split(`,`)
              .map((e) => e.trim())
              .filter(Boolean),
            s = de(e.link),
            c = `swa-${O}-t${t}`,
            d = `swa-${O}-p${t}`,
            p = `swa-${O}-h${t}`,
            m = { "--swa-color": e.color || `#E9E7E1`, "--swa-focus": String(a) };
          return l(
            `div`,
            {
              className: `swa-strip`,
              "data-open": n ? `` : void 0,
              "data-pin": r ? `end` : void 0,
              style: m,
              onPointerEnter: (e) => xe(e, t),
              onPointerLeave: Se,
              children: [
                l(`div`, {
                  className: `swa-media`,
                  "aria-hidden": `true`,
                  children: [
                    u(`img`, {
                      className: `swa-img`,
                      src: i.src,
                      srcSet: i.srcSet,
                      sizes: `(max-width: 640px) 100vw, 1100px`,
                      alt: ``,
                      draggable: !1,
                      loading: `eager`,
                      fetchpriority: n ? `auto` : `low`,
                      decoding: E ? `sync` : `async`,
                    }),
                    u(`div`, { className: `swa-scrim` }),
                  ],
                }),
                u(`button`, {
                  ref: (e) => {
                    j.current[t] = e;
                  },
                  id: c,
                  type: `button`,
                  className: `swa-trigger`,
                  "aria-label": e.title || `Item ${t + 1}`,
                  "aria-expanded": n,
                  "aria-controls": d,
                  onClick: () => J(t),
                  onKeyDown: (e) => Ce(e, t),
                }),
                n && ee && s && !E
                  ? u(`a`, {
                      className: `swa-strip-link`,
                      href: e.link,
                      target: e.newTab ? `_blank` : void 0,
                      rel: e.newTab ? `noopener noreferrer` : void 0,
                      tabIndex: -1,
                      "aria-hidden": `true`,
                    })
                  : null,
                l(`div`, {
                  className: `swa-closed`,
                  "aria-hidden": `true`,
                  children: [
                    g
                      ? u(`span`, { className: `swa-num`, style: Q.rest, children: fe(t) })
                      : u(`span`, {}),
                    u(`span`, {
                      className: `swa-vt`,
                      children: u(`span`, {
                        className: `swa-vtitle`,
                        style: Te.rest,
                        children: e.title,
                      }),
                    }),
                    u(`span`, {
                      className: `swa-plw`,
                      children: l(`span`, {
                        className: `swa-plus`,
                        children: [
                          u(he, { className: `swa-pi` }),
                          u(`span`, {
                            className: `swa-pf`,
                            children: u(he, { className: `swa-pi` }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                l(`div`, {
                  id: d,
                  role: `region`,
                  "aria-labelledby": p,
                  className: `swa-open`,
                  style: { "--cn": String(ye(e.title)) },
                  ...(n ? {} : { inert: ``, "aria-hidden": !0 }),
                  children: [
                    l(`div`, {
                      className: `swa-top`,
                      children: [
                        g
                          ? u(`span`, {
                              className: `swa-rv swa-rv-num`,
                              "aria-hidden": `true`,
                              children: u(`span`, {
                                className: `swa-num`,
                                style: Q.rest,
                                children: fe(t),
                              }),
                            })
                          : u(`span`, {}),
                        o.length
                          ? u(`ul`, {
                              className: `swa-tags`,
                              "aria-label": `Tags`,
                              children: o.map((e, t) =>
                                u(
                                  `li`,
                                  {
                                    className: `swa-tag`,
                                    style: { ...Q.rest, "--i": String(t) },
                                    children: e,
                                  },
                                  t
                                )
                              ),
                            })
                          : null,
                      ],
                    }),
                    l(`div`, {
                      className: `swa-content`,
                      children: [
                        u(Ee, {
                          id: p,
                          className: `swa-title`,
                          style: we.rest,
                          "aria-label": e.title || void 0,
                          children: u(ve, { text: e.title }),
                        }),
                        e.description
                          ? u(`div`, {
                              className: `swa-rv swa-rv-desc`,
                              children: u(`p`, {
                                className: `swa-desc`,
                                style: Z.rest,
                                children: e.description,
                              }),
                            })
                          : null,
                        e.button && e.button.trim()
                          ? u(`div`, {
                              className: `swa-rc`,
                              children: s
                                ? l(`a`, {
                                    className: `swa-cta`,
                                    href: e.link,
                                    target: e.newTab ? `_blank` : void 0,
                                    rel: e.newTab ? `noopener noreferrer` : void 0,
                                    style: Z.rest,
                                    children: [u(`span`, { children: e.button }), u(ge, {})],
                                  })
                                : l(`span`, {
                                    className: `swa-cta swa-cta-static`,
                                    style: Z.rest,
                                    children: [u(`span`, { children: e.button }), u(ge, {})],
                                  }),
                            })
                          : null,
                      ],
                    }),
                    q && n
                      ? u(`div`, {
                          className: `swa-progress`,
                          "aria-hidden": `true`,
                          children: u(
                            `i`,
                            {
                              style: {
                                animationDuration: `${Math.max(1, f)}s`,
                                animationPlayState: W || !_e ? `paused` : `running`,
                              },
                              onAnimationEnd: Y,
                            },
                            `${t}-${G}`
                          ),
                        })
                      : null,
                  ],
                }),
              ],
            },
            t
          );
        }),
      }),
    ],
  });
}
var N,
  P,
  F,
  I,
  L,
  be,
  R = e(() => {
    (r(),
      f(),
      p(),
      ae(),
      _(),
      (N = `Built by Matthias Ölschlegel 💪  
[Explore more components](https://framer.link/fsd2pgh)`),
      (P = [
        {
          src: `../../assets/images/W1vHh9m78CQqEck7nFU4aEdqsWw.jpg`,
          alt: `Pistachio green paper sculpture of layered curved sheets with deep green shadows`,
        },
        {
          src: `../../assets/images/KZzoIZZFWmevQrxW20QNfraoSxQ.jpg`,
          alt: `Rose pink paper sculpture of layered petals with raspberry shadows`,
        },
        {
          src: `../../assets/images/UOfiwX1MqEHC0FC9UNmOF30LY.jpg`,
          alt: `Periwinkle paper sheets flowing in waves with deep cobalt shadows`,
        },
        {
          src: `../../assets/images/55pg3RZwwb6bZpDnzTRmAEHvhPA.jpg`,
          alt: `Stacked aqua paper layers rippling with deep teal shadows`,
        },
        {
          src: `../../assets/images/d5EaywqblJ9eH7URTE5IBMBX73g.jpg`,
          alt: `Apricot paper fan sculpture of layered sheets with burnt orange shadows`,
        },
      ]),
      (F = [
        {
          title: `Strategy`,
          description: `We start with listening. Research, positioning and a clear plan, so every next decision has a reason.`,
          tags: `Research, Positioning, Roadmap`,
          color: `#A9C670`,
          focus: 50,
          button: `Explore strategy`,
          link: ``,
          newTab: !1,
        },
        {
          title: `Identity`,
          description: `A brand that feels like you. Logo, type, colour and tone, built as one calm and recognisable system.`,
          tags: `Logo, Typography, Guidelines`,
          color: `#F7A6AD`,
          focus: 78,
          button: `Explore identity`,
          link: ``,
          newTab: !1,
        },
        {
          title: `Digital`,
          description: `Websites and products that feel effortless. Designed in the browser, tested on every screen.`,
          tags: `UX/UI, Framer, Development`,
          color: `#B8B8FE`,
          focus: 70,
          button: `Explore digital`,
          link: ``,
          newTab: !1,
        },
        {
          title: `Motion`,
          description: `Small details, lasting impressions. Motion that guides attention and gives your brand its rhythm.`,
          tags: `Animation, Interaction, Prototyping`,
          color: `#5ACAB9`,
          focus: 80,
          button: `Explore motion`,
          link: ``,
          newTab: !1,
        },
        {
          title: `Growth`,
          description: `Launch is the beginning. We measure, learn and refine, so your product keeps getting better.`,
          tags: `Analytics, SEO, Iteration`,
          color: `#EDB47B`,
          focus: 72,
          button: `Explore growth`,
          link: ``,
          newTab: !1,
        },
      ]),
      (I = {
        linear: `linear`,
        easeIn: `cubic-bezier(0.42, 0, 1, 1)`,
        easeOut: `cubic-bezier(0, 0, 0.58, 1)`,
        easeInOut: `cubic-bezier(0.42, 0, 0.58, 1)`,
        circIn: `cubic-bezier(0.55, 0, 1, 0.45)`,
        circOut: `cubic-bezier(0, 0.55, 0.45, 1)`,
        circInOut: `cubic-bezier(0.85, 0, 0.15, 1)`,
        backIn: `cubic-bezier(0.31, 0.01, 0.66, -0.59)`,
        backOut: `cubic-bezier(0.33, 1.53, 0.69, 0.99)`,
        backInOut: `cubic-bezier(0.68, -0.6, 0.32, 1.6)`,
      }),
      (L = `cubic-bezier(0.22, 1, 0.36, 1)`),
      (be = `
.swa{container-type:inline-size;container-name:swa;box-sizing:border-box;width:100%;height:100%;-webkit-font-smoothing:antialiased;--swa-out:cubic-bezier(.22,1,.36,1);--swa-pop:cubic-bezier(.34,1.45,.64,1);--swa-reveal:calc(var(--swa-delay) + var(--swa-dur) * .26);--swa-return:calc(var(--swa-delay) + var(--swa-dur) * .34);}
.swa *,.swa *::before,.swa *::after{box-sizing:border-box;}
.swa[data-auto-height]{height:auto;}
.swa-track{display:flex;flex-direction:row;row-gap:var(--swa-gap-row);column-gap:var(--swa-gap);width:100%;height:100%;}
.swa[data-auto-height] .swa-track{height:auto;aspect-ratio:16 / 9;}
.swa-strip{--swa-open-w:calc(100cqw - (var(--swa-n) - 1) * (var(--swa-closed) + var(--swa-gap)));position:relative;flex:0 0 var(--swa-closed);min-width:0;min-height:0;border-radius:var(--swa-radius);overflow:hidden;isolation:isolate;background:linear-gradient(105deg,color-mix(in srgb,var(--swa-color) 90%,#000) 0%,var(--swa-color) 55%,color-mix(in srgb,var(--swa-color) 78%,#fff) 100%);background-color:var(--swa-color);transition-property:flex-grow,flex-basis,height;transition-duration:var(--swa-dur);transition-delay:var(--swa-delay);transition-timing-function:var(--swa-ease-fallback);-webkit-tap-highlight-color:transparent;}
@supports (transition-timing-function: linear(0, 1)){.swa-strip{transition-timing-function:var(--swa-ease);}}
.swa-strip[data-open]{flex-grow:1;}
.swa-media{position:absolute;inset:0;z-index:0;overflow:hidden;border-radius:inherit;clip-path:inset(0 round var(--swa-radius));-webkit-clip-path:inset(0 round var(--swa-radius));}
.swa-strip::after{content:"";position:absolute;inset:0;z-index:6;border-radius:inherit;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.28),inset 0 1px 0 rgba(255,255,255,.35);}
.swa-img{position:absolute;top:0;height:100%;width:var(--swa-open-w);max-width:none;left:calc((100% - var(--swa-open-w)) * var(--swa-focus));object-fit:cover;object-position:calc(var(--swa-focus) * 100%) 50%;display:block;user-select:none;-webkit-user-select:none;pointer-events:none;transform:scale(1.08);transform-origin:calc(var(--swa-focus) * 100%) 55%;transition:transform 1.2s cubic-bezier(.22,1,.36,1),filter .6s ease;}
.swa-strip[data-open] .swa-img{transform:scale(1);}
.swa-scrim{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s ease;background:radial-gradient(130% 80% at 0% 100%, color-mix(in srgb,var(--swa-color) 88%,transparent) 0%, color-mix(in srgb,var(--swa-color) 55%,transparent) 32%, transparent 62%);}
.swa[data-scrim] .swa-strip[data-open] .swa-scrim{opacity:1;}
.swa-media::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(to bottom,color-mix(in srgb,var(--swa-color) 72%,transparent) 0%,color-mix(in srgb,var(--swa-color) 30%,transparent) 11%,transparent 20%),linear-gradient(to top,color-mix(in srgb,var(--swa-color) 88%,transparent) 0%,color-mix(in srgb,var(--swa-color) 66%,transparent) 22%,color-mix(in srgb,var(--swa-color) 24%,transparent) 40%,transparent 54%);opacity:1;transition:opacity .6s ease var(--swa-return);}
.swa-strip[data-open] .swa-media::after{opacity:0;transition:opacity .3s ease;}
.swa-trigger{appearance:none;-webkit-appearance:none;position:absolute;inset:0;z-index:2;margin:0;padding:0;border:0;background:transparent;border-radius:inherit;cursor:pointer;outline:none;}
.swa-strip[data-open] .swa-trigger{cursor:default;}
.swa-trigger:focus-visible{box-shadow:inset 0 0 0 2px rgba(255,255,255,.95),inset 0 0 0 4px var(--swa-text);}
.swa-strip-link{position:absolute;inset:0;z-index:3;cursor:pointer;border-radius:inherit;}
/* closed strip: number, title and plus leave at once and return one after another */
.swa-closed{position:absolute;top:0;bottom:0;left:0;width:min(100%, calc(var(--swa-closed) + 14px));z-index:4;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:var(--swa-pt) 0 calc(var(--swa-pb) + 3px);}
.swa-num{display:inline-flex;align-items:center;height:30px;font-size:var(--swa-label-size);color:var(--swa-text);opacity:.72;font-variant-numeric:tabular-nums;letter-spacing:.02em;line-height:1;user-select:none;-webkit-user-select:none;}
.swa-closed .swa-num{transition:opacity .5s ease var(--swa-return),transform .7s var(--swa-out) var(--swa-return);}
.swa-strip[data-open] .swa-closed .swa-num{opacity:0;transform:translateY(-6px);transition:opacity .14s ease,transform .3s ease;}
.swa-vt{display:flex;margin-top:auto;margin-bottom:18px;transition:opacity .55s ease calc(var(--swa-return) + 60ms),transform .9s var(--swa-out) calc(var(--swa-return) + 60ms),filter .55s ease calc(var(--swa-return) + 60ms);}
.swa-strip[data-open] .swa-vt{opacity:0;transform:translateY(18px);filter:blur(6px);transition:opacity .18s ease,transform .32s cubic-bezier(.4,0,1,1),filter .18s ease;}
.swa-vtitle{font-size:var(--swa-strip-size);color:var(--swa-text);writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;line-height:1;user-select:none;-webkit-user-select:none;transition:transform .5s var(--swa-out);}
.swa-plw{display:grid;transition:transform .8s var(--swa-pop) calc(var(--swa-return) + 120ms);}
.swa-strip[data-open] .swa-plw{transform:scale(.55) rotate(45deg);transition:transform .34s cubic-bezier(.4,0,.2,1);}
.swa-plus{position:relative;display:grid;place-items:center;width:40px;height:40px;border-radius:999px;color:var(--swa-text);background:rgba(255,255,255,.56);-webkit-backdrop-filter:blur(14px) saturate(1.4);backdrop-filter:blur(14px) saturate(1.4);border:1px solid rgba(255,255,255,.72);box-shadow:0 1px 1px rgba(255,255,255,.6) inset,0 6px 18px -10px rgba(20,20,20,.35);transition:opacity .4s ease calc(var(--swa-return) + 120ms),transform .45s var(--swa-out);}
.swa-strip[data-open] .swa-plus{opacity:0;transition:opacity .2s ease .08s,transform .45s var(--swa-out);}
/* hover fill: a dark layer rises from the bottom and carries its own white icon, so nothing ever crossfades */
.swa-pf{position:absolute;inset:-1px;display:grid;place-items:center;border-radius:inherit;background:var(--swa-text);color:#fff;clip-path:inset(100% 0 0 0);-webkit-clip-path:inset(100% 0 0 0);transition:clip-path .45s var(--swa-out),-webkit-clip-path .45s var(--swa-out);}
.swa-strip[data-open] .swa-pf{clip-path:inset(0 0 0 0);-webkit-clip-path:inset(0 0 0 0);transition:clip-path .3s var(--swa-out),-webkit-clip-path .3s var(--swa-out);}
.swa-pi{display:block;transition:transform .6s var(--swa-out);}
/* open panel: laid out at its final width so nothing re-wraps while the strip moves */
.swa-open{position:absolute;top:0;bottom:0;left:0;width:var(--swa-open-w);z-index:5;pointer-events:none;display:flex;flex-direction:column;justify-content:space-between;padding:var(--swa-pt) var(--swa-pr) var(--swa-pb) var(--swa-pl);visibility:hidden;transform:translateY(-8px);transition:transform .36s ease,visibility 0s linear .36s;}
.swa-strip[data-open] .swa-open{visibility:visible;transform:none;transition:none;}
/* pin text and labels to the edge of the strip that does not move */
.swa:not([data-dir="vertical"]) .swa-strip[data-pin="end"] .swa-open,.swa:not([data-dir="vertical"]) .swa-strip[data-pin="end"] .swa-closed{left:auto;right:0;}
/* reveal: number, tags, title words, text, button and arrow arrive one after another */
.swa-rv{display:block;opacity:0;transform:translateY(14px);filter:blur(6px);transition:opacity .2s ease,filter .2s ease,transform 0s linear .36s;}
.swa-strip[data-open] .swa-rv{opacity:1;transform:none;filter:none;transition:opacity .6s ease,transform .9s var(--swa-out),filter .6s ease;transition-delay:calc(var(--swa-reveal) + var(--d, 0ms));}
.swa-rv-num{--d:0ms;display:inline-flex;}
.swa-rv-desc{--d:calc(120ms + min(var(--cn, 8) * 20ms, 260ms));}
.swa-rc{opacity:0;transform:translateY(10px) scale(.97);transform-origin:0 50%;transition:opacity .2s ease,transform 0s linear .36s;}
.swa-strip[data-open] .swa-rc{opacity:1;transform:none;transition:opacity .55s ease,transform .9s var(--swa-out);transition-delay:calc(var(--swa-reveal) + 200ms + min(var(--cn, 8) * 20ms, 260ms));}
.swa-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;min-height:30px;}
.swa-tags{list-style:none;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px;margin:0;padding:0;max-width:70%;}
.swa-tag{display:inline-flex;align-items:center;height:30px;font-size:var(--swa-label-size);line-height:1;color:var(--swa-text);padding:0 12px;border-radius:999px;white-space:nowrap;background:rgba(255,255,255,.5);-webkit-backdrop-filter:blur(14px) saturate(1.4);backdrop-filter:blur(14px) saturate(1.4);border:1px solid rgba(255,255,255,.66);opacity:0;transform:translateY(10px);transition:opacity .2s ease,transform 0s linear .36s;}
.swa-strip[data-open] .swa-tag{opacity:1;transform:none;transition:opacity .55s ease,transform .85s var(--swa-out);transition-delay:calc(var(--swa-reveal) + 70ms + var(--i, 0) * 60ms);}
.swa-content{width:min(440px,100%);display:flex;flex-direction:column;align-items:flex-start;}
.swa-title{margin:0 0 14px;font-size:var(--swa-title-size);color:var(--swa-text);text-wrap:balance;}
.swa-w{display:inline-block;white-space:nowrap;transform:translateY(.3em);transition:transform 0s linear .36s;}
.swa-strip[data-open] .swa-w{transform:none;transition:transform 1.1s var(--swa-out) calc(var(--swa-reveal) + var(--wi, 0) * 60ms);}
.swa-c{opacity:0;filter:blur(10px);transition:opacity .2s ease,filter .2s ease;}
.swa-strip[data-open] .swa-c{opacity:1;filter:none;transition:opacity .5s ease,filter .65s ease;transition-delay:calc(var(--swa-reveal) + var(--c, 0) * 22ms);}
.swa-desc{margin:0 0 22px;font-size:var(--swa-body-size);color:var(--swa-text);opacity:.8;max-width:36ch;text-wrap:pretty;}
.swa-cta{pointer-events:auto;display:inline-flex;align-items:center;gap:12px;min-height:46px;padding:0 18px 0 22px;border-radius:999px;background:var(--swa-btn);color:var(--swa-btn-text);text-decoration:none;font-size:calc(var(--swa-body-size) * .9);font-weight:500;line-height:1;white-space:nowrap;transition:transform .2s ease;box-shadow:0 10px 24px -14px rgba(20,20,20,.55);}
.swa-cta svg{flex:none;opacity:0;transform:translateX(-8px);transition:opacity .2s ease,transform 0s linear .36s;}
.swa-strip[data-open] .swa-cta svg{opacity:1;transform:none;transition:opacity .45s ease,transform .8s var(--swa-out);transition-delay:calc(var(--swa-reveal) + 380ms + min(var(--cn, 8) * 20ms, 260ms));}
.swa-cta-static{pointer-events:none;}
.swa-cta:focus-visible{outline:2px solid var(--swa-btn);outline-offset:3px;}
a.swa-cta:active{transform:scale(.97);}
.swa-progress{position:absolute;left:var(--swa-pl);right:var(--swa-pr);bottom:12px;z-index:6;height:2px;border-radius:2px;background:rgba(20,20,20,.12);overflow:hidden;pointer-events:none;animation:swa-fade .6s ease both;animation-delay:calc(var(--swa-reveal) + 300ms);}
@keyframes swa-fade{from{opacity:0}to{opacity:1}}
.swa-progress i{display:block;height:100%;width:100%;background:var(--swa-text);transform-origin:left center;transform:scaleX(0);animation-name:swa-progress;animation-timing-function:linear;animation-fill-mode:both;animation-delay:calc(var(--swa-reveal) + 300ms);}
@keyframes swa-progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.swa-trigger:active ~ .swa-closed .swa-plus{transform:scale(.9);}
@media (hover:hover) and (pointer:fine){
  .swa-strip:not([data-open]):hover{flex-basis:calc(var(--swa-closed) + 14px);}
  .swa-strip:not([data-open]):hover .swa-pf{clip-path:inset(0 0 0 0);-webkit-clip-path:inset(0 0 0 0);}
  .swa-strip:not([data-open]):hover .swa-pi{transform:rotate(90deg);}
  .swa-strip:not([data-open]):hover .swa-vtitle{transform:rotate(180deg) translateX(4px);}
  .swa-strip:not([data-open]):hover .swa-img{transform:scale(1.04);}
  .swa-strip[data-open]:hover .swa-img{transform:scale(1.015);}
}
/* vertical: stacked bars (forced, or automatically on narrow containers) */
.swa[data-dir="vertical"] .swa-track{flex-direction:column;}
.swa[data-dir="vertical"] .swa-strip{flex:0 0 var(--swa-bar);}
.swa[data-dir="vertical"] .swa-strip[data-open]{flex-grow:1;}
.swa[data-dir="vertical"] .swa-img{width:100%;height:auto;aspect-ratio:4 / 3;left:0;top:0;transform-origin:50% 0;-webkit-mask-image:linear-gradient(to bottom,#000 68%,transparent 100%);mask-image:linear-gradient(to bottom,#000 68%,transparent 100%);}
.swa[data-dir="vertical"] .swa-scrim{display:none;}
.swa[data-dir="vertical"] .swa-img{opacity:0;transition:transform 1.2s cubic-bezier(.22,1,.36,1),opacity .5s ease;}
.swa[data-dir="vertical"] .swa-strip[data-open] .swa-img{opacity:1;transition:transform 1.2s cubic-bezier(.22,1,.36,1),opacity .6s ease calc(var(--swa-dur) * .15);}
.swa[data-dir="vertical"] .swa-closed{width:auto;right:0;flex-direction:row;justify-content:flex-start;gap:14px;padding:0 14px 0 20px;}
.swa[data-dir="vertical"] .swa-vt{margin:0 auto 0 0;}
.swa[data-dir="vertical"] .swa-vtitle{writing-mode:horizontal-tb;transform:none;}
.swa[data-dir="vertical"] .swa-strip[data-open] .swa-vt{transform:translateY(8px);}
.swa[data-dir="vertical"] .swa-strip{--swa-reveal:calc(var(--swa-delay) + var(--swa-dur) * .42);}
.swa[data-dir="vertical"] .swa-open{width:auto;right:0;}
.swa[data-dir="vertical"] .swa-num{min-width:22px;}
.swa[data-dir="vertical"][data-auto-height] .swa-track{aspect-ratio:auto;}
.swa[data-dir="vertical"][data-auto-height] .swa-strip{flex:none;height:var(--swa-bar);transition-property:height;}
.swa[data-dir="vertical"][data-auto-height] .swa-strip[data-open]{height:calc(75cqw + 232px);}
@container swa (max-width: 920px){
  .swa:not([data-dir="vertical"]) .swa-img{height:62%;-webkit-mask-image:linear-gradient(to bottom,#000 72%,transparent 100%);mask-image:linear-gradient(to bottom,#000 72%,transparent 100%);transform-origin:calc(var(--swa-focus) * 100%) 0%;}
  .swa:not([data-dir="vertical"]) .swa-scrim{display:none;}
  .swa:not([data-dir="vertical"]) .swa-title{font-size:calc(var(--swa-title-size) * .78);margin-bottom:10px;}
  .swa:not([data-dir="vertical"]) .swa-desc{margin-bottom:18px;}
  .swa:not([data-dir="vertical"]) .swa-content{width:100%;}
}
@container swa (max-width: 800px){
  .swa-tags{display:none;}
}
@container swa (max-width: 640px){
  .swa[data-dir="auto"] .swa-track{flex-direction:column;}
  .swa[data-dir="auto"] .swa-strip{flex:0 0 var(--swa-bar);}
  .swa[data-dir="auto"] .swa-strip[data-open]{flex-grow:1;}
  .swa[data-dir="auto"] .swa-img{width:100%;height:auto;aspect-ratio:4 / 3;left:0;top:0;transform-origin:50% 0;-webkit-mask-image:linear-gradient(to bottom,#000 68%,transparent 100%);mask-image:linear-gradient(to bottom,#000 68%,transparent 100%);}
  .swa[data-dir="auto"] .swa-scrim{display:none;}
  .swa[data-dir="auto"] .swa-img{opacity:0;transition:transform 1.2s cubic-bezier(.22,1,.36,1),opacity .5s ease;}
  .swa[data-dir="auto"] .swa-strip[data-open] .swa-img{opacity:1;transition:transform 1.2s cubic-bezier(.22,1,.36,1),opacity .6s ease calc(var(--swa-dur) * .15);}
  .swa[data-dir="auto"] .swa-closed{width:auto;right:0;flex-direction:row;justify-content:flex-start;gap:14px;padding:0 14px 0 20px;}
  .swa[data-dir="auto"] .swa-vt{margin:0 auto 0 0;}
  .swa[data-dir="auto"] .swa-vtitle{writing-mode:horizontal-tb;transform:none;}
  .swa[data-dir="auto"] .swa-strip[data-open] .swa-vt{transform:translateY(8px);}
  .swa[data-dir="auto"] .swa-strip{--swa-reveal:calc(var(--swa-delay) + var(--swa-dur) * .42);}
  .swa[data-dir="auto"] .swa-open{width:auto;right:0;}
  .swa[data-dir="auto"] .swa-strip[data-pin="end"] .swa-open,.swa[data-dir="auto"] .swa-strip[data-pin="end"] .swa-closed{left:0;right:0;}
  .swa[data-dir="auto"] .swa-num{min-width:22px;}
  .swa[data-dir="auto"][data-auto-height] .swa-track{aspect-ratio:auto;}
  .swa[data-dir="auto"][data-auto-height] .swa-strip{flex:none;height:var(--swa-bar);transition-property:height;}
  .swa[data-dir="auto"][data-auto-height] .swa-strip[data-open]{height:calc(75cqw + 232px);}
  .swa-title{font-size:calc(var(--swa-title-size) * .66);margin-bottom:10px;}
  .swa-desc{margin-bottom:18px;}
  .swa-open{padding:calc(var(--swa-pt) * .75) calc(var(--swa-pr) * .75) calc(var(--swa-pb) * .75) calc(var(--swa-pl) * .75);}
  .swa-tags{display:none;}
  .swa-progress{left:calc(var(--swa-pl) * .75);right:calc(var(--swa-pr) * .75);}
}
@media (hover:hover) and (pointer:fine){
  .swa[data-dir="vertical"] .swa-strip:not([data-open]):hover{flex-basis:calc(var(--swa-bar) + 8px);}
  .swa[data-dir="vertical"] .swa-strip:not([data-open]):hover .swa-vtitle{transform:translateX(4px);}
}
@container swa (max-width: 640px){
  @media (hover:hover) and (pointer:fine){
    .swa[data-dir="auto"] .swa-strip:not([data-open]):hover{flex-basis:calc(var(--swa-bar) + 8px);}
    .swa[data-dir="auto"] .swa-strip:not([data-open]):hover .swa-vtitle{transform:translateX(4px);}
  }
}
@media (prefers-reduced-motion: reduce){
  .swa *,.swa *::before,.swa *::after{transition-duration:.01ms !important;transition-delay:0s !important;}
  .swa-img,.swa-strip[data-open] .swa-img{transform:none !important;}
}
@media (prefers-contrast: more){
  .swa-desc{opacity:1;}
  .swa-num{opacity:1;}
  .swa-scrim{background:color-mix(in srgb,var(--swa-color) 70%,transparent) !important;}
}
.swa[data-static] *,.swa[data-static] *::before,.swa[data-static] *::after{transition:none !important;animation:none !important;}
`),
      (j.displayName = `Swatch Accordion`),
      le(j, {
        items: {
          type: T.Array,
          title: `Items`,
          maxCount: 8,
          control: {
            type: T.Object,
            controls: {
              title: { type: T.String, title: `Title`, defaultValue: `Title` },
              description: {
                type: T.String,
                title: `Description`,
                displayTextArea: !0,
                defaultValue: `Describe this item in one or two short sentences.`,
              },
              tags: {
                type: T.String,
                title: `Tags`,
                placeholder: `Tag, Tag, Tag`,
                defaultValue: ``,
              },
              image: { type: T.ResponsiveImage, title: `Image` },
              color: { type: T.Color, title: `Color`, defaultValue: `#C7C5ED` },
              focus: {
                type: T.Number,
                title: `Focus`,
                defaultValue: 50,
                min: 0,
                max: 100,
                step: 1,
                unit: `%`,
                description: `Which part of the image shows in a closed strip.`,
              },
              button: { type: T.String, title: `Button`, defaultValue: `Learn more` },
              link: { type: T.Link, title: `Link` },
              newTab: {
                type: T.Boolean,
                title: `New Tab`,
                defaultValue: !1,
                enabledTitle: `Yes`,
                disabledTitle: `No`,
              },
            },
          },
          defaultValue: F,
        },
        openItem: {
          type: T.Number,
          title: `Open Item`,
          defaultValue: 2,
          min: 1,
          max: 8,
          step: 1,
          displayStepper: !0,
        },
        trigger: {
          type: T.Enum,
          title: `Open On`,
          options: [`hover`, `click`],
          optionTitles: [`Hover`, `Click`],
          displaySegmentedControl: !0,
          defaultValue: `hover`,
          description: `Touch screens always open on tap.`,
        },
        stripLink: {
          type: T.Boolean,
          title: `Strip Link`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
          description: `Clicking the open strip follows its link.`,
        },
        autoplay: {
          type: T.Boolean,
          title: `Autoplay`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        interval: {
          type: T.Number,
          title: `Interval`,
          defaultValue: 5,
          min: 2,
          max: 20,
          step: 0.5,
          unit: `s`,
          hidden: (e) => !e.autoplay,
        },
        direction: {
          type: T.Enum,
          title: `Direction`,
          options: [`auto`, `horizontal`, `vertical`],
          optionTitles: [`Auto`, `Horizontal`, `Vertical`],
          defaultValue: `auto`,
          description: `Auto stacks the strips below 640 px width.`,
        },
        stripWidth: {
          type: T.Number,
          title: `Strip Width`,
          defaultValue: 92,
          min: 48,
          max: 200,
          step: 1,
          unit: `px`,
        },
        barHeight: {
          type: T.Number,
          title: `Bar Height`,
          defaultValue: 64,
          min: 44,
          max: 140,
          step: 1,
          unit: `px`,
          description: `Closed height when stacked.`,
        },
        numbers: {
          type: T.Boolean,
          title: `Numbers`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        scrim: {
          type: T.Boolean,
          title: `Scrim`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
          description: `Soft colour wash behind the text.`,
        },
        titleTag: {
          type: T.Enum,
          title: `Title Tag`,
          options: [`h2`, `h3`, `h4`, `p`],
          optionTitles: [`H2`, `H3`, `H4`, `P`],
          displaySegmentedControl: !0,
          defaultValue: `h3`,
        },
        titleFont: {
          type: T.Font,
          title: `Title Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `52px`,
            variant: `Medium`,
            letterSpacing: `-0.035em`,
            lineHeight: `1em`,
          },
        },
        stripFont: {
          type: T.Font,
          title: `Strip Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `22px`,
            variant: `Medium`,
            letterSpacing: `-0.02em`,
            lineHeight: `1em`,
          },
        },
        bodyFont: {
          type: T.Font,
          title: `Body Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `16px`,
            variant: `Regular`,
            letterSpacing: `-0.005em`,
            lineHeight: `1.5em`,
          },
        },
        labelFont: {
          type: T.Font,
          title: `Label Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `12px`,
            variant: `Medium`,
            letterSpacing: `0.01em`,
            lineHeight: `1em`,
          },
        },
        textColor: { type: T.Color, title: `Text`, defaultValue: `#141414` },
        buttonColor: { type: T.Color, title: `Button`, defaultValue: `#141414` },
        buttonTextColor: { type: T.Color, title: `Button Text`, defaultValue: `#FFFFFF` },
        padding: { type: T.Padding, title: `Padding`, defaultValue: `28px` },
        gap: { type: T.Gap, title: `Gap`, defaultValue: `8px` },
        radius: { type: T.BorderRadius, title: `Radius`, defaultValue: `24px` },
        transition: {
          type: T.Transition,
          title: `Transition`,
          defaultValue: { type: `spring`, duration: 0.75, bounce: 0.1, delay: 0 },
          description: N,
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
  q,
  J,
  Y;
e(() => {
  (f(),
    ae(),
    _(),
    p(),
    R(),
    O(),
    (z = v(j)),
    (B = {
      KbfNO_hZp: `(max-width: 809.98px)`,
      whadUXn8J: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (V = []),
    (H = `framer-pz4zV`),
    (U = {
      KbfNO_hZp: `framer-v-8499ru`,
      whadUXn8J: `framer-v-1pseqfb`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (W = (e, t, n) => (e && t ? `position` : n)),
    (G = { Desktop: `WQLkyLRf1`, Phone: `KbfNO_hZp`, Tablet: `whadUXn8J` }),
    (K = ({ value: e }) =>
      b()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (q = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: G[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (J = E(
      d(function (e, r) {
        let i = c(null),
          a = r ?? i,
          o = n(),
          { activeLocale: s, setLocale: d } = y();
        se();
        let { style: f, className: p, layoutId: m, variant: te, ...ne } = q(e);
        ie(ee(() => k({}, s), [s]));
        let [_, ae] = ce(te, B, !1),
          v = S(H),
          b = t(ue)?.isLayoutTemplate,
          x = !!t(re)?.transition?.layout,
          le = W(b, x);
        return (
          oe({}),
          u(ue.Provider, {
            value: {
              activeVariantId: _,
              humanReadableVariantMap: G,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: U,
            },
            children: l(g, {
              id: m ?? o,
              children: [
                u(K, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(h.div, {
                  ...ne,
                  className: S(v, `framer-72rtr7`, p),
                  ref: a,
                  style: { ...f },
                  children: u(h.div, {
                    className: `framer-huzu7j`,
                    "data-framer-name": `Viewport`,
                    layout: le,
                    children: u(D, {
                      children: u(w, {
                        className: `framer-x8iquu-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `Swatch Accordion`,
                        isAuthoredByUser: !0,
                        name: `Swatch Accordion`,
                        nodeId: `jU7EuDvIO`,
                        scopeId: `augiA20Il`,
                        children: u(j, {
                          autoplay: !0,
                          barHeight: 64,
                          bodyFont: {
                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                            fontSize: `16px`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                            letterSpacing: `-0.005em`,
                            lineHeight: `1.5em`,
                          },
                          buttonColor: `rgb(20, 20, 20)`,
                          buttonTextColor: `rgb(255, 255, 255)`,
                          direction: `auto`,
                          gap: `8px`,
                          height: `100%`,
                          id: `jU7EuDvIO`,
                          interval: 5,
                          items: [
                            {
                              button: `Explore strategy`,
                              color: `rgb(169, 198, 112)`,
                              description: `We start with listening. Research, positioning and a clear plan, so every next decision has a reason.`,
                              focus: 50,
                              id: `jFoqr1829`,
                              link: `https://framer.link/fsd2pgh`,
                              newTab: !0,
                              tags: `Research, Positioning, Roadmap`,
                              title: `Strategy`,
                            },
                            {
                              button: `Explore identity`,
                              color: `rgb(247, 166, 173)`,
                              description: `A brand that feels like you. Logo, type, colour and tone, built as one calm and recognisable system.`,
                              focus: 78,
                              id: `Q45iLHFiN`,
                              link: `https://framer.link/fsd2pgh`,
                              newTab: !0,
                              tags: `Logo, Typography, Guidelines`,
                              title: `Identity`,
                            },
                            {
                              button: `Explore digital`,
                              color: `rgb(184, 184, 254)`,
                              description: `Websites and products that feel effortless. Designed in the browser, tested on every screen.`,
                              focus: 70,
                              id: `MVjeu9b4G`,
                              link: `https://framer.link/fsd2pgh`,
                              newTab: !0,
                              tags: `UX/UI, Framer, Development`,
                              title: `Digital`,
                            },
                            {
                              button: `Explore motion`,
                              color: `rgb(90, 202, 185)`,
                              description: `Small details, lasting impressions. Motion that guides attention and gives your brand its rhythm.`,
                              focus: 80,
                              id: `bf48dGIaG`,
                              link: `https://framer.link/fsd2pgh`,
                              newTab: !0,
                              tags: `Animation, Interaction, Prototyping`,
                              title: `Motion`,
                            },
                            {
                              button: `Explore growth`,
                              color: `rgb(237, 180, 123)`,
                              description: `Launch is the beginning. We measure, learn and refine, so your product keeps getting better.`,
                              focus: 72,
                              id: `gfu43EME9`,
                              link: `https://framer.link/fsd2pgh`,
                              newTab: !0,
                              tags: `Analytics, SEO, Iteration`,
                              title: `Growth`,
                            },
                          ],
                          labelFont: {
                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                            fontSize: `12px`,
                            fontStyle: `normal`,
                            fontWeight: 500,
                            letterSpacing: `0.01em`,
                            lineHeight: `1em`,
                          },
                          layoutId: `jU7EuDvIO`,
                          name: `Swatch Accordion`,
                          numbers: !0,
                          openItem: 2,
                          padding: `28px`,
                          radius: `24px`,
                          scrim: !0,
                          stripFont: {
                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                            fontSize: `22px`,
                            fontStyle: `normal`,
                            fontWeight: 500,
                            letterSpacing: `-0.02em`,
                            lineHeight: `1em`,
                          },
                          stripLink: !0,
                          stripWidth: 92,
                          style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                          textColor: `rgb(20, 20, 20)`,
                          titleFont: {
                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                            fontSize: `52px`,
                            fontStyle: `normal`,
                            fontWeight: 500,
                            letterSpacing: `-0.035em`,
                            lineHeight: `1em`,
                          },
                          titleTag: `h3`,
                          transition: { bounce: 0.1, delay: 0, duration: 0.75, type: `spring` },
                          trigger: `hover`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  }),
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-pz4zV.framer-lux5qc, .framer-pz4zV .framer-lux5qc { display: block; }`,
        `.framer-pz4zV.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-pz4zV .framer-huzu7j { align-content: center; align-items: center; background: linear-gradient(180deg, #eff3e8 0%, rgb(225, 233, 213) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; min-height: 100vh; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; }`,
        `.framer-pz4zV .framer-x8iquu-container { flex: 1 0 0px; height: 640px; max-width: 1180px; position: relative; width: 1px; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-pz4zV.framer-72rtr7 { width: 810px; } .framer-pz4zV .framer-huzu7j { padding: 32px; } .framer-pz4zV .framer-x8iquu-container { height: 560px; }}`,
        `@media (max-width: 809.98px) { .framer-pz4zV.framer-72rtr7 { width: 390px; } .framer-pz4zV .framer-huzu7j { flex-direction: column; padding: 40px 16px 40px 16px; } .framer-pz4zV .framer-x8iquu-container { flex: none; height: 720px; width: 100%; }}`,
      ],
      `framer-pz4zV`
    )),
    (J.displayName = `Home`),
    (J.defaultProps = { height: 800, width: 1200 }),
    C(
      J,
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
        ...z,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Y = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"whadUXn8J":{"layout":["fixed","auto"]},"KbfNO_hZp":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `800`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Y as __FramerMetadata__, J as default, V as queryParamNames };
//# sourceMappingURL=2dCDwSjpSha3KrES9lwNOxXyvi_lFOUvF7083wHad5o.BNd-fhDN.mjs.map
