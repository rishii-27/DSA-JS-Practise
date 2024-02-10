// Task10: Valid Anagram

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// **************************************

var isAnagram = function (s, t) {
  let ana1 = s.split("").sort().join("");
  let ana2 = t.split("").sort().join("");

  if (ana1 === ana2) {
    return true;
  }
  return false;
};
console.log(isAnagram("anagram", "nagaram"));
