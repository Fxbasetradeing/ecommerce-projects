import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';


describe('formatMoney', () => {

  it('formats 1999cents as $1999 ', () => {
    expect(formatMoney(1999)).toBe('$19.99')
  });

  it('displays to decimal', () => {
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00');
  })
});

