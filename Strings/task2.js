// Task2: Check if the Sentence Is Pangram

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Input: sentence = "leetcode"
// Output: false

// ****************************************

var checkIfPangram = function (sentence) {
  return new Set(sentence.split("")).size == 26;
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
