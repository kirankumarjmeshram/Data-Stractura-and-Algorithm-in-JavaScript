function nSearch(n,m,arr,q){
    for(var i=0;i<m;i++){
        let count=0
        if(q[i][0]==0){
            for(let j=0;j<n;j++){
                if(arr[j]>=q[i][1]){
                    count++
                }
            }
        }
        if(q[i][0]==1){
            for(let j=0;j<n;j++){
                if(arr[j]>q[i][1]){
                    count++
                }
            }
        }
        console.log(count);
        count=0
    }
}


nSearch(4 ,[ 1, 2, 3, 4 ] ,[ [ 0, 5 ], [ 1, 3 ], [ 0, 3 ] ])