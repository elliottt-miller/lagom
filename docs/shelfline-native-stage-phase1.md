# Native Shelfline product stage — phase 1

## Scope
An isolated native React stage adapted from **Shelfline DsHero** in `framer/framer-helpful-instance-487483-clean-stack-6w0x/`.

This branch DOES NOT modify production routes by default. To preview the new stage, configure `VITE_SHELFLINE_STAGE=true` during the Vite build. The original `ProductRail` remains the fallback.

## Source-preserved geometry
- 1500px perspective, perspective origin 50% 8%.
- Shelf group initial rotation X 7deg, Y -16deg.
- Each shelf row 206px high, gap 34px, front-face thickness 14px.
- Product stagger index delay 90ms, first entrance at 350ms.
- Shelf entrance delayed by row index * 160ms.
- Core easing: `cubic-bezier(.34,1.56,.64,1)`, `cubic-bezier(.34,1.4,.64,1)`, `cubic-bezier(.2,.8,.2,1)`.
- Mobile uses a distinct horizontal scroll-snap composition, not a miniature desktop perspective stage.

## Intentional adaptations
- Shelfline's downloadable-product 3D boxes are replaced by existing Lagom product media.
- Product text and THC quantities come from the existing catalog; there are no invented formulations or prices.
- Native React owns lifecycle, refs, observer setup and event cleanup.
- Pointer tilt is a new bounded implementation based on native requestAnimationFrame and has NOT yet been measured against the original Framer controller.
- No Framer JavaScript/runtime imported into production.

## Required validation before enabling by default
1. Install dependencies and run `npm run check` and `npm run build`.
2. Compare stage at widths 375, 390, 430, 768, 1024, 1440, 1920.
3. Confirm all four seltzer can assets are cleanly contained and all links resolve.
4. Test fine pointer, keyboard focus, touch scroll-snap and reduced-motion preference.
5. Trace the compiled DsHero module event formulas, entrance triggers and initialization against live reference; refine until parity thresholds are met.
6. Audit no horizontal overflow / animation flicker, and evaluate whether page-wide shell is compatible.
7. Remove opt-in gate only after design review and regression tests.

This is phase one only. No runtime fidelity or production readiness certification is claimed.
