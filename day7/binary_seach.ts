// https://leetcode.com/problems/binary-search
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) / 2;

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

Deno.test(function searchTest() {
  assertEquals(search([-1, 0, 3, 5, 9, 12], 9), 4);
  assertEquals(search([-1, 0, 3, 5, 9, 12], 2), -1);
});
