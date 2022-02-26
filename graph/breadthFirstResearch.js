const graph ={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

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
console.log(bfs({
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
},'a')); //[ 'a', 'c', 'b', 'e', 'd', 'f' ]