class ListNode {
   val: number;
   next: ListNode | null;

   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   let tempHead = new ListNode();
   let current = tempHead;

   let carry = 0;

   while (l1 != null || l2 != null || carry != 0) {
      let val1 = l1 != null ? l1.val : 0;
      let val2 = l2 != null ? l2.val : 0;

      let sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);

      current.next = new ListNode(Math.floor(sum % 10));
      current = current.next;

      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
   }

   return tempHead.next;
}
