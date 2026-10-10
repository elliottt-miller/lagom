import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/motionSystem';
import './shelfline-product-stage.css';

/**
 * Native React adaptation of Shelfline's DsHero shelving geometry.
 * Source: framer/framer-helpful-instance-487483-clean-stack-6w0x
 * Source-derived: 1500px perspective, 7deg X/-16deg Y, 206px row,
 * 34px row gap, 14px plank face and cubic-bezier(.34,1.56,.64,1).
 * New implementation: pointer tracking, keyboard focus and product slots;
 * do not claim JavaScript timing parity until instrumented against Framer.
 */
export default function ShelflineProductStage({ products = [], renderProduct, title = 'Explore the collection' }) {
  const rootRef = useRef(null);
  const rafRef = useRef(0);
  const reduceMotion = useReducedMotion();
  const [entered, setEntered] = useState(false);
  const items = products.filter(Boolean);
  const split = Math.ceil(items.length / 2);
  const rows = [items.slice(0, split), items.slice(split)].filter(row => row.length);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const unit = node.querySelector('.slps__unit');
    if (!unit) return;
    function onPointerMove(event) {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        unit.style.setProperty('--slps-pointer-x', String(Math.max(-1, Math.min(1, x * 2))));
        unit.style.setProperty('--slps-pointer-y', String(Math.max(-1, Math.min(1, y * 2))));
      });
    }
    function onLeave() {
      cancelAnimationFrame(rafRef.current);
      unit.style.setProperty('--slps-pointer-x', '0');
      unit.style.setProperty('--slps-pointer-y', '0');
    }
    node.addEventListener('pointermove', onPointerMove, { passive: true });
    node.addEventListener('pointerleave', onLeave);
    return () => {
      node.removeEventListener('pointermove', onPointerMove);
      node.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(rafRef.current);
      unit.style.removeProperty('--slps-pointer-x');
      unit.style.removeProperty('--slps-pointer-y');
    };
  }, [reduceMotion]);

  if (!items.length) return null;
  return (
    <section ref={rootRef} className={`slps ${entered ? 'slps--entered' : ''}`}
      aria-label={title} data-reduced-motion={reduceMotion ? 'true' : undefined}>
      <div className="slps__inner">
        <p className="slps__eyebrow">Lagom Naturals / The collection</p>
        <h2 className="slps__heading">{title}</h2>
        <div className="slps__scene">
          <div className="slps__unit">
            {rows.map((row, rowIndex) => (
              <div className="slps__row" key={rowIndex} style={{ '--slps-row': rowIndex }}>
                <div className="slps__objects">
                  {row.map((product, productIndex) => {
                    const index = rowIndex * split + productIndex;
                    const potency = Number.isFinite(Number(product.thcMgPerCan))
                      ? `${product.thcMgPerCan} mg THC / can` : null;
                    return (
                      <Link key={product.id} className="slps__product"
                        to={`/product/${encodeURIComponent(product.id)}`}
                        style={{ '--slps-index': index }}
                        aria-label={[product.name, potency].filter(Boolean).join(', ')}>
                        <span className="slps__media" aria-hidden="true">
                          {renderProduct ? renderProduct(product) : <img src={product.image} alt="" loading="lazy" />}
                        </span>
                        <span className="slps__label">
                          <strong>{product.name}</strong>
                          {potency && <small>{potency}</small>}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="slps__plank" aria-hidden="true">
                  <i className="slps__plank-top" /><i className="slps__plank-front" /><i className="slps__plank-side" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="slps__mobile-hint">Swipe to discover flavors</p>
      </div>
    </section>
  );
}
