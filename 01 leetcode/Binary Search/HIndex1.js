// https://leetcode.com/problems/h-index/description/

var hIndex_sol = function(citations) {
    citations = citations.sort((a,b)=> a-b);
    let n = citations.length;
    let low =0;
    let high = n-1;
    let hindex = 0;
    while(low <= high) {
        let mid = Math.floor((high-low)/2 +low);
        if(citations[mid] >= n-mid){
            high = mid - 1;
            hindex = n-mid
        }else{
            low = mid+1
        }
    }
    return hindex;
};




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