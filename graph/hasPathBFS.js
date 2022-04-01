const graph ={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:["i"],
    k:[],           

}

const hasPath = (graph,src,dst)=>{
    const queue=[src]
    while(queue.length>0){
        const current = queue.shift();
        if(current===dst) return "Has Path";
        
        for(let neighbour of graph[current]){
            queue.push(neighbour)
        }

    }
    return "Has no Path"
}

console.log(hasPath({
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:["i"],
    k:[],

},"j","i"))// has Path
console.log(hasPath({
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:["i"],
    k:[],

},"k","h"))// has no path