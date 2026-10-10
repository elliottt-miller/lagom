import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  D as r,
  E as i,
  F as a,
  H as o,
  I as s,
  L as c,
  M as l,
  N as u,
  S as d,
  T as f,
  c as p,
  f as m,
  g as h,
  h as g,
  j as _,
  l as v,
  o as y,
  s as b,
  v as x,
  w as S,
  y as ee,
} from "./react.CWoGm2_e.mjs";
import { C, a as w, r as T, t as E } from "./motion.DjW49AAR.mjs";
import {
  A as te,
  D,
  E as ne,
  Et as O,
  H as k,
  I as re,
  P as A,
  S as ie,
  St as ae,
  U as oe,
  X as j,
  _ as M,
  _t as se,
  a as ce,
  ct as le,
  dt as N,
  f as P,
  ft as F,
  i as I,
  j as L,
  kt as ue,
  mt as de,
  n as R,
  nt as z,
  o as B,
  vt as fe,
  w as pe,
  wt as me,
  x as he,
} from "./framer.D9PtOJZM.mjs";
import { a as ge, c as _e, i as V, o as H, r as U, s as W } from "./shared-lib.Cln7NIgD.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./jajJzupWJ.Cqa78jPq.mjs";
import { i as G, n as Se, r as Ce, t as we } from "./zWe8uO5eV.D_hz-QQE.mjs";
import { n as Te, t as Ee } from "./Q2lmlORGh.mE3XBzWB.mjs";
import { a as De, i as K, n as q } from "./h78sYrnAz.CN_Z4VaQ.mjs";
import Oe, { t as ke } from "./12j8Zge5Bk8IVg_KY7Td3CE9WGFTf3YzqQ65QuPZ9Pg.CmX8ErJn.mjs";
function Ae({ hidden: e } = {}) {
  return {
    superfieldsId: {
      type: B.Number,
      defaultValue: 0,
      min: 0,
      step: 1,
      displayStepper: !0,
      title: `CMS ID`,
      description: `Match with ID on Superfields component`,
      hidden: e,
    },
  };
}
function je({ props: e, onClick: t, onMouseEnter: n = null }) {
  if (e.appearance == `custom`) {
    let n = e.customLayer?.[0],
      r = e.style?.width,
      i = e.style?.height;
    return (
      n &&
        e.style &&
        (r || i) &&
        (n = _(n, {
          style: { ...n.props.style, ...(r && { width: r }), ...(i && { height: i }) },
        })),
      p(`div`, { "data-superfields": !0, style: { display: `contents` }, onClick: t, children: n })
    );
  }
  return v(`div`, {
    "data-superfields": !0,
    onClick: t,
    style: {
      position: `relative`,
      display: `flex`,
      justifyContent: e.font?.textAlign || `center`,
      alignItems: `center`,
      ...Pe(e.fill),
      color: e.fontColor,
      padding: e.paddingIsMixed
        ? `${e.paddingTop}px ${e.paddingRight}px ${e.paddingBottom}px ${e.paddingLeft}px`
        : `${e.padding}px`,
      borderRadius: e.radiusIsMixed
        ? `${e.radiusTopLeft}px ${e.radiusTopRight}px ${e.radiusBottomRight}px ${e.radiusBottomLeft}px`
        : `${e.radius}px`,
      userSelect: `none`,
      cursor: `pointer`,
      flex: e.sizing == `fill` ? `1 0 0` : void 0,
      textWrap: e.style?.width == `100%` ? void 0 : `nowrap`,
      boxShadow: e.shadows,
      backdropFilter: e.bgBlur ? `blur(${e.bgBlur}px)` : void 0,
      ...e.font,
      ...e.style,
    },
    children: [e.text, p(Me, { ...e.border })],
  });
}
function Me({
  width: e,
  widthIsMixed: t,
  widthTop: n,
  widthRight: r,
  widthBottom: i,
  widthLeft: a,
  style: o,
  color: s,
  transition: c,
  animate: l,
  radius: u = `inherit`,
}) {
  return p(C.div, {
    animate: { borderColor: s, ...l },
    style: {
      position: `absolute`,
      inset: 0,
      borderWidth: t ? `${n}px ${r}px ${i}px ${a}px` : `${e}px`,
      borderStyle: o,
      borderRadius: u,
      pointerEvents: `none`,
    },
    initial: !1,
    transition: c,
  });
}
function Ne({ title: e, subtitle: t }) {
  return v(`div`, {
    style: {
      display: `flex`,
      width: `100%`,
      height: `100%`,
      placeContent: `center`,
      placeItems: `center`,
      flexDirection: `column`,
      gap: 16,
      backgroundColor: `rgba(136, 85, 255, 0.1)`,
      borderRadius: 6,
      border: `1px dashed rgb(136, 85, 255)`,
      color: `rgb(136, 85, 255)`,
      fontSize: 16,
      padding: 20,
      minHeight: 200,
      textWrap: `balance`,
    },
    children: [
      p(`p`, { style: { margin: 0, fontWeight: 600, textAlign: `center` }, children: e }),
      p(`p`, {
        style: { margin: 0, opacity: 0.7, lineHeight: 1.5, textAlign: `center` },
        children: t,
      }),
    ],
  });
}
function Pe(e, t = null) {
  if (e) {
    let { color: n, colorA: r, colorB: i } = e;
    return (
      typeof t == `boolean` &&
        (t
          ? ((n = e.colorOn), (r = e.colorAOn), (i = e.colorBOn))
          : ((n = e.colorOff), (r = e.colorAOff), (i = e.colorBOff))),
      e.type == `color`
        ? { backgroundColor: n, backgroundImage: `none` }
        : {
            backgroundColor: `none`,
            backgroundImage: `linear-gradient(${e.gradientAngle}deg, ${i}, ${r})`,
          }
    );
  }
  return {};
}
function Fe({
  color: e = `#FFF`,
  gradientColorA: t = `#FFF`,
  gradientColorB: n = `#BDBDBD`,
  noDefault: r = !1,
  ...i
}) {
  return {
    type: B.Object,
    optional: !0,
    defaultValue: r ? void 0 : { type: `color`, color: e, colorA: t, colorB: n, gradientAngle: 0 },
    controls: {
      type: {
        type: B.Enum,
        defaultValue: `color`,
        options: [`color`, `gradient`],
        optionTitles: [`Color`, `Gradient`],
        displaySegmentedControl: !0,
      },
      color: { type: B.Color, defaultValue: e, hidden: (e) => e.type != `color` },
      colorA: {
        type: B.Color,
        defaultValue: t,
        title: `Colors`,
        hidden: (e) => e.type != `gradient`,
      },
      colorB: { type: B.Color, defaultValue: n, title: ` `, hidden: (e) => e.type != `gradient` },
      gradientAngle: {
        type: B.Number,
        defaultValue: 0,
        title: `Angle`,
        step: 1,
        min: 0,
        max: 360,
        unit: `°`,
        hidden: (e) => e.type != `gradient`,
      },
    },
    ...i,
  };
}
function Ie({
  colorOn: e = `#FFF`,
  colorAOn: t = `#FFF`,
  colorBOn: n = `#000`,
  colorOff: r = `#FFF`,
  colorAOff: i = `#FFF`,
  colorBOff: a = `#000`,
  noDefault: o = !1,
  ...s
}) {
  return {
    type: B.Object,
    optional: !0,
    defaultValue: o
      ? void 0
      : {
          type: `color`,
          colorOn: e,
          colorAOn: t,
          colorBOn: n,
          colorOff: r,
          colorAOff: i,
          colorBOff: a,
          gradientAngle: 0,
        },
    controls: {
      type: {
        type: B.Enum,
        defaultValue: `color`,
        options: [`color`, `gradient`],
        optionTitles: [`Color`, `Gradient`],
        displaySegmentedControl: !0,
      },
      colorOn: { type: B.Color, defaultValue: e, hidden: (e) => e.type != `color` },
      colorAOn: {
        type: B.Color,
        defaultValue: t,
        title: `Colors On`,
        hidden: (e) => e.type != `gradient`,
      },
      colorBOn: { type: B.Color, defaultValue: n, title: ` `, hidden: (e) => e.type != `gradient` },
      colorOff: { type: B.Color, defaultValue: r, hidden: (e) => e.type != `color` },
      colorAOff: {
        type: B.Color,
        defaultValue: i,
        title: `Colors Off`,
        hidden: (e) => e.type != `gradient`,
      },
      colorBOff: {
        type: B.Color,
        defaultValue: a,
        title: ` `,
        hidden: (e) => e.type != `gradient`,
      },
      gradientAngle: {
        type: B.Number,
        defaultValue: 0,
        title: `Angle`,
        step: 1,
        min: 0,
        max: 360,
        unit: `°`,
        hidden: (e) => e.type != `gradient`,
      },
    },
    ...s,
  };
}
function Le({ defaultSorting: e = !1, hidden: t = null } = {}) {
  return {
    sortBy: {
      type: B.Enum,
      defaultValue: `field`,
      options: [`field`, `favourites`, ...(e ? [`defaultSorting`] : [])],
      optionTitles: [`CMS Field`, `Favourites`, ...(e ? [`Default Sorting`] : [])],
      displaySegmentedControl: !0,
      segmentedControlDirection: `vertical`,
      hidden: t,
    },
    fieldName: {
      type: B.String,
      defaultValue: ``,
      placeholder: `CMS Field Name`,
      hidden: (e) => e.sortBy !== `field` || t?.(e),
    },
    fieldType: {
      type: B.Enum,
      defaultValue: `string`,
      options: [`string`, `number`, `date`, `boolean`, `enum`, `reference`],
      optionTitles: [`Text`, `Number`, `Date`, `Toggle`, `Option`, `Reference`],
      hidden: (e) => e.sortBy !== `field` || t?.(e),
    },
    referenceFieldName: {
      type: B.String,
      defaultValue: `Title`,
      placeholder: `Reference Field Name`,
      hidden: (e) => e.sortBy !== `field` || e.fieldType !== `reference` || t?.(e),
    },
    referenceFieldType: {
      type: B.Enum,
      defaultValue: `string`,
      options: [`string`, `number`, `date`, `boolean`, `enum`],
      optionTitles: [`Text`, `Number`, `Date`, `Toggle`, `Option`],
      hidden: (e) => e.sortBy !== `field` || e.fieldType !== `reference` || t?.(e),
    },
    stringSort: {
      type: B.Enum,
      defaultValue: `ascending`,
      options: [`ascending`, `descending`],
      optionTitles: [`A → Z`, `Z → A`],
      displaySegmentedControl: !0,
      title: `Sort`,
      hidden: (e) => He(e) !== `string` || t?.(e),
    },
    numberSort: {
      type: B.Enum,
      defaultValue: `ascending`,
      options: [`ascending`, `descending`],
      optionTitles: [`Ascending ↑`, `Descending ↓`],
      displaySegmentedControl: !0,
      segmentedControlDirection: `vertical`,
      title: `Sort`,
      hidden: (e) => He(e) !== `number` || t?.(e),
    },
    dateSort: {
      type: B.Enum,
      defaultValue: `ascending`,
      options: [`ascending`, `descending`],
      optionTitles: [`Ascending ↑`, `Descending ↓`],
      displaySegmentedControl: !0,
      segmentedControlDirection: `vertical`,
      title: `Sort`,
      hidden: (e) => He(e) !== `date` || t?.(e),
    },
    booleanSort: {
      type: B.Enum,
      defaultValue: `ascending`,
      options: [`yesNo`, `noYes`],
      optionTitles: [`Yes, No`, `No, Yes`],
      displaySegmentedControl: !0,
      title: `Sort`,
      hidden: (e) => He(e) !== `boolean` || t?.(e),
    },
    enumSort: {
      type: B.Enum,
      defaultValue: `ascending`,
      options: [`optionOrder`, `reverseOptionOrder`, `ascending`, `descending`],
      optionTitles: [`Option Order`, `Reverse Order`, `A → Z`, `Z → A`],
      displaySegmentedControl: !0,
      segmentedControlDirection: `vertical`,
      title: `Sort`,
      hidden: (e) => He(e) !== `enum` || t?.(e),
    },
    favouritesSort: {
      type: B.Enum,
      defaultValue: `favouritesFirst`,
      options: [`favouritesFirst`, `favouritesLast`],
      optionTitles: [`Favourites First`, `Favourites Last`],
      displaySegmentedControl: !0,
      segmentedControlDirection: `vertical`,
      title: `Sort`,
      hidden: (e) => e.sortBy !== `favourites` || t?.(e),
    },
  };
}
var Re,
  ze,
  J,
  Y,
  Be,
  Ve,
  X,
  He,
  Ue = e(() => {
    (y(),
      j(),
      E(),
      S(),
      (Re = `[{(FAVOURITES)}]`),
      (ze = `_&%#|_`),
      (function (e) {
        ((e.String = `string`),
          (e.Number = `number`),
          (e.Boolean = `boolean`),
          (e.Enum = `enum`),
          (e.Date = `date`));
      })((J ||= {})),
      (function (e) {
        ((e.Option = `option`),
          (e.Toggle = `toggle`),
          (e.Text = `text`),
          (e.Reference = `reference`),
          (e.MultiReference = `multiReference`),
          (e.MultipleOptions = `multipleOptions`));
      })((Y ||= {})),
      (function (e) {
        ((e.Equals = `equals`), (e.Contains = `contains`));
      })((Be ||= {})),
      (Ve = () => `superfields-${ee().replace(/:/g, ``)}`),
      (je.displayName = `Superfields/Button`),
      (X = (e = {}) => ({
        type: B.Object,
        optional: !0,
        controls: {
          color: { type: B.Color, defaultValue: `#222` },
          width: {
            type: B.FusedNumber,
            defaultValue: 1,
            toggleKey: `widthIsMixed`,
            toggleTitles: [`All`, `Individual`],
            valueKeys: [`widthTop`, `widthRight`, `widthBottom`, `widthLeft`],
            valueLabels: [`T`, `R`, `B`, `L`],
            min: 0,
          },
          style: {
            type: B.Enum,
            defaultValue: `solid`,
            options: [`solid`, `dashed`, `dotted`, `double`],
            optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
          },
        },
        ...e,
      })),
      (Me.displayName = `Superfields/Border`),
      (Ne.displayName = `Superfields/Message`),
      (He = (e) =>
        e.sortBy === `field`
          ? e.fieldType === `reference`
            ? e.referenceFieldType
            : e.fieldType
          : !1));
  });
