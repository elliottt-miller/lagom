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
import { i as N, r as P } from "./av6kut8C7.DBFa7izQ.mjs";
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
      (L = [`jNBSdAOoN`, `KT82erVz3`]),
      (R = `framer-aMlHs`),
      (z = { jNBSdAOoN: `framer-v-34tozd`, KT82erVz3: `framer-v-fhnfnb` }),
      (B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
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
      (q = { Primary: `jNBSdAOoN`, Small: `KT82erVz3` }),
      (J = ({ active: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        JbPQSEOaQ: e ?? i.JbPQSEOaQ,
        variant: q[i.variant] ?? i.variant ?? `jNBSdAOoN`,
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
              JbPQSEOaQ: x,
              EYPAj1SYijNBSdAOoN: C,
              L9y2SioHHjNBSdAOoN: w,
              idjNBSdAOoN: E,
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
              defaultVariant: `jNBSdAOoN`,
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
                    className: y(re, `framer-34tozd`, p, P),
                    "data-framer-name": `Primary`,
                    layoutDependency: $,
                    layoutId: `jNBSdAOoN`,
                    ref: r,
                    style: { ...d },
                    ...F({ KT82erVz3: { "data-framer-name": `Small` } }, j, X),
                    children: s(D, {
                      children: s(W, {
                        query: {
                          from: { alias: `jNBSdAOoN`, data: N, type: `Collection` },
                          select: [
                            { collection: `jNBSdAOoN`, name: `EYPAj1SYi`, type: `Identifier` },
                            { collection: `jNBSdAOoN`, name: `L9y2SioHH`, type: `Identifier` },
                            { collection: `jNBSdAOoN`, name: `id`, type: `Identifier` },
                          ],
                        },
                        children: (e, t, n) =>
                          s(a, {
                            children: e?.map(
                              ({ EYPAj1SYi: e, id: t, L9y2SioHH: n }, r) => (
                                (e ??= ``),
                                (n ??= ``),
                                s(
                                  f,
                                  {
                                    id: `jNBSdAOoN-${t}`,
                                    children: s(k.Provider, {
                                      value: { L9y2SioHH: n },
                                      children: s(_, {
                                        links: [
                                          {
                                            href: {
                                              pathVariables: { L9y2SioHH: n },
                                              webPageId: `WAj2S0BJD`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { L9y2SioHH: n },
                                              webPageId: `WAj2S0BJD`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(ee, {
                                            height: 40,
                                            children: s(h, {
                                              className: `framer-18q9u7m-container`,
                                              layoutDependency: $,
                                              layoutId: `hyNPx0LXr-container`,
                                              nodeId: `hyNPx0LXr`,
                                              rendersWithMotion: !0,
                                              scopeId: `GwH1yWh8S`,
                                              children: s(M, {
                                                height: `100%`,
                                                id: `hyNPx0LXr`,
                                                layoutId: `hyNPx0LXr`,
                                                t7ayk6mJk: t[0],
                                                Uf5iL5Knc: e,
                                                variant: H(V(e, x), c),
                                                width: `100%`,
                                                ...F(
                                                  {
                                                    KT82erVz3: {
                                                      t7ayk6mJk: t[1],
                                                      variant: U(V(e, x), c),
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
                                  t
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
          `.framer-aMlHs.framer-1dwx2d4, .framer-aMlHs .framer-1dwx2d4 { display: block; }`,
          `.framer-aMlHs.framer-34tozd { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 232px; }`,
          `.framer-aMlHs .framer-18q9u7m-container { flex: none; height: auto; position: relative; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aMlHs.framer-34tozd { gap: 0px; } .framer-aMlHs.framer-34tozd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-aMlHs.framer-34tozd > :first-child { margin-left: 0px; } .framer-aMlHs.framer-34tozd > :last-child { margin-right: 0px; } }`,
        ],
        `framer-aMlHs`
      )),
      (X.displayName = `Components Tab`),
      (X.defaultProps = { height: 340, width: 232 }),
      b(X, {
        variant: {
          options: [`jNBSdAOoN`, `KT82erVz3`],
          optionTitles: [`Primary`, `Small`],
          title: `Variant`,
          type: O.Enum,
        },
        JbPQSEOaQ: { defaultValue: ``, title: `Active`, type: O.String },
      }),
      E(X, [{ explicitInter: !0, fonts: [] }, ...I], { supportsExplicitInterCodegen: !0 }));
  });
export { Z as n, X as t };
//# sourceMappingURL=GwH1yWh8S.BRSRoa9c.mjs.map
