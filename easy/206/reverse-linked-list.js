/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListRecursive = function (head) {
    if (!head || !head.next) {
        return head
    }
    let head2 = reverseList(head.next)  // 2->3->4->5 -> 3->4->5 => 4->5 => 5
    head.next.next = head   // 5->4->3
    head.next = null
    return head2
};

var reverseListIterate = function (head) {
    if (!head) {
        return head
    }

    if (!head.next) {
        return head
    }
    let prev = head   // prev = 1(->2...)
    let curr = head.next   // curr = 2(->3...)

    prev.next = null

    while (curr) {
        let next = curr.next  //next = 4(->5...)
        curr.next = prev  //3->2->1()
        prev = curr    // prev = 3->2->1
        curr = next    // curr = 3(->4...)
    }

    return prev
};

// Time: O(n)
// Space: O(n) - recursive
