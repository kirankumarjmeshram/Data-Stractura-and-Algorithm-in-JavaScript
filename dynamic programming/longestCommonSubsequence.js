console.log(similarText("AEDFHR","ABCDGH",6,6))//3

function similarText(arr1,arr2,n,m){
    var arr = new Array(n+1);
    for(var i=0;i<=n;i++){
        arr[i]=new Array(m+1)
    }

    for(var i=0;i<=n;i++){
        for(var j=0;j<=m;j++){
            if(i==0||j==0){
                arr[i][j]= 0;
            }else if(arr1[i-1]==arr2[j-1]){
                arr[i][j]=arr[i-1][j-1]+1;
            }else{
                arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1]);
            }

        }
    }

    return arr[n][m]
    
}