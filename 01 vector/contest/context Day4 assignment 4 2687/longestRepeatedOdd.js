function longestRepeatedOdd(N, array) {
    let longest = 0;
   let current = 0;

   for (let i = 1; i < N; i++) {
       if (i>0 && array[i] === array[i - 1] && array[i] % 2 !== 0) {
           current++;
           longest = Math.max(longest, current);
       } else if (array[i] % 2 !== 0) {
           current = 1; 
           longest = Math.max(longest, current);
       } else {
           current = 0; 
       }
   }

   console.log(longest);
}