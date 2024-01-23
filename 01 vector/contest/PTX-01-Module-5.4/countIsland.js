function countIsland(n,m,island){
    let visited = new Set();
    let count = 0;
    for(let i = 0; i<n;i++){
        for(let j=0;j<m;j++){
            if(explore(i,j,n,m,island,visited)){
                count++;
            }
        }
    }
    return count;
}

function explore(i,j,n,m,island,visited){
    const rowInbound = i<n && i>=0;
    const colInbound = j<m && j>=0;
    if(!rowInbound || colInbound) return false;
    
    if(island[i][j] === '0') return false;
    
    if(visited.has(i+","+j)) return false;
    visited.add(i+","+j);
    explore(i+1,j,n,m,island, visited);
    explore(i-1,j,n,m,island, visited);
    explore(i,j+1,n,m,island, visited);
    explore(i,j-1,n,m,island, visited);
    return true;
}