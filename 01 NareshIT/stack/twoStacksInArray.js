// https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1

class TwoStacks {

    constructor() {
        // Code here
        this.stack = new Array(100);
        this.top1 = -1;
        this.top2 = 100;
    }

    // Function to push an integer into the stack1.
    push1(x) {
        // code here
        this.stack[++this.top1] = x;
    }

    // Function to push an integer into the stack2.
    push2(x) {
        // code here
        this.stack[--this.top2] = x;
    }

    // Function to remove an element from top of the stack1.
        
    pop1() {
        // code here
        if(this.top1 === -1) return -1;
        return this.stack[this.top1--]
    }

        
    // Function to remove an element from top of the stack2.
    pop2() {
        // code here
        if(this.top2 === 100) return -1;
        return this.stack[this.top2++]
    }
}