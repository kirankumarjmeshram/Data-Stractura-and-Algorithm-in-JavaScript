//Copy Array Items Using slice()
//slice() takes only 2 parameters — 
//1. the first is the index at which to begin extraction, and the 
//2. second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index)

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather)//=>[ 'snow', 'sleet' ]
//orignal arr is not affected
console.log(weatherConditions)//[ 'rain', 'snow', 'sleet', 'hail', 'clear' ]



function forecast(arr) {
    // Only change code below this line
  var ans=arr.slice(2,4)
    return ans;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  //=> [ 'warm', 'sunny' ]