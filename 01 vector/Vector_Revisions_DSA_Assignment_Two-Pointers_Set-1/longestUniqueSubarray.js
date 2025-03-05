// Function to find the length of the longest unique subarray
function longestUniqueSubarray(gifts, n) {
    // write code here
      let giftSet = new Set();
      let left = 0;
      let maxLen = 0;
      for(let right =0; right<n;right++) {
        while(giftSet.has(gifts[right])){
          giftSet.delete(gifts[left]);
          left++;
        }
        giftSet.add(gifts[right]);
        maxLen = Math.max(maxLen, right-left+1)
      }
      return console.log(maxLen);
    }  