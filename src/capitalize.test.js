const capitalize = require('./capitalize');

test('string "dog" should return Dog' , () => {
  expect(capitalize('dog')).toBe('Dog');
});

test('empty string should return "Error"' , () => {
  expect(capitalize('')).toBe('Error');
});

test('true should return "Error"' , () => {
    expect(capitalize(true)).toBe('Error');
  });