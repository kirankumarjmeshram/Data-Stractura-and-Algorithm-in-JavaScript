function signalsCapacity(n, arr){
    let ans = [1];
    let stack =[0];
    for(let i=1;i<n;i++){
       while(stack.length !==0 && arr[stack[stack.length-1]]<=arr[i]){
           stack.pop();
       }
       ans[i] = stack.length === 0? i+1 : i - stack[stack.length-1];
       stack.push(i);
    }
    return ans.join(" ");
}