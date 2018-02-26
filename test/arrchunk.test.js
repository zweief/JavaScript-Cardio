import { chunkArr } from "../src/arrchunk";

test("splits array in chunks of given length", () => {
  expect(chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toHaveLength(3);
});

test("every chunk has given length", () => {
  const result = chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  result.forEach(val => expect(val).toHaveLength(3));
});
