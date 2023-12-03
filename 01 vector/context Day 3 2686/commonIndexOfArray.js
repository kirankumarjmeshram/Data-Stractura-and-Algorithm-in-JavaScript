function commonIndexOfArray(n1,n2, arr1, arr2){
    arr1 = arr1.sort((a,b)=>a-b);
    arr2 = arr2.sort((a,b)=>a-b);
    let l1 = 0;
    let l2 = 0;
    let ans = [];
    while(l1<n1 && l2<n2){
        if(arr1[l1] === arr2[l2]){
            ans.push(arr1[l1]);
            l1++;
            l2++;
        }else if(arr1[l1]>arr2[l2]){
            l2++;
        }else{
            l1++;
        }
    }
     return ans.length>0? ans.join(" "):-1;
     
}