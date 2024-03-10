//recursive solution here recursion\fib.js

const fib =(n,memo={})=>{
    if(n in memo){
        return memo[n];
    }if(n===0){
        return 0
    }if(n==1 || n===2){
        return 1
    }else{
        memo[n] = fib(n-1,memo)+fib(n-2,memo)
        console.log(memo)
        
    }
    return memo[n];
}

console.log(fib(6,{}));//8
// console.log(fib(10,{}));//55
// console.log(fib(50,{}))
// console.log(fib(100,{}));//354224848179262000000