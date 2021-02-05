import { Age } from '../src/js/solarAge';

describe ('Age', () => {
  let personAge;
  beforeEach(() => {
    personAge = new Age(47);
  });

  test('should construct object with properties entered', () => {
    expect(personAge.age).toEqual(47);
  });
  
});


