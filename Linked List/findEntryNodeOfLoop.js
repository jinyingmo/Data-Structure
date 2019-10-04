/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null
 * 思路：1、判断是否有环，使用两个指针，一个每次走两步，另一个走一步，若相遇则表示有环
 * 2、获得环的length
 * 3、两个指针从头节点出发，一个先走length，当相遇时，即为环的入口节点
 */

function findEntryNodeOfLoop(head) {
  if (!head) {
    return null
  }
  let P1 = head
  let P2 = head
  while (P1 != P2) {
    if (!P2 || !P2.next) {
      return null
    }
    P1 = P1.next
    P2 = P2.next.next
  }
  let len = 1
  P1 = P1.next
  while (P1 != P2) {
    len++
    P1 = P1.next
  }
  P1 = P2 = head
  while (len > 0) {
    P1 = P1.next
    len--
  }
  while (P1 != P2) {
    P1 = P1.next
    P2 = P2.next
  }
  return P1
}
