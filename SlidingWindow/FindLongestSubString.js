// Write a function called findLongestSubstring, which accepts a string and returns the length of the 
// longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
    // create object with seen characters
    // declare variables: follower, leader, and max
    let seen = {}
    let follower = 0
    let leader = 0
    let max = 0
    // loop through and check if still distinct
    // if yes add to object
    while (leader < str.length ) {
            if (!(str[leader] in seen)) {
                seen[str[leader]] = 1
                max = Math.max(max, leader - follower + 1)
                leader++
            } else {
                seen[str[leader]] += 1
                while (seen[str[leader]] > 1) {
                    if (seen[str[follower]] === 1) {
                        delete seen[str[follower]]
                        follower++
                    }
                    else {
                        seen[str[follower]] -= 1
                        leader++
                        follower++
                    }    
                }
            }
        }
    return max
    }

console.log(findLongestSubstring('hahpaha'))
console.log(findLongestSubstring('thisishowwedoit'))
console.log(findLongestSubstring('longestsubstring'))