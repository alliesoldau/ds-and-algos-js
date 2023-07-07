// a special sorting algorithm that works on lists of numbers
// it never makes comparisons between elements!
// it exploits the fact that information about the size of a number is encoded in the number of digits
// more digits means a bigger number
// we bucket our numbers based off of of the right-most digit of the number (eg: 602 --> 2); these are unsorted buckets
// then we place them back into the array with the numbers grouped by the buckets
// then we repeat the process by looking at the digit of the number at right - 1
// the number of times we have the bucket the numbers depends on how many digits our max number has (eg: max of 1485 has 4 digits)

// O(nk) time complexity
// O(n + k) space complexity

// radix sort helper functions

// returns the digit in num at the given place value (eg: getDigit(12345, 0) returns 5)
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// returns how many digits are in a number
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// returns which number has the most digits in a list of numbers
function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        // make an array of 10 (since we're using base 10) empty subarrays
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        // console.log('digitBuckets', digitBuckets)
        nums = [].concat(...digitBuckets)
        // console.log('nums', nums)
    }
    console.log(nums)
    return nums
}

radixSort([23, 345, 5467, 12, 2345, 9852])