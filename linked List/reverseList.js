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


const reverseList =(head)=>{
 let prev =null;
 let current = head;
 console.log(a)
 while(current!== null){
     const next = current.next;
     current.next = prev;
     prev=current;
     current=next;
 }
 return prev
} 

console.log(reverseList(a)) //d c b a





