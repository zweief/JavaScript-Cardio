import { reverseString } from "../src/reversestring";

test("it reverses the input string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Yes it reverses the string!")).toBe(
    "!gnirts eht sesrever ti seY"
  );
});
