// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Input 1: n = 3
// Output 1: ["1","2","Fizz"]
// Explanation 1:answer[1] == "1" None of the above conditions are true.answer[2] == "2" None of the above conditions are true.answer[3] == "Fizz" 3 is divisible by 3

// Input 2: n = 5
// Output 2: ["1","2","Fizz","4","Buzz"]

// Constraints:2 <= n <= 1000

function fizzBuzz(n) {
    let ans = [];
    for(let i = 1;i<=n;i++) {
        if(i%3==0 & i%5==0){
            ans.push("FizzBuzz");
        }else if(i%3==0){
            ans.push("Fizz");
        }else if(i%5==0){
            ans.push("Buzz");
        }else{
            ans.push(i);
        }
    }
    return ans;
    
}

console.log(fizzBuzz(15))