// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function maxProfit(prices: number[]): number {
  let minCost = Number.POSITIVE_INFINITY;
  let maxProfit = 0;

  for (const price of prices) {
    minCost = Math.min(minCost, price);
    maxProfit = Math.max(maxProfit, price - minCost);
  }

  return maxProfit;
}

Deno.test(function maxProfitTest() {
  assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
