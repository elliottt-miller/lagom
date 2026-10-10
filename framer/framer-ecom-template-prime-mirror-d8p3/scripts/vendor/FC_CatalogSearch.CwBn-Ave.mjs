import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  H as r,
  S as i,
  c as a,
  j as o,
  s,
  u as c,
  x as l,
  y as u,
} from "./react.BtSUcPAM.mjs";
import { N as d, Q as f, T as p, o as m } from "./framer.DuFjdl15.mjs";
function h(e) {
  let {
      text: { placeholder: t, font: n, color: a, placeholderColor: d },
      styles: {
        gap: f,
        padding: m,
        paddingPerSide: h,
        paddingTop: g,
        paddingRight: _,
        paddingBottom: ee,
        paddingLeft: v,
        background: {
          color: te,
          border: ne,
          hoverBackground: y,
          hoverBorder: b,
          focusBackground: x,
          focusBorder: S,
        },
        borderRadius: re,
        radiusPerCorner: ie,
        radiusTopLeft: ae,
        radiusTopRight: oe,
        radiusBottomRight: se,
        radiusBottomLeft: ce,
      },
      searchIcon: {
        show: C,
        isCustom: le,
        custom: w,
        color: T,
        weight: E,
        size: D,
        background: {
          color: ue,
          padding: de,
          paddingPerSide: fe,
          paddingTop: pe,
          paddingRight: me,
          paddingBottom: he,
          paddingLeft: ge,
          radius: _e,
          radiusPerCorner: ve,
          radiusTopLeft: ye,
          radiusTopRight: be,
          radiusBottomRight: xe,
          radiusBottomLeft: Se,
        },
      },
      clear: {
        show: O,
        isText: k,
        content: Ce,
        font: we,
        color: Te,
        transform: A,
        iconIsCustom: Ee,
        iconCustom: j,
        iconColor: M,
        iconWeight: N,
        iconSize: P,
        background: De,
        padding: Oe,
        paddingPerSide: ke,
        paddingTop: Ae,
        paddingRight: je,
        paddingBottom: Me,
        paddingLeft: Ne,
        radius: Pe,
        radiusPerCorner: Fe,
        radiusTopLeft: Ie,
        radiusTopRight: Le,
        radiusBottomRight: Re,
        radiusBottomLeft: ze,
        border: { color: Be, width: Ve, style: F },
      },
      behavior: { realTime: I, debounceDelay: L, page: R, slug: z },
    } = e,
    [B, V] = u(``),
    [He, H] = u(!1),
    [Ue, U] = u(!1),
    [We, W] = u(!1),
    G = i(null),
    K = i(null),
    q = i(!1),
    J = i(`search-${Math.random().toString(36).substring(2, 9)}`).current,
    Y = () => {
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
    Ge = (e) =>
      e.isMixed
        ? {
            borderTop: `${e.top}px ${e.style} ${e.color}`,
            borderRight: `${e.right}px ${e.style} ${e.color}`,
            borderBottom: `${e.bottom}px ${e.style} ${e.color}`,
            borderLeft: `${e.left}px ${e.style} ${e.color}`,
          }
        : { border: `${e.width}px ${e.style} ${e.color}` },
    Ke = (e) =>
      e.isMixed
        ? {
            borderTop: `${e.top}px ${e.style} ${e.color}`,
            borderRight: `${e.right}px ${e.style} ${e.color}`,
            borderBottom: `${e.bottom}px ${e.style} ${e.color}`,
            borderLeft: `${e.left}px ${e.style} ${e.color}`,
          }
        : { border: `${e.width}px ${e.style} ${e.color}` },
    qe = (e) =>
      e.isMixed
        ? {
            borderTop: `${e.top}px ${e.style} ${e.color}`,
            borderRight: `${e.right}px ${e.style} ${e.color}`,
            borderBottom: `${e.bottom}px ${e.style} ${e.color}`,
            borderLeft: `${e.left}px ${e.style} ${e.color}`,
          }
        : { border: `${e.width}px ${e.style} ${e.color}` },
    Je = () =>
      ie
        ? {
            borderTopLeftRadius: `${ae}px`,
            borderTopRightRadius: `${oe}px`,
            borderBottomRightRadius: `${se}px`,
            borderBottomLeftRadius: `${ce}px`,
          }
        : { borderRadius: `${re}px` },
    Ye = () =>
      h
        ? {
            paddingTop: `${g}px`,
            paddingRight: `${_}px`,
            paddingBottom: `${ee}px`,
            paddingLeft: `${v}px`,
          }
        : { padding: `${m}px` },
    Xe = (e, t) => {
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
    X = `fc-search-input-${J}`;
  l(() => {
    let e = document.createElement(`style`);
    return (
      (e.innerHTML = `
            .${X}::placeholder {
                color: ${d};
            }
            .${X}-container:hover .${X}:not(:focus) {
                background-color: ${y} !important;
                ${Object.entries(Ke(b))
                  .map(([e, t]) => `${e}: ${t} !important;`)
                  .join(` `)}
            }
            .${X}:focus {
                background-color: ${x} !important;
                ${Object.entries(qe(S))
                  .map(([e, t]) => `${e}: ${t} !important;`)
                  .join(` `)}
            }
            /* Hide the default browser search cancel button */
            .${X}::-webkit-search-cancel-button,
            .${X}::-webkit-search-decoration,
            .${X}::-ms-clear {
                -webkit-appearance: none;
                appearance: none;
                display: none;
            }
        `),
      document.head.appendChild(e),
      () => e.remove()
    );
  }, [X, d, y, b, x, S]);
  let Z = (e) => (h ? (e === `left` ? v : _) : m),
    Ze = {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
    },
    Qe = {
      width: `100%`,
      height: `100%`,
      ...Ye(),
      ...Je(),
      ...n,
      color: a,
      backgroundColor: te,
      ...Ge(ne),
      outline: `none`,
      transition: `all 0.2s ease-in-out`,
      ...(C ? { paddingLeft: `${Z(`left`) + D + f}px` } : {}),
      ...(O ? { paddingRight: `${Z(`right`) + (k ? 40 : P) + f}px` } : {}),
    },
    $e = () =>
      ve
        ? {
            borderTopLeftRadius: `${ye}px`,
            borderTopRightRadius: `${be}px`,
            borderBottomRightRadius: `${xe}px`,
            borderBottomLeftRadius: `${Se}px`,
          }
        : { borderRadius: `${_e}px` },
    et = () =>
      fe
        ? {
            paddingTop: `${pe}px`,
            paddingRight: `${me}px`,
            paddingBottom: `${he}px`,
            paddingLeft: `${ge}px`,
          }
        : { padding: `${de}px` },
    tt = () =>
      Fe
        ? {
            borderTopLeftRadius: `${Ie}px`,
            borderTopRightRadius: `${Le}px`,
            borderBottomRightRadius: `${Re}px`,
            borderBottomLeftRadius: `${ze}px`,
          }
        : { borderRadius: `${Pe}px` },
    nt = () =>
      ke
        ? {
            paddingTop: `${Ae}px`,
            paddingRight: `${je}px`,
            paddingBottom: `${Me}px`,
            paddingLeft: `${Ne}px`,
          }
        : { padding: `${Oe}px` },
    rt = {
      position: `absolute`,
      left: `${Z(`left`)}px`,
      top: `50%`,
      transform: `translateY(-50%)`,
      color: T,
      pointerEvents: `none`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      backgroundColor: ue,
      ...et(),
      ...$e(),
    },
    it = {
      position: `absolute`,
      right: `${Z(`right`)}px`,
      top: `50%`,
      transform: `translateY(-50%)`,
      backgroundColor: De,
      border: `${Ve}px ${F} ${Be}`,
      cursor: `pointer`,
      alignItems: `center`,
      justifyContent: `center`,
      ...nt(),
      ...tt(),
      ...(k ? { ...we, color: Te || `#999999` } : { color: M || `#999999` }),
      textTransform: k && A ? A.toLowerCase() : void 0,
      display: B || p.current() === `CANVAS` ? `flex` : `none`,
      tabIndex: 0,
      outline: `none`,
    },
    Q = o(
      (e) => {
        try {
          if (r !== void 0) {
            let t = new URL(r.location.href);
            (e ? t.searchParams.set(`search`, e) : t.searchParams.delete(`search`),
              r.history.pushState({}, ``, t.toString()));
          }
          let t = new CustomEvent(`product-search-change`, { detail: { term: e, componentId: J } });
          document.dispatchEvent(t);
          let n = new CustomEvent(`filter-navigation`, {
            detail: { search: e, sourceComponentId: J },
          });
          document.dispatchEvent(n);
        } catch (e) {
          console.error(`Error dispatching search event:`, e);
        }
      },
      [J]
    ),
    $ = o(
      (e) => {
        I &&
          (K.current && clearTimeout(K.current),
          (K.current = setTimeout(() => {
            Q(e);
          }, L)));
      },
      [Q, L, I]
    ),
    at = o(
      (e) => {
        let t = e.target.value;
        (V(t), W(!!t && O), $(t));
      },
      [$, O]
    ),
    ot = o(
      (e) => {
        if (e.key === `Enter`)
          if ((e.preventDefault(), K.current && clearTimeout(K.current), R)) {
            let e = B.trim();
            e
              ? (r.location.href = `/${z}?search=${encodeURIComponent(e)}`)
              : (r.location.href = `/${z}`);
          } else Q(B);
        else e.key === `Escape` && (V(``), W(!1), Q(``), G.current?.blur());
      },
      [B, Q, R, z]
    ),
    st = o(() => {
      (V(``), W(!1), Q(``), G.current?.focus());
    }, [Q]);
  return (
    l(() => {
      if (((q.current = !0), r !== void 0)) {
        let e = new URLSearchParams(r.location.search).get(`search`);
        e && (V(e), W(!Y() || We));
      }
      Y() && O ? W(!0) : W(!!B && O);
      let e = (e) => {
        e.detail.componentId !== J &&
          (e.detail.term, e.detail.componentId, V(e.detail.term || ``), W(!!e.detail.term));
      };
      return (
        document.addEventListener(`product-search-change`, e),
        () => {
          ((q.current = !1),
            document.removeEventListener(`product-search-change`, e),
            K.current && clearTimeout(K.current));
        }
      );
    }, [J]),
    l(() => {
      Y() && O ? W(!0) : W(!!B && O);
    }, [B, O, Y]),
    c(`div`, {
      className: `${X}-container`,
      style: Ze,
      role: `search`,
      "aria-label": `Search products`,
      children: [
        C &&
          s(`div`, {
            style: rt,
            children: C
              ? !le && w
                ? s(`img`, {
                    src: w,
                    alt: `Search`,
                    width: D,
                    height: D,
                    style: { width: `${D}px`, height: `${D}px`, strokeWidth: `${E}px` },
                  })
                : c(`svg`, {
                    width: D,
                    height: D,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: [
                      s(`circle`, {
                        cx: `11`,
                        cy: `11`,
                        r: `8`,
                        stroke: T,
                        strokeWidth: E,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                      }),
                      s(`path`, {
                        d: `M21 21L16.65 16.65`,
                        stroke: T,
                        strokeWidth: E,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                      }),
                    ],
                  })
              : null,
          }),
        s(`input`, {
          ref: G,
          className: X,
          type: `text`,
          placeholder: t,
          value: B,
          onChange: at,
          onKeyDown: ot,
          onFocus: () => U(!0),
          onBlur: () => U(!1),
          onMouseEnter: () => H(!0),
          onMouseLeave: () => H(!1),
          style: Qe,
          "aria-label": `Search products`,
          autoComplete: `off`,
        }),
        O &&
          s(`button`, {
            type: `button`,
            style: it,
            onClick: st,
            "aria-label": `Clear search`,
            tabIndex: 0,
            children:
              !O && p.current() !== `CANVAS`
                ? null
                : k
                  ? Xe(Ce || `Clear`, A)
                  : !Ee && j
                    ? s(`img`, {
                        src: j,
                        alt: `Clear search`,
                        width: P,
                        height: P,
                        style: { width: `${P}px`, height: `${P}px`, strokeWidth: `${N}px` },
                      })
                    : s(`svg`, {
                        width: P,
                        height: P,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        "aria-hidden": `true`,
                        children: s(`path`, {
                          d: `M18 6L6 18M6 6l12 12`,
                          stroke: M || `#999999`,
                          strokeWidth: N,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                        }),
                      }),
          }),
      ],
    })
  );
}
var g = e(() => {
  (t(),
    a(),
    f(),
    n(),
    (h.defaultProps = {
      text: {
        placeholder: `Search...`,
        font: { family: `Inter`, fontSize: 16, weight: 400 },
        color: `#000000`,
        placeholderColor: `#999999`,
      },
      styles: {
        gap: 12,
        padding: 12,
        paddingPerSide: !1,
        paddingTop: 12,
        paddingRight: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        background: {
          color: `#ffffff`,
          border: { width: 1, color: `#EBEBEB`, style: `solid` },
          hoverBackground: `#f8f8f8`,
          hoverBorder: { width: 1, color: `#D1D1D1`, style: `solid` },
          focusBackground: `#ffffff`,
          focusBorder: { width: 1, color: `#0099ff`, style: `solid` },
        },
        borderRadius: 4,
        radiusPerCorner: !1,
        radiusTopLeft: 4,
        radiusTopRight: 4,
        radiusBottomRight: 4,
        radiusBottomLeft: 4,
      },
      searchIcon: {
        show: !0,
        isCustom: !1,
        custom: ``,
        color: `#999999`,
        weight: 1.5,
        size: 16,
        background: {
          color: `transparent`,
          padding: 4,
          paddingPerSide: !1,
          paddingTop: 4,
          paddingRight: 4,
          paddingBottom: 4,
          paddingLeft: 4,
          radius: 4,
          radiusPerCorner: !1,
          radiusTopLeft: 4,
          radiusTopRight: 4,
          radiusBottomRight: 4,
          radiusBottomLeft: 4,
        },
      },
      clear: {
        show: !0,
        isText: !1,
        content: `Clear`,
        font: { family: `Inter`, fontSize: 14, weight: 400 },
        transform: `None`,
        color: `#999999`,
        iconIsCustom: !1,
        iconCustom: ``,
        iconColor: `#999999`,
        iconWeight: 1.5,
        iconSize: 12,
        background: `#F7F7F7`,
        padding: 4,
        paddingPerSide: !1,
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        radius: 24,
        radiusPerCorner: !1,
        radiusTopLeft: 24,
        radiusTopRight: 24,
        radiusBottomRight: 24,
        radiusBottomLeft: 24,
        border: { color: `#000000`, width: 0, style: `solid` },
      },
      behavior: { realTime: !0, debounceDelay: 300, page: !1, slug: `search` },
    }),
    d(h, {
      text: {
        type: m.Object,
        title: `Text`,
        controls: {
          placeholder: { type: m.String, title: `Placeholder`, defaultValue: `Search...` },
          font: { type: m.Font, title: `Font`, controls: `extended` },
          color: { type: m.Color, title: `Color`, defaultValue: `#000000` },
          placeholderColor: { type: m.Color, title: `Placeholder`, defaultValue: `#999999` },
        },
      },
      styles: {
        type: m.Object,
        title: `Styles`,
        controls: {
          gap: { type: m.Number, title: `Gap`, defaultValue: 12, min: 0, step: 1, unit: `px` },
          padding: {
            type: m.FusedNumber,
            title: `Padding`,
            defaultValue: 12,
            toggleKey: `paddingPerSide`,
            toggleTitles: [`All`, `Sides`],
            valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
            valueLabels: [`T`, `R`, `B`, `L`],
            min: 0,
          },
          borderRadius: {
            type: m.FusedNumber,
            title: `Radius`,
            defaultValue: 4,
            toggleKey: `radiusPerCorner`,
            toggleTitles: [`All`, `Corners`],
            valueKeys: [`radiusTopLeft`, `radiusTopRight`, `radiusBottomRight`, `radiusBottomLeft`],
            valueLabels: [`TL`, `TR`, `BR`, `BL`],
            min: 0,
          },
          background: {
            type: m.Object,
            title: `BG`,
            controls: {
              color: { type: m.Color, title: `Color`, defaultValue: `#ffffff` },
              border: {
                type: m.Object,
                title: `Border`,
                controls: {
                  color: { type: m.Color, title: `Color`, defaultValue: `#EBEBEB` },
                  width: {
                    type: m.FusedNumber,
                    title: `Width`,
                    toggleKey: `isMixed`,
                    toggleTitles: [`All`, `Individual`],
                    valueKeys: [`top`, `right`, `bottom`, `left`],
                    valueLabels: [`T`, `R`, `B`, `L`],
                    min: 0,
                    defaultValue: 1,
                  },
                  style: {
                    type: m.Enum,
                    title: `Style`,
                    options: [`solid`, `dashed`, `dotted`, `double`],
                    optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                    defaultValue: `solid`,
                  },
                },
              },
              hoverBackground: { type: m.Color, title: `Hover`, defaultValue: `#f8f8f8` },
              hoverBorder: {
                type: m.Object,
                title: `Hover Border`,
                controls: {
                  color: { type: m.Color, title: `Color`, defaultValue: `#000000` },
                  width: {
                    type: m.FusedNumber,
                    title: `Width`,
                    toggleKey: `isMixed`,
                    toggleTitles: [`All`, `Individual`],
                    valueKeys: [`top`, `right`, `bottom`, `left`],
                    valueLabels: [`T`, `R`, `B`, `L`],
                    min: 0,
                    defaultValue: 1,
                  },
                  style: {
                    type: m.Enum,
                    title: `Style`,
                    options: [`solid`, `dashed`, `dotted`, `double`],
                    optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                    defaultValue: `solid`,
                  },
                },
              },
              focusBackground: { type: m.Color, title: `Focus`, defaultValue: `#ffffff` },
              focusBorder: {
                type: m.Object,
                title: `Focus Border`,
                controls: {
                  color: { type: m.Color, title: `Color`, defaultValue: `#000000` },
                  width: {
                    type: m.FusedNumber,
                    title: `Width`,
                    toggleKey: `isMixed`,
                    toggleTitles: [`All`, `Individual`],
                    valueKeys: [`top`, `right`, `bottom`, `left`],
                    valueLabels: [`T`, `R`, `B`, `L`],
                    min: 0,
                    defaultValue: 1,
                  },
                  style: {
                    type: m.Enum,
                    title: `Style`,
                    options: [`solid`, `dashed`, `dotted`, `double`],
                    optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                    defaultValue: `solid`,
                  },
                },
              },
            },
          },
        },
      },
      searchIcon: {
        type: m.Object,
        title: `Search Icon`,
        controls: {
          show: {
            type: m.Boolean,
            title: `Show`,
            defaultValue: !0,
            enabledTitle: `Yes`,
            disabledTitle: `No`,
          },
          isCustom: {
            type: m.Boolean,
            title: `Icon`,
            defaultValue: !1,
            enabledTitle: `Default`,
            disabledTitle: `Custom`,
            hidden: (e) => !e.show,
          },
          weight: {
            type: m.Number,
            title: `Weight`,
            defaultValue: 1.5,
            min: 0.5,
            max: 5,
            step: 0.5,
            unit: `px`,
            hidden: (e) => !e.show || !e.isCustom,
          },
          size: {
            type: m.Number,
            title: `Size`,
            defaultValue: 16,
            min: 8,
            max: 48,
            step: 4,
            unit: `px`,
            hidden: (e) => !e.show,
          },
          custom: { type: m.Image, title: `Image`, hidden: (e) => !e.show || e.isCustom },
          color: {
            type: m.Color,
            title: `Color`,
            defaultValue: `#999999`,
            hidden: (e) => !e.show || e.isCustom,
          },
          background: {
            type: m.Object,
            title: `BG`,
            controls: {
              color: { type: m.Color, title: `Color`, defaultValue: `transparent` },
              padding: {
                type: m.FusedNumber,
                title: `Padding`,
                defaultValue: 4,
                toggleKey: `paddingPerSide`,
                toggleTitles: [`All`, `Sides`],
                valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
                valueLabels: [`T`, `R`, `B`, `L`],
                min: 0,
              },
              radius: {
                type: m.FusedNumber,
                title: `Radius`,
                defaultValue: 4,
                toggleKey: `radiusPerCorner`,
                toggleTitles: [`All`, `Corners`],
                valueKeys: [
                  `radiusTopLeft`,
                  `radiusTopRight`,
                  `radiusBottomRight`,
                  `radiusBottomLeft`,
                ],
                valueLabels: [`TL`, `TR`, `BR`, `BL`],
                min: 0,
              },
              border: {
                type: m.Object,
                title: `Border`,
                controls: {
                  color: { type: m.Color, title: `Color`, defaultValue: `#EBEBEB` },
                  width: {
                    type: m.FusedNumber,
                    title: `Width`,
                    toggleKey: `isMixed`,
                    toggleTitles: [`All`, `Individual`],
                    valueKeys: [`top`, `right`, `bottom`, `left`],
                    valueLabels: [`T`, `R`, `B`, `L`],
                    min: 0,
                    defaultValue: 1,
                  },
                  style: {
                    type: m.Enum,
                    title: `Style`,
                    options: [`solid`, `dashed`, `dotted`, `double`],
                    optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                    defaultValue: `solid`,
                  },
                },
              },
            },
            hidden: (e) => !e.show,
          },
        },
      },
      clear: {
        type: m.Object,
        title: `Clear`,
        controls: {
          show: {
            type: m.Boolean,
            title: `Show`,
            defaultValue: !0,
            enabledTitle: `Yes`,
            disabledTitle: `No`,
          },
          isText: {
            type: m.Boolean,
            title: `Type`,
            defaultValue: !1,
            enabledTitle: `Text`,
            disabledTitle: `Icon`,
            hidden: (e) => !e.show,
          },
          content: {
            type: m.String,
            title: `Text`,
            defaultValue: `Clear`,
            hidden: (e) => !e.show || !e.isText,
          },
          font: {
            type: m.Font,
            title: `Font`,
            controls: `extended`,
            hidden: (e) => !e.show || !e.isText,
          },
          transform: {
            type: m.Enum,
            title: `Transform`,
            options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
            defaultValue: `None`,
            hidden: (e) => !e.show || !e.isText,
          },
          color: {
            type: m.Color,
            title: `Color`,
            defaultValue: `#999999`,
            hidden: (e) => !e.show || !e.isText,
          },
          iconIsCustom: {
            type: m.Boolean,
            title: `Icon`,
            defaultValue: !1,
            enabledTitle: `Default`,
            disabledTitle: `Custom`,
            hidden: (e) => !e.show || e.isText,
          },
          iconWeight: {
            type: m.Number,
            title: `Weight`,
            defaultValue: 1.5,
            min: 0.5,
            max: 5,
            step: 0.5,
            unit: `px`,
            hidden: (e) => !e.show || e.isText || !e.iconIsCustom,
          },
          iconSize: {
            type: m.Number,
            title: `Size`,
            defaultValue: 12,
            min: 8,
            max: 48,
            step: 4,
            unit: `px`,
            hidden: (e) => !e.show || e.isText,
          },
          iconCustom: {
            type: m.Image,
            title: `Image`,
            hidden: (e) => !e.show || e.isText || e.clear.iconIsCustom,
          },
          iconColor: {
            type: m.Color,
            title: `Color`,
            defaultValue: `#999999`,
            hidden: (e) => !e.show || e.isText || e.clear.iconIsCustom,
          },
          background: {
            type: m.Color,
            title: `Background`,
            defaultValue: `#F7F7F7`,
            hidden: (e) => !e.show,
          },
          padding: {
            type: m.FusedNumber,
            title: `Padding`,
            defaultValue: 4,
            toggleKey: `paddingPerSide`,
            toggleTitles: [`All`, `Sides`],
            valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
            valueLabels: [`T`, `R`, `B`, `L`],
            min: 0,
            hidden: (e) => !e.show,
          },
          radius: {
            type: m.FusedNumber,
            title: `Radius`,
            defaultValue: 24,
            toggleKey: `radiusPerCorner`,
            toggleTitles: [`All`, `Corners`],
            valueKeys: [`radiusTopLeft`, `radiusTopRight`, `radiusBottomRight`, `radiusBottomLeft`],
            valueLabels: [`TL`, `TR`, `BR`, `BL`],
            min: 0,
            hidden: (e) => !e.show,
          },
          border: {
            type: m.Object,
            title: `Border`,
            controls: {
              color: { type: m.Color, title: `Color`, defaultValue: `#000000` },
              width: {
                type: m.Number,
                title: `Width`,
                defaultValue: 0,
                min: 0,
                step: 1,
                unit: `px`,
              },
              style: {
                type: m.Enum,
                title: `Style`,
                options: [`solid`, `dashed`, `dotted`, `double`],
                optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                defaultValue: `solid`,
              },
            },
            hidden: (e) => !e.show,
          },
        },
      },
      behavior: {
        type: m.Object,
        title: `Behavior`,
        controls: {
          realTime: {
            type: m.Boolean,
            title: `Real Time`,
            description: `Update results in real time`,
            defaultValue: !0,
            enabledTitle: `Yes`,
            disabledTitle: `No`,
          },
          debounceDelay: {
            type: m.Number,
            title: `Delay`,
            description: `Milliseconds before search is triggered after typing`,
            defaultValue: 300,
            min: 0,
            max: 2e3,
            step: 50,
            hidden: (e) => !e.realTime,
          },
          page: {
            type: m.Boolean,
            title: `Page`,
            description: `Pressing Enter will navigate to a dedicated Search page with results`,
            defaultValue: !1,
            enabledTitle: `Yes`,
            disabledTitle: `No`,
          },
          slug: {
            type: m.String,
            title: `Slug`,
            description: `The slug of your dedicated Search page`,
            defaultValue: `search`,
            placeholder: `search`,
            hidden: (e) => !e.page,
          },
        },
      },
    }));
});
export { g as n, h as t };
//# sourceMappingURL=FC_CatalogSearch.CwBn-Ave.mjs.map
