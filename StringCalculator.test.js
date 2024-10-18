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

  test("should return the sum of multiple comma-separated numbers", () => {
    expect(StringCalculator.add("1,1,1,1,1,1,1")).toBe(7);
    expect(StringCalculator.add("100,200,300,400")).toBe(1000);
    expect(StringCalculator.add("0,0,0,0")).toBe(0);
  });

  test("should handle only newlines as separators", () => {
    expect(StringCalculator.add("1\n2\n3")).toBe(6);
    expect(StringCalculator.add("4\n5\n6")).toBe(15);
    expect(StringCalculator.add("7\n8\n9\n10")).toBe(34);
  });

  test("should handle commas and newlines as separators", () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
    expect(StringCalculator.add("4,5\n6")).toBe(15);
    expect(StringCalculator.add("7,8\n9")).toBe(24);
  });
});
