

function recProd(n,arr){
    // let prod =1;
    // for(let i=0;i<n;i++){
    //     prod*=arr[i]
    // }
    // return prod
    if(n==0){
        return arr[n]
    }else{
        return arr[n]*recProd(n-1,arr)
    }
}

console.log(recProd(4 ,[ 3, 5, 2, 9, 4 ]))//1080