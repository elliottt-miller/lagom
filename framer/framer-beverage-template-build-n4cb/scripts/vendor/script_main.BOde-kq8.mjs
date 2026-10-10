import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import {
  C as t,
  D as n,
  I as r,
  L as i,
  M as a,
  N as o,
  P as s,
  R as c,
  _ as l,
  a as u,
  c as d,
  g as f,
  h as ee,
  i as p,
  j as m,
  l as h,
  m as g,
  n as _,
  o as v,
  p as te,
  r as y,
  t as ne,
  u as b,
  v as re,
  x as ie,
} from "./react.CAGFp8w4.mjs";
import { S as ae, r as oe, t as se } from "./motion.D9nDYnVb.mjs";
import {
  D as ce,
  Dt as le,
  E as ue,
  G as de,
  J as x,
  K as S,
  N as C,
  Q as w,
  Tt as fe,
  W as pe,
  X as me,
  _ as he,
  a as T,
  et as ge,
  f as _e,
  ft as ve,
  g as ye,
  i as E,
  j as D,
  l as be,
  lt as xe,
  mt as O,
  o as k,
  p as Se,
  q as Ce,
  rt as we,
  s as Te,
  st as Ee,
  u as De,
  ut as Oe,
  vt as ke,
  x as A,
  xt as Ae,
  y as j,
  z as M,
} from "./framer.yhOKXYuv.mjs";
import { i as je, n as Me, r as N, t as P } from "./B5ddvGOsq.CArgs3WN.mjs";
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  Ne,
  G,
  Pe,
  Fe,
  Ie,
  Le,
  K,
  Re,
  ze = e(() => {
    (v(),
      S(),
      se(),
      t(),
      je(),
      Me(),
      (F = M(N)),
      (I = M(P)),
      (L = {
        dkAhbVkks: `(max-width: 809.98px)`,
        o5xFdueql: `(min-width: 1440px)`,
        yVRscUZVb: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (R = `framer-16JRC`),
      (z = {
        dkAhbVkks: `framer-v-xhag9o`,
        o5xFdueql: `framer-v-1igs4gp`,
        yVRscUZVb: `framer-v-uyv2vg`,
      }),
      (B = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (V = {
        dkAhbVkks: [`.framer-16JRC .framer-ba82ub-container { width: 100%; z-index: 7; }`],
        yVRscUZVb: [`.framer-16JRC .framer-ba82ub-container { width: 800px; }`],
      }),
      (H = Object.keys(V)),
      (U = { dkAhbVkks: `.framer-xhag9o-override`, yVRscUZVb: `.framer-uyv2vg-override` }),
      (W = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-16JRC.framer-1le30a, .framer-16JRC .framer-1le30a { display: block; }`,
        `.framer-16JRC.framer-1igs4gp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-16JRC .framer-ba82ub-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 1440px; z-index: 10; }`,
        `.framer-16JRC .framer-1lczyy2 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-16JRC .framer-vjnttd-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Ne = {
        dkAhbVkks: `(max-width: 809.98px)`,
        o5xFdueql: `(min-width: 1440px)`,
        yVRscUZVb: `(min-width: 810px) and (max-width: 1439.98px)`,
      }),
      (G = { Desktop: `o5xFdueql`, Phone: `dkAhbVkks`, Tablet: `yVRscUZVb` }),
      (Pe = ({ value: e }) =>
        ve()
          ? null
          : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Fe = ({
        footerFill: e,
        headerTextColor: t,
        height: n,
        hoverUnderline: r,
        id: i,
        width: a,
        ...o
      }) => ({
        ...o,
        A2FJA50JY: e ?? o.A2FJA50JY ?? `rgb(253, 146, 64)`,
        Jervq6vup:
          t ?? o.Jervq6vup ?? `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5))`,
        variant: G[o.variant] ?? o.variant ?? `o5xFdueql`,
        yH2A5LkfT:
          r ??
          o.yH2A5LkfT ??
          `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))`,
      })),
      (Ie = f(function (e, t) {
        let r = n(null),
          i = t ?? r,
          a = re(),
          { activeLocale: o, setLocale: s } = O(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: f,
            Jervq6vup: ee,
            A2FJA50JY: p,
            yH2A5LkfT: m,
            children: g,
            ..._
          } = Fe(e),
          [v, te] = Oe(f, L, !1),
          y = D(R);
        return (
          xe({}),
          d(be.Provider, {
            value: {
              activeVariantId: v,
              humanReadableVariantMap: G,
              isLayoutTemplate: !0,
              primaryVariantId: `o5xFdueql`,
              variantClassNames: z,
            },
            children: h(oe, {
              id: u ?? a,
              children: [
                d(Pe, { value: `:root body { background: none; }` }),
                h(ae.div, {
                  ..._,
                  className: D(y, `framer-1igs4gp`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    d(j, {
                      breakpoint: v,
                      overrides: { dkAhbVkks: { width: `100vw` }, yVRscUZVb: { width: `800px` } },
                      children: d(E, {
                        height: 136,
                        width: `1440px`,
                        y: 0,
                        children: d(T, {
                          className: `framer-ba82ub-container`,
                          "data-framer-layout-hint-center-x": !0,
                          layoutScroll: !0,
                          nodeId: `KHuk7JOIT`,
                          scopeId: `VnOSacRW8`,
                          children: d(j, {
                            breakpoint: v,
                            overrides: {
                              dkAhbVkks: { variant: B(`M4s3f1gIn`) },
                              yVRscUZVb: { variant: B(`OmgiYHgjX`) },
                            },
                            children: d(N, {
                              D5dIlgV_e: ee,
                              eTITdHXXZ: m,
                              height: `100%`,
                              id: `KHuk7JOIT`,
                              layoutId: `KHuk7JOIT`,
                              style: { width: `100%` },
                              variant: B(`FOlC2Ey5Z`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    g,
                    d(`div`, { className: `framer-1lczyy2` }),
                    d(E, {
                      height: 329,
                      width: `100vw`,
                      y: 1e3,
                      children: d(T, {
                        className: `framer-vjnttd-container`,
                        nodeId: `jK_qoSotr`,
                        scopeId: `VnOSacRW8`,
                        children: d(j, {
                          breakpoint: v,
                          overrides: {
                            dkAhbVkks: { variant: B(`xFRCFMupe`) },
                            yVRscUZVb: { variant: B(`XknOEgrGL`) },
                          },
                          children: d(P, {
                            EpcDfJqqJ: p,
                            height: `100%`,
                            id: `jK_qoSotr`,
                            layoutId: `jK_qoSotr`,
                            style: { width: `100%` },
                            variant: B(`OVA153bdM`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Le = (e) =>
        e === A.canvas || e === A.export
          ? [
              ...W,
              ...H.flatMap((e) => {
                let t = U[e];
                return V[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...W, ...H.map((e) => `@media ${Ne[e]} { ${V[e].join(` `)} }`)]),
      (K = Ae(Ie, Le, `framer-16JRC`)),
      (Re = K),
      (K.displayName = `Template`),
      (K.defaultProps = { height: 1e3, width: 1440 }),
      ce(K, {
        Jervq6vup: {
          defaultValue: `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5)) /* {"name":"Title"} */`,
          title: `Header Text Color`,
          type: k.Color,
        },
        A2FJA50JY: { defaultValue: `rgb(253, 146, 64)`, title: `Footer fill`, type: k.Color },
        yH2A5LkfT: {
          defaultValue: `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))`,
          title: `Hover Underline`,
          type: k.Color,
        },
      }),
      ue(K, [{ explicitInter: !0, fonts: [] }, ...F, ...I], { supportsExplicitInterCodegen: !0 }),
      (K.loader = { load: (e, t) => (t.locale, Promise.allSettled([C(N, {}, t), C(P, {}, t)])) }));
  });
function Be({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      A2FJA50JY: `rgb(245, 119, 72)`,
      Jervq6vup: `rgb(252, 56, 47)`,
      yH2A5LkfT: `rgb(252, 56, 47)`,
    },
    a = {
      ...i,
      A2FJA50JY: `var(--token-94f1f73b-1649-4fd6-aeca-936a2a849189, rgb(255, 58, 36))`,
      Jervq6vup: `var(--token-94f1f73b-1649-4fd6-aeca-936a2a849189, rgb(255, 58, 36))`,
      yH2A5LkfT: `var(--token-94f1f73b-1649-4fd6-aeca-936a2a849189, rgb(255, 58, 36))`,
    },
    o =
      {
        CwHOwJrAs: {
          ...i,
          A2FJA50JY: `var(--token-3e04ca37-775c-4f2c-9b7c-44e058b1e061, rgb(252, 114, 81))`,
          Jervq6vup: `var(--token-3e04ca37-775c-4f2c-9b7c-44e058b1e061, rgb(252, 114, 81))`,
          yH2A5LkfT: `var(--token-3e04ca37-775c-4f2c-9b7c-44e058b1e061, rgb(252, 114, 81))`,
        },
        Jt77tlfGm: i,
        WCxlBmStO: a,
      }[e] ?? {};
  switch (e) {
    case `Jt77tlfGm`:
    case `WCxlBmStO`:
    case `CwHOwJrAs`:
      return b(Re, { ...o, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Ve(e) {
  switch (e) {
    case `Jt77tlfGm`:
    case `WCxlBmStO`:
    case `CwHOwJrAs`:
      return [
        { hash: `1igs4gp`, mediaQuery: `(min-width: 1440px)` },
        { hash: `uyv2vg`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
        { hash: `xhag9o`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function He({ routeId: e, pathVariables: t, localeId: r, collectionItemId: i }) {
  let l = J[e].page.preload(),
    u = b(ye, {
      children: b(De, {
        children: b(Se, {
          children: b(he, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: J,
            collectionUtils: X,
            framerSiteId: Z,
            notFoundPage: x(
              () => import("./spNLlU6_JN9gfd-KfZ5aLl7_Lb82yn4izumIGce3uts.CFCAjN0M.mjs")
            ),
            isReducedMotion: void 0,
            localeId: r,
            locales: Y,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://hapipola.framer.website`,
            EditorBar:
              c === void 0
                ? void 0
                : (() => {
                    if ($) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return x(async () => {
                      c.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: Ee, useLocaleInfo: O, useRouter: ke },
                        react: {
                          createElement: b,
                          Fragment: o,
                          memo: ee,
                          useCallback: m,
                          useEffect: a,
                          useRef: n,
                          useState: s,
                          useLayoutEffect: ie,
                        },
                        "react-dom": { createPortal: p },
                      };
                      let { createEditorBar: e } = await import(
                        `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            LayoutTemplate: Be,
            loadSnippetsModule: new _e(
              () => import("./6uLQ_Umx25AB2kr4C8D2Utd4bz6AA0O44Q7EMHx6xeY.AoPEty4B.mjs")
            ),
            initialCollectionItemId: i,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: { routes: {} },
    });
  return (await l, u);
}
function Ue() {
  Q && c.__framer_events.push(arguments);
}
async function q(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Ue(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = w(J, r)));
    else {
      w(J, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = pe(J, decodeURIComponent(location.pathname), !0, Y);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let u = He({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    c !== void 0 &&
      (async () => {
        let e = J[r],
          t = Y.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && X) {
          let r = await X[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          l = o.timeZone,
          u = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Z ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await le({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let d = await u;
    e
      ? (fe(`framer-rewrite-breakpoints`, () => {
          (ge(o), c.__framer_onRewriteBreakpoints?.(o));
        }),
        ($ ? (e) => e() : l)(() => {
          (me(), we(), ne(t, d, { onRecoverableError: n }));
        }))
      : y(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var J, Y, X, Z, Q, $;
e(() => {
  if (
    (r(),
    S(),
    t(),
    u(),
    _(),
    ze(),
    (J = {
      Jt77tlfGm: {
        elements: {
          hx86Jkt0G: `reviews`,
          jvcD4JsIY: `benefits`,
          Oq0VM_ta6: `about-1`,
          vESE0VP8E: `blog`,
          vqEn34QWI: `about`,
        },
        page: x(() => import("./VcvnVcKYUszYNHiUKZy3lv6iFLojuSl0bYSxf_4ZSSM.DIs50mdb.mjs")),
        path: `/`,
      },
      WCxlBmStO: {
        elements: {},
        page: x(() => import("./nfufx9FrqaFRxQ9U33wp0HZwcHv2TB_GmHU56Tv_Oi0.Dx7t1cAx.mjs")),
        path: `/product-page`,
      },
      gEMThqlDf: {
        elements: {},
        page: x(() => import("./spNLlU6_JN9gfd-KfZ5aLl7_Lb82yn4izumIGce3uts.CFCAjN0M.mjs")),
        path: `/404`,
      },
      vDqSdXI3P: {
        collectionId: `pzJ5xx19u`,
        elements: { ePwJMz2al: `can` },
        page: x(() => import("./EKnXmxu-AppieKlcuclg8zmynk7_LYyljmYQc-TkurY.S9OZM3hU.mjs")),
        path: `/products/:r_URlGY20`,
      },
      CwHOwJrAs: {
        collectionId: `UbsOPWlc8`,
        elements: {},
        page: x(() => import("./FDrLtJfkIKFxrQcVOXicvvP2CIS0T-kZiHqmV_e5AEA.DspYWuMi.mjs")),
        path: `/policy-pages/:qLOHvls_p`,
      },
    }),
    (Y = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (X = {
      pzJ5xx19u: async () =>
        (await import("./CzzkaSd1kv2aAUzk7iEImjZomUUEMdBi19GgkJUzqBQ.2Vi70vQO.mjs"))?.utils,
      UbsOPWlc8: async () =>
        (await import("./Xtgms2e3p5fi6k-JAoPXh7YdsW5DwkIsmcj9FkSKdiM.7F9wpHf7.mjs"))?.utils,
    }),
    (Z = `f1b97102062e3befea68e909f5454e258db0b05611dc6bf8535d2952bd30a10b`),
    (Q = typeof document < `u`),
    ($ = Q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
    Q)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      b(Te, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (c.__framer_events = c.__framer_events || []),
      de(),
      Ce());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? q(!0, e) : q(!1, e);
  }
})();
export { Ve as getLayoutTemplateBreakpoints, He as getPageRoot };
//# sourceMappingURL=script_main.BOde-kq8.mjs.map
