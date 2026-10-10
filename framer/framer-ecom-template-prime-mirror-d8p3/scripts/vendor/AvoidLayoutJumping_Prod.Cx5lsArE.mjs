import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { D as t, S as n, c as r, s as i, x as a } from "./react.BtSUcPAM.mjs";
import { rt as o, t as s } from "./motion.B_UOAosx.mjs";
import { N as c, Q as l, St as u, o as d } from "./framer.DuFjdl15.mjs";
function f({ direction: e = `vertical`, style: t, className: r }) {
  let s = u(),
    c = o() ?? !1,
    l = n(null),
    d = n(null);
  return (
    a(() => {
      if (s) return;
      let t = l.current,
        n = t?.parentElement?.parentElement,
        r = n?.parentElement;
      if (!t || !n || !r) return;
      let i = e === `vertical` || e === `both`,
        a = e === `horizontal` || e === `both`,
        o = !1,
        u = !0,
        f = document.visibilityState === `visible`,
        m = !1,
        h = !1,
        g = ``,
        _ = ``,
        v = () => {
          (d.current != null && cancelAnimationFrame(d.current), (d.current = null));
        },
        y = () => {
          (a && (r.style.width = ``), i && (r.style.height = ``));
        },
        b = () => {
          if (m) return;
          let e = getComputedStyle(r).position;
          ((h = e === `absolute` || e === `fixed`), (m = !0));
        },
        x = (e, t) => {
          if (!(h || !n.isConnected) && !(e === 0 && t === 0 && n.offsetParent === null)) {
            if (a) {
              let t = p(e);
              t !== g && ((r.style.width = t), (g = t));
            }
            if (i) {
              let e = p(t);
              e !== _ && ((r.style.height = e), (_ = e));
            }
          }
        },
        S = () => !o && u && f;
      if (c) {
        let e = () => {
            if (!S()) return;
            b();
            let e = n.getBoundingClientRect();
            x(e.width, e.height);
          },
          t = new ResizeObserver(() => e()),
          r = new IntersectionObserver((t) => {
            ((u = t.some((e) => e.isIntersecting)), S() && e());
          }),
          i = () => {
            ((f = document.visibilityState === `visible`), S() && e());
          };
        return (
          t.observe(n),
          r.observe(n),
          document.addEventListener(`visibilitychange`, i),
          e(),
          () => {
            ((o = !0),
              t.disconnect(),
              r.disconnect(),
              document.removeEventListener(`visibilitychange`, i),
              y());
          }
        );
      }
      let C = !1,
        w = 0,
        T = () => {
          if (((d.current = null), !S())) {
            C = !1;
            return;
          }
          if ((b(), h)) {
            C = !1;
            return;
          }
          let e = n.getBoundingClientRect(),
            t = a ? p(e.width) : g,
            r = i ? p(e.height) : _;
          if ((t !== g || r !== _ ? ((w = 0), x(e.width, e.height)) : (w += 1), w < 12)) {
            d.current = requestAnimationFrame(T);
            return;
          }
          C = !1;
        },
        E = () => {
          !S() || C || ((C = !0), (w = 0), (d.current = requestAnimationFrame(T)));
        },
        D = new ResizeObserver(() => E()),
        O = new IntersectionObserver((e) => {
          ((u = e.some((e) => e.isIntersecting)), S() ? E() : ((C = !1), v()));
        }),
        k = () => {
          ((f = document.visibilityState === `visible`), S() ? E() : ((C = !1), v()));
        },
        A = (e) => {
          let t = e.target;
          t instanceof Node && n.contains(t) && E();
        };
      return (
        D.observe(n),
        O.observe(n),
        document.addEventListener(`visibilitychange`, k),
        document.addEventListener(`pointerdown`, A, !0),
        E(),
        () => {
          ((o = !0),
            (C = !1),
            v(),
            D.disconnect(),
            O.disconnect(),
            document.removeEventListener(`visibilitychange`, k),
            document.removeEventListener(`pointerdown`, A, !0),
            y());
        }
      );
    }, [e, s, c]),
    i(`div`, {
      ref: l,
      "data-build": `layout-jump-preventer-prod-20260926-01`,
      className: r,
      "aria-hidden": `true`,
      "data-layout-jump-preventer": ``,
      style: { position: `relative`, pointerEvents: `none`, ...t },
    })
  );
}
function p(e) {
  return `${Math.round(e * 100) / 100}px`;
}
var m = e(() => {
  (r(),
    l(),
    s(),
    t(),
    (f.displayName = `Layout Jump Preventer`),
    c(f, {
      direction: {
        type: d.Enum,
        title: `Direction`,
        defaultValue: `vertical`,
        options: [`vertical`, `horizontal`, `both`],
        optionTitles: [`Vertical`, `Horizontal`, `Both`],
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
        optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
export { m as n, f as t };
//# sourceMappingURL=AvoidLayoutJumping_Prod.Cx5lsArE.mjs.map
