function gridTraveler(n,m){
    let table = new Array(n+1).fill().map(()=> new Array(m+1).fill(0));
    table[1][1] = 1;
    for(let i=0;i<=n;i++){
        for(let j=0;j<=m;j++){
            //write logic here
            if(i+1<=n) table[i+1][j] += table[i][j];
            if(j+1<=m) table[i][j+1] += table[i][j];
        }
    } 
    console.log(table[n][m])
}

gridTraveler(4,4)//20