import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.BtSUcPAM.mjs";
import { P as d, i as f, o as p, t as m } from "./motion.B_UOAosx.mjs";
import {
  Dt as h,
  Ft as g,
  I as _,
  M as v,
  Mt as y,
  N as b,
  O as x,
  Pt as ee,
  Q as S,
  Tt as C,
  ht as te,
  o as w,
  pt as T,
  v as E,
} from "./framer.DuFjdl15.mjs";
function D(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var O,
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
      S(),
      m(),
      t(),
      (O = [
        `EiHSIuSD3`,
        `pyN7ATYmd`,
        `OGZRejuJt`,
        `ZtmQkOYjO`,
        `uqTlCns_E`,
        `GzdA2DaeW`,
        `l2BPQhbDm`,
      ]),
      (k = `framer-nIbLe`),
      (A = {
        EiHSIuSD3: `framer-v-ncvrea`,
        GzdA2DaeW: `framer-v-1yi8vpz`,
        l2BPQhbDm: `framer-v-1siobm7`,
        OGZRejuJt: `framer-v-8gmd3g`,
        pyN7ATYmd: `framer-v-1il7odb`,
        uqTlCns_E: `framer-v-1mv7ro4`,
        ZtmQkOYjO: `framer-v-1wctj7k`,
      }),
      (j = { duration: 0, type: `tween` }),
      (M = { delay: 0, duration: 0.5, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (N = ({ value: e, children: t }) => {
        let n = i(p),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(p.Provider, { value: o, children: t });
      }),
      (P = {
        "Dark - Desktop - Mouse in": `ZtmQkOYjO`,
        "Dark - Desktop - Mouse out": `GzdA2DaeW`,
        "Dark - Desktop": `pyN7ATYmd`,
        "Desktop - Mouse in": `OGZRejuJt`,
        "Desktop - Mouse Out": `uqTlCns_E`,
        Desktop: `EiHSIuSD3`,
        Mobile: `l2BPQhbDm`,
      }),
      (F = d.create(r)),
      (I = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        Dmy4MWeNl: r ?? o.Dmy4MWeNl,
        g4eKijyIc: e ?? o.g4eKijyIc,
        nNvr5pMKf: i ?? o.nNvr5pMKf ?? `Item Name`,
        variant: P[o.variant] ?? o.variant ?? `EiHSIuSD3`,
      })),
      (L = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (R = g(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: p } = C();
          te();
          let {
              style: m,
              className: g,
              layoutId: v,
              variant: y,
              nNvr5pMKf: b,
              Dmy4MWeNl: S,
              g4eKijyIc: w,
              ...P
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
            } = ee({
              cycleOrder: O,
              defaultVariant: `EiHSIuSD3`,
              ref: a,
              variant: y,
              variantClassNames: A,
            }),
            q = L(e, K),
            { activeVariantCallback: J, delay: Y } = T(R),
            X = J(async (...e) => {
              if ((W({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
            }),
            Z = J(async (...e) => {
              (W({ isHovered: !0 }), G(`OGZRejuJt`));
            }),
            Q = J(async (...e) => {
              (W({ isHovered: !0 }), G(`ZtmQkOYjO`));
            }),
            ne = J(async (...e) => {
              (W({ isHovered: !1 }), G(`uqTlCns_E`));
            }),
            re = J(async (...e) => {
              (W({ isHovered: !1 }), G(`GzdA2DaeW`));
            }),
            $ = J(async (...e) => {
              await Y(() => G(`EiHSIuSD3`, !0), 500);
            }),
            ie = J(async (...e) => {
              (W({ isHovered: !0 }), G(`EiHSIuSD3`));
            }),
            ae = J(async (...e) => {
              await Y(() => G(`pyN7ATYmd`, !0), 500);
            }),
            oe = J(async (...e) => {
              (W({ isHovered: !0 }), G(`pyN7ATYmd`));
            });
          h(R, { GzdA2DaeW: ae, uqTlCns_E: $ });
          let se = _(k);
          return l(f, {
            id: v ?? s,
            children: l(F, {
              animate: K,
              initial: !1,
              children: l(N, {
                value: j,
                ...D(
                  {
                    GzdA2DaeW: { value: M },
                    OGZRejuJt: { value: M },
                    uqTlCns_E: { value: M },
                    ZtmQkOYjO: { value: M },
                  },
                  R,
                  H
                ),
                children: l(E, {
                  href: S,
                  motionChild: !0,
                  nodeId: `EiHSIuSD3`,
                  openInNewTab: !1,
                  scopeId: `AxWHJZBjX`,
                  children: u(d.a, {
                    ...P,
                    ...V,
                    className: `${_(se, `framer-ncvrea`, g, z)} framer-yla7cl`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    layoutDependency: q,
                    layoutId: `EiHSIuSD3`,
                    onMouseEnter: Z,
                    onTap: X,
                    ref: a,
                    style: { ...m },
                    ...D(
                      {
                        GzdA2DaeW: {
                          "data-framer-name": `Dark - Desktop - Mouse out`,
                          onMouseEnter: oe,
                        },
                        l2BPQhbDm: { "data-framer-name": `Mobile`, onMouseEnter: void 0 },
                        OGZRejuJt: { "data-framer-name": `Desktop - Mouse in`, onMouseLeave: ne },
                        pyN7ATYmd: { "data-framer-name": `Dark - Desktop`, onMouseEnter: Q },
                        uqTlCns_E: { "data-framer-name": `Desktop - Mouse Out`, onMouseEnter: ie },
                        ZtmQkOYjO: {
                          "data-framer-name": `Dark - Desktop - Mouse in`,
                          onMouseEnter: Q,
                          onMouseLeave: re,
                        },
                      },
                      R,
                      H
                    ),
                    children: [
                      l(x, {
                        __fromCanvasComponent: !0,
                        children: l(r, {
                          children: l(d.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                              "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.03em`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                            },
                            children: `Item Name`,
                          }),
                        }),
                        className: `framer-mvn7dc`,
                        "data-framer-name": `Item`,
                        fonts: [`FS;General Sans-medium`],
                        layoutDependency: q,
                        layoutId: `iTTjvOxJp`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: b,
                        variants: {
                          GzdA2DaeW: {
                            "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                          },
                          pyN7ATYmd: {
                            "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                          },
                          ZtmQkOYjO: {
                            "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...D(
                          {
                            GzdA2DaeW: {
                              children: l(r, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                  },
                                  children: `Item Name`,
                                }),
                              }),
                            },
                            l2BPQhbDm: {
                              children: l(r, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                                  },
                                  children: `Item Name`,
                                }),
                              }),
                            },
                            pyN7ATYmd: {
                              children: l(r, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                  },
                                  children: `Item Name`,
                                }),
                              }),
                            },
                            ZtmQkOYjO: {
                              children: l(r, {
                                children: l(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                  },
                                  children: `Item Name`,
                                }),
                              }),
                            },
                          },
                          R,
                          H
                        ),
                      }),
                      l(d.div, {
                        className: `framer-1xz7edj`,
                        "data-framer-name": `Line Wrap`,
                        layoutDependency: q,
                        layoutId: `alodW3_7l`,
                        children: l(d.div, {
                          className: `framer-vmi1ed`,
                          "data-framer-name": `Line`,
                          layoutDependency: q,
                          layoutId: `d6xXPoef4`,
                          style: { backgroundColor: `rgb(255, 255, 255)` },
                          variants: {
                            GzdA2DaeW: {
                              backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                            },
                            pyN7ATYmd: {
                              backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                            },
                            ZtmQkOYjO: {
                              backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                            },
                          },
                        }),
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
          `.framer-nIbLe.framer-yla7cl, .framer-nIbLe .framer-yla7cl { display: block; }`,
          `.framer-nIbLe.framer-ncvrea { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 2px 0px 2px 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-nIbLe .framer-mvn7dc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-nIbLe .framer-1xz7edj { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: -4px; overflow: visible; padding: 0px; position: absolute; width: 1%; }`,
          `.framer-nIbLe .framer-vmi1ed { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; z-index: 1; }`,
          `.framer-nIbLe.framer-v-8gmd3g .framer-1xz7edj, .framer-nIbLe.framer-v-1wctj7k .framer-1xz7edj { left: 0px; width: 100%; }`,
          `.framer-nIbLe.framer-v-1mv7ro4 .framer-1xz7edj, .framer-nIbLe.framer-v-1yi8vpz .framer-1xz7edj { left: unset; right: -6px; width: 8%; }`,
        ],
        `framer-nIbLe`
      )),
      (R.displayName = `Line Text`),
      (R.defaultProps = { height: 23, width: 77.5 }),
      b(R, {
        variant: {
          options: [
            `EiHSIuSD3`,
            `pyN7ATYmd`,
            `OGZRejuJt`,
            `ZtmQkOYjO`,
            `uqTlCns_E`,
            `GzdA2DaeW`,
            `l2BPQhbDm`,
          ],
          optionTitles: [
            `Desktop`,
            `Dark - Desktop`,
            `Desktop - Mouse in`,
            `Dark - Desktop - Mouse in`,
            `Desktop - Mouse Out`,
            `Dark - Desktop - Mouse out`,
            `Mobile`,
          ],
          title: `Variant`,
          type: w.Enum,
        },
        nNvr5pMKf: {
          defaultValue: `Item Name`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onnNvr5pMKfChange: { changes: `nNvr5pMKf`, type: w.ChangeHandler },
        Dmy4MWeNl: { title: `Link`, type: w.Link },
        g4eKijyIc: { title: `Click`, type: w.EventHandler },
      }),
      v(
        R,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (s(),
      S(),
      t(),
      (B = `var(--framer-icon-mask)`),
      (V = c(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (H = d.create(V)),
      (U = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(H, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (W = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 14 0 L 0 14 M 0 0 L 14 14" fill="transparent" height="14px" id="EsyT_Offd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(3 3)" width="14px"/></svg>`),
      (G = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (K = g(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = G(e),
            u = y(`719669722`, W);
          return l(U, {
            ...c,
            className: _(`framer-YUCAD`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-YUCAD { -webkit-mask: ${B}; aspect-ratio: 1; display: block; mask: ${B}; width: 20px; }`,
        ],
        `framer-YUCAD`
      )),
      (K.displayName = `X`),
      b(K, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: w.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: w.Number },
      }));
  });
export { z as i, q as n, R as r, K as t };
//# sourceMappingURL=nijsUfsP7.ClHFTjWA.mjs.map
