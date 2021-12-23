bSearch(0,9,11,[2,5,7,9,10,11,15,18,20,22]);
console.log(numOccr(10,11,[2,5,7,9,10,11,15,18,20,22]))//1




function bSearch(left,right,k,arr){
 let mid = Math.floor((left+right)/2);
 
 if(left>right){
     return -1;
 }if(arr[mid]===k){
     return mid;
 } if(arr[mid]<k){
     return bSearch(mid+1,right,k,arr);
 }else{
     return bSearch(left,mid-1,k,arr)
 }
 
}

function numOccr(n,k,arr){
 
let numid = bSearch(0,n-1,k,arr);
 
 if(numid == -1){
     return 0;
 }
 
  
 var left = numid-1;
 var right = numid+1;
 var count = 1;
 
 
 while(left>=0 && arr[left]==k){
     count++;
     left--;
 }
 while(right<n && arr[right]==k){
     count++;
     right++
 }
 
 return count;
}
