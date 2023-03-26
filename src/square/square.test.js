const square = require("./square");

describe("square", () => {
  //перед каждым тестом
  beforeEach(() => {});
  //единоразово
  //   beforeEachAll(() => {});
  test("корректное значение", () => {
    //     expect(square(2)).toBe(4);
    //       expect(square(2)).toBeLessThan(5);
    //       expect(square(2)).toBeGreaterThan(3);
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("дополнительный", () => {
    //     expect(square(2)).toBe(4);
    //       expect(square(2)).toBeLessThan(5);
    //       expect(square(2)).toBeGreaterThan(3);
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });
  //после каждого теста
  afterEach(() => {jest.clearAllMocks()});
  //после каждого теста
  //   afterEachAll(() => {})
});
