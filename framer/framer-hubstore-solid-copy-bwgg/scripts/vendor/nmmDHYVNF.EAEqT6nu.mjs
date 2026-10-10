import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as n,
  D as r,
  H as i,
  L as a,
  N as o,
  P as s,
  V as c,
  j as l,
  l as u,
  s as d,
  u as f,
  v as p,
  x as m,
} from "./react.ClsXD4bF.mjs";
import { a as h, r as g, t as _, w as v } from "./motion.ClyXVVeQ.mjs";
import {
  A as y,
  Dt as b,
  F as x,
  G as S,
  I as C,
  M as w,
  O as T,
  Ot as E,
  U as D,
  W as O,
  Z as k,
  dt as A,
  ft as j,
  i as M,
  j as N,
  jt as P,
  kt as F,
  m as ee,
  o as I,
  s as L,
  w as R,
  yt as z,
} from "./framer.CbUxDv78.mjs";
import { i as B, n as V, r as H, t as te } from "./wEX21mXRe.BeCcrLA7.mjs";
import { n as ne, t as re } from "./Phosphor.B88JeVu1.mjs";
import { i as ie, n as ae, r as oe, t as se } from "./IwoeRBoDn.CVNhweph.mjs";
function ce() {
  return {
    onClick: async () => {
      let e = i.location.href;
      try {
        (await c.clipboard.writeText(e), console.log(`Link copied to clipboard:`, e));
      } catch (e) {
        console.error(`Failed to copy link to clipboard:`, e);
      }
    },
  };
}
function le() {
  return {
    onClick: async () => {
      let e = i.location.href,
        t = `https://twitter.com/intent/tweet?url=${encodeURIComponent(e)}`;
      try {
        (await c.clipboard.writeText(e), console.log(`Link copied to clipboard:`, e));
      } catch (e) {
        console.error(`Failed to copy link to clipboard:`, e);
      }
      i.open(t, `_blank`, `width=600,height=400`);
    },
  };
}
function ue() {
  return {
    onClick: (e) => {
      e.preventDefault();
      let t = i.location.href,
        n = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t)}`;
      i.open(n, `_blank`, `width=600,height=400`);
    },
  };
}
function de() {
  return {
    onClick: () => {
      let e = i.location.href,
        t = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}`;
      i.open(t, `facebook-share-dialog`, `width=800,height=600`);
    },
  };
}
function fe(e) {
  return (t) => (o(L), u(e, { ...t, ...ce(t) }));
}
function pe(e) {
  return (t) => (o(L), u(e, { ...t, ...le(t) }));
}
function me(e) {
  return (t) => (o(L), u(e, { ...t, ...ue(t) }));
}
function he(e) {
  return (t) => (o(L), u(e, { ...t, ...de(t) }));
}
var ge = t(() => {
    (n(),
      d(),
      r(),
      k(),
      (fe.displayName = `CopyLinkOnClick`),
      (pe.displayName = `shareCurrentPageOnTwitter`),
      (me.displayName = `shareCurrentPageOnLinkedIn`),
      (he.displayName = `shareCurrentPageOnFacebook`));
  }),
  _e,
  ve,
  ye,
  be = t(() => {
    (k(),
      C.loadFonts([`GF;DM Sans-700`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (_e = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `../../assets/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ve = [
        `.framer-4TIUf .framer-styles-preset-gzn8zy:not(.rich-text-wrapper), .framer-4TIUf .framer-styles-preset-gzn8zy.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.25em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, #101703); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-4TIUf .framer-styles-preset-gzn8zy:not(.rich-text-wrapper), .framer-4TIUf .framer-styles-preset-gzn8zy.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.25em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, #101703); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (ye = `framer-4TIUf`));
  }),
  xe = e({ __FramerMetadata__: () => Pe, default: () => Ne });
function Se(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe = t(() => {
    (d(),
      k(),
      _(),
      r(),
      ne(),
      B(),
      (Ce = D(re)),
      (we = [`nrOWns_xY`, `xsLmeSNUM`]),
      (Te = `framer-Ifo5v`),
      (Ee = { nrOWns_xY: `framer-v-1x2nl6l`, xsLmeSNUM: `framer-v-1lv2yd7` }),
      (De = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Oe = ({ value: e, children: t }) => {
        let n = o(h),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(h.Provider, { value: i, children: t });
      }),
      (ke = v.create(a)),
      (Ae = { Copied: `xsLmeSNUM`, Default: `nrOWns_xY` }),
      (je = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ae[r.variant] ?? r.variant ?? `nrOWns_xY`,
      })),
      (Me = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ne = E(
        p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = m(),
            { activeLocale: o, setLocale: s } = z();
          j();
          let { style: c, className: d, layoutId: p, variant: h, ..._ } = je(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: N,
              variants: P,
            } = b({
              cycleOrder: we,
              defaultVariant: `nrOWns_xY`,
              ref: r,
              variant: h,
              variantClassNames: Ee,
            }),
            F = Me(e, P),
            { activeVariantCallback: ee, delay: I } = A(S),
            L = ee(async (...e) => {
              (k({ isPressed: !1 }), N(`xsLmeSNUM`));
            }),
            R = x(Te, te);
          return u(g, {
            id: p ?? i,
            children: u(ke, {
              animate: P,
              initial: !1,
              children: u(Oe, {
                value: De,
                children: f(v.div, {
                  ..._,
                  ...E,
                  className: x(R, `framer-1x2nl6l`, d, C),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: F,
                  layoutId: `nrOWns_xY`,
                  onTap: L,
                  ref: r,
                  style: { ...c },
                  ...Se({ xsLmeSNUM: { "data-framer-name": `Copied` } }, S, D),
                  children: [
                    u(M, {
                      children: u(y, {
                        className: `framer-18i7cpr-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: F,
                        layoutId: `nqXlGyLqE-container`,
                        nodeId: `nqXlGyLqE`,
                        rendersWithMotion: !0,
                        scopeId: `PVY6aP3vB`,
                        children: u(re, {
                          color: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `Copy`,
                          id: `nqXlGyLqE`,
                          layoutId: `nqXlGyLqE`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `regular`,
                          width: `100%`,
                          ...Se({ xsLmeSNUM: { iconSelection: `Check` } }, S, D),
                        }),
                      }),
                    }),
                    u(T, {
                      __fromCanvasComponent: !0,
                      children: u(a, {
                        children: u(v.p, {
                          className: `framer-styles-preset-1pumtl1`,
                          "data-styles-preset": `wEX21mXRe`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                          },
                          children: `Copy`,
                        }),
                      }),
                      className: `framer-1tud3k9`,
                      "data-framer-name": `Preview`,
                      fonts: [`Inter`],
                      layoutDependency: F,
                      layoutId: `IvIfCBdcW`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Se(
                        {
                          xsLmeSNUM: {
                            children: u(a, {
                              children: u(v.p, {
                                className: `framer-styles-preset-1pumtl1`,
                                "data-styles-preset": `wEX21mXRe`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                                },
                                children: `Copied`,
                              }),
                            }),
                          },
                        },
                        S,
                        D
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Ifo5v.framer-24t1wv, .framer-Ifo5v .framer-24t1wv { display: block; }`,
          `.framer-Ifo5v.framer-1x2nl6l { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 12px; position: relative; width: min-content; }`,
          `.framer-Ifo5v .framer-18i7cpr-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-Ifo5v .framer-1tud3k9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 39px; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ifo5v.framer-1x2nl6l { gap: 0px; } .framer-Ifo5v.framer-1x2nl6l > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Ifo5v.framer-1x2nl6l > :first-child { margin-left: 0px; } .framer-Ifo5v.framer-1x2nl6l > :last-child { margin-right: 0px; } }`,
          `.framer-Ifo5v.framer-v-1lv2yd7.framer-1x2nl6l { width: 109px; }`,
          `.framer-Ifo5v.framer-v-1lv2yd7 .framer-1tud3k9 { width: 53px; }`,
          ...V,
        ],
        `framer-Ifo5v`
      )),
      (Ne.displayName = `Copy Button`),
      (Ne.defaultProps = { height: 36, width: 95 }),
      w(Ne, {
        variant: {
          options: [`nrOWns_xY`, `xsLmeSNUM`],
          optionTitles: [`Default`, `Copied`],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      N(
        Ne,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ce,
          ...O(H),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Pe = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerPVY6aP3vB`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"xsLmeSNUM":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `36`,
              framerIntrinsicWidth: `95`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Ie(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe = t(() => {
    (d(),
      k(),
      _(),
      r(),
      ge(),
      be(),
      ie(),
      B(),
      Fe(),
      (Le = D(Ne)),
      (Re = P(F(Ne, { nodeId: `d5P96X8IR`, override: fe, scopeId: `F9xm5DLtK` }), xe)),
      (ze = {
        ad6RB2tEW: { hover: !0 },
        FpJXJ5VDV: { hover: !0 },
        ooPoXN2BH: { hover: !0 },
        qKczJHZgx: { hover: !0 },
      }),
      (Be = [`FpJXJ5VDV`, `ad6RB2tEW`, `qKczJHZgx`, `ooPoXN2BH`]),
      (Ve = `framer-EdrI5`),
      (He = {
        ad6RB2tEW: `framer-v-1e7dtve`,
        FpJXJ5VDV: `framer-v-1chb7le`,
        ooPoXN2BH: `framer-v-pdxgtl`,
        qKczJHZgx: `framer-v-1rtzcl2`,
      }),
      (Ue = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (We = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ge = (e, t) => `translateX(-50%) ${t}`),
      (Ke = ({ value: e, children: t }) => {
        let n = o(h),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(h.Provider, { value: i, children: t });
      }),
      (qe = v.create(a)),
      (Je = {
        "Secondary - Small": `ooPoXN2BH`,
        Primary: `FpJXJ5VDV`,
        Secondary: `qKczJHZgx`,
        Small: `ad6RB2tEW`,
      }),
      (Ye = ({
        category: e,
        click: t,
        clickOverlay: n,
        height: r,
        id: i,
        image: a,
        width: o,
        ...s
      }) => ({
        ...s,
        Jx9wOxqM7: e ?? s.Jx9wOxqM7 ?? `Category`,
        ltkllGRZX: n ?? s.ltkllGRZX,
        tEO9cy8VR: a ??
          s.tEO9cy8VR ?? {
            src: `../../assets/images/VmhZcWuvQz5BQkuy4FMvesYPc-fbfdc5.jpg`,
            srcSet: `../../assets/images/VmhZcWuvQz5BQkuy4FMvesYPc-fbfdc5.jpg 512w,../../assets/images/VmhZcWuvQz5BQkuy4FMvesYPc-02065b.jpg 1024w,../../assets/images/VmhZcWuvQz5BQkuy4FMvesYPc-2c6866.jpg 1208w`,
          },
        variant: Je[s.variant] ?? s.variant ?? `FpJXJ5VDV`,
        VujkntinK: t ?? s.VujkntinK,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ze = E(
        p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = m(),
            { activeLocale: o, setLocale: s } = z(),
            c = j(),
            {
              style: d,
              className: p,
              layoutId: h,
              variant: _,
              tEO9cy8VR: C,
              VujkntinK: w,
              ltkllGRZX: E,
              Jx9wOxqM7: D,
              ...O
            } = Ye(e),
            {
              baseVariant: k,
              classNames: N,
              clearLoadingGesture: P,
              gestureHandlers: F,
              gestureVariant: I,
              isLoading: L,
              setGestureState: R,
              setVariant: B,
              variants: V,
            } = b({
              cycleOrder: Be,
              defaultVariant: `FpJXJ5VDV`,
              enabledGestures: ze,
              ref: r,
              variant: _,
              variantClassNames: He,
            }),
            H = Xe(e, V),
            { activeVariantCallback: ne, delay: re } = A(k),
            ie = ne(async (...e) => {
              if (E && (await E(...e)) === !1) return !1;
            }),
            ae = ne(async (...e) => {
              if (w && (await w(...e)) === !1) return !1;
            }),
            oe = x(Ve, te, se, ye),
            ce = () =>
              !!(
                [`qKczJHZgx-hover`, `ooPoXN2BH-hover`].includes(I) ||
                [`qKczJHZgx`, `ooPoXN2BH`].includes(k)
              );
          return u(g, {
            id: h ?? i,
            children: u(qe, {
              animate: V,
              initial: !1,
              children: u(Ke, {
                value: Ue,
                children: f(v.div, {
                  ...O,
                  ...F,
                  className: x(oe, `framer-1chb7le`, p, N),
                  "data-framer-name": `Primary`,
                  layoutDependency: H,
                  layoutId: `FpJXJ5VDV`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...d,
                  },
                  variants: {
                    ad6RB2tEW: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                  },
                  ...Ie(
                    {
                      "ad6RB2tEW-hover": { "data-framer-name": void 0 },
                      "FpJXJ5VDV-hover": { "data-framer-name": void 0 },
                      "ooPoXN2BH-hover": { "data-framer-name": void 0 },
                      "qKczJHZgx-hover": { "data-framer-name": void 0 },
                      ad6RB2tEW: { "data-framer-name": `Small` },
                      ooPoXN2BH: { "data-framer-name": `Secondary - Small` },
                      qKczJHZgx: { "data-framer-name": `Secondary` },
                    },
                    k,
                    I
                  ),
                  children: [
                    f(v.div, {
                      className: `framer-11xfl3q`,
                      "data-framer-name": `Image Wrap`,
                      layoutDependency: H,
                      layoutId: `FBglojp31`,
                      style: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      variants: {
                        "ad6RB2tEW-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                        "FpJXJ5VDV-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                        ooPoXN2BH: {
                          backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        },
                        qKczJHZgx: {
                          backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        },
                      },
                      children: [
                        u(ee, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: S(
                              (c?.y || 0) + 0 + (((c?.height || 364) - 0 - 364) / 2 + 0 + 0) + 0
                            ),
                            pixelHeight: 364,
                            pixelWidth: 464,
                            sizes: c?.width || `100vw`,
                            ...We(C),
                          },
                          className: `framer-n5mt0v`,
                          "data-framer-name": `Image`,
                          layoutDependency: H,
                          layoutId: `inQ0OdsGX`,
                          style: {
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                          },
                          ...Ie(
                            {
                              ad6RB2tEW: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (c?.y || 0) +
                                      0 +
                                      (((c?.height || 251) - 0 - 364) / 2 + 0 + 0) +
                                      0
                                  ),
                                  pixelHeight: 364,
                                  pixelWidth: 464,
                                  sizes: c?.width || `100vw`,
                                  ...We(C),
                                },
                              },
                              ooPoXN2BH: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (c?.y || 0) +
                                      0 +
                                      (((c?.height || 352) - 0 - 352) / 2 + 0 + 0) +
                                      8 +
                                      0
                                  ),
                                  pixelHeight: 364,
                                  pixelWidth: 464,
                                  sizes: `calc(${c?.width || `100vw`} - 16px)`,
                                  ...We(C),
                                },
                              },
                              qKczJHZgx: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (c?.y || 0) +
                                      0 +
                                      (((c?.height || 356) - 0 - 356) / 2 + 0 + 0) +
                                      8 +
                                      0
                                  ),
                                  pixelHeight: 364,
                                  pixelWidth: 464,
                                  sizes: `calc(${c?.width || `100vw`} - 16px)`,
                                  ...We(C),
                                },
                              },
                            },
                            k,
                            I
                          ),
                        }),
                        u(v.div, {
                          className: `framer-1tixaki`,
                          "data-framer-name": `Overlay`,
                          layoutDependency: H,
                          layoutId: `phNVaFKiL`,
                          style: {
                            backgroundColor: `rgba(0, 0, 0, 0.15)`,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            opacity: 0,
                          },
                          variants: {
                            "ad6RB2tEW-hover": {
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              opacity: 1,
                            },
                            "FpJXJ5VDV-hover": {
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              opacity: 1,
                            },
                            "ooPoXN2BH-hover": { opacity: 1 },
                            "qKczJHZgx-hover": { opacity: 1 },
                            ooPoXN2BH: {
                              backgroundColor: `rgba(0, 0, 0, 0.2)`,
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                            qKczJHZgx: {
                              backgroundColor: `rgba(0, 0, 0, 0.2)`,
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                          },
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-738idu`,
                      "data-framer-name": `Button Group`,
                      layoutDependency: H,
                      layoutId: `POfxORQil`,
                      style: {
                        backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        opacity: 0,
                      },
                      transformTemplate: Ge,
                      variants: {
                        "ad6RB2tEW-hover": { opacity: 1 },
                        "FpJXJ5VDV-hover": { opacity: 1 },
                        "ooPoXN2BH-hover": { opacity: 1 },
                        "qKczJHZgx-hover": { opacity: 1 },
                      },
                      children: [
                        f(v.div, {
                          className: `framer-10b7ytx`,
                          "data-framer-name": `Button`,
                          "data-highlight": !0,
                          layoutDependency: H,
                          layoutId: `m1Vqb9pdn`,
                          onTap: ie,
                          style: {
                            backgroundColor: `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          ...Ie({ ooPoXN2BH: { onTap: ae }, qKczJHZgx: { onTap: ae } }, k, I),
                          children: [
                            u(ee, {
                              background: {
                                alt: `Eye Icon`,
                                fit: `fill`,
                                loading: S((c?.y || 0) + (c?.height || 364) - 68 + 8 + 8),
                                pixelHeight: 20,
                                pixelWidth: 20,
                                src: `../../assets/images/U1JIHPlgClfUhniUPGzGCPPvw.svg`,
                              },
                              className: `framer-221a7c`,
                              "data-framer-name": `Icon`,
                              layoutDependency: H,
                              layoutId: `AkaJ9OtAI`,
                              ...Ie(
                                {
                                  ad6RB2tEW: {
                                    background: {
                                      alt: `Eye Icon`,
                                      fit: `fill`,
                                      loading: S((c?.y || 0) + (c?.height || 251) - 64 + 8 + 8),
                                      pixelHeight: 20,
                                      pixelWidth: 20,
                                      src: `../../assets/images/U1JIHPlgClfUhniUPGzGCPPvw.svg`,
                                    },
                                  },
                                  ooPoXN2BH: {
                                    background: {
                                      alt: `Eye Icon`,
                                      fit: `fill`,
                                      loading: S((c?.y || 0) + (c?.height || 352) - 148 + 8 + 8),
                                      pixelHeight: 20,
                                      pixelWidth: 20,
                                      src: `../../assets/images/U1JIHPlgClfUhniUPGzGCPPvw.svg`,
                                    },
                                  },
                                  qKczJHZgx: {
                                    background: {
                                      alt: `Eye Icon`,
                                      fit: `fill`,
                                      loading: S((c?.y || 0) + (c?.height || 356) - 148 + 8 + 8),
                                      pixelHeight: 20,
                                      pixelWidth: 20,
                                      src: `../../assets/images/U1JIHPlgClfUhniUPGzGCPPvw.svg`,
                                    },
                                  },
                                },
                                k,
                                I
                              ),
                            }),
                            u(T, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(v.p, {
                                  className: `framer-styles-preset-1pumtl1`,
                                  "data-styles-preset": `wEX21mXRe`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                  },
                                  children: `Preview`,
                                }),
                              }),
                              className: `framer-anm5b6`,
                              "data-framer-name": `Preview`,
                              fonts: [`Inter`],
                              layoutDependency: H,
                              layoutId: `OexObSZMZ`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        u(M, {
                          height: 36,
                          width: `94px`,
                          y: (c?.y || 0) + (c?.height || 364) - 68 + 8,
                          ...Ie(
                            {
                              ad6RB2tEW: { y: (c?.y || 0) + (c?.height || 251) - 64 + 8 },
                              ooPoXN2BH: { y: (c?.y || 0) + (c?.height || 352) - 148 + 8 },
                              qKczJHZgx: { y: (c?.y || 0) + (c?.height || 356) - 148 + 8 },
                            },
                            k,
                            I
                          ),
                          children: u(y, {
                            className: `framer-b1ni18-container`,
                            layoutDependency: H,
                            layoutId: `d5P96X8IR-container`,
                            nodeId: `d5P96X8IR`,
                            rendersWithMotion: !0,
                            scopeId: `F9xm5DLtK`,
                            children: u(Re, {
                              height: `100%`,
                              id: `d5P96X8IR`,
                              layoutId: `d5P96X8IR`,
                              style: { width: `100%` },
                              variant: `nrOWns_xY`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    ce() &&
                      f(v.div, {
                        className: `framer-8udv05`,
                        "data-framer-name": `Card Body`,
                        layoutDependency: H,
                        layoutId: `dtm2BdyXx`,
                        children: [
                          f(v.div, {
                            className: `framer-103hma8`,
                            "data-framer-name": `Title Block`,
                            layoutDependency: H,
                            layoutId: `FYK5A3O8L`,
                            children: [
                              u(T, {
                                __fromCanvasComponent: !0,
                                children: u(a, {
                                  children: u(v.h6, {
                                    className: `framer-styles-preset-1s533c1`,
                                    "data-styles-preset": `IwoeRBoDn`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                                    },
                                    children: `Category`,
                                  }),
                                }),
                                className: `framer-oo70sy`,
                                "data-framer-name": `Category`,
                                fonts: [`Inter`],
                                layoutDependency: H,
                                layoutId: `bXBaMdDbw`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              u(v.div, {
                                className: `framer-ahbpk1`,
                                "data-framer-name": `Tag Block`,
                                layoutDependency: H,
                                layoutId: `Tjo1pu7Gg`,
                                style: {
                                  backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                                  borderBottomLeftRadius: 60,
                                  borderBottomRightRadius: 60,
                                  borderTopLeftRadius: 60,
                                  borderTopRightRadius: 60,
                                },
                                children: u(T, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(v.p, {
                                      style: {
                                        "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                        "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                                      },
                                      children: `Pro`,
                                    }),
                                  }),
                                  className: `framer-1ehnyu3`,
                                  "data-framer-name": `Text`,
                                  fonts: [`GF;DM Sans-500`],
                                  layoutDependency: H,
                                  layoutId: `oAqaT5ujh`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          f(v.div, {
                            className: `framer-1uvgd9t`,
                            "data-framer-name": `Text Block`,
                            layoutDependency: H,
                            layoutId: `pJ9XdXDkm`,
                            children: [
                              u(T, {
                                __fromCanvasComponent: !0,
                                children: u(a, {
                                  children: u(v.p, {
                                    className: `framer-styles-preset-1pumtl1`,
                                    "data-styles-preset": `wEX21mXRe`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52)))`,
                                    },
                                    children: `Added Oct 24, 2024 in`,
                                  }),
                                }),
                                className: `framer-p7p51a`,
                                "data-framer-name": `Date`,
                                fonts: [`Inter`],
                                layoutDependency: H,
                                layoutId: `btxOcjqx3`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              u(T, {
                                __fromCanvasComponent: !0,
                                children: u(a, {
                                  children: u(v.p, {
                                    className: `framer-styles-preset-gzn8zy`,
                                    "data-styles-preset": `Fg5JSy8Gv`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52)))`,
                                    },
                                    children: `Category`,
                                  }),
                                }),
                                className: `framer-qlymw`,
                                "data-framer-name": `Category`,
                                fonts: [`Inter`],
                                layoutDependency: H,
                                layoutId: `waQwjFO5q`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-EdrI5.framer-lfmq3a, .framer-EdrI5 .framer-lfmq3a { display: block; }`,
          `.framer-EdrI5.framer-1chb7le { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 464px; }`,
          `.framer-EdrI5 .framer-11xfl3q { aspect-ratio: 1.2747252747252746 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 364px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-EdrI5 .framer-n5mt0v, .framer-EdrI5 .framer-1tixaki { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; }`,
          `.framer-EdrI5 .framer-738idu { align-content: center; align-items: center; bottom: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 8px 6px 8px 6px; position: absolute; width: 230px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-EdrI5 .framer-10b7ytx { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 16px 8px 12px; position: relative; width: 106px; }`,
          `.framer-EdrI5 .framer-221a7c { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-EdrI5 .framer-anm5b6, .framer-EdrI5 .framer-oo70sy, .framer-EdrI5 .framer-1ehnyu3, .framer-EdrI5 .framer-p7p51a, .framer-EdrI5 .framer-qlymw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-EdrI5 .framer-b1ni18-container { flex: none; height: auto; position: relative; width: 94px; }`,
          `.framer-EdrI5 .framer-8udv05 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 13.5px; position: relative; width: 100%; }`,
          `.framer-EdrI5 .framer-103hma8, .framer-EdrI5 .framer-1uvgd9t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-EdrI5 .framer-ahbpk1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 4px 10px 4px 10px; position: relative; width: min-content; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EdrI5.framer-1chb7le, .framer-EdrI5 .framer-738idu, .framer-EdrI5 .framer-10b7ytx, .framer-EdrI5 .framer-8udv05, .framer-EdrI5 .framer-103hma8, .framer-EdrI5 .framer-ahbpk1, .framer-EdrI5 .framer-1uvgd9t { gap: 0px; } .framer-EdrI5.framer-1chb7le > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-EdrI5.framer-1chb7le > :first-child, .framer-EdrI5 .framer-8udv05 > :first-child { margin-top: 0px; } .framer-EdrI5.framer-1chb7le > :last-child, .framer-EdrI5 .framer-8udv05 > :last-child { margin-bottom: 0px; } .framer-EdrI5 .framer-738idu > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-EdrI5 .framer-738idu > :first-child, .framer-EdrI5 .framer-10b7ytx > :first-child, .framer-EdrI5 .framer-103hma8 > :first-child, .framer-EdrI5 .framer-ahbpk1 > :first-child, .framer-EdrI5 .framer-1uvgd9t > :first-child { margin-left: 0px; } .framer-EdrI5 .framer-738idu > :last-child, .framer-EdrI5 .framer-10b7ytx > :last-child, .framer-EdrI5 .framer-103hma8 > :last-child, .framer-EdrI5 .framer-ahbpk1 > :last-child, .framer-EdrI5 .framer-1uvgd9t > :last-child { margin-right: 0px; } .framer-EdrI5 .framer-10b7ytx > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-EdrI5 .framer-8udv05 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-EdrI5 .framer-103hma8 > *, .framer-EdrI5 .framer-1uvgd9t > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-EdrI5 .framer-ahbpk1 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } }`,
          `.framer-EdrI5.framer-v-1e7dtve.framer-1chb7le { width: 320px; }`,
          `.framer-EdrI5.framer-v-1e7dtve .framer-11xfl3q { height: var(--framer-aspect-ratio-supported, 251px); }`,
          `.framer-EdrI5.framer-v-1e7dtve .framer-738idu { bottom: 12px; width: 222px; }`,
          `.framer-EdrI5.framer-v-1rtzcl2.framer-1chb7le { gap: 16px; width: 302px; }`,
          `.framer-EdrI5.framer-v-1rtzcl2 .framer-11xfl3q, .framer-EdrI5.framer-v-pdxgtl .framer-11xfl3q { align-content: center; align-items: center; aspect-ratio: 1.0863309352517985 / 1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 278px); justify-content: center; padding: 8px; }`,
          `.framer-EdrI5.framer-v-1rtzcl2 .framer-n5mt0v, .framer-EdrI5.framer-v-pdxgtl .framer-n5mt0v { left: unset; position: relative; top: unset; }`,
          `.framer-EdrI5.framer-v-1rtzcl2 .framer-1tixaki, .framer-EdrI5.framer-v-pdxgtl .framer-1tixaki { height: 94%; left: 8px; top: 8px; width: 95%; z-index: 1; }`,
          `.framer-EdrI5.framer-v-1rtzcl2 .framer-738idu, .framer-EdrI5.framer-v-pdxgtl .framer-738idu { bottom: 96px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EdrI5.framer-v-1rtzcl2.framer-1chb7le, .framer-EdrI5.framer-v-1rtzcl2 .framer-11xfl3q { gap: 0px; } .framer-EdrI5.framer-v-1rtzcl2.framer-1chb7le > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-EdrI5.framer-v-1rtzcl2.framer-1chb7le > :first-child, .framer-EdrI5.framer-v-1rtzcl2 .framer-11xfl3q > :first-child { margin-top: 0px; } .framer-EdrI5.framer-v-1rtzcl2.framer-1chb7le > :last-child, .framer-EdrI5.framer-v-1rtzcl2 .framer-11xfl3q > :last-child { margin-bottom: 0px; } .framer-EdrI5.framer-v-1rtzcl2 .framer-11xfl3q > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }`,
          `.framer-EdrI5.framer-v-pdxgtl.framer-1chb7le { gap: 12px; width: 302px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EdrI5.framer-v-pdxgtl.framer-1chb7le, .framer-EdrI5.framer-v-pdxgtl .framer-11xfl3q { gap: 0px; } .framer-EdrI5.framer-v-pdxgtl.framer-1chb7le > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-EdrI5.framer-v-pdxgtl.framer-1chb7le > :first-child, .framer-EdrI5.framer-v-pdxgtl .framer-11xfl3q > :first-child { margin-top: 0px; } .framer-EdrI5.framer-v-pdxgtl.framer-1chb7le > :last-child, .framer-EdrI5.framer-v-pdxgtl .framer-11xfl3q > :last-child { margin-bottom: 0px; } .framer-EdrI5.framer-v-pdxgtl .framer-11xfl3q > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }`,
          `.framer-EdrI5.framer-v-1rtzcl2.hover .framer-n5mt0v, .framer-EdrI5.framer-v-pdxgtl.hover .framer-n5mt0v { left: unset; top: unset; }`,
          ...V,
          ...ae,
          ...ve,
        ],
        `framer-EdrI5`
      )),
      (Ze.displayName = `Component Card`),
      (Ze.defaultProps = { height: 364, width: 464 }),
      w(Ze, {
        variant: {
          options: [`FpJXJ5VDV`, `ad6RB2tEW`, `qKczJHZgx`, `ooPoXN2BH`],
          optionTitles: [`Primary`, `Small`, `Secondary`, `Secondary - Small`],
          title: `Variant`,
          type: I.Enum,
        },
        tEO9cy8VR: {
          __defaultAssetReference: `data:framer/asset-reference,VmhZcWuvQz5BQkuy4FMvesYPc.jpg?originalFilename=488.jpg&preferredSize=auto`,
          title: `Image`,
          type: I.ResponsiveImage,
        },
        VujkntinK: { title: `Click`, type: I.EventHandler },
        ltkllGRZX: { title: `Click Overlay`, type: I.EventHandler },
        Jx9wOxqM7: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Category`,
          type: I.String,
        },
      }),
      N(
        Ze,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                family: `DM Sans`,
                source: `google`,
                style: `normal`,
                url: `../../assets/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Le,
          ...O(H),
          ...O(oe),
          ...O(_e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function $e(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function U(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function et(e) {
  throw Error(`Unexpected value: ${e}`);
}
function tt(e, t) {
  return ar(e, t || {}, 0, 0);
}
function nt(e, t) {
  return qn(e, { i: 2 }, t && t.out, t && t.dictionary);
}
function rt(e, t, n, r) {
  (U(e >= t, e, `outside lower bound for`, r), U(e <= n, e, `outside upper bound for`, r));
}
function it(e) {
  return Number.isFinite(e);
}
function at(e) {
  return e === void 0;
}
function ot(e) {
  return e === null;
}
function st(e) {
  if (ot(e)) return 0;
  switch (e.type) {
    case I.Array:
      return 1;
    case I.Boolean:
      return 2;
    case I.Color:
      return 3;
    case I.Date:
      return 4;
    case I.Enum:
      return 5;
    case I.File:
      return 6;
    case I.ResponsiveImage:
      return 10;
    case I.Link:
      return 7;
    case I.Number:
      return 8;
    case I.Object:
      return 9;
    case I.RichText:
      return 11;
    case I.String:
      return 12;
    default:
      et(e);
  }
}
function ct(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = G.read(e);
    n.push(t);
  }
  return { type: I.Array, value: n };
}
function lt(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) G.write(e, n);
}
function ut(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = G.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function dt(e) {
  return { type: I.Boolean, value: e.readUint8() !== 0 };
}
function ft(e, t) {
  e.writeUint8(+!!t.value);
}
function pt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function mt(e) {
  return { type: I.Color, value: e.readString() };
}
function ht(e, t) {
  e.writeString(t.value);
}
function gt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function _t(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: I.Date, value: n.toISOString() };
}
function vt(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function yt(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function bt(e) {
  return { type: I.Enum, value: e.readString() };
}
function xt(e, t) {
  e.writeString(t.value);
}
function St(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ct(e) {
  return { type: I.File, value: e.readString() };
}
function wt(e, t) {
  e.writeString(t.value);
}
function Tt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Et(e) {
  return { type: I.Link, value: e.readJson() };
}
function Dt(e, t) {
  e.writeJson(t.value);
}
function Ot(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function kt(e) {
  return { type: I.Number, value: e.readFloat64() };
}
function At(e, t) {
  e.writeFloat64(t.value);
}
function jt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Mt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = G.read(e);
  }
  return { type: I.Object, value: n };
}
function Nt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), G.write(e, r));
}
function Pt(e, t, n) {
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
      u = G.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ft(e) {
  return { type: I.ResponsiveImage, value: e.readJson() };
}
function It(e, t) {
  e.writeJson(t.value);
}
function Lt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Rt(e) {
  return { type: I.RichText, value: e.readUint32() };
}
function zt(e, t) {
  e.writeUint32(t.value);
}
function Bt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Vt(e) {
  return { type: I.String, value: e.readString() };
}
function Ht(e, t) {
  e.writeString(t.value);
}
function Ut(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
async function Wt(e) {
  let t = Math.floor(gr * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
function Gt(e) {
  let t = 3 & e.length,
    n = e.length - t,
    r = 0,
    i = 0;
  for (; i < n;) {
    let t =
      (255 & e.charCodeAt(i)) |
      ((255 & e.charCodeAt(++i)) << 8) |
      ((255 & e.charCodeAt(++i)) << 16) |
      ((255 & e.charCodeAt(++i)) << 24);
    (++i,
      (r ^= t =
        ((65535 &
          (t =
            ((t =
              ((65535 & t) * 3432918353 + ((((t >>> 16) * 3432918353) & 65535) << 16)) &
              4294967295) <<
              15) |
            (t >>> 17))) *
          461845907 +
          ((((t >>> 16) * 461845907) & 65535) << 16)) &
        4294967295),
      (r = (r << 13) | (r >>> 19)));
    let n = ((65535 & r) * 5 + ((((r >>> 16) * 5) & 65535) << 16)) & 4294967295;
    r = (65535 & n) + 27492 + ((((n >>> 16) + 58964) & 65535) << 16);
  }
  let a = 0;
  return (
    t >= 3 && (a ^= (255 & e.charCodeAt(i + 2)) << 16),
    t >= 2 && (a ^= (255 & e.charCodeAt(i + 1)) << 8),
    t >= 1 &&
      ((a ^= 255 & e.charCodeAt(i)),
      (r ^= a =
        ((65535 &
          (a =
            ((a =
              ((65535 & a) * 3432918353 + ((((a >>> 16) * 3432918353) & 65535) << 16)) &
              4294967295) <<
              15) |
            (a >>> 17))) *
          461845907 +
          ((((a >>> 16) * 461845907) & 65535) << 16)) &
        4294967295)),
    (r ^= e.length),
    (r ^= r >>> 16),
    (r = ((65535 & r) * 2246822507 + ((((r >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (r ^= r >>> 13),
    (r = ((65535 & r) * 3266489909 + ((((r >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (r ^= r >>> 16) >>> 0
  );
}
async function Kt(e, t) {
  let n = new URL(e),
    r = en(t);
  n.searchParams.set(`rangeHash`, Gt(r).toString(16));
  let i = await vr(n, { headers: { Range: r } });
  if (!i.ok) throw Error(`Request failed: ${i.status} ${i.statusText}`);
  let a = await i.arrayBuffer(),
    o = new Uint8Array(a);
  if (i.status === 200)
    return t.map((e) => {
      if (e.to > o.length) throw Error(`Missing data`);
      return o.slice(e.from, e.to);
    });
  if (i.status === 206) {
    let e = i.headers.get(`Content-Type`);
    if (!e) throw Error(`Missing Content-Type header`);
    let n = new wr(),
      r = new yr.default(e);
    if (r.type === `multipart` && r.subtype === `byteranges`) {
      let e = r.parameters.get(`boundary`);
      if (!e) throw Error(`Missing boundary parameter`);
      let t = qt(o, e);
      for (let { headers: e, body: r } of t) {
        let t = e.get(`Content-Range`);
        if (!t) throw Error(`Missing Content-Range header`);
        let i = Jt(t);
        if (i.unit !== `bytes`) throw Error(`Unsupported unit`);
        n.write(i.start, r);
      }
    } else {
      let e = i.headers.get(`Content-Range`);
      if (!e) throw Error(`Missing Content-Range header`);
      let t = Jt(e);
      if (t.unit !== `bytes`) throw Error(`Unsupported unit`);
      n.write(t.start, o);
    }
    return t.map((e) => n.read(e.from, e.to - e.from));
  }
  throw Error(`Unsupported response: ${i.status} ${i.statusText}`);
}
function qt(e, t) {
  let n = Sr.encode(xr + t),
    r = Xt(e, n);
  if (at(r)) throw Error(`Missing parts start`);
  let i = r + n.length,
    a = Zt(e, Sr.encode(br + xr + t + xr));
  if (at(a)) throw Error(`Missing parts end`);
  let o = Sr.encode(br + xr + t);
  return Yt(e.subarray(i, a), o).map((e) => {
    let t = Sr.encode(br + br),
      n = Xt(e, t);
    if (at(n)) throw Error(`Missing headers end`);
    let r = Sr.encode(br),
      i = Yt(e.subarray(0, n), r),
      a = new Headers();
    for (let e of i) {
      let [t, n] = Cr.decode(e).split(`: `, 2);
      t && n && a.append(t, n);
    }
    let o = n + t.length;
    return { headers: a, body: e.slice(o) };
  });
}
function Jt(e) {
  let t = RegExp(`^(?<unit>\\w+) (?<start>\\d+)-(?<end>\\d+)\\/(?<size>\\d+|\\*)$`, `u`).exec(e);
  if (!t || !t.groups) throw Error(`Invalid Content-Range header`);
  let { unit: n, start: r, end: i, size: a } = t.groups;
  return { unit: n, start: Number(r), end: Number(i), size: a === `*` ? null : Number(a) };
}
function Yt(e, t) {
  let n = [];
  for (; e.length > 0;) {
    let r = Xt(e, t) ?? e.length,
      i = e.subarray(0, r);
    (n.push(i), (e = e.subarray(r + t.length)));
  }
  return n;
}
function Xt(e, t) {
  for (let n = 0; n < e.length - t.length; n++) if (Qt(e.subarray(n), t)) return n;
}
function Zt(e, t) {
  for (let n = e.length - t.length; n >= 0; n--) if (Qt(e.subarray(n), t)) return n;
}
function Qt(e, t) {
  for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function $t(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function en(e) {
  U(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return `bytes=${n.map((e) => `${e.from}-${e.to - 1}`).join(`,`)}`;
}
async function tn(e, t, n) {
  if (!n) return Kt(e, t);
  let r = rn(t),
    i = [],
    a = 0;
  for (let e of r) (i.push(`${e.from}-${e.to - 1}`), (a += e.to - e.from));
  let o = new URL(e),
    s = i.join(`,`);
  o.searchParams.set(`range`, s);
  let c = await vr(o);
  if (c.status !== 200) throw Error(`Request failed: ${c.status} ${c.statusText}`);
  let l = await c.arrayBuffer(),
    u = new Uint8Array(l);
  if (u.length !== a) throw Error(`Request failed: Unexpected response length`);
  let d = new Tr(),
    f = 0;
  for (let e of r) {
    let t = e.to - e.from,
      n = f + t,
      r = u.subarray(f, n);
    (d.write(e.from, r), (f = n));
  }
  return t.map((e) => d.read(e.from, e.to - e.from));
}
function nn(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function rn(e) {
  U(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var an,
  W,
  G,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  K,
  Sn,
  q,
  J,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Y,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  X,
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
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  Z,
  Q,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar = t(() => {
    for (
      k(),
        on = Object.create,
        sn = Object.defineProperty,
        cn = Object.getOwnPropertyDescriptor,
        ln = Object.getOwnPropertyNames,
        un = Object.getPrototypeOf,
        dn = Object.prototype.hasOwnProperty,
        fn = (e, t) =>
          function () {
            return (t || (0, e[ln(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          },
        pn = (e, t, n, r) => {
          if ((t && typeof t == `object`) || typeof t == `function`)
            for (let i of ln(t))
              dn.call(e, i) ||
                i === n ||
                sn(e, i, { get: () => t[i], enumerable: !(r = cn(t, i)) || r.enumerable });
          return e;
        },
        mn = (e, t, n) => (
          (n = e == null ? {} : on(un(e))),
          pn(!t && e && e.__esModule ? n : sn(n, `default`, { value: e, enumerable: !0 }), e)
        ),
        hn = fn({
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
        }),
        gn = fn({
          "../../../node_modules/whatwg-mimetype/lib/utils.js"(e) {
            ((e.removeLeadingAndTrailingHTTPWhitespace = (e) =>
              e.replace(/^[ \t\n\r]+/u, ``).replace(/[ \t\n\r]+$/u, ``)),
              (e.removeTrailingHTTPWhitespace = (e) => e.replace(/[ \t\n\r]+$/u, ``)),
              (e.isHTTPWhitespaceChar = (e) =>
                e === ` ` ||
                e === `	` ||
                e ===
                  `
` ||
                e === `\r`),
              (e.solelyContainsHTTPTokenCodePoints = (e) =>
                /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(e)),
              (e.soleyContainsHTTPQuotedStringTokenCodePoints = (e) =>
                /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(e)),
              (e.asciiLowercase = (e) => e.replace(/[A-Z]/gu, (e) => e.toLowerCase())),
              (e.collectAnHTTPQuotedString = (e, t) => {
                let n = ``;
                for (t++; ;) {
                  for (; t < e.length && e[t] !== `"` && e[t] !== `\\`;) ((n += e[t]), ++t);
                  if (t >= e.length) break;
                  let r = e[t];
                  if ((++t, r === `\\`)) {
                    if (t >= e.length) {
                      n += `\\`;
                      break;
                    }
                    ((n += e[t]), ++t);
                  } else break;
                }
                return [n, t];
              }));
          },
        }),
        _n = fn({
          "../../../node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(e, t) {
            var {
              asciiLowercase: n,
              solelyContainsHTTPTokenCodePoints: r,
              soleyContainsHTTPQuotedStringTokenCodePoints: i,
            } = gn();
            t.exports = class {
              get size() {
                return this._map.size;
              }
              get(e) {
                return ((e = n(String(e))), this._map.get(e));
              }
              has(e) {
                return ((e = n(String(e))), this._map.has(e));
              }
              set(e, t) {
                if (((e = n(String(e))), (t = String(t)), !r(e)))
                  throw Error(
                    `Invalid MIME type parameter name "${e}": only HTTP token code points are valid.`
                  );
                if (!i(t))
                  throw Error(
                    `Invalid MIME type parameter value "${t}": only HTTP quoted-string token code points are valid.`
                  );
                return this._map.set(e, t);
              }
              clear() {
                this._map.clear();
              }
              delete(e) {
                return ((e = n(String(e))), this._map.delete(e));
              }
              forEach(e, t) {
                this._map.forEach(e, t);
              }
              keys() {
                return this._map.keys();
              }
              values() {
                return this._map.values();
              }
              entries() {
                return this._map.entries();
              }
              [Symbol.iterator]() {
                return this._map[Symbol.iterator]();
              }
              constructor(e) {
                this._map = e;
              }
            };
          },
        }),
        vn = fn({
          "../../../node_modules/whatwg-mimetype/lib/parser.js"(e, t) {
            var {
              removeLeadingAndTrailingHTTPWhitespace: n,
              removeTrailingHTTPWhitespace: r,
              isHTTPWhitespaceChar: i,
              solelyContainsHTTPTokenCodePoints: a,
              soleyContainsHTTPQuotedStringTokenCodePoints: o,
              asciiLowercase: s,
              collectAnHTTPQuotedString: c,
            } = gn();
            t.exports = (e) => {
              e = n(e);
              let t = 0,
                l = ``;
              for (; t < e.length && e[t] !== `/`;) ((l += e[t]), ++t);
              if (l.length === 0 || !a(l) || t >= e.length) return null;
              ++t;
              let u = ``;
              for (; t < e.length && e[t] !== `;`;) ((u += e[t]), ++t);
              if ((u = r(u)).length === 0 || !a(u)) return null;
              let d = { type: s(l), subtype: s(u), parameters: new Map() };
              for (; t < e.length;) {
                for (++t; i(e[t]);) ++t;
                let n = ``;
                for (; t < e.length && e[t] !== `;` && e[t] !== `=`;) ((n += e[t]), ++t);
                if (((n = s(n)), t < e.length)) {
                  if (e[t] === `;`) continue;
                  ++t;
                }
                let l = null;
                if (e[t] === `"`) for ([l, t] = c(e, t); t < e.length && e[t] !== `;`;) ++t;
                else {
                  for (l = ``; t < e.length && e[t] !== `;`;) ((l += e[t]), ++t);
                  if ((l = r(l)) === ``) continue;
                }
                n.length > 0 && a(n) && o(l) && !d.parameters.has(n) && d.parameters.set(n, l);
              }
              return d;
            };
          },
        }),
        yn = fn({
          "../../../node_modules/whatwg-mimetype/lib/serializer.js"(e, t) {
            var { solelyContainsHTTPTokenCodePoints: n } = gn();
            t.exports = (e) => {
              let t = `${e.type}/${e.subtype}`;
              if (e.parameters.size === 0) return t;
              for (let [r, i] of e.parameters)
                ((t += `;` + r + `=`),
                  (n(i) && i.length !== 0) ||
                    ((i = i.replace(/(["\\])/gu, `\\$1`)), (i = `"${i}"`)),
                  (t += i));
              return t;
            };
          },
        }),
        bn = fn({
          "../../../node_modules/whatwg-mimetype/lib/mime-type.js"(e, t) {
            var n = _n(),
              r = vn(),
              i = yn(),
              { asciiLowercase: a, solelyContainsHTTPTokenCodePoints: o } = gn();
            t.exports = class {
              static parse(e) {
                try {
                  return new this(e);
                } catch {
                  return null;
                }
              }
              get essence() {
                return `${this.type}/${this.subtype}`;
              }
              get type() {
                return this._type;
              }
              set type(e) {
                if ((e = a(String(e))).length === 0)
                  throw Error(`Invalid type: must be a non-empty string`);
                if (!o(e))
                  throw Error(`Invalid type ${e}: must contain only HTTP token code points`);
                this._type = e;
              }
              get subtype() {
                return this._subtype;
              }
              set subtype(e) {
                if ((e = a(String(e))).length === 0)
                  throw Error(`Invalid subtype: must be a non-empty string`);
                if (!o(e))
                  throw Error(`Invalid subtype ${e}: must contain only HTTP token code points`);
                this._subtype = e;
              }
              get parameters() {
                return this._parameters;
              }
              toString() {
                return i(this);
              }
              isJavaScript({ prohibitParameters: e = !1 } = {}) {
                switch (this._type) {
                  case `text`:
                    switch (this._subtype) {
                      case `ecmascript`:
                      case `javascript`:
                      case `javascript1.0`:
                      case `javascript1.1`:
                      case `javascript1.2`:
                      case `javascript1.3`:
                      case `javascript1.4`:
                      case `javascript1.5`:
                      case `jscript`:
                      case `livescript`:
                      case `x-ecmascript`:
                      case `x-javascript`:
                        return !e || this._parameters.size === 0;
                      default:
                        return !1;
                    }
                  case `application`:
                    switch (this._subtype) {
                      case `ecmascript`:
                      case `javascript`:
                      case `x-ecmascript`:
                      case `x-javascript`:
                        return !e || this._parameters.size === 0;
                      default:
                        return !1;
                    }
                  default:
                    return !1;
                }
              }
              isXML() {
                return (
                  (this._subtype === `xml` &&
                    (this._type === `text` || this._type === `application`)) ||
                  this._subtype.endsWith(`+xml`)
                );
              }
              isHTML() {
                return this._subtype === `html` && this._type === `text`;
              }
              constructor(e) {
                e = String(e);
                let t = r(e);
                if (t === null) throw Error(`Could not parse MIME type string "${e}"`);
                ((this._type = t.type),
                  (this._subtype = t.subtype),
                  (this._parameters = new n(t.parameters)));
              }
            };
          },
        }),
        xn = mn(hn()),
        K = {
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
        },
        Sn = class {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = K.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = K.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = K.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = K.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = K.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = K.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = K.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = K.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = K.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = K.Float64;
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
              (this.offset = 0),
              (this.view = $e(this.bytes)),
              (this.decoder = new TextDecoder()));
          }
        },
        q = Uint8Array,
        J = Uint16Array,
        Cn = Int32Array,
        wn = new q([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0,
          0, 0,
        ]),
        Tn = new q([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
          13, 13, 0, 0,
        ]),
        En = new q([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Dn = function (e, t) {
          for (var n = new J(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
          for (var i = new Cn(n[30]), r = 1; r < 30; ++r)
            for (var a = n[r]; a < n[r + 1]; ++a) i[a] = ((a - n[r]) << 5) | r;
          return { b: n, r: i };
        },
        On = Dn(wn, 2),
        kn = On.b,
        An = On.r,
        kn[28] = 258,
        An[258] = 28,
        jn = Dn(Tn, 0),
        Mn = jn.b,
        Nn = jn.r,
        Pn = new J(32768),
        W = 0;
      W < 32768;
      ++W
    )
      ((an =
        ((61680 &
          (an =
            ((52428 & (an = ((43690 & W) >> 1) | ((21845 & W) << 1))) >> 2) |
            ((13107 & an) << 2))) >>
          4) |
        ((3855 & an) << 4)),
        (Pn[W] = (((65280 & an) >> 8) | ((255 & an) << 8)) >> 1));
    for (
      Y = function (e, t, n) {
        for (var r, i = e.length, a = 0, o = new J(t); a < i; ++a) e[a] && ++o[e[a] - 1];
        var s = new J(t);
        for (a = 1; a < t; ++a) s[a] = (s[a - 1] + o[a - 1]) << 1;
        if (n) {
          r = new J(1 << t);
          var c = 15 - t;
          for (a = 0; a < i; ++a)
            if (e[a])
              for (
                var l = (a << 4) | e[a],
                  u = t - e[a],
                  d = s[e[a] - 1]++ << u,
                  f = d | ((1 << u) - 1);
                d <= f;
                ++d
              )
                r[Pn[d] >> c] = l;
        } else
          for (a = 0, r = new J(i); a < i; ++a) e[a] && (r[a] = Pn[s[e[a] - 1]++] >> (15 - e[a]));
        return r;
      },
        Fn = new q(288),
        W = 0;
      W < 144;
      ++W
    )
      Fn[W] = 8;
    for (W = 144; W < 256; ++W) Fn[W] = 9;
    for (W = 256; W < 280; ++W) Fn[W] = 7;
    for (W = 280; W < 288; ++W) Fn[W] = 8;
    for (In = new q(32), W = 0; W < 32; ++W) In[W] = 5;
    ((Ln = Y(Fn, 9, 0)),
      (Rn = Y(Fn, 9, 1)),
      (zn = Y(In, 5, 0)),
      (Bn = Y(In, 5, 1)),
      (Vn = function (e) {
        for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
        return t;
      }),
      (X = function (e, t, n) {
        var r = (t / 8) | 0;
        return ((e[r] | (e[r + 1] << 8)) >> (7 & t)) & n;
      }),
      (Hn = function (e, t) {
        var n = (t / 8) | 0;
        return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >> (7 & t);
      }),
      (Un = function (e) {
        return ((e + 7) / 8) | 0;
      }),
      (Wn = function (e, t, n) {
        return (
          (t == null || t < 0) && (t = 0),
          (n == null || n > e.length) && (n = e.length),
          new q(e.subarray(t, n))
        );
      }),
      (Gn = [
        `unexpected EOF`,
        `invalid block type`,
        `invalid length/literal`,
        `invalid distance`,
        `stream finished`,
        `no stream handler`,
        ,
        `no callback`,
        `invalid UTF-8 data`,
        `extra field too long`,
        `date not in range 1980-2099`,
        `filename too long`,
        `stream finishing`,
        `invalid zip data`,
      ]),
      (Kn = function (e, t, n) {
        var r = Error(t || Gn[e]);
        if (((r.code = e), Error.captureStackTrace && Error.captureStackTrace(r, Kn), !n)) throw r;
        return r;
      }),
      (qn = function (e, t, n, r) {
        var i = e.length,
          a = r ? r.length : 0;
        if (!i || (t.f && !t.l)) return n || new q(0);
        var o = !n,
          s = o || t.i != 2,
          c = t.i;
        o && (n = new q(3 * i));
        var l = function (e) {
            var t = n.length;
            if (e > t) {
              var r = new q(Math.max(2 * t, e));
              (r.set(n), (n = r));
            }
          },
          u = t.f || 0,
          d = t.p || 0,
          f = t.b || 0,
          p = t.l,
          m = t.d,
          h = t.m,
          g = t.n,
          _ = 8 * i;
        do {
          if (!p) {
            u = X(e, d, 1);
            var v = X(e, d + 1, 3);
            if (((d += 3), v))
              if (v == 1) ((p = Rn), (m = Bn), (h = 9), (g = 5));
              else if (v == 2) {
                var y = X(e, d, 31) + 257,
                  b = X(e, d + 10, 15) + 4,
                  x = y + X(e, d + 5, 31) + 1;
                d += 14;
                for (var S = new q(x), C = new q(19), w = 0; w < b; ++w)
                  C[En[w]] = X(e, d + 3 * w, 7);
                d += 3 * b;
                for (var T = Vn(C), E = (1 << T) - 1, D = Y(C, T, 1), w = 0; w < x;) {
                  var O = D[X(e, d, E)];
                  d += 15 & O;
                  var k = O >> 4;
                  if (k < 16) S[w++] = k;
                  else {
                    var A = 0,
                      j = 0;
                    for (
                      k == 16
                        ? ((j = 3 + X(e, d, 3)), (d += 2), (A = S[w - 1]))
                        : k == 17
                          ? ((j = 3 + X(e, d, 7)), (d += 3))
                          : k == 18 && ((j = 11 + X(e, d, 127)), (d += 7));
                      j--;
                    )
                      S[w++] = A;
                  }
                }
                var M = S.subarray(0, y),
                  N = S.subarray(y);
                ((h = Vn(M)), (g = Vn(N)), (p = Y(M, h, 1)), (m = Y(N, g, 1)));
              } else Kn(1);
            else {
              var k = Un(d) + 4,
                P = e[k - 4] | (e[k - 3] << 8),
                F = k + P;
              if (F > i) {
                c && Kn(0);
                break;
              }
              (s && l(f + P),
                n.set(e.subarray(k, F), f),
                (t.b = f += P),
                (t.p = d = 8 * F),
                (t.f = u));
              continue;
            }
            if (d > _) {
              c && Kn(0);
              break;
            }
          }
          s && l(f + 131072);
          for (var ee = (1 << h) - 1, I = (1 << g) - 1, L = d; ; L = d) {
            var A = p[Hn(e, d) & ee],
              R = A >> 4;
            if ((d += 15 & A) > _) {
              c && Kn(0);
              break;
            }
            if ((A || Kn(2), R < 256)) n[f++] = R;
            else if (R == 256) {
              ((L = d), (p = null));
              break;
            } else {
              var z = R - 254;
              if (R > 264) {
                var w = R - 257,
                  B = wn[w];
                ((z = X(e, d, (1 << B) - 1) + kn[w]), (d += B));
              }
              var V = m[Hn(e, d) & I],
                H = V >> 4;
              (V || Kn(3), (d += 15 & V));
              var N = Mn[H];
              if (H > 3) {
                var B = Tn[H];
                ((N += Hn(e, d) & ((1 << B) - 1)), (d += B));
              }
              if (d > _) {
                c && Kn(0);
                break;
              }
              s && l(f + 131072);
              var te = f + z;
              if (f < N) {
                var ne = a - N,
                  re = Math.min(N, te);
                for (ne + f < 0 && Kn(3); f < re; ++f) n[f] = r[ne + f];
              }
              for (; f < te; ++f) n[f] = n[f - N];
            }
          }
          ((t.l = p),
            (t.p = L),
            (t.b = f),
            (t.f = u),
            p && ((u = 1), (t.m = h), (t.d = m), (t.n = g)));
        } while (!u);
        return f != n.length && o ? Wn(n, 0, f) : n.subarray(0, f);
      }),
      (Jn = function (e, t, n) {
        n <<= 7 & t;
        var r = (t / 8) | 0;
        ((e[r] |= n), (e[r + 1] |= n >> 8));
      }),
      (Yn = function (e, t, n) {
        n <<= 7 & t;
        var r = (t / 8) | 0;
        ((e[r] |= n), (e[r + 1] |= n >> 8), (e[r + 2] |= n >> 16));
      }),
      (Xn = function (e, t) {
        for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
        var i = n.length,
          a = n.slice();
        if (!i) return { t: rr, l: 0 };
        if (i == 1) {
          var o = new q(n[0].s + 1);
          return ((o[n[0].s] = 1), { t: o, l: 1 });
        }
        (n.sort(function (e, t) {
          return e.f - t.f;
        }),
          n.push({ s: -1, f: 25001 }));
        var s = n[0],
          c = n[1],
          l = 0,
          u = 1,
          d = 2;
        for (n[0] = { s: -1, f: s.f + c.f, l: s, r: c }; u != i - 1;)
          ((s = n[n[l].f < n[d].f ? l++ : d++]),
            (c = n[l != u && n[l].f < n[d].f ? l++ : d++]),
            (n[u++] = { s: -1, f: s.f + c.f, l: s, r: c }));
        for (var f = a[0].s, r = 1; r < i; ++r) a[r].s > f && (f = a[r].s);
        var p = new J(f + 1),
          m = Zn(n[u - 1], p, 0);
        if (m > t) {
          var r = 0,
            h = 0,
            g = m - t,
            _ = 1 << g;
          for (
            a.sort(function (e, t) {
              return p[t.s] - p[e.s] || e.f - t.f;
            });
            r < i;
            ++r
          ) {
            var v = a[r].s;
            if (p[v] > t) ((h += _ - (1 << (m - p[v]))), (p[v] = t));
            else break;
          }
          for (h >>= g; h > 0;) {
            var y = a[r].s;
            p[y] < t ? (h -= 1 << (t - p[y]++ - 1)) : ++r;
          }
          for (; r >= 0 && h; --r) {
            var b = a[r].s;
            p[b] == t && (--p[b], ++h);
          }
          m = t;
        }
        return { t: new q(p), l: m };
      }),
      (Zn = function (e, t, n) {
        return e.s == -1 ? Math.max(Zn(e.l, t, n + 1), Zn(e.r, t, n + 1)) : (t[e.s] = n);
      }),
      (Qn = function (e) {
        for (var t = e.length; t && !e[--t];);
        for (
          var n = new J(++t),
            r = 0,
            i = e[0],
            a = 1,
            o = function (e) {
              n[r++] = e;
            },
            s = 1;
          s <= t;
          ++s
        )
          if (e[s] == i && s != t) ++a;
          else {
            if (!i && a > 2) {
              for (; a > 138; a -= 138) o(32754);
              a > 2 && (o(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305), (a = 0));
            } else if (a > 3) {
              for (o(i), --a; a > 6; a -= 6) o(8304);
              a > 2 && (o(((a - 3) << 5) | 8208), (a = 0));
            }
            for (; a--;) o(i);
            ((a = 1), (i = e[s]));
          }
        return { c: n.subarray(0, r), n: t };
      }),
      ($n = function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
        return n;
      }),
      (er = function (e, t, n) {
        var r = n.length,
          i = Un(t + 2);
        ((e[i] = 255 & r),
          (e[i + 1] = r >> 8),
          (e[i + 2] = 255 ^ e[i]),
          (e[i + 3] = 255 ^ e[i + 1]));
        for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
        return (i + 4 + r) * 8;
      }),
      (tr = function (e, t, n, r, i, a, o, s, c, l, u) {
        (Jn(t, u++, n), ++i[256]);
        for (
          var d,
            f,
            p,
            m,
            h = Xn(i, 15),
            g = h.t,
            _ = h.l,
            v = Xn(a, 15),
            y = v.t,
            b = v.l,
            x = Qn(g),
            S = x.c,
            C = x.n,
            w = Qn(y),
            T = w.c,
            E = w.n,
            D = new J(19),
            O = 0;
          O < S.length;
          ++O
        )
          ++D[31 & S[O]];
        for (var O = 0; O < T.length; ++O) ++D[31 & T[O]];
        for (var k = Xn(D, 7), A = k.t, j = k.l, M = 19; M > 4 && !A[En[M - 1]]; --M);
        var N = (l + 5) << 3,
          P = $n(i, Fn) + $n(a, In) + o,
          F = $n(i, g) + $n(a, y) + o + 14 + 3 * M + $n(D, A) + 2 * D[16] + 3 * D[17] + 7 * D[18];
        if (c >= 0 && N <= P && N <= F) return er(t, u, e.subarray(c, c + l));
        if ((Jn(t, u, 1 + (F < P)), (u += 2), F < P)) {
          ((d = Y(g, _, 0)), (f = g), (p = Y(y, b, 0)), (m = y));
          var ee = Y(A, j, 0);
          (Jn(t, u, C - 257), Jn(t, u + 5, E - 1), Jn(t, u + 10, M - 4), (u += 14));
          for (var O = 0; O < M; ++O) Jn(t, u + 3 * O, A[En[O]]);
          u += 3 * M;
          for (var I = [S, T], L = 0; L < 2; ++L)
            for (var R = I[L], O = 0; O < R.length; ++O) {
              var z = 31 & R[O];
              (Jn(t, u, ee[z]),
                (u += A[z]),
                z > 15 && (Jn(t, u, (R[O] >> 5) & 127), (u += R[O] >> 12)));
            }
        } else ((d = Ln), (f = Fn), (p = zn), (m = In));
        for (var O = 0; O < s; ++O) {
          var B = r[O];
          if (B > 255) {
            var z = (B >> 18) & 31;
            (Yn(t, u, d[z + 257]),
              (u += f[z + 257]),
              z > 7 && (Jn(t, u, (B >> 23) & 31), (u += wn[z])));
            var V = 31 & B;
            (Yn(t, u, p[V]), (u += m[V]), V > 3 && (Yn(t, u, (B >> 5) & 8191), (u += Tn[V])));
          } else (Yn(t, u, d[B]), (u += f[B]));
        }
        return (Yn(t, u, d[256]), u + f[256]);
      }),
      (nr = new Cn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])),
      (rr = new q(0)),
      (ir = function (e, t, n, r, i, a) {
        var o = a.z || e.length,
          s = new q(r + o + 5 * (1 + Math.ceil(o / 7e3)) + i),
          c = s.subarray(r, s.length - i),
          l = a.l,
          u = 7 & (a.r || 0);
        if (t) {
          u && (c[0] = a.r >> 3);
          for (
            var d = nr[t - 1],
              f = d >> 13,
              p = 8191 & d,
              m = (1 << n) - 1,
              h = a.p || new J(32768),
              g = a.h || new J(m + 1),
              _ = Math.ceil(n / 3),
              v = 2 * _,
              y = function (t) {
                return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << v)) & m;
              },
              b = new Cn(25e3),
              x = new J(288),
              S = new J(32),
              C = 0,
              w = 0,
              T = a.i || 0,
              E = 0,
              D = a.w || 0,
              O = 0;
            T + 2 < o;
            ++T
          ) {
            var k = y(T),
              A = 32767 & T,
              j = g[k];
            if (((h[A] = j), (g[k] = A), D <= T)) {
              var M = o - T;
              if ((C > 7e3 || E > 24576) && (M > 423 || !l)) {
                ((u = tr(e, c, 0, b, x, S, w, E, O, T - O, u)), (E = C = w = 0), (O = T));
                for (var N = 0; N < 286; ++N) x[N] = 0;
                for (var N = 0; N < 30; ++N) S[N] = 0;
              }
              var P = 2,
                F = 0,
                ee = p,
                I = (A - j) & 32767;
              if (M > 2 && k == y(T - I))
                for (
                  var L = Math.min(f, M) - 1, R = Math.min(32767, T), z = Math.min(258, M);
                  I <= R && --ee && A != j;
                ) {
                  if (e[T + P] == e[T + P - I]) {
                    for (var B = 0; B < z && e[T + B] == e[T + B - I]; ++B);
                    if (B > P) {
                      if (((P = B), (F = I), B > L)) break;
                      for (var V = Math.min(I, B - 2), H = 0, N = 0; N < V; ++N) {
                        var te = (T - I + N) & 32767,
                          ne = (te - h[te]) & 32767;
                        ne > H && ((H = ne), (j = te));
                      }
                    }
                  }
                  ((j = h[(A = j)]), (I += (A - j) & 32767));
                }
              if (F) {
                b[E++] = 268435456 | (An[P] << 18) | Nn[F];
                var re = 31 & An[P],
                  ie = 31 & Nn[F];
                ((w += wn[re] + Tn[ie]), ++x[257 + re], ++S[ie], (D = T + P), ++C);
              } else ((b[E++] = e[T]), ++x[e[T]]);
            }
          }
          for (T = Math.max(T, D); T < o; ++T) ((b[E++] = e[T]), ++x[e[T]]);
          ((u = tr(e, c, l, b, x, S, w, E, O, T - O, u)),
            l ||
              ((a.r = (7 & u) | (c[(u / 8) | 0] << 3)),
              (u -= 7),
              (a.h = g),
              (a.p = h),
              (a.i = T),
              (a.w = D)));
        } else {
          for (var T = a.w || 0; T < o + l; T += 65535) {
            var ae = T + 65535;
            (ae >= o && ((c[(u / 8) | 0] = l), (ae = o)), (u = er(c, u + 1, e.subarray(T, ae))));
          }
          a.i = o;
        }
        return Wn(s, 0, r + Un(u) + i);
      }),
      (ar = function (e, t, n, r, i) {
        if (!i && ((i = { l: 1 }), t.dictionary)) {
          var a = t.dictionary.subarray(-32768),
            o = new q(a.length + e.length);
          (o.set(a), o.set(e, a.length), (e = o), (i.w = a.length));
        }
        return ir(
          e,
          t.level == null ? 6 : t.level,
          t.mem == null
            ? i.l
              ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
              : 20
            : 12 + t.mem,
          n,
          r,
          i
        );
      }),
      (or = typeof TextDecoder < `u` && new TextDecoder()));
    try {
      or.decode(rr, { stream: !0 });
    } catch {}
    ((sr = 1024),
      (cr = 1.5),
      (lr = (e) => 2 ** e - 1),
      (ur = (e) => -(2 ** (e - 1))),
      (dr = (e) => 2 ** (e - 1) - 1),
      (Z = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: ur(8),
        Int16: ur(16),
        Int32: ur(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (Q = {
        Uint8: lr(8),
        Uint16: lr(16),
        Uint32: lr(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: dr(8),
        Int16: dr(16),
        Int32: dr(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (fr = class {
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
          let n = new Uint8Array(Math.ceil(t * cr) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = $e(n)));
        }
        writeUint8(e) {
          rt(e, Z.Uint8, Q.Uint8, `Uint8`);
          let t = K.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          rt(e, Z.Uint16, Q.Uint16, `Uint16`);
          let t = K.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          rt(e, Z.Uint32, Q.Uint32, `Uint32`);
          let t = K.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          rt(e, Z.Uint64, Q.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          rt(e, Z.BigUint64, Q.BigUint64, `BigUint64`);
          let t = K.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          rt(e, Z.Int8, Q.Int8, `Int8`);
          let t = K.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          rt(e, Z.Int16, Q.Int16, `Int16`);
          let t = K.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          rt(e, Z.Int32, Q.Int32, `Int32`);
          let t = K.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          rt(e, Z.Int64, Q.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          rt(e, Z.BigInt64, Q.BigInt64, `BigInt64`);
          let t = K.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = K.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = K.Float64;
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
          ((this.offset = 0),
            (this.bytes = new Uint8Array(sr)),
            (this.view = $e(this.bytes)),
            (this.encoder = new TextEncoder()),
            (this.encodedStrings = new Map()));
        }
      }),
      (pr = class {
        static fromString(e) {
          let [t, n, r] = e.split(`/`).map(Number);
          return (
            U(it(t), `Invalid chunkId`),
            U(it(n), `Invalid offset`),
            U(it(r), `Invalid length`),
            new pr(t, n, r)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(e) {
          return new pr(e.readUint16(), e.readUint32(), e.readUint32());
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
                  : (U(this.length === e.length), 0);
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
              return ct(e);
            case 2:
              return dt(e);
            case 3:
              return mt(e);
            case 4:
              return _t(e);
            case 5:
              return bt(e);
            case 6:
              return Ct(e);
            case 7:
              return Et(e);
            case 8:
              return kt(e);
            case 9:
              return Mt(e);
            case 10:
              return Ft(e);
            case 11:
              return Rt(e);
            case 12:
              return Vt(e);
            default:
              et(t);
          }
        }),
          (e.write = function (e, t) {
            let n = st(t);
            if ((e.writeUint8(n), !ot(t)))
              switch (t.type) {
                case I.Array:
                  return lt(e, t);
                case I.Boolean:
                  return ft(e, t);
                case I.Color:
                  return ht(e, t);
                case I.Date:
                  return vt(e, t);
                case I.Enum:
                  return xt(e, t);
                case I.File:
                  return wt(e, t);
                case I.Link:
                  return Dt(e, t);
                case I.Number:
                  return At(e, t);
                case I.Object:
                  return Nt(e, t);
                case I.ResponsiveImage:
                  return It(e, t);
                case I.RichText:
                  return zt(e, t);
                case I.String:
                  return Ht(e, t);
                default:
                  et(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = st(e),
              i = st(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (ot(e) || ot(t)) return 0;
            switch (e.type) {
              case I.Array:
                return (U(t.type === I.Array), ut(e, t, n));
              case I.Boolean:
                return (U(t.type === I.Boolean), pt(e, t));
              case I.Color:
                return (U(t.type === I.Color), gt(e, t));
              case I.Date:
                return (U(t.type === I.Date), yt(e, t));
              case I.Enum:
                return (U(t.type === I.Enum), St(e, t));
              case I.File:
                return (U(t.type === I.File), Tt(e, t));
              case I.Link:
                return (U(t.type === I.Link), Ot(e, t));
              case I.Number:
                return (U(t.type === I.Number), jt(e, t));
              case I.Object:
                return (U(t.type === I.Object), Pt(e, t, n));
              case I.ResponsiveImage:
                return (U(t.type === I.ResponsiveImage), Lt(e, t));
              case I.RichText:
                return (U(t.type === I.RichText), Bt(e, t));
              case I.String:
                return (U(t.type === I.String), Ut(e, t, n));
              default:
                et(e);
            }
          }));
      })((G ||= {})),
      (mr = class {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = G.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(e, t) {
          t || (e = nt(e));
          let n = new Sn(e),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new mr(a, { collation: r, cmsBackendCompression: t }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = G.read(n);
              e.push(t);
            }
            let t = pr.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new fr();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) G.write(e, t);
            r.write(e);
          }
          let t = e.subarray();
          return this.options.cmsBackendCompression ? t : tt(t);
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), (this.entries = []));
        }
      }),
      (hr = 3),
      (gr = 250),
      (_r = [408, 429, 500, 502, 503, 504]),
      (vr = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!_r.includes(r.status) || ++n > hr) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > hr) throw e;
          }
          await Wt(n);
        }
      }),
      (yr = mn(bn())),
      (br = `\r
`),
      (xr = `--`),
      (Sr = new TextEncoder()),
      (Cr = new TextDecoder()),
      (wr = class {
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
            if ((U(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = $t(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((U(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = $t(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          this.chunks = [];
        }
      }),
      (Tr = class {
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
            if ((U(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = nn(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((U(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = nn(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          this.chunks = [];
        }
      }),
      (Er = class {
        async loadModel() {
          let [e] = await tn(
            this.options.url,
            [this.options.range],
            this.options.cmsBackendCompression
          );
          return (
            U(e, `Failed to load model`),
            mr.deserialize(e, this.options.cmsBackendCompression)
          );
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          U(e.length === this.fields.length, `Invalid query length`);
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
                      et(t);
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
            if (e?.type !== I.String || t.value?.type !== I.String) return !1;
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
            if (e?.type !== I.String || t.value?.type !== I.String) return !1;
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
            if (e?.type !== I.String || t.value?.type !== I.String) return !1;
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
            0 > G.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            G.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
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
            (this.supportedLookupTypes = [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            (this.collation = this.options.collation));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (U(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n));
        }
      }),
      (Dr = class {
        static read(e, t) {
          let n = new Dr();
          if (t) {
            let n = e.readUint32();
            e = new Sn(nt(e.readBytes(n), { dictionary: t }));
          }
          let r = e.readUint16();
          for (let t = 0; t < r; t++) {
            let t = e.readString(),
              r = G.read(e);
            n.setField(t, r);
          }
          return n;
        }
        writeUncompressed(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), G.write(e, n));
        }
        write(e, t) {
          if (t) {
            let n = new fr();
            this.writeUncompressed(n);
            let r = tt(n.subarray(), { dictionary: t });
            (e.writeUint32(r.length), e.writeBytes(r));
          } else this.writeUncompressed(e);
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
          this.fields = new Map();
        }
      }),
      (Or = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Promise.all([
              vr(this.url),
              this.getCompressionDictionary(),
            ]).then(async ([e, t]) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let n = await e.arrayBuffer(),
                r = new Sn(new Uint8Array(n)),
                i = [],
                a = r.readUint32();
              for (let e = 0; e < a; e++) {
                let e = r.getOffset(),
                  n = Dr.read(r, t),
                  a = r.getOffset() - e,
                  o = new pr(this.id, e, a).toString(),
                  s = { pointer: o, data: n.getData() };
                (this.itemLoader.prime(o, s), i.push(s));
              }
              return i;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        getCompressionDictionary() {
          if (!this.compressionDictionaryUrl) return null;
          let e = this.compressionDictionaryCache.get(this.compressionDictionaryUrl);
          if (e) return e;
          let t = vr(this.compressionDictionaryUrl).then(async (e) => {
            if (!e.ok)
              throw Error(`Compression dictionary request failed: ${e.status} ${e.statusText}`);
            let t = await e.arrayBuffer();
            return new Uint8Array(t);
          });
          return (this.compressionDictionaryCache.set(this.compressionDictionaryUrl, t), t);
        }
        constructor(e, t, n, r) {
          ((this.id = e),
            (this.url = t),
            (this.compressionDictionaryUrl = n),
            (this.compressionDictionaryCache = r),
            (this.itemLoader = new xn.default(async (e) => {
              let t = e.map((e) => {
                  let t = pr.fromString(e);
                  return { from: t.offset, to: t.offset + t.length };
                }),
                [n, r] = await Promise.all([
                  tn(this.url, t, !this.compressionDictionaryUrl),
                  this.getCompressionDictionary(),
                ]);
              return n.map((t, n) => {
                let i = new Sn(t),
                  a = Dr.read(i, r),
                  o = e[n];
                return (U(o, `Missing pointer`), { pointer: o, data: a.getData() });
              });
            })));
        }
      }),
      (kr = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        async resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = pr.fromString(e),
                n = this.chunks[t.chunkId];
              return (U(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = pr.fromString(e.pointer),
            r = pr.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return G.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            (this.schema = this.options.schema),
            (this.indexes = this.options.indexes),
            (this.resolveRichText = this.options.resolveRichText));
          let t = new Map();
          this.chunks = this.options.chunks.map(
            (e, n) => new Or(n, e, this.options.compressionDictionary, t)
          );
        }
      }));
  });
async function jr(e) {
  let t = Mr[e];
  if (t) return await t();
}
var Mr,
  Nr = t(() => {
    Mr = [];
  }),
  $,
  Pr,
  Fr = t(() => {
    (k(),
      Ar(),
      Nr(),
      ($ = {
        bjbhFPJ5V: {
          definition: { isNullable: !0, type: I.String },
          isNullable: !0,
          type: I.Array,
        },
        bYRDe0uAB: { isNullable: !0, type: I.ResponsiveImage },
        id: { isNullable: !1, type: I.String },
        kf1A0l68t: { isNullable: !0, type: I.String },
        nextItemId: { isNullable: !0, type: I.String },
        previousItemId: { isNullable: !0, type: I.String },
        VMONvNAcH: { isNullable: !0, type: I.String },
      }),
      new R(),
      (Pr = {
        collectionByLocaleId: {
          default: new kr({
            chunks: [
              new URL(
                `./nmmDHYVNF-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            compressionDictionary: null,
            indexes: [
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 1 },
                collectionSchema: $,
                fieldNames: [`id`],
                range: { from: 0, to: 313 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 1 },
                collectionSchema: $,
                fieldNames: [`previousItemId`],
                range: { from: 313, to: 625 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 1 },
                collectionSchema: $,
                fieldNames: [`nextItemId`],
                range: { from: 625, to: 933 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 1 },
                collectionSchema: $,
                fieldNames: [`id`, `VMONvNAcH`],
                range: { from: 933, to: 1798 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 1 },
                collectionSchema: $,
                fieldNames: [`VMONvNAcH`, `id`],
                range: { from: 1798, to: 2663 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 0 },
                collectionSchema: $,
                fieldNames: [`VMONvNAcH`],
                range: { from: 2663, to: 3354 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 0 },
                collectionSchema: $,
                fieldNames: [`bYRDe0uAB`],
                range: { from: 3354, to: 7994 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 0 },
                collectionSchema: $,
                fieldNames: [`kf1A0l68t`],
                range: { from: 7994, to: 8297 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Er({
                cmsBackendCompression: !0,
                collation: { type: 0 },
                collectionSchema: $,
                fieldNames: [`bjbhFPJ5V`],
                range: { from: 8297, to: 9073 },
                url: new URL(
                  `./nmmDHYVNF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/yLRFCqsgjHLYb9Fwfp2J/jwBSy9ocl6MC2JLOhcON/nmmDHYVNF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: jr,
            schema: $,
          }),
        },
        displayName: `Component`,
      }),
      w(Pr, {
        VMONvNAcH: { title: `Slug`, type: I.String },
        bYRDe0uAB: {
          __defaultAssetReference: `data:framer/asset-reference,tG7ZlZjGf3u1ALUMXw0dRZ5A1M.svg?originalFilename=image.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Component Image`,
            assetReference: `data:framer/asset-reference,tG7ZlZjGf3u1ALUMXw0dRZ5A1M.svg?originalFilename=image.svg&preferredSize=auto`,
          },
          title: `Thumbnail Image`,
          type: I.ResponsiveImage,
        },
        kf1A0l68t: { defaultValue: ``, title: `Category`, type: I.String },
        bjbhFPJ5V: {
          dataIdentifier: `local-module:collection/av6kut8C7:default`,
          title: `Components Categories`,
          type: I.MultiCollectionReference,
        },
        previousItemId: {
          dataIdentifier: `local-module:collection/nmmDHYVNF:default`,
          title: `Previous`,
          type: I.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/nmmDHYVNF:default`,
          title: `Next`,
          type: I.CollectionReference,
        },
      }));
  });
export { Qe as i, Fr as n, Ze as r, Pr as t };
//# sourceMappingURL=nmmDHYVNF.EAEqT6nu.mjs.map
