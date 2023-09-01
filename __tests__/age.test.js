import Age from './../src/js/age.js';

describe('Age', () => {
  test('should generate a persons age in regular Earth years', () => {
    const age = new Age(50);
    expect(age.ageEarth).toEqual(50);
  });

  test('mercuryAgeConverter method should generate a persons age in Mercury years', () => {
    const age = new Age(50);
    age.mercuryAgeConverter();
    expect(age.ageMercury).toEqual(12);
  });
});