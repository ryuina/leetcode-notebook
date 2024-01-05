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
var deleteMiddle = function(head) {
    let currHead = head
    let index = 0
    while (currHead.next !== null) {
        index += 1
        currHead = currHead.next
    }
    const middleIndex = Math.ceil(index / 2)
    if (middleIndex === 0) {
        head = null
        return head
    }
    currHead = head
    index = 0
    while (index < middleIndex -1) {
        currHead = currHead.next
        index += 1
    }
    currHead.next = currHead.next.next
    return head
};

// Time Complexity: O(n)
// Space Complexity: O(1)
