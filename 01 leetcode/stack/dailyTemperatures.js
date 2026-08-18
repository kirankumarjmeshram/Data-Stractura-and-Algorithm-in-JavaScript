// https://leetcode.com/problems/daily-temperatures/

//BF
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let warmerTemp = new Array(n).fill(0);
    for(let i=0;i<n;i++) {
        for(let j=i+1;j<n;j++) {
            if(temperatures[j] > temperatures[i]){
                warmerTemp[i] = j-i;
                break
            }
        }
    }
    return warmerTemp;
};

// using stack
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let warmerTemp = new Array(n).fill(0);
    for(let i=0;i<n;i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            let prev = stack.pop();
            warmerTemp[prev] = i - prev;
        }
        stack.push(i);
    }
    return warmerTemp;
};