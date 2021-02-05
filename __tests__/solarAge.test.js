const { TestScheduler } = require("jest");

describe ('Age', () => {

  beforeEach(() => {
    let personAge = new Age(47);
  });

  test('should construct object with properties entered', () => {
    expect(personAge.age).toEqual(47);
  });
  
});


