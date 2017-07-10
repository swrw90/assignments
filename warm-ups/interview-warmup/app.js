// Write an efficient function that takes stockPricesYesterday and 
// returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(arr) {
    var maxProfit = 0;
    arr.reduce(function (prev, item) {
        var max = Math.max(item - prev, 0);

        max > maxProfit ? maxProfit = max : null;

        if (max === 0) {
            return item;
        } else {
            return prev;
        }
    });

    if (maxProfit === 0) {
        return -1;
    }
    return maxProfit;
}

console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)