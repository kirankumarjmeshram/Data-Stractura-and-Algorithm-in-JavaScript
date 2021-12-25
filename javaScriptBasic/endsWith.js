function confirmEnding(str, target) {
    return  str.endsWith(target);
     
   }
   console.log(confirmEnding("Bastian", "n"))
//true

//without using endWith()// with slice method
function confirmEnding(str, target) {
    return str.slice(str.length-target.length)===target
      
    }
    console.log(confirmEnding("Bastian", "n"))
    