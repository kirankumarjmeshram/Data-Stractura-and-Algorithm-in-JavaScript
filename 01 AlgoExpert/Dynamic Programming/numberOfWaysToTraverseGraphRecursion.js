function numberOfWaysToTraverseGraph(height, width){
    if(height===1 || width ===1){
        return 1;
    }else{
       return numberOfWaysToTraverseGraph(height-1,width) + numberOfWaysToTraverseGraph(height, width-1)
    }
}

console.log(numberOfWaysToTraverseGraph(4,3)) // 10
