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
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        const n1 = s1.length, n2 = s2.length;

        if (n1 > n2) return false;

        for (let i = 0; i < n1; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        if(this.matches(s1Count, s2Count)) return true;

        let start = 0, end = n1;

        while(end < n2) {
            const addIdx = s2.charCodeAt(end) - 97;
            s2Count[addIdx]++;

            const removeIdx = s2.charCodeAt(start) - 97;
            s2Count[removeIdx]--;

            if(this.matches(s1Count, s2Count)) return true;

            start++;
            end++;
        }

        return false;
    }
}
