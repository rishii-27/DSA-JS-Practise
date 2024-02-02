// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

// ***********************************************

// Function to find the minimum and maximum elements in an array
function getMinMax(arr) {
  // Create an object to store the minimum and maximum values
  const minmax = {};

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Store the minimum element as the first element of the sorted array
  minmax.min = arr[0];
  // Store the maximum element as the last element of the sorted array
  minmax.max = arr[arr.length - 1];

  // Return the object containing the minimum and maximum values
  return minmax;
}

// Main function
function main() {
  // Given array
  const arr = [1000, 11, 445, 1, 330, 3000];

  // Call the getMinMax function to find the minimum and maximum values
  const minmax = getMinMax(arr);

  // Print the minimum element
  console.log("Minimum element is " + minmax.min);
  // Print the maximum element
  console.log("Maximum element is " + minmax.max);
}

// Call the main function to start the program
main();
