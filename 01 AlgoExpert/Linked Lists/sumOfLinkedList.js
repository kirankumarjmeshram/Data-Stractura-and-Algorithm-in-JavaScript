class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  function getListValue(head) {
    let num = 0;
    let place =1;
    let curr = head;
  
    while(curr !== null){
      num += curr.value*place;
      place *=10;
      curr = curr.next;
    }
    return num;
  }
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let num1 = getListValue(linkedListOne);
    let num2 = getListValue(linkedListTwo);
  
    let sumIntegers = [...(num1+num2).toString()];
    let newList = new LinkedList(+sumIntegers.pop());
  
    let curr = newList;
    while(sumIntegers.length){
      let next = new LinkedList(+sumIntegers.pop());
      curr.next = next;
      curr = next;
    }
    
    return newList;
  }