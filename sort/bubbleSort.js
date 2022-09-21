function bubbleSort(array) {
   
    for(var i=0;i<array.length;i++){
      for(var j=0;j<array.length-i;j++){
        if(array[j]>array[j+1]){
          var tempt;
          tempt=array[j];
          array[j]=array[j+1];
          array[j+1]= tempt;
  
        }else{
          continue;
        }
      }
    }
  
    console.log(array) ;
    
  }
  array=[4,2,8,1,345,123,43,32,5643,63,123,43,2,55,1,234,92];
  bubbleSort(array)