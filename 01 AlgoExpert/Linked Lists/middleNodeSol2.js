function middleNode(linkedList) {
    // Write your code here.
    let curr = linkedList;
    let count =0;
    while(curr!== null){
      count++;
      curr = curr.next;
    }
    curr = linkedList;
    let mid = Math.floor(count/2);
    let i =0;
    while(i!==mid){
      i++
      curr = curr.next;
    }
    return curr;
  }
  