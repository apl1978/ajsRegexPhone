import convert from '../convert';

test('Russian phone starts with 8', () => {
  const result = convert("8 (927) 000-00-00");
  expect(result).toBe("+79270000000");
});

test('Russian phone starts with +7', () => {
  const result = convert("+7 960 000 00 00");
  expect(result).toBe("+79600000000");
});

test('China phone', () => {
  const result = convert("+86 123 456 7890");
  expect(result).toBe("+861234567890");
});
