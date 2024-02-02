// https://www.geeksforgeeks.org/program-to-reverse-an-array/

// *****************************************

function reverseArrayExtraArray(arr) {
  const reversedArr = arr.slice().reverse();

  // Print reversed array
  process.stdout.write("Reversed Array: ");
  reversedArr.forEach((element) => process.stdout.write(element + " "));
}

// function reverseArrayExtraArray(arr) {
//   let op = arr.reverse();
//   console.log(op);
// }

// Example usage:
const originalArr = [1, 2, 3, 4, 5];
reverseArrayExtraArray(originalArr);
