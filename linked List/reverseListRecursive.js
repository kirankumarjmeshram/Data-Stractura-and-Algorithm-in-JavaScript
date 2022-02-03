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


const reverseList =(head,prev=null)=>{
if(head===null) return prev;
const next = head.next;
head.next=prev;
return reverseList(next,head)
} 

console.log(reverseList(a)) //d c b a





