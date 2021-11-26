//Array.prototype.reduce()
// The reduce() method executes a user-supplied “reducer” callback function on 
// each element of the array, in order, passing in the return value from the 
// calculation on the preceding element. The final result of running the reducer 
// across all elements of the array is a single value.


const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
//  output: 15

/*The first time that the callback is run 
there is no "return value of the previous 
calculation". If supplied, an initial value may 
be used in its place. Otherwise array element 0 
is used as the initial value and iteration starts from the next 
element (index 1 instead of index 0). */



/*// Arrow function
reduce((previousValue, currentValue) => { ... } )
reduce((previousValue, currentValue, currentIndex) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { ... })
reduce(function(previousValue, currentValue, currentIndex) { ... })
reduce(function(previousValue, currentValue, currentIndex, array) { ... })
reduce(function(previousValue, currentValue, currentIndex, array) { ... }, initialValue) */