function Node (val) {
  this.val = val;
  this.next = null;
}

const mergeSortedList = (l1, l2) => {
  const merge = new Node(1);

  let prev = merge;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next
  }

  if (l1 === null) {
    prev.next = l2;
  } else {
    prev.next = l1;
  }

  return merge.next;
};

const l1 = new Node(1);
l1.next = new Node(3);

const l2 = new Node(2);
l2.next = new Node(4);

console.log(mergeSortedList(l1, l2));