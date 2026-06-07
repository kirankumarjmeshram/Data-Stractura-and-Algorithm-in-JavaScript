//dynamic solution here //dynamic programming\memorization\fib.js
function fib(n){
    if(n<=0){
        return 0;
    }if(n==1||n==2){
        return 1
    }else{
        return fib(n-1)+fib(n-2)
    }
}

function fib2(n){
    if(n<=0){
        return 0;
    }if(n==1||n==2){
        return 1
    }
    let a = 0;
    let b = 1
    for(let i=2;i<=n;i++){
        let temp = a+b;
        a = b;
        b= temp
    }
    return b

}

console.log(fib(10))//8
// console.log(fib2(50,{}))//12586269025