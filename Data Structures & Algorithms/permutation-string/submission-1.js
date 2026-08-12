class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    matches(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    checkInclusion(s1, s2) {
        const n1 = s1.length, n2 = s2.length;
        let start = 0, end = n1;
        const s1Count = new Array(26).fill(0);
        
        for (let i = 0; i < n1; i++) {
            const idx = s1.charCodeAt(i) - 97;
            s1Count[idx]++;
        }

        while(end <= n2) {
            const s2Count = new Array(26).fill(0);

            for (let i = start; i < end; i++) {
                const idx = s2.charCodeAt(i) - 97;
                s2Count[idx]++;
            }

            if(this.matches(s1Count, s2Count)) return true;

            start++;
            end++;
        }

        return false;
    }
}
