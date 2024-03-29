// [1,100,1,1,1,100,1,1,100,1]

// [6,105,5,5,4,103,3,2,100,1]
var minCostClimbingStairs = function(cost) {
    for (let i = cost.length - 3; i >= 0; i--) {
          cost[i] += Math.min(cost[i + 1], cost[i + 2]);
      }
      return Math.min(cost[0], cost[1]);
  };
  // [1,100,2,3,3,103,4,5,105,6]
  var minCostClimbingStairs2 = function(cost) {
      for (let i = 0; i < cost.length - 2; i++) {
          cost[i + 2] += Math.min(cost[i], cost[i + 1]);
      }
      return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
  };

  function minCostClimbingStairs3(cost) {
    let n = cost.length;
    let table = new Array(n).fill(0)
    table[0] = cost[0];
    table[1] = cost[1];
    for(let i=2;i<n;i++){
        table[i] = cost[i]+Math.min(table[i-1], table[i-2])
    }
    console.log(Math.min(table[n-1], table[n-2]))
  }

  function minCostClimbingStairs3(cost) {
    let n = cost.length;
    if(n<=1) return cost[n]
  }

  minCostClimbingStairs3([10, 15, 20])
  minCostClimbingStairs3([10, 15, 20, 7, 13, 9, 8, 12, 6, 11, 14, 18, 5, 3, 17, 4, 19]);
  