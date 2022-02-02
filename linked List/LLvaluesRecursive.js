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

const printLinkedListValues =(head)=>{
const values =[];
fillValues(head,values);
return values.join(" ")
}

function fillValues(head,values){
    if(head===null) return ;
    values.push(head.val);
    fillValues(head.next,values)
}

console.log(printLinkedListValues(a)) //A B C D




