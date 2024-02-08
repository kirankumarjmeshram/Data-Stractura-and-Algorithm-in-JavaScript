function listAndQueue(n, arr){
    let queue = [];
    for(let i=0;i<n;i++){
        // console.log(arr[i])
        if(arr[i][0] === 'E'){
            queue.push(arr[i][1]);
        }else if(arr[i][0] ==='D'){
            if(queue.length>0){
                console.log(queue.shift());
            }else{
                console.log("Empty");
            }
            
        }
    }
}