import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  _ as l,
  a as u,
  b as d,
  d as f,
  g as p,
  h as m,
  i as h,
  n as g,
  r as _,
  t as v,
  w as y,
  y as b,
} from "./react.iNMCLRE-.mjs";
import {
  B as x,
  F as S,
  G as C,
  H as w,
  I as T,
  N as E,
  P as D,
  Q as O,
  R as k,
  U as A,
  V as j,
  c as M,
  ct as N,
  d as P,
  et as F,
  i as I,
  o as L,
  q as R,
  st as z,
  u as B,
} from "./framer.BcvqwUvb.mjs";
async function V({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: u,
  contentLocaleId: p,
  shouldResolveInitialRouteContentState: m = !1,
}) {
  let g = W[e].page.preload();
  (A({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    w(J));
  let _ = f(B, {
    children: f(L, {
      children: f(P, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        canonicalPathVariables: r,
        routes: W,
        collectionUtils: K,
        serverDatabaseClient: q,
        framerSiteId: J,
        notFoundPage: T(() => import(`./SitesNotFoundPage.js@1.4.DDhfQpuc.mjs`)),
        isReducedMotion: !0,
        localeId: i,
        locales: G,
        preserveQueryParams: !0,
        siteCanonicalURL: `https://swatch-accordion.framer.website`,
        EditorBar:
          s === void 0
            ? void 0
            : (() => {
                if (X) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return T(async () => {
                  s.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: R, useLocaleInfo: O, useRouter: F },
                    react: {
                      createElement: f,
                      Fragment: o,
                      memo: c,
                      useCallback: a,
                      useEffect: b,
                      useRef: d,
                      useState: l,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new M(
          () => import("./aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.dObCGW41.mjs")
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: p,
      }),
    }),
    value: { routes: {} },
  });
  return (await g, _);
}
function H() {
  Y && s.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || s.__framer_hadFatalError) return;
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
    H(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (a = d.localeId),
        (o = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = x(W, r)));
    else {
      x(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = E(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (a = e.localeId), (c = e.pathVariables));
      }
    }
    let f = V({
      routeId: r,
      localeId: a,
      contentLocaleId: o,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    s !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(c);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          o = i.timeZone,
          l = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          s.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: J,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: s.location.href,
              hostname: s.location.hostname || null,
              pathname: s.location.pathname || null,
              hash: s.location.hash || null,
              search: s.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await N({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (z(`framer-rewrite-breakpoints`, () => {
          (j(u), s.__framer_onRewriteBreakpoints?.(u));
        }),
        (X ? (e) => e() : i)(() => {
          (k(), C(), v(t, p, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y, X;
e(() => {
  if (
    (n(),
    S(),
    y(),
    u(),
    g(),
    (W = {
      augiA20Il: {
        elements: {},
        page: T(() => import("./2dCDwSjpSha3KrES9lwNOxXyvi_lFOUvF7083wHad5o.BNd-fhDN.mjs")),
        path: `/`,
      },
      itrx5vWJh: {
        elements: {},
        page: T(() => import("./T_aeHiZaLVx4U43Nh5iO5Rqheh7rrimzcycX8c4Rd4E.BGRMyIkU.mjs")),
        path: `/component-link-199`,
      },
    }),
    (G = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {}),
    (q = void 0),
    (J = `6302c818d98343fd79bdaf81da1c19b197b4d94f3b7ab2d16875f039088b56c9`),
    (Y = typeof document < `u`),
    (X = Y && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(r.userAgent)),
    Y)
  ) {
    ((s.__framer_importFromPackage = (e, t) => () =>
      f(I, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (s.__framer_events = s.__framer_events || []),
      D());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.Dl6trxpA.mjs.map
