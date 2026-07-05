/**
PROBLEM: 
Given N bottles. The ith bottle has A[i] radius. Once a bottle is enclosed inside another bottle, it ceases to be visible. The task is to minimize the number of visible bottles. You can put the ith bottle into a jth bottle if the following condition is fulfilled.

ith bottle itself is not enclosed in another bottle.
jth bottle does not enclose any other bottle.
Radius of bottle i is smaller than bottle j ( i.e. A[i] < A[j] ).

Input : 1 1 2 3 4 5 5 4
Output : 2
Explanation:
1 -> 2 [1, 2, 3, 4, 5, 5, 4]
2 -> 3 [1, 3, 4, 5, 5, 4]
3 -> 4 [1, 4, 5, 5, 4]
4 -> 5 [1, 5, 5, 4]
1 -> 4 [5, 5, 4]
4 -> 5 [5, 5]

Finally, there are 2 bottles left which are visible. Hence the answer is 2.

APPROACH: 
Since the condition is A[i] < A[j], bottles with the 
same radius can never be nested inside each other, 
so if a radius appears k times, we need at least k separate chains

Therefore, the minimum number of visible bottles is 
equal to the maximum frequency of any radius, 
which is why we only count frequencies and return the maximum count.
 */
function minVisibleBottles(arr) {
    arr.sort((a, b) => a - b);

    let maxFreq = 1;
    let currFreq = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currFreq++;
        } else {
            maxFreq = Math.max(maxFreq, currFreq);
            currFreq = 1;
        }
    }

    maxFreq = Math.max(maxFreq, currFreq);

    return maxFreq;
}

// console.log(minVisibleBottles([1,2,3,4,5,5,4])); 

// using hashmap
function minVisibleBottles(arr) {
    const map = {};
    let maxFreq = 0;

    for (const radius of arr) {
        map[radius] = (map[radius] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[radius]);
    }

    return maxFreq;
}

// Example
console.log(minVisibleBottles([1, 2, 3, 4, 5, 5, 4])); // 2