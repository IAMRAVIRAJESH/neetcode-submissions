class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i=0; i<nums.length; i++) {
            if(map.has(target - nums[i])) {
                const idx = map.get(target - nums[i]);
                return [idx,i];
            }
            map.set(nums[i], i);
        }
    }
}
