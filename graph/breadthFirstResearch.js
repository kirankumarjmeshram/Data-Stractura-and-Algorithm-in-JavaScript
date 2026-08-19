//BFS of Adjacency Matrix
// https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1
let AdjacencyMatrix = [[2, 3, 1], [0], [0, 4], [0], [2]]
function bfsAdj(adj) {
        // code here
    let ans = [0];
    let visited = new Set();
    visited.add(0)
    let queue = [0];
    while(queue.length){
        let node = queue.shift();
        for(let neighbour of adj[node]) {
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                ans.push(neighbour);
                queue.push(neighbour);
            }
        }
    }
        return ans;
}

console.log("Output: ", bfsAdj(AdjacencyMatrix))

//Output: [0, 2, 3, 1, 4]

//Adjacency List
const graph ={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};
//not for cyclic graph
const bfs=(graph,source)=>{
    const queue =[source];
    let ans =[];
    while(queue.length>0){
        let current = queue.shift()
        ans.push(current);
        for(let el of graph[current]){
            queue.push(el)
        }
    }
    return ans;
}
console.log(bfs(graph,'a')); //[ 'a', 'c', 'b', 'e', 'd', 'f' ]

