function num(x){
    if(isNaN(x)){
        return "Not a Number"
    }
    return x*100;
}

console.log(num(12))//1200
console.log(num('1a2'))//Not a Number
console.log(num('0.0314E+2'))//314
