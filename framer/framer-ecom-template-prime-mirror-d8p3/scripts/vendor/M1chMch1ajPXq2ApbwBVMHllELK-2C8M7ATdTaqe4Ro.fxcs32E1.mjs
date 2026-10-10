import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  E as r,
  H as i,
  L as a,
  N as o,
  P as s,
  R as c,
  S as l,
  c as u,
  h as d,
  m as f,
  s as p,
  u as m,
  x as h,
  y as g,
} from "./react.BtSUcPAM.mjs";
import { P as _, i as v, o as y, t as b } from "./motion.B_UOAosx.mjs";
import {
  At as x,
  C as S,
  Et as C,
  Ft as w,
  G as T,
  I as E,
  K as D,
  L as O,
  Lt as k,
  M as A,
  N as j,
  Nt as M,
  O as N,
  Pt as P,
  Q as F,
  R as I,
  St as ee,
  Tt as te,
  W as L,
  a as R,
  f as z,
  ht as ne,
  i as B,
  m as re,
  o as V,
  vt as ie,
  xt as ae,
  yt as oe,
} from "./framer.DuFjdl15.mjs";
import { i as se, n as ce, r as le, t as ue } from "./egz88BsrP.BIROQOPJ.mjs";
import de, { t as fe } from "./aPYphHODH3hsFQ_XT1OIZw2-HZhwFq4vBZqRRUFy4cc.caT3na0U.mjs";
function H(e) {
  return e == null || typeof e == `boolean`
    ? ``
    : typeof e == `string` || typeof e == `number`
      ? String(e)
      : Array.isArray(e)
        ? e.map(H).join(``)
        : d(e)
          ? H(e.props.children)
          : ``;
}
function pe(e) {
  let t = Array.isArray(e) ? e[0] : e;
  return d(t)
    ? c(t, {
        style: {
          ...t.props.style,
          width: `100%`,
          height: `auto`,
          minWidth: `unset`,
          whiteSpace: `normal`,
        },
      })
    : (t ?? null);
}
function me(e, t) {
  let n = document.createElement(`span`);
  return (
    (n.textContent = e),
    (n.style.display = `inline`),
    (n.style.opacity = String(t)),
    (n.style.willChange = `opacity`),
    n
  );
}
function he(e, t) {
  let n = document.createElement(`span`);
  return (
    (n.textContent = e),
    (n.style.display = `inline`),
    (n.style.opacity = String(t)),
    (n.style.willChange = `opacity`),
    n
  );
}
function U(e, t, n, r) {
  let i = Array.from(e.childNodes);
  for (let e of i) {
    if (e.nodeType === Node.TEXT_NODE) {
      let i = e.textContent || ``;
      if (!i.length) continue;
      let a = document.createDocumentFragment();
      if (t === `chars`)
        for (let e of i)
          if (e === ` `) a.appendChild(document.createTextNode(` `));
          else {
            let t = me(e, n);
            (a.appendChild(t), r.push(t));
          }
      else {
        let e = i.split(/(\s+)/);
        for (let t of e)
          if (t)
            if (/^\s+$/.test(t)) a.appendChild(document.createTextNode(t));
            else {
              let e = he(t, n);
              (a.appendChild(e), r.push(e));
            }
      }
      e.parentNode?.replaceChild(a, e);
      continue;
    }
    if (e.nodeType !== Node.ELEMENT_NODE) continue;
    let i = e;
    if (i.tagName === `BR`) {
      ((i.style.display = `inline`),
        (i.style.opacity = String(n)),
        (i.style.willChange = `opacity`),
        r.push(i));
      continue;
    }
    U(i, t, n, r);
  }
}
function W({
  textComponent: e,
  revealMode: t = `chars`,
  startOffset: n = 90,
  endOffset: a = 30,
  dimOpacity: o = 0.2,
  overrideFontSize: c = !1,
  fontSize: u = 64,
  style: d,
}) {
  let f = l(null),
    _ = l(null),
    v = l([]),
    y = r().replace(/:/g, ``),
    b = l(!1),
    x = l(0),
    S = l(n),
    C = l(a),
    w = l(o);
  ((S.current = n), (C.current = a), (w.current = o));
  let T = ee(),
    E = s(() => pe(e), [e]),
    D = s(() => H(E).replace(/\s+/g, ` `).trim(), [E]),
    [O, k] = g(!1);
  return (
    h(() => k(!0), []),
    h(() => {
      if (!O || T || !f.current || !_.current) return;
      let e = null,
        n = null,
        r = null,
        a = null,
        o = f.current,
        s = _.current,
        c = [];
      if (((s.style.visibility = `hidden`), U(s, t, w.current, c), c.length === 0)) {
        s.style.visibility = `visible`;
        return;
      }
      ((v.current = c), (s.style.visibility = `visible`));
      let l = () => {
          if (!b.current) return;
          let e = o.getBoundingClientRect(),
            t = i.innerHeight,
            n = t * (S.current / 100),
            r = t * (C.current / 100),
            a = e.height + (n - r),
            s = n - e.top,
            c = Math.min(Math.max(s / a, 0), 1),
            l = v.current.length,
            u = Math.floor(c * l);
          v.current.forEach((e, t) => {
            if (t < u) e.style.opacity = `1`;
            else if (t === u) {
              let t = c * l - u;
              e.style.opacity = String(w.current + t * (1 - w.current));
            } else e.style.opacity = String(w.current);
          });
        },
        u = () => {
          (x.current && cancelAnimationFrame(x.current), (x.current = requestAnimationFrame(l)));
        };
      return (
        (e = new IntersectionObserver(
          (e) => {
            ((b.current = e[0].isIntersecting), b.current && u());
          },
          { rootMargin: `200px 0px 200px 0px`, threshold: 0 }
        )),
        e.observe(o),
        (r = u),
        (a = u),
        i.addEventListener(`scroll`, r, { passive: !0 }),
        i.addEventListener(`resize`, a, { passive: !0 }),
        (n = new MutationObserver(() => {
          u();
        })),
        n.observe(o, { childList: !0, subtree: !0, characterData: !0 }),
        u(),
        () => {
          (x.current && cancelAnimationFrame(x.current),
            r && i.removeEventListener(`scroll`, r),
            a && i.removeEventListener(`resize`, a),
            e && e.disconnect(),
            n && n.disconnect(),
            (v.current = []));
        }
      );
    }, [O, T, t, D]),
    E
      ? m(`div`, {
          ref: f,
          style: { position: `relative`, width: `100%`, height: `auto`, ...d },
          children: [
            c &&
              p(`style`, {
                children: `
                    #${y},
                    #${y} * {
                        font-size: ${u}px !important;
                    }
                `,
              }),
            p(
              `div`,
              {
                id: y,
                ref: _,
                style: { width: `100%`, height: `auto`, fontSize: c ? u : void 0 },
                children: E,
              },
              `${t}-${D}`
            ),
          ],
        })
      : m(`div`, {
          style: {
            width: 400,
            minHeight: 180,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            flexDirection: `column`,
            border: `2px dashed rgba(99,102,241,0.5)`,
            borderRadius: 10,
            color: `rgba(99,102,241,1)`,
            background: `rgba(99,102,241,0.08)`,
            fontFamily: `Inter`,
            textAlign: `center`,
            padding: 12,
            gap: 16,
            lineHeight: `1.6em`,
            ...d,
          },
          children: [
            p(`div`, {
              style: { fontSize: 24, fontWeight: `500` },
              children: `Connect a Text layer`,
            }),
            p(`div`, {
              style: { fontSize: 16, maxWidth: 350 },
              children: `Drop a Text layer outside the desktop breakpoint, wrap the Text layer in a Stack, set the Text layer width to Fill, and connect this component with the outside Text layer.`,
            }),
          ],
        })
  );
}
var ge = e(() => {
  (t(),
    u(),
    n(),
    F(),
    (W.displayName = `Text Reveal Scroll`),
    j(W, {
      textComponent: {
        title: `Text`,
        type: V.ComponentInstance,
        description: `Connect a Text layer from the canvas.`,
      },
      revealMode: {
        type: V.Enum,
        title: `Reveal By`,
        defaultValue: `chars`,
        options: [`chars`, `words`],
        optionTitles: [`Characters`, `Words`],
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
        description: `Reveal text character by character or word by word.`,
      },
      overrideFontSize: {
        type: V.Boolean,
        title: `Font Size`,
        defaultValue: !1,
        enabledTitle: `Custom`,
        disabledTitle: `Global`,
        description: `Toggle to 'Custom' if you want to set the text size here instead of using the global text style for font size.`,
      },
      fontSize: {
        type: V.Number,
        title: `Size`,
        defaultValue: 64,
        min: 1,
        max: 300,
        step: 1,
        unit: `px`,
        hidden: (e) => e.overrideFontSize === !1,
        description: `Override the connected Text layer font size.`,
      },
      startOffset: {
        type: V.Number,
        title: `Start %`,
        defaultValue: 90,
        min: 0,
        max: 100,
        step: 1,
        unit: `%`,
        description: `Viewport % from top where reveal begins.`,
      },
      endOffset: {
        type: V.Number,
        title: `End %`,
        defaultValue: 30,
        min: 0,
        max: 100,
        step: 1,
        unit: `%`,
        description: `Viewport % from top where reveal completes.`,
      },
      dimOpacity: {
        type: V.Number,
        title: `Dim Opacity`,
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.05,
        description: `Opacity of unrevealed segments.

Made with ❤️ by [Soyeb](https://framer.link/project)
*Version:* 4.0.0`,
      },
    }));
});
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var K,
  q,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  J,
  we = e(() => {
    (u(),
      F(),
      b(),
      n(),
      (K = [`VnQ52Zcdm`, `d7d7swtjt`]),
      (q = `framer-BrinK`),
      (_e = { d7d7swtjt: `framer-v-otfatx`, VnQ52Zcdm: `framer-v-12s8tj9` }),
      (ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ye = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(y.Provider, { value: i, children: t });
      }),
      (be = { Desktop: `VnQ52Zcdm`, Tablet: `d7d7swtjt` }),
      (xe = _.create(a)),
      (Se = ({ description: e, height: t, id: n, statsNumber: r, title: i, width: a, ...o }) => ({
        ...o,
        blOq9KyJL:
          e ?? o.blOq9KyJL ?? `We ship to over 100 countles with fast and relatie dilvery options.`,
        fyxLSKEvV: i ?? o.fyxLSKEvV ?? `Pieces worn daily`,
        sIYZBY59g: r ?? o.sIYZBY59g ?? `10M+`,
        variant: be[o.variant] ?? o.variant ?? `VnQ52Zcdm`,
      })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = w(
        f(function (e, t) {
          let n = l(null),
            i = t ?? n,
            o = r(),
            { activeLocale: s, setLocale: c } = te();
          ne();
          let {
              style: u,
              className: d,
              layoutId: f,
              variant: h,
              sIYZBY59g: g,
              fyxLSKEvV: y,
              blOq9KyJL: b,
              ...x
            } = Se(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = P({
              cycleOrder: K,
              defaultVariant: `VnQ52Zcdm`,
              ref: i,
              variant: h,
              variantClassNames: _e,
            }),
            M = Ce(e, j),
            F = E(q);
          return p(v, {
            id: f ?? o,
            children: p(xe, {
              animate: j,
              initial: !1,
              children: p(ye, {
                value: ve,
                children: m(_.div, {
                  ...x,
                  ...T,
                  className: E(F, `framer-12s8tj9`, d, C),
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `VnQ52Zcdm`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-72534714-0887-42d9-aa5a-709674afb825, rgb(241, 241, 241))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...u,
                  },
                  variants: {
                    d7d7swtjt: {
                      borderBottomLeftRadius: 9,
                      borderBottomRightRadius: 9,
                      borderTopLeftRadius: 9,
                      borderTopRightRadius: 9,
                    },
                  },
                  ...G({ d7d7swtjt: { "data-framer-name": `Tablet` } }, S, D),
                  children: [
                    p(N, {
                      __fromCanvasComponent: !0,
                      children: p(a, {
                        children: p(_.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=`,
                            "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                            "--framer-font-size": `64px`,
                            "--framer-letter-spacing": `-0.03em`,
                            "--framer-line-height": `1em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)))`,
                            "--framer-text-transform": `capitalize`,
                          },
                          children: `10M+`,
                        }),
                      }),
                      className: `framer-1kohdk5`,
                      "data-framer-name": `10M+`,
                      fonts: [`FS;General Sans-regular`],
                      layoutDependency: M,
                      layoutId: `nWiP9jKNx`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: g,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...G(
                        {
                          d7d7swtjt: {
                            children: p(a, {
                              children: p(_.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=`,
                                  "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `46px`,
                                  "--framer-letter-spacing": `-0.03em`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)))`,
                                  "--framer-text-transform": `capitalize`,
                                },
                                children: `10M+`,
                              }),
                            }),
                          },
                        },
                        S,
                        D
                      ),
                    }),
                    m(_.div, {
                      className: `framer-18oj912`,
                      layoutDependency: M,
                      layoutId: `xLiqbtfqE`,
                      children: [
                        p(N, {
                          __fromCanvasComponent: !0,
                          children: p(a, {
                            children: p(_.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                "--framer-font-size": `20px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                "--framer-letter-spacing": `-0.03em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)))`,
                                "--framer-text-transform": `capitalize`,
                              },
                              children: `Pieces worn daily`,
                            }),
                          }),
                          className: `framer-sxdazz`,
                          "data-framer-name": `Pieces worn daily`,
                          fonts: [`FS;General Sans-variable`],
                          layoutDependency: M,
                          layoutId: `a6YqMrGzN`,
                          style: {
                            "--extracted-2gg91v": `"wght" 450`,
                            "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...G(
                            {
                              d7d7swtjt: {
                                children: p(a, {
                                  children: p(_.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                      "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `Pieces worn daily`,
                                  }),
                                }),
                              },
                            },
                            S,
                            D
                          ),
                        }),
                        p(N, {
                          __fromCanvasComponent: !0,
                          children: p(a, {
                            children: p(_.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                "--framer-letter-spacing": `-0.03em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                "--framer-text-transform": `capitalize`,
                              },
                              children: `We ship to over 100 countles with fast and relatie dilvery options.`,
                            }),
                          }),
                          className: `framer-10dsah5`,
                          "data-framer-name": `We ship to over 100 countles with fast and relatie dilvery options.`,
                          fonts: [`FS;General Sans-variable`],
                          layoutDependency: M,
                          layoutId: `YfaIV5_FZ`,
                          style: {
                            "--extracted-2gg91v": `"wght" 450`,
                            "--extracted-r6o4lv": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...G(
                            {
                              d7d7swtjt: {
                                children: p(a, {
                                  children: p(_.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                      "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                      "--framer-letter-spacing": `-0.03em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: `We ship to over 100 countles with fast and relatie dilvery options.`,
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
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-BrinK.framer-1sm62h1, .framer-BrinK .framer-1sm62h1 { display: block; }`,
          `.framer-BrinK.framer-12s8tj9 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 323px; justify-content: space-between; overflow: hidden; padding: 64px 28px 28px 28px; position: relative; width: 307px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-BrinK .framer-1kohdk5, .framer-BrinK .framer-sxdazz, .framer-BrinK .framer-10dsah5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-BrinK .framer-18oj912 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BrinK.framer-v-otfatx.framer-12s8tj9 { height: 222px; padding: 38px 20px 20px 20px; width: 231px; }`,
          `.framer-BrinK.framer-v-otfatx .framer-18oj912 { gap: 12px; }`,
        ],
        `framer-BrinK`
      )),
      (J.displayName = `Insight Card`),
      (J.defaultProps = { height: 323, width: 307 }),
      j(J, {
        variant: {
          options: [`VnQ52Zcdm`, `d7d7swtjt`],
          optionTitles: [`Desktop`, `Tablet`],
          title: `Variant`,
          type: V.Enum,
        },
        sIYZBY59g: {
          defaultValue: `10M+`,
          displayTextArea: !1,
          title: `Stats Number`,
          type: V.String,
        },
        onsIYZBY59gChange: { changes: `sIYZBY59g`, type: V.ChangeHandler },
        fyxLSKEvV: {
          defaultValue: `Pieces worn daily`,
          displayTextArea: !1,
          title: `Title`,
          type: V.String,
        },
        onfyxLSKEvVChange: { changes: `fyxLSKEvV`, type: V.ChangeHandler },
        blOq9KyJL: {
          defaultValue: `We ship to over 100 countles with fast and relatie dilvery options.`,
          displayTextArea: !0,
          title: `Description`,
          type: V.String,
        },
        onblOq9KyJLChange: { changes: `blOq9KyJL`, type: V.ChangeHandler },
      }),
      A(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2`,
                weight: `400`,
              },
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Te,
  Ee,
  De,
  Oe,
  ke = e(() => {
    (F(),
      O.loadFonts([`FS;General Sans-variable`]),
      (Te = [{ defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Ee = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: Te,
              weight: `400`,
            },
          ],
        },
      ]),
      (De = [
        `.framer-Q89Ab .framer-styles-preset-2wluaf:not(.rich-text-wrapper), .framer-Q89Ab .framer-styles-preset-2wluaf.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Q89Ab .framer-styles-preset-2wluaf:not(.rich-text-wrapper), .framer-Q89Ab .framer-styles-preset-2wluaf.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Q89Ab .framer-styles-preset-2wluaf:not(.rich-text-wrapper), .framer-Q89Ab .framer-styles-preset-2wluaf.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Oe = `framer-Q89Ab`));
  }),
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  Y,
  ze,
  Be,
  Ve,
  He,
  X,
  Z,
  Ue,
  We,
  Q,
  $;
e(() => {
  (u(),
    F(),
    b(),
    n(),
    ge(),
    we(),
    se(),
    ke(),
    fe(),
    (Ae = k(re)),
    (je = L(W)),
    (Me = L(J)),
    (Ne = k(_.div)),
    (Pe = {
      fLrDIR4jg: `(min-width: 810px) and (max-width: 1199.98px)`,
      NF90S_KcG: `(max-width: 809.98px)`,
      y_tfWwHbS: `(min-width: 1200px)`,
    }),
    (Fe = []),
    (Ie = `framer-Y7ukm`),
    (Le = {
      fLrDIR4jg: `framer-v-11v39le`,
      NF90S_KcG: `framer-v-1eud51r`,
      y_tfWwHbS: `framer-v-15oxa2d`,
    }),
    (Re = (e, t, n) => (e && t ? `position` : n)),
    (Y = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 20, y: 0 },
      repeat: !1,
      startDelay: 0,
      tokenization: `character`,
      transition: { delay: 0.05, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (ze = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 },
      repeat: !1,
      startDelay: 0.4,
      tokenization: `character`,
      transition: { delay: 0.01, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (Be = {
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
    (Ve = { delay: 0, duration: 1.2, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (He = {
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
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `y_tfWwHbS`, Phone: `NF90S_KcG`, Tablet: `fLrDIR4jg` }),
    (Ue = ({ value: e }) =>
      ae()
        ? null
        : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (We = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `y_tfWwHbS`,
    })),
    (Q = w(
      f(function (e, t) {
        let n = l(null),
          i = t ?? n,
          c = r(),
          { activeLocale: u, setLocale: d } = te(),
          f = ne(),
          { style: h, className: g, layoutId: b, variant: w, ...T } = We(e);
        C(s(() => de({}, u), [u]));
        let [O, k] = oe(w, Pe, !1),
          A = E(Ie, ue, Oe),
          j = o(z)?.isLayoutTemplate,
          P = !!o(y)?.transition?.layout,
          F = Re(j, P),
          I = x(`eksYqKIDo`),
          ee = M();
        return (
          ie({}),
          p(z.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Z,
              primaryVariantId: `y_tfWwHbS`,
              variantClassNames: Le,
            },
            children: m(v, {
              id: b ?? c,
              children: [
                p(Ue, { value: `html body { background: rgb(0, 0, 0); }` }),
                p(_.div, {
                  ...T,
                  className: E(A, `framer-15oxa2d`, g),
                  ref: i,
                  style: { ...h },
                  children: m(_.main, {
                    className: `framer-10jyp6r`,
                    "data-framer-name": `Main`,
                    layout: F,
                    children: [
                      m(`section`, {
                        className: `framer-enp0nk`,
                        "data-framer-name": `Section - Hero`,
                        children: [
                          m(`div`, {
                            className: `framer-153ez2r`,
                            "data-framer-name": `Content`,
                            children: [
                              p(N, {
                                __fromCanvasComponent: !0,
                                children: p(a, {
                                  children: p(`h1`, {
                                    className: `framer-styles-preset-6khajo`,
                                    "data-styles-preset": `egz88BsrP`,
                                    dir: `auto`,
                                    children: `About Us`,
                                  }),
                                }),
                                className: `framer-1kf5r3u`,
                                "data-framer-name": `Title`,
                                effect: Y,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              p(N, {
                                __fromCanvasComponent: !0,
                                children: p(a, {
                                  children: p(`p`, {
                                    className: `framer-styles-preset-2wluaf`,
                                    "data-styles-preset": `Pg_mwAlQr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                    children: `Creating thoughtfully designed apparel for modern lifestyles and everyday confidence.`,
                                  }),
                                }),
                                className: `framer-lz1kfh`,
                                "data-framer-name": `Description`,
                                effect: ze,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          p(Ae, {
                            __framer__adjustPosition: !1,
                            __framer__offset: 0,
                            __framer__parallaxTransformEnabled: !0,
                            __framer__speed: 60,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1706,
                              intrinsicWidth: 2880,
                              loading: D((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                              pixelHeight: 1706,
                              pixelWidth: 2880,
                              sizes: f?.width || `100vw`,
                              src: `../../assets/images/A1ohgDDriWHpU5tsC0D3LNCYv4-1e3ca9.png`,
                              srcSet: `../../assets/images/A1ohgDDriWHpU5tsC0D3LNCYv4-c92e8d.png 512w,../../assets/images/A1ohgDDriWHpU5tsC0D3LNCYv4-733db2.png 1024w,../../assets/images/A1ohgDDriWHpU5tsC0D3LNCYv4.png 2048w,../../assets/images/A1ohgDDriWHpU5tsC0D3LNCYv4-1e3ca9.png 2880w`,
                            },
                            className: `framer-1syu1sp`,
                            "data-framer-name": `BG`,
                          }),
                          p(`div`, {
                            className: `framer-nq9xxw`,
                            "data-framer-name": `Nav Trigger`,
                            id: I,
                            ref: ee(I),
                          }),
                        ],
                      }),
                      p(`section`, {
                        className: `framer-slx5d7`,
                        "data-framer-name": `Section - About Text`,
                        children: p(`div`, {
                          className: `framer-uxhltq`,
                          "data-framer-name": `Container`,
                          children: p(`div`, {
                            className: `framer-nu3vgh`,
                            "data-framer-name": `Animated Text`,
                            children: p(B, {
                              children: p(R, {
                                className: `framer-160iz9b-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `PiTHQMQXT`,
                                scopeId: `bKyvEUSm9`,
                                children: p(S, {
                                  breakpoint: O,
                                  overrides: {
                                    fLrDIR4jg: { fontSize: 42 },
                                    NF90S_KcG: { fontSize: 30 },
                                  },
                                  children: p(W, {
                                    dimOpacity: 0.2,
                                    endOffset: 40,
                                    fontSize: 48,
                                    height: `100%`,
                                    id: `PiTHQMQXT`,
                                    layoutId: `PiTHQMQXT`,
                                    overrideFontSize: !0,
                                    revealMode: `chars`,
                                    startOffset: 90,
                                    style: { width: `100%` },
                                    textComponent: [
                                      p(_.div, {
                                        className: `framer-z6wf3y`,
                                        "data-framer-name": `Text Wrap`,
                                        children: p(N, {
                                          __fromCanvasComponent: !0,
                                          children: p(a, {
                                            children: p(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                                "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                                "--framer-font-size": `48px`,
                                                "--framer-font-variation-axes": `"wght" 450`,
                                                "--framer-letter-spacing": `-0.03em`,
                                                "--framer-line-height": `1.15em`,
                                                "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                              },
                                              children: `We create modern apparel designed for everyday wear, combining timeless style, premium quality, and versatile comfort to fit seamlessly into any wardrobe.`,
                                            }),
                                          }),
                                          className: `framer-tv3csl`,
                                          "data-framer-name": `Text`,
                                          fonts: [`FS;General Sans-variable`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      p(`section`, {
                        className: `framer-1mpif90`,
                        "data-framer-name": `Section - Stats`,
                        children: m(Ne, {
                          __framer__animate: { transition: Ve },
                          __framer__animateOnce: !0,
                          __framer__enter: Be,
                          __framer__exit: He,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1li83sv`,
                          "data-framer-name": `Container`,
                          children: [
                            m(`div`, {
                              className: `framer-1g8n7au`,
                              "data-framer-name": `Left`,
                              children: [
                                p(S, {
                                  breakpoint: O,
                                  overrides: {
                                    fLrDIR4jg: {
                                      height: 220,
                                      width: `max((max((min(${f?.width || `100vw`}, 1360px) - 76px) * 0.55, 1px) - 12px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 1320 + 64 + 0 + 0 + 0 + 0,
                                    },
                                    NF90S_KcG: {
                                      height: 208,
                                      width: `max((min(${f?.width || `100vw`}, 1360px) - 50px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 846 + 48 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: p(B, {
                                    height: 286.5,
                                    width: `max((max((min(${f?.width || `100vw`}, 1360px) - 116px) * 0.55, 1px) - 16px) / 2, 50px)`,
                                    y: (f?.y || 0) + 0 + 0 + 0 + 1324 + 60 + 0 + -3 + 0 + 0,
                                    children: p(R, {
                                      className: `framer-tyx57u-container`,
                                      nodeId: `YyErknC4Y`,
                                      scopeId: `bKyvEUSm9`,
                                      children: p(S, {
                                        breakpoint: O,
                                        overrides: {
                                          fLrDIR4jg: { variant: X(`d7d7swtjt`) },
                                          NF90S_KcG: { variant: X(`d7d7swtjt`) },
                                        },
                                        children: p(J, {
                                          blOq9KyJL: `Trusted by customers who value comfort, quality, and style.`,
                                          fyxLSKEvV: `Happy Customers`,
                                          height: `100%`,
                                          id: `YyErknC4Y`,
                                          layoutId: `YyErknC4Y`,
                                          sIYZBY59g: `15K+`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: X(`VnQ52Zcdm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                p(S, {
                                  breakpoint: O,
                                  overrides: {
                                    fLrDIR4jg: {
                                      height: 220,
                                      width: `max((max((min(${f?.width || `100vw`}, 1360px) - 76px) * 0.55, 1px) - 12px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 1320 + 64 + 0 + 0 + 0 + 0,
                                    },
                                    NF90S_KcG: {
                                      height: 208,
                                      width: `max((min(${f?.width || `100vw`}, 1360px) - 50px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 846 + 48 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: p(B, {
                                    height: 286.5,
                                    width: `max((max((min(${f?.width || `100vw`}, 1360px) - 116px) * 0.55, 1px) - 16px) / 2, 50px)`,
                                    y: (f?.y || 0) + 0 + 0 + 0 + 1324 + 60 + 0 + -3 + 0 + 0,
                                    children: p(R, {
                                      className: `framer-kb5w80-container`,
                                      nodeId: `hWeERWcsA`,
                                      scopeId: `bKyvEUSm9`,
                                      children: p(S, {
                                        breakpoint: O,
                                        overrides: {
                                          fLrDIR4jg: { variant: X(`d7d7swtjt`) },
                                          NF90S_KcG: { variant: X(`d7d7swtjt`) },
                                        },
                                        children: p(J, {
                                          blOq9KyJL: `Fresh collections designed for every season and occasion.`,
                                          fyxLSKEvV: `New Arrivals Yearly`,
                                          height: `100%`,
                                          id: `hWeERWcsA`,
                                          layoutId: `hWeERWcsA`,
                                          sIYZBY59g: `250+`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: X(`VnQ52Zcdm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                p(S, {
                                  breakpoint: O,
                                  overrides: {
                                    fLrDIR4jg: {
                                      height: 220,
                                      width: `max((max((min(${f?.width || `100vw`}, 1360px) - 76px) * 0.55, 1px) - 12px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 1320 + 64 + 0 + 0 + 0 + 232,
                                    },
                                    NF90S_KcG: {
                                      height: 208,
                                      width: `max((min(${f?.width || `100vw`}, 1360px) - 50px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 846 + 48 + 0 + 0 + 0 + 0 + 218,
                                    },
                                  },
                                  children: p(B, {
                                    height: 286.5,
                                    width: `max((max((min(${f?.width || `100vw`}, 1360px) - 116px) * 0.55, 1px) - 16px) / 2, 50px)`,
                                    y: (f?.y || 0) + 0 + 0 + 0 + 1324 + 60 + 0 + -3 + 0 + 302.5,
                                    children: p(R, {
                                      className: `framer-xdl8kh-container`,
                                      nodeId: `xc78pgd53`,
                                      scopeId: `bKyvEUSm9`,
                                      children: p(S, {
                                        breakpoint: O,
                                        overrides: {
                                          fLrDIR4jg: { variant: X(`d7d7swtjt`) },
                                          NF90S_KcG: { variant: X(`d7d7swtjt`) },
                                        },
                                        children: p(J, {
                                          blOq9KyJL: `Delivering modern fashion to customers around the world.`,
                                          fyxLSKEvV: `Countries Served`,
                                          height: `100%`,
                                          id: `xc78pgd53`,
                                          layoutId: `xc78pgd53`,
                                          sIYZBY59g: `50+`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: X(`VnQ52Zcdm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                p(S, {
                                  breakpoint: O,
                                  overrides: {
                                    fLrDIR4jg: {
                                      height: 220,
                                      width: `max((max((min(${f?.width || `100vw`}, 1360px) - 76px) * 0.55, 1px) - 12px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 1320 + 64 + 0 + 0 + 0 + 232,
                                    },
                                    NF90S_KcG: {
                                      height: 208,
                                      width: `max((min(${f?.width || `100vw`}, 1360px) - 50px) / 2, 50px)`,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 846 + 48 + 0 + 0 + 0 + 0 + 218,
                                    },
                                  },
                                  children: p(B, {
                                    height: 286.5,
                                    width: `max((max((min(${f?.width || `100vw`}, 1360px) - 116px) * 0.55, 1px) - 16px) / 2, 50px)`,
                                    y: (f?.y || 0) + 0 + 0 + 0 + 1324 + 60 + 0 + -3 + 0 + 302.5,
                                    children: p(R, {
                                      className: `framer-1m9oi2v-container`,
                                      nodeId: `yeQ4vKMv2`,
                                      scopeId: `bKyvEUSm9`,
                                      children: p(S, {
                                        breakpoint: O,
                                        overrides: {
                                          fLrDIR4jg: { variant: X(`d7d7swtjt`) },
                                          NF90S_KcG: { variant: X(`d7d7swtjt`) },
                                        },
                                        children: p(J, {
                                          blOq9KyJL: `A growing community inspired by everyday style and confidence.`,
                                          fyxLSKEvV: `Community Members`,
                                          height: `100%`,
                                          id: `yeQ4vKMv2`,
                                          layoutId: `yeQ4vKMv2`,
                                          sIYZBY59g: `400K+`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: X(`VnQ52Zcdm`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            p(S, {
                              breakpoint: O,
                              overrides: {
                                fLrDIR4jg: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1340,
                                    intrinsicWidth: 1210,
                                    loading: D((f?.y || 0) + 0 + 0 + 0 + 1320 + 64 + 0 + 0),
                                    pixelHeight: 1340,
                                    pixelWidth: 1210,
                                    positionX: `48.4%`,
                                    positionY: `8.3%`,
                                    sizes: `max((min(${f?.width || `100vw`}, 1360px) - 76px) * 0.45, 1px)`,
                                    src: `../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE-3a9c0f.png`,
                                    srcSet: `../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE.png 924w,../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE-3a9c0f.png 1210w`,
                                  },
                                },
                                NF90S_KcG: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1340,
                                    intrinsicWidth: 1210,
                                    loading: D((f?.y || 0) + 0 + 0 + 0 + 846 + 48 + 0 + 0 + 436),
                                    pixelHeight: 1340,
                                    pixelWidth: 1210,
                                    positionX: `48.4%`,
                                    positionY: `8.3%`,
                                    sizes: `calc(min(${f?.width || `100vw`}, 1360px) - 40px)`,
                                    src: `../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE-3a9c0f.png`,
                                    srcSet: `../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE.png 924w,../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE-3a9c0f.png 1210w`,
                                  },
                                },
                              },
                              children: p(re, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1340,
                                  intrinsicWidth: 1210,
                                  loading: D((f?.y || 0) + 0 + 0 + 0 + 1324 + 60 + 0 + 0),
                                  pixelHeight: 1340,
                                  pixelWidth: 1210,
                                  positionX: `48.4%`,
                                  positionY: `8.3%`,
                                  sizes: `max((min(${f?.width || `100vw`}, 1360px) - 116px) * 0.45, 1px)`,
                                  src: `../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE-3a9c0f.png`,
                                  srcSet: `../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE.png 924w,../../assets/images/IeXHz2Smpvvv8yFZ1hEOUmD6TE-3a9c0f.png 1210w`,
                                },
                                className: `framer-60e3n9`,
                                "data-framer-name": `Image`,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Y7ukm.framer-x0w2qr, .framer-Y7ukm .framer-x0w2qr { display: block; }`,
        `.framer-Y7ukm.framer-15oxa2d { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Y7ukm .framer-10jyp6r { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-enp0nk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 108px 0px 90px 0px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-153ez2r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 1px; justify-content: flex-end; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 0px 50px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-Y7ukm .framer-1kf5r3u { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 653px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Y7ukm .framer-lz1kfh { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 585px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Y7ukm .framer-1syu1sp { -webkit-filter: brightness(0.85); bottom: 0px; filter: brightness(0.85); flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-Y7ukm .framer-nq9xxw { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 80px; z-index: 1; }`,
        `.framer-Y7ukm .framer-slx5d7 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 60px 50px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-uxhltq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 75%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-nu3vgh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-160iz9b-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Y7ukm .framer-z6wf3y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 825px; }`,
        `.framer-Y7ukm .framer-tv3csl { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Y7ukm .framer-1mpif90 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 50px 128px 50px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-1li83sv { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 583px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-1g8n7au { display: grid; flex: 0.55 0 0px; gap: 16px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y7ukm .framer-tyx57u-container, .framer-Y7ukm .framer-kb5w80-container, .framer-Y7ukm .framer-xdl8kh-container, .framer-Y7ukm .framer-1m9oi2v-container { align-self: start; flex: none; height: 287px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Y7ukm .framer-60e3n9 { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: 0.45 0 0px; gap: 0px; height: 100%; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        ...ce,
        ...De,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Y7ukm.framer-15oxa2d { width: 810px; } .framer-Y7ukm .framer-enp0nk { padding: 80px 0px 70px 0px; } .framer-Y7ukm .framer-153ez2r { padding: 0px 30px 0px 30px; } .framer-Y7ukm .framer-slx5d7 { padding: 76px 32px 64px 32px; } .framer-Y7ukm .framer-uxhltq { max-width: 80%; } .framer-Y7ukm .framer-1mpif90 { padding: 64px 32px 80px 32px; } .framer-Y7ukm .framer-1li83sv { gap: 12px; height: min-content; } .framer-Y7ukm .framer-1g8n7au { gap: 12px 12px; } .framer-Y7ukm .framer-tyx57u-container, .framer-Y7ukm .framer-kb5w80-container, .framer-Y7ukm .framer-xdl8kh-container, .framer-Y7ukm .framer-1m9oi2v-container { height: 220px; } .framer-Y7ukm .framer-60e3n9 { align-self: stretch; height: auto; }}`,
        `@media (max-width: 809.98px) { .framer-Y7ukm.framer-15oxa2d { width: 390px; } .framer-Y7ukm .framer-enp0nk { height: 65vh; max-height: 550px; padding: 64px 0px 44px 0px; } .framer-Y7ukm .framer-153ez2r { padding: 0px 20px 0px 20px; } .framer-Y7ukm .framer-slx5d7 { padding: 68px 30px 48px 30px; } .framer-Y7ukm .framer-uxhltq { max-width: 100%; } .framer-Y7ukm .framer-1mpif90 { padding: 48px 20px 56px 20px; } .framer-Y7ukm .framer-1li83sv { flex-direction: column; gap: 10px; height: min-content; } .framer-Y7ukm .framer-1g8n7au { flex: none; gap: 10px 10px; width: 100%; } .framer-Y7ukm .framer-tyx57u-container, .framer-Y7ukm .framer-kb5w80-container, .framer-Y7ukm .framer-xdl8kh-container, .framer-Y7ukm .framer-1m9oi2v-container { height: 208px; } .framer-Y7ukm .framer-60e3n9 { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: 273px; width: 100%; }}`,
      ],
      `framer-Y7ukm`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 4390.5, width: 1200 }),
    A(
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
          ],
        },
        ...je,
        ...Me,
        ...T(le),
        ...T(Ee),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([I(J, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerbKyvEUSm9`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"fLrDIR4jg":{"layout":["fixed","fixed"]},"NF90S_KcG":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"eksYqKIDo":{"pattern":":eksYqKIDo","name":"Nav Trigger"}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `4390.5`,
            framerResponsiveScreen: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Fe as queryParamNames };
//# sourceMappingURL=M1chMch1ajPXq2ApbwBVMHllELK-2C8M7ATdTaqe4Ro.fxcs32E1.mjs.map
