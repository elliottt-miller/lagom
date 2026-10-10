import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  F as r,
  I as i,
  M as a,
  N as o,
  P as s,
  T as c,
  V as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  k as _,
  l as v,
  m as y,
  n as b,
  o as x,
  p as S,
  r as ee,
  s as te,
  t as C,
  u as w,
  y as T,
  z as E,
} from "./react.BSDwOlon.mjs";
import { S as D, a as O, n as ne, r as k, t as A } from "./motion.CxF0nSu_.mjs";
import {
  A as j,
  At as re,
  C as ie,
  D as M,
  Dt as N,
  E as P,
  Et as ae,
  F,
  H as oe,
  It as se,
  J as ce,
  Mt as le,
  N as I,
  Nt as ue,
  P as de,
  Q as fe,
  T as L,
  U as pe,
  V as R,
  X as z,
  Y as B,
  a as me,
  at as he,
  ct as ge,
  d as _e,
  dt as ve,
  et as ye,
  f as be,
  ft as xe,
  g as V,
  h as Se,
  ht as Ce,
  i as H,
  it as we,
  k as U,
  lt as Te,
  nt as Ee,
  o as W,
  p as De,
  pt as Oe,
  q as ke,
  s as Ae,
  st as je,
  u as Me,
  v as Ne,
  vt as G,
  w as Pe,
  wt as Fe,
  x as Ie,
  xt as Le,
  y as Re,
} from "./framer.qahQ4u2X.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./Bg6moUAf0.CGQMS69i.mjs";
import { a as Ue, i as We, o as Ge, r as Ke } from "./shared-lib.C3NetiJi.mjs";
import { S as qe, n as Je, t as Ye, w as Xe } from "./us_cwshCV.CrnwM77I.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./YY88YzDKP.B2F3zyHB.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./KRUEduuRo.CVOp9RB9.mjs";
function at(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft = e(() => {
    (E(),
      (ot = class {
        constructor() {
          ((this.isRunning = !1),
            (this.value = 0),
            (this.from = 0),
            (this.to = 0),
            (this.duration = 0),
            (this.currentTime = 0));
        }
        advance(e) {
          var t;
          if (!this.isRunning) return;
          let n = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let t = at(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            let r = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = (function (e, t, n, r) {
                  return (function (e, t, n) {
                    return (1 - n) * e + n * t;
                  })(e, t, 1 - Math.exp(-n * r));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (n = !0)))
              : ((this.value = this.to), (n = !0));
          (n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (st = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.width = 0),
            (this.height = 0),
            (this.scrollWidth = 0),
            (this.scrollHeight = 0),
            (this.resize = () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            (this.onWrapperResize = () => {
              this.wrapper === l
                ? ((this.width = l.innerWidth), (this.height = l.innerHeight))
                : this.wrapper instanceof HTMLElement &&
                  ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              this.wrapper === l
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : this.wrapper instanceof HTMLElement &&
                  ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === l
                ? l.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          var e, t;
          ((e = this.wrapperResizeObserver) == null || e.disconnect(),
            (t = this.contentResizeObserver) == null || t.disconnect(),
            l.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (ct = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          var n;
          return (
            ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (lt = 100 / 6),
      (ut = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.lastDelta = { x: 0, y: 0 }),
            (this.windowWidth = 0),
            (this.windowHeight = 0),
            (this.onTouchStart = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            (this.onTouchMove = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - (this.touchStart?.x ?? 0)) * this.touchMultiplier,
                i = -(n - (this.touchStart?.y ?? 0)) * this.touchMultiplier;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: r, y: i }),
                this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
            }),
            (this.onTouchEnd = (e) => {
              this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e,
              });
            }),
            (this.onWheel = (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e;
              ((t *= r === 1 ? lt : r === 2 ? this.windowWidth : 1),
                (n *= r === 1 ? lt : r === 2 ? this.windowHeight : 1),
                (t *= this.wheelMultiplier),
                (n *= this.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            (this.onWindowResize = () => {
              ((this.windowWidth = l.innerWidth), (this.windowHeight = l.innerHeight));
            }),
            (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new ct()),
            l.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            l.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel),
            this.element.removeEventListener(`touchstart`, this.onTouchStart),
            this.element.removeEventListener(`touchmove`, this.onTouchMove),
            this.element.removeEventListener(`touchend`, this.onTouchEnd));
        }
      }),
      (dt = class {
        constructor({
          wrapper: e = l,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = 0.1,
          infinite: f = !1,
          orientation: p = `vertical`,
          gestureOrientation: m = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v,
          virtualScroll: y,
          __experimental__naiveDimensions: b = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.onPointerDown = (e) => {
              e.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (e) => {
              if (
                typeof this.options.virtualScroll == `function` &&
                !1 === this.options.virtualScroll(e)
              )
                return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if (
                (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey)
              )
                return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                ((this.isTouching = r.type === `touchstart` || r.type === `touchmove`),
                this.options.syncTouch &&
                  i &&
                  r.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let o = t === 0 && n === 0,
                s =
                  (this.options.gestureOrientation === `vertical` && n === 0) ||
                  (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                c.find(
                  (e) =>
                    e instanceof Element &&
                    ((typeof l == `function` && l?.(e)) ||
                      e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                      (i && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                      (a && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                      (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`)))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void r.preventDefault();
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              r.preventDefault();
              let u = n;
              this.options.gestureOrientation === `both`
                ? (u = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (u = t);
              let d = i && this.options.syncTouch,
                f = i && r.type === `touchend` && Math.abs(u) > 5;
              (f && (u = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + u,
                  Object.assign(
                    { programmatic: !1 },
                    d
                      ? { lerp: f ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (l.lenisVersion = `1.1.9`),
            (e && e !== document.documentElement && e !== document.body) || (e = l),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: m,
              orientation: p,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              virtualScroll: y,
              __experimental__naiveDimensions: b,
            }),
            (this.animate = new ot()),
            (this.emitter = new ct()),
            (this.dimensions = new st({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new ut(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: s,
            onComplete: c,
            force: u = !1,
            programmatic: d = !0,
            userData: f = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e instanceof HTMLElement && e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== l) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (
              typeof e == `number` &&
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = at(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = f), n))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  c?.(this),
                  void (this.userData = {})
                );
              (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        c?.(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            }));
        }
        get rootElement() {
          return this.options.wrapper === l ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function pt(e) {
  let { intensity: t } = e,
    n = _(null);
  return (
    s(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    s(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    s(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = l.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    s(() => {
      try {
        if (typeof dt != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new dt({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    s(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(l.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = l.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var mt,
  ht = e(() => {
    (E(),
      x(),
      B(),
      ft(),
      c(),
      (mt = N(
        pt,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (mt.displayName = `Smooth Scroll`),
      j(mt, {
        intensity: {
          title: `Intensity`,
          type: W.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  K,
  Ct = e(() => {
    (x(),
      B(),
      A(),
      c(),
      ze(),
      (gt = `framer-7MDPX`),
      (_t = { eZqRjt8hy: `framer-v-18hf9oe` }),
      (vt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yt = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (bt = D.create(r)),
      (xt = ({ height: e, id: t, link: n, newTab: r, title: i, width: a, ...o }) => ({
        ...o,
        fa2gnxgOw: n ?? o.fa2gnxgOw,
        He3nGh8Cb: r ?? o.He3nGh8Cb,
        QuN6EdU93: i ?? o.QuN6EdU93 ?? `About`,
      })),
      (St = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = N(
        p(function (e, t) {
          let n = _(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = G();
          Te();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              QuN6EdU93: p,
              He3nGh8Cb: m,
              fa2gnxgOw: h,
              ...g
            } = xt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: te,
              setVariant: C,
              variants: w,
            } = ae({ defaultVariant: `eZqRjt8hy`, ref: i, variant: d, variantClassNames: _t }),
            E = St(e, w),
            O = I(gt, He);
          return f(k, {
            id: u ?? a,
            children: f(bt, {
              animate: w,
              initial: !1,
              children: f(yt, {
                value: vt,
                children: f(V, {
                  href: h,
                  motionChild: !0,
                  nodeId: `eZqRjt8hy`,
                  openInNewTab: m,
                  scopeId: `Hx8be4_5T`,
                  smoothScroll: !0,
                  children: f(D.a, {
                    ...g,
                    ...x,
                    className: `${I(O, `framer-18hf9oe`, l, y)} framer-9nxiqy`,
                    "data-framer-name": `Mobile`,
                    layoutDependency: E,
                    layoutId: `eZqRjt8hy`,
                    ref: i,
                    style: { ...c },
                    children: f(P, {
                      __fromCanvasComponent: !0,
                      children: f(r, {
                        children: f(D.p, {
                          className: `framer-styles-preset-i9bl33`,
                          "data-styles-preset": `Bg6moUAf0`,
                          dir: `auto`,
                          children: `About`,
                        }),
                      }),
                      className: `framer-o9icb6`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `BwwLY5BF3`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: p,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-7MDPX.framer-9nxiqy, .framer-7MDPX .framer-9nxiqy { display: block; }`,
          `.framer-7MDPX.framer-18hf9oe { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-7MDPX .framer-o9icb6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Be,
        ],
        `framer-7MDPX`
      )),
      (K.displayName = `Button Menu Mobile`),
      (K.defaultProps = { height: 90, width: 260 }),
      j(K, {
        QuN6EdU93: { defaultValue: `About`, displayTextArea: !1, title: `Title`, type: W.String },
        onQuN6EdU93Change: { changes: `QuN6EdU93`, type: W.ChangeHandler },
        He3nGh8Cb: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
        onHe3nGh8CbChange: { changes: `He3nGh8Cb`, type: W.ChangeHandler },
        fa2gnxgOw: { title: `Link`, type: W.Link },
      }),
      U(
        K,
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
          ...oe(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  q,
  Pt = e(() => {
    (x(),
      B(),
      A(),
      c(),
      (Tt = [`HC7K01rFg`, `RUiLoNbaB`]),
      (Et = `framer-MIM0d`),
      (Dt = { HC7K01rFg: `framer-v-llfr8`, RUiLoNbaB: `framer-v-5w1fnx` }),
      (Ot = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kt = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (At = { "Phone - Close": `RUiLoNbaB`, "Phone - Open": `HC7K01rFg` }),
      (jt = D.create(r)),
      (Mt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: At[i.variant] ?? i.variant ?? `HC7K01rFg`,
        vMnQjlfaC: e ?? i.vMnQjlfaC,
      })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = N(
        p(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: o } = G();
          Te();
          let { style: s, className: c, layoutId: l, variant: u, vMnQjlfaC: d, ...p } = Mt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: ee,
              variants: te,
            } = ae({
              cycleOrder: Tt,
              defaultVariant: `HC7K01rFg`,
              ref: r,
              variant: u,
              variantClassNames: Dt,
            }),
            C = Nt(e, te),
            { activeVariantCallback: w, delay: E } = ge(m),
            O = w(async (...e) => {
              if ((S({ isPressed: !1 }), d && (await d(...e)) === !1)) return !1;
            }),
            ne = I(Et);
          return f(k, {
            id: l ?? i,
            children: f(jt, {
              animate: te,
              initial: !1,
              children: f(kt, {
                value: Ot,
                children: v(D.button, {
                  ...p,
                  ...y,
                  className: I(ne, `framer-llfr8`, c, h),
                  "data-framer-name": `Phone - Open`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: C,
                  layoutId: `HC7K01rFg`,
                  onTap: O,
                  ref: r,
                  style: { ...s },
                  ...wt({ RUiLoNbaB: { "data-framer-name": `Phone - Close` } }, m, b),
                  children: [
                    f(D.div, {
                      className: `framer-s4q8n0`,
                      "data-framer-name": `Line`,
                      layoutDependency: C,
                      layoutId: `yk9VDj9QP`,
                      style: {
                        backgroundColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        rotate: 0,
                      },
                      variants: { RUiLoNbaB: { rotate: 45 } },
                    }),
                    f(D.div, {
                      className: `framer-i0uw28`,
                      "data-framer-name": `Line`,
                      layoutDependency: C,
                      layoutId: `Hdy5WsUwH`,
                      style: {
                        backgroundColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        opacity: 1,
                      },
                      variants: { RUiLoNbaB: { opacity: 0 } },
                    }),
                    f(D.div, {
                      className: `framer-12zn142`,
                      "data-framer-name": `Line`,
                      layoutDependency: C,
                      layoutId: `rzwr5wE3j`,
                      style: {
                        backgroundColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        rotate: 0,
                      },
                      variants: { RUiLoNbaB: { rotate: -45 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-MIM0d.framer-qa08dh, .framer-MIM0d .framer-qa08dh { display: block; }`,
          `.framer-MIM0d.framer-llfr8 { cursor: pointer; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; }`,
          `.framer-MIM0d .framer-s4q8n0 { bottom: 6px; flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MIM0d .framer-i0uw28 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MIM0d .framer-12zn142 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 6px; width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MIM0d.framer-v-5w1fnx .framer-s4q8n0 { bottom: 11px; }`,
          `.framer-MIM0d.framer-v-5w1fnx .framer-i0uw28 { left: calc(50.00000000000002% - 1px / 2); width: 1px; }`,
          `.framer-MIM0d.framer-v-5w1fnx .framer-12zn142 { top: 11px; }`,
        ],
        `framer-MIM0d`
      )),
      (q.displayName = `Icon Mobile`),
      (q.defaultProps = { height: 24, width: 24 }),
      j(q, {
        variant: {
          options: [`HC7K01rFg`, `RUiLoNbaB`],
          optionTitles: [`Phone - Open`, `Phone - Close`],
          title: `Variant`,
          type: W.Enum,
        },
        vMnQjlfaC: { title: `Click`, type: W.EventHandler },
      }),
      U(q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
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
  J,
  en = e(() => {
    (x(),
      B(),
      A(),
      c(),
      Ct(),
      Pt(),
      (Ft = le(re(D.div))),
      (It = R(K)),
      (Lt = le(re(M))),
      (Rt = R(q)),
      (zt = `framer-CNb9k`),
      (Bt = { Z7T2ubUu2: `framer-v-1vg1xbl` }),
      (Vt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ht = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Ut = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Wt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.4, duration: 0.4, ease: [0.12, 0.23, 0, 1.22], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Gt = {
        opacity: 1,
        rotate: -1,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Kt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.5, duration: 0.4, ease: [0.12, 0.23, 0, 1.22], type: `tween` },
        x: 0,
        y: 0,
      }),
      (qt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.6, duration: 0.4, ease: [0.12, 0.23, 0, 1.22], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Jt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 1, duration: 0.4, ease: [0.12, 0.23, 0, 1.22], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Yt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Xt = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (Zt = D.create(r)),
      (Qt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        O7jaJtaX1: e ?? i.O7jaJtaX1,
      })),
      ($t = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = N(
        p(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: o } = G(),
            s = Te(),
            { style: c, className: l, layoutId: u, variant: d, O7jaJtaX1: p, ...m } = Qt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: C,
            } = ae({ defaultVariant: `Z7T2ubUu2`, ref: r, variant: d, variantClassNames: Bt }),
            w = $t(e, C),
            { activeVariantCallback: E, delay: O } = ge(h),
            ne = E(async (...e) => {
              if ((ee({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            A = I(zt);
          return (
            Fe(),
            f(k, {
              id: u ?? i,
              children: f(Zt, {
                animate: C,
                initial: !1,
                children: f(Xt, {
                  value: Vt,
                  children: v(D.nav, {
                    ...m,
                    ...b,
                    className: I(A, `framer-1vg1xbl`, l, g),
                    "data-framer-name": `Mobile`,
                    "data-highlight": !0,
                    layoutDependency: w,
                    layoutId: `Z7T2ubUu2`,
                    onTap: ne,
                    ref: r,
                    style: { ...c },
                    children: [
                      f(Ft, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: Ht,
                        className: `framer-be5182`,
                        "data-framer-appear-id": `be5182`,
                        "data-framer-name": `Background`,
                        initial: Ut,
                        layoutDependency: w,
                        layoutId: `oneZJnpak`,
                        optimized: !0,
                        style: {
                          backgroundColor: `var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 236, 229))`,
                        },
                      }),
                      v(D.div, {
                        className: `framer-vstjw3`,
                        "data-framer-name": `Container`,
                        layoutDependency: w,
                        layoutId: `hOdXDA4d6`,
                        children: [
                          f(L, {
                            links: [
                              { href: { webPageId: `Bbzc06U8n` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              f(H, {
                                height: 90,
                                y:
                                  (s?.y || 0) +
                                  (0 +
                                    ((s?.height || 800) - 0 - ((s?.height || 800) - 0) * 1) / 2) +
                                  0 +
                                  ((((s?.height || 800) - 0) * 1 - 0 - 310) / 2 + 0 + 0),
                                children: f(Lt, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Wt,
                                  className: `framer-tu7iob-container`,
                                  "data-framer-appear-id": `tu7iob`,
                                  initial: Gt,
                                  layoutDependency: w,
                                  layoutId: `hrhJK2Lba-container`,
                                  nodeId: `hrhJK2Lba`,
                                  optimized: !0,
                                  rendersWithMotion: !0,
                                  scopeId: `cuJyCmcQA`,
                                  children: f(K, {
                                    fa2gnxgOw: e[0],
                                    He3nGh8Cb: !1,
                                    height: `100%`,
                                    id: `hrhJK2Lba`,
                                    layoutId: `hrhJK2Lba`,
                                    QuN6EdU93: `Shop`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          }),
                          f(L, {
                            links: [
                              { href: { webPageId: `h2olteT1_` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              f(H, {
                                height: 90,
                                y:
                                  (s?.y || 0) +
                                  (0 +
                                    ((s?.height || 800) - 0 - ((s?.height || 800) - 0) * 1) / 2) +
                                  0 +
                                  ((((s?.height || 800) - 0) * 1 - 0 - 310) / 2 + 90 + 20),
                                children: f(Lt, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Kt,
                                  className: `framer-1nw6x75-container`,
                                  "data-framer-appear-id": `1nw6x75`,
                                  initial: Gt,
                                  layoutDependency: w,
                                  layoutId: `OR1aJK3DF-container`,
                                  nodeId: `OR1aJK3DF`,
                                  optimized: !0,
                                  rendersWithMotion: !0,
                                  scopeId: `cuJyCmcQA`,
                                  children: f(K, {
                                    fa2gnxgOw: e[0],
                                    He3nGh8Cb: !1,
                                    height: `100%`,
                                    id: `OR1aJK3DF`,
                                    layoutId: `OR1aJK3DF`,
                                    QuN6EdU93: `About`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          }),
                          f(L, {
                            links: [
                              { href: { webPageId: `o6ceITeut` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              f(H, {
                                height: 90,
                                y:
                                  (s?.y || 0) +
                                  (0 +
                                    ((s?.height || 800) - 0 - ((s?.height || 800) - 0) * 1) / 2) +
                                  0 +
                                  ((((s?.height || 800) - 0) * 1 - 0 - 310) / 2 + 180 + 40),
                                children: f(Lt, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: qt,
                                  className: `framer-qik0or-container`,
                                  "data-framer-appear-id": `qik0or`,
                                  initial: Gt,
                                  layoutDependency: w,
                                  layoutId: `NClY5X92q-container`,
                                  nodeId: `NClY5X92q`,
                                  optimized: !0,
                                  rendersWithMotion: !0,
                                  scopeId: `cuJyCmcQA`,
                                  children: f(K, {
                                    fa2gnxgOw: e[0],
                                    He3nGh8Cb: !1,
                                    height: `100%`,
                                    id: `NClY5X92q`,
                                    layoutId: `NClY5X92q`,
                                    QuN6EdU93: `Contact`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      f(H, {
                        height: 24,
                        y: (s?.y || 0) + 16,
                        children: f(Lt, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Jt,
                          className: `framer-16askas-container`,
                          "data-framer-appear-id": `16askas`,
                          initial: Gt,
                          layoutDependency: w,
                          layoutId: `hcmGCWLOW-container`,
                          nodeId: `hcmGCWLOW`,
                          optimized: !0,
                          rendersWithMotion: !0,
                          scopeId: `cuJyCmcQA`,
                          children: f(q, {
                            height: `100%`,
                            id: `hcmGCWLOW`,
                            layoutId: `hcmGCWLOW`,
                            variant: Yt(`RUiLoNbaB`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-CNb9k.framer-trx80u, .framer-CNb9k .framer-trx80u { display: block; }`,
          `.framer-CNb9k.framer-1vg1xbl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 390px; }`,
          `.framer-CNb9k .framer-be5182 { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
          `.framer-CNb9k .framer-vstjw3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-CNb9k .framer-tu7iob-container, .framer-CNb9k .framer-1nw6x75-container, .framer-CNb9k .framer-qik0or-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-CNb9k .framer-16askas-container { flex: none; height: auto; position: absolute; right: 20px; top: 16px; width: auto; z-index: 1; }`,
        ],
        `framer-CNb9k`
      )),
      (J.displayName = `Menu Overlay`),
      (J.defaultProps = { height: 800, width: 390 }),
      j(J, { O7jaJtaX1: { title: `Click`, type: W.EventHandler } }),
      U(J, [{ explicitInter: !0, fonts: [] }, ...It, ...Rt], { supportsExplicitInterCodegen: !0 }),
      (J.loader = { load: (e, t) => (t.locale, Promise.allSettled([F(K, {}, t), F(q, {}, t)])) }));
  });
function tn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  Y,
  pn = e(() => {
    (x(),
      B(),
      A(),
      c(),
      Ge(),
      (nn = { sJbygwUr5: { hover: !0 } }),
      (rn = [`sJbygwUr5`, `rcFZ_Cu63`]),
      (an = `framer-wIleY`),
      (on = { rcFZ_Cu63: `framer-v-vwxunn`, sJbygwUr5: `framer-v-3ekcpf` }),
      (sn = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (cn = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (ln = { "Tablet/Phone": `rcFZ_Cu63`, Desktop: `sJbygwUr5` }),
      (un = D.create(r)),
      (dn = ({ height: e, id: t, link: n, newTab: r, title: i, width: a, ...o }) => ({
        ...o,
        variant: ln[o.variant] ?? o.variant ?? `sJbygwUr5`,
        vEbOIWJ8f: n ?? o.vEbOIWJ8f,
        XHxQ7Uiao: i ?? o.XHxQ7Uiao ?? `Button`,
        yCcAX8MlQ: r ?? o.yCcAX8MlQ,
      })),
      (fn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = N(
        p(function (e, t) {
          let n = _(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = G();
          Te();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              XHxQ7Uiao: p,
              yCcAX8MlQ: m,
              vEbOIWJ8f: h,
              ...g
            } = dn(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = ae({
              cycleOrder: rn,
              defaultVariant: `sJbygwUr5`,
              enabledGestures: nn,
              ref: i,
              variant: d,
              variantClassNames: on,
            }),
            O = fn(e, E),
            ne = I(an, Ke);
          return f(k, {
            id: u ?? a,
            children: f(un, {
              animate: E,
              initial: !1,
              children: f(cn, {
                value: sn,
                children: f(V, {
                  href: h,
                  motionChild: !0,
                  nodeId: `sJbygwUr5`,
                  openInNewTab: m,
                  scopeId: `c5M3I34OK`,
                  smoothScroll: !0,
                  children: v(D.a, {
                    ...g,
                    ...S,
                    className: `${I(ne, `framer-3ekcpf`, l, b)} framer-cvah6w`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: O,
                    layoutId: `sJbygwUr5`,
                    ref: i,
                    style: { ...c },
                    ...tn(
                      {
                        "sJbygwUr5-hover": { "data-framer-name": void 0 },
                        rcFZ_Cu63: { "data-framer-name": `Tablet/Phone` },
                      },
                      y,
                      ee
                    ),
                    children: [
                      f(cn, {
                        value: sn,
                        children: v(D.div, {
                          className: `framer-1k4j8ea`,
                          "data-framer-name": `Container`,
                          layoutDependency: O,
                          layoutId: `Np8z60UNv`,
                          children: [
                            f(cn, {
                              value: sn,
                              children: f(P, {
                                __fromCanvasComponent: !0,
                                children: f(r, {
                                  children: f(D.p, {
                                    className: `framer-styles-preset-653p1z`,
                                    "data-styles-preset": `cRhro8yAF`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)))`,
                                    },
                                    children: `Button`,
                                  }),
                                }),
                                className: `framer-21hb73`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `yJMarNopT`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: p,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            f(cn, {
                              value: sn,
                              children: f(D.div, {
                                className: `framer-rfwwfi`,
                                "data-framer-name": `Hover`,
                                layoutDependency: O,
                                layoutId: `IcIyjpoyA`,
                                style: {
                                  backgroundColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                      f(cn, {
                        value: sn,
                        children: f(P, {
                          __fromCanvasComponent: !0,
                          children: f(r, {
                            children: f(D.p, {
                              className: `framer-styles-preset-653p1z`,
                              "data-styles-preset": `cRhro8yAF`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)))`,
                              },
                              children: `,`,
                            }),
                          }),
                          className: `framer-18dggzj`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `gqPz6vHoF`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
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
          `.framer-wIleY.framer-cvah6w, .framer-wIleY .framer-cvah6w { display: block; }`,
          `.framer-wIleY.framer-3ekcpf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-wIleY .framer-1k4j8ea { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-wIleY .framer-21hb73, .framer-wIleY .framer-18dggzj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wIleY .framer-rfwwfi { flex: none; height: 2px; left: -1px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 1px; z-index: 1; }`,
          `.framer-wIleY.framer-v-3ekcpf.hover .framer-rfwwfi { left: 0px; width: 100%; }`,
          ...We,
        ],
        `framer-wIleY`
      )),
      (Y.displayName = `Header Button`),
      (Y.defaultProps = { height: 24, width: 83 }),
      j(Y, {
        variant: {
          options: [`sJbygwUr5`, `rcFZ_Cu63`],
          optionTitles: [`Desktop`, `Tablet/Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        XHxQ7Uiao: { defaultValue: `Button`, displayTextArea: !1, title: `Title`, type: W.String },
        onXHxQ7UiaoChange: { changes: `XHxQ7Uiao`, type: W.ChangeHandler },
        yCcAX8MlQ: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
        onyCcAX8MlQChange: { changes: `yCcAX8MlQ`, type: W.ChangeHandler },
        vEbOIWJ8f: { title: `Link`, type: W.Link },
      }),
      U(
        Y,
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
          ...oe(Ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function mn(e) {
  if (ie.current() === ie.canvas)
    return f(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        width: `100%`,
        height: `100%`,
      },
      children: f(`p`, {
        style: {
          ...e.font,
          color: e.color,
          backgroundColor: e.backgroundColor,
          ...e.border,
          borderRadius: e.radius,
          padding: e.padding,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          margin: 0,
          width: `100%`,
          height: e.fixedHeight ? `${e.heightPx}px` : `100%`,
          lineHeight: 1,
          fontSize: e.font?.fontSize || `inherit`,
        },
        children: `0`,
      }),
    });
  {
    let [t, n] = i(!1),
      [r, a] = i(0),
      [c, u] = i(!0),
      [d, p] = i(!1),
      m = _(!1),
      h = _(!1);
    s(() => {
      n(!0);
    }, []);
    let g = o(
        (e, t = 100, n = 1e4) =>
          new Promise((r, i) => {
            let a = Date.now(),
              o = () => {
                e()
                  ? r()
                  : Date.now() - a >= n
                    ? i(Error(`Condition not met within timeout`))
                    : setTimeout(o, t);
              };
            o();
          }),
        []
      ),
      v = o(
        async (e) => {
          if (!m.current) {
            ((m.current = !0), h.current || (u(!0), p(!1)));
            try {
              await g(() => l.shopXtools && l.shopXtools.fetchCart);
              let t = await l.shopXtools.fetchCart(e);
              if (t && t.lines && t.lines.edges && t.lines.edges.length > 0) {
                let e = t.lines.edges.reduce((e, t) => e + (t.node.quantity || 0), 0);
                a(e);
              } else (a(0), u(!1), p(!0), (h.current = !0));
            } catch {
              (a(0), u(!1), p(!0), (h.current = !0));
            } finally {
              ((m.current = !1),
                h.current || (u(!1), (h.current = !0), setTimeout(() => p(!0), 50)));
            }
          }
        },
        [g]
      ),
      y = o(
        Xe(async () => {
          if (!t) return;
          let e = l.shopXtools?.cart?.id;
          if (!e)
            try {
              e = localStorage.getItem(`shopX_cart_id`);
            } catch {}
          e ? await v(e) : (a(0), u(!1), p(!0), (h.current = !0));
        }, 1e3),
        [v, t]
      );
    return (
      s(() => {
        if (t)
          return (
            l.addEventListener(`shopXtools-cart-update`, y),
            y(),
            () => {
              l.removeEventListener(`shopXtools-cart-update`, y);
            }
          );
      }, [y, t]),
      e.hideIf0 && r === 0
        ? null
        : f(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: `100%`,
              height: `100%`,
            },
            children: f(`p`, {
              style: {
                ...e.font,
                color: e.color,
                backgroundColor: e.backgroundColor,
                ...e.border,
                borderRadius: e.radius,
                padding: e.padding,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                margin: 0,
                width: `100%`,
                height: e.fixedHeight ? `${e.heightPx}px` : `100%`,
                opacity: +!!d,
                transition: `opacity 0.3s ease-in-out`,
                visibility: c ? `hidden` : `visible`,
                lineHeight: 1,
                fontSize: e.font?.fontSize || `inherit`,
              },
              children: t ? r.toString() : `0`,
            }),
          })
    );
  }
}
var hn = e(() => {
  (E(),
    x(),
    c(),
    B(),
    qe(),
    (mn.defaultProps = {
      hideIf0: !1,
      font: void 0,
      color: `#000`,
      backgroundColor: `#FFFFFF00`,
      backgroundOpacity: 0,
      border: {
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderStyle: `solid`,
        borderColor: `rgba(0, 0, 0, 0.5)`,
      },
      radius: 0,
      padding: 0,
      fixedHeight: !1,
      heightPx: 40,
    }),
    j(mn, {
      hideIf0: {
        type: W.Boolean,
        title: `When 0`,
        defaultValue: !1,
        enabledTitle: `Hide`,
        disabledTitle: `Show`,
        description: `For browser only, canvas will always display 0.`,
      },
      font: { type: W.Font, controls: `extended`, title: `Font` },
      color: { type: W.Color, defaultValue: `#000`, title: `Color` },
      backgroundColor: { type: W.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
      border: {
        type: W.Border,
        title: `Border`,
        defaultValue: {
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderStyle: `solid`,
          borderColor: `rgba(0, 0, 0, 0.5)`,
        },
      },
      padding: {
        type: W.FusedNumber,
        title: `Padding`,
        defaultValue: 0,
        toggleKey: `paddingPerSide`,
        toggleTitles: [`All`, `Sides`],
        valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
        valueLabels: [`T`, `R`, `B`, `L`],
        min: 0,
      },
      radius: {
        type: W.FusedNumber,
        title: `Radius`,
        defaultValue: 0,
        toggleKey: `radiusPerCorner`,
        toggleTitles: [`All`, `Corners`],
        valueKeys: [`topLeft`, `topRight`, `bottomRight`, `bottomLeft`],
        valueLabels: [`TL`, `TR`, `BR`, `BL`],
        min: 0,
      },
    }));
});
function gn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _n,
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
  kn = e(() => {
    (x(),
      B(),
      A(),
      c(),
      hn(),
      Ge(),
      (_n = R(mn)),
      (vn = { vSyX6djX2: { hover: !0 } }),
      (yn = [`vSyX6djX2`, `xpFK75YLq`]),
      (bn = `framer-T6oBh`),
      (xn = { vSyX6djX2: `framer-v-5aut3q`, xpFK75YLq: `framer-v-8wdpp2` }),
      (Sn = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Cn = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (wn = { "Tablet/Phone": `xpFK75YLq`, Desktop: `vSyX6djX2` }),
      (Tn = D.create(r)),
      (En = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: wn[i.variant] ?? i.variant ?? `vSyX6djX2`,
        WuGpvTluA: e ?? i.WuGpvTluA,
      })),
      (Dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (On = N(
        p(function (e, t) {
          let n = _(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = G();
          Te();
          let { style: c, className: l, layoutId: u, variant: d, WuGpvTluA: p, ...m } = En(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: C,
            } = ae({
              cycleOrder: yn,
              defaultVariant: `vSyX6djX2`,
              enabledGestures: vn,
              ref: i,
              variant: d,
              variantClassNames: xn,
            }),
            w = Dn(e, C),
            { activeVariantCallback: E, delay: O } = ge(h),
            ne = E(async (...e) => {
              if ((ee({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            A = I(bn, Ke);
          return f(k, {
            id: u ?? a,
            children: f(Tn, {
              animate: C,
              initial: !1,
              children: f(Cn, {
                value: Sn,
                children: v(D.button, {
                  ...m,
                  ...b,
                  className: I(A, `framer-5aut3q`, l, g),
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: w,
                  layoutId: `vSyX6djX2`,
                  onTap: ne,
                  ref: i,
                  style: { ...c },
                  ...gn(
                    {
                      "vSyX6djX2-hover": { "data-framer-name": void 0 },
                      xpFK75YLq: { "data-framer-name": `Tablet/Phone` },
                    },
                    h,
                    x
                  ),
                  children: [
                    f(Cn, {
                      value: Sn,
                      children: f(P, {
                        __fromCanvasComponent: !0,
                        children: f(r, {
                          children: f(D.p, {
                            className: `framer-styles-preset-653p1z`,
                            "data-styles-preset": `cRhro8yAF`,
                            dir: `auto`,
                            children: `Cart (`,
                          }),
                        }),
                        className: `framer-1lg13vr`,
                        fonts: [`Inter`],
                        layoutDependency: w,
                        layoutId: `yDnNyxMHD`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    f(Cn, {
                      value: Sn,
                      children: f(H, {
                        children: f(M, {
                          className: `framer-1pyhifp-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `zI6qqz92P-container`,
                          nodeId: `zI6qqz92P`,
                          rendersWithMotion: !0,
                          scopeId: `df8M0O00y`,
                          children: f(mn, {
                            backgroundColor: `rgba(255, 255, 255, 0)`,
                            border: {
                              borderBottomWidth: 0,
                              borderColor: `rgba(0, 0, 0, 0.5)`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            bottomLeft: 0,
                            bottomRight: 0,
                            color: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                            font: {
                              fontFamily: `"Boldonse", sans-serif`,
                              fontSize: `16px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            height: `100%`,
                            hideIf0: !1,
                            id: `zI6qqz92P`,
                            layoutId: `zI6qqz92P`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            radius: 0,
                            radiusPerCorner: !1,
                            topLeft: 0,
                            topRight: 0,
                            width: `100%`,
                            ...gn(
                              {
                                xpFK75YLq: {
                                  font: {
                                    fontFamily: `"Boldonse", sans-serif`,
                                    fontSize: `14px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                },
                              },
                              h,
                              x
                            ),
                          }),
                        }),
                      }),
                    }),
                    f(Cn, {
                      value: Sn,
                      children: f(P, {
                        __fromCanvasComponent: !0,
                        children: f(r, {
                          children: f(D.p, {
                            className: `framer-styles-preset-653p1z`,
                            "data-styles-preset": `cRhro8yAF`,
                            dir: `auto`,
                            children: `)`,
                          }),
                        }),
                        className: `framer-pat6pq`,
                        fonts: [`Inter`],
                        layoutDependency: w,
                        layoutId: `jGik6Mjt7`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    f(Cn, {
                      value: Sn,
                      children: f(D.div, {
                        className: `framer-1f6ndc6`,
                        "data-framer-name": `Line`,
                        layoutDependency: w,
                        layoutId: `ysuHWaydE`,
                        style: {
                          backgroundColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-T6oBh.framer-1om40sd, .framer-T6oBh .framer-1om40sd { display: block; }`,
          `.framer-T6oBh.framer-5aut3q { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-T6oBh .framer-1lg13vr, .framer-T6oBh .framer-pat6pq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-T6oBh .framer-1pyhifp-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-T6oBh .framer-1f6ndc6 { flex: none; height: 2px; left: -2px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 1px; z-index: 1; }`,
          `.framer-T6oBh.framer-v-5aut3q.hover .framer-1f6ndc6 { left: 0px; width: 100%; }`,
          ...We,
        ],
        `framer-T6oBh`
      )),
      (On.displayName = `Cart Button`),
      (On.defaultProps = { height: 24, width: 90 }),
      j(On, {
        variant: {
          options: [`vSyX6djX2`, `xpFK75YLq`],
          optionTitles: [`Desktop`, `Tablet/Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        WuGpvTluA: { title: `Click`, type: W.EventHandler },
      }),
      U(
        On,
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
                cssFamilyName: `Boldonse`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Boldonse`,
                url: `../../assets/fonts/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2`,
                weight: `400`,
              },
            ],
          },
          ..._n,
          ...oe(Ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var An,
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
  Z,
  Kn = e(() => {
    (x(),
      B(),
      A(),
      c(),
      pn(),
      kn(),
      Pt(),
      (An = R(Y)),
      (jn = R(On)),
      (Mn = R(q)),
      (Nn = re(D.nav)),
      (Pn = [`SAqN6n9Hd`, `RHuWIQFI_`, `EHSM8x7O_`]),
      (Fn = `framer-3W98M`),
      (In = {
        EHSM8x7O_: `framer-v-hc012m`,
        RHuWIQFI_: `framer-v-1mrn8jd`,
        SAqN6n9Hd: `framer-v-2mye3w`,
      }),
      (Ln = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0, 1], type: `tween` }),
      (Rn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -64,
      }),
      (zn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Vn = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (Hn = { Desktop: `SAqN6n9Hd`, Phone: `EHSM8x7O_`, Tablet: `RHuWIQFI_` }),
      (Un = D.create(r)),
      (Wn = ({ click: e, click2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        Lgq8yGp59: e ?? a.Lgq8yGp59,
        TgZBpwlSo: t ?? a.TgZBpwlSo,
        variant: Hn[a.variant] ?? a.variant ?? `SAqN6n9Hd`,
      })),
      (Gn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = N(
        p(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: o } = G(),
            s = Te(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Lgq8yGp59: p,
              TgZBpwlSo: m,
              ...h
            } = Wn(e),
            {
              baseVariant: g,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: te,
              setVariant: C,
              variants: w,
            } = ae({
              cycleOrder: Pn,
              defaultVariant: `SAqN6n9Hd`,
              ref: r,
              variant: d,
              variantClassNames: In,
            }),
            E = Gn(e, w),
            { activeVariantCallback: O, delay: ne } = ge(g),
            A = O(async (...e) => {
              if (p && (await p(...e)) === !1) return !1;
            }),
            j = O(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            re = I(Fn),
            ie = () => g !== `EHSM8x7O_`;
          Fe();
          let N = () => g === `EHSM8x7O_`;
          return f(k, {
            id: u ?? i,
            children: f(Un, {
              animate: w,
              initial: !1,
              children: f(Vn, {
                value: zn,
                children: f(Nn, {
                  ...h,
                  ...x,
                  __framer__animate: { transition: Ln },
                  __framer__animateOnce: !1,
                  __framer__scrollDirection: { direction: `down`, target: Rn },
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: I(re, `framer-2mye3w`, l, y),
                  "data-framer-name": `Desktop`,
                  layoutDependency: E,
                  layoutId: `SAqN6n9Hd`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 236, 229))`,
                    ...c,
                  },
                  ...X(
                    {
                      EHSM8x7O_: { "data-framer-name": `Phone` },
                      RHuWIQFI_: { "data-framer-name": `Tablet` },
                    },
                    g,
                    S
                  ),
                  children: v(D.div, {
                    className: `framer-4r21nz`,
                    "data-framer-name": `Container`,
                    layoutDependency: E,
                    layoutId: `CCLfdQciT`,
                    children: [
                      f(V, {
                        href: { webPageId: `augiA20Il` },
                        motionChild: !0,
                        nodeId: `LDamvtSzF`,
                        openInNewTab: !1,
                        scopeId: `jaGT37iCF`,
                        children: f(D.a, {
                          className: `framer-chgpd4 framer-qn0gar`,
                          "data-framer-name": `Logo`,
                          layoutDependency: E,
                          layoutId: `LDamvtSzF`,
                          children: f(be, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 133,
                              intrinsicWidth: 250,
                              loading: pe(
                                (s?.y || 0) + (0 + ((s?.height || 60) - 0 - 60) / 2) + 16 + 0
                              ),
                              pixelHeight: 133,
                              pixelWidth: 250,
                              sizes: `52.6316px`,
                              src: `../../assets/images/ICHCOjiffYyd6dVEBljz5mEQE.svg`,
                            },
                            className: `framer-5itbss`,
                            fitImageDimension: `width`,
                            layoutDependency: E,
                            layoutId: `K7CYjJ_ny`,
                            ...X(
                              {
                                EHSM8x7O_: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 133,
                                    intrinsicWidth: 250,
                                    loading: pe(
                                      (s?.y || 0) +
                                        0 +
                                        (((s?.height || 200) - 0 - 56) / 2 + 0 + 0) +
                                        16 +
                                        0
                                    ),
                                    pixelHeight: 133,
                                    pixelWidth: 250,
                                    sizes: `45.1128px`,
                                    src: `../../assets/images/ICHCOjiffYyd6dVEBljz5mEQE.svg`,
                                  },
                                },
                                RHuWIQFI_: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 133,
                                    intrinsicWidth: 250,
                                    loading: pe(
                                      (s?.y || 0) + (0 + ((s?.height || 58) - 0 - 58) / 2) + 16 + 0
                                    ),
                                    pixelHeight: 133,
                                    pixelWidth: 250,
                                    sizes: `48.8722px`,
                                    src: `../../assets/images/ICHCOjiffYyd6dVEBljz5mEQE.svg`,
                                  },
                                },
                              },
                              g,
                              S
                            ),
                          }),
                        }),
                      }),
                      v(D.div, {
                        className: `framer-1adqmj4`,
                        "data-framer-name": `Nav`,
                        layoutDependency: E,
                        layoutId: `Pauj3ADYU`,
                        children: [
                          ie() &&
                            f(L, {
                              links: [
                                { href: { webPageId: `h2olteT1_` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `h2olteT1_` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(H, {
                                  height: 24,
                                  y: (s?.y || 0) + (0 + ((s?.height || 60) - 0 - 60) / 2) + 18 + 0,
                                  ...X(
                                    {
                                      RHuWIQFI_: {
                                        y:
                                          (s?.y || 0) +
                                          (0 + ((s?.height || 58) - 0 - 58) / 2) +
                                          17 +
                                          0,
                                      },
                                    },
                                    g,
                                    S
                                  ),
                                  children: f(M, {
                                    className: `framer-1ackqsv-container`,
                                    layoutDependency: E,
                                    layoutId: `VyJ2vopAc-container`,
                                    nodeId: `VyJ2vopAc`,
                                    rendersWithMotion: !0,
                                    scopeId: `jaGT37iCF`,
                                    children: f(Y, {
                                      height: `100%`,
                                      id: `VyJ2vopAc`,
                                      layoutId: `VyJ2vopAc`,
                                      variant: Bn(`sJbygwUr5`),
                                      vEbOIWJ8f: e[0],
                                      width: `100%`,
                                      XHxQ7Uiao: `About`,
                                      yCcAX8MlQ: !1,
                                      ...X({ RHuWIQFI_: { vEbOIWJ8f: e[1] } }, g, S),
                                    }),
                                  }),
                                }),
                            }),
                          ie() &&
                            f(L, {
                              links: [
                                { href: { webPageId: `o6ceITeut` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `o6ceITeut` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(H, {
                                  height: 24,
                                  y: (s?.y || 0) + (0 + ((s?.height || 60) - 0 - 60) / 2) + 18 + 0,
                                  ...X(
                                    {
                                      RHuWIQFI_: {
                                        y:
                                          (s?.y || 0) +
                                          (0 + ((s?.height || 58) - 0 - 58) / 2) +
                                          17 +
                                          0,
                                      },
                                    },
                                    g,
                                    S
                                  ),
                                  children: f(M, {
                                    className: `framer-rn15t4-container`,
                                    layoutDependency: E,
                                    layoutId: `FFw5is_pV-container`,
                                    nodeId: `FFw5is_pV`,
                                    rendersWithMotion: !0,
                                    scopeId: `jaGT37iCF`,
                                    children: f(Y, {
                                      height: `100%`,
                                      id: `FFw5is_pV`,
                                      layoutId: `FFw5is_pV`,
                                      variant: Bn(`sJbygwUr5`),
                                      vEbOIWJ8f: e[0],
                                      width: `100%`,
                                      XHxQ7Uiao: `Contact`,
                                      yCcAX8MlQ: !1,
                                      ...X({ RHuWIQFI_: { vEbOIWJ8f: e[1] } }, g, S),
                                    }),
                                  }),
                                }),
                            }),
                          ie() &&
                            f(L, {
                              links: [
                                { href: { webPageId: `Bbzc06U8n` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `Bbzc06U8n` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(H, {
                                  height: 24,
                                  y: (s?.y || 0) + (0 + ((s?.height || 60) - 0 - 60) / 2) + 18 + 0,
                                  ...X(
                                    {
                                      RHuWIQFI_: {
                                        y:
                                          (s?.y || 0) +
                                          (0 + ((s?.height || 58) - 0 - 58) / 2) +
                                          17 +
                                          0,
                                      },
                                    },
                                    g,
                                    S
                                  ),
                                  children: f(M, {
                                    className: `framer-1um1x51-container`,
                                    layoutDependency: E,
                                    layoutId: `yxMNXGXqX-container`,
                                    nodeId: `yxMNXGXqX`,
                                    rendersWithMotion: !0,
                                    scopeId: `jaGT37iCF`,
                                    children: f(Y, {
                                      height: `100%`,
                                      id: `yxMNXGXqX`,
                                      layoutId: `yxMNXGXqX`,
                                      variant: Bn(`sJbygwUr5`),
                                      vEbOIWJ8f: e[0],
                                      width: `100%`,
                                      XHxQ7Uiao: `Shop`,
                                      yCcAX8MlQ: !1,
                                      ...X({ RHuWIQFI_: { vEbOIWJ8f: e[1] } }, g, S),
                                    }),
                                  }),
                                }),
                            }),
                          f(H, {
                            height: 24,
                            y: (s?.y || 0) + (0 + ((s?.height || 60) - 0 - 60) / 2) + 18 + 0,
                            ...X(
                              {
                                EHSM8x7O_: {
                                  y:
                                    (s?.y || 0) +
                                    0 +
                                    (((s?.height || 200) - 0 - 56) / 2 + 0 + 0) +
                                    16 +
                                    0,
                                },
                                RHuWIQFI_: {
                                  y: (s?.y || 0) + (0 + ((s?.height || 58) - 0 - 58) / 2) + 17 + 0,
                                },
                              },
                              g,
                              S
                            ),
                            children: f(M, {
                              className: `framer-1cd69dh-container`,
                              layoutDependency: E,
                              layoutId: `SV5W7EFH4-container`,
                              nodeId: `SV5W7EFH4`,
                              rendersWithMotion: !0,
                              scopeId: `jaGT37iCF`,
                              children: f(On, {
                                height: `100%`,
                                id: `SV5W7EFH4`,
                                layoutId: `SV5W7EFH4`,
                                variant: Bn(`vSyX6djX2`),
                                width: `100%`,
                                WuGpvTluA: A,
                                ...X(
                                  {
                                    EHSM8x7O_: { variant: Bn(`xpFK75YLq`) },
                                    RHuWIQFI_: { variant: Bn(`xpFK75YLq`) },
                                  },
                                  g,
                                  S
                                ),
                              }),
                            }),
                          }),
                          N() &&
                            f(H, {
                              ...X(
                                {
                                  EHSM8x7O_: {
                                    height: 24,
                                    width: `24px`,
                                    y:
                                      (s?.y || 0) +
                                      0 +
                                      (((s?.height || 200) - 0 - 56) / 2 + 0 + 0) +
                                      16 +
                                      0,
                                  },
                                },
                                g,
                                S
                              ),
                              children: f(M, {
                                className: `framer-4ak938-container`,
                                layoutDependency: E,
                                layoutId: `W4k1T25ZZ-container`,
                                nodeId: `W4k1T25ZZ`,
                                rendersWithMotion: !0,
                                scopeId: `jaGT37iCF`,
                                children: f(q, {
                                  height: `100%`,
                                  id: `W4k1T25ZZ`,
                                  layoutId: `W4k1T25ZZ`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Bn(`HC7K01rFg`),
                                  vMnQjlfaC: j,
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
          `.framer-3W98M.framer-qn0gar, .framer-3W98M .framer-qn0gar { display: block; }`,
          `.framer-3W98M.framer-2mye3w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-3W98M .framer-4r21nz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 16px 40px 16px 40px; position: relative; width: 1px; }`,
          `.framer-3W98M .framer-chgpd4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 28px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-3W98M .framer-5itbss { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-3W98M .framer-1adqmj4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3W98M .framer-1ackqsv-container, .framer-3W98M .framer-rn15t4-container, .framer-3W98M .framer-1um1x51-container, .framer-3W98M .framer-1cd69dh-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-3W98M .framer-4ak938-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-3W98M.framer-v-1mrn8jd.framer-2mye3w { width: 810px; }`,
          `.framer-3W98M.framer-v-1mrn8jd .framer-4r21nz { padding: 16px 32px 16px 32px; }`,
          `.framer-3W98M.framer-v-1mrn8jd .framer-chgpd4 { height: 26px; }`,
          `.framer-3W98M.framer-v-hc012m.framer-2mye3w { flex-direction: column; width: 390px; }`,
          `.framer-3W98M.framer-v-hc012m .framer-4r21nz { flex: none; padding: 16px 20px 16px 20px; width: 100%; }`,
          `.framer-3W98M.framer-v-hc012m .framer-chgpd4 { height: 24px; }`,
          `.framer-3W98M.framer-v-hc012m .framer-1adqmj4 { gap: 16px; }`,
        ],
        `framer-3W98M`
      )),
      (Z.displayName = `Header`),
      (Z.defaultProps = { height: 60, width: 1200 }),
      j(Z, {
        variant: {
          options: [`SAqN6n9Hd`, `RHuWIQFI_`, `EHSM8x7O_`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        Lgq8yGp59: { title: `Click`, type: W.EventHandler },
        TgZBpwlSo: { title: `Click 2`, type: W.EventHandler },
      }),
      U(Z, [{ explicitInter: !0, fonts: [] }, ...An, ...jn, ...Mn], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([F(Y, {}, t), F(On, {}, t), F(q, {}, t)])),
      }));
  });
function qn(e) {
  let {
      companyName: t,
      rightsText: n,
      showSymbol: r,
      showTrademark: i,
      trademarkType: a,
      yearPlacement: o,
      font: s,
      color: c,
      fontSize: l,
      textAlign: u,
      style: d,
    } = e,
    p = new Date().getFullYear(),
    m = r === `yes` ? `©` : ``,
    h = i === `yes`,
    g = h ? (a === `trademark` ? `™` : `®`) : ``,
    _ = t.trim(),
    v = n.trim(),
    y = ``;
  (o === `beforeCompanyName`
    ? (_ = `${p} ${_}`)
    : o === `afterCompanyName` && _
      ? (_ += ` ${p}`)
      : o === `beforeRightsText` && v
        ? (v = `${p}. ${v}`)
        : o === `afterRightsText` && v
          ? ((v += ` ${p}`), (y = !h && _ && v ? `.` : ``))
          : !_ && !v && (_ = `${p}`),
    (_ += g ? `${g}` : ``));
  let b = m ? `${m} ` : ``;
  ((b += _ ? `${_}${y}` : ``), _ && v && (b += ` `), (b += v));
  let x = u === `center` ? `center` : u === `right` ? `flex-end` : `flex-start`;
  return f(`div`, {
    style: {
      ...d,
      display: `flex`,
      justifyContent: x,
      alignItems: `flex-start`,
      boxSizing: `border-box`,
      width: d?.width ?? `max-content`,
      maxWidth: `100%`,
      minWidth: 0,
    },
    children: f(`span`, {
      style: {
        display: `block`,
        boxSizing: `border-box`,
        width: `max-content`,
        maxWidth: `100%`,
        whiteSpace: `normal`,
        overflowWrap: `normal`,
        wordBreak: `normal`,
        fontSize: `${l}px`,
        color: c,
        textAlign: u,
        ...s,
      },
      children: b.trim(),
    }),
  });
}
var Jn = e(() => {
    (x(),
      B(),
      (qn.defaultProps = {
        companyName: `Company Name`,
        rightsText: `All rights reserved`,
        showSymbol: `yes`,
        showTrademark: `no`,
        trademarkType: `trademark`,
        yearPlacement: `afterRightsText`,
        color: `#999999`,
        fontSize: 18,
        textAlign: `left`,
        font: { family: `Inter` },
      }),
      j(qn, {
        font: { type: W.Font, title: `Font`, defaultValue: `Inter`, controls: `extended` },
        color: { type: W.Color, title: `Font Color`, defaultValue: `#999999` },
        fontSize: {
          type: W.Number,
          title: `Font Size`,
          defaultValue: 18,
          min: 1,
          max: 200,
          step: 1,
        },
        textAlign: {
          type: W.Enum,
          title: `Align`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        companyName: { type: W.String, title: `Company Name`, defaultValue: `Company Name` },
        rightsText: { type: W.String, title: `Rights Text`, defaultValue: `All rights reserved` },
        showSymbol: {
          type: W.SegmentedEnum,
          title: `Symbol`,
          options: [`yes`, `no`],
          optionTitles: [`Yes`, `No`],
          defaultValue: `yes`,
        },
        showTrademark: {
          type: W.SegmentedEnum,
          title: `Trademark`,
          options: [`yes`, `no`],
          optionTitles: [`Yes`, `No`],
          defaultValue: `no`,
        },
        trademarkType: {
          type: W.Enum,
          title: `Type`,
          options: [`trademark`, `registered`],
          optionTitles: [`Trademark`, `Registered`],
          defaultValue: `trademark`,
          hidden: ({ showTrademark: e }) => e !== `yes`,
        },
        yearPlacement: {
          type: W.Enum,
          title: `Year`,
          options: [`beforeCompanyName`, `afterCompanyName`, `beforeRightsText`, `afterRightsText`],
          optionTitles: [`Before Company`, `After Company`, `Before Rights`, `After Rights`],
          defaultValue: `afterRightsText`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
      }));
  }),
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (B(),
      de.loadFonts([]),
      (Yn = [{ explicitInter: !0, fonts: [] }]),
      (Xn = [
        `.framer-eC06s .framer-styles-preset-1tcbvx1:not(.rich-text-wrapper), .framer-eC06s .framer-styles-preset-1tcbvx1.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff) /* {"name":"Title"} */; --framer-link-hover-text-decoration-offset: 2px; --framer-link-hover-text-decoration-thickness: 1px; --framer-link-text-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Zn = `framer-eC06s`));
  }),
  $n,
  er,
  tr,
  nr = e(() => {
    (B(),
      de.loadFonts([]),
      ($n = [{ explicitInter: !0, fonts: [] }]),
      (er = [
        `.framer-3fgNy .framer-styles-preset-1nudwxd:not(.rich-text-wrapper), .framer-3fgNy .framer-styles-preset-1nudwxd.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff) /* {"name":"Title"} */; --framer-link-hover-text-decoration-offset: 6px; --framer-link-hover-text-decoration-skip-ink: all; --framer-link-hover-text-decoration-thickness: 4px; --framer-link-text-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (tr = `framer-3fgNy`));
  });
function rr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  Q,
  fr = e(() => {
    (x(),
      B(),
      A(),
      c(),
      tt(),
      (ir = { sD4OuBidZ: { hover: !0 } }),
      (ar = `framer-d17Ne`),
      (or = { sD4OuBidZ: `framer-v-zhucf2` }),
      (sr = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0, 1], type: `tween` }),
      (cr = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (lr = D.create(r)),
      (ur = ({ height: e, id: t, link: n, newTab: r, title: i, width: a, ...o }) => ({
        ...o,
        hZ9x8zNzT: i ?? o.hZ9x8zNzT ?? `BUTTON`,
        p2YCowchD: n ?? o.p2YCowchD,
        P6ViGy2SA: r ?? o.P6ViGy2SA,
      })),
      (dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = N(
        p(function (e, t) {
          let n = _(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = G();
          Te();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              hZ9x8zNzT: p,
              P6ViGy2SA: m,
              p2YCowchD: h,
              ...g
            } = ur(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = ae({
              defaultVariant: `sD4OuBidZ`,
              enabledGestures: ir,
              ref: i,
              variant: d,
              variantClassNames: or,
            }),
            O = dr(e, E),
            ne = I(ar, it);
          return f(k, {
            id: u ?? a,
            children: f(lr, {
              animate: E,
              initial: !1,
              children: f(cr, {
                value: sr,
                children: f(V, {
                  href: h,
                  motionChild: !0,
                  nodeId: `sD4OuBidZ`,
                  openInNewTab: m,
                  scopeId: `sv8vGlbOY`,
                  smoothScroll: !0,
                  children: v(D.a, {
                    ...g,
                    ...S,
                    className: `${I(ne, `framer-zhucf2`, l, b)} framer-1xrh88p`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: O,
                    layoutId: `sD4OuBidZ`,
                    ref: i,
                    style: { ...c },
                    ...rr({ "sD4OuBidZ-hover": { "data-framer-name": void 0 } }, y, ee),
                    children: [
                      f(cr, {
                        value: sr,
                        children: f(P, {
                          __fromCanvasComponent: !0,
                          children: f(r, {
                            children: f(D.p, {
                              className: `framer-styles-preset-uis2r6`,
                              "data-styles-preset": `KRUEduuRo`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                              },
                              children: `BUTTON`,
                            }),
                          }),
                          className: `framer-g0kjcr`,
                          "data-framer-name": `Default`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `BGG0WqulX`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 1,
                            rotateX: 0,
                          },
                          text: p,
                          variants: { "sD4OuBidZ-hover": { opacity: 0, rotateX: -180 } },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      f(cr, {
                        value: sr,
                        children: f(P, {
                          __fromCanvasComponent: !0,
                          children: f(r, {
                            children: f(D.p, {
                              className: `framer-styles-preset-uis2r6`,
                              "data-styles-preset": `KRUEduuRo`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                              },
                              children: `BUTTON`,
                            }),
                          }),
                          className: `framer-1s7t7lo`,
                          "data-framer-name": `Hover`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `F4CLLZ2h8`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            opacity: 0,
                            rotateX: 180,
                          },
                          text: p,
                          variants: { "sD4OuBidZ-hover": { opacity: 1, rotateX: 0 } },
                          verticalAlignment: `top`,
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
          `.framer-d17Ne.framer-1xrh88p, .framer-d17Ne .framer-1xrh88p { display: block; }`,
          `.framer-d17Ne.framer-zhucf2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-d17Ne .framer-g0kjcr { backface-visibility: hidden; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-d17Ne .framer-1s7t7lo { backface-visibility: hidden; bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          ...nt,
        ],
        `framer-d17Ne`
      )),
      (Q.displayName = `Button Medium`),
      (Q.defaultProps = { height: 28, width: 80 }),
      j(Q, {
        hZ9x8zNzT: { defaultValue: `BUTTON`, displayTextArea: !1, title: `Title`, type: W.String },
        onhZ9x8zNzTChange: { changes: `hZ9x8zNzT`, type: W.ChangeHandler },
        P6ViGy2SA: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
        onP6ViGy2SAChange: { changes: `P6ViGy2SA`, type: W.ChangeHandler },
        p2YCowchD: { title: `Link`, type: W.Link },
      }),
      U(
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
            ],
          },
          ...oe(rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function pr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  $,
  Tr = e(() => {
    (x(),
      B(),
      A(),
      c(),
      Jn(),
      Qn(),
      nr(),
      Ze(),
      fr(),
      (mr = R(Q)),
      (hr = R(qn)),
      (gr = [`CETe0mpvd`, `tcVr9I2qR`, `VZy0bN3o5`]),
      (_r = `framer-7JeGt`),
      (vr = {
        CETe0mpvd: `framer-v-1amkxwa`,
        tcVr9I2qR: `framer-v-1r1569e`,
        VZy0bN3o5: `framer-v-lq4jza`,
      }),
      (yr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (br = ({ value: e, children: t }) => {
        let n = g(O),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(O.Provider, { value: i, children: t });
      }),
      (xr = { Desktop: `CETe0mpvd`, Phone: `VZy0bN3o5`, Tablet: `tcVr9I2qR` }),
      (Sr = D.create(r)),
      (Cr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: xr[r.variant] ?? r.variant ?? `CETe0mpvd`,
      })),
      (wr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = N(
        p(function (e, t) {
          let n = _(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = G();
          Te();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Cr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: ee,
              variants: te,
            } = ae({
              cycleOrder: gr,
              defaultVariant: `CETe0mpvd`,
              ref: i,
              variant: d,
              variantClassNames: vr,
            }),
            C = wr(e, te),
            w = I(_r, tr, et, Zn);
          Fe();
          let E = () => m !== `VZy0bN3o5`;
          return f(k, {
            id: u ?? a,
            children: f(Sr, {
              animate: te,
              initial: !1,
              children: f(br, {
                value: yr,
                children: f(D.footer, {
                  ...p,
                  ...y,
                  className: I(w, `framer-1amkxwa`, l, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: C,
                  layoutId: `CETe0mpvd`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-86af3992-a5bb-447d-94d3-5391f479d420, rgb(219, 87, 131))`,
                    ...c,
                  },
                  ...pr(
                    {
                      tcVr9I2qR: { "data-framer-name": `Tablet` },
                      VZy0bN3o5: { "data-framer-name": `Phone` },
                    },
                    m,
                    b
                  ),
                  children: v(D.div, {
                    className: `framer-cigiig`,
                    "data-framer-name": `Container`,
                    layoutDependency: C,
                    layoutId: `Ao5lyy8kH`,
                    children: [
                      v(D.div, {
                        className: `framer-1lg6qk2`,
                        "data-framer-name": `Top`,
                        layoutDependency: C,
                        layoutId: `cKP1lWV6S`,
                        children: [
                          f(P, {
                            __fromCanvasComponent: !0,
                            children: f(r, {
                              children: f(D.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7Qm9sZG9uc2UtcmVndWxhcg==`,
                                  "--framer-font-family": `"Boldonse", sans-serif`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                  "--framer-font-size": `65.7373440939105px`,
                                  "--framer-line-height": `140%`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                  "--framer-text-transform": `uppercase`,
                                },
                                children: f(V, {
                                  href: `mailto:Hello@sweetmorels.com `,
                                  motionChild: !0,
                                  nodeId: `o_CL6_qJU`,
                                  openInNewTab: !0,
                                  relValues: [],
                                  scopeId: `rzh7ilZ6v`,
                                  smoothScroll: !1,
                                  children: f(D.a, {
                                    className: `framer-styles-preset-1nudwxd`,
                                    "data-styles-preset": `Smsl9Chye`,
                                    children: `Hello@sweetmorels.com`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-1pg413i`,
                            fonts: [`GF;Boldonse-regular`],
                            layoutDependency: C,
                            layoutId: `o_CL6_qJU`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                            },
                            verticalAlignment: `top`,
                            viewBox: `0 0 1120 92`,
                            withExternalLayout: !0,
                          }),
                          v(D.div, {
                            className: `framer-1cepwhi`,
                            "data-framer-name": `Navigations`,
                            layoutDependency: C,
                            layoutId: `f9qdgHeek`,
                            children: [
                              v(D.div, {
                                className: `framer-1mofrxn`,
                                "data-framer-name": `Nav Button`,
                                layoutDependency: C,
                                layoutId: `YgGV716LF`,
                                children: [
                                  f(L, {
                                    links: [
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 28,
                                        children: f(M, {
                                          className: `framer-1pjhqfg-container`,
                                          layoutDependency: C,
                                          layoutId: `GLMwyZSt7-container`,
                                          nodeId: `GLMwyZSt7`,
                                          rendersWithMotion: !0,
                                          scopeId: `rzh7ilZ6v`,
                                          children: f(Q, {
                                            height: `100%`,
                                            hZ9x8zNzT: `HOME`,
                                            id: `GLMwyZSt7`,
                                            layoutId: `GLMwyZSt7`,
                                            p2YCowchD: e[0],
                                            P6ViGy2SA: !1,
                                            width: `100%`,
                                            ...pr(
                                              {
                                                tcVr9I2qR: { p2YCowchD: e[1] },
                                                VZy0bN3o5: { p2YCowchD: e[2] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(L, {
                                    links: [
                                      {
                                        href: { webPageId: `h2olteT1_` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `h2olteT1_` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `h2olteT1_` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 28,
                                        children: f(M, {
                                          className: `framer-g176b3-container`,
                                          layoutDependency: C,
                                          layoutId: `Rllc5MK4y-container`,
                                          nodeId: `Rllc5MK4y`,
                                          rendersWithMotion: !0,
                                          scopeId: `rzh7ilZ6v`,
                                          children: f(Q, {
                                            height: `100%`,
                                            hZ9x8zNzT: `ABOUT US`,
                                            id: `Rllc5MK4y`,
                                            layoutId: `Rllc5MK4y`,
                                            p2YCowchD: e[0],
                                            P6ViGy2SA: !1,
                                            width: `100%`,
                                            ...pr(
                                              {
                                                tcVr9I2qR: { p2YCowchD: e[1] },
                                                VZy0bN3o5: { p2YCowchD: e[2] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              v(D.div, {
                                className: `framer-9jii9n`,
                                "data-framer-name": `Nav Button`,
                                layoutDependency: C,
                                layoutId: `T1WyGlbF1`,
                                children: [
                                  f(L, {
                                    links: [
                                      {
                                        href: { webPageId: `Bbzc06U8n` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Bbzc06U8n` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Bbzc06U8n` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 28,
                                        children: f(M, {
                                          className: `framer-ai81s0-container`,
                                          layoutDependency: C,
                                          layoutId: `eBbSUlOmq-container`,
                                          nodeId: `eBbSUlOmq`,
                                          rendersWithMotion: !0,
                                          scopeId: `rzh7ilZ6v`,
                                          children: f(Q, {
                                            height: `100%`,
                                            hZ9x8zNzT: `SHOP`,
                                            id: `eBbSUlOmq`,
                                            layoutId: `eBbSUlOmq`,
                                            p2YCowchD: e[0],
                                            P6ViGy2SA: !1,
                                            width: `100%`,
                                            ...pr(
                                              {
                                                tcVr9I2qR: { p2YCowchD: e[1] },
                                                VZy0bN3o5: { p2YCowchD: e[2] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(L, {
                                    links: [
                                      {
                                        href: { webPageId: `o6ceITeut` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `o6ceITeut` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `o6ceITeut` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 28,
                                        children: f(M, {
                                          className: `framer-m47hiu-container`,
                                          layoutDependency: C,
                                          layoutId: `S1Nzlw6eW-container`,
                                          nodeId: `S1Nzlw6eW`,
                                          rendersWithMotion: !0,
                                          scopeId: `rzh7ilZ6v`,
                                          children: f(Q, {
                                            height: `100%`,
                                            hZ9x8zNzT: `CONTACT`,
                                            id: `S1Nzlw6eW`,
                                            layoutId: `S1Nzlw6eW`,
                                            p2YCowchD: e[0],
                                            P6ViGy2SA: !1,
                                            width: `100%`,
                                            ...pr(
                                              {
                                                tcVr9I2qR: { p2YCowchD: e[1] },
                                                VZy0bN3o5: { p2YCowchD: e[2] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              v(D.div, {
                                className: `framer-1m41hk7`,
                                "data-framer-name": `Nav Button`,
                                layoutDependency: C,
                                layoutId: `lMrdAcRSg`,
                                children: [
                                  f(H, {
                                    height: 28,
                                    children: f(M, {
                                      className: `framer-1c05so9-container`,
                                      layoutDependency: C,
                                      layoutId: `tISxnukRA-container`,
                                      nodeId: `tISxnukRA`,
                                      rendersWithMotion: !0,
                                      scopeId: `rzh7ilZ6v`,
                                      children: f(Q, {
                                        height: `100%`,
                                        hZ9x8zNzT: `INSTAGRAM`,
                                        id: `tISxnukRA`,
                                        layoutId: `tISxnukRA`,
                                        p2YCowchD: `instagram.com/chanbaovu`,
                                        P6ViGy2SA: !0,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(H, {
                                    height: 28,
                                    children: f(M, {
                                      className: `framer-1qryzc-container`,
                                      layoutDependency: C,
                                      layoutId: `vnIML4YDW-container`,
                                      nodeId: `vnIML4YDW`,
                                      rendersWithMotion: !0,
                                      scopeId: `rzh7ilZ6v`,
                                      children: f(Q, {
                                        height: `100%`,
                                        hZ9x8zNzT: `X/TWITTER`,
                                        id: `vnIML4YDW`,
                                        layoutId: `vnIML4YDW`,
                                        p2YCowchD: `x.com/chanbaooo`,
                                        P6ViGy2SA: !0,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              v(D.div, {
                                className: `framer-hsun77`,
                                "data-framer-name": `Nav Button`,
                                layoutDependency: C,
                                layoutId: `erdZqVo7G`,
                                children: [
                                  f(H, {
                                    height: 28,
                                    children: f(M, {
                                      className: `framer-5njhv3-container`,
                                      layoutDependency: C,
                                      layoutId: `Gm9t1GhxI-container`,
                                      nodeId: `Gm9t1GhxI`,
                                      rendersWithMotion: !0,
                                      scopeId: `rzh7ilZ6v`,
                                      children: f(Q, {
                                        height: `100%`,
                                        hZ9x8zNzT: `Ocala, FL 34471, USA`,
                                        id: `Gm9t1GhxI`,
                                        layoutId: `Gm9t1GhxI`,
                                        p2YCowchD: `https://www.google.com/maps`,
                                        P6ViGy2SA: !1,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(H, {
                                    height: 28,
                                    children: f(M, {
                                      className: `framer-187x428-container`,
                                      layoutDependency: C,
                                      layoutId: `XprpG2KaE-container`,
                                      nodeId: `XprpG2KaE`,
                                      rendersWithMotion: !0,
                                      scopeId: `rzh7ilZ6v`,
                                      children: f(Q, {
                                        height: `100%`,
                                        hZ9x8zNzT: `+1 234 567 890`,
                                        id: `XprpG2KaE`,
                                        layoutId: `XprpG2KaE`,
                                        p2YCowchD: `tel:+1 234 567 890`,
                                        P6ViGy2SA: !1,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      v(D.div, {
                        className: `framer-17zznet`,
                        "data-border": !0,
                        "data-framer-name": `Bottom`,
                        layoutDependency: C,
                        layoutId: `RsUu4RheI`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-7a381f4a-a873-46d2-95c9-a72e430e1732, rgb(191, 191, 191))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                        },
                        children: [
                          v(D.div, {
                            className: `framer-1s330it`,
                            "data-framer-name": `Left`,
                            layoutDependency: C,
                            layoutId: `OkLq97wtv`,
                            children: [
                              f(H, {
                                children: f(M, {
                                  className: `framer-whqhan-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: C,
                                  layoutId: `Ca_MhgT8M-container`,
                                  nodeId: `Ca_MhgT8M`,
                                  rendersWithMotion: !0,
                                  scopeId: `rzh7ilZ6v`,
                                  children: f(qn, {
                                    color: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                    companyName: `Sweet Morels`,
                                    font: {
                                      fontFamily: `"Chillax", "Chillax Placeholder", sans-serif`,
                                      fontSize: `14px`,
                                      fontStyle: `normal`,
                                      fontWeight: 400,
                                      letterSpacing: `0em`,
                                      lineHeight: `140%`,
                                      textAlign: `left`,
                                    },
                                    fontSize: 1,
                                    height: `100%`,
                                    id: `Ca_MhgT8M`,
                                    layoutId: `Ca_MhgT8M`,
                                    rightsText: `All rights reserved`,
                                    showSymbol: `yes`,
                                    showTrademark: `yes`,
                                    textAlign: `left`,
                                    trademarkType: `trademark`,
                                    width: `100%`,
                                    yearPlacement: `afterRightsText`,
                                    ...pr(
                                      {
                                        tcVr9I2qR: {
                                          font: {
                                            fontFamily: `"Chillax", "Chillax Placeholder", sans-serif`,
                                            fontSize: `12px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `140%`,
                                            textAlign: `left`,
                                          },
                                        },
                                        VZy0bN3o5: {
                                          font: {
                                            fontFamily: `"Chillax", "Chillax Placeholder", sans-serif`,
                                            fontSize: `12px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `140%`,
                                            textAlign: `left`,
                                          },
                                          style: { width: `100%` },
                                          textAlign: `center`,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                  }),
                                }),
                              }),
                              E() &&
                                f(P, {
                                  __fromCanvasComponent: !0,
                                  children: f(r, {
                                    children: f(D.p, {
                                      className: `framer-styles-preset-1qudkk0`,
                                      "data-styles-preset": `YY88YzDKP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                      },
                                      children: `|`,
                                    }),
                                  }),
                                  className: `framer-rb30x1`,
                                  fonts: [`Inter`],
                                  layoutDependency: C,
                                  layoutId: `dfbb8p9jc`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                          f(P, {
                            __fromCanvasComponent: !0,
                            children: f(r, {
                              children: f(D.p, {
                                className: `framer-styles-preset-1qudkk0`,
                                "data-styles-preset": `YY88YzDKP`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                },
                                children: f(V, {
                                  href: `https://www.framer.com/@bao-chan-lsn0jd/`,
                                  motionChild: !0,
                                  nodeId: `eljzMciKB`,
                                  openInNewTab: !0,
                                  relValues: [],
                                  scopeId: `rzh7ilZ6v`,
                                  smoothScroll: !1,
                                  children: f(D.a, {
                                    className: `framer-styles-preset-1tcbvx1`,
                                    "data-styles-preset": `mEMD66q65`,
                                    children: `DESIGN & CREATED BY MINO`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-8vfhcs`,
                            fonts: [`Inter`],
                            layoutDependency: C,
                            layoutId: `eljzMciKB`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...pr(
                              {
                                VZy0bN3o5: {
                                  children: f(r, {
                                    children: f(D.p, {
                                      className: `framer-styles-preset-1qudkk0`,
                                      "data-styles-preset": `YY88YzDKP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                      },
                                      children: f(V, {
                                        href: `https://www.framer.com/@bao-chan-lsn0jd/`,
                                        motionChild: !0,
                                        nodeId: `eljzMciKB`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `rzh7ilZ6v`,
                                        smoothScroll: !1,
                                        children: f(D.a, {
                                          className: `framer-styles-preset-1tcbvx1`,
                                          "data-styles-preset": `mEMD66q65`,
                                          children: `DESIGN & CREATED BY MINO`,
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                              },
                              m,
                              b
                            ),
                          }),
                          v(D.div, {
                            className: `framer-13x2ju4`,
                            layoutDependency: C,
                            layoutId: `N4zDZPuas`,
                            children: [
                              f(P, {
                                __fromCanvasComponent: !0,
                                children: f(r, {
                                  children: f(D.p, {
                                    className: `framer-styles-preset-1qudkk0`,
                                    "data-styles-preset": `YY88YzDKP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                    },
                                    children: f(V, {
                                      href: { webPageId: `yJdAJFmM3` },
                                      motionChild: !0,
                                      nodeId: `KNszyliZP`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `rzh7ilZ6v`,
                                      smoothScroll: !1,
                                      children: f(D.a, {
                                        className: `framer-styles-preset-1tcbvx1`,
                                        "data-styles-preset": `mEMD66q65`,
                                        children: `GET TEMPLATE`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-9icj57`,
                                fonts: [`Inter`],
                                layoutDependency: C,
                                layoutId: `KNszyliZP`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...pr(
                                  {
                                    VZy0bN3o5: {
                                      children: f(r, {
                                        children: f(D.p, {
                                          className: `framer-styles-preset-1qudkk0`,
                                          "data-styles-preset": `YY88YzDKP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                          },
                                          children: f(V, {
                                            href: { webPageId: `yJdAJFmM3` },
                                            motionChild: !0,
                                            nodeId: `KNszyliZP`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `rzh7ilZ6v`,
                                            smoothScroll: !1,
                                            children: f(D.a, {
                                              className: `framer-styles-preset-1tcbvx1`,
                                              "data-styles-preset": `mEMD66q65`,
                                              children: `GET TEMPLATE`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                  },
                                  m,
                                  b
                                ),
                              }),
                              f(P, {
                                __fromCanvasComponent: !0,
                                children: f(r, {
                                  children: f(D.p, {
                                    className: `framer-styles-preset-1qudkk0`,
                                    "data-styles-preset": `YY88YzDKP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                    },
                                    children: f(V, {
                                      href: {
                                        pathVariables: { kljfBG2kD: `term` },
                                        unresolvedPathSlugs: {
                                          kljfBG2kD: {
                                            collectionId: `dLEqNZtN9`,
                                            collectionItemId: `oqtRhADrF`,
                                          },
                                        },
                                        webPageId: `nICBT0TbO`,
                                      },
                                      motionChild: !0,
                                      nodeId: `MBsZ8cD9x`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `rzh7ilZ6v`,
                                      smoothScroll: !1,
                                      children: f(D.a, {
                                        className: `framer-styles-preset-1tcbvx1`,
                                        "data-styles-preset": `mEMD66q65`,
                                        children: `TERM OF SERVICES`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-d14y3t`,
                                fonts: [`Inter`],
                                layoutDependency: C,
                                layoutId: `MBsZ8cD9x`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
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
          `.framer-7JeGt.framer-1cuakhm, .framer-7JeGt .framer-1cuakhm { display: block; }`,
          `.framer-7JeGt.framer-1amkxwa { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-7JeGt .framer-cigiig { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 40px 0px 40px; position: relative; width: 1px; }`,
          `.framer-7JeGt .framer-1lg6qk2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-7JeGt .framer-1pg413i { flex: none; height: auto; position: relative; white-space: pre; width: 100%; }`,
          `.framer-7JeGt .framer-1cepwhi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-7JeGt .framer-1mofrxn, .framer-7JeGt .framer-9jii9n, .framer-7JeGt .framer-1m41hk7, .framer-7JeGt .framer-hsun77 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-7JeGt .framer-1pjhqfg-container, .framer-7JeGt .framer-g176b3-container, .framer-7JeGt .framer-ai81s0-container, .framer-7JeGt .framer-m47hiu-container, .framer-7JeGt .framer-1c05so9-container, .framer-7JeGt .framer-1qryzc-container, .framer-7JeGt .framer-5njhv3-container, .framer-7JeGt .framer-187x428-container, .framer-7JeGt .framer-whqhan-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-7JeGt .framer-17zznet { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 20px 0px; position: relative; width: 100%; }`,
          `.framer-7JeGt .framer-1s330it { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-7JeGt .framer-rb30x1, .framer-7JeGt .framer-8vfhcs, .framer-7JeGt .framer-9icj57, .framer-7JeGt .framer-d14y3t { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-7JeGt .framer-13x2ju4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-7JeGt.framer-v-1r1569e.framer-1amkxwa { width: 810px; }`,
          `.framer-7JeGt.framer-v-1r1569e .framer-cigiig { gap: 80px; padding: 40px 32px 0px 32px; }`,
          `.framer-7JeGt.framer-v-1r1569e .framer-1lg6qk2 { gap: 40px; }`,
          `.framer-7JeGt.framer-v-1r1569e .framer-1cepwhi { align-content: unset; align-items: unset; display: grid; gap: 24px 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); }`,
          `.framer-7JeGt.framer-v-1r1569e .framer-1mofrxn, .framer-7JeGt.framer-v-1r1569e .framer-9jii9n, .framer-7JeGt.framer-v-1r1569e .framer-1m41hk7, .framer-7JeGt.framer-v-1r1569e .framer-hsun77 { align-self: start; flex: none; gap: 8px; justify-self: start; width: 100%; }`,
          `.framer-7JeGt.framer-v-1r1569e .framer-17zznet { padding: 16px 0px 16px 0px; }`,
          `.framer-7JeGt.framer-v-1r1569e .framer-13x2ju4 { gap: 20px; }`,
          `.framer-7JeGt.framer-v-lq4jza.framer-1amkxwa { flex-direction: column; width: 390px; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-cigiig { flex: none; gap: 60px; padding: 40px 20px 0px 20px; width: 100%; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-1lg6qk2 { gap: 32px; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-1cepwhi { align-content: unset; align-items: unset; display: grid; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-1mofrxn, .framer-7JeGt.framer-v-lq4jza .framer-9jii9n, .framer-7JeGt.framer-v-lq4jza .framer-1m41hk7, .framer-7JeGt.framer-v-lq4jza .framer-hsun77 { align-self: start; flex: none; gap: 6px; justify-self: start; width: 100%; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-17zznet { flex-direction: column; gap: 4px; justify-content: center; padding: 12px 0px 12px 0px; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-1s330it { flex-direction: column; gap: 4px; order: 0; width: 100%; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-whqhan-container { width: 100%; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-8vfhcs { order: 2; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7JeGt.framer-v-lq4jza .framer-13x2ju4 { gap: 20px; order: 1; width: 100%; }`,
          ...er,
          ...Qe,
          ...Xn,
          `.framer-7JeGt[data-border="true"]::after, .framer-7JeGt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-7JeGt`
      )),
      ($.displayName = `Footer`),
      ($.defaultProps = { height: 430, width: 1200 }),
      j($, {
        variant: {
          options: [`CETe0mpvd`, `tcVr9I2qR`, `VZy0bN3o5`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      U(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Boldonse`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Boldonse`,
                url: `../../assets/fonts/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Chillax`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Chillax`,
                url: `../../assets/misc/XESIRBQU62YFBC7YQZI6D2NT5CNZ4PPU.woff2`,
                weight: `400`,
              },
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
          ...mr,
          ...hr,
          ...oe($n),
          ...oe($e),
          ...oe(Yn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([F(Q, {}, t)])) }));
  }),
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
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r = e(() => {
    (x(),
      B(),
      A(),
      c(),
      d(),
      ht(),
      en(),
      Kn(),
      Tr(),
      Je(),
      (Er = R(Z)),
      (Dr = R(Ye)),
      (Or = R(J)),
      (kr = R($)),
      (Ar = R(mt)),
      (jr = {
        gl4rz7ZY5: `(max-width: 809.98px)`,
        k_sVXkbRY: `(min-width: 810px) and (max-width: 1199.98px)`,
        tCtbGw6rX: `(min-width: 1200px)`,
      }),
      (Mr = () => typeof document < `u`),
      (Nr = `framer-7rZ4C`),
      (Pr = {
        gl4rz7ZY5: `framer-v-inloxl`,
        k_sVXkbRY: `framer-v-vtly3v`,
        tCtbGw6rX: `framer-v-sah777`,
      }),
      (Fr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ir = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0, 1], type: `tween` }),
      (Lr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ir,
        x: 450,
        y: 0,
      }),
      (Rr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ir,
        x: 0,
        y: 0,
      }),
      (zr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 450,
        y: 0,
      }),
      (Br = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (Vr = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = Le({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Hr = {
        gl4rz7ZY5: [
          `.framer-7rZ4C.framer-oiexv9-container { width: 100%; }`,
          `.framer-7rZ4C.framer-o71la7 { z-index: 10; }`,
          `.framer-7rZ4C.framer-11eqxoi-container { height: 100vh; left: 0px; top: 0px; width: 100%; z-index: 10; }`,
        ],
        k_sVXkbRY: [`.framer-7rZ4C.framer-oiexv9-container { width: 450px; }`],
      }),
      (Ur = Object.keys(Hr)),
      (Wr = { gl4rz7ZY5: `.framer-inloxl-override`, k_sVXkbRY: `.framer-vtly3v-override` }),
      (Gr = [
        `.framer-7rZ4C.framer-4hax7l, .framer-7rZ4C .framer-4hax7l { display: block; }`,
        `.framer-7rZ4C.framer-sah777 { align-content: center; align-items: center; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-7rZ4C .framer-a95ljr-container { flex: none; height: auto; left: 0px; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 10; }`,
        `.framer-7rZ4C.framer-f19ja2 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-7rZ4C.framer-oiexv9-container { flex: none; height: 100vh; position: fixed; right: 0px; top: 0px; width: 500px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-7rZ4C.framer-o71la7 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-7rZ4C.framer-11eqxoi-container { flex: none; height: 800px; left: -39px; position: fixed; top: -268px; width: 390px; }`,
        `.framer-7rZ4C .framer-1gvve6s { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-7rZ4C .framer-2l3wqg-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; z-index: 1; }`,
        `.framer-7rZ4C .framer-18wms06-container { flex: none; height: auto; order: 1003; position: relative; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Kr = {
        gl4rz7ZY5: `(max-width: 809.98px)`,
        k_sVXkbRY: `(min-width: 810px) and (max-width: 1199.98px)`,
        tCtbGw6rX: `(min-width: 1200px)`,
      }),
      (qr = { Desktop: `tCtbGw6rX`, Phone: `gl4rz7ZY5`, Tablet: `k_sVXkbRY` }),
      (Jr = ({ value: e }) =>
        Ce()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Yr = ({ footer: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K38FouY5K: e ?? i.K38FouY5K ?? !0,
        variant: qr[i.variant] ?? i.variant ?? `tCtbGw6rX`,
      })),
      (Xr = p(function (e, t) {
        let n = _(null),
          r = t ?? n,
          i = T(),
          { activeLocale: a, setLocale: o } = G(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: u,
            K38FouY5K: d,
            children: p,
            ...m
          } = Yr(e),
          [g, y] = Oe(u, jr, !1),
          { activeVariantCallback: b, delay: x } = ge(void 0),
          S = ({ overlay: e }) =>
            b(async (...t) => {
              e.toggle();
            }),
          ee = ({ overlay: e }) =>
            b(async (...t) => {
              e.toggle();
            }),
          C = ({ overlay: e }) =>
            b(async (...t) => {
              e.hide();
            }),
          w = ({ overlay: e }) =>
            b(async (...t) => {
              e.hide();
            }),
          E = I(Nr),
          O = () => !Mr() || g === `gl4rz7ZY5`;
        return (
          xe({}),
          f(Me.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: qr,
              isLayoutTemplate: !0,
              primaryVariantId: `tCtbGw6rX`,
              variantClassNames: Pr,
            },
            children: v(k, {
              id: l ?? i,
              children: [
                f(Jr, {
                  value: `:root body { background: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 255, 255)); }`,
                }),
                v(D.div, {
                  ...m,
                  className: I(E, `framer-sah777`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    f(Vr, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        f(Vr, {
                          dismissWithEsc: !0,
                          children: (t) =>
                            f(te, {
                              children: f(H, {
                                height: 60,
                                width: `100vw`,
                                y: 0,
                                children: v(me, {
                                  className: `framer-a95ljr-container`,
                                  layoutScroll: !0,
                                  nodeId: `eVNFDvZZ4`,
                                  scopeId: `FGNb6gfUL`,
                                  children: [
                                    f(Ie, {
                                      breakpoint: g,
                                      overrides: {
                                        gl4rz7ZY5: { variant: Fr(`EHSM8x7O_`) },
                                        k_sVXkbRY: { variant: Fr(`RHuWIQFI_`) },
                                      },
                                      children: f(Z, {
                                        height: `100%`,
                                        id: `eVNFDvZZ4`,
                                        layoutId: `eVNFDvZZ4`,
                                        Lgq8yGp59: S({ overlay: t }),
                                        style: { width: `100%` },
                                        TgZBpwlSo: ee({ overlay: e }),
                                        variant: Fr(`SAqN6n9Hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                    f(ne, {
                                      children:
                                        t.visible &&
                                        f(te, {
                                          children: h(
                                            f(De, {
                                              children: v(Pe, {
                                                children: [
                                                  f(
                                                    D.div,
                                                    {
                                                      animate: {
                                                        opacity: 1,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0.5, 0, 0.88, 0.77],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      className: I(E, `framer-f19ja2`),
                                                      "data-framer-name": `Cart Overlay`,
                                                      exit: {
                                                        opacity: 0,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0.12, 0.23, 0.5, 1],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      initial: { opacity: 0 },
                                                      onTap: () => t.hide(),
                                                    },
                                                    `fiFI5Jcmz`
                                                  ),
                                                  f(Ie, {
                                                    breakpoint: g,
                                                    overrides: {
                                                      gl4rz7ZY5: { width: `100vw` },
                                                      k_sVXkbRY: { width: `450px` },
                                                    },
                                                    children: f(H, {
                                                      width: `500px`,
                                                      children: f(me, {
                                                        animate: Rr,
                                                        className: I(E, `framer-oiexv9-container`),
                                                        exit: Lr,
                                                        inComponentSlot: !0,
                                                        initial: zr,
                                                        nodeId: `N94sHFPeW`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `FGNb6gfUL`,
                                                        children: f(Ie, {
                                                          breakpoint: g,
                                                          overrides: {
                                                            gl4rz7ZY5: {
                                                              WzYQugjV7: `16px 20px 16px 20px`,
                                                            },
                                                            k_sVXkbRY: {
                                                              WzYQugjV7: `16px 32px 16px 32px`,
                                                            },
                                                          },
                                                          children: f(Ye, {
                                                            height: `100%`,
                                                            id: `N94sHFPeW`,
                                                            layoutId: `N94sHFPeW`,
                                                            mVII5M5cP: C({ overlay: t }),
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            width: `100%`,
                                                            WzYQugjV7: `16px 40px 16px 40px`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Br()
                                          ),
                                        }),
                                    }),
                                    f(ne, {
                                      children:
                                        e.visible &&
                                        f(te, {
                                          children: h(
                                            f(De, {
                                              children: v(Pe, {
                                                children: [
                                                  f(
                                                    D.div,
                                                    {
                                                      animate: {
                                                        opacity: 1,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0.5, 0, 0.88, 0.77],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      className: I(E, `framer-o71la7`),
                                                      "data-framer-name": `Menu Overlay - Phone`,
                                                      exit: {
                                                        opacity: 0,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0.12, 0.23, 0.5, 1],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      initial: { opacity: 0 },
                                                      onTap: () => e.hide(),
                                                    },
                                                    `XwAA1APoa`
                                                  ),
                                                  O() &&
                                                    f(Ie, {
                                                      breakpoint: g,
                                                      overrides: { gl4rz7ZY5: { width: `100vw` } },
                                                      children: f(H, {
                                                        children: f(me, {
                                                          className: `${I(E, `framer-11eqxoi-container`)} hidden-sah777 hidden-vtly3v`,
                                                          inComponentSlot: !0,
                                                          nodeId: `KTcuH4qB2`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `FGNb6gfUL`,
                                                          children: f(Ie, {
                                                            breakpoint: g,
                                                            overrides: {
                                                              gl4rz7ZY5: {
                                                                O7jaJtaX1: w({ overlay: e }),
                                                              },
                                                            },
                                                            children: f(J, {
                                                              height: `100%`,
                                                              id: `KTcuH4qB2`,
                                                              layoutId: `KTcuH4qB2`,
                                                              style: {
                                                                height: `100%`,
                                                                width: `100%`,
                                                              },
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                ],
                                              }),
                                            }),
                                            Br()
                                          ),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        }),
                    }),
                    p,
                    f(`div`, { className: `framer-1gvve6s` }),
                    d !== !1 &&
                      f(H, {
                        height: 430,
                        width: `100vw`,
                        y: 1e3,
                        children: f(me, {
                          className: `framer-2l3wqg-container`,
                          nodeId: `zCWChpmJ9`,
                          scopeId: `FGNb6gfUL`,
                          children: f(Ie, {
                            breakpoint: g,
                            overrides: {
                              gl4rz7ZY5: { variant: Fr(`VZy0bN3o5`) },
                              k_sVXkbRY: { variant: Fr(`tcVr9I2qR`) },
                            },
                            children: f($, {
                              height: `100%`,
                              id: `zCWChpmJ9`,
                              layoutId: `zCWChpmJ9`,
                              style: { width: `100%` },
                              variant: Fr(`CETe0mpvd`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    f(H, {
                      children: f(me, {
                        className: `framer-18wms06-container`,
                        isModuleExternal: !0,
                        nodeId: `OHzLbrIxO`,
                        scopeId: `FGNb6gfUL`,
                        children: f(mt, {
                          height: `100%`,
                          id: `OHzLbrIxO`,
                          intensity: 8,
                          layoutId: `OHzLbrIxO`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Zr = (e) =>
        e === ie.canvas || e === ie.export
          ? [
              ...Gr,
              ...Ur.flatMap((e) => {
                let t = Wr[e];
                return Hr[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Gr, ...Ur.map((e) => `@media ${Kr[e]} { ${Hr[e].join(` `)} }`)]),
      (Qr = N(Xr, Zr, `framer-7rZ4C`)),
      (Qr.displayName = `Main`),
      (Qr.defaultProps = { height: 1345, width: 1200 }),
      j(Qr, { K38FouY5K: { defaultValue: !0, description: ``, title: `Footer`, type: W.Boolean } }),
      U(Qr, [{ explicitInter: !0, fonts: [] }, ...Er, ...Dr, ...Or, ...kr, ...Ar], {
        supportsExplicitInterCodegen: !0,
      }),
      (Qr.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([F(Z, {}, t), F(Ye, {}, t), F(J, {}, t), F($, {}, t)])
        ),
      }));
  });
function ei({ webPageId: e, children: t, style: n, ...r }) {
  let i = { K38FouY5K: !0 },
    a =
      {
        augiA20Il: i,
        Bbzc06U8n: i,
        h2olteT1_: i,
        hsuD1wdR7: i,
        J_y0pMyxx: i,
        nICBT0TbO: i,
        o6ceITeut: i,
        ODxFr4QpK: { ...i, K38FouY5K: !1 },
        yJdAJFmM3: i,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `yJdAJFmM3`:
    case `h2olteT1_`:
    case `o6ceITeut`:
    case `ODxFr4QpK`:
    case `Bbzc06U8n`:
    case `J_y0pMyxx`:
    case `hsuD1wdR7`:
    case `nICBT0TbO`:
      return w(Qr, { ...a, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function ti(e) {
  switch (e) {
    case `augiA20Il`:
    case `yJdAJFmM3`:
    case `h2olteT1_`:
    case `o6ceITeut`:
    case `ODxFr4QpK`:
    case `Bbzc06U8n`:
    case `J_y0pMyxx`:
    case `hsuD1wdR7`:
    case `nICBT0TbO`:
      return [
        { hash: `inloxl`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `vtly3v`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `sah777`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function ni({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: a,
  localeId: c,
  collectionItemId: u,
  contentLocaleId: d,
  shouldResolveInitialRouteContentState: f = !1,
}) {
  let p = ai[e].page.preload();
  (he({
    checkServerSideRouter: !1,
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    we(ci));
  let g = w(Ne, {
    children: w(_e, {
      children: w(Re, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: a,
        routes: ai,
        collectionUtils: si,
        framerSiteId: ci,
        notFoundPage: z(() => import("./BsDydc67DF_bhOwNhgx_Mn1L6zYFgS2uKGWK0bIDf58.D5CvyQs6.mjs")),
        isReducedMotion: void 0,
        localeId: c,
        locales: oi,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://sweet-morels.framer.website`,
        EditorBar:
          l === void 0
            ? void 0
            : (() => {
                if (ui) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return z(async () => {
                  l.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ve, useLocaleInfo: G, useRouter: Fe },
                    react: {
                      createElement: w,
                      Fragment: r,
                      memo: m,
                      useCallback: o,
                      useEffect: s,
                      useRef: _,
                      useState: i,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: ei,
        loadSnippetsModule: new Se(
          () => import("./GS0a0gO1d6ZkXsAZ31AOr7LVT9INaszWjIJ6olkwoJ0.Copd-PBT.mjs")
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: d,
      }),
    }),
    value: {
      global: {
        enter: {
          opacity: 1,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 0.5,
          transition: {
            damping: 30,
            delay: 0.1,
            duration: 0.5,
            ease: [0.32, 0.01, 0, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `100%`,
        },
        exit: {
          opacity: 1,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 0.8,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.5,
            ease: [0.32, 0.01, 0, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await p, g);
}
function ri() {
  li && l.__framer_events.push(arguments);
}
async function ii(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    ri(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s, c, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (a = d.contentLocaleId),
        (o = d.pathVariables),
        (s = d.canonicalPathVariables),
        (c = d.breakpoints),
        (r = ye(ai, r)));
    else {
      ye(ai, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ke(ai, decodeURIComponent(location.pathname), !0, oi);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let f = ni({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    l !== void 0 &&
      (async () => {
        let e = ai[r],
          t = oi.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && si) {
          let r = await si[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: ci,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await se({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (ue(`framer-rewrite-breakpoints`, () => {
          (Ee(c), l.__framer_onRewriteBreakpoints?.(c));
        }),
        (ui ? (e) => e() : u)(() => {
          (fe(), je(), C(t, p, { onRecoverableError: n }));
        }))
      : ee(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var ai, oi, si, ci, li, ui;
e(() => {
  if (
    (E(),
    B(),
    c(),
    d(),
    b(),
    $r(),
    (ai = {
      augiA20Il: {
        elements: {
          g9I5KbRmF: `scroll-path-1`,
          OvbfIU2KF: `text-reavel`,
          p9yu6LBJQ: `bg-change`,
          vASI_OBhy: `title-effect`,
          WyRK_hZvc: `hoz-scroll`,
          ZAc5c_pCg: `scroll-path`,
        },
        page: z(() => import("./F-f8MNDzm6K-XnoBoTFTOISb1mrOw69s_3OZexjB-70.B1zYAfE6.mjs")),
        path: `/`,
      },
      yJdAJFmM3: {
        elements: {},
        page: z(() => import("./sDf8JzJ0czrK0_yzglsupWr0stqt3hiUYQASXdZqsJ8.D_dwRejr.mjs")),
        path: `/get-template`,
      },
      h2olteT1_: {
        elements: {
          egG6myesZ: `key 3`,
          GsMyqwFaT: `bg-trigger`,
          hF5V4iTqR: `text-reavel`,
          XPtNSe9_p: `key-2`,
        },
        page: z(() => import("./lwkJq-YLiswON6GY0EwXgUExzTxnkOajTNmi9GoGPFQ.BdRkqfX8.mjs")),
        path: `/about`,
      },
      o6ceITeut: {
        elements: {},
        page: z(() => import("./Klop4V2hUlGGbrKGG2N5n1tnWdTGedAcJNbfa-r7x2M.AN04Cc5n.mjs")),
        path: `/contact`,
      },
      ODxFr4QpK: {
        elements: {},
        page: z(() => import("./BsDydc67DF_bhOwNhgx_Mn1L6zYFgS2uKGWK0bIDf58.D5CvyQs6.mjs")),
        path: `/404`,
      },
      Bbzc06U8n: {
        elements: {},
        page: z(() => import("./3astCwN-NO-Mui514QNGZUBGcL7OWdLo0m2UZmMxU30.DhzUo59z.mjs")),
        path: `/framer-commerce`,
      },
      J_y0pMyxx: {
        collectionId: `nEfD8A7bT`,
        elements: {},
        page: z(() => import("./vFexEzHMSfH7YxWoZkXQn1P3T7wrUcRcTIX2xLdWhEw.BJ15xzoU.mjs")),
        path: `/style/:uI3y5OxVC`,
      },
      hsuD1wdR7: {
        collectionId: `lmAnavhxT`,
        elements: {},
        page: z(() => import("./o1a9tqCsRNdXFMwYNI5GnwoX010MBPg2yF4m_igM3_U.6LXtTu-1.mjs")),
        path: `/framer-commerce/:QvNWOjBr7`,
      },
      nICBT0TbO: {
        collectionId: `dLEqNZtN9`,
        elements: {},
        page: z(() => import("./3k93yInDpkuI3Mj-2xqm_hnDqgA52oMGXOxrQwFoMy0.Dx8n5GmS.mjs")),
        path: `/legal/:kljfBG2kD`,
      },
    }),
    (oi = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (si = {
      dLEqNZtN9: async () =>
        (await import("./2LBWdX3nAxthPE_wOvperWoneHa9zgHPEZsc-q44x3c.CC8g1Qk_.mjs"))?.utils,
      lmAnavhxT: async () =>
        (await import("./cSaEzPd4KxOH1C0M1V4fzftNQDvw5LuGQiFrZh61Lnw.DHo-JSSt.mjs"))?.utils,
      nEfD8A7bT: async () =>
        (await import("./QFf94OfYOW9Wbw469IqXjdBK9uHmZoU57Mm9tkjIemU.DJyzaxvJ.mjs"))?.utils,
    }),
    (ci = `24d6bf194b23268131fe8eb8c2a3cb17d5a69df0b6723074fa12c90479db8a5a`),
    (li = typeof document < `u`),
    (ui = li && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(t.userAgent)),
    li)
  ) {
    ((l.__framer_importFromPackage = (e, t) => () =>
      w(Ae, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (l.__framer_events = l.__framer_events || []),
      ce());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? ii(!0, e) : ii(!1, e);
  }
})();
export { ti as getLayoutTemplateBreakpoints, ni as getPageRoot };
//# sourceMappingURL=script_main.DU0FKyjt.mjs.map
