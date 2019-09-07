import { Node } from './create'

const preData = [1,2,4,7,3,5,6,8];  //前序遍历值
const vinData = [4,7,2,1,5,3,8,6];  //中序遍历值

function rebuildBinaryTree(pre, vin) {
  if(!pre || pre.length === 0) {
    return null;
  }
  if(pre.length === 1) {
    return new Node(pre[0]);
  }
  const value = pre[0];
  const index = vin.indexOf(value);
  const vinLeft = vin.slice(0, index);
  const vinRight = vin.slice(index + 1);
  const preLeft = pre.slice(1, index+1);
  const preRight = pre.slice(index+1);
  let root = new Node(value);
  root.left = rebuildBinaryTree(preLeft, vinLeft);
  root.right = rebuildBinaryTree(preRight, vinRight);
  return root;
}

console.log(rebuildBinaryTree(preData, vinData));