function mergingLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let curr = linkedListOne;
    let count1 = 0;
    while(curr !== null){
      count1++;
      curr = curr.next;
    }
    curr = linkedListTwo;
    let count2 = 0;
    while(curr !== null){
      count2++;
      curr = curr.next;
    }
  
    let diff = Math.abs(count2 - count1);
    let bigCurrNode =  count1 > count2? linkedListOne: linkedListTwo;
    let smallCurrNode = count1 > count2 ? linkedListTwo : linkedListOne;
  
    for(let i=0; i<diff; i++){
      bigCurrNode = bigCurrNode.next;
    }
  
    while(bigCurrNode !== smallCurrNode){
      bigCurrNode = bigCurrNode.next;
      smallCurrNode = smallCurrNode.next;
    }
  
    return bigCurrNode;
  }