class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  if (headOne == null) return headTwo;
  if (headTwo == null) return headOne;

  if (headOne.value < headTwo.value) {
    headOne.next = mergeLinkedLists(headOne.next, headTwo);
    return headOne
  } else {
    headTwo.next = mergeLinkedLists(headOne, headTwo.next)
    return headTwo
  }

}
