const canFinish = function(numCourses, prerequisites) {
    const adjacencyList = createAdjacencyList(numCourses, prerequisites);
    let visited = new Map();
    let backEdges = new Map();
    function createAdjacencyList() {
        const result = {};
        for(let i = 0; i < prerequisites.length; i++) {
            let [course, prerequisite] = prerequisites[i];
            if(course in result) result[course].push(prerequisite);
            else result[course] = [prerequisite];
        }
        return result;
    }
    function isCyclicRecursive(currentNode) {
        visited.set(currentNode, true);
        backEdges.set(currentNode, true);
        let neighbours = adjacencyList[currentNode];
        if(neighbours) {
            for(const node of neighbours) {
                if(!visited.has(node)) {
                    if(isCyclicRecursive(node)) return true;
                } else if (backEdges.has(node)) return true;  
            }
        }
        
        backEdges.delete(currentNode);
        
        return false;
    }
    for(let node in adjacencyList) {        
        if(!visited.has(node)) {
            if(isCyclicRecursive(node)) return false;                            
        }
    }
  
    return true;
};