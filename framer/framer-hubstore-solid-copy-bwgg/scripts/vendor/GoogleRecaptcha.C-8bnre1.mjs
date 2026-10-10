import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { B as t, D as n, H as r, I as i, j as a, l as o, s, u as c } from "./react.ClsXD4bF.mjs";
import { M as l, T as u, Z as d, o as f } from "./framer.CbUxDv78.mjs";
function p() {
  let e = u.current();
  return e === u.canvas || e === u.thumbnail;
}
function m() {
  return r === void 0 || typeof document > `u` || r.grecaptcha?.render
    ? Promise.resolve()
    : y ||
        ((y = new Promise((e, t) => {
          r.__framerauthGoogleRecaptchaOnLoad = () => e();
          let n = document.getElementById(_);
          if (n) {
            if (r.grecaptcha?.render) {
              e();
              return;
            }
            (n.addEventListener(
              `load`,
              () => {
                r.grecaptcha?.render && e();
              },
              { once: !0 }
            ),
              n.addEventListener(
                `error`,
                () => {
                  ((y = null), t());
                },
                { once: !0 }
              ));
            return;
          }
          let i = document.createElement(`script`);
          ((i.id = _),
            (i.src = g),
            (i.async = !0),
            (i.defer = !0),
            (i.onload = () => {
              r.grecaptcha?.render && e();
            }),
            (i.onerror = () => {
              ((y = null), t());
            }),
            document.head.appendChild(i));
        })),
        y);
}
function h(e) {
  let { siteKey: t, resetKey: n, onVerify: s, onExpire: l, onError: u, style: d } = e,
    f = p(),
    h = !f,
    g = a(null),
    _ = a(null),
    y = a(s),
    b = a(l),
    x = a(u);
  return (
    i(() => {
      ((y.current = s), (b.current = l), (x.current = u));
    }, [s, l, u]),
    i(() => {
      !h || r === void 0 || !r.grecaptcha || _.current === null || r.grecaptcha.reset(_.current);
    }, [n, h]),
    i(() => {
      if (!h || r === void 0 || !t) return;
      let e = !1;
      return (
        (_.current = null),
        g.current && (g.current.innerHTML = ``),
        m()
          .then(() => {
            if (!(e || !g.current || !r.grecaptcha) && _.current === null)
              try {
                _.current = r.grecaptcha.render(g.current, {
                  sitekey: t,
                  callback: (e) => y.current?.(e),
                  "expired-callback": () => b.current?.(),
                  "error-callback": () => x.current?.(),
                });
              } catch {
                x.current?.();
              }
          })
          .catch(() => {
            e || x.current?.();
          }),
        () => {
          ((e = !0), (_.current = null), g.current && (g.current.innerHTML = ``));
        }
      );
    }, [t, h]),
    f
      ? o(`div`, {
          style: {
            ...d,
            width: `100%`,
            minHeight: 78,
            display: `flex`,
            justifyContent: `flex-start`,
          },
          children: c(`div`, {
            style: {
              width: 304,
              height: 78,
              maxWidth: `100%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              boxSizing: `border-box`,
              padding: `14px 12px`,
              border: `1px solid #dadce0`,
              borderRadius: 2,
              background: `#f9f9f9`,
              color: `#222`,
              fontFamily: `Arial, sans-serif`,
              fontSize: 14,
            },
            children: [
              c(`div`, {
                style: { display: `flex`, alignItems: `center`, gap: 12, minWidth: 0 },
                children: [
                  o(`div`, {
                    style: {
                      width: 24,
                      height: 24,
                      flex: `0 0 auto`,
                      border: `2px solid #5f6368`,
                      borderRadius: 2,
                      background: `#fff`,
                    },
                  }),
                  o(`span`, {
                    style: { overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap` },
                    children: `I'm not a robot`,
                  }),
                ],
              }),
              c(`div`, {
                style: {
                  flex: `0 0 auto`,
                  color: `#5f6368`,
                  fontSize: 10,
                  lineHeight: 1.2,
                  textAlign: `center`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: 4,
                },
                children: [
                  o(`img`, {
                    src: v,
                    alt: ``,
                    width: 32,
                    height: 32,
                    draggable: !1,
                    style: { display: `block`, width: 32, height: 32 },
                  }),
                  `reCAPTCHA`,
                ],
              }),
            ],
          }),
        })
      : o(`div`, {
          style: {
            ...d,
            width: `100%`,
            minHeight: 78,
            display: `flex`,
            justifyContent: `flex-start`,
          },
          children: o(`div`, { ref: g, className: `g-recaptcha`, "data-sitekey": t }),
        })
  );
}
var g,
  _,
  v,
  y,
  b = e(() => {
    (t(),
      s(),
      n(),
      d(),
      (g = `https://www.google.com/recaptcha/api.js?onload=__framerauthGoogleRecaptchaOnLoad&render=explicit`),
      (_ = `framerauth-google-recaptcha`),
      (v = `https://www.gstatic.com/recaptcha/api2/logo_48.png`),
      (y = null),
      l(h, { siteKey: { title: `Site Key`, type: f.String, defaultValue: `` } }));
  });
export { b as n, h as t };
//# sourceMappingURL=GoogleRecaptcha.C-8bnre1.mjs.map
