// Task3: Merge Two sorted Lists

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// **********************************************

var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let list = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      list.next = list1;
      list1 = list1.next;
    } else {
      list.next = list2;
      list2 = list2.next;
    }
    list = list.next;
  }

  list.next = list1 || list2;

  return dummy.next;
};

// Example usage:
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Helper function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// Test cases
let list1 = arrayToLinkedList([]);
let list2 = arrayToLinkedList([]);

let mergedList = mergeTwoLists(list1, list2);
console.log(
  "Input: list1 = " +
    JSON.stringify(linkedListToArray(list1)) +
    ", list2 = " +
    JSON.stringify(linkedListToArray(list2))
);
console.log("Output: " + JSON.stringify(linkedListToArray(mergedList)));
