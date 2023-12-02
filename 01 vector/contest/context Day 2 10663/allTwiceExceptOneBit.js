//  0011
// ^0101
//  0110
function allTwiceExceptOne(n, arr) {
    let ans = arr[0];
    for (let i = 1; i < n; i++) {
        ans ^= arr[i];
    }
    return ans;
}