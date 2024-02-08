function newYearCeleb(n, arr){
    let stack = [];
    let queue = [];
    for(let i=0;i<n;i++){
        if(arr[i][0] === 1){
            queue.push(arr[i][1]);
        }else if(arr[i][0] === 2){
            stack.push(arr[i][1]);
        }else if(arr[i][0] === 3){
            if(queue.length >0){
                console.log(queue[0]);
            }else{
                console.log(-1);
            }
        }else if(arr[i][0] === 4){
            if(stack.length >0){
                console.log(stack[stack.length-1]);
            }else{
                console.log(-1);
            }
        }else if(arr[i][0] === 5){
            if(queue.length >0){
                let q = queue.shift();
                stack.push(q);
            }else{
                console.log(-1);
            }
            
        }
    }
}