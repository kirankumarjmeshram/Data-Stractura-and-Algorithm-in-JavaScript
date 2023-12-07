function pairOfThreeSumZero(n, arr){
    arr = arr.sort((a,b)=> a-b);
    let ans = new Set();
    let count = 0;
    for(let i=0;i<n - 2;i++){
        for(let j=i+1;j<n - 1;j++){
            for(let k = j+1;k<n;k++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    if(!ans.has(arr[i]+" "+arr[j]+" "+arr[k])){
                        ans.add(arr[i]+" "+arr[j]+" "+arr[k]);
                    }
                    
                }
            }
        }
    }
    console.log(ans.size);
    ans.forEach(el=> console.log(el));
}