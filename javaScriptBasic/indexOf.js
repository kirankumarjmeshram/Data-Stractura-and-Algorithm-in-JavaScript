let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

var a= fruits.indexOf('dates');//-1= element does not exist
var b= fruits.indexOf('oranges');//2
var c= fruits.indexOf('pears');//1

console.log(a,b,c)

function quickCheck(arr, elem) {
    // Only change code below this line
  if(arr.indexOf(elem)>=0){
    return true;
  }
  return false;
  
  
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));