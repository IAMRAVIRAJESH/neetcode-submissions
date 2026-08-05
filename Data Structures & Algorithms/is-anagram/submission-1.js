class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const m = s.length;
        const n = t.length;

        if(m!==n) return false;

        const map = new Array(26).fill(0);

        for(let i=0; i<n; i++) {
            map[s.charCodeAt(i)-97]++;
            map[t.charCodeAt(i)-97]--;
        }

        for(let m of map) {
            if(m !== 0) {
                return false;
            }
        }
        return true;
    }
}
