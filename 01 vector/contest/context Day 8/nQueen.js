function nQueen(n){
    const colPlacement = new Array(n).fill(0);
    return totalQueen(0, colPlacement, n);
}

function totalQueen(row, colPlacement, n){
    if(row === n){
        return 1;
    }
    let totalPlacements = 0;
    for(let col = 0; col < n ; col ++){
        if(isSafe(row, col, colPlacement)){
            colPlacement[row] = col
            totalPlacements += totalQueen(row+1, colPlacement, n);
        }
    }
    return totalPlacements;
}

function isSafe(row, col, colPlacement){
    for(let i = 0; i < row; i++){
        const colToCheck = colPlacement[i];
        const sameColumn = colToCheck === col;
        const onDigonal = Math.abs(colToCheck-col) === row -i;

        if(sameColumn || onDigonal){
            return false;
        }
    }
    return true;
}

console.log(nQueen(4))