import { expect, it, describe } from 'vitest';
import { get42 } from './index';

describe('get42', () => {
  it('should return 42', () => {
    expect(get42()).toBe(42);
  });
});
