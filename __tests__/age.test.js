import Age from './../src/js/age.js';

describe('Age', () => {
  test('should generate a persons age in regular Earth years', () => {
    const age = new Age(50);
    expect(age.ageEarth).toEqual(50);
  });

  test('mercuryAgeConverter method should generate a persons age in Mercurian years', () => {
    const age = new Age(50);
    expect(age.mercuryAgeConverter()).toEqual((50/0.24));
  });

  test('venusAgeConverter method should generate a persons age in Venerian years', () => {
    const age = new Age(50);
    expect(age.venusAgeConverter()).toEqual((50/0.62));
  });

  test('marsAgeConverter method should generate a persons age in Martian years', () => {
    const age = new Age(50);
    expect(age.marsAgeConverter()).toEqual((50/1.88));
  });

  test('jupiterAgeConverter method should generate a persons age in Jovian years', () => {
    const age = new Age(50);
    expect(age.jupiterAgeConverter()).toEqual((50/11.86));
  });

  test('pastBirthdayCalculationEarth method should determine how many years have passed since a past birthday on Earth', () => {
    const age = new Age(56);
    expect(age.pastBirthdayCalculationEarth(43)).toEqual(13);
  });

  test('futureBirthdayCalculationEarth method should determine how many years that have yet to pass until a future birthday on Earth', () => {
    const age = new Age(56);
    age.futureBirthdayCalculationEarth(61);
    expect(age.futureBirthdayCalculationEarth(61)).toEqual(5);
  });

  test('pastBirthdayCalculationMercury method should determine how many years have passed since a past birthday on Mercury', () => {
    const age = new Age(56);
    expect(age.pastBirthdayCalculationMercury(43)).toBeCloseTo(13/0.24);
  });

  test('pastBirthdayCalculationVenus method should determine how many years have passed since a past birthday on Venus', () => {
    const age = new Age(56);
    expect(age.pastBirthdayCalculationVenus(43)).toBeCloseTo(13/0.62);
  });

  test('pastBirthdayCalculationMars method should determine how many years have passed since a past birthday on Mars', () => {
    const age = new Age(56);
    expect(age.pastBirthdayCalculationMars(43)).toBeCloseTo(13/1.88);
  });

  test('pastBirthdayCalculationJupiter method should determine how many years have passed since a past birthday on Jupiter', () => {
    const age = new Age(56);
    expect(age.pastBirthdayCalculationJupiter(43)).toBeCloseTo(13/11.86);
  });

  test('futureBirthdayCalculationMercury method should determine how many years that have yet to pass until a future birthday on Mercury', () => {
    const age = new Age(56);
    expect(age.futureBirthdayCalculationMercury(61)).toBeCloseTo(5/0.24);
  });

  test('futureBirthdayCalculationVenus method should determine how many years that have yet to pass until a future birthday on Venus', () => {
    const age = new Age(56);
    expect(age.futureBirthdayCalculationVenus(61)).toBeCloseTo(5/0.62);
  });

  test('futureBirthdayCalculationMars method should determine how many years that have yet to pass until a future birthday on Mars', () => {
    const age = new Age(56);
    expect(age.futureBirthdayCalculationMars(61)).toBeCloseTo(5/1.88);
  });

  test('futureBirthdayCalculationJupiter method should determine how many years that have yet to pass until a future birthday on Jupiter', () => {
    const age = new Age(56);
    expect(age.futureBirthdayCalculationJupiter(61)).toBeCloseTo(5/11.86);
  });
  
});