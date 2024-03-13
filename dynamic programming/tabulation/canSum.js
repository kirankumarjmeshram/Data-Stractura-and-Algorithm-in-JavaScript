function canSum(targetSum, numbers){
    let table = new Array(targetSum+1).fill(false);
    table[0] = true;
    // for(let num of numbers){
    //     table[num] = true;
    // }
    for(let i=0;i<=targetSum;i++){
        if(table[i]=== true){
            for(let num of numbers){
                table[i+num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log(canSum(7,[2,4,4]))//false
console.log(canSum(7,[1,4,4]))// true
