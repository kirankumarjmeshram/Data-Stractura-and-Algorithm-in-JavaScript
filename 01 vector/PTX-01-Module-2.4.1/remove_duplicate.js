var deleteDuplicates = function(head) {
    let curr = head;
    while(curr !== null && curr.next!== null){
        if(curr.data === curr.next.data){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
    
};

