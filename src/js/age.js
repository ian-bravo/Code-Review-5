export default class Age {
  constructor(earthAge) {
    this.ageEarth = earthAge
  }

  mercuryAgeConverter() {
    this.ageMercury = this.ageEarth / 0.24;
  }

  venusAgeConverter() {
    this.ageVenus = this.ageEarth / 0.62;
  }

  marsAgeConverter() {
    this.ageMars = this.ageEarth / 1.88;
  }

  jupiterAgeConverter() {
    this.ageJupiter = this.ageEarth / 11.86;
  }

  pastBirthdayCalculation () {
    
  }
}