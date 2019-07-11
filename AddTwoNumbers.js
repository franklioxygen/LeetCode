/**
 * 2. Add Two Numbers
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let newList = new ListNode();
    let curr = newList;
    while (l1 && l2) {
        curr.val = (carry + l1.val + l2.val) % 10;
        if (carry + l1.val + l2.val > 9) carry = 1;
        else carry = 0;
        l1 = l1.next;
        l2 = l2.next;
        if (l1 || l2) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }
    while (l1) {
        curr.val = (carry + l1.val) % 10;
        if (carry + l1.val > 9) carry = 1;
        else carry = 0
        l1 = l1.next;
        if (l1) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }
    while (l2) {
        curr.val = (carry + l2.val) % 10;
        if (carry + l2.val > 9) carry = 1;
        else carry = 0
        l2 = l2.next;
        if (l2) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }
    if (carry == 1) {
        curr.next = new ListNode();
        curr.next.val = 1;
    }
    return newList;
};