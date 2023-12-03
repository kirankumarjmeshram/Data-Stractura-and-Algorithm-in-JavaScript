function longestRepeatedOdd(N, arr) {
    let containsOdd = false;
    for(let num of arr) {
        if (num % 2 !== 0) {
            containsOdd = true;
            break;  
        }
    }

    if (!containsOdd) {
        console.log(0); 
    }

    let longest = 1;
    let current = 1; 

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] === arr[i-1]) {
            current++;
            longest = Math.max(longest, current); 
        } else {
            current = 1;
        }
    }
    if (containsOdd) {
        console.log(longest); 
    }
}