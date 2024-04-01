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
