let arr = [2, 4, 6, 8];
let sum = 8;
let ans = combinationSum(arr, sum);

ans.forEach(el=> console.log(el.join(" ")))

function combinationSum(arr, sum) {
    let ans = [];
    let set = new Set([...arr]);
    arr = [...set];
    arr.sort();
    findNumbers(ans, arr, sum, 0, []);
    return ans;
}

function findNumbers(ans, arr, sum, index, temp) {
    if (sum === 0) {
        ans.push([...temp]);
        return;
    }

    for (let i = index; i < arr.length; i++) {
        if (sum - arr[i] >= 0) {
            temp.push(arr[i]);
            findNumbers(ans, arr, sum - arr[i], i, temp);
            temp.pop();
        }
    }
}

