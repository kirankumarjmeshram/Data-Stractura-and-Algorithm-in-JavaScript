//https://practice.geeksforgeeks.org/batch/CP-36/track/CP-33Recursion/problem/digital-root
class Solution
{
    // complete the function
    public static int digitalRoot(int n)
    {
        // add your code here
        if(n < 10){
            return n;
        }else{
            return digitalRoot(n%10 + digitalRoot(n/10));
        }
    }
}