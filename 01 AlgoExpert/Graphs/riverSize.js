function riverSizes(matrix) {
    // Write your code here.
    const sizes = [];
    const visited = matrix.map(row => row.map(value => false));
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if(visited[i][j]) continue;
        traverseNode(i, j, matrix, visited, sizes);
      }
    }
    return sizes;
  }
  function traverseNode(i, j, matrix, visited, sizes) {
    let currentRiverSize = 0;
    const nodesToExplore = [[i, j]];
    while (nodesToExplore.length){
      const currentNode = nodesToExplore.pop();
      i = currentNode[0];
      j = currentNode[1];
      if(visited[i][j]) continue;
      visited[i][j] = true;
      if(matrix[i][j] == 0) continue;
      currentRiverSize++;
      const unvisitedNeighbours = getUnvisitedNeighbours(i, j, matrix, visited);
      for(const neighbour of unvisitedNeighbours){
        nodesToExplore.push(neighbour);
      }
    }
    if(currentRiverSize > 0) sizes.push(currentRiverSize)
  }
  
  function getUnvisitedNeighbours(i, j, matrix, visited) {
    const unvisitedNeighbours = [];
    if (i > 0 && !visited[i-1][j]) {
      unvisitedNeighbours.push([i-1, j]);
    }if(i < matrix.length -1 && !visited[i+1][j]){
      unvisitedNeighbours.push([i+1, j]);
    }if(j > 0 && !visited[i][j-1]){
      unvisitedNeighbours.push([i, j-1]);
    }if(j < matrix[0].length - 1 && !visited[i][j+1]){
      unvisitedNeighbours.push([i, j+1]);
    }
    return unvisitedNeighbours;
  }