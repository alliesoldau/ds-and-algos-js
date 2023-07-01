// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    if (str[0] !== str[str.length-1]) return false
    if (str.length <= 1) return true
    return isPalindrome(str.slice(1, -1))
}


console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('tacocat')) // true