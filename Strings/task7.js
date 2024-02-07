// Task7: Longest Common Prefix

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// *************************************************

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""; // Handle empty array edge case

  strs.sort(); // Sort the array of strings lexicographically

  let prefix = "";
  let first = strs[0];
  let last = strs[strs.length - 1];

  // Iterate through the characters of the first string
  for (let i = 0; i < first.length; i++) {
    // If the character matches in the first and last strings, add it to the prefix
    if (first.charAt(i) === last.charAt(i)) {
      prefix += first.charAt(i);
    } else {
      break; // Break out of the loop if characters don't match
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
