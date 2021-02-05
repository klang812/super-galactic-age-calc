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

  test('should calculate life expectancy on mercury', () => {
    expect(earthAge.mercLifeExpect()).toEqual(133);
  })

  test('should calculate how many years until person reaches life expectancy', () => {
    expect(earthAge.mercLifeExpect()).toEqual(133);
  })

  test('should calculate how many years until person reaches life expectancy on venus', () => {
    expect(earthAge.venusLifeExpect()).toEqual(51);
  })

  test('should calculate how many years until person reaches life expectancy on mars', () => {
    expect(earthAge.marsLifeExpect()).toEqual(17);
  })

  test('should calculate how many years until person reaches life expectancy on jupiter', () => {
    expect(earthAge.jupiterLifeExpect()).toEqual(17);
  })
});

