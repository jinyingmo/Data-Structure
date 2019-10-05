/**
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。
 */

function deleteDuplication(head) {
  if (!head || !head.next) {
    return head
  } else if (head.val == head.next.val) {
    let current = head.next
    while (current && current.val == head.val) {
      current = current.next
    }
    return deleteDuplication(current)
  } else {
    head.next = deleteDuplication(head.next)
  }
}
