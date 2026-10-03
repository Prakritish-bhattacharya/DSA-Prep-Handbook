class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = ListNode(0)
        curr = dummy
        carry = 0

        while l1 or l2 or carry:
            total = carry

            if l1:
                total += l1.val
                l1 = l1.next

            if l2:
                total += l2.val
                l2 = l2.next

            carry = total // 10
            curr.next = ListNode(total % 10)
            curr = curr.next

        return dummy.next


# ---------- Helper Functions ----------

def createLinkedList(arr):
    dummy = ListNode()
    curr = dummy

    for num in arr:
        curr.next = ListNode(num)
        curr = curr.next

    return dummy.next


def printLinkedList(head):
    while head:
        print(head.val, end=" -> " if head.next else "")
        head = head.next
    print()


# ---------- Driver Code ----------

l1 = createLinkedList([2, 4, 3])
l2 = createLinkedList([5, 6, 4])

solution = Solution()
result = solution.addTwoNumbers(l1, l2)

print("Result:")
printLinkedList(result)