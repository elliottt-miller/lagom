import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Shell from "@/storefront/StorefrontShell";
import HomeHero from "@/HomeHeroPortal";
import HomepageAtmosphere from "@/home/HomepageAtmosphere";
import ScrollCloudParallax from "@/home/ScrollCloudParallax";
import GummyShowcase from "@/home/GummyShowcase";
import { HomepageSeltzerMedia, HomepageGummyMedia } from "@/home/HomepageProductMedia";
import LifestyleMosaic from "@/home/LifestyleMosaic";
import BrandPrinciples from "@/home/BrandPrinciples";
import ProductRail from "@/storefront/ProductRail";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import Accordion from "@/editorial/Accordion";
import ResponsiveImage from "@/storefront/ResponsiveImage";
import { products } from "@/catalogData";
import { responsiveImages } from "@/generated/responsiveImages";

const LEARN_ITEMS = [
  {
    id: "what-is-a-thc-beverage",
    title: "What is a THC beverage?",
    content: <p>Lagom is a sparkling beverage infused with hemp-derived THC. It contains no alcohol. Individual experiences with THC vary.</p>,
  },
  {
    id: "read-the-can",
    title: "What should I look for on the can?",
    content: <p>Current Lagom seltzers are labeled with 10 mg THC per can and 12 fl oz (355 mL). Product information should be read together with the package label.</p>,
  },
  {
    id: "responsible-use",
    title: "How should I approach THC responsibly?",
    content: <p>If you are unfamiliar with THC, begin with a lower amount and allow adequate time before consuming more. Do not drive or operate machinery after consuming THC. Keep products away from children and pets.</p>,
  },
];

export default function HomePage() {
  const seltzers = useMemo(() => products.filter(product => product.category === "Seltzers"), []);
  const gummies = useMemo(() => products.filter(product => product.category === "Gummies"), []);
  const storefront = responsiveImages.store["storefront-day"];

  return (
    <Shell>
      <div className="editorial-home dm-home sky-home">
        <HomepageAtmosphere />
        <ScrollCloudParallax />
        <HomeHero />

        <section className="dm-statement" aria-labelledby="dm-statement-heading">
          <span className="dm-section-number">01 / OUR POINT OF VIEW</span>
          <div className="dm-statement__body">
            <h2 id="dm-statement-heading">NOT TOO MUCH.<br /><em>NOT TOO LITTLE.</em></h2>
            <div className="dm-statement__aside">
              <span className="dm-statement__asterisk" aria-hidden="true">✳</span>
              <p>Lagom is the Swedish idea of balance. We make sparkling THC seltzers built around flavor, clear information, and moments that feel just right.</p>
              <Link to="/about" className="dm-inline-link">Our story <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <div className="dm-home__seltzers">
          <ProductRail eyebrow="02 / Meet the lineup" title="Good taste. Great company." intro="Four sparkling flavors. Considered details. A different way to bring something to the occasion." to="/shop/seltzers" linkLabel="Shop seltzers">
            {seltzers.map(product => (
              <CatalogProductCard
                key={product.id}
                id={product.id}
                to={`/product/${product.id}`}
                mediaNode={<HomepageSeltzerMedia product={product} />}
                contextLabel={product.flavorFamily}
                name={product.name}
                price={product.price}
                reviewStatus={product.description}
                meta={<span className="product-facts"><span>{product.thcMgPerCan} mg THC</span><span>{product.canVolume}</span></span>}
              />
            ))}
          </ProductRail>
        </div>

        <section className="dm-discovery" aria-label="Explore Lagom products">
          <Link className="dm-discovery__tile dm-discovery__tile--seltzer" to="/shop/seltzers">
            <span className="dm-discovery__index">01 / POUR SOMETHING DIFFERENT</span>
            <span className="dm-discovery__art" aria-hidden="true">{seltzers[0] && <HomepageSeltzerMedia product={seltzers[0]} />}</span>
            <span className="dm-discovery__bottom"><strong>THE SELTZERS</strong><ArrowUpRight aria-hidden="true" /></span>
          </Link>
          <Link className="dm-discovery__tile dm-discovery__tile--gummies" to="/shop/gummies">
            <span className="dm-discovery__index">02 / ANOTHER WAY TO LAGOM</span>
            <span className="dm-discovery__art" aria-hidden="true">{gummies[0] && <HomepageGummyMedia product={gummies[0]} />}</span>
            <span className="dm-discovery__bottom"><strong>THE GUMMIES</strong><ArrowUpRight aria-hidden="true" /></span>
          </Link>
        </section>

        <div className="dm-home__lifestyle"><LifestyleMosaic /></div>
        <div className="dm-home__principles"><BrandPrinciples /></div>
        <div className="dm-home__gummies"><GummyShowcase /></div>

        <section className="dm-retail" aria-labelledby="dm-retail-title">
          <div className="dm-retail__copy">
            <span className="dm-section-number">04 / FIND YOUR LAGOM</span>
            <h2 id="dm-retail-title">OUT IN<br /><em>THE WORLD.</em></h2>
            <p>Discover Lagom at retail. Availability varies by location; retailer details are shown when confirmed.</p>
            <Link to="/visit" className="dm-button dm-button--dark">Find Lagom <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="dm-retail__media">
            <ResponsiveImage src={storefront.src} alt="Lagom Naturals storefront in Minneapolis" sizes="(max-width: 899px) 100vw, 54vw" loading="lazy" decoding="async" />
          </div>
        </section>

        <section className="dm-learn" aria-labelledby="dm-learn-title">
          <div className="dm-learn__heading">
            <span className="dm-section-number">05 / THE GOOD TO KNOW</span>
            <h2 id="dm-learn-title">CURIOUS?<br /><em>GOOD.</em></h2>
            <Link className="dm-inline-link" to="/learn">More about THC <ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="dm-learn__questions"><Accordion items={LEARN_ITEMS} /></div>
        </section>
      </div>
    </Shell>
  );
}
