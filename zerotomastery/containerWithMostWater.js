const heightsArray = [4,8,1,2,3,9];

function getMaxWaterContainer(heightsArray){
    let p1 = 0;
    let p2 = heightsArray.length-1;
    
    let maxArea = 0;
    
    while(p1<p2){
        let height = Math.min(heightsArray[p1], heightsArray[p2]);
        let width = p2 - p1;
        let area = height*width;
        maxArea = Math.max(area, maxArea);
        if(heightsArray[p1] < heightsArray[p1+1]){
            p1++
        }else{
            p2--
        }
    }
    return maxArea;
}

console.log(getMaxWaterContainer(heightsArray)); //32