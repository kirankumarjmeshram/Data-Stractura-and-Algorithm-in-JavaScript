// https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//     if (s.length === 1) return s;
//     let ans = '';

//     for(let i=0;i<numRows;i++) {
//         let increment = 2*(numRows - 1);
//         for(let j=i;j<s.length;j+= increment) {
//             ans+=s[j]
//             if(i > 0 && i < numRows-1 && j+increment - 2*i < s.length){
//                 ans+=s[j+increment - 2*i]
//             }
//         }
//     }
//     return ans;
// };
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = Array(numRows).fill("");
    let index = 0, step = 1;

    for (let char of s) {
        rows[index] += char;
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }

    return rows.join("");
};
