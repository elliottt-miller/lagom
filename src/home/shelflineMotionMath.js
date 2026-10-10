/**
 * Exact recovered projection from Shelfline DsHero's JavaScript controller:
 * Pn (desktop pointer effect) from
 * yRjE-3lOcR-8CcVxQN-_fzlJXBzPAOcxn_R_MhzDr50.EFHiYFIo.mjs.
 *
 * The original controller integrates x/y by .07 per animation frame, then
 * rounds the transform degrees to 2 decimal places and spotlight to 1.
 * Keeping this pure makes source fidelity independently testable.
 */
export const SHELFLINE_MOTION = Object.freeze({
  smoothing: 0.07,
  baseRotationX: 7,
  baseRotationY: -16,
  xRotationResponse: 6,
  yRotationResponse: 14,
  spotlightX: 50,
  spotlightY: 42,
  spotlightXResponse: 60,
  spotlightYResponse: 50,
});

export function integrateShelflinePointer(current, target) {
  return {
    x: current.x + (target.x - current.x) * SHELFLINE_MOTION.smoothing,
    y: current.y + (target.y - current.y) * SHELFLINE_MOTION.smoothing,
  };
}

export function projectShelflineMotion({ x, y }, tilt = 1) {
  const effectiveTilt = Number.isFinite(tilt) ? tilt : 1;
  return {
    transform: `rotateX(${(7 - y * 6 * effectiveTilt).toFixed(2)}deg) rotateY(${(-16 + x * 14 * effectiveTilt).toFixed(2)}deg)`,
    spotlightX: `${(50 + x * 60).toFixed(1)}%`,
    spotlightY: `${(42 + y * 50).toFixed(1)}%`,
  };
}
