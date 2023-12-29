const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let p1 =head;
    let p2 = head;
    if(head === null){
        return null;
    }
    while(p2.next !== null && p2.next.next !== null){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    if(p2.next !== null){
        return p1.next.data;
    }else{
        return p1.data;
    }
};

