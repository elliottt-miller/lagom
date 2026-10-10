import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { D as t, P as n, l as r, s as i, v as a } from "./react.ClsXD4bF.mjs";
import { Z as o, o as s } from "./framer.CbUxDv78.mjs";
var c,
  l,
  u,
  d = e(() => {
    (i(),
      t(),
      (c = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (l = {
        ...c,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (u = a((e, t) => r(`div`, { style: l, ref: t }))));
  }),
  f = e(() => {
    d();
  });
function p(e, t, n = ``, r, i) {
  if (t) return r;
  if (n == null || n?.length === 0) return null;
  let a = n.toLowerCase().replace(/-|\s/g, ``);
  return i[a] ?? g(e, a);
}
function m(e, t, r = ``, i, a) {
  let o = n(() => {
    if (r == null || r?.length === 0) return null;
    let t = r.toLowerCase().replace(/-|\s/g, ``);
    return a[t] ?? g(e, t);
  }, [i, r]);
  return t ? i : o;
}
var h,
  g,
  _ = e(() => {
    (t(),
      o(),
      (h = {
        onClick: { type: s.EventHandler },
        onMouseDown: { type: s.EventHandler },
        onMouseUp: { type: s.EventHandler },
        onMouseEnter: { type: s.EventHandler },
        onMouseLeave: { type: s.EventHandler },
      }),
      (g = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
export { f as a, m as i, p as n, u as o, _ as r, d as s, h as t };
//# sourceMappingURL=utils.BXr5awPV.mjs.map
