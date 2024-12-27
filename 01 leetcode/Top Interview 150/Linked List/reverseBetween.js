//https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || left === right) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let tempPrev = dummy;
    for(let i=1;i<left;i++) {
        tempPrev = tempPrev.next;
    }

    let curr = tempPrev.next;
    let next = null;
    let prev = null;
    
    for(let i=0;i<right-left+1;i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    tempPrev.next.next = curr;
    tempPrev.next = prev;

    return dummy.next;
};