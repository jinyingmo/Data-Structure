/** 对称二叉树
 *  两颗二叉树根结点相同，但他们的左右两个子节点交换了位置
 */

function isSymmetricalTree(node) {
  if(!node) {
    return false;
  }
  check(node.left, node.right)
}

function check(leftNode, rightNode) {
  if(!leftNode && !rightNode) {
    return true;
  }
  if(!leftNode || !rightNode) {
    return false;
  }
  if(leftNode.data !== rightNode.data) {
    return false;
  }
  return check(leftNode.left, rightNode.right) && check(leftNode.right, rightNode.left);
}