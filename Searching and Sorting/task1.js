// Task1: Permute two arrays such that sum of every pair is greater or equal to K

// Input : a[] = {2, 1, 3}, 
//         b[] = { 7, 8, 9 }, 
//         k = 10. 
// Output : Yes
// Permutation  a[] = { 1, 2, 3 } and b[] = { 9, 8, 7 } 
// Assume asort[] be sorted a[] in ascending order and bsort[] be sorted b[] in descending order. 
// satisfied the condition a[i] + b[i] >= K.

// Input : a[] = {1, 2, 2, 1}, 
//         b[] = { 3, 3, 3, 4 }, 
//         k = 5. 
// Output : No

// **********************************************

function isPossible(a, b, n, k) {
  // Sort the array a[]
  // in decreasing order.
  a.sort(function (a, b) {
    return a - b;
  });

  // Sort the array b[]
  // in increasing order.
  b.reverse();

  // Checking condition on each index.
  for (let i = 0; i < n; i++) if (a[i] + b[i] < k) return false;

  return true;
}

let a = [2, 1, 3];
let b = [7, 8, 9];
let k = 10;
let n = a.length;

if (isPossible(a, b, n, k)) console.log("Yes");
else console.log("No");
