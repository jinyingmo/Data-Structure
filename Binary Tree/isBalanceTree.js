/**
 * 判断一棵树是否是平衡二叉树
 */

function isBalanceTree(node) {
  const res = isBalance(node)
  return res !== -1
}

function isBalance(node) {
  if(!node) {
    return 0
  }
  const leftNode = isBalance(node.left)
  const rightNode = isBalance(node.right)
  if(leftNode === -1 || rightNode === -1 || Math.abs(leftNode - rightNode) > 1) {
    return -1
  }
  return Math.max(leftNode, rightNode) + 1  //如果不是，返回最大深度
}