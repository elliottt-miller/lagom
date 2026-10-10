import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  F as r,
  H as i,
  P as a,
  R as o,
  l as s,
  s as c,
  u as l,
} from "./react.ClsXD4bF.mjs";
import { M as u, T as d, Z as f, o as p } from "./framer.CbUxDv78.mjs";
import { d as m, f as h, u as g } from "./framerauth.Bsg5VUt2.mjs";
function _(e) {
  let t = i.location.href;
  if (!e) return t;
  if (e?.startsWith(`/`)) return new URL(e, t).href;
  try {
    return new URL(e).href;
  } catch {
    return t;
  }
  try {
    return new URL(e).href;
  } catch {
    return new URL(e, t).href;
  }
}
function v(e) {
  let {
      label: t,
      image: n,
      actionType: c,
      authAction: u,
      storeAction: f,
      link: p,
      pluginId: m,
      priceId: v,
      quantity: A,
      newTab: j,
      callback: M,
      button: N,
      style: P,
    } = e,
    { borderObject: F, buttonShadow: I, buttonPadding: L, buttonMargin: R } = N,
    z = a(() => {
      let e = t;
      return (
        (!t || t.trim().length === 0) &&
          c === `auth` &&
          (u === `googleSignIn` ? (e = E) : u === `githubSignIn` && (e = O)),
        e
      );
    }, [t, c, u]),
    B = a(() => {
      let e = n;
      return (
        e || (c === `auth` && (u === `googleSignIn` ? (e = D) : u === `githubSignIn` && (e = k))),
        e
      );
    }, [n, c, u]),
    [V, H] = o(!1),
    { user: U } = b(),
    { session: W } = x(),
    G = parseInt(N?.buttonFont?.fontSize || `13px`),
    K = Math.min(Math.max(G, 14), 120),
    q = I || null,
    J = F ? `inset 0 0 0 ${F.borderWidth}px ${F.borderColor}` : null,
    Y = r(
      () =>
        d.current() === d.canvas
          ? !0
          : c === `store` && f === `portal`
            ? !!U && !!W
            : c === `auth`
              ? u === `googleSignIn` || u === `githubSignIn`
                ? !W
                : u !== `signOut` || !!W
              : !0,
      [c, u, f, U, W]
    ),
    X = r(
      async (e) => {
        e.preventDefault();
        let t = _(M);
        console.log(`Callback url`, t);
        let n = _(p);
        if (!V) {
          H(!0);
          try {
            switch (c) {
              case `auth`:
                await Z(u, t);
                break;
              case `store`:
                await Q(U, f, m, v, A, t);
                break;
              case `link`:
                ($(n, j), H(!1));
                break;
              default:
                H(!1);
            }
          } catch (e) {
            (console.error(`Action failed:`, e), e instanceof Error && alert(e.message));
          } finally {
            H(!1);
          }
        }
      },
      [c, u, f, p, v, A, j, M, V, U]
    ),
    Z = r(async (e, t) => {
      switch (e) {
        case `googleSignIn`:
          C({ provider: `google`, callbackURL: t });
          break;
        case `githubSignIn`:
          C({ provider: `github`, callbackURL: t });
          break;
        case `signOut`:
          (await S(), i.location.reload());
          break;
        default:
          throw Error(`Unknown auth action: ${e}`);
      }
    }, []),
    Q = async (e, t, n, r, a, o) => {
      switch (t) {
        case `checkout`:
          if (!r) throw Error(`Price ID is required for checkout`);
          let s = await w({ pluginId: n, priceId: r, quantity: a || 1, successUrl: o });
          if (s.error)
            if (e && s.error.code === `EMAIL_NOT_VERIFIED`) {
              let t = `${s.error.message}
Press OK to send a verification email.`;
              if (!confirm(t)) return;
              let { error: n } = await T({ email: e.email, callbackURL: i.location.href });
              if (n) throw Error(n.message);
            } else throw Error(s.error.message || `Checkout failed`);
          else i.location.href = s.data.url;
          break;
        case `portal`:
          if (!(`storePortal` in g)) {
            let e = `${i?.FramerAuth?.baseURL}/plugins/${n}/portal`;
            (i.open(e, `_blank`, `noopener,noreferrer`), H(!1));
            break;
          }
          let c = await h({ pluginId: n });
          if (c.error) {
            if (c.error.code === `CUSTOMER_NOT_FOUND`) {
              alert(c.error.message || `No customer account found.`);
              return;
            }
            throw Error(c.error.message || `Unable to open portal`);
          }
          i.location.href = c.data.url;
          break;
        default:
          throw Error(`Unknown store action: ${t}`);
      }
    },
    $ = r((e, t) => {
      e && (t ? i.open(e, `_blank`, `noopener,noreferrer`) : (i.location.href = e));
    }, []),
    ee = () =>
      s(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          border: `2px solid transparent`,
          borderTop: `2px solid ${N?.color}`,
          borderRadius: `50%`,
          animation: `spin 1s linear infinite`,
        },
      }),
    te = () => {
      if (!B && !V) return null;
      let e =
        typeof B == `object` && `src` in B
          ? s(`img`, {
              src: B.src,
              srcSet: B.srcSet,
              alt: B.alt || ``,
              style: { width: `100%`, height: `100%`, objectFit: `contain` },
            })
          : B;
      return s(`div`, {
        style: {
          width: `${K}px`,
          height: `${K}px`,
          flexShrink: 0,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        },
        children: V ? s(ee, {}) : B ? e : null,
      });
    };
  return Y()
    ? l(`div`, {
        style: { margin: R },
        children: [
          s(`style`, {
            children: `
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `,
          }),
          l(`button`, {
            type: `button`,
            disabled: V,
            style: {
              ...P,
              width: `100%`,
              height: `100%`,
              background: N?.fill,
              color: N?.color,
              borderRadius: N?.borderRadius ?? 8,
              border: `none`,
              padding: L,
              boxShadow: y(q, J),
              cursor: V ? `not-allowed` : `pointer`,
              outline: `none`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              gap: `8px`,
              fontSize: 16,
              ...N?.buttonFont,
              userSelect: `none`,
              transition: `background 0.15s, color 0.15s, box-shadow 0.15s`,
              opacity: V ? 0.7 : 1,
              position: `relative`,
            },
            "aria-label": z,
            onClick: X,
            tabIndex: 0,
            children: [
              s(te, {}),
              z &&
                s(`span`, {
                  style: { width: `max-content`, minWidth: 0, ...N?.buttonFont },
                  children: z,
                }),
            ],
          }),
        ],
      })
    : null;
}
function y(...e) {
  let t = [];
  return (e.forEach((e) => e && t.push(e)), t.join(`, `));
}
var b,
  x,
  S,
  C,
  w,
  T,
  E,
  D,
  O,
  k,
  A = e(() => {
    (t(),
      c(),
      f(),
      n(),
      m(),
      ({
        useUser: b,
        useSession: x,
        signOut: S,
        signInSocial: C,
        storeCheckout: w,
        sendVerificationEmail: T,
      } = g),
      (E = `Continue with Google`),
      (D = l(`svg`, {
        version: `1.1`,
        x: `0px`,
        y: `0px`,
        width: `48px`,
        height: `48px`,
        viewBox: `0 0 48 48`,
        "enable-background": `new 0 0 48 48`,
        children: [
          s(`path`, {
            fill: `#FFC107`,
            d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`,
          }),
          ` `,
          s(`path`, {
            fill: `#FF3D00`,
            d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`,
          }),
          ` `,
          s(`path`, {
            fill: `#4CAF50`,
            d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`,
          }),
          ` `,
          s(`path`, {
            fill: `#1976D2`,
            d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`,
          }),
          ` `,
        ],
      })),
      (O = `Continue with Github`),
      (k = s(`svg`, {
        viewBox: `0 0 512 512`,
        children: s(`path`, {
          d: `M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`,
        }),
      })),
      u(v, {
        actionType: {
          type: p.Enum,
          options: [`auth`, `store`, `link`],
          optionTitles: [`Auth`, `Store`, `Link`],
        },
        authAction: {
          type: p.Enum,
          title: `Action`,
          options: [`googleSignIn`, `githubSignIn`, `signOut`],
          optionTitles: [`Sign in with Google`, `Sign in with Github`, `Sign out`],
          hidden(e) {
            return e.actionType !== `auth`;
          },
        },
        link: {
          type: p.Link,
          hidden(e) {
            switch (e.actionType) {
              case `auth`:
                return !0;
              case `store`:
                return !0;
              case `link`:
                return !1;
              default:
                return !0;
            }
          },
        },
        newTab: {
          type: p.Boolean,
          title: `New Tab`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.actionType !== `link`;
          },
        },
        storeAction: {
          type: p.Enum,
          title: `Action`,
          options: [`checkout`, `portal`],
          optionTitles: [`Checkout`, `Portal`],
          hidden(e) {
            return e.actionType !== `store`;
          },
        },
        pluginId: {
          title: `Plugin`,
          type: p.Enum,
          options: [`stripe`, `lemonsqueezy`],
          optionTitles: [`Stripe`, `Lemon Squeezy`],
          defaultValue: `stripe`,
          hidden(e) {
            return e.actionType !== `store`;
          },
        },
        priceId: {
          title: `Lookup Key`,
          type: p.String,
          hidden(e) {
            switch (e.actionType) {
              case `auth`:
                return !0;
              case `store`:
                return e.storeAction !== `checkout`;
              default:
                return !0;
            }
          },
        },
        quantity: {
          type: p.Number,
          defaultValue: 1,
          hidden(e) {
            switch (e.actionType) {
              case `auth`:
                return !0;
              case `store`:
                return e.storeAction !== `checkout`;
              default:
                return !0;
            }
          },
        },
        label: { type: p.String, title: `Label`, defaultValue: `Button` },
        image: { type: p.ResponsiveImage },
        callback: {
          type: p.Link,
          title: `Redirect`,
          hidden(e) {
            switch (e.actionType) {
              case `auth`:
                return !(e.authAction === `googleSignIn` || e.authAction === `githubSignIn`);
              case `store`:
                return e.storeAction !== `checkout`;
              default:
                return !0;
            }
          },
        },
        button: {
          title: `Button`,
          type: p.Object,
          controls: {
            buttonFont: { type: p.Font, title: `Font`, controls: `extended` },
            fill: { title: `Fill`, type: p.Color, defaultValue: `#333` },
            color: { title: `Text`, type: p.Color, defaultValue: `#FFF` },
            buttonPadding: { title: `Padding`, type: p.Padding, defaultValue: `15px` },
            buttonMargin: { type: p.Padding, title: `Margin`, defaultValue: `0px` },
            borderRadius: { type: p.BorderRadius, title: `Radius`, defaultValue: `8px` },
            borderObject: {
              type: p.Border,
              title: `Border`,
              optional: !0,
              defaultValue: {
                borderWidth: 1,
                borderStyle: `solid`,
                borderColor: `rgba(200,200,200,0.5)`,
              },
            },
            buttonShadow: { type: p.BoxShadow, title: `Shadow`, optional: !0 },
          },
        },
      }));
  });
export { A as n, v as t };
//# sourceMappingURL=ActionButton.gOvWkmhh.mjs.map
