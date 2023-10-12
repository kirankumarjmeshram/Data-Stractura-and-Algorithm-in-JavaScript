/**
 * The function must accept an indeterminate number of arguments, also known as a 
 * variadic function. You can access the additional arguments 
 * by adding a rest parameter to the function definition or using the arguments object. 
 */

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const newArr = [];
  
    for (let i=0; i<arr.length; i++){
      let removeElement = false;
      for(let j=0; j< valsToRemove.length;j++){
        if(arr[i] === valsToRemove[j]){
          removeElement = true;
        }
      }
      if(!removeElement){
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));//[ 1, 1 ]

  function destroyer2(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }

  function destroyer3(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }