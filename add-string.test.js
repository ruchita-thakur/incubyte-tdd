const add = require("./add-string.js");

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself for a single number string", () => {
    expect(add("1")).toBe(1);
  });
  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  it("should return a number", () => {
    expect(add("1,2,3")).toEqual(expect.any(Number));
  });
});
