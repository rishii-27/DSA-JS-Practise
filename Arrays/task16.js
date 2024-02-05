// Task16:  Maximum Subarray

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// **********************************************

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
console.log(maxSubArray([5, 4, -1, 7, 8]));

// var maxSubArray = function (arr) {
//   let max = arr[0];
//   let total = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     total += arr[i];
//     if (arr[i] > total) {
//       total = arr[i];
//     }
//     if (total > max) {
//       max = total;
//     }
//   }
//   return max;
// };
