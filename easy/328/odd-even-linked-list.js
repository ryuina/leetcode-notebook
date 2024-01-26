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
var oddEvenList1 = function (head) {
    if (!head || !head.next) {
        return head
    }
    let isOdd = true
    let curr = head
    let oddLast = head
    let evenHead = new ListNode(0)
    let evenLast = evenHead
    while (curr) {
        let nextCurr = curr.next

        if (!isOdd) {
            evenLast.next = curr
            evenLast.next.next = null
            evenLast = evenLast.next
            oddLast.next = nextCurr
            if (oddLast.next) {
                oddLast = oddLast.next
            }
        }

        isOdd = !isOdd
        curr = nextCurr
    }
    oddLast.next = evenHead.next
    return head
};

// Time Complexity : O(n)
// Space : O(1)


// with solution
var oddEvenList2 = function(head) {
    if (!head || !head.next) {
        return head
    }
    let isOdd = true
    let odd = head
    let even = head.next
    let evenHead = head.next
    let curr = head.next.next
    while (curr) {
        if (isOdd) {
            odd.next = curr
            odd = odd.next
        }
        else {
            even.next = curr
            even = even.next
        }
        
        isOdd = !isOdd
        curr = curr.next
    }
    odd.next = evenHead
    even.next = null
    return head
};

// Time Complexity : O(n)
// Space : O(1)
