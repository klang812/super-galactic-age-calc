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
  
  test('should calculate how many years past life expectancy a person is on each planet', () => {
    expect(earthAge.mercLive()).toEqual("Kerry, you have 13 years to live on Mercury")
  })

  let newAge;
  beforeEach(() => {
    newAge = new Age("Mike", 82, 79);
  });

  test('should calculate how many years past life expectancy', () => {
    expect(newAge.mercLive()).toEqual(13)
  })
});

