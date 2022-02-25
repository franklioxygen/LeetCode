/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
  let numsA = [];
  let numsB = [];
  let pointerA = headA;
  let pointerB = headB;
  let intersection = 0;
  while(pointerA != null) {numsA.unshift(pointerA.val); pointerA=pointerA.next;}
  while(pointerB != null) {numsB.unshift(pointerB.val); pointerB=pointerB.next;}
  let lenA = numsA.length;
  let lenB = numsB.length;
  while(numsA.length && numsB.length){
    if(numsA[0] == numsB[0]){
      numsA.shift();
      numsB.shift();
      intersection++;
    }
    else break;
  }
  while(lenA-intersection!=0){headA = headA.next; lenA--;}
  while(lenB-intersection!=0){headB = headB.next; lenB--;}
  while(headA !== headB){
    headA = headA.next;
    headB = headB.next;
    if(!headA||!headB) return null;
  }
  return headA;
};
