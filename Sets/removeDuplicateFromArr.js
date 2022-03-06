const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

var a = new Set(numbers)
console.log(a)//Set(7) { 2, 3, 4, 5, 6, 7, 32 }
console.log(a.size)//7
console.log(Math.max(...a))//32
