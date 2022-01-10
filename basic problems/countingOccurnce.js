function count(arr){
        
    var count=1;
    for(var i=0;i<arr.length;i++){
    
    if(arr[i]==arr[i+1]){
        
        count++;
    }if(arr[i]!==arr[i+1]){
       
        console.log(arr[i]+" "+count);
        count=1;
    }
    }
    
}
count("aabbbcccd")