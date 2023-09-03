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

  pastBirthdayCalculation (userPastAge) {
    this.pastBirthdayDifference = this.ageEarth - userPastAge;
  }

  futureBirthdayCalculation (userFutureAge) {
    this.futureBirthdayDifference = userFutureAge - this.ageEarth;
    console.log(this.ageEarth);
    console.log(this.futureBirthdayDifference);
    console.log(this.mercuryAgeConverter());
    console.log(this.ageMercury);
  }
}
    

