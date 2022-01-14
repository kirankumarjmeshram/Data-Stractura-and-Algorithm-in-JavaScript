    function similarText(arr1,arr2,n,m){
       
        if(n===0||m===0){
            return 0
        }if(arr1[m-1]==arr2[n-1]){
            return 1+similarText(arr1,arr2,n-1,m-1);
        }else{
            return Math.max(similarText(arr1,arr2,n-1,m),similarText(arr1,arr2,n,m-1))
        }
    }

    console.log(similarText("AEDFHR","ABCDGH",6,6))//3

