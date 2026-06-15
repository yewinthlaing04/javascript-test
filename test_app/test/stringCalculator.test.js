import { test, expect } from "vitest";
import { add } from "../src/stringCalculator.js";

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself", () => {
  expect(add("1")).toBe(1);
});

test("adds two comma separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("adds multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles new line separators", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws exception for one negative number", () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
});

test("throws exception with all negative numbers", () => {
  expect(() => add("1,-2,-3,-4")).toThrow(
    "negative numbers not allowed -2,-3,-4",
  );
});

test("ignores numbers greater than 1000", () => {
  expect(add("1,2,1001")).toBe(3);
});

test("keeps 1000 in calculation", () => {
  expect(add("2,1000")).toBe(1002);
});

test("supports delimiter with multiple characters", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test("supports multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("supports multiple long delimiters", () => {
  expect(add("//[**][%%]\n1**2%%3")).toBe(6);
});

test("supports multiple long delimiters with different lengths", () => {
  expect(add("//[***][#]\n1***2#3")).toBe(6);
});
