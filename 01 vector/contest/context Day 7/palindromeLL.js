const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let stack = [];
    let curr = head;
    while(curr !== null){
        stack.push(curr.data);
        curr = curr.next
    }
    // console.log(stack);
    curr = head;
    while(curr !== null){
        if(stack[stack.length-1] ===curr.data){
            stack.pop();
        }
        curr = curr.next;
    }
    
    return stack.length? false : true;
};
