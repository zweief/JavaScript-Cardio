import { letterChanges } from "../src/letterchanges";

test("it changes letters correct", () => {
  expect(letterChanges("hello world")).toBe("Ifmmp xpsmE");
  expect(letterChanges("abc")).toBe("bcd");
});

test("it changes z|Z to A", () => {
  expect(letterChanges("z Z")).toBe("A A");
});

test("it caps all vowels", () => {
  expect(letterChanges("zdhnt")).toBe("AEIOU");
});
