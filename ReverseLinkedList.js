/**
 * 206. Reverse Linked List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  let temp = [];
  while (head != null) {
    temp.push(head.val);
    head = head.next;
  }
  let newHead = new ListNode();
  let currNode = newHead;
  while (temp.length != 0) {
    currNode.val = temp.pop();
    if (temp.length != 0) {
      currNode.next = new ListNode();
      currNode = currNode.next;
    }
  }
  return newHead;
};