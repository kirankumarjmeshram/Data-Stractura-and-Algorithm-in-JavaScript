"https://oj.masaischool.com/contest/3421/problem/01"

function nQueens(n){
    const colPlaces= new Array(n).fill(0);
    
    return nQVariant(0,colPlaces,n)
}

function nQVariant(row,colPlaces,boardSize){
    if(row ===boardSize) return 1;

    let validPlacement=0;
    for(let col=0;col<boardSize;col++){
        if(isPlacemenst(row,col,colPlaces)){
            colPlaces[row]=col;
            validPlacement+=nQVariant(row+1,colPlaces,boardSize);
        }
    }
    return validPlacement
}

function isPlacemenst(row,col,colPlaces){
    for(let prevRow=0;prevRow<row;prevRow++){
        const colToCheck= colPlaces[prevRow];
        const sameCol = colToCheck===col;
        const onDigonal = Math.abs(colToCheck-col)===row - prevRow;
        if(sameCol || onDigonal) return false
    }
    return true
}



console.log(nQueens(4))