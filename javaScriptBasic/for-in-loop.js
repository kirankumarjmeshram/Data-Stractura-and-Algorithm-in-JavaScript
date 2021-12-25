let obj =[1,2,3,4,5,6,5,4,3,2]
let box =[];
let ele=[]
for (let el in obj){
   box.push(obj[el])
    ele.push(el)
}
console.log(box.map(Number))//[1, 2, 3, 4, 5, 6, 5, 4, 3, 2 ]
console.log(ele.map(Number))//[ 0,1, 2, 3, 4,5, 6, 7, 8, 9];
  