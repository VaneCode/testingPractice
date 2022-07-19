const stringLength = require('./stringLength');

test('string "word" should return 4', () => {
    expect(stringLength('word')).toBe(4);
  });