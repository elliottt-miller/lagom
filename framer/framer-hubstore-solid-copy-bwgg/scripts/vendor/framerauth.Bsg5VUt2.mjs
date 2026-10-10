import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as n,
  C as r,
  D as i,
  F as a,
  H as o,
  I as s,
  P as c,
  R as l,
  j as u,
  l as d,
  s as f,
} from "./react.ClsXD4bF.mjs";
import { T as p, Tt as m, Y as h, Z as g } from "./framer.CbUxDv78.mjs";
var _ = e({
  buttonSignInSocial: () => ke,
  buttonSignOut: () => Ae,
  getSession: () => v,
  isCanvas: () => je,
  resetPassword: () => re,
  sendForgotPasswordEmail: () => C,
  sendOTP: () => S,
  sendVerificationEmail: () => oe,
  showIfSignedIn: () => Se,
  showIfSignedOut: () => z,
  showIfWithTag: () => Ce,
  showIfWithoutTag: () => we,
  signIn: () => b,
  signInOTP: () => x,
  signInSocial: () => ie,
  signOut: () => ee,
  signUp: () => y,
  storeCheckout: () => ae,
  storePortal: () => w,
  toggleVariant: () => B,
  toggleVariantIfWithTag: () => Te,
  updateProfile: () => te,
  updateProfilePicture: () => ne,
  useBookmarks: () => A,
  useIsInitializing: () => E,
  useProject: () => k,
  useSession: () => D,
  useUser: () => O,
  withBookmarks: () => Ee,
  withIsBookmarked: () => De,
  withToggleBookmark: () => Oe,
});
async function v() {
  let e = H();
  if (!e) return { data: null, error: { message: V } };
  try {
    return await e.auth.getSession();
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function y(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.signUp(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function b(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.signIn(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function x(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.signInOTP(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function S(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.sendOTP(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function ee(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.signOut(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function te(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.updateProfile(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function ne(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.updateProfilePicture(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function C(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.sendForgotPasswordEmail(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function re(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.resetPassword(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function ie(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.signInSocial(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function ae(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.storeCheckout(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function w(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.storePortal(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
async function oe(e) {
  let t = H();
  if (!t) return { data: null, error: { message: V } };
  try {
    return await t.auth.sendVerificationEmail(e);
  } catch (e) {
    return { data: null, error: { message: e instanceof Error ? e.message : `Unknown error` } };
  }
}
function se(e) {
  if (typeof e == `number`) return new q({ type: `linear`, attempts: e, delay: 1e3 });
  switch (e.type) {
    case `linear`:
      return new q(e);
    case `exponential`:
      return new Ve(e);
    default:
      throw Error(`Invalid retry strategy`);
  }
}
function ce(e) {
  let t = e.headers.get(`content-type`),
    n = new Set([`image/svg`, `application/xml`, `application/xhtml`, `application/html`]);
  if (!t) return `json`;
  let r = t.split(`;`).shift() || ``;
  return Ue.test(r) ? `json` : n.has(r) || r.startsWith(`text/`) ? `text` : `blob`;
}
function le(e) {
  try {
    return (JSON.parse(e), !0);
  } catch {
    return !1;
  }
}
function ue(e) {
  if (e === void 0) return !1;
  let t = typeof e;
  return t === `string` || t === `number` || t === `boolean` || t === null
    ? !0
    : t === `object`
      ? Array.isArray(e)
        ? !0
        : e.buffer
          ? !1
          : (e.constructor && e.constructor.name === `Object`) || typeof e.toJSON == `function`
      : !1;
}
function de(e) {
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function fe(e) {
  return typeof e == `function`;
}
function pe(e) {
  if (e?.customFetchImpl) return e.customFetchImpl;
  if (typeof globalThis < `u` && fe(globalThis.fetch)) return globalThis.fetch;
  if (typeof o < `u` && fe(o.fetch)) return o.fetch;
  throw Error(`No fetch implementation found`);
}
async function me(e) {
  let t = new Headers(e?.headers),
    n = await He(e);
  for (let [e, r] of Object.entries(n || {})) t.set(e, r);
  if (!t.has(`content-type`)) {
    let n = he(e?.body);
    n && t.set(`content-type`, n);
  }
  return t;
}
function he(e) {
  return ue(e) ? `application/json` : null;
}
function ge(e) {
  if (!e?.body) return null;
  let t = new Headers(e?.headers);
  if (ue(e.body) && !t.has(`content-type`)) {
    for (let [t, n] of Object.entries(e?.body)) n instanceof Date && (e.body[t] = n.toISOString());
    return JSON.stringify(e.body);
  }
  return e.body;
}
function _e(e, t) {
  if (t?.method) return t.method.toUpperCase();
  if (e.startsWith(`@`)) {
    let n = e.split(`@`)[1]?.split(`/`)[0];
    return J.includes(n) ? n.toUpperCase() : t?.body ? `POST` : `GET`;
  }
  return t?.body ? `POST` : `GET`;
}
function ve(e, t) {
  let n;
  return (
    !e?.signal && e?.timeout && (n = setTimeout(() => t?.abort(), e?.timeout)),
    {
      abortTimeout: n,
      clearTimeout: () => {
        n && clearTimeout(n);
      },
    }
  );
}
async function ye(e, t) {
  let n = await e[`~standard`].validate(t);
  if (n.issues) throw new We(n.issues);
  return n.value;
}
function be(e, t) {
  let { baseURL: n, params: r, query: i } = t || { query: {}, params: {}, baseURL: `` },
    a = e.startsWith(`http`) ? e.split(`/`).slice(0, 3).join(`/`) : n || ``;
  if (e.startsWith(`@`)) {
    let t = e.toString().split(`@`)[1].split(`/`)[0];
    J.includes(t) && (e = e.replace(`@${t}/`, `/`));
  }
  a.endsWith(`/`) || (a += `/`);
  let [o, s] = e.replace(a, ``).split(`?`),
    c = new URLSearchParams(s);
  for (let [e, t] of Object.entries(i || {})) t != null && c.set(e, String(t));
  if (r)
    if (Array.isArray(r)) {
      let e = o.split(`/`).filter((e) => e.startsWith(`:`));
      for (let [t, n] of e.entries()) {
        let e = r[t];
        o = o.replace(n, e);
      }
    } else for (let [e, t] of Object.entries(r)) o = o.replace(`:${e}`, String(t));
  ((o = o.split(`/`).map(encodeURIComponent).join(`/`)), o.startsWith(`/`) && (o = o.slice(1)));
  let l = c.toString();
  return (
    (l = l.length > 0 ? `?${l}`.replace(/\+/g, `%20`) : ``),
    a.startsWith(`http`) ? new URL(`${o}${l}`, a) : `${a}${o}${l}`
  );
}
function xe(e, t, n) {
  let r = new Set(t).add(void 0);
  return e.listen((e, t, i) => {
    r.has(i) && n(e, t, i);
  });
}
function T(e, { keys: t, deps: n = [e, t] } = {}) {
  let i = u();
  i.current = e.get();
  let o = a((n) => (X(i, n)(e.value), t?.length > 0 ? xe(e, t, X(i, n)) : e.listen(X(i, n))), n),
    s = () => i.current;
  return r(o, s, s);
}
function E() {
  if (!Z() || Q() || !o?.FramerAuth) return { initializing: !0, setInitializing: () => {} };
  let e = o.FramerAuth;
  return { initializing: T(e.state.initializing) };
}
function D() {
  if (!Z() || Q() || !o?.FramerAuth)
    return { session: null, loading: !1, setSession: () => {}, setLoading: () => {} };
  let e = o.FramerAuth;
  return {
    session: T(e.data.session),
    loading: T(e.state.sessionLoading),
    setSession: (t) => e.data.session.set(t),
    setLoading: (t) => e.state.sessionLoading.set(t),
  };
}
function O() {
  if (!Z() || Q() || !o?.FramerAuth)
    return { user: null, loading: !1, setUser: () => {}, setLoading: () => {} };
  let e = o.FramerAuth,
    t = T(e.data.user),
    n = T(e.state.userLoading);
  return (
    t && !Object.prototype.hasOwnProperty.call(t, `tags`) && (t.tags = []),
    {
      user: t,
      loading: n,
      setUser: (t) => e.data.user.set(t),
      setLoading: (t) => e.state.userLoading.set(t),
    }
  );
}
function k() {
  let [e, t] = l(null),
    [n, r] = l(!1);
  if (!Z())
    return {
      project: null,
      loading: !1,
      setProject: () => {},
      setLoading: () => {},
      fetchProject: async () => ({ data: null, error: { message: `Browser not available` } }),
    };
  if (!o?.FramerAuth) {
    let i = (e) => t(e),
      a = (e) => r(e);
    return {
      project: e,
      loading: n,
      setProject: i,
      setLoading: a,
      fetchProject: async () => {
        a(!0);
        let e = await $();
        return (e.data && i(e.data), a(!1), e);
      },
    };
  }
  let i = o.FramerAuth,
    a = T(i.data.project),
    s = T(i.state.projectLoading),
    c = (e) => i.data.project.set(e),
    u = (e) => i.state.projectLoading.set(e);
  return {
    project: a,
    loading: s,
    setProject: c,
    setLoading: u,
    fetchProject: async () => {
      u(!0);
      let e = await i.api.fetchProject();
      return (e.data && c(e.data), u(!1), e);
    },
  };
}
function A(e) {
  if (!Z() || Q() || !o?.FramerAuth)
    return {
      bookmarks: null,
      loading: !1,
      createBookmark: (e) => {},
      deleteBookmark: (e) => {},
      setLoading: () => {},
    };
  let t = o.FramerAuth;
  return {
    bookmarks: T(t.data.bookmarks, { keys: e }),
    createBookmark: (e) => {
      let n = { ...t.data.bookmarks.get(), [e]: !0 };
      t.data.bookmarks.set(n);
    },
    deleteBookmark: (e) => {
      let n = { ...t.data.bookmarks.get() };
      (delete n[e], t.data.bookmarks.set(n));
    },
  };
}
function j(e) {
  return e.toLowerCase();
}
function M(e, t = `any`) {
  return e === `all` || e === `any` ? e : t;
}
function N(e) {
  return e !== null;
}
function P(e, t, n = `all`) {
  if (!N(e)) return !1;
  if (t.length === 0) return e.tags.length > 0;
  let r = e.tags.map((e) => j(e.name)),
    i = t.map(j);
  return n === `any` ? i.some((e) => r.includes(e)) : i.every((e) => r.includes(e));
}
function F(e) {
  let t = e;
  return (
    typeof t?.displayName == `string` &&
    t.displayName.length > 0 &&
    typeof t?.defaultProps == `object` &&
    t.defaultProps !== null
  );
}
function I(e, t) {
  return t ? e.parentElement : e;
}
function L(e) {
  let t;
  if (typeof e == `string`) t = e.split(`,`);
  else if (Array.isArray(e)) t = e.filter((e) => typeof e == `string`);
  else return null;
  let n = t.map((e) => e.trim()).filter(Boolean);
  return n.length > 0 ? n : null;
}
function R(e, t) {
  return t === void 0
    ? { tags: L(e?.tags), operator: M(e?.require) }
    : typeof t == `string` || Array.isArray(t) || t === null
      ? { tags: L(t), operator: `any` }
      : { tags: L(t.tags), operator: M(t.require) };
}
function Se(e) {
  return (t) => {
    let { session: n } = D();
    return n ? d(e, { ...t }) : null;
  };
}
function z(e) {
  return (t) => {
    let { session: n } = D();
    return n ? null : d(e, { ...t });
  };
}
function B(e) {
  return (t) => {
    let { session: n } = D(),
      r = n ? null : t?.variant;
    return d(e, { ...t, variant: r });
  };
}
function Ce(e, t) {
  let n = F(e);
  return (r) => {
    let { user: i } = O(),
      a = u(null),
      { tags: o, operator: l } = c(() => R(r, t), [r?.tags, r?.require, t]),
      f = c(() => (N(i) ? (o ? P(i, o, l) : i.tags.length > 0) : !1), [i, o, l]);
    return (
      s(() => {
        if (a.current) {
          let e = I(a.current, n);
          if (!e) return;
          f ? (e.style.display = ``) : (e.style.display = `none`);
        }
      }, [a.current, f]),
      c(() => (f === !0 ? d(e, { ref: a, ...r }) : d(`div`, { ref: a })), [r, f, void 0])
    );
  };
}
function we(e, t) {
  let n = F(e);
  return (r) => {
    let { user: i } = O(),
      a = u(null),
      { tags: o, operator: l } = c(() => R(r, t), [r?.tags, r?.require, t]),
      f = c(() => (N(i) ? (o ? P(i, o, l) : i.tags.length > 0) : !1), [i, o, l]);
    return (
      s(() => {
        if (a.current) {
          let e = I(a.current, n);
          if (!e) return;
          f ? (e.style.display = `none`) : (e.style.display = ``);
        }
      }, [a.current, f]),
      c(() => (f === !0 ? d(`div`, { ref: a }) : d(e, { ref: a, ...r })), [r, f, void 0])
    );
  };
}
function Te(e, t) {
  return (n) => {
    let { user: r } = O(),
      i = n?.variant,
      { tags: a, operator: o } = R(n, t);
    if (!a) {
      let t = null;
      return ((!N(r) || r.tags.length === 0) && (t = i), d(e, { ...n, variant: t }));
    }
    let s = P(r, a, o) ? null : i;
    return d(e, { ...n, variant: s });
  };
}
function Ee(e, t = `saved-for-later`) {
  return (n) => {
    let { bookmarks: r } = A(),
      i = c(() => (r ? Object.keys(r).some((e) => e.startsWith(`${t}:`)) : !1), [r])
        ? null
        : `Empty State`;
    return d(e, { ...n, variant: i });
  };
}
function De(e, t = `saved-for-later`) {
  return (n) => {
    let { bookmarks: r } = A(),
      i = u(null),
      a = c(() => `${t}:${n?.slug}`, [n]),
      o = c(() => (je() ? !0 : r ? a in r : !1), [r?.[a], a]);
    return (
      s(() => {
        if (i.current) {
          let e = i.current.parentElement;
          if (!e) return;
          o ? (e.style.display = ``) : (e.style.display = `none`);
        }
      }, [i.current, o]),
      c(() => (o ? d(e, { ref: i, ...n }) : d(`div`, { ref: i })), [n, o, void 0])
    );
  };
}
function Oe(e, t = `saved-for-later`) {
  return (n) => {
    let r = m(),
      { session: i } = D(),
      { bookmarks: a, createBookmark: s, deleteBookmark: l } = A([`${t}:${n?.slug}`]),
      u = c(() => `${t}:${n?.slug}`, [n]),
      f = c(() => (a ? u in a : !1), [a?.[u], u]),
      p = async (e) => {
        try {
          if (f) (l(u), o?.FramerAuth.auth.deleteBookmark({ id: n?.slug, bookmark_type: t }));
          else if (
            (s(u), o?.FramerAuth.auth.createBookmark({ id: n?.slug, bookmark_type: t }), n?.link)
          ) {
            let [e, t] = n.link.split(`#`),
              { routeId: i, pathVariables: a } = h(r.routes, e);
            i && r.navigate(i, t, a);
          }
        } catch (e) {
          console.error(e);
        }
      },
      g = c(() => (f ? n?.variant : void 0), [f, n?.variant]);
    return i ? d(e, { ...n, variant: g, onClick: p }) : null;
  };
}
function ke(e) {
  return (t) =>
    d(e, {
      ...t,
      onClick: async (e) => {
        o?.FramerAuth.auth.signInSocial({
          provider: `github`,
          callbackURL: o.location.origin + `/account`,
        });
      },
    });
}
function Ae(e, t) {
  return (n) => {
    let { session: r } = D();
    return r
      ? d(e, {
          ...n,
          onClick: async (e) => {
            o?.FramerAuth.auth.signOut({ redirectTo: t.redirectTo });
          },
        })
      : null;
  };
}
function je() {
  return p.current() === p.canvas;
}
var Me,
  Ne,
  V,
  H,
  Pe,
  Fe,
  Ie,
  U,
  Le,
  Re,
  W,
  G,
  K,
  ze,
  Be,
  q,
  Ve,
  He,
  Ue,
  We,
  J,
  Y,
  X,
  Ge,
  Z,
  Q,
  Ke,
  $,
  qe = t(() => {
    (n(),
      i(),
      g(),
      f(),
      (Me = () => typeof o < `u`),
      (Ne = () => o.location.host.endsWith(`framercanvas.com`)),
      (V = `FramerAuth snippet missing from start of <body>`),
      (H = () => (!Me() || Ne() || !o?.FramerAuth ? null : o.FramerAuth)),
      (Pe = Object.defineProperty),
      (Fe = Object.defineProperties),
      (Ie = Object.getOwnPropertyDescriptors),
      (U = Object.getOwnPropertySymbols),
      (Le = Object.prototype.hasOwnProperty),
      (Re = Object.prototype.propertyIsEnumerable),
      (W = (e, t, n) =>
        t in e
          ? Pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (G = (e, t) => {
        for (var n in (t ||= {})) Le.call(t, n) && W(e, n, t[n]);
        if (U) for (var n of U(t)) Re.call(t, n) && W(e, n, t[n]);
        return e;
      }),
      (K = (e, t) => Fe(e, Ie(t))),
      (ze = class extends Error {
        constructor(e, t, n) {
          (super(t || e.toString(), { cause: n }),
            (this.status = e),
            (this.statusText = t),
            (this.error = n));
        }
      }),
      (Be = async (e, t) => {
        let n = t || {},
          r = {
            onRequest: [t?.onRequest],
            onResponse: [t?.onResponse],
            onSuccess: [t?.onSuccess],
            onError: [t?.onError],
            onRetry: [t?.onRetry],
          };
        if (!t || !t?.plugins) return { url: e, options: n, hooks: r };
        for (let i of t?.plugins || []) {
          if (i.init) {
            let r = await i.init?.call(i, e.toString(), t);
            ((n = r.options || n), (e = r.url));
          }
          (r.onRequest.push(i.hooks?.onRequest),
            r.onResponse.push(i.hooks?.onResponse),
            r.onSuccess.push(i.hooks?.onSuccess),
            r.onError.push(i.hooks?.onError),
            r.onRetry.push(i.hooks?.onRetry));
        }
        return { url: e, options: n, hooks: r };
      }),
      (q = class {
        constructor(e) {
          this.options = e;
        }
        shouldAttemptRetry(e, t) {
          return this.options.shouldRetry
            ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t))
            : Promise.resolve(e < this.options.attempts);
        }
        getDelay() {
          return this.options.delay;
        }
      }),
      (Ve = class {
        constructor(e) {
          this.options = e;
        }
        shouldAttemptRetry(e, t) {
          return this.options.shouldRetry
            ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t))
            : Promise.resolve(e < this.options.attempts);
        }
        getDelay(e) {
          return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e);
        }
      }),
      (He = async (e) => {
        let t = {},
          n = async (e) => (typeof e == `function` ? await e() : e);
        if (e?.auth) {
          if (e.auth.type === `Bearer`) {
            let r = await n(e.auth.token);
            if (!r) return t;
            t.authorization = `Bearer ${r}`;
          } else if (e.auth.type === `Basic`) {
            let r = n(e.auth.username),
              i = n(e.auth.password);
            if (!r || !i) return t;
            t.authorization = `Basic ${btoa(`${r}:${i}`)}`;
          } else if (e.auth.type === `Custom`) {
            let r = n(e.auth.value);
            if (!r) return t;
            t.authorization = `${n(e.auth.prefix)} ${r}`;
          }
        }
        return t;
      }),
      (Ue = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i),
      (We = class e extends Error {
        constructor(t, n) {
          (super(n || JSON.stringify(t, null, 2)),
            (this.issues = t),
            Object.setPrototypeOf(this, e.prototype));
        }
      }),
      (J = [`get`, `post`, `put`, `patch`, `delete`]),
      (Y = async (e, t) => {
        var n, r, i;
        let { hooks: a, url: o, options: s } = await Be(e, t),
          c = pe(s),
          l = new AbortController(),
          u = s.signal ?? l.signal,
          d = be(o, s),
          f = ge(s),
          p = await me(s),
          m = _e(o, s),
          h = K(G({}, s), { url: d, headers: p, body: f, method: m, signal: u });
        for (let e of a.onRequest)
          if (e) {
            let t = await e(h);
            t instanceof Object && (h = t);
          }
        ((`pipeTo` in h && typeof h.pipeTo == `function`) || typeof t?.body?.pipe == `function`) &&
          (`duplex` in h || (h.duplex = `half`));
        let { clearTimeout: g } = ve(s, l),
          _ = await c(h.url, h);
        g();
        let v = { response: _, request: h };
        for (let e of a.onResponse)
          if (e) {
            let r = await e(
              K(G({}, v), {
                response: (n = t?.hookOptions) != null && n.cloneResponse ? _.clone() : _,
              })
            );
            r instanceof Response ? (_ = r) : r instanceof Object && (_ = r.response);
          }
        if (_.ok) {
          if (h.method === `HEAD`) return { data: ``, error: null };
          let e = ce(_),
            n = { data: ``, response: _, request: h };
          if (e === `json` || e === `text`) {
            let e = await _.text();
            n.data = await (h.jsonParser ?? de)(e);
          } else n.data = await _[e]();
          h?.output && h.output && !h.disableValidation && (n.data = await ye(h.output, n.data));
          for (let e of a.onSuccess)
            e &&
              (await e(
                K(G({}, n), {
                  response: (r = t?.hookOptions) != null && r.cloneResponse ? _.clone() : _,
                })
              ));
          return t?.throw ? n.data : { data: n.data, error: null };
        }
        let y = t?.jsonParser ?? de,
          b = await _.text(),
          x = le(b),
          S = x ? await y(b) : null,
          ee = {
            response: _,
            responseText: b,
            request: h,
            error: K(G({}, S), { status: _.status, statusText: _.statusText }),
          };
        for (let e of a.onError)
          e &&
            (await e(
              K(G({}, ee), {
                response: (i = t?.hookOptions) != null && i.cloneResponse ? _.clone() : _,
              })
            ));
        if (t?.retry) {
          let n = se(t.retry),
            r = t.retryAttempt ?? 0;
          if (await n.shouldAttemptRetry(r, _)) {
            for (let e of a.onRetry) e && (await e(v));
            let i = n.getDelay(r);
            return (
              await new Promise((e) => setTimeout(e, i)),
              await Y(e, K(G({}, t), { retryAttempt: r + 1 }))
            );
          }
        }
        if (t?.throw) throw new ze(_.status, _.statusText, x ? S : b);
        return { data: null, error: K(G({}, S), { status: _.status, statusText: _.statusText }) };
      }),
      (X = (e, t) => (n) => {
        e.current !== n && ((e.current = n), t());
      }),
      (Ge = `https://core.framerauth.com/v2`),
      (Z = () => typeof o < `u`),
      (Q = () => o.location.host.endsWith(`framercanvas.com`)),
      (Ke = () => {
        let e = Object.keys(o.parent);
        for (let t = e.length - 1; t >= 0; t--)
          try {
            let n = new URLSearchParams(o.parent[e[t]].location.search).get(`siteId`);
            if (n) return n;
          } catch {}
      }),
      ($ = async () => {
        let e = Ke() || ``;
        return await Y(`${Ge}/public/project/config`, { headers: { "x-framer-project-id": e } });
      }),
      typeof o < `u` && o.FramerAuth && console.log(`FramerAuth SDK (React): 2.1.12`));
  });
export {
  O as a,
  b as c,
  qe as d,
  w as f,
  k as g,
  te as h,
  B as i,
  re as l,
  ne as m,
  Ce as n,
  y as o,
  C as p,
  z as r,
  E as s,
  we as t,
  _ as u,
};
//# sourceMappingURL=framerauth.Bsg5VUt2.mjs.map
