const graph ={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const dfs=(graph,source)=>{
    const stack =[source];
    let ans =[];
    while(stack.length>0){
        let current = stack.pop();
        ans.push(current);
        for(let el of graph[current]){
            stack.push(el)
        }
    }
    return ans;
}
console.log(dfs({
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
},'a')); //[ 'a', 'b', 'd', 'f', 'c', 'e' ]