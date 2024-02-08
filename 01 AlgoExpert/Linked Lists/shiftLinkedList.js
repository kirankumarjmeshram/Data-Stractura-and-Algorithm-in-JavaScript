function shiftLinkedList(head, k) {
    let n = 1;
    let tailNode = head;
    while(tailNode.next !== null){
      n++;
      tailNode = tailNode.next;
    }
    let offset = Math.abs(k) % n;
  
    if(offset === 0) return head;
    
    let newTailPosition = k >0 ? n - offset : offset;
  
    let newTail = head;
    for(let i=1;i<newTailPosition;i++){
      newTail = newTail.next;
    }
  
    let newHead = newTail.next;
    newTail.next = null;
    tailNode.next = head;
    return newHead;
  
  }