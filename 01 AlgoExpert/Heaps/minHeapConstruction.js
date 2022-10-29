// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
// currentNode = i;
//childOne = 2i+1;
//childTwo = 2i+2;
//parentNode = Math.floor((i-1)/2);
class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  //O(N) time && O(1) Space
    buildHeap(array) {
      // Write your code here.
      const firstParentIdx = Math.floor((array.length-2)/2);
      for (let currentIdx = firstParentIdx; currentIdx >=0; currentIdx--){
        this.siftDown(currentIdx, array.length-1, array);
      }
      return array;
    }
  
    //O(N) time && O(1) Space
    siftDown(currentIdx, endIdx, heap) {
      // Write your code here.
      let childOneIdx = currentIdx*2+1;
      while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx*2 +2 <= endIdx ? currentIdx*2+2 :-1;
        let idToxSwap;
        if(childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
          idToxSwap = childTwoIdx;
        }else{
          idToxSwap = childOneIdx;
        }
        if (heap[idToxSwap] <heap[currentIdx]) {
          this.swap(currentIdx, idToxSwap, heap);
          currentIdx = idToxSwap;
          childOneIdx = currentIdx*2 + 1;
        }else{
          return;
        }
      } 
    }
  
    //O(N) time && O(1) Space
    siftUp(currentIdx, heap) {
      // Write your code here.
      let parentIdx = Math.floor((currentIdx-1)/2);
      while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) /2);  
      }
    }
  
    peek() {
      // Write your code here.
      return this.heap[0];
    }
  
    remove() {
      // Write your code here.
      this.swap(0, this.heap.length-1, this.heap);
      const valueToRemove = this.heap.pop();
      this.siftDown(0, this.heap.length - 1, this.heap);
      return valueToRemove;
    }
  
    insert(value) {
      // Write your code here.
      this.heap.push(value);
      this.siftUp(this.heap.length-1, this.heap);
    }
  
    swap(i,j,heap){
      [heap[i], heap[j]] = [heap[j], heap[i]]
    }
  }