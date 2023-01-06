// https://leetcode.com/problems/middle-of-the-linked-list
import { assert } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { areLinkedListsEqual, ListNode } from "../common/LinkedList.ts";

function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow.next !== null && fast !== null && fast?.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

Deno.test(function middleNodeTest() {
  {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const expected = new ListNode(3, new ListNode(4, new ListNode(5, null)));

    assert(areLinkedListsEqual(middleNode(head), expected));
  }

  {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(5, new ListNode(6, null))),
        ),
      ),
    );
    const expected = new ListNode(4, new ListNode(5, new ListNode(6, null)));

    assert(areLinkedListsEqual(middleNode(head), expected));
  }

  {
    const head = new ListNode(
      1,
      null,
    );
    const expected = new ListNode(1, null);

    assert(areLinkedListsEqual(middleNode(head), expected));
  }

  {
    const head = new ListNode(
      1,
      new ListNode(2, null),
    );
    const expected = new ListNode(2, null);

    assert(areLinkedListsEqual(middleNode(head), expected));
  }
});
