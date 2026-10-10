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
 * Source architecture:
 * Defiant Mango — atmospheric ivory/cream hero, oversized Ranchers backdrop
 * heading, centrally floating merchandise, minimal copy and controls.
 * Shelfline — exclusively the interactive 3D product shelf.
 * Lagom — official cans, catalog, language, navigation and domain.
 */
export default function HomeHero() {
  return (
    <section className="dm-hero" aria-labelledby="dm-hero-heading">
      <div className="dm-hero__sky" aria-hidden="true">
        <span className="dm-hero__cloud dm-hero__cloud--one" />
        <span className="dm-hero__cloud dm-hero__cloud--two" />
      </div>
      <div className="dm-hero__inner">
        <div className="dm-hero__top">
          <p className="dm-hero__badge"><span>New perspective</span> Good things in balance</p>
          <h1 id="dm-hero-heading" className="dm-hero__title">JUST RIGHT.</h1>
        </div>
        <div className="dm-hero__stage">
          <ShelflineHeroShelf products={showcaseProducts} />
        </div>
        <div className="dm-hero__foot">
          <div className="dm-hero__copy">
            <p className="dm-hero__intro">Flavor-first hemp-derived THC seltzers for moments worth making your own.</p>
            <p className="dm-hero__disclaimer">{showcaseProducts.length} flavors. {potencyCopy} Individual experiences vary.</p>
          </div>
          <div className="dm-hero__actions">
            <Link className="dm-button dm-button--dark" to="/shop/seltzers">
              Explore seltzers <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="dm-hero__text-link" to="/learn">
              THC, explained <MoveUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div className="dm-hero__bottom" aria-hidden="true">
        <span>LAGOM NATURALS / MINNEAPOLIS</span>
        <span className="dm-hero__bottom-mark">✳</span>
        <span>NEITHER TOO MUCH, NOR TOO LITTLE</span>
      </div>
    </section>
  );
}
