/**
 * 用链表解决约瑟夫环的问题
 * 0,1,...,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字
 */

function josephRing(n, m) {
  if (n < 1 || m < 1) {
    return
  }
  const head = { val: 0 }
  let current = head
  for (let i = 1; i < n; i++) {
    current.next = { val: i }
    current = current.next
  }
  current.next = head
  while (current != current.next) {
    for (let i = 1; i < m - 2; i++) {
      current = current.next
    }
    current.next = current.next.next //删除下一个节点
  }
  return current.val
}
