//"https://oj.masaischool.com/contest/3499/problem/6"

function minXorVal(n,arr){
    arr = arr.sort((a,b)=>a-b);
    let minVal = Math.max(...arr);

    for(let i=0;i<n;i++){
        minVal= Math.min(minVal,arr[i]^arr[i+1])
    }
    
    
    
    return minVal
}

console.log(minXorVal(4, [0,2,5,7]))//2