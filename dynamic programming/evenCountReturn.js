//You have a string S and its starting index is 1. The string S consists of
// characters from 1-9. You are asked to count the number of even numbered 
//characters ( i.e 2,4,6,8) for every index i .
//For an index i, the result should be calculated from i to the end of the string.

//574674546476 =>7 7 7 6 5 5 4 4 3 2 1 1

function evenCount(arr){
    arr=arr.split("")//.map(Number)
    var ans = new Array(arr.length)
    var count=0;
    for(i=arr.length-1;i>=0;i--){
        if(arr[i]%2==0){
            count++;
            ans[i]=count
        }
        ans[i]=count
    }
    return ans.join(" ")
    
}
console.log(evenCount('574674546476'))
