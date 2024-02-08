function differenceOfK(n,k, arr){
    const numSet = new Set();

    for (let i = 0; i < n; i++) {
        const target1 = arr[i] + k;
        const target2 = arr[i] - k;

        if (numSet.has(target1) || numSet.has(target2)) {
            return "Yes";
        }

        numSet.add(arr[i]);
    }

    return "No";
    
}