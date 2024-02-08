function runProgram(input) {
    input = input.trim().split('\n');
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(bSearch(0,n-1,k,arr));
}
function bSearch(low,high,k,arr){
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] === k){
            return 1;
        }else if(arr[mid]<k){
            return bSearch(mid+1,high,k,arr);
        }else{
            return bSearch(low,mid-1,k,arr);
        }
    }
    return -1;
}