function sumAndMultiply(a,b){
    return [a+b,a*b]
}

const [sum,mltiple,division="No division"] = sumAndMultiply(2,3);

console.log(sum,mltiple,division)//5 6 No division