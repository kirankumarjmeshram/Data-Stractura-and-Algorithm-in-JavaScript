function minimumWaitingTime(queries) {
    // Write your code here.
      queries = queries.sort((a,b)=>a-b);
      var ans =0;
      for(var i=0;i<queries.length;i++){
          var n = queries.length-1-i;
          ans = ans +queries[i]*n
      }
    return ans;
  }