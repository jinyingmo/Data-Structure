/**
 * 二叉树中和为某一值的路径
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
 * （可采用回溯算法，先遍历左子树，再遍历右子树，最后出栈）
 */
const  { BST } = require('./createBinaryTree')

function findPath(node, expectNum) {
  let stack = []
  let result = []
  let sum = 0
  if(node) {
    find(node, expectNum, stack, result, sum)
  }
  return result
}

function find(node, expectNum, stack, result, sum) {
  sum += node.data
  stack.push(node.data)
  if(!node.left && !node.right && sum === expectNum) {
    result.push([...stack])
  }
  if(node.left) {
    find(node.left, expectNum, stack, result, sum)
  }
  if(node.right) {
    find(node.right, expectNum, stack, result, sum)
  }
  stack.pop()
}

let nst = new BST()
nst.insert(5)
nst.insert(4)

console.log(findPath(nst.root, 9))
