const generateAllPermutations = str => {
    if (str.length <= 2){
         if(str.length===2){
            return [str, str[1] + str[0]]
        }else{
            return [str]
        }
        
    }
     
     
     return str.split('').reduce((acc, letter, i) =>
          acc.concat(generateAllPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  console.log(generateAllPermutations('abc'));
  //output = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  //console.log(generateAllPermutations([1,2,3]));