/**
 * 输入两个链表，找出它们的第一个公共节点
 * 思路：先比较两个链表长度，然后使他们位于同一起点一起前进，相遇时则为第一个公共节点
 */

function findTheFirstCommonNode(head1, head2) {
  const len1 = getLength(head1)
  const len2 = getLength(head2)
  if (len1 === 0 || len2 === 0) {
    return null
  }
  if (len1 > len2) {
    let distance = len1 - len2
    while (distance > 0) {
      head1 = head1.next
      distance--
    }
  } else {
    let distance = len2 - len1
    while (distance > 0) {
      head2 = head2.next
      distance--
    }
  }
  while (head1 != head2) {
    if (!head1 || !head2) {
      return null
    }
    head1 = head1.next
    head2 = head2.next
  }
  return head1
}

function getLength(head) {
  if (!head) {
    return 0
  }
  let len = 0
  let current = head
  while (current) {
    current = current.next
    len++
  }
  return len
}
