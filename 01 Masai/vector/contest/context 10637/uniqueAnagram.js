//  print all unique anagram and total uniq anagram number
function uniqueAnagram(n, arr) {
    const seen = new Map();
    const result = [];

    for (let i = 0; i < n; i++) {
        const curr = arr[i];
        const sortedCurr = curr.split('').sort().join('');
        
        
        if (!seen.has(sortedCurr)) {
            
            seen.set(sortedCurr, curr);
            result.push(curr);
        }
    }

    // return [result.length, result.sort()];
    console.log(result.length)
    l = result.sort()
    for(let i=0;i<l.length;i++){
        console.log(l[i])
    }
}