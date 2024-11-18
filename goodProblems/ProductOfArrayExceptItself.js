//https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1
class Solution {
    productExceptSelf(nums,n){
      //code here
      var leftNums = new Array(n);
      var rightNums = new Array(n);
      
      leftNums[0] =1;
      rightNums[n-1]=1;
      
      for(var i=1;i<n;i++){
          leftNums[i]=nums[i-1]*leftNums[i-1]
      }
      
       for(var i=n-2;i>=0;i--){
          rightNums[i]=nums[i+1]*rightNums[i+1]
      }
      var newArray=[];
        for(var i=0;i<n;i++){
          newArray[i]=rightNums[i]*leftNums[i]
      }
      return newArray
    }
   
}

function productExceptSelf2(arr,n){
  // let n = arr.length;
  let output = [];
  let left = 1;
  for(let i=0;i<n;i++){
    output[i]= left;
    left = left * arr[i]
  }
  let right = 1;
  for(let i=n-1;i>=0;i--){
    output[i] = output[i] * right;
    right = right * arr[i]
    }
  return output
}
console.log(productExceptSelf2([10, 3, 5, 6, 2],5)) //[ 180, 600, 360, 300, 900 ]

