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
    return this.ageEarth = this.ageEarth - userPastAgeEarth;
  }

  futureBirthdayCalculationEarth (userFutureAgeEarth) {
    return this.ageEarth = userFutureAgeEarth - this.ageEarth;
  }

  pastBirthdayCalculationMercury () {
    
  }
}
    

