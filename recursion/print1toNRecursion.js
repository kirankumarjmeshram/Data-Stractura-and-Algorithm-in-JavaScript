// Prints numbers from 1 to n
function printNos(n)
{
    if(n > 0)
   

    {
        printNos(n - 1);
         console.log(n + " ");
    
        
    }
   
    return;
    
}
 
printNos(10);
