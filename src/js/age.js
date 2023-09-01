export default class Age {
  constructor(earthAge) {
    this.ageEarth = earthAge
  }

  mercuryAgeConverter() {
    this.ageMercury = this.ageEarth * 0.24;
  }

  venusAgeConverter() {
    this.ageVenus = this.ageEarth * 0.62;
  }
}