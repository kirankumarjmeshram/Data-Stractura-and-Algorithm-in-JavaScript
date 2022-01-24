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

console.log(fib(10))//8
console.log(fib(50,{}))//12586269025