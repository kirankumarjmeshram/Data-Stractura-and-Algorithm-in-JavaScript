function gridTraveler(n,m){
    if(n===1 && m===1) return 1;
    if(n===0 || m===0) return 0;
    return gridTraveler(n-1,m)+gridTraveler(n,m-1)
}

console.log(gridTraveler(4,4))//20