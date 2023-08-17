function middleNode(linkedList) {
    let temp1 = linkedList;
    let temp2 = linkedList;
  
    // Write your code here.
    while(temp2 !== null && temp2.next!==null){
      temp1 = temp1.next;
      temp2 = temp2.next.next
      
    }
    return temp1;
  }
  