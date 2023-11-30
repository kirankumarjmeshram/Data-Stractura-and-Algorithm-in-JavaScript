function patternPrinting(N) {
    for (let i = 0; i < N; i++) {
            let row = "";
            for(let j=0;j<N;j++){
                if(i===j|| i===N-j-1 || i===  0|| i===N-1 ||j===0 || j ===N-1){
                    row+="* "
                }else{
                    row+="  "
                }
            }
            console.log(row)
        }
    }