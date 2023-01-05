// https://leetcode.com/problems/reverse-linked-list
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import { areLinkedListsEqual, ListNode } from "../common/LinkedList.ts";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

Deno.test(function mergeTwoListsTest() {
  {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const expected = new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1, null)))),
    );

    assertEquals(areLinkedListsEqual(reverseList(head), expected), true);
  }

  {
    const head = new ListNode(1, new ListNode(2, null));
    const expected = new ListNode(2, new ListNode(1, null));

    assertEquals(areLinkedListsEqual(reverseList(head), expected), true);
  }
});
