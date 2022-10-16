function sameBsts(arrayOne, arrayTwo) {
    // Write your code here.
    if (arrayOne.length !== arrayTwo.length) return false;
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
    if (arrayOne[0] !== arrayTwo[0]) return false;
    const leftOne = getSmaller(arrayOne);
    const leftTwo = getSmaller(arrayTwo);
    const rightOne = getLarger(arrayOne);
    const rightTwo = getLarger(arrayTwo);
  
    return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
  }
  function getSmaller(array) {
    const smaller = [];
    for (let i = 1; i < array.length; i++) {
      if(array[i] < array[0]) smaller.push(array[i]);
    }
    return smaller
  }
  function getLarger(array) {
    const larger = [];
    for (let i = 1; i < array.length; i++) {
      if(array[i] >= array[0]) larger.push(array[i]);
    }
    return larger
  }
  