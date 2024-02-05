// Task18: Search in Rotated Sorted Array

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// *******************************************

var search = function (nums, target) {
  return nums.indexOf(target);
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));


// var search = function (nums, target) {
//   var left = 0;
//   var right = nums.length - 1;
//   var result = -1;
//   while (left <= right) {
//     var mid = Math.floor((left + right) / 2);
//     if (nums[mid] == target) {
//       result = mid;
//     }
//     // check left half is sorted
//     if (nums[left] <= nums[mid]) {
//       if (target >= nums[left] && target < nums[mid]) {
//         // left half is sort and target is in this half
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       // the right half is sorted
//       if (target > nums[mid] && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   return result;
// };
