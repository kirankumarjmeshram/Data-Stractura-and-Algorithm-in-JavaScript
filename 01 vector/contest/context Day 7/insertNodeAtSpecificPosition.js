
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let newNode = new LinkedListNode(data);
    if(position === 0){
        newNode.next = head;
        return newNode;
    }
    let count = 0;
    let curr = head;
    let temp = null;
    while(count < position-1){
        curr = curr.next;
        count++;
    }
    temp = curr.next;
    curr.next = newNode;
    newNode.next = temp;
    
    return head;
    
}

