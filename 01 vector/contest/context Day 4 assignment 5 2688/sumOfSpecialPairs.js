function sumOfSpecialPairs(N,A){
    let diff = 0;
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            if(isPrime(j-i) ){
                currDiff=Math.abs(A[j]-A[i]);
                diff = diff + currDiff;
                // console.log(currDiff, i, j);
            }
        }
    }
    return console.log(diff);
    function isPrime(n){
        if (n === 1) return false;
        let count=0;
        let a = Math.floor(Math.sqrt(n));
        for(let i=2;i<=a;i++){
            if(n%i===0){
                count++;
            }
        }
        if(count>0){
            return false;
        }else{
            return true;
        }
    }
}