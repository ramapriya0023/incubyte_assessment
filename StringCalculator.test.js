const StringCalculator = require("./StringCalculator");

describe("StringCalculator basic add tests", () => {
  test("should return 0 for an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  test("should return the number when the input is a single number", () => {
    expect(StringCalculator.add("1")).toBe(1);
    expect(StringCalculator.add("5")).toBe(5);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(StringCalculator.add("1,5")).toBe(6);
    expect(StringCalculator.add("2,3")).toBe(5);
  });
});
