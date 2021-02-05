export class Age {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }

  mercury(){
    let mercAge = this.age / .24;
    return parseInt(mercAge.toFixed(0));
  }

  venus(){
    let venusAge = this.age / .62;
    return parseInt(venusAge.toFixed(0));
  }

  
};
