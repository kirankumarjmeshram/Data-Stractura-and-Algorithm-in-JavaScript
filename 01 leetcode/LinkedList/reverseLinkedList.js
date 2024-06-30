// https://leetcode.com/problems/reverse-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let pre = null;

    while( curr !== null) {
        let next = curr.next;
        curr.next = pre;
        pre = curr
        curr = next;
        
    }
    return pre;
};