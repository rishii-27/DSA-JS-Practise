// Task1: Reverse LinkedList

// *******************************************
// Definition for singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  if (!head || !head.next) return head; // If list is empty or has only one element, return it

  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next; // Store next node
    current.next = prev; // Reverse current node's pointer
    prev = current; // Move pointers one position ahead
    current = nextTemp;
  }

  return prev; // New head of the reversed list
}

// Function to convert array to linked list
function arrayToLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Function to convert linked list to array
function linkedListToArray(head) {
  let arr = [];
  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

// Example usage:
let inputArray = [1, 2, 3, 4, 5];
let head = arrayToLinkedList(inputArray);
let reversedHead = reverseLinkedList(head);
let outputArray = linkedListToArray(reversedHead);

console.log("Input: head = " + JSON.stringify(inputArray));
console.log("Output: " + JSON.stringify(outputArray));
