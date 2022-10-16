class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
    // Write your code here.
      let slow_p=head.next;
      let fast_p = head.next.next;
      while(slow_p != fast_p && fast_p!= null && fast_p.next != null){
          slow_p = slow_p.next;
          fast_p = fast_p.next.next;
      }
      slow_p = head;
      while(slow_p != fast_p){
          slow_p = slow_p.next;
          fast_p = fast_p.next;
      }
      return slow_p
  }