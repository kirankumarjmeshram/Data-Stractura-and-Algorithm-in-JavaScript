function partyPlanning(N,PamID,M,JimID){
    let s = new Set(PamID);
    for(let i=0;i<M;i++){
        if(!(s.has(JimID[i]))){
            return console.log("No");
        }
    }
    return console.log("Yes");
}