// Task9: https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1

// Input: 
// N = 4 , M = 4
// Arr[][] = {{0, 1, 1, 1},
//            {0, 0, 1, 1},
//            {1, 1, 1, 1},
//            {0, 0, 0, 0}}
// Output: 2
// Explanation: Row 2 contains 4 1's (0-based
// indexing).

// Input: 
// N = 2, M = 2
// Arr[][] = {{0, 0}, {1, 1}}
// Output: 1
// Explanation: Row 1 contains 2 1's (0-based
// indexing).

// **************************************************

function rowWithMax1s(arr) {
  // code here

  let array = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        count++;
      }
    }
    array.push(count);
  }

  if (array.find((no) => no > 0)) {
    return array.indexOf(Math.max(...array));
  } else {
    return -1;
  }
}

console.log(
  rowWithMax1s([
    [0, 0],
    [1, 1],
  ])
);

// class Solution {
//   rowWithMax1s(arr, n, m) {
//     // code here
//     let max = 0;
//     let k = -1;
//     for (let i = 0; i < n; i++) {
//       let count = 0;
//       for (let j = 0; j < m; j++) {
//         if (arr[i][j] == 1) count++;
//       }
//       if (count > max) {
//         max = count;
//         k = i;
//       }
//     }
//     return k;
//   }
// }
