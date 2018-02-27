import { isPalindrome } from "../src/ispalindrome";

test("it returns true when string is palindrome", () => {
  expect(isPalindrome("anna")).toBe(true);
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("!racecar!")).toBe(true);
  expect(isPalindrome(" otto ")).toBe(true);
});

test("it returns false when string is not a palindrome", () => {
  expect(isPalindrome("hello world")).toBe(false);
  expect(isPalindrome("!!otto ")).toBe(false);
});
