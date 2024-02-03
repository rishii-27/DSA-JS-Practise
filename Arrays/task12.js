// Task12: Count Inversions 

// Sample Input 1 :
// 3 2 1
// Sample Output 1 :
// 3
// Explanation of Sample Output 1:
// We have a total of 3 pairs which satisfy the condition of inversion. (3, 2), (2, 1) and (3, 1).

// Sample Input 2 :
// 2 5 1 3 4
// Sample Output 2 :
// 4
// Explanation of Sample Output 1:
// We have a total of 4 pairs which satisfy the condition of inversion. (2, 1), (5, 1), (5, 3) and (5, 4).

// **************************************************

function countInversions(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
}

// Example usage
let arr1 = [3, 2, 1];
let result1 = countInversions(arr1);
console.log(result1); // Output: 3

let arr2 = [2, 5, 1, 3, 4];
let result2 = countInversions(arr2);
console.log(result2); // Output: 4
