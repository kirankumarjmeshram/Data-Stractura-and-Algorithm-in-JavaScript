// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map1 = {};
    let map2 = {};
    for(let el of ransomNote){
        if(!map1[el]){
            map1[el]=1;
        }else{
            map1[el]++;
        }
    }
    for(let el of magazine){
        if(!map2[el]){
            map2[el]=1;
        }else{
            map2[el]++;
        }
    }
    for(let el of Object.keys(map1)){
        if((map1[el] > map2[el])|| !map2[el]){
            return false;
        }
    }
    return true;
};

// solution2

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
