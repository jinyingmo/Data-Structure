/** 判断是否是后序遍历
 *  先拿到右子树，判断右子树是否有小于root节点的
 */

function checkIsBST(node) {
  if(node && node.length > 0) {
    const root = node[node.length - 1];
    for(let i = 0; i < node.length - 1; i ++) {
      if(node[i].data >= root.data) {
        break;
      }
    }
    for(let j = i; j < node.length - 1; j ++) {
      if(node[j].data < root.data) {
        return false;
      }
    }
    let leftNode = true;
    if(i > 0) {
      leftNode = checkIsBST(node.slice(0, i));
    }
    let rightNode = true;
    if(i < node.length) {
      rightNode = checkIsBST(node.slice(i, node.length));
    }
    return leftNode && rightNode;
  }
}