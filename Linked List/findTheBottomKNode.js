/**
 * 从链表中找出倒数第k个节点
 * 思路：由于循环链表需要先找到lendth，然后找到节点，需要循环两次
 * 考虑使用两个节点，相差k，然后前面的节点到达尾端，后面的节点即为倒数第k个节点
 */

function findTheBottomKNode(head, k) {
  if (!head || !k) {
    return null
  }
  let before = head
  let behind = head
  let num = 0
  while (before.next) {
    before = before.next
    num++
    if (num >= k) {
      behind = behind.next
    }
  }
  if (k >= num) {
    return behind
  } else {
    return null
  }
}
