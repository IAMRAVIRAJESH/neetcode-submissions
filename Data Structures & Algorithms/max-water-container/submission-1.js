class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0, end = heights.length-1, ans = 0;

        while(start < end) {
            const curr = Math.min(heights[start], heights[end]) * (end - start)
            ans = Math.max(ans, curr);

            if(heights[start] < heights[end]) start++;
            else end--;
        }

        return ans;
    }
}
