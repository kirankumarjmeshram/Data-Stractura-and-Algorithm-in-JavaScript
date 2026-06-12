//https://www.geeksforgeeks.org/problems/ways-to-tile-a-floor5836/1
class Solution {
    numberOfWays(n) {
        // code here
         if(n==1) return 2;
         if(n==2) return 2;
        return this.numberOfWays(n - 1) + this.numberOfWays(n - 2)
        
    }
}
