// https://leetcode.com/problems/number-of-islands
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function explore(grid: string[][], x: number, y: number) {
  if (grid[x][y] === "0") {
    return;
  }

  grid[x][y] = "0";

  if (x >= 1) explore(grid, x - 1, y);
  if (x <= grid.length - 2) explore(grid, x + 1, y);
  if (y >= 1) explore(grid, x, y - 1);
  if (y <= grid[0].length - 2) explore(grid, x, y + 1);
}

function numIslands(grid: string[][]): number {
  let nums = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        nums++;
        explore(grid, i, j);
      }
    }
  }

  return nums;
}

Deno.test(function numIslandsTest() {
  {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];

    assertEquals(numIslands(grid), 1);
  }

  {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];

    assertEquals(numIslands(grid), 3);
  }
});
