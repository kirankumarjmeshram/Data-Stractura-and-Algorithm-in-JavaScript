function binarRepresentation(N) {
    let stack = [];
    while(N > 0){
      stack.push(N%2);
      N = Math.floor(N/2)
    }
    console.log(stack.reverse().join(""))
  }