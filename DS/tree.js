class TreeNode {
  val; // node value
  left; // left node value
  right; // right node value
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? 0 : left;
    this.right = right === undefined ? 0 : right;
  }
}

// Create the node
let n0 = new TreeNode(0);
let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);

// Create a tree
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

// insert 0 between node 1 and node 2
n1.left = n0;
n0.left = n2;

// delete the we just inserted

n1.left = n2;
