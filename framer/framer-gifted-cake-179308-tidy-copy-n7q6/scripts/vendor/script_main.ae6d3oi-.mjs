import { t as e } from "./rolldown-runtime.D3cOTcPh.mjs";
import {
  A as t,
  C as n,
  E as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  _ as l,
  a as u,
  h as d,
  i as f,
  j as p,
  m,
  n as h,
  p as g,
  r as _,
  t as v,
  u as y,
  x as b,
} from "./react.G3EGc0ga.mjs";
import {
  A as x,
  F as S,
  M as C,
  N as w,
  R as T,
  U as E,
  V as D,
  Y as O,
  c as k,
  d as A,
  i as j,
  j as M,
  k as N,
  nt as P,
  o as F,
  q as I,
  s as L,
  tt as R,
  u as z,
  z as B,
} from "./framer.BfNjQ3gp.mjs";
async function V({ routeId: e, pathVariables: n, localeId: i, collectionItemId: a }) {
  let l = W[e].page.preload(),
    u = y(z, {
      children: y(F, {
        children: y(k, {
          children: y(A, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: n,
            routes: W,
            collectionUtils: K,
            framerSiteId: q,
            notFoundPage: w(() => import(`./SitesNotFoundPage.js@1.4.DBoi28-_.mjs`)),
            isReducedMotion: void 0,
            localeId: i,
            locales: G,
            preserveQueryParams: void 0,
            siteCanonicalURL: void 0,
            EditorBar:
              o === void 0
                ? void 0
                : (() => {
                    if (Y) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return w(async () => {
                      o.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: E, useLocaleInfo: I, useRouter: O },
                        react: {
                          createElement: y,
                          Fragment: s,
                          memo: d,
                          useCallback: t,
                          useEffect: p,
                          useRef: r,
                          useState: c,
                          useLayoutEffect: b,
                        },
                        "react-dom": { createPortal: f },
                      };
                      let { createEditorBar: e } = await import(
                        `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            loadSnippetsModule: new L(
              () => import("./38-enj_7cOI8cxiJjqJCCzdiefckWhD7ReYKzsWD6yg.Pnvdk6aY.mjs")
            ),
            initialCollectionItemId: a,
          }),
          value: {
            autobahnNavigation: !0,
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
function H() {
  J && o.__framer_events.push(arguments);
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
    let r, i, a, s, c;
    if (e)
      ((c = JSON.parse(t.dataset.framerHydrateV2)),
        (r = c.routeId),
        (i = c.localeId),
        (a = c.pathVariables),
        (s = c.breakpoints),
        (r = T(W, r)));
    else {
      T(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = N(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let u = V({ routeId: r, localeId: i, pathVariables: a, collectionItemId: c?.collectionItemId });
    o !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = c?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          o.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: q ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: o.location.href,
              hostname: o.location.hostname || null,
              pathname: o.location.pathname || null,
              hash: o.location.hash || null,
              search: o.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await P({
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
      ? (R(`framer-rewrite-breakpoints`, () => {
          (B(s), o.__framer_onRewriteBreakpoints?.(s));
        }),
        (Y ? (e) => e() : l)(() => {
          (S(), D(), v(t, d, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y;
e(() => {
  if (
    (i(),
    M(),
    n(),
    u(),
    h(),
    (W = {
      augiA20Il: {
        elements: {},
        page: w(() => import("./PaOUCLP6Ly3QR8uxU2ujib-qL2AkicrkJJQStJ2xCGA.KipBYryx.mjs")),
        path: `/`,
      },
    }),
    (G = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {}),
    (q = `e00a691e7eb69cca8c6fd823ea2fb08ab9faed6bf6bb3b877d1b51e4a7a59120`),
    (J = typeof document < `u`),
    (Y = J && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    J)
  ) {
    ((o.__framer_importFromPackage = (e, t) => () =>
      y(j, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (o.__framer_events = o.__framer_events || []),
      x(),
      C());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.ae6d3oi-.mjs.map
