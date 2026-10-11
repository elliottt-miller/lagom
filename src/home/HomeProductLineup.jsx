import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomepageSeltzerMedia, HomepageGummyMedia } from "./HomepageProductMedia";

/**
 * Homepage-only, open-air beverage gallery.
 * Product data and approved transparent packaging stay in the existing catalog;
 * generic storefront purchase cards intentionally remain on Shop / PDP pages.
 */
export default function HomeProductLineup({
  products = [],
  format = "seltzer",
  eyebrow,
  title,
  intro,
  to,
  linkLabel,
  children,
}) {
  const isGummy = format === "gummy";
  const items = (Array.isArray(products) ? products : []).filter(Boolean);

  return (
    <section className={`lagom-lineup lagom-lineup--${format}`} aria-label={title}>
      <div className="lagom-lineup__heading">
        <div className="lagom-lineup__heading-copy">
          <span className="lagom-lineup__eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <Link className="lagom-lineup__all" to={to}>
          {linkLabel} <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      {children}
      <div className="lagom-lineup__stage">
        <div className="lagom-lineup__products">
          {items.map((product, index) => {
            const toProduct = `/product/${encodeURIComponent(product.id)}`;
            const facts = isGummy
              ? [product.strength, Number.isFinite(product.piecesPerPackage) ? `${product.piecesPerPackage} gummies` : null]
              : [Number.isFinite(product.thcMgPerCan) ? `${product.thcMgPerCan} mg THC` : null, product.canVolume];
            const flavorLabel = isGummy ? product.productLine : product.flavorFamily;
            return (
              <article
                className="lagom-lineup__product"
                key={product.id}
                style={{ "--lagom-item-index": index }}
              >
                <div className="lagom-lineup__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")} <span>—</span> {String(items.length).padStart(2, "0")}
                </div>
                <Link className="lagom-lineup__product-media" to={toProduct} aria-label={`Explore ${product.name}`}>
                  <span className="lagom-lineup__product-art">
                    {isGummy
                      ? <HomepageGummyMedia product={product} />
                      : <HomepageSeltzerMedia product={product} />}
                  </span>
                  <span className="lagom-lineup__image-link" aria-hidden="true"><ArrowUpRight /></span>
                </Link>
                <div className="lagom-lineup__product-info">
                  {flavorLabel && <p className="lagom-lineup__flavor">{flavorLabel}</p>}
                  <h3><Link to={toProduct}>{product.name}</Link></h3>
                  <div className="lagom-lineup__facts">
                    {facts.filter(Boolean).map(fact => <span key={fact}>{fact}</span>)}
                  </div>
                  <div className="lagom-lineup__product-bottom">
                    <span className="lagom-lineup__price">{Number.isFinite(product.price) ? `$${product.price.toFixed(2)}` : "Pricing coming soon"}</span>
                    <Link to={toProduct} className="lagom-lineup__product-cta">
                      View flavor <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
