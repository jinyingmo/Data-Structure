function minDepth(node) {
  if(!node) {
    return 0;
  }
  if(!node.left) {
    return minDepth(node.right) + 1;
  }
  if(!node.right) {
    return minDepth(node.left) + 1;
  }
  return minDepth(node.left) <= minDepth(node.right)? minDepth(node.left) + 1: minDepth(node.right) + 1
}