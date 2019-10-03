/** 创建一颗二叉树 */

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
  this.insert = insert;
}

function insert(data) {
  let node = new Node(data, null, null);
  if(!this.root) {
    this.root = node;
    return
  }
  let current = this.root;
  while(true) {
    if(data < current.data) {
      if(current.left) {
        current = current.left
      } else {
        current.left = node
        break
      }
    } else {
      if(current.right) {
        current = current.right
      } else {
        current.right = node
        break
      }
    }
  }
}

module.exports = {
  Node,
  BST
}

let nst = new BST()
nst.insert(5)
nst.insert(1)
nst.insert(3)
nst.insert(9)
nst.insert(4)
console.log(nst.root)