function shiftedBinarySearch(array, target) {
    let low = 0;
      let high = array.length-1;
      while(low <= high){
          let mid = Math.floor(low + (high-low)/2);
          if(target === array[mid]){
              return mid;
          }else if(array[low] < array[mid] ){// ie left array is sorted
             if(target < array[mid] && target >= array[low]){
              high = mid-1
             }else{
              low = mid+1
             }
          }else{//right is sorted
              if(target > array[mid] && target <= array[high]){
                  low = mid+1;
              }else{
                  high= mid -1;
              }
          }
      }
      return -1
  }