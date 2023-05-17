//https://leetcode.com/problems/richest-customer-wealth/description/
//a
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let i=0;i< accounts.length;i++){
       let currentMax = 0;
        for(let j=0;j<accounts[i][j];j++){
            currentMax += accounts[i][j];
        }
        if(currentMax >= maxWealth){
            maxWealth = currentMax;
        }
    }
    return maxWealth;
};