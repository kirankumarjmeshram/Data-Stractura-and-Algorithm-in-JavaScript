//https://leetcode.com/problems/palindrome-linked-list/submissions/?envType=study-plan-v2&envId=top-100-liked
var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    while(curr !== null){
        arr.push(curr.val);
        curr = curr.next;
    }
    for(let i=0;i<Math.ceil((arr.length-1)/2);i++){
        if(arr[i]!== arr[arr.length-i-1]){
            return false
        }
    }
    return true;
};