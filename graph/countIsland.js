// Given a matrix of 1s and 0s which denotes planet chinchapokili
// where 1s denote land area and 0s denote water, count the number
// of islands on planet chinchapokli.

const grid = [
    [ '1', '1', '1', '1', '0' ],
    [ '1', '1', '0', '1', '0' ],
    [ '1', '1', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0' ]
  ]

// const grid = [ [ '1', '1', '1' ], [ '0', '0', '0' ], [ '1', '1', '1' ] ]

function countIsland(n,m,grid){
  const visited = new Set();
  let count =0;
  for(var i=0;i<n;i++){
    for(var j=0;i<m;j++){
      if(explore(grid,i,j,visited)===true){
        count++
      }
    }
  }
}

function explore(grid,i,j,visited){
  const rouBounds = i>=0 && i<grid.length;
  const colBounts =j>=0 && j<grid[0].length;

  if(!rouBounds || !colBounts) return false;

  if(grid[i][j]=="0") return false;

  const pos = i+","+j;
  if(visited.has(pos)) return false;
  visited.add(pos)

  explore(grid,i-1,j,visited)
  explore(grid,i+1,j,visited)
  explore(grid,i,j-1,visited)
  explore(grid,i,j+1,visited)
  return true
}
console.log(countIsland(3,5,grid))