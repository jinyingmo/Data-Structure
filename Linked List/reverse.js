/**
 * 反转链表
 * 输入一个链表，反转链表后，输出新链表的表头
 */

function reverse(list) {
  let currentNode = null
  let revserd = null
  while (list) {
    currentNode = list.next
    currentNode.next = revserd //将节点取出放到反转的链表最前面
    revserd = currentNode
    list = list.next
  }
  return revserd
}
