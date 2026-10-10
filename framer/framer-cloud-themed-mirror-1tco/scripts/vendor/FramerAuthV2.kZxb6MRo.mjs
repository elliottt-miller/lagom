import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { c as t, s as n } from "./react.DJ2-MjhO.mjs";
import { l as r, n as i, r as a, t as o } from "./framerauth.DCor1uou.mjs";
function s(e) {
  return o(e);
}
function c(e) {
  return a(e);
}
function l(e) {
  return (t) => {
    let r = i();
    if (!r || !r.user) return null;
    let a = r.user.email;
    return n(e, { ...t, text: a });
  };
}
function u(e) {
  return (t) => {
    let r = i();
    if (!r || !r.user) return null;
    let a = r.user.name;
    return n(e, { ...t, text: a });
  };
}
var d = e(() => {
  (t(), r());
});
export { d as a, s as i, u as n, c as r, l as t };
//# sourceMappingURL=FramerAuthV2.kZxb6MRo.mjs.map
