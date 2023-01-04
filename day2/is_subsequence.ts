// https://leetcode.com/problems/is-subsequence
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) {
    return true;
  }

  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      j++;

      if (j === s.length) {
        return true;
      }
    }
  }

  return false;
}

Deno.test(function isSubsequenceTest() {
  assertEquals(isSubsequence("abc", "ahbgdc"), true);
  assertEquals(isSubsequence("axc", "ahbgdc"), true);
  assertEquals(isSubsequence("", "ahbgdc"), true);
});
