function financialProblem(n,arr){
    let ans = [1];
    for(let i = 1;i<n;i++){
        let count = 1;
        let j = i-1;
        while(arr[i]>arr[j]){
            j--;
            count++;
        }
        ans[i] = count;

    }
    return ans.join(" ");
}