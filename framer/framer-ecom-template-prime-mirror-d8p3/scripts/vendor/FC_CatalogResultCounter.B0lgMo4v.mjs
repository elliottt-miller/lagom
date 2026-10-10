import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { B as t, D as n, H as r, c as i, s as a, x as o, y as s } from "./react.BtSUcPAM.mjs";
import { N as c, Q as l, T as u, o as d } from "./framer.DuFjdl15.mjs";
function f(e) {
  let {
      type: t,
      content: n,
      font: i,
      color: c,
      transform: l,
      noQuery: d,
      searchText: f,
      noFavorites: p,
      favoritesText: m,
      noResults: h,
      defaultText: g,
      preview: _,
    } = e,
    [v, y] = s(``),
    [b, x] = s(0),
    [S, C] = s(!1),
    [w, T] = s(!1),
    E = () => {
      if (r === void 0) return !1;
      try {
        return (
          r.document?.location?.href.includes(`framer`) ||
          r.document?.location?.pathname.includes(`preview`) ||
          !r.document?.location?.host ||
          r.parent !== r
        );
      } catch {
        return !0;
      }
    },
    D = (e, t) => {
      switch (t) {
        case `Uppercase`:
          return e.toUpperCase();
        case `Lowercase`:
          return e.toLowerCase();
        case `Capitalize`:
          return e
            .split(` `)
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
            .join(` `);
        default:
          return e;
      }
    },
    O = (e) => {
      let t = E() && !v ? `term` : v;
      return e.replace(/\{\{term\}\}/g, t).replace(/\{\{\#\}\}/g, b.toString());
    },
    k = () => r !== void 0 && new URLSearchParams(r.location.search).has(`search`),
    A = () => {
      if (u.current() === u.canvas) {
        if (_ === `Empty`) {
          if (t === `Search`) return (d === `Show` && f) || ``;
          if (t === `Favorites`) return (p === `Show` && m) || ``;
          if (t === `Default`) return (h === `Show` && g) || ``;
        }
        if (_ === `Results`) return n;
      }
      return t === `Search` && !k()
        ? (d === `Show` && f) || ``
        : t === `Favorites` && b === 0
          ? (p === `Show` && m) || ``
          : t === `Default` && b === 0
            ? !E() && !S
              ? ``
              : (h === `Show` && g) || ``
            : n;
    },
    j = () => {
      if (r === void 0) return 0;
      try {
        return JSON.parse(localStorage.getItem(`favorites`) || `[]`).length;
      } catch {
        return 0;
      }
    };
  (o(() => {
    if (u.current() === u.canvas) {
      T(!0);
      return;
    }
    let e = setTimeout(() => {
      T(!0);
    }, 500);
    return () => clearTimeout(e);
  }, []),
    o(() => {
      t === `Favorites` && x(j());
      let e = (e) => {
          e.detail;
          let n = e.detail.term || e.detail.search;
          (y(n), e.detail.term === `` && e.detail.count && t !== `Favorites` && x(e.detail.count));
        },
        n = (e) => {
          if ((e.detail, t !== `Favorites`)) {
            let t = e.detail.count || 0;
            (x(t), e.detail.search === `` && x(e.detail.count), t > 0 && C(!0));
          }
        },
        i = (e) => {
          if (t === `Favorites`) {
            let { favorites: t } = e.detail || {},
              n = t && Array.isArray(t) ? t.length : null;
            if (n !== null) (x(n), n > 0 && C(!0));
            else {
              let e = j();
              (x(e), e > 0 && C(!0));
            }
          }
        },
        a = () => {
          if (r !== void 0) {
            let e = new URLSearchParams(r.location.search).get(`search`);
            e && y(e);
          }
        };
      return (
        a(),
        r.addEventListener(`popstate`, a),
        t !== `Favorites` &&
          (document.addEventListener(`product-search-change`, e),
          document.addEventListener(`filter-navigation`, e),
          document.addEventListener(`product-search-results`, n)),
        t === `Favorites` && document.addEventListener(`favorites-updated`, i),
        () => {
          (r.removeEventListener(`popstate`, a),
            t !== `Favorites` &&
              (document.removeEventListener(`product-search-change`, e),
              document.removeEventListener(`filter-navigation`, e),
              document.removeEventListener(`product-search-results`, n)),
            t === `Favorites` && document.removeEventListener(`favorites-updated`, i));
        }
      );
    }, [t]));
  let M = { width: `100%`, height: `100%`, display: `flex`, alignItems: `center` },
    N = { ...i, color: c, textTransform: l.toLowerCase() };
  return a(`div`, {
    style: { ...M, opacity: +!!w, transition: `opacity 0.3s ease-in-out` },
    children: a(`span`, { style: N, children: D(O(A()), l) }),
  });
}
var p = e(() => {
  (t(),
    i(),
    l(),
    n(),
    (f.defaultProps = {
      type: `Default`,
      content: `{{#}} items`,
      font: { family: `Inter`, fontSize: 16, weight: 400 },
      color: `#000000`,
      transform: `None`,
      noQuery: `Hide`,
      searchText: ``,
      noFavorites: `Hide`,
      favoritesText: ``,
      noResults: `Hide`,
      defaultText: ``,
      preview: `Results`,
    }),
    c(f, {
      preview: {
        type: d.Enum,
        title: `Preview`,
        options: [`Results`, `Empty`],
        defaultValue: `Results`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        description: `For canvas preview only. Framer Preview won't show true behavior; test in real browser.`,
      },
      font: { type: d.Font, title: `Font`, controls: `extended` },
      color: { type: d.Color, title: `Color`, defaultValue: `#000000` },
      transform: {
        type: d.Enum,
        title: `Transform`,
        options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
        defaultValue: `None`,
      },
      type: {
        type: d.Enum,
        title: `Type`,
        options: [`Default`, `Search`, `Favorites`],
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
        defaultValue: `Default`,
      },
      content: {
        type: d.String,
        title: `↳ Text`,
        defaultValue: `{{#}} items`,
        description: `Use {{#}} for item count. 
 
 If on a dedicated Search page, use {{term}} for the search value.`,
      },
      noQuery: {
        type: d.Enum,
        title: `No Query`,
        options: [`Show`, `Hide`],
        defaultValue: `Hide`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        hidden: (e) => e.type !== `Search`,
        description: `Text to display if no query param exists.`,
      },
      searchText: {
        type: d.String,
        title: `↳ Text`,
        defaultValue: `Start your search...`,
        hidden: (e) => e.type !== `Search` || e.noQuery === `Hide`,
      },
      noFavorites: {
        type: d.Enum,
        title: `No Favorites`,
        options: [`Show`, `Hide`],
        defaultValue: `Hide`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        hidden: (e) => e.type !== `Favorites`,
        description: `Text to display if no favorites exist.`,
      },
      favoritesText: {
        type: d.String,
        title: `↳ Text`,
        defaultValue: `No favorites yet...`,
        hidden: (e) => e.type !== `Favorites` || e.noFavorites === `Hide`,
      },
      noResults: {
        type: d.Enum,
        title: `No Results`,
        options: [`Show`, `Hide`],
        defaultValue: `Hide`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        hidden: (e) => e.type !== `Default`,
        description: `Text to display if no results exist.`,
      },
      defaultText: {
        type: d.String,
        title: `↳ Text`,
        defaultValue: `No results found...`,
        hidden: (e) => e.type !== `Default` || e.noResults === `Hide`,
      },
    }));
});
export { p as n, f as t };
//# sourceMappingURL=FC_CatalogResultCounter.B0lgMo4v.mjs.map
