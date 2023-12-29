const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let newNode = new LinkedListNode(data);
    newNode.next = head;
    head = newNode;
    return head;
    
}