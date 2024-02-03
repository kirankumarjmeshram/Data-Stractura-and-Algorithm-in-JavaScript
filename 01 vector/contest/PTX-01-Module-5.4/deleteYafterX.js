
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var deleteXAfterY = function(head, n, x, y) {
    let curr = head;
    let prev = null;
    
    while(curr !== null){
        let xcount = 0;
        while(curr !== null && xcount < x){
            prev = curr;
            curr = curr.next;
            xcount++;
        }
        
        if (curr === null) break;
       
        let ycount = 0;
        while(curr !== null && ycount < y){
            curr = curr.next;
            ycount++;
        }
        
        if(prev !== null){
           prev.next = curr; 
        }
    }
    return head;
};


