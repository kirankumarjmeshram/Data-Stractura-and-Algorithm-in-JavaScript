function forumParking(k, arrivalT, departureT){
    let n = arrivalT.length;
    let count = 1;
    for(let i=0;i<n;i++){
        if(arrivalT[i+1]<departureT[i]){
            count++;
        }
    }
    if(count==k){
        return "Possible"
    }else{
        return "Not Possible"
    }
}

console.log(forumParking(1,[1,3,5], [2,6,8]))

//check for this case 
// 4
// 4 3 6 7 11
// 9 4 10 9 14