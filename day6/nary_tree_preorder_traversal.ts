// https://leetcode.com/problems/n-ary-tree-preorder-traversal
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function traverse(root: Node | null, result: number[]) {
  if (root === null) {
    return;
  }

  result.push(root.val);

  for (const child of root.children) {
    traverse(child, result);
  }
}

function preorder(root: Node | null): number[] {
  const result: number[] = [];

  traverse(root, result);

  return result;
}

Deno.test(function preorderTest() {
  {
    const root = new Node(1);
    const c1 = new Node(3);
    const c2 = new Node(2);
    const c3 = new Node(4);

    const c11 = new Node(5);
    const c12 = new Node(6);

    c1.children = [c11, c12];

    root.children = [
      c1,
      c2,
      c3,
    ];

    assertEquals(preorder(root), [1, 3, 5, 6, 2, 4]);
  }
});
