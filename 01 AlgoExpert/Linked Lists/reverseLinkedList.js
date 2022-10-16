class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    // Write your code here.
      let current = head;
      let prev = null;
      //let next = null;
      
      while(current!=null){
          const next = current.next;
          current.next = prev;
          prev = current;
          current = next
      }
      return prev
  }