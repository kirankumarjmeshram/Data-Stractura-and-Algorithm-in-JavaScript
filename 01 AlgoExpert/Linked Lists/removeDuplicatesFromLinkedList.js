// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
  let curr = linkedList;
    while (curr !== null){
      let nextDist = curr.next;
      While (nextDist !== null && curr.value === nextDist.value){
        nextDist = nextDist.next;
      }
      curr.next = nextDist;
      curr = nextDist;
    }
      return linkedList;
  }
  