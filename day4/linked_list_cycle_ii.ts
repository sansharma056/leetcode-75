// https://leetcode.com/problems/linked-list-cycle-ii
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import { ListNode } from "../common/LinkedList.ts";

function detectCycle(head: ListNode | null): ListNode | null {
  const nodeSet = new Set<ListNode>();

  while (head !== null) {
    if (nodeSet.has(head)) {
      return head;
    }

    nodeSet.add(head);

    head = head.next;
  }

  return null;
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
