
function mergingLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let lOne = linkedListOne;
    let lTwo = linkedListTwo;
    while(lOne !== lTwo){
      if(lOne === null){
        lOne = linkedListTwo;
      }else{
        lOne = lOne.next;
      }
  
      if(lTwo === null){
        lTwo = linkedListOne;
      }else{
        lTwo = lTwo.next;
      }
    }
      return lOne;
  }