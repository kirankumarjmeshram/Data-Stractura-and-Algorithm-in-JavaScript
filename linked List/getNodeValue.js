class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d =new Node("D");

a.next = b;
b.next = c;
c.next = d;

//A->B->C->D->NULL


const getNodeValue =(head,index)=>{
    let current = head;
    let count=0;
    while(current !==null){
        if(count === index) return current.val;
        count++;
        current = current.next;
    }
    return "index not present"
}

console.log(getNodeValue(a,0)) //A
console.log(getNodeValue(a,1)) //B
console.log(getNodeValue(a,4)) //index not present




