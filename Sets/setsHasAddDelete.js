//Using the Set object
const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

//Iterating Sets
// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.keys()) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.values()) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
for (let [key, value] of mySet1.entries()) console.log(key)

// convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet1) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
// mySet1.add(document.body)
// mySet1.has(document.querySelector('body')) // true

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4])
mySet2.size                    // 4
//[...mySet2]                    // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))

// difference can be simulated via
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))

// Iterate set entries with forEach()
mySet2.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// 4