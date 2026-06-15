import { describe, it, expect } from "vitest";
import { add } from "../src/stringCalculator.js";

describe("String Calculator", () => {
  it("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("adds numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  it("handles new lines", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("throws exception with negatives", () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
  });

  it("ignores numbers > 1000", () => {
    expect(add("1,1001")).toBe(1);
  });

  it("supports long delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  it("supports multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  it("supports multiple long delimiters", () => {
    expect(add("//[**][%%]\n1**2%%3")).toBe(6);
  });
});
