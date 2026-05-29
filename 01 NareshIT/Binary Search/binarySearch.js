let arr = [1,3,5,7,9];
let key = 7;
function bSearch(arr, key){
    let n = arr.length;
    let l=0, h=n-1;
    while(l<=h){
        let mid = Math.floor(l + (h-l)/2);
        if(arr[mid]===key) {
            return mid
        }else if(arr[mid]<key){
            l = mid+1
        }else{
            h=mid-1
        }
    }
}
console.log(bSearch(arr,key));//3