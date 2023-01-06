export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function getLinkedListLength(list: ListNode | null): number {
  let length = 0;

  let cur = list;
  while (cur !== null) {
    length++;
    cur = cur.next;
  }

  return length;
}

export function areLinkedListsEqual(
  list1: ListNode | null,
  list2: ListNode | null,
): boolean {
  if (list1 === list2) {
    return true;
  } else if (list1 === null || list2 === null) {
    return false;
  }

  const len1 = getLinkedListLength(list1);
  const len2 = getLinkedListLength(list2);

  if (len1 !== len2) {
    return false;
  }

  while (list1 !== null && list2 !== null) {
    if (list1.val !== list2.val) {
      return false;
    }

    list1 = list1.next;
    list2 = list2.next;
  }

  return true;
}

export function printLinkedList(list: ListNode | null): string {
  let s = "";

  while (list !== null) {
    s += `${list.val} -> `;

    list = list.next;
  }

  return s;
}
