class ListNode {
   val: number;
   next: ListNode | null;

   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   let tempHead: ListNode = new ListNode(0);
   let current: ListNode = tempHead;

   let carry: number = 0;

   while (l1 != null || l2 != null || carry != 0) {
      let val1 = l1 != null ? l1.val : 0;
      let val2 = l2 != null ? l2.val : 0;

      let sum = val1 + val2 + carry;
      carry = sum / 10;

      current.next = new ListNode(sum % 10);
      current = current.next;

      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
   }

   return tempHead;
}
