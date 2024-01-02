
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    if(position ===0){
        return head.next;
    }
    let count = 0;
    let curr = head;
    while(count<position-1){
        count++;
        curr = curr.next;
        
    }
    
    curr.next = curr.next.next;
    return head;
}

