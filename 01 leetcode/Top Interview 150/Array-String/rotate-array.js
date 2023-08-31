var rotate = function(nums, k) {
    k = k%nums.length
    let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
   } 
   //eg arr = [1,2,3,4,5], k =3;
	reverse(0, nums.length-1); // reverse full array arr = [5,4,3,2,1] 
	 reverse(0, k-1) // reverse first k elements arr = [3,4,5,2,1] 
   reverse(k, nums.length-1) // reverse remaining elements arr = [3,4,5,1,2]
};