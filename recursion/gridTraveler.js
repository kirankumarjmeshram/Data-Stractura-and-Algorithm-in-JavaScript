//dynamic programming\memorization\gridTraveler.js
function gridTravler(m,n){
    if(m==1 && n==1){
        return 1
    }if(m==0 || n==0){
        return 0
    }else{
        return gridTravler(m-1,n)+gridTravler(m,n-1)
    }
}

console.log(gridTravler(1,1));//1
console.log(gridTravler(2,3));//3
console.log(gridTravler(3,2))//3
console.log(gridTravler(3,3))//6
console.log(gridTravler(25,10))//38567100