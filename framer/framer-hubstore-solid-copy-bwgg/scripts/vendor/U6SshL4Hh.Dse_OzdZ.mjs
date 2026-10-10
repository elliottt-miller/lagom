import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  c as a,
  j as o,
  l as s,
  s as c,
  v as l,
  x as u,
} from "./react.ClsXD4bF.mjs";
import { a as d, r as f, t as p, w as m } from "./motion.ClyXVVeQ.mjs";
import {
  A as h,
  Ct as g,
  D as _,
  Dt as v,
  F as y,
  M as b,
  Ot as x,
  Tt as S,
  U as C,
  Z as w,
  ft as T,
  i as ee,
  j as E,
  n as D,
  o as O,
  x as k,
  yt as A,
} from "./framer.CbUxDv78.mjs";
import { i as j, r as M } from "./UG26Ix8eM.CJdBkykD.mjs";
import { i as N, r as P } from "./dZGFy1Qiv.CnyrEsDr.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
  R,
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
  Y,
  X,
  Z = e(() => {
    (c(),
      w(),
      p(),
      t(),
      P(),
      j(),
      (I = C(M)),
      (L = [`Z9YOVMygp`, `pvIW0rRZN`]),
      (R = `framer-vSWjb`),
      (z = { pvIW0rRZN: `framer-v-6910c8`, Z9YOVMygp: `framer-v-jsfe35` }),
      (B = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (V = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (H = (e, t) => (e ? `ll9j_htnd` : `Mkt_PyDB5`)),
      (U = (e, t) => (e ? `xsd1cgohu` : `DLV0OIv0V`)),
      (W = ({ query: e, pageSize: t, children: n }) => n(g(e))),
      (G = ({ value: e, children: t }) => {
        let n = r(d),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (K = m.create(n)),
      (q = { Primary: `Z9YOVMygp`, Small: `pvIW0rRZN` }),
      (J = ({ active: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        v9h57AbX4: e ?? i.v9h57AbX4 ?? `Active`,
        variant: q[i.variant] ?? i.variant ?? `Z9YOVMygp`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = x(
        l(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = u(),
            { activeLocale: c, setLocale: l } = A();
          T();
          let {
              style: d,
              className: p,
              layoutId: g,
              variant: b,
              v9h57AbX4: x,
              V16NXyNwYZ9YOVMygp: C,
              pRSYJyzWhZ9YOVMygp: w,
              idZ9YOVMygp: E,
              ...O
            } = J(e),
            {
              baseVariant: j,
              classNames: P,
              clearLoadingGesture: I,
              gestureHandlers: q,
              gestureVariant: X,
              isLoading: Z,
              setGestureState: te,
              setVariant: ne,
              variants: Q,
            } = v({
              cycleOrder: L,
              defaultVariant: `Z9YOVMygp`,
              ref: r,
              variant: b,
              variantClassNames: z,
            }),
            $ = Y(e, Q),
            re = y(R);
          return (
            S(),
            s(f, {
              id: g ?? i,
              children: s(K, {
                animate: Q,
                initial: !1,
                children: s(G, {
                  value: B,
                  children: s(m.div, {
                    ...O,
                    ...q,
                    className: y(re, `framer-jsfe35`, p, P),
                    "data-framer-name": `Primary`,
                    layoutDependency: $,
                    layoutId: `Z9YOVMygp`,
                    ref: r,
                    style: { ...d },
                    ...F({ pvIW0rRZN: { "data-framer-name": `Small` } }, j, X),
                    children: s(D, {
                      children: s(W, {
                        query: {
                          from: { alias: `Z9YOVMygp`, data: N, type: `Collection` },
                          select: [
                            { collection: `Z9YOVMygp`, name: `V16NXyNwY`, type: `Identifier` },
                            { collection: `Z9YOVMygp`, name: `pRSYJyzWh`, type: `Identifier` },
                            { collection: `Z9YOVMygp`, name: `id`, type: `Identifier` },
                          ],
                        },
                        children: (e, t, n) =>
                          s(a, {
                            children: e?.map(
                              ({ id: e, pRSYJyzWh: t, V16NXyNwY: n }, r) => (
                                (n ??= ``),
                                (t ??= ``),
                                s(
                                  f,
                                  {
                                    id: `Z9YOVMygp-${e}`,
                                    children: s(k.Provider, {
                                      value: { pRSYJyzWh: t },
                                      children: s(_, {
                                        links: [
                                          {
                                            href: {
                                              pathVariables: { pRSYJyzWh: t },
                                              webPageId: `bzyG_wjT2`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { pRSYJyzWh: t },
                                              webPageId: `bzyG_wjT2`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          s(ee, {
                                            height: 40,
                                            children: s(h, {
                                              className: `framer-x7ju72-container`,
                                              layoutDependency: $,
                                              layoutId: `Q13DlGAhz-container`,
                                              nodeId: `Q13DlGAhz`,
                                              rendersWithMotion: !0,
                                              scopeId: `U6SshL4Hh`,
                                              children: s(M, {
                                                height: `100%`,
                                                id: `Q13DlGAhz`,
                                                layoutId: `Q13DlGAhz`,
                                                t7ayk6mJk: e[0],
                                                Uf5iL5Knc: n,
                                                variant: H(V(n, x), c),
                                                width: `100%`,
                                                ...F(
                                                  {
                                                    pvIW0rRZN: {
                                                      t7ayk6mJk: e[1],
                                                      variant: U(V(n, x), c),
                                                    },
                                                  },
                                                  j,
                                                  X
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    }),
                                  },
                                  e
                                )
                              )
                            ),
                          }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-vSWjb.framer-1ufjsqm, .framer-vSWjb .framer-1ufjsqm { display: block; }`,
          `.framer-vSWjb.framer-jsfe35 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 232px; }`,
          `.framer-vSWjb .framer-x7ju72-container { flex: none; height: auto; position: relative; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vSWjb.framer-jsfe35 { gap: 0px; } .framer-vSWjb.framer-jsfe35 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-vSWjb.framer-jsfe35 > :first-child { margin-left: 0px; } .framer-vSWjb.framer-jsfe35 > :last-child { margin-right: 0px; } }`,
        ],
        `framer-vSWjb`
      )),
      (X.displayName = `Template Filter Nav`),
      (X.defaultProps = { height: 232, width: 232 }),
      b(X, {
        variant: {
          options: [`Z9YOVMygp`, `pvIW0rRZN`],
          optionTitles: [`Primary`, `Small`],
          title: `Variant`,
          type: O.Enum,
        },
        v9h57AbX4: { defaultValue: `Active`, title: `Active`, type: O.String },
      }),
      E(X, [{ explicitInter: !0, fonts: [] }, ...I], { supportsExplicitInterCodegen: !0 }));
  });
export { Z as n, X as t };
//# sourceMappingURL=U6SshL4Hh.Dse_OzdZ.mjs.map
