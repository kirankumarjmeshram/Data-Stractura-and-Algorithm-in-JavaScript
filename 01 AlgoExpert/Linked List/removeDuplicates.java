import java.util.*;

class Program {
  // This is an input class. Do not edit.
  public static class LinkedList {
    public int value;
    public LinkedList next;

    public LinkedList(int value) {
      this.value = value;
      this.next = null;
    }
  }

  public LinkedList removeDuplicatesFromLinkedList(LinkedList linkedList) {
    // Write your code here.
    LinkedList current = linkedList;
    while (current != null ){
      LinkedList nextDistinct = current.next;
      while(nextDistinct != null && nextDistinct.value == current.value  ){
        nextDistinct = nextDistinct.next ;
      }
      current.next = nextDistinct;
      current  = nextDistinct;
    }
    return linkedList;
  }
}
