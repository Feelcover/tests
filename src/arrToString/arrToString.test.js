const arrToString = require("./arrToString");

describe("arrToString", () => {
  test("корректное значение", () => {
    expect(arrToString([1, 2, 3, 4, 5])).toEqual(["1", "2", "3", "4", "5"]);
  }),
  test("невалидные значения", () => {
    expect(arrToString([1, 2, 3, 4, 5])).toEqual(["1", "2", "3", "4", "5"]);
  }),
  test("пустой массив", () => {
    expect(arrToString([])).toEqual([]);
  }),
  test("пустой массив", () => {
    expect(arrToString([1,2,3])).not.toEqual(["1","2","3","4"]);
  })
});
