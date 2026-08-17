// https://leetcode.com/problems/dungeon-game/
/*
                    DUNGEON GAME

              j=0             j=1             j=2
          ┌──────────────┬──────────────┬──────────────┐
 i=0      │     -2       │      -3      │       3      │
          │              │              │              │
          │ f=min(6,5)=5 │ f=min(11,2)=2│ f=5          │
          │ Δ = -2       │ Δ = -3       │ Δ = 3        │
          │ h = f - Δ    │ h = f - Δ    │ h = f - Δ    │
          │ h=5-(-2)=7   │ h=2-(-3)=5   │ h=5-3=2      │
          │ s=max(1,h)=7 │ s=max(1,h)=5 │ s=max(1,h)=2 │
          ├──────────────┼──────────────┼──────────────┤
 i=1      │     -5       │     -10      │       1      │
          │              │              │              │
          │ f=min(1,11)=1│ f=min(1,5)=1 │ f=6          │
          │ Δ = -5       │ Δ = -10      │ Δ = 1        │
          │ h = f - Δ    │ h = f - Δ    │ h = f - Δ    │
          │ h=1-(-5)=6   │ h=1-(-10)=11 │ h=6-1=5      │
          │ s=max(1,h)=6 │ s=max(1,h)=11│ s=max(1,h)=5 │
          ├──────────────┼──────────────┼──────────────┤
 i=2      │      10      │      30      │      -5      │
          │              │              │  PRINCESS    │
          │ f=1          │ f=1          │ f=1          │
          │ Δ = 10       │ Δ = 30       │ Δ = -5       │
          │ h = 1-10=-9  │ h = 1-30=-29 │ h=1-(-5)=6   │
          │ s=max(1,-9)=1│s=max(1,-29)=1 │s=max(1,6)=6 │
          └──────────────┴──────────────┴──────────────┘

                         ANSWER = 7


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         FORMULA

        f = min(DOWN, RIGHT)

        h = f - Δ

        s = max(1, h)


        Therefore:

        dp[i][j] = max(1,
                       min(dp[i+1][j], dp[i][j+1])
                       - dungeon[i][j])


        Where:

        Δ = current cell value
        f = minimum health required by next cell
        h = raw health required at current cell
        s = final health required at current cell


        For Princess:

        f = 1

        dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1])

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length;
    let dp = Array.from({length:m}, ()=>new Array(n).fill(0));

    dp[m-1][n-1] = Math.max(1, 1-dungeon[m-1][n-1]);

    for(let i=m-1;i>=0;i--) {
        for(let j=n-1;j>=0;j--) {
            if(i === m-1 && j === n-1) {
                continue;
            }if(i === m-1) {
                let h = dp[i][j+1] - dungeon[i][j]
                dp[i][j] = Math.max(1, h);
            }else if(j === n-1) {
                let h = dp[i+1][j] - dungeon[i][j];
                dp[i][j] = Math.max(1, h);
            }else{
                let h = Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j];
                dp[i][j] = Math.max(1, h);
            }
        }
    }
    return dp[0][0];
};