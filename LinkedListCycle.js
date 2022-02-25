/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let set = new Set();
  while(head && head.next != null){
    if(set.has(head.next)) return true;
    else {
      set.add(head);
      head = head.next;         
    }
  }
  return false;  
};
