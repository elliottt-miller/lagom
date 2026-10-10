import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  l as ee,
  m as c,
  s as l,
  u,
  y as d,
} from "./react.BtSUcPAM.mjs";
import { P as f, i as te, o as p, t as m } from "./motion.B_UOAosx.mjs";
import {
  A as h,
  At as g,
  C as _,
  Et as v,
  Ft as y,
  G as b,
  I as x,
  K as S,
  Lt as C,
  M as w,
  N as T,
  Nt as E,
  O as D,
  Pt as O,
  Q as k,
  R as A,
  Tt as j,
  W as M,
  a as N,
  f as P,
  ht as F,
  i as I,
  l as ne,
  m as L,
  o as R,
  pt as re,
  u as z,
  vt as ie,
  xt as ae,
  yt as oe,
} from "./framer.DuFjdl15.mjs";
import { i as B, n as se, r as ce, t as le } from "./MYFsM6f0k.DfnOeWKh.mjs";
import { a as ue, i as de, n as fe, o as pe, r as me, t as he } from "./jqlnmWM57.B2NfWqcv.mjs";
import { i as ge, n as _e, r as ve, t as ye } from "./ANhE2fRBl.BpK3OGOf.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./AeW2_n5fC.D-uaYwh6.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./egz88BsrP.BIROQOPJ.mjs";
import { n as Oe, t as ke } from "./AvoidLayoutJumping_Prod.Cx5lsArE.mjs";
import Ae, { t as je } from "./mKyHj7rlQmGon2xTM2TEtO5idRpf_9FLNOiesoGhMTo.j9gSB4N8.mjs";
function Me(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  Ne,
  Pe,
  Fe,
  H,
  Ie,
  Le,
  U,
  W,
  G,
  K,
  q,
  Re = e(() => {
    (s(),
      k(),
      m(),
      t(),
      Oe(),
      pe(),
      (V = M(ke)),
      (Ne = M(ue)),
      (Pe = [`oUnXpoTkH`, `n3wS3jHGx`]),
      (Fe = `framer-0n4Fb`),
      (H = { n3wS3jHGx: `framer-v-1uliya0`, oUnXpoTkH: `framer-v-16ajac9` }),
      (Ie = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (Le = ({ value: e, children: t }) => {
        let n = i(p),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(p.Provider, { value: o, children: t });
      }),
      (U = { Closed: `n3wS3jHGx`, Open: `oUnXpoTkH` }),
      (W = f.create(r)),
      (G = ({ click: e, description: t, height: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        CnlZi3y5a:
          t ??
          o.CnlZi3y5a ??
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
        do45skV7Q: i ?? o.do45skV7Q ?? `Title`,
        fcD5m8DHs: e ?? o.fcD5m8DHs,
        variant: U[o.variant] ?? o.variant ?? `oUnXpoTkH`,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = y(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = j();
          F();
          let {
              style: d,
              className: p,
              layoutId: m,
              variant: g,
              do45skV7Q: _,
              CnlZi3y5a: v,
              fcD5m8DHs: y,
              ...b
            } = G(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: k,
              setGestureState: A,
              setVariant: M,
              variants: N,
            } = O({
              cycleOrder: Pe,
              defaultVariant: `oUnXpoTkH`,
              ref: a,
              variant: g,
              variantClassNames: H,
            }),
            P = K(e, N),
            ne = [],
            { activeVariantCallback: L, delay: R } = re(S),
            z = L(async (...e) => {
              if ((A({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
              M(`n3wS3jHGx`);
            }),
            ie = x(Fe, ...ne),
            ae = L(async (...e) => {
              if ((A({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
              M(`oUnXpoTkH`);
            });
          return l(te, {
            id: m ?? s,
            children: l(W, {
              animate: N,
              initial: !1,
              children: l(Le, {
                value: Ie,
                children: u(f.div, {
                  ...b,
                  ...T,
                  className: x(ie, `framer-16ajac9`, p, C),
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `oUnXpoTkH`,
                  onTap: z,
                  ref: a,
                  style: { ...d },
                  ...Me({ n3wS3jHGx: { "data-framer-name": `Closed`, onTap: ae } }, S, E),
                  children: [
                    l(I, {
                      children: l(h, {
                        className: `framer-d3ux0q-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: P,
                        layoutId: `nVaS0f9tV-container`,
                        nodeId: `nVaS0f9tV`,
                        rendersWithMotion: !0,
                        scopeId: `JdY_wLa21`,
                        children: l(ke, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `nVaS0f9tV`,
                          layoutId: `nVaS0f9tV`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(f.div, {
                      className: `framer-px42gk`,
                      "data-framer-name": `Wrap`,
                      layoutDependency: P,
                      layoutId: `SFw7ZcP3V`,
                      children: [
                        u(f.div, {
                          className: `framer-2pb6ow`,
                          "data-framer-name": `Title Wrap`,
                          layoutDependency: P,
                          layoutId: `w9hywu_rG`,
                          children: [
                            l(D, {
                              __fromCanvasComponent: !0,
                              children: l(r, {
                                children: l(f.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                    "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `20px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                  },
                                  children: `Title`,
                                }),
                              }),
                              className: `framer-3rpme0`,
                              fonts: [`FS;General Sans-variable`],
                              layoutDependency: P,
                              layoutId: `pxjQdxdrg`,
                              style: {
                                "--extracted-2gg91v": `"wght" 450`,
                                "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(f.div, {
                              className: `framer-1a6p1m6`,
                              "data-framer-name": `Icon`,
                              layoutDependency: P,
                              layoutId: `eed84eOce`,
                              children: l(ue, {
                                animated: !0,
                                className: `framer-k4qs5z`,
                                layoutDependency: P,
                                layoutId: `l9NoV5yAn`,
                                style: {
                                  "--d1m4u3": 1.4,
                                  "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                  rotate: 180,
                                },
                                variants: { n3wS3jHGx: { rotate: 0 } },
                              }),
                            }),
                          ],
                        }),
                        l(f.div, {
                          className: `framer-1qt9711`,
                          "data-framer-name": `Description Wrap`,
                          layoutDependency: P,
                          layoutId: `tmkFsrt2r`,
                          style: { opacity: 1 },
                          variants: { n3wS3jHGx: { opacity: 0 } },
                          children: l(D, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=`,
                                  "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                  "--framer-font-open-type-features": `'ss02' on, 'ss01' on, 'ss03' on, 'ss04' on`,
                                  "--framer-font-size": `15px`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                },
                                children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
                              }),
                            }),
                            className: `framer-5zse6a`,
                            "data-framer-name": `Description`,
                            fonts: [`FS;General Sans-regular`],
                            layoutDependency: P,
                            layoutId: `HquiwwLuj`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-1dqf42y`,
                      "data-framer-name": `Line`,
                      layoutDependency: P,
                      layoutId: `IaFgOxTMI`,
                      style: {
                        backgroundColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                      },
                      variants: { n3wS3jHGx: { backgroundColor: `rgb(227, 227, 227)` } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-0n4Fb.framer-13owu8k, .framer-0n4Fb .framer-13owu8k { display: block; }`,
          `.framer-0n4Fb.framer-16ajac9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 385px; }`,
          `.framer-0n4Fb .framer-d3ux0q-container { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: auto; z-index: 1; }`,
          `.framer-0n4Fb .framer-px42gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-0n4Fb .framer-2pb6ow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-0n4Fb .framer-3rpme0 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-0n4Fb .framer-1a6p1m6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: min-content; }`,
          `.framer-0n4Fb .framer-k4qs5z { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 18px; }`,
          `.framer-0n4Fb .framer-1qt9711 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-0n4Fb .framer-5zse6a { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-0n4Fb .framer-1dqf42y { flex: none; height: 2px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-0n4Fb.framer-v-1uliya0 .framer-1qt9711 { bottom: 0px; height: 1px; left: 0px; position: absolute; right: 0px; width: unset; z-index: 1; }`,
        ],
        `framer-0n4Fb`
      )),
      (q.displayName = `FAQ Item`),
      (q.defaultProps = { height: 108, width: 385 }),
      T(q, {
        variant: {
          options: [`oUnXpoTkH`, `n3wS3jHGx`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: R.Enum,
        },
        do45skV7Q: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: R.String },
        ondo45skV7QChange: { changes: `do45skV7Q`, type: R.ChangeHandler },
        CnlZi3y5a: {
          defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
          displayTextArea: !0,
          title: `Description`,
          type: R.String,
        },
        onCnlZi3y5aChange: { changes: `CnlZi3y5a`, type: R.ChangeHandler },
        fcD5m8DHs: { title: `Click`, type: R.EventHandler },
      }),
      w(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
                variationAxes: [
                  { defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `General Sans`,
                openType: !0,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2`,
                weight: `400`,
              },
            ],
          },
          ...V,
          ...Ne,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ze,
  Be,
  Ve,
  He,
  Ue,
  Y,
  We,
  Ge,
  Ke,
  X,
  qe,
  Je,
  Z,
  Ye = e(() => {
    (s(),
      k(),
      m(),
      t(),
      Re(),
      (ze = M(q)),
      (Be = [`TnKZR7n2w`, `tt8NHPpkJ`, `ZKErrM0xd`, `jQCIu9q0k`, `Ctw2mtdAf`, `HqRWBSiQs`]),
      (Ve = `framer-yKefC`),
      (He = {
        Ctw2mtdAf: `framer-v-16k377z`,
        HqRWBSiQs: `framer-v-kummyo`,
        jQCIu9q0k: `framer-v-85l4p7`,
        TnKZR7n2w: `framer-v-109ktyb`,
        tt8NHPpkJ: `framer-v-q7lepl`,
        ZKErrM0xd: `framer-v-10sovz8`,
      }),
      (Ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (We = ({ value: e, children: t }) => {
        let n = i(p),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(p.Provider, { value: o, children: t });
      }),
      (Ge = {
        "Variant 1": `TnKZR7n2w`,
        "Variant 2": `tt8NHPpkJ`,
        "Variant 3": `ZKErrM0xd`,
        "Variant 4": `jQCIu9q0k`,
        "Variant 5": `Ctw2mtdAf`,
        "Variant 6": `HqRWBSiQs`,
      }),
      (Ke = f.create(r)),
      (X = (e, t) => {
        let [n, r] = d(e),
          [i, a] = d(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (qe = ({
        description1: e,
        description2: t,
        description3: n,
        description4: r,
        description5: i,
        description6: a,
        height: o,
        id: s,
        title1: ee,
        title2: c,
        title3: l,
        title4: u,
        title5: d,
        title6: f,
        width: te,
        ...p
      }) => ({
        ...p,
        d1q8oS9D9:
          n ??
          p.d1q8oS9D9 ??
          `Eligible items can be returned within the specified return window if they are unworn and in original condition.`,
        LdrSWjYU8: ee ?? p.LdrSWjYU8 ?? `How long does shipping take?`,
        N49OQKBnz:
          e ??
          p.N49OQKBnz ??
          `Orders are typically processed within 1–2 business days and delivered based on your selected shipping method.`,
        NsZopXCZP: u ?? p.NsZopXCZP ?? `How do I choose the right size?`,
        q5fZzJVr7: l ?? p.q5fZzJVr7 ?? `What is your return policy?`,
        Q5UyCtm5H:
          a ??
          p.Q5UyCtm5H ??
          `You can reach our support team through the contact form or by using the contact details provided on this page.`,
        SHoB3a4HJ: c ?? p.SHoB3a4HJ ?? `Do you offer international shipping?`,
        tw1TI2c1i:
          t ??
          p.tw1TI2c1i ??
          `Yes, we ship to many countries worldwide. Shipping rates and delivery times vary by location.`,
        tZ6aNBo8D:
          i ??
          p.tZ6aNBo8D ??
          `Yes, once your order ships, you'll receive a tracking link by email to follow its progress.`,
        variant: Ge[p.variant] ?? p.variant ?? `TnKZR7n2w`,
        xrtEV0tuL: d ?? p.xrtEV0tuL ?? `Can I track my order?`,
        YBufhC79Q: f ?? p.YBufhC79Q ?? `How can I contact support?`,
        YmYLTOG3O:
          r ??
          p.YmYLTOG3O ??
          `Use our size guide on each product page to find the best fit based on your measurements.`,
      })),
      (Je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = y(
        c(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = j(),
            c = F(),
            {
              style: d,
              className: p,
              layoutId: m,
              variant: g,
              LdrSWjYU8: _,
              onLdrSWjYU8Change: v,
              N49OQKBnz: y,
              onN49OQKBnzChange: b,
              SHoB3a4HJ: S,
              onSHoB3a4HJChange: C,
              tw1TI2c1i: w,
              ontw1TI2c1iChange: T,
              q5fZzJVr7: E,
              onq5fZzJVr7Change: D,
              d1q8oS9D9: k,
              ond1q8oS9D9Change: A,
              NsZopXCZP: M,
              onNsZopXCZPChange: N,
              YmYLTOG3O: P,
              onYmYLTOG3OChange: ne,
              xrtEV0tuL: L,
              onxrtEV0tuLChange: R,
              tZ6aNBo8D: z,
              ontZ6aNBo8DChange: ie,
              YBufhC79Q: ae,
              onYBufhC79QChange: oe,
              Q5UyCtm5H: B,
              onQ5UyCtm5HChange: se,
              ...ce
            } = qe(e),
            [le, ue] = X(_, v),
            [de, fe] = X(y, b),
            [pe, me] = X(S, C),
            [he, ge] = X(w, T),
            [_e, ve] = X(E, D),
            [ye, be] = X(k, A),
            [xe, Se] = X(M, N),
            [Ce, we] = X(P, ne),
            [Te, Ee] = X(L, R),
            [De, Oe] = X(z, ie),
            [ke, Ae] = X(ae, oe),
            [je, Me] = X(B, se),
            {
              baseVariant: V,
              classNames: Ne,
              clearLoadingGesture: Pe,
              gestureHandlers: Fe,
              gestureVariant: H,
              isLoading: Ie,
              setGestureState: Le,
              setVariant: U,
              variants: W,
            } = O({
              cycleOrder: Be,
              defaultVariant: `TnKZR7n2w`,
              ref: i,
              variant: g,
              variantClassNames: He,
            }),
            G = Je(e, W),
            { activeVariantCallback: K, delay: Re } = re(V),
            ze = K(async (...e) => {
              U(`TnKZR7n2w`);
            }),
            Ge = K(async (...e) => {
              U(`tt8NHPpkJ`);
            }),
            Z = K(async (...e) => {
              U(`ZKErrM0xd`);
            }),
            Ye = K(async (...e) => {
              U(`jQCIu9q0k`);
            }),
            Xe = K(async (...e) => {
              U(`Ctw2mtdAf`);
            }),
            Ze = K(async (...e) => {
              U(`HqRWBSiQs`);
            }),
            Qe = x(Ve);
          return l(te, {
            id: m ?? a,
            children: l(Ke, {
              animate: W,
              initial: !1,
              children: l(We, {
                value: Ue,
                children: u(f.div, {
                  ...ce,
                  ...Fe,
                  className: x(Qe, `framer-109ktyb`, p, Ne),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: G,
                  layoutId: `TnKZR7n2w`,
                  ref: i,
                  style: { ...d },
                  ...J(
                    {
                      Ctw2mtdAf: { "data-framer-name": `Variant 5` },
                      HqRWBSiQs: { "data-framer-name": `Variant 6` },
                      jQCIu9q0k: { "data-framer-name": `Variant 4` },
                      tt8NHPpkJ: { "data-framer-name": `Variant 2` },
                      ZKErrM0xd: { "data-framer-name": `Variant 3` },
                    },
                    V,
                    H
                  ),
                  children: [
                    l(I, {
                      height: 108,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 382) - 0 - 738) / 2 + 0 + 0),
                      children: l(h, {
                        className: `framer-5kxrlq-container`,
                        layoutDependency: G,
                        layoutId: `seuIEMmeV-container`,
                        nodeId: `seuIEMmeV`,
                        rendersWithMotion: !0,
                        scopeId: `I_ixUZgqz`,
                        children: l(q, {
                          CnlZi3y5a: de,
                          do45skV7Q: le,
                          fcD5m8DHs: ze,
                          height: `100%`,
                          id: `seuIEMmeV`,
                          layoutId: `seuIEMmeV`,
                          onCnlZi3y5aChange: fe,
                          ondo45skV7QChange: ue,
                          style: { width: `100%` },
                          variant: Y(`oUnXpoTkH`),
                          width: `100%`,
                          ...J(
                            {
                              Ctw2mtdAf: { variant: Y(`n3wS3jHGx`) },
                              HqRWBSiQs: { variant: Y(`n3wS3jHGx`) },
                              jQCIu9q0k: { variant: Y(`n3wS3jHGx`) },
                              tt8NHPpkJ: { variant: Y(`n3wS3jHGx`) },
                              ZKErrM0xd: { variant: Y(`n3wS3jHGx`) },
                            },
                            V,
                            H
                          ),
                        }),
                      }),
                    }),
                    l(I, {
                      height: 108,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 382) - 0 - 738) / 2 + 108 + 18),
                      children: l(h, {
                        className: `framer-18cz5m4-container`,
                        layoutDependency: G,
                        layoutId: `GiedmiNHL-container`,
                        nodeId: `GiedmiNHL`,
                        rendersWithMotion: !0,
                        scopeId: `I_ixUZgqz`,
                        children: l(q, {
                          CnlZi3y5a: he,
                          do45skV7Q: pe,
                          fcD5m8DHs: Ge,
                          height: `100%`,
                          id: `GiedmiNHL`,
                          layoutId: `GiedmiNHL`,
                          onCnlZi3y5aChange: ge,
                          ondo45skV7QChange: me,
                          style: { width: `100%` },
                          variant: Y(`n3wS3jHGx`),
                          width: `100%`,
                          ...J({ tt8NHPpkJ: { variant: Y(`oUnXpoTkH`) } }, V, H),
                        }),
                      }),
                    }),
                    l(I, {
                      height: 108,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 382) - 0 - 738) / 2 + 216 + 36),
                      children: l(h, {
                        className: `framer-1yatkv-container`,
                        layoutDependency: G,
                        layoutId: `VF_b2zmxq-container`,
                        nodeId: `VF_b2zmxq`,
                        rendersWithMotion: !0,
                        scopeId: `I_ixUZgqz`,
                        children: l(q, {
                          CnlZi3y5a: ye,
                          do45skV7Q: _e,
                          fcD5m8DHs: Z,
                          height: `100%`,
                          id: `VF_b2zmxq`,
                          layoutId: `VF_b2zmxq`,
                          onCnlZi3y5aChange: be,
                          ondo45skV7QChange: ve,
                          style: { width: `100%` },
                          variant: Y(`n3wS3jHGx`),
                          width: `100%`,
                          ...J({ ZKErrM0xd: { variant: Y(`oUnXpoTkH`) } }, V, H),
                        }),
                      }),
                    }),
                    l(I, {
                      height: 108,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 382) - 0 - 738) / 2 + 324 + 54),
                      children: l(h, {
                        className: `framer-1jumktm-container`,
                        layoutDependency: G,
                        layoutId: `XQF0h0cAZ-container`,
                        nodeId: `XQF0h0cAZ`,
                        rendersWithMotion: !0,
                        scopeId: `I_ixUZgqz`,
                        children: l(q, {
                          CnlZi3y5a: Ce,
                          do45skV7Q: xe,
                          fcD5m8DHs: Ye,
                          height: `100%`,
                          id: `XQF0h0cAZ`,
                          layoutId: `XQF0h0cAZ`,
                          onCnlZi3y5aChange: we,
                          ondo45skV7QChange: Se,
                          style: { width: `100%` },
                          variant: Y(`n3wS3jHGx`),
                          width: `100%`,
                          ...J({ jQCIu9q0k: { variant: Y(`oUnXpoTkH`) } }, V, H),
                        }),
                      }),
                    }),
                    l(I, {
                      height: 108,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 382) - 0 - 738) / 2 + 432 + 72),
                      children: l(h, {
                        className: `framer-2lwgwz-container`,
                        layoutDependency: G,
                        layoutId: `eCmqUGIDH-container`,
                        nodeId: `eCmqUGIDH`,
                        rendersWithMotion: !0,
                        scopeId: `I_ixUZgqz`,
                        children: l(q, {
                          CnlZi3y5a: De,
                          do45skV7Q: Te,
                          fcD5m8DHs: Xe,
                          height: `100%`,
                          id: `eCmqUGIDH`,
                          layoutId: `eCmqUGIDH`,
                          onCnlZi3y5aChange: Oe,
                          ondo45skV7QChange: Ee,
                          style: { width: `100%` },
                          variant: Y(`n3wS3jHGx`),
                          width: `100%`,
                          ...J({ Ctw2mtdAf: { variant: Y(`oUnXpoTkH`) } }, V, H),
                        }),
                      }),
                    }),
                    l(I, {
                      height: 108,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + (((c?.height || 382) - 0 - 738) / 2 + 540 + 90),
                      children: l(h, {
                        className: `framer-139dmqj-container`,
                        layoutDependency: G,
                        layoutId: `wn_ftXnBx-container`,
                        nodeId: `wn_ftXnBx`,
                        rendersWithMotion: !0,
                        scopeId: `I_ixUZgqz`,
                        children: l(q, {
                          CnlZi3y5a: je,
                          do45skV7Q: ke,
                          fcD5m8DHs: Ze,
                          height: `100%`,
                          id: `wn_ftXnBx`,
                          layoutId: `wn_ftXnBx`,
                          onCnlZi3y5aChange: Me,
                          ondo45skV7QChange: Ae,
                          style: { width: `100%` },
                          variant: Y(`n3wS3jHGx`),
                          width: `100%`,
                          ...J({ HqRWBSiQs: { variant: Y(`oUnXpoTkH`) } }, V, H),
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
          `.framer-yKefC.framer-bmpv9a, .framer-yKefC .framer-bmpv9a { display: block; }`,
          `.framer-yKefC.framer-109ktyb { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1100px; }`,
          `.framer-yKefC .framer-5kxrlq-container, .framer-yKefC .framer-18cz5m4-container, .framer-yKefC .framer-1yatkv-container, .framer-yKefC .framer-1jumktm-container, .framer-yKefC .framer-2lwgwz-container, .framer-yKefC .framer-139dmqj-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-yKefC`
      )),
      (Z.displayName = `FAQs`),
      (Z.defaultProps = { height: 382, width: 1100 }),
      T(Z, {
        variant: {
          options: [`TnKZR7n2w`, `tt8NHPpkJ`, `ZKErrM0xd`, `jQCIu9q0k`, `Ctw2mtdAf`, `HqRWBSiQs`],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
          ],
          title: `Variant`,
          type: R.Enum,
        },
        LdrSWjYU8: {
          defaultValue: `How long does shipping take?`,
          displayTextArea: !1,
          title: `Title 1`,
          type: R.String,
        },
        onLdrSWjYU8Change: { changes: `LdrSWjYU8`, type: R.ChangeHandler },
        N49OQKBnz: {
          defaultValue: `Orders are typically processed within 1–2 business days and delivered based on your selected shipping method.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 1`,
          type: R.String,
        },
        onN49OQKBnzChange: { changes: `N49OQKBnz`, type: R.ChangeHandler },
        SHoB3a4HJ: {
          defaultValue: `Do you offer international shipping?`,
          displayTextArea: !1,
          title: `Title 2`,
          type: R.String,
        },
        onSHoB3a4HJChange: { changes: `SHoB3a4HJ`, type: R.ChangeHandler },
        tw1TI2c1i: {
          defaultValue: `Yes, we ship to many countries worldwide. Shipping rates and delivery times vary by location.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 2`,
          type: R.String,
        },
        ontw1TI2c1iChange: { changes: `tw1TI2c1i`, type: R.ChangeHandler },
        q5fZzJVr7: {
          defaultValue: `What is your return policy?`,
          displayTextArea: !1,
          title: `Title 3`,
          type: R.String,
        },
        onq5fZzJVr7Change: { changes: `q5fZzJVr7`, type: R.ChangeHandler },
        d1q8oS9D9: {
          defaultValue: `Eligible items can be returned within the specified return window if they are unworn and in original condition.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 3`,
          type: R.String,
        },
        ond1q8oS9D9Change: { changes: `d1q8oS9D9`, type: R.ChangeHandler },
        NsZopXCZP: {
          defaultValue: `How do I choose the right size?`,
          displayTextArea: !1,
          title: `Title 4`,
          type: R.String,
        },
        onNsZopXCZPChange: { changes: `NsZopXCZP`, type: R.ChangeHandler },
        YmYLTOG3O: {
          defaultValue: `Use our size guide on each product page to find the best fit based on your measurements.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 4`,
          type: R.String,
        },
        onYmYLTOG3OChange: { changes: `YmYLTOG3O`, type: R.ChangeHandler },
        xrtEV0tuL: {
          defaultValue: `Can I track my order?`,
          displayTextArea: !1,
          title: `Title 5`,
          type: R.String,
        },
        onxrtEV0tuLChange: { changes: `xrtEV0tuL`, type: R.ChangeHandler },
        tZ6aNBo8D: {
          defaultValue: `Yes, once your order ships, you'll receive a tracking link by email to follow its progress.`,
          description: `______________________`,
          displayTextArea: !0,
          title: `Description 5`,
          type: R.String,
        },
        ontZ6aNBo8DChange: { changes: `tZ6aNBo8D`, type: R.ChangeHandler },
        YBufhC79Q: {
          defaultValue: `How can I contact support?`,
          displayTextArea: !1,
          title: `Title 6`,
          type: R.String,
        },
        onYBufhC79QChange: { changes: `YBufhC79Q`, type: R.ChangeHandler },
        Q5UyCtm5H: {
          defaultValue: `You can reach our support team through the contact form or by using the contact details provided on this page.`,
          displayTextArea: !0,
          title: `Description 6`,
          type: R.String,
        },
        onQ5UyCtm5HChange: { changes: `Q5UyCtm5H`, type: R.ChangeHandler },
      }),
      w(Z, [{ explicitInter: !0, fonts: [] }, ...ze], { supportsExplicitInterCodegen: !0 }),
      (Z.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(q, {}, t)])) }));
  });
function Xe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  Q,
  dt = e(() => {
    (s(),
      k(),
      m(),
      t(),
      de(),
      (Ze = C(f.div)),
      (Qe = { Hlr5uJK5x: { hover: !0, pressed: !0 } }),
      ($e = [`Hlr5uJK5x`, `k3OH1VSJb`, `WGz3J8z2A`, `udVgMTNfp`, `ZW8shVni_`]),
      (et = `framer-TeUn4`),
      (tt = {
        Hlr5uJK5x: `framer-v-r1h509`,
        k3OH1VSJb: `framer-v-8ggxco`,
        udVgMTNfp: `framer-v-1qdnzlw`,
        WGz3J8z2A: `framer-v-b7u3k4`,
        ZW8shVni_: `framer-v-10qs8kv`,
      }),
      (nt = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (rt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (it = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (at = (e, t) => `translateX(-50%) ${t}`),
      (ot = ({ value: e, children: t }) => {
        let n = i(p),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(p.Provider, { value: o, children: t });
      }),
      (st = {
        Default: `Hlr5uJK5x`,
        Disabled: `WGz3J8z2A`,
        Error: `ZW8shVni_`,
        Loading: `k3OH1VSJb`,
        Success: `udVgMTNfp`,
      }),
      (ct = f.create(r)),
      (lt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: st[r.variant] ?? r.variant ?? `Hlr5uJK5x`,
      })),
      (ut = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = y(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = j();
          F();
          let { style: d, className: p, layoutId: m, variant: h, ...g } = lt(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = O({
              cycleOrder: $e,
              defaultVariant: `Hlr5uJK5x`,
              enabledGestures: Qe,
              ref: a,
              variant: h,
              variantClassNames: tt,
            }),
            k = ut(e, E),
            A = x(et, he),
            M = () => _ !== `k3OH1VSJb`,
            N = () => _ === `k3OH1VSJb`;
          return l(te, {
            id: m ?? s,
            children: l(ct, {
              animate: E,
              initial: !1,
              children: l(ot, {
                value: nt,
                children: u(f.button, {
                  ...g,
                  ...b,
                  className: x(A, `framer-r1h509`, p, v),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: k,
                  layoutId: `Hlr5uJK5x`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                    borderBottomLeftRadius: 200,
                    borderBottomRightRadius: 200,
                    borderTopLeftRadius: 200,
                    borderTopRightRadius: 200,
                    opacity: 1,
                    ...d,
                  },
                  variants: {
                    "Hlr5uJK5x-hover": {
                      backgroundColor: `var(--token-603d7e0f-6fcc-45a2-988c-5eb69e68e97f, rgb(46, 46, 46))`,
                      opacity: 1,
                    },
                    "Hlr5uJK5x-pressed": {
                      backgroundColor: `var(--token-603d7e0f-6fcc-45a2-988c-5eb69e68e97f, rgb(46, 46, 46))`,
                      opacity: 1,
                    },
                    udVgMTNfp: { opacity: 1 },
                    WGz3J8z2A: { opacity: 0.7 },
                    ZW8shVni_: {
                      backgroundColor: `var(--token-5665cc6d-5628-4dad-9341-7336cdca6222)`,
                      opacity: 1,
                    },
                  },
                  ...Xe(
                    {
                      "Hlr5uJK5x-hover": { "data-framer-name": void 0 },
                      "Hlr5uJK5x-pressed": { "data-framer-name": void 0 },
                      k3OH1VSJb: { "data-framer-name": `Loading` },
                      udVgMTNfp: { "data-framer-name": `Success` },
                      WGz3J8z2A: { "data-framer-name": `Disabled` },
                      ZW8shVni_: { "data-framer-name": `Error` },
                    },
                    _,
                    S
                  ),
                  children: [
                    M() &&
                      l(D, {
                        __fromCanvasComponent: !0,
                        children: l(r, {
                          children: l(f.p, {
                            className: `framer-styles-preset-hhy7lj`,
                            "data-styles-preset": `jqlnmWM57`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-hviej4`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `JATqbZDSi`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          ZW8shVni_: {
                            "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Xe(
                          {
                            udVgMTNfp: {
                              children: l(r, {
                                children: l(f.p, {
                                  className: `framer-styles-preset-hhy7lj`,
                                  "data-styles-preset": `jqlnmWM57`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                            },
                            ZW8shVni_: {
                              children: l(r, {
                                children: l(f.p, {
                                  className: `framer-styles-preset-hhy7lj`,
                                  "data-styles-preset": `jqlnmWM57`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                          },
                          _,
                          S
                        ),
                      }),
                    N() &&
                      l(f.div, {
                        className: `framer-1qicfpc`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: k,
                        layoutId: `tpsgkQzjL`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: l(Ze, {
                          __framer__loop: it,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: rt,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1g5u18r`,
                          "data-framer-name": `Conic`,
                          layoutDependency: k,
                          layoutId: `BI0N9DOD2`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            k3OH1VSJb: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: l(f.div, {
                            className: `framer-11wsb9j`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: k,
                            layoutId: `rqMVDbv1V`,
                            style: {
                              backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: at,
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
          `.framer-TeUn4.framer-bsescu, .framer-TeUn4 .framer-bsescu { display: block; }`,
          `.framer-TeUn4.framer-r1h509 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 51px; justify-content: center; overflow: visible; padding: 16px 60px 16px 60px; position: relative; width: 210px; }`,
          `.framer-TeUn4 .framer-hviej4 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-TeUn4 .framer-1qicfpc { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-TeUn4 .framer-1g5u18r { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-TeUn4 .framer-11wsb9j { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-TeUn4.framer-v-8ggxco.framer-r1h509, .framer-TeUn4.framer-v-b7u3k4.framer-r1h509, .framer-TeUn4.framer-v-1qdnzlw.framer-r1h509, .framer-TeUn4.framer-v-10qs8kv.framer-r1h509 { cursor: unset; }`,
          `.framer-TeUn4.framer-v-8ggxco .framer-1g5u18r { overflow: hidden; }`,
          ...fe,
        ],
        `framer-TeUn4`
      )),
      (Q.displayName = `Button`),
      (Q.defaultProps = { height: 51, width: 210 }),
      T(Q, {
        variant: {
          options: [`Hlr5uJK5x`, `k3OH1VSJb`, `WGz3J8z2A`, `udVgMTNfp`, `ZW8shVni_`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      w(
        Q,
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
          ...b(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
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
  $,
  Mt;
e(() => {
  (s(),
    k(),
    m(),
    t(),
    Ye(),
    dt(),
    be(),
    ge(),
    we(),
    de(),
    B(),
    je(),
    (ft = M(Q)),
    (pt = C(f.div)),
    (mt = M(Z)),
    (ht = C(N)),
    (gt = {
      dVLYQj8L7: `(min-width: 810px) and (max-width: 1199.98px)`,
      EwYB5yloY: `(max-width: 809.98px)`,
      vrxNYbhuT: `(min-width: 1200px)`,
    }),
    (_t = []),
    (vt = `framer-5rDJF`),
    (yt = {
      dVLYQj8L7: `framer-v-p7tnk9`,
      EwYB5yloY: `framer-v-ri6skn`,
      vrxNYbhuT: `framer-v-elq7em`,
    }),
    (bt = (e, t, n) => (e && t ? `position` : n)),
    (xt = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 20, y: 0 },
      repeat: !1,
      startDelay: 0,
      tokenization: `character`,
      transition: { delay: 0.05, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (St = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 },
      repeat: !1,
      startDelay: 0.4,
      tokenization: `character`,
      transition: { delay: 0.01, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (Ct = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (wt = { delay: 0.7, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (Tt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.34, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Et = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Dt = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Ot = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (kt = { Desktop: `vrxNYbhuT`, Phone: `EwYB5yloY`, Tablet: `dVLYQj8L7` }),
    (At = ({ value: e }) =>
      ae()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (jt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: kt[r.variant] ?? r.variant ?? `vrxNYbhuT`,
    })),
    ($ = y(
      c(function (e, t) {
        let s = o(null),
          c = t ?? s,
          d = n(),
          { activeLocale: m, setLocale: h } = j(),
          y = F(),
          { style: b, className: C, layoutId: w, variant: T, ...O } = jt(e);
        v(a(() => Ae({}, m), [m]));
        let [k, A] = oe(T, gt, !1),
          M = x(vt, De, Ce, he, le, ye),
          R = i(P)?.isLayoutTemplate,
          re = !!i(p)?.transition?.layout,
          ae = bt(R, re),
          B = g(`AsqwjyrCa`),
          se = E(),
          ce = g(`xguYCk1n2`),
          ue = o(null);
        return (
          ie({}),
          l(P.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: kt,
              primaryVariantId: `vrxNYbhuT`,
              variantClassNames: yt,
            },
            children: u(te, {
              id: w ?? d,
              children: [
                l(At, { value: `html body { background: rgb(0, 0, 0); }` }),
                l(f.div, {
                  ...O,
                  className: x(M, `framer-elq7em`, C),
                  ref: c,
                  style: { ...b },
                  children: u(f.main, {
                    className: `framer-1r6hp41`,
                    "data-framer-name": `Main`,
                    layout: ae,
                    children: [
                      u(`section`, {
                        className: `framer-1pjzc7t`,
                        "data-framer-name": `Section - Hero`,
                        children: [
                          u(`div`, {
                            className: `framer-gt5n1l`,
                            "data-framer-name": `Content`,
                            children: [
                              l(D, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(`h1`, {
                                    className: `framer-styles-preset-6khajo`,
                                    "data-styles-preset": `egz88BsrP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    },
                                    children: `Get in Touch`,
                                  }),
                                }),
                                className: `framer-r65gi3`,
                                "data-framer-name": `Title`,
                                effect: xt,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(D, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-g91u7x`,
                                    "data-styles-preset": `AeW2_n5fC`,
                                    dir: `auto`,
                                    children: `Have a question about an order, product, or partnership? We'd love to hear from you and will get back soon.`,
                                  }),
                                }),
                                className: `framer-1l8dnbe`,
                                "data-framer-name": `Description`,
                                effect: St,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          l(`div`, {
                            className: `framer-147y0xl`,
                            "data-framer-name": `Nav Trigger`,
                            id: B,
                            ref: se(B),
                          }),
                        ],
                      }),
                      l(`section`, {
                        className: `framer-hv71q6`,
                        "data-framer-name": `Section - Content`,
                        children: u(pt, {
                          __framer__animate: { transition: wt },
                          __framer__animateOnce: !0,
                          __framer__enter: Ct,
                          __framer__exit: Tt,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1q7jsvz`,
                          "data-framer-name": `Container`,
                          children: [
                            u(`div`, {
                              className: `framer-w6wuq1`,
                              "data-framer-name": `Left`,
                              children: [
                                l(_, {
                                  breakpoint: k,
                                  overrides: {
                                    dVLYQj8L7: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1600,
                                        intrinsicWidth: 1280,
                                        loading: S(
                                          (y?.y || 0) + 0 + 0 + 0 + 436.8 + 36 + 0 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 1600,
                                        pixelWidth: 1280,
                                        sizes: `max((min(min(${y?.width || `100vw`}, 1600px), 1360px) - 100px) / 2, 1px)`,
                                        src: `../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY-f3de15.png`,
                                        srcSet: `../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY.png 819w,../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY-f3de15.png 1280w`,
                                      },
                                    },
                                    EwYB5yloY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1600,
                                        intrinsicWidth: 1280,
                                        pixelHeight: 1600,
                                        pixelWidth: 1280,
                                        sizes: `calc(min(min(${y?.width || `100vw`}, 1600px), 1360px) - 40px)`,
                                        src: `../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY-f3de15.png`,
                                        srcSet: `../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY.png 819w,../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY-f3de15.png 1280w`,
                                      },
                                    },
                                  },
                                  children: l(L, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1600,
                                      intrinsicWidth: 1280,
                                      loading: S(
                                        (y?.y || 0) + 0 + 0 + 0 + 440.8 + 40 + 0 + 0 + 0 + 0
                                      ),
                                      pixelHeight: 1600,
                                      pixelWidth: 1280,
                                      sizes: `max((min(min(${y?.width || `100vw`}, 1600px), 1360px) - 140px) / 2, 1px)`,
                                      src: `../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY-f3de15.png`,
                                      srcSet: `../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY.png 819w,../../assets/images/20ZkRn7fXr7v8CwHM2RyP4iPkBY-f3de15.png 1280w`,
                                    },
                                    className: `framer-1n9cidv`,
                                    "data-framer-name": `Image`,
                                  }),
                                }),
                                u(`div`, {
                                  className: `framer-1xdldq5`,
                                  "data-framer-name": `Bottom`,
                                  children: [
                                    u(`div`, {
                                      className: `framer-17k0dr3`,
                                      "data-framer-name": `Wrap`,
                                      children: [
                                        l(D, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-hhy7lj`,
                                              "data-styles-preset": `jqlnmWM57`,
                                              dir: `auto`,
                                              children: `Email`,
                                            }),
                                          }),
                                          className: `framer-19d0j9k`,
                                          "data-framer-name": `Email`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(D, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-8kmloq`,
                                              "data-styles-preset": `MYFsM6f0k`,
                                              dir: `auto`,
                                              children: `hello@ecom.shop`,
                                            }),
                                          }),
                                          className: `framer-ijnbc8`,
                                          "data-framer-name": `ecom@framer.com`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    u(`div`, {
                                      className: `framer-4vnqsd`,
                                      "data-framer-name": `Wrap`,
                                      children: [
                                        l(D, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-hhy7lj`,
                                              "data-styles-preset": `jqlnmWM57`,
                                              dir: `auto`,
                                              children: `Phone number`,
                                            }),
                                          }),
                                          className: `framer-d98gmy`,
                                          "data-framer-name": `Phone number`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(D, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-8kmloq`,
                                              "data-styles-preset": `MYFsM6f0k`,
                                              dir: `auto`,
                                              children: `(123) 456 789`,
                                            }),
                                          }),
                                          className: `framer-163lqik`,
                                          "data-framer-name": `(123) 456 789`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    u(`div`, {
                                      className: `framer-1hrcyli`,
                                      "data-framer-name": `Wrap`,
                                      children: [
                                        l(D, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-hhy7lj`,
                                              "data-styles-preset": `jqlnmWM57`,
                                              dir: `auto`,
                                              children: `Location`,
                                            }),
                                          }),
                                          className: `framer-vmnmss`,
                                          "data-framer-name": `Location`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(D, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-8kmloq`,
                                              "data-styles-preset": `MYFsM6f0k`,
                                              dir: `auto`,
                                              children: `California, USA`,
                                            }),
                                          }),
                                          className: `framer-v34h7i`,
                                          "data-framer-name": `California, USA`,
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
                            l(`div`, {
                              className: `framer-b53bpg`,
                              "data-framer-name": `Right`,
                              children: l(ne, {
                                className: `framer-1foim52`,
                                nodeId: `NgH68gVRX`,
                                children: (e) =>
                                  u(ee, {
                                    children: [
                                      u(`div`, {
                                        className: `framer-102hqrr`,
                                        "data-framer-name": `Wrap`,
                                        children: [
                                          u(`label`, {
                                            className: `framer-1o1faqf`,
                                            children: [
                                              l(D, {
                                                __fromCanvasComponent: !0,
                                                children: l(r, {
                                                  children: l(`p`, {
                                                    className: `framer-styles-preset-hhy7lj`,
                                                    "data-styles-preset": `jqlnmWM57`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                                    },
                                                    children: `Name`,
                                                  }),
                                                }),
                                                className: `framer-7tmm51`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              l(z, {
                                                autoFocus: !0,
                                                className: `framer-61zkp9`,
                                                inputName: `Name`,
                                                placeholder: `Your full name`,
                                                required: !0,
                                                type: `text`,
                                              }),
                                            ],
                                          }),
                                          u(`label`, {
                                            className: `framer-1gfp21y`,
                                            children: [
                                              l(D, {
                                                __fromCanvasComponent: !0,
                                                children: l(r, {
                                                  children: l(`p`, {
                                                    className: `framer-styles-preset-hhy7lj`,
                                                    "data-styles-preset": `jqlnmWM57`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                                    },
                                                    children: `Email`,
                                                  }),
                                                }),
                                                className: `framer-13zicj2`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              l(z, {
                                                className: `framer-197h1c`,
                                                inputName: `Email`,
                                                placeholder: `Your email address`,
                                                required: !0,
                                                type: `email`,
                                              }),
                                            ],
                                          }),
                                          u(`label`, {
                                            className: `framer-1gdzg4n`,
                                            children: [
                                              l(D, {
                                                __fromCanvasComponent: !0,
                                                children: l(r, {
                                                  children: l(`p`, {
                                                    className: `framer-styles-preset-hhy7lj`,
                                                    "data-styles-preset": `jqlnmWM57`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                                    },
                                                    children: `Phone`,
                                                  }),
                                                }),
                                                className: `framer-nx3tcq`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              l(z, {
                                                className: `framer-1edv6xs`,
                                                inputName: `Email`,
                                                placeholder: `Your phone number`,
                                                required: !0,
                                                type: `text`,
                                              }),
                                            ],
                                          }),
                                          u(`label`, {
                                            className: `framer-165gbyw`,
                                            children: [
                                              l(D, {
                                                __fromCanvasComponent: !0,
                                                children: l(r, {
                                                  children: l(`p`, {
                                                    className: `framer-styles-preset-hhy7lj`,
                                                    "data-styles-preset": `jqlnmWM57`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                                    },
                                                    children: `Message`,
                                                  }),
                                                }),
                                                className: `framer-1isth2`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              l(z, {
                                                className: `framer-q6ogct`,
                                                inputName: `Email`,
                                                placeholder: `Write your message here`,
                                                required: !0,
                                                type: `textarea`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l(_, {
                                        breakpoint: k,
                                        overrides: {
                                          dVLYQj8L7: {
                                            height: 48,
                                            width: `max((min(min(${y?.width || `100vw`}, 1600px), 1360px) - 100px) / 2, 1px)`,
                                          },
                                          EwYB5yloY: {
                                            height: 46,
                                            width: `max(min(min(${y?.width || `100vw`}, 1600px), 1360px) - 40px, 1px)`,
                                          },
                                        },
                                        children: l(I, {
                                          height: 50,
                                          width: `max((min(min(${y?.width || `100vw`}, 1600px), 1360px) - 140px) / 2, 1px)`,
                                          children: l(N, {
                                            className: `framer-17grole-container`,
                                            nodeId: `qE87qL8vL`,
                                            scopeId: `D6rOOyLmQ`,
                                            children: l(Q, {
                                              height: `100%`,
                                              id: `qE87qL8vL`,
                                              layoutId: `qE87qL8vL`,
                                              style: { height: `100%`, width: `100%` },
                                              type: `submit`,
                                              variant: Dt(
                                                e,
                                                { pending: `k3OH1VSJb`, success: `udVgMTNfp` },
                                                Et(`Hlr5uJK5x`)
                                              ),
                                              width: `100%`,
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
                      }),
                      u(`section`, {
                        className: `framer-6en2i1`,
                        "data-framer-name": `Section - FAQ`,
                        id: ce,
                        ref: ue,
                        children: [
                          l(pt, {
                            __framer__animate: { transition: Ot },
                            __framer__animateOnce: !0,
                            __framer__enter: Ct,
                            __framer__exit: Tt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-be2o8u`,
                            "data-framer-name": `Container`,
                            children: u(`div`, {
                              className: `framer-1m7moj1`,
                              "data-framer-name": `Wrap`,
                              children: [
                                l(D, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-vuspyx`,
                                      "data-styles-preset": `ANhE2fRBl`,
                                      dir: `auto`,
                                      children: `FAQs`,
                                    }),
                                  }),
                                  className: `framer-2pywuk`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(D, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-g91u7x`,
                                      "data-styles-preset": `AeW2_n5fC`,
                                      dir: `auto`,
                                      children: `Find answers to common questions about orders, shipping, returns, sizing, and more.`,
                                    }),
                                  }),
                                  className: `framer-2arsch`,
                                  "data-framer-name": `Description`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          l(_, {
                            breakpoint: k,
                            overrides: {
                              dVLYQj8L7: {
                                width: `calc(min(min(${y?.width || `100vw`}, 1600px), 1360px) - 60px)`,
                                y: (y?.y || 0) + 0 + 0 + 0 + 1204.6 + 76 + 270,
                              },
                              EwYB5yloY: {
                                width: `calc(min(min(${y?.width || `100vw`}, 1600px), 1360px) - 40px)`,
                                y: void 0,
                              },
                            },
                            children: l(I, {
                              height: 382,
                              width: `calc(min(min(${y?.width || `100vw`}, 1600px), 1360px) - 100px)`,
                              y: (y?.y || 0) + 0 + 0 + 0 + 1255.2 + 84 + 270,
                              children: l(ht, {
                                __framer__animate: { transition: Ot },
                                __framer__animateOnce: !0,
                                __framer__enter: Ct,
                                __framer__exit: Tt,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1kp0qkh-container`,
                                nodeId: `WmjrNO5K3`,
                                rendersWithMotion: !0,
                                scopeId: `D6rOOyLmQ`,
                                children: l(Z, {
                                  d1q8oS9D9: `Eligible items can be returned within the specified return window if they are unworn and in original condition.`,
                                  height: `100%`,
                                  id: `WmjrNO5K3`,
                                  layoutId: `WmjrNO5K3`,
                                  LdrSWjYU8: `How long does shipping take?`,
                                  N49OQKBnz: `Orders are typically processed within 1–2 business days and delivered based on your selected shipping method.`,
                                  NsZopXCZP: `How do I choose the right size?`,
                                  q5fZzJVr7: `What is your return policy?`,
                                  Q5UyCtm5H: `You can reach our support team through the contact form or by using the contact details provided on this page.`,
                                  SHoB3a4HJ: `Do you offer international shipping?`,
                                  style: { width: `100%` },
                                  tw1TI2c1i: `Yes, we ship to many countries worldwide. Shipping rates and delivery times vary by location.`,
                                  tZ6aNBo8D: `Yes, once your order ships, you'll receive a tracking link by email to follow its progress.`,
                                  variant: Et(`TnKZR7n2w`),
                                  width: `100%`,
                                  xrtEV0tuL: `Can I track my order?`,
                                  YBufhC79Q: `How can I contact support?`,
                                  YmYLTOG3O: `Use our size guide on each product page to find the best fit based on your measurements.`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-5rDJF.framer-1m0pgev, .framer-5rDJF .framer-1m0pgev { display: block; }`,
        `.framer-5rDJF.framer-elq7em { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-5rDJF .framer-1r6hp41 { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-1pjzc7t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 108px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-gt5n1l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 50px 0px 50px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-5rDJF .framer-r65gi3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 653px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5rDJF .framer-1l8dnbe { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5rDJF .framer-147y0xl { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 80px; z-index: 1; }`,
        `.framer-5rDJF .framer-hv71q6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-1q7jsvz { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-w6wuq1 { align-content: center; align-items: center; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-5rDJF .framer-1n9cidv { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; gap: 0px; height: 614px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-5rDJF .framer-1xdldq5 { display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-17k0dr3, .framer-5rDJF .framer-4vnqsd, .framer-5rDJF .framer-1hrcyli { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-19d0j9k, .framer-5rDJF .framer-ijnbc8, .framer-5rDJF .framer-d98gmy, .framer-5rDJF .framer-163lqik, .framer-5rDJF .framer-vmnmss, .framer-5rDJF .framer-v34h7i { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-5rDJF .framer-b53bpg { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 0.5 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px 16px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-5rDJF .framer-1foim52 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-5rDJF .framer-102hqrr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-1o1faqf, .framer-5rDJF .framer-1gfp21y, .framer-5rDJF .framer-1gdzg4n, .framer-5rDJF .framer-165gbyw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-7tmm51, .framer-5rDJF .framer-13zicj2, .framer-5rDJF .framer-nx3tcq, .framer-5rDJF .framer-1isth2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-5rDJF .framer-61zkp9, .framer-5rDJF .framer-197h1c, .framer-5rDJF .framer-1edv6xs { --framer-input-background: var(--token-b1f89d39-57aa-4efb-8816-14116952e648, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 200px; --framer-input-border-radius-bottom-right: 200px; --framer-input-border-radius-top-left: 200px; --framer-input-border-radius-top-right: 200px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-input-font-family: "General Sans"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 15px 20px 15px 20px; --framer-input-placeholder-color: #757575; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-q6ogct { --framer-input-background: var(--token-b1f89d39-57aa-4efb-8816-14116952e648, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-input-font-family: "General Sans"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 15px 20px 15px 20px; --framer-input-placeholder-color: #757575; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 133px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-17grole-container { flex: none; height: 50px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-6en2i1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 66px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 128px 50px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-5rDJF .framer-be2o8u { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5rDJF .framer-1m7moj1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-5rDJF .framer-2pywuk { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5rDJF .framer-2arsch { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5rDJF .framer-1kp0qkh-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Te,
        ...xe,
        ...fe,
        ...se,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-5rDJF.framer-elq7em { width: 810px; } .framer-5rDJF .framer-1pjzc7t { padding: 108px 0px 36px 0px; } .framer-5rDJF .framer-gt5n1l { padding: 60px 30px 0px 30px; } .framer-5rDJF .framer-hv71q6 { padding: 36px 30px 84px 30px; } .framer-5rDJF .framer-w6wuq1 { gap: 30px; } .framer-5rDJF .framer-1n9cidv { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; height: 517px; } .framer-5rDJF .framer-1xdldq5 { gap: 20px 20px; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); } .framer-5rDJF .framer-102hqrr { gap: 20px; } .framer-5rDJF .framer-1o1faqf, .framer-5rDJF .framer-1gfp21y, .framer-5rDJF .framer-1gdzg4n, .framer-5rDJF .framer-165gbyw { gap: 16px; } .framer-5rDJF .framer-17grole-container { height: 48px; } .framer-5rDJF .framer-6en2i1 { padding: 76px 30px 76px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-5rDJF.framer-elq7em { width: 390px; } .framer-5rDJF .framer-1pjzc7t { padding: 98px 0px 20px 0px; } .framer-5rDJF .framer-gt5n1l { padding: 60px 20px 0px 20px; } .framer-5rDJF .framer-hv71q6 { padding: 20px 20px 68px 20px; } .framer-5rDJF .framer-1q7jsvz { flex-direction: column; gap: 60px; } .framer-5rDJF .framer-w6wuq1 { flex: none; gap: 30px; order: 1; width: 100%; } .framer-5rDJF .framer-1n9cidv { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; height: 309px; } .framer-5rDJF .framer-1xdldq5 { gap: 20px 20px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-5rDJF .framer-b53bpg { align-self: unset; flex: none; height: min-content; order: 0; width: 100%; } .framer-5rDJF .framer-1foim52 { height: min-content; } .framer-5rDJF .framer-1o1faqf, .framer-5rDJF .framer-1gfp21y, .framer-5rDJF .framer-1gdzg4n, .framer-5rDJF .framer-165gbyw { gap: 16px; } .framer-5rDJF .framer-61zkp9, .framer-5rDJF .framer-197h1c, .framer-5rDJF .framer-1edv6xs, .framer-5rDJF .framer-q6ogct { --framer-input-padding: 14px 20px 14px 20px; } .framer-5rDJF .framer-17grole-container { height: 46px; } .framer-5rDJF .framer-6en2i1 { padding: 68px 20px 68px 20px; }}`,
      ],
      `framer-5rDJF`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 4412, width: 1200 }),
    w(
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
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ft,
        ...mt,
        ...b(Ee),
        ...b(Se),
        ...b(me),
        ...b(ce),
        ...b(ve),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(Q, {}, t), A(Z, {}, t)])) }),
    (Mt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerD6rOOyLmQ`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `4412`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"AsqwjyrCa":{"pattern":":AsqwjyrCa","name":"Nav Trigger"},"xguYCk1n2":{"pattern":":xguYCk1n2","name":"faqs"}}`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"dVLYQj8L7":{"layout":["fixed","fixed"]},"EwYB5yloY":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Mt as __FramerMetadata__, $ as default, _t as queryParamNames };
//# sourceMappingURL=EaIsikLLlwfQR4mjlCWKhaEyIW6fmXeIcokdYNmIjaE.gIxmAnO5.mjs.map
