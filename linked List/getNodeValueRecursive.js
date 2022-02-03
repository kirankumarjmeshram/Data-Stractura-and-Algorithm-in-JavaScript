
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
    if(head===null) return null;
    if(index===0) return head.val;
    return getNodeValue(head.next,index-1);
}


console.log(getNodeValue(a,0)) //A
console.log(getNodeValue(a,1)) //B
console.log(getNodeValue(a,5)) //null




