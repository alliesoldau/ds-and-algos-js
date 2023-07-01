// most primitives (booleans, numbers, undefined, null) are CONSTANT SPACE O(1)
// strings require O(n) space where n is the string length
// reference types are generally O(n) where n is the length (for arrays) or the
    // number of keys (for objects)

// O(1) space --> because we just have 2 numbers; total and i
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// O(n) space --> because the space is directly proportionate to the length of arr 
function double(arr) {
    let newArr= [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}