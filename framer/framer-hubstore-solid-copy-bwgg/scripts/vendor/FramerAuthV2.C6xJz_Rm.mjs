import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { l as t, s as n } from "./react.ClsXD4bF.mjs";
import { a as r, d as i, i as a, n as o, r as s, t as c } from "./framerauth.Bsg5VUt2.mjs";
function l(e) {
  return s(e);
}
function u(e) {
  return (n) => {
    let i = r();
    if (!i || !i.user) return null;
    let a = i.user.email;
    return t(e, { ...n, text: a });
  };
}
function d(e) {
  return (n) => {
    let i = r();
    if (!i || !i.user) return null;
    let a = i.user.name;
    return t(e, { ...n, text: a });
  };
}
function f(e) {
  return o(e);
}
function p(e) {
  return c(e);
}
function m(e) {
  return a(e);
}
var h = e(() => {
  (n(), i());
});
export { p as a, f as i, d as n, m as o, l as r, h as s, u as t };
//# sourceMappingURL=FramerAuthV2.C6xJz_Rm.mjs.map
