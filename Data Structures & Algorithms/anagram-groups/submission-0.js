class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        for(let word of strs) {
            const key = word.split('').sort().join('');
            if(!result[key]){
                result[key] = [];
            }
            result[key].push(word);
        }

        return Object.values(result);
    }
    
}