function We(e, t) {
  let n = !1;
  for (let e of Object.keys(t)) {
    let r = t[e];
    r.advanced &&
      ((n = !0),
      r.hidden
        ? (r.hidden = (e) => e.mode !== `advanced` || r.hidden(e))
        : (r.hidden = (e) => e.mode !== `advanced`));
  }
  L(e, { ...(n ? qe : {}), ...t, ...Je });
}
function Ge(e, t = `padding`) {
  if (e && typeof e == `string`) {
    let n = e
      .trim()
      .split(/\s+/)
      .map((e) => parseInt(e, 10));
    if (n.length === 1) return { [t]: n[0], [`${t}IsMixed`]: !1 };
    if (n.length === 4)
      return {
        [t]: null,
        [`${t}IsMixed`]: !0,
        [`${t}Top`]: n[0],
        [`${t}Right`]: n[1],
        [`${t}Bottom`]: n[2],
        [`${t}Left`]: n[3],
      };
  }
  return { [t]: 0, [`${t}IsMixed`]: !1 };
}
function Ke(e, t = `radius`) {
  if (e && typeof e == `string`) {
    let n = e
      .trim()
      .split(/\s+/)
      .map((e) => parseInt(e, 10));
    if (n.length === 1) return { [t]: n[0], [`${t}IsMixed`]: !1 };
    if (n.length === 4)
      return {
        [t]: null,
        [`${t}IsMixed`]: !0,
        [`${t}TopLeft`]: n[0],
        [`${t}TopRight`]: n[1],
        [`${t}BottomRight`]: n[2],
        [`${t}BottomLeft`]: n[3],
      };
  }
  return { [t]: 0, [`${t}IsMixed`]: !1 };
}
var qe,
  Je,
  Ye,
  Xe = e(() => {
    (j(),
      Ue(),
      (qe = {
        mode: {
          type: B.Enum,
          defaultValue: `basic`,
          options: [`basic`, `advanced`],
          optionTitles: [`Basic`, `Advanced`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
      }),
      (Je = {
        needHelp: {
          type: B.Object,
          title: `Need help?`,
          buttonTitle: `Get Support`,
          icon: `interaction`,
          controls: {
            info: {
              type: B.Enum,
              defaultValue: `info`,
              options: [`info`],
              optionTitles: [`Support 🛟`],
              displaySegmentedControl: !0,
              title: `Get Support`,
              description: `We're here to help! The best place to get support is to visit our documentation to find your answers. We're also available on live chat.

[Visit Superfields docs](https://insertframe.io/docs/superfields)`,
            },
          },
        },
      }),
      (Ye = {
        type: B.Number,
        defaultValue: 0,
        step: 1,
        min: 0,
        displayStepper: !0,
        title: `ID`,
        description: `If using multiple collections on the same page, set a specific ID to match.`,
      }));
  });
function Ze(e) {
  let t = null;
  e?.props?.query
    ? (t = e)
    : e?.props?.children?.props?.query
      ? (t = e.props.children)
      : e?.props?.children?.props?.children?.props?.query && (t = e.props.children.props.children);
  let n = t?.props?.query,
    r = n?.from,
    i = [];
  r &&
    (r.type === `Collection`
      ? i.push(r)
      : r.type === `LeftJoin` && (Qe(r.left, i), Qe(r.right, i)));
  let a = n?.select;
  if (i.length > 1 && Array.isArray(a)) {
    for (let e of a)
      if (e.type == `Identifier` && e.name == `id` && !e.alias) {
        let t = i.find((t) => t.alias == e.collection);
        t && (i = [t, ...i.filter((e) => e !== t)]);
        break;
      }
  }
  let o = {},
    s = {};
  if (Array.isArray(a)) {
    for (let e of a)
      if (
        e.type === `FunctionCall` &&
        (e.functionName === `ARRAY` || e.functionName === `FLAT_ARRAY`) &&
        Array.isArray(e.arguments)
      ) {
        for (let t of e.arguments)
          if (t.from?.type === `Collection`) {
            let e = t.from.alias,
              n = e,
              r = t.where?.right;
            (r && r.type === `Identifier` && r.name && (n = r.name),
              i.push({ ...t.from, fieldId: n }),
              (s[n] = e),
              (s[e] = e),
              (o[e] = t));
          }
      }
  }
  let c = i[0]?.data,
    l = {},
    u = {};
  for (let e of i) {
    let t = {},
      n = {};
    ((l[e.alias] = t), (u[e.alias] = n));
    let r = e.data?.propertyControls;
    for (let e of Object.keys(r)) {
      let i = { id: e, ...r[e] };
      ((t[e] = i), (n[i.title] = i));
    }
  }
  let d = null;
  if (e) {
    let t = e.props?.children;
    typeof t == `function`
      ? (d = t)
      : typeof t?.props?.children == `function`
        ? (d = t.props.children)
        : typeof t?.props?.children?.props?.children == `function` &&
          (d = t.props.children.props.children);
  }
  return {
    query: n,
    queryParent: t,
    queryData: c,
    collections: i,
    propertyControlsById: l,
    propertyControlsByTitle: u,
    childrenFunction: d,
    multiReferenceQueries: o,
    multiReferenceIdMap: s,
  };
}
function Qe(e, t) {
  e &&
    typeof e == `object` &&
    (e.type === `Collection`
      ? t.push(e)
      : e.type === `LeftJoin` && (Qe(e.left, t), Qe(e.right, t)));
}
function $e(e, t, n, r) {
  let i = Array.isArray(t?.select) ? [...t.select] : [];
  for (let a of e) {
    let e = et(a.name, a.referenceFieldName, t, n, r, i);
    e && i.push(e);
  }
  return i;
}
function et(e, t, n, r, i, a = null) {
  let o = i[0]?.alias || ``,
    s = r[o]?.[e];
  if (!s) return null;
  let c = s?.id,
    l = t ? c : o,
    u = t ? r[c]?.[t] : null;
  if (a) {
    let e = !1;
    for (let n of a)
      if (n.type === `Identifier`) {
        if (t) {
          if (u && n.alias === `${c}.${u.id}` && n.collection === c && n.name === u.id) {
            e = !0;
            break;
          }
        } else if (n.name === c && n.collection === l) {
          e = !0;
          break;
        }
      } else if (n.type === `FunctionCall` && n.alias === c) {
        e = !0;
        break;
      }
    if (e) return null;
  }
  if (t) {
    if (u) return { alias: `${c}.${u.id}`, collection: c, name: u.id, type: `Identifier` };
  } else return { collection: l, name: c, type: `Identifier` };
}
var tt = e(() => {});
function nt(e) {
  let t,
    n = new Set(),
    r = (e, r) => {
      let i = typeof e == `function` ? e(t) : e;
      if (i !== t) {
        let e = t;
        ((t = r ? i : Object.assign({}, t, i)), n.forEach((n) => n(t, e)));
      }
    },
    i = () => t,
    a = (e, r = i, a = Object.is) => {
      console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
      let o = r(t);
      function s() {
        let n = r(t);
        if (!a(o, n)) {
          let t = o;
          e((o = n), t);
        }
      }
      return (n.add(s), () => n.delete(s));
    },
    o = {
      setState: r,
      getState: i,
      subscribe: (e, t, r) => (t || r ? a(e, t, r) : (n.add(e), () => n.delete(e))),
      destroy: () => n.clear(),
    };
  return ((t = e(r, i, o)), o);
}
function rt(e) {
  let n = typeof e == `function` ? nt(e) : e,
    a = (e = n.getState, a = Object.is) => {
      let [, o] = i((e) => e + 1, 0),
        s = n.getState(),
        c = t(s),
        l = t(e),
        u = t(a),
        d = t(!1),
        f = t();
      f.current === void 0 && (f.current = e(s));
      let p,
        m = !1;
      ((c.current !== s || l.current !== e || u.current !== a || d.current) &&
        ((p = e(s)), (m = !a(f.current, p))),
        at(() => {
          (m && (f.current = p),
            (c.current = s),
            (l.current = e),
            (u.current = a),
            (d.current = !1));
        }));
      let h = t(s);
      at(() => {
        let e = () => {
            try {
              let e = n.getState(),
                t = l.current(e);
              u.current(f.current, t) || ((c.current = e), (f.current = t), o());
            } catch {
              ((d.current = !0), o());
            }
          },
          t = n.subscribe(e);
        return (n.getState() !== h.current && e(), t);
      }, []);
      let g = m ? p : f.current;
      return (r(g), g);
    };
  return (
    Object.assign(a, n),
    (a[Symbol.iterator] = function () {
      console.warn(`[useStore, api] = create() is deprecated and will be removed in v4`);
      let e = [a, n];
      return {
        next() {
          let t = e.length <= 0;
          return { value: e.shift(), done: t };
        },
      };
    }),
    a
  );
}
function it(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  let n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
  return !0;
}
var at,
  ot = e(() => {
    (n(),
      S(),
      (at =
        o === void 0 || !o.navigator || /ServerSideRendering|^Deno\//.test(o.navigator.userAgent)
          ? a
          : d));
  }),
  st,
  ct,
  lt,
  ut,
  dt = e(() => {
    (n(),
      ot(),
      j(),
      S(),
      (st = () => ({
        totalItems: 0,
        filters: {},
        randomizationSeed: null,
        search: ``,
        sortOption: null,
        defaultSortOption: null,
        sortingUrlParameter: null,
        page: 0,
        itemsPerPage: 0,
        paginationType: null,
        paginationActive: !1,
        paginationButtonsCount: 0,
        searchFields: null,
      })),
      (ct = rt((e, t) => ({
        instances: {},
        getState: (e) => {
          let n = ut();
          return t().instances[n]?.[e] || st();
        },
        setState: (t, n) => {
          let r = ut();
          e((e) => ({
            instances: {
              ...e.instances,
              [r]: { ...e.instances[r], [t]: { ...e.getState(t), ...n } },
            },
          }));
        },
        setTotalItems: (e, n) => {
          t().setState(e, { totalItems: n });
        },
        setFilterValue: (e, n, r) => {
          let i = t().getState(e).filters;
          (console.log(`🟣 [FILTER VALUE CHANGED] "${n}" = "${r}" (was: "${i[n]?.value}")`),
            t().setState(e, { filters: { ...i, [n]: { ...i[n], value: r } } }));
        },
        setRandomizationSeed: (e, n) => {
          t().setState(e, { randomizationSeed: n });
        },
        setSearch: (e, n) => {
          t().setState(e, { search: n });
        },
        setSortOption: (e, n) => {
          t().setState(e, { sortOption: n });
        },
        setPage: (e, n) => {
          t().setState(e, { page: n });
        },
        setSearchFields: (e, n) => {
          t().setState(e, { searchFields: n });
        },
        setPaginationButtonsCount: (e, n) => {
          t().setState(e, { paginationButtonsCount: n });
        },
        setPaginationType: (e, n) => {
          t().setState(e, { paginationType: n });
        },
        deinitializePaginationButton: (e) => {
          t().setState(e, { paginationButtonsCount: t().getState(e).paginationButtonsCount - 1 });
        },
      }))),
      (lt = (e, n, r = null) => {
        let i = t(!1),
          [s, c] = x(),
          { currentRouteId: l } = me(),
          d = t(l),
          f = u(() => {
            let t = {},
              n = ct.getState();
            for (let r in n) {
              let i = n[r];
              typeof i == `function` &&
                (r.startsWith(`set`)
                  ? (t[r] = (...t) => {
                      o === void 0 ? i(e, ...t) : c(() => i(e, ...t));
                    })
                  : (t[r] = (...t) => i(e, ...t)));
            }
            return t;
          }, [e]);
        return (
          a(() => {
            if (d.current !== l) {
              if ((console.log(`🔴 [ROUTE CHANGED] ${d.current} → ${l}`), (d.current = l), r)) {
                let t = ct.getState(),
                  n = st();
                (r(n), t.setState(e, n));
              }
              i.current = !0;
            }
          }, [l, e, r]),
          a(() => {
            if (r && !i.current) {
              let t = ct.getState(),
                n = { ...t.getState(e) };
              (r(n), t.setState(e, n));
            }
            i.current = !0;
          }, []),
          ct((t) => {
            let r = ut();
            if (!t.instances[r]?.[e]) {
              let n = st();
              t.setState(e, n);
            }
            return n({ ...t.getState(e), ...f });
          }, it)
        );
      }),
      (ut = () => (o === void 0 ? `/` : o.location.pathname)));
  });
function ft(e) {
  let {
      superfieldsId: t,
      filterBy: n,
      options: r,
      referenceFieldName: i,
      referenceFieldType: a,
      isCommaSeparatedTextField: s,
      buttonGroupLayout: c,
      buttonGroupStyle: l,
      toggleMultiOptions: u,
      toggleTwoStateOptions: d,
      toggleTwoStateText: f,
      dropdownStyle: m,
      toggleSwitchStyle: h,
      checkboxStyle: g,
      layout: _,
      transition: y,
    } = e,
    b = pe.current() === pe.canvas,
    x = n == `field` ? e.fieldType : Y.Toggle,
    S = n === `field` ? (x == Y.MultipleOptions ? e.optionFieldNames.join(ze) : e.fieldName) : Re,
    ee = Mt(x),
    w = x === Y.MultipleOptions ? Y.Option : ee ? a : x,
    T =
      n === `field`
        ? w === Y.Toggle
          ? e.filterTypeToggle
          : e.filterTypeOption
        : e.filterTypeToggle,
    E = w === Y.Toggle ? u.allOption : r.allOption,
    te = (w === Y.Option || w === Y.Text) && r.optionMode === `manual`,
    D = n === `favourites` ? Re : ee ? `${S}${ze}${i}` : S,
    ne = e.urlParameter
      ? e.urlParameter.name ||
        (n === `field` ? (x == Y.MultipleOptions ? e.optionFieldNames.join(`,`) : S) : Dt)
      : null,
    O = e.collectionList?.[0],
    {
      query: k,
      propertyControlsById: re,
      propertyControlsByTitle: A,
      collections: ie,
      multiReferenceIdMap: oe,
      multiReferenceQueries: j,
    } = Ze(O),
    M = ie[0]?.alias,
    se = re[M] || {},
    ce = A[M] || {},
    le = [{ collection: M, name: `id`, type: `Identifier` }],
    N = null,
    P = null;
  if (!b && x !== Y.MultipleOptions)
    if (x === Y.Reference) {
      let e = et(S, i, k, A, ie);
      e && (le.push(e), (P = e.collection));
    } else if (x === Y.MultiReference) {
      let e = ce[S];
      if (e) {
        let t = e?.id,
          n = ie.find((e) => e.alias === t || e.alias === oe[t]);
        if (n) {
          P = n.alias;
          let e = k?.select || [];
          for (let t of e)
            if (t.type === `FunctionCall` && t.alias === P) {
              le.push(t);
              let e = re[t.alias];
              if (e)
                for (let n in e)
                  e[n].title == i &&
                    (N = [
                      { collection: t.alias, name: `id`, type: `Identifier` },
                      { collection: t.alias, name: n, type: `Identifier` },
                    ]);
              break;
            }
        }
      }
    } else {
      let e = et(S, null, k, A, ie);
      e && le.push(e);
    }
  let F = k ? ae({ ...k, select: le }) : [],
    I = [];
  if (Array.isArray(N)) {
    let e = N.find((e) => e && e.hasOwnProperty(`collection`));
    if (e) {
      let t = j[e.collection];
      t && (I = ae({ ...t, select: N, where: void 0, orderBy: void 0 }));
    }
  }
  let L = [];
  if (w === Y.Option || w === Y.Text)
    if (r.optionMode === `auto`) {
      if (Object.keys(se)?.length)
        if (x === Y.MultipleOptions) {
          let { optionFieldNames: t } = e,
            n = [];
          for (let e in se) {
            let r = se[e];
            if (t.includes(r.title)) {
              if (r.type === `enum`) n.push(r.optionTitles);
              else if (r.type === `string`) {
                let t = new Set();
                for (let n in F)
                  if (!isNaN(n)) {
                    let r = F[n][e];
                    r != `` && r != null && t.add(r);
                  }
                n.push(Array.from(t));
              }
            }
          }
          ((L = Array.from(new Set(n.flat()))),
            e.multipleOptionsNoneOption.length &&
              L.includes(e.multipleOptionsNoneOption) &&
              L.splice(L.indexOf(e.multipleOptionsNoneOption), 1));
        } else {
          let e = null,
            t = null;
          if (ee) {
            let n = A[P];
            (n && (e = n[i]), (t = e ? (x === Y.Reference ? `${P}.${e.id}` : e.id) : null));
          } else ((e = ce[S]), (t = e ? e.id : null));
          if (e) {
            if (e.type === `enum`) L = e.optionTitles;
            else if (e.type === `string`) {
              let e = x === Y.MultiReference ? I : F,
                n = new Set();
              for (let r in e)
                if (!isNaN(r)) {
                  let i = e[r][t];
                  i !== `` &&
                    i != null &&
                    (s && w === Y.Text
                      ? i
                          .split(`,`)
                          .map((e) => e.trim())
                          .filter((e) => e !== ``)
                          .forEach((e) => n.add(e))
                      : n.add(i));
                }
              L = Array.from(n);
            }
          }
        }
      else b && (T !== `dropdown` || !E) && (L = [r.placeholder]);
      r.optionOrder === `alphabetical` && (L = L.sort());
    } else r.optionMode === `manual` && (L = r.optionValues);
  Array.isArray(L) || (L = []);
  let ue = r.defaultValue.length && L.includes(r.defaultValue),
    de = null,
    R = null,
    z = null;
  if (w == Y.Toggle)
    if (T == `dropdown` || T == `buttonGroup`) {
      let e = [];
      (u.allOption && e.push(null),
        u.order == `yesNo`
          ? (u.yesOption && e.push(!0), u.noOption && e.push(!1))
          : (u.noOption && e.push(!1), u.yesOption && e.push(!0)),
        (z = e.includes(Ct[u.defaultValue]) ? Ct[u.defaultValue] : e[0]));
    } else ((de = Ct[d.offState]), (R = Ct[d.onState]), (z = d.defaultValue == `off` ? de : R));
  else z = ue ? r.defaultValue : !r.allOption && T == `dropdown` ? (L[0] ?? null) : null;
  let B = () => {
      let e = z;
      if (ne && !b) {
        let t = new URLSearchParams(o.location.search).get(ne);
        if (t)
          if (w === Y.Toggle) {
            let n = t.toLowerCase();
            Ot.includes(n) ? (e = !0) : kt.includes(n) && (e = !1);
          } else
            t.includes(`_&%#|_`)
              ? t.split(`_&%#|_`).every((e) => L.includes(e)) && (e = t)
              : L.includes(t) && (e = t);
      }
      return e;
    },
    fe = B(),
    me = {
      fieldName: S,
      referenceFieldName: ee ? i : null,
      referenceFieldType: ee ? a : null,
      value: fe,
      defaultValue: z,
      multiSelect: T == `buttonGroup` && e.multiSelect,
      fieldType: x,
      noneOption: x == Y.MultipleOptions ? e.multipleOptionsNoneOption : void 0,
      condition: Tt.includes(w) ? (s && w === Y.Text ? Be.Contains : e.textCondition) : Be.Equals,
      urlParameter: ne,
    },
    [he, ge] = lt(
      t,
      (e) => [e.filters, e.setFilterValue],
      (e) => {
        let t = e.filters[D],
          n = B();
        (!t || (ne && n !== z)) && (e.filters[D] = me);
      }
    ),
    _e = he[D] ? he : { [D]: me },
    V = b ? z : _e[D]?.value,
    H = (e) => {
      ge(D, e);
    },
    U = [];
  if (w === Y.Option || w === Y.Text)
    for (let e = 0; e < L.length; e++) {
      let t = L[e];
      te && ht(t) ? U.push(Et) : t && U.push({ value: t, text: t });
    }
  else
    w == Y.Toggle &&
      (u.order == `yesNo`
        ? (u.yesOption && U.push({ value: `on`, text: u.yesText }),
          u.noOption && U.push({ value: `off`, text: u.noText }))
        : (u.noOption && U.push({ value: `off`, text: u.noText }),
          u.yesOption && U.push({ value: `on`, text: u.yesText })));
  let W = [];
  switch (T) {
    case `dropdown`:
      let t = m.arrow,
        n = m.paddingIsMixed ? m.paddingTop : m.padding,
        i = m.paddingIsMixed ? m.paddingLeft : m.padding,
        a = m.paddingIsMixed ? m.paddingBottom : m.padding,
        o = (m.paddingIsMixed ? m.paddingRight : m.padding) + (t ? t.size + t.gap : 0),
        s = m.radiusIsMixed
          ? `${m.radiusTopLeft}px ${m.radiusTopRight}px ${m.radiusBottomRight}px ${m.radiusBottomLeft}px`
          : `${m.radius}px`;
      (W.push(
        v(`select`, {
          className: `superfields-dropdown`,
          value:
            w == Y.Toggle ? { true: `on`, false: `off`, null: xt }[String(V)] : V || (E ? xt : z),
          onChange: (e) => {
            w == Y.Toggle ? H(Ct[e.target.value]) : H(e.target.value == xt ? null : e.target.value);
          },
          style: {
            position: `relative`,
            appearance: `none`,
            height: `100%`,
            cursor: `pointer`,
            ...Pe(m.fill),
            color: m.fontColor,
            padding: `${n}px ${o}px ${a}px ${i}px`,
            borderRadius: s,
            border: `none`,
            boxShadow: m.shadows,
            backdropFilter: m.bgBlur ? `blur(${m.bgBlur}px)` : void 0,
            ...e.font,
            ...e.style,
          },
          children: [
            E && p(`option`, { value: xt, children: w == Y.Toggle ? u.allText : r.allText }),
            U.map((e, t) =>
              e === Et ? p(`hr`, {}) : p(`option`, { value: e.value, children: e.text }, t)
            ),
          ],
        }),
        m.border && p(Me, { ...m.border, radius: s })
      ),
        t &&
          W.push(
            p(`svg`, {
              xmlns: `http://www.w3.org/2000/svg`,
              width: t.size,
              height: t.size,
              viewBox: `0 0 18 18`,
              fill: `none`,
              strokeWidth: t.stroke,
              stroke: t.color ?? m.fontColor,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              style: {
                display: `block`,
                position: `absolute`,
                right: m.paddingIsMixed ? m.paddingRight : m.padding,
                top: `calc(50% - ${t.size / 2}px)`,
                pointerEvents: `none`,
              },
              children: p(`path`, { d: `M2 5.5L9 12.5L16 5.5` }),
            })
          ));
      break;
    case `buttonGroup`:
      W.push(
        v(`div`, {
          style: {
            display: `flex`,
            flexDirection: c.direction == `horizontal` ? `row` : `column`,
            flexWrap: c.wrap ? `wrap` : `nowrap`,
            justifyContent: c.distribute,
            columnGap: c.gapH,
            rowGap: c.gapV,
            textAlign: e.font?.textAlign || `center`,
            ...e.style,
          },
          children: [
            E &&
              p(gt, {
                selected: V == null,
                onClick: () => H(null),
                text: r.allText,
                direction: c.direction,
                width: c.width,
                transition: y,
                ...l,
              }),
            U.map((t, n) =>
              t === Et
                ? p(_t, { ...e.dividerStyle, layout: c })
                : p(
                    gt,
                    {
                      selected:
                        w == Y.Toggle
                          ? V == (t.value == `on`)
                          : e.multiSelect
                            ? V
                              ? V.split(ze).includes(t.value)
                              : !1
                            : V == t.value,
                      onClick: () => {
                        if (w == Y.Toggle) H(t.value == `on`);
                        else if (e.multiSelect)
                          if (!V) H(t.value);
                          else {
                            let e = V ? V.split(ze) : [];
                            V == t.value
                              ? (r.allOption || !ue) && H(null)
                              : e.includes(t.value)
                                ? H(e.filter((e) => e != t.value).join(ze))
                                : H(`${V}${ze}${t.value}`);
                          }
                        else V == t.value && (!ue || r.allOption) ? H(null) : H(t.value);
                      },
                      text: t.text,
                      direction: c.direction,
                      width: c.width,
                      transition: y,
                      ...l,
                    },
                    n
                  )
            ),
          ],
        })
      );
      break;
    case `toggleSwitch`:
      let { height: d, padding: b, border: x, switchBorder: S } = h;
      return v(`div`, {
        onClick: () => H(V == R ? de : R),
        style: {
          display: `flex`,
          flexDirection: f?.location == `left` ? `row-reverse` : `row`,
          gap: f?.gap,
          alignItems: `center`,
          justifyContent: St[_],
          cursor: `pointer`,
          ...e.style,
        },
        children: [
          v(C.div, {
            animate: { ...Pe(h.fill, V == R) },
            style: {
              position: `relative`,
              height: d,
              width: d * 2 - b * 2,
              padding: b,
              borderRadius: h.radius,
            },
            initial: !1,
            transition: y,
            children: [
              x &&
                p(C.div, {
                  animate: { borderColor: V == R ? x.colorOn : x.colorOff },
                  style: {
                    position: `absolute`,
                    inset: 0,
                    boxSizing: `border-box`,
                    borderRadius: h.radius,
                    borderWidth: x.width,
                    borderStyle: x.style,
                  },
                  initial: !1,
                  transition: y,
                }),
              p(C.div, {
                animate: { translateX: V == R ? `100%` : `0%`, ...Pe(h.switchFill, V == R) },
                style: {
                  position: `absolute`,
                  height: d - b * 2,
                  aspectRatio: 1,
                  left: b,
                  borderRadius: h.radius - b,
                  boxShadow: h.shadows,
                  boxSizing: `border-box`,
                },
                initial: !1,
                transition: y,
                children:
                  S &&
                  p(C.div, {
                    animate: { borderColor: V == R ? S.colorOn : S.colorOff },
                    style: {
                      position: `absolute`,
                      inset: 0,
                      boxSizing: `border-box`,
                      borderRadius: h.radius - b,
                      borderWidth: S.width,
                      borderStyle: S.style,
                    },
                    initial: !1,
                    transition: y,
                  }),
              }),
            ],
          }),
          f &&
            p(`p`, {
              style: {
                color: f.fontColor,
                margin: 0,
                userSelect: `none`,
                flex: _ == `fill` ? 1 : void 0,
                ...e.font,
              },
              children: V == R ? f.onText : f.offText,
            }),
        ],
      });
    case `checkbox`:
      W.push(
        v(`div`, {
          onClick: () => H(V == R ? de : R),
          style: {
            display: `flex`,
            flexDirection: f?.location == `left` ? `row-reverse` : `row`,
            gap: f?.gap,
            alignItems: `center`,
            justifyContent: St[_],
            cursor: `pointer`,
            ...e.style,
          },
          children: [
            p(C.div, {
              animate: {
                backgroundColor:
                  V == R ? (g.fillOn ?? `transparent`) : (g.fillOff ?? `transparent`),
                color: g.icon?.colorOn,
              },
              style: {
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                width: g.size,
                height: g.size,
                borderRadius: g.radius,
                position: `relative`,
              },
              initial: !1,
              transition: y,
              children:
                g.icon &&
                p(C.svg, {
                  xmlns: `http://www.w3.org/2000/svg`,
                  width: g.icon.size,
                  height: g.icon.size,
                  viewBox: `0 0 24 24`,
                  strokeWidth: g.icon.lineWidth * (24 / g.icon.size),
                  stroke: `currentColor`,
                  fill: `none`,
                  strokeLinecap: g.icon.rounded ? `round` : `butt`,
                  strokeLinejoin: g.icon.rounded ? `round` : `miter`,
                  animate: { opacity: +(V == R) },
                  style: { display: `block` },
                  initial: !1,
                  transition: y,
                  children: p(`path`, { d: `M5 12l5 5l10 -10` }),
                }),
            }),
            f &&
              p(`p`, {
                style: {
                  color: f.fontColor,
                  margin: 0,
                  userSelect: `none`,
                  flex: _ == `fill` ? 1 : void 0,
                  ...e.font,
                },
                children: V == R ? f.onText : f.offText,
              }),
          ],
        })
      );
      break;
  }
  return p(`div`, {
    "data-superfields": !0,
    style: { position: `relative`, userSelect: `none`, ...e.font, ...e.style },
    children: W,
  });
}
function Z(e) {
  return e.filterBy == `field`
    ? (Mt(e.fieldType) ? e.referenceFieldType : e.fieldType) == Y.Toggle
      ? e.filterTypeToggle
      : e.filterTypeOption
    : e.filterTypeToggle;
}
function pt(e) {
  if (e.filterBy == `field`) {
    let t = Mt(e.fieldType) ? e.referenceFieldType : e.fieldType;
    return t === Y.MultipleOptions ? Y.Option : t;
  } else return Y.Toggle;
}
function mt(e) {
  return e.filterBy == `field`
    ? Mt(e.fieldType)
      ? e.referenceFieldType == Y.Option || e.referenceFieldType == Y.Text
      : e.fieldType == Y.Option || e.fieldType == Y.Text || e.fieldType == Y.MultipleOptions
    : !1;
}
function ht(e) {
  return e ? wt.test(e) && e.length >= 3 : !1;
}
function gt(e) {
  let { selected: t, border: n } = e;
  return v(C.div, {
    onClick: e.onClick,
    animate: {
      ...Pe(e.fill, t),
      color: t ? e.selectedFontColor : e.defaultFontColor,
      boxShadow: t && e.shadowsSelected ? e.shadowsSelected : e.shadows,
    },
    style: {
      position: `relative`,
      width: e.direction == `vertical` && e.width == `fill` ? `100%` : `max-content`,
      flex: e.width == `fill` ? 1 : void 0,
      cursor: `pointer`,
      padding: e.paddingIsMixed
        ? `${e.paddingTop}px ${e.paddingRight}px ${e.paddingBottom}px ${e.paddingLeft}px`
        : `${e.padding}px`,
      borderRadius: e.radiusIsMixed
        ? `${e.radiusTopLeft}px ${e.radiusTopRight}px ${e.radiusBottomRight}px ${e.radiusBottomLeft}px`
        : `${e.radius}px`,
      backdropFilter: e.bgBlur ? `blur(${e.bgBlur}px)` : void 0,
    },
    initial: !1,
    transition: e.transition,
    children: [
      e.text,
      n && p(Me, { ...n, color: t ? n.selectedColor : n.defaultColor, transition: e.transition }),
    ],
  });
}
function _t({ color: e, width: t, rounded: n, marginH: r, marginV: i, layout: a }) {
  let o = a.direction == `vertical`;
  return p(`div`, {
    style: {
      backgroundColor: e,
      width: o ? void 0 : t,
      height: o ? t : void 0,
      margin: `${i}px ${r}px`,
      borderRadius: n ? 1e4 : void 0,
      alignSelf: `stretch`,
    },
  });
}
var vt,
  Q,
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
  kt,
  At,
  jt,
  Mt,
  Nt = e(() => {
    (n(),
      y(),
      j(),
      E(),
      Ue(),
      tt(),
      dt(),
      (function (e) {
        ((e.Field = `field`), (e.Favourites = `favourites`));
      })((vt ||= {})),
      (function (e) {
        ((e.Dropdown = `dropdown`),
          (e.ButtonGroup = `buttonGroup`),
          (e.ToggleSwitch = `toggleSwitch`),
          (e.Checkbox = `checkbox`));
      })((Q ||= {})),
      (function (e) {
        ((e.Auto = `auto`), (e.Manual = `manual`));
      })((yt ||= {})),
      (function (e) {
        ((e.Default = `default`), (e.Alphabetical = `alphabetical`));
      })((bt ||= {})),
      (xt = `[{(ALL)}]`),
      (St = { fill: `center`, left: `start`, center: `center`, right: `end` }),
      (Ct = { all: null, [xt]: null, off: !1, on: !0 }),
      (wt = /^-+$/),
      (Tt = [Y.Text, Y.Option, Y.MultipleOptions]),
      (Et = `divider`),
      (Dt = `favorites`),
      (Ot = [`true`, `yes`, `on`]),
      (kt = [`false`, `no`, `off`]),
      (At = O(
        ft,
        [`select.superfields-dropdown:focus-visible { outline: none; }`],
        `superfields-filter`
      )),
      (jt = {
        padding: {
          type: B.FusedNumber,
          defaultValue: 16,
          toggleKey: `paddingIsMixed`,
          toggleTitles: [`All`, `Individual`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        radius: {
          type: B.FusedNumber,
          defaultValue: 8,
          toggleKey: `radiusIsMixed`,
          toggleTitles: [`All`, `Individual`],
          valueKeys: [`radiusTopLeft`, `radiusTopRight`, `radiusBottomRight`, `radiusBottomLeft`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      L(At, {
        ...Ae(),
        filterBy: {
          type: B.Enum,
          defaultValue: `field`,
          options: [`field`, `favourites`],
          optionTitles: [`CMS Field`, `Favourites`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
        fieldType: {
          type: B.Enum,
          defaultValue: Y.Option,
          options: [Y.Option, Y.Toggle, Y.Text, Y.Reference, Y.MultiReference, Y.MultipleOptions],
          optionTitles: [
            `Option`,
            `Toggle`,
            `Text`,
            `Reference`,
            `Multi-Reference`,
            `Multiple Options`,
          ],
          hidden: (e) => e.filterBy != `field`,
        },
        fieldName: {
          type: B.String,
          defaultValue: ``,
          placeholder: `CMS Field Name`,
          hidden: (e) => e.filterBy !== `field` || e.fieldType === Y.MultipleOptions,
        },
        referenceFieldType: {
          type: B.Enum,
          defaultValue: Y.Text,
          options: [Y.Option, Y.Toggle, Y.Text],
          optionTitles: [`Option`, `Toggle`, `Text`],
          hidden: (e) => e.filterBy !== `field` || !Mt(e.fieldType),
        },
        referenceFieldName: {
          type: B.String,
          defaultValue: `Title`,
          placeholder: `Reference CMS Field Name`,
          hidden: (e) => e.filterBy !== `field` || !Mt(e.fieldType),
        },
        optionFieldNames: {
          type: B.Array,
          title: `Field Names`,
          control: { type: B.String, defaultValue: ``, placeholder: `CMS Field Name` },
          hidden: (e) => e.filterBy !== `field` || e.fieldType !== Y.MultipleOptions,
        },
        filterTypeOption: {
          type: B.Enum,
          defaultValue: `dropdown`,
          options: [`dropdown`, `buttonGroup`],
          optionTitles: [`Dropdown`, `Buttons`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          title: `Type`,
          hidden: (e) => !mt(e),
        },
        filterTypeToggle: {
          type: B.Enum,
          defaultValue: `toggleSwitch`,
          options: [`toggleSwitch`, `checkbox`, `dropdown`, `buttonGroup`],
          optionTitles: [`Toggle Switch`, `Checkbox`, `Dropdown`, `Buttons`],
          title: `Type`,
          hidden: (e) => pt(e) != Y.Toggle,
        },
        options: {
          type: B.Object,
          controls: {
            defaultValue: { type: B.String, defaultValue: ``, placeholder: `Default Value` },
            optionMode: {
              type: B.Enum,
              defaultValue: `auto`,
              options: [`manual`, `auto`],
              optionTitles: [`Manual`, `Auto`],
              displaySegmentedControl: !0,
              title: `Options`,
            },
            optionValues: {
              type: B.Array,
              title: ` `,
              control: { type: B.String, defaultValue: `` },
              hidden: (e) => e.optionMode !== `manual`,
            },
            optionOrder: {
              type: B.Enum,
              defaultValue: `default`,
              options: [`default`, `alphabetical`],
              optionTitles: [`Default`, `Alphabetical`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              title: `Order`,
              description: `Connect the collection list to enable auto options.`,
              hidden: (e) => e.optionMode !== `auto`,
            },
            placeholder: {
              type: B.String,
              defaultValue: `[Preview project]`,
              hidden: (e) => e.optionMode !== `auto`,
            },
            allOption: {
              type: B.Boolean,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            allText: {
              type: B.String,
              defaultValue: `All`,
              title: ` `,
              hidden: (e) => !e.allOption,
            },
          },
          hidden: (e) => !mt(e),
        },
        textCondition: {
          type: B.Enum,
          defaultValue: Be.Equals,
          options: [Be.Equals, Be.Contains],
          optionTitles: [`Equals`, `Contains`],
          displaySegmentedControl: !0,
          title: `Condition`,
          hidden: (e) => !Tt.includes(pt(e)) || e.options.optionMode !== `manual`,
        },
        multipleOptionsNoneOption: {
          type: B.String,
          defaultValue: ``,
          placeholder: `None Option Name`,
          title: `None Option`,
          hidden: (e) => e.fieldType !== Y.MultipleOptions,
        },
        collectionList: {
          type: B.ComponentInstance,
          hidden: (e) => !mt(e) || e.options.optionMode != `auto`,
        },
        toggleMultiOptions: {
          type: B.Object,
          title: `Options`,
          controls: {
            defaultValue: {
              type: B.Enum,
              defaultValue: null,
              options: [`all`, `on`, `off`],
              optionTitles: [`All`, `Yes`, `No`],
              displaySegmentedControl: !0,
            },
            allOption: {
              type: B.Boolean,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            allText: {
              type: B.String,
              defaultValue: `All`,
              title: ` `,
              hidden: (e) => !e.allOption,
            },
            yesOption: {
              type: B.Boolean,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            yesText: {
              type: B.String,
              defaultValue: `On`,
              title: ` `,
              hidden: (e) => !e.yesOption,
            },
            noOption: {
              type: B.Boolean,
              defaultValue: !1,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            noText: { type: B.String, defaultValue: `Off`, title: ` `, hidden: (e) => !e.noOption },
            order: {
              type: B.Enum,
              defaultValue: `yesNo`,
              options: [`yesNo`, `noYes`],
              optionTitles: [`Yes/No`, `No/Yes`],
              displaySegmentedControl: !0,
              hidden: (e) => !e.yesOption || !e.noOption,
            },
          },
          hidden: (e) => pt(e) != Y.Toggle || (Z(e) != `dropdown` && Z(e) != `buttonGroup`),
        },
        toggleTwoStateOptions: {
          type: B.Object,
          title: `Options`,
          icon: `boolean`,
          controls: {
            defaultValue: {
              type: B.Enum,
              defaultValue: `off`,
              options: [`off`, `on`],
              optionTitles: [`Off`, `On`],
              displaySegmentedControl: !0,
            },
            offState: {
              type: B.Enum,
              defaultValue: `all`,
              options: [`all`, `on`, `off`],
              optionTitles: [`All Items`, `On/True Only`, `Off/False Only`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            onState: {
              type: B.Enum,
              defaultValue: `on`,
              options: [`all`, `on`, `off`],
              optionTitles: [`All Items`, `On/True Only`, `Off/False Only`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
          },
          hidden: (e) => pt(e) != Y.Toggle || (Z(e) != `toggleSwitch` && Z(e) != `checkbox`),
        },
        toggleTwoStateText: {
          type: B.Object,
          optional: !0,
          defaultValue: { offText: `Off`, onText: `On`, location: `right`, gap: 10 },
          title: `Text`,
          controls: {
            offText: { type: B.String, defaultValue: `Off` },
            onText: { type: B.String, defaultValue: `On` },
            fontColor: { type: B.Color, defaultValue: `#000` },
            location: {
              type: B.Enum,
              defaultValue: `right`,
              options: [`left`, `right`],
              optionTitles: [`Left`, `Right`],
              displaySegmentedControl: !0,
            },
            gap: { type: B.Number, defaultValue: 10, min: 0, step: 1 },
          },
          hidden: (e) => pt(e) != Y.Toggle || (Z(e) != `toggleSwitch` && Z(e) != `checkbox`),
        },
        multiSelect: {
          type: B.Boolean,
          defaultValue: !1,
          title: `Multi-Select`,
          hidden: (e) => Z(e) != `buttonGroup` || pt(e) == Y.Toggle,
        },
        font: {
          type: B.Font,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 14, lineHeight: 1.4 },
        },
        buttonGroupStyle: {
          type: B.Object,
          title: `Buttons`,
          buttonTitle: `Styles`,
          controls: {
            fill: Ie({
              colorOff: `#F0F0F0`,
              colorAOff: `#EDEDED`,
              colorBOff: `#CCC`,
              colorOn: `#0075FF`,
              colorAOn: `#70B3FF`,
              colorBOn: `#0075FF`,
            }),
            selectedFontColor: { type: B.Color, defaultValue: `#FFF`, title: `Font Color On` },
            defaultFontColor: { type: B.Color, defaultValue: `#000`, title: `Font Color Off` },
            ...jt,
            border: {
              type: B.Object,
              optional: !0,
              controls: {
                selectedColor: { type: B.Color, defaultValue: `#0051ad`, title: `Color On` },
                defaultColor: { type: B.Color, defaultValue: `#222`, title: `Color Off` },
                width: {
                  type: B.FusedNumber,
                  defaultValue: 1,
                  toggleKey: `widthIsMixed`,
                  toggleTitles: [`All`, `Individual`],
                  valueKeys: [`widthTop`, `widthRight`, `widthBottom`, `widthLeft`],
                  valueLabels: [`T`, `R`, `B`, `L`],
                  min: 0,
                },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            shadowsSelected: { type: B.BoxShadow, title: `Shadow On` },
            shadows: { type: B.BoxShadow, title: `Shadow Off` },
            bgBlur: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
              title: `BG Blur`,
            },
          },
          hidden: (e) => Z(e) != `buttonGroup`,
        },
        buttonGroupLayout: {
          type: B.Object,
          title: `Layout`,
          buttonTitle: `Stack`,
          controls: {
            direction: {
              type: B.Enum,
              defaultValue: `horizontal`,
              options: [`horizontal`, `vertical`],
              displaySegmentedControl: !0,
            },
            distribute: {
              type: B.Enum,
              defaultValue: `center`,
              options: [
                `flex-start`,
                `center`,
                `flex-end`,
                `space-between`,
                `space-around`,
                `space-evenly`,
              ],
              optionTitles: [
                `Start`,
                `Center`,
                `End`,
                `Space Between`,
                `Space Around`,
                `Space Evenly`,
              ],
            },
            wrap: { type: B.Boolean, defaultValue: !1 },
            gapH: { type: B.Number, defaultValue: 8, min: 0, step: 1 },
            gapV: { type: B.Number, defaultValue: 8, min: 0, step: 1 },
            width: {
              type: B.Enum,
              defaultValue: `fit`,
              options: [`fit`, `fill`],
              optionTitles: [`Fit`, `Fill`],
              displaySegmentedControl: !0,
            },
          },
          hidden: (e) => Z(e) != `buttonGroup`,
        },
        dividerStyle: {
          type: B.Object,
          title: `Dividers`,
          controls: {
            color: { type: B.Color, defaultValue: `rgba(0, 0, 0, 0.25)` },
            width: { type: B.Number, defaultValue: 1, min: 0, displayStepper: !0 },
            rounded: { type: B.Boolean, defaultValue: !1 },
            marginH: { type: B.Number, defaultValue: 0, min: 0, step: 1, displayStepper: !0 },
            marginV: {
              type: B.Number,
              defaultValue: 0,
              min: 0,
              step: 1,
              displayStepper: !0,
              description: `Add a divider by using *---* as an option name`,
            },
          },
          hidden: (e) =>
            Z(e) != `buttonGroup` ||
            (pt(e) != Y.Option && pt(e) != Y.Text) ||
            e.options.optionMode !== `manual`,
        },
        dropdownStyle: {
          type: B.Object,
          title: `Dropdown`,
          buttonTitle: `Styles`,
          controls: {
            fill: Fe({ color: `#F0F0F0` }),
            fontColor: { type: B.Color, defaultValue: `#000` },
            ...jt,
            arrow: {
              type: B.Object,
              defaultValue: { size: 12, gap: 10 },
              optional: !0,
              buttonTitle: `Style`,
              controls: {
                color: { type: B.Color, optional: !0 },
                size: { type: B.Number, defaultValue: 12, min: 1, step: 1 },
                gap: { type: B.Number, defaultValue: 10, min: 0, step: 1 },
                stroke: {
                  type: B.Number,
                  defaultValue: 2,
                  min: 0.1,
                  step: 0.1,
                  displayStepper: !0,
                },
              },
            },
            border: X(),
            shadows: { type: B.BoxShadow },
            bgBlur: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
              title: `BG Blur`,
            },
          },
          hidden: (e) => Z(e) != `dropdown`,
        },
        toggleSwitchStyle: {
          type: B.Object,
          title: `Toggle Switch`,
          buttonTitle: `Styles`,
          icon: `boolean`,
          controls: {
            fill: Ie({
              colorOn: `#0075FF`,
              colorAOn: `#70B3FF`,
              colorBOn: `#0075FF`,
              colorOff: `#EDEDED`,
              colorAOff: `#EDEDED`,
              colorBOff: `#CCC`,
            }),
            border: {
              type: B.Object,
              optional: !0,
              controls: {
                colorOn: { type: B.Color, defaultValue: `#222` },
                colorOff: { type: B.Color, defaultValue: `#222` },
                width: { type: B.Number, defaultValue: 1, min: 0, step: 1 },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            switchFill: Ie({
              colorOn: `#FFF`,
              colorAOn: `#FFF`,
              colorBOn: `#D6D6D6`,
              colorOff: `#FFF`,
              colorAOff: `#FFF`,
              colorBOff: `#D6D6D6`,
            }),
            switchBorder: {
              type: B.Object,
              optional: !0,
              controls: {
                colorOn: { type: B.Color, defaultValue: `#222` },
                colorOff: { type: B.Color, defaultValue: `#222` },
                width: { type: B.Number, defaultValue: 1, min: 0, step: 1 },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            shadows: { type: B.BoxShadow, defaultValue: `0px 2px 4px 0px rgba(0,0,0,0.2)` },
            height: { type: B.Number, defaultValue: 32, min: 1, step: 1 },
            padding: { type: B.Number, defaultValue: 4, min: 0, step: 1, displayStepper: !0 },
            radius: { type: B.Number, defaultValue: 16, min: 0 },
          },
          hidden: (e) => Z(e) != `toggleSwitch`,
        },
        checkboxStyle: {
          type: B.Object,
          title: `Checkbox`,
          buttonTitle: `Styles`,
          controls: {
            fillOn: { type: B.Color, defaultValue: `#0075FF` },
            fillOff: { type: B.Color, defaultValue: `#EDEDED` },
            size: { type: B.Number, defaultValue: 24, min: 1, step: 1 },
            radius: { type: B.Number, defaultValue: 6, min: 0 },
            icon: {
              type: B.Object,
              optional: !0,
              defaultValue: { size: 16, color: `#FFF`, rounded: !0 },
              buttonTitle: `Options`,
              controls: {
                size: { type: B.Number, defaultValue: 16, min: 1, step: 1 },
                lineWidth: { type: B.Number, defaultValue: 2, min: 1, step: 0.1 },
                colorOn: { type: B.Color, defaultValue: `#FFF`, title: `Color` },
                rounded: { type: B.Boolean, defaultValue: !0 },
              },
            },
          },
          hidden: (e) => Z(e) != `checkbox`,
        },
        transition: {
          type: B.Transition,
          defaultValue: { type: `spring`, duration: 0.2, bounce: 0 },
          hidden: (e) => Z(e) == `dropdown`,
        },
      }),
      (Mt = (e) => e === Y.Reference || e === Y.MultiReference));
  });
function Pt(e) {
  let { setup: t, options: n } = e,
    r = e.mode === `advanced`,
    i = r ? e.settings : {},
    a = Rt(e),
    o = null,
    s = null;
  switch (a) {
    case Q.Dropdown:
      ((o = e.dropdownStyle.font), (s = e.dropdownStyle.transition));
      break;
    case Q.ButtonGroup:
      ((o = e.buttonGroupStyle.font), (s = e.buttonGroupStyle.transition));
      break;
    case Q.ToggleSwitch:
      ((o = e.toggleTwoStateText.font), (s = e.toggleSwitchStyle.transition));
      break;
    case Q.Checkbox:
      ((o = e.toggleTwoStateText.font), (s = e.checkboxStyle.transition));
  }
  let c = r && i.manualOptions,
    l = {
      defaultValue: n.defaultValueEnabled ? n.defaultValue : ``,
      optionMode: c ? yt.Manual : yt.Auto,
      optionValues: c ? i.optionValues : [],
      optionOrder: n.optionOrder,
      placeholder: n.placeholder,
      allOption: n.allOption,
      allText: n.allText,
    };
  return p(At, {
    filterBy: t.filterBy,
    fieldName: t.fieldName,
    fieldType: t.fieldType,
    referenceFieldName: t.referenceFieldName,
    referenceFieldType: t.referenceFieldType,
    isCommaSeparatedTextField: t.isCommaSeparatedTextField,
    filterTypeOption: e.filterTypeOption,
    filterTypeToggle: e.filterTypeToggle,
    options: l,
    textCondition: n.textCondition,
    collectionList: e.collectionList,
    toggleMultiOptions: e.toggleMultiOptions,
    toggleTwoStateOptions: e.toggleTwoStateOptions,
    toggleTwoStateText: e.toggleTwoStateText,
    multiSelect: e.multiSelect,
    font: o,
    buttonGroupStyle: {
      ...e.buttonGroupStyle,
      shadowsSelected: e.buttonGroupStyle.shadows?.shadowOn || ``,
      shadows: e.buttonGroupStyle.shadows?.shadowOff || ``,
      border: e.buttonGroupStyle.border
        ? { ...e.buttonGroupStyle.border, ...Ge(e.buttonGroupStyle.border.width, `width`) }
        : void 0,
      ...Ge(e.buttonGroupStyle.padding),
      ...Ke(e.buttonGroupStyle.radius),
    },
    buttonGroupLayout: e.buttonGroupStyle.layout,
    dividerStyle: e.dividerStyle,
    dropdownStyle: {
      ...e.dropdownStyle,
      border: e.dropdownStyle.border
        ? { ...e.dropdownStyle.border, ...Ge(e.dropdownStyle.border.width, `width`) }
        : void 0,
      ...Ge(e.dropdownStyle.padding),
      ...Ke(e.dropdownStyle.radius),
    },
    toggleSwitchStyle: e.toggleSwitchStyle,
    checkboxStyle: { ...e.checkboxStyle, ...Ke(e.checkboxStyle.radius) },
    transition: s,
    style: e.style,
  });
}
function Ft(e) {
  return e === Y.Reference || e === Y.MultiReference;
}
function It(e) {
  let t = e.hasOwnProperty(`filterBy`) ? e : e.setup;
  return t && t.filterBy === vt.Field
    ? Ft(t.fieldType)
      ? t.referenceFieldType === Y.Option || t.referenceFieldType === Y.Text
      : t.fieldType == Y.Option || t.fieldType == Y.Text
    : !1;
}
function Lt(e) {
  if (e.setup.filterBy == vt.Field) {
    let t = Ft(e.setup.fieldType) ? e.setup.referenceFieldType : e.setup.fieldType;
    return t === Y.MultipleOptions ? Y.Option : t;
  } else return Y.Toggle;
}
function Rt(e) {
  return e.setup.filterBy == vt.Field
    ? (Ft(e.setup.fieldType) ? e.setup.referenceFieldType : e.setup.fieldType) == Y.Toggle
      ? e.filterTypeToggle
      : e.filterTypeOption
    : e.filterTypeToggle;
}
var zt,
  Bt,
  Vt = e(() => {
    (y(),
      j(),
      Xe(),
      Nt(),
      Ue(),
      (zt = {
        transition: {
          type: B.Transition,
          defaultValue: { type: `spring`, duration: 0.2, bounce: 0 },
        },
      }),
      (Bt = {
        font: {
          type: B.Font,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 14, lineHeight: 1.4 },
        },
      }),
      We(Pt, {
        setup: {
          type: B.Object,
          description: `Configure your CMS filter.`,
          controls: {
            filterBy: {
              type: B.Enum,
              defaultValue: vt.Field,
              options: [vt.Field, vt.Favourites],
              optionTitles: [`CMS Field`, `Favourites`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            fieldName: {
              type: B.String,
              defaultValue: ``,
              placeholder: `CMS Field Name`,
              description: `*✋ IMPORTANT:* Enter the EXACT name of the field you wish to filter by.`,
              hidden: (e) => e.filterBy !== vt.Field,
            },
            fieldType: {
              type: B.Enum,
              defaultValue: Y.Option,
              options: [Y.Option, Y.Text, Y.Toggle, Y.Reference, Y.MultiReference],
              optionTitles: [`Option`, `Text`, `Toggle`, `Reference`, `Multi-Reference`],
              description: `The type of CMS field that is being filtered.`,
              hidden: (e) => e.filterBy != vt.Field,
            },
            isCommaSeparatedTextField: {
              type: B.Boolean,
              defaultValue: !1,
              title: `Commas`,
              description: `Split comma separated values into multiple options.`,
              hidden: (e) => e.fieldType !== Y.Text,
            },
            referenceFieldName: {
              type: B.String,
              defaultValue: `Title`,
              placeholder: `Reference CMS Field Name`,
              description: `The exact name of the field on the referenced collection you wish to filter by.`,
              hidden: (e) => e.filterBy !== vt.Field || !Ft(e.fieldType),
            },
            referenceFieldType: {
              type: B.Enum,
              defaultValue: Y.Text,
              options: [Y.Option, Y.Toggle, Y.Text],
              optionTitles: [`Option`, `Toggle`, `Text`],
              description: `The type of CMS field on the referenced collection that is being filtered.`,
              hidden: (e) => e.filterBy !== vt.Field || !Ft(e.fieldType),
            },
          },
        },
        collectionList: {
          type: B.ComponentInstance,
          hidden: (e) => !It(e) || (e.mode === `advanced` && e.settings.manualOptions),
          description: `*CMS Collection:* Connect this to the SAME collection list. This must be outside of a page to be connected.`,
        },
        filterTypeOption: {
          type: B.Enum,
          defaultValue: Q.Dropdown,
          options: [Q.Dropdown, Q.ButtonGroup],
          optionTitles: [`Dropdown`, `Buttons`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          title: `Type`,
          hidden: (e) => !It(e),
        },
        filterTypeToggle: {
          type: B.Enum,
          defaultValue: Q.ToggleSwitch,
          options: [Q.ToggleSwitch, Q.Checkbox, Q.Dropdown, Q.ButtonGroup],
          optionTitles: [`Toggle Switch`, `Checkbox`, `Dropdown`, `Buttons`],
          title: `Type`,
          hidden: (e) => Lt(e) !== Y.Toggle,
        },
        buttonGroupStyle: {
          type: B.Object,
          title: `Styling 🎨`,
          description: `Update the buttons filter styling.`,
          buttonTitle: `Buttons`,
          hidden: (e) => !It(e) || e.filterTypeOption !== Q.ButtonGroup,
          controls: {
            layout: {
              type: B.Object,
              buttonTitle: `Stack`,
              controls: {
                direction: {
                  type: B.Enum,
                  defaultValue: `horizontal`,
                  options: [`horizontal`, `vertical`],
                  displaySegmentedControl: !0,
                },
                distribute: {
                  type: B.Enum,
                  defaultValue: `center`,
                  options: [
                    `flex-start`,
                    `center`,
                    `flex-end`,
                    `space-between`,
                    `space-around`,
                    `space-evenly`,
                  ],
                  optionTitles: [
                    `Start`,
                    `Center`,
                    `End`,
                    `Space Between`,
                    `Space Around`,
                    `Space Evenly`,
                  ],
                },
                wrap: { type: B.Boolean, defaultValue: !1 },
                gapH: { type: B.Number, defaultValue: 8, min: 0, step: 1 },
                gapV: { type: B.Number, defaultValue: 8, min: 0, step: 1 },
                width: {
                  type: B.Enum,
                  defaultValue: `fit`,
                  options: [`fit`, `fill`],
                  optionTitles: [`Fit`, `Fill`],
                  displaySegmentedControl: !0,
                },
              },
            },
            fill: Ie({
              colorOff: `#F0F0F0`,
              colorAOff: `#EDEDED`,
              colorBOff: `#CCC`,
              colorOn: `#0075FF`,
              colorAOn: `#70B3FF`,
              colorBOn: `#0075FF`,
            }),
            ...Bt,
            selectedFontColor: { type: B.Color, defaultValue: `#FFF`, title: `Color On` },
            defaultFontColor: { type: B.Color, defaultValue: `#000`, title: `Color Off` },
            padding: { type: B.Padding, defaultValue: `10px 16px 10px 16px` },
            radius: { type: B.BorderRadius, defaultValue: `8px` },
            border: {
              type: B.Object,
              optional: !0,
              controls: {
                selectedColor: { type: B.Color, defaultValue: `#0051ad`, title: `Color On` },
                defaultColor: { type: B.Color, defaultValue: `#222`, title: `Color Off` },
                width: { type: B.Padding, defaultValue: `1px` },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            shadows: {
              type: B.Object,
              optional: !0,
              buttonTitle: `Shadows`,
              controls: {
                shadowOn: { type: B.BoxShadow, title: `On` },
                shadowOff: { type: B.BoxShadow, title: `Off` },
              },
            },
            bgBlur: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
              title: `BG Blur`,
            },
            ...zt,
            dividerStyle: {
              type: B.Object,
              title: `Dividers`,
              controls: {
                color: { type: B.Color, defaultValue: `rgba(0, 0, 0, 0.25)` },
                width: { type: B.Number, defaultValue: 1, min: 0, displayStepper: !0 },
                rounded: { type: B.Boolean, defaultValue: !1 },
                marginH: { type: B.Number, defaultValue: 0, min: 0, step: 1, displayStepper: !0 },
                marginV: {
                  type: B.Number,
                  defaultValue: 0,
                  min: 0,
                  step: 1,
                  displayStepper: !0,
                  description: `Add a divider by using the manual options mode and adding *---* as an option.`,
                },
              },
            },
          },
        },
        dropdownStyle: {
          type: B.Object,
          title: `Styling 🎨`,
          description: `Update the dropdown filter styling.`,
          buttonTitle: `Dropdown`,
          hidden: (e) => !It(e) || e.filterTypeOption !== Q.Dropdown,
          controls: {
            fill: Fe({ color: `#F0F0F0` }),
            ...Bt,
            fontColor: { type: B.Color, defaultValue: `#000` },
            padding: { type: B.Padding, defaultValue: `10px 16px 10px 16px` },
            radius: { type: B.BorderRadius, defaultValue: `8px` },
            arrow: {
              type: B.Object,
              defaultValue: { size: 12, gap: 10 },
              optional: !0,
              buttonTitle: `Style`,
              controls: {
                color: { type: B.Color, optional: !0 },
                size: { type: B.Number, defaultValue: 12, min: 1, step: 1 },
                gap: { type: B.Number, defaultValue: 10, min: 0, step: 1 },
                stroke: {
                  type: B.Number,
                  defaultValue: 2,
                  min: 0.1,
                  step: 0.1,
                  displayStepper: !0,
                },
              },
            },
            border: {
              type: B.Object,
              optional: !0,
              controls: {
                color: { type: B.Color, defaultValue: `#222` },
                width: { type: B.Padding, defaultValue: `1px` },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            shadows: { type: B.BoxShadow },
            bgBlur: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
              title: `BG Blur`,
            },
            ...zt,
          },
        },
        toggleSwitchStyle: {
          type: B.Object,
          title: `Styling 🎨`,
          description: `Update the toggle filter styling.`,
          icon: `boolean`,
          buttonTitle: `Toggle Switch`,
          hidden: (e) => Lt(e) !== Y.Toggle || e.filterTypeOption !== Q.ToggleSwitch,
          controls: {
            fill: Ie({
              colorOn: `#0075FF`,
              colorAOn: `#70B3FF`,
              colorBOn: `#0075FF`,
              colorOff: `#EDEDED`,
              colorAOff: `#EDEDED`,
              colorBOff: `#CCC`,
            }),
            border: {
              type: B.Object,
              optional: !0,
              controls: {
                colorOn: { type: B.Color, defaultValue: `#222` },
                colorOff: { type: B.Color, defaultValue: `#222` },
                width: { type: B.Number, defaultValue: 1, min: 0, step: 1 },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            switchFill: Ie({
              colorOn: `#FFF`,
              colorAOn: `#FFF`,
              colorBOn: `#D6D6D6`,
              colorOff: `#FFF`,
              colorAOff: `#FFF`,
              colorBOff: `#D6D6D6`,
            }),
            switchBorder: {
              type: B.Object,
              optional: !0,
              controls: {
                colorOn: { type: B.Color, defaultValue: `#222` },
                colorOff: { type: B.Color, defaultValue: `#222` },
                width: { type: B.Number, defaultValue: 1, min: 0, step: 1 },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
              },
            },
            shadows: { type: B.BoxShadow, defaultValue: `0px 2px 4px 0px rgba(0,0,0,0.2)` },
            height: { type: B.Number, defaultValue: 32, min: 1, step: 1 },
            padding: { type: B.Number, defaultValue: 4, min: 0, step: 1, displayStepper: !0 },
            radius: { type: B.Number, defaultValue: 16, min: 0 },
            ...zt,
          },
        },
        checkboxStyle: {
          type: B.Object,
          title: `Styling 🎨`,
          description: `Update the checkbox filter styling.`,
          buttonTitle: `Checkbox`,
          hidden: (e) => Lt(e) !== Y.Toggle || e.filterTypeOption !== Q.Checkbox,
          controls: {
            fillOn: { type: B.Color, defaultValue: `#0075FF` },
            fillOff: { type: B.Color, defaultValue: `#EDEDED` },
            size: { type: B.Number, defaultValue: 24, min: 1, step: 1 },
            radius: { type: B.BorderRadius, defaultValue: `6px` },
            icon: {
              type: B.Object,
              optional: !0,
              defaultValue: { size: 16, color: `#FFF`, rounded: !0 },
              buttonTitle: `Options`,
              controls: {
                size: { type: B.Number, defaultValue: 16, min: 1, step: 1 },
                lineWidth: { type: B.Number, defaultValue: 2, min: 1, step: 0.1 },
                colorOn: { type: B.Color, defaultValue: `#FFF`, title: `Color` },
                rounded: { type: B.Boolean, defaultValue: !0 },
              },
            },
            ...zt,
          },
        },
        options: {
          type: B.Object,
          advanced: !0,
          description: `Edit the filter options.`,
          hidden: (e) => !It(e),
          controls: {
            defaultValueEnabled: { type: B.Boolean, defaultValue: !1, title: `Default Value` },
            defaultValue: {
              type: B.String,
              defaultValue: ``,
              placeholder: `Default Value`,
              title: ` `,
              description: `Set the default value for your filter.`,
              hidden: (e) => !e.defaultValueEnabled,
            },
            optionOrder: {
              type: B.Enum,
              defaultValue: bt.Default,
              options: [bt.Default, bt.Alphabetical],
              optionTitles: [`Default`, `A -> Z`],
              displaySegmentedControl: !0,
              title: `Order`,
            },
            allOption: {
              type: B.Boolean,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            allText: {
              type: B.String,
              defaultValue: `All`,
              title: ` `,
              description: `Select to show or hide an “All” option.`,
              hidden: (e) => !e.allOption,
            },
            textCondition: {
              type: B.Enum,
              defaultValue: Be.Equals,
              options: [Be.Equals, Be.Contains],
              optionTitles: [`Equals`, `Contains`],
              displaySegmentedControl: !0,
              title: `Condition`,
              description: `*Equals*: The items which equal the filter value are shown.
*Contains*: The items which include the filter value are shown.`,
            },
            placeholder: {
              type: B.String,
              defaultValue: `[Preview project]`,
              description: `This placeholder text is only shown in the Framer editor.`,
            },
          },
        },
        toggleMultiOptions: {
          type: B.Object,
          title: `Options`,
          controls: {
            defaultValue: {
              type: B.Enum,
              defaultValue: null,
              options: [`all`, `on`, `off`],
              optionTitles: [`All`, `Yes`, `No`],
              displaySegmentedControl: !0,
            },
            allOption: {
              type: B.Boolean,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            allText: {
              type: B.String,
              defaultValue: `All`,
              title: ` `,
              hidden: (e) => !e.allOption,
            },
            yesOption: {
              type: B.Boolean,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            yesText: {
              type: B.String,
              defaultValue: `On`,
              title: ` `,
              hidden: (e) => !e.yesOption,
            },
            noOption: {
              type: B.Boolean,
              defaultValue: !1,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
            },
            noText: { type: B.String, defaultValue: `Off`, title: ` `, hidden: (e) => !e.noOption },
            order: {
              type: B.Enum,
              defaultValue: `yesNo`,
              options: [`yesNo`, `noYes`],
              optionTitles: [`Yes, No`, `No, Yes`],
              displaySegmentedControl: !0,
              hidden: (e) => !e.yesOption || !e.noOption,
            },
          },
          hidden: (e) => Lt(e) != Y.Toggle || (Rt(e) != Q.Dropdown && Rt(e) != Q.ButtonGroup),
        },
        toggleTwoStateOptions: {
          type: B.Object,
          title: `Options`,
          icon: `boolean`,
          controls: {
            defaultValue: {
              type: B.Enum,
              defaultValue: `off`,
              options: [`off`, `on`],
              optionTitles: [`Off`, `On`],
              displaySegmentedControl: !0,
            },
            offState: {
              type: B.Enum,
              defaultValue: `all`,
              options: [`all`, `on`, `off`],
              optionTitles: [`All`, `On`, `Off`],
              displaySegmentedControl: !0,
            },
            onState: {
              type: B.Enum,
              defaultValue: `on`,
              options: [`all`, `on`, `off`],
              optionTitles: [`All`, `On`, `Off`],
              displaySegmentedControl: !0,
            },
          },
          hidden: (e) => Lt(e) != Y.Toggle || (Rt(e) != Q.ToggleSwitch && Rt(e) != Q.Checkbox),
        },
        toggleTwoStateText: {
          type: B.Object,
          optional: !0,
          defaultValue: { offText: `Off`, onText: `On`, location: `right`, gap: 10 },
          title: `Text`,
          controls: {
            offText: { type: B.String, defaultValue: `Off` },
            onText: { type: B.String, defaultValue: `On` },
            ...Bt,
            fontColor: { type: B.Color, defaultValue: `#999`, title: `Color` },
            location: {
              type: B.Enum,
              defaultValue: `right`,
              options: [`left`, `right`],
              optionTitles: [`Left`, `Right`],
              displaySegmentedControl: !0,
            },
            gap: { type: B.Number, defaultValue: 10, min: 0, step: 1 },
          },
          hidden: (e) => Lt(e) != Y.Toggle || (Rt(e) != Q.ToggleSwitch && Rt(e) != Q.Checkbox),
        },
        multiSelect: {
          type: B.Boolean,
          defaultValue: !1,
          title: `Multi-Select`,
          hidden: (e) => Rt(e) != Q.ButtonGroup || Lt(e) == Y.Toggle,
        },
        settings: {
          type: B.Object,
          advanced: !0,
          description: `Add more control around filter options.`,
          controls: {
            id: Ye,
            manualOptions: {
              type: B.Boolean,
              defaultValue: !1,
              title: `Manual Options`,
              description: `Manually set which options to show on filter.`,
            },
            optionValues: {
              type: B.Array,
              title: ` `,
              control: { type: B.String, defaultValue: `` },
              hidden: (e) => !e.manualOptions,
            },
          },
        },
      }));
  });
function Ht(
  {
    breakpoints: e,
    columns: n = Ut,
    gapH: r = Wt,
    gapV: i = Wt,
    reverse: o = !1,
    autoArrange: s = !1,
    alignment: l = `center`,
    children: h,
    style: g,
    ..._
  },
  v
) {
  let y = t([]),
    b = t([]),
    [x, S] = c(!1),
    [ee, C] = c(0),
    w = t(new Map()),
    T = t(null),
    E = t(null),
    te = (e) => {
      if (!w.current.has(e)) {
        let t = e.offsetHeight,
          n = new ResizeObserver((n) => {
            let r = n[0].target.offsetHeight;
            if (r !== t && Math.abs(r - t) > 2) {
              t = r;
              let n = y.current.findIndex((t) => t.element === e);
              (E.current === null ? (E.current = n) : (E.current = Math.min(E.current, n)),
                (T.current ||= setTimeout(
                  () => {
                    (C((e) => e + 1), (T.current = null));
                  },
                  ee === 0 ? 10 : 200
                )));
            }
          });
        (n.observe(e), w.current.set(e, n));
      }
    },
    D = (e) => (t) => {
      t !== null && (O.push({ element: t, index: e }), (y.current = O), te(t));
    };
  (a(
    () => () => {
      (w.current.forEach((e) => e.disconnect()), w.current.clear());
    },
    []
  ),
    a(
      () => () => {
        T.current && clearTimeout(T.current);
      },
      []
    ),
    d(
      () => (
        s && !x && S(!0),
        s && x && C((e) => e + 1),
        () => {
          s && x && S(!1);
        }
      ),
      [s]
    ));
  let ne = u(() => {
      if (n < 1) return [];
      let e = f.toArray(h);
      o && e.reverse();
      let t = Array.from({ length: n }, () => []),
        r = t.map(() => 0),
        a = E.current ?? -1,
        c = (e) => {
          if (s && x && y.current.length > 0)
            if (a === -1 || e > a) {
              let t = r.findIndex((e) => e === Math.min(...r)),
                n = y.current.find((t) => t.index === e)?.element.getBoundingClientRect().height;
              return ((r[t] += (n || 0) + i), t);
            } else {
              let t = y.current.find((t) => t.index === e);
              if (t) {
                let n = b.current.findIndex((t) => t.some((t) => t.index === e));
                if (n !== -1) {
                  let e = t.element.getBoundingClientRect().height;
                  return ((r[n] += (e || 0) + i), n);
                }
              }
              let n = r.findIndex((e) => e === Math.min(...r)),
                a = t?.element.getBoundingClientRect().height;
              return ((r[n] += (a || 0) + i), n);
            }
          return e % n;
        };
      return (
        e.forEach((e, n) => {
          e && m(e) && t[c(n)].push({ element: e, index: n });
        }),
        (b.current = t),
        t
      );
    }, [ee, x, h, n, o, s]),
    O = [];
  return p(`div`, {
    ref: v,
    style: { display: `flex`, gap: r, ...g },
    ..._,
    children: ne.map((e, t) =>
      p(
        `div`,
        {
          style: { flex: 1, display: `flex`, flexDirection: `column`, alignItems: l, gap: i },
          children: e.map((e, t) => p(`div`, { ref: D(e.index), children: e.element }, t)),
        },
        t
      )
    ),
  });
}
var Ut,
  Wt,
  Gt = e(() => {
    (y(), S(), (Ut = 1), (Wt = 0), (Ht.displayName = `Superfields/Masonry`));
  });
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
function qt(e, t) {
  function n(n, r, i) {
    if (typeof document < `u`) {
      ((i = Kt({}, t, i)),
        typeof i.expires == `number` && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
        (i.expires &&= i.expires.toUTCString()),
        (n = encodeURIComponent(n)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape)));
      var a = ``;
      for (var o in i) i[o] && ((a += `; ` + o), !0 !== i[o] && (a += `=` + i[o].split(`;`)[0]));
      return (document.cookie = n + `=` + e.write(r, n) + a);
    }
  }
  function r(t) {
    if (typeof document < `u` && (!arguments.length || t)) {
      for (
        var n = document.cookie ? document.cookie.split(`; `) : [], r = {}, i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i].split(`=`),
          o = a.slice(1).join(`=`);
        try {
          var s = decodeURIComponent(a[0]);
          if (((r[s] = e.read(o, s)), t === s)) break;
        } catch {}
      }
      return t ? r[t] : r;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (e, t) {
        n(e, ``, Kt({}, t, { expires: -1 }));
      },
      withAttributes: function (e) {
        return qt(this.converter, Kt({}, this.attributes, e));
      },
      withConverter: function (e) {
        return qt(Kt({}, this.converter, e), this.attributes);
      },
    },
    { attributes: { value: Object.freeze(t) }, converter: { value: Object.freeze(e) } }
  );
}
var Jt,
  Yt,
  Xt = e(() => {
    ((Jt = {
      read: function (e) {
        return (
          e[0] === `"` && (e = e.slice(1, -1)),
          e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    }),
      (Yt = qt(Jt, { path: `/` })));
  }),
  Zt,
  Qt,
  $t = e(() => {
    (ot(),
      Xt(),
      (Zt = rt((e, t) => ({
        collections: {},
        getFavourites: (e) => t().collections[e] || [],
        setFavourites: (t, n) => {
          (e((e) => ({ collections: { ...e.collections, [t]: n } })),
            Yt.set(`superfieldsFavourites_${t}`, n));
        },
        addFavourite: (e, n) => {
          let r = t().getFavourites(e);
          t().setFavourites(e, [...r, n]);
        },
        removeFavourite: (e, n) => {
          let r = t().getFavourites(e);
          t().setFavourites(
            e,
            r.filter((e) => e !== n)
          );
        },
      }))),
      (Qt = (e, t, n = null) =>
        Zt((r) => {
          let i = { favourites: r.getFavourites(e) };
          if (!Array.isArray(r.collections[e]))
            try {
              let t = `superfieldsFavourites_${e}`,
                a = Yt.get(t);
              if (!a && n) {
                let e = `superfieldsFavourites_${n}`;
                ((a = Yt.get(e)), a && (Yt.set(t, a), Yt.remove(e)));
              }
              if (a) {
                let t = a.split(`,`);
                (r.setFavourites(e, t), (i.favourites = t));
              }
            } catch (e) {
              console.error(`Failed to load or parse favourites cookie:`, e);
            }
          for (let t in r) {
            let n = r[t];
            typeof n == `function` ? (i[t] = (...t) => n(e, ...t)) : (i[t] = n);
          }
          return t(i);
        })));
  });
function en(e) {
  let {
    superfieldsId: n,
    layout: r,
    componentConfig: i,
    cmsCollectionName: s,
    favouritesOnly: c,
    searchFields: l,
    sortingField: d,
    urlParameters: f,
    slugFieldName: m,
    scrollUp: h,
    transition: g,
    customOverrideFilter: y = null,
    customOverrideSort: x = null,
  } = e;
  ee();
  let S = e.collectionList?.[0],
    C = e.emptyState?.[0],
    w = pe.current() === pe.canvas,
    E = o === void 0,
    te = t(null),
    D = t(-1),
    ne = t(!0),
    {
      query: O,
      queryParent: k,
      propertyControlsById: re,
      propertyControlsByTitle: A,
      childrenFunction: ie,
      collections: oe,
      multiReferenceQueries: j,
      multiReferenceIdMap: M,
    } = u(() => Ze(S), [S]),
    se = oe[0],
    ce = w ? 0 : k?.props?.pageSize || 0,
    le = ce > 0,
    N = le || e.pagination,
    [P, F, I, L, ue, de, R, z, B, fe, me, ge, _e, V] = lt(
      n,
      (e) => [
        e.filters,
        e.randomizationSeed,
        e.search,
        e.sortOption,
        e.defaultSortOption,
        e.sortingUrlParameter,
        e.paginationType,
        e.itemsPerPage,
        e.page,
        e.setPage,
        e.setTotalItems,
        e.paginationButtonsCount,
        e.searchFields,
        e.setPaginationType,
      ],
      (t) => {
        if (
          ((t.itemsPerPage = le ? ce : e.pagination ? e.itemsPerPage : 0),
          (t.paginationActive = N),
          (t.searchFields ||= e.searchFields),
          !E && !w)
        ) {
          if (e.randomize) {
            let e = Math.floor(Math.random() * 1e8);
            ((t.randomizationSeed = e),
              o !== void 0 &&
                import.meta.env?.DEV &&
                console.debug(`[Superfields] seeded randomization`, {
                  superfieldsId: n,
                  seededValue: e,
                  source: `props.randomize`,
                }));
          }
          let r = new URLSearchParams(o.location.search);
          if (f?.search && f.searchName) {
            let e = r.get(f.searchName);
            e && (t.search = e);
          }
          if (f?.pagination && f.paginationName) {
            let e = r.get(f.paginationName);
            if (e) {
              let n = parseInt(e, 10),
                r = Math.ceil(K.length / t.itemsPerPage);
              !isNaN(n) && n >= 1 && n <= r && (t.page = n - 1);
            }
          }
        }
      }
    ),
    H = u(
      () =>
        ge > 0
          ? `prevNextButtons`
          : le
            ? `framerPagination`
            : e.pagination
              ? e.paginationType
              : null,
      [ge, le, e.pagination, e.paginationType]
    );
  a(() => {
    V(H);
  }, [H, V]);
  let U = e.randomize || !!F,
    W = se?.alias,
    ve = A[W] || {},
    ye = re[W] || {},
    be = ve[m || `Slug`]?.id,
    xe = Object.keys(P),
    G = e.sorting ? d : null;
  L && L.id !== `[{(DEFAULT_SORTING)}]` && (G = L);
  let Se = Qt(be, (e) => e.favourites, s),
    Ce = _e || e.searchFields,
    we = u(() => cn(O, P, e.search, Ce, G, A, oe), [O, P, e.search, Ce, G?.sortBy, G?.fieldName]);
  a(() => {
    o !== void 0 &&
      import.meta.env?.DEV &&
      console.debug(`[Superfields] randomization state`, {
        superfieldsId: n,
        propsRandomize: e.randomize,
        derivedRandomize: U,
        randomizationSeed: F,
        isCanvas: w,
      });
  }, [n, e.randomize, U, F, w]);
  let Te = u(() => {
      let t = {};
      for (let n of Object.keys(j)) {
        let r = ye[n];
        if (!r) {
          for (let e of Object.keys(M))
            if (M[e] === n) {
              r = ye[e];
              break;
            }
        }
        if (r) {
          let i = r.title,
            a = [];
          for (let e of Ce)
            e.fieldType === `reference` &&
              e.fieldName === i &&
              a.push({ fieldName: e.referenceFieldName, fieldType: `default` });
          let o = {};
          for (let e of Object.keys(P)) {
            let t = P[e];
            t.fieldType === Y.MultiReference &&
              t.fieldName === i &&
              (o[e] = {
                ...t,
                fieldName: t.referenceFieldName,
                fieldType: t.referenceFieldType,
                referenceFieldName: void 0,
                referenceFieldType: void 0,
              });
          }
          t[n] = cn(
            j[n],
            o,
            e.search,
            a,
            null,
            A,
            [...oe].sort((e, t) => (e.alias === n ? -1 : +(t.alias === n)))
          );
        } else {
          let e = j[n];
          e && (t[n] = e.select);
        }
      }
      return t;
    }, [j, P, e.search, Ce]),
    Ee = O ? ae({ ...O, select: we }) : [],
    De = {};
  for (let e of Object.keys(j)) {
    let t = Te[e],
      n = j[e],
      r = {};
    if (t && n) {
      let e = ae({ ...n, select: t, where: void 0, orderBy: void 0 });
      for (let t of e) r[t.id] = t;
    }
    De[e] = r;
  }
  let [K, q, Oe] = u(() => {
      let e = ln(Ee, re, W, De, M),
        t = Ee.map((e) => e.id),
        n = {};
      if (!w && Array.isArray(e)) for (let t of e) n[t.id] = t;
      return [e, t, n];
    }, [Ee, re, W, De, M]),
    ke = () => {
      if (h && te.current && !E && !w) {
        let e = te.current.getBoundingClientRect();
        (e.top >= 0 && e.top <= o.innerHeight) ||
          te.current.scrollIntoView({ behavior: h.scrollStyle });
      }
    };
  (a(() => {
    ne.current ||
      (h &&
        ((h.filteringEnabled && xe.length > 0) ||
          (h.sortingEnabled && G?.sortBy !== `defaultSorting`)) &&
        ke());
  }, [P, G?.sortBy]),
    a(() => {
      if (ne.current) {
        ne.current = !1;
        return;
      }
      if (
        (N && h && h.paginationEnabled && R == `prevNextButtons` && ke(),
        N && f?.pagination && f.paginationName && !E)
      ) {
        let e = new URL(o.location.href),
          t = B + 1;
        (t > 1
          ? e.searchParams.set(f.paginationName, t.toString())
          : e.searchParams.delete(f.paginationName),
          o.history.replaceState({ path: e.href }, ``, e.href));
      }
    }, [B, N, R, f]),
    a(() => {
      if (!f?.search || !f.searchName || w || E) return;
      let e = new URL(o.location.href);
      (I ? e.searchParams.set(f.searchName, I) : e.searchParams.delete(f.searchName),
        o.history.replaceState({ path: e.href }, ``, e.href));
    }, [I, f]),
    a(() => {
      if (w || E) return;
      let e = new URL(o.location.href),
        t = !1;
      for (let n of xe) {
        let r = P[n];
        if (r && r.urlParameter) {
          t = !0;
          let n = r.value;
          n != null && n !== void 0 && n !== ``
            ? e.searchParams.set(r.urlParameter, n.toString())
            : e.searchParams.delete(r.urlParameter);
        }
      }
      t && o.history.replaceState({ path: e.href }, ``, e.href);
    }, [P, f]),
    a(() => {
      if (w || E || !de) return;
      let e = new URL(o.location.href);
      (L && L.title !== ue?.title ? e.searchParams.set(de, L.title) : e.searchParams.delete(de),
        o.history.replaceState({ path: e.href }, ``, e.href));
    }, [L, ue, de]));
  let Ae = u(() => {
      if (w || !xe.length) return q;
      let e = q;
      for (let t of xe) {
        if (t == `[{(FAVOURITES)}]`) continue;
        let n = P[t],
          { fieldName: r, fieldType: i } = n,
          a = n.value,
          o = n?.condition === Be.Contains,
          s = [];
        if (i === Y.MultipleOptions)
          for (let e of r.split(ze)) {
            let t = ve[e.trim()];
            t && s.push(t);
          }
        else if (i === Y.Reference || i === Y.MultiReference) {
          let { referenceFieldName: e } = n,
            t = ve[r],
            i = t?.type === `multicollectionreference`;
          if (t && (t.type === `collectionreference` || i)) {
            let n = oe.find((e) => e.alias === t.id || (i && e.alias === M[t.id]))?.data
              ?.propertyControls;
            if (n) {
              let r = null,
                a = null;
              for (let t of Object.keys(n)) {
                let i = n[t];
                if (i.title === e) {
                  ((r = t), (a = i));
                  break;
                }
              }
              a &&
                r &&
                (i
                  ? s.push({ ...t, referenceAlias: M[t.id], referenceId: r, referenceType: a.type })
                  : s.push({ id: `${t.id}.${r}`, type: a.type }));
            }
          }
        } else {
          let e = ve[r];
          e && s.push(e);
        }
        let c = s.length > 1;
        if (n && s.length && a != null && a != null) {
          let t = [];
          for (let r of e) {
            let e = !1,
              i = Oe[r];
            if (c) {
              for (let t of s)
                if (on(t, i[t.id], a, n.multiSelect, o, De)) {
                  e = !0;
                  break;
                }
            } else {
              let t = s[0];
              e = on(t, i[t.id], a, n.multiSelect, o, De);
            }
            e && t.push(r);
          }
          e = t;
        }
      }
      return e;
    }, [P, K]),
    je = P[Re]?.value,
    Me = u(() => {
      if (w || !be || (!c && typeof je !== J.Boolean)) return q;
      let e = je === !0 || c;
      if (!Array.isArray(Se) || Se.length === 0) {
        if (e) return [];
      } else return q.filter((t) => Se.includes(Oe[t][be]) === e);
      return q;
    }, [je, c, Se, K]),
    Pe = u(() => {
      if (!y) return q;
      let e = y({
        dataIds: q,
        dataItemsById: Oe,
        collections: oe,
        propertyControlsById: re,
        propertyControlsByTitle: A,
        mainPropertyControlsByTitle: ve,
      });
      return Array.isArray(e) ? e : q;
    }, [y, K]),
    Fe = I?.trim().toLowerCase() ?? ``,
    [Ie, Le, Ve] = u(() => {
      if (w || !Fe.length || !Array.isArray(K)) return [q, !1, null];
      let e = null,
        t = [[...q], [], [], [], []],
        n = Array(K.length).fill(0);
      for (let r = 0; r < Ce.length; r++) {
        let { fieldType: i, fieldName: a, referenceFieldName: o } = Ce[r],
          { property: s } = an(a, i, o, null, A, W, `Title`);
        if (!s) {
          e = a;
          break;
        }
        let c = s.id,
          l = s.type;
        (l == J.String || J.Enum, J.Number);
        let u = l == `multicollectionreference`;
        for (let e in K) {
          let r = K[e],
            i = 0;
          if (u) {
            let e = Oe[r.id]?.[c],
              t = M[s.id],
              n = A[t];
            if (n && typeof n == `object` && Array.isArray(e)) {
              let t = n[o || `Title`]?.id;
              if (t) {
                for (let n of e)
                  if (n) {
                    let e = n[t];
                    i = Math.max(i, un(e, Fe));
                  }
              }
            }
          } else {
            let e = Oe[r.id]?.[c];
            i = un(e, Fe);
          }
          let a = n[e];
          if (i > a) {
            let o = [];
            for (let e of t[a]) e != r.id && o.push(e);
            ((t[a] = o), t[i].push(r.id), (n[e] = i));
          }
        }
      }
      return e ? [q, !1, e] : [[...t[4], ...t[3], ...t[2], ...t[1]], !0, e];
    }, [Fe, K, Ce]),
    X = Ie.filter((e) => Ae.includes(e) && Me.includes(e) && Pe.includes(e)),
    He = X.length,
    Ue = z && He ? Math.ceil(He / z) : 1;
  (He !== D.current && (me(He), B >= Ue && Ue > 0 && fe(Math.max(0, Ue - 1))), (D.current = He));
  let We = u(
    () =>
      F && !w && Array.isArray(K)
        ? (o !== void 0 &&
            import.meta.env?.DEV &&
            console.debug(`[Superfields] shuffling data`, {
              superfieldsId: n,
              randomizationSeed: F,
              itemCount: K.length,
            }),
          rn(
            Array.from({ length: K.length }, (e, t) => t),
            F
          ))
        : (o !== void 0 &&
            import.meta.env?.DEV &&
            console.debug(`[Superfields] shuffling skipped`, {
              superfieldsId: n,
              randomizationSeed: F,
              isCanvas: w,
              hasData: Array.isArray(K),
            }),
          null),
    [F, w, K]
  );
  if (!w && !Le && U) {
    let e = q;
    if (We) {
      e = Array(q.length);
      for (let t = 0; t < We.length; t++) e[We[t]] = q[t];
    }
    X = e.filter((e) => X.includes(e));
  }
  let Ge = !w && !U && !Le,
    Ke = ``,
    qe = ``,
    Je = ``;
  if (Ge && G && G.sortBy !== `defaultSorting`) {
    let { sortBy: e } = G,
      t = G.fieldType === `reference` ? G.referenceFieldType : G.fieldType,
      {
        property: n,
        mismatchedFieldName: r,
        mismatchedFieldType: i,
      } = an(G.fieldName, G.fieldType, G.referenceFieldName, G.referenceFieldType, A, W);
    if (r) ((qe = r), (Je = i));
    else {
      let r = n?.id;
      if ((e === `field` && r) || (e === `favourites` && be)) {
        let i =
            e === `favourites`
              ? G.favouritesSort === `favouritesLast`
              : (t === J.String && G.stringSort === `ascending`) ||
                (t === J.Number && G.numberSort === `ascending`) ||
                (t === J.Date && G.dateSort === `ascending`) ||
                (t === J.Boolean && G.booleanSort === `noYes`) ||
                (t === J.Enum && (G.enumSort === `optionOrder` || G.enumSort === `ascending`)),
          a = (i) => {
            if (e === `favourites`) {
              let e = Oe[i]?.[be];
              return Array.isArray(Se) && Se.includes(e) ? 1 : 0;
            }
            let a = Oe[i]?.[r];
            if (a == null) return null;
            switch (t) {
              case J.Number:
                return Number(a);
              case J.Date:
                return new Date(a).getTime();
              case J.Boolean:
                return +!!a;
              case J.Enum:
                return G.enumSort === `optionOrder` || G.enumSort === `reverseOptionOrder`
                  ? n.optionTitles
                    ? n.optionTitles.indexOf(a)
                    : -1
                  : String(a);
              default:
                return String(a);
            }
          };
        X = [...X].sort((e, n) => {
          let r = a(e),
            o = a(n);
          if (r === null && o === null) return 0;
          if (r === null) return 1;
          if (o === null) return -1;
          let s;
          return (
            (s =
              t === J.String ||
              (t === J.Enum && (G.enumSort === `ascending` || G.enumSort === `descending`))
                ? r.localeCompare(o)
                : r < o
                  ? -1
                  : +(r > o)),
            i ? s : -s
          );
        });
      } else Ke = G.fieldName;
    }
  }
  if (Ge && x) {
    let e = x({
      itemIds: X,
      dataItemsById: Oe,
      collections: oe,
      propertyControlsById: re,
      propertyControlsByTitle: A,
    });
    Array.isArray(e) && (X = e);
  }
  if (!w && N)
    switch (R) {
      case `prevNextButtons`:
        X = X.slice(B * z, (B + 1) * z);
        break;
      case `loadMoreButton`:
      case `framerPagination`:
        X = X.slice(0, (B + 1) * z);
        break;
    }
  let Ye = u(() => {
    if (w || !S || !O || !ie) return null;
    console.log(`🔍 [DEBUG 1] itemIds:`, X.length, `items:`, X.slice(0, 5));
    let { offset: e, limit: t } = O,
      n = { currentPage: B + 1, totalPages: Ue, isLoading: !1 },
      r = () => {
        if (N) {
          let e = B + 1;
          e >= 0 && e < Ue && fe(e);
        }
      },
      a = {};
    for (let e of Ee) a[e.id] = e;
    let o = X.map((e) => a[e]).filter(Boolean),
      s = ie(o, n, r);
    console.log(`🔍 [DEBUG 2] clChildren:`, {
      isArray: Array.isArray(s),
      length: Array.isArray(s) ? s.length : `N/A`,
      hasPropsChildren: !!s?.props?.children,
      propsChildrenLength: Array.isArray(s?.props?.children) ? s.props.children.length : `N/A`,
    });
    let c = (e) => {
        let t = e;
        if (Array.isArray(e) && e.length && i && i.variant.length > 0) {
          let n = [],
            r = !0;
          for (let t = 0; t < e.length; t++) {
            let a = e[t],
              o = a.key ?? a.props?.id,
              s = p(hn, { child: a, componentConfig: i }, o);
            if (s === a) {
              r = !1;
              break;
            } else n.push(p(T, { id: o, children: s }, o));
          }
          r && (t = n);
        }
        return t;
      },
      l = null;
    if (Array.isArray(s)) l = c(s);
    else if (Array.isArray(s?.props?.children)) {
      let e = s.props.children;
      if (e.findIndex((e) => Array.isArray(e)) == -1) l = c(e);
      else {
        let t = [];
        for (let n of e) Array.isArray(n) ? (t = t.concat(c(n))) : t.push(n);
        l = t;
      }
    }
    console.log(`🔍 [DEBUG 3] children after processing:`, {
      length: Array.isArray(l) ? l.length : `N/A`,
      keys: Array.isArray(l) ? l.map((e) => e?.key || e?.props?.id || `no-key`).slice(0, 5) : [],
    });
    let u = [];
    if (Array.isArray(l))
      for (let e of l) {
        let t = null,
          n = e.props?.child?.key;
        (n && (t = Oe[n]?.[be]), u.push(t));
      }
    return (
      console.log(`🔍 [DEBUG 4] Final render:`, {
        childrenCount: l?.length,
        slugsCount: u.length,
        sampleChildren: l
          ?.slice(0, 3)
          .map((e, t) => ({
            index: t,
            hasChild: !!e,
            type: e?.type?.name || e?.type || `unknown`,
            key: e?.key || `no-key`,
            slug: u[t],
          })),
      }),
      l
        ? l.map((e, t) =>
            p(he.Provider, { value: { [be]: u[t] || null }, children: e }, e?.key || u[t] || t)
          )
        : null
    );
  }, [w, S, O, X, B, i]);
  if (!S)
    return p(Ne, {
      title: `Connect a CMS Collection List`,
      subtitle: `Drag the handle on the right side to a Collection List or select from the dropdown list. The Collection List must be outside of a page to be connected.`,
    });
  if (!w && !O)
    return p(Ne, {
      title: `Connect a CMS Collection List`,
      subtitle: `The layer that's connected isn't a Collection List. Make sure the Collection List isn't inside of any other layers or components when connecting it.`,
    });
  if (Ve)
    return p(Ne, {
      title: `"${Ve}" field does not exist in your CMS collection`,
      subtitle: `The field "${Ve}" is in the search fields list, but there are no fields in your CMS collection with that name. Edit the field name in the search fields list or add a new CMS field with that name.`,
    });
  if (Ke)
    return p(Ne, {
      title: `"${Ke}" field does not exist in your CMS collection`,
      subtitle: `The field "${Ke}" is in the search fields list, but there are no fields in your CMS collection with that name. Edit the field name in the sorting configuration or add a new CMS field with that name.`,
    });
  if (qe)
    return p(Ne, {
      title: `"${qe}" is not a ${dn[Je] || Je} field.`,
      subtitle: `Please update the Superfields sorting mode to match the field type on the CMS collection`,
    });
  let Xe = {};
  if (r)
    switch (r.type) {
      case `stack`:
        let e = r.direction == `vertical`;
        Xe = {
          display: `flex`,
          flexDirection: e ? `column` : `row`,
          flexWrap: r.wrap ? `wrap` : `nowrap`,
          alignItems: e ? r.alignV : r.alignH,
          justifyContent: r.distribute,
          gap: r.gap,
        };
        break;
      case `grid`:
        let t = ``;
        t =
          r.columns == `auto`
            ? r.gridWidthType == `min`
              ? `repeat(auto-fill, minmax(${r.gridWidth}px, 1fr))`
              : `repeat(auto-fill, ${r.gridWidth}px)`
            : r.gridWidthType == `min`
              ? `repeat(${r.columnCount}, minmax(${r.gridWidth}px, 1fr))`
              : `repeat(${r.columnCount}, ${r.gridWidth}px)`;
        let n = ``;
        switch (r.gridHeightType) {
          case `fixed`:
            n = `${r.gridHeight}px`;
            break;
          case `fit`:
            n = `min-content`;
            break;
        }
        Xe = {
          display: `grid`,
          gridTemplateColumns: t,
          gridAutoRows: n,
          justifyContent: r.gridAlign,
          alignItems: r.gridAlignV,
          columnGap: r.gapH,
          rowGap: r.gapV,
        };
        break;
    }
  let Qe = r?.type === `masonry`,
    $e = {
      ...(Qe ? {} : S.props?.style),
      ...e.style,
      ...Xe,
      position: `relative`,
      padding: r
        ? r.paddingIsMixed
          ? `${r.paddingTop}px ${r.paddingRight}px ${r.paddingBottom}px ${r.paddingLeft}px`
          : `${r.padding}px`
        : void 0,
    },
    et = Qe
      ? {
          columns: r.masonryColumns,
          gapH: r.gapH,
          gapV: r.gapV,
          alignment: r.masonryItemWidth === `fit` ? r.masonryAlign : `stretch`,
          autoArrange: !0,
          reverse: !1,
        }
      : {};
  if (w)
    if (S) {
      if (Qe)
        return p(Ne, {
          title: `Preview site to view masonry layout`,
          subtitle: `The CMS masonry layout is not available in the editor. Preview or publish your site to see the CMS items.`,
        });
      {
        let t = e.id ?? `a` + String(Math.floor(Math.random() * 999999999));
        return v(b, {
          children: [
            _(S, { id: t, style: $e }),
            N &&
              R !== `framerPagination` &&
              p(`style`, {
                children: `#${t} > *:nth-child(n+${z + 1 + 0}) { display: none !important; }`,
              }),
          ],
        });
      }
    } else return p(`div`, { style: { height: 100 } });
  return X?.length
    ? v(`div`, {
        ...S.props,
        style: $e,
        className: Qe ? `` : S.props?.className || ``,
        "data-superfields": !0,
        children: [
          p(_n, { value: g, children: Qe ? p(gn, { ...et, children: Ye }) : Ye }),
          N &&
            h &&
            p(`div`, {
              ref: te,
              style: { position: `absolute`, top: h.offset, pointerEvents: `none` },
            }),
        ],
      })
    : C
      ? _(C, { style: { ...C.props.style, ...e.style }, "data-superfields": !0 })
      : p(`div`, { "data-superfields": !0 });
}
function tn({ child: e, componentConfig: t }) {
  let n = e?.props?.children?.props?.children,
    r = n?.props,
    i = r?.children,
    a = t.variant;
  if (!i) return e;
  let o = nn(n, a);
  if (o) return o;
  if (r && typeof r == `object` && r?.hasOwnProperty(`href`)) {
    let e = nn(r.children?.props?.children, a);
    if (e)
      return _(n, { children: { ...r?.children, props: { ...r?.children?.props, children: e } } });
  }
  let s = nn(r?.children, a);
  return s ? _(n, { children: s }) : o?.props?.hasOwnProperty(`variant`) ? _(i, { variant: a }) : e;
}
function nn(e, t) {
  let n = e?.props,
    r = n?.children;
  if (e?.type == ne)
    return p(ne, {
      ...n,
      children: (...e) => {
        let n = r(...e);
        return _(n, {
          children: {
            ...n.props.children,
            props: {
              ...n.props.children.props,
              children: {
                ...n.props.children.props.children,
                props: { ...n.props.children.props.children.props, variant: t },
              },
            },
          },
        });
      },
    });
  if (!r?.type?.propertyControls) {
    let e = r?.props?.children;
    if (r && e && e.type?.propertyControls?.variant)
      return _(r, { children: { ...e, props: { ...e.props, variant: t } } });
  }
  return null;
}
function rn(e, t) {
  let n = e.slice(),
    r = t,
    i = () => {
      let e = Math.sin(r++) * 1e4;
      return e - Math.floor(e);
    };
  for (let e = n.length - 1; e > 0; e--) {
    let t = Math.floor(i() * (e + 1));
    [n[e], n[t]] = [n[t], n[e]];
  }
  return n;
}
function an(e, t, n, r, i, a, o = ``) {
  let s = i[a]?.[e] || null,
    c = ``,
    l = ``;
  if (s)
    if (s.type === `collectionreference`) {
      let a = s.id,
        u = i[a];
      if (u) {
        let i = u[t === `reference` ? n : o];
        i && (r && r !== i.type ? ((c = e), (l = i.type)) : (s = { ...i, id: `${a}.${i.id}` }));
      }
    } else s.type !== t && ((c = e), (l = t));
  return { property: s, mismatchedFieldName: c, mismatchedFieldType: l };
}
function on(e, t, n, r, i, a) {
  if (e.type === `multicollectionreference` && Array.isArray(t))
    for (let a of t) {
      if (!a) continue;
      let t = a[e.referenceId];
      if (t != null && sn(t, n, e.referenceType, r, i)) return !0;
    }
  else return t != null && sn(t, n, e.type, r, i);
  return !1;
}
function sn(e, t, n, r, i) {
  if (typeof t == `string` && r) {
    let r = t.split(ze);
    switch (n) {
      case J.String:
      case J.Enum:
        if (i) {
          for (let t of r) if (e.includes(t)) return !0;
        } else if (r.includes(e)) return !0;
        break;
    }
  } else
    switch (n) {
      case J.Boolean:
        if (e == t) return !0;
        break;
      case J.String:
      case J.Enum:
        if (i) {
          if (e?.includes(t)) return !0;
        } else if (e == t) return !0;
        break;
    }
  return !1;
}
function cn(e, t, n, r, i, a, o) {
  let s = Object.keys(t),
    c = s.length;
  if (e?.select && (c || n || i?.sortBy === `field`)) {
    let n = [];
    if (c)
      for (let e of s) {
        let r = t[e];
        if (r.fieldType === Y.MultipleOptions)
          for (let e of r.fieldName.split(ze)) n.push({ name: e });
        else
          r.fieldType === Y.Reference
            ? n.push({ name: r.fieldName, referenceFieldName: r.referenceFieldName })
            : n.push({ name: r.fieldName });
      }
    for (let e of r)
      e.fieldType === `reference`
        ? n.push({ name: e.fieldName, referenceFieldName: e.referenceFieldName })
        : n.push({ name: e.fieldName });
    i && i.sortBy === `field` && n.push({ name: i.fieldName });
    let l = [];
    for (let e of n)
      l.some((t) => t.name === e.name && t.referenceFieldName === e.referenceFieldName) ||
        l.push(e);
    return $e(l, e, a, o);
  }
  return e?.select;
}
function ln(e, t, n, r, i) {
  if (
    !Array.isArray(e) ||
    typeof t != `object` ||
    typeof r != `object` ||
    typeof i != `object` ||
    typeof n != `string`
  )
    return e;
  let a = t[n],
    o = e.map((e) => ({ ...e }));
  for (let e of Object.keys(a)) {
    let n = a[e];
    if (n.type === `enum`) {
      let t = {};
      if (n.options && n.optionTitles)
        for (let e = 0; e < n.options.length; e++) t[n.options[e]] = n.optionTitles[e];
      for (let n of o) n[e] && (n[e] = t[n[e]] || ``);
    } else if (n.type === `multicollectionreference`) {
      let n = i[e],
        a = r[n];
      if (a)
        for (let r of o) {
          let i = r[n],
            o = t[n],
            s = [];
          if (Array.isArray(i) && typeof o == `object`) {
            let e = i.map((e) => {
              let t = typeof e == `string` ? a[e] : e;
              return t ? { ...t } : {};
            });
            for (let t of Object.keys(o)) {
              let n = o[t];
              if (n.type === `enum`) {
                let r = {};
                if (n.options && n.optionTitles)
                  for (let e = 0; e < n.options.length; e++) r[n.options[e]] = n.optionTitles[e];
                for (let n of e) n[t] && (n[t] = r[n[t]] || ``);
              }
            }
            for (let t of e) s.push(t);
          }
          r[e] = s;
        }
    }
  }
  return o;
}
function un(e, t) {
  if (e == null || e == null) return 0;
  let n = String(e).toLowerCase();
  return n == t
    ? 4
    : n.includes(t)
      ? n.startsWith(t)
        ? 3
        : (` ` + n + ` `).includes(` ` + t + ` `)
          ? 2
          : 1
      : 0;
}
var dn,
  fn,
  pn,
  $,
  mn,
  hn,
  gn,
  _n,
  vn = e(() => {
    (n(),
      y(),
      j(),
      S(),
      E(),
      Ue(),
      tt(),
      Gt(),
      dt(),
      $t(),
      (dn = {
        [J.String]: `Text`,
        [J.Number]: `Number`,
        [J.Date]: `Date`,
        [J.Boolean]: `Toggle`,
        [J.Enum]: `Option`,
      }),
      (function (e) {
        ((e.Ascending = `ascending`), (e.Descending = `descending`));
      })((fn ||= {})),
      (function (e) {
        ((e.PrevNextButtons = `prevNextButtons`),
          (e.LoadMoreButton = `loadMoreButton`),
          (e.FramerPagination = `framerPagination`));
      })((pn ||= {})),
      (function (e) {
        ((e.Stack = `stack`), (e.Grid = `grid`), (e.Masonry = `masonry`));
      })(($ ||= {})),
      (function (e) {
        ((e.Default = `default`), (e.Reference = `reference`));
      })((mn ||= {})),
      L(en, {
        superfieldsId: {
          type: B.Number,
          defaultValue: 0,
          step: 1,
          min: 0,
          displayStepper: !0,
          title: `ID`,
        },
        collectionList: { type: B.ComponentInstance },
        emptyState: { type: B.ComponentInstance },
        layout: {
          type: B.Object,
          optional: !0,
          controls: {
            type: {
              type: B.Enum,
              defaultValue: `stack`,
              options: [`stack`, `grid`, `masonry`],
              optionTitles: [`Stack`, `Grid`, `Masonry`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            direction: {
              type: B.Enum,
              defaultValue: `vertical`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type != `stack`,
            },
            distribute: {
              type: B.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`, `space-between`, `space-around`, `space-evenly`],
              optionTitles: [
                `Start`,
                `Center`,
                `End`,
                `Space Between`,
                `Space Around`,
                `Space Evenly`,
              ],
              hidden: (e) => e.type != `stack`,
            },
            alignH: {
              type: B.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Top`, `Center`, `Bottom`],
              optionIcons: [`align-top`, `align-middle`, `align-bottom`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type != `stack` || e.direction != `horizontal`,
            },
            alignV: {
              type: B.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              optionIcons: [`align-left`, `align-center`, `align-right`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type != `stack` || e.direction != `vertical`,
            },
            wrap: { type: B.Boolean, defaultValue: !1, hidden: (e) => e.type != `stack` },
            columns: {
              type: B.Enum,
              defaultValue: `fixed`,
              options: [`auto`, `fixed`],
              optionTitles: [`Auto`, `Fixed`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type != `grid`,
            },
            columnCount: {
              type: B.Number,
              defaultValue: 2,
              min: 1,
              step: 1,
              displayStepper: !0,
              title: ` `,
              hidden: (e) => e.type != `grid` || e.columns == `auto`,
            },
            gridWidthType: {
              type: B.Enum,
              defaultValue: `min`,
              options: [`min`, `fixed`],
              optionTitles: [`Min`, `Fixed`],
              displaySegmentedControl: !0,
              title: `Width`,
              hidden: (e) => e.type != `grid`,
            },
            gridWidth: {
              type: B.Number,
              defaultValue: 200,
              min: 1,
              step: 1,
              title: ` `,
              hidden: (e) => e.type != `grid`,
            },
            gridHeightType: {
              type: B.Enum,
              defaultValue: `fit`,
              options: [`fit`, `fixed`],
              optionTitles: [`Fit`, `Fixed`],
              displaySegmentedControl: !0,
              title: `Height`,
              hidden: (e) => e.type != `grid`,
            },
            gridHeight: {
              type: B.Number,
              defaultValue: 200,
              min: 1,
              step: 1,
              title: ` `,
              hidden: (e) => e.type != `grid` || e.gridHeightType != `fixed`,
            },
            gridAlign: {
              type: B.Enum,
              defaultValue: `center`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type != `grid`,
            },
            gridAlignV: {
              type: B.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Top`, `Center`, `Bottom`],
              optionIcons: [`align-top`, `align-middle`, `align-bottom`],
              displaySegmentedControl: !0,
              title: ` `,
              hidden: (e) => e.type != `grid` || e.gridHeightType !== `fit`,
            },
            masonryColumns: {
              type: B.Number,
              defaultValue: 3,
              min: 1,
              step: 1,
              displayStepper: !0,
              title: `Columns`,
              hidden: (e) => e.type !== `masonry`,
            },
            masonryItemWidth: {
              type: B.Enum,
              defaultValue: `fill`,
              options: [`fit`, `fill`],
              optionTitles: [`Fit`, `Fill`],
              displaySegmentedControl: !0,
              title: `Item Width`,
              hidden: (e) => e.type !== `masonry`,
            },
            masonryAlign: {
              type: B.Enum,
              defaultValue: `center`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type !== `masonry` || e.masonryItemWidth !== `fit`,
            },
            gap: {
              type: B.Number,
              defaultValue: 10,
              min: 0,
              step: 1,
              hidden: (e) => e.type !== `stack`,
            },
            gapH: {
              type: B.Number,
              defaultValue: 10,
              min: 0,
              step: 1,
              hidden: (e) => e.type !== `grid` && (e.type !== `masonry` || e.masonryColumns === 1),
            },
            gapV: {
              type: B.Number,
              defaultValue: 10,
              min: 0,
              step: 1,
              hidden: (e) => e.type !== `grid` && e.type !== `masonry`,
            },
            padding: {
              type: B.FusedNumber,
              defaultValue: 0,
              toggleKey: `paddingIsMixed`,
              toggleTitles: [`All`, `Individual`],
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
          },
        },
        componentConfig: {
          type: B.Object,
          optional: !0,
          title: `Component`,
          controls: {
            variant: {
              type: B.String,
              defaultValue: ``,
              placeholder: `Variant Name`,
              preventLocalization: !0,
              description: `Override the component's variant for responsive design.

*Note:* The component must be the only layer inside the Collection List to use this.

*Note:* Variant does not appear while editing. Preview your project to see the variant.`,
            },
          },
        },
        scrollUp: {
          type: B.Object,
          optional: !0,
          defaultValue: { scrollStyle: `smooth`, offset: 0 },
          title: `Scroll to Top`,
          controls: {
            scrollStyle: {
              type: B.Enum,
              defaultValue: `smooth`,
              options: [`smooth`, `instant`],
              optionTitles: [`Smooth`, `Instant`],
              displaySegmentedControl: !0,
              title: `Scroll`,
            },
            offset: { type: B.Number, defaultValue: -32, step: 1, description: ` ` },
            paginationEnabled: { type: B.Boolean, defaultValue: !0, title: `Pagination` },
            filteringEnabled: { type: B.Boolean, defaultValue: !1, title: `Filters` },
            sortingEnabled: {
              type: B.Boolean,
              defaultValue: !1,
              title: `Sorting`,
              description: `Scroll to the top of the Superfields component when page, filter, or sorting is changed.`,
            },
          },
        },
        transition: { type: B.Transition, defaultValue: { type: !1 }, description: ` ` },
        pagination: { type: B.Boolean, defaultValue: !1 },
        paginationType: {
          type: B.Enum,
          defaultValue: `pagination`,
          options: [`prevNextButtons`, `loadMoreButton`],
          optionTitles: [`Prev/Next Buttons`, `Load More Button`],
          title: `Type`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          hidden: (e) => !e.pagination,
        },
        itemsPerPage: {
          type: B.Number,
          defaultValue: 4,
          min: 1,
          step: 1,
          displayStepper: !0,
          hidden: (e) => !e.pagination,
        },
        filtering: { type: B.Boolean, defaultValue: !1 },
        favouriting: { type: B.Boolean, defaultValue: !1 },
        favouritesOnly: { type: B.Boolean, defaultValue: !1, hidden: (e) => !e.favouriting },
        search: { type: B.Boolean, defaultValue: !1 },
        searchFields: {
          type: B.Array,
          defaultValue: [{ fieldType: `default`, fieldName: `Title` }],
          title: `Fields`,
          control: {
            type: B.Object,
            controls: {
              fieldType: {
                type: B.Enum,
                defaultValue: `default`,
                options: [`reference`, `default`],
                optionTitles: [`Yes`, `No`],
                displaySegmentedControl: !0,
                title: `Reference`,
              },
              fieldName: {
                type: B.String,
                defaultValue: `Title`,
                placeholder: `CMS Field Name`,
                preventLocalization: !0,
              },
              referenceFieldName: {
                type: B.String,
                defaultValue: ``,
                placeholder: `CMS Field Name`,
                preventLocalization: !0,
                hidden: (e) => e.fieldType !== `reference`,
              },
            },
          },
          description: `CMS fields to search`,
          hidden: (e) => !e.search,
        },
        randomize: { type: B.Boolean, defaultValue: !1 },
        sorting: { type: B.Boolean, defaultValue: !1, hidden: (e) => e.randomize },
        sortingField: {
          type: B.Object,
          optional: !0,
          hidden: (e) => e.randomize || !e.sorting,
          controls: Le(),
        },
        slugFieldName: {
          type: B.String,
          defaultValue: `Slug`,
          placeholder: `Slug Field Name`,
          preventLocalization: !0,
          hidden: (e) => !e.favouriting && !e.sorting,
        },
        cmsCollectionName: {
          type: B.String,
          defaultValue: ``,
          preventLocalization: !0,
          hidden: (e) => !0,
        },
      }),
      (hn = g(tn)),
      (gn = g(Ht)),
      (_n = ({ value: e, children: t }) => {
        let n = l(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(w.Provider, { value: i, children: t });
      }));
  });
function yn(e) {
  let t = e.mode === `advanced`;
  return p(en, {
    collectionList: e.collectionList,
    emptyState: e.emptyState,
    superfieldsId: t ? (e.settings?.id ?? 0) : 0,
    layout: t ? e.styling?.layout : void 0,
    transition: t ? e.styling?.transition : void 0,
    componentConfig: t && e.settings?.variant ? { variant: e.settings.variant } : void 0,
    scrollUp: t ? e.settings?.scrollToTop : void 0,
    randomize: t ? e.settings?.randomization : !1,
    favourites: !!(t && e.settings?.favouritesOnly),
    favouriteOnly: !!(t && e.settings?.favouritesOnly),
    search: t ? e.settings?.search : void 0,
    searchFields: t ? e.settings?.searchFields : void 0,
    slugFieldName: (t && e.settings?.slugFieldName) || bn,
    customOverrideFilter: e.customOverrideFilter,
    customOverrideSort: e.customOverrideSort,
    style: e.style,
  });
}
var bn,
  xn = e(() => {
    (y(),
      j(),
      Xe(),
      vn(),
      (bn = `Slug`),
      We(yn, {
        collectionList: {
          type: B.ComponentInstance,
          description: `*CMS Collection:* Connect this to a connection list. This must be outside of a page to be connected.`,
        },
        emptyState: {
          type: B.ComponentInstance,
          description: `*Empty State:* Show a frame when no items exist. This must be outside of a page to be connected.`,
        },
        styling: {
          advanced: !0,
          type: B.Object,
          title: `Styling 🎨`,
          buttonTitle: `Layout, Transition`,
          description: `Update the collection layout and style.`,
          controls: {
            layout: {
              type: B.Object,
              optional: !0,
              description: `Stack, grid, or masonry layout`,
              controls: {
                type: {
                  type: B.Enum,
                  defaultValue: $.Stack,
                  options: [$.Stack, $.Grid, $.Masonry],
                  optionTitles: [`Stack`, `Grid`, `Masonry`],
                  displaySegmentedControl: !0,
                  segmentedControlDirection: `vertical`,
                },
                direction: {
                  type: B.Enum,
                  defaultValue: `vertical`,
                  options: [`horizontal`, `vertical`],
                  optionTitles: [`Horizontal`, `Vertical`],
                  optionIcons: [`direction-horizontal`, `direction-vertical`],
                  displaySegmentedControl: !0,
                  hidden: (e) => e.type != $.Stack,
                },
                distribute: {
                  type: B.Enum,
                  defaultValue: `start`,
                  options: [
                    `start`,
                    `center`,
                    `end`,
                    `space-between`,
                    `space-around`,
                    `space-evenly`,
                  ],
                  optionTitles: [
                    `Start`,
                    `Center`,
                    `End`,
                    `Space Between`,
                    `Space Around`,
                    `Space Evenly`,
                  ],
                  hidden: (e) => e.type != $.Stack,
                },
                alignH: {
                  type: B.Enum,
                  defaultValue: `start`,
                  options: [`start`, `center`, `end`],
                  optionTitles: [`Top`, `Center`, `Bottom`],
                  optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  displaySegmentedControl: !0,
                  title: `Align`,
                  hidden: (e) => e.type != $.Stack || e.direction != `horizontal`,
                },
                alignV: {
                  type: B.Enum,
                  defaultValue: `start`,
                  options: [`start`, `center`, `end`],
                  optionTitles: [`Left`, `Center`, `Right`],
                  optionIcons: [`align-left`, `align-center`, `align-right`],
                  displaySegmentedControl: !0,
                  title: `Align`,
                  hidden: (e) => e.type != $.Stack || e.direction != `vertical`,
                },
                wrap: { type: B.Boolean, defaultValue: !1, hidden: (e) => e.type != $.Stack },
                columns: {
                  type: B.Enum,
                  defaultValue: `fixed`,
                  options: [`auto`, `fixed`],
                  optionTitles: [`Auto`, `Fixed`],
                  displaySegmentedControl: !0,
                  hidden: (e) => e.type != $.Grid,
                },
                columnCount: {
                  type: B.Number,
                  defaultValue: 2,
                  min: 1,
                  step: 1,
                  displayStepper: !0,
                  title: ` `,
                  hidden: (e) => e.type != $.Grid || e.columns == `auto`,
                },
                gridWidthType: {
                  type: B.Enum,
                  defaultValue: `min`,
                  options: [`min`, `fixed`],
                  optionTitles: [`Min`, `Fixed`],
                  displaySegmentedControl: !0,
                  title: `Width`,
                  hidden: (e) => e.type != $.Grid,
                },
                gridWidth: {
                  type: B.Number,
                  defaultValue: 200,
                  min: 1,
                  step: 1,
                  title: ` `,
                  hidden: (e) => e.type != $.Grid,
                },
                gridHeightType: {
                  type: B.Enum,
                  defaultValue: `fit`,
                  options: [`fit`, `fixed`],
                  optionTitles: [`Fit`, `Fixed`],
                  displaySegmentedControl: !0,
                  title: `Height`,
                  hidden: (e) => e.type != $.Grid,
                },
                gridHeight: {
                  type: B.Number,
                  defaultValue: 200,
                  min: 1,
                  step: 1,
                  title: ` `,
                  hidden: (e) => e.type != $.Grid || e.gridHeightType != `fixed`,
                },
                gridAlign: {
                  type: B.Enum,
                  defaultValue: `center`,
                  options: [`start`, `center`, `end`],
                  optionTitles: [`Left`, `Center`, `Right`],
                  displaySegmentedControl: !0,
                  title: `Align`,
                  hidden: (e) => e.type != $.Grid,
                },
                gridAlignV: {
                  type: B.Enum,
                  defaultValue: `start`,
                  options: [`start`, `center`, `end`],
                  optionTitles: [`Top`, `Center`, `Bottom`],
                  optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  displaySegmentedControl: !0,
                  title: ` `,
                  hidden: (e) => e.type != $.Grid || e.gridHeightType !== `fit`,
                },
                masonryColumns: {
                  type: B.Number,
                  defaultValue: 3,
                  min: 1,
                  step: 1,
                  displayStepper: !0,
                  title: `Columns`,
                  hidden: (e) => e.type !== $.Masonry,
                },
                masonryItemWidth: {
                  type: B.Enum,
                  defaultValue: `fill`,
                  options: [`fit`, `fill`],
                  optionTitles: [`Fit`, `Fill`],
                  displaySegmentedControl: !0,
                  title: `Item Width`,
                  hidden: (e) => e.type !== $.Masonry,
                },
                masonryAlign: {
                  type: B.Enum,
                  defaultValue: `center`,
                  options: [`start`, `center`, `end`],
                  optionTitles: [`Left`, `Center`, `Right`],
                  displaySegmentedControl: !0,
                  title: `Align`,
                  hidden: (e) => e.type !== $.Masonry || e.masonryItemWidth !== `fit`,
                },
                gap: {
                  type: B.Number,
                  defaultValue: 10,
                  min: 0,
                  step: 1,
                  hidden: (e) => e.type !== $.Stack,
                },
                gapH: {
                  type: B.Number,
                  defaultValue: 10,
                  min: 0,
                  step: 1,
                  hidden: (e) =>
                    e.type !== $.Grid && (e.type !== $.Masonry || e.masonryColumns === 1),
                },
                gapV: {
                  type: B.Number,
                  defaultValue: 10,
                  min: 0,
                  step: 1,
                  hidden: (e) => e.type !== $.Grid && e.type !== $.Masonry,
                },
                padding: {
                  type: B.FusedNumber,
                  defaultValue: 0,
                  toggleKey: `paddingIsMixed`,
                  toggleTitles: [`All`, `Individual`],
                  valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
                  valueLabels: [`T`, `R`, `B`, `L`],
                  min: 0,
                },
              },
            },
            transition: {
              type: B.Transition,
              defaultValue: { type: !1 },
              description: `Animate items when they move`,
            },
          },
        },
        settings: {
          advanced: !0,
          type: B.Object,
          title: `Settings`,
          description: `Advanced setup for Superfields.`,
          buttonTitle: `Options`,
          controls: {
            id: {
              type: B.Number,
              defaultValue: 0,
              step: 1,
              min: 0,
              displayStepper: !0,
              title: `ID`,
              description: `If using multiple collections on the same page, set a specific ID to match.`,
            },
            randomization: {
              type: B.Boolean,
              defaultValue: !1,
              title: `Randomization`,
              description: `Randomize the order of items in the collection.`,
            },
            favouritesOnly: {
              type: B.Boolean,
              defaultValue: !1,
              title: `Favourites Only`,
              description: `Show only favourited items in the collection.`,
            },
            search: { type: B.Boolean, defaultValue: !1 },
            searchFields: {
              type: B.Array,
              defaultValue: [{ fieldType: `default`, fieldName: `Title` }],
              title: `Fields`,
              control: {
                type: B.Object,
                controls: {
                  fieldType: {
                    type: B.Enum,
                    defaultValue: mn.Default,
                    options: [mn.Reference, mn.Default],
                    optionTitles: [`Yes`, `No`],
                    displaySegmentedControl: !0,
                    title: `Reference`,
                  },
                  fieldName: {
                    type: B.String,
                    defaultValue: `Title`,
                    placeholder: `CMS Field Name`,
                    preventLocalization: !0,
                  },
                  referenceFieldName: {
                    type: B.String,
                    defaultValue: ``,
                    placeholder: `CMS Field Name`,
                    preventLocalization: !0,
                    hidden: (e) => e.fieldType !== `reference`,
                  },
                },
              },
              description: `CMS fields to search`,
              hidden: (e) => !e.search,
            },
            scrollToTop: {
              type: B.Object,
              optional: !0,
              defaultValue: { scrollStyle: `smooth`, offset: 0 },
              title: `Scroll to Top`,
              description: `Scroll to the top of the Superfields component when page, filter, or sorting is changed.`,
              controls: {
                scrollStyle: {
                  type: B.Enum,
                  defaultValue: `smooth`,
                  options: [`smooth`, `instant`],
                  optionTitles: [`Smooth`, `Instant`],
                  displaySegmentedControl: !0,
                  title: `Scroll`,
                },
                offset: { type: B.Number, defaultValue: -32, step: 1, description: ` ` },
                paginationEnabled: { type: B.Boolean, defaultValue: !0, title: `Pagination` },
                filteringEnabled: { type: B.Boolean, defaultValue: !1, title: `Filters` },
                sortingEnabled: { type: B.Boolean, defaultValue: !1, title: `Sorting` },
              },
            },
            variant: {
              type: B.String,
              defaultValue: ``,
              placeholder: `Variant Name`,
              preventLocalization: !0,
              description: `Override the component's variant for responsive design.

*Note:* The component must be the only layer inside the Collection List to use this.

*Note:* Variant does not appear while editing. Preview your project to see the variant.`,
            },
            slugFieldName: {
              type: B.String,
              defaultValue: bn,
              placeholder: bn,
              description: `The name of the *Slug* field on the CMS collection.`,
            },
          },
        },
      }));
  });
function Sn(e) {
  let { superfieldsId: n, placeholderColor: r, searchIcon: i, xButton: o } = e,
    s = Ve(),
    l = t(null),
    [u, d] = c(!1),
    [f, m] = c(!1),
    [h, g, _] = lt(n, (e) => [e.search, e.totalItems, e.setSearch]);
  a(() => {
    m(!0);
  }, []);
  function y() {
    _(``);
  }
  let b = Cn(e.padding);
  return v(`div`, {
    "data-superfields": !0,
    id: s,
    style: {
      position: `relative`,
      ...Pe(e.fill),
      color: e.fontColor,
      borderRadius: e.radius,
      boxShadow: e.shadows,
      display: `flex`,
      flexDirection: `row`,
      alignItems: `center`,
      padding: e.padding,
      gap: e.gap,
      cursor: `text`,
      overflow: `hidden`,
      backdropFilter: e.bgBlur ? `blur(${e.bgBlur}px)` : void 0,
      ...e.font,
      ...e.style,
    },
    onClick: () => {
      l.current?.focus();
    },
    children: [
      i &&
        v(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: i.size,
          height: i.size,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: i.color,
          strokeWidth: i.lineWidth,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          style: { opacity: i.opacity, display: `block`, pointerEvents: `none` },
          children: [
            p(`path`, { d: `M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0` }),
            p(`path`, { d: `M21 21l-6 -6` }),
          ],
        }),
      p(`input`, {
        ref: l,
        type: `text`,
        style: { border: `none`, color: e.fontColor, background: `none`, ...e.font, ...e.style },
        placeholder: e.placeholderText.replace(`[items]`, String(!f || !g ? 0 : g)),
        autoFocus: e.autoFocus,
        value: h ?? ``,
        onChange: (e) => {
          _(e.target.value);
        },
        onFocus: () => d(!0),
        onBlur: () => d(!1),
      }),
      h &&
        f &&
        o &&
        v(`div`, {
          style: {
            position: `relative`,
            width: o.size,
            display: `flex`,
            alignItems: `center`,
            alignSelf: `stretch`,
          },
          children: [
            v(`svg`, {
              xmlns: `http://www.w3.org/2000/svg`,
              width: o.size,
              height: o.size,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: o.color,
              strokeWidth: o.lineWidth,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              style: { display: `block`, opacity: o.opacity },
              children: [p(`path`, { d: `M18 6l-12 12` }), p(`path`, { d: `M6 6l12 12` })],
            }),
            p(`button`, {
              style: {
                position: `absolute`,
                left: -e.gap,
                top: -b[0],
                right: -b[1],
                bottom: -b[2],
                cursor: `pointer`,
                background: `none`,
                border: `none`,
              },
              onClick: y,
              onFocus: () => d(!0),
              onBlur: () => d(!1),
            }),
          ],
        }),
      e.border && p(Me, { ...e.border }),
      e.focus && p(Me, { ...e.focus, animate: { opacity: +!!u } }),
      p(`style`, {
        dangerouslySetInnerHTML: {
          __html: `
                        #${s} input::placeholder { color: ${r}; user-select: none; }
                        #${s} input::-webkit-input-placeholder { color: ${r}; user-select: none; }
                        #${s} input::-moz-placeholder { color: ${r}; user-select: none; }
                        #${s} input:-ms-input-placeholder { color: ${r}; user-select: none; }
                        #${s} input:-moz-placeholder { color: ${r}; user-select: none; }
                        #${s} input:focus { outline: none; }`,
        },
      }),
    ],
  });
}
function Cn(e) {
  let t = e
    .trim()
    .split(/\s+/)
    .map((e) => parseInt(e, 10));
  if (t.length === 1) {
    let [e] = t;
    return [e, e, e, e];
  }
  if (t.length === 4) return [t[0], t[1], t[2], t[3]];
  throw Error(`Invalid padding input. Provide either one or four padding values.`);
}
var wn,
  Tn = e(() => {
    (y(),
      j(),
      S(),
      Ue(),
      dt(),
      (wn = B),
      (Sn.displayName = `Search Bar`),
      L(Sn, {
        ...Ae(),
        placeholderText: {
          type: B.String,
          defaultValue: `Search [items] items...`,
          title: `Placeholder`,
          description: `*[items]*: number of CMS items`,
        },
        autoFocus: { type: B.Boolean, defaultValue: !1, title: `Auto-Focus` },
        fill: Fe({ color: `#EFEFEF` }),
        fontColor: { type: B.Color, defaultValue: `#000` },
        placeholderColor: { type: B.Color, defaultValue: `rgba(0, 0, 0, 0.5)` },
        font: {
          type: B.Font,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 14, lineHeight: 1.4 },
        },
        searchIcon: {
          type: B.Object,
          optional: !0,
          defaultValue: { color: `$000`, size: 16, lineWidth: 2.5, opacity: 0.5 },
          controls: {
            color: { type: B.Color, defaultValue: `$000` },
            size: { type: B.Number, defaultValue: 16, min: 1, step: 1 },
            lineWidth: { type: B.Number, defaultValue: 2.5, min: 0.1, max: 5, step: 0.1 },
            opacity: { type: B.Number, defaultValue: 1, min: 0, max: 1, step: 0.01 },
          },
        },
        xButton: {
          type: B.Object,
          optional: !0,
          defaultValue: { color: `#000`, size: 14, lineWidth: 2.5, opacity: 0.5 },
          controls: {
            color: { type: B.Color, defaultValue: `#000` },
            size: { type: B.Number, defaultValue: 14, min: 1, step: 1 },
            lineWidth: { type: B.Number, defaultValue: 2.5, min: 0.1, max: 5, step: 0.1 },
            opacity: { type: B.Number, defaultValue: 0.5, min: 0, max: 1, step: 0.01 },
          },
        },
        gap: { type: B.Number, defaultValue: 8, min: 0, step: 1 },
        padding: { type: wn.Padding, defaultValue: `8px 12px 8px 12px` },
        radius: { type: wn.BorderRadius, defaultValue: `8px` },
        border: X(),
        shadows: { type: wn.BoxShadow },
        bgBlur: { type: B.Number, min: 0, max: 100, step: 1, displayStepper: !0, title: `BG Blur` },
        focus: {
          type: B.Object,
          optional: !0,
          defaultValue: { color: `#0075FF`, width: 2, style: `solid` },
          buttonTitle: `Border`,
          controls: {
            color: { type: B.Color, defaultValue: `#0075FF`, title: `Color` },
            width: {
              type: B.FusedNumber,
              defaultValue: 2,
              toggleKey: `widthIsMixed`,
              toggleTitles: [`All`, `Individual`],
              valueKeys: [`widthTop`, `widthRight`, `widthBottom`, `widthLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            style: {
              type: B.Enum,
              defaultValue: `solid`,
              options: [`solid`, `dashed`, `dotted`, `double`],
              optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
            },
            transition: {
              type: B.Transition,
              defaultValue: { type: `spring`, duration: 0.2, bounce: 0 },
            },
          },
        },
      }));
  });
function En(e) {
  let t = e.mode === `advanced`,
    n = e.settings ?? On,
    r = t ? n.superfieldsId : 0,
    [i, o] = lt(
      r,
      (e) => [e.setSearchFields, e.searchFields],
      (t) => {
        t.searchFields = e.searchFields;
      }
    );
  return (
    a(
      () => () => {
        i(null);
      },
      [i]
    ),
    a(() => {
      o !== e.searchFields && i(e.searchFields);
    }, [e.searchFields, o, i]),
    p(Sn, {
      superfieldsId: r,
      placeholderText: e.placeholderText,
      autoFocus: t ? n.autoFocus : !1,
      fill: e.styling.fill,
      fontColor: e.styling.font.fontColor,
      placeholderColor: e.styling.font.placeholderColor,
      font: e.styling.font.font,
      searchIcon: e.styling.icons.searchIcon ?? null,
      xButton: e.styling.icons.xButton ?? null,
      border: e.styling.border,
      gap: e.styling.gap,
      padding: e.styling.padding,
      radius: e.styling.radius,
      shadows: e.styling.shadows ?? ``,
      bgBlur: e.styling.bgBlur ?? 0,
      focus: e.styling.focus,
      style: e.style ?? {},
    })
  );
}
var Dn,
  On,
  kn = e(() => {
    (y(),
      j(),
      S(),
      Ue(),
      Xe(),
      Tn(),
      dt(),
      (Dn = B),
      (On = { superfieldsId: 0, autoFocus: !1 }),
      (En.displayName = `Search Bar`),
      We(En, {
        placeholderText: {
          type: B.String,
          defaultValue: `Search [items] items...`,
          title: `Text`,
          description: `Placeholder text. *[items]*: number of CMS items`,
        },
        styling: {
          type: B.Object,
          title: `Styling 🎨`,
          buttonTitle: `Options`,
          description: `Update the filter styling.`,
          controls: {
            fill: Fe({ color: `#EFEFEF`, title: `Background` }),
            font: {
              type: B.Object,
              title: `Font`,
              buttonTitle: `Customize`,
              controls: {
                font: {
                  type: `font`,
                  controls: `extended`,
                  defaultFontType: `sans-serif`,
                  defaultValue: { fontSize: 14, lineHeight: 1.4 },
                },
                fontColor: { type: B.Color, defaultValue: `#000`, title: `Color` },
                placeholderColor: {
                  type: B.Color,
                  defaultValue: `rgba(0, 0, 0, 0.5)`,
                  title: `Placeholder`,
                },
              },
            },
            icons: {
              buttonTitle: `Customize`,
              type: B.Object,
              controls: {
                searchIcon: {
                  type: B.Object,
                  optional: !0,
                  defaultValue: { color: `#000`, size: 16, lineWidth: 2.5, opacity: 0.5 },
                  controls: {
                    color: { type: B.Color, defaultValue: `#000` },
                    size: { type: B.Number, defaultValue: 16, min: 1, step: 1 },
                    lineWidth: { type: B.Number, defaultValue: 2.5, min: 0.1, max: 5, step: 0.1 },
                    opacity: { type: B.Number, defaultValue: 1, min: 0, max: 1, step: 0.01 },
                  },
                },
                xButton: {
                  type: B.Object,
                  optional: !0,
                  defaultValue: { color: `#000`, size: 14, lineWidth: 2.5, opacity: 0.5 },
                  controls: {
                    color: { type: B.Color, defaultValue: `#000` },
                    size: { type: B.Number, defaultValue: 14, min: 1, step: 1 },
                    lineWidth: { type: B.Number, defaultValue: 2.5, min: 0.1, max: 5, step: 0.1 },
                    opacity: { type: B.Number, defaultValue: 0.5, min: 0, max: 1, step: 0.01 },
                  },
                },
              },
            },
            border: X({ title: `Border` }),
            gap: { type: B.Number, defaultValue: 8, min: 0, step: 1, displayStepper: !0 },
            padding: { type: Dn.Padding, defaultValue: `10px 12px 10px 12px` },
            radius: { type: Dn.BorderRadius, defaultValue: `8px` },
            shadows: { type: Dn.BoxShadow },
            bgBlur: {
              type: B.Number,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
              title: `BG Blur`,
            },
            focus: {
              type: B.Object,
              optional: !0,
              icon: `effect`,
              defaultValue: { color: `#0075FF`, width: 2, style: `solid` },
              buttonTitle: `Border`,
              controls: {
                color: { type: B.Color, defaultValue: `#0075FF`, title: `Color` },
                width: {
                  type: B.FusedNumber,
                  defaultValue: 2,
                  toggleKey: `widthIsMixed`,
                  toggleTitles: [`All`, `Individual`],
                  valueKeys: [`widthTop`, `widthRight`, `widthBottom`, `widthLeft`],
                  valueLabels: [`T`, `R`, `B`, `L`],
                  min: 0,
                },
                style: {
                  type: B.Enum,
                  defaultValue: `solid`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                },
                transition: {
                  type: B.Transition,
                  defaultValue: { type: `spring`, duration: 0.2, bounce: 0 },
                },
              },
            },
          },
        },
        searchFields: {
          type: B.Array,
          defaultValue: [{ fieldType: `default`, fieldName: `Title` }],
          title: `Fields`,
          control: {
            type: B.Object,
            controls: {
              fieldType: {
                type: B.Enum,
                defaultValue: `default`,
                options: [`reference`, `default`],
                optionTitles: [`Yes`, `No`],
                displaySegmentedControl: !0,
                title: `Reference`,
                description: `Enable for reference or multi-reference field`,
              },
              fieldName: {
                type: B.String,
                defaultValue: `Title`,
                placeholder: `CMS Field Name`,
                preventLocalization: !0,
                description: `The exact name of the field to filter by.`,
              },
              referenceFieldName: {
                type: B.String,
                defaultValue: ``,
                placeholder: `CMS Field Name`,
                preventLocalization: !0,
                description: `The exact name of the field on the referenced collection to filter by.`,
                hidden: (e) => e.fieldType !== `reference`,
              },
            },
          },
          description: `CMS fields to search`,
        },
        settings: {
          type: B.Object,
          title: `Settings`,
          description: `Advanced setup for Superfields.`,
          buttonTitle: `Options`,
          advanced: !0,
          controls: {
            ...Ae(),
            autoFocus: { type: B.Boolean, defaultValue: !1, title: `Auto-Focus` },
          },
        },
      }));
  }),
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
  tr;
e(() => {
  (y(),
    j(),
    E(),
    S(),
    Vt(),
    xn(),
    kn(),
    _e(),
    Te(),
    De(),
    H(),
    ve(),
    G(),
    ke(),
    (An = ue(D)),
    (jn = k(Ee)),
    (Mn = k(Pt)),
    (Nn = k(En)),
    (Pn = k(yn)),
    (Fn = ue(C.main)),
    (In = k(W)),
    (Ln = {
      BNoWoKYE4: `(min-width: 810px) and (max-width: 1199.98px)`,
      EfRAOHOUB: `(min-width: 1200px)`,
      XC8SGXMPX: `(max-width: 809.98px)`,
    }),
    (Rn = []),
    (zn = `framer-KdP99`),
    (Bn = {
      BNoWoKYE4: `framer-v-1h0cis7`,
      EfRAOHOUB: `framer-v-1pgkris`,
      XC8SGXMPX: `framer-v-7sdmug`,
    }),
    (Vn = (e, t, n) => (e && t ? `position` : n)),
    (Hn = {
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
    (Un = {
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
    (Wn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.4, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Gn = {
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
    (Kn = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (qn = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Jn = () => ({
      from: { alias: `xIWO0KgZX`, data: q, type: `Collection` },
      select: [
        { collection: `xIWO0KgZX`, name: `btGpJvFlp`, type: `Identifier` },
        { collection: `xIWO0KgZX`, name: `i9ILnbAeX`, type: `Identifier` },
        { collection: `xIWO0KgZX`, name: `MV8vbHLj9`, type: `Identifier` },
        { collection: `xIWO0KgZX`, name: `AlH2wYsQg`, type: `Identifier` },
        { collection: `xIWO0KgZX`, name: `MTatto1jK`, type: `Identifier` },
        { collection: `xIWO0KgZX`, name: `id`, type: `Identifier` },
      ],
    })),
    (Yn = ({ query: e, pageSize: t, children: n }) => n(ae(e))),
    (Xn = (e, t) => `translate(-50%, -50%) ${t}`),
    (Zn = { Desktop: `EfRAOHOUB`, Phone: `XC8SGXMPX`, Tablet: `BNoWoKYE4` }),
    (Qn = ({ value: e }) =>
      de()
        ? null
        : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    ($n = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Zn[r.variant] ?? r.variant ?? `EfRAOHOUB`,
    })),
    (er = O(
      h(function (e, n) {
        let r = t(null),
          i = n ?? r,
          a = ee(),
          { activeLocale: o, setLocale: c } = se();
        le();
        let { style: d, className: f, layoutId: m, variant: h, ...g } = $n(e);
        fe(u(() => Oe({}, o), [o]));
        let [_, y] = F(h, Ln, !1),
          x = A(zn, U, xe, we),
          S = l(P)?.isLayoutTemplate,
          E = !!l(w)?.transition?.layout,
          te = Vn(S, E);
        return (
          N({}),
          p(P.Provider, {
            value: {
              activeVariantId: _,
              humanReadableVariantMap: Zn,
              primaryVariantId: `EfRAOHOUB`,
              variantClassNames: Bn,
            },
            children: v(T, {
              id: m ?? a,
              children: [
                p(Qn, { value: `html body { background: rgb(255, 255, 255); }` }),
                v(C.div, {
                  ...g,
                  className: A(x, `framer-1pgkris`, f),
                  ref: i,
                  style: { ...d },
                  children: [
                    v(Fn, {
                      animate: Hn,
                      className: `framer-qcz92v`,
                      "data-framer-appear-id": `qcz92v`,
                      "data-framer-name": `Main`,
                      initial: Un,
                      layout: te,
                      optimized: !0,
                      children: [
                        v(`section`, {
                          className: `framer-h06ytq`,
                          "data-framer-name": `Content`,
                          children: [
                            v(`header`, {
                              className: `framer-1imtfu0`,
                              "data-framer-name": `Header`,
                              children: [
                                p(An, {
                                  __fromCanvasComponent: !0,
                                  animate: Wn,
                                  children: p(s, {
                                    children: p(`h1`, {
                                      className: `framer-styles-preset-ul51j9`,
                                      "data-styles-preset": `hPRt9GJWZ`,
                                      dir: `auto`,
                                      children: `Blog`,
                                    }),
                                  }),
                                  className: `framer-d4wfl9`,
                                  "data-framer-appear-id": `d4wfl9`,
                                  effect: Gn,
                                  fonts: [`Inter`],
                                  initial: Un,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                p(`div`, {
                                  className: `framer-uxvm95`,
                                  "data-framer-name": `Subline`,
                                  children: p(D, {
                                    __fromCanvasComponent: !0,
                                    children: p(s, {
                                      children: p(`h3`, {
                                        className: `framer-styles-preset-1942lag`,
                                        "data-styles-preset": `jajJzupWJ`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Read our latest articles.`,
                                      }),
                                    }),
                                    className: `framer-eor6wr`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            v(`div`, {
                              className: `framer-1f5cdx`,
                              "data-framer-name": `Top`,
                              children: [
                                p(I, {
                                  children: p(ce, {
                                    className: `framer-1l5k0ry-container`,
                                    isModuleExternal: !0,
                                    nodeId: `jJfvPEezc`,
                                    scopeId: `dnRb93HuB`,
                                    children: p(ie, {
                                      breakpoint: _,
                                      overrides: {
                                        BNoWoKYE4: { style: { width: `100%` } },
                                        XC8SGXMPX: {
                                          dropdownStyle: {
                                            arrow: { gap: 10, size: 12, stroke: 2 },
                                            bgBlur: 5,
                                            fill: {
                                              color: `rgb(255, 255, 255)`,
                                              colorA: `rgb(255, 255, 255)`,
                                              colorB: `rgb(189, 189, 189)`,
                                              gradientAngle: 0,
                                              type: `color`,
                                            },
                                            font: {
                                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                              fontSize: `14px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `1.4em`,
                                            },
                                            fontColor: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                            padding: `0px`,
                                            radius: `4px`,
                                            shadows: ``,
                                            transition: {
                                              bounce: 0,
                                              delay: 0,
                                              duration: 0.2,
                                              type: `spring`,
                                            },
                                          },
                                          filterTypeOption: `dropdown`,
                                        },
                                      },
                                      children: p(Pt, {
                                        buttonGroupStyle: {
                                          bgBlur: 0,
                                          defaultFontColor: `rgb(64, 64, 64)`,
                                          dividerStyle: {
                                            color: `rgba(0, 0, 0, 0.25)`,
                                            marginH: 0,
                                            marginV: 0,
                                            rounded: !1,
                                            width: 1,
                                          },
                                          fill: {
                                            colorAOff: `rgb(237, 237, 237)`,
                                            colorAOn: `rgb(112, 179, 255)`,
                                            colorBOff: `rgb(204, 204, 204)`,
                                            colorBOn: `rgb(0, 117, 255)`,
                                            colorOff: `rgba(255, 255, 255, 0)`,
                                            colorOn: `rgb(245, 245, 245)`,
                                            gradientAngle: 0,
                                            type: `color`,
                                          },
                                          font: {
                                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                            fontSize: `14px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `-0.05em`,
                                            lineHeight: `1em`,
                                          },
                                          layout: {
                                            direction: `horizontal`,
                                            distribute: `flex-start`,
                                            gapH: 8,
                                            gapV: 8,
                                            width: `fit`,
                                            wrap: !1,
                                          },
                                          padding: `4px 8px 4px 8px`,
                                          radius: `8px`,
                                          selectedFontColor: `rgb(0, 0, 0)`,
                                          transition: {
                                            bounce: 0,
                                            delay: 0,
                                            duration: 0.7,
                                            type: `spring`,
                                          },
                                        },
                                        checkboxStyle: {
                                          fillOff: `rgb(237, 237, 237)`,
                                          fillOn: `rgb(0, 117, 255)`,
                                          icon: {
                                            colorOn: `rgb(255, 255, 255)`,
                                            lineWidth: 2,
                                            rounded: !0,
                                            size: 16,
                                          },
                                          radius: `6px`,
                                          size: 24,
                                          transition: {
                                            bounce: 0,
                                            delay: 0,
                                            duration: 0.2,
                                            type: `spring`,
                                          },
                                        },
                                        collectionList: [
                                          p(C.div, {
                                            className: `framer-i07qi2`,
                                            children: p(R, {
                                              children: p(Yn, {
                                                query: Jn(),
                                                children: (e, t, n) =>
                                                  p(b, {
                                                    children: e?.map(
                                                      (
                                                        {
                                                          AlH2wYsQg: e,
                                                          btGpJvFlp: t,
                                                          i9ILnbAeX: n,
                                                          id: r,
                                                          MTatto1jK: i,
                                                          MV8vbHLj9: a,
                                                        },
                                                        s
                                                      ) => (
                                                        (t ??= ``),
                                                        (a ??= ``),
                                                        (i ??= ``),
                                                        p(
                                                          T,
                                                          {
                                                            id: `xIWO0KgZX-${r}`,
                                                            children: p(he.Provider, {
                                                              value: { btGpJvFlp: t },
                                                              children: p(M, {
                                                                href: {
                                                                  pathVariables: { btGpJvFlp: t },
                                                                  webPageId: `GW53l1Are`,
                                                                },
                                                                motionChild: !0,
                                                                nodeId: `lLI_z5uFe`,
                                                                openInNewTab: !1,
                                                                scopeId: `dnRb93HuB`,
                                                                children: p(C.a, {
                                                                  className: `framer-e79kj8 framer-tna0v0`,
                                                                  "data-framer-name": `Blog Item`,
                                                                  children: p(I, {
                                                                    height: 382,
                                                                    width: `174.6667px`,
                                                                    children: p(ce, {
                                                                      className: `framer-1tf3lt0-container`,
                                                                      "data-framer-name": `Blog Card`,
                                                                      inComponentSlot: !0,
                                                                      name: `Blog Card`,
                                                                      nodeId: `ouShHIm1L`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `dnRb93HuB`,
                                                                      children: p(Ee, {
                                                                        G28a3xS1l: Kn(n),
                                                                        height: `100%`,
                                                                        id: `ouShHIm1L`,
                                                                        layoutId: `ouShHIm1L`,
                                                                        name: `Blog Card`,
                                                                        Pjf9geszM: K.AlH2wYsQg?.(
                                                                          e,
                                                                          o
                                                                        ),
                                                                        style: { width: `100%` },
                                                                        variant: qn(`PCX51OaaK`),
                                                                        VtVUt2K0x: a,
                                                                        width: `100%`,
                                                                        zMelyq2xf: i,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          },
                                                          r
                                                        )
                                                      )
                                                    ),
                                                  }),
                                              }),
                                            }),
                                          }),
                                        ],
                                        dropdownStyle: {
                                          arrow: { gap: 10, size: 12, stroke: 2 },
                                          bgBlur: 5,
                                          font: {
                                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                            fontSize: `14px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.4em`,
                                          },
                                          fontColor: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                          padding: `0px`,
                                          radius: `4px`,
                                          shadows: ``,
                                          transition: {
                                            bounce: 0,
                                            delay: 0,
                                            duration: 0.2,
                                            type: `spring`,
                                          },
                                        },
                                        filterTypeOption: `buttonGroup`,
                                        filterTypeToggle: `toggleSwitch`,
                                        height: `100%`,
                                        id: `jJfvPEezc`,
                                        layoutId: `jJfvPEezc`,
                                        mode: `advanced`,
                                        multiSelect: !1,
                                        needHelp: { info: `info` },
                                        options: {
                                          allOption: !0,
                                          allText: `All`,
                                          defaultValue: ``,
                                          defaultValueEnabled: !1,
                                          optionOrder: `default`,
                                          placeholder: `[Preview posts]`,
                                          textCondition: `equals`,
                                        },
                                        settings: { id: 0, manualOptions: !1, optionValues: [] },
                                        setup: {
                                          fieldName: `Category`,
                                          fieldType: `option`,
                                          filterBy: `field`,
                                          isCommaSeparatedTextField: !1,
                                          referenceFieldName: `Title`,
                                          referenceFieldType: `text`,
                                        },
                                        toggleMultiOptions: {
                                          allOption: !0,
                                          allText: `All`,
                                          defaultValue: `all`,
                                          noOption: !1,
                                          noText: `Off`,
                                          order: `yesNo`,
                                          yesOption: !0,
                                          yesText: `On`,
                                        },
                                        toggleSwitchStyle: {
                                          fill: {
                                            colorAOff: `rgb(237, 237, 237)`,
                                            colorAOn: `rgb(112, 179, 255)`,
                                            colorBOff: `rgb(204, 204, 204)`,
                                            colorBOn: `rgb(0, 117, 255)`,
                                            colorOff: `rgb(237, 237, 237)`,
                                            colorOn: `rgb(0, 117, 255)`,
                                            gradientAngle: 0,
                                            type: `color`,
                                          },
                                          height: 32,
                                          padding: 4,
                                          radius: 16,
                                          shadows: `0px 2px 4px 0px rgba(0, 0, 0, 0.2)`,
                                          switchFill: {
                                            colorAOff: `rgb(255, 255, 255)`,
                                            colorAOn: `rgb(255, 255, 255)`,
                                            colorBOff: `rgb(214, 214, 214)`,
                                            colorBOn: `rgb(214, 214, 214)`,
                                            colorOff: `rgb(255, 255, 255)`,
                                            colorOn: `rgb(255, 255, 255)`,
                                            gradientAngle: 0,
                                            type: `color`,
                                          },
                                          transition: {
                                            bounce: 0,
                                            delay: 0,
                                            duration: 0.2,
                                            type: `spring`,
                                          },
                                        },
                                        toggleTwoStateOptions: {
                                          defaultValue: `off`,
                                          offState: `all`,
                                          onState: `on`,
                                        },
                                        toggleTwoStateText: {
                                          font: {
                                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                            fontSize: `14px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.4em`,
                                          },
                                          fontColor: `rgb(153, 153, 153)`,
                                          gap: 10,
                                          location: `right`,
                                          offText: `Off`,
                                          onText: `On`,
                                        },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                p(I, {
                                  children: p(ce, {
                                    className: `framer-15j7za-container`,
                                    isModuleExternal: !0,
                                    nodeId: `RrfpTqLGN`,
                                    scopeId: `dnRb93HuB`,
                                    children: p(ie, {
                                      breakpoint: _,
                                      overrides: { XC8SGXMPX: { style: { width: `100%` } } },
                                      children: p(En, {
                                        height: `100%`,
                                        id: `RrfpTqLGN`,
                                        layoutId: `RrfpTqLGN`,
                                        mode: `basic`,
                                        needHelp: { info: `info` },
                                        placeholderText: `Search`,
                                        searchFields: [
                                          {
                                            fieldName: `Category`,
                                            fieldType: `default`,
                                            referenceFieldName: ``,
                                          },
                                          {
                                            fieldName: `Title`,
                                            fieldType: `reference`,
                                            referenceFieldName: `Title`,
                                          },
                                        ],
                                        settings: { autoFocus: !1, superfieldsId: 0 },
                                        style: { maxWidth: `100%`, width: `100%` },
                                        styling: {
                                          bgBlur: 0,
                                          focus: {
                                            color: `rgb(245, 245, 245)`,
                                            style: `solid`,
                                            transition: {
                                              bounce: 0,
                                              delay: 0,
                                              duration: 0.2,
                                              type: `spring`,
                                            },
                                            width: 2,
                                            widthBottom: 2,
                                            widthIsMixed: !1,
                                            widthLeft: 2,
                                            widthRight: 2,
                                            widthTop: 2,
                                          },
                                          font: {
                                            font: {
                                              fontFamily: `"Manrope", "Manrope Placeholder", sans-serif`,
                                              fontSize: `12px`,
                                              fontStyle: `normal`,
                                              fontWeight: 500,
                                              letterSpacing: `-0.04em`,
                                              lineHeight: `100%`,
                                            },
                                            fontColor: `rgb(0, 0, 0)`,
                                            placeholderColor: `rgba(0, 0, 0, 0.48)`,
                                          },
                                          gap: 4,
                                          icons: {
                                            searchIcon: {
                                              color: `rgb(0, 0, 0)`,
                                              lineWidth: 2.5,
                                              opacity: 0.48,
                                              size: 14,
                                            },
                                            xButton: {
                                              color: `rgb(0, 0, 0)`,
                                              lineWidth: 2.5,
                                              opacity: 0.5,
                                              size: 14,
                                            },
                                          },
                                          padding: `4px 8px 4px 8px`,
                                          radius: `8px`,
                                          shadows: ``,
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
                        p(`section`, {
                          className: `framer-5rqkl2`,
                          "data-framer-name": `Portfolio`,
                          children: p(I, {
                            children: p(ce, {
                              className: `framer-71xtzg-container`,
                              isModuleExternal: !0,
                              nodeId: `Eey7ryJMh`,
                              scopeId: `dnRb93HuB`,
                              children: p(ie, {
                                breakpoint: _,
                                overrides: {
                                  BNoWoKYE4: {
                                    styling: {
                                      layout: {
                                        alignH: `start`,
                                        alignV: `start`,
                                        columnCount: 2,
                                        columns: `fixed`,
                                        direction: `vertical`,
                                        distribute: `start`,
                                        gap: 10,
                                        gapH: 12,
                                        gapV: 12,
                                        gridAlign: `center`,
                                        gridAlignV: `start`,
                                        gridHeight: 200,
                                        gridHeightType: `fit`,
                                        gridWidth: 200,
                                        gridWidthType: `min`,
                                        masonryAlign: `center`,
                                        masonryColumns: 3,
                                        masonryItemWidth: `fill`,
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingIsMixed: !1,
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        type: `grid`,
                                        wrap: !1,
                                      },
                                      transition: { duration: 0, type: `tween` },
                                    },
                                  },
                                  XC8SGXMPX: {
                                    styling: {
                                      layout: {
                                        alignH: `start`,
                                        alignV: `start`,
                                        columnCount: 1,
                                        columns: `fixed`,
                                        direction: `vertical`,
                                        distribute: `start`,
                                        gap: 10,
                                        gapH: 12,
                                        gapV: 12,
                                        gridAlign: `center`,
                                        gridAlignV: `start`,
                                        gridHeight: 200,
                                        gridHeightType: `fit`,
                                        gridWidth: 200,
                                        gridWidthType: `min`,
                                        masonryAlign: `center`,
                                        masonryColumns: 3,
                                        masonryItemWidth: `fill`,
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingIsMixed: !1,
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        type: `grid`,
                                        wrap: !1,
                                      },
                                      transition: { duration: 0, type: `tween` },
                                    },
                                  },
                                },
                                children: p(yn, {
                                  collectionList: [
                                    p(C.div, {
                                      className: `framer-i07qi2`,
                                      children: p(R, {
                                        children: p(Yn, {
                                          query: Jn(),
                                          children: (e, t, n) =>
                                            p(b, {
                                              children: e?.map(
                                                (
                                                  {
                                                    AlH2wYsQg: e,
                                                    btGpJvFlp: t,
                                                    i9ILnbAeX: n,
                                                    id: r,
                                                    MTatto1jK: i,
                                                    MV8vbHLj9: a,
                                                  },
                                                  s
                                                ) => (
                                                  (t ??= ``),
                                                  (a ??= ``),
                                                  (i ??= ``),
                                                  p(
                                                    T,
                                                    {
                                                      id: `xIWO0KgZX-${r}`,
                                                      children: p(he.Provider, {
                                                        value: { btGpJvFlp: t },
                                                        children: p(M, {
                                                          href: {
                                                            pathVariables: { btGpJvFlp: t },
                                                            webPageId: `GW53l1Are`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `lLI_z5uFe`,
                                                          openInNewTab: !1,
                                                          scopeId: `dnRb93HuB`,
                                                          children: p(C.a, {
                                                            className: `framer-e79kj8 framer-tna0v0`,
                                                            "data-framer-name": `Blog Item`,
                                                            children: p(I, {
                                                              height: 382,
                                                              width: `174.6667px`,
                                                              children: p(ce, {
                                                                className: `framer-1tf3lt0-container`,
                                                                "data-framer-name": `Blog Card`,
                                                                inComponentSlot: !0,
                                                                name: `Blog Card`,
                                                                nodeId: `ouShHIm1L`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `dnRb93HuB`,
                                                                children: p(Ee, {
                                                                  G28a3xS1l: Kn(n),
                                                                  height: `100%`,
                                                                  id: `ouShHIm1L`,
                                                                  layoutId: `ouShHIm1L`,
                                                                  name: `Blog Card`,
                                                                  Pjf9geszM: K.AlH2wYsQg?.(e, o),
                                                                  style: { width: `100%` },
                                                                  variant: qn(`PCX51OaaK`),
                                                                  VtVUt2K0x: a,
                                                                  width: `100%`,
                                                                  zMelyq2xf: i,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    r
                                                  )
                                                )
                                              ),
                                            }),
                                        }),
                                      }),
                                    }),
                                  ],
                                  emptyState: [
                                    p(C.div, {
                                      className: `framer-rlga3k`,
                                      "data-framer-name": `Empty Frame`,
                                      children: p(D, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(`h2`, {
                                            className: `framer-styles-preset-63r6z3`,
                                            "data-styles-preset": `zWe8uO5eV`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                            },
                                            children: `No items found.`,
                                          }),
                                        }),
                                        className: `framer-qfrj27`,
                                        fonts: [`Inter`],
                                        transformTemplate: Xn,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                  height: `100%`,
                                  id: `Eey7ryJMh`,
                                  layoutId: `Eey7ryJMh`,
                                  mode: `advanced`,
                                  needHelp: { info: `info` },
                                  settings: {
                                    favouritesOnly: !1,
                                    id: 0,
                                    randomization: !1,
                                    scrollToTop: {
                                      filteringEnabled: !1,
                                      offset: 0,
                                      paginationEnabled: !0,
                                      scrollStyle: `smooth`,
                                      sortingEnabled: !1,
                                    },
                                    search: !1,
                                    searchFields: [
                                      {
                                        fieldName: `Title`,
                                        fieldType: `default`,
                                        referenceFieldName: ``,
                                      },
                                    ],
                                    slugFieldName: `Slug`,
                                    variant: ``,
                                  },
                                  style: { width: `100%` },
                                  styling: {
                                    layout: {
                                      alignH: `start`,
                                      alignV: `start`,
                                      columnCount: 3,
                                      columns: `fixed`,
                                      direction: `vertical`,
                                      distribute: `start`,
                                      gap: 10,
                                      gapH: 12,
                                      gapV: 12,
                                      gridAlign: `center`,
                                      gridAlignV: `start`,
                                      gridHeight: 200,
                                      gridHeightType: `fit`,
                                      gridWidth: 200,
                                      gridWidthType: `min`,
                                      masonryAlign: `center`,
                                      masonryColumns: 3,
                                      masonryItemWidth: `fill`,
                                      padding: 0,
                                      paddingBottom: 0,
                                      paddingIsMixed: !1,
                                      paddingLeft: 0,
                                      paddingRight: 0,
                                      paddingTop: 0,
                                      type: `grid`,
                                      wrap: !1,
                                    },
                                    transition: { duration: 0, type: `tween` },
                                  },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    p(I, {
                      children: p(ce, {
                        className: `framer-1pnyqrh-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: te,
                        nodeId: `gHlj32yoF`,
                        scopeId: `dnRb93HuB`,
                        children: p(W, {
                          height: `100%`,
                          id: `gHlj32yoF`,
                          intensity: 10,
                          layoutId: `gHlj32yoF`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-KdP99.framer-tna0v0, .framer-KdP99 .framer-tna0v0 { display: block; }`,
        `.framer-KdP99.framer-1pgkris { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-KdP99 .framer-qcz92v { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 150px 32px 0px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-KdP99 .framer-h06ytq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 32px 0px; position: relative; width: 100%; }`,
        `.framer-KdP99 .framer-1imtfu0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 112px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-KdP99 .framer-d4wfl9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-KdP99 .framer-uxvm95 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-KdP99 .framer-eor6wr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-KdP99 .framer-1f5cdx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 82px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-KdP99 .framer-1l5k0ry-container, .framer-KdP99 .framer-1pnyqrh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-KdP99 .framer-i07qi2 { display: grid; gap: 24px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 564px; }`,
        `.framer-KdP99 .framer-e79kj8 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-KdP99 .framer-1tf3lt0-container, .framer-KdP99 .framer-71xtzg-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-KdP99 .framer-15j7za-container { flex: 1 0 0px; height: auto; max-width: 160px; position: relative; width: 1px; }`,
        `.framer-KdP99 .framer-5rqkl2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-KdP99 .framer-rlga3k { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; height: 247px; overflow: hidden; position: relative; width: 503px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-KdP99 .framer-qfrj27 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }`,
        ...V,
        ...ye,
        ...Se,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-KdP99.framer-1pgkris { width: 810px; } .framer-KdP99 .framer-1l5k0ry-container { flex: 1 0 0px; width: 1px; }}`,
        `@media (max-width: 809.98px) { .framer-KdP99.framer-1pgkris { width: 390px; } .framer-KdP99 .framer-qcz92v { padding: 150px 24px 0px 24px; } .framer-KdP99 .framer-1f5cdx { flex-direction: column; gap: 12px; justify-content: center; } .framer-KdP99 .framer-1l5k0ry-container { order: 0; } .framer-KdP99 .framer-15j7za-container { flex: none; max-width: unset; order: 1; width: 100%; }}`,
      ],
      `framer-KdP99`
    )),
    (er.displayName = `Journal`),
    (er.defaultProps = { height: 2165, width: 1200 }),
    te(
      er,
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
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
          ],
        },
        ...jn,
        ...Mn,
        ...Nn,
        ...Pn,
        ...In,
        ...oe(ge),
        ...oe(be),
        ...oe(Ce),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (er.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = z.get(Jn(), n);
        return Promise.allSettled([
          r.preload(),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => re(Ee, {}, t)));
          })(),
        ]);
      },
    }),
    (tr = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerdnRb93HuB`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `2165`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BNoWoKYE4":{"layout":["fixed","auto"]},"XC8SGXMPX":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { tr as __FramerMetadata__, er as default, Rn as queryParamNames };
//# sourceMappingURL=cF0so-EurhDmFD-WxL4PvJqz4I2T5tsZyalGrLX9mIE.DXhovdmW.mjs.map
