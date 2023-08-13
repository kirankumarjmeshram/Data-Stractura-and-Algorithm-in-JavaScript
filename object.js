// var obj={
//     a:6,
//     b:3,
//     c:9
// }

// console.log(Object.values(obj))
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// for (const i of Object.values(obj)){
//     var max=0;
//     if(i>max){
//         max=i;
//     }
// }

// for (const [key,value] of Object.entries(obj)){
//    console.log(`${key}=>${value}`)
//     }

// console.log(max)
// [ 6, 3, 9 ]
// [ 'a', 'b', 'c' ]
// [ [ 'a', 6 ], [ 'b', 3 ], [ 'c', 9 ] ]
// a=6
// b=3
// c=9
// 9


// let arr = ["hello","My","Name","is","kiran"];

// let arr2 = arr.slice(1);
// let arr3 = arr.splice(1,3)

// console.log(arr2);
// console.log(arr);

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// Expected output: "foo"

console.log(map1.get('baz'));
// Expected output: undefined
console.log(map1.bar);

console.log(map1)
