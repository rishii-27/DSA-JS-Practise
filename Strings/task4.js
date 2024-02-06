// Task4: Valid Palindrome

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 
// ********************************************

var isPalindrome = function (s) {
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let i = 0;
  let j = newStr.length - 1;

  while (i <= j) {
    if (newStr[i] == newStr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
