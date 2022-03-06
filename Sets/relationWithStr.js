let text = 'India'

const mySet = new Set(text)  // Set(5) {'I', 'n', 'd', 'i', 'a'}
mySet.size  // 5

//case sensitive & duplicate omission
var a =new Set("Firefox") 
var b=new Set("firefox")  

//f and F are different
console.log(a) // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
console.log(b)// Set(6) { "f", "i", "r", "e", "o", "x" }