// https://leetcode.com/problems/find-pivot-index
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function pivotIndex(nums: number[]): number {
  const leftNumsSum: number[] = Array(nums.length).fill(0);
  leftNumsSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    leftNumsSum[i] = nums[i] + leftNumsSum[i - 1];
  }

  const rightNumsSum: number[] = Array(nums.length).fill(0);
  rightNumsSum[nums.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    rightNumsSum[i] = nums[i] + rightNumsSum[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (leftNumsSum[i] - value === rightNumsSum[i] - value) {
      return i;
    }
  }

  return -1;
}

Deno.test(function pivotIndexTest() {
  assertEquals(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
  assertEquals(pivotIndex([1, 2, 3]), -1);
  assertEquals(pivotIndex([2, 1, -1]), 0);
});
