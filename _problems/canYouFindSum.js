"https://oj.masaischool.com/contest/3382/problem/04"

/*
Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :

The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1
*/
function findSum(n,arr){
    var arrX=new Array(n).fill(-1);
    var arrY=new Array(n).fill(-1);
    var ans=[];
    
    for(var i=0;i<n;i++){
        for(var j=i-1;j>=0;j--){
            if(arr[j]>arr[i]){
                arrY[i]=j+1;
                break
            }
        }
        for(var j=i+1;j<n;j++){
            if(arr[j]>arr[i]){
                arrX[i]=j+1;
                break
            }
        }
        
    }
  for(var i=0;i<n;i++){
      ans[i]=arrX[i]+arrY[i]
  }
  
  return ans.join(" ")
}


console.log(findSum(5,[ 5, 4, 1, 3, 2 ]))//-2 0 6 1 3

/*
Explanation

Values of x for each i: -1,1,2,2,4

Values of y for each i: -1,-1,4,-1,-1

So, x+y for each i: -2,0,6,1,3
*/