function cycleInGraph(edges) {
    // Write your code here.
    //desendent node, parent node, back edge
    const numberOfNodes = edges.length;
    const visited = new Array(numberOfNodes).fill(false);
    const curentlyInStack = new Array(numberOfNodes).fill(false);
  
  
    for (let node = 0; node < numberOfNodes; node++) {
      if(visited[node]) continue;
      const containsCycle = isNodeInCycle(node,edges,visited, curentlyInStack);
      if(containsCycle) return true
    }
    
    return false;
  }
  function isNodeInCycle(node, edge, visited, currentlyInStack) {
    visited[node] = true;
    currentlyInStack[node] = true;
  
    const neighbours = edge[node];
    for (let neighbour of neighbours) {
      if (!visited[neighbour]) {
        const cointainsCycle = isNodeInCycle(neighbour, edge, visited, currentlyInStack);
        if(cointainsCycle) return true;
        }else if (currentlyInStack[neighbour]) {
          return true
        }
    }
    currentlyInStack[node] = false;
    return false;
  }