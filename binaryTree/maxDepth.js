/**
 * 二叉树的最大深度
 */
function maxDepth(node) {
  if(!node) {
    return 0
  }
  const leftDepth = maxDepth(node.left)
  const rightDepth = maxDepth(node.right)
  return leftDepth > rightDepth? leftDepth + 1: rightDepth + 1
}