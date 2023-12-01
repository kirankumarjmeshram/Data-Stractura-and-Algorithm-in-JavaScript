function productOfArr(n, arr){
    let newArr = [];
    for(let i=0;i<n;i++){
        let a = 1;
        for(let j=0;j<n;j++){
            if(i!==j){
                a = a*arr[j]
            }
        }
        newArr.push(a)
    }
    return newArr.join(" ")
}