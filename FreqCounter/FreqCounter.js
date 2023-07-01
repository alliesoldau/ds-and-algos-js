// check to see if the values of array1 are in array2, but squared

// O(n) time complexity
function same(arr1, arr2,) {
    if (arr1.length != arr2.length) {
        return false;
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key] ) {
            return false;
        }
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4]))


// check to see if the strings are valid anagrams
// all inputs are lowercase with no spaces, numbers, or characters

function validAnagram(arr1, arr2){
    // make sure they're the same length
    if (arr1.length !== arr2.length) {
          return false
    }
    
    // create an obj from arr1 that holds freq counts
    let obj1 = {}
    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1
    }
  
    // create an obj from arr2 that holds freq counts
    let obj2 = {}
    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1
    }
    
  // check that each key in arr1 exists in arr2
  // check that the value for each key in arr1 is equal in arr2
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false
        }
        if (obj1[key] != obj2[key]) {
            return false
        }
    }
      return true
  }

console.log(validAnagram('catt', 'ttac'))
