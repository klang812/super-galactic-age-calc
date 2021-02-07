import { Age } from '../src/js/solarAge';

describe ('Age', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Age("Kerry", 47, 79);
  });

  test('should construct object with properties entered', () => {
    expect(earthAge.age).toEqual(47);
  });

  test('should calculate person age on Mercury', () => {
    expect(earthAge.mercury()).toEqual(196);
  });
  
  test('should calculate person age on Venus', () => {
    expect(earthAge.venus()).toEqual(76);
  });

  test('should calculate person age on Mars', () => {
    expect(earthAge.mars()).toEqual(25);
  });

  test('should calculate person age on Jupiter', () => {
    expect(earthAge.jupiter()).toEqual(4);
  });

  test('should calculate Mercury life expectancy', () => {
    expect(earthAge.mercLifeExpect()).toEqual(329);
  })

  test('should calculate Venus life expectancy on venus', () => {
    expect(earthAge.venusLifeExpect()).toEqual(127);
  })

  test('should calculate Mars life expectancy on mars', () => {
    expect(earthAge.marsLifeExpect()).toEqual(42);
  })

  test('should calculate Jupiter life expectancy on jupiter', () => {
    expect(earthAge.jupiterLifeExpect()).toEqual(7);
  })
  
  test('should calculate how many years a person has left on each planet', () => {
    expect(earthAge.mercLive()).toEqual("Kerry, you have 133 years to live on Mercury!")
  })

  test('should calculate how many years a person has left on each planet', () => {
    expect(earthAge.venusLive()).toEqual("Kerry, you have 51 years to live on Venus!")
  })

  test('should calculate how many years a person has left on each planet', () => {
    expect(earthAge.marsLive()).toEqual("Kerry, you have 17 years to live on Mars!")
  })  

  test('should calculate how many years a person has left on each planet', () => {
    expect(earthAge.jupiterLive()).toEqual(3)
  })  

  
  

  let newAge;
  beforeEach(() => {
    newAge = new Age("Mike", 82, 79);
  });

  test('should calculate how many years past life expectancy', () => {
    expect(newAge.mercLive()).toEqual("Mike, you have lived 13 years past your life expectancy on Mercury!")
  })

  test('should calculate how many years past life expectancy', () => {
    expect(newAge.venusLive()).toEqual("Mike, you have lived 5 years past your life expectancy on Venus!")
  })

  test('should calculate how many years past life expectancy', () => {
    expect(newAge.marsLive()).toEqual("Mike, you have lived 2 years past your life expectancy on Mars!")
  })

  test('should calculate how many years past life expectancy', () => {
    expect(newAge.jupiterLive()).toEqual("Mike, you have lived 2 years past your life expectancy on Jupiter!")
  })
});

