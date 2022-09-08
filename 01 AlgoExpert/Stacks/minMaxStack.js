// Feel free to add new properties and methods to the class.
class MinMaxStack {
	
	constructor(){
		this.minMaxStack =[];
		this.stack = [];
	}

	
  peek() {
    return this.stack[this.stack.length-1];
  }

  pop() {
    // Write your code here
		this.minMaxStack.pop();
		return this.stack.pop();
  }

  push(number) {
    // Write your code here.
		const newMinMax = {min: number,max:number};
    if(this.minMaxStack.length){
        const lastMinMax = this.minMaxStack[this.minMaxStack.length-1];
        newMinMax.min = Math.min(lastMinMax.min, number);
        newMinMax.max  = Math.max(lastMinMax.max, number);
    }
    this.stack.push(number);
    this.minMaxStack.push(newMinMax);
  }

  getMin() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length-1].min;
  }

  getMax() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length-1].max;
  }
}
