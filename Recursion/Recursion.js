// COMMON RECURSION PIT FALLS:
//      * no base case
//      * forgetting to return or returning the wrong thing
//      * stack overflow


// dependant on the call stack (think like cup stacking)
// base case
// different input


function sumRange(num) {
    if (num === 1 ) return 1
    return num + sumRange(num-1)
}

console.log(sumRange(3))

    // return 3 + sumRange(2)
    //             return 2 + sumRange(1)
    //                         return 1

    // return 3 + sumRange(2)
    //             return 2 + 1

    // return 3 + 3

    // return 6




function factorial(num) {
    if (num === 1) return 1 // base case
    return (num * factorial(num - 1))
}

console.log(factorial(5))

    // return (5 * factorial(4))
    //             return (4 * factorial(3))
    //                         return (3 * factorial(2))
    //                                     return (2 * factorial(1))
    //                                                 return 1

    // return (5 * factorial(4))
    //             return (4 * factorial(3))
    //                         return (3 * factorial(2))    
    //                                     return (2 * 1)  
                                        
    // return (5 * factorial(4))
    //             return (4 * factorial(3))
    //                         return (3 * 2)    
                                   
    // return (5 * factorial(4))
    //             return (4 * 6)

    // return (5 * 24)

    // return (120)

