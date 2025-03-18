//https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let visit = new Set();
    let r = grid.length;
    let c = grid[0].length;

    for(i=0;i<r;i++){
        for(j=0;j<c;j++){
            if(grid[i][j]){
                return dfs(i,j)
            }
        }
    }

    function dfs(i,j) {
        if((i>=r) || j >= c || i< 0 || j<0 || grid[i][j] === 0){
            return 1
        }
        if(visit.has(i+"-"+j)){
            return 0;
        }
        visit.add(i+"-"+j)
        let perimeter = dfs(i,j+1);
        perimeter += dfs(i+1,j);
        perimeter += dfs(i,j-1);
        perimeter += dfs(i-1,j);
        return perimeter;
    }
};