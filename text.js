// XOR is monotonic in the absolute difference between numbers. (If the numbers are identical, then 
// the XOR is zero). If you ignore the possibility of negative numbers and write the numbers in binary, it becomes obvious.
// So the minimum value in a sorted list will always be between a particular adjacent pair
console.log(2^3)//1
console.log(3^4)//7
console.log(4^5)//3
console.log(5^6)//3
console.log(6^7)//1
console.log(7^8)//15
console.log(8^9)//1
console.log(9^10)//3
console.log(3^6)//5
console.log(5^15)//10
console.log(15^20)//27
console.log(11^22)//29

function findTarget(arr, target) {
    if (target < arr[0] || target > arr[arr.length - 1]) return -1;
    let low = 0;
    let high = arr.length - 1;
    let result = -1; // Initialize result to -1 (no valid smaller element found)
    while (low <= high) { // Use <= instead of <
        let mid = Math.floor((high + low) / 2); // Correct mid calculation
        if (arr[mid] === target) {
            return target;
        } else if (arr[mid] < target) {
            result = arr[mid]; // Update result with the current smaller element
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result; // Return the largest smaller element found
}
