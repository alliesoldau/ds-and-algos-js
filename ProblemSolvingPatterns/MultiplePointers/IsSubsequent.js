// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words, 
// the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
    // exit point
    if (str2.length < str1.length) return false
    if (str1.length === 0 || str2.length === 0) return false
    // declare pointer variables
    let i = 0
    let j = 0
    // while loop through
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++
        // if this is true then we've gone thru every char in str1 and therefor we're all good
        if (i === str1.length) return true
        j++
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'))