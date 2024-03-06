function combinationSum(n,target,arr){
    let ans = [];
    function dfs(i,curr,total){
        if(total === target){
            ans.push([...curr]);
            // console.log(curr.join(" "));
            return;
        }
        if(i>= arr.length || total > target) return;
        curr.push(arr[i]);
        dfs(i,curr,total+arr[i]);
        curr.pop();
        dfs(i+1,curr,total);
    }
    dfs(0,[],0);
    ans = ans.sort((a,b)=>b.length - a.length);
    let a = ans.length;
    console.log(a);
    for(let i=0;i<a;i++){
        console.log(ans[i].sort().join(" "));
    }
}