// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit2 = function(gas, cost) {
    let n = gas.length;
    let total = 0;
    let res = 0;
    let gasSum = gas.reduce((a,b)=>a+b);
    let costSum = cost.reduce((a,b)=>a+b)
    if(gasSum < costSum) return -1

    for(let i=0;i<n;i++){
        total += gas[i]-cost[i];
        if(total<0){
            total = 0;
            res = i + 1
        }
    }

    return res;
    
};

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


var canCompleteCircuitBF = function(gas, cost) {
    let n = gas.length;
    
    // Try starting at each index
    for(let start = 0; start < n; start++){
        let totalGas = 0;
        let i = start;
        let stopsCount = 0;
        
        // Continue until we've visited each station once
        while(stopsCount < n){
            totalGas += gas[i] - cost[i];
            if(totalGas < 0){
                // If at any point gas is negative, this start doesn't work
                break;
            }
            i = (i + 1) % n; // Move to next station
            stopsCount++;
        }
        
        if(stopsCount === n && totalGas >= 0){
            // If we've made it around the circuit with non-negative gas, return the start index
            return start;
        }
    }
    
    // If no starting index works, return -1
    return -1;
};