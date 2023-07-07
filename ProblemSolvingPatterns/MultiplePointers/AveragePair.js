// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals 
// the target average. There may be more than one pair that matches the average target.

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, n) {
    // exit point
    if (arr.length === 0 || arr.length === 1 && arr[0] !== n) return false
    // initialize variables
    let start = 0
    let end = arr.length - 1
    // while loop through
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === n) {
            return true
        } 
        if (avg < n) {
            start++
        } else {
            end--
        }
    }
    return false
}

console.log(averagePair([1,2,3],2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([],4))
