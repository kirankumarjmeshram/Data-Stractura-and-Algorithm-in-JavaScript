

function rotateArray(arr,n,k){
    k=k%n;
    var newArr = [];
    for(var i=0;i<n;i++){
        if(i<k){
            newArr.push(arr[n+i-k])
        }else{
            newArr.push(arr[i-k])
        }
    }
    return newArr
}
console.log(rotateArray([1, 2, 3, 4, 5],5,2))


// var rotate = function(nums, k) {
//     k = k%nums.length
//     let reverse = function(i, j){
//     while(i < j){
//         let temp = nums[i]
//         nums[i] = nums[j]
//         nums[j] = temp
//         i++
//         j--
//     }
//    } 
// 	reverse(0, nums.length-1); 
// 	 reverse(0, k-1)
//    reverse(k, nums.length-1)
// };

