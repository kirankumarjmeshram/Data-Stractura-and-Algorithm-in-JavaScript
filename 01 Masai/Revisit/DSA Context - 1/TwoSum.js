function findTwoSum(N, B, arr) {
    // write code here
    let left = 0;
    let right = N-1;
  while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === B) {
            return [left, right];
        } else if (sum > B) {
            right--;
        } else {
            left++;
        }
    }

    return [-1, -1];
}
