import { Age } from '../src/js/solarAge';

describe ('Age', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Age(47, 79);
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

});

