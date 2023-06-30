// write a function that accepts an array of ints and a number n 
// the function should calculate the max sum of n consecutive ints
// O(n) time complexity

function maxSubArraySum(arr, n) {
    if (arr.length === 0) return null 
    if (n > arr.length) return null
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
        tempSum = maxSum
    }
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))