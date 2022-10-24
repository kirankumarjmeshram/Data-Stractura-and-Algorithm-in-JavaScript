class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  // O(N) Time && O(1) space
  function linkedListPalindrome(head) {
    // Write your code here.
    let slowNode = head;
    let FastNode = head;
    while (FastNode !== null && FastNode.next !== null) {
      slowNode = slowNode.next;
      FastNode = FastNode.next.next;
    }
  
    let reversedSecondHalfNode = reverseLinkedList(slowNode);
    let firstHalfNode = head;
    while (reversedSecondHalfNode !== null) {
      if(reversedSecondHalfNode.value !== firstHalfNode.value){
        return false;
      } 
      reversedSecondHalfNode = reversedSecondHalfNode.next;
      firstHalfNode = firstHalfNode.next;
    }
    return true;
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev
  }
  