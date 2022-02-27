const edges =[
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

const undirectedPath=(edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
    return hasPath(graph,nodeA, nodeB, new Set())
}

const buildGraph = (edges)=>{
    const graph ={};

    for(let edge of edges){
        let [a,b]=edge
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph
}

const hasPath=(graph,src,dst,visited)=>{
    if(src===dst) return true;
    if(visited.has(src)) return false;
    visited.add(src)
    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dst,visited)===true){
            return true
        }
    }
    return false
}

console.log(undirectedPath([
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
],'o','n'))//true

console.log(undirectedPath([
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
],'o','k'))//false