import { calculateEditDistance, helper } from '../helper';

describe('helper', () => {
  it('helper', () => {
    expect(helper('hi')).toBe('helper says: hi');
  })

  it('calculateEditDistance should return correct edit distance', () => {
    expect(calculateEditDistance('kitten', 'sitting')).toBe(3);
    expect(calculateEditDistance('flaw', 'lawn')).toBe(2);
    expect(calculateEditDistance('intention', 'execution')).toBe(5);
  });
});
