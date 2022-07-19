const capitalize = require('./capitalize');

test('string "dog" should return Dog' , () => {
  expect(capitalize('dog')).toBe('Dog');
});
