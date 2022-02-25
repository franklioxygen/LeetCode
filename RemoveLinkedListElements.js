/**
 * 203. Remove Linked List Elements
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

  let dummy = {};
  dummy.next = head;
  let cur = dummy;
  while (cur.next != null) {
    if (cur.next.val != val) cur = cur.next;
    else cur.next = cur.next.next;
  }
  return dummy.next;

};