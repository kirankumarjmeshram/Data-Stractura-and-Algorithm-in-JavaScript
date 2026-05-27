

let nums = [29, 25, 3, 49, 9, 37, 21, 43];
// min = 3
// max = 49
// n=8
// bucketSize= MAX of(1, (49-3)/(8-1)) = 6;
console.log(bucketSort(nums));
// [3,  9, 21, 25, 29, 37, 43, 49]


function bucketSort(arr) {
    let n = arr.length;
    if (n <= 1) return arr;

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
    let bucketCount =
        Math.floor((max - min) / bucketSize) + 1;

    let buckets = Array.from(
        { length: bucketCount },
        () => []
    );

    for (let num of arr) {
        let idx = Math.floor((num - min) / bucketSize);
        buckets[idx].push(num);
    }

    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }

    let result = [];
    for (let bucket of buckets) {
        result.push(...bucket);
    }

    return result;
}


