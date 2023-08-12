// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let n = c.length;
    // Write your code here
     let jumps = 0;
    let i = 0;
    while(i<n-1){
        if(c[i+2] == 0){
            jumps+=1;
            i+=2;
        }else if(c[i+1] ==0){
            jumps+=1;
            i+=1
        }
    }
    
    return jumps;

}