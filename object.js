var obj={
    a:6,
    b:3,
    c:9
}

console.log(Object.values(obj))
console.log(Object.keys(obj));
console.log(Object.entries(obj));

for (const i of Object.values(obj)){
    var max=0;
    if(i>max){
        max=i;
    }
}

console.log(max)