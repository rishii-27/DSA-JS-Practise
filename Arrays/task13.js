// Task13: Transpose Matrix

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// *********************************************

var transpose = function (matrix) {
  let arr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);

    for (let j = 0; j < matrix.length; j++) {
      arr[i].push(matrix[j][i]);
    }
  }

  return arr;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
