"""
Problem      : Odd Even Linked List
Platform     : LeetCode
Difficulty   : Medium

Pattern       : Linked List, Two Pointers
Time          : O(n)
Space         : O(1)

Author        : Prakritish Bhattacharya
GitHub        : github.com/Prakritish-bhattacharya
"""
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def oddEvenList(self, head):
        if not head or not head.next:
            return head

        odd = head
        even = head.next
        evenStart = even

        while even and even.next:
            odd.next = odd.next.next
            even.next = even.next.next

            odd = odd.next
            even = even.next

        odd.next = evenStart

        return head


# -------------------------
# Helper Functions
# -------------------------

def createLinkedList(arr):
    if not arr:
        return None

    head = ListNode(arr[0])
    curr = head

    for value in arr[1:]:
        curr.next = ListNode(value)
        curr = curr.next

    return head


def printLinkedList(head):
    while head:
        print(head.val, end=" -> ")
        head = head.next
    print("None")


# -------------------------
# Driver Code
# -------------------------

if __name__ == "__main__":

    arr = [1, 2, 3, 4, 5]

    head = createLinkedList(arr)

    print("Original List:")
    printLinkedList(head)

    solution = Solution()
    head = solution.oddEvenList(head)

    print("\nAfter Rearranging:")
    printLinkedList(head)