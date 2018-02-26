import { flattenArray } from "../src/flattenarray";

test("it returns an array with the expectet length", () => {
  expect(flattenArray([[1, 2, 3], [1, 2, 3]])).toHaveLength(6);
});

test("it returns array in right format", () => {
  expect(flattenArray([[1, 2, 3], [1, 2, 3]])).toEqual([1, 2, 3, 1, 2, 3]);
});
