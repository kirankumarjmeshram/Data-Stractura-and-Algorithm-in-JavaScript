
function countIsland(n,m,grid){
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j]==="1"){
                explore(grid,i,j,n,m)
                count++;
            }
        }
    }
    return count;
}

function explore(grid,i,j,n,m){
if(i<0 || i>=n || j<0 || j>=m || grid[i][j]!='1') return;

grid[i][j]='2';
explore(grid,i-1,j,n,m)
explore(grid,i+1,j,n,m)
explore(grid,i,j-1,n,m)
explore(grid,i,j+1,n,m)
}

console.log(countIsland(3,5,[
    [ '1', '1', '1', '1', '0' ],
    [ '1', '1', '0', '1', '0' ],
    [ '1', '1', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0' ]
  ]));//1

console.log(countIsland(3,3, [ [ '1', '1', '1' ], [ '0', '0', '0' ], [ '1', '1', '1' ] ]));//2