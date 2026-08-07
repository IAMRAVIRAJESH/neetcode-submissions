class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let minVal = prices[0], ans = 0;

        for(let i=0; i<n; i++) {
            if(prices[i]<=minVal) minVal= prices[i];

            else ans = Math.max(ans,prices[i]-minVal);
        }
        return ans;
    }
}
