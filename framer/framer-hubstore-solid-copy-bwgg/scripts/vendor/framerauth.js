"use strict";
(() => {
  var tt = Object.defineProperty,
    rt = Object.defineProperties,
    nt = Object.getOwnPropertyDescriptors,
    he = Object.getOwnPropertySymbols,
    ot = Object.prototype.hasOwnProperty,
    at = Object.prototype.propertyIsEnumerable,
    fe = (t, e, r) =>
      e in t ? tt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
    x = (t, e) => {
      for (var r in e || (e = {})) ot.call(e, r) && fe(t, r, e[r]);
      if (he) for (var r of he(e)) at.call(e, r) && fe(t, r, e[r]);
      return t;
    },
    U = (t, e) => rt(t, nt(e)),
    it = class extends Error {
      constructor(t, e, r) {
        (super(e || t.toString(), { cause: r }),
          (this.status = t),
          (this.statusText = e),
          (this.error = r));
      }
    },
    st = async (t, e) => {
      var r, n, o, a, i, u;
      let c = e || {},
        s = {
          onRequest: [e?.onRequest],
          onResponse: [e?.onResponse],
          onSuccess: [e?.onSuccess],
          onError: [e?.onError],
          onRetry: [e?.onRetry],
        };
      if (!e || !e?.plugins) return { url: t, options: c, hooks: s };
      for (let f of e?.plugins || []) {
        if (f.init) {
          let v = await ((r = f.init) == null ? void 0 : r.call(f, t.toString(), e));
          ((c = v.options || c), (t = v.url));
        }
        (s.onRequest.push((n = f.hooks) == null ? void 0 : n.onRequest),
          s.onResponse.push((o = f.hooks) == null ? void 0 : o.onResponse),
          s.onSuccess.push((a = f.hooks) == null ? void 0 : a.onSuccess),
          s.onError.push((i = f.hooks) == null ? void 0 : i.onError),
          s.onRetry.push((u = f.hooks) == null ? void 0 : u.onRetry));
      }
      return { url: t, options: c, hooks: s };
    },
    pe = class {
      constructor(t) {
        this.options = t;
      }
      shouldAttemptRetry(t, e) {
        return this.options.shouldRetry
          ? Promise.resolve(t < this.options.attempts && this.options.shouldRetry(e))
          : Promise.resolve(t < this.options.attempts);
      }
      getDelay() {
        return this.options.delay;
      }
    },
    lt = class {
      constructor(t) {
        this.options = t;
      }
      shouldAttemptRetry(t, e) {
        return this.options.shouldRetry
          ? Promise.resolve(t < this.options.attempts && this.options.shouldRetry(e))
          : Promise.resolve(t < this.options.attempts);
      }
      getDelay(t) {
        return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** t);
      }
    };
  function ct(t) {
    if (typeof t == "number") return new pe({ type: "linear", attempts: t, delay: 1e3 });
    switch (t.type) {
      case "linear":
        return new pe(t);
      case "exponential":
        return new lt(t);
      default:
        throw new Error("Invalid retry strategy");
    }
  }
  var dt = async (t) => {
      let e = {},
        r = async (n) => (typeof n == "function" ? await n() : n);
      if (t?.auth) {
        if (t.auth.type === "Bearer") {
          let n = await r(t.auth.token);
          if (!n) return e;
          e.authorization = `Bearer ${n}`;
        } else if (t.auth.type === "Basic") {
          let n = r(t.auth.username),
            o = r(t.auth.password);
          if (!n || !o) return e;
          e.authorization = `Basic ${btoa(`${n}:${o}`)}`;
        } else if (t.auth.type === "Custom") {
          let n = r(t.auth.value);
          if (!n) return e;
          e.authorization = `${r(t.auth.prefix)} ${n}`;
        }
      }
      return e;
    },
    ut = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function ht(t) {
    let e = t.headers.get("content-type"),
      r = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    if (!e) return "json";
    let n = e.split(";").shift() || "";
    return ut.test(n) ? "json" : r.has(n) || n.startsWith("text/") ? "text" : "blob";
  }
  function ft(t) {
    try {
      return (JSON.parse(t), !0);
    } catch {
      return !1;
    }
  }
  function be(t) {
    if (t === void 0) return !1;
    let e = typeof t;
    return e === "string" || e === "number" || e === "boolean" || e === null
      ? !0
      : e !== "object"
        ? !1
        : Array.isArray(t)
          ? !0
          : t.buffer
            ? !1
            : (t.constructor && t.constructor.name === "Object") || typeof t.toJSON == "function";
  }
  function me(t) {
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  function ge(t) {
    return typeof t == "function";
  }
  function pt(t) {
    if (t?.customFetchImpl) return t.customFetchImpl;
    if (typeof globalThis < "u" && ge(globalThis.fetch)) return globalThis.fetch;
    if (typeof window < "u" && ge(window.fetch)) return window.fetch;
    throw new Error("No fetch implementation found");
  }
  async function mt(t) {
    let e = new Headers(t?.headers),
      r = await dt(t);
    for (let [n, o] of Object.entries(r || {})) e.set(n, o);
    if (!e.has("content-type")) {
      let n = gt(t?.body);
      n && e.set("content-type", n);
    }
    return e;
  }
  function gt(t) {
    return be(t) ? "application/json" : null;
  }
  function bt(t) {
    if (!t?.body) return null;
    let e = new Headers(t?.headers);
    if (be(t.body) && !e.has("content-type")) {
      for (let [r, n] of Object.entries(t?.body))
        n instanceof Date && (t.body[r] = n.toISOString());
      return JSON.stringify(t.body);
    }
    return t.body;
  }
  function yt(t, e) {
    var r;
    if (e?.method) return e.method.toUpperCase();
    if (t.startsWith("@")) {
      let n = (r = t.split("@")[1]) == null ? void 0 : r.split("/")[0];
      return ve.includes(n) ? n.toUpperCase() : e?.body ? "POST" : "GET";
    }
    return e?.body ? "POST" : "GET";
  }
  function vt(t, e) {
    let r;
    return (
      !t?.signal && t?.timeout && (r = setTimeout(() => e?.abort(), t?.timeout)),
      {
        abortTimeout: r,
        clearTimeout: () => {
          r && clearTimeout(r);
        },
      }
    );
  }
  var wt = class ye extends Error {
    constructor(e, r) {
      (super(r || JSON.stringify(e, null, 2)),
        (this.issues = e),
        Object.setPrototypeOf(this, ye.prototype));
    }
  };
  async function kt(t, e) {
    let r = await t["~standard"].validate(e);
    if (r.issues) throw new wt(r.issues);
    return r.value;
  }
  var ve = ["get", "post", "put", "patch", "delete"];
  function Pt(t, e) {
    let { baseURL: r, params: n, query: o } = e || { query: {}, params: {}, baseURL: "" },
      a = t.startsWith("http") ? t.split("/").slice(0, 3).join("/") : r || "";
    if (t.startsWith("@")) {
      let v = t.toString().split("@")[1].split("/")[0];
      ve.includes(v) && (t = t.replace(`@${v}/`, "/"));
    }
    a.endsWith("/") || (a += "/");
    let [i, u] = t.replace(a, "").split("?"),
      c = new URLSearchParams(u);
    for (let [v, g] of Object.entries(o || {})) g != null && c.set(v, String(g));
    if (n)
      if (Array.isArray(n)) {
        let v = i.split("/").filter((g) => g.startsWith(":"));
        for (let [g, Q] of v.entries()) {
          let j = n[g];
          i = i.replace(Q, j);
        }
      } else for (let [v, g] of Object.entries(n)) i = i.replace(`:${v}`, String(g));
    ((i = i.split("/").map(encodeURIComponent).join("/")), i.startsWith("/") && (i = i.slice(1)));
    let s = c.toString();
    return (
      (s = s.length > 0 ? `?${s}`.replace(/\+/g, "%20") : ""),
      a.startsWith("http") ? new URL(`${i}${s}`, a) : `${a}${i}${s}`
    );
  }
  var h = async (t, e) => {
    var r, n, o, a, i, u, c, s;
    let { hooks: f, url: v, options: g } = await st(t, e),
      Q = pt(g),
      j = new AbortController(),
      Je = (r = g.signal) != null ? r : j.signal,
      Ve = Pt(v, g),
      Ge = bt(g),
      Ke = await mt(g),
      Qe = yt(v, g),
      p = U(x({}, g), { url: Ve, headers: Ke, body: Ge, method: Qe, signal: Je });
    for (let w of f.onRequest)
      if (w) {
        let y = await w(p);
        y instanceof Object && (p = y);
      }
    (("pipeTo" in p && typeof p.pipeTo == "function") ||
      typeof ((n = e?.body) == null ? void 0 : n.pipe) == "function") &&
      ("duplex" in p || (p.duplex = "half"));
    let { clearTimeout: Ye } = vt(g, j),
      d = await Q(p.url, p);
    Ye();
    let de = { response: d, request: p };
    for (let w of f.onResponse)
      if (w) {
        let y = await w(
          U(x({}, de), {
            response: (o = e?.hookOptions) != null && o.cloneResponse ? d.clone() : d,
          })
        );
        y instanceof Response ? (d = y) : y instanceof Object && (d = y.response);
      }
    if (d.ok) {
      if (!(p.method !== "HEAD")) return { data: "", error: null };
      let y = ht(d),
        E = { data: "", response: d, request: p };
      if (y === "json" || y === "text") {
        let O = await d.text(),
          et = await ((a = p.jsonParser) != null ? a : me)(O);
        E.data = et;
      } else E.data = await d[y]();
      p?.output && p.output && !p.disableValidation && (E.data = await kt(p.output, E.data));
      for (let O of f.onSuccess)
        O &&
          (await O(
            U(x({}, E), {
              response: (i = e?.hookOptions) != null && i.cloneResponse ? d.clone() : d,
            })
          ));
      return e?.throw ? E.data : { data: E.data, error: null };
    }
    let Ze = (u = e?.jsonParser) != null ? u : me,
      N = await d.text(),
      ue = ft(N),
      Y = ue ? await Ze(N) : null,
      Xe = {
        response: d,
        responseText: N,
        request: p,
        error: U(x({}, Y), { status: d.status, statusText: d.statusText }),
      };
    for (let w of f.onError)
      w &&
        (await w(
          U(x({}, Xe), {
            response: (c = e?.hookOptions) != null && c.cloneResponse ? d.clone() : d,
          })
        ));
    if (e?.retry) {
      let w = ct(e.retry),
        y = (s = e.retryAttempt) != null ? s : 0;
      if (await w.shouldAttemptRetry(y, d)) {
        for (let O of f.onRetry) O && (await O(de));
        let E = w.getDelay(y);
        return (
          await new Promise((O) => setTimeout(O, E)),
          await h(t, U(x({}, e), { retryAttempt: y + 1 }))
        );
      }
    }
    if (e?.throw) throw new it(d.status, d.statusText, ue ? Y : N);
    return { data: null, error: U(x({}, Y), { status: d.status, statusText: d.statusText }) };
  };
  var St = "https://core.framerauth.com/v2",
    Rt = "application/octet-stream",
    Et = (t) => {
      if (t instanceof Blob) return t;
      let e = typeof FormData < "u" && t instanceof FormData ? t.get("file") : t?.file;
      if (!(e instanceof Blob)) throw new Error("No image was provided");
      return e;
    },
    H = class {
      baseURL = null;
      useBearerAuth = !1;
      data;
      state;
      api;
      auth;
      constructor(e) {
        ((this.baseURL = null),
          (this.data = e.data),
          (this.state = e.state),
          (this.api = {
            fetchBookmarks: async () => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let r = await h(`${this.baseURL}/profile/bookmarks`, { ...this.authOptions() });
              if (!r.data) return r;
              let n = new Set(r.data),
                o = {};
              for (let a of n) o[a] = !0;
              return { data: o, error: null };
            },
            fetchProject: async () => await h(`${St}/public/project/config`),
          }),
          (this.auth = {
            getSession: async () => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let r = await h(`${this.baseURL}/get-session`, {
                method: "GET",
                ...this.authOptions(),
                query: { disableCookieCache: !0 },
              });
              return (
                r.data
                  ? (this.data.user.set(r.data.user),
                    this.data.session.set(r.data.session),
                    this.data.tags.set(r.data.user.tags ?? []))
                  : (this.data.user.set(null),
                    this.data.session.set(null),
                    this.data.tags.set([]),
                    this.data.bookmarks.set({}),
                    this.data.bearerToken.set(null)),
                r
              );
            },
            signUp: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let { fetchOptions: n, ...o } = r,
                a = this.authOptions(),
                i = { ...a, ...n, headers: { ...a.headers, ...n?.headers } },
                u = await h(`${this.baseURL}/sign-up/email`, {
                  ...i,
                  method: "POST",
                  body: o,
                  onSuccess: (c) => {
                    let s = c.response.headers.get("set-auth-token");
                    s && this.data.bearerToken.set(s);
                  },
                });
              return (
                u.error ||
                  (await this.auth.getSession(),
                  this.api.fetchBookmarks().then((c) => {
                    this.data.bookmarks.set(c.data ?? {});
                  })),
                u
              );
            },
            signIn: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let { fetchOptions: n, ...o } = r,
                a = this.authOptions(),
                i = { ...a, ...n, headers: { ...a.headers, ...n?.headers } },
                u = await h(`${this.baseURL}/sign-in/email`, {
                  ...i,
                  method: "POST",
                  body: o,
                  onSuccess: (c) => {
                    let s = c.response.headers.get("set-auth-token");
                    s && this.data.bearerToken.set(s);
                  },
                });
              return (
                u.error ||
                  (await this.auth.getSession(),
                  this.api.fetchBookmarks().then((c) => {
                    this.data.bookmarks.set(c.data ?? {});
                  })),
                u
              );
            },
            signInSocial: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = await h(`${this.baseURL}/sign-in/social`, {
                method: "POST",
                ...this.authOptions(),
                body: r,
              });
              return (n.data?.url && (window.location.href = n.data.url), n);
            },
            signOut: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = await h(`${this.baseURL}/sign-out`, {
                method: "POST",
                ...this.authOptions(),
                body: {},
              });
              return (
                this.data.user.set(null),
                this.data.session.set(null),
                this.data.tags.set([]),
                this.data.bookmarks.set({}),
                this.data.bearerToken.set(null),
                r?.redirectTo && (window.location.href = r.redirectTo),
                n
              );
            },
            sendOTP: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/email-otp/send-verification-otp`;
              return await h(n, { body: r, ...this.authOptions(), method: "POST" });
            },
            signInOTP: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/sign-in/email-otp`,
                o = await h(n, {
                  body: r,
                  ...this.authOptions(),
                  method: "POST",
                  onSuccess: (a) => {
                    let i = a.response.headers.get("set-auth-token");
                    i && this.data.bearerToken.set(i);
                  },
                });
              return (
                o.error ||
                  (await this.auth.getSession(),
                  this.api.fetchBookmarks().then((a) => {
                    this.data.bookmarks.set(a.data ?? {});
                  })),
                o
              );
            },
            updateProfile: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/profile`;
              return await h(n, { body: r, ...this.authOptions(), method: "PATCH" });
            },
            updateProfilePicture: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/profile/avatar`,
                o = this.authOptions();
              return await h(n, {
                ...o,
                method: "POST",
                headers: { ...o.headers, "Content-Type": Rt },
                body: Et(r),
              });
            },
            createBookmark: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/profile/bookmarks`;
              return await h(n, { body: r, ...this.authOptions(), method: "POST" });
            },
            deleteBookmark: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/profile/bookmarks/${r.bookmark_type}/${r.id}`;
              return await h(n, { ...this.authOptions(), method: "DELETE" });
            },
            sendForgotPasswordEmail: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/request-password-reset`;
              return await h(n, { body: r, ...this.authOptions(), method: "POST" });
            },
            resetPassword: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/reset-password`;
              return await h(n, { body: r, ...this.authOptions(), method: "POST" });
            },
            storeCheckout: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/store/checkout/session`;
              return await h(n, { body: r, ...this.authOptions(), method: "POST" });
            },
            storePortal: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/plugins/${r.pluginId}/portal`,
                o = this.authOptions();
              return await h(n, {
                ...o,
                method: "GET",
                headers: { ...o.headers, Accept: "application/json" },
                query: r.returnURL ? { returnURL: r.returnURL } : void 0,
              });
            },
            sendVerificationEmail: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = `${this.baseURL}/send-verification-email`;
              return await h(n, { body: r, ...this.authOptions(), method: "POST" });
            },
            exchangeOneTimeToken: async (r) => {
              if (!this.baseURL) throw new Error("Auth client not initialized");
              let n = await h(`${this.baseURL}/one-time-token/verify`, {
                method: "POST",
                body: { token: r },
              });
              return (n.data?.session?.token && this.data.bearerToken.set(n.data.session.token), n);
            },
          }));
      }
      updateBaseURL(e) {
        this.baseURL = e;
      }
      updateAuthMode(e) {
        this.useBearerAuth = e;
      }
      async handleOTTFromURL() {
        if (!this.useBearerAuth) return;
        let e = new URLSearchParams(window.location.search),
          r = e.get("ott");
        if (!r) return;
        e.delete("ott");
        let n = e.size
          ? `${window.location.pathname}?${e.toString()}${window.location.hash}`
          : `${window.location.pathname}${window.location.hash}`;
        (history.replaceState(null, "", n), await this.auth.exchangeOneTimeToken(r));
      }
      authOptions() {
        if (this.useBearerAuth) {
          let e = this.data.bearerToken.get();
          return e ? { headers: { Authorization: `Bearer ${e}` } } : {};
        }
        return { credentials: "include" };
      }
    };
  var R = [],
    T = 0,
    M = 4,
    Ot = 0,
    b = (t) => {
      let e = [],
        r = {
          get() {
            return (r.lc || r.listen(() => {})(), r.value);
          },
          lc: 0,
          listen(n) {
            return (
              (r.lc = e.push(n)),
              () => {
                for (let a = T + M; a < R.length;) R[a] === n ? R.splice(a, M) : (a += M);
                let o = e.indexOf(n);
                ~o && (e.splice(o, 1), --r.lc || r.off());
              }
            );
          },
          notify(n, o) {
            Ot++;
            let a = !R.length;
            for (let i of e) R.push(i, r.value, n, o);
            if (a) {
              for (T = 0; T < R.length; T += M) R[T](R[T + 1], R[T + 2], R[T + 3]);
              R.length = 0;
            }
          },
          off() {},
          set(n) {
            let o = r.value;
            o !== n && ((r.value = n), r.notify(o));
          },
          subscribe(n) {
            let o = r.listen(n);
            return (n(r.value), o);
          },
          value: t,
        };
      return r;
    };
  var Lt = 5,
    $ = 6,
    z = 10,
    Tt = (t, e, r, n) => (
      (t.events = t.events || {}),
      t.events[r + z] ||
        (t.events[r + z] = n((o) => {
          t.events[r].reduceRight((a, i) => (i(a), a), { shared: {}, ...o });
        })),
      (t.events[r] = t.events[r] || []),
      t.events[r].push(e),
      () => {
        let o = t.events[r],
          a = o.indexOf(e);
        (o.splice(a, 1),
          o.length || (delete t.events[r], t.events[r + z](), delete t.events[r + z]));
      }
    );
  var we = 1e3,
    Z = (t, e) =>
      Tt(
        t,
        (n) => {
          let o = e(n);
          o && t.events[$].push(o);
        },
        Lt,
        (n) => {
          let o = t.listen;
          t.listen = (...i) => (!t.lc && !t.active && ((t.active = !0), n()), o(...i));
          let a = t.off;
          return (
            (t.events[$] = []),
            (t.off = () => {
              (a(),
                setTimeout(() => {
                  if (t.active && !t.lc) {
                    t.active = !1;
                    for (let i of t.events[$]) i();
                    t.events[$] = [];
                  }
                }, we));
            }),
            () => {
              ((t.listen = o), (t.off = a));
            }
          );
        }
      );
  var I = (t = {}) => {
    let e = b(t);
    return (
      (e.setKey = function (r, n) {
        let o = e.value;
        typeof n > "u" && r in e.value
          ? ((e.value = { ...e.value }), delete e.value[r], e.notify(o, r))
          : e.value[r] !== n && ((e.value = { ...e.value, [r]: n }), e.notify(o, r));
      }),
      e
    );
  };
  var ke = (t) => t,
    _ = {},
    X = { addEventListener() {}, removeEventListener() {} };
  function At() {
    try {
      return typeof localStorage < "u";
    } catch {
      return !1;
    }
  }
  At() && (_ = localStorage);
  var xt = {
    addEventListener(t, e, r) {
      (window.addEventListener("storage", e), window.addEventListener("pageshow", r));
    },
    removeEventListener(t, e, r) {
      (window.removeEventListener("storage", e), window.removeEventListener("pageshow", r));
    },
  };
  typeof window < "u" && (X = xt);
  function k(t, e = void 0, r = {}) {
    let n = r.encode || ke,
      o = r.decode || ke,
      a = b(e),
      i = a.set;
    a.set = (s) => {
      let f = n(s);
      (typeof f > "u" ? delete _[t] : (_[t] = f), i(s));
    };
    function u(s) {
      s.key === t ? (s.newValue === null ? i(e) : i(o(s.newValue))) : _[t] || i(e);
    }
    function c() {
      a.set(_[t] ? o(_[t]) : e);
    }
    return (
      Z(a, () => {
        if ((c(), r.listen !== !1))
          return (
            X.addEventListener(t, u, c),
            () => {
              X.removeEventListener(t, u, c);
            }
          );
      }),
      a
    );
  }
  var Ut = "framerauth_v2_",
    Pe = new TextEncoder(),
    _t = new TextDecoder();
  function Se() {
    let t = typeof window < "u" ? window.location.hostname : "1f8cXd6c7b4a3vL4z5746oUgQ28190adbef";
    return Pe.encode(Ut + t);
  }
  function Dt(t) {
    let e = Se(),
      r = Pe.encode(t),
      n = new Uint8Array(r.length);
    for (let o = 0; o < r.length; o++) n[o] = r[o] ^ e[o % e.length];
    return n;
  }
  function Ft(t) {
    let e = Dt(t),
      r = Array.from(e, (n) => String.fromCharCode(n)).join("");
    return btoa(r);
  }
  function Ct(t) {
    let e = Se(),
      r = atob(t),
      n = Uint8Array.from(r, (a) => a.charCodeAt(0)),
      o = new Uint8Array(n.length);
    for (let a = 0; a < n.length; a++) o[a] = n[a] ^ e[a % e.length];
    return _t.decode(o);
  }
  function P({ obfuscate: t }) {
    return (e) => {
      let r = JSON.stringify(e);
      return (t && (r = Ft(r)), r);
    };
  }
  function S({ deobfuscate: t, fallback: e, validator: r }) {
    return (n) => {
      try {
        if (!n) return e;
        t && (n = Ct(n));
        let o = JSON.parse(n);
        if (r) {
          let a = r(o);
          return a === null ? e : a;
        }
        return o;
      } catch {
        return e;
      }
    };
  }
  var Re = k("fa-project", null, {
      encode: P({ obfuscate: !0 }),
      decode: S({ deobfuscate: !0, fallback: null }),
    }),
    Ee = b(!1);
  var Oe = k("fa-tags", [], {
      encode: P({ obfuscate: !0 }),
      decode: S({ deobfuscate: !0, fallback: [] }),
    }),
    Le = b(!1);
  function Te(t) {
    return Array.isArray(t)
      ? t.length === 0
        ? !0
        : t.every(
            (e) =>
              e !== null &&
              typeof e == "object" &&
              typeof e.id == "string" &&
              typeof e.name == "string"
          )
      : !1;
  }
  function Bt(t) {
    if (!t || typeof t != "object") return !1;
    let e = t;
    return typeof e.id != "string" ||
      typeof e.email != "string" ||
      typeof e.name != "string" ||
      typeof e.email_verified != "boolean" ||
      !(e.created_at instanceof Date || typeof e.created_at == "string") ||
      !(e.updated_at instanceof Date || typeof e.updated_at == "string")
      ? !1
      : Te(e.tags);
  }
  function jt(t) {
    if (!t || typeof t != "object") return !1;
    let e = t;
    return (
      typeof e.id == "string" &&
      typeof e.user_id == "string" &&
      typeof e.token == "string" &&
      (e.expires_at instanceof Date || typeof e.expires_at == "string") &&
      (e.created_at instanceof Date || typeof e.created_at == "string") &&
      (e.updated_at instanceof Date || typeof e.updated_at == "string")
    );
  }
  function Ae(t) {
    if (!t || typeof t != "object") return null;
    let e = t;
    return (Te(e.tags) || (e.tags = []), Bt(e) ? e : null);
  }
  function xe(t) {
    return jt(t) ? t : null;
  }
  function Nt(t) {
    return !t || typeof t != "object" || Array.isArray(t)
      ? !1
      : Object.entries(t).every(([e, r]) => typeof e == "string" && typeof r == "boolean");
  }
  function Ue(t) {
    return !t || typeof t != "object" || Array.isArray(t) ? {} : Nt(t) ? t : {};
  }
  var _e = k("fa-user", null, {
      encode: P({ obfuscate: !0 }),
      decode: S({ deobfuscate: !0, fallback: null, validator: Ae }),
    }),
    De = b(!1);
  var Fe = k("fa-session", null, {
      encode: P({ obfuscate: !0 }),
      decode: S({ deobfuscate: !0, fallback: null, validator: xe }),
    }),
    Ce = b(!1);
  var Be = b(!0);
  var je = "This page is restricted.",
    Ht = {
      lock: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path
        d="M 2 7.5 L 14 7.5 L 14 12.5 C 14 14.157 12.657 15.5 11 15.5 L 5 15.5 C 3.343 15.5 2 14.157 2 12.5 Z"
        fill="currentColor"
      ></path>
      <path
        d="M 3 6.5 C 3 3.739 5.239 1.5 8 1.5 L 8 1.5 C 10.761 1.5 13 3.739 13 6.5 L 13 9.5 C 13 12.261 10.761 14.5 8 14.5 L 8 14.5 C 5.239 14.5 3 12.261 3 9.5 Z"
        fill="transparent"
        stroke-width="2"
        stroke="currentColor"
      ></path>
    </svg>
  `,
      warning: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path
        d="M 6.7 1.75 C 7.278 0.75 8.722 0.75 9.3 1.75 L 15.36 12.25 C 15.938 13.25 15.216 14.5 14.061 14.5 L 1.939 14.5 C 0.784 14.5 0.062 13.25 0.64 12.25 Z"
        fill="transparent"
        stroke-width="1.5"
        stroke="currentColor"
        stroke-linejoin="round"
      ></path>
      <path
        d="M 8 5 L 8 9"
        fill="transparent"
        stroke-width="1.5"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
      <path
        d="M 8 11.75 L 8 11.75"
        fill="transparent"
        stroke-width="1.75"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
    </svg>
  `,
    },
    ee = class t extends HTMLElement {
      static styles = `
    :host {
      --color-primary: #f9f9f9;
      --color-secondary: #333333;
      --color-tertiary: #777777;
      --color-sheet: #ffffff;
      --color-border: #ffffff;
      --button-background-color: #f2f2f2;
      --button-background-hover-color: #ededed;
      --button-background-active-color: #e8e8e8;
      --button-title-color: #333333;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
      min-height: 100vh;
      background-color: var(--color-primary, white);
      font-family: inherit;
      z-index: 2147483647;
      overflow: hidden;
      visibility: visible;
    }

    :host([theme="warning"]) {
      --color-sheet: #fff7f0;
      --color-border: #c77126;
      --color-heading: #c77126;
      --color-secondary: #c77126;
      --button-background-color: #c77126;
      --button-background-hover-color: #b3671f;
      --button-background-active-color: #9e5b1b;
      --button-title-color: #ffffff;
    }

    .section {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
    }

    main {
      margin: 15px;
      box-sizing: border-box;
      max-width: 320px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      background: var(--color-sheet);
      padding: 30px;
      border-radius: 25px;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 0.602187px 0.602187px -1.25px,
        rgba(0, 0, 0, 0.063) 0px 2.28853px 2.28853px -2.5px,
        rgba(0, 0, 0, 0.024) 0px 10px 10px -3.75px;
      border: 1px solid var(--color-border);
    }

    .icon {
      margin-bottom: 15px;
      color: var(--color-secondary);
    }

    .heading {
      color: var(--color-heading, var(--color-secondary));
      margin-bottom: 8px;
      line-height: 1.4em;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
    }

    .description {
      color: var(--color-tertiary);
      margin-bottom: 30px;
      line-height: 1.4em;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      white-space: pre-line;
    }

    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .btn--action {
      position: relative;
      height: 40px;
      width: 100%;
      padding: 0 10px 1px;
      border: none;
      margin: 0;
      z-index: 0;
      overflow: hidden;
      box-sizing: border-box;
      background-color: var(--button-background-color);
      border-radius: 8px;
      color: var(--button-title-color);
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn--action::before {
      position: absolute;
      z-index: -100;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      content: "";
      opacity: 0;
      transition: opacity 0.2s;
    }

    .btn--action:not(:disabled):hover::before {
      opacity: 1;
      background-color: var(--button-background-hover-color);
    }

    .btn--action:not(:disabled):active::before {
      opacity: 1;
      background-color: var(--button-background-active-color);
    }
  `;
      shadow;
      config = { heading: "", message: je, actionLabel: "", actionHref: "", icon: "lock" };
      onAction;
      handleAction = () => {
        this.onAction?.();
      };
      static get observedAttributes() {
        return ["heading", "message", "action-label", "action-href", "icon"];
      }
      constructor() {
        (super(), (this.shadow = this.attachShadow({ mode: "closed" })));
      }
      attributeChangedCallback(e, r, n) {
        switch (e) {
          case "heading":
            this.config.heading = n || "";
            break;
          case "message":
            this.config.message = n || je;
            break;
          case "action-label":
            this.config.actionLabel = n || "";
            break;
          case "action-href":
            this.config.actionHref = n || "";
            break;
          case "icon":
            this.config.icon = n === "warning" ? "warning" : "lock";
            break;
        }
        this.isConnected && this.render();
      }
      connectedCallback() {
        ((this.style.fontFamily = getComputedStyle(document.body).fontFamily),
          this.render(),
          this.focusInitial());
      }
      focusInitial() {
        (
          this.shadow.querySelector(".btn--action") ?? this.shadow.querySelector(".section")
        )?.focus();
      }
      renderAction() {
        return this.config.actionLabel
          ? this.config.actionHref
            ? '<a class="btn--action" target="_blank" rel="noopener noreferrer"></a>'
            : this.onAction
              ? '<button class="btn--action" type="button"></button>'
              : ""
          : "";
      }
      render() {
        let e = this.config.heading.length > 0,
          r = e
            ? 'aria-labelledby="fa-overlay-heading" aria-describedby="fa-overlay-description"'
            : 'aria-labelledby="fa-overlay-description"',
          n = document.createElement("template");
        ((n.innerHTML = `
      <style>${t.styles}</style>
      <div class="section" role="dialog" aria-modal="true" tabindex="-1" ${r}>
        <main>
          <div class="icon" aria-hidden="true">${Ht[this.config.icon]}</div>
          <div id="container">
            ${e ? '<div class="heading" id="fa-overlay-heading"></div>' : ""}
            <div class="description" id="fa-overlay-description"></div>
            ${this.renderAction()}
          </div>
        </main>
      </div>
    `),
          this.shadow.replaceChildren(n.content.cloneNode(!0)));
        let o = this.shadow.querySelector(".heading");
        o && (o.textContent = this.config.heading);
        let a = this.shadow.querySelector(".description");
        a && (a.textContent = this.config.message);
        let i = this.shadow.querySelector(".btn--action");
        i &&
          ((i.textContent = this.config.actionLabel),
          i instanceof HTMLAnchorElement
            ? (i.href = this.config.actionHref)
            : i.addEventListener("click", this.handleAction));
      }
    },
    te = "fa-overlay";
  function Mt() {
    customElements.get(te) || customElements.define(te, ee);
  }
  function B(t) {
    Mt();
    let e = document.createElement(te);
    return (
      t.onAction && (e.onAction = t.onAction),
      t.heading && e.setAttribute("heading", t.heading),
      e.setAttribute("message", t.message),
      t.actionLabel && e.setAttribute("action-label", t.actionLabel),
      t.actionHref && e.setAttribute("action-href", t.actionHref),
      t.icon && e.setAttribute("icon", t.icon),
      t.theme && e.setAttribute("theme", t.theme),
      e
    );
  }
  function L() {
    document.body.style.visibility = "hidden";
  }
  function A() {
    document.body.style.visibility = "visible";
  }
  var $t = "/sign-in",
    zt = "This page is restricted.",
    W = null;
  function q(t, e) {
    let n = document.querySelector(`meta[name="${t}"]`)?.content.trim();
    return n || (e && document.querySelector(`meta[name="${e}"]`)?.content.trim()) || null;
  }
  function It(t) {
    return t
      ? t
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean)
      : [];
  }
  function re() {
    return (
      W ||
      ((W = {
        errorPath: m(q("fa:error-path", "framerauth:error-path") ?? $t),
        boostPatterns: It(q("fa:boost", "framerauth:boost")),
        router: q("fa:router"),
        accessDeniedMessage: q("fa:access-denied-message") ?? zt,
      }),
      W)
    );
  }
  function Wt() {
    return re().errorPath;
  }
  function m(t) {
    let r = (t ?? "").trim();
    if (r.includes("://"))
      try {
        r = new URL(r).pathname;
      } catch {}
    return (
      (r = r.split("#")[0] ?? ""),
      (r = r.split("?")[0] ?? ""),
      r.length === 0 && (r = "/"),
      r.startsWith("/") || (r = `/${r}`),
      r !== "/" && r.endsWith("/") && (r = r.slice(0, -1)),
      r
    );
  }
  function qt(t, e) {
    return m(t) === m(e);
  }
  function J(t = window.location.pathname) {
    return m(t) === "/";
  }
  function D(t = window.location.pathname, e = Wt()) {
    return qt(t, e);
  }
  function Ne(t) {
    let e = t
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => {
        if (r === "*" || r === "/*") return { kind: "all" };
        let n = r.startsWith("/") ? r : `/${r}`;
        return n.endsWith("/**")
          ? { kind: "deep", base: m(n.slice(0, -3)) }
          : n.endsWith("/*")
            ? { kind: "oneSegment", base: m(n.slice(0, -2)) }
            : n.endsWith("*")
              ? { kind: "prefixPathSegment", base: m(n.slice(0, -1)) }
              : { kind: "exact", base: m(n) };
      });
    return (r) => {
      let n = m(r);
      return e.some((o) => {
        if (o.kind === "all") return !0;
        if (o.kind === "exact") return n === o.base;
        if (o.kind === "deep") return n.startsWith(`${o.base}/`);
        if (o.kind === "oneSegment") {
          if (!n.startsWith(`${o.base}/`)) return !1;
          let a = n.slice(o.base.length + 1);
          return a.length > 0 && !a.includes("/");
        }
        return n === o.base || n.startsWith(`${o.base}/`);
      });
    };
  }
  var V = class {
    hasAccess;
    isPublicPath;
    errorPath;
    forceFallbackOverlay;
    accessDeniedMessage;
    onError;
    originalPushState;
    originalReplaceState;
    isMonkeyPatched = !1;
    navigationHandler = null;
    navigationSuccessHandler = null;
    fallbackPopStateHandler = null;
    lockedOverlay = null;
    shouldReloadAfterErrorRedirect = !1;
    isObservingNavigation = !1;
    constructor(e) {
      ((this.hasAccess = e.hasAccess),
        (this.isPublicPath = e.isPublicPath),
        (this.errorPath = e.errorPath),
        (this.forceFallbackOverlay = e.forceFallbackOverlay),
        (this.accessDeniedMessage = e.accessDeniedMessage),
        (this.onError = e.onError),
        (this.originalPushState = history.pushState.bind(history)),
        (this.originalReplaceState = history.replaceState.bind(history)));
    }
    normalizeToPath(e) {
      if (e instanceof URL) return m(e.pathname);
      if (e.startsWith("./")) return m(e.slice(1));
      if (e.startsWith("/")) return m(e);
      try {
        let r = new URL(e);
        return m(r.pathname);
      } catch {
        return m(e.startsWith("/") ? e : "/" + e);
      }
    }
    normalizePathInput(e) {
      let r = e.startsWith("/") ? e : `/${e}`;
      return m(r);
    }
    checkAccess(e) {
      let r = this.normalizePathInput(e);
      if (D(r, this.errorPath) || this.isPublicPath(r)) return !0;
      try {
        return this.hasAccess(r);
      } catch {
        return !1;
      }
    }
    isOnErrorPage() {
      let e = this.normalizePathInput(window.location.pathname);
      return D(e, this.errorPath);
    }
    redirectToError() {
      if (this.isOnErrorPage()) {
        A();
        return;
      }
      window.location.replace(this.errorPath);
    }
    handleAccessDenied(e) {
      (e && this.onError && this.onError(e), this.redirectToError());
    }
    monkeyPatchHistory() {
      if (this.isMonkeyPatched) return;
      let e = this;
      ((history.pushState = function (r, n, o) {
        if (o) {
          let a = e.normalizeToPath(o);
          e.checkAccess(a) || (L(), e.isObservingNavigation || e.renderLockedOverlay());
        }
        return e.originalPushState.call(this, r, n, o);
      }),
        (history.replaceState = function (r, n, o) {
          if (o) {
            let a = e.normalizeToPath(o);
            e.checkAccess(a) || (L(), e.isObservingNavigation || e.renderLockedOverlay());
          }
          return e.originalReplaceState.call(this, r, n, o);
        }),
        (this.isMonkeyPatched = !0));
    }
    startObservingNavigation() {
      if (this.forceFallbackOverlay) return !1;
      let e = window.navigation;
      return !e || this.navigationHandler
        ? !1
        : ((this.navigationHandler = (r) => {
            let n = r,
              o = n.destination?.url;
            if (!o) return;
            let a = new URL(o);
            if (!(a.origin !== window.location.origin || this.checkAccess(a.pathname))) {
              if ((L(), n.canIntercept && r.cancelable && typeof n.intercept == "function")) {
                n.intercept({
                  precommitHandler: (u) => {
                    (u.redirect(this.errorPath, {
                      history: n.navigationType === "push" ? "push" : "replace",
                    }),
                      (this.shouldReloadAfterErrorRedirect = !0));
                  },
                });
                return;
              }
              this.renderLockedOverlay();
            }
          }),
          (this.navigationSuccessHandler = () => {
            this.shouldReloadAfterErrorRedirect &&
              this.isOnErrorPage() &&
              ((this.shouldReloadAfterErrorRedirect = !1), window.location.reload());
          }),
          e.addEventListener("navigate", this.navigationHandler),
          e.addEventListener("navigatesuccess", this.navigationSuccessHandler),
          (this.isObservingNavigation = !0),
          !0);
    }
    stopObservingNavigation() {
      let e = window.navigation;
      !e ||
        !this.navigationHandler ||
        (e.removeEventListener("navigate", this.navigationHandler),
        this.navigationSuccessHandler &&
          e.removeEventListener("navigatesuccess", this.navigationSuccessHandler),
        (this.navigationHandler = null),
        (this.navigationSuccessHandler = null),
        (this.shouldReloadAfterErrorRedirect = !1),
        (this.isObservingNavigation = !1));
    }
    startObservingFallbackPopState() {
      this.fallbackPopStateHandler ||
        ((this.fallbackPopStateHandler = () => {
          if (!this.checkAccess(window.location.pathname)) {
            (L(), this.renderLockedOverlay());
            return;
          }
          (this.removeLockedOverlay(), A());
        }),
        window.addEventListener("popstate", this.fallbackPopStateHandler));
    }
    stopObservingFallbackPopState() {
      this.fallbackPopStateHandler &&
        (window.removeEventListener("popstate", this.fallbackPopStateHandler),
        (this.fallbackPopStateHandler = null));
    }
    renderLockedOverlay() {
      if (this.lockedOverlay) return;
      this.startObservingFallbackPopState();
      let e = B({
        message: this.accessDeniedMessage,
        actionLabel: "Back",
        onAction: () => history.back(),
      });
      ((e.id = "fa-access-denied"),
        document.documentElement.appendChild(e),
        (this.lockedOverlay = e));
    }
    removeLockedOverlay() {
      (this.lockedOverlay?.remove(), (this.lockedOverlay = null));
    }
    restoreHistory() {
      this.isMonkeyPatched &&
        ((history.pushState = this.originalPushState),
        (history.replaceState = this.originalReplaceState),
        (this.isMonkeyPatched = !1));
    }
    start() {
      (this.stop(), this.startObservingNavigation(), this.monkeyPatchHistory());
    }
    stop() {
      (this.restoreHistory(),
        this.stopObservingNavigation(),
        this.stopObservingFallbackPopState(),
        this.removeLockedOverlay(),
        A());
    }
  };
  var He = k("fa-bookmarks", I(), {
      encode: P({ obfuscate: !0 }),
      decode: S({ deobfuscate: !0, fallback: {}, validator: Ue }),
    }),
    Me = b(!1);
  var $e = k("fa-bearer-token", null, {
    encode: P({ obfuscate: !0 }),
    decode: S({ deobfuscate: !0, fallback: null }),
  });
  var ze = (t, e) => {
    let r = m(e),
      n = t.data.user.get(),
      o = t.data.session.get(),
      a = t.data.project.get();
    if (!a) return !1;
    if (!Object.prototype.hasOwnProperty.call(a.pages, r)) return !0;
    if (!n || !o) return !1;
    let u = a.pages[r];
    return u.length === 0 ? !0 : u.some((c) => n.tags.find((s) => s.id === c));
  };
  console.log("FramerAuth SDK (JavaScript): 2.1.12");
  var Jt = "/v2",
    Vt = 0,
    Ie = "https://frameauth.com/guides-v2/configuration-error",
    Gt = "https://app.frameauth.com",
    l = new H({
      data: { user: _e, project: Re, tags: Oe, bookmarks: He, session: Fe, bearerToken: $e },
      state: {
        initializing: Be,
        userLoading: De,
        projectLoading: Ee,
        tagsLoading: Le,
        bookmarksLoading: Me,
        sessionLoading: Ce,
      },
    });
  window.FramerAuth = l;
  var F = re(),
    We = Ne(F.boostPatterns),
    C = null,
    ne = !1,
    oe = !1;
  function ae(t) {
    return t?.status === 404;
  }
  function ie(t) {
    return t?.status === 403;
  }
  function Kt() {
    return ne || oe;
  }
  function se(t) {
    if (oe) return;
    ((oe = !0),
      l.data.project.set(null),
      l.state.projectLoading.set(!1),
      C?.stop(),
      (C = null),
      L());
    let e = B({
      heading: "FrameAuth - Action required",
      message: t ?? "",
      actionLabel: "Open FrameAuth dashboard",
      actionHref: Gt,
      icon: "warning",
      theme: "warning",
    });
    ((e.id = "fa-project-suspended"), document.documentElement.appendChild(e));
  }
  function le() {
    if (ne) return;
    if (((ne = !0), l.data.project.set(null), l.state.projectLoading.set(!1), J())) {
      (console.warn(
        `FramerAuth: this domain is not linked to a FramerAuth project. The home page is shown signed-out; other pages show a warning. Fix: ${Ie}`
      ),
        C || K(),
        A());
      return;
    }
    (C?.stop(), (C = null), L());
    let t = B({
      heading: "FrameAuth can\u2019t verify this domain",
      message:
        "This site has FrameAuth installed which handles sign-up, sign-in, user accounts, and member-only content. Access stays locked until this domain is verified.",
      actionLabel: "Fix this",
      actionHref: Ie,
      icon: "warning",
      theme: "warning",
    });
    ((t.id = "fa-project-not-configured"), document.documentElement.appendChild(t));
  }
  function Qt() {
    return D() ? !0 : l.data.project.get() !== null && We(window.location.pathname);
  }
  function G(t) {
    let e = qe(t);
    if (!e) throw new Error("Unable to initialize FramerAuth: project tenantHost is missing");
    (l.updateBaseURL(`https://${e}${Jt}`), l.updateAuthMode(Yt(t)));
  }
  function Yt(t) {
    return t.sessionTransport === "bearer";
  }
  function qe(t) {
    if (t.customDomain) return t.customDomain;
    let e = Zt(t);
    return e ? `${t.slug}.${e}` : null;
  }
  function Zt(t) {
    return Vt || t.tenantHost || null;
  }
  function ce() {
    l.api.fetchBookmarks().then(({ data: t }) => {
      l.data.bookmarks.set(t ?? {});
    });
  }
  function Xt() {
    return new V({
      hasAccess: (t) => ze(l, t),
      isPublicPath: (t) => J(t) || We(t),
      errorPath: F.errorPath,
      forceFallbackOverlay: F.router === "overlay",
      accessDeniedMessage: F.accessDeniedMessage,
      onError: (t) => {
        console.error("[Router] Error in router:", t);
      },
    });
  }
  function K() {
    let t = Xt();
    return t.checkAccess(window.location.pathname)
      ? (t.start(), (C = t), !0)
      : (t.handleAccessDenied(), !1);
  }
  function er() {
    let t = l.data.project.get();
    return (
      t && qe(t)
        ? (G(t),
          l.api
            .fetchProject()
            .then((e) => {
              e.data
                ? (l.data.project.set(e.data), G(e.data))
                : ae(e.error)
                  ? le()
                  : ie(e.error) && se(e.error.message);
            })
            .catch((e) => {
              console.error("Failed to refresh FramerAuth project:", e);
            }),
          l
            .handleOTTFromURL()
            .then(() => (Kt() ? null : l.auth.getSession()))
            .then((e) => {
              e && e.data !== null && ce();
            })
            .catch((e) => {
              console.error("Failed to refresh FramerAuth session:", e);
            }))
        : (l.state.projectLoading.set(!0),
          l.api
            .fetchProject()
            .then((e) => {
              if (e.data)
                return (
                  l.data.project.set(e.data),
                  G(e.data),
                  l.state.projectLoading.set(!1),
                  l.handleOTTFromURL().then(() => l.auth.getSession())
                );
              if (ae(e.error)) {
                le();
                return;
              }
              if (ie(e.error)) {
                se(e.error.message);
                return;
              }
              l.state.projectLoading.set(!1);
            })
            .then((e) => {
              e && e.data !== null && ce();
            })
            .catch((e) => {
              (console.error("Failed to initialize FramerAuth in the background:", e),
                l.state.projectLoading.set(!1));
            })),
      K()
    );
  }
  async function tr() {
    L();
    let t = l.data.project.get(),
      e = await l.api.fetchProject();
    if (e.data) ((t = e.data), l.data.project.set(t));
    else {
      if (ae(e.error)) return (le(), !1);
      if (ie(e.error)) return (se(e.error.message), !1);
      if (!t) throw new Error(e.error.message || "Unable to load FramerAuth project!");
    }
    (G(t), await l.handleOTTFromURL(), (await l.auth.getSession()).data !== null && ce());
    let n = K();
    return (n && A(), n);
  }
  async function rr() {
    l.state.initializing.set(!0);
    try {
      (Qt() ? er() : await tr()) && window.dispatchEvent(new CustomEvent("framerauth:initialized"));
    } catch (t) {
      (console.error("Failed to initialize FramerAuth:", t),
        J() || D(window.location.pathname, F.errorPath)
          ? (K(), A())
          : window.location.replace(F.errorPath),
        window.dispatchEvent(
          new CustomEvent("framerauth:initialization-failed", { detail: { error: t } })
        ));
    } finally {
      l.state.initializing.set(!1);
    }
  }
  rr();
})();
