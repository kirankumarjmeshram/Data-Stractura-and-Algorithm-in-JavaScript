// A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same 
// element. Given a non-empty matrix arr, write a function that
//  returns true if and only if it is a Toeplitz matrix. The matrix can be any
//   dimensions, not necessarily square.


function isToeplitz(arr) {
  var n=arr.length;
  var m=arr[0].length;
   for(var i=1;i<n;i++){
     for(var j=1;j<m;j++){
       if(arr[i-1][j-1]!=arr[i][j]) return false
     }
   }
return true;
}

console.log(isToeplitz([[1,2,3,4],
                        [5,1,2,3],
                        [6,5,1,2]])) //true