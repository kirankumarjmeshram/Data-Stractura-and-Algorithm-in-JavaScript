class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add at the beginning
  addFirst(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Add at the end
  addLast(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    this.size++;
  }

  // Print the linked list
  print() {
    let temp = this.head;

    while (temp !== null) {
      process.stdout.write(`${temp.data} -> `);
      temp = temp.next;
    }

    console.log("null");
  }

  add(index, data) {
    if(index === 0) {
        this.addFirst(data);
        return;
    }
    const newNode = new Node(data);
    let curr = this.head;
    for(let i=0;i<index-1;i++) {
        curr = curr.next;
    }
    newNode.next =  curr.next;
    curr.next = newNode;
    this.size;
  }
}

const list = new LinkedList();
list = addFirst(20);
list = addFirst(20);
list = addFirst(40);
list = addFirst(50);

