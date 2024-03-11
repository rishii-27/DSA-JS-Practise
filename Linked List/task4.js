// Task4: Delete without Head Node

// *******************************************

var head; // head of the list

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Given a reference to the head of a list and an int, inserts a new Node on the front of the

function push(new_data) {
  // 1. alloc the Node and put the data
  var new_Node = new Node(new_data);

  // 2. Make next of new Node as head
  new_Node.next = head;

  // 3. Move the head to point to new Node
  head = new_Node;
}

// This function prints contents of linked list starting from the given Node
function printList() {
  var tNode = head;
  while (tNode != null) {
    console.log(tNode.data + " ");
    tNode = tNode.next;
  }
}

function deleteNode(Node_ptr) {
  var temp = Node_ptr.next;
  Node_ptr.data = temp.data;
  Node_ptr.next = temp.next;
  temp = null;
}

// Use push() to construct below list 1->12->5->4->1
push(1);
push(4);
push(5);
push(12);
push(1);

console.log("Before deleting");
printList();

// I m deleting the head itself. You can check for more cases
deleteNode(head);

console.log("After Deleting");
printList();
