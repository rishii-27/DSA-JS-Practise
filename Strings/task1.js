// Task1: Reverse Words in a String

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// ***********************************************

var reverseWords = function (s) {
  // Remove extra spaces
  let stringWithoutExtraSpaces = s.replace(/ +/g, " ");

  // Reverse the string
  let reversedString = stringWithoutExtraSpaces
    .split(" ")
    .reverse()
    .join(" ")
    .trim();

  return reversedString;
};

console.log(reverseWords("a good   example"));
