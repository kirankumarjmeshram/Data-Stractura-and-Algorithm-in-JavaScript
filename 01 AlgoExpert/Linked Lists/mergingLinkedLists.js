function mergingLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let set = new Set();
    let curr = linkedListOne;
    while(curr !== null){
      set.add(curr.value);
      curr = curr.next;
    }
  
    curr = linkedListTwo;
    while(curr !== null){
      if(set.has(curr.value)){
        return curr;
      }else{
        curr = curr.next;
      }
    }
  
    return null;
  }