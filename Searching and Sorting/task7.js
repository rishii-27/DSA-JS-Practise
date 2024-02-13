// Task7: Print all subarrays with 0 sum

// ********************************************
// Javascript program to print all subarrays
// in the array which has sum 0
function findSubArrays(arr, n) {
  // Array to store all the start and end
  // indices of subarrays with 0 sum
  let out = [];
  for (let i = 0; i < n; i++) {
    let prefix = 0;
    for (let j = i; j < n; j++) {
      prefix += arr[j];
      if (prefix == 0) out.push([i, j]);
    }
  }

  return out;
}

// Function to print all subarrays with 0 sum
function print(out) {
  for (let it of out)
    console.log("Subarray found from Index " + it[0] + " to " + it[1]);
}

// Driver code
// Given array
let arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
let n = arr.length;

// Function Call
let out = findSubArrays(arr, n);

// if we didn’t find any subarray with 0 sum,
// then subarray doesn’t exists
if (out.length == 0) {
  console.log("No subarray exists");
} else {
  print(out);
}

