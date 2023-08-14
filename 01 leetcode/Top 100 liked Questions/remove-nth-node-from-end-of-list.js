// https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1836096/javascript-o-n-solution/?envType=study-plan-v2&envId=top-100-liked

var removeNthFromEnd = function(head, n) {
    let count = 0;
    let curr = head;
    while(curr.next !== null){
        count++;
        curr = curr.next;
    }
    
    if(n>=count){
        return head.next
    }
    
    let i = count-n;
    curr = head;
    let prev = null;

    while(i > 0){
        i--;
        prev = curr;
        curr = curr.next;
    }
   
        prev.next = curr.next;
    
    
    return head
};