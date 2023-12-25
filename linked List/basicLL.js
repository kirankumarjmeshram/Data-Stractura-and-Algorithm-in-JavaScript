class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert a new node at the end of the linked list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Insert a new node at the beginning of the linked list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Insert a new node at a specific position
    insertAt(position, data) {
      if (position === 0) {
        this.prepend(data);
        return;
      }
  
      const newNode = new Node(data);
      let current = this.head;
      let count = 0;
      while (count < position - 1 && current.next) {
        current = current.next;
        count++;
      }
  
      newNode.next = current.next;
      current.next = newNode;
    }
  
    // Delete a node with a specific data value
    delete(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    // Delete a node at a specific position
    deleteAt(position) {
      if (position === 0) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let count = 0;
      while (count < position - 1 && current.next) {
        current = current.next;
        count++;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    // Reverse the linked list
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    // Print the elements of the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  linkedList.prepend(0);
  
  linkedList.insertAt(2, 1.5);
  
  linkedList.print(); // Output: 0, 1, 1.5, 2, 3
  
  linkedList.delete(2);
  
  linkedList.deleteAt(2);
  
  linkedList.print(); // Output: 0, 1, 3
  
  linkedList.reverse();
  
  linkedList.print(); // Output: 3, 1, 0
  