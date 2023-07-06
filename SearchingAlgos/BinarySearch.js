// much faster than linear search
// rather than eliminating one element at a time, you can eliminate *half* of the remaining elements at a time
// ONLY works on sorted arrays
// O(logn) time complexity

// divide and conquer

// let's search for 15
//  [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
//      [1, 3, 4, 6, 8, 9, 11] --> 11 is too small, so this array gets eliminated
//      & [12, 15, 16, 17, 18, 19]
//          [12, 15, 16]
//          & [17, 18, 19] --> 17 is too big, so this array gets eliminated
//              15 is in the middle, we found it!


// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. 
// Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

function binarySearch(arr, val) {
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((left + right) / 2)

    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2)
    }
    return arr[middle] === val ? middle : -1
}

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1
