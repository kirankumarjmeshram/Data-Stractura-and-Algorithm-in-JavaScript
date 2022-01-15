const alphabet = ["A","B","C","D","E","F"];

const numbers =[1,2,3,4,5,6,7]

let [a,b,c] = alphabet;
let [x,,y] = alphabet;
let [s,,d,...v] = alphabet;

let [e,n]=numbers;
let [h,j,...k] = numbers
console.log(a,b,c)//A B C
console.log(x,y)//A C
console.log(v)//[ 'D', 'E', 'F' ]

console.log(e,n)//1 2
console.log(k)//[ 3, 4, 5, 6, 7 ]

