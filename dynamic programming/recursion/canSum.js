function canSum(targetSum, numbers){
    if(targetSum === 0 ) return true;
    if(targetSum < 0 ) return false; 
    for(let num of numbers){
        let remainder = targetSum - num;
        if(canSum(remainder, numbers) === true) return true;
    }
    return false;
}

console.log(canSum(7,[2,3,4,5,6,7])) // true