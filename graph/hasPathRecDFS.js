const graph ={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:["i"],
    k:[],

}

const hasPath = (graph,src,dst)=>{
    if(src===dst) return "has path"

    for(let el of graph[src]){
       if(hasPath(graph,el,dst)==="has path") {
           return " has Path"
       }
    }
    return "has no path"
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

},"j","h"))// has no path