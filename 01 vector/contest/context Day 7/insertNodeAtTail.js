const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtTail(head, data) {
    let newNode = new LinkedListNode(data);

    if (head === null) {
        return newNode;
    }

    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;
    }

    curr.next = newNode;
    return head;
}

