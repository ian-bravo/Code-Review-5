export default class Age {
  constructor(earthAge) {
    this.ageEarth = earthAge;
  }

  mercuryAgeConverter() {
    return this.ageEarth / 0.24;
  }

  venusAgeConverter() {
    return this.ageEarth / 0.62;
  }

  marsAgeConverter() {
    return this.ageEarth / 1.88;
  }

  jupiterAgeConverter() {
    return this.ageEarth / 11.86;
  }

  pastBirthdayCalculationEarth (userPastAgeEarth) {
    return this.ageEarth - userPastAgeEarth;
  }

  futureBirthdayCalculationEarth (userFutureAgeEarth) {
    return userFutureAgeEarth - this.ageEarth;
  }

  pastBirthdayCalculationMercury (userPastAgeEarth) {
    let ageMercury = userPastAgeEarth / 0.24;
    return this.ageEarth / 0.24 - ageMercury;
  }

  pastBirthdayCalculationVenus (userPastAgeEarth) {
    let ageVenus = userPastAgeEarth / 0.62;
    return this.ageEarth / 0.62 - ageVenus;
  }

  pastBirthdayCalculationMars (userPastAgeEarth) {
    let ageMars = userPastAgeEarth / 1.88;
    return this.ageEarth / 1.88 - ageMars;
  }

  pastBirthdayCalculationJupiter (userPastAgeEarth) {
    let ageJupiter = userPastAgeEarth / 11.86;
    return this.ageEarth / 11.86 - ageJupiter;
  }

  futureBirthdayCalculationMercury (userFutureAgeMercury) {
    let ageMercury = userFutureAgeMercury / 0.24
    return ageMercury - (this.ageEarth / 0.24);
  }
}
    

