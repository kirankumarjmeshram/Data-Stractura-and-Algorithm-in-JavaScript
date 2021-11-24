//Array.isArray()
//The Array.isArray() method determines whether the passed value is an Array.

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false