function binarySearch(array, target) {
    // Write your code here.
          return bSearch(array,0,array.length-1,target)
  }
  
  function bSearch(array,left,right,target){
      if(left>right)
          return -1;
          const mid = Math.floor((left+right)/2);
      if(array[mid]===target){
          return mid;
      }if(array[mid]>target){
          return bSearch(array,left,mid-1,target)
      }else{
          return bSearch(array,mid+1,right,target)
      }
      
  }
  