// https://leetcode.com/problems/binary-tree-level-order-traversal
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function traverse(root: TreeNode | null, level: number, result: number[][]) {
  if (root === null) {
    return;
  }

  if (result[level]) {
    result[level].push(root.val);
  } else {
    result[level] = [root.val];
  }

  traverse(root.left, level + 1, result);
  traverse(root.right, level + 1, result);
}

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  traverse(root, 0, result);

  return result;
}

Deno.test(function levelOrderTest() {
  {
    const root = new TreeNode(3);
    const c1 = new TreeNode(9);
    const c2 = new TreeNode(20);

    root.left = c1;
    root.right = c2;

    const c21 = new TreeNode(15);
    const c22 = new TreeNode(7);

    c2.left = c21;
    c2.right = c22;

    assertEquals(levelOrder(root), [[3], [9, 20], [15, 7]]);
  }

  {
    const root = new TreeNode(1);
    assertEquals(levelOrder(root), [[1]]);
  }

  {
    const root = null;
    assertEquals(levelOrder(root), []);
  }
});
