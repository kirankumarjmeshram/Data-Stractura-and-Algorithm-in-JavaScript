// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;
    let totalGas = 0;
    let currGas = 0;
    let startingIdx = 0;
    for(let i=0;i<n;i++){
        totalGas+= gas[i] - cost[i];
        currGas += gas[i]-cost[i];
        if(currGas<0){
            currGas = 0;
            startingIdx =i+1
       }
    }
    return totalGas>=0?startingIdx:-1;
};


