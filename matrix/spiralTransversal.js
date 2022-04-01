// function spiralT(n,arr){
//     var ans=[];
//     var count=0;
//     var top=0;
//     var bottom =n-1;
//     var left = 0;
//     var right = n-1;
//     while(count<n*n){
        
//         for(var i=left;i<=right;i++){
//             ans.push(arr[top][i]);
//             count++;
//         }
//         top++;
//         for(var i=top;i<=bottom;i++){
//             ans.push(arr[i][right]);
//             count++;
//         }
//         right--
        
//         for(var i=right;i>=left;i--){
//             ans.push(arr[bottom][i]);
//             count++;
//         }
//         bottom--;
        
//         for(var i=bottom;i>=top;i--){
//             ans.push(arr[i][left]);
//             count++;
//         }
//         left++
        
//     }
    
//     return ans.join(",")
// }

// console.log(spiralT(3, [ "[ 1, 2, 3 ]", "[ 4, 5, 6 ]", "[ 7, 8, 9 ]"]));
// function spiralT(n,arr){

// //     for(let i=0;i<n;i++){
// //       arr[i]= arr[i].split(",").join(" ");
// //     }
// // console.log(arr[2][0])
// //     return arr
// }

let arr=["[ 1, 2, 3 ]", "[ 4, 5, 6 ]", "[ 7, 8, 9 ]"];

for(var i=0;i<arr.length;i++){
    arr[i]= arr[i].split(",").join(" ");
}