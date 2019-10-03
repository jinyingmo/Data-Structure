/**
 * 合并有序链表
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则
 */

function mergeList(head1, head2) {
  if (!head2) {
    return head1
  }
  if (!head1) {
    return head2
  }
  let head
  if (head1.data < head2.data) {
    head = head1
    head.next = mergeList(head1.next, head2)
  } else {
    head = head2
    head.next = mergeList(head1, head2.next)
  }
  return head
}
