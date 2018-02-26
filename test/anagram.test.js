import { anagram } from "../src/anagram";

test("returns true if anagram", () => {
  expect(anagram("below", "elbow")).toBe(true);
  expect(anagram("Dormitory", "dirty room##")).toBe(true);
});

test("returns false if no anagram or empty", () => {
  expect(anagram("hello", "trello")).toBe(false);
  expect(anagram("!!!","!!1")).toBe(false);
})
