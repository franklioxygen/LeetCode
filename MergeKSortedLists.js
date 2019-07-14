/**
 * 23. Merge k Sorted Lists
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let stack = [];
    for (list of lists) {
        while (list) {
            stack.push(list.val);
            list = list.next;
        }
    }
    stack.sort((a, b) => {
        return a - b
    })
    let newList = new ListNode();
    let dummy = newList;
    while (stack.length != 0) {
        dummy.val = stack.shift();
        if (stack.length != 0) {
            dummy.next = new ListNode();
            dummy = dummy.next;
        }
    }
    if (newList.val == undefined) return null;
    return newList;
};