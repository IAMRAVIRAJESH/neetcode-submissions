class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let l=0, ans = 0;

        for (let r = 0; r < s.length; r++) {
            const char = s[r];
            if(map.has(char) && map.get(char)>=l) {
                l = map.get(char) + 1;
            } 

            map.set(char, r);
            ans = Math.max(ans, r-l+1);
        }

        return ans;
    }
}
