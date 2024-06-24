// https://leetcode.com/problems/remove-nth-node-from-end-of-list/ 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let res = new ListNode (0,head);
    let dummy = res;
    for(let i=0;i<n;i++){
        head = head.next;
    }

    while(head){
        head = head.next;
        dummy = dummy.next;
    }

    dummy.next = dummy.next.next;

    return res.next;

};


