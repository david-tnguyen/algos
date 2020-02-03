function ListNode(val) {
  this.val = val;
  this.next = null;
};


// iterative
const reverseList = (head) => {
  let prev = null;

  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

// recursive
const reverseListRecursive = (head, prev = null) => {
  if (head === null) {
    return null;
  }

  const next = reverseListRecursive(head.next, head);
  head.next = prev;
  return next || head;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
console.log(reverseList(head));
