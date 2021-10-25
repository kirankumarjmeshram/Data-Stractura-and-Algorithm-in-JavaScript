//create a stack
var Stack = function(){
    //count and storage bocome variable
    this.count = 0;
    this.storage = {};

    //add the value onto the end of the stack
    this.push = function(value){
        this.storage[this.count]=value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    //Return the value at the end of the stack
    //peek and pop are nearly same but pop() removes the item peek() not.
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());