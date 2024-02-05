// Task19: Best Time to Buy and Sell Stock

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// **********************************************

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let res = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right])
      res = Math.max(res, prices[right] - prices[left]);
    else left = right;
    right++;
  }
  return res;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
