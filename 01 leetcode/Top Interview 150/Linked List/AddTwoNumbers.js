// https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    let total = 0;
    while(l1 || l2 || carry){
        total = carry
        if(l1){
            total +=l1.val;
            l1 = l1.next;
        }
        if(l2){
            total += l2.val;
            l2 = l2.next;
        }
        let num = total%10;
        carry = Math.floor(total/10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }
    return curr.next
};