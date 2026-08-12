class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1, n = piles.length;
        let end = Math.max(...piles), ans = end;

        while(start<=end) {
            const mid = Math.floor((start + end) / 2);
            let sum =0;

            for(let i=0; i<n; i++) {
                sum += Math.ceil(piles[i]/mid);
            }

            if(sum > h) {
                start = mid+1;
            }
            else  {
                ans = mid;
                end = mid-1;
            }
        }

        return ans;
    }
}
