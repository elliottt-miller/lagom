import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  E as n,
  R as r,
  b as i,
  c as a,
  s as o,
  u as s,
  x as c,
} from "./react.DJ2-MjhO.mjs";
import { E as l, G as u, i as d, y as f } from "./framer.CS_JK_Iv.mjs";
function p() {
  let e = f.current();
  return e === f.canvas || e === f.thumbnail;
}
function m() {
  return t === void 0 || typeof document > `u` || t.grecaptcha?.render
    ? Promise.resolve()
    : y ||
        ((y = new Promise((e, n) => {
          t.__framerauthGoogleRecaptchaOnLoad = () => e();
          let r = document.getElementById(_);
          if (r) {
            if (t.grecaptcha?.render) {
              e();
              return;
            }
            (r.addEventListener(
              `load`,
              () => {
                t.grecaptcha?.render && e();
              },
              { once: !0 }
            ),
              r.addEventListener(
                `error`,
                () => {
                  ((y = null), n());
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
              t.grecaptcha?.render && e();
            }),
            (i.onerror = () => {
              ((y = null), n());
            }),
            document.head.appendChild(i));
        })),
        y);
}
function h(e) {
  let { siteKey: n, resetKey: r, onVerify: a, onExpire: l, onError: u, style: d } = e,
    f = p(),
    h = !f,
    g = c(null),
    _ = c(null),
    y = c(a),
    b = c(l),
    x = c(u);
  return (
    i(() => {
      ((y.current = a), (b.current = l), (x.current = u));
    }, [a, l, u]),
    i(() => {
      !h || t === void 0 || !t.grecaptcha || _.current === null || t.grecaptcha.reset(_.current);
    }, [r, h]),
    i(() => {
      if (!h || t === void 0 || !n) return;
      let e = !1;
      return (
        (_.current = null),
        g.current && (g.current.innerHTML = ``),
        m()
          .then(() => {
            if (!(e || !g.current || !t.grecaptcha) && _.current === null)
              try {
                _.current = t.grecaptcha.render(g.current, {
                  sitekey: n,
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
    }, [n, h]),
    f
      ? o(`div`, {
          style: {
            ...d,
            width: `100%`,
            minHeight: 78,
            display: `flex`,
            justifyContent: `flex-start`,
          },
          children: s(`div`, {
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
              s(`div`, {
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
              s(`div`, {
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
          children: o(`div`, { ref: g, className: `g-recaptcha`, "data-sitekey": n }),
        })
  );
}
var g,
  _,
  v,
  y,
  b = e(() => {
    (r(),
      a(),
      n(),
      u(),
      (g = `https://www.google.com/recaptcha/api.js?onload=__framerauthGoogleRecaptchaOnLoad&render=explicit`),
      (_ = `framerauth-google-recaptcha`),
      (v = `https://www.gstatic.com/recaptcha/api2/logo_48.png`),
      (y = null),
      l(h, { siteKey: { title: `Site Key`, type: d.String, defaultValue: `` } }));
  });
export { b as n, h as t };
//# sourceMappingURL=GoogleRecaptcha.Owc7lyGw.mjs.map
