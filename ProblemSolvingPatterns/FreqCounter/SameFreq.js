// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {

    // initialize variables
    let arr1 = num1.toString()
    let arr2 = num2.toString()
    let obj1 = {}
    let obj2 = {}

    // exit pt
    if (arr1.length !== arr2.length) {
        return false
    }
    // run through arr1 and create an object that holds the freq of values
    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1
    }
    // do the same for arr2
    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1
    }
    // compare keys and values
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false
        }
        if (!(obj1[key] === obj2[key])) {
            return false
        }
    }
    return true
}

console.log(sameFrequency(1232, 1242))
console.log(sameFrequency(122276, 272621))