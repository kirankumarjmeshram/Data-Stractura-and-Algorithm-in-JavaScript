
function stealAsMuch(w,n,vals,wts){
    let newArr= new Array(n+1);

    for(var i=0;i<=n;i++){
        newArr[i]= new Array(w+1);

        for(var j=0;j<=w;j++){
            if(i==0 || j==0){
                newArr[i][j]=0;
            }else if(wts[i-1]<=j){
                newArr[i][j]== Math.max(vals[i-1]+newArr[i-1][j-wts[i-1]],newArr[i-1][j])
            }else{
                newArr[i][j]=newArr[i-1][j]
            }
        }
    }
    return newArr //[n][w]
}

let vals = [ 60, 100, 120 ];
    let wts = [ 10, 20, 30 ];
    let w = 50;
    let n = vals.length;
    console.log(stealAsMuch(w,n,vals,wts))