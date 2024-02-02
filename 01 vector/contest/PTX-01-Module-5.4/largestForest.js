function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let forest = [];
    for(let i=1;i<=n;i++){
        forest.push(input[i].split(""));
    }
    
    console.log(maximumIsland(forest));
  }
  const maximumIsland = (grid) => {
    const visited = new Set();
    
    let maxSize = 0;
    for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[0].length; c += 1) {
        const size = exploreSize(grid, r, c, visited);
        if (size > maxSize) {
          maxSize = size;
        }
      }
    }
    
    return maxSize;
  };
  
  const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;
    
    if (grid[r][c] === 'W') return 0;
    
    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);
  
    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);
    return size;
  };