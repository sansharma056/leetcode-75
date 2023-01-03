// https://leetcode.com/problems/running-sum-of-1d-array
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function runningSum(nums: number[]): number[] {
  nums.forEach((_nums, index) => {
    if (index === 0) {
      return;
    }

    nums[index] += nums[index - 1];
  });

  return nums;
}

Deno.test(
  function runningSumTest() {
    assertEquals(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
    assertEquals(runningSum([1, 1, 1, 1]), [1, 2, 3, 4]);
    assertEquals(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);
  },
);
