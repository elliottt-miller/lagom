import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  j as a,
  l as o,
  s,
  v as c,
  x as l,
} from "./react.ClsXD4bF.mjs";
import { a as u, r as d, t as f, w as p } from "./motion.ClyXVVeQ.mjs";
import {
  Dt as m,
  F as h,
  G as g,
  M as _,
  Ot as v,
  Z as y,
  _ as b,
  ft as x,
  j as S,
  m as C,
  o as w,
  yt as T,
} from "./framer.CbUxDv78.mjs";
function E(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z = e(() => {
    (s(),
      y(),
      f(),
      t(),
      (D = { BHRb0MPjB: { hover: !0 }, F6vik7xuM: { hover: !0 } }),
      (O = [`F6vik7xuM`, `xJrPv5Vxc`, `BHRb0MPjB`, `Y4BHq_VS3`]),
      (k = `framer-uslI6`),
      (A = {
        BHRb0MPjB: `framer-v-1cx9b1f`,
        F6vik7xuM: `framer-v-gwl509`,
        xJrPv5Vxc: `framer-v-x73zg5`,
        Y4BHq_VS3: `framer-v-1omqh71`,
      }),
      (j = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (M = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (N = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (P = p.create(n)),
      (F = {
        "Secondary - Small": `Y4BHq_VS3`,
        Primary: `F6vik7xuM`,
        Secondary: `BHRb0MPjB`,
        Small: `xJrPv5Vxc`,
      }),
      (I = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        S9bOFQsm3: r ?? a.S9bOFQsm3,
        variant: F[a.variant] ?? a.variant ?? `F6vik7xuM`,
        y_nNBUCzu: t ??
          a.y_nNBUCzu ?? { alt: ``, src: `../../assets/images/4TyobUM26ofmLnaAmVnfPCJ9Ar4.svg` },
      })),
      (L = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (R = v(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = l(),
            { activeLocale: s, setLocale: c } = T(),
            u = x(),
            {
              style: f,
              className: _,
              layoutId: v,
              variant: y,
              y_nNBUCzu: S,
              S9bOFQsm3: w,
              ...F
            } = I(e),
            {
              baseVariant: R,
              classNames: z,
              clearLoadingGesture: B,
              gestureHandlers: V,
              gestureVariant: H,
              isLoading: U,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = m({
              cycleOrder: O,
              defaultVariant: `F6vik7xuM`,
              enabledGestures: D,
              ref: r,
              variant: y,
              variantClassNames: A,
            }),
            q = L(e, K),
            J = h(k);
          return o(d, {
            id: v ?? i,
            children: o(P, {
              animate: K,
              initial: !1,
              children: o(N, {
                value: j,
                children: o(b, {
                  href: w,
                  motionChild: !0,
                  nodeId: `F6vik7xuM`,
                  scopeId: `qRMaPjest`,
                  children: o(p.a, {
                    ...F,
                    ...V,
                    className: `${h(J, `framer-gwl509`, _, z)} framer-sqlnff`,
                    "data-framer-name": `Primary`,
                    layoutDependency: q,
                    layoutId: `F6vik7xuM`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                      borderBottomLeftRadius: `50%`,
                      borderBottomRightRadius: `50%`,
                      borderTopLeftRadius: `50%`,
                      borderTopRightRadius: `50%`,
                      ...f,
                    },
                    variants: {
                      "BHRb0MPjB-hover": {
                        backgroundColor: `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                      },
                      "F6vik7xuM-hover": {
                        backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                      },
                      BHRb0MPjB: {
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      Y4BHq_VS3: {
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                    },
                    ...E(
                      {
                        "BHRb0MPjB-hover": { "data-framer-name": void 0 },
                        "F6vik7xuM-hover": { "data-framer-name": void 0 },
                        BHRb0MPjB: { "data-framer-name": `Secondary` },
                        xJrPv5Vxc: { "data-framer-name": `Small` },
                        Y4BHq_VS3: { "data-framer-name": `Secondary - Small` },
                      },
                      R,
                      H
                    ),
                    children: o(C, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: g((u?.y || 0) + (0 + ((u?.height || 24) - 0 - 16) / 2)),
                        pixelHeight: 14,
                        pixelWidth: 7,
                        sizes: `16px`,
                        ...M(S),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-n3dw6t`,
                      "data-framer-name": `Icon`,
                      layoutDependency: q,
                      layoutId: `lWwWfTSLS`,
                      ...E(
                        {
                          "F6vik7xuM-hover": {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: g((u?.y || 0) + (0 + ((u?.height || 32) - 0 - 16) / 2)),
                              pixelHeight: 14,
                              pixelWidth: 7,
                              sizes: `16px`,
                              ...M(S),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          BHRb0MPjB: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: g((u?.y || 0) + (0 + ((u?.height || 32) - 0 - 16) / 2)),
                              pixelHeight: 14,
                              pixelWidth: 7,
                              sizes: `16px`,
                              ...M(S),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          xJrPv5Vxc: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: g((u?.y || 0) + (0 + ((u?.height || 32) - 0 - 16) / 2)),
                              pixelHeight: 14,
                              pixelWidth: 7,
                              sizes: `16px`,
                              ...M(S),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          Y4BHq_VS3: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: g((u?.y || 0) + (0 + ((u?.height || 28) - 0 - 16) / 2)),
                              pixelHeight: 14,
                              pixelWidth: 7,
                              sizes: `12px`,
                              ...M(S),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        R,
                        H
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-uslI6.framer-sqlnff, .framer-uslI6 .framer-sqlnff { display: block; }`,
          `.framer-uslI6.framer-gwl509 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 32px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-uslI6 .framer-n3dw6t { flex: none; height: 16px; overflow: visible; position: relative; width: 16px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uslI6.framer-gwl509 { gap: 0px; } .framer-uslI6.framer-gwl509 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-uslI6.framer-gwl509 > :first-child { margin-left: 0px; } .framer-uslI6.framer-gwl509 > :last-child { margin-right: 0px; } }`,
          `.framer-uslI6.framer-v-x73zg5.framer-gwl509, .framer-uslI6.framer-v-gwl509.hover.framer-gwl509 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); }`,
          `.framer-uslI6.framer-v-1cx9b1f.framer-gwl509 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); width: 28px; }`,
          `.framer-uslI6.framer-v-1cx9b1f .framer-n3dw6t { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-uslI6.framer-v-1omqh71.framer-gwl509 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 28px); width: 24px; }`,
          `.framer-uslI6.framer-v-1omqh71 .framer-n3dw6t { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 16px); width: 12px; }`,
        ],
        `framer-uslI6`
      )),
      (R.displayName = `Social Icon`),
      (R.defaultProps = { height: 24, width: 24 }),
      _(R, {
        variant: {
          options: [`F6vik7xuM`, `xJrPv5Vxc`, `BHRb0MPjB`, `Y4BHq_VS3`],
          optionTitles: [`Primary`, `Small`, `Secondary`, `Secondary - Small`],
          title: `Variant`,
          type: w.Enum,
        },
        y_nNBUCzu: {
          __defaultAssetReference: `data:framer/asset-reference,4TyobUM26ofmLnaAmVnfPCJ9Ar4.svg?originalFilename=Social_icons_black.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,4TyobUM26ofmLnaAmVnfPCJ9Ar4.svg?originalFilename=Social_icons_black.svg&preferredSize=auto`,
          },
          title: `Icon`,
          type: w.ResponsiveImage,
        },
        S9bOFQsm3: { title: `Link`, type: w.Link },
      }),
      S(R, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { z as n, R as t };
//# sourceMappingURL=qRMaPjest.B4i2MQVU.mjs.map
