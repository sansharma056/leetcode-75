// https://leetcode.com/problems/flood-fill
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

type Coordinates = [number, number];

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const START_COLOR = image[sr][sc];
  const queue: Coordinates[] = [];

  queue.push([sr, sc]);
  while (queue.length > 0) {
    const [x, y] = queue.pop()!;
    if (image[x][y] === color || image[x][y] !== START_COLOR) {
      continue;
    }

    image[x][y] = color;

    if (x >= 1) queue.push([x - 1, y]);
    if (x <= image.length - 2) queue.push([x + 1, y]);
    if (y >= 1) queue.push([x, y - 1]);
    if (y <= image[0].length - 2) queue.push([x, y + 1]);
  }

  return image;
}

Deno.test(function floodFillTest() {
  {
    const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2;
    assertEquals(floodFill(image, sr, sc, color), [[2, 2, 2], [2, 2, 0], [
      2,
      0,
      1,
    ]]);
  }

  {
    const image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, color = 0;
    assertEquals(floodFill(image, sr, sc, color), [[0, 0, 0], [0, 0, 0]]);
  }
});
