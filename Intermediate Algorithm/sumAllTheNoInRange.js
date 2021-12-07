
//Sum All Numbers in a Range
function sumAll(arr) {
    var sum =0; 
    var start = Math.min(...arr);
    var end = Math.max(...arr);
  
    for(var i=start;i<=end;i++){
      sum +=i;
  
    }
    return sum;
  }
  
  sumAll([1, 4]);//10