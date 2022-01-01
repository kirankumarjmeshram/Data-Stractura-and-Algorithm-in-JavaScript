
//https://www.algoexpert.io/questions/Class%20Photos
function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      var arr1 = redShirtHeights.sort((a,b)=>b-a);
      var arr2 = blueShirtHeights.sort((a,b)=>b-a);
      //var count=0;
      var firstRowClr = arr1[0]<arr2[0] ?	"red":"blue";
  
  //console.log(firstRowClr)
      for(var i=0;i<arr1.length;i++){
          if(firstRowClr==="red"){
              if(arr1[i]>=arr2[i]) return false;
          }else if(arr1[i]<=arr2[i]) return false;
      }
      return true
  }

redShirtHeights=[5,8,1,3,4];
blueShirtHeights=[6,9,2,4,5]
  console.log(classPhotos(redShirtHeights, blueShirtHeights))