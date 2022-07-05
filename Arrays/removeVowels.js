function remVowel(str)
{
    let al = [ 'a', 'e', 'i', 'o', 'u',
               'A', 'E', 'I', 'O', 'U' ];
    let result = "";
     
    for(let i = 0; i < str.length; i++)
    {
         
        if (!al.includes(str[i]))
        {
            result += str[i];
        }
    }
    return result;
}

console.log(remVowel("abaabbsjhshahian"))