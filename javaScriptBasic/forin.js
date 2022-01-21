const obj =["q","w","e","r","t","y"];

const obj2 ={a:1,b:2,c:3}

for (const el in obj){
    console.log(el)//1 2 3 4 5 6
}
for(const ele in obj2){
    console.log(ele)//a b c
}
// for (const el of obj){
//     console.log(el)
// }