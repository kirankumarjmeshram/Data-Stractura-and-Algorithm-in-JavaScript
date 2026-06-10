/**
 * Smallest Good Base – Key Notes

1. If n is represented as all 1's in base k:
   n = 1 + k + k² + ... + k^m
   where m is the highest exponent (number of digits - 1).

2. For a fixed m, define:
   f(k) = 1 + k + k² + ... + k^m  (where k is base)
   f(k) is strictly increasing as k increases.
   Example (m = 2):
   k = 2 → 7
   k = 3 → 13
   k = 4 → 21
   k = 5 → 31

3. Since f(k) is monotonic (sorted), binary search can be used to find the base k.

   * If f(mid) < n → increase base → left = mid + 1
   * If f(mid) > n → decrease base → right = mid - 1
   * If f(mid) = n → valid base found

4. Smaller base produces more digits of 1.

   Example:
   13 = 111(base 3)
   13 = 11(base 12)

   Therefore, to find the smallest base, try the largest possible m first.

5. Algorithm:

   * Iterate m from 63 down to 1.
   * For each m, binary search the base k.
   * The first valid base found is the smallest good base.

Time Complexity: O((log n)²)
Space Complexity: O(1)

 */