function warOfMinions(n,arr){
    let stack = [];
    for(let i=0;i<n;i++){
        if(stack[stack.length-1]===arr[i]){
            stack.pop();
        }else{
            stack.push(arr[i]);
        }
    }
    return stack.length?stack.join(''):-1;
}