class Node{
    constructor(val, left = null, right = null){
        this.val = val;
        this.right = right;
        this.left = left;
    }
    
}

/*var node = new Node(1);
var left = new Node (2);
node.left = left;

var right = new Node(3);

node.right = right;*/

var root = new Node(1, new Node(2), new Node(3));



function serialize(root){
    if (root == null) return '#';
    
    return `${root.val} ` + `${serialize(root.left)} ` + `${serialize(root.right)}`;
}

console.log(serialize(root));