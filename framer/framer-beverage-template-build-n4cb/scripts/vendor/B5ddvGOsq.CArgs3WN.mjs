import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  _ as f,
  a as p,
  b as m,
  c as h,
  f as g,
  g as _,
  i as v,
  j as ee,
  k as y,
  l as b,
  o as x,
  s as S,
  v as te,
  w as ne,
  y as C,
} from "./react.CAGFp8w4.mjs";
import { S as w, a as T, n as E, r as re, t as D } from "./motion.D9nDYnVb.mjs";
import {
  B as ie,
  C as O,
  Ct as ae,
  D as k,
  E as A,
  Et as oe,
  K as j,
  M,
  N as se,
  S as ce,
  T as N,
  at as le,
  bt as ue,
  c as de,
  ct as fe,
  i as P,
  it as pe,
  j as F,
  m as I,
  mt as me,
  o as L,
  vt as he,
  w as R,
  x as ge,
  xt as _e,
  z,
} from "./framer.yhOKXYuv.mjs";
import {
  a as ve,
  c as ye,
  d as be,
  i as xe,
  l as Se,
  n as Ce,
  o as we,
  r as Te,
  s as Ee,
  t as De,
  u as Oe,
} from "./Shopify_client.C7pIHrtI.mjs";
function ke(e, t) {
  if (t.has(e)) throw TypeError(`Cannot initialize the same private elements twice on an object`);
}
function Ae(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function je(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable) throw TypeError(`attempted to set read only private field`);
    t.value = n;
  }
}
function Me(e, t) {
  if (t.set) {
    if (!t.get) throw TypeError(`attempted to read set only private field`);
    return (
      `__destrWrapper` in t ||
        (t.__destrWrapper = {
          set value(n) {
            t.set.call(e, n);
          },
          get value() {
            return t.get.call(e);
          },
        }),
      t.__destrWrapper
    );
  } else {
    if (!t.writable) throw TypeError(`attempted to set read only private field`);
    return t;
  }
}
function Ne(e, t, n) {
  if (!t.has(e)) throw TypeError(`attempted to ` + n + ` private field on non-instance`);
  return t.get(e);
}
function B(e, t) {
  return Ae(e, Ne(e, t, `get`));
}
function V(e, t, n) {
  (ke(e, t), t.set(e, n));
}
function H(e, t, n) {
  return (je(e, Ne(e, t, `set`), n), n);
}
function Pe(e, t) {
  return Me(e, Ne(e, t, `update`));
}
function U(e, t, n) {
  if (!t.has(e)) throw TypeError(`attempted to get private field on non-instance`);
  return n;
}
function Fe(e, t) {
  (ke(e, t), t.add(e));
}
function W() {}
function Ie(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Le(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Re(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ze(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Be(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== He(o, t.options)) return !1;
    } else if (!We(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return (
    (typeof s != `boolean` || t.isStale() === s) &&
    (!i || i === t.state.fetchStatus) &&
    !(a && !a(t))
  );
}
function Ve(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Ue(t.options.mutationKey) !== Ue(a)) return !1;
    } else if (!We(t.options.mutationKey, a)) return !1;
  }
  return (!r || t.state.status === r) && !(i && !i(t));
}
function He(e, t) {
  return (t?.queryKeyHashFn || Ue)(e);
}
function Ue(e) {
  return JSON.stringify(e, (e, t) =>
    Je(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t
  );
}
function We(e, t) {
  return (
    e === t ||
    (typeof e == typeof t &&
      !(!e || !t || typeof e != `object` || typeof t != `object`) &&
      Object.keys(t).every((n) => We(e[n], t[n])))
  );
}
function Ge(e, t) {
  if (e === t) return e;
  let n = qe(e) && qe(t);
  if (n || (Je(e) && Je(t))) {
    let r = n ? e : Object.keys(e),
      i = r.length,
      a = n ? t : Object.keys(t),
      o = a.length,
      s = n ? [] : {},
      c = new Set(r),
      l = 0;
    for (let r = 0; r < o; r++) {
      let i = n ? r : a[r];
      ((!n && c.has(i)) || n) && e[i] === void 0 && t[i] === void 0
        ? ((s[i] = void 0), l++)
        : ((s[i] = Ge(e[i], t[i])), s[i] === e[i] && e[i] !== void 0 && l++);
    }
    return i === o && l === i ? e : s;
  }
  return t;
}
function Ke(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function qe(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Je(e) {
  if (!Ye(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return (
    !!Ye(n) && !!n.hasOwnProperty(`isPrototypeOf`) && Object.getPrototypeOf(e) === Object.prototype
  );
}
function Ye(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Xe(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : !1 === n.structuralSharing
      ? t
      : Ge(e, t);
}
function Ze(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Qe(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
function $e(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : e.queryFn && e.queryFn !== Vn
      ? e.queryFn
      : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
}
function et(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function tt() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.status = `pending`),
    n.catch(() => {}),
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
function nt(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function rt(e) {
  return (e ?? `online`) !== `online` || Un.isOnline();
}
function it(e) {
  let t,
    n = !1,
    r = 0,
    i = tt(),
    a = () => i.status !== `pending`,
    o = () => Hn.isFocused() && (e.networkMode === `always` || Un.isOnline()) && e.canRun(),
    s = () => rt(e.networkMode) && e.canRun(),
    c = (e) => {
      a() || (t?.(), i.resolve(e));
    },
    l = (e) => {
      a() || (t?.(), i.reject(e));
    },
    u = () =>
      new Promise((n) => {
        ((t = (e) => {
          (a() || o()) && n(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((t = void 0), a() || e.onContinue?.());
      }),
    d = () => {
      if (a()) return;
      let t,
        i = r === 0 ? e.initialPromise : void 0;
      try {
        t = i ?? e.fn();
      } catch (e) {
        t = Promise.reject(e);
      }
      Promise.resolve(t)
        .then(c)
        .catch((t) => {
          if (a()) return;
          let i = e.retry ?? (Bn ? 0 : 3),
            s = e.retryDelay ?? nt,
            c = typeof s == `function` ? s(r, t) : s,
            f = !0 === i || (typeof i == `number` && r < i) || (typeof i == `function` && i(r, t));
          var p;
          !n && f
            ? (r++,
              e.onFail?.(r, t),
              ((p = c),
              new Promise((e) => {
                setTimeout(e, p);
              }))
                .then(() => (o() ? void 0 : u()))
                .then(() => {
                  n ? l(t) : d();
                }))
            : l(t);
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: (t) => {
      a() || (l(new Wn(t)), e.abort?.());
    },
    continue: () => (t?.(), i),
    cancelRetry: () => {
      n = !0;
    },
    continueRetry: () => {
      n = !1;
    },
    canStart: s,
    start: () => (s() ? d() : u().then(d), i),
  };
}
function at(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: rt(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function ot(e) {
  return e.options.scope?.id;
}
function st(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = $e(t.options, t.fetchOptions),
            u = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = await l(
                  (() => {
                    let e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? `backward` : `forward`,
                      meta: t.options.meta,
                    };
                    var a;
                    return (
                      (a = e),
                      Object.defineProperty(a, `signal`, {
                        enumerable: !0,
                        get: () => (
                          t.signal.aborted
                            ? (n = !0)
                            : t.signal.addEventListener(`abort`, () => {
                                n = !0;
                              }),
                          t.signal
                        ),
                      }),
                      e
                    );
                  })()
                ),
                { maxPages: o } = t.options,
                s = i ? Qe : Ze;
              return { pages: s(e.pages, a, o), pageParams: s(e.pageParams, r, o) };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = { pages: a, pageParams: o };
            s = await u(t, (e ? lt : ct)(r, t), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : ct(r, s);
              if (c > 0 && e == null) break;
              ((s = await u(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n
            ))
        : (t.fetchFn = l);
    },
  };
}
function ct(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function lt(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
function ut(e, t) {
  return (
    (function (e, t) {
      return (
        !1 !== ze(t.enabled, e) &&
        e.state.data === void 0 &&
        !(e.state.status === `error` && !1 === t.retryOnMount)
      );
    })(e, t) ||
    (e.state.data !== void 0 && dt(e, t, t.refetchOnMount))
  );
}
function dt(e, t, n) {
  if (!1 !== ze(t.enabled, e) && Re(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (!1 !== r && pt(e, t));
  }
  return !1;
}
function ft(e, t, n, r) {
  return (
    (e !== t || !1 === ze(r.enabled, e)) && (!n.suspense || e.state.status !== `error`) && pt(e, n)
  );
}
function pt(e, t) {
  return !1 !== ze(t.enabled, e) && e.isStaleByTime(Re(t.staleTime, e));
}
function mt(e, t, n) {
  let r = y(rr),
    i = y(ir),
    a = tr(n),
    o = a.defaultQueryOptions(e);
  (a.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
    (o._optimisticResults = r ? `isRestoring` : `optimistic`),
    ((e) => {
      if (e.suspense) {
        let t = (e) => (e === `static` ? e : Math.max(e ?? 1e3, 1e3)),
          n = e.staleTime;
        ((e.staleTime = typeof n == `function` ? (...e) => t(n(...e)) : t(n)),
          typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, 1e3)));
      }
    })(o),
    ((e, t) => {
      (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
        (t.isReset() || (e.retryOnMount = !1));
    })(o, i),
    ((e) => {
      s(() => {
        e.clearReset();
      }, [e]);
    })(i));
  let c = !a.getQueryCache().get(o.queryHash),
    [l] = u(() => new t(a, o)),
    d = l.getOptimisticResult(o),
    f = !r && !1 !== e.subscribed;
  if (
    (C(
      ee(
        (e) => {
          let t = f ? l.subscribe(J.batchCalls(e)) : W;
          return (l.updateResult(), t);
        },
        [l, f]
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult()
    ),
    s(() => {
      l.setOptions(o);
    }, [o, l]),
    ((e, t) => e?.suspense && t.isPending)(o, d))
  )
    throw ar(o, l, i);
  if (
    (({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) =>
      e.isError &&
      !t.isReset() &&
      !e.isFetching &&
      r &&
      ((i && e.data === void 0) || et(n, [e.error, r])))({
      result: d,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: a.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw d.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, d),
    o.experimental_prefetchInRender &&
      !Bn &&
      ((e, t) => e.isLoading && e.isFetching && !t)(d, r) &&
      (c ? ar(o, l, i) : a.getQueryCache().get(o.queryHash)?.promise)?.catch(W).finally(() => {
        l.updateResult();
      }),
    o.notifyOnChangeProps ? d : l.trackResult(d)
  );
}
function ht(e, t) {
  return mt(e, Qn, t);
}
function gt(e, t) {
  let n = tr(t),
    [r] = u(() => new $n(n, e));
  s(() => {
    r.setOptions(e);
  }, [r, e]);
  let i = C(
      ee((e) => r.subscribe(J.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    a = ee(
      (e, t) => {
        r.mutate(e, t).catch(W);
      },
      [r]
    );
  if (i.error && et(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: a, mutateAsync: i.mutate };
}
function _t(e) {
  ((this.state = ((t) => {
    switch (e.type) {
      case `failed`:
        return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
      case `pause`:
        return { ...t, fetchStatus: `paused` };
      case `continue`:
        return { ...t, fetchStatus: `fetching` };
      case `fetch`:
        return { ...t, ...at(t.data, this.options), fetchMeta: e.meta ?? null };
      case `success`:
        let n = {
          ...t,
          data: e.data,
          dataUpdateCount: t.dataUpdateCount + 1,
          dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: `success`,
          ...(!e.manual && { fetchStatus: `idle`, fetchFailureCount: 0, fetchFailureReason: null }),
        };
        return (H(this, Rt, e.manual ? n : void 0), n);
      case `error`:
        let r = e.error;
        return {
          ...t,
          error: r,
          errorUpdateCount: t.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: t.fetchFailureCount + 1,
          fetchFailureReason: r,
          fetchStatus: `idle`,
          status: `error`,
        };
      case `invalidate`:
        return { ...t, isInvalidated: !0 };
      case `setState`:
        return { ...t, ...e.state };
    }
  })(this.state)),
    J.batch(() => {
      (this.observers.forEach((e) => {
        e.onQueryUpdate();
      }),
        B(this, zt).notify({ query: this, type: `updated`, action: e }));
    }));
}
function vt(e) {
  ((this.state = ((t) => {
    switch (e.type) {
      case `failed`:
        return { ...t, failureCount: e.failureCount, failureReason: e.error };
      case `pause`:
        return { ...t, isPaused: !0 };
      case `continue`:
        return { ...t, isPaused: !1 };
      case `pending`:
        return {
          ...t,
          context: e.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: e.isPaused,
          status: `pending`,
          variables: e.variables,
          submittedAt: Date.now(),
        };
      case `success`:
        return {
          ...t,
          data: e.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: `success`,
          isPaused: !1,
        };
      case `error`:
        return {
          ...t,
          data: void 0,
          error: e.error,
          failureCount: t.failureCount + 1,
          failureReason: e.error,
          isPaused: !1,
          status: `error`,
        };
    }
  })(this.state)),
    J.batch(() => {
      (B(this, Kt).forEach((t) => {
        t.onMutationUpdate(e);
      }),
        B(this, qt).notify({ mutation: this, type: `updated`, action: e }));
    }));
}
function yt(e) {
  U(this, kn, Et).call(this);
  let t = B(this, q).fetch(this.options, e);
  return (e?.throwOnError || (t = t.catch(W)), t);
}
function bt() {
  U(this, Dn, wt).call(this);
  let e = Re(this.options.staleTime, B(this, q));
  if (Bn || B(this, un).isStale || !Ie(e)) return;
  let t = Le(B(this, un).dataUpdatedAt, e) + 1;
  H(
    this,
    vn,
    setTimeout(() => {
      B(this, un).isStale || this.updateResult();
    }, t)
  );
}
function xt() {
  return (
    (typeof this.options.refetchInterval == `function`
      ? this.options.refetchInterval(B(this, q))
      : this.options.refetchInterval) ?? !1
  );
}
function St(e) {
  (U(this, On, Tt).call(this),
    H(this, bn, e),
    !Bn &&
      !1 !== ze(this.options.enabled, B(this, q)) &&
      Ie(B(this, bn)) &&
      B(this, bn) !== 0 &&
      H(
        this,
        yn,
        setInterval(
          () => {
            (this.options.refetchIntervalInBackground || Hn.isFocused()) &&
              U(this, Sn, yt).call(this);
          },
          B(this, bn)
        )
      ));
}
function Ct() {
  (U(this, Cn, bt).call(this), U(this, Tn, St).call(this, U(this, wn, xt).call(this)));
}
function wt() {
  B(this, vn) && (clearTimeout(B(this, vn)), H(this, vn, void 0));
}
function Tt() {
  B(this, yn) && (clearInterval(B(this, yn)), H(this, yn, void 0));
}
function Et() {
  let e = B(this, cn).getQueryCache().build(B(this, cn), this.options);
  if (e === B(this, q)) return;
  let t = B(this, q);
  (H(this, q, e),
    H(this, ln, e.state),
    this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
}
function Dt(e) {
  J.batch(() => {
    (e.listeners &&
      this.listeners.forEach((e) => {
        e(B(this, un));
      }),
      B(this, cn)
        .getQueryCache()
        .notify({ query: B(this, q), type: `observerResultsUpdated` }));
  });
}
function Ot() {
  let e = B(this, Pn)?.state ?? {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
  H(this, Nn, {
    ...e,
    isPending: e.status === `pending`,
    isSuccess: e.status === `success`,
    isError: e.status === `error`,
    isIdle: e.status === `idle`,
    mutate: this.mutate,
    reset: this.reset,
  });
}
function kt(e) {
  J.batch(() => {
    if (B(this, Fn) && this.hasListeners()) {
      let t = B(this, Nn).variables,
        n = B(this, Nn).context;
      e?.type === `success`
        ? (B(this, Fn).onSuccess?.(e.data, t, n), B(this, Fn).onSettled?.(e.data, null, t, n))
        : e?.type === `error` &&
          (B(this, Fn).onError?.(e.error, t, n), B(this, Fn).onSettled?.(void 0, e.error, t, n));
    }
    this.listeners.forEach((e) => {
      e(B(this, Nn));
    });
  });
}
var At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  G,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  K,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  q,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  J,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or = e(() => {
    (a(),
      n(),
      x(),
      (zn = class {
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              (this.listeners.delete(e), this.onUnsubscribe());
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
        constructor() {
          ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
        }
      }),
      (Bn = d === void 0 || `Deno` in globalThis),
      (Vn = Symbol()),
      (Hn = new ((At = new WeakMap()),
      (jt = new WeakMap()),
      (Mt = new WeakMap()),
      class extends zn {
        onSubscribe() {
          B(this, jt) || this.setEventListener(B(this, Mt));
        }
        onUnsubscribe() {
          this.hasListeners() || (B(this, jt)?.call(this), H(this, jt, void 0));
        }
        setEventListener(e) {
          (H(this, Mt, e),
            B(this, jt)?.call(this),
            H(
              this,
              jt,
              e((e) => {
                typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
              })
            ));
        }
        setFocused(e) {
          B(this, At) !== e && (H(this, At, e), this.onFocus());
        }
        onFocus() {
          let e = this.isFocused();
          this.listeners.forEach((t) => {
            t(e);
          });
        }
        isFocused() {
          return typeof B(this, At) == `boolean`
            ? B(this, At)
            : globalThis.document?.visibilityState !== `hidden`;
        }
        constructor() {
          (super(),
            V(this, At, { writable: !0, value: void 0 }),
            V(this, jt, { writable: !0, value: void 0 }),
            V(this, Mt, { writable: !0, value: void 0 }),
            H(this, Mt, (e) => {
              if (!Bn && d.addEventListener) {
                let t = () => e();
                return (
                  d.addEventListener(`visibilitychange`, t, !1),
                  () => {
                    d.removeEventListener(`visibilitychange`, t);
                  }
                );
              }
            }));
        }
      })()),
      (Un = new ((Nt = new WeakMap()),
      (Pt = new WeakMap()),
      (Ft = new WeakMap()),
      class extends zn {
        onSubscribe() {
          B(this, Pt) || this.setEventListener(B(this, Ft));
        }
        onUnsubscribe() {
          this.hasListeners() || (B(this, Pt)?.call(this), H(this, Pt, void 0));
        }
        setEventListener(e) {
          (H(this, Ft, e), B(this, Pt)?.call(this), H(this, Pt, e(this.setOnline.bind(this))));
        }
        setOnline(e) {
          B(this, Nt) !== e &&
            (H(this, Nt, e),
            this.listeners.forEach((t) => {
              t(e);
            }));
        }
        isOnline() {
          return B(this, Nt);
        }
        constructor() {
          (super(),
            V(this, Nt, { writable: !0, value: !0 }),
            V(this, Pt, { writable: !0, value: void 0 }),
            V(this, Ft, { writable: !0, value: void 0 }),
            H(this, Ft, (e) => {
              if (!Bn && d.addEventListener) {
                let t = () => e(!0),
                  n = () => e(!1);
                return (
                  d.addEventListener(`online`, t, !1),
                  d.addEventListener(`offline`, n, !1),
                  () => {
                    (d.removeEventListener(`online`, t), d.removeEventListener(`offline`, n));
                  }
                );
              }
            }));
        }
      })()),
      (Wn = class extends Error {
        constructor(e) {
          (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
        }
      }),
      (Gn = (e) => setTimeout(e, 0)),
      (J = (function () {
        let e = [],
          t = 0,
          n = (e) => {
            e();
          },
          r = (e) => {
            e();
          },
          i = Gn,
          a = (r) => {
            t
              ? e.push(r)
              : i(() => {
                  n(r);
                });
          };
        return {
          batch: (a) => {
            let o;
            t++;
            try {
              o = a();
            } finally {
              (t--,
                t ||
                  (() => {
                    let t = e;
                    ((e = []),
                      t.length &&
                        i(() => {
                          r(() => {
                            t.forEach((e) => {
                              n(e);
                            });
                          });
                        }));
                  })());
            }
            return o;
          },
          batchCalls:
            (e) =>
            (...t) => {
              a(() => {
                e(...t);
              });
            },
          schedule: a,
          setNotifyFunction: (e) => {
            n = e;
          },
          setBatchNotifyFunction: (e) => {
            r = e;
          },
          setScheduler: (e) => {
            i = e;
          },
        };
      })()),
      (Kn =
        ((It = new WeakMap()),
        class {
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            (this.clearGcTimeout(),
              Ie(this.gcTime) &&
                H(
                  this,
                  It,
                  setTimeout(() => {
                    this.optionalRemove();
                  }, this.gcTime)
                ));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (Bn ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            B(this, It) && (clearTimeout(B(this, It)), H(this, It, void 0));
          }
          constructor() {
            V(this, It, { writable: !0, value: void 0 });
          }
        })),
      (qn =
        ((Lt = new WeakMap()),
        (Rt = new WeakMap()),
        (zt = new WeakMap()),
        (Bt = new WeakMap()),
        (G = new WeakMap()),
        (Vt = new WeakMap()),
        (Ht = new WeakMap()),
        (Ut = new WeakSet()),
        (Wt = class extends Kn {
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return B(this, G)?.promise;
          }
          setOptions(e) {
            ((this.options = { ...B(this, Vt), ...e }), this.updateGcTime(this.options.gcTime));
          }
          optionalRemove() {
            this.observers.length || this.state.fetchStatus !== `idle` || B(this, zt).remove(this);
          }
          setData(e, t) {
            let n = Xe(this.state.data, e, this.options);
            return (
              U(this, Ut, _t).call(this, {
                data: n,
                type: `success`,
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              n
            );
          }
          setState(e, t) {
            U(this, Ut, _t).call(this, { type: `setState`, state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = B(this, G)?.promise;
            return (B(this, G)?.cancel(e), t ? t.then(W).catch(W) : Promise.resolve());
          }
          destroy() {
            (super.destroy(), this.cancel({ silent: !0 }));
          }
          reset() {
            (this.destroy(), this.setState(B(this, Lt)));
          }
          isActive() {
            return this.observers.some((e) => !1 !== ze(e.options.enabled, this));
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === Vn ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some((e) => Re(e.options.staleTime, this) === `static`)
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((e) => e.getCurrentResult().isStale)
              : this.state.data === void 0 || this.state.isInvalidated;
          }
          isStaleByTime(e = 0) {
            return (
              this.state.data === void 0 ||
              (e !== `static` && (!!this.state.isInvalidated || !Le(this.state.dataUpdatedAt, e)))
            );
          }
          onFocus() {
            (this.observers
              .find((e) => e.shouldFetchOnWindowFocus())
              ?.refetch({ cancelRefetch: !1 }),
              B(this, G)?.continue());
          }
          onOnline() {
            (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
              B(this, G)?.continue());
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              B(this, zt).notify({ type: `observerAdded`, query: this, observer: e }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (B(this, G) &&
                  (B(this, Ht) ? B(this, G).cancel({ revert: !0 }) : B(this, G).cancelRetry()),
                this.scheduleGc()),
              B(this, zt).notify({ type: `observerRemoved`, query: this, observer: e }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || U(this, Ut, _t).call(this, { type: `invalidate` });
          }
          async fetch(e, t) {
            if (this.state.fetchStatus !== `idle` && B(this, G)?.status() !== `rejected`) {
              if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
              else if (B(this, G)) return (B(this, G).continueRetry(), B(this, G).promise);
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let n = new AbortController(),
              r = (e) => {
                Object.defineProperty(e, `signal`, {
                  enumerable: !0,
                  get: () => (H(this, Ht, !0), n.signal),
                });
              },
              i = () => {
                let e = $e(this.options, t),
                  n = (() => {
                    let e = { client: B(this, Bt), queryKey: this.queryKey, meta: this.meta };
                    return (r(e), e);
                  })();
                return (
                  H(this, Ht, !1),
                  this.options.persister ? this.options.persister(e, n, this) : e(n)
                );
              },
              a = (() => {
                let e = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: B(this, Bt),
                  state: this.state,
                  fetchFn: i,
                };
                return (r(e), e);
              })();
            (this.options.behavior?.onFetch(a, this),
              H(this, Rt, this.state),
              (this.state.fetchStatus !== `idle` &&
                this.state.fetchMeta === a.fetchOptions?.meta) ||
                U(this, Ut, _t).call(this, { type: `fetch`, meta: a.fetchOptions?.meta }),
              H(
                this,
                G,
                it({
                  initialPromise: t?.initialPromise,
                  fn: a.fetchFn,
                  abort: n.abort.bind(n),
                  onFail: (e, t) => {
                    U(this, Ut, _t).call(this, { type: `failed`, failureCount: e, error: t });
                  },
                  onPause: () => {
                    U(this, Ut, _t).call(this, { type: `pause` });
                  },
                  onContinue: () => {
                    U(this, Ut, _t).call(this, { type: `continue` });
                  },
                  retry: a.options.retry,
                  retryDelay: a.options.retryDelay,
                  networkMode: a.options.networkMode,
                  canRun: () => !0,
                })
              ));
            try {
              let e = await B(this, G).start();
              if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
              return (
                this.setData(e),
                B(this, zt).config.onSuccess?.(e, this),
                B(this, zt).config.onSettled?.(e, this.state.error, this),
                e
              );
            } catch (e) {
              if (e instanceof Wn) {
                if (e.silent) return B(this, G).promise;
                if (e.revert) {
                  if (
                    (this.setState({ ...B(this, Rt), fetchStatus: `idle` }),
                    this.state.data === void 0)
                  )
                    throw e;
                  return this.state.data;
                }
              }
              throw (
                U(this, Ut, _t).call(this, { type: `error`, error: e }),
                B(this, zt).config.onError?.(e, this),
                B(this, zt).config.onSettled?.(this.state.data, e, this),
                e
              );
            } finally {
              this.scheduleGc();
            }
          }
          constructor(e) {
            (super(),
              Fe(this, Ut),
              V(this, Lt, { writable: !0, value: void 0 }),
              V(this, Rt, { writable: !0, value: void 0 }),
              V(this, zt, { writable: !0, value: void 0 }),
              V(this, Bt, { writable: !0, value: void 0 }),
              V(this, G, { writable: !0, value: void 0 }),
              V(this, Vt, { writable: !0, value: void 0 }),
              V(this, Ht, { writable: !0, value: void 0 }),
              H(this, Ht, !1),
              H(this, Vt, e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              H(this, Bt, e.client),
              H(this, zt, B(this, Bt).getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              H(
                this,
                Lt,
                (function (e) {
                  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
                    n = t !== void 0,
                    r = n
                      ? typeof e.initialDataUpdatedAt == `function`
                        ? e.initialDataUpdatedAt()
                        : e.initialDataUpdatedAt
                      : 0;
                  return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: n ? `success` : `pending`,
                    fetchStatus: `idle`,
                  };
                })(this.options)
              ),
              (this.state = e.state ?? B(this, Lt)),
              this.scheduleGc());
          }
        }),
        Wt)),
      (Jn =
        ((Gt = new WeakMap()),
        class extends zn {
          build(e, t, n) {
            let r = t.queryKey,
              i = t.queryHash ?? He(r, t),
              a = this.get(i);
            return (
              a ||
                ((a = new qn({
                  client: e,
                  queryKey: r,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(r),
                })),
                this.add(a)),
              a
            );
          }
          add(e) {
            B(this, Gt).has(e.queryHash) ||
              (B(this, Gt).set(e.queryHash, e), this.notify({ type: `added`, query: e }));
          }
          remove(e) {
            let t = B(this, Gt).get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && B(this, Gt).delete(e.queryHash),
              this.notify({ type: `removed`, query: e }));
          }
          clear() {
            J.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return B(this, Gt).get(e);
          }
          getAll() {
            return [...B(this, Gt).values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => Be(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => Be(e, t)) : t;
          }
          notify(e) {
            J.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            J.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            J.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
          constructor(e = {}) {
            (super(),
              V(this, Gt, { writable: !0, value: void 0 }),
              (this.config = e),
              H(this, Gt, new Map()));
          }
        })),
      (Yn =
        ((Kt = new WeakMap()),
        (qt = new WeakMap()),
        (Jt = new WeakMap()),
        (Yt = new WeakSet()),
        (Xt = class extends Kn {
          setOptions(e) {
            ((this.options = e), this.updateGcTime(this.options.gcTime));
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            B(this, Kt).includes(e) ||
              (B(this, Kt).push(e),
              this.clearGcTimeout(),
              B(this, qt).notify({ type: `observerAdded`, mutation: this, observer: e }));
          }
          removeObserver(e) {
            (H(
              this,
              Kt,
              B(this, Kt).filter((t) => t !== e)
            ),
              this.scheduleGc(),
              B(this, qt).notify({ type: `observerRemoved`, mutation: this, observer: e }));
          }
          optionalRemove() {
            B(this, Kt).length ||
              (this.state.status === `pending` ? this.scheduleGc() : B(this, qt).remove(this));
          }
          continue() {
            return B(this, Jt)?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
              U(this, Yt, vt).call(this, { type: `continue` });
            };
            H(
              this,
              Jt,
              it({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(e)
                    : Promise.reject(Error(`No mutationFn found`)),
                onFail: (e, t) => {
                  U(this, Yt, vt).call(this, { type: `failed`, failureCount: e, error: t });
                },
                onPause: () => {
                  U(this, Yt, vt).call(this, { type: `pause` });
                },
                onContinue: t,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => B(this, qt).canRun(this),
              })
            );
            let n = this.state.status === `pending`,
              r = !B(this, Jt).canStart();
            try {
              if (n) t();
              else {
                (U(this, Yt, vt).call(this, { type: `pending`, variables: e, isPaused: r }),
                  await B(this, qt).config.onMutate?.(e, this));
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  U(this, Yt, vt).call(this, {
                    type: `pending`,
                    context: t,
                    variables: e,
                    isPaused: r,
                  });
              }
              let i = await B(this, Jt).start();
              return (
                await B(this, qt).config.onSuccess?.(i, e, this.state.context, this),
                await this.options.onSuccess?.(i, e, this.state.context),
                await B(this, qt).config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, e, this.state.context),
                U(this, Yt, vt).call(this, { type: `success`, data: i }),
                i
              );
            } catch (t) {
              try {
                throw (
                  await B(this, qt).config.onError?.(t, e, this.state.context, this),
                  await this.options.onError?.(t, e, this.state.context),
                  await B(this, qt).config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(void 0, t, e, this.state.context),
                  t
                );
              } finally {
                U(this, Yt, vt).call(this, { type: `error`, error: t });
              }
            } finally {
              B(this, qt).runNext(this);
            }
          }
          constructor(e) {
            (super(),
              Fe(this, Yt),
              V(this, Kt, { writable: !0, value: void 0 }),
              V(this, qt, { writable: !0, value: void 0 }),
              V(this, Jt, { writable: !0, value: void 0 }),
              (this.mutationId = e.mutationId),
              H(this, qt, e.mutationCache),
              H(this, Kt, []),
              (this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: `idle`,
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(e.options),
              this.scheduleGc());
          }
        }),
        Xt)),
      (Xn =
        ((Zt = new WeakMap()),
        (Qt = new WeakMap()),
        ($t = new WeakMap()),
        class extends zn {
          build(e, t, n) {
            let r = new Yn({
              mutationCache: this,
              mutationId: ++Pe(this, $t).value,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return (this.add(r), r);
          }
          add(e) {
            B(this, Zt).add(e);
            let t = ot(e);
            if (typeof t == `string`) {
              let n = B(this, Qt).get(t);
              n ? n.push(e) : B(this, Qt).set(t, [e]);
            }
            this.notify({ type: `added`, mutation: e });
          }
          remove(e) {
            if (B(this, Zt).delete(e)) {
              let t = ot(e);
              if (typeof t == `string`) {
                let n = B(this, Qt).get(t);
                if (n)
                  if (n.length > 1) {
                    let t = n.indexOf(e);
                    t !== -1 && n.splice(t, 1);
                  } else n[0] === e && B(this, Qt).delete(t);
              }
            }
            this.notify({ type: `removed`, mutation: e });
          }
          canRun(e) {
            let t = ot(e);
            if (typeof t == `string`) {
              let n = B(this, Qt)
                .get(t)
                ?.find((e) => e.state.status === `pending`);
              return !n || n === e;
            }
            return !0;
          }
          runNext(e) {
            let t = ot(e);
            return typeof t == `string`
              ? (B(this, Qt)
                  .get(t)
                  ?.find((t) => t !== e && t.state.isPaused)
                  ?.continue() ?? Promise.resolve())
              : Promise.resolve();
          }
          clear() {
            J.batch(() => {
              (B(this, Zt).forEach((e) => {
                this.notify({ type: `removed`, mutation: e });
              }),
                B(this, Zt).clear(),
                B(this, Qt).clear());
            });
          }
          getAll() {
            return Array.from(B(this, Zt));
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => Ve(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => Ve(e, t));
          }
          notify(e) {
            J.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return J.batch(() => Promise.all(e.map((e) => e.continue().catch(W))));
          }
          constructor(e = {}) {
            (super(),
              V(this, Zt, { writable: !0, value: void 0 }),
              V(this, Qt, { writable: !0, value: void 0 }),
              V(this, $t, { writable: !0, value: void 0 }),
              (this.config = e),
              H(this, Zt, new Set()),
              H(this, Qt, new Map()),
              H(this, $t, 0));
          }
        })),
      (Zn =
        ((K = new WeakMap()),
        (en = new WeakMap()),
        (tn = new WeakMap()),
        (nn = new WeakMap()),
        (rn = new WeakMap()),
        (an = new WeakMap()),
        (on = new WeakMap()),
        (sn = new WeakMap()),
        class {
          mount() {
            (Pe(this, an).value++,
              B(this, an) === 1 &&
                (H(
                  this,
                  on,
                  Hn.subscribe(async (e) => {
                    e && (await this.resumePausedMutations(), B(this, K).onFocus());
                  })
                ),
                H(
                  this,
                  sn,
                  Un.subscribe(async (e) => {
                    e && (await this.resumePausedMutations(), B(this, K).onOnline());
                  })
                )));
          }
          unmount() {
            (Pe(this, an).value--,
              B(this, an) === 0 &&
                (B(this, on)?.call(this),
                H(this, on, void 0),
                B(this, sn)?.call(this),
                H(this, sn, void 0)));
          }
          isFetching(e) {
            return B(this, K).findAll({ ...e, fetchStatus: `fetching` }).length;
          }
          isMutating(e) {
            return B(this, en).findAll({ ...e, status: `pending` }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return B(this, K).get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              n = B(this, K).build(this, t),
              r = n.state.data;
            return r === void 0
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  n.isStaleByTime(Re(t.staleTime, n)) &&
                  this.prefetchQuery(t),
                Promise.resolve(r));
          }
          getQueriesData(e) {
            return B(this, K)
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, n) {
            let r = this.defaultQueryOptions({ queryKey: e }),
              i = (function (e, t) {
                return typeof e == `function` ? e(t) : e;
              })(t, B(this, K).get(r.queryHash)?.state.data);
            if (i !== void 0)
              return B(this, K)
                .build(this, r)
                .setData(i, { ...n, manual: !0 });
          }
          setQueriesData(e, t, n) {
            return J.batch(() =>
              B(this, K)
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return B(this, K).get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = B(this, K);
            J.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let n = B(this, K);
            return J.batch(
              () => (
                n.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries({ type: `active`, ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let n = { revert: !0, ...t },
              r = J.batch(() =>
                B(this, K)
                  .findAll(e)
                  .map((e) => e.cancel(n))
              );
            return Promise.all(r).then(W).catch(W);
          }
          invalidateQueries(e, t = {}) {
            return J.batch(
              () => (
                B(this, K)
                  .findAll(e)
                  .forEach((e) => {
                    e.invalidate();
                  }),
                e?.refetchType === `none`
                  ? Promise.resolve()
                  : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? `active` }, t)
              )
            );
          }
          refetchQueries(e, t = {}) {
            let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
              r = J.batch(() =>
                B(this, K)
                  .findAll(e)
                  .filter((e) => !e.isDisabled() && !e.isStatic())
                  .map((e) => {
                    let t = e.fetch(void 0, n);
                    return (
                      n.throwOnError || (t = t.catch(W)),
                      e.state.fetchStatus === `paused` ? Promise.resolve() : t
                    );
                  })
              );
            return Promise.all(r).then(W);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            let n = B(this, K).build(this, t);
            return n.isStaleByTime(Re(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(W).catch(W);
          }
          fetchInfiniteQuery(e) {
            return ((e.behavior = st(e.pages)), this.fetchQuery(e));
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(W).catch(W);
          }
          ensureInfiniteQueryData(e) {
            return ((e.behavior = st(e.pages)), this.ensureQueryData(e));
          }
          resumePausedMutations() {
            return Un.isOnline() ? B(this, en).resumePausedMutations() : Promise.resolve();
          }
          getQueryCache() {
            return B(this, K);
          }
          getMutationCache() {
            return B(this, en);
          }
          getDefaultOptions() {
            return B(this, tn);
          }
          setDefaultOptions(e) {
            H(this, tn, e);
          }
          setQueryDefaults(e, t) {
            B(this, nn).set(Ue(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...B(this, nn).values()],
              n = {};
            return (
              t.forEach((t) => {
                We(e, t.queryKey) && Object.assign(n, t.defaultOptions);
              }),
              n
            );
          }
          setMutationDefaults(e, t) {
            B(this, rn).set(Ue(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...B(this, rn).values()],
              n = {};
            return (
              t.forEach((t) => {
                We(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
              }),
              n
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...B(this, tn).queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              (t.queryHash ||= He(t.queryKey, t)),
              t.refetchOnReconnect === void 0 &&
                (t.refetchOnReconnect = t.networkMode !== `always`),
              t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
              t.queryFn === Vn && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...B(this, tn).mutations,
                  ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            (B(this, K).clear(), B(this, en).clear());
          }
          constructor(e = {}) {
            (V(this, K, { writable: !0, value: void 0 }),
              V(this, en, { writable: !0, value: void 0 }),
              V(this, tn, { writable: !0, value: void 0 }),
              V(this, nn, { writable: !0, value: void 0 }),
              V(this, rn, { writable: !0, value: void 0 }),
              V(this, an, { writable: !0, value: void 0 }),
              V(this, on, { writable: !0, value: void 0 }),
              V(this, sn, { writable: !0, value: void 0 }),
              H(this, K, e.queryCache || new Jn()),
              H(this, en, e.mutationCache || new Xn()),
              H(this, tn, e.defaultOptions || {}),
              H(this, nn, new Map()),
              H(this, rn, new Map()),
              H(this, an, 0));
          }
        })),
      (Qn =
        ((cn = new WeakMap()),
        (q = new WeakMap()),
        (ln = new WeakMap()),
        (un = new WeakMap()),
        (dn = new WeakMap()),
        (fn = new WeakMap()),
        (pn = new WeakMap()),
        (mn = new WeakMap()),
        (hn = new WeakMap()),
        (gn = new WeakMap()),
        (_n = new WeakMap()),
        (vn = new WeakMap()),
        (yn = new WeakMap()),
        (bn = new WeakMap()),
        (xn = new WeakMap()),
        (Sn = new WeakSet()),
        (Cn = new WeakSet()),
        (wn = new WeakSet()),
        (Tn = new WeakSet()),
        (En = new WeakSet()),
        (Dn = new WeakSet()),
        (On = new WeakSet()),
        (kn = new WeakSet()),
        (An = new WeakSet()),
        (jn = class extends zn {
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            this.listeners.size === 1 &&
              (B(this, q).addObserver(this),
              ut(B(this, q), this.options) ? U(this, Sn, yt).call(this) : this.updateResult(),
              U(this, En, Ct).call(this));
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return dt(B(this, q), this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return dt(B(this, q), this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            ((this.listeners = new Set()),
              U(this, Dn, wt).call(this),
              U(this, On, Tt).call(this),
              B(this, q).removeObserver(this));
          }
          setOptions(e) {
            let t = this.options,
              n = B(this, q);
            if (
              ((this.options = B(this, cn).defaultQueryOptions(e)),
              this.options.enabled !== void 0 &&
                typeof this.options.enabled != `boolean` &&
                typeof this.options.enabled != `function` &&
                typeof ze(this.options.enabled, B(this, q)) != `boolean`)
            )
              throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);
            (U(this, kn, Et).call(this),
              B(this, q).setOptions(this.options),
              t._defaulted &&
                !Ke(this.options, t) &&
                B(this, cn)
                  .getQueryCache()
                  .notify({ type: `observerOptionsUpdated`, query: B(this, q), observer: this }));
            let r = this.hasListeners();
            (r && ft(B(this, q), n, this.options, t) && U(this, Sn, yt).call(this),
              this.updateResult(),
              !r ||
                (B(this, q) === n &&
                  ze(this.options.enabled, B(this, q)) === ze(t.enabled, B(this, q)) &&
                  Re(this.options.staleTime, B(this, q)) === Re(t.staleTime, B(this, q))) ||
                U(this, Cn, bt).call(this));
            let i = U(this, wn, xt).call(this);
            !r ||
              (B(this, q) === n &&
                ze(this.options.enabled, B(this, q)) === ze(t.enabled, B(this, q)) &&
                i === B(this, bn)) ||
              U(this, Tn, St).call(this, i);
          }
          getOptimisticResult(e) {
            let t = B(this, cn).getQueryCache().build(B(this, cn), e),
              n = this.createResult(t, e);
            return (
              (function (e, t) {
                return !Ke(e.getCurrentResult(), t);
              })(this, n) &&
                (H(this, un, n), H(this, fn, this.options), H(this, dn, B(this, q).state)),
              n
            );
          }
          getCurrentResult() {
            return B(this, un);
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, n) => (
                this.trackProp(n),
                t?.(n),
                n !== `promise` ||
                  this.options.experimental_prefetchInRender ||
                  B(this, pn).status !== `pending` ||
                  B(this, pn).reject(
                    Error(`experimental_prefetchInRender feature flag is not enabled`)
                  ),
                Reflect.get(e, n)
              ),
            });
          }
          trackProp(e) {
            B(this, xn).add(e);
          }
          getCurrentQuery() {
            return B(this, q);
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = B(this, cn).defaultQueryOptions(e),
              n = B(this, cn).getQueryCache().build(B(this, cn), t);
            return n.fetch().then(() => this.createResult(n, t));
          }
          fetch(e) {
            return U(this, Sn, yt)
              .call(this, { ...e, cancelRefetch: e.cancelRefetch ?? !0 })
              .then(() => (this.updateResult(), B(this, un)));
          }
          createResult(e, t) {
            let n = B(this, q),
              r = this.options,
              i = B(this, un),
              a = B(this, dn),
              o = B(this, fn),
              s = e === n ? B(this, ln) : e.state,
              { state: c } = e,
              l,
              u = { ...c },
              d = !1;
            if (t._optimisticResults) {
              let i = this.hasListeners(),
                a = !i && ut(e, t),
                o = i && ft(e, n, t, r);
              ((a || o) && (u = { ...u, ...at(c.data, e.options) }),
                t._optimisticResults === `isRestoring` && (u.fetchStatus = `idle`));
            }
            let { error: f, errorUpdatedAt: p, status: m } = u;
            l = u.data;
            let h = !1;
            if (t.placeholderData !== void 0 && l === void 0 && m === `pending`) {
              let e;
              (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
                ? ((e = i.data), (h = !0))
                : (e =
                    typeof t.placeholderData == `function`
                      ? t.placeholderData(B(this, _n)?.state.data, B(this, _n))
                      : t.placeholderData),
                e !== void 0 && ((m = `success`), (l = Xe(i?.data, e, t)), (d = !0)));
            }
            if (t.select && l !== void 0 && !h)
              if (i && l === a?.data && t.select === B(this, hn)) l = B(this, gn);
              else
                try {
                  (H(this, hn, t.select),
                    (l = t.select(l)),
                    (l = Xe(i?.data, l, t)),
                    H(this, gn, l),
                    H(this, mn, null));
                } catch (e) {
                  H(this, mn, e);
                }
            B(this, mn) && ((f = B(this, mn)), (l = B(this, gn)), (p = Date.now()), (m = `error`));
            let g = u.fetchStatus === `fetching`,
              _ = m === `pending`,
              v = m === `error`,
              ee = _ && g,
              y = l !== void 0,
              b = {
                status: m,
                fetchStatus: u.fetchStatus,
                isPending: _,
                isSuccess: m === `success`,
                isError: v,
                isInitialLoading: ee,
                isLoading: ee,
                data: l,
                dataUpdatedAt: u.dataUpdatedAt,
                error: f,
                errorUpdatedAt: p,
                failureCount: u.fetchFailureCount,
                failureReason: u.fetchFailureReason,
                errorUpdateCount: u.errorUpdateCount,
                isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
                isFetchedAfterMount:
                  u.dataUpdateCount > s.dataUpdateCount || u.errorUpdateCount > s.errorUpdateCount,
                isFetching: g,
                isRefetching: g && !_,
                isLoadingError: v && !y,
                isPaused: u.fetchStatus === `paused`,
                isPlaceholderData: d,
                isRefetchError: v && y,
                isStale: pt(e, t),
                refetch: this.refetch,
                promise: B(this, pn),
                isEnabled: !1 !== ze(t.enabled, e),
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  b.status === `error` ? e.reject(b.error) : b.data !== void 0 && e.resolve(b.data);
                },
                r = () => {
                  t(H(this, pn, (b.promise = tt())));
                },
                i = B(this, pn);
              switch (i.status) {
                case `pending`:
                  e.queryHash === n.queryHash && t(i);
                  break;
                case `fulfilled`:
                  (b.status !== `error` && b.data === i.value) || r();
                  break;
                case `rejected`:
                  (b.status === `error` && b.error === i.reason) || r();
              }
            }
            return b;
          }
          updateResult() {
            let e = B(this, un),
              t = this.createResult(B(this, q), this.options);
            (H(this, dn, B(this, q).state),
              H(this, fn, this.options),
              B(this, dn).data !== void 0 && H(this, _n, B(this, q)),
              !Ke(t, e) &&
                (H(this, un, t),
                U(this, An, Dt).call(this, {
                  listeners: (() => {
                    if (!e) return !0;
                    let { notifyOnChangeProps: t } = this.options,
                      n = typeof t == `function` ? t() : t;
                    if (n === `all` || (!n && !B(this, xn).size)) return !0;
                    let r = new Set(n ?? B(this, xn));
                    return (
                      this.options.throwOnError && r.add(`error`),
                      Object.keys(B(this, un)).some((t) => {
                        let n = t;
                        return B(this, un)[n] !== e[n] && r.has(n);
                      })
                    );
                  })(),
                })));
          }
          onQueryUpdate() {
            (this.updateResult(), this.hasListeners() && U(this, En, Ct).call(this));
          }
          constructor(e, t) {
            (super(),
              Fe(this, Sn),
              Fe(this, Cn),
              Fe(this, wn),
              Fe(this, Tn),
              Fe(this, En),
              Fe(this, Dn),
              Fe(this, On),
              Fe(this, kn),
              Fe(this, An),
              V(this, cn, { writable: !0, value: void 0 }),
              V(this, q, { writable: !0, value: void 0 }),
              V(this, ln, { writable: !0, value: void 0 }),
              V(this, un, { writable: !0, value: void 0 }),
              V(this, dn, { writable: !0, value: void 0 }),
              V(this, fn, { writable: !0, value: void 0 }),
              V(this, pn, { writable: !0, value: void 0 }),
              V(this, mn, { writable: !0, value: void 0 }),
              V(this, hn, { writable: !0, value: void 0 }),
              V(this, gn, { writable: !0, value: void 0 }),
              V(this, _n, { writable: !0, value: void 0 }),
              V(this, vn, { writable: !0, value: void 0 }),
              V(this, yn, { writable: !0, value: void 0 }),
              V(this, bn, { writable: !0, value: void 0 }),
              V(this, xn, { writable: !0, value: new Set() }),
              (this.options = t),
              H(this, cn, e),
              H(this, mn, null),
              H(this, pn, tt()),
              this.bindMethods(),
              this.setOptions(t));
          }
        }),
        jn)),
      ($n =
        ((Mn = new WeakMap()),
        (Nn = new WeakMap()),
        (Pn = new WeakMap()),
        (Fn = new WeakMap()),
        (In = new WeakSet()),
        (Ln = new WeakSet()),
        (Rn = class extends zn {
          bindMethods() {
            ((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
          }
          setOptions(e) {
            let t = this.options;
            ((this.options = B(this, Mn).defaultMutationOptions(e)),
              Ke(this.options, t) ||
                B(this, Mn)
                  .getMutationCache()
                  .notify({
                    type: `observerOptionsUpdated`,
                    mutation: B(this, Pn),
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              Ue(t.mutationKey) !== Ue(this.options.mutationKey)
                ? this.reset()
                : B(this, Pn)?.state.status === `pending` && B(this, Pn).setOptions(this.options));
          }
          onUnsubscribe() {
            this.hasListeners() || B(this, Pn)?.removeObserver(this);
          }
          onMutationUpdate(e) {
            (U(this, In, Ot).call(this), U(this, Ln, kt).call(this, e));
          }
          getCurrentResult() {
            return B(this, Nn);
          }
          reset() {
            (B(this, Pn)?.removeObserver(this),
              H(this, Pn, void 0),
              U(this, In, Ot).call(this),
              U(this, Ln, kt).call(this));
          }
          mutate(e, t) {
            return (
              H(this, Fn, t),
              B(this, Pn)?.removeObserver(this),
              H(this, Pn, B(this, Mn).getMutationCache().build(B(this, Mn), this.options)),
              B(this, Pn).addObserver(this),
              B(this, Pn).execute(e)
            );
          }
          constructor(e, t) {
            (super(),
              Fe(this, In),
              Fe(this, Ln),
              V(this, Mn, { writable: !0, value: void 0 }),
              V(this, Nn, { writable: !0, value: void 0 }),
              V(this, Pn, { writable: !0, value: void 0 }),
              V(this, Fn, { writable: !0, value: void 0 }),
              H(this, Mn, e),
              this.setOptions(t),
              this.bindMethods(),
              U(this, In, Ot).call(this));
          }
        }),
        Rn)),
      (er = i(void 0)),
      (tr = (e) => {
        let t = y(er);
        if (e) return e;
        if (!t) throw Error(`No QueryClient set, use QueryClientProvider to set one`);
        return t;
      }),
      (nr = ({ client: e, children: t }) => (
        s(
          () => (
            e.mount(),
            () => {
              e.unmount();
            }
          ),
          [e]
        ),
        h(er.Provider, { value: e, children: t })
      )),
      (rr = i(!1)),
      rr.Provider,
      (ir = i(
        (function () {
          let e = !1;
          return {
            clearReset: () => {
              e = !1;
            },
            reset: () => {
              e = !0;
            },
            isReset: () => e,
          };
        })()
      )),
      (ar = (e, t, n) =>
        t.fetchOptimistic(e).catch(() => {
          n.clearReset();
        })));
  }),
  sr,
  cr,
  lr,
  ur = e(() => {
    ((sr = `frameship_cart_id`),
      (cr = () => {
        try {
          return localStorage.getItem(sr);
        } catch (e) {
          return (console.error(`Error getting cart ID from localStorage:`, e), null);
        }
      }),
      (lr = (e) => {
        try {
          localStorage.setItem(sr, e);
        } catch (e) {
          console.error(`Error saving cart ID to localStorage:`, e);
        }
      }));
  }),
  dr,
  fr,
  pr = e(() => {
    ((dr = `frameship_selected_market`),
      (fr = () => {
        try {
          let e = localStorage.getItem(dr);
          return e ? JSON.parse(e) : null;
        } catch (e) {
          return (console.error(`Error getting market from localStorage:`, e), null);
        }
      }));
  }),
  mr,
  hr = e(() => {
    (be(),
      pr(),
      (mr = Oe((e, t) => ({
        selectedMarket: fr(),
        defaultMarket: null,
        setMarket: (t) => {
          (console.log(`[Market Store] Setting market to:`, t),
            e({ selectedMarket: t }),
            import("./Live_pricing_store.CbvotzOs.mjs")
              .then(({ useLivePricingStore: e }) => {
                (console.log(
                  `[Market Store] Triggering live pricing fetch for market:`,
                  t.countryCode
                ),
                  e.getState().fetchLivePricingData(t.countryCode));
              })
              .catch((e) => {
                console.error(`[Market Store] Error importing live pricing store:`, e);
              }));
        },
        getMarket: () => t().selectedMarket || t().defaultMarket,
        setDefaultMarket: (n) => {
          (e({ defaultMarket: n }), t().selectedMarket || e({ selectedMarket: n }));
        },
        clearMarket: () => {
          e({ selectedMarket: null });
        },
      }))));
  }),
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr = e(() => {
    (De(),
      ur(),
      (gr = `
              sellingPlanAllocation {
                sellingPlan {
                  id
                  name
                  options {
                    name
                    value
                  }
                }
                priceAdjustments {
                  price { amount currencyCode }
                  compareAtPrice { amount currencyCode }
                  perDeliveryPrice { amount currencyCode }
                }
              }
`),
      (_r = (e, t) => {
        let n = t ? gr : ``;
        return e.split(`SELLING_PLAN_ALLOCATION_PLACEHOLDER`).join(n);
      }),
      (vr = async (e, t) => {
        let n = cr();
        return await Ce({
          query: _r(
            `#graphql
          query getCart($cartId: ID!, $country: CountryCode)
          @inContext(country: $country) {
            cart(id: $cartId) {
              id
              createdAt
              updatedAt
              checkoutUrl
              lines(first: 100) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        product {
                          id
                          title
                          handle
                        }
                        image {
                          url
                          altText
                        }
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                    SELLING_PLAN_ALLOCATION_PLACEHOLDER
                  }
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
  `,
            t
          ),
          variables: { cartId: n, ...(e && { country: e }) },
        });
      }),
      (yr = async (e, t) => {
        let n = await Ce({
          query: _r(
            `#graphql
  mutation cartCreate($country: CountryCode)
  @inContext(country: $country) {
    cartCreate {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                  }
                  image {
                    url
                    altText
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              SELLING_PLAN_ALLOCATION_PLACEHOLDER
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `,
            t
          ),
          variables: { ...(e && { country: e }) },
        });
        return (n.data?.cartCreate?.cart?.id && lr(n.data.cartCreate.cart.id), n);
      }),
      (br = async ({
        cartId: e,
        variantId: t,
        quantity: n = 1,
        country: r,
        sellingPlanId: i,
        includeSellingPlans: a,
      }) => {
        let o = _r(
            `#graphql
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode)
  @inContext(country: $country) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                  }
                  image {
                    url
                    altText
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              SELLING_PLAN_ALLOCATION_PLACEHOLDER
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `,
            a
          ),
          s = { merchandiseId: t, quantity: n };
        return (
          i && (s.sellingPlanId = i),
          await Ce({ query: o, variables: { cartId: e, lines: [s], ...(r && { country: r }) } })
        );
      }),
      (xr = async ({ cartId: e, lineId: t, quantity: n, country: r, includeSellingPlans: i }) =>
        await Ce({
          query: _r(
            `#graphql
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $country: CountryCode)
  @inContext(country: $country) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                  }
                  image {
                    url
                    altText
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              SELLING_PLAN_ALLOCATION_PLACEHOLDER
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`,
            i
          ),
          variables: { cartId: e, lines: [{ id: t, quantity: n }], ...(r && { country: r }) },
        })),
      (Sr = async ({ cartId: e, lineId: t, country: n, includeSellingPlans: r }) =>
        await Ce({
          query: _r(
            `#graphql
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!, $country: CountryCode)
  @inContext(country: $country) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                  }
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                }
              }
              SELLING_PLAN_ALLOCATION_PLACEHOLDER
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`,
            r
          ),
          variables: { cartId: e, lineIds: [t], ...(n && { country: n }) },
        })),
      (Cr = async ({ cartId: e, countryCode: t, includeSellingPlans: n }) =>
        await Ce({
          query: _r(
            `#graphql
  mutation cartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                  }
                  image {
                    url
                    altText
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              SELLING_PLAN_ALLOCATION_PLACEHOLDER
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `,
            n
          ),
          variables: { cartId: e, buyerIdentity: { countryCode: t } },
        })));
  }),
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr = e(() => {
    (or(),
      n(),
      ur(),
      hr(),
      wr(),
      we(),
      ve(),
      (Tr = new Map()),
      (Er = new Set()),
      (Dr = new Map()),
      (Or = 0),
      (kr = () => {
        let e = ye(),
          { getMarket: t } = mr(),
          n = t()?.countryCode,
          r = Te(),
          {
            data: i,
            isLoading: a,
            error: o,
          } = ht({
            queryKey: [`cart`, n],
            queryFn: async () => {
              if (e) return { data: null };
              if (cr()) {
                let e = await vr(n, r);
                return e.data?.cart === null ? await yr(n, r) : e;
              } else {
                let e = await yr(n, r);
                return (
                  e.data?.cartCreate?.cart?.id ||
                    console.error(`[useCreateCart] Failed to create cart. Response:`, e),
                  e
                );
              }
            },
            enabled: !e,
            staleTime: 300 * 1e3,
          });
        return e ? { data: null, isLoading: !1, error: null } : { data: i, isLoading: a, error: o };
      }),
      (Ar = () => {
        let e = tr(),
          { getMarket: t } = mr(),
          n = t()?.countryCode,
          r = Te(),
          i = gt({
            mutationFn: async ({ cartId: e, variantId: t, quantity: i = 1, sellingPlanId: a }) =>
              br({
                cartId: e,
                variantId: t,
                quantity: i,
                country: n,
                sellingPlanId: a,
                includeSellingPlans: r,
              }),
            onMutate: async ({
              variantId: t,
              quantity: r = 1,
              sellingPlanId: i,
              variantData: a,
            }) => {
              let o = [`cart`, n],
                s = ++Or,
                c = `${t}-${i || `none`}`;
              (Dr.set(c, { counter: s, variantId: t, quantity: r, sellingPlanId: i }),
                await e.cancelQueries({ queryKey: o }));
              let l = e.getQueryData(o),
                u = Nr(l);
              if (!u || !a) return { previousCart: l, addKey: c, counter: s };
              let d = Fr(u, t, i),
                f;
              if (d) {
                let e = u.lines.edges.map((e) =>
                  e.node.id === d.id
                    ? { ...e, node: { ...e.node, quantity: e.node.quantity + r } }
                    : e
                );
                f = Ir({ ...u, lines: { ...u.lines, edges: e } });
              } else {
                let e = [
                  {
                    node: {
                      id: `temp-${t}-${s}`,
                      quantity: r,
                      merchandise: {
                        id: t,
                        title: a.title,
                        product: {
                          id: a.productId,
                          title: a.productTitle,
                          handle: a.productHandle,
                        },
                        image: a.image,
                        price: a.price,
                      },
                    },
                  },
                  ...u.lines.edges,
                ];
                f = Ir({ ...u, lines: { ...u.lines, edges: e } });
              }
              return (
                e.setQueryData(o, (e) => e && Pr(e, f)),
                { previousCart: l, addKey: c, counter: s }
              );
            },
            onError: (t, r, i) => {
              if (!i) return;
              let { previousCart: a, addKey: o, counter: s } = i,
                c = Dr.get(o);
              if (!(c && c.counter !== s) && a) {
                let t = [`cart`, n];
                e.setQueryData(t, a);
              }
            },
            onSettled: (t, r, i, a) => {
              if (!a) return;
              let { addKey: o, counter: s } = a,
                c = Dr.get(o);
              if (c && c.counter !== s) return;
              Dr.delete(o);
              let l = [`cart`, n];
              e.invalidateQueries({ queryKey: l });
            },
          });
        return {
          addToCart: i.mutate,
          addToCartAsync: i.mutateAsync,
          isAdding: i.isPending,
          error: i.error,
        };
      }),
      (jr = () => {
        let e = tr(),
          { getMarket: t } = mr(),
          n = t()?.countryCode,
          r = Te(),
          i = gt({
            mutationFn: async ({ cartId: e, lineId: t, quantity: i }) =>
              xr({ cartId: e, lineId: t, quantity: i, country: n, includeSellingPlans: r }),
            onMutate: async ({ lineId: t, quantity: r }) => {
              Tr.set(t, r);
              let i = [`cart`, n];
              await e.cancelQueries({ queryKey: i });
              let a = e.getQueryData(i),
                o = Nr(a);
              if (!o) return { previousCart: a };
              let s = o.lines.edges.map((e) =>
                  e.node.id === t ? { ...e, node: { ...e.node, quantity: r } } : e
                ),
                c = Ir({ ...o, lines: { ...o.lines, edges: s } });
              return (e.setQueryData(i, (e) => e && Pr(e, c)), { previousCart: a });
            },
            onError: (t, r, i) => {
              if (Tr.get(r.lineId) !== r.quantity || !i) return;
              let { previousCart: a } = i;
              if (a) {
                let t = [`cart`, n];
                e.setQueryData(t, a);
              }
            },
            onSettled: (t, r, i) => {
              if (Tr.get(i.lineId) !== i.quantity) return;
              Tr.delete(i.lineId);
              let a = [`cart`, n];
              e.invalidateQueries({ queryKey: a });
            },
          }),
          a = gt({
            mutationFn: async ({ cartId: e, lineId: t }) =>
              await Sr({ cartId: e, lineId: t, country: n, includeSellingPlans: r }),
            onMutate: async ({ lineId: t }) => {
              Er.add(t);
              let r = [`cart`, n];
              await e.cancelQueries({ queryKey: r });
              let i = e.getQueryData(r),
                a = Nr(i);
              if (!a) return { previousCart: i };
              let o = a.lines.edges.filter((e) => e.node.id !== t),
                s = Ir({ ...a, lines: { ...a.lines, edges: o } });
              return (e.setQueryData(r, (e) => e && Pr(e, s)), { previousCart: i });
            },
            onError: (t, r, i) => {
              if (!Er.has(r.lineId) || !i) return;
              let { previousCart: a } = i;
              if (a) {
                let t = [`cart`, n];
                e.setQueryData(t, a);
              }
            },
            onSuccess: (e, t) => {
              Er.delete(t.lineId);
            },
          });
        return {
          updateQuantity: {
            mutate: i.mutate,
            mutateAsync: i.mutateAsync,
            isPending: i.isPending,
            error: i.error,
          },
          removeLine: {
            mutate: a.mutate,
            mutateAsync: a.mutateAsync,
            isPending: a.isPending,
            error: a.error,
          },
        };
      }),
      (Mr = () => {
        let e = tr(),
          { getMarket: t } = mr(),
          n = t(),
          i = r(),
          a = ye(),
          { data: o, isLoading: c, error: l } = kr(),
          u = o?.data?.cart || o?.data?.cartCreate?.cart || null,
          d = u?.id || cr(),
          { addToCart: f, addToCartAsync: p, isAdding: m, error: h } = Ar(),
          { updateQuantity: g, removeLine: _ } = jr(),
          v = Te();
        return (
          s(() => {
            a ||
              (async () => {
                let t = n?.countryCode,
                  r = i.current;
                if (r && t && r !== t && d)
                  try {
                    await Cr({ cartId: d, countryCode: t, includeSellingPlans: v });
                    let n = [`cart`, t];
                    e.invalidateQueries({ queryKey: n });
                  } catch (e) {
                    console.error(`[Cart] Failed to update cart market:`, e);
                  }
                i.current = t;
              })();
          }, [n?.countryCode, d, e, a, v]),
          a
            ? {
                cart: null,
                cartId: void 0,
                isLoading: !1,
                isAdding: !1,
                error: null,
                addToCart: () => {},
                addToCartAsync: () => Promise.reject(Error(`Cart not available on Framer canvas`)),
                updateQuantity: () => {},
                removeLine: () => {},
              }
            : (a ||
                (!d && !c && l
                  ? console.error(`[useCart] Cart initialization failed:`, l, `Response data:`, o)
                  : !d &&
                    !c &&
                    !l &&
                    console.warn(
                      `[useCart] Cart ID is missing and loading finished, but no error. Response:`,
                      o
                    )),
              {
                cart: u,
                cartId: d,
                isLoading: c,
                isAdding: m,
                error: l || h,
                addToCart: (e, t = 1, n, r) => {
                  if (!d) {
                    console.warn(
                      `[useCart] Cannot add to cart: cartId is not available.`,
                      `isLoading:`,
                      c,
                      `error:`,
                      l
                    );
                    return;
                  }
                  f({ cartId: d, variantId: e, quantity: t, sellingPlanId: n, variantData: r });
                },
                addToCartAsync: (e, t = 1, n, r) =>
                  d
                    ? p({ cartId: d, variantId: e, quantity: t, sellingPlanId: n, variantData: r })
                    : (console.warn(
                        `[useCart] Cannot add to cart async: cartId is not available.`,
                        `isLoading:`,
                        c,
                        `error:`,
                        l
                      ),
                      Promise.reject(
                        Error(`Cart ID not available. Please wait for cart to initialize.`)
                      )),
                updateQuantity: (e, t) => {
                  if (!d) {
                    console.warn(`[useCart] Cannot update quantity: cartId is not available.`);
                    return;
                  }
                  g.mutate({ cartId: d, lineId: e, quantity: t });
                },
                removeLine: (e) => {
                  if (!d) {
                    console.warn(`[useCart] Cannot remove line: cartId is not available.`);
                    return;
                  }
                  _.mutate({ cartId: d, lineId: e });
                },
              })
        );
      }),
      (Nr = (e) =>
        (e?.data &&
          (e.data.cart ||
            e.data.cartCreate?.cart ||
            e.data.cartLinesAdd?.cart ||
            e.data.cartLinesUpdate?.cart ||
            e.data.cartLinesRemove?.cart)) ||
        null),
      (Pr = (e, t) =>
        e.data
          ? e.data.cart
            ? { ...e, data: { ...e.data, cart: t } }
            : e.data.cartCreate?.cart
              ? { ...e, data: { ...e.data, cartCreate: { cart: t } } }
              : e.data.cartLinesAdd?.cart
                ? { ...e, data: { ...e.data, cartLinesAdd: { cart: t } } }
                : e.data.cartLinesUpdate?.cart
                  ? { ...e, data: { ...e.data, cartLinesUpdate: { cart: t } } }
                  : e.data.cartLinesRemove?.cart
                    ? { ...e, data: { ...e.data, cartLinesRemove: { cart: t } } }
                    : e
          : e),
      (Fr = (e, t, n) => {
        if (e)
          return e.lines.edges.find((e) => {
            let r = e.node.merchandise.id === t,
              i = e.node.sellingPlanAllocation?.sellingPlan?.id;
            return r && (n ? i === n : !i);
          })?.node;
      }),
      (Ir = (e) => {
        let t = e.lines.edges.reduce(
            (e, t) => e + parseFloat(t.node.merchandise.price.amount || `0`) * t.node.quantity,
            0
          ),
          n =
            e.cost.subtotalAmount.currencyCode ||
            e.lines.edges[0]?.node.merchandise.price.currencyCode ||
            `USD`;
        return {
          ...e,
          cost: {
            ...e.cost,
            subtotalAmount: { amount: t.toFixed(2), currencyCode: n },
            totalAmount: { amount: t.toFixed(2), currencyCode: n },
          },
        };
      }));
  }),
  Rr,
  zr,
  Br = e(() => {
    (or(),
      (Rr = null),
      (zr = () => (
        (Rr ||= new Zn({
          defaultOptions: { queries: { staleTime: 300 * 1e3, gcTime: 600 * 1e3 } },
        })),
        Rr
      )));
  }),
  Y,
  Vr,
  Hr = e(() => {
    ((Y = {
      background: `#F3F3F3`,
      backgroundHover: `#E6E6E6`,
      backgroundMuted: `#D9D9D9`,
      foreground: `#111111`,
      foregroundHover: `#2A2A2A`,
      foregroundMuted: `#757575`,
      primary: `#40D41A`,
    }),
      (Vr = { borderRadius: `10px`, buttonPadding: `8px 16px 8px 16px` }));
  }),
  Ur,
  Wr = e(() => {
    Ur = {
      AED: `د.إ`,
      AFN: `؋`,
      ALL: `L`,
      AMD: `֏`,
      ANG: `ƒ`,
      AOA: `Kz`,
      ARS: `$`,
      AUD: `$`,
      AWG: `ƒ`,
      AZN: `₼`,
      BAM: `KM`,
      BBD: `$`,
      BDT: `৳`,
      BGN: `лв`,
      BHD: `.د.ب`,
      BIF: `FBu`,
      BMD: `$`,
      BND: `$`,
      BOB: `$b`,
      BOV: `BOV`,
      BRL: `R$`,
      BSD: `$`,
      BTC: `₿`,
      BTN: `Nu.`,
      BWP: `P`,
      BYN: `Br`,
      BYR: `Br`,
      BZD: `BZ$`,
      CAD: `$`,
      CDF: `FC`,
      CHE: `CHE`,
      CHF: `CHF`,
      CHW: `CHW`,
      CLF: `CLF`,
      CLP: `$`,
      CNH: `¥`,
      CNY: `¥`,
      COP: `$`,
      COU: `COU`,
      CRC: `₡`,
      CUC: `$`,
      CUP: `₱`,
      CVE: `$`,
      CZK: `Kč`,
      DJF: `Fdj`,
      DKK: `kr`,
      DOP: `RD$`,
      DZD: `دج`,
      EEK: `kr`,
      EGP: `£`,
      ERN: `Nfk`,
      ETB: `Br`,
      ETH: `Ξ`,
      EUR: `€`,
      FJD: `$`,
      FKP: `£`,
      GBP: `£`,
      GEL: `₾`,
      GGP: `£`,
      GHC: `₵`,
      GHS: `GH₵`,
      GIP: `£`,
      GMD: `D`,
      GNF: `FG`,
      GTQ: `Q`,
      GYD: `$`,
      HKD: `$`,
      HNL: `L`,
      HRK: `kn`,
      HTG: `G`,
      HUF: `Ft`,
      IDR: `Rp`,
      ILS: `₪`,
      IMP: `£`,
      INR: `₹`,
      IQD: `ع.د`,
      IRR: `﷼`,
      ISK: `kr`,
      JEP: `£`,
      JMD: `J$`,
      JOD: `JD`,
      JPY: `¥`,
      KES: `KSh`,
      KGS: `лв`,
      KHR: `៛`,
      KMF: `CF`,
      KPW: `₩`,
      KRW: `₩`,
      KWD: `KD`,
      KYD: `$`,
      KZT: `₸`,
      LAK: `₭`,
      LBP: `£`,
      LKR: `₨`,
      LRD: `$`,
      LSL: `M`,
      LTC: `Ł`,
      LTL: `Lt`,
      LVL: `Ls`,
      LYD: `LD`,
      MAD: `MAD`,
      MDL: `lei`,
      MGA: `Ar`,
      MKD: `ден`,
      MMK: `K`,
      MNT: `₮`,
      MOP: `MOP$`,
      MRO: `UM`,
      MRU: `UM`,
      MUR: `₨`,
      MVR: `Rf`,
      MWK: `MK`,
      MXN: `$`,
      MXV: `MXV`,
      MYR: `RM`,
      MZN: `MT`,
      NAD: `$`,
      NGN: `₦`,
      NIO: `C$`,
      NOK: `kr`,
      NPR: `₨`,
      NZD: `$`,
      OMR: `﷼`,
      PAB: `B/.`,
      PEN: `S/.`,
      PGK: `K`,
      PHP: `₱`,
      PKR: `₨`,
      PLN: `zł`,
      PYG: `Gs`,
      QAR: `﷼`,
      RMB: `￥`,
      RON: `lei`,
      RSD: `Дин.`,
      RUB: `₽`,
      RWF: `R₣`,
      SAR: `﷼`,
      SBD: `$`,
      SCR: `₨`,
      SDG: `ج.س.`,
      SEK: `kr`,
      SGD: `S$`,
      SHP: `£`,
      SLL: `Le`,
      SOS: `S`,
      SRD: `$`,
      SSP: `£`,
      STD: `Db`,
      STN: `Db`,
      SVC: `$`,
      SYP: `£`,
      SZL: `E`,
      THB: `฿`,
      TJS: `SM`,
      TMT: `T`,
      TND: `د.ت`,
      TOP: `T$`,
      TRL: `₤`,
      TRY: `₺`,
      TTD: `TT$`,
      TVD: `$`,
      TWD: `NT$`,
      TZS: `TSh`,
      UAH: `₴`,
      UGX: `USh`,
      USD: `$`,
      UYI: `UYI`,
      UYU: `$U`,
      UYW: `UYW`,
      UZS: `лв`,
      VEF: `Bs`,
      VES: `Bs.S`,
      VND: `₫`,
      VUV: `VT`,
      WST: `WS$`,
      XAF: `FCFA`,
      XBT: `Ƀ`,
      XCD: `$`,
      XOF: `CFA`,
      XPF: `₣`,
      XSU: `Sucre`,
      XUA: `XUA`,
      YER: `﷼`,
      ZAR: `R`,
      ZMW: `ZK`,
      ZWD: `Z$`,
      ZWL: `$`,
    };
  });
function Gr({ amount: e, currencyCode: t, options: n }) {
  e ||= 0;
  let r = (n.decimals == `auto` ? e % 1 != 0 : n.decimals == `always`) ? 2 : 0,
    i = ``;
  if (n.formatted && typeof Intl < `u`) {
    let t = n.locale || (o === void 0 ? `en-us` : o.language);
    i = new Intl.NumberFormat(t, { minimumFractionDigits: r, maximumFractionDigits: r }).format(e);
  } else i = e.toFixed(r);
  if (!t || t === `XXX`) return i;
  let a = Ur[t];
  return n.style === `code`
    ? n.location === `before`
      ? `${t} ${i}`
      : `${i} ${t}`
    : n.location === `before`
      ? `${a}${i}`
      : `${i}${a}`;
}
var Kr,
  qr = e(() => {
    (a(),
      j(),
      Wr(),
      (Kr = {
        currencyFormat: {
          type: L.Object,
          title: `Format`,
          controls: {
            style: {
              type: L.Enum,
              defaultValue: `symbol`,
              options: [`symbol`, `code`],
              optionTitles: [`Symbol ($)`, `Code (USD)`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            location: {
              type: L.Enum,
              defaultValue: `before`,
              options: [`before`, `after`],
              optionTitles: [`Before`, `After`],
              displaySegmentedControl: !0,
            },
            decimals: {
              type: L.Enum,
              defaultValue: `auto`,
              options: [`auto`, `always`, `never`],
              optionTitles: [`Auto`, `Show (10.00)`, `Hide (10)`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            formatted: { type: L.Boolean, defaultValue: !0 },
            locale: {
              type: L.String,
              defaultValue: ``,
              placeholder: `Auto (${o === void 0 ? `` : o.language})`,
              description: `Formatting examples:
*1,000* | *1.000* | *1 000*`,
              hidden: (e) => !e.formatted,
            },
          },
          hidden: (e) => e.type !== `subtotal`,
        },
      }));
  });
function Jr({ style: e }) {
  return h(S, {
    children: h(`div`, {
      style: {
        width: `100%`,
        height: `16px`,
        backgroundColor: Y.backgroundMuted,
        borderRadius: `10px`,
        animation: `pulse 1.5s ease-in-out infinite`,
        ...e,
      },
    }),
  });
}
var Yr,
  Xr,
  Zr,
  Qr = e(() => {
    (x(),
      Hr(),
      j(),
      (Yr = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`),
      (Xr = _e(Jr, [Yr], ``)),
      (Zr = Xr));
  });
function $r(e, t, n) {
  let r = { ...n, margin: 0, padding: 0, whiteSpace: `nowrap` };
  switch (e) {
    case `p`:
      return h(`p`, { style: r, children: t });
    case `span`:
      return h(`span`, { style: r, children: t });
    case `h1`:
      return h(`h1`, { style: r, children: t });
    case `h2`:
      return h(`h2`, { style: r, children: t });
    case `h3`:
      return h(`h3`, { style: r, children: t });
    case `h4`:
      return h(`h4`, { style: r, children: t });
    case `h5`:
      return h(`h5`, { style: r, children: t });
    case `h6`:
      return h(`h6`, { style: r, children: t });
  }
}
var ei,
  ti = e(() => {
    (x(),
      j(),
      (ei = {
        tag: {
          type: L.Enum,
          options: [`p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
          defaultValue: `p`,
        },
      }));
  }),
  ni,
  ri,
  ii,
  ai,
  oi = e(() => {
    (j(),
      (ni = {
        needHelp: {
          type: L.Object,
          title: `Need help?`,
          buttonTitle: `Get Support`,
          icon: `interaction`,
          controls: {
            info: {
              type: L.Enum,
              defaultValue: `info`,
              options: [`info`],
              optionTitles: [`Support 🛟`],
              displaySegmentedControl: !0,
              title: `Get Support`,
              description: `We're here to help! The best place to get support is to visit our documentation to find your answers. We're also available on live chat.

[Visit Frameship docs](https://insertframe.io/docs/frameship)`,
            },
          },
        },
      }),
      (ri = `Connect this to a *Shopify Data* variable from CMS.`),
      (ii = `Connect this to a *Variant Image Mapping* variable from CMS.`),
      (ai = `Connect this to a *Variant Options* variable from CMS.`));
  }),
  si,
  ci = e(() => {
    (j(),
      Hr(),
      (si = {
        loaderStyle: {
          type: L.Object,
          title: `🎨 Loader Style`,
          buttonTitle: `Show, Size, Color`,
          controls: {
            showLoader: { type: L.Boolean, title: `Visible`, defaultValue: !0 },
            backgroundColor: {
              type: L.Color,
              title: `Background`,
              defaultValue: Y.backgroundMuted,
              hidden: (e) => !e.showLoader,
            },
            width: {
              type: L.Number,
              title: `Width`,
              defaultValue: 16,
              min: 1,
              step: 1,
              unit: `px`,
              hidden: (e) => !e.showLoader,
            },
            height: {
              type: L.Number,
              title: `Height`,
              defaultValue: 16,
              min: 1,
              step: 1,
              unit: `px`,
              hidden: (e) => !e.showLoader,
            },
            previewLoader: {
              type: L.Boolean,
              title: `Preview`,
              defaultValue: !1,
              hidden: (e) => !e.showLoader,
              description: `Preview the loader on the Framer canvas.`,
            },
          },
          description: `Pulsing-frame animation displayed while the component loads data from Shopify, usually for a split second on first page load.`,
        },
      }));
  });
function li(e) {
  return h(nr, { client: zr(), children: h(ui, { ...e }) });
}
function ui(e) {
  let { cart: t, isLoading: n, error: r } = Mr(),
    { getMarket: i } = mr(),
    a = i(),
    o = ye(),
    s = Se(),
    c,
    l = { ...e.font, color: e.color };
  if ((n && e.loaderStyle.showLoader) || (o && e.loaderStyle.previewLoader))
    return h(Zr, {
      style: {
        width: e.loaderStyle.width,
        height: e.loaderStyle.height,
        backgroundColor: e.loaderStyle.backgroundColor,
      },
    });
  if (r) return null;
  if (!t) {
    if ((o || s) && e.whenZero === `show` && e.type === `itemCount`) return $r(e.tag, `0`, l);
    if ((o || s) && e.whenZero === `show` && e.type === `subtotal`) {
      let t = a?.currencyCode || `USD`;
      return $r(e.tag, Gr({ amount: 0, currencyCode: t, options: e.currencyFormat }), l);
    } else return null;
  }
  let u = (t.lines?.edges || []).reduce((e, { node: t }) => e + t.quantity, 0),
    d = t.cost?.subtotalAmount;
  c =
    e.type === `subtotal`
      ? d && !o
        ? Gr({ amount: Number(d.amount), currencyCode: d.currencyCode, options: e.currencyFormat })
        : d && (o || s)
          ? Gr({ amount: 0, currencyCode: d.currencyCode, options: e.currencyFormat })
          : `0`
      : o || s
        ? `0`
        : u.toString();
  let f = c === `0` || (e.type === `itemCount` && u === 0);
  return e.whenZero === `hide` && f ? null : $r(e.tag, c, l);
}
var di = e(() => {
    (x(),
      j(),
      or(),
      Lr(),
      hr(),
      Br(),
      we(),
      Hr(),
      qr(),
      Qr(),
      ti(),
      oi(),
      ci(),
      k(li, {
        type: {
          type: L.Enum,
          options: [`subtotal`, `itemCount`],
          optionTitles: [`Subtotal`, `Item Count`],
          defaultValue: `subtotal`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
        ...Kr,
        font: { type: L.Font, title: `Font`, controls: `extended`, defaultFontType: `sans-serif` },
        color: { type: L.Color, title: `Color`, defaultValue: Y.foreground },
        whenZero: {
          type: L.Enum,
          title: `When Zero`,
          options: [`show`, `hide`],
          optionTitles: [`Show`, `Hide`],
          defaultValue: `show`,
          displaySegmentedControl: !0,
          description: `Hides the component when the value is 0`,
        },
        ...ei,
        ...si,
        ...ni,
      }),
      (li.displayName = `Cart Info Label`));
  }),
  fi,
  pi,
  mi = e(() => {
    ((fi = `framership-open-cart`), (pi = `framership-close-cart`));
  });
function hi(e) {
  let t = Ee(),
    n = r(null);
  s(() => {
    if (!t) return;
    (n.current?.(), (n.current = null));
    let r = () => {
      let e = document.body.style.overflow;
      document.body.style.overflow = `hidden`;
      let t = d.lenis,
        r =
          (t?.options?.wrapper instanceof HTMLElement ? t.options.wrapper : null) ??
          (t?.wrapper instanceof HTMLElement ? t.wrapper : null),
        i = r
          ? {
              overflowX: r.style.overflowX,
              overflowY: r.style.overflowY,
              touchAction: r.style.touchAction ?? ``,
              overscrollBehavior: r.style.overscrollBehavior ?? ``,
            }
          : null;
      try {
        t?.stop?.();
      } catch {}
      (r &&
        ((r.style.overflowX = `hidden`),
        (r.style.overflowY = `hidden`),
        (r.style.touchAction = `none`),
        (r.style.overscrollBehavior = `none`)),
        (n.current = () => {
          ((document.body.style.overflow = e),
            r &&
              i &&
              ((r.style.overflowX = i.overflowX),
              (r.style.overflowY = i.overflowY),
              (r.style.touchAction = i.touchAction),
              (r.style.overscrollBehavior = i.overscrollBehavior)));
          try {
            t?.start?.();
          } catch {}
        }));
    };
    if (e) r();
    else {
      document.body.style.overflow = ``;
      try {
        d.lenis?.start?.();
      } catch {}
    }
    return () => {
      t && (n.current?.(), (n.current = null), (document.body.style.overflow = ``));
    };
  }, [e, t]);
}
var gi = e(() => {
  (a(), n(), we());
});
function _i(e, t) {
  return `gid://shopify/${e}/${t}`;
}
function vi(e) {
  return _i(`Product`, e);
}
function yi(e) {
  return _i(`ProductVariant`, e);
}
function bi(e) {
  let t = e.match(/^gid:\/\/shopify\/([^\/]+)\/(.+)$/);
  if (!t) throw Error(`Invalid Shopify GID format: ${e}`);
  return { type: t[1], id: t[2] };
}
function xi(e) {
  let { type: t, id: n } = bi(e);
  if (t !== `ProductVariant`) throw Error(`Expected ProductVariant GID, got ${t}: ${e}`);
  return n;
}
var Si = e(() => {}),
  Ci,
  wi = e(() => {
    (De(),
      Si(),
      (Ci = async (e) =>
        await Ce({
          query: `#graphql
    query getInventory($productId: ID!) {
      product(id: $productId) {
        variants(first: 100) {
          edges {
            node {
              id
							quantityAvailable
            }
          }
        }
      }
    }
  `,
          variables: { productId: vi(e) },
        })));
  }),
  Ti,
  Ei,
  Di = e(() => {
    (or(),
      wi(),
      (Ti = { all: [`inventory`], byId: (e) => [`inventory`, e] }),
      (Ei = (e) => {
        let {
          data: t,
          isLoading: n,
          error: r,
        } = ht({ queryKey: Ti.byId(e), queryFn: () => Ci(e), enabled: !!e });
        return { data: t, isLoading: n, error: r };
      }));
  });
function Oi(e, t) {
  let n = (e) => {
      if (typeof e != `object` || !e || typeof e == `function`) return e;
      if (Array.isArray(e)) return e.map(n);
      let t = {};
      for (let r in e) e.hasOwnProperty(r) && (t[r] = n(e[r]));
      return t;
    },
    r = n(e);
  return (
    Object.entries(t).forEach(([e, t]) => {
      let n = e.split(`.`),
        i = r,
        a = null,
        o = null;
      for (let r = 0; r < n.length; r++) {
        let s = n[r];
        if (r === n.length - 1) {
          if (s === `defaultValue` && a && o) {
            let e = a[o];
            e && typeof e == `object` && e.defaultValue !== void 0 && (e.defaultValue = t);
          } else if (s === `hidden`)
            if (i[s] && typeof i[s] == `object` && i[s].controls) i[s].hidden = t;
            else if (a && o) {
              let e = a[o];
              e && (e.hidden = t);
            } else i[s] && typeof i[s] == `object` && (i[s].hidden = t);
          else if (s === `title`)
            if (i[s] && typeof i[s] == `object` && i[s].controls) i[s].title = t;
            else if (a && o) {
              let e = a[o];
              e && (e.title = t);
            } else i[s] && typeof i[s] == `object` && (i[s].title = t);
          else if (i[s] && typeof i[s] == `object`) {
            if (i[s].controls)
              console.warn(`Cannot override ${e} - it's a parent control with nested controls`);
            else if (i[s].defaultValue !== void 0) i[s].defaultValue = t;
            else if (a && o) {
              let e = a[o];
              e?.defaultValue && typeof e.defaultValue == `object` && (e.defaultValue[s] = t);
            }
          } else if (a && o) {
            let e = a[o];
            e?.defaultValue && typeof e.defaultValue == `object` && (e.defaultValue[s] = t);
          }
        } else if (i[s]?.controls) ((a = i), (o = s), (i = i[s].controls));
        else if (i[s] && typeof i[s] == `object`)
          i[s].defaultValue === void 0
            ? ((a = i), (o = s), (i = i[s]))
            : ((a = i),
              (o = s),
              (i =
                typeof i[s].defaultValue == `object` && i[s].defaultValue !== null
                  ? i[s].defaultValue
                  : i[s]));
        else {
          console.warn(`Path ${e} not found in controls`);
          return;
        }
      }
    }),
    r
  );
}
function ki(e, t, n) {
  let r = ye(),
    i = Se(),
    { data: a, isLoading: o, error: s } = Ei(e);
  if (r || i) return { isDisabled: !1 };
  let c = (a?.data?.product?.variants?.edges || []).find((e) => xi(e.node.id) === t);
  if (o || s) return { isDisabled: !1 };
  let l = c ? c.node.quantityAvailable > 0 : !1,
    u = c ? c.node.quantityAvailable === null || c.node.quantityAvailable === -1 : !1;
  return { isDisabled: n && !u && !l };
}
var X,
  Z,
  Ai,
  Q,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li = e(() => {
    (j(),
      Hr(),
      Di(),
      Si(),
      we(),
      (X = {
        presetButtonStyle: {
          alignItems: `center`,
          justifyContent: `center`,
          gap: 8,
          padding: Vr.buttonPadding,
          border: { borderWidth: 0, borderStyle: `solid`, borderColor: Y.foregroundMuted },
          borderRadius: Vr.borderRadius,
          textColor: Y.background,
          backgroundColor: Y.foreground,
          shadow: void 0,
          hover: {
            textColor: Y.backgroundHover,
            backgroundColor: Y.foregroundHover,
            shadow: void 0,
            border: { borderWidth: 0, borderStyle: `solid`, borderColor: Y.foregroundMuted },
          },
          tapScale: 0.98,
        },
      }),
      (Z = {
        presetButtonStyle: {
          ...X.presetButtonStyle,
          backgroundColor: Y.background,
          textColor: Y.foreground,
          hover: {
            ...X.presetButtonStyle.hover,
            backgroundColor: Y.backgroundHover,
            textColor: Y.foreground,
          },
        },
      }),
      (Ai = {
        text: `Out of Stock`,
        textColor: Y.background,
        backgroundColor: Y.foregroundMuted,
        border: { borderWidth: 0, borderStyle: `solid`, borderColor: Y.foregroundMuted },
        opacity: 0.7,
      }),
      (Q = {
        disabledStyle: {
          alignItems: `center`,
          justifyContent: `center`,
          gap: 8,
          padding: Vr.buttonPadding,
          border: { borderWidth: 0, borderStyle: `solid`, borderColor: Y.foregroundMuted },
          borderRadius: Vr.borderRadius,
          textColor: Y.foregroundMuted,
          backgroundColor: Y.backgroundMuted,
          shadow: void 0,
          tapScale: 1,
        },
      }),
      (ji = {
        presetButtonStyle: {
          title: `🎨 Styling`,
          type: L.Object,
          controls: {
            alignItems: {
              title: `Align`,
              type: L.Enum,
              defaultValue: X.presetButtonStyle?.alignItems,
              options: [`start`, `center`, `end`],
              optionTitles: [`Start`, `Center`, `End`],
              optionIcons: [`align-bottom`, `align-middle`, `align-top`],
              displaySegmentedControl: !0,
            },
            justifyContent: {
              title: `Distribute`,
              type: L.Enum,
              options: [`center`, `start`, `end`, `space-between`],
              optionTitles: [`Center`, `Start`, `End`, `Space Between`],
              defaultValue: X.presetButtonStyle?.justifyContent,
            },
            gap: {
              type: L.Number,
              title: `Gap`,
              defaultValue: X.presetButtonStyle?.gap,
              unit: `px`,
            },
            padding: {
              type: L.Padding,
              title: `Padding`,
              defaultValue: X.presetButtonStyle?.padding,
            },
            border: {
              type: L.Border,
              title: `Border`,
              defaultValue: {
                borderWidth: (X.presetButtonStyle?.border).borderWidth,
                borderStyle: (X.presetButtonStyle?.border).borderStyle,
                borderColor: (X.presetButtonStyle?.border).borderColor,
              },
            },
            borderRadius: {
              type: L.BorderRadius,
              title: `Border Radius`,
              defaultValue: X.presetButtonStyle?.borderRadius,
            },
            textColor: {
              title: `Text Color`,
              type: L.Color,
              defaultValue: X.presetButtonStyle?.textColor,
            },
            backgroundColor: {
              title: `Background`,
              type: L.Color,
              defaultValue: X.presetButtonStyle?.backgroundColor,
            },
            shadow: {
              title: `Shadow`,
              type: L.BoxShadow,
              defaultValue: X.presetButtonStyle?.shadow,
            },
            hover: {
              title: `Hover`,
              type: L.Object,
              controls: {
                textColor: {
                  title: `Text`,
                  type: L.Color,
                  defaultValue: X.presetButtonStyle?.hover?.textColor,
                },
                backgroundColor: {
                  title: `Background`,
                  type: L.Color,
                  defaultValue: X.presetButtonStyle?.hover?.backgroundColor,
                },
                shadow: {
                  title: `Shadow`,
                  type: L.BoxShadow,
                  defaultValue: X.presetButtonStyle?.hover?.shadow,
                },
                border: {
                  title: `Border`,
                  type: L.Border,
                  defaultValue: X.presetButtonStyle?.hover?.border,
                },
              },
              buttonTitle: `Style`,
            },
            tapScale: {
              title: `Tap Scale`,
              type: L.Number,
              defaultValue: X.presetButtonStyle?.tapScale,
              min: 0,
              max: 1,
              step: 0.01,
            },
            font: {
              title: `Font`,
              type: L.Font,
              defaultFontType: `sans-serif`,
              controls: `extended`,
              defaultValue: { fontSize: `16px`, variant: `Regular`, lineHeight: `1em` },
              hidden: (e) => e.buttonType === `custom`,
            },
          },
          hidden: (e) => e.buttonType === `custom`,
        },
      }),
      (Mi = {
        disabledStyle: {
          title: `🎨 Disabled Styling`,
          type: L.Object,
          controls: {
            alignItems: {
              title: `Align`,
              type: L.Enum,
              defaultValue: Q.disabledStyle?.alignItems,
              options: [`start`, `center`, `end`],
              optionTitles: [`Start`, `Center`, `End`],
              optionIcons: [`align-bottom`, `align-middle`, `align-top`],
              displaySegmentedControl: !0,
            },
            justifyContent: {
              title: `Distribute`,
              type: L.Enum,
              options: [`center`, `start`, `end`, `space-between`],
              optionTitles: [`Center`, `Start`, `End`, `Space Between`],
              defaultValue: Q.disabledStyle?.justifyContent,
            },
            gap: { type: L.Number, title: `Gap`, defaultValue: Q.disabledStyle?.gap, unit: `px` },
            padding: { type: L.Padding, title: `Padding`, defaultValue: Q.disabledStyle?.padding },
            border: {
              type: L.Border,
              title: `Border`,
              defaultValue: {
                borderWidth: (Q.disabledStyle?.border).borderWidth,
                borderStyle: (Q.disabledStyle?.border).borderStyle,
                borderColor: (Q.disabledStyle?.border).borderColor,
              },
            },
            borderRadius: {
              type: L.BorderRadius,
              title: `Border Radius`,
              defaultValue: Q.disabledStyle?.borderRadius,
            },
            textColor: {
              title: `Text Color`,
              type: L.Color,
              defaultValue: Q.disabledStyle?.textColor,
            },
            backgroundColor: {
              title: `Background`,
              type: L.Color,
              defaultValue: Q.disabledStyle?.backgroundColor,
            },
            shadow: { title: `Shadow`, type: L.BoxShadow, defaultValue: Q.disabledStyle?.shadow },
            tapScale: {
              title: `Tap Scale`,
              type: L.Number,
              defaultValue: Q.disabledStyle?.tapScale,
              min: 0,
              max: 1,
              step: 0.01,
            },
            font: {
              title: `Font`,
              type: L.Font,
              defaultFontType: `sans-serif`,
              controls: `extended`,
              hidden: (e) => e.buttonType === `custom`,
            },
          },
          hidden: (e) => e.buttonType === `custom`,
        },
      }),
      (Ni = {
        presetButtonStyle: {
          title: `🎨 Styling`,
          type: L.Object,
          controls: {
            alignItems: {
              title: `Align`,
              type: L.Enum,
              defaultValue: Z.presetButtonStyle?.alignItems,
              options: [`start`, `center`, `end`],
              optionTitles: [`Start`, `Center`, `End`],
              optionIcons: [`align-bottom`, `align-middle`, `align-top`],
              displaySegmentedControl: !0,
            },
            justifyContent: {
              title: `Distribute`,
              type: L.Enum,
              options: [`center`, `start`, `end`, `space-between`],
              optionTitles: [`Center`, `Start`, `End`, `Space Between`],
              defaultValue: Z.presetButtonStyle?.justifyContent,
            },
            gap: {
              type: L.Number,
              title: `Gap`,
              defaultValue: Z.presetButtonStyle?.gap,
              unit: `px`,
            },
            padding: {
              type: L.Padding,
              title: `Padding`,
              defaultValue: Z.presetButtonStyle?.padding,
            },
            border: {
              type: L.Border,
              title: `Border`,
              defaultValue: {
                borderWidth: (Z.presetButtonStyle?.border).borderWidth,
                borderStyle: (Z.presetButtonStyle?.border).borderStyle,
                borderColor: (Z.presetButtonStyle?.border).borderColor,
              },
            },
            borderRadius: {
              type: L.BorderRadius,
              title: `Border Radius`,
              defaultValue: Z.presetButtonStyle?.borderRadius,
            },
            textColor: {
              title: `Text Color`,
              type: L.Color,
              defaultValue: Z.presetButtonStyle?.textColor,
            },
            backgroundColor: {
              title: `Background`,
              type: L.Color,
              defaultValue: Z.presetButtonStyle?.backgroundColor,
            },
            shadow: {
              title: `Shadow`,
              type: L.BoxShadow,
              defaultValue: Z.presetButtonStyle?.shadow,
            },
            hover: {
              title: `Hover`,
              type: L.Object,
              controls: {
                textColor: {
                  title: `Text`,
                  type: L.Color,
                  defaultValue: Z.presetButtonStyle?.hover?.textColor,
                },
                backgroundColor: {
                  title: `Background`,
                  type: L.Color,
                  defaultValue: Z.presetButtonStyle?.hover?.backgroundColor,
                },
                shadow: {
                  title: `Shadow`,
                  type: L.BoxShadow,
                  defaultValue: Z.presetButtonStyle?.hover?.shadow,
                },
                border: {
                  title: `Border`,
                  type: L.Border,
                  defaultValue: Z.presetButtonStyle?.hover?.border,
                },
              },
              buttonTitle: `Style`,
            },
            tapScale: {
              title: `Tap Scale`,
              type: L.Number,
              defaultValue: Z.presetButtonStyle?.tapScale,
              min: 0,
              max: 1,
              step: 0.01,
            },
            font: {
              title: `Font`,
              type: L.Font,
              defaultFontType: `sans-serif`,
              controls: `extended`,
              hidden: (e) => e.buttonType === `custom`,
            },
          },
          hidden: (e) => e.buttonType === `custom`,
        },
      }),
      (Pi = {
        showDefaultIcon: {
          title: `Default Icon`,
          type: L.Boolean,
          defaultValue: !0,
          hidden: () => !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        text: {
          title: `Text`,
          type: L.String,
          defaultValue: `Button`,
          hidden: (e) => e.buttonType === `custom`,
        },
        leftIcon: {
          title: `Left Icon`,
          type: L.ComponentInstance,
          hidden: (e) => e.buttonType === `custom`,
        },
        rightIcon: {
          title: `Right Icon`,
          type: L.ComponentInstance,
          hidden: (e) => e.buttonType === `custom`,
        },
      }),
      (Fi = {
        buttonType: {
          title: `Button Type`,
          type: L.Enum,
          options: [`preset`, `custom`],
          optionTitles: [`Preset`, `Custom`],
          displaySegmentedControl: !0,
          defaultValue: `preset`,
        },
        customButton: {
          title: `Button`,
          type: L.ComponentInstance,
          hidden: (e) => e.buttonType === `preset`,
        },
        customButtonSize: {
          title: `Button Size`,
          type: L.Object,
          controls: {
            width: {
              type: L.Enum,
              title: `Width`,
              options: [`default`, `fill`],
              optionTitles: [`Default`, `Fill`],
              defaultValue: `default`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            height: {
              type: L.Enum,
              title: `Height`,
              options: [`default`, `fill`],
              optionTitles: [`Default`, `Fill`],
              defaultValue: `default`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
          },
          hidden: (e) => e.buttonType === `preset`,
        },
      }),
      (Ii = {
        outOfStockStyle: {
          title: `Out of Stock Style`,
          type: L.Object,
          controls: {
            text: { title: `Text`, type: L.String, defaultValue: Ai.text },
            textColor: { title: `Text Color`, type: L.Color, defaultValue: Ai.textColor },
            backgroundColor: {
              title: `Background`,
              type: L.Color,
              defaultValue: Ai.backgroundColor,
            },
            border: { title: `Border`, type: L.Border, defaultValue: Ai.border },
            shadow: { title: `Shadow`, type: L.BoxShadow, defaultValue: Ai.shadow },
            opacity: {
              title: `Opacity`,
              type: L.Number,
              defaultValue: Ai.opacity,
              min: 0,
              max: 1,
              step: 0.01,
            },
          },
          hidden: (e) => e.buttonType === `custom`,
        },
      }),
      L.Object,
      L.Enum,
      Z.presetButtonStyle?.alignItems,
      L.Enum,
      Z.presetButtonStyle?.justifyContent,
      L.Number,
      Z.presetButtonStyle?.gap,
      L.Padding,
      Z.presetButtonStyle?.padding,
      L.Border,
      (Z.presetButtonStyle?.border).borderWidth,
      (Z.presetButtonStyle?.border).borderStyle,
      (Z.presetButtonStyle?.border).borderColor,
      L.BorderRadius,
      Z.presetButtonStyle?.borderRadius,
      L.Color,
      Y.background,
      L.Color,
      Y.primary,
      L.BoxShadow,
      Z.presetButtonStyle?.shadow,
      L.Object,
      L.Color,
      Y.background,
      L.Color,
      Y.primary,
      L.BoxShadow,
      Z.presetButtonStyle?.hover?.shadow,
      L.Border,
      Z.presetButtonStyle?.hover?.border,
      L.Number,
      Z.presetButtonStyle?.tapScale,
      L.Font);
  });
function Ri({ style: e }) {
  return h(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    className: `lucide lucide-loader-circle-icon lucide-loader-circle`,
    style: { ...e },
    children: h(`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56` }),
  });
}
var zi = e(() => {
  x();
});
function Bi({ style: e }) {
  return b(S, {
    children: [
      h(`style`, {
        children: `
          @keyframes loading-spinner {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `,
      }),
      h(Ri, { style: { animation: `loading-spinner 1s linear infinite`, ...e } }),
    ],
  });
}
var Vi = e(() => {
  (x(), zi());
});
function Hi(e) {
  let {
      leftIcon: t,
      rightIcon: n,
      font: r,
      text: i,
      onClick: a,
      presetButtonStyle: o,
      disabledStyle: s,
      style: c,
      disabled: l,
      isLoading: u,
      ...d
    } = e,
    f = {
      ...X.presetButtonStyle,
      ...(o || {}),
      hover: { ...X.presetButtonStyle?.hover, ...(o?.hover || {}) },
    },
    p = { ...Q.disabledStyle, ...(s || {}) },
    m = l ? p : f;
  return b(w.button, {
    onClick: (e) => {
      a(e);
    },
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      cursor: l ? `not-allowed` : `pointer`,
      alignItems: m?.alignItems,
      justifyContent: m?.justifyContent,
      gap: m?.gap,
      padding: m?.padding,
      border:
        typeof m?.border == `string`
          ? m.border
          : m?.border
            ? `${m.border.borderWidth || 0}px ${m.border.borderStyle || `solid`} ${m.border.borderColor || `transparent`}`
            : void 0,
      borderRadius: m?.borderRadius,
      backgroundColor: m?.backgroundColor,
      color: m?.textColor,
      boxShadow: m?.shadow,
      ...(l && s?.font ? s.font : r),
      ...c,
    },
    animate: {
      backgroundColor: m?.backgroundColor,
      color: m?.textColor,
      boxShadow: m?.shadow,
      border:
        typeof m?.border == `string`
          ? m.border
          : m?.border
            ? `${m.border.borderWidth || 0}px ${m.border.borderStyle || `solid`} ${m.border.borderColor || `transparent`}`
            : void 0,
    },
    whileHover: l
      ? void 0
      : {
          backgroundColor: f?.hover?.backgroundColor,
          color: f?.hover?.textColor,
          boxShadow: f?.hover?.shadow,
          border:
            typeof f?.hover?.border == `string`
              ? f.hover.border
              : f?.hover?.border
                ? `${f.hover.border.borderWidth || 0}px ${f.hover.border.borderStyle || `solid`} ${f.hover.border.borderColor || `transparent`}`
                : void 0,
          transition: { duration: 0.3, ease: `easeOut` },
        },
    whileTap: { scale: m?.tapScale, transition: { duration: 0.1, ease: `easeOut` } },
    disabled: l || u,
    ...d,
    children: [
      u &&
        h(Bi, { style: { width: d.loadingSpinnerSize || 24, height: d.loadingSpinnerSize || 24 } }),
      t && !u && h(`span`, { children: t }),
      i && !u && h(`span`, { children: i }),
      n && !u && h(`span`, { children: n }),
    ],
  });
}
var Ui = e(() => {
  (x(), D(), Li(), Vi());
});
function Wi(e) {
  return h(`div`, {
    onClick: e.disabled ? void 0 : e.onClick,
    style: {
      overflow: `visible`,
      width: e.customButtonSize?.width === `default` ? `fit-content` : `100%`,
      height: e.customButtonSize?.height === `default` ? `fit-content` : `100%`,
      display: `flex`,
      cursor: e.disabled ? `not-allowed` : `pointer`,
      opacity: e.disabled ? 0.5 : 1,
    },
    children: h(S, {
      children: m.Children.map(e.children, (t) =>
        m.cloneElement(t, {
          style: {
            ...t.props.style,
            width: e.customButtonSize?.width === `fill` ? `100%` : t.props.width,
            height: e.customButtonSize?.height === `fill` ? `100%` : t.props.height,
          },
        })
      ),
    }),
  });
}
var Gi = e(() => {
  (x(), n());
});
function Ki({ style: e }) {
  return b(`svg`, {
    width: `16`,
    height: `16`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    style: { ...e },
    children: [
      h(`circle`, { cx: `8`, cy: `21`, r: `1` }),
      h(`circle`, { cx: `19`, cy: `21`, r: `1` }),
      h(`path`, {
        d: `m2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,
      }),
    ],
  });
}
var qi = e(() => {
  x();
});
function Ji(e) {
  let t = ge.hasRestrictions(),
    [n, r] = u(!1),
    i = () => r(!0),
    a = () => r(!1),
    { overlayParentClasses: o, ref: s } = Xi(t);
  return (
    Zi(i, a),
    b(`div`, {
      ref: s,
      style: { width: `100%`, height: `100%` },
      children: [
        e.buttonType === `custom` &&
          h(Wi, { onClick: i, customButtonSize: e.customButtonSize, children: e.customButton }),
        e.buttonType === `preset` &&
          h(Hi, {
            onClick: i,
            leftIcon: e.leftIcon?.[0] ?? h(Ki, { style: { width: `16px`, height: `16px` } }),
            rightIcon: e.rightIcon?.[0],
            font: e.presetButtonStyle.font,
            text: e.text ? e.text : void 0,
            presetButtonStyle: e.presetButtonStyle,
          }),
        !t &&
          h(Yi, {
            isOpen: n,
            onClose: a,
            cartLayer: e.cartLayer,
            overlayParentClasses: o,
            backdropOverlay: e.backdropOverlay,
            cartLayerAnimation: e.cartLayerConfig.cartLayerAnimation,
            cartLayerHeight: e.cartLayerConfig.cartLayerHeight,
            cartLayerPosition: e.cartLayerConfig.cartLayerPosition,
            shadow: e.cartLayerConfig.shadow,
          }),
      ],
    })
  );
}
function Yi({
  isOpen: e,
  onClose: t,
  cartLayer: n,
  overlayParentClasses: i,
  backdropOverlay: a,
  cartLayerAnimation: o,
  cartLayerHeight: s,
  cartLayerPosition: c,
  shadow: l,
}) {
  let u = Ee(),
    d = r(null);
  (hi(e), Qi(u, e, d, n));
  let f = u
      ? document.querySelector(`[data-framer-root]`) ||
        document.getElementById(`main`) ||
        document.body
      : null,
    p = h(E, {
      mode: `wait`,
      children:
        e &&
        b(S, {
          children: [
            h(w.div, {
              ref: d,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: t,
              style: {
                position: `fixed`,
                top: 0,
                left: 0,
                width: `100vw`,
                height: `100vh`,
                backgroundColor: a.backgroundColor,
                backdropFilter: `blur(${a.blur}px)`,
                zIndex: 11,
              },
              transition: a.transition,
              id: `frameship-cart-overlay`,
            }),
            h(w.div, {
              initial: {
                x: o.offsetX,
                y: o.offsetY,
                opacity: o.opacity,
                scale: o.scale,
                rotate: o.rotate,
              },
              animate: { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 },
              exit: {
                x: o.offsetX,
                y: o.offsetY,
                opacity: o.opacity,
                scale: o.scale,
                rotate: o.rotate,
              },
              transition: o.transition,
              style: {
                position: `fixed`,
                ...ea(c),
                width: `fit-content`,
                maxWidth: `100%`,
                height: `100dvh`,
                zIndex: 12,
                boxShadow: l,
                overflowY: `auto`,
              },
              id: `frameship-cart-layer`,
              children: m.Children.map(n, (e) =>
                m.cloneElement(e, {
                  ...e.props,
                  style: {
                    ...e.props.style,
                    height: s === `viewport` ? `100dvh` : e.props.height,
                    maxWidth: `100%`,
                  },
                })
              ),
            }),
          ],
        }),
    });
  return f
    ? v(
        i.reduce((e, t) => h(`div`, { className: `${t} frameship-contents`, children: e }), p),
        f
      )
    : null;
}
function Xi(e) {
  let [t, n] = u([]),
    i = r(null);
  return (
    s(() => {
      !e &&
        i.current &&
        n(
          (() => {
            let e = [],
              t = i.current;
            for (; t && t.tagName.toLowerCase() !== `main`;)
              (t.className && e.push(t.className), (t = t.parentElement));
            return e.reverse();
          })()
        );
    }, [e]),
    { overlayParentClasses: t, ref: i }
  );
}
function Zi(e, t) {
  let n = Ee();
  s(() => {
    if (!n) return;
    let r = () => e(),
      i = () => t();
    return (
      document.addEventListener(fi, r),
      document.addEventListener(pi, i),
      () => {
        (document.removeEventListener(fi, r), document.removeEventListener(pi, i));
      }
    );
  }, [n, e, t]);
}
function Qi(e, t, n, r) {
  s(() => {
    if (!e || !t) return;
    let r = document.getElementById(`frameship-cart-layer`),
      i = n.current;
    if (r && i) {
      let e = r.firstElementChild;
      if (e?.hasAttribute(`data-framer-cursor`)) {
        let t = e.getAttribute(`data-framer-cursor`);
        t && i.setAttribute(`data-framer-cursor`, t);
      } else i.removeAttribute(`data-framer-cursor`);
    }
  }, [e, t, r, n]);
}
function $i(e) {
  return h(ta, { ...e });
}
var ea,
  ta,
  na = e(() => {
    (x(),
      n(),
      p(),
      j(),
      D(),
      mi(),
      we(),
      gi(),
      Ui(),
      Gi(),
      qi(),
      Li(),
      oi(),
      (ea = (e) => {
        let { position: t, offsetX: n, offsetY: r } = e;
        switch (t) {
          case `top left`:
            return { top: `${r}px`, left: `${n}px` };
          case `top right`:
            return { top: `${r}px`, right: `${n}px` };
          case `bottom right`:
            return { bottom: `${r}px`, right: `${n}px` };
          case `bottom left`:
            return { bottom: `${r}px`, left: `${n}px` };
          default:
            return { top: `${r}px`, right: `${n}px` };
        }
      }),
      (ta = _e(Ji, [`.frameship-contents { display: contents !important }`], ``)),
      k($i, {
        cartLayer: {
          type: L.ComponentInstance,
          description: `Connect a layer. Must be a component, not a stack.`,
        },
        cartLayerConfig: {
          title: `Cart Layer Config`,
          buttonTitle: `Height, Position, Animation`,
          type: L.Object,
          controls: {
            cartLayerHeight: {
              title: `Height`,
              type: L.Enum,
              defaultValue: `viewport`,
              options: [`viewport`, `default`],
              optionTitles: [`Viewport`, `Default`],
              displaySegmentedControl: !0,
            },
            cartLayerPosition: {
              title: `Position`,
              type: L.Object,
              controls: {
                position: {
                  title: `Position`,
                  type: L.Enum,
                  defaultValue: `top right`,
                  options: [`top left`, `top right`, `bottom right`, `bottom left`],
                  optionTitles: [`Top Left`, `Top Right`, `Bottom Right`, `Bottom Left`],
                },
                offsetX: { title: `Offset X`, type: L.Number, defaultValue: 0, unit: `px` },
                offsetY: { title: `Offset Y`, type: L.Number, defaultValue: 0, unit: `px` },
              },
            },
            cartLayerAnimation: {
              title: `Animation`,
              type: L.Object,
              buttonTitle: `Enter Effect`,
              icon: `effect`,
              controls: {
                opacity: {
                  title: `Opacity`,
                  type: L.Number,
                  min: 0,
                  max: 1,
                  step: 0.1,
                  defaultValue: 0,
                },
                scale: {
                  title: `Scale`,
                  type: L.Number,
                  min: 0,
                  max: 2,
                  step: 0.1,
                  defaultValue: 1,
                },
                rotate: {
                  title: `Rotate`,
                  type: L.Number,
                  min: -360,
                  max: 360,
                  step: 1,
                  defaultValue: 0,
                  unit: `deg`,
                },
                offsetX: { title: `Offset X`, type: L.Number, defaultValue: 100, unit: `px` },
                offsetY: { title: `Offset Y`, type: L.Number, defaultValue: 0, unit: `px` },
                transition: {
                  title: `Transition`,
                  type: L.Transition,
                  defaultValue: { type: `spring`, duration: 0.3, bounce: 0 },
                },
              },
            },
            shadow: {
              title: `Shadow`,
              type: L.BoxShadow,
              defaultValue: `-2px 0 10px rgba(0, 0, 0, 0.1)`,
            },
          },
        },
        backdropOverlay: {
          title: `Overlay`,
          type: L.Object,
          buttonTitle: `Background, Blur, Transition`,
          controls: {
            backgroundColor: {
              title: `Background`,
              type: L.Color,
              defaultValue: `rgba(0, 0, 0, 0.5)`,
              optional: !0,
            },
            blur: { title: `Blur`, type: L.Number, displayStepper: !0, defaultValue: 0 },
            transition: {
              title: `Transition`,
              type: L.Transition,
              defaultValue: { type: `spring`, duration: 0.3, bounce: 0 },
              description: `A solid overlay shown behind the cart`,
            },
          },
        },
        ...Fi,
        ...ji,
        ...Oi(Pi, {
          "leftIcon.title": `Button Left Icon`,
          "rightIcon.title": `Button Right Icon`,
          "text.title": `Button Text`,
          "text.defaultValue": ``,
        }),
        ...ni,
      }),
      ($i.displayName = `Cart Open Button`));
  });
function ra({ style: e }) {
  return b(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    style: e,
    children: [
      h(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
      h(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
    ],
  });
}
var ia = e(() => {
  x();
});
function aa(e) {
  let t = () => {
    document.dispatchEvent(new CustomEvent(pi));
  };
  return e.buttonType === `custom`
    ? h(Wi, { onClick: t, customButtonSize: e.customButtonSize, children: e.customButton })
    : h(Hi, {
        onClick: t,
        font: e.presetButtonStyle.font,
        leftIcon: e.leftIcon?.[0] ?? h(ra, {}),
        rightIcon: e.rightIcon?.[0],
        presetButtonStyle: e.presetButtonStyle,
      });
}
function oa(e) {
  return h(aa, { ...e });
}
var sa = e(() => {
    (x(),
      j(),
      mi(),
      Ui(),
      Gi(),
      ia(),
      Li(),
      oi(),
      k(oa, {
        ...Fi,
        ...Oi(Ni, {
          "presetButtonStyle.backgroundColor": `rgba(0, 0, 0, 0)`,
          "presetButtonStyle.textColor": `rgba(0, 0, 0, 1)`,
          "presetButtonStyle.hover.backgroundColor": `rgba(0, 0, 0, 0)`,
          "presetButtonStyle.hover.textColor": `rgba(0, 0, 0, 1)`,
          "presetButtonStyle.border.borderWidth": 0,
          "presetButtonStyle.border.borderStyle": `solid`,
          "presetButtonStyle.border.borderColor": `rgba(0, 0, 0, 0.1)`,
        }),
        ...Pi,
        ...ni,
      }),
      (oa.displayName = `Cart Close Button`));
  }),
  ca,
  la = e(() => {
    ca = {
      ENVIRONMENT: { development: `localReact`, staging: `framer`, production: `framer` },
      BACKEND_URL: {
        development: `http://localhost:8787`,
        staging: `https://frameship-backend-staging.account-ba7.workers.dev`,
        production: `https://frameship-backend.account-ba7.workers.dev`,
      },
      BACKEND_API_KEY: {
        development: `9692aec79a1b5ad3546e7fa02e1046195a85ff2dee60c1fdecf95d446ff16789`,
        staging: `58b5bdccbf6f33a5f381fcfbe85bfa5e242bf5d62fadcb5fc30029290434142d`,
        production: `9c170a2a758c830a7b191139343767cea3734f5e8c499e8f21d0dcc3a7979805`,
      },
    };
  });
function ua({ style: e }) {
  return h(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `32`,
    height: `32`,
    fill: `currentColor`,
    viewBox: `0 0 256 256`,
    style: e,
    children: h(`path`, {
      d: `M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z`,
    }),
  });
}
var da = e(() => {
  x();
});
function fa({ missingProps: e }) {
  return b(`div`, {
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `start`,
      justifyContent: `center`,
      gap: `4px`,
      borderRadius: `4px`,
      border: `2px dashed #FF4D4D`,
      padding: `12px 16px`,
      backgroundColor: `#FF4D4D10`,
      boxSizing: `border-box`,
      fontSize: `14px`,
      lineHeight: `20px`,
    },
    children: [
      b(`div`, {
        style: { display: `flex`, gap: `8px`, alignItems: `center` },
        children: [
          h(ua, { style: { width: `20px`, height: `20px`, color: `#FF4D4D` } }),
          h(`p`, {
            style: { margin: 0, fontWeight: `600` },
            children: e.length > 1 ? `Missing Component Properties` : `Missing Component Property`,
          }),
        ],
      }),
      b(`p`, {
        style: { margin: 0 },
        children: [
          `Set up the component by connecting`,
          ` `,
          h(`strong`, { children: e.join(`, `) }),
          ` to the component or by selecting `,
          h(`strong`, { children: e.join(`, `) }),
          ` from the component properties.`,
        ],
      }),
    ],
  });
}
var pa = e(() => {
  (x(), da());
});
function ma(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
var ha,
  ga,
  _a = e(() => {
    ((ha = class {
      get() {
        if (
          this.memoryCache &&
          this.memoryCacheTime &&
          Date.now() - this.memoryCacheTime < this.cacheDuration
        )
          return this.memoryCache;
        try {
          let e = localStorage.getItem(this.cacheKey);
          if (e) {
            let t = JSON.parse(e);
            if (t.data && t.timestamp && Date.now() - t.timestamp < this.cacheDuration)
              return ((this.memoryCache = t.data), (this.memoryCacheTime = t.timestamp), t.data);
          }
        } catch (e) {
          console.warn(`Error reading license cache from localStorage:`, e);
        }
        return null;
      }
      set(e) {
        let t = { data: e, timestamp: Date.now() };
        ((this.memoryCache = e), (this.memoryCacheTime = t.timestamp));
        try {
          localStorage.setItem(this.cacheKey, JSON.stringify(t));
        } catch (e) {
          console.warn(`Error saving license cache to localStorage:`, e);
        }
      }
      clear() {
        ((this.memoryCache = null), (this.memoryCacheTime = null));
        try {
          localStorage.removeItem(this.cacheKey);
        } catch (e) {
          console.warn(`Error clearing license cache from localStorage:`, e);
        }
      }
      isValid() {
        return this.get() !== null;
      }
      constructor(e = 6e4) {
        (ma(this, `cacheDuration`, void 0),
          ma(this, `cacheKey`, void 0),
          ma(this, `memoryCache`, void 0),
          ma(this, `memoryCacheTime`, void 0),
          (this.cacheDuration = e),
          (this.cacheKey = `frameship-license-cache`),
          (this.memoryCache = null),
          (this.memoryCacheTime = null));
      }
    }),
      (ga = new ha(6e4)));
  });
async function va(e) {
  let { method: t, endpoint: n, params: r, body: i } = e,
    a = new URLSearchParams(r).toString(),
    o = r ? `${ca.BACKEND_URL.production}${n}?${a}` : `${ca.BACKEND_URL.production}${n}`,
    s = await fetch(o, {
      method: t,
      headers: { "Content-Type": `application/json`, "X-API-Key": ca.BACKEND_API_KEY.production },
      body: i,
    });
  if (!s.ok) throw Error(`Backend API request failed: ${s.status} ${s.statusText}`);
  return await s.json();
}
var ya = e(() => {
  la();
});
async function ba() {
  let e = ga.get();
  if (e) return e;
  if (d === void 0) throw Error(`License check requires browser environment`);
  let t = xe();
  if (!t) return { free: !0 };
  let n = await va({
    method: `GET`,
    endpoint: `/license-check`,
    params: { url: encodeURIComponent(d.location.href), license_id: t },
  });
  return (ga.set(n), console.log(`License data cached for 1 minute`), n);
}
var xa = e(() => {
    (a(), _a(), ve(), ya());
  }),
  Sa,
  Ca,
  wa = e(() => {
    (or(),
      _a(),
      xa(),
      (Sa = { all: [`license`] }),
      (Ca = () => {
        let {
            data: e,
            isLoading: t,
            error: n,
          } = ht({ queryKey: Sa.all, queryFn: ba, staleTime: 6e4, gcTime: 300 * 1e3, retry: 1 }),
          r = ga.get();
        return { isFree: (e || r)?.free === !0, isLoading: t, error: n || null };
      }));
  });
function Ta({ children: e }) {
  let t = Ca();
  return h(Da.Provider, { value: t, children: e });
}
function Ea() {
  let e = y(Da);
  if (e === void 0) throw Error(`useLicenseContext must be used within a LicenseProvider`);
  return e;
}
var Da,
  Oa = e(() => {
    (x(), n(), wa(), (Da = i(void 0)));
  }),
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra = e(() => {
    (x(),
      j(),
      D(),
      n(),
      (ka = `framer-yvDv4`),
      (Aa = { nAcSi0Q4q: `framer-v-1dx2m24` }),
      (ja = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ma = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (Na = w.create(c)),
      (Pa = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Fa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ia = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          le();
          let { style: l, className: u, layoutId: d, variant: f, ...p } = Pa(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: ee,
              isLoading: y,
              setGestureState: x,
              setVariant: S,
              variants: ne,
            } = ue({ defaultVariant: `nAcSi0Q4q`, ref: i, variant: f, variantClassNames: Aa }),
            C = Fa(e, ne),
            T = F(ka);
          return h(re, {
            id: d ?? a,
            children: h(Na, {
              animate: ne,
              initial: !1,
              children: h(Ma, {
                value: ja,
                children: b(w.div, {
                  ...p,
                  ...v,
                  className: F(T, `framer-1dx2m24`, u, g),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: C,
                  layoutId: `nAcSi0Q4q`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(0, 0, 0, 0.4)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...l,
                  },
                  children: [
                    b(w.div, {
                      className: `framer-qgxcaq`,
                      "data-framer-name": `Text`,
                      layoutDependency: C,
                      layoutId: `TVNkLFV9a`,
                      children: [
                        b(w.div, {
                          className: `framer-1nubdde`,
                          layoutDependency: C,
                          layoutId: `wFJRnI40a`,
                          children: [
                            b(R, {
                              className: `framer-ezi7fp`,
                              layoutDependency: C,
                              layoutId: `aNdvEZwcH`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><g><path d="M 0 0 L 16 0 L 16 16 L 0 16 Z" fill="transparent"></path><path d="M 8 1.333 C 9.841 1.333 11.333 2.826 11.333 4.667 L 11.333 6.667 C 12.438 6.667 13.333 7.562 13.333 8.667 L 13.333 12.667 C 13.333 13.771 12.438 14.667 11.333 14.667 L 4.667 14.667 C 3.562 14.667 2.667 13.771 2.667 12.667 L 2.667 8.667 C 2.667 7.562 3.562 6.667 4.667 6.667 L 4.667 4.667 C 4.667 2.826 6.159 1.333 8 1.333 M 8 9.333 C 7.302 9.333 6.722 9.871 6.67 10.567 L 6.667 10.667 C 6.667 11.403 7.264 12 8 12 C 8.736 12 9.333 11.403 9.333 10.667 C 9.333 9.93 8.736 9.333 8 9.333 M 8 2.667 C 6.895 2.667 6 3.562 6 4.667 L 6 6.667 L 10 6.667 L 10 4.667 C 10 3.562 9.105 2.667 8 2.667" fill="rgb(0,0,0)"></path></g></svg>`,
                              withExternalLayout: !0,
                              children: [
                                h(R, {
                                  className: `framer-stwm1e`,
                                  layoutDependency: C,
                                  layoutId: `Rp27oX084`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 0 0 L 16 0 L 16 16 L 0 16 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                b(R, {
                                  className: `framer-197lgmt`,
                                  layoutDependency: C,
                                  layoutId: `ShjwPumuw`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.667 13.333" overflow="visible"><path d="M 5.333 0 C 7.174 0 8.667 1.492 8.667 3.333 L 8.667 5.333 C 9.771 5.333 10.667 6.229 10.667 7.333 L 10.667 11.333 C 10.667 12.438 9.771 13.333 8.667 13.333 L 2 13.333 C 0.895 13.333 0 12.438 0 11.333 L 0 7.333 C 0 6.229 0.895 5.333 2 5.333 L 2 3.333 C 2 1.492 3.492 0 5.333 0 M 5.333 8 C 4.636 8 4.056 8.538 4.003 9.233 L 4 9.333 C 4 10.07 4.597 10.667 5.333 10.667 C 6.07 10.667 6.667 10.07 6.667 9.333 C 6.667 8.597 6.07 8 5.333 8 M 5.333 1.333 C 4.229 1.333 3.333 2.229 3.333 3.333 L 3.333 5.333 L 7.333 5.333 L 7.333 3.333 C 7.333 2.229 6.438 1.333 5.333 1.333" fill="rgb(0,0,0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    h(R, {
                                      className: `framer-1y3tsak`,
                                      layoutDependency: C,
                                      layoutId: `GLHlL4s1w`,
                                      opacity: 1,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.667 13.333" overflow="visible"><path d="M 5.333 0 C 7.174 0 8.667 1.492 8.667 3.333 L 8.667 5.333 C 9.771 5.333 10.667 6.229 10.667 7.333 L 10.667 11.333 C 10.667 12.438 9.771 13.333 8.667 13.333 L 2 13.333 C 0.895 13.333 0 12.438 0 11.333 L 0 7.333 C 0 6.229 0.895 5.333 2 5.333 L 2 3.333 C 2 1.492 3.492 0 5.333 0" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    h(R, {
                                      className: `framer-1saqngk`,
                                      layoutDependency: C,
                                      layoutId: `hkGZlWS5n`,
                                      opacity: 1,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.667 2.667" overflow="visible"><path d="M 1.333 0 C 0.636 0 0.056 0.538 0.003 1.233 L 0 1.333 C 0 2.07 0.597 2.667 1.333 2.667 C 2.07 2.667 2.667 2.07 2.667 1.333 C 2.667 0.597 2.07 0 1.333 0" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    h(R, {
                                      className: `framer-5chj6a`,
                                      layoutDependency: C,
                                      layoutId: `z7l8p8rYy`,
                                      opacity: 1,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 4" overflow="visible"><path d="M 2 0 C 0.895 0 0 0.895 0 2 L 0 4 L 4 4 L 4 2 C 4 0.895 3.105 0 2 0" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h(O, {
                              __fromCanvasComponent: !0,
                              children: b(c, {
                                children: [
                                  h(w.p, {
                                    style: {
                                      "--font-selector": `R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=`,
                                      "--framer-font-family": `"Bricolage Grotesque Variable", "Bricolage Grotesque Variable Placeholder", sans-serif`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 96, "wght" 800, "wdth" 100)`,
                                      "--framer-line-height": `100%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-transform": `uppercase`,
                                    },
                                    children: `upgrade to PUBLISH`,
                                  }),
                                  h(w.p, {
                                    style: {
                                      "--font-selector": `R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=`,
                                      "--framer-font-family": `"Bricolage Grotesque Variable", "Bricolage Grotesque Variable Placeholder", sans-serif`,
                                      "--framer-font-variation-axes": `var(--extracted-1qhja7k, "opsz" 96, "wght" 800, "wdth" 100)`,
                                      "--framer-line-height": `100%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-transform": `uppercase`,
                                    },
                                    children: `YOUR STORE`,
                                  }),
                                ],
                              }),
                              className: `framer-1daoptz`,
                              "data-framer-name": `Online Course`,
                              fonts: [`GF;Bricolage Grotesque-variable-regular`],
                              layoutDependency: C,
                              layoutId: `mjecyYYdr`,
                              style: {
                                "--extracted-1qhja7k": `"opsz" 96, "wght" 800, "wdth" 100`,
                                "--extracted-2gg91v": `"opsz" 96, "wght" 800, "wdth" 100`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(O, {
                          __fromCanvasComponent: !0,
                          children: b(c, {
                            children: [
                              h(w.p, {
                                style: {
                                  "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                  "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-line-height": `120%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))`,
                                },
                                children: `Use Shopify on your Framer site`,
                              }),
                              h(w.p, {
                                style: {
                                  "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                  "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-line-height": `120%`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-2gxw0f, rgba(0, 0, 0, 0.6))`,
                                },
                                children: `with Frameship.`,
                              }),
                            ],
                          }),
                          className: `framer-la1ndd`,
                          "data-framer-name": `Create engaging learning experiences`,
                          fonts: [`GF;DM Sans-regular`],
                          layoutDependency: C,
                          layoutId: `R3_znsqdM`,
                          style: {
                            "--extracted-2gxw0f": `rgba(0, 0, 0, 0.6)`,
                            "--extracted-r6o4lv": `rgba(0, 0, 0, 0.6)`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          verticalAlignment: `center`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    b(w.div, {
                      className: `framer-1q02xf5`,
                      layoutDependency: C,
                      layoutId: `gdOTAqUTy`,
                      children: [
                        h(I, {
                          href: `https://buy.stripe.com/bJeaEXbcN0Oid5ZaQV5EY0M`,
                          motionChild: !0,
                          nodeId: `azwEH0J2C`,
                          openInNewTab: !0,
                          scopeId: `ZrUsU8aFu`,
                          children: h(w.a, {
                            className: `framer-bbg7j7 framer-vlpx12`,
                            "data-framer-name": `CTA`,
                            layoutDependency: C,
                            layoutId: `azwEH0J2C`,
                            style: {
                              backgroundColor: `rgb(64, 212, 27)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: h(O, {
                              __fromCanvasComponent: !0,
                              children: h(c, {
                                children: h(w.p, {
                                  style: {
                                    "--font-selector": `R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS04MDA=`,
                                    "--framer-font-family": `"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `800`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `UPGRADE`,
                                }),
                              }),
                              className: `framer-1wdwxz3`,
                              "data-framer-name": `CONTINUE`,
                              fonts: [`GF;Bricolage Grotesque-800`],
                              layoutDependency: C,
                              layoutId: `wM9v_325f`,
                              style: {
                                "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        b(R, {
                          className: `framer-1as0hep`,
                          layoutDependency: C,
                          layoutId: `AkJZpoNBN`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 7" overflow="visible"><g><path d="M 56.834 4.955 L 56.834 3.632 L 58.081 3.632 C 58.493 3.632 58.8 3.551 59.003 3.388 C 59.206 3.219 59.307 2.94 59.307 2.554 C 59.307 2.187 59.213 1.916 59.024 1.74 C 58.841 1.557 58.561 1.465 58.182 1.465 L 56.834 1.465 L 56.834 0.142 L 58.273 0.142 C 58.659 0.142 59.017 0.19 59.348 0.285 C 59.679 0.373 59.966 0.516 60.209 0.712 C 60.459 0.909 60.652 1.156 60.787 1.455 C 60.929 1.754 61 2.113 61 2.533 C 61 3.069 60.878 3.517 60.635 3.876 C 60.399 4.236 60.054 4.507 59.601 4.69 C 59.148 4.867 58.594 4.955 57.939 4.955 Z M 55.608 6.857 L 55.608 0.143 L 57.25 0.143 L 57.25 6.858 L 55.608 6.858 Z M 53.143 6.858 L 53.143 0.142 L 54.795 0.142 L 54.795 6.858 Z M 50.693 6.858 L 50.693 0.142 L 52.335 0.142 L 52.335 6.858 Z M 46.689 6.858 L 46.689 0.142 L 48.331 0.142 L 48.331 6.858 Z M 47.915 4.172 L 47.915 2.788 L 51.554 2.788 L 51.554 4.172 Z M 43.385 7 C 42.912 7 42.496 6.946 42.138 6.837 C 41.787 6.729 41.493 6.573 41.256 6.369 C 41.024 6.172 40.843 5.92 40.729 5.637 C 40.621 5.345 40.574 5.023 40.587 4.67 L 42.108 4.334 C 42.121 4.646 42.185 4.901 42.3 5.097 C 42.418 5.284 42.587 5.432 42.787 5.525 C 42.99 5.613 43.216 5.657 43.466 5.657 C 43.669 5.657 43.848 5.633 44.003 5.586 C 44.159 5.531 44.28 5.46 44.368 5.372 C 44.463 5.277 44.51 5.169 44.51 5.047 C 44.51 4.884 44.449 4.751 44.328 4.65 C 44.206 4.541 44.037 4.45 43.821 4.375 C 43.584 4.292 43.344 4.217 43.101 4.151 C 42.809 4.069 42.518 3.981 42.229 3.887 C 41.956 3.79 41.695 3.664 41.449 3.51 C 41.215 3.363 41.017 3.165 40.871 2.93 C 40.729 2.693 40.658 2.398 40.658 2.045 C 40.658 1.611 40.766 1.241 40.983 0.936 C 41.206 0.631 41.51 0.4 41.895 0.244 C 42.287 0.082 42.733 0 43.233 0 C 43.76 0 44.229 0.092 44.642 0.275 C 45.054 0.451 45.371 0.712 45.594 1.058 C 45.817 1.404 45.905 1.828 45.858 2.33 L 44.358 2.574 C 44.365 2.371 44.344 2.191 44.297 2.035 C 44.25 1.879 44.175 1.747 44.074 1.638 C 43.979 1.53 43.858 1.448 43.709 1.394 C 43.561 1.333 43.385 1.302 43.182 1.302 C 42.973 1.302 42.797 1.33 42.655 1.384 C 42.52 1.438 42.415 1.513 42.341 1.608 C 42.273 1.702 42.238 1.817 42.239 1.933 C 42.239 2.076 42.294 2.194 42.402 2.289 C 42.51 2.384 42.665 2.469 42.868 2.544 C 43.071 2.611 43.31 2.683 43.588 2.757 C 43.881 2.839 44.172 2.931 44.459 3.032 C 44.749 3.123 45.025 3.253 45.28 3.419 C 45.526 3.57 45.731 3.78 45.878 4.029 C 46.034 4.28 46.111 4.599 46.111 4.985 C 46.111 5.433 45.993 5.806 45.757 6.105 C 45.527 6.403 45.206 6.627 44.794 6.776 C 44.388 6.926 43.919 7 43.385 7 Z M 35.356 6.858 L 35.356 0.142 L 36.998 0.142 L 36.998 6.858 Z M 36.582 6.858 L 36.582 5.484 L 40.14 5.484 L 40.14 6.858 Z M 36.582 4.09 L 36.582 2.859 L 39.674 2.859 L 39.674 4.09 Z M 36.582 1.516 L 36.582 0.142 L 40.14 0.142 L 40.14 1.516 Z M 27.021 6.858 L 27.021 0.142 L 29.484 0.142 L 30.852 4.914 L 30.872 4.914 L 32.21 0.142 L 34.542 0.142 L 34.542 6.858 L 33.021 6.858 L 33.021 1.801 L 33.001 1.801 L 31.491 6.858 L 30.051 6.858 L 28.561 1.801 L 28.541 1.801 L 28.541 6.858 Z M 19.974 6.858 L 22.214 0.142 L 24.343 0.142 L 26.573 6.858 L 24.799 6.858 L 23.299 1.475 L 23.238 1.475 L 21.728 6.858 Z M 21.241 5.667 L 21.241 4.507 L 25.509 4.507 L 25.509 5.667 Z M 14.044 6.858 L 14.044 0.142 L 16.821 0.142 C 17.118 0.142 17.399 0.17 17.662 0.224 C 17.933 0.271 18.176 0.346 18.392 0.448 C 18.615 0.549 18.808 0.678 18.97 0.834 C 19.133 0.992 19.261 1.183 19.345 1.394 C 19.433 1.604 19.476 1.845 19.476 2.116 C 19.476 2.327 19.439 2.527 19.365 2.717 C 19.297 2.9 19.186 3.066 19.031 3.215 C 18.882 3.364 18.686 3.49 18.443 3.592 C 18.206 3.687 17.922 3.754 17.591 3.795 L 17.591 3.876 C 18.024 3.897 18.358 3.982 18.595 4.131 C 18.831 4.28 19.007 4.47 19.122 4.701 C 19.246 4.931 19.338 5.178 19.395 5.433 L 19.75 6.858 L 17.936 6.858 L 17.683 5.525 C 17.642 5.294 17.578 5.108 17.49 4.965 C 17.409 4.823 17.29 4.718 17.135 4.65 C 16.98 4.582 16.774 4.548 16.517 4.548 L 15.686 4.548 L 15.686 6.858 Z M 15.686 3.276 L 16.638 3.276 C 17.01 3.276 17.294 3.205 17.49 3.063 C 17.686 2.92 17.784 2.703 17.784 2.411 C 17.784 2.093 17.693 1.855 17.51 1.699 C 17.328 1.543 17.051 1.465 16.679 1.465 L 15.686 1.465 L 15.686 3.276 Z M 8.877 6.858 L 8.877 0.142 L 10.519 0.142 L 10.519 6.858 Z M 9.698 4.467 L 9.698 3.124 L 13.104 3.124 L 13.104 4.467 Z M 9.698 1.516 L 9.698 0.142 L 13.448 0.142 L 13.448 1.516 Z" fill="rgb(0,0,0)"></path><path d="M 6.673 5.258 C 6.673 6.143 5.959 6.86 5.078 6.86 L 1.596 6.86 C 0.716 6.86 0.002 6.143 0.002 5.258 L 0.002 3.512 C 0.886 4.4 2.086 4.899 3.337 4.899 C 4.588 4.899 5.789 4.4 6.673 3.511 L 6.673 5.258 Z M 0.001 3.512 L 0 3.511 L 0.001 3.51 L 0.001 3.513 Z M 6.674 3.511 L 6.673 3.511 L 6.673 3.51 Z M 6.407 1.861 C 6.554 1.861 6.673 1.981 6.673 2.128 L 6.673 3.51 L 5.03 1.861 Z M 1.643 1.861 L 0.002 3.51 L 0.002 2.128 C 0.002 1.981 0.121 1.861 0.267 1.861 L 1.643 1.861 Z M 5.03 1.861 L 1.643 1.861 L 3.337 0.161 Z" fill="rgb(64,212,27)"></path></g></svg>`,
                          withExternalLayout: !0,
                          children: [
                            b(R, {
                              className: `framer-wnk5gx`,
                              layoutDependency: C,
                              layoutId: `aaA4tuwIc`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52.123 7" overflow="visible"><path d="M 47.957 4.955 L 47.957 3.632 L 49.204 3.632 C 49.616 3.632 49.924 3.551 50.126 3.388 C 50.329 3.219 50.43 2.94 50.43 2.554 C 50.43 2.187 50.336 1.916 50.147 1.74 C 49.964 1.557 49.684 1.465 49.305 1.465 L 47.957 1.465 L 47.957 0.142 L 49.397 0.142 C 49.782 0.142 50.14 0.19 50.471 0.285 C 50.802 0.373 51.089 0.516 51.332 0.712 C 51.582 0.909 51.775 1.156 51.91 1.455 C 52.052 1.754 52.123 2.113 52.123 2.533 C 52.123 3.069 52.002 3.517 51.758 3.876 C 51.522 4.236 51.177 4.507 50.724 4.69 C 50.272 4.867 49.718 4.955 49.062 4.955 Z M 46.731 6.857 L 46.731 0.143 L 48.373 0.143 L 48.373 6.858 L 46.731 6.858 Z M 44.266 6.858 L 44.266 0.142 L 45.918 0.142 L 45.918 6.858 Z M 41.816 6.858 L 41.816 0.142 L 43.458 0.142 L 43.458 6.858 Z M 37.812 6.858 L 37.812 0.142 L 39.454 0.142 L 39.454 6.858 Z M 39.038 4.172 L 39.038 2.788 L 42.677 2.788 L 42.677 4.172 Z M 34.508 7 C 34.035 7 33.619 6.946 33.261 6.837 C 32.91 6.729 32.616 6.573 32.379 6.369 C 32.147 6.172 31.966 5.92 31.852 5.637 C 31.744 5.345 31.697 5.023 31.71 4.67 L 33.231 4.334 C 33.244 4.646 33.308 4.901 33.423 5.097 C 33.541 5.284 33.71 5.432 33.91 5.525 C 34.113 5.613 34.339 5.657 34.589 5.657 C 34.792 5.657 34.971 5.633 35.126 5.586 C 35.282 5.531 35.403 5.46 35.491 5.372 C 35.586 5.277 35.633 5.169 35.633 5.047 C 35.633 4.884 35.572 4.751 35.451 4.65 C 35.329 4.541 35.16 4.45 34.944 4.375 C 34.707 4.292 34.467 4.217 34.224 4.151 C 33.932 4.069 33.641 3.981 33.352 3.887 C 33.079 3.79 32.818 3.664 32.572 3.51 C 32.338 3.363 32.14 3.165 31.994 2.93 C 31.852 2.693 31.781 2.398 31.781 2.045 C 31.781 1.611 31.889 1.241 32.106 0.936 C 32.329 0.631 32.633 0.4 33.018 0.244 C 33.41 0.082 33.856 0 34.356 0 C 34.883 0 35.353 0.092 35.765 0.275 C 36.177 0.451 36.495 0.712 36.718 1.058 C 36.94 1.404 37.028 1.828 36.981 2.33 L 35.481 2.574 C 35.488 2.371 35.467 2.191 35.42 2.035 C 35.373 1.879 35.298 1.747 35.197 1.638 C 35.103 1.53 34.981 1.448 34.832 1.394 C 34.684 1.333 34.508 1.302 34.305 1.302 C 34.096 1.302 33.92 1.33 33.778 1.384 C 33.643 1.438 33.538 1.513 33.464 1.608 C 33.396 1.702 33.361 1.817 33.363 1.933 C 33.363 2.076 33.417 2.194 33.525 2.289 C 33.633 2.384 33.788 2.469 33.991 2.544 C 34.194 2.611 34.434 2.683 34.711 2.757 C 35.004 2.839 35.295 2.931 35.582 3.032 C 35.872 3.123 36.148 3.253 36.403 3.419 C 36.649 3.57 36.854 3.78 37.001 4.029 C 37.157 4.28 37.234 4.599 37.234 4.985 C 37.234 5.433 37.116 5.806 36.88 6.105 C 36.65 6.403 36.329 6.627 35.917 6.776 C 35.511 6.926 35.042 7 34.508 7 Z M 26.479 6.858 L 26.479 0.142 L 28.121 0.142 L 28.121 6.858 Z M 27.705 6.858 L 27.705 5.484 L 31.263 5.484 L 31.263 6.858 Z M 27.705 4.09 L 27.705 2.859 L 30.797 2.859 L 30.797 4.09 Z M 27.705 1.516 L 27.705 0.142 L 31.263 0.142 L 31.263 1.516 Z M 18.144 6.858 L 18.144 0.142 L 20.607 0.142 L 21.975 4.914 L 21.995 4.914 L 23.333 0.142 L 25.665 0.142 L 25.665 6.858 L 24.144 6.858 L 24.144 1.801 L 24.124 1.801 L 22.614 6.858 L 21.174 6.858 L 19.684 1.801 L 19.664 1.801 L 19.664 6.858 Z M 11.097 6.858 L 13.337 0.142 L 15.466 0.142 L 17.696 6.858 L 15.922 6.858 L 14.422 1.475 L 14.361 1.475 L 12.851 6.858 Z M 12.364 5.667 L 12.364 4.507 L 16.632 4.507 L 16.632 5.667 Z M 5.167 6.858 L 5.167 0.142 L 7.944 0.142 C 8.241 0.142 8.522 0.17 8.785 0.224 C 9.056 0.271 9.299 0.346 9.515 0.448 C 9.738 0.549 9.931 0.678 10.093 0.834 C 10.256 0.992 10.384 1.183 10.468 1.394 C 10.556 1.604 10.6 1.845 10.6 2.116 C 10.6 2.327 10.562 2.527 10.488 2.717 C 10.421 2.9 10.309 3.066 10.154 3.215 C 10.005 3.364 9.809 3.49 9.566 3.592 C 9.329 3.687 9.045 3.754 8.714 3.795 L 8.714 3.876 C 9.147 3.897 9.481 3.982 9.718 4.131 C 9.954 4.28 10.13 4.47 10.245 4.701 C 10.369 4.931 10.461 5.178 10.518 5.433 L 10.873 6.858 L 9.059 6.858 L 8.806 5.525 C 8.765 5.294 8.701 5.108 8.613 4.965 C 8.532 4.823 8.414 4.718 8.258 4.65 C 8.103 4.582 7.897 4.548 7.64 4.548 L 6.809 4.548 L 6.809 6.858 Z M 6.809 3.276 L 7.761 3.276 C 8.133 3.276 8.417 3.205 8.613 3.063 C 8.809 2.92 8.907 2.703 8.907 2.411 C 8.907 2.093 8.816 1.855 8.633 1.699 C 8.451 1.543 8.174 1.465 7.802 1.465 L 6.809 1.465 L 6.809 3.276 Z M 0 6.858 L 0 0.142 L 1.642 0.142 L 1.642 6.858 Z M 0.821 4.467 L 0.821 3.124 L 4.227 3.124 L 4.227 4.467 Z M 0.821 1.516 L 0.821 0.142 L 4.571 0.142 L 4.571 1.516 Z" fill="rgb(0,0,0)"></path></svg>`,
                              withExternalLayout: !0,
                              children: [
                                h(R, {
                                  className: `framer-1qv3pw`,
                                  layoutDependency: C,
                                  layoutId: `bJLKN413m`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.166 4.812" overflow="visible"><path d="M 0 4.812 L 0 3.49 L 1.247 3.49 C 1.659 3.49 1.966 3.408 2.169 3.246 C 2.372 3.076 2.473 2.798 2.473 2.411 C 2.473 2.045 2.379 1.774 2.189 1.597 C 2.007 1.414 1.727 1.323 1.348 1.323 L 0 1.323 L 0 0 L 1.439 0 C 1.824 0 2.183 0.048 2.514 0.142 C 2.845 0.231 3.132 0.373 3.375 0.57 C 3.625 0.766 3.818 1.014 3.953 1.312 C 4.095 1.611 4.166 1.97 4.166 2.391 C 4.166 2.927 4.044 3.375 3.801 3.734 C 3.565 4.094 3.22 4.365 2.767 4.548 C 2.314 4.724 1.76 4.812 1.105 4.812 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1oyhy3g`,
                                  layoutDependency: C,
                                  layoutId: `razXpsy3j`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.642 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 1.642 0 L 1.642 6.715 L 0 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-zhdych`,
                                  layoutDependency: C,
                                  layoutId: `NHkAkiHbG`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.652 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 1.652 0 L 1.652 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1tgqpfl`,
                                  layoutDependency: C,
                                  layoutId: `eAsJgxYzY`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.642 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 1.642 0 L 1.642 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-16wkrwm`,
                                  layoutDependency: C,
                                  layoutId: `aror3vyM6`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.642 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 1.642 0 L 1.642 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-dbcf63`,
                                  layoutDependency: C,
                                  layoutId: `PenSh6mMb`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.639 1.384" overflow="visible"><path d="M 0 1.384 L 0 0 L 3.639 0 L 3.639 1.384 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-h4zafe`,
                                  layoutDependency: C,
                                  layoutId: `Kpqk8Bilp`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.526 7" overflow="visible"><path d="M 2.8 7 C 2.327 7 1.911 6.946 1.553 6.837 C 1.202 6.729 0.908 6.573 0.671 6.369 C 0.439 6.172 0.258 5.92 0.144 5.637 C 0.036 5.345 -0.011 5.023 0.002 4.67 L 1.523 4.334 C 1.536 4.646 1.6 4.901 1.715 5.097 C 1.833 5.284 2.002 5.432 2.202 5.525 C 2.405 5.613 2.631 5.657 2.881 5.657 C 3.084 5.657 3.263 5.633 3.418 5.586 C 3.574 5.531 3.695 5.46 3.783 5.372 C 3.878 5.277 3.925 5.169 3.925 5.047 C 3.925 4.884 3.864 4.751 3.743 4.65 C 3.621 4.541 3.452 4.45 3.236 4.375 C 2.999 4.292 2.759 4.217 2.516 4.151 C 2.224 4.069 1.933 3.981 1.644 3.887 C 1.371 3.79 1.11 3.664 0.864 3.51 C 0.63 3.363 0.432 3.165 0.286 2.93 C 0.144 2.693 0.073 2.398 0.073 2.045 C 0.073 1.611 0.181 1.241 0.398 0.936 C 0.621 0.631 0.925 0.4 1.31 0.244 C 1.702 0.082 2.148 0 2.648 0 C 3.175 0 3.644 0.092 4.057 0.275 C 4.469 0.451 4.786 0.712 5.009 1.058 C 5.232 1.404 5.32 1.828 5.273 2.33 L 3.773 2.574 C 3.78 2.371 3.759 2.191 3.712 2.035 C 3.665 1.879 3.59 1.747 3.489 1.638 C 3.394 1.53 3.273 1.448 3.124 1.394 C 2.976 1.333 2.8 1.302 2.597 1.302 C 2.388 1.302 2.212 1.33 2.07 1.384 C 1.935 1.438 1.83 1.513 1.756 1.608 C 1.688 1.702 1.653 1.817 1.654 1.933 C 1.654 2.076 1.709 2.194 1.817 2.289 C 1.925 2.384 2.08 2.469 2.283 2.544 C 2.486 2.611 2.725 2.683 3.003 2.757 C 3.296 2.839 3.587 2.931 3.874 3.032 C 4.164 3.123 4.44 3.253 4.695 3.419 C 4.941 3.57 5.146 3.78 5.293 4.029 C 5.449 4.28 5.526 4.599 5.526 4.985 C 5.526 5.433 5.408 5.806 5.172 6.105 C 4.942 6.403 4.621 6.627 4.209 6.776 C 3.803 6.926 3.334 7 2.8 7 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1obu94e`,
                                  layoutDependency: C,
                                  layoutId: `zFNAGJzDl`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.642 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 1.642 0 L 1.642 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-k37omh`,
                                  layoutDependency: C,
                                  layoutId: `Ogxjg46WD`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.558 1.374" overflow="visible"><path d="M 0 1.374 L 0 0 L 3.558 0 L 3.558 1.374 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-5c1bje`,
                                  layoutDependency: C,
                                  layoutId: `MQ1XMr1H6`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.092 1.231" overflow="visible"><path d="M 0 1.231 L 0 0 L 3.092 0 L 3.092 1.231 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1u1grab`,
                                  layoutDependency: C,
                                  layoutId: `sNg1qhz1N`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.558 1.374" overflow="visible"><path d="M 0 1.374 L 0 0 L 3.558 0 L 3.558 1.374 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1aqol5v`,
                                  layoutDependency: C,
                                  layoutId: `cFiIDov4p`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.521 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 2.463 0 L 3.831 4.772 L 3.852 4.772 L 5.19 0 L 7.521 0 L 7.521 6.715 L 6 6.715 L 6 1.658 L 5.98 1.658 L 4.47 6.715 L 3.031 6.715 L 1.541 1.658 L 1.52 1.658 L 1.52 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1m7xi0p`,
                                  layoutDependency: C,
                                  layoutId: `e0TQk5QHe`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.599 6.715" overflow="visible"><path d="M 0 6.715 L 2.24 0 L 4.369 0 L 6.599 6.715 L 4.825 6.715 L 3.325 1.333 L 3.264 1.333 L 1.753 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-fn24q3`,
                                  layoutDependency: C,
                                  layoutId: `fZshb_Bbl`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.267 1.16" overflow="visible"><path d="M 0 1.16 L 0 0 L 4.267 0 L 4.267 1.16 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-qt0z67`,
                                  layoutDependency: C,
                                  layoutId: `cM3DHCLiQ`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.707 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 2.777 0 C 3.075 0 3.355 0.027 3.619 0.081 C 3.889 0.129 4.132 0.203 4.348 0.305 C 4.571 0.407 4.764 0.536 4.926 0.692 C 5.089 0.85 5.217 1.04 5.301 1.251 C 5.389 1.462 5.433 1.703 5.433 1.974 C 5.433 2.184 5.396 2.384 5.321 2.574 C 5.254 2.757 5.142 2.923 4.987 3.073 C 4.838 3.222 4.642 3.347 4.399 3.449 C 4.163 3.544 3.879 3.612 3.548 3.653 L 3.548 3.734 C 3.98 3.754 4.315 3.839 4.551 3.988 C 4.788 4.138 4.963 4.328 5.078 4.558 C 5.202 4.789 5.294 5.035 5.352 5.291 L 5.707 6.715 L 3.892 6.715 L 3.639 5.382 C 3.598 5.152 3.534 4.965 3.446 4.823 C 3.365 4.68 3.247 4.575 3.091 4.507 C 2.936 4.44 2.73 4.406 2.473 4.406 L 1.642 4.406 L 1.642 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-msv4k7`,
                                  layoutDependency: C,
                                  layoutId: `eF7DRcte_`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.098 1.811" overflow="visible"><path d="M 0 1.811 L 0.953 1.811 C 1.325 1.811 1.608 1.74 1.804 1.597 C 2 1.455 2.098 1.238 2.098 0.946 C 2.098 0.627 2.007 0.39 1.824 0.234 C 1.642 0.078 1.365 0 0.993 0 L 0 0 L 0 1.811 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1rrq731`,
                                  layoutDependency: C,
                                  layoutId: `QMsq5KeTb`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.642 6.715" overflow="visible"><path d="M 0 6.715 L 0 0 L 1.642 0 L 1.642 6.715 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-1aa6vsk`,
                                  layoutDependency: C,
                                  layoutId: `RjfgMkYbX`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.406 1.343" overflow="visible"><path d="M 0 1.343 L 0 0 L 3.406 0 L 3.406 1.343 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-rfuxf6`,
                                  layoutDependency: C,
                                  layoutId: `G1W7rHD34`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.75 1.374" overflow="visible"><path d="M 0 1.374 L 0 0 L 3.75 0 L 3.75 1.374 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            b(R, {
                              className: `framer-9ypvph`,
                              layoutDependency: C,
                              layoutId: `IkiLcFGw_`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.674 6.699" overflow="visible"><path d="M 6.673 5.098 C 6.673 5.982 5.959 6.699 5.078 6.699 L 1.596 6.699 C 0.716 6.699 0.002 5.982 0.002 5.098 L 0.002 3.352 C 0.886 4.24 2.086 4.738 3.337 4.738 C 4.588 4.738 5.789 4.239 6.673 3.351 L 6.673 5.098 Z M 0.001 3.352 L 0 3.351 L 0.001 3.349 L 0.001 3.352 Z M 6.674 3.351 L 6.673 3.351 L 6.673 3.35 Z M 6.407 1.701 C 6.554 1.701 6.673 1.82 6.673 1.967 L 6.673 3.35 L 5.03 1.701 Z M 1.643 1.701 L 0.002 3.349 L 0.002 1.967 C 0.002 1.82 0.121 1.701 0.267 1.701 L 1.643 1.701 Z M 5.03 1.701 L 1.643 1.701 L 3.337 0 Z" fill="rgb(64,212,27)"></path></svg>`,
                              withExternalLayout: !0,
                              children: [
                                h(R, {
                                  className: `framer-1bwc2bh`,
                                  layoutDependency: C,
                                  layoutId: `jVkTs9wff`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.672 3.348" overflow="visible"><path d="M 6.672 1.747 C 6.672 2.631 5.957 3.348 5.076 3.348 L 1.595 3.348 C 0.714 3.348 0 2.631 0 1.747 L 0 0.001 C 0.885 0.889 2.084 1.387 3.335 1.388 C 4.587 1.388 5.787 0.888 6.672 0 L 6.672 1.747 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-p5ejtx`,
                                  layoutDependency: C,
                                  layoutId: `NcHxVGC62`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.001 0.003 L 0 0.002 L 0.001 0 L 0.001 0.003 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-ph4iho`,
                                  layoutDependency: C,
                                  layoutId: `Ed9ZQmn9P`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0.001 L 0 0.001 L 0 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-ckjcp2`,
                                  layoutDependency: C,
                                  layoutId: `mQPbeyk3b`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.643 1.649" overflow="visible"><path d="M 1.377 0 C 1.524 0 1.643 0.119 1.643 0.267 L 1.643 1.649 L 0 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-jk22rq`,
                                  layoutDependency: C,
                                  layoutId: `zQsjB4yH4`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.642 1.649" overflow="visible"><path d="M 1.642 0 L 0 1.649 L 0 0.267 C 0 0.119 0.119 0 0.266 0 L 1.642 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                h(R, {
                                  className: `framer-14x091`,
                                  layoutDependency: C,
                                  layoutId: `BBcSmJfaY`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.387 1.701" overflow="visible"><path d="M 3.387 1.701 L 0 1.701 L 1.693 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
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
          `.framer-yvDv4.framer-vlpx12, .framer-yvDv4 .framer-vlpx12 { display: block; }`,
          `.framer-yvDv4.framer-1dx2m24 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 15px; position: relative; width: 235px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yvDv4 .framer-qgxcaq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yvDv4 .framer-1nubdde { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yvDv4 .framer-ezi7fp { height: 16px; position: relative; width: 16px; }`,
          `.framer-yvDv4 .framer-stwm1e { height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
          `.framer-yvDv4 .framer-197lgmt { height: 14px; left: 3px; position: absolute; top: 2px; width: 11px; }`,
          `.framer-yvDv4 .framer-1y3tsak { height: 14px; left: 0px; position: absolute; top: 0px; width: 11px; }`,
          `.framer-yvDv4 .framer-1saqngk { height: 3px; left: 4px; position: absolute; top: 8px; width: 3px; }`,
          `.framer-yvDv4 .framer-5chj6a { height: 4px; left: 4px; position: absolute; top: 2px; width: 4px; }`,
          `.framer-yvDv4 .framer-1daoptz, .framer-yvDv4 .framer-la1ndd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-yvDv4 .framer-1q02xf5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yvDv4 .framer-bbg7j7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yvDv4 .framer-1wdwxz3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-yvDv4 .framer-1as0hep { height: 7px; position: relative; width: 61px; }`,
          `.framer-yvDv4 .framer-wnk5gx { height: 7px; left: 9px; position: absolute; top: 0px; width: 52px; }`,
          `.framer-yvDv4 .framer-1qv3pw { height: 5px; left: 48px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-yvDv4 .framer-1oyhy3g { height: 7px; left: 47px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yvDv4 .framer-zhdych { height: 7px; left: 45px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yvDv4 .framer-1tgqpfl { height: 7px; left: 42px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yvDv4 .framer-16wkrwm { height: 7px; left: 38px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yvDv4 .framer-dbcf63 { height: 2px; left: 39px; position: absolute; top: 3px; width: 4px; }`,
          `.framer-yvDv4 .framer-h4zafe { height: 7px; left: 32px; position: absolute; top: 0px; width: 6px; }`,
          `.framer-yvDv4 .framer-1obu94e { height: 7px; left: 27px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yvDv4 .framer-k37omh { height: 2px; left: 28px; position: absolute; top: 6px; width: 4px; }`,
          `.framer-yvDv4 .framer-5c1bje { height: 1px; left: 28px; position: absolute; top: 3px; width: 3px; }`,
          `.framer-yvDv4 .framer-1u1grab { height: 2px; left: 28px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-yvDv4 .framer-1aqol5v { height: 7px; left: 18px; position: absolute; top: 0px; width: 8px; }`,
          `.framer-yvDv4 .framer-1m7xi0p { height: 7px; left: 11px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-yvDv4 .framer-fn24q3 { height: 1px; left: 13px; position: absolute; top: 5px; width: 5px; }`,
          `.framer-yvDv4 .framer-qt0z67 { height: 7px; left: 5px; position: absolute; top: 0px; width: 6px; }`,
          `.framer-yvDv4 .framer-msv4k7 { height: 2px; left: 7px; position: absolute; top: 2px; width: 2px; }`,
          `.framer-yvDv4 .framer-1rrq731 { height: 7px; left: 0px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yvDv4 .framer-1aa6vsk { height: 2px; left: 1px; position: absolute; top: 3px; width: 4px; }`,
          `.framer-yvDv4 .framer-rfuxf6 { height: 2px; left: 1px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-yvDv4 .framer-9ypvph { height: 7px; left: 0px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-yvDv4 .framer-1bwc2bh { height: 4px; left: 0px; position: absolute; top: 4px; width: 7px; }`,
          `.framer-yvDv4 .framer-p5ejtx { height: 1px; left: 0px; position: absolute; top: 4px; width: 1px; }`,
          `.framer-yvDv4 .framer-ph4iho { height: 1px; left: 7px; position: absolute; top: 4px; width: 1px; }`,
          `.framer-yvDv4 .framer-ckjcp2 { height: 2px; left: 5px; position: absolute; top: 2px; width: 2px; }`,
          `.framer-yvDv4 .framer-jk22rq { height: 2px; left: 0px; position: absolute; top: 2px; width: 2px; }`,
          `.framer-yvDv4 .framer-14x091 { height: 2px; left: 2px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-yvDv4[data-border="true"]::after, .framer-yvDv4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-yvDv4`
      )),
      (La = Ia),
      (Ia.displayName = `Upgrade Banner`),
      (Ia.defaultProps = { height: 180, width: 235 }),
      A(
        Ia,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Bricolage Grotesque Variable`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Bricolage Grotesque`,
                url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y996as8bTXq_nANBjzKo3IeZx8z6up5H-qHGN6NLPo.woff2`,
                variationAxes: [
                  {
                    defaultValue: 96,
                    maxValue: 96,
                    minValue: 12,
                    name: `Optical size`,
                    tag: `opsz`,
                  },
                  { defaultValue: 800, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` },
                  { defaultValue: 100, maxValue: 100, minValue: 75, name: `Width`, tag: `wdth` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Bricolage Grotesque`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Bricolage Grotesque`,
                url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvZvlyMgvs-wJDtw.woff2`,
                weight: `800`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  za = e(() => {
    (Ra(), Ra());
  }),
  Ba,
  Va = e(() => {
    (a(),
      x(),
      j(),
      (Ba = (e) => {
        let { navigate: t, routes: n } = he(),
          r = fe();
        return [
          n?.[r]?.path,
          (r) => {
            let [i, a] = r.split(`#`),
              o = Object.entries(n)?.find(([, e]) => e?.path === i)?.[0];
            o ? t(o, a) : e?.strict || d.location.assign(i);
          },
        ];
      }));
  }),
  Ha = e(() => {
    (Va(), Va());
  });
function Ua(e) {
  let t = e.cartListItem && e.cartListItem.length > 0,
    n = e.emptyState && e.emptyState.length > 0,
    { cart: r, isLoading: i, error: a } = Mr(),
    { isFree: o } = Ea(),
    s = Se(),
    c = ye(),
    [, l] = Ba(),
    u = [];
  if ((t || u.push(`Cart List Item`), n || u.push(`Empty State`), u.length > 0))
    return h(fa, { missingProps: u });
  if (i) return h(Ka, { emptyState: e.emptyState });
  if (a) return h(qa, { error: a });
  let d = r?.lines?.edges || [],
    f = (t, n) => {
      if (!e.collectionRoute) return;
      let r = t.target;
      if (
        r.tagName === `BUTTON` ||
        r.closest(`button`) !== null ||
        r.tagName === `INPUT` ||
        r.closest(`input`) !== null ||
        r.tagName === `A` ||
        r.closest(`a`) !== null ||
        !e.collectionRoute
      )
        return;
      let i = n.merchandise.product.handle,
        a = `${e.collectionRoute}/${i}`;
      (document.dispatchEvent(new CustomEvent(pi)), l(a));
    };
  return b(S, {
    children: [
      !e.scrollbar && h(`style`, { children: Xa }),
      b(`div`, {
        className: `frameship-cart-product-list`,
        style: {
          width: `100%`,
          height: `100%`,
          display: `flex`,
          flexDirection: `column`,
          gap: e.gap,
          overflowY: `auto`,
        },
        children: [
          o &&
            !s &&
            !c &&
            h(La, { style: { width: `100%`, height: `fit-content`, flexShrink: 0 } }),
          d.length === 0 && h(Ka, { emptyState: e.emptyState }),
          d.length > 0 &&
            h(S, {
              children: d.map(({ node: t }, n) =>
                b(
                  `div`,
                  {
                    onClick: (e) => f(e, t),
                    children: [
                      h(Wa, { item: t, cartListItem: e.cartListItem }),
                      e.divider.show &&
                        n < d.length - 1 &&
                        h(Ga, { divider: e.divider, marginTop: e.gap }),
                    ],
                  },
                  t.id
                )
              ),
            }),
        ],
      }),
    ],
  });
}
function Wa({ item: e, cartListItem: t }) {
  return h(S, {
    children: ne.map(t, (t) => {
      if (g(t)) {
        let n = e.sellingPlanAllocation,
          r = !!n,
          i = n?.sellingPlan?.name || ``,
          a = n?.sellingPlan?.options?.[0]?.value,
          o = n?.priceAdjustments?.[0]?.perDeliveryPrice?.amount || e.merchandise.price.amount,
          s = {
            imageUrl: e.merchandise.image.url || ``,
            imageAlt: e.merchandise.image.altText || ``,
            productTitle: e.merchandise.product.title || ``,
            productVariantTitle: e.merchandise.title.replace(`Default Title`, ``) || ``,
            productSubtotal: Number(Number(o) * e.quantity).toFixed(2) || ``,
            productCurrency: e.merchandise.price.currencyCode || ``,
            lineId: e.id,
            quantity: e.quantity,
            sellingPlanName: i,
            isSubscription: r,
            deliveryFrequency: a,
          };
        return ca.ENVIRONMENT.production === `framer` ? Ja(s, t) : l(t, s);
      }
      return t;
    }),
  });
}
function Ga({ divider: e, marginTop: t }) {
  return h(`div`, {
    style: { width: `100%`, height: e.height, backgroundColor: e.color, marginTop: t },
  });
}
function Ka({ emptyState: e }) {
  return h(`div`, {
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    },
    children: ne.map(e, (e) =>
      g(e) ? l(e, { style: { ...e.props.style, width: `100%`, height: `100%` } }) : e
    ),
  });
}
function qa({ error: e }) {
  return b(`div`, {
    style: {
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      gap: `4px`,
      borderRadius: `4px`,
      border: `2px solid #FF4D4D`,
      padding: `12px 16px`,
      backgroundColor: `#FF4D4D10`,
      boxSizing: `border-box`,
      fontSize: `14px`,
      lineHeight: `20px`,
    },
    children: [
      b(`div`, {
        style: { display: `flex`, gap: `8px`, alignItems: `center` },
        children: [
          h(ua, { style: { width: `20px`, height: `20px`, color: `#FF4D4D` } }),
          h(`p`, { style: { margin: 0, fontWeight: `600` }, children: `Cart Error` }),
        ],
      }),
      b(`p`, { style: { margin: 0 }, children: [e.message, ` Please try again later.`] }),
    ],
  });
}
function Ja(e, t) {
  let n = t.props?.children?.props?.children,
    r = n?.type?.propertyControls;
  if (!r || !n) return l(t, e);
  let i = {};
  (Object.entries(r).forEach(([t, n]) => {
    switch (n.title) {
      case `Image Url`:
        i[t] = e.imageUrl;
        break;
      case `Image Alt`:
        i[t] = e.imageAlt;
        break;
      case `Product Title`:
        i[t] = e.productTitle;
        break;
      case `Product Variant Title`:
        i[t] = e.productVariantTitle;
        break;
      case `Product Subtotal`:
        i[t] = e.productSubtotal;
        break;
      case `Product Currency`:
        i[t] = e.productCurrency;
        break;
      case `Line Id`:
        i[t] = e.lineId;
        break;
      case `Quantity`:
        i[t] = e.quantity;
        break;
      case `Selling Plan Name`:
        i[t] = e.sellingPlanName;
        break;
      case `Delivery Frequency`:
        i[t] = e.deliveryFrequency || ``;
        break;
    }
  }),
    n.props.layoutId && (i.layoutId = `${n.props.layoutId}-${e.lineId}`),
    n.props.id && (i.id = `${n.props.id}-${e.lineId}`));
  let a = l(n, i),
    o = t.props.children,
    s = { children: a };
  return (
    o?.props?.layoutId && (s.layoutId = `${o.props.layoutId}-${e.lineId}`),
    o?.props?.id && (s.id = `${o.props.id}-${e.lineId}`),
    l(t, { children: l(o, s), style: { ...(t.props?.style || {}), width: `100%` } })
  );
}
function Ya(e) {
  return h(nr, { client: zr(), children: h(Ta, { children: h(Ua, { ...e }) }) });
}
var Xa,
  Za = e(() => {
    (x(),
      n(),
      j(),
      or(),
      Lr(),
      Br(),
      la(),
      da(),
      Hr(),
      pa(),
      Oa(),
      za(),
      we(),
      oi(),
      Ha(),
      mi(),
      (Xa = `
.frameship-cart-product-list::-webkit-scrollbar {
  display: none;
}
.frameship-cart-product-list {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`),
      k(Ya, {
        cartListItem: {
          type: L.ComponentInstance,
          description: `Connect this to a *Cart List Item* component.`,
        },
        emptyState: {
          type: L.ComponentInstance,
          description: `Connect this to a *Empty State* component.`,
        },
        gap: {
          type: L.Number,
          defaultValue: 20,
          min: 0,
          step: 1,
          unit: `px`,
          description: `The gap between each cart item`,
        },
        divider: {
          type: L.Object,
          controls: {
            show: { type: L.Boolean, defaultValue: !1 },
            color: { type: L.Color, defaultValue: Y.backgroundMuted },
            height: {
              type: L.Number,
              defaultValue: 1,
              min: 0,
              unit: `px`,
              description: `A divider line is added between each cart item`,
            },
          },
          defaultValue: { show: !1, color: Y.backgroundMuted, height: 1 },
        },
        scrollbar: {
          type: L.Boolean,
          title: `Scroll Bar`,
          defaultValue: !1,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        collectionRoute: {
          type: L.Link,
          title: `Collection Route`,
          description: `The route to the collection of products (CMS Index Page). Get it from Pages tab in the left sidebar. E.g. /products`,
        },
        ...ni,
      }),
      A(
        Ya,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Bricolage Grotesque Variable`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Bricolage Grotesque`,
                url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y996as8bTXq_nANBjzKo3IeZx8z6up5H-qHGN6NLPo.woff2`,
                variationAxes: [
                  {
                    defaultValue: 96,
                    maxValue: 96,
                    minValue: 12,
                    name: `Optical size`,
                    tag: `opsz`,
                  },
                  { defaultValue: 800, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` },
                  { defaultValue: 100, maxValue: 100, minValue: 75, name: `Width`, tag: `wdth` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Bricolage Grotesque`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Bricolage Grotesque`,
                url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvZvlyMgvs-wJDtw.woff2`,
                weight: `800`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ya.displayName = `Cart Product List`));
  });
function Qa(e) {
  return h(nr, { client: zr(), children: e.children });
}
var $a = e(() => {
  (x(), or(), Br());
});
function eo(e) {
  let { cart: t, cartId: n, isLoading: r } = Mr(),
    { isFree: i } = Ca(),
    a = ye(),
    o = () => {
      if (!i)
        try {
          if (!n) throw Error(`No cart available`);
          if (!(t?.lines?.edges?.length && t.lines.edges.length > 0)) throw Error(`Cart is empty`);
          if (!t?.checkoutUrl) throw Error(`Checkout URL not available`);
          e.onCheckoutStart?.();
          let r = `${t.checkoutUrl}&return_url=${encodeURIComponent(d.location.origin + `/checkout-complete`)}`;
          e.newTab ? d.open(r, `_blank`, `noopener,noreferrer`) : (d.location.href = r);
        } catch (t) {
          (console.error(`Checkout error:`, t), e.onCheckoutError?.(t));
        }
    },
    s = !!(t?.lines?.edges?.length && t.lines.edges.length > 0),
    c = e.disabled || !s || r || i,
    l = a ? e.previewType === `disabled` : c,
    u = e.text ? e.text : `Checkout`;
  return e.buttonType === `custom`
    ? h(Wi, { onClick: o, customButtonSize: e.customButtonSize, children: e.customButton })
    : h(Hi, {
        onClick: o,
        disabled: l,
        font: e.presetButtonStyle.font,
        leftIcon: e.leftIcon?.[0],
        rightIcon: e.rightIcon?.[0],
        text: r ? `Loading...` : u,
        presetButtonStyle: e.presetButtonStyle,
        disabledStyle: e.disabledStyle,
      });
}
function to(e) {
  return h(Qa, { children: h(eo, { ...e }) });
}
var no = e(() => {
    (a(),
      x(),
      j(),
      Lr(),
      $a(),
      wa(),
      Li(),
      Ui(),
      Gi(),
      oi(),
      we(),
      k(to, {
        ...Fi,
        ...Oi(ji, { "presetButtonStyle.tapScale": 0.995 }),
        ...Oi(Pi, { text: `Checkout` }),
        disabled: { type: L.Boolean, title: `Disabled`, defaultValue: !1 },
        ...Mi,
        newTab: { type: L.Boolean, title: `Open in New Tab`, defaultValue: !0 },
        previewType: {
          type: L.Enum,
          title: `Preview`,
          options: [`default`, `disabled`],
          optionTitles: [`Default`, `Disabled`],
          defaultValue: `default`,
          displaySegmentedControl: !0,
        },
        ...ni,
      }),
      (to.displayName = `Checkout Button`));
  }),
  ro,
  io = e(() => {
    (j(),
      (ro = {
        decoration: {
          type: L.Enum,
          title: `Decoration`,
          options: [`none`, `underline`, `line-through`],
          optionTitles: [`None`, `Underline`, `Strikethrough`],
          defaultValue: `none`,
        },
      }));
  });
function ao(e, t) {
  if (!t?.priceAdjustments?.length) return null;
  let n = t.priceAdjustments[0]?.adjustmentValue;
  if (!n) return null;
  let r = Number(e.amount);
  return `price` in n
    ? { amount: n.price.amount, currencyCode: n.price.currencyCode || e.currencyCode }
    : `adjustmentPercentage` in n
      ? {
          amount: (r * (1 - n.adjustmentPercentage / 100)).toFixed(2),
          currencyCode: e.currencyCode,
        }
      : `adjustmentAmount` in n
        ? {
            amount: (r - Number(n.adjustmentAmount.amount)).toFixed(2),
            currencyCode: n.adjustmentAmount.currencyCode || e.currencyCode,
          }
        : null;
}
function oo(e) {
  let t = e.toLowerCase().trim(),
    n = t.match(/^(\d+)\s*/),
    r = n ? n[1] : ``,
    i = t.replace(/^\d+\s*/, ``).trim(),
    a =
      {
        day: `d`,
        days: `d`,
        daily: `d`,
        week: `w`,
        weeks: `w`,
        weekly: `w`,
        month: `m`,
        months: `m`,
        monthly: `m`,
        year: `y`,
        years: `y`,
        yearly: `y`,
      }[i] || i;
  return r ? `${r}${a}` : a;
}
var so = e(() => {});
function co(e) {
  let t = {
      ...e.font,
      color: e.color,
      textDecoration: e.decoration === `none` ? `none` : e.decoration,
    },
    n = Gr({ amount: Number(e.subtotal), currencyCode: e.currencyCode, options: e.currencyFormat }),
    r = n;
  return (
    e.deliveryFrequency &&
      e.deliveryFrequency !== `` &&
      (r = `${n}${`/${oo(e.deliveryFrequency)}`}`),
    h(S, { children: $r(e.tag, r, t) })
  );
}
var lo = e(() => {
  (x(),
    j(),
    Hr(),
    ti(),
    qr(),
    io(),
    Li(),
    oi(),
    so(),
    k(co, {
      subtotal: {
        type: L.Number,
        title: `Subtotal`,
        defaultValue: 0,
        description: `Connect this to a *Product Subtotal* variable from Cart List Item component`,
      },
      currencyCode: {
        type: L.String,
        title: `Currency Code`,
        defaultValue: `USD`,
        description: `Connect this to a *Product Currency* variable from Cart List Item component`,
      },
      deliveryFrequency: {
        type: L.String,
        title: `Delivery Frequency`,
        defaultValue: ``,
        description: `Connect this to a *Delivery Frequency* variable from Cart List Item component. Will append /month or /year to the price.`,
      },
      font: { type: L.Font, title: `Font`, controls: `extended`, defaultFontType: `sans-serif` },
      color: { type: L.Color, title: `Color`, defaultValue: Y.foreground },
      ...Oi(Kr, { "currencyFormat.hidden": !1 }),
      ...ei,
      ...ro,
      ...ni,
    }),
    (co.displayName = `Cart List Item Subtotal`));
});
function uo(e) {
  return h(`img`, {
    src: e.image,
    alt: e.alt,
    loading: `lazy`,
    style: {
      width: `100%`,
      height: `100%`,
      objectFit: fo(e.objectFit),
      borderRadius: e.borderRadius,
      border: typeof e.border == `string` ? e.border : void 0,
      borderWidth: typeof e.border == `object` ? e.border.borderWidth : void 0,
      borderStyle: typeof e.border == `object` ? e.border.borderStyle : void 0,
      borderColor: typeof e.border == `object` ? e.border.borderColor : void 0,
      backgroundColor: e.backgroundColor,
    },
  });
}
function fo(e) {
  return e === `fill` ? `cover` : e === `fit` ? `contain` : e === `stretch` ? `fill` : `cover`;
}
var po = e(() => {
  (x(),
    j(),
    oi(),
    k(uo, {
      image: {
        type: L.String,
        title: `Image URL`,
        defaultValue: `https://framerusercontent.com/images/Y5OqHDa8HlUSSW24MhzRncVYus.png?scale-down-to=1024&width=3097&height=3908`,
        description: `Connect this to a *Image Url* variable from Cart List Item component`,
      },
      alt: {
        type: L.String,
        title: `Alt Text`,
        defaultValue: `Cart Product Image`,
        description: `Connect this to a *Image Alt* variable from Cart List Item component`,
      },
      objectFit: {
        title: `Image Fit`,
        type: L.Enum,
        options: [`fill`, `fit`, `stretch`],
        optionTitles: [`Fill`, `Fit`, `Stretch`],
        defaultValue: `fit`,
      },
      border: { type: L.Border, title: `Border`, optional: !0 },
      borderRadius: { type: L.BorderRadius, title: `Border Radius`, defaultValue: `6px` },
      backgroundColor: {
        type: L.Color,
        title: `Background`,
        defaultValue: `#FFFFFF`,
        optional: !0,
      },
      needHelp: {
        ...ni.needHelp,
        description: `This component is meant to be used *only in the Cart List Item component.*`,
      },
    }),
    (uo.displayName = `Cart Product Image`));
});
function mo({ style: e }) {
  return h(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `32`,
    height: `32`,
    fill: `currentColor`,
    viewBox: `0 0 256 256`,
    style: e,
    children: h(`path`, {
      d: `M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z`,
    }),
  });
}
var ho = e(() => {
  x();
});
function go({ style: e }) {
  return h(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `32`,
    height: `32`,
    fill: `currentColor`,
    viewBox: `0 0 256 256`,
    style: e,
    children: h(`path`, {
      d: `M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z`,
    }),
  });
}
var _o = e(() => {
  x();
});
function vo(e) {
  if (!e) return {};
  let t = { width: `100%`, boxSizing: `border-box` };
  if (
    (e.inputStyle?.padding && (t.padding = e.inputStyle.padding),
    typeof e.inputStyle?.border == `string`)
  )
    t.border = e.inputStyle.border;
  else if (e.inputStyle?.border) {
    let n = e.inputStyle.border;
    (n.borderWidth !== void 0 && (t.borderWidth = n.borderWidth),
      n.borderStyle !== void 0 && (t.borderStyle = n.borderStyle),
      n.borderColor !== void 0 && (t.borderColor = n.borderColor),
      n.border !== void 0 && (t.border = n.border),
      n.borderTopWidth !== void 0 && (t.borderTopWidth = n.borderTopWidth),
      n.borderRightWidth !== void 0 && (t.borderRightWidth = n.borderRightWidth),
      n.borderBottomWidth !== void 0 && (t.borderBottomWidth = n.borderBottomWidth),
      n.borderLeftWidth !== void 0 && (t.borderLeftWidth = n.borderLeftWidth));
  }
  return (
    e.inputStyle?.borderRadius !== void 0 && (t.borderRadius = e.inputStyle.borderRadius),
    e.inputStyle?.textColor !== void 0 && (t.color = e.inputStyle.textColor),
    e.inputStyle?.backgroundColor !== void 0 && (t.backgroundColor = e.inputStyle.backgroundColor),
    t
  );
}
var yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo = e(() => {
    (x(),
      n(),
      j(),
      Hr(),
      (yo = _((e, t) => {
        let {
            inputStyle: n,
            placeholder: r = xo.placeholder,
            type: i = xo.inputType,
            disabled: a = xo.disabled,
            onChange: o,
            value: s,
            ...c
          } = e,
          l = { ...bo.inputStyle, ...(n || {}) },
          u = { ...bo.inputStyle.font, ...(n?.font || {}) },
          d = (e) => {
            o && o(e);
          },
          f = {
            fontFamily: `inherit`,
            fontSize: `16px`,
            lineHeight: `1.4`,
            width: `100%`,
            height: `100%`,
            boxSizing: `border-box`,
            textAlign: `center`,
            ...vo({ inputStyle: l }),
            ...u,
          };
        return (
          l?.focusOutlineColor && (f[`--focus-outline-color`] = l.focusOutlineColor),
          h(`input`, {
            id: `frameship-input`,
            ref: t,
            type: i,
            placeholder: r,
            disabled: a,
            value: s,
            onChange: d,
            style: f,
            ...c,
          })
        );
      })),
      (bo = {
        inputStyle: {
          padding: `8px 12px 8px 12px`,
          border: { borderWidth: 0, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 0.2)` },
          borderRadius: Vr.borderRadius,
          textColor: Y.foreground,
          backgroundColor: Y.background,
          focusOutlineColor: Y.backgroundMuted,
          font: { fontFamily: `inherit`, fontSize: `16px`, lineHeight: `1.2` },
        },
      }),
      (xo = { placeholder: ``, inputType: `text`, disabled: !1 }),
      (So = {
        inputStyle: {
          title: `Input Style`,
          type: L.Object,
          controls: {
            padding: { type: L.Padding, title: `Padding`, defaultValue: bo.inputStyle.padding },
            border: {
              type: L.Border,
              title: `Border`,
              defaultValue: {
                borderWidth: bo.inputStyle.border.borderWidth,
                borderStyle: bo.inputStyle.border.borderStyle,
                borderColor: bo.inputStyle.border.borderColor,
              },
            },
            borderRadius: {
              type: L.BorderRadius,
              title: `Border Radius`,
              defaultValue: bo.inputStyle.borderRadius,
            },
            textColor: {
              title: `Text Color`,
              type: L.Color,
              defaultValue: bo.inputStyle.textColor,
            },
            backgroundColor: {
              title: `Background`,
              type: L.Color,
              defaultValue: bo.inputStyle.backgroundColor,
            },
            focusOutlineColor: {
              title: `Focus Outline Color`,
              type: L.Color,
              defaultValue: bo.inputStyle.focusOutlineColor,
            },
            font: {
              title: `Font`,
              type: L.Font,
              controls: `extended`,
              defaultFontType: `sans-serif`,
              defaultValue: bo.inputStyle.font,
            },
          },
        },
      }),
      (Co = {
        placeholder: { title: `Placeholder`, type: L.String, defaultValue: xo.placeholder },
        inputType: {
          title: `Input Type`,
          type: L.Enum,
          options: [`text`, `email`, `password`, `number`, `tel`, `url`],
          optionTitles: [`Text`, `Email`, `Password`, `Number`, `Phone`, `URL`],
          defaultValue: xo.inputType,
        },
        disabled: { title: `Disabled`, type: L.Boolean, defaultValue: xo.disabled },
      }),
      (wo = _e(
        yo,
        [
          `input[type="number"] {
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }`,
          `input[type="number"]::-webkit-outer-spin-button,
     input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }`,
          `#frameship-input:focus, #frameship-input:focus-visible {
      outline: 2px solid var(--focus-outline-color, #007bff);
      outline-offset: 0px;
    }`,
        ],
        ``
      )),
      (To = wo),
      (yo.displayName = `Input`));
  });
function Do(e) {
  let { updateQuantity: n } = Mr(),
    [r, i] = u(String(e.quantity));
  s(() => {
    i(String(e.quantity));
  }, [e.quantity]);
  let a = t(
      () =>
        e.type === `add`
          ? `Increase quantity`
          : e.type === `subtract`
            ? `Decrease quantity`
            : `Quantity`,
      [e.type]
    ),
    o = () => {
      n(e.lineId, e.quantity + 1);
    },
    c = () => {
      e.quantity <= 1 || n(e.lineId, e.quantity - 1);
    },
    l = (t) => {
      let r = t.target.value;
      if ((i(r), r === ``)) return;
      let a = Number(r);
      Number.isFinite(a) && (a < 1 || n(e.lineId, Math.floor(a)));
    },
    d = (t) => {
      let r = t.target.value,
        a = Number(r);
      (r === `` || !Number.isFinite(a) || a < 1) && (n(e.lineId, 1), i(`1`));
    };
  return e.type === `add` && e.buttonType === `custom`
    ? h(Wi, { onClick: o, customButtonSize: e.customButtonSize, children: e.customButton })
    : e.type === `add` && e.buttonType === `preset`
      ? h(Hi, {
          onClick: o,
          font: e.presetButtonStyle.font,
          leftIcon: e.leftIcon?.[0] ?? h(mo, { style: { width: `16px`, height: `16px` } }),
          rightIcon: e.rightIcon?.[0],
          presetButtonStyle: e.presetButtonStyle,
        })
      : e.type === `subtract` && e.buttonType === `custom`
        ? h(Wi, { onClick: c, customButtonSize: e.customButtonSize, children: e.customButton })
        : e.type === `subtract` && e.buttonType === `preset`
          ? h(Hi, {
              onClick: c,
              font: e.presetButtonStyle.font,
              leftIcon: e.leftIcon?.[0] ?? h(go, { style: { width: `16px`, height: `16px` } }),
              rightIcon: e.rightIcon?.[0],
              presetButtonStyle: e.presetButtonStyle,
            })
          : h(To, {
              "aria-label": a,
              type: e.inputType,
              min: e.min,
              max: e.max,
              step: e.step,
              value: r,
              onChange: l,
              onBlur: d,
              onFocus: (e) => e.currentTarget.select(),
              inputStyle: e.inputStyle,
            });
}
function Oo(e) {
  return h(Qa, { children: h(Do, { ...e }) });
}
var ko = e(() => {
  (x(),
    j(),
    n(),
    Lr(),
    $a(),
    ho(),
    _o(),
    Li(),
    Ui(),
    Gi(),
    Eo(),
    oi(),
    k(Oo, {
      type: {
        type: L.Enum,
        options: [`subtract`, `input`, `add`],
        optionTitles: [`-`, `123`, `+`],
        defaultValue: `input`,
        displaySegmentedControl: !0,
      },
      quantity: {
        type: L.Number,
        defaultValue: 1,
        min: 1,
        step: 1,
        displayStepper: !0,
        description: `Connect this to a *Quantity* variable from Cart List Item component`,
      },
      lineId: {
        type: L.String,
        defaultValue: ``,
        description: `Connect this to a *Line Id* variable from Cart List Item component`,
      },
      step: { type: L.Number, defaultValue: 1, min: 1, step: 1, displayStepper: !0 },
      ...Oi(Fi, {
        "buttonType.hidden": (e) => e.type === `input`,
        "customButton.hidden": (e) => e.buttonType === `preset` || e.type === `input`,
        "customButtonSize.hidden": (e) => e.buttonType === `preset` || e.type === `input`,
      }),
      ...Oi(Ni, {
        "presetButtonStyle.hidden": (e) => e.buttonType === `custom` || e.type === `input`,
      }),
      ...Oi(Pi, {
        "leftIcon.hidden": (e) => e.buttonType === `custom` || e.type === `input`,
        "leftIcon.title": `Icon`,
        "rightIcon.hidden": !0,
        "text.hidden": !0,
      }),
      ...Oi(So, { "inputStyle.hidden": (e) => e.type !== `input` }),
      ...Oi(Co, {
        "placeholder.hidden": (e) => e.type !== `input`,
        "inputType.hidden": !0,
        "disabled.hidden": (e) => e.type !== `input`,
      }),
      ...ni,
    }),
    (Oo.displayName = `Cart Quantity Input`));
});
function Ao(e) {
  let { removeLine: t } = Mr(),
    n = () => {
      t(e.lineId);
    };
  return e.buttonType === `custom`
    ? h(Wi, { onClick: n, customButtonSize: e.customButtonSize, children: e.customButton })
    : h(Hi, {
        onClick: n,
        font: e.presetButtonStyle.font,
        leftIcon: e.leftIcon?.[0] ?? h(ra, { style: { width: `20px`, height: `20px` } }),
        rightIcon: e.rightIcon?.[0],
        text: e.text,
        presetButtonStyle: e.presetButtonStyle,
      });
}
function jo(e) {
  return h(Qa, { children: h(Ao, { ...e }) });
}
var Mo = e(() => {
    (x(),
      j(),
      Lr(),
      $a(),
      Li(),
      Ui(),
      Gi(),
      ia(),
      oi(),
      k(jo, {
        lineId: {
          type: L.String,
          description: `Connect this to a *Line Id* variable from Cart List Item component`,
        },
        ...Fi,
        ...Ni,
        ...Oi(Pi, { text: `` }),
        ...ni,
      }),
      (jo.displayName = `Remove Product from Cart Button`));
  }),
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko = e(() => {
    (x(),
      j(),
      D(),
      n(),
      lo(),
      po(),
      ko(),
      Mo(),
      (No = z(uo)),
      (Po = z(Oo)),
      (Fo = z(co)),
      (Io = z(jo)),
      (Lo = `framer-D9dqQ`),
      (Ro = { NWfltuIvZ: `framer-v-126dg35` }),
      (zo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bo = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (Vo = w.create(c)),
      (Ho = ({
        deliveryFrequency: e,
        height: t,
        id: n,
        imageAlt: r,
        imageUrl: i,
        lineId: a,
        productCurrency: o,
        productSubtotal: s,
        productTitle: c,
        productVariantTitle: l,
        quantity: u,
        sellingPlanName: d,
        width: f,
        ...p
      }) => ({
        ...p,
        Bymbo9djN: u ?? p.Bymbo9djN ?? 1,
        ePm014j4d: c ?? p.ePm014j4d ?? `Product Title`,
        hBopjUGQO: r ?? p.hBopjUGQO ?? `Product Alt`,
        ISMHKMS3u: d ?? p.ISMHKMS3u ?? `Subscription Plan Name`,
        KDGMZhb_7: s ?? p.KDGMZhb_7 ?? 99,
        keb4Sytxv: a ?? p.keb4Sytxv ?? `123456789`,
        mkKIwAzfX: l ?? p.mkKIwAzfX ?? `Product Variant Title`,
        oeLTCl7xr: e ?? p.oeLTCl7xr,
        T02EN5Ncd: o ?? p.T02EN5Ncd ?? `USD`,
        VO32SQDEf:
          i ??
          p.VO32SQDEf ??
          `https://framerusercontent.com/images/sFKjyv5OwGE92YZ3xS9WwreFGQ.webp`,
      })),
      (Uo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Wo = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          le();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              VO32SQDEf: p,
              hBopjUGQO: m,
              ePm014j4d: g,
              mkKIwAzfX: _,
              KDGMZhb_7: v,
              T02EN5Ncd: ee,
              keb4Sytxv: y,
              Bymbo9djN: x,
              ISMHKMS3u: S,
              oeLTCl7xr: ne,
              ...C
            } = Ho(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: ie,
              gestureVariant: ae,
              isLoading: k,
              setGestureState: A,
              setVariant: oe,
              variants: j,
            } = ue({ defaultVariant: `NWfltuIvZ`, ref: i, variant: f, variantClassNames: Ro }),
            M = Uo(e, j),
            se = F(Lo);
          return h(re, {
            id: d ?? a,
            children: h(Vo, {
              animate: j,
              initial: !1,
              children: h(Bo, {
                value: zo,
                children: b(w.div, {
                  ...C,
                  ...ie,
                  className: F(se, `framer-126dg35`, u, E),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: M,
                  layoutId: `NWfltuIvZ`,
                  ref: i,
                  style: { ...l },
                  children: [
                    h(w.div, {
                      className: `framer-1hri0x1`,
                      "data-framer-name": `Image`,
                      layoutDependency: M,
                      layoutId: `o2Z8qX3es`,
                      children: h(P, {
                        children: h(N, {
                          className: `framer-hs8dza-container`,
                          "data-code-component-plugin-id": `63896a`,
                          isAuthoredByUser: !0,
                          layoutDependency: M,
                          layoutId: `QaEMeGoh0-container`,
                          nodeId: `QaEMeGoh0`,
                          rendersWithMotion: !0,
                          scopeId: `ygU5oLuEP`,
                          children: h(uo, {
                            alt: m,
                            backgroundColor: `rgb(255, 255, 255)`,
                            borderRadius: `6px`,
                            height: `100%`,
                            id: `QaEMeGoh0`,
                            image: p,
                            layoutId: `QaEMeGoh0`,
                            needHelp: { info: `info` },
                            objectFit: `fill`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    b(w.div, {
                      className: `framer-1wi34rd`,
                      "data-framer-name": `Variant Info`,
                      layoutDependency: M,
                      layoutId: `zBxJwJSYm`,
                      children: [
                        b(w.div, {
                          className: `framer-19i8dxk`,
                          "data-framer-name": `Title & Quantity`,
                          layoutDependency: M,
                          layoutId: `JlHr8jBEL`,
                          children: [
                            b(w.div, {
                              className: `framer-ouiva8`,
                              "data-framer-name": `Title`,
                              layoutDependency: M,
                              layoutId: `k1RctZXea`,
                              children: [
                                h(O, {
                                  __fromCanvasComponent: !0,
                                  children: h(c, {
                                    children: h(w.p, {
                                      style: { "--framer-font-size": `14px` },
                                      children: `Product Title`,
                                    }),
                                  }),
                                  className: `framer-1g0nf3z`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `y0TV3vv2N`,
                                  text: g,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                h(O, {
                                  __fromCanvasComponent: !0,
                                  children: h(c, {
                                    children: h(w.p, {
                                      style: { "--framer-font-size": `12px` },
                                      children: `Variant`,
                                    }),
                                  }),
                                  className: `framer-nu67j9`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `uNEMUH7by`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: _,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                h(O, {
                                  __fromCanvasComponent: !0,
                                  children: h(c, {
                                    children: h(w.p, {
                                      dir: `auto`,
                                      style: { "--framer-font-size": `10px` },
                                      children: `Content`,
                                    }),
                                  }),
                                  className: `framer-1k58xs`,
                                  "data-framer-name": `Selling Plan Name`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `yhKONwCIo`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: S,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            b(w.div, {
                              className: `framer-1kyejha`,
                              "data-framer-name": `quantity`,
                              layoutDependency: M,
                              layoutId: `RmR8BDUBy`,
                              children: [
                                h(P, {
                                  children: h(N, {
                                    className: `framer-yehgrq-container`,
                                    "data-code-component-plugin-id": `63896a`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: M,
                                    layoutId: `FZLTlthhX-container`,
                                    nodeId: `FZLTlthhX`,
                                    rendersWithMotion: !0,
                                    scopeId: `ygU5oLuEP`,
                                    children: h(Oo, {
                                      buttonType: `preset`,
                                      customButton: [],
                                      customButtonSize: { height: `default`, width: `default` },
                                      disabled: !1,
                                      height: `100%`,
                                      id: `FZLTlthhX`,
                                      inputStyle: {
                                        backgroundColor: `rgb(243, 243, 243)`,
                                        border: {
                                          borderColor: `rgba(0, 0, 0, 0.2)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `10px`,
                                        focusOutlineColor: `rgb(217, 217, 217)`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        padding: `8px 12px 8px 12px`,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      inputType: `text`,
                                      layoutId: `FZLTlthhX`,
                                      leftIcon: [],
                                      lineId: y,
                                      needHelp: { info: `info` },
                                      placeholder: ``,
                                      presetButtonStyle: {
                                        alignItems: `center`,
                                        backgroundColor: `rgb(243, 243, 243)`,
                                        border: {
                                          borderColor: `rgb(117, 117, 117)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `10px`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        gap: 8,
                                        hover: {
                                          backgroundColor: `rgb(230, 230, 230)`,
                                          border: {
                                            borderColor: `rgb(117, 117, 117)`,
                                            borderStyle: `solid`,
                                            borderWidth: 0,
                                          },
                                          shadow: ``,
                                          textColor: `rgb(17, 17, 17)`,
                                        },
                                        justifyContent: `center`,
                                        padding: `8px 16px 8px 16px`,
                                        shadow: ``,
                                        tapScale: 0.98,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      quantity: x,
                                      rightIcon: [],
                                      showDefaultIcon: !0,
                                      step: 1,
                                      style: { height: `100%`, width: `100%` },
                                      text: `Button`,
                                      type: `subtract`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                h(P, {
                                  children: h(N, {
                                    className: `framer-458kc1-container`,
                                    "data-code-component-plugin-id": `63896a`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: M,
                                    layoutId: `h92O_8qJu-container`,
                                    nodeId: `h92O_8qJu`,
                                    rendersWithMotion: !0,
                                    scopeId: `ygU5oLuEP`,
                                    children: h(Oo, {
                                      buttonType: `preset`,
                                      customButton: [],
                                      customButtonSize: { height: `default`, width: `default` },
                                      disabled: !1,
                                      height: `100%`,
                                      id: `h92O_8qJu`,
                                      inputStyle: {
                                        backgroundColor: `rgb(243, 243, 243)`,
                                        border: {
                                          borderColor: `rgba(0, 0, 0, 0.2)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `10px`,
                                        focusOutlineColor: `rgb(217, 217, 217)`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        padding: `8px 12px 8px 12px`,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      inputType: `number`,
                                      layoutId: `h92O_8qJu`,
                                      leftIcon: [],
                                      lineId: y,
                                      needHelp: { info: `info` },
                                      placeholder: ``,
                                      presetButtonStyle: {
                                        alignItems: `center`,
                                        backgroundColor: `rgb(243, 243, 243)`,
                                        border: {
                                          borderColor: `rgb(117, 117, 117)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `10px`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        gap: 8,
                                        hover: {
                                          backgroundColor: `rgb(230, 230, 230)`,
                                          border: {
                                            borderColor: `rgb(117, 117, 117)`,
                                            borderStyle: `solid`,
                                            borderWidth: 0,
                                          },
                                          shadow: ``,
                                          textColor: `rgb(17, 17, 17)`,
                                        },
                                        justifyContent: `center`,
                                        padding: `8px 16px 8px 16px`,
                                        shadow: ``,
                                        tapScale: 0.98,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      quantity: x,
                                      rightIcon: [],
                                      showDefaultIcon: !0,
                                      step: 1,
                                      style: { height: `100%`, width: `100%` },
                                      text: `Button`,
                                      type: `input`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                h(P, {
                                  children: h(N, {
                                    className: `framer-riowtc-container`,
                                    "data-code-component-plugin-id": `63896a`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: M,
                                    layoutId: `Ferfkr6_Y-container`,
                                    nodeId: `Ferfkr6_Y`,
                                    rendersWithMotion: !0,
                                    scopeId: `ygU5oLuEP`,
                                    children: h(Oo, {
                                      buttonType: `preset`,
                                      customButton: [],
                                      customButtonSize: { height: `default`, width: `default` },
                                      disabled: !1,
                                      height: `100%`,
                                      id: `Ferfkr6_Y`,
                                      inputStyle: {
                                        backgroundColor: `rgb(243, 243, 243)`,
                                        border: {
                                          borderColor: `rgba(0, 0, 0, 0.2)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `10px`,
                                        focusOutlineColor: `rgb(217, 217, 217)`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        padding: `8px 12px 8px 12px`,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      inputType: `text`,
                                      layoutId: `Ferfkr6_Y`,
                                      leftIcon: [],
                                      lineId: y,
                                      needHelp: { info: `info` },
                                      placeholder: ``,
                                      presetButtonStyle: {
                                        alignItems: `center`,
                                        backgroundColor: `rgb(243, 243, 243)`,
                                        border: {
                                          borderColor: `rgb(117, 117, 117)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `10px`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        gap: 8,
                                        hover: {
                                          backgroundColor: `rgb(230, 230, 230)`,
                                          border: {
                                            borderColor: `rgb(117, 117, 117)`,
                                            borderStyle: `solid`,
                                            borderWidth: 0,
                                          },
                                          shadow: ``,
                                          textColor: `rgb(17, 17, 17)`,
                                        },
                                        justifyContent: `center`,
                                        padding: `8px 16px 8px 16px`,
                                        shadow: ``,
                                        tapScale: 0.98,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      quantity: x,
                                      rightIcon: [],
                                      showDefaultIcon: !0,
                                      step: 1,
                                      style: { height: `100%`, width: `100%` },
                                      text: `Button`,
                                      type: `add`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        b(w.div, {
                          className: `framer-137c4id`,
                          layoutDependency: M,
                          layoutId: `vloMQVMmj`,
                          children: [
                            h(P, {
                              children: h(N, {
                                className: `framer-1feopv6-container`,
                                "data-code-component-plugin-id": `63896a`,
                                isAuthoredByUser: !0,
                                layoutDependency: M,
                                layoutId: `Uu9IdLW7y-container`,
                                nodeId: `Uu9IdLW7y`,
                                rendersWithMotion: !0,
                                scopeId: `ygU5oLuEP`,
                                children: h(co, {
                                  color: `rgb(17, 17, 17)`,
                                  currencyCode: ee,
                                  currencyFormat: {
                                    decimals: `auto`,
                                    formatted: !0,
                                    locale: ``,
                                    location: `after`,
                                    style: `symbol`,
                                  },
                                  decoration: `none`,
                                  deliveryFrequency: ne,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `14px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  height: `100%`,
                                  id: `Uu9IdLW7y`,
                                  layoutId: `Uu9IdLW7y`,
                                  needHelp: { info: `info` },
                                  subtotal: v,
                                  tag: `p`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            h(w.div, {
                              className: `framer-1g85iwm`,
                              layoutDependency: M,
                              layoutId: `eU226tlw0`,
                              style: {
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                              children: h(P, {
                                children: h(N, {
                                  className: `framer-q3v8mg-container`,
                                  "data-code-component-plugin-id": `63896a`,
                                  isAuthoredByUser: !0,
                                  layoutDependency: M,
                                  layoutId: `VeHB0riM9-container`,
                                  nodeId: `VeHB0riM9`,
                                  rendersWithMotion: !0,
                                  scopeId: `ygU5oLuEP`,
                                  children: h(jo, {
                                    buttonType: `preset`,
                                    customButton: [],
                                    customButtonSize: { height: `default`, width: `default` },
                                    height: `100%`,
                                    id: `VeHB0riM9`,
                                    layoutId: `VeHB0riM9`,
                                    leftIcon: [],
                                    lineId: y,
                                    needHelp: { info: `info` },
                                    presetButtonStyle: {
                                      alignItems: `center`,
                                      backgroundColor: `rgb(243, 243, 243)`,
                                      border: {
                                        borderColor: `rgb(117, 117, 117)`,
                                        borderStyle: `solid`,
                                        borderWidth: 0,
                                      },
                                      borderRadius: `10px`,
                                      font: {
                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                        fontSize: `16px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      gap: 8,
                                      hover: {
                                        backgroundColor: `rgb(230, 230, 230)`,
                                        border: {
                                          borderColor: `rgb(117, 117, 117)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        shadow: ``,
                                        textColor: `rgb(17, 17, 17)`,
                                      },
                                      justifyContent: `center`,
                                      padding: `8px 16px 8px 16px`,
                                      shadow: ``,
                                      tapScale: 0.98,
                                      textColor: `rgb(17, 17, 17)`,
                                    },
                                    rightIcon: [],
                                    showDefaultIcon: !0,
                                    style: { height: `100%`, width: `100%` },
                                    text: ``,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          ],
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
          `.framer-D9dqQ.framer-198dgm9, .framer-D9dqQ .framer-198dgm9 { display: block; }`,
          `.framer-D9dqQ.framer-126dg35 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 400px; }`,
          `.framer-D9dqQ .framer-1hri0x1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; padding: 0px; position: relative; width: 100px; }`,
          `.framer-D9dqQ .framer-hs8dza-container { flex: none; height: 100px; position: relative; width: 100px; }`,
          `.framer-D9dqQ .framer-1wi34rd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
          `.framer-D9dqQ .framer-19i8dxk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-D9dqQ .framer-ouiva8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-D9dqQ .framer-1g0nf3z, .framer-D9dqQ .framer-nu67j9, .framer-D9dqQ .framer-1k58xs { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-D9dqQ .framer-1kyejha { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 1px; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-D9dqQ .framer-yehgrq-container, .framer-D9dqQ .framer-riowtc-container { flex: none; height: 36px; position: relative; width: 36px; }`,
          `.framer-D9dqQ .framer-458kc1-container { flex: none; height: 36px; position: relative; width: 60px; }`,
          `.framer-D9dqQ .framer-137c4id { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-D9dqQ .framer-1feopv6-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-D9dqQ .framer-1g85iwm { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 36px); justify-content: center; padding: 0px; position: relative; width: 36px; }`,
          `.framer-D9dqQ .framer-q3v8mg-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        ],
        `framer-D9dqQ`
      )),
      (Go = Wo),
      (Wo.displayName = `Cart List Item`),
      (Wo.defaultProps = { height: 100, width: 400 }),
      k(Wo, {
        VO32SQDEf: {
          defaultValue: `https://framerusercontent.com/images/sFKjyv5OwGE92YZ3xS9WwreFGQ.webp`,
          title: `Image Url`,
          type: L.String,
        },
        onVO32SQDEfChange: { changes: `VO32SQDEf`, type: L.ChangeHandler },
        hBopjUGQO: { defaultValue: `Product Alt`, title: `Image Alt`, type: L.String },
        onhBopjUGQOChange: { changes: `hBopjUGQO`, type: L.ChangeHandler },
        ePm014j4d: {
          defaultValue: `Product Title`,
          placeholder: ``,
          title: `Product Title`,
          type: L.String,
        },
        onePm014j4dChange: { changes: `ePm014j4d`, type: L.ChangeHandler },
        mkKIwAzfX: {
          defaultValue: `Product Variant Title`,
          title: `Product Variant Title`,
          type: L.String,
        },
        onmkKIwAzfXChange: { changes: `mkKIwAzfX`, type: L.ChangeHandler },
        KDGMZhb_7: {
          defaultValue: 99,
          displayStepper: !0,
          min: 0,
          title: `Product Subtotal`,
          type: L.Number,
        },
        onKDGMZhb_7Change: { changes: `KDGMZhb_7`, type: L.ChangeHandler },
        T02EN5Ncd: { defaultValue: `USD`, title: `Product Currency`, type: L.String },
        onT02EN5NcdChange: { changes: `T02EN5Ncd`, type: L.ChangeHandler },
        keb4Sytxv: { defaultValue: `123456789`, title: `Line Id`, type: L.String },
        onkeb4SytxvChange: { changes: `keb4Sytxv`, type: L.ChangeHandler },
        Bymbo9djN: { defaultValue: 1, displayStepper: !0, title: `Quantity`, type: L.Number },
        onBymbo9djNChange: { changes: `Bymbo9djN`, type: L.ChangeHandler },
        ISMHKMS3u: {
          defaultValue: `Subscription Plan Name`,
          title: `Selling Plan Name`,
          type: L.String,
        },
        onISMHKMS3uChange: { changes: `ISMHKMS3u`, type: L.ChangeHandler },
        oeLTCl7xr: { defaultValue: ``, title: `Delivery Frequency`, type: L.String },
        onoeLTCl7xrChange: { changes: `oeLTCl7xr`, type: L.ChangeHandler },
      }),
      A(
        Wo,
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
            ],
          },
          ...No,
          ...Po,
          ...Fo,
          ...Io,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss = e(() => {
    (x(),
      j(),
      D(),
      n(),
      sa(),
      di(),
      Za(),
      no(),
      Ko(),
      (qo = z(li)),
      (Jo = z(oa)),
      (Yo = z(Go)),
      (Xo = z(Ya)),
      (Zo = z(to)),
      (Qo = `framer-fkYbi`),
      ($o = { TmPgisyH_: `framer-v-1rljoo8` }),
      (es = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ts = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (ns = w.create(c)),
      (rs = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (is = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (as = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          le();
          let { style: l, className: u, layoutId: d, variant: f, ...p } = rs(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: ee,
              isLoading: y,
              setGestureState: x,
              setVariant: S,
              variants: ne,
            } = ue({ defaultVariant: `TmPgisyH_`, ref: i, variant: f, variantClassNames: $o }),
            C = is(e, ne),
            T = F(Qo);
          return h(re, {
            id: d ?? a,
            children: h(ns, {
              animate: ne,
              initial: !1,
              children: h(ts, {
                value: es,
                children: h(w.div, {
                  ...p,
                  ...v,
                  className: F(T, `framer-1rljoo8`, u, g),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: C,
                  layoutId: `TmPgisyH_`,
                  ref: i,
                  style: { backgroundColor: `rgb(255, 255, 255)`, ...l },
                  children: b(w.div, {
                    className: `framer-vzet6i`,
                    "data-framer-name": `Cart Wrapper`,
                    layoutDependency: C,
                    layoutId: `dw84xxAkM`,
                    children: [
                      b(w.div, {
                        className: `framer-1w975ri`,
                        "data-framer-name": `Header`,
                        layoutDependency: C,
                        layoutId: `x0Zz9y9PS`,
                        children: [
                          b(w.div, {
                            className: `framer-12sti2q`,
                            "data-framer-name": `Your Cart`,
                            layoutDependency: C,
                            layoutId: `e3OBe0sdi`,
                            children: [
                              h(O, {
                                __fromCanvasComponent: !0,
                                children: h(c, { children: h(w.p, { children: `Your cart` }) }),
                                className: `framer-1x55xiu`,
                                fonts: [`Inter`],
                                layoutDependency: C,
                                layoutId: `qPzZDZYgl`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(w.div, {
                                className: `framer-qnuzl3`,
                                layoutDependency: C,
                                layoutId: `NyoqFvE_9`,
                                style: {
                                  backgroundColor: `var(--token-f7659d0e-53da-486e-a3d2-0f9070ee36d9, rgb(232, 232, 232))`,
                                  borderBottomLeftRadius: 999,
                                  borderBottomRightRadius: 999,
                                  borderTopLeftRadius: 999,
                                  borderTopRightRadius: 999,
                                },
                                children: h(P, {
                                  children: h(N, {
                                    className: `framer-qys8ag-container`,
                                    "data-code-component-plugin-id": `63896a`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: C,
                                    layoutId: `D0Q5YSw5A-container`,
                                    nodeId: `D0Q5YSw5A`,
                                    rendersWithMotion: !0,
                                    scopeId: `SasLn4x51`,
                                    children: h(li, {
                                      color: `rgb(17, 17, 17)`,
                                      currencyFormat: {
                                        decimals: `auto`,
                                        formatted: !0,
                                        locale: ``,
                                        location: `after`,
                                        style: `symbol`,
                                      },
                                      font: {
                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                        fontSize: `14px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      height: `100%`,
                                      id: `D0Q5YSw5A`,
                                      layoutId: `D0Q5YSw5A`,
                                      needHelp: { info: `info` },
                                      tag: `p`,
                                      type: `itemCount`,
                                      whenZero: `show`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          h(P, {
                            children: h(N, {
                              className: `framer-5n9p16-container`,
                              "data-code-component-plugin-id": `63896a`,
                              isAuthoredByUser: !0,
                              layoutDependency: C,
                              layoutId: `NGIblHqId-container`,
                              nodeId: `NGIblHqId`,
                              rendersWithMotion: !0,
                              scopeId: `SasLn4x51`,
                              children: h(oa, {
                                buttonType: `preset`,
                                customButton: [],
                                customButtonSize: { height: `default`, width: `default` },
                                height: `100%`,
                                id: `NGIblHqId`,
                                layoutId: `NGIblHqId`,
                                leftIcon: [],
                                needHelp: { info: `info` },
                                presetButtonStyle: {
                                  alignItems: `center`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  border: {
                                    borderColor: `rgba(0, 0, 0, 0.1)`,
                                    borderStyle: `solid`,
                                    borderWidth: 0,
                                  },
                                  borderRadius: `4px`,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  gap: 8,
                                  hover: {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    border: {
                                      borderColor: `rgb(117, 117, 117)`,
                                      borderStyle: `solid`,
                                      borderWidth: 0,
                                    },
                                    shadow: ``,
                                    textColor: `rgb(0, 0, 0)`,
                                  },
                                  justifyContent: `center`,
                                  padding: `0px`,
                                  shadow: ``,
                                  tapScale: 0.98,
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                rightIcon: [],
                                style: { height: `100%`, width: `100%` },
                                text: `Button`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      h(w.div, {
                        className: `framer-19as16w`,
                        "data-framer-name": `Product List`,
                        layoutDependency: C,
                        layoutId: `YtvqoGkk3`,
                        children: h(P, {
                          children: h(N, {
                            className: `framer-g9mhpv-container`,
                            "data-code-component-plugin-id": `63896a`,
                            isAuthoredByUser: !0,
                            layoutDependency: C,
                            layoutId: `tTIRqmWQA-container`,
                            nodeId: `tTIRqmWQA`,
                            rendersWithMotion: !0,
                            scopeId: `SasLn4x51`,
                            children: h(Ya, {
                              cartListItem: [
                                h(P, {
                                  height: 95,
                                  width: `400px`,
                                  children: h(N, {
                                    className: `framer-yhm1bw-container`,
                                    inComponentSlot: !0,
                                    layoutDependency: C,
                                    layoutId: `aj31emPGn-container`,
                                    nodeId: `aj31emPGn`,
                                    rendersWithMotion: !0,
                                    scopeId: `SasLn4x51`,
                                    children: h(Go, {
                                      Bymbo9djN: 1,
                                      ePm014j4d: `Product Title`,
                                      hBopjUGQO: `Product Alt`,
                                      height: `100%`,
                                      id: `aj31emPGn`,
                                      KDGMZhb_7: 99,
                                      keb4Sytxv: `123456789`,
                                      layoutId: `aj31emPGn`,
                                      mkKIwAzfX: `Product Variant Title`,
                                      style: { height: `100%`, width: `100%` },
                                      T02EN5Ncd: `USD`,
                                      VO32SQDEf: `https://framerusercontent.com/images/Y5OqHDa8HlUSSW24MhzRncVYus.png?scale-down-to=1024&width=3097&height=3908`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                              divider: { color: `rgb(217, 217, 217)`, height: 1, show: !0 },
                              emptyState: [
                                h(w.div, {
                                  className: `framer-17imd1z`,
                                  "data-framer-name": `Empty cart`,
                                  layoutDependency: C,
                                  layoutId: `kyeLb1MrI`,
                                  style: { backgroundColor: `rgb(255, 255, 255)` },
                                  children: h(O, {
                                    __fromCanvasComponent: !0,
                                    children: h(c, {
                                      children: h(w.p, { children: `Your cart is empty` }),
                                    }),
                                    className: `framer-sywclg`,
                                    fonts: [`Inter`],
                                    layoutDependency: C,
                                    layoutId: `CxNeOuOAI`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                              gap: 20,
                              height: `100%`,
                              id: `tTIRqmWQA`,
                              layoutId: `tTIRqmWQA`,
                              needHelp: { info: `info` },
                              scrollbar: !1,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      b(w.div, {
                        className: `framer-1tblf0j`,
                        "data-framer-name": `Footer`,
                        layoutDependency: C,
                        layoutId: `AL56shExe`,
                        children: [
                          b(w.div, {
                            className: `framer-vgib3k`,
                            layoutDependency: C,
                            layoutId: `HPCe8PLvT`,
                            children: [
                              h(O, {
                                __fromCanvasComponent: !0,
                                children: h(c, { children: h(w.p, { children: `Subtotal` }) }),
                                className: `framer-1rj22uu`,
                                fonts: [`Inter`],
                                layoutDependency: C,
                                layoutId: `q16JwazT_`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(P, {
                                children: h(N, {
                                  className: `framer-1bbwf2u-container`,
                                  "data-code-component-plugin-id": `63896a`,
                                  isAuthoredByUser: !0,
                                  layoutDependency: C,
                                  layoutId: `EfEpqh5o7-container`,
                                  nodeId: `EfEpqh5o7`,
                                  rendersWithMotion: !0,
                                  scopeId: `SasLn4x51`,
                                  children: h(li, {
                                    color: `rgb(17, 17, 17)`,
                                    currencyFormat: {
                                      decimals: `auto`,
                                      formatted: !0,
                                      locale: ``,
                                      location: `after`,
                                      style: `symbol`,
                                    },
                                    font: {
                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 600,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    height: `100%`,
                                    id: `EfEpqh5o7`,
                                    layoutId: `EfEpqh5o7`,
                                    needHelp: { info: `info` },
                                    tag: `p`,
                                    type: `subtotal`,
                                    whenZero: `show`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          h(P, {
                            children: h(N, {
                              className: `framer-fnsnj2-container`,
                              "data-code-component-plugin-id": `63896a`,
                              isAuthoredByUser: !0,
                              layoutDependency: C,
                              layoutId: `dy8AhZeqH-container`,
                              nodeId: `dy8AhZeqH`,
                              rendersWithMotion: !0,
                              scopeId: `SasLn4x51`,
                              children: h(to, {
                                buttonType: `preset`,
                                customButton: [],
                                customButtonSize: { height: `default`, width: `default` },
                                disabled: !1,
                                height: `100%`,
                                id: `dy8AhZeqH`,
                                layoutId: `dy8AhZeqH`,
                                leftIcon: [],
                                needHelp: { info: `info` },
                                newTab: !0,
                                presetButtonStyle: {
                                  alignItems: `center`,
                                  backgroundColor: `rgb(17, 17, 17)`,
                                  border: {
                                    borderColor: `rgb(117, 117, 117)`,
                                    borderStyle: `solid`,
                                    borderWidth: 0,
                                  },
                                  borderRadius: `10px`,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  gap: 8,
                                  hover: {
                                    backgroundColor: `rgb(42, 42, 42)`,
                                    border: {
                                      borderColor: `rgb(117, 117, 117)`,
                                      borderStyle: `solid`,
                                      borderWidth: 0,
                                    },
                                    shadow: ``,
                                    textColor: `rgb(230, 230, 230)`,
                                  },
                                  justifyContent: `center`,
                                  padding: `8px 16px 8px 16px`,
                                  shadow: ``,
                                  tapScale: 0.995,
                                  textColor: `rgb(243, 243, 243)`,
                                },
                                rightIcon: [],
                                style: { height: `100%`, width: `100%` },
                                text: `Checkout`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fkYbi.framer-18081j3, .framer-fkYbi .framer-18081j3 { display: block; }`,
          `.framer-fkYbi.framer-1rljoo8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 800px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 500px; }`,
          `.framer-fkYbi .framer-vzet6i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fkYbi .framer-1w975ri { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fkYbi .framer-12sti2q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-fkYbi .framer-1x55xiu, .framer-fkYbi .framer-sywclg, .framer-fkYbi .framer-1rj22uu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-fkYbi .framer-qnuzl3 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 24px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 24px; }`,
          `.framer-fkYbi .framer-qys8ag-container, .framer-fkYbi .framer-1bbwf2u-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-fkYbi .framer-5n9p16-container { flex: none; height: 26px; position: relative; width: 27px; }`,
          `.framer-fkYbi .framer-19as16w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fkYbi .framer-g9mhpv-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-fkYbi .framer-yhm1bw-container { height: 95px; position: relative; width: 400px; }`,
          `.framer-fkYbi .framer-17imd1z { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 180px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 389px; }`,
          `.framer-fkYbi .framer-1tblf0j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fkYbi .framer-vgib3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fkYbi .framer-fnsnj2-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ],
        `framer-fkYbi`
      )),
      (os = as),
      (as.displayName = `Cart Layer`),
      (as.defaultProps = { height: 800, width: 500 }),
      A(
        as,
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
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...qo,
          ...Jo,
          ...Yo,
          ...Xo,
          ...Zo,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs = e(() => {
    (x(),
      j(),
      D(),
      n(),
      di(),
      na(),
      ss(),
      (cs = z(os)),
      (ls = z($i)),
      (us = z(li)),
      (ds = `framer-Tskxb`),
      (fs = { iQ0R2I58K: `framer-v-1qzphr1` }),
      (ps = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ms = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (hs = w.create(c)),
      (gs = ({ cursor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        tvxvAn2xE: e ?? i.tvxvAn2xE,
      })),
      (_s = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (vs = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          le();
          let { style: c, className: l, layoutId: u, variant: d, tvxvAn2xE: f, ...p } = gs(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: ee,
              isLoading: y,
              setGestureState: x,
              setVariant: S,
              variants: ne,
            } = ue({ defaultVariant: `iQ0R2I58K`, ref: i, variant: d, variantClassNames: fs }),
            C = _s(e, ne),
            T = F(ds);
          return h(re, {
            id: u ?? a,
            children: h(hs, {
              animate: ne,
              initial: !1,
              children: h(ms, {
                value: ps,
                children: b(w.div, {
                  ...p,
                  ...v,
                  className: F(T, `framer-1qzphr1`, l, g),
                  "data-framer-name": `Cart Button`,
                  layoutDependency: C,
                  layoutId: `iQ0R2I58K`,
                  ref: i,
                  style: { ...c },
                  children: [
                    h(P, {
                      children: h(N, {
                        className: `framer-9yy6ck-container`,
                        "data-code-component-plugin-id": `63896a`,
                        isAuthoredByUser: !0,
                        layoutDependency: C,
                        layoutId: `Ki1f0gaCJ-container`,
                        nodeId: `Ki1f0gaCJ`,
                        rendersWithMotion: !0,
                        scopeId: `r8gMUwRKw`,
                        children: h($i, {
                          backdropOverlay: {
                            backgroundColor: `rgba(0, 0, 0, 0.5)`,
                            blur: 0,
                            transition: { bounce: 0, delay: 0, duration: 0.3, type: `spring` },
                          },
                          buttonType: `preset`,
                          cartLayer: [
                            h(P, {
                              height: 800,
                              width: `500px`,
                              children: h(N, {
                                className: `framer-s82mgk-container`,
                                "data-framer-cursor": f,
                                inComponentSlot: !0,
                                layoutDependency: C,
                                layoutId: `XeiJ_Iumd-container`,
                                nodeId: `XeiJ_Iumd`,
                                rendersWithMotion: !0,
                                scopeId: `r8gMUwRKw`,
                                children: h(os, {
                                  height: `100%`,
                                  id: `XeiJ_Iumd`,
                                  layoutId: `XeiJ_Iumd`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          cartLayerConfig: {
                            cartLayerAnimation: {
                              offsetX: 100,
                              offsetY: 0,
                              opacity: 0,
                              rotate: 0,
                              scale: 1,
                              transition: { bounce: 0, delay: 0, duration: 0.3, type: `spring` },
                            },
                            cartLayerHeight: `viewport`,
                            cartLayerPosition: { offsetX: 0, offsetY: 0, position: `top right` },
                            shadow: `-2px 0px 10px undefinedpx rgba(0, 0, 0, 0.1)`,
                          },
                          customButton: [],
                          customButtonSize: { height: `default`, width: `default` },
                          height: `100%`,
                          id: `Ki1f0gaCJ`,
                          layoutId: `Ki1f0gaCJ`,
                          leftIcon: [],
                          needHelp: { info: `info` },
                          presetButtonStyle: {
                            alignItems: `center`,
                            backgroundColor: `rgb(17, 17, 17)`,
                            border: {
                              borderColor: `rgb(117, 117, 117)`,
                              borderStyle: `solid`,
                              borderWidth: 0,
                            },
                            borderRadius: `10px`,
                            font: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontSize: `16px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            gap: 8,
                            hover: {
                              backgroundColor: `rgb(42, 42, 42)`,
                              border: {
                                borderColor: `rgb(117, 117, 117)`,
                                borderStyle: `solid`,
                                borderWidth: 0,
                              },
                              shadow: ``,
                              textColor: `rgb(230, 230, 230)`,
                            },
                            justifyContent: `center`,
                            padding: `8px 16px 8px 16px`,
                            shadow: ``,
                            tapScale: 0.98,
                            textColor: `rgb(243, 243, 243)`,
                          },
                          rightIcon: [],
                          style: { height: `100%`, width: `100%` },
                          text: ``,
                          width: `100%`,
                        }),
                      }),
                    }),
                    h(w.div, {
                      className: `framer-itzqhd`,
                      "data-framer-name": `Number of Cart Items`,
                      layoutDependency: C,
                      layoutId: `JRA2jV5Hn`,
                      style: {
                        backgroundColor: `var(--token-f7659d0e-53da-486e-a3d2-0f9070ee36d9, rgb(232, 232, 232))`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: h(P, {
                        children: h(N, {
                          className: `framer-w6ezzu-container`,
                          "data-code-component-plugin-id": `63896a`,
                          isAuthoredByUser: !0,
                          layoutDependency: C,
                          layoutId: `WvD2jZG_m-container`,
                          nodeId: `WvD2jZG_m`,
                          rendersWithMotion: !0,
                          scopeId: `r8gMUwRKw`,
                          children: h(li, {
                            color: `rgb(17, 17, 17)`,
                            currencyFormat: {
                              decimals: `auto`,
                              formatted: !0,
                              locale: ``,
                              location: `after`,
                              style: `symbol`,
                            },
                            font: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontSize: `12px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            height: `100%`,
                            id: `WvD2jZG_m`,
                            layoutId: `WvD2jZG_m`,
                            loaderStyle: {
                              backgroundColor: `rgb(217, 217, 217)`,
                              height: 16,
                              previewLoader: !1,
                              showLoader: !0,
                              width: 16,
                            },
                            needHelp: { info: `info` },
                            tag: `p`,
                            type: `itemCount`,
                            whenZero: `show`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Tskxb.framer-zyu551, .framer-Tskxb .framer-zyu551 { display: block; }`,
          `.framer-Tskxb.framer-1qzphr1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Tskxb .framer-9yy6ck-container { flex: none; height: 40px; position: relative; width: 40px; }`,
          `.framer-Tskxb .framer-s82mgk-container { height: 800px; position: relative; width: 500px; }`,
          `.framer-Tskxb .framer-itzqhd { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 16px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: -4px; top: -4px; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-Tskxb .framer-w6ezzu-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-Tskxb`
      )),
      (ys = vs),
      (vs.displayName = `Cart 2.0`),
      (vs.defaultProps = { height: 40, width: 40 }),
      k(vs, { tvxvAn2xE: { title: `Cursor`, type: L.CustomCursor } }),
      A(
        vs,
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
            ],
          },
          ...cs,
          ...ls,
          ...us,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function xs(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps = e(() => {
    (x(),
      j(),
      D(),
      n(),
      (Ss = {
        iZjZjfVUH: { hover: !0 },
        mnYA5Wko6: { hover: !0 },
        MSrT0jON5: { hover: !0 },
        oowd0pyFV: { hover: !0 },
      }),
      (Cs = [
        `oowd0pyFV`,
        `MSrT0jON5`,
        `gyz_6x0I5`,
        `bqwfM3WOL`,
        `iZjZjfVUH`,
        `jP21ymMfO`,
        `vheLQJGdW`,
        `jFxo2dhgg`,
        `mnYA5Wko6`,
        `wjmkYmDz8`,
      ]),
      (ws = `framer-fhSEk`),
      (Ts = {
        bqwfM3WOL: `framer-v-84gt3j`,
        gyz_6x0I5: `framer-v-1j7u8cl`,
        iZjZjfVUH: `framer-v-1xj9ufb`,
        jFxo2dhgg: `framer-v-dzqwlr`,
        jP21ymMfO: `framer-v-1buecju`,
        mnYA5Wko6: `framer-v-1omxb0m`,
        MSrT0jON5: `framer-v-1trojvv`,
        oowd0pyFV: `framer-v-1i6kam5`,
        vheLQJGdW: `framer-v-18xqf5f`,
        wjmkYmDz8: `framer-v-b7acv9`,
      }),
      (Es = { damping: 48, delay: 0.1, mass: 1, stiffness: 600, type: `spring` }),
      (Ds = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (Os = {
        "Action Btn Active": `bqwfM3WOL`,
        "Action btn mobile": `vheLQJGdW`,
        "Action Btn": `MSrT0jON5`,
        "Nav bar link": `oowd0pyFV`,
        "Nav link active": `gyz_6x0I5`,
        "Nav link footer": `mnYA5Wko6`,
        "Nav link mobile": `jP21ymMfO`,
        "Social media mobile": `jFxo2dhgg`,
        "Social Media": `iZjZjfVUH`,
        "Variant 10": `wjmkYmDz8`,
      }),
      (ks = w.create(c)),
      (As = ({
        btnText: e,
        height: t,
        hoverUnderline: n,
        id: r,
        link: i,
        newTab: a,
        onepage: o,
        smoothScroll: s,
        textColor: c,
        width: l,
        ...u
      }) => ({
        ...u,
        a8QWyBkHZ: a ?? u.a8QWyBkHZ,
        CVxHgh5W7: c ?? u.CVxHgh5W7 ?? `rgb(255, 255, 255)`,
        Fs4spq_6s: e ?? u.Fs4spq_6s ?? `FAQ`,
        iN5LLRXMT: n ?? u.iN5LLRXMT ?? `rgb(221, 221, 221)`,
        nNTyAbB0u: s ?? u.nNTyAbB0u ?? !0,
        variant: Os[u.variant] ?? u.variant ?? `oowd0pyFV`,
        wFLg6dJD3: o ?? u.wFLg6dJD3,
        ZmpACwfdE: i ?? u.ZmpACwfdE,
      })),
      (js = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ms = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          le();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              Fs4spq_6s: p,
              ZmpACwfdE: m,
              a8QWyBkHZ: g,
              nNTyAbB0u: _,
              wFLg6dJD3: v,
              CVxHgh5W7: ee,
              iN5LLRXMT: y,
              ...x
            } = As(e),
            {
              baseVariant: S,
              classNames: ne,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ie,
              setVariant: ae,
              variants: k,
            } = ue({
              cycleOrder: Cs,
              defaultVariant: `oowd0pyFV`,
              enabledGestures: Ss,
              ref: i,
              variant: f,
              variantClassNames: Ts,
            }),
            A = js(e, k),
            { activeVariantCallback: oe, delay: j } = pe(S),
            M = oe(async (...e) => {
              if ((ie({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            se = F(ws),
            ce = () => !!(E === `iZjZjfVUH-hover` || [`iZjZjfVUH`, `jFxo2dhgg`].includes(S));
          return h(re, {
            id: d ?? a,
            children: h(ks, {
              animate: k,
              initial: !1,
              children: h(Ds, {
                value: Es,
                children: h(I, {
                  href: m,
                  motionChild: !0,
                  nodeId: `oowd0pyFV`,
                  openInNewTab: g,
                  scopeId: `TjITgzkDd`,
                  smoothScroll: _,
                  children: b(w.a, {
                    ...x,
                    ...T,
                    className: `${F(se, `framer-1i6kam5`, u, ne)} framer-10dayk9`,
                    "data-framer-name": `Nav bar link`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `oowd0pyFV`,
                    onTap: M,
                    ref: i,
                    style: { ...l },
                    ...xs(
                      {
                        "iZjZjfVUH-hover": { "data-framer-name": void 0 },
                        "mnYA5Wko6-hover": { "data-framer-name": void 0 },
                        "MSrT0jON5-hover": { "data-framer-name": void 0 },
                        "oowd0pyFV-hover": { "data-framer-name": void 0 },
                        bqwfM3WOL: { "data-framer-name": `Action Btn Active` },
                        gyz_6x0I5: { "data-framer-name": `Nav link active` },
                        iZjZjfVUH: { "data-framer-name": `Social Media` },
                        jFxo2dhgg: { "data-framer-name": `Social media mobile` },
                        jP21ymMfO: { "data-framer-name": `Nav link mobile` },
                        mnYA5Wko6: { "data-framer-name": `Nav link footer` },
                        MSrT0jON5: { "data-framer-name": `Action Btn` },
                        vheLQJGdW: { "data-framer-name": `Action btn mobile` },
                        wjmkYmDz8: { "data-framer-name": `Variant 10` },
                      },
                      S,
                      E
                    ),
                    children: [
                      h(O, {
                        __fromCanvasComponent: !0,
                        children: h(c, {
                          children: h(w.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                              "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                              "--framer-font-size": `24px`,
                              "--framer-font-weight": `700`,
                              "--framer-line-height": `30px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-CVxHgh5W7-TjITgzkDd))`,
                            },
                            children: `FAQ`,
                          }),
                        }),
                        className: `framer-1voptz6`,
                        "data-framer-name": `ABOUT`,
                        fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                        layoutDependency: A,
                        layoutId: `iivN0DZhn`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-CVxHgh5W7-TjITgzkDd)`,
                          "--framer-paragraph-spacing": `0px`,
                          "--variable-reference-CVxHgh5W7-TjITgzkDd": ee,
                        },
                        text: p,
                        variants: {
                          "mnYA5Wko6-hover": {
                            "--extracted-r6o4lv": `var(--token-95f8c111-603c-4edf-b7fc-7b49c6badcd9, rgb(255, 99, 22))`,
                          },
                          "MSrT0jON5-hover": { "--extracted-r6o4lv": `rgb(255, 99, 22)` },
                          bqwfM3WOL: { "--extracted-r6o4lv": `rgb(255, 99, 22)` },
                          MSrT0jON5: {
                            "--extracted-r6o4lv": `var(--token-95f8c111-603c-4edf-b7fc-7b49c6badcd9, rgb(255, 99, 22))`,
                          },
                          vheLQJGdW: { "--extracted-r6o4lv": `rgb(255, 99, 22)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...xs(
                          {
                            "mnYA5Wko6-hover": {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                    "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `30px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-95f8c111-603c-4edf-b7fc-7b49c6badcd9, rgb(255, 99, 22)))`,
                                  },
                                  children: `FAQ`,
                                }),
                              }),
                            },
                            "MSrT0jON5-hover": {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                                    "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                                    "--framer-font-size": `30px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-line-height": `33.26666666666667px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 99, 22))`,
                                  },
                                  children: `TRY ZOOOOM`,
                                }),
                              }),
                              text: void 0,
                            },
                            bqwfM3WOL: {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                                    "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                                    "--framer-font-size": `30px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-line-height": `30px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 99, 22))`,
                                  },
                                  children: `TRY ZOOOOM`,
                                }),
                              }),
                              fonts: [`CUSTOMV2;Rodger Test Semibold`],
                              text: void 0,
                            },
                            MSrT0jON5: {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                                    "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-line-height": `30px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-95f8c111-603c-4edf-b7fc-7b49c6badcd9, rgb(255, 99, 22)))`,
                                  },
                                  children: `TRY ZOOOOM`,
                                }),
                              }),
                              fonts: [`CUSTOMV2;Rodger Test Semibold`],
                              text: void 0,
                            },
                            vheLQJGdW: {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                                    "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `24px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-line-height": `30px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 99, 22))`,
                                  },
                                  children: `TRY ZOOOOM`,
                                }),
                              }),
                              fonts: [`CUSTOMV2;Rodger Test Semibold`],
                              text: void 0,
                            },
                            wjmkYmDz8: {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                    "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `30px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-CVxHgh5W7-TjITgzkDd))`,
                                  },
                                  children: `FAQ`,
                                }),
                              }),
                            },
                          },
                          S,
                          E
                        ),
                      }),
                      h(w.div, {
                        className: `framer-uqsv4v`,
                        layoutDependency: A,
                        layoutId: `Vqy43wFYz`,
                        style: {
                          backgroundColor: y,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                          opacity: 0,
                        },
                        variants: {
                          "MSrT0jON5-hover": {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          "oowd0pyFV-hover": {
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                            opacity: 1,
                          },
                          bqwfM3WOL: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          gyz_6x0I5: {
                            backgroundColor: `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                            opacity: 1,
                          },
                          iZjZjfVUH: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          jFxo2dhgg: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          jP21ymMfO: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          mnYA5Wko6: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          vheLQJGdW: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          wjmkYmDz8: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                        },
                      }),
                      ce() &&
                        h(w.div, {
                          className: `framer-au4f7w`,
                          "data-framer-name": `Icon`,
                          layoutDependency: A,
                          layoutId: `b_I5DfZc6`,
                          children: h(R, {
                            className: `framer-v5nhb4`,
                            "data-framer-name": `Right`,
                            layout: `position`,
                            layoutDependency: A,
                            layoutId: `vU0sWISKy`,
                            opacity: 1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"></svg>`,
                            svgContentId: 8902447001,
                            withExternalLayout: !0,
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fhSEk.framer-10dayk9, .framer-fhSEk .framer-10dayk9 { display: block; }`,
          `.framer-fhSEk.framer-1i6kam5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-fhSEk .framer-1voptz6 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-fhSEk .framer-uqsv4v { bottom: -13px; flex: none; height: 3px; left: calc(48.837209302325604% - 23.25581395348837% / 2); overflow: visible; position: absolute; width: 23%; z-index: 1; }`,
          `.framer-fhSEk .framer-au4f7w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; left: -20px; overflow: hidden; padding: 0px; position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; z-index: 1; }`,
          `.framer-fhSEk .framer-v5nhb4 { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-fhSEk.framer-v-1j7u8cl .framer-uqsv4v { align-self: stretch; bottom: unset; left: unset; position: relative; width: auto; }`,
          `.framer-fhSEk.framer-v-1xj9ufb.framer-1i6kam5, .framer-fhSEk.framer-v-dzqwlr.framer-1i6kam5 { flex-direction: row; gap: 0px; }`,
          `.framer-fhSEk.framer-v-1xj9ufb .framer-1voptz6, .framer-fhSEk.framer-v-dzqwlr .framer-1voptz6 { order: 2; }`,
          `.framer-fhSEk.framer-v-1xj9ufb .framer-uqsv4v, .framer-fhSEk.framer-v-dzqwlr .framer-uqsv4v { order: 1; }`,
          `.framer-fhSEk.framer-v-1xj9ufb .framer-au4f7w, .framer-fhSEk.framer-v-dzqwlr .framer-au4f7w { order: 0; }`,
          `.framer-fhSEk.framer-v-1i6kam5.hover.framer-1i6kam5 { overflow: visible; }`,
          `.framer-fhSEk.framer-v-1i6kam5.hover .framer-uqsv4v { bottom: unset; left: unset; position: relative; width: 100%; }`,
          `.framer-fhSEk.framer-v-1trojvv.hover.framer-1i6kam5 { gap: 11.09px; }`,
          `.framer-fhSEk.framer-v-1xj9ufb.hover.framer-1i6kam5 { gap: 8px; }`,
          `.framer-fhSEk.framer-v-1xj9ufb.hover .framer-au4f7w { left: unset; position: relative; top: unset; }`,
        ],
        `framer-fhSEk`
      )),
      (Ns = Ms),
      (Ms.displayName = `Nav link`),
      (Ms.defaultProps = { height: 30, width: 30 }),
      k(Ms, {
        variant: {
          options: [
            `oowd0pyFV`,
            `MSrT0jON5`,
            `gyz_6x0I5`,
            `bqwfM3WOL`,
            `iZjZjfVUH`,
            `jP21ymMfO`,
            `vheLQJGdW`,
            `jFxo2dhgg`,
            `mnYA5Wko6`,
            `wjmkYmDz8`,
          ],
          optionTitles: [
            `Nav bar link`,
            `Action Btn`,
            `Nav link active`,
            `Action Btn Active`,
            `Social Media`,
            `Nav link mobile`,
            `Action btn mobile`,
            `Social media mobile`,
            `Nav link footer`,
            `Variant 10`,
          ],
          title: `Variant`,
          type: L.Enum,
        },
        Fs4spq_6s: { defaultValue: `FAQ`, displayTextArea: !1, title: `Btn Text`, type: L.String },
        onFs4spq_6sChange: { changes: `Fs4spq_6s`, type: L.ChangeHandler },
        ZmpACwfdE: { title: `Link`, type: L.Link },
        a8QWyBkHZ: { defaultValue: !1, title: `New Tab`, type: L.Boolean },
        ona8QWyBkHZChange: { changes: `a8QWyBkHZ`, type: L.ChangeHandler },
        nNTyAbB0u: { defaultValue: !0, title: `Smooth Scroll`, type: L.Boolean },
        onnNTyAbB0uChange: { changes: `nNTyAbB0u`, type: L.ChangeHandler },
        wFLg6dJD3: { title: `Onepage`, type: L.EventHandler },
        CVxHgh5W7: { defaultValue: `rgb(255, 255, 255)`, title: `text color`, type: L.Color },
        iN5LLRXMT: { defaultValue: `rgb(221, 221, 221)`, title: `hover underline`, type: L.Color },
      }),
      A(
        Ms,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Mona Sans Condensed Bold`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Mona Sans Condensed`,
                url: `../../assets/fonts/6iwC6STWvic4aW9ENkaXYx1Abto.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Rodger Test Semibold`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Rodger Test`,
                url: `../../assets/fonts/qIrlO9Uvv4OUyN9hielysbov2o.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function $(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc = e(() => {
    (x(),
      j(),
      D(),
      n(),
      bs(),
      Ps(),
      (Fs = z(ys)),
      (Is = z(Ns)),
      (Ls = oe(Ns)),
      (Rs = ae(w.nav)),
      (zs = [`VFdWNzN4_`, `M4s3f1gIn`, `Wjwu4z1DW`, `OmgiYHgjX`, `FOlC2Ey5Z`, `KPlBatS70`]),
      (Bs = `framer-iW5OB`),
      (Vs = {
        FOlC2Ey5Z: `framer-v-1bdm4tu`,
        KPlBatS70: `framer-v-1rw6b86`,
        M4s3f1gIn: `framer-v-1ve0oru`,
        OmgiYHgjX: `framer-v-j5yj76`,
        VFdWNzN4_: `framer-v-1wt1rxs`,
        Wjwu4z1DW: `framer-v-szmn9p`,
      }),
      (Hs = void 0),
      (Us = void 0),
      (Ws = void 0),
      (Gs = void 0),
      (Ks = void 0),
      (qs = void 0),
      (Js = { damping: 48, delay: 0, mass: 1, stiffness: 700, type: `spring` }),
      (Ys = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Xs = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Zs = { delay: 0, duration: 0.2, ease: [0, 0, 1, 1], type: `tween` }),
      (Qs = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ($s = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (ec = {
        "Mobile | Open": `Wjwu4z1DW`,
        "Variant 5": `FOlC2Ey5Z`,
        "Variant 6": `KPlBatS70`,
        Desktop: `VFdWNzN4_`,
        Mobile: `M4s3f1gIn`,
        Tab: `OmgiYHgjX`,
      }),
      (tc = w.create(c)),
      (nc = ({ height: e, hoverUnderline: t, id: n, linkTextColor: r, width: i, ...a }) => ({
        ...a,
        D5dIlgV_e:
          r ?? a.D5dIlgV_e ?? `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5))`,
        eTITdHXXZ:
          t ??
          a.eTITdHXXZ ??
          `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))`,
        variant: ec[a.variant] ?? a.variant ?? `VFdWNzN4_`,
      })),
      (rc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ic = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me(),
            l = le(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              D5dIlgV_e: m,
              eTITdHXXZ: g,
              ..._
            } = nc(e),
            {
              baseVariant: v,
              classNames: ee,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ne,
              setGestureState: C,
              setVariant: T,
              variants: E,
            } = ue({
              cycleOrder: zs,
              defaultVariant: `VFdWNzN4_`,
              ref: i,
              variant: p,
              variantClassNames: Vs,
            }),
            D = rc(e, E),
            { activeVariantCallback: ie, delay: ae } = pe(v),
            k = ie(async (...e) => {
              T(`Wjwu4z1DW`);
            }),
            A = ie(async (...e) => {
              T(`M4s3f1gIn`);
            }),
            oe = ie(async (...e) => {
              T(`M4s3f1gIn`);
            }),
            j = F(Bs),
            M = () => !![`M4s3f1gIn`, `Wjwu4z1DW`].includes(v),
            se = () => v === `M4s3f1gIn`,
            de = () => v !== `M4s3f1gIn`;
          he();
          let fe = () => v !== `Wjwu4z1DW`;
          return h(re, {
            id: f ?? a,
            children: h(tc, {
              animate: E,
              initial: !1,
              children: h($s, {
                value: Xs,
                ...$({ M4s3f1gIn: { value: Zs }, Wjwu4z1DW: { value: Zs } }, v, S),
                children: h(Rs, {
                  ..._,
                  ...x,
                  __framer__animate: { transition: Js },
                  __framer__animateOnce: !1,
                  __framer__scrollDirection: { direction: `down`, target: Ys },
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: F(j, `framer-1wt1rxs`, d, ee),
                  "data-framer-name": `Desktop`,
                  layoutDependency: D,
                  layoutId: `VFdWNzN4_`,
                  ref: i,
                  style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...u },
                  ...$(
                    {
                      FOlC2Ey5Z: { "data-framer-name": `Variant 5` },
                      KPlBatS70: { "data-framer-name": `Variant 6` },
                      M4s3f1gIn: {
                        __framer__styleAppearEffectEnabled: void 0,
                        "data-framer-name": `Mobile`,
                      },
                      OmgiYHgjX: { "data-framer-name": `Tab` },
                      Wjwu4z1DW: { "data-framer-name": `Mobile | Open` },
                    },
                    v,
                    S
                  ),
                  children: b(w.div, {
                    className: `framer-1hu9e34`,
                    "data-border": !0,
                    "data-framer-name": `Navigation Bar`,
                    layoutDependency: D,
                    layoutId: `X1awinf3n`,
                    style: {
                      "--border-bottom-width": `3px`,
                      "--border-color": `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))`,
                      "--border-left-width": `3px`,
                      "--border-right-width": `3px`,
                      "--border-style": `solid`,
                      "--border-top-width": `3px`,
                      backdropFilter: `blur(5px)`,
                      backgroundColor: `var(--token-d50a4c6b-7fb8-4dd9-8aeb-fa37ba09e423, rgb(255, 240, 173))`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      boxShadow: `0px 0.7961918735236395px 0.7961918735236395px -0.9375px rgba(0, 0, 0, 0.02), 0px 2.414506143104518px 2.414506143104518px -1.875px rgba(0, 0, 0, 0.02), 0px 6.382653521484461px 6.382653521484461px -2.8125px rgba(0, 0, 0, 0.02), 0px 20px 20px -3.75px rgba(0, 0, 0, 0.01), 0px 0.7226247621292714px 0.7226247621292714px -1px rgba(0, 0, 0, 0.09), 0px 2.7462399638921484px 2.7462399638921484px -2px rgba(0, 0, 0, 0.08), 0px 12px 12px -3px rgba(0, 0, 0, 0.06), inset 0px -0.7961918735236395px 2.0700988711614627px -1.25px rgba(255, 255, 255, 0.53), inset 0px -2.414506143104518px 6.277715972071746px -2.5px rgba(255, 255, 255, 0.48), inset 0px -6.382653521484461px 16.5948991558596px -3.75px rgba(255, 255, 255, 0.37), inset 0px -20px 52px -5px rgba(255, 255, 255, 0)`,
                      WebkitBackdropFilter: `blur(5px)`,
                    },
                    variants: {
                      FOlC2Ey5Z: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                        boxShadow: `none`,
                      },
                      KPlBatS70: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                        boxShadow: `none`,
                      },
                      M4s3f1gIn: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        boxShadow: `none`,
                      },
                      OmgiYHgjX: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        backgroundColor: `rgb(255, 255, 255)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      Wjwu4z1DW: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        boxShadow: `0px 0.7961918735236395px 0.7961918735236395px -0.9375px rgba(0, 0, 0, 0.02), 0px 2.414506143104518px 2.414506143104518px -1.875px rgba(0, 0, 0, 0.02), 0px 6.382653521484461px 6.382653521484461px -2.8125px rgba(0, 0, 0, 0.02), 0px 20px 20px -3.75px rgba(0, 0, 0, 0.01), 0px 0.7226247621292714px 0.7226247621292714px -1px rgba(0, 0, 0, 0.09), 0px 2.7462399638921484px 2.7462399638921484px -2px rgba(0, 0, 0, 0.08), 0px 12px 12px -3px rgba(0, 0, 0, 0.06), inset 0px -0.7961918735236395px 2.0700988711614627px -1.25px rgba(255, 255, 255, 0), inset 0px -2.414506143104518px 6.277715972071746px -2.5px rgba(255, 255, 255, 0), inset 0px -6.382653521484461px 16.5948991558596px -3.75px rgba(255, 255, 255, 0), inset 0px -20px 52px -5px rgba(255, 255, 255, 0)`,
                      },
                    },
                    children: [
                      b(w.div, {
                        className: `framer-1epsqzl`,
                        "data-framer-name": `Top`,
                        layoutDependency: D,
                        layoutId: `TiBRGATPm`,
                        children: [
                          M() &&
                            b(w.div, {
                              className: `framer-13b2vh5`,
                              "data-framer-name": `Navigation`,
                              layoutDependency: D,
                              layoutId: `bmxX05yRP`,
                              ...$(
                                {
                                  M4s3f1gIn: { "data-highlight": !0, onTap: k },
                                  Wjwu4z1DW: { "data-highlight": !0, onTap: A },
                                },
                                v,
                                S
                              ),
                              children: [
                                h(w.div, {
                                  className: `framer-1fhlt5d`,
                                  "data-framer-name": `Rectangle 21`,
                                  layoutDependency: D,
                                  layoutId: `wFcR1PVux`,
                                  style: {
                                    backgroundColor: `rgb(0, 0, 0)`,
                                    borderBottomLeftRadius: 47,
                                    borderBottomRightRadius: 47,
                                    borderTopLeftRadius: 47,
                                    borderTopRightRadius: 47,
                                    rotate: 0,
                                  },
                                  variants: { Wjwu4z1DW: { rotate: 45 } },
                                }),
                                h(w.div, {
                                  className: `framer-62tpk2`,
                                  "data-framer-name": `Rectangle 22`,
                                  layoutDependency: D,
                                  layoutId: `QlbcOXfUG`,
                                  style: {
                                    backgroundColor: `rgb(0, 0, 0)`,
                                    borderBottomLeftRadius: 47,
                                    borderBottomRightRadius: 47,
                                    borderTopLeftRadius: 47,
                                    borderTopRightRadius: 47,
                                    opacity: 1,
                                  },
                                  variants: { Wjwu4z1DW: { opacity: 0 } },
                                }),
                                h(w.div, {
                                  className: `framer-rhfft6`,
                                  "data-framer-name": `Rectangle 23`,
                                  layoutDependency: D,
                                  layoutId: `sYrBehe0G`,
                                  style: {
                                    backgroundColor: `rgb(0, 0, 0)`,
                                    borderBottomLeftRadius: 47,
                                    borderBottomRightRadius: 47,
                                    borderTopLeftRadius: 47,
                                    borderTopRightRadius: 47,
                                    rotate: 0,
                                  },
                                  variants: { Wjwu4z1DW: { rotate: -45 } },
                                }),
                              ],
                            }),
                          b(w.div, {
                            className: `framer-d2tmfd`,
                            "data-framer-name": `Logo`,
                            layoutDependency: D,
                            layoutId: `yh4c6WuZt`,
                            children: [
                              h(I, {
                                href: { webPageId: `Jt77tlfGm` },
                                motionChild: !0,
                                nodeId: `sjin_5Sjv`,
                                openInNewTab: !1,
                                scopeId: `A8A1aiia8`,
                                children: h(w.a, {
                                  className: `framer-13z215t framer-1vw3ej2`,
                                  layoutDependency: D,
                                  layoutId: `sjin_5Sjv`,
                                  children: h(O, {
                                    __fromCanvasComponent: !0,
                                    children: h(c, {
                                      children: h(w.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `36px`,
                                          "--framer-line-height": `64px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(38, 38, 38)))`,
                                          "--framer-text-transform": `uppercase`,
                                        },
                                        children: `HAPPIPOLA`,
                                      }),
                                    }),
                                    className: `framer-1vinuxo`,
                                    "data-framer-name": `Logo`,
                                    fonts: [`CUSTOMV2;Kasindray Regular`],
                                    layoutDependency: D,
                                    layoutId: `NZZsUNqw0`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(38, 38, 38))`,
                                      "--framer-paragraph-spacing": `0px`,
                                      "--variable-reference-D5dIlgV_e-A8A1aiia8": m,
                                    },
                                    variants: {
                                      FOlC2Ey5Z: {
                                        "--extracted-r6o4lv": `var(--variable-reference-D5dIlgV_e-A8A1aiia8)`,
                                        "--variable-reference-D5dIlgV_e-A8A1aiia8": m,
                                      },
                                      M4s3f1gIn: {
                                        "--extracted-r6o4lv": `var(--variable-reference-D5dIlgV_e-A8A1aiia8)`,
                                        "--variable-reference-D5dIlgV_e-A8A1aiia8": m,
                                      },
                                      OmgiYHgjX: {
                                        "--extracted-r6o4lv": `var(--variable-reference-D5dIlgV_e-A8A1aiia8)`,
                                        "--variable-reference-D5dIlgV_e-A8A1aiia8": m,
                                      },
                                      Wjwu4z1DW: {
                                        "--extracted-r6o4lv": `var(--variable-reference-D5dIlgV_e-A8A1aiia8)`,
                                        "--variable-reference-D5dIlgV_e-A8A1aiia8": m,
                                      },
                                    },
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                    ...$(
                                      {
                                        FOlC2Ey5Z: {
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `36px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-D5dIlgV_e-A8A1aiia8))`,
                                              },
                                              children: `HAPPIPOLA`,
                                            }),
                                          }),
                                        },
                                        KPlBatS70: {
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `36px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(38, 38, 38)))`,
                                              },
                                              children: `HAPPIPOLA`,
                                            }),
                                          }),
                                        },
                                        M4s3f1gIn: {
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-D5dIlgV_e-A8A1aiia8))`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `HAPPIPOLA`,
                                            }),
                                          }),
                                        },
                                        OmgiYHgjX: {
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-line-height": `64px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-D5dIlgV_e-A8A1aiia8))`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `HAPPIPOLA`,
                                            }),
                                          }),
                                        },
                                        Wjwu4z1DW: {
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `36px`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-D5dIlgV_e-A8A1aiia8))`,
                                                "--framer-text-transform": `uppercase`,
                                              },
                                              children: `HAPPIPOLA`,
                                            }),
                                          }),
                                        },
                                      },
                                      v,
                                      S
                                    ),
                                  }),
                                }),
                              }),
                              se() &&
                                h(P, {
                                  ...$(
                                    {
                                      M4s3f1gIn: {
                                        height: 40,
                                        y:
                                          (l?.y || 0) +
                                          10 +
                                          (((l?.height || 96) - 20 - 76) / 2 + 0 + 0) +
                                          16 +
                                          0 +
                                          0,
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                  children: h(N, {
                                    className: `framer-12vop8a-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: D,
                                    layoutId: `V17rDH8cp-container`,
                                    nodeId: `V17rDH8cp`,
                                    rendersWithMotion: !0,
                                    scopeId: `A8A1aiia8`,
                                    children: h(ys, {
                                      height: `100%`,
                                      id: `V17rDH8cp`,
                                      layoutId: `V17rDH8cp`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      de() &&
                        b(w.div, {
                          className: `framer-1s9hk3e`,
                          "data-framer-name": `Nav`,
                          layoutDependency: D,
                          layoutId: `xtKa2i3sh`,
                          children: [
                            h(ce, {
                              links: [
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:Oq0VM_ta6`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:Oq0VM_ta6`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                h(P, {
                                  height: 30,
                                  y:
                                    (l?.y || 0) +
                                    16 +
                                    (((l?.height || 136) - 32 - 104) / 2 + 0 + 0) +
                                    32 +
                                    5,
                                  ...$(
                                    {
                                      FOlC2Ey5Z: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 112) - 32 - 80) / 2 + 0 + 0) +
                                          20 +
                                          5,
                                      },
                                      KPlBatS70: { y: (l?.y || 0) + 30 + 0 + 20 + 5 },
                                      OmgiYHgjX: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 126) - 32 - 94) / 2 + 0 + 0) +
                                          27 +
                                          5,
                                      },
                                      Wjwu4z1DW: {
                                        y:
                                          (l?.y || 0) +
                                          15 +
                                          (((l?.height || 392) - 30 - 506) / 2 + 0 + 0) +
                                          20 +
                                          180 +
                                          20 +
                                          0,
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                  children: h(N, {
                                    className: `framer-1uyqvj2-container`,
                                    layoutDependency: D,
                                    layoutId: `DiCzpzrBm-container`,
                                    nodeId: `DiCzpzrBm`,
                                    rendersWithMotion: !0,
                                    scopeId: `A8A1aiia8`,
                                    children: h(Ls, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Hs, target: `RfVI36jy2` },
                                        { ref: Us, target: `Bjlo9lBmC` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      a8QWyBkHZ: !1,
                                      CVxHgh5W7: `rgb(255, 255, 255)`,
                                      Fs4spq_6s: `About`,
                                      height: `100%`,
                                      id: `DiCzpzrBm`,
                                      iN5LLRXMT: `rgb(221, 221, 221)`,
                                      layoutId: `DiCzpzrBm`,
                                      nNTyAbB0u: !0,
                                      variant: Qs(`oowd0pyFV`),
                                      width: `100%`,
                                      ZmpACwfdE: e[0],
                                      ...$(
                                        {
                                          FOlC2Ey5Z: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `ABOUT`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[3],
                                          },
                                          KPlBatS70: {
                                            CVxHgh5W7: `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(26, 26, 26))`,
                                            ZmpACwfdE: e[4],
                                          },
                                          OmgiYHgjX: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `ABOUT`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[2],
                                          },
                                          Wjwu4z1DW: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `ABOUT`,
                                            variant: Qs(`wjmkYmDz8`),
                                            wFLg6dJD3: oe,
                                            ZmpACwfdE: e[1],
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            h(ce, {
                              links: [
                                { href: { webPageId: `WCxlBmStO` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `WCxlBmStO` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `WCxlBmStO` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `WCxlBmStO` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `WCxlBmStO` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                h(P, {
                                  height: 30,
                                  y:
                                    (l?.y || 0) +
                                    16 +
                                    (((l?.height || 136) - 32 - 104) / 2 + 0 + 0) +
                                    32 +
                                    5,
                                  ...$(
                                    {
                                      FOlC2Ey5Z: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 112) - 32 - 80) / 2 + 0 + 0) +
                                          20 +
                                          5,
                                      },
                                      KPlBatS70: { y: (l?.y || 0) + 30 + 0 + 20 + 5 },
                                      OmgiYHgjX: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 126) - 32 - 94) / 2 + 0 + 0) +
                                          27 +
                                          5,
                                      },
                                      Wjwu4z1DW: {
                                        y:
                                          (l?.y || 0) +
                                          15 +
                                          (((l?.height || 392) - 30 - 506) / 2 + 0 + 0) +
                                          20 +
                                          180 +
                                          20 +
                                          54,
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                  children: h(N, {
                                    className: `framer-y6w5q6-container`,
                                    layoutDependency: D,
                                    layoutId: `Bf6idAHKF-container`,
                                    nodeId: `Bf6idAHKF`,
                                    rendersWithMotion: !0,
                                    scopeId: `A8A1aiia8`,
                                    children: h(Ls, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Us, target: `RfVI36jy2` },
                                        { ref: Ws, target: `Bjlo9lBmC` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      a8QWyBkHZ: !1,
                                      CVxHgh5W7: `rgb(255, 255, 255)`,
                                      Fs4spq_6s: `Products`,
                                      height: `100%`,
                                      id: `Bf6idAHKF`,
                                      iN5LLRXMT: `rgb(221, 221, 221)`,
                                      layoutId: `Bf6idAHKF`,
                                      nNTyAbB0u: !0,
                                      variant: Qs(`oowd0pyFV`),
                                      width: `100%`,
                                      ZmpACwfdE: e[0],
                                      ...$(
                                        {
                                          FOlC2Ey5Z: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `PRODUCTS`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[3],
                                          },
                                          KPlBatS70: {
                                            CVxHgh5W7: `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(26, 26, 26))`,
                                            ZmpACwfdE: e[4],
                                          },
                                          OmgiYHgjX: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `PRODUCTS`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[2],
                                          },
                                          Wjwu4z1DW: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `PRODUCTS`,
                                            variant: Qs(`wjmkYmDz8`),
                                            wFLg6dJD3: oe,
                                            ZmpACwfdE: e[1],
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            h(ce, {
                              links: [
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:jvcD4JsIY`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:jvcD4JsIY`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                h(P, {
                                  height: 30,
                                  y:
                                    (l?.y || 0) +
                                    16 +
                                    (((l?.height || 136) - 32 - 104) / 2 + 0 + 0) +
                                    32 +
                                    5,
                                  ...$(
                                    {
                                      FOlC2Ey5Z: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 112) - 32 - 80) / 2 + 0 + 0) +
                                          20 +
                                          5,
                                      },
                                      KPlBatS70: { y: (l?.y || 0) + 30 + 0 + 20 + 5 },
                                      OmgiYHgjX: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 126) - 32 - 94) / 2 + 0 + 0) +
                                          27 +
                                          5,
                                      },
                                      Wjwu4z1DW: {
                                        y:
                                          (l?.y || 0) +
                                          15 +
                                          (((l?.height || 392) - 30 - 506) / 2 + 0 + 0) +
                                          20 +
                                          180 +
                                          20 +
                                          108,
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                  children: h(N, {
                                    className: `framer-rhga3r-container`,
                                    layoutDependency: D,
                                    layoutId: `yKS2x4mSH-container`,
                                    nodeId: `yKS2x4mSH`,
                                    rendersWithMotion: !0,
                                    scopeId: `A8A1aiia8`,
                                    children: h(Ls, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Ws, target: `RfVI36jy2` },
                                        { ref: Gs, target: `Bjlo9lBmC` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      a8QWyBkHZ: !1,
                                      CVxHgh5W7: `rgb(255, 255, 255)`,
                                      Fs4spq_6s: `Benefits`,
                                      height: `100%`,
                                      id: `yKS2x4mSH`,
                                      iN5LLRXMT: `rgb(221, 221, 221)`,
                                      layoutId: `yKS2x4mSH`,
                                      nNTyAbB0u: !0,
                                      variant: Qs(`oowd0pyFV`),
                                      width: `100%`,
                                      ZmpACwfdE: e[0],
                                      ...$(
                                        {
                                          FOlC2Ey5Z: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `BENEFITS`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[3],
                                          },
                                          KPlBatS70: {
                                            CVxHgh5W7: `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(26, 26, 26))`,
                                            ZmpACwfdE: e[4],
                                          },
                                          OmgiYHgjX: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `BENEFITS`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[2],
                                          },
                                          Wjwu4z1DW: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `BENEFITS`,
                                            variant: Qs(`wjmkYmDz8`),
                                            wFLg6dJD3: oe,
                                            ZmpACwfdE: e[1],
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            h(ce, {
                              links: [
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:hx86Jkt0G`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:hx86Jkt0G`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                h(P, {
                                  height: 30,
                                  y:
                                    (l?.y || 0) +
                                    16 +
                                    (((l?.height || 136) - 32 - 104) / 2 + 0 + 0) +
                                    32 +
                                    5,
                                  ...$(
                                    {
                                      FOlC2Ey5Z: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 112) - 32 - 80) / 2 + 0 + 0) +
                                          20 +
                                          5,
                                      },
                                      KPlBatS70: { y: (l?.y || 0) + 30 + 0 + 20 + 5 },
                                      OmgiYHgjX: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 126) - 32 - 94) / 2 + 0 + 0) +
                                          27 +
                                          5,
                                      },
                                      Wjwu4z1DW: {
                                        y:
                                          (l?.y || 0) +
                                          15 +
                                          (((l?.height || 392) - 30 - 506) / 2 + 0 + 0) +
                                          20 +
                                          180 +
                                          20 +
                                          162,
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                  children: h(N, {
                                    className: `framer-zpaayo-container`,
                                    layoutDependency: D,
                                    layoutId: `CwGv48G5Z-container`,
                                    nodeId: `CwGv48G5Z`,
                                    rendersWithMotion: !0,
                                    scopeId: `A8A1aiia8`,
                                    children: h(Ls, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Gs, target: `RfVI36jy2` },
                                        { ref: Ks, target: `Bjlo9lBmC` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      a8QWyBkHZ: !1,
                                      CVxHgh5W7: `rgb(255, 255, 255)`,
                                      Fs4spq_6s: `Reviews`,
                                      height: `100%`,
                                      id: `CwGv48G5Z`,
                                      iN5LLRXMT: `rgb(221, 221, 221)`,
                                      layoutId: `CwGv48G5Z`,
                                      nNTyAbB0u: !0,
                                      variant: Qs(`oowd0pyFV`),
                                      width: `100%`,
                                      ZmpACwfdE: e[0],
                                      ...$(
                                        {
                                          FOlC2Ey5Z: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `REVIEWS`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[3],
                                          },
                                          KPlBatS70: {
                                            CVxHgh5W7: `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(26, 26, 26))`,
                                            ZmpACwfdE: e[4],
                                          },
                                          OmgiYHgjX: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `REVIEWS`,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[2],
                                          },
                                          Wjwu4z1DW: {
                                            CVxHgh5W7: m,
                                            Fs4spq_6s: `REVIEWS`,
                                            variant: Qs(`wjmkYmDz8`),
                                            wFLg6dJD3: oe,
                                            ZmpACwfdE: e[1],
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            h(ce, {
                              links: [
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:vESE0VP8E`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                                {
                                  href: { hash: `:vESE0VP8E`, webPageId: `Jt77tlfGm` },
                                  implicitPathVariables: void 0,
                                },
                                { href: { webPageId: `ZJAgdtRCX` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                h(P, {
                                  height: 30,
                                  y:
                                    (l?.y || 0) +
                                    16 +
                                    (((l?.height || 136) - 32 - 104) / 2 + 0 + 0) +
                                    32 +
                                    5,
                                  ...$(
                                    {
                                      FOlC2Ey5Z: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 112) - 32 - 80) / 2 + 0 + 0) +
                                          20 +
                                          5,
                                      },
                                      KPlBatS70: { y: (l?.y || 0) + 30 + 0 + 20 + 5 },
                                      OmgiYHgjX: {
                                        y:
                                          (l?.y || 0) +
                                          16 +
                                          (((l?.height || 126) - 32 - 94) / 2 + 0 + 0) +
                                          27 +
                                          5,
                                      },
                                      Wjwu4z1DW: {
                                        y:
                                          (l?.y || 0) +
                                          15 +
                                          (((l?.height || 392) - 30 - 506) / 2 + 0 + 0) +
                                          20 +
                                          180 +
                                          20 +
                                          216,
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                  children: h(N, {
                                    className: `framer-hjgct-container`,
                                    layoutDependency: D,
                                    layoutId: `DF7bPfy5Y-container`,
                                    nodeId: `DF7bPfy5Y`,
                                    rendersWithMotion: !0,
                                    scopeId: `A8A1aiia8`,
                                    children: h(Ls, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [{ ref: qs, target: `RfVI36jy2` }],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      a8QWyBkHZ: !1,
                                      CVxHgh5W7: `rgb(255, 255, 255)`,
                                      Fs4spq_6s: `BLOG`,
                                      height: `100%`,
                                      id: `DF7bPfy5Y`,
                                      iN5LLRXMT: `rgb(221, 221, 221)`,
                                      layoutId: `DF7bPfy5Y`,
                                      nNTyAbB0u: !0,
                                      variant: Qs(`oowd0pyFV`),
                                      width: `100%`,
                                      ZmpACwfdE: e[0],
                                      ...$(
                                        {
                                          FOlC2Ey5Z: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            CVxHgh5W7: m,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[3],
                                          },
                                          KPlBatS70: {
                                            CVxHgh5W7: `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(26, 26, 26))`,
                                            ZmpACwfdE: e[4],
                                          },
                                          OmgiYHgjX: {
                                            CVxHgh5W7: m,
                                            iN5LLRXMT: g,
                                            ZmpACwfdE: e[2],
                                          },
                                          Wjwu4z1DW: {
                                            CVxHgh5W7: m,
                                            variant: Qs(`wjmkYmDz8`),
                                            wFLg6dJD3: oe,
                                            ZmpACwfdE: e[1],
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            fe() &&
                              h(P, {
                                height: 40,
                                y:
                                  (l?.y || 0) +
                                  16 +
                                  (((l?.height || 136) - 32 - 104) / 2 + 0 + 0) +
                                  32 +
                                  0,
                                ...$(
                                  {
                                    FOlC2Ey5Z: {
                                      y:
                                        (l?.y || 0) +
                                        16 +
                                        (((l?.height || 112) - 32 - 80) / 2 + 0 + 0) +
                                        20 +
                                        0,
                                    },
                                    KPlBatS70: { y: (l?.y || 0) + 30 + 0 + 20 + 0 },
                                    OmgiYHgjX: {
                                      y:
                                        (l?.y || 0) +
                                        16 +
                                        (((l?.height || 126) - 32 - 94) / 2 + 0 + 0) +
                                        27 +
                                        0,
                                    },
                                  },
                                  v,
                                  S
                                ),
                                children: h(N, {
                                  className: `framer-bn0nts-container`,
                                  isModuleExternal: !0,
                                  layoutDependency: D,
                                  layoutId: `AGbqgOxEZ-container`,
                                  nodeId: `AGbqgOxEZ`,
                                  rendersWithMotion: !0,
                                  scopeId: `A8A1aiia8`,
                                  children: h(ys, {
                                    height: `100%`,
                                    id: `AGbqgOxEZ`,
                                    layoutId: `AGbqgOxEZ`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iW5OB.framer-1vw3ej2, .framer-iW5OB .framer-1vw3ej2 { display: block; }`,
          `.framer-iW5OB.framer-1wt1rxs { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 16px 0px; position: relative; width: 1200px; }`,
          `.framer-iW5OB .framer-1hu9e34 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: hidden; padding: 20px 40px 20px 40px; position: relative; width: 1072px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
          `.framer-iW5OB .framer-1epsqzl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-iW5OB .framer-13b2vh5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 41px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-iW5OB .framer-1fhlt5d, .framer-iW5OB .framer-62tpk2, .framer-iW5OB .framer-rhfft6 { flex: none; height: 5px; position: relative; width: 52px; }`,
          `.framer-iW5OB .framer-d2tmfd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-iW5OB .framer-13z215t { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }`,
          `.framer-iW5OB .framer-1vinuxo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iW5OB .framer-12vop8a-container, .framer-iW5OB .framer-1uyqvj2-container, .framer-iW5OB .framer-y6w5q6-container, .framer-iW5OB .framer-rhga3r-container, .framer-iW5OB .framer-zpaayo-container, .framer-iW5OB .framer-hjgct-container, .framer-iW5OB .framer-bn0nts-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-iW5OB .framer-1s9hk3e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-iW5OB.framer-v-1ve0oru.framer-1wt1rxs { gap: 0px; padding: 10px; width: 390px; }`,
          `.framer-iW5OB.framer-v-1ve0oru .framer-1hu9e34 { padding: 16px 30px 20px 20px; width: 100%; }`,
          `.framer-iW5OB.framer-v-1ve0oru .framer-1epsqzl { gap: unset; justify-content: space-between; order: 1; }`,
          `.framer-iW5OB.framer-v-1ve0oru .framer-13b2vh5, .framer-iW5OB.framer-v-szmn9p .framer-13b2vh5 { cursor: pointer; height: 35px; order: 1; width: 35px; }`,
          `.framer-iW5OB.framer-v-1ve0oru .framer-1fhlt5d, .framer-iW5OB.framer-v-1ve0oru .framer-62tpk2, .framer-iW5OB.framer-v-1ve0oru .framer-rhfft6 { height: 3px; width: 30px; }`,
          `.framer-iW5OB.framer-v-1ve0oru .framer-d2tmfd { gap: unset; justify-content: space-between; order: 0; padding: 0px 15px 0px 10px; }`,
          `.framer-iW5OB.framer-v-1ve0oru .framer-13z215t, .framer-iW5OB.framer-v-j5yj76 .framer-13z215t { justify-content: flex-start; }`,
          `.framer-iW5OB.framer-v-szmn9p.framer-1wt1rxs { gap: 0px; padding: 15px; width: 390px; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-1hu9e34 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: flex-start; padding: 20px; width: 100%; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-1epsqzl { flex: none; gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-1fhlt5d { height: 4px; left: calc(47.00000000000002% - 40px / 2); position: absolute; top: calc(48.78048780487807% - 4px / 2); width: 40px; z-index: 1; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-62tpk2 { height: 1px; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-rhfft6 { height: 4px; left: calc(48.00000000000002% - 40px / 2); position: absolute; top: calc(48.78048780487807% - 4px / 2); width: 40px; z-index: 1; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-d2tmfd { flex: 186 0 0px; order: 0; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-1vinuxo { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-iW5OB.framer-v-szmn9p .framer-1s9hk3e { align-content: flex-start; align-items: flex-start; flex-direction: column; justify-content: flex-start; padding: 20px; }`,
          `.framer-iW5OB.framer-v-j5yj76.framer-1wt1rxs { width: min-content; }`,
          `.framer-iW5OB.framer-v-j5yj76 .framer-1hu9e34 { padding: 15px 20px 15px 20px; width: 700px; }`,
          `.framer-iW5OB.framer-v-1bdm4tu .framer-1hu9e34 { padding: 20px 30px 20px 30px; }`,
          `.framer-iW5OB.framer-v-1bdm4tu .framer-13z215t, .framer-iW5OB.framer-v-1rw6b86 .framer-d2tmfd { flex: none; width: min-content; }`,
          `.framer-iW5OB.framer-v-1rw6b86.framer-1wt1rxs { align-content: flex-start; align-items: flex-start; justify-content: flex-start; padding: 30px 0px 16px 40px; width: 844px; }`,
          `.framer-iW5OB.framer-v-1rw6b86 .framer-1hu9e34 { gap: 40px; justify-content: flex-start; padding: 20px 30px 20px 30px; width: 743px; }`,
          `.framer-iW5OB.framer-v-1rw6b86 .framer-1epsqzl { flex: none; justify-content: flex-start; width: min-content; }`,
          `.framer-iW5OB[data-border="true"]::after, .framer-iW5OB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-iW5OB`
      )),
      (ac = ic),
      (ic.displayName = `Navigation / Navbar`),
      (ic.defaultProps = { height: 136, width: 1200 }),
      k(ic, {
        variant: {
          options: [`VFdWNzN4_`, `M4s3f1gIn`, `Wjwu4z1DW`, `OmgiYHgjX`, `FOlC2Ey5Z`, `KPlBatS70`],
          optionTitles: [`Desktop`, `Mobile`, `Mobile | Open`, `Tab`, `Variant 5`, `Variant 6`],
          title: `Variant`,
          type: L.Enum,
        },
        D5dIlgV_e: {
          defaultValue: `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5)) /* {"name":"Title"} */`,
          title: `link Text Color`,
          type: L.Color,
        },
        eTITdHXXZ: {
          defaultValue: `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))`,
          title: `Hover Underline`,
          type: L.Color,
        },
      }),
      A(
        ic,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Kasindray Regular`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Kasindray`,
                url: `../../assets/fonts/rMf2Vt5nenuMWpYc0CvnyKXUJQ.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Fs,
          ...Is,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ic.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([se(ys, {}, t), se(Ns, {}, t)])),
      }));
  });
function sc({
  prefix: e,
  suffix: t,
  font: n,
  textColor: r,
  style: i,
  useDateRange: a,
  startYear: o,
  name: c,
  statement: l,
  symbolType: p,
  showLink: m,
  linkText: g,
  linkUrl: _,
  linkStyle: v,
  openInNewTab: ee,
  alignment: y,
  blockLayout: x,
}) {
  let [S, te] = u(``);
  s(() => {
    if (d !== void 0) {
      let e = new Date().getFullYear().toString();
      f(() => te(e));
    }
  }, []);
  let ne = a && o ? `${o}–${S}` : S,
    C = () => {
      switch (p) {
        case `copyright`:
          return `©`;
        case `registered`:
          return `®`;
        case `trademark`:
          return `™`;
        case `servicemark`:
          return `℠`;
        case `none`:
          return ``;
        default:
          return ``;
      }
    };
  return h(`div`, {
    style: {
      display: x ? `flex` : `inline-flex`,
      justifyContent: y === `center` ? `center` : y === `right` ? `flex-end` : `flex-start`,
      alignItems: `center`,
      color: r,
      width: x ? `100%` : `auto`,
      ...n,
      ...i,
    },
    "aria-label": `Copyright ${ne} ${c || ``}`,
    children: b(`div`, {
      style: { display: `inline`, whiteSpace: `normal`, wordBreak: `break-word`, flexShrink: 1 },
      children: [
        b(`span`, { children: [p === `custom` ? e : C(), ` `, ne, ` `, c, ` `, l, ` `, t] }),
        m &&
          h(`a`, {
            href: _,
            target: ee ? `_blank` : `_self`,
            rel: `noopener noreferrer`,
            style: {
              color: r,
              textDecoration: v === `underline` ? `underline` : `none`,
              fontWeight: v === `bold` ? `bold` : `inherit`,
              fontStyle: v === `italic` ? `italic` : `normal`,
              marginLeft: `4px`,
              ...n,
            },
            children: g,
          }),
      ],
    }),
  });
}
var cc = e(() => {
    (a(),
      x(),
      n(),
      j(),
      k(sc, {
        symbolType: {
          type: L.Enum,
          title: `Symbol`,
          defaultValue: `copyright`,
          options: [`copyright`, `registered`, `trademark`, `servicemark`, `none`, `custom`],
          optionTitles: [`©`, `®`, `™`, `℠`, `None`, `Custom`],
        },
        prefix: {
          type: L.String,
          title: `Custom Prefix`,
          defaultValue: ``,
          hidden: ({ symbolType: e }) => e !== `custom`,
        },
        useDateRange: { type: L.Boolean, title: `Date Range`, defaultValue: !1 },
        startYear: {
          type: L.Number,
          title: `Start Year`,
          defaultValue: 2024,
          min: 1900,
          max: new Date().getFullYear(),
          step: 1,
          displayStepper: !0,
          hidden: ({ useDateRange: e }) => !e,
        },
        name: {
          type: L.String,
          title: `Name`,
          placeholder: `Your Site or Company`,
          defaultValue: ``,
        },
        statement: {
          type: L.String,
          title: `Statement`,
          placeholder: `All rights reserved.`,
          defaultValue: `All rights reserved.`,
        },
        suffix: { type: L.String, title: `Suffix`, defaultValue: `` },
        textColor: { type: L.Color, title: `Text Color`, defaultValue: `#000000` },
        font: {
          type: L.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: `14px`, fontWeight: 400, lineHeight: `1.5em` },
        },
        alignment: {
          type: L.Enum,
          title: `Alignment`,
          defaultValue: `left`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
        },
        blockLayout: {
          type: L.Boolean,
          title: `Fill Width`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          description: `Enable if using Fill or placing inside layout slot`,
        },
        showLink: { type: L.Boolean, title: `Link`, defaultValue: !1 },
        linkText: {
          type: L.String,
          title: `Link Text`,
          placeholder: `Privacy Policy`,
          defaultValue: ``,
          hidden: ({ showLink: e }) => !e,
        },
        linkUrl: {
          type: L.Link,
          title: `Link URL`,
          placeholder: `https://example.com`,
          defaultValue: ``,
          hidden: ({ showLink: e }) => !e,
        },
        linkStyle: {
          type: L.Enum,
          title: `Link Style`,
          defaultValue: `underline`,
          options: [`underline`, `bold`, `italic`, `none`],
          optionTitles: [`Underline`, `Bold`, `Italic`, `None`],
          hidden: ({ showLink: e }) => !e,
        },
        openInNewTab: {
          type: L.Boolean,
          title: `Open in New Tab`,
          defaultValue: !0,
          hidden: ({ showLink: e }) => !e,
        },
      }));
  }),
  lc,
  uc,
  dc,
  fc = e(() => {
    (j(),
      M.loadFonts([]),
      (lc = [{ explicitInter: !0, fonts: [] }]),
      (uc = [
        `.framer-PdUej .framer-styles-preset-1gqgeaa:not(.rich-text-wrapper), .framer-PdUej .framer-styles-preset-1gqgeaa.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-style: wavy; --framer-link-text-color: #ffffff; }`,
      ]),
      (dc = `framer-PdUej`));
  });
function pc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac = e(() => {
    (x(),
      j(),
      D(),
      n(),
      (mc = ae(w.div)),
      (hc = { FWAsulbQy: { hover: !0, pressed: !0 } }),
      (gc = [`FWAsulbQy`, `FZ1rt7ccH`, `hCUpE8HuE`, `b6XJaQ_6k`, `S3T6Oxtvt`]),
      (_c = `framer-1Hz19`),
      (vc = {
        b6XJaQ_6k: `framer-v-18h7qgp`,
        FWAsulbQy: `framer-v-1fncwc1`,
        FZ1rt7ccH: `framer-v-1hohz5v`,
        hCUpE8HuE: `framer-v-hui0gq`,
        S3T6Oxtvt: `framer-v-1my32hk`,
      }),
      (yc = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (bc = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (xc = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Sc = (e, t) => `translateX(-50%) ${t}`),
      (Cc = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (wc = {
        Default: `FWAsulbQy`,
        Disabled: `hCUpE8HuE`,
        Error: `S3T6Oxtvt`,
        Loading: `FZ1rt7ccH`,
        Success: `b6XJaQ_6k`,
      }),
      (Tc = w.create(c)),
      (Ec = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mzpubBS3e: e ?? i.mzpubBS3e ?? `rgb(51, 51, 51)`,
        variant: wc[i.variant] ?? i.variant ?? `FWAsulbQy`,
      })),
      (Dc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Oc = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me();
          le();
          let { style: l, className: u, layoutId: d, variant: f, mzpubBS3e: p, ...m } = Ec(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: ee,
              gestureVariant: y,
              isLoading: x,
              setGestureState: S,
              setVariant: ne,
              variants: C,
            } = ue({
              cycleOrder: gc,
              defaultVariant: `FWAsulbQy`,
              enabledGestures: hc,
              ref: i,
              variant: f,
              variantClassNames: vc,
            }),
            T = Dc(e, C),
            E = F(_c),
            D = () => g !== `FZ1rt7ccH`,
            ie = () => g === `FZ1rt7ccH`;
          return h(re, {
            id: d ?? a,
            children: h(Tc, {
              animate: C,
              initial: !1,
              children: h(Cc, {
                value: yc,
                children: b(w.button, {
                  ...m,
                  ...ee,
                  className: F(E, `framer-1fncwc1`, u, _),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: T,
                  layoutId: `FWAsulbQy`,
                  ref: i,
                  style: {
                    backgroundColor: p,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...l,
                  },
                  variants: {
                    "FWAsulbQy-hover": { backgroundColor: `rgba(51, 51, 51, 0.85)`, opacity: 1 },
                    "FWAsulbQy-pressed": { backgroundColor: `rgb(51, 51, 51)`, opacity: 1 },
                    b6XJaQ_6k: { opacity: 1 },
                    hCUpE8HuE: { opacity: 0.5 },
                    S3T6Oxtvt: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                  },
                  ...pc(
                    {
                      "FWAsulbQy-hover": { "data-framer-name": void 0 },
                      "FWAsulbQy-pressed": { "data-framer-name": void 0 },
                      b6XJaQ_6k: { "data-framer-name": `Success` },
                      FZ1rt7ccH: { "data-framer-name": `Loading` },
                      hCUpE8HuE: { "data-framer-name": `Disabled` },
                      S3T6Oxtvt: { "data-framer-name": `Error` },
                    },
                    g,
                    y
                  ),
                  children: [
                    D() &&
                      h(O, {
                        __fromCanvasComponent: !0,
                        children: h(c, {
                          children: h(w.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                              "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `600`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-c5xp20`,
                        fonts: [`CUSTOMV2;Rodger Test Semibold`],
                        layoutDependency: T,
                        layoutId: `FOTcj7CY4`,
                        style: {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: { S3T6Oxtvt: { "--extracted-r6o4lv": `rgb(255, 34, 68)` } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...pc(
                          {
                            b6XJaQ_6k: {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                            S3T6Oxtvt: {
                              children: h(c, {
                                children: h(w.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                          },
                          g,
                          y
                        ),
                      }),
                    ie() &&
                      h(w.div, {
                        className: `framer-162pvrk`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: T,
                        layoutId: `o4jZ6_lgW`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: h(mc, {
                          __framer__loop: xc,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: bc,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1xequdy`,
                          "data-framer-name": `Conic`,
                          layoutDependency: T,
                          layoutId: `U54d390o7`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            FZ1rt7ccH: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: h(w.div, {
                            className: `framer-1rj9pk`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: T,
                            layoutId: `RBwuSab5I`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: Sc,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1Hz19.framer-1wqzd5y, .framer-1Hz19 .framer-1wqzd5y { display: block; }`,
          `.framer-1Hz19.framer-1fncwc1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
          `.framer-1Hz19 .framer-c5xp20 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-1Hz19 .framer-162pvrk { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-1Hz19 .framer-1xequdy { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-1Hz19 .framer-1rj9pk { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-1Hz19.framer-v-1hohz5v.framer-1fncwc1, .framer-1Hz19.framer-v-hui0gq.framer-1fncwc1, .framer-1Hz19.framer-v-18h7qgp.framer-1fncwc1, .framer-1Hz19.framer-v-1my32hk.framer-1fncwc1 { cursor: unset; }`,
          `.framer-1Hz19.framer-v-1hohz5v .framer-1xequdy { overflow: hidden; }`,
        ],
        `framer-1Hz19`
      )),
      (kc = Oc),
      (Oc.displayName = `Button`),
      (Oc.defaultProps = { height: 40, width: 240 }),
      k(Oc, {
        variant: {
          options: [`FWAsulbQy`, `FZ1rt7ccH`, `hCUpE8HuE`, `b6XJaQ_6k`, `S3T6Oxtvt`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: L.Enum,
        },
        mzpubBS3e: { defaultValue: `rgb(51, 51, 51)`, title: `Fill`, type: L.Color },
      }),
      A(
        Oc,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Rodger Test Semibold`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Rodger Test`,
                url: `../../assets/fonts/qIrlO9Uvv4OUyN9hielysbov2o.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function jc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc = e(() => {
    (x(),
      j(),
      D(),
      n(),
      cc(),
      fc(),
      Ac(),
      (Mc = z(kc)),
      (Nc = z(sc)),
      (Pc = [`OVA153bdM`, `XknOEgrGL`, `xFRCFMupe`]),
      (Fc = `framer-xLQ0A`),
      (Ic = {
        OVA153bdM: `framer-v-vx8bzb`,
        xFRCFMupe: `framer-v-1wys1u`,
        XknOEgrGL: `framer-v-klvnho`,
      }),
      (Lc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (zc = ({ value: e, children: n }) => {
        let r = y(T),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(T.Provider, { value: a, children: n });
      }),
      (Bc = { "Variant 1": `OVA153bdM`, "Variant 2": `XknOEgrGL`, "Variant 3": `xFRCFMupe` }),
      (Vc = w.create(c)),
      (Hc = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        EpcDfJqqJ:
          e ??
          i.EpcDfJqqJ ??
          `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))`,
        variant: Bc[i.variant] ?? i.variant ?? `OVA153bdM`,
      })),
      (Uc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Wc = _e(
        _(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: o, setLocale: s } = me(),
            l = le(),
            { style: u, className: d, layoutId: f, variant: p, EpcDfJqqJ: m, ...g } = Hc(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ne,
              setVariant: C,
              variants: T,
            } = ue({
              cycleOrder: Pc,
              defaultVariant: `OVA153bdM`,
              ref: i,
              variant: p,
              variantClassNames: Ic,
            }),
            E = Uc(e, T),
            D = F(Fc, dc);
          return h(re, {
            id: f ?? a,
            children: h(Vc, {
              animate: T,
              initial: !1,
              children: h(zc, {
                value: Lc,
                children: h(w.div, {
                  ...g,
                  ...y,
                  className: F(D, `framer-vx8bzb`, d, v),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: E,
                  layoutId: `OVA153bdM`,
                  ref: i,
                  style: { backgroundColor: m, ...u },
                  ...jc(
                    {
                      xFRCFMupe: { "data-framer-name": `Variant 3` },
                      XknOEgrGL: { "data-framer-name": `Variant 2` },
                    },
                    _,
                    x
                  ),
                  children: h(w.div, {
                    className: `framer-1cjnbnr`,
                    layoutDependency: E,
                    layoutId: `tCTz5asBv`,
                    children: b(w.div, {
                      className: `framer-16xs254`,
                      "data-framer-name": `Container`,
                      layoutDependency: E,
                      layoutId: `LtaoIO8Wj`,
                      children: [
                        b(w.div, {
                          className: `framer-1tkcdqt`,
                          layoutDependency: E,
                          layoutId: `EWWDSwpuC`,
                          children: [
                            b(w.div, {
                              className: `framer-1l3o1fp`,
                              "data-framer-name": `Heading`,
                              layoutDependency: E,
                              layoutId: `qvyRTprBD`,
                              children: [
                                h(O, {
                                  __fromCanvasComponent: !0,
                                  children: h(c, {
                                    children: h(w.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `72px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `0.8em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `HAPPIPOLA`,
                                    }),
                                  }),
                                  className: `framer-1geqxfj`,
                                  fonts: [`CUSTOMV2;Kasindray Regular`],
                                  layoutDependency: E,
                                  layoutId: `xlExexpmq`,
                                  style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...jc(
                                    {
                                      xFRCFMupe: {
                                        children: h(c, {
                                          children: h(w.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                              "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-letter-spacing": `-0.04em`,
                                              "--framer-line-height": `0.8em`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `HAPPIPOLA`,
                                          }),
                                        }),
                                      },
                                      XknOEgrGL: {
                                        children: h(c, {
                                          children: h(w.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Q1VTVE9NVjI7S2FzaW5kcmF5IFJlZ3VsYXI=`,
                                              "--framer-font-family": `"Kasindray Regular", "Kasindray Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `56px`,
                                              "--framer-letter-spacing": `-0.04em`,
                                              "--framer-line-height": `0.8em`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `HAPPIPOLA`,
                                          }),
                                        }),
                                      },
                                    },
                                    _,
                                    x
                                  ),
                                }),
                                h(O, {
                                  __fromCanvasComponent: !0,
                                  children: h(c, {
                                    children: h(w.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                        "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `Fuel your performance with next-generation energy drinks`,
                                    }),
                                  }),
                                  className: `framer-6qlqjr`,
                                  fonts: [`CUSTOMV2;Rodger Test Regular`],
                                  layoutDependency: E,
                                  layoutId: `Glbs1B3e1`,
                                  style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...jc(
                                    {
                                      xFRCFMupe: {
                                        children: h(c, {
                                          children: h(w.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                              "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Fuel your performance with next-generation energy drinks`,
                                          }),
                                        }),
                                      },
                                      XknOEgrGL: {
                                        children: h(c, {
                                          children: h(w.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgUmVndWxhcg==`,
                                              "--framer-font-family": `"Rodger Test Regular", "Rodger Test Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Fuel your performance with next-generation energy drinks`,
                                          }),
                                        }),
                                      },
                                    },
                                    _,
                                    x
                                  ),
                                }),
                              ],
                            }),
                            b(w.div, {
                              className: `framer-1gycx1l`,
                              "data-framer-name": `Heading`,
                              layoutDependency: E,
                              layoutId: `vuypfWX51`,
                              children: [
                                h(w.div, {
                                  className: `framer-1jezym4`,
                                  layoutDependency: E,
                                  layoutId: `M2J7TkuNI`,
                                  children: b(R, {
                                    className: `framer-14thrxi`,
                                    layoutDependency: E,
                                    layoutId: `O83wvK1RI`,
                                    requiresOverflowVisible: !0,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><g><path d="M 0 17 C 0 8.985 0 4.979 2.49 2.49 C 4.979 0 8.987 0 17 0 C 25.015 0 29.021 0 31.51 2.49 C 34 4.979 34 8.987 34 17 C 34 25.015 34 29.021 31.51 31.51 C 29.021 34 25.013 34 17 34 C 8.985 34 4.979 34 2.49 31.51 C 0 29.021 0 25.013 0 17 Z" fill="transparent" stroke-width="3" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 24.556 17 C 24.556 21.173 21.173 24.556 17 24.556 C 12.827 24.556 9.444 21.173 9.444 17 C 9.444 12.827 12.827 9.444 17 9.444 C 21.173 9.444 24.556 12.827 24.556 17 Z M 27.153 7.083 L 26.917 7.083 M 27.389 7.083 C 27.389 7.344 27.177 7.556 26.917 7.556 C 26.656 7.556 26.444 7.344 26.444 7.083 C 26.444 6.823 26.656 6.611 26.917 6.611 C 27.177 6.611 27.389 6.823 27.389 7.083 Z" fill="transparent" stroke-width="3" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      h(R, {
                                        className: `framer-7t8wkz`,
                                        layoutDependency: E,
                                        layoutId: `bXzfi1ZTB`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" overflow="visible"><path d="M 0 17 C 0 8.985 0 4.979 2.49 2.49 C 4.979 0 8.987 0 17 0 C 25.015 0 29.021 0 31.51 2.49 C 34 4.979 34 8.987 34 17 C 34 25.015 34 29.021 31.51 31.51 C 29.021 34 25.013 34 17 34 C 8.985 34 4.979 34 2.49 31.51 C 0 29.021 0 25.013 0 17 Z" fill="transparent" stroke-width="3" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      b(R, {
                                        className: `framer-18l9tcg`,
                                        layoutDependency: E,
                                        layoutId: `qHIP1zaaR`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.944 17.944" overflow="visible"><path d="M 15.111 10.389 C 15.111 14.562 11.728 17.944 7.556 17.944 C 3.383 17.944 0 14.562 0 10.389 C 0 6.216 3.383 2.833 7.556 2.833 C 11.728 2.833 15.111 6.216 15.111 10.389 Z M 17.708 0.472 L 17.472 0.472 M 17.944 0.472 C 17.944 0.733 17.733 0.944 17.472 0.944 C 17.211 0.944 17 0.733 17 0.472 C 17 0.211 17.211 0 17.472 0 C 17.733 0 17.944 0.211 17.944 0.472 Z" fill="transparent" stroke-width="3" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          h(R, {
                                            className: `framer-1bfzt49`,
                                            layoutDependency: E,
                                            layoutId: `scELr5Cg3`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.111 15.111" overflow="visible"><path d="M 15.111 7.556 C 15.111 11.728 11.728 15.111 7.556 15.111 C 3.383 15.111 0 11.728 0 7.556 C 0 3.383 3.383 0 7.556 0 C 11.728 0 15.111 3.383 15.111 7.556 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          h(R, {
                                            className: `framer-8ewldn`,
                                            layoutDependency: E,
                                            layoutId: `RCtUlTOcr`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.236 0 L 0 0" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          h(R, {
                                            className: `framer-18ty9eh`,
                                            layoutDependency: E,
                                            layoutId: `mKFAkfrZ6`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.944 0.472 C 0.944 0.733 0.733 0.944 0.472 0.944 C 0.211 0.944 0 0.733 0 0.472 C 0 0.211 0.211 0 0.472 0 C 0.733 0 0.944 0.211 0.944 0.472 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                h(w.div, {
                                  className: `framer-25pji3`,
                                  layoutDependency: E,
                                  layoutId: `iWXMDTFma`,
                                  children: h(R, {
                                    className: `framer-11uk6wg`,
                                    layoutDependency: E,
                                    layoutId: `Sj3yf3vXl`,
                                    requiresOverflowVisible: !0,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 34.286" overflow="visible"><path d="M 2.026 14.285 C 0.35 14.285 0 14.614 0 16.19 L 0 19.047 C 0 20.625 0.35 20.952 2.026 20.952 L 6.077 20.952 L 6.077 32.381 C 6.077 33.958 6.429 34.286 8.103 34.286 L 12.156 34.286 C 13.833 34.286 14.182 33.957 14.182 32.381 L 14.182 20.952 L 18.732 20.952 C 20.002 20.952 20.33 20.721 20.679 19.57 L 21.549 16.714 C 22.147 14.745 21.777 14.285 19.599 14.285 L 14.182 14.285 L 14.182 9.525 C 14.182 8.472 15.089 7.618 16.207 7.618 L 21.974 7.618 C 23.65 7.618 24 7.291 24 5.715 L 24 1.903 C 24 0.327 23.65 0 21.974 0 L 16.207 0 C 10.613 0 6.077 4.263 6.077 9.525 L 6.077 14.285 Z" fill="transparent" stroke-width="3" stroke="rgb(255, 255, 255)" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        b(w.div, {
                          className: `framer-1jj3bk6`,
                          layoutDependency: E,
                          layoutId: `ZZd_m0fzH`,
                          children: [
                            b(w.div, {
                              className: `framer-1f8w2gx`,
                              "data-framer-name": `Heading`,
                              layoutDependency: E,
                              layoutId: `gajXjbLuP`,
                              children: [
                                h(w.label, {
                                  className: `framer-10acibz`,
                                  layoutDependency: E,
                                  layoutId: `ijWRX_U3n`,
                                  children: h(de, {
                                    className: `framer-l46bl4`,
                                    inputName: `Email`,
                                    layoutDependency: E,
                                    layoutId: `Q_lbyna_9`,
                                    placeholder: `Email`,
                                    style: {
                                      "--framer-input-background": `rgba(255, 255, 255, 0.8)`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `rgba(136, 136, 136, 0.1)`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `10px`,
                                      "--framer-input-border-radius-bottom-right": `10px`,
                                      "--framer-input-border-radius-top-left": `10px`,
                                      "--framer-input-border-radius-top-right": `10px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `rgb(26, 26, 26)`,
                                      "--framer-input-icon-mask-image": `none`,
                                      "--framer-input-placeholder-color": `rgb(26, 26, 26)`,
                                    },
                                    type: `email`,
                                  }),
                                }),
                                h(P, {
                                  height: 40,
                                  width: `max((min(max(${l?.width || `100vw`}, 1px), 1400px) - 180px) * 0.4118, 1px)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    (((l?.height || 426) - 0 - 909.2) / 2 + 0 + 0) +
                                    0 +
                                    60 +
                                    444 +
                                    0 +
                                    0 +
                                    60,
                                  ...jc(
                                    {
                                      xFRCFMupe: {
                                        width: `calc(min(max(${l?.width || `100vw`}, 1px), 400px) - 40px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 520) - 0 - 1110) / 2 + 0 + 0) +
                                          0 +
                                          20 +
                                          366 +
                                          0 +
                                          0 +
                                          0 +
                                          60,
                                      },
                                      XknOEgrGL: {
                                        width: `max((min(max(${l?.width || `100vw`}, 1px), 810px) - 140px) * 0.4118, 1px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 399) - 0 - 804.4) / 2 + 0 + 0) +
                                          0 +
                                          60 +
                                          368 +
                                          0 +
                                          0 +
                                          60,
                                      },
                                    },
                                    _,
                                    x
                                  ),
                                  children: h(N, {
                                    className: `framer-yco2sn-container`,
                                    layoutDependency: E,
                                    layoutId: `XCTsRNPcg-container`,
                                    nodeId: `XCTsRNPcg`,
                                    rendersWithMotion: !0,
                                    scopeId: `B5ddvGOsq`,
                                    children: h(kc, {
                                      height: `100%`,
                                      id: `XCTsRNPcg`,
                                      layoutId: `XCTsRNPcg`,
                                      mzpubBS3e: `rgb(0, 0, 0)`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Rc(`FWAsulbQy`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            h(w.div, {
                              className: `framer-4bq85i`,
                              "data-framer-name": `Main`,
                              layoutDependency: E,
                              layoutId: `oyBXRIay5`,
                              children: b(w.div, {
                                className: `framer-12yb09c`,
                                "data-framer-name": `Container`,
                                layoutDependency: E,
                                layoutId: `ikVFabdDA`,
                                children: [
                                  h(w.div, {
                                    className: `framer-1runo8b`,
                                    "data-framer-name": `Navigation`,
                                    layoutDependency: E,
                                    layoutId: `k6JG8Tl1u`,
                                    children: b(w.div, {
                                      className: `framer-8kg11l`,
                                      "data-framer-name": `Container`,
                                      layoutDependency: E,
                                      layoutId: `v35UbmCMk`,
                                      children: [
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: h(I, {
                                                href: { webPageId: `Jt77tlfGm` },
                                                motionChild: !0,
                                                nodeId: `geGjKxQ3J`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !1,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `Home`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1yxt2nu`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `geGjKxQ3J`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `Jt77tlfGm` },
                                                      motionChild: !0,
                                                      nodeId: `geGjKxQ3J`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Home`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `Jt77tlfGm` },
                                                      motionChild: !0,
                                                      nodeId: `geGjKxQ3J`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Home`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: h(I, {
                                                href: { webPageId: `ZJAgdtRCX` },
                                                motionChild: !0,
                                                nodeId: `dWYirqIHG`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !0,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `About`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1mv0yvg`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `dWYirqIHG`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `ZJAgdtRCX` },
                                                      motionChild: !0,
                                                      nodeId: `dWYirqIHG`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !0,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `About`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `ZJAgdtRCX` },
                                                      motionChild: !0,
                                                      nodeId: `dWYirqIHG`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !0,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `About`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: h(I, {
                                                href: { webPageId: `xeQipBlZ1` },
                                                motionChild: !0,
                                                nodeId: `m7hFuyQBk`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !1,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `Products`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-gs3039`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `m7hFuyQBk`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `xeQipBlZ1` },
                                                      motionChild: !0,
                                                      nodeId: `m7hFuyQBk`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Products`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `xeQipBlZ1` },
                                                      motionChild: !0,
                                                      nodeId: `m7hFuyQBk`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Products`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: h(I, {
                                                href: { webPageId: `ZJAgdtRCX` },
                                                motionChild: !0,
                                                nodeId: `M1sJqw_HY`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !0,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `Reviews`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1lhtgll`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `M1sJqw_HY`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `ZJAgdtRCX` },
                                                      motionChild: !0,
                                                      nodeId: `M1sJqw_HY`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !0,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Reviews`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                    },
                                                    children: h(I, {
                                                      href: { webPageId: `ZJAgdtRCX` },
                                                      motionChild: !0,
                                                      nodeId: `M1sJqw_HY`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !0,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Reviews`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  h(w.div, {
                                    className: `framer-1xa6toj`,
                                    "data-framer-name": `Policies`,
                                    layoutDependency: E,
                                    layoutId: `Xa1Pmju7i`,
                                    children: b(w.div, {
                                      className: `framer-1guyqkr`,
                                      "data-framer-name": `Container`,
                                      layoutDependency: E,
                                      layoutId: `A1fm1l28L`,
                                      children: [
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                              },
                                              children: h(I, {
                                                href: {
                                                  pathVariables: { qLOHvls_p: `privacy-policy` },
                                                  unresolvedPathSlugs: {
                                                    qLOHvls_p: {
                                                      collectionId: `UbsOPWlc8`,
                                                      collectionItemId: `Y2Ag8AKAa`,
                                                    },
                                                  },
                                                  webPageId: `CwHOwJrAs`,
                                                },
                                                motionChild: !0,
                                                nodeId: `ur4LlKlZs`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !1,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `Privacy Policy`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-8fxolo`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `ur4LlKlZs`,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: h(I, {
                                                      href: {
                                                        pathVariables: {
                                                          qLOHvls_p: `privacy-policy`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          qLOHvls_p: {
                                                            collectionId: `UbsOPWlc8`,
                                                            collectionItemId: `Y2Ag8AKAa`,
                                                          },
                                                        },
                                                        webPageId: `CwHOwJrAs`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `ur4LlKlZs`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Privacy Policy`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: h(I, {
                                                      href: {
                                                        pathVariables: {
                                                          qLOHvls_p: `privacy-policy`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          qLOHvls_p: {
                                                            collectionId: `UbsOPWlc8`,
                                                            collectionItemId: `Y2Ag8AKAa`,
                                                          },
                                                        },
                                                        webPageId: `CwHOwJrAs`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `ur4LlKlZs`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Privacy Policy`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                              },
                                              children: h(I, {
                                                href: {
                                                  pathVariables: { qLOHvls_p: `shipping-policy` },
                                                  unresolvedPathSlugs: {
                                                    qLOHvls_p: {
                                                      collectionId: `UbsOPWlc8`,
                                                      collectionItemId: `pW70o4xdR`,
                                                    },
                                                  },
                                                  webPageId: `CwHOwJrAs`,
                                                },
                                                motionChild: !0,
                                                nodeId: `hyvDGx_u9`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !1,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `Shipping Policy`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1dafbgc`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `hyvDGx_u9`,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: h(I, {
                                                      href: {
                                                        pathVariables: {
                                                          qLOHvls_p: `shipping-policy`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          qLOHvls_p: {
                                                            collectionId: `UbsOPWlc8`,
                                                            collectionItemId: `pW70o4xdR`,
                                                          },
                                                        },
                                                        webPageId: `CwHOwJrAs`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `hyvDGx_u9`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Shipping Policy`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: h(I, {
                                                      href: {
                                                        pathVariables: {
                                                          qLOHvls_p: `shipping-policy`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          qLOHvls_p: {
                                                            collectionId: `UbsOPWlc8`,
                                                            collectionItemId: `pW70o4xdR`,
                                                          },
                                                        },
                                                        webPageId: `CwHOwJrAs`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `hyvDGx_u9`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Shipping Policy`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                        h(O, {
                                          __fromCanvasComponent: !0,
                                          children: h(c, {
                                            children: h(w.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `700`,
                                              },
                                              children: h(I, {
                                                href: {
                                                  pathVariables: {
                                                    qLOHvls_p: `terms-and-conditions`,
                                                  },
                                                  unresolvedPathSlugs: {
                                                    qLOHvls_p: {
                                                      collectionId: `UbsOPWlc8`,
                                                      collectionItemId: `QIoBBxyN0`,
                                                    },
                                                  },
                                                  webPageId: `CwHOwJrAs`,
                                                },
                                                motionChild: !0,
                                                nodeId: `WXQOyf23y`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `B5ddvGOsq`,
                                                smoothScroll: !1,
                                                children: h(w.a, {
                                                  className: `framer-styles-preset-1gqgeaa`,
                                                  "data-styles-preset": `MtmYZaZrJ`,
                                                  children: `Terms & Conditions`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-6vem2g`,
                                          fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                                          layoutDependency: E,
                                          layoutId: `WXQOyf23y`,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...jc(
                                            {
                                              xFRCFMupe: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: h(I, {
                                                      href: {
                                                        pathVariables: {
                                                          qLOHvls_p: `terms-and-conditions`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          qLOHvls_p: {
                                                            collectionId: `UbsOPWlc8`,
                                                            collectionItemId: `QIoBBxyN0`,
                                                          },
                                                        },
                                                        webPageId: `CwHOwJrAs`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `WXQOyf23y`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Terms & Conditions`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              XknOEgrGL: {
                                                children: h(c, {
                                                  children: h(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                                      "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                                      "--framer-font-size": `18px`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: h(I, {
                                                      href: {
                                                        pathVariables: {
                                                          qLOHvls_p: `terms-and-conditions`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          qLOHvls_p: {
                                                            collectionId: `UbsOPWlc8`,
                                                            collectionItemId: `QIoBBxyN0`,
                                                          },
                                                        },
                                                        webPageId: `CwHOwJrAs`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `WXQOyf23y`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `B5ddvGOsq`,
                                                      smoothScroll: !1,
                                                      children: h(w.a, {
                                                        className: `framer-styles-preset-1gqgeaa`,
                                                        "data-styles-preset": `MtmYZaZrJ`,
                                                        children: `Terms & Conditions`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        h(P, {
                          children: h(N, {
                            className: `framer-1vt7ype-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: E,
                            layoutId: `iAxVD3WFf-container`,
                            nodeId: `iAxVD3WFf`,
                            rendersWithMotion: !0,
                            scopeId: `B5ddvGOsq`,
                            children: h(sc, {
                              alignment: `left`,
                              blockLayout: !1,
                              font: {
                                fontFamily: `"Rodger Test Medium", "Rodger Test Medium Placeholder", sans-serif`,
                                fontSize: `16px`,
                                fontStyle: `normal`,
                                fontWeight: 500,
                                letterSpacing: `0em`,
                                lineHeight: `1.5em`,
                              },
                              height: `100%`,
                              id: `iAxVD3WFf`,
                              layoutId: `iAxVD3WFf`,
                              linkStyle: `underline`,
                              linkText: ``,
                              name: ``,
                              openInNewTab: !0,
                              prefix: ``,
                              showLink: !1,
                              startYear: 2024,
                              statement: `All rights reserved.`,
                              suffix: ``,
                              symbolType: `copyright`,
                              textColor: `rgb(255, 255, 255)`,
                              useDateRange: !1,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-xLQ0A.framer-gp8rsi, .framer-xLQ0A .framer-gp8rsi { display: block; }`,
          `.framer-xLQ0A.framer-vx8bzb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1300px; }`,
          `.framer-xLQ0A .framer-1cjnbnr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-16xs254 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1400px; padding: 60px 60px 20px 60px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-1tkcdqt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 20px 0px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-1l3o1fp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-1geqxfj { flex: none; height: auto; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xLQ0A .framer-6qlqjr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xLQ0A .framer-1gycx1l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-1jezym4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; }`,
          `.framer-xLQ0A .framer-14thrxi { height: 34px; position: relative; width: 34px; }`,
          `.framer-xLQ0A .framer-7t8wkz { height: 34px; left: 0px; position: absolute; top: 0px; width: 34px; }`,
          `.framer-xLQ0A .framer-18l9tcg { height: 18px; left: 10px; position: absolute; top: 7px; width: 18px; }`,
          `.framer-xLQ0A .framer-1bfzt49 { height: 15px; left: 0px; position: absolute; top: 3px; width: 15px; }`,
          `.framer-xLQ0A .framer-8ewldn { height: 1px; left: 18px; position: absolute; top: 1px; width: 1px; }`,
          `.framer-xLQ0A .framer-18ty9eh { height: 1px; left: 17px; position: absolute; top: 0px; width: 1px; }`,
          `.framer-xLQ0A .framer-25pji3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; }`,
          `.framer-xLQ0A .framer-11uk6wg { height: 35px; position: relative; width: 24px; }`,
          `.framer-xLQ0A .framer-1jj3bk6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 20px 0px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-1f8w2gx { align-content: center; align-items: center; display: flex; flex: 0.7 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-10acibz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-l46bl4 { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Rodger Test Regular"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-yco2sn-container { flex: none; height: 40px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-4bq85i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-12yb09c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-1runo8b { align-content: center; align-items: center; display: flex; flex: 0.75 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-8kg11l, .framer-xLQ0A .framer-1guyqkr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-xLQ0A .framer-1yxt2nu, .framer-xLQ0A .framer-1mv0yvg, .framer-xLQ0A .framer-gs3039, .framer-xLQ0A .framer-1lhtgll, .framer-xLQ0A .framer-8fxolo, .framer-xLQ0A .framer-1dafbgc, .framer-xLQ0A .framer-6vem2g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-xLQ0A .framer-1xa6toj { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-xLQ0A .framer-1vt7ype-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-xLQ0A.framer-v-klvnho.framer-vx8bzb { width: 810px; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-16xs254 { max-width: 810px; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-1tkcdqt, .framer-xLQ0A.framer-v-klvnho .framer-1jj3bk6 { gap: 20px; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-1l3o1fp, .framer-xLQ0A.framer-v-klvnho .framer-1gycx1l { flex: 0.7 0 0px; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-1geqxfj { max-width: unset; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-12yb09c { align-content: flex-start; align-items: flex-start; gap: 30px; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-8kg11l, .framer-xLQ0A.framer-v-1wys1u .framer-8kg11l { width: min-content; }`,
          `.framer-xLQ0A.framer-v-klvnho .framer-8fxolo, .framer-xLQ0A.framer-v-klvnho .framer-1dafbgc, .framer-xLQ0A.framer-v-klvnho .framer-6vem2g { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xLQ0A.framer-v-1wys1u.framer-vx8bzb { width: 390px; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-16xs254 { gap: 40px; max-width: 400px; padding: 20px; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-1tkcdqt, .framer-xLQ0A.framer-v-1wys1u .framer-1jj3bk6 { flex-direction: column; gap: 20px; padding: 0px; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-1l3o1fp, .framer-xLQ0A.framer-v-1wys1u .framer-1f8w2gx, .framer-xLQ0A.framer-v-1wys1u .framer-4bq85i { flex: none; width: 100%; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-1gycx1l { flex: none; justify-content: flex-start; width: 100%; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-12yb09c { align-content: flex-start; align-items: flex-start; gap: 20px; justify-content: flex-start; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-1runo8b { align-content: flex-start; align-items: flex-start; justify-content: flex-start; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-1xa6toj { align-content: flex-start; align-items: flex-start; align-self: unset; height: min-content; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-8fxolo { order: 0; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-1dafbgc { order: 1; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xLQ0A.framer-v-1wys1u .framer-6vem2g { order: 2; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...uc,
        ],
        `framer-xLQ0A`
      )),
      (Gc = Wc),
      (Wc.displayName = `Footer`),
      (Wc.defaultProps = { height: 426, width: 1300 }),
      k(Wc, {
        variant: {
          options: [`OVA153bdM`, `XknOEgrGL`, `xFRCFMupe`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: L.Enum,
        },
        EpcDfJqqJ: {
          defaultValue: `var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58)) /* {"name":"Primary"} */`,
          title: `Fill`,
          type: L.Color,
        },
      }),
      A(
        Wc,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Kasindray Regular`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Kasindray`,
                url: `../../assets/fonts/rMf2Vt5nenuMWpYc0CvnyKXUJQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Rodger Test Regular`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Rodger Test`,
                url: `../../assets/fonts/CHHEgiPutcka3RZ3CakKwm3uQGc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Mona Sans Condensed Bold`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Mona Sans Condensed`,
                url: `../../assets/fonts/6iwC6STWvic4aW9ENkaXYx1Abto.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Rodger Test Medium`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Rodger Test`,
                url: `../../assets/fonts/VYqVfZiXh1pMTaGoOh0lQEOWiQ.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Mc,
          ...Nc,
          ...ie(lc),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Wc.loader = { load: (e, t) => (t.locale, Promise.allSettled([se(kc, {}, t)])) }));
  });
export {
  ei as $,
  Bi as A,
  Ci as B,
  ga as C,
  Gi as D,
  Wi as E,
  ji as F,
  Si as G,
  vi as H,
  Ni as I,
  ri as J,
  fi as K,
  Li as L,
  Fi as M,
  Ii as N,
  Hi as O,
  Pi as P,
  oi as Q,
  Oi as R,
  _a as S,
  qi as T,
  yi as U,
  wi as V,
  xi as W,
  ii as X,
  ni as Y,
  ai as Z,
  io as _,
  Co as a,
  Gr as at,
  Ha as b,
  Eo as c,
  Vr as ct,
  mo as d,
  Mr as dt,
  ti as et,
  ho as f,
  ur as ft,
  ro as g,
  so as h,
  oc as i,
  Kr as it,
  Vi as j,
  Ui as k,
  go as l,
  Hr as lt,
  oo as m,
  Kc as n,
  Zr as nt,
  So as o,
  qr as ot,
  ao as p,
  lr as pt,
  mi as q,
  ac as r,
  Qr as rt,
  To as s,
  Y as st,
  Gc as t,
  $r as tt,
  _o as u,
  Lr as ut,
  Qa as v,
  Ki as w,
  Ba as x,
  $a as y,
  ki as z,
};
//# sourceMappingURL=B5ddvGOsq.CArgs3WN.mjs.map
