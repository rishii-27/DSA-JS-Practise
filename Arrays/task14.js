// Task14: Find the Duplicate Number

// Input: nums = [1,3,4,2,2]
// Output: 2

// Input: nums = [3,1,3,4,2]
// Output: 3

// ************************************

// var findDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       return nums[i];
//     }
//   }
// };

// You must solve the problem without modifying the array nums and uses only constant extra space.

// var findDuplicate = function (nums) {
//   let slow = 0;
//   let fast = 0;

//   do {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
//   } while (slow !== fast);

//   let slow2 = 0;

//   while (slow !== slow2) {
//     slow = nums[slow];
//     slow2 = nums[slow2];
//   }

//   return slow;
// };

var findDuplicate = function (nums) {
  const memo = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (memo[nums[i] - 1]) return nums[i];
    memo[nums[i] - 1] = nums[i];
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
