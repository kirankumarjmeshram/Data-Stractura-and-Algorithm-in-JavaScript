const graph ={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const dfs=(graph,source)=>{
    const ans =[];
    ans.push(source)
    console.log(source)
   for(let el of graph[source]){
        dfs(graph,el)
    }
    
    return ans;
}
dfs({
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
},'a'); //[ 'a', 'b', 'd', 'f', 'c', 'e' ]