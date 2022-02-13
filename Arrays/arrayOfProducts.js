//https://www.algoexpert.io/questions/Array%20Of%20Products
function arrayOfProducts(array) {
    // Write your code here.
      var n = array.length;
      var leftProd =new Array(n);
      var rightProd = new Array(n);
      leftProd[0]=1;
      rightProd[n-1]=1;
      
      for(var i=1;i<n;i++){
          leftProd[i]=leftProd[i-1]*array[i-1];
      }
      
      for(var j=n-2;j>=0;j--){
          rightProd[j]=rightProd[j+1]*array[j+1];
      }
      
      var ans=[];
      
      for(var k=0;k<n;k++){
          ans.push(rightProd[k]*leftProd[k]);
      }
      
      return ans;
      
  }
  console.log(arrayOfProducts([5,1,4,2]))//[ 8, 40, 10, 20 ]

  
