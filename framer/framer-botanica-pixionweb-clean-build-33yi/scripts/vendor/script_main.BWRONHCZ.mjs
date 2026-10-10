import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  M as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  a as l,
  g as u,
  i as d,
  m as f,
  n as p,
  p as m,
  r as h,
  t as g,
  u as _,
  v,
  w as y,
  z as b,
} from "./react.Dma17R77.mjs";
import {
  $ as x,
  B as S,
  H as C,
  J as w,
  K as T,
  V as ee,
  W as E,
  X as D,
  ct as O,
  d as k,
  ht as A,
  i as j,
  l as M,
  m as N,
  mt as P,
  p as F,
  q as I,
  rt as L,
  st as R,
  v as z,
  z as B,
} from "./framer.DewZ2Ft0.mjs";
import { _ as V, v as H } from "./shared-lib.DYR62Kmz.mjs";
function U({ webPageId: e, children: t, style: n, ...r }) {
  let i = { bO6jYUxK5: { href: { hash: `:b6uoLB1MU`, webPageId: `augiA20Il` }, refKey: !0 } },
    a = { ...i, bO6jYUxK5: { href: { hash: `:b6uoLB1MU`, webPageId: `BjBqmIQXf` }, refKey: !0 } },
    o = O(),
    s = { augiA20Il: i, BjBqmIQXf: a }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `BjBqmIQXf`:
      return _(z, { links: [s.bO6jYUxK5] }, (e) =>
        _(V, { ...s, bO6jYUxK5: o(e[0]), key: `HeaderFooter`, style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function W(e) {
  switch (e) {
    case `augiA20Il`:
    case `BjBqmIQXf`:
      return [
        { hash: `126b511`, mediaQuery: `(max-width: 424.98px)` },
        { hash: `100sle3`, mediaQuery: `(min-width: 1440px)` },
        { hash: `u4c0nc`, mediaQuery: `(min-width: 1024px) and (max-width: 1439.98px)` },
        { hash: `qpndus`, mediaQuery: `(min-width: 768px) and (max-width: 1023.98px)` },
        { hash: `z0qos7`, mediaQuery: `(min-width: 425px) and (max-width: 767.98px)` },
      ];
    default:
      return;
  }
}
async function G({ routeId: e, pathVariables: n, localeId: s, collectionItemId: l }) {
  let f = J[e].page.preload();
  w({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !1,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let p = _(F, {
    children: _(M, {
      children: _(N, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        routes: J,
        collectionUtils: X,
        framerSiteId: Z,
        notFoundPage: C(() => import("./shared-lib.DYR62Kmz.mjs").then((e) => (e.i(), e.r))),
        isReducedMotion: void 0,
        localeId: s,
        locales: Y,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://botanica-pixionweb.framer.website`,
        EditorBar:
          b === void 0
            ? void 0
            : (() => {
                if ($) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return C(async () => {
                  b.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: x, useLocaleInfo: L, useRouter: R },
                    react: {
                      createElement: _,
                      Fragment: o,
                      memo: u,
                      useCallback: r,
                      useEffect: i,
                      useRef: a,
                      useState: t,
                      useLayoutEffect: c,
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
        LayoutTemplate: U,
        loadSnippetsModule: new k(
          () => import("./SXKMN2690AIS5ZRfc1AQ2VYc_JY37scgP15h5Az9_bQ.DVfKT65u.mjs")
        ),
        initialCollectionItemId: l,
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
            duration: 0.2,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
        exit: {
          mask: { type: `circle`, x: `50%`, y: `50%` },
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.2,
            ease: [0.96, -0.05, 0.3, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `-41%`,
        },
      },
      routes: {},
    },
  });
  return (await f, p);
}
function K() {
  Q && b.__framer_events.push(arguments);
}
async function q(e, t) {
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
    K(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
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
        (r = T(J, r)));
    else {
      T(J, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = B(J, decodeURIComponent(location.pathname), !0, Y);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = G({ routeId: r, localeId: i, pathVariables: a, collectionItemId: s?.collectionItemId });
    b !== void 0 &&
      (async () => {
        let e = J[r],
          t = Y.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && X) {
          let r = await X[e.collectionId]?.(),
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
              framerSiteId: Z,
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
          await A({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (P(`framer-rewrite-breakpoints`, () => {
          (I(o), b.__framer_onRewriteBreakpoints?.(o));
        }),
        ($ ? (e) => e() : v)(() => {
          (E(), D(), g(t, l, { onRecoverableError: n }));
        }))
      : h(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var J, Y, X, Z, Q, $;
e(() => {
  if (
    (n(),
    ee(),
    y(),
    l(),
    p(),
    H(),
    (J = {
      augiA20Il: {
        elements: {
          B1wYyw9qj: `why-choose-3`,
          b6uoLB1MU: `hero`,
          fBoB8dJHB: `plants4`,
          fH1dJWDRZ: `why-choose`,
          iLQR2gUoR: `plants-1`,
          iu26HJtPt: `contact-us`,
          IX1SVflNL: `about-us`,
          lNFMvzb0M: `plants-3`,
          N1UaIRCy_: `plants2`,
          P9cso7Gmd: `section-2`,
          Q5Vx3bMBy: `section-1`,
          u4wiTznyv: `services`,
          yHaU55ofG: `why-choose-2`,
        },
        page: C(() => import("./FCcNUyyZT-4CAO32xic_WntFr4ypzANoFr0FqexMYhA.B9YDzLm9.mjs")),
        path: `/`,
      },
    }),
    (Y = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (X = {}),
    (Z = `b801bdd74b9e18b7d9c090051fb2892dce6a43b28acf71b533653659aab194f0`),
    (Q = typeof document < `u`),
    ($ = Q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    Q)
  ) {
    ((b.__framer_importFromPackage = (e, t) => () =>
      _(j, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (b.__framer_events = b.__framer_events || []),
      S());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? q(!0, e) : q(!1, e);
  }
})();
export { W as getLayoutTemplateBreakpoints, G as getPageRoot };
//# sourceMappingURL=script_main.BWRONHCZ.mjs.map
