import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "@/motionSystem";
import SeltzerCan from "@/products/SeltzerCan";

/**
 * Native Shelfline DsHero reconstruction, hero-only.
 *
 * Verified original source:
 * framer/framer-helpful-instance-487483-clean-stack-6w0x/
 * scripts/vendor/yRjE-3lOcR-8CcVxQN-_fzlJXBzPAOcxn_R_MhzDr50.EFHiYFIo.mjs
 *
 * Native controller preserves the recovered pointer integration:
 * target=(pointer-sceneCentre)/sceneSize; smoothed += (target-smoothed)*.07
 * rotateX=7 - smoothY*6*tilt; rotateY=-16 + smoothX*14*tilt
 * spotlightX=50 + smoothX*60%; spotlightY=42 + smoothY*50%.
 *
 * CMS/domain data, cart, navigation and product imagery remain Lagom-owned.
 */
const MOBILE_BREAKPOINT = "(min-width: 810px) and (hover: hover) and (pointer: fine)";

export default function ShelflineHeroShelf({ products, tilt = 1 }) {
  const rootRef = useRef(null);
  const sceneRef = useRef(null);
  const unitRef = useRef(null);
  const targetsRef = useRef({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);
  const reducedMotion = useReducedMotion();
  const items = (Array.isArray(products) ? products : []).filter(Boolean);
  const mid = Math.ceil(items.length / 2);
  const rows = [items.slice(0, mid), items.slice(mid)].filter(row => row.length);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      setEntered(true);
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(root);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    const scene = sceneRef.current;
    const unit = unitRef.current;
    if (!root || !scene || !unit || reducedMotion) return undefined;

    const query = window.matchMedia(MOBILE_BREAKPOINT);
    const visible = { current: true };
    let observer;
    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;
    const target = targetsRef.current;

    const onPointerMove = event => {
      const rect = scene.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      target.x = (event.clientX - rect.left) / rect.width - 0.5;
      target.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      if (!active) return;
      if (visible.current && !document.hidden) {
        currentX += (target.x - currentX) * 0.07;
        currentY += (target.y - currentY) * 0.07;
        unit.style.transform = `rotateX(${(7 - currentY * 6 * tilt).toFixed(2)}deg) rotateY(${(-16 + currentX * 14 * tilt).toFixed(2)}deg)`;
        scene.style.setProperty("--shs-sx", `${(50 + currentX * 60).toFixed(1)}%`);
        scene.style.setProperty("--shs-sy", `${(42 + currentY * 50).toFixed(1)}%`);
      }
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      active = false;
      cancelAnimationFrame(raf);
      raf = 0;
      target.x = 0;
      target.y = 0;
      unit.style.removeProperty("transform");
      scene.style.removeProperty("--shs-sx");
      scene.style.removeProperty("--shs-sy");
    };
    const start = () => {
      if (active || !query.matches) return;
      active = true;
      root.addEventListener("pointermove", onPointerMove, { passive: true });
      root.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(tick);
    };
    const sync = () => {
      if (query.matches) start();
      else {
        root.removeEventListener("pointermove", onPointerMove);
        root.removeEventListener("pointerleave", onLeave);
        stop();
      }
    };
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        visible.current = entries[0]?.isIntersecting ?? true;
      });
      observer.observe(scene);
    }
    query.addEventListener("change", sync);
    sync();
    return () => {
      query.removeEventListener("change", sync);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onLeave);
      observer?.disconnect();
      stop();
    };
  }, [reducedMotion, tilt]);

  if (!items.length) return null;

  const productsMarkup = items.map((product, index) => (
    <Link
      className="shs__product"
      key={product.id}
      to={`/product/${encodeURIComponent(product.id)}`}
      style={{ "--shs-index": index }}
      aria-label={`Discover ${product.name}${product.thcMgPerCan != null ? `, ${product.thcMgPerCan} milligrams THC per can` : ""}`}
    >
      <span className="shs__product-shadow" aria-hidden="true" />
      <span className="shs__can" aria-hidden="true">
        <SeltzerCan product={product} decorative eager={index < 2} sizes="(max-width: 809px) 44vw, (max-width: 1200px) 16vw, 172px" />
      </span>
      <span className="shs__tag" aria-hidden="true">
        <span className="shs__tag-hole" />
        <strong>{product.flavor || product.name}</strong>
        {product.thcMgPerCan != null && <small>{product.thcMgPerCan} mg THC / can</small>}
        <span className="shs__tag-cta">Discover flavor ↗</span>
      </span>
    </Link>
  ));

  return (
    <div className={`shs ${entered ? "shs--entered" : ""}`} ref={rootRef} data-motion={reducedMotion ? "reduced" : "full"}>
      <div className="shs__scene" ref={sceneRef} aria-label="Explore our four THC seltzer flavors">
        <div className="shs__unit" ref={unitRef}>
          {rows.map((row, rowIndex) => (
            <div className="shs__row" key={rowIndex} style={{ "--shs-row": rowIndex }}>
              <div className="shs__objects">{row.map(product => productsMarkup[items.indexOf(product)])}</div>
              <div className="shs__plank" aria-hidden="true">
                <i className="shs__plank-top" />
                <i className="shs__plank-front" />
                <i className="shs__plank-left" />
              </div>
            </div>
          ))}
        </div>
        <div className="shs__mobile-products">{productsMarkup.map((node, index) => React.cloneElement(node, { key: `mobile-${items[index].id}` }))}</div>
      </div>
      <p className="shs__mobile-hint">Explore flavors <span aria-hidden="true">→</span></p>
    </div>
  );
}
