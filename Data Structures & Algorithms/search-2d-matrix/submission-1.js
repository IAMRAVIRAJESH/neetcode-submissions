class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length, col = matrix[0].length;

        for(let i=0; i<row; i++) {
            if(matrix[i][col-1] == target) return true;

            else if(matrix[i][col-1] > target) {
                let start = 0, end = col-1;
                while(start <= end) {
                    const mid = Math.floor((start + end) / 2);

                    if(matrix[i][mid]==target) {
                        return true;
                    }

                    else if(matrix[i][mid]>target) {
                        end--;
                    }
                    else  {
                        start++;
                    }
                }

                return false;
            }
        }
        return false;
    }
}
