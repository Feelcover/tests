const arrToString = require("./arrToString");

describe("arrToString", () => {
  test("корректное значение", () => {
    expect(arrToString([1, 2, 3, 4, 5])).toEqual(["1", "2", "3", "4", "5"]);
  });
});
