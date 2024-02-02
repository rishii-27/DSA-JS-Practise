// Task8: Contains Duplicate

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// ************************************

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// var containsDuplicate = function (nums) {
//   let countArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (countArr[nums[i]]) {
//       return true;
//     } else countArr[nums[i]] = 1;
//   }
//   return false;
// };

// var containsDuplicate = function (nums) {
//   let setNums = new Set(nums);
//   if (setNums.size == nums.length) {
//     return false;
//   }
//   return true;
// };

// var containsDuplicate = function (nums) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return true;
//     }
//     map.set(nums[i], 1);
//   }

//   return false;
// };

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
