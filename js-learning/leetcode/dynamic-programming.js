// 1. 斐波那契数列
// function solution(n) {
//     if (n === 0 || n === 1) return 1
//     let dp = [1, 1]
//     for (let i = 2; i < n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }
//     return dp[n - 1]
// }

// console.log(solution(4))

// 2. 爬楼梯
function solution(n) {
    if (n === 1 || n === 2) return n
    let dp = [1, 2]
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
}

console.log(solution(4))


// 3. 背包问题