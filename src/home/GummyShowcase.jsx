import React, { useMemo, useState } from "react";
import { products } from "@/catalogData";
import HomeProductLineup from "./HomeProductLineup";

export default function GummyShowcase() {
  const gummies = useMemo(() => products.filter(product => product.category === "Gummies"), []);
  const collections = useMemo(() => Array.from(new Set(gummies.map(product => product.productLine).filter(Boolean))), [gummies]);
  const [active, setActive] = useState(collections[0] || "");
  const visible = gummies.filter(product => !active || product.productLine === active).slice(0, 4);

  return (
    <div className="editorial-gummy-showcase">
      <HomeProductLineup
        format="gummy"
        products={visible}
        eyebrow="03 / The gummy collections"
        title="A little something different."
        intro="Three considered collections. Explore their flavors, formats, and labeled cannabinoid content."
        to="/shop/gummies"
        linkLabel="Explore gummies"
      >
        <div className="lagom-lineup__collections" role="group" aria-label="Choose a gummy collection">
          {collections.map((collection, index) => (
            <button
              type="button"
              key={collection}
              aria-pressed={active === collection}
              className={active === collection ? "is-active" : ""}
              onClick={() => setActive(collection)}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {collection}
            </button>
          ))}
        </div>
      </HomeProductLineup>
    </div>
  );
}
