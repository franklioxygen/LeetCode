/**
 * 445. Add Two Numbers II
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
    let stc1 = [];
    let stc2 = [];
    let res = [];
    let carry = 0;
    while (l1) {
        stc1.unshift(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stc2.unshift(l2.val);
        l2 = l2.next
    }
    while (stc1.length != 0 || stc2.length != 0) {
        if (stc1.length > 0 && stc2.length > 0) {
            res.push((carry + stc1[0] + stc2[0]) % 10);
            if (carry + stc1.shift() + stc2.shift() >= 10) carry = 1;
            else carry = 0;
        } else {

            res.push((carry + ((stc1[0] || stc2[0]) || 0)) % 10);
            if ((carry + (stc1.shift() || stc2.shift())) >= 10) carry = 1;
            else carry = 0;
        }
    }
    if (stc1.length == 0 && stc2.length == 0) {
        if (carry == 1) res.push(1);
    }
    let resList = new ListNode();
    let resHead = resList;
    res = res.reverse();
    for (i = 0; i < res.length; i++) {
        resList.val = res[i];
        if (i < res.length - 1) {
            resList.next = new ListNode();
            resList = resList.next;
        }
    }
    return resHead;
};