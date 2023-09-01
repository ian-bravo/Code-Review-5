import AgeConversion from './../src/js/age.js';

describe('Age', () => {
  test('should generate a persons age in regular Earth years', () => {
  const ageConversion = new AgeConversion(50);
  expect(ageConversion).toEqual(50);
  });
});