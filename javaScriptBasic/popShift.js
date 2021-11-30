function popShift(arr) {
    let popped = arr.pop(); // remove last item
    let shifted = arr.shift(); // remove first item
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));//return [is', 'not']