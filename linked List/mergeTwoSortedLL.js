class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    if(headOne==null) return headTwo;
      if(headTwo==null) return headOne;
      
      if(headOne.value<headTwo.value){
          headOne.next= mergeLinkedLists(headOne.next,headTwo);
          return headOne
      }else{
          headTwo.next = mergeLinkedLists(headOne,headTwo.next)
          return headTwo
      }
      
  }
  //https://leetcode.com/problems/merge-two-sorted-lists/

  /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let curr = dummy;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        }else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if(!list1){
        curr.next = list2
    }else{
        curr.next = list1
    }

    return dummy.next;
};
