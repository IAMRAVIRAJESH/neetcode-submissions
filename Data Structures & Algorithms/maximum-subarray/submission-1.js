class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = nums[0], sum = nums[0], n = nums.length;

        for(let i=1; i<n; i++) {
            curr = Math.max(nums[i], curr + nums[i]);
            sum = Math.max(sum, curr);
        }

        return sum;
    }
}
