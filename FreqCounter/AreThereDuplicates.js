// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of 
// arguments, and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates(...args) {
    // exit point
    if (args.length <= 1) return false
    // declare variables
    let obj = {}
    // populate obj
    for (let num of args) {
        obj[num] = (obj[num] || 0) + 1
        // once you have a value above 1 then exit and return true
        if (obj[num] > 1) {
            return true
        }
    }
    // otherwise return false
    return false
}

console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
console.log(areThereDuplicates(17, 18, 19))