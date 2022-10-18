function searchForRange(array, target) {
    // Write your code here.
    let low = 0;
    let high = array.length-1;
    let lowerIdx = getLowerIdx(array, target, low, high);
    let higherIdx = getHigherIdx(array, target, low, high);
    return [lowerIdx, higherIdx];
  }
  function getLowerIdx(array, target, low, high) {
    let result = -1;
     while (low<=high) {
       let mid = Math.floor(low+(high-low)/2) ;
       if(target < array[mid]){
         high = mid-1;
       }else if(target > array[mid]){
         low = mid+1;
       }else{
         result = mid;
         high = mid-1;
       }
    }
    return result;
  }
  function getHigherIdx(array, target, low, high) {
    let result = -1;
     while (low<=high) {
       let mid = Math.floor(low+(high-low)/2) ;
       if(target < array[mid]){
         high = mid-1;
       }else if(target > array[mid]){
         low = mid+1;
       }else{
         result = mid;
         low = mid+1;
       }
    }
    return result;
  }