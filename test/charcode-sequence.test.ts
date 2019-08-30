import { encode, decode } from '../src/charcode-sequence';

describe('charcode-sequence', () => {
  it('should encode a value', () => {
    expect(encode('Luiz')).toEqual([76, 117, 105, 122]);
  });

  it('should decode a value', () => {
    expect(decode([70, 101, 108, 105, 112, 101])).toBe('Felipe');
  });
});
