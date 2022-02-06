class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(1);
const c = new Node(1);
const d =new Node(1);
const  e=new Node(4);
const f =new Node(5);
const g =new Node(6);
const h =new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

const printLinkedListValues =(Node)=>{
let current = Node;
while(current!==null){
  let  nextEle = current.next;
    while(nextEle!==null && nextEle.next==current){
        nextEle=nextEle.next;
    }
    current.next = nextEle;
    current= nextEle;
}
return Node
}
// const printL=(Node)=>{
//     const values =[];
//     fillValues(Node,values);
//     return values.join(" ")
//     }
//     function fillValues(Node,values){
//         if(Node===null) return ;
//         values.push(Node.val);
//         fillValues(Node.next,values)
//     }


console.log(printLinkedListValues(a)) //A B C D
//console.log(printL(a))




