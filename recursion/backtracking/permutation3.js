function permute(s , answer)
{ 
    if (s.length == 0)
    {
        console.log(answer + "  ");
    }
      
    for(let i = 0 ;i < s.length; i++)
    {
        let ch = s[i];
        let left_substr = s.slice(0, i);
        let right_substr = s.slice(i + 1);
        let rest = left_substr + right_substr;
        permute(rest, answer + ch);
    }
}
 
    // Driver Cod"e
    let s= "abc";
    let answer="";
      
    console.log("Enter the string  : ");
      
    console.log("\nAll possible string are : ");
    permute(s, answer);
//     All possible string are : 
// abc  
// acb  
// bac  
// bca  
// cab  
// cba  