class Node {
    constructor(val){
        this.val = val;
        this.left=null;
        this.right=null;
    }
}

const a= new Node("a");
const b= new Node("b");
const c= new Node("c");
const d= new Node("d");
const e= new Node("e");
const f= new Node("f");

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

const treeIncludes=(root,target)=>{
       if(root===null) return false;
       if(root.val===target) return true;
       return treeIncludes(root.left,target) || treeIncludes(root.right,target)

}

console.log(treeIncludes(a,"e"))//true
console.log(treeIncludes(a,"z"))//false
