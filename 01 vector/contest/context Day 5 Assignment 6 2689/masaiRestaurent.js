function masaiRestaurant(n, arr){
    let stack = [];
    let index = -1;
    
    for(let i = 0; i<n;i++){
        if(arr[i][0] === 2){
            push(arr[i][1]);
        }if(arr[i][0] === 1){
            pop();
        }
    }
    
    function push(el){
        index++;
        stack[index] = el;
    }
    
    function pop(){
        if(index>=0){
            let el = stack[index];
            console.log(el);
            index--;
        }else{
            console.log("No Food");
        }
    }
    
}