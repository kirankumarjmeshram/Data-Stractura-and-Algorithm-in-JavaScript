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

