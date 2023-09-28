var permute = function(nums) {
    let permutations = [];
    getPermutations(0,permutations,nums)
    return permutations;
};

function  getPermutations(i,permutations,nums){
    if(i===nums.length-1){
        permutations.push(nums.slice())
    }else{
        for(let j=i;j<nums.length;j++){
            swap(i,j,nums);
            getPermutations(i+1,permutations, nums);
            swap(i,j,nums)
        }
    }
}

function swap(i,j,arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}