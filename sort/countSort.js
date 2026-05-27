function countSort(nums) {
    let max = Math.max(...nums)
    let freqArr = new Array(max + 1).fill(0);

    for (let num of nums) {
        freqArr[num]++;
    }
    let ans = [];
    for (let i = 0; i < freqArr.length; i++) {
        while (freqArr[i] > 0) {
            ans.push(i);
            freqArr[i]--;
        }
    }
    return ans;
}

console.log(countSort([4, 2, 2, 8, 3, 3, 1]));
// [
//   1, 2, 2, 3,
//   3, 4, 8
// ]
