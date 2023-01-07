// https://leetcode.com/problems/linked-list-cycle-ii
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import { ListNode } from "../common/LinkedList.ts";

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head, fast = head;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow!.next;
    fast = fast!.next;
  }

  return slow;
}

Deno.test(function detectCycleTest() {
  {
    const cyclicNode = new ListNode(2, null);
    const head = new ListNode(3, cyclicNode);
    cyclicNode.next = new ListNode(0, new ListNode(-4, cyclicNode));

    detectCycle(head);

    assertEquals(detectCycle(head)?.val, cyclicNode.val);
  }
});
