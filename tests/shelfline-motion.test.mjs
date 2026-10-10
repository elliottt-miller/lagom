import test from 'node:test';
import assert from 'node:assert/strict';
import { integrateShelflinePointer, projectShelflineMotion, SHELFLINE_MOTION } from '../src/home/shelflineMotionMath.js';

test('neutral state matches original Shelfline DsHero geometry', () => {
  assert.deepEqual(projectShelflineMotion({ x: 0, y: 0 }), {
    transform: 'rotateX(7.00deg) rotateY(-16.00deg)',
    spotlightX: '50.0%',
    spotlightY: '42.0%',
  });
});

test('frame smoothing uses the source 0.07 integration constant', () => {
  assert.equal(SHELFLINE_MOTION.smoothing, 0.07);
  const first = integrateShelflinePointer({ x: 0, y: 0 }, { x: 0.5, y: -0.5 });
  assert.deepEqual(first, { x: 0.035, y: -0.035 });
  const second = integrateShelflinePointer(first, { x: 0.5, y: -0.5 });
  assert.ok(Math.abs(second.x - 0.06755) < 1e-8);
  assert.ok(Math.abs(second.y + 0.06755) < 1e-8);
});

test('source pointer projection preserves exact coefficients and rounding', () => {
  assert.deepEqual(projectShelflineMotion({ x: 0.5, y: -0.5 }, 1), {
    transform: 'rotateX(10.00deg) rotateY(-9.00deg)',
    spotlightX: '80.0%',
    spotlightY: '17.0%',
  });
  assert.deepEqual(projectShelflineMotion({ x: 0.5, y: -0.5 }, 0), {
    transform: 'rotateX(7.00deg) rotateY(-16.00deg)',
    spotlightX: '80.0%',
    spotlightY: '17.0%',
  });
});
