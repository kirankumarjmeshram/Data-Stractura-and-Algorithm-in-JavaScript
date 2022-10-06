function waterArea(heights) {
    // Write your code here.
      let n = heights.length;
      if(n==0){
          return 0
      }
      let maxLeft =0;
      let maxRight=0
      let leftMaxHeights=[];
      let rightMaxHeights=[];
      let minHeights=[];
      for(let i=0;i<n;i++){
          currLeft=heights[i];
          leftMaxHeights[i]=maxLeft;
          if(currLeft>maxLeft){
              maxLeft= currLeft
          }
      }
  
      for(let i=n-1;i>=0;i--){
          currRight=heights[i];
          rightMaxHeights[i]= maxRight;
          if(currRight>maxRight){
              maxRight = currRight
          }
      }
  
      for(let i=0;i<n;i++){
          minHeights[i]=Math.min(leftMaxHeights[i],rightMaxHeights[i])
      }
  
      for(let i=0;i<n;i++){
          if(minHeights[i]>heights[i]){
              minHeights[i]=minHeights[i]-heights[i]
          }else{
              minHeights[i]=0
          }
      }
      return minHeights.reduce((a,b)=>a+b)
  }
  