function countDecoding(digits, n){
    if(n==0 || n==1){
        return 1;
    }
    if(digits[0] == '0'){
        return 0;
    }

    let count = 0;

    if(digits[n-1] > '0'){
        count = countDecoding(digits, n-1)
    }

    if(digits[n-2] == '1' || (digits[n-2] == '2' && digits[n-1] < '7')){
        count += countDecoding(digits, n-2);
    }

    return count;
}

// the count of longest increasing subsequence ending at the current element is less 
// than the count of longest increasing subsequence ending at the previous element 
// plus 1, then update the count of longest increasing subsequence ending at the 
// current element