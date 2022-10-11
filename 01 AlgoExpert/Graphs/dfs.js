class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  //using recursion
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

  // breadthFirstSearch(array) {
  //   // Write your code here.
  //   // here array = [];
  //   const queue = [this];
  //   while(queue.length > 0){
  //     const current = queue.shift();
  //     array.push(current.name);
  //     for(const child of current.children){
  //       queue.push(child);
  //     }
  //   }
  //   return array;
  // }
  
 