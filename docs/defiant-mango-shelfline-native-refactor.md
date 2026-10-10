# Lagom Naturals — Defiant Mango + Shelfline Native React Migration

## Architecture contract
- **Defiant Mango** is the presentation reference for UI hierarchy, expansive display type, palette, spacing, responsive arrangements, editorial merchandising and navigation styling.
- **Shelfline** is used **only** for the hero's interactive 3D product shelf (the source `DsHero` component). No Shelfline cart, CMS, checkout, site navigation, smooth scrolling or page transition runtime is introduced.
- **Lagom React** (Vite, React Router, Motion for React) retains routing, commerce, product data, AgeGate, cart, frontend behavior and media components. Headless WordPress remains the intended structured content control plane; this migration does not replace that content architecture.
- Compiled Framer JavaScript is evidence, **not** a production dependency. Native component source is first-class.

## Verified source paths
- `framer/framer-defiant-mango-016789-swift-export-epxf/index.html`
- `framer/framer-defiant-mango-016789-swift-export-epxf/assets/fonts/zrfm0H3Lx-P2Xvs2ArDfBi8.woff2`
- `framer/framer-helpful-instance-487483-clean-stack-6w0x/scripts/vendor/yRjE-3lOcR-8CcVxQN-_fzlJXBzPAOcxn_R_MhzDr50.EFHiYFIo.mjs`

Defiant Mango source evidence: Ranchers display font, 810px and 1200px responsive boundaries, colors #91d9ff (sky), #ffc175 (orange), #e3cfb3 (sand). The Lagom palette deliberately adapts and desaturates other supporting surfaces. This is **brand adaptation**, not pixel-perfect reproduction.

Shelfline source evidence, observed in compiled DsHero:
- `.dsh-scene`: perspective 1500px; perspective-origin 50% 8%.
- `.dsh-unit`: initial rotateX(7deg) rotateY(-16deg).
- `.dsh-row`: height 206px; row gap 34px; shelf thickness 14px; shelf-top depth 150px.
- `.dsh-plank`: transition opacity .9s ease row-index*160ms; translate 1.1s cubic-bezier(.2,.8,.2,1) row-index*160ms.
- `.dsh-obj`: translate 1s cubic-bezier(.34,1.4,.64,1) index*90ms+350ms; hover translate3d(0,-18px,70px) rotateY(-10deg).
- `pointermove`: normalized pointer to scene bounds, centered at 0.5.
- `pointerleave`: target resets to zero.
- animation loop: smoothed target by .07 per frame; rotateX=7-smoothedY*6*tilt; rotateY=-16+smoothedX*14*tilt; spotlight 50+X*60%, 42+Y*50%. Original checked intersection and document.hidden before updating.
- Mobile (<810px): independent horizontal scroll-snap display rather than a scaled 3D stage.
- Reduced motion disables decorative motion.

A pure implementation of the projection is in `src/home/shelflineMotionMath.js`; regression expectations in `tests/shelfline-motion.test.mjs`.

## Main implementation files
- `src/HomeHeroPortal.jsx`: Defiant Mango / Lagom text-led campaign layout, instantiates only the Shelfline shelf.
- `src/home/ShelflineHeroShelf.jsx`: isolated React 3D shelf and pointer controller; DOM and lifecycle independently owned, no runtime globals.
- `src/styles/defiant-mango-lagom.css`: site-wide semantic tokens, campaign visuals, native shelf styles, desktop/mobile styling and route chrome.
- `src/routes/HomePage.jsx`: revised chapter architecture; reuses official can renderer, gummies, lifestyle/retail/FAQ modules.
- `src/styles/defiant-mango-routes.css`: editorial and product/commerce route styling refinement.
- `src/styles/index.css`: final global CSS entry.

No pricing, shipping, nutrition, ingredient, inventory or testing claims are invented by the redesign. Catalog copy and potency labels must remain backed by the existing verified product model.

## Validation status
- Source extracted and major event/pointer code traced: **yes**.
- React shelf geometry, motion constants and responsive branch reconstructed: **yes**.
- Pointer projection smoke execution: **passed** (neutral, smoothing step, extreme pointer).
- Checked file presence and imports in the GitHub development branch: **passed**.
- `npm run check` / `npm run build`: **not executed in the connector-only repo environment**.
- Playwright screenshot / animation parity / mobile visual audits: **not executed**.
- Actual functional operation, route end-to-end regression, WCAG audit and production readiness: **not certified**.

## Next acceptance gates (before merge)
1. `npm ci`; `node --test tests/shelfline-motion.test.mjs`; `npm run check`; `npm run build`.
2. Compare Defiant Mango reference and Lagom React at 390, 430, 768, 810, 899, 900, 1200 and 1440px; fix headline clipping and shelf transforms.
3. Interact with all shelf cans using mouse, focus/Enter, trackpad, touch swipe; verify links and correct product identity.
4. Record pointer-driven transform samples from original DsHero vs React `ShelflineHeroShelf` on equal normalized pointer and viewport conditions, including when intersection-hidden.
5. Audit reduced motion, touch scroll traps, horizontal overflow, visibility/contrast and 44px action targets.
6. Check lazy product, cart, checkout, editorial and responsive CSS import ownership for regressions.
7. Verify product media and fonts: assets resolve, minimum layout shifts, source provenance/licensing.
8. Use CMS data instead of hardcoded page copy when the current WordPress content model is verified.
9. Remove retired compatibility rules **only after** new ownership and behavior have been validated.

## Known design changes compared with the source
- Original Shelfline displays up to 9 digital boxes across rows; Lagom hero uses 4 actual seltzer cans over 2 shelves.
- Mobile is a single horizontal swipe collection, matching original interaction class, with native touch scrolling (no full-page scroll hijack).
- Defiant Mango's sneaker content and digital assets are not copied to the site.
- The original Framer hover price-tag is reinterpreted as a flavor discovery label rather than an add-to-cart interaction.
- We purposely leave old commerce, AgeGate, search, locator and account domain logic unmodified.

This document is the migration trace/provenance and release-gate record; it is not a certificate of full fidelity.
