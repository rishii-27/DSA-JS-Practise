// You are given a read only array of n integers from 1 to n.
// Each integer appears exactly once except A which appears twice and B which is missing.
// Return A and B.

// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Note that in your output A should precede B.

// Example:
// Input:[3 1 2 5 3] 
// Output:[3, 4] 
// A = 3, B = 4

// ***************************************************

function findDuplicateAndMissing(nums) {
  let n = nums.length;

  // XOR all numbers from 1 to n
  let xor1 = 0;
  for (let i = 1; i <= n; i++) {
    xor1 ^= i;
  }

  // XOR all elements in the array
  let xor2 = 0;
  for (let num of nums) {
    xor2 ^= num;
  }

  // XOR of A and B
  let xorResult = xor1 ^ xor2;

  // Find the rightmost set bit in XOR result
  let rightmostSetBit = 1;
  while ((rightmostSetBit & xorResult) === 0) {
    rightmostSetBit <<= 1;
  }

  // Separate numbers into two groups based on the rightmost set bit
  let group1 = 0;
  let group2 = 0;

  for (let i = 1; i <= n; i++) {
    if ((i & rightmostSetBit) !== 0) {
      group1 ^= i;
    } else {
      group2 ^= i;
    }
  }

  for (let num of nums) {
    if ((num & rightmostSetBit) !== 0) {
      group1 ^= num;
    } else {
      group2 ^= num;
    }
  }

  // Check which one is the duplicate
  for (let num of nums) {
    if (num === group1) {
      return [group1, group2];
    }
  }

  return [group2, group1];
}

// Example
let input = [3, 1, 2, 5, 3];
console.log(findDuplicateAndMissing(input)); // Output: [3, 4]
