function howSum(targetSum, numbers, memo = {}){
    if (targetSum in memo) return memo[targetSum];
    if(targetSum ===  0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        let remainder = targetSum - num;
        let remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null){
            memo[remainderResult] = [...remainderResult, num];
            return memo[remainderResult];
        }
    }

    return null;
}

console.log(howSum(701,[2,6,8]))