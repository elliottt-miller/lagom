import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  I as r,
  L as i,
  S as a,
  V as o,
  a as s,
  f as c,
  g as l,
  j as u,
  k as d,
  n as f,
  o as p,
  r as m,
  t as h,
  v as g,
  w as _,
  x as v,
  y,
  z as b,
} from "./react.D0omlcQg.mjs";
import {
  $ as x,
  Et as S,
  Pt as C,
  Q as w,
  S as T,
  Wt as E,
  c as D,
  ct as O,
  dt as k,
  et as A,
  ft as j,
  m as M,
  mt as N,
  ot as P,
  qt as F,
  rt as I,
  tt as L,
  v as R,
  x as z,
  yt as B,
} from "./framer.zRtTBSC3.mjs";
async function V({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: n,
  localeId: r,
  collectionItemId: l,
  contentLocaleId: f,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  let m = W[e].page.preload();
  (j({
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
    k(J));
  let h = c(z, {
    children: c(M, {
      children: c(T, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: n,
        routes: W,
        collectionUtils: K,
        serverDatabaseClient: q,
        framerSiteId: J,
        notFoundPage: L(() => import("./tnKQ3GwxJE6VdYuZjoWcIjLj3EYXrq4x5TO0l6DU2rU.CqmV7QkJ.mjs")),
        isReducedMotion: void 0,
        localeId: r,
        locales: G,
        preserveQueryParams: !0,
        siteCanonicalURL: void 0,
        EditorBar:
          o === void 0
            ? void 0
            : (() => {
                if (X) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return L(async () => {
                  o.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: B, useLocaleInfo: S, useRouter: C },
                    react: {
                      createElement: c,
                      Fragment: i,
                      memo: _,
                      useCallback: u,
                      useEffect: v,
                      useRef: a,
                      useState: y,
                      useLayoutEffect: d,
                    },
                    "react-dom": { createPortal: s },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new R(
          () => import("./z45CXMxdGX2ehPtWLF-8xuQUsJiOP23JJM-6wIFFDfw.wFUEeHC7.mjs")
        ),
        initialCollectionItemId: l,
        initialContentLocaleIdOverride: f,
      }),
    }),
    value: { routes: {} },
  });
  return (await m, h);
}
function H() {
  Y && o.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || o.__framer_hadFatalError) return;
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
    let i, a, s, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (i = d.routeId),
        (a = d.localeId),
        (s = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (i = P(W, i)));
    else {
      P(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = w(W, decodeURIComponent(location.pathname), !0, G);
        ((i = e.routeId), (a = e.localeId), (c = e.pathVariables));
      }
    }
    let f = V({
      routeId: i,
      localeId: a,
      contentLocaleId: s,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    o !== void 0 &&
      (async () => {
        let e = W[i],
          t = G.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(c);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let r = Intl.DateTimeFormat().resolvedOptions(),
          s = r.timeZone,
          l = r.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          o.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: J,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: o.location.href,
              hostname: o.location.hostname || null,
              pathname: o.location.pathname || null,
              hash: o.location.hash || null,
              search: o.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await F({
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
      ? (E(`framer-rewrite-breakpoints`, () => {
          (O(u), o.__framer_onRewriteBreakpoints?.(u));
        }),
        (X ? (e) => e() : r)(() => {
          (I(), N(), h(t, p, { onRecoverableError: n }));
        }))
      : m(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y, X;
e(() => {
  if (
    (b(),
    A(),
    n(),
    p(),
    f(),
    (W = {
      augiA20Il: {
        elements: {
          RCLjrfv10: `for-the-legends`,
          WZazm3oIl: `hero-exit`,
          yYAnHL4Dd: `world-wide-shipping`,
        },
        page: L(() => import("./pwrxQ5gs08uFijzVuQRWuogUvb_QrJBolzlVAkhQ7VU.B1H4D3nh.mjs")),
        path: `/`,
      },
      danIGkS67: {
        elements: { DyB7BsOIa: `hero-exit` },
        page: L(() => import("./tnKQ3GwxJE6VdYuZjoWcIjLj3EYXrq4x5TO0l6DU2rU.CqmV7QkJ.mjs")),
        path: `/404`,
      },
      YYV2AyPUN: {
        elements: {},
        page: L(() => import("./gWTmudMYuV0vSsnw3tjzKILHZsxKizTkQ_04vPPnxK0.CZEjaptt.mjs")),
        path: `/shoes`,
      },
      lJgBufJK8: {
        elements: {},
        page: L(() => import("./WARRBi5341ixA_t3YGg5_ASL-t7p7EQMBF3Gew_Ft4E.CEFbVQUb.mjs")),
        path: `/shoes/legends`,
      },
      K4poKvWOC: {
        elements: { oWq6OVKvL: `Our Mission`, Wf6CqLciU: `hand` },
        page: L(() => import("./3qg14SBKN3tZstBv9LGxtMx5SR5O3VueIvgn2Br9HPs.B1qFOjmD.mjs")),
        path: `/about`,
      },
      NvFHwchNf: {
        elementPatterns: { MLUSdDrct: `:uQ2JvQyPw-shipping-point` },
        elements: { MLUSdDrct: `shipping-point`, TC5yeXQy5: `world-wide-shipping` },
        page: L(() => import("./J9kwpRRj3Adgf7xJHW4kN9u0rZFdnCAcNVN8IyTcTVw.DyzRdZob.mjs")),
        path: `/shipping`,
      },
      hrBgwOQUm: {
        elementPatterns: { qSTQ0MGe5: `:uQ2JvQyPw-point` },
        elements: { qSTQ0MGe5: `point` },
        page: L(() => import("./bMROh272jkqVPujVl51IO8AZ462YvxX4GZQaGONwoY0.D8gw3fw2.mjs")),
        path: `/privacy`,
      },
      dRZWNF7DT: {
        elementPatterns: { vlcV_V8MH: `:uQ2JvQyPw-point` },
        elements: { vlcV_V8MH: `point` },
        page: L(() => import("./VeOOAO_c7dv4NTPOtjhfRoytkIOIWHqJjjgCWpKEGBA.BCX13kTl.mjs")),
        path: `/terms-conditions`,
      },
      RqQHkoaOu: {
        elementPatterns: { ssWhGuYI5: `:uQ2JvQyPw-point` },
        elements: { f32YcTQ3I: `hero`, ssWhGuYI5: `point` },
        page: L(() => import("./EMghVYZa7_x9e6jyUqjMurpxkf9JvrouP1qa-pdpJu0.B0PHqyPo.mjs")),
        path: `/returns`,
      },
      DwwqStExo: {
        elements: {},
        page: L(() => import("./A81caH8vr-9QTceYakEGsLOLVDjdTo682pwE9Nxw_14.B3hVGCue.mjs")),
        path: `/contact`,
      },
      W_Niu2X3q: {
        elements: {},
        page: L(() => import("./PfBvzW1xomyfj9xWlfS4uG3fw7pYMQEu5yCO9RwPs8M.Cf2Intml.mjs")),
        path: `/magazine`,
      },
      duGnOs2MS: {
        elements: {},
        page: L(() => import("./JrwfShgiUraOTLNdyDnkg1o2GGDVH0XxQ7EGr502UYs.Z1GQ3xGo.mjs")),
        path: `/stores`,
      },
      fIwdA4CC3: {
        collectionId: `wWC8EGMFo`,
        elements: {},
        page: L(() => import("./DB0XDMvFiZusnGFh5IAMDaqc4K-TDCm7EjJERGxYVC8.DlKfM4F6.mjs")),
        path: `/shoes/:wjbVR4laR`,
      },
      ja8Mitsv9: {
        collectionId: `TWHZahxMp`,
        elements: {},
        page: L(() => import("./YAZtP36dUKMaiycxC1sh5cBD8kCTrdAP6h20RU5sYBI.BIRgBCbY.mjs")),
        path: `/magazine/:XLYJvQM4P`,
      },
      hlb0hjsQy: {
        collectionId: `nRUBpiZY0`,
        elements: {},
        page: L(() => import("./eQ70A3qskAMl38avVGLROLJBzifZOjsywrJYsdDwGPs.Ct0CoSSr.mjs")),
        path: `/stores/:dQLMp3Snn`,
      },
    }),
    (G = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {
      N2cLBMuUA: async () =>
        (await import("./N2cLBMuUA.BCwdznKG.mjs").then((e) => (e.r(), e.t)))?.utils,
      nRUBpiZY0: async () =>
        (await import("./kEpbi2chYUB-Y6xNOn8NPJ1CKlLjWtGTwCpSwturepw.BJlu67sa.mjs"))?.utils,
      TWHZahxMp: async () =>
        (await import("./GwQWUA_q6uY7z40DcXxr4DHo4qoqEPe_GfeYSxs8Y9I.DL44L2e9.mjs"))?.utils,
      wWC8EGMFo: async () =>
        (await import("./joBgn8CHAgZnvk19F0FJlnGKF4bqE6PS0Z6kt_hjGiQ.CmR7z5L2.mjs"))?.utils,
    }),
    (q = void 0),
    (J = `dc8e1d35820156c145d33dd8a60da9b350b99d325ea7dca424e674300e0e20ee`),
    (Y = typeof document < `u`),
    (X = Y && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(t.userAgent)),
    Y)
  ) {
    ((o.__framer_importFromPackage = (e, t) => () =>
      c(D, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (o.__framer_events = o.__framer_events || []),
      x());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.BHtyNJU6.mjs.map
