var hasCycle = function(head) {
    let slow_p = head;
    let fast_p = head;
    while(fast_p && fast_p.next){
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p === fast_p){
            return true;
        }
    }
    
    return false;
    
}