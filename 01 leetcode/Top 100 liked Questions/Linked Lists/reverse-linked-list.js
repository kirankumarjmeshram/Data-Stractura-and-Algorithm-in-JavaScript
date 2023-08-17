https://leetcode.com/problems/reverse-linked-list/submissions/?envType=study-plan-v2&envId=top-100-liked
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    while(curr!== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};