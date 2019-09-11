/*
Best Time to Buy and Sell Stock II
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
             
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

*/

var maxProfit = function(prices) {
	let profit = 0;
	if (prices.length === 0 || prices.length === 1) {
		return profit;
	}
	for (let i = 1; i < prices.length; i++) {
		// console.log(profit);
		let preVal = prices[i - 1];
		let current = prices[i];
		if (preVal < current) {
			profit += current - preVal;
		}
	}
	// console.log(profit);
	return profit;
};

console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ]));
console.log(maxProfit([ 1, 2, 3, 4, 5 ]));
