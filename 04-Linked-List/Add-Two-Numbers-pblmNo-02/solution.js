class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            let total = carry;

            if (l1) {
                total += l1.val;
                l1 = l1.next;
            }

            if (l2) {
                total += l2.val;
                l2 = l2.next;
            }

            carry = Math.floor(total / 10);

            curr.next = new ListNode(total % 10);
            curr = curr.next;
        }

        return dummy.next;
    }
}

// ---------- Helper Functions ----------

function createLinkedList(arr) {
    const dummy = new ListNode();
    let curr = dummy;

    for (const num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }

    return dummy.next;
}

function printLinkedList(head) {
    const result = [];

    while (head) {
        result.push(head.val);
        head = head.next;
    }

    console.log(result.join(" -> "));
}

// ---------- Driver Code ----------

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);

const solution = new Solution();
const result = solution.addTwoNumbers(l1, l2);

console.log("Result:");
printLinkedList(result);