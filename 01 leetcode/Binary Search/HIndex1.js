// https://leetcode.com/problems/h-index/description/






var hIndex = function(citations) {
    let arr = citations.sort((a,b)=> a-b);
    let n = citations.length;
    for(let i=0;i<n;i++){
        if(citations[i] >= n-i){
            return n-i;
        }
    }
    return 0;
};