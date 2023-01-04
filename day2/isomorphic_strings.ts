// https://leetcode.com/problems/isomorphic-strings
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charMapping = new Map<string, string>();
  const alreadyMappedToSomething = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!charMapping.has(sChar)) {
      if (alreadyMappedToSomething.has(tChar)) {
        return false;
      }

      charMapping.set(sChar, tChar);
      alreadyMappedToSomething.add(tChar);
    }

    const mappedChar = charMapping.get(sChar)!;
    if (mappedChar !== tChar) {
      return false;
    }
  }

  return true;
}

Deno.test(function isIsomorphicTest() {
  assertEquals(isIsomorphic("egg", "add"), true);
  assertEquals(isIsomorphic("foo", "bar"), false);
  assertEquals(isIsomorphic("paper", "title"), true);
  assertEquals(isIsomorphic("badc", "baba"), false);
});
