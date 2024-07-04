// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let low = Math.max(...weights);
    let high = weights.reduce((a, b) => a + b, 0);

    while (low < high) {
        mid = low + Math.floor((high - low) / 2);
        let day = 1;
        let sum = 0;
        for (let weight of weights) {
            if ((weight + sum) > mid) {
                day++;
                sum = 0;
            }
            sum += weight;
        }
        if (day > days) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};