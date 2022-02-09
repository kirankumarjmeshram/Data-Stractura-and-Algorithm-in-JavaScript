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
console.log(productExceptSelf([10, 3, 5, 6, 2],5))

