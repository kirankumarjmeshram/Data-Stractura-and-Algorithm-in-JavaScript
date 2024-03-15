function howSum(targetSum, numbers){
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers){
        let remainder = targetSum - num;
        // if(howSum(remainder,numbers)!== null){
        //     return [...howSum(remainder,numbers), num];
        // }
        let remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null){
            return [...remainderResult, num];
        }
    }
    return null
}
console.log(howSum(701,[2,6,8]))