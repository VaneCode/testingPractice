const reverseString = require('./reverseString');

test('string "pig" should return "gip"', () => {
    expect(reverseString('pig')).toBe('gip');
  });