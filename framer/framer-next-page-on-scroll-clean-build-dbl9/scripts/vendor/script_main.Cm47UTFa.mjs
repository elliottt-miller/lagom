import { n as e } from "./rolldown-runtime.vRAu6p--.mjs";
import {
  C as t,
  D as n,
  L as r,
  M as i,
  N as a,
  P as o,
  R as s,
  _ as c,
  a as l,
  h as u,
  i as d,
  j as f,
  m as p,
  n as m,
  p as h,
  r as g,
  t as _,
  u as v,
  x as y,
  z as b,
} from "./react.D7gtL4Ec.mjs";
import {
  Et as x,
  G as S,
  J as C,
  K as w,
  Y as T,
  Z as E,
  _ as D,
  ct as O,
  d as k,
  et as A,
  it as j,
  m as M,
  mt as N,
  nt as P,
  p as F,
  q as I,
  s as L,
  v as R,
  vt as z,
  wt as B,
} from "./framer.BWiQWvWz.mjs";
async function V({ routeId: e, pathVariables: t, localeId: r, collectionItemId: s }) {
  let c = W[e].page.preload(),
    l = v(D, {
      children: v(k, {
        children: v(M, {
          children: v(R, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: W,
            collectionUtils: K,
            framerSiteId: q,
            notFoundPage: T(() => import(`./SitesNotFoundPage.js@1.4.BqWi1jMw.mjs`)),
            isReducedMotion: void 0,
            localeId: r,
            locales: G,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://next-page-on-scroll.framer.website`,
            EditorBar:
              b === void 0
                ? void 0
                : (() => {
                    if (Y) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return T(async () => {
                      b.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: O, useLocaleInfo: N, useRouter: z },
                        react: {
                          createElement: v,
                          Fragment: a,
                          memo: u,
                          useCallback: f,
                          useEffect: i,
                          useRef: n,
                          useState: o,
                          useLayoutEffect: y,
                        },
                        "react-dom": { createPortal: d },
                      };
                      let { createEditorBar: e } = await import(
                        `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            loadSnippetsModule: new F(
              () => import("./iIMLgEXaABxpiUmDqv1TVFwuyZBVQFumfXpv6bKMrW0.SJ7HXTDH.mjs")
            ),
            initialCollectionItemId: s,
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
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.5,
              ease: [0.625, 0.05, 0, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `100px`,
          },
        },
        routes: {},
      },
    });
  return (await c, l);
}
function H() {
  J && b.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || b.__framer_hadFatalError) return;
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
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = A(W, r)));
    else {
      A(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = S(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let l = V({ routeId: r, localeId: i, pathVariables: a, collectionItemId: s?.collectionItemId });
    b !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          b.__framer_events.push([
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
              url: b.location.href,
              hostname: b.location.hostname || null,
              pathname: b.location.pathname || null,
              hash: b.location.hash || null,
              search: b.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await x({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let u = await l;
    e
      ? (B(`framer-rewrite-breakpoints`, () => {
          (P(o), b.__framer_onRewriteBreakpoints?.(o));
        }),
        (Y ? (e) => e() : c)(() => {
          (E(), j(), _(t, u, { onRecoverableError: n }));
        }))
      : g(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y;
e(() => {
  if (
    (r(),
    I(),
    t(),
    l(),
    m(),
    (W = {
      augiA20Il: {
        elements: {},
        page: T(() => import("./X0y4_SvNfQ-xEnWMd_AOrYyOzxsRwOozIDMV-3_NwmQ.CTJU0jb-.mjs")),
        path: `/`,
      },
      zKajjvdpt: {
        elements: {},
        page: T(() => import("./OHa-MrUuokdrg8UKK4jMYt7x0W21v6z9PYWyH5jhp_U.DW-ECDji.mjs")),
        path: `/blog`,
      },
      X0nzOU9lt: {
        collectionId: `Ma8khKkO9`,
        elements: { enRGksvdL: `hide` },
        page: T(() => import("./GDDrTTeWq69iswC0imx4CwOiIJWFb6fClG6XazDijK8.B0H1mgh9.mjs")),
        path: `/blog/:WFE9HVH2q`,
      },
    }),
    (G = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {
      Ma8khKkO9: async () =>
        (await import("./8SBHQCtTTb7hqhYrGmv62fILAW3_2fuqr6UmJX8tdOE.JcOEjemp.mjs"))?.utils,
    }),
    (q = `363363a93cb324e0415d7d0e3df02b694d1eef9f581a83b053cdd0736c37ab51`),
    (J = typeof document < `u`),
    (Y = J && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    J)
  ) {
    ((b.__framer_importFromPackage = (e, t) => () =>
      v(L, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (b.__framer_events = b.__framer_events || []),
      w(),
      C());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.Cm47UTFa.mjs.map
