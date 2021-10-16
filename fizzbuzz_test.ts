import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts";
import { fizzbuzz } from "./fizzbuzz.ts";

Deno.test("If the argument given to fizzbuzz is 1", () => {
  assertEquals(fizzbuzz(1), "1");
});

Deno.test("If the argument given to fizzbuzz is 2", () => {
  assertEquals(fizzbuzz(2), "2");
});

Deno.test("If the argument given to fizzbuzz is 3", () => {
  assertEquals(fizzbuzz(3), "Fizz");
});

Deno.test("If the argument given to fizzbuzz is 4", () => {
  assertEquals(fizzbuzz(4), "4");
});

Deno.test("If the argument given to fizzbuzz is 5", () => {
  assertEquals(fizzbuzz(5), "Buzz");
});

Deno.test("If the argument given to fizzbuzz is 6", () => {
  assertEquals(fizzbuzz(6), "Fizz");
});

Deno.test("If the argument given to fizzbuzz is 7", () => {
  assertEquals(fizzbuzz(7), "7");
});

Deno.test("If the argument given to fizzbuzz is 8", () => {
  assertEquals(fizzbuzz(8), "8");
});

Deno.test("If the argument given to fizzbuzz is 9", () => {
  assertEquals(fizzbuzz(9), "Fizz");
});

Deno.test("If the argument given to fizzbuzz is 10", () => {
  assertEquals(fizzbuzz(10), "Buzz");
});

Deno.test("If the argument given to fizzbuzz is 11", () => {
  assertEquals(fizzbuzz(11), "11");
});

Deno.test("If the argument given to fizzbuzz is 12", () => {
  assertEquals(fizzbuzz(12), "Fizz");
});

Deno.test("If the argument given to fizzbuzz is 13", () => {
  assertEquals(fizzbuzz(13), "13");
});

Deno.test("If the argument given to fizzbuzz is 14", () => {
  assertEquals(fizzbuzz(14), "14");
});

Deno.test("If the argument given to fizzbuzz is 15", () => {
  assertEquals(fizzbuzz(15), "FizzBuzz");
});
