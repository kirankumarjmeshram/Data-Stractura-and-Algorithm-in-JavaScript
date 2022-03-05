const users = [
    {name:'Luis', age:25},
    {name:'Jose', age:20},
    {name:'Aaron', age:40}
];
// const compareFuc = (item1,item2) => {
//   return item1.age - item2.age;
// };
// console.log(users.sort(compareFuc));

console.log(users.sort((a,b)=>a.age-b.age))
// [
//     { name: 'Jose', age: 20 },
//     { name: 'Luis', age: 25 },
//     { name: 'Aaron', age: 40 }
// ]
  