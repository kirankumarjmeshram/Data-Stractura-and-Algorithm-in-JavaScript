/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let s2 = s.split('').reverse().join("")
    return longestCommonSubstring(s,s2)

};


function longestCommonSubstring(s1, s2) {
    let n = s1.length;
    let table = [];
    for (let i = 0; i <= n; i++) {
        table[i] = [];
        for (let j = 0; j <= n; j++) {
            table[i][j] = 0;
        }
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1];
            } else {
                table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
            }
        }
    }
    return table[n][n];
}

// function longestCommonSubstring(s1,s2){
//     let n =s1.length;
//     let table = [];
//     for(let i=0;i<=n;i++){
//         table[i] = [];
//         for(let j=0;j<=n;j++){
//             table[i][j] = 0;
//         }
//     }
//     // console.log(table)
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             if(s1[i] === s2[j]){
//                 table[i][j] = 1 + table[i-1][j-1];
//             }else{
//                  table[i][j] = Math.max(table[i][j-1], table[i-1][j]);
//             }
//         }
//     }
//     return table[n][n]
    
// }

// function longestCommonSubstring(s1,s2){
//     let n = s1.length;
//     let table = [];
//     for(let i = 0; i <= n; i++){
//         table[i] = [];
//         for(let j = 0; j <= n; j++){
//             table[i][j] = 0;
//         }
//     }

//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             if(s1[i] === s2[j]){
//                 table[i+1][j+1] = 1 + table[i][j];
//             } else {
//                 table[i+1][j+1] = Math.max(table[i][j+1], table[i+1][j]);
//             }
//         }
//     }
//     return table[n][n];
// }