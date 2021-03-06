/**
 * Initialize your data structure here.
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */

 // 1 => 2 => 3
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size) {
    return -1;
  }

  let current = this.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const newNode = new Node(val);
  let temp = this.head;

  if (this.head === null) {
    this.head = newNode;
  } else {
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return;
  } else if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let temp = this.head;

  for (let i = 0; i < index - 1; i++) {
    temp = temp.next;
  }

  const prev = temp.next;
  const newNode = new Node(val);
  temp.next = newNode;
  newNode.next = prev;
  this.size++
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};


//  * Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
obj.head = new Node(1);
obj.head.next = new Node(2);
obj.head.next.next = new Node(3);
obj.size = 3;
console.log(obj.get(1));