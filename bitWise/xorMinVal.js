//"https://oj.masaischool.com/contest/3499/problem/6"

function minXorVal(n,arr){
    let minVal = Math.max(...arr);
    
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            minVal = Math.min(minVal,arr[i]^arr[j])
        }
    }
    
    return minVal
}

console.log(minXorVal(4, [0,2,5,7]))//2