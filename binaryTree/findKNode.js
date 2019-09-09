/** 找到二叉树第k小的节点
 *  思路：中序遍历得到由小到大的节点
 */

function findKNode(node) {
  let arr = [];
  LDR(node, arr);
  return arr[k-1] || null;
}

function LDR(node, arr) {
  if(node) {
    LDR(arr.left, arr);
    arr.push(node);
    LDR(arr.right, arr);
  }
}