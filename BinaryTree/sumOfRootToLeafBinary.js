class Node {
    constructor(val){
        this.val = val;
        this.left=null;
        this.right=null;
    }
}

const a= new Node(1);
const b= new Node(0)
const c= new Node(1);
const d= new Node(0);
const e= new Node(1);
const f= new Node(0);


a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

function sumRootToLeaf(root){
    let totalSum = 0;
        function dfs(node, sum = '') {
            sum += node.val;
           
            if (!node.left && !node.right) totalSum += parseInt(sum, 2);
            else {
                if (node.left) dfs(node.left, sum);
                if (node.right) dfs(node.right, sum);
            }
        }
        dfs(root);
        return totalSum;
    }

    console.log(sumRootToLeaf(a))//15