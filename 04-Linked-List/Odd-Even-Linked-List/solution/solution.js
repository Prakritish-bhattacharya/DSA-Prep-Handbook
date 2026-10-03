/*
Problem      : Odd Even Linked List
Platform     : LeetCode
Difficulty   : Medium

Pattern       : Linked List, Two Pointers
Time          : O(n)
Space         : O(1)

Author        : Prakritish Bhattacharya
GitHub        : github.com/Prakritish-bhattacharya
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    oddEvenList(head) {
        if (!head || !head.next) return head;

        let odd = head;
        let even = head.next;
        const evenStart = even;

        while (even && even.next) {
            odd.next = odd.next.next;
            even.next = even.next.next;

            odd = odd.next;
            even = even.next;
        }

        odd.next = evenStart;

        return head;
    }
}

// -------------------------
// Helper Functions
// -------------------------

function createLinkedList(arr) {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

function printLinkedList(head) {
    let curr = head;

    while (curr) {
        process.stdout.write(curr.val + " -> ");
        curr = curr.next;
    }

    console.log("null");
}

// -------------------------
// Driver Code
// -------------------------

const arr = [1, 2, 3, 4, 5];

let head = createLinkedList(arr);

console.log("Original List:");
printLinkedList(head);

const solution = new Solution();
head = solution.oddEvenList(head);

console.log("\nAfter Rearranging:");
printLinkedList(head);