class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let tg=0, tc=0, n = gas.length, curr = 0, start = 0;

        for(let i=0; i<n; i++) {
            tg += gas[i];
            tc += cost[i];

            curr += gas[i]-cost[i];
            if(curr < 0) {
                start = i+1;
                curr = 0;
            }
        }
        if(tg<tc) return -1;

        return start;
    }
}
