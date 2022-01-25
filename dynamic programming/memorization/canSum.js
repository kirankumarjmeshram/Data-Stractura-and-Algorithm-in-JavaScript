//recursion\canSum.js
const canSum =(targetSum,numbers,memo={})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum===0) return true;
    if(targetSum<0) return false;

    for(let num of numbers){
        const remainder = targetSum-num;
        if(canSum(remainder,numbers,memo)===true){
            memo[targetSum]=true;
            return true;
        }
    }
    memo[targetSum]=false;
    return false;
}

console.log(canSum(7,[2,3]))//true
console.log(canSum(7,[2,2]))//false