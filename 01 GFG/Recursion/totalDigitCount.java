//https://practice.geeksforgeeks.org/batch/CP-36/track/CP-33Recursion/problem/count-total-digits-in-a-number
class Solution
{
    // complete the below function
    public static int countDigits(int n)
    {
        // add your code here
        if(n == 0){
            return 1;
        }
        if(n/10>0){
            return 1+countDigits(n/10);
        }
        return countDigits(n/10);
    }
}