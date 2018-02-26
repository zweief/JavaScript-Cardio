import { longestWord } from "../src/longestword";

test("returns the longest word of a string", () => {
  expect(longestWord("Hello world. Today is a cold day")).toEqual([
    "Hello",
    "world",
    "Today"
  ]);
});

test("returns an array if more then one word have the same length", () => {
  expect(longestWord("Hello world. How are you?")).toHaveLength(2);
});

test("returns string when only one word gets returned", () => {
  expect(longestWord("Hello. How are you")).toBe("Hello");
});
