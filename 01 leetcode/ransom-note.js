// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
function ransomeNote(m,n,magzine,note){
    magzine = magzine.sort();
    note = note.sort();
    let i = 0;
    let j = 0;
    while (i<m && j<n){
        if(note[j] == magzine[i]){
            i++;
            j++
        }else{
            i++
        }
    }
    
    if(j==n){
        return "Yes"
    }
    return "No"   
}
