// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of 
// arguments, and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// this only works if the args are of the same type bc of the sort function

function areThereDuplicates(...args) {
    args.sort();
    // exit point
    if (args.length <= 1) return false
    // initialize variables
    let follower = 0
    let leader = 1
    // loop through arg length and compare
    while (leader < args.length) {
        if (args[follower] === args[leader]) {
            return true
        }
        // move pointers
        follower++
        leader++
    }
    // else false
    return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))