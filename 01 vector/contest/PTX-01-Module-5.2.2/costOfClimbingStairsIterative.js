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
  