class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      //here array = [];
      console.log(array)
      // Write your code here.
      array.push(this.name);
      for(const el of this.children){
        el.depthFirstSearch(array)
      }
      return array
          
    }
  }
  
 