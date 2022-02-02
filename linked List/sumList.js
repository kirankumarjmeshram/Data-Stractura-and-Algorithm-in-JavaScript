class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d =new Node(7);

a.next = b;
b.next = c;
c.next = d;

//A->B->C->D->NULL

const sumList =(head)=>{
let sum = 0;
let current = head;
while(current!==null){
    sum = sum + current.val
    current=current.next
}
return sum
}

console.log(sumList(a)) //20




