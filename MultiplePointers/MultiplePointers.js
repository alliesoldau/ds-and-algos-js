// find the 1st pair of numbers in a sorted array who's sum is 0
// time complexity O(n)
// space complexity O(1)

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right-- 
        } else {
            left++
        }
    }
    return null
}

console.log('sumZero:', sumZero([-4, -3, -2, -1, 2, 5, 10]))
console.log('sumZero:', sumZero([-4, -3, -2, -1, 5, 10]))


// count the unique values in a sorted array
// O(n) time complexity

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    if (arr.length === 1) {
        return 1
    }
    let follower = 0
    let leader = 1
    while (leader < arr.length) {
        if (arr[follower] !== arr[leader]) {
            follower++
            arr[follower] = arr[leader]
        }
        leader++
    }
    return follower + 1
}

console.log('countUniqueValues:', countUniqueValues([-2, 0, 1, 1, 3, 4, 6, 6, 6, 6, 10]))
console.log('countUniqueValues:', countUniqueValues([0, 0, 0, 4, 5, 7, 9, 110]))