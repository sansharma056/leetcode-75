// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function longestPalindrome(s: string): number {
  let lenLongestPalindrome = 0;

  const charMap = new Map<string, number>();
  for (const char of s) {
    charMap.set(char, (charMap.get(char) ?? 0) + 1);
  }

  let wasOddNumFound = false;

  for (const v of charMap.values()) {
    if (v % 2 === 0) {
      lenLongestPalindrome += v;
    } else {
      wasOddNumFound = true;
      lenLongestPalindrome += v - 1;
    }
  }

  lenLongestPalindrome += wasOddNumFound ? +1 : 0;

  return lenLongestPalindrome;
}

Deno.test(function maxProfitTest() {
  assertEquals(longestPalindrome("abccccdd"), 7);
  assertEquals(longestPalindrome("a"), 1);
  assertEquals(longestPalindrome("ddbbbbbaaa"), 1);
});
