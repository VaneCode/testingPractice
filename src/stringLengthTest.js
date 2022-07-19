const stringLength = require('./stringLength');

test('string "word" should return 4', () => {
    expect(stringLength('word')).toBe(4);
  });

  test('string "dictionaries" has more than 10 characteres, it should return Error', () => {
    expect(stringLength('dictionaries')).toBe('Error');
  });  

  test('string "" its empty, it should return Error', () => {
    expect(stringLength('')).toBe('Error');
  });  

