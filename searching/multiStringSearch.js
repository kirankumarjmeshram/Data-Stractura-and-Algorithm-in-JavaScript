function multiStringSearch(bigString, smallStrings) {
    // Write your code here.
      let ans=[];
      for(let i=0;i<smallStrings.length;i++){
      ans.push(bigString.includes(smallStrings[i]))		 
      }
  return ans
  }
  console.log(multiStringSearch("this is a big string",["this", "yo", "is", "a", "bigger", "string", "kappa"]))
//   [
//     true,  false,
//     true,  true,
//     false, true,
//     false
//   ]