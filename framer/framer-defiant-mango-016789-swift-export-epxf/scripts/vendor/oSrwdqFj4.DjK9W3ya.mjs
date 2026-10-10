import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  V as s,
  c,
  f as l,
  h as u,
  l as d,
  m as f,
  s as p,
  u as m,
  z as h,
} from "./react.D0omlcQg.mjs";
import { M as g, a as _, r as ee, t as te } from "./motion.Bi2Azsus.mjs";
import {
  B as ne,
  C as re,
  Et as ie,
  It as ae,
  K as v,
  L as y,
  Lt as oe,
  M as b,
  Mt as x,
  N as se,
  O as ce,
  P as le,
  Pt as ue,
  T as S,
  Ut as C,
  Y as de,
  _t as fe,
  at as pe,
  et as w,
  ht as me,
  i as T,
  k as he,
  n as ge,
  o as E,
  q as D,
  r as O,
  t as _e,
  y as ve,
  zt as ye,
} from "./framer.zRtTBSC3.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./CT_DBbR5R.CmeCM4mC.mjs";
import { n as we, t as Te } from "./WWrKfqOcU.-iAiA_m2.mjs";
import { n as Ee, t as De } from "./ZpMbXYM0K.BghxFrXN.mjs";
import { n as Oe, t as ke } from "./BbFuZPGaK.ZVDYkDQW.mjs";
function Ae(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  k,
  Ve = e(() => {
    (c(),
      w(),
      te(),
      t(),
      be(),
      (je = { ESexIw2tb: { hover: !0 } }),
      (Me = [`ESexIw2tb`, `ZEy_EiJQy`]),
      (Ne = `framer-qcBhP`),
      (Pe = { ESexIw2tb: `framer-v-lvzxr7`, ZEy_EiJQy: `framer-v-mvn0tj` }),
      (Fe = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (Ie = ({ value: e, children: t }) => {
        let n = i(_),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(_.Provider, { value: o, children: t });
      }),
      (Le = { Active: `ZEy_EiJQy`, Base: `ESexIw2tb` }),
      (Re = g.create(r)),
      (ze = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        MsA4ziVRH: r ?? a.MsA4ziVRH ?? `Shipping & Delivery`,
        S8tU6pV6t: n ?? a.S8tU6pV6t,
        variant: Le[a.variant] ?? a.variant ?? `ESexIw2tb`,
      })),
      (Be = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (k = oe(
        f(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: l } = ie();
          fe();
          let {
              style: u,
              className: d,
              layoutId: f,
              variant: h,
              MsA4ziVRH: _,
              S8tU6pV6t: te,
              ...ne
            } = ze(e),
            {
              baseVariant: re,
              classNames: v,
              clearLoadingGesture: oe,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: se,
              setGestureState: ce,
              setVariant: le,
              variants: ue,
            } = ae({
              cycleOrder: Me,
              defaultVariant: `ESexIw2tb`,
              enabledGestures: je,
              ref: a,
              variant: h,
              variantClassNames: Pe,
            }),
            S = Be(e, ue),
            C = y(Ne, Ce);
          return p(ee, {
            id: f ?? s,
            children: p(Re, {
              animate: ue,
              initial: !1,
              children: p(Ie, {
                value: Fe,
                children: p(ve, {
                  href: te,
                  motionChild: !0,
                  nodeId: `ESexIw2tb`,
                  openInNewTab: !1,
                  scopeId: `n9UsXiqAk`,
                  smoothScroll: !0,
                  children: m(g.a, {
                    ...ne,
                    ...b,
                    className: `${y(C, `framer-lvzxr7`, d, v)} framer-1072xoc`,
                    "data-framer-name": `Base`,
                    draggable: `false`,
                    layoutDependency: S,
                    layoutId: `ESexIw2tb`,
                    ref: a,
                    style: { ...u },
                    ...Ae(
                      {
                        "ESexIw2tb-hover": { "data-framer-name": void 0 },
                        ZEy_EiJQy: { "data-framer-name": `Active` },
                      },
                      re,
                      x
                    ),
                    children: [
                      p(g.div, {
                        className: `framer-wje3qw`,
                        "data-framer-name": `Active Line`,
                        layoutDependency: S,
                        layoutId: `xdU1nG8XL`,
                        style: {
                          backgroundColor: `var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))`,
                        },
                      }),
                      p(he, {
                        __fromCanvasComponent: !0,
                        children: p(r, {
                          children: p(g.p, {
                            className: `framer-styles-preset-5rfdkx`,
                            "data-styles-preset": `CT_DBbR5R`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                            },
                            children: `Shipping & Delivery`,
                          }),
                        }),
                        className: `framer-16enwxh`,
                        fonts: [`Inter`],
                        layoutDependency: S,
                        layoutId: `kZL6yxQxj`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                        },
                        text: _,
                        variants: {
                          "ESexIw2tb-hover": {
                            "--extracted-r6o4lv": `var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))`,
                          },
                          ZEy_EiJQy: {
                            "--extracted-r6o4lv": `var(--token-32488aad-6873-4288-96b6-2211f3f7af61, rgb(0, 123, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ae(
                          {
                            "ESexIw2tb-hover": {
                              children: p(r, {
                                children: p(g.p, {
                                  className: `framer-styles-preset-5rfdkx`,
                                  "data-styles-preset": `CT_DBbR5R`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))`,
                                  },
                                  children: `Shipping & Delivery`,
                                }),
                              }),
                            },
                            ZEy_EiJQy: {
                              children: p(r, {
                                children: p(g.p, {
                                  className: `framer-styles-preset-5rfdkx`,
                                  "data-styles-preset": `CT_DBbR5R`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-32488aad-6873-4288-96b6-2211f3f7af61, rgb(0, 123, 255)))`,
                                  },
                                  children: `Shipping & Delivery`,
                                }),
                              }),
                            },
                          },
                          re,
                          x
                        ),
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
          `.framer-qcBhP.framer-1072xoc, .framer-qcBhP .framer-1072xoc { display: block; }`,
          `.framer-qcBhP.framer-lvzxr7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 200px; }`,
          `.framer-qcBhP .framer-wje3qw { flex: none; height: 2px; left: -1px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: calc(47.61904761904764% - 2px / 2); width: 1px; z-index: 1; }`,
          `.framer-qcBhP .framer-16enwxh { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-qcBhP.framer-v-mvn0tj.framer-lvzxr7 { cursor: unset; }`,
          `.framer-qcBhP.framer-v-mvn0tj .framer-wje3qw { left: unset; position: relative; top: unset; width: 20px; }`,
          ...xe,
        ],
        `framer-qcBhP`
      )),
      (k.displayName = `Table Of Contents Item`),
      (k.defaultProps = { height: 21, width: 200 }),
      le(k, {
        variant: {
          options: [`ESexIw2tb`, `ZEy_EiJQy`],
          optionTitles: [`Base`, `Active`],
          title: `Variant`,
          type: E.Enum,
        },
        MsA4ziVRH: { defaultValue: `Shipping & Delivery`, title: `Title`, type: E.String },
        onMsA4ziVRHChange: { changes: `MsA4ziVRH`, type: E.ChangeHandler },
        S8tU6pV6t: { title: `Link`, type: E.Link },
      }),
      se(
        k,
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
          ...D(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function He(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function A(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function j(e) {
  throw Error(`Unexpected value: ${e}`);
}
function M(e, t, n, r) {
  (A(e >= t, e, `outside lower bound for`, r), A(e <= n, e, `outside upper bound for`, r));
}
function Ue(e) {
  return typeof e == `string`;
}
function N(e) {
  return Number.isFinite(e);
}
function P(e) {
  return e === null;
}
function We(e) {
  if (P(e)) return 0;
  switch (e.type) {
    case E.Array:
      return 1;
    case E.Boolean:
      return 2;
    case E.Color:
      return 3;
    case E.Date:
      return 4;
    case E.Enum:
      return 5;
    case E.File:
      return 6;
    case E.ResponsiveImage:
      return 10;
    case E.Link:
      return 7;
    case E.Number:
      return 8;
    case E.Object:
      return 9;
    case E.RichText:
      return 11;
    case E.String:
      return 12;
    case E.VectorSetItem:
      return 13;
    default:
      j(e);
  }
}
function Ge(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = F.read(e);
    n.push(t);
  }
  return { type: E.Array, value: n };
}
function Ke(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) F.write(e, n);
}
function qe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = F.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Je(e) {
  return { type: E.Boolean, value: e.readUint8() !== 0 };
}
function Ye(e, t) {
  e.writeUint8(+!!t.value);
}
function Xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ze(e) {
  return { type: E.Color, value: e.readString() };
}
function Qe(e, t) {
  e.writeString(t.value);
}
function $e(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function et(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: E.Date, value: n.toISOString() };
}
function tt(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function nt(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function rt(e) {
  return { type: E.Enum, value: e.readString() };
}
function it(e, t) {
  e.writeString(t.value);
}
function at(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ot(e) {
  return { type: E.File, value: e.readString() };
}
function st(e, t) {
  e.writeString(t.value);
}
function ct(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function lt(e) {
  return { type: E.Link, value: e.readJson() };
}
function ut(e, t) {
  e.writeJson(t.value);
}
function dt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ft(e) {
  return { type: E.Number, value: e.readFloat64() };
}
function pt(e, t) {
  e.writeFloat64(t.value);
}
function mt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ht(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = F.read(e);
  }
  return { type: E.Object, value: n };
}
function gt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), F.write(e, r));
}
function _t(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = F.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function vt(e) {
  return { type: E.ResponsiveImage, value: e.readJson() };
}
function yt(e, t) {
  e.writeJson(t.value);
}
function bt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function xt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: E.RichText, value: e.readUint32() };
  if (t === 1) return { type: E.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function St(e, t) {
  if (N(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (Ue(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ct(e, t) {
  let n = e.value,
    r = t.value;
  if ((N(n) && N(r)) || (Ue(n) && Ue(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function wt(e) {
  return { type: E.String, value: e.readString() };
}
function Tt(e, t) {
  e.writeString(t.value);
}
function Et(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Dt(e) {
  return { type: E.VectorSetItem, value: e.readUint32() };
}
function Ot(e, t) {
  e.writeUint32(t.value);
}
function kt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function At(e) {
  let t = Math.floor(Xt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function jt(e, t) {
  let n = Nt(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Qt(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new $t(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Mt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Nt(e) {
  A(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var F,
  Pt,
  I,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  L,
  Ut,
  R,
  z,
  Wt,
  Gt,
  B,
  V,
  Kt,
  H,
  U,
  qt,
  W,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  G,
  en,
  tn,
  nn,
  rn = e(() => {
    (h(),
      w(),
      (Pt = Object.create),
      (I = Object.defineProperty),
      (Ft = Object.getOwnPropertyDescriptor),
      (It = Object.getOwnPropertyNames),
      (Lt = Object.getPrototypeOf),
      (Rt = Object.prototype.hasOwnProperty),
      (zt = (e, t, n) =>
        t in e
          ? I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (Bt = (e, t) =>
        function () {
          return (t || (0, e[It(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (Vt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of It(t))
            Rt.call(e, i) ||
              i === n ||
              I(e, i, { get: () => t[i], enumerable: !(r = Ft(t, i)) || r.enumerable });
        return e;
      }),
      (Ht = (e, t, n) => (
        (n = e == null ? {} : Pt(Lt(e))),
        Vt(!t && e && e.__esModule ? n : I(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (L = (e, t, n) => zt(e, typeof t == `symbol` ? t : t + ``, n)),
      (Ut = Ht(
        Bt({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (R = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (z = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = R.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = R.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = R.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = R.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = R.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = R.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = R.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = R.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = R.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = R.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            L(this, `offset`, 0),
            L(this, `view`),
            L(this, `decoder`, new TextDecoder()),
            (this.view = He(this.bytes)));
        }
      }),
      s !== void 0 && s.requestIdleCallback,
      (Wt = 1024),
      (Gt = 1.5),
      (B = (e) => 2 ** e - 1),
      (V = (e) => -(2 ** (e - 1))),
      (Kt = (e) => 2 ** (e - 1) - 1),
      (H = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: V(8),
        Int16: V(16),
        Int32: V(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (U = {
        Uint8: B(8),
        Uint16: B(16),
        Uint32: B(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: Kt(8),
        Int16: Kt(16),
        Int32: Kt(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (qt = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * Gt) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = He(n)));
        }
        writeUint8(e) {
          M(e, H.Uint8, U.Uint8, `Uint8`);
          let t = R.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          M(e, H.Uint16, U.Uint16, `Uint16`);
          let t = R.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          M(e, H.Uint32, U.Uint32, `Uint32`);
          let t = R.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          M(e, H.Uint64, U.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          M(e, H.BigUint64, U.BigUint64, `BigUint64`);
          let t = R.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          M(e, H.Int8, U.Int8, `Int8`);
          let t = R.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          M(e, H.Int16, U.Int16, `Int16`);
          let t = R.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          M(e, H.Int32, U.Int32, `Int32`);
          let t = R.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          M(e, H.Int64, U.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          M(e, H.BigInt64, U.BigInt64, `BigInt64`);
          let t = R.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = R.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = R.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (L(this, `offset`, 0),
            L(this, `bytes`, new Uint8Array(Wt)),
            L(this, `view`, He(this.bytes)),
            L(this, `encoder`, new TextEncoder()),
            L(this, `encodedStrings`, new Map()));
        }
      }),
      (W = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            A(N(n), `Invalid chunkId`),
            A(N(r), `Invalid offset`),
            A(N(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (A(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Ge(e);
            case 2:
              return Je(e);
            case 3:
              return Ze(e);
            case 4:
              return et(e);
            case 5:
              return rt(e);
            case 6:
              return ot(e);
            case 7:
              return lt(e);
            case 8:
              return ft(e);
            case 9:
              return ht(e);
            case 10:
              return vt(e);
            case 11:
              return xt(e);
            case 12:
              return wt(e);
            case 13:
              return Dt(e);
            default:
              j(t);
          }
        }),
          (e.write = function (e, t) {
            let n = We(t);
            if ((e.writeUint8(n), !P(t)))
              switch (t.type) {
                case E.Array:
                  return Ke(e, t);
                case E.Boolean:
                  return Ye(e, t);
                case E.Color:
                  return Qe(e, t);
                case E.Date:
                  return tt(e, t);
                case E.Enum:
                  return it(e, t);
                case E.File:
                  return st(e, t);
                case E.Link:
                  return ut(e, t);
                case E.Number:
                  return pt(e, t);
                case E.Object:
                  return gt(e, t);
                case E.ResponsiveImage:
                  return yt(e, t);
                case E.RichText:
                  return St(e, t);
                case E.VectorSetItem:
                  return Ot(e, t);
                case E.String:
                  return Tt(e, t);
                default:
                  j(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = We(e),
              i = We(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (P(e) || P(t)) return 0;
            switch (e.type) {
              case E.Array:
                return (A(t.type === E.Array), qe(e, t, n));
              case E.Boolean:
                return (A(t.type === E.Boolean), Xe(e, t));
              case E.Color:
                return (A(t.type === E.Color), $e(e, t));
              case E.Date:
                return (A(t.type === E.Date), nt(e, t));
              case E.Enum:
                return (A(t.type === E.Enum), at(e, t));
              case E.File:
                return (A(t.type === E.File), ct(e, t));
              case E.Link:
                return (A(t.type === E.Link), dt(e, t));
              case E.Number:
                return (A(t.type === E.Number), mt(e, t));
              case E.Object:
                return (A(t.type === E.Object), _t(e, t, n));
              case E.ResponsiveImage:
                return (A(t.type === E.ResponsiveImage), bt(e, t));
              case E.RichText:
                return (A(t.type === E.RichText), Ct(e, t));
              case E.VectorSetItem:
                return (A(t.type === E.VectorSetItem), kt(e, t));
              case E.String:
                return (A(t.type === E.String), Et(e, t, n));
              default:
                j(e);
            }
          }));
      })((F ||= {})),
      (Jt = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = F.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new z(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = F.read(n);
              e.push(t);
            }
            let t = W.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new qt();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) F.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), L(this, `entries`, []));
        }
      }),
      (Yt = 3),
      (Xt = 250),
      (Zt = [408, 429, 500, 502, 503, 504]),
      (Qt = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Zt.includes(r.status) || ++n > Yt) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Yt) throw e;
          }
          await At(n);
        }
      }),
      ($t = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((A(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Mt(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((A(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Mt(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          L(this, `chunks`, []);
        }
      }),
      (G = class {
        async loadModel() {
          let [e] = await jt(this.options.url, [this.options.range]);
          return (A(e, `Failed to load model`), Jt.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          A(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      j(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== E.String || t.value?.type !== E.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== E.String || t.value?.type !== E.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== E.String || t.value?.type !== E.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > F.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            F.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            L(this, `schema`),
            L(this, `fields`),
            L(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            L(this, `modelPromise`),
            L(this, `model`),
            L(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (A(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (en = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = F.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), F.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          L(this, `fields`, new Map());
        }
      }),
      (tn = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Qt(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new z(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = en.read(n),
                  i = n.getOffset() - e,
                  a = new W(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            L(this, `itemsPromise`),
            L(
              this,
              `itemLoader`,
              new Ut.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = W.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await jt(this.url, t)).map((t, n) => {
                    let r = new z(t),
                      i = en.read(r),
                      a = e[n];
                    return (A(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (nn = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = W.fromString(e),
                n = this.chunks[t.chunkId];
              return (A(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = W.fromString(e.pointer),
            r = W.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return F.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            L(this, `id`),
            L(this, `schema`),
            L(this, `indexes`),
            L(this, `resolveRichText`),
            L(this, `resolveVectorSetItem`),
            L(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new tn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function an(e) {
  return typeof e == `object` && !!e && !u(e) && cn in e;
}
function on(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function sn(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return l(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return l(ve, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (an(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            on(s, `Module not found`),
            an(s) && s.preload(),
            p(O, {
              componentIdentifier: r,
              children: (e) => p(_e, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return l(e === `a` ? g.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var K,
  cn,
  ln,
  un = e(() => {
    (h(),
      c(),
      w(),
      t(),
      s !== void 0 && s.requestIdleCallback,
      (cn = `preload`),
      (ln =
        (((K = ln || {})[(K.Fragment = 1)] = `Fragment`),
        (K[(K.Link = 2)] = `Link`),
        (K[(K.Module = 3)] = `Module`),
        (K[(K.Tag = 4)] = `Tag`),
        (K[(K.Text = 5)] = `Text`),
        K)));
  }),
  q,
  dn,
  J,
  fn,
  pn,
  mn,
  hn,
  gn,
  Y,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  X,
  Cn = e(() => {
    (w(),
      rn(),
      un(),
      (q = {
        cGT5udmtH: { isNullable: !0, type: E.RichText },
        createdAt: { isNullable: !0, type: E.Date },
        hWqyOEP_3: { isNullable: !0, type: E.String },
        id: { isNullable: !1, type: E.String },
        nextItemId: { isNullable: !0, type: E.String },
        previousItemId: { isNullable: !0, type: E.String },
        updatedAt: { isNullable: !0, type: E.Date },
        uQ2JvQyPw: { isNullable: !0, type: E.String },
        wilSgI4j3: { isNullable: !0, type: E.Enum },
      }),
      (dn = [`id`]),
      (J = { type: 1 }),
      (fn = [`previousItemId`]),
      (pn = [`nextItemId`]),
      (mn = [`id`, `uQ2JvQyPw`]),
      (hn = [`uQ2JvQyPw`, `id`]),
      (gn = [`wilSgI4j3`]),
      (Y = { type: 0 }),
      (_n = [`hWqyOEP_3`]),
      (vn = [`uQ2JvQyPw`]),
      (yn = [`cGT5udmtH`]),
      (bn = []),
      (xn = (e) => {
        let t = bn[e];
        if (t) return t().then((e) => e.default);
      }),
      (Sn = sn({})),
      new S(),
      (X = {
        collectionByLocaleId: {
          default: new nn({
            chunks: [
              new URL(
                `./QOgS8yO19-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `c5a36916-064d-4091-8bb6-94bfc129f317default`,
            indexes: [
              new G({
                collation: J,
                collectionSchema: q,
                fieldNames: dn,
                range: { from: 0, to: 1105 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: J,
                collectionSchema: q,
                fieldNames: fn,
                range: { from: 1105, to: 2209 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: J,
                collectionSchema: q,
                fieldNames: pn,
                range: { from: 2209, to: 3309 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: J,
                collectionSchema: q,
                fieldNames: mn,
                range: { from: 3309, to: 5449 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: J,
                collectionSchema: q,
                fieldNames: hn,
                range: { from: 5449, to: 7589 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: q,
                fieldNames: gn,
                range: { from: 7589, to: 8701 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: q,
                fieldNames: _n,
                range: { from: 8701, to: 10186 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: q,
                fieldNames: vn,
                range: { from: 10186, to: 11690 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new G({
                collation: Y,
                collectionSchema: q,
                fieldNames: yn,
                range: { from: 11690, to: 36331 },
                url: new URL(
                  `./QOgS8yO19-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Sn,
            resolveVectorSetItem: xn,
            schema: q,
          }),
        },
        displayName: `Business`,
        id: `c5a36916-064d-4091-8bb6-94bfc129f317`,
      }),
      le(X, {
        wilSgI4j3: {
          defaultValue: `rAskz1xe9`,
          options: [`rAskz1xe9`, `XdmpgBQwB`, `Z0cX6KWha`, `NCj5IlbaW`],
          optionTitles: [`Privacy`, `Terms`, `Shipping`, `Returns`],
          title: `Document Type`,
          type: E.Enum,
        },
        hWqyOEP_3: { defaultValue: ``, title: `Title`, type: E.String },
        uQ2JvQyPw: { preventLocalization: !0, title: `Slug`, type: E.String },
        cGT5udmtH: { defaultValue: ``, title: `Content`, type: E.RichText },
        createdAt: { title: `Created`, type: E.Date },
        updatedAt: { title: `Updated`, type: E.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/QOgS8yO19:default`,
          title: `Previous`,
          type: E.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/QOgS8yO19:default`,
          title: `Next`,
          type: E.CollectionReference,
        },
      }));
  });
function wn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Tn,
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
  Z,
  Q,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  $,
  Kn = e(() => {
    (c(),
      w(),
      te(),
      t(),
      Cn(),
      be(),
      we(),
      Ee(),
      Oe(),
      Ve(),
      (Tn = v(Te)),
      (En = v(De)),
      (Dn = v(ke)),
      (On = C(ye(b))),
      (kn = v(k)),
      (An = C(ye(g.div))),
      (jn = de(X)),
      (Mn = [`Tp6qSkdDM`, `dQd8OGUDa`]),
      (Nn = `framer-5NDJi`),
      (Pn = { dQd8OGUDa: `framer-v-zwjqpr`, Tp6qSkdDM: `framer-v-1vmlp4i` }),
      pe(),
      (Fn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (In = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.2, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ln = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Q = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (Rn = (e) => ({
        from: { alias: `s5StMueE3`, data: X, type: `Collection` },
        select: [
          { collection: `s5StMueE3`, name: `wilSgI4j3`, type: `Identifier` },
          { collection: `s5StMueE3`, name: `hWqyOEP_3`, type: `Identifier` },
          { collection: `s5StMueE3`, name: `uQ2JvQyPw`, type: `Identifier` },
          { collection: `s5StMueE3`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `s5StMueE3`, name: `wilSgI4j3`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      })),
      (zn = ({ query: e, pageSize: t, children: n }) => n(x(e))),
      (Bn = ({ value: e, children: t }) => {
        let n = i(_),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(_.Provider, { value: o, children: t });
      }),
      (Vn = { Collapsed: `dQd8OGUDa`, Expanded: `Tp6qSkdDM` }),
      (Hn = g.create(r)),
      (Un = {
        Privacy: `rAskz1xe9`,
        Returns: `NCj5IlbaW`,
        Shipping: `Z0cX6KWha`,
        Terms: `XdmpgBQwB`,
      }),
      (Wn = ({ click: e, documentType: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        H2xgQlxn8: Un[t] ?? t ?? a.H2xgQlxn8 ?? `Z0cX6KWha`,
        variant: Vn[a.variant] ?? a.variant ?? `Tp6qSkdDM`,
        Y78ORZeN8: e ?? a.Y78ORZeN8,
      })),
      (Gn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = oe(
        f(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: l } = ie(),
            u = fe(),
            {
              style: f,
              className: h,
              layoutId: _,
              variant: te,
              Y78ORZeN8: ne,
              H2xgQlxn8: v,
              ...oe
            } = Wn(e),
            {
              baseVariant: x,
              classNames: se,
              clearLoadingGesture: le,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: de,
              setGestureState: pe,
              setVariant: w,
              variants: E,
            } = ae({
              cycleOrder: Mn,
              defaultVariant: `Tp6qSkdDM`,
              ref: a,
              variant: te,
              variantClassNames: Pn,
            }),
            D = Gn(e, E),
            { activeVariantCallback: O, delay: _e } = me(x),
            ve = O(async (...e) => {
              if ((pe({ isPressed: !1 }), ne && (await ne(...e)) === !1)) return !1;
            }),
            ye = O(async (...e) => {
              w(`dQd8OGUDa`);
            }),
            be = O(async (...e) => {
              await _e(() => w(`dQd8OGUDa`), 100);
            }),
            xe = y(Nn, Ce),
            Se = () => x !== `dQd8OGUDa`;
          return (
            ue(),
            p(ee, {
              id: _ ?? s,
              children: p(Hn, {
                animate: E,
                initial: !1,
                children: p(Bn, {
                  value: Fn,
                  children: m(g.div, {
                    ...oe,
                    ...S,
                    className: y(xe, `framer-1vmlp4i`, h, se),
                    "data-border": !0,
                    "data-framer-name": `Expanded`,
                    "data-highlight": !0,
                    layoutDependency: D,
                    layoutId: `Tp6qSkdDM`,
                    onTap: ve,
                    ref: a,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      "--corner-shape-fallback": 0.796,
                      backgroundColor: `var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: `calc(43px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(43px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(43px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(43px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      boxShadow: `0px 1px 6px 0px rgba(0, 0, 0, 0.03)`,
                      cornerShape: `superellipse(1.4)`,
                      ...f,
                    },
                    ...wn({ dQd8OGUDa: { "data-framer-name": `Collapsed` } }, x, C),
                    children: [
                      m(g.div, {
                        className: `framer-t9k14y`,
                        "data-framer-name": `Header`,
                        "data-highlight": !0,
                        layoutDependency: D,
                        layoutId: `voF1Teeuv`,
                        onTap: ye,
                        ...wn({ dQd8OGUDa: { "data-highlight": void 0, onTap: void 0 } }, x, C),
                        children: [
                          p(Te, {
                            animated: !0,
                            className: `framer-1kc1vkf`,
                            layoutDependency: D,
                            layoutId: `S90teh2df`,
                            style: {
                              "--118a55": `var(--token-271a8250-cf6c-498c-9a0f-d0b021ee941e, rgb(41, 41, 41))`,
                            },
                          }),
                          p(he, {
                            __fromCanvasComponent: !0,
                            children: p(r, {
                              children: p(g.p, {
                                className: `framer-styles-preset-5rfdkx`,
                                "data-styles-preset": `CT_DBbR5R`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))`,
                                },
                                children: `Table of contents`,
                              }),
                            }),
                            className: `framer-1uo998g`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: D,
                            layoutId: `cev2tYbXN`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          p(De, {
                            animated: !0,
                            className: `framer-3v2a9r`,
                            layoutDependency: D,
                            layoutId: `MjrZl8ZRF`,
                            style: {
                              "--118a55": `var(--token-b4c72fe1-799d-45da-8343-92aab29b00d1, rgb(148, 148, 148))`,
                              filter: `blur(0px)`,
                              rotate: 0,
                              WebkitFilter: `blur(0px)`,
                            },
                            variants: { dQd8OGUDa: { rotate: -180 } },
                          }),
                        ],
                      }),
                      Se() &&
                        p(T, {
                          height: 1,
                          width: `calc(${u?.width || `100vw`} - 64px)`,
                          y:
                            (u?.y || 0) +
                            0 +
                            (((u?.height || 320) -
                              0 -
                              (154 + Math.max(0, ((u?.height || 320) - 0 - 154) / 1) * 1 + 0)) /
                              2 +
                              153 +
                              0),
                          children: p(On, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: In,
                            className: `framer-68va63-container`,
                            "data-framer-appear-id": `68va63`,
                            initial: Ln,
                            layoutDependency: D,
                            layoutId: `Fa1LqVE3z-container`,
                            nodeId: `Fa1LqVE3z`,
                            optimized: !0,
                            rendersWithMotion: !0,
                            scopeId: `oSrwdqFj4`,
                            children: p(ke, {
                              height: `100%`,
                              id: `Fa1LqVE3z`,
                              layoutId: `Fa1LqVE3z`,
                              style: { height: `100%`, width: `100%` },
                              variant: Z(`FveAb6f2W`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      Se() &&
                        p(An, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: In,
                          className: `framer-2xn74x`,
                          "data-framer-appear-id": `2xn74x`,
                          "data-hide-scrollbars": !0,
                          initial: Ln,
                          layoutDependency: D,
                          layoutId: `s5StMueE3`,
                          optimized: !0,
                          children: p(ge, {
                            children: p(zn, {
                              query: Rn(v),
                              children: (e, t, n) =>
                                p(d, {
                                  children: e?.map(
                                    ({ hWqyOEP_3: e, id: t, uQ2JvQyPw: n, wilSgI4j3: r }, i) => {
                                      ((e ??= ``), (n ??= ``));
                                      let a = Q(r, `Z0cX6KWha`),
                                        o = Q(r, `NCj5IlbaW`),
                                        s = Q(r, `rAskz1xe9`),
                                        c = Q(r, `XdmpgBQwB`);
                                      return p(
                                        ee,
                                        {
                                          id: `s5StMueE3-${t}`,
                                          children: p(re.Provider, {
                                            value: { uQ2JvQyPw: n },
                                            children: m(g.div, {
                                              className: `framer-a8s25i`,
                                              "data-highlight": !0,
                                              layoutDependency: D,
                                              layoutId: `VMSzKlfeM`,
                                              onTap: be,
                                              children: [
                                                a !== !1 &&
                                                  p(ce, {
                                                    links: [
                                                      {
                                                        href: {
                                                          hash: `:uQ2JvQyPw-:MLUSdDrct`,
                                                          hashVariables: { uQ2JvQyPw: n },
                                                          webPageId: `NvFHwchNf`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      p(T, {
                                                        height: 21,
                                                        width: `calc(${u?.width || `100vw`} - 64px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 320) -
                                                            0 -
                                                            (154 +
                                                              Math.max(
                                                                0,
                                                                ((u?.height || 320) - 0 - 154) / 1
                                                              ) *
                                                                1 +
                                                              0)) /
                                                            2 +
                                                            154 +
                                                            0) +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: p(b, {
                                                          className: `framer-lo969a-container`,
                                                          "data-framer-name": `Shipping TOC Item`,
                                                          draggable: `false`,
                                                          layoutDependency: D,
                                                          layoutId: `zynw52wqc-container`,
                                                          name: `Shipping TOC Item`,
                                                          nodeId: `zynw52wqc`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `oSrwdqFj4`,
                                                          children: p(k, {
                                                            height: `100%`,
                                                            id: `zynw52wqc`,
                                                            layoutId: `zynw52wqc`,
                                                            MsA4ziVRH: e,
                                                            name: `Shipping TOC Item`,
                                                            S8tU6pV6t: t[0],
                                                            style: { width: `100%` },
                                                            variant: Z(`ESexIw2tb`),
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                o !== !1 &&
                                                  p(ce, {
                                                    links: [
                                                      {
                                                        href: {
                                                          hash: `:uQ2JvQyPw-:ssWhGuYI5`,
                                                          hashVariables: { uQ2JvQyPw: n },
                                                          webPageId: `RqQHkoaOu`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      p(T, {
                                                        height: 21,
                                                        width: `calc(${u?.width || `100vw`} - 64px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 320) -
                                                            0 -
                                                            (154 +
                                                              Math.max(
                                                                0,
                                                                ((u?.height || 320) - 0 - 154) / 1
                                                              ) *
                                                                1 +
                                                              0)) /
                                                            2 +
                                                            154 +
                                                            0) +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: p(b, {
                                                          className: `framer-10dc9l4-container`,
                                                          "data-framer-name": `Returns TOC Item`,
                                                          draggable: `false`,
                                                          layoutDependency: D,
                                                          layoutId: `jnbZ5bFGb-container`,
                                                          name: `Returns TOC Item`,
                                                          nodeId: `jnbZ5bFGb`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `oSrwdqFj4`,
                                                          children: p(k, {
                                                            height: `100%`,
                                                            id: `jnbZ5bFGb`,
                                                            layoutId: `jnbZ5bFGb`,
                                                            MsA4ziVRH: e,
                                                            name: `Returns TOC Item`,
                                                            S8tU6pV6t: t[0],
                                                            style: { width: `100%` },
                                                            variant: Z(`ESexIw2tb`),
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                s !== !1 &&
                                                  p(ce, {
                                                    links: [
                                                      {
                                                        href: {
                                                          hash: `:uQ2JvQyPw-:qSTQ0MGe5`,
                                                          hashVariables: { uQ2JvQyPw: n },
                                                          webPageId: `hrBgwOQUm`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      p(T, {
                                                        height: 21,
                                                        width: `calc(${u?.width || `100vw`} - 64px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 320) -
                                                            0 -
                                                            (154 +
                                                              Math.max(
                                                                0,
                                                                ((u?.height || 320) - 0 - 154) / 1
                                                              ) *
                                                                1 +
                                                              0)) /
                                                            2 +
                                                            154 +
                                                            0) +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: p(b, {
                                                          className: `framer-1bl6cec-container`,
                                                          "data-framer-name": `Privacy TOC Item`,
                                                          draggable: `false`,
                                                          layoutDependency: D,
                                                          layoutId: `Rt0QRC190-container`,
                                                          name: `Privacy TOC Item`,
                                                          nodeId: `Rt0QRC190`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `oSrwdqFj4`,
                                                          children: p(k, {
                                                            height: `100%`,
                                                            id: `Rt0QRC190`,
                                                            layoutId: `Rt0QRC190`,
                                                            MsA4ziVRH: e,
                                                            name: `Privacy TOC Item`,
                                                            S8tU6pV6t: t[0],
                                                            style: { width: `100%` },
                                                            variant: Z(`ESexIw2tb`),
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                c !== !1 &&
                                                  p(ce, {
                                                    links: [
                                                      {
                                                        href: {
                                                          hash: `:uQ2JvQyPw-:vlcV_V8MH`,
                                                          hashVariables: { uQ2JvQyPw: n },
                                                          webPageId: `dRZWNF7DT`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      p(T, {
                                                        height: 21,
                                                        width: `calc(${u?.width || `100vw`} - 64px)`,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          (((u?.height || 320) -
                                                            0 -
                                                            (154 +
                                                              Math.max(
                                                                0,
                                                                ((u?.height || 320) - 0 - 154) / 1
                                                              ) *
                                                                1 +
                                                              0)) /
                                                            2 +
                                                            154 +
                                                            0) +
                                                          16 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: p(b, {
                                                          className: `framer-1q0b49w-container`,
                                                          "data-framer-name": `Terms TOC Item`,
                                                          draggable: `false`,
                                                          layoutDependency: D,
                                                          layoutId: `mQFPujMpA-container`,
                                                          name: `Terms TOC Item`,
                                                          nodeId: `mQFPujMpA`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `oSrwdqFj4`,
                                                          children: p(k, {
                                                            height: `100%`,
                                                            id: `mQFPujMpA`,
                                                            layoutId: `mQFPujMpA`,
                                                            MsA4ziVRH: e,
                                                            name: `Terms TOC Item`,
                                                            S8tU6pV6t: t[0],
                                                            style: { width: `100%` },
                                                            variant: Z(`ESexIw2tb`),
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                              ],
                                            }),
                                          }),
                                        },
                                        t
                                      );
                                    }
                                  ),
                                }),
                            }),
                          }),
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
          `.framer-5NDJi.framer-knnkgh, .framer-5NDJi .framer-knnkgh { display: block; }`,
          `.framer-5NDJi.framer-1vmlp4i { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 320px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 32px 0px 32px; position: relative; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5NDJi .framer-t9k14y { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 0px; position: relative; width: 100%; }`,
          `.framer-5NDJi .framer-1kc1vkf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-5NDJi .framer-1uo998g { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; -webkit-user-select: none; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-5NDJi .framer-3v2a9r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 13px); position: relative; width: 13px; z-index: 1; }`,
          `.framer-5NDJi .framer-68va63-container { flex: none; height: 1px; position: relative; width: 100%; }`,
          `.framer-5NDJi .framer-2xn74x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: auto; padding: 16px 0px 32px 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-5NDJi .framer-a8s25i { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5NDJi .framer-lo969a-container, .framer-5NDJi .framer-10dc9l4-container, .framer-5NDJi .framer-1bl6cec-container, .framer-5NDJi .framer-1q0b49w-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }`,
          `.framer-5NDJi.framer-v-zwjqpr.framer-1vmlp4i { height: min-content; padding: 0px 24px 0px 24px; }`,
          `.framer-5NDJi.framer-v-zwjqpr .framer-t9k14y { cursor: unset; padding: 20px 0px 20px 0px; }`,
          ...xe,
          `.framer-5NDJi[data-border="true"]::after, .framer-5NDJi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `.framer-5NDJi[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-5NDJi [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-5NDJi[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-5NDJi [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-5NDJi[data-hide-scrollbars="true"], .framer-5NDJi [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-5NDJi`
      )),
      ($.displayName = `Table Of Contents Popup`),
      ($.defaultProps = { height: 320, width: 390 }),
      le($, {
        variant: {
          options: [`Tp6qSkdDM`, `dQd8OGUDa`],
          optionTitles: [`Expanded`, `Collapsed`],
          title: `Variant`,
          type: E.Enum,
        },
        Y78ORZeN8: { title: `Click`, type: E.EventHandler },
        H2xgQlxn8: jn?.wilSgI4j3 && {
          ...jn.wilSgI4j3,
          defaultValue: `Z0cX6KWha`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Document Type`,
        },
        onH2xgQlxn8Change: { changes: `H2xgQlxn8`, type: E.ChangeHandler },
      }),
      se(
        $,
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
          ...Tn,
          ...En,
          ...Dn,
          ...kn,
          ...D(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([ne(ke, {}, t)])) }));
  });
export { k as a, Cn as i, Kn as n, Ve as o, X as r, $ as t };
//# sourceMappingURL=oSrwdqFj4.DjK9W3ya.mjs.map
