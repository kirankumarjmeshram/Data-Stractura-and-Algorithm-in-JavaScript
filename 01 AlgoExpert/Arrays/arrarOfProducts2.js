//solution 2

function arrayOfProducts(array) {
    // Write your code here.
    const ans = [];
    for(let i =0; i< array.length;i++){
      let runningProduct = 1;
      for(let j = 0; j < array.length;j++){
        if(i!==j){
              runningProduct *= array[j]
        }
        ans[i] = runningProduct
      }
    }
    return ans;
  }

  console.log(arrayOfProducts([
    1,  2,  3,  4,  5
 ]))