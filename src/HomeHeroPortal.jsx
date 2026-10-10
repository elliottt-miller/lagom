import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MoveUpRight } from "lucide-react";
import ShelflineHeroShelf from "@/home/ShelflineHeroShelf";
import { products } from "@/catalogData";

const HERO_IDS = ["24k-lemonade", "blackberry-breeze", "strawberry-lime-fusion", "watermelon-refresher"];
const showcaseProducts = HERO_IDS.map(id => products.find(product => product.id === id)).filter(Boolean);
const potencyValues = [...new Set(showcaseProducts.map(product => product.thcMgPerCan).filter(value => Number.isFinite(value)))];
const potencyCopy = potencyValues.length === 1 ? `${potencyValues[0]} mg THC per can.` : "Read each can for THC content.";

/**
 * Defiant Mango defines the hero composition, expressive type scale, warm
 * campaign surfaces and CTA language. Shelfline owns *only* the product shelf.
 * Domain product details and artwork remain Lagom-owned.
 */
export default function HomeHero() {
  return (
    <section className="dm-hero" aria-labelledby="dm-hero-heading">
      <div className="dm-hero__sky" aria-hidden="true">
        <span className="dm-hero__cloud dm-hero__cloud--one" />
        <span className="dm-hero__cloud dm-hero__cloud--two" />
      </div>
      <div className="dm-hero__inner">
        <div className="dm-hero__copy">
          <p className="dm-eyebrow dm-hero__eyebrow"><span className="dm-eyebrow__line" /> Lagom Naturals / Better by balance</p>
          <h1 id="dm-hero-heading" className="dm-hero__title">
            <span>GOOD</span>
            <span>THINGS</span>
            <em>IN BALANCE.</em>
          </h1>
          <p className="dm-hero__intro">
            Flavor-first hemp-derived THC seltzers for moments worth making your own.
          </p>
          <div className="dm-hero__actions">
            <Link className="dm-button dm-button--dark" to="/shop/seltzers">
              Explore seltzers <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="dm-hero__text-link" to="/learn">
              THC, explained <MoveUpRight aria-hidden="true" />
            </Link>
          </div>
          <p className="dm-hero__disclaimer">{showcaseProducts.length} flavors. {potencyCopy} Individual experiences vary.</p>
        </div>
        <div className="dm-hero__stage">
          <div className="dm-hero__stage-top" aria-hidden="true">
            <span>THE SELTZER COLLECTION</span><span>01 / 04</span>
          </div>
          <ShelflineHeroShelf products={showcaseProducts} />
        </div>
      </div>
      <div className="dm-hero__bottom" aria-hidden="true">
        <span>MADE FOR THE MOMENT</span>
        <span className="dm-hero__bottom-mark">✳</span>
        <span>FOUR FLAVORS. YOUR WAY.</span>
      </div>
    </section>
  );
}
