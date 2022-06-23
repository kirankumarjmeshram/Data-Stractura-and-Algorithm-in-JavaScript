function getPermutations(array) {
    // Write your code here.
      var permutations =[];
      permutationsHelper(0,array,permutations);
      return permutations
      
  }
  
  function permutationsHelper(i,array,permutations){
      if(i===array.length-1){
       
          permutations.push(array.slice());

      }else{
          for(var j=i;j<array.length;j++){
              swap(i,j,array);
              permutationsHelper(i+1,array,permutations);
              swap(i,j,array)
          }
      }
  }
   function swap(i,j,array){
      var temp = array[i];
      array[i]=array[j];
      array[j]=temp;
  }
  
console.log(getPermutations(['a','b','c']));
getPermutations(['a','b','c'])