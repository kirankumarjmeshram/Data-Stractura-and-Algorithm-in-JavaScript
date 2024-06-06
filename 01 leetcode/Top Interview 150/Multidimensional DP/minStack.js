// https://leetcode.com/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150
var MinStack = function() {
    this.elements = [];
    this.minstack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elements.push(val);
    if(this.minstack.length === 0){
        val = val;
    }else{
        val = Math.min(val, this.minstack[this.minstack.length - 1])
    }
    this.minstack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elements.pop();
    this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.minstack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length -1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
