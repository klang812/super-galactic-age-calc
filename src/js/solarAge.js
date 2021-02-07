export class Age {
  constructor(name, age, lifeExpect) {
    this.name = name;
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

  mars(){
    let marsAge = this.age / 1.88;
    return parseInt(marsAge.toFixed(0));
  }

  jupiter(){
    let jupiterAge = this.age / 11.86;
    return parseInt(jupiterAge.toFixed(0));
  }

  mercLifeExpect(){
    let mercLife = this.lifeExpect / .24;
    return parseInt(mercLife.toFixed(0));
  }

  venusLifeExpect(){
    let venusLife = this.lifeExpect / .62;
    return parseInt(venusLife.toFixed(0));
  }

  marsLifeExpect(){
    let marsLife = this.lifeExpect / 1.88;
    return parseInt(marsLife.toFixed(0));
  }

  jupiterLifeExpect(){
    let jupiterLife = this.lifeExpect / 11.86;
    return parseInt(jupiterLife.toFixed(0));
  }

  mercLive(){
    let age = this.mercury();
    let life = this.mercLifeExpect();
    let name = this.name;
    if (age <= life) {  
    let lifeToLive = life - age;
      return `${name}, you have ${lifeToLive} years to live on Mercury!`;
    } else {
      let pastLife = age - life;
      return `${name}, you have lived ${pastLife} years past your life expectancy on Mercury!`;
    }
    
  
  }  
  venusLive(){
    let age = this.venus();
    let life = this.venusLifeExpect();
    let name = this.name;
    if (age <= life) {  
    let lifeToLive = life - age;
      return `${name}, you have ${lifeToLive} years to live on Venus!`;
    } else {
      let pastLife = age - life;
      return `${name}, you have lived ${pastLife} years past your life expectancy on Venus!`;
    }
  }  

  marsLive(){
    let age = this.mars();
    let life = this.marsLifeExpect();
    let name = this.name;
    if (age <= life) {  
    let lifeToLive = life - age;
      return `${name}, you have ${lifeToLive} years to live on Mars!`;
    } else {
      let pastLife = age - life;
      return `${name}, you have lived ${pastLife} years past your life expectancy on Mars!`;
    }
  }  
  
  jupiterLive(){
    let age = this.mars();
    let life = this.marsLifeExpect();
    
    let lifeToLive = life - age
      return lifeToLive;
    }
  }
  

