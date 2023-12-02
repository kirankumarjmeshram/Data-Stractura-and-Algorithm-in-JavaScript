// XOR is monotonic in the absolute difference between numbers. (If the numbers are identical, then 
// the XOR is zero). If you ignore the possibility of negative numbers and write the numbers in binary, it becomes obvious.
// So the minimum value in a sorted list will always be between a particular adjacent pair
// console.log(2^3)//1
// console.log(3^4)//7
// console.log(4^5)//3
// console.log(5^6)//3
// console.log(6^7)//1
// console.log(7^8)//15
// console.log(8^9)//1
// console.log(9^10)//3
// console.log(3^6)//5
// console.log(5^15)//10
// console.log(15^20)//27
// console.log(11^22)//29

function minXor(n, arr){
    let minXor = Math.pow(10,9);
    arr = arr.sort((a,b)=>a-b)
    for(let i=0;i<n;i++){
        minXor = Math.min(minXor, arr[i]^arr[i+1]);
    }
    return minXor;
}
