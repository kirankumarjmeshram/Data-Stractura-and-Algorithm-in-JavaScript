const graph={
    3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
}

const largestComponents =(graph)=>{
    const visited = new Set();
    let longestSize=0;
    for(let node in graph){
        const size=exploreSize(graph,node,visited)
        if(size>longestSize){
            size=longestSize;
        }
    }
    return longestSize;
    
}

const exploreSize(graph,current,visited)=>{
    
}