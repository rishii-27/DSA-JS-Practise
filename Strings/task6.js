// Task6: Remove Consecutive Characters

// Input:
// S = aabb
// Output:  ab
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// Similiar explanation for b at
// 4th position.

// Input:
// S = aabaa
// Output:  aba

// ***************************************

function removeConsecutiveCharacter(s) {
  let str = "";
  let i = 0;

  while (i < s.length) {
    if (s[i] != s[i + 1]) {
      str = str + s[i];
    }
    i++;
  }
  return str;
}

console.log(removeConsecutiveCharacter("aabaa"));
