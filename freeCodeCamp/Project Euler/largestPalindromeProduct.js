//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    //To get the maximum n digit number, + operator type castes String to Number type
      let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
    
      //Next we get minimum n digit number from the max
      let min = (max + 1) / 10;
    
      //To store the result
      let largest = -1;
    
      //Starting the loop from max to min
      for (let i = max; i >= min; i--) {
        //Another loop
        for (let j = max; j >= min; j--) {
          //Getting the product
          let num = i * j;
    
          //Reversing the number
          let numReverse = [...String(num)].reverse().join("");
    
          //Checking for palindromic number
          if (num == numReverse) {
            //Check if max and break the loop
            largest = Math.max(num, largest);
            break;
          }
        }
      }
    
      // Returning largest found
      return largest;
    }