// Task2: shuffle the Array
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// *********************************************

var shuffle = function (nums, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i], nums[i + n]);
  }
  return arr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
