function findCommonElements(A, B, n) {
    //write code here
    let i=0;
    let j=n-1;
    let count = 0;
    while(i<n && j>=0){
      if(A[i]===B[j]){
        i++;
        j--;
        count++;
      }else if(A[i]>B[j]){
        j--
      }else{
        i++
      }
    }
    return console.log(count)
   }
   