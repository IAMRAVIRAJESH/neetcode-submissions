class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a,b) => a-b);
        const n = sorted.length , output = [];

        for(let i=0; i<n; i++) {
            if(i>0 && sorted[i]==sorted[i-1]) continue;

            let start = i+1, end = n-1, curr = sorted[i];

            while(start<end) {
                if(curr + sorted[start] + sorted[end] === 0) {
                    const currAns = [curr, sorted[start], sorted[end]]
                    output.push(currAns);
                    while (start < end && nums[start] == nums[start+1]) start++;
                    while (start < end && nums[end] == nums[end-1]) end--;
                    start++;
                    end--;
                }

                else if(curr + sorted[start] + sorted[end] > 0) {
                    end--;
                }

                else {
                    start++;
                }
            }
        }

        return output;
    }
}
