// Task11:Add to Array-Form of Integer

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// **************************************************

var addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);

  //   return Array.from(String(sum), Number);
  return sum.toString().split("").map(Number);
};

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    34
  )
);

// Array.from("1234", Number): This converts each character in the string to a number. The Number function is used as a mapping function for each character. So, "1" becomes 1, "2" becomes 2, and so on. In simpler terms, map(Number).
