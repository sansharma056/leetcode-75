// https://leetcode.com/problems/first-bad-version
const solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};
