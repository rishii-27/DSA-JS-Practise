// Task5: Count the Number of Consistent strings

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// ****************************************

var countConsistentStrings = function (allowed, words) {
  let count = 0;

  for (let word of words) {
    let isConsistent = true;

    for (let char of word) {
      if (!allowed.includes(char)) {
        isConsistent = false;
        break;
      }
    }

    if (isConsistent) {
      count++;
    }
  }
  return count;
};

// var countConsistentStrings = function (allowed, words) {
//   let count = 0;
//   for (let j = 0; j < words.length; j++) {
//     let a = words[j].split("");
//     let b = true;
//     for (let i of a) {
//       if (!allowed.includes(i)) {
//         b = false;
//       }
//     }
//     if (b == true) {
//       count++;
//     }
//   }

//   return count;
// };
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
