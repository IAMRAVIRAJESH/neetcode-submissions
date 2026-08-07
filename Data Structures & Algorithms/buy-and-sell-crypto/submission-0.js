class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let maxVal = prices[0], ans = 0;

        for(let i=0; i<n; i++) {
            if(prices[i]<=maxVal) maxVal= prices[i];

            else ans = Math.max(ans,prices[i]-maxVal);
        }

        return ans;
    }
}
