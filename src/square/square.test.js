const square = require("./square");

describe("square", () => {
  //перед каждым тестом
  beforeEach(() => {});
  //единоразово
  beforeEachAll(() => {});
  test("корректное значение", () => {
    expect(square(2)).toBe(4);
  }),
    test("корректное значение", () => {
      expect(square(2)).toBeLessThan(5);
    }),
    test("корректное значение", () => {
      expect(square(2)).toBeGreaterThan(3);
    });
});
