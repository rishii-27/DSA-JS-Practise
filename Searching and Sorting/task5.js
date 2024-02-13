// Task5: Searching using Linear and Binary search

// **************************************************

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index if target is found
    }
  }
  return -1; // Return -1 if target is not found
}

// Example usage:
const arr = [2, 5, 8, 12, 16];
const target = 8;
const index = linearSearch(arr, target);
if (index !== -1) {
  console.log(`Target ${target} found at index ${index}.`);
} else {
  console.log(`Target ${target} not found in the array.`);
}

// -------------------------------------------------

var binarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
