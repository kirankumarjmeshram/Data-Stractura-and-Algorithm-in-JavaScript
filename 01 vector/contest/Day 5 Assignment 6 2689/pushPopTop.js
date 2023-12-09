function pushPopTop(n, arr){
    let stack = [];
    let index = -1;
    
    for(let i = 0; i<n;i++){
        if(arr[i][0] === 1){
            push(arr[i][1]);
        }if(arr[i][0] === 2){
            pop();
        }if(arr[i][0] === 3){
            peek();
        }
    }
    
    function push(el){
        index++;
        stack[index] = el;
    }
    
    function pop(){
        if(index>=0){
            let el = stack[index];
            index--;
        }
        
        
    }
    
    function peek(){
        if(index>=0){
            console.log(stack[index]);
        }else{
            console.log("Empty!");
        }
        
    }
}