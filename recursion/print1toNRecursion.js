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
 
    printNos(10);//1 2 3 4 5 6 7 8 9 10
