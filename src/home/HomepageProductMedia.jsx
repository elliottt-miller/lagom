import React from "react";
import SeltzerCan from "@/products/SeltzerCan";
import ResponsiveImage from "@/storefront/ResponsiveImage";
import { responsiveImages } from "@/generated/responsiveImages";

// Explicit catalog-id contract. Never infer an image from the product name:
// names recur across gummy collections and have different approved packaging.
const transparentGummyMedia = Object.freeze({
  "push-pop":"Push-Pop-Photoroom-900x900",
  "blueberry-yum-yum":"Blueberry-Yum-Yum-3-Photoroom-900x900",
  "green-apple":"Green-Apple-Photoroom-900x900",
  "strawberry-banana":"Strawberry-Banana-Photoroom-900x900",
  "berry-melon-bliss-organic":"Berry-Melon-Bliss-Photoroom-900x900",
  "blue-razz-organic":"Blue-Razz-Photoroom-Photoroom-1-900x900",
  "cherry-bliss-organic":"Cherry-Bliss-Photoroom-900x900",
  "push-pop-organic":"Push-Pop-1-Photoroom-900x900",
  "blueberry-yum-yum-midnight-drift":"Blueberry-Yum-Yum-1-Photoroom-900x900",
  "peach-midnight-drift":"Peach-Photoroom-900x900",
  "pink-lemonade-midnight-drift":"Pink-Lemonade-Photoroom-900x900",
  "strawberry-midnight-drift":"Strawberry-Photoroom-900x900",
});

export function HomepageSeltzerMedia({product}) {
  return <span className="home-product-art home-product-art--can" aria-hidden="true">
    <SeltzerCan product={product} decorative sizes="(max-width: 699px) 46vw, (max-width: 1100px) 24vw, 18rem" />
  </span>;
}

export function HomepageGummyMedia({product}) {
  const imageKey=transparentGummyMedia[product.id];
  const image=imageKey ? responsiveImages.homeGummies[imageKey] : null;
  if(!image) return null;
  return <span className="home-product-art home-product-art--gummy" aria-hidden="true">
    <ResponsiveImage {...image} alt="" sizes="(max-width: 699px) 44vw, (max-width: 1100px) 22vw, 16rem" loading="lazy" decoding="async" />
  </span>;
}
