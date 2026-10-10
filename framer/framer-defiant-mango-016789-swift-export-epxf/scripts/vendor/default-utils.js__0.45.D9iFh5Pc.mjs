import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { D as t, P as n, z as r } from "./react.D0omlcQg.mjs";
import { et as i, o as a } from "./framer.zRtTBSC3.mjs";
var o,
  s = e(() => {
    (i(),
      (o = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...o },
      a.EventHandler,
      a.EventHandler,
      a.EventHandler,
      a.Number,
      a.Boolean,
      a.String,
      a.Enum);
  }),
  c = e(() => {
    (i(), t());
  }),
  l = e(() => {
    t();
  }),
  u = e(() => {
    i();
  }),
  d = e(() => {
    i();
  }),
  f = e(() => {
    t();
  }),
  p = e(() => {
    i();
  }),
  m = e(() => {
    (r(), t());
  }),
  h = e(() => {
    (t(), d());
  }),
  g = e(() => {
    (t(), i(), d(), l());
  }),
  _ = e(() => {
    (i(), t(), s());
  }),
  v = e(() => {
    (t(), i());
  }),
  y = e(() => {
    t();
  });
function b(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return n(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${t}px`), [t, r, i, a, o, s]);
}
function x(e) {
  let {
    padding: t,
    paddingPerSide: r,
    paddingTop: i,
    paddingRight: a,
    paddingBottom: o,
    paddingLeft: s,
  } = e;
  return n(() => (r ? `${i}px ${a}px ${o}px ${s}px` : t), [t, r, i, a, o, s]);
}
var S,
  C,
  w = e(() => {
    (t(),
      i(),
      (S = {
        borderRadius: {
          title: `Radius`,
          type: a.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (C = {
        padding: {
          type: a.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  }),
  T = e(() => {
    (s(), c(), l(), u(), d(), f(), p(), m(), h(), g(), _(), v(), y(), w());
  }),
  E = e(() => {
    T();
  });
export { x as a, s as c, C as i, S as n, b as o, w as r, o as s, E as t };
//# sourceMappingURL=default-utils.js@_0.45.D9iFh5Pc.mjs.map
