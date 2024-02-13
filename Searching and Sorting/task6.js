// Task6: Find pair with given Difference

// ******************************************
function findPair(arr, diff) {
  // Nested loop to compare
  // all possible pairs of elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      // If the difference between the two elements is 'diff'
      // print them and return
      if (arr[j] - arr[i] === diff) {
        console.log(`Pair Found: (${arr[i]}, ${arr[j]})`);
        return;
      }
    }
  }
  console.log("No such pair");
}

// Input array and 'diff'
const arr = [1, 8, 30, 40, 100];
const diff = -60;
// Function call
findPair(arr, diff);
