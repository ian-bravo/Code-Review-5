import Age from './../src/js/age.js';

describe('Age', () => {
  test('should generate a persons age in regular Earth years', () => {
  const age = new Age(50);
  expect(age.ageEarth).toEqual(50);
  });
});