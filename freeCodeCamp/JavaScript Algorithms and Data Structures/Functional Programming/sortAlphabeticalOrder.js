function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
console.log(ascendingOrder([1, 5, 2, 3, 4]));//[ 1, 2, 3, 4, 5 ]

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  
  console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));// [ 'z', 's', 'l', 'h', 'b' ]

  function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort()
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));//[ 'a', 'a', 'c', 'd', 'g', 'z' ]