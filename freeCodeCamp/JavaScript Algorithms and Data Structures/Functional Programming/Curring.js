function add(x) {
    // Only change code below this line
    return function(y){
      return function(z){
        return x+y+z
      }
    }
  
    // Only change code above this line
  }
  
  console.log(add(10)(20)(30));//60


//   function unCurried(x, y) {
//     return x + y;
//   }
  
//   function curried(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
  
//   const curried = x => y => x + y
  
//   curried(1)(2)//3