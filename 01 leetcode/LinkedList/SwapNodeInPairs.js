// https://leetcode.com/problems/swap-nodes-in-pairs/description/
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
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while(curr.next && curr.next.next) {
        // identify node to swap
        let firstNode = curr.next;
        let secondNode = curr.next.next;
        
        // swap
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        // prepare for next
        curr.next = secondNode;
        curr = firstNode
    }

    return dummy.next;;
};