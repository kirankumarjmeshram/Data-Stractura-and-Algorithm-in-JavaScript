function detectPalindrome(num){
    num = num.toString()
    let n = num.length
    for(let i=0;i<Math.floor(n/2);i++){
        if(num[i]!==num[n-1-i]){
            return console.log("No")
        }
    }
    return console.log("Yes")
}

function detectPalindrome2(num){
    let num1 = num;
    let newNum = 0;
    while(num>0){
        
        newNum = newNum*10;
        newNum+=num%10;
        num = Math.floor(num/10)
    }
    // console.log(newNum,num1)
    if(newNum === num1){
        console.log("Yes")
    }else{
        console.log("No")
    }
}