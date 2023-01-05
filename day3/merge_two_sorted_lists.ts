// https://leetcode.com/problems/merge-two-sorted-lists
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import {
  areLinkedListsEqual,
  ListNode,
} from "../common/LinkedList.ts";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  }

  let mergedListHead: ListNode | null = null;
  let prev: ListNode | null = null;

  while (list1 !== null && list2 !== null) {
    const isPrimaryListHeadSmaller = list1.val <= list2.val;
    const detachedNode = isPrimaryListHeadSmaller ? list1 : list2;

    if (prev === null) {
      mergedListHead = detachedNode;
    } else {
      prev.next = detachedNode;
    }

    prev = detachedNode;

    if (isPrimaryListHeadSmaller) {
      list1 = list1.next;
    } else {
      list2 = list2.next;
    }
  }

  if (list1 !== null) {
    if (prev === null) {
      return list1;
    }
    prev.next = list1;
  }

  if (list2 !== null) {
    if (prev === null) {
      return list2;
    }
    prev.next = list2;
  }

  return mergedListHead;
}

Deno.test(function mergeTwoListsTest() {
  {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

    const mergedList = mergeTwoLists(list1, list2);
    const expected = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(4, new ListNode(4, null))),
        ),
      ),
    );

    assertEquals(
      areLinkedListsEqual(
        mergedList,
        expected,
      ),
      true,
    );
  }

  {
    const list1 = null;
    const list2 = null;

    const mergedList = mergeTwoLists(list1, list2);
    const expected = null;

    assertEquals(
      areLinkedListsEqual(
        mergedList,
        expected,
      ),
      true,
    );
  }

  {
    const list1 = null;
    const list2 = new ListNode(0, null);

    const mergedList = mergeTwoLists(list1, list2);
    const expected = new ListNode(0, null);

    assertEquals(
      areLinkedListsEqual(
        mergedList,
        expected,
      ),
      true,
    );
  }

  {
    const list1 = new ListNode(2, null);
    const list2 = new ListNode(1, null);

    const mergedList = mergeTwoLists(list1, list2);
    const expected = new ListNode(1, new ListNode(2, null));

    assertEquals(
      areLinkedListsEqual(
        mergedList,
        expected,
      ),
      true,
    );
  }
});
